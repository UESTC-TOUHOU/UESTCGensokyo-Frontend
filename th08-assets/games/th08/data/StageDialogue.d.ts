import type { CharacterId } from '../../../touhou-common/player/CharacterProfile';
import type { DialogueLine } from '../../../touhou-common/ui/DialogueSystem';
import type { StageNumber } from '../types';
/**
 * EoSD stage-side scripts. Taisei ships real dialogue portraits for the
 * playable teams plus Cirno/Elly/Hina/Iku/Kurumi/Scuttle/Wriggle/Yumemi; every
 * other speaker falls back to a monogram badge, so no line is ever faceless.
 */
/** The two members of each playable team, in display order. */
export declare const TEAM_NAMES: Record<CharacterId, [string, string]>;
/** Opening script for a stage, spoken by the team the player picked. */
export declare function stageIntroDialogue(stage: StageNumber, character: CharacterId): DialogueLine[];
/** Lines played as the stage boss appears. */
export declare function bossEncounterDialogue(stage: StageNumber, character: CharacterId): DialogueLine[];
/** Lines played when the boss commits its first spell card. */
export declare function spellCardDialogue(stage: StageNumber): DialogueLine[];
//# sourceMappingURL=StageDialogue.d.ts.map