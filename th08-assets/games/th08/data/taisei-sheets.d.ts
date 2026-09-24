import type { PixiRenderer } from '../../../engine/renderer/PixiRenderer';
/**
 * Hand the renderer the real Taisei sprite sheets.
 *
 * Keys follow the slots PixiRenderer looks up: 'player:<characterId>',
 * 'enemy:<spriteKey>' and 'boss:<spriteKey>'. Anything Taisei does not ship
 * (Sakuya's team, the TH08-only bosses) is simply left unregistered so the
 * procedural painter keeps working.
 */
export declare function registerTaiseiSheets(renderer: PixiRenderer): number;
//# sourceMappingURL=taisei-sheets.d.ts.map