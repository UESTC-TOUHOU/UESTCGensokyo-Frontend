/**
 * Parser for Touhou 8 `.rpy` replay files.
 *
 * Every layout claim below is transcribed from the recompiled reference
 * (`th08web-ref/src/ReplayManager.{hpp,cpp}`) and then confirmed against the four
 * shipped title demos (`demo/demorpy0..3.rpy`, unpacked out of `th08.dat`).
 *
 * 1. **Obfuscation.** Every byte from `0x18` (`compressedSize`) to `fileSize` has
 *    a running key subtracted from it; the key starts at `header.value1` and
 *    grows by 7 per byte (`LoadReplayData:68-76`).
 * 2. **Checksum.** `0x3f000318` plus every byte from `value1` (0x15) to
 *    `fileSize`, compared with `header.checksum` (`LoadReplayData:78-89`). Retail
 *    treats a mismatch as fatal and so does this parser: it is the only in-file
 *    proof that the byte arithmetic above has not drifted.
 * 3. **Compression.** `Lzss::Decode` over `compressedSize` bytes at 0x68.
 * 4. **Stage blocks.** `stageReplayData[stage]` and `stageReplayData2[stage]`
 *    hold offsets that are absolute inside the *decoded* buffer, header included,
 *    which is why load adds the buffer base back (`AddedCallbackDemo:559-573`).
 *    `SaveReplay:735-757` writes every stage block in stage order and then every
 *    second block, so a block ends where the next recorded pointer starts.
 *
 * The input stream is one `u16` per frame, not a 6-byte record. `ReplayInputSync`
 * does exist, but only `OnUpdateHighPrioDemo2` reads it, and that reader is
 * installed only when `header.unk0x6 != 0` (`RegisterChain:176-179`). Every retail
 * demo carries `unk0x6 == 0`, so the live reader is `OnUpdateHighPrioDemo`, which
 * steps `replayInputs += sizeof(u16)` (`:329-330`). The data agrees: at stride 2
 * all four demos decode to a clean run of `TH_BUTTON_*` combinations and every
 * block size divides by 2, while at stride 6 two of the four do not even divide.
 */
/** `Global.hpp:97-126` - the bits `g_CurFrameInput` is built from. */
export declare const TH_BUTTON: {
    readonly shoot: number;
    readonly bomb: number;
    readonly focus: number;
    readonly menu: number;
    readonly up: number;
    readonly down: number;
    readonly left: number;
    readonly right: number;
    readonly skip: number;
    readonly q: number;
    readonly s: number;
    readonly home: number;
    readonly enter: number;
    readonly d: number;
    readonly reset: number;
};
/**
 * Every bit a recorded frame may carry. The gate asserts a decoded stream stays
 * inside this set, which is what proves the stride: one wrong byte of alignment
 * turns a run of legal button combinations into noise within a few frames.
 */
export declare const KNOWN_INPUT_BITS: number;
/** One decoded frame of recorded input. */
export interface ReplayButtons {
    up: boolean;
    down: boolean;
    left: boolean;
    right: boolean;
    shoot: boolean;
    bomb: boolean;
    focus: boolean;
    menu: boolean;
    skip: boolean;
}
/** Decode one recorded `g_CurFrameInput`. */
export declare function replayButtons(bits: number): ReplayButtons;
/** True when a recorded word only uses bits the retail input map defines. */
export declare function isKnownInput(bits: number): boolean;
/**
 * `StageReplayData` (`ReplayManager.hpp:22-40`). Everything in it is snapshotted
 * when the stage starts (`AddedCallback:510-523`) except `score`, which
 * `SaveReplay:730` overwrites with the score the run reached at the *end* of the
 * stage. That asymmetry is why the gate can reconcile score but never graze: the
 * recorded graze is what the stage began with, not what it produced.
 */
export interface StageReplayHeader {
    /** Cumulative score at the end of this stage. */
    score: number;
    pointItemsCollected: number;
    graze: number;
    pointItemExtends: number;
    nextPointItemExtendThreshold: number;
    pointItemValue: number;
    youkaiGauge: number;
    /** Seed playback restores through `g_Rng.SetSeed` (`AddedCallbackDemo:602`). */
    rngSeed: number;
    power: number;
    lives: number;
    bombs: number;
    rank: number;
    /** `g_GameManager.character`, the 0..3 team index. */
    character: number;
    /** `spellcardsCaptured`, stored at `+0x21` (`AddedCallbackDemo:603`). */
    spellcardsCaptured: number;
    /** The stage's clock hour at start: 0 = midnight, 12 = dawn. */
    clockTime: number;
}
export interface StageReplay {
    /** Index into the retail `Stage` enum (`ScoreDat.hpp:71-85`). */
    stageIndex: number;
    header: StageReplayHeader;
    /** One recorded `g_CurFrameInput` per frame, in play order. */
    inputs: number[];
    /**
     * The `stageReplayData2` block: the supervisor's pacing byte, one entry per 30
     * frames (`OnUpdateLowPrio:269-276`). Playback feeds it to
     * `g_Supervisor.unk198` and never to the simulation, so the gate reads it only
     * as an independent cross-check on the frame count.
     */
    pacing: number[];
    /** Recorded frame count, which is what retail's reader walks. */
    frames: number;
}
export interface ReplayFile {
    /** `header.unk0x6`: nonzero switches the demo reader to 6-byte records. */
    demoVariant: number;
    /**
     * Raw 0..11 shot type. The four teams come first and the eight solos follow
     * them in team order, two per team, so a solo folds back onto its team with
     * `(shotType - 4) / 2` (`ScoreDat.hpp:54-69`).
     */
    shotType: number;
    /** 0 easy, 1 normal, 2 hard, 3 lunatic, 4 extra (`ScoreDat.hpp:44-52`). */
    difficulty: number;
    date: string;
    playerName: string;
    isPractice: boolean;
    /** Spell-practice card number, or -1 for a stage recording. */
    spellcardNumber: number;
    spellcardName: string;
    /** Indexed by retail stage id; `null` where nothing was recorded. */
    stages: (StageReplay | null)[];
}
export declare function parseReplay(raw: Uint8Array): ReplayFile;
//# sourceMappingURL=ReplayFile.d.ts.map