import { Entity } from '../../engine/core/Entity';
import { Vector2 } from '../../engine/core/Vector2';
import { Bullet } from '../../engine/core/Bullet';
import { BulletPattern, BulletFactory } from '../bullet-patterns/BulletPattern';
import { DropTier } from '../item/ItemSystem';
export interface EnemyMovementWayPoint {
    time: number;
    velocity: Vector2;
}
export interface EnemyConfig {
    hp?: number;
    scoreValue?: number;
    radius?: number;
    color?: number;
    dropItems?: boolean;
    shootInterval?: number;
    shootPattern?: BulletPattern;
    movementWayPoints?: EnemyMovementWayPoint[];
    bulletFactory?: BulletFactory;
    /** Texture lookup name, e.g. "fairy" -> enemy:fairy. */
    spriteKey?: string;
    /** Drop generosity; defaults from HP when unset. */
    dropTier?: DropTier;
}
export declare class Enemy extends Entity {
    hp: number;
    maxHp: number;
    scoreValue: number;
    color: number;
    shootInterval: number;
    shootPattern?: BulletPattern;
    timer: number;
    waypoints: EnemyMovementWayPoint[];
    /** Art key resolved by the renderer; defaults to the palette-derived kind. */
    spriteKey?: string;
    /** Drop tier used when this enemy dies; see `dropTierFor`. */
    dropTier?: DropTier;
    alpha: number;
    /**
     * Extra magnification the renderer applies on top of the art's native size.
     * TH08 keeps this on the enemy's ANM script, which scales sprites in on
     * entry and out on death; 1 leaves the original cell untouched.
     */
    drawScale: number;
    constructor(position?: Partial<Vector2>, velocity?: Partial<Vector2>, config?: EnemyConfig);
    /**
     * Tier of loot this enemy yields. Explicit config wins; otherwise a tough
     * enemy is treated as an elite and drops the large power item.
     */
    dropTierFor(): DropTier;
    takeDamage(amount: number): boolean;
    update(dt: number): void;
    updateAI(_dt: number, player?: Entity): Bullet[];
}
//# sourceMappingURL=Enemy.d.ts.map