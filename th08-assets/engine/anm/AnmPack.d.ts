/**
 * Bytecode store the ANM virtual machine reads its scripts from.
 *
 * Every retail `.anm` archive exposes the same shape: script id in, word array
 * out. Keeping the engine side of the VM behind this interface means a stage can
 * be driven from `enemy.anm`, `player00.anm`, an embedded fixture, or nothing at
 * all without the simulation knowing which.
 */
export interface AnmPack {
    /** Words for one script id, or null when the id is unused in this archive. */
    words(script: number): Int32Array | null;
}
//# sourceMappingURL=AnmPack.d.ts.map