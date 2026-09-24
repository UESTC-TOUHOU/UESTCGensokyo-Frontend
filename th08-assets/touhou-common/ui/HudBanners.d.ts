/**
 * The panel banners the original raises over the side panel.
 *
 * `Gui.cpp` keeps three independent text slots, each with its own lifetime and
 * its own way of being laid out, and every one of them is worth transcribing
 * literally because the feel of the game is tied to when they appear:
 *
 *  - `formatted1` (Gui.cpp:1771-1778, drawn at :2075-2122) is a six-way switch
 *    over an id. It starts at the left edge of the panel, x = 416, slides left
 *    to x = 104 over its first thirty frames, sits there until frame 180 and
 *    then vanishes. The slide is why 永夜抄 feels loud when the ship maxes its
 *    power: the words physically cross the playfield.
 *  - `formatted2` (:1781-1788, drawn at :2127-2138) is the spell-card bonus. It
 *    centres itself over the 384-pixel playfield with a pitch of 14 while the
 *    font advances at 13, so the line sits a few pixels right of true centre.
 *    That offset is retail's, and it is kept.
 *
 * The colours are the raw `D3DCOLOR`s handed to `AsciiManager::SetColor`, i.e.
 * 0xAARRGGBB, so the renderer can take them apart the same way it does the rest
 * of the upstream art.
 */
/** One line a host has to blit, in the 640x480 canvas space retail draws in. */
export interface HudBannerView {
    text: string;
    x: number;
    y: number;
    /** Cell scale; 1 is the 16x16 font, 2 is the bonus total. */
    scale: number;
    /** Letter pitch, which retail narrows to 11 for its 0.9-scaled lines. */
    advance: number;
    /** `D3DCOLOR` as written in the decompile: 0xAARRGGBB. */
    color: number;
    /** Fades the last quarter of the slide so a banner never pops out. */
    alpha: number;
}
/** `formatted1.isShown`, the six arms of the switch at `Gui.cpp:2075`. */
export type PanelBannerKind = 'fullPower' | 'supernaturalBorder' | 'cherryPointMax' | 'borderBonus' | 'spellBonusFailed' | 'lastSpellFailed';
/** `Gui.cpp:1773` / `:1783`. */
export declare const PANEL_BANNER_X = 416;
export declare const PANEL_BANNER_REST_X = 104;
export declare const PANEL_BANNER_Y = 168;
/** `:1175-1181`: thirty frames of slide, then hold until 180 and clear. */
export declare const PANEL_BANNER_SLIDE_FRAMES = 30;
export declare const PANEL_BANNER_LIFETIME = 180;
/** `:1187`: the bonus line lives 280 frames. */
export declare const SPELL_BONUS_LIFETIME = 280;
/**
 * The two live slots, advanced once per game frame.
 *
 * Retail owns these timers inside `Gui`, which is a calc-chain object; keeping
 * them here means a host can raise a banner from the sim and never has to know
 * how long it lives.
 */
export declare class HudBanners {
    private kind;
    private timer;
    private value;
    private bonusTimer;
    private bonus;
    /** `Gui::FUN_00437e5d`. A new banner restarts the slide. */
    showPanel(kind: PanelBannerKind, value?: number): void;
    /** `Gui::gui_fun_00437edc`. */
    showSpellBonus(bonus: number): void;
    clear(): void;
    /** Advance both slots; `frames` is 1 for a normal tick. */
    tick(frames?: number): void;
    get panelVisible(): boolean;
    get bonusVisible(): boolean;
    /** Where the panel banner currently is (`:1175-1179`). */
    get panelX(): number;
    /** What the draw chain should blit this frame, panel banner first. */
    views(): HudBannerView[];
    /**
     * Retail never fades this line, but it does have to leave; the last 40 frames
     * of the 280 are a linear fade so a capture does not end on a hard cut.
     */
    private bonusAlpha;
}
//# sourceMappingURL=HudBanners.d.ts.map