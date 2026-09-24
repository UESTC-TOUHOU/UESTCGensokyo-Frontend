import { BulletPattern } from './BulletPattern';
import { Entity, EntityTag } from '../../engine/core/Entity';
import { Bullet } from '../../engine/core/Bullet';
export interface CircularPatternConfig {
    count: number;
    speed: number;
    angleOffset?: number;
    radius?: number;
    color?: number;
    angularVelocity?: number;
    acceleration?: number;
    tag?: EntityTag;
    /** Sprite key resolved by the renderer's SpriteManager (e.g. 'bullet_ring'). */
    sprite?: string;
}
export declare class CircularPattern extends BulletPattern {
    config: CircularPatternConfig;
    constructor(config: CircularPatternConfig);
    spawn(emitter: Entity, _time: number, _player?: Entity): Bullet[];
}
//# sourceMappingURL=CircularPattern.d.ts.map