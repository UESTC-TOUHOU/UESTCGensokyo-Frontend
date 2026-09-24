/**
 * Stage-side dialogue box (EoSD 会話システム).
 *
 * Lives in the common layer so any game can drive it; the game supplies a
 * `faceResolver` that maps a speaker onto real artwork. While a script plays,
 * the caller freezes its stage timeline exactly like the original: bullets on
 * screen keep moving, but no new timeline events fire until the last line is
 * dismissed.
 */
export interface DialogueLine {
    /** Display name shown above the text, e.g. '霊夢'. */
    speaker: string;
    text: string;
    /** Face expression key handed to the game's faceResolver. */
    mood?: string;
}
export interface DialogueSystemOptions {
    /** Map (speaker, mood) onto an image URL, or undefined for no portrait. */
    faceResolver?: (speaker: string, mood?: string) => string | undefined;
    /** Frames spent revealing one character (typewriter speed). */
    charFrames?: number;
    /** Frames the finished line lingers before auto-advancing. */
    holdFrames?: number;
    /** Fired once the last line is dismissed or the script is stopped. */
    onComplete?: () => void;
}
export declare class DialogueSystem {
    private readonly root;
    private readonly options;
    private el?;
    private nameEl?;
    private textEl?;
    private faceEl?;
    private script;
    private index;
    private revealed;
    private revealClock;
    private hold;
    private handler?;
    constructor(root: HTMLElement, options?: DialogueSystemOptions);
    /** True while a script is on screen - the caller should freeze its timeline. */
    get isActive(): boolean;
    /** The line being shown, or null between scripts. */
    get current(): DialogueLine | null;
    get lineCount(): number;
    get lineIndex(): number;
    /** Start a script, replacing anything already playing. */
    play(lines: DialogueLine[]): void;
    /** Skip the typing animation, then move to the next line (or end the script). */
    advance(): void;
    /** Tear the box down without firing onComplete (stage reset, quit to menu). */
    stop(): void;
    /** Per-frame clock: drives the typewriter and the auto-advance hold. */
    update(dtFrames: number): void;
    private advanceLine;
    private mount;
    private unmount;
    private render;
}
//# sourceMappingURL=DialogueSystem.d.ts.map