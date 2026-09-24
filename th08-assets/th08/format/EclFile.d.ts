/**
 * Parser for Touhou 8 .ecl enemy scripts.
 *
 * Binary layout from th08web-ref/src/EclManager.hpp:
 *   u32 version;  i16 subCount;  i16 unknown06;
 *   u32 timelineOffsets[16];              // +0x08, file-relative
 *   u32 subOffsets[subCount];             // +0x48, file-relative
 *   ...instruction stream...
 *
 * EclRawInstruction:
 *   i32 time;  i16 opcode;  i16 nextOffset;  u8 unknown08;  u8 difficultyMask;  u16 operandFlags;  u8 operands[];
 *
 * A sub ends when we reach an instruction with `time < 0`.
 * A timeline uses EclTimelineInstruction (different layout):
 *   i32 time;  i16 opcode;  u8 size;  u8 difficultyMask;  union { i32[7] / f32[7] } args;
 */
export interface EclInstruction {
    offset: number;
    time: number;
    opcode: number;
    nextOffset: number;
    difficultyMask: number;
    operandFlags: number;
    operands: Int32Array;
}
export interface EclSub {
    id: number;
    offset: number;
    instructions: EclInstruction[];
}
export interface EclTimelineInstruction {
    offset: number;
    time: number;
    opcode: number;
    size: number;
    difficultyMask: number;
    args: Int32Array;
}
export interface EclTimeline {
    index: number;
    offset: number;
    instructions: EclTimelineInstruction[];
}
export interface EclFile {
    version: number;
    subCount: number;
    subs: EclSub[];
    timelines: EclTimeline[];
}
/** Parse a raw .ecl buffer into structured data. */
export declare function parseEcl(buf: Buffer | Uint8Array): EclFile;
//# sourceMappingURL=EclFile.d.ts.map