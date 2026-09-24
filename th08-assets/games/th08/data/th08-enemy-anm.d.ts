/**
 * Generated from public/assets/th08/manifest.json (enemy.anm) by
 * tools/th08/anm/generate.mjs. Do not edit by hand.
 */
/** Texture page the enemy art lives on. */
export declare const TH08_ENEMY_ANM_PAGE = "/assets/th08/anm/enemy_t0.png";
/** One cell of the enemy atlas, in page pixels. */
export interface EnemyAnimRect {
    readonly x: number;
    readonly y: number;
    readonly w: number;
    readonly h: number;
}
/** One frame of an enemy animation. */
export interface EnemyAnimationFrame {
    /** Sprite id within the atlas. */
    readonly sprite: number;
    /** Frames this cell stays on screen. */
    readonly duration: number;
}
/** A lifted ANM script: the sprite cycle plus its loop length. */
export interface EnemyAnimation {
    readonly frames: readonly EnemyAnimationFrame[];
    /** Total frames of one loop; 0 when the script draws nothing. */
    readonly total: number;
}
/** Atlas cells indexed by ANM sprite id (0..156); null when the id is unused. */
export declare const TH08_ENEMY_ANM_RECTS: readonly (EnemyAnimRect | null)[];
/** Animations indexed by the ECL ANM script number. */
export declare const TH08_ENEMY_ANM_SCRIPTS: readonly EnemyAnimation[];
/**
 * The untouched VM bytecode of each script, base64-encoded and indexed by script
 * number. `AnmVm` runs these directly, which is what gives enemies their real
 * movement: the sprite cycle above only says which cell to show.
 */
export declare const TH08_ENEMY_ANM_BYTES: readonly (string | null)[];
/** The untouched bytecode of one script, or null when the id is unused. */
export declare const enemyAnmBytes: (script: number) => string | null;
/**
 * The atlas cell an ECL ANM script shows `age` frames after the enemy spawned.
 * Returns null when the script is unknown or draws nothing.
 */
export declare function enemyAnimCell(script: number, age: number): number | null;
/** Page rect for an atlas cell. */
export declare function enemyAnimRect(sprite: number): EnemyAnimRect | null;
//# sourceMappingURL=th08-enemy-anm.d.ts.map