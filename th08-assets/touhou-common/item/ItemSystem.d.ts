import { Entity } from '../../engine/core/Entity';
import { Bounds } from '../../engine/core/BulletSystem';
import { Item, ItemKind } from './Item';
/** How generous a kill is with its drops. */
export type DropTier = 'fairy' | 'elite' | 'midboss' | 'boss';
/**
 * Per-tier drop counts. Power/point items are near-guaranteed so the player can
 * actually reach max power; the rare kinds roll once per kill.
 */
export declare const DROP_TABLE: Record<DropTier, {
    power: number;
    powerSmall: number;
    point: number;
    rare: number;
}>;
/** Cap on live items so a long stage cannot grow the pool without bound. */
export declare const MAX_ITEMS = 220;
export interface ItemCollectResult {
    kind: ItemKind;
    power: number;
    fillsPower: boolean;
    score: number;
    lives: number;
    bombs: number;
}
/**
 * Owns every collectible on the playfield: spawning drops from kills, applying
 * their arc-and-fall motion, magnetising them to the player, and reporting what
 * was picked up this frame.
 */
export declare class ItemSystem {
    private rng;
    items: Item[];
    /** Total items collected since the last reset, for the debug overlay. */
    collected: number;
    private pool;
    constructor(rng?: () => number);
    /** Number of live items. */
    get count(): number;
    /** Roll and spawn the drop set for a killed enemy of `tier` at (x, y). */
    spawnDrops(x: number, y: number, tier: DropTier): Item[];
    /** Decide which items a kill of `tier` yields. */
    rollDrops(tier: DropTier): ItemKind[];
    /** Spawn one item, arcing it outward so a stack does not collapse into a dot. */
    spawn(kind: ItemKind, x: number, y: number, index?: number): Item;
    /**
     * Advance every item and return the ones the player touched.
     *
     * Items home in when the player is within `ITEM_MAGNET_RADIUS`, or whenever
     * the player sits above the capture line, which is how TH08 sweeps the screen.
     */
    update(dt: number, player: Entity, bounds: Bounds): ItemCollectResult[];
    /** Sweep every live item into the player, as TH08 does on boss death. */
    collectAll(): ItemCollectResult[];
    /** Remove every item without collecting it (stage transitions, resets). */
    clear(): void;
    private toResult;
    private release;
}
//# sourceMappingURL=ItemSystem.d.ts.map