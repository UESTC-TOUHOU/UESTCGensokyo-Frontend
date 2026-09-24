import { BulletPattern } from './BulletPattern';
import { Entity } from '../../engine/core/Entity';
import { Bullet } from '../../engine/core/Bullet';
import { EntityTag } from '../../engine/core/Entity';
export interface AimingPatternConfig {
    count?: number;
    speed: number;
    spreadAngle?: number;
    radius?: number;
    color?: number;
    tag?: EntityTag;
    /** Sprite key resolved by the renderer's SpriteManager. */
    sprite?: string;
}
/** Self-aiming spread — targets the player, then delegates to the shared spread generator. */
export declare class AimingPattern extends BulletPattern {
    config: AimingPatternConfig;
    constructor(config: AimingPatternConfig);
    spawn(emitter: Entity, _time: number, player?: Entity): Bullet[];
}
//# sourceMappingURL=AimingPattern.d.ts.map