/**
 * Bridge between ECL-generated coroutines and the EnemyManager.
 *
 * The ECL emitter (EclEmitTs) generates `function*` coroutines per sub.
 * This module collects them into a SubFactory that EnemyManager can use,
 * enabling authentic TH08 danmaku patterns.
 *
 * Usage:
 *   const factory = createEclSubFactory(ecldata1Subs);
 *   const runner = new StageRunner({ gs, ecl, subFactory: factory });
 */
import type { EnemyCtx } from '../danmaku/EnemyCtx';
import type { SubFactory } from './EnemyManager';
/** A generated ECL sub is a generator function taking an EnemyCtx. */
export type EclSub = (ctx: EnemyCtx) => Generator<number, void, void>;
/**
 * Wrap an array of ECL-generated coroutines as a SubFactory.
 *
 * The sub index maps directly to the ECL sub number:
 * `ecldata1` sub 0 = subs[0], sub 1 = subs[1], etc.
 * Unknown sub indices return a no-op generator.
 */
export declare function createEclSubFactory(subs: EclSub[]): SubFactory;
/**
 * Collect all subs from a generated ECL module into an indexed array.
 * The ECL emitter exports functions named `sub_0`, `sub_1`, etc.
 * This helper maps them by their numeric suffix.
 */
export declare function collectEclSubs(module: Record<string, unknown>): EclSub[];
//# sourceMappingURL=EclBridge.d.ts.map