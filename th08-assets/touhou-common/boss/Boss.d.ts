import { Entity } from '../../engine/core/Entity';
import { Vector2 } from '../../engine/core/Vector2';
import { SpellCard } from './SpellCard';
import { Bullet } from '../../engine/core/Bullet';
import { BulletPattern, BulletFactory } from '../bullet-patterns/BulletPattern';
/**
 * TH08 caps the damage a single hit can take off a boss (Gui/EnemyManagerUpdate
 * `if (damage >= 70) damage = 70;`). Lump-sum sources such as spell cards are
 * therefore applied as a run of capped hits rather than one big number.
 */
export declare const MAX_BOSS_HIT_DAMAGE = 70;
export interface BossPhase {
    maxHp: number;
    isSpellCard: boolean;
    spellCard?: SpellCard;
    pattern?: BulletPattern;
    durationSeconds?: number;
    /**
     * TH08 `SETLIVES` for this phase: how many life bars the boss owns. Each bar
     * is one coloured slice of the boss gauge, so this is what makes a spell card
     * read as "many bars" instead of one long one. Clamped to 8 slots.
     */
    lifeBars?: number;
}
export interface BossConfig {
    name: string;
    phases: BossPhase[];
    position?: Partial<Vector2>;
    hitboxRadius?: number;
    /** Texture lookup name, e.g. "rumia" -> boss:rumia. */
    spriteKey?: string;
    /** Bullet creation hook — lets the game route boss bullets through its object pool. */
    bulletFactory?: BulletFactory;
}
export declare class Boss extends Entity {
    name: string;
    phases: BossPhase[];
    currentPhaseIndex: number;
    currentHp: number;
    isDefeated: boolean;
    timer: number;
    spriteKey?: string;
    alpha: number;
    /** Eased gauge fill — the retail `bossLifeBarMaxSize` trailing ghost bar. */
    gaugeDisplayRatio: number;
    /** Whole-gauge fade in/out, retail `bossUIOpacity / 255`. */
    gaugeOpacity: number;
    private hpPerBar;
    constructor(config: BossConfig);
    /** Route bullet patterns through a shared object-pool factory. */
    withBulletFactory(factory: BulletFactory): this;
    get currentPhase(): BossPhase | undefined;
    get isSpellCardActive(): boolean;
    get currentSpellCard(): SpellCard | undefined;
    /** Life bars owned by the current phase (>= 1, <= 8 gauge slots). */
    get lifeBars(): number;
    /** How many whole life bars are still standing. */
    get remainingBars(): number;
    /** Progress through the life bar currently being chewed through, 0..1. */
    get currentBarRatio(): number;
    /** Gauge fill the retail game would hand to `Gui::FUN_004230c0`. */
    get gaugeRatio(): number;
    /** Seconds left on the active spell card, 0 outside spell cards. */
    get spellcardSecondsRemaining(): number;
    private initPhase;
    takeDamage(amount: number): void;
    /**
     * Spend a lump-sum damage source (spell card bombs) as a run of retail-sized
     * hits, so the per-hit cap cannot be bypassed. Overkill is lost, exactly as
     * when a TH08 boss's last life bar breaks mid-volley.
     */
    applyBurst(amount: number): void;
    nextPhase(): void;
    updateAI(_dtFrames: number, _player?: Entity): Bullet[];
    update(dtFrames: number): void;
    /**
     * Retail `Gui::FUN_00435900` gauge easing: the fill chases the true value at
     * 0.01/frame going up and 0.02/frame going down, which is what leaves the
     * pale damage ghost behind the bar.
     */
    private updateGauge;
}
//# sourceMappingURL=Boss.d.ts.map