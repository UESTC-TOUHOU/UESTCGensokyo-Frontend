/**
 * The retail bullet array, with its state machine and transform machine.
 *
 * `g_BulletManager.bullets[0x600]` (`BulletManager.hpp:143`) is a fixed pool that
 * is never grown, so a full array really does end a danmaku pattern early
 * (`BulletManager::FUN_00430e10:689`). Every field this file keeps mirrors a
 * `Bullet` offset:
 *
 * | offset | field            | meaning                                          |
 * |--------|------------------|--------------------------------------------------|
 * | 0xD44  | x, y             | position                                         |
 * | 0xD50  | vx, vy           | velocity, already scaled per frame               |
 * | 0xD68  | speed            | the polar speed the velocity is derived from     |
 * | 0xD74  | angle            | the polar heading                                |
 * | 0xDA8  | hold             | frames left that suppress the off-field test     |
 * | 0xDB8  | state            | 0 free, 1 live, 2..4 appearing, 5 dying          |
 * | 0xDB0  | tfFlags          | the shot instruction flag word                   |
 * | 0xDAC  | tfActive         | which transform handlers are running now         |
 * | 0xDD0  | tfRecords        | the record chain copied from the shot setup      |
 * | 0xDCC  | tfIndex          | next record to consider                          |
 * | 0xDC8  | tSound           | sound played whenever a record arms              |
 *
 * The per-frame order follows `BulletManager::OnUpdate:808-937`: advance the
 * record chain, run every armed handler, tick the hold timer, integrate, test the
 * playfield. Collision lives in `Collision.ts`, because the caller owns the ship.
 */
import { type BulletWorld, type ShotPattern } from './BulletTransform';
export type { BulletWorld, ShotPattern, ShotRecord } from './BulletTransform';
export { BULLET_LIVE, BULLET_DYING, SF_NO_CANCEL, isLive, simplePattern } from './BulletTransform';
/** A detached bullet with every field zeroed, for hosts that build their own. */
export declare const blankBullet: typeof createBullet;
export interface Bullet {
    active: boolean;
    x: number;
    y: number;
    vx: number;
    vy: number;
    angle: number;
    speed: number;
    type: number;
    color: number;
    radius: number;
    /** `IsWithinPlayfield`'s width and height arguments: the drawn sprite box. */
    fieldW: number;
    fieldH: number;
    damage: number;
    lifetime: number;
    grazed: boolean;
    tag: 'enemy' | 'player';
    /** `bullet+0xDB8`. */
    state: number;
    /** `bullet+0xDA8`: >0 keeps the bullet alive outside the playfield. */
    hold: number;
    /** `bullet+0xDAC`: the armed transform handlers. */
    tfActive: number;
    /** `bullet+0xDB0`: the shot instruction's flag word. */
    tfFlags: number;
    /** `bullet+0xDCC`: the next record the chain walker looks at. */
    tfIndex: number;
    /** `bullet+0xDD0`, shared by every bullet from one shot instruction. */
    tfRecords: ShotPattern['records'];
    /** `bullet+0xDC8`. */
    tSound: number;
    /** `bullet+0xD80` and `bullet+0xD8C`. */
    age: number;
    age2: number;
    /** Frames left in an appear or death animation. */
    animLeft: number;
    /** Scratch for the armed handlers; the offsets are quoted in `BulletTransform`. */
    h1: number;
    h10t: number;
    h10ax: number;
    h10ay: number;
    h10dur: number;
    h20t: number;
    h20ds: number;
    h20da: number;
    h20dur: number;
    h40t: number;
    h40s: number;
    h40a: number;
    h40dur: number;
    h40rep: number;
    h40cnt: number;
    hBounceSpeed: number;
    hBounceDone: number;
    hBounceMax: number;
    /** `bullet+0x105C`, the WAIT record's countdown. */
    hWait: number;
    /** `bullet+0x1088`, shared by the two wrap records. */
    hWrap: number;
    /** Frames outside the playfield, for the 0xDC0 grace window. */
    oob: number;
    /** Set once the bullet has been counted as a graze. */
    hitLatch: boolean;
    /** Set while an appear animation saw the ship inside the bullet. */
    touchedPlayer: boolean;
}
declare function createBullet(): Bullet;
/** `g_BulletManager.bullets[0x600]`. */
export declare const MAX_BULLETS = 1536;
export declare class BulletPool {
    readonly bullets: Bullet[];
    private cursor;
    /** A full array is retail behaviour, but a host still wants to see it happen. */
    readonly stats: {
        refused: number;
        spawned: number;
        /** Bullets armed with a non-empty record chain (`record->kind != 0`). */
        recorded: number;
        /** Frames on which some bullet had a transform handler running. */
        handlerFrames: number;
    };
    /**
     * `g_EclGameTimeScale`, which `BulletManager.cpp:183-184` folds into a fresh
     * bullet's velocity but not into its raw speed field `+0xD68`. The host keeps
     * this in step with its own time scale once per frame; `arm` is the one site
     * that needs it without a `BulletWorld` in hand.
     */
    timeScale: number;
    constructor();
    /**
     * `BulletManager::FUN_0042f5f0`: take a free slot and arm it.
     *
     * The scan starts at the slot after the one last filled, which is retail's
     * `bulletCursor`, so a lunate stage-6 pattern that overflows loses the same
     * bullets the original would.
     */
    launch(pattern: ShotPattern, x: number, y: number, angle: number, speed: number): Bullet | null;
    /** Fill one slot the way the original initialises a bullet. */
    private arm;
    /**
     * Advance every live bullet by one frame.
     *
     * `frozen` is Sakuya's stopped clock: retail gates only the position
     * integration on `g_EclScriptedGlobalUpdateFreeze` (`BulletManager.cpp:853`), so
     * an armed transform keeps walking its timers and the stopped bullets still
     * turn. That is what makes the clock bomb's wall re-enter motion on exactly the
     * heading it was aiming at.
     *
     * `world` is what the handlers need: the ship for the homing and fork records,
     * the rng for the random aim modes, and the sound sink.
     */
    tick(frozen?: boolean, world?: BulletWorld | null): void;
    /**
     * `GameManager::IsWithinPlayfield`, measured from the sprite's own size rather
     * than a fixed margin: a 48px eyeball is culled the moment its far edge clears
     * the frame, and a pellet keeps going a few pixels further.
     */
    private outOfField;
    /** `BulletManager::RemoveAllBullets` with a mode that is not 4: the slot is
     *  zeroed on the spot, and the host turns the bullet into an item. */
    clearByTag(tag: 'enemy' | 'player'): number;
    /**
     * `BulletManager::RemoveBulletsInRadius` (ECL op 161), which also zeroes the
     * slot outright: no fade, because the bullet becomes a point on the spot.
     */
    clearInRadius(cx: number, cy: number, radius: number): number;
    /**
     * One bullet caught by a cancel slot of `Player::FUN_00449ff0`.
     *
     * Retail does not zero the slot here the way ECL op 161 does: the bullet goes to
     * state 5, which is the little 点 animation the field then collects, and the host
     * drops `bulletCancelItemType` on the spot (`BulletManager.cpp:942-959`, and the
     * same shape in `RemoveAllBullets` at `:498-520`). Two things keep a bullet out of
     * it: the `0x1000` shot flag (`SF_NO_CANCEL`, tested in the same `if`), and being
     * the ship's own shot -- only the enemy channel is walked by that switch.
     */
    private cancelOne;
    /** The `slot->radius != 0` branch of `FUN_00449ff0`: a circle. */
    cancelInCircle(cx: number, cy: number, radius: number): number;
    /**
     * The rectangle branch of `FUN_00449ff0` (`Player::FUN_0044de60`): `w * h` about
     * (cx, cy), rotated by `angle` when the card gives the slot a facing.
     */
    cancelInRect(cx: number, cy: number, w: number, h: number, angle?: number): number;
    /** `BulletManager::RemoveAllBullets(4)`: every live enemy bullet turns into a point. */
    cancelAllEnemy(): number;
    /** Count of live bullets, whatever their state. */
    get activeCount(): number;
    /** Count of live enemy bullets that can actually hurt the ship. */
    get collidableCount(): number;
    /** Get all active bullets (for rendering). */
    getActive(): Bullet[];
    /**
     * Legacy positional spawn, for hosts that describe one bullet at a time rather
     * than a whole shot pattern. It arms the same slot the launcher does.
     */
    spawn(x: number, y: number, angle: number, speed: number, type?: number, color?: number, radius?: number, damage?: number, tag?: 'enemy' | 'player'): Bullet | null;
    /** Start a bullet's death animation; used by the collision pass. */
    beginDeath(b: Bullet): void;
}
//# sourceMappingURL=BulletPool.d.ts.map