import { BulletPattern, BulletFactory } from './BulletPattern';
import { Entity } from '../../engine/core/Entity';
import { Bullet } from '../../engine/core/Bullet';
export declare class CompositePattern extends BulletPattern {
    patterns: BulletPattern[];
    constructor(patterns: BulletPattern[]);
    /** Propagate the factory to every child pattern so composite bullets pool too. */
    withFactory(factory: BulletFactory): this;
    spawn(emitter: Entity, time: number, player?: Entity): Bullet[];
}
//# sourceMappingURL=CompositePattern.d.ts.map