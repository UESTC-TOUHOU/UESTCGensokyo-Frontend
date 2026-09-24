/**
 * Bridge between generated ECL coroutines and TH08Game.
 *
 * Loads one route's translated `StageScript` -- the ECL subs and the spawn
 * timeline behind a single façade -- and builds the StageRunner that drives
 * authentic TH08 gameplay from them.
 *
 * All eight campaign routes are wired, including the stage 4 and stage 6
 * branches, so a run can actually diverge the way the retail game does.
 */
import { type Difficulty } from '../../th08/sim/GameState';
import { StageRunner } from '../../th08/sim/StageRunner';
import type { EffectCamera } from '../../th08/sim/EffectPool';
import { type StageRoute } from './StageRoute';
import type { CharacterId } from './types';
export interface EclStageConfig {
    route: StageRoute;
    difficulty: Difficulty;
    character: CharacterId;
    seed?: number;
    lives?: number;
    bombs?: number;
    power?: number;
    /** Where the run stands: carried in so a mid-run reload routes the same way. */
    stageNumber?: number;
    /**
     * What a stage keeps from the run that played before it. Retail never zeroes
     * these between stages, and neither does the sim: the score, the graze count,
     * the time orbs and the point-item value all ride the whole campaign.
     */
    carry?: {
        score: number;
        graze: number;
        timeOrbs: number;
        totalTimeOrbs: number;
        pointItemValue: number;
        /** Which hour of the endless night the run is on. See `TH08Game.runClockTime`. */
        clockTime: number;
    };
    /**
     * Multiplier applied to the per-type collision radius. The retail bullet size
     * lives in a blob the recompiler cannot name, so `getBulletHitRadius` is
     * calibrated instead of read; this hook is what the calibration sweep against
     * ZUN's own recordings varies. Production leaves it at 1.
     */
    bulletRadiusScale?: number;
    /**
     * The route's `.std` camera, read once per effect frame.
     *
     * Three effect families live in the backdrop's world rather than on the
     * playfield and retire themselves when the camera walks away from them; without
     * this they have nothing to measure against. See `EffectPool`'s `camera` dep.
     */
    stdCamera?: () => EffectCamera | null;
}
/**
 * Load ECL data for a stage. Returns null if not available.
 */
export declare function loadEclStage(config: EclStageConfig): Promise<StageRunner | null>;
/**
 * Check whether ECL data is available for a given stage.
 */
export declare function hasEclData(route: StageRoute): boolean;
//# sourceMappingURL=EclStageLoader.d.ts.map