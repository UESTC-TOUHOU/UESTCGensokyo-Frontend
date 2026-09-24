import { Entity } from '../../engine/core/Entity';
import { Vector2 } from '../../engine/core/Vector2';
import { InputSystem } from '../../engine/core/InputSystem';
import { Bullet } from '../../engine/core/Bullet';
import { Bounds } from '../../engine/core/BulletSystem';
import { BulletFactory } from '../bullet-patterns/BulletPattern';
import { type ShipTransform } from './DeathCycle';
import { type CharacterId, type CharacterProfile, type MemberId, type MemberProfile, type ShotStyle } from './CharacterProfile';
export interface PlayerConfig {
    profile?: CharacterProfile;
    characterId?: CharacterId;
    fastSpeed?: number;
    slowSpeed?: number;
    hitboxRadius?: number;
    initialLives?: number;
    initialBombs?: number;
    /** Starting power in 1/128 units (128 = 2.00); clamped to the team cap. */
    initialPower?: number;
    playfield?: Bounds;
    /** Bullet creation hook — lets the game route shots through its object pool. */
    bulletFactory?: BulletFactory;
}
export declare const DEFAULT_PLAYFIELD: Bounds;
/** Frames the swap flourish stays on screen after a focus switch. */
export declare const SWITCH_FLASH_FRAMES = 14;
/** Life cycle; see Player.hit / Player.respawn for the transitions. */
export type PlayerState = 'alive' | 'dying' | 'respawning' | 'dead';
/**
 * The 永夜抄 player: a two-person team where Shift is both focus and character
 * switch. Unfocused flies member A at full speed; holding Shift halves the speed,
 * exposes the hitbox and swaps in member B with a completely different weapon.
 */
export declare class Player extends Entity {
    /** The team this player belongs to (menu selection, leaderboard entry). */
    team: CharacterProfile;
    characterId: CharacterId;
    characterName: string;
    /** 0 = member A (unfocused), 1 = member B (focused). */
    /** Death burst before the ship is allowed back (Player::Die -> 30 frames). */
    static readonly DEATH_FRAMES = 30;
    /** Spawn-in scale/fade animation (FUN_0044d180 -> 30 frames). */
    static readonly SPAWN_FRAMES = 30;
    /** Post-respawn bullet-cancel volume (playerStateSlotCooldown = 60). */
    static readonly BULLET_CANCEL_FRAMES = 60;
    /** plyNNa.sht bombCount: every team restarts a life with 3 bombs. */
    static readonly INITIAL_BOMBS = 3;
    /** Respawn point: arcadeRegionSize.x / 2, arcadeRegionSize.y - 64. */
    /**
     * 192 = the centre of the 384-wide playfield (`sim/Playfield.ts` RESPAWN_X). This
     * used to read 224, the centre of the retired 448-wide field, so the presentation
     * ship came back 32px right of where the sim put it.
     */
    static readonly RESPAWN_X = 192;
    static readonly RESPAWN_Y = 384;
    /**
     * How far a volley lane may sit from the hitbox at the instant of firing.
     *
     * Retail fans a weapon out by angle rather than by moving the muzzle sideways, so
     * a volley always starts inside the ship silhouette. The launch points are not
     * recoverable from the decompile -- `PlayerRawShtFile` declares the whole first
     * 0x1c bytes of `plyNNa.sht` as `unknown_fields` (`Player.hpp:13-17`) -- so this
     * is an observed bound, and every lane is clamped to it rather than tuned to it.
     */
    static readonly MUZZLE_LIMIT = 12;
    memberIndex: 0 | 1;
    /** Frames left on the swap flourish; drives the renderer's flash. */
    switchFlash: number;
    fastSpeed: number;
    slowSpeed: number;
    /** Per-axis diagonal speed, unfocused (`plyNNa.sht + 0x2C`). */
    fastDiagonalSpeed: number;
    /** Per-axis diagonal speed, focused (`plyNNas.sht + 0x30`). */
    slowDiagonalSpeed: number;
    bombDamage: number;
    /** Nearest target for homing shots, refreshed by the game each frame. */
    aimTarget: {
        position: {
            x: number;
            y: number;
        };
    } | null;
    color: number;
    accentColor: number;
    isSlowMode: boolean;
    /**
     * Whether the hitbox dot is drawn. TH08 raises this a few frames *after* focus
     * is engaged (`Player.cpp:716, 778`), so it is deliberately not the same flag
     * as `isSlowMode`.
     */
    hitboxVisible: boolean;
    /**
     * Intended horizontal velocity in px/frame, mirroring `PlayerSim.leanX`. The
     * renderer leans the ship from this rather than from `velocity`, because the
     * position delta carries wall-clamp and sub-pixel noise that retriggers the
     * lean/unlean transition forever. See `Player.cpp:791-872`.
     */
    leanX: number | null;
    lives: number;
    bombs: number;
    /** Power in 1/128 units; 128 reads as 2.00 on the HUD. */
    power: number;
    /** Ceiling for power, from the team profile (128 = 2.00). */
    maxPower: number;
    /**
     * Power shed by the most recent death, still owed to the drop-item spawner.
     * TH08 hands back one big P plus four small P, so the game reads this once.
     */
    powerLost: number;
    /**
     * 永夜抄 life cycle. `dying` freezes the ship behind a death burst for 30
     * frames, `respawning` flies the 60-frame spawn-in at the start position,
     * and `dead` is the game-over parking lot.
     */
    state: PlayerState;
    /** Countdown for the current non-alive state, in game frames. */
    stateTimer: number;
    /**
     * Frames left of the deathbomb grace window (`0xE2A68`). The ship holds on the
     * death spot, white, for exactly this long before it dissolves.
     */
    graceTimer: number;
    /** `field_4`: a press while this is set spends two bombs and the partner's card. */
    deathbombArmed: boolean;
    /** One-tick flag: this frame the death stopped being cancellable. */
    deathSettled: boolean;
    /** Inputs to the grace-window formula, kept current by the game. */
    shotType: number;
    timeOrbs: number;
    lastSpellTimeOrbThreshold: number;
    spellCardActive: boolean;
    /**
     * Frames left of the post-respawn bullet-cancel volume (playerStateSlotCooldown
     * = 60 in the reference). Bullets inside it vanish without being grazed.
     */
    cancelTimer: number;
    score: number;
    graze: number;
    isInvulnerable: boolean;
    invulnerabilityTimer: number;
    /**
     * Set while a spell card's own state clock has the ship, on the frames it is meant
     * to read red. Mirrors `PlayerSim.bombStateFlash`; a game without that clock just
     * leaves it false.
     */
    bombStateFlash: boolean;
    shootCooldown: number;
    playfield: Bounds;
    bulletFactory: BulletFactory;
    constructor(position?: Partial<Vector2>, config?: PlayerConfig);
    /** The member currently flying (A unfocused, B focused). */
    get member(): MemberProfile;
    /** The member standing down; the renderer trails it as a translucent shadow. */
    get partner(): MemberProfile;
    get memberId(): MemberId;
    /** Weapon read-outs follow the active member so HUD and tests stay truthful. */
    get shotStyle(): ShotStyle;
    get shotCount(): number;
    get shotRate(): number;
    get shotDamage(): number;
    get shotRadius(): number;
    get shotSpread(): number;
    get shotColor(): number;
    get shotSprite(): string;
    applyProfile(team: CharacterProfile): void;
    /** Swap the flying member directly (tests, replays and scripted demos). */
    setMember(index: 0 | 1): boolean;
    /**
     * Enter or leave focus mode. In Imperishable Night this *is* the member swap:
     * `playerNN.anm` keeps the human's stance in scripts 0-4 and the partner's own
     * frames in the 低速 family scripts 5-9, and `Player.cpp:791-820` takes the
     * focus speed from the secondary (partner) .sht. There is no separate change
     * key in `Global.hpp:97-126` because Shift already does the switching.
     */
    setFocus(focused: boolean): void;
    /**
     * Raise power by amount (1/256 units) and report what actually landed,
     * so callers can score the overflow the way TH08 does at max power.
     */
    addPower(amount: number): number;
    /** Fill power to the team cap (the 電 item). Returns the amount gained. */
    fillPower(): number;
    /** Point homing shots at the closest live target (null = fire straight). */
    setAimTarget(target: {
        position: {
            x: number;
            y: number;
        };
    } | null): void;
    /**
     * Put the ship back at the start position for a new stage.
     *
     * Lives, bombs and power deliberately survive: Touhou 8 carries all three
     * across the whole run, and only death (or a continue) touches them.
     */
    resetForStage(preserveScore?: boolean): void;
    /**
     * @param fieldPointer Where a pointer device wants the ship, already in this
     * player's own coordinate space, or `null` when nothing is steering. The field is
     * not the whole canvas (`canvasToWorldX`), so a host that draws it inside a
     * 640x480 window has to convert the cursor before handing it over -- the ECL
     * player sim gets the converted point, and this call needs the same one or the
     * two writers disagree by the playfield offset. Left out, the pointer is read as
     * already being in this player's space, which is what a full-window game wants.
     */
    handleInput(input: InputSystem, fieldPointer?: Vector2 | null): void;
    /**
     * Decay only the fire-rate gate.
     *
     * `update()` owns this cooldown, but the ECL-driven stage runs its own player sim
     * and never calls `update()`. Without this the first volley latches `shootCooldown`
     * forever and the ship appears to have no weapon at all.
     */
    tickShootCooldown(dt?: number): void;
    /**
     * Fire the active member's weapon. Every one of the eight members is a real
     * design point: homing charms, wide gap spreads, concentrated lasers and rapid
     * knives all behave differently, and none of them curl back on the shooter.
     */
    /** Pull a lane offset back inside `MUZZLE_LIMIT` of the ship centre line. */
    private muzzleX;
    shoot(_time?: number): Bullet[];
    private makeBullet;
    /**
     * Take a hit: start the death sequence and pay the power bill.
     *
     * The reference costs 16 units (0.25) per death and zeroes anything at or
     * below 16, then hands the shed power back as drop items; see Player::Die and
     * the ITEM_POWER_* spawns that follow it.
     */
    /**
     * Take a hit and open the deathbomb window.
     *
     * The power bill is deliberately not paid here: `Player::Die` only touches power
     * once the grace counter runs out (`FUN_0044cbf0:1341-1346`), which is what makes a
     * deathbomb worth its two bombs.
     */
    hit(): boolean;
    /**
     * The frame the window runs out: pay the power bill and arm the drop spawn
     * (`Player.cpp:1341-1369`). Out of lives the whole bar goes instead of a slice.
     */
    settleDeath(): void;
    /**
     * Spend one life and fly back in.
     *
     * Bombs deliberately survive. `Player.cpp:1341-1358` pays a death with power and a
     * drop of P items, and the only bomb it ever hands back is the `ITEM_BOMB` pickup the
     * Sakuya/Remilia side gets -- so the count carries through a death.
     *
     * @returns false when there are no lives left, i.e. the run is over.
     */
    respawn(): boolean;
    /** True while the ship is on screen and can be hit or can fire. */
    get isFlying(): boolean;
    /** Point-of-collection line for this team (plyNNa.sht + 0x1c). */
    get pointItemValueLine(): number;
    /** Homing speed used once items are grabbed (sht + 0x14). */
    get itemGrabSpeed(): number;
    /**
     * Time scale on items that are still drifting on their own (sht + 0x34).
     *
     * `ItemManager.cpp:207-209` swaps the table with the focus flag, exactly like
     * the move speed does, so Sakuya's unfocused field falls at 0.65 and Remilia's
     * focused one at 0.9.
     */
    get itemTimeScale(): number;
    /** Half of the item box (sht + 0x18 / 2). */
    get itemPickupHalfExtent(): number;
    /** Half of the hit box (sht + 0x0C / 2). */
    get hitboxHalfExtent(): number;
    /** Half of the graze box (sht + 0x10 / 2). */
    get grazeHalfExtent(): number;
    /** Shot level 0..5 from g_PowerUpThresholds {8,24,48,80,128}. */
    get shotLevel(): number;
    /**
     * Spend a card. A press during the grace window is a deathbomb: it costs two bombs
     * (or everything left, if that is fewer) and belongs to the member not flying.
     * Retail buys no invulnerability with any of this (`acceptBomb:1244-1271`).
     */
    useBomb(): boolean;
    /**
     * Scale, blend and opacity for the grace window, the dissolve and the spawn-in.
     * `null` means the ship draws as usual.
     */
    get shipPose(): ShipTransform | null;
    /** True while the ship is held white on the death spot inside its window. */
    get whiteoutHold(): boolean;
    update(dt: number): void;
}
//# sourceMappingURL=Player.d.ts.map