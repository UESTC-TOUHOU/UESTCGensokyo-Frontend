/**
 * Death, grace window, and respawn timing, ported straight out of `Player.cpp`.
 *
 * Two classes used to carry their own copy of these numbers -- `Player` for the
 * presentation path and `PlayerSim` for the ECL path -- which is how a 240-frame
 * post-respawn invulnerability with no source in the disassembly survived. Both
 * now read the single model defined here.
 *
 * Retail life cycle (`Player::Die` `:529-616`, `FUN_0044cbf0` `:1309-1415`,
 * `FUN_0044d180` `:1418-1447`):
 *
 *   hit  -> DYING with a *deathbomb window*: the ship sits on the death spot,
 *           white, one 时符 spent per frame, and a card press inside the window
 *           comes out as the partner's deathbomb variant.
 *        -> window empty: the ship squashes flat and fades over 30 frames.
 *        -> SPAWNING for 30 frames: a bright streak unfolds back into the ship.
 *        -> ALIVE with a 60-frame full-screen bullet cancel, and nothing else.
 *
 * There is deliberately **no post-respawn invulnerability** in the reference.
 * Immunity is `playerState != PLAYER_STATE_ALIVE`; the mercy mechanic is the
 * 60-frame bullet-cancel volume that `FUN_0044d2c0:1451-1455` keeps re-inserting
 * through `playerStateSlotCooldown`.
 */
/** Frames of the flat-and-fade death animation (`FUN_0044cbf0:1374-1383`). */
export declare const DEATH_FRAMES = 30;
/** Frames of the spawn-in streak (`FUN_0044d180:1433`). */
export declare const SPAWN_FRAMES = 30;
/** Frames the post-respawn bullet-cancel volume stays open (`:1422`, `:1451`). */
export declare const BULLET_CANCEL_FRAMES = 60;
/** 时符 bled per frame of the grace window (`:1315`). */
export declare const DEATHBOMB_ORB_DRAIN = -15;
/** Grace frames bought per bomb still held (`Die:553-554`). */
export declare const GRACE_FRAMES_PER_BOMB = 6;
/** Extra grace when the 时符 counter clears the last-spell threshold (`:555-556`). */
export declare const GRACE_LAST_SPELL_BONUS = 7;
/** Grace clamp with no enemy spell card out (`:557-558`). */
export declare const GRACE_MAX = 15;
/** Grace clamp while an enemy spell card is active (`:560-566`). */
export declare const GRACE_SPELL_MAX = 30;
/** Grace with no bombs left, and the floor `acceptBomb` may still spend from (`:545`, `:610`). */
export declare const GRACE_WITHOUT_BOMBS = 2;
/**
 * `plyNNa.sht + 0x08`: `acceptBomb` adds 6 back to the grace counter after every
 * card and clamps it to this (`:1290-1296`), and spawn-in refills it (`:1444`).
 * Measured 18 / 10 / 10 / 12 for the four teams.
 */
export declare const DEATHBOMB_BUDGET_BY_TEAM: readonly [18, 10, 10, 12];
/**
 * Non-duo shot types are the four human characters flying alone, two rows each
 * (`Player.cpp:3104`, `Player.cpp:1353-1354`): 4/5 霊夢, 6/7 魔理沙, 8/9 咲夜,
 * 10/11 妖夢.
 */
export declare function soloCharacterIndex(shotType: number): number;
/**
 * Team row a shot type belongs to: 0-3 are the duos, and the solo rows 4..11 fold
 * back onto the pair of the character flying alone.
 */
export declare function teamRowForShotType(shotType: number): number;
/** Reimu's team row and both of her solo rows buy grace 9/5 as fast (`:568-573`). */
export declare function isReimuShotType(shotType: number): boolean;
export interface GraceWindowInput {
    /** `GetBombsRemaining()`. */
    bombs: number;
    /** `GetTimeOrbs()`. */
    timeOrbs: number;
    /**
     * `globals->lastSpellTimeOrbThreshold`. Read at `:555` and never assigned in
     * any function we have decompiled, so this stays an input rather than a claim.
     */
    lastSpellTimeOrbThreshold: number;
    /** `g_Spellcard.IsActive()` -- an enemy spell card is on screen. */
    spellCardActive: boolean;
    shotType: number;
}
/**
 * How many frames the ship waits on the death spot before it actually dies, which
 * is also how long a deathbomb press stays legal. `Player::Die` `:551-573`.
 */
export declare function graceWindowFrames(input: GraceWindowInput): number;
/**
 * Total frames spent in `dying`: the grace window, then the 30-frame dissolve.
 * The window runs first and the animation only starts once it is empty
 * (`FUN_0044cbf0:1313` takes the countdown branch, `:1372` the animation).
 */
export declare function dyingFrames(window: number): number;
/** `plyNNa.sht + 0x08`: the grace counter spawn-in arms, and the ceiling `acceptBomb` clamps to. */
export declare function deathbombBudget(shotType: number): number;
/** Bombs spent by a card (`acceptBomb:1244-1271`). */
export declare function bombCost(deathbomb: boolean, bombs: number): number;
/** Grace counter after a card (`:1290-1296`), clamped by the team's `.sht` budget. */
export declare function graceAfterBomb(window: number, shotType: number): number;
export interface ShipTransform {
    scaleX: number;
    scaleY: number;
    /** 0..1 opacity. */
    alpha: number;
    /** Retail swaps to additive blending for both of these animations. */
    additive: boolean;
    /** Held white while the deathbomb window runs out (`Die:577-582`). */
    whiteout: boolean;
}
/** A frame of the 30-frame death dissolve: `timer` counts up from 0. */
export declare function deathScale(timer: number): ShipTransform;
/** A frame of the 30-frame spawn-in: `timer` counts up from 0. */
export declare function spawnScale(timer: number): ShipTransform;
/** Where the ship is in its life cycle right now, for the renderer. */
export declare function shipTransform(state: 'alive' | 'dying' | 'respawning' | 'dead', stateTimer: number, windowLeft?: number): ShipTransform;
//# sourceMappingURL=DeathCycle.d.ts.map