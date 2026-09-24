/**
 * Shot dispatch: translate ECL shot setup instructions into bullets.
 *
 * In the original, DispatchShotInstruction reads the shot descriptor stored
 * by ECL opcode 104 (shotSetup) and creates bullets via BulletManager. The
 * descriptor holds: type, color, count, base angle, spread, speed, and flags.
 *
 * We pack the descriptor into the EnemySlot and fire on the next tick.
 */
import type { EnemySlot } from './EnemySlot';
import { BulletPool } from './BulletPool';
export interface ShotDescriptor {
    type: number;
    color: number;
    count: number;
    angle: number;
    spread: number;
    speed: number;
    speedVar: number;
    flags: number;
}
/** Default shot descriptor (single aimed bullet). */
export declare function defaultShotDesc(): ShotDescriptor;
/** Fire one volley from a shot descriptor. */
export declare function fireShotVolley(enemy: EnemySlot, desc: ShotDescriptor, pool: BulletPool, playerX: number, playerY: number): number;
/**
 * Ring pattern: evenly spaced bullets around 360 degrees.
 * This is the most common Touhou bullet pattern.
 */
export declare function fireRing(x: number, y: number, count: number, speed: number, offset: number, type: number, color: number, pool: BulletPool): number;
/**
 * Fan pattern: bullets spread in an arc from a base angle.
 */
export declare function fireFan(x: number, y: number, count: number, speed: number, baseAngle: number, totalSpread: number, type: number, color: number, pool: BulletPool): number;
/**
 * Aimed pattern: bullets aimed at the player position with optional spread.
 */
export declare function fireAimed(x: number, y: number, playerX: number, playerY: number, count: number, speed: number, spread: number, type: number, color: number, pool: BulletPool): number;
//# sourceMappingURL=ShotDispatch.d.ts.map