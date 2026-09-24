/**
 * One enemy slot in the 480-entry pool (EnemyManager.enemies[481]).
 *
 * This is the concrete implementation of EnemyCtx that the translated
 * ECL generators write to. It holds the register file, the position,
 * the generator instance, and the per-frame update state.
 */
import type { EnemyCtx } from '../danmaku/EnemyCtx';
import { type LaserDescriptor, type ShotDescriptor } from '../danmaku/ShotDescriptor';
import type { GameState } from './GameState';
import type { BulletPool } from './BulletPool';
import type { SeTick } from './BulletTransform';
import type { LaserPool } from './LaserPool';
import type { EnemyManager } from './EnemyManager';
import type { ItemPool } from './ItemPool';
import type { EffectPool } from './EffectPool';
import type { AnmPack } from '../../engine/anm/AnmPack';
/** One coloured segment of a boss life bar (ECL op 158 SETLIFEBARSLICE). */
export interface GaugeSlice {
    start: number;
    stop: number;
    /** Packed RGB, or -1 for the retail default gradient. */
    color: number;
}
/** One-shot visual request emitted by an ECL effect opcode. */
export interface SlotFx {
    kind: 'burst' | 'aura';
    x: number;
    y: number;
    angle: number;
    color: number;
    scale: number;
    /** ANM script id the original would have played. */
    script: number;
}
/**
 * One spell card as the two ECL drivers ended it. `captured` is the case that
 * pays; a card whose clock ran out is a miss, and the time left on the plate at
 * the break decides the reward, exactly like `Spellcard::EndSpell`.
 */
export interface SpellResult {
    name: string;
    owner: string;
    /** Bonus still standing at the break — what the capture is worth. */
    bonus: number;
    /** Bonus the card opened with, for the practice screen's best-of table. */
    fullBonus: number;
    /** Countdown length the card declared (`Spellcard::timer114`). */
    timerFrames: number;
    /** Frames left on the clock at the break (`Spellcard::timer108`). */
    remainingFrames: number;
    /** Frames the card was up before it ended. */
    elapsedFrames: number;
    /** Op 155: this countdown never charges a card, so capture pays flat. */
    noTimeoutPenalty: boolean;
    captured: boolean;
    /**
     * `Spellcard::flags` bit 5: the id was in `g_LastSpellNumbers`, so a miss says
     * "Last Spell Failed" instead of "Spell Bonus Failed" (`Spellcard.cpp:1209`).
     */
    isLastSpell: boolean;
}
/**
 * The register tables live in `core/EclRegisters.ts` so the translator can read
 * them without importing the sim layer; they are re-exported here because that
 * is where the slot that resolves them has always advertised them from.
 */
import { ECL_GAME_TIME_SCALE, FLOAT_FIELD_BY_ID, INT_FIELD_BY_ID, WRITABLE_FLOAT_FIELD_BY_ID } from '../core/EclRegisters';
export { ECL_GAME_TIME_SCALE, FLOAT_FIELD_BY_ID, INT_FIELD_BY_ID, WRITABLE_FLOAT_FIELD_BY_ID };
/**
 * One write the slot refused, or one motion op that got handed a non-finite
 * operand. The pool's transforms and life are deliberately not allowed to hold
 * `NaN`: see the comment on `_px`.
 */
export interface SlotRefusal {
    /** Guard that fired: `posX`, `hp`, `moveArc`, `linkChild`, ... */
    op: string;
    /** Index in the 480-entry pool. */
    slot: number;
    /** ECL sub the slot is running; with `slot` this names the instruction. */
    sub: number;
    /** `enemy+0x2D88` frame counter, so a sweep can say *when*. */
    timer: number;
    /** The operands that were refused. */
    args: number[];
    /** Caller chain trimmed to the frames that identify the offending op. */
    at: string;
}
/**
 * Take and clear the refusal log.
 */
export declare function drainSlotRefusals(): SlotRefusal[];
export declare class EnemySlot implements EnemyCtx {
    active: boolean;
    slotIndex: number;
    f0: number;
    f1: number;
    f2: number;
    f3: number;
    f4: number;
    f5: number;
    f6: number;
    f7: number;
    ef0: number;
    ef1: number;
    ef2: number;
    ef3: number;
    ef4: number;
    ef5: number;
    ef6: number;
    ef7: number;
    i0: number;
    i1: number;
    i2: number;
    i3: number;
    i4: number;
    i5: number;
    i6: number;
    i7: number;
    ei0: number;
    ei1: number;
    ei2: number;
    ei3: number;
    ei4: number;
    ei5: number;
    ei6: number;
    ei7: number;
    ci0: number;
    ci1: number;
    ci2: number;
    ci3: number;
    cxi0: number;
    cxi1: number;
    cxi2: number;
    cxi3: number;
    cxf0: number;
    cxf1: number;
    cxf2: number;
    cxf3: number;
    /**
     * `context + 0x68` / `+ 0x6C` (registers 0x276e / 0x276f): the two spare floats
     * that sit between `ci0..3` (+0x58) and `cxi0..3` (+0x70). Scripts use them
     * as a scratch point -- `ecldata1` sub 38 parks an offset sprite position in
     * them to measure a bearing -- and they are copied into a familiar with the
     * rest of the 0x18..+0x90 context block.
     */
    cf0: number;
    cf1: number;
    get param0(): number;
    set param0(v: number);
    get param1(): number;
    set param1(v: number);
    get param2(): number;
    set param2(v: number);
    get param3(): number;
    set param3(v: number);
    get fparam0(): number;
    set fparam0(v: number);
    get fparam1(): number;
    set fparam1(v: number);
    get fparam2(): number;
    set fparam2(v: number);
    get fparam3(): number;
    set fparam3(v: number);
    private _px;
    private _py;
    private _pz;
    get _x(): number;
    set _x(v: number);
    get _y(): number;
    set _y(v: number);
    get _z(): number;
    set _z(v: number);
    private _ph;
    private _pmaxHp;
    get _hp(): number;
    set _hp(v: number);
    get _maxHp(): number;
    set _maxHp(v: number);
    /**
     * `enemy+0x2D70 / +0x2D74`, written by op 77. Retail stores the *full* extent --
     * `PlayerBuildAabb` (`Player.cpp:3501-3507`) halves it -- and
     * `EnemyManager.cpp:172` files 24 into it at spawn, so 24 is the default here too.
     */
    private boundsW;
    private boundsH;
    /**
     * `enemy+0x2D7C / +0x2D80`, the *secondary* hitbox armed by op 78. Retail keeps it
     * separate from the op-77 box and runs a second `FUN_00451670` pass against it
     * (`EnemyManagerUpdate.cpp:654-666`), which is how a long boss can be shot through
     * its body and its wings at once. Zero on both axes means "no secondary box".
     */
    private altBoundsW;
    private altBoundsH;
    anmScript: number;
    /**
     * The six primary scripts, in retail argument order: straight, turn-left,
     * turn-right, back-to-straight-from-left, back-to-straight-from-right, spare.
     * `SetPrimaryAnmScripts` (`EclDependencies.cpp:462-472`) files them at
     * +0x3332, +0x3338, +0x333A, +0x3334, +0x3336 and +0x333C - deliberately not
     * in address order, so the slot order here is the operand order.
     */
    anmScripts: number[];
    /** `+0x332E`: 0 straight, 1 left, 2 right, -1 for the 0xFF "never set" mark. */
    anmDirection: number;
    /**
     * Bit 2 of `+0x3328`. Ops 58-61 set it, which retargets every later script id
     * from `enemy.anm` onto the stage's own `stgNNenm.anm` (`FUN_00423150` picks
     * the pack off the same bit at `EclDependencies.cpp:853-855`).
     */
    anmUseStagePack: boolean;
    /**
     * Retail runs one ANM script per enemy alongside its ECL: the sprite cycle,
     * the spin, the scale-in and the fade all live in that bytecode. When a pack
     * is wired this slot drives a real VM instead of approximating from the
     * lifted frame table.
     */
    private anm;
    /** Bytecode store handed down by the manager; null keeps the legacy path. */
    anmPack: AnmPack | null;
    /** The stage's own `stgNNenm.anm`, used while `anmUseStagePack` is set. */
    anmPackAlt: AnmPack | null;
    /** Manifest name of the stage pack, so the adapter can find its atlas page. */
    anmStageName: string;
    /**
     * Collision radius in pixels for an ECL bullet type, supplied by the host so
     * the sim stays free of asset-table knowledge. Null keeps `BULLET_HIT_RADIUS`.
     */
    bulletRadiusFor: ((type: number) => number) | null;
    /**
     * Drawn half-size for an ECL bullet, which is what retail's off-field test
     * measures with: a 48px eyeball leaves the array sooner than a pellet.
     */
    bulletSizeFor: ((type: number, color: number) => number) | null;
    /** Sprite cell the ANM script asked for, or null when it draws nothing. */
    anmSprite: number | null;
    /** Interpolated draw scale and alpha coming out of the same script. */
    anmScale: number;
    /** Sign of the script's X scale: the two turn cycles are one sprite mirrored. */
    anmFlipX: boolean;
    anmAlpha: number;
    /**
     * `EMUF1_HAS_BEEN_IN_BOUNDS` (bit 24 of 0x3324): set the first frame the
     * sprite rectangle overlaps the playfield. The off-screen retire below only
     * arms after this, which is what lets the scripts spawn bosses and helpers
     * above the top edge without them vanishing on their first step.
     */
    hasBeenInBounds: boolean;
    /**
     * `EMUF1_ALLOW_OFFSCREEN` (`0x3324` bit 28, the same bit ops 79/80/81 address as
     * `op79Bit28`): opt out of the off-screen retire. Nothing else in the script
     * layer can keep a helper alive above the top edge, so this is what a launcher
     * node relies on to survive its own entry movement.
     */
    get allowOffscreen(): boolean;
    /**
     * `EMUF1_NO_SPRITE` (`0x3324` bit 4): the slot stays out of the draw list
     * entirely (`EnemyManagerUpdate.cpp:985-993` buckets a live enemy for drawing
     * only while this bit is clear). Scripts reach it through op 79 with `v & 8`,
     * op 80 with `v & 8` to set it and op 81 with `v & 8` to clear it.
     */
    get noSprite(): boolean;
    /**
     * `LinkedChildFlags1::linkedChild` (`EclRunLow.inl:134`, bit 8 of 0x3324): this
     * slot was launched by one of ops 90..92 and belongs to `parentSlotIndex`. A
     * linked child takes no player collision, hands half of every hit it absorbs to
     * its parent's life bar, and cannot launch children of its own.
     */
    linkedChild: boolean;
    /** `enemy+0x2DA4`: the slot that launched this familiar, or -1 for none. */
    parentSlotIndex: number;
    /**
     * `EMUF1_INHERIT_PARENT_POSITION` (set by op 92, read back as
     * `copyFollowVelocity` at `EnemyManagerUpdate.cpp:492-500`): the familiar's own
     * coordinates become an offset and it rides on top of the parent's position.
     */
    followParentPosition: boolean;
    /** `enemy+0x3380`: linked children currently hanging off this slot. */
    childCount: number;
    /** `enemy+0x2D34` for a following child: its own, parent-relative position. */
    private ownX;
    /** Own position for Y (`enemy+0x2D34`). */
    private ownY;
    /** `enemy+0x2E08`: score paid out when this slot dies (retail default 100). */
    scoreValue: number;
    /**
     * `enemy+0x3304`: item type this slot drops when it dies. -2 (the value ops
     * 90..92 pass for a familiar) means nothing falls out of it.
     */
    dropType: number;
    /**
     * `EMUF1_SUPPRESS_DEATH_EFFECTS` (`0x3324` bit 10): set by the card-capture chain
     * payoff right before the wipe, so a familiar that is already bursting into time
     * orbs does not also play its own death effect (`EnemyManager.cpp:287`).
     */
    get deathEffectsSuppressed(): boolean;
    set deathEffectsSuppressed(value: boolean);
    /**
     * `enemy+0x3308`: extra `ITEM_POINT` grants queued to fall out of this slot when
     * it dies (`EnemyManager.cpp:854-863`), written by timeline ops 11/12.
     */
    pointDrops: number;
    /**
     * `enemy+0x330C`: the same queue for `ITEM_POWER_SMALL`, which turns into
     * `ITEM_POINT` once power is capped at 128 (`EnemyManager.cpp:846-849`).
     */
    powerDrops: number;
    /**
     * Sprite facing. Retail only feeds the drawn rotation from the heading for the
     * trail VMs (`enemy+0x3324` bit 25), so this stays a field of its own that the
     * ANM VM owns; the ECL heading is `heading` below.
     */
    rotAngle: number;
    /** Per-frame spin applied to `rotAngle` while no ANM VM owns the sprite. */
    rotationRate: number;
    /** `enemy+0x2DD0` (register 0x275a): tween origin armed by ops 64/66/72/73. */
    originX: number;
    /** Tween origin for Y (`enemy+0x2DD4`, 0x275b). */
    originY: number;
    /** Tween origin for Z (`enemy+0x2DD8`, 0x275c). */
    originZ: number;
    /** ECL sub id this slot was spawned with, the key into the shot tables. */
    subId: number;
    /** `enemy+0x3324`. Ops 79/80/81 are the only script writers; see `noSprite`. */
    flags: number;
    /** `enemy+0x3328`. Only the op 79/80/81 selector and op 83's flash bit. */
    flags2: number;
    invulnerable: boolean;
    damageEnabled: boolean;
    /**
     * `EMUF1_NO_DAMAGE_DURING_STOP` (`enemy+0x3324` bit 31), owned by op 183
     * (`EclRunHigh.inl:1048-1050`). While Sakuya's clock is stopped the whole combat
     * pass is skipped for a slot that armed this (`EnemyManagerUpdate.cpp:614-617`),
     * which is how her cards keep a boss invulnerable for the duration of the freeze.
     */
    noDamageDuringStop: boolean;
    /**
     * `EMUF1_PAUSE_TIMER` (`enemy+0x3324` bit 30), owned by op 173
     * (`EclRunHigh.inl:1045-1047`) and also armed by op 176 (`:1066`). While a player
     * card is playing (`Player+0xFDC`) a slot with this bit set does not run its ECL at
     * all (`EnemyManagerUpdate.cpp:466-472`), which is how a boss holds its pattern
     * still for the length of your bomb instead of firing into the freeze.
     */
    pauseTimer: boolean;
    /**
     * `enemy+0x5354`, the freeze timer op 160 arms. While it runs, a boss takes a
     * ninth of the frame's damage and everything else takes none
     * (`EnemyManagerUpdate.cpp:710-716`); it counts down once per frame at `:982`.
     */
    freezeFrames: number;
    /**
     * `enemy+0x2E10`, the damage accumulator behind `Player::FUN_00451670`'s
     * 时符-for-damage exchange. `EnemyManager.cpp:216` files the threshold itself in
     * at spawn, so the first orb is one full threshold of damage away, not two.
     */
    hitAccumulator: number;
    /** `enemy+0x3354`: this frame's applied damage, cleared before each pass. */
    lastFrameDamage: number;
    private _timer;
    generator: Generator<number, void, void> | null;
    waitFrames: number;
    /** Extra `callSubAlloc` coroutines running alongside the main script. */
    private lanes;
    /** Value parked by op 2; some scripts read it back through the timer. */
    secondaryTime: number;
    private gs;
    bulletPool: BulletPool | null;
    /** Lasers share the pool plumbing but not the bullet slots: retail keeps 0x100
     * of them beside the bullets, addressed by their own stride. */
    laserPool: LaserPool | null;
    enemyManager: EnemyManager | null;
    itemPool: ItemPool | null;
    /**
     * Retail's effect pool, injected by the host that owns the ANM tables. Ops
     * 128/139/140/174 address it by template id; without it the slot falls back to the
     * one-shot `fxRequests` notes the placeholder art reads.
     */
    effectPool: EffectPool | null;
    /** `enemy+0x5360[0..0x53c0]`: this enemy's orbit effects, faded when it dies. */
    private orbitEffects;
    /** `enemy+0x53C8`: the single effect op 174 keeps replacing. */
    private youkaiEffect;
    /**
     * `enemy+0x3310`/`+0x3311`: the two `DeathAnm` bytes ECL op 138 owns. Retail reads
     * them on every death (`EnemyManagerUpdate.cpp:884-888`), and because no shipped
     * TH08 script uses op 138 they stay at the 0 written on spawn
     * (`EnemyManager.cpp:185-186`), which is why every corpse pays effect 0 and effect 4.
     */
    private deathEffect1;
    private deathEffect2;
    playerRef: {
        x: number;
        y: number;
    } | null;
    /**
     * `enemy+0x2D4C`: the per-frame velocity the integrator adds to the position.
     * The four interpolation modes are the only writers, which is what lets a
     * script retarget a heading while a tween is still in flight.
     */
    private motorX;
    /** Motion velocity for Y (`enemy+0x2D4C`). */
    private motorY;
    /** `enemy+0x2D40`: parent offset; the drawn position is pos + offset. */
    private parentOffX;
    /** Parent offset for Y (`enemy+0x2D40`). */
    private parentOffY;
    /** `enemy+0x2D94` (register 0x2755): heading of polar motion. */
    private heading;
    /** `enemy+0x2D98` (0x2756): per-frame heading delta. */
    headingVel: number;
    /** `enemy+0x2DA8` (0x2757): speed along the heading. */
    moveSpeed: number;
    /** `enemy+0x2DAC` (0x2758): per-frame speed delta. */
    speedAccel: number;
    /** `enemy+0x2D9C` (0x275d): orbit angle. */
    orbitAngle: number;
    /** `enemy+0x2DA0` (0x275e): per-frame orbit angle delta. */
    orbitAngleVel: number;
    /** `enemy+0x2DB0` (0x2759): orbit radius. */
    orbitRadius: number;
    /** `enemy+0x2DB4`: per-frame orbit radius delta. */
    orbitRadiusVel: number;
    /** `enemy+0x2DC4` (0x275f): tween displacement. */
    tweenDX: number;
    /** `enemy+0x2DC8` (0x2760): tween displacement for Y. */
    tweenDY: number;
    /** `enemy+0x2DCC` (0x2761): the third component of the same tween vector. */
    tweenDZ: number;
    /**
     * `enemy+0x3354` (register 0x2763): the damage the last hit dealt. Retail
     * clears it when the slot is filed (`EnemyManagerUpdate.cpp:640`) and stores
     * it on every hit (`:719`), which is what lets a script branch on how hard it
     * was just struck.
     */
    lastDamage: number;
    /**
     * `enemy+0x2D64` (registers 0x2765..0x2767): the displacement the previous
     * frame integration actually produced, after the clamp box and the mirror bit
     * have had their say. Read-only for scripts -- `ResolveFloatLValue` has no
     * case for it -- and the one honest way a pattern can measure its own speed:
     * `ecldata1` sub 32 multiplies it by the Hermite window to get the tangent.
     */
    private observedX;
    /** Observed displacement for Y (`enemy+0x2D68`). */
    private observedY;
    /** Observed displacement for Z (`enemy+0x2D6C`). */
    private observedZ;
    /** `enemy+0x2D58`: where the integrator found the slot at the start of the frame. */
    private lastFrameX;
    /** Last-frame position for Y (`enemy+0x2D58`). */
    private lastFrameY;
    /** Last-frame position for Z (`enemy+0x2D58`). */
    private lastFrameZ;
    /** `enemy+0x2DDC`: motion countdown. */
    private motionTimer;
    /** `enemy+0x2DE8`: duration the countdown was armed with. */
    private motionDuration;
    /** `enemy+0x3340`: left edge of the clamp box op 75 arms. */
    private clampMinX;
    /** `enemy+0x3344`: minimum-Y edge of the clamp box. */
    private clampMinY;
    /** `enemy+0x3348`: right edge of the clamp box. */
    private clampMaxX;
    /** `enemy+0x334C`: maximum-Y edge of the clamp box. */
    private clampMaxY;
    bossLives: number;
    bossPhase: number;
    /**
     * The boss marker this slot holds (`enemy+0x3313`): 0 gates the timeline,
     * 1..3 are the extra seats stage 6 uses, and 255 means "not a boss".
     */
    bossMarker: number;
    /** Retail's boss bit (`enemy+0x3324` bit 1), owned by op 127. */
    isBoss: boolean;
    spellTimeout: number;
    spellHp: number;
    dropSpecId: number;
    /** True once the ECL gave this slot a life bar. */
    hasGauge: boolean;
    /** Spare bars left after the one on screen (op 148). */
    gaugePips: number;
    /** Coloured segments keyed by slice index (op 158). */
    gaugeSlices: GaugeSlice[];
    /** Spell-card countdown in frames; 0 = untimed (op 137). */
    gaugeTimerFrames: number;
    /**
     * HP below which life-bar `i` fires, armed by op 133 (`enemy+0x3358`).
     * -1 means disarmed, exactly like retail: crossing one clamps HP back up to
     * the threshold and hands the script to `phaseSubs[i]`.
     */
    readonly phaseThresholds: number[];
    /** Sub each armed life-bar phase jumps to (`enemy+0x3368`). */
    readonly phaseSubs: number[];
    /** Countdown length from op 134 (`enemy+0x3378`); -1 = disarmed. */
    spellTimerFrames: number;
    /** Sub that runs when the countdown expires (`enemy+0x337C`). */
    spellTimerSub: number;
    /** Frames already counted towards expiry (`enemy+0x2E14`). */
    spellTimerElapsed: number;
    /** Sub that takes the place of death (op 130, `enemy+0x2CEE`); -1 = just die. */
    deathCallbackSub: number;
    /**
     * Seconds left on the clock when this slot's card last ended
     * (`enemy+0x53CC`); the host turns it into the time-orb reward.
     */
    lastSpellSecondsLeft: number;
    /** Op 155: this slot's countdown expiring carries no card penalty (`bit27`). */
    noTimeoutPenalty: boolean;
    /**
     * Retail's `EMUF2_DEATH_LATCH`: the death pass runs once and stays spent
     * until something puts HP back above zero (`EnemyManagerUpdate.cpp:761-766`).
     */
    private deathLatch;
    /** Points still owed by the live card (`Spellcard::bonusProgress`). */
    private cardBonusProgress;
    /** Frames the live card has been up (`Spellcard::bonusCounter`). */
    private cardElapsedFrames;
    /** Full countdown the live card declared (`Spellcard::timer114`). */
    private cardFrames;
    /** Stops one card from paying twice when a driver and op 123 both fire. */
    private cardSettled;
    /**
     * `Spellcard::flags` bit 2: the live card may still be captured.
     *
     * `StartSpell` raises it (`Spellcard.cpp:766`) and `EndSpell` is the only reader
     * (`:1070`), but two things on the ship's side put it back down: `acceptBomb` calls
     * `Spellcard::FUN_0044cba0` (`Player.cpp:1288`), and the frame a death stops being
     * cancellable calls `Spellcard::FUN_0044d150` (`:1334`). Both clear the bit *and*
     * zero `bonusProgress`, so the plate goes to zero on screen and nothing is owed when
     * the card ends. That is retail's rule that a card broken through a bomb or a death
     * is not a capture, and without it a ship with eleven lives can farm every
     * 20,000,000-point card in the game.
     */
    private cardCapturable;
    /** op 184: the live card's bonus is held still instead of decaying. */
    private cardBonusFrozen;
    /** Card outcomes produced this frame, drained into `EnemyManager.frameSpellResults`. */
    readonly spellResults: SpellResult[];
    /** Sprite tint from op 100; -1 keeps the atlas colour. */
    spriteColor: number;
    /** Secondary ANM script from op 57; -1 when unset. */
    extraAnmScript: number;
    /** Set on the frame this slot dies so the manager emits FX once. */
    deathPending: boolean;
    /** Slot timer of the last life-bar break, so one frame cannot pop two. */
    private barBreakFrame;
    /** One-shot visual requests queued by the effect opcodes this frame. */
    readonly fxRequests: SlotFx[];
    /** Sounds requested during this frame, in order, with their positions. */
    readonly sfxRequests: SeTick[];
    /** Set when the script starts an auto-playing animation (op 128 family). */
    animAuto: boolean;
    /** Lateral offset added to the muzzle position (retail `enemy+0x2db8`, op 110). */
    shotOriginX: number;
    /** Vertical muzzle offset (retail `enemy+0x2dbc`). */
    shotOriginY: number;
    /**
     * Squared distance inside which the enemy stops firing (`enemy+0x3350`, set by
     * op 82 as a pixel radius, initialised to 1024 = 32px like retail).
     */
    shotNoFireRadiusSq: number;
    /**
     * Bit 11 of `enemy+0x3324`, the flag the shot-transform gates at ops 96..104 read.
     *
     * Retail's only writer is `Enemy::FUN_0042c420` (`EnemyManager.cpp:972`), and that
     * function has one call site, behind `EMUF1_PRE_ECL_UPDATE` (bit 8 of the same
     * word, `EnemyManagerUpdate.cpp:475`). Nothing in the recovered sources ever sets
     * bit 8 -- the only writes to `+0x3324` are `|= 1`, `|= 0x40`, `|= 0x400`, and
     * `EnemyManager::Initialize` memsets the whole manager (`:157`) -- so the flag is
     * false for every shipped enemy and both gates are provably inert. The field stays
     * because the *rule* is real: a script that ever sets bit 8 turns it on.
     */
    youkaiForm: boolean;
    /** Frames between repeats of the held shot instruction (`enemy+0x3060`, op 105). */
    shotRepeatFrames: number;
    /** Countdown towards the next replay of `heldShot`. */
    private shotRepeatTimer;
    /** Bit 17 of `enemy+0x3324`: queue shots instead of firing them (ops 107/108). */
    private shotsHeld;
    /**
     * `0x3324` bit 18, named `spawnVariant` by `SpawnEnemy1` (`EnemyTimeline.cpp:22-42`):
     * every horizontal movement delta is negated, so a timeline can launch the same
     * entry script twice and get a left-handed and a right-handed wave
     * (`EnemyManager.cpp:1010-1013`, `:135-136`, `EclRunLow.inl:390-391`). 625 of the
     * 1563 timeline spawns in the shipped stages set it.
     */
    get mirrorX(): boolean;
    set mirrorX(value: boolean);
    /** Timeline name for the same bit, which is the one `EnemyManager` arms. */
    get mirrorMovement(): boolean;
    set mirrorMovement(value: boolean);
    /** The raw op 96..104 operands last handed to `spawnShot`, kept for replay. */
    private heldShot;
    /**
     * The shot descriptor, which retail keeps at `enemy+0x2E24` and every shot
     * instruction reads out of. Op 111 installs its 18 transform records, op 113
     * its two sound ids, and `FUN_0042f5f0` copies both into each bullet, so the
     * records a bullet carries are the ones that were in place when it was fired.
     */
    private shotRecords;
    /** Frozen copy handed to spawned bullets; refreshed only after op 111 writes. */
    private shotRecordsFrozen;
    private shotRecordsDirty;
    private shotTransformSound;
    private shotSpawnSound;
    /** Reused operand vector: the launcher reads it synchronously. */
    private readonly shotPattern;
    private bulletWorldCache;
    /**
     * The eight ECL interpolators at `context + 0x9C`, which op 36 installs and the
     * tail of `RunEcl` steps. This is the machine that glides a boss between
     * positions; ops 63..78 only drive the polar producer.
     */
    private readonly interpolators;
    private interpWorldCache;
    /** Frames on which a slot ran, so a sweep can prove the tail is wired. */
    interpSteps: number;
    /** Slots op 36 filled over this slot's lifetime. */
    interpInstalls: number;
    constructor(gs: GameState);
    /**
     * Record one refused write or motion op.
     *
     * The stack is trimmed to the two frames above this file, which for a
     * translated script is the generated `subNN` function: with the ECL file and
     * sub id that is enough to read straight to the instruction. Only the first
     * `REFUSAL_CAP` events carry it, because a stage that really is poisoned
     * would otherwise spend its whole frame budget building strings.
     */
    private refuse;
    /** Keep `value` when it is usable, otherwise hold `fallback` and report. */
    private finiteNumber;
    /**
     * Guard for the movement ops: a non-finite operand means the motion never
     * starts, which leaves the entity on its last sane path instead of
     * destroying it. The op name is the useful half -- it points at the register
     * that went bad, which a raw position write cannot.
     */
    private finiteArgs;
    /** Reset for reuse from the pool. */
    reset(x: number, y: number, hp: number, gs: GameState): void;
    /** Reinterpret int32 bits as float32. */
    private static i2f;
    /** Fresh zeroed register bank. */
    private static blankRegs;
    /** Copy the slot's register fields into a bank. */
    private captureRegs;
    /** Install a bank onto the slot's register fields. */
    private applyRegs;
    /**
     * Hand the ECL register file to a familiar this slot is about to summon.
     *
     * `SpawnEnemy2` (`EnemyTimeline.cpp:104-107`) calls `CallEclSub` first and then
     * overwrites `context + 0x18 .. + 0x90` with the parent's own block, which is
     * exactly the 30 dwords `ResolveInt`/`ResolveFloat` name as `i0..i7` (0x18),
     * `f0..f7` (0x38), `ci0..ci3` (0x58) and `cxi0..cxi3` (0x70) plus `cxf0..cxf3`
     * (0x80). `ei0..ei7`/`ef0..ef7` are deliberately absent: they live in the Enemy
     * struct (`0x2ca8`/`0x2cc8`), outside the copied range, so a familiar always
     * starts those at zero.
     *
     * This is the only channel a summoner has to tell its familiars where to go:
     * ops 90..92 pass `(0,0)` as the position in every stage of the retail game,
     * and the parent instead writes the launch angle into `f0` and the radius into
     * `f1` right before the call (see `ecldata1.ts` sub 21, the 蛍符 familiars).
     * Without the copy the child's `moveArc(100, f0, rate, f1)` runs at speed 0 and
     * every familiar piles up on top of its boss.
     */
    inheritRegistersFrom(parent: EnemySlot): void;
    /**
     * Start (lane >= 0) or stop (lane < 0 / sub < 0) an attached coroutine.
     * `callSubAlloc` is how a boss keeps moving while a helper script fires.
     */
    callSubAlloc(lane: number, sub: number): void;
    /** Remote variant (op 88): `lane` is the target enemy slot index. */
    callSubRemote(lane: number, sub: number): void;
    /** Park the secondary countdown (op 2). It is not a wait: timing comes from
     *  the instruction times themselves, so this is just a register write. */
    setSecondaryTime(frames: number): void;
    /**
     * `yield e.delay(n)` — op 2 *is* the delay, so this hands the frame count
     * back to the generator while arming the secondary timer the retail VM keeps
     * alongside it.
     */
    delay(frames: number): number;
    /**
     * Read one of this slot's registers by ECL register id (ops 86 / 87 accept
     * either the id or a plain field index).
     */
    readField(field: number, table: Record<number, string>): number;
    /** Advance one game frame. */
    tick(): void;
    /** Put a following child back on its own coordinates for this frame's script. */
    private rebaseLinkedChild;
    /**
     * The detach half of `EnemyOverlay::FUN_0042adb0` (`EnemyManager.cpp:282-290`):
     * bit 10 goes up so the death pass skips the explosion, `0x2DA4` is cleared, the
     * drop type is disarmed, and — for a slot that rode on the parent — the follow
     * offset is frozen at the parent's position, which is what keeps the familiar
     * drawing where it stood instead of snapping back to its local offset.
     */
    detachFromParent(parentX: number, parentY: number): void;
    /**
     * `EnemyManagerUpdate.cpp:492-505`: while a linked child inherits its parent's
     * position, `0x2D40` is reloaded from the parent every frame and the child's
     * real position is the sum of the two vectors.
     */
    private applyLinkedChildAnchor;
    /**
     * `GameManager::IsWithinPlayfield` (th08 0x4399ac): true while the sprite
     * rectangle straddles the playfield. The half-extents come from the sprite,
     * so an enemy hanging over an edge still counts as on screen.
     */
    static isWithinPlayfield(x: number, y: number, width: number, height: number): boolean;
    /**
     * `EnemyManagerUpdate.cpp:550-590`. The retire is two-stage: a slot only
     * becomes eligible to die off screen once its sprite has actually been inside
     * the playfield, so entering patterns can start above the top edge. The
     * engine's `EMUF1_NO_SPRITE` gate is reproduced by `stepBoundsRetire` below,
     * with the op-77 bounding box standing in for the sprite size when a slot has
     * no animation VM attached (the ECL-only paths used by the tests).
     */
    private stepBoundsRetire;
    /** Decay the live card's bonus the way `Spellcard`'s update pass does. */
    private tickCardBonus;
    /**
     * Step the two card drivers until neither fires: a boss that loses two bars
     * in one frame, or whose new card re-arms a timer that is already spent, has
     * to resolve both before it draws, exactly like the retail `goto` back into
     * the script. Four passes is the most a script can chain in one frame.
     */
    private stepSpellDrivers;
    /**
     * `Enemy::FUN_0042b490`: the life-bar driver. Crossing a threshold clamps HP
     * back up to it — the overkill is discarded, not carried into the next card —
     * and hands the script to that phase's sub.
     */
    private checkSpellPhases;
    /**
     * `Enemy::FUN_0042b930`: the countdown driver. Expiry refills the boss to the
     * highest threshold still armed, charges nothing for the card, and sweeps the
     * field unless op 155 said this timer is not a card clock.
     */
    private checkSpellTimeout;
    /**
     * Shared tail of both drivers: the phase sub owns the enemy now, so its
     * coroutines and its held shot instruction are dropped, and every plain
     * enemy on the field dies with it (`EnemyManager.cpp:517-533`).
     */
    private breakSpellState;
    /** Drop the four `callSubAlloc` coroutines. */
    private releaseLanes;
    /**
     * Restart the main script at `sub`, running its first instruction this frame
     * the way `run_enemy_ecl_after_pause` does. A sub the script table does not
     * know about leaves the current one alone.
     */
    private enterSpellSub;
    /**
     * `EnemyManagerUpdate.cpp:765-910`: the death pass runs once per life. With a
     * death sub it hands the script over instead of retiring the slot, which is
     * what lets a boss flee, transform, or open its next card.
     */
    private resolveDeath;
    /**
     * Step this slot's ANM script once, sharing position and facing with the ECL.
     *
     * A script that runs out is left alone on purpose: the primary enemy VM's
     * `ExecuteScript` result is discarded at `EnemyManagerUpdate.cpp:598` (only
     * the two trail VMs get parked), so `Static` ends the animation without
     * retiring the enemy. Lifetime stays with the ECL and the bounds cull.
     */
    private tickAnm;
    /**
     * `Enemy::FUN_00423150` (`EclDependencies.cpp:812-883`), the facing switch.
     *
     * The motion producer at +0x2D4C decides the turn: left past -0.01, right past
     * +0.01, and bit 18 of the motion flags swaps the two because it mirrors the
     * same producer on the way into the integrator. Returning to straight is not
     * the straight script either: retail plays the script that *ends* the lean,
     * picked by which side the enemy was leaning to, which is what stops a fairy
     * from snapping upright mid-flight.
     *
     * The block is gated on the slot still having hit points, and on script 1 being
     * armed. `EnemyManager.cpp:191-193` files -1 there on spawn, so enemies set up
     * with a bare op 54 keep that script however they move.
     */
    private updateAnmDirection;
    /**
     * Advance every `callSubAlloc` lane by one frame. Each lane owns its
     * registers, so the bank is swapped in for the step and back out after.
     */
    private stepLanes;
    /** Move this frame's queued visual requests into `out`. */
    drainFx(out: SlotFx[]): SlotFx[];
    /** Move this frame's queued sound ids into `out`. */
    drainSfx(out: SeTick[]): SeTick[];
    /** Move this frame's finished spell cards into `out`. */
    drainSpellResults(out: SpellResult[]): SpellResult[];
    /**
     * A boss changed card: plain enemies get zeroed and die with it, which is how
     * the field is clear when the new plate goes up.
     */
    forcePhaseWipeDeath(): void;
    get posX(): number;
    set posX(v: number);
    get posY(): number;
    set posY(v: number);
    get posZ(): number;
    set posZ(v: number);
    get playerX(): number;
    get playerY(): number;
    get playerZ(): number;
    /**
     * Movement heading, `enemy+0x2D94` (register 0x2755). Ops 65..69 write it and
     * `FUN_00422c40` integrates it; the fan-pattern helpers read it back to aim.
     */
    get moveAngle(): number;
    set moveAngle(value: number);
    get timer(): number;
    get hp(): number;
    get hpF(): number;
    get hpRatio(): number;
    /** Heading from this enemy to the player (ECL register 0x2740). */
    get angleToPlayer(): number;
    /** Distance from this enemy to the player (ECL register 0x2742). */
    get distToPlayer(): number;
    /**
     * Register 0x2770 (`EclOperandsInt.cpp:139-144`): the length of the attach
     * chain this slot belongs to. A head reports its own chain; a member asks the
     * enemy it is attached to, which is what lets stage 4b stop spawning mirrors
     * at five (`if (0x2770 >= 5)`) and stage 1 ask whether it is the last link.
     */
    get parentChainCount(): number;
    /**
     * Register 0x2772 (`EclOperandsInt.cpp:153-158`): 2 while the last spell is
     * still payable -- won orbs plus the orbs still on the field reach the
     * threshold -- else 0. Stages 1 to 3 gate the boss's last-spell break on it.
     * Retail's middle term, `Spellcard::pendingTimeOrbs`, needs no field here:
     * `StageRunner.bankSpellResults` pays that reward on the frame the card is
     * captured rather than dripping it seven at a time, so it is already inside
     * `timeOrbs`.
     */
    get timeOrbReady(): number;
    get playerIsYoukai(): 0 | 1;
    /** Register 0x2773: which spell-card state the scripts are allowed to read. */
    get spellCardState(): 0 | 1;
    get spellCardTimer(): number;
    get randInt(): number;
    get randIntMasked(): number;
    applyDamage(amount: number): void;
    /** Route a familiar's absorbed damage into the parent's bar, clamped by phase. */
    private damageParentFromChild;
    /** The parent's half of `FUN_0042b370`: subtract, then clamp at the phase floor. */
    absorbChildDamage(damage: number, floor: number): void;
    get maxHp(): number;
    set maxHp(v: number);
    get maxHpF(): number;
    set maxHpF(v: number);
    get difficulty(): number;
    get difficultyF(): number;
    get rank(): number;
    get rankF(): number;
    get shotType(): number;
    get shotTypeF(): number;
    /** Register 0x2765: last frame's real X displacement. */
    get velocityX(): number;
    /** Register 0x2766: last frame's real Y displacement. */
    get velocityY(): number;
    /** Register 0x2767: last frame's real Z displacement. */
    get velocityZ(): number;
    get enemyType(): number;
    get enemySlot(): number;
    get randAngle(): number;
    get randU31(): number;
    get randF32(): number;
    get randU32(): number;
    get randF32S(): number;
    get randU31f(): number;
    get randU32f(): number;
    get randF32i(): number;
    get randF32Si(): number;
    get cf0i(): number;
    set cf0i(v: number);
    get cf1i(): number;
    set cf1i(v: number);
    /** `enemy + 0x3358 + i*4` (registers 0x2768..0x276b): the four armed bar floors. */
    get phase0(): number;
    get phase1(): number;
    get phase2(): number;
    get phase3(): number;
    isDiff(mask: number): boolean;
    /** op 54: one script on the primary sprite, addressed against `enemy.anm`. */
    setAnm(script: number): void;
    /** op 58: the same, addressed against the stage's own pack. */
    setAnmAlt(script: number): void;
    /**
     * `SetPrimaryAnmScripts` (`EclRunLow.inl:210-214`).
     *
     * The six ids are filed but nothing is attached: retail only writes 0xFF into
     * +0x332E and lets `FUN_00423150` choose the first script on the next update,
     * which is the same frame the slot is stepped. Attaching here as well would
     * restart the cycle every frame instead of once.
     */
    private setPrimaryAnmScripts;
    setAnmScripts6(base: number): void;
    setAnmScripts6x(a: number, b: number, c: number, d: number, e2: number, f: number): void;
    setAnmScripts6xAlt(a: number, b: number, c: number, d: number, e2: number, f: number): void;
    /**
     * Put the named `enemy.anm` script on this slot's VM and run its setup block
     * immediately, which is what `SetAndExecuteScript` does on the spawn frame.
     */
    private attachAnm;
    /** Let the renderer drive the assigned ANM scripts instead of holding frame 0. */
    autoAnm(): void;
    /** Secondary layer: script `args[1]` plays alongside the main one (op 57). */
    setExtraAnm(...args: number[]): void;
    setExtraAnmAlt(...args: number[]): void;
    /**
     * op 63 (`EclRunLow.inl:737-743`): an absolute write of `0x2D34`, not an offset.
     * `sub_48` calling it with (192, 224) -- the centre of the playfield -- is what
     * settles the reading; the previous `+=` sent every entry pattern off-screen.
     */
    setRelPos(x: number, y: number): void;
    setPos(x: number, y: number): void;
    /**
     * op 65 (`:744-751`): heading plus speed, mode 1 with no duration, i.e. "keep
     * going this way". This is not the sprite rotation -- that lives in the ANM VM.
     */
    setHeadingSpeed(angle: number, speed: number): void;
    /**
     * op 66 (`:752-764`): a straight segment. Without a duration it degrades to
     * op 65; with one it becomes `ConfigurePolarMotion`, whose origin is the *drawn*
     * position, so a familiar starts its approach from where it is actually seen.
     */
    movePolar(duration: number, easing: number, angle: number, speed: number): void;
    /**
     * op 64 (`EclHelpers::ConfigureRelativeMotion`, 0x420F40): the operands are an
     * absolute waypoint stored as a displacement from the drawn position, and the
     * in-flight velocity is cleared on the way in.
     */
    moveRelative(duration: number, easing: number, x: number, y: number): void;
    /** `EclHelpers::ConfigurePolarMotion` (0x420D10), shared by ops 66, 67 and 69. */
    private configurePolarMotion;
    /**
     * op 67 (`BeginBoundaryAwareMove`, th08 0x422020, `EclDependencies.cpp:128-191`):
     * pick a random heading that points away from the player, then fold it back
     * inside the clamp box, which is how the fairies bounce along the edges instead
     * of flying off the screen. Every one of its 72 call sites is preceded by op 75.
     */
    moveBounce(duration: number, easing: number, speed: number): void;
    /** op 68 (`:772-781`): aim along the heading to the player. Mode untouched. */
    moveToPlayer(angleOffset: number, speed: number): void;
    /**
     * op 69 (`:782-802`): op 66 with the angle measured from the player. Note the
     * asymmetry in retail -- only the zero-duration branch adds `angleToPlayer`,
     * the timed branch hands operand 2 to `ConfigurePolarMotion` unchanged.
     */
    moveToPlayerPolar(duration: number, easing: number, angle: number, speed: number): void;
    /** op 70 (`:809-812`): per-frame heading delta, which starts mode 1 turning. */
    setHeadingVel(rate: number): void;
    /** op 71 (`:813-816`): per-frame speed delta, which starts mode 1 ramping. */
    setSpeedAccel(rate: number): void;
    /**
     * op 72 (`:817-845`): mode 3, the orbit and spiral producer anchored on the
     * operand pair. Params 1..6 are already floats in the instruction -- the
     * signature says so -- and running them through `i2f` is what turned a
     * coordinate into `2.69e-43` and then into an invisible, unkillable enemy.
     */
    moveOrbit(duration: number, x: number, y: number, angle: number, angleVel: number, radius: number, radiusVel: number): void;
    /** op 73 (`:846-867`): mode 3 around the enemy's own position, radius from 0. */
    moveArc(duration: number, angle: number, angleVel: number, radiusVel: number): void;
    /** op 74 (`:868-884`): mode 3 retune -- anchor, angle and radius all survive. */
    setAccel(duration: number, angleVel: number, radiusVel: number): void;
    /** op 75 (`:885-900`): arm the position clamp box at `enemy+0x3340..0x334C`. */
    setMotionClamp(minX: number, minY: number, maxX: number, maxY: number): void;
    /** op 76 (`:901-904`): disarm the clamp box. Nothing about velocity changes. */
    clearMotionClamp(): void;
    setBounds(w: number, h: number): void;
    /** op 78 (`EclRunLow.inl:914-921`): the second hitbox, at its own two offsets. */
    setBoundsAlt(w: number, h: number): void;
    /** The op-77 box as a half extent, which is the form `PlayerBuildAabb` needs. */
    get hitboxHalfWidth(): number;
    get hitboxHalfHeight(): number;
    /** True when op 78 armed a second box worth testing (`+0x2D7C.x > 0.0f`). */
    get hasSecondaryHitbox(): boolean;
    get secondaryHitboxHalfWidth(): number;
    get secondaryHitboxHalfHeight(): number;
    /**
     * `enemy+0x3324` bits 12-13: which producer fills `0x2D4C` this frame. 0 keeps
     * whatever the last one left, which is how a finished entry drift turns into a
     * straight cruise.
     */
    get interpMode(): number;
    set interpMode(value: number);
    /**
     * `enemy+0x3324` bits 14-16: the easing curve mode 2 walks. Ops 64/66/67 name it
     * "motionMode" and ops 72..74 leave it alone, exactly like the bitfield.
     */
    get easingMode(): number;
    set easingMode(value: number);
    /** `enemy+0x3324` bit 19: op 75's clamp box is armed. */
    get motionClampOn(): boolean;
    /** `enemy+0x2D88`: what the renderer draws, i.e. logical position + parent. */
    get renderX(): number;
    /** Drawn position for Y (`enemy+0x2D88`). */
    get renderY(): number;
    /**
     * ECL op 36 (`InstallInterpolationSlot`, `EclDependencies.cpp:361-389`).
     *
     * The destination arrives as the raw operand, exactly as the original stores it,
     * because the slot resolves it again on every frame it runs. The four parameters
     * are already what `DEP_READ_FLOAT` would hand over: an indirect operand reads its
     * register once here, and a literal stays a literal that the callback resolves
     * again per frame.
     */
    interpSlot(variable: number, duration: number, callback: number, easing: number, p0: number, p1: number, p2: number, p3: number): void;
    /**
     * The frame tail at `EclRun.cpp:131-202`, which retail gates on `life > 0`
     * (`enemy+0x2DFC`, `EnemyManagerUpdate.cpp:124`): an entity with no life to lose
     * is a decoration, and its script never gets to tween. A slot that drives a
     * position register does not move the
     * enemy directly: the tail turns the move into this frame velocity in
     * `enemy+0x2D4C`, points `enemy+0x2D94` along it, and rewinds the motion target so
     * that the integrator stays the only thing that advances it.
     */
    private stepInterpolators;
    /** The accessor pair the callbacks run against, built once per slot. */
    private interpWorld;
    /**
     * `EnemyOverlay::ResolveFloat` (`EclOperandsFloat.cpp:116-118`) reads the three
     * position registers from the drawn vector, not from the motion target the
     * callback writes. That difference is what lets a homing curve re-read its own
     * last result without feeding back into itself.
     */
    private resolveInterpFloat;
    /** `ResolveFloatLValue`: only a register the switch knows is a destination. */
    private writeInterpRegister;
    /** Fill `enemy+0x2D4C` from whichever producer bits 12-13 selected. */
    private stepMotionModel;
    /** The easing table in `FUN_00422c40` case 2, bits 14-16 of `0x3324`. */
    private static applyEasing;
    /**
     * `Enemy::FUN_0042deb0` (`EnemyManager.cpp:1005-1016`).
     *
     * The order matters twice over. Retail first books the *previous* frame's
     * displacement into `0x2D64` and only then integrates, so a script that reads
     * the velocity registers sees a finished, clamped number rather than the raw
     * motor it just armed -- which is exactly what the stage 1 Hermite tweens need
     * to keep their tangents proportional. Then the mirror bit flips the sign of
     * the X addition, so `0x2D64` picks up the reflection for free.
     */
    private integrateMotion;
    /** `Enemy::ClampPosition` (`EnemyManager.cpp:868-882`). */
    private clampPosition;
    /**
     * op 79 (`EclRunLow.inl:923-931`). One operand drives six bits across the two
     * flag words, and three of them are stored inverted — `!(v & 1)` lands on bit 6,
     * `!(v & 2)` on bit 2 and `!(v & 4)` on bit 3, while bits 4 and 28 and the second
     * word's bit 6 keep their polarity. Assigning the operand to a flag word, which
     * is what this used to do, therefore sets six bits the script never asked for and
     * clears `active`.
     */
    writeScriptFlags(v: number): void;
    /**
     * op 80 (`EclRunLow.inl:933-946`): the clear half of the pair. Note the split
     * polarity — the low three selectors clear, `v & 8` sets `EMUF1_NO_SPRITE` and
     * `v & 0x10` sets `allowOffscreen`, which is why a familiar launched under
     * `v = 0x10` survives walking off the top of the screen.
     */
    clearScriptFlags(v: number): void;
    /** op 81 (`EclRunLow.inl:948-961`): the set half, with the same split polarity. */
    setScriptFlags(v: number): void;
    /** Set or clear one bit of `enemy+0x3324`. */
    private setFlag1;
    /** Peek at another enemy's int register (op 86) — boss <-> helper hand-offs. */
    readIntRemote(slot: number, field: number): number;
    /** Peek at another enemy's float register (op 87). */
    readFloatRemote(slot: number, field: number): number;
    setParams(a: number, b: number): void;
    /** op 90 — child lands at the absolute offset in operands 1/2. */
    linkChildStandard(sub: number, x: number, y: number, hp: number, dropType: number, score: number): void;
    /** op 91 — operands 1/2 are added to this enemy's position. */
    linkChildRelative(sub: number, x: number, y: number, hp: number, dropType: number, score: number): void;
    /** op 92 — absolute offset again, but the child follows this enemy forever. */
    linkChildAttached(sub: number, x: number, y: number, hp: number, dropType: number, score: number): void;
    /**
     * Shared body of the linked-child cluster. `SpawnChildStandard0041F110` refuses
     * the launch unless the parent still has HP and is not itself a familiar, and
     * the summon cue at `SOUND_FAMILIAR_SPAWN` (0x24) plays either way.
     */
    private linkChild;
    /**
     * Spawn a helper relative to this enemy (ops 47 / 108). The translated
     * scripts always pass sub id, an x/y/z offset in pixels and the HP.
     */
    spawnEnemy(...args: number[]): void;
    spawnEnemyAlt(...args: number[]): void;
    setInvuln(): void;
    clearInvuln(): void;
    enableDamage(): void;
    disableDamage(): void;
    /**
     * op 127 (`EclRunHigh.inl:635-665`): claim or release a boss marker slot.
     * A non-negative argument makes this the boss in slot `arg`, and only slot 0
     * drives the "boss present" flag the timeline waits on; a negative argument
     * releases the marker the slot is holding, which is how a fleeing boss lets
     * the stage run out without ever being killed.
     */
    setBossPresent(arg: number): void;
    /** Boss HP for the current life bar (op 131 SETLIVES). */
    setLives(count: number): void;
    /** Spare bars behind the visible one (op 148) — drawn as gauge pips. */
    eclSetLives(count: number): void;
    /** One coloured gauge segment spanning HP [start, stop) (op 158). */
    setLifeBarSlice(index: number, start: number, stop: number, color?: number): void;
    /** Spell-card countdown in frames; -1 means untimed (op 137). */
    setTimeout(frames: number): void;
    /**
     * Gauge timer params (op 152). Translated scripts use all zeros to stop the
     * timer, so any other non-zero value is taken as the countdown length.
     */
    setGaugeTimer(...args: number[]): void;
    /**
     * Op 122: publish the card the script just declared. `Spellcard::StartSpell`
     * keeps the name, owner, id, face script and bonus together, and the HUD and
     * the cut-in both read them back off the game state.
     */
    startSpell(name: string, owner: string, number: number, face: number, bonus: number): void;
    /** Op 123: the card is over; the banner and the cut-in go with it. */
    endSpell(): void;
    /**
     * `Spellcard::FUN_0044cba0` (`:1763-1769`) and `FUN_0044d150` (`:1772-1776`), the two
     * calls the ship makes when it gives up a card: one from `acceptBomb`
     * (`Player.cpp:1288`), one from the frame its death stops being cancellable (`:1334`).
     *
     * Both take the capture bit and zero the bonus that is still standing, which is why
     * the plate on screen goes to 0 rather than keeping its last value. The extra line in
     * the bomb's version - copy bit 0 into bit 7 - is not modelled: nothing in the
     * recovered sources ever reads that bit back, and the only `bit7` readers anywhere are
     * about an *enemy* word (`EnemyManager.cpp:891`, `:908`, `:1513`).
     */
    voidCardBonus(): void;
    /** Frames still on the countdown, as the scripts and the plate see them. */
    private spellSecondsLeft;
    /**
     * Publish how the live card ended. `captured` means the bar was broken before
     * the clock ran out, which is the only case that pays (`Spellcard::EndSpell`
     * checks the time-out flag at `Spellcard.cpp:1060-1073`).
     */
    private settleCard;
    /**
     * Int operand indirection, mirroring `EclOperands::ResolveInt`: an operand
     * naming a register reads that register, anything else is the literal.
     */
    private resolveIntOperand;
    /**
     * Float twin: `EnemyOverlay::ResolveFloat` truncates the operand to pick a
     * register, so `10016.0` means `f0` while an ordinary speed stays as it is.
     */
    private resolveFloatOperand;
    /** True while a boss life bar is live — retail's `g_Spellcard.IsActive()`. */
    private get inSpellCard();
    /**
     * ECL ops 96..104, the bullet launchers. `EclRunHigh.inl:394-412` sends all
     * nine to one handler that parks the instruction while the hold flag is set
     * and otherwise hands it to `DispatchShotInstruction`, whose aim mode is
     * `opcode - 0x60`. Operands arrive raw because the original resolves them
     * against the register file here, at fire time, not at translation time.
     */
    spawnShot(desc: ShotDescriptor): void;
    /** The last shot instruction, replayed on demand by op 109. */
    private lastShot;
    /**
     * `BulletManager::FUN_00430e10` + `FUN_0042f5f0`: build the descriptor, then
     * lay out `count2` rings of `count1` bullets under the mode's geometry.
     *
     * Takes the operands as a rest list because ops 105..109 replay the exact
     * argument vector an earlier shot instruction was built from.
     */
    private dispatchShot;
    /** Replay the held shot instruction once every `shotRepeatFrames` frames. */
    private tickShotRepeat;
    /** Fire the stored descriptor again (op 109). */
    spawnShotNow(): void;
    /**
     * ECL ops 114 and 115, the laser launchers (`EclRunHigh.inl:478-545`).
     *
     * Both share one handler and differ by a single field: `aimMode`. Op 115 leaves
     * it 0, which makes `SpawnLaserPattern` add the angle from the spawn point to
     * the player, so the beam tracks the ship; op 114 sets it 1 and the operand
     * angle is already absolute.
     *
     * The instruction's 13 operand words are handed over raw because the first word
     * packs two i16s — type at bit 0, colour at bit 16 — and the interpreter
     * resolves each of them through `ResolveInt`/`ResolveFloat` only when its own
     * `operandFlags` bit is set. The bit numbering follows the declared parameter
     * list, so the packed word is parameter 0 and 1 and every later word shifts by
     * one.
     */
    spawnLaser(desc: LaserDescriptor): void;
    /** Repeat interval for the held shot (op 105). */
    setShotRepeat(frames: number): void;
    /** Repeat interval with a random phase, so a wall of enemies desyncs (op 106). */
    setShotRepeatRand(frames: number): void;
    /** Park following shot instructions instead of firing them (op 107). */
    holdShots(): void;
    /** Release the held shot instruction (op 108). */
    releaseShots(): void;
    /** Move the muzzle relative to the enemy (op 110). */
    setShotOrigin(x: number, y: number): void;
    /** Stop firing while the player is this close; squared at load (op 82). */
    setShotNoFireRadius(radius: number): void;
    /** Alternate hit flash (op 83, `enemy+0x3328` bit 1). */
    setHitFlash(flag: number): void;
    /** Second flag word bit 1: bigger hit effect when the enemy is hit. */
    hitFlash: boolean;
    aimAtPlayer(_mode: number, _angle: number): void;
    clearAllBullets(): void;
    removeBulletsRadius(radius: number): void;
    removeAllBullets(): void;
    spawnItem(type: number): void;
    spawnItemBatch(..._args: number[]): void;
    spawnItemRandom(arg: number): void;
    /**
     * The orbit effect anchored to this enemy (op 128).
     *
     * Retail ignores the opcode's first operand and always asks for template 13, with the
     * spawn colour 0xFF6060D0; operands 1..3 are the orbit axis as three floats and operand
     * 4 the radius the orbit grows out to (`EclRunHigh.inl:667-680`, read back as a float in
     * `EnemyManager.cpp:1036-1046`).
     */
    spawnEffect(...args: number[]): void;
    /**
     * Op 138 (`EclRunHigh.inl:429-433`): three bytes straight into the enemy's
     * `DeathAnm` slots. Retail clamps them to `u8`, and the first one is read back as
     * `i8`, so a value of 200 would be negative and silence the death effects.
     */
    setDeathEffects(...args: number[]): void;
    /**
     * The retail death pass, `EnemyManagerUpdate.cpp:884-888`: one copy of
     * `DeathAnm1` and four of `DeathAnm2 + 4`, both at full white. `DeathAnm1` is only
     * paid when the signed byte is non-negative, which is how a script mutes an
     * explosion without touching anything else.
     */
    private spawnDeathEffects;
    /**
     * An effect thrown along a heading (op 140): id, count, colour, then the velocity whose
     * x is an angle for the radial movers (`EclRunHigh.inl:795-812`).
     */
    spawnEffectAngle(...args: number[]): void;
    /** One-shot effect on top of this enemy (op 139). */
    spawnEffectAt(...args: number[]): void;
    /**
     * Queue the sound id; the host maps it onto the real th08 SE bank.
     *
     * `id >= 0` is retail's own guard (`BulletManager.cpp:1266`, and `NO_SOUND` is -1),
     * so index 0 - the tick the pause menu also uses - is a request like any other.
     * `x` is `PlaySoundPositionedByIdx`'s pan source; leave it out for the unpositioned
     * form, which retail centres.
     */
    playSfx(id: number, x?: number): void;
    /**
     * The effect that reads differently on the two sides (op 174).
     *
     * It is not a conditional spawn: retail always fires, into the second pool at id+0x20,
     * and then hands the VM interrupt 2 for a youkai ship or 1 for a human one, so the
     * script itself picks the branch (`EclRunHigh.inl:1089-1101`). The effect it replaces is
     * retired on the spot rather than faded.
     */
    effectWithYoukai(arg: number): void;
    /**
     * Stage background sequence start (op 179). The 3D `.std` scroller is driven
     * by the host, which listens for this through `EnemyManager.stageBgRequests`.
     */
    startStageBg(): void;
    nop(..._args: number[]): void;
    nop3(..._args: number[]): void;
    /** op 8 (`EclRunLow.inl:522-525`): the int twin, sign applied to a resolved operand. */
    randSign(val: number): number;
    /** op 9 (`EclRunLow.inl:526-532`): the same coin flip on a float. */
    randSignF(val: number): number;
    /**
     * op 184 (`Spellcard::FUN_0041f0e0`): hold the live card's bonus still so it
     * stops decaying with the clock. Nothing else: it never made a boss immune.
     */
    complexBossInit(arg: number): void;
    complexSetup(..._args: number[]): void;
    /**
     * op 133 (`EclRunHigh.inl:746-757`): arm life-bar slot `i` so that dropping
     * below `threshold` hands the script to `sub`. -1 disarms a slot again.
     */
    setPhase(i: number, threshold: number, sub: number): void;
    setSpellHP(...args: number[]): void;
    /**
     * ECL op 111 (`EclRunHigh.inl:414-428`): install one `BulletTransformRecord`.
     *
     * The address the original writes, `enemy+0x2E44`, is `0x2E24 + 0x20`: the
     * transform array inside the shot descriptor, at the record stride of 0x18. The
     * earlier read of this opcode as an interpolator is what left every curve,
     * acceleration, bounce, split and mid-flight sprite change unimplemented, and
     * the bullet array jammed full of the speed-zero clusters those records exist to
     * launch.
     */
    setShotRecord(index: number, kind: number, allowWhileActive: number, int0: number, int1: number, float0: number, float1: number): void;
    /**
     * ECL op 113 (`EclRunHigh.inl:953-962`): the shot sounds. The flag bit this
     * raises at `+0x3020` is inside the descriptor' + T + 's transform word, which the
     * very next shot instruction overwrites with its own operand, so in practice
     * only the two sound ids survive to matter.
     */
    setShotSound(spawn: number, transform: number): void;
    /** The world the transform handlers read: ship, rng, art tables, sound. */
    private shotWorld;
    /** op 59: the six scripts, addressed against `stgNNenm.anm`. */
    setAnmScripts6Alt(base: number): void;
    setColor(...args: number[]): void;
    setFloatField(field: number, value: number): void;
    setIntPair(a: number, b: number): void;
    setIntFields(...args: number[]): void;
    enemyFunc95(..._args: number[]): void;
    /**
     * op 181 (`EclRunHigh.inl:1111-1121`): the night clock. Retail tolls it one
     * hour at a time and stops dead at 12, which is dawn -- past that the stage
     * result pays no 夜残得点 (`Gui.cpp:1210`) and stage 6B takes its ending
     * branch (`Gui.cpp:311-324`). The bell is sound 0x2D.
     */
    clockControl(): void;
    setMisc116(..._args: number[]): void;
    setMisc120(..._args: number[]): void;
    /**
     * Op 126: hand sub `args[0]` to attached lane `args[1]`. Translated scripts
     * use it as the boss body launcher — the entry script claims the marker, arms
     * the life-bar timers and then parks in a spin, while the named sub runs the
     * real phase/card script out of a lane. Same operands as `callSubAlloc`
     * (op 135) but in the other order, which is why every observed call site
     * passes `(sub, 1)`.
     */
    setMisc126(...args: number[]): void;
    setMisc129(..._args: number[]): void;
    /**
     * op 130 (`EclRunHigh.inl:687-691`): the sub that takes over in place of
     * death. This is how a boss's last bar becomes the next card or the flee.
     */
    setDeathCallbackSub(sub: number): void;
    /** op 132: seek the countdown clock, which is how a script re-opens a card. */
    setSpellTimerElapsed(frames: number): void;
    /**
     * op 134 (`EclRunHigh.inl:758-768`): arm the card countdown. The plate timer
     * and the ECL's own `0x2774` read are both this window, so they are seeded
     * from here rather than kept as a second clock.
     */
    setSpellTimer(frames: number, sub: number): void;
    /**
     * op 136 (`EclRunHigh.inl:865`): the `ex` family. The first operand selects one
     * of 32 handlers out of `g_EclExInsn` (`EclGlobals.cpp:73-105`) and the rest are
     * that handler's own arguments, so this is a second opcode space hidden inside
     * one ECL instruction - the same shape as the ECL's own dispatch, one level down.
     *
     * Only `ex 18` has a modelled effect today. The rest are listed below with what
     * they actually do in retail and why they are safe to skip, rather than being
     * silently swallowed:
     *
     * - `0`, `1`, `5`, `6`, `10`, `14`, `15`, `17`, `20`, `23`, `24`: all of them are
     *   `ScreenEffect::RegisterChain` calls (`EclExIns.cpp:47-120`, `:801`) that ask
     *   the post-process manager for a chain - screen tint, shake, the 幻想庭园
     *   barrier wash. They change nothing about the simulation, and the port has no
     *   post-process chain manager, so skipping them costs pixels and not behaviour.
     * - `12` (`ReisenFreezeBullets`, `EclExIns.cpp:620-660`) plus `13`: the stage-5
     *   bullet freeze, which writes every live bullet's velocity to the release
     *   heading and swaps its sprite band. This is a real gameplay effect and the
     *   most-used `ex` in the shipped scripts (18 calls). It is not modelled yet.
     * - `22` (`MokouResurrection`, `:846`): a cut-in banner for stage 3's Mokou card.
     * - `30`: bump `g_ScreenEffectCounter`.
     * - `31` (`FUN_00425390`, `:971`): drop a 点 or 符 item depending on
     *   `Player+0xFDC` - i.e. it asks whether a spell card is playing.
     * - `26` (`FUN_00425070`, `:897`): `g_EclScriptedGlobalUpdateFreeze`, which the
     *   port already reaches through `StageRunner.worldFreeze`; the conversation and
     *   menu producers share that one channel with it.
     *
     * `ex 18` (`FUN_00424f90`, `EclExIns.cpp:825-837`) is the global slow-motion:
     * `g_EclGameTimeScale = 1 / value`, and `EclGlobals.cpp:117` makes that global
     * *be* `g_Supervisor.framerateMultiplier`, so every consumer that multiplies its
     * step by it crawls together - bullets launch and renormalise slower
     * (`BulletManager.cpp:184`, `:1192-1417`), enemy motion slows
     * (`EnemyManager.cpp:63-89`, `EnemyManagerUpdate.cpp:486`), so do lasers
     * (`:1046`), items (`ItemManager.cpp:210`), the ship itself
     * (`Player.cpp:880`) and its 妖力 meter (`:939`). Stage 6b opens with
     * `ex 18 4` and restores it with `ex 18 1`.
     */
    setMisc136(sub: number, value: number): void;
    setMisc144(..._args: number[]): void;
    setMisc145(..._args: number[]): void;
    setMisc147(..._args: number[]): void;
    /** op 153 (`EclRunHigh.inl:978-981`): the countdown now expires into death. */
    resetSpellTimerSub(): void;
    /** op 155: stop the countdown from charging a card for time or bullets. */
    setMisc155(...args: number[]): void;
    setMisc159(..._args: number[]): void;
    /**
     * op 160 (`EclRunHigh.inl:1003`): arm `enemy+0x5354`, the damage-freeze timer.
     * While it runs a boss takes a ninth of the frame's damage and a plain enemy takes
     * none, which is the grace window a script uses to make an entrance unhittable
     * without switching the sprite off.
     */
    setMisc160(...args: number[]): void;
    setMisc165(..._args: number[]): void;
    setMisc167(..._args: number[]): void;
    /**
     * Op 173 (`EclRunHigh.inl:1045-1047`): `EMUF1_PAUSE_TIMER`. Hold this slot's script
     * for the duration of a player card.
     */
    setMisc173(...args: number[]): void;
    /**
     * Op 175 (`EclRunHigh.inl:1104`): arm or clear the shared table slot 91, which
     * every timeline spawn checks before it is allowed to put an enemy on screen.
     */
    pauseEnemySpawns(...args: number[]): void;
    setMisc177(..._args: number[]): void;
    setMisc178(..._args: number[]): void;
    setMisc182(..._args: number[]): void;
    /**
     * op 183 (`EclRunHigh.inl:1048-1050`): `EMUF1_NO_DAMAGE_DURING_STOP`. Armed, the
     * slot is skipped by the whole shot/damage pass while Sakuya's clock is stopped.
     */
    setMisc183(...args: number[]): void;
}
//# sourceMappingURL=EnemySlot.d.ts.map