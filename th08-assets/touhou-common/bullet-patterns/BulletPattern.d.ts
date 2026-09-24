import { Entity, EntityTag } from '../../engine/core/Entity';
import { Bullet, BulletConfig } from '../../engine/core/Bullet';
/** Bullet creation hook — lets the game route bullets through its object pool. */
export type BulletFactory = (config: BulletConfig) => Bullet;
export declare abstract class BulletPattern {
    /** Defaults to the shared Bullet pool; override with withFactory() to route elsewhere. */
    protected factory: BulletFactory;
    /** Override how spawned bullets are created (used for object pooling). */
    withFactory(factory: BulletFactory): this;
    abstract spawn(emitter: Entity, time: number, player?: Entity): Bullet[];
}
export interface SpreadBulletConfig {
    count: number;
    speed: number;
    baseAngle: number;
    spreadAngle?: number;
    radius?: number;
    color?: number;
    tag?: EntityTag;
    /** Sprite key resolved by the renderer's SpriteManager. */
    sprite?: string;
}
/** Shared fan/spread bullet generator used by Linear & Aiming patterns. */
export declare function spawnSpread(factory: BulletFactory, emitter: Entity, config: SpreadBulletConfig): Bullet[];
//# sourceMappingURL=BulletPattern.d.ts.map