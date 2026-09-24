import { InputAction, InputSnapshot } from '../core/InputSystem';
export interface ReplayMetadata {
    stage: number;
    difficulty: string;
    character: string;
}
export interface ReplayFrame {
    frame: number;
    snapshot: InputSnapshot;
}
export interface ReplayData {
    version: 1;
    metadata: ReplayMetadata;
    frames: ReplayFrame[];
}
export declare class ReplayRecorder {
    private frames;
    private recording;
    private metadata;
    start(metadata: ReplayMetadata): void;
    capture(frame: number, snapshot: InputSnapshot): void;
    stop(): ReplayData;
    private stopSnapshot;
    /** Current recording without stopping it (safe to call every frame). */
    peek(): ReplayData;
    get frameCount(): number;
    get isRecording(): boolean;
    static encode(data: ReplayData): string;
    static decode(serialized: string): ReplayData;
}
export declare class ReplayPlayer {
    readonly data: ReplayData;
    private cursor;
    constructor(data: ReplayData);
    reset(): void;
    next(): ReplayFrame | undefined;
    get isFinished(): boolean;
}
export declare function normalizeReplayActions(actions: string[]): InputAction[];
//# sourceMappingURL=ReplaySystem.d.ts.map