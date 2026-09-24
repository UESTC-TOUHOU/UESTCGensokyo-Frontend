/**
 * Centralized resource base resolver for the engine.
 *
 * Handles base paths (e.g. '/' or '/touhou-web-engine/' or '/th08-assets/'),
 * leaving absolute URLs (http://, https://), protocol-relative (//), data: and blob: untouched.
 */
export declare function setResourceBase(base: string): void;
export declare function getResourceBase(): string;
export declare function resetResourceBase(): void;
export declare function resolveAssetUrl(url: string, base?: string): string;
//# sourceMappingURL=ResourceResolver.d.ts.map