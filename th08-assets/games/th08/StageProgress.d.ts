/**
 * Per-character stage-clear records, the local stand-in for `score.dat`.
 *
 * The retail stage router reads exactly two facts out of that file after stage
 * 5 (`Gui.cpp:264-292`): has this character ever cleared 6A (continues allowed),
 * and has it ever cleared 6B without continuing. Those two flags decide whether
 * the run plays the seven-stage route or skips 6A, so the record has to survive
 * a page reload. Difficulty is part of the retail query but the lookup is "any
 * difficulty", so storing per (route, shotType) is enough.
 */
import type { StageRoute } from './StageRoute';
/** The slice of `Storage` this module needs, so tests can pass a map. */
export interface ProgressStore {
    getItem(key: string): string | null;
    setItem(key: string, value: string): void;
}
export declare class StageProgress {
    private readonly store;
    private readonly flags;
    constructor(store?: ProgressStore | null);
    private static read;
    private persist;
    private flag;
    /** Note that a route was cleared, and whether the run was continue-free. */
    record(route: StageRoute, shotType: number, continued: boolean): void;
    hasCleared(route: StageRoute, shotType: number): boolean;
    hasClearedNoContinue(route: StageRoute, shotType: number): boolean;
    /** Wipe every record — the "reset progress" option. */
    reset(): void;
}
//# sourceMappingURL=StageProgress.d.ts.map