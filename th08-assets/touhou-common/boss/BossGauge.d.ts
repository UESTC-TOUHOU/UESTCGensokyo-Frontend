/** ECL_MAX_BOSS_LIFEBAR_SEGMENTS in the retail GUI. */
export declare const MAX_BOSS_LIFEBAR_SEGMENTS = 8;
/**
 * Authentic TH08 boss gauge.
 *
 * Every number here is lifted from the retail GUI:
 * - `Gui::DrawBossGauge` (src/Gui.cpp ~L1568-1655) for the geometry,
 *   the shaded white -> 0x00202060 track, the per-life colour slices and the
 *   0xffffff - i*0xff/9 pip gradient.
 * - `Gui::FUN_00435900` (src/Gui.cpp ~L1090-1108) for the 0.01 / 0.02 easing
 *   that produces the trailing damage ghost bar.
 * - `g_GuiBossTimerColors` (src/Gui.cpp L65) for the timer thresholds.
 *
 * The retail screen is 640x480 with the playfield at x=96; this engine uses the
 * same 640x480 surface with the playfield at x=0, so the original bar rectangle
 * (64,19)-(384,23) drops in unchanged.
 */
/** Bar rectangle in screen pixels, exactly as the retail GUI computes it. */
export declare const BOSS_GAUGE: {
    readonly left: 64;
    readonly top: 19;
    readonly width: 320;
    readonly height: 4;
    /** Life-pip row sits to the left of the bar: x 35..61, same 4px band. */
    readonly pipLeft: 35;
    readonly pipWidth: 26;
    /** Timer text origin, just past the right end of the bar. */
    readonly timerX: 384;
    readonly timerY: 16;
    /** bossUIOpacity ramps 4/255 per frame in both directions. */
    readonly opacityStep: number;
    /** bossLifeBarMaxSize easing rates from Gui::FUN_00435900. */
    readonly riseStep: 0.01;
    readonly fallStep: 0.02;
};
/** Track shading: bright top edge -> 0x00202060 bottom edge. */
export declare const BOSS_GAUGE_TRACK_DARK = 2105440;
/** Pip bottom edge is a flat 0x00202020 in the retail draw. */
export declare const BOSS_GAUGE_PIP_DARK = 2105376;
/** Alternating per-life slice colours (retail ECL supplies these per spellcard). */
export declare const BOSS_GAUGE_SLICES: {
    readonly normal: readonly [6088959, 3117008];
    readonly spell: readonly [16769130, 16742972];
};
/** g_GuiBossTimerColors = {0x00a0d0ff, 0x00a080ff, 0x00e080c0, 0x00ff4040}. */
export declare const BOSS_GAUGE_TIMER_COLORS: readonly [10539263, 10518783, 14713024, 16728128];
/** A filled rectangle plus its bottom-edge shade, mirroring DrawSquareShaded. */
export interface GaugeRect {
    x: number;
    y: number;
    width: number;
    height: number;
    color: number;
    /** Darkened bottom colour; the retail code uses color >> 2 masked to 0x3f3f3f. */
    shade: number;
}
/**
 * Everything the gauge renderer reads. A `Boss` satisfies it directly, and an
 * ECL script that declared its own life bar (ops 127 / 131 / 148 / 158) is
 * mapped onto the same shape, so both bosses share one retail-accurate bar.
 */
export interface BossGaugeState {
    /** Whole-gauge fade in/out, retail `bossUIOpacity / 255`. */
    gaugeOpacity: number;
    /** Eased bar fill, which trails the real HP ratio on damage. */
    gaugeDisplayRatio: number;
    lifeBars: number;
    remainingBars: number;
    isSpellCardActive: boolean;
    spellcardSecondsRemaining: number;
}
/** A text run on the gauge (the spellcard countdown). */
export interface GaugeText {
    x: number;
    y: number;
    text: string;
    color: number;
}
/** Retail `color >> 2 & 0x3f3f3f` bottom-edge shade. */
export declare function gaugeShade(color: number): number;
/**
 * The un-filled track: white at the top edge fading to dark blue at the bottom,
 * clipped to the eased display ratio exactly like the retail first DrawSquareShaded.
 */
export declare function gaugeTrack(displayRatio: number): GaugeRect;
/**
 * Per-life colour slices. A slice is skipped once the eased bar has drained
 * past it, and the slice under the bar head is clipped to the head, which is how
 * the retail code keeps the trailing ghost visible.
 */
export declare function gaugeSlices(bars: number, displayRatio: number, spell: boolean): GaugeRect[];
/**
 * The life-pip row left of the bar. One pip per remaining life; the retail
 * gradient 0xffffff - i*0xff/9 walks white -> grey along the row, and the gap
 * between pips halves once a spellcard carries more than five lives.
 */
export declare function gaugePips(remainingBars: number): GaugeRect[];
/** Timer colour band from spellcardSecondsRemaining (>=20 / >=10 / >=5 / <5). */
export declare function gaugeTimerColor(secondsRemaining: number): number;
/** The retail gauge text run: "%.2d" of the clamped countdown at (384,16). */
export declare function gaugeTimerText(secondsRemaining: number): GaugeText;
//# sourceMappingURL=BossGauge.d.ts.map