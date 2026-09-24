/**
 * TH08 original player sprite atlas data.
 * Auto-generated from public/assets/th08/manifest.json anm entries.
 * Each member maps to a texture atlas PNG + frame rectangles.
 */
export interface SpriteFrame {
    id: number;
    x: number;
    y: number;
    w: number;
    h: number;
}
export interface MemberSpriteData {
    atlas: string;
    width: number;
    height: number;
    frames: SpriteFrame[];
}
export declare const TH08_PLAYER_SPRITES: Record<string, MemberSpriteData>;
/** TH08 standard player animation groups (8 frames each). */
export declare const PLAYER_ANIM_GROUPS: {
    readonly idle: {
        readonly start: 0;
        readonly count: 8;
    };
    readonly left: {
        readonly start: 8;
        readonly count: 8;
    };
    readonly right: {
        readonly start: 16;
        readonly count: 8;
    };
};
//# sourceMappingURL=th08-sprites.d.ts.map