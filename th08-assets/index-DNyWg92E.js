import { r as t, n as l } from "./index-CgrA5v7c.js";
const n = 1, r = 2, c = 4, e = 8, s = 16;
function* k(f) {
  let i = 0, a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        if (f.setAnm(83), f.setExtraAnm(0, 48), f.setBounds(48, 48), f.setMisc160(140), f.clearScriptFlags(2), f.setMisc144(8, 4), f.movePolar(60, 4, 0.392699, 5), f.posX >= 192) {
          i = 2;
          break;
        }
        i = 1;
        break;
      }
      case 1: {
        f.f1 = 0.10472, i = 3;
        break;
      }
      case 2: {
        f.f1 = -0.10472, i = 3;
        break;
      }
      case 3: {
        f.f0 = -3.141593, f.ci0 = 5, i = 4;
        break;
      }
      case 4: {
        if (f.linkChildAttached(1, 0, 0, 600, -2, 100), f.f0 += 0.418879, f.linkChildAttached(3, 0, 0, 600, -2, 100), f.f0 += 0.418879, f.linkChildAttached(5, 0, 0, 600, -2, 100), f.f0 += 0.418879, --f.ci0 > 0) {
          i = 4;
          break;
        }
        i = 5;
        break;
      }
      case 5: {
        f.setHeadingSpeed(0.392699, 0), f.f0 = 1.570796, f.f1 = 0.05236, yield 180, i = 6;
        break;
      }
      case 6: {
        f.setHeadingSpeed(-1.570796, 0.6), yield 5e3, i = 7;
        break;
      }
      case 7:
        return;
      default:
        return;
    }
}
function* m(f) {
  let i = 0, a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        f.setAnm(54), f.setBounds(24, 24), f.clearScriptFlags(16), f.setScriptFlags(3), f.setHitFlash(1), f.moveArc(20, f.f0, f.f1, 3), yield 20, i = 1;
        break;
      }
      case 1: {
        f.setAccel(6e3, f.f1, 0), f.callSubAlloc(0, 2), yield 5e3, i = 2;
        break;
      }
      case 2:
        return;
      default:
        return;
    }
}
function* D(f) {
  let i = 0, a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        f.isDiff(n | s) && (f.f0 = 2), f.isDiff(r | s) && (f.f0 = 2.2), f.isDiff(c | s) && (f.f0 = 2.4), f.isDiff(e | s) && (f.f0 = 3), f.setShotRecord(0, 64, 0, 50, 1, 1.570796, f.f0), yield 60, i = 1;
        break;
      }
      case 1: {
        f.isDiff(n | s) && (f.i0 = 16), f.isDiff(r | s) && (f.i0 = 11), f.isDiff(c | s) && (f.i0 = 11), f.isDiff(e | s) && (f.i0 = 7), i = 2;
        break;
      }
      case 2: {
        f.f0 = f.moveAngle - 3.141593, f.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 2,
          color: 2,
          count: 2,
          rings: 1,
          speed: 2,
          speed2: 0.8,
          angle: t(10016),
          angleStep: 0,
          transform: 576
        }), yield f.delay(f.i0), i = 2;
        break;
      }
      default:
        return;
    }
}
function* w(f) {
  let i = 0, a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        f.setAnm(54), f.setBounds(24, 24), f.clearScriptFlags(16), f.setScriptFlags(3), f.setHitFlash(1), f.moveArc(20, f.f0, f.f1, 3), yield 20, i = 1;
        break;
      }
      case 1: {
        f.setAccel(6e3, f.f1, 0), f.callSubAlloc(0, 4), yield 5e3, i = 2;
        break;
      }
      case 2:
        return;
      default:
        return;
    }
}
function* A(f) {
  let i = 0, a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        f.i0 = 14, f.isDiff(n | s) && (f.i1 = 1), f.isDiff(r | s) && (f.i1 = 2), f.isDiff(c | s) && (f.i1 = 3), f.isDiff(e | s) && (f.i1 = 4), f.isDiff(n | s) && (f.f1 = 1.4), f.isDiff(r | s) && (f.f1 = 2.2), f.isDiff(c | s) && (f.f1 = 2.3), f.isDiff(e | s) && (f.f1 = 2.7), i = 1;
        break;
      }
      case 1: {
        f.f0 = f.moveAngle + 3.141593, f.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 1,
          color: 6,
          count: t(10001),
          rings: 1,
          speed: t(10017),
          speed2: 1.2,
          angle: t(10069),
          angleStep: 0.3926991,
          transform: 512
        }), yield f.delay(f.i0), i = 1;
        break;
      }
      default:
        return;
    }
}
function* M(f) {
  let i = 0, a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        f.setAnm(54), f.setBounds(24, 24), f.clearScriptFlags(16), f.setScriptFlags(3), f.setHitFlash(1), f.moveArc(20, f.f0, f.f1, 3), yield 20, i = 1;
        break;
      }
      case 1: {
        f.setAccel(6e3, f.f1, 0), f.callSubAlloc(0, 6), yield 5e3, i = 2;
        break;
      }
      case 2:
        return;
      default:
        return;
    }
}
function* R(f) {
  let i = 0, a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        f.i0 = 13, f.isDiff(n | s) && (f.i1 = 1), f.isDiff(r | s) && (f.i1 = 3), f.isDiff(c | s) && (f.i1 = 3), f.isDiff(e | s) && (f.i1 = 3), i = 1;
        break;
      }
      case 1: {
        if (f.f0 = f.moveAngle + 3.141593, f.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 1,
          color: 2,
          count: t(10001),
          rings: 1,
          speed: 0.8,
          speed2: 1.2,
          angle: t(10069),
          angleStep: 0,
          transform: 512
        }), f.i0 <= 16) {
          i = 3;
          break;
        }
        i = 2;
        break;
      }
      case 2: {
        f.i0--, i = 3;
        break;
      }
      case 3: {
        yield f.delay(f.i0), i = 1;
        break;
      }
      default:
        return;
    }
}
function* F(f) {
  let i = 0, a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        f.setAnm(94), f.setExtraAnm(0, 48), f.setBounds(24, 24), f.clearScriptFlags(2), f.setMisc160(20), f.playSfx(36), f.setMisc144(2, 2), f.i0 = f.randU31 % 7, f.f0 = f.i0 * 48, f.f1 = f.randF32 * 96, f.f0 += f.f1, f.setRelPos(f.f0, f.posY), yield 20, i = 1;
        break;
      }
      case 1: {
        if (f.i0 = 7 - f.i0, f.ci0 = 7, f.i0 >= 3) {
          i = 3;
          break;
        }
        i = 2;
        break;
      }
      case 2: {
        f.f7 = 0.069813, i = 4;
        break;
      }
      case 3: {
        f.f7 = -0.069813, i = 4;
        break;
      }
      case 4: {
        if (f.ci0 == f.i0) {
          i = 6;
          break;
        }
        i = 5;
        break;
      }
      case 5: {
        f.linkChildStandard(9, f.f1, f.posY, 400, -2, 100), i = 6;
        break;
      }
      case 6: {
        if (f.f1 += 48, --f.ci0 > 0) {
          i = 4;
          break;
        }
        i = 7;
        break;
      }
      case 7: {
        f.callSubAlloc(0, 8), yield 800, i = 8;
        break;
      }
      case 8: {
        f.moveRelative(40, 4, f.posX, -32), yield 40, i = 9;
        break;
      }
      case 9:
        return;
      default:
        return;
    }
}
function* v(f) {
  let i = 0, a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        f.ci0 = 12, f.f0 = f.timer, f.isDiff(n | s) && (f.i0 = 1), f.isDiff(r | s) && (f.i0 = 5), f.isDiff(c | s) && (f.i0 = 5), f.isDiff(e | s) && (f.i0 = 5), i = 1;
        break;
      }
      case 1: {
        f.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 6,
          color: 6,
          count: t(1e4),
          rings: 1,
          speed: 3,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.3926991,
          transform: 515
        }), yield 2, i = 2;
        break;
      }
      case 2: {
        if (--f.ci0 > 0) {
          i = 1;
          break;
        }
        i = 3;
        break;
      }
      case 3: {
        i = 0;
        break;
      }
      default:
        return;
    }
}
function* E(f) {
  let i = 0, a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        f.setAnm(54), f.setMisc144(2, 2), f.setBounds(24, 24), f.clearScriptFlags(16), f.setScriptFlags(3), f.setHitFlash(1), yield 20, i = 1;
        break;
      }
      case 1: {
        f.callSubAlloc(0, 10), yield 800, i = 2;
        break;
      }
      case 2:
        return;
      default:
        return;
    }
}
function* x(f) {
  let i = 0, a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        f.isDiff(n | s) && (f.i0 = 60), f.isDiff(r | s) && (f.i0 = 32), f.isDiff(c | s) && (f.i0 = 16), f.isDiff(e | s) && (f.i0 = 10), f.f0 = 0.785398, f.isDiff(n | s) && (f.f1 = 1.6), f.isDiff(r | s) && (f.f1 = 2.8), f.isDiff(c | s) && (f.f1 = 3.3), f.isDiff(e | s) && (f.f1 = 3.8), i = 1;
        break;
      }
      case 1: {
        f.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 5,
          color: 2,
          count: 2,
          rings: 1,
          speed: t(10017),
          speed2: 0.8,
          angle: 1.5707964,
          angleStep: 0.7853982,
          transform: 514
        }), yield f.delay(f.i0), i = 1;
        break;
      }
      default:
        return;
    }
}
function* _(f) {
  let i = 0, a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        f.complexBossInit(1), f.maxHp = 1, f.setMisc129(0), f.setDeathCallbackSub(-1), f.clearScriptFlags(3), f.f0 = f.randAngle, f.movePolar(60, 4, f.f0, 0.15), f.f0 = 0, f.ci0 = 6, yield 1, i = 1;
        break;
      }
      case 1: {
        f.f0 += 0.19635, f.f0 = l(f.f0), f.spawnEffectAngle(26, 1, -1, f.f0, 0, 0), yield 1, i = 2;
        break;
      }
      case 2: {
        f.f0 += 0.19635, f.f0 = l(f.f0), f.spawnEffectAngle(26, 1, -1, f.f0, 0, 0), yield 1, i = 3;
        break;
      }
      case 3: {
        f.f0 += 0.19635, f.f0 = l(f.f0), f.spawnEffectAngle(26, 1, -32640, f.f0, 0, 0), yield 1, i = 4;
        break;
      }
      case 4: {
        f.f0 += 0.19635, f.f0 = l(f.f0), f.spawnEffectAngle(26, 1, -32640, f.f0, 0, 0), yield 1, i = 5;
        break;
      }
      case 5: {
        f.f0 += 0.19635, f.f0 = l(f.f0), f.spawnEffectAngle(26, 1, -8323200, f.f0, 0, 0), yield 1, i = 6;
        break;
      }
      case 6: {
        f.f0 += 0.19635, f.f0 = l(f.f0), f.spawnEffectAngle(26, 1, -8323200, f.f0, 0, 0), yield 1, i = 7;
        break;
      }
      case 7: {
        f.f0 += 0.19635, f.f0 = l(f.f0), f.spawnEffectAngle(26, 1, -8355585, f.f0, 0, 0), yield 1, i = 8;
        break;
      }
      case 8: {
        f.f0 += 0.19635, f.f0 = l(f.f0), f.spawnEffectAngle(26, 1, -8355585, f.f0, 0, 0), yield 1, i = 9;
        break;
      }
      case 9: {
        f.f0 += 0.19635, f.f0 = l(f.f0), f.spawnEffectAngle(26, 1, -128, f.f0, 0, 0), yield 1, i = 10;
        break;
      }
      case 10: {
        if (f.f0 += 0.19635, f.f0 = l(f.f0), f.spawnEffectAngle(26, 1, -128, f.f0, 0, 0), f.playSfx(7), --f.ci0 > 0) {
          i = 1;
          break;
        }
        i = 11;
        break;
      }
      case 11: {
        f.playSfx(18), f.spawnEffectAngle(26, 64, -8355585, -999, 0, 0), f.endSpell(), f.setBossPresent(-1), f.maxHp = 0, yield 3e3, i = 12;
        break;
      }
      case 12:
        return;
      default:
        return;
    }
}
function* C(f) {
  let i = 0, a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        if (f.complexBossInit(1), f.setMisc129(0), f.setDeathCallbackSub(-1), f.clearScriptFlags(3), f.f0 = f.randAngle, f.movePolar(60, 4, f.f0, 0.15), f.setMisc173(0), f.spellCardState == 0) {
          i = 4;
          break;
        }
        i = 1;
        break;
      }
      case 1: {
        f.f0 = 0, f.ci0 = 6, f.playSfx(7), i = 2;
        break;
      }
      case 2: {
        if (f.f0 += 0.19635, f.f0 = l(f.f0), f.spawnEffectAngle(26, 1, -1, f.f0, 0, 0), f.f0 += 0.19635, f.f0 = l(f.f0), f.spawnEffectAngle(26, 1, -1, f.f0, 0, 0), f.f0 += 0.19635, f.f0 = l(f.f0), f.spawnEffectAngle(26, 1, -32640, f.f0, 0, 0), f.f0 += 0.19635, f.f0 = l(f.f0), f.spawnEffectAngle(26, 1, -32640, f.f0, 0, 0), f.f0 += 0.19635, f.f0 = l(f.f0), f.spawnEffectAngle(26, 1, -8323200, f.f0, 0, 0), f.f0 += 0.19635, f.f0 = l(f.f0), f.spawnEffectAngle(26, 1, -8323200, f.f0, 0, 0), f.f0 += 0.19635, f.f0 = l(f.f0), f.spawnEffectAngle(26, 1, -8355585, f.f0, 0, 0), f.f0 += 0.19635, f.f0 = l(f.f0), f.spawnEffectAngle(26, 1, -8355585, f.f0, 0, 0), f.f0 += 0.19635, f.f0 = l(f.f0), f.spawnEffectAngle(26, 1, -128, f.f0, 0, 0), f.f0 += 0.19635, f.f0 = l(f.f0), f.spawnEffectAngle(26, 1, -128, f.f0, 0, 0), --f.ci0 > 0) {
          i = 2;
          break;
        }
        i = 3;
        break;
      }
      case 3: {
        f.playSfx(18), f.spawnEffectAngle(26, 64, -8355585, -999, 0, 0), i = 4;
        break;
      }
      case 4: {
        f.endSpell(), f.setBossPresent(-1), f.maxHp = 1, yield 2, i = 5;
        break;
      }
      case 5: {
        f.maxHp = 0, yield 3e3, i = 6;
        break;
      }
      case 6:
        return;
      default:
        return;
    }
}
function* T(f) {
  let i = 0, a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        if (f.complexBossInit(1), f.setMisc129(0), f.setDeathCallbackSub(-1), f.clearScriptFlags(3), f.f0 = f.randAngle, f.movePolar(60, 4, f.f0, 0.15), f.setMisc173(0), f.ci3 = 0, f.spellCardState == 0) {
          i = 4;
          break;
        }
        i = 1;
        break;
      }
      case 1: {
        f.f0 = 0, f.ci0 = 6, f.playSfx(7), i = 2;
        break;
      }
      case 2: {
        if (f.f0 += 0.19635, f.f0 = l(f.f0), f.spawnEffectAngle(26, 1, -1, f.f0, 0, 0), f.f0 += 0.19635, f.f0 = l(f.f0), f.spawnEffectAngle(26, 1, -1, f.f0, 0, 0), f.f0 += 0.19635, f.f0 = l(f.f0), f.spawnEffectAngle(26, 1, -32640, f.f0, 0, 0), f.f0 += 0.19635, f.f0 = l(f.f0), f.spawnEffectAngle(26, 1, -32640, f.f0, 0, 0), f.f0 += 0.19635, f.f0 = l(f.f0), f.spawnEffectAngle(26, 1, -8323200, f.f0, 0, 0), f.f0 += 0.19635, f.f0 = l(f.f0), f.spawnEffectAngle(26, 1, -8323200, f.f0, 0, 0), f.f0 += 0.19635, f.f0 = l(f.f0), f.spawnEffectAngle(26, 1, -8355585, f.f0, 0, 0), f.f0 += 0.19635, f.f0 = l(f.f0), f.spawnEffectAngle(26, 1, -8355585, f.f0, 0, 0), f.f0 += 0.19635, f.f0 = l(f.f0), f.spawnEffectAngle(26, 1, -128, f.f0, 0, 0), f.f0 += 0.19635, f.f0 = l(f.f0), f.spawnEffectAngle(26, 1, -128, f.f0, 0, 0), --f.ci0 > 0) {
          i = 2;
          break;
        }
        i = 3;
        break;
      }
      case 3: {
        f.playSfx(18), f.spawnEffectAngle(26, 64, -8355585, -999, 0, 0), f.ci3 = 1, i = 4;
        break;
      }
      case 4: {
        if (f.endSpell(), f.ci3 == 0) {
          i = 6;
          break;
        }
        i = 5;
        break;
      }
      case 5: {
        yield f.delay(120), i = 6;
        break;
      }
      case 6: {
        f.setBossPresent(-1), f.maxHp = 1, yield 2, i = 7;
        break;
      }
      case 7: {
        f.maxHp = 0, yield 3e3, i = 8;
        break;
      }
      case 8:
        return;
      default:
        return;
    }
}
function* L(f) {
  let i = 0, a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        f.setAnmScripts6Alt(0), f.clearScriptFlags(20), f.setBossPresent(0), f.setBounds(48, 48), f.setMisc160(60), f.setLives(16e3), f.setSpellTimer(5940, 19), f.setMisc129(2), f.setDeathCallbackSub(19), f.eclSetLives(1), f.setRelPos(352, -32), f.moveRelative(60, 4, 192, 128), f.setMisc126(15, 1), yield 60, i = 1;
        break;
      }
      case 1: {
        f.spawnEffect(6, 1050253722, 1060320051, 1050253722, 1124073472), yield 10, i = 2;
        break;
      }
      case 2: {
        f.spawnEffect(6, -1097229926, 1060320051, 1050253722, 1124073472), yield 10, i = 3;
        break;
      }
      case 3: {
        f.spawnEffect(6, 1050253722, 1060320051, -1097229926, 1124073472), yield 10, i = 4;
        break;
      }
      case 4: {
        f.spawnEffect(6, -1097229926, -1087163597, -1097229926, 1119879168), yield 10, i = 5;
        break;
      }
      case 5: {
        f.spawnEffect(6, 1050253722, -1087163597, -1097229926, 1119879168), yield 10, i = 6;
        break;
      }
      case 6: {
        f.spawnEffect(6, -1097229926, -1087163597, 1050253722, 1119879168), yield 10, i = 7;
        break;
      }
      case 7: {
        f.setMotionClamp(32, 48, 352, 128), yield 3e4, i = 8;
        break;
      }
      case 8: {
        i = 8;
        break;
      }
      default:
        return;
    }
}
function* B(f) {
  let i = 0, a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        f.setScriptFlags(7), f.setMisc160(120), f.setBossPresent(0), f.setMisc144(10, 5), f.setLives(16e3), f.eclSetLives(0), f.setMotionClamp(32, 48, 352, 128), f.setMisc129(1), f.setDeathCallbackSub(24), f.setSpellTimer(2400, 19), f.setPhase(0, 1900, 19), f.setLifeBarSlice(0, 0, f.phase0, 16744576), f.ci3 = 0, i = 1;
        break;
      }
      case 1: {
        yield* d(f), i = 2;
        break;
      }
      case 2: {
        f.isDiff(n | s) && (f.ci0 = 8), f.isDiff(r | s) && (f.ci0 = 16), f.isDiff(c | s) && (f.ci0 = 20), f.isDiff(e | s) && (f.ci0 = 20), f.isDiff(n | s) && (f.f2 = 0.785398), f.isDiff(r | s) && (f.f2 = 0.392699), f.isDiff(c | s) && (f.f2 = 0.314159), f.isDiff(e | s) && (f.f2 = 0.314159), f.f0 = f.randAngle, f.f1 = 1, f.autoAnm(), i = 3;
        break;
      }
      case 3: {
        if (f.f0 = l(f.f0), f.linkChildRelative(17, 0, 0, 300, -2, 100), f.f0 += f.f2, --f.ci0 > 0) {
          i = 3;
          break;
        }
        i = 4;
        break;
      }
      case 4: {
        f.moveBounce(60, 4, 1), f.ci3++, yield 60, i = 5;
        break;
      }
      case 5: {
        i = 1;
        break;
      }
      default:
        return;
    }
}
function* d(f) {
  let i = 0, a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        f.f2 = f.randAngle, f.ci0 = 32, f.isDiff(n | s) && (f.f3 = 1.2), f.isDiff(r | s) && (f.f3 = 1.5), f.isDiff(c | s) && (f.f3 = 2), f.isDiff(e | s) && (f.f3 = 2.5), f.isDiff(n | s) && (f.i2 = 3), f.isDiff(r | s) && (f.i2 = 10), f.isDiff(c | s) && (f.i2 = 10), f.isDiff(e | s) && (f.i2 = 14), f.setShotRecord(0, 8192, 0, 120, -1, -1, -1), i = 1;
        break;
      }
      case 1: {
        if (f.f0 = Math.cos(f.f2), f.f0 *= 64, f.f1 = Math.sin(f.f2), f.f1 *= 64, f.setShotOrigin(f.f0, f.f1), f.i0 = f.ci0 % 2, f.i0 != 0) {
          i = 3;
          break;
        }
        i = 2;
        break;
      }
      case 2: {
        f.setShotRecord(1, 64, 1, 60, 1, -2.513274, f.f3), i = 4;
        break;
      }
      case 3: {
        f.setShotRecord(1, 64, 1, 60, 1, 2.513274, f.f3), i = 4;
        break;
      }
      case 4: {
        if (f.setShotRecord(2, 16384, 0, 2, 4, -1, -1), f.f2 += 0.19635, f.f2 = l(f.f2), f.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 2,
          color: 2,
          count: t(10002),
          rings: 1,
          speed: 3,
          speed2: 0.8,
          angle: t(10018),
          angleStep: 0.24543692,
          transform: 25154
        }), --f.ci0 > 0) {
          i = 1;
          break;
        }
        i = 5;
        break;
      }
      case 5:
        return;
      default:
        return;
    }
}
function* I(f) {
  let i = 0, a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        f.setAnm(54), f.effectWithYoukai(1), f.setBounds(24, 24), f.setHitFlash(1), f.setHeadingSpeed(f.f0, f.f1), yield 1, i = 1;
        break;
      }
      case 1: {
        f.setScriptFlags(3), f.callSubAlloc(0, 18), yield 5e3, i = 2;
        break;
      }
      case 2:
        return;
      default:
        return;
    }
}
function* z(f) {
  let i = 0, a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        f.f0 += 3.141593, f.f0 = l(f.f0), f.ci0 = 10, f.setShotRecord(0, 128, 0, 60, 1, 0, 1.5), i = 1;
        break;
      }
      case 1: {
        f.isDiff(n | r | c | e | s) && f.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 3,
          color: 2,
          count: 1,
          rings: 1,
          speed: 1.5,
          speed2: 0.8,
          angle: t(10016),
          angleStep: 0.09817477,
          transform: 514
        }), f.isDiff(n | r | c | e | s) && f.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 3,
          color: 6,
          count: 1,
          rings: 1,
          speed: 3,
          speed2: 0.8,
          angle: t(10016),
          angleStep: 0.09817477,
          transform: 642
        }), yield 20, i = 2;
        break;
      }
      case 2: {
        if (--f.ci0 > 0) {
          i = 1;
          break;
        }
        i = 3;
        break;
      }
      case 3:
        return;
      default:
        return;
    }
}
function* P(f) {
  let i = 0, a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        f.setScriptFlags(4), f.setMisc144(10, 5), f.setMisc160(320), f.moveRelative(60, 4, 192, 128), f.setSpellTimer(2400, 24), f.setMisc129(1), f.setDeathCallbackSub(24), f.setShotRepeat(0), f.enemyFunc95(), f.setShotSound(-1, -1), f.clearScriptFlags(4), f.setShotOrigin(0, 0), f.setSpellTimer(2400, 24), f.resetSpellTimerSub(), f.setSpellTimerElapsed(0), f.ci3 = 0, f.moveRelative(90, 4, 192, 128), f.isDiff(n | s) && f.startSpell("薬符「壺中の大銀河」", "八意永琳", 147, 0, 3e7), f.isDiff(r | s) && f.startSpell("薬符「壺中の大銀河」", "八意永琳", 148, 0, 3e7), f.isDiff(c | s) && f.startSpell("薬符「壺中の大銀河」", "八意永琳", 149, 0, 3e7), f.isDiff(e | s) && f.startSpell("薬符「壺中の大銀河」", "八意永琳", 150, 0, 3e7), yield 90, i = 1;
        break;
      }
      case 1: {
        f.setScriptFlags(4), f.setMisc160(180), f.setSpellTimer(2400, 24), f.setMisc129(1), f.setDeathCallbackSub(25), f.eclSetLives(0), f.ci3 = 0, i = 2;
        break;
      }
      case 2: {
        if (f.ci0 = 16, f.f2 = 1.570796, f.f3 = 400, f.ci1 = 68, f.f5 = 0.05236, f.f6 = f.playerX, f.f7 = f.playerY, f.f6 >= 88) {
          i = 4;
          break;
        }
        i = 3;
        break;
      }
      case 3: {
        f.f6 = 88, i = 6;
        break;
      }
      case 4: {
        if (f.f6 <= 296) {
          i = 6;
          break;
        }
        i = 5;
        break;
      }
      case 5: {
        f.f6 = 296, i = 6;
        break;
      }
      case 6: {
        if (f.f7 >= 88) {
          i = 8;
          break;
        }
        i = 7;
        break;
      }
      case 7: {
        f.f7 = 88, i = 10;
        break;
      }
      case 8: {
        if (f.f7 <= 360) {
          i = 10;
          break;
        }
        i = 9;
        break;
      }
      case 9: {
        f.f7 = 360, i = 10;
        break;
      }
      case 10: {
        f.f4 = 0 - f.f2, f.f0 = Math.cos(f.f4), f.f0 *= 80, f.f1 = Math.sin(f.f4), f.f1 *= 80, f.f0 += f.f6, f.f1 += f.f7, f.linkChildRelative(23, 0, 0, 100, -2, 100), f.f2 += 0.392699, f.f2 = l(f.f2), f.ci1 -= 4, yield 4, i = 11;
        break;
      }
      case 11: {
        if (--f.ci0 > 0) {
          i = 10;
          break;
        }
        i = 12;
        break;
      }
      case 12: {
        f.moveBounce(60, 4, 1), f.ci3++, yield 120, i = 13;
        break;
      }
      case 13: {
        i = 2;
        break;
      }
      default:
        return;
    }
}
function* H(f) {
  let i = 0, a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        f.f1 = Math.atan2(f.posY - f.f7, f.posX - f.f6), f.f0 = f.f1 + 1.570796, f.f0 = l(f.f0), f.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 2,
          color: 6,
          count: 2,
          rings: 1,
          speed: 3,
          speed2: 0.8,
          angle: t(10016),
          angleStep: 0.1308997,
          transform: 514
        }), f.f0 = f.f1 - 1.570796, f.f0 = l(f.f0), f.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 2,
          color: 2,
          count: 2,
          rings: 1,
          speed: 3,
          speed2: 0.8,
          angle: t(10016),
          angleStep: 0.1308997,
          transform: 2
        }), f.f0 = f.f1, f.f0 = l(f.f0), f.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 2,
          color: 4,
          count: 2,
          rings: 1,
          speed: 3,
          speed2: 0.8,
          angle: t(10016),
          angleStep: 0.1308997,
          transform: 2
        }), yield 8, i = 1;
        break;
      }
      case 1: {
        i = 0;
        break;
      }
      case 2:
        return;
      default:
        return;
    }
}
function* O(f) {
  let i = 0, a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        f.ci1 *= 3, yield f.delay(f.ci1), f.isDiff(n | s) && (f.ci2 = 90), f.isDiff(r | s) && (f.ci2 = 30), f.isDiff(c | s) && (f.ci2 = 25), f.isDiff(e | s) && (f.ci2 = 17), i = 1;
        break;
      }
      case 1: {
        f.f0 = f.randF32S * 0.098175, f.f0 = l(f.f0), f.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 0,
          color: 6,
          count: 1,
          rings: 3,
          speed: 1.2,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.1308997,
          transform: 514
        }), yield f.delay(f.ci2), i = 1;
        break;
      }
      case 2:
        return;
      default:
        return;
    }
}
function* Y(f) {
  let i = 0, a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        f.f1 = Math.atan2(f.playerY - f.ef7, f.playerX - f.ef6), f.setHeadingSpeed(f.f1, 0.2), f.f2 = Math.cos(f.f1), f.f2 *= 0.2, f.f3 = Math.sin(f.f1), f.f3 *= 0.2, f.ef6 += f.f2, f.ef7 += f.f3, yield 1, i = 1;
        break;
      }
      case 1: {
        i = 0;
        break;
      }
      default:
        return;
    }
}
function* X(f) {
  let i = 0, a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        f.setAnm(54), f.effectWithYoukai(1), f.setBounds(24, 24), f.clearScriptFlags(16), f.setHitFlash(1), f.cxf2 = Math.cos(f.f2), f.cxf2 *= f.f3, f.cxf3 = Math.sin(f.f2), f.cxf3 *= f.f3, f.cf0 = f.posX, f.cf1 = f.posY, f.f2 = f.randSignF(400), f.interpSlot(10042, 120, 7, 0, f.cf0, f.f0, f.cxf2, f.f2), f.f2 = f.randSignF(400), f.interpSlot(10043, 120, 7, 0, f.cf1, f.f1, f.cxf3, f.f2), f.ef6 = f.f6, f.ef7 = f.f7, yield 120, i = 1;
        break;
      }
      case 1: {
        f.setHeadingSpeed(0, 0), yield f.delay(f.ci1), f.callSubAlloc(2, 22), f.callSubAlloc(0, 20), f.callSubAlloc(1, 21), f.moveOrbit(6e3, f.ef6, f.ef7, f.f4, f.f5, 80, 1), f.callSubAlloc(2, -1), yield 120, i = 2;
        break;
      }
      case 2: {
        f.setScriptFlags(16), yield 5e3, i = 3;
        break;
      }
      case 3:
        return;
      default:
        return;
    }
}
function* N(f) {
  let i = 0, a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        f.setMisc147(1), f.setMisc129(0), f.setDeathCallbackSub(-1), f.clearScriptFlags(3), f.f0 = f.randAngle, f.movePolar(60, 4, f.f0, 0.15), f.setMisc173(0), f.f0 = 0, f.ci0 = 6, f.playSfx(7), i = 1;
        break;
      }
      case 1: {
        if (f.f0 += 0.19635, f.f0 = l(f.f0), f.spawnEffectAngle(26, 1, -1, f.f0, 0, 0), f.f0 += 0.19635, f.f0 = l(f.f0), f.spawnEffectAngle(26, 1, -1, f.f0, 0, 0), f.f0 += 0.19635, f.f0 = l(f.f0), f.spawnEffectAngle(26, 1, -32640, f.f0, 0, 0), f.f0 += 0.19635, f.f0 = l(f.f0), f.spawnEffectAngle(26, 1, -32640, f.f0, 0, 0), f.f0 += 0.19635, f.f0 = l(f.f0), f.spawnEffectAngle(26, 1, -8323200, f.f0, 0, 0), f.f0 += 0.19635, f.f0 = l(f.f0), f.spawnEffectAngle(26, 1, -8323200, f.f0, 0, 0), f.f0 += 0.19635, f.f0 = l(f.f0), f.spawnEffectAngle(26, 1, -8355585, f.f0, 0, 0), f.f0 += 0.19635, f.f0 = l(f.f0), f.spawnEffectAngle(26, 1, -8355585, f.f0, 0, 0), f.f0 += 0.19635, f.f0 = l(f.f0), f.spawnEffectAngle(26, 1, -128, f.f0, 0, 0), f.f0 += 0.19635, f.f0 = l(f.f0), f.spawnEffectAngle(26, 1, -128, f.f0, 0, 0), --f.ci0 > 0) {
          i = 1;
          break;
        }
        i = 2;
        break;
      }
      case 2: {
        f.playSfx(18), f.spawnEffectAngle(26, 64, -8355585, -999, 0, 0), f.endSpell(), f.setBossPresent(-1), f.maxHp = 1, yield 2, i = 3;
        break;
      }
      case 3: {
        f.maxHp = 0, yield 3e3, i = 4;
        break;
      }
      case 4:
        return;
      default:
        return;
    }
}
function* G(f) {
  let i = 0, a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        f.setMisc147(1), f.setMisc129(0), f.spawnItem(3), f.setDeathCallbackSub(-1), f.clearScriptFlags(3), f.f0 = f.randAngle, f.movePolar(60, 4, f.f0, 0.15), f.setMisc173(0), f.f0 = 0, f.ci0 = 6, f.playSfx(7), i = 1;
        break;
      }
      case 1: {
        if (f.f0 += 0.19635, f.f0 = l(f.f0), f.spawnEffectAngle(26, 1, -1, f.f0, 0, 0), f.f0 += 0.19635, f.f0 = l(f.f0), f.spawnEffectAngle(26, 1, -1, f.f0, 0, 0), f.f0 += 0.19635, f.f0 = l(f.f0), f.spawnEffectAngle(26, 1, -32640, f.f0, 0, 0), f.f0 += 0.19635, f.f0 = l(f.f0), f.spawnEffectAngle(26, 1, -32640, f.f0, 0, 0), f.f0 += 0.19635, f.f0 = l(f.f0), f.spawnEffectAngle(26, 1, -8323200, f.f0, 0, 0), f.f0 += 0.19635, f.f0 = l(f.f0), f.spawnEffectAngle(26, 1, -8323200, f.f0, 0, 0), f.f0 += 0.19635, f.f0 = l(f.f0), f.spawnEffectAngle(26, 1, -8355585, f.f0, 0, 0), f.f0 += 0.19635, f.f0 = l(f.f0), f.spawnEffectAngle(26, 1, -8355585, f.f0, 0, 0), f.f0 += 0.19635, f.f0 = l(f.f0), f.spawnEffectAngle(26, 1, -128, f.f0, 0, 0), f.f0 += 0.19635, f.f0 = l(f.f0), f.spawnEffectAngle(26, 1, -128, f.f0, 0, 0), --f.ci0 > 0) {
          i = 1;
          break;
        }
        i = 2;
        break;
      }
      case 2: {
        f.playSfx(18), f.spawnEffectAngle(26, 64, -8355585, -999, 0, 0), f.endSpell(), f.setBossPresent(-1), f.maxHp = 1, yield 2, i = 3;
        break;
      }
      case 3: {
        f.maxHp = 0, yield 3e3, i = 4;
        break;
      }
      case 4:
        return;
      default:
        return;
    }
}
function* j(f) {
  let i = 0, a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        f.setAnmAlt(6), f.clearScriptFlags(3), f.clearScriptFlags(20), f.setBossPresent(0), f.setBounds(48, 32), f.setMisc160(60), f.eclSetLives(0), f.setSpellTimer(18e4, 50), f.setRelPos(192, 128), f.setMisc126(27, 1), yield 100, i = 1;
        break;
      }
      case 1: {
        i = 1;
        break;
      }
      default:
        return;
    }
}
function* U(f) {
  let i = 0, a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        f.setScriptFlags(4), f.setScriptFlags(3), f.setMisc160(120), f.setBossPresent(0), f.setAnmScripts6Alt(7), f.setMisc144(10, 5), f.setLives(18e3), f.eclSetLives(4), f.setMisc129(2), f.setDeathCallbackSub(31), f.setSpellTimer(3600, 50), f.setPhase(0, 2200, 50), f.setLifeBarSlice(0, 0, f.phase0, 16744576), f.spawnEffect(6, 1050253722, 1060320051, 1050253722, 1124073472), yield 10, i = 1;
        break;
      }
      case 1: {
        f.spawnEffect(6, -1097229926, 1060320051, 1050253722, 1124073472), yield 10, i = 2;
        break;
      }
      case 2: {
        f.spawnEffect(6, 1050253722, 1060320051, -1097229926, 1124073472), yield 10, i = 3;
        break;
      }
      case 3: {
        f.spawnEffect(6, -1097229926, -1087163597, -1097229926, 1119879168), yield 10, i = 4;
        break;
      }
      case 4: {
        f.spawnEffect(6, 1050253722, -1087163597, -1097229926, 1119879168), yield 10, i = 5;
        break;
      }
      case 5: {
        f.spawnEffect(6, -1097229926, -1087163597, 1050253722, 1119879168), yield 10, i = 6;
        break;
      }
      case 6: {
        f.setMotionClamp(32, 48, 352, 128), f.i0 = 20, yield* o(f), i = 7;
        break;
      }
      case 7: {
        f.callSubAlloc(0, 28), f.callSubAlloc(1, 29), f.callSubAlloc(2, 30), yield 180, i = 8;
        break;
      }
      case 8: {
        f.moveBounce(60, 4, 1), yield 60, i = 9;
        break;
      }
      case 9: {
        i = 8;
        break;
      }
      default:
        return;
    }
}
function* V(f) {
  let i = 0, a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        f.autoAnm(), f.f2 = f.randAngle, f.ci0 = 32, f.setShotRecord(0, 8192, 0, 120, -1, -1, -1), f.isDiff(n | s) && (f.f7 = 1), f.isDiff(r | s) && (f.f7 = 1.2), f.isDiff(c | s) && (f.f7 = 1.6), f.isDiff(e | s) && (f.f7 = 2), f.isDiff(n | s) && (f.ci2 = 9), f.isDiff(r | s) && (f.ci2 = 3), f.isDiff(c | s) && (f.ci2 = 3), f.isDiff(e | s) && (f.ci2 = 2), i = 1;
        break;
      }
      case 1: {
        f.f2 = f.randF32 * 64, f.f3 = f.randAngle, f.f0 = Math.cos(f.f3), f.f0 *= f.f2, f.f1 = Math.sin(f.f3), f.f1 *= f.f2, f.setShotOrigin(f.f0, f.f1), f.i0 = f.ci0 % 2, f.setShotRecord(1, 64, 1, 60, 1, -2.513274, f.f7), f.setShotRecord(2, 16384, 0, 2, 6, -1, -1), f.f2 = f.randF32S * 0.785398, f.f3 += f.f2, f.f3 = l(f.f3), f.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 17,
          color: 5,
          count: 5,
          rings: 1,
          speed: 3.5,
          speed2: 0.8,
          angle: t(10019),
          angleStep: 0.024543693,
          transform: 25154
        }), yield f.delay(f.ci2), i = 1;
        break;
      }
      default:
        return;
    }
}
function* W(f) {
  let i = 0, a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        f.autoAnm(), f.f2 = f.randAngle, yield 1, i = 1;
        break;
      }
      case 1: {
        f.ci0 = 32, f.setShotRecord(0, 8192, 0, 120, -1, -1, -1), f.isDiff(n | s) && (f.f7 = 1), f.isDiff(r | s) && (f.f7 = 1.2), f.isDiff(c | s) && (f.f7 = 1.6), f.isDiff(e | s) && (f.f7 = 2), f.isDiff(n | s) && (f.ci2 = 9), f.isDiff(r | s) && (f.ci2 = 3), f.isDiff(c | s) && (f.ci2 = 3), f.isDiff(e | s) && (f.ci2 = 2), i = 2;
        break;
      }
      case 2: {
        f.f2 = f.randF32 * 64, f.f3 = f.randAngle, f.f0 = Math.cos(f.f3), f.f0 *= f.f2, f.f1 = Math.sin(f.f3), f.f1 *= f.f2, f.setShotOrigin(f.f0, f.f1), f.i0 = f.ci0 % 2, f.setShotRecord(1, 64, 1, 60, 1, 2.513274, f.f7), f.setShotRecord(2, 16384, 0, 2, 2, -1, -1), f.f2 = f.randF32S * 0.785398, f.f3 += f.f2, f.f3 = l(f.f3), f.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 17,
          color: 1,
          count: 5,
          rings: 1,
          speed: 3.5,
          speed2: 0.8,
          angle: t(10019),
          angleStep: 0.024543693,
          transform: 25154
        }), yield f.delay(f.ci2), i = 2;
        break;
      }
      default:
        return;
    }
}
function* q(f) {
  let i = 0, a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        f.autoAnm(), yield 300, i = 1;
        break;
      }
      case 1: {
        f.f2 = f.randAngle, i = 2;
        break;
      }
      case 2: {
        f.ci0 = 8, f.f0 = f.timer, f.f1 = 1.5, f.playSfx(15), i = 3;
        break;
      }
      case 3: {
        f.setShotOrigin(0, 0), f.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 18,
          color: 1,
          count: 1,
          rings: 1,
          speed: t(10017),
          speed2: 0.8,
          angle: t(10016),
          angleStep: 0.24543692,
          transform: 514
        }), f.f1 += 0.2, yield 2, i = 4;
        break;
      }
      case 4: {
        if (--f.ci0 > 0) {
          i = 3;
          break;
        }
        i = 5;
        break;
      }
      case 5: {
        i = 2;
        break;
      }
      default:
        return;
    }
}
function* J(f) {
  let i = 0, a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        f.setScriptFlags(4), f.setScriptFlags(3), f.setMisc160(240), f.setTimeout(-1), f.endSpell(), f.setBossPresent(0), f.setAnmScripts6Alt(7), f.setMisc144(10, 5), f.setLives(27e3), f.eclSetLives(3), f.setMotionClamp(32, 48, 352, 128), f.setMisc129(2), f.setDeathCallbackSub(34), f.setSpellTimer(3600, 55), f.setPhase(0, 2500, 55), f.setLifeBarSlice(0, 0, f.phase0, 16744576), f.moveRelative(60, 4, 192, 128), f.i0 = 20, yield 80, i = 1;
        break;
      }
      case 1: {
        yield* o(f), i = 2;
        break;
      }
      case 2: {
        f.setMisc136(15, 0), f.setMisc147(2), yield 30, i = 3;
        break;
      }
      case 3: {
        f.nop(), f.ci3 = 0, f.f0 = 0, f.f1 = 1, f.ci0 = 9, i = 4;
        break;
      }
      case 4: {
        if (f.i0 = f.ci0 % 2, f.i0 != 0) {
          i = 6;
          break;
        }
        i = 5;
        break;
      }
      case 5: {
        f.f7 = f.timer - 1.570796, f.f7 = l(f.f7), f.f6 = 0.10472, i = 7;
        break;
      }
      case 6: {
        f.f7 = f.timer + 1.570796, f.f7 = l(f.f7), f.f6 = -0.10472, i = 7;
        break;
      }
      case 7: {
        if (f.linkChildAttached(33, 0, 0, 3500, 1, 1e5), f.f0 += 0.392699, f.f0 = l(f.f0), --f.ci0 > 0) {
          i = 4;
          break;
        }
        i = 8;
        break;
      }
      case 8: {
        if (f.isDiff(n | s)) {
          yield 30, i = 14;
          break;
        }
        i = 9;
        break;
      }
      case 9: {
        f.f0 = 0, f.f1 = 2, f.ci0 = 11, i = 10;
        break;
      }
      case 10: {
        if (f.i0 = f.ci0 % 2, f.i0 != 1) {
          i = 12;
          break;
        }
        i = 11;
        break;
      }
      case 11: {
        f.f7 = f.timer - 1.570796, f.f7 = l(f.f7), f.f6 = -0.314159, i = 13;
        break;
      }
      case 12: {
        f.f7 = f.timer + 1.570796, f.f7 = l(f.f7), f.f6 = 0.314159, i = 13;
        break;
      }
      case 13: {
        if (f.linkChildAttached(33, 0, 0, 3500, 1, 1e5), f.f0 += 0.314159, f.f0 = l(f.f0), --f.ci0 > 0) {
          i = 10;
          break;
        }
        i = 14;
        break;
      }
      case 14: {
        i = 14;
        break;
      }
      default:
        return;
    }
}
function* K(f) {
  let i = 0, a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        f.setGaugeTimer(0, 0, 0, 0, 0, 0), f.isDiff(n | s) && (f.ci2 = 16), f.isDiff(r | s) && (f.ci2 = 16), f.isDiff(c | s) && (f.ci2 = 16), f.isDiff(e | s) && (f.ci2 = 12), i = 1;
        break;
      }
      case 1: {
        f.cf0 = f.posX + 16, f.cf1 = f.posY + 16, f.f0 = f.randF32S * 32, f.cf0 += f.f0, f.f0 = f.randF32S * 32, f.cf1 += f.f0, f.i0 = f.cf0i, f.i1 = f.cf1i, f.i0 = Math.trunc(f.i0 / 16), f.i1 = Math.trunc(f.i1 / 16), f.i0 *= 16, f.i1 *= 16, f.cf0 = f.i0, f.cf1 = f.i1, f.cf0 = f.cf0 - f.posX, f.cf1 = f.cf1 - f.posY, f.setShotOrigin(f.cf0, f.cf1), f.setShotRecord(0, 131072, 0, 60, -1, -1, -1), f.f5 = f.randF32S * 0.5, f.isDiff(n | s) && (f.f5 += 1.2), f.isDiff(r | s) && (f.f5 += 1.2), f.isDiff(c | s) && (f.f5 += 1.5), f.isDiff(e | s) && (f.f5 += 1.8), f.f5 /= 60, f.setShotRecord(1, 16, 0, 60, -1, f.f5, f.f7), f.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 3,
          color: 6,
          count: 1,
          rings: 1,
          speed: 0,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.2617994,
          transform: 131608
        }), f.f7 += f.f6, f.f0 = l(f.f0), yield f.delay(f.ci2), i = 1;
        break;
      }
      case 2:
        return;
      default:
        return;
    }
}
function* Q(f) {
  let i = 0, a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        f.setAnm(53), f.setHitFlash(1), f.setMisc145(1), f.setBounds(24, 24), f.setMisc160(30), f.movePolar(60, 4, f.f0, f.f1), yield 60, i = 1;
        break;
      }
      case 1: {
        f.setHeadingSpeed(0, 0), yield 10, i = 2;
        break;
      }
      case 2: {
        f.callSubAlloc(0, 32), yield 3e4, i = 3;
        break;
      }
      case 3:
        return;
      default:
        return;
    }
}
function* Z(f) {
  let i = 0, a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        f.setScriptFlags(4), f.setScriptFlags(3), f.setMisc160(420), f.setTimeout(-1), f.endSpell(), f.setBossPresent(0), f.setAnmScripts6Alt(7), f.setMisc147(3), f.setShotOrigin(0, 0), f.setMisc144(10, 5), f.setLives(18e3), f.eclSetLives(2), f.setMotionClamp(32, 48, 352, 128), f.setGaugeTimer(0, 0, 0, 0, 0, 0), f.setMisc129(2), f.setDeathCallbackSub(38), f.setSpellTimer(3600, 61), f.setPhase(0, 2500, 61), f.setLifeBarSlice(0, 0, f.phase0, 16744576), f.moveRelative(60, 4, 192, 128), f.i0 = 20, yield 80, i = 1;
        break;
      }
      case 1: {
        yield* o(f), i = 2;
        break;
      }
      case 2: {
        f.setMisc136(15, 0), yield 30, i = 3;
        break;
      }
      case 3: {
        f.nop(), f.ci3 = 0, i = 4;
        break;
      }
      case 4: {
        f.f0 = f.randAngle, f.f1 = 0.010472, f.isDiff(n | s) && (f.ci0 = 3), f.isDiff(r | s) && (f.ci0 = 6), f.isDiff(c | s) && (f.ci0 = 6), f.isDiff(e | s) && (f.ci0 = 6), f.i0 = 1, f.i1 = 6, f.i2 = 3, f.f2 = 0.785398, f.autoAnm(), i = 5;
        break;
      }
      case 5: {
        if (f.linkChildRelative(37, 0, 0, 1500, -2, 1e5), f.isDiff(n | s) && (f.f0 += 2.094395), f.isDiff(r | c | e | s) && (f.f0 += 1.047198), f.f0 = l(f.f0), --f.ci0 > 0) {
          i = 5;
          break;
        }
        i = 6;
        break;
      }
      case 6: {
        f.f0 = f.randAngle, f.f1 = -0.010472, f.isDiff(n | s) && (f.ci0 = 3), f.isDiff(r | s) && (f.ci0 = 6), f.isDiff(c | s) && (f.ci0 = 6), f.isDiff(e | s) && (f.ci0 = 6), f.i0 = 2, f.i1 = 10, f.i2 = 5, f.f2 = -0.785398, f.autoAnm(), i = 7;
        break;
      }
      case 7: {
        if (f.linkChildRelative(37, 0, 0, 1500, -2, 1e5), f.isDiff(n | s) && (f.f0 += 2.094395), f.isDiff(r | c | e | s) && (f.f0 += 1.047198), f.f0 = l(f.f0), --f.ci0 > 0) {
          i = 7;
          break;
        }
        i = 8;
        break;
      }
      case 8: {
        f.ci3++, yield 160, i = 9;
        break;
      }
      case 9: {
        f.moveBounce(60, 4, 1), f.callSubAlloc(0, 35), yield 60, i = 10;
        break;
      }
      case 10: {
        i = 4;
        break;
      }
      default:
        return;
    }
}
function* $(f) {
  let i = 0, a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        f.isDiff(n | s) && (f.i0 = 24), f.isDiff(r | s) && (f.i0 = 48), f.isDiff(c | s) && (f.i0 = 48), f.isDiff(e | s) && (f.i0 = 48), i = 1;
        break;
      }
      case 1: {
        f.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 17,
          color: 5,
          count: t(1e4),
          rings: 1,
          speed: 1,
          speed2: 0.5,
          angle: t(10082),
          angleStep: 0,
          transform: 514
        }), yield 60, i = 2;
        break;
      }
      case 2: {
        i = 1;
        break;
      }
      default:
        return;
    }
}
function* f0(f) {
  let i = 0, a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        f.setGaugeTimer(0, 0, 0, 0, 0, 0), f.cf0 = f.cf0 - f.posX, f.cf1 = f.cf1 - f.posY, f.setShotOrigin(f.cf0, f.cf1), f.setShotRecord(0, 8192, 0, 300, -1, -1, -1), f.setShotRecord(1, 131072, 1, 30, -1, -1, -1), f.setShotRecord(2, 524288, 0, 27, -1, -1, -1), yield 50, i = 1;
        break;
      }
      case 1: {
        f.ci0 = 6, i = 2;
        break;
      }
      case 2: {
        f.f0 = f.randF32 * 0.5, f.f0 += 1.3, f.f0 /= 240, f.setShotRecord(3, 32, 0, 240, -1, f.f0, f.f1), f.cf0 = f.randF32S * 32, f.cf1 = f.randF32S * 32, f.setShotOrigin(f.cf0, f.cf1), f.f0 = f.orbitAngle + f.f2, f.f0 = l(f.f0), f.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 10,
          color: t(1e4),
          count: 1,
          rings: 1,
          speed: 0,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0,
          transform: 664098
        }), yield 4, i = 3;
        break;
      }
      case 3: {
        f.cf0 = f.randF32S * 32, f.cf1 = f.randF32S * 32, f.setShotOrigin(f.cf0, f.cf1), f.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 3,
          color: t(10001),
          count: 1,
          rings: 1,
          speed: 0,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0,
          transform: 664098
        }), yield 4, i = 4;
        break;
      }
      case 4: {
        f.cf0 = f.randF32S * 32, f.cf1 = f.randF32S * 32, f.setShotOrigin(f.cf0, f.cf1), f.f0 = l(f.f0), f.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 7,
          color: t(10002),
          count: 1,
          rings: 1,
          speed: 0,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0,
          transform: 664098
        }), yield 4, i = 5;
        break;
      }
      case 5: {
        if (--f.ci0 > 0) {
          i = 2;
          break;
        }
        i = 6;
        break;
      }
      case 6:
        return;
      default:
        return;
    }
}
function* i0(f) {
  let i = 0, a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        f.setAnm(53), f.setHitFlash(1), f.clearScriptFlags(16), f.setBounds(24, 24), f.setMisc160(30), f.moveOrbit(600, f.posX, f.posY, f.f0, f.f1, 0, 2), yield 10, i = 1;
        break;
      }
      case 1: {
        f.callSubAlloc(0, 36), yield 200, i = 2;
        break;
      }
      case 2: {
        f.setScriptFlags(16), yield 3e4, i = 3;
        break;
      }
      case 3:
        return;
      default:
        return;
    }
}
function* s0(f) {
  let i = 0, a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        f.setScriptFlags(4), f.setScriptFlags(3), f.setAnmScripts6Alt(7), f.setMisc160(320), f.setTimeout(-1), f.endSpell(), f.setBossPresent(0), f.setMisc147(4), f.setShotOrigin(0, 0), f.setGaugeTimer(0, 0, 0, 0, 0, 0), f.setMisc144(10, 5), f.setLives(3e4), f.eclSetLives(1), f.setMotionClamp(32, 48, 352, 128), f.setMisc129(2), f.setDeathCallbackSub(38), f.setSpellTimer(3600, 67), f.setPhase(0, 2500, 67), f.setLifeBarSlice(0, 0, f.phase0, 16744576), f.moveRelative(60, 4, 192, 128), f.i0 = 20, yield 80, i = 1;
        break;
      }
      case 1: {
        yield* o(f), i = 2;
        break;
      }
      case 2: {
        f.setMisc136(15, 0), yield 50, i = 3;
        break;
      }
      case 3: {
        f.nop(), f.ci3 = 0, f.callSubAlloc(0, 39), f.callSubAlloc(1, 41), yield 30, i = 4;
        break;
      }
      case 4: {
        i = 4;
        break;
      }
      default:
        return;
    }
}
function* a0(f) {
  let i = 0, a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        f.f0 = f.randAngle, f.isDiff(n | s) && (f.i0 = 2), f.isDiff(r | s) && (f.i0 = 4), f.isDiff(c | s) && (f.i0 = 5), f.isDiff(e | s) && (f.i0 = 6), f.isDiff(n | s) && (f.f2 = 0.3), f.isDiff(r | s) && (f.f2 = 0.3), f.isDiff(c | s) && (f.f2 = 0.35), f.isDiff(e | s) && (f.f2 = 0.4), i = 1;
        break;
      }
      case 1: {
        f.setShotRecord(0, 64, 0, 170, 1, f.randAngle, f.f2), f.setShotRecord(1, 16384, 0, 18, 1, -1, -1), f.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 18,
          color: 3,
          count: t(1e4),
          rings: 1,
          speed: 3.4,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0,
          transform: 16962
        }), f.f1 = f.randAngle / 256, f.f0 += 0.20944, f.f0 += f.f1, f.f0 = l(f.f0), yield 5, i = 2;
        break;
      }
      case 2: {
        i = 1;
        break;
      }
      default:
        return;
    }
}
function* t0(f) {
  let i = 0, a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        f.f0 = 1.570796, i = 1;
        break;
      }
      case 1: {
        f.setShotRecord(0, 8192, 0, 240, -1, -1, -1), f.setShotRecord(1, 32, 1, 120, -1, -0.016667, -0.02618), f.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 18,
          color: 5,
          count: 4,
          rings: 1,
          speed: 3,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0,
          transform: 8736
        }), f.f0 -= 0.1496, f.f0 = l(f.f0), yield 5, i = 2;
        break;
      }
      case 2: {
        i = 1;
        break;
      }
      default:
        return;
    }
}
function* l0(f) {
  let i = 0;
  yield 200;
  let a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        f.nop(), i = 1;
        break;
      }
      case 1: {
        if (f.hpRatio >= 48) {
          yield 8, i = 3;
          break;
        }
        i = 2;
        break;
      }
      case 2: {
        f.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 17,
          color: 7,
          count: 52,
          rings: 1,
          speed: 2,
          speed2: 0.5,
          angle: t(10082),
          angleStep: 0,
          transform: 514
        }), yield 8, i = 3;
        break;
      }
      case 3: {
        i = 1;
        break;
      }
      default:
        return;
    }
}
function* n0(f) {
  let i = 0, a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        f.setAnmScripts6Alt(7), f.clearScriptFlags(8), f.eclSetLives(0), f.setBossPresent(0), f.setMisc159(1), f.setLives(6e3), f.setLifeBarSlice(0, 0, f.maxHp, 16752800), f.complexSetup(1), f.setRelPos(192, 224), f.startStageBg(), f.playSfx(5), f.spawnEffectAt(40, 1, -1), yield 4, i = 1;
        break;
      }
      case 1: {
        f.spawnEffectAt(40, 1, -12080), yield 4, i = 2;
        break;
      }
      case 2: {
        f.spawnEffectAt(40, 1, -32640), yield 4, i = 3;
        break;
      }
      case 3: {
        f.spawnEffectAt(40, 1, -49088), yield 50, i = 4;
        break;
      }
      case 4: {
        f.playSfx(15), f.setScriptFlags(8), f.setMisc173(1), f.setMisc129(3), f.setDeathCallbackSub(45), yield* u(f);
        return;
      }
      default:
        return;
    }
}
function* o(f) {
  let i = 0, a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        f.ci0 = 32, i = 1;
        break;
      }
      case 1: {
        f.spawnEffectAt(17, 4, -1), yield 1, i = 2;
        break;
      }
      case 2: {
        if (--f.ci0 > 0) {
          i = 1;
          break;
        }
        i = 3;
        break;
      }
      case 3:
        return;
      default:
        return;
    }
}
function* e0(f) {
  let i = 0, a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        f.complexBossInit(1), f.maxHp = 1, f.setMisc129(0), f.maxHp = 1, f.setMisc129(0), f.setDeathCallbackSub(-1), f.setScriptFlags(48), f.clearScriptFlags(3), f.f0 = f.randAngle, f.movePolar(60, 4, f.f0, 0.15), f.setMisc173(0), f.setMisc136(18, 4), f.f0 = 0, f.ci0 = 6, i = 1;
        break;
      }
      case 1: {
        f.playSfx(7), yield 1, i = 2;
        break;
      }
      case 2: {
        f.f0 += 0.19635, f.f0 = l(f.f0), f.spawnEffectAngle(26, 1, -1, f.f0, 0, 0), yield 1, i = 3;
        break;
      }
      case 3: {
        f.f0 += 0.19635, f.f0 = l(f.f0), f.spawnEffectAngle(26, 1, -1, f.f0, 0, 0), yield 1, i = 4;
        break;
      }
      case 4: {
        f.f0 += 0.19635, f.f0 = l(f.f0), f.spawnEffectAngle(26, 1, -32640, f.f0, 0, 0), yield 1, i = 5;
        break;
      }
      case 5: {
        f.f0 += 0.19635, f.f0 = l(f.f0), f.spawnEffectAngle(26, 1, -32640, f.f0, 0, 0), yield 1, i = 6;
        break;
      }
      case 6: {
        f.f0 += 0.19635, f.f0 = l(f.f0), f.spawnEffectAngle(26, 1, -8323200, f.f0, 0, 0), yield 1, i = 7;
        break;
      }
      case 7: {
        f.f0 += 0.19635, f.f0 = l(f.f0), f.spawnEffectAngle(26, 1, -8323200, f.f0, 0, 0), yield 1, i = 8;
        break;
      }
      case 8: {
        f.f0 += 0.19635, f.f0 = l(f.f0), f.spawnEffectAngle(26, 1, -8355585, f.f0, 0, 0), yield 1, i = 9;
        break;
      }
      case 9: {
        f.f0 += 0.19635, f.f0 = l(f.f0), f.spawnEffectAngle(26, 1, -8355585, f.f0, 0, 0), yield 1, i = 10;
        break;
      }
      case 10: {
        f.f0 += 0.19635, f.f0 = l(f.f0), f.spawnEffectAngle(26, 1, -128, f.f0, 0, 0), yield 1, i = 11;
        break;
      }
      case 11: {
        if (f.f0 += 0.19635, f.f0 = l(f.f0), f.spawnEffectAngle(26, 1, -128, f.f0, 0, 0), --f.ci0 > 0) {
          i = 1;
          break;
        }
        i = 12;
        break;
      }
      case 12: {
        if (f.playSfx(18), f.spawnEffectAngle(26, 64, -8355585, -999, 0, 0), f.endSpell(), f.spellCardState != 0) {
          yield 60, i = 15;
          break;
        }
        i = 13;
        break;
      }
      case 13: {
        if (f.clockControl(), f.spellCardTimer < 600) {
          yield 30, i = 15;
          break;
        }
        i = 14;
        break;
      }
      case 14: {
        f.clockControl(), i = 15;
        break;
      }
      case 15: {
        f.setBossPresent(-1), f.setMisc136(18, 1), yield 2, i = 16;
        break;
      }
      case 16: {
        f.maxHp = 0, f.maxHp = 0, yield 3e3, i = 17;
        break;
      }
      case 17:
        return;
      default:
        return;
    }
}
function* c0(f) {
  let i = 0, a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        if (f.setMisc129(0), f.setDeathCallbackSub(-1), f.clearScriptFlags(3), f.f0 = f.randAngle, f.movePolar(60, 4, f.f0, 0.15), f.setMisc173(0), f.spellCardState == 0) {
          i = 4;
          break;
        }
        i = 1;
        break;
      }
      case 1: {
        f.f0 = 0, f.ci0 = 6, f.playSfx(7), i = 2;
        break;
      }
      case 2: {
        if (f.f0 += 0.19635, f.f0 = l(f.f0), f.spawnEffectAngle(26, 1, -1, f.f0, 0, 0), f.f0 += 0.19635, f.f0 = l(f.f0), f.spawnEffectAngle(26, 1, -1, f.f0, 0, 0), f.f0 += 0.19635, f.f0 = l(f.f0), f.spawnEffectAngle(26, 1, -32640, f.f0, 0, 0), f.f0 += 0.19635, f.f0 = l(f.f0), f.spawnEffectAngle(26, 1, -32640, f.f0, 0, 0), f.f0 += 0.19635, f.f0 = l(f.f0), f.spawnEffectAngle(26, 1, -8323200, f.f0, 0, 0), f.f0 += 0.19635, f.f0 = l(f.f0), f.spawnEffectAngle(26, 1, -8323200, f.f0, 0, 0), f.f0 += 0.19635, f.f0 = l(f.f0), f.spawnEffectAngle(26, 1, -8355585, f.f0, 0, 0), f.f0 += 0.19635, f.f0 = l(f.f0), f.spawnEffectAngle(26, 1, -8355585, f.f0, 0, 0), f.f0 += 0.19635, f.f0 = l(f.f0), f.spawnEffectAngle(26, 1, -128, f.f0, 0, 0), f.f0 += 0.19635, f.f0 = l(f.f0), f.spawnEffectAngle(26, 1, -128, f.f0, 0, 0), --f.ci0 > 0) {
          i = 2;
          break;
        }
        i = 3;
        break;
      }
      case 3: {
        f.playSfx(18), f.spawnEffectAngle(26, 64, -8355585, -999, 0, 0), i = 4;
        break;
      }
      case 4: {
        if (f.endSpell(), f.spellCardState != 0) {
          yield 80, i = 7;
          break;
        }
        i = 5;
        break;
      }
      case 5: {
        if (f.clockControl(), f.spellCardTimer < 420) {
          yield 30, i = 7;
          break;
        }
        i = 6;
        break;
      }
      case 6: {
        f.clockControl(), i = 7;
        break;
      }
      case 7: {
        f.setBossPresent(-1), f.maxHp = 1, yield 2, i = 8;
        break;
      }
      case 8: {
        f.maxHp = 0, yield 3e3, i = 9;
        break;
      }
      case 9:
        return;
      default:
        return;
    }
}
function* r0(f) {
  let i = 0, a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        f.setAnmScripts6Alt(7), f.clearScriptFlags(8), f.eclSetLives(0), f.setBossPresent(0), f.setMisc159(1), f.setLives(6e3), f.setLifeBarSlice(0, 0, f.maxHp, 16752800), f.complexSetup(1), f.setRelPos(192, 224), f.playSfx(5), f.spawnEffectAt(40, 1, -1), yield 4, i = 1;
        break;
      }
      case 1: {
        f.spawnEffectAt(40, 1, -12080), yield 4, i = 2;
        break;
      }
      case 2: {
        f.spawnEffectAt(40, 1, -32640), yield 4, i = 3;
        break;
      }
      case 3: {
        f.spawnEffectAt(40, 1, -49088), yield 50, i = 4;
        break;
      }
      case 4: {
        f.playSfx(15), f.setScriptFlags(8), f.setMisc173(1), f.setMisc129(3), f.setDeathCallbackSub(45), yield* b(f);
        return;
      }
      default:
        return;
    }
}
function* o0(f) {
  let i = 0, a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        f.setAnmScripts6Alt(7), f.clearScriptFlags(8), f.eclSetLives(0), f.setBossPresent(0), f.setMisc159(1), f.setLives(6e3), f.setLifeBarSlice(0, 0, f.maxHp, 16752800), f.complexSetup(1), f.setRelPos(192, 224), f.playSfx(5), f.spawnEffectAt(40, 1, -1), yield 4, i = 1;
        break;
      }
      case 1: {
        f.spawnEffectAt(40, 1, -12080), yield 4, i = 2;
        break;
      }
      case 2: {
        f.spawnEffectAt(40, 1, -32640), yield 4, i = 3;
        break;
      }
      case 3: {
        f.spawnEffectAt(40, 1, -49088), yield 50, i = 4;
        break;
      }
      case 4: {
        f.playSfx(15), f.setScriptFlags(8), f.setMisc173(1), f.setMisc129(3), f.setDeathCallbackSub(45), yield* g(f);
        return;
      }
      default:
        return;
    }
}
function* d0(f) {
  let i = 0, a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        f.setAnmScripts6Alt(7), f.clearScriptFlags(8), f.eclSetLives(0), f.setBossPresent(0), f.setMisc159(1), f.setLives(6e3), f.setLifeBarSlice(0, 0, f.maxHp, 16752800), f.complexSetup(1), f.setRelPos(192, 224), f.playSfx(5), f.spawnEffectAt(40, 1, -1), yield 4, i = 1;
        break;
      }
      case 1: {
        f.spawnEffectAt(40, 1, -12080), yield 4, i = 2;
        break;
      }
      case 2: {
        f.spawnEffectAt(40, 1, -32640), yield 4, i = 3;
        break;
      }
      case 3: {
        f.spawnEffectAt(40, 1, -49088), yield 50, i = 4;
        break;
      }
      case 4: {
        f.playSfx(15), f.setScriptFlags(8), f.setMisc173(1), f.setMisc129(3), f.setDeathCallbackSub(45), yield* y(f);
        return;
      }
      default:
        return;
    }
}
function* p0(f) {
  let i = 0, a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        f.setAnmScripts6Alt(7), f.clearScriptFlags(8), f.eclSetLives(0), f.setBossPresent(0), f.setMisc159(1), f.setLives(6e3), f.setLifeBarSlice(0, 0, f.maxHp, 16752800), f.complexSetup(1), f.setRelPos(192, 224), f.playSfx(5), f.spawnEffectAt(40, 1, -1), yield 4, i = 1;
        break;
      }
      case 1: {
        f.spawnEffectAt(40, 1, -12080), yield 4, i = 2;
        break;
      }
      case 2: {
        f.spawnEffectAt(40, 1, -32640), yield 4, i = 3;
        break;
      }
      case 3: {
        f.spawnEffectAt(40, 1, -49088), yield 50, i = 4;
        break;
      }
      case 4: {
        f.playSfx(15), f.setScriptFlags(8), f.setMisc173(1), f.setMisc129(3), f.setDeathCallbackSub(44), yield* h(f);
        return;
      }
      default:
        return;
    }
}
function* S0(f) {
  let i = 0, a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        f.setMisc129(2), f.setDeathCallbackSub(31), f.setShotRepeat(0), f.enemyFunc95(), f.setShotSound(-1, -1), f.clearScriptFlags(4), f.setShotOrigin(0, 0), f.setSpellTimer(3600, 31), f.resetSpellTimerSub(), f.setSpellTimerElapsed(0), f.ci3 = 0, f.moveRelative(90, 4, 192, 128), f.isDiff(n | s) && f.startSpell("難題「龍の頸の玉  -五色の弾丸-」", "蓬莱山輝夜", 151, 0, 3e7), f.isDiff(r | s) && f.startSpell("難題「龍の頸の玉  -五色の弾丸-」", "蓬莱山輝夜", 152, 0, 3e7), f.isDiff(c | s) && f.startSpell("神宝「ブリリアントドラゴンバレッタ」", "蓬莱山輝夜", 153, 0, 3e7), f.isDiff(e | s) && f.startSpell("神宝「ブリリアントドラゴンバレッタ」", "蓬莱山輝夜", 154, 0, 3e7), yield 90, i = 1;
        break;
      }
      case 1: {
        if (f.setScriptFlags(4), f.setMisc160(180), f.isDiff(c | e | s)) {
          yield 240, i = 7;
          break;
        }
        i = 2;
        break;
      }
      case 2: {
        f.ci0 = 0, f.f0 = f.timer + 3.141593, f.f1 = 1.5, f.f2 = 0.043633, f.f0 = l(f.f0), f.linkChildRelative(51, 0, 0, 3600, -2, 10), yield 60, i = 3;
        break;
      }
      case 3: {
        f.moveBounce(60, 4, 1), yield 60, i = 4;
        break;
      }
      case 4: {
        f.f0 = f.timer + 3.141593, f.f1 = 1.5, f.f2 = -0.043633, f.f0 = l(f.f0), f.linkChildRelative(51, 0, 0, 3600, -2, 10), yield 60, i = 5;
        break;
      }
      case 5: {
        f.moveBounce(60, 4, 1), yield 60, i = 6;
        break;
      }
      case 6: {
        i = 2;
        break;
      }
      case 7: {
        f.ci0 = 0, f.f0 = f.timer + 3.141593, f.f1 = 2, f.f2 = 0.0561, f.f0 = l(f.f0), f.linkChildRelative(51, 0, 0, 3600, -2, 10), f.f0 = f.timer + 3.141593, f.f1 = 2, f.f2 = -0.0561, f.f0 = l(f.f0), f.linkChildRelative(51, 0, 0, 3600, -2, 10), yield 60, i = 8;
        break;
      }
      case 8: {
        f.moveBounce(60, 4, 1), f.f0 = f.timer + 3.141593, f.f1 = 2, f.f2 = -0.043633, f.f0 = l(f.f0), yield 60, i = 9;
        break;
      }
      case 9: {
        f.moveBounce(60, 4, 1), yield 60, i = 10;
        break;
      }
      case 10: {
        i = 7;
        break;
      }
      default:
        return;
    }
}
function* u0(f) {
  let i = 0, a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        f.setAnm(53), f.setHitFlash(1), f.setMisc145(1), f.setBounds(24, 24), f.setMisc160(30), f.cf0 = f.posX, f.cf1 = f.posY, f.setHeadingSpeed(f.f0, f.f1), f.setHeadingVel(f.f2), f.callSubAlloc(0, 52), f.callSubAlloc(1, 53), f.isDiff(n | r | s) && (yield f.delay(90)), f.isDiff(c | e | s) && (yield f.delay(80)), f.setHeadingVel(0), yield 3e4, i = 1;
        break;
      }
      case 1:
        return;
      default:
        return;
    }
}
function* b0(f) {
  let i = 0;
  yield 5;
  let a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        f.nop(), f.isDiff(n | s) && (f.f1 = 2.3), f.isDiff(r | s) && (f.f1 = 3), f.isDiff(c | s) && (f.f1 = 3.5), f.isDiff(e | s) && (f.f1 = 4.4), f.isDiff(n | s) && (f.f2 = 50), f.isDiff(r | s) && (f.f2 = 100), f.isDiff(c | s) && (f.f2 = 120), f.isDiff(e | s) && (f.f2 = 180), f.isDiff(n | s) && (f.ci2 = 20), f.isDiff(r | s) && (f.ci2 = 20), f.isDiff(c | s) && (f.ci2 = 10), f.isDiff(e | s) && (f.ci2 = 10), i = 1;
        break;
      }
      case 1: {
        f.playSfx(16), f.f0 = Math.atan2(f.posY - f.cf1, f.posX - f.cf0), f.setShotOrigin(0, 0), f.spawnLaser({
          aimed: !1,
          // op 114 keeps the absolute angle
          type: 4,
          color: 6,
          angle: t(10016),
          speed: t(10017),
          tail: 0,
          head: 0,
          startLength: t(10018),
          width: 10,
          startTime: 0,
          duration: 800,
          despawn: 0,
          hitboxStart: 0,
          hitboxEnd: 0,
          flags: 0
        }), f.f3 = f.f0, f.f4 = Math.cos(f.f3), f.f4 *= 32, f.f5 = Math.sin(f.f3), f.f5 *= 32, f.setShotOrigin(f.f4, f.f5), f.spawnLaser({
          aimed: !1,
          // op 114 keeps the absolute angle
          type: 4,
          color: 2,
          angle: t(10016),
          speed: t(10017),
          tail: 0,
          head: 0,
          startLength: t(10018),
          width: 10,
          startTime: 0,
          duration: 800,
          despawn: 0,
          hitboxStart: 0,
          hitboxEnd: 0,
          flags: 0
        }), f.f3 += 1.570796, f.f3 = l(f.f3), f.f4 = Math.cos(f.f3), f.f4 *= 32, f.f5 = Math.sin(f.f3), f.f5 *= 32, f.setShotOrigin(f.f4, f.f5), f.spawnLaser({
          aimed: !1,
          // op 114 keeps the absolute angle
          type: 4,
          color: 4,
          angle: t(10016),
          speed: t(10017),
          tail: 0,
          head: 0,
          startLength: t(10018),
          width: 10,
          startTime: 0,
          duration: 800,
          despawn: 0,
          hitboxStart: 0,
          hitboxEnd: 0,
          flags: 0
        }), f.f3 += 1.570796, f.f3 = l(f.f3), f.f4 = Math.cos(f.f3), f.f4 *= 32, f.f5 = Math.sin(f.f3), f.f5 *= 32, f.setShotOrigin(f.f4, f.f5), f.spawnLaser({
          aimed: !1,
          // op 114 keeps the absolute angle
          type: 4,
          color: 8,
          angle: t(10016),
          speed: t(10017),
          tail: 0,
          head: 0,
          startLength: t(10018),
          width: 10,
          startTime: 0,
          duration: 800,
          despawn: 0,
          hitboxStart: 0,
          hitboxEnd: 0,
          flags: 0
        }), f.f3 += 1.570796, f.f3 = l(f.f3), f.f4 = Math.cos(f.f3), f.f4 *= 32, f.f5 = Math.sin(f.f3), f.f5 *= 32, f.setShotOrigin(f.f4, f.f5), f.spawnLaser({
          aimed: !1,
          // op 114 keeps the absolute angle
          type: 4,
          color: 13,
          angle: t(10016),
          speed: t(10017),
          tail: 0,
          head: 0,
          startLength: t(10018),
          width: 10,
          startTime: 0,
          duration: 800,
          despawn: 0,
          hitboxStart: 0,
          hitboxEnd: 0,
          flags: 0
        }), yield f.delay(f.ci2), i = 1;
        break;
      }
      default:
        return;
    }
}
function* g0(f) {
  let i = 0, a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        f.setShotRecord(0, 16, 0, 120, -1, 0.019167, 1.570796), f.isDiff(n | s) && (f.ci2 = 60), f.isDiff(r | s) && (f.ci2 = 10), f.isDiff(c | s) && (f.ci2 = 10), f.isDiff(e | s) && (f.ci2 = 10), i = 1;
        break;
      }
      case 1: {
        f.f7 = f.randF32S * 32, f.f4 = Math.cos(f.randAngle), f.f4 *= f.f7, f.f5 = Math.sin(f.randAngle), f.f5 *= f.f7, f.setShotOrigin(f.f4, f.f5), f.spawnShot({
          mode: "randomAngleSpeed",
          // aim 8 of 96..104
          type: 1,
          color: 6,
          count: 2,
          rings: 1,
          speed: 1,
          speed2: 0.5,
          angle: -3.1415927,
          angleStep: 0,
          transform: 530
        }), yield f.delay(f.ci2), f.f7 = f.randF32S * 32, f.f4 = Math.cos(f.randAngle), f.f4 *= f.f7, f.f5 = Math.sin(f.randAngle), f.f5 *= f.f7, f.setShotOrigin(f.f4, f.f5), f.spawnShot({
          mode: "randomAngleSpeed",
          // aim 8 of 96..104
          type: 1,
          color: 8,
          count: 2,
          rings: 1,
          speed: 1,
          speed2: 0.5,
          angle: -3.1415927,
          angleStep: 0,
          transform: 530
        }), yield f.delay(f.ci2), f.f7 = f.randF32S * 32, f.f4 = Math.cos(f.randAngle), f.f4 *= f.f7, f.f5 = Math.sin(f.randAngle), f.f5 *= f.f7, f.setShotOrigin(f.f4, f.f5), f.spawnShot({
          mode: "randomAngleSpeed",
          // aim 8 of 96..104
          type: 1,
          color: 13,
          count: 2,
          rings: 1,
          speed: 1,
          speed2: 0.5,
          angle: -3.1415927,
          angleStep: 0,
          transform: 530
        }), yield f.delay(f.ci2), f.f7 = f.randF32S * 32, f.f4 = Math.cos(f.randAngle), f.f4 *= f.f7, f.f5 = Math.sin(f.randAngle), f.f5 *= f.f7, f.setShotOrigin(f.f4, f.f5), f.spawnShot({
          mode: "randomAngleSpeed",
          // aim 8 of 96..104
          type: 1,
          color: 2,
          count: 2,
          rings: 1,
          speed: 1,
          speed2: 0.5,
          angle: -3.1415927,
          angleStep: 0,
          transform: 530
        }), yield f.delay(f.ci2), f.f7 = f.randF32S * 32, f.f4 = Math.cos(f.randAngle), f.f4 *= f.f7, f.f5 = Math.sin(f.randAngle), f.f5 *= f.f7, f.setShotOrigin(f.f4, f.f5), f.spawnShot({
          mode: "randomAngleSpeed",
          // aim 8 of 96..104
          type: 1,
          color: 4,
          count: 2,
          rings: 1,
          speed: 1,
          speed2: 0.5,
          angle: -3.1415927,
          angleStep: 0,
          transform: 530
        }), yield f.delay(f.ci2), i = 1;
        break;
      }
      default:
        return;
    }
}
function* y0(f) {
  let i = 0;
  yield 300;
  let a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        f.nop(), f.setShotOrigin(0, 0), i = 1;
        break;
      }
      case 1: {
        f.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 17,
          color: 5,
          count: 32,
          rings: 1,
          speed: 1.1,
          speed2: 0.8,
          angle: t(10082),
          angleStep: 0,
          transform: 514
        }), f.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 17,
          color: 6,
          count: 32,
          rings: 1,
          speed: 1.5,
          speed2: 0.8,
          angle: t(10082),
          angleStep: 0,
          transform: 514
        }), yield 50, i = 2;
        break;
      }
      case 2: {
        i = 1;
        break;
      }
      default:
        return;
    }
}
function* h0(f) {
  let i = 0, a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        f.setMisc129(2), f.setDeathCallbackSub(34), f.setShotRepeat(0), f.enemyFunc95(), f.setShotSound(-1, -1), f.clearScriptFlags(4), f.setShotOrigin(0, 0), f.setSpellTimer(4620, 34), f.resetSpellTimerSub(), f.setSpellTimerElapsed(0), f.ci3 = 0, f.moveRelative(90, 4, 192, 128), f.isDiff(n | s) && f.startSpell("難題「仏の御石の鉢  -砕けぬ意思-」", "蓬莱山輝夜", 155, 0, 3e7), f.isDiff(r | s) && f.startSpell("難題「仏の御石の鉢  -砕けぬ意思-」", "蓬莱山輝夜", 156, 0, 3e7), f.isDiff(c | s) && f.startSpell("神宝「ブディストダイアモンド」", "蓬莱山輝夜", 157, 0, 3e7), f.isDiff(e | s) && f.startSpell("神宝「ブディストダイアモンド」", "蓬莱山輝夜", 158, 0, 3e7), yield 90, i = 1;
        break;
      }
      case 1: {
        f.setScriptFlags(4), f.setMisc160(360), yield 100, i = 2;
        break;
      }
      case 2: {
        f.f0 = 0, f.f1 = 1, f.ci0 = 9, f.callSubAlloc(0, 58), f.callSubAlloc(1, 59), f.callSubAlloc(2, 60), i = 3;
        break;
      }
      case 3: {
        if (f.linkChildAttached(56, 0, 0, 3500, 1, 1e5), f.f0 += 0.392699, f.f0 = l(f.f0), --f.ci0 > 0) {
          i = 3;
          break;
        }
        i = 4;
        break;
      }
      case 4: {
        f.f0 = 0, f.f1 = 2, f.ci0 = 11, i = 5;
        break;
      }
      case 5: {
        if (f.linkChildAttached(56, 0, 0, 3500, 1, 1e5), f.f0 += 0.314159, f.f0 = l(f.f0), --f.ci0 > 0) {
          i = 5;
          break;
        }
        i = 6;
        break;
      }
      case 6: {
        if (f.isDiff(n | s)) {
          yield 200, i = 9;
          break;
        }
        i = 7;
        break;
      }
      case 7: {
        f.f0 = 0, f.f1 = 3, f.ci0 = 13, i = 8;
        break;
      }
      case 8: {
        if (f.linkChildAttached(56, 0, 0, 3500, 1, 1e5), f.f0 += 0.261799, f.f0 = l(f.f0), --f.ci0 > 0) {
          i = 8;
          break;
        }
        i = 9;
        break;
      }
      case 9: {
        i = 9;
        break;
      }
      default:
        return;
    }
}
function* k0(f) {
  let i = 0, a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        f.setAnm(53), f.setHitFlash(1), f.setMisc145(1), f.setBounds(24, 24), f.setMisc160(30), f.movePolar(60, 4, f.f0, f.f1), yield 60, i = 1;
        break;
      }
      case 1: {
        f.setHeadingSpeed(0, 0), yield 10, i = 2;
        break;
      }
      case 2: {
        f.callSubAlloc(0, 57), yield 3e4, i = 3;
        break;
      }
      case 3:
        return;
      default:
        return;
    }
}
function* m0(f) {
  let i = 0, a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        f.playSfx(16), f.spawnLaser({
          aimed: !1,
          // op 114 keeps the absolute angle
          type: 1,
          color: 6,
          angle: t(10016),
          speed: 0,
          tail: 0,
          head: 400,
          startLength: 400,
          width: 10,
          startTime: 60,
          duration: 120,
          despawn: 20,
          hitboxStart: 60,
          hitboxEnd: 20,
          flags: 0
        }), yield 200, i = 1;
        break;
      }
      case 1: {
        f.nop(), i = 2;
        break;
      }
      case 2: {
        f.playSfx(16), f.f2 = f.randF32S * 0.392699, f.f2 += f.f0, f.f2 = l(f.f2), f.spawnLaser({
          aimed: !1,
          // op 114 keeps the absolute angle
          type: 1,
          color: 6,
          angle: t(10018),
          speed: 0,
          tail: 0,
          head: 400,
          startLength: 400,
          width: 10,
          startTime: 60,
          duration: 120,
          despawn: 20,
          hitboxStart: 60,
          hitboxEnd: 20,
          flags: 0
        }), f.isDiff(n | r | c | s) && (yield f.delay(230)), f.isDiff(e | s) && (yield f.delay(180)), i = 2;
        break;
      }
      default:
        return;
    }
}
function* D0(f) {
  let i = 0;
  yield 200;
  let a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        f.nop(), f.isDiff(n | s) && (f.i7 = 10), f.isDiff(r | s) && (f.i7 = 10), f.isDiff(c | s) && (f.i7 = 2), f.isDiff(e | s) && (f.i7 = 2), i = 1;
        break;
      }
      case 1: {
        f.isDiff(n | s) && (f.f6 = f.randF32S * 1667e-6), f.isDiff(r | s) && (f.f6 = f.randF32S * 1667e-6), f.isDiff(c | s) && (f.f6 = f.randF32S * 3333e-6), f.isDiff(e | s) && (f.f6 = f.randF32S * 3333e-6), f.isDiff(n | s) && (f.f0 = f.randF32S * 1963e-6), f.isDiff(r | s) && (f.f0 = f.randF32S * 1963e-6), f.isDiff(c | s) && (f.f0 = f.randF32S * 5236e-6), f.isDiff(e | s) && (f.f0 = f.randF32S * 5236e-6), f.setShotRecord(0, 32, 0, 60, -1, f.f6, f.f0), f.isDiff(n | s) && (f.f6 = f.randF32S * 1667e-6), f.isDiff(r | s) && (f.f6 = f.randF32S * 1667e-6), f.isDiff(c | s) && (f.f6 = f.randF32S * 5e-3), f.isDiff(e | s) && (f.f6 = f.randF32S * 5e-3), f.isDiff(n | s) && (f.f0 = f.randF32S * 1963e-6), f.isDiff(r | s) && (f.f0 = f.randF32S * 1963e-6), f.isDiff(c | s) && (f.f0 = f.randF32S * 6283e-6), f.isDiff(e | s) && (f.f0 = f.randF32S * 6283e-6), f.setShotRecord(1, 32, 0, 60, -1, f.f6, f.f0), f.f0 = f.randF32S * 0.04488, f.f0 += 1.570796, f.cf0 = f.randF32 * 384, f.cf1 = f.randF32 * 128, f.cf0 = f.cf0 - f.posX, f.cf1 = f.cf1 - f.posY, f.setShotOrigin(f.cf0, f.cf1), f.f1 = f.randF32 * 1, f.f1 += 0.6, f.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 12,
          color: t(10007),
          count: 2,
          rings: 1,
          speed: t(10017),
          speed2: 0.7,
          angle: t(10016),
          angleStep: 0,
          transform: 546
        }), f.isDiff(n | s) && (yield f.delay(4)), yield 2, i = 2;
        break;
      }
      case 2: {
        f.nop(), f.isDiff(n | s) && (f.f6 = f.randF32S * 1667e-6), f.isDiff(r | s) && (f.f6 = f.randF32S * 1667e-6), f.isDiff(c | s) && (f.f6 = f.randF32S * 3333e-6), f.isDiff(e | s) && (f.f6 = f.randF32S * 3333e-6), f.isDiff(n | s) && (f.f0 = f.randF32S * 1963e-6), f.isDiff(r | s) && (f.f0 = f.randF32S * 1963e-6), f.isDiff(c | s) && (f.f0 = f.randF32S * 5236e-6), f.isDiff(e | s) && (f.f0 = f.randF32S * 5236e-6), f.setShotRecord(0, 32, 0, 60, -1, f.f6, f.f0), f.isDiff(n | s) && (f.f6 = f.randF32S * 1667e-6), f.isDiff(r | s) && (f.f6 = f.randF32S * 1667e-6), f.isDiff(c | s) && (f.f6 = f.randF32S * 5e-3), f.isDiff(e | s) && (f.f6 = f.randF32S * 5e-3), f.isDiff(n | s) && (f.f0 = f.randF32S * 1963e-6), f.isDiff(r | s) && (f.f0 = f.randF32S * 1963e-6), f.isDiff(c | s) && (f.f0 = f.randF32S * 6283e-6), f.isDiff(e | s) && (f.f0 = f.randF32S * 6283e-6), f.setShotRecord(1, 32, 0, 60, -1, f.f6, f.f0), f.cf0 = f.randF32 * 384, f.cf1 = f.randF32 * 128, f.f0 = f.randF32S * 0.04488, f.f0 += 1.570796, f.cf0 = f.cf0 - f.posX, f.cf1 = f.cf1 - f.posY, f.setShotOrigin(f.cf0, f.cf1), f.f1 = f.randF32 * 1, f.f1 += 0.6, f.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 13,
          color: t(10007),
          count: 2,
          rings: 1,
          speed: t(10017),
          speed2: 0.7,
          angle: t(10016),
          angleStep: 0,
          transform: 546
        }), f.isDiff(n | s) && (yield f.delay(3)), yield 2, i = 3;
        break;
      }
      case 3: {
        i = 1;
        break;
      }
      default:
        return;
    }
}
function* w0(f) {
  let i = 0;
  yield 200;
  let a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        f.nop(), i = 1;
        break;
      }
      case 1: {
        if (f.hpRatio >= 128) {
          yield 30, i = 3;
          break;
        }
        i = 2;
        break;
      }
      case 2: {
        f.setShotOrigin(0, 0), f.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 6,
          color: 8,
          count: 64,
          rings: 1,
          speed: 4,
          speed2: 0.8,
          angle: t(10082),
          angleStep: 0,
          transform: 514
        }), yield 30, i = 3;
        break;
      }
      case 3: {
        i = 1;
        break;
      }
      default:
        return;
    }
}
function* A0(f) {
  let i = 0;
  yield 200;
  let a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        f.nop(), i = 1;
        break;
      }
      case 1: {
        f.f0 = f.timer, f.ci0 = 8, f.isDiff(n | s) && (f.f1 = 2), f.isDiff(r | s) && (f.f1 = 2), f.isDiff(c | s) && (f.f1 = 2), f.isDiff(e | s) && (f.f1 = 2.5), i = 2;
        break;
      }
      case 2: {
        f.setShotOrigin(0, 0), f.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 6,
          color: 6,
          count: 1,
          rings: 1,
          speed: t(10017),
          speed2: 0.8,
          angle: t(10016),
          angleStep: 0,
          transform: 514
        }), yield 8, i = 3;
        break;
      }
      case 3: {
        if (--f.ci0 > 0) {
          i = 2;
          break;
        }
        i = 4;
        break;
      }
      case 4: {
        i = 1;
        break;
      }
      default:
        return;
    }
}
function* M0(f) {
  let i = 0, a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        f.setMisc129(2), f.setDeathCallbackSub(38), f.setShotRepeat(0), f.enemyFunc95(), f.setShotSound(-1, -1), f.clearScriptFlags(4), f.setShotOrigin(0, 0), f.setSpellTimer(3720, 38), f.resetSpellTimerSub(), f.setSpellTimerElapsed(0), f.ci3 = 0, f.moveRelative(90, 4, 192, 128), f.isDiff(n | s) && f.startSpell("難題「火鼠の皮衣  -焦れぬ心-」", "蓬莱山輝夜", 159, 0, 3e7), f.isDiff(r | s) && f.startSpell("難題「火鼠の皮衣  -焦れぬ心-」", "蓬莱山輝夜", 160, 0, 3e7), f.isDiff(c | s) && f.startSpell("神宝「サラマンダーシールド」", "蓬莱山輝夜", 161, 0, 3e7), f.isDiff(e | s) && f.startSpell("神宝「サラマンダーシールド」", "蓬莱山輝夜", 162, 0, 3e7), yield 90, i = 1;
        break;
      }
      case 1: {
        f.setScriptFlags(4), f.setMisc160(240), f.ci3 = 0, f.callSubAlloc(0, 62), f.callSubAlloc(1, 63), f.f0 = -0.392699, f.f1 = 3, f.linkChildAttached(64, 0, 0, 500, 1, 1e5), f.f0 = 0.392699, f.f1 = 3, f.linkChildAttached(64, 0, 0, 500, 1, 1e5), f.f0 = 2.748893, f.f1 = 3, f.linkChildAttached(64, 0, 0, 500, 1, 1e5), f.f0 = -2.748893, f.f1 = 3, f.linkChildAttached(64, 0, 0, 500, 1, 1e5), yield 800, i = 2;
        break;
      }
      case 2: {
        i = 2;
        break;
      }
      default:
        return;
    }
}
function* R0(f) {
  let i = 0, a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        f.f0 = 0, f.setShotRecord(0, 8192, 0, 320, -1, -1, -1), f.setShotRecord(1, 131072, 0, 100, -1, -1, -1), f.isDiff(n | s) && (f.f3 = 0.330694), f.isDiff(r | s) && (f.f3 = 0.1904), f.isDiff(c | s) && (f.f3 = 0.1904), f.isDiff(e | s) && (f.f3 = 0.1904), f.isDiff(n | s) && (f.f4 = 0.314159), f.isDiff(r | s) && (f.f4 = 0.314159), f.isDiff(c | s) && (f.f4 = 0.314159), f.isDiff(e | s) && (f.f4 = 0.314159), f.isDiff(n | s) && (f.ci2 = 8), f.isDiff(r | s) && (f.ci2 = 4), f.isDiff(c | s) && (f.ci2 = 4), f.isDiff(e | s) && (f.ci2 = 4), f.isDiff(n | s) && (f.f5 = 0.5), f.isDiff(r | s) && (f.f5 = 0.5), f.isDiff(c | s) && (f.f5 = 0.6), f.isDiff(e | s) && (f.f5 = 0.6), i = 1;
        break;
      }
      case 1: {
        f.cf0 = Math.cos(f.f0), f.cf0 *= 128, f.cf1 = Math.sin(f.f0), f.cf1 *= 128, f.setShotOrigin(f.cf0, f.cf1), f.setShotRecord(2, 16, 0, 120, -1, 8333e-6, -999.900024), f.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 19,
          color: 1,
          count: 3,
          rings: 1,
          speed: t(10021),
          speed2: 0.5,
          angle: t(10016),
          angleStep: t(10020),
          transform: 131602
        }), f.setShotRecord(2, 16, 0, 120, -1, -0.025, -999.900024), f.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 19,
          color: 1,
          count: 2,
          rings: 1,
          speed: t(10021),
          speed2: 0.5,
          angle: t(10016),
          angleStep: t(10020),
          transform: 131602
        }), f.f0 += f.f3, f.f0 = l(f.f0), yield f.delay(f.ci2), i = 1;
        break;
      }
      default:
        return;
    }
}
function* F0(f) {
  let i = 0, a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        f.f0 = -3.141593, f.setShotRecord(0, 8192, 0, 320, -1, -1, -1), f.setShotRecord(1, 131072, 0, 100, -1, -1, -1), f.isDiff(n | s) && (f.f3 = 0.330694), f.isDiff(r | s) && (f.f3 = 0.1904), f.isDiff(c | s) && (f.f3 = 0.1904), f.isDiff(e | s) && (f.f3 = 0.1904), f.isDiff(n | s) && (f.f4 = 0.314159), f.isDiff(r | s) && (f.f4 = 0.314159), f.isDiff(c | s) && (f.f4 = 0.314159), f.isDiff(e | s) && (f.f4 = 0.314159), f.isDiff(n | s) && (f.ci2 = 8), f.isDiff(r | s) && (f.ci2 = 4), f.isDiff(c | s) && (f.ci2 = 4), f.isDiff(e | s) && (f.ci2 = 4), f.isDiff(n | s) && (f.f5 = 0.5), f.isDiff(r | s) && (f.f5 = 0.5), f.isDiff(c | s) && (f.f5 = 0.6), f.isDiff(e | s) && (f.f5 = 0.6), i = 1;
        break;
      }
      case 1: {
        f.cf0 = Math.cos(f.f0), f.cf0 *= 128, f.cf1 = Math.sin(f.f0), f.cf1 *= 128, f.setShotOrigin(f.cf0, f.cf1), f.setShotRecord(2, 16, 0, 120, -1, 8333e-6, -999.900024), f.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 19,
          color: 1,
          count: 3,
          rings: 1,
          speed: t(10021),
          speed2: 0.5,
          angle: t(10016),
          angleStep: t(10020),
          transform: 131602
        }), f.setShotRecord(2, 16, 0, 120, -1, -0.025, -999.900024), f.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 19,
          color: 1,
          count: 2,
          rings: 1,
          speed: t(10021),
          speed2: 0.5,
          angle: t(10016),
          angleStep: t(10020),
          transform: 131602
        }), f.f0 -= f.f3, f.f0 = l(f.f0), yield f.delay(f.ci2), i = 1;
        break;
      }
      default:
        return;
    }
}
function* v0(f) {
  let i = 0, a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        f.setAnm(53), f.setHitFlash(1), f.setMisc145(1), f.setBounds(24, 24), f.setMisc160(30), f.movePolar(60, 4, f.f0, f.f1), yield 60, i = 1;
        break;
      }
      case 1: {
        f.setHeadingSpeed(0, 0), yield 10, i = 2;
        break;
      }
      case 2: {
        f.callSubAlloc(0, 65), f.isDiff(e | s) && f.callSubAlloc(1, 66), yield 3e4, i = 3;
        break;
      }
      case 3:
        return;
      default:
        return;
    }
}
function* E0(f) {
  let i = 0;
  yield 300;
  let a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        f.nop(), f.isDiff(n | s) && (f.f0 = 1.7), f.isDiff(r | s) && (f.f0 = 2.7), f.isDiff(c | s) && (f.f0 = 3.7), f.isDiff(e | s) && (f.f0 = 3.7), i = 1;
        break;
      }
      case 1: {
        f.playSfx(17), f.isDiff(n | r | c | s) && f.spawnLaser({
          aimed: !1,
          // op 114 keeps the absolute angle
          type: 3,
          color: 1,
          angle: t(10048),
          speed: t(10016),
          tail: 0,
          head: 0,
          startLength: 80,
          width: 10,
          startTime: 0,
          duration: 400,
          despawn: 0,
          hitboxStart: 0,
          hitboxEnd: 0,
          flags: 0
        }), f.isDiff(e | s) && f.spawnLaser({
          aimed: !1,
          // op 114 keeps the absolute angle
          type: 3,
          color: 1,
          angle: t(10048),
          speed: t(10016),
          tail: 0,
          head: 0,
          startLength: 80,
          width: 10,
          startTime: 0,
          duration: 400,
          despawn: 0,
          hitboxStart: 0,
          hitboxEnd: 0,
          flags: 0
        }), f.isDiff(n | s) && (yield f.delay(120)), f.isDiff(r | s) && (yield f.delay(60)), f.isDiff(c | s) && (yield f.delay(30)), f.isDiff(e | s) && (yield f.delay(30)), i = 1;
        break;
      }
      default:
        return;
    }
}
function* x0(f) {
  let i = 0;
  yield 380;
  let a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        f.nop(), i = 1;
        break;
      }
      case 1: {
        f.playSfx(17), f.spawnLaser({
          aimed: !1,
          // op 114 keeps the absolute angle
          type: 2,
          color: 2,
          angle: t(10048),
          speed: 0,
          tail: 0,
          head: 540,
          startLength: 540,
          width: 10,
          startTime: 40,
          duration: 20,
          despawn: 20,
          hitboxStart: 40,
          hitboxEnd: 20,
          flags: 0
        }), yield f.delay(120), i = 1;
        break;
      }
      default:
        return;
    }
}
function* _0(f) {
  let i = 0, a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        f.setSpellTimer(99999, 11), f.setMisc160(120), f.endSpell(), f.setScriptFlags(3), f.setBossPresent(0), f.setMisc129(3), f.setDeathCallbackSub(70), f.setShotRepeat(0), f.enemyFunc95(), f.setShotSound(-1, -1), f.clearScriptFlags(4), f.setShotOrigin(0, 0), f.setSpellTimer(4200, 70), f.resetSpellTimerSub(), f.setSpellTimerElapsed(0), f.ci3 = 0, f.moveRelative(90, 4, 192, 128), f.isDiff(n | s) && f.startSpell("難題「燕の子安貝  -永命線-」", "蓬莱山輝夜", 163, 0, 3e7), f.isDiff(r | s) && f.startSpell("難題「燕の子安貝  -永命線-」", "蓬莱山輝夜", 164, 0, 3e7), f.isDiff(c | s) && f.startSpell("神宝「ライフスプリングインフィニティ」", "蓬莱山輝夜", 165, 0, 3e7), f.isDiff(e | s) && f.startSpell("神宝「ライフスプリングインフィニティ」", "蓬莱山輝夜", 166, 0, 3e7), yield 90, i = 1;
        break;
      }
      case 1: {
        f.setScriptFlags(4), f.setMisc160(240), f.autoAnm(), yield* o(f), i = 2;
        break;
      }
      case 2: {
        f.nop(), i = 3;
        break;
      }
      case 3: {
        f.linkChildRelative(68, 0, 0, 1500, -2, 1e3), f.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 1,
          color: 2,
          count: 80,
          rings: 2,
          speed: 3,
          speed2: 1.5,
          angle: -1.5707964,
          angleStep: 0.05609987,
          transform: 514
        }), f.moveBounce(60, 4, 1), f.isDiff(n | r | s) && (yield f.delay(140)), f.isDiff(c | e | s) && (yield f.delay(140)), i = 3;
        break;
      }
      default:
        return;
    }
}
function* C0(f) {
  let i = 0, a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        if (f.setAnm(53), f.setHitFlash(1), f.setMisc145(1), f.setBounds(24, 24), f.setMisc160(30), f.setShotNoFireRadius(0), f.f0 = f.timer, f.f0 >= 1.047198) {
          i = 2;
          break;
        }
        i = 1;
        break;
      }
      case 1: {
        f.f0 = 1.570796, i = 2;
        break;
      }
      case 2: {
        if (f.f0 <= 2.094395) {
          i = 4;
          break;
        }
        i = 3;
        break;
      }
      case 3: {
        f.f0 = 1.570796, i = 4;
        break;
      }
      case 4: {
        f.isDiff(n | r | s) && f.movePolar(60, 4, f.f0, 2), f.isDiff(c | e | s) && f.movePolar(90, 4, f.f0, 2.9), yield 60, i = 5;
        break;
      }
      case 5: {
        f.setHeadingSpeed(0, 0), yield* p(f), i = 6;
        break;
      }
      case 6: {
        f.nop(), f.setShotOrigin(0, 0), f.f0 = f.randAngle, f.setShotRecord(0, 64, 0, 60, 1, 1.570796, 1), f.isDiff(n | s) && f.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 13,
          color: 2,
          count: 8,
          rings: 1,
          speed: 3,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.049087387,
          transform: 578
        }), f.isDiff(r | s) && f.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 13,
          color: 2,
          count: 32,
          rings: 2,
          speed: 3,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.049087387,
          transform: 578
        }), f.isDiff(c | s) && f.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 13,
          color: 2,
          count: 32,
          rings: 1,
          speed: 1.5,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.049087387,
          transform: 578
        }), f.isDiff(e | s) && f.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 13,
          color: 2,
          count: 32,
          rings: 2,
          speed: 1.5,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.049087387,
          transform: 578
        }), f.setShotRecord(0, 64, 0, 60, 1, -1.570796, 1), f.f0 += 0.098175, f.f0 = l(f.f0), f.isDiff(n | s) && f.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 12,
          color: 2,
          count: 8,
          rings: 1,
          speed: 3,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.049087387,
          transform: 578
        }), f.isDiff(r | s) && f.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 12,
          color: 2,
          count: 32,
          rings: 2,
          speed: 3,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.049087387,
          transform: 578
        }), f.isDiff(c | s) && f.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 12,
          color: 2,
          count: 32,
          rings: 1,
          speed: 1.5,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.049087387,
          transform: 578
        }), f.isDiff(e | s) && f.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 12,
          color: 2,
          count: 32,
          rings: 2,
          speed: 1.5,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.049087387,
          transform: 578
        });
        return;
      }
      default:
        return;
    }
}
function* p(f) {
  let i = 0, a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        f.f0 = f.randAngle, f.ci0 = 26, i = 1;
        break;
      }
      case 1: {
        if (f.f1 = f.f0 + 2.748893, f.f1 = l(f.f1), f.cf0 = Math.cos(f.f1), f.cf0 *= 64, f.cf1 = Math.sin(f.f1), f.cf1 *= 64, f.setShotOrigin(f.cf0, f.cf1), f.playSfx(17), f.spawnLaser({
          aimed: !1,
          // op 114 keeps the absolute angle
          type: 1,
          color: 4,
          angle: t(10016),
          speed: 0,
          tail: 0,
          head: 400,
          startLength: 400,
          width: 8,
          startTime: 90,
          duration: 40,
          despawn: 20,
          hitboxStart: 90,
          hitboxEnd: 20,
          flags: 4
        }), f.f0 += 0.241661, f.f0 = l(f.f0), --f.ci0 > 0) {
          i = 1;
          break;
        }
        i = 2;
        break;
      }
      case 2: {
        f.f0 = f.randAngle, f.ci0 = 26, i = 3;
        break;
      }
      case 3: {
        if (f.f1 = f.f0 - 2.748893, f.f1 = l(f.f1), f.cf0 = Math.cos(f.f1), f.cf0 *= 64, f.cf1 = Math.sin(f.f1), f.cf1 *= 64, f.setShotOrigin(f.cf0, f.cf1), f.playSfx(17), f.spawnLaser({
          aimed: !1,
          // op 114 keeps the absolute angle
          type: 1,
          color: 8,
          angle: t(10016),
          speed: 0,
          tail: 0,
          head: 400,
          startLength: 400,
          width: 8,
          startTime: 90,
          duration: 40,
          despawn: 20,
          hitboxStart: 90,
          hitboxEnd: 20,
          flags: 4
        }), f.f0 -= 0.241661, f.f0 = l(f.f0), --f.ci0 > 0) {
          i = 3;
          break;
        }
        i = 4;
        break;
      }
      case 4:
        return;
      default:
        return;
    }
}
function* T0(f) {
  let i = 0, a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        f.setSpellTimer(99999, 11), f.setMisc160(120), f.endSpell(), f.spawnItemRandom(10), f.spawnItemBatch(5), f.setScriptFlags(3), f.setBossPresent(0), f.setMisc147(5), f.setMotionClamp(32, 48, 352, 128), f.setAnmScripts6Alt(7), f.setLives(2500), f.eclSetLives(0), f.setLifeBarSlice(0, 0, 2500, 16744576), yield 80, i = 1;
        break;
      }
      case 1: {
        f.nop(), yield* S(f);
        return;
      }
      default:
        return;
    }
}
function* S(f) {
  let i = 0, a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        f.setMisc129(3), f.setDeathCallbackSub(11), f.setShotRepeat(0), f.enemyFunc95(), f.setShotSound(-1, -1), f.clearScriptFlags(4), f.setShotOrigin(0, 0), f.setSpellTimer(5400, 31), f.resetSpellTimerSub(), f.setSpellTimerElapsed(0), f.ci3 = 0, f.moveRelative(90, 4, 192, 128), f.isDiff(n | s) && f.startSpell("難題「蓬莱の弾の枝  -虹色の弾幕-」", "蓬莱山輝夜", 167, 0, 3e7), f.isDiff(r | s) && f.startSpell("難題「蓬莱の弾の枝  -虹色の弾幕-」", "蓬莱山輝夜", 168, 0, 3e7), f.isDiff(c | s) && f.startSpell("神宝「蓬莱の玉の枝  -夢色の郷-」", "蓬莱山輝夜", 169, 0, 3e7), f.isDiff(e | s) && f.startSpell("神宝「蓬莱の玉の枝  -夢色の郷-」", "蓬莱山輝夜", 170, 0, 3e7), yield 90, i = 1;
        break;
      }
      case 1: {
        f.setScriptFlags(4), f.setMisc160(2400), f.setMisc183(1), f.autoAnm(), yield* o(f), i = 2;
        break;
      }
      case 2: {
        f.ci0 = 12, f.moveRelative(240, 0, f.posX, 64), f.i7 = 5, f.f4 = -2.199115, f.f0 = Math.cos(f.f4), f.f0 *= 96, f.f1 = Math.sin(f.f4), f.f1 *= 96, f.f0 += 192.059998, f.f1 += 280, f.f2 = 0, f.f3 = 400, f.i0 = 2, f.linkChildRelative(72, 0, 0, 4e3, -2, 100), f.f4 += 0.20944, f.f4 = l(f.f4), f.f2 -= 0.897598, f.f2 = l(f.f2), f.f0 = Math.cos(f.f4), f.f0 *= 96, f.f1 = Math.sin(f.f4), f.f1 *= 96, f.f0 += 192, f.f1 += 280, f.f3 = 400, f.i0 = 4, f.linkChildRelative(72, 0, 0, 2100, -2, 100), f.f4 += 0.20944, f.f4 = l(f.f4), f.f2 -= 0.897598, f.f2 = l(f.f2), f.f0 = Math.cos(f.f4), f.f0 *= 96, f.f1 = Math.sin(f.f4), f.f1 *= 96, f.f0 += 192, f.f1 += 280, f.f3 = 400, f.i0 = 6, f.linkChildRelative(72, 0, 0, 1e3, -2, 100), f.f4 += 0.20944, f.f4 = l(f.f4), f.f2 -= 0.897598, f.f2 = l(f.f2), f.f0 = Math.cos(f.f4), f.f0 *= 96, f.f1 = Math.sin(f.f4), f.f1 *= 96, f.f0 += 192, f.f1 += 280, f.f3 = 400, f.i0 = 8, f.linkChildRelative(72, 0, 0, 1e3, -2, 100), f.f4 += 0.20944, f.f4 = l(f.f4), f.f2 -= 0.897598, f.f2 = l(f.f2), f.f0 = Math.cos(f.f4), f.f0 *= 96, f.f1 = Math.sin(f.f4), f.f1 *= 96, f.f0 += 192, f.f1 += 280, f.f3 = 400, f.i0 = 10, f.linkChildRelative(72, 0, 0, 1e3, -2, 100), f.f4 += 0.20944, f.f4 = l(f.f4), f.f2 -= 0.897598, f.f2 = l(f.f2), f.f0 = Math.cos(f.f4), f.f0 *= 96, f.f1 = Math.sin(f.f4), f.f1 *= 96, f.f0 += 192, f.f1 += 280, f.f3 = 400, f.i0 = 13, f.linkChildRelative(72, 0, 0, 2100, -2, 100), f.f4 += 0.20944, f.f4 = l(f.f4), f.f2 -= 0.897598, f.f2 = l(f.f2), f.f0 = Math.cos(f.f4), f.f0 *= 96, f.f1 = Math.sin(f.f4), f.f1 *= 96, f.f0 += 192, f.f1 += 280, f.f2 = 0, f.f3 = 400, f.i0 = 14, f.linkChildRelative(72, 0, 0, 4e3, -2, 100), f.isDiff(r | c | e | s) && f.callSubAlloc(0, 73), f.isDiff(n | s) && f.callSubAlloc(0, 74), yield 160, i = 3;
        break;
      }
      case 3: {
        i = 3;
        break;
      }
      default:
        return;
    }
}
function* L0(f) {
  let i = 0, a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        f.setAnm(54), f.setBounds(24, 24), f.clearScriptFlags(16), f.setHitFlash(1), f.clearScriptFlags(3), f.setShotNoFireRadius(0), f.cxf2 = Math.cos(f.f2), f.cxf2 *= f.f3, f.cxf3 = Math.sin(f.f2), f.cxf3 *= f.f3, f.cf0 = f.posX, f.cf1 = f.posY, f.f2 = f.randSignF(400), f.interpSlot(10042, 120, 7, 0, f.cf0, f.f0, f.cxf2, f.f2), f.f2 = f.randSignF(400), f.interpSlot(10043, 120, 7, 0, f.cf1, f.f1, f.cxf3, f.f2), f.ef6 = f.f6, f.ef7 = f.f7, yield 120, i = 1;
        break;
      }
      case 1: {
        f.setHeadingSpeed(0, 0), f.setHitFlash(0), yield f.delay(f.ci1), f.setScriptFlags(3), f.setShotRecord(0, 2048, 0, 0, -1, -999.900024, 0), f.setShotRecord(1, 128, 0, 1, 1, 0, -999.900024), f.setShotRecord(2, 16384, 0, 2, f.i0, -1, -1), f.isDiff(n | s) && (f.ci3 = 8), f.isDiff(r | s) && (f.ci3 = 32), f.isDiff(c | s) && (f.ci3 = 48), f.isDiff(e | s) && (f.ci3 = 48), f.f0 = 1.2, f.ci0 = 1, i = 2;
        break;
      }
      case 2: {
        if (f.spawnShot({
          mode: "aimedRing",
          // aim 2 of 96..104
          type: 2,
          color: t(1e4),
          count: t(10039),
          rings: 1,
          speed: t(10016),
          speed2: 0.5,
          angle: 0,
          angleStep: 0.049087387,
          transform: 2690
        }), yield f.delay(360), f.ci3 += 2, --f.ci0 > 0) {
          i = 2;
          break;
        }
        i = 3;
        break;
      }
      case 3: {
        f.callSubAlloc(0, 75), f.callSubAlloc(1, 76), yield 3e4, i = 4;
        break;
      }
      case 4: {
        i = 4;
        break;
      }
      default:
        return;
    }
}
function* B0(f) {
  let i = 0;
  yield 600;
  let a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        f.nop(), f.f0 = 0, f.isDiff(n | s) && (f.ci0 = 10), f.isDiff(r | s) && (f.ci0 = 10), f.isDiff(c | s) && (f.ci0 = 1), f.isDiff(e | s) && (f.ci0 = 1), f.isDiff(n | s) && (f.f7 = 1), f.isDiff(r | s) && (f.f7 = 1), f.isDiff(c | s) && (f.f7 = 1.5), f.isDiff(e | s) && (f.f7 = 1.5), f.isDiff(n | s) && (f.ci2 = 20), f.isDiff(r | s) && (f.ci2 = 20), f.isDiff(c | s) && (f.ci2 = 17), f.isDiff(e | s) && (f.ci2 = 16), i = 1;
        break;
      }
      case 1: {
        if (f.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 3,
          color: 2,
          count: 16,
          rings: 1,
          speed: t(10023),
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.049087387,
          transform: 514
        }), yield f.delay(f.ci2), f.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 3,
          color: 4,
          count: 16,
          rings: 1,
          speed: t(10023),
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.049087387,
          transform: 514
        }), yield f.delay(f.ci2), f.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 3,
          color: 6,
          count: 16,
          rings: 1,
          speed: t(10023),
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.049087387,
          transform: 514
        }), yield f.delay(f.ci2), f.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 3,
          color: 8,
          count: 16,
          rings: 1,
          speed: t(10023),
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.049087387,
          transform: 514
        }), yield f.delay(f.ci2), f.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 3,
          color: 10,
          count: 16,
          rings: 1,
          speed: t(10023),
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.049087387,
          transform: 514
        }), yield f.delay(f.ci2), f.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 3,
          color: 13,
          count: 16,
          rings: 1,
          speed: t(10023),
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.049087387,
          transform: 514
        }), yield f.delay(f.ci2), f.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 3,
          color: 14,
          count: 16,
          rings: 1,
          speed: t(10023),
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.049087387,
          transform: 514
        }), yield f.delay(f.ci2), --f.ci0 > 0) {
          i = 1;
          break;
        }
        i = 2;
        break;
      }
      case 2: {
        f.f0 = 0, f.f1 = 0, f.isDiff(n | s) && (f.ci2 = 10), f.isDiff(r | s) && (f.ci2 = 10), f.isDiff(c | s) && (f.ci2 = 8), f.isDiff(e | s) && (f.ci2 = 8), i = 3;
        break;
      }
      case 3: {
        f.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 3,
          color: 2,
          count: 16,
          rings: 1,
          speed: t(10023),
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.049087387,
          transform: 514
        }), f.isDiff(n | s) && (f.f0 += 0.024544), f.isDiff(n | s) && (f.f1 -= 0.024544), f.isDiff(r | c | e | s) && (f.f0 += 0.012272), f.isDiff(r | c | e | s) && (f.f1 -= 0.012272), f.f0 = l(f.f0), f.f1 = l(f.f1), yield f.delay(f.ci2), f.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 3,
          color: 4,
          count: 16,
          rings: 1,
          speed: t(10023),
          speed2: 0.5,
          angle: t(10017),
          angleStep: 0.049087387,
          transform: 514
        }), f.isDiff(n | s) && (f.f0 += 0.024544), f.isDiff(n | s) && (f.f1 -= 0.024544), f.isDiff(r | c | e | s) && (f.f0 += 0.012272), f.isDiff(r | c | e | s) && (f.f1 -= 0.012272), f.f0 = l(f.f0), f.f1 = l(f.f1), yield f.delay(f.ci2), f.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 3,
          color: 6,
          count: 16,
          rings: 1,
          speed: t(10023),
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.049087387,
          transform: 514
        }), f.isDiff(n | s) && (f.f0 += 0.024544), f.isDiff(n | s) && (f.f1 -= 0.024544), f.isDiff(r | c | e | s) && (f.f0 += 0.012272), f.isDiff(r | c | e | s) && (f.f1 -= 0.012272), f.f0 = l(f.f0), f.f1 = l(f.f1), yield f.delay(f.ci2), f.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 3,
          color: 8,
          count: 16,
          rings: 1,
          speed: t(10023),
          speed2: 0.5,
          angle: t(10017),
          angleStep: 0.049087387,
          transform: 514
        }), f.isDiff(n | s) && (f.f0 += 0.024544), f.isDiff(n | s) && (f.f1 -= 0.024544), f.isDiff(r | c | e | s) && (f.f0 += 0.012272), f.isDiff(r | c | e | s) && (f.f1 -= 0.012272), f.f0 = l(f.f0), f.f1 = l(f.f1), yield f.delay(f.ci2), f.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 3,
          color: 10,
          count: 16,
          rings: 1,
          speed: t(10023),
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.049087387,
          transform: 514
        }), f.isDiff(n | s) && (f.f0 += 0.024544), f.isDiff(n | s) && (f.f1 -= 0.024544), f.isDiff(r | c | e | s) && (f.f0 += 0.012272), f.isDiff(r | c | e | s) && (f.f1 -= 0.012272), f.f0 = l(f.f0), f.f1 = l(f.f1), yield f.delay(f.ci2), f.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 3,
          color: 13,
          count: 16,
          rings: 1,
          speed: t(10023),
          speed2: 0.5,
          angle: t(10017),
          angleStep: 0.049087387,
          transform: 514
        }), f.isDiff(n | s) && (f.f0 += 0.024544), f.isDiff(n | s) && (f.f1 -= 0.024544), f.isDiff(r | c | e | s) && (f.f0 += 0.012272), f.isDiff(r | c | e | s) && (f.f1 -= 0.012272), f.f0 = l(f.f0), f.f1 = l(f.f1), yield f.delay(f.ci2), f.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 3,
          color: 14,
          count: 16,
          rings: 1,
          speed: t(10023),
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.049087387,
          transform: 514
        }), f.isDiff(n | s) && (f.f0 += 0.024544), f.isDiff(n | s) && (f.f1 -= 0.024544), f.isDiff(r | c | e | s) && (f.f0 += 0.012272), f.isDiff(r | c | e | s) && (f.f1 -= 0.012272), f.f0 = l(f.f0), f.f1 = l(f.f1), yield f.delay(f.ci2), f.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 3,
          color: 2,
          count: 16,
          rings: 1,
          speed: t(10023),
          speed2: 0.5,
          angle: t(10017),
          angleStep: 0.049087387,
          transform: 514
        }), f.isDiff(n | s) && (f.f0 += 0.024544), f.isDiff(n | s) && (f.f1 -= 0.024544), f.isDiff(r | c | e | s) && (f.f0 += 0.012272), f.isDiff(r | c | e | s) && (f.f1 -= 0.012272), f.f0 = l(f.f0), f.f1 = l(f.f1), yield f.delay(f.ci2), f.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 3,
          color: 4,
          count: 16,
          rings: 1,
          speed: t(10023),
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.049087387,
          transform: 514
        }), f.isDiff(n | s) && (f.f0 += 0.024544), f.isDiff(n | s) && (f.f1 -= 0.024544), f.isDiff(r | c | e | s) && (f.f0 += 0.012272), f.isDiff(r | c | e | s) && (f.f1 -= 0.012272), f.f0 = l(f.f0), f.f1 = l(f.f1), yield f.delay(f.ci2), f.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 3,
          color: 6,
          count: 16,
          rings: 1,
          speed: t(10023),
          speed2: 0.5,
          angle: t(10017),
          angleStep: 0.049087387,
          transform: 514
        }), f.isDiff(n | s) && (f.f0 += 0.024544), f.isDiff(n | s) && (f.f1 -= 0.024544), f.isDiff(r | c | e | s) && (f.f0 += 0.012272), f.isDiff(r | c | e | s) && (f.f1 -= 0.012272), f.f0 = l(f.f0), f.f1 = l(f.f1), yield f.delay(f.ci2), f.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 3,
          color: 8,
          count: 16,
          rings: 1,
          speed: t(10023),
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.049087387,
          transform: 514
        }), f.isDiff(n | s) && (f.f0 += 0.024544), f.isDiff(n | s) && (f.f1 -= 0.024544), f.isDiff(r | c | e | s) && (f.f0 += 0.012272), f.isDiff(r | c | e | s) && (f.f1 -= 0.012272), f.f0 = l(f.f0), f.f1 = l(f.f1), yield f.delay(f.ci2), f.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 3,
          color: 10,
          count: 16,
          rings: 1,
          speed: t(10023),
          speed2: 0.5,
          angle: t(10017),
          angleStep: 0.049087387,
          transform: 514
        }), f.isDiff(n | s) && (f.f0 += 0.024544), f.isDiff(n | s) && (f.f1 -= 0.024544), f.isDiff(r | c | e | s) && (f.f0 += 0.012272), f.isDiff(r | c | e | s) && (f.f1 -= 0.012272), f.f0 = l(f.f0), f.f1 = l(f.f1), yield f.delay(f.ci2), f.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 3,
          color: 13,
          count: 16,
          rings: 1,
          speed: t(10023),
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.049087387,
          transform: 514
        }), f.isDiff(n | s) && (f.f0 += 0.024544), f.isDiff(n | s) && (f.f1 -= 0.024544), f.isDiff(r | c | e | s) && (f.f0 += 0.012272), f.isDiff(r | c | e | s) && (f.f1 -= 0.012272), f.f0 = l(f.f0), f.f1 = l(f.f1), yield f.delay(f.ci2), f.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 3,
          color: 14,
          count: 16,
          rings: 1,
          speed: t(10023),
          speed2: 0.5,
          angle: t(10017),
          angleStep: 0.049087387,
          transform: 514
        }), f.isDiff(n | s) && (f.f0 += 0.024544), f.isDiff(n | s) && (f.f1 -= 0.024544), f.isDiff(r | c | e | s) && (f.f0 += 0.012272), f.isDiff(r | c | e | s) && (f.f1 -= 0.012272), f.f0 = l(f.f0), f.f1 = l(f.f1), yield f.delay(f.ci2), i = 3;
        break;
      }
      default:
        return;
    }
}
function* I0(f) {
  let i = 0;
  yield 600;
  let a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        f.nop(), f.f0 = 0, f.ci0 = 5, i = 1;
        break;
      }
      case 1: {
        f.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 3,
          color: 2,
          count: 16,
          rings: 1,
          speed: 1,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.049087387,
          transform: 514
        }), yield 40, i = 2;
        break;
      }
      case 2: {
        f.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 3,
          color: 4,
          count: 16,
          rings: 1,
          speed: 1,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.049087387,
          transform: 514
        }), yield 40, i = 3;
        break;
      }
      case 3: {
        f.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 3,
          color: 6,
          count: 16,
          rings: 1,
          speed: 1,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.049087387,
          transform: 514
        }), yield 40, i = 4;
        break;
      }
      case 4: {
        f.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 3,
          color: 8,
          count: 16,
          rings: 1,
          speed: 1,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.049087387,
          transform: 514
        }), yield 40, i = 5;
        break;
      }
      case 5: {
        f.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 3,
          color: 10,
          count: 16,
          rings: 1,
          speed: 1,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.049087387,
          transform: 514
        }), yield 40, i = 6;
        break;
      }
      case 6: {
        f.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 3,
          color: 13,
          count: 16,
          rings: 1,
          speed: 1,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.049087387,
          transform: 514
        }), yield 40, i = 7;
        break;
      }
      case 7: {
        f.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 3,
          color: 14,
          count: 16,
          rings: 1,
          speed: 1,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.049087387,
          transform: 514
        }), yield 40, i = 8;
        break;
      }
      case 8: {
        if (--f.ci0 > 0) {
          i = 1;
          break;
        }
        i = 9;
        break;
      }
      case 9: {
        f.f0 = 0, f.f1 = 0, i = 10;
        break;
      }
      case 10: {
        f.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 3,
          color: 2,
          count: 16,
          rings: 1,
          speed: 1,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.049087387,
          transform: 514
        }), f.isDiff(n | s) && (f.f0 += 0.024544), f.isDiff(n | s) && (f.f1 -= 0.024544), f.isDiff(r | c | e | s) && (f.f0 += 0.012272), f.isDiff(r | c | e | s) && (f.f1 -= 0.012272), f.f0 = l(f.f0), f.f1 = l(f.f1), yield 20, i = 11;
        break;
      }
      case 11: {
        f.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 3,
          color: 4,
          count: 16,
          rings: 1,
          speed: 1,
          speed2: 0.5,
          angle: t(10017),
          angleStep: 0.049087387,
          transform: 514
        }), f.isDiff(n | s) && (f.f0 += 0.024544), f.isDiff(n | s) && (f.f1 -= 0.024544), f.isDiff(r | c | e | s) && (f.f0 += 0.012272), f.isDiff(r | c | e | s) && (f.f1 -= 0.012272), f.f0 = l(f.f0), f.f1 = l(f.f1), yield 20, i = 12;
        break;
      }
      case 12: {
        f.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 3,
          color: 6,
          count: 16,
          rings: 1,
          speed: 1,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.049087387,
          transform: 514
        }), f.isDiff(n | s) && (f.f0 += 0.024544), f.isDiff(n | s) && (f.f1 -= 0.024544), f.isDiff(r | c | e | s) && (f.f0 += 0.012272), f.isDiff(r | c | e | s) && (f.f1 -= 0.012272), f.f0 = l(f.f0), f.f1 = l(f.f1), yield 20, i = 13;
        break;
      }
      case 13: {
        f.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 3,
          color: 8,
          count: 16,
          rings: 1,
          speed: 1,
          speed2: 0.5,
          angle: t(10017),
          angleStep: 0.049087387,
          transform: 514
        }), f.isDiff(n | s) && (f.f0 += 0.024544), f.isDiff(n | s) && (f.f1 -= 0.024544), f.isDiff(r | c | e | s) && (f.f0 += 0.012272), f.isDiff(r | c | e | s) && (f.f1 -= 0.012272), f.f0 = l(f.f0), f.f1 = l(f.f1), yield 20, i = 14;
        break;
      }
      case 14: {
        f.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 3,
          color: 10,
          count: 16,
          rings: 1,
          speed: 1,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.049087387,
          transform: 514
        }), f.isDiff(n | s) && (f.f0 += 0.024544), f.isDiff(n | s) && (f.f1 -= 0.024544), f.isDiff(r | c | e | s) && (f.f0 += 0.012272), f.isDiff(r | c | e | s) && (f.f1 -= 0.012272), f.f0 = l(f.f0), f.f1 = l(f.f1), yield 20, i = 15;
        break;
      }
      case 15: {
        f.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 3,
          color: 13,
          count: 16,
          rings: 1,
          speed: 1,
          speed2: 0.5,
          angle: t(10017),
          angleStep: 0.049087387,
          transform: 514
        }), f.isDiff(n | s) && (f.f0 += 0.024544), f.isDiff(n | s) && (f.f1 -= 0.024544), f.isDiff(r | c | e | s) && (f.f0 += 0.012272), f.isDiff(r | c | e | s) && (f.f1 -= 0.012272), f.f0 = l(f.f0), f.f1 = l(f.f1), yield 20, i = 16;
        break;
      }
      case 16: {
        f.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 3,
          color: 14,
          count: 16,
          rings: 1,
          speed: 1,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.049087387,
          transform: 514
        }), f.isDiff(n | s) && (f.f0 += 0.024544), f.isDiff(n | s) && (f.f1 -= 0.024544), f.isDiff(r | c | e | s) && (f.f0 += 0.012272), f.isDiff(r | c | e | s) && (f.f1 -= 0.012272), f.f0 = l(f.f0), f.f1 = l(f.f1), yield 20, i = 17;
        break;
      }
      case 17: {
        f.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 3,
          color: 2,
          count: 16,
          rings: 1,
          speed: 1,
          speed2: 0.5,
          angle: t(10017),
          angleStep: 0.049087387,
          transform: 514
        }), f.isDiff(n | s) && (f.f0 += 0.024544), f.isDiff(n | s) && (f.f1 -= 0.024544), f.isDiff(r | c | e | s) && (f.f0 += 0.012272), f.isDiff(r | c | e | s) && (f.f1 -= 0.012272), f.f0 = l(f.f0), f.f1 = l(f.f1), yield 20, i = 18;
        break;
      }
      case 18: {
        f.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 3,
          color: 4,
          count: 16,
          rings: 1,
          speed: 1,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.049087387,
          transform: 514
        }), f.isDiff(n | s) && (f.f0 += 0.024544), f.isDiff(n | s) && (f.f1 -= 0.024544), f.isDiff(r | c | e | s) && (f.f0 += 0.012272), f.isDiff(r | c | e | s) && (f.f1 -= 0.012272), f.f0 = l(f.f0), f.f1 = l(f.f1), yield 20, i = 19;
        break;
      }
      case 19: {
        f.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 3,
          color: 6,
          count: 16,
          rings: 1,
          speed: 1,
          speed2: 0.5,
          angle: t(10017),
          angleStep: 0.049087387,
          transform: 514
        }), f.isDiff(n | s) && (f.f0 += 0.024544), f.isDiff(n | s) && (f.f1 -= 0.024544), f.isDiff(r | c | e | s) && (f.f0 += 0.012272), f.isDiff(r | c | e | s) && (f.f1 -= 0.012272), f.f0 = l(f.f0), f.f1 = l(f.f1), yield 20, i = 20;
        break;
      }
      case 20: {
        f.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 3,
          color: 8,
          count: 16,
          rings: 1,
          speed: 1,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.049087387,
          transform: 514
        }), f.isDiff(n | s) && (f.f0 += 0.024544), f.isDiff(n | s) && (f.f1 -= 0.024544), f.isDiff(r | c | e | s) && (f.f0 += 0.012272), f.isDiff(r | c | e | s) && (f.f1 -= 0.012272), f.f0 = l(f.f0), f.f1 = l(f.f1), yield 20, i = 21;
        break;
      }
      case 21: {
        f.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 3,
          color: 10,
          count: 16,
          rings: 1,
          speed: 1,
          speed2: 0.5,
          angle: t(10017),
          angleStep: 0.049087387,
          transform: 514
        }), f.isDiff(n | s) && (f.f0 += 0.024544), f.isDiff(n | s) && (f.f1 -= 0.024544), f.isDiff(r | c | e | s) && (f.f0 += 0.012272), f.isDiff(r | c | e | s) && (f.f1 -= 0.012272), f.f0 = l(f.f0), f.f1 = l(f.f1), yield 20, i = 22;
        break;
      }
      case 22: {
        f.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 3,
          color: 13,
          count: 16,
          rings: 1,
          speed: 1,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.049087387,
          transform: 514
        }), f.isDiff(n | s) && (f.f0 += 0.024544), f.isDiff(n | s) && (f.f1 -= 0.024544), f.isDiff(r | c | e | s) && (f.f0 += 0.012272), f.isDiff(r | c | e | s) && (f.f1 -= 0.012272), f.f0 = l(f.f0), f.f1 = l(f.f1), yield 20, i = 23;
        break;
      }
      case 23: {
        f.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 3,
          color: 14,
          count: 16,
          rings: 1,
          speed: 1,
          speed2: 0.5,
          angle: t(10017),
          angleStep: 0.049087387,
          transform: 514
        }), f.isDiff(n | s) && (f.f0 += 0.024544), f.isDiff(n | s) && (f.f1 -= 0.024544), f.isDiff(r | c | e | s) && (f.f0 += 0.012272), f.isDiff(r | c | e | s) && (f.f1 -= 0.012272), f.f0 = l(f.f0), f.f1 = l(f.f1), yield 20, i = 24;
        break;
      }
      case 24: {
        i = 10;
        break;
      }
      default:
        return;
    }
}
function* z0(f) {
  let i = 0;
  yield 60;
  let a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        f.nop(), f.f1 = 3.141593, f.f2 = 0.05236, f.isDiff(n | s) && (f.f0 = 1.3), f.isDiff(r | s) && (f.f0 = 1.3), f.isDiff(c | s) && (f.f0 = 2.3), f.isDiff(e | s) && (f.f0 = 2.3), f.isDiff(n | s) && (f.f5 = 2.2), f.isDiff(r | s) && (f.f5 = 2.2), f.isDiff(c | s) && (f.f5 = 3.2), f.isDiff(e | s) && (f.f5 = 3.2), f.isDiff(n | s) && (f.ci3 = 300), f.isDiff(r | s) && (f.ci3 = 200), f.isDiff(c | s) && (f.ci3 = 60), f.isDiff(e | s) && (f.ci3 = 30), i = 1;
        break;
      }
      case 1: {
        if (f.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 17,
          color: t(1e4),
          count: 1,
          rings: 1,
          speed: t(10016),
          speed2: 0.5,
          angle: t(10017),
          angleStep: 0.09817477,
          transform: 19074
        }), f.f0 += 0.2, f.f0 < f.f5) {
          i = 5;
          break;
        }
        i = 2;
        break;
      }
      case 2: {
        if (f.f1 = 3.141593, f.isDiff(n | s) && (f.f0 = 1), f.isDiff(r | s) && (f.f0 = 1), f.isDiff(c | s) && (f.f0 = 2), f.isDiff(e | s) && (f.f0 = 2), yield f.delay(f.ci3), f.f2 *= -1, f.f5 >= 4) {
          i = 4;
          break;
        }
        i = 3;
        break;
      }
      case 3: {
        i = 5;
        break;
      }
      case 4: {
        yield 128, i = 7;
        break;
      }
      case 5: {
        f.f1 += f.f2, f.f1 = l(f.f1), yield 8, i = 6;
        break;
      }
      case 6: {
        i = 1;
        break;
      }
      case 7: {
        f.nop(), f.f0 = 2.1, i = 8;
        break;
      }
      case 8: {
        f.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 17,
          color: t(1e4),
          count: 1,
          rings: 1,
          speed: t(10016),
          speed2: 0.5,
          angle: t(10017),
          angleStep: 0.09817477,
          transform: 19074
        }), f.f1 += f.f2, f.f1 = l(f.f1), yield 8, i = 9;
        break;
      }
      case 9: {
        i = 8;
        break;
      }
      default:
        return;
    }
}
function* P0(f) {
  let i = 0;
  yield 64;
  let a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        f.nop(), f.f1 = 0, f.f2 = 0.05236, f.isDiff(n | s) && (f.f0 = 1.3), f.isDiff(r | s) && (f.f0 = 1.3), f.isDiff(c | s) && (f.f0 = 2.3), f.isDiff(e | s) && (f.f0 = 2.3), f.isDiff(n | s) && (f.f5 = 2.2), f.isDiff(r | s) && (f.f5 = 2.2), f.isDiff(c | s) && (f.f5 = 3.2), f.isDiff(e | s) && (f.f5 = 3.2), f.isDiff(n | s) && (f.ci3 = 300), f.isDiff(r | s) && (f.ci3 = 200), f.isDiff(c | s) && (f.ci3 = 60), f.isDiff(e | s) && (f.ci3 = 30), f.ci0 = 10, i = 1;
        break;
      }
      case 1: {
        if (f.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 17,
          color: t(1e4),
          count: 1,
          rings: 1,
          speed: t(10016),
          speed2: 0.5,
          angle: t(10017),
          angleStep: 0.09817477,
          transform: 19074
        }), f.f0 += 0.2, f.f0 < f.f5) {
          i = 5;
          break;
        }
        i = 2;
        break;
      }
      case 2: {
        if (f.f1 = 0, f.isDiff(n | s) && (f.f0 = 1), f.isDiff(r | s) && (f.f0 = 1), f.isDiff(c | s) && (f.f0 = 2), f.isDiff(e | s) && (f.f0 = 2), yield f.delay(f.ci3), f.f2 *= -1, f.f5 >= 4) {
          i = 4;
          break;
        }
        i = 3;
        break;
      }
      case 3: {
        i = 5;
        break;
      }
      case 4: {
        yield 128, i = 7;
        break;
      }
      case 5: {
        f.f1 += f.f2, f.f1 = l(f.f1), yield 8, i = 6;
        break;
      }
      case 6: {
        i = 1;
        break;
      }
      case 7: {
        f.nop(), f.f0 = 2.1, i = 8;
        break;
      }
      case 8: {
        f.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 17,
          color: t(1e4),
          count: 1,
          rings: 1,
          speed: t(10016),
          speed2: 0.5,
          angle: t(10017),
          angleStep: 0.09817477,
          transform: 19074
        }), f.f1 += f.f2, f.f1 = l(f.f1), yield 8, i = 9;
        break;
      }
      case 9: {
        i = 8;
        break;
      }
      default:
        return;
    }
}
function* u(f) {
  let i = 0, a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        f.setShotRepeat(0), f.enemyFunc95(), f.setShotSound(-1, -1), f.clearScriptFlags(3), f.setShotOrigin(0, 0), f.setSpellTimer(1200, 12), f.resetSpellTimerSub(), f.setSpellTimerElapsed(0), f.ci3 = 0, f.moveRelative(110, 4, 192, 224), f.isDiff(n | s) && f.startSpell("「永夜返し  -初月-」", "蓬莱山輝夜", 171, 0, 33e6), f.isDiff(r | s) && f.startSpell("「永夜返し  -三日月-」", "蓬莱山輝夜", 172, 0, 33e6), f.isDiff(c | s) && f.startSpell("「永夜返し  -上つ弓張-」", "蓬莱山輝夜", 173, 0, 33e6), f.isDiff(e | s) && f.startSpell("「永夜返し  -待宵-」", "蓬莱山輝夜", 174, 0, 33e6), f.setMisc155(1), yield 110, i = 1;
        break;
      }
      case 1: {
        f.nop(), f.setMisc160(120), yield* o(f), i = 2;
        break;
      }
      case 2: {
        f.callSubAlloc(0, 78), f.callSubAlloc(1, 79), f.setShotNoFireRadius(0), yield 300, i = 3;
        break;
      }
      case 3: {
        i = 3;
        break;
      }
      default:
        return;
    }
}
function* H0(f) {
  let i = 0, a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        f.f0 = f.timer, f.f0 += 0.049087, f.ci0 = 28, i = 1;
        break;
      }
      case 1: {
        f.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 2,
          color: 6,
          count: 56,
          rings: 1,
          speed: 1,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.049087387,
          transform: 514
        }), yield 12, i = 2;
        break;
      }
      case 2: {
        if (--f.ci0 > 0) {
          i = 1;
          break;
        }
        i = 3;
        break;
      }
      case 3: {
        i = 0;
        break;
      }
      default:
        return;
    }
}
function* O0(f) {
  let i = 0;
  yield 200;
  let a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        f.nop(), f.isDiff(n | s) && (f.f0 = 1), f.isDiff(r | s) && (f.f0 = 1.4), f.isDiff(c | s) && (f.f0 = 1.6), f.isDiff(e | s) && (f.f0 = 1.8), f.setShotRecord(0, 128, 0, 60, 1, 0, f.f0), f.isDiff(n | s) && (f.ci2 = 40), f.isDiff(r | s) && (f.ci2 = 20), f.isDiff(c | s) && (f.ci2 = 16), f.isDiff(e | s) && (f.ci2 = 13), i = 1;
        break;
      }
      case 1: {
        f.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 7,
          color: 1,
          count: 1,
          rings: 1,
          speed: 3,
          speed2: 0.5,
          angle: 3.1415927,
          angleStep: 0.049087387,
          transform: 642
        }), yield f.delay(f.ci2), f.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 7,
          color: 1,
          count: 1,
          rings: 1,
          speed: 3,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.049087387,
          transform: 642
        }), yield f.delay(f.ci2), i = 1;
        break;
      }
      default:
        return;
    }
}
function* b(f) {
  let i = 0, a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        f.setShotRepeat(0), f.enemyFunc95(), f.setShotSound(-1, -1), f.clearScriptFlags(3), f.setShotOrigin(0, 0), f.setSpellTimer(1200, 12), f.resetSpellTimerSub(), f.setSpellTimerElapsed(0), f.ci3 = 0, f.moveRelative(110, 4, 192, 224), f.isDiff(n | s) && f.startSpell("「永夜返し  -子の刻-」", "蓬莱山輝夜", 175, 0, 33e6), f.isDiff(r | s) && f.startSpell("「永夜返し  -子の二つ-」", "蓬莱山輝夜", 176, 0, 33e6), f.isDiff(c | s) && f.startSpell("「永夜返し  -子の三つ-」", "蓬莱山輝夜", 177, 0, 33e6), f.isDiff(e | s) && f.startSpell("「永夜返し  -子の四つ-」", "蓬莱山輝夜", 178, 0, 33e6), f.setMisc155(1), yield 110, i = 1;
        break;
      }
      case 1: {
        f.nop(), f.setMisc160(120), yield* o(f), i = 2;
        break;
      }
      case 2: {
        f.callSubAlloc(0, 81), f.setShotNoFireRadius(0), yield 300, i = 3;
        break;
      }
      case 3: {
        i = 3;
        break;
      }
      default:
        return;
    }
}
function* Y0(f) {
  let i = 0, a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        f.f0 = f.randAngle, f.isDiff(n | s) && (f.ci0 = 8), f.isDiff(r | s) && (f.ci0 = 8), f.isDiff(c | s) && (f.ci0 = 10), f.isDiff(e | s) && (f.ci0 = 10), f.isDiff(n | s) && (f.f4 = 1), f.isDiff(r | s) && (f.f4 = 1), f.isDiff(c | s) && (f.f4 = 1.5), f.isDiff(e | s) && (f.f4 = 2), f.isDiff(n | s) && (f.i4 = 48), f.isDiff(r | s) && (f.i4 = 64), f.isDiff(c | s) && (f.i4 = 64), f.isDiff(e | s) && (f.i4 = 64), f.isDiff(n | s) && (f.ci2 = 12), f.isDiff(r | s) && (f.ci2 = 12), f.isDiff(c | s) && (f.ci2 = 9), f.isDiff(e | s) && (f.ci2 = 8), i = 1;
        break;
      }
      case 1: {
        if (f.setShotRecord(0, 32, 0, 640, -1, 0, 5236e-6), f.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 2,
          color: 6,
          count: t(10004),
          rings: 1,
          speed: t(10020),
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.049087387,
          transform: 546
        }), f.setShotRecord(0, 32, 0, 640, -1, 0, -5236e-6), yield f.delay(f.ci2), f.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 2,
          color: 6,
          count: t(10004),
          rings: 1,
          speed: t(10020),
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.049087387,
          transform: 546
        }), yield f.delay(f.ci2), --f.ci0 > 0) {
          i = 1;
          break;
        }
        i = 2;
        break;
      }
      case 2: {
        f.nop(), f.spawnShot({
          mode: "aimedRing",
          // aim 2 of 96..104
          type: 10,
          color: 0,
          count: 1,
          rings: 1,
          speed: t(10020),
          speed2: 0.5,
          angle: 0,
          angleStep: 0.049087387,
          transform: 514
        }), i = 0;
        break;
      }
      default:
        return;
    }
}
function* g(f) {
  let i = 0, a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        f.setShotRepeat(0), f.enemyFunc95(), f.setShotSound(-1, -1), f.clearScriptFlags(3), f.setShotOrigin(0, 0), f.setSpellTimer(1200, 12), f.resetSpellTimerSub(), f.setSpellTimerElapsed(0), f.ci3 = 0, f.moveRelative(110, 4, 192, 224), f.isDiff(n | s) && f.startSpell("「永夜返し  -丑の刻-」", "蓬莱山輝夜", 179, 0, 33e6), f.isDiff(r | s) && f.startSpell("「永夜返し  -丑の二つ-」", "蓬莱山輝夜", 180, 0, 33e6), f.isDiff(c | s) && f.startSpell("「永夜返し  -丑三つ時-」", "蓬莱山輝夜", 181, 0, 33e6), f.isDiff(e | s) && f.startSpell("「永夜返し  -丑の四つ-」", "蓬莱山輝夜", 182, 0, 33e6), f.setMisc155(1), yield 110, i = 1;
        break;
      }
      case 1: {
        f.nop(), f.setMisc160(120), yield* o(f), i = 2;
        break;
      }
      case 2: {
        f.callSubAlloc(0, 83), f.setShotNoFireRadius(0), yield 300, i = 3;
        break;
      }
      case 3: {
        i = 3;
        break;
      }
      default:
        return;
    }
}
function* X0(f) {
  let i = 0, a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        f.f0 = f.randAngle, f.f1 = f.randAngle, f.ci0 = 120, f.isDiff(n | s) && (f.ci2 = 15), f.isDiff(r | s) && (f.ci2 = 11), f.isDiff(c | s) && (f.ci2 = 11), f.isDiff(e | s) && (f.ci2 = 10), f.isDiff(n | s) && (f.i7 = 8), f.isDiff(r | s) && (f.i7 = 12), f.isDiff(c | s) && (f.i7 = 14), f.isDiff(e | s) && (f.i7 = 15), i = 1;
        break;
      }
      case 1: {
        if (f.setShotRecord(0, 32, 0, 640, -1, 0.02, 0.016111), f.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 2,
          color: 6,
          count: t(10007),
          rings: 1,
          speed: 1,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.049087387,
          transform: 546
        }), f.f0 -= 0.03927, f.f0 = l(f.f0), f.setShotRecord(0, 32, 0, 640, -1, 0.02, -0.016111), f.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 2,
          color: 2,
          count: t(10007),
          rings: 1,
          speed: 1,
          speed2: 0.5,
          angle: t(10017),
          angleStep: 0.049087387,
          transform: 546
        }), f.f1 += 0.03927, f.f1 = l(f.f1), yield f.delay(f.ci2), --f.ci0 > 0) {
          i = 1;
          break;
        }
        i = 2;
        break;
      }
      case 2: {
        i = 0;
        break;
      }
      default:
        return;
    }
}
function* y(f) {
  let i = 0, a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        f.setShotRepeat(0), f.enemyFunc95(), f.setShotSound(-1, -1), f.clearScriptFlags(3), f.setShotOrigin(0, 0), f.setSpellTimer(1200, 12), f.resetSpellTimerSub(), f.setSpellTimerElapsed(0), f.ci3 = 0, f.moveRelative(110, 4, 192, 224), f.isDiff(n | s) && f.startSpell("「永夜返し  -寅の刻-」", "蓬莱山輝夜", 183, 0, 33e6), f.isDiff(r | s) && f.startSpell("「永夜返し  -寅の二つ-」", "蓬莱山輝夜", 184, 0, 33e6), f.isDiff(c | s) && f.startSpell("「永夜返し  -寅の三つ-」", "蓬莱山輝夜", 185, 0, 33e6), f.isDiff(e | s) && f.startSpell("「永夜返し  -寅の四つ-」", "蓬莱山輝夜", 186, 0, 33e6), f.setMisc155(1), yield 110, i = 1;
        break;
      }
      case 1: {
        f.nop(), f.setMisc160(120), yield* o(f), i = 2;
        break;
      }
      case 2: {
        f.callSubAlloc(0, 85), f.callSubAlloc(1, 86), f.setShotNoFireRadius(0), yield 300, i = 3;
        break;
      }
      case 3: {
        i = 3;
        break;
      }
      default:
        return;
    }
}
function* N0(f) {
  let i = 0, a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        f.f0 = f.timer, f.f0 += 0.049087, f.ci0 = 12, f.f1 = 9817e-6, f.isDiff(n | s) && (f.i7 = 48), f.isDiff(r | s) && (f.i7 = 56), f.isDiff(c | s) && (f.i7 = 60), f.isDiff(e | s) && (f.i7 = 64), i = 1;
        break;
      }
      case 1: {
        f.setShotRecord(0, 64, 0, 30, 1, 3.043418, 3.8), f.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 2,
          color: 6,
          count: t(10007),
          rings: 1,
          speed: 5,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0,
          transform: 578
        }), yield 2, i = 2;
        break;
      }
      case 2: {
        if (--f.ci0 > 0) {
          i = 1;
          break;
        }
        i = 3;
        break;
      }
      case 3: {
        f.f0 = f.timer, f.f0 += 0.049087, f.ci0 = 12, f.f1 = 9817e-6, i = 4;
        break;
      }
      case 4: {
        f.setShotRecord(0, 64, 0, 30, 1, -3.043418, 3.8), f.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 2,
          color: 6,
          count: t(10007),
          rings: 1,
          speed: 5,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0,
          transform: 578
        }), yield 2, i = 5;
        break;
      }
      case 5: {
        if (--f.ci0 > 0) {
          i = 4;
          break;
        }
        i = 6;
        break;
      }
      case 6: {
        i = 0;
        break;
      }
      default:
        return;
    }
}
function* G0(f) {
  let i = 0;
  yield 200;
  let a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        f.nop(), f.isDiff(n | s) && (f.ci2 = 30), f.isDiff(r | s) && (f.ci2 = 22), f.isDiff(c | s) && (f.ci2 = 18), f.isDiff(e | s) && (f.ci2 = 15), f.isDiff(n | s) && (f.f2 = 2), f.isDiff(r | s) && (f.f2 = 2), f.isDiff(c | s) && (f.f2 = 2.2), f.isDiff(e | s) && (f.f2 = 2.6), i = 1;
        break;
      }
      case 1: {
        f.setShotRecord(0, 128, 0, 60, 1, 0, f.f2), f.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 10,
          color: 0,
          count: 1,
          rings: 1,
          speed: 3,
          speed2: 0.5,
          angle: 3.1415927,
          angleStep: 0.049087387,
          transform: 642
        }), yield f.delay(f.ci2), f.setShotRecord(0, 128, 0, 60, 1, 0, f.f2), f.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 10,
          color: 0,
          count: 1,
          rings: 1,
          speed: 3,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.049087387,
          transform: 642
        }), yield f.delay(f.ci2), i = 1;
        break;
      }
      default:
        return;
    }
}
function* h(f) {
  let i = 0, a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        f.setShotRepeat(0), f.enemyFunc95(), f.setShotSound(-1, -1), f.clearScriptFlags(3), f.setShotOrigin(0, 0), f.setSpellTimer(1800, 12), f.resetSpellTimerSub(), f.setSpellTimerElapsed(0), f.ci3 = 0, f.moveRelative(110, 4, 192, 144), f.isDiff(n | s) && f.startSpell("「永夜返し  -朝靄-」", "蓬莱山輝夜", 187, 0, 33e6), f.isDiff(r | s) && f.startSpell("「永夜返し  -夜明け-」", "蓬莱山輝夜", 188, 0, 33e6), f.isDiff(c | s) && f.startSpell("「永夜返し  -明けの明星-」", "蓬莱山輝夜", 189, 0, 33e6), f.isDiff(e | s) && f.startSpell("「永夜返し  -世明け-」", "蓬莱山輝夜", 190, 0, 33e6), f.setMisc155(1), yield 110, i = 1;
        break;
      }
      case 1: {
        f.nop(), f.setMisc160(120), yield* o(f), i = 2;
        break;
      }
      case 2: {
        f.callSubAlloc(0, 88), f.setShotNoFireRadius(0), yield 300, i = 3;
        break;
      }
      case 3: {
        i = 3;
        break;
      }
      default:
        return;
    }
}
function* j0(f) {
  let i = 0, a = 0;
  for (; i >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), i) {
      case 0: {
        f.ci0 = 50, f.isDiff(n | s) && (f.i7 = 3), f.isDiff(r | s) && (f.i7 = 4), f.isDiff(c | s) && (f.i7 = 5), f.isDiff(e | s) && (f.i7 = 6), f.isDiff(n | s) && (f.f7 = 2), f.isDiff(r | s) && (f.f7 = 2), f.isDiff(c | s) && (f.f7 = 2.4), f.isDiff(e | s) && (f.f7 = 2.8), i = 1;
        break;
      }
      case 1: {
        f.spawnShot({
          mode: "randomAngleSpeed",
          // aim 8 of 96..104
          type: 8,
          color: 3,
          count: t(10007),
          rings: 1,
          speed: t(10023),
          speed2: 0.5,
          angle: -3.1415927,
          angleStep: 3.1415927,
          transform: 514
        }), yield 4, i = 2;
        break;
      }
      case 2: {
        if (--f.ci0 > 0) {
          i = 1;
          break;
        }
        i = 3;
        break;
      }
      case 3: {
        f.ci0 = 50, f.setShotRecord(0, 32, 0, 120, -1, 0, 9817e-6), f.isDiff(n | s) && (f.i7 = 4), f.isDiff(r | s) && (f.i7 = 5), f.isDiff(c | s) && (f.i7 = 6), f.isDiff(e | s) && (f.i7 = 7), f.isDiff(n | s) && (f.f7 = 2.3), f.isDiff(r | s) && (f.f7 = 2.4), f.isDiff(c | s) && (f.f7 = 2.5), f.isDiff(e | s) && (f.f7 = 2.8), i = 4;
        break;
      }
      case 4: {
        f.spawnShot({
          mode: "randomAngleSpeed",
          // aim 8 of 96..104
          type: 7,
          color: 4,
          count: t(10007),
          rings: 1,
          speed: t(10023),
          speed2: 0.5,
          angle: -3.1415927,
          angleStep: 3.1415927,
          transform: 546
        }), yield 4, i = 5;
        break;
      }
      case 5: {
        if (--f.ci0 > 0) {
          i = 4;
          break;
        }
        i = 6;
        break;
      }
      case 6: {
        f.ci0 = 50, f.setShotRecord(0, 32, 0, 120, -1, 0, -9817e-6), f.isDiff(n | s) && (f.i7 = 5), f.isDiff(r | s) && (f.i7 = 6), f.isDiff(c | s) && (f.i7 = 7), f.isDiff(e | s) && (f.i7 = 8), f.isDiff(n | s) && (f.f7 = 2.4), f.isDiff(r | s) && (f.f7 = 2.5), f.isDiff(c | s) && (f.f7 = 2.6), f.isDiff(e | s) && (f.f7 = 2.8), i = 7;
        break;
      }
      case 7: {
        f.spawnShot({
          mode: "randomAngleSpeed",
          // aim 8 of 96..104
          type: 9,
          color: 5,
          count: t(10007),
          rings: 1,
          speed: t(10023),
          speed2: 1,
          angle: -3.1415927,
          angleStep: 3.1415927,
          transform: 546
        }), yield 4, i = 8;
        break;
      }
      case 8: {
        if (--f.ci0 > 0) {
          i = 7;
          break;
        }
        i = 9;
        break;
      }
      case 9: {
        f.ci0 = 50, f.setShotRecord(0, 32, 0, 120, -1, 0, 9817e-6), f.isDiff(n | s) && (f.i7 = 5), f.isDiff(r | s) && (f.i7 = 7), f.isDiff(c | s) && (f.i7 = 8), f.isDiff(e | s) && (f.i7 = 9), f.isDiff(n | s) && (f.f7 = 2.6), f.isDiff(r | s) && (f.f7 = 2.8), f.isDiff(c | s) && (f.f7 = 3), f.isDiff(e | s) && (f.f7 = 3.2), i = 10;
        break;
      }
      case 10: {
        f.spawnShot({
          mode: "randomAngleSpeed",
          // aim 8 of 96..104
          type: 13,
          color: 13,
          count: t(10007),
          rings: 1,
          speed: t(10023),
          speed2: 1,
          angle: -3.1415927,
          angleStep: 3.1415927,
          transform: 546
        }), yield 4, i = 11;
        break;
      }
      case 11: {
        if (--f.ci0 > 0) {
          i = 10;
          break;
        }
        i = 12;
        break;
      }
      case 12: {
        f.ci0 = 50, f.setShotRecord(0, 32, 0, 120, -1, 0, -9817e-6), f.isDiff(n | s) && (f.i7 = 6), f.isDiff(r | s) && (f.i7 = 8), f.isDiff(c | s) && (f.i7 = 9), f.isDiff(e | s) && (f.i7 = 10), f.isDiff(n | s) && (f.f7 = 2.5), f.isDiff(r | s) && (f.f7 = 3), f.isDiff(c | s) && (f.f7 = 3.2), f.isDiff(e | s) && (f.f7 = 3.4), i = 13;
        break;
      }
      case 13: {
        f.spawnShot({
          mode: "randomAngleSpeed",
          // aim 8 of 96..104
          type: 18,
          color: 1,
          count: t(10007),
          rings: 1,
          speed: t(10023),
          speed2: 1.5,
          angle: -3.1415927,
          angleStep: 3.1415927,
          transform: 546
        }), yield 4, i = 14;
        break;
      }
      case 14: {
        if (--f.ci0 > 0) {
          i = 13;
          break;
        }
        i = 15;
        break;
      }
      case 15: {
        f.ci0 = 50, f.setShotRecord(0, 32, 0, 120, -1, 0, 9817e-6), f.isDiff(n | s) && (f.i7 = 6), f.isDiff(r | s) && (f.i7 = 9), f.isDiff(c | s) && (f.i7 = 10), f.isDiff(e | s) && (f.i7 = 11), f.isDiff(n | s) && (f.f7 = 2.5), f.isDiff(r | s) && (f.f7 = 3), f.isDiff(c | s) && (f.f7 = 3.2), f.isDiff(e | s) && (f.f7 = 3.4), i = 16;
        break;
      }
      case 16: {
        f.spawnShot({
          mode: "randomAngleSpeed",
          // aim 8 of 96..104
          type: 11,
          color: 4,
          count: t(10007),
          rings: 1,
          speed: t(10023),
          speed2: 1.5,
          angle: -3.1415927,
          angleStep: 3.1415927,
          transform: 546
        }), yield 4, i = 17;
        break;
      }
      case 17: {
        if (--f.ci0 > 0) {
          i = 16;
          break;
        }
        i = 18;
        break;
      }
      case 18: {
        f.ci0 = 600, f.isDiff(n | s) && (f.i7 = 6), f.isDiff(r | s) && (f.i7 = 7), f.isDiff(c | s) && (f.i7 = 8), f.isDiff(e | s) && (f.i7 = 9), f.isDiff(n | s) && (f.f7 = 3.5), f.isDiff(r | s) && (f.f7 = 4), f.isDiff(c | s) && (f.f7 = 4.5), f.isDiff(e | s) && (f.f7 = 5), i = 19;
        break;
      }
      case 19: {
        f.spawnShot({
          mode: "randomAngleSpeed",
          // aim 8 of 96..104
          type: 7,
          color: 1,
          count: t(10007),
          rings: 1,
          speed: t(10023),
          speed2: 0.5,
          angle: -3.1415927,
          angleStep: 3.1415927,
          transform: 514
        }), yield 2, i = 20;
        break;
      }
      case 20: {
        f.spawnShot({
          mode: "randomAngleSpeed",
          // aim 8 of 96..104
          type: 8,
          color: 2,
          count: t(10007),
          rings: 1,
          speed: t(10023),
          speed2: 0.5,
          angle: -3.1415927,
          angleStep: 3.1415927,
          transform: 514
        }), yield 2, i = 21;
        break;
      }
      case 21: {
        f.spawnShot({
          mode: "randomAngleSpeed",
          // aim 8 of 96..104
          type: 9,
          color: 3,
          count: t(10007),
          rings: 1,
          speed: t(10023),
          speed2: 0.5,
          angle: -3.1415927,
          angleStep: 3.1415927,
          transform: 514
        }), yield 2, i = 22;
        break;
      }
      case 22: {
        f.spawnShot({
          mode: "randomAngleSpeed",
          // aim 8 of 96..104
          type: 18,
          color: 4,
          count: t(10007),
          rings: 1,
          speed: t(10023),
          speed2: 0.5,
          angle: -3.1415927,
          angleStep: 3.1415927,
          transform: 514
        }), yield 2, i = 23;
        break;
      }
      case 23: {
        f.spawnShot({
          mode: "randomAngleSpeed",
          // aim 8 of 96..104
          type: 12,
          color: 10,
          count: t(10007),
          rings: 1,
          speed: t(10023),
          speed2: 0.5,
          angle: -3.1415927,
          angleStep: 3.1415927,
          transform: 514
        }), yield 2, i = 24;
        break;
      }
      case 24: {
        f.spawnShot({
          mode: "randomAngleSpeed",
          // aim 8 of 96..104
          type: 11,
          color: 13,
          count: t(10007),
          rings: 1,
          speed: t(10023),
          speed2: 0.5,
          angle: -3.1415927,
          angleStep: 3.1415927,
          transform: 514
        }), yield 2, i = 25;
        break;
      }
      case 25: {
        if (--f.ci0 > 0) {
          i = 19;
          break;
        }
        i = 26;
        break;
      }
      case 26: {
        i = 0;
        break;
      }
      default:
        return;
    }
}
const U0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  sub_0: k,
  sub_1: m,
  sub_10: x,
  sub_11: _,
  sub_12: C,
  sub_13: T,
  sub_14: L,
  sub_15: B,
  sub_16: d,
  sub_17: I,
  sub_18: z,
  sub_19: P,
  sub_2: D,
  sub_20: H,
  sub_21: O,
  sub_22: Y,
  sub_23: X,
  sub_24: N,
  sub_25: G,
  sub_26: j,
  sub_27: U,
  sub_28: V,
  sub_29: W,
  sub_3: w,
  sub_30: q,
  sub_31: J,
  sub_32: K,
  sub_33: Q,
  sub_34: Z,
  sub_35: $,
  sub_36: f0,
  sub_37: i0,
  sub_38: s0,
  sub_39: a0,
  sub_4: A,
  sub_40: t0,
  sub_41: l0,
  sub_42: n0,
  sub_43: o,
  sub_44: e0,
  sub_45: c0,
  sub_46: r0,
  sub_47: o0,
  sub_48: d0,
  sub_49: p0,
  sub_5: M,
  sub_50: S0,
  sub_51: u0,
  sub_52: b0,
  sub_53: g0,
  sub_54: y0,
  sub_55: h0,
  sub_56: k0,
  sub_57: m0,
  sub_58: D0,
  sub_59: w0,
  sub_6: R,
  sub_60: A0,
  sub_61: M0,
  sub_62: R0,
  sub_63: F0,
  sub_64: v0,
  sub_65: E0,
  sub_66: x0,
  sub_67: _0,
  sub_68: C0,
  sub_69: p,
  sub_7: F,
  sub_70: T0,
  sub_71: S,
  sub_72: L0,
  sub_73: B0,
  sub_74: I0,
  sub_75: z0,
  sub_76: P0,
  sub_77: u,
  sub_78: H0,
  sub_79: O0,
  sub_8: v,
  sub_80: b,
  sub_81: Y0,
  sub_82: g,
  sub_83: X0,
  sub_84: y,
  sub_85: N0,
  sub_86: G0,
  sub_87: h,
  sub_88: j0,
  sub_9: E
}, Symbol.toStringTag, { value: "Module" })), V0 = [
  {
    index: 0,
    offset: 66340,
    instructions: [
      {
        offset: 0,
        time: 260,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1137704960, 1111490560, 1e3, -2, 1e3])
      },
      {
        offset: 0,
        time: 320,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, -1040187392, 1111490560, 1e3, -2, 1e3])
      },
      {
        offset: 0,
        time: 1200,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([7, -1040187392, 1124073472, 1300, 2, 1e3])
      },
      {
        offset: 0,
        time: 1230,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([7, -1040187392, 1119879168, 1300, 2, 1e3])
      },
      {
        offset: 0,
        time: 1260,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([7, -1040187392, 1114636288, 1300, 2, 1e3])
      },
      {
        offset: 0,
        time: 1860,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([7, -1040187392, 1114636288, 1300, 2, 1e3])
      },
      {
        offset: 0,
        time: 1890,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([7, -1040187392, 1119879168, 1300, 2, 1e3])
      },
      {
        offset: 0,
        time: 1920,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([7, -1040187392, 1124073472, 1300, 2, 1e3])
      },
      {
        offset: 0,
        time: 2470,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([7, -1040187392, 1114636288, 1300, 2, 1e3])
      },
      {
        offset: 0,
        time: 2500,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([7, -1040187392, 1119879168, 1300, 2, 1e3])
      },
      {
        offset: 0,
        time: 2530,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([7, -1040187392, 1124073472, 1300, 2, 1e3])
      },
      {
        offset: 0,
        time: 3030,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([7, -1040187392, 1125122048, 1300, 2, 1e3])
      },
      {
        offset: 0,
        time: 3060,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([7, -1040187392, 1119879168, 1300, 2, 1e3])
      },
      {
        offset: 0,
        time: 3090,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([7, -1040187392, 1124073472, 1300, 2, 1e3])
      },
      {
        offset: 0,
        time: 3490,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([14, 1128267776, -1048576e3, 6e4, -2, 1e5])
      },
      { offset: 0, time: 3510, opcode: 6, size: 12, difficultyMask: 255, args: new Int32Array([2]) },
      { offset: 0, time: 3511, opcode: 7, size: 8, difficultyMask: 255, args: new Int32Array([]) },
      { offset: 0, time: 3511, opcode: 8, size: 16, difficultyMask: 255, args: new Int32Array([0, 1]) },
      { offset: 0, time: 3512, opcode: 10, size: 12, difficultyMask: 255, args: new Int32Array([0]) },
      { offset: 0, time: 4112, opcode: 6, size: 12, difficultyMask: 255, args: new Int32Array([0]) },
      { offset: 0, time: 4112, opcode: 7, size: 8, difficultyMask: 255, args: new Int32Array([]) },
      {
        offset: 0,
        time: 4112,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([26, 1128267776, -1048576e3, 6e4, -2, 1e5])
      },
      { offset: 0, time: 4113, opcode: 7, size: 8, difficultyMask: 255, args: new Int32Array([]) },
      { offset: 0, time: 4113, opcode: 8, size: 16, difficultyMask: 255, args: new Int32Array([0, 1]) },
      { offset: 0, time: 4113, opcode: 10, size: 12, difficultyMask: 255, args: new Int32Array([0]) },
      { offset: 0, time: 4113, opcode: 6, size: 12, difficultyMask: 255, args: new Int32Array([4]) },
      { offset: 0, time: 4173, opcode: 6, size: 12, difficultyMask: 255, args: new Int32Array([3]) },
      { offset: 0, time: 4174, opcode: 7, size: 8, difficultyMask: 255, args: new Int32Array([]) },
      {
        offset: 0,
        time: 4234,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([42, 1128267776, 1128267776, 6e4, -2, 1e5])
      },
      { offset: 0, time: 4234, opcode: 10, size: 12, difficultyMask: 255, args: new Int32Array([0]) },
      { offset: 0, time: 4234, opcode: 6, size: 12, difficultyMask: 255, args: new Int32Array([6]) },
      { offset: 0, time: 4235, opcode: 7, size: 8, difficultyMask: 255, args: new Int32Array([]) },
      {
        offset: 0,
        time: 4235,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([46, 1128267776, 1128267776, 6e4, -2, 1e5])
      },
      { offset: 0, time: 4235, opcode: 10, size: 12, difficultyMask: 255, args: new Int32Array([0]) },
      { offset: 0, time: 4235, opcode: 6, size: 12, difficultyMask: 255, args: new Int32Array([7]) },
      { offset: 0, time: 4236, opcode: 7, size: 8, difficultyMask: 255, args: new Int32Array([]) },
      {
        offset: 0,
        time: 4236,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([47, 1128267776, 1128267776, 6e4, -2, 1e5])
      },
      { offset: 0, time: 4236, opcode: 10, size: 12, difficultyMask: 255, args: new Int32Array([0]) },
      { offset: 0, time: 4236, opcode: 6, size: 12, difficultyMask: 255, args: new Int32Array([8]) },
      { offset: 0, time: 4237, opcode: 7, size: 8, difficultyMask: 255, args: new Int32Array([]) },
      {
        offset: 0,
        time: 4237,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([48, 1128267776, 1128267776, 6e4, -2, 1e5])
      },
      { offset: 0, time: 4237, opcode: 10, size: 12, difficultyMask: 255, args: new Int32Array([0]) },
      { offset: 0, time: 4237, opcode: 6, size: 12, difficultyMask: 255, args: new Int32Array([9]) },
      { offset: 0, time: 4238, opcode: 7, size: 8, difficultyMask: 255, args: new Int32Array([]) },
      {
        offset: 0,
        time: 4238,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([49, 1128267776, 1128267776, 6e4, -2, 1e5])
      },
      { offset: 0, time: 4238, opcode: 10, size: 12, difficultyMask: 255, args: new Int32Array([0]) },
      { offset: 0, time: 4238, opcode: 6, size: 12, difficultyMask: 255, args: new Int32Array([5]) },
      { offset: 0, time: 4239, opcode: 7, size: 8, difficultyMask: 255, args: new Int32Array([]) }
    ]
  }
], W0 = {
  version: 2048,
  subCount: 89,
  subs: [],
  timelines: V0
}, J0 = {
  route: "stage6b",
  source: "ecldata7.ecl",
  subCount: 89,
  timelineCount: 1,
  cards: [
    {
      sub: 19,
      id: 147,
      name: "薬符「壺中の大銀河」",
      owner: "八意永琳",
      face: 0,
      bonus: 3e7,
      lastSpell: !1
    },
    {
      sub: 19,
      id: 148,
      name: "薬符「壺中の大銀河」",
      owner: "八意永琳",
      face: 0,
      bonus: 3e7,
      lastSpell: !1
    },
    {
      sub: 19,
      id: 149,
      name: "薬符「壺中の大銀河」",
      owner: "八意永琳",
      face: 0,
      bonus: 3e7,
      lastSpell: !1
    },
    {
      sub: 19,
      id: 150,
      name: "薬符「壺中の大銀河」",
      owner: "八意永琳",
      face: 0,
      bonus: 3e7,
      lastSpell: !1
    },
    {
      sub: 50,
      id: 151,
      name: "難題「龍の頸の玉  -五色の弾丸-」",
      owner: "蓬莱山輝夜",
      face: 0,
      bonus: 3e7,
      lastSpell: !1
    },
    {
      sub: 50,
      id: 152,
      name: "難題「龍の頸の玉  -五色の弾丸-」",
      owner: "蓬莱山輝夜",
      face: 0,
      bonus: 3e7,
      lastSpell: !1
    },
    {
      sub: 50,
      id: 153,
      name: "神宝「ブリリアントドラゴンバレッタ」",
      owner: "蓬莱山輝夜",
      face: 0,
      bonus: 3e7,
      lastSpell: !1
    },
    {
      sub: 50,
      id: 154,
      name: "神宝「ブリリアントドラゴンバレッタ」",
      owner: "蓬莱山輝夜",
      face: 0,
      bonus: 3e7,
      lastSpell: !1
    },
    {
      sub: 55,
      id: 155,
      name: "難題「仏の御石の鉢  -砕けぬ意思-」",
      owner: "蓬莱山輝夜",
      face: 0,
      bonus: 3e7,
      lastSpell: !1
    },
    {
      sub: 55,
      id: 156,
      name: "難題「仏の御石の鉢  -砕けぬ意思-」",
      owner: "蓬莱山輝夜",
      face: 0,
      bonus: 3e7,
      lastSpell: !1
    },
    {
      sub: 55,
      id: 157,
      name: "神宝「ブディストダイアモンド」",
      owner: "蓬莱山輝夜",
      face: 0,
      bonus: 3e7,
      lastSpell: !1
    },
    {
      sub: 55,
      id: 158,
      name: "神宝「ブディストダイアモンド」",
      owner: "蓬莱山輝夜",
      face: 0,
      bonus: 3e7,
      lastSpell: !1
    },
    {
      sub: 61,
      id: 159,
      name: "難題「火鼠の皮衣  -焦れぬ心-」",
      owner: "蓬莱山輝夜",
      face: 0,
      bonus: 3e7,
      lastSpell: !1
    },
    {
      sub: 61,
      id: 160,
      name: "難題「火鼠の皮衣  -焦れぬ心-」",
      owner: "蓬莱山輝夜",
      face: 0,
      bonus: 3e7,
      lastSpell: !1
    },
    {
      sub: 61,
      id: 161,
      name: "神宝「サラマンダーシールド」",
      owner: "蓬莱山輝夜",
      face: 0,
      bonus: 3e7,
      lastSpell: !1
    },
    {
      sub: 61,
      id: 162,
      name: "神宝「サラマンダーシールド」",
      owner: "蓬莱山輝夜",
      face: 0,
      bonus: 3e7,
      lastSpell: !1
    },
    {
      sub: 67,
      id: 163,
      name: "難題「燕の子安貝  -永命線-」",
      owner: "蓬莱山輝夜",
      face: 0,
      bonus: 3e7,
      lastSpell: !1
    },
    {
      sub: 67,
      id: 164,
      name: "難題「燕の子安貝  -永命線-」",
      owner: "蓬莱山輝夜",
      face: 0,
      bonus: 3e7,
      lastSpell: !1
    },
    {
      sub: 67,
      id: 165,
      name: "神宝「ライフスプリングインフィニティ」",
      owner: "蓬莱山輝夜",
      face: 0,
      bonus: 3e7,
      lastSpell: !1
    },
    {
      sub: 67,
      id: 166,
      name: "神宝「ライフスプリングインフィニティ」",
      owner: "蓬莱山輝夜",
      face: 0,
      bonus: 3e7,
      lastSpell: !1
    },
    {
      sub: 71,
      id: 167,
      name: "難題「蓬莱の弾の枝  -虹色の弾幕-」",
      owner: "蓬莱山輝夜",
      face: 0,
      bonus: 3e7,
      lastSpell: !1
    },
    {
      sub: 71,
      id: 168,
      name: "難題「蓬莱の弾の枝  -虹色の弾幕-」",
      owner: "蓬莱山輝夜",
      face: 0,
      bonus: 3e7,
      lastSpell: !1
    },
    {
      sub: 71,
      id: 169,
      name: "神宝「蓬莱の玉の枝  -夢色の郷-」",
      owner: "蓬莱山輝夜",
      face: 0,
      bonus: 3e7,
      lastSpell: !1
    },
    {
      sub: 71,
      id: 170,
      name: "神宝「蓬莱の玉の枝  -夢色の郷-」",
      owner: "蓬莱山輝夜",
      face: 0,
      bonus: 3e7,
      lastSpell: !1
    },
    {
      sub: 77,
      id: 171,
      name: "「永夜返し  -初月-」",
      owner: "蓬莱山輝夜",
      face: 0,
      bonus: 33e6,
      lastSpell: !0
    },
    {
      sub: 77,
      id: 172,
      name: "「永夜返し  -三日月-」",
      owner: "蓬莱山輝夜",
      face: 0,
      bonus: 33e6,
      lastSpell: !0
    },
    {
      sub: 77,
      id: 173,
      name: "「永夜返し  -上つ弓張-」",
      owner: "蓬莱山輝夜",
      face: 0,
      bonus: 33e6,
      lastSpell: !0
    },
    {
      sub: 77,
      id: 174,
      name: "「永夜返し  -待宵-」",
      owner: "蓬莱山輝夜",
      face: 0,
      bonus: 33e6,
      lastSpell: !0
    },
    {
      sub: 80,
      id: 175,
      name: "「永夜返し  -子の刻-」",
      owner: "蓬莱山輝夜",
      face: 0,
      bonus: 33e6,
      lastSpell: !0
    },
    {
      sub: 80,
      id: 176,
      name: "「永夜返し  -子の二つ-」",
      owner: "蓬莱山輝夜",
      face: 0,
      bonus: 33e6,
      lastSpell: !0
    },
    {
      sub: 80,
      id: 177,
      name: "「永夜返し  -子の三つ-」",
      owner: "蓬莱山輝夜",
      face: 0,
      bonus: 33e6,
      lastSpell: !0
    },
    {
      sub: 80,
      id: 178,
      name: "「永夜返し  -子の四つ-」",
      owner: "蓬莱山輝夜",
      face: 0,
      bonus: 33e6,
      lastSpell: !0
    },
    {
      sub: 82,
      id: 179,
      name: "「永夜返し  -丑の刻-」",
      owner: "蓬莱山輝夜",
      face: 0,
      bonus: 33e6,
      lastSpell: !0
    },
    {
      sub: 82,
      id: 180,
      name: "「永夜返し  -丑の二つ-」",
      owner: "蓬莱山輝夜",
      face: 0,
      bonus: 33e6,
      lastSpell: !0
    },
    {
      sub: 82,
      id: 181,
      name: "「永夜返し  -丑三つ時-」",
      owner: "蓬莱山輝夜",
      face: 0,
      bonus: 33e6,
      lastSpell: !0
    },
    {
      sub: 82,
      id: 182,
      name: "「永夜返し  -丑の四つ-」",
      owner: "蓬莱山輝夜",
      face: 0,
      bonus: 33e6,
      lastSpell: !0
    },
    {
      sub: 84,
      id: 183,
      name: "「永夜返し  -寅の刻-」",
      owner: "蓬莱山輝夜",
      face: 0,
      bonus: 33e6,
      lastSpell: !0
    },
    {
      sub: 84,
      id: 184,
      name: "「永夜返し  -寅の二つ-」",
      owner: "蓬莱山輝夜",
      face: 0,
      bonus: 33e6,
      lastSpell: !0
    },
    {
      sub: 84,
      id: 185,
      name: "「永夜返し  -寅の三つ-」",
      owner: "蓬莱山輝夜",
      face: 0,
      bonus: 33e6,
      lastSpell: !0
    },
    {
      sub: 84,
      id: 186,
      name: "「永夜返し  -寅の四つ-」",
      owner: "蓬莱山輝夜",
      face: 0,
      bonus: 33e6,
      lastSpell: !0
    },
    {
      sub: 87,
      id: 187,
      name: "「永夜返し  -朝靄-」",
      owner: "蓬莱山輝夜",
      face: 0,
      bonus: 33e6,
      lastSpell: !0
    },
    {
      sub: 87,
      id: 188,
      name: "「永夜返し  -夜明け-」",
      owner: "蓬莱山輝夜",
      face: 0,
      bonus: 33e6,
      lastSpell: !0
    },
    {
      sub: 87,
      id: 189,
      name: "「永夜返し  -明けの明星-」",
      owner: "蓬莱山輝夜",
      face: 0,
      bonus: 33e6,
      lastSpell: !0
    },
    {
      sub: 87,
      id: 190,
      name: "「永夜返し  -世明け-」",
      owner: "蓬莱山輝夜",
      face: 0,
      bonus: 33e6,
      lastSpell: !0
    }
  ],
  scripts: U0,
  waves: W0
};
export {
  J0 as STAGE6B_SCRIPT
};
