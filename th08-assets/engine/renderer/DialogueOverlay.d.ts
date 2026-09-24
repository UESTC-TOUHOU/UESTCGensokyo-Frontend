/**
 * The retail dialogue box, as a reusable engine layer.
 *
 * This is the presenter behind `Gui::DrawDialogue` (`Gui.cpp:942-1025`): a
 * translucent box that grows up from the bottom of the arcade region over its
 * first second, four character slots whose motion is driven by real ANM
 * virtual machines, and two left-aligned text lines.
 *
 * Nothing here knows about 永夜抄. The game hands in the arcade rect, the line
 * anchors, and two callbacks that resolve an ANM name plus an index into a
 * script and a texture; everything else - when a face enters, where it stands,
 * how it dims while its partner is talking - comes out of the animation data.
 */
import { Container } from 'pixi.js';
import type { AnmVec3 } from '../anm/AnmVm';
/** Resolve `pack`/`index` to animation words, or null when unavailable. */
export type ScriptResolver = (pack: string, index: number) => Int32Array | null;
/** Resolve `pack`/`sprite` to a texture plus its pixel width, or null. */
export type FaceResolver = (pack: string, sprite: number) => Promise<{
    texture: SpriteTexture;
    width: number;
} | null>;
/** The subset of a Pixi texture the overlay needs. */
export interface SpriteTexture {
    width: number;
    height: number;
}
/** Where one dialogue line sits, in canvas pixels, top-left anchored. */
export interface DialogueLineAnchor {
    x: number;
    y: number;
}
export interface DialogueOverlayOptions {
    /** Arcade (playfield) rect, so the box tracks the field like the original. */
    arcade: AnmVec3;
    /** Arcade-region width; the box insets 16 px from each side. */
    arcadeWidth: number;
    /** Anchors for the two text lines, normally read out of `text.anm`. */
    lines: DialogueLineAnchor[];
    /** Point size used for the dialogue text. Retail `fontSize` is 15. */
    fontSize?: number;
    /** Font stack for the dialogue text. Retail bakes a Shift-JIS semi-bold. */
    fontFamily?: string;
    /** Slot count, four in the original (`portraits[4]`). */
    slots?: number;
    /** Resolve ANM scripts, one VM per slot. */
    scriptFor?: ScriptResolver;
    /** Resolve the bitmap a slot should show. */
    faceFor?: FaceResolver;
}
export declare class DialogueOverlay {
    private readonly root;
    private readonly box;
    private readonly slots;
    private readonly texts;
    private readonly options;
    private reveal;
    private active;
    constructor(options: DialogueOverlayOptions);
    /** Attach this layer above the gameplay, below the debug readout. */
    mount(parent: Container): this;
    /** The message box is on screen; used by the caller to gate the timeline. */
    get showing(): boolean;
    /** `:949-953` the box grows with the message timer over its first second. */
    set revealed(frames: number);
    /** Bind a slot to an ANM pack without running anything yet. */
    bind(slot: number, pack: string): void;
    /**
     * `SetAndExecuteScriptIdx` plus the width test at `Gui.cpp:527-537`.
     *
     * Retail compares the slot's current sprite against 128 and writes the whole
     * of `pos2.x` from that one test — a single branch, so a 254 px full-body
     * page and a 510 px one both move by the same 112 px.
     */
    executeScript(slot: number, script: number): void;
    /**
     * `Gui.cpp:527-537`: op 1 parks a slot's `pos2.x` at -112 once its sprite is
     * wider than 128 px, and back at 0 below that. Split out so a test can pin the
     * threshold without a texture manager.
     */
    private applyScriptOffset;
    /**
     * `Gui.cpp:566-590`: op 2 re-pins `pos2` from the sprite it has just loaded,
     * with its own three branches. The 256 px break is what separates the 254 px
     * full-body pages, which only shift by 80 px, from the 382 px and 510 px
     * spreads used by the late-stage bosses, which also get lifted by 50 px.
     *
     * Both narrower branches write `pos2.x` only, so a slot that once held
     * extra-wide art keeps its vertical lift after swapping to a bust — that is
     * retail's behaviour, and the fall-through below reproduces it.
     */
    private applySpriteOffset;
    /** `AnmManager::SetSprite`: swap the bitmap, keep the motion. */
    setSprite(slot: number, sprite: number): void;
    /**
     * `AnmVm::SetInterrupt` (`AnmManager.hpp:309-312`). The message VM sends 3 to
     * bring a face in, 4 to send it away, and 6 for the cross-side exit.
     */
    interrupt(slot: number, code: number): void;
    /** `AnmManager::DrawTextLeft` on one line. */
    setLine(line: number, color: number, text: string): void;
    /** The `" "` draw that retail uses to wipe a line. */
    clearLine(line: number): void;
    /** Tear the whole box down, as `case 0` does at `Gui.cpp:392`. */
    hide(): void;
    /** Show the box and start its reveal from zero. */
    show(): void;
    /**
     * One readable line per slot: which face ANM it holds, the expression it is
     * showing, where it stands and how bright. `pos` is the animation VM's own
     * position and `off` is the width-tier pin from `core/PortraitOffsets` that
     * `sync` adds on top of it, so a browser pass can tell the two channels apart
     * instead of reading one as the other. `w` is the bitmap width that chose the
     * tier: without it a zero offset is ambiguous between "narrow art" and "the
     * tier never ran". Nothing in the game reads this; it exists so a pass can
     * tell "the script said enter" from "a texture never arrived", which look
     * identical on screen.
     */
    faceDebug(): string[];
    /** One frame: step every slot VM, then redraw the box. */
    step(frames?: number): void;
    /** Copy one VM onto its sprite. */
    private sync;
    /**
     * `Gui.cpp:957-979`: a black quad across the arcade region whose vertex alpha
     * runs from 0xd0 at the top to 0x90 at the bottom. Pixi fills are flat, so the
     * gradient is rebuilt from bands; a partial box still fades like the full one.
     */
    private drawBox;
    destroy(): void;
}
//# sourceMappingURL=DialogueOverlay.d.ts.map