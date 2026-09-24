export type TimePhase = 'dawn' | 'day' | 'dusk' | 'night';
export interface TimeSnapshot {
    frame: number;
    progress: number;
    phase: TimePhase;
    isNight: boolean;
    brightness: number;
    backgroundColor: number;
}
export declare class TimeSystem {
    frame: number;
    readonly cycleFrames: number;
    constructor(cycleFrames?: number);
    advance(dtFrames?: number): void;
    reset(): void;
    get progress(): number;
    get phase(): TimePhase;
    get isNight(): boolean;
    get brightness(): number;
    get backgroundColor(): number;
    snapshot(): TimeSnapshot;
}
//# sourceMappingURL=TimeSystem.d.ts.map