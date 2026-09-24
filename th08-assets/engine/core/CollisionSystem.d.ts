import { Entity, EntityTag } from './Entity';
export interface CollisionHit {
    entity: Entity;
    distance: number;
}
type TagFilter = EntityTag | EntityTag[];
/** Resolves collisions through the spatial hash grid (O(n) neighbourhood queries). */
export declare class CollisionSystem {
    private grid;
    /** Last list handed to update(); the grid is (re)built from it lazily. */
    private lastEntities;
    private dirty;
    /** Number of real distance comparisons performed this frame (F12 metric). */
    totalChecks: number;
    constructor(cellSize?: number);
    /**
     * Register the live entity set for this frame. The grid itself is rebuilt
     * lazily on the first query (once per update), so calling this before every
     * query is not required — but queries between two update() calls reuse the
     * grid built from the previous list.
     */
    update(entities: Entity[]): void;
    /** Rebuild the grid from the last update() list if it is stale (no-op when fresh). */
    private ensureGrid;
    /** Cell edge length in px (read-only; exposed for debug visualization). */
    get cellSize(): number;
    /** Read-only traversal of occupied cells (key = "cx,cy"); for debug visualization only. */
    forEachCell(callback: (key: string, entities: ReadonlySet<Entity>) => void): void;
    private matchesFilter;
    private resolve;
    /** Collisions of `entity` against candidates matching `tags`. */
    checkCollisions(entity: Entity, tags?: TagFilter): CollisionHit[];
    /** Entities within `radius` px of `entity`, filtered by `tags` (used for graze). */
    queryNearby(entity: Entity, radius: number, tags?: TagFilter): CollisionHit[];
}
export {};
//# sourceMappingURL=CollisionSystem.d.ts.map