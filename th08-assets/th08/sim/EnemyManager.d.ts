/**
 * Enemy slot pool + timeline driver.
 *
 * Mirrors th08web-ref/src/EnemyManager.cpp: 480 enemy slots, spawn by sub ID,
 * per-frame tick that runs each active slot generator one step.
 */
import { EnemySlot, type SlotFx, type SpellResult } from './EnemySlot';
import type { SeTick } from './BulletTransform';
import { type GameState } from './GameState';
import type { BulletPool } from './BulletPool';
import type { LaserPool } from './LaserPool';
import type { EffectPool } from './EffectPool';
import { type ItemPool } from './ItemPool';
import type { AnmPack } from '../../engine/anm/AnmPack';
export type SubFactory = (id: number) => ((e: EnemySlot) => Generator<number, void, void>) | null;
export declare const MAX_ENEMIES = 480;
/**
 * One `AsciiManager::CreateTimePopup` request raised during the frame. The retail
 * call passes a packed ARGB *signed* int, so -1 is white and -128 is `0xFFFFFF80`.
 */
export interface TimePopup {
    x: number;
    y: number;
    value: number;
    color: number;
    /** `AsciiManager::SetScale` in force when the popup was created. */
    scale: number;
}
/**
 * The three things the familiar-chain payoff needs from the host that a slot pool
 * cannot reach on its own.
 */
export interface ChainPayoffSink {
    /** `g_AsciiManager.CreateTimePopup`. */
    timePopup(popup: TimePopup): void;
    /** `g_GameManager.AddToYoukaiGauge(amount, 0)` (`EnemyManager.cpp:366`). */
    addToYoukaiGauge(amount: number): void;
    /** `g_GameManager.GetYoukaiGauge()`, which the payoff takes a twelfth of. */
    youkaiGaugeValue(): number;
    /** `g_Spellcard.IsActive()` (`EnemyManager.cpp:323`). */
    spellCardActive(): boolean;
}
/**
 * Spawn parameters a timeline instruction carries beyond position and HP.
 *
 * `EnemyTimeline.cpp:55-61`: the item drop type is stored as `(i8)`, and the score
 * only overrides the template's when it is not negative.
 */
export interface SpawnArgs {
    /** `enemy+0x3304`. */
    dropType?: number;
    /** `enemy+0x2E08`. */
    score?: number;
    /** `enemy+0x3308`, queued `ITEM_POINT` grants (ops 11/12). */
    pointDrops?: number;
    /** `enemy+0x330C`, queued `ITEM_POWER_SMALL` grants (ops 11/12). */
    powerDrops?: number;
    /**
     * The `flags` argument of `SpawnEnemy1`, i.e. `0x3324` bit 18. Ops 1, 4, 5 and 12
     * all set it, and it is what makes the second copy of a wave fly left.
     */
    mirror?: boolean;
}
export declare class EnemyManager {
    readonly slots: EnemySlot[];
    private gs;
    private subFactory;
    bulletPool: BulletPool | null;
    /** Lasers are spawned by the same scripts, so slots need the same handle. */
    laserPool: LaserPool | null;
    itemPool: ItemPool | null;
    /** Retail's effect pool, handed to every slot: ECL spawns through it by template id. */
    effectPool: EffectPool | null;
    playerRef: {
        x: number;
        y: number;
    } | null;
    /** True while Sakuya's clock is stopped; the chain payout thirds its popups. */
    clockStopped: boolean;
    /**
     * `EnemyManager::timer` as `FUN_0042c3b0` (`EnemyManager.cpp:916-931`) uses it: the
     * manager's own frame counter, which is what the stage's rank creep is measured on.
     */
    rankTimer: number;
    /** Where the host sends `CreateTimePopup` and `AddToYoukaiGauge`. */
    chainSink: ChainPayoffSink | null;
    /** `g_EnemyDropCounter` (`EnemyManager.cpp:824`/`:836`), a u16. */
    private dropCounter;
    /** `g_EnemyDropScheduleIndex` (`EnemyManager.cpp:832-834`). */
    private dropScheduleIndex;
    /** ANM bytecode store handed to every slot that asks for a script. */
    anmPack: AnmPack | null;
    /** The stage's `stgNNenm.anm`, plus its manifest name for the atlas lookup. */
    anmPackAlt: AnmPack | null;
    anmStageName: string;
    /** Collision radius per bullet type, handed to every slot by the host. */
    bulletRadiusFor: ((type: number) => number) | null;
    /** Drawn half-size per bullet, which sets the off-field cull margin. */
    bulletSizeFor: ((type: number, color: number) => number) | null;
    /** Visual requests made by any slot during the current frame. */
    readonly frameFx: SlotFx[];
    /** ECL sound requests from the current frame, each with the x that pans it. */
    readonly frameSfx: SeTick[];
    /** Spell cards that ended during the current frame, in slot order. */
    readonly frameSpellResults: SpellResult[];
    /** Counts op 179 so the host can start the stage background sequence. */
    stageBgRequests: number;
    constructor(gs: GameState, subFactory: SubFactory);
    /** Spawn an enemy running ECL sub `subId` at position (x, y) with given HP. */
    spawn(subId: number, x: number, y: number, hp?: number): EnemySlot | null;
    /**
     * `EnemyManager::SpawnEnemy1` (`EnemyTimeline.cpp:30-69`) with the fields a
     * timeline instruction carries: `0x3304` gets the drop type through the same
     * `(i8)` cast, `0x2E08` only takes the score when it is not negative, and a
     * negative HP leaves the template value alone (`:44`, `:55-63`).
     */
    spawnFromTimeline(subId: number, x: number, y: number, hp: number, args?: SpawnArgs): EnemySlot | null;
    /**
     * `Enemy::FUN_0042bea0` (`EnemyManager.cpp:809-868`): what actually falls out of a
     * dead enemy. A non-negative `0x3304` names exactly one item; -1 walks the global
     * 32-entry drop schedule and pays one entry every third such death; -2 (what ops
     * 90..92 arm on a familiar) drops nothing. The two queued counts then scatter their
     * own grants over a 128x128 box around the body.
     *
     * The stage data asks for a power item out of 541 enemies, a point item out of 663,
     * a big power out of 85 and a bomb out of 12. Handing a point *and* a power item to
     * the player from every kill is what made a fresh run hit full power in wave one.
     */
    dropOnDeath(slot: EnemySlot): void;
    /**
     * Launch a linked familiar (ECL ops 90..92). The child is an ordinary slot with
     * its own ECL script, plus the three things retail marks on it: a parent link,
     * no player collision, and — for op 92 only — a position that composites onto
     * the parent every frame.
     */
    spawnLinkedChild(spec: {
        subId: number;
        x: number;
        y: number;
        hp: number;
        dropType: number;
        score: number;
        parentIndex: number;
        followParent: boolean;
    }): EnemySlot | null;
    /** Slot by index, or null when the index is out of range. */
    slotAt(index: number): EnemySlot | null;
    /**
     * `EnemyManager::SpawnEnemy2` (`EnemyTimeline.cpp:91-127`): the new slot is
     * filled from the template, `CallEclSub` installs the script, and only then is
     * the summoner's register block copied in. The first `RunEcl` therefore already
     * sees the inherited `f0`/`f1`, which is what lets a launcher steer its
     * familiars; running the script before the copy would freeze them in place.
     */
    private spawnInternal;
    /**
     * Advance every active enemy by one frame.
     *
     * `frameStop` is retail's `Player+0xFDC`, which is raised for the whole of any
     * player card. It does not stop the enemy loop: it stops the scripts of the slots
     * that asked to be stopped (`EMUF1_PAUSE_TIMER`, op 173 —
     * `EnemyManagerUpdate.cpp:466-472`), which is how a boss holds its pattern intact
     * across your bomb while the rest of the field keeps moving.
     *
     * `clockFrozen` is Sakuya's stopped clock proper, which holds every script.
     */
    tick(frameStop?: boolean, clockFrozen?: boolean): void;
    /**
     * The live enemy holding `g_EclEnemyTableF54CC0[marker]`, i.e. the slot that claimed
     * this marker with op 127 (`EclRunHigh.inl:636-647`) and has not died or released it
     * (`EnemyManager.cpp:769-780`). Retail reads one entry of that table per op 10
     * (`EnemyTimeline.cpp:259-261`), so "who is the boss this wait is about" is answered
     * per marker, never by scanning for any boss at all. The marker lives on the slot, so
     * the slot scan is the table; a stored pointer per marker would be a second copy of
     * the same fact, and the one that forgets a bounds cull.
     */
    bossAtMarker(marker: number): EnemySlot | null;
    /**
     * Rebuild `enemy+0x3380`, the live familiar count. Retail decrements it as each
     * child retires (`EnemyManagerUpdate.cpp:793-798`); deriving it from the parent
     * links every frame gives the same number without a second bookkeeping path that
     * can drift when a child goes away through bounds, a card wipe or its own script
     * instead of through damage.
     */
    private recountLinkedChildren;
    /**
     * `EnemyOverlay::FUN_0042adb0` (`EnemyManager.cpp:262-382`).
     *
     * Two halves share one function, and which runs depends on who is talking:
     *
     * - A summoner whose card just ended (`mode 1`) pays out its live chain. Every
     *   familiar detaches, loses its own drop, and throws `itemCount` time orbs in a
     *   disc, while the parent itself throws twice its cumulative spawn count. The
     *   card driver's field wipe then kills the detached children *after* they have
     *   paid, which is why the payoff sets the suppress-death bit and `-2` first.
     * - A familiar dying on its own is not a chain head — `CountParentChain` requires
     *   a null `0x2DA4` — so only the tail branch runs: one orb, a `1` popup, and a
     *   twelfth of the meter drained.
     *
     * `mode 0` is the timeout and stage-clear path: the chain is detached silently.
     */
    familiarChainPayoff(slot: EnemySlot, mode: number): void;
    /** The live meter value, which the host owns. */
    private gaugeValue;
    private popup;
    /**
     * `g_EnemyManager.FUN_0042f1f0()` (`EnemyManager.cpp:1561-1570`): true while any of
     * the eight draw-list heads is occupied. The sim keeps no draw list — the host
     * buckets enemies at render time — so the live slot count stands in for it.
     */
    private bucketsHoldEnemies;
    /**
     * Take the slots that just died, queueing a death burst for each. Called
     * after damage has landed, so the host can turn these into particles,
     * explosions and score events exactly once.
     */
    collectDeaths(): EnemySlot[];
    /**
     * The live slot that owns the boss life bar. Lowest slot index wins so the
     * gauge stays stable when a boss hands off to a second script.
     */
    gaugeOwner(): EnemySlot | null;
    hasGaugeOwner(): boolean;
    /**
     * The ship gave up the live card: bomb it or die on it, the bonus is gone
     * (`Player.cpp:1288`, `:1334` -> `Spellcard::FUN_0044cba0` / `FUN_0044d150`).
     *
     * One slot at a time can hold an unsettled card, because `startSpell` is the only
     * writer of the game-wide name, but the pass visits every slot: a card op 123
     * already settled has nothing left to take away, and one that a driver left
     * half-resolved must not keep a bonus alive either.
     */
    voidLiveCardBonus(): void;
    /** True while an active slot still holds a boss marker (op 127). */
    hasBossMarker(): boolean;
    /**
     * Both card drivers zero every plain enemy on the field before the new phase
     * script starts (`EnemyManager.cpp:517-533` and `:701-716`), so the plate
     * always goes up over a clear field. The boss itself — the slot that owns a
     * life bar — is left alone.
     */
    wipeNonBossEnemies(exceptSlot: number): void;
    /** Hand ECL sub `subId` to an existing slot (op 88 remote calls). */
    runSubOnSlot(slotIndex: number, subId: number): EnemySlot | null;
    /** Build a coroutine for ECL sub `subId` bound to `slot` (op 135 lanes). */
    makeSub(subId: number, slot: EnemySlot): Generator<number, void, void> | null;
    /** Remote int register read (op 86). */
    readIntSlot(slotIndex: number, field: number): number;
    /** Remote float register read (op 87). */
    readFloatSlot(slotIndex: number, field: number): number;
    /** Called by op 179; the host reads `stageBgRequests` to advance the stage art. */
    notifyStageBg(): void;
    /** Count of currently active enemies. */
    get activeCount(): number;
    /** Get all active slots (for rendering / collision). */
    getActive(): EnemySlot[];
}
//# sourceMappingURL=EnemyManager.d.ts.map