/**
 * Structured form of the two ECL operand blobs that used to reach the runtime as
 * raw words: the shot launchers (ops 96..104) and the lasers (ops 114/115).
 *
 * Both instructions pack their parameters into i32 words and mark, one bit per
 * parameter in `operandFlags`, whether that word is a literal or a register id
 * that has to be read out of the enemy's register file at fire time. Handing that
 * blob straight through is what made 1 064 generated call sites read as
 * `e.spawnShot(0, 393216, 1, 1, 1065353216, ...)`, where `1065353216` is really
 * `1.0f` and `393216` is really "bullet 6, colour 6".
 *
 * A `Descriptor` is the same instruction after register elimination: every field
 * is either a decoded literal or a `reg(id)` marker. `pack` turns it back into
 * exactly the word array the interpreter used to see, and `unpack` goes the other
 * way, so `ShotDescriptor.test.ts` can prove the two are inverses over every
 * instruction in all nine retail `.ecl` files. That is what lets the generated
 * source change shape without changing behaviour by one bit.
 *
 * Flag numbering follows the *declared parameter list*, not the word list, and
 * both instructions pack two i16s into word 0. So bit 0 is the low half of word 0,
 * bit 1 its high half, and word N (N >= 1) is bit N+1.
 */
/** An operand read out of the enemy's register file when the instruction fires. */
export interface RegRef {
    readonly reg: number;
}
/** A descriptor field: a decoded literal, or a register to resolve at fire time. */
export type Operand = number | RegRef;
/** Wrap a register id (0x2710.. for ints, 0x2720.. for floats) as an operand. */
export declare const reg: (id: number) => RegRef;
export declare const isReg: (operand: Operand) => operand is RegRef;
/** Reinterpret an i32 as the IEEE-754 single it was stored as. */
export declare function bitsToF32(bits: number): number;
/**
 * "Is this id actually a register?" — the caller supplies the register table.
 *
 * `ResolveInt`/`ResolveFloat` only redirect when the id names a field, and fall
 * through to the operand's own value otherwise (`EnemySlot.resolveIntOperand`,
 * `resolveFloatOperand`). So an indirect operand whose id is not in the table is
 * a literal wearing an indirect flag, and decoding it as a literal is exactly
 * what the interpreter would have done. Keeping the table on the caller's side
 * also stops this module from importing the sim layer.
 */
export type RegisterLookup = (id: number) => boolean;
/** Everything is a register: the structural default, used by the round-trip test. */
export declare const ALL_REGISTERS: RegisterLookup;
/** The inverse: the i32 word ZUN would have written for this single. */
export declare function f32ToBits(value: number): number;
/**
 * The ten words ops 96..104 hand the interpreter: the aim mode derived from the
 * opcode, the eight instruction words, then the flag mask.
 *
 * Shared by the translator and by `ShotDescriptor.test.ts` so the two can never
 * disagree about what "the instruction" is.
 */
export declare function shotWords(opcode: number, operands: ReadonlyArray<number>, operandFlags: number): number[];
/** The fifteen words ops 114/115 hand the interpreter: opcode, 13 words, flags. */
export declare function laserWords(opcode: number, operands: ReadonlyArray<number>, operandFlags: number): number[];
/** Ops 96..104 in order: the nine ways a launcher lays out its rings. */
export declare const SHOT_AIM_MODES: readonly ["aimedFan", "fixedFan", "aimedRing", "evenRing", "aimedTurnedRing", "turnedRing", "randomBand", "ringRandomSpeed", "randomAngleSpeed"];
export type ShotAimMode = (typeof SHOT_AIM_MODES)[number];
/** Bit positions in a shot instruction's `operandFlags`. */
export declare const SHOT_FLAGS: {
    readonly type: 1;
    readonly color: 2;
    readonly count: 4;
    readonly rings: 8;
    readonly speed: 16;
    readonly speed2: 32;
    readonly angle: 64;
    readonly angleStep: 128;
};
/**
 * Op 96..104 after decoding. `count` bullets per ring, `rings` rings, the two
 * speeds bracket a per-ring acceleration, and `angleStep` fans the rings apart.
 *
 * `transform` is the eighth word: a bitfield the launcher consults for the
 * youkai-only / human-only gates and the muzzle sound, never register-indirect.
 */
export interface ShotDescriptor {
    mode: ShotAimMode;
    /** `etama.anm` sprite group, the low i16 of word 0. */
    type: Operand;
    /** Palette row within that group, the high i16 of word 0. */
    color: Operand;
    /** Bullets in one ring. */
    count: Operand;
    /** Rings, laid out along `angleStep`. */
    rings: Operand;
    /** Speed on spawn, in px/frame. */
    speed: Operand;
    /** Terminal speed the bullet accelerates or decelerates toward. */
    speed2: Operand;
    /** Base angle, in radians, interpreted under `mode`. */
    angle: Operand;
    /** Angle between consecutive rings, in radians. */
    angleStep: Operand;
    transform: number;
}
/** The ten words `EnemySlot.dispatchShot` consumes, in its own order. */
export type ShotWords = [number, number, number, number, number, number, number, number, number, number];
/** Turn a decoded launcher back into the interpreter's word array. */
export declare function packShot(desc: ShotDescriptor): ShotWords;
/**
 * Decode the interpreter's word array. The inverse of `packShot`, up to operands
 * that carry an indirect flag but name no register — those decode as literals, and
 * `packShot` then clears the bit, which is what the interpreter was going to do
 * with them anyway. Pass a lookup that accepts every id to get strict equality.
 */
export declare function unpackShot(words: ReadonlyArray<number>, isRegister?: RegisterLookup): ShotDescriptor;
/** Bit positions in a laser instruction's `operandFlags`. */
export declare const LASER_FLAGS: {
    readonly color: 2;
    readonly angle: 4;
    readonly speed: 8;
    readonly tail: 16;
    readonly head: 32;
    readonly startLength: 64;
    readonly width: 128;
    readonly startTime: 256;
    readonly duration: 512;
    readonly despawn: 1024;
};
/**
 * Ops 114/115 after decoding. A beam is a segment from `tail` to `head` measured
 * along `angle`, `width` thick, that grows in over `startLength` frames, holds for
 * `duration`, then retracts over `despawn`. `startTime` delays the whole thing and
 * the two hitbox fields open and close the lethal window inside it, which is what
 * lets a laser telegraph before it can kill.
 */
export interface LaserDescriptor {
    /** Op 115 tracks the ship; op 114 keeps the operand angle absolute. */
    aimed: boolean;
    type: number;
    color: Operand;
    angle: Operand;
    speed: Operand;
    tail: Operand;
    head: Operand;
    startLength: Operand;
    width: Operand;
    startTime: Operand;
    duration: Operand;
    despawn: Operand;
    hitboxStart: number;
    hitboxEnd: number;
    flags: number;
}
/** The fifteen words `EnemySlot.spawnLaser` consumes, in its own order. */
export type LaserWords = number[];
/** Turn a decoded laser back into the interpreter's word array. */
export declare function packLaser(desc: LaserDescriptor): LaserWords;
/** Decode the interpreter's word array. The inverse of `packLaser`. */
export declare function unpackLaser(words: ReadonlyArray<number>, isRegister?: RegisterLookup): LaserDescriptor;
//# sourceMappingURL=ShotDescriptor.d.ts.map