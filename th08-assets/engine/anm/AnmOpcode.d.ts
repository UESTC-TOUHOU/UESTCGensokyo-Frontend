/**
 * The Windows-era animation VM's instruction set.
 *
 * Every moving picture in these games -- enemy, bullet, background layer, HUD
 * panel -- is one `AnmVm` running a script out of an `.anm` pack. The numbers
 * below are the ones ZUN compiled against, taken from `AnmManager.hpp`, so a
 * script lifted straight out of the original data can run without a translation
 * layer in between.
 */
export declare const ANM_OPCODE: {
    readonly END_OF_SCRIPT: -1;
    readonly NOP: 0;
    readonly DELETE: 1;
    readonly STATIC: 2;
    readonly SPRITE: 3;
    readonly JMP: 4;
    readonly JMP_DEC: 5;
    readonly POS: 6;
    readonly SCALE: 7;
    readonly ALPHA: 8;
    readonly COLOR: 9;
    readonly FLIP_X: 10;
    readonly FLIP_Y: 11;
    readonly ROTATE: 12;
    readonly ANGULAR_VELOCITY: 13;
    readonly SCALE_GROWTH: 14;
    readonly ALPHA_TIME_LINEAR: 15;
    readonly ADDITIVE_BLEND_MODE: 16;
    readonly POS_TIME_LINEAR: 17;
    readonly POS_TIME_DECEL: 18;
    readonly POS_TIME_DECEL2: 19;
    readonly STOP: 20;
    readonly INTERRUPT_LABEL: 21;
    readonly ANCHOR_TOP_LEFT: 22;
    readonly STOP_HIDE: 23;
    readonly POS_MODE: 24;
    readonly INS25: 25;
    readonly ADD_U: 26;
    readonly ADD_V: 27;
    readonly VISIBLE: 28;
    readonly SCALE_TIME_LINEAR: 29;
    readonly Z_WRITE_DISABLE: 30;
    readonly INS31: 31;
    readonly POS_TIME: 32;
    readonly COLOR_TIME: 33;
    readonly ALPHA_TIME: 34;
    readonly ROTATE_TIME: 35;
    readonly SCALE_TIME: 36;
    readonly I_SET: 37;
    readonly F_SET: 38;
    readonly I_ADD: 39;
    readonly F_ADD: 40;
    readonly I_SUB: 41;
    readonly F_SUB: 42;
    readonly I_MUL: 43;
    readonly F_MUL: 44;
    readonly I_DIV: 45;
    readonly F_DIV: 46;
    readonly I_MOD: 47;
    readonly F_MOD: 48;
    readonly I_SET_ADD: 49;
    readonly F_SET_ADD: 50;
    readonly I_SET_SUB: 51;
    readonly F_SET_SUB: 52;
    readonly I_SET_MUL: 53;
    readonly F_SET_MUL: 54;
    readonly I_SET_DIV: 55;
    readonly F_SET_DIV: 56;
    readonly I_SET_MOD: 57;
    readonly F_SET_MOD: 58;
    readonly I_SET_RAND: 59;
    readonly F_SET_RAND: 60;
    readonly F_SIN: 61;
    readonly F_COS: 62;
    readonly F_TAN: 63;
    readonly F_ACOS: 64;
    readonly F_ATAN: 65;
    readonly NORMALIZE_ANGLE: 66;
    readonly I_JMP_EQ: 67;
    readonly F_JMP_EQ: 68;
    readonly I_JMP_NEQ: 69;
    readonly F_JMP_NEQ: 70;
    readonly I_JMP_LESS: 71;
    readonly F_JMP_LESS: 72;
    readonly I_JMP_LESS_OR_EQ: 73;
    readonly F_JMP_LESS_OR_EQ: 74;
    readonly I_JMP_GREATER: 75;
    readonly F_JMP_GREATER: 76;
    readonly I_JMP_GREATER_OR_EQ: 77;
    readonly F_JMP_GREATER_OR_EQ: 78;
    readonly WAIT: 79;
    readonly U_SCROLL: 80;
    readonly V_SCROLL: 81;
    readonly BLEND_MODE: 82;
    readonly INS83: 83;
    readonly COLOR2: 84;
    readonly ALPHA2: 85;
    readonly COLOR2_TIME: 86;
    readonly ALPHA2_TIME: 87;
    readonly INS88: 88;
    readonly RETURN_FROM_INTERRUPT: 89;
};
/** Which of the seven interpolated channels an `interp` timer belongs to. */
export declare const ANM_INTERP: {
    readonly POS: 0;
    readonly RGB1: 1;
    readonly ALPHA1: 2;
    readonly ROTATE: 3;
    readonly SCALE: 4;
    readonly RGB2: 5;
    readonly ALPHA2: 6;
    readonly LAST: 7;
};
/** Easing curves the `*Time` instructions pick from (`AnmInterpMode`). */
export declare const ANM_INTERP_MODE: {
    readonly LINEAR: 0;
    readonly EASE_IN: 1;
    readonly EASE_IN_CUBIC: 2;
    readonly EASE_IN_QUARTIC: 3;
    readonly EASE_OUT: 4;
    readonly EASE_OUT_CUBIC: 5;
    readonly EASE_OUT_QUARTIC: 6;
};
/**
 * The ten named registers a script can address instead of a literal.
 *
 * An instruction's `varMask` bit says which of its arguments is a register
 * reference, so `I0..I3`, `F0..F3` and the two counters are the whole working
 * set. The ids are the values that appear inside the bytecode.
 */
export declare const ANM_VARIABLE: {
    readonly I0: 10000;
    readonly I1: 10001;
    readonly I2: 10002;
    readonly I3: 10003;
    readonly F0: 10004;
    readonly F1: 10005;
    readonly F2: 10006;
    readonly F3: 10007;
    readonly IC0: 10008;
    readonly IC1: 10009;
};
export declare const ANM_MAX_ARGS = 6;
/** Bytes of an instruction header: opcode, size, time, varMask. */
export declare const ANM_HEADER_BYTES = 8;
//# sourceMappingURL=AnmOpcode.d.ts.map