/**
 * ECL opcode table for Touhou 8, recovered from th08web-ref/src/EclRunLow.inl
 * and EclRunHigh.inl. Each entry carries the mnemonic, operand signature and a
 * short description. The signature uses:
 *   I = read int, F = read float, Iw = write int, Fw = write float,
 *   i = raw int (not resolved), f = raw float, ? = unused/padding.
 */
export interface OpcodeInfo {
    name: string;
    sig: string[];
    desc: string;
    /**
     * True when the first operand word packs two i16 parameters. The interpreter
     * numbers `operandFlags` by parameter, not by word, so every bit from the
     * second parameter onwards sits one place higher than the word index. The shot
     * launchers (ops 96..104, type + colour) and the lasers (ops 114/115, type +
     * colour) are the two families in th08 that do this.
     */
    packedFirst?: boolean;
}
export declare const ECL_OPCODES: Record<number, OpcodeInfo>;
/** Timeline-specific opcodes (EclTimelineInstruction). */
export declare const ECL_TIMELINE_OPCODES: Record<number, {
    name: string;
    desc: string;
}>;
//# sourceMappingURL=EclOpcodes.d.ts.map