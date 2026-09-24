/**
 * Adapter that wraps ECL sim-layer entities (EnemySlot, BulletPool) into
 * engine-layer entities (Enemy, Bullet) so the existing PixiRenderer can
 * draw them without changes.
 *
 * This is the bridge between the deterministic sim layer (src/th08/sim/)
 * and the presentation layer (src/engine/renderer/).
 */
import { Enemy } from '../../touhou-common/enemy/Enemy';
import { Bullet } from '../../engine/core/Bullet';
import type { EnemySlot } from '../../th08/sim/EnemySlot';
import type { Bullet as SimBullet } from '../../th08/sim/BulletPool';
import type { Laser as SimLaser } from '../../th08/sim/LaserPool';
import type { LaserView } from '../../engine/renderer/PixiRenderer';
/**
 * Asset slot for an enemy on this frame.
 *
 * The ECL ANM script number selects an `enemy.anm` animation, and the lifted
 * table says which atlas cell that animation shows `timer` frames into the
 * enemy's life. Unknown scripts keep the script number so the fallback painter
 * still draws something distinct per script.
 */
export declare function enemySpriteKey(slot: EnemySlot): string;
/**
 * Convert active EnemySlots into engine Enemy objects for the renderer.
 * Reuses wrappers across frames to avoid GC pressure.
 */
export declare function adaptEclEnemies(slots: EnemySlot[]): Enemy[];
/**
 * Convert active sim bullets into engine Bullet objects for the renderer.
 */
export declare function adaptEclBullets(simBullets: SimBullet[]): Bullet[];
/**
 * Turn live sim lasers into the rotated rectangles the renderer draws.
 *
 * The sim keeps its geometry in beam space — `tail` and `head` measured along the
 * heading from the anchor — because that is how retail stores it and how the
 * hitbox test wants it. Here the centre comes back out into playfield space.
 */
export declare function adaptEclLasers(simLasers: SimLaser[]): LaserView[];
/** Reset caches between stages. */
export declare function resetEclAdapters(): void;
//# sourceMappingURL=EclAdapter.d.ts.map