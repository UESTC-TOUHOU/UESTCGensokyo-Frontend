/**
 * Runtime access to the retail data the ship's weapon is made of.
 *
 * Two generated tables back this: the eight `plyNN*.sht` firing files and the four
 * `playerNN.anm` packs. Both are carried as bytes and decoded once per process,
 * because `Player::LoadShtFile` and `AnmManager::LoadAnmFile` each do the same for
 * the whole game session - a stage that re-parsed them per shot would be doing work
 * the original never does, and a stage that re-decoded base64 per frame would show
 * it in the frame graph.
 */
import { type ShtPowerTable } from '../format/ShtFile';
import type { AnmPack } from '../../engine/anm/AnmPack';
/** The firing chains of one `plyNN*.sht`, parsed once and shared. */
export declare function shtTables(file: string): ShtPowerTable[];
export interface PlayerWeaponTables {
    /** `Player.primaryShtFile`, the unfocused table set. */
    primary: ShtPowerTable[];
    /** `Player.secondaryShtFile`, the focused one. */
    secondary: ShtPowerTable[];
}
/**
 * The two `.sht` files a shot type loads (`g_Player1ShtFiles` /
 * `g_Player2ShtFile`, `Player.cpp:49-61`).
 */
export declare function weaponTablesFor(shotType: number): PlayerWeaponTables;
export interface PlayerAnmRuntime {
    /** The team's `playerNN.anm`, as the VM's script store. */
    pack: AnmPack;
    /** The atlas cell a sprite id occupies, which is what sizes a shot's draw. */
    spriteSize(sprite: number): {
        x: number;
        y: number;
    } | null;
}
/** The animation pack for a team number, i.e. `TH08_PLAYER_ANM_BY_SHOT_TYPE[shotType]`. */
export declare function playerAnmRuntime(team: number): PlayerAnmRuntime | null;
/** `g_PlayerAnmFilenames` (`Player.cpp:44-47`), the pack per shot type. */
export declare const PLAYER_ANM_TEAM_BY_SHOT_TYPE: readonly number[];
//# sourceMappingURL=playerWeaponData.d.ts.map