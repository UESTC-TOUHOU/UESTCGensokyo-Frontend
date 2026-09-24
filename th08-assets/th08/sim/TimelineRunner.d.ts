/**
 * Drives EclTimeline instructions: spawns enemies at the scripted frame.
 *
 * Each timeline instruction is {time, opcode, args}. The runner advances one frame at
 * a time and walks every instruction whose `time` has arrived, freezing in place when
 * an instruction says to wait, which is exactly `EclTimeline::Run`'s
 * `timer--; goto done` at `EnemyTimeline.cpp:243`/`:263`/`:282`.
 */
import type { EclTimeline } from '../format/EclFile';
import { type GameState } from './GameState';
import { EnemyManager } from './EnemyManager';
export declare class TimelineRunner {
    private timeline;
    private cursor;
    private timer;
    /**
     * The script's own clock. It stops while a waiting case holds, so it drifts
     * behind `GameState.frame`, which keeps running: retail rewinds `timer--` at
     * `EnemyTimeline.cpp:243`/`:263`/`:282` for exactly this reason.
     */
    get scriptTimer(): number;
    private gs;
    private enemies;
    /**
     * Bit for the active difficulty in the *timeline* encoding, which is shifted one
     * place up from the ECL sub-instruction encoding. Using `gs.difficultyMask` here
     * silently drops every final boss spawn, because those all carry byte 0xFE.
     */
    private timelineMask;
    finished: boolean;
    /**
     * `g_EclEnemyTableF54CC0[87..90]`: the four message slots ops 13 and 14 negotiate
     * over. The table is zero-initialised in the executable, so a slot holding `-1` is
     * the only state `op 14` will write into, and `op 13` consumes every match at once.
     */
    private readonly messageSlots;
    constructor(timeline: EclTimeline, gs: GameState, enemies: EnemyManager);
    /** Advance one game frame. */
    tick(): void;
    /**
     * Execute one timeline instruction. `false` means "stay here for another frame",
     * which is how the four retail waiting cases (`7`, `10`, `13` and the message box)
     * hold the script without burning its frame counter.
     */
    private dispatch;
    /** `!g_Gui.IsBossPresent() && g_EclEnemyTableF54CC0[91] == NULL`. */
    private spawnBlocked;
}
//# sourceMappingURL=TimelineRunner.d.ts.map