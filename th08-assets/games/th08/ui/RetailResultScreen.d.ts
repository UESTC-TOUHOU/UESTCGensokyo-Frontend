/**
 * The retail settlement screen: layout, interrupt codes, and the eight stat rows.
 *
 * Three files in `th08web-ref` describe this screen and none of them is a
 * stylesheet, which is the point. `AddedCallback:2840` pairs script `i` with VM
 * `i`; `CheckConfirmButton:1956` is the state machine; `DrawFinalStats:2154` is
 * the only place the numbers get positioned, and it does so by adding to the
 * anchor VM's position. So the whole right-hand column of the panel is derived
 * from wherever VM 71 happens to be, and the animation data alone decides that.
 *
 * What is kept here is therefore only what the original hard-codes: the offsets,
 * the row pitch, the printf shapes, and the timing constants.
 */
import type { AnmScreen } from '../../../engine/renderer/AnmScreen';
/** `ResultScreen.cpp:60-82`, the interrupt codes the screen scripts branch on. */
export declare const RESULT_INTERRUPT: {
    readonly HIDE: 1;
    readonly EXITING: 2;
    readonly LISTING_APPEAR: 3;
    readonly LISTING_MOVE_PAGE: 10;
    readonly QUESTION_SAVE_REPLAY: 11;
    readonly REPLAY_APPEAR: 12;
    readonly REPLAY_OVERWRITE: 13;
    readonly CANNOT_SAVE_REPLAY_RETRY: 14;
    readonly SELECT_REPLAY: 16;
    readonly HIDE_REPLAY: 17;
    /** Drives the stats panel in; `CheckConfirmButton` holds it for 30 frames. */
    readonly PLAYER_RESULTS_SHOW: 18;
    readonly CANNOT_SAVE_REPLAY_SLOW_MODE: 19;
    readonly SPRITE_SELECTED: 20;
    readonly SPRITE_NOT_SELECTED: 21;
    readonly SPRITE_APPEAR: 22;
    readonly SPRITE_CHOSEN: 23;
    readonly CHARACTER_DISAPPEAR: 24;
    readonly CHARACTER_APPEAR: 25;
};
/**
 * Frame counts from `CheckConfirmButton` and `OnUpdate`. A panel cannot be
 * confirmed while it is still arriving, which is why the original gates on
 * `frameTimer >= 90` rather than accepting input immediately.
 */
export declare const RESULT_TIMING: {
    /** Interrupt 18 is re-asserted while `frameTimer <= 30`. */
    readonly showHoldFrames: 30;
    /** First frame on which the confirm button is read. */
    readonly confirmAfterFrames: 90;
    /** `STATS_TO_SAVE_TRANSITION` waits 30 frames before asking about the replay. */
    readonly transitionFrames: 30;
};
/**
 * Where `DrawFinalStats` puts the numbers, relative to VM 71's own position.
 *
 * `strPos = vm->pos` then `x += 210`, `y += 32`, and every row after that is
 * `y += 22`; the score column adds one more `spaceWidth` before the rest.
 */
export declare const RESULT_STATS_LAYOUT: {
    readonly textOffsetX: 210;
    readonly textOffsetY: 32;
    readonly rowPitch: 22;
    /**
     * Retail `spaceWidth`, the advance of one ASCII cell. `AsciiManager.cpp:275`
     * initialises it to 13 and the settlement screen never changes it, so the four
     * leading spaces of a percentage row are 52 pixels, not a guess.
     */
    readonly spaceWidth: 13;
    /** The score field is `%9d`, so nine cells wide. */
    readonly scoreFieldWidth: 9;
};
/**
 * `g_RightAlignedDifficultyList` (`ResultScreen.cpp:98`), padded to ten columns.
 * The retail list is in difficulty order, so the index is the difficulty.
 */
export declare const RIGHT_ALIGNED_DIFFICULTY: Readonly<Record<string, string>>;
/** Text colours the original sets while drawing the listings (`OnDraw:2484-2506`). */
export declare const RESULT_TEXT_COLOR: {
    /** `0xffe0e0ef`, the column header. */
    readonly header: "#e0e0ef";
    /** `0xffffc0c0`, a settled row: retail's pale yellow. */
    readonly row: "#ffffc0";
    /** `0xfff0f0ff`, the row the player has just earned. */
    readonly highlight: "#fff0f0";
    /** `0xc0ffc0c0`, every other row while a name is being typed. */
    readonly dimmed: "#ffc0c0";
};
/**
 * Frame count behind `completion = g_GameManager.unk3de04 / 195559.0f`.
 *
 * `unk3de04` is the accumulated stage play time the original keeps in the score
 * file; `DrawFinalStats` divides it by a constant that stands for "every stage,
 * once". We only have the frames this run actually simulated, so the ratio is
 * honest but lower than a retail file would show after unlocking everything.
 */
export declare const RESULT_COMPLETION_FRAMES = 195559;
/** What the eight stat rows need. */
export interface ResultStats {
    /** `displayScore`, the score as shown, not the raw counter. */
    score: number;
    /** Continues spent; `%9d` on its own row and the tenth column of the score row. */
    retries: number;
    difficulty: string;
    /** Frames simulated across the run, before the completion divisor. */
    playFrames: number;
    /** `GetDeaths()`. */
    deaths: number;
    /** `GetBombsUsed()`. */
    bombsUsed: number;
    /** `spellcardsCaptured`. */
    cardsCaptured: number;
    /** `lagNumerator / lagDenominator`, the fraction of frames that ran slow. */
    lagFraction: number;
    /** True when the run finished the campaign, which forces 100 %. */
    fullCompletion?: boolean;
}
/** `%9d`: retail's right-aligned score/death columns. */
export declare function pad9(value: number): string;
/** `"%3.2f%%"` with retail's four leading spaces, as used by the two percentage rows. */
export declare function padPercent(value: number): string;
/**
 * `completion`, exactly as `DrawFinalStats:2172-2216` computes it.
 *
 * The divisor is the same below Extra; the cap at 0.99 is real, so a full clear
 * still reads 99.00 % unless the campaign flag forces the 100 branch.
 */
export declare function completionPercent(stats: ResultStats): number;
/**
 * The slow rate the panel prints, from the fraction of frames that overran.
 *
 * `DrawFinalStats:2240-2254` maps the raw ratio through
 * `((lag - 0.5) * 2)` before inverting it, so a run that only dipped a little
 * over budget still reports a perfect 100 %.
 */
export declare function slowdownPercent(lagFraction: number): number;
/**
 * The eight rows in on-screen order.
 *
 * `DrawFinalStats` emits them top to bottom with a 22-frame pitch, and each is
 * right-aligned in a nine-column field except the two percentages, which carry
 * their own padding inside the string.
 */
export declare function resultStatRows(stats: ResultStats): string[];
/** The ANM words for one settlement script, or null when the index is unused. */
export declare function resultScriptWords(index: number): Int32Array | null;
/** The VM index that anchors the stats column. */
export declare const RESULT_STATS_VM: 71;
/**
 * Build the settlement screen over a caller-supplied 2D context.
 *
 * The picture is 640x480 because that is the viewport `OnDraw` sets before it
 * blits the backdrop; the host scales the canvas with CSS the same way it scales
 * the playfield.
 */
export declare function createRetailResultScreen(): AnmScreen;
/** Where the stats column starts, in picture coordinates. */
export interface ResultAnchor {
    x: number;
    y: number;
    /** Picture size the coordinates assume, so a host can map them to CSS. */
    width: number;
    height: number;
}
/**
 * A live settlement screen over one canvas.
 *
 * The host owns the frame clock; this only reproduces what `OnUpdate` and
 * `OnDraw` do with it, which keeps the panel's animation, the confirmation gate,
 * and the position of every number on one timeline.
 */
export declare class RetailResultScreen {
    readonly canvas: HTMLCanvasElement;
    private readonly screen;
    private readonly ctx;
    /** `ResultScreen::frameTimer`. */
    private frameTimer;
    private showing;
    private constructor();
    /** Build the screen and fetch its art; false when the extracted art is absent. */
    static mount(canvas: HTMLCanvasElement): Promise<RetailResultScreen | null>;
    /**
     * Enter the stats state.
     *
     * `CheckConfirmButton:1962` re-asserts interrupt 18 on VM 71 for thirty frames
     * rather than firing it once, so the panel restarts its arrival every time the
     * screen is entered.
     */
    show(): void;
    /** Queue the exit interrupt on every slot, the original's `RESULT_INTERRUPT_EXITING`. */
    exit(): void;
    /** True once the panel has run long enough to accept a confirm. */
    get confirmable(): boolean;
    get framesSinceShown(): number;
    /** `OnUpdate`'s ExecuteScript loop plus `OnDraw`. */
    frame(): void;
    /**
     * Where `DrawFinalStats` would put the first number, read from the live VM.
     *
     * The offsets are the original's, but the base position is whatever the bytecode
     * settled on, so relifting the pack moves the text with the art.
     */
    statsAnchor(): ResultAnchor | null;
    /** Where a listing row starts, which `OnDraw:2481` offsets by 24/18 from VM 40. */
    listingAnchor(): ResultAnchor | null;
    /** Per-slot readout, so a browser pass can tell "no art" from "no script". */
    debugLines(): string[];
    destroy(): void;
}
//# sourceMappingURL=RetailResultScreen.d.ts.map