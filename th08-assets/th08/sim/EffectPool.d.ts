/**
 * Retail's effect pool, driven by the real template table.
 *
 * ECL never names a sprite. Ops 128/139/140/174 hand `EffectManager` an *effect id*,
 * `g_EffectTemplates[id]` turns that id into a script index in `etama.anm` plus the two
 * callbacks that move it, and the draw chain blits whatever sprite that script happens to
 * select (`EffectManager.cpp:121-190`, `:1061-1210`, `EclRunHigh.inl:667-680`,
 * `:793-812`). The scripts already animate sprite, scale, rotation and colour every
 * frame, so a faithful port is a slot pool, one ANM VM per slot, and the handful of
 * movers the shipped stages reach.
 *
 * Positions are kept the retail way round: the pool's own `x/y` (the decompile's
 * `vector0`) is what gets drawn, while the VM's own `pos` belongs to the script and is
 * re-overwritten by `Draw2D` each frame (`EffectManager.cpp:1195-1205`). That is why an
 * effect without a mover sits exactly where it was spawned and only its art moves.
 */
import { AnmVm, type AnmRng } from '../../engine/anm/AnmVm';
/** One row of `g_EffectTemplates`, as the generator lifts it. */
export interface EffectTemplateRow {
    readonly scriptIdx: number;
    readonly update: string | null;
    readonly init: string | null;
}
export interface EffectPoolDeps {
    rng: AnmRng;
    templates: readonly EffectTemplateRow[];
    /** Base64 ANM words per script index; null when the pack is not available. */
    scriptBytes: readonly (string | null)[];
    /**
     * The `.std` camera, read fresh every frame, for the movers that live in the
     * backdrop's world rather than on the playfield. Absent, those movers fall back
     * to drifting where they were spawned, which is what the unit tests exercise.
     */
    camera?: () => EffectCamera | null;
}
/**
 * `g_Background.unk6394`, as far as an effect cares: the eye, the look-at offset,
 * the normalized direction the cull measures against, and the projection that turns
 * a backdrop-space point into playfield pixels.
 */
export interface EffectCamera {
    readonly eye: {
        x: number;
        y: number;
        z: number;
    };
    readonly at: {
        x: number;
        y: number;
        z: number;
    };
    readonly dir: {
        x: number;
        y: number;
        z: number;
    };
    /** World point to playfield pixels, or null once it stops projecting. */
    project(x: number, y: number, z: number): {
        x: number;
        y: number;
        scale: number;
    } | null;
}
/** Where one effect wants its sprite drawn, in field coordinates. */
export interface EffectView {
    /** Template id, so a host can special-case one effect if it has to. */
    readonly id: number;
    /** ANM script index, which is how a test names the art it expects. */
    readonly scriptIdx: number;
    /** Sprite cell the script currently selects, in `etama.anm` numbering. */
    readonly sprite: number;
    readonly x: number;
    readonly y: number;
    readonly rotation: number;
    readonly scaleX: number;
    readonly scaleY: number;
    /** 0..1, folded through the spawn colour's alpha. */
    readonly alpha: number;
    /** RGB: the vertex colour multiplied by the spawn colour. */
    readonly tint: number;
    readonly additive: boolean;
}
export interface SpawnOptions {
    /** How many slots one call fills, retail's `count` operand. */
    count?: number;
    /** Packed ARGB as ECL passes it, where -1 is white. */
    color?: number;
    /** Orbit axis, from op 128 operands 1..3. */
    axis?: {
        x: number;
        y: number;
        z: number;
    };
    /** Radius the orbit grows out to, from op 128 operand 4. */
    radius?: number;
    /** `velocity` for ops 139/140: x is an angle, y/z carry the ember throw. */
    velocity?: {
        x: number;
        y: number;
        z: number;
    };
    /**
     * Owner position for the orbit family. Retail advances each of an enemy's orbit
     * effects from that enemy's own update (`Enemy::FUN_0042e010`, `EnemyManager.cpp:1019-1049`).
     */
    ownerPos?: () => {
        x: number;
        y: number;
    } | null;
    /** Op 174 uses the second, 128-slot pool and can arrive on an interrupt label. */
    secondary?: boolean;
    /**
     * A dedicated record of the retail pool, addressed by number instead of by cursor.
     *
     * `EffectManager.cpp:269-271` -- `FUN_00425870` -- is the spawner the *host* code uses:
     * it takes `(slotIndex + 0x280) * 0x360 + 0x1C`, frees whatever script was living there,
     * and `memset`s the whole 0x360-byte record before starting the new script. So the
     * ship's 判定点光环 is always record 2 (`Player.cpp:707`), its death flare record 8
     * (`:973`), the options record 3 (`:1325`), and a re-press replaces a ring that is still
     * fading instead of stacking a second one under it.
     */
    slotIndex?: number;
    interrupt?: number;
}
/** Slots in the two retail pools: `0x200` scanned by the rotating cursor, `0x80` by the second spawner. */
export declare const EFFECT_MAIN_SLOTS = 512;
export declare const EFFECT_SECONDARY_SLOTS = 128;
/**
 * Records past the 640 pooled slots that `FUN_00425870` addresses by number. The shipped
 * object runs to `(0x89BFC - 0x1C) / 0x360 == 653` records, so 640 pooled plus 13 named;
 * 16 leaves room for the highest index any caller in the decompile uses (12).
 */
export declare const EFFECT_DEDICATED_SLOTS = 16;
/** The pool-side state of one effect, named after the decompile's fields. */
interface EffectState {
    id: number;
    /** `vector0`: the drawn position. */
    x: number;
    y: number;
    z: number;
    /** `vector5`: the anchor a radial mover measures from. */
    ox: number;
    oy: number;
    /** `vector6`: unit direction, sometimes pre-scaled. */
    dx: number;
    dy: number;
    /**
     * `vector2`/`vector3`/`vector4`: velocity, acceleration, integrated position.
     *
     * The ember movers keep these in backdrop world units and only fold them into
     * `x/y` through the camera, because that is what retail does
     * (`EffectManager.cpp:511-521`, `:534-545`).
     */
    vx: number;
    vy: number;
    vz: number;
    ax: number;
    ay: number;
    az: number;
    sx: number;
    sy: number;
    sz: number;
    /** Pixels per backdrop unit at the ember's depth; 1 for everything on the field. */
    depthScale: number;
    /** `vector1`: the spawn velocity, whose x is an angle for three of the movers. */
    vAng: number;
    vY: number;
    vZ: number;
    /** Orbit axis, radius, phase, and the radius the owner is growing towards. */
    axisX: number;
    axisY: number;
    axisZ: number;
    radius: number;
    target: number;
    angle: number;
    /** `0x352`/`0x353`: the orbit's fade-out clock. */
    dying: boolean;
    fade: number;
    timer: number;
    color: number;
    ownerPos: (() => {
        x: number;
        y: number;
    } | null) | null;
}
/** What a mover can ask the host for. Only the `.std` families need it. */
export interface EffectMoverContext {
    camera(): EffectCamera | null;
}
/**
 * A mover: `init` runs on the spawn frame, `update` runs before the script every frame.
 *
 * Both keep the decompile's convention, where `update` returning false retires the effect
 * and `init` returning false fails the spawn (`EffectManager.cpp:165-172`, `:1090-1096`).
 */
interface EffectBehaviorPort {
    init?(state: EffectState, vm: AnmVm, rng: AnmRng, fx: EffectMoverContext): boolean;
    update?(state: EffectState, vm: AnmVm, rng: AnmRng, fx: EffectMoverContext): boolean;
}
/**
 * The movers the shipped stages reach, keyed by the decompile's own names.
 *
 * Two families are deliberately approximated, and the approximation is recorded rather
 * than hidden: `FUN_004272e0`/`FUN_00427450` (ids 40 and 51) tessellate their own ribbon
 * mesh instead of blitting a cell, and ids 51/63 place themselves in the `.std` world with
 * a camera-facing cull (`:534-578`). Both draw here as the retail sprite on the retail
 * motion curve, in field space.
 */
export declare const EFFECT_BEHAVIORS: Record<string, EffectBehaviorPort>;
/**
 * A live effect the spawner keeps a hold of.
 *
 * `EnemyManager.cpp:245-253` is the only place retail reaches back into an effect: when
 * the owner dies, each of its orbit effects is flagged to fade over 16 frames.
 */
export interface EffectHandle {
    /** `effect+0x352 = 1`: start the fade that retires the effect. */
    fade(): void;
    /**
     * `effect+0x350 = 0`: retire it on the spot, which is what ECL 174 does to the effect
     * it replaced before spawning the next one (`EclRunHigh.inl:1090-1092`).
     */
    stop(): void;
    /**
     * `AnmVm::SetInterrupt(code)` on the effect's own VM, which is how the host reaches
     * into a script that is already running: the ship's 判定点光环 sits on `STOP` until
     * `Player.cpp:769` sends label 1, and only that branch fades it out over 30 frames.
     */
    interrupt(code: number): void;
}
/**
 * The effect pool.
 *
 * `update()` belongs next to the bullet and laser ticks: retail runs effects on their own
 * calc chain, but the ordering that matters -- movers first, then the script, then the
 * timer -- is inside this class.
 */
export declare class EffectPool {
    private readonly rng;
    private readonly templates;
    private readonly scriptBytes;
    private readonly main;
    private readonly secondary;
    private readonly dedicated;
    private readonly scriptCache;
    private readonly viewList;
    private cursor;
    /** Handed to every mover, so the `.std` families can find the backdrop camera. */
    private readonly mover;
    /** Effects started since the pool was built, for hosts that want a counter. */
    spawned: number;
    /** Spawns that found every slot busy, which is retail's silent drop. */
    dropped: number;
    /** Template ids whose script was not in the pack, which should stay empty. */
    missingScript: number;
    constructor(deps: EffectPoolDeps);
    /** What to draw this frame, in pool order. */
    get views(): readonly EffectView[];
    /** Live slots across the two pools and the dedicated records. */
    get live(): number;
    /** Draw order follows the retail object layout: pooled first, named records last. */
    private get banks();
    /**
     * Start `count` effects of one template at one position.
     *
     * Returns a handle for the last slot filled, or null when the pool had nothing free,
     * which is what `SpawnEffect` does when its 512-slot scan comes round (`:131-190`).
     */
    spawn(id: number, x: number, y: number, opts?: SpawnOptions): EffectHandle | null;
    /** Advance every live effect by one frame and rebuild the draw list. */
    update(): void;
    /** Empty the pool, as `ResetEffects` does between stages (`EffectManager.cpp:114-117`). */
    clear(): void;
    /** Decode one script index once per session, the way `EclStageLoader` caches ANM packs. */
    private words;
    /** Next free slot, walking the ring the way the retail cursor does. */
    private acquire;
    private start;
}
export {};
//# sourceMappingURL=EffectPool.d.ts.map