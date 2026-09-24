/**
 * Parser for Touhou 8 ply0?a.sht player shot data files.
 *
 * PlayerRawShtFile layout (from Player.hpp):
 *   i32 bombCount @ 0x04; i32 maxPower @ 0x08; f32 hitboxExtent @ 0x0C;
 *   f32 grazeExtent @ 0x10; f32 itemGrabSpeed @ 0x14; f32 itemBoxExtent @ 0x18;
 *   f32 pointItemValueLine @ 0x1c
 * `Player::AddedCallback` (`Player.cpp:1619-1633`) copies +0x0C, +0x10 and +0x18 into
 * the ship's three boxes *halved*, so the values below are half-extents.
 * We extract the known fields needed by the game.
 */
export interface ShtFile {
    /** Bomb count given when respawning. Offset +0x04, stored as f32. */
    bombCount: number;
    /** Maximum power (int field, offset +0x08). */
    maxPowerOps: number;
    /**
     * Half of the hit box's x/y extent. Offset +0x0C, stored as f32 and halved by
     * the loader (`Player.cpp:1619-1622`).
     */
    hitboxHalfExtent: number;
    /**
     * Half of the graze box. Offset +0x10, halved by the loader
     * (`Player.cpp:1624-1627`).
     */
    grazeHalfExtent: number;
    /** Homing speed for item collection. Offset +0x14, f32. */
    itemGrabSpeed: number;
    /**
     * Half of the item box. Offset +0x18, halved by the loader
     * (`Player.cpp:1629-1632`).
     */
    itemPickupHalfExtent: number;
    /** Point-of-collection line (y coordinate). Offset +0x1c, f32. */
    pointItemValueLine: number;
    /**
     * Axial move speed with focus released. Offset +0x24, f32.
     *
     * `Player.cpp:810-813` reads this off the *primary* table.
     */
    fastSpeed: number;
    /**
     * Axial move speed with focus held. Offset +0x28, f32.
     *
     * `Player.cpp:795-798` reads this off the *secondary* table, so the partner's
     * file decides how slowly the pair creeps.
     */
    slowSpeed: number;
    /** Per-axis diagonal speed, unfocused. Offset +0x2C, f32 (`:814-817`). */
    fastDiagonalSpeed: number;
    /** Per-axis diagonal speed, focused. Offset +0x30, f32 (`:799-802`). */
    slowDiagonalSpeed: number;
    /**
     * Time scale for free-falling items. Offset +0x34, f32.
     *
     * `ItemManager::Update:207-209` picks the secondary table's copy while the ship
     * is focused and the primary's otherwise, then multiplies both the item
     * position step and the gravity term by it (`:301`, `:313-316`). Seven of the
     * eight tables are 0.9; `ply02a` alone is 0.65, so Sakuya's unfocused items
     * hang in the air longer and Remilia's, flown while focused, do not.
     */
    itemTimeScale: number;
}
export declare function parseSht(buf: Buffer | Uint8Array): ShtFile;
/**
 * One entry of a firing chain, `0x38` bytes. The layout is not guessed: it is the
 * order in which `Player::FUN_0044fb70` (`Player.cpp:2633-2680`) copies the entry
 * into a shot slot, and `Player::FUN_0044fd80` (`:2684-2693`) decides whether the
 * entry fires at all.
 */
export interface ShtShotEntry {
    /**
     * `entry+0x00`, the divisor of the firing test `value % interval == phase`.
     * It is not a shot *type* - `5` means "one volley every five frames", and the
     * shipped tables use 2, 3, 4, 5, 6, 8, 10, 12, 15, 16 and 30.
     */
    interval: number;
    /** `entry+0x02`, the position inside that interval. */
    phase: number;
    /** `entry+0x04`, x offset from the entry's origin. */
    dx: number;
    /** `entry+0x08`, y offset from the entry's origin. */
    dy: number;
    /** `entry+0x0C` -> `slot+0x430`. Read as the float the file also carries. */
    field0c: number;
    /** `entry+0x10` -> `slot+0x434`. */
    field10: number;
    /** `entry+0x14` -> `slot+0x450`, radians; `-pi/2` is straight up. */
    angle: number;
    /** `entry+0x18` -> `slot+0x44C`, and `slot+0x43C/0x440` are its components. */
    speed: number;
    /** `entry+0x1C` -> `slot+0x460`. */
    field1c: number;
    /** `entry+0x1E`: when positive and the ship is 极度妖怪, the shot is marked. */
    youkaiBoost: number;
    /**
     * `entry+0x20`: which origin fires this entry. Zero is the ship itself
     * (`Player+0x2B4`); 1..4 are the option slots, which retail keeps at
     * `Player + (n-1)*0x2F4 + 0x6B0`. Ninety-eight of the 227 shipped entries - 43 %
     * - are fired by an option rather than by the ship, and that is what the player
     * side of the port is still missing.
     */
    option: number;
    /** `entry+0x22` -> `slot+0x464`. */
    field22: number;
    /**
     * `entry+0x24`: the player ANM script to run, offset by ten on the way in
     * (`SetAndExecuteScriptIdx(slot, entry+0x24 + 10)`).
     */
    anmScript: number;
    /** `entry+0x26`: sound id, or negative for none. */
    sound: number;
    /**
     * `entry+0x28`, an index into `g_PlayerShotUpdateCallbacks` (`:209-211`).
     * Zero is the plain interval fire; `LoadShtFile` resolves the others to
     * function pointers, and the port keeps the index so it can name them.
     */
    updateCb: number;
    /** `entry+0x2C` -> `g_PlayerShotRenderCallbacks` (`:212-213`). */
    renderCb: number;
    /** `entry+0x30` -> `g_PlayerShotTimerCallbacks` (`:214`). */
    timerCb: number;
    /**
     * `entry+0x34` -> `g_PlayerShotCollisionCallbacks`: 1 is `FUN_00450c50`,
     * 2 is `FUN_00450ee0`, 3..8 name a difficulty rather than a callback.
     */
    collisionCb: number;
}
/** One power tier of one table: the power it unlocks at, and its firing chain. */
export interface ShtPowerTable {
    /**
     * `g_PlayerRawShtFile`'s second word. `FUN_00450f60:3116-3119` walks the tables
     * while `GetPower() >= gate`, so this is the *lowest* power the tier covers:
     * the shipped files use 8, 24, 48, 80, 128 and 999.
     */
    powerGate: number;
    entries: ShtShotEntry[];
}
/**
 * The firing chains of one `.sht`. `Player::LoadShtFile` (`:1775-1815`) walks
 * `header+0x02` table pointers from `header+0x38`, eight bytes each, and each
 * chain ends at an entry whose `interval` is negative.
 */
export declare function parseShtTables(buf: Buffer | Uint8Array): ShtPowerTable[];
/**
 * Which power tier fires right now, `FUN_00450f60:3116-3119`. The walk stops at
 * the first table whose gate is above the ship's power, and the last tier's gate
 * is 999 - unreachable, because a full 128.00 power bar is the `+0x08` maximum -
 * so the top tier is what a maxed ship reads.
 */
export declare function shtTableForPower(tables: ShtPowerTable[], power: number): ShtPowerTable;
//# sourceMappingURL=ShtFile.d.ts.map