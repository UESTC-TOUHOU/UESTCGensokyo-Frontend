/** One row of `g_SoundBufferIdxVol`: which file, and how loud. */
export interface SeBusEntry {
    /** Index into `SeBusSource.files`. */
    buffer: number;
    /** Base level in millibels, as DirectSound takes it (0 is full scale). */
    mb: number;
}
export interface SeBusSource {
    /** One path per `SeBusEntry.buffer`. */
    files: readonly string[];
    /** One entry per logical sound index, in index order. */
    entries: readonly SeBusEntry[];
}
/** `SFX_QUEUE_LENGTH` (`SoundPlayer.hpp:85`). */
export declare const SE_QUEUE_LENGTH = 12;
/**
 * How many frames a request waits for its recording to arrive.
 *
 * Retail has every sample resident before the first frame; the port streams the bank
 * from the hosting server, so the very first shot of a session would otherwise be the
 * one that goes missing. Twenty frames is a third of a second - long enough for a
 * local fetch, short enough that a file which never arrives cannot hold the queue.
 */
export declare const SE_RETRY_FRAMES = 20;
/** DirectSound takes volume in tenths of a decibel. */
export declare function millibelsToGain(mb: number): number;
/**
 * `SoundPlayer.cpp:830-836`: the 0-100 slider becomes `1 - (1 - f)^3`.
 *
 * The taper is why the low end of the retail slider is so gentle: half the slider is
 * still only -1.25 dB short of full.
 */
export declare function sfxVolumeFactor(slider: number): number;
/**
 * The gain one index ends up with: `:837-838` maps `(base + 5000) * factor - 5000`
 * millibels onto the slider, so the whole bank slides down together and the slider
 * at zero is silence rather than a muffled mix.
 */
export declare function seGain(mb: number, slider: number): number;
/** A queued request: the index, and the pan submissions gathered for it. */
export interface SeRequest {
    idx: number;
    panSum: number;
    panCount: number;
    /** Frames this request has already waited for its recording. */
    tries: number;
}
/**
 * Push one request into a frame queue with the retail merge rules.
 *
 * An index already waiting gets its pan averaged in (`:816-820`) instead of a second
 * voice; a full queue drops the request (`:507-508`). Returns whether it was taken.
 */
export declare function seQueuePush(slots: SeRequest[], idx: number, pan: number): boolean;
export declare class SeBus {
    private readonly source;
    private readonly context;
    private readonly load;
    private slots;
    /** Decoded audio, keyed by file path so indices sharing a recording share it too. */
    private buffers;
    private loading;
    private failed;
    /** One live voice per index, which is what makes a retrigger cut the old one. */
    private voices;
    private volume;
    private frameHandle;
    constructor(source: SeBusSource, context: () => AudioContext | undefined, load?: (path: string) => Promise<ArrayBuffer>);
    /** How many requests are waiting for this frame's flush. Debug aid. */
    get pending(): number;
    /**
     * How many of the bank's recordings are decoded and ready. Debug aid: it is the
     * difference between "the table is wired up" and "the sound is actually there".
     */
    get loaded(): number;
    /** A name for the slider: it changes every gain through `seGain`. */
    setVolume(slider: number): void;
    /**
     * Ask for sound `idx`. `pan` is -1..1 (`PlaySoundByIdx` passes 0, which is why an
     * unpositioned request lands dead centre).
     */
    queue(idx: number, pan?: number): void;
    /** Fetch and decode every file in the table, so the first hit is not late. */
    preload(): void;
    /** Cut everything. Used when the run stops mid-frame. */
    stopAll(): void;
    /**
     * Kick off one load. A file that fails is remembered as missing so a busy frame
     * does not keep re-requesting it.
     */
    private ensure;
    private schedule;
    /** Play the frame's queue, then empty it. */
    flush(): void;
}
//# sourceMappingURL=SeBus.d.ts.map