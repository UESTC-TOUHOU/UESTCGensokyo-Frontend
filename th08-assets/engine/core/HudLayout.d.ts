/**
 * The right-panel HUD geometry, taken from the retail draw calls.
 *
 * `Gui::DrawGameScene` (`Gui.cpp:1296-1476`) works in full-canvas space: the panel
 * backdrop tiles from x=416, the row labels all land at x=432, and every value
 * starts at x=488. The 16x16 `ascii.anm` font advances by `spaceWidth` = 13
 * (`AsciiManager.cpp:278,476`), not by the 16 of the cell, which is what makes the
 * retail read-out look tight.
 *
 * These numbers are engine-level because the panel is the same shape in every
 * Windows-era Touhou game; the sprite ids that fill them are per-game.
 */
/** The panel backdrop tiles from here to the right edge. */
export declare const HUD_PANEL_TILE_X: number;
export declare const HUD_TILE = 32;
export declare const HUD_BORDER_STRIP: {
    w: number;
    h: number;
};
/** Left edge of a row label, and of the value that follows it. */
export declare const HUD_LABEL_X = 432;
export declare const HUD_VALUE_X = 488;
/** `AsciiManager::SetSpaceWidth(13)` — the 16x16 font's advance. */
export declare const HUD_TEXT_ADVANCE = 13;
/** Life and bomb stars sit one cell apart. */
export declare const HUD_PIP_STEP = 16;
/** Top edge of each panel row. The gaps are retail's, not a rounding artefact. */
export declare const HUD_ROWS: {
    readonly hiscore: 40;
    readonly score: 56;
    readonly player: 88;
    readonly spell: 104;
    readonly power: 136;
    readonly graze: 152;
    readonly point: 168;
    readonly time: 184;
};
export type HudRow = keyof typeof HUD_ROWS;
/** The 永夜抄 plate that fills the lower panel. */
export declare const HUD_LOGO: {
    readonly x: 480;
    readonly y: 208;
};
/**
 * The difficulty badge, parked under the value rows. `ascii.anm` script 25 sets
 * `AnchorTopLeft` and `Pos(552, 200)`; `Gui.cpp:2245` picks the sprite as
 * `difficulty + 283`.
 */
export declare const HUD_DIFFICULTY_BADGE: {
    readonly x: 552;
    readonly y: 200;
};
/** Retail's difficulty order, i.e. the index the badge sprite id is built from. */
export declare const HUD_DIFFICULTY_ORDER: readonly ["easy", "normal", "hard", "lunatic", "extra"];
/**
 * The 夜時計, in the lower right panel.
 *
 * What is known comes from the decompile: `g_GameManager->clockTime` is an i8
 * read by `GetClockTime()` (`GameManager.cpp:231`), 12 ends the night
 * (`:221-228` aborts the stage advance at `clockTime >= 12`, and
 * `Gui.cpp:311-317` routes 6B to the dawn ending the same way), and the
 * night-remaining bonus is `2000000 * (12 - clockTime)` (`Gui.cpp:1210`). So
 * the dial is a 12-step scale from midnight to dawn -- the hand lands on 12 at
 * daybreak, which is why the bonus is linear in the same 12.
 *
 * What is *not* in the decompile is the draw call: no function in the
 * reference turns `clockTime` into pixels, so the centre, the radius and the
 * half-hour ticks are a layout estimate, not a transcription.
 */
export declare const HUD_NIGHT_CLOCK: {
    readonly x: 528;
    readonly y: 320;
    readonly r: 40;
};
/** Hours the whole dial spans: 0:00 to 6:00, in the units `GetClockTime` counts. */
export declare const NIGHT_CLOCK_SPAN = 12;
/**
 * Hand angle for one clock reading, in radians, measured the way the sprite
 * rotation is: `0` points up, positive is clockwise. Midnight has the hand
 * pointing down at the bottom of the dial and dawn brings it back up, so the
 * night is one full turn and `clockTime = 12` closes it.
 */
export declare const nightClockAngle: (clock: number) => number;
/** The same reading as `H:MM`, e.g. 3 -> `1:30`. */
export declare const nightClockLabel: (clock: number) => string;
/** The power bar: one pixel of width per point of power, 16 tall. */
export declare const HUD_POWER_BAR: {
    readonly x: 488;
    readonly y: 136;
    readonly h: 16;
};
/**
 * Score popups. `AsciiManager::DrawPopups` walks the 8x8 digit cells with a fixed
 * 8-pixel advance and centres the run by pulling back `4 * characterCount`;
 * `AsciiManager.cpp:173-177` rises them half a pixel a frame for 60 frames.
 */
export declare const HUD_POPUP_ADVANCE = 8;
export declare const HUD_POPUP_LIFETIME = 60;
export declare const HUD_POPUP_RISE = 0.5;
/** Cell 10 of the first bank is the 48x8 star that marks a shot-level-up pickup. */
export declare const HUD_POPUP_STAR_CELL = 10;
/** `AsciiManager.cpp:1617-1629`: popups dim to 80/255 near the ship, 208/255 far off. */
export declare const HUD_POPUP_ALPHA_NEAR = 80;
export declare const HUD_POPUP_ALPHA_FAR = 208;
/** The 妖率計: the whole ornate track, plus the cursor that rides it. */
export declare const HUD_GAUGE: {
    readonly x: 32;
    readonly y: 449;
    readonly w: 128;
    readonly h: 16;
    /** Half-travel of the cursor and the two limit icons, in pixels. */
    readonly span: 56;
    readonly cursorY: 453;
    readonly cursorW: 8;
    readonly cursorH: 12;
    readonly iconSize: 16;
};
/**
 * Texture slots the game layer fills. The renderer only ever asks for these keys,
 * so an absent pack simply leaves the text read-out in charge.
 */
export declare const hudGlyphKey: (code: number) => string;
export declare const hudGlyphKeyFor: (char: string) => string;
export declare const hudLabelKey: (label: string) => string;
export declare const hudPipKey: (pip: string) => string;
export declare const hudPlateKey: (plate: string) => string;
export declare const hudGaugeKey: (piece: string) => string;
/** Difficulty / 符卡 badges, one key per `ascii.anm` entry-2 sprite. */
export declare const hudBadgeKey: (badge: string) => string;
/** Score-popup digit cells, by `ascii.anm` sprite id (0-30, three banks of 11). */
export declare const hudPopupKey: (id: number) => string;
/** The digit '0' is the probe: if it landed, the whole font landed. */
export declare const HUD_ART_PROBE: string;
/** Canvas size, re-exported so panel code does not need two imports. */
export declare const HUD_CANVAS: {
    readonly w: 640;
    readonly h: 480;
};
//# sourceMappingURL=HudLayout.d.ts.map