import { r as t, n as e } from "./index-BsS59GeT.js";
const n = 1, c = 2, l = 4, r = 8, f = 16;
function* h(i) {
  let s = 0, a = 0;
  for (; s >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), s) {
      case 0: {
        if (i.setAnm(83), i.setExtraAnm(0, 48), i.setBounds(48, 48), i.setMisc160(200), i.clearScriptFlags(2), i.setMisc144(8, 4), i.movePolar(60, 4, 0.392699, 4), i.posX >= 192) {
          s = 2;
          break;
        }
        s = 1;
        break;
      }
      case 1: {
        i.f1 = 0.10472, s = 3;
        break;
      }
      case 2: {
        i.f1 = -0.10472, s = 3;
        break;
      }
      case 3: {
        i.f0 = -3.141593, i.ci0 = 5, s = 4;
        break;
      }
      case 4: {
        if (i.linkChildAttached(1, 0, 0, 600, -2, 100), i.f0 += 0.418879, i.linkChildAttached(3, 0, 0, 600, -2, 100), i.f0 += 0.418879, i.linkChildAttached(5, 0, 0, 600, -2, 100), i.f0 += 0.418879, --i.ci0 > 0) {
          s = 4;
          break;
        }
        s = 5;
        break;
      }
      case 5: {
        i.setHeadingSpeed(0.392699, 0), i.f0 = 1.570796, i.f1 = 0.05236, yield 180, s = 6;
        break;
      }
      case 6: {
        i.setHeadingSpeed(-1.570796, 0.6), yield 5e3, s = 7;
        break;
      }
      case 7:
        return;
      default:
        return;
    }
}
function* m(i) {
  let s = 0, a = 0;
  for (; s >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), s) {
      case 0: {
        i.setAnm(54), i.setBounds(24, 24), i.clearScriptFlags(16), i.setScriptFlags(3), i.setHitFlash(1), i.moveArc(20, i.f0, i.f1, 3), yield 20, s = 1;
        break;
      }
      case 1: {
        i.setAccel(6e3, i.f1, 0), i.callSubAlloc(0, 2), yield 5e3, s = 2;
        break;
      }
      case 2:
        return;
      default:
        return;
    }
}
function* w(i) {
  let s = 0, a = 0;
  for (; s >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), s) {
      case 0: {
        i.isDiff(n | f) && (i.f0 = 2), i.isDiff(c | f) && (i.f0 = 2.5), i.isDiff(l | f) && (i.f0 = 2.5), i.isDiff(r | f) && (i.f0 = 3), i.setShotRecord(0, 64, 0, 50, 1, 1.570796, i.f0), i.isDiff(n | f) && (i.f1 = 0.2), i.isDiff(c | f) && (i.f1 = 0.2), i.isDiff(l | f) && (i.f1 = 0.2), i.isDiff(r | f) && (i.f1 = 0.2), i.isDiff(n | f) && (i.i1 = 2), i.isDiff(c | f) && (i.i1 = 4), i.isDiff(l | f) && (i.i1 = 6), i.isDiff(r | f) && (i.i1 = 8), i.i0 = 8, s = 1;
        break;
      }
      case 1: {
        i.f0 = i.moveAngle - 3.141593, i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 2,
          color: 2,
          count: t(10001),
          rings: 1,
          speed: t(10016),
          speed2: 0.8,
          angle: t(10016),
          angleStep: 0,
          transform: 576
        }), yield i.delay(i.i0), s = 1;
        break;
      }
      default:
        return;
    }
}
function* D(i) {
  let s = 0, a = 0;
  for (; s >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), s) {
      case 0: {
        i.setAnm(54), i.setBounds(24, 24), i.clearScriptFlags(16), i.setScriptFlags(3), i.setHitFlash(1), i.moveArc(20, i.f0, i.f1, 3), yield 20, s = 1;
        break;
      }
      case 1: {
        i.setAccel(6e3, i.f1, 0), i.callSubAlloc(0, 4), yield 5e3, s = 2;
        break;
      }
      case 2:
        return;
      default:
        return;
    }
}
function* A(i) {
  let s = 0, a = 0;
  for (; s >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), s) {
      case 0: {
        i.i0 = 4, s = 1;
        break;
      }
      case 1: {
        i.f0 = i.moveAngle + 3.141593, i.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 1,
          color: 6,
          count: 4,
          rings: 1,
          speed: 1.4,
          speed2: 1.2,
          angle: t(10069),
          angleStep: 0.3926991,
          transform: 512
        }), yield i.delay(i.i0), s = 1;
        break;
      }
      default:
        return;
    }
}
function* M(i) {
  let s = 0, a = 0;
  for (; s >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), s) {
      case 0: {
        i.setAnm(54), i.setBounds(24, 24), i.clearScriptFlags(16), i.setScriptFlags(3), i.setHitFlash(1), i.moveArc(20, i.f0, i.f1, 3), yield 20, s = 1;
        break;
      }
      case 1: {
        i.setAccel(6e3, i.f1, 0), i.callSubAlloc(0, 6), yield 5e3, s = 2;
        break;
      }
      case 2:
        return;
      default:
        return;
    }
}
function* R(i) {
  let s = 0, a = 0;
  for (; s >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), s) {
      case 0: {
        i.i0 = 13, s = 1;
        break;
      }
      case 1: {
        if (i.f0 = i.moveAngle + 3.141593, i.isDiff(c | l | r | f) && i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 1,
          color: 2,
          count: 3,
          rings: 1,
          speed: 0.8,
          speed2: 1.2,
          angle: t(10069),
          angleStep: 0,
          transform: 514
        }), i.i0 <= 16) {
          s = 3;
          break;
        }
        s = 2;
        break;
      }
      case 2: {
        i.i0--, s = 3;
        break;
      }
      case 3: {
        yield i.delay(i.i0), s = 1;
        break;
      }
      default:
        return;
    }
}
function* F(i) {
  let s = 0, a = 0;
  for (; s >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), s) {
      case 0: {
        i.setAnm(94), i.setExtraAnm(0, 48), i.setBounds(24, 24), i.clearScriptFlags(2), i.setMisc160(20), i.playSfx(36), i.setMisc144(2, 2), i.i0 = i.randU31 % 7, i.f0 = i.i0 * 48, i.f1 = i.randF32 * 96, i.f0 += i.f1, i.setRelPos(i.f0, i.posY), yield 20, s = 1;
        break;
      }
      case 1: {
        if (i.i0 = 7 - i.i0, i.ci0 = 7, i.i0 >= 3) {
          s = 3;
          break;
        }
        s = 2;
        break;
      }
      case 2: {
        i.f7 = 0.069813, s = 4;
        break;
      }
      case 3: {
        i.f7 = -0.069813, s = 4;
        break;
      }
      case 4: {
        if (i.ci0 == i.i0) {
          s = 6;
          break;
        }
        s = 5;
        break;
      }
      case 5: {
        i.linkChildStandard(9, i.f1, i.posY, 600, -2, 100), s = 6;
        break;
      }
      case 6: {
        if (i.f1 += 48, --i.ci0 > 0) {
          s = 4;
          break;
        }
        s = 7;
        break;
      }
      case 7: {
        i.callSubAlloc(0, 8), yield 800, s = 8;
        break;
      }
      case 8: {
        i.moveRelative(40, 4, i.posX, -32), yield 40, s = 9;
        break;
      }
      case 9:
        return;
      default:
        return;
    }
}
function* v(i) {
  let s = 0, a = 0;
  for (; s >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), s) {
      case 0: {
        i.ci0 = 12, i.f0 = i.timer, i.isDiff(n | f) && (i.i0 = 1), i.isDiff(c | f) && (i.i0 = 5), i.isDiff(l | f) && (i.i0 = 7), i.isDiff(r | f) && (i.i0 = 9), i.isDiff(n | f) && (i.f1 = 3), i.isDiff(c | f) && (i.f1 = 4), i.isDiff(l | f) && (i.f1 = 4.5), i.isDiff(r | f) && (i.f1 = 5.5), s = 1;
        break;
      }
      case 1: {
        i.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 6,
          color: 6,
          count: t(1e4),
          rings: 1,
          speed: t(10017),
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.3926991,
          transform: 515
        }), yield 2, s = 2;
        break;
      }
      case 2: {
        if (--i.ci0 > 0) {
          s = 1;
          break;
        }
        s = 3;
        break;
      }
      case 3: {
        s = 0;
        break;
      }
      default:
        return;
    }
}
function* E(i) {
  let s = 0, a = 0;
  for (; s >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), s) {
      case 0: {
        i.setAnm(54), i.setMisc144(2, 2), i.setBounds(24, 24), i.clearScriptFlags(16), i.setScriptFlags(3), i.setHitFlash(1), yield 20, s = 1;
        break;
      }
      case 1: {
        i.callSubAlloc(0, 10), yield 800, s = 2;
        break;
      }
      case 2:
        return;
      default:
        return;
    }
}
function* x(i) {
  let s = 0, a = 0;
  for (; s >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), s) {
      case 0: {
        if (i.setShotRecord(0, 8192, 0, 180, -1, -1, -1), i.i0 >= 3) {
          s = 2;
          break;
        }
        s = 1;
        break;
      }
      case 1: {
        i.setShotRecord(1, 64, 1, 40, 1, 1.570796, 2.8), i.setShotRecord(2, 64, 0, 40, 1, -1.570796, 1.5), s = 3;
        break;
      }
      case 2: {
        i.setShotRecord(1, 64, 1, 40, 1, -1.570796, 2.8), i.setShotRecord(2, 64, 0, 40, 1, 1.570796, 1.5), s = 3;
        break;
      }
      case 3: {
        i.i0 = 14, i.isDiff(n | f) && (i.f0 = 1.570796), i.isDiff(c | f) && (i.f0 = 0.785398), i.isDiff(l | f) && (i.f0 = 0.785398), i.isDiff(r | f) && (i.f0 = 0.785398), i.isDiff(n | f) && (i.i1 = 2), i.isDiff(c | f) && (i.i1 = 4), i.isDiff(l | f) && (i.i1 = 5), i.isDiff(r | f) && (i.i1 = 6), s = 4;
        break;
      }
      case 4: {
        i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 5,
          color: 2,
          count: t(10001),
          rings: 1,
          speed: 3.2,
          speed2: 0.8,
          angle: t(10016),
          angleStep: 0,
          transform: 8768
        }), i.f0 += i.f7, i.f0 = e(i.f0), yield i.delay(i.i0), s = 4;
        break;
      }
      default:
        return;
    }
}
function* _(i) {
  let s = 0;
  yield 3;
  let a = 0;
  for (; s >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), s) {
      case 0: {
        i.setMisc147(1);
        return;
      }
      default:
        return;
    }
}
function* B(i) {
  let s = 0, a = 0;
  for (; s >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), s) {
      case 0: {
        i.complexBossInit(1), i.maxHp = 1, i.setMisc129(0), i.setDeathCallbackSub(-1), i.clearScriptFlags(3), i.f0 = i.randAngle, i.movePolar(60, 4, i.f0, 0.15), i.f0 = 0, i.ci0 = 6, yield 1, s = 1;
        break;
      }
      case 1: {
        i.f0 += 0.19635, i.f0 = e(i.f0), i.spawnEffectAngle(26, 1, -1, i.f0, 0, 0), yield 1, s = 2;
        break;
      }
      case 2: {
        i.f0 += 0.19635, i.f0 = e(i.f0), i.spawnEffectAngle(26, 1, -1, i.f0, 0, 0), yield 1, s = 3;
        break;
      }
      case 3: {
        i.f0 += 0.19635, i.f0 = e(i.f0), i.spawnEffectAngle(26, 1, -32640, i.f0, 0, 0), yield 1, s = 4;
        break;
      }
      case 4: {
        i.f0 += 0.19635, i.f0 = e(i.f0), i.spawnEffectAngle(26, 1, -32640, i.f0, 0, 0), yield 1, s = 5;
        break;
      }
      case 5: {
        i.f0 += 0.19635, i.f0 = e(i.f0), i.spawnEffectAngle(26, 1, -8323200, i.f0, 0, 0), yield 1, s = 6;
        break;
      }
      case 6: {
        i.f0 += 0.19635, i.f0 = e(i.f0), i.spawnEffectAngle(26, 1, -8323200, i.f0, 0, 0), yield 1, s = 7;
        break;
      }
      case 7: {
        i.f0 += 0.19635, i.f0 = e(i.f0), i.spawnEffectAngle(26, 1, -8355585, i.f0, 0, 0), yield 1, s = 8;
        break;
      }
      case 8: {
        i.f0 += 0.19635, i.f0 = e(i.f0), i.spawnEffectAngle(26, 1, -8355585, i.f0, 0, 0), yield 1, s = 9;
        break;
      }
      case 9: {
        i.f0 += 0.19635, i.f0 = e(i.f0), i.spawnEffectAngle(26, 1, -128, i.f0, 0, 0), yield 1, s = 10;
        break;
      }
      case 10: {
        if (i.f0 += 0.19635, i.f0 = e(i.f0), i.spawnEffectAngle(26, 1, -128, i.f0, 0, 0), i.playSfx(7), --i.ci0 > 0) {
          s = 1;
          break;
        }
        s = 11;
        break;
      }
      case 11: {
        i.playSfx(18), i.spawnEffectAngle(26, 64, -8355585, -999, 0, 0), i.endSpell(), i.setBossPresent(-1), i.maxHp = 0, yield 3e3, s = 12;
        break;
      }
      case 12:
        return;
      default:
        return;
    }
}
function* C(i) {
  let s = 0, a = 0;
  for (; s >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), s) {
      case 0: {
        if (i.complexBossInit(1), i.setMisc129(0), i.setDeathCallbackSub(-1), i.clearScriptFlags(3), i.f0 = i.randAngle, i.movePolar(60, 4, i.f0, 0.15), i.setMisc173(0), i.spellCardState == 0) {
          s = 4;
          break;
        }
        s = 1;
        break;
      }
      case 1: {
        i.f0 = 0, i.ci0 = 6, i.playSfx(7), s = 2;
        break;
      }
      case 2: {
        if (i.f0 += 0.19635, i.f0 = e(i.f0), i.spawnEffectAngle(26, 1, -1, i.f0, 0, 0), i.f0 += 0.19635, i.f0 = e(i.f0), i.spawnEffectAngle(26, 1, -1, i.f0, 0, 0), i.f0 += 0.19635, i.f0 = e(i.f0), i.spawnEffectAngle(26, 1, -32640, i.f0, 0, 0), i.f0 += 0.19635, i.f0 = e(i.f0), i.spawnEffectAngle(26, 1, -32640, i.f0, 0, 0), i.f0 += 0.19635, i.f0 = e(i.f0), i.spawnEffectAngle(26, 1, -8323200, i.f0, 0, 0), i.f0 += 0.19635, i.f0 = e(i.f0), i.spawnEffectAngle(26, 1, -8323200, i.f0, 0, 0), i.f0 += 0.19635, i.f0 = e(i.f0), i.spawnEffectAngle(26, 1, -8355585, i.f0, 0, 0), i.f0 += 0.19635, i.f0 = e(i.f0), i.spawnEffectAngle(26, 1, -8355585, i.f0, 0, 0), i.f0 += 0.19635, i.f0 = e(i.f0), i.spawnEffectAngle(26, 1, -128, i.f0, 0, 0), i.f0 += 0.19635, i.f0 = e(i.f0), i.spawnEffectAngle(26, 1, -128, i.f0, 0, 0), --i.ci0 > 0) {
          s = 2;
          break;
        }
        s = 3;
        break;
      }
      case 3: {
        i.playSfx(18), i.spawnEffectAngle(26, 64, -8355585, -999, 0, 0), s = 4;
        break;
      }
      case 4: {
        i.endSpell(), i.setBossPresent(-1), i.maxHp = 1, yield 2, s = 5;
        break;
      }
      case 5: {
        i.maxHp = 0, yield 3e3, s = 6;
        break;
      }
      case 6:
        return;
      default:
        return;
    }
}
function* T(i) {
  let s = 0, a = 0;
  for (; s >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), s) {
      case 0: {
        if (i.complexBossInit(1), i.setMisc129(0), i.setDeathCallbackSub(-1), i.clearScriptFlags(3), i.f0 = i.randAngle, i.movePolar(60, 4, i.f0, 0.15), i.setMisc173(0), i.ci3 = 0, i.spellCardState == 0) {
          s = 4;
          break;
        }
        s = 1;
        break;
      }
      case 1: {
        i.f0 = 0, i.ci0 = 6, i.playSfx(7), s = 2;
        break;
      }
      case 2: {
        if (i.f0 += 0.19635, i.f0 = e(i.f0), i.spawnEffectAngle(26, 1, -1, i.f0, 0, 0), i.f0 += 0.19635, i.f0 = e(i.f0), i.spawnEffectAngle(26, 1, -1, i.f0, 0, 0), i.f0 += 0.19635, i.f0 = e(i.f0), i.spawnEffectAngle(26, 1, -32640, i.f0, 0, 0), i.f0 += 0.19635, i.f0 = e(i.f0), i.spawnEffectAngle(26, 1, -32640, i.f0, 0, 0), i.f0 += 0.19635, i.f0 = e(i.f0), i.spawnEffectAngle(26, 1, -8323200, i.f0, 0, 0), i.f0 += 0.19635, i.f0 = e(i.f0), i.spawnEffectAngle(26, 1, -8323200, i.f0, 0, 0), i.f0 += 0.19635, i.f0 = e(i.f0), i.spawnEffectAngle(26, 1, -8355585, i.f0, 0, 0), i.f0 += 0.19635, i.f0 = e(i.f0), i.spawnEffectAngle(26, 1, -8355585, i.f0, 0, 0), i.f0 += 0.19635, i.f0 = e(i.f0), i.spawnEffectAngle(26, 1, -128, i.f0, 0, 0), i.f0 += 0.19635, i.f0 = e(i.f0), i.spawnEffectAngle(26, 1, -128, i.f0, 0, 0), --i.ci0 > 0) {
          s = 2;
          break;
        }
        s = 3;
        break;
      }
      case 3: {
        i.playSfx(18), i.spawnEffectAngle(26, 64, -8355585, -999, 0, 0), i.ci3 = 1, s = 4;
        break;
      }
      case 4: {
        if (i.endSpell(), i.ci3 == 0) {
          s = 6;
          break;
        }
        s = 5;
        break;
      }
      case 5: {
        yield i.delay(120), s = 6;
        break;
      }
      case 6: {
        i.setBossPresent(-1), i.maxHp = 1, yield 2, s = 7;
        break;
      }
      case 7: {
        i.maxHp = 0, yield 3e3, s = 8;
        break;
      }
      case 8:
        return;
      default:
        return;
    }
}
function* I(i) {
  let s = 0, a = 0;
  for (; s >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), s) {
      case 0: {
        i.clearScriptFlags(56), i.spawnEffectAt(63, 16, 0), yield 4, s = 1;
        break;
      }
      case 1: {
        i.spawnEffectAt(63, 16, 0), yield 4, s = 2;
        break;
      }
      case 2: {
        i.spawnEffectAt(63, 16, 0), yield 4, s = 3;
        break;
      }
      case 3: {
        i.spawnEffectAt(63, 16, 0), yield 4, s = 4;
        break;
      }
      case 4: {
        i.spawnEffectAt(63, 16, 0), yield 4, s = 5;
        break;
      }
      case 5: {
        i.spawnEffectAt(63, 16, 0), s = 6;
        break;
      }
      case 6: {
        i.spawnEffectAt(63, 4, 0), yield 4, s = 7;
        break;
      }
      case 7: {
        s = 6;
        break;
      }
      case 8:
        return;
      default:
        return;
    }
}
function* L(i) {
  let s = 0, a = 0;
  for (; s >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), s) {
      case 0: {
        i.setAnmScripts6Alt(0), i.clearScriptFlags(20), i.setBossPresent(0), i.setBounds(48, 48), i.setMisc160(60), i.setLives(13e3), i.setSpellTimer(5940, 21), i.setMisc129(2), i.setDeathCallbackSub(21), i.eclSetLives(1), i.setRelPos(32, -32), i.moveRelative(60, 4, 192, 128), i.setMisc126(17, 1), yield 60, s = 1;
        break;
      }
      case 1: {
        i.spawnEffect(6, 1050253722, 1060320051, 1050253722, 1124073472), yield 10, s = 2;
        break;
      }
      case 2: {
        i.spawnEffect(6, -1097229926, 1060320051, 1050253722, 1124073472), yield 10, s = 3;
        break;
      }
      case 3: {
        i.spawnEffect(6, 1050253722, 1060320051, -1097229926, 1124073472), yield 10, s = 4;
        break;
      }
      case 4: {
        i.spawnEffect(6, -1097229926, -1087163597, -1097229926, 1119879168), yield 10, s = 5;
        break;
      }
      case 5: {
        i.spawnEffect(6, 1050253722, -1087163597, -1097229926, 1119879168), yield 10, s = 6;
        break;
      }
      case 6: {
        i.spawnEffect(6, -1097229926, -1087163597, 1050253722, 1119879168), yield 10, s = 7;
        break;
      }
      case 7: {
        i.setMotionClamp(32, 48, 352, 128), yield 3e4, s = 8;
        break;
      }
      case 8: {
        s = 8;
        break;
      }
      default:
        return;
    }
}
function* P(i) {
  let s = 0, a = 0;
  for (; s >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), s) {
      case 0: {
        i.setScriptFlags(7), i.setMisc160(120), i.setBossPresent(0), i.setMisc144(10, 5), i.setLives(13e3), i.eclSetLives(0), i.setMotionClamp(32, 48, 352, 128), i.setMisc129(1), i.setDeathCallbackSub(26), i.setSpellTimer(2100, 21), i.setPhase(0, 1600, 21), i.setLifeBarSlice(0, 0, i.phase0, 16744576), i.ci3 = 0, s = 1;
        break;
      }
      case 1: {
        yield* d(i), s = 2;
        break;
      }
      case 2: {
        i.isDiff(n | f) && (i.ci0 = 8), i.isDiff(c | f) && (i.ci0 = 16), i.isDiff(l | f) && (i.ci0 = 20), i.isDiff(r | f) && (i.ci0 = 20), i.isDiff(n | f) && (i.f2 = 0.785398), i.isDiff(c | f) && (i.f2 = 0.392699), i.isDiff(l | f) && (i.f2 = 0.314159), i.isDiff(r | f) && (i.f2 = 0.314159), i.f0 = i.randAngle, i.f1 = 1, i.autoAnm(), s = 3;
        break;
      }
      case 3: {
        if (i.f0 = e(i.f0), i.linkChildRelative(19, 0, 0, 300, -2, 100), i.f0 += i.f2, --i.ci0 > 0) {
          s = 3;
          break;
        }
        s = 4;
        break;
      }
      case 4: {
        i.moveBounce(60, 4, 1), i.ci3++, yield 60, s = 5;
        break;
      }
      case 5: {
        s = 1;
        break;
      }
      default:
        return;
    }
}
function* d(i) {
  let s = 0, a = 0;
  for (; s >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), s) {
      case 0: {
        i.f2 = i.randAngle, i.ci0 = 32, i.isDiff(n | f) && (i.f3 = 1.2), i.isDiff(c | f) && (i.f3 = 1.5), i.isDiff(l | f) && (i.f3 = 2), i.isDiff(r | f) && (i.f3 = 2.5), i.isDiff(n | f) && (i.i2 = 3), i.isDiff(c | f) && (i.i2 = 10), i.isDiff(l | f) && (i.i2 = 10), i.isDiff(r | f) && (i.i2 = 14), i.setShotRecord(0, 8192, 0, 120, -1, -1, -1), s = 1;
        break;
      }
      case 1: {
        if (i.f0 = Math.cos(i.f2), i.f0 *= 64, i.f1 = Math.sin(i.f2), i.f1 *= 64, i.setShotOrigin(i.f0, i.f1), i.i0 = i.ci0 % 2, i.i0 != 0) {
          s = 3;
          break;
        }
        s = 2;
        break;
      }
      case 2: {
        i.setShotRecord(1, 64, 1, 60, 1, -2.513274, i.f3), s = 4;
        break;
      }
      case 3: {
        i.setShotRecord(1, 64, 1, 60, 1, 2.513274, i.f3), s = 4;
        break;
      }
      case 4: {
        if (i.setShotRecord(2, 16384, 0, 2, 4, -1, -1), i.f2 += 0.19635, i.f2 = e(i.f2), i.spawnShot({
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
        }), --i.ci0 > 0) {
          s = 1;
          break;
        }
        s = 5;
        break;
      }
      case 5:
        return;
      default:
        return;
    }
}
function* H(i) {
  let s = 0, a = 0;
  for (; s >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), s) {
      case 0: {
        i.setAnm(54), i.effectWithYoukai(1), i.setBounds(24, 24), i.setHitFlash(1), i.setHeadingSpeed(i.f0, i.f1), yield 1, s = 1;
        break;
      }
      case 1: {
        i.setScriptFlags(3), i.callSubAlloc(0, 20), yield 5e3, s = 2;
        break;
      }
      case 2:
        return;
      default:
        return;
    }
}
function* z(i) {
  let s = 0, a = 0;
  for (; s >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), s) {
      case 0: {
        i.f0 += 3.141593, i.f0 = e(i.f0), i.ci0 = 10, i.setShotRecord(0, 128, 0, 60, 1, 0, 1.5), s = 1;
        break;
      }
      case 1: {
        i.isDiff(n | c | l | r | f) && i.spawnShot({
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
        }), i.isDiff(n | c | l | r | f) && i.spawnShot({
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
        }), yield 20, s = 2;
        break;
      }
      case 2: {
        if (--i.ci0 > 0) {
          s = 1;
          break;
        }
        s = 3;
        break;
      }
      case 3:
        return;
      default:
        return;
    }
}
function* O(i) {
  let s = 0, a = 0;
  for (; s >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), s) {
      case 0: {
        i.setScriptFlags(4), i.setMisc144(10, 5), i.setMisc160(320), i.moveRelative(60, 4, 192, 128), i.setSpellTimer(2400, 26), i.setMisc129(1), i.setDeathCallbackSub(27), i.setShotRepeat(0), i.enemyFunc95(), i.setShotSound(-1, -1), i.clearScriptFlags(4), i.setShotOrigin(0, 0), i.setSpellTimer(3600, 26), i.resetSpellTimerSub(), i.setSpellTimerElapsed(0), i.ci3 = 0, i.moveRelative(90, 4, 192, 128), i.isDiff(n | f) && i.startSpell("天丸「壺中の天地」", "八意永琳", 119, 0, 3e7), i.isDiff(c | f) && i.startSpell("天丸「壺中の天地」", "八意永琳", 120, 0, 3e7), i.isDiff(l | f) && i.startSpell("天丸「壺中の天地」", "八意永琳", 121, 0, 3e7), i.isDiff(r | f) && i.startSpell("天丸「壺中の天地」", "八意永琳", 122, 0, 3e7), yield 90, s = 1;
        break;
      }
      case 1: {
        i.setScriptFlags(4), i.setMisc160(420), i.setSpellTimer(2400, 26), i.setMisc129(1), i.setDeathCallbackSub(27), i.eclSetLives(0), i.ci3 = 0, s = 2;
        break;
      }
      case 2: {
        if (i.ci0 = 16, i.f2 = 1.570796, i.f3 = 400, i.ci1 = 68, i.f5 = 0.05236, i.f6 = i.playerX, i.f7 = i.playerY, i.f6 >= 88) {
          s = 4;
          break;
        }
        s = 3;
        break;
      }
      case 3: {
        i.f6 = 88, s = 6;
        break;
      }
      case 4: {
        if (i.f6 <= 296) {
          s = 6;
          break;
        }
        s = 5;
        break;
      }
      case 5: {
        i.f6 = 296, s = 6;
        break;
      }
      case 6: {
        if (i.f7 >= 88) {
          s = 8;
          break;
        }
        s = 7;
        break;
      }
      case 7: {
        i.f7 = 88, s = 10;
        break;
      }
      case 8: {
        if (i.f7 <= 360) {
          s = 10;
          break;
        }
        s = 9;
        break;
      }
      case 9: {
        i.f7 = 360, s = 10;
        break;
      }
      case 10: {
        i.f4 = 0 - i.f2, i.f0 = Math.cos(i.f4), i.f0 *= 80, i.f1 = Math.sin(i.f4), i.f1 *= 80, i.f0 += i.f6, i.f1 += i.f7, i.linkChildRelative(25, 0, 0, 100, -2, 100), i.f2 += 0.392699, i.f2 = e(i.f2), i.ci1 -= 4, yield 4, s = 11;
        break;
      }
      case 11: {
        if (--i.ci0 > 0) {
          s = 10;
          break;
        }
        s = 12;
        break;
      }
      case 12: {
        i.moveBounce(60, 4, 1), i.ci3++, yield 240, s = 13;
        break;
      }
      case 13: {
        s = 2;
        break;
      }
      default:
        return;
    }
}
function* X(i) {
  let s = 0, a = 0;
  for (; s >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), s) {
      case 0: {
        i.f1 = Math.atan2(i.posY - i.f7, i.posX - i.f6), i.f0 = i.f1 + 1.570796, i.f0 = e(i.f0), i.spawnShot({
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
        }), i.f0 = i.f1 - 1.570796, i.f0 = e(i.f0), i.spawnShot({
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
        }), i.f0 = i.f1, i.f0 = e(i.f0), i.spawnShot({
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
        }), yield 8, s = 1;
        break;
      }
      case 1: {
        s = 0;
        break;
      }
      case 2:
        return;
      default:
        return;
    }
}
function* Y(i) {
  let s = 0, a = 0;
  for (; s >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), s) {
      case 0: {
        i.ci1 *= 3, yield i.delay(i.ci1), i.isDiff(n | f) && (i.ci2 = 200), i.isDiff(c | f) && (i.ci2 = 90), i.isDiff(l | f) && (i.ci2 = 70), i.isDiff(r | f) && (i.ci2 = 60), i.isDiff(n | f) && (i.f2 = 0.7), i.isDiff(c | f) && (i.f2 = 0.7), i.isDiff(l | f) && (i.f2 = 0.9), i.isDiff(r | f) && (i.f2 = 1.2), s = 1;
        break;
      }
      case 1: {
        i.f1 = Math.atan2(i.f7 - i.posY, i.f6 - i.posX), i.f0 = i.randF32S * 0.392699, i.f0 += i.f1, i.f0 = e(i.f0), i.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 0,
          color: 6,
          count: 1,
          rings: 1,
          speed: t(10018),
          speed2: 0.8,
          angle: t(10016),
          angleStep: 0.1308997,
          transform: 514
        }), yield i.delay(i.ci2), i.f0 = i.randF32S * 0.19635, i.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 0,
          color: 2,
          count: 1,
          rings: 1,
          speed: t(10018),
          speed2: 0.8,
          angle: t(10016),
          angleStep: 0.1308997,
          transform: 514
        }), yield i.delay(i.ci2), s = 1;
        break;
      }
      case 2:
        return;
      default:
        return;
    }
}
function* N(i) {
  let s = 0, a = 0;
  for (; s >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), s) {
      case 0: {
        if (i.f6 = i.playerX, i.f7 = i.playerY, i.f6 >= 88) {
          s = 2;
          break;
        }
        s = 1;
        break;
      }
      case 1: {
        i.f6 = 88, s = 4;
        break;
      }
      case 2: {
        if (i.f6 <= 296) {
          s = 4;
          break;
        }
        s = 3;
        break;
      }
      case 3: {
        i.f6 = 296, s = 4;
        break;
      }
      case 4: {
        if (i.f7 >= 88) {
          s = 6;
          break;
        }
        s = 5;
        break;
      }
      case 5: {
        i.f7 = 88, s = 8;
        break;
      }
      case 6: {
        if (i.f7 <= 360) {
          s = 8;
          break;
        }
        s = 7;
        break;
      }
      case 7: {
        i.f7 = 360, s = 8;
        break;
      }
      case 8: {
        i.f1 = Math.atan2(i.f7 - i.ef7, i.f6 - i.ef6), i.setHeadingSpeed(i.f1, 0.2), i.f2 = Math.cos(i.f1), i.f2 *= 0.2, i.f3 = Math.sin(i.f1), i.f3 *= 0.2, i.ef6 += i.f2, i.ef7 += i.f3, yield 1, s = 9;
        break;
      }
      case 9: {
        s = 0;
        break;
      }
      default:
        return;
    }
}
function* U(i) {
  let s = 0, a = 0;
  for (; s >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), s) {
      case 0: {
        i.setAnm(54), i.setBounds(24, 24), i.clearScriptFlags(16), i.setHitFlash(1), i.cxf2 = Math.cos(i.f2), i.cxf2 *= i.f3, i.cxf3 = Math.sin(i.f2), i.cxf3 *= i.f3, i.cf0 = i.posX, i.cf1 = i.posY, i.f2 = i.randSignF(400), i.interpSlot(10042, 120, 7, 0, i.cf0, i.f0, i.cxf2, i.f2), i.f2 = i.randSignF(400), i.interpSlot(10043, 120, 7, 0, i.cf1, i.f1, i.cxf3, i.f2), i.ef6 = i.f6, i.ef7 = i.f7, yield 120, s = 1;
        break;
      }
      case 1: {
        i.setHeadingSpeed(0, 0), yield i.delay(i.ci1), i.callSubAlloc(2, 24), yield 30, s = 2;
        break;
      }
      case 2: {
        i.callSubAlloc(0, 22), i.callSubAlloc(1, 23), yield 200, s = 3;
        break;
      }
      case 3: {
        i.moveOrbit(6e3, i.ef6, i.ef7, i.f4, i.f5, 80, 1), i.callSubAlloc(2, -1), yield 120, s = 4;
        break;
      }
      case 4: {
        i.setScriptFlags(16), yield 5e3, s = 5;
        break;
      }
      case 5:
        return;
      default:
        return;
    }
}
function* G(i) {
  let s = 0, a = 0;
  for (; s >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), s) {
      case 0: {
        i.endSpell(), i.setMisc147(1), i.setBossPresent(-1), i.moveRelative(60, 1, 256, -32), i.clearMotionClamp(), yield 60, s = 1;
        break;
      }
      case 1:
        return;
      default:
        return;
    }
}
function* j(i) {
  let s = 0, a = 0;
  for (; s >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), s) {
      case 0: {
        i.endSpell(), i.spawnItem(3), i.setMisc147(1), i.setBossPresent(-1), i.moveRelative(60, 1, 256, -32), i.clearMotionClamp(), yield 60, s = 1;
        break;
      }
      case 1:
        return;
      default:
        return;
    }
}
function* V(i) {
  let s = 0, a = 0;
  for (; s >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), s) {
      case 0: {
        i.setAnmScripts6Alt(0), i.clearScriptFlags(3), i.clearScriptFlags(20), i.setBossPresent(0), i.setBounds(48, 32), i.setMisc160(60), i.eclSetLives(0), i.setSpellTimer(18e4, 52), i.setRelPos(-32, -32), i.moveRelative(60, 4, 192, 128), i.setMisc126(33, 1), yield 100, s = 1;
        break;
      }
      case 1: {
        s = 1;
        break;
      }
      default:
        return;
    }
}
function* W(i) {
  let s = 0, a = 0;
  for (; s >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), s) {
      case 0: {
        i.setAnmAlt(6), i.setBossPresent(1), i.setMisc159(0), i.setRelPos(192, 96), i.clearScriptFlags(3), i.clearScriptFlags(20), i.setBounds(48, 32), i.setMisc160(60), i.eclSetLives(0), i.setSpellTimer(18e4, 52), yield* o(i), s = 1;
        break;
      }
      case 1: {
        i.setMisc126(30, 1), yield 100, s = 2;
        break;
      }
      case 2: {
        s = 2;
        break;
      }
      default:
        return;
    }
}
function* q(i) {
  let s = 0, a = 0;
  for (; s >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), s) {
      case 0: {
        i.setBossPresent(-1), i.clearScriptFlags(48), i.setMisc160(120), i.setMisc144(10, 5), i.setLives(2e4), i.eclSetLives(2), i.setMisc129(3), i.setDeathCallbackSub(51), i.spawnEffect(6, 1050253722, 1060320051, 1050253722, 1124073472), yield 10, s = 1;
        break;
      }
      case 1: {
        i.spawnEffect(6, -1097229926, 1060320051, 1050253722, 1124073472), yield 10, s = 2;
        break;
      }
      case 2: {
        i.spawnEffect(6, 1050253722, 1060320051, -1097229926, 1124073472), yield 10, s = 3;
        break;
      }
      case 3: {
        i.spawnEffect(6, -1097229926, -1087163597, -1097229926, 1119879168), yield 10, s = 4;
        break;
      }
      case 4: {
        i.spawnEffect(6, 1050253722, -1087163597, -1097229926, 1119879168), yield 10, s = 5;
        break;
      }
      case 5: {
        i.spawnEffect(6, -1097229926, -1087163597, 1050253722, 1119879168), yield 10, s = 6;
        break;
      }
      case 6: {
        i.setMotionClamp(32, 48, 352, 128), i.i0 = 20, yield* o(i), s = 7;
        break;
      }
      case 7: {
        i.setBossPresent(-1), i.setMisc136(17, 0), yield 200, s = 8;
        break;
      }
      case 8: {
        i.setBossPresent(1), i.setScriptFlags(3), yield 800, s = 9;
        break;
      }
      case 9: {
        i.nop(), s = 10;
        break;
      }
      case 10: {
        i.spawnItem(1), yield 60, s = 11;
        break;
      }
      case 11: {
        s = 10;
        break;
      }
      default:
        return;
    }
}
function* J(i) {
  let s = 0, a = 0;
  for (; s >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), s) {
      case 0: {
        i.setAnmAlt(6), i.setBossPresent(1), i.setMisc159(0), i.setRelPos(192, 96), i.clearScriptFlags(3), i.clearScriptFlags(20), i.setBounds(48, 32), i.setMisc160(60), i.eclSetLives(0), i.setSpellTimer(18e4, 52), yield* o(i), s = 1;
        break;
      }
      case 1: {
        yield* b(i);
        return;
      }
      default:
        return;
    }
}
function* b(i) {
  let s = 0, a = 0;
  for (; s >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), s) {
      case 0: {
        i.clearScriptFlags(48), i.setMisc160(120), i.setMisc144(10, 5), i.setLives(2e4), i.eclSetLives(2), i.setMisc129(3), i.setDeathCallbackSub(51), i.spawnEffect(6, 1050253722, 1060320051, 1050253722, 1124073472), yield 10, s = 1;
        break;
      }
      case 1: {
        i.spawnEffect(6, -1097229926, 1060320051, 1050253722, 1124073472), yield 10, s = 2;
        break;
      }
      case 2: {
        i.spawnEffect(6, 1050253722, 1060320051, -1097229926, 1124073472), yield 10, s = 3;
        break;
      }
      case 3: {
        i.spawnEffect(6, -1097229926, -1087163597, -1097229926, 1119879168), yield 10, s = 4;
        break;
      }
      case 4: {
        i.spawnEffect(6, 1050253722, -1087163597, -1097229926, 1119879168), yield 10, s = 5;
        break;
      }
      case 5: {
        i.spawnEffect(6, -1097229926, -1087163597, 1050253722, 1119879168), yield 10, s = 6;
        break;
      }
      case 6: {
        i.setMotionClamp(32, 48, 352, 128), i.i0 = 20, i.setScriptFlags(3), yield 800, s = 7;
        break;
      }
      case 7: {
        i.nop(), s = 8;
        break;
      }
      case 8: {
        i.spawnItem(1), yield 60, s = 9;
        break;
      }
      case 9: {
        s = 8;
        break;
      }
      default:
        return;
    }
}
function* K(i) {
  let s = 0, a = 0;
  for (; s >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), s) {
      case 0: {
        i.setScriptFlags(4), i.setScriptFlags(3), i.setMisc160(120), i.setBossPresent(0), i.setMisc144(10, 5), i.setLives(18e3), i.eclSetLives(4), i.setMisc129(2), i.setDeathCallbackSub(36), i.setSpellTimer(2400, 52), i.setPhase(0, 2200, 52), i.setLifeBarSlice(0, 0, i.phase0, 16744576), i.spawnEffect(6, 1050253722, 1060320051, 1050253722, 1124073472), yield 10, s = 1;
        break;
      }
      case 1: {
        i.spawnEffect(6, -1097229926, 1060320051, 1050253722, 1124073472), yield 10, s = 2;
        break;
      }
      case 2: {
        i.spawnEffect(6, 1050253722, 1060320051, -1097229926, 1124073472), yield 10, s = 3;
        break;
      }
      case 3: {
        i.spawnEffect(6, -1097229926, -1087163597, -1097229926, 1119879168), yield 10, s = 4;
        break;
      }
      case 4: {
        i.spawnEffect(6, 1050253722, -1087163597, -1097229926, 1119879168), yield 10, s = 5;
        break;
      }
      case 5: {
        i.spawnEffect(6, -1097229926, -1087163597, 1050253722, 1119879168), yield 10, s = 6;
        break;
      }
      case 6: {
        i.setMotionClamp(32, 48, 352, 128), i.i0 = 20, yield* o(i), s = 7;
        break;
      }
      case 7: {
        yield* u(i), s = 8;
        break;
      }
      case 8: {
        i.moveBounce(60, 4, 1), yield 60, s = 9;
        break;
      }
      case 9: {
        yield* k(i), s = 10;
        break;
      }
      case 10: {
        i.moveBounce(60, 4, 1), yield 60, s = 11;
        break;
      }
      case 11: {
        s = 7;
        break;
      }
      default:
        return;
    }
}
function* u(i) {
  let s = 0, a = 0;
  for (; s >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), s) {
      case 0: {
        i.autoAnm(), i.f2 = i.randAngle, i.ci0 = 32, i.isDiff(n | f) && (i.i6 = 10), i.isDiff(c | f) && (i.i6 = 15), i.isDiff(l | f) && (i.i6 = 17), i.isDiff(r | f) && (i.i6 = 22), i.isDiff(n | f) && (i.f6 = 1), i.isDiff(c | f) && (i.f6 = 1), i.isDiff(l | f) && (i.f6 = 1), i.isDiff(r | f) && (i.f6 = 1.3), i.isDiff(n | f) && (i.f7 = 0.490874), i.isDiff(c | f) && (i.f7 = 0.245437), i.isDiff(l | f) && (i.f7 = 0.245437), i.isDiff(r | f) && (i.f7 = 0.245437), i.setShotRecord(0, 8192, 0, 120, -1, -1, -1), s = 1;
        break;
      }
      case 1: {
        if (i.f0 = Math.cos(i.f2), i.f0 *= 64, i.f1 = Math.sin(i.f2), i.f1 *= 64, i.setShotOrigin(i.f0, i.f1), i.i0 = i.ci0 % 2, i.i0 != 0) {
          s = 3;
          break;
        }
        s = 2;
        break;
      }
      case 2: {
        i.setShotRecord(1, 64, 1, 60, 1, -2.513274, i.f6), s = 4;
        break;
      }
      case 3: {
        i.setShotRecord(1, 64, 1, 60, 1, 2.513274, i.f6), s = 4;
        break;
      }
      case 4: {
        if (i.setShotRecord(2, 131072, 0, i.ci0, -1, -1, -1), i.setShotRecord(3, 16384, 0, 2, 6, -1, -1), i.f2 += 0.19635, i.f2 = e(i.f2), i.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 17,
          color: 5,
          count: t(10006),
          rings: 1,
          speed: 3.5,
          speed2: 0.8,
          angle: t(10018),
          angleStep: t(10023),
          transform: 156224
        }), --i.ci0 > 0) {
          s = 1;
          break;
        }
        s = 5;
        break;
      }
      case 5:
        return;
      default:
        return;
    }
}
function* k(i) {
  let s = 0, a = 0;
  for (; s >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), s) {
      case 0: {
        i.autoAnm(), i.f2 = i.randAngle, i.ci0 = 32, i.isDiff(n | f) && (i.i6 = 10), i.isDiff(c | f) && (i.i6 = 15), i.isDiff(l | f) && (i.i6 = 17), i.isDiff(r | f) && (i.i6 = 22), i.isDiff(n | f) && (i.f6 = 1), i.isDiff(c | f) && (i.f6 = 1), i.isDiff(l | f) && (i.f6 = 1.2), i.isDiff(r | f) && (i.f6 = 1.3), i.isDiff(n | f) && (i.f7 = 0.490874), i.isDiff(c | f) && (i.f7 = 0.245437), i.isDiff(l | f) && (i.f7 = 0.245437), i.isDiff(r | f) && (i.f7 = 0.245437), i.setShotRecord(0, 8192, 0, 120, -1, -1, -1), s = 1;
        break;
      }
      case 1: {
        if (i.f0 = Math.cos(i.f2), i.f0 *= 64, i.f1 = Math.sin(i.f2), i.f1 *= 64, i.setShotOrigin(i.f0, i.f1), i.i0 = i.ci0 % 2, i.i0 != 0) {
          s = 3;
          break;
        }
        s = 2;
        break;
      }
      case 2: {
        i.setShotRecord(1, 64, 1, 60, 1, -2.513274, i.f6), s = 4;
        break;
      }
      case 3: {
        i.setShotRecord(1, 64, 1, 60, 1, 2.513274, i.f6), s = 4;
        break;
      }
      case 4: {
        if (i.setShotRecord(2, 131072, 0, i.ci0, -1, -1, -1), i.setShotRecord(3, 16384, 0, 2, 2, -1, -1), i.f2 -= 0.19635, i.f2 = e(i.f2), i.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 17,
          color: 1,
          count: t(10006),
          rings: 1,
          speed: 3.5,
          speed2: 0.8,
          angle: t(10018),
          angleStep: t(10023),
          transform: 156224
        }), --i.ci0 > 0) {
          s = 1;
          break;
        }
        s = 5;
        break;
      }
      case 5:
        return;
      default:
        return;
    }
}
function* Q(i) {
  let s = 0, a = 0;
  for (; s >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), s) {
      case 0: {
        i.setScriptFlags(4), i.setScriptFlags(3), i.setMisc160(240), i.setTimeout(-1), i.endSpell(), i.setBossPresent(0), i.setMisc147(2), i.setMisc144(10, 5), i.setLives(18e3), i.eclSetLives(3), i.setMotionClamp(32, 48, 352, 128), i.setMisc129(2), i.setDeathCallbackSub(40), i.setSpellTimer(2400, 56), i.setPhase(0, 2200, 56), i.setLifeBarSlice(0, 0, i.phase0, 16744576), i.moveRelative(60, 4, 192, 128), i.i0 = 20, yield 80, s = 1;
        break;
      }
      case 1: {
        yield* o(i), s = 2;
        break;
      }
      case 2: {
        i.setMisc136(15, 0), i.spawnEnemy(15, 0, 0, 0, 1e3, -2, 10), yield 30, s = 3;
        break;
      }
      case 3: {
        i.nop(), i.ci3 = 0, s = 4;
        break;
      }
      case 4: {
        i.f0 = i.randAngle, i.f1 = 2, i.ci0 = 12, i.autoAnm(), s = 5;
        break;
      }
      case 5: {
        if (i.linkChildRelative(39, 0, 0, 1500, 1, 1e5), i.f0 += 0.523599, i.f0 = e(i.f0), --i.ci0 > 0) {
          s = 5;
          break;
        }
        s = 6;
        break;
      }
      case 6: {
        if (i.moveBounce(60, 4, 1), i.ci3 != 0) {
          s = 8;
          break;
        }
        s = 7;
        break;
      }
      case 7: {
        i.callSubAlloc(0, 37), s = 8;
        break;
      }
      case 8: {
        i.ci3++, yield 30, s = 9;
        break;
      }
      case 9: {
        s = 4;
        break;
      }
      default:
        return;
    }
}
function* Z(i) {
  let s = 0, a = 0;
  for (; s >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), s) {
      case 0: {
        i.isDiff(n | f) && (i.i0 = 1), i.isDiff(c | f) && (i.i0 = 2), i.isDiff(l | f) && (i.i0 = 3), i.isDiff(r | f) && (i.i0 = 4), i.isDiff(n | f) && (i.i1 = 1), i.isDiff(c | f) && (i.i1 = 1), i.isDiff(l | f) && (i.i1 = 2), i.isDiff(r | f) && (i.i1 = 2), i.f0 = i.randAngle, s = 1;
        break;
      }
      case 1: {
        i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 2,
          color: 2,
          count: t(1e4),
          rings: t(10001),
          speed: 2.2,
          speed2: 1,
          angle: t(10016),
          angleStep: 0.1308997,
          transform: 514
        }), i.f0 += 0.03927, i.f0 = e(i.f0), yield 2, s = 2;
        break;
      }
      case 2: {
        i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 2,
          color: 2,
          count: t(1e4),
          rings: t(10001),
          speed: 1.2,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.1308997,
          transform: 514
        }), i.f0 += 0.03927, i.f0 = e(i.f0), yield 2, s = 3;
        break;
      }
      case 3: {
        s = 1;
        break;
      }
      default:
        return;
    }
}
function* $(i) {
  let s = 0, a = 0;
  for (; s >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), s) {
      case 0: {
        i.setGaugeTimer(0, 0, 0, 0, 0, 0), s = 1;
        break;
      }
      case 1: {
        i.cf0 = i.posX + 16, i.cf1 = i.posY + 16, i.f0 = i.randF32S * 32, i.cf0 += i.f0, i.f0 = i.randF32S * 32, i.cf1 += i.f0, i.i0 = i.cf0i, i.i1 = i.cf1i, i.i0 = Math.trunc(i.i0 / 16), i.i1 = Math.trunc(i.i1 / 16), i.i0 *= 16, i.i1 *= 16, i.cf0 = i.i0, i.cf1 = i.i1, i.cf0 = i.cf0 - i.posX, i.cf1 = i.cf1 - i.posY, i.setShotOrigin(i.cf0, i.cf1), i.setShotRecord(0, 131072, 0, 120, -1, -1, -1), i.setShotRecord(1, 524288, 0, 27, -1, -1, -1), i.setShotRecord(2, 262144, 0, -1, -1, -1, -1), i.spawnShot({
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
          transform: 918024
        }), yield 4, s = 2;
        break;
      }
      case 2: {
        s = 1;
        break;
      }
      case 3:
        return;
      default:
        return;
    }
}
function* i0(i) {
  let s = 0, a = 0;
  for (; s >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), s) {
      case 0: {
        i.setAnm(53), i.setHitFlash(1), i.setMisc145(1), i.setBounds(24, 24), i.setMisc160(30), i.setHeadingSpeed(i.f0, i.f1), yield 10, s = 1;
        break;
      }
      case 1: {
        i.callSubAlloc(0, 38), yield 3e4, s = 2;
        break;
      }
      case 2:
        return;
      default:
        return;
    }
}
function* s0(i) {
  let s = 0, a = 0;
  for (; s >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), s) {
      case 0: {
        i.setScriptFlags(4), i.setScriptFlags(3), i.setMisc160(420), i.setTimeout(-1), i.endSpell(), i.setBossPresent(0), i.setMisc147(3), i.setMisc144(10, 5), i.setLives(2e4), i.eclSetLives(2), i.setMotionClamp(32, 48, 352, 128), i.setMisc129(2), i.setDeathCallbackSub(44), i.setSpellTimer(3600, 63), i.setPhase(0, 2200, 63), i.setLifeBarSlice(0, 0, i.phase0, 16744576), i.moveRelative(60, 4, 192, 128), i.i0 = 20, yield 80, s = 1;
        break;
      }
      case 1: {
        yield* o(i), s = 2;
        break;
      }
      case 2: {
        i.setMisc136(15, 0), yield 30, s = 3;
        break;
      }
      case 3: {
        i.nop(), i.ci3 = 0, s = 4;
        break;
      }
      case 4: {
        i.f0 = i.randAngle, i.f1 = 0.010472, i.isDiff(n | f) && (i.ci0 = 6), i.isDiff(c | f) && (i.ci0 = 12), i.isDiff(l | f) && (i.ci0 = 12), i.isDiff(r | f) && (i.ci0 = 12), i.isDiff(n | f) && (i.f7 = 1.047198), i.isDiff(c | f) && (i.f7 = 0.523599), i.isDiff(l | f) && (i.f7 = 0.523599), i.isDiff(r | f) && (i.f7 = 0.523599), i.i0 = 1, i.i1 = 6, i.i2 = 3, i.f2 = 0.785398, i.autoAnm(), s = 5;
        break;
      }
      case 5: {
        if (i.linkChildRelative(43, 0, 0, 1500, -2, 1e5), i.f0 += i.f7, i.f0 = e(i.f0), --i.ci0 > 0) {
          s = 5;
          break;
        }
        s = 6;
        break;
      }
      case 6: {
        i.moveBounce(60, 4, 1), yield 60, s = 7;
        break;
      }
      case 7: {
        i.f0 = i.randAngle, i.f1 = -0.010472, i.isDiff(n | f) && (i.ci0 = 6), i.isDiff(c | f) && (i.ci0 = 12), i.isDiff(l | f) && (i.ci0 = 12), i.isDiff(r | f) && (i.ci0 = 12), i.isDiff(n | f) && (i.f7 = 1.047198), i.isDiff(c | f) && (i.f7 = 0.523599), i.isDiff(l | f) && (i.f7 = 0.523599), i.isDiff(r | f) && (i.f7 = 0.523599), i.i0 = 0, i.i1 = 2, i.i2 = 1, i.f2 = -0.785398, i.autoAnm(), s = 8;
        break;
      }
      case 8: {
        if (i.linkChildRelative(43, 0, 0, 1500, -2, 1e5), i.f0 += i.f7, i.f0 = e(i.f0), --i.ci0 > 0) {
          s = 8;
          break;
        }
        s = 9;
        break;
      }
      case 9: {
        i.ci3++, yield 160, s = 10;
        break;
      }
      case 10: {
        i.moveBounce(60, 4, 1), i.callSubAlloc(0, 41), yield 60, s = 11;
        break;
      }
      case 11: {
        s = 4;
        break;
      }
      default:
        return;
    }
}
function* f0(i) {
  let s = 0, a = 0;
  for (; s >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), s) {
      case 0: {
        i.isDiff(n | f) && i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 17,
          color: 5,
          count: 36,
          rings: 1,
          speed: 1,
          speed2: 0.5,
          angle: t(10082),
          angleStep: 0,
          transform: 514
        }), i.isDiff(c | f) && i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 17,
          color: 5,
          count: 56,
          rings: 1,
          speed: 1,
          speed2: 0.5,
          angle: t(10082),
          angleStep: 0,
          transform: 514
        }), i.isDiff(l | f) && i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 17,
          color: 5,
          count: 56,
          rings: 2,
          speed: 1.2,
          speed2: 0.5,
          angle: t(10082),
          angleStep: 0,
          transform: 514
        }), i.isDiff(r | f) && i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 17,
          color: 5,
          count: 64,
          rings: 2,
          speed: 1.8,
          speed2: 1,
          angle: t(10082),
          angleStep: 0,
          transform: 514
        }), yield 60, s = 1;
        break;
      }
      case 1: {
        s = 0;
        break;
      }
      default:
        return;
    }
}
function* a0(i) {
  let s = 0, a = 0;
  for (; s >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), s) {
      case 0: {
        i.setGaugeTimer(0, 0, 0, 0, 0, 0), i.cf0 = i.cf0 - i.posX, i.cf1 = i.cf1 - i.posY, i.setShotOrigin(i.cf0, i.cf1), i.setShotRecord(0, 131072, 0, 200, -1, -1, -1), i.setShotRecord(1, 524288, 0, 27, -1, -1, -1), yield 50, s = 1;
        break;
      }
      case 1: {
        i.ci0 = 8, s = 2;
        break;
      }
      case 2: {
        i.f0 = i.randF32 * 0.5, i.f0 += 1, i.f0 /= 120, i.setShotRecord(2, 16, 0, 120, -1, i.f0, -999), i.cf0 = i.randF32S * 32, i.cf1 = i.randF32S * 32, i.setShotOrigin(i.cf0, i.cf1), i.f0 = i.orbitAngle + i.f2, i.f0 = e(i.f0), i.spawnShot({
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
          transform: 655890
        }), yield 8, s = 3;
        break;
      }
      case 3: {
        if (--i.ci0 > 0) {
          s = 2;
          break;
        }
        s = 4;
        break;
      }
      case 4:
        return;
      default:
        return;
    }
}
function* t0(i) {
  let s = 0, a = 0;
  for (; s >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), s) {
      case 0: {
        i.setAnm(53), i.setHitFlash(1), i.clearScriptFlags(16), i.setBounds(24, 24), i.setMisc160(30), i.moveOrbit(600, i.posX, i.posY, i.f0, i.f1, 0, 2), yield 10, s = 1;
        break;
      }
      case 1: {
        i.callSubAlloc(0, 42), yield 200, s = 2;
        break;
      }
      case 2: {
        i.setScriptFlags(16), yield 3e4, s = 3;
        break;
      }
      case 3:
        return;
      default:
        return;
    }
}
function* e0(i) {
  let s = 0, a = 0;
  for (; s >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), s) {
      case 0: {
        i.setScriptFlags(4), i.setScriptFlags(3), i.setMisc160(320), i.setTimeout(-1), i.endSpell(), i.setBossPresent(0), i.setMisc147(4), i.setMisc144(10, 5), i.setLives(2e4), i.eclSetLives(1), i.setMotionClamp(32, 48, 352, 128), i.setMisc129(2), i.setDeathCallbackSub(44), i.setSpellTimer(3600, 68), i.setPhase(0, 2200, 68), i.setLifeBarSlice(0, 0, i.phase0, 16744576), i.moveRelative(60, 4, 192, 128), i.i0 = 20, yield 80, s = 1;
        break;
      }
      case 1: {
        yield* o(i), s = 2;
        break;
      }
      case 2: {
        i.setMisc136(15, 0), yield 50, s = 3;
        break;
      }
      case 3: {
        i.nop(), i.ci3 = 0, i.callSubAlloc(0, 45), i.callSubAlloc(1, 46), i.callSubAlloc(2, 47), yield 30, s = 4;
        break;
      }
      case 4: {
        s = 4;
        break;
      }
      default:
        return;
    }
}
function* c0(i) {
  let s = 0, a = 0;
  for (; s >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), s) {
      case 0: {
        i.f0 = 1.570796, i.isDiff(n | f) && (i.i0 = 4), i.isDiff(c | f) && (i.i0 = 4), i.isDiff(l | f) && (i.i0 = 4), i.isDiff(r | f) && (i.i0 = 4), s = 1;
        break;
      }
      case 1: {
        i.setShotRecord(0, 8192, 0, 240, -1, -1, -1), i.setShotRecord(1, 32, 1, 120, -1, -0.016667, 0.02618), i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 18,
          color: 3,
          count: t(1e4),
          rings: 1,
          speed: 3,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0,
          transform: 8736
        }), i.f0 += 0.1496, i.f0 = e(i.f0), yield 5, s = 2;
        break;
      }
      case 2: {
        s = 1;
        break;
      }
      default:
        return;
    }
}
function* l0(i) {
  let s = 0, a = 0;
  for (; s >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), s) {
      case 0: {
        i.f0 = 1.570796, i.isDiff(n | f) && (i.i0 = 4), i.isDiff(c | f) && (i.i0 = 4), i.isDiff(l | f) && (i.i0 = 4), i.isDiff(r | f) && (i.i0 = 4), s = 1;
        break;
      }
      case 1: {
        i.setShotRecord(0, 8192, 0, 240, -1, -1, -1), i.setShotRecord(1, 32, 1, 120, -1, -0.016667, -0.02618), i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 18,
          color: 5,
          count: t(1e4),
          rings: 1,
          speed: 3,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0,
          transform: 8736
        }), i.f0 -= 0.1496, i.f0 = e(i.f0), yield 5, s = 2;
        break;
      }
      case 2: {
        s = 1;
        break;
      }
      default:
        return;
    }
}
function* r0(i) {
  let s = 0;
  yield 200;
  let a = 0;
  for (; s >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), s) {
      case 0: {
        i.nop(), i.isDiff(n | f) && (i.i0 = 16), i.isDiff(c | f) && (i.i0 = 52), i.isDiff(l | f) && (i.i0 = 64), i.isDiff(r | f) && (i.i0 = 64), i.isDiff(n | f) && (i.f0 = 1), i.isDiff(c | f) && (i.f0 = 1), i.isDiff(l | f) && (i.f0 = 1.2), i.isDiff(r | f) && (i.f0 = 1.2), i.isDiff(n | f) && (i.ci2 = 60), i.isDiff(c | f) && (i.ci2 = 60), i.isDiff(l | f) && (i.ci2 = 60), i.isDiff(r | f) && (i.ci2 = 30), s = 1;
        break;
      }
      case 1: {
        i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 17,
          color: 7,
          count: t(1e4),
          rings: 1,
          speed: t(10016),
          speed2: 0.5,
          angle: t(10082),
          angleStep: 0,
          transform: 514
        }), yield i.delay(i.ci2), s = 1;
        break;
      }
      default:
        return;
    }
}
function* n0(i) {
  let s = 0, a = 0;
  for (; s >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), s) {
      case 0: {
        i.setAnmScripts6Alt(0), i.clearScriptFlags(8), i.eclSetLives(0), i.setBossPresent(0), i.setMisc159(1), i.setLives(6e3), i.setLifeBarSlice(0, 0, i.maxHp, 16752800), i.complexSetup(1), i.setRelPos(192, 224), i.playSfx(5), i.spawnEffectAt(40, 1, -1), yield 4, s = 1;
        break;
      }
      case 1: {
        i.spawnEffectAt(40, 1, -12080), yield 4, s = 2;
        break;
      }
      case 2: {
        i.spawnEffectAt(40, 1, -32640), yield 4, s = 3;
        break;
      }
      case 3: {
        i.spawnEffectAt(40, 1, -49088), yield 50, s = 4;
        break;
      }
      case 4: {
        i.playSfx(15), i.setScriptFlags(8), i.setMisc173(1), i.setMisc129(3), i.setDeathCallbackSub(50), yield* g(i);
        return;
      }
      default:
        return;
    }
}
function* o(i) {
  let s = 0, a = 0;
  for (; s >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), s) {
      case 0: {
        i.ci0 = 32, s = 1;
        break;
      }
      case 1: {
        i.spawnEffectAt(17, 4, -1), yield 1, s = 2;
        break;
      }
      case 2: {
        if (--i.ci0 > 0) {
          s = 1;
          break;
        }
        s = 3;
        break;
      }
      case 3:
        return;
      default:
        return;
    }
}
function* o0(i) {
  let s = 0, a = 0;
  for (; s >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), s) {
      case 0: {
        i.complexBossInit(1), i.setMisc147(6), i.maxHp = 1, i.setMisc129(0), i.maxHp = 1, i.setMisc129(0), i.setDeathCallbackSub(-1), i.callSubRemote(1, 51), i.setScriptFlags(48), i.clearScriptFlags(3), i.f0 = i.randAngle, i.movePolar(60, 4, i.f0, 0.15), i.setMisc173(0), i.setMisc136(18, 4), i.f0 = 0, i.ci0 = 6, s = 1;
        break;
      }
      case 1: {
        i.playSfx(7), yield 1, s = 2;
        break;
      }
      case 2: {
        i.f0 += 0.19635, i.f0 = e(i.f0), i.spawnEffectAngle(26, 1, -1, i.f0, 0, 0), yield 1, s = 3;
        break;
      }
      case 3: {
        i.f0 += 0.19635, i.f0 = e(i.f0), i.spawnEffectAngle(26, 1, -1, i.f0, 0, 0), yield 1, s = 4;
        break;
      }
      case 4: {
        i.f0 += 0.19635, i.f0 = e(i.f0), i.spawnEffectAngle(26, 1, -32640, i.f0, 0, 0), yield 1, s = 5;
        break;
      }
      case 5: {
        i.f0 += 0.19635, i.f0 = e(i.f0), i.spawnEffectAngle(26, 1, -32640, i.f0, 0, 0), yield 1, s = 6;
        break;
      }
      case 6: {
        i.f0 += 0.19635, i.f0 = e(i.f0), i.spawnEffectAngle(26, 1, -8323200, i.f0, 0, 0), yield 1, s = 7;
        break;
      }
      case 7: {
        i.f0 += 0.19635, i.f0 = e(i.f0), i.spawnEffectAngle(26, 1, -8323200, i.f0, 0, 0), yield 1, s = 8;
        break;
      }
      case 8: {
        i.f0 += 0.19635, i.f0 = e(i.f0), i.spawnEffectAngle(26, 1, -8355585, i.f0, 0, 0), yield 1, s = 9;
        break;
      }
      case 9: {
        i.f0 += 0.19635, i.f0 = e(i.f0), i.spawnEffectAngle(26, 1, -8355585, i.f0, 0, 0), yield 1, s = 10;
        break;
      }
      case 10: {
        i.f0 += 0.19635, i.f0 = e(i.f0), i.spawnEffectAngle(26, 1, -128, i.f0, 0, 0), yield 1, s = 11;
        break;
      }
      case 11: {
        if (i.f0 += 0.19635, i.f0 = e(i.f0), i.spawnEffectAngle(26, 1, -128, i.f0, 0, 0), --i.ci0 > 0) {
          s = 1;
          break;
        }
        s = 12;
        break;
      }
      case 12: {
        i.playSfx(18), i.spawnEffectAngle(26, 64, -8355585, -999, 0, 0), i.endSpell(), i.setBossPresent(-1), i.setMisc136(18, 1), yield 2, s = 13;
        break;
      }
      case 13: {
        i.maxHp = 0, i.maxHp = 0, yield 3e3, s = 14;
        break;
      }
      case 14:
        return;
      default:
        return;
    }
}
function* p0(i) {
  let s = 0, a = 0;
  for (; s >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), s) {
      case 0: {
        i.maxHp = 1, i.setMisc129(0), i.maxHp = 1, i.setMisc129(0), i.setDeathCallbackSub(-1), i.setScriptFlags(48), i.clearScriptFlags(3), i.f0 = i.randAngle, i.movePolar(60, 4, i.f0, 0.15), i.setMisc173(0), i.f0 = 0, i.ci0 = 6, s = 1;
        break;
      }
      case 1: {
        i.playSfx(7), yield 1, s = 2;
        break;
      }
      case 2: {
        i.f0 += 0.19635, i.f0 = e(i.f0), i.spawnEffectAngle(26, 1, -1, i.f0, 0, 0), yield 1, s = 3;
        break;
      }
      case 3: {
        i.f0 += 0.19635, i.f0 = e(i.f0), i.spawnEffectAngle(26, 1, -1, i.f0, 0, 0), yield 1, s = 4;
        break;
      }
      case 4: {
        i.f0 += 0.19635, i.f0 = e(i.f0), i.spawnEffectAngle(26, 1, -32640, i.f0, 0, 0), yield 1, s = 5;
        break;
      }
      case 5: {
        i.f0 += 0.19635, i.f0 = e(i.f0), i.spawnEffectAngle(26, 1, -32640, i.f0, 0, 0), yield 1, s = 6;
        break;
      }
      case 6: {
        i.f0 += 0.19635, i.f0 = e(i.f0), i.spawnEffectAngle(26, 1, -8323200, i.f0, 0, 0), yield 1, s = 7;
        break;
      }
      case 7: {
        i.f0 += 0.19635, i.f0 = e(i.f0), i.spawnEffectAngle(26, 1, -8323200, i.f0, 0, 0), yield 1, s = 8;
        break;
      }
      case 8: {
        i.f0 += 0.19635, i.f0 = e(i.f0), i.spawnEffectAngle(26, 1, -8355585, i.f0, 0, 0), yield 1, s = 9;
        break;
      }
      case 9: {
        i.f0 += 0.19635, i.f0 = e(i.f0), i.spawnEffectAngle(26, 1, -8355585, i.f0, 0, 0), yield 1, s = 10;
        break;
      }
      case 10: {
        i.f0 += 0.19635, i.f0 = e(i.f0), i.spawnEffectAngle(26, 1, -128, i.f0, 0, 0), yield 1, s = 11;
        break;
      }
      case 11: {
        if (i.f0 += 0.19635, i.f0 = e(i.f0), i.spawnEffectAngle(26, 1, -128, i.f0, 0, 0), --i.ci0 > 0) {
          s = 1;
          break;
        }
        s = 12;
        break;
      }
      case 12: {
        i.playSfx(18), i.spawnEffectAngle(26, 64, -8355585, -999, 0, 0), i.endSpell(), i.setBossPresent(-1), yield 2, s = 13;
        break;
      }
      case 13: {
        i.maxHp = 0, i.maxHp = 0, yield 3e3, s = 14;
        break;
      }
      case 14:
        return;
      default:
        return;
    }
}
function* d0(i) {
  let s = 0, a = 0;
  for (; s >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), s) {
      case 0: {
        i.setMisc129(2), i.setDeathCallbackSub(36), i.setShotRepeat(0), i.enemyFunc95(), i.setShotSound(-1, -1), i.clearScriptFlags(4), i.setShotOrigin(0, 0), i.setSpellTimer(2400, 36), i.resetSpellTimerSub(), i.setSpellTimerElapsed(0), i.ci3 = 0, i.moveRelative(90, 4, 192, 128), i.isDiff(n | f) && i.startSpell("覚神「神代の記憶」", "八意永琳", 123, 0, 3e7), i.isDiff(c | f) && i.startSpell("覚神「神代の記憶」", "八意永琳", 124, 0, 3e7), i.isDiff(l | f) && i.startSpell("神符「天人の系譜」", "八意永琳", 125, 0, 3e7), i.isDiff(r | f) && i.startSpell("神符「天人の系譜」", "八意永琳", 126, 0, 3e7), yield 90, s = 1;
        break;
      }
      case 1: {
        i.setScriptFlags(4), i.setMisc160(240), i.callSubAlloc(0, 53), i.callSubAlloc(1, 54), s = 2;
        break;
      }
      case 2: {
        i.playSfx(16), i.f0 = i.timer, i.ci0 = 0, i.spawnEnemyAlt(55, 0, 0, 0, 10, -2, 10), yield 180, s = 3;
        break;
      }
      case 3: {
        i.moveBounce(60, 4, 1), yield 60, s = 4;
        break;
      }
      case 4: {
        s = 2;
        break;
      }
      default:
        return;
    }
}
function* b0(i) {
  let s = 0, a = 0;
  for (; s >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), s) {
      case 0: {
        i.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 10,
          color: 0,
          count: 10,
          rings: 1,
          speed: 1,
          speed2: 1,
          angle: 3.1415927,
          angleStep: 0.3926991,
          transform: 514
        }), yield 50, s = 1;
        break;
      }
      case 1: {
        s = 0;
        break;
      }
      default:
        return;
    }
}
function* u0(i) {
  let s = 0, a = 0;
  for (; s >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), s) {
      case 0: {
        i.isDiff(n | f) && (i.i6 = 7), i.isDiff(c | f) && (i.i6 = 13), i.isDiff(l | f) && (i.i6 = 17), i.isDiff(r | f) && (i.i6 = 21), i.isDiff(n | f) && (i.f6 = 0.20944), i.isDiff(c | f) && (i.f6 = 0.116355), i.isDiff(l | f) && (i.f6 = 0.101342), i.isDiff(r | f) && (i.f6 = 0.076624), i.isDiff(n | f) && (i.f5 = 1.4), i.isDiff(c | f) && (i.f5 = 1.4), i.isDiff(l | f) && (i.f5 = 1.8), i.isDiff(r | f) && (i.f5 = 2), i.isDiff(n | f) && (i.ci2 = 20), i.isDiff(c | f) && (i.ci2 = 20), i.isDiff(l | f) && (i.ci2 = 20), i.isDiff(r | f) && (i.ci2 = 17), s = 1;
        break;
      }
      case 1: {
        i.f0 = i.randF32S * 0.19635, i.isDiff(n | c | f) && i.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 2,
          color: 2,
          count: t(10006),
          rings: 1,
          speed: t(10021),
          speed2: 1,
          angle: t(10016),
          angleStep: t(10022),
          transform: 514
        }), i.isDiff(l | r | f) && i.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 2,
          color: 6,
          count: t(10006),
          rings: 1,
          speed: t(10021),
          speed2: 1,
          angle: t(10016),
          angleStep: t(10022),
          transform: 514
        }), yield i.delay(i.ci2), s = 1;
        break;
      }
      default:
        return;
    }
}
function* k0(i) {
  let s = 0, a = 0;
  for (; s >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), s) {
      case 0: {
        i.setAnm(53), i.clearScriptFlags(8), i.isDiff(n | f) && (i.i7 = 6), i.isDiff(c | f) && (i.i7 = 6), i.isDiff(l | f) && (i.i7 = 2), i.isDiff(r | f) && (i.i7 = 2), i.spawnLaser({
          aimed: !1,
          // op 114 keeps the absolute angle
          type: 1,
          color: t(10007),
          angle: t(10016),
          speed: 0,
          tail: 0,
          head: 70,
          startLength: 70,
          width: 10,
          startTime: 60,
          duration: 60,
          despawn: 20,
          hitboxStart: 60,
          hitboxEnd: 20,
          flags: 4
        }), i.cf0 = Math.cos(i.f0), i.cf0 *= 70, i.cf1 = Math.sin(i.f0), i.cf1 *= 70, i.cf0 += i.posX, i.cf1 += i.posY, i.f1 = i.f0, i.moveRelative(14, 0, i.cf0, i.cf1), i.setShotRecord(0, 262144, 0, -1, -1, -1, -1), i.ci1 = 7, s = 1;
        break;
      }
      case 1: {
        i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 3,
          color: t(10007),
          count: 1,
          rings: 1,
          speed: 0.1,
          speed2: 1,
          angle: t(10082),
          angleStep: 0.09817477,
          transform: 262660
        }), yield 2, s = 2;
        break;
      }
      case 2: {
        if (--i.ci1 > 0) {
          s = 1;
          break;
        }
        s = 3;
        break;
      }
      case 3: {
        if (i.ci0++, i.posX >= 0) {
          s = 5;
          break;
        }
        s = 4;
        break;
      }
      case 4:
        return;
      case 5: {
        if (i.posX <= 384) {
          s = 7;
          break;
        }
        s = 6;
        break;
      }
      case 6:
        return;
      case 7: {
        if (i.posY >= 0) {
          s = 9;
          break;
        }
        s = 8;
        break;
      }
      case 8:
        return;
      case 9: {
        if (i.posY <= 448) {
          s = 11;
          break;
        }
        s = 10;
        break;
      }
      case 10:
        return;
      case 11: {
        if (i.isDiff(n | f) && (i.i7 = 6), i.isDiff(c | f) && (i.i7 = 6), i.isDiff(l | f) && (i.i7 = 7), i.isDiff(r | f) && (i.i7 = 7), i.ci0 < i.i7) {
          s = 13;
          break;
        }
        s = 12;
        break;
      }
      case 12:
        return;
      case 13: {
        i.isDiff(n | c | f) && (i.f0 = i.f1 + 0.698132), i.isDiff(l | r | f) && (i.f0 = i.f1 + 0.766242), i.spawnEnemyAlt(55, 0, 0, 0, 10, -2, 10), i.isDiff(n | c | f) && (i.f0 = i.f1 - 0.698132), i.isDiff(l | r | f) && (i.f0 = i.f1 - 0.766242), i.spawnEnemyAlt(55, 0, 0, 0, 10, -2, 10);
        return;
      }
      default:
        return;
    }
}
function* S0(i) {
  let s = 0, a = 0;
  for (; s >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), s) {
      case 0: {
        i.setMisc129(2), i.setDeathCallbackSub(40), i.setShotRepeat(0), i.enemyFunc95(), i.setShotSound(-1, -1), i.clearScriptFlags(4), i.setShotOrigin(0, 0), i.setSpellTimer(4620, 40), i.resetSpellTimerSub(), i.setSpellTimerElapsed(0), i.ci3 = 0, i.moveRelative(90, 4, 192, 128), i.isDiff(n | f) && i.startSpell("蘇活「生命遊戯　-ライフゲーム-」", "八意永琳", 127, 0, 3e7), i.isDiff(c | f) && i.startSpell("蘇活「生命遊戯　-ライフゲーム-」", "八意永琳", 128, 0, 3e7), i.isDiff(l | f) && i.startSpell("蘇生「ライジングゲーム」", "八意永琳", 129, 0, 3e7), i.isDiff(r | f) && i.startSpell("蘇生「ライジングゲーム」", "八意永琳", 130, 0, 3e7), yield 90, s = 1;
        break;
      }
      case 1: {
        i.setScriptFlags(4), i.setMisc160(240), i.linkChildRelative(60, 0, 0, 400, 1, 1e5), yield 60, s = 2;
        break;
      }
      case 2: {
        i.moveBounce(60, 0, 1), yield 200, s = 3;
        break;
      }
      case 3: {
        i.callSubAlloc(0, 57), i.callSubAlloc(1, 58), i.callSubAlloc(2, 59), s = 4;
        break;
      }
      case 4: {
        i.linkChildRelative(60, 0, 0, 400, 1, 1e5), yield 60, s = 5;
        break;
      }
      case 5: {
        i.moveBounce(60, 0, 1), yield 200, s = 6;
        break;
      }
      case 6: {
        s = 4;
        break;
      }
      default:
        return;
    }
}
function* y0(i) {
  let s = 0, a = 0;
  for (; s >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), s) {
      case 0: {
        i.f0 = i.randAngle, s = 1;
        break;
      }
      case 1: {
        i.isDiff(n | f) && i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 10,
          color: 2,
          count: 1,
          rings: 1,
          speed: 1.2,
          speed2: 1,
          angle: t(10016),
          angleStep: 0.09817477,
          transform: 516
        }), i.isDiff(c | f) && i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 10,
          color: 2,
          count: 4,
          rings: 1,
          speed: 1.5,
          speed2: 1,
          angle: t(10016),
          angleStep: 0.09817477,
          transform: 516
        }), i.isDiff(l | f) && i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 10,
          color: 2,
          count: 6,
          rings: 1,
          speed: 2,
          speed2: 1,
          angle: t(10016),
          angleStep: 0.09817477,
          transform: 516
        }), i.isDiff(r | f) && i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 10,
          color: 0,
          count: 6,
          rings: 1,
          speed: 2,
          speed2: 1,
          angle: t(10016),
          angleStep: 0.09817477,
          transform: 516
        }), i.isDiff(n | f) && (i.f0 += 0.224399), i.isDiff(c | f) && (i.f0 += 0.224399), i.isDiff(l | f) && (i.f0 += 0.224399), i.isDiff(r | f) && (i.f0 += 0.224399), i.f0 = e(i.f0), yield 12, s = 2;
        break;
      }
      case 2: {
        s = 1;
        break;
      }
      default:
        return;
    }
}
function* g0(i) {
  let s = 0, a = 0;
  for (; s >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), s) {
      case 0: {
        i.f0 = i.randAngle, s = 1;
        break;
      }
      case 1: {
        i.isDiff(n | f) && i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 7,
          color: 5,
          count: 3,
          rings: 1,
          speed: 1.1,
          speed2: 1,
          angle: t(10016),
          angleStep: 0.09817477,
          transform: 516
        }), i.isDiff(c | f) && i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 7,
          color: 5,
          count: 5,
          rings: 1,
          speed: 1.1,
          speed2: 1,
          angle: t(10016),
          angleStep: 0.09817477,
          transform: 516
        }), i.isDiff(l | f) && i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 7,
          color: 5,
          count: 5,
          rings: 1,
          speed: 1.1,
          speed2: 1,
          angle: t(10016),
          angleStep: 0.09817477,
          transform: 516
        }), i.isDiff(r | f) && i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 7,
          color: 1,
          count: 5,
          rings: 1,
          speed: 1.1,
          speed2: 1,
          angle: t(10016),
          angleStep: 0.09817477,
          transform: 516
        }), i.f0 -= 0.1848, i.f0 = e(i.f0), yield 8, s = 2;
        break;
      }
      case 2: {
        s = 1;
        break;
      }
      default:
        return;
    }
}
function* h0(i) {
  let s = 0, a = 0;
  for (; s >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), s) {
      case 0: {
        i.f0 = i.randAngle, s = 1;
        break;
      }
      case 1: {
        i.isDiff(n | f) && i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 17,
          color: 9,
          count: 3,
          rings: 1,
          speed: 0.9,
          speed2: 1,
          angle: t(10016),
          angleStep: 0.09817477,
          transform: 516
        }), i.isDiff(c | f) && i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 17,
          color: 9,
          count: 6,
          rings: 1,
          speed: 0.9,
          speed2: 1,
          angle: t(10016),
          angleStep: 0.09817477,
          transform: 516
        }), i.isDiff(l | f) && i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 17,
          color: 9,
          count: 6,
          rings: 1,
          speed: 1.2,
          speed2: 1,
          angle: t(10016),
          angleStep: 0.09817477,
          transform: 516
        }), i.isDiff(r | f) && i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 17,
          color: 1,
          count: 9,
          rings: 1,
          speed: 1.2,
          speed2: 1,
          angle: t(10016),
          angleStep: 0.09817477,
          transform: 516
        }), i.f0 += 0.0748, i.f0 = e(i.f0), yield 5, s = 2;
        break;
      }
      case 2: {
        s = 1;
        break;
      }
      default:
        return;
    }
}
function* m0(i) {
  let s = 0, a = 0;
  for (; s >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), s) {
      case 0: {
        i.setAnm(53), i.setHitFlash(1), i.setMisc145(1), i.setBounds(24, 24), i.setMisc160(30), i.setShotNoFireRadius(0), i.movePolar(60, 4, i.timer, 3.2), yield 60, s = 1;
        break;
      }
      case 1: {
        i.spawnEnemyAlt(62, 0, 0, 0, 10, -2, 10), i.movePolar(60, 4, i.timer, 2), yield 60, s = 2;
        break;
      }
      case 2: {
        if (i.spawnEnemyAlt(62, 0, 0, 0, 10, -2, 10), i.isDiff(n | c | f)) return;
        s = 3;
        break;
      }
      case 3: {
        i.movePolar(60, 4, i.timer, 2), yield 60, s = 4;
        break;
      }
      case 4: {
        i.spawnEnemyAlt(62, 0, 0, 0, 10, -2, 10);
        return;
      }
      default:
        return;
    }
}
function* w0(i) {
  let s = 0, a = 0;
  for (; s >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), s) {
      case 0:
        return;
      default:
        return;
    }
}
function* D0(i) {
  let s = 0, a = 0;
  for (; s >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), s) {
      case 0: {
        if (i.setAnm(53), i.clearScriptFlags(16), i.clearScriptFlags(8), i.setShotNoFireRadius(48), i.setShotRecord(0, 131072, 0, 120, -1, -1, -1), i.setShotRecord(1, 262144, 0, -1, -1, -1, -1), i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 3,
          color: 6,
          count: 1,
          rings: 1,
          speed: 0,
          speed2: 1,
          angle: t(10082),
          angleStep: 0.09817477,
          transform: 393732
        }), i.ci1++, i.ci1 < 9) {
          yield 4, s = 2;
          break;
        }
        s = 1;
        break;
      }
      case 1:
        return;
      case 2: {
        if (i.i2 = i.i0 + 3, i.i2 < 6) {
          s = 4;
          break;
        }
        s = 3;
        break;
      }
      case 3: {
        i.i2 -= 6, s = 4;
        break;
      }
      case 4: {
        if (i.i1 = i.randU31 % 6, i.i1 != i.i2) {
          s = 7;
          break;
        }
        s = 5;
        break;
      }
      case 5: {
        if (i.i1++, i.i1 < 6) {
          s = 7;
          break;
        }
        s = 6;
        break;
      }
      case 6: {
        i.i1 = 0, s = 7;
        break;
      }
      case 7: {
        if (i.i0 = i.i1, i.f0 = i.i1 * 1.047198, i.f0 += -2.094395, i.cf0 = Math.cos(i.f0), i.cf0 *= 24, i.cf1 = Math.sin(i.f0), i.cf1 *= 24, i.spawnEnemyAlt(62, 1176352768, 1176353792, 0, 10, -2, 10), i.i1 = i.randU31 % 6, i.i1 != i.i2) {
          s = 10;
          break;
        }
        s = 8;
        break;
      }
      case 8: {
        if (i.i1--, i.i1 >= 0) {
          s = 10;
          break;
        }
        s = 9;
        break;
      }
      case 9: {
        i.i1 = 5, s = 10;
        break;
      }
      case 10: {
        if (i.i1 != i.i0) {
          s = 16;
          break;
        }
        s = 11;
        break;
      }
      case 11: {
        if (i.i1--, i.i1 >= 0) {
          s = 13;
          break;
        }
        s = 12;
        break;
      }
      case 12: {
        i.i1 = 5, s = 13;
        break;
      }
      case 13: {
        if (i.i1 != i.i2) {
          s = 16;
          break;
        }
        s = 14;
        break;
      }
      case 14: {
        if (i.i1--, i.i1 >= 0) {
          s = 16;
          break;
        }
        s = 15;
        break;
      }
      case 15: {
        i.i1 = 5, s = 16;
        break;
      }
      case 16: {
        i.i0 = i.i1, i.f0 = i.i1 * 1.047198, i.f0 += -2.094395, i.cf0 = Math.cos(i.f0), i.cf0 *= 24, i.cf1 = Math.sin(i.f0), i.cf1 *= 24, i.spawnEnemyAlt(62, 1176352768, 1176353792, 0, 10, -2, 10);
        return;
      }
      default:
        return;
    }
}
function* A0(i) {
  let s = 0, a = 0;
  for (; s >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), s) {
      case 0: {
        i.setMisc129(2), i.setDeathCallbackSub(44), i.setShotRepeat(0), i.enemyFunc95(), i.setShotSound(-1, -1), i.clearScriptFlags(4), i.setShotOrigin(0, 0), i.setSpellTimer(3720, 44), i.resetSpellTimerSub(), i.setSpellTimerElapsed(0), i.ci3 = 0, i.moveRelative(90, 4, 192, 128), i.isDiff(n | f) && i.startSpell("操神「オモイカネディバイス」", "八意永琳", 131, 0, 3e7), i.isDiff(c | f) && i.startSpell("操神「オモイカネディバイス」", "八意永琳", 132, 0, 3e7), i.isDiff(l | f) && i.startSpell("神脳「オモイカネブレイン」", "八意永琳", 133, 0, 3e7), i.isDiff(r | f) && i.startSpell("神脳「オモイカネブレイン」", "八意永琳", 134, 0, 3e7), yield 90, s = 1;
        break;
      }
      case 1: {
        i.setScriptFlags(4), i.setMisc160(480), i.ci3 = 0, s = 2;
        break;
      }
      case 2: {
        i.f1 = 7306e-6, i.linkChildRelative(65, 0, 0, 4e3, 1, 1e5), yield 400, s = 3;
        break;
      }
      case 3: {
        if (i.nop(), i.ci3 != 0) {
          yield 400, s = 5;
          break;
        }
        s = 4;
        break;
      }
      case 4: {
        i.autoAnm(), i.setShotOrigin(-16, -32), i.callSubAlloc(0, 64), yield 400, s = 5;
        break;
      }
      case 5: {
        i.f1 = -7306e-6, i.linkChildRelative(65, 0, 0, 4e3, 1, 1e5), i.ci3++, yield 800, s = 6;
        break;
      }
      case 6: {
        s = 2;
        break;
      }
      default:
        return;
    }
}
function* M0(i) {
  let s = 0, a = 0;
  for (; s >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), s) {
      case 0: {
        i.f0 = i.randAngle, i.isDiff(n | f) && (i.f1 = 0.273182), i.isDiff(c | f) && (i.f1 = 0.1904), i.isDiff(l | f) && (i.f1 = 0.1904), i.isDiff(r | f) && (i.f1 = 0.1904), i.isDiff(n | f) && (i.f7 = 1), i.isDiff(c | f) && (i.f7 = 1), i.isDiff(l | f) && (i.f7 = 1), i.isDiff(r | f) && (i.f7 = 1.4), s = 1;
        break;
      }
      case 1: {
        i.isDiff(n | f) && i.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 2,
          color: 6,
          count: 2,
          rings: 1,
          speed: 1,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.03141593,
          transform: 514
        }), i.isDiff(c | f) && i.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 2,
          color: 6,
          count: 4,
          rings: 1,
          speed: 1,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.03141593,
          transform: 514
        }), i.isDiff(l | f) && i.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 2,
          color: 6,
          count: 4,
          rings: 1,
          speed: 1,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.03141593,
          transform: 514
        }), i.isDiff(r | f) && i.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 2,
          color: 6,
          count: 4,
          rings: 2,
          speed: t(10023),
          speed2: 0.8,
          angle: t(10016),
          angleStep: 0.03141593,
          transform: 514
        }), i.f0 += i.f1, i.f0 = e(i.f0), yield 2, s = 2;
        break;
      }
      case 2: {
        s = 1;
        break;
      }
      default:
        return;
    }
}
function* R0(i) {
  let s = 0, a = 0;
  for (; s >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), s) {
      case 0: {
        i.setAnm(53), i.setHitFlash(1), i.setMisc145(1), i.setBounds(24, 24), i.setMisc160(30), i.setShotNoFireRadius(0), i.cf0 = i.posX, i.cf1 = i.posY, i.moveRelative(60, 4, 192, 320), yield 60, s = 1;
        break;
      }
      case 1: {
        i.setHeadingSpeed(-1.570796, 0.1), yield 60, s = 2;
        break;
      }
      case 2: {
        i.callSubAlloc(0, 66), i.isDiff(l | r | f) && i.callSubAlloc(1, 67), yield 60, s = 3;
        break;
      }
      case 3: {
        i.setHeadingVel(i.f1), yield 200, s = 4;
        break;
      }
      case 4: {
        i.setSpeedAccel(25e-4), yield 400, s = 5;
        break;
      }
      case 5: {
        i.setHeadingVel(0), yield 4200, s = 6;
        break;
      }
      case 6:
        return;
      default:
        return;
    }
}
function* F0(i) {
  let s = 0, a = 0;
  for (; s >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), s) {
      case 0: {
        i.isDiff(n | f) && (i.i0 = 22), i.isDiff(c | f) && (i.i0 = 26), i.isDiff(l | f) && (i.i0 = 28), i.isDiff(r | f) && (i.i0 = 26), i.isDiff(n | f) && (i.i1 = 5), i.isDiff(c | f) && (i.i1 = 5), i.isDiff(l | f) && (i.i1 = 1), i.isDiff(r | f) && (i.i1 = 1), s = 1;
        break;
      }
      case 1: {
        i.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 17,
          color: t(10001),
          count: t(1e4),
          rings: 1,
          speed: 4,
          speed2: 0.5,
          angle: t(10069),
          angleStep: 0.20943952,
          transform: 514
        }), yield 10, s = 2;
        break;
      }
      case 2: {
        s = 1;
        break;
      }
      default:
        return;
    }
}
function* v0(i) {
  let s = 0, a = 0;
  for (; s >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), s) {
      case 0: {
        i.setMisc116(0), i.f0 = i.moveAngle - 2.748893, i.f0 = e(i.f0), i.spawnLaser({
          aimed: !1,
          // op 114 keeps the absolute angle
          type: 0,
          color: 6,
          angle: t(10016),
          speed: 0,
          tail: 0,
          head: 640,
          startLength: 640,
          width: 8,
          startTime: 60,
          duration: 540,
          despawn: 60,
          hitboxStart: 60,
          hitboxEnd: 60,
          flags: 0
        }), i.setMisc116(1), i.f0 = i.moveAngle + 2.748893, i.f0 = e(i.f0), i.spawnLaser({
          aimed: !1,
          // op 114 keeps the absolute angle
          type: 0,
          color: 6,
          angle: t(10016),
          speed: 0,
          tail: 0,
          head: 640,
          startLength: 640,
          width: 8,
          startTime: 60,
          duration: 540,
          despawn: 60,
          hitboxStart: 60,
          hitboxEnd: 60,
          flags: 0
        }), i.setMisc116(2), i.f0 = i.moveAngle - 2.356194, i.f0 = e(i.f0), i.spawnLaser({
          aimed: !1,
          // op 114 keeps the absolute angle
          type: 0,
          color: 6,
          angle: t(10016),
          speed: 0,
          tail: 0,
          head: 640,
          startLength: 640,
          width: 8,
          startTime: 60,
          duration: 540,
          despawn: 60,
          hitboxStart: 60,
          hitboxEnd: 60,
          flags: 0
        }), i.setMisc116(3), i.f0 = i.moveAngle + 2.356194, i.f0 = e(i.f0), i.spawnLaser({
          aimed: !1,
          // op 114 keeps the absolute angle
          type: 0,
          color: 6,
          angle: t(10016),
          speed: 0,
          tail: 0,
          head: 640,
          startLength: 640,
          width: 8,
          startTime: 60,
          duration: 540,
          despawn: 60,
          hitboxStart: 60,
          hitboxEnd: 60,
          flags: 0
        }), s = 1;
        break;
      }
      case 1: {
        if (i.setMisc120(0), i.ci2 != 0) {
          s = 3;
          break;
        }
        s = 2;
        break;
      }
      case 2: {
        s = 3;
        break;
      }
      case 3: {
        i.f0 = i.moveAngle - 2.748893, i.f0 = e(i.f0), i.setMisc167(0, i.f0), i.setIntFields(0, 0, 0, 0), i.f0 = i.moveAngle + 2.748893, i.f0 = e(i.f0), i.setMisc167(1, i.f0), i.setIntFields(1, 0, 0, 0), i.f0 = i.moveAngle - 2.356194, i.f0 = e(i.f0), i.setMisc167(2, i.f0), i.setIntFields(2, 0, 0, 0), i.f0 = i.moveAngle + 2.356194, i.f0 = e(i.f0), i.setMisc167(3, i.f0), i.setIntFields(3, 0, 0, 0), yield 1, s = 4;
        break;
      }
      case 4: {
        s = 1;
        break;
      }
      default:
        return;
    }
}
function* E0(i) {
  let s = 0, a = 0;
  for (; s >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), s) {
      case 0: {
        i.setSpellTimer(99999, 12), i.setMisc160(120), i.endSpell(), i.setScriptFlags(3), i.setBossPresent(0), i.setMisc129(3), i.setDeathCallbackSub(72), i.setShotRepeat(0), i.enemyFunc95(), i.setShotSound(-1, -1), i.clearScriptFlags(4), i.setShotOrigin(0, 0), i.setSpellTimer(4200, 72), i.resetSpellTimerSub(), i.setSpellTimerElapsed(0), i.ci3 = 0, i.moveRelative(90, 4, 192, 128), i.isDiff(n | f) && i.startSpell("天呪「アポロ１３」", "八意永琳", 135, 0, 3e7), i.isDiff(c | f) && i.startSpell("天呪「アポロ１３」", "八意永琳", 136, 0, 3e7), i.isDiff(l | f) && i.startSpell("天呪「アポロ１３」", "八意永琳", 137, 0, 3e7), i.isDiff(r | f) && i.startSpell("天呪「アポロ１３」", "八意永琳", 138, 0, 3e7), yield 90, s = 1;
        break;
      }
      case 1: {
        i.setScriptFlags(4), i.setMisc160(600), i.autoAnm(), yield* o(i), s = 2;
        break;
      }
      case 2: {
        i.nop(), s = 3;
        break;
      }
      case 3: {
        yield* S(i), s = 4;
        break;
      }
      case 4: {
        i.moveBounce(60, 4, 1), yield 320, s = 5;
        break;
      }
      case 5: {
        s = 3;
        break;
      }
      default:
        return;
    }
}
function* x0(i) {
  let s = 0, a = 0;
  for (; s >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), s) {
      case 0: {
        i.setShotRecord(0, 131072, 0, 300, -1, -1, -1), i.setShotRecord(1, 16384, 0, 3, 6, -1, -1), i.setShotRecord(2, 16, 0, 60, -1, 0.033333, -999), s = 1;
        break;
      }
      case 1: {
        i.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 3,
          color: 5,
          count: 1,
          rings: 1,
          speed: 0,
          speed2: 0.6,
          angle: t(10069),
          angleStep: 0.09817477,
          transform: 147984
        }), yield 20, s = 2;
        break;
      }
      case 2: {
        s = 1;
        break;
      }
      default:
        return;
    }
}
function* _0(i) {
  let s = 0, a = 0;
  for (; s >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), s) {
      case 0: {
        i.setAnm(53), i.setHitFlash(1), i.setMisc145(1), i.setBounds(24, 24), i.setMisc160(30), i.callSubAlloc(0, 69), i.setHeadingSpeed(i.f0, i.f1), yield 3e4, s = 1;
        break;
      }
      case 1:
        return;
      default:
        return;
    }
}
function* S(i) {
  let s = 0, a = 0;
  for (; s >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), s) {
      case 0: {
        i.autoAnm(), i.f2 = i.randAngle, i.ci0 = 32, i.ci1 = 64, i.ci2 = 30, i.isDiff(n | f) && (i.i6 = 6), i.isDiff(c | f) && (i.i6 = 11), i.isDiff(l | f) && (i.i6 = 13), i.isDiff(r | f) && (i.i6 = 15), i.isDiff(n | f) && (i.f6 = 0.490874), i.isDiff(c | f) && (i.f6 = 0.245437), i.isDiff(l | f) && (i.f6 = 0.245437), i.isDiff(r | f) && (i.f6 = 0.245437), i.isDiff(n | f) && (i.f5 = 1.2), i.isDiff(c | f) && (i.f5 = 1.2), i.isDiff(l | f) && (i.f5 = 1.4), i.isDiff(r | f) && (i.f5 = 1.5), i.setShotRecord(0, 8192, 0, 240, -1, -1, -1), s = 1;
        break;
      }
      case 1: {
        if (i.f0 = Math.cos(i.f2), i.f0 *= 48, i.f1 = Math.sin(i.f2), i.f1 *= 48, i.setShotOrigin(i.f0, i.f1), i.i0 = i.ci0 % 2, i.setShotRecord(1, 64, 1, 60, 1, 0, 0), i.setShotRecord(2, 131072, 0, i.ci1, -1, -1, -1), i.setShotRecord(3, 16384, 0, 2, 2, -1, -1), i.setShotRecord(4, 131072, 0, i.ci2, -1, -1, -1), i.i0 != 0) {
          s = 3;
          break;
        }
        s = 2;
        break;
      }
      case 2: {
        i.setShotRecord(5, 64, 0, 1, 1, -2.513274, i.f5), s = 4;
        break;
      }
      case 3: {
        i.setShotRecord(5, 64, 0, 1, 1, 2.513274, i.f5), s = 4;
        break;
      }
      case 4: {
        if (i.f2 += 0.19635, i.f2 = e(i.f2), i.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 17,
          color: 5,
          count: t(10006),
          rings: 1,
          speed: 3.5,
          speed2: 0.8,
          angle: t(10018),
          angleStep: t(10022),
          transform: 160320
        }), i.ci1 -= 2, i.ci2 += 2, --i.ci0 > 0) {
          s = 1;
          break;
        }
        s = 5;
        break;
      }
      case 5: {
        i.f2 = i.randAngle, i.ci0 = 32, i.ci1 = 64, i.ci2 = 30, i.setShotRecord(0, 8192, 0, 240, -1, -1, -1), s = 6;
        break;
      }
      case 6: {
        if (i.f0 = Math.cos(i.f2), i.f0 *= 96, i.f1 = Math.sin(i.f2), i.f1 *= 96, i.setShotOrigin(i.f0, i.f1), i.i0 = i.ci0 % 2, i.setShotRecord(1, 64, 1, 60, 1, 0, 0), i.setShotRecord(2, 131072, 0, i.ci1, -1, -1, -1), i.setShotRecord(3, 16384, 0, 2, 6, -1, -1), i.setShotRecord(4, 131072, 0, i.ci2, -1, -1, -1), i.i0 != 0) {
          s = 8;
          break;
        }
        s = 7;
        break;
      }
      case 7: {
        i.setShotRecord(5, 64, 0, 1, 1, -2.513274, 1.2), s = 9;
        break;
      }
      case 8: {
        i.setShotRecord(5, 64, 0, 1, 1, 2.513274, 1.2), s = 9;
        break;
      }
      case 9: {
        if (i.f2 -= 0.19635, i.f2 = e(i.f2), i.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 17,
          color: 1,
          count: t(10006),
          rings: 1,
          speed: 3.5,
          speed2: 0.8,
          angle: t(10018),
          angleStep: t(10022),
          transform: 160320
        }), i.ci1 -= 2, i.ci2 += 2, --i.ci0 > 0) {
          s = 6;
          break;
        }
        s = 10;
        break;
      }
      case 10:
        return;
      default:
        return;
    }
}
function* B0(i) {
  let s = 0, a = 0;
  for (; s >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), s) {
      case 0: {
        i.setSpellTimer(99999, 12), i.setMisc160(120), i.endSpell(), i.spawnItemRandom(10), i.spawnItemBatch(5), i.setScriptFlags(3), i.setBossPresent(0), i.setMisc147(5), i.setMotionClamp(32, 48, 352, 128), i.setLives(6e3), i.eclSetLives(0), i.setLifeBarSlice(0, 0, 6e3, 16744576), yield 80, s = 1;
        break;
      }
      case 1: {
        i.nop(), yield* y(i);
        return;
      }
      default:
        return;
    }
}
function* y(i) {
  let s = 0, a = 0;
  for (; s >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), s) {
      case 0: {
        i.setMisc129(3), i.setDeathCallbackSub(12), i.setShotRepeat(0), i.enemyFunc95(), i.setShotSound(-1, -1), i.clearScriptFlags(4), i.setShotOrigin(0, 0), i.setSpellTimer(7200, 36), i.resetSpellTimerSub(), i.setSpellTimerElapsed(0), i.ci3 = 0, i.moveRelative(90, 4, 192, 128), i.isDiff(n | f) && i.startSpell("秘術「天文密葬法」", "八意永琳", 139, 0, 3e7), i.isDiff(c | f) && i.startSpell("秘術「天文密葬法」", "八意永琳", 140, 0, 3e7), i.isDiff(l | f) && i.startSpell("秘術「天文密葬法」", "八意永琳", 141, 0, 3e7), i.isDiff(r | f) && i.startSpell("秘術「天文密葬法」", "八意永琳", 142, 0, 3e7), yield 90, s = 1;
        break;
      }
      case 1: {
        i.setScriptFlags(4), i.setMisc160(600), i.setMisc183(1), i.autoAnm(), i.callSubAlloc(3, 74), yield 160, s = 2;
        break;
      }
      case 2: {
        yield* o(i), s = 3;
        break;
      }
      case 3: {
        i.ci0 = 12, i.moveRelative(240, 0, i.posX, 64), i.i7 = 5, i.fparam0 = 0.1309, i.fparam1 = 0.261799, i.fparam2 = 160, yield* p(i), s = 4;
        break;
      }
      case 4: {
        i.ci0 = 10, i.i7 = 1, i.fparam0 = 0.560999, i.fparam1 = 0.224399, i.fparam2 = 192, yield* p(i), s = 5;
        break;
      }
      case 5: {
        i.ci0 = 8, i.i7 = 3, i.fparam0 = 0.883573, i.fparam1 = 0.19635, i.fparam2 = 224, yield* p(i), s = 6;
        break;
      }
      case 6: {
        i.ci0 = 8, i.i7 = 9, i.fparam0 = 1.112647, i.fparam1 = 0.1309, i.fparam2 = 256, yield* p(i), s = 7;
        break;
      }
      case 7: {
        i.ci0 = 6, i.i7 = 7, i.fparam0 = 1.308997, i.fparam1 = 0.10472, i.fparam2 = 288, yield* p(i), s = 8;
        break;
      }
      case 8: {
        i.ci0 = 3, i.i7 = 12, i.fparam0 = 1.421197, i.fparam1 = 0.1496, i.fparam2 = 320, yield* p(i), s = 9;
        break;
      }
      case 9: {
        i.i7 = 5, i.setTimeout(16), yield 120, s = 10;
        break;
      }
      case 10: {
        i.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 10,
          color: 1,
          count: 1,
          rings: 1,
          speed: 2.5,
          speed2: 0.6,
          angle: 1.5707964,
          angleStep: 1,
          transform: 1049090
        }), yield 300, s = 11;
        break;
      }
      case 11: {
        i.nop(), i.setShotRecord(0, 2048, 0, 0, -1, -999.900024, 0), i.i7 = 1, i.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 10,
          color: 1,
          count: 1,
          rings: 1,
          speed: 3,
          speed2: 0.6,
          angle: 0.7853982,
          angleStep: 1,
          transform: 1051138
        }), yield 160, s = 12;
        break;
      }
      case 12: {
        i.i7 = 3, i.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 10,
          color: 1,
          count: 1,
          rings: 1,
          speed: 3,
          speed2: 0.6,
          angle: 2.3561945,
          angleStep: 1,
          transform: 1051138
        }), yield 160, s = 13;
        break;
      }
      case 13: {
        i.i7 = 5, i.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 10,
          color: 1,
          count: 1,
          rings: 1,
          speed: 2.5,
          speed2: 0.6,
          angle: 1.5707964,
          angleStep: 1,
          transform: 1051138
        }), s = 14;
        break;
      }
      case 14: {
        i.moveBounce(60, 4, 1), yield 160, s = 15;
        break;
      }
      case 15: {
        i.i7 = 1, i.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 10,
          color: 1,
          count: 1,
          rings: 1,
          speed: 3,
          speed2: 0.6,
          angle: -0.7853982,
          angleStep: 1,
          transform: 1051138
        }), yield 160, s = 16;
        break;
      }
      case 16: {
        i.i7 = 3, i.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 10,
          color: 1,
          count: 1,
          rings: 1,
          speed: 3,
          speed2: 0.6,
          angle: 0.7853982,
          angleStep: 1,
          transform: 1051138
        }), yield 160, s = 17;
        break;
      }
      case 17: {
        i.i7 = 5, i.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 10,
          color: 1,
          count: 1,
          rings: 1,
          speed: 2.5,
          speed2: 0.6,
          angle: 0,
          angleStep: 1,
          transform: 1051138
        }), s = 14;
        break;
      }
      default:
        return;
    }
}
function* C0(i) {
  let s = 0, a = 0;
  for (; s >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), s) {
      case 0: {
        i.ci0 = 60, i.f0 = 0.19635, s = 1;
        break;
      }
      case 1: {
        if (i.f0 >= 3.010693) {
          s = 3;
          break;
        }
        s = 2;
        break;
      }
      case 2: {
        i.f0 += 0.10472, s = 3;
        break;
      }
      case 3: {
        i.f1 = i.f0 / 5, i.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 17,
          color: 5,
          count: 11,
          rings: 1,
          speed: 5,
          speed2: 0.6,
          angle: -1.5707964,
          angleStep: t(10017),
          transform: 514
        }), yield 4, s = 4;
        break;
      }
      case 4: {
        if (--i.ci0 > 0) {
          s = 1;
          break;
        }
        s = 5;
        break;
      }
      case 5:
        return;
      default:
        return;
    }
}
function* p(i) {
  let s = 0, a = 0;
  for (; s >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), s) {
      case 0: {
        i.f2 = i.cxf0, i.f3 = 400, i.ci1 = i.ci0 * 4, i.ci1 += 4, i.f5 = 0.05236, i.f6 = 192, i.f7 = 448, s = 1;
        break;
      }
      case 1: {
        i.f4 = 0 - i.f2, i.f0 = Math.cos(i.f4), i.f0 *= i.cxf2, i.f1 = Math.sin(i.f4), i.f1 *= i.cxf2, i.f0 += i.f6, i.f1 += i.f7, i.linkChildRelative(77, 0, 0, 250, -2, 100), i.f2 += i.cxf1, i.f2 = e(i.f2), i.ci1 -= 4, yield 4, s = 2;
        break;
      }
      case 2: {
        if (--i.ci0 > 0) {
          s = 1;
          break;
        }
        s = 3;
        break;
      }
      case 3:
        return;
      default:
        return;
    }
}
function* T0(i) {
}
function* I0(i) {
  let s = 0, a = 0;
  for (; s >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), s) {
      case 0: {
        i.setAnm(54), i.setBounds(24, 24), i.clearScriptFlags(16), i.setHitFlash(1), i.clearScriptFlags(3), i.cxf2 = Math.cos(i.f2), i.cxf2 *= i.f3, i.cxf3 = Math.sin(i.f2), i.cxf3 *= i.f3, i.cf0 = i.posX, i.cf1 = i.posY, i.f2 = i.randSignF(400), i.interpSlot(10042, 120, 7, 0, i.cf0, i.f0, i.cxf2, i.f2), i.f2 = i.randSignF(400), i.interpSlot(10043, 120, 7, 0, i.cf1, i.f1, i.cxf3, i.f2), i.ef6 = i.f6, i.ef7 = i.f7, yield 120, s = 1;
        break;
      }
      case 1: {
        i.setHeadingSpeed(0, 0), i.setHitFlash(0), yield i.delay(i.ci1), i.setScriptFlags(3), i.ci2 = 0, i.cf0 = i.posX, i.cf1 = i.posY, i.isDiff(n | f) && (i.ci3 = 2), i.isDiff(c | f) && (i.ci3 = 8), i.isDiff(l | f) && (i.ci3 = 8), i.isDiff(r | f) && (i.ci3 = 10), i.isDiff(n | f) && (i.i6 = 14), i.isDiff(c | f) && (i.i6 = 20), i.isDiff(l | f) && (i.i6 = 20), i.isDiff(r | f) && (i.i6 = 20), i.isDiff(n | f) && (i.f1 = 0.8), i.isDiff(c | f) && (i.f1 = 0.8), i.isDiff(l | f) && (i.f1 = 1.2), i.isDiff(r | f) && (i.f1 = 1.5), s = 2;
        break;
      }
      case 2: {
        if (i.ci2 == 0) {
          yield 1, s = 8;
          break;
        }
        s = 3;
        break;
      }
      case 3: {
        if (i.f0 = i.ci2, i.f0 /= 6, i.f4 = i.randF32S * i.f0, i.f4 += i.cf0, i.f5 = i.randF32S * i.f0, i.f5 += i.cf1, i.setRelPos(i.f4, i.f5), i.ci2--, i.ci2 >= i.ci3) {
          s = 5;
          break;
        }
        s = 4;
        break;
      }
      case 4: {
        i.f0 = i.randF32S * 0.5, i.f0 += i.f1, i.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 17,
          color: t(10007),
          count: 1,
          rings: 1,
          speed: t(10016),
          speed2: 0.6,
          angle: t(10082),
          angleStep: t(10017),
          transform: 514
        }), i.setRelPos(i.cf0, i.cf1), s = 5;
        break;
      }
      case 5: {
        if (i.ci2 != 0) {
          yield 1, s = 8;
          break;
        }
        s = 6;
        break;
      }
      case 6: {
        if (i.ci3 >= i.i6) {
          yield 1, s = 8;
          break;
        }
        s = 7;
        break;
      }
      case 7: {
        i.ci3 += 2, i.f1 += 0.05, yield 1, s = 8;
        break;
      }
      case 8: {
        s = 2;
        break;
      }
      default:
        return;
    }
}
function* g(i) {
  let s = 0, a = 0;
  for (; s >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), s) {
      case 0: {
        i.setShotRepeat(0), i.enemyFunc95(), i.setShotSound(-1, -1), i.clearScriptFlags(4), i.setShotOrigin(0, 0), i.setSpellTimer(5940, 13), i.resetSpellTimerSub(), i.setSpellTimerElapsed(0), i.ci3 = 0, i.moveRelative(110, 4, 192, 224), i.isDiff(n | f) && i.startSpell("禁薬「蓬莱の薬」", "八意永琳", 143, 0, 5e6), i.isDiff(c | f) && i.startSpell("禁薬「蓬莱の薬」", "八意永琳", 144, 0, 5e6), i.isDiff(l | f) && i.startSpell("禁薬「蓬莱の薬」", "八意永琳", 145, 0, 5e6), i.isDiff(r | f) && i.startSpell("禁薬「蓬莱の薬」", "八意永琳", 146, 0, 5e6), i.setMisc155(1), yield 110, s = 1;
        break;
      }
      case 1: {
        i.setScriptFlags(4), i.setMisc160(120), i.autoAnm(), yield 30, s = 2;
        break;
      }
      case 2: {
        i.nop(), yield* o(i), s = 3;
        break;
      }
      case 3: {
        i.nop(), i.playSfx(16), i.f0 = 1.570796, i.f2 = 1.047198, i.spawnEnemyAlt(79, 0, 0, 0, 10, -2, 10), i.f0 = 1.570796, i.f2 = -1.047198, i.spawnEnemyAlt(79, 0, 0, 0, 10, -2, 10), i.f0 = -1.570796, i.f2 = -1.047198, i.spawnEnemyAlt(79, 0, 0, 0, 10, -2, 10), i.f0 = -1.570796, i.f2 = 1.047198, i.spawnEnemyAlt(79, 0, 0, 0, 10, -2, 10), yield 60, s = 4;
        break;
      }
      case 4: {
        i.nop(), i.callSubAlloc(0, 80), yield 660, s = 5;
        break;
      }
      case 5: {
        i.callSubAlloc(0, 81), i.callSubAlloc(1, 82), i.callSubAlloc(2, 83), i.clearAllBullets(), i.playSfx(15), yield 2e3, s = 6;
        break;
      }
      case 6: {
        i.callSubAlloc(0, 84), i.callSubAlloc(1, -1), i.callSubAlloc(2, -1), i.clearAllBullets(), i.playSfx(15), yield 100, s = 7;
        break;
      }
      case 7: {
        s = 7;
        break;
      }
      default:
        return;
    }
}
function* L0(i) {
  let s = 0, a = 0;
  for (; s >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), s) {
      case 0: {
        i.setAnm(53), i.clearScriptFlags(8), i.spawnLaser({
          aimed: !1,
          // op 114 keeps the absolute angle
          type: 1,
          color: 6,
          angle: t(10016),
          speed: 0,
          tail: 0,
          head: 109,
          startLength: 109,
          width: 16,
          startTime: 10,
          duration: 16,
          despawn: 10,
          hitboxStart: 10,
          hitboxEnd: 10,
          flags: 4
        }), i.cf0 = Math.cos(i.f0), i.cf0 *= 109, i.cf1 = Math.sin(i.f0), i.cf1 *= 109, i.cf0 += i.posX, i.cf1 += i.posY, i.f1 = i.f0, i.moveRelative(16, 0, i.cf0, i.cf1), i.setShotRecord(0, 262144, 0, -1, -1, -1, -1), i.ci1 = 8, s = 1;
        break;
      }
      case 1: {
        i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 3,
          color: 6,
          count: 1,
          rings: 1,
          speed: 0.1,
          speed2: 1,
          angle: t(10082),
          angleStep: 0.09817477,
          transform: 262660
        }), yield 2, s = 2;
        break;
      }
      case 2: {
        if (--i.ci1 > 0) {
          s = 1;
          break;
        }
        s = 3;
        break;
      }
      case 3: {
        i.ci0++, i.f0 = i.f1 + i.f2, i.spawnEnemyAlt(79, 0, 0, 0, 10, -2, 10);
        return;
      }
      default:
        return;
    }
}
function* P0(i) {
  let s = 0, a = 0;
  for (; s >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), s) {
      case 0: {
        i.setShotRecord(1, 16384, 0, 2, 6, -1, -1), i.isDiff(n | f) && (i.ci3 = 1), i.isDiff(c | f) && (i.ci3 = 6), i.isDiff(l | f) && (i.ci3 = 12), i.isDiff(r | f) && (i.ci3 = 12), i.isDiff(n | f) && (i.f7 = 0.01), i.isDiff(c | f) && (i.f7 = 0.013333), i.isDiff(l | f) && (i.f7 = 0.016667), i.isDiff(r | f) && (i.f7 = 0.02), i.isDiff(n | f) && (i.f6 = 8333e-6), i.isDiff(c | f) && (i.f6 = 0.011667), i.isDiff(l | f) && (i.f6 = 0.013333), i.isDiff(r | f) && (i.f6 = 0.016667), s = 1;
        break;
      }
      case 1: {
        if (i.setShotRecord(0, 16, 0, 60, -1, i.f7, -999), i.f0 = i.randAngle, i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 17,
          color: 5,
          count: t(10039),
          rings: 1,
          speed: 0.1,
          speed2: 1,
          angle: t(10016),
          angleStep: 0.09817477,
          transform: 16914
        }), i.f1 = 3.141593 / i.ci3, i.f0 += i.f1, i.f0 = e(i.f0), i.setShotRecord(0, 16, 0, 90, -1, i.f6, -999), i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 17,
          color: 5,
          count: t(10039),
          rings: 1,
          speed: 0.1,
          speed2: 1,
          angle: t(10016),
          angleStep: 0.09817477,
          transform: 16914
        }), i.ci3 >= 32) {
          yield 20, s = 3;
          break;
        }
        s = 2;
        break;
      }
      case 2: {
        i.ci3++, yield 20, s = 3;
        break;
      }
      case 3: {
        s = 1;
        break;
      }
      case 4:
        return;
      default:
        return;
    }
}
function* H0(i) {
  let s = 0, a = 0;
  for (; s >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), s) {
      case 0: {
        i.ci3 = 8, i.f0 = -1.570796, i.isDiff(n | f) && (i.f1 = 0.232711), i.isDiff(c | f) && (i.f1 = 0.369599), i.isDiff(l | f) && (i.f1 = 0.380799), i.isDiff(r | f) && (i.f1 = 0.392699), i.ci0 = 30, s = 1;
        break;
      }
      case 1: {
        i.isDiff(n | c | f) && (i.f7 = i.f0), i.isDiff(l | r | f) && (i.f7 = 3.141593 - i.f0), i.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 18,
          color: 1,
          count: 16,
          rings: 1,
          speed: 5.1,
          speed2: 1,
          angle: t(10023),
          angleStep: t(10017),
          transform: 512
        }), yield 8, s = 2;
        break;
      }
      case 2: {
        if (--i.ci0 > 0) {
          s = 1;
          break;
        }
        s = 3;
        break;
      }
      case 3: {
        i.interpSlot(10016, 600, 0, 0, -1.570796, -3.141593, 0, 0), i.ci0 = 75, s = 4;
        break;
      }
      case 4: {
        i.isDiff(n | c | f) && (i.f7 = i.f0), i.isDiff(l | r | f) && (i.f7 = 3.141593 - i.f0), i.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 18,
          color: 1,
          count: 16,
          rings: 1,
          speed: 5.1,
          speed2: 1,
          angle: t(10023),
          angleStep: t(10017),
          transform: 512
        }), yield 8, s = 5;
        break;
      }
      case 5: {
        if (--i.ci0 > 0) {
          s = 4;
          break;
        }
        s = 6;
        break;
      }
      case 6: {
        i.interpSlot(10016, 600, 0, 0, -3.141593, -4.712389, 0, 0), i.ci0 = 75, s = 7;
        break;
      }
      case 7: {
        i.isDiff(n | c | f) && (i.f7 = i.f0), i.isDiff(l | r | f) && (i.f7 = 3.141593 - i.f0), i.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 18,
          color: 1,
          count: 16,
          rings: 1,
          speed: 5.1,
          speed2: 1,
          angle: t(10023),
          angleStep: t(10017),
          transform: 512
        }), yield 8, s = 8;
        break;
      }
      case 8: {
        if (--i.ci0 > 0) {
          s = 7;
          break;
        }
        s = 9;
        break;
      }
      case 9: {
        i.interpSlot(10016, 600, 0, 0, -4.712389, -6.283185, 0, 0), i.ci0 = 75, s = 10;
        break;
      }
      case 10: {
        i.isDiff(n | c | f) && (i.f7 = i.f0), i.isDiff(l | r | f) && (i.f7 = 3.141593 - i.f0), i.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 18,
          color: 1,
          count: 16,
          rings: 1,
          speed: 5.1,
          speed2: 1,
          angle: t(10023),
          angleStep: t(10017),
          transform: 512
        }), yield 8, s = 11;
        break;
      }
      case 11: {
        if (--i.ci0 > 0) {
          s = 10;
          break;
        }
        s = 12;
        break;
      }
      case 12:
        return;
      default:
        return;
    }
}
function* z0(i) {
  let s = 0, a = 0;
  for (; s >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), s) {
      case 0: {
        i.ci3 = 8, i.f0 = -1.570796, i.ci0 = 4, i.isDiff(n | f) && (i.f1 = 0.058178), i.isDiff(c | f) && (i.f1 = 0.0924), i.isDiff(l | f) && (i.f1 = 0.0924), i.isDiff(r | f) && (i.f1 = 0.0924), s = 1;
        break;
      }
      case 1: {
        i.isDiff(n | c | f) && (i.f7 = i.f0), i.isDiff(l | r | f) && (i.f7 = 3.141593 - i.f0), i.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 17,
          color: 1,
          count: 61,
          rings: 1,
          speed: 4,
          speed2: 1,
          angle: t(10023),
          angleStep: t(10017),
          transform: 514
        }), yield 60, s = 2;
        break;
      }
      case 2: {
        if (--i.ci0 > 0) {
          s = 1;
          break;
        }
        s = 3;
        break;
      }
      case 3: {
        i.interpSlot(10016, 600, 0, 0, -1.570796, -3.141593, 0, 0), i.ci0 = 10, s = 4;
        break;
      }
      case 4: {
        i.isDiff(n | c | f) && (i.f7 = i.f0), i.isDiff(l | r | f) && (i.f7 = 3.141593 - i.f0), i.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 17,
          color: 1,
          count: 61,
          rings: 1,
          speed: 4,
          speed2: 1,
          angle: t(10023),
          angleStep: t(10017),
          transform: 514
        }), yield 60, s = 5;
        break;
      }
      case 5: {
        if (--i.ci0 > 0) {
          s = 4;
          break;
        }
        s = 6;
        break;
      }
      case 6: {
        i.interpSlot(10016, 600, 0, 0, -3.141593, -4.712389, 0, 0), i.ci0 = 10, s = 7;
        break;
      }
      case 7: {
        i.isDiff(n | c | f) && (i.f7 = i.f0), i.isDiff(l | r | f) && (i.f7 = 3.141593 - i.f0), i.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 17,
          color: 1,
          count: 61,
          rings: 1,
          speed: 4,
          speed2: 1,
          angle: t(10023),
          angleStep: t(10017),
          transform: 514
        }), yield 60, s = 8;
        break;
      }
      case 8: {
        if (--i.ci0 > 0) {
          s = 7;
          break;
        }
        s = 9;
        break;
      }
      case 9: {
        i.interpSlot(10016, 600, 0, 0, -4.712389, -6.283185, 0, 0), i.ci0 = 10, s = 10;
        break;
      }
      case 10: {
        i.isDiff(n | c | f) && (i.f7 = i.f0), i.isDiff(l | r | f) && (i.f7 = 3.141593 - i.f0), i.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 17,
          color: 1,
          count: 61,
          rings: 1,
          speed: 4,
          speed2: 1,
          angle: t(10023),
          angleStep: t(10017),
          transform: 514
        }), yield 60, s = 11;
        break;
      }
      case 11: {
        if (--i.ci0 > 0) {
          s = 10;
          break;
        }
        s = 12;
        break;
      }
      case 12:
        return;
      default:
        return;
    }
}
function* O0(i) {
  let s = 0, a = 0;
  for (; s >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), s) {
      case 0: {
        i.ci3 = 8, i.f0 = -1.570796, yield 1200, s = 1;
        break;
      }
      case 1: {
        i.ci0 = 30, i.playSfx(15), s = 2;
        break;
      }
      case 2: {
        i.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 6,
          color: 6,
          count: 3,
          rings: 4,
          speed: 2,
          speed2: 1,
          angle: 0,
          angleStep: 0.7853982,
          transform: 514
        }), yield 20, s = 3;
        break;
      }
      case 3: {
        s = 2;
        break;
      }
      case 4:
        return;
      default:
        return;
    }
}
function* X0(i) {
  let s = 0, a = 0;
  for (; s >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), s) {
      case 0: {
        i.setShotRecord(0, 131072, 0, 100, -1, -1, -1), i.setShotRecord(1, 16384, 0, 2, 2, -1, -1), i.ci0 = 12, i.ci2 = 60, i.isDiff(n | f) && (i.i7 = 24), i.isDiff(c | f) && (i.i7 = 48), i.isDiff(l | f) && (i.i7 = 52), i.isDiff(r | f) && (i.i7 = 56), s = 1;
        break;
      }
      case 1: {
        if (i.setShotRecord(2, 32, 0, 60, -1, 0.023333, 0), i.f0 = i.randAngle, i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 17,
          color: 1,
          count: t(10007),
          rings: 1,
          speed: 1,
          speed2: 1,
          angle: t(10016),
          angleStep: 0.09817477,
          transform: 148002
        }), i.f1 = 3.141593 / i.i7, i.f0 += i.f1, i.setShotRecord(2, 32, 0, 60, -1, -0.033333, 0), i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 17,
          color: 1,
          count: t(10007),
          rings: 1,
          speed: 1,
          speed2: 1,
          angle: t(10016),
          angleStep: 0.09817477,
          transform: 148002
        }), yield i.delay(i.ci2), i.ci2 -= 2, --i.ci0 > 0) {
          s = 1;
          break;
        }
        s = 2;
        break;
      }
      case 2: {
        i.ci0 = 10, i.setShotRecord(1, 16384, 0, 2, 10, -1, -1), i.ci2 = 80, i.isDiff(n | f) && (i.i7 = 23), i.isDiff(c | f) && (i.i7 = 47), i.isDiff(l | f) && (i.i7 = 49), i.isDiff(r | f) && (i.i7 = 51), s = 3;
        break;
      }
      case 3: {
        if (i.setShotRecord(2, 32, 0, 60, -1, 3333e-6, 0.01309), i.f0 = i.randAngle, i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 17,
          color: 9,
          count: t(10007),
          rings: 1,
          speed: 1,
          speed2: 1,
          angle: t(10016),
          angleStep: 0.09817477,
          transform: 148002
        }), i.f1 = 3.141593 / i.i7, i.f0 += i.f1, i.setShotRecord(2, 32, 0, 60, -1, 3333e-6, -0.01309), i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 17,
          color: 9,
          count: t(10007),
          rings: 1,
          speed: 1,
          speed2: 1,
          angle: t(10016),
          angleStep: 0.09817477,
          transform: 148002
        }), yield i.delay(i.ci2), i.ci2 -= 6, --i.ci0 > 0) {
          s = 3;
          break;
        }
        s = 4;
        break;
      }
      case 4: {
        i.ci0 = 10, i.setMisc136(18, 2), i.callSubAlloc(1, 85), i.isDiff(n | f) && (i.ci2 = 120), i.isDiff(c | f) && (i.ci2 = 120), i.isDiff(l | f) && (i.ci2 = 120), i.isDiff(r | f) && (i.ci2 = 100), i.isDiff(n | f) && (i.i7 = 70), i.isDiff(c | f) && (i.i7 = 104), i.isDiff(l | f) && (i.i7 = 104), i.isDiff(r | f) && (i.i7 = 104), i.isDiff(n | f) && (i.f7 = 1), i.isDiff(c | f) && (i.f7 = 1), i.isDiff(l | f) && (i.f7 = 1), i.isDiff(r | f) && (i.f7 = 1.4), s = 5;
        break;
      }
      case 5: {
        if (i.f0 = i.randAngle, i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 17,
          color: 5,
          count: t(10007),
          rings: 1,
          speed: t(10023),
          speed2: 1,
          angle: t(10016),
          angleStep: 0.09817477,
          transform: 514
        }), yield i.delay(i.ci2), i.ci2 <= 15) {
          s = 7;
          break;
        }
        s = 6;
        break;
      }
      case 6: {
        i.ci2 -= 5, s = 7;
        break;
      }
      case 7: {
        s = 5;
        break;
      }
      case 8:
        return;
      default:
        return;
    }
}
function* Y0(i) {
  let s = 0, a = 0;
  for (; s >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), s) {
      case 0: {
        i.setShotRecord(1, 16384, 0, 2, 6, -1, -1), i.isDiff(n | f) && (i.ci3 = 1), i.isDiff(c | f) && (i.ci3 = 6), i.isDiff(l | f) && (i.ci3 = 6), i.isDiff(r | f) && (i.ci3 = 6), i.isDiff(n | f) && (i.i7 = 20), i.isDiff(c | f) && (i.i7 = 28), i.isDiff(l | f) && (i.i7 = 30), i.isDiff(r | f) && (i.i7 = 30), s = 1;
        break;
      }
      case 1: {
        if (i.setShotRecord(0, 16, 0, 60, -1, 0.026667, -999), i.f0 = i.randAngle, i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 17,
          color: 5,
          count: t(10039),
          rings: 1,
          speed: 0.1,
          speed2: 1,
          angle: t(10016),
          angleStep: 0.09817477,
          transform: 16914
        }), i.f1 = 3.141593 / i.ci3, i.f0 += i.f1, i.f0 = e(i.f0), i.setShotRecord(0, 16, 0, 90, -1, 0.028333, -999), i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 17,
          color: 5,
          count: t(10039),
          rings: 1,
          speed: 0.1,
          speed2: 1,
          angle: t(10016),
          angleStep: 0.09817477,
          transform: 16914
        }), i.ci3 >= i.i7) {
          yield 20, s = 3;
          break;
        }
        s = 2;
        break;
      }
      case 2: {
        i.ci3++, yield 20, s = 3;
        break;
      }
      case 3: {
        s = 1;
        break;
      }
      case 4:
        return;
      default:
        return;
    }
}
function* N0(i) {
  let s = 0, a = 0;
  for (; s >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), s) {
      case 0: {
        i.ci0 -= 25, i.playSfx(42), i.setTimeout(13), s = 1;
        break;
      }
      case 1: {
        i.spawnEnemy(87, 1176352768, 1176353792, 0, 10, -2, 10), yield 2, s = 2;
        break;
      }
      case 2: {
        if (--i.ci0 > 0) {
          s = 1;
          break;
        }
        s = 3;
        break;
      }
      case 3: {
        i.setTimeout(-1), i.playSfx(25);
        return;
      }
      default:
        return;
    }
}
function* U0(i) {
  let s = 0, a = 0;
  for (; s >= 0; )
    switch (++a > 2e3 && (a = 0, yield 1), s) {
      case 0: {
        i.clearScriptFlags(3), yield 60, s = 1;
        break;
      }
      case 1:
        return;
      default:
        return;
    }
}
const G0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  sub_0: h,
  sub_1: m,
  sub_10: x,
  sub_11: _,
  sub_12: B,
  sub_13: C,
  sub_14: T,
  sub_15: I,
  sub_16: L,
  sub_17: P,
  sub_18: d,
  sub_19: H,
  sub_2: w,
  sub_20: z,
  sub_21: O,
  sub_22: X,
  sub_23: Y,
  sub_24: N,
  sub_25: U,
  sub_26: G,
  sub_27: j,
  sub_28: V,
  sub_29: W,
  sub_3: D,
  sub_30: q,
  sub_31: J,
  sub_32: b,
  sub_33: K,
  sub_34: u,
  sub_35: k,
  sub_36: Q,
  sub_37: Z,
  sub_38: $,
  sub_39: i0,
  sub_4: A,
  sub_40: s0,
  sub_41: f0,
  sub_42: a0,
  sub_43: t0,
  sub_44: e0,
  sub_45: c0,
  sub_46: l0,
  sub_47: r0,
  sub_48: n0,
  sub_49: o,
  sub_5: M,
  sub_50: o0,
  sub_51: p0,
  sub_52: d0,
  sub_53: b0,
  sub_54: u0,
  sub_55: k0,
  sub_56: S0,
  sub_57: y0,
  sub_58: g0,
  sub_59: h0,
  sub_6: R,
  sub_60: m0,
  sub_61: w0,
  sub_62: D0,
  sub_63: A0,
  sub_64: M0,
  sub_65: R0,
  sub_66: F0,
  sub_67: v0,
  sub_68: E0,
  sub_69: x0,
  sub_7: F,
  sub_70: _0,
  sub_71: S,
  sub_72: B0,
  sub_73: y,
  sub_74: C0,
  sub_75: p,
  sub_76: T0,
  sub_77: I0,
  sub_78: g,
  sub_79: L0,
  sub_8: v,
  sub_80: P0,
  sub_81: H0,
  sub_82: z0,
  sub_83: O0,
  sub_84: X0,
  sub_85: Y0,
  sub_86: N0,
  sub_87: U0,
  sub_9: E
}, Symbol.toStringTag, { value: "Module" })), j0 = [
  {
    index: 0,
    offset: 50932,
    instructions: [
      {
        offset: 0,
        time: 260,
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
        args: new Int32Array([7, -1040187392, 1124073472, 2e3, 2, 1e3])
      },
      {
        offset: 0,
        time: 1700,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([7, -1040187392, 1114636288, 2e3, 2, 1e3])
      },
      {
        offset: 0,
        time: 2100,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([7, -1040187392, 1119879168, 2e3, 2, 1e3])
      },
      {
        offset: 0,
        time: 2400,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([7, -1040187392, 1126170624, 2e3, 2, 1e3])
      },
      {
        offset: 0,
        time: 2700,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([7, -1040187392, 1124073472, 2e3, 2, 1e3])
      },
      {
        offset: 0,
        time: 3e3,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([7, -1040187392, 1107296256, 2e3, 2, 1e3])
      },
      {
        offset: 0,
        time: 3400,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([16, 1128267776, -1048576e3, 6e4, -2, 1e5])
      },
      { offset: 0, time: 3420, opcode: 6, size: 12, difficultyMask: 255, args: new Int32Array([2]) },
      { offset: 0, time: 3421, opcode: 7, size: 8, difficultyMask: 255, args: new Int32Array([]) },
      { offset: 0, time: 3421, opcode: 8, size: 16, difficultyMask: 255, args: new Int32Array([0, 1]) },
      { offset: 0, time: 3422, opcode: 10, size: 12, difficultyMask: 255, args: new Int32Array([0]) },
      { offset: 0, time: 4022, opcode: 6, size: 12, difficultyMask: 255, args: new Int32Array([0]) },
      { offset: 0, time: 4022, opcode: 7, size: 8, difficultyMask: 255, args: new Int32Array([]) },
      {
        offset: 0,
        time: 4022,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([28, 1128267776, -1048576e3, 6e4, -2, 1e5])
      },
      { offset: 0, time: 4023, opcode: 7, size: 8, difficultyMask: 255, args: new Int32Array([]) },
      { offset: 0, time: 4023, opcode: 8, size: 16, difficultyMask: 255, args: new Int32Array([0, 1]) },
      { offset: 0, time: 4023, opcode: 10, size: 12, difficultyMask: 255, args: new Int32Array([0]) },
      { offset: 0, time: 4023, opcode: 6, size: 12, difficultyMask: 255, args: new Int32Array([4]) },
      { offset: 0, time: 4083, opcode: 6, size: 12, difficultyMask: 255, args: new Int32Array([3]) },
      { offset: 0, time: 4083, opcode: 7, size: 8, difficultyMask: 255, args: new Int32Array([]) },
      {
        offset: 0,
        time: 4083,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([29, 1128267776, -1048576e3, 6e4, -2, 1e5])
      },
      { offset: 0, time: 4084, opcode: 7, size: 8, difficultyMask: 255, args: new Int32Array([]) },
      { offset: 0, time: 4084, opcode: 8, size: 16, difficultyMask: 255, args: new Int32Array([1, 1]) },
      { offset: 0, time: 4084, opcode: 10, size: 12, difficultyMask: 255, args: new Int32Array([1]) },
      {
        offset: 0,
        time: 4264,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([48, 1128267776, 1128267776, 6e4, -2, 1e5])
      },
      { offset: 0, time: 4264, opcode: 10, size: 12, difficultyMask: 255, args: new Int32Array([0]) },
      { offset: 0, time: 4264, opcode: 6, size: 12, difficultyMask: 255, args: new Int32Array([5]) },
      { offset: 0, time: 4265, opcode: 7, size: 8, difficultyMask: 255, args: new Int32Array([]) }
    ]
  }
], V0 = {
  version: 2048,
  subCount: 88,
  subs: [],
  timelines: j0
}, q0 = {
  route: "stage6a",
  source: "ecldata6.ecl",
  subCount: 88,
  timelineCount: 1,
  cards: [
    {
      sub: 21,
      id: 119,
      name: "天丸「壺中の天地」",
      owner: "八意永琳",
      face: 0,
      bonus: 3e7,
      lastSpell: !1
    },
    {
      sub: 21,
      id: 120,
      name: "天丸「壺中の天地」",
      owner: "八意永琳",
      face: 0,
      bonus: 3e7,
      lastSpell: !1
    },
    {
      sub: 21,
      id: 121,
      name: "天丸「壺中の天地」",
      owner: "八意永琳",
      face: 0,
      bonus: 3e7,
      lastSpell: !1
    },
    {
      sub: 21,
      id: 122,
      name: "天丸「壺中の天地」",
      owner: "八意永琳",
      face: 0,
      bonus: 3e7,
      lastSpell: !1
    },
    {
      sub: 52,
      id: 123,
      name: "覚神「神代の記憶」",
      owner: "八意永琳",
      face: 0,
      bonus: 3e7,
      lastSpell: !1
    },
    {
      sub: 52,
      id: 124,
      name: "覚神「神代の記憶」",
      owner: "八意永琳",
      face: 0,
      bonus: 3e7,
      lastSpell: !1
    },
    {
      sub: 52,
      id: 125,
      name: "神符「天人の系譜」",
      owner: "八意永琳",
      face: 0,
      bonus: 3e7,
      lastSpell: !1
    },
    {
      sub: 52,
      id: 126,
      name: "神符「天人の系譜」",
      owner: "八意永琳",
      face: 0,
      bonus: 3e7,
      lastSpell: !1
    },
    {
      sub: 56,
      id: 127,
      name: "蘇活「生命遊戯　-ライフゲーム-」",
      owner: "八意永琳",
      face: 0,
      bonus: 3e7,
      lastSpell: !1
    },
    {
      sub: 56,
      id: 128,
      name: "蘇活「生命遊戯　-ライフゲーム-」",
      owner: "八意永琳",
      face: 0,
      bonus: 3e7,
      lastSpell: !1
    },
    {
      sub: 56,
      id: 129,
      name: "蘇生「ライジングゲーム」",
      owner: "八意永琳",
      face: 0,
      bonus: 3e7,
      lastSpell: !1
    },
    {
      sub: 56,
      id: 130,
      name: "蘇生「ライジングゲーム」",
      owner: "八意永琳",
      face: 0,
      bonus: 3e7,
      lastSpell: !1
    },
    {
      sub: 63,
      id: 131,
      name: "操神「オモイカネディバイス」",
      owner: "八意永琳",
      face: 0,
      bonus: 3e7,
      lastSpell: !1
    },
    {
      sub: 63,
      id: 132,
      name: "操神「オモイカネディバイス」",
      owner: "八意永琳",
      face: 0,
      bonus: 3e7,
      lastSpell: !1
    },
    {
      sub: 63,
      id: 133,
      name: "神脳「オモイカネブレイン」",
      owner: "八意永琳",
      face: 0,
      bonus: 3e7,
      lastSpell: !1
    },
    {
      sub: 63,
      id: 134,
      name: "神脳「オモイカネブレイン」",
      owner: "八意永琳",
      face: 0,
      bonus: 3e7,
      lastSpell: !1
    },
    {
      sub: 68,
      id: 135,
      name: "天呪「アポロ１３」",
      owner: "八意永琳",
      face: 0,
      bonus: 3e7,
      lastSpell: !1
    },
    {
      sub: 68,
      id: 136,
      name: "天呪「アポロ１３」",
      owner: "八意永琳",
      face: 0,
      bonus: 3e7,
      lastSpell: !1
    },
    {
      sub: 68,
      id: 137,
      name: "天呪「アポロ１３」",
      owner: "八意永琳",
      face: 0,
      bonus: 3e7,
      lastSpell: !1
    },
    {
      sub: 68,
      id: 138,
      name: "天呪「アポロ１３」",
      owner: "八意永琳",
      face: 0,
      bonus: 3e7,
      lastSpell: !1
    },
    {
      sub: 73,
      id: 139,
      name: "秘術「天文密葬法」",
      owner: "八意永琳",
      face: 0,
      bonus: 3e7,
      lastSpell: !1
    },
    {
      sub: 73,
      id: 140,
      name: "秘術「天文密葬法」",
      owner: "八意永琳",
      face: 0,
      bonus: 3e7,
      lastSpell: !1
    },
    {
      sub: 73,
      id: 141,
      name: "秘術「天文密葬法」",
      owner: "八意永琳",
      face: 0,
      bonus: 3e7,
      lastSpell: !1
    },
    {
      sub: 73,
      id: 142,
      name: "秘術「天文密葬法」",
      owner: "八意永琳",
      face: 0,
      bonus: 3e7,
      lastSpell: !1
    },
    {
      sub: 78,
      id: 143,
      name: "禁薬「蓬莱の薬」",
      owner: "八意永琳",
      face: 0,
      bonus: 5e6,
      lastSpell: !0
    },
    {
      sub: 78,
      id: 144,
      name: "禁薬「蓬莱の薬」",
      owner: "八意永琳",
      face: 0,
      bonus: 5e6,
      lastSpell: !0
    },
    {
      sub: 78,
      id: 145,
      name: "禁薬「蓬莱の薬」",
      owner: "八意永琳",
      face: 0,
      bonus: 5e6,
      lastSpell: !0
    },
    {
      sub: 78,
      id: 146,
      name: "禁薬「蓬莱の薬」",
      owner: "八意永琳",
      face: 0,
      bonus: 5e6,
      lastSpell: !0
    }
  ],
  scripts: G0,
  waves: V0
};
export {
  q0 as STAGE6A_SCRIPT
};
