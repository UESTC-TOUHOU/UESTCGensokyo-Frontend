/**
 * Original Imperishable Night face art, straight out of `face_*.anm`.
 *
 * Every playable member and every stage boss ships as a stack of texture pages
 * inside its own face ANM: page 0 is the full-body art, and the pages after it
 * are the dialogue busts, one per expression. The page order below is copied
 * from the ANM texture tables in `public/assets/th08/manifest.json`, which the
 * extractor fills from the entry names ZUN wrote into each archive
 * (`data/face/reimu/face_rm01hp.png` and friends), so the suffixes are the
 * retail ones rather than a guess.
 *
 * Which face ANM belongs to which stage is not guessed either: it is the
 * preload table in `Spellcard::Init` (`Spellcard.cpp:548-596`), which also
 * shows that stages 5 and 6B load a second ANM for their mid-boss.
 */
import type { MemberId } from '../../../touhou-common/player/CharacterProfile';
import type { StageRoute } from '../StageRoute';
/** Where the extractor writes the per-page face PNGs. */
export declare const FACE_ASSET_DIR = "/assets/th08/anm";
/** The eight members, keyed by `MemberId` so the profile needs no translation. */
export declare const MEMBER_FACE_ANM: Record<MemberId, string>;
/** Primary boss face ANM per route (`Spellcard::Init`, `enemyFaceAnm0`). */
export declare const ROUTE_BOSS_FACE: Record<StageRoute, string>;
/** Mid-boss face ANM, loaded as `enemyFaceAnm1` by the two routes that have one. */
export declare const ROUTE_MIDBOSS_FACE: Partial<Record<StageRoute, string>>;
/**
 * Speaker name (JP or romaji) -> face ANM.
 *
 * The six boss keys are the names `StageDialogue` prints; `face_st05` and
 * `face_st06` are confirmed by the name plates packed inside them (鈴仙 and
 * 八意永琳), and `face_st01` by the stage preload table.
 */
export declare const SPEAKER_FACE_ANM: Record<string, string>;
/** URL for one page of a face ANM, or undefined when that ANM is unknown. */
export declare function facePageUrl(anm: string, page: number): string | undefined;
/** Page index of `suffix` inside `anm`, or -1 when that ANM has no such page. */
export declare function facePageOf(anm: string, suffix: string): number;
/**
 * Bust art for a speaker, walking the mood's fallback chain so an ANM that only
 * carries three expressions still gets a face instead of nothing.
 */
export declare function speakerFaceUrl(speaker: string, mood?: string): string | undefined;
/** Full-body art for one playable member — the select-screen portrait. */
export declare function memberPortraitUrl(member: MemberId): string | undefined;
/** Full-body art for a route's boss, used by the spell-card cut-in. */
export declare function bossPortraitUrl(route: StageRoute, mid?: boolean): string | undefined;
//# sourceMappingURL=th08-face-art.d.ts.map