import { r as t, n as c } from "./index-BsS59GeT.js";
const r = 1, o = 2, f = 4, n = 8, a = 16;
function* k(e) {
  let s = 0, i = 0;
  for (; s >= 0; )
    switch (++i > 2e3 && (i = 0, yield 1), s) {
      case 0: {
        e.setAnmScripts6(0), e.setBounds(24, 24), e.f2 = e.posX, e.f3 = e.posY, e.f0 = e.playerX - e.posX, e.f1 = e.playerY - e.posY, e.f0 *= 0.6, e.f1 *= 0.6, e.f0 += e.posX, e.f1 += e.posY, e.moveRelative(100, 4, e.f0, e.f1), e.ci0 = 90, s = 1;
        break;
      }
      case 1: {
        e.f0 = e.playerX - e.f2, e.f1 = e.playerY - e.f3, e.f0 *= 0.6, e.f1 *= 0.6, e.f4 = e.f0 - e.tweenDX, e.f5 = e.f1 - e.tweenDY, e.f4 *= 2e-3, e.f5 *= 2e-3, e.tweenDX += e.f4, e.tweenDY += e.f5, yield 1, s = 2;
        break;
      }
      case 2: {
        if (--e.ci0 > 0) {
          s = 1;
          break;
        }
        s = 3;
        break;
      }
      case 3: {
        e.isDiff(o | a) && e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 0,
          color: 6,
          count: 1,
          rings: 1,
          speed: 1,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.18479957,
          transform: 515
        }), e.isDiff(f | a) && e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 0,
          color: 6,
          count: 1,
          rings: 1,
          speed: 1.8,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.18479957,
          transform: 515
        }), e.isDiff(n | a) && e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 0,
          color: 6,
          count: 1,
          rings: 1,
          speed: 2.2,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.18479957,
          transform: 515
        }), e.f2 = e.timer + 3.141593, e.setHeadingSpeed(e.f2, 0.1), e.setSpeedAccel(0.01), yield 60, s = 4;
        break;
      }
      case 4: {
        e.holdShots(), e.isDiff(f | a) && e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 1,
          color: 2,
          count: 1,
          rings: 1,
          speed: 1.6,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.18479957,
          transform: 515
        }), e.isDiff(n | a) && e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 1,
          color: 2,
          count: 1,
          rings: 1,
          speed: 2.6,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.18479957,
          transform: 515
        }), e.releaseShots(), e.isDiff(f | a) && e.setShotRepeatRand(90), e.isDiff(n | a) && e.setShotRepeatRand(30), yield 5e3, s = 5;
        break;
      }
      case 5:
        return;
      default:
        return;
    }
}
function* b(e) {
  let s = 0, i = 0;
  for (; s >= 0; )
    switch (++i > 2e3 && (i = 0, yield 1), s) {
      case 0: {
        e.setAnmScripts6(30), e.setExtraAnm(0, 48), e.setBounds(24, 24), e.setMisc160(30), e.holdShots(), e.isDiff(r | a) && e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 2,
          color: 2,
          count: 1,
          rings: 1,
          speed: 1.1,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.08975979,
          transform: 515
        }), e.isDiff(o | a) && e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 2,
          color: 2,
          count: 3,
          rings: 2,
          speed: 1.8,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.08975979,
          transform: 515
        }), e.isDiff(f | a) && e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 2,
          color: 2,
          count: 5,
          rings: 2,
          speed: 2,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.08975979,
          transform: 515
        }), e.isDiff(n | a) && e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 2,
          color: 2,
          count: 5,
          rings: 3,
          speed: 3.2,
          speed2: 1,
          angle: 0,
          angleStep: 0.08975979,
          transform: 515
        }), e.releaseShots(), e.movePolar(60, 4, 1.570796, 2.2), e.isDiff(r | a) && (e.i0 = 120), e.isDiff(o | a) && (e.i0 = 60), e.isDiff(f | a) && (e.i0 = 40), e.isDiff(n | a) && (e.i0 = 30), yield 1, s = 1;
        break;
      }
      case 1: {
        e.setShotRepeat(e.i0), yield 29, s = 2;
        break;
      }
      case 2: {
        e.isDiff(o | a) && e.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 2,
          color: 2,
          count: 32,
          rings: 1,
          speed: 1.1,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.18479957,
          transform: 515
        }), e.isDiff(f | a) && e.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 2,
          color: 2,
          count: 32,
          rings: 1,
          speed: 1.6,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.18479957,
          transform: 515
        }), e.isDiff(n | a) && e.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 2,
          color: 2,
          count: 32,
          rings: 2,
          speed: 2.1,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.18479957,
          transform: 515
        }), yield 30, s = 3;
        break;
      }
      case 3: {
        e.f0 = 0, e.linkChildAttached(2, 0, 0, 50, -2, 100), e.f0 = 3.141593, e.linkChildAttached(2, 0, 0, 50, -2, 100), yield 120, s = 4;
        break;
      }
      case 4: {
        e.setHeadingSpeed(0.392699, 0.7), yield 5e3, s = 5;
        break;
      }
      case 5:
        return;
      default:
        return;
    }
}
function* A(e) {
  let s = 0, i = 0;
  for (; s >= 0; )
    switch (++i > 2e3 && (i = 0, yield 1), s) {
      case 0: {
        e.setAnm(55), e.setBounds(24, 24), e.writeScriptFlags(16), e.setHitFlash(1), e.moveArc(100, e.f0, 0.05236, 0.64), yield 100, s = 1;
        break;
      }
      case 1: {
        e.setAccel(6e3, 0.05236, 0), yield 5e3, s = 2;
        break;
      }
      case 2:
        return;
      default:
        return;
    }
}
function* D(e) {
  let s = 0, i = 0;
  for (; s >= 0; )
    switch (++i > 2e3 && (i = 0, yield 1), s) {
      case 0: {
        e.setAnmScripts6(30), e.setExtraAnm(0, 48), e.setBounds(24, 24), e.setMisc160(30), e.holdShots(), e.isDiff(r | a) && e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 2,
          color: 2,
          count: 1,
          rings: 1,
          speed: 1.1,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.08975979,
          transform: 515
        }), e.isDiff(o | a) && e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 2,
          color: 2,
          count: 3,
          rings: 2,
          speed: 1.8,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.08975979,
          transform: 515
        }), e.isDiff(f | a) && e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 2,
          color: 2,
          count: 5,
          rings: 2,
          speed: 2,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.08975979,
          transform: 515
        }), e.isDiff(n | a) && e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 2,
          color: 2,
          count: 5,
          rings: 3,
          speed: 3.2,
          speed2: 1,
          angle: 0,
          angleStep: 0.08975979,
          transform: 515
        }), e.releaseShots(), e.movePolar(60, 4, 1.570796, 2.2), e.isDiff(r | a) && (e.i0 = 120), e.isDiff(o | a) && (e.i0 = 60), e.isDiff(f | a) && (e.i0 = 40), e.isDiff(n | a) && (e.i0 = 30), yield 1, s = 1;
        break;
      }
      case 1: {
        e.setShotRepeat(e.i0), yield 29, s = 2;
        break;
      }
      case 2: {
        e.isDiff(o | a) && e.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 2,
          color: 2,
          count: 32,
          rings: 1,
          speed: 1.1,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.18479957,
          transform: 515
        }), e.isDiff(f | a) && e.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 2,
          color: 2,
          count: 32,
          rings: 1,
          speed: 1.6,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.18479957,
          transform: 515
        }), e.isDiff(n | a) && e.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 2,
          color: 2,
          count: 32,
          rings: 2,
          speed: 2.1,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.18479957,
          transform: 515
        }), yield 30, s = 3;
        break;
      }
      case 3: {
        e.f0 = 0, e.linkChildAttached(4, 0, 0, 50, -2, 100), e.f0 = 3.141593, e.linkChildAttached(4, 0, 0, 50, -2, 100), yield 120, s = 4;
        break;
      }
      case 4: {
        e.setHeadingSpeed(0.392699, 0.7), yield 5e3, s = 5;
        break;
      }
      case 5:
        return;
      default:
        return;
    }
}
function* R(e) {
  let s = 0, i = 0;
  for (; s >= 0; )
    switch (++i > 2e3 && (i = 0, yield 1), s) {
      case 0: {
        e.setAnm(55), e.setBounds(24, 24), e.writeScriptFlags(16), e.setHitFlash(1), e.moveArc(100, e.f0, -0.05236, 0.64), yield 100, s = 1;
        break;
      }
      case 1: {
        e.setAccel(6e3, -0.05236, 0), yield 5e3, s = 2;
        break;
      }
      case 2:
        return;
      default:
        return;
    }
}
function* M(e) {
  let s = 0, i = 0;
  for (; s >= 0; )
    switch (++i > 2e3 && (i = 0, yield 1), s) {
      case 0: {
        e.setAnmScripts6(30), e.setExtraAnm(0, 48), e.setBounds(24, 24), e.setMisc160(30), e.movePolar(60, 4, 1.570796, 2), yield 30, s = 1;
        break;
      }
      case 1: {
        e.isDiff(o | a) && e.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 2,
          color: 6,
          count: 32,
          rings: 1,
          speed: 1.1,
          speed2: 0.5,
          angle: t(10069),
          angleStep: 0.18479957,
          transform: 515
        }), e.isDiff(f | a) && e.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 2,
          color: 6,
          count: 32,
          rings: 1,
          speed: 1.5,
          speed2: 0.5,
          angle: t(10069),
          angleStep: 0.18479957,
          transform: 515
        }), e.isDiff(n | a) && e.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 2,
          color: 6,
          count: 32,
          rings: 2,
          speed: 2.1,
          speed2: 0.5,
          angle: t(10069),
          angleStep: 0.18479957,
          transform: 515
        }), yield 40, s = 2;
        break;
      }
      case 2: {
        e.f0 = 0, e.linkChildAttached(10, 0, 0, 100, -2, 100), e.f0 = 3.141593, e.linkChildAttached(10, 0, 0, 100, -2, 100), e.f0 = 1.570796, e.linkChildAttached(10, 0, 0, 100, -2, 100), e.f0 = -1.570796, e.linkChildAttached(10, 0, 0, 100, -2, 100), yield 230, s = 3;
        break;
      }
      case 3: {
        e.setHeadingSpeed(0, 0.7), yield 5e3, s = 4;
        break;
      }
      case 4:
        return;
      default:
        return;
    }
}
function* F(e) {
  let s = 0;
  yield 100;
  let i = 0;
  for (; s >= 0; )
    switch (++i > 2e3 && (i = 0, yield 1), s) {
      case 0: {
        e.nop(), s = 1;
        break;
      }
      case 1: {
        e.f0 = e.moveAngle + 3.141593, e.spawnShot({
          mode: "aimedRing",
          // aim 2 of 96..104
          type: 3,
          color: 6,
          count: 2,
          rings: 1,
          speed: 1.3,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.18479957,
          transform: 3
        }), yield 128, s = 2;
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
function* I(e) {
  let s = 0;
  yield 40;
  let i = 0;
  for (; s >= 0; )
    switch (++i > 2e3 && (i = 0, yield 1), s) {
      case 0: {
        e.nop(), s = 1;
        break;
      }
      case 1: {
        e.f0 = e.moveAngle + 3.141593, e.spawnShot({
          mode: "aimedRing",
          // aim 2 of 96..104
          type: 3,
          color: 6,
          count: 2,
          rings: 1,
          speed: 1.6,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.18479957,
          transform: 3
        }), yield 32, s = 2;
        break;
      }
      case 2: {
        e.spawnShot({
          mode: "aimedRing",
          // aim 2 of 96..104
          type: 3,
          color: 6,
          count: 2,
          rings: 1,
          speed: 1.6,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.18479957,
          transform: 3
        }), yield 96, s = 3;
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
function* z(e) {
  let s = 0;
  yield 1;
  let i = 0;
  for (; s >= 0; )
    switch (++i > 2e3 && (i = 0, yield 1), s) {
      case 0: {
        e.nop(), s = 1;
        break;
      }
      case 1: {
        e.f0 = e.moveAngle + 3.141593, e.spawnShot({
          mode: "aimedRing",
          // aim 2 of 96..104
          type: 3,
          color: 6,
          count: 2,
          rings: 1,
          speed: 2,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.18479957,
          transform: 3
        }), yield 16, s = 2;
        break;
      }
      case 2: {
        e.spawnShot({
          mode: "aimedRing",
          // aim 2 of 96..104
          type: 3,
          color: 6,
          count: 2,
          rings: 1,
          speed: 2,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.18479957,
          transform: 3
        }), yield 16, s = 3;
        break;
      }
      case 3: {
        e.spawnShot({
          mode: "aimedRing",
          // aim 2 of 96..104
          type: 3,
          color: 6,
          count: 2,
          rings: 1,
          speed: 2,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.18479957,
          transform: 3
        }), yield 96, s = 4;
        break;
      }
      case 4: {
        s = 1;
        break;
      }
      case 5:
        return;
      default:
        return;
    }
}
function* v(e) {
  let s = 0;
  yield 1;
  let i = 0;
  for (; s >= 0; )
    switch (++i > 2e3 && (i = 0, yield 1), s) {
      case 0: {
        e.nop(), s = 1;
        break;
      }
      case 1: {
        e.f0 = e.moveAngle + 3.141593, e.spawnShot({
          mode: "aimedRing",
          // aim 2 of 96..104
          type: 3,
          color: 6,
          count: 3,
          rings: 1,
          speed: 2.6,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.18479957,
          transform: 3
        }), yield 8, s = 2;
        break;
      }
      case 2: {
        e.spawnShot({
          mode: "aimedRing",
          // aim 2 of 96..104
          type: 3,
          color: 6,
          count: 3,
          rings: 1,
          speed: 2.6,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.18479957,
          transform: 3
        }), yield 8, s = 3;
        break;
      }
      case 3: {
        e.spawnShot({
          mode: "aimedRing",
          // aim 2 of 96..104
          type: 3,
          color: 6,
          count: 3,
          rings: 1,
          speed: 2.6,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.18479957,
          transform: 3
        }), yield 8, s = 4;
        break;
      }
      case 4: {
        e.spawnShot({
          mode: "aimedRing",
          // aim 2 of 96..104
          type: 3,
          color: 6,
          count: 3,
          rings: 1,
          speed: 2.6,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.18479957,
          transform: 3
        }), yield 8, s = 5;
        break;
      }
      case 5: {
        e.spawnShot({
          mode: "aimedRing",
          // aim 2 of 96..104
          type: 3,
          color: 6,
          count: 3,
          rings: 1,
          speed: 2.6,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.18479957,
          transform: 3
        }), yield 96, s = 6;
        break;
      }
      case 6: {
        s = 1;
        break;
      }
      case 7:
        return;
      default:
        return;
    }
}
function* x(e) {
  let s = 0, i = 0;
  for (; s >= 0; )
    switch (++i > 2e3 && (i = 0, yield 1), s) {
      case 0: {
        e.setAnm(55), e.setBounds(24, 24), e.writeScriptFlags(16), e.setHitFlash(1), e.moveArc(100, e.f0, -0.05236, 0.64), e.isDiff(r | a) && e.callSubAlloc(0, 6), e.isDiff(o | a) && e.callSubAlloc(0, 7), e.isDiff(f | a) && e.callSubAlloc(0, 8), e.isDiff(n | a) && e.callSubAlloc(0, 9), yield 100, s = 1;
        break;
      }
      case 1: {
        e.setAccel(6e3, -0.05236, 0), yield 5e3, s = 2;
        break;
      }
      case 2:
        return;
      default:
        return;
    }
}
function* E(e) {
  let s = 0, i = 0;
  for (; s >= 0; )
    switch (++i > 2e3 && (i = 0, yield 1), s) {
      case 0: {
        e.setAnmScripts6(30), e.setExtraAnm(0, 48), e.setBounds(24, 24), e.setMisc160(30), e.movePolar(60, 4, 1.570796, 2), yield 30, s = 1;
        break;
      }
      case 1: {
        e.isDiff(o | a) && e.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 2,
          color: 6,
          count: 32,
          rings: 1,
          speed: 1.1,
          speed2: 0.5,
          angle: t(10069),
          angleStep: 0.18479957,
          transform: 515
        }), e.isDiff(f | a) && e.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 2,
          color: 6,
          count: 32,
          rings: 1,
          speed: 1.5,
          speed2: 0.5,
          angle: t(10069),
          angleStep: 0.18479957,
          transform: 515
        }), e.isDiff(n | a) && e.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 2,
          color: 6,
          count: 32,
          rings: 2,
          speed: 2.1,
          speed2: 0.5,
          angle: t(10069),
          angleStep: 0.18479957,
          transform: 515
        }), yield 20, s = 2;
        break;
      }
      case 2: {
        e.f0 = 0, e.linkChildAttached(12, 0, 0, 100, -2, 100), e.f0 = 3.141593, e.linkChildAttached(12, 0, 0, 100, -2, 100), e.f0 = 1.570796, e.linkChildAttached(12, 0, 0, 100, -2, 100), e.f0 = -1.570796, e.linkChildAttached(12, 0, 0, 100, -2, 100), yield 240, s = 3;
        break;
      }
      case 3: {
        e.setHeadingSpeed(0, 0.7), yield 5e3, s = 4;
        break;
      }
      case 4:
        return;
      default:
        return;
    }
}
function* _(e) {
  let s = 0, i = 0;
  for (; s >= 0; )
    switch (++i > 2e3 && (i = 0, yield 1), s) {
      case 0: {
        e.setAnm(55), e.setBounds(24, 24), e.writeScriptFlags(16), e.setHitFlash(1), e.moveArc(100, e.f0, 0.05236, 0.64), e.isDiff(r | a) && e.callSubAlloc(0, 6), e.isDiff(o | a) && e.callSubAlloc(0, 7), e.isDiff(f | a) && e.callSubAlloc(0, 8), e.isDiff(n | a) && e.callSubAlloc(0, 9), yield 100, s = 1;
        break;
      }
      case 1: {
        e.setAccel(6e3, 0.05236, 0), yield 5e3, s = 2;
        break;
      }
      case 2:
        return;
      default:
        return;
    }
}
function* C(e) {
  let s = 0, i = 0;
  for (; s >= 0; )
    switch (++i > 2e3 && (i = 0, yield 1), s) {
      case 0: {
        e.setAnm(49), e.setBounds(24, 24), e.f0 = e.randF32S * 0.098175, e.f0 += 0, e.setHeadingSpeed(e.f0, 3.7), e.holdShots(), e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 3,
          color: 10,
          count: 1,
          rings: 1,
          speed: 0.8,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.18479957,
          transform: 520
        }), e.releaseShots(), e.isDiff(f | a) && e.setShotRepeatRand(500), e.isDiff(n | a) && e.setShotRepeatRand(100), yield 5e3, s = 1;
        break;
      }
      case 1:
        return;
      default:
        return;
    }
}
function* B(e) {
  let s = 0, i = 0;
  for (; s >= 0; )
    switch (++i > 2e3 && (i = 0, yield 1), s) {
      case 0: {
        e.clearScriptFlags(56), e.spawnEffectAt(51, 16, 0), yield 4, s = 1;
        break;
      }
      case 1: {
        e.spawnEffectAt(51, 16, 0), yield 4, s = 2;
        break;
      }
      case 2: {
        e.spawnEffectAt(51, 16, 0), yield 4, s = 3;
        break;
      }
      case 3: {
        e.spawnEffectAt(51, 16, 0), yield 4, s = 4;
        break;
      }
      case 4: {
        e.spawnEffectAt(51, 16, 0), yield 4, s = 5;
        break;
      }
      case 5: {
        e.spawnEffectAt(51, 16, 0), s = 6;
        break;
      }
      case 6: {
        e.spawnEffectAt(51, 4, 0), yield 4, s = 7;
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
function* H(e) {
  let s = 0, i = 0;
  for (; s >= 0; )
    switch (++i > 2e3 && (i = 0, yield 1), s) {
      case 0: {
        e.setAnmScripts6Alt(0), e.clearScriptFlags(20), e.setBossPresent(0), e.setBounds(48, 48), e.setMisc160(60), e.isDiff(r | o | a) && e.setLives(6e3), e.isDiff(r | o | a) && e.setSpellTimer(1260, 18), e.isDiff(f | n | a) && e.setLives(7300), e.isDiff(f | n | a) && e.setSpellTimer(1260, 22), e.isDiff(f | n | a) && e.setPhase(0, 1300, 22), e.isDiff(r | o | a) && e.setLifeBarSlice(0, 0, e.maxHp, -1), e.isDiff(f | n | a) && e.setLifeBarSlice(0, e.phase0, e.maxHp, -1), e.isDiff(f | n | a) && e.setLifeBarSlice(1, 0, e.phase0, 16752800), e.setRelPos(96, -48), e.moveRelative(60, 4, 192, 128), e.spawnEffect(6, 1050253722, 1060320051, 1050253722, 1124073472), yield 10, s = 1;
        break;
      }
      case 1: {
        e.spawnEffect(6, -1097229926, 1060320051, 1050253722, 1124073472), yield 10, s = 2;
        break;
      }
      case 2: {
        e.spawnEffect(6, 1050253722, 1060320051, -1097229926, 1124073472), yield 10, s = 3;
        break;
      }
      case 3: {
        e.spawnEffect(6, -1097229926, -1087163597, -1097229926, 1119879168), yield 10, s = 4;
        break;
      }
      case 4: {
        e.spawnEffect(6, 1050253722, -1087163597, -1097229926, 1119879168), yield 10, s = 5;
        break;
      }
      case 5: {
        e.spawnEffect(6, -1097229926, -1087163597, 1050253722, 1119879168), yield 10, s = 6;
        break;
      }
      case 6: {
        e.setMotionClamp(32, 48, 352, 128), yield* g(e), s = 7;
        break;
      }
      case 7:
        return;
      default:
        return;
    }
}
function* g(e) {
  let s = 0, i = 0;
  for (; s >= 0; )
    switch (++i > 2e3 && (i = 0, yield 1), s) {
      case 0: {
        e.setScriptFlags(4), e.setMisc129(1), e.setDeathCallbackSub(18), e.setMisc144(5, 3), s = 1;
        break;
      }
      case 1: {
        if (e.autoAnm(), e.f0 = e.randAngle * 0.04, e.f0 -= 1.570796, e.difficulty != 0) {
          s = 3;
          break;
        }
        s = 2;
        break;
      }
      case 2: {
        e.setShotRecord(0, 64, 0, 40, 1, 1.570796, 1.5), e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 2,
          color: 13,
          count: 10,
          rings: 1,
          speed: 0.8,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.31415927,
          transform: 578
        }), e.setShotRecord(0, 64, 0, 50, 1, 1.570796, 1.4), e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 2,
          color: 13,
          count: 10,
          rings: 1,
          speed: 1.2,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.31415927,
          transform: 578
        }), yield 60, s = 8;
        break;
      }
      case 3: {
        if (e.difficulty != 1) {
          s = 5;
          break;
        }
        s = 4;
        break;
      }
      case 4: {
        e.setShotRecord(0, 64, 0, 40, 1, 1.570796, 1.5), e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 2,
          color: 13,
          count: 10,
          rings: 1,
          speed: 0.8,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.31415927,
          transform: 578
        }), e.setShotRecord(0, 64, 0, 50, 1, 1.570796, 1.4), e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 2,
          color: 13,
          count: 10,
          rings: 1,
          speed: 1.2,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.31415927,
          transform: 578
        }), e.setShotRecord(0, 64, 0, 60, 1, 1.570796, 1.3), e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 2,
          color: 13,
          count: 10,
          rings: 1,
          speed: 1.6,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.31415927,
          transform: 578
        }), e.setShotRecord(0, 64, 0, 70, 1, 1.570796, 1.2), e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 2,
          color: 13,
          count: 10,
          rings: 1,
          speed: 2,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.31415927,
          transform: 578
        }), yield 60, s = 8;
        break;
      }
      case 5: {
        if (e.difficulty != 2) {
          s = 7;
          break;
        }
        s = 6;
        break;
      }
      case 6: {
        e.setShotRecord(0, 64, 0, 40, 1, 1.570796, 1.5), e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 2,
          color: 13,
          count: 12,
          rings: 1,
          speed: 0.8,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.22439948,
          transform: 578
        }), e.setShotRecord(0, 64, 0, 50, 1, 1.570796, 1.4), e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 2,
          color: 13,
          count: 12,
          rings: 1,
          speed: 1.2,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.22439948,
          transform: 578
        }), e.setShotRecord(0, 64, 0, 60, 1, 1.570796, 1.3), e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 2,
          color: 13,
          count: 12,
          rings: 1,
          speed: 1.6,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.22439948,
          transform: 578
        }), e.setShotRecord(0, 64, 0, 70, 1, 1.570796, 1.2), e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 2,
          color: 13,
          count: 12,
          rings: 1,
          speed: 2,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.22439948,
          transform: 578
        }), yield 60, s = 8;
        break;
      }
      case 7: {
        e.setShotRecord(0, 64, 0, 40, 1, 1.570796, 2.2), e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 2,
          color: 13,
          count: 20,
          rings: 1,
          speed: 0.8,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.19634955,
          transform: 578
        }), e.setShotRecord(0, 64, 0, 50, 1, 1.570796, 2.1), e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 2,
          color: 13,
          count: 20,
          rings: 1,
          speed: 1.2,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.19634955,
          transform: 578
        }), e.setShotRecord(0, 64, 0, 60, 1, 1.570796, 2), e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 2,
          color: 13,
          count: 20,
          rings: 1,
          speed: 1.6,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.19634955,
          transform: 578
        }), e.setShotRecord(0, 64, 0, 70, 1, 1.570796, 1.9), e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 2,
          color: 13,
          count: 20,
          rings: 1,
          speed: 2,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.19634955,
          transform: 578
        }), e.setShotRecord(0, 64, 0, 70, 1, 1.570796, 1.7), e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 2,
          color: 13,
          count: 20,
          rings: 1,
          speed: 2,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.19634955,
          transform: 578
        }), e.setShotRecord(0, 64, 0, 70, 1, 1.570796, 1.5), e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 2,
          color: 13,
          count: 20,
          rings: 1,
          speed: 2,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.19634955,
          transform: 578
        }), yield 60, s = 8;
        break;
      }
      case 8: {
        if (e.f0 = e.randAngle * 0.04, e.f0 += 1.570796, e.difficulty != 0) {
          s = 10;
          break;
        }
        s = 9;
        break;
      }
      case 9: {
        e.setShotRecord(0, 64, 0, 40, 1, -1.570796, 1.5), e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 2,
          color: 8,
          count: 10,
          rings: 1,
          speed: 0.8,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.31415927,
          transform: 578
        }), e.setShotRecord(0, 64, 0, 50, 1, -1.570796, 1.4), e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 2,
          color: 8,
          count: 10,
          rings: 1,
          speed: 1.2,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.31415927,
          transform: 578
        }), yield 60, s = 15;
        break;
      }
      case 10: {
        if (e.difficulty != 1) {
          s = 12;
          break;
        }
        s = 11;
        break;
      }
      case 11: {
        e.setShotRecord(0, 64, 0, 40, 1, -1.570796, 1.5), e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 2,
          color: 8,
          count: 10,
          rings: 1,
          speed: 0.8,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.31415927,
          transform: 578
        }), e.setShotRecord(0, 64, 0, 50, 1, -1.570796, 1.4), e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 2,
          color: 8,
          count: 10,
          rings: 1,
          speed: 1.2,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.31415927,
          transform: 578
        }), e.setShotRecord(0, 64, 0, 60, 1, -1.570796, 1.3), e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 2,
          color: 8,
          count: 10,
          rings: 1,
          speed: 1.6,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.31415927,
          transform: 578
        }), e.setShotRecord(0, 64, 0, 70, 1, -1.570796, 1.2), e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 2,
          color: 8,
          count: 10,
          rings: 1,
          speed: 2,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.31415927,
          transform: 578
        }), yield 60, s = 15;
        break;
      }
      case 12: {
        if (e.difficulty != 2) {
          s = 14;
          break;
        }
        s = 13;
        break;
      }
      case 13: {
        e.setShotRecord(0, 64, 0, 40, 1, -1.570796, 1.5), e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 2,
          color: 8,
          count: 12,
          rings: 1,
          speed: 0.8,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.22439948,
          transform: 578
        }), e.setShotRecord(0, 64, 0, 50, 1, -1.570796, 1.4), e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 2,
          color: 8,
          count: 12,
          rings: 1,
          speed: 1.2,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.22439948,
          transform: 578
        }), e.setShotRecord(0, 64, 0, 60, 1, -1.570796, 1.3), e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 2,
          color: 8,
          count: 12,
          rings: 1,
          speed: 1.6,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.22439948,
          transform: 578
        }), e.setShotRecord(0, 64, 0, 70, 1, -1.570796, 1.2), e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 2,
          color: 8,
          count: 12,
          rings: 1,
          speed: 2,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.22439948,
          transform: 578
        }), yield 60, s = 15;
        break;
      }
      case 14: {
        e.setShotRecord(0, 64, 0, 40, 1, -1.570796, 2.2), e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 2,
          color: 8,
          count: 20,
          rings: 1,
          speed: 0.8,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.19634955,
          transform: 578
        }), e.setShotRecord(0, 64, 0, 50, 1, -1.570796, 2.1), e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 2,
          color: 8,
          count: 20,
          rings: 1,
          speed: 1.2,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.19634955,
          transform: 578
        }), e.setShotRecord(0, 64, 0, 60, 1, -1.570796, 2), e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 2,
          color: 8,
          count: 20,
          rings: 1,
          speed: 1.6,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.19634955,
          transform: 578
        }), e.setShotRecord(0, 64, 0, 70, 1, -1.570796, 1.9), e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 2,
          color: 8,
          count: 20,
          rings: 1,
          speed: 2,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.19634955,
          transform: 578
        }), e.setShotRecord(0, 64, 0, 60, 1, -1.570796, 1.7), e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 2,
          color: 8,
          count: 20,
          rings: 1,
          speed: 1.6,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.19634955,
          transform: 578
        }), e.setShotRecord(0, 64, 0, 70, 1, -1.570796, 1.5), e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 2,
          color: 8,
          count: 20,
          rings: 1,
          speed: 2,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.19634955,
          transform: 578
        }), yield 60, s = 15;
        break;
      }
      case 15: {
        e.moveRelative(50, 4, 288, 120), yield 120, s = 16;
        break;
      }
      case 16: {
        e.nop(), e.setShotRecord(0, 32, 0, 60, -1, -0.016667, -3272e-6), e.isDiff(r | a) && (e.f0 = 0.025), e.isDiff(o | a) && (e.f0 = 0.025), e.isDiff(f | a) && (e.f0 = 0.033333), e.isDiff(n | a) && (e.f0 = 0.041667), e.setShotRecord(1, 16, 0, 60, -1, e.f0, -999.900024), e.isDiff(r | a) && e.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 3,
          color: 8,
          count: 1,
          rings: 5,
          speed: 2,
          speed2: 0.9,
          angle: 1.9634954,
          angleStep: 0.034906585,
          transform: 562
        }), e.isDiff(o | a) && e.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 3,
          color: 8,
          count: 3,
          rings: 5,
          speed: 2,
          speed2: 0.9,
          angle: 1.9634954,
          angleStep: 0.034906585,
          transform: 562
        }), e.isDiff(f | a) && e.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 3,
          color: 8,
          count: 3,
          rings: 6,
          speed: 2,
          speed2: 0.9,
          angle: 1.9634954,
          angleStep: 0.034906585,
          transform: 562
        }), e.isDiff(n | a) && e.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 3,
          color: 8,
          count: 3,
          rings: 6,
          speed: 3,
          speed2: 0.9,
          angle: 1.9634954,
          angleStep: 0.034906585,
          transform: 562
        }), e.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 3,
          color: 7,
          count: 2,
          rings: 6,
          speed: 2,
          speed2: 0.9,
          angle: 1.9634954,
          angleStep: 1.0471976,
          transform: 562
        }), e.setShotRecord(0, 32, 0, 60, -1, -0.016667, 3272e-6), e.isDiff(r | a) && e.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 3,
          color: 8,
          count: 1,
          rings: 5,
          speed: 2,
          speed2: 0.9,
          angle: 1.5707964,
          angleStep: 0.034906585,
          transform: 562
        }), e.isDiff(o | a) && e.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 3,
          color: 8,
          count: 3,
          rings: 5,
          speed: 2,
          speed2: 0.9,
          angle: 1.5707964,
          angleStep: 0.034906585,
          transform: 562
        }), e.isDiff(f | a) && e.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 3,
          color: 8,
          count: 3,
          rings: 6,
          speed: 2,
          speed2: 0.9,
          angle: 1.5707964,
          angleStep: 0.034906585,
          transform: 562
        }), e.isDiff(n | a) && e.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 3,
          color: 8,
          count: 3,
          rings: 6,
          speed: 3,
          speed2: 0.9,
          angle: 1.5707964,
          angleStep: 0.034906585,
          transform: 562
        }), e.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 3,
          color: 7,
          count: 2,
          rings: 6,
          speed: 2,
          speed2: 0.9,
          angle: 1.5707964,
          angleStep: 1.0471976,
          transform: 562
        }), yield 60, s = 17;
        break;
      }
      case 17: {
        e.moveRelative(50, 4, 96, 120), yield 100, s = 18;
        break;
      }
      case 18: {
        e.nop(), e.setShotRecord(0, 32, 0, 60, -1, -0.016667, 3272e-6), e.setShotRecord(1, 16, 0, 60, -1, e.f0, -999.900024), e.isDiff(r | a) && e.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 3,
          color: 6,
          count: 1,
          rings: 5,
          speed: 2,
          speed2: 0.9,
          angle: 1.1780972,
          angleStep: 0.034906585,
          transform: 562
        }), e.isDiff(o | a) && e.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 3,
          color: 6,
          count: 3,
          rings: 5,
          speed: 2,
          speed2: 0.9,
          angle: 1.1780972,
          angleStep: 0.034906585,
          transform: 562
        }), e.isDiff(f | a) && e.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 3,
          color: 6,
          count: 3,
          rings: 6,
          speed: 2,
          speed2: 0.9,
          angle: 1.1780972,
          angleStep: 0.034906585,
          transform: 562
        }), e.isDiff(n | a) && e.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 3,
          color: 6,
          count: 3,
          rings: 6,
          speed: 3,
          speed2: 0.9,
          angle: 1.1780972,
          angleStep: 0.034906585,
          transform: 562
        }), e.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 3,
          color: 5,
          count: 2,
          rings: 6,
          speed: 2,
          speed2: 0.9,
          angle: 1.1780972,
          angleStep: 1.0471976,
          transform: 562
        }), e.setShotRecord(0, 32, 0, 60, -1, -0.016667, -3272e-6), e.isDiff(r | a) && e.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 3,
          color: 6,
          count: 1,
          rings: 5,
          speed: 2,
          speed2: 0.9,
          angle: 1.5707964,
          angleStep: 0.034906585,
          transform: 562
        }), e.isDiff(o | a) && e.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 3,
          color: 6,
          count: 3,
          rings: 5,
          speed: 2,
          speed2: 0.9,
          angle: 1.5707964,
          angleStep: 0.034906585,
          transform: 562
        }), e.isDiff(f | a) && e.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 3,
          color: 6,
          count: 3,
          rings: 6,
          speed: 2,
          speed2: 0.9,
          angle: 1.5707964,
          angleStep: 0.034906585,
          transform: 562
        }), e.isDiff(n | a) && e.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 3,
          color: 6,
          count: 3,
          rings: 6,
          speed: 3,
          speed2: 0.9,
          angle: 1.5707964,
          angleStep: 0.034906585,
          transform: 562
        }), e.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 3,
          color: 5,
          count: 2,
          rings: 6,
          speed: 2,
          speed2: 0.9,
          angle: 1.5707964,
          angleStep: 1.0471976,
          transform: 562
        }), yield 60, s = 19;
        break;
      }
      case 19: {
        e.moveRelative(50, 4, 96, 120), yield 60, s = 20;
        break;
      }
      case 20: {
        e.moveRelative(50, 4, 192, 120), e.f1 = 64, yield 80, s = 21;
        break;
      }
      case 21: {
        e.f0 = 0, e.autoAnm(), e.linkChildAttached(19, 0, 0, 100, 1, 100), e.f0 = 3.141593, e.linkChildAttached(19, 0, 0, 100, 1, 100), e.f0 = 1.570796, e.linkChildAttached(19, 0, 0, 100, 1, 100), e.f0 = -1.570796, e.linkChildAttached(19, 0, 0, 100, 1, 100), e.f1 = 128, yield 80, s = 22;
        break;
      }
      case 22: {
        e.f0 = 0, e.linkChildAttached(20, 0, 0, 100, 1, 100), e.f0 = 3.141593, e.linkChildAttached(20, 0, 0, 100, 1, 100), e.f0 = 1.570796, e.linkChildAttached(20, 0, 0, 100, 1, 100), e.f0 = -1.570796, e.linkChildAttached(20, 0, 0, 100, 1, 100), e.callSubAlloc(0, 17), yield 6e3, s = 23;
        break;
      }
      case 23: {
        s = 1;
        break;
      }
      default:
        return;
    }
}
function* T(e) {
  let s = 0, i = 0;
  for (; s >= 0; )
    switch (++i > 2e3 && (i = 0, yield 1), s) {
      case 0: {
        e.isDiff(r | a) && (e.i0 = 300), e.isDiff(o | a) && (e.i0 = 100), e.isDiff(f | a) && (e.i0 = 60), e.isDiff(n | a) && (e.i0 = 40), s = 1;
        break;
      }
      case 1: {
        e.isDiff(r | a) && e.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 1,
          color: 6,
          count: 16,
          rings: 1,
          speed: 2,
          speed2: 0.9,
          angle: t(10082),
          angleStep: 0.034906585,
          transform: 512
        }), e.isDiff(o | a) && e.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 1,
          color: 6,
          count: 32,
          rings: 1,
          speed: 2,
          speed2: 0.9,
          angle: t(10082),
          angleStep: 0.034906585,
          transform: 512
        }), e.isDiff(f | a) && e.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 1,
          color: 6,
          count: 32,
          rings: 1,
          speed: 2,
          speed2: 0.9,
          angle: t(10082),
          angleStep: 0.034906585,
          transform: 512
        }), e.isDiff(n | a) && e.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 1,
          color: 6,
          count: 32,
          rings: 1,
          speed: 3,
          speed2: 0.9,
          angle: t(10082),
          angleStep: 0.034906585,
          transform: 512
        }), yield e.delay(e.i0), s = 1;
        break;
      }
      default:
        return;
    }
}
function* P(e) {
  let s = 0, i = 0;
  for (; s >= 0; )
    switch (++i > 2e3 && (i = 0, yield 1), s) {
      case 0: {
        e.setAnmScripts6Alt(0), e.clearMotionClamp(), e.endSpell(), e.clearScriptFlags(3), e.setScriptFlags(16), yield 30, s = 1;
        break;
      }
      case 1: {
        e.moveRelative(60, 4, 320, -32), yield 60, s = 2;
        break;
      }
      case 2: {
        e.setBossPresent(-1);
        return;
      }
      default:
        return;
    }
}
function* L(e) {
  let s = 0, i = 0;
  for (; s >= 0; )
    switch (++i > 2e3 && (i = 0, yield 1), s) {
      case 0: {
        e.setAnm(56), e.setBounds(24, 24), e.writeScriptFlags(16), e.setHitFlash(1), e.holdShots(), e.isDiff(r | a) && e.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 2,
          color: 6,
          count: 1,
          rings: 1,
          speed: 1,
          speed2: 0.5,
          angle: t(10069),
          angleStep: 0.18479957,
          transform: 515
        }), e.isDiff(o | a) && e.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 2,
          color: 6,
          count: 2,
          rings: 1,
          speed: 1,
          speed2: 0.5,
          angle: t(10069),
          angleStep: 0.18479957,
          transform: 515
        }), e.isDiff(f | a) && e.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 2,
          color: 6,
          count: 3,
          rings: 1,
          speed: 1,
          speed2: 0.5,
          angle: t(10069),
          angleStep: 0.18479957,
          transform: 515
        }), e.isDiff(n | a) && e.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 2,
          color: 6,
          count: 2,
          rings: 2,
          speed: 2,
          speed2: 1,
          angle: t(10069),
          angleStep: 0.18479957,
          transform: 515
        }), e.releaseShots(), e.f1 /= 100, e.moveArc(100, e.f0, -0.02618, e.f1), yield 100, s = 1;
        break;
      }
      case 1: {
        e.setAccel(6e3, -0.02618, 0), e.isDiff(r | a) && e.setShotRepeatRand(30), e.isDiff(o | f | n | a) && e.setShotRepeatRand(10), yield 5e3, s = 2;
        break;
      }
      case 2:
        return;
      default:
        return;
    }
}
function* Y(e) {
  let s = 0, i = 0;
  for (; s >= 0; )
    switch (++i > 2e3 && (i = 0, yield 1), s) {
      case 0: {
        e.setAnm(56), e.setBounds(24, 24), e.writeScriptFlags(16), e.setHitFlash(1), e.holdShots(), e.isDiff(r | a) && e.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 2,
          color: 2,
          count: 1,
          rings: 1,
          speed: 1,
          speed2: 0.5,
          angle: t(10069),
          angleStep: 0.18479957,
          transform: 515
        }), e.isDiff(o | a) && e.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 2,
          color: 2,
          count: 1,
          rings: 1,
          speed: 1,
          speed2: 0.5,
          angle: t(10069),
          angleStep: 0.18479957,
          transform: 515
        }), e.isDiff(f | a) && e.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 2,
          color: 2,
          count: 2,
          rings: 1,
          speed: 1.4,
          speed2: 0.5,
          angle: t(10069),
          angleStep: 0.18479957,
          transform: 515
        }), e.isDiff(n | a) && e.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 2,
          color: 2,
          count: 2,
          rings: 2,
          speed: 2,
          speed2: 1,
          angle: t(10069),
          angleStep: 0.18479957,
          transform: 515
        }), e.releaseShots(), e.f1 /= 100, e.moveArc(100, e.f0, 0.02618, e.f1), yield 100, s = 1;
        break;
      }
      case 1: {
        e.setAccel(6e3, 0.02618, 0), e.isDiff(r | a) && e.setShotRepeatRand(30), e.isDiff(o | f | n | a) && e.setShotRepeatRand(10), yield 5e3, s = 2;
        break;
      }
      case 2:
        return;
      default:
        return;
    }
}
function* X(e) {
  let s = 0;
  yield 200;
  let i = 0;
  for (; s >= 0; )
    switch (++i > 2e3 && (i = 0, yield 1), s) {
      case 0: {
        e.nop(), s = 1;
        break;
      }
      case 1: {
        e.isDiff(f | a) && e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 7,
          color: 3,
          count: 7,
          rings: 2,
          speed: 2,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.19634955,
          transform: 512
        }), e.isDiff(n | a) && e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 7,
          color: 3,
          count: 9,
          rings: 3,
          speed: 3,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.19634955,
          transform: 512
        }), e.isDiff(f | a) && e.spawnShot({
          mode: "aimedRing",
          // aim 2 of 96..104
          type: 7,
          color: 3,
          count: 32,
          rings: 1,
          speed: 2.5,
          speed2: 1.5,
          angle: 3.1415927,
          angleStep: 0.14279966,
          transform: 512
        }), e.isDiff(n | a) && e.spawnShot({
          mode: "aimedRing",
          // aim 2 of 96..104
          type: 7,
          color: 3,
          count: 32,
          rings: 3,
          speed: 3,
          speed2: 1.5,
          angle: 3.1415927,
          angleStep: 0.14279966,
          transform: 512
        }), yield 100, s = 2;
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
function* O(e) {
  let s = 0, i = 0;
  for (; s >= 0; )
    switch (++i > 2e3 && (i = 0, yield 1), s) {
      case 0: {
        e.setShotRepeat(0), e.enemyFunc95(), e.setShotSound(-1, -1), e.clearScriptFlags(4), e.setShotOrigin(0, 0), e.setSpellTimer(2100, 18), e.resetSpellTimerSub(), e.setSpellTimerElapsed(0), e.ci3 = 0, e.moveRelative(90, 4, 192, 144), e.isDiff(f | a) && e.startSpell("蛍符「地上の流星」", "リグル・ナイトバグ", 0, 0, 1e7), e.isDiff(n | a) && e.startSpell("蛍符「地上の彗星」", "リグル・ナイトバグ", 1, 0, 1e7), yield 90, s = 1;
        break;
      }
      case 1: {
        e.setScriptFlags(4), e.setMisc160(180), e.setMisc129(2), e.setDeathCallbackSub(18), e.f4 = 64, e.callSubAlloc(0, 21), s = 2;
        break;
      }
      case 2: {
        e.isDiff(f | a) && (e.ci0 = 8), e.isDiff(n | a) && (e.ci0 = 11), e.f0 = 0, e.isDiff(f | a) && (e.f1 = 5712e-6), e.isDiff(n | a) && (e.f1 = 8976e-6), e.autoAnm(), s = 3;
        break;
      }
      case 3: {
        if (e.linkChildRelative(24, 0, 0, 40, -2, 100), e.isDiff(f | a) && (e.f0 += 0.785398), e.isDiff(n | a) && (e.f0 += 0.571199), --e.ci0 > 0) {
          s = 3;
          break;
        }
        s = 4;
        break;
      }
      case 4: {
        e.moveBounce(60, 4, 1), yield 100, s = 5;
        break;
      }
      case 5: {
        e.ci0 = 8, e.isDiff(f | a) && (e.ci0 = 8), e.isDiff(n | a) && (e.ci0 = 11), e.f0 = 0, e.isDiff(f | a) && (e.f1 = -5712e-6), e.isDiff(n | a) && (e.f1 = -8976e-6), e.autoAnm(), s = 6;
        break;
      }
      case 6: {
        if (e.linkChildRelative(24, 0, 0, 40, -2, 100), e.isDiff(f | a) && (e.f0 += 0.785398), e.isDiff(n | a) && (e.f0 += 0.571199), --e.ci0 > 0) {
          s = 6;
          break;
        }
        s = 7;
        break;
      }
      case 7: {
        e.moveBounce(60, 4, 1), yield 100, s = 8;
        break;
      }
      case 8: {
        e.ci0 = 8, e.isDiff(f | a) && (e.ci0 = 10), e.isDiff(n | a) && (e.ci0 = 13), e.f0 = e.randAngle, e.f1 = 0, e.autoAnm(), s = 9;
        break;
      }
      case 9: {
        if (e.linkChildRelative(24, 0, 0, 40, -2, 100), e.isDiff(f | a) && (e.f0 += 0.628319), e.isDiff(n | a) && (e.f0 += 0.483322), --e.ci0 > 0) {
          s = 9;
          break;
        }
        s = 10;
        break;
      }
      case 10: {
        e.moveBounce(60, 4, 1), yield 100, s = 11;
        break;
      }
      case 11: {
        s = 2;
        break;
      }
      default:
        return;
    }
}
function* N(e) {
  let s = 0, i = 0;
  for (; s >= 0; )
    switch (++i > 2e3 && (i = 0, yield 1), s) {
      case 0: {
        e.setShotRecord(0, 8192, 1, 400, -1, -1, -1), e.setShotRecord(1, 131072, 1, 120, -1, -1, -1), e.setShotRecord(3, 16384, 1, 3, 6, -1, -1), e.setShotRecord(4, 524288, 0, 27, -1, -1, -1), e.setShotRecord(5, 262144, 0, -1, -1, -1, -1), e.f7 = e.randAngle, s = 1;
        break;
      }
      case 1: {
        e.f7 += 0.523599, e.f7 = c(e.f7), e.f6 = Math.sin(e.f7), e.isDiff(f | a) && (e.f6 *= 32), e.isDiff(n | a) && (e.f6 *= 32), e.f5 = e.moveAngle + 1.570796, e.cf0 = Math.cos(e.f5) * e.f6, e.cf1 = Math.sin(e.f5) * e.f6, e.cf0 += e.posX, e.cf1 += e.posY, e.f6 = Math.atan2(e.posY - e.cf1, e.posX - e.cf0), e.f0 = Math.hypot(e.cf0 - e.posX, e.cf1 - e.posY), e.f0 *= 2, e.f0 /= 3600, e.setShotRecord(2, 16, 0, 60, -1, e.f0, -999), e.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 3,
          color: 7,
          count: 1,
          rings: 1,
          speed: 0,
          speed2: 0.5,
          angle: t(10022),
          angleStep: 0,
          transform: 942612
        }), e.f7 += 0.19635, e.f7 = c(e.f7), yield 6, s = 2;
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
function* j(e) {
  let s = 0, i = 0;
  for (; s >= 0; )
    switch (++i > 2e3 && (i = 0, yield 1), s) {
      case 0: {
        e.setAnm(56), e.setBounds(24, 24), e.setHitFlash(1), e.clearScriptFlags(3), e.setShotNoFireRadius(0), e.isDiff(f | a) && e.setHeadingSpeed(e.f0, 2), e.isDiff(n | a) && e.setHeadingSpeed(e.f0, 2.4), e.setHeadingVel(e.f1), e.callSubAlloc(0, 23), yield 100, s = 1;
        break;
      }
      case 1: {
        e.setScriptFlags(3), yield 100, s = 2;
        break;
      }
      case 2: {
        e.setHeadingVel(0), yield 5e3, s = 3;
        break;
      }
      case 3:
        return;
      default:
        return;
    }
}
function* V(e) {
  let s = 0, i = 0;
  for (; s >= 0; )
    switch (++i > 2e3 && (i = 0, yield 1), s) {
      case 0: {
        e.setAnmScripts6Alt(0), e.clearScriptFlags(20), e.clearScriptFlags(3), e.setBossPresent(0), e.setBounds(48, 32), e.setMisc160(60), e.eclSetLives(0), e.setSpellTimer(18e4, 38), e.setRelPos(-32, -32), e.moveRelative(60, 4, 192, 128), e.setMisc126(26, 1), yield 100, s = 1;
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
function* G(e) {
  let s = 0, i = 0;
  for (; s >= 0; )
    switch (++i > 2e3 && (i = 0, yield 1), s) {
      case 0: {
        e.setScriptFlags(4), e.setScriptFlags(3), e.setMisc160(120), e.endSpell(), e.setMisc144(6, 4), e.setLives(13e3), e.eclSetLives(1), e.setMisc129(2), e.setDeathCallbackSub(33), e.setSpellTimer(1800, 38), e.setPhase(0, 1500, 38), e.setLifeBarSlice(0, 0, e.phase0, 16752800), e.spawnEffect(6, 1050253722, 1060320051, 1050253722, 1124073472), yield 10, s = 1;
        break;
      }
      case 1: {
        e.spawnEffect(6, -1097229926, 1060320051, 1050253722, 1124073472), yield 10, s = 2;
        break;
      }
      case 2: {
        e.spawnEffect(6, 1050253722, 1060320051, -1097229926, 1124073472), yield 10, s = 3;
        break;
      }
      case 3: {
        e.spawnEffect(6, -1097229926, -1087163597, -1097229926, 1119879168), yield 10, s = 4;
        break;
      }
      case 4: {
        e.spawnEffect(6, 1050253722, -1087163597, -1097229926, 1119879168), yield 10, s = 5;
        break;
      }
      case 5: {
        e.spawnEffect(6, -1097229926, -1087163597, 1050253722, 1119879168), yield 10, s = 6;
        break;
      }
      case 6: {
        e.setMotionClamp(32, 48, 352, 128), s = 7;
        break;
      }
      case 7: {
        e.autoAnm(), yield* m(e), s = 8;
        break;
      }
      case 8: {
        e.moveBounce(60, 4, 1.5), e.spawnEffectAt(40, 1, -16711681), e.autoAnm(), yield 60, s = 9;
        break;
      }
      case 9: {
        e.playSfx(15), e.f0 = e.randF32 * 128, e.f0 += 128, e.f1 = e.randF32 * 48, e.f1 += 192, e.fparam0 = 0, e.fparam1 = -0.05236, e.fparam2 = 96, e.fparam3 = e.f1, yield* d(e), s = 10;
        break;
      }
      case 10: {
        e.f0 = e.randF32 * 128, e.f0 += 128, e.f1 = e.randF32 * 48, e.f1 += 192, e.fparam0 = -3.141593, e.fparam1 = 0.05236, e.fparam2 = 160, e.fparam3 = e.f1, yield* d(e), s = 11;
        break;
      }
      case 11: {
        e.f0 = e.randF32 * 128, e.f0 += 128, e.f1 = e.randF32 * 48, e.f1 += 192, e.fparam0 = 2.356194, e.fparam1 = 0.05236, e.fparam2 = 224, e.fparam3 = e.f1, yield* d(e), s = 12;
        break;
      }
      case 12: {
        e.f0 = e.randF32 * 128, e.f0 += 128, e.f1 = e.randF32 * 48, e.f1 += 192, e.fparam0 = 0.785398, e.fparam1 = -0.05236, e.fparam2 = 288, e.fparam3 = e.f1, yield* d(e), s = 13;
        break;
      }
      case 13: {
        yield* p(e), s = 14;
        break;
      }
      case 14: {
        e.moveBounce(40, 4, 1.6), yield 50, s = 15;
        break;
      }
      case 15: {
        yield* p(e), s = 16;
        break;
      }
      case 16: {
        e.moveBounce(40, 4, 1.6), yield 50, s = 17;
        break;
      }
      case 17: {
        yield* p(e), s = 18;
        break;
      }
      case 18: {
        e.moveBounce(40, 4, 1.6), yield 50, s = 19;
        break;
      }
      case 19: {
        s = 7;
        break;
      }
      default:
        return;
    }
}
function* m(e) {
  let s = 0, i = 0;
  for (; s >= 0; )
    switch (++i > 2e3 && (i = 0, yield 1), s) {
      case 0: {
        e.playSfx(5), e.spawnEffectAt(40, 1, -16711681), yield 30, s = 1;
        break;
      }
      case 1: {
        e.f0 = e.randAngle * 0.04, e.f0 += 1.047198, e.f1 = e.f0 + 1.047198, e.isDiff(r | a) && (e.f7 = 0.026667), e.isDiff(o | a) && (e.f7 = 0.026667), e.isDiff(f | a) && (e.f7 = 0.03), e.isDiff(n | a) && (e.f7 = 0.045), e.setShotRecord(1, 16, 0, 60, -1, e.f7, -999), e.setShotRecord(0, 64, 0, 60, 1, -1.832596, 0.3), e.isDiff(r | a) && (e.i0 = 2), e.isDiff(o | a) && (e.i0 = 4), e.isDiff(f | a) && (e.i0 = 5), e.isDiff(n | a) && (e.i0 = 7), yield 10, s = 2;
        break;
      }
      case 2: {
        e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 2,
          color: 8,
          count: t(1e4),
          rings: 1,
          speed: 0.8,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.14279966,
          transform: 594
        }), e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 2,
          color: 8,
          count: t(1e4),
          rings: 1,
          speed: 0.8,
          speed2: 0.5,
          angle: t(10017),
          angleStep: 0.14279966,
          transform: 594
        }), e.setShotRecord(0, 64, 0, 70, 1, -1.832596, 0.2), yield 10, s = 3;
        break;
      }
      case 3: {
        e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 2,
          color: 8,
          count: t(1e4),
          rings: 1,
          speed: 1.2,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.15707964,
          transform: 594
        }), e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 2,
          color: 8,
          count: t(1e4),
          rings: 1,
          speed: 1.2,
          speed2: 0.5,
          angle: t(10017),
          angleStep: 0.15707964,
          transform: 594
        }), e.setShotRecord(0, 64, 0, 80, 1, -1.832596, 0.1), yield 10, s = 4;
        break;
      }
      case 4: {
        e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 2,
          color: 8,
          count: t(1e4),
          rings: 1,
          speed: 1.6,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.17453292,
          transform: 594
        }), e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 2,
          color: 8,
          count: t(1e4),
          rings: 1,
          speed: 1.6,
          speed2: 0.5,
          angle: t(10017),
          angleStep: 0.17453292,
          transform: 594
        }), e.setShotRecord(0, 64, 0, 90, 1, -1.832596, 0), yield 10, s = 5;
        break;
      }
      case 5: {
        e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 2,
          color: 8,
          count: t(1e4),
          rings: 1,
          speed: 2,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.19634955,
          transform: 594
        }), e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 2,
          color: 8,
          count: t(1e4),
          rings: 1,
          speed: 2,
          speed2: 0.5,
          angle: t(10017),
          angleStep: 0.19634955,
          transform: 594
        }), yield 40, s = 6;
        break;
      }
      case 6: {
        e.f0 = e.randAngle * 0.04, e.f0 -= 0.897598, e.f1 = e.f0 - 1.047198, e.setShotRecord(0, 64, 0, 60, 1, 1.832596, 0.3), yield 10, s = 7;
        break;
      }
      case 7: {
        e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 2,
          color: 13,
          count: t(1e4),
          rings: 1,
          speed: 0.8,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.14279966,
          transform: 594
        }), e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 2,
          color: 13,
          count: t(1e4),
          rings: 1,
          speed: 0.8,
          speed2: 0.5,
          angle: t(10017),
          angleStep: 0.14279966,
          transform: 594
        }), e.setShotRecord(0, 64, 0, 70, 1, 1.832596, 0.2), yield 10, s = 8;
        break;
      }
      case 8: {
        e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 2,
          color: 13,
          count: t(1e4),
          rings: 1,
          speed: 1.2,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.15707964,
          transform: 594
        }), e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 2,
          color: 13,
          count: t(1e4),
          rings: 1,
          speed: 1.2,
          speed2: 0.5,
          angle: t(10017),
          angleStep: 0.15707964,
          transform: 594
        }), e.setShotRecord(0, 64, 0, 80, 1, 1.832596, 0.1), yield 10, s = 9;
        break;
      }
      case 9: {
        e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 2,
          color: 13,
          count: t(1e4),
          rings: 1,
          speed: 1.6,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.17453292,
          transform: 594
        }), e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 2,
          color: 13,
          count: t(1e4),
          rings: 1,
          speed: 1.6,
          speed2: 0.5,
          angle: t(10017),
          angleStep: 0.17453292,
          transform: 594
        }), e.setShotRecord(0, 64, 0, 90, 1, 1.832596, 0), yield 10, s = 10;
        break;
      }
      case 10: {
        e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 2,
          color: 13,
          count: t(1e4),
          rings: 1,
          speed: 2,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.19634955,
          transform: 594
        }), e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 2,
          color: 13,
          count: t(1e4),
          rings: 1,
          speed: 2,
          speed2: 0.5,
          angle: t(10017),
          angleStep: 0.19634955,
          transform: 594
        }), yield 30, s = 11;
        break;
      }
      case 11: {
        e.f0 = e.randAngle * 0.04, e.f0 += 0.785398, e.f1 = e.f0 + 1.047198, e.setShotRecord(0, 64, 0, 60, 1, -1.832596, 0.3), yield 10, s = 12;
        break;
      }
      case 12: {
        e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 2,
          color: 8,
          count: t(1e4),
          rings: 1,
          speed: 0.8,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.14279966,
          transform: 594
        }), e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 2,
          color: 8,
          count: t(1e4),
          rings: 1,
          speed: 0.8,
          speed2: 0.5,
          angle: t(10017),
          angleStep: 0.14279966,
          transform: 594
        }), e.setShotRecord(0, 64, 0, 70, 1, -1.832596, 0.2), yield 10, s = 13;
        break;
      }
      case 13: {
        e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 2,
          color: 8,
          count: t(1e4),
          rings: 1,
          speed: 1.2,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.15707964,
          transform: 594
        }), e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 2,
          color: 8,
          count: t(1e4),
          rings: 1,
          speed: 1.2,
          speed2: 0.5,
          angle: t(10017),
          angleStep: 0.15707964,
          transform: 594
        }), e.setShotRecord(0, 64, 0, 80, 1, -1.832596, 0.1), yield 10, s = 14;
        break;
      }
      case 14: {
        e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 2,
          color: 8,
          count: t(1e4),
          rings: 1,
          speed: 1.6,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.17453292,
          transform: 594
        }), e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 2,
          color: 8,
          count: t(1e4),
          rings: 1,
          speed: 1.6,
          speed2: 0.5,
          angle: t(10017),
          angleStep: 0.17453292,
          transform: 594
        }), e.setShotRecord(0, 64, 0, 90, 1, -1.832596, 0), yield 10, s = 15;
        break;
      }
      case 15: {
        e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 2,
          color: 8,
          count: t(1e4),
          rings: 1,
          speed: 2,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.19634955,
          transform: 594
        }), e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 2,
          color: 8,
          count: t(1e4),
          rings: 1,
          speed: 2,
          speed2: 0.5,
          angle: t(10017),
          angleStep: 0.19634955,
          transform: 594
        });
        return;
      }
      default:
        return;
    }
}
function* d(e) {
  let s = 0, i = 0;
  for (; s >= 0; )
    switch (++i > 2e3 && (i = 0, yield 1), s) {
      case 0: {
        e.autoAnm(), e.linkChildStandard(32, e.posX, e.posY, 120, -2, 100);
        return;
      }
      default:
        return;
    }
}
function* p(e) {
  let s = 0, i = 0;
  for (; s >= 0; )
    switch (++i > 2e3 && (i = 0, yield 1), s) {
      case 0: {
        e.f0 = 1, e.ci0 = 10, s = 1;
        break;
      }
      case 1: {
        e.isDiff(r | a) && e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 3,
          color: 13,
          count: 1,
          rings: 1,
          speed: t(10016),
          speed2: 0.5,
          angle: 0,
          angleStep: 0.7853982,
          transform: 514
        }), e.isDiff(o | a) && e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 3,
          color: 13,
          count: 3,
          rings: 1,
          speed: t(10016),
          speed2: 0.5,
          angle: 0,
          angleStep: 0.7853982,
          transform: 514
        }), e.isDiff(f | a) && e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 3,
          color: 13,
          count: 3,
          rings: 1,
          speed: t(10016),
          speed2: 0.5,
          angle: 0,
          angleStep: 0.5235988,
          transform: 514
        }), e.isDiff(n | a) && e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 3,
          color: 13,
          count: 5,
          rings: 1,
          speed: t(10016),
          speed2: 0.5,
          angle: 0,
          angleStep: 0.3926991,
          transform: 514
        }), e.f0 += 0.2, yield 1, s = 2;
        break;
      }
      case 2: {
        if (--e.ci0 > 0) {
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
function* U(e) {
  let s = 0, i = 0;
  for (; s >= 0; )
    switch (++i > 2e3 && (i = 0, yield 1), s) {
      case 0: {
        e.isDiff(r | a) && (e.i0 = 40), e.isDiff(o | a) && (e.i0 = 10), e.isDiff(f | a) && (e.i0 = 7), e.isDiff(n | a) && (e.i0 = 7), e.isDiff(r | a) && (e.f2 = 1.3), e.isDiff(o | a) && (e.f2 = 1.3), e.isDiff(f | a) && (e.f2 = 1.5), e.isDiff(n | a) && (e.f2 = 1.7), s = 1;
        break;
      }
      case 1: {
        e.f0 = e.randAngle, e.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 0,
          color: 10,
          count: 3,
          rings: 1,
          speed: t(10018),
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.2617994,
          transform: 515
        }), e.f0 += 0.024544, e.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 0,
          color: 8,
          count: 3,
          rings: 1,
          speed: t(10018),
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.2617994,
          transform: 515
        }), e.f0 += 0.024544, e.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 0,
          color: 6,
          count: 3,
          rings: 1,
          speed: t(10018),
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.2617994,
          transform: 515
        }), yield e.delay(e.i0), s = 1;
        break;
      }
      case 2:
        return;
      default:
        return;
    }
}
function* W(e) {
  let s = 0, i = 0;
  for (; s >= 0; )
    switch (++i > 2e3 && (i = 0, yield 1), s) {
      case 0: {
        e.f0 = e.moveAngle + 3.141593, e.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 0,
          color: 13,
          count: 5,
          rings: 1,
          speed: 1.5,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.19634955,
          transform: 514
        }), yield 10, s = 1;
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
function* q(e) {
  let s = 0, i = 0;
  for (; s >= 0; )
    switch (++i > 2e3 && (i = 0, yield 1), s) {
      case 0: {
        e.setAnm(56), e.setBounds(24, 24), e.writeScriptFlags(16), e.setHitFlash(1), e.setMisc160(50), e.callSubAlloc(0, 31), e.moveArc(60, e.cxf0, e.cxf1, 1.066667), e.callSubAlloc(0, -1), yield 60, s = 1;
        break;
      }
      case 1: {
        e.f2 = e.velocityX * 100, e.f3 = e.randSignF(400), e.interpSlot(10042, 180, 7, 0, e.posX, e.cxf2, e.f2, e.f3), e.f2 = e.velocityY * 100, e.f3 = e.randSignF(400), e.interpSlot(10043, 180, 7, 0, e.posY, e.cxf3, e.f2, e.f3), yield 120, s = 2;
        break;
      }
      case 2: {
        e.callSubAlloc(0, 30), yield 60, s = 3;
        break;
      }
      case 3:
        return;
      default:
        return;
    }
}
function* J(e) {
  let s = 0, i = 0;
  for (; s >= 0; )
    switch (++i > 2e3 && (i = 0, yield 1), s) {
      case 0: {
        e.setScriptFlags(4), e.endSpell(), e.setMisc144(6, 5), e.setMisc160(150), e.setLives(13e3), e.eclSetLives(0), e.setMisc129(3), e.setDeathCallbackSub(50), e.setSpellTimer(1920, 44), e.setPhase(0, 1800, 44), e.setLifeBarSlice(0, 0, e.phase0, 16752800), yield 10, s = 1;
        break;
      }
      case 1: {
        e.setMotionClamp(32, 48, 352, 128), e.moveBounce(60, 4, 1.4), yield 60, s = 2;
        break;
      }
      case 2: {
        e.nop(), e.autoAnm(), e.f7 = 1.570796, e.f6 = e.f7 / 2.5, e.callSubAlloc(0, 34), s = 3;
        break;
      }
      case 3: {
        e.cxi0 = 180, e.cxf1 = 192, e.cxf0 = e.timer, e.linkChildRelative(36, 0, 0, 200, -1, 100), e.cxf0 += 0.785398, e.linkChildRelative(36, 0, 0, 200, -1, 100), e.cxf0 -= 1.570796, e.linkChildRelative(36, 0, 0, 200, -1, 100), yield 120, s = 4;
        break;
      }
      case 4: {
        e.moveBounce(80, 4, 1), yield 120, s = 5;
        break;
      }
      case 5: {
        e.nop(), e.autoAnm(), e.cxi0 = 150, e.cxf1 = 160, e.cxf0 = e.timer, e.linkChildRelative(36, 0, 0, 200, -1, 100), e.cxf0 += 0.785398, e.linkChildRelative(36, 0, 0, 200, -1, 100), e.cxf0 -= 1.570796, e.linkChildRelative(36, 0, 0, 200, -1, 100), yield 120, s = 6;
        break;
      }
      case 6: {
        e.moveBounce(80, 4, 1), yield 120, s = 7;
        break;
      }
      case 7: {
        e.nop(), e.autoAnm(), e.cxi0 = 120, e.cxf1 = 128, e.cxf0 = e.timer + e.f7, e.ci0 = 6, s = 8;
        break;
      }
      case 8: {
        e.linkChildRelative(36, 0, 0, 160, -1, 100), e.cxf0 -= e.f6, yield 10, s = 9;
        break;
      }
      case 9: {
        if (--e.ci0 > 0) {
          s = 8;
          break;
        }
        s = 10;
        break;
      }
      case 10: {
        e.f7 = -1 * e.f7, e.f6 = -1 * e.f6, yield 200, s = 11;
        break;
      }
      case 11: {
        s = 3;
        break;
      }
      default:
        return;
    }
}
function* K(e) {
  let s = 0;
  yield 260;
  let i = 0;
  for (; s >= 0; )
    switch (++i > 2e3 && (i = 0, yield 1), s) {
      case 0: {
        e.isDiff(r | a) && (e.i0 = 300), e.isDiff(o | a) && (e.i0 = 120), e.isDiff(f | a) && (e.i0 = 120), e.isDiff(n | a) && (e.i0 = 60), s = 1;
        break;
      }
      case 1: {
        e.isDiff(r | a) && e.spawnShot({
          mode: "aimedRing",
          // aim 2 of 96..104
          type: 2,
          color: 10,
          count: 16,
          rings: 1,
          speed: 1.5,
          speed2: 0.5,
          angle: -3.1415927,
          angleStep: 3.1415927,
          transform: 521
        }), e.isDiff(o | a) && e.spawnShot({
          mode: "aimedRing",
          // aim 2 of 96..104
          type: 2,
          color: 10,
          count: 32,
          rings: 1,
          speed: 2,
          speed2: 0.5,
          angle: -3.1415927,
          angleStep: 3.1415927,
          transform: 521
        }), e.isDiff(f | a) && e.spawnShot({
          mode: "aimedRing",
          // aim 2 of 96..104
          type: 2,
          color: 10,
          count: 32,
          rings: 2,
          speed: 2,
          speed2: 0.5,
          angle: -3.1415927,
          angleStep: 3.1415927,
          transform: 521
        }), e.isDiff(n | a) && e.spawnShot({
          mode: "aimedRing",
          // aim 2 of 96..104
          type: 2,
          color: 10,
          count: 32,
          rings: 2,
          speed: 3,
          speed2: 0.5,
          angle: -3.1415927,
          angleStep: 3.1415927,
          transform: 521
        }), yield e.delay(e.i0), s = 1;
        break;
      }
      default:
        return;
    }
}
function* Q(e) {
  let s = 0, i = 0;
  for (; s >= 0; )
    switch (++i > 2e3 && (i = 0, yield 1), s) {
      case 0: {
        e.isDiff(r | a) && (e.ci1 = 4), e.isDiff(o | a) && (e.ci1 = 2), e.isDiff(f | a) && (e.ci1 = 2), e.isDiff(n | a) && (e.ci1 = 2), s = 1;
        break;
      }
      case 1: {
        if (e.i1 = e.parentChainCount, e.i2 = 0, e.i1 != 1) {
          s = 3;
          break;
        }
        s = 2;
        break;
      }
      case 2: {
        e.i2 = 1, s = 9;
        break;
      }
      case 3: {
        if (e.i1 >= 3) {
          s = 7;
          break;
        }
        s = 4;
        break;
      }
      case 4: {
        if (e.i3 = e.i0 % 2, e.i3 != 0) {
          s = 6;
          break;
        }
        s = 5;
        break;
      }
      case 5: {
        e.i2 = 1, s = 6;
        break;
      }
      case 6: {
        s = 9;
        break;
      }
      case 7: {
        if (e.i3 = e.i0 % 3, e.i3 != 0) {
          s = 9;
          break;
        }
        s = 8;
        break;
      }
      case 8: {
        e.i2 = 1, s = 9;
        break;
      }
      case 9: {
        if (e.i2 == 0) {
          s = 11;
          break;
        }
        s = 10;
        break;
      }
      case 10: {
        e.f0 = e.randF32 * 32, e.f0 -= 16, e.f1 = e.randF32 * 32, e.f1 -= 16, e.setShotOrigin(e.f0, e.f1), e.isDiff(r | a) && e.spawnShot({
          mode: "randomAngleSpeed",
          // aim 8 of 96..104
          type: 3,
          color: 13,
          count: 1,
          rings: 1,
          speed: 2,
          speed2: 0.5,
          angle: -3.1415927,
          angleStep: 3.1415927,
          transform: 521
        }), e.isDiff(o | a) && e.spawnShot({
          mode: "randomAngleSpeed",
          // aim 8 of 96..104
          type: 3,
          color: 13,
          count: 1,
          rings: 1,
          speed: 2,
          speed2: 0.5,
          angle: -3.1415927,
          angleStep: 3.1415927,
          transform: 521
        }), e.isDiff(f | a) && e.spawnShot({
          mode: "randomAngleSpeed",
          // aim 8 of 96..104
          type: 3,
          color: 13,
          count: 2,
          rings: 1,
          speed: 3,
          speed2: 0.5,
          angle: -3.1415927,
          angleStep: 3.1415927,
          transform: 521
        }), e.isDiff(n | a) && e.spawnShot({
          mode: "randomAngleSpeed",
          // aim 8 of 96..104
          type: 3,
          color: 13,
          count: 3,
          rings: 1,
          speed: 3.5,
          speed2: 0.5,
          angle: -3.1415927,
          angleStep: 3.1415927,
          transform: 521
        }), s = 11;
        break;
      }
      case 11: {
        e.i0++, yield e.delay(e.ci1), s = 1;
        break;
      }
      case 12:
        return;
      default:
        return;
    }
}
function* Z(e) {
  let s = 0, i = 0;
  for (; s >= 0; )
    switch (++i > 2e3 && (i = 0, yield 1), s) {
      case 0: {
        e.setAnm(56), e.setBounds(24, 24), e.writeScriptFlags(16), e.setHitFlash(1), e.setMisc160(10), e.f0 = Math.cos(e.cxf0) * e.cxf1, e.f1 = Math.sin(e.cxf0) * e.cxf1, e.f0 += e.posX, e.f1 += e.posY, e.f2 = e.randSignF(40), e.f3 = e.randSignF(40), e.interpSlot(10042, e.cxi0, 7, 0, e.posX, e.f0, e.f2, e.f3), e.f2 = e.randSignF(40), e.f3 = e.randSignF(40), e.interpSlot(10043, e.cxi0, 7, 0, e.posY, e.f1, e.f2, e.f3), yield e.delay(e.cxi0), e.i0 = 0, e.callSubAlloc(0, 35), yield 120, s = 1;
        break;
      }
      case 1:
        return;
      default:
        return;
    }
}
function* $(e) {
  let s = 0, i = 0;
  for (; s >= 0; )
    switch (++i > 2e3 && (i = 0, yield 1), s) {
      case 0: {
        if (e.timeOrbReady >= 2) {
          s = 2;
          break;
        }
        s = 1;
        break;
      }
      case 1:
        return;
      case 2: {
        e.setAnmScripts6Alt(0), e.clearScriptFlags(8), e.eclSetLives(0), e.setBossPresent(0), e.setLives(1600), e.setLifeBarSlice(0, 0, e.maxHp, 16752800), e.complexSetup(1), e.setMotionClamp(32, 48, 352, 128), yield 70, s = 3;
        break;
      }
      case 3: {
        e.playSfx(5), e.spawnEffectAt(40, 1, -1), yield 4, s = 4;
        break;
      }
      case 4: {
        e.spawnEffectAt(40, 1, -12080), yield 4, s = 5;
        break;
      }
      case 5: {
        e.spawnEffectAt(40, 1, -32640), yield 4, s = 6;
        break;
      }
      case 6: {
        e.spawnEffectAt(40, 1, -49088), yield 50, s = 7;
        break;
      }
      case 7: {
        e.playSfx(15), e.setMisc173(1), e.setScriptFlags(8), e.setMisc129(3), e.setDeathCallbackSub(51), yield* w(e);
        return;
      }
      default:
        return;
    }
}
function* e0(e) {
  let s = 0, i = 0;
  for (; s >= 0; )
    switch (++i > 2e3 && (i = 0, yield 1), s) {
      case 0: {
        e.setShotRepeat(0), e.enemyFunc95(), e.setShotSound(-1, -1), e.clearScriptFlags(4), e.setShotOrigin(0, 0), e.setSpellTimer(1920, 33), e.resetSpellTimerSub(), e.setSpellTimerElapsed(0), e.ci3 = 0, e.moveRelative(90, 4, 192, 128), e.isDiff(r | a) && e.startSpell("灯符「ファイヤフライフェノメノン」", "リグル・ナイトバグ", 2, 0, 1e7), e.isDiff(o | a) && e.startSpell("灯符「ファイヤフライフェノメノン」", "リグル・ナイトバグ", 3, 0, 1e7), e.isDiff(f | a) && e.startSpell("灯符「ファイヤフライフェノメノン」", "リグル・ナイトバグ", 4, 0, 1e7), e.isDiff(n | a) && e.startSpell("灯符「ファイヤフライフェノメノン」", "リグル・ナイトバグ", 5, 0, 1e7), yield 90, s = 1;
        break;
      }
      case 1: {
        e.setScriptFlags(4), e.setMisc160(180), e.setMisc129(2), e.setDeathCallbackSub(33), e.f4 = 64, s = 2;
        break;
      }
      case 2: {
        e.autoAnm(), e.spawnEffectAt(40, 1, -16711681), yield 60, s = 3;
        break;
      }
      case 3: {
        e.param0 = 120, e.fparam0 = 0, e.fparam1 = 3.141593, e.fparam2 = e.f4, e.param1 = 10, yield* l(e), s = 4;
        break;
      }
      case 4: {
        e.param0 = 120, e.fparam0 = 1.570796, e.fparam1 = 3.141593, e.fparam2 = e.f4, e.param1 = 60, yield* l(e), s = 5;
        break;
      }
      case 5: {
        e.param0 = 120, e.fparam0 = 3.141593, e.fparam1 = 3.141593, e.fparam2 = e.f4, e.param1 = 10, yield* l(e), s = 6;
        break;
      }
      case 6: {
        e.param0 = 120, e.fparam0 = -1.570796, e.fparam1 = 3.141593, e.fparam2 = e.f4, e.param1 = 60, yield* l(e), s = 7;
        break;
      }
      case 7: {
        yield* y(e), s = 8;
        break;
      }
      case 8: {
        e.f4 += 24, e.moveBounce(60, 4, 2), yield 60, s = 9;
        break;
      }
      case 9: {
        e.spawnEffectAt(40, 1, -16711681), e.autoAnm(), yield 60, s = 10;
        break;
      }
      case 10: {
        e.param0 = 120, e.fparam0 = 0, e.fparam1 = -3.141593, e.fparam2 = e.f4, e.param1 = 10, yield* l(e), s = 11;
        break;
      }
      case 11: {
        e.param0 = 120, e.fparam0 = 1.570796, e.fparam1 = -3.141593, e.fparam2 = e.f4, e.param1 = 60, yield* l(e), s = 12;
        break;
      }
      case 12: {
        e.param0 = 120, e.fparam0 = 3.141593, e.fparam1 = -3.141593, e.fparam2 = e.f4, e.param1 = 10, yield* l(e), s = 13;
        break;
      }
      case 13: {
        e.param0 = 120, e.fparam0 = -1.570796, e.fparam1 = -3.141593, e.fparam2 = e.f4, e.param1 = 60, yield* l(e), s = 14;
        break;
      }
      case 14: {
        yield* u(e), s = 15;
        break;
      }
      case 15: {
        e.f4 += 24, e.moveBounce(60, 4, 1.5), yield 60, s = 16;
        break;
      }
      case 16: {
        s = 2;
        break;
      }
      default:
        return;
    }
}
function* l(e) {
  let s = 0, i = 0;
  for (; s >= 0; )
    switch (++i > 2e3 && (i = 0, yield 1), s) {
      case 0: {
        e.cxf1 = e.cxf1 / e.cxi0, e.cxf2 = e.cxf2 / e.cxi0, e.linkChildAttached(43, 0, 0, e.cxi1, -2, 100);
        return;
      }
      default:
        return;
    }
}
function* y(e) {
  let s = 0, i = 0;
  for (; s >= 0; )
    switch (++i > 2e3 && (i = 0, yield 1), s) {
      case 0: {
        e.ci0 = 40, e.f0 = -1.570796, e.f1 = e.f0, e.f2 = 0.098175, e.setShotRecord(0, 8192, 1, 270, -1, -1, -1), s = 1;
        break;
      }
      case 1: {
        e.setShotRecord(1, 64, 1, 90, 2, -1.570796, 1.4), e.isDiff(r | a) && e.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 2,
          color: 8,
          count: 2,
          rings: 1,
          speed: 3.4,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.2617994,
          transform: 8770
        }), e.isDiff(o | a) && e.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 2,
          color: 8,
          count: 2,
          rings: 1,
          speed: 3.4,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.2617994,
          transform: 8770
        }), e.isDiff(f | a) && e.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 2,
          color: 8,
          count: 4,
          rings: 1,
          speed: 3.4,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.2617994,
          transform: 8770
        }), e.isDiff(n | a) && e.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 2,
          color: 8,
          count: 4,
          rings: 2,
          speed: 3.4,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.2617994,
          transform: 8770
        }), e.isDiff(r | a) && e.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 2,
          color: 10,
          count: 2,
          rings: 1,
          speed: 1.2,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.7853982,
          transform: 514
        }), e.isDiff(o | a) && e.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 2,
          color: 10,
          count: 2,
          rings: 1,
          speed: 1.2,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.7853982,
          transform: 514
        }), e.isDiff(f | a) && e.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 2,
          color: 10,
          count: 3,
          rings: 1,
          speed: 2.2,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.7853982,
          transform: 514
        }), e.isDiff(n | a) && e.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 2,
          color: 10,
          count: 3,
          rings: 1,
          speed: 2.2,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.7853982,
          transform: 514
        }), e.setShotRecord(1, 64, 0, 90, 2, 1.570796, -999), e.isDiff(o | a) && e.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 2,
          color: 8,
          count: 1,
          rings: 1,
          speed: 1.4,
          speed2: 0.5,
          angle: t(10017),
          angleStep: 0.2617994,
          transform: 8770
        }), e.isDiff(o | a) && e.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 2,
          color: 10,
          count: 2,
          rings: 1,
          speed: 1.2,
          speed2: 0.5,
          angle: t(10017),
          angleStep: 0.7853982,
          transform: 514
        }), e.isDiff(f | a) && e.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 2,
          color: 8,
          count: 2,
          rings: 1,
          speed: 1.4,
          speed2: 0.5,
          angle: t(10017),
          angleStep: 0.2617994,
          transform: 8770
        }), e.isDiff(f | a) && e.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 2,
          color: 10,
          count: 4,
          rings: 1,
          speed: 1.2,
          speed2: 0.5,
          angle: t(10017),
          angleStep: 0.7853982,
          transform: 514
        }), e.isDiff(n | a) && e.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 2,
          color: 8,
          count: 2,
          rings: 1,
          speed: 1.8,
          speed2: 0.5,
          angle: t(10017),
          angleStep: 0.2617994,
          transform: 8770
        }), e.isDiff(n | a) && e.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 2,
          color: 10,
          count: 4,
          rings: 2,
          speed: 2,
          speed2: 0.5,
          angle: t(10017),
          angleStep: 0.7853982,
          transform: 514
        }), e.f0 += e.f2, e.f1 -= e.f2, e.f1 -= e.f2, e.f2 *= 1.03, yield 9, s = 2;
        break;
      }
      case 2: {
        if (--e.ci0 > 0) {
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
function* u(e) {
  let s = 0, i = 0;
  for (; s >= 0; )
    switch (++i > 2e3 && (i = 0, yield 1), s) {
      case 0: {
        e.ci0 = 40, e.f0 = -1.570796, e.f1 = e.f0, e.f2 = 0.098175, e.setShotRecord(0, 8192, 1, 270, -1, -1, -1), s = 1;
        break;
      }
      case 1: {
        e.setShotRecord(1, 64, 1, 90, 2, -1.570796, 1.4), e.isDiff(r | a) && e.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 2,
          color: 8,
          count: 2,
          rings: 1,
          speed: 3.4,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.2617994,
          transform: 8770
        }), e.isDiff(o | a) && e.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 2,
          color: 8,
          count: 2,
          rings: 1,
          speed: 3.4,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.2617994,
          transform: 8770
        }), e.isDiff(f | a) && e.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 2,
          color: 8,
          count: 4,
          rings: 1,
          speed: 3.4,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.2617994,
          transform: 8770
        }), e.isDiff(n | a) && e.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 2,
          color: 8,
          count: 4,
          rings: 2,
          speed: 3.4,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.2617994,
          transform: 8770
        }), e.isDiff(r | a) && e.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 2,
          color: 10,
          count: 2,
          rings: 1,
          speed: 1.2,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.7853982,
          transform: 514
        }), e.isDiff(o | a) && e.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 2,
          color: 10,
          count: 2,
          rings: 1,
          speed: 1.2,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.7853982,
          transform: 514
        }), e.isDiff(f | a) && e.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 2,
          color: 10,
          count: 3,
          rings: 1,
          speed: 1.2,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.7853982,
          transform: 514
        }), e.isDiff(n | a) && e.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 2,
          color: 10,
          count: 3,
          rings: 1,
          speed: 1.2,
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.7853982,
          transform: 514
        }), e.setShotRecord(1, 64, 1, 90, 2, 1.570796, -999), e.isDiff(o | a) && e.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 2,
          color: 8,
          count: 1,
          rings: 1,
          speed: 1.4,
          speed2: 0.5,
          angle: t(10017),
          angleStep: 0.2617994,
          transform: 8770
        }), e.isDiff(o | a) && e.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 2,
          color: 10,
          count: 2,
          rings: 1,
          speed: 1.2,
          speed2: 0.5,
          angle: t(10017),
          angleStep: 0.7853982,
          transform: 514
        }), e.isDiff(f | a) && e.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 2,
          color: 8,
          count: 2,
          rings: 1,
          speed: 1.4,
          speed2: 0.5,
          angle: t(10017),
          angleStep: 0.2617994,
          transform: 8770
        }), e.isDiff(f | a) && e.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 2,
          color: 10,
          count: 4,
          rings: 1,
          speed: 1.2,
          speed2: 0.5,
          angle: t(10017),
          angleStep: 0.7853982,
          transform: 514
        }), e.isDiff(n | a) && e.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 2,
          color: 8,
          count: 2,
          rings: 1,
          speed: 1.8,
          speed2: 0.5,
          angle: t(10017),
          angleStep: 0.2617994,
          transform: 8770
        }), e.isDiff(n | a) && e.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 2,
          color: 10,
          count: 4,
          rings: 2,
          speed: 2,
          speed2: 0.5,
          angle: t(10017),
          angleStep: 0.7853982,
          transform: 514
        }), e.f0 += e.f2, e.f0 += e.f2, e.f1 -= e.f2, e.f2 *= 1.03, yield 9, s = 2;
        break;
      }
      case 2: {
        if (--e.ci0 > 0) {
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
function* s0(e) {
  let s = 0, i = 0;
  for (; s >= 0; )
    switch (++i > 2e3 && (i = 0, yield 1), s) {
      case 0: {
        e.isDiff(r | a) && (e.i0 = 100), e.isDiff(o | a) && (e.i0 = 80), e.isDiff(f | a) && (e.i0 = 50), e.isDiff(n | a) && (e.i0 = 20), e.isDiff(r | a) && (e.i1 = 1), e.isDiff(o | a) && (e.i1 = 1), e.isDiff(f | a) && (e.i1 = 2), e.isDiff(n | a) && (e.i1 = 2), e.isDiff(r | a) && (e.f0 = 1), e.isDiff(o | a) && (e.f0 = 1.5), e.isDiff(f | a) && (e.f0 = 2), e.isDiff(n | a) && (e.f0 = 2.5), s = 1;
        break;
      }
      case 1: {
        e.isDiff(r | o | f | n | a) && e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 3,
          color: 6,
          count: 1,
          rings: 5,
          speed: 2.5,
          speed2: 1,
          angle: 0,
          angleStep: 0.18479957,
          transform: 520
        }), e.isDiff(r | o | f | n | a) && e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 1,
          color: 5,
          count: 1,
          rings: t(10001),
          speed: t(10016),
          speed2: 1,
          angle: 0,
          angleStep: 0.18479957,
          transform: 520
        }), yield e.delay(e.i0), e.isDiff(r | o | f | n | a) && e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 3,
          color: 6,
          count: 1,
          rings: 5,
          speed: 2.5,
          speed2: 1,
          angle: 0,
          angleStep: 0.18479957,
          transform: 520
        }), yield e.delay(e.i0), s = 1;
        break;
      }
      case 2:
        return;
      default:
        return;
    }
}
function* t0(e) {
  let s = 0, i = 0;
  for (; s >= 0; )
    switch (++i > 2e3 && (i = 0, yield 1), s) {
      case 0: {
        e.setAnm(55), e.setBounds(24, 24), e.writeScriptFlags(16), e.setHitFlash(1), e.effectWithYoukai(1), e.setMisc160(10), e.f1 /= 100, e.moveArc(e.cxi0, e.cxf0, e.cxf1, e.cxf2), yield e.delay(e.cxi0), e.setAccel(0, e.cxf1, 0), e.callSubAlloc(0, 42), yield 960, s = 1;
        break;
      }
      case 1:
        return;
      default:
        return;
    }
}
function* a0(e) {
  let s = 0, i = 0;
  for (; s >= 0; )
    switch (++i > 2e3 && (i = 0, yield 1), s) {
      case 0: {
        e.setShotRepeat(0), e.enemyFunc95(), e.setShotSound(-1, -1), e.clearScriptFlags(4), e.setShotOrigin(0, 0), e.setSpellTimer(2220, 33), e.resetSpellTimerSub(), e.setSpellTimerElapsed(0), e.ci3 = 0, e.moveRelative(90, 4, 192, 128), e.isDiff(r | a) && e.startSpell("蠢符「リトルバグ」", "リグル・ナイトバグ", 6, 0, 1e7), e.isDiff(o | a) && e.startSpell("蠢符「リトルバグストーム」", "リグル・ナイトバグ", 7, 0, 1e7), e.isDiff(f | a) && e.startSpell("蠢符「ナイトバグストーム」", "リグル・ナイトバグ", 8, 0, 1e7), e.isDiff(n | a) && e.startSpell("蠢符「ナイトバグトルネード」", "リグル・ナイトバグ", 9, 0, 1e7), yield 90, s = 1;
        break;
      }
      case 1: {
        e.setScriptFlags(4), e.setMisc160(180), e.isDiff(r | a) && (e.ci3 = 2), e.isDiff(o | a) && (e.ci3 = 5), e.isDiff(f | a) && (e.ci3 = 5), e.isDiff(n | a) && (e.ci3 = 5), e.f4 = 0.049087, e.f7 = 1.570796, e.f6 = e.f7 / 2.5, s = 2;
        break;
      }
      case 2: {
        e.autoAnm(), e.fparam0 = e.f4, yield* S(e), s = 3;
        break;
      }
      case 3: {
        e.moveBounce(60, 4, 1.3), e.cxi0 = 130, e.cxf1 = 128, e.cxf0 = e.timer + e.f7, e.ci0 = 6, e.autoAnm(), s = 4;
        break;
      }
      case 4: {
        e.linkChildRelative(46, 0, 0, 20, -2, 10), e.cxf0 -= e.f6, yield 10, s = 5;
        break;
      }
      case 5: {
        if (--e.ci0 > 0) {
          s = 4;
          break;
        }
        s = 6;
        break;
      }
      case 6: {
        e.f7 = -1 * e.f7, e.f6 = -1 * e.f6, e.f4 = -1 * e.f4, e.ci3++, yield 180, s = 7;
        break;
      }
      case 7: {
        s = 2;
        break;
      }
      default:
        return;
    }
}
function* i0(e) {
  let s = 0, i = 0;
  for (; s >= 0; )
    switch (++i > 2e3 && (i = 0, yield 1), s) {
      case 0: {
        e.ci0 = 6, e.isDiff(r | a) && (e.ci2 = 16), e.isDiff(o | a) && (e.ci2 = 4), e.isDiff(f | a) && (e.ci2 = 3), e.isDiff(n | a) && (e.ci2 = 2), s = 1;
        break;
      }
      case 1: {
        if (e.f0 = e.randF32 * 32, e.f0 -= 16, e.f1 = e.randF32 * 32, e.f1 -= 16, e.setShotOrigin(e.f0, e.f1), e.spawnShot({
          mode: "randomAngleSpeed",
          // aim 8 of 96..104
          type: 3,
          color: 8,
          count: 1,
          rings: 1,
          speed: 2,
          speed2: 0.5,
          angle: -3.1415927,
          angleStep: 3.1415927,
          transform: 520
        }), yield e.delay(e.ci2), --e.ci0 > 0) {
          s = 1;
          break;
        }
        s = 2;
        break;
      }
      case 2:
        return;
      default:
        return;
    }
}
function* f0(e) {
  let s = 0, i = 0;
  for (; s >= 0; )
    switch (++i > 2e3 && (i = 0, yield 1), s) {
      case 0: {
        e.setAnm(55), e.setBounds(24, 24), e.writeScriptFlags(16), e.setHitFlash(1), e.setMisc160(60), e.f0 = Math.cos(e.cxf0) * e.cxf1, e.f1 = Math.sin(e.cxf0) * e.cxf1, e.f0 += e.posX, e.f1 += e.posY, e.f2 = e.randSignF(40), e.f3 = e.randSignF(40), e.interpSlot(10042, e.cxi0, 7, 0, e.posX, e.f0, e.f2, e.f3), e.f2 = e.randSignF(40), e.f3 = e.randSignF(40), e.interpSlot(10043, e.cxi0, 7, 0, e.posY, e.f1, e.f2, e.f3), yield e.delay(e.cxi0), e.callSubAlloc(0, 45), yield 84, s = 1;
        break;
      }
      case 1:
        return;
      default:
        return;
    }
}
function* S(e) {
  let s = 0, i = 0;
  for (; s >= 0; )
    switch (++i > 2e3 && (i = 0, yield 1), s) {
      case 0: {
        if (e.ci0 = 8, e.f0 = -1.570796, e.f2 = e.cxf0, e.f1 = e.cxf0 * 0.1, e.f7 = e.ci3 * 0.2, e.f7 += 1, e.setShotRecord(0, 8192, 1, 400, -1, -1, -1), e.setShotRecord(1, 131072, 1, 60, -1, -1, -1), e.cxf0 >= 0) {
          s = 2;
          break;
        }
        s = 1;
        break;
      }
      case 1: {
        e.setShotRecord(2, 64, 0, 60, 1, -1.570796, -999), s = 3;
        break;
      }
      case 2: {
        e.setShotRecord(2, 64, 0, 60, 1, 1.570796, -999), s = 3;
        break;
      }
      case 3: {
        e.setShotRecord(3, 16384, 0, 3, 0, -1, -1), e.setShotRecord(4, 64, 0, 60, 1, 3.141593, 0), e.setShotRecord(5, 16384, 0, 0, 13, -1, -1), e.setShotRecord(6, 131072, 1, 40, -1, -1, -1), e.setShotRecord(9, 524288, 0, 27, -1, -1, -1), s = 4;
        break;
      }
      case 4: {
        e.setShotRecord(7, 64, 0, 60, 1, 1.570796, 1.1), e.setShotRecord(8, 16384, 0, 2, 13, -1, -1), e.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 0,
          color: 0,
          count: t(10039),
          rings: 1,
          speed: t(10023),
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.2617994,
          transform: 680516
        }), e.setShotRecord(7, 64, 0, 60, 1, 1.570796, 2), e.isDiff(f | a) && e.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 0,
          color: 0,
          count: t(10039),
          rings: 1,
          speed: t(10023),
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.2617994,
          transform: 680516
        }), e.isDiff(n | a) && e.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 0,
          color: 0,
          count: t(10039),
          rings: 2,
          speed: t(10023),
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.2617994,
          transform: 680516
        }), e.f7 -= 6e-3, e.f0 += e.f2, e.setShotRecord(7, 64, 0, 60, 1, 3.141593, 1.2), e.setShotRecord(8, 16384, 0, 2, 11, -1, -1), yield 4, s = 5;
        break;
      }
      case 5: {
        e.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 0,
          color: 0,
          count: t(10039),
          rings: 1,
          speed: t(10023),
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.2617994,
          transform: 680516
        }), e.setShotRecord(7, 64, 0, 60, 1, 3.141593, 2), e.isDiff(f | a) && e.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 0,
          color: 0,
          count: t(10039),
          rings: 1,
          speed: t(10023),
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.2617994,
          transform: 680516
        }), e.isDiff(n | a) && e.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 0,
          color: 0,
          count: t(10039),
          rings: 2,
          speed: t(10023),
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.2617994,
          transform: 680516
        }), e.f7 -= 6e-3, e.f0 += e.f2, e.setShotRecord(7, 64, 0, 60, 1, -1.570796, 1.3), e.setShotRecord(8, 16384, 0, 2, 10, -1, -1), yield 4, s = 6;
        break;
      }
      case 6: {
        e.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 0,
          color: 0,
          count: t(10039),
          rings: 1,
          speed: t(10023),
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.2617994,
          transform: 680516
        }), e.setShotRecord(7, 64, 0, 60, 1, -1.570796, 2), e.isDiff(f | a) && e.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 0,
          color: 0,
          count: t(10039),
          rings: 1,
          speed: t(10023),
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.2617994,
          transform: 680516
        }), e.isDiff(n | a) && e.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 0,
          color: 0,
          count: t(10039),
          rings: 2,
          speed: t(10023),
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.2617994,
          transform: 680516
        }), e.f7 -= 6e-3, e.f0 += e.f2, e.f2 += e.f1, yield 4, s = 7;
        break;
      }
      case 7: {
        if (--e.ci0 > 0) {
          s = 4;
          break;
        }
        s = 8;
        break;
      }
      case 8: {
        e.ci0 = 8, s = 9;
        break;
      }
      case 9: {
        e.setShotRecord(7, 64, 0, 60, 1, 1.570796, 1.1), e.setShotRecord(8, 16384, 0, 2, 13, -1, -1), e.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 0,
          color: 0,
          count: t(10039),
          rings: 1,
          speed: t(10023),
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.2617994,
          transform: 680516
        }), e.setShotRecord(7, 64, 0, 60, 1, 1.570796, 2), e.isDiff(f | a) && e.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 0,
          color: 0,
          count: t(10039),
          rings: 1,
          speed: t(10023),
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.2617994,
          transform: 680516
        }), e.isDiff(n | a) && e.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 0,
          color: 0,
          count: t(10039),
          rings: 2,
          speed: t(10023),
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.2617994,
          transform: 680516
        }), e.f7 -= 6e-3, e.f0 += e.f2, e.setShotRecord(7, 64, 0, 60, 1, 3.141593, 1.2), e.setShotRecord(8, 16384, 0, 2, 11, -1, -1), yield 4, s = 10;
        break;
      }
      case 10: {
        e.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 0,
          color: 0,
          count: t(10039),
          rings: 1,
          speed: t(10023),
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.2617994,
          transform: 680516
        }), e.setShotRecord(7, 64, 0, 60, 1, 3.141593, 2), e.isDiff(f | a) && e.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 0,
          color: 0,
          count: t(10039),
          rings: 1,
          speed: t(10023),
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.2617994,
          transform: 680516
        }), e.isDiff(n | a) && e.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 0,
          color: 0,
          count: t(10039),
          rings: 2,
          speed: t(10023),
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.2617994,
          transform: 680516
        }), e.f7 -= 6e-3, e.f0 += e.f2, e.setShotRecord(7, 64, 0, 60, 1, -1.570796, 1.3), e.setShotRecord(8, 16384, 0, 2, 10, -1, -1), yield 4, s = 11;
        break;
      }
      case 11: {
        e.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 0,
          color: 0,
          count: t(10039),
          rings: 1,
          speed: t(10023),
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.2617994,
          transform: 680516
        }), e.setShotRecord(7, 64, 0, 60, 1, -1.570796, 2), e.isDiff(f | a) && e.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 0,
          color: 0,
          count: t(10039),
          rings: 1,
          speed: t(10023),
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.2617994,
          transform: 680516
        }), e.isDiff(n | a) && e.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 0,
          color: 0,
          count: t(10039),
          rings: 2,
          speed: t(10023),
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.2617994,
          transform: 680516
        }), e.f7 -= 6e-3, e.f0 += e.f2, e.f2 -= e.f1, yield 4, s = 12;
        break;
      }
      case 12: {
        if (--e.ci0 > 0) {
          s = 9;
          break;
        }
        s = 13;
        break;
      }
      case 13:
        return;
      default:
        return;
    }
}
function* w(e) {
  let s = 0, i = 0;
  for (; s >= 0; )
    switch (++i > 2e3 && (i = 0, yield 1), s) {
      case 0: {
        e.setShotRepeat(0), e.enemyFunc95(), e.setShotSound(-1, -1), e.clearScriptFlags(4), e.setShotOrigin(0, 0), e.setSpellTimer(2400, 51), e.resetSpellTimerSub(), e.setSpellTimerElapsed(0), e.ci3 = 0, e.moveRelative(90, 4, 192, 128), e.isDiff(o | a) && e.startSpell("隠蟲「永夜蟄居」", "リグル・ナイトバグ", 10, 0, 1e7), e.isDiff(f | a) && e.startSpell("隠蟲「永夜蟄居」", "リグル・ナイトバグ", 11, 0, 1e7), e.isDiff(n | a) && e.startSpell("隠蟲「永夜蟄居」", "リグル・ナイトバグ", 12, 0, 1e7), yield 90, s = 1;
        break;
      }
      case 1: {
        e.setScriptFlags(4), e.setMisc160(120), e.ci3 = 6, e.f4 = 0.03927, e.f7 = 1.570796, e.f6 = e.f7 / 2.5, s = 2;
        break;
      }
      case 2: {
        e.autoAnm(), e.fparam0 = e.f4, yield* h(e), s = 3;
        break;
      }
      case 3: {
        e.moveBounce(60, 4, 1.3), e.cxi0 = 130, e.cxf1 = 128, e.cxf0 = e.timer + e.f7, e.ci0 = 6, e.autoAnm(), e.f7 = -1 * e.f7, e.f6 = -1 * e.f6, e.f4 = -1 * e.f4, e.ci3++, yield 60, s = 4;
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
function* h(e) {
  let s = 0, i = 0;
  for (; s >= 0; )
    switch (++i > 2e3 && (i = 0, yield 1), s) {
      case 0: {
        if (e.ci0 = 8, e.f0 = -1.570796, e.f2 = e.cxf0, e.f1 = e.cxf0 * 0.1, e.f7 = e.ci3 * 0.2, e.f7 += 1, e.setShotRecord(0, 8192, 1, 400, -1, -1, -1), e.setShotRecord(1, 131072, 1, 60, -1, -1, -1), e.cxf0 >= 0) {
          s = 2;
          break;
        }
        s = 1;
        break;
      }
      case 1: {
        e.setShotRecord(2, 64, 0, 30, 1, -1.570796, -999), s = 3;
        break;
      }
      case 2: {
        e.setShotRecord(2, 64, 0, 30, 1, 1.570796, -999), s = 3;
        break;
      }
      case 3: {
        e.setShotRecord(3, 16384, 0, 3, 0, -1, -1), e.setShotRecord(4, 64, 0, 60, 1, 3.141593, 0), e.setShotRecord(5, 16384, 0, 0, 13, -1, -1), e.setShotRecord(6, 131072, 1, 10, -1, -1, -1), e.setShotRecord(9, 524288, 0, 27, -1, -1, -1), s = 4;
        break;
      }
      case 4: {
        e.setShotRecord(7, 64, 0, 10, 1, 2.094395, 1.8), e.setShotRecord(8, 16384, 0, 2, 13, -1, -1), e.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 0,
          color: 0,
          count: t(10039),
          rings: 1,
          speed: t(10023),
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.2617994,
          transform: 680516
        }), e.setShotRecord(7, 64, 0, 10, 1, 2.094395, 2.4), e.isDiff(f | a) && e.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 0,
          color: 0,
          count: t(10039),
          rings: 1,
          speed: t(10023),
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.2617994,
          transform: 680516
        }), e.isDiff(n | a) && e.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 0,
          color: 0,
          count: t(10039),
          rings: 2,
          speed: t(10023),
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.2617994,
          transform: 680516
        }), e.f7 -= 6e-3, e.f0 += e.f2, e.setShotRecord(7, 64, 0, 10, 1, 3.141593, 1.9), e.setShotRecord(8, 16384, 0, 2, 11, -1, -1), yield 3, s = 5;
        break;
      }
      case 5: {
        e.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 0,
          color: 0,
          count: t(10039),
          rings: 1,
          speed: t(10023),
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.2617994,
          transform: 680516
        }), e.setShotRecord(7, 64, 0, 10, 1, 3.141593, 2.4), e.isDiff(f | a) && e.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 0,
          color: 0,
          count: t(10039),
          rings: 1,
          speed: t(10023),
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.2617994,
          transform: 680516
        }), e.isDiff(n | a) && e.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 0,
          color: 0,
          count: t(10039),
          rings: 2,
          speed: t(10023),
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.2617994,
          transform: 680516
        }), e.f7 -= 6e-3, e.f0 += e.f2, e.setShotRecord(7, 64, 0, 10, 1, -2.094395, 2), e.setShotRecord(8, 16384, 0, 2, 10, -1, -1), yield 2, s = 6;
        break;
      }
      case 6: {
        e.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 0,
          color: 0,
          count: t(10039),
          rings: 1,
          speed: t(10023),
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.2617994,
          transform: 680516
        }), e.setShotRecord(7, 64, 0, 10, 1, -2.094395, 2.6), e.isDiff(f | a) && e.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 0,
          color: 0,
          count: t(10039),
          rings: 1,
          speed: t(10023),
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.2617994,
          transform: 680516
        }), e.isDiff(n | a) && e.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 0,
          color: 0,
          count: t(10039),
          rings: 2,
          speed: t(10023),
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.2617994,
          transform: 680516
        }), e.f7 -= 6e-3, e.f0 += e.f2, e.f2 += e.f1, yield 2, s = 7;
        break;
      }
      case 7: {
        if (--e.ci0 > 0) {
          s = 4;
          break;
        }
        s = 8;
        break;
      }
      case 8: {
        e.ci0 = 8, s = 9;
        break;
      }
      case 9: {
        e.setShotRecord(7, 64, 0, 10, 1, 2.094395, 1.8), e.setShotRecord(8, 16384, 0, 2, 13, -1, -1), e.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 0,
          color: 0,
          count: t(10039),
          rings: 1,
          speed: t(10023),
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.2617994,
          transform: 680516
        }), e.setShotRecord(7, 64, 0, 10, 1, 2.094395, 2.4), e.isDiff(f | a) && e.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 0,
          color: 0,
          count: t(10039),
          rings: 1,
          speed: t(10023),
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.2617994,
          transform: 680516
        }), e.isDiff(n | a) && e.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 0,
          color: 0,
          count: t(10039),
          rings: 2,
          speed: t(10023),
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.2617994,
          transform: 680516
        }), e.f7 -= 6e-3, e.f0 += e.f2, e.setShotRecord(7, 64, 0, 10, 1, 3.141593, 1.9), e.setShotRecord(8, 16384, 0, 2, 11, -1, -1), yield 2, s = 10;
        break;
      }
      case 10: {
        e.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 0,
          color: 0,
          count: t(10039),
          rings: 1,
          speed: t(10023),
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.2617994,
          transform: 680516
        }), e.setShotRecord(7, 64, 0, 10, 1, 3.141593, 2.4), e.isDiff(f | a) && e.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 0,
          color: 0,
          count: t(10039),
          rings: 1,
          speed: t(10023),
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.2617994,
          transform: 680516
        }), e.isDiff(n | a) && e.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 0,
          color: 0,
          count: t(10039),
          rings: 2,
          speed: t(10023),
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.2617994,
          transform: 680516
        }), e.f7 -= 6e-3, e.f0 += e.f2, e.setShotRecord(7, 64, 0, 10, 1, -2.094395, 2), e.setShotRecord(8, 16384, 0, 2, 10, -1, -1), yield 3, s = 11;
        break;
      }
      case 11: {
        e.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 0,
          color: 0,
          count: t(10039),
          rings: 1,
          speed: t(10023),
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.2617994,
          transform: 680516
        }), e.setShotRecord(7, 64, 0, 10, 1, -2.094395, 2.6), e.isDiff(f | a) && e.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 0,
          color: 0,
          count: t(10039),
          rings: 1,
          speed: t(10023),
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.2617994,
          transform: 680516
        }), e.isDiff(n | a) && e.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 0,
          color: 0,
          count: t(10039),
          rings: 2,
          speed: t(10023),
          speed2: 0.5,
          angle: t(10016),
          angleStep: 0.2617994,
          transform: 680516
        }), e.f7 -= 6e-3, e.f0 += e.f2, e.f2 -= e.f1, yield 2, s = 12;
        break;
      }
      case 12: {
        if (--e.ci0 > 0) {
          s = 9;
          break;
        }
        s = 13;
        break;
      }
      case 13:
        return;
      default:
        return;
    }
}
function* n0(e) {
  let s = 0, i = 0;
  for (; s >= 0; )
    switch (++i > 2e3 && (i = 0, yield 1), s) {
      case 0: {
        e.complexBossInit(1), e.maxHp = 1, e.setMisc129(0), e.setDeathCallbackSub(-1), e.clearScriptFlags(3), e.f0 = e.randAngle, e.movePolar(60, 4, e.f0, 0.15), e.f0 = 0, e.ci0 = 6, yield 1, s = 1;
        break;
      }
      case 1: {
        e.f0 += 0.19635, e.f0 = c(e.f0), e.spawnEffectAngle(26, 1, -1, e.f0, 0, 0), yield 1, s = 2;
        break;
      }
      case 2: {
        e.f0 += 0.19635, e.f0 = c(e.f0), e.spawnEffectAngle(26, 1, -1, e.f0, 0, 0), yield 1, s = 3;
        break;
      }
      case 3: {
        e.f0 += 0.19635, e.f0 = c(e.f0), e.spawnEffectAngle(26, 1, -32640, e.f0, 0, 0), yield 1, s = 4;
        break;
      }
      case 4: {
        e.f0 += 0.19635, e.f0 = c(e.f0), e.spawnEffectAngle(26, 1, -32640, e.f0, 0, 0), yield 1, s = 5;
        break;
      }
      case 5: {
        e.f0 += 0.19635, e.f0 = c(e.f0), e.spawnEffectAngle(26, 1, -8323200, e.f0, 0, 0), yield 1, s = 6;
        break;
      }
      case 6: {
        e.f0 += 0.19635, e.f0 = c(e.f0), e.spawnEffectAngle(26, 1, -8323200, e.f0, 0, 0), yield 1, s = 7;
        break;
      }
      case 7: {
        e.f0 += 0.19635, e.f0 = c(e.f0), e.spawnEffectAngle(26, 1, -8355585, e.f0, 0, 0), yield 1, s = 8;
        break;
      }
      case 8: {
        e.f0 += 0.19635, e.f0 = c(e.f0), e.spawnEffectAngle(26, 1, -8355585, e.f0, 0, 0), yield 1, s = 9;
        break;
      }
      case 9: {
        e.f0 += 0.19635, e.f0 = c(e.f0), e.spawnEffectAngle(26, 1, -128, e.f0, 0, 0), yield 1, s = 10;
        break;
      }
      case 10: {
        if (e.f0 += 0.19635, e.f0 = c(e.f0), e.spawnEffectAngle(26, 1, -128, e.f0, 0, 0), e.playSfx(7), --e.ci0 > 0) {
          s = 1;
          break;
        }
        s = 11;
        break;
      }
      case 11: {
        e.playSfx(18), e.spawnEffectAngle(26, 64, -8355585, -999, 0, 0), e.endSpell(), e.setBossPresent(-1), e.maxHp = 0, yield 3e3, s = 12;
        break;
      }
      case 12:
        return;
      default:
        return;
    }
}
function* o0(e) {
  let s = 0, i = 0;
  for (; s >= 0; )
    switch (++i > 2e3 && (i = 0, yield 1), s) {
      case 0: {
        if (e.complexBossInit(1), e.setMisc129(0), e.setDeathCallbackSub(-1), e.clearScriptFlags(3), e.f0 = e.randAngle, e.movePolar(60, 4, e.f0, 0.15), e.setMisc173(0), e.spellCardState == 0) {
          s = 4;
          break;
        }
        s = 1;
        break;
      }
      case 1: {
        e.f0 = 0, e.ci0 = 6, e.playSfx(7), s = 2;
        break;
      }
      case 2: {
        if (e.f0 += 0.19635, e.f0 = c(e.f0), e.spawnEffectAngle(26, 1, -1, e.f0, 0, 0), e.f0 += 0.19635, e.f0 = c(e.f0), e.spawnEffectAngle(26, 1, -1, e.f0, 0, 0), e.f0 += 0.19635, e.f0 = c(e.f0), e.spawnEffectAngle(26, 1, -32640, e.f0, 0, 0), e.f0 += 0.19635, e.f0 = c(e.f0), e.spawnEffectAngle(26, 1, -32640, e.f0, 0, 0), e.f0 += 0.19635, e.f0 = c(e.f0), e.spawnEffectAngle(26, 1, -8323200, e.f0, 0, 0), e.f0 += 0.19635, e.f0 = c(e.f0), e.spawnEffectAngle(26, 1, -8323200, e.f0, 0, 0), e.f0 += 0.19635, e.f0 = c(e.f0), e.spawnEffectAngle(26, 1, -8355585, e.f0, 0, 0), e.f0 += 0.19635, e.f0 = c(e.f0), e.spawnEffectAngle(26, 1, -8355585, e.f0, 0, 0), e.f0 += 0.19635, e.f0 = c(e.f0), e.spawnEffectAngle(26, 1, -128, e.f0, 0, 0), e.f0 += 0.19635, e.f0 = c(e.f0), e.spawnEffectAngle(26, 1, -128, e.f0, 0, 0), --e.ci0 > 0) {
          s = 2;
          break;
        }
        s = 3;
        break;
      }
      case 3: {
        e.playSfx(18), e.spawnEffectAngle(26, 64, -8355585, -999, 0, 0), s = 4;
        break;
      }
      case 4: {
        e.endSpell(), e.setBossPresent(-1), e.maxHp = 1, yield 2, s = 5;
        break;
      }
      case 5: {
        e.maxHp = 0, yield 3e3, s = 6;
        break;
      }
      case 6:
        return;
      default:
        return;
    }
}
function* r0(e) {
  let s = 0, i = 0;
  for (; s >= 0; )
    switch (++i > 2e3 && (i = 0, yield 1), s) {
      case 0: {
        if (e.complexBossInit(1), e.setMisc129(0), e.setDeathCallbackSub(-1), e.clearScriptFlags(3), e.f0 = e.randAngle, e.movePolar(60, 4, e.f0, 0.15), e.setMisc173(0), e.ci3 = 0, e.spellCardState == 0) {
          s = 4;
          break;
        }
        s = 1;
        break;
      }
      case 1: {
        e.f0 = 0, e.ci0 = 6, e.playSfx(7), s = 2;
        break;
      }
      case 2: {
        if (e.f0 += 0.19635, e.f0 = c(e.f0), e.spawnEffectAngle(26, 1, -1, e.f0, 0, 0), e.f0 += 0.19635, e.f0 = c(e.f0), e.spawnEffectAngle(26, 1, -1, e.f0, 0, 0), e.f0 += 0.19635, e.f0 = c(e.f0), e.spawnEffectAngle(26, 1, -32640, e.f0, 0, 0), e.f0 += 0.19635, e.f0 = c(e.f0), e.spawnEffectAngle(26, 1, -32640, e.f0, 0, 0), e.f0 += 0.19635, e.f0 = c(e.f0), e.spawnEffectAngle(26, 1, -8323200, e.f0, 0, 0), e.f0 += 0.19635, e.f0 = c(e.f0), e.spawnEffectAngle(26, 1, -8323200, e.f0, 0, 0), e.f0 += 0.19635, e.f0 = c(e.f0), e.spawnEffectAngle(26, 1, -8355585, e.f0, 0, 0), e.f0 += 0.19635, e.f0 = c(e.f0), e.spawnEffectAngle(26, 1, -8355585, e.f0, 0, 0), e.f0 += 0.19635, e.f0 = c(e.f0), e.spawnEffectAngle(26, 1, -128, e.f0, 0, 0), e.f0 += 0.19635, e.f0 = c(e.f0), e.spawnEffectAngle(26, 1, -128, e.f0, 0, 0), --e.ci0 > 0) {
          s = 2;
          break;
        }
        s = 3;
        break;
      }
      case 3: {
        e.playSfx(18), e.spawnEffectAngle(26, 64, -8355585, -999, 0, 0), e.ci3 = 1, s = 4;
        break;
      }
      case 4: {
        if (e.endSpell(), e.ci3 == 0) {
          s = 6;
          break;
        }
        s = 5;
        break;
      }
      case 5: {
        yield e.delay(120), s = 6;
        break;
      }
      case 6: {
        e.setBossPresent(-1), e.maxHp = 1, yield 2, s = 7;
        break;
      }
      case 7: {
        e.maxHp = 0, yield 3e3, s = 8;
        break;
      }
      case 8:
        return;
      default:
        return;
    }
}
const c0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  sub_0: k,
  sub_1: b,
  sub_10: x,
  sub_11: E,
  sub_12: _,
  sub_13: C,
  sub_14: B,
  sub_15: H,
  sub_16: g,
  sub_17: T,
  sub_18: P,
  sub_19: L,
  sub_2: A,
  sub_20: Y,
  sub_21: X,
  sub_22: O,
  sub_23: N,
  sub_24: j,
  sub_25: V,
  sub_26: G,
  sub_27: m,
  sub_28: d,
  sub_29: p,
  sub_3: D,
  sub_30: U,
  sub_31: W,
  sub_32: q,
  sub_33: J,
  sub_34: K,
  sub_35: Q,
  sub_36: Z,
  sub_37: $,
  sub_38: e0,
  sub_39: l,
  sub_4: R,
  sub_40: y,
  sub_41: u,
  sub_42: s0,
  sub_43: t0,
  sub_44: a0,
  sub_45: i0,
  sub_46: f0,
  sub_47: S,
  sub_48: w,
  sub_49: h,
  sub_5: M,
  sub_50: n0,
  sub_51: o0,
  sub_52: r0,
  sub_6: F,
  sub_7: I,
  sub_8: z,
  sub_9: v
}, Symbol.toStringTag, { value: "Module" })), l0 = [
  {
    index: 0,
    offset: 39960,
    instructions: [
      {
        offset: 0,
        time: 1,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([14, 1106247680, -1048576e3, 20, -2, 1e3])
      },
      {
        offset: 0,
        time: 400,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1106247680, -1048576e3, 20, 0, 1e3])
      },
      {
        offset: 0,
        time: 420,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1114636288, -1048576e3, 20, 0, 1e3])
      },
      {
        offset: 0,
        time: 440,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1119092736, -1048576e3, 20, 0, 1e3])
      },
      {
        offset: 0,
        time: 460,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1109393408, -1048576e3, 20, 0, 1e3])
      },
      {
        offset: 0,
        time: 480,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1116471296, -1048576e3, 20, 1, 1e3])
      },
      {
        offset: 0,
        time: 500,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1120403456, -1048576e3, 20, 1, 1e3])
      },
      {
        offset: 0,
        time: 500,
        opcode: 1,
        size: 32,
        difficultyMask: 248,
        args: new Int32Array([1, 1134559232, -1040187392, 150, -2, 1500])
      },
      {
        offset: 0,
        time: 600,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1106247680, -1048576e3, 20, 0, 1e3])
      },
      {
        offset: 0,
        time: 620,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1114636288, -1048576e3, 20, 0, 1e3])
      },
      {
        offset: 0,
        time: 640,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1119092736, -1048576e3, 20, 0, 1e3])
      },
      {
        offset: 0,
        time: 660,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1109393408, -1048576e3, 20, 0, 1e3])
      },
      {
        offset: 0,
        time: 680,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1116471296, -1048576e3, 20, 1, 1e3])
      },
      {
        offset: 0,
        time: 700,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1120403456, -1048576e3, 20, 1, 1e3])
      },
      {
        offset: 0,
        time: 800,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1135673344, -1048576e3, 20, 0, 1e3])
      },
      {
        offset: 0,
        time: 810,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1134690304, -1048576e3, 20, 0, 1e3])
      },
      {
        offset: 0,
        time: 820,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1133707264, -1048576e3, 20, 0, 1e3])
      },
      {
        offset: 0,
        time: 830,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1135345664, -1048576e3, 20, 0, 1e3])
      },
      {
        offset: 0,
        time: 840,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1134362624, -1048576e3, 20, 0, 1e3])
      },
      {
        offset: 0,
        time: 850,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1133379584, -1048576e3, 20, 0, 1e3])
      },
      {
        offset: 0,
        time: 850,
        opcode: 0,
        size: 32,
        difficultyMask: 248,
        args: new Int32Array([3, 1128267776, -1040187392, 150, -2, 1500])
      },
      {
        offset: 0,
        time: 860,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1135673344, -1048576e3, 20, 0, 1e3])
      },
      {
        offset: 0,
        time: 870,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1134690304, -1048576e3, 20, 0, 1e3])
      },
      {
        offset: 0,
        time: 880,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1133707264, -1048576e3, 20, 1, 1e3])
      },
      {
        offset: 0,
        time: 890,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1135345664, -1048576e3, 20, 1, 1e3])
      },
      {
        offset: 0,
        time: 900,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1134362624, -1048576e3, 20, 1, 1e3])
      },
      {
        offset: 0,
        time: 910,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1133379584, -1048576e3, 20, 1, 1e3])
      },
      {
        offset: 0,
        time: 1010,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1123024896, -1040187392, 150, 2, 1500])
      },
      {
        offset: 0,
        time: 1170,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1132724224, -1040187392, 200, 2, 1500])
      },
      {
        offset: 0,
        time: 1370,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1120403456, -1040187392, 20, 0, 500])
      },
      {
        offset: 0,
        time: 1380,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1121714176, -1040187392, 20, 0, 500])
      },
      {
        offset: 0,
        time: 1390,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1123024896, -1040187392, 20, 0, 500])
      },
      {
        offset: 0,
        time: 1400,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1106247680, -1040187392, 20, 0, 500])
      },
      {
        offset: 0,
        time: 1410,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1109393408, -1040187392, 20, 1, 500])
      },
      {
        offset: 0,
        time: 1420,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1112014848, -1040187392, 20, 1, 500])
      },
      {
        offset: 0,
        time: 1430,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1133379584, -1040187392, 20, 0, 500])
      },
      {
        offset: 0,
        time: 1440,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1133051904, -1040187392, 20, 0, 500])
      },
      {
        offset: 0,
        time: 1450,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1132724224, -1040187392, 20, 0, 500])
      },
      {
        offset: 0,
        time: 1460,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1135673344, -1040187392, 20, 0, 500])
      },
      {
        offset: 0,
        time: 1470,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1135345664, -1040187392, 20, 1, 500])
      },
      {
        offset: 0,
        time: 1480,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1135017984, -1040187392, 20, 1, 500])
      },
      {
        offset: 0,
        time: 1540,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1117782016, -1048576e3, 300, 1, 500])
      },
      {
        offset: 0,
        time: 1540,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([11, 1134034944, -1048576e3, 400, 1, 500])
      },
      {
        offset: 0,
        time: 1940,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([5, 1117782016, -1048576e3, 300, 1, 500])
      },
      {
        offset: 0,
        time: 1940,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1134034944, -1048576e3, 400, 1, 500])
      },
      {
        offset: 0,
        time: 2140,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1120403456, -1040187392, 20, 0, 500])
      },
      {
        offset: 0,
        time: 2150,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1121714176, -1040187392, 20, 0, 500])
      },
      {
        offset: 0,
        time: 2160,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1123024896, -1040187392, 20, 0, 500])
      },
      {
        offset: 0,
        time: 2170,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1106247680, -1040187392, 20, 0, 500])
      },
      {
        offset: 0,
        time: 2180,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1109393408, -1040187392, 20, 1, 500])
      },
      {
        offset: 0,
        time: 2190,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1112014848, -1040187392, 20, 1, 500])
      },
      {
        offset: 0,
        time: 2200,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1120403456, -1040187392, 20, 0, 500])
      },
      {
        offset: 0,
        time: 2210,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1121714176, -1040187392, 20, 0, 500])
      },
      {
        offset: 0,
        time: 2220,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1123024896, -1040187392, 20, 0, 500])
      },
      {
        offset: 0,
        time: 2230,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1106247680, -1040187392, 20, 0, 500])
      },
      {
        offset: 0,
        time: 2240,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1109393408, -1040187392, 20, 1, 500])
      },
      {
        offset: 0,
        time: 2250,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1112014848, -1040187392, 20, 1, 500])
      },
      {
        offset: 0,
        time: 2370,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1133379584, -1040187392, 20, 0, 500])
      },
      {
        offset: 0,
        time: 2380,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1133051904, -1040187392, 20, 0, 500])
      },
      {
        offset: 0,
        time: 2390,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1132724224, -1040187392, 20, 0, 500])
      },
      {
        offset: 0,
        time: 2400,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1135673344, -1040187392, 20, 0, 500])
      },
      {
        offset: 0,
        time: 2410,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1135345664, -1040187392, 20, 1, 500])
      },
      {
        offset: 0,
        time: 2420,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1135017984, -1040187392, 20, 1, 500])
      },
      {
        offset: 0,
        time: 2440,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1120403456, -1040187392, 20, 0, 500])
      },
      {
        offset: 0,
        time: 2460,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1121714176, -1040187392, 20, 0, 500])
      },
      {
        offset: 0,
        time: 2480,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1123024896, -1040187392, 20, 0, 500])
      },
      {
        offset: 0,
        time: 2500,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1106247680, -1040187392, 20, 0, 500])
      },
      {
        offset: 0,
        time: 2520,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1109393408, -1040187392, 20, 1, 500])
      },
      {
        offset: 0,
        time: 2540,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1112014848, -1040187392, 20, 1, 500])
      },
      {
        offset: 0,
        time: 2550,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([13, -1048576e3, 1119879168, 20, 0, 500])
      },
      {
        offset: 0,
        time: 2555,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([13, -1048576e3, 1107296256, 20, 0, 500])
      },
      {
        offset: 0,
        time: 2560,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([13, -1048576e3, 1115684864, 20, -2, 500])
      },
      {
        offset: 0,
        time: 2565,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([13, -1048576e3, 1124073472, 20, 0, 500])
      },
      {
        offset: 0,
        time: 2570,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([13, 1137180672, 1115684864, 20, 0, 500])
      },
      {
        offset: 0,
        time: 2575,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([13, -1048576e3, 1117782016, 20, -2, 500])
      },
      {
        offset: 0,
        time: 2580,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([13, 1137180672, 1107296256, 20, 0, 500])
      },
      {
        offset: 0,
        time: 2585,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([13, -1048576e3, 1124073472, 20, 0, 500])
      },
      {
        offset: 0,
        time: 2590,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([13, 1137180672, 1115684864, 20, 0, 500])
      },
      {
        offset: 0,
        time: 2595,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([13, 1137180672, 1117782016, 20, -2, 500])
      },
      {
        offset: 0,
        time: 2600,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([13, 1137180672, 1107296256, 20, 0, 500])
      },
      {
        offset: 0,
        time: 2605,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([13, 1137180672, 1124073472, 20, -2, 500])
      },
      {
        offset: 0,
        time: 2610,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([13, -1048576e3, 1115684864, 20, 0, 500])
      },
      {
        offset: 0,
        time: 2615,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([13, 1137180672, 1117782016, 20, -2, 500])
      },
      {
        offset: 0,
        time: 2620,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([13, -1048576e3, 1107296256, 20, 0, 500])
      },
      {
        offset: 0,
        time: 2625,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([13, 1137180672, 1117782016, 20, 0, 500])
      },
      {
        offset: 0,
        time: 2630,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([13, -1048576e3, 1107296256, 20, 0, 500])
      },
      {
        offset: 0,
        time: 2630,
        opcode: 0,
        size: 32,
        difficultyMask: 243,
        args: new Int32Array([1, 1117782016, -1048576e3, 200, 1, 500])
      },
      {
        offset: 0,
        time: 2630,
        opcode: 1,
        size: 32,
        difficultyMask: 243,
        args: new Int32Array([3, 1134034944, -1048576e3, 200, 1, 500])
      },
      {
        offset: 0,
        time: 2630,
        opcode: 0,
        size: 32,
        difficultyMask: 252,
        args: new Int32Array([5, 1117782016, -1048576e3, 200, 1, 500])
      },
      {
        offset: 0,
        time: 2630,
        opcode: 1,
        size: 32,
        difficultyMask: 252,
        args: new Int32Array([11, 1134034944, -1048576e3, 200, 1, 500])
      },
      {
        offset: 0,
        time: 2635,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([13, -1048576e3, 1124073472, 20, 0, 500])
      },
      {
        offset: 0,
        time: 2640,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([13, -1048576e3, 1115684864, 20, 0, 500])
      },
      {
        offset: 0,
        time: 2645,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([13, -1048576e3, 1117782016, 20, -2, 500])
      },
      {
        offset: 0,
        time: 2650,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([13, 1137180672, 1107296256, 20, -2, 500])
      },
      {
        offset: 0,
        time: 2655,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([13, -1048576e3, 1124073472, 20, 0, 500])
      },
      {
        offset: 0,
        time: 2660,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([13, 1137180672, 1115684864, 20, 0, 500])
      },
      {
        offset: 0,
        time: 2665,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([13, -1048576e3, 1117782016, 20, 0, 500])
      },
      {
        offset: 0,
        time: 2670,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([13, 1137180672, 1107296256, 20, 0, 500])
      },
      {
        offset: 0,
        time: 2675,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([13, -1048576e3, 1115684864, 20, 0, 500])
      },
      {
        offset: 0,
        time: 2680,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([13, -1048576e3, 1117782016, 20, -2, 500])
      },
      {
        offset: 0,
        time: 2685,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([13, 1137180672, 1107296256, 20, -2, 500])
      },
      {
        offset: 0,
        time: 2690,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([13, -1048576e3, 1115684864, 20, 0, 500])
      },
      {
        offset: 0,
        time: 2695,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([13, -1048576e3, 1117782016, 20, -2, 500])
      },
      {
        offset: 0,
        time: 2700,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([13, 1137180672, 1107296256, 20, -2, 500])
      },
      {
        offset: 0,
        time: 2705,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([13, -1048576e3, 1115684864, 20, 0, 500])
      },
      {
        offset: 0,
        time: 2710,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([13, -1048576e3, 1117782016, 20, -2, 500])
      },
      {
        offset: 0,
        time: 2715,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([13, 1137180672, 1107296256, 20, -2, 500])
      },
      {
        offset: 0,
        time: 2720,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([13, -1048576e3, 1127481344, 20, -2, 500])
      },
      {
        offset: 0,
        time: 2725,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([13, 1137180672, 1124335616, 20, -2, 500])
      },
      {
        offset: 0,
        time: 2730,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([13, -1048576e3, 1126432768, 20, 0, 500])
      },
      {
        offset: 0,
        time: 2735,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([13, -1048576e3, 1117782016, 20, -2, 500])
      },
      {
        offset: 0,
        time: 2740,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([13, 1137180672, 1124335616, 20, -2, 500])
      },
      {
        offset: 0,
        time: 2745,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([13, -1048576e3, 1115684864, 20, 0, 500])
      },
      {
        offset: 0,
        time: 2750,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([13, -1048576e3, 1127481344, 20, -2, 500])
      },
      {
        offset: 0,
        time: 2755,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([13, 1137180672, 1107296256, 20, -2, 500])
      },
      {
        offset: 0,
        time: 2760,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([13, -1048576e3, 1127481344, 20, -2, 500])
      },
      {
        offset: 0,
        time: 2765,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([13, 1137180672, 1124335616, 20, -2, 500])
      },
      {
        offset: 0,
        time: 2770,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([13, -1048576e3, 1115684864, 20, 0, 500])
      },
      {
        offset: 0,
        time: 2775,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([13, -1048576e3, 1125515264, 20, -2, 500])
      },
      {
        offset: 0,
        time: 2780,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([13, 1137180672, 1121976320, 20, -2, 500])
      },
      {
        offset: 0,
        time: 2785,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([13, -1048576e3, 1119879168, 20, 0, 500])
      },
      {
        offset: 0,
        time: 2790,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([13, -1048576e3, 1126170624, 20, -2, 500])
      },
      {
        offset: 0,
        time: 2795,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([13, 1137180672, 1124073472, 20, -2, 500])
      },
      {
        offset: 0,
        time: 2935,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([15, 1128267776, -1048576e3, 6e4, -2, 1e5])
      },
      { offset: 0, time: 2935, opcode: 10, size: 12, difficultyMask: 255, args: new Int32Array([0]) },
      { offset: 0, time: 2935, opcode: 14, size: 12, difficultyMask: 255, args: new Int32Array([1]) },
      {
        offset: 0,
        time: 2935,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([5, 1117782016, -1048576e3, 300, 1, 500])
      },
      {
        offset: 0,
        time: 3035,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1134034944, -1048576e3, 400, 1, 500])
      },
      {
        offset: 0,
        time: 3335,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1117782016, -1048576e3, 300, 1, 500])
      },
      {
        offset: 0,
        time: 3435,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([5, 1134034944, -1048576e3, 400, 1, 500])
      },
      {
        offset: 0,
        time: 3735,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([5, 1117782016, -1048576e3, 300, 1, 500])
      },
      {
        offset: 0,
        time: 3735,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([11, 1134034944, -1048576e3, 400, 1, 500])
      },
      { offset: 0, time: 4175, opcode: 6, size: 12, difficultyMask: 255, args: new Int32Array([0]) },
      { offset: 0, time: 4175, opcode: 7, size: 8, difficultyMask: 255, args: new Int32Array([]) },
      {
        offset: 0,
        time: 4175,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([25, 1128267776, -1048576e3, 6e4, -2, 1e5])
      },
      { offset: 0, time: 4176, opcode: 7, size: 8, difficultyMask: 255, args: new Int32Array([]) },
      { offset: 0, time: 4176, opcode: 8, size: 16, difficultyMask: 255, args: new Int32Array([0, 1]) },
      { offset: 0, time: 4176, opcode: 7, size: 8, difficultyMask: 255, args: new Int32Array([]) },
      { offset: 0, time: 4176, opcode: 10, size: 12, difficultyMask: 255, args: new Int32Array([0]) },
      {
        offset: 0,
        time: 4176,
        opcode: 0,
        size: 32,
        difficultyMask: 254,
        args: new Int32Array([37, 1128267776, 1124073472, 6e4, -2, 1e5])
      },
      { offset: 0, time: 4177, opcode: 10, size: 12, difficultyMask: 254, args: new Int32Array([0]) },
      { offset: 0, time: 4177, opcode: 6, size: 12, difficultyMask: 255, args: new Int32Array([1]) }
    ]
  },
  {
    index: 1,
    offset: 44312,
    instructions: [
      { offset: 0, time: 20, opcode: 13, size: 12, difficultyMask: 255, args: new Int32Array([1]) },
      {
        offset: 0,
        time: 120,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1134690304, -1048576e3, 20, 0, 1e3])
      },
      {
        offset: 0,
        time: 130,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1133707264, -1048576e3, 20, 0, 1e3])
      },
      {
        offset: 0,
        time: 140,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1135345664, -1048576e3, 20, 0, 1e3])
      },
      {
        offset: 0,
        time: 150,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1134362624, -1048576e3, 20, 0, 1e3])
      },
      {
        offset: 0,
        time: 160,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1133379584, -1048576e3, 20, 0, 1e3])
      },
      {
        offset: 0,
        time: 170,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1135673344, -1048576e3, 20, 0, 1e3])
      },
      {
        offset: 0,
        time: 180,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1134690304, -1048576e3, 20, 0, 1e3])
      },
      {
        offset: 0,
        time: 190,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1133707264, -1048576e3, 20, 1, 1e3])
      },
      {
        offset: 0,
        time: 200,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1135345664, -1048576e3, 20, 1, 1e3])
      },
      {
        offset: 0,
        time: 210,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1134362624, -1048576e3, 20, 1, 1e3])
      },
      {
        offset: 0,
        time: 220,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1133379584, -1048576e3, 20, 1, 1e3])
      },
      {
        offset: 0,
        time: 320,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1106247680, -1048576e3, 20, 0, 1e3])
      },
      {
        offset: 0,
        time: 330,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1114636288, -1048576e3, 20, 0, 1e3])
      },
      {
        offset: 0,
        time: 340,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1119092736, -1048576e3, 20, 0, 1e3])
      },
      {
        offset: 0,
        time: 350,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1109393408, -1048576e3, 20, 0, 1e3])
      },
      {
        offset: 0,
        time: 360,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1116471296, -1048576e3, 20, 0, 1e3])
      },
      {
        offset: 0,
        time: 370,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1120403456, -1048576e3, 20, 0, 1e3])
      },
      {
        offset: 0,
        time: 380,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1106247680, -1048576e3, 20, 0, 1e3])
      },
      {
        offset: 0,
        time: 390,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1114636288, -1048576e3, 20, 0, 1e3])
      },
      {
        offset: 0,
        time: 400,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1119092736, -1048576e3, 20, 1, 1e3])
      },
      {
        offset: 0,
        time: 410,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1109393408, -1048576e3, 20, 1, 1e3])
      },
      {
        offset: 0,
        time: 420,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1116471296, -1048576e3, 20, 1, 1e3])
      },
      {
        offset: 0,
        time: 430,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1120403456, -1048576e3, 20, 1, 1e3])
      },
      {
        offset: 0,
        time: 530,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1135673344, -1048576e3, 20, 0, 1e3])
      },
      {
        offset: 0,
        time: 540,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1114636288, -1048576e3, 20, 0, 1e3])
      },
      {
        offset: 0,
        time: 550,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1133707264, -1048576e3, 20, 0, 1e3])
      },
      {
        offset: 0,
        time: 560,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1109393408, -1048576e3, 20, 0, 1e3])
      },
      {
        offset: 0,
        time: 570,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1134362624, -1048576e3, 20, -2, 1e3])
      },
      {
        offset: 0,
        time: 580,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1120403456, -1048576e3, 20, -2, 1e3])
      },
      {
        offset: 0,
        time: 590,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1135673344, -1048576e3, 20, -2, 1e3])
      },
      {
        offset: 0,
        time: 600,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1114636288, -1048576e3, 20, -2, 1e3])
      },
      {
        offset: 0,
        time: 610,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1133707264, -1048576e3, 20, -2, 1e3])
      },
      {
        offset: 0,
        time: 620,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1109393408, -1048576e3, 20, -2, 1e3])
      },
      {
        offset: 0,
        time: 630,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1134362624, -1048576e3, 20, 1, 1e3])
      },
      {
        offset: 0,
        time: 640,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1133379584, -1048576e3, 20, 1, 1e3])
      },
      {
        offset: 0,
        time: 740,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1135673344, -1048576e3, 20, 0, 1e3])
      },
      {
        offset: 0,
        time: 750,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1114636288, -1048576e3, 20, 0, 1e3])
      },
      {
        offset: 0,
        time: 760,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1133707264, -1048576e3, 20, 0, 1e3])
      },
      {
        offset: 0,
        time: 770,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1109393408, -1048576e3, 20, 0, 1e3])
      },
      {
        offset: 0,
        time: 780,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1134362624, -1048576e3, 20, -2, 1e3])
      },
      {
        offset: 0,
        time: 790,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1120403456, -1048576e3, 20, -2, 1e3])
      },
      {
        offset: 0,
        time: 800,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1135673344, -1048576e3, 20, -2, 1e3])
      },
      {
        offset: 0,
        time: 810,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1114636288, -1048576e3, 20, -2, 1e3])
      },
      {
        offset: 0,
        time: 820,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1133707264, -1048576e3, 20, -2, 1e3])
      },
      {
        offset: 0,
        time: 830,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1109393408, -1048576e3, 20, -2, 1e3])
      },
      {
        offset: 0,
        time: 840,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1134362624, -1048576e3, 20, 1, 1e3])
      },
      {
        offset: 0,
        time: 850,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1133379584, -1048576e3, 20, 1, 1e3])
      }
    ]
  }
], d0 = {
  version: 2048,
  subCount: 53,
  subs: [],
  timelines: l0
}, g0 = {
  route: "stage1",
  source: "ecldata1.ecl",
  subCount: 53,
  timelineCount: 2,
  cards: [
    {
      sub: 22,
      id: 0,
      name: "蛍符「地上の流星」",
      owner: "リグル・ナイトバグ",
      face: 0,
      bonus: 1e7,
      lastSpell: !1
    },
    {
      sub: 22,
      id: 1,
      name: "蛍符「地上の彗星」",
      owner: "リグル・ナイトバグ",
      face: 0,
      bonus: 1e7,
      lastSpell: !1
    },
    {
      sub: 38,
      id: 2,
      name: "灯符「ファイヤフライフェノメノン」",
      owner: "リグル・ナイトバグ",
      face: 0,
      bonus: 1e7,
      lastSpell: !1
    },
    {
      sub: 38,
      id: 3,
      name: "灯符「ファイヤフライフェノメノン」",
      owner: "リグル・ナイトバグ",
      face: 0,
      bonus: 1e7,
      lastSpell: !1
    },
    {
      sub: 38,
      id: 4,
      name: "灯符「ファイヤフライフェノメノン」",
      owner: "リグル・ナイトバグ",
      face: 0,
      bonus: 1e7,
      lastSpell: !1
    },
    {
      sub: 38,
      id: 5,
      name: "灯符「ファイヤフライフェノメノン」",
      owner: "リグル・ナイトバグ",
      face: 0,
      bonus: 1e7,
      lastSpell: !1
    },
    {
      sub: 44,
      id: 6,
      name: "蠢符「リトルバグ」",
      owner: "リグル・ナイトバグ",
      face: 0,
      bonus: 1e7,
      lastSpell: !1
    },
    {
      sub: 44,
      id: 7,
      name: "蠢符「リトルバグストーム」",
      owner: "リグル・ナイトバグ",
      face: 0,
      bonus: 1e7,
      lastSpell: !1
    },
    {
      sub: 44,
      id: 8,
      name: "蠢符「ナイトバグストーム」",
      owner: "リグル・ナイトバグ",
      face: 0,
      bonus: 1e7,
      lastSpell: !1
    },
    {
      sub: 44,
      id: 9,
      name: "蠢符「ナイトバグトルネード」",
      owner: "リグル・ナイトバグ",
      face: 0,
      bonus: 1e7,
      lastSpell: !1
    },
    {
      sub: 48,
      id: 10,
      name: "隠蟲「永夜蟄居」",
      owner: "リグル・ナイトバグ",
      face: 0,
      bonus: 1e7,
      lastSpell: !0
    },
    {
      sub: 48,
      id: 11,
      name: "隠蟲「永夜蟄居」",
      owner: "リグル・ナイトバグ",
      face: 0,
      bonus: 1e7,
      lastSpell: !0
    },
    {
      sub: 48,
      id: 12,
      name: "隠蟲「永夜蟄居」",
      owner: "リグル・ナイトバグ",
      face: 0,
      bonus: 1e7,
      lastSpell: !0
    }
  ],
  scripts: c0,
  waves: d0
};
export {
  g0 as STAGE1_SCRIPT
};
