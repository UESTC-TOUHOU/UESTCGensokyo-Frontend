/**
 * Headless playback of retail `.rpy` replays.
 *
 * This is the P2 acceptance gate from `.scratch/PLAN-v3-th08-90.md`: take a
 * recording ZUN shipped inside `th08.dat`, restore the stage state it names,
 * feed its own input stream through the translated scripts, and read back what
 * the run scored. Everything the player can be wrong about -- bullet geometry,
 * collision boxes, damage, item drops, the score table -- shows up in that one
 * number, which is what makes it an objective yardstick rather than a taste
 * judgement.
 *
 * The playback contract is the retail one (`ReplayManager.cpp`):
 *
 *  - `AddedCallbackDemo:582-607` restores rank, lives, bombs, power, graze, the
 *    point-item value and threshold, the youkai gauge, the clock hour and the
 *    RNG seed from the stage block, then points the reader at `+0x24`.
 *  - `OnUpdateHighPrioDemo:329-330` consumes one `u16` of held buttons per
 *    frame. The recorder wrote a zero word at the stream head before its first
 *    frame, so stream index `i` *is* frame `i`; no offset is needed here.
 *  - Buttons are held state, but `bomb` is a press: the game asks
 *    `wasKeyPressed('bomb')`, so the driver edges the bit the way `Player.cpp`
 *    does. Shoot and focus stay held.
 *
 * The ship's own weapon is not in the sim -- retail keeps it in the player
 * object, and so does this repo -- so the driver borrows the game's exact wiring:
 * `Player.shoot()` into a `BulletSystem`, then `damageEnemiesAt()`. Anything else
 * would reconcile the replay against a weapon the shipped game never uses.
 */
import type { StageReplay } from '../../th08/format/ReplayFile';
import type { Difficulty } from '../../th08/sim/GameState';
import type { StageRoute } from './StageRoute';
import type { CharacterId } from './types';
/**
 * Which team a raw shot type flies.
 *
 * The reference lists four teams and then eight solos, two solos per team in
 * team order (`ScoreDat.hpp:56-67`), so a solo folds back onto its team with
 * `(shotType - 4) / 2`. This repo has one weapon table per team, so playback
 * needs the team and not the solo.
 */
export declare function teamForShotType(shotType: number): CharacterId;
/** The stage block a replay actually recorded, or `null` when it recorded none. */
export declare function recordedStage(raw: Uint8Array): {
    stage: StageReplay;
    shotType: number;
    difficulty: Difficulty;
} | null;
/** One replayed stage, with everything the gate needs in order to judge it. */
export interface ReplayOutcome {
    /** Recording this came from, e.g. `demorpy0`. */
    demo: string;
    route: StageRoute;
    difficulty: Difficulty;
    character: CharacterId;
    /** Raw retail shot type, so a mis-mapped team is visible in the report. */
    shotType: number;
    /** Frames the recording holds. */
    frames: number;
    /** Frames the sim actually ran before the stage ended or the stream ran out. */
    ran: number;
    /** True when the script reached its own ending inside the recorded frames. */
    cleared: boolean;
    /** Message from the first tick that threw, or `''`. */
    thrown: string;
    /** First slot whose position or HP went non-finite, or `''`. */
    badSlot: string;
    /** Distinct ECL operands the sim refused to run. */
    refusals: string[];
    /** Our score at the last frame run. */
    score: number;
    /** Score the recording says the stage ended on. */
    recordedScore: number;
    /** ours / theirs, the single number the fidelity ladder is tracked by. */
    scoreRatio: number;
    /** ours - theirs, signed. */
    scoreDelta: number;
    /**
     * Score at the last frame the recording was still playing.
     *
     * `recordedScore` is one number: what the stage ended on. A run that outlives the
     * envelope is therefore not comparable to it any more -- past that frame the
     * recorded ship stops shooting and the stage cannot end, so every extra point is
     * earned in a tail ZUN never performed. This is the number the ladder reads.
     */
    scoreAtEnvelope: number;
    /** `scoreAtEnvelope / recordedScore`. */
    envelopeScoreRatio: number;
    /** Deaths spent inside the envelope, which is the window the ceiling is written for. */
    envelopeDeaths: number;
    graze: number;
    pointItems: number;
    /**
     * 时符 banked by the end of the run. The gate does not score it, but it is the number
     * four other systems compare against `g_TimeRequirementParams`, so the replay has to say
     * what it reached: that is what proves the threshold work is inert for these four runs.
     */
    timeOrbs: number;
    power: number;
    lives: number;
    bombs: number;
    /** Times the ship was hit, which is how a mis-scaled hitbox shows up. */
    deaths: number;
    /**
     * The frame of each hit. ZUN's own dodge line is a known quantity, so the
     * first frame where we take a hit is the first frame where one of our
     * patterns disagrees with his -- a location, not just a verdict.
     */
    deathFrames: number[];
    /**
     * Frames on which the engine's own collision test landed, with the geometry of
     * the deepest shot in each. Only collected when `immortal` is set, because the
     * live path retires the bullets that land and so cannot be measured afterwards.
     */
    hitLog: {
        f: number;
        type: number;
        radius: number;
        dx: number;
        dy: number;
        laser: boolean;
    }[];
    /** Frames with at least one landed test. Equals `deaths` unless `immortal`. */
    hitFrames: number;
    /** Boss gauge at the last frame run, as `hp/max`, or `''` with no live boss. */
    bossEnd: string;
    /** Spell card running at the last frame run, or `''`. */
    spellEnd: string;
    bombsUsed: number;
    focusFrames: number;
    shootFrames: number;
    peakBullets: number;
    peakEnemies: number;
    /**
     * One past the last frame whose recorded word still carries the fire button.
     *
     * A recording does not stop when the playable part does: retail keeps walking the
     * stream through the result screen, and the demo's own Ctrl (TH_BUTTON_SKIP) is
     * held to hurry it along. Everything past this frame is a ship standing still
     * with the gun off, which is why the gate measures the dodge against the envelope
     * rather than against `frames`.
     */
    playableFrames: number;
    /** Frames on which a boss life bar was live. Zero means the run never fought. */
    bossFrames: number;
    /** Frame the script reached its own ending, or -1 when it never did. */
    clearFrame: number;
}
/**
 * Replay one recorded stage against the translated script that owns it.
 *
 * `maxFrames` caps a run so a stage that ignores its ending cannot spin forever;
 * it defaults to the whole recording.
 */
export declare function playReplay(demo: string, raw: Uint8Array, options?: {
    maxFrames?: number;
    seedOverride?: number;
    bulletRadiusScale?: number;
    /** Run the collision test but never spend a life, so a whole stage can be measured. */
    immortal?: boolean;
}): Promise<ReplayOutcome>;
//# sourceMappingURL=RetailReplay.d.ts.map