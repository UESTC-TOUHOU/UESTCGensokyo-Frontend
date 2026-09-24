/**
 * Retail stage routing for 東方永夜抄.
 *
 * `stageNumber` is only what the HUD prints. What actually plays is one of the
 * nine `ecldataN.ecl` scripts, indexed by the retail `Stage` enum
 * (`th08web-ref/src/ScoreDat.hpp:70-83`, table at `Background.cpp:123-125`):
 *
 *   0 stage1  1 stage2  2 stage3  3 stage4a 4 stage4b
 *   5 stage5  6 stage6a 7 stage6b 8 extra
 *
 * Two of those nine are branches, and both branches come from
 * `GameManager::AdvanceToNextStage` (`GameManager.cpp:1563-1610`):
 *
 * - After stage 3 the team decides: Marisa/Alice and Sakuya/Remilia go to 4A,
 *   Reimu/Yukari and Youmu/Yuyuko go to 4B. Solo characters follow their team.
 * - After stage 5 the save data decides: a solo character, or a player who has
 *   already cleared 6A (even with continues), or already cleared 6B without
 *   continuing, skips straight to the true final 6B. Otherwise 6A plays first
 *   and 6A always hands off to 6B, so that route is seven stages long.
 * - Continuing at any point (`numRetries > 0`) forces the long route.
 *
 * Extra (index 8) is out of scope for this reproduction.
 */
import type { StageNumber } from './types';
/** The eight campaign routes; `extra` is deliberately not represented. */
export type StageRoute = 'stage1' | 'stage2' | 'stage3' | 'stage4a' | 'stage4b' | 'stage5' | 'stage6a' | 'stage6b';
/** Retail enum order, which is also the `g_StageEclFiles` index order. */
export declare const ROUTE_ORDER: readonly StageRoute[];
export declare function eclName(route: StageRoute): string;
export declare function routeLabel(route: StageRoute): string;
/** Index into the retail stage tables (0-based, Extra excluded). */
export declare function routeIndex(route: StageRoute): number;
/** The number the HUD prints: both 4A/4B read "4", both 6A/6B read "6". */
export declare function displayStage(route: StageRoute): StageNumber;
export declare function isFinalRoute(route: StageRoute): boolean;
/**
 * Stage 4 branch, straight from `AdvanceToNextStage`.
 *
 * The retail `Shot` enum (`ScoreDat.hpp:52-67`) lists the four teams first and
 * then the eight solos, two per team and in the same team order, so a solo maps
 * back to its team with `(shotType - 4) / 2`. Reimu/Yukari and Youmu/Yuyuko take
 * 4B; Marisa/Alice and Sakuya/Remilia take 4A.
 */
export declare function stage4RouteForShotType(shotType: number): StageRoute;
/** A solo character is `shotType >= 4` (`SHOT_YOUMU_YUYUKO === 3`). */
export declare function isSoloShotType(shotType: number): boolean;
/** Everything the router needs that is not the current route. */
export interface RouteContext {
    /** Retail shot type, 0..11. */
    shotType: number;
    /** True once the player has used a continue; forces the long route. */
    continued: boolean;
    /** Has this character ever cleared 6A, on any difficulty, with continues. */
    clearedStage6A: boolean;
    /** Has this character ever cleared 6B without continuing, on any difficulty. */
    clearedStage6BNoContinue: boolean;
}
/**
 * Which of the two stage-6 variants to play after stage 5 (`Gui.cpp:252-306`).
 *
 * The retail condition reads "you have seen 6A before, or you are flying solo,
 * or you already own a no-continue 6B clear" — a shortcut for players who have
 * beaten the game. A continue takes it away.
 */
export declare function finalRoute(ctx: RouteContext): StageRoute;
/**
 * `GameManager::AdvanceToNextStage`, as a pure function.
 *
 * Returns `null` when the campaign is over, which happens only after 6B.
 */
export declare function nextRoute(route: StageRoute, ctx: RouteContext): StageRoute | null;
/** Entry point for a fresh run, and for Practice's stage picker. */
export declare function routeForDisplayStage(stage: StageNumber, ctx: RouteContext): StageRoute;
//# sourceMappingURL=StageRoute.d.ts.map