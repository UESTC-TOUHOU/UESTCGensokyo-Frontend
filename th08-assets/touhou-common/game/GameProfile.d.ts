import type { Stage } from '../../engine/core/Stage';
import type { Boss } from '../boss/Boss';
import type { BulletFactory } from '../bullet-patterns/BulletPattern';
import type { Enemy } from '../enemy/Enemy';
import type { CharacterId } from '../player/CharacterProfile';
import type { DialogueLine } from '../ui/DialogueSystem';
/**
 * A playable Touhou title expressed as data + factories.
 *
 * The engine (Stage, Boss, bullet patterns, renderer) never knows which game it
 * is running: TH06, TH07 and TH08 each contribute a GameProfile holding their
 * stage list, wave charts, boss roster and dialogue. Adding TH09 later means
 * writing another profile, not touching the engine.
 */
export type GameId = 'th06' | 'th07' | 'th08';
export interface GameStageInfo {
    stage: number;
    /** JP stage name, e.g. 蠢々秋月. */
    title: string;
    /** Stage boss name shown on the HUD and the encounter banner. */
    boss: string;
    /** Track/theme label. */
    theme: string;
    /** Length of one day/night cycle in frames for this stage. */
    cycleFrames: number;
    /** Background theme key resolved by the renderer. */
    bgTheme: string;
    /**
     * Ambient light of the stage backdrop, 0..1. Games that keep a fixed mood per
     * stage set this; otherwise the renderer follows the day/night cycle.
     */
    bgBrightness?: number;
    /** Backdrop scroll rate in playfield pixels per frame. */
    bgScroll?: number;
}
export interface GameStageCallbacks {
    spawnEnemy: (enemy: Enemy) => void;
    spawnBoss: (boss: Boss) => void;
    onClear: () => void;
    showMessage?: (text: string, durationFrames?: number) => void;
    bulletFactory?: BulletFactory;
    difficulty: string;
}
export interface GameProfile {
    id: GameId;
    /** Full JP title, e.g. 東方紅魔郷. */
    title: string;
    /** Latin subtitle, e.g. Embodiment of Scarlet Devil. */
    subtitle: string;
    /** Short label for the game-select menu. */
    label: string;
    stageCount: number;
    stages: GameStageInfo[];
    buildStage(stage: number, callbacks: GameStageCallbacks): Stage;
    /** Script played when the stage loads. */
    introDialogue(stage: number, character: CharacterId): DialogueLine[];
    /** Script played as the stage boss appears. */
    bossDialogue(stage: number, character: CharacterId): DialogueLine[];
    /** Script played when the boss commits its spell card. */
    spellDialogue(stage: number): DialogueLine[];
}
/**
 * This module is the data contract only. The live registry -- `registerGame`,
 * `getGameProfile`, `listGames`, `requireGameProfile` -- is `registry.ts` beside
 * it, and there is deliberately exactly one of those: a second map would let a
 * profile register into a table nobody reads, which is how a "multi-game engine"
 * quietly stops being one.
 */
export { getGameProfile, isGameId, listGames, registerGame, requireGameProfile } from './registry';
//# sourceMappingURL=GameProfile.d.ts.map