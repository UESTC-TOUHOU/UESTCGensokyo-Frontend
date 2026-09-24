/**
 * The recordings `thbgm.dat` holds, with the intro and loop points of each.
 *
 * Generated from `public/assets/th08/manifest.json` by
 * `tools/th08/gen-bgm-tracks.mjs`. Do not edit by hand: the loop points are
 * `thbgm.fmt` records, so the only way to change them is to re-extract. They
 * are the Web Audio `loopStart` (`introSeconds`) and `loopEnd`
 * (`loopSeconds`) of the sliced file, both measured from its start, which is
 * why `extract.mjs:163` adds the intro to the loop length.
 */
export interface BgmTrack {
    name: string;
    file: string;
    introSeconds: number;
    loopSeconds: number;
    totalSeconds: number;
}
export declare const TH08_BGM_TRACKS: BgmTrack[];
/**
 * Fallback songs per stage number, for a route whose `.std` is not in the
 * generated backdrop table. The values are those stages own `songPaths[0]`
 * and `songPaths[1]`, copied from the raw archives under
 * `public/assets/th08/raw/stage*.std` rather than guessed:
 *
 *     stage1 th08_00/th08_03    stage2 th08_04/th08_05
 *     stage3 th08_06/th08_07    stage4a th08_08/th08_09
 *     stage4b th08_08/th08_10   stage5 th08_11/th08_12
 *     stage6 th08_13/th08_14    stage7 th08_13/th08_15
 *     stage8 th08_18/th08_19
 *
 * 4A/4B share a stage number, and so do 6A/6B, so only one of each pair can be
 * held here; during a run the stage is keyed by route, so it reads the std and
 * never needs this. A slot 2 exists too - `th08_13b` on 6A and 6B - but only an
 * op 7 in that stages conversation can ask for it.
 */
export declare const STAGE_BGM: Record<number, {
    stage: string;
    boss: string;
}>;
/**
 * The title screen song. Retail registers it into music slot 8 by name:
 * `g_Supervisor.LoadMusic(8, "bgm/th08_01.mid")` then
 * `g_Supervisor.PlayMusic(8, 0)` (`TitleScreen.cpp:877-878`, also at `:302`,
 * `:1044` and `:3868`). It is not the stage 1 song, even though the two are
 * neighbours in `thbgm.fmt`: `stage1.std` gives `th08_00`.
 */
export declare const TITLE_BGM = "th08_01";
export declare function getBgmTrack(name: string): BgmTrack | undefined;
//# sourceMappingURL=bgm-tracks.d.ts.map