/**
 * The animation VM that drives every sprite in the Windows-era games.
 *
 * A `.anm` pack is a sprite atlas plus a pile of bytecode scripts. One `AnmVm`
 * owns one script and one transform, and the host steps it exactly once per game
 * frame. This is a faithful port of `AnmManager::ExecuteScript` and the
 * interpolation tail that follows it, down to the quirks that matter:
 *
 * - Instructions carry a `time`, and the script runs *every* instruction whose
 *   time has come round before the frame ends, so a burst of setup lands at once.
 * - `Wait` rewinds the script clock and stops, which is how a script paces itself.
 * - Position, colour, alpha, rotation and scale each have their own interpolator
 *   with a chosen easing, and they advance after the script, not inside it.
 * - `pos` is shared storage: the game logic writes the same numbers the script
 *   interpolates, which is why an enemy can be yanked sideways mid-flight.
 *
 * Nothing here knows about Touhou. Bullets, HUD panels, backgrounds and enemies
 * are all just hosts that read the transform back out.
 */
import { ANM_HEADER_BYTES } from './AnmOpcode';
export interface AnmVec3 {
    x: number;
    y: number;
    z: number;
}
export interface AnmVec2 {
    x: number;
    y: number;
}
export interface AnmColor {
    r: number;
    g: number;
    b: number;
    a: number;
}
/**
 * Random sources the two `*SetRand` instructions need.
 *
 * The names match `Rng` from the game's own core so the ZUN generator satisfies
 * this without an adapter: the draws have to come off the same sequence the ECL
 * uses, or a script that randomises an entry angle desynchronises.
 */
export interface AnmRng {
    /** Uniform integer in `[0, bound)`, on the original's modulo. */
    randomU32InRange(bound: number): number;
    /** Uniform float in `[0, bound)`. */
    randomF32InRange(bound: number): number;
}
export declare class AnmVm {
    /** The script this VM is running, as 4-byte words. Shared, never copied. */
    private script;
    /** Word index of the next instruction, or -1 once the script has ended. */
    private pc;
    private rng;
    /** Frames this VM has been alive; every instruction time is measured against it. */
    timeInScript: number;
    /** Non-zero while a `Wait` is still counting down. */
    waitTimer: number;
    pos: AnmVec3;
    /** The offset position, used when `PosMode` redirects writes away from `pos`. */
    pos2: AnmVec3;
    private posInitial;
    private posFinal;
    rotation: AnmVec3;
    angleVel: AnmVec3;
    private rotateInitial;
    private rotateFinal;
    scale: AnmVec2;
    scaleGrowth: AnmVec2;
    private scaleInitial;
    private scaleFinal;
    color1: AnmColor;
    color2: AnmColor;
    private color1Initial;
    private color1Final;
    private color2Initial;
    private color2Final;
    uvScrollPos: AnmVec2;
    uvScrollVel: AnmVec2;
    /** Sprite cell the script last asked for, and the box it draws into. */
    sprite: number;
    spriteSize: AnmVec2;
    /** Frame the sprite last changed, so a host can tell an idle cycle from a live one. */
    timeOfLastSpriteSet: number;
    visible: boolean;
    stopped: boolean;
    usePosOffset: boolean;
    blendMode: number;
    anchor: number;
    flip: number;
    zWriteDisabled: number;
    /**
     * `AnmOpcode_Ins25`: how the host draws this VM. The stage backdrop reads the
     * low nibble, where 2 means "billboard the sprite at its projected centre" and
     * anything else means "a real quad in the XY plane"; bit 4 asks for the sparkle
     * anchors that `Background::RenderObjects` hands to the effect manager.
     * (`AnmManager.cpp:436`)
     */
    renderType: number;
    /** `AnmOpcode_Ins31`: backdrop flag byte, 1 for every layer the stage uses. */
    flag15: number;
    updateRotation: boolean;
    updateScale: boolean;
    /** Set by `Delete`/end-of-script: the host should retire whatever this VM drives. */
    deleted: boolean;
    /** True once the instruction pointer has run out. */
    finished: boolean;
    /**
     * `AnmVm::pendingInterrupt` (`AnmManager.hpp:365`), set through
     * `AnmVm::SetInterrupt` (`AnmManager.hpp:309`). Non-zero makes the next
     * `ExecuteScript` hop to the matching `InterruptLabel` instead of walking the
     * base timeline, which is how the dialogue faces enter, dim, and leave.
     */
    pendingInterrupt: number;
    /** `interruptReturnTime` / `interruptReturnInstruction` (`:388-389`). */
    private interruptReturnTime;
    private interruptReturnPc;
    private intVar;
    private floatVar;
    private counterVar;
    private interpCurrentTimers;
    private interpEndTimers;
    private interpModes;
    /**
     * Scratch for the rare instruction that writes an argument slot that is not a
     * register. The original pokes the shared script bytes directly, which would
     * corrupt every other VM on the same script; keying by word index keeps the
     * behaviour local to this instance.
     */
    private argScratch;
    constructor(rng: AnmRng);
    /**
     * Start `script` from instruction zero and run it immediately, the way
     * `SetAndExecuteScript` does: the setup block lands on the spawn frame rather
     * than a frame later.
     */
    attach(script: Int32Array, spriteSize?: AnmVec2): void;
    /** Put every field back the way `AnmVm::Initialize` leaves it. */
    reset(): void;
    /**
     * Advance one frame. Returns true once the script is over, mirroring the
     * `ZunBool` that `ExecuteScript` hands its callers.
     */
    step(framerateMultiplier?: number): boolean;
    /**
     * `AnmVm::SetInterrupt` (`AnmManager.hpp:309-312`): ask the running script to
     * jump to its `InterruptLabel` with this id. A label the base timeline walks
     * through normally stays inert - `InterruptLabel` has no case in the retail
     * dispatch switch, so only `pendingInterrupt` ever reads it.
     */
    setInterrupt(code: number): void;
    /**
     * `AnmManager.cpp:392-424`. Scan the script from the top for the
     * `InterruptLabel` carrying `pendingInterrupt`, remember where the base
     * timeline was interrupted, and restart the clock at the instruction after
     * the label. A script with neither a matching label nor the `-1` catch-all
     * stays parked, which is what `goto stop` means upstream.
     */
    private handleInterrupt;
    /** Run every instruction whose time has come. */
    private execute;
    /** `PosTimeLinear/Decel/Decel2` all share this body. */
    private posTime;
    /** The per-frame easing pass that runs after the script, exactly as the original orders it. */
    private advanceTail;
    private applyInterp;
    /** The position the host should draw at, folding in the offset channel. */
    get worldPos(): AnmVec3;
    /** Raw 32-bit view of an argument, honouring this VM's write-back scratch. */
    private argWord;
    private argInt;
    private argFloat;
    private intVarById;
    private floatVarById;
    private setIntById;
    private setFloatById;
    /** `JmpDec` needs the decrement to land even when the target is an inline literal. */
    private setIntByIdRaw;
}
/** Decode a base64 script blob out of the extracted asset pack into VM words. */
export declare const anmScriptFromBase64: (b64: string) => Int32Array;
export { ANM_HEADER_BYTES };
//# sourceMappingURL=AnmVm.d.ts.map