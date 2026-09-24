import type { StageClearResult } from '../TH08Game';
import { PlayerPrefs } from './PlayerPrefs';
import { Leaderboard } from '../../../engine/score/Leaderboard';
import { CharacterId, Difficulty, StageNumber } from '../types';
import { type StageRoute } from '../StageRoute';
/**
 * What the player picked once every menu screen has been answered.
 *
 * `stage` is always 1: like the original, confirming a team and a difficulty
 * drops you straight into 第一面 and the campaign carries on from there.
 *
 * `route` is the one exception: a practice entry may name a branch (4A/4B/6A/6B)
 * directly, which the printed stage number cannot express.
 */
export interface GameSelection {
    stage: StageNumber;
    route?: StageRoute;
    difficulty: Difficulty;
    character: CharacterId;
    campaign?: boolean;
}
/** Extra facts the results screen needs beyond StageClearResult. */
export interface ResultsReport extends StageClearResult {
    spellBonus: number;
    livesLeft: number;
    bombsLeft: number;
    power: number;
    maxPower: number;
    replayJson?: string;
    campaignFinished?: boolean;
    /** The run ended in GAME OVER rather than a cleared stage. */
    gameOver?: boolean;
    /**
     * A stand-in report used to review the settlement screen. It is never written to
     * the score file, which is what lets `?resultscreen` be opened any number of
     * times without burying the player's own records.
     */
    demo?: boolean;
}
export interface TH08MenuCallbacks {
    onStart: (selection: GameSelection) => void;
    /** Ask the running game for its recorded replay (results screen export). */
    getReplay?: () => string | null;
    /** Live preference changes from the options / pause screens. */
    onPrefsChange?: (prefs: PlayerPrefs) => void;
    /** Load a replay file back into the engine for playback. */
    onReplayLoad?: (json: string) => void;
    onQuit?: () => void;
}
/** Touhou-style letter rank from score, stage depth and difficulty pressure. */
export declare function computeRank(score: number, stage: StageNumber, difficulty: Difficulty): string;
/**
 * Full front-end flow: title -> team select -> difficulty -> game (第一面) -> results.
 *
 * Every screen is keyboard- and pointer-navigable, and is skinned with the baked
 * atlas (ui:title backdrop, ui:portrait frames, character + boss sprites).
 */
export declare class TH08Menu {
    private readonly root;
    /** Every focusable row across all screens; one screen renders one kind. */
    private static readonly NAV_SELECTOR;
    private readonly callbacks;
    private readonly leaderboard;
    private screen;
    private cursor;
    private selection;
    private practiceMode;
    private report;
    private prefs;
    private keyHandler?;
    /** The live retail settlement screen, when the results page is up. */
    private resultScreen;
    private resultRaf;
    private resultObserver;
    constructor(root: HTMLElement, callbacks: TH08MenuCallbacks, leaderboard?: Leaderboard);
    showTitle(): void;
    private activateTitle;
    private showPractice;
    /**
     * Practice rows walk `ROUTE_ORDER`, i.e. the retail `Stage` enum without Extra,
     * so the drill list offers both branches of 4 and 6 rather than one row per
     * printed stage number.
     */
    private choosePracticeStage;
    /** Input / art / audio / fog preferences. Mouse steering is opt-in here (and in the pause menu). */
    /**
     * @param keepCursor re-render in place after a change, so the highlight stays on the row
     * the player just moved. Opening the screen fresh still starts at row 1.
     */
    showOptions(keepCursor?: boolean): void;
    private activateOption;
    get prefsSnapshot(): PlayerPrefs;
    private showRanking;
    private showControls;
    showCharacter(): void;
    /**
     * Commit the picked team. Re-rendering the screen first would reset the cursor
     * back to the previously committed selection, so the index is passed straight in.
     */
    private confirmCharacter;
    showDifficulty(): void;
    private confirmDifficulty;
    showResults(report: ResultsReport): void;
    /**
     * The score table, in the original's columns.
     *
     * `OnDraw:2485` prints the header `No  Name       Score(Stage)   Date   Slow`
     * and then one row per record. The columns are a real table rather than printf
     * padding because the team names are CJK, which no monospace advance can line
     * up; the wording, the order and the row colours are the original's.
     */
    private retailListing;
    private exportReplay;
    private activateResult;
    private render;
    /** Stop the settlement screen's clock and release its art. */
    private teardownScreenLayer;
    /**
     * Run the retail settlement screen behind the numbers.
     *
     * Two things here have to follow the animation rather than a stylesheet: the
     * panel arrives on an interrupt, and the stat column hangs off VM 71's own
     * position (`DrawFinalStats` adds 210/32 to it and steps 22 per row). So the
     * rows are placed from the live VM every frame, and the monospace advance is
     * measured once per resize to match the original's 13-pixel text cell.
     */
    private setupResultLayer;
    private setCursor;
    private bindKeys;
    private confirmCurrent;
    private goBack;
    hide(): void;
    destroy(): void;
    private static escape;
}
//# sourceMappingURL=TH08Menu.d.ts.map