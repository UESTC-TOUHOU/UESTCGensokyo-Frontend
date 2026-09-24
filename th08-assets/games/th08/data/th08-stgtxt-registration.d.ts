/**
 * Publish the original 阶段标题卡 art to the renderer.
 *
 * `Gui.cpp:2281` preloads `stgNNtxt.anm` for the stage that is loading, and
 * `:2307` runs its scripts 0..3 the moment the stage takes the screen. The art is
 * one 512x256 page holding the stage number, the stage name, the poem, and the two
 * boss lines; the motion is the ANM bytecode lifted into `th08-stgtxt-anm.ts`.
 *
 * The page itself is extracted original art and stays out of the repository, so a
 * checkout without it loses the banner rather than failing to boot.
 */
import type { PixiRenderer } from '../../../engine/renderer/PixiRenderer';
/** Renderer key for one title-card cell. */
export declare function stageTitleKey(pack: string, sprite: number): string;
/** The `stgNNtxt` pack a campaign route draws its card from. */
export declare function stageTitlePackFor(route: string): string | null;
/** The ANM words for one title-card script, or null when the id is unused. */
export declare function stageTitleScript(pack: string, script: number): Int32Array | null;
/**
 * Load and register every title-card cell.
 *
 * Returns the number of textures published, which is zero when the extracted art
 * is absent; the overlay treats a missing cell as "draw nothing", exactly as the
 * face cut-in does.
 */
export declare function registerTH08StageTitles(renderer: PixiRenderer): Promise<number>;
//# sourceMappingURL=th08-stgtxt-registration.d.ts.map