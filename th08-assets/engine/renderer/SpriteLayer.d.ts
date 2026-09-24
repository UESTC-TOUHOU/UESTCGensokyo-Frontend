import { Container, Sprite } from 'pixi.js';
export interface SpritePlacement {
    texture: Sprite['texture'];
    x: number;
    y: number;
    /** Drawn width/height in game pixels; omit to use the texture's natural size. */
    width?: number;
    height?: number;
    rotation?: number;
    alpha?: number;
    tint?: number;
    anchorX?: number;
    anchorY?: number;
}
/**
 * A pooled layer of Pixi sprites.
 *
 * Every frame the renderer `begin()`s, issues `draw()` calls, then `end()`s;
 * sprites beyond the frame's usage are hidden rather than destroyed, so a
 * 2000-bullet screen reuses the same objects instead of churning the GC.
 */
export declare class SpriteLayer {
    readonly container: Container;
    private readonly pool;
    private cursor;
    constructor(parent: Container, name?: string);
    begin(): void;
    /** Returns the sprite used for this slot, or null when nothing can be drawn. */
    draw(placement: SpritePlacement): Sprite | null;
    acquire(): Sprite;
    /** Hide pooled sprites this frame did not touch. */
    end(): void;
    get activeCount(): number;
    destroy(): void;
}
//# sourceMappingURL=SpriteLayer.d.ts.map