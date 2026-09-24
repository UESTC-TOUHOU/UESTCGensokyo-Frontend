import { r as t, n } from "./index-BaCUa-wb.js";
const c = 1, r = 2, l = 4, a = 8, s = 16;
function* g(i) {
  let f = 0, e = 0;
  for (; f >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), f) {
      case 0: {
        i.setAnm(0), i.setBounds(24, 24), i.clearScriptFlags(2), i.setMisc160(8), i.callSubAlloc(0, 2), i.movePolar(30, 4, 0, 3), yield 30, f = 1;
        break;
      }
      case 1: {
        i.setHeadingSpeed(0, 4), i.callSubAlloc(0, 1), i.ci1 = 3, i.setHeadingVel(1571e-6), yield 5e3, f = 2;
        break;
      }
      case 2:
        return;
      default:
        return;
    }
}
function* k(i) {
  let f = 0, e = 0;
  for (; f >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), f) {
      case 0: {
        i.isDiff(c | s) && (i.i0 = 33), i.isDiff(r | s) && (i.i0 = 33), i.isDiff(l | s) && (i.i0 = 26), i.isDiff(a | s) && (i.i0 = 18), i.isDiff(c | s) && (i.f0 = 3), i.isDiff(r | s) && (i.f0 = 3.2), i.isDiff(l | s) && (i.f0 = 4), i.isDiff(a | s) && (i.f0 = 4.6), i.isDiff(c | s) && (i.f1 = 0), i.isDiff(r | s) && (i.f1 = 2), i.isDiff(l | s) && (i.f1 = 2.3), i.isDiff(a | s) && (i.f1 = 2.4), i.isDiff(c | s) && (i.f2 = 0), i.isDiff(r | s) && (i.f2 = 0), i.isDiff(l | s) && (i.f2 = 2), i.isDiff(a | s) && (i.f2 = 2.2), i.isDiff(c | s) && (i.f3 = 0), i.isDiff(r | s) && (i.f3 = 0), i.isDiff(l | s) && (i.f3 = 0), i.isDiff(a | s) && (i.f3 = 1.8), f = 1;
        break;
      }
      case 1: {
        i.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 6,
          color: 6,
          count: 1,
          rings: 1,
          speed: t(10016),
          speed2: 2,
          angle: 0,
          angleStep: 0.28559932,
          transform: 515
        }), i.isDiff(r | l | a | s) && i.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 6,
          color: 6,
          count: 2,
          rings: 1,
          speed: t(10017),
          speed2: 1,
          angle: 0,
          angleStep: 0.3926991,
          transform: 515
        }), i.isDiff(l | a | s) && i.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 6,
          color: 6,
          count: 3,
          rings: 1,
          speed: t(10018),
          speed2: 1,
          angle: 0,
          angleStep: 0.3926991,
          transform: 515
        }), i.isDiff(a | s) && i.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 6,
          color: 6,
          count: 4,
          rings: 1,
          speed: t(10019),
          speed2: 1,
          angle: 0,
          angleStep: 0.3926991,
          transform: 515
        }), yield i.delay(i.i0), f = 1;
        break;
      }
      case 2:
        return;
      default:
        return;
    }
}
function* m(i) {
  let f = 0, e = 0;
  for (; f >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), f) {
      case 0: {
        i.isDiff(c | s) && (i.i0 = 30), i.isDiff(r | s) && (i.i0 = 10), i.isDiff(l | s) && (i.i0 = 10), i.isDiff(a | s) && (i.i0 = 10), i.isDiff(c | s) && (i.f0 = 2), i.isDiff(r | s) && (i.f0 = 3), i.isDiff(l | s) && (i.f0 = 4), i.isDiff(a | s) && (i.f0 = 4.6), i.isDiff(c | s) && (i.f1 = 0), i.isDiff(r | s) && (i.f1 = 1.6), i.isDiff(l | s) && (i.f1 = 2.5), i.isDiff(a | s) && (i.f1 = 3), i.isDiff(c | s) && (i.f2 = 0), i.isDiff(r | s) && (i.f2 = 0), i.isDiff(l | s) && (i.f2 = 2), i.isDiff(a | s) && (i.f2 = 2.5), f = 1;
        break;
      }
      case 1: {
        i.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 6,
          color: 6,
          count: 1,
          rings: 1,
          speed: t(10016),
          speed2: 2,
          angle: 0,
          angleStep: 0.28559932,
          transform: 515
        }), i.isDiff(r | l | a | s) && i.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 6,
          color: 6,
          count: 1,
          rings: 1,
          speed: t(10017),
          speed2: 0.5,
          angle: 3.1415927,
          angleStep: 0.28559932,
          transform: 515
        }), i.isDiff(l | a | s) && i.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 6,
          color: 6,
          count: 2,
          rings: 1,
          speed: t(10018),
          speed2: 0.5,
          angle: 3.1415927,
          angleStep: 0.28559932,
          transform: 515
        }), yield i.delay(i.i0), f = 1;
        break;
      }
      case 2:
        return;
      default:
        return;
    }
}
function* b(i) {
  let f = 0, e = 0;
  for (; f >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), f) {
      case 0: {
        i.setAnm(0), i.setBounds(24, 24), i.clearScriptFlags(2), i.setMisc160(30), i.movePolar(30, 4, 1.570796, 2), yield 30, f = 1;
        break;
      }
      case 1: {
        i.setHeadingSpeed(1.570796, 2.5), i.callSubAlloc(0, 4), i.ci1 = 3, i.setHeadingVel(1571e-6), yield 5e3, f = 2;
        break;
      }
      case 2:
        return;
      default:
        return;
    }
}
function* w(i) {
  let f = 0, e = 0;
  for (; f >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), f) {
      case 0: {
        i.isDiff(c | s) && (i.ci0 = 1), i.isDiff(r | s) && (i.ci0 = 1), i.isDiff(l | s) && (i.ci0 = 2), i.isDiff(a | s) && (i.ci0 = 3), f = 1;
        break;
      }
      case 1: {
        i.isDiff(r | l | a | s) && i.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 6,
          color: 6,
          count: 1,
          rings: 1,
          speed: 3,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.28559932,
          transform: 515
        }), i.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 6,
          color: 6,
          count: 1,
          rings: 1,
          speed: 1.5,
          speed2: 0.5,
          angle: 3.1415927,
          angleStep: 0.28559932,
          transform: 515
        }), yield 4, f = 2;
        break;
      }
      case 2: {
        if (--i.ci0 > 0) {
          f = 1;
          break;
        }
        f = 3;
        break;
      }
      case 3:
        return;
      default:
        return;
    }
}
function* A(i) {
  let f = 0, e = 0;
  for (; f >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), f) {
      case 0: {
        i.setAnm(30), i.setExtraAnm(0, 48), i.setBounds(24, 24), i.setMisc160(30), i.clearScriptFlags(2), i.movePolar(50, 4, 1.570796, 2), yield 30, f = 1;
        break;
      }
      case 1: {
        i.isDiff(c | s) && i.spawnShot({
          mode: "aimedRing",
          // aim 2 of 96..104
          type: 2,
          color: 2,
          count: 8,
          rings: 1,
          speed: 1,
          speed2: 0.8,
          angle: 0,
          angleStep: 0,
          transform: 514
        }), i.isDiff(r | s) && i.spawnShot({
          mode: "aimedRing",
          // aim 2 of 96..104
          type: 2,
          color: 2,
          count: 32,
          rings: 1,
          speed: 1.5,
          speed2: 0.8,
          angle: 0,
          angleStep: 0,
          transform: 514
        }), i.isDiff(l | s) && i.spawnShot({
          mode: "aimedRing",
          // aim 2 of 96..104
          type: 2,
          color: 2,
          count: 32,
          rings: 2,
          speed: 2,
          speed2: 0.8,
          angle: 0,
          angleStep: 0,
          transform: 514
        }), i.isDiff(a | s) && i.spawnShot({
          mode: "aimedRing",
          // aim 2 of 96..104
          type: 2,
          color: 2,
          count: 48,
          rings: 3,
          speed: 2.5,
          speed2: 0.8,
          angle: 0,
          angleStep: 0,
          transform: 514
        }), yield 20, f = 2;
        break;
      }
      case 2: {
        i.setHeadingSpeed(1.570796, 0.5), i.f0 = 1.570796, i.f1 = -0.05236, i.linkChildAttached(6, 0, 0, 180, -2, 100), yield 10, f = 3;
        break;
      }
      case 3: {
        i.linkChildAttached(6, 0, 0, 180, -2, 100), yield 10, f = 4;
        break;
      }
      case 4: {
        i.linkChildAttached(6, 0, 0, 180, -2, 100), yield 10, f = 5;
        break;
      }
      case 5: {
        i.linkChildAttached(6, 0, 0, 180, -2, 100), yield 600, f = 6;
        break;
      }
      case 6: {
        i.setSpeedAccel(-0.02), yield 5e3, f = 7;
        break;
      }
      case 7:
        return;
      default:
        return;
    }
}
function* h(i) {
  let f = 0, e = 0;
  for (; f >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), f) {
      case 0: {
        i.setAnm(54), i.setBounds(24, 24), i.clearScriptFlags(16), i.setScriptFlags(3), i.setHitFlash(1), i.moveArc(60, i.f0, i.f1, 0.833333), yield 60, f = 1;
        break;
      }
      case 1: {
        i.setAccel(6e3, i.f1, 0), yield 5e3, f = 2;
        break;
      }
      case 2:
        return;
      default:
        return;
    }
}
function* S(i) {
  let f = 0, e = 0;
  for (; f >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), f) {
      case 0: {
        if (i.setAnm(18), i.setExtraAnm(0, 48), i.setBounds(48, 48), i.setMisc160(50), i.clearScriptFlags(2), i.setMisc144(5, 4), i.movePolar(30, 4, 1.570796, 4), i.posX >= 192) {
          f = 2;
          break;
        }
        f = 1;
        break;
      }
      case 1: {
        i.f1 = 0.10472, f = 3;
        break;
      }
      case 2: {
        i.f1 = -0.10472, f = 3;
        break;
      }
      case 3: {
        if (i.f0 = -3.141593, i.linkChildAttached(8, 0, 0, 300, -2, 100), i.f0 = -1.047198, i.linkChildAttached(8, 0, 0, 200, -2, 100), i.f0 = 1.047198, i.linkChildAttached(8, 0, 0, 300, -2, 100), i.posX >= 192) {
          f = 5;
          break;
        }
        f = 4;
        break;
      }
      case 4: {
        i.f1 = -0.07854, f = 6;
        break;
      }
      case 5: {
        i.f1 = 0.07854, f = 6;
        break;
      }
      case 6: {
        i.f0 = -3.141593, i.linkChildAttached(10, 0, 0, 300, -2, 100), i.f0 = -1.884956, i.linkChildAttached(10, 0, 0, 200, -2, 100), i.f0 = -0.628319, i.linkChildAttached(10, 0, 0, 300, -2, 100), i.f0 = 0.628319, i.linkChildAttached(10, 0, 0, 200, -2, 100), i.f0 = 1.884956, i.linkChildAttached(10, 0, 0, 200, -2, 100), yield 30, f = 7;
        break;
      }
      case 7: {
        i.setHeadingSpeed(0.392699, 0.7), i.f0 = 1.570796, i.f1 = 0.05236, yield 5e3, f = 8;
        break;
      }
      case 8:
        return;
      default:
        return;
    }
}
function* M(i) {
  let f = 0, e = 0;
  for (; f >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), f) {
      case 0: {
        i.setAnm(54), i.setBounds(24, 24), i.clearScriptFlags(16), i.setScriptFlags(3), i.setHitFlash(1), i.moveArc(20, i.f0, i.f1, 1.5), yield 20, f = 1;
        break;
      }
      case 1: {
        i.setAccel(6e3, i.f1, 0), i.callSubAlloc(0, 9), yield 5e3, f = 2;
        break;
      }
      case 2:
        return;
      default:
        return;
    }
}
function* D(i) {
  let f = 0, e = 0;
  for (; f >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), f) {
      case 0: {
        i.setShotRecord(0, 128, 0, 50, 1, 0, 2.5), i.isDiff(c | s) && (i.i0 = 51), i.isDiff(r | s) && (i.i0 = 21), i.isDiff(l | s) && (i.i0 = 17), i.isDiff(a | s) && (i.i0 = 9), i.isDiff(c | s) && (i.f1 = 1.5), i.isDiff(r | s) && (i.f1 = 1.5), i.isDiff(l | s) && (i.f1 = 1.5), i.isDiff(a | s) && (i.f1 = 1.8), f = 1;
        break;
      }
      case 1: {
        i.f0 = i.moveAngle - 3.141593, i.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 2,
          color: 2,
          count: 1,
          rings: 1,
          speed: t(10017),
          speed2: 0.8,
          angle: t(10016),
          angleStep: 0,
          transform: 642
        }), yield i.delay(i.i0), f = 1;
        break;
      }
      default:
        return;
    }
}
function* I(i) {
  let f = 0, e = 0;
  for (; f >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), f) {
      case 0: {
        i.setAnm(54), i.setBounds(24, 24), i.clearScriptFlags(16), i.setScriptFlags(3), i.setHitFlash(1), i.moveArc(20, i.f0, i.f1, 2.5), yield 20, f = 1;
        break;
      }
      case 1: {
        i.setAccel(6e3, i.f1, 0), i.callSubAlloc(0, 11), yield 5e3, f = 2;
        break;
      }
      case 2:
        return;
      default:
        return;
    }
}
function* z(i) {
  let f = 0, e = 0;
  for (; f >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), f) {
      case 0: {
        i.isDiff(c | s) && (i.i0 = 32), i.isDiff(r | s) && (i.i0 = 32), i.isDiff(l | s) && (i.i0 = 32), i.isDiff(a | s) && (i.i0 = 16), i.isDiff(c | s) && (i.i1 = 1), i.isDiff(r | s) && (i.i1 = 2), i.isDiff(l | s) && (i.i1 = 3), i.isDiff(a | s) && (i.i1 = 3), i.isDiff(c | s) && (i.f1 = 1.5), i.isDiff(r | s) && (i.f1 = 2.2), i.isDiff(l | s) && (i.f1 = 2.2), i.isDiff(a | s) && (i.f1 = 3), f = 1;
        break;
      }
      case 1: {
        if (i.f0 = i.moveAngle + 3.141593, i.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 1,
          color: 6,
          count: 1,
          rings: t(10001),
          speed: t(10017),
          speed2: 1.2,
          angle: t(10069),
          angleStep: 0,
          transform: 514
        }), i.i0 <= 8) {
          f = 3;
          break;
        }
        f = 2;
        break;
      }
      case 2: {
        i.i0--, f = 3;
        break;
      }
      case 3: {
        yield i.delay(i.i0), f = 1;
        break;
      }
      default:
        return;
    }
}
function* v(i) {
  let f = 0, e = 0;
  for (; f >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), f) {
      case 0: {
        i.setAnm(0), i.setBounds(24, 24), i.clearScriptFlags(2), i.setMisc160(8), i.movePolar(30, 4, 0, 3), yield 30, f = 1;
        break;
      }
      case 1: {
        i.setHeadingSpeed(0, 2), i.callSubAlloc(0, 13), i.ci1 = 3, i.setHeadingVel(1571e-6), yield 5e3, f = 2;
        break;
      }
      case 2:
        return;
      default:
        return;
    }
}
function* C(i) {
  let f = 0, e = 0;
  for (; f >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), f) {
      case 0: {
        i.isDiff(c | s) && (i.i0 = 61), i.isDiff(r | s) && (i.i0 = 21), i.isDiff(l | s) && (i.i0 = 19), i.isDiff(a | s) && (i.i0 = 15), i.isDiff(c | s) && (i.i1 = 3), i.isDiff(r | s) && (i.i1 = 6), i.isDiff(l | s) && (i.i1 = 8), i.isDiff(a | s) && (i.i1 = 10), i.isDiff(c | s) && (i.f0 = 1.2), i.isDiff(r | s) && (i.f0 = 1.2), i.isDiff(l | s) && (i.f0 = 1.4), i.isDiff(a | s) && (i.f0 = 1.6), i.isDiff(c | s) && (i.f1 = 0.174533), i.isDiff(r | s) && (i.f1 = 0.349066), i.isDiff(l | s) && (i.f1 = 0.392699), i.isDiff(a | s) && (i.f1 = 0.448799), f = 1;
        break;
      }
      case 1: {
        i.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 2,
          color: 6,
          count: t(10001),
          rings: 1,
          speed: t(10016),
          speed2: 1,
          angle: 0,
          angleStep: t(10017),
          transform: 515
        }), yield i.delay(i.i0), f = 1;
        break;
      }
      case 2:
        return;
      default:
        return;
    }
}
function* F(i) {
  let f = 0, e = 0;
  for (; f >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), f) {
      case 0: {
        i.removeAllBullets(), i.enemyFunc95();
        return;
      }
      default:
        return;
    }
}
function* R(i) {
  let f = 0, e = 0;
  for (; f >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), f) {
      case 0: {
        i.clearScriptFlags(56), i.spawnEffectAt(51, 16, 0), yield 4, f = 1;
        break;
      }
      case 1: {
        i.spawnEffectAt(51, 16, 0), yield 4, f = 2;
        break;
      }
      case 2: {
        i.spawnEffectAt(51, 16, 0), yield 4, f = 3;
        break;
      }
      case 3: {
        i.spawnEffectAt(51, 16, 0), yield 4, f = 4;
        break;
      }
      case 4: {
        i.spawnEffectAt(51, 16, 0), yield 4, f = 5;
        break;
      }
      case 5: {
        i.spawnEffectAt(51, 16, 0), f = 6;
        break;
      }
      case 6: {
        i.spawnEffectAt(51, 4, 0), yield 4, f = 7;
        break;
      }
      case 7: {
        f = 6;
        break;
      }
      case 8:
        return;
      default:
        return;
    }
}
function* E(i) {
  let f = 0, e = 0;
  for (; f >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), f) {
      case 0: {
        i.setAnmScripts6Alt(0), i.clearScriptFlags(20), i.setBossPresent(0), i.setBounds(48, 32), i.setMisc160(60), i.eclSetLives(0), i.setSpellTimer(18e4, 36), i.setRelPos(32, -32), i.moveRelative(60, 4, 192, 128), i.setMisc126(17, 1), yield 100, f = 1;
        break;
      }
      case 1: {
        f = 1;
        break;
      }
      default:
        return;
    }
}
function* _(i) {
  let f = 0, e = 0;
  for (; f >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), f) {
      case 0: {
        i.clearScriptFlags(16), i.setScriptFlags(4), i.setScriptFlags(3), i.setMisc160(180), i.setMisc144(10, 5), i.setLives(18e3), i.eclSetLives(4), i.setMisc136(5, 0), i.setMisc129(2), i.setDeathCallbackSub(22), i.setSpellTimer(2400, 36), i.setPhase(0, 2300, 36), i.setLifeBarSlice(0, 0, i.phase0, 16744576), i.spawnEffect(6, 1050253722, 1060320051, 1050253722, 1124073472), yield 10, f = 1;
        break;
      }
      case 1: {
        i.spawnEffect(6, -1097229926, 1060320051, 1050253722, 1124073472), yield 10, f = 2;
        break;
      }
      case 2: {
        i.spawnEffect(6, 1050253722, 1060320051, -1097229926, 1124073472), yield 10, f = 3;
        break;
      }
      case 3: {
        i.spawnEffect(6, -1097229926, -1087163597, -1097229926, 1119879168), yield 10, f = 4;
        break;
      }
      case 4: {
        i.spawnEffect(6, 1050253722, -1087163597, -1097229926, 1119879168), yield 10, f = 5;
        break;
      }
      case 5: {
        i.spawnEffect(6, -1097229926, -1087163597, 1050253722, 1119879168), yield 10, f = 6;
        break;
      }
      case 6: {
        i.setMotionClamp(32, 48, 352, 128), i.i0 = 20, i.f0 = 3.141593, i.f1 = -0.02618, i.f2 = 1.066667, i.ci2 = 0, i.i0 = 69, i.autoAnm(), i.i1 = 2, i.linkChildAttached(21, 0, 0, 700, -2, 100), i.i1 = 4, i.i0 = 73, i.linkChildAttached(21, 0, 0, 900, -2, 100), i.i1 = 6, i.i0 = 69, i.linkChildAttached(21, 0, 0, 700, -2, 100), i.i1 = 10, i.i0 = 73, i.linkChildAttached(21, 0, 0, 900, -2, 100), i.i1 = 13, i.i0 = 73, i.linkChildAttached(21, 0, 0, 700, -2, 100), i.callSubAlloc(0, 18), i.callSubAlloc(0, 19), yield 120, f = 7;
        break;
      }
      case 7: {
        i.nop(), yield 300, f = 8;
        break;
      }
      case 8: {
        i.moveBounce(80, 4, 1.5), yield 80, f = 9;
        break;
      }
      case 9: {
        f = 7;
        break;
      }
      default:
        return;
    }
}
function* B(i) {
  let f = 0, e = 0;
  for (; f >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), f) {
      case 0: {
        if (i.hpRatio >= 128) {
          yield 8, f = 2;
          break;
        }
        f = 1;
        break;
      }
      case 1: {
        i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 14,
          color: 6,
          count: 16,
          rings: 1,
          speed: 3.4,
          speed2: 0.9,
          angle: t(10082),
          angleStep: 0.049087387,
          transform: 512
        }), i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 15,
          color: 6,
          count: 16,
          rings: 1,
          speed: 2.4,
          speed2: 0.9,
          angle: t(10082),
          angleStep: 0.049087387,
          transform: 512
        }), yield 8, f = 2;
        break;
      }
      case 2: {
        f = 0;
        break;
      }
      default:
        return;
    }
}
function* x(i) {
  let f = 0, e = 0;
  for (; f >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), f) {
      case 0: {
        i.i0 = 71, f = 1;
        break;
      }
      case 1: {
        if (i.parentChainCount >= 5) {
          yield 120, f = 3;
          break;
        }
        f = 2;
        break;
      }
      case 2: {
        i.i1 = 13, i.linkChildAttached(21, 0, 0, 700, -2, 100), yield 120, f = 3;
        break;
      }
      case 3: {
        if (i.nop(), i.parentChainCount >= 5) {
          yield 120, f = 5;
          break;
        }
        f = 4;
        break;
      }
      case 4: {
        i.i1 = 13, i.linkChildAttached(21, 0, 0, 700, -2, 100), yield 120, f = 5;
        break;
      }
      case 5: {
        if (i.nop(), i.parentChainCount >= 5) {
          yield 120, f = 7;
          break;
        }
        f = 6;
        break;
      }
      case 6: {
        i.i1 = 13, i.linkChildAttached(21, 0, 0, 700, -2, 100), yield 120, f = 7;
        break;
      }
      case 7: {
        if (i.nop(), i.parentChainCount >= 5) {
          yield 120, f = 9;
          break;
        }
        f = 8;
        break;
      }
      case 8: {
        i.i1 = 13, i.linkChildAttached(21, 0, 0, 700, -2, 100), yield 120, f = 9;
        break;
      }
      case 9: {
        if (i.nop(), i.parentChainCount >= 5) {
          yield 120, f = 11;
          break;
        }
        f = 10;
        break;
      }
      case 10: {
        i.i1 = 13, i.linkChildAttached(21, 0, 0, 700, -2, 100), yield 120, f = 11;
        break;
      }
      case 11: {
        f = 1;
        break;
      }
      default:
        return;
    }
}
function* T(i) {
  let f = 0, e = 0;
  for (; f >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), f) {
      case 0: {
        i.ci0 = 15, i.f3 = 2.094395, i.isDiff(c | s) && (i.i7 = 1), i.isDiff(r | s) && (i.i7 = 1), i.isDiff(l | s) && (i.i7 = 2), i.isDiff(a | s) && (i.i7 = 2), i.isDiff(c | s) && (i.i6 = 1), i.isDiff(r | s) && (i.i6 = 1), i.isDiff(l | s) && (i.i6 = 1), i.isDiff(a | s) && (i.i6 = 2), i.isDiff(c | s) && (i.f7 = 2), i.isDiff(r | s) && (i.f7 = 2), i.isDiff(l | s) && (i.f7 = 2.1), i.isDiff(a | s) && (i.f7 = 2.1), i.isDiff(c | s) && (i.f6 = 1.6), i.isDiff(r | s) && (i.f6 = 1.6), i.isDiff(l | s) && (i.f6 = 1.8), i.isDiff(a | s) && (i.f6 = 1.6), f = 1;
        break;
      }
      case 1: {
        i.f1 = i.orbitAngle + i.f3, i.f2 = i.orbitAngle - i.f3, i.f1 = n(i.f1), i.f2 = n(i.f2), i.f3 = n(i.f3), i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 13,
          color: t(10001),
          count: 1,
          rings: t(10007),
          speed: 1.4,
          speed2: 0.9,
          angle: t(10077),
          angleStep: 0.049087387,
          transform: 514
        }), i.isDiff(r | l | a | s) && i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 12,
          color: t(10001),
          count: 1,
          rings: t(10006),
          speed: t(10023),
          speed2: 0.9,
          angle: t(10017),
          angleStep: 0.049087387,
          transform: 2
        }), i.isDiff(r | l | a | s) && i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 13,
          color: t(10001),
          count: 1,
          rings: t(10006),
          speed: t(10022),
          speed2: 0.9,
          angle: t(10018),
          angleStep: 0.049087387,
          transform: 2
        }), yield 7, f = 2;
        break;
      }
      case 2: {
        i.f1 = i.orbitAngle + i.f3, i.f2 = i.orbitAngle - i.f3, i.f1 = n(i.f1), i.f2 = n(i.f2), i.f3 = n(i.f3), i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 12,
          color: t(10001),
          count: 1,
          rings: t(10007),
          speed: 1.4,
          speed2: 0.9,
          angle: t(10077),
          angleStep: 0.049087387,
          transform: 514
        }), i.isDiff(r | l | a | s) && i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 13,
          color: t(10001),
          count: 1,
          rings: t(10006),
          speed: t(10023),
          speed2: 0.9,
          angle: t(10017),
          angleStep: 0.049087387,
          transform: 2
        }), i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 12,
          color: t(10001),
          count: 1,
          rings: t(10006),
          speed: t(10022),
          speed2: 0.9,
          angle: t(10018),
          angleStep: 0.049087387,
          transform: 2
        }), yield 7, f = 3;
        break;
      }
      case 3: {
        if (--i.ci0 > 0) {
          f = 1;
          break;
        }
        f = 4;
        break;
      }
      case 4: {
        i.f3 = 2.094395, f = 5;
        break;
      }
      case 5: {
        i.f1 = i.orbitAngle + i.f3, i.f2 = i.orbitAngle - i.f3, i.f3 += 0.031416, i.f1 = n(i.f1), i.f2 = n(i.f2), i.f3 = n(i.f3), i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 13,
          color: t(10001),
          count: 1,
          rings: t(10007),
          speed: 1.4,
          speed2: 0.9,
          angle: t(10077),
          angleStep: 0.049087387,
          transform: 514
        }), i.isDiff(r | l | a | s) && i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 12,
          color: t(10001),
          count: 1,
          rings: t(10006),
          speed: t(10023),
          speed2: 0.9,
          angle: t(10017),
          angleStep: 0.049087387,
          transform: 2
        }), i.isDiff(r | l | a | s) && i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 13,
          color: t(10001),
          count: 1,
          rings: t(10006),
          speed: t(10022),
          speed2: 0.9,
          angle: t(10018),
          angleStep: 0.049087387,
          transform: 2
        }), yield 7, f = 6;
        break;
      }
      case 6: {
        i.f1 = i.orbitAngle + i.f3, i.f2 = i.orbitAngle - i.f3, i.f3 += 0.031416, i.f1 = n(i.f1), i.f2 = n(i.f2), i.f3 = n(i.f3), i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 12,
          color: t(10001),
          count: 1,
          rings: t(10007),
          speed: 1.4,
          speed2: 0.9,
          angle: t(10077),
          angleStep: 0.049087387,
          transform: 514
        }), i.isDiff(r | l | a | s) && i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 13,
          color: t(10001),
          count: 1,
          rings: t(10006),
          speed: t(10023),
          speed2: 0.9,
          angle: t(10017),
          angleStep: 0.049087387,
          transform: 2
        }), i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 12,
          color: t(10001),
          count: 1,
          rings: t(10006),
          speed: t(10022),
          speed2: 0.9,
          angle: t(10018),
          angleStep: 0.049087387,
          transform: 2
        }), yield 7, f = 7;
        break;
      }
      case 7: {
        f = 5;
        break;
      }
      default:
        return;
    }
}
function* P(i) {
  let f = 0, e = 0;
  for (; f >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), f) {
      case 0: {
        i.setAnm(i.i0), i.effectWithYoukai(1), i.setBounds(24, 24), i.setMisc160(200), i.clearScriptFlags(16), i.setShotNoFireRadius(0), i.ci1 = 255, i.i7 = 0, i.setTimeout(8), i.moveArc(120, i.f0, i.f1, i.f2), yield 1, f = 1;
        break;
      }
      case 1: {
        i.setScriptFlags(2), yield 119, f = 2;
        break;
      }
      case 2: {
        i.setAccel(3e4, i.f1, 0), i.f0 = i.orbitAngle, i.callSubAlloc(0, 20), yield 3e4, f = 3;
        break;
      }
      case 3:
        return;
      default:
        return;
    }
}
function* L(i) {
  let f = 0, e = 0;
  for (; f >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), f) {
      case 0: {
        i.setScriptFlags(4), i.clearScriptFlags(16), i.endSpell(), i.setMisc136(5, 0), i.setTimeout(-1), i.setMisc144(10, 5), i.setMisc160(240), i.setLives(18e3), i.eclSetLives(3), i.setMisc129(2), i.setDeathCallbackSub(28), i.setSpellTimer(2400, 41), i.setPhase(0, 2400, 41), i.setLifeBarSlice(0, 0, i.phase0, 16744576), i.setMotionClamp(32, 48, 352, 160), i.i0 = 20, yield 120, f = 1;
        break;
      }
      case 1: {
        i.f0 = 3.141593, i.f1 = -6283e-6, i.f2 = 1.066667, i.ci2 = 0, i.i0 = 70, i.autoAnm(), i.i1 = 2, i.linkChildAttached(24, 0, 0, 4e3, -2, 100), i.i1 = 4, i.linkChildAttached(24, 0, 0, 6e3, -2, 100), i.i1 = 6, i.linkChildAttached(24, 0, 0, 4e3, -2, 100), i.i1 = 10, i.linkChildAttached(24, 0, 0, 7e3, -2, 100), i.i1 = 13, i.linkChildAttached(24, 0, 0, 4e3, -2, 100), i.f0 = 0, i.f1 = 6981e-6, i.f2 = 0.533333, i.ci2 = 1, i.i0 = 74, i.autoAnm(), i.i1 = 2, i.linkChildAttached(24, 0, 0, 4e3, -2, 100), i.i1 = 4, i.linkChildAttached(24, 0, 0, 6e3, -2, 100), i.i1 = 6, i.linkChildAttached(24, 0, 0, 4e3, -2, 100), i.i1 = 10, i.linkChildAttached(24, 0, 0, 7e3, -2, 100), i.i1 = 13, i.linkChildAttached(24, 0, 0, 4e3, -2, 100), yield 120, f = 2;
        break;
      }
      case 2: {
        i.nop(), yield 300, f = 3;
        break;
      }
      case 3: {
        i.moveBounce(80, 4, 1), yield 80, f = 4;
        break;
      }
      case 4: {
        f = 2;
        break;
      }
      default:
        return;
    }
}
function* Y(i) {
  let f = 0, e = 0;
  for (; f >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), f) {
      case 0: {
        i.isDiff(c | s) && (i.ci1 = 14), i.isDiff(r | s) && (i.ci1 = 10), i.isDiff(l | s) && (i.ci1 = 10), i.isDiff(a | s) && (i.ci1 = 10), i.isDiff(c | s) && (i.ci0 = 8), i.isDiff(r | s) && (i.ci0 = 10), i.isDiff(l | s) && (i.ci0 = 10), i.isDiff(a | s) && (i.ci0 = 10), i.isDiff(c | s) && (i.i7 = 1), i.isDiff(r | s) && (i.i7 = 2), i.isDiff(l | s) && (i.i7 = 3), i.isDiff(a | s) && (i.i7 = 4), i.isDiff(c | s) && (i.f4 = 1.1), i.isDiff(r | s) && (i.f4 = 1.1), i.isDiff(l | s) && (i.f4 = 1.2), i.isDiff(a | s) && (i.f4 = 1.3), i.f3 = 2.094395, f = 1;
        break;
      }
      case 1: {
        if (i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 13,
          color: t(10001),
          count: t(10007),
          rings: 1,
          speed: t(10020),
          speed2: 0.9,
          angle: t(10077),
          angleStep: 0.049087387,
          transform: 514
        }), yield i.delay(i.ci1), i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 12,
          color: t(10001),
          count: t(10007),
          rings: 1,
          speed: t(10020),
          speed2: 0.9,
          angle: t(10077),
          angleStep: 0.049087387,
          transform: 514
        }), yield i.delay(i.ci1), --i.ci0 > 0) {
          f = 1;
          break;
        }
        f = 2;
        break;
      }
      case 2: {
        i.f3 = 0, f = 3;
        break;
      }
      case 3: {
        i.f1 = i.orbitAngle + i.f3, i.f3 -= 0.031416, i.f1 = n(i.f1), i.f3 = n(i.f3), i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 13,
          color: t(10001),
          count: t(10007),
          rings: 1,
          speed: t(10020),
          speed2: 0.9,
          angle: t(10017),
          angleStep: 0.049087387,
          transform: 514
        }), yield i.delay(i.ci1), i.f1 = i.orbitAngle + i.f3, i.f3 -= 0.031416, i.f1 = n(i.f1), i.f3 = n(i.f3), i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 12,
          color: t(10001),
          count: t(10007),
          rings: 1,
          speed: t(10020),
          speed2: 0.9,
          angle: t(10017),
          angleStep: 0.049087387,
          transform: 514
        }), yield i.delay(i.ci1), f = 3;
        break;
      }
      default:
        return;
    }
}
function* H(i) {
  let f = 0, e = 0;
  for (; f >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), f) {
      case 0: {
        i.setAnm(i.i0), i.effectWithYoukai(1), i.setBounds(24, 24), i.setMisc160(200), i.clearScriptFlags(16), i.setShotNoFireRadius(0), i.ci1 = 255, i.i7 = 0, i.setTimeout(8), i.moveArc(120, i.f0, i.f1, i.f2), yield 1, f = 1;
        break;
      }
      case 1: {
        i.setScriptFlags(2), yield 119, f = 2;
        break;
      }
      case 2: {
        i.setAccel(3e4, i.f1, 0), i.f0 = i.orbitAngle, i.callSubAlloc(0, 23), yield 3e4, f = 3;
        break;
      }
      case 3:
        return;
      default:
        return;
    }
}
function* X(i) {
  let f = 0, e = 0;
  for (; f >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), f) {
      case 0: {
        i.setScriptFlags(4), i.clearScriptFlags(16), i.endSpell(), i.setMisc147(1), i.setBossPresent(-1), i.moveRelative(60, 1, 256, -32), i.spawnItemRandom(10), i.spawnItemBatch(7), i.clearMotionClamp(), yield 60, f = 1;
        break;
      }
      case 1: {
        i.setBossPresent(-1);
        return;
      }
      default:
        return;
    }
}
function* O(i) {
  let f = 0, e = 0;
  for (; f >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), f) {
      case 0: {
        i.setScriptFlags(4), i.clearScriptFlags(16), i.endSpell(), i.setMisc147(1), i.moveRelative(60, 1, 256, -32), i.clearMotionClamp(), yield 60, f = 1;
        break;
      }
      case 1: {
        i.setBossPresent(-1);
        return;
      }
      default:
        return;
    }
}
function* N(i) {
  let f = 0, e = 0;
  for (; f >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), f) {
      case 0: {
        i.setAnmScripts6Alt(0), i.clearScriptFlags(20), i.setBossPresent(0), i.setBounds(48, 32), i.setMisc160(60), i.eclSetLives(0), i.setSpellTimer(18e4, 36), i.setRelPos(-32, -32), i.moveRelative(60, 4, 192, 128), yield 60, f = 1;
        break;
      }
      case 1: {
        yield* d(i);
        return;
      }
      default:
        return;
    }
}
function* d(i) {
  let f = 0, e = 0;
  for (; f >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), f) {
      case 0: {
        i.setScriptFlags(4), i.clearScriptFlags(16), i.endSpell(), i.setMisc136(5, 0), i.setTimeout(-1), i.setMisc144(10, 5), i.setMisc160(240), i.setLives(18e3), i.eclSetLives(2), i.setMisc129(2), i.setDeathCallbackSub(53), i.setSpellTimer(2400, 53), i.setPhase(0, 2500, 53), i.setLifeBarSlice(0, 0, i.phase0, 16744576), i.setMotionClamp(32, 48, 352, 160), i.setSpellHP(5, 15, 0, 1), yield 120, f = 1;
        break;
      }
      case 1: {
        i.f0 = 3.141593, i.f1 = -0.062832, i.f2 = 0.8, i.ci2 = 0, i.i0 = 71, i.i1 = 4, i.linkChildAttached(30, 0, 0, 6e3, -2, 100), i.i1 = 6, i.linkChildAttached(30, 0, 0, 4e3, -2, 100), i.i1 = 8, i.linkChildAttached(30, 0, 0, 7e3, -2, 100), i.i1 = 10, i.linkChildAttached(30, 0, 0, 7e3, -2, 100), i.f0 = 0, i.f1 = 0.02618, i.f2 = 1.066667, i.ci2 = 1, i.i0 = 72, i.i1 = 13, i.linkChildAttached(30, 0, 0, 4e3, -2, 100), i.i1 = 14, i.linkChildAttached(30, 0, 0, 4e3, -2, 100), i.i1 = 2, i.linkChildAttached(30, 0, 0, 4e3, -2, 100), i.i1 = 4, i.linkChildAttached(30, 0, 0, 6e3, -2, 100), i.f0 = 0, i.f1 = -0.03927, i.f2 = 1.333333, i.ci2 = 2, i.i0 = 75, i.i1 = 6, i.linkChildAttached(30, 0, 0, 4e3, -2, 100), i.i1 = 8, i.linkChildAttached(30, 0, 0, 7e3, -2, 100), i.i1 = 10, i.linkChildAttached(30, 0, 0, 7e3, -2, 100), i.i1 = 13, i.linkChildAttached(30, 0, 0, 4e3, -2, 100), yield 120, f = 2;
        break;
      }
      case 2: {
        i.nop(), yield 300, f = 3;
        break;
      }
      case 3: {
        i.moveBounce(80, 4, 1), yield 80, f = 4;
        break;
      }
      case 4: {
        f = 2;
        break;
      }
      default:
        return;
    }
}
function* W(i) {
  let f = 0, e = 0;
  for (; f >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), f) {
      case 0: {
        i.f3 = 0, i.isDiff(c | s) && (i.ci1 = 30), i.isDiff(r | s) && (i.ci1 = 10), i.isDiff(l | s) && (i.ci1 = 8), i.isDiff(a | s) && (i.ci1 = 6), f = 1;
        break;
      }
      case 1: {
        i.f1 = i.orbitAngle + i.f3, i.f3 -= 0.10472, i.f1 = n(i.f1), i.f3 = n(i.f3), i.f4 = i.randAngle / 300, i.f5 = i.randF32S * 1e-3, i.setShotRecord(0, 32, 0, 300, -1, i.f5, i.f4), i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 13,
          color: t(10001),
          count: 1,
          rings: 1,
          speed: 1.1,
          speed2: 0.9,
          angle: t(10017),
          angleStep: 0.049087387,
          transform: 546
        }), yield i.delay(i.ci1), i.f1 = i.orbitAngle + i.f3, i.f3 -= 0.10472, i.f1 = n(i.f1), i.f3 = n(i.f3), i.f4 = i.randAngle / 300, i.f5 = i.randF32S * 1e-3, i.setShotRecord(0, 32, 0, 300, -1, i.f5, i.f4), i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 12,
          color: t(10001),
          count: 1,
          rings: 1,
          speed: 1.1,
          speed2: 0.9,
          angle: t(10017),
          angleStep: 0.049087387,
          transform: 546
        }), yield i.delay(i.ci1), f = 1;
        break;
      }
      default:
        return;
    }
}
function* V(i) {
  let f = 0, e = 0;
  for (; f >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), f) {
      case 0: {
        i.setAnm(i.i0), i.setBounds(24, 24), i.setMisc160(200), i.clearScriptFlags(16), i.setShotNoFireRadius(0), i.ci1 = 255, i.i7 = 0, i.setTimeout(8), i.moveArc(120, i.f0, i.f1, i.f2), yield 1, f = 1;
        break;
      }
      case 1: {
        i.setScriptFlags(2), yield 119, f = 2;
        break;
      }
      case 2: {
        i.setAccel(3e4, i.f1, 0), i.f0 = i.orbitAngle, i.callSubAlloc(0, 29), yield 3e4, f = 3;
        break;
      }
      case 3:
        return;
      default:
        return;
    }
}
function* j(i) {
  let f = 0, e = 0;
  for (; f >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), f) {
      case 0: {
        i.setScriptFlags(4), i.clearScriptFlags(16), i.endSpell(), i.setMisc144(10, 5), i.setMisc160(240), i.setMisc147(2), i.setLives(18e3), i.eclSetLives(1), i.setMisc129(2), i.setDeathCallbackSub(55), i.setSpellTimer(2400, 55), i.setPhase(0, 2e3, 55), i.setLifeBarSlice(0, 0, i.phase0, 16744576), i.setMotionClamp(32, 48, 352, 160), i.setSpellHP(5, 15, 0, 1), yield 120, f = 1;
        break;
      }
      case 1: {
        i.f0 = 3.141593, i.f1 = -0.10472, i.f2 = 0.666667, i.ci2 = 0, i.i0 = 69, i.i1 = 4, i.linkChildAttached(33, 0, 0, 1e3, -2, 100), i.f0 += 0.523599, i.f0 = n(i.f0), i.i1 = 6, i.linkChildAttached(33, 0, 0, 3e3, -2, 100), i.f0 += 0.523599, i.f0 = n(i.f0), i.i1 = 8, i.linkChildAttached(33, 0, 0, 1e3, -2, 100), i.f0 += 0.523599, i.f0 = n(i.f0), i.i1 = 10, i.linkChildAttached(33, 0, 0, 3e3, -2, 100), i.isDiff(r | l | a | s) && (i.f0 += 0.523599), i.isDiff(r | l | a | s) && (i.f0 = n(i.f0)), i.isDiff(r | l | a | s) && (i.i1 = 13), i.isDiff(r | l | a | s) && i.linkChildAttached(33, 0, 0, 1e3, -2, 100), i.isDiff(r | l | a | s) && (i.f0 += 0.523599), i.isDiff(r | l | a | s) && (i.f0 = n(i.f0)), i.isDiff(r | l | a | s) && (i.i1 = 14), i.isDiff(r | l | a | s) && i.linkChildAttached(33, 0, 0, 3e3, -2, 100), i.isDiff(r | l | a | s) && (i.f0 += 0.523599), i.isDiff(r | l | a | s) && (i.f0 = n(i.f0)), i.isDiff(r | l | a | s) && (i.i1 = 2), i.isDiff(r | l | a | s) && i.linkChildAttached(33, 0, 0, 1e3, -2, 100), i.isDiff(l | a | s) && (i.f0 += 0.523599), i.isDiff(l | a | s) && (i.f0 = n(i.f0)), i.isDiff(l | a | s) && (i.i1 = 4), i.isDiff(l | a | s) && i.linkChildAttached(33, 0, 0, 3e3, -2, 100), i.isDiff(l | a | s) && (i.f0 += 0.523599), i.isDiff(l | a | s) && (i.f0 = n(i.f0)), i.isDiff(l | a | s) && (i.i1 = 6), i.isDiff(l | a | s) && i.linkChildAttached(33, 0, 0, 1e3, -2, 100), i.isDiff(l | a | s) && (i.f0 += 0.523599), i.isDiff(l | a | s) && (i.f0 = n(i.f0)), i.isDiff(l | a | s) && (i.i1 = 8), i.isDiff(l | a | s) && i.linkChildAttached(33, 0, 0, 3e3, -2, 100), i.callSubAlloc(0, 34), yield 120, f = 2;
        break;
      }
      case 2: {
        i.nop(), yield 300, f = 3;
        break;
      }
      case 3: {
        i.moveBounce(80, 4, 1), yield 80, f = 4;
        break;
      }
      case 4: {
        f = 2;
        break;
      }
      default:
        return;
    }
}
function* U(i) {
  let f = 0, e = 0;
  for (; f >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), f) {
      case 0: {
        i.f3 = 0, i.isDiff(c | s) && (i.f7 = 1.1), i.isDiff(r | s) && (i.f7 = 1.4), i.isDiff(l | s) && (i.f7 = 1.5), i.isDiff(a | s) && (i.f7 = 1.7), f = 1;
        break;
      }
      case 1: {
        i.f1 = i.orbitAngle + i.f3, i.f3 -= 0.10472, i.f1 = n(i.f1), i.f3 = n(i.f3), i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 13,
          color: t(10001),
          count: 1,
          rings: 1,
          speed: t(10023),
          speed2: 0.9,
          angle: t(10017),
          angleStep: 0.049087387,
          transform: 514
        }), yield 5, f = 2;
        break;
      }
      case 2: {
        i.f1 = i.orbitAngle + i.f3, i.f3 -= 0.10472, i.f1 = n(i.f1), i.f3 = n(i.f3), i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 12,
          color: t(10001),
          count: 1,
          rings: 1,
          speed: t(10023),
          speed2: 0.9,
          angle: t(10017),
          angleStep: 0.049087387,
          transform: 514
        }), yield 5, f = 3;
        break;
      }
      case 3: {
        f = 1;
        break;
      }
      default:
        return;
    }
}
function* G(i) {
  let f = 0, e = 0;
  for (; f >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), f) {
      case 0: {
        i.setAnm(i.i0), i.effectWithYoukai(1), i.setBounds(24, 24), i.setMisc160(200), i.clearScriptFlags(16), i.setShotNoFireRadius(0), i.ci1 = 255, i.i7 = 0, i.setTimeout(8), i.moveArc(120, i.f0, i.f1, i.f2), yield 1, f = 1;
        break;
      }
      case 1: {
        i.setScriptFlags(2), yield 119, f = 2;
        break;
      }
      case 2: {
        i.setAccel(3e4, i.f1, 0), i.f0 = i.orbitAngle, i.callSubAlloc(0, 32), yield 3e4, f = 3;
        break;
      }
      case 3:
        return;
      default:
        return;
    }
}
function* q(i) {
  let f = 0, e = 0;
  for (; f >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), f) {
      case 0: {
        i.isDiff(c | s) && (i.ci1 = 7), i.isDiff(r | s) && (i.ci1 = 12), i.isDiff(l | s) && (i.ci1 = 14), i.isDiff(a | s) && (i.ci1 = 14), f = 1;
        break;
      }
      case 1: {
        if (i.parentChainCount >= i.ci1) {
          yield 120, f = 3;
          break;
        }
        f = 2;
        break;
      }
      case 2: {
        i.i1 = 13, i.linkChildAttached(33, 0, 0, 700, -2, 100), yield 120, f = 3;
        break;
      }
      case 3: {
        if (i.nop(), i.parentChainCount >= i.ci1) {
          yield 120, f = 5;
          break;
        }
        f = 4;
        break;
      }
      case 4: {
        i.i1 = 4, i.linkChildAttached(33, 0, 0, 700, -2, 100), yield 120, f = 5;
        break;
      }
      case 5: {
        if (i.nop(), i.parentChainCount >= i.ci1) {
          yield 120, f = 7;
          break;
        }
        f = 6;
        break;
      }
      case 6: {
        i.i1 = 8, i.linkChildAttached(33, 0, 0, 700, -2, 100), yield 120, f = 7;
        break;
      }
      case 7: {
        if (i.nop(), i.parentChainCount >= i.ci1) {
          yield 120, f = 9;
          break;
        }
        f = 8;
        break;
      }
      case 8: {
        i.i1 = 2, i.linkChildAttached(33, 0, 0, 700, -2, 100), yield 120, f = 9;
        break;
      }
      case 9: {
        if (i.nop(), i.parentChainCount >= i.ci1) {
          yield 120, f = 11;
          break;
        }
        f = 10;
        break;
      }
      case 10: {
        i.i1 = 6, i.linkChildAttached(33, 0, 0, 700, -2, 100), yield 120, f = 11;
        break;
      }
      case 11: {
        if (i.nop(), i.parentChainCount >= i.ci1) {
          yield 120, f = 13;
          break;
        }
        f = 12;
        break;
      }
      case 12: {
        i.i1 = 8, i.linkChildAttached(33, 0, 0, 700, -2, 100), yield 120, f = 13;
        break;
      }
      case 13: {
        if (i.nop(), i.parentChainCount >= i.ci1) {
          yield 120, f = 15;
          break;
        }
        f = 14;
        break;
      }
      case 14: {
        i.i1 = 10, i.linkChildAttached(33, 0, 0, 700, -2, 100), yield 120, f = 15;
        break;
      }
      case 15: {
        f = 1;
        break;
      }
      default:
        return;
    }
}
function* J(i) {
  let f = 0, e = 0;
  for (; f >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), f) {
      case 0: {
        if (i.i0 = i.timeOrbReady, i.i0 >= 2) {
          f = 2;
          break;
        }
        f = 1;
        break;
      }
      case 1:
        return;
      case 2: {
        i.setAnmScripts6Alt(0), i.clearScriptFlags(8), i.eclSetLives(0), i.setBossPresent(0), i.setLives(2500), i.setLifeBarSlice(0, 0, i.maxHp, 16752800), i.complexSetup(1), yield 70, f = 3;
        break;
      }
      case 3: {
        i.playSfx(5), i.spawnEffectAt(40, 1, -1), yield 4, f = 4;
        break;
      }
      case 4: {
        i.spawnEffectAt(40, 1, -12080), yield 4, f = 5;
        break;
      }
      case 5: {
        i.spawnEffectAt(40, 1, -32640), yield 4, f = 6;
        break;
      }
      case 6: {
        i.spawnEffectAt(40, 1, -49088), yield 50, f = 7;
        break;
      }
      case 7: {
        i.playSfx(15), i.setScriptFlags(8), i.setMisc173(1), i.setMisc129(3), i.setDeathCallbackSub(76), yield* y(i);
        return;
      }
      default:
        return;
    }
}
function* K(i) {
  let f = 0, e = 0;
  for (; f >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), f) {
      case 0: {
        i.setMotionClamp(32, 48, 352, 192), i.setMisc129(2), i.setDeathCallbackSub(22), i.setShotRepeat(0), i.enemyFunc95(), i.setShotSound(-1, -1), i.clearScriptFlags(4), i.setShotOrigin(0, 0), i.setSpellTimer(2400, 22), i.resetSpellTimerSub(), i.setSpellTimerElapsed(0), i.ci3 = 0, i.moveRelative(90, 4, 192, 128), i.isDiff(c | s) && i.startSpell("魔符「ミルキーウェイ」", "霧雨魔理沙", 77, 0, 22e6), i.isDiff(r | s) && i.startSpell("魔符「ミルキーウェイ」", "霧雨魔理沙", 78, 0, 22e6), i.isDiff(l | s) && i.startSpell("魔空「アステロイドベルト」", "霧雨魔理沙", 79, 0, 22e6), i.isDiff(a | s) && i.startSpell("魔空「アステロイドベルト」", "霧雨魔理沙", 80, 0, 22e6), yield 90, f = 1;
        break;
      }
      case 1: {
        i.setScriptFlags(4), i.setMisc160(180), i.f0 = 0, i.callSubAlloc(0, 38), i.callSubAlloc(1, 37), i.f0 = 3.141593, i.f1 = 6545e-6, i.f2 = 0.8, i.ci2 = 0, i.i0 = 73, i.autoAnm(), i.i1 = 2, i.linkChildAttached(40, 0, 0, 600, -2, 100), i.i1 = 4, i.linkChildAttached(40, 0, 0, 1e3, -2, 100), i.i1 = 6, i.linkChildAttached(40, 0, 0, 600, -2, 100), i.i1 = 10, i.linkChildAttached(40, 0, 0, 1e3, -2, 100), i.i1 = 13, i.linkChildAttached(40, 0, 0, 600, -2, 100), yield 100, f = 2;
        break;
      }
      case 2: {
        f = 2;
        break;
      }
      default:
        return;
    }
}
function* Q(i) {
  let f = 0, e = 0;
  for (; f >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), f) {
      case 0: {
        i.f0 = i.randAngle, i.isDiff(c | s) && (i.i0 = 4), i.isDiff(r | s) && (i.i0 = 9), i.isDiff(l | s) && (i.i0 = 17), i.isDiff(a | s) && (i.i0 = 21), i.isDiff(c | s) && (i.f1 = 1.8), i.isDiff(r | s) && (i.f1 = 1.8), i.isDiff(l | s) && (i.f1 = 1.8), i.isDiff(a | s) && (i.f1 = 2.1), i.isDiff(c | s) && (i.i1 = 20), i.isDiff(r | s) && (i.i1 = 15), i.isDiff(l | s) && (i.i1 = 13), i.isDiff(a | s) && (i.i1 = 12), i.isDiff(c | s) && (i.f2 = 0.1309), i.isDiff(r | s) && (i.f2 = 0.1309), i.isDiff(l | s) && (i.f2 = -0.1309), i.isDiff(a | s) && (i.f2 = -0.1309), f = 1;
        break;
      }
      case 1: {
        i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 14,
          color: 1,
          count: t(1e4),
          rings: 1,
          speed: t(10017),
          speed2: 0.9,
          angle: t(10016),
          angleStep: 0.049087387,
          transform: 514
        }), i.f0 -= i.f2, yield i.delay(i.i1), i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 15,
          color: 3,
          count: t(1e4),
          rings: 1,
          speed: t(10017),
          speed2: 0.9,
          angle: t(10016),
          angleStep: 0.049087387,
          transform: 514
        }), i.f0 -= i.f2, yield i.delay(i.i1), f = 1;
        break;
      }
      default:
        return;
    }
}
function* Z(i) {
  let f = 0;
  yield 180;
  let e = 0;
  for (; f >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), f) {
      case 0: {
        i.i0 = 60, i.isDiff(c | s) && (i.i7 = 8), i.isDiff(r | s) && (i.i7 = 4), i.isDiff(l | s) && (i.i7 = 4), i.isDiff(a | s) && (i.i7 = 4), f = 1;
        break;
      }
      case 1: {
        i.f0 = -7, i.f1 = i.randF32 * 224, i.cf0 = i.f0 - i.posX, i.cf1 = i.f1 - i.posY, i.setShotOrigin(i.cf0, i.cf1), i.f2 = i.randF32S * 0.098175, i.f2 += 0.392699, i.f3 = i.randF32 * 0.5, i.f3 += 0.8, i.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 12,
          color: 13,
          count: 1,
          rings: 1,
          speed: t(10019),
          speed2: 0.9,
          angle: t(10018),
          angleStep: 0,
          transform: 514
        }), i.setShotOrigin(0, 0), yield i.delay(i.i7), i.f0 = -7, i.f1 = i.randF32 * 224, i.f1 += 224, i.f2 = i.randF32S * 0.098175, i.f2 += 0.392699, i.f3 = i.randF32 * 0.5, i.f3 += 0.8, i.cf0 = i.f0 - i.posX, i.cf1 = i.f1 - i.posY, i.setShotOrigin(i.cf0, i.cf1), i.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 12,
          color: 13,
          count: 1,
          rings: 1,
          speed: t(10019),
          speed2: 0.9,
          angle: t(10018),
          angleStep: 0,
          transform: 514
        }), i.setShotOrigin(0, 0), yield i.delay(i.i7), i.f0 = 391, i.f1 = i.randF32 * 224, i.f2 = i.randF32S * 0.098175, i.f2 += 2.748893, i.f3 = i.randF32 * 0.5, i.f3 += 0.8, i.cf0 = i.f0 - i.posX, i.cf1 = i.f1 - i.posY, i.setShotOrigin(i.cf0, i.cf1), i.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 13,
          color: 10,
          count: 1,
          rings: 1,
          speed: t(10019),
          speed2: 0.9,
          angle: t(10018),
          angleStep: 0,
          transform: 514
        }), i.setShotOrigin(0, 0), yield i.delay(i.i7), i.f0 = 391, i.f1 = i.randF32 * 224, i.f1 += 224, i.f2 = i.randF32S * 0.098175, i.f2 += 2.748893, i.f3 = i.randF32 * 0.5, i.f3 += 0.8, i.cf0 = i.f0 - i.posX, i.cf1 = i.f1 - i.posY, i.setShotOrigin(i.cf0, i.cf1), i.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 13,
          color: 10,
          count: 1,
          rings: 1,
          speed: t(10019),
          speed2: 0.9,
          angle: t(10018),
          angleStep: 0,
          transform: 514
        }), i.setShotOrigin(0, 0), yield i.delay(i.i7), f = 1;
        break;
      }
      default:
        return;
    }
}
function* $(i) {
  let f = 0, e = 0;
  for (; f >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), f) {
      case 0: {
        i.ci0 = 4, f = 1;
        break;
      }
      case 1: {
        i.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 12,
          color: t(10001),
          count: 3,
          rings: 1,
          speed: 2.3,
          speed2: 0.9,
          angle: t(10077),
          angleStep: 0.049087387,
          transform: 514
        }), yield 10, f = 2;
        break;
      }
      case 2: {
        if (--i.ci0 > 0) {
          f = 1;
          break;
        }
        f = 3;
        break;
      }
      case 3: {
        f = 0;
        break;
      }
      default:
        return;
    }
}
function* i0(i) {
  let f = 0, e = 0;
  for (; f >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), f) {
      case 0: {
        i.setAnm(i.i0), i.effectWithYoukai(1), i.setBounds(24, 24), i.setMisc160(200), i.clearScriptFlags(16), i.ci1 = 255, i.i7 = 0, i.setTimeout(8), i.moveArc(120, i.f0, i.f1, i.f2), yield 1, f = 1;
        break;
      }
      case 1: {
        i.setScriptFlags(2), yield 119, f = 2;
        break;
      }
      case 2: {
        i.setAccel(3e4, i.f1, 0), i.f0 = i.orbitAngle, i.callSubAlloc(0, 39), yield 3e4, f = 3;
        break;
      }
      case 3:
        return;
      default:
        return;
    }
}
function* f0(i) {
  let f = 0, e = 0;
  for (; f >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), f) {
      case 0: {
        i.setMotionClamp(32, 48, 352, 256), i.setMisc129(3), i.setDeathCallbackSub(25), i.setShotRepeat(0), i.enemyFunc95(), i.setShotSound(-1, -1), i.clearScriptFlags(4), i.setShotOrigin(0, 0), i.setSpellTimer(3900, 25), i.resetSpellTimerSub(), i.setSpellTimerElapsed(0), i.ci3 = 0, i.moveRelative(90, 4, 192, 224), i.isDiff(c | s) && i.startSpell("魔符「スターダストレヴァリエ」", "霧雨魔理沙", 81, 0, 22e6), i.isDiff(r | s) && i.startSpell("魔符「スターダストレヴァリエ」", "霧雨魔理沙", 82, 0, 22e6), i.isDiff(l | s) && i.startSpell("黒魔「イベントホライズン」", "霧雨魔理沙", 83, 0, 22e6), i.isDiff(a | s) && i.startSpell("黒魔「イベントホライズン」", "霧雨魔理沙", 84, 0, 22e6), yield 90, f = 1;
        break;
      }
      case 1: {
        if (i.setScriptFlags(4), i.setMisc160(600), i.setSpellTimer(3900, 26), i.f0 = 0, i.f0 = i.randAngle, i.i0 = i.randU31 % 2, i.i0 != 0) {
          f = 3;
          break;
        }
        f = 2;
        break;
      }
      case 2: {
        i.f1 = -9817e-6, f = 4;
        break;
      }
      case 3: {
        i.f1 = -9817e-6, f = 4;
        break;
      }
      case 4: {
        i.f2 = 0.8, i.ci2 = 0, i.i0 = 70, i.autoAnm(), i.i1 = 2, i.i2 = 12, i.linkChildAttached(46, 0, 0, 600, -2, 100), i.i1 = 4, i.i2 = 13, i.linkChildAttached(46, 0, 0, 1e3, -2, 100), i.i1 = 8, i.i2 = 12, i.linkChildAttached(46, 0, 0, 600, -2, 100), i.i1 = 6, i.i2 = 13, i.linkChildAttached(46, 0, 0, 600, -2, 100), i.isDiff(r | l | a | s) && (i.i1 = 10), i.isDiff(r | l | a | s) && (i.i2 = 12), i.isDiff(r | l | a | s) && i.linkChildAttached(46, 0, 0, 1e3, -2, 100), i.isDiff(r | l | a | s) && (i.i1 = 13), i.isDiff(r | l | a | s) && (i.i2 = 13), i.isDiff(r | l | a | s) && i.linkChildAttached(46, 0, 0, 600, -2, 100), i.isDiff(r | l | a | s) && (i.i1 = 14), i.isDiff(r | l | a | s) && (i.i2 = 12), i.isDiff(r | l | a | s) && i.linkChildAttached(46, 0, 0, 600, -2, 100), i.isDiff(l | a | s) && (i.i1 = 10), i.isDiff(l | a | s) && (i.i2 = 12), i.isDiff(l | a | s) && i.linkChildAttached(46, 0, 0, 1e3, -2, 100), i.isDiff(l | a | s) && (i.i1 = 13), i.isDiff(l | a | s) && (i.i2 = 13), i.isDiff(l | a | s) && i.linkChildAttached(46, 0, 0, 600, -2, 100), i.isDiff(a | s) && (i.i1 = 14), i.isDiff(a | s) && (i.i2 = 12), i.isDiff(a | s) && i.linkChildAttached(46, 0, 0, 600, -2, 100), yield 100, f = 5;
        break;
      }
      case 5: {
        f = 5;
        break;
      }
      default:
        return;
    }
}
function* s0(i) {
  let f = 0, e = 0;
  for (; f >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), f) {
      case 0: {
        i.setShotRecord(0, 131072, 0, 280, -1, -1, -1), i.isDiff(c | s) && (i.ci1 = 10), i.isDiff(r | s) && (i.ci1 = 10), i.isDiff(l | s) && (i.ci1 = 10), i.isDiff(a | s) && (i.ci1 = 9), f = 1;
        break;
      }
      case 1: {
        i.f1 = i.moveAngle - 1.570796, i.setShotRecord(1, 16, 0, 60, -1, 0.016667, i.f1), i.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: t(10002),
          color: t(10001),
          count: 1,
          rings: 1,
          speed: 0,
          speed2: 0.9,
          angle: t(10069),
          angleStep: 0.049087387,
          transform: 135704
        }), yield i.delay(i.ci1), f = 1;
        break;
      }
      default:
        return;
    }
}
function* e0(i) {
  let f = 0, e = 0;
  for (; f >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), f) {
      case 0: {
        i.setShotRecord(0, 131072, 0, 200, -1, -1, -1), i.isDiff(c | s) && (i.ci1 = 10), i.isDiff(r | s) && (i.ci1 = 10), i.isDiff(l | s) && (i.ci1 = 10), i.isDiff(a | s) && (i.ci1 = 9), f = 1;
        break;
      }
      case 1: {
        i.f1 = i.moveAngle + 1.570796, i.setShotRecord(1, 16, 0, 90, -1, 0.016667, i.f1), i.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: t(10002),
          color: t(10001),
          count: 1,
          rings: 1,
          speed: 0,
          speed2: 0.9,
          angle: t(10069),
          angleStep: 0.049087387,
          transform: 135704
        }), yield i.delay(i.ci1), f = 1;
        break;
      }
      default:
        return;
    }
}
function* t0(i) {
  let f = 0, e = 0;
  for (; f >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), f) {
      case 0: {
        i.setShotRecord(0, 131072, 0, 200, -1, -1, -1), i.isDiff(c | s) && (i.ci1 = 10), i.isDiff(r | s) && (i.ci1 = 10), i.isDiff(l | s) && (i.ci1 = 10), i.isDiff(a | s) && (i.ci1 = 9), f = 1;
        break;
      }
      case 1: {
        i.f1 = i.moveAngle - 1.570796, i.setShotRecord(1, 16, 0, 90, -1, 0.016667, i.f1), i.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: t(10002),
          color: t(10001),
          count: 1,
          rings: 1,
          speed: 0,
          speed2: 0.9,
          angle: t(10069),
          angleStep: 0.049087387,
          transform: 135704
        }), yield i.delay(i.ci1), f = 1;
        break;
      }
      default:
        return;
    }
}
function* a0(i) {
  let f = 0, e = 0;
  for (; f >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), f) {
      case 0: {
        i.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: t(10002),
          color: t(10001),
          count: 7,
          rings: 1,
          speed: 1,
          speed2: 0.9,
          angle: t(10077),
          angleStep: 0.5235988,
          transform: 514
        }), yield 4, f = 1;
        break;
      }
      case 1: {
        f = 0;
        break;
      }
      default:
        return;
    }
}
function* l0(i) {
  let f = 0, e = 0;
  for (; f >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), f) {
      case 0: {
        i.setAnm(i.i0), i.effectWithYoukai(1), i.setBounds(24, 24), i.setMisc160(200), i.clearScriptFlags(16), i.setShotNoFireRadius(0), i.ci1 = 255, i.i7 = 0, i.setTimeout(8), i.f3 = i.f1 * 4, i.moveArc(120, i.f0, i.f3, i.f2), yield 1, f = 1;
        break;
      }
      case 1: {
        i.setScriptFlags(2), yield 119, f = 2;
        break;
      }
      case 2: {
        i.setAccel(3e4, i.f3, 0), i.callSubAlloc(0, 42), i.interpSlot(10078, 60, 0, 0, i.f3, i.f1, 0, 0), yield 60, f = 3;
        break;
      }
      case 3: {
        i.setAccel(240, i.f1, 0.533333), yield 240, f = 4;
        break;
      }
      case 4: {
        i.nop(), i.setAccel(3e4, i.f1, 0), i.f3 = i.f1 * 1.4, i.interpSlot(10078, 60, 0, 0, i.f1, i.f3, 0, 0), i.f1 = i.f3, i.callSubAlloc(0, 45), yield 300, f = 5;
        break;
      }
      case 5: {
        i.nop(), f = 6;
        break;
      }
      case 6: {
        if (i.setAccel(240, i.f1, -0.9), i.f1 >= 0) {
          f = 8;
          break;
        }
        f = 7;
        break;
      }
      case 7: {
        i.callSubAlloc(0, 43), yield 240, f = 9;
        break;
      }
      case 8: {
        i.callSubAlloc(0, 44), yield 240, f = 9;
        break;
      }
      case 9: {
        i.setAccel(3e4, i.f1, 0), yield 60, f = 10;
        break;
      }
      case 10: {
        i.setAccel(120, i.f1, 1.8), i.callSubAlloc(0, -1), yield 120, f = 11;
        break;
      }
      case 11: {
        i.setAccel(3e4, i.f1, 0), i.f4 = i.f1 * 1.04, i.f4 *= -1, i.interpSlot(10078, 60, 0, 0, i.f1, i.f4, 0, 0), i.f1 = i.f4, i.callSubAlloc(0, 45), yield 60, f = 12;
        break;
      }
      case 12: {
        f = 6;
        break;
      }
      case 13: {
        i.f0 = i.orbitAngle, yield 3e4, f = 14;
        break;
      }
      case 14:
        return;
      default:
        return;
    }
}
function* r0(i) {
  let f = 0, e = 0;
  for (; f >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), f) {
      case 0: {
        i.setScriptFlags(3), i.setMisc177(i.maxHp), i.setMotionClamp(-128, 48, 512, 128), i.setSpellHP(0, 15, 0, 1), i.setMisc129(2), i.setDeathCallbackSub(31), i.setShotRepeat(0), i.enemyFunc95(), i.setShotSound(-1, -1), i.clearScriptFlags(4), i.setShotOrigin(0, 0), i.setSpellTimer(2700, 31), i.resetSpellTimerSub(), i.setSpellTimerElapsed(0), i.ci3 = 0, i.moveRelative(90, 4, 192, 160), i.isDiff(c | s) && i.startSpell("恋符「ノンディレクショナルレーザー」", "霧雨魔理沙", 85, 0, 22e6), i.isDiff(r | s) && i.startSpell("恋符「ノンディレクショナルレーザー」", "霧雨魔理沙", 86, 0, 22e6), i.isDiff(l | s) && i.startSpell("恋風「スターライトタイフーン」", "霧雨魔理沙", 87, 0, 22e6), i.isDiff(a | s) && i.startSpell("恋風「スターライトタイフーン」", "霧雨魔理沙", 88, 0, 22e6), yield 90, f = 1;
        break;
      }
      case 1: {
        i.setScriptFlags(4), i.setMisc160(300), i.f0 = 0, i.callSubAlloc(0, 51), i.isDiff(c | r | s) && (i.f0 = 2.748893), i.isDiff(l | a | s) && (i.f0 = 2.356194), i.isDiff(c | r | s) && (i.f1 = 3808e-6), i.isDiff(l | a | s) && (i.f1 = 3808e-6), i.isDiff(c | r | s) && (i.f2 = 0.533333), i.isDiff(l | a | s) && (i.f2 = 2.133333), i.ci2 = 0, i.i0 = 75, i.autoAnm(), i.i4 = 0, i.i1 = 2, i.linkChildAttached(52, 0, 0, 6e3, -2, 100), i.i1 = 4, i.linkChildAttached(52, 0, 0, 1e4, -2, 100), i.i1 = 6, i.linkChildAttached(52, 0, 0, 6e3, -2, 100), i.i1 = 10, i.linkChildAttached(52, 0, 0, 1e4, -2, 100), i.i1 = 13, i.linkChildAttached(52, 0, 0, 6e3, -2, 100), i.isDiff(c | r | s) && (i.f0 = 0.785398), i.isDiff(l | a | s) && (i.f0 = 0.392699), i.isDiff(c | r | s) && (i.f1 = -3808e-6), i.isDiff(l | a | s) && (i.f1 = -3808e-6), i.isDiff(c | r | s) && (i.f2 = 0.533333), i.isDiff(l | a | s) && (i.f2 = 2.133333), i.isDiff(c | s) && (i.i4 = 120), i.isDiff(r | s) && (i.i4 = 120), i.isDiff(l | s) && (i.i4 = 60), i.isDiff(a | s) && (i.i4 = 60), i.ci2 = 1, i.i0 = 71, i.autoAnm(), i.i1 = 13, i.linkChildAttached(52, 0, 0, 6e3, -2, 100), i.i1 = 10, i.linkChildAttached(52, 0, 0, 1e4, -2, 100), i.i1 = 6, i.linkChildAttached(52, 0, 0, 6e3, -2, 100), i.i1 = 4, i.linkChildAttached(52, 0, 0, 1e4, -2, 100), i.i1 = 2, i.linkChildAttached(52, 0, 0, 6e3, -2, 100), yield 100, f = 2;
        break;
      }
      case 2: {
        f = 2;
        break;
      }
      default:
        return;
    }
}
function* c0(i) {
  let f = 0, e = 0;
  for (; f >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), f) {
      case 0: {
        yield i.delay(i.i4), f = 1;
        break;
      }
      case 1: {
        i.setMisc116(0), i.isDiff(c | r | s) && i.spawnLaser({
          aimed: !1,
          // op 114 keeps the absolute angle
          type: 1,
          color: t(10001),
          angle: t(10077),
          speed: 0,
          tail: 0,
          head: 320,
          startLength: 320,
          width: 16,
          startTime: 60,
          duration: 150,
          despawn: 20,
          hitboxStart: 60,
          hitboxEnd: 20,
          flags: 6
        }), i.isDiff(l | a | s) && i.spawnLaser({
          aimed: !1,
          // op 114 keeps the absolute angle
          type: 1,
          color: t(10001),
          angle: t(10077),
          speed: 0,
          tail: 0,
          head: 320,
          startLength: 320,
          width: 16,
          startTime: 60,
          duration: 200,
          despawn: 10,
          hitboxStart: 60,
          hitboxEnd: 10,
          flags: 6
        }), i.playSfx(16), i.isDiff(c | r | s) && (i.ci0 = 230), i.isDiff(l | a | s) && (i.ci0 = 270), f = 2;
        break;
      }
      case 2: {
        i.setMisc167(0, i.orbitAngle), i.setIntFields(0, 0, 0, 0), yield 1, f = 3;
        break;
      }
      case 3: {
        if (--i.ci0 > 0) {
          f = 2;
          break;
        }
        f = 4;
        break;
      }
      case 4: {
        i.isDiff(c | r | s) && (yield i.delay(100)), i.isDiff(l | a | s) && (yield i.delay(30)), f = 1;
        break;
      }
      default:
        return;
    }
}
function* n0(i) {
  let f = 0, e = 0;
  for (; f >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), f) {
      case 0: {
        i.isDiff(c | s) && (i.ci1 = 33), i.isDiff(r | s) && (i.ci1 = 13), i.isDiff(l | s) && (i.ci1 = 28), i.isDiff(a | s) && (i.ci1 = 18), f = 1;
        break;
      }
      case 1: {
        i.f0 = i.orbitAngle + 3.141593, i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 15,
          color: 1,
          count: 1,
          rings: 1,
          speed: 2,
          speed2: 0.9,
          angle: t(10016),
          angleStep: 0.049087387,
          transform: 514
        }), yield i.delay(i.ci1), i.f0 = i.orbitAngle + 3.141593, i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 14,
          color: 2,
          count: 1,
          rings: 1,
          speed: 2,
          speed2: 0.9,
          angle: t(10016),
          angleStep: 0.049087387,
          transform: 514
        }), yield i.delay(i.ci1), i.f0 = i.orbitAngle + 3.141593, i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 15,
          color: 3,
          count: 1,
          rings: 1,
          speed: 2,
          speed2: 0.9,
          angle: t(10016),
          angleStep: 0.049087387,
          transform: 514
        }), yield i.delay(i.ci1), i.f0 = i.orbitAngle + 3.141593, i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 14,
          color: 4,
          count: 1,
          rings: 1,
          speed: 2,
          speed2: 0.9,
          angle: t(10016),
          angleStep: 0.049087387,
          transform: 514
        }), yield i.delay(i.ci1), i.f0 = i.orbitAngle + 3.141593, i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 15,
          color: 5,
          count: 1,
          rings: 1,
          speed: 2,
          speed2: 0.9,
          angle: t(10016),
          angleStep: 0.049087387,
          transform: 514
        }), yield i.delay(i.ci1), i.f0 = i.orbitAngle + 3.141593, i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 14,
          color: 6,
          count: 1,
          rings: 1,
          speed: 2,
          speed2: 0.9,
          angle: t(10016),
          angleStep: 0.049087387,
          transform: 514
        }), yield i.delay(i.ci1), f = 1;
        break;
      }
      default:
        return;
    }
}
function* o0(i) {
  let f = 0, e = 0;
  for (; f >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), f) {
      case 0: {
        i.isDiff(c | s) && (i.ci1 = 33), i.isDiff(r | s) && (i.ci1 = 13), i.isDiff(l | s) && (i.ci1 = 28), i.isDiff(a | s) && (i.ci1 = 18), f = 1;
        break;
      }
      case 1: {
        i.f0 = i.orbitAngle + 3.141593, i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 15,
          color: 1,
          count: 1,
          rings: 1,
          speed: 2,
          speed2: 0.9,
          angle: t(10016),
          angleStep: 0.049087387,
          transform: 512
        }), yield i.delay(i.ci1), i.f0 = i.orbitAngle + 3.141593, i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 14,
          color: 2,
          count: 1,
          rings: 1,
          speed: 2,
          speed2: 0.9,
          angle: t(10016),
          angleStep: 0.049087387,
          transform: 512
        }), yield i.delay(i.ci1), i.f0 = i.orbitAngle + 3.141593, i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 15,
          color: 3,
          count: 1,
          rings: 1,
          speed: 2,
          speed2: 0.9,
          angle: t(10016),
          angleStep: 0.049087387,
          transform: 512
        }), yield i.delay(i.ci1), i.f0 = i.orbitAngle + 3.141593, i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 14,
          color: 4,
          count: 1,
          rings: 1,
          speed: 2,
          speed2: 0.9,
          angle: t(10016),
          angleStep: 0.049087387,
          transform: 512
        }), yield i.delay(i.ci1), i.f0 = i.orbitAngle + 3.141593, i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 15,
          color: 5,
          count: 1,
          rings: 1,
          speed: 2,
          speed2: 0.9,
          angle: t(10016),
          angleStep: 0.049087387,
          transform: 512
        }), yield i.delay(i.ci1), i.f0 = i.orbitAngle + 3.141593, i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 14,
          color: 6,
          count: 1,
          rings: 1,
          speed: 2,
          speed2: 0.9,
          angle: t(10016),
          angleStep: 0.049087387,
          transform: 512
        }), yield i.delay(i.ci1), f = 1;
        break;
      }
      default:
        return;
    }
}
function* d0(i) {
  let f = 0;
  yield 300;
  let e = 0;
  for (; f >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), f) {
      case 0: {
        i.nop(), i.isDiff(c | s) && (i.ci1 = 120), i.isDiff(r | s) && (i.ci1 = 60), i.isDiff(l | s) && (i.ci1 = 60), i.isDiff(a | s) && (i.ci1 = 60), i.isDiff(c | s) && (i.f1 = 3), i.isDiff(r | s) && (i.f1 = 3), i.isDiff(l | s) && (i.f1 = 2), i.isDiff(a | s) && (i.f1 = 2), f = 1;
        break;
      }
      case 1: {
        if (i.isDiff(c | s) && (i.f0 = 1.4), i.isDiff(r | s) && (i.f0 = 1.4), i.isDiff(l | s) && (i.f0 = 0.9), i.isDiff(a | s) && (i.f0 = 0.9), i.playerY >= 128) {
          f = 3;
          break;
        }
        f = 2;
        break;
      }
      case 2: {
        i.f0 = 3.5, f = 3;
        break;
      }
      case 3: {
        i.setShotRecord(0, 128, 0, 60, 1, 0, i.f0), i.f0 = i.randAngle, i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 13,
          color: 2,
          count: 1,
          rings: 1,
          speed: t(10017),
          speed2: 0.9,
          angle: t(10016),
          angleStep: 0.049087387,
          transform: 642
        }), i.f0 += 1.047198, i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 12,
          color: 4,
          count: 1,
          rings: 1,
          speed: t(10017),
          speed2: 0.9,
          angle: t(10016),
          angleStep: 0.049087387,
          transform: 642
        }), i.f0 += 1.047198, i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 13,
          color: 6,
          count: 1,
          rings: 1,
          speed: t(10017),
          speed2: 0.9,
          angle: t(10016),
          angleStep: 0.049087387,
          transform: 642
        }), i.f0 += 1.047198, i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 12,
          color: 8,
          count: 1,
          rings: 1,
          speed: t(10017),
          speed2: 0.9,
          angle: t(10016),
          angleStep: 0.049087387,
          transform: 642
        }), i.f0 += 1.047198, i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 13,
          color: 10,
          count: 1,
          rings: 1,
          speed: t(10017),
          speed2: 0.9,
          angle: t(10016),
          angleStep: 0.049087387,
          transform: 642
        }), i.f0 += 1.047198, i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 12,
          color: 13,
          count: 1,
          rings: 1,
          speed: t(10017),
          speed2: 0.9,
          angle: t(10016),
          angleStep: 0.049087387,
          transform: 642
        }), yield i.delay(i.ci1), f = 1;
        break;
      }
      default:
        return;
    }
}
function* p0(i) {
  let f = 0, e = 0;
  for (; f >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), f) {
      case 0: {
        i.setAnm(i.i0), i.effectWithYoukai(1), i.setBounds(24, 24), i.setMisc160(200), i.clearScriptFlags(16), i.setShotNoFireRadius(0), i.ci1 = 255, i.i7 = 0, i.setTimeout(8), i.moveArc(120, i.f0, i.f1, i.f2), yield 1, f = 1;
        break;
      }
      case 1: {
        i.setScriptFlags(2), yield 119, f = 2;
        break;
      }
      case 2: {
        i.setAccel(3e4, i.f1, 0), i.f0 = i.orbitAngle, i.callSubAlloc(0, 48), yield 200, f = 3;
        break;
      }
      case 3: {
        i.isDiff(c | r | s) && i.callSubAlloc(1, 49), i.isDiff(l | a | s) && i.callSubAlloc(1, 50), yield 3e4, f = 4;
        break;
      }
      case 4:
        return;
      default:
        return;
    }
}
function* y0(i) {
  let f = 0, e = 0;
  for (; f >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), f) {
      case 0: {
        i.setAnmScripts6Alt(0), i.clearAllBullets(), i.clearScriptFlags(3), i.i0 = i.maxHp, yield 40, f = 1;
        break;
      }
      case 1: {
        i.setBossPresent(-1), i.setMisc126(47, 1), i.setMisc129(1), i.setDeathCallbackSub(54), i.setAnmAlt(0), i.setAnmScripts6Alt(0), i.setMisc126(47, 1), yield 1, f = 2;
        break;
      }
      case 2: {
        i.setBossPresent(0), yield 100, f = 3;
        break;
      }
      case 3: {
        f = 3;
        break;
      }
      default:
        return;
    }
}
function* u0(i) {
  let f = 0, e = 0;
  for (; f >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), f) {
      case 0: {
        i.setAnmAlt(0), i.setAnmScripts6Alt(0), i.setMisc126(47, 1), i.setLives(18e3), i.maxHp = 2500, i.setLifeBarSlice(0, 0, 2500, 16752800), yield 1, f = 1;
        break;
      }
      case 1: {
        i.setBossPresent(0), yield 100, f = 2;
        break;
      }
      case 2: {
        f = 2;
        break;
      }
      default:
        return;
    }
}
function* g0(i) {
  let f = 0, e = 0;
  for (; f >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), f) {
      case 0: {
        i.setMotionClamp(32, 48, 352, 128), i.setMisc129(2), i.setDeathCallbackSub(61), i.setShotRepeat(0), i.enemyFunc95(), i.setShotSound(-1, -1), i.clearScriptFlags(4), i.setShotOrigin(0, 0), i.setSpellTimer(3e3, 61), i.resetSpellTimerSub(), i.setSpellTimerElapsed(0), i.ci3 = 0, i.moveRelative(90, 4, 192, 160), i.isDiff(c | s) && i.startSpell("恋符「マスタースパーク」", "霧雨魔理沙", 89, 0, 22e6), i.isDiff(r | s) && i.startSpell("恋符「マスタースパーク」", "霧雨魔理沙", 90, 0, 22e6), i.isDiff(l | s) && i.startSpell("恋心「ダブルスパーク」", "霧雨魔理沙", 91, 0, 22e6), i.isDiff(a | s) && i.startSpell("恋心「ダブルスパーク」", "霧雨魔理沙", 92, 0, 22e6), yield 90, f = 1;
        break;
      }
      case 1: {
        i.setScriptFlags(4), i.setMisc160(300), i.playSfx(13), i.moveBounce(80, 0, 1), yield* o(i), f = 2;
        break;
      }
      case 2: {
        i.nop(), yield 30, f = 3;
        break;
      }
      case 3: {
        if (i.playSfx(19), i.isDiff(c | r | s) && (i.cf0 = 1.570796), i.isDiff(l | a | s) && (i.cf0 = 1.374447), i.f0 = Math.cos(i.cf0), i.f0 *= 295, i.f1 = Math.sin(i.cf0), i.f1 *= 295, i.spawnEnemyAlt(57, 0, 0, 0, 500, -2, 100), i.spawnEnemyAlt(58, 0, 0, 0, 500, -2, 100), i.spawnEnemyAlt(59, 0, 0, 0, 500, -2, 100), i.spawnEnemyAlt(60, 0, 0, 0, 500, -2, 100), i.setMisc136(10, 0), i.difficulty < 2) {
          yield 100, f = 5;
          break;
        }
        f = 4;
        break;
      }
      case 4: {
        i.cf0 = 1.767146, i.cf0 = 1.767146, i.f0 = Math.cos(i.cf0), i.f0 *= 295, i.f1 = Math.sin(i.cf0), i.f1 *= 295, i.spawnEnemyAlt(57, 0, 0, 0, 500, -2, 100), i.spawnEnemyAlt(58, 0, 0, 0, 500, -2, 100), i.spawnEnemyAlt(59, 0, 0, 0, 500, -2, 100), i.spawnEnemyAlt(60, 0, 0, 0, 500, -2, 100), yield 100, f = 5;
        break;
      }
      case 5: {
        i.nop(), i.callSubAlloc(0, 56), yield 300, f = 6;
        break;
      }
      case 6: {
        f = 7;
        break;
      }
      case 7: {
        i.moveBounce(80, 0, 0.5), yield* o(i), f = 8;
        break;
      }
      case 8: {
        i.nop(), yield 30, f = 9;
        break;
      }
      case 9: {
        if (i.playSfx(19), i.isDiff(c | r | s) && (i.cf0 = i.timer), i.isDiff(l | a | s) && (i.cf0 = i.timer - 0.1309), i.f0 = Math.cos(i.cf0), i.f0 *= 295, i.f1 = Math.sin(i.cf0), i.f1 *= 295, i.spawnEnemyAlt(57, 0, 0, 0, 500, -2, 100), i.spawnEnemyAlt(58, 0, 0, 0, 500, -2, 100), i.spawnEnemyAlt(59, 0, 0, 0, 500, -2, 100), i.spawnEnemyAlt(60, 0, 0, 0, 500, -2, 100), i.setMisc136(10, 0), i.difficulty < 2) {
          yield 400, f = 11;
          break;
        }
        f = 10;
        break;
      }
      case 10: {
        i.cf0 = i.timer + 0.1309, i.f0 = Math.cos(i.cf0), i.f0 *= 295, i.f1 = Math.sin(i.cf0), i.f1 *= 295, i.spawnEnemyAlt(57, 0, 0, 0, 500, -2, 100), i.spawnEnemyAlt(58, 0, 0, 0, 500, -2, 100), i.spawnEnemyAlt(59, 0, 0, 0, 500, -2, 100), i.spawnEnemyAlt(60, 0, 0, 0, 500, -2, 100), yield 400, f = 11;
        break;
      }
      case 11: {
        f = 7;
        break;
      }
      default:
        return;
    }
}
function* k0(i) {
  let f = 0, e = 0;
  for (; f >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), f) {
      case 0: {
        i.setShotRecord(0, 16, 0, 60, -1, 0.016667, -999.900024), i.isDiff(c | s) && (i.ci1 = 60), i.isDiff(r | s) && (i.ci1 = 24), i.isDiff(l | s) && (i.ci1 = 24), i.isDiff(a | s) && (i.ci1 = 24), i.isDiff(c | s) && (i.i0 = 10), i.isDiff(r | s) && (i.i0 = 11), i.isDiff(l | s) && (i.i0 = 13), i.isDiff(a | s) && (i.i0 = 15), f = 1;
        break;
      }
      case 1: {
        i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 15,
          color: 1,
          count: t(1e4),
          rings: 1,
          speed: 2,
          speed2: 0.1,
          angle: t(10082),
          angleStep: 0.20943952,
          transform: 530
        }), i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 14,
          color: 1,
          count: t(1e4),
          rings: 1,
          speed: 1,
          speed2: 0.1,
          angle: t(10082),
          angleStep: 0.20943952,
          transform: 514
        }), yield i.delay(i.ci1), i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 14,
          color: 2,
          count: t(1e4),
          rings: 1,
          speed: 2,
          speed2: 0.1,
          angle: t(10082),
          angleStep: 0.20943952,
          transform: 530
        }), i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 15,
          color: 2,
          count: t(1e4),
          rings: 1,
          speed: 1,
          speed2: 0.1,
          angle: t(10082),
          angleStep: 0.20943952,
          transform: 514
        }), yield i.delay(i.ci1), i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 15,
          color: 3,
          count: t(1e4),
          rings: 1,
          speed: 2,
          speed2: 0.1,
          angle: t(10082),
          angleStep: 0.20943952,
          transform: 530
        }), i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 14,
          color: 3,
          count: t(1e4),
          rings: 1,
          speed: 1,
          speed2: 0.1,
          angle: t(10082),
          angleStep: 0.20943952,
          transform: 514
        }), yield i.delay(i.ci1), i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 14,
          color: 4,
          count: t(1e4),
          rings: 1,
          speed: 2,
          speed2: 0.1,
          angle: t(10082),
          angleStep: 0.20943952,
          transform: 530
        }), i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 15,
          color: 4,
          count: t(1e4),
          rings: 1,
          speed: 1,
          speed2: 0.1,
          angle: t(10082),
          angleStep: 0.20943952,
          transform: 514
        }), yield i.delay(i.ci1), i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 15,
          color: 5,
          count: t(1e4),
          rings: 1,
          speed: 2,
          speed2: 0.1,
          angle: t(10082),
          angleStep: 0.20943952,
          transform: 530
        }), i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 14,
          color: 5,
          count: t(1e4),
          rings: 1,
          speed: 1,
          speed2: 0.1,
          angle: t(10082),
          angleStep: 0.20943952,
          transform: 514
        }), yield i.delay(i.ci1), i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 14,
          color: 6,
          count: t(1e4),
          rings: 1,
          speed: 2.5,
          speed2: 0.1,
          angle: t(10082),
          angleStep: 0.20943952,
          transform: 530
        }), i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 15,
          color: 6,
          count: t(1e4),
          rings: 1,
          speed: 1,
          speed2: 0.1,
          angle: t(10082),
          angleStep: 0.20943952,
          transform: 514
        }), yield i.delay(i.ci1), f = 1;
        break;
      }
      default:
        return;
    }
}
function* m0(i) {
  let f = 0, e = 0;
  for (; f >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), f) {
      case 0: {
        i.setAnmAlt(6), i.setMisc159(3), i.setBounds(24, 24), i.setMisc160(30), i.clearScriptFlags(16), i.clearScriptFlags(3), i.setMisc165(i.cf0), i.f2 = i.posX + i.f0, i.f3 = i.posY + i.f1, i.moveRelative(60, 1, i.f2, i.f3), yield 120, f = 1;
        break;
      }
      case 1: {
        i.setTimeout(9), yield 190, f = 2;
        break;
      }
      case 2: {
        i.setTimeout(-1), yield 60, f = 3;
        break;
      }
      case 3:
        return;
      default:
        return;
    }
}
function* b0(i) {
  let f = 0, e = 0;
  for (; f >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), f) {
      case 0: {
        i.setAnmAlt(7), i.setMisc159(3), i.setBounds(24, 24), i.setMisc160(30), i.clearScriptFlags(16), i.clearScriptFlags(3), i.setMisc165(i.cf0), i.f2 = i.posX + i.f0, i.f3 = i.posY + i.f1, i.moveRelative(60, 1, i.f2, i.f3), yield 370, f = 1;
        break;
      }
      case 1:
        return;
      default:
        return;
    }
}
function* w0(i) {
  let f = 0, e = 0;
  for (; f >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), f) {
      case 0: {
        i.setAnmAlt(8), i.setMisc159(3), i.setBounds(24, 24), i.setMisc160(30), i.clearScriptFlags(16), i.clearScriptFlags(3), i.setMisc165(i.cf0), i.f2 = i.posX + i.f0, i.f3 = i.posY + i.f1, i.moveRelative(60, 1, i.f2, i.f3), yield 370, f = 1;
        break;
      }
      case 1:
        return;
      default:
        return;
    }
}
function* A0(i) {
  let f = 0, e = 0;
  for (; f >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), f) {
      case 0: {
        i.setAnmAlt(9), i.setMisc159(3), i.setBounds(24, 24), i.setMisc160(30), i.clearScriptFlags(16), i.clearScriptFlags(3), i.setMisc165(i.cf0), i.f2 = i.posX + i.f0, i.f3 = i.posY + i.f1, i.moveRelative(60, 1, i.f2, i.f3), yield 370, f = 1;
        break;
      }
      case 1:
        return;
      default:
        return;
    }
}
function* h0(i) {
  let f = 0, e = 0;
  for (; f >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), f) {
      case 0: {
        i.setSpellHP(5, 15, 0, 1), i.setLives(2500), i.eclSetLives(0), i.spawnItemRandom(8), i.spawnItemBatch(5), i.setLifeBarSlice(0, 0, i.maxHp, 16744576), i.setSpellTimer(99999, 66), i.setMisc129(3), i.setDeathCallbackSub(66), i.setMisc160(120), i.endSpell(), i.setMisc136(30, 1), yield 80, f = 1;
        break;
      }
      case 1: {
        i.nop(), i.setMisc136(30, 0), yield* p(i);
        return;
      }
      default:
        return;
    }
}
function* p(i) {
  let f = 0, e = 0;
  for (; f >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), f) {
      case 0: {
        i.clearMotionClamp(), i.setShotRepeat(0), i.enemyFunc95(), i.setShotSound(-1, -1), i.clearScriptFlags(4), i.setShotOrigin(0, 0), i.setSpellTimer(3300, 66), i.resetSpellTimerSub(), i.setSpellTimerElapsed(0), i.ci3 = 0, i.moveRelative(90, 4, 192, 128), i.isDiff(c | s) && i.startSpell("光符「アースライトレイ」", "霧雨魔理沙", 93, 0, 25e6), i.isDiff(r | s) && i.startSpell("光符「アースライトレイ」", "霧雨魔理沙", 94, 0, 25e6), i.isDiff(l | s) && i.startSpell("光撃「シュート・ザ・ムーン」", "霧雨魔理沙", 95, 0, 25e6), i.isDiff(a | s) && i.startSpell("光撃「シュート・ザ・ムーン」", "霧雨魔理沙", 96, 0, 25e6), yield 90, f = 1;
        break;
      }
      case 1: {
        i.setScriptFlags(4), i.setMisc160(300), i.setMotionClamp(62, 32, 322, 192), i.i0 = 71, i.i1 = 6, i.cf0 = 64, i.f0 = -1.570796, i.linkChildRelative(65, 0, 0, 5e3, 1, 100), i.i0 = 75, i.i1 = 6, i.cf0 = 320, i.f0 = -1.570796, i.linkChildRelative(65, 0, 0, 5e3, 1, 100), i.i0 = 69, i.i1 = 2, i.cf0 = 32, i.f0 = -1.570796, i.linkChildRelative(65, 0, 0, 5e3, 1, 100), i.i0 = 73, i.i1 = 2, i.cf0 = 352, i.f0 = -1.570796, i.linkChildRelative(65, 0, 0, 5e3, 1, 100), yield 120, f = 2;
        break;
      }
      case 2: {
        i.nop(), i.isDiff(c | r | s) && i.callSubAlloc(0, 63), i.isDiff(l | a | s) && i.callSubAlloc(0, 64), i.moveBounce(80, 0, 0.5), yield 80, f = 3;
        break;
      }
      case 3: {
        i.i0 = 71, i.i1 = 6, i.ci0 = 5, i.cf0 = 32, i.f7 = i.randF32S * 28, i.cf0 += i.f7, f = 4;
        break;
      }
      case 4: {
        i.f7 = 0, i.f0 = -1.570796 + i.f7, i.linkChildRelative(65, 0, 0, 5e3, 1, 100), i.cf0 += 80, yield 8, f = 5;
        break;
      }
      case 5: {
        if (--i.ci0 > 0) {
          f = 4;
          break;
        }
        f = 6;
        break;
      }
      case 6: {
        i.isDiff(c | s) && (i.ci1 = 200), i.isDiff(r | s) && (i.ci1 = 200), i.isDiff(l | s) && (i.ci1 = 50), i.isDiff(a | s) && (i.ci1 = 20), yield i.delay(i.ci1), i.i0 = 73, i.i1 = 2, i.ci0 = 5, i.cf0 = 352, i.f7 = i.randF32S * 28, i.cf0 += i.f7, f = 7;
        break;
      }
      case 7: {
        i.f7 = 0, i.f0 = -1.570796 + i.f7, i.linkChildRelative(65, 0, 0, 5e3, 1, 100), i.cf0 -= 80, yield 8, f = 8;
        break;
      }
      case 8: {
        if (--i.ci0 > 0) {
          f = 7;
          break;
        }
        f = 9;
        break;
      }
      case 9: {
        i.moveBounce(80, 0, 0.5), yield i.delay(i.ci1), i.i0 = 71, i.i1 = 6, i.ci0 = 6, i.cf0 = 32, i.f7 = i.randF32S * 28, i.cf0 += i.f7, f = 10;
        break;
      }
      case 10: {
        i.f7 = i.randAngle / 64, i.f0 = -1.570796 + i.f7, i.linkChildRelative(65, 0, 0, 5e3, 1, 100), i.cf0 += 64, yield 8, f = 11;
        break;
      }
      case 11: {
        if (--i.ci0 > 0) {
          f = 10;
          break;
        }
        f = 12;
        break;
      }
      case 12: {
        i.moveBounce(80, 0, 0.5), yield i.delay(i.ci1), i.i0 = 73, i.i1 = 2, i.ci0 = 6, i.cf0 = 352, i.f7 = i.randF32S * 28, i.cf0 += i.f7, f = 13;
        break;
      }
      case 13: {
        i.f7 = i.randAngle / 64, i.f0 = -1.570796 + i.f7, i.linkChildRelative(65, 0, 0, 5e3, 1, 100), i.cf0 -= 64, yield 8, f = 14;
        break;
      }
      case 14: {
        if (--i.ci0 > 0) {
          f = 13;
          break;
        }
        f = 15;
        break;
      }
      case 15: {
        i.moveBounce(80, 0, 0.5), yield i.delay(i.ci1), i.i0 = 71, i.i1 = 6, i.ci0 = 7, i.cf0 = 32, i.f7 = i.randF32S * 28, i.cf0 += i.f7, f = 16;
        break;
      }
      case 16: {
        i.f7 = i.randAngle / 32, i.f0 = -1.570796 + i.f7, i.linkChildRelative(65, 0, 0, 5e3, 1, 100), i.cf0 += 53, yield 8, f = 17;
        break;
      }
      case 17: {
        if (--i.ci0 > 0) {
          f = 16;
          break;
        }
        f = 18;
        break;
      }
      case 18: {
        i.moveBounce(80, 0, 0.5), yield i.delay(i.ci1), i.i0 = 73, i.i1 = 2, i.ci0 = 7, i.cf0 = 352, i.f7 = i.randF32S * 28, i.cf0 += i.f7, f = 19;
        break;
      }
      case 19: {
        i.f7 = i.randAngle / 32, i.f0 = -1.570796 + i.f7, i.linkChildRelative(65, 0, 0, 5e3, 1, 100), i.cf0 -= 53, yield 8, f = 20;
        break;
      }
      case 20: {
        if (--i.ci0 > 0) {
          f = 19;
          break;
        }
        f = 21;
        break;
      }
      case 21: {
        f = 15;
        break;
      }
      default:
        return;
    }
}
function* S0(i) {
  let f = 0, e = 0;
  for (; f >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), f) {
      case 0: {
        i.isDiff(c | s) && (i.i0 = 24), i.isDiff(r | s) && (i.i0 = 32), i.isDiff(l | s) && (i.i0 = 32), i.isDiff(a | s) && (i.i0 = 32), i.isDiff(c | s) && (i.f0 = 0.224399), i.isDiff(r | s) && (i.f0 = 0.15708), i.isDiff(l | s) && (i.f0 = 0.15708), i.isDiff(a | s) && (i.f0 = 0.15708), i.f1 = 0 - i.f0, f = 1;
        break;
      }
      case 1: {
        i.spawnShot({
          mode: "aimedRing",
          // aim 2 of 96..104
          type: 12,
          color: 13,
          count: 1,
          rings: 32,
          speed: 3.5,
          speed2: 0.5,
          angle: -2.0943952,
          angleStep: t(10016),
          transform: 514
        }), i.spawnShot({
          mode: "aimedRing",
          // aim 2 of 96..104
          type: 12,
          color: 13,
          count: 1,
          rings: 32,
          speed: 2.5,
          speed2: 0.5,
          angle: -2.0943952,
          angleStep: t(10016),
          transform: 514
        }), yield 20, f = 2;
        break;
      }
      case 2: {
        i.spawnShot({
          mode: "aimedRing",
          // aim 2 of 96..104
          type: 13,
          color: 13,
          count: 1,
          rings: 32,
          speed: 3.5,
          speed2: 0.5,
          angle: 2.0943952,
          angleStep: t(10017),
          transform: 514
        }), i.spawnShot({
          mode: "aimedRing",
          // aim 2 of 96..104
          type: 13,
          color: 13,
          count: 1,
          rings: 32,
          speed: 2.5,
          speed2: 0.5,
          angle: 2.0943952,
          angleStep: t(10017),
          transform: 514
        }), yield 60, f = 3;
        break;
      }
      case 3: {
        i.isDiff(r | s) && i.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 12,
          color: 13,
          count: 3,
          rings: 3,
          speed: 2.2,
          speed2: 1,
          angle: 0,
          angleStep: 0.07479983,
          transform: 514
        }), yield 16, f = 4;
        break;
      }
      case 4: {
        i.isDiff(r | s) && i.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 13,
          color: 13,
          count: 3,
          rings: 3,
          speed: 2.2,
          speed2: 1,
          angle: 0,
          angleStep: 0.07479983,
          transform: 514
        }), yield 16, f = 5;
        break;
      }
      case 5: {
        i.isDiff(r | s) && i.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 12,
          color: 13,
          count: 3,
          rings: 3,
          speed: 2.2,
          speed2: 1,
          angle: 0,
          angleStep: 0.07479983,
          transform: 514
        }), yield 16, f = 6;
        break;
      }
      case 6: {
        i.isDiff(r | s) && i.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 13,
          color: 13,
          count: 3,
          rings: 3,
          speed: 2.2,
          speed2: 1,
          angle: 0,
          angleStep: 0.07479983,
          transform: 514
        }), yield 16, f = 7;
        break;
      }
      case 7: {
        f = 1;
        break;
      }
      default:
        return;
    }
}
function* M0(i) {
  let f = 0, e = 0;
  for (; f >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), f) {
      case 0: {
        i.isDiff(c | s) && (i.i0 = 24), i.isDiff(r | s) && (i.i0 = 32), i.isDiff(l | s) && (i.i0 = 32), i.isDiff(a | s) && (i.i0 = 32), i.isDiff(c | s) && (i.f0 = 0.224399), i.isDiff(r | s) && (i.f0 = 0.15708), i.isDiff(l | s) && (i.f0 = 0.15708), i.isDiff(a | s) && (i.f0 = 0.15708), i.f1 = 0 - i.f0, f = 1;
        break;
      }
      case 1: {
        i.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 12,
          color: 13,
          count: 5,
          rings: 2,
          speed: 1.5,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.5235988,
          transform: 514
        }), i.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 12,
          color: 13,
          count: 5,
          rings: 2,
          speed: 1,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.5235988,
          transform: 514
        }), yield 20, f = 2;
        break;
      }
      case 2: {
        i.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 13,
          color: 13,
          count: 5,
          rings: 2,
          speed: 1.5,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.5235988,
          transform: 514
        }), i.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 13,
          color: 13,
          count: 5,
          rings: 2,
          speed: 1,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.5235988,
          transform: 514
        }), yield 20, f = 3;
        break;
      }
      case 3: {
        f = 1;
        break;
      }
      default:
        return;
    }
}
function* D0(i) {
  let f = 0, e = 0;
  for (; f >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), f) {
      case 0: {
        i.setAnm(i.i0), i.setBounds(24, 24), i.setMisc160(30), i.clearScriptFlags(18), i.setHitFlash(1), i.moveRelative(120, 2, i.cf0, 448), yield 120, f = 1;
        break;
      }
      case 1: {
        i.nop(), i.spawnEffectAngle(60, 1, -1, i.f0, 0, 0), i.spawnEffectAngle(61, 1, -8355585, i.f0, 0, 0), yield 60, f = 2;
        break;
      }
      case 2: {
        i.spawnLaser({
          aimed: !1,
          // op 114 keeps the absolute angle
          type: 1,
          color: t(10001),
          angle: t(10016),
          speed: 30,
          tail: 0,
          head: 0,
          startLength: 2400,
          width: 16,
          startTime: 1,
          duration: 40,
          despawn: 40,
          hitboxStart: 1,
          hitboxEnd: 20,
          flags: 6
        }), i.playSfx(16), yield 80, f = 3;
        break;
      }
      case 3:
        return;
      default:
        return;
    }
}
function* I0(i) {
  let f = 0, e = 0;
  for (; f >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), f) {
      case 0: {
        i.setTimeout(-1), i.setMisc136(30, 1), yield 1, f = 1;
        break;
      }
      case 1: {
        i.setMisc136(30, 0), yield* u(i);
        return;
      }
      default:
        return;
    }
}
function* y(i) {
  let f = 0, e = 0;
  for (; f >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), f) {
      case 0: {
        i.setSpellHP(5, 15, 0, 1), i.clearMotionClamp(), i.setMotionClamp(32, 48, 352, 128), i.setShotRepeat(0), i.enemyFunc95(), i.setShotSound(-1, -1), i.clearScriptFlags(4), i.setShotOrigin(0, 0), i.setSpellTimer(3900, 76), i.resetSpellTimerSub(), i.setSpellTimerElapsed(0), i.ci3 = 0, i.moveRelative(90, 4, 192, 160), i.isDiff(r | s) && i.startSpell("魔砲「ファイナルスパーク」", "霧雨魔理沙", 97, 0, 25e6), i.isDiff(l | s) && i.startSpell("魔砲「ファイナルスパーク」", "霧雨魔理沙", 98, 0, 25e6), i.isDiff(a | s) && i.startSpell("魔砲「ファイナルマスタースパーク」", "霧雨魔理沙", 99, 0, 25e6), yield 90, f = 1;
        break;
      }
      case 1: {
        i.setScriptFlags(4), i.setMisc160(300), f = 2;
        break;
      }
      case 2: {
        i.moveBounce(80, 0, 0.5), yield* o(i), f = 3;
        break;
      }
      case 3: {
        i.nop(), yield 30, f = 4;
        break;
      }
      case 4: {
        i.playSfx(19), i.cf0 = i.timer, i.f0 = Math.cos(i.cf0), i.f0 *= 295, i.f1 = Math.sin(i.cf0), i.f1 *= 295, i.spawnEnemyAlt(70, 0, 0, 0, 500, -2, 100), i.spawnEnemyAlt(71, 0, 0, 0, 500, -2, 100), i.spawnEnemyAlt(72, 0, 0, 0, 500, -2, 100), i.spawnEnemyAlt(73, 0, 0, 0, 500, -2, 100), i.setMisc136(10, 0), i.callSubAlloc(0, 68), i.isDiff(r | s) && (yield i.delay(400)), i.isDiff(l | s) && (yield i.delay(360)), i.isDiff(a | s) && (yield i.delay(330)), i.moveBounce(80, 4, 2.5), yield* o(i), f = 5;
        break;
      }
      case 5: {
        i.nop(), yield 30, f = 6;
        break;
      }
      case 6: {
        i.playSfx(19), i.cf0 = i.timer, i.f0 = Math.cos(i.cf0), i.f0 *= 295, i.f1 = Math.sin(i.cf0), i.f1 *= 295, i.spawnEnemyAlt(70, 0, 0, 0, 500, -2, 100), i.spawnEnemyAlt(71, 0, 0, 0, 500, -2, 100), i.spawnEnemyAlt(72, 0, 0, 0, 500, -2, 100), i.spawnEnemyAlt(73, 0, 0, 0, 500, -2, 100), i.setMisc136(10, 0), i.callSubAlloc(0, 69), i.isDiff(r | s) && (yield i.delay(400)), i.isDiff(l | s) && (yield i.delay(360)), i.isDiff(a | s) && (yield i.delay(330)), f = 2;
        break;
      }
      default:
        return;
    }
}
function* z0(i) {
  let f = 0, e = 0;
  for (; f >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), f) {
      case 0: {
        i.ci0 = 18, i.f0 = i.randAngle, i.setShotRecord(0, 64, 0, 60, 1, -999.900024, 0), i.setShotRecord(1, 131072, 0, 180, -1, -1, -1), i.isDiff(c | s) && (i.f7 = 0.015), i.isDiff(r | s) && (i.f7 = 0.015), i.isDiff(l | s) && (i.f7 = 0.015833), i.isDiff(a | s) && (i.f7 = 0.018333), i.setShotRecord(2, 16, 0, 240, -1, i.f7, -999.900024), f = 1;
        break;
      }
      case 1: {
        i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 14,
          color: 1,
          count: 8,
          rings: 1,
          speed: 1.8,
          speed2: 0.9,
          angle: t(10016),
          angleStep: 0.049087387,
          transform: 131666
        }), i.f0 -= 0.1309, yield 10, f = 2;
        break;
      }
      case 2: {
        i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 15,
          color: 3,
          count: 8,
          rings: 1,
          speed: 1.8,
          speed2: 0.9,
          angle: t(10016),
          angleStep: 0.049087387,
          transform: 131666
        }), i.f0 -= 0.1309, yield 10, f = 3;
        break;
      }
      case 3: {
        if (--i.ci0 > 0) {
          f = 1;
          break;
        }
        f = 4;
        break;
      }
      case 4:
        return;
      default:
        return;
    }
}
function* v0(i) {
  let f = 0, e = 0;
  for (; f >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), f) {
      case 0: {
        i.ci0 = 18, i.f0 = i.randAngle, i.setShotRecord(0, 64, 0, 60, 1, -999.900024, 0), i.setShotRecord(1, 131072, 0, 180, -1, -1, -1), i.isDiff(c | s) && (i.f7 = 0.015), i.isDiff(r | s) && (i.f7 = 0.015), i.isDiff(l | s) && (i.f7 = 0.015833), i.isDiff(a | s) && (i.f7 = 0.018333), i.setShotRecord(2, 16, 0, 240, -1, i.f7, -999.900024), f = 1;
        break;
      }
      case 1: {
        i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 14,
          color: 1,
          count: 8,
          rings: 1,
          speed: 1.8,
          speed2: 0.9,
          angle: t(10016),
          angleStep: 0.049087387,
          transform: 131666
        }), i.f0 += 0.1309, yield 10, f = 2;
        break;
      }
      case 2: {
        i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 15,
          color: 3,
          count: 8,
          rings: 1,
          speed: 1.8,
          speed2: 0.9,
          angle: t(10016),
          angleStep: 0.049087387,
          transform: 131666
        }), i.f0 += 0.1309, yield 10, f = 3;
        break;
      }
      case 3: {
        if (--i.ci0 > 0) {
          f = 1;
          break;
        }
        f = 4;
        break;
      }
      case 4:
        return;
      default:
        return;
    }
}
function* C0(i) {
  let f = 0, e = 0;
  for (; f >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), f) {
      case 0: {
        i.isDiff(r | s) && i.setAnmAlt(10), i.isDiff(l | s) && i.setAnmAlt(14), i.isDiff(a | s) && i.setAnmAlt(18), i.setMisc159(3), i.setBounds(24, 24), i.setMisc160(30), i.clearScriptFlags(16), i.clearScriptFlags(3), i.setMisc165(i.cf0), i.f4 = i.posX, i.f5 = i.posY, i.f2 = i.posX + i.f0, i.f3 = i.posY + i.f1, i.moveRelative(60, 1, i.f2, i.f3), yield 120, f = 1;
        break;
      }
      case 1: {
        i.setTimeout(11), i.isDiff(c | s) && (i.ci2 = 190), i.isDiff(r | s) && (i.ci2 = 190), i.isDiff(l | s) && (i.ci2 = 150), i.isDiff(a | s) && (i.ci2 = 120), i.ci0 = i.ci2, f = 2;
        break;
      }
      case 2: {
        if (i.f6 = i.posX - i.f4, i.f7 = i.posY - i.f5, i.f2 = i.playerX - i.f4, i.f3 = i.playerY - i.f5, i.f2 = i.f2 * i.f7, i.f3 = i.f3 * i.f6, i.f2 = i.f2 - i.f3, i.f2 >= 0) {
          f = 4;
          break;
        }
        f = 3;
        break;
      }
      case 3: {
        i.isDiff(r | s) && (i.cf0 += 357e-5), i.isDiff(l | s) && (i.cf0 += 4522e-6), i.isDiff(a | s) && (i.cf0 += 5652e-6), f = 5;
        break;
      }
      case 4: {
        i.isDiff(r | s) && (i.cf0 -= 357e-5), i.isDiff(l | s) && (i.cf0 -= 4522e-6), i.isDiff(a | s) && (i.cf0 -= 5652e-6), f = 5;
        break;
      }
      case 5: {
        i.setMisc165(i.cf0), i.f0 = Math.cos(i.cf0), i.f0 *= 295, i.f1 = Math.sin(i.cf0), i.f1 *= 295, i.f6 = i.f0 + i.f4, i.f7 = i.f1 + i.f5, i.setRelPos(i.f6, i.f7), yield 1, f = 6;
        break;
      }
      case 6: {
        if (--i.ci0 > 0) {
          f = 2;
          break;
        }
        f = 7;
        break;
      }
      case 7: {
        i.setTimeout(-1), yield 60, f = 8;
        break;
      }
      case 8:
        return;
      default:
        return;
    }
}
function* F0(i) {
  let f = 0, e = 0;
  for (; f >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), f) {
      case 0: {
        i.isDiff(r | s) && i.setAnmAlt(11), i.isDiff(l | s) && i.setAnmAlt(15), i.isDiff(a | s) && i.setAnmAlt(19), i.setMisc159(3), i.setBounds(24, 24), i.setMisc160(30), i.clearScriptFlags(16), i.clearScriptFlags(3), i.setMisc165(i.cf0), i.f4 = i.posX, i.f5 = i.posY, i.f2 = i.posX + i.f0, i.f3 = i.posY + i.f1, i.moveRelative(60, 1, i.f2, i.f3), yield 120, f = 1;
        break;
      }
      case 1: {
        i.nop(), i.isDiff(c | s) && (i.ci2 = 190), i.isDiff(r | s) && (i.ci2 = 190), i.isDiff(l | s) && (i.ci2 = 150), i.isDiff(a | s) && (i.ci2 = 120), i.ci0 = i.ci2, f = 2;
        break;
      }
      case 2: {
        if (i.f6 = i.posX - i.f4, i.f7 = i.posY - i.f5, i.f2 = i.playerX - i.f4, i.f3 = i.playerY - i.f5, i.f2 = i.f2 * i.f7, i.f3 = i.f3 * i.f6, i.f2 = i.f2 - i.f3, i.f2 >= 0) {
          f = 4;
          break;
        }
        f = 3;
        break;
      }
      case 3: {
        i.isDiff(r | s) && (i.cf0 += 357e-5), i.isDiff(l | s) && (i.cf0 += 4522e-6), i.isDiff(a | s) && (i.cf0 += 5652e-6), f = 5;
        break;
      }
      case 4: {
        i.isDiff(r | s) && (i.cf0 -= 357e-5), i.isDiff(l | s) && (i.cf0 -= 4522e-6), i.isDiff(a | s) && (i.cf0 -= 5652e-6), f = 5;
        break;
      }
      case 5: {
        i.setMisc165(i.cf0), i.f0 = Math.cos(i.cf0), i.f0 *= 295, i.f1 = Math.sin(i.cf0), i.f1 *= 295, i.f6 = i.f0 + i.f4, i.f7 = i.f1 + i.f5, i.setRelPos(i.f6, i.f7), yield 1, f = 6;
        break;
      }
      case 6: {
        if (--i.ci0 > 0) {
          f = 2;
          break;
        }
        f = 7;
        break;
      }
      case 7:
        return;
      default:
        return;
    }
}
function* R0(i) {
  let f = 0, e = 0;
  for (; f >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), f) {
      case 0: {
        i.isDiff(r | s) && i.setAnmAlt(12), i.isDiff(l | s) && i.setAnmAlt(16), i.isDiff(a | s) && i.setAnmAlt(20), i.setMisc159(3), i.setBounds(24, 24), i.setMisc160(30), i.clearScriptFlags(16), i.clearScriptFlags(3), i.setMisc165(i.cf0), i.f4 = i.posX, i.f5 = i.posY, i.f2 = i.posX + i.f0, i.f3 = i.posY + i.f1, i.moveRelative(60, 1, i.f2, i.f3), yield 120, f = 1;
        break;
      }
      case 1: {
        i.nop(), i.isDiff(c | s) && (i.ci2 = 190), i.isDiff(r | s) && (i.ci2 = 190), i.isDiff(l | s) && (i.ci2 = 150), i.isDiff(a | s) && (i.ci2 = 120), i.ci0 = i.ci2, f = 2;
        break;
      }
      case 2: {
        if (i.f6 = i.posX - i.f4, i.f7 = i.posY - i.f5, i.f2 = i.playerX - i.f4, i.f3 = i.playerY - i.f5, i.f2 = i.f2 * i.f7, i.f3 = i.f3 * i.f6, i.f2 = i.f2 - i.f3, i.f2 >= 0) {
          f = 4;
          break;
        }
        f = 3;
        break;
      }
      case 3: {
        i.isDiff(r | s) && (i.cf0 += 357e-5), i.isDiff(l | s) && (i.cf0 += 4522e-6), i.isDiff(a | s) && (i.cf0 += 5652e-6), f = 5;
        break;
      }
      case 4: {
        i.isDiff(r | s) && (i.cf0 -= 357e-5), i.isDiff(l | s) && (i.cf0 -= 4522e-6), i.isDiff(a | s) && (i.cf0 -= 5652e-6), f = 5;
        break;
      }
      case 5: {
        i.setMisc165(i.cf0), i.f0 = Math.cos(i.cf0), i.f0 *= 295, i.f1 = Math.sin(i.cf0), i.f1 *= 295, i.f6 = i.f0 + i.f4, i.f7 = i.f1 + i.f5, i.setRelPos(i.f6, i.f7), yield 1, f = 6;
        break;
      }
      case 6: {
        if (--i.ci0 > 0) {
          f = 2;
          break;
        }
        f = 7;
        break;
      }
      case 7:
        return;
      default:
        return;
    }
}
function* E0(i) {
  let f = 0, e = 0;
  for (; f >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), f) {
      case 0: {
        i.isDiff(r | s) && i.setAnmAlt(13), i.isDiff(l | s) && i.setAnmAlt(17), i.isDiff(a | s) && i.setAnmAlt(21), i.setMisc159(3), i.setBounds(24, 24), i.setMisc160(30), i.clearScriptFlags(16), i.clearScriptFlags(3), i.setMisc165(i.cf0), i.f4 = i.posX, i.f5 = i.posY, i.f2 = i.posX + i.f0, i.f3 = i.posY + i.f1, i.moveRelative(60, 1, i.f2, i.f3), yield 120, f = 1;
        break;
      }
      case 1: {
        i.nop(), i.isDiff(c | s) && (i.ci2 = 190), i.isDiff(r | s) && (i.ci2 = 190), i.isDiff(l | s) && (i.ci2 = 150), i.isDiff(a | s) && (i.ci2 = 120), i.ci0 = i.ci2, f = 2;
        break;
      }
      case 2: {
        if (i.f6 = i.posX - i.f4, i.f7 = i.posY - i.f5, i.f2 = i.playerX - i.f4, i.f3 = i.playerY - i.f5, i.f2 = i.f2 * i.f7, i.f3 = i.f3 * i.f6, i.f2 = i.f2 - i.f3, i.f2 >= 0) {
          f = 4;
          break;
        }
        f = 3;
        break;
      }
      case 3: {
        i.isDiff(r | s) && (i.cf0 += 357e-5), i.isDiff(l | s) && (i.cf0 += 4522e-6), i.isDiff(a | s) && (i.cf0 += 5652e-6), f = 5;
        break;
      }
      case 4: {
        i.isDiff(r | s) && (i.cf0 -= 357e-5), i.isDiff(l | s) && (i.cf0 -= 4522e-6), i.isDiff(a | s) && (i.cf0 -= 5652e-6), f = 5;
        break;
      }
      case 5: {
        i.setMisc165(i.cf0), i.f0 = Math.cos(i.cf0), i.f0 *= 295, i.f1 = Math.sin(i.cf0), i.f1 *= 295, i.f6 = i.f0 + i.f4, i.f7 = i.f1 + i.f5, i.setRelPos(i.f6, i.f7), yield 1, f = 6;
        break;
      }
      case 6: {
        if (--i.ci0 > 0) {
          f = 2;
          break;
        }
        f = 7;
        break;
      }
      case 7:
        return;
      default:
        return;
    }
}
function* o(i) {
  let f = 0, e = 0;
  for (; f >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), f) {
      case 0: {
        i.ci0 = 32, f = 1;
        break;
      }
      case 1: {
        i.spawnEffectAt(17, 4, -1), yield 1, f = 2;
        break;
      }
      case 2: {
        if (--i.ci0 > 0) {
          f = 1;
          break;
        }
        f = 3;
        break;
      }
      case 3:
        return;
      default:
        return;
    }
}
function* u(i) {
  let f = 0, e = 0;
  for (; f >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), f) {
      case 0: {
        i.complexBossInit(1), i.maxHp = 1, i.setMisc129(0), i.setDeathCallbackSub(-1), i.clearScriptFlags(3), i.f0 = i.randAngle, i.movePolar(60, 4, i.f0, 0.15), i.f0 = 0, i.ci0 = 6, yield 1, f = 1;
        break;
      }
      case 1: {
        i.f0 += 0.19635, i.f0 = n(i.f0), i.spawnEffectAngle(26, 1, -1, i.f0, 0, 0), yield 1, f = 2;
        break;
      }
      case 2: {
        i.f0 += 0.19635, i.f0 = n(i.f0), i.spawnEffectAngle(26, 1, -1, i.f0, 0, 0), yield 1, f = 3;
        break;
      }
      case 3: {
        i.f0 += 0.19635, i.f0 = n(i.f0), i.spawnEffectAngle(26, 1, -32640, i.f0, 0, 0), yield 1, f = 4;
        break;
      }
      case 4: {
        i.f0 += 0.19635, i.f0 = n(i.f0), i.spawnEffectAngle(26, 1, -32640, i.f0, 0, 0), yield 1, f = 5;
        break;
      }
      case 5: {
        i.f0 += 0.19635, i.f0 = n(i.f0), i.spawnEffectAngle(26, 1, -8323200, i.f0, 0, 0), yield 1, f = 6;
        break;
      }
      case 6: {
        i.f0 += 0.19635, i.f0 = n(i.f0), i.spawnEffectAngle(26, 1, -8323200, i.f0, 0, 0), yield 1, f = 7;
        break;
      }
      case 7: {
        i.f0 += 0.19635, i.f0 = n(i.f0), i.spawnEffectAngle(26, 1, -8355585, i.f0, 0, 0), yield 1, f = 8;
        break;
      }
      case 8: {
        i.f0 += 0.19635, i.f0 = n(i.f0), i.spawnEffectAngle(26, 1, -8355585, i.f0, 0, 0), yield 1, f = 9;
        break;
      }
      case 9: {
        i.f0 += 0.19635, i.f0 = n(i.f0), i.spawnEffectAngle(26, 1, -128, i.f0, 0, 0), yield 1, f = 10;
        break;
      }
      case 10: {
        if (i.f0 += 0.19635, i.f0 = n(i.f0), i.spawnEffectAngle(26, 1, -128, i.f0, 0, 0), i.playSfx(7), --i.ci0 > 0) {
          f = 1;
          break;
        }
        f = 11;
        break;
      }
      case 11: {
        i.playSfx(18), i.spawnEffectAngle(26, 64, -8355585, -999, 0, 0), i.endSpell(), i.setBossPresent(-1), i.maxHp = 0, yield 3e3, f = 12;
        break;
      }
      case 12:
        return;
      default:
        return;
    }
}
function* _0(i) {
  let f = 0, e = 0;
  for (; f >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), f) {
      case 0: {
        if (i.complexBossInit(1), i.setMisc129(0), i.setDeathCallbackSub(-1), i.clearScriptFlags(3), i.f0 = i.randAngle, i.movePolar(60, 4, i.f0, 0.15), i.setMisc173(0), i.spellCardState == 0) {
          f = 4;
          break;
        }
        f = 1;
        break;
      }
      case 1: {
        i.f0 = 0, i.ci0 = 6, i.playSfx(7), f = 2;
        break;
      }
      case 2: {
        if (i.f0 += 0.19635, i.f0 = n(i.f0), i.spawnEffectAngle(26, 1, -1, i.f0, 0, 0), i.f0 += 0.19635, i.f0 = n(i.f0), i.spawnEffectAngle(26, 1, -1, i.f0, 0, 0), i.f0 += 0.19635, i.f0 = n(i.f0), i.spawnEffectAngle(26, 1, -32640, i.f0, 0, 0), i.f0 += 0.19635, i.f0 = n(i.f0), i.spawnEffectAngle(26, 1, -32640, i.f0, 0, 0), i.f0 += 0.19635, i.f0 = n(i.f0), i.spawnEffectAngle(26, 1, -8323200, i.f0, 0, 0), i.f0 += 0.19635, i.f0 = n(i.f0), i.spawnEffectAngle(26, 1, -8323200, i.f0, 0, 0), i.f0 += 0.19635, i.f0 = n(i.f0), i.spawnEffectAngle(26, 1, -8355585, i.f0, 0, 0), i.f0 += 0.19635, i.f0 = n(i.f0), i.spawnEffectAngle(26, 1, -8355585, i.f0, 0, 0), i.f0 += 0.19635, i.f0 = n(i.f0), i.spawnEffectAngle(26, 1, -128, i.f0, 0, 0), i.f0 += 0.19635, i.f0 = n(i.f0), i.spawnEffectAngle(26, 1, -128, i.f0, 0, 0), --i.ci0 > 0) {
          f = 2;
          break;
        }
        f = 3;
        break;
      }
      case 3: {
        i.playSfx(18), i.spawnEffectAngle(26, 64, -8355585, -999, 0, 0), f = 4;
        break;
      }
      case 4: {
        i.endSpell(), i.setBossPresent(-1), i.maxHp = 1, yield 2, f = 5;
        break;
      }
      case 5: {
        i.maxHp = 0, yield 3e3, f = 6;
        break;
      }
      case 6:
        return;
      default:
        return;
    }
}
function* B0(i) {
  let f = 0, e = 0;
  for (; f >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), f) {
      case 0: {
        if (i.complexBossInit(1), i.setMisc129(0), i.setDeathCallbackSub(-1), i.clearScriptFlags(3), i.f0 = i.randAngle, i.movePolar(60, 4, i.f0, 0.15), i.setMisc173(0), i.ci3 = 0, i.spellCardState == 0) {
          f = 4;
          break;
        }
        f = 1;
        break;
      }
      case 1: {
        i.f0 = 0, i.ci0 = 6, i.playSfx(7), f = 2;
        break;
      }
      case 2: {
        if (i.f0 += 0.19635, i.f0 = n(i.f0), i.spawnEffectAngle(26, 1, -1, i.f0, 0, 0), i.f0 += 0.19635, i.f0 = n(i.f0), i.spawnEffectAngle(26, 1, -1, i.f0, 0, 0), i.f0 += 0.19635, i.f0 = n(i.f0), i.spawnEffectAngle(26, 1, -32640, i.f0, 0, 0), i.f0 += 0.19635, i.f0 = n(i.f0), i.spawnEffectAngle(26, 1, -32640, i.f0, 0, 0), i.f0 += 0.19635, i.f0 = n(i.f0), i.spawnEffectAngle(26, 1, -8323200, i.f0, 0, 0), i.f0 += 0.19635, i.f0 = n(i.f0), i.spawnEffectAngle(26, 1, -8323200, i.f0, 0, 0), i.f0 += 0.19635, i.f0 = n(i.f0), i.spawnEffectAngle(26, 1, -8355585, i.f0, 0, 0), i.f0 += 0.19635, i.f0 = n(i.f0), i.spawnEffectAngle(26, 1, -8355585, i.f0, 0, 0), i.f0 += 0.19635, i.f0 = n(i.f0), i.spawnEffectAngle(26, 1, -128, i.f0, 0, 0), i.f0 += 0.19635, i.f0 = n(i.f0), i.spawnEffectAngle(26, 1, -128, i.f0, 0, 0), --i.ci0 > 0) {
          f = 2;
          break;
        }
        f = 3;
        break;
      }
      case 3: {
        i.playSfx(18), i.spawnEffectAngle(26, 64, -8355585, -999, 0, 0), i.ci3 = 1, f = 4;
        break;
      }
      case 4: {
        if (i.endSpell(), i.ci3 == 0) {
          f = 6;
          break;
        }
        f = 5;
        break;
      }
      case 5: {
        yield i.delay(120), f = 6;
        break;
      }
      case 6: {
        i.setBossPresent(-1), i.maxHp = 1, yield 2, f = 7;
        break;
      }
      case 7: {
        i.maxHp = 0, yield 3e3, f = 8;
        break;
      }
      case 8:
        return;
      default:
        return;
    }
}
const x0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  sub_0: g,
  sub_1: k,
  sub_10: I,
  sub_11: z,
  sub_12: v,
  sub_13: C,
  sub_14: F,
  sub_15: R,
  sub_16: E,
  sub_17: _,
  sub_18: B,
  sub_19: x,
  sub_2: m,
  sub_20: T,
  sub_21: P,
  sub_22: L,
  sub_23: Y,
  sub_24: H,
  sub_25: X,
  sub_26: O,
  sub_27: N,
  sub_28: d,
  sub_29: W,
  sub_3: b,
  sub_30: V,
  sub_31: j,
  sub_32: U,
  sub_33: G,
  sub_34: q,
  sub_35: J,
  sub_36: K,
  sub_37: Q,
  sub_38: Z,
  sub_39: $,
  sub_4: w,
  sub_40: i0,
  sub_41: f0,
  sub_42: s0,
  sub_43: e0,
  sub_44: t0,
  sub_45: a0,
  sub_46: l0,
  sub_47: r0,
  sub_48: c0,
  sub_49: n0,
  sub_5: A,
  sub_50: o0,
  sub_51: d0,
  sub_52: p0,
  sub_53: y0,
  sub_54: u0,
  sub_55: g0,
  sub_56: k0,
  sub_57: m0,
  sub_58: b0,
  sub_59: w0,
  sub_6: h,
  sub_60: A0,
  sub_61: h0,
  sub_62: p,
  sub_63: S0,
  sub_64: M0,
  sub_65: D0,
  sub_66: I0,
  sub_67: y,
  sub_68: z0,
  sub_69: v0,
  sub_7: S,
  sub_70: C0,
  sub_71: F0,
  sub_72: R0,
  sub_73: E0,
  sub_74: o,
  sub_75: u,
  sub_76: _0,
  sub_77: B0,
  sub_8: M,
  sub_9: D
}, Symbol.toStringTag, { value: "Module" })), T0 = [
  {
    index: 0,
    offset: 50488,
    instructions: [
      {
        offset: 0,
        time: 1,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([15, 1106247680, -1048576e3, 20, -2, 1e3])
      },
      {
        offset: 0,
        time: 400,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, -1048576e3, 1115684864, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 410,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, -1048576e3, 1115684864, 30, 0, 1e3])
      },
      {
        offset: 0,
        time: 420,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, -1048576e3, 1115684864, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 430,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, -1048576e3, 1115684864, 30, 0, 1e3])
      },
      {
        offset: 0,
        time: 440,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, -1048576e3, 1115684864, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 540,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1137180672, 1115684864, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 550,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1137180672, 1115684864, 30, 0, 1e3])
      },
      {
        offset: 0,
        time: 560,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1137180672, 1115684864, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 570,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1137180672, 1115684864, 30, 0, 1e3])
      },
      {
        offset: 0,
        time: 580,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1137180672, 1115684864, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 580,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([5, 1128267776, -1048576e3, 500, 1, 1e3])
      },
      {
        offset: 0,
        time: 660,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, -1048576e3, 1115684864, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 670,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, -1048576e3, 1116733440, 30, 0, 1e3])
      },
      {
        offset: 0,
        time: 680,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, -1048576e3, 1117782016, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 690,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, -1048576e3, 1118830592, 30, 0, 1e3])
      },
      {
        offset: 0,
        time: 700,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, -1048576e3, 1119879168, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 700,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([5, 1124073472, -1048576e3, 500, 1, 1e3])
      },
      {
        offset: 0,
        time: 760,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1137180672, 1119879168, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 770,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1137180672, 1118830592, 30, 0, 1e3])
      },
      {
        offset: 0,
        time: 780,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1137180672, 1117782016, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 790,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1137180672, 1116733440, 30, 0, 1e3])
      },
      {
        offset: 0,
        time: 800,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1137180672, 1115684864, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 920,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, -1048576e3, 1115684864, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 920,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([5, 1132462080, -1048576e3, 500, 1, 1e3])
      },
      {
        offset: 0,
        time: 930,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, -1048576e3, 1115684864, 30, 0, 1e3])
      },
      {
        offset: 0,
        time: 940,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, -1048576e3, 1115684864, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 950,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, -1048576e3, 1115684864, 30, 0, 1e3])
      },
      {
        offset: 0,
        time: 960,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, -1048576e3, 1115684864, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 980,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1137180672, 1115684864, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 990,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1137180672, 1115684864, 30, 0, 1e3])
      },
      {
        offset: 0,
        time: 1e3,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1137180672, 1115684864, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 1010,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1137180672, 1115684864, 30, 0, 1e3])
      },
      {
        offset: 0,
        time: 1020,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1137180672, 1115684864, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 1030,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, -1048576e3, 1121976320, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 1040,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, -1048576e3, 1121976320, 30, 0, 1e3])
      },
      {
        offset: 0,
        time: 1050,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, -1048576e3, 1121976320, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 1060,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, -1048576e3, 1121976320, 30, 0, 1e3])
      },
      {
        offset: 0,
        time: 1070,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, -1048576e3, 1121976320, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 1080,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1137180672, 1121976320, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 1090,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1137180672, 1121976320, 30, 0, 1e3])
      },
      {
        offset: 0,
        time: 1100,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1137180672, 1121976320, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 1110,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1137180672, 1121976320, 30, 0, 1e3])
      },
      {
        offset: 0,
        time: 1120,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1137180672, 1121976320, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 1240,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([7, 1134559232, -1048576e3, 1700, -2, 1e3])
      },
      {
        offset: 0,
        time: 1500,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([7, 1134559232, -1048576e3, 1300, -2, 1e3])
      },
      { offset: 0, time: 1600, opcode: 14, size: 12, difficultyMask: 255, args: new Int32Array([0]) },
      {
        offset: 0,
        time: 1900,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([7, 1115684864, -1048576e3, 1300, -2, 1e3])
      },
      { offset: 0, time: 2e3, opcode: 14, size: 12, difficultyMask: 255, args: new Int32Array([0]) },
      {
        offset: 0,
        time: 2300,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([7, 1115684864, -1048576e3, 1300, -2, 1e3])
      },
      {
        offset: 0,
        time: 2300,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([7, 1134559232, -1048576e3, 1300, -2, 1e3])
      },
      {
        offset: 0,
        time: 2700,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([12, -1048576e3, 1115684864, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 2710,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([12, -1048576e3, 1115684864, 30, 0, 1e3])
      },
      {
        offset: 0,
        time: 2720,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([12, -1048576e3, 1115684864, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 2730,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([12, -1048576e3, 1115684864, 30, 0, 1e3])
      },
      {
        offset: 0,
        time: 2740,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([12, -1048576e3, 1115684864, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 2740,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([5, 1124073472, -1048576e3, 500, 1, 1e3])
      },
      {
        offset: 0,
        time: 2800,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([12, 1137180672, 1115684864, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 2810,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([12, 1137180672, 1115684864, 30, 0, 1e3])
      },
      {
        offset: 0,
        time: 2820,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([12, 1137180672, 1115684864, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 2830,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([12, 1137180672, 1115684864, 30, 0, 1e3])
      },
      {
        offset: 0,
        time: 2840,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([12, 1137180672, 1115684864, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 2840,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([5, 1128267776, -1048576e3, 500, 1, 1e3])
      },
      {
        offset: 0,
        time: 2900,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([12, -1048576e3, 1115684864, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 2910,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([12, -1048576e3, 1116733440, 30, 0, 1e3])
      },
      {
        offset: 0,
        time: 2920,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([12, -1048576e3, 1117782016, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 2930,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([12, -1048576e3, 1118830592, 30, 0, 1e3])
      },
      {
        offset: 0,
        time: 2940,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([12, -1048576e3, 1119879168, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 2940,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([5, 1124073472, -1048576e3, 500, 1, 1e3])
      },
      {
        offset: 0,
        time: 3e3,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([12, 1137180672, 1119879168, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 3010,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([12, 1137180672, 1118830592, 30, 0, 1e3])
      },
      {
        offset: 0,
        time: 3020,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([12, 1137180672, 1117782016, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 3030,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([12, 1137180672, 1116733440, 30, 0, 1e3])
      },
      {
        offset: 0,
        time: 3040,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([12, 1137180672, 1115684864, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 3240,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([12, -1048576e3, 1115684864, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 3250,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([12, -1048576e3, 1115684864, 30, 0, 1e3])
      },
      {
        offset: 0,
        time: 3260,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([12, -1048576e3, 1115684864, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 3270,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([12, -1048576e3, 1115684864, 30, 0, 1e3])
      },
      {
        offset: 0,
        time: 3280,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([12, -1048576e3, 1115684864, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 3280,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([5, 1124073472, -1048576e3, 500, 1, 1e3])
      },
      {
        offset: 0,
        time: 3330,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([12, 1137180672, 1115684864, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 3340,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([12, 1137180672, 1115684864, 30, 0, 1e3])
      },
      {
        offset: 0,
        time: 3350,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([12, 1137180672, 1115684864, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 3360,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([12, 1137180672, 1115684864, 30, 0, 1e3])
      },
      {
        offset: 0,
        time: 3370,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([12, 1137180672, 1115684864, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 3420,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([12, -1048576e3, 1115684864, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 3430,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([12, -1048576e3, 1115684864, 30, 0, 1e3])
      },
      {
        offset: 0,
        time: 3440,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([12, -1048576e3, 1115684864, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 3450,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([12, -1048576e3, 1115684864, 30, 0, 1e3])
      },
      {
        offset: 0,
        time: 3460,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([12, -1048576e3, 1115684864, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 3560,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([7, 1115684864, -1048576e3, 1300, -2, 1e3])
      },
      {
        offset: 0,
        time: 3660,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([7, 1134559232, -1048576e3, 1300, -2, 1e3])
      },
      {
        offset: 0,
        time: 3810,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([7, 1115684864, -1048576e3, 1300, -2, 1e3])
      },
      {
        offset: 0,
        time: 3860,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([7, 1134559232, -1048576e3, 1300, -2, 1e3])
      },
      {
        offset: 0,
        time: 4060,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([7, 1115684864, -1048576e3, 1300, 3, 1e3])
      },
      {
        offset: 0,
        time: 4060,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([7, 1134559232, -1048576e3, 1300, 3, 1e3])
      },
      {
        offset: 0,
        time: 4260,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([12, -1048576e3, 1115684864, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 4270,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([12, 1137180672, 1121976320, 30, 0, 1e3])
      },
      {
        offset: 0,
        time: 4280,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([12, 1137180672, 1121976320, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 4290,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([12, 1137180672, 1121976320, 30, 0, 1e3])
      },
      {
        offset: 0,
        time: 4300,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([12, 1137180672, 1121976320, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 4310,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([12, -1048576e3, 1115684864, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 4320,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([12, -1048576e3, 1115684864, 30, 0, 1e3])
      },
      {
        offset: 0,
        time: 4330,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([12, -1048576e3, 1115684864, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 4340,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([12, -1048576e3, 1115684864, 30, 0, 1e3])
      },
      {
        offset: 0,
        time: 4350,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([12, -1048576e3, 1115684864, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 4360,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([12, 1137180672, 1115684864, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 4370,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([12, 1137180672, 1115684864, 30, 0, 1e3])
      },
      {
        offset: 0,
        time: 4380,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([12, 1137180672, 1115684864, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 4390,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([12, 1137180672, 1115684864, 30, 0, 1e3])
      },
      {
        offset: 0,
        time: 4400,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([12, 1137180672, 1115684864, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 4410,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([12, -1048576e3, 1115684864, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 4420,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([12, -1048576e3, 1116733440, 30, 0, 1e3])
      },
      {
        offset: 0,
        time: 4430,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([12, -1048576e3, 1117782016, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 4440,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([12, -1048576e3, 1118830592, 30, 0, 1e3])
      },
      {
        offset: 0,
        time: 4450,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([12, -1048576e3, 1119879168, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 4460,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([12, 1137180672, 1119879168, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 4470,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([12, 1137180672, 1118830592, 30, 0, 1e3])
      },
      {
        offset: 0,
        time: 4480,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([12, 1137180672, 1117782016, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 4490,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([12, 1137180672, 1116733440, 30, 0, 1e3])
      },
      {
        offset: 0,
        time: 4500,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([12, 1137180672, 1115684864, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 4510,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([12, -1048576e3, 1115684864, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 4520,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([12, -1048576e3, 1115684864, 30, 0, 1e3])
      },
      {
        offset: 0,
        time: 4530,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([12, -1048576e3, 1115684864, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 4540,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([12, -1048576e3, 1115684864, 30, 0, 1e3])
      },
      {
        offset: 0,
        time: 4550,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([12, -1048576e3, 1115684864, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 4552,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([14, -1048576e3, 1115684864, 30, 1, 1e3])
      },
      { offset: 0, time: 4962, opcode: 6, size: 12, difficultyMask: 255, args: new Int32Array([0]) },
      { offset: 0, time: 4962, opcode: 7, size: 8, difficultyMask: 255, args: new Int32Array([]) },
      {
        offset: 0,
        time: 4962,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([16, 1128267776, -1048576e3, 6e4, -2, 1e5])
      },
      { offset: 0, time: 4963, opcode: 7, size: 8, difficultyMask: 255, args: new Int32Array([]) },
      { offset: 0, time: 4963, opcode: 8, size: 16, difficultyMask: 255, args: new Int32Array([0, 1]) },
      { offset: 0, time: 4963, opcode: 10, size: 12, difficultyMask: 255, args: new Int32Array([0]) },
      { offset: 0, time: 4963, opcode: 6, size: 12, difficultyMask: 255, args: new Int32Array([2]) },
      { offset: 0, time: 4963, opcode: 7, size: 8, difficultyMask: 255, args: new Int32Array([]) },
      {
        offset: 0,
        time: 4963,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, -1048576e3, 1115684864, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 4973,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, -1048576e3, 1115684864, 30, 0, 1e3])
      },
      {
        offset: 0,
        time: 4983,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, -1048576e3, 1115684864, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 4993,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, -1048576e3, 1115684864, 30, 0, 1e3])
      },
      {
        offset: 0,
        time: 5003,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, -1048576e3, 1115684864, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 5063,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1137180672, 1115684864, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 5073,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1137180672, 1115684864, 30, 0, 1e3])
      },
      {
        offset: 0,
        time: 5083,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1137180672, 1115684864, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 5093,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1137180672, 1115684864, 30, 0, 1e3])
      },
      {
        offset: 0,
        time: 5103,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1137180672, 1115684864, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 5103,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([5, 1128267776, -1048576e3, 500, 1, 1e3])
      },
      {
        offset: 0,
        time: 5163,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, -1048576e3, 1115684864, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 5173,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, -1048576e3, 1116733440, 30, 0, 1e3])
      },
      {
        offset: 0,
        time: 5183,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, -1048576e3, 1117782016, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 5193,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, -1048576e3, 1118830592, 30, 0, 1e3])
      },
      {
        offset: 0,
        time: 5203,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, -1048576e3, 1119879168, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 5203,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([5, 1124073472, -1048576e3, 500, 1, 1e3])
      },
      {
        offset: 0,
        time: 5263,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1137180672, 1119879168, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 5273,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1137180672, 1118830592, 30, 0, 1e3])
      },
      {
        offset: 0,
        time: 5283,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1137180672, 1117782016, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 5293,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1137180672, 1116733440, 30, 0, 1e3])
      },
      {
        offset: 0,
        time: 5303,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1137180672, 1115684864, 30, 1, 1e3])
      },
      { offset: 0, time: 5423, opcode: 14, size: 12, difficultyMask: 255, args: new Int32Array([0]) },
      {
        offset: 0,
        time: 5423,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([7, 1134559232, -1048576e3, 1700, -2, 1e3])
      },
      {
        offset: 0,
        time: 5663,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([7, 1133510656, -1048576e3, 1700, -2, 1e3])
      },
      {
        offset: 0,
        time: 5783,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([7, 1115684864, -1048576e3, 1700, -2, 1e3])
      },
      { offset: 0, time: 5783, opcode: 14, size: 12, difficultyMask: 255, args: new Int32Array([0]) },
      {
        offset: 0,
        time: 5903,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([7, 1119879168, -1048576e3, 1700, -2, 1e3])
      },
      {
        offset: 0,
        time: 6103,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([12, -1048576e3, 1115684864, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 6113,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([12, 1137180672, 1121976320, 30, 0, 1e3])
      },
      {
        offset: 0,
        time: 6123,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([12, 1137180672, 1121976320, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 6133,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([12, 1137180672, 1121976320, 30, 0, 1e3])
      },
      {
        offset: 0,
        time: 6143,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([12, 1137180672, 1121976320, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 6153,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([12, -1048576e3, 1115684864, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 6163,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([12, -1048576e3, 1115684864, 30, 0, 1e3])
      },
      {
        offset: 0,
        time: 6173,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([12, -1048576e3, 1115684864, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 6183,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([12, -1048576e3, 1115684864, 30, 0, 1e3])
      },
      {
        offset: 0,
        time: 6193,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([12, -1048576e3, 1115684864, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 6313,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([7, 1115684864, -1048576e3, 1300, 3, 1e3])
      },
      {
        offset: 0,
        time: 6313,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([7, 1134559232, -1048576e3, 1300, 3, 1e3])
      },
      {
        offset: 0,
        time: 6553,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, -1048576e3, 1115684864, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 6563,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, -1048576e3, 1115684864, 30, 0, 1e3])
      },
      {
        offset: 0,
        time: 6573,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, -1048576e3, 1115684864, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 6583,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, -1048576e3, 1115684864, 30, 0, 1e3])
      },
      {
        offset: 0,
        time: 6593,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, -1048576e3, 1115684864, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 6653,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1137180672, 1115684864, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 6663,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1137180672, 1115684864, 30, 0, 1e3])
      },
      {
        offset: 0,
        time: 6673,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1137180672, 1115684864, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 6683,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1137180672, 1115684864, 30, 0, 1e3])
      },
      {
        offset: 0,
        time: 6693,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1137180672, 1115684864, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 6753,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, -1048576e3, 1115684864, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 6763,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, -1048576e3, 1115684864, 30, 0, 1e3])
      },
      {
        offset: 0,
        time: 6773,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, -1048576e3, 1115684864, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 6783,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, -1048576e3, 1115684864, 30, 0, 1e3])
      },
      {
        offset: 0,
        time: 6793,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, -1048576e3, 1115684864, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 6853,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1137180672, 1115684864, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 6863,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1137180672, 1115684864, 30, 0, 1e3])
      },
      {
        offset: 0,
        time: 6873,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1137180672, 1115684864, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 6883,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1137180672, 1115684864, 30, 0, 1e3])
      },
      {
        offset: 0,
        time: 6893,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1137180672, 1115684864, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 6923,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([14, -1048576e3, 1115684864, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 6923,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([27, 1128267776, -1048576e3, 6e4, -2, 1e5])
      },
      { offset: 0, time: 6923, opcode: 10, size: 12, difficultyMask: 255, args: new Int32Array([0]) },
      { offset: 0, time: 6923, opcode: 6, size: 12, difficultyMask: 255, args: new Int32Array([3]) },
      { offset: 0, time: 6924, opcode: 7, size: 8, difficultyMask: 255, args: new Int32Array([]) },
      { offset: 0, time: 6924, opcode: 8, size: 16, difficultyMask: 255, args: new Int32Array([0, 1]) },
      { offset: 0, time: 6924, opcode: 10, size: 12, difficultyMask: 255, args: new Int32Array([0]) },
      {
        offset: 0,
        time: 6924,
        opcode: 0,
        size: 32,
        difficultyMask: 254,
        args: new Int32Array([35, 1128267776, 1126170624, 6e4, -2, 1e5])
      },
      { offset: 0, time: 6925, opcode: 10, size: 12, difficultyMask: 254, args: new Int32Array([0]) },
      { offset: 0, time: 6925, opcode: 6, size: 12, difficultyMask: 255, args: new Int32Array([1]) },
      { offset: 0, time: 6925, opcode: 7, size: 8, difficultyMask: 255, args: new Int32Array([]) }
    ]
  },
  {
    index: 1,
    offset: 56704,
    instructions: [
      { offset: 0, time: 20, opcode: 13, size: 12, difficultyMask: 255, args: new Int32Array([0]) },
      {
        offset: 0,
        time: 30,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1115684864, -1048576e3, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 40,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1115684864, -1048576e3, 30, 0, 1e3])
      },
      {
        offset: 0,
        time: 50,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1115684864, -1048576e3, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 60,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1115684864, -1048576e3, 30, 0, 1e3])
      },
      {
        offset: 0,
        time: 70,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1115684864, -1048576e3, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 80,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1115684864, -1048576e3, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 90,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1115684864, -1048576e3, 30, 0, 1e3])
      },
      {
        offset: 0,
        time: 100,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1115684864, -1048576e3, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 110,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1115684864, -1048576e3, 30, 0, 1e3])
      },
      {
        offset: 0,
        time: 120,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1115684864, -1048576e3, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 130,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1115684864, -1048576e3, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 140,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1115684864, -1048576e3, 30, 0, 1e3])
      },
      {
        offset: 0,
        time: 150,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1115684864, -1048576e3, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 160,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1115684864, -1048576e3, 30, 0, 1e3])
      },
      {
        offset: 0,
        time: 170,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1115684864, -1048576e3, 30, 1, 1e3])
      },
      { offset: 0, time: 190, opcode: 13, size: 12, difficultyMask: 255, args: new Int32Array([0]) },
      {
        offset: 0,
        time: 200,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1134559232, -1048576e3, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 210,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1134559232, -1048576e3, 30, 0, 1e3])
      },
      {
        offset: 0,
        time: 220,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1134559232, -1048576e3, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 230,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1134559232, -1048576e3, 30, 0, 1e3])
      },
      {
        offset: 0,
        time: 240,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1134559232, -1048576e3, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 250,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1134559232, -1048576e3, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 260,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1134559232, -1048576e3, 30, 0, 1e3])
      },
      {
        offset: 0,
        time: 270,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1134559232, -1048576e3, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 280,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1134559232, -1048576e3, 30, 0, 1e3])
      },
      {
        offset: 0,
        time: 290,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1134559232, -1048576e3, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 300,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1134559232, -1048576e3, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 310,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1134559232, -1048576e3, 30, 0, 1e3])
      },
      {
        offset: 0,
        time: 320,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1134559232, -1048576e3, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 330,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1134559232, -1048576e3, 30, 0, 1e3])
      },
      {
        offset: 0,
        time: 340,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1134559232, -1048576e3, 30, 1, 1e3])
      },
      { offset: 0, time: 360, opcode: 13, size: 12, difficultyMask: 255, args: new Int32Array([0]) },
      {
        offset: 0,
        time: 370,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1115684864, -1048576e3, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 380,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1115684864, -1048576e3, 30, 0, 1e3])
      },
      {
        offset: 0,
        time: 390,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1115684864, -1048576e3, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 400,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1115684864, -1048576e3, 30, 0, 1e3])
      },
      {
        offset: 0,
        time: 410,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1115684864, -1048576e3, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 420,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1115684864, -1048576e3, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 430,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1115684864, -1048576e3, 30, 0, 1e3])
      },
      {
        offset: 0,
        time: 440,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1115684864, -1048576e3, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 450,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1115684864, -1048576e3, 30, 0, 1e3])
      },
      {
        offset: 0,
        time: 460,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1115684864, -1048576e3, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 470,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1115684864, -1048576e3, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 480,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1115684864, -1048576e3, 30, 0, 1e3])
      },
      {
        offset: 0,
        time: 490,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1115684864, -1048576e3, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 500,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1115684864, -1048576e3, 30, 0, 1e3])
      },
      {
        offset: 0,
        time: 510,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1115684864, -1048576e3, 30, 1, 1e3])
      },
      { offset: 0, time: 530, opcode: 13, size: 12, difficultyMask: 255, args: new Int32Array([0]) },
      {
        offset: 0,
        time: 540,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1134559232, -1048576e3, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 550,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1134559232, -1048576e3, 30, 0, 1e3])
      },
      {
        offset: 0,
        time: 560,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1134559232, -1048576e3, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 570,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1134559232, -1048576e3, 30, 0, 1e3])
      },
      {
        offset: 0,
        time: 580,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1134559232, -1048576e3, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 590,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1134559232, -1048576e3, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 600,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1134559232, -1048576e3, 30, 0, 1e3])
      },
      {
        offset: 0,
        time: 610,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1134559232, -1048576e3, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 620,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1134559232, -1048576e3, 30, 0, 1e3])
      },
      {
        offset: 0,
        time: 630,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1134559232, -1048576e3, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 640,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1134559232, -1048576e3, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 650,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1134559232, -1048576e3, 30, 0, 1e3])
      },
      {
        offset: 0,
        time: 660,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1134559232, -1048576e3, 30, 1, 1e3])
      },
      {
        offset: 0,
        time: 670,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1134559232, -1048576e3, 30, 0, 1e3])
      },
      {
        offset: 0,
        time: 680,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1134559232, -1048576e3, 30, 1, 1e3])
      }
    ]
  }
], P0 = {
  version: 2048,
  subCount: 78,
  subs: [],
  timelines: T0
}, Y0 = {
  route: "stage4b",
  source: "ecldata4b.ecl",
  subCount: 78,
  timelineCount: 2,
  cards: [
    {
      sub: 36,
      id: 77,
      name: "魔符「ミルキーウェイ」",
      owner: "霧雨魔理沙",
      face: 0,
      bonus: 22e6,
      lastSpell: !1
    },
    {
      sub: 36,
      id: 78,
      name: "魔符「ミルキーウェイ」",
      owner: "霧雨魔理沙",
      face: 0,
      bonus: 22e6,
      lastSpell: !1
    },
    {
      sub: 36,
      id: 79,
      name: "魔空「アステロイドベルト」",
      owner: "霧雨魔理沙",
      face: 0,
      bonus: 22e6,
      lastSpell: !1
    },
    {
      sub: 36,
      id: 80,
      name: "魔空「アステロイドベルト」",
      owner: "霧雨魔理沙",
      face: 0,
      bonus: 22e6,
      lastSpell: !1
    },
    {
      sub: 41,
      id: 81,
      name: "魔符「スターダストレヴァリエ」",
      owner: "霧雨魔理沙",
      face: 0,
      bonus: 22e6,
      lastSpell: !1
    },
    {
      sub: 41,
      id: 82,
      name: "魔符「スターダストレヴァリエ」",
      owner: "霧雨魔理沙",
      face: 0,
      bonus: 22e6,
      lastSpell: !1
    },
    {
      sub: 41,
      id: 83,
      name: "黒魔「イベントホライズン」",
      owner: "霧雨魔理沙",
      face: 0,
      bonus: 22e6,
      lastSpell: !1
    },
    {
      sub: 41,
      id: 84,
      name: "黒魔「イベントホライズン」",
      owner: "霧雨魔理沙",
      face: 0,
      bonus: 22e6,
      lastSpell: !1
    },
    {
      sub: 47,
      id: 85,
      name: "恋符「ノンディレクショナルレーザー」",
      owner: "霧雨魔理沙",
      face: 0,
      bonus: 22e6,
      lastSpell: !1
    },
    {
      sub: 47,
      id: 86,
      name: "恋符「ノンディレクショナルレーザー」",
      owner: "霧雨魔理沙",
      face: 0,
      bonus: 22e6,
      lastSpell: !1
    },
    {
      sub: 47,
      id: 87,
      name: "恋風「スターライトタイフーン」",
      owner: "霧雨魔理沙",
      face: 0,
      bonus: 22e6,
      lastSpell: !1
    },
    {
      sub: 47,
      id: 88,
      name: "恋風「スターライトタイフーン」",
      owner: "霧雨魔理沙",
      face: 0,
      bonus: 22e6,
      lastSpell: !1
    },
    {
      sub: 55,
      id: 89,
      name: "恋符「マスタースパーク」",
      owner: "霧雨魔理沙",
      face: 0,
      bonus: 22e6,
      lastSpell: !1
    },
    {
      sub: 55,
      id: 90,
      name: "恋符「マスタースパーク」",
      owner: "霧雨魔理沙",
      face: 0,
      bonus: 22e6,
      lastSpell: !1
    },
    {
      sub: 55,
      id: 91,
      name: "恋心「ダブルスパーク」",
      owner: "霧雨魔理沙",
      face: 0,
      bonus: 22e6,
      lastSpell: !1
    },
    {
      sub: 55,
      id: 92,
      name: "恋心「ダブルスパーク」",
      owner: "霧雨魔理沙",
      face: 0,
      bonus: 22e6,
      lastSpell: !1
    },
    {
      sub: 62,
      id: 93,
      name: "光符「アースライトレイ」",
      owner: "霧雨魔理沙",
      face: 0,
      bonus: 25e6,
      lastSpell: !1
    },
    {
      sub: 62,
      id: 94,
      name: "光符「アースライトレイ」",
      owner: "霧雨魔理沙",
      face: 0,
      bonus: 25e6,
      lastSpell: !1
    },
    {
      sub: 62,
      id: 95,
      name: "光撃「シュート・ザ・ムーン」",
      owner: "霧雨魔理沙",
      face: 0,
      bonus: 25e6,
      lastSpell: !1
    },
    {
      sub: 62,
      id: 96,
      name: "光撃「シュート・ザ・ムーン」",
      owner: "霧雨魔理沙",
      face: 0,
      bonus: 25e6,
      lastSpell: !1
    },
    {
      sub: 67,
      id: 97,
      name: "魔砲「ファイナルスパーク」",
      owner: "霧雨魔理沙",
      face: 0,
      bonus: 25e6,
      lastSpell: !0
    },
    {
      sub: 67,
      id: 98,
      name: "魔砲「ファイナルスパーク」",
      owner: "霧雨魔理沙",
      face: 0,
      bonus: 25e6,
      lastSpell: !0
    },
    {
      sub: 67,
      id: 99,
      name: "魔砲「ファイナルマスタースパーク」",
      owner: "霧雨魔理沙",
      face: 0,
      bonus: 25e6,
      lastSpell: !0
    }
  ],
  scripts: x0,
  waves: P0
};
export {
  Y0 as STAGE4B_SCRIPT
};
