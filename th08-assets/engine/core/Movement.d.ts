/**
 * Eight-way movement resolution: the shared input primitive behind a Touhou ship.
 *
 * A bullet-hell ship does not move along a normalised vector. It moves along one
 * of nine states -- idle, four cardinals, four diagonals -- chosen by a fixed
 * priority over the *held keys*, and each state carries its own per-axis speed.
 * The reference for this file is 東方永夜抄's `Player.cpp:646-668` (the index) and
 * `:793-817` (the speeds), but nothing below is specific to that game, which is
 * why it lives in the engine and not in a stage.
 *
 * Two consequences are worth stating out loud, because both are invisible until a
 * replay disagrees with a recording:
 *
 *  - pressing two opposite keys is not stillness. Down beats up and left beats
 *    right, so `up+down` walks down and `left+right+up` walks up-left;
 *  - a diagonal is not faster. The shipped speed tables store the diagonal figure
 *    already divided by sqrt 2, so the *magnitude* matches a straight line and only
 *    the per-axis component differs.
 */
/** The four direction bits, matching `Global.hpp:97-126`. */
export declare const MOVE_BITS: {
    readonly up: number;
    readonly down: number;
    readonly left: number;
    readonly right: number;
};
/** The nine movement states produced by {@link movementDirectionIndex}. */
export declare const MOVE_DIRECTION: {
    readonly idle: 0;
    readonly up: 1;
    readonly down: 2;
    readonly left: 3;
    readonly right: 4;
    readonly upLeft: 5;
    readonly upRight: 6;
    readonly downLeft: 7;
    readonly downRight: 8;
};
/**
 * Resolve held direction bits into one of the nine movement states.
 *
 * The four diagonals are tested first, as exact bit pairs, and then the single
 * axes in down, up, left, right order. That order is the behaviour: it is what
 * makes a replay of a recorded input stream put the ship where it stood in the
 * original, rather than somewhere near it.
 */
export declare function movementDirectionIndex(bits: number): number;
/**
 * The per-axis velocity for one movement state.
 *
 * `axis` applies to the four cardinals and `diagonal` to the four corners, which
 * is how the original stores them: two independent numbers per stance, read
 * straight out of the ship's data file.
 */
export declare function movementAxisSpeeds(index: number, axis: number, diagonal: number): [number, number];
//# sourceMappingURL=Movement.d.ts.map