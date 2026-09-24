import type { CharacterId } from '../../../touhou-common/player/CharacterProfile';
import type { Difficulty } from '../types';
/**
 * Real Taisei artwork used by the menus and the HUD.
 *
 * Everything here is vendored upstream art (CC-BY-SA 4.0, see
 * public/assets/taisei/COPYING.txt); the helpers fall back to the procedural
 * atlas for the few slots Taisei does not ship.
 */
export declare const TAISEI_TEAM_PORTRAIT: Partial<Record<CharacterId, string>>;
export declare const TAISEI_DIFFICULTY_LOGO: Record<Difficulty, string>;
/**
 * Dialogue portraits. Taisei ships each speaker as a full-body portrait plus
 * separate eye/expression overlays; the overlays carry no alignment metadata
 * and do not share the portrait canvas, so we render the portrait itself and
 * keep `mood` in the API for games that do have aligned face art.
 */
export declare const TAISEI_DIALOG_FACE: Record<string, string>;
/** Display name (JP, romaji or spriteKey) -> Taisei portrait id. */
export declare const DIALOG_SPEAKER_KEY: Record<string, string>;
export declare const TAISEI_ITEM_ICON: Record<string, string>;
export declare const TAISEI_HUD_HEART = "/assets/taisei/ui/hud/heart.webp";
export declare const TAISEI_HUD_STAR = "/assets/taisei/ui/star.png";
export declare const TAISEI_BOSS_INDICATOR = "/assets/taisei/ui/boss_indicator.png";
export declare const TAISEI_SPELL_BANNER = "/assets/taisei/ui/spell.webp";
export declare const TAISEI_FOCUS_CIRCLE = "/assets/taisei/fairy_circle.webp";
/**
 * Portrait for a playable team. Page 0 of `face_XX00.anm` is the retail
 * full-body art, so all eight members are covered; the Taisei set is only a
 * fallback for a checkout without the extracted originals.
 */
export declare function teamPortraitUrl(id: CharacterId): string;
/** Portrait for the team's B seat — the member Shift switches you into. */
export declare function partnerPortraitUrl(id: CharacterId): string;
/**
 * Portrait for a speaker name (JP, romaji or spriteKey), or undefined if
 * unmapped. Original expression busts first, then the Taisei set.
 */
export declare function dialogFaceUrl(speaker: string, mood?: string): string | undefined;
//# sourceMappingURL=taisei-ui.d.ts.map