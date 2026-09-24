/**
 * A full-screen picture driven entirely by ANM bytecode.
 *
 * Several of these games use the same animation VM for their menu furniture that
 * they use for gameplay: 永夜抄's settlement screen is one JPEG blitted to the
 * backbuffer plus seventy-two VMs, one per script index, and every label, panel
 * and slide on it is placed by the bytecode rather than by the host
 * (`ResultScreen::AddedCallback:2840`, `OnDraw:2461-2471`). Reimplementing that
 * layout by hand is how ports end up with a screen that merely has the same words
 * on it, so this layer runs the real scripts and draws whatever they ask for.
 *
 * It is deliberately title-agnostic: a game supplies pages, cells, scripts and an
 * interrupt policy, and this file knows nothing about what any of them mean. The
 * rasteriser is a 2D canvas rather than the WebGL scene graph, because these
 * screens replace the playfield instead of compositing over it.
 */
import { AnmVm } from '../anm/AnmVm';
/** One atlas rect, addressed by the ANM sprite id a script selects. */
export interface AnmScreenCell {
    id: number;
    /** Index into `AnmScreenOptions.pages`. */
    tex: number;
    x: number;
    y: number;
    w: number;
    h: number;
}
export interface AnmScreenOptions {
    /** VM count; the retail settlement screen keeps seventy-two. */
    slots: number;
    /** Image URLs, indexed by a cell's `tex`. */
    pages: readonly string[];
    cells: readonly AnmScreenCell[];
    /** Words for one script index, or null when the index is unused. */
    scriptFor: (index: number) => Int32Array | null;
    /** Logical picture size, which is what the bytecode's coordinates assume. */
    width: number;
    height: number;
    /** Full-frame art drawn before any VM, like `CopySurfaceToBackbuffer`. */
    backdrop?: string;
}
/**
 * An ANM-driven screen, drawn into a caller-owned 2D context.
 *
 * Lifecycle mirrors the original: `start()` is `AddedCallback` (every VM takes its
 * own script index and resets), `interrupt()` is a write to `pendingInterrupt`,
 * `step()` is the calc chain, and `draw()` is the draw chain.
 */
export declare class AnmScreen {
    private readonly options;
    private readonly slots;
    private pages;
    private backdropImage;
    private bySprite;
    /** Colourised cells, keyed by `sprite:color`; a label keeps its tint all screen. */
    private readonly tintCache;
    private loaded;
    private started;
    constructor(options: AnmScreenOptions);
    /**
     * Fetch every page plus the backdrop.
     *
     * Retail art is extracted locally and stays out of the repository, so a missing
     * page is a normal state: the screen then draws whatever did land, which is how
     * the original behaves when a surface fails to load.
     */
    load(): Promise<boolean>;
    /** True once at least one picture is on screen. */
    get ready(): boolean;
    /** `AddedCallback`: hand script `i` to VM `i` and let the bytecode place it. */
    start(): void;
    /**
     * Queue an interrupt on one slot, the original's `pendingInterrupt` write.
     *
     * The retail screens re-assert the code every frame for a while
     * (`CheckConfirmButton` holds interrupt 18 for thirty frames), so callers are
     * expected to drive this from their own state rather than fire it once.
     */
    interrupt(slot: number, code: number): void;
    /** Queue an interrupt on every slot, which is how a screen hides or exits as one. */
    interruptAll(code: number): void;
    /** Advance every VM, the draw chain's `ExecuteScript` loop. */
    step(frames?: number): void;
    /**
     * `ResultScreen::OnDraw:2463-2471`.
     *
     * Position is `pos + pos2` for the frame only: the original adds the offset,
     * draws, and puts `pos` back, so `pos2` behaves as a constant displacement
     * rather than a velocity.
     */
    draw(ctx: CanvasRenderingContext2D): void;
    /** One readable line per slot, so a browser pass can tell "no art" from "no script". */
    debugLines(): string[];
    /** The VM of one slot, for hosts that need its live position to place text. */
    vmAt(slot: number): AnmVm | null;
    destroy(): void;
    /** Null when the colour is plain white, which is the common case. */
    private tintOf;
    /**
     * Multiply one cell by a VM colour.
     *
     * A 2D canvas has no vertex colour, so the cheap equivalent is a source-in
     * pass over a scratch buffer. Results are cached per cell and colour because a
     * label keeps its tint for the whole screen.
     */
    private tint;
}
//# sourceMappingURL=AnmScreen.d.ts.map