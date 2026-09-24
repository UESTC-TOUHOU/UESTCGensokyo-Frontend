/**
 * Minimal RIFF/WAVE reader.
 *
 * The shipped sound bank stores its effects as plain PCM wav (the extraction tool
 * only strips the container, so `se_tan00.wav` is 22050 Hz / mono / 8-bit), and
 * `decodeAudioData` is asynchronous and browser-specific about 8-bit samples.
 * Reading the chunks directly keeps the audio path deterministic and lets the same
 * bytes be inspected in a unit test.
 */
export interface WavData {
    sampleRate: number;
    /** One channel, or two interleaved. */
    channels: number;
    /** Normalised to [-1, 1), one sample per channel. */
    samples: Float32Array;
}
/**
 * Read a wav blob, or `null` when the format is one this reader cannot handle.
 *
 * Unknown chunk types are skipped in pairs (a chunk may be odd-length, in which
 * case the spec pads it with one byte), which is what the shipped files need:
 * they carry an `adtl`/`LIST` tail after `data`.
 */
export declare function parseWav(bytes: Uint8Array): WavData | null;
//# sourceMappingURL=Wav.d.ts.map