/**
 * The original 永夜抄 conversation, end to end.
 *
 * Three jobs live here, each of them a table or a code path copied from the
 * decompile rather than invented:
 *
 * - which `.dat` a stage plays, from `g_GuiMessagePaths` (`Gui.cpp:74-85`);
 * - which script inside it, including the rewrites `FUN_0043396d` performs on
 *   the requested id (`Gui.cpp:222-320`);
 * - which face ANM owns each of the four portrait slots, from
 *   `Spellcard::Init` (`Spellcard.cpp:487-593`).
 *
 * Everything a script asks the screen to do goes into a `DialogueOverlay`, so
 * this file holds no drawing code, and the interpreter itself stays in `sim/`.
 */
import { type MsgScript } from '../../th08/format/MsgFile';
import { MessageVm, type MessageInput, type MessageVmHost } from '../../th08/sim/MessageVm';
import type { GameState } from '../../th08/sim/GameState';
import type { DialogueOverlay } from '../../engine/renderer/DialogueOverlay';
import { type StageRoute } from './StageRoute';
import { RetailAnmCatalog } from './data/th08-face-anm';
import type { MemberId } from '../../touhou-common/player/CharacterProfile';
/** Where `extract.mjs` publishes the retail message streams. */
export declare const MSG_ASSET_DIR = "/assets/th08/raw";
/**
 * `g_GuiMessagePaths`, row = retail `Stage` (so 3 is 4A and 4 is 4B), column =
 * `ShotType` (`ScoreDat.hpp:54-69`). Verbatim from `Gui.cpp:74-85`; the `.dat`
 * suffix is added by `RetailMessageSource`.
 */
export declare const GUI_MESSAGE_PATHS: readonly (readonly string[])[];
/** Retail `Stage` index for one of our routes, or -1 when unknown. */
export declare function stageIndexFor(route: StageRoute): number;
/** The message pack a route plays for one shot type, without the `.dat`. */
export declare function messagePackFor(route: StageRoute, shotType: number): string | undefined;
/** What `remapMessageId` needs from the run, minus the catelog it cannot see. */
export interface MessageRouteFacts {
    shotType: number;
    retries: number;
    clockHour: number;
}
/**
 * The id rewrites at `Gui.cpp:222-320`.
 *
 * Only the arms this build can actually reach are modelled. `value == 10` in
 * stage 5 picks which of the four pack scripts the 鈴仙 conversation uses, and
 * `value >= 6` in 6B collapses onto script 5 once the clock is past midnight
 * (`:311-317`). The catelog and replay arms need save data this build does not
 * carry, so they fall through to the plain id.
 */
export declare function remapMessageId(id: number, route: StageRoute, facts: MessageRouteFacts): {
    id: number;
    routeChoice: number;
};
/** One loaded pack: every script it holds, addressable by retail message id. */
export declare class RetailMessagePack {
    readonly pack: string;
    private readonly file;
    private constructor();
    get scriptCount(): number;
    script(id: number): MsgScript | null;
    /** Read a pack from the bytes `LoadMsg` (`Gui.cpp:2351-2368`) would map. */
    static fromBytes(pack: string, bytes: Uint8Array): RetailMessagePack;
}
/** Loads and caches message packs, one per stage. */
export declare class RetailMessageSource {
    private readonly catalog;
    private readonly packs;
    private readonly pending;
    private constructor();
    static create(catalog: RetailAnmCatalog): RetailMessageSource;
    /** The ANM metadata behind the four portrait slots. */
    get anm(): RetailAnmCatalog;
    /** Start fetching a pack, if it is not already in hand. */
    prefetch(pack: string): Promise<RetailMessagePack | null>;
    /** The pack only when already loaded, which is what op 22 needs. */
    loaded(pack: string): RetailMessagePack | null;
}
/** What the host can ask the game to do beyond the box itself. */
export interface RetailMessageEffects {
    /** `g_Supervisor.PlayMusic` / `StopAudio` for the stage slot `track`. */
    stageMusic(track: number): void;
    /** `g_Supervisor.FadeOutMusic(4.0)` (`Gui.cpp:873-874`). */
    fadeMusic(): void;
    /** `g_SoundPlayer.PlaySoundByIdx` (`Gui.cpp:684`, `:689`, `:712`). */
    sound(id: number): void;
    /** `g_GameManager.flags.unk5_6 = 2` (`Gui.cpp:880-883`). */
    stageClear(): void;
    /** The stage-result snapshot armed by op 9 (`Gui.cpp:800-869`). */
    stageResult(): void;
    /** `g_GameManager.flags.isGoingToFinalB` (`Gui.cpp:716`). */
    routeChosen(choice: number): void;
    /** `:381-382` the field sweeps clean while a conversation runs. */
    collectItems(): void;
    /** `ScreenEffect::RegisterChain(4, 442, ...)` (`Gui.cpp:876-879`). */
    screenEffect(): void;
}
/**
 * `Gui::RunMsg` wired to the screen. The interpreter is pure, so every retail
 * side effect lands here, one method per decompiled call site.
 */
export declare class RetailMessageHost implements MessageVmHost {
    private readonly source;
    private readonly overlay;
    private readonly effects;
    private readonly gs;
    private readonly pack;
    private readonly vm;
    constructor(source: RetailMessageSource, overlay: DialogueOverlay, effects: RetailMessageEffects, gs: GameState, pack: () => string | undefined);
    /** The interpreter this host drives. */
    get messages(): MessageVm;
    /** `Gui::MsgWait` (`Gui.cpp:1024-1030`): the timeline waits while true. */
    get pending(): boolean;
    portraitScript(slot: number, script: number): void;
    portraitSprite(slot: number, sprite: number): void;
    portraitInterrupt(slot: number, code: number): void;
    drawLine(line: number, color: number, text: string): void;
    clearLine(line: number): void;
    bgm(track: number): void;
    fadeBgm(): void;
    faceCutIn(): void;
    screenEffect(): void;
    stageResult(): void;
    stageClear(): void;
    sound(id: number): void;
    routeChosen(choice: number): void;
    requestMessage(id: number): void;
    branchScript(id: number): MsgScript | null;
    autoCollectItems(): void;
    /**
     * `textColors[colorIndex]`, copied per message from
     * `g_GuiMessageTextColors[g_GameManager.shotType].colors[colorIndex]`
     * (`Gui.cpp:332-335`) and passed untouched to Win32 `SetTextColor` by
     * `AnmManager::DrawTextLeft` -> `TextHelper::RenderTextToTexture`
     * (`AnmManager.cpp:2755`, `TextHelper.cpp:381`). A `COLORREF` is `0x00BBGGRR`,
     * which is why the numbers below are re-ordered from how the table is written.
     *
     * The table is twelve rows of four, one row per shot type, and every row is the
     * same: `00e8f0ff 00f0e8ff 00ffe8f0 00ffe8f0`. It reaches us through the
     * reference port's restored copy of the exe's `.data`, which writes exactly that
     * table to exactly that address (`linux_runtime.cpp:214-227` and `:248`, whose
     * target is `0x004c7180` - the address `Gui.cpp:332` reads).
     *
     * So side 0 prints warm cream, side 1 pink, and slots 2 and 3, which only the
     * enemy faces use, print pale lilac. `shadowColors[0..3]` is zeroed at the same
     * moment (`Gui.cpp:336-339`), so the text has no tinted outline either.
     */
    private textColor;
    /**
     * Bind the four slots for one team and route, exactly as `Spellcard::Init`
     * (`Spellcard.cpp:487-593`) picks the face ANMs: the two members on the left,
     * the boss and - where a route has one - the mid-boss on the right.
     */
    bindFaces(members: readonly [MemberId, MemberId], route: StageRoute): void;
}
/** Build the per-frame input the interpreter samples from raw button state. */
export declare function messageInputFrom(buttons: {
    shoot: boolean;
    previousShoot: boolean;
    skip: boolean;
    up: boolean;
    previousUp: boolean;
    down: boolean;
    previousDown: boolean;
    dying: boolean;
}): MessageInput;
//# sourceMappingURL=RetailMessages.d.ts.map