import { Texture } from 'pixi.js';
export type AssetManifest = Record<string, string>;
export declare class AssetManager {
    private readonly textures;
    load(key: string, url: string): Promise<Texture | null>;
    loadManifest(manifest?: AssetManifest): Promise<void>;
    register(key: string, texture: Texture): void;
    /**
     * Drop a registered texture.
     *
     * Games use this when real assets replace a procedural placeholder: the
     * renderer already skips a layer whose texture is missing, so unregistering
     * is how the placeholder stops drawing.
     */
    unregister(key: string): boolean;
    get(key: string): Texture | undefined;
    has(key: string): boolean;
    clear(): void;
}
//# sourceMappingURL=AssetManager.d.ts.map