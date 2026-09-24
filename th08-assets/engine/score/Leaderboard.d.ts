export interface ScoreEntry {
    name: string;
    score: number;
    stage: number;
    difficulty: string;
    character: string;
    createdAt: string;
    /** Continues used, which the HUD shows in the score row's tenth column. */
    numRetries?: number;
}
export interface LeaderboardStorage {
    getItem(key: string): string | null;
    setItem(key: string, value: string): void;
    removeItem(key: string): void;
}
export declare class Leaderboard {
    private readonly key;
    private entries;
    private readonly storage?;
    constructor(key?: string, storage?: LeaderboardStorage);
    submit(entry: Omit<ScoreEntry, 'createdAt'>): ScoreEntry[];
    getEntries(): ScoreEntry[];
    /**
     * The best entry stored for one shot type and difficulty. 永夜抄 keeps a
     * separate high score per character, and the row also reports how many
     * continues that run spent.
     */
    bestFor(difficulty: string, character: string): ScoreEntry | null;
    clear(): void;
    private load;
    private save;
}
//# sourceMappingURL=Leaderboard.d.ts.map