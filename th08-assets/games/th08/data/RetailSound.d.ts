/**
 * The shipped game's sound-effect bank, transcribed.
 *
 * Two arrays in `SoundPlayer.cpp` decide every sound the game can make:
 * `g_SFXList` (`:30-37`) names the 36 recordings, and `g_SoundBufferIdxVol`
 * (`:20-29`) turns a `SoundIdx` (`SoundPlayer.hpp:17-66`) into one of those
 * recordings plus a level in millibels. Together they are the whole sound design:
 * which file, how loud, and - because the player queues by index - which sounds can
 * never overlap themselves.
 *
 * Everything here is data, so `RETAIL_SE_FILES.length` and the entry count are
 * asserted in `RetailSound.test.ts` against the decompilation rather than trusted.
 */
import type { SeSource, SoundEffectType } from '../../../engine/audio/AudioManager';
/** `g_SFXList` (`SoundPlayer.cpp:30-37`), in buffer order. */
export declare const RETAIL_SE_FILES: readonly string[];
/**
 * `g_SoundBufferIdxVol` (`SoundPlayer.cpp:20-29`), one row per `SoundIdx`.
 *
 * The `unk` column of the struct is left out: it is written to `unk408[]` and never
 * read on any path in the decompilation.
 */
export declare const RETAIL_SE_VOL: readonly {
    buffer: number;
    mb: number;
}[];
/**
 * The indices gameplay reaches for, with the call site that proves the meaning.
 *
 * The decompilation only has the enum's placeholder names, so each of these is
 * anchored to the code that plays it.
 */
export declare const SE_IDX: {
    /**
     * The ship's firing sound, and the one number in this table that is not inferred
     * from a call site: every firing entry in all eight shipped `.sht` files carries
     * `entry+0x26 == 0`, and `FUN_0044fb70:2666-2670` plays exactly that id, panned by
     * the muzzle. It is `SOUND_SHOOT` - the same id the pause menu's cursor tick uses
     * (`AsciiManager.cpp:925`), which is a fact about ZUN's sound list and not a
     * reason to look elsewhere for the shot.
     */
    readonly shot: 0;
    /**
     * `Player.cpp:1327`, inside `FUN_0044cbf0`: the tail of a spell card, which counts
     * down `Player+0xE2A68` (six frames, armed by the card at `:1290` and cleared by
     * the respawn draw at `:1431`), pays fifteen 时符, bursts effect 6 sixteen times,
     * and plays this on the last frame. It used to be the port's idea of the firing
     * sound, because it is the only `PlaySoundPositionedByIdx` in the file panned by
     * the ship's x - and `se_tan00` looks like a shot. The `.sht` row above settles it.
     */
    readonly cardEnd: 15;
    /** `PlayerBomb.cpp:215` and eleven siblings: every team's bomb opens with this. */
    readonly bomb: 13;
    /** `Player.cpp:539`. */
    readonly playerDeath: 4;
    /** `Player.cpp:503`, panned by where the graze happened. */
    readonly graze: 30;
    /** `EnemyManagerUpdate.cpp:924/926` - the second one is the low-health variant. */
    readonly enemyDamage: 20;
    readonly enemyDamageLow: 37;
    /** `EnemyManager.cpp:328`: `chainIndex % 2 + 2`, so a familiar's death alternates. */
    readonly enemyDeath: 2;
    /** `Spellcard.cpp:981/1019` and `:1248`. */
    readonly spellDeclare: 14;
    readonly spellCapture: 35;
    /** `PlayerBomb.cpp:1101/1228/1359` and `BulletManager.cpp` laser paths. */
    readonly laser: 17;
    /** `ItemManager.cpp:393` picks between these two by item type. */
    readonly item: 21;
    readonly itemAlt: 44;
    /** `ItemManager.cpp:348/447/594` and `GameManager.cpp:255`. */
    readonly powerUp: 31;
    readonly extend: 28;
    /** `GameManager.cpp:447`. */
    readonly pause: 34;
    /** `Gui.cpp:682` (move), `:1648` + `AsciiManager.cpp:793` (confirm), back. */
    readonly menuMove: 12;
    readonly menuConfirm: 10;
    readonly menuBack: 11;
    /** `Player.cpp:1215`: trying to bomb with zero bombs left. */
    readonly invalid: 41;
    /** `TitleScreen.cpp:1082` and `Gui.cpp:1646`. */
    readonly timeout: 29;
    readonly timeout2: 38;
    /** Our own two, above the retail range. */
    readonly bonus: 46;
    readonly border: 47;
};
/**
 * The engine's legacy sound names, expressed as retail indices.
 *
 * `playSE('shoot')` used to pick a file by guesswork; this is where the guess got
 * replaced by the table. `'pldead'` is the engine's name for index 4.
 */
export declare const SE_BY_NAME: Partial<Record<SoundEffectType, number>>;
/**
 * `SoundPlayer::PlaySoundPositionedByIdx` maps the 384-wide playfield onto the
 * DirectSound pan range: `((x - 192) * 1000) / 192` (`SoundPlayer.cpp:523`). The
 * same law in -1..1 units is what the bus wants.
 */
export declare function panFromPlayfieldX(x: number): number;
/** Everything the engine's SE bus needs to speak this game's sounds. */
export declare const RETAIL_SE_SOURCE: SeSource;
//# sourceMappingURL=RetailSound.d.ts.map