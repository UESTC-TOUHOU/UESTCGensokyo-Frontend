/**
 * TH08 永夜抄 roster: four teams of two, eight playable members.
 *
 * The signature mechanic of Imperishable Night is that the *focus key is the
 * character switch*: with Shift released team member A flies and shoots, and
 * holding Shift swaps in member B with a completely different weapon and half
 * the movement speed. The two shot types are deliberately not interchangeable,
 * so every member carries its own weapon block below.
 */
/** Team ids, in menu order. */
export type CharacterId = 'reimu-yukari' | 'marisa-alice' | 'sakuya-remilia' | 'youmu-yuyuko';
/** The eight individual members. A members fly unfocused, B members focused. */
export type MemberId = 'reimu' | 'yukari' | 'marisa' | 'alice' | 'sakuya' | 'remilia' | 'youmu' | 'yuyuko';
/**
 * Weapon families. Each one is a distinct firing algorithm in Player.shoot():
 * homing steers toward the aim target, needle flies straight and fast,
 * spread fans out across a wide arc, laser concentrates a few heavy beams.
 */
export type ShotStyle = 'homing' | 'needle' | 'spread' | 'laser';
export interface MemberProfile {
    id: MemberId;
    /** Display name used by the HUD and the switch flash. */
    name: string;
    /** Romanised name plus team letter, e.g. 'Reimu A'. */
    label: string;
    /** 'A' fires while unfocused, 'B' takes over while Shift (focus) is held. */
    role: 'A' | 'B';
    shotStyle: ShotStyle;
    /** Projectiles per volley before the power bonus. */
    shotCount: number;
    /** Total fan angle in radians across the volley. */
    spread: number;
    /** Frames between volleys (lower = faster firing). */
    shotRate: number;
    shotDamage: number;
    /** Shot hitbox radius in playfield pixels. */
    shotRadius: number;
    /** Muzzle speed in pixels/frame. */
    shotSpeed: number;
    bulletColor: number;
    accentColor: number;
    /** Asset-manifest key of this member's shot sprite. */
    shotSprite: string;
    /** Max radians a homing shot may turn per frame; 0 = flies straight. */
    homingTurn: number;
    /** Frames a homing shot keeps steering before it straightens out. */
    homingFrames: number;
    /**
     * Radians a homing shot may stray from the heading it left the muzzle on.
     * Caps the curve so charms bend toward their mark instead of circling the ship.
     */
    homingMaxTurn: number;
    /** Visual-only sprite spin in radians/frame. Never touches the trajectory. */
    spin: number;
    /** Close-range side shots fired per side. */
    /** One-line weapon description for the select screen. */
    blurb: string;
}
export interface CharacterProfile {
    id: CharacterId;
    /** Both members, e.g. '灵梦 / 紫'. */
    name: string;
    subtitle: string;
    /**
     * Highest power the team can hold. Touhou 8 stores power as an integer 0..128
     * and draws it as value/64, so 128 reads as 2.00 (verified against the
     * reference: SetPower(128) is full and g_PowerUpThresholds tops out at 128).
     */
    maxPower: number;
    /**
     * Point-of-collection line in playfield pixels (plyNNa.sht + 0x1c). Above it
     * the whole field flies to the ship, subject to the team gate in ItemSystem.
     */
    pointItemValueLine: number;
    /** Homing speed applied to items once they are grabbed (sht + 0x14). */
    itemGrabSpeed: number;
    /**
     * Half of the item box (`plyNNa.sht + 0x18 / 2`, `Player.cpp:1629-1632`). The
     * item itself carries the same box (`ItemManager.cpp:203`), so the reach of a
     * grab is twice this number along each axis.
     */
    itemPickupHalfExtent: number;
    /**
     * Time scale for items that are still falling freely (`plyNNa.sht + 0x34`).
     *
     * `ItemManager::Update:207-209` reads it from the secondary table while the
     * ship is focused and from the primary otherwise, then multiplies both the
     * position step and the gravity term by it. It is not a cosmetic dial: at 0.65
     * a fairy's power chunk takes a third longer to cross the screen, which is a
     * real reason to stay unfocused while farming.
     */
    itemTimeScale: number;
    /** Focused partner's copy of the same float (`plyNNas.sht + 0x34`). */
    itemTimeScaleFocused: number;
    /**
     * Half of the hit box (`plyNNa.sht + 0x0C / 2`, `Player.cpp:1619-1622`). Retail
     * tests this as an axis-aligned square against the bullet's own box
     * (`Player::FUN_0044a230`, `Player.cpp:314-340`), so it is a half-extent and not
     * a radius.
     */
    hitboxHalfExtent: number;
    /**
     * Half of the graze box (`plyNNa.sht + 0x10 / 2`, `Player.cpp:1624-1627`). The
     * graze test is the same square against a bullet box grown by 20px per side
     * (`Player::FUN_0044a470`, `Player.cpp:380-383`).
     */
    grazeHalfExtent: number;
    bombDamage: number;
    /** Team accent colour for the HUD and bomb flash. */
    color: number;
    accentColor: number;
    /**
     * Unfocused move speed along one axis, `plyNNa.sht + 0x24`. The four teams
     * really do differ -- Marisa's and Youmu's ships are a quarter faster than
     * Reimu's and Sakuya's -- so this is per team and not a global.
     */
    fastSpeed: number;
    /**
     * Focused move speed along one axis, read from the *partner's* table at
     * `plyNNas.sht + 0x28` (`Player.cpp:795-798`). It is not half of `fastSpeed`
     * for any team except Reimu's.
     */
    slowSpeed: number;
    /**
     * Per-axis speed on a diagonal, unfocused: `plyNNa.sht + 0x2C`. Retail stores
     * this as its own float rather than dividing at runtime, and every shipped
     * value is the axial figure over sqrt(2), so a diagonal crosses the same
     * distance per frame as a straight line.
     */
    fastDiagonalSpeed: number;
    /** Per-axis speed on a diagonal, focused: `plyNNas.sht + 0x30`. */
    slowDiagonalSpeed: number;
    members: readonly [MemberProfile, MemberProfile];
}
declare const MEMBERS: {
    reimu: MemberProfile;
    yukari: MemberProfile;
    marisa: MemberProfile;
    alice: MemberProfile;
    sakuya: MemberProfile;
    remilia: MemberProfile;
    youmu: MemberProfile;
    yuyuko: MemberProfile;
};
export { MEMBERS };
/** Touhou 8 power ceiling: 128 units, drawn as 2.00. */
export declare const MAX_POWER = 128;
/** Shot-level breakpoints, straight from g_PowerUpThresholds. */
export declare const POWER_THRESHOLDS: readonly [8, 24, 48, 80, 128, number];
/** plyNNa.sht defaults shared by every team but Marisa's. */
export declare const ITEM_LINE_DEFAULT = 128;
export declare const ITEM_GRAB_DEFAULT = 10;
/** `ply00a.sht + 0x18 = 24`, halved the way the retail loader halves it. */
export declare const ITEM_BOX_DEFAULT = 12;
/** Small / big P item power, and the 電 item's fill-to-max behaviour. */
export declare const POWER_PER_SMALL_ITEM = 1;
export declare const POWER_PER_BIG_ITEM = 8;
/** Death costs 0.25 power, and anything at or below 16 goes straight to 0. */
export declare const DEATH_POWER_COST = 16;
export declare const DEATH_POWER_FLOOR = 16;
/**
 * Fallback hit box half-extent for ships with no `.sht` profile yet. Retail's real
 * values are 0.825 (Reimu) and 1.0 for the other three teams; the on-screen dot is
 * drawn larger than the box either way.
 */
export declare const HITBOX_RADIUS = 1;
/** Normalised |dir| below which the ship stays upright, matching upstream. */
export declare const PLAYER_LEAN_DEAD_ZONE = 0.16;
/** Maximum visible lean in radians at full speed. */
export declare const PLAYER_LEAN_MAX = 0.3;
/** Frames the swap flourish stays on screen after a focus switch. */
export declare const SWITCH_FLASH_FRAMES = 14;
/**
 * Kept for callers that only ever ask for a default: Reimu's numbers, which are
 * the ones a fresh `Player` gets before a team is applied.
 */
export declare const FAST_SPEED: number;
export declare const SLOW_SPEED: number;
export declare const CHARACTER_PROFILES: Record<CharacterId, CharacterProfile>;
export declare const getCharacterProfile: (id: CharacterId) => CharacterProfile;
/** The member that flies while Shift is held (index 1), and while released (0). */
export declare const memberForFocus: (profile: CharacterProfile, focused: boolean) => MemberProfile;
/** Every member id, for asset and sheet registration. */
export declare const MEMBER_IDS: MemberId[];
//# sourceMappingURL=CharacterProfile.d.ts.map