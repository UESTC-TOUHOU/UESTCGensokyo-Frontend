/**
 * Register original TH08 player sprites from the extracted anm atlas.
 * Uses canvas slicing to create individual frame textures compatible with PixiJS v8.
 */
import { Texture } from 'pixi.js';
import type { PixiRenderer } from '../../../engine/renderer/PixiRenderer';
import type { TaiseiAnim } from '../../../engine/renderer/TaiseiAnim';
/** Which stance cycle a member's bank uses. */
export type BankKind = 'stance11' | 'stance9' | 'stance8' | 'portrait';
/**
 * Which slice of which atlas page each of the eight members actually owns.
 *
 * Verified against the extracted pages and the ANM sprite lists, not guessed:
 * `playerNN_t0.png` holds the human's stance bank, then the partner's stance bank
 * in the order the 低速 scripts read it, then that team's standing portrait and
 * shot art. Pointing a member at the wrong slice is what made Sakuya's lean-out
 * flash a throwing knife and Remilia's portrait a magic circle.
 */
interface MemberBank {
    /** Key into TH08_PLAYER_SPRITES, which carries the rect table for that page. */
    page: string;
    /** Atlas sprite ids, in order; index 0 here is local frame 0. */
    ids: number[];
    kind: BankKind;
    /**
     * Standing figure used for the resting member in the status panel, where the
     * pack ships one. `player03` only has an orb loop in that slot, so Youmu and
     * Yuyuko fall back to their own stance frames.
     */
    portraitIds?: number[];
    /**
     * Retail draws the player bank 1:1 on the 384x448 field: a Reimu cell is 30x46
     * source pixels and occupies the same 30x46 on screen, so nothing here scales.
     */
    scale: number;
}
/**
 * The group table for a bank, trimmed to the frames that bank actually owns.
 * Remilia's portrait ships as a single still, so an unclamped group would name
 * frames that were never registered and the renderer would retire the whole slot.
 */
export declare function th08PlayerAnimFor(kind: BankKind, available: number): TaiseiAnim;
export declare const TH08_MEMBER_BANKS: Record<string, MemberBank>;
/** Load an image and slice it into individual frame textures using canvas. */
export declare function sliceAtlas(atlasUrl: string, frames: Array<{
    id: number;
    x: number;
    y: number;
    w: number;
    h: number;
}>): Promise<Map<number, Texture>>;
/**
 * Slice TH08 player atlas PNGs and register individual frames as animated
 * sheets. Returns the number of members successfully registered.
 */
export declare function registerTH08PlayerSprites(renderer: PixiRenderer): Promise<number>;
export {};
//# sourceMappingURL=th08-player-registration.d.ts.map