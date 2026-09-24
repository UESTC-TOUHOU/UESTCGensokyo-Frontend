import { Entity, EntityTag } from './Entity';
import { Vector2 } from './Vector2';
export interface BulletConfig {
    position?: Partial<Vector2>;
    velocity?: Partial<Vector2>;
    radius?: number;
    color?: number;
    sprite?: string;
    damage?: number;
    grazed?: boolean;
    angularVelocity?: number;
    acceleration?: number;
    /** Per-frame change of angularVelocity (th08 v.wa, deg/frame^2 -> rad/frame^2). */
    angularAcceleration?: number;
    /** Per-frame change of angularAcceleration (th08 v.waa). */
    angularJerk?: number;
    /** Per-frame change of acceleration (th08 v.raa) — the radial jerk term. */
    jerk?: number;
    /**
     * Travel direction in radians. Only needed when velocity is (0,0) at spawn —
     * th08 bullets with r:0 + positive ra accelerate *from rest* along theta.
     */
    heading?: number;
    /**
     * Homing turn cap in radians/frame (0 = flies straight). While the homing window
     * lasts the BulletSystem rotates heading toward the aim target by at most this
     * much per frame, which is how th08 player homing shots curve without ever
     * curling back into a circle around the shooter.
     */
    homingTurn?: number;
    /** Game frames the homing turn stays active; after that the shot flies straight. */
    homingFrames?: number;
    /**
     * Total radians a homing shot may deviate from the heading it launched on
     * (0 = uncapped). Without a cap a long homing window lets a shot finish a full
     * circle and come back at the shooter, which is the orbiting-player-shot bug.
     */
    homingMaxTurn?: number;
    /** Visual-only sprite spin in radians/frame. Never touches the trajectory. */
    spin?: number;
    /** Lower speed clamp in px/frame (th08 v.rrange.min); never slows past it. */
    speedMin?: number;
    /** Upper speed clamp in px/frame (th08 v.rrange.max); never ramps past it. */
    speedMax?: number;
    /** Lower angular velocity clamp in rad/frame (th08 v.wrange.min). */
    angularVelocityMin?: number;
    /** Upper angular velocity clamp in rad/frame (th08 v.wrange.max). */
    angularVelocityMax?: number;
    /** Lower radial acceleration clamp in px/frame² (th08 v.rarange.min). */
    accelerationMin?: number;
    /** Upper radial acceleration clamp in px/frame² (th08 v.rarange.max). */
    accelerationMax?: number;
    /** Lower angular acceleration clamp in rad/frame² (th08 v.warange.min). */
    angularAccelerationMin?: number;
    /** Upper angular acceleration clamp in rad/frame² (th08 v.warange.max). */
    angularAccelerationMax?: number;
    /** Lower heading bound in radians (th08 v.trange.min). */
    headingMin?: number;
    /** Upper heading bound in radians (th08 v.trange.max). */
    headingMax?: number;
    /** Frames a bullet stays alive even when it never leaves the playfield (lasers, timed orbs). */
    maxLifetime?: number;
    /** See Bullet.drawRadius. 0 keeps the legacy hit-radius-proportional sizing. */
    drawRadius?: number;
    tag?: EntityTag;
}
/** Default cap for the shared bullet free-list (0 = unlimited). */
export declare const DEFAULT_BULLET_POOL_CAP = 512;
/**
 * Take a Bullet from the shared pool (or allocate one) and arm it with `config`.
 * Prefer this over `new Bullet()` for anything spawned per-frame; pair every
 * obtain with a releaseBullet() when the bullet dies.
 */
export declare function obtainBullet(config?: BulletConfig): Bullet;
/**
 * Return a dead Bullet to the shared pool. Double-release safe (guarded by
 * `isPooled`); live bullets and instances above `cap` are dropped.
 */
export declare function releaseBullet(bullet: Bullet, cap?: number): void;
/** Number of bullets currently held in the shared pool (debug/metrics). */
export declare function getBulletPoolSize(): number;
/** Empty the shared pool and hand back its contents (test isolation / teardown). */
export declare function drainBulletPool(): Bullet[];
export declare class Bullet extends Entity {
    color: number;
    sprite: string;
    damage: number;
    grazed: boolean;
    angularVelocity: number;
    acceleration: number;
    angularAcceleration: number;
    angularJerk: number;
    jerk: number;
    /** Lower speed clamp (px/frame); 0 disables the floor. */
    speedMin: number;
    /** Upper speed clamp (px/frame); Infinity disables the ceiling. */
    speedMax: number;
    /** Lower angular velocity clamp (rad/frame); -Infinity disables it. */
    angularVelocityMin: number;
    /** Upper angular velocity clamp (rad/frame); Infinity disables it. */
    angularVelocityMax: number;
    /** Lower radial acceleration clamp (px/frame²); -Infinity disables it. */
    accelerationMin: number;
    /** Upper radial acceleration clamp (px/frame²); Infinity disables it. */
    accelerationMax: number;
    /** Lower angular acceleration clamp (rad/frame²); -Infinity disables it. */
    angularAccelerationMin: number;
    /** Upper angular acceleration clamp (rad/frame²); Infinity disables it. */
    angularAccelerationMax: number;
    /** Lower heading bound (rad); -Infinity disables it. */
    headingMin: number;
    /** Upper heading bound (rad); Infinity disables it. */
    headingMax: number;
    /** Authoritative travel direction (radians) — drives velocity even from rest. */
    heading: number;
    /** See BulletConfig.homingTurn / homingFrames / spin. */
    homingTurn: number;
    homingFrames: number;
    spin: number;
    /** Heading the shot launched along; homing is capped relative to this. */
    launchHeading: number;
    /** See BulletConfig.homingMaxTurn. */
    homingMaxTurn: number;
    /**
     * Half the width to paint the sprite at, in playfield pixels. 0 keeps the
     * legacy sizing that scales the texture from the hit radius; real .anm cells
     * are authored 1:1, so a game that ships them sets this to the cell size.
     */
    drawRadius: number;
    lifetime: number;
    /** See BulletConfig.maxLifetime. 0 disables the timer. */
    maxLifetime: number;
    /** True while this instance sits in the shared free-list awaiting reuse. */
    isPooled: boolean;
    constructor(config?: BulletConfig);
    /** Re-arm a pooled instance with fresh config so it can be reused. */
    reset(config?: BulletConfig): void;
    /** Point the bullet along an absolute heading, keeping velocity in sync. */
    setHeading(radians: number): void;
    /**
     * Rotate heading toward target by at most maxTurn radians, then resync velocity.
     * This is the bounded steering th08 homing shots use; unlike a raw angularVelocity
     * it can never curl a projectile back into a loop around its own origin.
     */
    turnToward(target: number, maxTurn: number): void;
    /**
     * One bounded homing step. Steers toward `target` by at most `maxTurn`, but never
     * further than homingMaxTurn radians off the launch heading, and gives up once
     * the target sits behind the shot. Those two guards are what keep a homing charm
     * curving toward its mark instead of looping back over the shooter.
     */
    homeToward(target: number, maxTurn: number): boolean;
    /**
     * Polar integrator mirroring th08 MoveVector.runStep exactly:
     *
     *   theta += w;  r += ra;  w += wa;  ra += raa;  wa += waa;  (then clamp)
     *
     * heading/angularVelocity are the radian equivalents of theta/w, and
     * acceleration/jerk the equivalents of ra/raa. `velocity` is re-derived every
     * frame so consumers (BulletSystem culling, renderer rotation) stay in sync —
     * and so bullets that spawn at r:0 still accelerate along their theta.
     */
    update(dt: number): void;
}
//# sourceMappingURL=Bullet.d.ts.map