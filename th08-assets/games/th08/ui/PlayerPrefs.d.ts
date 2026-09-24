/** Persisted player preferences (options menu + pause menu write these). */
export type TouchMode = 'auto' | 'always' | 'never';
/**
 * Which art the ship wears. 'taisei' takes the vendored upstream sheets for the
 * three members Taisei covers; 'painted' uses our own loop for all eight so a
 * focus switch never jumps between two drawing styles.
 */
export type PlayerSkin = 'taisei' | 'painted';
export interface PlayerPrefs {
    /** Steer the ship with the mouse cursor. Off by default so keyboard play is untouched. */
    mouseControl: boolean;
    /**
     * Hardware fog on the 3D backdrop. Retail's own graphics flag (`cfg.opts.disableFog`,
     * `Supervisor.cpp:1462`), and on by default here too: the `.std` backdrops are
     * authored around a colour mix, and 38 of the 52 fog settings are not black.
     */
    fog: boolean;
    /** Ship art style. */
    playerSkin: PlayerSkin;
    /** Virtual button layer for touch devices. */
    touchControls: TouchMode;
    /** Background music volume, 0..1. */
    bgmVolume: number;
}
export declare const DEFAULT_PREFS: PlayerPrefs;
export declare function loadPrefs(): PlayerPrefs;
export declare function savePrefs(prefs: PlayerPrefs): void;
//# sourceMappingURL=PlayerPrefs.d.ts.map