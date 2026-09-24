/**
 * Register the original TH08 stage backgrounds as renderer parallax layers.
 *
 * The engine asks for `bg:<theme>:sky|mid|near`. The retail game ships those
 * layers as cells of `stg<N>bg.anm`: one or more painted sheets (which scroll)
 * plus small bush decals that do not belong on a tiling layer. Layers the pack
 * cannot fill get their placeholder unregistered, so nothing hand-painted by us
 * is left on screen.
 */
import type { PixiRenderer } from '../../../engine/renderer/PixiRenderer';
/**
 * Slice every stage atlas and publish the parallax layers per theme.
 * Returns the number of layer textures registered.
 */
export declare function registerTH08Backgrounds(renderer: PixiRenderer): Promise<number>;
//# sourceMappingURL=th08-bg-registration.d.ts.map