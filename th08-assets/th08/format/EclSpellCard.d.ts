/**
 * Decode the spell-card blob that ECL op 122 carries.
 *
 * `StartEnemySpell` (`EclDependencies.cpp:17-47`) reads a variable-length
 * instruction whose operands are not the usual 4-byte scalars but two strings:
 *
 *   +0x00  i16 face | u16 number   +0x04  i32 bonus
 *   +0x08  u8 name[0x30]            +0x38  u8 owner[0x30]
 *   +0x68  char comment1[0x40]      +0xA8  char comment2[0x40]
 *
 * (offsets relative to the first operand word; the retail struct is relative to
 * the instruction, which is 12 bytes further back). `Spellcard::StartSpell`
 * un-obfuscates them one byte at a time — the card name is XOR 0xAA and the
 * owner XOR 0xBB (`Spellcard.cpp:786-851`) — and the result is Shift-JIS.
 *
 * The translator runs this at build time so the generated TypeScript carries
 * readable string literals and the runtime never needs a Shift-JIS decoder.
 */
export interface EclSpellCard {
    /** Global card id — retail's index into the `Catk` capture history. */
    number: number;
    /** Script index into the boss's `face_stNN.anm` for the cut-in. */
    face: number;
    /** Bonus paid for capturing the card. */
    bonus: number;
    /** Card name, decoded, e.g. 夜雀「真夜中のコーラスマスター」. */
    name: string;
    /** Card owner, decoded, e.g. ミスティア・ローレライ. */
    owner: string;
}
/** Turn op 122's operand words into the card's readable fields. */
export declare function decodeSpellCard(operands: ArrayLike<number>): EclSpellCard;
//# sourceMappingURL=EclSpellCard.d.ts.map