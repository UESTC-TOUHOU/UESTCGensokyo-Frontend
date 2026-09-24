/**
 * Generated from public/assets/th08/manifest.json (etama.anm) by
 * tools/th08/anm/generate-etama.mjs. Do not edit by hand.
 *
 * Bullet art in EoSD is addressed by `(bulletType, color)`: the type picks a
 * template ANM script whose first sprite is the base, and the colour index is
 * added to it (`BulletManager::FUN_0042f5f0`).
 */
/** Texture pages, indexed by the sprite cells below. */
export declare const TH08_ETAMA_PAGES: readonly string[];
/** One atlas cell: a rect on one of the pages. */
export interface EtamaCell {
    readonly page: number;
    readonly x: number;
    readonly y: number;
    readonly w: number;
    readonly h: number;
}
/** Sprite id -> cell, the same numbering the ANM scripts address. */
export declare const TH08_ETAMA_CELLS: readonly (EtamaCell | null)[];
/**
 * One ECL bullet type: the template script, the sprite it selects, and the two
 * size numbers retail derived from that sprite height.
 */
export interface BulletTypeDef {
    readonly script: number;
    readonly baseSprite: number;
    /** Half of the drawn sprite in pixels: where retail anchors it. */
    readonly drawOffset: number;
    /** `bullet+0xd42` size class, 0 (largest) .. 5 (smallest). */
    readonly bucket: number;
}
export declare const TH08_BULLET_TYPES: readonly BulletTypeDef[];
/** `g_BulletSpriteScripts`: five template VM scripts per bullet type. */
export declare const TH08_BULLET_SCRIPTS: readonly (readonly number[])[];
/**
 * One ECL laser type: the ANM script `SpawnLaserPattern` runs, and the sprite
 * that script selects before the colour index is added.
 */
export interface LaserTypeDef {
    readonly script: number;
    readonly baseSprite: number;
}
export declare const TH08_LASER_TYPES: readonly LaserTypeDef[];
/** Highest sprite id, so callers can clamp before indexing. */
export declare const TH08_ETAMA_SPRITE_COUNT = 338;
//# sourceMappingURL=th08-etama-anm.d.ts.map