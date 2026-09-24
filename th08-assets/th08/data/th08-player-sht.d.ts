/**
 * Generated from public/assets/th08/raw/plyNN*.sht by tools/th08/sht/generate.mjs.
 * Do not edit by hand.
 *
 * The eight shipped firing tables, verbatim, plus the two twelve-entry file
 * maps retail uses to choose them: `Player.primaryShtFile` takes
 * `g_Player1ShtFiles[shotType]` and `secondaryShtFile` takes
 * `g_Player2ShtFile[shotType]`, and `FUN_00450f60:3097-3101` reads the
 * secondary set only while `Player+3` says the ship is settled into focus.
 */
/** The raw bytes of one `.sht`, base64, keyed by its retail filename. */
export declare const TH08_SHT_FILES: Readonly<Record<string, string>>;
/** `g_Player1ShtFiles` (`Player.cpp:49-52`), by shot type 0-11. */
export declare const TH08_PRIMARY_SHT: readonly string[];
/** `g_Player2ShtFile` (`Player.cpp:54-57`), by shot type 0-11. */
export declare const TH08_SECONDARY_SHT: readonly string[];
/** `g_PlayerAnmFilenames` (`Player.cpp:44-47`): the pack that animates each type. */
export declare const TH08_PLAYER_ANM_BY_SHOT_TYPE: readonly number[];
//# sourceMappingURL=th08-player-sht.d.ts.map