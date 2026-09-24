/**
 * Bullet transform records: the half of ECL that actually makes danmaku move.
 *
 * A shot instruction (`EnemySlot.dispatchShot`) only picks a starting heading and
 * speed. Everything interesting after that - bullets that accelerate out of a
 * cluster, curve, stop, restart, bounce off the frame, wrap around it, change
 * sprite mid-flight, split into a nested pattern, or simply expire - comes from a
 * chain of up to 18 `BulletTransformRecord`s that the launcher copies into the
 * bullet (`BulletManager.cpp:261`). ECL opcode 111 installs one record at a time
 * (`EclRunHigh.inl:414-428`), and it writes them into the shot descriptor that
 * lives at `enemy+0x2E24`, which is why the record has to be in place before the
 * `spawnShot` that uses it.
 *
 * Two things about the walker matter as much as the handlers:
 *
 * - A record only applies to a bullet whose shot flag word carries its kind bit
 *   (`BulletManager.cpp:340`), so one setup can serve the eight bullets of a ring
 *   with different behaviour each.
 * - A record with `allowWhileActive == 0` is *held back* while any other handler
 *   is armed. Kind `WAIT` exists to exploit exactly that: it arms a handler that
 *   does nothing but count down, which blocks the rest of the chain until it
 *   clears. That is how retail times a bullet's second and third moves.
 */
import type { Bullet, BulletPool } from './BulletPool';
/** `BulletTransformRecord`, 0x18 bytes (`BulletManager.hpp:11-20`). */
export interface ShotRecord {
    /** Which handler this arms, and which shot flag bit gates it. */
    kind: number;
    /** Apply even while another handler is armed. */
    allowWhileActive: number;
    int0: number;
    int1: number;
    float0: number;
    float1: number;
}
/** The 18 slots the original reserves. */
export declare const SHOT_RECORD_SLOTS = 18;
/** A fresh, inert record: kind 0 terminates the chain. */
export declare function blankShotRecord(): ShotRecord;
export declare function blankShotRecords(): ShotRecord[];
/**
 * `Bullet::FUN_0042ffc0:346-477`. The values are the `record->kind` the switch
 * compares against, and they double as the shot flag bits that admit them.
 */
export declare const REC: {
    /** 16-frame outward push added to the bullet's own speed at birth. */
    readonly BIRTH_PUSH: 1;
    /** Constant acceleration along a fixed heading. */
    readonly ACCELERATE: 16;
    /** Per-frame speed and heading deltas: the curve and the slow-down. */
    readonly CURL: 32;
    /** Bleed to a stop, then step the heading and restart. Relative turn. */
    readonly RAMP_TURN: 64;
    /** Same cycle, but re-aims at the ship each time it restarts. */
    readonly RAMP_HOME: 128;
    /** Same cycle with an absolute heading. */
    readonly RAMP_SET: 256;
    /** Bounce off the left and right frame, and off the top. */
    readonly BOUNCE: 1024;
    /** Bounce off the left and right frame only. */
    readonly BOUNCE_X: 2048;
    /** Ignore the off-field test for `int0` frames. */
    readonly HOLD: 8192;
    /** Change to bullet type `int0`, sprite `int1`, mid-flight. */
    readonly RESPRITE: 16384;
    /** Expire: the bullet fades out and hands the slot back. */
    readonly FADE_OUT: 262144;
    /** Play a sound and move on. */
    readonly SOUND: 524288;
    /** Hold the chain for `int0` frames without doing anything else. */
    readonly WAIT: 131072;
    /** Wrap horizontally across the playfield. */
    readonly WRAP_X: 4194304;
    /** Wrap vertically across the playfield. */
    readonly WRAP_Y: 8388608;
    /** Split: fire a nested pattern from the bullet and fade the parent. */
    readonly FORK: 16777216;
};
/** The shot flag that makes a bullet immune to cancellation and collection. */
export declare const SF_NO_CANCEL = 4096;
/** The shot flags that put a bullet through an appearing animation instead. */
export declare const SF_APPEAR: number;
/**
 * The armed-handler mask that earns a grace window off-field. Bounce and
 * respawn can bring a bullet back, so retail gives it 0x80 frames first - and
 * tests it against the active handler word 0xDAC, not the shot flag word
 * (`BulletManager.cpp:864`).
 */
export declare const AF_GRACE = 3520;
/** `bullet+0xDB8`: 0 free, 1 live, 2..4 appearing, 5 dying. */
export declare const BULLET_LIVE = 1;
export declare const BULLET_DYING = 5;
/** A bullet only collides while it is fully live. */
export declare function isLive(b: Bullet): boolean;
/** What a record needs from the running game. */
export interface BulletWorld {
    playerX: number;
    playerY: number;
    /** Retail's `g_Rng`, which the random aim modes draw from. */
    rng: {
        randomF32InRange(range: number): number;
    };
    /** Collision radius for a bullet type, from the host's etama table. */
    radiusFor(type: number): number;
    /** Sprite half-width for a bullet type, which sets the off-field margin. */
    sizeFor(type: number, color: number): number;
    /** `transformSound` / `spawnSound` ids, played by the host. */
    onSound(id: number, x: number): void;
    /**
     * `g_EclGameTimeScale` (`EclGlobals.cpp:117`), which is `g_Supervisor`
     * `.framerateMultiplier`. Retail scales a bullet's *velocity* by it at every
     * site that (re)writes velocity, while the raw speed field `+0xD68` stays
     * unscaled - which is what lets a slow-motion start mid-flight and end again.
     * Absent means the host has no such effect, i.e. 1.
     */
    timeScale?: number;
}
/**
 * One sound the scripts asked for during a frame, with the position that places it.
 *
 * Retail has two entry points - `PlaySoundByIdx` and `PlaySoundPositionedByIdx`
 * (`SoundPlayer.cpp:487/516`) - and the second one is what every bullet and hit
 * sound uses, so the x has to survive all the way to the audio layer.
 */
export interface SeTick {
    id: number;
    /** Playfield x, or `Number.NaN` when the request carries no position. */
    x: number;
}
/**
 * `BulletSpawnDescriptor` as the launcher needs it: the shot instruction resolved
 * against the enemy's registers, plus the record chain that rides along with it.
 */
export interface ShotPattern {
    /** 0..8, from the opcode. */
    aimMode: number;
    type: number;
    color: number;
    count1: number;
    count2: number;
    speed1: number;
    speed2: number;
    angle: number;
    angleStep: number;
    transformFlags: number;
    records: readonly ShotRecord[];
    /** `transformStartIndex`: where a forked pattern starts in the chain. */
    startIndex: number;
    /** `transformSound`, armed at the first record that needs it. */
    transformSound: number;
    /** Collision radius, resolved by the launcher from the host's table. */
    radius: number;
    /** Sprite half-width, resolved the same way. */
    halfSize: number;
    /** Frames spent appearing; retail gets this from the template's ANM script. */
    appearFrames: number;
    /** `player` only for shots a host fires by hand, outside the machine. */
    tag?: 'enemy' | 'player';
}
/** A one-slot pattern for hosts that just want a plain bullet. */
export declare function simplePattern(over?: Partial<ShotPattern>): ShotPattern;
/**
 * Frames a bullet stays in its appearing animation. Retail ends it when the
 * template`s birth ANM script finishes; the template table at raw 0x4c6d30 is not
 * recoverable from the shipped data, so this is the one number in the file that is
 * an estimate rather than a transcription. 8 frames is short enough that no bullet
 * is ever unfair, and long enough that a cluster materialises instead of popping.
 */
export declare const DEFAULT_APPEAR_FRAMES = 8;
/** Frames a bullet that expires by record lingers while it fades out. */
export declare const DEATH_FRAMES = 8;
/**
 * `BulletManager::FUN_00430e10` + `FUN_0042f5f0`: lay out one shot instruction and
 * put every bullet it describes into the pool.
 *
 * The nine aim modes are the opcode minus 96, and the operand order is
 * `BulletManager.hpp`'s `BulletSpawnDescriptor`. A full array stops the pattern
 * where it stands, which is retail behaviour and not a fallback: 0x600 slots is
 * the real ceiling.
 */
export declare function launchPattern(pool: BulletPool, world: BulletWorld, p: ShotPattern, x: number, y: number): number;
/**
 * `Bullet::FUN_0042ffc0`: consider one record per frame.
 *
 * Records that the shot flag word rejects are skipped in the same call, so a
 * mixed ring walks straight through the slots that are not for it. `HOLD`,
 * `RESPRITE`, `SOUND` and `FORK` chain onward without waiting for the next frame;
 * every other kind arms a handler and stops.
 */
export declare function advanceShotRecords(b: Bullet, world: BulletWorld, pool: BulletPool | null): void;
/**
 * The armed-handler dispatch, `BulletManager::OnUpdate:822-849`, in the original's
 * bit order. Each one is the matching `Bullet::FUN_00432xxx`.
 */
export declare function runShotHandlers(b: Bullet, world: BulletWorld): void;
/** Clear a single transform bit; `^=` in the original, `&= ~` everywhere else. */
export declare function clearBit(bit: number): number;
//# sourceMappingURL=BulletTransform.d.ts.map