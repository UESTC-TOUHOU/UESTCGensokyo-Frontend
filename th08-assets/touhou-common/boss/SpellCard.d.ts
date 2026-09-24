import { BulletPattern } from '../bullet-patterns/BulletPattern';
export interface SpellCardConfig {
    name: string;
    durationSeconds: number;
    bonusScore?: number;
    maxHp: number;
    pattern?: BulletPattern;
}
export declare class SpellCard {
    name: string;
    durationSeconds: number;
    bonusScore: number;
    maxHp: number;
    pattern?: BulletPattern;
    timeRemaining: number;
    currentBonus: number;
    isActive: boolean;
    isCaptured: boolean;
    constructor(config: SpellCardConfig);
    start(): void;
    update(dtFrames: number): void;
    failCapture(): void;
}
//# sourceMappingURL=SpellCard.d.ts.map