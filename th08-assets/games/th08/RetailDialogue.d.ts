/**
 * The retail stage conversation, wired into a running game.
 *
 * `Gui.cpp` owns one `GuiMessageStateOverlay` for the whole run: the message
 * interpreter reads `.dat` scripts, drives four ANM portraits, prints two text
 * lines, and switches the stage's music. Everything in that file needs either
 * the shipped data or the live `GameState`, and nothing needs to know about
 * menus, HUD, or how the stage ends - so it lives here rather than in `TH08Game`,
 * which only decides when to call it.
 */
import type { InputSystem } from '../../engine/core/InputSystem';
import type { AudioManager } from '../../engine/audio/AudioManager';
import type { PixiRenderer } from '../../engine/renderer/PixiRenderer';
import type { StageRunner } from '../../th08/sim/StageRunner';
import type { CharacterId, StageNumber } from './types';
import type { StageRoute } from './StageRoute';
/** What the controller needs from the game, read lazily because routes change. */
export interface RetailDialogueHooks {
    /** The live renderer, or null before `init` and after a teardown. */
    renderer(): PixiRenderer | null;
    /** The stage that is now playing, or null before it loads and after a game over. */
    runner(): StageRunner | null;
    input: InputSystem;
    audio: AudioManager;
    /** `this.route`, which advances between stages. */
    route(): StageRoute;
    /** `this.stageNumber`, the display number the BGM fallback table is keyed by. */
    stageNumber(): StageNumber;
    /** `g_GameManager.shotType`: index into `g_GuiMessagePaths`' columns. */
    shotType(): number;
    /** Which `stageN.std` is playing, and therefore which four songs exist. */
    stdKey(): string | null;
    character(): CharacterId;
    /** `numRetries`: a continue rewrites the stage-5 message. */
    retries(): number;
    /** The QA `?autofire` hold, which has to advance dialogue like a real Z. */
    autoShoot(): boolean;
    /** The QA `?autoskip` hold, which fast-forwards a conversation like Ctrl does. */
    autoSkip(): boolean;
    /** True while the player is dying, which suspends the automatic item sweep. */
    dying(): boolean;
}
export declare class RetailDialogue {
    private readonly hooks;
    private box;
    /** The `stgNNtxt` card that opens every stage (`Gui.cpp:2307`). */
    private title;
    private source;
    private host;
    private packName;
    /** Whether the stage's message pack is in hand, still fetching, or lost. */
    private packState;
    /** How many timeline requests this controller has taken over. */
    private served;
    /** Button state from the previous frame; retail samples edges, not levels. */
    private prev;
    /** `flags.isGoingToFinalB` as op 22 published it, -1 until it fires. */
    routeChoice: number;
    /**
     * File name of the recording currently asked for, so a slot can be requested
     * twice without restarting the song. Retail has no such guard because op 7 is
     * the only caller, but here the stage start and the boss approach both reach for
     * a slot as well.
     */
    private songFile;
    constructor(hooks: RetailDialogueHooks);
    /** The box is on screen, which is what the stage clock waits on. */
    get showing(): boolean;
    /** Frames the current message has been up, for the box reveal and the readout. */
    get frames(): number;
    /** The pack `Gui::LoadMsg` would have mapped for the stage now playing. */
    get pack(): string | undefined;
    /** True once the manifest, the box, and the packs are all in hand. */
    get ready(): boolean;
    /**
     * True when this stage's conversations are playable, which is what decides
     * whether a song slot can wait for op 7 or has to be asked for directly.
     */
    get messagesAvailable(): boolean;
    /**
     * Build the box out of shipped data only.
     *
     * The two text lines sit wherever `text.anm` scripts 0 and 1 put them, the
     * portraits move because their own ANM scripts say so, and the only numbers
     * written in code are the arcade rect - which retail supplies itself, through
     * `g_GameManager.arcadeRegionTopLeftPos` (`GameManager.cpp:441-442`).
     */
    setup(): Promise<void>;
    /**
     * Point the interpreter at the stage that is now playing.
     *
     * `Gui::LoadMsg` (`Gui.cpp:2351-2368`) runs once per stage and frees the old
     * pack, and the four face slots are chosen per run
     * (`Spellcard.cpp:487-593`), so a stage hand-off rebuilds both.
     */
    bindStage(): void;
    /**
     * One `Gui::OnUpdate` (`Gui.cpp:185-196`): collect any message the stage script
     * asked for, run the interpreter, and publish the flag timeline op 7 waits on.
     */
    step(runner: StageRunner): void;
    /** Tear the layer down, for a stage hand-off or a game restart. */
    detach(): void;
    /** Pull the box off screen without dropping the loaded packs. */
    hide(): void;
    /**
     * What a browser pass can read without pressing anything: whether the packs are
     * in, which script is running, the two lines as printed, and what each portrait
     * slot resolved to.
     */
    debugState(): {
        ready: boolean;
        pack: string | undefined;
        packState: string;
        served: number;
        id: number;
        frames: number;
        pending: boolean;
        lines: readonly string[];
        faces: string[];
        title: string[];
    };
    /**
     * `Gui::FUN_00435900` picks which script a request means - the stage-5 rewrite
     * at `Gui.cpp:256-283` is what `remapMessageId` models - then `FUN_00439810`
     * starts it with the per-message state cleared.
     */
    private playRequestedMessage;
    /**
     * Start retail song slot `track` of the stage now playing.
     *
     * Op 7 (`Gui.cpp:758-788`) is the usual caller, but the stage start reaches for
     * slot 0 the way `GameManager.cpp:417` does, so this is public. A negative slot
     * is op 7's stop: `Gui.cpp:762` calls `StopAudio()` rather than naming a song.
     */
    requestStageSong(track: number): void;
}
//# sourceMappingURL=RetailDialogue.d.ts.map