/**
 * The contract every translated stage exposes.
 *
 * `npm run ecl:th08` writes one directory per route -- `scripts.ts` (the ECL subs as
 * control-flow generators), `waves.ts` (the spawn timeline) and `index.ts` (this
 * object). The façade exists so the runtime has one import per route instead of
 * knowing the translator's file naming, and so the card list a script declares is
 * readable without opening 4 000 lines of generator: `cards` is the op-122 table,
 * with retail's global spell-card id and the `g_LastSpellNumbers` verdict attached.
 *
 * The sub functions keep their `sub_N` names on purpose. `N` is the sub's index in
 * the `.ecl` file, which is what the timeline's spawn records and every `callSub`
 * operand refer to; renaming them would obscure the one fact the translated layer
 * is supposed to preserve.
 */
import type { EclFile } from '../format/EclFile';
/** One op-122 declaration, as the translator read it out of the script. */
export interface StageSpellCard {
    /** ECL sub index that declares the card. */
    sub: number;
    /** `SpellcardNumber` -- retail's global card id, index into the `Catk` history. */
    id: number;
    /** Card name, Shift-JIS decoded. */
    name: string;
    /** Card owner, decoded. */
    owner: string;
    /** Script index into the stage's `face_stNN.anm` for the cut-in. */
    face: number;
    /** Bonus the card opens with. */
    bonus: number;
    /** `Spellcard::IsLastSpell`: the id is in `g_LastSpellNumbers`. */
    lastSpell: boolean;
}
export interface StageScript {
    /** Route key the loader indexes by, e.g. `stage4b`. */
    route: string;
    /** Source file the translator read, e.g. `ecldata4a.ecl`. */
    source: string;
    /** Sub count from the file header; the timeline addresses subs below it. */
    subCount: number;
    /** How many timelines the file carries (retail ships two per stage). */
    timelineCount: number;
    /** Every card the script declares, in sub order. */
    cards: readonly StageSpellCard[];
    /** Module namespace holding `sub_0 .. sub_{subCount-1}`. */
    scripts: Record<string, unknown>;
    /** The parsed file: header plus timeline, with `subs` filled in by the bridge. */
    waves: EclFile;
}
//# sourceMappingURL=StageScript.d.ts.map