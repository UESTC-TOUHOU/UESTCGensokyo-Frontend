import { Boss, BossConfig, BossPhase } from './Boss';
import { Bullet } from '../../engine/core/Bullet';
import { Entity } from '../../engine/core/Entity';
import { BulletFactory, BulletPattern } from '../bullet-patterns/BulletPattern';
export interface StageBossPhase extends BossPhase {
    attackPattern?: BulletPattern;
    attackInterval?: number;
    /**
     * Fired every frame instead of on the volley clock. Lasers need a continuous
     * clock to grow, hold and retract, so they cannot ride `attackInterval`.
     */
    continuousPattern?: BulletPattern;
}
export interface StageBossConfig extends Omit<BossConfig, 'phases'> {
    phases: StageBossPhase[];
    displayColor: number;
    accentColor: number;
    entranceFrames?: number;
    entranceY?: number;
    moveAmplitudeX?: number;
    moveAmplitudeY?: number;
    moveSpeed?: number;
    fadeFrames?: number;
}
export declare class StageBoss extends Boss {
    readonly displayColor: number;
    readonly accentColor: number;
    alpha: number;
    private readonly entranceFrames;
    private readonly entranceY;
    private readonly moveAmplitudeX;
    private readonly moveAmplitudeY;
    private readonly moveSpeed;
    private readonly fadeFrames;
    private entranceFrame;
    private aiFrame;
    private runtimeFactory;
    constructor(config: StageBossConfig);
    withBulletFactory(factory: BulletFactory): this;
    private phasePattern;
    update(dtFrames: number): void;
    updateAI(_dtFrames: number, player?: Entity): Bullet[];
}
//# sourceMappingURL=StageBoss.d.ts.map