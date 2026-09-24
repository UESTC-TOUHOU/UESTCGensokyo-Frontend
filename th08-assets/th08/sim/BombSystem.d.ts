/**
 * Spell-card (bomb) system: the 16 retail cards, each with its own geometry.
 *
 * The selection rule is `acceptBomb` in `Player::FUN_0044c650`
 * (`th08web-ref/src/Player.cpp:1220-1296`), which builds one 0..4 variant index:
 *
 *     variant = field_3;                         // 0 upright, 1 focused
 *     if (field_4) variant = 1 - variant;        // a deathbomb belongs to the
 *     if (field_4) variant += 2;                 // member who is NOT flying
 *     updateCb = g_PlayerBombCallbackTable[shotType * 2][variant]
 *     drawCb   = g_PlayerBombCallbackTable[shotType * 2 + 1][variant]
 *
 * Each duo therefore owns four cards -- upright, focused, upright-deathbomb and
 * focused-deathbomb -- and the fifth row is the spell-practice special, which is
 * only reachable from `flags >> 7 & 3` and suppresses firing entirely. Eight
 * duos-worth of rows is 4 teams x 4 cards = the 16 specs below. Cost follows the
 * same split: one bomb normally, two for a deathbomb, or every bomb left if the
 * player is holding fewer than two (`:1254-1263`).
 *
 * `bombState.frameStop` — Sakuya's stopped clock, read by EnemyManager.cpp:302
 * and :423 to freeze enemy motion, damage numbers and graze — is mirrored by
 * `BombState.freeze`.
 */
import type { BulletPool } from './BulletPool';
import type { PlayerSim } from './PlayerSim';
import type { GameState } from './GameState';
/** How a zone is drawn and how its hit area is shaped. */
export type BombShape = 'orb' | 'beam' | 'slash' | 'knife' | 'butterfly' | 'barrier' | 'wave' | 'doll';
export interface BombZone {
    shape: BombShape;
    x: number;
    y: number;
    /** Facing for beams and blades, centre line for slash wedges (radians). */
    angle: number;
    /** Reach for beams/blades, radius for round shapes, y half-extent for barriers. */
    radius: number;
    /** Half thickness for beams/blades/rings, half-angle for slashes, x half-extent for barriers. */
    width: number;
    color: number;
    damage: number;
    hitsLeft: number;
    /** Frames between damage ticks. */
    interval: number;
    /** `BombState.timer` of the last tick that connected. */
    lastHit: number;
    vx: number;
    vy: number;
    /** Velocity rotation per frame (radians) — spirals and orbiting dolls. */
    curve: number;
    /** Facing rotation per frame (radians) — the sweeping slash fan. */
    turn: number;
    /** Visual roll. */
    spin: number;
    spinRate: number;
    age: number;
    /** Frames before the zone appears, so cards can stage their spawns. */
    delay: number;
    /** Frames of life left; negative means "until the card ends". */
    life: number;
    /** Homing strength in px/frame of course correction; 0 flies straight. */
    home: number;
    /** Pin the zone to the ship while the card runs (beams). */
    follow: boolean;
    /** Fade in / out multiplier for the renderer. */
    alpha: number;
    /**
     * Retail's `PlayerBombWorkItem::points[0]`: the anchor the piece was born on.
     *
     * The 夢想 cards re-derive their position from it every frame
     * (`anchor = points[0] + polar(rotation, rotationStep)`, `PlayerBomb.cpp:227`)
     * instead of integrating a velocity, which is what keeps their sixteen pieces a
     * rigid rosette while the reach grows.
     */
    originX: number;
    originY: number;
    /** `workItem->rotationStep`: the reach, in px, used by the anchor formula above. */
    reach: number;
    /**
     * `workItem->active`: 1 while the piece flies, 2 once it has detonated and is
     * only spending its last frames (`PlayerBomb.cpp:294`, `:322-323`).
     */
    pieceMode: 0 | 1 | 2;
    /**
     * Radius of the bullet-cancel bubble that rides with this zone, in field units.
     *
     * Retail hands one `PlayerUnkStruct0x40` slot to every work item a card spawns
     * (`FUN_0044df00(&anchor, 96.0f, 0.0f, 200, 6)`, `PlayerBomb.cpp:209`), and then
     * walks the slot's centre along with the item every frame (`:315-316`). A card's
     * wipe is therefore the union of its pieces' bubbles, which is why 夢想妙珠's
     * sixteen orbs clean the field on their way out instead of in one instant.
     * `0` means the piece cancels nothing.
     */
    cancel: number;
}
/** Minimal view of an enemy so a card can lock on and deal damage. */
export interface BombTarget {
    readonly posX: number;
    readonly posY: number;
    readonly active: boolean;
    applyDamage(amount: number): void;
}
/**
 * One entry of retail's `playerSlotsC` -- the list `Player::FUN_00449ff0` walks for
 * every enemy bullet, and a hit on it is what "the bomb ate my bullet" is made of.
 *
 * Two shapes, picked by the same rule the game uses: a non-zero `radius` means a
 * circle, otherwise `w * h` is an axis-aligned (or, with `angle`, rotated) rectangle.
 * `PlayerBomb.cpp` reaches for the rectangle constructor `FUN_0044de60` whenever a
 * card wants to wipe a *band* of the field -- Marisa's full-width plate above the
 * ship, Youmu's 96-wide blades that tile the arcade region, Remilia's cross through
 * the ship -- and for the circle constructor `FUN_0044df00` when the bubble rides a
 * piece. `lifetime` is retail's own third/fourth argument: `0` lives this frame only,
 * `60`/`200` live that many frames, and a negative value is immortal.
 */
export interface CancelSlot {
    x: number;
    y: number;
    /** Circle radius, and the thing `radiusGrowth` walks. 0 selects the rectangle. */
    radius: number;
    radiusGrowth: number;
    /** Rectangle extents, used when `radius` is 0. */
    w: number;
    h: number;
    angle: number;
    /** Frames left, counted the way `Player::FUN_0044c5b0` counts them. */
    lifetime: number;
    /** Re-centre on the ship every frame, like the slots the 夢想 orbs drag with them. */
    follow: boolean;
    /** Set once the slot has spent its lifetime; dropped from the list at the frame end. */
    spent: boolean;
}
/** `Player::FUN_0044df00(center, radius, radiusGrowth, lifetime, 6)`. */
export declare function circleSlot(x: number, y: number, radius: number, radiusGrowth?: number, lifetime?: number, follow?: boolean): CancelSlot;
/** `Player::FUN_0044de60(center, w, h, 6, lifetime)`. */
export declare function rectSlot(x: number, y: number, w: number, h: number, lifetime?: number, angle?: number, follow?: boolean): CancelSlot;
export interface BombCtx {
    player: PlayerSim;
    gs: GameState;
    bullets: BulletPool;
    targets: readonly BombTarget[];
}
export interface BombState {
    spec: BombSpec;
    timer: number;
    duration: number;
    /**
     * Frames left of the retail post-card state, `player->timer` while
     * `playerState == PLAYER_STATE_DEAD` (`PlayerBomb.cpp:171-172`). It starts
     * counting with the card, so it outlives `duration` by 30..60 frames; during
     * the whole window the ship tints red two frames out of every eight
     * (`Player.cpp:1457-1479`).
     */
    stateTimer: number;
    zones: BombZone[];
    /**
     * The card's live cancel slots: what it adds to `playerSlotsC` while it runs.
     * Kept separate from `zones` because a slot is invisible -- it only erases -- and
     * several of them belong to the card rather than to any one piece.
     */
    slots: CancelSlot[];
    finished: boolean;
    /** Clock stop: bullets and enemies hold still while this is set. */
    freeze: boolean;
    /** The backdrop the card paints behind the sprites this frame. */
    backdrop: BombBackdrop;
    /** Expanding cancel ring, 0 once the sweep has passed. */
    cancelRadius: number;
    /** Set for the frame the card actually connected with something. */
    connected: boolean;
    /**
     * Signed meter push this card wants applied for this frame. The card sweep is
     * `26000 / duration` per frame, which deliberately overshoots the `+-10000`
     * range so a full-length card can drive the meter to an extreme.
     */
    gaugeDrift: number;
    gs: GameState;
}
export interface BombSpec {
    id: string;
    name: string;
    nameJp: string;
    member: string;
    slot: 1 | 2;
    /**
     * The column this card sits in within its row of `g_PlayerBombCallbackTable`:
     * 0 and 2 are the human half of the pair, 1 and 3 the youkai half, and 4 is the
     * dissolve-only card. Drives the youkai-gauge drift, which retail withholds at
     * column 4 (`Player.cpp:1194`).
     */
    phase: 0 | 1 | 2 | 3 | 4;
    duration: number;
    /**
     * `player->timer` armed together with `duration` by `FUN_0040be30`, always
     * `duration` plus 30..60. This is the state the ship spends flashing red in
     * after the card banner comes down.
     */
    stateTimer: number;
    /**
     * Which portrait `CutInPlayer` puts next to the card name: `0` for the human
     * half of the pair, `1` for the youkai half. `FUN_0040be30`'s second argument.
     */
    face: -1 | 0 | 1;
    /** The retail update callback that arms this card, as a `th08.exe` address. */
    retailFn: string;
    /** Bombs spent: a normal card costs 1, a deathbomb variant costs 2 (`:1254-1270`). */
    cost: 1 | 2;
    /**
     * Radius of the ring the card opens with, in px. Cosmetic only: it is the picture
     * retail paints with `SpawnEffect(12, ...)`, and no part of the erase reads it.
     */
    cancelRadius: number;
    /**
     * Frames the ship-anchored cancel slot stays open, counted on the card's own
     * clock. `0` in retail's third argument means "until the card ends", which the
     * specs spell as their `duration`.
     */
    cancelLife: number;
    /** The sweep eats every enemy bullet on the field, not just a circle. */
    clearScreen: boolean;
    /**
     * Extra cancel slots the card registers for this frame, straight from its own
     * `FUN_0044de60` / `FUN_0044df00` calls. Called once per card frame after the
     * timer has been advanced, so retail's `bomb->timer` is `state.timer - 1`.
     */
    slots?: (state: BombState, ctx: BombCtx) => CancelSlot[];
    /** Sakuya's stopped clock. */
    freezes: boolean;
    /** Tint used by the renderer for the card's glow. */
    accent: number;
    /**
     * The card's own backdrop script, run on its frame clock. Straight off the *draw*
     * callback that sits next to this card in `g_PlayerBombCallbackTable`.
     */
    backdrop: (timer: number, duration: number) => BombBackdrop;
    create: (player: PlayerSim, gs: GameState, targets?: readonly BombTarget[]) => BombState;
    step: (state: BombState, ctx: BombCtx) => void;
}
/** One rectangle of the card's backdrop: a colour and how hard it sits on screen. */
export interface BombWash {
    color: number;
    /** 0..1. Retail authorities these as `0x80`-ish bytes, so keep them as fractions. */
    alpha: number;
}
/**
 * What a card paints behind and in front of the sprites for one frame of its clock.
 *
 * The two layers are not the same thing in retail: `FUN_0040bc60` hands a colour to
 * `g_Background`, so the plate sits under every bullet, while `ScreenEffect::DrawSquare`
 * is a screen-space quad drawn with the ship, so the flash covers them.
 */
export interface BombBackdrop {
    plate: BombWash | null;
    flash: BombWash | null;
}
/**
 * `FUN_0040bc60`'s envelope: grey at the ends, the card's own colour across the
 * middle of the card.
 */
export declare function plateRamp(color: number, timer: number, duration: number): BombWash;
/** True when (x, y) is inside the zone's hit area. */
export declare function zoneHits(z: BombZone, x: number, y: number, r?: number): boolean;
/**
 * Advance a card by one frame: cancel sweep, clock stop, motion, damage, and
 * the youkai-gauge drift of `AddToYoukaiGauge(+-26000 / duration)`.
 */
export declare function tickBomb(state: BombState, player: PlayerSim, bullets: BulletPool, targets?: readonly BombTarget[]): BombZone[];
export declare const BOMB_SPECS: BombSpec[];
/**
 * The fifth column of every row: 「ディゾルブスペル」, the card that only dissolves
 * bullets. `FUN_0040d100` has no work items and no damage slots at all -- it plays the
 * burst, stops the ship dead (`:569-570` zero both velocity axes), releases the enemy
 * stance lock, and hands the plate to `FUN_0040d310`, which greys out and then fades
 * the field to white over the last 60 frames of a 120-frame card.
 *
 * `acceptBomb` only selects it when the anti-tamper flags are set (`Player.cpp:1225`),
 * i.e. as the punishment for a tampered save, so it is data here rather than gameplay:
 * we do not model `IsTampered()`. Spell practice cuts it to 40 frames (`:544-546`).
 */
export declare const DISSOLVE_BOMB: BombSpec;
/**
 * Raw accessor: the shot type's row, then the member half and which of that
 * member's two cards.
 *
 * Solos do not get to choose their half. `Player.cpp:782-789` overwrites the side
 * byte every frame from `(shotType & 1)` for `shotType >= 4`, and the odd solo rows
 * of the callback table really are the youkai halves' own cards (row 10 is
 * 境界「永夜四重結界」, 14 is 魔操「リターンイナニメトネス」, 18 is
 * 紅魔「スカーレットデビル」, 22 is 死蝶「華胥の永眠」), so 紫 / アリス /
 * レミリア / 幽々子 fly alone as shot types 5, 7, 9 and 11 and take their half of
 * the pair with them.
 */
export declare function getBombSpec(shotType: number, isYoukai: boolean, slot: 1 | 2): BombSpec;
/**
 * Which card actually goes off, straight from `acceptBomb` (`Player.cpp:1238-1246`).
 *
 * The column is two bytes wide. Bit 0 comes from `Player+3`, which only the focus
 * block ever writes (`Player.cpp:778`), so holding Shift really does swap which
 * half of the pair drops its card -- 永夜抄's most-quoted bomb rule, and the reason
 * `focused` is an argument here. Bit 1 comes from `Player+4`, which has no writer
 * anywhere in the reference set and is cleared right after the read (`:1275`), so
 * the second card of a member is not reachable from the decomp; the deathbomb is
 * the one signal we have that behaves like it, and `slot` stands in for it.
 *
 * Nothing about a deathbomb reaches the column, either: `acceptBomb` clears
 * `Player+4` and the forced-bomb byte `Player+6` and reads no other flag, so the
 * press comes out of the same column an upright press would (`Die()` only lengthens
 * the grace window). So `focused` is the member bit, full stop.
 *
 * A deathbomb is not a different card either: `Player.cpp:1648-1651` loads
 * `g_PlayerBombCallbackTable[shotType * 2]` into `Player+0x1000` for the update pass
 * and `[shotType * 2 + 1]` into `Player+0x1014` for the draw pass
 * (`Player.cpp:1189` versus `:1536-1541`), so the odd rows are the draw halves of
 * the same cards rather than a deathbomb set. That is also why only even-row
 * functions call `FUN_0040be30`, the one place that names a card.
 */
export declare function selectBomb(shotType: number, focused: boolean, deathbomb?: boolean): BombSpec;
//# sourceMappingURL=BombSystem.d.ts.map