/**
 * `Gui::RunMsg` as a frame-stepped interpreter (`Gui.cpp:384-905`).
 *
 * The retail VM holds one script at a time, runs every instruction whose frame
 * mark has come due, and stops on instructions that ask to wait. Three details
 * are load-bearing and easy to get wrong:
 *
 * - The advance at `:897-902` is `4 + argSize`, and the loop at `:384-390` keeps
 *   running while `timer >= time`, so `time` is an absolute mark counted in
 *   *played* frames. `timer++` sits at `:905`, past the loop, which means a
 *   `goto run_scripts` (`:711`, `:738`, `:872`, `:884`) skips it: a waiting
 *   instruction does not age the script, and stays where it is for next frame.
 * - A wait is re-entered every frame and only steps past itself once its clock
 *   is up (`:729-738`), so the pause is interruptible by the shoot button only
 *   after `waitThreshold` frames have already elapsed in it (`:723-727`).
 * - `textPending` is the "next line starts a new paragraph" flag. Waits set it
 *   when they finish (`:733`), and op 16 consumes it by rewinding to line 0
 *   (`:621-630`), which is what makes retail dialogue two lines per page.
 *
 * Everything the VM cannot reach from a script - textures, audio, the game
 * manager - goes through `MessageVmHost`, so the interpreter stays testable.
 */
import { type MsgScript } from '../format/MsgFile';
/** `portraits[4]`: slots 0/1 are the player pair, 2/3 the enemy pair. */
export declare const MSG_FACE_SLOTS = 4;
/** `dialogueLines[2]`. */
export declare const MSG_TEXT_LINES = 2;
/** `:700` the route prompt will not accept a commit before this many frames. */
export declare const MSG_ROUTE_MIN_FRAMES = 60;
/** `:917` the first second a held skip cannot get a script inside of. */
export declare const MSG_ONE_SECOND = 60;
/** `:707` / `:734` the threshold a finished wait leaves behind. */
export declare const MSG_THRESHOLD_AFTER_WAIT = 30;
/** `:741` the threshold a shoot-skipped wait leaves behind. */
export declare const MSG_THRESHOLD_AFTER_SKIP = 8;
/** `:341` the threshold a freshly started message begins with. */
export declare const MSG_THRESHOLD_INITIAL = 6;
/** `SOUND_SELECT` and `SOUND_MOVE_MENU`, as the VM names them. */
export declare const MSG_SOUND_SELECT = 17;
export declare const MSG_SOUND_MOVE_MENU = 16;
/** The buttons `g_GuiMessageInputCurrent` samples, with the edges the VM needs. */
export interface MessageInput {
    shoot: boolean;
    /** Rising edge of `shoot`, i.e. `current && current != previous`. */
    shootPressed: boolean;
    skip: boolean;
    upPressed: boolean;
    downPressed: boolean;
    /** `g_Player.playerState == PLAYER_STATE_DYING`, which suspends item collection. */
    dying: boolean;
}
export declare const idleMessageInput: () => MessageInput;
/**
 * What a script asks the presentation layer to do. Each member names the retail
 * call it stands in for, so a gap here is a gap against the decompile.
 */
export interface MessageVmHost {
    /** `AnmManager::SetAndExecuteScript` on one face VM (op 1). */
    portraitScript(slot: number, script: number): void;
    /** `AnmManager::SetSprite` on one face VM (ops 2, 15, 17). */
    portraitSprite(slot: number, sprite: number): void;
    /** `AnmVm::pendingInterrupt` (ops 5, 15, 17): 3 show, 4 hide, 6 cross-side hide. */
    portraitInterrupt(slot: number, code: number): void;
    /** `AnmManager::DrawTextLeft` on one dialogue line (ops 3, 16, 19, 20). */
    drawLine(line: number, color: number, text: string): void;
    /** The `" "` draw that wipes a line (`:601`, `:627`). */
    clearLine(line: number): void;
    /** `g_Supervisor.PlayMusic` / `StopAudio` (op 7). */
    bgm(track: number): void;
    /** `g_Supervisor.FadeOutMusic(4.0)` (op 12). */
    fadeBgm(): void;
    /** `g_Spellcard.enemyFaceAnm0` cut-in VM (op 8). */
    faceCutIn(): void;
    /** `ScreenEffect::RegisterChain(4, 442, ...)` (op 14). */
    screenEffect(): void;
    /** The stage-result snapshot of power, points, orbs, graze and clock (op 9). */
    stageResult(): void;
    /** `g_GameManager.flags.unk5_6 = 2`, the stage-clear hand-off (op 11). */
    stageClear(): void;
    /** `g_SoundPlayer.PlaySoundByIdx` (op 21). */
    sound(id: number): void;
    /** Publish the route choice; `isGoingToFinalB` is what op 22 stores. */
    routeChosen(choice: number): void;
    /** `g_Gui.FUN_00439810(id)` from op 22: jump to another script. */
    requestMessage(id: number): void;
    /**
     * Optional synchronous form of the same jump. Op 22 keeps running inside the
     * retail `continue`, so a host that already has the script in hand can hand it
     * straight back and the branch starts on the very next frame.
     */
    branchScript?(id: number): MsgScript | null;
    /**
     * `:381-382` `g_ItemManager.AutoCollectAllItems()` runs every frame a message
     * is up, unless the ship is dying — which is why walking into a dialogue in the
     * original sweeps the field of items.
     */
    autoCollectItems(): void;
}
export declare class MessageVm {
    private readonly host;
    private script;
    private cursor;
    private timer;
    private framesInPause;
    private waitThreshold;
    private textPending;
    private currentLine;
    private skippable;
    private ignoreWaitCounter;
    private messageFlag;
    private route;
    private currentSide;
    private currentPortrait;
    private readonly lines;
    /** `currentMsgIdx`, -1 while idle. This is what timeline op 7 waits on. */
    messageId: number;
    constructor(host: MessageVmHost);
    get active(): boolean;
    /**
     * `currentSide` (`Gui.cpp:146`): the speaking slot, and therefore the index
     * into `textColors[]` that op 16 colours its line with. Ops 15 and 17 write
     * it, and `:342` clears it back to 0 with every new message.
     */
    get side(): number;
    get text(): readonly string[];
    get routeChoice(): number;
    /**
     * `FUN_00439810` is not the only writer: the stage-5 id rewrite at
     * `Gui.cpp:263-283` sets `routeChoice` alongside the script it picks, so a host
     * that remaps a message has to be able to arm the choice before it starts.
     */
    setRouteChoice(value: number): void;
    get framesElapsed(): number;
    get instructionIndex(): number;
    /** `FUN_00439810`: start a script and reset the per-message VM state. */
    play(id: number, script: MsgScript): void;
    /**
     * The body of `FUN_0043396d` (`:211-350`).
     *
     * `timer` is deliberately not part of this reset. The decompile never writes
     * it outside the skip at `:376` and the box slide-in read at `:949`, so a
     * nested start - which is exactly what op 22 does - keeps running from the
     * current mark, while the outer `play()` zeroes it because every shipped
     * script is authored from frame 0.
     */
    private playKeepingTimer;
    /** `:392-393` the VM going idle, whether by op 0 or by the host. */
    stop(): void;
    /** One frame of `Gui::RunMsg`. */
    tick(input: MessageInput): void;
    /** True when a line currently holds text, i.e. `dialogueLines[i].scriptIndex >= 0`. */
    private lineActive;
    /**
     * `:399-414` the previous speaker hides, and every other slot is reset.
     * Crossing the player/enemy divide sends interrupt code 6 instead of 4,
     * which is the different flourish. The retail test is on the *integer*
     * halves, so slots 0/1 are one side and 2/3 are the other.
     */
    private armPortraits;
    private draw;
    private wipe;
    /**
     * The shared body of the two pausing opcodes. `minFrames` is the operand, and
     * `commitEarly` is the shoot-button escape that only opens once
     * `waitThreshold` frames have passed inside this same pause.
     */
    private pause;
    /** One `case` of the retail switch. */
    private exec;
    get flag(): number;
    get waitsIgnored(): number;
}
//# sourceMappingURL=MessageVm.d.ts.map