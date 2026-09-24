export interface TaiseiAnimGroup {
    /** Frame indices into the sprite sheet, in playback order. */
    frames: number[];
    /** Frames held per animation step. */
    delay: number;
    /** True when Taisei draws the group horizontally mirrored. */
    mirror: boolean;
}
export type TaiseiAnim = Record<string, TaiseiAnimGroup>;
/** Every vendored Taisei texture, keyed as taisei:<kind>:<name>[:frameNNNN]. */
export declare const TAISEI_TEXTURES: Record<string, string>;
/** Animation groups parsed from the upstream .ani files. */
export declare const TAISEI_ANIM: Record<string, TaiseiAnim>;
/** Taisei sprite name per playable character (teams without upstream art stay procedural). */
/**
 * Taisei ships an animated player sheet for exactly three of the eight playable
 * members; the rest keep the procedurally painted idle loop.
 */
export declare const TAISEI_PLAYER_BY_CHARACTER: Record<string, string>;
/** Taisei enemy sheet per stage spriteKey. */
export declare const TAISEI_ENEMY_BY_SPRITEKEY: Record<string, string>;
/** Taisei boss sheet per boss spriteKey (missing bosses keep the procedural painter). */
export declare const TAISEI_BOSS_BY_SPRITEKEY: Record<string, string>;
/** Uniform on-screen scale: Taisei art is authored for a 640x480 viewport. */
export declare const TAISEI_SCALE = 0.6;
//# sourceMappingURL=taisei-assets.d.ts.map