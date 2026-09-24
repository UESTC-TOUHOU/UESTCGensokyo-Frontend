import { Player } from '../../touhou-common/player/Player';
import { BulletSystem } from '../../engine/core/BulletSystem';
import { CollisionSystem } from '../../engine/core/CollisionSystem';
import { InputSystem } from '../../engine/core/InputSystem';
import { PixiRenderer } from '../../engine/renderer/PixiRenderer';
import { AudioManager } from '../../engine/audio/AudioManager';
import { PerformanceMonitor } from '../../engine/debug/PerformanceMonitor';
import { HUD } from '../../touhou-common/ui/HUD';
import { Stage } from '../../engine/core/Stage';
import { Enemy } from '../../touhou-common/enemy/Enemy';
import { ItemSystem } from '../../touhou-common/item/ItemSystem';
import { Boss } from '../../touhou-common/boss/Boss';
import type { GameProfile } from '../../touhou-common/game/GameProfile';
import { DialogueSystem } from '../../touhou-common/ui/DialogueSystem';
import { TimeSystem } from './TimeSystem';
import { Leaderboard } from '../../engine/score/Leaderboard';
import { ReplayData, ReplayRecorder } from '../../engine/replay/ReplaySystem';
import { type StageRoute } from './StageRoute';
import { type StageRunner } from '../../th08/sim/StageRunner';
import { CharacterId, Difficulty, StageNumber } from './types';
import { RetailDialogue } from './RetailDialogue';
import type { ResultStats } from './ui/RetailResultScreen';
export interface StageClearResult {
    stage: StageNumber;
    difficulty: Difficulty;
    character: CharacterId;
    score: number;
    graze: number;
    /** Spell-card capture bonuses banked this stage. */
    spellBonus: number;
    livesLeft: number;
    bombsLeft: number;
    power: number;
    maxPower: number;
    /**
     * Run-lifetime tallies for the retail settlement panel, in the order
     * `DrawFinalStats` emits them. Built here so a headless run reports exactly
     * what the browser one would.
     */
    stats: ResultStats;
    /** True when stage 6 (the final one) was cleared. */
    campaignFinished?: boolean;
    /**
     * True when the run was a single-stage practice drill. A drill has no next
     * stage to advance to, so the results screen must not offer one; retail closes
     * it with `THANKS FOR PLAYING` and hands control back to the stage list.
     */
    practice?: boolean;
    /**
     * True when the report came from running out of lives rather than from clearing
     * the stage. The results screen has to say so: it used to print "STAGE n CLEAR"
     * over a game-over report, which read as if the run had succeeded.
     */
    gameOver?: boolean;
}
export interface TH08GameOptions {
    container?: HTMLElement;
    headless?: boolean;
    showPerformanceMonitor?: boolean;
    stage?: StageNumber;
    /** Route to open on. Wins over `stage`, which cannot name a branch. */
    route?: StageRoute;
    difficulty?: Difficulty;
    character?: CharacterId;
    timeCycleFrames?: number;
    campaign?: boolean;
    onStageClear?: (result: StageClearResult) => void;
    assetManifest?: Record<string, string>;
    /** Title to run. Defaults to TH08; register another profile to play TH06/TH07. */
    profile?: GameProfile;
    recordReplay?: boolean;
    /** Ship art style; see PlayerPrefs.PlayerSkin. Defaults to the upstream art. */
    playerSkin?: 'taisei' | 'painted';
    replayData?: ReplayData;
    leaderboard?: Leaderboard;
}
export declare class TH08Game {
    player: Player;
    bulletSystem: BulletSystem;
    collisionSystem: CollisionSystem;
    input: InputSystem;
    audio: AudioManager;
    monitor: PerformanceMonitor;
    hud: HUD;
    stage: Stage;
    boss: Boss | null;
    enemies: Enemy[];
    /** Collectible drops (P items, points, lives, bombs) using real Taisei art. */
    itemSystem: ItemSystem;
    renderer?: PixiRenderer;
    stageNumber: StageNumber;
    /**
     * Which of the nine retail stage scripts is playing. `stageNumber` is only the
     * HUD label; 4A/4B and 6A/6B share a label but not a script.
     */
    route: StageRoute;
    readonly difficulty: Difficulty;
    readonly character: CharacterId;
    /** Which art the ship wears; switchable live from the options menu. */
    playerSkin: 'taisei' | 'painted';
    timeSystem: TimeSystem;
    readonly replayRecorder: ReplayRecorder;
    readonly leaderboard: Leaderboard;
    /** Per-character clear flags, the stand-in for `score.dat`'s route fields. */
    private readonly progress;
    /** Retail `numRetries`: any continue locks the campaign onto the long route. */
    private numRetries;
    /**
     * Run-lifetime tallies for the retail settlement panel
     * (`ResultScreen::DrawFinalStats`). They are deliberately not per-stage: a
     * continue resets the score but retail keeps the deaths and bombs behind it,
     * and `restartStage` must not clear them either.
     */
    private numDeaths;
    private numBombsUsed;
    /** Simulated frames this run, the numerator retail keeps as `unk3de04`. */
    private runFrames;
    /** Frames whose real interval overran the 60 Hz budget, `lagNumerator`. */
    private slowFrames;
    /** Continues spent, which retail also prints as the tenth score column. */
    get retries(): number;
    /** Route chosen at stage clear, applied when the transition finishes. */
    private pendingRoute;
    private isRunning;
    private animFrameId?;
    private headless;
    private bulletFactory;
    /** Paused via ESC — freezes all gameplay logic while remaining renderable. */
    isPaused: boolean;
    /**
     * How many simulation ticks one animation frame advances (QA only).
     *
     * A 200k-frame campaign is 55 real minutes, which is longer than a browser
     * evidence pass should take; this lets one page sit through every stage at
     * 8x without pausing or teleporting, so the seams are still the seams.
     */
    simTicksPerFrame: number;
    private audioUnlocked;
    private audioUnlockHandler?;
    private readonly onStageClear?;
    private readonly campaign;
    private readonly assetManifest;
    /** Data contract for the running title: stages, charts and dialogue. */
    readonly profile: GameProfile;
    private replayPlayer?;
    private stageTransitionFrames;
    /**
     * A finished run whose results screen is waiting for the closing banner to play
     * out. The results page is DOM chrome that replaces the canvas, so handing it
     * over in the same frame that queued `THANKS FOR PLAYING` meant that banner was
     * never on screen for a single frame.
     */
    private pendingClearReport;
    /** Banked spell-card capture bonuses for the results screen. */
    spellBonus: number;
    /**
     * Which hour of the endless night the run has reached. Retail keeps this in
     * `g_GameManager.globals->clockTime`, which is allocated once per run and survives
     * every stage boundary, so the dial is run state rather than stage state. The
     * scripts toll it on the field with `clockControl` (op 181) and the stage-clear
     * message pushes it another one or two hours (`applyStageClearClock`).
     */
    runClockTime: number;
    /**
     * Every card the running scripts raised and how it ended, in order. Retail
     * keeps the same list per shot type in its `catkData` table; the results
     * screen and the QA probe both read this.
     */
    readonly spellLog: {
        name: string;
        captured: boolean;
        bonus: number;
    }[];
    /** Notified whenever pause toggles so the host can show a pause menu. */
    onPauseChange?: (paused: boolean) => void;
    /** How many real Taisei sprite sheets the renderer ended up with. */
    taiseiSheets: number;
    /** ECL-driven stage runner (null = use legacy hand-written stages). */
    eclRunner: StageRunner | null;
    /**
     * The stage's own projected backdrop, rebuilt from `stageN.std`. Null until the
     * route's data is in, and stays null for a route with no authored backdrop.
     */
    private std;
    /** Which backdrop entry the current route maps to, `null` when it has none. */
    private stdKey;
    /**
     * Live ECL beams as the renderer wants them, rebuilt from the sim each frame.
     * Kept on the game because the render call reads one flat environment object.
     */
    private laserViews;
    /**
     * Holds the shoot button down. Browsers will not let an automation context
     * synthesise a trusted key event, so a headless screenshot pass can otherwise
     * never reach the parts of the game that need firing: drops, spell timeouts,
     * score popups. Off unless `?autofire` is on the URL.
     */
    debugAutoShoot: boolean;
    /**
     * Holds retail's SKIP button. A conversation then walks at one instruction per
     * frame (`Gui.cpp:373-379`), which is the only way to read a whole script in an
     * automation context that cannot synthesise key presses. Off unless the URL
     * carries `?autoskip`.
     */
    debugAutoSkip: boolean;
    /**
     * Drops a card on a cadence, for the same reason as `debugAutoShoot`: an
     * automation context cannot press X, and a card's own backdrop plate and white
     * square are exactly the things that need watching on a real page rather than in
     * a unit test. Off unless `?autobomb` is on the URL.
     */
    debugAutoBomb: boolean;
    /** One synthetic press, held for a couple of frames so the edge is never missed. */
    private autoBombHold;
    /** Frames since the last synthetic press. */
    private autoBombClock;
    /**
     * Holds the focus button down, for the same reason as `debugAutoShoot`: the hitbox
     * marker only exists in focus mode, and an automation context cannot press Shift.
     * Off unless `?slow=1` is on the URL.
     */
    debugSlowMode: boolean;
    /**
     * Lets a scripted run survive being hit, for the same reason as the two above:
     * an automation context cannot dodge, so a deep link into a boss fight would
     * reach the game-over screen long before the card worth photographing. Off
     * unless `?nofail` is on the URL.
     */
    debugNoFail: boolean;
    /**
     * Keeps dropping a full-power item on the ship, one every three seconds. Max power
     * is otherwise a farming result: the sweep lands once, very early, and is over in
     * 180 frames, which is not long enough for an automation context to notice it --
     * and it usually lands before the retail HUD art has even loaded, so the banner has
     * nothing to be drawn with. Inert unless `?maxpower` is on the URL.
     */
    debugMaxPower: boolean;
    /**
     * Force a GPU backend, from `?renderer=webgl|webgpu`. Unset keeps Pixi's detection.
     * The backdrop's fog ships two shader languages, and this is how the WebGL half is
     * reached on a machine where WebGPU works.
     */
    rendererBackend: 'webgl' | 'webgpu' | undefined;
    /**
     * Retail's 雾效 flag (`cfg.opts.disableFog`). Off hands the fog block a disabled
     * ramp, so every sheet draws as authored - the same thing the original does when
     * the player turns it off, not a different kind of fade.
     */
    fogEnabled: boolean;
    /** Frames left until the QA full-power item drops again. */
    private debugMaxPowerCooldown;
    /** Whether ECL loading is in progress. */
    private eclLoading;
    /** Latch so a stage can only end once, either in a clear or a game over. */
    private eclOutcome;
    /** Retail bossLifeBarMaxSize / bossUIOpacity easing for ECL-driven bosses. */
    private eclGaugeRatio;
    private eclGaugeOpacity;
    /** Power at the top of the frame, so a POWER UP can be announced once. */
    private eclPrevPower;
    /**
     * Last card name the scripts declared, so op 122 raises the banner and the
     * card jingle once per card instead of once per frame.
     */
    private eclSpellName;
    /**
     * The floating pickup numbers. `AsciiManager::CreateScorePopup` anchors one over
     * every item as it is taken, so the sim owns the values and this owns the motion.
     */
    private readonly popups;
    /** Live popup count, exposed so the DOM mirror can report it. */
    get activePopupCount(): number;
    /**
     * One entry per live popup: the bank its age selects, the opacity its distance
     * to the ship selects, and its scale flag. A screenshot cannot settle whether
     * the three-bank flicker and the distance fade actually run, because bank A and
     * bank C glyphs look alike at this size and a still frame holds one instant;
     * this reads the two channels straight out of the same `view()` call the
     * renderer consumes.
     */
    get popupDebug(): string[];
    /**
     * The live retail effects, as `<template>:<sprite> a<alpha> x<scale>`.
     *
     * A flash that lasts a fifth of a second cannot be caught in a screenshot, and the
     * effect pool had no readout at all, which made every art report ("the ring is missing",
     * "the sprite stuck") a guess. This is the same list `drawEffects` consumes a few lines
     * below, so a template that shows here and not on screen is a renderer problem, and one
     * that is missing here is a sim problem. Capped, because the whole thing is written into
     * a DOM attribute every frame.
     */
    get effectDebug(): string[];
    /**
     * What the ship's own weapon funnel actually handed the renderer last frame.
     *
     * `pbf` reports where the sim thinks the shots are, and `fx` reports the effect pool,
     * but the ship's shots, 式神 and blades go through a third door - `tickPlayerShots`,
     * which drops any VM whose sprite has no rect in the pack, silently. That is exactly
     * the shape of an "the 式神 is missing" report, so the door now keeps a tally: the
     * shot counts, one line per drawn option body, and `miss N` for the cells that were
     * asked for and not found. A headless run skips the draw call but keeps the tally,
     * because the gate is the half that breaks; in the browser the same numbers mean the
     * quad went out.
     */
    get playerWeaponDebug(): string[];
    /**
     * The banner lines the HUD is being asked to draw right now, trimmed of the
     * leading spaces `%7d` pads with. QA reads this to tell "the banner never fired"
     * apart from "the banner fired and the renderer dropped it".
     */
    get bannerDebug(): string[];
    /**
     * The two text slots retail keeps inside `Gui`: `formatted1` slides a notice
     * across the panel ("Full Power Mode!", "Spell Bonus Failed", ...) and
     * `formatted2` centres the card reward over the playfield. The sim decides when
     * they fire, this decides how long they live.
     */
    private readonly banners;
    /** The capture whose reward line is still waiting out its animation. */
    private pendingSpellBonus;
    private pendingSpellBonusFrames;
    /** Deferred results handoff after GAME OVER, cleared on any restart. */
    private gameOverTimer?;
    /** Animated sprite slots filled by the in-house idle loops. */
    proceduralSheets: number;
    /** Face pages the spell-card cut-in can ask for; 0 until the load settles. */
    facePages: number;
    /** Stage-side conversation box with real portraits; the script clock waits for it. */
    dialogue?: DialogueSystem;
    private introPlayed;
    /**
     * A stage theme is owed as soon as the next route's script binds.
     *
     * `start()` plays slot 0 once for the run, and `RetailDialogue.bindStage()` drops
     * the song key because retail re-runs `LoadMusic` per stage
     * (`GameManager.cpp:1087-1092`). Without this the first stage's *boss* theme kept
     * running into the second stage, which is exactly what retail cannot do. The
     * request waits for the bind so `stdKey` already names the new route's std.
     */
    private pendingStageSong;
    /** Frame-advance explosion animations, drained by renderFrame(). */
    private explosions;
    /**
     * One frame's worth of `tickPlayerShots` submissions, read back by `playerWeaponDebug`.
     * Reset at the head of the pass rather than allocated per frame, because this runs 60
     * times a second next to the draw loop it describes.
     */
    private weaponAudit;
    /** Taisei point-of-fade sparkles, drained by renderFrame(). */
    private pointOfFade;
    /** Guards the once-only item sweep that fires when a boss is defeated. */
    private bossSweepDone;
    /**
     * The stage conversation, run by the decompiled message VM over real ANM
     * portraits. Null until `init` has the ANM manifest in hand.
     */
    private retail;
    constructor(options?: TH08GameOptions);
    startReplayRecording(): void;
    stopReplayRecording(): ReplayData;
    loadReplay(data: ReplayData): void;
    /** Nearest live target for player homing shots, refreshed every frame. */
    private aimPoint;
    /**
     * Where a pointer device wants the ship, in world (script) coordinates, or
     * null when neither touch drag nor the mouse option is steering.
     */
    private pointerWorldTarget;
    /** Metadata row for the stage currently loaded. */
    /** Retail shot index for this character: teams 0-3, solos 4-11. */
    private get shotType();
    /** Everything the stage router reads: the team, and how the run stands. */
    private routeContext;
    /**
     * Fold this clear into the per-character record before routing onward, so a
     * player who finishes 6A can take the short route on their next run.
     */
    private advanceCampaign;
    private get stageInfo();
    private createStage;
    /**
     * The banner a stage end paints. `THANKS FOR PLAYING` is practice-only: retail
     * closes a single-stage drill with it, while a campaign run either rolls straight
     * into the next stage or finishes on the all-clear screen.
     */
    get clearBanner(): string;
    private handleStageClear;
    /** What the transition timer releases: the next stage, or the parked results. */
    private finishStageTransition;
    private attachBoss;
    /** Snapshot everything the results screen needs. */
    buildReport(campaignFinished?: boolean, gameOver?: boolean): StageClearResult;
    /** Serialized input recording for the results screen (null before any capture). */
    getReplayJson(): string | null;
    /**
     * Load the stored best for this character and difficulty into the HiScore row.
     * `Gui.cpp:1436-1442` prints it as nine digits plus the continues that record
     * spent, which is also the row that rises while a live run beats it.
     */
    private refreshHiScore;
    /** Attempt to load ECL-driven stage data asynchronously. */
    private tryLoadEcl;
    /**
     * Step until the translated script for the current route owns the field.
     *
     * `loadEclStage` pulls the route module with a dynamic `import`, so the runner
     * appears a few event-loop turns after the constructor returns. A synchronous
     * caller would only ever see the empty pre-script frames; this gives tests and
     * any embedder a way to wait for the real thing.
     */
    waitForScript(polls?: number): Promise<boolean>;
    /**
     * Build the route's projected backdrop and fetch the sprite pages it samples.
     *
     * Loading is fire-and-forget on purpose: the first frames are the title card, and
     * a page that has not arrived yet simply leaves its quads undrawn, which is what
     * the renderer already does for every other missing texture.
     */
    private setupBackdrop;
    /**
     * Fetch the sprite pages the current backdrop samples, skipping those already in.
     *
     * The stage is built in the constructor while the renderer only arrives in `init`,
     * so both call this. A page that has not loaded yet leaves its quads undrawn, which
     * is how the renderer already treats any missing texture.
     */
    private ensureBackdropPages;
    /** The backdrop for this frame, or nothing when the route has no authored one. */
    private backdropView;
    /**
     * `g_Background.unk6394` for the effect movers, or null off the backdrop.
     *
     * Read lazily because the runner is built asynchronously while the backdrop is
     * built in the constructor, and because a route with no authored `.std` has no
     * camera to cull against.
     */
    private effectCamera;
    /** Backdrop state for the debug mirror: how far the camera got, and what is missing. */
    get backdropDebug(): {
        frame: number;
        quads: number;
        offpage: number;
        clear: string;
        /** `D3DRS_FOGCOLOR/ramp`, and how many sheets have a corner inside that ramp. */
        fog: string;
        fogged: number;
    };
    /**
     * Whether a conversation is on screen, from either of the two systems that can
     * put one there: the retail `.dat` message interpreter (`RetailDialogue`, which
     * is `Gui::IsDialogPresent` itself) and the profile-driven boss and spell talks.
     *
     * Both hold the world the same way, because both are the same promise to the
     * player: for these frames the ship is watching someone talk.
     */
    get dialogPresent(): boolean;
    /** Where the stage conversation has got to, for the debug mirror in `main.ts`. */
    get dialogueDebug(): ReturnType<RetailDialogue['debugState']>;
    /** Tick the ECL runner and sync its state to the rendering layer. */
    private tickEclRunner;
    /**
     * Drive the spell-card banner from the scripts instead of from a hand-written
     * phase list: op 122 puts the real card name, owner and bonus on the game
     * state and op 123 takes them away, which is exactly retail's lifetime for the
     * plate. The cut-in art is the page 0 of the ANM retail preloads for this
     * stage's boss (`Spellcard::Init`), so name and portrait always agree.
     */
    private syncEclSpellCard;
    /** Convert the sim's one-shot frame events into sound, sparks and text. */
    private tickEclFeedback;
    /**
     * Owe a spell-card reward line. A second capture while one is still queued pays
     * the first immediately, which is what retail's bit 8 shortcut does when a card
     * begins before the old reward animation ends.
     */
    private queueSpellBonus;
    /** Show the owed line now. */
    private flushSpellBonus;
    /** Advance the reward countdown and both banner lifetimes. */
    private tickHudBanners;
    /**
     * Draw the retail effect pool, one ANM atlas cell per live slot.
     *
     * `EffectManager::OnDraw` blits whatever sprite the slot's script currently selects, at
     * the pool's own position, with the script's scale, rotation and vertex colour multiplied
     * by the colour ECL passed in (`EffectManager.cpp:1158-1210`). The cells are the bullet
     * atlas's cells because retail's effect scripts live in `etama.anm` too.
     */
    private tickRetailEffects;
    /**
     * Draw the ship's own weapon out of the pack `g_PlayerAnmFilenames` names.
     *
     * `Player::FUN_004512f0` (`:3220`) and `FUN_00451400` (`:3260`) are two passes over
     * the same 128 slots: a live shot goes through `Draw2D` at `z = 0.4` and a spent one
     * through `DrawPlayerBullet` at `z = 0.2`, which is why 霊夢's charm keeps being
     * drawn after it lands and stops scoring at the same moment. The options come last
     * because `PlayerRoute2OptionRender` (`:2160`) puts them at `z = 0.49`, in front of
     * everything the ship fires.
     *
     * The rotation rule is retail's own: `:3232` only overrides the script's angle when
     * the VM carries a non-zero `type` - the port's `renderType` - so a shot whose
     * script never asks to be billboarded keeps the pose its script authored.
     */
    private tickPlayerShots;
    /** Ease the ECL boss gauge the way retail's GUI does, frame by frame. */
    private updateEclGauge;
    /** Gauge view for the renderer, or null while nothing owns a life bar. */
    private eclGaugeState;
    /** Retail stage end inside the sim: sweep the field, then advance or report. */
    private handleEclStageClear;
    /**
     * 妖怪名乗り pays one 灵击 back at the end of every stage. Retail arms the payout
     * inside the stage-clear message script -- message op 9, `Gui.cpp:858-868` -- so it
     * fires once per cleared stage, before the next one loads. Below 6A, a Youmu/Yuyuko
     * run carrying fewer than three bombs gains one and hears the card-capture chime.
     * The two solo ids the same guard names are not selectable in this build, so the
     * team test collapses to the one id. Callers place it before the HUD sync so the
     * new count is what gets painted.
     */
    private applyStageClearBombPayout;
    /**
     * The night clock moves at the end of every stage. Retail does it in the same place
     * as the bomb payout -- message op 9, `Gui.cpp:806-807` -- by calling
     * `GameManager::AddToClockTime(GetClockTimeIncrement())`, and the increment is a
     * straight read of the Last Spell test: **one hour** if the run banked the time orbs
     * the boss's Last Spell cost, **two** if it did not (`GameManager.cpp:1471-1560`).
     * Stages 6A and 6B return zero; their hours come from `clockControl` on the field.
     *
     * The point of the whole thing is that slop costs you night. `GameManager.cpp:346-352`
     * reads the dial at the hand-off and, once it says 12, stops the run instead of
     * loading the next stage -- dawn has come, and 永夜抄's premise is that you were
     * supposed to prevent it. That branch is not reachable on this data yet: five stages
     * at two hours is ten, and the 6B chimes only land after the last hand-off. It is
     * recorded in `docs/REQUIREMENTS.md` rather than half-wired to a banner no retail
     * script ever draws.
     */
    private applyStageClearClock;
    /** Out of lives: show GAME OVER over the frozen field, then hand off. */
    private handleEclGameOver;
    /** Sync ECL enemies/bullets into the legacy entity arrays for rendering. */
    private syncEclEnemies;
    private syncEclItems;
    /** Play back a recorded run: input snapshots drive the game, AI stays live. */
    loadReplayJson(json: string): void;
    /** Rebuild the current stage from scratch, keeping score and lives. */
    restartStage(): void;
    private beginNextStage;
    /**
     * Roll and spawn the drop set for a killed enemy, returning how many items
     * hit the playfield. The tier comes from the script when it declares one and
     * falls back to an HP heuristic so existing waves keep working.
     */
    private spawnEnemyDrops;
    /** Apply a batch of pickups to the player and play the TH08 grab feedback. */
    private applyItems;
    /**
     * Scatter the power the player just lost back onto the playfield, the way
     * TH08 drops it as collectable P items instead of silently deleting it.
     */
    private spawnPowerLoss;
    private bossAlpha;
    private setupListeners;
    init(container: HTMLElement): Promise<void>;
    /**
     * Everything `RetailDialogue` reads back out of the game. Each value is a
     * getter because a stage hand-off changes the route, the runner, and the std
     * while the box itself stays alive for the whole run.
     */
    private retailHooks;
    /**
     * Swap the ship art at once. The renderer keeps both the upstream sheets and
     * our own idle loops registered, so this is a lookup change, not a reload.
     */
    setPlayerSkin(skin: 'taisei' | 'painted'): void;
    /**
     * Start retail song slot `track` of the stage now playing.
     *
     * A stage's four songs are bound to slots 0 to 2 out of its own std header when
     * it finishes loading (`GameManager.cpp:1087-1092`, offsets `+0x290`/`+0x310`/
     * `+0x390`), and `:417` plays slot 0 as the loading chain hands over - so the
     * stage theme is whatever that std names, not a picked playlist. The dialogue
     * layer owns the same call for op 7; `requestStageSong` makes a repeat a no-op.
     *
     * Passing nothing to `playBGM` is the synthesised stand-in, which keeps every
     * environment audible. A browser that blocks autoplay unlocks on the first
     * gesture instead (see `setupAudioUnlock`).
     */
    private playStageSong;
    start(): void;
    stop(): void;
    /** Freeze gameplay (ESC pause menu state). */
    pause(): void;
    resume(): void;
    /** Toggle pause (ESC edge). */
    togglePause(): void;
    /** Browsers block audio until the first user gesture — unlock then. */
    private setupAudioUnlock;
    private removeAudioUnlockListeners;
    /**
     * Full teardown: stop the loop, detach input, release audio + renderer.
     * Call from framework hosts (e.g. React `useEffect` cleanup).
     */
    /**
     * TH08 Continue: reset score to numRetries, lives/bombs/power to defaults,
     * but keep the player at the current stage. This is the arcade-style
     * "insert coin" mechanic.
     */
    continueGame(): void;
    destroy(): void;
    /**
     * Drain the Stage context queues (票据 08 StageContext API):
     * spawnEntity → enemies, showDialogue → hud.showMessage, startBossPhase → boss phase.
     */
    private consumeStageQueues;
    /** Closest living target for homing shot styles (Reimu team). */
    findAimTarget(): {
        position: {
            x: number;
            y: number;
        };
    } | null;
    stepFrame(dtFrames?: number): void;
    /**
     * Colour of the full-screen bomb flash.
     *
     * `BombSpec.accent` is per card, so the flash says which half of the pair
     * spent the bomb. `StageRunner` has already created `activeBomb` by the time
     * the snapshot reports the trigger, so the live spec is the answer; the
     * re-resolve is only for the legacy (non-ECL) bomb path, where no spec object
     * exists yet. `selectBomb` takes the same three arguments as
     * `StageRunner.ts:342`, so both routes agree.
     */
    private bombAccent;
    /**
     * The QA auto-bomb's one-frame press. Fires every four seconds, and never on top
     * of a card that is still running, so a walk through `?autobomb` shows the cards
     * in order instead of stacking them.
     */
    private autoBombPress;
    /**
     * Taisei's point-of-fade: bullets that get erased by a bomb or a death burst
     * sparkle out in place instead of blinking off. Capped so a lunatic screen-full
     * of danmaku cannot flood the FX pool.
     */
    private spawnPointOfFade;
    /** Queue an 8-frame explosion at a playfield position. */
    private spawnExplosion;
    /**
     * The retail death pass for a life: `Player::Die` (`Player.cpp:528-536`) pays one
     * spawn of effect template 6 sixteen times wide at the ship, on `etama.anm`. Answer
     * false when the stage has no pool — the placeholder sheet and the Taisei burst are
     * then still reachable, which is what the engine demo runs on.
     */
    private retailDeathEffect;
    /**
     * One-shot Taisei particle burst: a bright flash, an expanding smoke puff and
     * a couple of drifting petals. Used for enemy and boss deaths so the moment
     * reads as the upstream games' "fwoom" instead of a generated ring.
     */
    private spawnDeathBurst;
    renderFrame(): void;
}
//# sourceMappingURL=TH08Game.d.ts.map