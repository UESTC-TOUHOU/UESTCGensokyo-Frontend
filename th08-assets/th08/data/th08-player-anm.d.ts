/**
 * Generated from public/assets/th08/manifest.json (player00..player03.anm) by
 * tools/th08/anm/generate-player.mjs. Do not edit by hand.
 *
 * Script numbers here are retail's own, so `PlayerShots` can attach the VM
 * directly with the `entry+0x24 + 10` index `FUN_0044fb70` computes.
 */
/** One cell of a player atlas, with the page it lives on. */
export interface PlayerAnmRect {
    readonly x: number;
    readonly y: number;
    readonly w: number;
    readonly h: number;
    /** Index into the pack's texture pages. */
    readonly tex: number;
}
/** Everything one `playerNN.anm` exposes, indexed by retail's own numbers. */
export interface PlayerAnmPackData {
    readonly name: string;
    /** Page filenames, as served under `/assets/th08/anm/`. */
    readonly pages: readonly string[];
    readonly rects: readonly (PlayerAnmRect | null)[];
    readonly bytes: readonly (string | null)[];
}
export declare const TH08_PLAYER_ANM_PACKS: readonly PlayerAnmPackData[];
/** Pack index by team number, i.e. `shotType >> 2` for the pairs. */
export declare const th08PlayerAnmPack: (index: number) => PlayerAnmPackData | null;
/**
 * Atlas cell key the renderer registers player art under, matching
 * `registerTH08PlayerSprites`'s naming so shots and ships share pages.
 */
export declare const th08PlayerCellKey: (pack: number, sprite: number) => string | null;
//# sourceMappingURL=th08-player-anm.d.ts.map