/**
 * 永夜抄's human/youkai meter (妖率计), ported from `Player.cpp:924-967` with the
 * bounds table at `Player.cpp:1666-1697`.
 *
 * The gauge is signed: negative is the human side, positive the youkai side, and
 * `add()` clamps it to the team's bounds exactly like `AddToYoukaiGauge`
 * (`GameManager.cpp:1404-1415`). Firing pushes the meter *toward whichever form
 * is flying*, and the longer the trigger is held the harder it pushes; letting go
 * relaxes it back to neutral. Reaching an extreme is what unlocks the retail
 * graze and score bonuses and paints the aura behind the ship.
 *
 * Reference names: `timerE2AC4` (shoot window, 20-frame cycle), `timerE2AE8`
 * (`charge`, continuous firing frames), `timerE2AD0` (`idle`).
 */
/** One team's six gauge bounds, in retail units. */
export interface GaugeBounds {
    /** Most negative value the meter can reach (humanLimit, bounds[0]). */
    humanLimit: number;
    /** Most positive value the meter can reach (youkaiLimit, bounds[1]). */
    youkaiLimit: number;
    /** bounds[2] — at or below this is "extremely human". */
    extremeHuman: number;
    /** bounds[3] — at or above this is "extremely youkai". */
    extremeYoukai: number;
    /** bounds[4] — at or below this is "moderately human". */
    moderateHuman: number;
    /** bounds[5] — at or above this is "moderately youkai". */
    moderateYoukai: number;
}
/** The paired-team default: ±10000 limits, ±8000 extreme, ±2000 moderate. */
export declare const PAIRED_BOUNDS: GaugeBounds;
/**
 * shotType 3 is the Youmu/Yuyuko pair and 10 is Youmu alone; both compress the
 * human side so her cards stay reachable. Solos lose access to the far half of
 * the meter entirely, which is what makes a solo team never flash the opposite
 * aura.
 */
export declare function gaugeBoundsFor(shotType: number): GaugeBounds;
/** `GaugeIsExtremelyHuman` — the meter is pinned deep on the human side. */
export declare function isExtremelyHuman(value: number, b: GaugeBounds): boolean;
/** `GaugeIsModeratelyHuman`. */
export declare function isModeratelyHuman(value: number, b: GaugeBounds): boolean;
/** `GaugeIsModeratelyYoukai`. */
export declare function isModeratelyYoukai(value: number, b: GaugeBounds): boolean;
/** `GaugeIsExtremelyYoukai`. */
export declare function isExtremelyYoukai(value: number, b: GaugeBounds): boolean;
export interface GaugeTick {
    /** Fire button held (retail cycles a 20-frame window while this is true). */
    shooting: boolean;
    /** True while the youkai half of the team is flying. */
    isYoukai: boolean;
    /** `g_EclGameTimeScale`; slows the meter down with the rest of the stage. */
    timeScale?: number;
}
export declare class YoukaiGauge {
    bounds: GaugeBounds;
    /** Signed meter value in retail units. */
    value: number;
    /**
     * `g_Player.bombState.frameStop`, mirrored in by the stage runner. Retail refuses
     * every unfunded push while a spell card is playing
     * (`GameManager.cpp:1406-1407`), so a graze or a 时符 cannot move the meter under
     * a bomb -- only the card's own forced swing can.
     */
    frameStop: boolean;
    /** Frames the fire button has been held, saturating at `CHARGE_CAP`. */
    charge: number;
    /** Frames since the fire button was released. */
    idle: number;
    /** Position in the retail 20-frame shoot window; -1 when the window is shut. */
    private shootTimer;
    constructor(bounds?: GaugeBounds);
    /**
     * `AddToYoukaiGauge(amount, forceUpdate)`: apply a signed push and clamp to the
     * team's bounds. `force` is retail's second argument, which buys the push past a
     * live card's freeze.
     */
    add(amount: number, force?: boolean): void;
    /** `SetYoukaiGauge`. */
    set(value: number): void;
    /** One frame of `Player.cpp:924-967`. */
    tick({ shooting, isYoukai, timeScale }: GaugeTick): void;
    /** The relaxation step, whose size grows with how extreme the meter is. */
    private relaxDelta;
    /**
     * `EnemyManager.cpp:363-369` — killing a boss-attached enemy drags the meter a
     * twelfth of the way back to neutral and forces the relaxation branch.
     */
    onEnemyDeath(): void;
    /**
     * `ItemManager.cpp:638-643` — a 时符 pushes the meter toward whichever form is
     * flying, but only while the post-kill hold-off has run out.
     */
    onTimeOrb(isYoukai: boolean, holdoffFrames: number): void;
    /**
     * `Player.cpp:487-508` — a graze is worth more on the human side and scores
     * more on the youkai side, and grazing in youkai form feeds the meter.
     */
    onGraze(): {
        grazeGain: number;
        score: number;
        gaugeGain: number;
    };
    /** `Player.cpp:550` — dying always resets the meter to neutral. */
    onDeath(): void;
    /** 0 = pinned human, 0.5 = neutral, 1 = pinned youkai. For the HUD. */
    normalized(): number;
    /** True while retail paints the extreme aura behind the ship (`Player.cpp:969`). */
    isExtreme(): boolean;
    /**
     * `GameManager::GaugeIsExtremelyHuman` — the meter is pinned deep enough on the
     * human side that every 点 item pays double (`ItemManager.cpp:476,537`).
     */
    isExtremelyHuman(): boolean;
    /**
     * `GameManager::GaugeIsExtremelyYoukai` (`GameManager.hpp:180-183`). The youkai
     * mirror of the row above: it doubles nothing, but it is where the +6 % shot
     * damage comes from (`Player.cpp:3495-3496`).
     */
    isExtremelyYoukai(): boolean;
}
//# sourceMappingURL=YoukaiGauge.d.ts.map