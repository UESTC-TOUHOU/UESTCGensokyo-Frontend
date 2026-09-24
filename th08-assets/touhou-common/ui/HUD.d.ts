import { Player } from '../player/Player';
export declare class HUD {
    stageNumber: number;
    stageName: string;
    difficulty: string;
    timePhase: string;
    score: number;
    /** Stored best for this shot type and difficulty, with its own continue count. */
    hiScore: number;
    hiScoreContinues: number;
    /** Continues used on the live run, which rides the score row's last column. */
    retries: number;
    lives: number;
    bombs: number;
    power: number;
    maxPower: number;
    /** Active team member (永夜抄 swaps A/B with focus). */
    memberName: string;
    memberLabel: string;
    focusActive: boolean;
    graze: number;
    spellCardName: string | null;
    spellCardTime: number;
    spellCardBonus: number;
    /**
     * Set when the bar broke before the clock did. 永夜抄 keeps a green CAPTURED
     * on the plate for the rest of the card, and never shows one for a time-out.
     */
    spellCaptured: boolean;
    /**
     * Point items: how many the run has collected, and the count at which the next
     * extend drops (`Gui.cpp:1453-1461` reads the same pair for the Point row).
     */
    pointItems: number;
    nextPointExtend: number;
    /** Time orbs, plus the threshold of the spell last fought. */
    timeOrbs: number;
    /** Second Time column: run-lifetime orbs, `g_GameManager + 0x3054`. */
    timeOrbTotal: number;
    /**
     * The 时符 count this stage's last spell asks for, `globals->lastSpellTimeOrbThreshold`
     * (`GameManager.cpp:226-229`). Retail prints it as the Time row's right column and warms
     * the whole row once the orbs on hand reach it (`Gui.cpp:1462-1471`).
     *
     * `null` means the host does not model a last-spell threshold at all, in which case the
     * renderer keeps the second column on the run-lifetime count and leaves the row untinted.
     */
    timeOrbThreshold: number | null;
    /**
     * The night clock, in the units `GetClockTime()` returns: 0 is midnight and
     * 12 is dawn. The panel draws it as a dial, so the renderer needs the raw
     * count rather than a formatted string.
     */
    clockTime: number;
    /** Frames remaining for the pop-in banner animation (US#6). */
    spellCardDisplayTimer: number;
    /**
     * Asset key of the card owner's portrait for the cut-in that rides along with
     * the banner. 永夜抄 slides the boss's face in when it declares a card and the
     * player's face when a spell is spent, so the game owns the choice of art.
     */
    spellCutIn: string | null;
    /** Which seat the cut-in belongs to: 'boss' enters left, 'player' enters right. */
    spellCutInSide: 'boss' | 'player';
    centerMessage: string | null;
    centerMessageTimer: number;
    /**
     * True while the upstream 'Enemy' approach banner owns the centre message, so
     * the renderer can show the real Taisei art instead of plain text.
     */
    bossWarning: boolean;
    setStageInfo(stageNumber: number, stageName: string, difficulty: string): void;
    setTimePhase(phase: string): void;
    /** Record which member is flying; focus (Shift) is what swaps them in TH08. */
    setMember(name: string, label: string, focused: boolean): void;
    /**
     * `Gui.cpp:1428-1443`: the score and HiScore rows are nine digits plus a
     * separate tenth column holding the continues used, clamped at 9.
     */
    get formattedScore(): string;
    get formattedHiScore(): string;
    private static scoreRow;
    updateFromPlayer(player: Player): void;
    showSpellCard(name: string, durationSeconds: number, bonus?: number, displayFrames?: number, cutIn?: string, cutInSide?: 'boss' | 'player'): void;
    /** The card was taken by damage rather than by its clock. */
    markSpellCaptured(): void;
    /**
     * Slide a portrait in without a card name, which is what the player's own
     * spell needs: the banner stays out of the way but the cut-in still flashes.
     */
    showCutIn(cutIn: string, side: 'boss' | 'player', displayFrames?: number): void;
    hideSpellCard(): void;
    /** Raise the boss-approach warning for `frames` game frames. */
    showBossWarning(frames?: number): void;
    showMessage(msg: string, frames?: number): void;
    update(dtFrames: number): void;
}
//# sourceMappingURL=HUD.d.ts.map