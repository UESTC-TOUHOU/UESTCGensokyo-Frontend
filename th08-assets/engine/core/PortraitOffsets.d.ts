/**
 * Where a dialogue face stands once its bitmap is known.
 *
 * The retail message VM keeps an offset channel on every animation VM —
 * `AnmVm::pos2`, the `D3DXVECTOR3` at `+0x288` (`AnmManager.hpp:402`, offsets
 * confirmed against `EnemyManager.cpp:1094` and `EffectManager.cpp:1313`, which
 * read the same field). Two of the dialogue ops write it straight from C++ so
 * that art wider than the standard bust does not hang off the side of the box:
 *
 * - op 1, run-script (`Gui.cpp:527-537`): one test at 128 px, shift by 112;
 * - op 2, set-sprite (`Gui.cpp:566-590`): three tests, 256 px and 128 px, with
 *   the widest tier also lifting the slot by 50 px.
 *
 * The two ops deliberately disagree — a 254 px full-body page moves 112 px when
 * a script starts and 80 px when a sprite is pinned — which is why these are
 * separate functions rather than one table.
 *
 * `y === null` means retail never writes `pos2.y` on that branch, so whatever
 * lift the slot already had survives the swap.
 */
/** `Gui.cpp:529` — the width at which op 1 starts shifting a slot sideways. */
export declare const PORTRAIT_SCRIPT_WIDTH = 128;
/** `Gui.cpp:531` — how far op 1 shifts it. */
export declare const PORTRAIT_SCRIPT_OFFSET_X = 112;
/** `Gui.cpp:569` — the extra width at which op 2 also lifts a slot. */
export declare const PORTRAIT_TALL_SPRITE_WIDTH = 256;
/** `Gui.cpp:571-574` — op 2's widest tier. */
export declare const PORTRAIT_TALL_OFFSET_X = 208;
export declare const PORTRAIT_TALL_OFFSET_Y = 50;
/** `Gui.cpp:582` — op 2's middle tier, sideways only. */
export declare const PORTRAIT_WIDE_SPRITE_OFFSET_X = 80;
/** One corner of the `pos2` pair, with `null` for "retail leaves this alone". */
export interface PortraitOffset {
    x: number;
    y: number | null;
}
/** `Gui.cpp:527-537`: the offset op 1 pins after starting a face script. */
export declare function portraitScriptOffset(widthPx: number): PortraitOffset;
/** `Gui.cpp:566-590`: the offset op 2 pins after loading a face bitmap. */
export declare function portraitSpriteOffset(widthPx: number): PortraitOffset;
//# sourceMappingURL=PortraitOffsets.d.ts.map