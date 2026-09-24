import { Graphics } from 'pixi.js';
/** Procedural sprite draw hook — renders one sprite instance onto shared Graphics. */
export type SpriteDrawFn = (g: Graphics, x: number, y: number, opts: {
    color: number;
    radius: number;
    rotation?: number;
    alpha?: number;
}) => void;
export interface BulletTextureOptions {
    /** Logical colour ramp baked into the texture atlas, e.g. { red: 0xff3366 }. */
    palette: Record<string, number>;
    /** Shape suffixes available for every palette entry, e.g. ['ball','ring']. */
    shapes: string[];
    /** Texture key template; `{shape}` and `{color}` are substituted. */
    template?: string;
}
/** Snap an arbitrary RGB int to the nearest baked palette colour name. */
export declare function nearestPaletteName(color: number, palette: Record<string, number>): string | null;
/**
 * Registry of named, procedurally-drawn sprites (zero external assets).
 * Bullets carry a `sprite` key; the renderer looks it up here so visual style
 * is data-driven (`sprite: 'bullet_ring'`) instead of hardcoded per tag.
 * Unknown keys fall back to `defaultSprite`.
 */
export declare class SpriteManager {
    private sprites;
    private defaultSprite;
    /** sprite key -> texture shape (e.g. bullet_small -> ball). */
    private shapeByKey;
    /** sprite key -> standalone texture name (player shots, entity sprites). */
    private textureByKey;
    private bulletTexture;
    constructor(defaultSprite?: SpriteDrawFn);
    register(key: string, draw: SpriteDrawFn): void;
    /** Enable baked bullet textures (one PNG per shape x palette colour). */
    setBulletTextures(options: BulletTextureOptions | null): void;
    /** Map a bullet `sprite` key onto a baked texture shape. */
    registerBulletShape(spriteKey: string, shape: string): void;
    /** Map a sprite key onto a single texture name (no colour ramp). */
    registerTexture(spriteKey: string, textureKey: string): void;
    /**
     * Texture name for a bullet, or null when the procedural fallback should draw it.
     * Falls back to the palette's `master` entry so unknown colours still render.
     */
    bulletTextureKey(spriteKey: string, color: number): string | null;
    /** Standalone texture name registered for a sprite key. */
    textureKey(spriteKey: string): string | undefined;
    has(key: string): boolean;
    draw(g: Graphics, key: string, x: number, y: number, opts: {
        color: number;
        radius: number;
        rotation?: number;
        alpha?: number;
    }): void;
    /** Classic glowing orb: white halo + colored core. */
    static ball: SpriteDrawFn;
    /** Hollow ring danmaku (Demarcation-style boundary bullets). */
    static ring: SpriteDrawFn;
    /** Elongated needle, oriented along `rotation` (velocity angle). */
    static needle: SpriteDrawFn;
    /** 5-point star (fairy / item-flavored bullets). */
    static star: SpriteDrawFn;
}
//# sourceMappingURL=SpriteManager.d.ts.map