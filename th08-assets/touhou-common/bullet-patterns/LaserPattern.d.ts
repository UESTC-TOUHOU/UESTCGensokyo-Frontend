import { BulletPattern } from './BulletPattern';
import { Entity, EntityTag } from '../../engine/core/Entity';
import { Bullet } from '../../engine/core/Bullet';
export type LaserMode = 'beam' | 'sweep' | 'wall';
export interface LaserPatternConfig {
    /** Direction the beam points in, radians (0 = right, PI/2 = down). */
    baseAngle: number;
    /** Beam behaviour. */
    mode?: LaserMode;
    /** Beam length in pixels. */
    length?: number;
    /** Half-thickness of the beam in pixels — also each segment's hitbox radius. */
    radius?: number;
    /** Distance between consecutive segments along the beam. */
    segmentGap?: number;
    /** Number of beams for 'wall' mode. */
    count?: number;
    /** Perpendicular spacing between 'wall' beams. */
    gap?: number;
    /** Rotation per frame for 'sweep' mode, radians/frame. */
    sweepSpeed?: number;
    /** Number of rotating arms for 'sweep' mode, evenly spaced around the emitter. */
    arms?: number;
    /** Frames for the beam to reach full length. */
    growFrames?: number;
    /** Frames the beam stays fully extended. */
    holdFrames?: number;
    /** Frames for the beam to retract back to the emitter. */
    shrinkFrames?: number;
    /** How long each emitted slice survives in 'sweep' mode. */
    tailFrames?: number;
    /** Damage per segment while the beam is live. */
    damage?: number;
    color?: number;
    sprite?: string;
    tag?: EntityTag;
}
/**
 * Danmaku lasers, expressed as a chain of ordinary bullets.
 *
 * Modelling the beam as overlapping segments keeps it inside the existing
 * circle-collision and sprite pipeline, so lasers graze, cancel and render
 * exactly like everything else. Each segment carries a maxLifetime derived from
 * its distance along the beam, which lets a straight beam grow out of the
 * emitter, hold, and then retract tip-first without any per-entity bookkeeping.
 */
export declare class LaserPattern extends BulletPattern {
    config: LaserPatternConfig;
    /** Frames this pattern has been asked to fire; drives growth and sweep. */
    private age;
    constructor(config: LaserPatternConfig);
    /** Rewind the growth/sweep clock (used when a spell card restarts). */
    reset(): void;
    /** Total frames one full beam cycle occupies. */
    get cycleFrames(): number;
    /** Frames elapsed since construction — exposed so tests and bosses can sync. */
    get frame(): number;
    spawn(emitter: Entity, _time: number, _player?: Entity): Bullet[];
    private segment;
}
//# sourceMappingURL=LaserPattern.d.ts.map