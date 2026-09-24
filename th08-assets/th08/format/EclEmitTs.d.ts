/**
 * ECL → TypeScript code generator.
 *
 * Takes the disassembled IR from EclDisasm and emits one `function*` generator
 * per sub. The generator yields frame counts (wait), calls other subs via the
 * runtime context, and maps ECL opcodes to the danmaku primitive library.
 *
 * The output is valid TypeScript that imports from `src/th08/danmaku/` and can
 * be compiled, run, and human-edited.
 */
import { type DisasmSub } from './EclDisasm';
/** Emit every sub of one ECL file as a dispatch-loop generator. */
export declare function emitEclFile(subs: DisasmSub[], fileName: string): string;
//# sourceMappingURL=EclEmitTs.d.ts.map