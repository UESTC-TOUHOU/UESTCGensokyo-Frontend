/**
 * Register the original HUD art.
 *
 * Retail never draws its read-out with a system font: `Gui::DrawGameScene` blits the
 * `front.anm` label strips, pips and panel plate, and `AsciiManager.cpp:483` blits
 * `ascii.anm` glyphs for every digit. This module slices both sheets and lands them
 * under the `hud:*` slots the renderer probes, which is what retires the monospace
 * placeholder and the stroked cyan playfield border.
 */
import type { PixiRenderer } from '../../../engine/renderer/PixiRenderer';
import { hudBadgeKey, hudGaugeKey, hudGlyphKey, hudLabelKey, hudPipKey, hudPlateKey, hudPopupKey } from './th08-hud-layout';
/** The eight panel labels, in the order retail stacks them. */
export declare const HUD_LABELS: readonly ["hiscore", "score", "player", "spell", "power", "graze", "point", "time"];
export type HudLabel = (typeof HUD_LABELS)[number];
/** @deprecated kept so older call sites resolve; use `TH08_HUD_LABEL_FRONT_ID`. */
export declare const HUD_LABEL_FRONT_ID: {
    readonly hiscore: 2;
    readonly score: 3;
    readonly player: 4;
    readonly spell: 5;
    readonly power: 6;
    readonly graze: 7;
    readonly point: 8;
    readonly time: 9;
};
/** The 16x16 stars the panel uses for 残机 and 灵击. */
export declare const HUD_PIP_FRONT_IDS: {
    readonly life: 11;
    readonly bomb: 12;
};
/**
 * The rest of `front.anm` entry 0: the 永夜抄 logo plate, the 32x32 backdrop tile,
 * and the 128x16 border strip (`Gui.cpp:1354-1376`).
 */
export declare const HUD_FRONT_PLATES: {
    readonly panel: 0;
    readonly tile: 13;
    readonly border: 14;
};
/** `ascii.anm` ids for the 妖率計: track, 人 limit, 妖 limit, cursor. */
export declare const HUD_GAUGE_ASCII_IDS: {
    readonly track: 155;
    readonly human: 153;
    readonly youkai: 154;
    readonly cursor: 152;
};
export { hudGlyphKey, hudLabelKey, hudPipKey, hudPlateKey, hudGaugeKey, hudBadgeKey, hudPopupKey };
/**
 * `ascii.anm` entry 2 furniture, keyed by the name the renderer asks for. 283-287 are
 * the difficulty badges (`Gui.cpp:2245` = `difficulty + 283`); 282 is the 符卡 frame
 * `Gui.cpp:1415-1419` drops over the 残机/灵击 rows while a player card is live.
 */
export declare const HUD_BADGE_ASCII_IDS: Record<string, number>;
/**
 * Slice both sheets and register them. Returns the number of textures landed, so a
 * caller can tell a missing asset pack apart from a failed canvas read.
 */
export declare function registerTH08HudArt(renderer: PixiRenderer): Promise<number>;
/**
 * Lay a string out in the original font.
 *
 * The sheet covers U+0020..U+007F; anything outside advances three quarters of a cell
 * rather than collapsing to zero, so a caller can still write a CJK label and keep
 * the row readable. Returns the total advance in pixels.
 */
export declare function measureHudText(text: string, advance?: number, scale?: number): number;
/** True when `char` is inside the sheet's contiguous U+0020..U+007F run. */
export declare const hasHudGlyph: (char: string) => boolean;
//# sourceMappingURL=th08-hud-registration.d.ts.map