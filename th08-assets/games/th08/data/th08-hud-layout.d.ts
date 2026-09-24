/**
 * TH08's HUD sprite tables.
 *
 * The panel geometry lives in `engine/core/HudLayout.ts` because the right panel is
 * the same shape in every Windows-era Touhou game; what is per-game is which sprite
 * on which sheet fills each row. Those ids come from two places in the
 * decompilation:
 *
 * - `Gui.cpp:2296` runs `front.anm` scripts 0..15 on `Gui::Impl::vm0000[0..15]`, so
 *   the script order names each VM (labels, pips, plate, tile, border);
 * - `AsciiManager.cpp:280-289` runs `ascii.anm` scripts 5..8 on the 妖率計 pieces.
 *
 * The engine constants are re-exported so the game layer has one import site.
 */
export * from '../../../engine/core/HudLayout';
/** `front.anm` sprite ids for the eight panel labels. */
export declare const TH08_HUD_LABEL_FRONT_ID: {
    readonly hiscore: 2;
    readonly score: 3;
    readonly player: 4;
    readonly spell: 5;
    readonly power: 6;
    readonly graze: 7;
    readonly point: 8;
    readonly time: 9;
};
/** 残机 is a red star, 灵击 a blue one (`Gui.cpp:1399-1412`). */
export declare const TH08_HUD_PIP_FRONT_ID: {
    readonly life: 11;
    readonly bomb: 12;
};
/** The rest of `front.anm` entry 0 the panel needs. */
export declare const TH08_HUD_PLATE_FRONT_ID: {
    readonly panel: 0;
    readonly tile: 13;
    readonly border: 14;
};
/** `ascii.anm` ids for the 妖率計: track, 人 limit, 妖 limit, cursor. */
export declare const TH08_HUD_GAUGE_ASCII_ID: {
    readonly track: 155;
    readonly human: 153;
    readonly youkai: 154;
    readonly cursor: 152;
};
//# sourceMappingURL=th08-hud-layout.d.ts.map