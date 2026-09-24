/**
 * Retail `.anm` metadata, read at runtime instead of being re-typed by hand.
 *
 * `npm run assets:th08` walks every ANM archive in `th08.dat` and records, per
 * pack, its texture pages, sprite rects and script bytecode in
 * `public/assets/th08/manifest.json`. That is exactly the table
 * `AnmManager::PreloadAnm` builds in the original
 * (`AnmManager.hpp:242-300`), so the dialogue presenter can drive real retail
 * animation bytecode through the engine VM instead of approximating it.
 *
 * Two lookups matter for dialogue:
 *
 * - script id -> words, which is what `SetAndExecuteScriptIdx` needs;
 * - sprite id -> (page, rect), which is what `SetSprite` needs. The manifest
 *   carries the page index directly (`textures` is 0-based and `sprite.tex`
 *   indexes it), so no arithmetic on entry order is involved.
 */
import { Texture } from 'pixi.js';
/** Where `extract.mjs` publishes the per-pack metadata. */
export declare const TH08_MANIFEST_URL = "/assets/th08/manifest.json";
/** One resolved sprite: which page to read, and the rect to cut out of it. */
export interface AnmSpriteRect {
    page: number;
    x: number;
    y: number;
    width: number;
    height: number;
}
export declare class RetailAnmCatalog {
    private readonly anm;
    private readonly pages;
    private constructor();
    /** Fetch and parse the manifest. Resolves to an empty catalog without one. */
    static load(url?: string): Promise<RetailAnmCatalog>;
    /** True when this pack was extracted, so callers can fall back quietly. */
    has(anm: string): boolean;
    /** Script count in `anm`, 0 when the pack is absent. */
    scriptCount(anm: string): number;
    /** Retail `SetAndExecuteScriptIdx` operand: the word stream of one script. */
    scriptWords(anm: string, index: number): Int32Array | null;
    /**
     * Retail `SetSprite` operand: sprite ids are a flat numbering across a pack,
     * so the manifest record for `id` is the answer rather than an entry walk.
     * `Gui.cpp:463-497` passes the message's operand straight to it, which is why
     * ops 15 and 17 can ask for sprite 6 and land on Reimu's angry bust.
     */
    sprite(anm: string, id: number): AnmSpriteRect | null;
    /** Page file name for `anm`, or undefined when the pack ships no such page. */
    pageFile(anm: string, page: number): string | undefined;
    /**
     * The position written by the first `Pos` of one script, in backbuffer pixels.
     *
     * This is how the dialogue lines find themselves on screen: `text.anm` script 0
     * and script 1 each begin with a `Pos`, and `AnmManager::DrawTextLeft`
     * (`AnmManager.cpp:2720-2737`) draws at the VM position. Reading it out here
     * keeps the layout in the shipped animation instead of in a code constant.
     */
    firstPos(anm: string, index: number): {
        x: number;
        y: number;
    } | null;
    /**
     * Resolve one sprite to a Pixi texture, cut straight out of its page so a
     * pack costs one GPU upload however many expressions it holds.
     */
    texture(anm: string, id: number): Promise<Texture | null>;
    /** Load a page once and share it, nearest-filtered like all retail art. */
    private page;
}
//# sourceMappingURL=th08-face-anm.d.ts.map