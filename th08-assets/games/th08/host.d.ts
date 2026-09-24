import { TH08Game } from './TH08Game';
import { TH08Shell, type TH08ShellOptions } from './TH08Shell';
import type { GameSelection, ResultsReport } from './ui/TH08Menu';
import type { PlayerPrefs } from './ui/PlayerPrefs';
export type { GameSelection, ResultsReport };
export interface TH08HostOptions extends TH08ShellOptions {
    /** Optional custom game container element. If omitted, a `.th08-game-root` is appended to container. */
    gameRoot?: HTMLElement;
    /** Optional custom menu container element. If omitted, a `.th08-menu-root` is appended to container. */
    menuRoot?: HTMLElement;
    /**
     * Base URL for loading assets (e.g. '/th08-assets/', './', or custom CDN URL).
     * Overrides the default resource base while this host is mounted.
     */
    resourceBase?: string;
    /** Immediately launch into game instead of title menu. */
    autostart?: boolean | GameSelection;
}
export type TH08HostStatus = 'title' | 'running' | 'destroyed';
export interface TH08HostState {
    status: TH08HostStatus;
}
export interface TH08HostHandle {
    /** The instantiated shell controller. */
    readonly shell: TH08Shell;
    /** Currently active game instance, if a run has started. */
    readonly game: TH08Game | undefined;
    /** Function returning active game instance. */
    getGame(): TH08Game | undefined;
    /** Host lifecycle state. */
    getState(): TH08HostState;
    /** Promise that resolves when initial setup/boot completes. */
    readonly ready: Promise<void>;
    /** Update player preferences (volumes, controls, skin). */
    updatePrefs(prefs: Partial<PlayerPrefs>): void;
    /** Launch a specific team / difficulty / stage selection. */
    launch(selection: GameSelection): Promise<void>;
    /** Teardown all resources, DOM elements, and listeners. */
    destroy(): void;
}
/**
 * Mounts the TH08 game shell into a host DOM element.
 *
 * Designed for embedding into host frameworks (e.g. React 18, Vue) with full
 * resiliency against rapid unmount and StrictMode double-mounting.
 */
export declare function mountTH08(container: HTMLElement, options?: TH08HostOptions): TH08HostHandle;
//# sourceMappingURL=host.d.ts.map