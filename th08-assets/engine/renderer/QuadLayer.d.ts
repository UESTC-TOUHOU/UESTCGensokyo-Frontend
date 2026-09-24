/**
 * Pooled textured-quad layer for backdrops authored in 3D.
 *
 * The retail stage backdrop (`stageN.std`) puts sprites on projected quadrilaterals:
 * a ground tile is a trapezoid on screen, a tree is a billboard. `Sprite` only draws
 * axis-aligned rectangles and `Graphics` derives its UVs from the fill's own
 * bounding box, so neither can map a texture onto four arbitrary corners. A `Mesh`
 * can, and because a batched mesh keeps one tint/alpha for the whole element, this
 * layer merges every quad that shares a page *and* an opacity into a single geometry.
 * A whole stage backdrop then costs a handful of draw calls rather than one
 * renderable per quad.
 *
 * Mapping is affine per triangle: the two halves of a quad share their diagonal, so
 * neighbouring tiles still meet exactly at the corners the game projected.
 *
 * A quad may also carry a per-corner depth, which is how the backdrop's hardware fog
 * gets its ramp: the value rides along as a geometry attribute, the rasteriser
 * interpolates it across the sheet, and the shader mixes colour per pixel. Fogged
 * quads land in their own buckets because they need their own shader, and a mesh with
 * a custom shader is drawn one bucket per call rather than batched.
 */
import { Container, Texture } from 'pixi.js';
import type { Shader } from 'pixi.js';
/** One projected quad, in the local space of the container this layer draws into. */
export interface QuadRequest {
    /** Page the quad samples from; quads sharing a page merge into one mesh. */
    texture: Texture;
    /** Identity for batching; usually the page asset key. */
    page: string;
    /** Eight numbers: x,y per corner, paired with `uv` in the same order. */
    screen: readonly number[];
    /** Eight numbers: u,v per corner in *page pixels*. */
    uv: readonly number[];
    /** Layer opacity (0..1), as the game authored it - the fog does not live here. */
    alpha: number;
    /** Additive instead of alpha blend; kept in its own bucket so blending stays uniform. */
    additive?: boolean;
    /**
     * Four view-space depths, one per corner, in the same order as `screen`.
     *
     * Present and the quad is fogged: it goes to a bucket wearing the fog shader, which
     * mixes the fragment toward the layer's current fog colour along `near`..`far`.
     * Absent and the quad is drawn as authored, which is how the additive layers stay -
     * hardware fog would have brightened them rather than fading them.
     */
    depth?: readonly number[];
}
/** How a fogged bucket gets its program. Supplied by the renderer that owns the fog. */
export interface QuadLayerOptions {
    /** Built once per sprite page, because the texture bind group lives inside it. */
    fogShader?: (texture: Texture) => Shader;
}
export declare class QuadLayer {
    private readonly container;
    private readonly options;
    /** Insertion order is draw order, so buckets appear in the order the stage emits them. */
    private readonly buckets;
    private readonly live;
    constructor(container: Container, options?: QuadLayerOptions);
    /** Begin a frame: buffers are kept, only the fill counters reset. */
    begin(): void;
    push(quad: QuadRequest): void;
    /** Publish the frame: slots past the last quad collapse to zero area. */
    end(): void;
    /** Tear every mesh down; used when the stage pack changes. */
    clear(): void;
    get bucketCount(): number;
    get quadCount(): number;
    private ensure;
    private grow;
    /** Every slot starts as a zero-area triangle so unused room draws nothing. */
    private degenerateIndices;
}
//# sourceMappingURL=QuadLayer.d.ts.map