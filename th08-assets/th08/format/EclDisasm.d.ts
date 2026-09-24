/**
 * ECL disassembler: turn raw EclFile instructions into a structured IR.
 *
 * Phase 1: linearize — attach opcode info, resolve variable references.
 * Phase 2: control flow — identify wait/jump/loop/call/compare-branch, build
 *          a block graph with structured if/while/for equivalents.
 * Phase 3: variable naming — map 0x2710..0x2762 register IDs to semantic names.
 *
 * The output IR is what emit-ts.mjs consumes to produce generator functions.
 */
import { type EclSub, type EclFile } from './EclFile';
import { type OpcodeInfo } from './EclOpcodes';
/** Decoded variable reference: register id or literal. */
export type VarRef = {
    kind: 'literal';
    value: number;
} | {
    kind: 'int';
    id: number;
    name: string;
} | {
    kind: 'float';
    id: number;
    name: string;
};
/** One disassembled instruction with named operands. */
export interface DisasmInstruction {
    offset: number;
    time: number;
    opcode: number;
    opInfo: OpcodeInfo;
    diffMask: number;
    operands: number[];
    operandFlags: number;
    /** Resolved operand references (literal or variable). */
    args: VarRef[];
}
/** How a block hands control over to the next one. */
export type BlockExit = {
    kind: 'fall';
    guard: string | null;
} | {
    kind: 'return';
    guard: string | null;
}
/** Frames to wait before resuming at the target; 0 for backward jumps. */
 | {
    kind: 'jump';
    targetOffset: number;
    targetBlock: number;
    targetTime: number;
    waitBefore: number;
    guard: string | null;
} | {
    kind: 'loop';
    targetOffset: number;
    targetBlock: number;
    targetTime: number;
    waitBefore: number;
    counter: VarRef;
    guard: string | null;
} | {
    kind: 'branch';
    targetOffset: number;
    targetBlock: number;
    targetTime: number;
    waitBefore: number;
    op: string;
    lhs: VarRef;
    rhs: VarRef;
    guard: string | null;
} | {
    kind: 'call';
    subId: number;
    guard: string | null;
} | {
    kind: 'wait';
    frames: number;
};
/** A basic block: a straight-line sequence between control-flow edges. */
export interface Block {
    id: number;
    /** Absolute file offset of the first instruction — the jump landing pad. */
    entryOffset: number;
    /** Script time of the first instruction, used for resume accounting. */
    entryTime: number;
    instructions: DisasmInstruction[];
    /** Control flow at the end of the block. */
    exit: BlockExit;
}
/** A fully disassembled sub, ready for the TS emitter. */
export interface DisasmSub {
    id: number;
    blocks: Block[];
    /** Flattened instruction list (convenience for linear iteration). */
    instructions: DisasmInstruction[];
}
/**
 * Disassemble one sub into a linear instruction list + basic blocks.
 *
 * Blocks are cut at every control-flow opcode, every script-time boundary and
 * every jump target, so the emitter can dispatch on block id and keep the
 * original while / if-goto structure of the compiled ECL intact.
 */
export declare function disasmSub(sub: EclSub): DisasmSub;
/** Disassemble an entire ECL file. */
export declare function disasmEcl(ecl: EclFile): DisasmSub[];
/** Pretty-print one disassembled sub for debugging. */
export declare function formatSub(sub: DisasmSub): string;
//# sourceMappingURL=EclDisasm.d.ts.map