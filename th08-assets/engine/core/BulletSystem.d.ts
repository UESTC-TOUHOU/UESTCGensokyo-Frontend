import { Bullet, BulletConfig } from './Bullet';
import { EntityTag } from './Entity';
export interface Bounds {
    minX: number;
    maxX: number;
    minY: number;
    maxY: number;
}
export interface BulletSystemConfig extends Partial<Bounds> {
    /** Max pooled Bullet instances to keep for reuse (0 = unlimited). */
    maxPoolSize?: number;
}
/** Resolve the point a homing shot should steer at, or null to fly straight. */
export type HomingAim = (bullet: Bullet) => {
    x: number;
    y: number;
} | null;
export declare const DEFAULT_BOUNDS: Bounds;
export declare class BulletSystem {
    private bullets;
    bounds: Bounds;
    /** Cap for the shared bullet free-list (0 = unlimited). */
    maxPoolSize: number;
    /**
     * Aim provider for bullets carrying a homingTurn. The game layer points this at
     * the nearest live target so player homing shots track it frame by frame.
     */
    homingAim: HomingAim | null;
    /** Debug counters (reported through getStats()). */
    poolReused: number;
    poolAllocated: number;
    constructor(config?: BulletSystemConfig);
    /** Create a bullet from the shared module pool, reusing a dead instance when available. */
    createBullet(config?: BulletConfig): Bullet;
    /** Return a dead bullet to the shared pool (double-release safe, respects the cap). */
    private recycle;
    add(...newBullets: Bullet[]): void;
    update(dt: number): void;
    /**
     * Apply bounded homing steering before the polar integrator runs, so the new
     * heading is the one the frame actually travels along.
     */
    private steerHoming;
    clearAll(tag?: EntityTag): void;
    getBullets(): Bullet[];
    /**
     * Replace the bullet array with externally-managed bullets (ECL adapter).
     * The BulletSystem will render them but not update their physics.
     */
    syncFromEcl(eclBullets: Bullet[]): void;
    getCount(): number;
    /** Number of bullets currently held in the shared reuse pool. */
    get poolSize(): number;
    getStats(): {
        reused: number;
        allocated: number;
        poolSize: number;
    };
}
//# sourceMappingURL=BulletSystem.d.ts.map