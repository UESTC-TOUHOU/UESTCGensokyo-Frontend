/** In-game ESC menu: resume / restart / quit / audio toggle. */
export interface PauseMenuOptions {
    onResume: () => void;
    onRestart: () => void;
    onQuit: () => void;
    /** Toggle mouse steering; returns the new state for the row label. */
    onToggleMouse?: () => boolean;
    onToggleBgm?: () => boolean;
    isMouseControl?: () => boolean;
}
export declare class PauseMenu {
    private readonly root;
    private readonly options;
    private el?;
    private cursor;
    private static readonly ITEM_COUNT;
    private handler?;
    constructor(root: HTMLElement, options: PauseMenuOptions);
    get isVisible(): boolean;
    show(): void;
    hide(): void;
    private move;
    private mark;
    private activate;
}
//# sourceMappingURL=PauseMenu.d.ts.map