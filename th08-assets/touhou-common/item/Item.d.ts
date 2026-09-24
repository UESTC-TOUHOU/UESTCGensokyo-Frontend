import { Entity } from '../../engine/core/Entity';
import { Vector2 } from '../../engine/core/Vector2';
/** Collectible drop kinds, mirroring the TH08 item set. */
export type ItemKind = 'power' | 'powerSmall' | 'point' | 'life' | 'bomb' | 'fullpower' | 'surge';
/** Tuning for one item kind: art slot, on-screen size and pickup effect. */
export interface ItemSpec {
    /** Texture slot resolved by the renderer; real Taisei item art. */
    sprite: string;
    /** Display size in playfield pixels. */
    size: number;
    /** Fallback fill when the vendored item art is unavailable. */
    color: number;
    /** Power added to the player, in 1/256 units. */
    power: number;
    /** True when the item fills power to the cap instead of adding a fixed amount. */
    fillsPower?: boolean;
    score: number;
    lives: number;
    bombs: number;
}
export declare const ITEM_SPECS: Record<ItemKind, ItemSpec>;
/**
 * Downward acceleration and air drag, tuned so a drop hops briefly and settles
 * into a loose pile rather than floating back up the screen.
 */
export declare const ITEM_GRAVITY = 0.08;
export declare const ITEM_DRAG = 0.955;
export declare const ITEM_MAX_FALL = 2.2;
/** Strongest upward pop an item may leave a kill with. */
export declare const ITEM_MAX_RISE = 2.6;
/** Radius within which items curve toward the player. */
export declare const ITEM_MAGNET_RADIUS = 92;
/** Above this line the player attracts every item on screen, as in TH08. */
export declare const ITEM_CAPTURE_LINE = 128;
/** Items drift off-screen below this much grace past the playfield bottom. */
export declare const ITEM_DEEP_CULL = 48;
export interface ItemConfig {
    kind?: ItemKind;
    radius?: number;
}
/**
 * A collectible drop. Items arc outward from the dying enemy, drag back to a
 * gentle fall, and home in on the player once they are close or the player has
 * crossed the capture line.
 */
export declare class Item extends Entity {
    kind: ItemKind;
    spec: ItemSpec;
    alpha: number;
    /** Accumulated flight time, used for the spawn pop-in. */
    timer: number;
    /** True once the item is being pulled toward the player. */
    magnetized: boolean;
    constructor(position?: Partial<Vector2>, velocity?: Partial<Vector2>, config?: ItemConfig);
    /** Re-arm a pooled item at a new spawn position. */
    reset(x: number, y: number, kind?: ItemKind): void;
    update(dt: number): void;
    /** Curve the item toward `target`, ramping up speed the closer it gets. */
    attract(target: Vector2, dt: number, strength?: number): void;
}
//# sourceMappingURL=Item.d.ts.map