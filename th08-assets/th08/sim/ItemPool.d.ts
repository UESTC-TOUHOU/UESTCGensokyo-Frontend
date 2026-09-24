/**
 * Item (collectible) pool and collection logic.
 *
 * Ported from th08web-ref/src/ItemManager.cpp:
 * - Power items: small (+1, `CollectPowerSmall`), big (+8, `CollectPowerBig`),
 *   full (128 + bullet clear, `ITEM_POWER_FULL`)
 * - Point items: `CollectPoint` / `CollectPointSmall` pay `pointItemValue` above the
 *   collection line and half of it minus `base/1000` per pixel below
 * - Time orbs: `CollectTimeOrb`, whose value climbs with the point items collected
 * - Sweep: the whole field flies to the ship once it climbs above the collection
 *   line, and Full Power Mode does the same anywhere
 * - Fall physics: vy += 0.03/frame, cap at 3.0
 *
 * Every number here is the raw one retail hands `AddScore`, which divides by ten
 * before it reaches the read-out; `popup` is what `CreateScorePopup` prints.
 */
import { type GameState } from './GameState';
export type ItemKind = 'powerSmall' | 'powerBig' | 'powerFull' | 'point' | 'pointSmall' | 'life' | 'bomb' | 'extend' | 'timeOrb';
export interface Item {
    active: boolean;
    kind: ItemKind;
    x: number;
    y: number;
    vx: number;
    vy: number;
    magnetized: boolean;
    /**
     * The retail `ItemState` values this pool can still tell apart once
     * `magnetized` has taken `ITEM_STATE_AUTOCOLLECT`.
     *
     *  - `none` is `ITEM_STATE_DEFAULT`: a free item, box-collectable, culled and
     *    rank-taxed at the bottom.
     *  - `scatter` is `ITEM_STATE_UNK2`: the death pile, gliding from where the ship
     *    died to a random point in the upper field over 60 frames.
     *  - `hover` is `ITEM_STATE_UNK3`, which every 时符 is forced into. It rises, and
     *    `ItemManager.cpp:315` refuses to let the item box take it while it lasts.
     *  - `hoverDouble` is `ITEM_STATE_UNK5`, the graze drop: same rise but stepped
     *    twice a frame, and collectable the moment it turns over.
     */
    rise: ItemRise;
    /** `item->timer`, which only the `scatter` glide and the sprite animation read. */
    timer: number;
    /** `targetPosition` for a scatter, `startPositionOrVelocity` for its far end. */
    tx: number;
    ty: number;
    sx: number;
    sy: number;
}
/** The four `ItemState` values this pool models; see `Item.rise`. */
export type ItemRise = 'none' | 'scatter' | 'hover' | 'hoverDouble';
/**
 * `SpawnItem`'s third argument, narrowed to the two states any caller other than
 * `Player::Die` actually asks for. A 时符 ignores it either way -- `SpawnItem:61-69`
 * overwrites the state of every `ITEM_TIME` with UNK3 and every `ITEM_TIME2` with
 * UNK5 -- so `orbDouble` is the only way to reach the second one.
 */
export type ItemSpawnVariant = 'normal' | 'scatter' | 'orbDouble';
/**
 * `g_PowerUpThresholds` (`ItemManager.cpp:21`). The trailing 999 is the sentinel that
 * stops the level walk once power is maxed, so there are six levels, 0..5.
 */
export declare const POWER_THRESHOLDS: readonly [8, 24, 48, 80, 128, 999];
/** Shot level for a power value, i.e. the `while (power >= thresholds[l]) l++` walk. */
export declare const powerLevel: (power: number) => number;
export declare const MAX_ITEMS = 512;
/**
 * `g_EnemyDropSchedule` (`EnemyManager.cpp:33-38`): the rotation an enemy with
 * `dropType == -1` walks, taking one entry every third death.
 */
export declare const ENEMY_DROP_SCHEDULE: readonly number[];
/**
 * `ItemType` (`ItemManager.hpp:8-21`) translated to the kinds this pool draws.
 * The stage data only ever asks for 0, 1, 2, 3, 7 and 8; 6 (`ITEM_POINT_STAR`) and
 * 9 (`ITEM_UNK9`) are undocumented in the decompile and folded into their nearest
 * known sibling.
 */
export declare const ITEM_KIND_BY_TYPE: Record<number, ItemKind>;
export declare class ItemPool {
    readonly items: Item[];
    private readonly gs;
    /**
     * `g_Player.playerState == PLAYER_STATE_DYING`, which `SpawnItem:122` and
     * `:133` read on every 时符. The pool cannot reach the ship, so the runner pushes
     * it in once a frame -- retail reads the same global from inside the spawner.
     */
    shipDying: boolean;
    constructor(gs: GameState);
    spawn(kind: ItemKind, x: number, y: number, variant?: ItemSpawnVariant): Item | null;
    /**
     * Advance all items one frame and return what the player picked up.
     *
     * The sweep rule is `ItemManager.cpp:272-289`. A grabbed flag (`state ==
     * ITEM_STATE_AUTOCOLLECT`, set by `AutoCollectAllItems` on a bomb or a dialogue
     * page and by the collection line) pulls everything homing; otherwise items only
     * come in when the ship climbs above `pointItemValueLine`, which is the
     * "fly to the top and bank the whole field" mechanic. Full Power Mode is the
     * 永夜抄 flag that holds the line open everywhere.
     *
     * The retail condition also ORs in the focus flag and shot types 1 and 6, but they
     * sit behind `GetPower() >= 0.0`, which is true for every legal power value, so the
     * whole clause collapses to the position test. That is why this file has no focus
     * argument: the shortcut is provable, not assumed.
     */
    tick(playerX: number, playerY: number, itemBoxHalfExtent: number, pointItemValueLine: number, fullPowerMode: boolean, 
    /** `GaugeIsExtremelyHuman` — doubles every point item's payout. */
    extremeHuman?: boolean, 
    /**
     * `g_Player.playerState != DYING && != SPAWNING` (`:278`). While the ship is out
     * of the fight, homing stops and items drift upward instead.
     */
    shipOnField?: boolean, 
    /** `plyNNa.sht + 0x14`: how fast a grabbed item flies, 10 or 12. */
    grabSpeed?: number, 
    /**
     * `plyNNa.sht + 0x34`: the time scale retail puts on free-falling items, both
     * on the position step and on the gravity term (`ItemManager.cpp:207-209`,
     * `:301`, `:313-316`). It is only half of the step: `:210` multiplies it by
     * `g_EclGameTimeScale` before anything reads it, so the two times sit in
     * separate arguments rather than being folded into one number.
     */
    timeScale?: number, 
    /**
     * `g_EclGameTimeScale` (`EclGlobals.cpp:117`). It reaches items in three
     * distinct places, and they do not share a multiplier: it scales the team's
     * `+0x34` figure to make the fall/step speed (`:210`), it scales the hover's
     * own `0.05` gravity on its own (`:234`, `:251`), and a grabbed item is
     * integrated by this alone with no `+0x34` in sight (`:284`).
     */
    gameTimeScale?: number, 
    /**
     * `g_Player.timerE2AC4 >= 0` (`Player.cpp:3289-3352`, read back at
     * `ItemManager.cpp:236`). The window stays open for twenty frames and then shuts,
     * and the only thing that re-opens it is the fire button. A hovering 时符 that
     * finds it shut comes home without waiting to fall over, which is retail's
     * "stop firing and the orbs come to you".
     */
    shotWindowOpen?: boolean): CollectResult[];
    /**
     * Process one item collection, returning what it pays.
     *
     * The point value keys off the *item's* height, not the ship's: `CollectPoint`
     * reads `item->currentPosition.y` against `pointItemValueLine`, so an item that
     * spawned above the line still pays full even if the ship dives for it.
     */
    private collect;
    /**
     * The 点 branch: value first, then the rank the collect is worth.
     *
     * Split from the value maths below because retail keeps them in different places --
     * `CollectPoint` (`ItemManager.cpp:460-517`) pays rank at `:493-500` while
     * `CollectPointSmall` (`:518-549`) never does.
     */
    private point;
    /** Shared tail: bank a rank payment for one collect branch. */
    private subrank;
    /** `Item::CollectPoint` / `Item::CollectPointSmall` value maths. */
    private pointValue;
    /** Shared tail: turn a raw popup into a result, and roll the extend threshold. */
    private result;
    /** Force-collect all active items (stage clear, etc.). */
    collectAll(line: number, extremeHuman?: boolean): CollectResult[];
    /**
     * `ItemManager::ConvertAllPowerItemsToTimeOrbs` (`:659-679`).
     *
     * The name is a lie that has survived in the decompile: the loop assigns
     * `ITEM_POINT_SMALL`, not `ITEM_TIME`, and re-points the sprite at script
     * `ITEM_POINT_SMALL + 61`. So a maxed ship turns every P item still in the air
     * into a small point item that drifts up at 0.5 px/frame, and each conversion
     * pops effect 0. `skip` is the item the player just collected, which retail
     * leaves alone because it is deleted right after.
     *
     * Returns how many were converted, which is how many sparkles the host draws.
     */
    convertPowerItemsToPointSmall(skip?: Item, onConvert?: (x: number, y: number) => void): number;
    /**
     * The drop set a death leaves behind, from `Player.cpp:1341-1368`.
     *
     * A death with lives left pays one big P and five small P, plus a bomb item for
     * the sakuya-remilia row -- `shotType` 2, and both of Sakuya's solo rows 8 and 9.
     * Out of lives, retail drops five full-power items instead and takes the whole
     * power bar rather than a 16-point slice.
     *
     * Every one of those spawns asks for `ITEM_STATE_UNK2`, the scatter state: the
     * pile rides out from the wreck to a random point in the upper field over one
     * second and only then hangs. That is the whole reason a death costs more than
     * the power bar -- retail makes you go and get it back piece by piece, so the
     * row this function used to lay out at the ship itself was strictly easier than
     * the original, and read nothing like it.
     */
    spawnDeathDrops(x: number, y: number, shotType: number, hasBombs: boolean, outOfLives: boolean): void;
    /**
     * `ItemManager::AutoCollectAllItems` (`:647-656`): every item on the field starts
     * homing. A bomb and each page of a dialogue both call it, which is why dropping a
     * card in the middle of a cutscene banks the whole screen.
     */
    autoCollectAll(): void;
    /**
     * `ItemManager::CancelAutoCollect` (`:682-693`): drop the grab on anything that had
     * it and hand it back to its own upward drift. `Player::Die` calls it on the hit
     * and again once the drop pile has spawned, so a death never flies the player's own
     * P items off into the past.
     */
    cancelAutoCollect(): void;
    get activeCount(): number;
    /**
     * `ItemManager::GetTimeOrbCount` (`ItemManager.cpp:758`): the 时符 still lying
     * on the field, unwon. ECL register 0x2772 adds it to the collected count, so
     * a boss reads it to decide whether the last spell is still payable.
     */
    get timeOrbCount(): number;
}
export interface CollectResult {
    kind: ItemKind;
    /** Power points granted (`ITEM_POWER_*`). */
    power: number;
    /** Score added to the read-out: `GameManager::AddScore(popup)` = popup / 10. */
    score: number;
    /** The raw number retail floats over the pickup (`AsciiManager::CreateScorePopup`). */
    popup: number;
    /** Where the float anchors: retail uses the item's own position. */
    x: number;
    y: number;
    /** Gold popup: the item paid its maximum value. */
    maxValue: boolean;
    fillsPower?: boolean;
    life?: boolean;
    bomb?: boolean;
    /** An 延长 item, or a point item that just crossed the extend threshold. */
    extend?: boolean;
    timeOrb?: boolean;
    /**
     * A 时符 collected while the Last Spell threshold is already met, which is what turns
     * its float amber (`ItemManager.cpp:630`). Only ever set on the orb branch.
     */
    orbPaid?: boolean;
    /** Internal: this pickup is a 点 item, so it counts and can extend. */
    pointItem?: boolean;
}
//# sourceMappingURL=ItemPool.d.ts.map