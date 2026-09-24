/**
 * Generated from public/assets/th08/manifest.json (stgNNenm.anm) by
 * tools/th08/anm/generate-stgenm.mjs. Do not edit by hand.
 *
 * Per-stage enemy/boss animation: the ANM script ids ECL ops 58..61 name
 * live here, not in `enemy.anm`. `pageOf[sprite]` is the atlas page key the
 * renderer already registers as `enemy:stage-<page>:<sprite>`.
 */
import type { EnemyAnimation } from './th08-enemy-anm';
/** One lifted `stgNNenm.anm` pack. */
export interface StgenmPack {
    /** Atlas page key per sprite id (`stg5enm_t1`), null when the id is unused. */
    readonly pageOf: readonly (string | null)[];
    /** Lifted sprite cycle per ANM script id. */
    readonly scripts: readonly EnemyAnimation[];
    /** Raw VM bytecode per ANM script id, null when the id is unused. */
    readonly bytes: readonly (string | null)[];
}
export declare const TH08_STGENM: Readonly<Record<string, StgenmPack>>;
/**
 * Which `stgNNenm.anm` a campaign route draws from. The pack follows the
 * ECL index, so 6A is `stg6enm` and the true finale 6B is `stg7enm`
 * (same pairing as `STD_KEY_BY_ROUTE`).
 */
export declare const STGENM_BY_ROUTE: Readonly<Record<string, string>>;
/**
 * The atlas cell one stage-pack script shows `age` frames after the spawn.
 * Only used when a slot has no VM to run (a stage pack that failed to load).
 */
export declare function stgenmAnimCell(name: string, script: number, age: number): number | null;
/** The raw VM bytecode of one stage-pack script, or null when the id is unused. */
export declare const stgenmBytes: (name: string, script: number) => string | null;
/** The atlas page a stage-pack sprite id lives on, or null when the id is unused. */
export declare const stgenmPageOf: (name: string, sprite: number) => string | null;
//# sourceMappingURL=th08-stgenm-anm.d.ts.map