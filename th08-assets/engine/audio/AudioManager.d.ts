import { type SeBusSource } from './SeBus';
/**
 * Every sound the shipped game can ask for. The first seven are gameplay;
 * the rest are the menu blips, whose `SoundIdx` names come from
 * `SoundPlayer.hpp:17-66` and whose files are in `th08.dat`.
 */
export type SoundEffectType = 'shoot' | 'enemy-hit' | 'bomb' | 'spellcard' | 'pldead' | 'graze' | 'item' | 'select' | 'ok' | 'cancel' | 'pause' | 'bonus' | 'cardget' | 'border' | 'timeout' | 'powerup' | 'extend';
export interface BgmOptions {
    loop?: boolean;
    volume?: number;
    /** Fade-in duration in ms (boolean `true` = 1000ms). */
    fadeIn?: boolean | number;
    /** Alias for `fadeIn` as a plain number (ticket 13 API). */
    fadeInMs?: number;
    /**
     * Where a looping track rewinds to, in seconds from the start of the file.
     *
     * 永夜抄 ships one recording per song with the fanfare baked on the front:
     * `thbgm.fmt` gives an intro length and a separate loop length, and the file is
     * the two concatenated. `HTMLAudioElement.loop` only ever rewinds to 0, so
     * leaving it on replays the fanfare once a minute -- the single most obvious
     * "this is not the real game" tell in the whole soundtrack. Pass the track's
     * `introSeconds` here and the player winds back there instead.
     */
    loopFromSeconds?: number;
}
export interface SeOptions {
    /**
     * Per-play volume (0-1), multiplied on top of the global SE volume.
     *
     * Only the synthesised fallback can honour this: a configured bank takes its level
     * from the table, which is how the shipped game does it.
     */
    volume?: number;
    /** -1..1, for banks that pan by playfield position. */
    pan?: number;
}
/**
 * A game's sound bank, injected: the recordings, the per-index levels, and which
 * index answers to each of the engine's `SoundEffectType` names.
 */
export interface SeSource extends SeBusSource {
    names?: Partial<Record<SoundEffectType, number>>;
}
export declare class AudioManager {
    bgmVolume: number;
    seVolume: number;
    isMuted: boolean;
    /** True while BGM is playing (tracked even in non-browser/Node tests). */
    isBgmPlaying: boolean;
    /** Last requested BGM fade-in duration (ms). */
    fadeInMs: number;
    private audioCtx?;
    private bgmAudio?;
    private bgmGainNode?;
    private bgmScheduler?;
    private bgmFadeInterval?;
    /** Rewind-to-intro-end watcher, and the point it rewinds to. See `BgmOptions`. */
    private bgmLoopWatcher?;
    private bgmLoopFrom?;
    private lastBgmUrl?;
    private lastBgmOptions;
    private preloaded;
    private seSource?;
    private seBus?;
    private getContext;
    setMuted(muted: boolean): void;
    setBgmVolume(volume: number): void;
    setSeVolume(volume: number): void;
    /**
     * Hand the manager the game's sound bank, and start fetching it.
     *
     * Until this is called - and in any environment where the recordings cannot be
     * loaded - `playSE` falls back to synthesised blips, which keeps every test
     * environment and every machine without the assets audible.
     */
    configureSe(source: SeSource): void;
    /** Waiting requests, and how many recordings are in hand. Debug aid. */
    get sePending(): number;
    get seLoaded(): number;
    /**
     * Ask for a bank sound by its index, panned by `pan`.
     *
     * This is the call sites' replacement for naming files: the ECL scripts, the
     * message VM, and the player all already speak in `SoundIdx` numbers.
     */
    queueSe(idx: number, pan?: number): void;
    playSE(type: SoundEffectType, options?: SeOptions): void;
    /**
     * 当前音轨的实际文件名（如 `th08_00.ogg`）。
     * 未播放时 `null`；用内置合成器占位时 `'synth'`。
     * 供 QA 读取，以区分关卡开场曲与 op 7 触发的 BOSS 曲。
     */
    get bgmName(): string | null;
    /**
     * 播放 BGM。
     * - `url` 给出时用 HTMLAudio 播放（支持 loop/volume/fadeIn）。
     * - 无 `url`（或资源缺失）时回退到内置 Web Audio 合成琶音循环，
     *   保证任何环境立即有声（Phase 1 无需外部素材）。
     */
    playBGM(url?: string, options?: BgmOptions): void;
    /**
     * Wind a looping track back to its loop point rather than to the start.
     *
     * HTML has no loop-range primitive for `<audio>`, so this polls the playhead.
     * The look-ahead is deliberately small: at 25 ms a tick is 40x finer than a
     * 140-second track, and the `ended` listener catches the case where a
     * backgrounded tab was throttled straight past the window.
     */
    private startLoopWatch;
    /** Cancel the loop-point watcher (the element itself is dropped by `stopBGM`). */
    private stopLoopWatch;
    /** 内置合成 BGM：三角波琶音循环（东方风格小调），无外部素材。 */
    private playSynthesizedBgm;
    /** Cancel a running fade-in ramp (interval handle is kept for cleanup). */
    private stopFadeIn;
    /**
     * Ramp the BGM to silence over `seconds` and stop it there.
     *
     * This is retail `Supervisor::FadeOutMusic(float)` (`Supervisor.cpp:1695`), which
     * the message VM asks for with 4.0 seconds at a stage's last line
     * (`Gui.cpp:873-874`, `op 12`). Abruptly stopping instead would be heard.
     */
    fadeBGM(seconds?: number): void;
    /** 预加载音频资源（Ticket 13）。非浏览器环境为 noop。 */
    preload(urls: string[]): void;
    /** 预加载单首 BGM（Ticket 13）：`new Audio(url).load()`，非浏览器环境为 noop。 */
    preloadBGM(url: string): void;
    /** 暂停 BGM（保留位置，resume 时续播）。 */
    pauseBGM(): void;
    /** 恢复暂停的 BGM；若底噪被用户关闭过则重新 play。 */
    resumeBGM(): void;
    stopBGM(): void;
    /** Release all audio resources (close AudioContext, drop preloads). */
    destroy(): void;
}
//# sourceMappingURL=AudioManager.d.ts.map