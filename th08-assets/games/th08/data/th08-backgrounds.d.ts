/**
 * TH08 stage background texture data.
 * Each stage has 1-5 background texture sheets from stg*bg.anm.
 */
export interface BgTexture {
    file: string;
    width: number;
    height: number;
}
export interface BgSprite {
    id: number;
    x: number;
    y: number;
    w: number;
    h: number;
    tex: number;
}
export interface StageBgData {
    textures: BgTexture[];
    sprites: BgSprite[];
}
/** Stage background atlas data. */
export declare const TH08_STAGE_BACKGROUNDS: Record<number, StageBgData>;
//# sourceMappingURL=th08-backgrounds.d.ts.map