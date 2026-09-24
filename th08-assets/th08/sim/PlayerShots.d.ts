/**
 * The retail player-shot layer: `Player.shots[128]`, the `.sht` firing walk, and
 * the integrator that moves them.
 *
 * Everything in this file is a transcription of four functions in `Player.cpp`:
 *
 *  - `FUN_00451500` (`:3288-3348`) owns the twenty-frame shooting window and
 *    decides *when* a volley is attempted;
 *  - `FUN_00450f60` (`:3090-3160`) picks the power tier and walks the firing
 *    chain, one entry per free slot;
 *  - `FUN_0044fb70` (`:2633-2680`) fills one shot slot from one entry - origin,
 *    offsets, velocity, hitbox, animation, sound, and the 妖怪 marker;
 *  - `FUN_00451150` (`:3166-3215`) moves every live shot, culls the ones that
 *    leave the field, and retires the ones whose script ends.
 *
 * The point of doing it this way is that the *weapon* stops being a description
 * the port wrote for itself. Damage, projectile count, cadence, spread, speed,
 * hitbox size, which option fires it, and which sprite it draws all come out of
 * the retail `.sht` through `parseShtTables`, and the numbers in the shipped
 * files are the ones the original's own balance was built from: `ply00a` fires
 * every five frames for 48 damage at tier 8 and every fifteen for 14 at the side
 * angles, which is 霊夢's weapon, not this file's opinion about it.
 *
 * Two callbacks in `g_PlayerShotUpdateCallbacks` are named here and not modelled,
 * because their bodies drive retail's ECL-timeline association (`Player+0xE2A44`
 * reservations and `player->timelines[]`) rather than a shot of their own: `4`
 * (`FUN_0044fe20`, 爱丽丝's doll anchor) and the per-frame `4`/`5`
 * (`FUN_004505d0`/`FUN_00450840`, the beams those anchors carry). Those entries are
 * *skipped* rather than approximated, and {@link PlayerShotPool.skipped} counts
 * exactly how many shots a given frame lost to that gap.
 */
import type { ShtPowerTable, ShtShotEntry } from '../format/ShtFile';
import { AnmVm, type AnmRng } from '../../engine/anm/AnmVm';
import type { AnmPack } from '../../engine/anm/AnmPack';
/** `Player.shots[128]` (`Player.hpp:180`, `C_ASSERT(sizeof(PlayerShot) == 0x484)`). */
export declare const PLAYER_SHOT_SLOTS = 128;
/** `state462`: 0 free, 1 live, 2 already spent on a hit but still drawn. */
export declare const SHOT_FREE = 0;
export declare const SHOT_LIVE = 1;
export declare const SHOT_SPENT = 2;
/** One slot, named after the `PlayerShot` offsets the decomp reads. */
export interface PlayerShot {
    /** `+0x462`. */
    state: number;
    /** `+0x2A4`, the sim position the collision pass boxes against. */
    x: number;
    y: number;
    /** `+0x43C`/`+0x440`, the velocity the integrator adds every frame. */
    vx: number;
    vy: number;
    /** `+0x44C`, the speed the `FUN_00450320` steerer ramps between 1 and 10. */
    speed: number;
    /** `+0x450`, the angle the sprite is turned to. */
    angle: number;
    /** `+0x454`. */
    timer: number;
    /** `ZunTimer::subFrame`, the fraction a slow-motion frame leaves unpaid. */
    timerSub: number;
    /** `ZunTimer::FUN_0040d3d0` for the last tick: did `timer` move that frame? */
    timerAdvanced: boolean;
    /** `+0x460` from `entry+0x1C`, in the same hundredths the damage cap uses. */
    damage: number;
    /** `+0x464` from `entry+0x22`; 4 and 5 are exempt from the playfield cull. */
    type: number;
    /** `+0x430`/`+0x434` from `entry+0x0C`/`entry+0x10`. */
    hitboxWidth: number;
    hitboxHeight: number;
    /** `+0x46C`: the focus byte as it stood when the shot left the ship. */
    focusedAtSpawn: number;
    /** `+0x46E` from `entry+0x24`, before the `+10` the script index needs. */
    animationIndex: number;
    /** `+0x470`: draw tinted 0x4040ff because the meter was 极度妖怪. */
    youkaiMark: number;
    /** `entry+0x1E`, kept signed: negative is what drops a 时符 past the threshold. */
    youkaiItemGate: number;
    /** `+0x474`/`+0x478`/`+0x47C`, resolved from `entry+0x2C`/`+0x30`/`+0x34`. */
    updateCb: number;
    renderCb: number;
    collisionCb: number;
    /** The chain entry this slot is riding, for the passes that re-read it. */
    entry: ShtShotEntry | null;
    /** `PlayerShot::vm`, the ANM script that says how long this shot lives. */
    vm: AnmVm;
}
/** What the firing layer needs from the game, one name per retail read. */
export interface PlayerShotWorld {
    /** `Player.primaryShtFile` / `secondaryShtFile`, chosen by `Player+3`. */
    primary: ShtPowerTable[];
    secondary: ShtPowerTable[];
    /** `Player+3`, the settled-focus byte: zero reads the primary table set. */
    focusByte: number;
    /** `g_GameManager.GetPower()`, in the same units as the tier gates. */
    power: number;
    /** `g_GameManager.shotType`, 0-11. */
    shotType: number;
    /** `Player+0xFDC`, non-zero while a spell card is playing. */
    cardRunning: boolean;
    /** `Player+0xFE0`, the card variant word. */
    cardPhase: number;
    /** `Player+0xFF4`, the card's own frame counter. */
    cardFrames: number;
    /** `Player.timerE2AC4`: the position inside the twenty-frame shot window. */
    shotWindow: number;
    /** `ZunTimer::FUN_0040d3d0` - the window timer moved on this frame. */
    shotWindowAdvanced: boolean;
    /** `(g_GuiMessageInputCurrent & 1) != 0`, the fire button. */
    shootHeld: boolean;
    /** `g_Gui.IsDialogPresent()`. */
    dialogPresent: boolean;
    /** `Player.bombState.frameStop` in the strict sense: 咲夜's stopped clock. */
    frameStop: boolean;
    /** `GameManager::GaugeIsExtremelyYoukai`. */
    extremelyYoukai: boolean;
    /** `Player+0x2B4`, the muzzle every `entry+0x20 == 0` shot starts from. */
    aimX: number;
    aimY: number;
    /** `PlayerOptionState::position` per slot, for the `entry+0x20` 1..4 origins. */
    optionPositions(): ReadonlyArray<{
        x: number;
        y: number;
    } | null>;
    /** `g_Player.optionHomingTarget`, read by `FUN_00450240`. */
    homingTarget: {
        x: number;
        y: number;
    } | null;
    /** `Player.tailPosition0`, the point `FUN_00450320` steers 霊夢's charms to. */
    tailX: number;
    tailY: number;
    /** `Player.optionStates[2].facingAngle`, which `FUN_00450110` fires along. */
    bladeAngle: number;
    /** `g_GameManager.IsWithinPlayfield`'s box, in field coordinates. */
    bounds: {
        left: number;
        right: number;
        top: number;
        bottom: number;
    };
    /** `g_EclGameTimeScale`, applied to the position step. */
    timeScale: number;
    /** The pack `g_PlayerAnmFilenames` named for this shot type. */
    anmPack: AnmPack | null;
    /** Cell size for the VM, so a script's own scale factors land on real pixels. */
    spriteSize(sprite: number): {
        x: number;
        y: number;
    } | null;
    /** `g_SoundPlayer.PlaySoundPositionedByIdx`. */
    onSound?(index: number, x: number): void;
    /** `g_Rng.GetRandomF32`, shared with the ECL layer so draws stay in sequence. */
    rng: AnmRng;
}
/** Is this frame one where the ship may shoot at all (`FUN_00451500`)? */
export declare function canAttemptShot(world: PlayerShotWorld): boolean;
/**
 * Which power tier fires, with the card-scripted override from
 * `FUN_00450f60:3103-3112` in front of the ordinary walk.
 *
 * The override is why 蕾米莉亚's cards change shape partway through: once the
 * card's own clock passes sixty frames, the script's variant word jumps the
 * table walk straight to tier 6 or 7 regardless of power.
 */
export declare function shotTablesFor(world: PlayerShotWorld): ShtPowerTable | null;
/**
 * The aim point `FUN_00450320` steers 霊夢's homing charms at.
 *
 * `EnemyManagerUpdate.cpp:724-746` does not choose the nearest enemy: while no
 * boss is being tracked it takes the *lowest* enemy on the screen, and once a
 * boss is in play it keeps the boss whose x is closest to the muzzle. The
 * `valid` flag is what makes the two rules exclusive, and `-999` is retail's
 * own sentinel (`Player.cpp:1496`), which every consumer tests as `< -100`.
 */
/** The shape of `Player.tailPosition0` plus its valid bit, as the aim rules see it. */
export type AimPoint = {
    x: number;
    y: number;
    valid: boolean;
};
/**
 * What that sentinel looks like between frames. `Player::Update` writes it back over the
 * aim point every frame after the firing chain has read it (`Player.cpp:1100`,
 * `FUN_0044d420:1493-1497`), so each frame chooses its target from scratch. Frozen so a
 * caller cannot write through the constant it hands {@link trackedAimPoint}.
 */
export declare const UNTRACKED_AIM: AimPoint;
export declare function trackedAimPoint(current: AimPoint, muzzleX: number, enemies: ReadonlyArray<{
    x: number;
    y: number;
    boss: boolean;
}>): AimPoint;
/**
 * The 128 slots, fired and walked exactly as `Player` walks them.
 *
 * The pool deliberately does not own the shot window timer, the power, or the
 * options: those live in `PlayerSim` and `OptionSystem`, and retail reaches them
 * through `this`. Passing them in is what keeps each half testable against its own
 * citation instead of against a simulation of the other.
 */
export declare class PlayerShotPool {
    readonly shots: PlayerShot[];
    /** Entries dropped this frame because their fire callback is not modelled. */
    skipped: number;
    private windowSeen;
    /** Kept so {@link clear} can rebuild slots without a fresh VM per shot. */
    private readonly rng;
    constructor(rng: AnmRng);
    /** Put every slot back, the way a stage reset does. */
    clear(): void;
    /** The live slots, in `FUN_004512f0`'s own slot order. */
    live(): PlayerShot[];
    /**
     * `FUN_00451500:3303-3322` plus `FUN_00450f60`. Returns the number of shots
     * that left the ship this frame.
     */
    fire(world: PlayerShotWorld): number;
    /**
     * Dispatch to `g_PlayerShotUpdateCallbacks` (`:209-211`), whose members are the
     * *fire* predicates: each one decides whether this entry fires now, and a few
     * rewrite the angle and speed after `FUN_0044fb70` has filled the slot.
     */
    private fireEntry;
    /** `FUN_0044fb70` (`:2633-2680`), field by field. */
    private initSlot;
    /**
     * Run the shot's own animation. A script the pack does not have makes the VM
     * finish immediately, which is retail's own answer: `FUN_00451150:3211` frees the
     * slot when `ExecuteScript` fails, so a missing script means an invisible shot
     * rather than a made-up one.
     */
    private attachScript;
    /**
     * `FUN_00451150` (`:3166-3215`): behaviour callback, then the position step, then
     * the playfield cull, then the animation. The order is the function's own, and
     * the cull is what a shot that has already left the field must not survive.
     */
    update(world: PlayerShotWorld): void;
    /**
     * `FUN_00451670:3416-3431`, the shot's own half of a landed hit.
     *
     * Three types pierce: 4, 5 and 6 keep their live state and score again next
     * frame, which is how 妖梦's blade and the beam carriers stay put. Everything
     * else becomes `state = 2`, which is not "gone" but "spent and still drawn" - the
     * render pass keeps it at `z = 0.2`, and only type 3 keeps landing hits while in
     * that state. The hit script is the firing script's neighbour, `+11` rather than
     * `+10`, and retail restores the roll the shot was drawn at across the switch, so
     * a charm that turns into a spark does not snap upright first.
     */
    markHit(shot: PlayerShot, world: PlayerShotWorld): boolean;
    /** `ZunTimer::Tick` (`Supervisor.hpp:384-389`) against the frame multiplier. */
    private tickTimer;
    /**
     * The per-frame callbacks, indexed from `entry+0x2C` through
     * `g_PlayerShotRenderCallbacks` (`:212-213`) into `slot+0x474`. Returning true is
     * retail's "this shot is done".
     */
    private stepBehaviour;
    /**
     * `FUN_00450320` (`:2869-2901`), 霊夢's charm: for its first forty frames, and
     * only on the frames where its own timer moved, it bends toward the tracked
     * enemy, keeping its speed inside one to ten. After that window it accelerates
     * back up by a third a frame, and either way it turns to face where it is going.
     */
    private steerToTail;
    /** `IsWithinPlayfield`, with the sprite's own half size added (`:3200-3208`). */
    private withinPlayfield;
}
//# sourceMappingURL=PlayerShots.d.ts.map