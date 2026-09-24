/**
 * ECL bullet type + colour -> the etama cell to draw, addressed the way retail
 * addresses it: the type selects a template ANM script whose first sprite is the
 * base cell, and the colour index is added to it
 * (`BulletManager::FUN_0042f5f0`). `tools/th08/anm/generate-etama.mjs` lifted
 * both halves of that from `etama.anm`, so nothing here is guessed.
 */
import { type BulletTypeDef } from './th08-etama-anm';
/** Template entry for one ECL bullet type, or the pellet when out of range. */
export declare function bulletTypeOf(type: number): BulletTypeDef;
/** Etama sprite id for a bullet, clamped to the atlas. */
export declare function getEtamaSpriteId(type: number, color: number): number;
/** Half the drawn sprite, in playfield pixels: 8x8 pellet -> 4, 32 rice -> 16. */
export declare function getBulletDrawRadius(type: number, color: number): number;
/**
 * Collision radius for a bullet type.
 *
 * Retail chains bullets into per-size buckets (`bullet+0xd42`) and keeps the
 * circle it tests somewhere inside the drawn sprite, which the decompile does
 * not name. EoSD's feel is a small core, so the radius tracks the drawn size at
 * a little under half and never exceeds 6px, which is what makes hugging the
 * 48px eyeballs possible.
 */
export declare function getBulletHitRadius(type: number): number;
/**
 * Asset key for the sliced cell, matching the names
 * `th08-bullet-registration.ts` publishes.
 */
export declare function getBulletTextureKey(type: number, color: number): string;
/**
 * Etama sprite id for a laser body. `SpawnLaserPattern` skips the bullet type
 * table and runs ANM script `bulletType + 10` instead, then adds the colour index
 * to whatever sprite that script selected (`BulletManager.cpp:726-727`).
 */
export declare function getLaserSpriteId(type: number, color: number): number;
/** Asset key for a laser's body cell, in the same naming as ordinary bullets. */
export declare function getLaserTextureKey(type: number, color: number): string;
//# sourceMappingURL=th08-bullet-types.d.ts.map