import type { GameId, GameProfile } from './GameProfile';
export declare function registerGame(profile: GameProfile): GameProfile;
export declare function getGameProfile(id: GameId): GameProfile | undefined;
/** Every registered game, in registration order. */
export declare function listGames(): GameProfile[];
export declare function requireGameProfile(id: GameId): GameProfile;
/** Guard for values that arrived from a URL, a save file or the DOM. */
export declare function isGameId(value: unknown): value is GameId;
//# sourceMappingURL=registry.d.ts.map