/**
 * Touhou 8 player simulation, ported from Player.cpp.
 *
 * Frame-exact state machine: alive → dying (30f) → respawning (30f+60f cancel)
 * → alive (240f blink invuln). All timing from the reference decomp.
 *
 * Uses the Rng for nothing directly (player is deterministic given inputs),
 * but wires through GameState so the bomb damage path can access rank.
 */
import type { GameState } from './GameState';
import { MOVE_BITS, movementAxisSpeeds, movementDirectionIndex } from '../../engine/core/Movement';
import { type ShipTransform } from '../../touhou-common/player/DeathCycle';
import { YoukaiGauge } from './YoukaiGauge';
export type PlayerState = 'alive' | 'dying' | 'respawning' | 'dead';
/** Constants from the reference (Player.cpp + plyNNa.sht). */
export declare const DEATH_FRAMES = 30;
export declare const SPAWN_FRAMES = 30;
export declare const CANCEL_FRAMES = 60;
export declare const INITIAL_BOMBS = 3;
export declare const DEATH_POWER_COST = 16;
export declare const DEATH_POWER_FLOOR = 16;
export declare const MAX_POWER = 128;
/** Default `plyNNa.sht + 0x14`. Marisa's pair reads 12; everyone else 10. */
export declare const ITEM_GRAB_DEFAULT = 10;
/**
 * Half of the hit box for the default (Reimu) `.sht`: `ply00a.sht + 0x0C` reads
 * 1.65 and `Player::AddedCallback` halves it (`Player.cpp:1619-1622`).
 */
export declare const HITBOX_HALF_DEFAULT = 0.825;
/** Half of the graze box, `ply00a.sht + 0x10 / 2` (`Player.cpp:1624-1627`). */
export declare const GRAZE_HALF_DEFAULT = 1.4;
/** Half of the item box, `ply00a.sht + 0x18 / 2` (`Player.cpp:1629-1632`). */
export declare const ITEM_BOX_HALF_DEFAULT = 12;
export declare const POWER_THRESHOLDS: readonly [8, 24, 48, 80, 128];
export declare const MAX_HIT_DAMAGE = 70;
/**
 * Frames in a stance before the hitbox appears with it (`Player.cpp:716, 778`).
 * Retail deliberately delays the dot so tapping Shift never flashes one.
 */
export declare const HITBOX_DELAY_FRAMES = 7;
/** Frames the previous stance must have lasted to earn the switch puff (`:701, :765`). */
export declare const STANCE_PUFF_FRAMES = 4;
/**
 * Frames a stance must have settled before the 妖率计 will move at all
 * (`Player.cpp:924`, `+8 >= 30`). Flipping to the partner therefore costs half a
 * second of meter, which is what keeps a stance-dancer from parking the needle at
 * either extreme.
 */
export declare const STANCE_METER_DELAY_FRAMES = 30;
/** Frames the swap flourish stays on screen after 低速 takes over (`:696, :760`). */
export declare const SWITCH_FLASH_FRAMES = 14;
/**
 * The eight-way resolver is an engine primitive (`core/Movement.ts`), not a TH08
 * idea, so it is re-exported rather than duplicated: the sim reads its movement
 * vocabulary from one file, and the presentation layer reaches the same function
 * without depending on the game.
 */
export { MOVE_BITS, movementAxisSpeeds, movementDirectionIndex };
export interface PlayerInput {
    dx: number;
    dy: number;
    shoot: boolean;
    bomb: boolean;
    slow: boolean;
    /**
     * The raw `g_CurFrameInput` direction bits. When present they win over `dx` /
     * `dy`, because the eight-way index below needs to see *which* keys are held,
     * not the difference between them: up-plus-down is down to retail and stillness
     * to a delta. A replay always supplies this.
     */
    dirBits?: number;
    /**
     * Optional world-space point to fly at, used by pointer steering (touch drag
     * and the opt-in mouse mode). When present it wins over `dx` / `dy`, and the
     * ship moves straight at it at the full focus speed instead of the 8-way
     * keyboard grid.
     */
    moveTarget?: {
        x: number;
        y: number;
    } | null;
}
export declare class PlayerSim {
    x: number;
    y: number;
    state: PlayerState;
    stateTimer: number;
    cancelTimer: number;
    invulnTimer: number;
    /**
     * `0xE2A68`: frames left of the deathbomb grace window. The ship waits on the
     * death spot for this long before the dissolve starts, and a bomb press inside
     * it comes out as the partner's deathbomb variant.
     */
    graceTimer: number;
    /** `field_4`: raised every frame the grace window is open, and read by `acceptBomb`. */
    deathbombArmed: boolean;
    /** Set for the tick on which a press came out of the grace window, i.e. a deathbomb. */
    deathbomb: boolean;
    /**
     * Set for one tick on the frame the window runs out, which is the frame retail
     * pays the power bill and throws the drop pile (`FUN_0044cbf0:1318-1369`). The
     * stage reads it to spawn items; a ship that deathbombs never sees it fire.
     */
    deathSettled: boolean;
    /** Frames into the 30-frame death dissolve (`this->timer` while DYING). */
    deathTimer: number;
    /**
     * The `player->timer` that `FUN_0040be30` arms in the same breath as the card's
     * duration (`PlayerBomb.cpp:170-171`), so it outlives the card by 30..60 frames.
     * While it runs the ship is in `PLAYER_STATE_DEAD`: it stops being drawn as the
     * normal sprite and goes red for two frames of every eight (`Player.cpp:1457-1479`).
     */
    bombStateTimer: number;
    /** The red half of that flash, `timer % 8 < 2`. */
    get bombStateFlash(): boolean;
    /**
     * `playerState != PLAYER_STATE_ALIVE` inside the hit test.
     *
     * `FUN_0040be30` puts the ship in `PLAYER_STATE_DEAD` in the same call that arms
     * the card (`PlayerBomb.cpp:172`), and `Player::FUN_0044a230` / `FUN_0044a360`
     * answer a hit in that state by returning 1 *without* reaching `Die()`
     * (`Player.cpp:335-336`, `:362-363`). So the bomb's real protection is this window
     * -- the whole card plus the 30..60 frames of red flash after it -- and not the
     * size of its cancel circle. Grazing keeps working (the graze test only refuses
     * DYING and SPAWNING, `:385`), and so does moving and shooting (`:1093`).
     */
    get bombImmune(): boolean;
    /**
     * `0xE2A70`: frames of full-screen bullet cancel left. Retail's only post-respawn
     * protection -- there is no invulnerability timer in the reference at all.
     */
    get graceFrames(): number;
    memberIndex: 0 | 1;
    switchFlash: number;
    /**
     * `field_3`: focus (Shift) held. Retail's only real use of the button, and the
     * thing that swaps the ship between its two animation stances.
     */
    isSlow: boolean;
    /**
     * The byte at `Player+5` (`Player.hpp:157`), which retail names `isYoukai` and
     * reads back through `Player::IsYoukai()`. It is drawn as the hitbox dot, and it
     * is also the 阴阳 switch the stage scripts test -- one field, two consumers. The
     * seven-frame lag is why the dot flickers in instead of snapping on with the key
     * (`Player.cpp:716-717, 778-779`).
     */
    hitboxVisible: boolean;
    /** `field_8`: frames spent in the current stance; gates the dot and the puff. */
    stanceTimer: number;
    /** One-tick flags for the 低速 entry/exit puffs (effects 29 and 28). */
    focusEntered: boolean;
    focusExited: boolean;
    /**
     * Set by `StageRunner` for the frames a conversation is on screen. Retail hangs
     * the whole 妖率計 block on `!Gui::IsDialogPresent()` (`Player.cpp:924`), so the
     * meter holds its breath across a talk scene exactly as it does across a card.
     */
    holdGauge: boolean;
    lives: number;
    bombs: number;
    power: number;
    maxPower: number;
    powerLost: number;
    score: number;
    graze: number;
    /**
     * The four move speeds, defaulted to `ply00a`/`ply00as` and overwritten per team
     * by the stage loader. Retail keeps four figures because the eight-way index
     * gives diagonals their own per-axis speed; see `movementAxisSpeeds`.
     */
    fastSpeed: number;
    slowSpeed: number;
    /**
     * Per-axis component of a diagonal move at full speed (`plyNNa.sht + 0x2C`).
     * Retail stores this beside the axis speed rather than deriving it, and every
     * shipped table happens to hold `fastSpeed / sqrt 2`.
     */
    fastDiagonalSpeed: number;
    /** Per-axis component of a diagonal move while focused (`+ 0x30`). */
    slowDiagonalSpeed: number;
    /** `plyNNa.sht + 0x14`: how fast a grabbed item flies at the ship. */
    itemGrabSpeed: number;
    /**
     * `plyNNa.sht + 0x34`: the clock on items that are still falling freely, read
     * off the primary table while unfocused (`ItemManager.cpp:207-209`).
     */
    itemTimeScale: number;
    /** The same float off the partner's table, used while focused. */
    itemTimeScaleFocused: number;
    /** Half of the hit box (`plyNNa.sht + 0x0C / 2`); the stage overwrites it per team. */
    hitboxHalfExtent: number;
    /** Half of the graze box (`plyNNa.sht + 0x10 / 2`). */
    grazeHalfExtent: number;
    /** Half of the item box (`plyNNa.sht + 0x18 / 2`); items carry the same box. */
    itemPickupHalfExtent: number;
    /**
     * `Player.cpp:791-872` picks the ship's animation from the *intended* horizontal
     * speed (`field_0xE2A9C`), never from how far the sprite actually travelled. The
     * renderer's lean machine therefore reads these, and retail's own test is a bare
     * sign compare with no dead zone. Deriving the lean from the position delta
     * instead feeds sub-pixel noise around zero, which retriggers `main2left` /
     * `left2main` every other frame -- that is the idle twitch.
     */
    leanX: number;
    leanY: number;
    /**
     * `Player+0xE2A98`, `movementDirection`: the nine-way index the input bits resolve
     * to. 妖梦's blade turns to face it (`:2410`, `:2501`), and the walk animation's lean
     * is derived from the same value, so the two cannot disagree.
     */
    movementDirection: number;
    /**
     * Whether the ship's own velocity is non-zero, which is `:985`'s test for walking the
     * position history. A pointer has no direction bits of its own, so here the travel
     * stands in for them.
     */
    moving: boolean;
    shootCooldown: number;
    shotLevel: number;
    /** Set for exactly one tick when a bomb was successfully activated. */
    bombTriggered: boolean;
    /**
     * 永夜抄's human/youkai meter. Retail drives it from held fire and the flying
     * form, so it lives with the player rather than the stage.
     */
    readonly gauge: YoukaiGauge;
    /**
     * `timerE2ADC`: retail parks this at 50 when a boss-attached enemy dies,
     * and 时符 only move the meter once it has run out.
     */
    private killHoldoff;
    /**
     * `g_Player.timerE2AC4` (`Player.hpp:196`): where the ship stands in the 20-frame
     * fire window, with -1 meaning the window is shut.
     *
     * `Player.cpp:919` re-opens it whenever fire is held and no dialogue is up, and
     * `FUN_00451500` (`:3289-3352`) walks it one step a frame and closes it at twenty.
     * Two things read the result: the 妖率 push at `:928` only runs while it is open,
     * and a hovering 时符 releases the field as soon as it shuts
     * (`ItemManager.cpp:236`). That is the difference between orbs piling up while you
     * shoot and the whole screen coming to you the moment you stop.
     *
     * Retail also freezes the walk inside a card whose `Player+0xFE0` has reached 4
     * (`FUN_00451d50`, `Player.cpp:3510-3514`). Our card driver does not carry that
     * sub-state, so that one freeze is not modelled.
     */
    shotWindowTimer: number;
    /** Whether the fire window is open, which is the only form the read takes. */
    get shotWindowOpen(): boolean;
    private gs;
    constructor(gs: GameState);
    /**
     * One frame of `Player.cpp:919` then `FUN_00451500`, in that order: the button
     * re-arms a shut window before the walk runs, the walk closes it at twenty, a held
     * button re-opens it in the very frame it closes, and a ship that is dying or on
     * its way back in always leaves it shut (`:3344-3347`, where `1` is SPAWNING and
     * `2` is DYING).
     *
     * The walk does not start until twenty frames into the stage, which is retail's way
     * of skipping the entrance animation (`unk3ddc0 < 20` at `:3292`).
     */
    private stepShotWindow;
    /** Sync state back to GameState. */
    syncToGameState(): void;
    /** Update shot level from power thresholds. */
    private updateShotLevel;
    /** Process one frame of input + state machine. */
    tick(input: PlayerInput): void;
    /**
     * The dying clock: the grace window first, then the 30-frame dissolve.
     * `FUN_0044cbf0` takes the countdown branch while `0xE2A68` is non-zero and only
     * falls through to the animation once it reaches zero, so the ship really does
     * sit and glow white for a beat before it goes.
     */
    private tickDying;
    /** Take a hit. Returns true if the hit connected. */
    hit(): boolean;
    /**
     * The frame the death stops being cancellable (`Player.cpp:1318-1369`).
     *
     * Power is only paid here, which is the whole reason a deathbomb is worth two
     * bombs: the card buys the ship its power bar back for as long as the window
     * lasts. Out of lives, retail takes the entire bar instead of a 16-point slice.
     */
    private settleDeath;
    /** Spend a life and fly back in. Returns false on game over. */
    respawn(): boolean;
    /**
     * Spend a bomb. Retail buys no invulnerability with it (`acceptBomb` never
     * touches an invuln counter); what a card buys is its own cancel sweep, and the
     * only frames it can steal are the ones the enemy spends inside that sweep.
     */
    useBomb(): boolean;
    /** `acceptBomb` (`Player.cpp:1204-1296`), folded into one press. */
    private tryBomb;
    /** Bombs the card that would fire right now costs (`acceptBomb:1244-1271`). */
    get bombCost(): number;
    /** What `respawn()` refills the bomb count to: `plyNNa.sht + 4`. */
    get deathbombRefill(): number;
    /**
     * The ship's scale/blend pose for the grace window, the dissolve and the
     * spawn-in, or null when it draws as usual.
     */
    get shipPose(): ShipTransform | null;
    /**
     * `Player::IsYoukai()` (`PlayerBomb.cpp:36-39`) -- the settled side, read by ECL
     * operand 0x2771, by the enemy interrupt that decides which of a card's two
     * bullet sets is live (`EnemyManager.cpp:939-973`), and by the graze push into
     * the meter (`Player.cpp:507-508`).
     *
     * Retail assigns this byte in exactly one place, the focus block: seven settled
     * frames of low-speed raise it and seven settled frames upright clear it, so it
     * is literally the same byte as {@link hitboxVisible}. Solos then overwrite it
     * every frame with their own half of the pair (`Player.cpp:783-789`) -- a solo
     * has no partner to trade stances with, so its side is fixed by the table index.
     */
    get isYoukai(): boolean;
    /**
     * `EnemyManager.cpp:363-369`: a boss-attached kill drags the meter a twelfth
     * of the way back to neutral and opens a 50-frame hold-off on 时符 gauge gains.
     */
    onEnemyKilled(): void;
    /**
     * `ItemManager.cpp:638-642`: a 时符 pushes the meter by 111 toward the side that
     * is flying. Note which byte that test is on: retail reads `Player+3`, the focus
     * flag itself, not the settled side -- so the push lands on the frame Shift goes
     * down, seven frames before {@link isYoukai} would agree.
     */
    onTimeOrbCollected(): void;
    /**
     * `Player.cpp:487-508`: what one graze is worth right now. The human side of
     * the meter counts grazes for more, the youkai side pays more score, and grazing
     * in youkai form feeds the meter.
     */
    grazeReward(): {
        grazeGain: number;
        score: number;
    };
    /**
     * `GameManager::AddScore` (`GameManager.cpp:191-194`), the one door every point in
     * the game walks through: `globals->score += score / 10`, integer division.
     *
     * That `/ 10` is why retail's tables read the way they do - a graze is 2000 or 4000
     * (`Player.cpp:505`) and buys 200 or 400 on the read-out; an enemy's own score field
     * is 100 and pays 10; 慧音's cards carry 20,000,000 and pay 2,000,000. Every caller
     * below passes retail's raw argument, so the division happens exactly once, here.
     * The 点 path is the exception by construction: `ItemPool` publishes the raw number
     * as `popup` for the float and the divided one as `score` (`ItemPool.ts:519`), so
     * those arrive already scaled and must not come through this door.
     */
    addScore(raw: number): void;
    /**
     * `Player.cpp:510-521`: what a graze is worth to the youkai side beyond the
     * number -- with the meter at its youkai extreme and a stage boss registered,
     * every single graze prints a 时符. A live spell card prints a second one, and a
     * team prints a third, because the partner's half of the pair collects in
     * parallel; a solo youkai has no partner and so loses that third (`:518`). A
     * laser graze asks for the extras to be suppressed (`Player.cpp:466` passes
     * `suppressExtraItems = 1`), and the first 时符 is not one of the extras.
     *
     * The gate at `:510` reads `!IsSoloHuman() || shotType == 10`, which looks odd
     * until you notice 妖夢 is the one solo whose shot type keeps the youkai reward:
     * `shotType == 10` is her slot in the table.
     */
    grazeTimeOrbs(bossPresent: boolean, spellcardActive: boolean, suppressExtras?: boolean): number;
    /** Add power, clamped to maxPower. Returns overflow. */
    addPower(amount: number): number;
    /** Continue (retry): reset resources, keep stage. */
    continue_(): void;
    /** Reset for next stage (carry resources). */
    resetForStage(): void;
    get isFlying(): boolean;
    get isInvulnerable(): boolean;
    /** Blink pattern during invulnerability: visible except frame%8 < 2 (red flash). */
    get isBlinkRed(): boolean;
}
//# sourceMappingURL=PlayerSim.d.ts.map