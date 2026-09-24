/**
 * Lasers, ported from `BulletManager::SpawnLaserPattern` (`BulletManager.cpp:711`)
 * and the laser half of the bullet update loop (`BulletManager.cpp:1038-1153`).
 *
 * A laser is not a moving object: it is a segment pinned to its spawn point that
 * grows along its own heading. Two scalars describe it — `tail` and `head`, both
 * measured along the beam from the spawn point — and every frame `head` advances
 * by `speed` while `tail` is dragged behind so the visible span never exceeds
 * `startLength`. `startOffset`/`endOffset` at spawn time are the initial
 * `tail`/`head`, which is how the scripts get both instant beams (`head` already
 * at 640, `speed` 0) and slow-growing ones (`tail` = `head` = 0, `speed` > 0)
 * from the same opcode.
 *
 * Three phases run off one frame counter: 0 grows the width in, 1 holds, 2 shrinks
 * it out. `transformFlags & 1` swaps the width ramp for an alpha ramp instead.
 */
/** Laser slots are a fixed pool, exactly like retail's 0x100. */
export declare const MAX_LASERS = 256;
/** `descriptor->transformFlags` bit 0: fade with alpha rather than ramping width. */
export declare const LASER_FLAG_ALPHA_FADE = 1;
export interface Laser {
    active: boolean;
    /** World anchor the beam is pinned to (`laser + 0x548`/`0x54C`). */
    x: number;
    y: number;
    /** Beam heading; the hitbox frame is the world rotated by this about `x,y`. */
    angle: number;
    /** Near end of the beam, measured along `angle` from the anchor. */
    tail: number;
    /** Far end of the beam, advanced by `speed` each frame. */
    head: number;
    /** Longest span `head - tail` may reach. */
    startLength: number;
    /** Full beam width in pixels. */
    width: number;
    /** Width the body is actually drawn at during the ramp phases. */
    currentWidth: number;
    /** Pixels the head advances per frame. */
    speed: number;
    /** Frames the grow phase lasts; 0 skips it entirely. */
    startTime: number;
    /** Frames counted before the beam starts hurting. */
    hitboxStartTime: number;
    /** Frames the beam holds at full width. */
    duration: number;
    /** Frames the beam takes to shrink out; 0 deletes it at the end of `duration`. */
    despawnDuration: number;
    /** Frames past the end of `duration` that the beam still hurts. */
    hitboxEndDelay: number;
    /** Frames since the current phase began. */
    timer: number;
    /** 0 = growing, 1 = holding, 2 = shrinking. */
    state: number;
    /** `descriptor->transformFlags`. */
    flags: number;
    /** Etama colour index. */
    color: number;
    /** ECL laser type; picks the body ANM script (`type + 10`). */
    bulletType: number;
    /** Body alpha from the `transformFlags & 1` ramp, 0..1. */
    alpha: number;
    /**
     * Hitbox centre in beam space: how far along the beam from the anchor, then the
     * lateral offset. Retail keeps it in the frame the world is rotated into
     * (`laserCenter`), where the anchor itself is the origin, so the lateral half is
     * always 0 and only the along-beam term carries information.
     */
    centerX: number;
    centerY: number;
    /**
     * Full hitbox extents in beam space. `CalcLaserHitbox` tests against
     * `centre ± size/2`, so these are diameters, not half-extents: the lateral one is
     * `width / 2`, half the drawn beam, which is what makes EoSD lasers forgiving.
     */
    sizeX: number;
    sizeY: number;
    /** Lethal this frame; the graze pulse is `timer % 20 == 0`, per retail. */
    lethal: boolean;
    graze: boolean;
}
export interface LaserSpawnArgs {
    x: number;
    y: number;
    angle: number;
    tail: number;
    head: number;
    startLength: number;
    width: number;
    speed: number;
    startTime: number;
    hitboxStartTime: number;
    duration: number;
    despawnDuration: number;
    hitboxEndDelay: number;
    flags: number;
    color: number;
    bulletType: number;
}
export declare class LaserPool {
    readonly lasers: Laser[];
    /**
     * `g_EclGameTimeScale` (`EclGlobals.cpp:117`), applied to the beam's length
     * growth at `BulletManager.cpp:1046`. The host keeps it in step once a frame.
     */
    timeScale: number;
    constructor();
    /**
     * `SpawnLaserPattern`: take the first free slot and copy the descriptor in.
     * A `startTime` of 0 opens straight in the holding phase.
     */
    spawn(args: LaserSpawnArgs): Laser | null;
    /**
     * Advance every live beam by one frame and republish its hitbox.
     *
     * `frozen` is Sakuya's stopped clock: the scripts keep their own time, so the
     * beams hold their geometry the same way enemy bullets hold their position.
     */
    tick(frozen?: boolean): void;
    /** The body of `BulletManager.cpp:1043-1152`, one beam at a time. */
    private stepLaser;
    /**
     * Tail culling and the phase clock, which retail only reaches for beams that
     * stayed alive through the switch.
     */
    private finishFrame;
    /** Live beams, for the renderer and the collision pass. */
    getActive(): Laser[];
    get activeCount(): number;
    /** Every beam off the field — the stage-clear and death resets. */
    clearAll(): number;
}
//# sourceMappingURL=LaserPool.d.ts.map