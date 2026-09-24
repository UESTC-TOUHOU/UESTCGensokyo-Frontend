/// <reference types="vite/client" />

declare module '@uestc-touhou/touhou-web-engine/th08' {
  export interface TH08GameOptions {
    container?: HTMLElement;
    assetManifest?: Record<string, string>;
    [key: string]: unknown;
  }

  export class TH08Game {
    constructor(options?: TH08GameOptions);
    init(container: HTMLElement): Promise<void>;
    start(): void;
    stop(): void;
    destroy(): void;
    [key: string]: unknown;
  }

  export const ASSET_MANIFEST: Record<string, string>;
}

