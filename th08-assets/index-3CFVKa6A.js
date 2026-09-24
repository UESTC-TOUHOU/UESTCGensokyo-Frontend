import { r as n, n as l } from "./index-BaCUa-wb.js";
const o = 1, r = 2, a = 4, f = 8, s = 16;
function* u(e) {
  let i = 0, t = 0;
  for (; i >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), i) {
      case 0: {
        e.pauseEnemySpawns(0);
        return;
      }
      default:
        return;
    }
}
function* g(e) {
  let i = 0, t = 0;
  for (; i >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), i) {
      case 0: {
        e.setAnm(50), e.setBounds(24, 24), e.clearScriptFlags(2), e.holdShots(), e.isDiff(a | s) && e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 1,
          color: 2,
          count: 1,
          rings: 1,
          speed: 1.7,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.18479957,
          transform: 515
        }), e.isDiff(f | s) && e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 1,
          color: 2,
          count: 1,
          rings: 2,
          speed: 3,
          speed2: 1.2,
          angle: 0,
          angleStep: 0.18479957,
          transform: 515
        }), e.releaseShots(), e.isDiff(a | s) && e.setShotRepeatRand(90), e.isDiff(f | s) && e.setShotRepeatRand(50), e.setMisc160(8), e.setHeadingSpeed(0, 4.5), yield 35, i = 1;
        break;
      }
      case 1: {
        e.setSpeedAccel(-0.055556), e.setHeadingVel(-0.05236), yield 90, i = 2;
        break;
      }
      case 2: {
        e.setHeadingVel(0), e.setSpeedAccel(0.05), yield 5e3, i = 3;
        break;
      }
      case 3:
        return;
      default:
        return;
    }
}
function* m(e) {
  let i = 0, t = 0;
  for (; i >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), i) {
      case 0: {
        e.setAnm(50), e.setBounds(24, 24), e.clearScriptFlags(2), e.holdShots(), e.isDiff(r | s) && e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 1,
          color: 2,
          count: 1,
          rings: 1,
          speed: 1.1,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.18479957,
          transform: 515
        }), e.isDiff(a | s) && e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 1,
          color: 2,
          count: 1,
          rings: 1,
          speed: 1.3,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.18479957,
          transform: 515
        }), e.isDiff(f | s) && e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 1,
          color: 2,
          count: 1,
          rings: 2,
          speed: 2.7,
          speed2: 1,
          angle: 0,
          angleStep: 0.18479957,
          transform: 515
        }), e.releaseShots(), e.setMisc160(8), e.setHeadingSpeed(0, 4.5), yield 35, i = 1;
        break;
      }
      case 1: {
        e.setSpeedAccel(-0.055556), e.setHeadingVel(-0.05236), e.isDiff(r | s) && e.setShotRepeatRand(90), e.isDiff(a | s) && e.setShotRepeatRand(60), e.isDiff(f | s) && e.setShotRepeatRand(50), yield 90, i = 2;
        break;
      }
      case 2: {
        e.setHeadingVel(0), e.setSpeedAccel(0.05), yield 5e3, i = 3;
        break;
      }
      case 3:
        return;
      default:
        return;
    }
}
function* k(e) {
  let i = 0, t = 0;
  for (; i >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), i) {
      case 0: {
        e.setAnm(51), e.setBounds(24, 24), e.clearScriptFlags(2), e.holdShots(), e.isDiff(r | s) && e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 1,
          color: 10,
          count: 1,
          rings: 1,
          speed: 1.4,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.18479957,
          transform: 515
        }), e.isDiff(a | s) && e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 1,
          color: 10,
          count: 1,
          rings: 1,
          speed: 1.8,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.18479957,
          transform: 515
        }), e.isDiff(f | s) && e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 1,
          color: 10,
          count: 1,
          rings: 2,
          speed: 2.6,
          speed2: 1.5,
          angle: 0,
          angleStep: 0.18479957,
          transform: 515
        }), e.releaseShots(), e.isDiff(r | s) && e.setShotRepeatRand(60), e.isDiff(a | s) && e.setShotRepeatRand(50), e.isDiff(f | s) && e.setShotRepeatRand(30), e.setMisc160(10), e.setHeadingSpeed(1.570796, 4.5), yield 35, i = 1;
        break;
      }
      case 1: {
        e.setSpeedAccel(-0.055556), e.setHeadingVel(-0.05236), yield 90, i = 2;
        break;
      }
      case 2: {
        e.setHeadingVel(0), e.setSpeedAccel(0.05), yield 5e3, i = 3;
        break;
      }
      case 3:
        return;
      default:
        return;
    }
}
function* S(e) {
  let i = 0, t = 0;
  for (; i >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), i) {
      case 0: {
        e.setAnm(24), e.setBounds(24, 24), e.clearScriptFlags(2), e.holdShots(), e.isDiff(a | s) && e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 1,
          color: 2,
          count: 1,
          rings: 1,
          speed: 1.1,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.18479957,
          transform: 515
        }), e.isDiff(f | s) && e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 1,
          color: 2,
          count: 1,
          rings: 1,
          speed: 1.7,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.18479957,
          transform: 515
        }), e.releaseShots(), e.isDiff(a | s) && e.setShotRepeatRand(90), e.isDiff(f | s) && e.setShotRepeatRand(50), e.setMisc160(20), e.f0 = e.randF32 * 0.5, e.f0 += 1.8, e.movePolar(60, 4, 1.570796, e.f0), yield 35, i = 1;
        break;
      }
      case 1: {
        e.linkChildRelative(5, 0, 0, 100, -2, 100), yield 20, i = 2;
        break;
      }
      case 2: {
        e.linkChildRelative(5, 0, 0, 100, -2, 100), yield 20, i = 3;
        break;
      }
      case 3: {
        e.isDiff(o | s) && e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 1,
          color: 6,
          count: 1,
          rings: 2,
          speed: 1.4,
          speed2: 1,
          angle: 0,
          angleStep: 0.2617994,
          transform: 514
        }), e.isDiff(r | s) && e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 1,
          color: 6,
          count: 1,
          rings: 5,
          speed: 2.2,
          speed2: 1,
          angle: 0,
          angleStep: 0.16534698,
          transform: 514
        }), e.isDiff(a | s) && e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 1,
          color: 6,
          count: 3,
          rings: 7,
          speed: 3,
          speed2: 1,
          angle: 0,
          angleStep: 0.16534698,
          transform: 514
        }), e.isDiff(f | s) && e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 1,
          color: 6,
          count: 3,
          rings: 7,
          speed: 4,
          speed2: 1,
          angle: 0,
          angleStep: 0.16534698,
          transform: 514
        }), e.isDiff(o | s) && e.spawnShot({
          mode: "aimedRing",
          // aim 2 of 96..104
          type: 2,
          color: 6,
          count: 8,
          rings: 1,
          speed: 1,
          speed2: 1.5,
          angle: 0,
          angleStep: 0,
          transform: 514
        }), e.isDiff(r | s) && e.spawnShot({
          mode: "aimedRing",
          // aim 2 of 96..104
          type: 2,
          color: 6,
          count: 20,
          rings: 1,
          speed: 1,
          speed2: 0.5,
          angle: 0,
          angleStep: 0,
          transform: 514
        }), e.isDiff(a | s) && e.spawnShot({
          mode: "aimedRing",
          // aim 2 of 96..104
          type: 2,
          color: 6,
          count: 20,
          rings: 2,
          speed: 2,
          speed2: 0.5,
          angle: 0,
          angleStep: 0,
          transform: 514
        }), e.isDiff(f | s) && e.spawnShot({
          mode: "aimedRing",
          // aim 2 of 96..104
          type: 2,
          color: 6,
          count: 32,
          rings: 2,
          speed: 3,
          speed2: 0.5,
          angle: 0,
          angleStep: 0,
          transform: 514
        }), yield 70, i = 4;
        break;
      }
      case 4: {
        e.setHeadingSpeed(-1.570796, 0.5), e.setSpeedAccel(0.016667), yield 60, i = 5;
        break;
      }
      case 5: {
        e.setSpeedAccel(0), yield 5e3, i = 6;
        break;
      }
      case 6:
        return;
      default:
        return;
    }
}
function* w(e) {
  let i = 0, t = 0;
  for (; i >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), i) {
      case 0: {
        e.setAnm(58), e.setHitFlash(1), e.setMisc145(1), e.setBounds(24, 24), e.setMisc160(30), e.f0 = e.timer, e.setHeadingSpeed(e.f0, 0.5), e.setSpeedAccel(0.025), yield 1, i = 1;
        break;
      }
      case 1: {
        e.setScriptFlags(2), yield 5e3, i = 2;
        break;
      }
      case 2:
        return;
      default:
        return;
    }
}
function* b(e) {
  let i = 0, t = 0;
  for (; i >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), i) {
      case 0: {
        e.setAnm(24), e.setBounds(24, 24), e.clearScriptFlags(2), e.holdShots(), e.isDiff(a | s) && e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 1,
          color: 2,
          count: 1,
          rings: 1,
          speed: 1.1,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.18479957,
          transform: 515
        }), e.isDiff(f | s) && e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 1,
          color: 2,
          count: 1,
          rings: 1,
          speed: 1.7,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.18479957,
          transform: 515
        }), e.releaseShots(), e.isDiff(a | s) && e.setShotRepeatRand(90), e.isDiff(f | s) && e.setShotRepeatRand(50), e.setMisc160(20), e.f0 = e.randF32 * 0.5, e.f0 += 1.8, e.movePolar(60, 4, 1.570796, e.f0), yield 35, i = 1;
        break;
      }
      case 1: {
        e.linkChildRelative(5, 0, 0, 100, -2, 100), yield 20, i = 2;
        break;
      }
      case 2: {
        e.linkChildRelative(5, 0, 0, 100, -2, 100), yield 20, i = 3;
        break;
      }
      case 3: {
        e.isDiff(o | s) && e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 1,
          color: 2,
          count: 1,
          rings: 2,
          speed: 1.4,
          speed2: 1,
          angle: 0,
          angleStep: 0.2617994,
          transform: 514
        }), e.isDiff(r | s) && e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 1,
          color: 2,
          count: 1,
          rings: 5,
          speed: 2.2,
          speed2: 1,
          angle: 0,
          angleStep: 0.16534698,
          transform: 514
        }), e.isDiff(a | s) && e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 1,
          color: 2,
          count: 3,
          rings: 7,
          speed: 3,
          speed2: 1,
          angle: 0,
          angleStep: 0.16534698,
          transform: 514
        }), e.isDiff(f | s) && e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 1,
          color: 2,
          count: 3,
          rings: 7,
          speed: 4,
          speed2: 1,
          angle: 0,
          angleStep: 0.16534698,
          transform: 514
        }), e.isDiff(o | s) && e.spawnShot({
          mode: "aimedRing",
          // aim 2 of 96..104
          type: 2,
          color: 2,
          count: 8,
          rings: 1,
          speed: 1,
          speed2: 0.5,
          angle: 0,
          angleStep: 0,
          transform: 514
        }), e.isDiff(r | s) && e.spawnShot({
          mode: "aimedRing",
          // aim 2 of 96..104
          type: 2,
          color: 2,
          count: 20,
          rings: 1,
          speed: 1,
          speed2: 0.5,
          angle: 0,
          angleStep: 0,
          transform: 514
        }), e.isDiff(a | s) && e.spawnShot({
          mode: "aimedRing",
          // aim 2 of 96..104
          type: 2,
          color: 2,
          count: 20,
          rings: 2,
          speed: 2,
          speed2: 0.5,
          angle: 0,
          angleStep: 0,
          transform: 514
        }), e.isDiff(f | s) && e.spawnShot({
          mode: "aimedRing",
          // aim 2 of 96..104
          type: 2,
          color: 2,
          count: 32,
          rings: 2,
          speed: 3,
          speed2: 0.5,
          angle: 0,
          angleStep: 0,
          transform: 514
        }), yield 60, i = 4;
        break;
      }
      case 4: {
        e.setHeadingSpeed(-1.570796, 0.5), e.setSpeedAccel(0.016667), yield 60, i = 5;
        break;
      }
      case 5: {
        e.setSpeedAccel(0), yield 5e3, i = 6;
        break;
      }
      case 6:
        return;
      default:
        return;
    }
}
function* A(e) {
  let i = 0, t = 0;
  for (; i >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), i) {
      case 0: {
        e.setAnmScripts6(18), e.setExtraAnm(0, 48), e.setBounds(24, 24), e.setMisc160(80), e.setMisc144(3, 2), e.pauseEnemySpawns(1), e.clearScriptFlags(2), e.setMisc129(1), e.setDeathCallbackSub(0), e.movePolar(60, 4, 1.570796, 2), e.callSubAlloc(0, 8), yield 80, i = 1;
        break;
      }
      case 1: {
        e.f0 = 0, e.linkChildAttached(10, 0, 0, 100, 1, 100), e.f0 = 3.141593, e.linkChildAttached(10, 0, 0, 100, 1, 100), e.f0 = 1.570796, e.linkChildAttached(10, 0, 0, 100, 1, 100), e.f0 = -1.570796, e.linkChildAttached(10, 0, 0, 100, 1, 100), e.setHeadingSpeed(1.570796, 0.25), yield 600, i = 2;
        break;
      }
      case 2: {
        e.movePolar(120, 1, -1.570796, 5), e.pauseEnemySpawns(0), yield 5e3, i = 3;
        break;
      }
      case 3:
        return;
      default:
        return;
    }
}
function* h(e) {
  let i = 0, t = 0;
  for (; i >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), i) {
      case 0: {
        e.ci0 = 24, i = 1;
        break;
      }
      case 1: {
        e.i0 = 5 - e.parentChainCount, e.isDiff(r | s) && e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 2,
          color: 6,
          count: n(1e4),
          rings: 1,
          speed: 1.8,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.09817477,
          transform: 515
        }), e.isDiff(a | s) && e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 2,
          color: 6,
          count: n(1e4),
          rings: 2,
          speed: 2.3,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.09817477,
          transform: 515
        }), e.isDiff(f | s) && e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 2,
          color: 6,
          count: n(1e4),
          rings: 3,
          speed: 2.8,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.09817477,
          transform: 515
        }), yield 32, i = 2;
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
function* M(e) {
  let i = 0, t = 0;
  for (; i >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), i) {
      case 0: {
        e.isDiff(o | s) && (e.i0 = 32), e.isDiff(r | s) && (e.i0 = 32), e.isDiff(a | s) && (e.i0 = 28), e.isDiff(f | s) && (e.i0 = 12), e.ci0 = 24, i = 1;
        break;
      }
      case 1: {
        if (e.f0 = e.moveAngle + 3.141593, e.i1 = e.ci0 % 8, e.i1 >= 4) {
          i = 3;
          break;
        }
        i = 2;
        break;
      }
      case 2: {
        e.isDiff(o | s) && e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 3,
          color: 6,
          count: 1,
          rings: 1,
          speed: 1.5,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.18479957,
          transform: 515
        }), e.isDiff(r | s) && e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 3,
          color: 6,
          count: 1,
          rings: 2,
          speed: 2.2,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.18479957,
          transform: 515
        }), e.isDiff(a | s) && e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 3,
          color: 6,
          count: 3,
          rings: 2,
          speed: 2.5,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.5235988,
          transform: 515
        }), e.isDiff(f | s) && e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 3,
          color: 6,
          count: 5,
          rings: 3,
          speed: 3.2,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.44879895,
          transform: 515
        }), i = 3;
        break;
      }
      case 3: {
        if (yield e.delay(e.i0), e.i0--, --e.ci0 > 0) {
          i = 1;
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
function* I(e) {
  let i = 0, t = 0;
  for (; i >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), i) {
      case 0: {
        e.setAnm(53), e.setBounds(24, 24), e.setHitFlash(1), e.moveArc(100, e.f0, -0.05236, 0.64), yield 100, i = 1;
        break;
      }
      case 1: {
        e.setAccel(6e3, -0.05236, 0), e.callSubAlloc(0, 9), yield 5e3, i = 2;
        break;
      }
      case 2:
        return;
      default:
        return;
    }
}
function* z(e) {
  let i = 0, t = 0;
  for (; i >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), i) {
      case 0: {
        e.setAnmScripts6(18), e.setExtraAnm(0, 48), e.setBounds(24, 24), e.setMisc160(30), e.setMisc144(3, 2), e.pauseEnemySpawns(1), e.clearScriptFlags(2), e.setMisc129(1), e.setDeathCallbackSub(0), e.holdShots(), e.isDiff(r | s) && e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 6,
          color: 6,
          count: 2,
          rings: 3,
          speed: 1.6,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.09817477,
          transform: 514
        }), e.isDiff(a | s) && e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 6,
          color: 6,
          count: 2,
          rings: 3,
          speed: 2.4,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.09817477,
          transform: 514
        }), e.isDiff(f | s) && e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 6,
          color: 6,
          count: 2,
          rings: 3,
          speed: 4,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.09817477,
          transform: 514
        }), e.releaseShots(), e.isDiff(a | s) && e.setShotRepeat(180), e.isDiff(a | s) && e.setShotRepeat(40), e.isDiff(f | s) && e.setShotRepeat(10), e.movePolar(50, 4, 1.570796, 3), yield 50, i = 1;
        break;
      }
      case 1: {
        e.linkChildRelative(12, 0, 0, 100, 1, 100), yield 30, i = 2;
        break;
      }
      case 2: {
        e.linkChildRelative(12, 0, 0, 100, 1, 100), yield 30, i = 3;
        break;
      }
      case 3: {
        e.linkChildRelative(12, 0, 0, 100, 1, 100), yield 20, i = 4;
        break;
      }
      case 4: {
        e.linkChildRelative(12, 0, 0, 100, 1, 100), e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 1,
          color: 6,
          count: 3,
          rings: 5,
          speed: 2.4,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.1308997,
          transform: 514
        }), yield 20, i = 5;
        break;
      }
      case 5: {
        e.linkChildRelative(12, 0, 0, 100, 1, 100), yield 20, i = 6;
        break;
      }
      case 6: {
        e.linkChildRelative(12, 0, 0, 100, 1, 100), yield 20, i = 7;
        break;
      }
      case 7: {
        e.linkChildRelative(12, 0, 0, 100, 1, 100), e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 1,
          color: 6,
          count: 3,
          rings: 5,
          speed: 2.4,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.1308997,
          transform: 514
        }), e.pauseEnemySpawns(0), yield 20, i = 8;
        break;
      }
      case 8: {
        e.linkChildRelative(12, 0, 0, 100, 1, 100), yield 20, i = 9;
        break;
      }
      case 9: {
        e.linkChildRelative(12, 0, 0, 100, 1, 100), yield 120, i = 10;
        break;
      }
      case 10: {
        e.setHeadingSpeed(-1.570796, 1.7), yield 5e3, i = 11;
        break;
      }
      case 11:
        return;
      default:
        return;
    }
}
function* D(e) {
  let i = 0, t = 0;
  for (; i >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), i) {
      case 0: {
        e.setAnm(57), e.setHitFlash(1), e.setMisc145(1), e.setBounds(24, 24), e.setMisc160(30), e.f1 = e.randF32S * 0.19635, e.f0 = e.timer + e.f1, e.setHeadingSpeed(e.f0, 0.5), e.setSpeedAccel(0.05), yield 1, i = 1;
        break;
      }
      case 1: {
        e.setScriptFlags(2), yield 5e3, i = 2;
        break;
      }
      case 2:
        return;
      default:
        return;
    }
}
function* R(e) {
  let i = 0, t = 0;
  for (; i >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), i) {
      case 0: {
        e.setAnmScripts6(30), e.setExtraAnm(0, 48), e.setBounds(24, 24), e.setMisc160(40), e.setMisc144(3, 2), e.clearScriptFlags(2), e.holdShots(), e.isDiff(r | s) && e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 6,
          color: 2,
          count: 1,
          rings: 4,
          speed: 2.3,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.09817477,
          transform: 2
        }), e.isDiff(a | s) && e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 6,
          color: 2,
          count: 1,
          rings: 4,
          speed: 2.3,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.09817477,
          transform: 2
        }), e.isDiff(f | s) && e.spawnShot({
          mode: "aimedRing",
          // aim 2 of 96..104
          type: 6,
          color: 2,
          count: 32,
          rings: 1,
          speed: 2.3,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.09817477,
          transform: 2
        }), e.releaseShots(), e.isDiff(r | s) && e.setShotRepeat(180), e.isDiff(a | s) && e.setShotRepeat(60), e.isDiff(f | s) && e.setShotRepeat(30), e.movePolar(60, 4, 1.570796, 3), yield 80, i = 1;
        break;
      }
      case 1: {
        e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 1,
          color: 6,
          count: 2,
          rings: 8,
          speed: 1.8,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.1308997,
          transform: 514
        }), yield 80, i = 2;
        break;
      }
      case 2: {
        e.f1 = -0.785398, e.linkChildRelative(15, 0, 0, 100, 1, 100), e.f1 += 0.392699, e.linkChildRelative(15, 0, 0, 100, 1, 100), e.f1 += 0.392699, e.linkChildRelative(15, 0, 0, 100, 1, 100), e.f1 += 0.392699, e.linkChildRelative(15, 0, 0, 100, 1, 100), e.f1 += 0.392699, e.linkChildRelative(15, 0, 0, 100, 1, 100), yield 30, i = 3;
        break;
      }
      case 3: {
        e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 1,
          color: 6,
          count: 5,
          rings: 1,
          speed: 2.4,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.19634955,
          transform: 514
        }), yield 20, i = 4;
        break;
      }
      case 4: {
        e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 1,
          color: 6,
          count: 5,
          rings: 1,
          speed: 2.4,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.19634955,
          transform: 514
        }), yield 20, i = 5;
        break;
      }
      case 5: {
        e.isDiff(o | r | a | s) && e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 1,
          color: 6,
          count: 5,
          rings: 1,
          speed: 2.4,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.19634955,
          transform: 514
        }), e.isDiff(f | s) && e.spawnShot({
          mode: "aimedRing",
          // aim 2 of 96..104
          type: 2,
          color: 6,
          count: 32,
          rings: 1,
          speed: 2.4,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.19634955,
          transform: 514
        }), yield 120, i = 6;
        break;
      }
      case 6: {
        e.setHeadingSpeed(-1.570796, 1.7), yield 5e3, i = 7;
        break;
      }
      case 7:
        return;
      default:
        return;
    }
}
function* F(e) {
  let i = 0, t = 0;
  for (; i >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), i) {
      case 0: {
        e.setAnmScripts6(30), e.setExtraAnm(0, 48), e.setBounds(24, 24), e.setMisc160(40), e.setMisc144(3, 2), e.holdShots(), e.isDiff(f | s) && e.spawnShot({
          mode: "aimedRing",
          // aim 2 of 96..104
          type: 6,
          color: 2,
          count: 2,
          rings: 5,
          speed: 3.3,
          speed2: 0.5,
          angle: 0,
          angleStep: 0,
          transform: 2
        }), e.releaseShots(), e.isDiff(f | s) && e.setShotRepeat(30), e.movePolar(60, 4, 1.570796, 3), yield 80, i = 1;
        break;
      }
      case 1: {
        e.f1 = -0.785398, e.linkChildRelative(15, 0, 0, 100, 1, 100), e.f1 += 0.392699, e.linkChildRelative(15, 0, 0, 100, 1, 100), e.f1 += 0.392699, e.linkChildRelative(15, 0, 0, 100, 1, 100), e.f1 += 0.392699, e.linkChildRelative(15, 0, 0, 100, 1, 100), e.f1 += 0.392699, e.linkChildRelative(15, 0, 0, 100, 1, 100), yield 30, i = 2;
        break;
      }
      case 2: {
        e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 1,
          color: 6,
          count: 5,
          rings: 1,
          speed: 2.4,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.19634955,
          transform: 514
        }), yield 20, i = 3;
        break;
      }
      case 3: {
        e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 1,
          color: 6,
          count: 5,
          rings: 1,
          speed: 2.4,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.19634955,
          transform: 514
        }), yield 20, i = 4;
        break;
      }
      case 4: {
        e.isDiff(o | r | a | s) && e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 1,
          color: 6,
          count: 5,
          rings: 1,
          speed: 2.4,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.19634955,
          transform: 514
        }), e.isDiff(f | s) && e.spawnShot({
          mode: "aimedRing",
          // aim 2 of 96..104
          type: 2,
          color: 6,
          count: 32,
          rings: 1,
          speed: 2.4,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.19634955,
          transform: 514
        }), yield 120, i = 5;
        break;
      }
      case 5: {
        e.setHeadingSpeed(-1.570796, 1.7), yield 5e3, i = 6;
        break;
      }
      case 6:
        return;
      default:
        return;
    }
}
function* v(e) {
  let i = 0, t = 0;
  for (; i >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), i) {
      case 0: {
        e.setAnm(57), e.setHitFlash(1), e.setMisc145(1), e.setBounds(24, 24), e.setMisc160(30), e.f0 = e.timer + e.f1, e.setHeadingSpeed(e.f0, 0.5), e.setSpeedAccel(0.028333), yield 60, i = 1;
        break;
      }
      case 1: {
        e.setSpeedAccel(-0.056667), yield 30, i = 2;
        break;
      }
      case 2: {
        e.f0 = e.timer + e.f1, e.setHeadingSpeed(e.f0, 0.5), e.setSpeedAccel(0.025), yield 1, i = 3;
        break;
      }
      case 3: {
        e.setScriptFlags(2), yield 5e3, i = 4;
        break;
      }
      case 4:
        return;
      default:
        return;
    }
}
function* C(e) {
  let i = 0, t = 0;
  for (; i >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), i) {
      case 0: {
        e.clearScriptFlags(56), e.spawnEffectAt(51, 16, 0), yield 4, i = 1;
        break;
      }
      case 1: {
        e.spawnEffectAt(51, 16, 0), yield 4, i = 2;
        break;
      }
      case 2: {
        e.spawnEffectAt(51, 16, 0), yield 4, i = 3;
        break;
      }
      case 3: {
        e.spawnEffectAt(51, 16, 0), yield 4, i = 4;
        break;
      }
      case 4: {
        e.spawnEffectAt(51, 16, 0), yield 4, i = 5;
        break;
      }
      case 5: {
        e.spawnEffectAt(51, 16, 0), i = 6;
        break;
      }
      case 6: {
        e.spawnEffectAt(51, 4, 0), yield 4, i = 7;
        break;
      }
      case 7: {
        i = 6;
        break;
      }
      case 8:
        return;
      default:
        return;
    }
}
function* E(e) {
  let i = 0, t = 0;
  for (; i >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), i) {
      case 0: {
        e.setAnmScripts6Alt(0), e.clearScriptFlags(22), e.setBossPresent(0), e.setBounds(48, 48), e.setMisc160(60), e.setLives(12e3), e.setLifeBarSlice(0, 0, e.maxHp, -1), e.setSpellTimer(1980, 23), e.setPhase(0, 1500, 23), e.setLifeBarSlice(0, 0, e.phase0, 16752800), e.setRelPos(-32, 256), e.moveRelative(60, 4, 192, 128), yield 60, i = 1;
        break;
      }
      case 1: {
        e.spawnEffect(6, 1050253722, 1060320051, 1050253722, 1124073472), yield 10, i = 2;
        break;
      }
      case 2: {
        e.spawnEffect(6, -1097229926, 1060320051, 1050253722, 1124073472), yield 10, i = 3;
        break;
      }
      case 3: {
        e.spawnEffect(6, 1050253722, 1060320051, -1097229926, 1124073472), yield 10, i = 4;
        break;
      }
      case 4: {
        e.spawnEffect(6, -1097229926, -1087163597, -1097229926, 1119879168), yield 10, i = 5;
        break;
      }
      case 5: {
        e.spawnEffect(6, 1050253722, -1087163597, -1097229926, 1119879168), yield 10, i = 6;
        break;
      }
      case 6: {
        e.spawnEffect(6, -1097229926, -1087163597, 1050253722, 1119879168), yield 10, i = 7;
        break;
      }
      case 7: {
        e.setMotionClamp(32, 48, 352, 128), yield* d(e), i = 8;
        break;
      }
      case 8:
        return;
      default:
        return;
    }
}
function* x(e) {
  let i = 0, t = 0;
  for (; i >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), i) {
      case 0: {
        e.isDiff(o | s) && (e.ci0 = 16), e.isDiff(r | a | f | s) && (e.ci0 = 32), e.isDiff(o | s) && (e.f2 *= 2), e.setShotRecord(0, 8192, 0, 60, -1, -1, -1), e.setShotRecord(1, 64, 1, 60, 1, 0, 0), e.isDiff(o | s) && (e.f1 = 0.083333), e.isDiff(r | s) && (e.f1 = 0.091667), e.isDiff(a | s) && (e.f1 = 0.1), e.isDiff(f | s) && (e.f1 = 0.116667), e.setGaugeTimer(0, 0, 0, 0, 0, 0), e.f4 = 5833e-6, i = 1;
        break;
      }
      case 1: {
        e.setShotRecord(2, 16, 0, 60, -1, e.f1, -999.900024), e.isDiff(o | s) && e.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 3,
          color: 10,
          count: 1,
          rings: 1,
          speed: 3,
          speed2: 0.5,
          angle: n(10016),
          angleStep: 0.2617994,
          transform: 139858
        }), e.isDiff(r | s) && e.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 3,
          color: 10,
          count: 1,
          rings: 2,
          speed: 3,
          speed2: 0.5,
          angle: n(10016),
          angleStep: 0.2617994,
          transform: 139858
        }), e.isDiff(a | s) && e.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 3,
          color: 10,
          count: 1,
          rings: 4,
          speed: 3,
          speed2: 0.5,
          angle: n(10016),
          angleStep: 0.2617994,
          transform: 139858
        }), e.isDiff(f | s) && e.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 3,
          color: 10,
          count: 1,
          rings: 7,
          speed: 5,
          speed2: 0.2,
          angle: n(10016),
          angleStep: 0.2617994,
          transform: 139858
        }), e.f0 += e.f2, e.f1 -= e.f4, e.f4 -= 456e-6, yield 1, i = 2;
        break;
      }
      case 2: {
        if (--e.ci0 > 0) {
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
function* d(e) {
  let i = 0, t = 0;
  for (; i >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), i) {
      case 0: {
        e.setScriptFlags(6), e.setMisc129(1), e.setDeathCallbackSub(22), e.setMisc144(5, 3), i = 1;
        break;
      }
      case 1: {
        e.f0 = e.timer + 1.570796, e.f2 = -0.15708, e.autoAnm(), e.callSubAlloc(0, 18), e.isDiff(o | r | a | s) && (yield e.delay(40)), e.moveBounce(60, 4, 1.5), yield 40, i = 2;
        break;
      }
      case 2: {
        e.f0 = e.timer - 1.570796, e.f2 = 0.15708, e.autoAnm(), e.callSubAlloc(1, 18), e.isDiff(o | r | a | s) && (yield e.delay(120)), e.isDiff(f | s) && (yield e.delay(60)), e.f0 = e.timer + 1.570796, e.f2 = -0.15708, e.autoAnm(), e.callSubAlloc(0, 18), e.isDiff(o | r | a | s) && (yield e.delay(20)), e.moveBounce(60, 4, 1.5), yield 40, i = 3;
        break;
      }
      case 3: {
        e.f0 = e.timer - 1.570796, e.f2 = 0.15708, e.autoAnm(), e.callSubAlloc(1, 18), yield 60, i = 4;
        break;
      }
      case 4: {
        e.f1 = -0.785398, e.linkChildRelative(20, 0, 0, 400, -2, 100), e.f1 = -0.392699, e.linkChildRelative(20, 0, 0, 400, -2, 100), e.f1 = 0, e.linkChildRelative(20, 0, 0, 400, -2, 100), e.f1 = 0.392699, e.linkChildRelative(20, 0, 0, 400, -2, 100), e.f1 = 0.785398, e.linkChildRelative(20, 0, 0, 400, -2, 100), e.isDiff(o | r | a | s) && (yield e.delay(180)), e.isDiff(f | s) && (yield e.delay(60)), i = 1;
        break;
      }
      default:
        return;
    }
}
function* _(e) {
  let i = 0, t = 0;
  for (; i >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), i) {
      case 0: {
        e.setAnm(57), e.setHitFlash(1), e.setMisc145(1), e.setBounds(24, 24), e.setMisc160(30), e.f0 = e.timer + e.f1, e.setShotRecord(0, 131072, 0, 300, -1, -1, -1), e.setShotRecord(1, 16, 0, 60, -1, 0.033333, -999.900024), e.holdShots(), e.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 3,
          color: 8,
          count: 1,
          rings: 1,
          speed: 0,
          speed2: 0.5,
          angle: n(10016),
          angleStep: 0.2617994,
          transform: 131602
        }), e.releaseShots(), e.setShotRepeatRand(16), e.clearScriptFlags(1), e.setHeadingSpeed(e.f0, 0.5), e.setSpeedAccel(0.028333), yield 60, i = 1;
        break;
      }
      case 1: {
        e.setSpeedAccel(0), e.setScriptFlags(2), e.setScriptFlags(1), yield 5e3, i = 2;
        break;
      }
      case 2:
        return;
      default:
        return;
    }
}
function* B(e) {
  let i = 0, t = 0;
  for (; i >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), i) {
      case 0: {
        e.setAnmAlt(0), e.setAnmScripts6Alt(0), e.setMisc126(27, 1), yield 1, i = 1;
        break;
      }
      case 1: {
        e.setBossPresent(0), e.setLives(18200), yield 100, i = 2;
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
function* H(e) {
  let i = 0, t = 0;
  for (; i >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), i) {
      case 0: {
        e.endSpell(), e.clearScriptFlags(3), e.moveRelative(60, 4, 192, 128), yield 60, i = 1;
        break;
      }
      case 1: {
        e.setBossPresent(-1), e.setMisc129(1), e.setDeathCallbackSub(21), e.setAnmAlt(0), e.setAnmScripts6Alt(0), e.setMisc126(27, 1), yield 1, i = 2;
        break;
      }
      case 2: {
        e.setBossPresent(0), e.setLives(18200), yield 100, i = 3;
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
function* T(e) {
  let i = 0, t = 0;
  for (; i >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), i) {
      case 0: {
        e.setShotRepeat(0), e.enemyFunc95(), e.setShotSound(-1, -1), e.clearScriptFlags(4), e.setShotOrigin(0, 0), e.setSpellTimer(1800, 29), e.resetSpellTimerSub(), e.setSpellTimerElapsed(0), e.ci3 = 0, e.moveRelative(90, 4, 192, 128), e.isDiff(o | s) && e.startSpell("声符「梟の夜鳴声」", "ミスティア・ローレライ", 13, 0, 15e6), e.isDiff(r | s) && e.startSpell("声符「梟の夜鳴声」", "ミスティア・ローレライ", 14, 0, 15e6), e.isDiff(a | s) && e.startSpell("声符「木菟咆哮」", "ミスティア・ローレライ", 15, 0, 15e6), e.isDiff(f | s) && e.startSpell("声符「木菟咆哮」", "ミスティア・ローレライ", 16, 0, 15e6), yield 90, i = 1;
        break;
      }
      case 1: {
        e.setScriptFlags(4), e.setMisc160(180), e.ci3 = 5, e.f4 = 0.049087, e.f7 = 1.570796, e.f6 = e.f7 / 2.5, i = 2;
        break;
      }
      case 2: {
        e.f0 = e.timer + 1.570796, e.f2 = -0.15708, e.autoAnm(), e.callSubAlloc(0, 24), yield 40, i = 3;
        break;
      }
      case 3: {
        e.f0 = e.timer - 1.570796, e.f2 = 0.15708, e.autoAnm(), e.callSubAlloc(1, 24), yield 120, i = 4;
        break;
      }
      case 4: {
        e.f0 = e.timer + 1.570796, e.f2 = -0.15708, e.autoAnm(), e.callSubAlloc(0, 24), yield 20, i = 5;
        break;
      }
      case 5: {
        e.moveBounce(60, 4, 1.5), yield 40, i = 6;
        break;
      }
      case 6: {
        e.f0 = e.timer - 1.570796, e.f2 = 0.15708, e.autoAnm(), e.callSubAlloc(1, 24), yield 180, i = 7;
        break;
      }
      case 7: {
        i = 2;
        break;
      }
      default:
        return;
    }
}
function* P(e) {
  let i = 0, t = 0;
  for (; i >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), i) {
      case 0: {
        e.isDiff(o | s) && (e.ci0 = 18), e.isDiff(r | a | f | s) && (e.ci0 = 36), e.isDiff(o | s) && (e.f2 *= 2), e.setShotRecord(0, 8192, 0, 60, -1, -1, -1), e.setShotRecord(1, 64, 1, 60, 1, 0, 0), e.f1 = 0.021667, e.f7 = 0.033333, e.setGaugeTimer(0, 0, 0, 0, 0, 0), e.f4 = 5556e-6, e.f5 = 0.02618, e.isDiff(o | s) && (e.i0 = 8), e.isDiff(r | s) && (e.i0 = 8), e.isDiff(a | s) && (e.i0 = 6), e.isDiff(f | s) && (e.i0 = 6), e.isDiff(o | s) && (e.i1 = 4), e.isDiff(r | s) && (e.i1 = 4), e.isDiff(a | s) && (e.i1 = 2), e.isDiff(f | s) && (e.i1 = 2), i = 1;
        break;
      }
      case 1: {
        e.setShotRecord(2, 131072, 0, 60, -1, -1, -1), e.setShotRecord(3, 32, 0, 60, -1, e.f1, e.f5), e.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 6,
          color: n(1e4),
          count: 1,
          rings: 1,
          speed: 3,
          speed2: 0.5,
          angle: n(10016),
          angleStep: 0.2617994,
          transform: 139874
        }), e.setShotRecord(3, 32, 0, 60, -1, e.f7, e.f5), e.isDiff(a | f | s) && e.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 6,
          color: n(1e4),
          count: 1,
          rings: 2,
          speed: 3,
          speed2: 0.5,
          angle: n(10016),
          angleStep: 0.2617994,
          transform: 139874
        }), e.f5 *= -1, e.setShotRecord(3, 32, 0, 60, -1, e.f1, e.f5), e.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 6,
          color: n(10001),
          count: 1,
          rings: 1,
          speed: 3,
          speed2: 0.5,
          angle: n(10016),
          angleStep: 0.2617994,
          transform: 139874
        }), e.setShotRecord(3, 32, 0, 60, -1, e.f7, e.f5), e.isDiff(a | f | s) && e.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 6,
          color: n(10001),
          count: 1,
          rings: 2,
          speed: 3,
          speed2: 0.5,
          angle: n(10016),
          angleStep: 0.2617994,
          transform: 139874
        }), e.f5 *= -1, e.f0 += e.f2, e.f4 -= 347e-6, yield 1, i = 2;
        break;
      }
      case 2: {
        if (--e.ci0 > 0) {
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
function* L(e) {
  let i = 0, t = 0;
  for (; i >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), i) {
      case 0: {
        e.setAnmScripts6Alt(0), e.clearScriptFlags(20), e.setBossPresent(0), e.setBounds(48, 32), e.setMisc160(60), e.eclSetLives(0), e.isDiff(o | r | s) && e.setSpellTimer(18e4, 33), e.isDiff(a | f | s) && e.setSpellTimer(18e4, 44), e.setRelPos(-32, -32), e.moveRelative(60, 4, 192, 128), e.setMisc126(27, 1), yield 100, i = 1;
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
function* V(e) {
  let i = 0, t = 0;
  for (; i >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), i) {
      case 0: {
        e.ci0 = e.i0, e.setShotRecord(0, 8192, 0, 60, -1, -1, -1), e.setShotRecord(1, 64, 1, 60, 1, 0, 0), e.isDiff(o | s) && (e.f1 = 0.083333), e.isDiff(r | s) && (e.f1 = 0.083333), e.isDiff(a | s) && (e.f1 = 0.083333), e.isDiff(f | s) && (e.f1 = 0.111667), e.setGaugeTimer(0, 0, 0, 0, 0, 0), e.f4 = 5833e-6, e.f7 = e.f2 * 1.2, i = 1;
        break;
      }
      case 1: {
        e.setShotRecord(2, 16, 0, 60, -1, e.f1, -999.900024), e.isDiff(o | s) && e.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 3,
          color: 10,
          count: 1,
          rings: 1,
          speed: 3,
          speed2: 0.5,
          angle: n(10016),
          angleStep: 0.2617994,
          transform: 8786
        }), e.isDiff(r | s) && e.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 3,
          color: 10,
          count: 1,
          rings: 3,
          speed: 3,
          speed2: 0.5,
          angle: n(10016),
          angleStep: 0.2617994,
          transform: 8786
        }), e.isDiff(a | s) && e.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 3,
          color: 10,
          count: 2,
          rings: 3,
          speed: 3.5,
          speed2: 0.5,
          angle: n(10016),
          angleStep: n(10023),
          transform: 8786
        }), e.isDiff(f | s) && e.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 3,
          color: 10,
          count: 3,
          rings: 4,
          speed: 4,
          speed2: 0.5,
          angle: n(10016),
          angleStep: n(10023),
          transform: 8786
        }), e.f0 += e.f2, e.f1 -= e.f4, e.f4 -= 456e-6, yield 1, i = 2;
        break;
      }
      case 2: {
        if (--e.ci0 > 0) {
          i = 1;
          break;
        }
        i = 3;
        break;
      }
      case 3: {
        e.ci0 = e.i0, i = 4;
        break;
      }
      case 4: {
        e.setShotRecord(2, 16, 0, 60, -1, e.f1, -999.900024), e.isDiff(o | s) && e.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 3,
          color: 10,
          count: 1,
          rings: 1,
          speed: 3,
          speed2: 0.5,
          angle: n(10016),
          angleStep: 0.2617994,
          transform: 8786
        }), e.isDiff(r | s) && e.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 3,
          color: 10,
          count: 1,
          rings: 3,
          speed: 3,
          speed2: 0.5,
          angle: n(10016),
          angleStep: 0.2617994,
          transform: 8786
        }), e.isDiff(a | s) && e.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 3,
          color: 10,
          count: 2,
          rings: 3,
          speed: 3.5,
          speed2: 0.5,
          angle: n(10016),
          angleStep: n(10023),
          transform: 8786
        }), e.isDiff(f | s) && e.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 3,
          color: 10,
          count: 3,
          rings: 4,
          speed: 4,
          speed2: 0.5,
          angle: n(10016),
          angleStep: n(10023),
          transform: 8786
        }), e.f0 += e.f2, e.f1 += e.f4, e.f4 += 456e-6, yield 1, i = 5;
        break;
      }
      case 5: {
        if (--e.ci0 > 0) {
          i = 4;
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
function* O(e) {
  let i = 0, t = 0;
  for (; i >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), i) {
      case 0: {
        e.setScriptFlags(4), e.setMisc160(120), e.endSpell(), e.setScriptFlags(3), e.setMisc144(5, 3), e.setLives(18200), e.eclSetLives(1), e.setMisc129(2), e.setDeathCallbackSub(29), e.isDiff(o | r | s) && e.setSpellTimer(1920, 33), e.isDiff(o | r | s) && e.setPhase(0, 1950, 33), e.isDiff(a | f | s) && e.setSpellTimer(1920, 38), e.isDiff(a | f | s) && e.setPhase(0, 1800, 38), e.setLifeBarSlice(0, 0, e.phase0, 16752800), e.spawnEffect(6, 1050253722, 1060320051, 1050253722, 1124073472), yield 10, i = 1;
        break;
      }
      case 1: {
        e.spawnEffect(6, -1097229926, 1060320051, 1050253722, 1124073472), yield 10, i = 2;
        break;
      }
      case 2: {
        e.spawnEffect(6, 1050253722, 1060320051, -1097229926, 1124073472), yield 10, i = 3;
        break;
      }
      case 3: {
        e.spawnEffect(6, -1097229926, -1087163597, -1097229926, 1119879168), yield 10, i = 4;
        break;
      }
      case 4: {
        e.spawnEffect(6, 1050253722, -1087163597, -1097229926, 1119879168), yield 10, i = 5;
        break;
      }
      case 5: {
        e.spawnEffect(6, -1097229926, -1087163597, 1050253722, 1119879168), yield 10, i = 6;
        break;
      }
      case 6: {
        e.setMotionClamp(32, 48, 352, 128), e.setScriptFlags(4), e.i0 = 20, i = 7;
        break;
      }
      case 7: {
        e.f0 = e.timer + 1.570796, e.f4 = e.i0 * 0.67, e.f2 = -3.141593 / e.f4, e.autoAnm(), e.callSubAlloc(0, 26), yield 120, i = 8;
        break;
      }
      case 8: {
        e.moveBounce(60, 4, 1.5), e.f0 = e.timer - 1.570796, e.f2 = 3.141593 / e.f4, e.autoAnm(), e.callSubAlloc(0, 26), yield 90, i = 9;
        break;
      }
      case 9: {
        e.moveBounce(60, 4, 1.5), e.i0 += 4, yield 60, i = 10;
        break;
      }
      case 10: {
        e.f1 = -0.785398, e.linkChildRelative(28, 0, 0, 600, -2, 100), e.f1 = -0.392699, e.linkChildRelative(28, 0, 0, 600, -2, 100), e.f1 = 0, e.linkChildRelative(28, 0, 0, 600, -2, 100), e.f1 = 0.392699, e.linkChildRelative(28, 0, 0, 600, -2, 100), e.f1 = 0.785398, e.linkChildRelative(28, 0, 0, 600, -2, 100), e.f1 = -1.178097, e.linkChildRelative(28, 0, 0, 600, -2, 100), e.f1 = 1.178097, e.linkChildRelative(28, 0, 0, 600, -2, 100), yield 180, i = 11;
        break;
      }
      case 11: {
        i = 7;
        break;
      }
      default:
        return;
    }
}
function* X(e) {
  let i = 0, t = 0;
  for (; i >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), i) {
      case 0: {
        e.setAnm(57), e.setHitFlash(1), e.setMisc145(1), e.setBounds(24, 24), e.setMisc160(30), e.f0 = e.timer + e.f1, e.setShotRecord(0, 131072, 0, 300, -1, -1, -1), e.setShotRecord(1, 16384, 0, 7, 3, -1, -1), e.setShotRecord(2, 16, 0, 60, -1, 0.033333, -999.900024), e.holdShots(), e.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 7,
          color: 4,
          count: 1,
          rings: 1,
          speed: 0,
          speed2: 0.5,
          angle: n(10016),
          angleStep: 0.2617994,
          transform: 147986
        }), e.releaseShots(), e.setShotRepeatRand(16), e.clearScriptFlags(1), e.setHeadingSpeed(e.f0, 0.5), e.setSpeedAccel(0.028333), yield 60, i = 1;
        break;
      }
      case 1: {
        e.setSpeedAccel(0), e.setScriptFlags(2), e.setScriptFlags(1), yield 5e3, i = 2;
        break;
      }
      case 2:
        return;
      default:
        return;
    }
}
function* G(e) {
  let i = 0, t = 0;
  for (; i >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), i) {
      case 0: {
        e.setScriptFlags(4), e.endSpell(), e.setMisc144(8, 6), e.setMisc160(240), e.setLives(19e3), e.eclSetLives(0), e.setMisc129(3), e.setDeathCallbackSub(62), e.setSpellTimer(2280, 44), e.setPhase(1, 4100, 44), e.setPhase(0, 2100, 51), e.setLifeBarSlice(1, e.phase0, e.phase1, 16752800), e.setLifeBarSlice(0, 0, e.phase0, 16736352), yield 10, i = 1;
        break;
      }
      case 1: {
        e.setMotionClamp(32, 48, 352, 128), e.moveBounce(60, 4, 1.4), yield 140, i = 2;
        break;
      }
      case 2: {
        e.nop(), e.autoAnm(), e.isDiff(o | s) && (e.ci1 = 120), e.isDiff(r | s) && (e.ci1 = 120), e.isDiff(a | s) && (e.ci1 = 100), e.isDiff(f | s) && (e.ci1 = 70), e.isDiff(o | s) && (e.ci2 = 90), e.isDiff(r | s) && (e.ci2 = 90), e.isDiff(a | s) && (e.ci2 = 70), e.isDiff(f | s) && (e.ci2 = 60), i = 3;
        break;
      }
      case 3: {
        e.f0 = e.timer + 1.570796, e.f2 = -0.12083, e.autoAnm(), e.callSubAlloc(0, 31), yield e.delay(e.ci1), e.moveBounce(60, 4, 1.5), e.f0 = e.timer - 1.570796, e.f2 = 0.12083, e.autoAnm(), e.callSubAlloc(0, 31), yield e.delay(e.ci2), e.moveBounce(60, 4, 1.5), yield 60, i = 4;
        break;
      }
      case 4: {
        e.f1 = 0, e.linkChildRelative(30, 0, 0, 100, -2, 100), e.isDiff(a | f | s) && (e.f1 = e.randF32S * 0.523599), e.isDiff(a | f | s) && e.linkChildRelative(30, 0, 0, 100, -2, 100), e.f1 = 0, yield 10, i = 5;
        break;
      }
      case 5: {
        e.linkChildRelative(30, 0, 0, 100, -2, 100), e.isDiff(a | f | s) && (e.f1 = e.randF32S * 0.523599), e.isDiff(a | f | s) && e.linkChildRelative(30, 0, 0, 100, -2, 100), e.f1 = 0, yield 10, i = 6;
        break;
      }
      case 6: {
        e.linkChildRelative(30, 0, 0, 100, -2, 100), e.isDiff(a | f | s) && (e.f1 = e.randF32S * 0.523599), e.isDiff(a | f | s) && e.linkChildRelative(30, 0, 0, 100, -2, 100), e.f1 = 0, yield 10, i = 7;
        break;
      }
      case 7: {
        e.linkChildRelative(30, 0, 0, 100, -2, 100), e.isDiff(a | f | s) && (e.f1 = e.randF32S * 0.523599), e.isDiff(a | f | s) && e.linkChildRelative(30, 0, 0, 100, -2, 100), e.f1 = 0, yield 10, i = 8;
        break;
      }
      case 8: {
        e.linkChildRelative(30, 0, 0, 100, -2, 100), e.isDiff(a | f | s) && (e.f1 = e.randF32S * 0.523599), e.isDiff(a | f | s) && e.linkChildRelative(30, 0, 0, 100, -2, 100), e.f1 = 0, yield 10, i = 9;
        break;
      }
      case 9: {
        e.linkChildRelative(30, 0, 0, 100, -2, 100), e.isDiff(a | f | s) && (e.f1 = e.randF32S * 0.523599), e.isDiff(a | f | s) && e.linkChildRelative(30, 0, 0, 100, -2, 100), e.isDiff(f | s) && (e.f1 = e.randF32S * 0.523599), e.isDiff(f | s) && e.linkChildRelative(30, 0, 0, 100, -2, 100), e.isDiff(f | s) && (e.f1 = e.randF32S * 0.523599), e.isDiff(f | s) && e.linkChildRelative(30, 0, 0, 100, -2, 100), e.isDiff(f | s) && (e.f1 = e.randF32S * 0.523599), e.isDiff(f | s) && e.linkChildRelative(30, 0, 0, 100, -2, 100), e.isDiff(f | s) && (e.f1 = e.randF32S * 0.523599), e.isDiff(f | s) && e.linkChildRelative(30, 0, 0, 100, -2, 100), yield 180, i = 10;
        break;
      }
      case 10: {
        i = 3;
        break;
      }
      default:
        return;
    }
}
function* U(e) {
  let i = 0, t = 0;
  for (; i >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), i) {
      case 0: {
        e.setAnm(57), e.setHitFlash(1), e.setMisc145(1), e.setBounds(24, 24), e.setMisc160(30), e.f0 = e.timer + e.f1, e.setShotRecord(0, 131072, 0, 120, -1, -1, -1), e.setShotRecord(1, 16384, 0, 7, 3, -1, -1), e.setShotRecord(2, 16, 0, 60, -1, 0.033333, -999.900024), e.holdShots(), e.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 7,
          color: 4,
          count: 1,
          rings: 1,
          speed: 0,
          speed2: 0.5,
          angle: n(10082),
          angleStep: 0.2617994,
          transform: 147986
        }), e.releaseShots(), yield 1, i = 1;
        break;
      }
      case 1: {
        e.isDiff(o | s) && e.setShotRepeatRand(40), e.isDiff(r | s) && e.setShotRepeatRand(11), e.isDiff(a | s) && e.setShotRepeatRand(11), e.isDiff(f | s) && e.setShotRepeatRand(11), e.clearScriptFlags(1), e.setHeadingSpeed(e.f0, 0.5), e.setSpeedAccel(0.066667), yield 20, i = 2;
        break;
      }
      case 2: {
        e.setScriptFlags(1), yield 40, i = 3;
        break;
      }
      case 3: {
        e.setSpeedAccel(0), yield 5e3, i = 4;
        break;
      }
      case 4:
        return;
      default:
        return;
    }
}
function* Y(e) {
  let i = 0, t = 0;
  for (; i >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), i) {
      case 0: {
        e.isDiff(o | s) && (e.ci0 = 15), e.isDiff(r | a | f | s) && (e.ci0 = 30), e.isDiff(o | s) && (e.f2 *= 2), e.setShotRecord(0, 8192, 0, 60, -1, -1, -1), e.setShotRecord(1, 64, 1, 60, 1, 0, 0), e.isDiff(o | s) && (e.f1 = 0.083333), e.isDiff(r | s) && (e.f1 = 0.083333), e.isDiff(a | s) && (e.f1 = 0.083333), e.isDiff(f | s) && (e.f1 = 0.108333), e.setGaugeTimer(0, 0, 0, 0, 0, 0), e.f4 = 5833e-6, i = 1;
        break;
      }
      case 1: {
        e.setShotRecord(2, 16, 0, 60, -1, e.f1, -999.900024), e.f7 = e.f2 * 1.2, e.isDiff(o | r | s) && e.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 3,
          color: 10,
          count: 1,
          rings: 4,
          speed: 3,
          speed2: 0.5,
          angle: n(10016),
          angleStep: 0.2617994,
          transform: 8784
        }), e.isDiff(a | s) && e.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 3,
          color: 10,
          count: 1,
          rings: 5,
          speed: 3.2,
          speed2: 0.5,
          angle: n(10016),
          angleStep: 0.2617994,
          transform: 8784
        }), e.isDiff(f | s) && e.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 3,
          color: 10,
          count: 3,
          rings: 5,
          speed: 3.6,
          speed2: 0.5,
          angle: n(10016),
          angleStep: n(10023),
          transform: 8784
        }), e.f0 += e.f2, e.f1 -= e.f4, e.f4 -= 456e-6, yield 1, i = 2;
        break;
      }
      case 2: {
        if (--e.ci0 > 0) {
          i = 1;
          break;
        }
        i = 3;
        break;
      }
      case 3: {
        e.isDiff(o | s) && (e.ci0 = 15), e.isDiff(r | a | f | s) && (e.ci0 = 30), i = 4;
        break;
      }
      case 4: {
        e.setShotRecord(2, 16, 0, 60, -1, e.f1, -999.900024), e.isDiff(o | r | s) && e.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 3,
          color: 10,
          count: 1,
          rings: 4,
          speed: 3,
          speed2: 0.5,
          angle: n(10016),
          angleStep: 0.2617994,
          transform: 8784
        }), e.isDiff(a | s) && e.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 3,
          color: 10,
          count: 1,
          rings: 5,
          speed: 3.2,
          speed2: 0.5,
          angle: n(10016),
          angleStep: 0.2617994,
          transform: 8784
        }), e.isDiff(f | s) && e.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 3,
          color: 10,
          count: 1,
          rings: 5,
          speed: 3.6,
          speed2: 0.5,
          angle: n(10016),
          angleStep: 0.2617994,
          transform: 8784
        }), e.f0 += e.f2, e.f1 += e.f4, e.f4 += 456e-6, yield 1, i = 5;
        break;
      }
      case 5: {
        if (--e.ci0 > 0) {
          i = 4;
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
function* N(e) {
  let i = 0, t = 0;
  for (; i >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), i) {
      case 0: {
        if (e.timeOrbReady >= 2) {
          i = 2;
          break;
        }
        i = 1;
        break;
      }
      case 1:
        return;
      case 2: {
        e.setAnmScripts6Alt(0), e.clearScriptFlags(8), e.eclSetLives(0), e.setBossPresent(0), e.setLives(1900), e.setLifeBarSlice(0, 0, e.maxHp, 16752800), e.complexSetup(1), e.setMotionClamp(32, 48, 352, 128), yield 70, i = 3;
        break;
      }
      case 3: {
        e.playSfx(5), e.spawnEffectAt(40, 1, -1), yield 4, i = 4;
        break;
      }
      case 4: {
        e.spawnEffectAt(40, 1, -12080), yield 4, i = 5;
        break;
      }
      case 5: {
        e.spawnEffectAt(40, 1, -32640), yield 4, i = 6;
        break;
      }
      case 6: {
        e.spawnEffectAt(40, 1, -49088), yield 50, i = 7;
        break;
      }
      case 7: {
        e.playSfx(15), e.setScriptFlags(8), e.setMisc173(1), e.setMisc129(3), e.setDeathCallbackSub(63), yield* y(e);
        return;
      }
      default:
        return;
    }
}
function* j(e) {
  let i = 0, t = 0;
  for (; i >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), i) {
      case 0: {
        e.setShotRepeat(0), e.enemyFunc95(), e.setShotSound(-1, -1), e.clearScriptFlags(4), e.setShotOrigin(0, 0), e.setSpellTimer(2160, 29), e.resetSpellTimerSub(), e.setSpellTimerElapsed(0), e.ci3 = 0, e.moveRelative(90, 4, 192, 128), e.isDiff(o | s) && e.startSpell("蛾符「天蛾の蠱道」", "ミスティア・ローレライ", 17, 0, 15e6), e.isDiff(r | s) && e.startSpell("蛾符「天蛾の蠱道」", "ミスティア・ローレライ", 18, 0, 15e6), e.isDiff(a | s) && e.startSpell("毒符「毒蛾の鱗粉」", "ミスティア・ローレライ", 19, 0, 15e6), e.isDiff(f | s) && e.startSpell("猛毒「毒蛾の暗闇演舞」", "ミスティア・ローレライ", 20, 0, 15e6), yield 90, i = 1;
        break;
      }
      case 1: {
        e.setScriptFlags(4), e.setMisc160(180), e.setMisc129(2), e.setDeathCallbackSub(29), e.callSubAlloc(0, 35), i = 2;
        break;
      }
      case 2: {
        e.autoAnm(), e.spawnEffectAt(40, 1, -16711681), yield 60, i = 3;
        break;
      }
      case 3: {
        e.callSubAlloc(1, 34), yield 160, i = 4;
        break;
      }
      case 4: {
        e.moveBounce(60, 4, 0.3), yield 60, i = 5;
        break;
      }
      case 5: {
        e.spawnEffectAt(40, 1, -16711681), yield 60, i = 6;
        break;
      }
      case 6: {
        e.callSubAlloc(2, 34), yield 160, i = 7;
        break;
      }
      case 7: {
        e.moveBounce(60, 4, 0.3), e.spawnEffectAt(40, 1, -16711681), yield 60, i = 8;
        break;
      }
      case 8: {
        e.callSubAlloc(1, 34), e.spawnEffectAt(40, 1, -16711681), yield 60, i = 9;
        break;
      }
      case 9: {
        e.callSubAlloc(2, 34), e.spawnEffectAt(40, 1, -16711681), yield 60, i = 10;
        break;
      }
      case 10: {
        e.callSubAlloc(3, 34), yield 200, i = 11;
        break;
      }
      case 11: {
        e.moveBounce(60, 4, 0.3), yield 60, i = 12;
        break;
      }
      case 12: {
        i = 2;
        break;
      }
      default:
        return;
    }
}
function* q(e) {
  let i = 0, t = 0;
  for (; i >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), i) {
      case 0: {
        e.isDiff(o | s) && (e.ci0 = 5), e.isDiff(r | s) && (e.ci0 = 15), e.isDiff(a | s) && (e.ci0 = 15), e.isDiff(f | s) && (e.ci0 = 15), e.setShotRecord(0, 8192, 0, 60, -1, -1, -1), e.setShotRecord(1, 64, 1, 60, 1, 0, 0), e.f0 = e.timer, e.cf0 = e.playerX, e.cf1 = e.playerY, e.setGaugeTimer(0, 0, 0, 0, 0, 0), e.f1 = 1, i = 1;
        break;
      }
      case 1: {
        e.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 7,
          color: 1,
          count: 1,
          rings: 1,
          speed: n(10017),
          speed2: 0.5,
          angle: n(10016),
          angleStep: 0.2617994,
          transform: 520
        }), e.f1 += 0.2, yield 2, i = 2;
        break;
      }
      case 2: {
        if (--e.ci0 > 0) {
          i = 1;
          break;
        }
        i = 3;
        break;
      }
      case 3: {
        e.playSfx(15), e.ci0 = 10;
        return;
      }
      default:
        return;
    }
}
function* J(e) {
  let i = 0, t = 0;
  for (; i >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), i) {
      case 0: {
        e.i0 = 60, i = 1;
        break;
      }
      case 1: {
        e.ci0 = 6, i = 2;
        break;
      }
      case 2: {
        if (e.cf0 = e.randF32 * 32, e.cf1 = e.randF32 * 224, e.cf1 += 32, e.linkChildStandard(37, e.cf0, e.cf1, 50, -2, 100), yield e.delay(e.i0), --e.ci0 > 0) {
          i = 2;
          break;
        }
        i = 3;
        break;
      }
      case 3: {
        e.ci0 = 6, i = 4;
        break;
      }
      case 4: {
        if (e.cf0 = e.randF32 * 32, e.cf0 = 384 - e.cf0, e.cf1 = e.randF32 * 224, e.cf1 += 32, e.linkChildStandard(37, e.cf0, e.cf1, 50, -2, 100), yield e.delay(e.i0), --e.ci0 > 0) {
          i = 4;
          break;
        }
        i = 5;
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
function* K(e) {
  let i = 0, t = 0;
  for (; i >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), i) {
      case 0: {
        e.isDiff(o | s) && (e.ci0 = e.randU31 % 2), e.isDiff(r | s) && (e.ci0 = e.randU31 % 5), e.isDiff(a | s) && (e.ci0 = 6), e.isDiff(f | s) && (e.ci0 = 6), e.ci0 += 1, e.f4 = e.randF32S * 0.024544, e.f5 = e.f4 + 1.570796, e.f6 = e.f4 + -1.570796, e.f7 = e.randF32 * 1667e-6, e.f7 += 0.026667, e.setShotRecord(0, 131072, 0, 120, -1, -1, -1), e.setShotRecord(1, 16384, 0, 6, 4, -1, -1), i = 1;
        break;
      }
      case 1: {
        e.setShotRecord(2, 16, 0, 60, -1, e.f7, e.f5), e.spawnShot({
          mode: "aimedRing",
          // aim 2 of 96..104
          type: 3,
          color: 5,
          count: 1,
          rings: 1,
          speed: 0,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.2617994,
          transform: 147986
        }), e.setShotRecord(2, 16, 0, 60, -1, e.f7, e.f6), e.spawnShot({
          mode: "aimedRing",
          // aim 2 of 96..104
          type: 3,
          color: 5,
          count: 1,
          rings: 1,
          speed: 0,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.2617994,
          transform: 147986
        }), yield 15, i = 2;
        break;
      }
      case 2: {
        if (--e.ci0 > 0) {
          i = 1;
          break;
        }
        i = 3;
        break;
      }
      case 3: {
        e.isDiff(o | s) && (e.ci0 = 3), e.isDiff(r | s) && (e.ci0 = 6), e.isDiff(a | s) && (e.ci0 = 6), e.isDiff(f | s) && (e.ci0 = 6), e.isDiff(o | s) && (yield e.delay(40)), yield 30, i = 4;
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
function* Q(e) {
  let i = 0, t = 0;
  for (; i >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), i) {
      case 0: {
        if (e.setAnm(57), e.setHitFlash(1), e.setMisc145(1), e.setBounds(24, 24), e.setMisc160(30), e.posX >= 192) {
          i = 2;
          break;
        }
        i = 1;
        break;
      }
      case 1: {
        e.cf0 = e.posX + 320, i = 3;
        break;
      }
      case 2: {
        e.cf0 = e.posX - 320, i = 3;
        break;
      }
      case 3: {
        e.cf1 = e.randF32S * 64, e.cf1 += e.posY, e.moveRelative(240, 0, e.cf0, e.cf1), e.callSubAlloc(0, 36), e.clearScriptFlags(1), yield 60, i = 4;
        break;
      }
      case 4: {
        e.setScriptFlags(2), e.setScriptFlags(1), yield 180, i = 5;
        break;
      }
      case 5:
        return;
      default:
        return;
    }
}
function* W(e) {
  let i = 0, t = 0;
  for (; i >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), i) {
      case 0: {
        e.setShotRepeat(0), e.enemyFunc95(), e.setShotSound(-1, -1), e.clearScriptFlags(4), e.setShotOrigin(0, 0), e.setSpellTimer(2280, 29), e.resetSpellTimerSub(), e.setSpellTimerElapsed(0), e.ci3 = 0, e.moveRelative(90, 4, 192, 128), e.isDiff(a | s) && e.startSpell("毒符「毒蛾の鱗粉」", "ミスティア・ローレライ", 19, 0, 15e6), e.isDiff(f | s) && e.startSpell("猛毒「毒蛾の暗闇演舞」", "ミスティア・ローレライ", 20, 0, 15e6), yield 90, i = 1;
        break;
      }
      case 1: {
        e.setScriptFlags(4), e.setMisc160(180), e.setMisc129(2), e.setDeathCallbackSub(29), e.callSubAlloc(0, 40), e.callSubAlloc(3, 41), i = 2;
        break;
      }
      case 2: {
        e.autoAnm(), e.spawnEffectAt(40, 1, -16711681), yield 60, i = 3;
        break;
      }
      case 3: {
        e.callSubAlloc(1, 39), yield 160, i = 4;
        break;
      }
      case 4: {
        e.moveBounce(60, 4, 0.9), yield 60, i = 5;
        break;
      }
      case 5: {
        e.spawnEffectAt(40, 1, -16711681), yield 60, i = 6;
        break;
      }
      case 6: {
        e.callSubAlloc(2, 39), yield 160, i = 7;
        break;
      }
      case 7: {
        e.moveBounce(60, 4, 0.9), e.spawnEffectAt(40, 1, -16711681), yield 60, i = 8;
        break;
      }
      case 8: {
        e.callSubAlloc(1, 39), yield 200, i = 9;
        break;
      }
      case 9: {
        e.moveBounce(60, 4, 0.9), yield 60, i = 10;
        break;
      }
      case 10: {
        i = 2;
        break;
      }
      default:
        return;
    }
}
function* Z(e) {
  let i = 0, t = 0;
  for (; i >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), i) {
      case 0: {
        e.isDiff(o | s) && (e.ci0 = 5), e.isDiff(r | s) && (e.ci0 = 15), e.isDiff(a | s) && (e.ci0 = 15), e.isDiff(f | s) && (e.ci0 = 15), e.setShotRecord(0, 8192, 0, 60, -1, -1, -1), e.setShotRecord(1, 64, 1, 60, 1, 0, 0), e.f0 = e.timer, e.cf0 = e.playerX, e.cf1 = e.playerY, e.setGaugeTimer(0, 0, 0, 0, 0, 0), e.f1 = 1, i = 1;
        break;
      }
      case 1: {
        e.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 7,
          color: 2,
          count: 1,
          rings: 1,
          speed: n(10017),
          speed2: 0.5,
          angle: n(10016),
          angleStep: 0.2617994,
          transform: 520
        }), e.f1 += 0.2, yield 2, i = 2;
        break;
      }
      case 2: {
        if (--e.ci0 > 0) {
          i = 1;
          break;
        }
        i = 3;
        break;
      }
      case 3: {
        e.playSfx(15), e.ci0 = 10;
        return;
      }
      default:
        return;
    }
}
function* $(e) {
  let i = 0, t = 0;
  for (; i >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), i) {
      case 0: {
        e.i0 = 60, i = 1;
        break;
      }
      case 1: {
        e.ci0 = 2, i = 2;
        break;
      }
      case 2: {
        if (e.cf0 = e.randF32 * 32, e.cf1 = e.randF32 * 32, e.cf1 += 256, e.linkChildStandard(43, e.cf0, e.cf1, 50, -2, 100), yield e.delay(e.i0), --e.ci0 > 0) {
          i = 2;
          break;
        }
        i = 3;
        break;
      }
      case 3: {
        e.ci0 = 2, i = 4;
        break;
      }
      case 4: {
        if (e.cf0 = e.randF32 * 32, e.cf0 = 384 - e.cf0, e.cf1 = e.randF32 * 32, e.cf1 += 256, e.linkChildStandard(43, e.cf0, e.cf1, 50, -2, 100), yield e.delay(e.i0), --e.ci0 > 0) {
          i = 4;
          break;
        }
        i = 5;
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
function* e0(e) {
  let i = 0;
  yield 120;
  let t = 0;
  for (; i >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), i) {
      case 0: {
        e.i0 = 60, i = 1;
        break;
      }
      case 1: {
        e.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 2,
          color: 4,
          count: 32,
          rings: 1,
          speed: 1.8,
          speed2: 1.5,
          angle: n(10082),
          angleStep: 0.03926991,
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
function* i0(e) {
  let i = 0, t = 0;
  for (; i >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), i) {
      case 0: {
        if (e.i0 = e.randU31 % 2, e.f0 = e.randAngle, e.isDiff(o | s) && (e.f2 = 0.04), e.isDiff(r | s) && (e.f2 = 0.04), e.isDiff(a | s) && (e.f2 = 0.033333), e.isDiff(f | s) && (e.f2 = 0.033333), e.isDiff(o | s) && (e.ci1 = 5), e.isDiff(r | s) && (e.ci1 = 5), e.isDiff(a | s) && (e.ci1 = 5), e.isDiff(f | s) && (e.ci1 = 4), e.setShotRecord(0, 131072, 0, 50, -1, -1, -1), e.difficulty != 2) {
          i = 2;
          break;
        }
        i = 1;
        break;
      }
      case 1: {
        e.setShotRecord(1, 16384, 0, 6, 4, -1, -1), i = 3;
        break;
      }
      case 2: {
        e.setShotRecord(1, 16384, 0, 6, 2, -1, -1), i = 3;
        break;
      }
      case 3: {
        e.ci0 = 6, i = 4;
        break;
      }
      case 4: {
        if (e.setShotRecord(2, 16, 0, 60, -1, e.f2, e.f0), e.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 3,
          color: 5,
          count: 1,
          rings: 1,
          speed: 0,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.2617994,
          transform: 147986
        }), e.f0 += 2.094395, e.f0 = l(e.f0), e.setShotRecord(2, 16, 0, 60, -1, e.f2, e.f0), e.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 3,
          color: 5,
          count: 1,
          rings: 1,
          speed: 0,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.2617994,
          transform: 147986
        }), e.f0 += 2.094395, e.f0 = l(e.f0), e.setShotRecord(2, 16, 0, 60, -1, e.f2, e.f0), e.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 3,
          color: 5,
          count: 1,
          rings: 1,
          speed: 0,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.2617994,
          transform: 147986
        }), e.f0 += 2.094395, e.f0 += e.f1, e.f0 = l(e.f0), yield e.delay(e.ci1), --e.ci0 > 0) {
          i = 4;
          break;
        }
        i = 5;
        break;
      }
      case 5: {
        e.isDiff(a | s) && (yield e.delay(30)), yield 10, i = 6;
        break;
      }
      case 6: {
        i = 3;
        break;
      }
      default:
        return;
    }
}
function* s0(e) {
  let i = 0, t = 0;
  for (; i >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), i) {
      case 0: {
        if (e.setAnm(57), e.setHitFlash(1), e.setMisc145(1), e.setBounds(24, 24), e.setMisc160(30), e.posX >= 192) {
          i = 2;
          break;
        }
        i = 1;
        break;
      }
      case 1: {
        e.cf0 = e.posX + 320, e.f1 = 0.19635, i = 3;
        break;
      }
      case 2: {
        e.cf0 = e.posX - 320, e.f1 = -0.19635, i = 3;
        break;
      }
      case 3: {
        e.moveRelative(240, 0, e.cf0, 32), e.callSubAlloc(0, 42), e.clearScriptFlags(1), yield 60, i = 4;
        break;
      }
      case 4: {
        e.setScriptFlags(2), e.setScriptFlags(1), yield 180, i = 5;
        break;
      }
      case 5:
        return;
      default:
        return;
    }
}
function* t0(e) {
  let i = 0, t = 0;
  for (; i >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), i) {
      case 0: {
        e.setMisc129(3), e.setDeathCallbackSub(51), e.setShotRepeat(0), e.enemyFunc95(), e.setShotSound(-1, -1), e.clearScriptFlags(4), e.setShotOrigin(0, 0), e.setSpellTimer(2220, 29), e.resetSpellTimerSub(), e.setSpellTimerElapsed(0), e.ci3 = 0, e.moveRelative(90, 4, 192, 128), e.isDiff(o | s) && e.startSpell("鷹符「イルスタードダイブ」", "ミスティア・ローレライ", 21, 0, 15e6), e.isDiff(r | s) && e.startSpell("鷹符「イルスタードダイブ」", "ミスティア・ローレライ", 22, 0, 15e6), e.isDiff(a | s) && e.startSpell("鷹符「イルスタードダイブ」", "ミスティア・ローレライ", 23, 0, 15e6), e.isDiff(f | s) && e.startSpell("鷹符「イルスタードダイブ」", "ミスティア・ローレライ", 24, 0, 15e6), yield 90, i = 1;
        break;
      }
      case 1: {
        e.setScriptFlags(4), e.setMisc160(180), e.ci3 = 5, e.f4 = 0.049087, e.f7 = 1.570796, e.f6 = e.f7 / 2.5, e.callSubAlloc(0, 45), e.ci2 = 1, i = 2;
        break;
      }
      case 2: {
        if (e.autoAnm(), e.f2 = -0.040277, e.f1 = 1.570796, e.linkChildRelative(47, 0, 0, 20, -1, 10), e.f1 = 2.094395, e.linkChildRelative(47, 0, 0, 20, -1, 10), e.isDiff(a | f | s) && (e.f1 = 2.617994), e.isDiff(a | f | s) && e.linkChildRelative(47, 0, 0, 20, -1, 10), e.f2 = 0.040277, e.f1 = -1.570796, e.linkChildRelative(47, 0, 0, 20, -1, 10), e.f1 = -2.094395, e.linkChildRelative(47, 0, 0, 20, -1, 10), e.isDiff(a | f | s) && (e.f1 = -2.617994), e.isDiff(a | f | s) && e.linkChildRelative(47, 0, 0, 20, -1, 10), e.ci2 != 1) {
          yield 60, i = 6;
          break;
        }
        i = 3;
        break;
      }
      case 3: {
        e.playSfx(5), yield* c(e), i = 4;
        break;
      }
      case 4: {
        e.setMisc136(1, 0), e.playSfx(15), yield 30, i = 5;
        break;
      }
      case 5: {
        e.callSubAlloc(0, 50), e.ci2 = 0, yield 60, i = 7;
        break;
      }
      case 6: {
        yield e.delay(60), yield 60, i = 7;
        break;
      }
      case 7: {
        if (e.moveBounce(60, 4, 0.8), e.parentChainCount >= 3) {
          yield 60, i = 9;
          break;
        }
        i = 8;
        break;
      }
      case 8: {
        e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 3,
          color: 2,
          count: 11,
          rings: 2,
          speed: 2,
          speed2: 1.9,
          angle: 0,
          angleStep: 0.19634955,
          transform: 147986
        }), yield 60, i = 9;
        break;
      }
      case 9: {
        e.autoAnm(), e.f2 = 0, e.f1 = 0.785398, e.linkChildRelative(49, 0, 0, 20, -1, 10), e.f1 = 0.392699, e.linkChildRelative(49, 0, 0, 20, -1, 10), e.f1 = 0, e.linkChildRelative(49, 0, 0, 20, -1, 10), e.f1 = -0.785398, e.linkChildRelative(49, 0, 0, 20, -1, 10), e.f1 = -0.392699, e.linkChildRelative(49, 0, 0, 20, -1, 10), e.ci3++, yield 180, i = 10;
        break;
      }
      case 10: {
        i = 2;
        break;
      }
      default:
        return;
    }
}
function* f0(e) {
  let i = 0, t = 0;
  for (; i >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), i) {
      case 0: {
        if (e.hpRatio >= 128) {
          yield 30, i = 2;
          break;
        }
        i = 1;
        break;
      }
      case 1: {
        e.isDiff(o | r | a | s) && e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 3,
          color: 2,
          count: 11,
          rings: 2,
          speed: 2,
          speed2: 1.9,
          angle: 0,
          angleStep: 0.19634955,
          transform: 147986
        }), e.isDiff(f | s) && e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 3,
          color: 2,
          count: 11,
          rings: 2,
          speed: 4,
          speed2: 1.9,
          angle: 0,
          angleStep: 0.19634955,
          transform: 147986
        }), yield 30, i = 2;
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
function* a0(e) {
  let i = 0, t = 0;
  for (; i >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), i) {
      case 0: {
        e.setShotRecord(0, 131072, 0, 60, -1, -1, -1), e.setShotRecord(1, 16384, 0, 6, 6, -1, -1), e.isDiff(o | s) && (e.i0 = 32), e.isDiff(r | s) && (e.i0 = 32), e.isDiff(a | s) && (e.i0 = 20), e.isDiff(f | s) && (e.i0 = 16), i = 1;
        break;
      }
      case 1: {
        e.setShotRecord(2, 16, 0, 60, -1, 0.016667, -999.900024), e.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 3,
          color: 8,
          count: 2,
          rings: 1,
          speed: 0,
          speed2: 0.5,
          angle: n(10069),
          angleStep: 1.5707964,
          transform: 147986
        }), e.setShotRecord(2, 16, 0, 60, -1, 0.033333, -999.900024), e.isDiff(f | s) && e.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 3,
          color: 8,
          count: 2,
          rings: 1,
          speed: 0,
          speed2: 0.5,
          angle: n(10069),
          angleStep: 1.5707964,
          transform: 147986
        }), yield e.delay(e.i0), i = 1;
        break;
      }
      default:
        return;
    }
}
function* r0(e) {
  let i = 0, t = 0;
  for (; i >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), i) {
      case 0: {
        e.setAnm(58), e.setHitFlash(1), e.setMisc145(1), e.setBounds(24, 24), e.setMisc160(30), e.clearScriptFlags(16), e.f0 = e.timer + e.f1, e.callSubAlloc(0, 46), e.clearScriptFlags(1), e.setHeadingSpeed(e.f0, 2.5), e.setHeadingVel(e.f2), e.setSpeedAccel(-8333e-6), yield 60, i = 1;
        break;
      }
      case 1: {
        e.setSpeedAccel(0), e.setHeadingVel(0), e.setScriptFlags(1), yield 100, i = 2;
        break;
      }
      case 2: {
        e.setScriptFlags(16), yield 5e3, i = 3;
        break;
      }
      case 3:
        return;
      default:
        return;
    }
}
function* n0(e) {
  let i = 0, t = 0;
  for (; i >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), i) {
      case 0: {
        e.setShotRecord(0, 131072, 0, 60, -1, -1, -1), e.setShotRecord(1, 16384, 0, 6, 2, -1, -1), e.isDiff(o | s) && (e.i0 = 26), e.isDiff(r | s) && (e.i0 = 26), e.isDiff(a | s) && (e.i0 = 18), e.isDiff(f | s) && (e.i0 = 18), i = 1;
        break;
      }
      case 1: {
        e.setShotRecord(2, 16, 0, 60, -1, 0.016667, -999.900024), e.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 3,
          color: 8,
          count: 2,
          rings: 1,
          speed: 0,
          speed2: 0.5,
          angle: n(10069),
          angleStep: 1.5707964,
          transform: 147986
        }), e.setShotRecord(2, 16, 0, 60, -1, 0.025, -999.900024), e.isDiff(f | s) && e.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 3,
          color: 8,
          count: 2,
          rings: 1,
          speed: 0,
          speed2: 0.5,
          angle: n(10069),
          angleStep: 1.5707964,
          transform: 147986
        }), yield e.delay(e.i0), i = 1;
        break;
      }
      default:
        return;
    }
}
function* o0(e) {
  let i = 0, t = 0;
  for (; i >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), i) {
      case 0: {
        e.setAnm(58), e.setHitFlash(1), e.setMisc145(1), e.setBounds(24, 24), e.setMisc160(30), e.clearScriptFlags(16), e.f0 = e.timer + e.f1, e.isDiff(o | s) && e.callSubAlloc(0, 46), e.isDiff(r | a | f | s) && e.callSubAlloc(0, 48), e.clearScriptFlags(1), e.setHeadingSpeed(e.f0, 2.5), e.setHeadingVel(e.f2), e.setSpeedAccel(-8333e-6), yield 60, i = 1;
        break;
      }
      case 1: {
        e.setSpeedAccel(0), e.setHeadingVel(0), e.setScriptFlags(1), yield 100, i = 2;
        break;
      }
      case 2: {
        e.setScriptFlags(16), yield 5e3, i = 3;
        break;
      }
      case 3:
        return;
      default:
        return;
    }
}
function* l0(e) {
  let i = 0, t = 0;
  for (; i >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), i) {
      case 0: {
        e.interpSlot(10017, 10, 4, 0, 0, 255, 0, 0), e.isDiff(o | s) && e.interpSlot(10016, 120, 4, 0, 440, 320, 0, 0), e.isDiff(r | s) && e.interpSlot(10016, 120, 4, 0, 440, 288, 0, 0), e.isDiff(a | s) && e.interpSlot(10016, 120, 4, 0, 440, 256, 0, 0), e.isDiff(f | s) && e.interpSlot(10016, 120, 4, 0, 440, 224, 0, 0), e.ci0 = 125, i = 1;
        break;
      }
      case 1: {
        e.i0 = e.f1, e.setMisc136(0, 0), yield 1, i = 2;
        break;
      }
      case 2: {
        if (--e.ci0 > 0) {
          i = 1;
          break;
        }
        i = 3;
        break;
      }
      case 3: {
        e.i0 = 255, i = 4;
        break;
      }
      case 4: {
        e.setMisc136(0, 0), yield 1, i = 5;
        break;
      }
      case 5: {
        i = 4;
        break;
      }
      default:
        return;
    }
}
function* c0(e) {
  let i = 0, t = 0;
  for (; i >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), i) {
      case 0: {
        e.setSpellTimer(99999, 62), e.setMisc129(3), e.setDeathCallbackSub(62), e.callSubAlloc(0, 57), e.setMisc160(120), e.endSpell(), e.spawnItemRandom(8), e.spawnItemBatch(5), yield 80, i = 1;
        break;
      }
      case 1: {
        yield* p(e);
        return;
      }
      default:
        return;
    }
}
function* p(e) {
  let i = 0, t = 0;
  for (; i >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), i) {
      case 0: {
        e.setShotRepeat(0), e.enemyFunc95(), e.setShotSound(-1, -1), e.clearScriptFlags(4), e.setShotOrigin(0, 0), e.setSpellTimer(2220, 29), e.resetSpellTimerSub(), e.setSpellTimerElapsed(0), e.ci3 = 0, e.moveRelative(90, 4, 192, 128), e.isDiff(o | s) && e.startSpell("夜盲「夜雀の歌」", "ミスティア・ローレライ", 25, 0, 15e6), e.isDiff(r | s) && e.startSpell("夜盲「夜雀の歌」", "ミスティア・ローレライ", 26, 0, 15e6), e.isDiff(a | s) && e.startSpell("夜盲「夜雀の歌」", "ミスティア・ローレライ", 27, 0, 15e6), e.isDiff(f | s) && e.startSpell("夜盲「夜雀の歌」", "ミスティア・ローレライ", 28, 0, 15e6), yield 90, i = 1;
        break;
      }
      case 1: {
        e.setScriptFlags(4), e.setMisc160(360), e.ci3 = 5, e.f4 = 0.049087, e.f7 = 1.570796, e.f6 = e.f7 / 2.5, e.f2 = 0, e.f1 = -3.141593, e.ci0 = 8, i = 2;
        break;
      }
      case 2: {
        if (e.linkChildRelative(49, 0, 0, 20, -1, 10), e.f1 += 0.785398, --e.ci0 > 0) {
          i = 2;
          break;
        }
        i = 3;
        break;
      }
      case 3: {
        if (e.hpRatio >= 128) {
          yield 60, i = 5;
          break;
        }
        i = 4;
        break;
      }
      case 4: {
        e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 7,
          color: 1,
          count: 5,
          rings: 1,
          speed: 3,
          speed2: 0.5,
          angle: n(10069),
          angleStep: 0.09817477,
          transform: 514
        }), yield 60, i = 5;
        break;
      }
      case 5: {
        e.f2 = 0, e.f1 = -2.748893, e.ci0 = 8, i = 6;
        break;
      }
      case 6: {
        if (e.linkChildRelative(49, 0, 0, 20, -1, 10), e.f1 += 0.785398, --e.ci0 > 0) {
          i = 6;
          break;
        }
        i = 7;
        break;
      }
      case 7: {
        if (e.hpRatio >= 128) {
          i = 9;
          break;
        }
        i = 8;
        break;
      }
      case 8: {
        e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 7,
          color: 1,
          count: 4,
          rings: 2,
          speed: 3,
          speed2: 0.5,
          angle: n(10069),
          angleStep: 0.09817477,
          transform: 514
        }), i = 9;
        break;
      }
      case 9: {
        e.playSfx(5), yield* c(e), i = 10;
        break;
      }
      case 10: {
        e.setMisc136(1, 0), e.playSfx(15), yield 30, i = 11;
        break;
      }
      case 11: {
        e.callSubAlloc(0, 56), yield 120, i = 12;
        break;
      }
      case 12: {
        e.nop(), i = 13;
        break;
      }
      case 13: {
        e.f2 = 0, e.f1 = -3.141593, e.ci0 = 8, i = 14;
        break;
      }
      case 14: {
        if (e.linkChildRelative(55, 0, 0, 20, -1, 10), e.f1 += 0.785398, --e.ci0 > 0) {
          i = 14;
          break;
        }
        i = 15;
        break;
      }
      case 15: {
        if (e.hpRatio >= 128) {
          yield 60, i = 17;
          break;
        }
        i = 16;
        break;
      }
      case 16: {
        e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 7,
          color: 1,
          count: 5,
          rings: 1,
          speed: 3,
          speed2: 0.5,
          angle: n(10069),
          angleStep: 0.09817477,
          transform: 514
        }), yield 60, i = 17;
        break;
      }
      case 17: {
        e.f2 = 0, e.f1 = -2.748893, e.ci0 = 8, i = 18;
        break;
      }
      case 18: {
        if (e.linkChildRelative(55, 0, 0, 20, -1, 10), e.f1 += 0.785398, --e.ci0 > 0) {
          i = 18;
          break;
        }
        i = 19;
        break;
      }
      case 19: {
        if (e.hpRatio >= 128) {
          yield 120, i = 21;
          break;
        }
        i = 20;
        break;
      }
      case 20: {
        e.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 7,
          color: 1,
          count: 4,
          rings: 2,
          speed: 3,
          speed2: 0.5,
          angle: n(10069),
          angleStep: 0.09817477,
          transform: 514
        }), yield 120, i = 21;
        break;
      }
      case 21: {
        e.moveBounce(60, 4, 0.8), e.ci3++, yield 20, i = 22;
        break;
      }
      case 22: {
        i = 13;
        break;
      }
      default:
        return;
    }
}
function* c(e) {
  let i = 0, t = 0;
  for (; i >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), i) {
      case 0: {
        e.ci0 = 32, i = 1;
        break;
      }
      case 1: {
        e.spawnEffectAt(17, 4, -1), yield 1, i = 2;
        break;
      }
      case 2: {
        if (--e.ci0 > 0) {
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
function* d0(e) {
  let i = 0, t = 0;
  for (; i >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), i) {
      case 0: {
        e.setShotRecord(0, 131072, 0, 60, -1, -1, -1), e.setShotRecord(1, 16384, 0, 6, 2, -1, -1), e.setShotRecord(2, 16, 0, 60, -1, 0.016667, -999.900024), e.isDiff(o | s) && (e.i0 = 23), e.isDiff(r | s) && (e.i0 = 24), e.isDiff(a | s) && (e.i0 = 22), e.isDiff(f | s) && (e.i0 = 18), i = 1;
        break;
      }
      case 1: {
        e.setShotRecord(2, 16, 0, 60, -1, 0.02, -999.900024), e.isDiff(o | s) && e.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 7,
          color: 4,
          count: 2,
          rings: 1,
          speed: 0,
          speed2: 0.5,
          angle: n(10069),
          angleStep: 1.5707964,
          transform: 147986
        }), e.isDiff(r | s) && e.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 7,
          color: 4,
          count: 2,
          rings: 1,
          speed: 0,
          speed2: 0.5,
          angle: n(10069),
          angleStep: 1.5707964,
          transform: 147986
        }), e.isDiff(a | s) && e.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 7,
          color: 4,
          count: 2,
          rings: 1,
          speed: 0,
          speed2: 0.5,
          angle: n(10069),
          angleStep: 1.5707964,
          transform: 147986
        }), e.isDiff(f | s) && e.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 7,
          color: 4,
          count: 2,
          rings: 1,
          speed: 0,
          speed2: 0.5,
          angle: n(10069),
          angleStep: 1.5707964,
          transform: 147986
        }), e.setShotRecord(2, 16, 0, 60, -1, 0.013333, -999.900024), e.isDiff(r | s) && e.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 7,
          color: 4,
          count: 2,
          rings: 1,
          speed: 0,
          speed2: 0.5,
          angle: n(10069),
          angleStep: 1.5707964,
          transform: 147986
        }), e.isDiff(a | s) && e.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 7,
          color: 4,
          count: 2,
          rings: 1,
          speed: 0,
          speed2: 0.5,
          angle: n(10069),
          angleStep: 1.5707964,
          transform: 147986
        }), e.isDiff(f | s) && e.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 7,
          color: 4,
          count: 2,
          rings: 1,
          speed: 0,
          speed2: 0.5,
          angle: n(10069),
          angleStep: 1.5707964,
          transform: 147986
        }), yield e.delay(e.i0), i = 1;
        break;
      }
      default:
        return;
    }
}
function* p0(e) {
  let i = 0, t = 0;
  for (; i >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), i) {
      case 0: {
        e.setAnm(58), e.setHitFlash(1), e.setMisc145(1), e.setBounds(24, 24), e.setMisc160(30), e.clearScriptFlags(16), e.f0 = e.timer + e.f1, e.callSubAlloc(0, 54), e.clearScriptFlags(1), e.setHeadingSpeed(e.f0, 2.5), e.setHeadingVel(e.f2), e.setSpeedAccel(-8333e-6), yield 60, i = 1;
        break;
      }
      case 1: {
        e.setSpeedAccel(0), e.setHeadingVel(0), e.setScriptFlags(1), yield 100, i = 2;
        break;
      }
      case 2: {
        e.setScriptFlags(16), yield 5e3, i = 3;
        break;
      }
      case 3:
        return;
      default:
        return;
    }
}
function* y0(e) {
  let i = 0, t = 0;
  for (; i >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), i) {
      case 0: {
        e.isDiff(o | s) && (e.f0 = 320), e.isDiff(r | s) && (e.f0 = 288), e.isDiff(a | s) && (e.f0 = 256), e.isDiff(f | s) && (e.f0 = 224), e.i0 = 255, e.isDiff(o | s) && e.interpSlot(10016, 120, 4, 0, 320, 192, 0, 0), e.isDiff(r | s) && e.interpSlot(10016, 120, 4, 0, 288, 128, 0, 0), e.isDiff(a | s) && e.interpSlot(10016, 120, 4, 0, 256, 96, 0, 0), e.isDiff(f | s) && e.interpSlot(10016, 120, 4, 0, 224, 64, 0, 0), e.ci0 = 125, i = 1;
        break;
      }
      case 1: {
        e.setMisc136(0, 0), yield 1, i = 2;
        break;
      }
      case 2: {
        if (--e.ci0 > 0) {
          i = 1;
          break;
        }
        i = 3;
        break;
      }
      case 3: {
        e.isDiff(o | s) && e.interpSlot(10016, 1800, 0, 0, 192, 128, 0, 0), e.isDiff(r | s) && e.interpSlot(10016, 1800, 0, 0, 128, 64, 0, 0), e.isDiff(a | s) && e.interpSlot(10016, 1800, 0, 0, 96, 56, 0, 0), e.isDiff(f | s) && e.interpSlot(10016, 1800, 0, 0, 64, 48, 0, 0), e.i0 = 255, i = 4;
        break;
      }
      case 4: {
        e.setMisc136(0, 0), yield 1, i = 5;
        break;
      }
      case 5: {
        i = 4;
        break;
      }
      default:
        return;
    }
}
function* u0(e) {
  let i = 0, t = 0;
  for (; i >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), i) {
      case 0: {
        e.isDiff(o | s) && (e.f0 = 320), e.isDiff(r | s) && (e.f0 = 288), e.isDiff(a | s) && (e.f0 = 256), e.isDiff(f | s) && (e.f0 = 224), e.i0 = 255, i = 1;
        break;
      }
      case 1: {
        e.setMisc136(0, 0), yield 1, i = 2;
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
function* y(e) {
  let i = 0, t = 0;
  for (; i >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), i) {
      case 0: {
        e.setShotRepeat(0), e.enemyFunc95(), e.setShotSound(-1, -1), e.clearScriptFlags(4), e.setShotOrigin(0, 0), e.setSpellTimer(2400, 63), e.resetSpellTimerSub(), e.setSpellTimerElapsed(0), e.ci3 = 0, e.moveRelative(90, 4, 192, 128), e.isDiff(r | s) && e.startSpell("夜雀「真夜中のコーラスマスター」", "ミスティア・ローレライ", 29, 0, 15e6), e.isDiff(a | s) && e.startSpell("夜雀「真夜中のコーラスマスター」", "ミスティア・ローレライ", 30, 0, 15e6), e.isDiff(f | s) && e.startSpell("夜雀「真夜中のコーラスマスター」", "ミスティア・ローレライ", 31, 0, 15e6), yield 90, i = 1;
        break;
      }
      case 1: {
        e.setScriptFlags(4), e.setMisc160(120), e.setMisc136(1, 0), e.playSfx(15), yield 30, i = 2;
        break;
      }
      case 2: {
        e.callSubAlloc(3, 60), e.isDiff(o | s) && (e.i0 = 180), e.isDiff(r | s) && (e.i0 = 180), e.isDiff(a | s) && (e.i0 = 140), e.isDiff(f | s) && (e.i0 = 120), i = 3;
        break;
      }
      case 3: {
        e.f0 = e.timer + 1.570796, e.f2 = -0.12083, e.autoAnm(), e.callSubAlloc(0, 61), yield 60, i = 4;
        break;
      }
      case 4: {
        e.moveBounce(60, 4, 1.5), e.f0 = e.timer - 1.570796, e.f2 = 0.12083, e.autoAnm(), e.callSubAlloc(0, 61), yield 60, i = 5;
        break;
      }
      case 5: {
        e.moveBounce(60, 4, 1.5), e.f0 = e.timer + 1.570796, e.f2 = -0.12083, e.autoAnm(), e.callSubAlloc(0, 61), yield 60, i = 6;
        break;
      }
      case 6: {
        e.moveBounce(60, 4, 1.5), yield 60, i = 7;
        break;
      }
      case 7: {
        e.f1 = 0, e.linkChildRelative(59, 0, 0, 100, -2, 100), e.f1 = e.randF32S * 0.392699, e.linkChildRelative(59, 0, 0, 100, -2, 100), e.f1 = 0, yield 10, i = 8;
        break;
      }
      case 8: {
        e.linkChildRelative(59, 0, 0, 100, -2, 100), e.f1 = e.randF32S * 0.392699, e.linkChildRelative(59, 0, 0, 100, -2, 100), e.f1 = 0, yield 10, i = 9;
        break;
      }
      case 9: {
        e.linkChildRelative(59, 0, 0, 100, -2, 100), e.f1 = e.randF32S * 0.392699, e.linkChildRelative(59, 0, 0, 100, -2, 100), e.f1 = 0, yield 10, i = 10;
        break;
      }
      case 10: {
        e.linkChildRelative(59, 0, 0, 100, -2, 100), e.f1 = e.randF32S * 0.392699, e.linkChildRelative(59, 0, 0, 100, -2, 100), e.f1 = 0, yield 10, i = 11;
        break;
      }
      case 11: {
        e.linkChildRelative(59, 0, 0, 100, -2, 100), e.f1 = e.randF32S * 0.392699, e.linkChildRelative(59, 0, 0, 100, -2, 100), e.f1 = 0, yield 10, i = 12;
        break;
      }
      case 12: {
        e.linkChildRelative(59, 0, 0, 100, -2, 100), e.f1 = e.randF32S * 0.392699, e.linkChildRelative(59, 0, 0, 100, -2, 100), yield e.delay(e.i0), i = 3;
        break;
      }
      default:
        return;
    }
}
function* g0(e) {
  let i = 0, t = 0;
  for (; i >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), i) {
      case 0: {
        e.setAnm(57), e.setHitFlash(1), e.setMisc145(1), e.setBounds(24, 24), e.setMisc160(30), e.f0 = e.timer + e.f1, e.setShotRecord(0, 131072, 0, 320, -1, -1, -1), e.setShotRecord(1, 16384, 0, 7, 3, -1, -1), e.setShotRecord(2, 16, 0, 60, -1, 0.033333, -999.900024), e.holdShots(), e.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 7,
          color: 4,
          count: 1,
          rings: 1,
          speed: 0,
          speed2: 0.5,
          angle: n(10069),
          angleStep: 0.2617994,
          transform: 147986
        }), e.releaseShots(), e.isDiff(o | s) && e.setShotRepeatRand(40), e.isDiff(r | s) && e.setShotRepeatRand(11), e.isDiff(a | s) && e.setShotRepeatRand(11), e.isDiff(f | s) && e.setShotRepeatRand(11), e.clearScriptFlags(1), e.setHeadingSpeed(e.f0, 0.5), e.setSpeedAccel(0.066667), yield 20, i = 1;
        break;
      }
      case 1: {
        e.setScriptFlags(1), yield 40, i = 2;
        break;
      }
      case 2: {
        e.setSpeedAccel(0);
        return;
      }
      default:
        return;
    }
}
function* m0(e) {
  let i = 0, t = 0;
  for (; i >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), i) {
      case 0: {
        e.interpSlot(10017, 10, 4, 0, 0, 255, 0, 0), e.isDiff(r | s) && e.interpSlot(10016, 120, 4, 0, 320, 96, 0, 0), e.isDiff(a | s) && e.interpSlot(10016, 120, 4, 0, 320, 64, 0, 0), e.isDiff(f | s) && e.interpSlot(10016, 120, 4, 0, 320, 64, 0, 0), e.ci0 = 125, i = 1;
        break;
      }
      case 1: {
        e.i0 = e.f1, e.setMisc136(0, 0), yield 1, i = 2;
        break;
      }
      case 2: {
        if (--e.ci0 > 0) {
          i = 1;
          break;
        }
        i = 3;
        break;
      }
      case 3: {
        e.isDiff(r | s) && e.interpSlot(10016, 1800, 0, 0, 96, 64, 0, 0), e.isDiff(a | s) && e.interpSlot(10016, 1800, 0, 0, 64, 56, 0, 0), e.isDiff(f | s) && e.interpSlot(10016, 1800, 0, 0, 64, 48, 0, 0), e.i0 = 255, i = 4;
        break;
      }
      case 4: {
        e.setMisc136(0, 0), yield 1, i = 5;
        break;
      }
      case 5: {
        i = 4;
        break;
      }
      default:
        return;
    }
}
function* k0(e) {
  let i = 0, t = 0;
  for (; i >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), i) {
      case 0: {
        e.isDiff(o | s) && (e.ci0 = 15), e.isDiff(r | a | f | s) && (e.ci0 = 30), e.isDiff(a | s) && (e.f2 *= 0.9), e.isDiff(f | s) && (e.f2 *= 0.8), e.setShotRecord(0, 8192, 0, 60, -1, -1, -1), e.setShotRecord(1, 64, 1, 60, 1, 0, 0), e.isDiff(o | s) && (e.f1 = 0.091667), e.isDiff(r | s) && (e.f1 = 0.098214), e.isDiff(a | s) && (e.f1 = 0.098214), e.isDiff(f | s) && (e.f1 = 0.107143), e.setGaugeTimer(0, 0, 0, 0, 0, 0), e.f4 = 7292e-6, i = 1;
        break;
      }
      case 1: {
        e.setShotRecord(2, 16, 0, 60, -1, e.f1, -999.900024), e.isDiff(o | r | s) && e.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 3,
          color: 10,
          count: 1,
          rings: 4,
          speed: 3,
          speed2: 0.5,
          angle: n(10016),
          angleStep: 0.2617994,
          transform: 8786
        }), e.isDiff(a | s) && e.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 3,
          color: 10,
          count: 1,
          rings: 5,
          speed: 3.2,
          speed2: 0.5,
          angle: n(10016),
          angleStep: 0.2617994,
          transform: 8786
        }), e.isDiff(f | s) && e.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 3,
          color: 10,
          count: 1,
          rings: 5,
          speed: 3.6,
          speed2: 0.5,
          angle: n(10016),
          angleStep: 0.2617994,
          transform: 8786
        }), e.f0 += e.f2, e.f1 -= e.f4, e.f4 -= 456e-6, yield 1, i = 2;
        break;
      }
      case 2: {
        if (--e.ci0 > 0) {
          i = 1;
          break;
        }
        i = 3;
        break;
      }
      case 3: {
        e.isDiff(o | s) && (e.ci0 = 15), e.isDiff(r | a | f | s) && (e.ci0 = 30), i = 4;
        break;
      }
      case 4: {
        e.setShotRecord(2, 16, 0, 60, -1, e.f1, -999.900024), e.isDiff(o | r | s) && e.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 3,
          color: 10,
          count: 1,
          rings: 4,
          speed: 3,
          speed2: 0.5,
          angle: n(10016),
          angleStep: 0.2617994,
          transform: 8786
        }), e.isDiff(a | s) && e.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 3,
          color: 10,
          count: 1,
          rings: 5,
          speed: 3.2,
          speed2: 0.5,
          angle: n(10016),
          angleStep: 0.2617994,
          transform: 8786
        }), e.isDiff(f | s) && e.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 3,
          color: 10,
          count: 1,
          rings: 5,
          speed: 3.6,
          speed2: 0.5,
          angle: n(10016),
          angleStep: 0.2617994,
          transform: 8786
        }), e.f0 += e.f2, e.f1 += e.f4, e.f4 += 456e-6, yield 1, i = 5;
        break;
      }
      case 5: {
        if (--e.ci0 > 0) {
          i = 4;
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
function* S0(e) {
  let i = 0, t = 0;
  for (; i >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), i) {
      case 0: {
        e.complexBossInit(1), e.maxHp = 1, e.setMisc129(0), e.setDeathCallbackSub(-1), e.clearScriptFlags(3), e.f0 = e.randAngle, e.movePolar(60, 4, e.f0, 0.15), e.f0 = 0, e.ci0 = 6, yield 1, i = 1;
        break;
      }
      case 1: {
        e.f0 += 0.19635, e.f0 = l(e.f0), e.spawnEffectAngle(26, 1, -1, e.f0, 0, 0), yield 1, i = 2;
        break;
      }
      case 2: {
        e.f0 += 0.19635, e.f0 = l(e.f0), e.spawnEffectAngle(26, 1, -1, e.f0, 0, 0), yield 1, i = 3;
        break;
      }
      case 3: {
        e.f0 += 0.19635, e.f0 = l(e.f0), e.spawnEffectAngle(26, 1, -32640, e.f0, 0, 0), yield 1, i = 4;
        break;
      }
      case 4: {
        e.f0 += 0.19635, e.f0 = l(e.f0), e.spawnEffectAngle(26, 1, -32640, e.f0, 0, 0), yield 1, i = 5;
        break;
      }
      case 5: {
        e.f0 += 0.19635, e.f0 = l(e.f0), e.spawnEffectAngle(26, 1, -8323200, e.f0, 0, 0), yield 1, i = 6;
        break;
      }
      case 6: {
        e.f0 += 0.19635, e.f0 = l(e.f0), e.spawnEffectAngle(26, 1, -8323200, e.f0, 0, 0), yield 1, i = 7;
        break;
      }
      case 7: {
        e.f0 += 0.19635, e.f0 = l(e.f0), e.spawnEffectAngle(26, 1, -8355585, e.f0, 0, 0), yield 1, i = 8;
        break;
      }
      case 8: {
        e.f0 += 0.19635, e.f0 = l(e.f0), e.spawnEffectAngle(26, 1, -8355585, e.f0, 0, 0), yield 1, i = 9;
        break;
      }
      case 9: {
        e.f0 += 0.19635, e.f0 = l(e.f0), e.spawnEffectAngle(26, 1, -128, e.f0, 0, 0), yield 1, i = 10;
        break;
      }
      case 10: {
        if (e.f0 += 0.19635, e.f0 = l(e.f0), e.spawnEffectAngle(26, 1, -128, e.f0, 0, 0), e.playSfx(7), --e.ci0 > 0) {
          i = 1;
          break;
        }
        i = 11;
        break;
      }
      case 11: {
        e.playSfx(18), e.spawnEffectAngle(26, 64, -8355585, -999, 0, 0), e.endSpell(), e.setBossPresent(-1), e.maxHp = 0, yield 3e3, i = 12;
        break;
      }
      case 12:
        return;
      default:
        return;
    }
}
function* w0(e) {
  let i = 0, t = 0;
  for (; i >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), i) {
      case 0: {
        if (e.complexBossInit(1), e.setMisc129(0), e.setDeathCallbackSub(-1), e.clearScriptFlags(3), e.f0 = e.randAngle, e.movePolar(60, 4, e.f0, 0.15), e.setMisc173(0), e.spellCardState == 0) {
          i = 4;
          break;
        }
        i = 1;
        break;
      }
      case 1: {
        e.f0 = 0, e.ci0 = 6, e.playSfx(7), i = 2;
        break;
      }
      case 2: {
        if (e.f0 += 0.19635, e.f0 = l(e.f0), e.spawnEffectAngle(26, 1, -1, e.f0, 0, 0), e.f0 += 0.19635, e.f0 = l(e.f0), e.spawnEffectAngle(26, 1, -1, e.f0, 0, 0), e.f0 += 0.19635, e.f0 = l(e.f0), e.spawnEffectAngle(26, 1, -32640, e.f0, 0, 0), e.f0 += 0.19635, e.f0 = l(e.f0), e.spawnEffectAngle(26, 1, -32640, e.f0, 0, 0), e.f0 += 0.19635, e.f0 = l(e.f0), e.spawnEffectAngle(26, 1, -8323200, e.f0, 0, 0), e.f0 += 0.19635, e.f0 = l(e.f0), e.spawnEffectAngle(26, 1, -8323200, e.f0, 0, 0), e.f0 += 0.19635, e.f0 = l(e.f0), e.spawnEffectAngle(26, 1, -8355585, e.f0, 0, 0), e.f0 += 0.19635, e.f0 = l(e.f0), e.spawnEffectAngle(26, 1, -8355585, e.f0, 0, 0), e.f0 += 0.19635, e.f0 = l(e.f0), e.spawnEffectAngle(26, 1, -128, e.f0, 0, 0), e.f0 += 0.19635, e.f0 = l(e.f0), e.spawnEffectAngle(26, 1, -128, e.f0, 0, 0), --e.ci0 > 0) {
          i = 2;
          break;
        }
        i = 3;
        break;
      }
      case 3: {
        e.playSfx(18), e.spawnEffectAngle(26, 64, -8355585, -999, 0, 0), i = 4;
        break;
      }
      case 4: {
        e.endSpell(), e.setBossPresent(-1), e.maxHp = 1, yield 2, i = 5;
        break;
      }
      case 5: {
        e.maxHp = 0, yield 3e3, i = 6;
        break;
      }
      case 6:
        return;
      default:
        return;
    }
}
function* b0(e) {
  let i = 0, t = 0;
  for (; i >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), i) {
      case 0: {
        if (e.complexBossInit(1), e.setMisc129(0), e.setDeathCallbackSub(-1), e.clearScriptFlags(3), e.f0 = e.randAngle, e.movePolar(60, 4, e.f0, 0.15), e.setMisc173(0), e.ci3 = 0, e.spellCardState == 0) {
          i = 4;
          break;
        }
        i = 1;
        break;
      }
      case 1: {
        e.f0 = 0, e.ci0 = 6, e.playSfx(7), i = 2;
        break;
      }
      case 2: {
        if (e.f0 += 0.19635, e.f0 = l(e.f0), e.spawnEffectAngle(26, 1, -1, e.f0, 0, 0), e.f0 += 0.19635, e.f0 = l(e.f0), e.spawnEffectAngle(26, 1, -1, e.f0, 0, 0), e.f0 += 0.19635, e.f0 = l(e.f0), e.spawnEffectAngle(26, 1, -32640, e.f0, 0, 0), e.f0 += 0.19635, e.f0 = l(e.f0), e.spawnEffectAngle(26, 1, -32640, e.f0, 0, 0), e.f0 += 0.19635, e.f0 = l(e.f0), e.spawnEffectAngle(26, 1, -8323200, e.f0, 0, 0), e.f0 += 0.19635, e.f0 = l(e.f0), e.spawnEffectAngle(26, 1, -8323200, e.f0, 0, 0), e.f0 += 0.19635, e.f0 = l(e.f0), e.spawnEffectAngle(26, 1, -8355585, e.f0, 0, 0), e.f0 += 0.19635, e.f0 = l(e.f0), e.spawnEffectAngle(26, 1, -8355585, e.f0, 0, 0), e.f0 += 0.19635, e.f0 = l(e.f0), e.spawnEffectAngle(26, 1, -128, e.f0, 0, 0), e.f0 += 0.19635, e.f0 = l(e.f0), e.spawnEffectAngle(26, 1, -128, e.f0, 0, 0), --e.ci0 > 0) {
          i = 2;
          break;
        }
        i = 3;
        break;
      }
      case 3: {
        e.playSfx(18), e.spawnEffectAngle(26, 64, -8355585, -999, 0, 0), e.ci3 = 1, i = 4;
        break;
      }
      case 4: {
        if (e.endSpell(), e.ci3 == 0) {
          i = 6;
          break;
        }
        i = 5;
        break;
      }
      case 5: {
        yield e.delay(120), i = 6;
        break;
      }
      case 6: {
        e.setBossPresent(-1), e.maxHp = 1, yield 2, i = 7;
        break;
      }
      case 7: {
        e.maxHp = 0, yield 3e3, i = 8;
        break;
      }
      case 8:
        return;
      default:
        return;
    }
}
const A0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  sub_0: u,
  sub_1: g,
  sub_10: I,
  sub_11: z,
  sub_12: D,
  sub_13: R,
  sub_14: F,
  sub_15: v,
  sub_16: C,
  sub_17: E,
  sub_18: x,
  sub_19: d,
  sub_2: m,
  sub_20: _,
  sub_21: B,
  sub_22: H,
  sub_23: T,
  sub_24: P,
  sub_25: L,
  sub_26: V,
  sub_27: O,
  sub_28: X,
  sub_29: G,
  sub_3: k,
  sub_30: U,
  sub_31: Y,
  sub_32: N,
  sub_33: j,
  sub_34: q,
  sub_35: J,
  sub_36: K,
  sub_37: Q,
  sub_38: W,
  sub_39: Z,
  sub_4: S,
  sub_40: $,
  sub_41: e0,
  sub_42: i0,
  sub_43: s0,
  sub_44: t0,
  sub_45: f0,
  sub_46: a0,
  sub_47: r0,
  sub_48: n0,
  sub_49: o0,
  sub_5: w,
  sub_50: l0,
  sub_51: c0,
  sub_52: p,
  sub_53: c,
  sub_54: d0,
  sub_55: p0,
  sub_56: y0,
  sub_57: u0,
  sub_58: y,
  sub_59: g0,
  sub_6: b,
  sub_60: m0,
  sub_61: k0,
  sub_62: S0,
  sub_63: w0,
  sub_64: b0,
  sub_7: A,
  sub_8: h,
  sub_9: M
}, Symbol.toStringTag, { value: "Module" })), h0 = [
  {
    index: 0,
    offset: 41332,
    instructions: [
      {
        offset: 0,
        time: 1,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([16, 1106247680, -1048576e3, 20, -2, 1e3])
      },
      {
        offset: 0,
        time: 460,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1137180672, 1126170624, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 470,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1137180672, 1126170624, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 480,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1137180672, 1126170624, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 490,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1137180672, 1126170624, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 500,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1137180672, 1126170624, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 510,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1137180672, 1126170624, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 520,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1137180672, 1126170624, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 530,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1137180672, 1126170624, 10, 1, 1e3])
      },
      {
        offset: 0,
        time: 540,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1137180672, 1126170624, 10, 1, 1e3])
      },
      { offset: 0, time: 540, opcode: 14, size: 12, difficultyMask: 255, args: new Int32Array([0]) },
      { offset: 0, time: 550, opcode: 13, size: 12, difficultyMask: 255, args: new Int32Array([0]) },
      {
        offset: 0,
        time: 550,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1139802112, 1126170624, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 560,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1139802112, 1126170624, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 570,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1139802112, 1126170624, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 580,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1139802112, 1126170624, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 590,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1139802112, 1126170624, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 600,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1139802112, 1126170624, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 610,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1139802112, 1126170624, 10, 1, 1e3])
      },
      {
        offset: 0,
        time: 620,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1139802112, 1126170624, 10, 1, 1e3])
      },
      {
        offset: 0,
        time: 630,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1139802112, 1126170624, 10, 1, 1e3])
      },
      { offset: 0, time: 630, opcode: 14, size: 12, difficultyMask: 255, args: new Int32Array([0]) },
      { offset: 0, time: 640, opcode: 13, size: 12, difficultyMask: 255, args: new Int32Array([0]) },
      {
        offset: 0,
        time: 640,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1133510656, -1048576e3, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 650,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1133510656, -1048576e3, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 660,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1133510656, -1048576e3, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 670,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1133510656, -1048576e3, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 680,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1133510656, -1048576e3, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 690,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1133510656, -1048576e3, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 700,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1133510656, -1048576e3, 10, 1, 1e3])
      },
      {
        offset: 0,
        time: 710,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1133510656, -1048576e3, 10, 1, 1e3])
      },
      {
        offset: 0,
        time: 720,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1133510656, -1048576e3, 10, 1, 1e3])
      },
      { offset: 0, time: 720, opcode: 14, size: 12, difficultyMask: 255, args: new Int32Array([0]) },
      { offset: 0, time: 730, opcode: 13, size: 12, difficultyMask: 255, args: new Int32Array([0]) },
      {
        offset: 0,
        time: 730,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([2, 1139802112, 1126170624, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 740,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([2, 1139802112, 1126170624, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 750,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([2, 1139802112, 1126170624, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 760,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([2, 1139802112, 1126170624, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 770,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([2, 1139802112, 1126170624, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 780,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([2, 1139802112, 1126170624, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 790,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([2, 1139802112, 1126170624, 10, 1, 1e3])
      },
      {
        offset: 0,
        time: 800,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([2, 1139802112, 1126170624, 10, 1, 1e3])
      },
      {
        offset: 0,
        time: 810,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([2, 1139802112, 1126170624, 10, 1, 1e3])
      },
      { offset: 0, time: 810, opcode: 14, size: 12, difficultyMask: 255, args: new Int32Array([0]) },
      { offset: 0, time: 820, opcode: 13, size: 12, difficultyMask: 255, args: new Int32Array([0]) },
      {
        offset: 0,
        time: 820,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1137180672, 1126170624, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 830,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1137180672, 1126170624, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 840,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1137180672, 1126170624, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 850,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1137180672, 1126170624, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 860,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1137180672, 1126170624, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 870,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1137180672, 1126170624, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 880,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1137180672, 1126170624, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 890,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1137180672, 1126170624, 10, 1, 1e3])
      },
      {
        offset: 0,
        time: 900,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1137180672, 1126170624, 10, 1, 1e3])
      },
      { offset: 0, time: 900, opcode: 14, size: 12, difficultyMask: 255, args: new Int32Array([0]) },
      { offset: 0, time: 910, opcode: 13, size: 12, difficultyMask: 255, args: new Int32Array([0]) },
      {
        offset: 0,
        time: 910,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1133510656, -1048576e3, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 920,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1133510656, -1048576e3, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 930,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1133510656, -1048576e3, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 940,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1133510656, -1048576e3, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 950,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1133510656, -1048576e3, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 960,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1133510656, -1048576e3, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 970,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1133510656, -1048576e3, 10, 1, 1e3])
      },
      {
        offset: 0,
        time: 980,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1133510656, -1048576e3, 10, 1, 1e3])
      },
      {
        offset: 0,
        time: 990,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1133510656, -1048576e3, 10, 1, 1e3])
      },
      { offset: 0, time: 990, opcode: 14, size: 12, difficultyMask: 255, args: new Int32Array([0]) },
      {
        offset: 0,
        time: 1050,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([7, 1128267776, -1048576e3, 1e3, 3, 1e3])
      },
      {
        offset: 0,
        time: 1150,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1137180672, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 1160,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1137180672, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 1170,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1137180672, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 1180,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1137180672, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 1190,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1137180672, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 1200,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1137180672, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 1210,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1137180672, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 1220,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1137180672, 1126170624, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 1230,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1137180672, 1126170624, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 1290,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, -1048576e3, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 1300,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, -1048576e3, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 1310,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, -1048576e3, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 1320,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, -1048576e3, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 1330,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, -1048576e3, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 1340,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, -1048576e3, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 1350,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, -1048576e3, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 1360,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, -1048576e3, 1126170624, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 1370,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, -1048576e3, 1126170624, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 1370,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([11, 1132462080, -1048576e3, 1e3, 0, 1e3])
      },
      {
        offset: 0,
        time: 1430,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1137180672, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 1440,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1137180672, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 1450,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1137180672, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 1460,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1137180672, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 1470,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1137180672, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 1480,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1137180672, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 1490,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1137180672, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 1500,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1137180672, 1126170624, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 1510,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1137180672, 1126170624, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 1510,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([11, 1134559232, -1048576e3, 400, 1, 1e3])
      },
      {
        offset: 0,
        time: 1570,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, -1048576e3, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 1580,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, -1048576e3, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 1590,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, -1048576e3, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 1600,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, -1048576e3, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 1610,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, -1048576e3, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 1620,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, -1048576e3, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 1630,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, -1048576e3, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 1640,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, -1048576e3, 1126170624, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 1650,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, -1048576e3, 1126170624, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 1650,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([11, 1115684864, -1048576e3, 500, 1, 1e3])
      },
      {
        offset: 0,
        time: 1710,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1137180672, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 1720,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1137180672, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 1730,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1137180672, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 1740,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1137180672, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 1750,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1137180672, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 1760,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1137180672, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 1770,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1137180672, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 1780,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1137180672, 1126170624, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 1790,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1137180672, 1126170624, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 1790,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([11, 1134559232, -1048576e3, 400, 1, 1e3])
      },
      {
        offset: 0,
        time: 1850,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, -1048576e3, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 1860,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, -1048576e3, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 1870,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, -1048576e3, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 1880,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, -1048576e3, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 1890,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, -1048576e3, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 1900,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, -1048576e3, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 1910,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, -1048576e3, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 1920,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, -1048576e3, 1126170624, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 1930,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, -1048576e3, 1126170624, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 1930,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([11, 1115684864, -1048576e3, 500, 1, 1e3])
      },
      {
        offset: 0,
        time: 1990,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1137180672, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 2e3,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1137180672, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 2010,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1137180672, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 2020,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1137180672, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 2030,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1137180672, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 2040,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1137180672, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 2050,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1137180672, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 2060,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1137180672, 1126170624, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 2070,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1137180672, 1126170624, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 2070,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([11, 1134559232, -1048576e3, 400, 1, 1e3])
      },
      {
        offset: 0,
        time: 2130,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, -1048576e3, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 2140,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, -1048576e3, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 2150,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, -1048576e3, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 2160,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, -1048576e3, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 2170,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, -1048576e3, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 2180,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, -1048576e3, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 2190,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, -1048576e3, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 2200,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, -1048576e3, 1126170624, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 2210,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, -1048576e3, 1126170624, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 2210,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([11, 1124073472, -1048576e3, 400, 1, 1e3])
      },
      {
        offset: 0,
        time: 2210,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([11, 1132462080, -1048576e3, 400, 1, 1e3])
      },
      {
        offset: 0,
        time: 2270,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1137180672, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 2280,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1137180672, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 2290,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1137180672, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 2300,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1137180672, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 2310,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1137180672, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 2320,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1137180672, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 2330,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1137180672, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 2340,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1137180672, 1126170624, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 2350,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1137180672, 1126170624, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 2410,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, -1048576e3, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 2420,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, -1048576e3, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 2430,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, -1048576e3, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 2440,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, -1048576e3, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 2450,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, -1048576e3, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 2460,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, -1048576e3, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 2470,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, -1048576e3, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 2480,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, -1048576e3, 1126170624, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 2490,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, -1048576e3, 1126170624, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 2490,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([13, 1124073472, -1048576e3, 500, 1, 1e3])
      },
      {
        offset: 0,
        time: 2490,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([4, 1115684864, -1048576e3, 120, 1, 1e3])
      },
      {
        offset: 0,
        time: 2490,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([4, 1134559232, -1048576e3, 120, 1, 1e3])
      },
      {
        offset: 0,
        time: 2490,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([4, 1119879168, -1048576e3, 120, 1, 1e3])
      },
      {
        offset: 0,
        time: 2490,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([4, 1133510656, -1048576e3, 120, 1, 1e3])
      },
      {
        offset: 0,
        time: 2690,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([14, 1132462080, -1048576e3, 500, 1, 1e3])
      },
      {
        offset: 0,
        time: 2890,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([14, 1128267776, -1048576e3, 500, 1, 1e3])
      },
      {
        offset: 0,
        time: 2950,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1137180672, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 2960,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1137180672, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 2970,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1137180672, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 2980,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1137180672, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 2990,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1137180672, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 3e3,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1137180672, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 3010,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1137180672, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 3020,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1137180672, 1126170624, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 3030,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1137180672, 1126170624, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 3030,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([4, 1115684864, -1048576e3, 120, 1, 1e3])
      },
      {
        offset: 0,
        time: 3030,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([4, 1134559232, -1048576e3, 120, 1, 1e3])
      },
      {
        offset: 0,
        time: 3030,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([4, 1119879168, -1048576e3, 120, 1, 1e3])
      },
      {
        offset: 0,
        time: 3030,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([4, 1133510656, -1048576e3, 120, 1, 1e3])
      },
      {
        offset: 0,
        time: 3090,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, -1048576e3, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 3100,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, -1048576e3, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 3110,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, -1048576e3, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 3120,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, -1048576e3, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 3130,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, -1048576e3, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 3140,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, -1048576e3, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 3150,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, -1048576e3, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 3160,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, -1048576e3, 1126170624, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 3170,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, -1048576e3, 1126170624, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 3170,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([4, 1115684864, -1048576e3, 120, 1, 1e3])
      },
      {
        offset: 0,
        time: 3170,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([4, 1134559232, -1048576e3, 120, 1, 1e3])
      },
      {
        offset: 0,
        time: 3170,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([4, 1119879168, -1048576e3, 120, 1, 1e3])
      },
      {
        offset: 0,
        time: 3170,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([4, 1133510656, -1048576e3, 120, 1, 1e3])
      },
      {
        offset: 0,
        time: 3230,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1137180672, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 3240,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1137180672, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 3250,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1137180672, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 3260,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1137180672, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 3270,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1137180672, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 3280,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1137180672, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 3290,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1137180672, 1126170624, 10, -2, 1e3])
      },
      {
        offset: 0,
        time: 3300,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1137180672, 1126170624, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 3310,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, 1137180672, 1126170624, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 3410,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([7, 1128267776, -1048576e3, 1e3, 2, 1e3])
      },
      {
        offset: 0,
        time: 3510,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([4, 1107296256, 1124073472, -1048576e3, 100, 0, 1e3])
      },
      {
        offset: 0,
        time: 3530,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([4, 1132462080, 1135607808, -1048576e3, 100, 0, 1e3])
      },
      {
        offset: 0,
        time: 3550,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([4, 1107296256, 1135607808, -1048576e3, 100, 1, 1e3])
      },
      {
        offset: 0,
        time: 3610,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([4, 1107296256, 1124073472, -1040187392, 100, 1, 1e3])
      },
      {
        offset: 0,
        time: 3630,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([6, 1132462080, 1135607808, -1048576e3, 100, 0, 1e3])
      },
      {
        offset: 0,
        time: 3650,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([6, 1107296256, 1135607808, -1035993088, 100, 0, 1e3])
      },
      {
        offset: 0,
        time: 3710,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([6, 1107296256, 1124073472, -1048576e3, 100, 1, 1e3])
      },
      {
        offset: 0,
        time: 3730,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([6, 1132462080, 1135607808, -1040187392, 100, 1, 1e3])
      },
      {
        offset: 0,
        time: 3750,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([4, 1107296256, 1135607808, -1048576e3, 100, 0, 1e3])
      },
      {
        offset: 0,
        time: 3810,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([4, 1107296256, 1124073472, -1040187392, 100, 0, 1e3])
      },
      {
        offset: 0,
        time: 3830,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([4, 1132462080, 1135607808, -1048576e3, 100, 1, 1e3])
      },
      {
        offset: 0,
        time: 3850,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([4, 1107296256, 1135607808, -1048576e3, 100, 1, 1e3])
      },
      {
        offset: 0,
        time: 3910,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([4, 1107296256, 1124073472, -1048576e3, 100, 0, 1e3])
      },
      {
        offset: 0,
        time: 3930,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([6, 1132462080, 1135607808, -1040187392, 100, 0, 1e3])
      },
      {
        offset: 0,
        time: 3950,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([6, 1107296256, 1135607808, -1048576e3, 100, 1, 1e3])
      },
      {
        offset: 0,
        time: 4010,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([6, 1107296256, 1124073472, -1040187392, 100, 1, 1e3])
      },
      {
        offset: 0,
        time: 4030,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([6, 1132462080, 1135607808, -1040187392, 100, 0, 1e3])
      },
      {
        offset: 0,
        time: 4050,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([6, 1107296256, 1135607808, -1048576e3, 100, 0, 1e3])
      },
      {
        offset: 0,
        time: 4170,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([4, 1115684864, -1048576e3, 100, 0, 1e3])
      },
      {
        offset: 0,
        time: 4180,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([4, 1117782016, -1048576e3, 100, 1, 1e3])
      },
      {
        offset: 0,
        time: 4190,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([4, 1119879168, -1048576e3, 100, 0, 1e3])
      },
      {
        offset: 0,
        time: 4200,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([4, 1121976320, -1048576e3, 100, 1, 1e3])
      },
      {
        offset: 0,
        time: 4210,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([4, 1124073472, -1048576e3, 100, 0, 1e3])
      },
      {
        offset: 0,
        time: 4330,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([6, 1134559232, -1048576e3, 100, 1, 1e3])
      },
      {
        offset: 0,
        time: 4340,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([6, 1134034944, -1048576e3, 100, 0, 1e3])
      },
      {
        offset: 0,
        time: 4350,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([6, 1133510656, -1048576e3, 100, 1, 1e3])
      },
      {
        offset: 0,
        time: 4360,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([6, 1132986368, -1048576e3, 100, 0, 1e3])
      },
      {
        offset: 0,
        time: 4370,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([6, 1132462080, -1048576e3, 100, 1, 1e3])
      },
      {
        offset: 0,
        time: 4470,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([4, 1115684864, -1048576e3, 100, 0, 1e3])
      },
      {
        offset: 0,
        time: 4480,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([4, 1117782016, -1048576e3, 100, 1, 1e3])
      },
      {
        offset: 0,
        time: 4490,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([4, 1119879168, -1048576e3, 100, 0, 1e3])
      },
      {
        offset: 0,
        time: 4500,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([4, 1121976320, -1048576e3, 100, 1, 1e3])
      },
      {
        offset: 0,
        time: 4510,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([4, 1124073472, -1048576e3, 100, 0, 1e3])
      },
      {
        offset: 0,
        time: 4590,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([6, 1134559232, -1048576e3, 100, 1, 1e3])
      },
      {
        offset: 0,
        time: 4600,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([6, 1134034944, -1048576e3, 100, 0, 1e3])
      },
      {
        offset: 0,
        time: 4610,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([6, 1133510656, -1048576e3, 100, 1, 1e3])
      },
      {
        offset: 0,
        time: 4620,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([6, 1132986368, -1048576e3, 100, 0, 1e3])
      },
      {
        offset: 0,
        time: 4630,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([4, 1132462080, -1048576e3, 100, 1, 1e3])
      },
      {
        offset: 0,
        time: 4640,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([4, 1134034944, -1048576e3, 100, 0, 1e3])
      },
      {
        offset: 0,
        time: 4650,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([4, 1133510656, -1048576e3, 100, 1, 1e3])
      },
      {
        offset: 0,
        time: 4660,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([4, 1132986368, -1048576e3, 100, 2, 1e3])
      },
      {
        offset: 0,
        time: 4670,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([4, 1132462080, -1048576e3, 100, 2, 1e3])
      },
      {
        offset: 0,
        time: 4870,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([17, 1128267776, -1048576e3, 6e4, -2, 1e5])
      },
      { offset: 0, time: 4870, opcode: 10, size: 12, difficultyMask: 255, args: new Int32Array([0]) },
      { offset: 0, time: 4870, opcode: 6, size: 12, difficultyMask: 255, args: new Int32Array([0]) },
      { offset: 0, time: 4871, opcode: 7, size: 8, difficultyMask: 255, args: new Int32Array([]) },
      { offset: 0, time: 4871, opcode: 8, size: 16, difficultyMask: 255, args: new Int32Array([0, 1]) },
      { offset: 0, time: 4871, opcode: 10, size: 12, difficultyMask: 255, args: new Int32Array([0]) },
      {
        offset: 0,
        time: 4871,
        opcode: 0,
        size: 32,
        difficultyMask: 254,
        args: new Int32Array([32, 1128267776, 1124073472, 6e4, -2, 1e5])
      },
      { offset: 0, time: 4872, opcode: 10, size: 12, difficultyMask: 254, args: new Int32Array([0]) },
      { offset: 0, time: 4872, opcode: 6, size: 12, difficultyMask: 255, args: new Int32Array([1]) },
      { offset: 0, time: 4872, opcode: 7, size: 8, difficultyMask: 255, args: new Int32Array([]) }
    ]
  },
  {
    index: 1,
    offset: 49356,
    instructions: [
      { offset: 0, time: 20, opcode: 13, size: 12, difficultyMask: 255, args: new Int32Array([0]) },
      {
        offset: 0,
        time: 20,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, -1048576e3, 1126170624, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 30,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, -1048576e3, 1126170624, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 40,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, -1048576e3, 1126170624, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 50,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, -1048576e3, 1126170624, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 60,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, -1048576e3, 1126170624, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 70,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, -1048576e3, 1126170624, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 80,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, -1048576e3, 1126170624, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 90,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, -1048576e3, 1126170624, 10, 1, 1e3])
      },
      {
        offset: 0,
        time: 100,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, -1048576e3, 1126170624, 10, 1, 1e3])
      },
      { offset: 0, time: 100, opcode: 14, size: 12, difficultyMask: 255, args: new Int32Array([0]) },
      { offset: 0, time: 110, opcode: 13, size: 12, difficultyMask: 255, args: new Int32Array([0]) },
      {
        offset: 0,
        time: 110,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, -1027604480, 1126170624, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 120,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, -1027604480, 1126170624, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 130,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, -1027604480, 1126170624, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 140,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, -1027604480, 1126170624, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 150,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, -1027604480, 1126170624, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 160,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, -1027604480, 1126170624, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 170,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, -1027604480, 1126170624, 10, 1, 1e3])
      },
      {
        offset: 0,
        time: 180,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, -1027604480, 1126170624, 10, 1, 1e3])
      },
      {
        offset: 0,
        time: 190,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, -1027604480, 1126170624, 10, 1, 1e3])
      },
      { offset: 0, time: 190, opcode: 14, size: 12, difficultyMask: 255, args: new Int32Array([0]) },
      { offset: 0, time: 200, opcode: 13, size: 12, difficultyMask: 255, args: new Int32Array([0]) },
      {
        offset: 0,
        time: 200,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1119879168, -1048576e3, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 210,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1119879168, -1048576e3, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 220,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1119879168, -1048576e3, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 230,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1119879168, -1048576e3, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 240,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1119879168, -1048576e3, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 250,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1119879168, -1048576e3, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 260,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1119879168, -1048576e3, 10, 1, 1e3])
      },
      {
        offset: 0,
        time: 270,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1119879168, -1048576e3, 10, 1, 1e3])
      },
      {
        offset: 0,
        time: 280,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1119879168, -1048576e3, 10, 1, 1e3])
      },
      { offset: 0, time: 280, opcode: 14, size: 12, difficultyMask: 255, args: new Int32Array([0]) },
      { offset: 0, time: 280, opcode: 14, size: 12, difficultyMask: 255, args: new Int32Array([0]) },
      { offset: 0, time: 290, opcode: 13, size: 12, difficultyMask: 255, args: new Int32Array([0]) },
      {
        offset: 0,
        time: 290,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([2, -1027604480, 1126170624, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 300,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([2, -1027604480, 1126170624, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 310,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([2, -1027604480, 1126170624, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 320,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([2, -1027604480, 1126170624, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 330,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([2, -1027604480, 1126170624, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 340,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([2, -1027604480, 1126170624, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 350,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([2, -1027604480, 1126170624, 10, 1, 1e3])
      },
      {
        offset: 0,
        time: 360,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([2, -1027604480, 1126170624, 10, 1, 1e3])
      },
      {
        offset: 0,
        time: 370,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([2, -1027604480, 1126170624, 10, 1, 1e3])
      },
      { offset: 0, time: 370, opcode: 14, size: 12, difficultyMask: 255, args: new Int32Array([0]) },
      { offset: 0, time: 380, opcode: 13, size: 12, difficultyMask: 255, args: new Int32Array([0]) },
      {
        offset: 0,
        time: 380,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, -1048576e3, 1126170624, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 390,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, -1048576e3, 1126170624, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 400,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, -1048576e3, 1126170624, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 410,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, -1048576e3, 1126170624, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 420,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, -1048576e3, 1126170624, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 430,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, -1048576e3, 1126170624, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 440,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, -1048576e3, 1126170624, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 450,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, -1048576e3, 1126170624, 10, 1, 1e3])
      },
      {
        offset: 0,
        time: 460,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([1, -1048576e3, 1126170624, 10, 1, 1e3])
      },
      { offset: 0, time: 460, opcode: 14, size: 12, difficultyMask: 255, args: new Int32Array([0]) },
      {
        offset: 0,
        time: 460,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1119879168, -1048576e3, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 470,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1119879168, -1048576e3, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 480,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1119879168, -1048576e3, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 490,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1119879168, -1048576e3, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 500,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1119879168, -1048576e3, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 510,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1119879168, -1048576e3, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 520,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1119879168, -1048576e3, 10, 1, 1e3])
      },
      {
        offset: 0,
        time: 530,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1119879168, -1048576e3, 10, 1, 1e3])
      },
      {
        offset: 0,
        time: 540,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([3, 1119879168, -1048576e3, 10, 1, 1e3])
      },
      { offset: 0, time: 540, opcode: 14, size: 12, difficultyMask: 255, args: new Int32Array([0]) }
    ]
  }
], M0 = {
  version: 2048,
  subCount: 65,
  subs: [],
  timelines: h0
}, z0 = {
  route: "stage2",
  source: "ecldata2.ecl",
  subCount: 65,
  timelineCount: 2,
  cards: [
    {
      sub: 23,
      id: 13,
      name: "声符「梟の夜鳴声」",
      owner: "ミスティア・ローレライ",
      face: 0,
      bonus: 15e6,
      lastSpell: !1
    },
    {
      sub: 23,
      id: 14,
      name: "声符「梟の夜鳴声」",
      owner: "ミスティア・ローレライ",
      face: 0,
      bonus: 15e6,
      lastSpell: !1
    },
    {
      sub: 23,
      id: 15,
      name: "声符「木菟咆哮」",
      owner: "ミスティア・ローレライ",
      face: 0,
      bonus: 15e6,
      lastSpell: !1
    },
    {
      sub: 23,
      id: 16,
      name: "声符「木菟咆哮」",
      owner: "ミスティア・ローレライ",
      face: 0,
      bonus: 15e6,
      lastSpell: !1
    },
    {
      sub: 33,
      id: 17,
      name: "蛾符「天蛾の蠱道」",
      owner: "ミスティア・ローレライ",
      face: 0,
      bonus: 15e6,
      lastSpell: !1
    },
    {
      sub: 33,
      id: 18,
      name: "蛾符「天蛾の蠱道」",
      owner: "ミスティア・ローレライ",
      face: 0,
      bonus: 15e6,
      lastSpell: !1
    },
    {
      sub: 33,
      id: 19,
      name: "毒符「毒蛾の鱗粉」",
      owner: "ミスティア・ローレライ",
      face: 0,
      bonus: 15e6,
      lastSpell: !1
    },
    {
      sub: 33,
      id: 20,
      name: "猛毒「毒蛾の暗闇演舞」",
      owner: "ミスティア・ローレライ",
      face: 0,
      bonus: 15e6,
      lastSpell: !1
    },
    {
      sub: 38,
      id: 19,
      name: "毒符「毒蛾の鱗粉」",
      owner: "ミスティア・ローレライ",
      face: 0,
      bonus: 15e6,
      lastSpell: !1
    },
    {
      sub: 38,
      id: 20,
      name: "猛毒「毒蛾の暗闇演舞」",
      owner: "ミスティア・ローレライ",
      face: 0,
      bonus: 15e6,
      lastSpell: !1
    },
    {
      sub: 44,
      id: 21,
      name: "鷹符「イルスタードダイブ」",
      owner: "ミスティア・ローレライ",
      face: 0,
      bonus: 15e6,
      lastSpell: !1
    },
    {
      sub: 44,
      id: 22,
      name: "鷹符「イルスタードダイブ」",
      owner: "ミスティア・ローレライ",
      face: 0,
      bonus: 15e6,
      lastSpell: !1
    },
    {
      sub: 44,
      id: 23,
      name: "鷹符「イルスタードダイブ」",
      owner: "ミスティア・ローレライ",
      face: 0,
      bonus: 15e6,
      lastSpell: !1
    },
    {
      sub: 44,
      id: 24,
      name: "鷹符「イルスタードダイブ」",
      owner: "ミスティア・ローレライ",
      face: 0,
      bonus: 15e6,
      lastSpell: !1
    },
    {
      sub: 52,
      id: 25,
      name: "夜盲「夜雀の歌」",
      owner: "ミスティア・ローレライ",
      face: 0,
      bonus: 15e6,
      lastSpell: !1
    },
    {
      sub: 52,
      id: 26,
      name: "夜盲「夜雀の歌」",
      owner: "ミスティア・ローレライ",
      face: 0,
      bonus: 15e6,
      lastSpell: !1
    },
    {
      sub: 52,
      id: 27,
      name: "夜盲「夜雀の歌」",
      owner: "ミスティア・ローレライ",
      face: 0,
      bonus: 15e6,
      lastSpell: !1
    },
    {
      sub: 52,
      id: 28,
      name: "夜盲「夜雀の歌」",
      owner: "ミスティア・ローレライ",
      face: 0,
      bonus: 15e6,
      lastSpell: !1
    },
    {
      sub: 58,
      id: 29,
      name: "夜雀「真夜中のコーラスマスター」",
      owner: "ミスティア・ローレライ",
      face: 0,
      bonus: 15e6,
      lastSpell: !0
    },
    {
      sub: 58,
      id: 30,
      name: "夜雀「真夜中のコーラスマスター」",
      owner: "ミスティア・ローレライ",
      face: 0,
      bonus: 15e6,
      lastSpell: !0
    },
    {
      sub: 58,
      id: 31,
      name: "夜雀「真夜中のコーラスマスター」",
      owner: "ミスティア・ローレライ",
      face: 0,
      bonus: 15e6,
      lastSpell: !0
    }
  ],
  scripts: A0,
  waves: M0
};
export {
  z0 as STAGE2_SCRIPT
};
