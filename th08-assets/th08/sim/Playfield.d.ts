/**
 * Touhou 8 playfield constants.
 *
 * The original runs at 384x448 (arcadeRegionSize) inside a 640x480 window,
 * with the HUD panel occupying the right 256px.
 */
export declare const PLAYFIELD_W = 384;
export declare const PLAYFIELD_H = 448;
export declare const PLAYFIELD_CENTER_X: number;
export declare const PLAYFIELD_CENTER_Y: number;
export declare const WINDOW_W = 640;
export declare const WINDOW_H = 480;
/** Respawn point: center-x, height - 64. */
export declare const RESPAWN_X: number;
export declare const RESPAWN_Y: number;
/**
 * `GameManager::IsWithinPlayfield`, inverted. The original measures the drawn
 * sprite box rather than the bullet's centre, so a 48px eyeball is still on
 * screen when a pellet fired from the same spot has already been culled. Both
 * the cull in `BulletPool` and the bounce handler ask this one question.
 */
export declare function outsidePlayfield(x: number, y: number, width: number, height: number): boolean;
//# sourceMappingURL=Playfield.d.ts.map