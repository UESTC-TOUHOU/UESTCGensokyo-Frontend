/**
 * Generated from public/assets/th08/raw/stage*.std by tools/th08/std/generate.mjs.
 * Do not edit by hand.
 *
 * The retail stage backdrop, lifted whole: object templates of billboard quads,
 * their placements along the camera corridor, and the camera instruction stream that
 * `Background::OnUpdate` walks one entry per frame. Coordinates are the original
 * world units, so the runtime only has to reproduce the projection to match.
 */
/** One atlas cell of a stage backdrop, with the page that holds it. */
export interface StdSpriteRect {
    readonly page: string;
    readonly x: number;
    readonly y: number;
    readonly w: number;
    readonly h: number;
}
/** Sprite geometry plus the ANM bytecode that animates a quad. */
export interface StdAnmPack {
    readonly rects: readonly (StdSpriteRect | null)[];
    /** ANM script per quad `anmScript`, as base64 little-endian words. */
    readonly scripts: readonly (string | null)[];
}
export declare const TH08_STD_PACKS: readonly (StdAnmPack | null)[];
/** A billboard quad inside an object template. */
export interface StdQuad {
    readonly type: number;
    readonly anmScript: number;
    readonly position: readonly [number, number, number];
    /** Type 0 only: the world size the quad is stretched to. */
    readonly size?: readonly [number, number];
    /** Type 1 only: the far end of the ribbon, and its width. */
    readonly position2?: readonly [number, number, number];
    readonly width?: number;
}
/** An object template: quads that share a position and a draw layer. */
export interface StdObject {
    readonly id: number;
    /** Draw pass, 0..3. Passes 2 and 3 render behind 0 and 1. */
    readonly zLevel: number;
    readonly position: readonly [number, number, number];
    readonly size: readonly [number, number, number];
    readonly quads: readonly StdQuad[];
}
/** One placement of an object template in the corridor. */
export interface StdInstance {
    readonly objectId: number;
    readonly position: readonly [number, number, number];
}
/** One camera instruction; `args` are raw and read as int or float per opcode. */
export interface StdInstr {
    readonly frame: number;
    readonly opcode: number;
    readonly args: readonly [number, number, number];
}
/** Everything one `.std` carries. */
export interface StdStage {
    readonly objects: readonly StdObject[];
    readonly instances: readonly StdInstance[];
    readonly script: readonly StdInstr[];
    /**
     * The header's four `songPaths` slots, `+0x290` to `+0x410`. Slot 0 is the
     * stage theme, and an unused slot is a single space, which `trim` folds to
     * `''`. See `StageSongs.ts` for what the retail loader does with them.
     */
    readonly songPaths: readonly string[];
    /** Index into `TH08_STD_PACKS`, or -1 when the backdrop ANM is missing. */
    readonly pack: number;
}
/** Keyed by the retail file stem, so `stage1_s` is the spell-card variant. */
export declare const TH08_STD: Readonly<Record<string, StdStage>>;
//# sourceMappingURL=th08-std.d.ts.map