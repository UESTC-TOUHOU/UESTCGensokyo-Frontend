/**
 * Generated from public/assets/th08/manifest.json (result00.anm) by
 * tools/th08/anm/generate-result.mjs. Do not edit by hand.
 *
 * The retail settlement screen: 4 texture pages, 41 sprite rects and
 * 72 animation scripts. The bytecode is kept as-is so `AnmVm` can play
 * it, exactly like the enemy and backdrop packs.
 */
/** One atlas cell of the settlement pack, addressed by its ANM sprite id. */
export interface ResultCell {
    readonly id: number;
    /** Which page of the pack the rect lives on. */
    readonly tex: number;
    readonly x: number;
    readonly y: number;
    readonly w: number;
    readonly h: number;
}
/** One script of the settlement pack: raw VM words plus its own lifetime. */
export interface ResultScript {
    readonly id: number;
    readonly base64: string;
    /** Last instruction time in ANM ticks. */
    readonly length: number;
}
/**
 * The full-frame backdrop, blitted to the backbuffer before any VM draws
 * (`ResultScreen::OnDraw:2461`). It ships as a JPEG rather than an ANM page,
 * so `extract.mjs` copies it out verbatim.
 */
export declare const RESULT_BACKDROP = "/assets/th08/raw/result.jpg";
/** The four atlas pages, indexed by a cell's `tex`. */
export declare const TH08_RESULT_PAGES: readonly string[];
/** Sprite rects as shipped, in id order. */
export declare const TH08_RESULT_CELLS: readonly ResultCell[];
/**
 * Which script index draws which picture, straight out of
 * `ResultScreen.cpp`. `AddedCallback` pairs script `i` with VM `i`, so these
 * are the addresses the screen logic reads.
 */
export declare const RESULT_SCRIPT: {
    /** First entry of the category menu. */
    readonly CATEGORY_HIGHSCORE: 0;
    /** Last entry of the category menu. */
    readonly CATEGORY_BACK_TO_TITLE: 3;
    /** Best-score difficulty row, Easy. */
    readonly HIGHSCORE_DIFFICULTY_EASY: 4;
    /** Best-score difficulty row, Extra. */
    readonly HIGHSCORE_DIFFICULTY_EXTRA: 8;
    /** Card-list difficulty row, Easy. */
    readonly SPELLCARD_DIFFICULTY_EASY: 9;
    /** Card-list difficulty row, every rank. */
    readonly SPELLCARD_DIFFICULTY_ALL: 14;
    /** Best-score character row, first pair. */
    readonly HIGHSCORE_CHARACTER_REIMU_YUKARI: 15;
    /** Best-score character row, last pair. */
    readonly HIGHSCORE_CHARACTER_YUYUKO: 26;
    /** Card-list character row, first pair. */
    readonly SPELLCARD_CHARACTER_REIMU_YUKARI: 27;
    /** Card-list character row, every pair. */
    readonly SPELLCARD_CHARACTER_ALL: 39;
    /** The scrolling score table; `OnDraw` slides it in while pos.x < 640. */
    readonly LISTING: 40;
    /** The "Save this replay?" panel. */
    readonly REPLAY_SAVE_QUESTION: 49;
    /** Highlight for the yes button. */
    readonly YES: 50;
    /** Replay browser, main page. */
    readonly REPLAY_LISTING_MAIN: 55;
    /** Replay browser, start page. */
    readonly REPLAY_LISTING_START: 56;
    /** Anchor of the stats column; text sits at +210/+32, 22 apart. */
    readonly PLAYER_RESULTS: 71;
};
/** Every settlement script, indexed by VM slot; null where the id is unused. */
export declare const TH08_RESULT_SCRIPTS: readonly (ResultScript | null)[];
/** The raw VM words of one settlement script, or null when the id is unused. */
export declare function resultBytes(script: number): string | null;
/** How long one settlement script holds, in ANM ticks. */
export declare function resultLength(script: number): number;
/** The atlas cell one settlement sprite id draws. */
export declare function resultCell(sprite: number): ResultCell | null;
//# sourceMappingURL=th08-result-anm.d.ts.map