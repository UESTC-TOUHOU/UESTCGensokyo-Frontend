import { BulletPattern } from './BulletPattern';
import { Entity } from '../../engine/core/Entity';
import { Bullet } from '../../engine/core/Bullet';
import { EntityTag } from '../../engine/core/Entity';
export interface LinearPatternConfig {
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
export declare class LinearPattern extends BulletPattern {
    config: LinearPatternConfig;
    constructor(config: LinearPatternConfig);
    spawn(emitter: Entity, _time: number, _player?: Entity): Bullet[];
}
//# sourceMappingURL=LinearPattern.d.ts.map