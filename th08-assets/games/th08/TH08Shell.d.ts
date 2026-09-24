import { TH08Game } from './TH08Game';
import { GameSelection, ResultsReport } from './ui/TH08Menu';
import { PlayerPrefs } from './ui/PlayerPrefs';
import type { StageRunner } from '../../th08/sim/StageRunner';
declare global {
    interface Window {
        __TOUHOU_GAME__?: TH08Game;
    }
}
export interface TH08ShellOptions {
    /** Whether to listen to URL search params (?resultscreen, ?autostart, ?warp, debug flags). */
    listenUrlParams?: boolean;
    /** Whether to toggle document.body.classList 'is-playing' */
    toggleBodyClass?: boolean;
    /** Callback when stage or campaign completes. */
    onStageClear?: (report: ResultsReport) => void;
    /** Callback when initialization or launch fails. */
    onError?: (error: Error) => void;
}
/**
 * A finished run for `?resultscreen`, shaped like a Lunatic stage-6 clear so the
 * settlement panel shows its widest score field and all eight stat rows at once.
 */
export declare function settlementDemoReport(): ResultsReport;
/**
 * Host shell: owns the front-end menu flow, the pause menu and the touch pad,
 * and mirrors player preferences into the running game.
 */
export declare class TH08Shell {
    private readonly container;
    readonly menuRoot: HTMLElement;
    private readonly options;
    private readonly prefs;
    private game?;
    private menu;
    private stopMirror?;
    private pause?;
    private touch?;
    private destroyed;
    constructor(container: HTMLElement, menuRoot: HTMLElement, options?: TH08ShellOptions);
    getGame(): TH08Game | undefined;
    boot(): Promise<void>;
    launch(selection: GameSelection): Promise<void>;
    private applyUrlDebugFlags;
    private warpFrames;
    private mirrorState;
    private mountOverlays;
    private finishRun;
    private playReplay;
    private returnToTitle;
    private setPlaying;
    teardownRun(): void;
    destroy(): void;
    applyPrefs(prefs: Partial<PlayerPrefs>): void;
    private persist;
    private toggleBgm;
}
export declare function describeHudSprites(game: TH08Game): string;
export declare function enemyDebug(game: TH08Game): string;
export declare function playerShotDebug(game: TH08Game): string;
export declare function optionDebug(runner: StageRunner): string;
export declare function itemStateCensus(runner: StageRunner): number[];
export declare function selectionFromUrl(): GameSelection | null;
//# sourceMappingURL=TH08Shell.d.ts.map