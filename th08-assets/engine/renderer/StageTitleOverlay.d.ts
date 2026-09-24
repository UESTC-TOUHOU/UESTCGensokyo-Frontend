/**
 * The retail stage-title card, as a reusable engine layer.
 *
 * `Gui.cpp:2281` preloads one `stgNNtxt.anm` per stage and `:2307` runs scripts
 * 0..3 on four ANM VMs the moment that stage takes the screen: the stage number,
 * the stage name, the poem, and the boss line. `:766-770` re-runs script 3 with an
 * explicit sprite whenever a stage message announces the next boss, which is how
 * one timeline names two different fights.
 *
 * Nothing here knows about 永夜抄. The game supplies the pack name and two
 * resolvers, and every position, fade and slide comes out of the animation data.
 */
import { Container } from 'pixi.js';
/** The part of a Pixi texture this layer touches. */
export interface TitleCell {
    texture: unknown;
}
/** Resolve `pack`/`index` to ANM words, or null when the script is unavailable. */
export type TitleScriptResolver = (pack: string, index: number) => Int32Array | null;
/** Resolve `pack`/`sprite` to a bitmap, or null while the art has not landed. */
export type TitleCellResolver = (pack: string, sprite: number) => TitleCell | null;
export interface StageTitleOptions {
    scriptFor: TitleScriptResolver;
    cellFor: TitleCellResolver;
    /** VM count; retail keeps four (`Gui::Impl::vm2a44[0..3]`). */
    slots?: number;
}
export declare class StageTitleOverlay {
    private readonly root;
    private readonly slots;
    private readonly options;
    private pack;
    constructor(options: StageTitleOptions);
    /** Attach above the gameplay, below the debug readout. */
    mount(parent: Container): this;
    /** Name the art pack to read, without starting anything. */
    bind(pack: string | null): void;
    /** `Gui.cpp:2307`: `ExecuteAnmIdxArray(vm2a44, 0, 4)`. */
    start(): void;
    /** `AnmManager::SetAndExecuteScriptIdx`: restart one slot on its own script. */
    executeScript(slot: number, script: number): void;
    /**
     * `Gui.cpp:767-770`: `SetSprite` on one slot, keeping its motion.
     *
     * The boss line is script 3 with the sprite pushed by the announcement index, so
     * the same slide-in can name the second boss without a second script.
     */
    setSprite(slot: number, sprite: number): void;
    /**
     * `Gui.cpp:1113`: the card advances every frame, deleted or not.
     *
     * Each script ends in `Delete` (`op 1`) at its own time, so the layer only hides
     * once every slot has retired or faded.
     */
    step(frames?: number): void;
    /** True while any element still has art on screen. */
    get showing(): boolean;
    /** Tear the card down, e.g. when a run leaves the stage. */
    hide(): void;
    /** One readable line per slot, for a browser pass to tell "no art" from "no script". */
    debugLines(): string[];
    /** Copy one VM onto its sprite, binding the cell the script is asking for. */
    private sync;
    destroy(): void;
}
//# sourceMappingURL=StageTitleOverlay.d.ts.map