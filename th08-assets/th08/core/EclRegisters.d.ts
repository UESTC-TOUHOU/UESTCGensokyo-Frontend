/**
 * ECL operand-selector tables: the register id an operand carries, mapped to
 * the field it names.
 *
 * These are shared by both halves of the port. The runtime needs them because
 * `ResolveInt` / `ResolveFloat` redirect an operand only when its id is in the
 * table and otherwise hand back the operand itself; the translator needs them
 * because that is the same question asked at translate time, and answering it
 * differently is how a decoded script would start disagreeing with the retail
 * one. They live here rather than in `sim/EnemySlot` so that `format/` can read
 * them without importing the layer that imports it.
 */
/**
 * ECL int register id -> field name.
 *
 * This is the operand selector of retail's `ResolveInt`
 * (`EclOperandsInt.cpp:40-165`): ids 0x2710..0x2774 name a register and every
 * other value is the caller's own literal. `spawnShot` reads it too, because
 * shot operands are resolved at fire time, where the registers live.
 */
export declare const INT_FIELD_BY_ID: Record<number, string>;
/**
 * ECL float register id -> field name. `ResolveFloat`
 * (`EclOperandsFloat.cpp:46`) switches on the operand truncated to an int, so a
 * register reference arrives as the value `10016.0` and friends. Id 0x2772 is
 * deliberately absent: retail lets it fall through to the raw operand.
 */
export declare const FLOAT_FIELD_BY_ID: Record<number, string>;
/**
 * The ids `ResolveFloatLValue` (`EclOperandsFloat.cpp:175-231`) has a case for.
 * Everything else falls through to `default: return operand`, which writes the
 * instruction own operand bytes and changes nothing, so an interpolator aimed at
 * an int register or a sensor is a no-op rather than a corruption. The three
 * player registers are absent: retail lets a script drag the ship, and nothing in
 * the shipped stages does.
 */
export declare const WRITABLE_FLOAT_FIELD_BY_ID: Record<number, string>;
/**
 * `g_EclGameTimeScale`, the factor the interpreter multiplies scripted motion by
 * when it steps and integrates an enemy (`EnemyManagerUpdate.cpp:486-490`).
 *
 * The live value is `GameState.timeScale`; this constant is the scale a host that
 * does not model the effect at all runs at, which is what the generated scripts
 * and every standalone unit test use. Retail keeps it at 1 for a normal run and
 * drops it for a slow-motion beat - `ex 18` writes `1 / value` into it
 * (`EclExIns.cpp:825-837`), and because the global *is*
 * `g_Supervisor.framerateMultiplier` (`EclGlobals.cpp:117`), bullets, lasers,
 * items, enemies, effects, score popups and the ship itself all crawl together.
 * Stage 6b opens a spell card with `ex 18 4` and closes it with `ex 18 1`.
 *
 * It lives beside the register tables because both are the interpreter's own
 * vocabulary.
 */
export declare const ECL_GAME_TIME_SCALE = 1;
//# sourceMappingURL=EclRegisters.d.ts.map