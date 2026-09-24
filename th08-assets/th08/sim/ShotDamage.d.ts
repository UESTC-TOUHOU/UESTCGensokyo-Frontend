/**
 * The retail player-shot damage pipeline.
 *
 * Two halves of `th08web-ref` describe one frame of a hit, and neither of them
 * looks like "one bullet, one hit point":
 *
 *  - `Player::FUN_00451670` (`Player.cpp:3363-3498`) walks all 128 shot slots for a
 *    single enemy and returns the *sum* of every shot whose box overlaps the
 *    enemy's box, scaled by the youkai side of the meter;
 *  - `EnemyManagerUpdate.cpp:640-721` then caps that sum, pays the damage score,
 *    divides it by seven while a spell card is live, and divides it by nine for a
 *    boss inside an op-160 freeze.
 *
 * Applying `min(cap, shot.damage)` per bullet -- which is what this repo did -- gets
 * both ends wrong at once: a seven-shot volley that lands together is worth seven
 * separate hits instead of one capped frame, and a spell card takes full damage as
 * if nothing were different. The card divisor is the reason retail cards feel like
 * cards.
 */
import type { CollisionStats } from './Collision';
/** `EnemyManagerUpdate.cpp:684-685`: `if (damage >= 70) damage = 70;`. */
export declare const MAX_FRAME_DAMAGE = 70;
/** `EnemyManagerUpdate.cpp:694-697`: a live spell card divides non-bomb damage by 7. */
export declare const SPELL_CARD_DAMAGE_DIVISOR = 7;
/** `Player.cpp:3404`: while Sakuya's clock is stopped each shot pays a fifth. */
export declare const FREEZE_SHOT_DAMAGE_DIVISOR = 5;
/** `Player.cpp:3495-3496`: `damage = damage * 106 / 100` on the extreme youkai side. */
export declare const EXTREME_YOUKAI_DAMAGE_PERCENT = 106;
/** `EnemyManagerUpdate.cpp:710-716`: op 160 freezes damage to a ninth for a boss. */
export declare const FREEZE_TIMER_BOSS_DIVISOR = 9;
/**
 * `EnemyManagerUpdate.cpp:660-664`: the secondary hitbox (`setBoundsAlt`, op 78)
 * adds its own hit total back in, heavily damped. The Youmu team damps it harder
 * because her two hitboxes overlap so much that the raw sum would double-count.
 */
export declare const SECONDARY_HITBOX_DIVISOR = 1.7;
export declare const SECONDARY_HITBOX_DIVISOR_TEAM_C = 6.5;
/** `Player.cpp:1728-1731`: the damage-to-时符 exchange rate, per ship flavour. */
export declare const DAMAGE_ORB_THRESHOLD_SOLO_HUMAN = 27;
export declare const DAMAGE_ORB_THRESHOLD_OTHER = 40;
/** Shot types whose secondary hitbox is damped by 6.5 (`shotType` 3 and 11). */
export declare const SECONDARY_HITBOX_DAMPED_TEAMS: readonly [3, 11];
/** The ship-side conditions the pipeline reads. */
export interface ShotDamageContext {
    /** `g_Player.bombState.frameStop` -- Sakuya's clock-stop cards. */
    frameStop: boolean;
    /** `GameManager::GaugeIsExtremelyYoukai`. */
    extremelyYoukai: boolean;
    /** `g_Spellcard.IsActive()`. */
    spellActive: boolean;
    /** Raw 0..11 shot type, which picks the secondary-hitbox damping. */
    shotType: number;
    /** Optional out-param: count the pair tests, for the debug overlay. */
    stats?: CollisionStats;
}
/**
 * One live player shot, seen from the sim side.
 *
 * The host owns the shot's real storage and hands over a view whose `active` setter
 * can retire it. `radius` rounds the box out to a square, which is what a
 * presentation-layer pellet wants.
 *
 * `halfWidth`/`halfHeight` are the shot's own box. `FUN_00451670:3391` builds it
 * from `PlayerShot::hitboxSize` through `PlayerBuildAabb`, which halves it, and
 * `FUN_0044fb70:2648-2649` fills that from `entry+0x0C`/`entry+0x10` for *every*
 * shot - so a 霊夢 shot carries the 18x48 box its `.sht` says, and the "only the
 * homing options write a hitbox" reading was wrong. A view that omits both falls
 * back to `radius`, which is how the pre-`.sht` paths keep working.
 */
export interface ShotView {
    readonly x: number;
    readonly y: number;
    readonly damage: number;
    active: boolean;
    radius?: number;
    halfWidth?: number;
    halfHeight?: number;
}
/** The enemy-side conditions the pipeline reads. */
export interface ShotDamageTarget {
    /** `EMUF1_BOSS` (`enemy+0x3324` bit 1, owned by op 127). */
    boss: boolean;
    /** `EMUF1_DAMAGEABLE`: HP subtraction is gated separately from the score. */
    damageable: boolean;
    /** `enemy+0x5354`, armed by op 160 and counted down once per frame. */
    freezeFrames: number;
}
export interface ShotDamageResult {
    /** HP actually removed, after every divisor. */
    damage: number;
    /** `AddScore(10 * (damage / 5))`, off the capped pre-card value (`:686`). */
    score: number;
    /** 时符 earned off the damage accumulator this frame. */
    timeOrbs: number;
}
/**
 * One shot's contribution (`Player.cpp:3401-3404`).
 *
 * Under a clock stop a shot still lands, it just lands for a fifth -- and never for
 * zero, which is what keeps Sakuya's own card from becoming a no-op against a
 * low-damage weapon.
 */
export declare function shotContribution(damage: number, frameStop: boolean): number;
/** `Player.cpp:3495-3496`, applied to the summed hit before the caller caps it. */
export declare function applyYoukaiDamageBonus(sum: number, extremelyYoukai: boolean): number;
/** The damping applied to a secondary hitbox's own hit total (`:660-664`). */
export declare function secondaryHitboxDivisor(shotType: number): number;
/**
 * Fold a secondary hitbox's hits into the primary total.
 *
 * The division is float, then truncated once at the end -- `(i32)((f32)damage +
 * (f32)extraDamage / 1.7f)` -- so rounding happens on the sum, not per term.
 */
export declare function addSecondaryHitbox(primary: number, extra: number, shotType: number): number;
/**
 * `EnemyManagerUpdate.cpp:684-718` for one enemy and one frame.
 *
 * `rawDamage` is what `FUN_00451670` returned, already youkai-scaled. `bombHit` is
 * the flag `FUN_00451670` raises at `Player.cpp:3490` when the damage came out of a
 * bomb's region while the clock was stopped.
 *
 * A bomb that lands during a live card is written as
 * `FUN_0042DFF0() ? damage / 2.5 : 0`, and `FUN_0042DFF0` reads bit 7 of
 * `g_Spellcard.flags` -- which `StartSpell` clears (`Spellcard.cpp:770`) and nothing
 * in the whole decompile ever sets. So the `/2.5` arm is dead in 永夜抄 and a stopped
 * clock contributes no card damage at all; that is modelled here rather than
 * invented.
 */
export declare function resolveShotDamage(rawDamage: number, target: ShotDamageTarget, ctx: ShotDamageContext, bombHit?: boolean): ShotDamageResult;
/**
 * `Player.cpp:3406-3414` plus `:1728-1731`.
 *
 * Every hit is added to a per-enemy accumulator (capped at 50 first, `:3435`), and
 * each time it crosses the threshold the accumulator is reduced and -- on the
 * extreme human side only -- three 时符 drop where the shot was. That exchange is
 * the human team's answer to the youkai team's damage bonus, so it has to run off
 * the same numbers the damage does.
 */
export declare function advanceHitAccumulator(accumulator: number, damage: number, threshold: number, extremelyHuman: boolean): {
    accumulator: number;
    timeOrbs: number;
};
/**
 * `GameManager::IsSoloHuman` (`GameManager.hpp:154-157`): one of the four solo
 * human ships, which is the flavour that gets the tighter exchange rate.
 */
export declare function isSoloHumanShotType(shotType: number): boolean;
/** Which exchange rate the ship in play uses (`Player.cpp:1728-1731`). */
export declare function damageOrbThreshold(shotType: number): number;
//# sourceMappingURL=ShotDamage.d.ts.map