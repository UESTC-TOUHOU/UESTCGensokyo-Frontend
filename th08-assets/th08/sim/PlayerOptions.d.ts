/**
 * The option slots - 僚机 / 式神 / 分身 - and the way retail steers them.
 *
 * A `.sht` firing entry carries an option index at `+0x20`, and 98 of the 227
 * shipped entries are non-zero, i.e. fired from an option's position rather than
 * from the ship (`ShtFile.ts`'s `ShtShotEntry.option`). Those are not decoration:
 * they are how 紫's 式神, 妖梦's blades, 蕾米莉亚's four familiars and 爱丽丝's
 * dolls exist at all, and until now the port had no option model whatsoever, so
 * every one of those entries silently fell back to the ship.
 *
 * Retail keeps four `PlayerOptionState` records of `0x2F4` bytes at `Player+0x40C`
 * and picks one update route per (shot type, slot) out of
 * `g_PlayerOptionUpdateCallbacks` (`Player.cpp:168-181`). Which route a slot gets
 * is not a guess: the twelve rows line up entry-for-entry with the option indices
 * the eight shipped `.sht` files actually use, and {@link OPTION_ROUTES} cites
 * both sides of that agreement.
 */
import { AnmVm, type AnmRng } from '../../engine/anm/AnmVm';
import type { AnmPack } from '../../engine/anm/AnmPack';
/** One steered option. Fields are named after the `PlayerOptionState` offsets. */
export interface PlayerOptionState {
    /** `+0x2A4`, the position the shots come out of. */
    x: number;
    y: number;
    /** `+0x2BC`, the smoothed chase velocity. */
    vx: number;
    vy: number;
    /** `+0x2D4`-ish anchor the orbit routes swing around. */
    targetX: number;
    targetY: number;
    /** `+0x2C8` `state2C8`: 0 inactive, 1 starting, 2 running, 3 leaving. */
    state: number;
    /**
     * `+0x2EC`, the installed update route.
     *
     * Retail keeps this as a function pointer per slot, and that matters because the
     * pointer is not always the table's: `Player.cpp:749-750` overwrites slot 2 with
     * `g_PlayerRoute3ExitUpdateCallbacks` when 妖梦&妖妖 let go of focus. A port that
     * re-reads {@link optionRoutes} every frame cannot express that, which is how the
     * trailing blade went missing.
     */
    route: OptionRoute;
    /** `+0x2CC` `substate2CC`: which of {@link PlayerOptionState}'s modes is driving. */
    substate: number;
    /** `+0x2E0`, the option's own frame counter. */
    timer: number;
    /** `+0x2DC`, the swing angle the orbit routes advance every frame. */
    orbitAngle: number;
    /** The direction a route wants the sprite to face, in radians. */
    facingAngle: number;
    /** The sign of `vm.scale.x`, which is how retail turns the sprite around. */
    scaleSign: number;
    /**
     * `PlayerOptionState::vm`, the script that says what the body looks like.
     *
     * Retail runs it once per frame right after the route (`Player.cpp:915`), arms it
     * from the route's own `SetAndExecuteScriptIdx`, and steers its turns through
     * `SetInterrupt` - so the body's animation is part of the route, not something a
     * host decorates it with afterwards.
     */
    vm: AnmVm;
}
/** Four slots, matching retail's fixed array. */
export declare const OPTION_SLOTS = 4;
/**
 * What a slot looks like after retail arms it: `Player.cpp:678` `memset`s the
 * whole `0x2F4` bytes to zero and then writes only the two callbacks, so every
 * field here starts at zero - including the facing angle, which the route itself
 * sets to `-pi/2` when it first runs.
 */
export declare function blankOption(rng: AnmRng): PlayerOptionState;
/**
 * What an option needs from the game to move.
 *
 * `shotWindowOpen` is `Player.timerE2AC4 >= 0`, the twenty-frame window that
 * holding fire keeps lit (`Player.cpp:919`). It is what gates the switch to
 * enemy-chasing, which is why a 式神 drifts back beside the ship the moment the
 * player lets go of the button.
 */
export interface OptionWorld {
    playerX: number;
    playerY: number;
    shotWindowOpen: boolean;
    /**
     * `g_CurFrameInput & 1`, the fire button itself. The chase gives up only when
     * the twenty-frame window has closed *and* the button is off (`:2074`), so
     * this is not the same question as `shotWindowOpen`.
     */
    fireHeld: boolean;
    /** `Player.bombState.frameStop`: under a stopped clock the option holds station. */
    frameStop: boolean;
    /**
     * `Player+3`, `optionModeFlag`: 1 while the ship is held in focus.
     *
     * Only two routes read it - `FUN_0044ee70:2338` and `FUN_0044f5e0:2498` - and both
     * use it for the same two things: which colour to paint the body, and whether to
     * keep chasing the ship's recent path or hold the swing it already has.
     */
    modeFlag: number;
    /**
     * `Player+0xE2A98`, `movementDirection`: one of the nine states
     * {@link module:../../engine/core/Movement.movementDirectionIndex} returns.
     *
     * 妖梦's blade turns to face the way the ship is going (`:2410`, `:2501`), and the
     * nine-way index the port already keeps for the walk animation is the same enum:
     * the retail chain at `:646-663` tests the four diagonals as exact bit pairs and
     * then down, up, left, right, in that order.
     */
    movementDirection: number;
    /**
     * Whether the ship's own velocity is non-zero this frame.
     *
     * `Player.cpp:985` only walks the sixteen-frame position history when it is, so a
     * ship that stops flying leaves the trail where it was - which is what lets 妖梦's
     * blade keep circling the spot she stopped at.
     */
    moving: boolean;
    /** A frame's worth of candidate targets, in retail's own terms. */
    homingCandidates(): OptionCandidate[];
    /**
     * `g_EffectManager.SpawnEffect(47, position, 1, colour)`, the spark the 妖梦 and
     * 蕾米莉亚 routes throw every frame behind themselves (`:2407`, `:2549`, `:2554`,
     * `:2616`). The colour is retail's own `0xAARRGGBB` literal and is not optional:
     * two of the four spellings are half-transparent, so a route that skips the call
     * loses the trail entirely rather than drawing it faintly.
     */
    onTrail?(x: number, y: number, color: number): void;
    /**
     * `player->anmFile`, the pack the route's `SetAndExecuteScriptIdx` reads. A null
     * pack leaves the option with no body to draw, which is what happens before the
     * extractor has supplied `playerNN.anm`.
     */
    anmPack: AnmPack | null;
    /** `g_EclGameTimeScale`, the frame multiplier the option's own script advances by. */
    timeScale: number;
}
/** An enemy an option could chase. */
export interface OptionCandidate {
    x: number;
    y: number;
    /** `EnemyManagerUpdate::HasAttachedEnemy()` - part of a multi-body enemy. */
    hasAttached: boolean;
    /**
     * Retail never even walks this enemy in the pass that picks the target.
     *
     * `EnemyManagerUpdate.cpp:747-758` is nested twice more than its own comment history
     * suggests: at depth 4 it sits inside `if (!noSprite && !skipCombatA && !skipCombatB
     * && (!noDamageDuringStop || !frameStop))` (`:614-617`) and at depth 5 inside
     * `if (acceptsDamage)` (`:641`) - so a slot with no sprite, or one that ops 80/81 or a
     * death animation took out of the damage pass, cannot be *acquired*.
     *
     * It is an acquisition filter only. The clause that replaces a held target compares
     * y and nothing else (`:751-754`), and the only writers that drop a lock are
     * deactivation (`:448-452`, `EnemyManager.cpp:803-804`) and the option's own state
     * machine (`Player.cpp:2011`, `:2077`). So an enemy that goes invisible *while held*
     * keeps the lock until it stops existing, exactly like retail's raw pointer.
     *
     * Optional so a caller with no combat model can omit it; `undefined` means "walked".
     */
    skipsCombat?: boolean;
    /**
     * `EnemyManagerUpdateEnemy::slotIndex`, the identity the target is remembered by.
     *
     * Retail holds a pointer, so a target dies with its enemy: the update pass clears
     * `g_Player.optionHomingTarget` for every slot that is no longer active
     * (`EnemyManagerUpdate.cpp:448-452`) and the release path does the same
     * (`EnemyManager.cpp:803-804`). A reused position view cannot say that, so the
     * slot index is carried along and an absent index means the enemy is gone.
     * Omitted only by callers that have no identity to offer.
     */
    id?: number;
}
/**
 * `g_PlayerOptionUpdateCallbacks`, twelve rows of four (`Player.cpp:168-181`).
 *
 * `none` marks a slot retail leaves NULL. The other names are the retail function
 * number that drives the slot, so "which route" always resolves to a citation.
 * `ee70` is the one name here that has no steering body yet (`:2277-2382`): it sits on
 * row 9, which is solo 蕾米莉亚, and no shot type this build can select reaches row 9.
 * See {@link optionRoutes} for that limit and for why the row is still listed.
 *
 * `f2d0` deserves a word, because it is the one slot the twelve-row table cannot
 * express. 妖梦's blade (`ply03a`'s option 3 entries) is not armed by the main
 * table at all: `Player.cpp:737-753` gives shot type 3 a *second* arming path that
 * runs on focus **release**, installing `g_PlayerRoute3ExitUpdateCallbacks` on slot
 * 2 and seeding the sixteen-entry position history at `Player+0x2CC` that the blade
 * then rides. So for that shot type the table under-reports by one slot, and
 * {@link route3ExitSlot} is where the missing slot is stated.
 */
export type OptionRoute = 'none' | 'e3a0' | 'ea40' | 'eb70' | 'f930' | 'ee70' | 'f5e0' | 'f2d0';
/**
 * The shot types that carry the extra focus-release blade in slot 2
 * (`Player.cpp:737`, which tests `shotType == 3` and nothing else).
 */
export declare function route3ExitSlot(shotType: number): number | null;
/**
 * The matrix, with the `.sht` option indices that agree with each row.
 *
 * Rows 0-3 are the four pairs and 4-11 the eight solos, and each row is checked
 * against the firing entries of the `.sht` that `g_Player1ShtFiles` gives that
 * shot type (`EclGlobals`/`Player.cpp:49-57`):
 *
 * | row | route  | `.sht`            | option indices the file really uses |
 * |-----|--------|-------------------|---------------------------------|
 * | 0   | `e3a0` | `ply00a`/`ply00as`| 1 - and only on `ply00as`, 紫     |
 * | 1   | `ea40` | `ply01a`/`ply01as`| 1 - only on `ply01as`, 爱丽丝      |
 * | 2   | `eb70` | `ply02a`/`ply02as`| 1..4 - only on `ply02as`, 蕾米莉亚 |
 * | 3   | `f930` | `ply03a`/`ply03as`| 1,2 - only on `ply03as`, 妖妖      |
 * | 4   | none   | `ply00a` (solo 霊夢) | -                            |
 * | 5   | `e3a0` | `ply00as` (solo 紫) | 1                           |
 * | 6   | none   | `ply01a` (solo 魔理沙) | -                           |
 * | 7   | `ea40` | `ply01as` (solo 爱丽丝) | 1                         |
 * | 8   | none   | `ply02a` (solo 咲夜) | -                            |
 * | 9   | `ee70` | `ply02as` (solo 蕾米莉亚) | 1..4                     |
 * | 10  | `f5e0` | `ply03a` (solo 妖梦) | 3 - and slot 2 only, here   |
 * | 11  | `f930` | `ply03as` (solo 妖妖) | 1,2                       |
 *
 * That agreement is not something the table could be fitted to after the fact:
 * row 10 arms only slot index 2, and `ply03a` - the table shot type 10 loads -
 * is the only file that ever uses option 3.
 *
 * Rows 4..11 are the eight solos, and no build of this port can currently select one:
 * retail's screen indexes all twelve (`TitleScreen.cpp:1765` writes
 * `shotType = this->cursor` straight off the cursor), while the character list here
 * offers the four pairs. The limit is the menu rather than the model, so those rows
 * are listed and cited but not claimed as shipped behaviour until solo selection
 * exists.
 */
export declare const OPTION_ROUTES: readonly (readonly OptionRoute[])[];
/** The route per slot for one of the twelve shot types. */
export declare function optionRoutes(shotType: number): readonly OptionRoute[];
/** `Player.cpp:685-690`: a slot is only alive at all if its route is non-NULL. */
export declare function armedOptions(shotType: number): number[];
/**
 * The script each route arms its body with - the argument of the
 * `SetAndExecuteScriptIdx` at the head of that route's `case 1:`.
 *
 * | route | `Player.cpp` | body |
 * |-------|--------------|------|
 * | `e3a0` | `:2005` | 紫's 式神 |
 * | `ea40` | `:2176` | 爱丽丝's doll |
 * | `eb70` | `:2209` | one of 蕾米莉亚's four familiars |
 * | `ee70` | `:2285` | the same body, driven by the untranslated route |
 * | `f2d0` | `:2395` | 妖梦's exit blade |
 * | `f5e0` | `:2484` | 妖梦 solo's blade |
 * | `f930` | `:2582` | 妖妖's two blades |
 */
export declare const OPTION_SCRIPTS: Record<OptionRoute, number>;
/**
 * `g_EffectManager.SpawnEffect(47, position, 1, colour)`, the spark each route throws
 * behind itself. The three spellings are retail's own: `:2617` and `:2331` share
 * 0x80602050, the trailing blade at `:2408` and the unfocused solo blade at `:2550`
 * use 0x80405080, and the focused solo blade at `:2555` burns 0xFFF05080.
 */
export declare const TRAIL_SPARK = 47;
/**
 * Write one of retail's `0xAARRGGBB` literals onto a VM's `color1`.
 *
 * The routes assign to `vm.color1.d3dColor` whole, so a colour that leaves alpha at
 * zero really is invisible - `0x80405080` is a half-transparent violet, not a violet
 * on whatever alpha the body script happened to set.
 */
export declare function setD3dColor(vm: AnmVm, color: number): void;
/**
 * `g_Player.optionHomingTarget`, chosen in the enemy pass
 * (`EnemyManagerUpdate.cpp:747-758`), not by the ship.
 *
 * Retail's test is not "nearest enemy": an enemy qualifies only while its x is
 * within sixty-four pixels of the ship's aim column, it is not itself a launched
 * familiar, and it beats the current target only by being *further up the screen*.
 * The pass runs once per live enemy per frame, so a 式神 walks its aim steadily
 * upward through a formation instead of snapping to whatever is closest.
 *
 * "Not itself a launched familiar" is `TargetEnemyHelpersOverlay::HasAttachedEnemy`
 * (`EclManager.cpp:129-132`), which is `enemy+0x2DA4 != 0` - the pointer to the
 * enemy that launched it through one of ops 90..92, not a count of the children it
 * owns. `Enemy::FUN_0042b370` (`EnemyManager.cpp:421-463`) reads the same field to
 * hand half of a familiar's absorbed damage to that launcher, so the exclusion is
 * "aim at the body, not at a limb". The port's counterpart is `EnemySlot.linkedChild`
 * / `parentSlotIndex`, which is documented against the very same offset.
 *
 * The winner is compared against one anchor and aimed at another (`+0x2D34`
 * versus `+0x2D88`); our enemy slots carry a single position, so both are that.
 *
 * What this function must not do is *own* the answer. Both its `current` argument and
 * its return value are views into the caller's reused candidate array, and a view gets
 * rewritten with a different enemy the moment the active order shifts - which is
 * precisely the frame a target dies. Held by reference, the lock stops meaning "that
 * enemy" and starts meaning "whichever enemy is currently in view slot n", which is how
 * a 式神 ends up glued for thousands of frames to a launcher parked at x=-20, outside
 * the window it could never have been picked through. Retail cannot be fooled that way:
 * it holds a slot pointer and clears it in the frame the enemy goes inactive
 * (`EnemyManagerUpdate.cpp:448-452`, `EnemyManager.cpp:803-804`). So the id is carried
 * by the holder, in {@link OptionSystem.tick}, and this stays a pure chooser.
 */
export declare function pickHomingTarget(current: OptionCandidate | null, candidates: OptionCandidate[], aimX: number): OptionCandidate | null;
/**
 * The four option slots, their arming edge and their per-frame steering.
 *
 * Retail arms on the *rising edge* of focus and only for a pair shot type
 * (`Player.cpp:669-693`), and releases on the falling edge into a sixteen-frame
 * exit (`:723-746`) - which is the whole of why a 式神 appears when you press
 * Shift and drifts away when you let go, rather than being a permanent fixture.
 */
export declare class OptionSystem {
    readonly options: PlayerOptionState[];
    /** The RNG the body scripts draw through - retail shares one `g_Rng` with everything. */
    private readonly rng;
    /** `g_Player.optionHomingTarget`, chosen by {@link pickHomingTarget}. */
    homingTarget: OptionCandidate | null;
    /**
     * The system's own copy of the held target, which is what `homingTarget` always
     * points at.
     *
     * It exists so a lock cannot alias a candidate view. The views are reused every frame
     * (`StageRunner.candidateViews`), so an id read out of one after a shift describes
     * whoever moved into that view, and {@link pickHomingTarget}'s "dies with the enemy"
     * rule silently becomes "dies with the array index". Carrying the id in a copy the
     * caller owns is what keeps it a per-enemy rule, as retail's pointer is.
     */
    private readonly heldTarget;
    /** `Player+0x2B4`, the muzzle the shot origins and the x-window both use. */
    aimX: number;
    /** `Player+0x03`, the settled-focus byte the arming edge reads. */
    private focused;
    /** `Player+0x08`, counted up while focused; seven makes the ship a 妖怪. */
    focusFrames: number;
    /**
     * `Player.vectors2CC`, the sixteen newest ship positions, newest first.
     *
     * `Player.cpp:987-990` shifts the array up and writes the live position into slot 0
     * every frame the ship actually moves, so `[15]` is sixteen frames of flight behind
     * her. 妖梦's blade swings around exactly that point (`:2397`, `:2486`), which is why
     * it draws the arc she just flew rather than orbiting her.
     */
    private readonly trail;
    /**
     * `:756-757` / `:1702`: the next tick seeds the whole history at the ship.
     *
     * True from construction, because `:1702` fills all sixteen entries with the spawn
     * position before the first frame runs - a blade armed on frame one starts at the
     * ship rather than at the origin.
     */
    private trailSeed;
    /** `vectors2CC[15]`, the oldest sample. Zeroed until the first tick fills it. */
    get trailAnchorX(): number;
    get trailAnchorY(): number;
    constructor(rng: AnmRng);
    /** Drop everything, the way a stage reset does. */
    clear(): void;
    /**
     * `Player.cpp:664-666`: while a spell card is up, focus is *scripted*, not
     * pressed - the card's own bit 0 of `Player+0xFE0` drives it. Otherwise it is
     * the message-input focus bit.
     */
    setFocus(focus: boolean, shotType: number): void;
    /**
     * Seven settled focused frames is what makes the ship youkai
     * (`Player.cpp:713-714`, read back at `:783-789`). The port already keeps this
     * in `PlayerSim`, so it is exposed here rather than duplicated behind it.
     */
    get settledAsYoukai(): boolean;
    /** `:675-690` - zero every slot, install its route, and start it if it has one. */
    private arm;
    /**
     * `:1705-1727`, run once when the player object is created: a solo shot type
     * installs its option callbacks there and never touches them again, so the
     * permanent options of 紫, 爱丽丝, 蕾米莉亚, 妖梦 and 妖妖 are always out while
     * 霊夢's and 魔理沙's solos have none.
     */
    initShotType(shotType: number): void;
    /** The shared body of both arming paths: `memset`, install, start if non-NULL. */
    private install;
    /**
     * `:724-757` - every live slot walks out through its sixteen-frame exit, and shot
     * type 3 hands slot 2 to `g_PlayerRoute3ExitUpdateCallbacks` on its way past.
     *
     * That hand-over is the only place the twelve-row table is overridden, and it is
     * the whole of 妖梦's trailing blade: `:748` memsets the slot, `:749-752` install
     * `f2d0` and its renderer, and `:756-757` then fill all sixteen history entries
     * with where she stands, so the blade starts at the ship instead of snapping to
     * wherever she was a second ago.
     */
    private release;
    /**
     * One frame of every slot, in retail's slot order.
     *
     * The shot type is not an argument: which route a slot walks is its own installed
     * callback (`option+0x2EC`), because `:749-750` can replace it without the table
     * saying so. {@link install} is what copies the table into the slots.
     */
    tick(world: OptionWorld): void;
    /**
     * The route's `case 1:` entrance: hand the slot the body script its row of
     * {@link OPTION_SCRIPTS} names. `SetAndExecuteScript` runs the first instruction
     * immediately, which is what {@link AnmVm.attach} does.
     */
    private startBody;
    /** The `case 3:` leave: interrupt 5 is the routes' shared "go away" label. */
    private leaveBody;
    /**
     * `FUN_0044e3a0` (`Player.cpp:1996-2100`), the 紫 route: a single 式神 that
     * rides ninety-six pixels above the ship, turns to face the way it is travelling,
     * and - while fire is held and it has been out for ten frames - breaks off to
     * chase the enemy the field chose for it.
     */
    private stepChaser;
    /**
     * The facing flip at `:2016-2069`. Retail keeps it in the sprite's `scale.x`
     * sign and drives it off a three-state machine rather than off the sign of the
     * velocity, so a 式神 that stops dead still shows the way it last went.
     */
    private faceAlongTravel;
    /**
     * One branch of the facing machine.
     *
     * The scale sign is retail's own `if (scale.x < 0) scale.x = -scale.x` guard, which
     * only ever asks for a direction rather than toggling, so writing the wanted sign
     * is the same thing. The label is the part that used to be guessed wrong: every
     * branch that *turns* the sprite sends 2, and the two branches that come back to
     * rest send 1 - `:2021/2028/2039/2048/2057/2064`, read off the branch each one sits
     * in rather than off the scale sign it leaves behind, because one of the six pairs
     * 2 with a positive scale and the sign alone cannot name the label.
     */
    private turnChaser;
    /** `FUN_0044ea40` (`:2163-2200`), 爱丽丝's route: pinned thirty-two above. */
    private stepStation;
    /**
     * `FUN_0044eb70` (`:2205-2270`), 蕾米莉亚's route: four familiars, two of them
     * swinging out from a ±32 px anchor and two mirrored, each on a radius of eight.
     */
    private stepOrbit;
    /**
     * `FUN_0044f930` (`:2574-2632`), 妖妖's route: two blades, one on each side of the
     * ship, swinging in opposite directions on a radius of six.
     *
     * This is the whole of what holding Shift does to 妖梦&妖妖's weapon: `ply03as` fires
     * five of its nine max-power entries out of option 1 and option 2, so a port that
     * leaves these two slots still leaves the pair with a weapon whose bullets have no
     * muzzles. Unlike 紫's 式神 the route never chases an enemy and never writes a
     * colour - it just orbits, and throws sparks.
     */
    private stepBlades;
    /**
     * `FUN_0044f2d0` (`:2387-2472`), the blade 妖梦&妖妖 let go with.
     *
     * It is armed on the focus *falling* edge (`:748-755`) and swings around
     * `vectors2CC[15]` - the ship's position sixteen frames of movement ago - so it
     * traces the path she just flew instead of orbiting her. That anchor is what
     * `ply03a`'s `updateCb 8` entries fire along (`FUN_00450110:2817` reads
     * `optionStates[2].facingAngle`), which makes this route the muzzle of her normal
     * shot rather than a decoration.
     */
    private stepReleaseBlade;
    /**
     * `FUN_0044f5e0` (`:2474-2572`), solo 妖梦's blade: the same swing as the exit blade,
     * recoloured and re-eased by the focus byte.
     *
     * Row 10 of {@link OPTION_ROUTES}, and only a solo shot type can select it, so no
     * pair this build offers walks here. It is translated rather than stubbed because it
     * shares both the swing and the facing machine with {@link stepReleaseBlade}, and
     * because the constants it used to carry - an anchor at the ship instead of on her
     * trail, and a spark colour of `0xffff8080` - matched neither of the two spellings
     * the binary actually has.
     */
    private stepFacing;
    /**
     * The swing both 妖梦 routes share: `:2402-2405` and `:2491-2494` are the same four
     * lines with the radius as their only difference.
     *
     * The anchor chases `vectors2CC[15]` at one twentieth of the gap a frame, and the
     * body sits on the circle at the *sum* of anchor and offset, which is what lets the
     * blade cut inside the trail instead of trailing it by a constant eight pixels.
     */
    private swingOnTrail;
    /**
     * `:2410-2456`, the blade's own turn.
     *
     * The wrap-then-snap shape is the behaviour: a difference of more than half a
     * right angle is taken as "the other side of the circle" and the blade is put there
     * outright, and only a smaller one is eased at seven percent. Written as a plain
     * shortest-arc lerp the two cases collapse, and the blade slides through the
     * quarter turns it is supposed to jump.
     */
    private faceMovement;
    /** `:756-757` / `:1702`: every history entry becomes where the ship stands now. */
    private seedTrail;
    /**
     * `:985-991`, and only while the ship is actually moving.
     *
     * The array is newest-first, so the shift is a copy down the chain and `[15]` is the
     * oldest. A ship that stops flying leaves it exactly where it was, which is why 妖梦's
     * blade keeps circling the spot she paused at instead of sliding under her.
     */
    private rollTrail;
}
//# sourceMappingURL=PlayerOptions.d.ts.map