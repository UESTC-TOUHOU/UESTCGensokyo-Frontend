/** `0xAARRGGBB`, the form the decompilation hands around. */
export declare const POPUP_COLOR_MAX = 4294967040;
export declare const POPUP_COLOR_NORMAL = 4294967295;
/**
 * A 时符 collected once the Last Spell threshold is met (`ItemManager.cpp:630` picks this
 * one over white). Retail's literal is `0xdfffef80` -- amber with the `0xDF` alpha most of
 * its in-stage floats carry -- and the alpha is dropped here for the same reason every
 * other popup colour drops it.
 */
export declare const POPUP_COLOR_TIME_PAID = 16772992;
export declare const POPUP_COLOR_POWER_UP = 4294951072;
export interface ScorePopup {
    inUse: boolean;
    /** Playfield-space anchor, before the per-frame rise. */
    x: number;
    y: number;
    /** Most significant digit last, i.e. the order `CreateScorePopup` fills. */
    digits: number[];
    color: number;
    timer: number;
    /** `AsciiManager::SetScale` in force at creation; 1 is an ordinary pickup. */
    scale: number;
}
/** One drawable popup in canvas space, handed to the renderer each frame. */
export interface ScorePopupView {
    x: number;
    y: number;
    digits: number[];
    color: number;
    bank: number;
    alpha: number;
    scale: number;
}
/** `ASCII_MAX_SCORE_POPUPS` is small in the original; 48 keeps a bullet-hell sweep legible. */
export declare const MAX_SCORE_POPUPS = 48;
export declare class ScorePopupSystem {
    private readonly pool;
    private cursor;
    /**
     * Float `value` over (x, y). A negative value is the shot-level-up star rather than
     * a number, which is exactly how `Item::CollectPowerSmall` asks for it.
     *
     * `scale` doubles the whole run, which is how the card-capture totals read bigger
     * than a pickup (`AsciiManager::SetScale` before `CreateTimePopup`).
     */
    spawn(x: number, y: number, value: number, color?: number, scale?: number): void;
    /** Rise every live popup and retire the ones that have run out their 60 frames. */
    update(): void;
    /** Bank index for a popup age, matching the three sprite ranges in `DrawPopups`. */
    static bankFor(timer: number): number;
    /**
     * `AsciiManager.cpp:1615-1629`: distance from the ship sets opacity, so a popup that
     * spawns on top of the player is deliberately faint and brightens as it drifts away.
     */
    static alphaFor(popupX: number, popupY: number, playerX: number, playerY: number): number;
    /** Canvas-space views for this frame; (offsetX, offsetY) maps playfield to canvas. */
    view(playerX: number, playerY: number, offsetX: number, offsetY: number): ScorePopupView[];
    get activeCount(): number;
    reset(): void;
}
/** `ascii.anm` cell id for one digit of one bank; the star only exists in bank A. */
export declare const popupCell: (digit: number, bank: number) => number;
//# sourceMappingURL=ScorePopupSystem.d.ts.map