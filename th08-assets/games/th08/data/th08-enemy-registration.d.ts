/**
 * Register the original TH08 enemy and boss art extracted from `enemy.anm`.
 *
 * The runtime never interprets ANM: tools/th08/anm/generate.mjs lifted every
 * script into a sprite cycle (src/games/th08/data/th08-enemy-anm.ts), so here we
 * only cut the atlas cells out of the texture page and publish them under the
 * names EclAdapter asks for.
 */
import type { PixiRenderer } from '../../../engine/renderer/PixiRenderer';
/**
 * The registered asset suffix for one cell of a stage pack, or null when the
 * pack or the id is unknown. Callers prefix it with `enemy:stage-`.
 */
export declare function stageEnemyCellKey(pack: string, sprite: number): string | null;
/**
 * Register common enemy and boss cells plus the per-stage prop atlases.
 *
 * Enemy animation is driven from the sim: EclAdapter resolves
 * (anmScript, slot timer) to a cell id and asks for `enemy:<cell>`.
 * Returns the number of textures registered.
 */
export declare function registerTH08EnemySprites(renderer: PixiRenderer): Promise<number>;
//# sourceMappingURL=th08-enemy-registration.d.ts.map