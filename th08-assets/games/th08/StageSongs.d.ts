/**
 * Which recording a stage actually plays, read out of that stage's own `.std`.
 *
 * A stage archive names four songs in its header and every music change in the
 * game is an index into them. The header holds `songNames` at `+0x90` and
 * `songPaths` at `+0x290`, four `char[128]` slots each (`StdFile.ts:30-40`,
 * `Background.cpp:24-27`), and the retail loader reads them positionally:
 *
 *     u8 *stageData = g_Background.stageAnmSecondary;
 *     g_Supervisor.LoadMusic(0, stageData + 0x290);
 *     if (stageData[0x310] != ' ') g_Supervisor.LoadMusic(1, stageData + 0x310);
 *     if (stageData[0x390] != ' ') g_Supervisor.LoadMusic(2, stageData + 0x390);
 *
 * - `GameManager.cpp:1075-1092` - the three lines above. An unused slot is a
 *   single space rather than a NUL, which is why `stage2.std` registers two songs
 *   and not four, and why `isNamedSong` trims instead of testing for emptiness.
 * - `Supervisor::LoadMusic` (`Supervisor.cpp:1552-1578`) binds a slot number to a
 *   path, swapping the `.mid` suffix for `.wav` at `:1570-1573`;
 *   `Supervisor::PlayMusic` (`:1583-1617`) plays a slot number back with
 *   `QueueCommand(2, slot, "dummy")`. So the operand of every call below really
 *   is an index into `songPaths`, and the `.mid` names are the same recordings
 *   this module resolves to `.ogg`.
 * - `GameManager.cpp:417` plays slot 0 once a stage has finished loading, and
 *   `:415` skips that entirely under spell practice, where a card table chooses the
 *   slot instead.
 * - Message op 7 (`Gui.cpp:758-788`) plays slot `arg`, or stops the audio when
 *   `arg < 0` (`:762`). Every boss-theme change in the original is one of these:
 *   all 32 shipped `msg*.dat` ask for slot 1 from inside the boss's first
 *   conversation, and `msg6*`/`msg7*` also reach slot 2 and the stop.
 *
 * The paths reach here through the generated backdrop table (`data/th08-std.ts`,
 * exposed by `stdSongPaths` at `StdBackground.ts:308`), so nothing fetches or
 * parses a stage archive at runtime. None of this is a picked playlist, which is
 * why stage 1 resolves to `th08_00` - a recording the old hand table insisted
 * belonged to the title screen.
 */
import { type BgmTrack } from './data/bgm-tracks';
/** `bgm/th08_03.mid` -> `th08_03`, the name `bgm-tracks.ts` is keyed by. */
export declare function songNameFromPath(path: string): string;
/** The songs a route registered, in retail slot order, unused slots dropped. */
export declare function stageSongPaths(stdKey: string | null): string[];
/**
 * Resolve retail song slot `index` of one route into a playable recording.
 *
 * `STAGE_BGM` only answers for a route with no generated backdrop entry at all,
 * which in the reproduced campaign means nothing: all eight routes have a std.
 */
export declare function stageSongTrack(stdKey: string | null, index: number, stageNumber: number): BgmTrack | null;
//# sourceMappingURL=StageSongs.d.ts.map