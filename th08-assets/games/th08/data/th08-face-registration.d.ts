/**
 * Publish the original face art to the renderer so the spell-card cut-in can
 * draw it.
 *
 * Only page 0 of each ANM is loaded: that is the full-body art, which is the
 * one 永夜抄 slides in when a card is declared. The dialogue busts stay on the
 * DOM side of the fence, where `th08-face-art.ts` hands the browser a plain URL.
 */
import type { PixiRenderer } from '../../../engine/renderer/PixiRenderer';
import type { MemberId } from '../../../touhou-common/player/CharacterProfile';
import type { StageRoute } from '../StageRoute';
/** Renderer key for page 0 of a face ANM. */
export declare function faceKey(anm: string, page?: number): string;
/** Cut-in art key for the member currently flying, or undefined without art. */
export declare function memberFaceKey(member: MemberId): string | undefined;
/** Cut-in art key for a route's boss (or its mid-boss), if that ANM was loaded. */
export declare function bossFaceKey(route: StageRoute, mid?: boolean): string | undefined;
/**
 * Load and register the face pages. Missing files are skipped, so a checkout
 * without the extracted originals just loses the cut-in instead of failing.
 */
export declare function registerTH08Faces(renderer: PixiRenderer): Promise<number>;
//# sourceMappingURL=th08-face-registration.d.ts.map