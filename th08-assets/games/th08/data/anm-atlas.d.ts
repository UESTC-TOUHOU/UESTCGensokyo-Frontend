/**
 * Shared helper for cutting cells out of the extracted `.anm` texture pages.
 *
 * Every TH08 art pack ships one or more pages plus a table of sprite rects. Pixi
 * can address a rect inside a page directly, so one page costs a single GPU
 * upload no matter how many cells the game reads from it.
 */
import { Texture } from 'pixi.js';
import type { PixiRenderer } from '../../../engine/renderer/PixiRenderer';
/** One atlas cell: a rect on a page, addressed by its ANM sprite id. */
export interface AtlasCell {
    id: number;
    x: number;
    y: number;
    w: number;
    h: number;
}
/**
 * Load a page as a texture, pixel-crisp.
 * The retail art is authored at 1x, so any filtering turns it to mush.
 */
export declare function loadAnmPage(url: string): Promise<Texture | null>;
/** Cut every cell out of one page, keyed by sprite id. */
export declare function sliceAnmPage(url: string, cells: AtlasCell[]): Promise<Map<number, Texture>>;
/** Publish a texture under `name`, reporting whether anything was registered. */
export declare function publish(renderer: PixiRenderer, name: string, texture: Texture | undefined): boolean;
//# sourceMappingURL=anm-atlas.d.ts.map