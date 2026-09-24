/**
 * The ECL interpolator array: how a stage actually moves an enemy.
 *
 * Ops 63..78 set up motion *producers* (a heading, an orbit, an arc), but the
 * smooth repositioning that makes a boss glide to a spot and stop is a separate
 * machine. Opcode 36 (`InstallInterpolationSlot`, `EclDependencies.cpp:361-389`)
 * writes one of eight 0x30-byte slots that live in the enemy script context at
 * `context + 0x9C`, and the tail of `RunEcl` (`EclRun.cpp:131-202`) steps them
 * once per frame, after the script and before the motion integrator.
 *
 * The detail that decides whether the motion looks right is *when* each operand
 * is read. The destination is stored raw - `slot.affectedVariable` is the
 * instruction operand itself - and `ResolveFloatLValue` picks the register from
 * it on every write, so op 36 has to hand over an id and not a value. The four
 * parameters are different: `DEP_READ_FLOAT` resolves an indirect operand once,
 * at install, and the stored number is resolved a second time per frame. That
 * second pass is what makes a tween whose start register the script keeps
 * rewriting track the register live, and it is why the parameters stay numbers
 * here rather than becoming ids.
 *
 * The Hermite (index 7, and the scripts that want a curve all pass 7) uses the
 * Catmull-Rom basis, whose weights sum in pairs: w0 + w1 = 1 and w2 + w3 = 0.
 * So with `parameter0` naming the position the callback is
 * `pos += w1 * (target - pos) + w2 * tangent0 + w3 * tangent1`, a steer toward a
 * target that can move.
 *
 * The frame tail also converts a position write into velocity: it remembers where
 * the motion target was, lets the slot move it, then rewinds the target and
 * leaves the difference in `enemy+0x2D4C` for the integrator. Retail reads the
 * position registers from the drawn vector (`enemy+0x2D88`,
 * `EclOperandsFloat.cpp:116-118`) but writes the motion target
 * (`enemy+0x2D34`, :203-205), and that asymmetry is what makes the rewind
 * round-trip.
 */
/** Eight slots per enemy context, at `context + 0x9C` (`EclDependencies.cpp:369`). */
export declare const INTERP_SLOTS = 8;
/**
 * `g_EclInterpolatorCallbacks` (`EclGlobals.cpp:23-32`). Seven of the eight
 * entries are the same linear function; only index 7 is the Hermite, which is
 * why the scripts that want a curve all pass 7.
 */
export declare const INTERP_HERMITE = 7;
/** The position registers. Driving one makes the frame tail convert to velocity. */
export declare const REG_POS_X = 10042;
export declare const REG_POS_Y = 10043;
export declare const REG_POS_Z = 10044;
/** What a slot needs from the enemy that owns it. */
export interface InterpWorld {
    /** `EclOperands::ResolveFloat`: a register id reads the register, else the value. */
    resolve(value: number): number;
    /** `ResolveFloatLValue`: write the register the operand names, if any. */
    write(variable: number, value: number): void;
}
/** `InterpolationSlot`, 0x30 bytes (`EclDependencies.cpp:299-312`). */
export interface InterpSlot {
    /** `callback != NULL`. */
    live: boolean;
    /** The stored operand of the destination, kept raw. */
    variable: number;
    timer: number;
    duration: number;
    /** Index into the callback table, kept so a save/reload can rebuild it. */
    callback: number;
    easing: number;
    p0: number;
    p1: number;
    p2: number;
    p3: number;
}
/**
 * The in-function easing switch at `EclRun.cpp:157-177`. Anything the table does
 * not name - including 0, which most scripts use - is linear.
 */
export declare function easeProgress(easing: number, progress: number): number;
export declare class EclInterpolator {
    readonly slots: InterpSlot[];
    /** `EnemyManager` zeroes the context with the enemy. */
    reset(): void;
    /** A slot is running while its callback pointer is set. */
    get activeCount(): number;
    /**
     * `InstallInterpolationSlot`. The scan takes the first slot that is free or
     * already driving the same register, so a script can retarget a tween in flight
     * but cannot steal one that belongs to another register. With all eight busy
     * the instruction is dropped, which is what the original does too.
     */
    install(variable: number, duration: number, callback: number, easing: number, p0: number, p1: number, p2: number, p3: number): boolean;
    /**
     * One frame of the tail at `EclRun.cpp:148-188`. Returns whether any slot that
     * ran drives a position register, which is what asks the owner for the
     * move-becomes-velocity rewind.
     */
    step(world: InterpWorld): boolean;
}
//# sourceMappingURL=EclInterpolator.d.ts.map