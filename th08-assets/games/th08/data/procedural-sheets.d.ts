import type { AnimatedSheet, PixiRenderer } from '../../../engine/renderer/PixiRenderer';
/** Our member art is painted taller than a Taisei frame, so it needs its own fit. */
export declare const PLAYER_PAINTED_SCALE = 0.6;
/** How many loop frames the manifest holds for each 'boss:<key>' / 'enemy:<key>'. */
export declare function proceduralFrameCounts(keys?: string[]): Map<string, number>;
/** Every sprite key of one kind that has a usable frame loop in the manifest. */
export declare function proceduralSpriteKeys(kind: 'boss' | 'enemy', keys?: string[]): string[];
/** Build the sheet for one procedural sprite; frame 0 doubles as the static art. */
export declare function proceduralSheet(kind: 'boss' | 'enemy', spriteKey: string, frames?: number): AnimatedSheet;
/** How many idle frames the manifest holds for each procedurally painted member. */
export declare function proceduralPlayerFrames(keys?: string[]): Map<string, number>;
/**
 * Register the procedural idle loops. Returns how many slots were filled so a
 * test can catch the asset generator and the client drifting apart.
 *
 * Members also get a 'player-painted:<id>' slot holding our own loop even where
 * Taisei ships art. That is what the 自机画风 option switches between: upstream
 * animation for the three characters Taisei covers, or one consistent in-house
 * look for all eight.
 */
export declare function registerProceduralSheets(renderer: PixiRenderer): number;
//# sourceMappingURL=procedural-sheets.d.ts.map