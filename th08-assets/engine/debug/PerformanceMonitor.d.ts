/** Optional per-kind entity breakdown shown in the debug overlay. */
export interface EntityCategoryCounts {
    bullets: number;
    enemies: number;
    /** Collectible drops currently on the playfield. */
    items: number;
    player: number;
}
export declare class PerformanceMonitor {
    fps: number;
    entityCount: number;
    collisionChecks: number;
    isVisible: boolean;
    private categories;
    private frameCount;
    private lastTime;
    updateFrame(currentTime?: number): void;
    updateMetrics(entityCount: number, collisionChecks: number, categories?: EntityCategoryCounts): void;
    toggle(): void;
    /** Chrome-only JS heap usage; null where `performance.memory` is unavailable. */
    private getMemoryText;
    getMetricsText(): string[];
}
//# sourceMappingURL=PerformanceMonitor.d.ts.map