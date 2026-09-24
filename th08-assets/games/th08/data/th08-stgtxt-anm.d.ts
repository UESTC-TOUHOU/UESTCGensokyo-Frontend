/**
 * Generated from public/assets/th08/manifest.json (stgNNtxt.anm) by
 * tools/th08/anm/generate-stgtxt.mjs. Do not edit by hand.
 *
 * The retail stage-title card. `Gui.cpp:2307` runs scripts 0..3 of this pack
 * on `Gui::Impl::vm2a44[0..3]` as a stage loads, and `Gui.cpp:766-770` re-runs
 * script 3 with sprite `arg+3` on every msg op 7. The bytecode is kept as-is
 * so `AnmVm` can play it; `length` is the last instruction time, which is how
 * long the card holds before its own `Delete` retires it.
 */
/** One atlas cell of a stage-text pack, addressed by its ANM sprite id. */
export interface StgtxtCell {
    readonly id: number;
    /** Which page of the pack the rect lives on. */
    readonly tex: number;
    readonly x: number;
    readonly y: number;
    readonly w: number;
    readonly h: number;
}
/** One script of a stage-text pack: raw VM words plus its own lifetime. */
export interface StgtxtScript {
    readonly id: number;
    readonly base64: string;
    /** Last instruction time in ANM ticks, which is when the script deletes itself. */
    readonly length: number;
}
/** One lifted `stgNNtxt.anm` pack. */
export interface StgtxtPack {
    /** URL of page 0, the only page any shipped title pack uses. */
    readonly page: string;
    readonly cells: readonly StgtxtCell[];
    readonly scripts: readonly (StgtxtScript | null)[];
}
export declare const TH08_STGTXT: Readonly<Record<string, StgtxtPack>>;
/**
 * Which `stgNNtxt.anm` a campaign route shows. Same ecldata pairing as
 * `STGENM_BY_ROUTE`: 6A is `stg6txt` and the true finale 6B is `stg7txt`.
 */
export declare const STGTXT_BY_ROUTE: Readonly<Record<string, string>>;
/** The raw VM words of one stage-text script, or null when the id is unused. */
export declare function stgtxtBytes(name: string, script: number): string | null;
/** How long one stage-text script holds before deleting itself, in ANM ticks. */
export declare function stgtxtLength(name: string, script: number): number;
/** The atlas cell one stage-text sprite id draws. */
export declare function stgtxtCell(name: string, sprite: number): StgtxtCell | null;
//# sourceMappingURL=th08-stgtxt-anm.d.ts.map