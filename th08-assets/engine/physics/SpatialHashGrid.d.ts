import { Entity } from '../core/Entity';
export declare class SpatialHashGrid {
    /** Cell edge length in px (read-only; exposed for debug visualization). */
    readonly cellSize: number;
    private grid;
    constructor(cellSize?: number);
    private hash;
    clear(): void;
    insert(entity: Entity): void;
    query(entity: Entity): Set<Entity>;
    /** Read-only traversal of occupied cells (key = "cx,cy"); for debug visualization only. */
    forEachCell(callback: (key: string, entities: ReadonlySet<Entity>) => void): void;
    checkCollisions(entity: Entity): Entity[];
}
//# sourceMappingURL=SpatialHashGrid.d.ts.map