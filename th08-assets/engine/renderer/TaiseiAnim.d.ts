/** One animation group as declared in a Taisei .ani file. */
export interface TaiseiAnimGroup {
    /** Texture indices to play, in order. */
    frames: number[];
    /** Game frames each texture stays on screen. */
    delay: number;
    /** Taisei marks mirrored groups with a leading `m`. */
    mirror: boolean;
}
/** Group name -> definition, straight from the .ani body. */
export type TaiseiAnim = Record<string, TaiseiAnimGroup>;
declare const STEADY: readonly ["main", "left", "right"];
export type SteadyGroup = (typeof STEADY)[number];
/**
 * The two stances a Touhou ship is drawn in.
 *
 * 永夜抄 gives every player bank two complete animation families in one ANM file:
 * scripts 0-4 are the free-flight stance and scripts 5-9 the focused one, and
 * `Player.cpp:696-703` / `760-767` switch between them by running script 5 on the
 * slow-key edge and script 0 on the release edge. The lean clips are duplicated per
 * family, so a bank needs a name namespace to hold both.
 */
export type AnimPose = 'normal' | 'slow';
/**
 * Frame player for vendored Taisei sprites.
 *
 * Taisei bakes the character's bank into the lean frames and mirrors them for the
 * other direction (`left = m d10 0 1 2 3`), so the on-screen character tips toward
 * the way it is travelling. This class replays those groups, including the short
 * non-looping transition clips (main2left / left2main) that aniplayer.c uses, so
 * the lean ramps in and out instead of snapping.
 */
export declare class TaiseiAnimPlayer {
    private readonly anim;
    private group;
    private index;
    private timer;
    private loop;
    private steady;
    private pending;
    private transition;
    private frame;
    private mirror;
    private pose;
    constructor(anim: TaiseiAnim, start?: string);
    /** Current texture frame index inside the group. */
    get frameIndex(): number;
    /** True when the frame must be drawn horizontally flipped. */
    get flipped(): boolean;
    /** Name of the group currently playing. */
    get currentGroup(): string;
    /** True while a one-shot transition clip is running. */
    get isTransitioning(): boolean;
    /** Force a group, clearing any queued direction change. */
    setGroup(name: string): void;
    /**
     * Switch between the upright and the 低速 stance.
     *
     * Retail answers a focus press with `SetAndExecuteScriptIdx(vm, 5)` and a release
     * with `SetAndExecuteScriptIdx(vm, 0)` (`Player.cpp:696-703, 760-767`): the ship
     * jumps straight to the other stance's *upright* clip and keeps it until the
     * horizontal velocity changes again, because lean clips are only ever armed on a
     * velocity edge. That is why sliding sideways while pressing Shift starts upright.
     */
    setPose(pose: AnimPose): void;
    /**
     * Aim at a horizontal velocity. Dead zone keeps an idle character on the
     * upright bob instead of flickering between lean frames.
     */
    setDirection(vx: number, deadZone?: number): void;
    private startTransition;
    private play;
    /**
     * Park the player on a looping pose after a missing or degenerate clip.
     *
     * `wanted` keeps the visual facing the direction the ship is actually
     * travelling; without it a bank that lacks lean clips would flicker back to
     * upright on every frame that the missing group got selected.
     */
    private recover;
    /** Advance by whole game frames (Taisei's animator is frame based, not time based). */
    update(dt?: number): void;
    private onTransitionEnd;
    /**
     * Resolve a group name against the current stance.
     *
     * Banks that never authored a 低速 family fall back to the plain names, so the
     * vendored Taisei ships keep animating exactly as before.
     */
    private key;
    /** Definition for a group name, honouring the current stance. */
    private def;
}
export {};
//# sourceMappingURL=TaiseiAnim.d.ts.map