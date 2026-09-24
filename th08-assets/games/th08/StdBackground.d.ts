/**
 * The retail .std stage backdrop, rebuilt on the engine's own 3D path.
 *
 * `stageN.std` is not a picture: it is a small 3D scene plus a camera script.
 * Object templates hold quads (a ground tile, a tree sprite, a ribbon of water),
 * instances place those templates along a corridor measured in world units, and an
 * instruction stream drives a chase camera down it, one entry per frame. This file
 * replays all three: `tick()` advances the camera script exactly as
 * `Background::OnUpdate`, and `quads()` reproduces `Background::RenderObjects`
 * projection math so each quad arrives in playfield pixels for the renderer to put
 * on a mesh. Nothing here draws: the layer stays a pure function from frame number
 * to geometry, which is what makes it testable.
 *
 * Distances are the originals; the playfield is the 384x448 viewport the game sets
 * at `Background.cpp:728`, given here in playfield-local pixels.
 */
export declare const STD_VIEW_W = 384;
export declare const STD_VIEW_H = 448;
/** One projected backdrop quad, ready for the renderer's mesh layer. */
export interface StdQuadView {
    /** Page the sprite lives on, as shipped in the pack (`/assets/.../stg1bg_t0.png`). */
    page: string;
    /** Eight numbers: screen x,y per corner, in playfield pixels. */
    screen: number[];
    /** Eight numbers: u,v per corner in page pixels, in the same order as `screen`. */
    uv: number[];
    /** Opacity the ANM script asked for (0..1); the fog does not live here. */
    alpha: number;
    /**
     * Four view-space depths, one per corner, in the same order as `screen`.
     *
     * This is the hardware fog's input, not a fade: `D3DRS_FOGSTART`/`FOGEND` make a
     * linear ramp out of camera-space depth, the rasteriser interpolates it across the
     * sheet, and the fragment gets mixed toward `D3DRS_FOGCOLOR` per pixel. So one big
     * ground tile carries its own whole gradient, and `alpha` stays what the ANM script
     * asked for instead of standing in for the fog.
     *
     * The colour mix is the reason this channel exists. 38 of the 52 fog settings in
     * the shipped `.std` files name a fog that is not black - stage 4 alone runs
     * `(240,192,192)`, `(240,48,48)` and `(224,192,192)`, stage 8 `(48,48,240)` - and
     * fading alpha toward a black clear threw all of it away. Two ways of faking it
     * from outside a shader were tried and are gone: a flat fog-coloured underlay
     * painted fog into every sheet's transparent holes, and a tinted re-draw could not
     * work either, because a tint multiplies the texel and so arrives shaded by the
     * scenery it was supposed to replace. See `engine/renderer/FogShader.ts`.
     *
     * Additive layers get no depth: hardware fog would mix them *toward* the fog
     * colour, which brightens the frame rather than receding the layer.
     */
    depth?: readonly number[];
    /** The ANM script asked for additive blending. */
    additive: boolean;
}
export interface Vec3 {
    x: number;
    y: number;
    z: number;
}
/** `Background + 0xAEC..0xAF4`: the linear ramp plus the colour it mixes toward. */
export interface Fog {
    color: number;
    near: number;
    far: number;
}
export interface StdBackgroundOptions {
    /** `stage1`, `stage4a`, `stage6_s`. */
    key: string;
    /** Width/height of the playfield in the space the quads are written for. */
    viewWidth?: number;
    viewHeight?: number;
}
/**
 * One stage backdrop: camera script, object instances, and the quads they make.
 *
 * Frames are the stage's own 60 Hz count, so `tick()` belongs next to the sim tick
 * rather than to the renderer.
 */
export declare class StdBackground {
    private readonly stage;
    private readonly pack;
    private readonly viewW;
    private readonly viewH;
    private readonly cullDistSq;
    /** Current, target, start and the two hermite control sets, as in the original. */
    private cur;
    private target;
    private start;
    private ctrl2;
    private ctrl3;
    private duration;
    private timers;
    private modes;
    private fog;
    private fogFrom;
    private fogTo;
    private fogDuration;
    private fogTimer;
    /** The clear colour the game paints behind the backdrop (`Background + 0x830`). */
    private clearColor;
    /** Scroll offset: how far down the corridor this frame's camera has travelled. */
    private scroll;
    private swayMode;
    private insn;
    private frame;
    /** One VM per authored quad; the scripts animate sprite, scale, colour, anchor. */
    private readonly vms;
    private readonly viewMatrix;
    private readonly proj;
    private readonly viewProj;
    private quads;
    /** Where each object's quads sit in the flat VM list, in `LoadStageData`'s order. */
    private readonly quadBase;
    /** 1 = a spell card is fading the backdrop out, 2 = its own backdrop is up. */
    spellBackgroundState: number;
    private spellTimer;
    constructor(options: StdBackgroundOptions);
    /** Frames this backdrop has been running, for tests and the debug line. */
    get currentFrame(): number;
    get quadCount(): number;
    /**
     * Bind one VM per authored quad, the way `LoadStageData` does: the script comes
     * from the stage's own `.anm`, and the sprite size is the cell it draws.
     */
    private attachScripts;
    /** Advance one frame: camera script first, then the per-quad animation, then geometry. */
    tick(): void;
    /** The geometry to draw this frame, in retail draw order (far passes first). */
    get view(): {
        quads: readonly StdQuadView[];
        clearColor: number;
        fade: number;
        /**
         * This frame's fog, already in the form the shader wants: `D3DRS_FOGCOLOR` as
         * 0xRRGGBB plus the linear ramp in the same world units as `StdQuadView.depth`.
         */
        fog: Fog;
    };
    /**
     * `g_Background.unk6394` as the `.std`-space effect movers read it.
     *
     * The cull in `FUN_004264f0` measures the ember against the raw `vector0` and
     * against `vector3`, which `Background.cpp:496-497` sets to `normalize(vector1)`
     * -- the look direction as an offset, not as `target - eye`. Copy that rather
     * than tidying it.
     */
    get effectCamera(): {
        eye: Vec3;
        at: Vec3;
        dir: Vec3;
        fov: number;
    };
    /**
     * Project one backdrop-space point into playfield pixels and report the pixel
     * size of a one-unit world quad there.
     *
     * Returns null past the far plane, which is how the `.std` movers retire a
     * particle the camera has already walked away from.
     */
    projectEffect(point: Vec3): {
        x: number;
        y: number;
        scale: number;
    } | null;
    /** `OnUpdate`'s instruction walk: consume everything whose frame has come. */
    private runScript;
    private setTarget;
    private setInterp;
    /** `FUN_00408d60` for the three vectors, then the inline version for the fov. */
    private interpolate;
    private advance;
    /** Modes 1-3: the authored camera shake, on its own free-running clock. */
    private tickSway;
    /** `OnUpdate`'s fog block: a linear ramp between the two snapshots op 2 took. */
    private tickFog;
    /** One `ExecuteScript` per authored quad, as `FUN_00409f40` does. */
    private tickQuads;
    /** `RenderObjects` for all four passes, far to near, in one list. */
    private build;
    /** The cell a quad currently shows: scripts do swap sprites mid-flight. */
    private rectFor;
    /** Instances name objects by id; the file keeps them in id order, so trust that first. */
    private objectIndexOf;
    private emitQuad;
    /**
     * `RenderObjects`' plain quad, cut against the projection band first.
     *
     * The hardware clips these for free, and a ground sheet routinely runs from under
     * the camera out past the far plane, so a quad with one bad corner cannot simply be
     * dropped without tearing a hole in the floor. Straddling quads are quartered until
     * each piece fits the band, which also keeps the layer's screen-affine UVs close to
     * what perspective division would have given.
     */
    private pushAuthoredQuad;
    /** One band-clean quad: project its corners and lay it into the frame list. */
    private pushProjectedQuad;
    /**
     * `RenderObjects`' billboard branch: the sprite is placed at the projected centre
     * and scaled by how wide its authored world size looks from here, so a 96-unit
     * tree keeps its size in the scene rather than on the screen.
     */
    private emitBillboard;
    /**
     * Type 1 quads: ribbons of water and rows of fence, one authored strip stretched
     * between two world points. Retail derives each end's screen width by projecting
     * the same `width` along the camera's right vector, then offsets perpendicular to
     * the projected centre line, so a ribbon keeps its pixel width in the scene.
     */
    private emitRibbon;
    private ribbonEnd;
    /**
     * `Background::OnDraw`'s fog, as the hardware applied it: `D3DRS_FOGSTART` and
     * `D3DRS_FOGEND` take the two floats at `+0xAEC`/`+0xAF0` and `FOGVERTEXMODE`
     * stays at its default, so the ramp runs on **camera-space depth** per pixel
     * (`Background.cpp:833-839`). Range from the eye was close enough to read as
     * right on a corridor that runs straight away from the camera, but it fogs the
     * sides of a wide sheet harder than its middle, which is what put the bend in
     * the horizon.
     *
     * This is the number the ramp is measured on: the view matrix's third *column*,
     * because rows hold the basis vectors in D3DX's row-vector layout, so a coordinate
     * is read down a column, across the rows. The fog colour travels beside it; see
     * `engine/renderer/FogShader.ts` for why the mix has to happen on the fragment and
     * not on the alpha.
     */
    private viewDepth;
    private readonly scratch;
    /** World point to playfield pixels, with the projected depth for the near/far test. */
    private project;
}
/**
 * Which backdrop each campaign route plays on.
 *
 * The routes are named after the ECL they run, and stage 6 splits: 6A is `ecldata6`
 * on `stage6.std`, the true finale 6B is `ecldata7` on `stage7.std`. The `_s`
 * variants are spell-practice files (`Background.cpp:957`) and stay unused here.
 */
export declare const STD_KEY_BY_ROUTE: Readonly<Record<string, string>>;
/** Every sprite page a backdrop samples, so the game can fetch them before frame one. */
export declare function stdPages(key: string): string[];
/**
 * The clear colour as the camera script stores it (`Background + 0x830`) is a
 * `D3DCOLOR`, which is already 0xAARRGGBB numerically.
 */
export declare const stdClearColor: (argb: number) => number;
//# sourceMappingURL=StdBackground.d.ts.map