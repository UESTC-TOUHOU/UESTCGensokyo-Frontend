import { Vector2 } from './Vector2';
import { EventEmitter } from './EventEmitter';
export interface Hitbox {
    radius: number;
    offset?: Vector2;
}
/** Discriminates entity kinds for collision & rendering logic. */
export type EntityTag = 'default' | 'player' | 'enemy' | 'boss' | 'player-bullet' | 'enemy-bullet' | 'item';
/** Live motion state of an entity; `position`/`velocity` alias the entity's own vectors. */
export interface Transform {
    position: Vector2;
    velocity: Vector2;
    rotation: number;
}
/** Typed events emitted by Entity and its subclasses; unknown names stay allowed. */
export interface EntityEvents {
    destroy: void;
    collided: {
        other: Entity;
    };
    [event: string]: any;
}
export declare class Entity extends EventEmitter<EntityEvents> {
    id: string;
    position: Vector2;
    velocity: Vector2;
    hitbox: Hitbox;
    isAlive: boolean;
    tag: EntityTag;
    private readonly _transform;
    private static nextId;
    constructor(position?: Partial<Vector2>, velocity?: Partial<Vector2>, hitbox?: Partial<Hitbox>, tag?: EntityTag);
    /** Shared Transform view; `rotation` reads/writes through to keep both sides live. */
    get transform(): Transform;
    get rotation(): number;
    set rotation(value: number);
    update(dt: number): void;
    destroy(): void;
    distanceTo(other: Entity): number;
    angleTo(other: Entity): number;
    getHitboxCenter(): Vector2;
}
//# sourceMappingURL=Entity.d.ts.map