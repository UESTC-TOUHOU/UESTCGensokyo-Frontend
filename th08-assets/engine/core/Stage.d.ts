import { EventEmitter } from './EventEmitter';
import { Entity } from './Entity';
export interface StageTimelineEvent {
    frame: number;
    action: (stage: Stage) => void;
    executed?: boolean;
}
/** Queued dialogue line produced by `Stage.showDialogue` (ticket 08 StageContext API). */
export interface StageDialogue {
    text: string;
    frames: number;
}
/** Queued boss phase request produced by `Stage.startBossPhase`. */
export interface StageBossPhaseRequest {
    boss: Entity;
    index: number;
}
export interface StageConfig {
    timeline: StageTimelineEvent[];
    name?: string;
    stageNumber?: number;
}
export declare class Stage extends EventEmitter {
    name: string;
    stageNumber: number;
    currentFrame: number;
    isPaused: boolean;
    isCompleted: boolean;
    /** How many timeline events have fired so far - lets tests and the HUD prove a chart ran. */
    executedEvents: number;
    /** StageContext API (ticket 08): timeline-produced entities, drained by the host game. */
    readonly spawnedEntities: Entity[];
    /** Pending boss phase requests, drained by the host game. */
    readonly bossPhaseRequests: StageBossPhaseRequest[];
    /** Pending dialogue lines, drained by the host game. */
    readonly dialogueQueue: StageDialogue[];
    private timeline;
    constructor(config: StageConfig);
    update(dtFrames?: number): void;
    complete(): void;
    /** StageContext API (ticket 08): enqueue an entity for the host game to spawn. */
    spawnEntity(entity: Entity): void;
    /** StageContext API (ticket 08): request the host game to switch `boss` to phase `index`. */
    startBossPhase(boss: Entity, index: number): void;
    /** StageContext API (ticket 08): enqueue a dialogue/message line for the host HUD. */
    showDialogue(text: string, frames?: number): void;
    reset(): void;
}
//# sourceMappingURL=Stage.d.ts.map