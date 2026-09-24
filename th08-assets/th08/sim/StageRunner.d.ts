/**
 * Main simulation orchestrator: one frame = one call to tick().
 *
 * Wires together: TimelineRunner, EnemyManager, BulletPool, PlayerSim,
 * ItemPool, and Collision. This is the core game loop, deterministic
 * given the same Rng seed and input sequence.
 */
import { type GameState } from './GameState';
import type { EclFile } from '../format/EclFile';
import { EnemyManager, type SubFactory } from './EnemyManager';
import type { TimePopup } from './EnemyManager';
import { TimelineRunner } from './TimelineRunner';
import { BulletPool } from './BulletPool';
import type { Bullet } from './BulletPool';
import type { BulletWorld, SeTick } from './BulletTransform';
import { LaserPool } from './LaserPool';
import type { EffectPool } from './EffectPool';
import type { Laser } from './LaserPool';
import { PlayerSim, type PlayerInput } from './PlayerSim';
import { type ShotView } from './ShotDamage';
import { ItemPool, type CollectResult } from './ItemPool';
import { type CollisionStats } from './Collision';
import { OptionSystem } from './PlayerOptions';
import { PlayerShotPool } from './PlayerShots';
import { type PlayerAnmRuntime, type PlayerWeaponTables } from '../data/playerWeaponData';
import { type BombBackdrop, type BombState, type BombZone } from './BombSystem';
import type { EnemySlot, GaugeSlice, SlotFx, SpellResult } from './EnemySlot';
import type { AnmPack } from '../../engine/anm/AnmPack';
export interface StageRunnerConfig {
    gs: GameState;
    ecl: EclFile;
    subFactory: SubFactory;
    timelineIndex?: number;
    pointItemValueLine?: number;
    /** Half of the item box, `plyNNa.sht + 0x18 / 2`. */
    itemPickupHalfExtent?: number;
    /** Half of the hit box, `plyNNa.sht + 0x0C / 2`. */
    hitboxHalfExtent?: number;
    /** Half of the graze box, `plyNNa.sht + 0x10 / 2`. */
    grazeHalfExtent?: number;
    /** Unfocused axis speed, `plyNNa.sht + 0x24`. */
    fastSpeed?: number;
    /** Per-axis diagonal speed while unfocused, `plyNNa.sht + 0x2C`. */
    fastDiagonalSpeed?: number;
    /** Focused axis speed, read from the partner's `plyNNas.sht + 0x28`. */
    slowSpeed?: number;
    /** Per-axis diagonal speed while focused, `plyNNas.sht + 0x30`. */
    slowDiagonalSpeed?: number;
    /** `plyNNa.sht + 0x14`: how fast grabbed items home in. */
    itemGrabSpeed?: number;
    /** `plyNNa.sht + 0x34`: clock on freely falling items, unfocused. */
    itemTimeScale?: number;
    /** `plyNNas.sht + 0x34`: the same clock while the partner is flown. */
    itemTimeScaleFocused?: number;
    /**
     * `enemy.anm` bytecode, so the scripts the ECL selects actually run. Without
     * it enemies still move (that is the ECL) but keep the approximated sprite
     * cycle instead of the retail spin, scale and fade.
     */
    anmPack?: AnmPack;
    /**
     * The stage's own `stgNNenm.anm`, which ops 58-61 address against, and the
     * manifest name the renderer uses to find its atlas page.
     */
    anmPackAlt?: AnmPack;
    /**
     * The host's retail effect pool, built where the ANM tables are known. Slots spawn into
     * it through ECL 128/139/140/174; the runner only ticks and drains it.
     */
    effectPool?: EffectPool | null;
    anmStageName?: string;
    /**
     * Collision radius in pixels for an ECL bullet type. The host owns that table
     * because it is derived from the `etama.anm` sprite heights; without it every
     * type collides at the same middle-of-the-range circle.
     */
    bulletRadiusFor?: (type: number) => number;
    /** Drawn half-size per bullet, which sets the off-field cull margin. */
    bulletSizeFor?: (type: number, color: number) => number;
}
/** Everything the HUD needs to draw the life bar an ECL script declared. */
export interface EclBossGauge {
    /** Current HP of the bar on screen. */
    hp: number;
    maxHp: number;
    /** Extra bars still held in reserve (op 148). */
    pips: number;
    /** Coloured segments from op 158, indexed by slice. */
    slices: GaugeSlice[];
    /** Frames left on the spell-card countdown; 0 = untimed. */
    timerFrames: number;
    x: number;
    y: number;
}
/**
 * `Player.cpp:707` hands `FUN_00425870` the id `22`, and `g_EffectTemplates[22]` (read out
 * of the shipped `th08.exe`, and mirrored by `effect-templates.ref.json`) is script 54 of
 * `etama.anm`: cell 218, alpha 0 → 255 over 20 frames, spinning at a random angular
 * velocity, parked on `STOP` until the release edge sends interrupt 1 and fades it out
 * over 30. This is the retail 判定点光环, and it is the only art focus mode draws.
 */
export declare const HITBOX_GLOW_TEMPLATE = 22;
/**
 * The third argument of that same call: record 2 of the retail pool's named bank. The
 * glow is not allocated from the rotating 512, it owns a record of its own
 * (`EffectManager.cpp:269-280`), which is what lets a second Shift press overwrite a ring
 * that is still fading out instead of drawing two.
 */
export declare const HITBOX_GLOW_SLOT = 2;
/**
 * `Player.cpp:696-703` and `:760-767`: the two rings that mark a pair changing weapon.
 *
 * Taking focus spawns template 29 - `etama.anm` script 58, cell 193 with z-write off and
 * additive blend, alpha 0 → 255 while the scale runs 5 → 0.4 - which reads as a ring
 * collapsing onto the ship. Letting go spawns template 28 (script 57: the same cell, alpha
 * → 0 while the scale runs 0.5 → 5), which reads as it bursting back out. Both sit inside
 * the `shotType < 4` guard, so a solo - which never changes weapon - never gets one, and
 * both are gated on `Player+8 >= 4`, the frames since the last edge, so flicking the key
 * cannot spam them.
 */
export declare const STYLE_SWITCH_ON_TEMPLATE = 29;
export declare const STYLE_SWITCH_OFF_TEMPLATE = 28;
/** Retail's spawn colours, `0x80FF8080` on the press and `0x808080FF` on the release. */
export declare const STYLE_SWITCH_ON_COLOR: number;
export declare const STYLE_SWITCH_OFF_COLOR: number;
/** `Player+8 >= 4` at `:701` and `:765` - frames the other state had to last first. */
export declare const STYLE_SWITCH_EDGE_GATE = 4;
export declare class StageRunner {
    readonly gs: GameState;
    readonly enemies: EnemyManager;
    readonly bullets: BulletPool;
    /** ECL 114/115 beams, kept beside the bullets the way retail keeps them. */
    readonly lasers: LaserPool;
    readonly player: PlayerSim;
    readonly items: ItemPool;
    readonly timeline: TimelineRunner;
    /** Retail's `EffectManager`, one per stage the way retail registers one per stage. */
    readonly effectPool: EffectPool | null;
    /**
     * Pair tests the last frame really ran, for the debug overlay. Every pass --
     * ship vs bullets, ship vs beams, shots vs enemies -- adds to it, and it resets
     * with the frame, so the number is a per-frame cost and not a running total.
     */
    readonly collisionStats: CollisionStats;
    /**
     * `Player.optionStates[4]`: the 式神, blades and familiars the partner flies.
     *
     * They are the origins half of the weapon lives at (`entry+0x20` picks which of
     * the four slots a shot starts from), so the firing layer below cannot exist
     * without them, and 紫's homing 式神 - the effect the Shift key is famous for -
     * is exactly one armed slot plus the ten `.sht` entries that read it.
     */
    readonly options: OptionSystem;
    /** `Player.shots[128]`, fired from the retail `.sht` chains. */
    readonly shots: PlayerShotPool;
    /** The two `.sht` files `g_GameManager.shotType` loads, per `g_Player1ShtFiles`. */
    readonly weapon: PlayerWeaponTables;
    /** The `playerNN.anm` pack whose scripts the shot VMs run. */
    readonly anm: PlayerAnmRuntime | null;
    /** `Player.tailPosition0`, the point 霊夢's charms bend toward (`FUN_00450320`). */
    tailPosition: {
        x: number;
        y: number;
        valid: boolean;
    };
    /** Shot sounds the firing layer asked for this frame, in `entry+0x28` order. */
    lastShotSounds: Array<{
        index: number;
        x: number;
    }>;
    private pointItemValueLine;
    private itemPickupHalfExtent;
    /** Collected items this frame (for rendering / HUD). */
    lastCollected: CollectResult[];
    /** Graze count this frame. */
    lastGraze: number;
    /**
     * The enemy bullets whose box overlapped the ship this frame, and the same for
     * lasers. Published before the landed shots are retired, so a host can measure
     * how deep the overlap was. The retail collision size is not readable from the
     * recompile (it lives in an unnamed blob), so this is the seam the calibration
     * against ZUN's own recordings reads.
     */
    lastHits: Bullet[];
    lastLaserHits: Laser[];
    activeBomb: BombState | null;
    /** Zones the running card wants drawn this frame. */
    lastBombZones: BombZone[];
    /** The card's expanding bullet-cancel ring, or null while none is live. */
    bombCancel: {
        x: number;
        y: number;
        radius: number;
        alpha: number;
    } | null;
    /**
     * `g_EclScriptedGlobalUpdateFreeze` (`EclGlobals.cpp:116`), retail's own
     * cutscene channel: the ECL `ex 26` raises it, and while it stands the bullets
     * stop integrating (`BulletManager.cpp:853-854`) and enemy scripts lose their
     * clock (`EnemyManagerUpdate.cpp:980-981`). The field hangs in the air.
     *
     * The host raises it for a conversation. Retail never needs to say so — its
     * stage-opening talk scenes are scripted onto an empty field, and the same call
     * already takes the shot and bomb keys out of the player's hands
     * (`Gui::IsDialogPresent`, `Player.cpp:921`, `:1204`) — but a port whose script
     * pacing differs needs the pause to be real, or a line of dialogue becomes a
     * death sentence.
     */
    worldFreeze: boolean;
    private lastWorldFreeze;
    /**
     * What the running card paints over the backdrop this frame: the plate behind the
     * sprites, and any full-screen square in front of them. `null` on both once the
     * card comes down, which is when retail's draw callback stops running.
     */
    bombBackdrop: BombBackdrop;
    /** Set on the frame a card's zones actually connected. */
    bombConnected: boolean;
    /**
     * Set for the one frame the ship reaches max power, with the number of P items
     * that turned into point items on the way (`ItemManager.cpp:662-676`). The host
     * spends it on the "Full Power Mode!" banner and one sparkle each.
     */
    fullPowerTriggered: boolean;
    fullPowerSparkles: number;
    /** Host hooks for the bullet transform machine. */
    private bulletRadiusFor;
    private bulletSizeFor;
    private bulletWorldCache;
    /** Enemy slots destroyed during the current frame. */
    lastDeaths: EnemySlot[];
    /**
     * What the transform handlers read: the ship, for the records that re-aim or
     * split, the rng for the random aim modes, and the manager's own
     * sound queue, so a record that arms mid-flight is audible like it is in the game.
     */
    bulletWorld(): BulletWorld;
    /** Spell cards that ended during the current frame, for the host's HUD. */
    lastSpellResults: SpellResult[];
    /**
     * `CreateTimePopup` requests raised during the frame, which the host floats as digit
     * strips. The card-capture chain payoff is the only author.
     */
    lastPopups: TimePopup[];
    /**
     * QA-only: swallow the hit that would take a life.
     *
     * An automation context cannot dodge, so every deep link into a boss fight ends
     * in a game over before the thing worth screenshotting appears. This keeps the
     * collision, graze and bullet-erase passes running and only declines the life
     * loss. Never set outside `?nofail`.
     */
    debugNoFail: boolean;
    /**
     * Apply the ship's live shots for one frame, following the retail order exactly.
     *
     * `Player::FUN_00451670` is written *enemy-first*: for each enemy it walks all 128
     * shot slots, sums every overlapping shot, and only then does the caller cap the
     * frame, pay the damage score, and divide by seven if a spell card is live. The
     * previous shape here -- one shot looking for one enemy, each hit capped on its
     * own -- could not express either half of that, so a volley that landed together
     * scored seven separate hits and a card took plain-damage.
     */
    damageEnemiesAt(shots: ReadonlyArray<ShotView>): void;
    /**
     * Turn the slots the damage passes just killed into drops exactly once, and
     * remember them so the host can play the death burst / score popup.
     */
    private settleDeaths;
    /**
     * Pay out the cards the two drivers just ended. Only a captured card pays:
     * `Spellcard::EndSpell` hands over the bonus that is still standing
     * (`bonusProgress`) and turns the time left on the plate into time orbs,
     * where a full-speed capture is worth 1000 and a last-second one 100
     * (`Spellcard.cpp:1073-1093`). A card that ran its clock out pays nothing and
     * has already lost its bullets in the driver itself.
     */
    private bankSpellResults;
    /** Visual requests the scripts made during the current frame. */
    get frameFx(): readonly SlotFx[];
    /** Sound requests from the frame just ticked, with the x that pans each one. */
    get frameSfx(): readonly SeTick[];
    /** Boss life bar declared by the running script, or null while none is live. */
    get bossGauge(): EclBossGauge | null;
    constructor(config: StageRunnerConfig);
    /** Live enemy slots, as the damage sinks a card can lock onto. */
    private bombTargets;
    /** The cached `PlayerShotWorld`: every field is a getter onto live sim state. */
    private shipWorldValue;
    /** The cached `OptionWorld`, same shape. */
    private optionWorldValue;
    /** Reused views so the aim/homing passes allocate nothing on a firing frame. */
    private aimViews;
    private candidateViews;
    private optionPositionsView;
    /** `g_GuiMessageInputCurrent & 1`, kept for the option chase test. */
    private shootHeld;
    /** `g_Player.bombState.frameStop`, the strict stopped-clock flag. */
    private frameStopClock;
    /**
     * The ship's own weapon for one frame: aim tracking, the partner's options, the
     * `.sht` firing walk, and the integrator that moves the result.
     *
     * The order is retail's own calc chain, read off the four functions rather than
     * guessed: `Player::Update` resolves the focus byte and arms or releases the
     * options (`Player.cpp:665-781`), the option pass walks them, `FUN_00451500`
     * decides whether this frame is a firing frame and hands the chain to
     * `FUN_00450f60`, and `FUN_00451150` then moves what is live. Damage is a later
     * pass, and the two passes disagree by design: retail asks the enemies, not the
     * shots, whether anything was hit.
     */
    private tickShipWeapon;
    /** `Player+0xBE834`: the one live 判定点光环 the ship holds a pointer to. */
    private hitboxGlow;
    /** The latch the focus edges are taken from - retail reads `Player+3`, we read focus. */
    private glowFocused;
    /** `Player+8`: frames since the last focus edge, counting in whichever state we are in. */
    private focusEdgeFrames;
    /**
     * The whole of retail's focus-edge block: `Player.cpp:696-708` on the press and
     * `:760-772` on the release.
     *
     * The press spawns template 22 once - retail only spawns when its own pointer is NULL,
     * and the spawn goes to a named record rather than to the rotating pool, so a second
     * press takes the record back from a glow that is still fading. The release does not
     * delete the effect: it sends interrupt 1, which is the branch of script 54 that fades
     * alpha to 0 over 30 frames and then `DELETE`s. That is why letting go of Shift fades
     * the ring instead of cutting it, and why the pointer is cleared on the same frame - the
     * ship is free to light a new one.
     *
     * The two style-switch rings are the other half of the same block, and they are the
     * whole of what a pair *looks* like when it changes weapon: the press collapses one in
     * (`:701-702`, and only once the ship has been unfocused for four frames), the release
     * throws it back out (`:765-766`). The glow has no such gate and no such shot-type guard,
     * which is why a solo still gets a 判定点光环 when it slows down but never a ring.
     */
    private tickFocusEdgeEffects;
    /** The four option positions, nulled out for slots retail leaves inactive. */
    private optionPositions;
    private optionWorld;
    private shipWorld;
    /**
     * The live shots as the damage pass wants them, one view per slot that can still
     * land a hit (`FUN_00451670:3388`) with the shot's own `.sht` box.
     */
    shotViews(): ShotView[];
    /** Run one game frame. */
    tick(input: PlayerInput): void;
    /**
     * Stage-end sweep: everything still on the field flies to the player and is
     * counted at full value, exactly like the retail clear bonus.
     */
    sweepItems(): void;
    /**
     * `ItemManager.cpp:425-434`: cap the power, cancel the bullets, convert every P
     * item on the field, and let the host know the banner is due.
     */
    private raiseFullPower;
    private applyCollected;
    get isFinished(): boolean;
    /** 0 = pinned human, 0.5 = neutral, 1 = pinned youkai. Drives the HUD meter. */
    get youkaiMeter(): number;
    /** True while the meter sits at either extreme, which is what paints the aura. */
    get youkaiExtreme(): boolean;
}
//# sourceMappingURL=StageRunner.d.ts.map