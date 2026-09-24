import { Application, Container, Sprite } from 'pixi.js';
import { SpriteManager } from './SpriteManager';
import { type BossGaugeState } from '../../touhou-common/boss/BossGauge';
import { AssetManager, AssetManifest } from './AssetManager';
import type { FogRamp } from './FogShader';
import { AnimPose, TaiseiAnim } from './TaiseiAnim';
import { Bullet } from '../core/Bullet';
import { Player } from '../../touhou-common/player/Player';
import { Boss } from '../../touhou-common/boss/Boss';
import { Enemy } from '../../touhou-common/enemy/Enemy';
import { Item } from '../../touhou-common/item/Item';
import { HUD } from '../../touhou-common/ui/HUD';
import type { HudBannerView } from '../../touhou-common/ui/HudBanners';
import { PerformanceMonitor } from '../debug/PerformanceMonitor';
import { InputSystem } from '../core/InputSystem';
import type { ScorePopupView } from '../core/ScorePopupSystem';
export interface PixiRendererConfig {
    container: HTMLElement;
    width?: number;
    height?: number;
    assetManifest?: AssetManifest;
    /** Parallax background theme id (see tools/art/backgrounds.mjs). */
    theme?: string;
    /** 'taisei' = straightened select art, 'ship' = chibi fleet. */
    playerSkin?: 'taisei' | 'painted';
    /**
     * Which GPU backend to try first. Unset leaves Pixi's own detection, which prefers
     * WebGPU. Both shader languages the backdrop uses are real code paths, so a way to
     * reach the WebGL one from a URL is how the GLSL half ever gets verified.
     */
    backend?: 'webgl' | 'webgpu';
}
export interface RenderEnvironment {
    backgroundColor?: number;
    brightness?: number;
    /** Parallax theme for this frame; falls back to the configured default. */
    theme?: string;
    /** Playfield scroll speed in px/frame. */
    scrollSpeed?: number;
    /**
     * Which stance the ship is in. 永夜抄 authors a second, complete animation group
     * for 低速 (`playerNN.anm` scripts 5-9) and swaps to it with a hard script change,
     * so the pose has to reach the animator rather than just the speed.
     */
    playerPose?: AnimPose;
    /** Live pieces of the spell card that is running, one entry per shape. */
    bombZones?: ReadonlyArray<BombZoneView>;
    /** The card's expanding bullet-cancel ring. */
    bombCancel?: {
        x: number;
        y: number;
        radius: number;
        alpha: number;
    } | null;
    /**
     * What the running card paints over the backdrop: `plate` goes under every sprite,
     * the way a stage's own background colour would, and `flash` is a screen-space
     * square over them. Both are absent the moment the card comes down.
     */
    bombWash?: {
        plate?: WashView | null;
        flash?: WashView | null;
    } | null;
    /**
     * Floating score numbers in canvas space, already risen and banked by the game's
     * `ScorePopupSystem`. Absent simply means nothing is on screen.
     */
    scorePopups?: ReadonlyArray<ScorePopupView>;
    /**
     * 0 = pinned human, 0.5 = neutral, 1 = pinned youkai. Absent hides the panel
     * meter, which is what a title without a 妖率计 needs.
     */
    youkaiMeter?: number;
    /**
     * Life bar declared by an ECL script rather than a `Boss` object. Used when
     * the sim layer drives the stage, so those bosses get the same retail gauge.
     */
    bossGauge?: BossGaugeState | null;
    /**
     * A projected 3D backdrop supplied by the game, in playfield pixels. When the
     * pages it names are loaded it replaces the parallax sheets entirely; when they
     * are not, the parallax placeholder keeps drawing so the stage never goes blank.
     */
    backdrop?: BackdropView;
    /**
     * Live ECL lasers, in playfield pixels. Retail draws the beam body as one
     * `etama` cell stretched along its heading, so a beam is a rotated rect rather
     * than a chain of bullets.
     */
    lasers?: ReadonlyArray<LaserView>;
    /**
     * The panel banners the original raises over the side panel and the playfield:
     * "Full Power Mode!", the spell-card bonus. Absent means nothing to announce.
     */
    banners?: ReadonlyArray<HudBannerView>;
}
/**
 * One laser as the renderer needs it: a rotated rectangle plus the cell to
 * stretch across it. The game layer does the beam-space maths.
 */
export interface LaserView {
    /** Beam centre in playfield pixels. */
    x: number;
    y: number;
    /** Beam heading in radians; the long axis points along it. */
    angle: number;
    /** Length along the heading. */
    length: number;
    /** Width across the heading. */
    width: number;
    /** Asset key of the body cell. */
    sprite: string;
    /** 0..1 body alpha from the `transformFlags & 1` ramp. */
    alpha: number;
}
/**
 * One authored quad of a 3D backdrop. The game does the projecting; the renderer
 * only maps the page key to a texture and puts four corners on the GPU.
 */
export interface BackdropQuadView {
    /** Asset key of the sprite page this quad samples, registered like any other art. */
    page: string;
    /** Eight numbers: screen x,y per corner. */
    screen: readonly number[];
    /** Eight numbers: u,v per corner in page pixels, same order as `screen`. */
    uv: readonly number[];
    alpha: number;
    additive?: boolean;
    /** Four view-space depths, one per corner; present means the quad is fogged. */
    depth?: readonly number[];
}
/** A frame of a game-authored backdrop. */
export interface BackdropView {
    quads: readonly BackdropQuadView[];
    /** Playfield clear colour, 0xRRGGBB. */
    clearColor?: number;
    /** 0..1 wipe laid over the backdrop while a spell card takes it off screen. */
    fade?: number;
    /**
     * `D3DRS_FOGCOLOR` and its ramp for this frame. Omitted, the fog bit is switched
     * off and every quad draws as authored.
     */
    fog?: FogRamp;
}
/**
 * One drawable piece of an active spell card. Mirrors the sim's `BombZone`, but
 * the renderer stays independent of the game it draws.
 */
export interface BombZoneView {
    shape: string;
    x: number;
    y: number;
    angle: number;
    radius: number;
    width: number;
    color: number;
    alpha: number;
    spin: number;
}
/**
 * One rectangle of a card's backdrop: a packed RGB colour and 0..1 coverage.
 * Mirrors the sim's `BombWash`.
 */
export interface WashView {
    color: number;
    alpha: number;
}
export declare class PixiRenderer {
    app: Application;
    gameContainer: Container;
    hudContainer: Container;
    debugContainer: Container;
    private bulletGraphics;
    private entityGraphics;
    /** Named procedural sprites; renderer draws bullets by `Bullet.sprite` key. */
    readonly sprites: SpriteManager;
    readonly assets: AssetManager;
    private hudGraphics;
    private debugGraphics;
    private backgroundGraphics;
    private playerSprite;
    private scoreText;
    private hiScoreText;
    private livesText;
    private bombsText;
    private powerText;
    private grazeText;
    private stageText;
    private timeText;
    /** Which half of the team is flying right now (永夜抄 focus switch). */
    private memberText;
    private spellNameText;
    private spellTimerText;
    private spellCapturedText;
    private centerBannerText;
    private debugText;
    /** HUD.showSpellCard display window (frames); the first slice is the pop-in. */
    private static readonly DISPLAY_WINDOW;
    private static readonly DISPLAY_ANIM_FRAMES;
    private width;
    private height;
    private pauseOverlay;
    private pauseText;
    /**
     * Playfield rect inside the 640x480 canvas; everything else is furniture.
     *
     * 永夜抄 runs its logic on a 384x448 field centred in the left of a 640x480
     * window, so `gameContainer` is translated by (x, y) and every world entity
     * draws in raw 0..384 / 0..448 script coordinates.
     */
    private playfield;
    private rightPanelX;
    private entityLayer;
    /** ECL 114/115 beams, drawn under the bullets that fly over them. */
    private laserLayer;
    private bullets;
    private playerShots;
    private fx;
    /** Additive layer the spell cards paint their art into. */
    private bombGraphics;
    private bgSky;
    private bgMid;
    private bgNear;
    /** Meshes for a game-authored 3D backdrop, plus the wipe that hides it. */
    private backdropLayer;
    private readonly backdropQuads;
    private backdropFade;
    /**
     * The two halves of a game's screen wash: a colour plate under every sprite, and a
     * square over them. Danmaku games drive these from their bomb cards, where the
     * plate floods the backdrop and the square whites out the field, but nothing about
     * them is game-specific.
     */
    private washPlate;
    private washFlash;
    /**
     * One fog block for the whole layer, shared by reference with every fogged bucket,
     * so `drawBackdrop` publishes a frame's ramp once. Built on demand: a game with no
     * 3D backdrop never allocates one, and a renderer under test never has to mock it.
     */
    private fogBlock;
    private frameSprite;
    private panelSprite;
    /** Panel-native status art (portrait, 妖率計) drawn above the panel plate. */
    private statusGraphics;
    /** Stance the ship is drawn in; `render` refreshes it from the environment. */
    private playerPose;
    private bannerSprite;
    /**
     * Card-owner portrait for the 永夜抄 cut-in: the boss's art slides in from the
     * left when it declares a card, the player's from the right when a spell is
     * spent. The texture is whatever key the game put on `hud.spellCutIn`.
     */
    private cutInSprite;
    /** Upstream 'Enemy' banner shown when a boss enters. */
    private bossWarningSprite;
    /** Retail-style boss life gauge: shaded rects plus a two-digit timer. */
    private bossGaugeGraphics;
    private bossTimerText;
    private bossSprite;
    /** Rotating spell-card circle + ground shadow, both real Taisei art. */
    private spellCircle;
    private bossShadow;
    /** Hitbox dot and swap flourish: always composited above every sprite. */
    private hitboxGraphics;
    /** The retail 判定点光环 (effect template 22), painted just below `hitboxGraphics`. */
    private hitboxMarker;
    /** The live glow handed in by the game layer, or null while none is on screen. */
    private hitboxGlow;
    private playfieldMask;
    /**
     * The standing-down team member, drawn as a portrait in the right panel.
     * Retail never puts the sub-character on the playfield, and stacking it under
     * the flying ship is what turned the two into one muddy silhouette.
     */
    private partnerSprite;
    /** Pooled heart / star icons for the lives and spell rows. */
    private hudIcons;
    /**
     * Pooled sprites for the original bitmap HUD: `front.anm` panel plates and labels,
     * `ascii.anm` digits, the 残机/灵击 stars and the 妖率計. Drawn last in the HUD so
     * nothing of the placeholder layer can bleed through it.
     */
    private hudBitmap;
    /**
     * Floating score digits. Kept in a layer of their own above `hudBitmap` because
     * `AsciiManager::DrawPopups` runs after `Gui::DrawGameScene`'s panel strips, and the
     * numbers have to read over the plate rather than under it.
     */
    private hudPopups;
    /** The power meter's fill, printed under the bitmap digits. */
    private powerBar;
    /** The 夜時計: its dial and its hand are redrawn every frame. */
    private nightClockFace;
    private nightClockHand;
    /**
     * Latched once the original panel art lands. The registration is asynchronous, so a
     * negative probe must never stick -- caching `false` on frame 0 would keep the
     * placeholder panel on screen forever.
     */
    private hudArtReady;
    private spellCircleAngle;
    private enemySprites;
    private itemLayer;
    private itemSprites;
    /** How many sprites the last frame actually drew, for `spriteAudit`. */
    private drawnEnemies;
    private drawnItems;
    private theme;
    private scroll;
    /** Animated sprite sheets supplied by the game layer (real Taisei art). */
    private readonly sheets;
    /**
     * Animation clocks are keyed per sprite *and* per slot. Keeping one player
     * instance per (sprite, slot) pair is what stops a fallback swap from
     * restarting the clock: the old single-slot-per-sprite map re-created the
     * player every time a sheet missed a frame, which made the ship snap back to
     * frame 0 and read as a twitch.
     */
    private readonly anims;
    /** Slot most recently drawn by each sprite, for the debug overlay. */
    private readonly lastSlot;
    /** Slots that failed a frame lookup; retired so fallback art stays stable. */
    private readonly brokenSheets;
    /**
     * Last frame's ship animation choice, kept for the dev mirror only. It is the
     * one place that can say which group the lean machine actually settled on, so
     * a "the ship twitches by itself" report can be read instead of guessed at.
     */
    private playerAnimDebug;
    /** Target ship width in playfield pixels. */
    private playerScale;
    private playerSkin;
    private bombFlash;
    /**
     * Tint of the running bomb flash. 永夜抄 gives every spell card its own
     * colour (`BombSpec.accent`), and the flash is the one cue that reads as
     * "whose card this was" before the cut-in finishes; a fixed white made all
     * sixteen cards look like the same effect.
     */
    private bombFlashTint;
    /**
     * `ScreenEffect::RegisterChain(FULL_FADE_OUT, ticks, colour, …)`
     * (`Gui.cpp:876-879`): a full-screen quad whose alpha climbs from 0 to 1 as the
     * countdown runs, washing the whole picture into `screenFadeTint`.
     */
    private screenFadeFrames;
    private screenFadeTotal;
    private screenFadeTint;
    private screenFade;
    private pendingFx;
    constructor();
    init(config: PixiRendererConfig): Promise<void>;
    render(player: Player, boss: Boss | null, enemies: Enemy[], bullets: Bullet[], hud: HUD, monitor: PerformanceMonitor, isPaused?: boolean, input?: InputSystem | null, environment?: RenderEnvironment, items?: Item[]): void;
    /**
     * Paint the spell card that is currently running. Each shape gets its own
     * geometry so the 16 cards read differently, the way the retail ANM scripts
     * do: pillars for Marisa, wedges for Youmu, orbs for Reimu, knives for Sakuya,
     * edge barriers for Yukari, rings for Remilia, dolls and butterflies.
     */
    /**
     * Paint a card's backdrop. The plate belongs with the stage's own background
     * colour, under every sprite; the square belongs over them, because retail's
     * `ScreenEffect::DrawSquare` goes down with the ship's high-priority draw. The
     * hitbox dot still sits above both: Eternal Night whites the field out without
     * ever hiding where the ship is.
     */
    private drawWash;
    private drawBombArt;
    /**
     * Spell-card circle and ground shadow behind the boss, straight from the
     * vendored Taisei pack. The circle spins faster while a spell card is live,
     * which is the visual cue players read as "card active".
     */
    /**
     * Retail boss gauge (Gui::DrawBossGauge): a shaded 320x4 track at (64,19),
     * one coloured slice per remaining life bar, a 26px life-pip row to its left
     * and the two-digit spell-card timer at (384,16), all faded by bossUIOpacity.
     */
    private drawBossGauge;
    private drawBossAura;
    /**
     * Lives and bombs as real heart/star art instead of the text glyph, falling
     * back to the star character when the vendored pack is missing.
     */
    private drawHudIcons;
    /**
     * True when the original panel sheets are live. The digit '0' is the probe: the
     * registration pass slices the whole font in one go, so one glyph standing for all
     * of them is a fair bet, and it keeps the monospace read-out on screens that were
     * started without the asset pack.
     */
    private usingBitmapHud;
    /** Blit `text` in the retail 16x16 font from (x, y) and return the advance. */
    private drawHudText;
    /**
     * `AsciiManager::DrawPopups`. Each pickup is a run of 8x8 digit cells, centred on the
     * spawn point: retail offsets the run by `4 * digitCount` and then advances eight
     * pixels per character, printing the most significant digit first.
     */
    private drawScorePopups;
    /**
     * The whole right panel, drawn the way retail draws it.
     *
     * Order matters and mirrors `Gui::DrawGameScene`: backdrop tiles, then the top and
     * bottom border strips, then the 永夜抄 plate, then the eight labels, then their
     * values. The 妖率計 belongs to this layer too because it overlaps the playfield's
     * bottom-left corner rather than sitting in the panel.
     */
    private drawBitmapHud;
    /**
     * `Gui.cpp:2075-2138`: the two panel text slots, blit last so a banner can
     * cross from the panel over the playfield without either clipping it.
     */
    private drawGuiBanners;
    /**
     * Point/Time rows: `count`, a half-width slash, then the extend threshold. The tint is
     * retail's whole-row `SetColor`, so it has to cover the slash as well as the digits.
     */
    private drawPointRow;
    /**
     * The 夜時計. Midnight has the hand pointing down and dawn brings it back to
     * the top, one full turn for the 12 steps `GetClockTime()` counts, so the
     * remaining night is readable as the arc still to run -- which is the same
     * quantity the `2000000 * (12 - clock)` bonus is paid on.
     *
     * The retail art for the dial never reached the vendored pack and no
     * decompiled function draws it, so this is vector art in the panel's own
     * colours. `hud:clock:dial` lets a real sheet take it over unchanged.
     */
    private drawNightClock;
    /**
     * The 妖率計 at the bottom of the playfield: the ornate 128x16 track, the 人 and 妖
     * limit icons at its stops, and the cursor between them (`AsciiManager.cpp:280-289`
     * runs `ascii.anm` scripts 5..8 to place exactly these four pieces).
     */
    private drawYoukaiGauge;
    /** Queue a one-shot effect sprite for the next frame. */
    spawnEffect(texture: string, x: number, y: number, size?: number, alpha?: number, rotation?: number, tint?: number, additive?: boolean): void;
    /**
     * Queue a one-shot sprite at its own rectangular footprint.
     *
     * The retail effect pool blits ANM atlas cells, and those cells are rectangles: a needle
     * is 8x32 and a scale is 24x16, so forcing one size for both axes stretches the art.
     */
    spawnEffectRect(texture: string, x: number, y: number, width: number, height: number, alpha?: number, rotation?: number, tint?: number, additive?: boolean, flipX?: boolean): void;
    /**
     * Trigger the full-screen bomb flash. `accent` is the card's own colour, so
     * the flash separates 霊夢's pink from 魔理沙's gold the way the retail
     * spell art does.
     */
    triggerBombFlash(accent?: number): void;
    /** Colour the running bomb flash is using, or `null` when nothing is flashing. */
    get bombFlashColor(): number | null;
    /**
     * Take the ship's 判定点光环 for this frame, or null when the script has none live.
     *
     * Called once per frame by the game layer out of the effect pool, before `render`.
     * Holding it here rather than pushing it through the ordinary effect batch is the only
     * liberty taken, and it is a layering one: the batch composites under the ship sprite,
     * and retail's ring is unmistakably drawn over the ship's own art.
     */
    setHitboxGlow(glow: HitboxGlow | null): void;
    /**
     * Wash the whole picture into `color` over `frames` frames.
     *
     * `Gui.cpp:876-879` asks for exactly this from stage message op 14:
     * `ScreenEffect::RegisterChain(FULL_FADE_OUT, 442, 0xffffff, 0, 0, 21)`. The
     * ramp is linear because `ScreenEffect.cpp` is not in the decompilation, and a
     * linear climb is the only reading of `CalcFadeOut`/`DrawFullFade` that reaches
     * full coverage exactly when the countdown does.
     */
    startScreenFade(frames: number, color?: number): void;
    /** Coverage of the running screen fade, 0 (nothing) to 1 (solid). */
    get screenFadeAlpha(): number;
    /** Frames left on the screen fade, for a browser pass to read. */
    get screenFadeRemaining(): number;
    /** Cancel a fade that is still running, e.g. when a run leaves the stage. */
    clearScreenFade(): void;
    /**
     * Register an animated sprite sheet under a logical slot name. Slots are
     * 'player:<characterId>', 'enemy:<spriteKey>' and 'boss:<spriteKey>'; the game
     * layer fills them from the vendored Taisei atlases so the engine stays
     * title-agnostic.
     */
    registerSheet(slot: string, sheet: AnimatedSheet): void;
    /** Which sheet slot a sprite is currently animating, if any (used by tests and the debug overlay). */
    sheetState(sprite: Sprite): {
        slot: string;
        group: string;
        frame: number;
        flipped: boolean;
    } | null;
    /** True when a slot has a real animated sheet registered. */
    hasSheet(slot: string): boolean;
    /**
     * Point a sprite at the next frame of its sheet. Taisei bakes the bank into
     * the lean frames and mirrors them for the opposite direction, so the only
     * rotation here is the one the caller asks for. Returns false when the slot is
     * unknown, letting callers fall back to the procedural painter.
     */
    private drawSheet;
    /**
     * Draw one team member. The registered sheet wins (real Taisei frames for
     * Reimu/Marisa/Youmu, our own idle loop for the rest); the static still is the
     * fallback. Returns false when nothing matched so callers can paint a shape.
     */
    private drawMember;
    /**
     * The 永夜抄 status block: the standing-down member as a panel portrait, plus
     * the human/youkai meter under it. The meter is centred, because retail parks
     * neutral in the middle and slides the cursor left for 人 and right for 妖
     * (`AsciiManager.cpp:1764-1813`).
     */
    private drawTeamStatus;
    /** True when the meter sits in one of the two extreme wells. */
    private extremeMeter;
    /** Last-resort silhouette so the ship is never invisible if art is missing. */
    private drawMemberFallback;
    /** 'taisei' prefers upstream animation; 'painted' forces one in-house look. */
    setPlayerSkin(skin: 'taisei' | 'painted'): void;
    /** Which ship animation the last rendered frame settled on (dev mirror only). */
    get playerAnimState(): string;
    /**
     * `[held, drawn]` entity sprite counts for one kind, from the last frame.
     *
     * The sprite maps are keyed by the entity object, so a picture only leaves when
     * its owner stops being drawn -- which is exactly the "killed fairy left its
     * sprite on screen" bug class. Held has to equal drawn; a gap that widens over a
     * stage is a leak, not a frame of lag.
     */
    get spriteAudit(): {
        enemies: [number, number];
        items: [number, number];
    };
    /**
     * Scroll one parallax sheet across the playfield.
     *
     * Night lighting is a multiply rather than a fade: alpha let the backdrop fill
     * bleed through the sheet and turned the art to mud. Because opaque tiles are
     * idempotent under normal blending, the rows can overlap by a couple of pixels
     * to hide filtering gaps without leaving a bright band behind.
     *
     * Every other tile is mirrored. The retail sheets are painted backdrops, not
     * authored tileables, so a plain repeat puts the sheet's bottom edge against its
     * own top edge and draws a hard line straight across the stage. Mirroring makes
     * the wrap edge continuous (same pixels meet) and doubles the visible period,
     * which is the difference between "scrolling scene" and "wallpaper".
     */
    private placeLayer;
    /**
     * The backend Pixi actually settled on, for the debug mirror. `'pending'` until
     * `init` has run; a forced `'webgl'` that fell back is visible here as `'webgpu'`.
     */
    get backend(): 'webgpu' | 'webgl' | 'other' | 'pending';
    /** The backdrop layer's fog block, made on first fogged quad. */
    private fog;
    /**
     * Put a game-authored 3D backdrop onto the GPU.
     *
     * Each quad names a page, so the layer only goes up once every page it needs is
     * registered: a stage whose art pack is still unpacking falls back to the parallax
     * placeholder rather than showing holes in the scenery.
     */
    private drawBackdrop;
    /**
     * Draw every live drop. Items pop in over their first frames and scale up to
     * their authored size, which is what sells the 'plop' of a fresh drop.
     */
    private drawItems;
    private itemSpriteFor;
    private enemySpriteFor;
    destroy(): void;
}
/**
 * Both player skins are baked upright (tools/art/png.mjs straighten()), so the only
 * rotation the renderer applies is the lean toward the direction of travel.
 */
export declare const TAISEI_BASE_TILT = 0;
export declare const PLAYER_BASE_TILT = 0;
/**
 * A frame-animated texture set. `frameKey` maps a Taisei frame index onto the
 * asset-manifest key, `anim` carries the group table from the upstream .ani file.
 */
export interface AnimatedSheet {
    frameKey: (frame: number) => string;
    anim: TaiseiAnim;
    /** Uniform scale applied to the native texture size (defaults to TAISEI_SCALE). */
    scale?: number;
    /** Pick main/left/right from horizontal velocity. False = loop the main group. */
    steer?: boolean;
    /** Normalised |dir| below which the sprite stays upright. */
    deadZone?: number;
    /** Size the frame from the caller's fitWidth instead of a fixed scale. */
    fit?: boolean;
}
/** Matches Taisei's atlas naming: frame indices are zero padded to four digits. */
export declare const taiseiFrameKey: (namespace: string, name: string) => (frame: number) => string;
/** On-screen height of the halo behind a boss, in playfield units. */
export declare const BOSS_HALO_SPAN = 96;
/** Default length of the boss-approach banner, in game frames. */
export declare const BOSS_WARNING_FRAMES = 150;
/** Frames the boss-approach banner takes to slide into place. */
export declare const BOSS_WARNING_SLIDE_FRAMES = 18;
/** Panel portraits are drawn a little larger than the 1:1 field art. */
export declare const PORTRAIT_SCALE = 1.5;
/**
 * Minimum radius of the 判定点 bead, in playfield units. The real box is smaller
 * than this for every team, so the number is a legibility floor and not a
 * measurement.
 */
export declare const HITBOX_DOT = 3.4;
/**
 * How far the dark pocket under the bead reaches past it, in playfield units. The
 * retail ring is red and 64 px across, so the bead needs a hole in that colour to
 * read as a point at all.
 */
export declare const HITBOX_BEZEL = 2.6;
/** Radial inset of the white core from the bead edge, leaving the red rim. */
export declare const HITBOX_CORE = 1.4;
/**
 * One frame of the ship's 判定点光环, as the effect script produced it.
 *
 * The sim owns the ring - `StageRunner` spawns template 22 on the focus edge and the ANM
 * VM runs its fade-in, spin and release fade - and the game layer hands the resulting
 * cell here instead of into the ordinary effect batch, which is composited under the
 * ship. Nothing about the picture is invented at this end: `key`, `alpha` and `rotation`
 * are read off the live view.
 */
export interface HitboxGlow {
    /** Asset key of the cell the script currently selects, e.g. `th08:bullet:etama_t1:218`. */
    key: string;
    width: number;
    height: number;
    alpha: number;
    rotation: number;
}
/** Native Taisei sprites are drawn ~1.7x larger than our playfield needs. */
export declare const TAISEI_SCALE = 0.6;
export declare const PLAYER_MAX_LEAN = 0.26;
//# sourceMappingURL=PixiRenderer.d.ts.map