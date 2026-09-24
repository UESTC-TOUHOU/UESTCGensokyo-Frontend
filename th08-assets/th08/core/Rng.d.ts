/**
 * ZUN's 16-bit pseudo-random generator, ported from `Rng::GetRandomU16` in
 * th08web-ref/src/Global.cpp.
 *
 * Every random value in Touhou 8 comes through this, so matching it exactly is
 * what lets the port replay a retail `.rpy` and land on the same bullets. The
 * arithmetic is deliberately 16-bit wrapping and the float helpers round through
 * f32, because the original divides by `UINT_MAX` / `INT_MAX` in single
 * precision and that rounding is observable.
 */
export declare class Rng {
    private seed;
    private seedBackup;
    private generationCount;
    constructor(seed?: number);
    /** Next 16-bit value: `(seed ^ 0x9630) - 0x6553`, folded back into 16 bits. */
    randomU16(): number;
    /** Two 16-bit draws glued together, high word first. */
    randomU32(): number;
    /** [0, 1) in f32, including the original's divide-by-UINT_MAX rounding. */
    randomF32(): number;
    /** [-1, 1) in f32, the signed variant used for mirrored spreads. */
    randomF32Signed(): number;
    randomU16InRange(range: number): number;
    randomU32InRange(range: number): number;
    randomF32InRange(range: number): number;
    randomF32SignedInRange(range: number): number;
    setSeed(seed: number): void;
    getSeed(): number;
    /** Replays seed the retail engine restores from a replay sync point. */
    restoreBackup(): void;
    resetGenerationCount(): void;
    getGenerationCount(): number;
}
/** Global generator; the reference keeps exactly one (`g_Rng`). */
export declare const gRng: Rng;
//# sourceMappingURL=Rng.d.ts.map