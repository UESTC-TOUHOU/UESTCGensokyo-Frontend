/**
 * Runtime context passed to every translated ECL generator.
 *
 * Each enemy (or boss) gets its own EnemyCtx. The generator reads and writes
 * the float/int registers on it, calls movement/shot/spawn primitives, and
 * yields frame counts to pause execution.
 *
 * This is the interface the translators emit against; the concrete
 * implementation lives in `src/th08/enemy/EnemyCtxImpl.ts` (P2).
 */
import type { LaserDescriptor, ShotDescriptor } from './ShotDescriptor';
export interface EnemyCtx {
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
    param0: number;
    param1: number;
    param2: number;
    param3: number;
    fparam0: number;
    fparam1: number;
    fparam2: number;
    fparam3: number;
    posX: number;
    posY: number;
    posZ: number;
    readonly playerX: number;
    readonly playerY: number;
    readonly playerZ: number;
    /**
     * Movement heading, `enemy+0x2D94` (register 0x2755). The scripts add PI to it
     * to aim a fan backwards, and `FUN_00422c40` integrates it every frame.
     */
    moveAngle: number;
    /** Per-frame heading delta, `enemy+0x2D98` (0x2756). */
    headingVel: number;
    /** Speed along the heading, `enemy+0x2DA8` (0x2757). */
    moveSpeed: number;
    /** Per-frame speed delta, `enemy+0x2DAC` (0x2758). */
    speedAccel: number;
    /** Orbit radius, `enemy+0x2DB0` (0x2759). */
    orbitRadius: number;
    /** Orbit angle, `enemy+0x2D9C` (0x275d). */
    orbitAngle: number;
    /** Per-frame orbit angle delta, `enemy+0x2DA0` (0x275e). */
    orbitAngleVel: number;
    /** Tween displacement, `enemy+0x2DC4/0x2DC8` (0x275f/0x2760). */
    tweenDX: number;
    tweenDY: number;
    /** Tween origin, `enemy+0x2DD0..0x2DD8` (0x275a..0x275c). */
    originX: number;
    originY: number;
    originZ: number;
    /** Sprite facing, owned by the ANM VM rather than by the ECL. */
    rotAngle: number;
    /** Per-frame spin applied to `rotAngle` while no ANM VM owns the sprite. */
    rotationRate: number;
    readonly timer: number;
    readonly hp: number;
    readonly hpF: number;
    readonly hpRatio: number;
    maxHp: number;
    maxHpF: number;
    readonly difficulty: number;
    readonly difficultyF: number;
    readonly rank: number;
    readonly rankF: number;
    readonly shotType: number;
    readonly shotTypeF: number;
    readonly enemyType: number;
    readonly enemySlot: number;
    readonly randAngle: number;
    readonly randU31: number;
    readonly randF32: number;
    readonly randU32: number;
    readonly randF32S: number;
    readonly randU31f: number;
    readonly randU32f: number;
    readonly randF32i: number;
    readonly randF32Si: number;
    /**
     * Register 0x2773: the only spell-card state a script may read -- whether a life gauge
     * is currently owned (`EnemySlot.spellCardState`).
     */
    readonly spellCardState: number;
    /** Frames left on the armed card countdown, the read half of the card timer. */
    readonly spellCardTimer: number;
    cf0i: number;
    cf1i: number;
    /** Context scratch floats, `context + 0x68` / `+ 0x6C` (registers 0x276e / 0x276f). */
    cf0: number;
    cf1: number;
    /** Third component of the tween vector, `enemy + 0x2DCC` (register 0x2761). */
    tweenDZ: number;
    /** Damage the last hit dealt, `enemy + 0x3354` (register 0x2763). */
    lastDamage: number;
    /**
     * Displacement the previous frame's integration actually produced
     * (`enemy + 0x2D64..0x2D6C`, registers 0x2765..0x2767). Read-only: retail has
     * no `ResolveFloatLValue` case for it.
     */
    readonly velocityX: number;
    readonly velocityY: number;
    readonly velocityZ: number;
    /** The four armed life-bar floors, `enemy + 0x3358 + i*4` (registers 0x2768..0x276b). */
    /** Attach-chain length this slot belongs to (register 0x2770). */
    readonly parentChainCount: number;
    /** 2 while the last spell is still payable, else 0 (register 0x2772). */
    readonly timeOrbReady: number;
    readonly phase0: number;
    readonly phase1: number;
    readonly phase2: number;
    readonly phase3: number;
    isDiff(mask: number): boolean;
    setAnm(script: number): void;
    setAnmScripts6(base: number): void;
    setAnmScripts6x(a: number, b: number, c: number, d: number, e: number, f: number): void;
    setAnmAlt(script: number): void;
    autoAnm(): void;
    setExtraAnm(...args: number[]): void;
    /** op 63: absolute position write, then `ClampPosition`. */
    setRelPos(x: number, y: number): void;
    setPos(x: number, y: number): void;
    /** op 65: aim indefinitely at `angle`/`speed` (mode 1, no duration). */
    setHeadingSpeed(angle: number, speed: number): void;
    /** op 66: timed straight segment -- `ConfigurePolarMotion`. */
    movePolar(duration: number, easing: number, angle: number, speed: number): void;
    /** op 64: timed tween to an absolute waypoint -- `ConfigureRelativeMotion`. */
    moveRelative(duration: number, easing: number, x: number, y: number): void;
    /** op 67: `BeginBoundaryAwareMove`, the random heading that dodges the walls. */
    moveBounce(duration: number, easing: number, speed: number): void;
    /** op 68: heading = operand + bearing to the player; mode is left alone. */
    moveToPlayer(angleOffset: number, speed: number): void;
    /** op 69: op 66 with the angle measured from the player. */
    moveToPlayerPolar(duration: number, easing: number, angle: number, speed: number): void;
    /** op 70: per-frame heading delta. */
    setHeadingVel(rate: number): void;
    /** op 71: per-frame speed delta. */
    setSpeedAccel(rate: number): void;
    /** op 72: start the orbit producer on an explicit anchor. */
    moveOrbit(duration: number, x: number, y: number, angle: number, angleVel: number, radius: number, radiusVel: number): void;
    /** op 73: orbit around this enemy's own position. */
    moveArc(duration: number, angle: number, angleVel: number, radiusVel: number): void;
    /** op 74: retune the live orbit without touching anchor or angle. */
    setAccel(duration: number, angleVel: number, radiusVel: number): void;
    /** op 75: arm `enemy+0x3340..0x334C`. */
    setMotionClamp(minX: number, minY: number, maxX: number, maxY: number): void;
    /** op 76: disarm it again. */
    clearMotionClamp(): void;
    setBounds(w: number, h: number): void;
    setBoundsAlt(w: number, h: number): void;
    /** op 79 — write the six script flag bits, three of them inverted. */
    writeScriptFlags(value: number): void;
    /** op 80 — clear script flag bits (`EclRunLow.inl:933-946`). */
    clearScriptFlags(value: number): void;
    /** op 81 — set script flag bits (`EclRunLow.inl:948-961`). */
    setScriptFlags(value: number): void;
    /** Op 82: stop firing while the player is within `radius` pixels. */
    setShotNoFireRadius(radius: number): void;
    /** Op 83: alternate hit flash (`enemy+0x3328` bit 1). */
    setHitFlash(flag: number): void;
    readIntRemote(slot: number, field: number): number;
    readFloatRemote(slot: number, field: number): number;
    callSubRemote(lane: number, sub: number): void;
    /** Run sub `sub` as an extra concurrent coroutine on this enemy (op 135). */
    callSubAlloc(lane: number, sub: number): void;
    setParams(a: number, b: number): void;
    /** op 90: launch a familiar at absolute offset (`x`, `y`). */
    linkChildStandard(sub: number, x: number, y: number, hp: number, dropType: number, score: number): void;
    /** op 91: launch a familiar offset from this enemy's position. */
    linkChildRelative(sub: number, x: number, y: number, hp: number, dropType: number, score: number): void;
    /** op 92: launch a familiar that keeps riding on this enemy. */
    linkChildAttached(sub: number, x: number, y: number, hp: number, dropType: number, score: number): void;
    spawnEnemy(...args: number[]): void;
    spawnEnemyAlt(...args: number[]): void;
    setInvuln(): void;
    clearInvuln(): void;
    enableDamage(): void;
    disableDamage(): void;
    setBossPresent(arg: number): void;
    setLives(count: number): void;
    eclSetLives(count: number): void;
    setLifeBarSlice(index: number, start: number, stop: number, color: number): void;
    setTimeout(frames: number): void;
    /** Secondary countdown the scripts park in an enemy register (op 2). */
    setSecondaryTime(frames: number): void;
    /** ECL op 2: how many frames the caller should wait, also arming timer B. */
    delay(frames: number): number;
    /**
     * Op 122: declare a spell card. The translator decodes the name/owner blob at
     * build time, so these arrive as the readable retail strings; `face` is the
     * script index into the boss's `face_stNN.anm` cut-in sheet.
     */
    startSpell(name: string, owner: string, number: number, face: number, bonus: number): void;
    /** Op 123: the card is down, captured, broken or timed out. */
    endSpell(): void;
    /**
     * Ops 96..104: launch shots. The descriptor is the instruction after register
     * elimination — every field is either a decoded literal or a `reg(id)` marker
     * that the runtime still resolves against the register file at fire time, which
     * is what ops 105..109 need in order to replay the same words later.
     */
    spawnShot(desc: ShotDescriptor): void;
    /** Op 109: fire the stored descriptor again. */
    spawnShotNow(): void;
    /** Op 105/106: repeat interval of the held shot instruction, in frames. */
    setShotRepeat(frames: number): void;
    setShotRepeatRand(frames: number): void;
    /** Op 107/108: park following shot instructions instead of firing them. */
    holdShots(): void;
    releaseShots(): void;
    /** Op 110: muzzle offset from the enemy position. */
    setShotOrigin(x: number, y: number): void;
    /** Ops 114/115: spawn a laser from its decoded geometry. */
    spawnLaser(desc: LaserDescriptor): void;
    aimAtPlayer(mode: number, angle: number): void;
    clearAllBullets(): void;
    removeBulletsRadius(radius: number): void;
    removeAllBullets(): void;
    nop(...args: number[]): void;
    nop3(...args: number[]): void;
    randSign(val: number): number;
    randSignF(val: number): number;
    complexBossInit(arg: number): void;
    complexSetup(...args: number[]): void;
    /** op 133: arm life-bar phase `i` at `threshold` -> ECL sub `sub`. */
    setPhase(i: number, threshold: number, sub: number): void;
    setSpellHP(...args: number[]): void;
    /** ECL op 111: install one bullet transform record in the shot descriptor. */
    setShotRecord(index: number, kind: number, allowWhileActive: number, int0: number, int1: number, float0: number, float1: number): void;
    /** ECL op 113: the shot spawn and transform sound ids. */
    setShotSound(spawn: number, transform: number): void;
    /**
     * ECL op 36: install one of the eight context interpolators. `variable` is the
     * raw destination operand, so a register arrives as its id and the slot keeps
     * resolving it every frame it runs.
     */
    interpSlot(variable: number, duration: number, callback: number, easing: number, p0: number, p1: number, p2: number, p3: number): void;
    setAnmScripts6Alt(base: number): void;
    setAnmScripts6xAlt(a: number, b: number, c: number, d: number, e: number, f: number): void;
    setExtraAnmAlt(...args: number[]): void;
    setColor(...args: number[]): void;
    setFloatField(field: number, value: number): void;
    setIntPair(a: number, b: number): void;
    setIntFields(...args: number[]): void;
    setGaugeTimer(...args: number[]): void;
    effectWithYoukai(arg: number): void;
    enemyFunc95(...args: number[]): void;
    /**
     * op 181: ring the night clock once. Retail takes no operand (`EclRunHigh.inl:1111-1121`
     * adds an hour and stops at twelve), so an argument here would be a lie the translator
     * never emits.
     */
    clockControl(): void;
    spawnEffectAngle(...args: number[]): void;
    spawnEffectAt(...args: number[]): void;
    spawnItemRandom(arg: number): void;
    setMisc116(...args: number[]): void;
    setMisc120(...args: number[]): void;
    setMisc126(...args: number[]): void;
    setMisc129(...args: number[]): void;
    /** op 130: ECL sub that takes over instead of a plain death (enemy+0x2CEE). */
    setDeathCallbackSub(sub: number): void;
    /** op 132: seek the spell countdown clock (enemy+0x2E14). */
    setSpellTimerElapsed(frames: number): void;
    /** op 134: arm the card countdown; `sub` runs when it expires. */
    setSpellTimer(frames: number, sub: number): void;
    /**
     * op 136, the `ex` family: `sub` indexes `g_EclExInsn` and `value` is that
     * handler's operand. Every shipped script calls it with exactly these two.
     */
    setMisc136(sub: number, value: number): void;
    setMisc144(...args: number[]): void;
    setMisc145(...args: number[]): void;
    setMisc147(...args: number[]): void;
    /** op 153: point the countdown expiry at the death sub and rewind. */
    resetSpellTimerSub(): void;
    setMisc155(...args: number[]): void;
    setMisc159(...args: number[]): void;
    setMisc160(...args: number[]): void;
    setMisc165(...args: number[]): void;
    setMisc167(...args: number[]): void;
    setMisc173(...args: number[]): void;
    pauseEnemySpawns(...args: number[]): void;
    setMisc177(...args: number[]): void;
    setMisc178(...args: number[]): void;
    setMisc182(...args: number[]): void;
    setMisc183(...args: number[]): void;
    spawnItem(type: number): void;
    spawnItemBatch(...args: number[]): void;
    spawnEffect(...args: number[]): void;
    playSfx(id: number): void;
    startStageBg(): void;
}
//# sourceMappingURL=EnemyCtx.d.ts.map