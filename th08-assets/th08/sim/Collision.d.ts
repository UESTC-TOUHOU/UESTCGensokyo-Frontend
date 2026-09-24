/**
 * Bullet/ship collision for the simulation.
 *
 * 永夜抄 tests the ship against every incoming object as a pair of axis-aligned
 * boxes that are both centred on their own position: the ship's box is
 * `plyNNa.sht + 0x0C / 2` (`Player.cpp:1619-1633`) and the bullet's is its size
 * halved (`Player.cpp:323-326`). Overlap therefore reduces to a per-axis sum test,
 * which is what these functions do. The circle they replace was wrong in both
 * directions: too generous on the diagonals, and blind to a big bullet whose *box*
 * reaches the ship even when its centre does not.
 */
import type { Bullet } from './BulletPool';
import type { Laser } from './LaserPool';
import type { EnemySlot } from './EnemySlot';
import type { PlayerSim } from './PlayerSim';
/**
 * How far outside a bullet's own box the graze test reaches
 * (`Player::FUN_0044a470`, `Player.cpp:380-383`: `- 20.0f` on every side).
 */
export declare const GRAZE_BULLET_MARGIN = 20;
/**
 * Out-param for how many pair tests a frame actually ran.
 *
 * The debug overlay's `Collision Checks` line is only interesting as a cost
 * measure, so it counts the tests the loops above really perform rather than the
 * number of objects on the field: a bullet that is not live never reaches a
 * comparison and never earns one.
 */
export interface CollisionStats {
    checks: number;
}
export interface HitResult {
    bullet: Bullet;
    target: 'player' | 'enemy';
    enemySlot?: EnemySlot;
}
/**
 * Check enemy bullets against the player. Returns hits + grazes.
 *
 * `hitboxHalfExtent` is `plyNNa.sht + 0x0C / 2` and `grazeHalfExtent` is
 * `+0x10 / 2`, per `Player::AddedCallback` (`Player.cpp:1619-1633`).
 */
export declare function checkPlayerCollisions(bullets: Bullet[], player: PlayerSim, hitboxHalfExtent: number, grazeHalfExtent: number, stats?: CollisionStats): {
    hits: Bullet[];
    grazes: Bullet[];
};
/** Check player bullets against enemies. Returns hits per enemy. */
export declare function checkEnemyCollisions(bullets: Bullet[], enemies: EnemySlot[]): Map<EnemySlot, Bullet[]>;
/**
 * `Player::CalcLaserHitbox` (`Player.cpp:421-477`).
 *
 * A laser is an oriented box, but retail never rotates the box: it rotates the
 * *player* by minus the beam angle around the beam's anchor, which puts both into
 * the same axis-aligned frame, and then does a plain AABB test. The laser's
 * `centerX`/`centerY` are already in that frame, so the only world-space number
 * the transform needs is the anchor.
 *
 * The graze pass is not per-beam-continuous: retail only offers it on every
 * twentieth frame of the holding phase, which is why grazing a slow laser in
 * EoSD pays in visible steps.
 */
export declare function checkLaserCollisions(lasers: Laser[], player: PlayerSim, playerRadius: number, stats?: CollisionStats): {
    hits: Laser[];
    grazes: Laser[];
};
//# sourceMappingURL=Collision.d.ts.map