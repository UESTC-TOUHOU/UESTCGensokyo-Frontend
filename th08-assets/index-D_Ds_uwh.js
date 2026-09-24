import { r as a, n as c } from "./index-BaCUa-wb.js";
const r = 1, l = 2, f = 4, n = 8, s = 16;
function* y(i) {
  let e = 0, t = 0;
  for (; e >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), e) {
      case 0: {
        i.setAnm(0), i.setExtraAnm(0, 48), i.setBounds(24, 24), i.clearScriptFlags(2), i.setMisc144(3, 2), i.setMisc160(30), i.movePolar(50, 4, 1.570796, 2.5), i.callSubAlloc(0, 1), i.ci1 = 3, yield 65, e = 1;
        break;
      }
      case 1: {
        i.ci0 = 8, i.f2 = i.timer, i.f0 = i.f2 + 0.785398, i.f1 = i.f2 + 0.392699, i.f3 = i.f2 - 0.392699, i.f4 = i.f2 - 0.785398, i.isDiff(f | s) && i.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 1,
          color: 6,
          count: 3,
          rings: 1,
          speed: 2,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.3926991,
          transform: 515
        }), i.isDiff(n | s) && i.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 1,
          color: 6,
          count: 3,
          rings: 3,
          speed: 3,
          speed2: 1,
          angle: 0,
          angleStep: 0.3926991,
          transform: 515
        }), e = 2;
        break;
      }
      case 2: {
        i.setShotRecord(0, 32, 0, 40, -1, 0, -0.02618), i.isDiff(l | s) && i.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 2,
          color: 2,
          count: 1,
          rings: 1,
          speed: 2,
          speed2: 0.5,
          angle: a(10016),
          angleStep: 0.28559932,
          transform: 546
        }), i.isDiff(f | s) && i.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 2,
          color: 2,
          count: 1,
          rings: 1,
          speed: 2,
          speed2: 0.5,
          angle: a(10016),
          angleStep: 0.28559932,
          transform: 546
        }), i.isDiff(n | s) && i.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 2,
          color: 2,
          count: 1,
          rings: 1,
          speed: 2,
          speed2: 0.5,
          angle: a(10016),
          angleStep: 0.28559932,
          transform: 546
        }), i.setShotRecord(0, 32, 0, 40, -1, 0, -0.01309), i.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 2,
          color: 2,
          count: 1,
          rings: 1,
          speed: 2,
          speed2: 0.5,
          angle: a(10017),
          angleStep: 0.28559932,
          transform: 34
        }), i.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 2,
          color: 2,
          count: 1,
          rings: 1,
          speed: 2,
          speed2: 0.5,
          angle: a(10018),
          angleStep: 0.18479957,
          transform: 2
        }), i.setShotRecord(0, 32, 0, 40, -1, 0, 0.01309), i.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 2,
          color: 2,
          count: 1,
          rings: 1,
          speed: 2,
          speed2: 0.5,
          angle: a(10019),
          angleStep: 0.28559932,
          transform: 34
        }), i.setShotRecord(0, 32, 0, 40, -1, 0, 0.02618), i.isDiff(l | s) && i.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 2,
          color: 2,
          count: 1,
          rings: 1,
          speed: 2,
          speed2: 0.5,
          angle: a(10020),
          angleStep: 0.28559932,
          transform: 34
        }), i.isDiff(f | s) && i.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 2,
          color: 2,
          count: 1,
          rings: 1,
          speed: 2,
          speed2: 0.5,
          angle: a(10020),
          angleStep: 0.28559932,
          transform: 34
        }), i.isDiff(n | s) && i.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 2,
          color: 2,
          count: 1,
          rings: 1,
          speed: 2,
          speed2: 0.5,
          angle: a(10020),
          angleStep: 0.28559932,
          transform: 34
        }), yield 2, e = 3;
        break;
      }
      case 3: {
        if (--i.ci0 > 0) {
          e = 2;
          break;
        }
        e = 4;
        break;
      }
      case 4: {
        i.setHeadingSpeed(0, 1), yield 4, e = 5;
        break;
      }
      case 5: {
        if (--i.ci1 > 0) {
          e = 1;
          break;
        }
        e = 6;
        break;
      }
      case 6:
        return;
      default:
        return;
    }
}
function* g(i) {
  let e = 0, t = 0;
  for (; e >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), e) {
      case 0: {
        i.ci0 = 12, e = 1;
        break;
      }
      case 1: {
        i.isDiff(l | s) && i.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 1,
          color: 6,
          count: 1,
          rings: 1,
          speed: 2,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.28559932,
          transform: 515
        }), i.isDiff(f | s) && i.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 1,
          color: 6,
          count: 1,
          rings: 1,
          speed: 3,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.28559932,
          transform: 515
        }), i.isDiff(n | s) && i.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 1,
          color: 6,
          count: 1,
          rings: 2,
          speed: 4,
          speed2: 2,
          angle: 0,
          angleStep: 0.28559932,
          transform: 515
        }), yield 4, e = 2;
        break;
      }
      case 2: {
        if (--i.ci0 > 0) {
          e = 1;
          break;
        }
        e = 3;
        break;
      }
      case 3:
        return;
      default:
        return;
    }
}
function* k(i) {
  let e = 0, t = 0;
  for (; e >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), e) {
      case 0: {
        i.setAnm(30), i.setExtraAnm(0, 48), i.setBounds(24, 24), i.setMisc160(30), i.clearScriptFlags(2), i.movePolar(50, 4, 1.570796, 2), yield 30, e = 1;
        break;
      }
      case 1: {
        i.isDiff(r | s) && i.spawnShot({
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
        }), i.isDiff(l | s) && i.spawnShot({
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
        }), i.isDiff(f | s) && i.spawnShot({
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
        }), i.isDiff(n | s) && i.spawnShot({
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
        }), yield 20, e = 2;
        break;
      }
      case 2: {
        i.setHeadingSpeed(1.570796, 1), i.f0 = 1.570796, i.f1 = -0.05236, i.linkChildAttached(3, 0, 0, 100, -2, 100), yield 10, e = 3;
        break;
      }
      case 3: {
        i.linkChildAttached(3, 0, 0, 100, -2, 100), yield 10, e = 4;
        break;
      }
      case 4: {
        i.linkChildAttached(3, 0, 0, 100, -2, 100), yield 10, e = 5;
        break;
      }
      case 5: {
        i.linkChildAttached(3, 0, 0, 100, -2, 100), yield 5e3, e = 6;
        break;
      }
      case 6:
        return;
      default:
        return;
    }
}
function* m(i) {
  let e = 0, t = 0;
  for (; e >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), e) {
      case 0: {
        i.setAnm(54), i.setBounds(24, 24), i.clearScriptFlags(16), i.setScriptFlags(3), i.setHitFlash(1), i.moveArc(100, i.f0, i.f1, 0.833333), yield 60, e = 1;
        break;
      }
      case 1: {
        i.setAccel(6e3, i.f1, 0), yield 5e3, e = 2;
        break;
      }
      case 2:
        return;
      default:
        return;
    }
}
function* b(i) {
  let e = 0, t = 0;
  for (; e >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), e) {
      case 0: {
        i.setAnm(30), i.setExtraAnm(0, 48), i.setBounds(24, 24), i.setMisc160(30), i.clearScriptFlags(2), i.movePolar(50, 4, 1.570796, 2), yield 30, e = 1;
        break;
      }
      case 1: {
        i.isDiff(r | s) && i.spawnShot({
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
        }), i.isDiff(l | s) && i.spawnShot({
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
        }), i.isDiff(f | s) && i.spawnShot({
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
        }), i.isDiff(n | s) && i.spawnShot({
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
        }), yield 20, e = 2;
        break;
      }
      case 2: {
        i.setHeadingSpeed(1.570796, 1), i.f0 = 1.570796, i.f1 = 0.05236, i.linkChildAttached(3, 0, 0, 100, -2, 100), yield 10, e = 3;
        break;
      }
      case 3: {
        i.linkChildAttached(3, 0, 0, 100, -2, 100), yield 10, e = 4;
        break;
      }
      case 4: {
        i.linkChildAttached(3, 0, 0, 100, -2, 100), yield 10, e = 5;
        break;
      }
      case 5: {
        i.linkChildAttached(3, 0, 0, 100, -2, 100), yield 5e3, e = 6;
        break;
      }
      case 6:
        return;
      default:
        return;
    }
}
function* S(i) {
  let e = 0, t = 0;
  for (; e >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), e) {
      case 0: {
        i.setAnm(30), i.setExtraAnm(0, 48), i.setBounds(24, 24), i.setMisc160(30), i.clearScriptFlags(2), i.movePolar(50, 4, 1.570796, 2), yield 30, e = 1;
        break;
      }
      case 1: {
        i.isDiff(r | s) && i.spawnShot({
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
        }), i.isDiff(l | s) && i.spawnShot({
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
        }), i.isDiff(f | s) && i.spawnShot({
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
        }), i.isDiff(n | s) && i.spawnShot({
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
        }), yield 20, e = 2;
        break;
      }
      case 2: {
        i.setHeadingSpeed(1.570796, 0.4), i.f0 = 1.570796, i.f1 = -0.05236, i.linkChildAttached(3, 0, 0, 100, -2, 100), yield 10, e = 3;
        break;
      }
      case 3: {
        i.linkChildAttached(3, 0, 0, 100, -2, 100), yield 10, e = 4;
        break;
      }
      case 4: {
        i.linkChildAttached(3, 0, 0, 100, -2, 100), yield 10, e = 5;
        break;
      }
      case 5: {
        i.linkChildAttached(3, 0, 0, 100, -2, 100), yield 5e3, e = 6;
        break;
      }
      case 6:
        return;
      default:
        return;
    }
}
function* h(i) {
  let e = 0, t = 0;
  for (; e >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), e) {
      case 0: {
        i.setAnm(30), i.setExtraAnm(0, 48), i.setBounds(24, 24), i.setMisc160(30), i.clearScriptFlags(2), i.movePolar(50, 4, 1.570796, 2), yield 30, e = 1;
        break;
      }
      case 1: {
        i.isDiff(r | s) && i.spawnShot({
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
        }), i.isDiff(l | s) && i.spawnShot({
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
        }), i.isDiff(f | s) && i.spawnShot({
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
        }), i.isDiff(n | s) && i.spawnShot({
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
        }), yield 20, e = 2;
        break;
      }
      case 2: {
        i.setHeadingSpeed(1.570796, 0.4), i.f0 = 1.570796, i.f1 = 0.05236, i.linkChildAttached(3, 0, 0, 100, -2, 100), yield 10, e = 3;
        break;
      }
      case 3: {
        i.linkChildAttached(3, 0, 0, 100, -2, 100), yield 10, e = 4;
        break;
      }
      case 4: {
        i.linkChildAttached(3, 0, 0, 100, -2, 100), yield 10, e = 5;
        break;
      }
      case 5: {
        i.linkChildAttached(3, 0, 0, 100, -2, 100), yield 5e3, e = 6;
        break;
      }
      case 6:
        return;
      default:
        return;
    }
}
function* w(i) {
  let e = 0, t = 0;
  for (; e >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), e) {
      case 0: {
        i.setAnm(18), i.setBounds(24, 24), i.clearScriptFlags(2), i.setMisc144(3, 2), i.linkChildAttached(9, -32, 0, 100, -2, 100), i.linkChildAttached(9, 32, 0, 100, -2, 100), i.movePolar(60, 4, 1.570796, 2.1), yield 60, e = 1;
        break;
      }
      case 1: {
        i.movePolar(60, 4, 0.392699, 2), i.isDiff(r | s) && i.spawnShot({
          mode: "aimedRing",
          // aim 2 of 96..104
          type: 2,
          color: 2,
          count: 16,
          rings: 1,
          speed: 1,
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
        }), i.isDiff(f | s) && i.spawnShot({
          mode: "aimedRing",
          // aim 2 of 96..104
          type: 2,
          color: 2,
          count: 32,
          rings: 3,
          speed: 2.6,
          speed2: 0.8,
          angle: 0,
          angleStep: 0,
          transform: 514
        }), i.isDiff(n | s) && i.spawnShot({
          mode: "aimedRing",
          // aim 2 of 96..104
          type: 2,
          color: 2,
          count: 48,
          rings: 4,
          speed: 3.3,
          speed2: 0.8,
          angle: 0,
          angleStep: 0,
          transform: 514
        }), yield 60, e = 2;
        break;
      }
      case 2: {
        i.setHeadingSpeed(0.392699, 0), i.setSpeedAccel(0.03), yield 60, e = 3;
        break;
      }
      case 3: {
        i.setSpeedAccel(0), yield 5e3, e = 4;
        break;
      }
      case 4:
        return;
      default:
        return;
    }
}
function* A(i) {
  let e = 0, t = 0;
  for (; e >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), e) {
      case 0: {
        i.f1 = 1.6, i.setShotRecord(1, 16384, 0, 6, 6, -1, -1), i.isDiff(r | s) && i.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 2,
          color: 2,
          count: 1,
          rings: 2,
          speed: 1.6,
          speed2: 0.8,
          angle: 0,
          angleStep: 0.3926991,
          transform: 514
        }), i.isDiff(l | s) && i.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 2,
          color: 2,
          count: 5,
          rings: 2,
          speed: 1.6,
          speed2: 0.8,
          angle: 0,
          angleStep: 0.3926991,
          transform: 514
        }), i.isDiff(f | s) && i.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 2,
          color: 2,
          count: 5,
          rings: 3,
          speed: 2.2,
          speed2: 0.8,
          angle: 0,
          angleStep: 0.3926991,
          transform: 514
        }), i.isDiff(n | s) && i.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 2,
          color: 2,
          count: 5,
          rings: 4,
          speed: 3.5,
          speed2: 0.8,
          angle: 0,
          angleStep: 0.3926991,
          transform: 514
        }), e = 1;
        break;
      }
      case 1: {
        i.isDiff(r | s) && (i.f0 = 1), i.isDiff(l | s) && (i.f0 = 1), i.isDiff(f | s) && (i.f0 = 1.5), i.isDiff(n | s) && (i.f0 = 2), i.ci0 = 10, e = 2;
        break;
      }
      case 2: {
        i.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 3,
          color: 6,
          count: 1,
          rings: 1,
          speed: a(10016),
          speed2: 0.5,
          angle: 1.5707964,
          angleStep: 0.28559932,
          transform: 514
        }), i.f0 += 0.15, yield 3, e = 3;
        break;
      }
      case 3: {
        if (--i.ci0 > 0) {
          e = 2;
          break;
        }
        e = 4;
        break;
      }
      case 4: {
        i.f0 = 1, i.ci0 = 10, i.setShotRecord(0, 128, 0, 30, 1, 0, i.f1), i.isDiff(f | s) && i.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 2,
          color: 2,
          count: 5,
          rings: 3,
          speed: 2.2,
          speed2: 0.8,
          angle: 0,
          angleStep: 0.3926991,
          transform: 514
        }), i.isDiff(n | s) && i.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 2,
          color: 2,
          count: 5,
          rings: 4,
          speed: 3.5,
          speed2: 0.8,
          angle: 0,
          angleStep: 0.3926991,
          transform: 514
        }), e = 5;
        break;
      }
      case 5: {
        i.isDiff(l | s) && i.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 3,
          color: 2,
          count: 1,
          rings: 1,
          speed: a(10016),
          speed2: 0.5,
          angle: 1.5707964,
          angleStep: 0.28559932,
          transform: 17026
        }), i.isDiff(f | s) && i.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 3,
          color: 2,
          count: 1,
          rings: 1,
          speed: a(10016),
          speed2: 0.5,
          angle: 1.5707964,
          angleStep: 0.28559932,
          transform: 17026
        }), i.isDiff(n | s) && i.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 3,
          color: 2,
          count: 1,
          rings: 1,
          speed: a(10016),
          speed2: 0.5,
          angle: 1.5707964,
          angleStep: 0.28559932,
          transform: 17026
        }), i.f0 += 0.15, yield 3, e = 6;
        break;
      }
      case 6: {
        if (--i.ci0 > 0) {
          e = 5;
          break;
        }
        e = 7;
        break;
      }
      case 7: {
        e = 1;
        break;
      }
      default:
        return;
    }
}
function* D(i) {
  let e = 0, t = 0;
  for (; e >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), e) {
      case 0: {
        i.setAnm(53), i.setBounds(24, 24), i.clearScriptFlags(16), i.setHitFlash(1), yield 30, e = 1;
        break;
      }
      case 1: {
        i.callSubAlloc(0, 8), yield 5e3, e = 2;
        break;
      }
      case 2:
        return;
      default:
        return;
    }
}
function* M(i) {
  let e = 0, t = 0;
  for (; e >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), e) {
      case 0: {
        i.setAnm(30), i.setExtraAnm(0, 48), i.setBounds(24, 24), i.setMisc160(30), i.clearScriptFlags(2), i.movePolar(60, 4, 1.570796, 2), yield 60, e = 1;
        break;
      }
      case 1: {
        i.setHeadingSpeed(1.570796, 1), i.f0 = 1.570796, i.f1 = 0.05236, i.linkChildAttached(3, 0, 0, 100, -2, 100), yield 10, e = 2;
        break;
      }
      case 2: {
        i.linkChildAttached(3, 0, 0, 100, -2, 100), yield 10, e = 3;
        break;
      }
      case 3: {
        i.linkChildAttached(3, 0, 0, 100, -2, 100), yield 10, e = 4;
        break;
      }
      case 4: {
        i.linkChildAttached(3, 0, 0, 100, -2, 100), yield 200, e = 5;
        break;
      }
      case 5: {
        i.callSubAlloc(0, 11), yield 5e3, e = 6;
        break;
      }
      case 6:
        return;
      default:
        return;
    }
}
function* I(i) {
  let e = 0, t = 0;
  for (; e >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), e) {
      case 0: {
        i.ci0 = 5, e = 1;
        break;
      }
      case 1: {
        i.spawnShot({
          mode: "aimedRing",
          // aim 2 of 96..104
          type: 1,
          color: 6,
          count: 8,
          rings: 2,
          speed: 2,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.3926991,
          transform: 515
        }), yield 60, e = 2;
        break;
      }
      case 2: {
        if (--i.ci0 > 0) {
          e = 1;
          break;
        }
        e = 3;
        break;
      }
      case 3:
        return;
      default:
        return;
    }
}
function* z(i) {
  let e = 0, t = 0;
  for (; e >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), e) {
      case 0: {
        i.setAnm(30), i.setExtraAnm(0, 48), i.setBounds(24, 24), i.setMisc160(30), i.clearScriptFlags(2), i.movePolar(60, 4, 1.570796, 2), yield 60, e = 1;
        break;
      }
      case 1: {
        i.setHeadingSpeed(1.570796, 1), i.f0 = 1.570796, i.f1 = -0.05236, i.linkChildAttached(3, 0, 0, 100, -2, 100), yield 10, e = 2;
        break;
      }
      case 2: {
        i.linkChildAttached(3, 0, 0, 100, -2, 100), yield 10, e = 3;
        break;
      }
      case 3: {
        i.linkChildAttached(3, 0, 0, 100, -2, 100), yield 10, e = 4;
        break;
      }
      case 4: {
        i.linkChildAttached(3, 0, 0, 100, -2, 100), yield 120, e = 5;
        break;
      }
      case 5: {
        i.callSubAlloc(0, 11), yield 5e3, e = 6;
        break;
      }
      case 6:
        return;
      default:
        return;
    }
}
function* F(i) {
  let e = 0, t = 0;
  for (; e >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), e) {
      case 0: {
        i.setAnm(42), i.setExtraAnm(0, 48), i.setBounds(24, 24), i.clearScriptFlags(2), i.setMisc144(5, 3), i.setMisc160(180), i.movePolar(60, 4, 1.570796, 1.2), yield 60, e = 1;
        break;
      }
      case 1: {
        i.ci0 = 50, e = 2;
        break;
      }
      case 2: {
        if (i.f0 = -0.02618, i.linkChildRelative(16, 0, 0, 100, -2, 100), i.i0 = i.ci0 % 3, i.i0 != 0) {
          yield 30, e = 4;
          break;
        }
        e = 3;
        break;
      }
      case 3: {
        i.isDiff(l | s) && i.spawnShot({
          mode: "aimedRing",
          // aim 2 of 96..104
          type: 1,
          color: 2,
          count: 32,
          rings: 1,
          speed: 1,
          speed2: 0.5,
          angle: 0,
          angleStep: 0,
          transform: 514
        }), i.isDiff(f | s) && i.spawnShot({
          mode: "aimedRing",
          // aim 2 of 96..104
          type: 1,
          color: 2,
          count: 32,
          rings: 2,
          speed: 2,
          speed2: 0.5,
          angle: 0,
          angleStep: 0,
          transform: 514
        }), i.isDiff(n | s) && i.spawnShot({
          mode: "aimedRing",
          // aim 2 of 96..104
          type: 1,
          color: 2,
          count: 32,
          rings: 3,
          speed: 3,
          speed2: 0.5,
          angle: 0,
          angleStep: 0,
          transform: 514
        }), yield 30, e = 4;
        break;
      }
      case 4: {
        if (--i.ci0 > 0) {
          e = 2;
          break;
        }
        e = 5;
        break;
      }
      case 5: {
        i.setHeadingSpeed(-1.570796, 0), i.setSpeedAccel(0.04), yield 5e3, e = 6;
        break;
      }
      case 6:
        return;
      default:
        return;
    }
}
function* C(i) {
  let e = 0, t = 0;
  for (; e >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), e) {
      case 0: {
        i.setAnm(42), i.setExtraAnm(0, 48), i.setBounds(24, 24), i.clearScriptFlags(2), i.setMisc144(5, 3), i.setMisc160(180), i.movePolar(60, 4, 1.570796, 1.2), yield 60, e = 1;
        break;
      }
      case 1: {
        i.ci0 = 50, e = 2;
        break;
      }
      case 2: {
        if (i.f0 = 0.02618, i.linkChildRelative(16, 0, 0, 100, -2, 100), i.i0 = i.ci0 % 3, i.i0 != 0) {
          yield 30, e = 4;
          break;
        }
        e = 3;
        break;
      }
      case 3: {
        i.isDiff(l | s) && i.spawnShot({
          mode: "aimedRing",
          // aim 2 of 96..104
          type: 1,
          color: 6,
          count: 32,
          rings: 1,
          speed: 1,
          speed2: 0.5,
          angle: 0,
          angleStep: 0,
          transform: 514
        }), i.isDiff(f | s) && i.spawnShot({
          mode: "aimedRing",
          // aim 2 of 96..104
          type: 1,
          color: 6,
          count: 32,
          rings: 2,
          speed: 2,
          speed2: 0.5,
          angle: 0,
          angleStep: 0,
          transform: 514
        }), i.isDiff(n | s) && i.spawnShot({
          mode: "aimedRing",
          // aim 2 of 96..104
          type: 1,
          color: 6,
          count: 32,
          rings: 3,
          speed: 3,
          speed2: 0.5,
          angle: 0,
          angleStep: 0,
          transform: 514
        }), yield 30, e = 4;
        break;
      }
      case 4: {
        if (--i.ci0 > 0) {
          e = 2;
          break;
        }
        e = 5;
        break;
      }
      case 5: {
        i.setHeadingSpeed(-1.570796, 0), i.setSpeedAccel(0.04), yield 5e3, e = 6;
        break;
      }
      case 6:
        return;
      default:
        return;
    }
}
function* R(i) {
  let e = 0, t = 0;
  for (; e >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), e) {
      case 0: {
        i.i0 = i.randU31 % 30, i.i0 += 10, yield i.delay(i.i0), i.isDiff(r | s) && (i.i0 = 300), i.isDiff(l | s) && (i.i0 = 120), i.isDiff(f | s) && (i.i0 = 60), i.isDiff(n | s) && (i.i0 = 40), i.ci0 = 20, e = 1;
        break;
      }
      case 1: {
        if (i.isDiff(r | s) && i.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 0,
          color: 6,
          count: 1,
          rings: 1,
          speed: 1.6,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.034906585,
          transform: 3
        }), i.isDiff(l | s) && i.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 0,
          color: 6,
          count: 1,
          rings: 1,
          speed: 1.8,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.034906585,
          transform: 3
        }), i.isDiff(f | s) && i.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 0,
          color: 6,
          count: 1,
          rings: 1,
          speed: 2.2,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.034906585,
          transform: 3
        }), i.isDiff(n | s) && i.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 0,
          color: 6,
          count: 1,
          rings: 2,
          speed: 2.9,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.034906585,
          transform: 3
        }), yield i.delay(i.i0), --i.ci0 > 0) {
          e = 1;
          break;
        }
        e = 2;
        break;
      }
      case 2:
        return;
      default:
        return;
    }
}
function* v(i) {
  let e = 0, t = 0;
  for (; e >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), e) {
      case 0: {
        i.setAnm(56), i.setBounds(24, 24), i.setScriptFlags(3), i.setHitFlash(1), i.callSubAlloc(0, 15), i.setHeadingSpeed(1.570796, 2), yield 40, e = 1;
        break;
      }
      case 1: {
        i.setHeadingVel(i.f0), yield 40, e = 2;
        break;
      }
      case 2: {
        i.setHeadingVel(0), yield 40, e = 3;
        break;
      }
      case 3: {
        i.setHeadingVel(i.f0), yield 20, e = 4;
        break;
      }
      case 4: {
        i.setHeadingVel(0), yield 5e3, e = 5;
        break;
      }
      case 5:
        return;
      default:
        return;
    }
}
function* E(i) {
  let e = 0, t = 0;
  for (; e >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), e) {
      case 0: {
        i.setAnmScripts6(0), i.setBounds(24, 24), i.f2 = i.posX, i.f3 = i.posY, i.f0 = i.playerX - i.posX, i.f1 = i.playerY - i.posY, i.f0 *= 0.6, i.f1 *= 0.6, i.f0 += i.posX, i.f1 += i.posY, i.moveRelative(100, 4, i.f0, i.f1), i.ci0 = 90, i.holdShots(), i.isDiff(l | s) && i.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 3,
          color: 6,
          count: 1,
          rings: 1,
          speed: 1.6,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.09817477,
          transform: 514
        }), i.isDiff(f | s) && i.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 3,
          color: 6,
          count: 1,
          rings: 1,
          speed: 2.4,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.09817477,
          transform: 514
        }), i.isDiff(n | s) && i.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 3,
          color: 6,
          count: 1,
          rings: 1,
          speed: 4,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.09817477,
          transform: 514
        }), i.releaseShots(), i.isDiff(f | s) && i.setShotRepeat(60), i.isDiff(f | s) && i.setShotRepeat(20), i.isDiff(n | s) && i.setShotRepeat(10), e = 1;
        break;
      }
      case 1: {
        i.f0 = i.playerX - i.f2, i.f1 = i.playerY - i.f3, i.f0 *= 0.6, i.f1 *= 0.6, i.f4 = i.f0 - i.tweenDX, i.f5 = i.f1 - i.tweenDY, i.f4 *= 2e-3, i.f5 *= 2e-3, i.tweenDX += i.f4, i.tweenDY += i.f5, yield 1, e = 2;
        break;
      }
      case 2: {
        if (--i.ci0 > 0) {
          e = 1;
          break;
        }
        e = 3;
        break;
      }
      case 3: {
        i.isDiff(l | f | n | s) && i.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 3,
          color: 6,
          count: 1,
          rings: 3,
          speed: 2,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.18479957,
          transform: 515
        }), i.f2 = i.timer + 3.141593, i.setHeadingSpeed(i.f2, 0.1), i.setSpeedAccel(0.01), yield 5e3, e = 4;
        break;
      }
      case 4:
        return;
      default:
        return;
    }
}
function* _(i) {
  let e = 0, t = 0;
  for (; e >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), e) {
      case 0: {
        i.setAnm(50), i.setBounds(24, 24), i.clearScriptFlags(2), i.setMisc160(8), i.f0 = i.randF32 * 1, i.f0 += 1, i.setHeadingSpeed(1.570796, i.f0), yield 5e3, e = 1;
        break;
      }
      case 1:
        return;
      default:
        return;
    }
}
function* B(i) {
  let e = 0, t = 0;
  for (; e >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), e) {
      case 0: {
        i.clearScriptFlags(56), i.spawnEffectAt(51, 16, 0), yield 4, e = 1;
        break;
      }
      case 1: {
        i.spawnEffectAt(51, 16, 0), yield 4, e = 2;
        break;
      }
      case 2: {
        i.spawnEffectAt(51, 16, 0), yield 4, e = 3;
        break;
      }
      case 3: {
        i.spawnEffectAt(51, 16, 0), yield 4, e = 4;
        break;
      }
      case 4: {
        i.spawnEffectAt(51, 16, 0), yield 4, e = 5;
        break;
      }
      case 5: {
        i.spawnEffectAt(51, 16, 0), e = 6;
        break;
      }
      case 6: {
        i.spawnEffectAt(51, 4, 0), yield 4, e = 7;
        break;
      }
      case 7: {
        e = 6;
        break;
      }
      case 8:
        return;
      default:
        return;
    }
}
function* x(i) {
  let e = 0, t = 0;
  for (; e >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), e) {
      case 0: {
        i.setAnmScripts6Alt(0), i.clearScriptFlags(20), i.setBossPresent(0), i.setBounds(48, 48), i.setMisc160(60), i.setLives(16e3), i.setLifeBarSlice(0, 0, i.maxHp, -1), i.setSpellTimer(2220, 29), i.setPhase(0, 2100, 29), i.setLifeBarSlice(0, 0, i.phase0, 16752800), i.setRelPos(-32, 256), i.moveRelative(60, 4, 192, 128), yield 60, e = 1;
        break;
      }
      case 1: {
        i.spawnEffect(6, 1050253722, 1060320051, 1050253722, 1124073472), yield 10, e = 2;
        break;
      }
      case 2: {
        i.spawnEffect(6, -1097229926, 1060320051, 1050253722, 1124073472), yield 10, e = 3;
        break;
      }
      case 3: {
        i.spawnEffect(6, 1050253722, 1060320051, -1097229926, 1124073472), yield 10, e = 4;
        break;
      }
      case 4: {
        i.spawnEffect(6, -1097229926, -1087163597, -1097229926, 1119879168), yield 10, e = 5;
        break;
      }
      case 5: {
        i.spawnEffect(6, 1050253722, -1087163597, -1097229926, 1119879168), yield 10, e = 6;
        break;
      }
      case 6: {
        i.spawnEffect(6, -1097229926, -1087163597, 1050253722, 1119879168), yield 10, e = 7;
        break;
      }
      case 7: {
        i.setMotionClamp(32, 48, 352, 128), yield* o(i), e = 8;
        break;
      }
      case 8:
        return;
      default:
        return;
    }
}
function* o(i) {
  let e = 0, t = 0;
  for (; e >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), e) {
      case 0: {
        i.setScriptFlags(4), i.setMisc144(7, 4), i.callSubAlloc(0, 22), e = 1;
        break;
      }
      case 1: {
        i.autoAnm(), i.f1 = 0.15708, i.linkChildStandard(24, 64, 128, 1350, -2, 100), i.f1 = -0.15708, i.linkChildStandard(24, 320, 128, 1350, -2, 100), i.f1 = -0.15708, i.linkChildStandard(24, 152, 220, 750, -2, 100), i.f1 = 0.15708, i.linkChildStandard(24, 232, 220, 750, -2, 100), yield 180, e = 2;
        break;
      }
      case 2: {
        i.moveBounce(60, 4, 1), yield 60, e = 3;
        break;
      }
      case 3: {
        i.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 2,
          color: 2,
          count: 5,
          rings: 5,
          speed: 2.2,
          speed2: 1,
          angle: 0,
          angleStep: 0.3926991,
          transform: 514
        }), i.autoAnm(), yield 60, e = 4;
        break;
      }
      case 4: {
        i.moveBounce(60, 4, 1), yield 60, e = 5;
        break;
      }
      case 5: {
        i.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 2,
          color: 2,
          count: 5,
          rings: 5,
          speed: 2.2,
          speed2: 1,
          angle: 0,
          angleStep: 0.3926991,
          transform: 514
        }), i.autoAnm(), yield 160, e = 6;
        break;
      }
      case 6: {
        i.playSfx(5), yield 40, e = 7;
        break;
      }
      case 7: {
        i.autoAnm(), i.f1 = -0.10472, i.linkChildStandard(24, 32, 188, 1350, -2, 100), i.f1 = 0.10472, i.linkChildStandard(24, 352, 188, 1350, -2, 100), i.f1 = 0.10472, i.linkChildStandard(24, 162, 150, 750, -2, 100), i.f1 = -0.10472, i.linkChildStandard(24, 222, 150, 750, -2, 100), yield 180, e = 8;
        break;
      }
      case 8: {
        i.moveBounce(60, 4, 1), yield 60, e = 9;
        break;
      }
      case 9: {
        i.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 2,
          color: 2,
          count: 5,
          rings: 5,
          speed: 2.2,
          speed2: 1,
          angle: 0,
          angleStep: 0.3926991,
          transform: 514
        }), i.autoAnm(), yield 60, e = 10;
        break;
      }
      case 10: {
        i.moveBounce(60, 4, 1), yield 60, e = 11;
        break;
      }
      case 11: {
        i.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 2,
          color: 2,
          count: 5,
          rings: 5,
          speed: 2.2,
          speed2: 1,
          angle: 0,
          angleStep: 0.3926991,
          transform: 514
        }), i.autoAnm(), yield 160, e = 12;
        break;
      }
      case 12: {
        i.playSfx(5), yield 40, e = 13;
        break;
      }
      case 13: {
        i.autoAnm(), e = 1;
        break;
      }
      default:
        return;
    }
}
function* Y(i) {
  let e = 0, t = 0;
  for (; e >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), e) {
      case 0: {
        i.isDiff(r | s) && (i.i0 = 300), i.isDiff(l | s) && (i.i0 = 120), i.isDiff(f | s) && (i.i0 = 90), i.isDiff(n | s) && (i.i0 = 60), i.isDiff(r | s) && (i.i1 = 16), i.isDiff(l | s) && (i.i1 = 24), i.isDiff(f | s) && (i.i1 = 32), i.isDiff(n | s) && (i.i1 = 32), e = 1;
        break;
      }
      case 1: {
        i.spawnShot({
          mode: "aimedRing",
          // aim 2 of 96..104
          type: 2,
          color: 2,
          count: a(10001),
          rings: 1,
          speed: 2,
          speed2: 1,
          angle: 0,
          angleStep: 0.3926991,
          transform: 514
        }), yield i.delay(i.i0), e = 1;
        break;
      }
      default:
        return;
    }
}
function* X(i) {
  let e = 0, t = 0;
  for (; e >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), e) {
      case 0: {
        i.ci0 = 3, i.f0 = 1.570796, i.isDiff(r | s) && (i.f7 = 1), i.isDiff(l | s) && (i.f7 = 1), i.isDiff(f | s) && (i.f7 = 1.8), i.isDiff(n | s) && (i.f7 = 3), i.isDiff(r | s) && (i.f6 = 1.4), i.isDiff(l | s) && (i.f6 = 1.8), i.isDiff(f | s) && (i.f6 = 2.4), i.isDiff(n | s) && (i.f6 = 4), i.isDiff(r | s) && (i.i7 = 18), i.isDiff(l | s) && (i.i7 = 18), i.isDiff(f | s) && (i.i7 = 17), i.isDiff(n | s) && (i.i7 = 14), e = 1;
        break;
      }
      case 1: {
        if (i.isDiff(r | l | f | n | s) && i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 3,
          color: 6,
          count: 4,
          rings: 1,
          speed: a(10023),
          speed2: 0.5,
          angle: a(10016),
          angleStep: 0.2617994,
          transform: 514
        }), i.isDiff(r | l | f | n | s) && i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 3,
          color: 8,
          count: 4,
          rings: 1,
          speed: a(10022),
          speed2: 0.5,
          angle: a(10016),
          angleStep: 0.2617994,
          transform: 514
        }), yield i.delay(i.i7), i.isDiff(l | f | n) && i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 3,
          color: 6,
          count: 4,
          rings: 1,
          speed: a(10023),
          speed2: 0.5,
          angle: a(10016),
          angleStep: 0.2617994,
          transform: 514
        }), i.isDiff(l | f | n) && i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 3,
          color: 8,
          count: 4,
          rings: 1,
          speed: a(10022),
          speed2: 0.5,
          angle: a(10016),
          angleStep: 0.2617994,
          transform: 514
        }), yield i.delay(i.i7), --i.ci0 > 0) {
          e = 1;
          break;
        }
        e = 2;
        break;
      }
      case 2: {
        i.isDiff(r | l | f | n | s) && i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 3,
          color: 6,
          count: 4,
          rings: 1,
          speed: a(10023),
          speed2: 0.5,
          angle: a(10016),
          angleStep: 0.2617994,
          transform: 514
        }), i.isDiff(r | l | f | n | s) && i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 3,
          color: 8,
          count: 4,
          rings: 1,
          speed: a(10022),
          speed2: 0.5,
          angle: a(10016),
          angleStep: 0.2617994,
          transform: 514
        }), i.f0 += i.f1, yield i.delay(i.i7), i.isDiff(l | f | n) && i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 3,
          color: 6,
          count: 4,
          rings: 1,
          speed: a(10023),
          speed2: 0.5,
          angle: a(10016),
          angleStep: 0.2617994,
          transform: 514
        }), i.isDiff(l | f | n) && i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 3,
          color: 8,
          count: 4,
          rings: 1,
          speed: a(10022),
          speed2: 0.5,
          angle: a(10016),
          angleStep: 0.2617994,
          transform: 514
        }), i.f0 += i.f1, i.f0 = c(i.f0), yield i.delay(i.i7), e = 2;
        break;
      }
      case 3:
        return;
      default:
        return;
    }
}
function* H(i) {
  let e = 0, t = 0;
  for (; e >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), e) {
      case 0: {
        i.setAnm(53), i.setHitFlash(1), i.effectWithYoukai(1), i.setMisc145(1), i.setBounds(24, 24), i.setMisc160(30), yield 60, e = 1;
        break;
      }
      case 1: {
        i.callSubAlloc(0, 23), yield 1200, e = 2;
        break;
      }
      case 2:
        return;
      default:
        return;
    }
}
function* T(i) {
  let e = 0, t = 0;
  for (; e >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), e) {
      case 0: {
        i.setBossPresent(0), i.setAnmAlt(0), i.setAnmScripts6Alt(0), i.setMisc126(27, 1), yield 100, e = 1;
        break;
      }
      case 1: {
        e = 1;
        break;
      }
      default:
        return;
    }
}
function* P(i) {
  let e = 0, t = 0;
  for (; e >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), e) {
      case 0: {
        i.endSpell(), i.clearScriptFlags(3), i.setMisc129(1), i.setDeathCallbackSub(25), yield 30, e = 1;
        break;
      }
      case 1: {
        i.setBossPresent(-1), i.setAnmAlt(0), i.setAnmScripts6Alt(0), i.setMisc126(25, 1), yield 100, e = 2;
        break;
      }
      case 2: {
        e = 2;
        break;
      }
      default:
        return;
    }
}
function* L(i) {
  let e = 0, t = 0;
  for (; e >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), e) {
      case 0: {
        i.setBossPresent(-1), i.moveRelative(60, 1, 256, -32), i.spawnItemRandom(5), i.spawnItemBatch(3), i.spawnItem(5), i.clearMotionClamp(), yield 60, e = 1;
        break;
      }
      case 1:
        return;
      default:
        return;
    }
}
function* O(i) {
  let e = 0, t = 0;
  for (; e >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), e) {
      case 0: {
        i.setAnmAlt(0), i.setAnmScripts6Alt(0), i.setMisc126(30, 1), i.setLives(16e3), i.maxHp = 2100, yield 1, e = 1;
        break;
      }
      case 1: {
        i.setBossPresent(0), yield 100, e = 2;
        break;
      }
      case 2: {
        e = 2;
        break;
      }
      default:
        return;
    }
}
function* W(i) {
  let e = 0, t = 0;
  for (; e >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), e) {
      case 0: {
        i.clearAllBullets(), i.clearScriptFlags(3), i.moveRelative(60, 4, 192, 128), yield 60, e = 1;
        break;
      }
      case 1: {
        i.setBossPresent(-1), i.setMisc129(1), i.setDeathCallbackSub(28), i.setAnmAlt(0), i.setAnmScripts6Alt(0), i.setMisc126(30, 1), yield 1, e = 2;
        break;
      }
      case 2: {
        i.setBossPresent(0), yield 100, e = 3;
        break;
      }
      case 3: {
        e = 3;
        break;
      }
      default:
        return;
    }
}
function* V(i) {
  let e = 0, t = 0;
  for (; e >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), e) {
      case 0: {
        i.setScriptFlags(3), i.setMisc177(i.maxHp), i.setMotionClamp(32, 48, 352, 224), i.setMisc129(3), i.setDeathCallbackSub(26), i.setShotRepeat(0), i.enemyFunc95(), i.setShotSound(-1, -1), i.clearScriptFlags(4), i.setShotOrigin(0, 0), i.setSpellTimer(2280, 26), i.resetSpellTimerSub(), i.setSpellTimerElapsed(0), i.ci3 = 0, i.moveRelative(90, 4, 192, 192), i.isDiff(r | s) && i.startSpell("産霊「ファーストピラミッド」", "上白沢慧音", 32, 0, 2e7), i.isDiff(l | s) && i.startSpell("産霊「ファーストピラミッド」", "上白沢慧音", 33, 0, 2e7), i.isDiff(f | s) && i.startSpell("産霊「ファーストピラミッド」", "上白沢慧音", 34, 0, 2e7), i.isDiff(n | s) && i.startSpell("産霊「ファーストピラミッド」", "上白沢慧音", 35, 0, 2e7), yield 90, e = 1;
        break;
      }
      case 1: {
        i.setScriptFlags(4), i.setMisc160(180), i.ci3 = 5, i.f4 = 0.049087, i.f7 = 1.570796, i.f6 = i.f7 / 2.5, e = 2;
        break;
      }
      case 2: {
        if (i.autoAnm(), i.f0 = -1.570796, i.f1 = -0.07854, i.f2 = 1.6, i.linkChildStandard(33, i.posX, i.posY, 1500, -2, 100), i.f0 += 2.094395, i.linkChildStandard(33, i.posX, i.posY, 1500, -2, 100), i.f0 += 2.094395, i.linkChildStandard(33, i.posX, i.posY, 1500, -2, 100), i.difficulty == 0) {
          yield 100, e = 6;
          break;
        }
        e = 3;
        break;
      }
      case 3: {
        if (i.f0 = 1.570796, i.f1 = 0.07854, i.f2 = 2.4, i.linkChildStandard(33, i.posX, i.posY, 150, -2, 100), i.f0 += 2.094395, i.linkChildStandard(33, i.posX, i.posY, 150, -2, 100), i.f0 += 2.094395, i.linkChildStandard(33, i.posX, i.posY, 150, -2, 100), i.difficulty == 1) {
          yield 100, e = 6;
          break;
        }
        e = 4;
        break;
      }
      case 4: {
        if (i.f0 = 3.141593, i.f1 = -0.07854, i.f2 = 3.2, i.linkChildStandard(33, i.posX, i.posY, 150, -2, 100), i.f0 += 2.094395, i.linkChildStandard(33, i.posX, i.posY, 150, -2, 100), i.f0 += 2.094395, i.linkChildStandard(33, i.posX, i.posY, 150, -2, 100), i.difficulty == 2) {
          yield 100, e = 6;
          break;
        }
        e = 5;
        break;
      }
      case 5: {
        i.f0 = 0, i.f1 = 0.07854, i.f2 = 3.6, i.linkChildStandard(33, i.posX, i.posY, 150, -2, 100), i.f0 += 2.094395, i.linkChildStandard(33, i.posX, i.posY, 150, -2, 100), i.f0 += 2.094395, i.linkChildStandard(33, i.posX, i.posY, 150, -2, 100), yield 100, e = 6;
        break;
      }
      case 6: {
        i.callSubAlloc(0, 31), yield 1e3, e = 7;
        break;
      }
      case 7: {
        e = 2;
        break;
      }
      default:
        return;
    }
}
function* G(i) {
  let e = 0, t = 0;
  for (; e >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), e) {
      case 0: {
        i.spawnShot({
          mode: "aimedRing",
          // aim 2 of 96..104
          type: 10,
          color: 1,
          count: 3,
          rings: 3,
          speed: 3,
          speed2: 1.5,
          angle: 0,
          angleStep: 0,
          transform: 4
        }), i.playSfx(15), yield 200, e = 1;
        break;
      }
      case 1: {
        e = 0;
        break;
      }
      case 2:
        return;
      default:
        return;
    }
}
function* N(i) {
  let e = 0, t = 0;
  for (; e >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), e) {
      case 0: {
        i.isDiff(r | s) && (i.i0 = 20), i.isDiff(l | s) && (i.i0 = 14), i.isDiff(f | s) && (i.i0 = 12), i.isDiff(n | s) && (i.i0 = 12), i.isDiff(r | s) && (i.f1 = 1.5), i.isDiff(l | s) && (i.f1 = 1.8), i.isDiff(f | s) && (i.f1 = 2), i.isDiff(n | s) && (i.f1 = 2.2), e = 1;
        break;
      }
      case 1: {
        i.f0 = Math.atan2(i.cf1 - i.posY, i.cf0 - i.posX), i.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 3,
          color: 6,
          count: 2,
          rings: 1,
          speed: a(10017),
          speed2: 0.5,
          angle: a(10016),
          angleStep: 1.0471976,
          transform: 514
        }), yield i.delay(i.i0), i.f0 = Math.atan2(i.cf1 - i.posY, i.cf0 - i.posX), i.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 3,
          color: 6,
          count: 2,
          rings: 1,
          speed: a(10017),
          speed2: 0.5,
          angle: a(10016),
          angleStep: 1.0471976,
          transform: 514
        }), yield i.delay(i.i0), e = 1;
        break;
      }
      case 2:
        return;
      default:
        return;
    }
}
function* j(i) {
  let e = 0, t = 0;
  for (; e >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), e) {
      case 0: {
        i.setAnm(53), i.setHitFlash(1), i.effectWithYoukai(1), i.setMisc145(1), i.setBounds(24, 24), i.setMisc160(30), i.clearScriptFlags(8192), i.cf0 = i.posX, i.cf1 = i.posY, i.moveOrbit(41, i.posX, i.posY, i.f0, i.f1, 0, i.f2), yield 40, e = 1;
        break;
      }
      case 1: {
        i.callSubAlloc(0, 32), i.setAccel(3600, 0, 0), i.f1 /= 7, yield 60, e = 2;
        break;
      }
      case 2: {
        i.setAccel(3600, i.f1, 0), yield 1200, e = 3;
        break;
      }
      case 3:
        return;
      default:
        return;
    }
}
function* Q(i) {
  let e = 0, t = 0;
  for (; e >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), e) {
      case 0: {
        i.setAnmScripts6Alt(0), i.clearScriptFlags(3), i.clearScriptFlags(20), i.setBossPresent(0), i.setBounds(48, 32), i.setMisc160(60), i.eclSetLives(0), i.setSpellTimer(18e4, 44), i.setRelPos(-32, -32), i.moveRelative(60, 4, 192, 128), i.setMisc126(35, 1), yield 100, e = 1;
        break;
      }
      case 1: {
        e = 1;
        break;
      }
      default:
        return;
    }
}
function* U(i) {
  let e = 0, t = 0;
  for (; e >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), e) {
      case 0: {
        i.setScriptFlags(4), i.setScriptFlags(3), i.setMisc160(120), i.setMisc144(10, 5), i.isDiff(r | s) && i.setLives(15100), i.isDiff(l | f | n | s) && i.setLives(16800), i.eclSetLives(1), i.setMisc129(2), i.setDeathCallbackSub(38), i.isDiff(r | s) && i.setSpellTimer(2340, 47), i.isDiff(l | f | n | s) && i.setSpellTimer(2220, 44), i.isDiff(r | s) && i.setPhase(0, 2e3, 47), i.isDiff(l | f | n | s) && i.setPhase(0, 2e3, 46), i.isDiff(l | f | n | s) && i.setPhase(1, 3700, 44), i.setLifeBarSlice(0, 0, i.phase0, 16736352), i.isDiff(l | f | n | s) && i.setLifeBarSlice(1, i.phase0, i.phase1, 16752800), i.spawnEffect(6, 1050253722, 1060320051, 1050253722, 1124073472), yield 10, e = 1;
        break;
      }
      case 1: {
        i.spawnEffect(6, -1097229926, 1060320051, 1050253722, 1124073472), yield 10, e = 2;
        break;
      }
      case 2: {
        i.spawnEffect(6, 1050253722, 1060320051, -1097229926, 1124073472), yield 10, e = 3;
        break;
      }
      case 3: {
        i.spawnEffect(6, -1097229926, -1087163597, -1097229926, 1119879168), yield 10, e = 4;
        break;
      }
      case 4: {
        i.spawnEffect(6, 1050253722, -1087163597, -1097229926, 1119879168), yield 10, e = 5;
        break;
      }
      case 5: {
        i.spawnEffect(6, -1097229926, -1087163597, 1050253722, 1119879168), yield 10, e = 6;
        break;
      }
      case 6: {
        i.setMotionClamp(32, 48, 352, 128), i.i0 = 20, e = 7;
        break;
      }
      case 7: {
        i.autoAnm(), i.i0 = 8, i.i1 = 6, i.i2 = 2, i.f1 = 0.15708, i.linkChildAttached(37, 16, 32, 1e3, -2, 100), i.f1 = -0.15708, i.linkChildAttached(37, -16, 32, 1e3, -2, 100), i.i0 = 8, i.i1 = 2, i.f1 = -0.15708, i.linkChildAttached(37, 32, 0, 1900, -2, 100), i.f1 = 0.15708, i.linkChildAttached(37, -32, 0, 1900, -2, 100), i.i0 = 8, i.i1 = 6, i.f1 = -0.15708, i.linkChildAttached(37, 16, -32, 1500, 1, 100), i.f1 = 0.15708, i.linkChildAttached(37, -16, -32, 1500, 1, 100), yield 200, e = 8;
        break;
      }
      case 8: {
        i.moveBounce(60, 4, 1), yield 100, e = 9;
        break;
      }
      case 9: {
        i.moveBounce(60, 4, 1), yield 100, e = 10;
        break;
      }
      case 10: {
        i.moveBounce(60, 4, 1), yield 100, e = 11;
        break;
      }
      case 11: {
        i.moveBounce(60, 4, 1), yield 100, e = 12;
        break;
      }
      case 12: {
        i.moveBounce(60, 4, 1), yield 60, e = 13;
        break;
      }
      case 13: {
        e = 7;
        break;
      }
      default:
        return;
    }
}
function* q(i) {
  let e = 0, t = 0;
  for (; e >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), e) {
      case 0: {
        i.isDiff(r | s) && (i.ci0 = 2), i.isDiff(l | s) && (i.ci0 = 3), i.isDiff(f | s) && (i.ci0 = 3), i.isDiff(n | s) && (i.ci0 = 3), i.f0 = 1.570796, i.isDiff(r | s) && (i.i0 = 30), i.isDiff(l | s) && (i.i0 = 15), i.isDiff(f | s) && (i.i0 = 13), i.isDiff(n | s) && (i.i0 = 10), i.isDiff(r | s) && (i.f7 = 2), i.isDiff(l | s) && (i.f7 = 2), i.isDiff(f | s) && (i.f7 = 2.2), i.isDiff(n | s) && (i.f7 = 2.5), i.isDiff(r | s) && (i.f6 = 2), i.isDiff(l | s) && (i.f6 = 2.8), i.isDiff(f | s) && (i.f6 = 3.2), i.isDiff(n | s) && (i.f6 = 3.5), e = 1;
        break;
      }
      case 1: {
        if (i.isDiff(r | l | f | n | s) && i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 3,
          color: a(10002),
          count: 8,
          rings: 1,
          speed: a(10022),
          speed2: 0.5,
          angle: a(10016),
          angleStep: 0.2617994,
          transform: 514
        }), i.isDiff(r | l | f | n | s) && i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 3,
          color: a(10001),
          count: 8,
          rings: 1,
          speed: a(10023),
          speed2: 0.5,
          angle: a(10016),
          angleStep: 0.2617994,
          transform: 514
        }), yield i.delay(i.i0), i.isDiff(r | l | f | n | s) && i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 3,
          color: a(10002),
          count: 8,
          rings: 1,
          speed: a(10022),
          speed2: 0.5,
          angle: a(10016),
          angleStep: 0.2617994,
          transform: 514
        }), i.isDiff(r | l | f | n | s) && i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 3,
          color: a(10001),
          count: 8,
          rings: 1,
          speed: a(10023),
          speed2: 0.5,
          angle: a(10016),
          angleStep: 0.2617994,
          transform: 514
        }), yield i.delay(i.i0), --i.ci0 > 0) {
          e = 1;
          break;
        }
        e = 2;
        break;
      }
      case 2: {
        i.isDiff(r | l | f | n | s) && i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 3,
          color: a(10002),
          count: 8,
          rings: 1,
          speed: a(10022),
          speed2: 0.5,
          angle: a(10016),
          angleStep: 0.2617994,
          transform: 514
        }), i.isDiff(r | l | f | n | s) && i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 3,
          color: a(10001),
          count: 8,
          rings: 1,
          speed: a(10023),
          speed2: 0.5,
          angle: a(10016),
          angleStep: 0.2617994,
          transform: 514
        }), i.f0 += i.f1, yield i.delay(i.i0), i.isDiff(r | l | f | n | s) && i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 3,
          color: a(10002),
          count: 8,
          rings: 1,
          speed: a(10022),
          speed2: 0.5,
          angle: a(10016),
          angleStep: 0.2617994,
          transform: 514
        }), i.isDiff(r | l | f | n | s) && i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 3,
          color: a(10001),
          count: 8,
          rings: 1,
          speed: a(10023),
          speed2: 0.5,
          angle: a(10016),
          angleStep: 0.2617994,
          transform: 514
        }), i.f0 += i.f1, i.f1 *= 0.96, i.f0 = c(i.f0), yield i.delay(i.i0), e = 2;
        break;
      }
      case 3:
        return;
      default:
        return;
    }
}
function* J(i) {
  let e = 0, t = 0;
  for (; e >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), e) {
      case 0: {
        i.setAnm(53), i.setHitFlash(1), i.effectWithYoukai(1), i.setMisc145(1), i.setBounds(24, 24), i.setMisc160(30), yield 60, e = 1;
        break;
      }
      case 1: {
        i.callSubAlloc(0, 36), yield 660, e = 2;
        break;
      }
      case 2:
        return;
      default:
        return;
    }
}
function* K(i) {
  let e = 0, t = 0;
  for (; e >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), e) {
      case 0: {
        i.setScriptFlags(4), i.endSpell(), i.setMisc144(10, 5), i.setMisc160(240), i.setLives(17e3), i.eclSetLives(0), i.setMisc129(3), i.setDeathCallbackSub(75), i.isDiff(r | s) && i.setSpellTimer(2280, 50), i.isDiff(r | s) && i.setPhase(1, 4300, 50), i.isDiff(l | s) && i.setSpellTimer(2280, 54), i.isDiff(l | s) && i.setPhase(1, 4300, 54), i.isDiff(f | s) && i.setSpellTimer(2280, 58), i.isDiff(f | s) && i.setPhase(1, 4300, 58), i.isDiff(n | s) && i.setSpellTimer(2280, 62), i.isDiff(n | s) && i.setPhase(1, 4300, 62), i.setPhase(0, 2400, 66), i.setLifeBarSlice(1, i.phase0, i.phase1, 16752800), i.setLifeBarSlice(0, 0, i.phase0, 16736352), yield 10, e = 1;
        break;
      }
      case 1: {
        i.setMotionClamp(32, 48, 352, 128), i.moveBounce(60, 4, 1.4), yield 120, e = 2;
        break;
      }
      case 2: {
        i.nop(), i.autoAnm(), i.i0 = 20, i.i2 = 2, e = 3;
        break;
      }
      case 3: {
        i.autoAnm(), i.i0 = 8, i.i1 = 6, i.f1 = 0.15708, i.linkChildAttached(40, 16, 32, 1e3, -2, 100), i.f1 = -0.15708, i.linkChildAttached(40, -16, 32, 1e3, -2, 100), i.i0 = 8, i.i1 = 2, i.f1 = -0.15708, i.linkChildAttached(40, 32, 0, 1900, -2, 100), i.f1 = 0.15708, i.linkChildAttached(40, -32, 0, 1900, -2, 100), i.i0 = 8, i.i1 = 6, i.f1 = -0.15708, i.linkChildAttached(40, 16, -32, 1500, 1, 100), i.f1 = 0.15708, i.linkChildAttached(40, -16, -32, 1500, 1, 100), yield 10, e = 4;
        break;
      }
      case 4: {
        i.i0 = 8, i.i1 = 6, i.f1 = 0.15708, i.linkChildAttached(42, 32, 64, 900, -2, 100), i.f1 = -0.15708, i.linkChildAttached(42, -32, 64, 900, -2, 100), i.i0 = 8, i.i1 = 2, i.f1 = -0.15708, i.linkChildAttached(42, 64, 0, 1600, -2, 100), i.f1 = 0.15708, i.linkChildAttached(42, -64, 0, 1600, -2, 100), i.i0 = 8, i.i1 = 6, i.f1 = -0.15708, i.linkChildAttached(42, 32, -64, 1600, 1, 100), i.f1 = 0.15708, i.linkChildAttached(42, -32, -64, 1600, 1, 100), yield 200, e = 5;
        break;
      }
      case 5: {
        i.moveBounce(60, 4, 1), yield 100, e = 6;
        break;
      }
      case 6: {
        i.moveBounce(60, 4, 1), yield 100, e = 7;
        break;
      }
      case 7: {
        i.moveBounce(60, 4, 1), yield 100, e = 8;
        break;
      }
      case 8: {
        i.moveBounce(60, 4, 1), yield 100, e = 9;
        break;
      }
      case 9: {
        i.moveBounce(60, 4, 1), yield 60, e = 10;
        break;
      }
      case 10: {
        e = 3;
        break;
      }
      default:
        return;
    }
}
function* Z(i) {
  let e = 0, t = 0;
  for (; e >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), e) {
      case 0: {
        i.isDiff(r | s) && (i.ci0 = 2), i.isDiff(l | s) && (i.ci0 = 3), i.isDiff(f | s) && (i.ci0 = 3), i.isDiff(n | s) && (i.ci0 = 3), i.f0 = 1.570796, i.isDiff(r | s) && (i.i7 = 45), i.isDiff(l | s) && (i.i7 = 20), i.isDiff(f | s) && (i.i7 = 18), i.isDiff(n | s) && (i.i7 = 15), i.isDiff(r | s) && (i.f7 = 2), i.isDiff(l | s) && (i.f7 = 2), i.isDiff(f | s) && (i.f7 = 2), i.isDiff(n | s) && (i.f7 = 2.5), i.isDiff(r | s) && (i.f6 = 2), i.isDiff(l | s) && (i.f6 = 2.8), i.isDiff(f | s) && (i.f6 = 2.8), i.isDiff(n | s) && (i.f6 = 3), e = 1;
        break;
      }
      case 1: {
        if (i.isDiff(r | l | f | n | s) && i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 3,
          color: a(10002),
          count: 4,
          rings: 1,
          speed: a(10022),
          speed2: 0.5,
          angle: a(10016),
          angleStep: 0.2617994,
          transform: 514
        }), i.isDiff(r | l | f | n | s) && i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 3,
          color: a(10001),
          count: 4,
          rings: 1,
          speed: a(10023),
          speed2: 0.5,
          angle: a(10016),
          angleStep: 0.2617994,
          transform: 514
        }), yield i.delay(i.i7), i.isDiff(r | l | f | n | s) && i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 3,
          color: a(10002),
          count: 4,
          rings: 1,
          speed: a(10022),
          speed2: 0.5,
          angle: a(10016),
          angleStep: 0.2617994,
          transform: 514
        }), i.isDiff(r | l | f | n | s) && i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 3,
          color: a(10001),
          count: 4,
          rings: 1,
          speed: a(10023),
          speed2: 0.5,
          angle: a(10016),
          angleStep: 0.2617994,
          transform: 514
        }), yield i.delay(i.i7), --i.ci0 > 0) {
          e = 1;
          break;
        }
        e = 2;
        break;
      }
      case 2: {
        i.isDiff(r | l | f | n | s) && i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 3,
          color: a(10002),
          count: 4,
          rings: 1,
          speed: a(10022),
          speed2: 0.5,
          angle: a(10016),
          angleStep: 0.2617994,
          transform: 514
        }), i.isDiff(r | l | f | n | s) && i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 3,
          color: a(10001),
          count: 4,
          rings: 1,
          speed: a(10023),
          speed2: 0.5,
          angle: a(10016),
          angleStep: 0.2617994,
          transform: 514
        }), i.f0 += i.f1, yield i.delay(i.i7), i.isDiff(r | l | f | n | s) && i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 3,
          color: a(10002),
          count: 4,
          rings: 1,
          speed: a(10022),
          speed2: 0.5,
          angle: a(10016),
          angleStep: 0.2617994,
          transform: 514
        }), i.isDiff(r | l | f | n | s) && i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 3,
          color: a(10001),
          count: 4,
          rings: 1,
          speed: a(10023),
          speed2: 0.5,
          angle: a(10016),
          angleStep: 0.2617994,
          transform: 514
        }), i.f0 += i.f1, i.f1 *= 0.96, i.f0 = c(i.f0), yield i.delay(i.i7), e = 2;
        break;
      }
      case 3:
        return;
      default:
        return;
    }
}
function* $(i) {
  let e = 0, t = 0;
  for (; e >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), e) {
      case 0: {
        i.setAnm(53), i.setHitFlash(1), i.effectWithYoukai(1), i.setMisc145(1), i.setBounds(24, 24), i.setMisc160(30), yield 60, e = 1;
        break;
      }
      case 1: {
        i.callSubAlloc(0, 39), yield 620, e = 2;
        break;
      }
      case 2:
        return;
      default:
        return;
    }
}
function* i0(i) {
  let e = 0, t = 0;
  for (; e >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), e) {
      case 0: {
        i.isDiff(r | s) && (i.ci0 = 2), i.isDiff(l | s) && (i.ci0 = 3), i.isDiff(f | s) && (i.ci0 = 3), i.isDiff(n | s) && (i.ci0 = 3), i.f0 = 1.570796, i.isDiff(r | s) && (i.i7 = 45), i.isDiff(l | s) && (i.i7 = 20), i.isDiff(f | s) && (i.i7 = 18), i.isDiff(n | s) && (i.i7 = 15), i.isDiff(r | s) && (i.f7 = 1.8), i.isDiff(l | s) && (i.f7 = 1.8), i.isDiff(f | s) && (i.f7 = 2), i.isDiff(n | s) && (i.f7 = 3), i.isDiff(r | s) && (i.f6 = 2), i.isDiff(l | s) && (i.f6 = 2.5), i.isDiff(f | s) && (i.f6 = 2.8), i.isDiff(n | s) && (i.f6 = 3.6), e = 1;
        break;
      }
      case 1: {
        if (i.isDiff(r | l | f | n | s) && i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 3,
          color: a(10002),
          count: 8,
          rings: 1,
          speed: a(10022),
          speed2: 0.5,
          angle: a(10016),
          angleStep: 0.2617994,
          transform: 514
        }), i.isDiff(r | l | f | n | s) && i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 3,
          color: a(10001),
          count: 8,
          rings: 1,
          speed: a(10023),
          speed2: 0.5,
          angle: a(10016),
          angleStep: 0.2617994,
          transform: 514
        }), yield i.delay(i.i7), i.isDiff(r | l | f | n | s) && i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 3,
          color: a(10002),
          count: 8,
          rings: 1,
          speed: a(10022),
          speed2: 0.5,
          angle: a(10016),
          angleStep: 0.2617994,
          transform: 514
        }), i.isDiff(r | l | f | n | s) && i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 3,
          color: a(10001),
          count: 8,
          rings: 1,
          speed: a(10023),
          speed2: 0.5,
          angle: a(10016),
          angleStep: 0.2617994,
          transform: 514
        }), yield i.delay(i.i7), --i.ci0 > 0) {
          e = 1;
          break;
        }
        e = 2;
        break;
      }
      case 2: {
        i.isDiff(r | l | f | n | s) && i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 3,
          color: a(10002),
          count: 8,
          rings: 1,
          speed: a(10022),
          speed2: 0.5,
          angle: a(10016),
          angleStep: 0.2617994,
          transform: 514
        }), i.isDiff(r | l | f | n | s) && i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 3,
          color: a(10001),
          count: 8,
          rings: 1,
          speed: a(10023),
          speed2: 0.5,
          angle: a(10016),
          angleStep: 0.2617994,
          transform: 514
        }), i.f0 += i.f1, yield i.delay(i.i7), i.isDiff(r | l | f | n | s) && i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 3,
          color: a(10002),
          count: 8,
          rings: 1,
          speed: a(10022),
          speed2: 0.5,
          angle: a(10016),
          angleStep: 0.2617994,
          transform: 514
        }), i.isDiff(r | l | f | n | s) && i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 3,
          color: a(10001),
          count: 8,
          rings: 1,
          speed: a(10023),
          speed2: 0.5,
          angle: a(10016),
          angleStep: 0.2617994,
          transform: 514
        }), i.f0 += i.f1, i.f1 *= 0.96, i.f0 = c(i.f0), yield i.delay(i.i7), e = 2;
        break;
      }
      case 3:
        return;
      default:
        return;
    }
}
function* e0(i) {
  let e = 0, t = 0;
  for (; e >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), e) {
      case 0: {
        i.setAnm(53), i.setHitFlash(1), i.effectWithYoukai(1), i.setMisc145(1), i.setBounds(24, 24), i.setMisc160(30), yield 60, e = 1;
        break;
      }
      case 1: {
        i.callSubAlloc(0, 41), yield 520, e = 2;
        break;
      }
      case 2:
        return;
      default:
        return;
    }
}
function* s0(i) {
  let e = 0, t = 0;
  for (; e >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), e) {
      case 0: {
        if (i.timeOrbReady >= 2) {
          e = 2;
          break;
        }
        e = 1;
        break;
      }
      case 1:
        return;
      case 2: {
        i.setAnmScripts6Alt(0), i.clearScriptFlags(8), i.eclSetLives(0), i.setBossPresent(0), i.setLives(1800), i.setLifeBarSlice(0, 0, i.maxHp, 16752800), i.complexSetup(1), i.setMotionClamp(32, 48, 352, 128), yield 70, e = 3;
        break;
      }
      case 3: {
        i.playSfx(5), i.spawnEffectAt(40, 1, -1), yield 4, e = 4;
        break;
      }
      case 4: {
        i.spawnEffectAt(40, 1, -12080), yield 4, e = 5;
        break;
      }
      case 5: {
        i.spawnEffectAt(40, 1, -32640), yield 4, e = 6;
        break;
      }
      case 6: {
        i.spawnEffectAt(40, 1, -49088), yield 50, e = 7;
        break;
      }
      case 7: {
        i.playSfx(15), i.setScriptFlags(8), i.setMisc173(1), i.setMisc129(3), i.setDeathCallbackSub(76), yield* u(i);
        return;
      }
      default:
        return;
    }
}
function* t0(i) {
  let e = 0, t = 0;
  for (; e >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), e) {
      case 0: {
        i.setMisc129(2), i.setDeathCallbackSub(46), i.setShotRepeat(0), i.enemyFunc95(), i.setShotSound(-1, -1), i.clearScriptFlags(4), i.setShotOrigin(0, 0), i.setSpellTimer(2040, 38), i.resetSpellTimerSub(), i.setSpellTimerElapsed(0), i.ci3 = 0, i.moveRelative(90, 4, 192, 128), i.isDiff(l | s) && i.startSpell("始符「エフェメラリティ137」", "上白沢慧音", 36, 0, 2e7), i.isDiff(f | s) && i.startSpell("始符「エフェメラリティ137」", "上白沢慧音", 37, 0, 2e7), i.isDiff(n | s) && i.startSpell("始符「エフェメラリティ137」", "上白沢慧音", 38, 0, 2e7), yield 90, e = 1;
        break;
      }
      case 1: {
        i.setScriptFlags(4), i.setMisc160(180), e = 2;
        break;
      }
      case 2: {
        i.autoAnm(), i.spawnEffectAt(40, 1, -16711681), yield 60, e = 3;
        break;
      }
      case 3: {
        i.isDiff(r | s) && (i.ci0 = 3), i.isDiff(l | s) && (i.ci0 = 3), i.isDiff(f | s) && (i.ci0 = 4), i.isDiff(n | s) && (i.ci0 = 5), i.isDiff(r | s) && (i.f0 = 0.785398), i.isDiff(l | s) && (i.f0 = 0.785398), i.isDiff(f | s) && (i.f0 = 0.916298), i.isDiff(n | s) && (i.f0 = 1.047198), i.f1 = 1.7, i.i1 = 40, i.i2 = 40, i.isDiff(r | s) && (i.i7 = 10), i.isDiff(l | s) && (i.i7 = 10), i.isDiff(f | s) && (i.i7 = 8), i.isDiff(n | s) && (i.i7 = 4), e = 4;
        break;
      }
      case 4: {
        if (i.i0 = 2, i.linkChildStandard(45, i.posX, i.posY, i.i2, -2, 100), i.f0 -= 0.1309, i.f1 += 0.3, yield i.delay(i.i7), i.i0 = 1, i.linkChildStandard(45, i.posX, i.posY, i.i1, -2, 100), i.f1 += 0.3, i.f0 -= 0.1309, i.i1 += 50, i.i2 += 50, yield i.delay(i.i7), --i.ci0 > 0) {
          e = 4;
          break;
        }
        e = 5;
        break;
      }
      case 5: {
        i.moveBounce(60, 4, 1.3), yield 60, e = 6;
        break;
      }
      case 6: {
        i.autoAnm(), i.spawnEffectAt(40, 1, -16711681), yield 60, e = 7;
        break;
      }
      case 7: {
        i.isDiff(r | s) && (i.ci0 = 3), i.isDiff(l | s) && (i.ci0 = 3), i.isDiff(f | s) && (i.ci0 = 4), i.isDiff(n | s) && (i.ci0 = 5), i.f0 = 2.356194, i.isDiff(r | s) && (i.f0 = 2.356194), i.isDiff(l | s) && (i.f0 = 2.356194), i.isDiff(f | s) && (i.f0 = 2.225295), i.isDiff(n | s) && (i.f0 = 2.094395), i.f1 = 1.7, i.i1 = 40, i.i2 = 40, e = 8;
        break;
      }
      case 8: {
        if (i.i0 = 5, i.linkChildStandard(45, i.posX, i.posY, i.i2, -2, 100), i.f1 += 0.3, i.f0 += 0.1309, yield i.delay(i.i7), i.i0 = 6, i.linkChildStandard(45, i.posX, i.posY, i.i1, -2, 100), i.f1 += 0.3, i.f0 += 0.1309, i.i1 += 50, i.i2 += 50, yield i.delay(i.i7), --i.ci0 > 0) {
          e = 8;
          break;
        }
        e = 9;
        break;
      }
      case 9: {
        i.moveBounce(60, 4, 1.3), yield 60, e = 10;
        break;
      }
      case 10: {
        e = 2;
        break;
      }
      default:
        return;
    }
}
function* a0(i) {
  let e = 0, t = 0;
  for (; e >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), e) {
      case 0: {
        i.setAnm(57), i.setHitFlash(1), i.setMisc145(1), i.setBounds(24, 24), i.setHeadingSpeed(i.f0, i.f1), yield 1, e = 1;
        break;
      }
      case 1: {
        i.nop(), e = 2;
        break;
      }
      case 2: {
        if (i.posX >= 16) {
          e = 4;
          break;
        }
        e = 3;
        break;
      }
      case 3: {
        yield 1, e = 11;
        break;
      }
      case 4: {
        if (i.posX <= 368) {
          e = 6;
          break;
        }
        e = 5;
        break;
      }
      case 5: {
        yield 1, e = 11;
        break;
      }
      case 6: {
        if (i.posY >= 16) {
          e = 8;
          break;
        }
        e = 7;
        break;
      }
      case 7: {
        yield 1, e = 11;
        break;
      }
      case 8: {
        if (i.posY <= 432) {
          yield 1, e = 10;
          break;
        }
        e = 9;
        break;
      }
      case 9: {
        yield 1, e = 11;
        break;
      }
      case 10: {
        e = 2;
        break;
      }
      case 11: {
        i.setShotRecord(0, 16, 0, 40, -1, -0.045, -999.900024), i.setShotRecord(1, 16384, 0, 3, i.i0, -1, -1), i.isDiff(r | s) && (i.f6 = 1.5), i.isDiff(l | s) && (i.f6 = 2.5), i.isDiff(f | s) && (i.f6 = 3), i.isDiff(n | s) && (i.f6 = 3.4), i.isDiff(r | s) && (i.f7 = 2.2), i.isDiff(l | s) && (i.f7 = 3), i.isDiff(f | s) && (i.f7 = 3.5), i.isDiff(n | s) && (i.f7 = 4), i.isDiff(r | s) && (i.i7 = 8), i.isDiff(l | s) && (i.i7 = 9), i.isDiff(f | s) && (i.i7 = 10), i.isDiff(n | s) && (i.i7 = 11), i.f0 = i.randAngle, i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 7,
          color: 7,
          count: a(10007),
          rings: 2,
          speed: a(10022),
          speed2: 2.5,
          angle: a(10016),
          angleStep: 0.09817477,
          transform: 16912
        }), i.f0 += 0.392699, i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 7,
          color: 7,
          count: a(10007),
          rings: 2,
          speed: a(10023),
          speed2: 3,
          angle: a(10016),
          angleStep: 0.09817477,
          transform: 16912
        });
        return;
      }
      default:
        return;
    }
}
function* f0(i) {
  let e = 0, t = 0;
  for (; e >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), e) {
      case 0: {
        i.setSpellTimer(99999, 75), i.setMisc160(120), i.endSpell(), i.spawnItemRandom(10), i.spawnItemBatch(5), yield 80, e = 1;
        break;
      }
      case 1: {
        i.nop(), yield* d(i);
        return;
      }
      default:
        return;
    }
}
function* d(i) {
  let e = 0, t = 0;
  for (; e >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), e) {
      case 0: {
        i.setMisc129(2), i.setDeathCallbackSub(38), i.setShotRepeat(0), i.enemyFunc95(), i.setShotSound(-1, -1), i.clearScriptFlags(4), i.setShotOrigin(0, 0), i.setSpellTimer(2040, 38), i.resetSpellTimerSub(), i.setSpellTimerElapsed(0), i.ci3 = 0, i.moveRelative(90, 4, 192, 128), i.isDiff(r | s) && i.startSpell("野符「武烈クライシス」", "上白沢慧音", 39, 0, 2e7), i.isDiff(l | s) && i.startSpell("野符「将門クライシス」", "上白沢慧音", 40, 0, 2e7), i.isDiff(f | s) && i.startSpell("野符「義満クライシス」", "上白沢慧音", 41, 0, 2e7), i.isDiff(n | s) && i.startSpell("野符「GHQクライシス」", "上白沢慧音", 42, 0, 2e7), yield 90, e = 1;
        break;
      }
      case 1: {
        if (i.setScriptFlags(4), i.setMisc160(180), i.ci3 = 5, i.f4 = 0.049087, i.f7 = 1.570796, i.f6 = i.f7 / 2.5, i.autoAnm(), i.f0 = -1.570796, i.f1 = 0.07854, i.f2 = 0.8, i.linkChildStandard(48, 96, 128, 1200, -2, 100), i.f0 += 2.094395, i.linkChildStandard(48, 96, 128, 1200, -2, 100), i.f0 += 2.094395, i.linkChildStandard(48, 96, 128, 1200, -2, 100), i.f0 = -1.570796, i.f1 = -0.07854, i.f2 = 0.8, i.linkChildStandard(48, 288, 128, 1200, -2, 100), i.f0 += 2.094395, i.linkChildStandard(48, 288, 128, 1200, -2, 100), i.f0 += 2.094395, i.linkChildStandard(48, 288, 128, 1200, -2, 100), i.difficulty == 0) {
          yield 180, e = 3;
          break;
        }
        e = 2;
        break;
      }
      case 2: {
        i.f0 = -1.570796, i.f1 = -0.07854, i.f2 = 0.8, i.linkChildStandard(48, 192, 224, 550, -2, 100), i.f0 += 3.141593, i.linkChildStandard(48, 192, 224, 550, -2, 100), i.f1 = 0.07854, i.f0 = 3.141593, i.linkChildStandard(48, 192, 224, 400, -2, 100), i.f0 += 3.141593, i.linkChildStandard(48, 192, 224, 400, -2, 100), yield 180, e = 3;
        break;
      }
      case 3: {
        i.nop(), e = 4;
        break;
      }
      case 4: {
        i.isDiff(r | s) && i.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 7,
          color: 4,
          count: 1,
          rings: 1,
          speed: 0.8,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.2617994,
          transform: 514
        }), i.isDiff(l | s) && i.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 7,
          color: 4,
          count: 1,
          rings: 1,
          speed: 0.8,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.2617994,
          transform: 514
        }), i.isDiff(f | s) && i.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 7,
          color: 4,
          count: 1,
          rings: 1,
          speed: 0.8,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.2617994,
          transform: 514
        }), i.isDiff(n | s) && i.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 7,
          color: 4,
          count: 1,
          rings: 1,
          speed: 0.8,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.2617994,
          transform: 514
        }), i.ci3++, yield 180, e = 5;
        break;
      }
      case 5: {
        e = 4;
        break;
      }
      default:
        return;
    }
}
function* n0(i) {
  let e = 0, t = 0;
  for (; e >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), e) {
      case 0: {
        i.setAnm(53), i.setHitFlash(1), i.setMisc145(1), i.setBounds(24, 24), i.setMisc160(30), i.clearScriptFlags(8192), i.cf0 = i.posX, i.cf1 = i.posY, i.moveOrbit(41, i.posX, i.posY, i.f0, i.f1, 0, i.f2), yield 40, e = 1;
        break;
      }
      case 1: {
        i.callSubAlloc(0, 49), i.setAccel(3600, 0, 0), i.f1 /= 7, yield 60, e = 2;
        break;
      }
      case 2: {
        i.setAccel(3600, i.f1, 0), yield 3600, e = 3;
        break;
      }
      case 3:
        return;
      default:
        return;
    }
}
function* l0(i) {
  let e = 0, t = 0;
  for (; e >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), e) {
      case 0: {
        if (i.isDiff(r | s) && (i.i0 = 13), i.isDiff(l | s) && (i.i0 = 13), i.isDiff(f | s) && (i.i0 = 13), i.isDiff(n | s) && (i.i0 = 11), i.f1 /= -7, i.isDiff(r | s) && (i.f7 = 0), i.isDiff(l | s) && (i.f7 = 0), i.isDiff(f | s) && (i.f7 = 0), i.isDiff(n | s) && (i.f7 = 0.0125), i.setShotRecord(0, 131072, 0, 40, -1, -1, -1), i.difficulty != 2) {
          e = 2;
          break;
        }
        e = 1;
        break;
      }
      case 1: {
        i.setShotRecord(1, 16384, 0, 4, 6, -1, -1), e = 4;
        break;
      }
      case 2: {
        if (i.difficulty != 3) {
          e = 4;
          break;
        }
        e = 3;
        break;
      }
      case 3: {
        i.setShotRecord(1, 16384, 0, 6, 2, -1, -1), e = 4;
        break;
      }
      case 4: {
        i.setShotRecord(2, 32, 0, 40, -1, i.f7, i.f1), e = 5;
        break;
      }
      case 5: {
        i.f0 = Math.atan2(i.cf1 - i.posY, i.cf0 - i.posX), i.isDiff(r | s) && i.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 2,
          color: 8,
          count: 1,
          rings: 1,
          speed: 1,
          speed2: 0.5,
          angle: a(10016),
          angleStep: 1.0471976,
          transform: 514
        }), i.isDiff(l | s) && i.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 2,
          color: 6,
          count: 2,
          rings: 1,
          speed: 1,
          speed2: 0.5,
          angle: a(10016),
          angleStep: 1.0471976,
          transform: 514
        }), i.isDiff(f | s) && i.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 2,
          color: 6,
          count: 3,
          rings: 1,
          speed: 1.2,
          speed2: 0.5,
          angle: a(10016),
          angleStep: 1.0471976,
          transform: 148002
        }), i.isDiff(n | s) && i.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 2,
          color: 2,
          count: 3,
          rings: 1,
          speed: 1.2,
          speed2: 0.5,
          angle: a(10016),
          angleStep: 1.0471976,
          transform: 148002
        }), yield i.delay(i.i0), i.f0 = Math.atan2(i.cf1 - i.posY, i.cf0 - i.posX), i.isDiff(r | s) && i.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 2,
          color: 8,
          count: 1,
          rings: 1,
          speed: 1,
          speed2: 0.5,
          angle: a(10016),
          angleStep: 1.0471976,
          transform: 514
        }), i.isDiff(l | s) && i.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 2,
          color: 6,
          count: 2,
          rings: 1,
          speed: 1,
          speed2: 0.5,
          angle: a(10016),
          angleStep: 1.0471976,
          transform: 514
        }), i.isDiff(f | s) && i.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 2,
          color: 6,
          count: 3,
          rings: 1,
          speed: 1.2,
          speed2: 0.5,
          angle: a(10016),
          angleStep: 1.0471976,
          transform: 148002
        }), i.isDiff(n | s) && i.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 2,
          color: 2,
          count: 3,
          rings: 1,
          speed: 1.2,
          speed2: 0.5,
          angle: a(10016),
          angleStep: 1.0471976,
          transform: 148002
        }), yield i.delay(i.i0), e = 5;
        break;
      }
      case 6:
        return;
      default:
        return;
    }
}
function* r0(i) {
  let e = 0, t = 0;
  for (; e >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), e) {
      case 0: {
        i.setMisc129(2), i.setDeathCallbackSub(66), i.setShotRepeat(0), i.enemyFunc95(), i.setShotSound(-1, -1), i.clearScriptFlags(4), i.setShotOrigin(0, 0), i.setSpellTimer(2400, 38), i.resetSpellTimerSub(), i.setSpellTimerElapsed(0), i.ci3 = 0, i.moveRelative(110, 4, 192, 128), i.startSpell("国符「三種の神器　剣」", "上白沢慧音", 43, 0, 2e7), yield 110, e = 1;
        break;
      }
      case 1: {
        i.setScriptFlags(4), i.setMisc160(180), i.ci3 = 5, i.f4 = 0.049087, i.f7 = 1.570796, i.f6 = i.f7 / 2.5, i.ci1 = 0, i.callSubAlloc(0, 51), e = 2;
        break;
      }
      case 2: {
        i.autoAnm(), i.f0 = -1.570796, i.f1 = 0.062832, i.f2 = 0.8, i.i0 = 6, i.ci0 = 8, i.i1 = 80, e = 3;
        break;
      }
      case 3: {
        i.linkChildRelative(52, 0, 0, i.i1, -2, 100), i.f0 -= 0.392699, i.i1 += 80, yield 4, e = 4;
        break;
      }
      case 4: {
        if (--i.ci0 > 0) {
          e = 3;
          break;
        }
        e = 5;
        break;
      }
      case 5: {
        i.moveBounce(60, 4, 1.2), yield 100, e = 6;
        break;
      }
      case 6: {
        i.f0 = -1.570796, i.f1 = -0.062832, i.f2 = 0.8, i.i0 = 2, i.ci0 = 8, i.i1 = 80, e = 7;
        break;
      }
      case 7: {
        i.linkChildRelative(52, 0, 0, i.i1, -2, 100), i.f0 += 0.392699, i.i1 += 80, yield 4, e = 8;
        break;
      }
      case 8: {
        if (--i.ci0 > 0) {
          e = 7;
          break;
        }
        e = 9;
        break;
      }
      case 9: {
        i.moveBounce(60, 4, 1.2), i.ci3++, yield 160, e = 10;
        break;
      }
      case 10: {
        e = 2;
        break;
      }
      default:
        return;
    }
}
function* c0(i) {
  let e = 0, t = 0;
  for (; e >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), e) {
      case 0: {
        if (i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 3,
          color: 6,
          count: 32,
          rings: 1,
          speed: 1,
          speed2: 0.5,
          angle: a(10082),
          angleStep: 0.3926991,
          transform: 515
        }), i.hpRatio >= 128) {
          yield 180, e = 2;
          break;
        }
        e = 1;
        break;
      }
      case 1: {
        i.spawnShot({
          mode: "aimedRing",
          // aim 2 of 96..104
          type: 3,
          color: 10,
          count: 32,
          rings: 2,
          speed: 2.2,
          speed2: 0.8,
          angle: 0,
          angleStep: 0.19634955,
          transform: 515
        }), yield 180, e = 2;
        break;
      }
      case 2: {
        e = 0;
        break;
      }
      default:
        return;
    }
}
function* o0(i) {
  let e = 0, t = 0;
  for (; e >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), e) {
      case 0: {
        i.setAnm(53), i.setHitFlash(1), i.setMisc145(1), i.setBounds(24, 24), i.setMisc160(30), i.clearScriptFlags(8192), i.cf0 = i.posX, i.cf1 = i.posY, i.moveOrbit(51, i.posX, i.posY, i.f0, i.f1, 0, i.f2), yield 50, e = 1;
        break;
      }
      case 1: {
        i.callSubAlloc(0, 53), i.setAccel(180, i.f1, 0), yield 180, e = 2;
        break;
      }
      case 2:
        return;
      default:
        return;
    }
}
function* d0(i) {
  let e = 0, t = 0;
  for (; e >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), e) {
      case 0: {
        i.f1 = i.f2 / 3, i.ci0 = 16, e = 1;
        break;
      }
      case 1: {
        i.f0 = Math.atan2(i.cf1 - i.posY, i.cf0 - i.posX), i.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 4,
          color: a(1e4),
          count: 1,
          rings: 1,
          speed: 1.6,
          speed2: 0.5,
          angle: a(10016),
          angleStep: 0.7853982,
          transform: 514
        }), yield 8, e = 2;
        break;
      }
      case 2: {
        if (--i.ci0 > 0) {
          e = 1;
          break;
        }
        e = 3;
        break;
      }
      case 3:
        return;
      default:
        return;
    }
}
function* p0(i) {
  let e = 0, t = 0;
  for (; e >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), e) {
      case 0: {
        i.setMisc129(2), i.setDeathCallbackSub(66), i.setShotRepeat(0), i.enemyFunc95(), i.setShotSound(-1, -1), i.clearScriptFlags(4), i.setShotOrigin(0, 0), i.setSpellTimer(2400, 38), i.resetSpellTimerSub(), i.setSpellTimerElapsed(0), i.ci3 = 0, i.moveRelative(110, 4, 192, 128), i.startSpell("国符「三種の神器　玉」", "上白沢慧音", 44, 0, 2e7), yield 110, e = 1;
        break;
      }
      case 1: {
        i.setScriptFlags(4), i.setMisc160(180), i.ci3 = 5, i.f4 = 0.049087, i.f7 = 1.570796, i.f6 = i.f7 / 2.5, i.ci1 = 0, e = 2;
        break;
      }
      case 2: {
        i.autoAnm(), i.f0 = -1.570796, i.f1 = 0.034907, i.f2 = 0.8, i.i0 = 6, i.ci0 = 8, i.i1 = 120, e = 3;
        break;
      }
      case 3: {
        i.linkChildRelative(56, 0, 0, i.i1, -2, 100), i.f0 -= 0.19635, i.i1 += 40, yield 4, e = 4;
        break;
      }
      case 4: {
        if (--i.ci0 > 0) {
          e = 3;
          break;
        }
        e = 5;
        break;
      }
      case 5: {
        i.f0 = -1.570796, i.f1 = -0.034907, i.f2 = 0.8, i.i0 = 2, i.ci0 = 8, i.i1 = 120, e = 6;
        break;
      }
      case 6: {
        i.linkChildRelative(56, 0, 0, i.i1, -2, 100), i.f0 += 0.19635, i.i1 += 40, yield 4, e = 7;
        break;
      }
      case 7: {
        if (--i.ci0 > 0) {
          e = 6;
          break;
        }
        e = 8;
        break;
      }
      case 8: {
        if (i.ci1 != 0) {
          e = 10;
          break;
        }
        e = 9;
        break;
      }
      case 9: {
        i.callSubAlloc(0, 55), i.ci1 = 1, e = 10;
        break;
      }
      case 10: {
        i.moveBounce(60, 4, 1.2), i.ci3++, yield 180, e = 11;
        break;
      }
      case 11: {
        i.autoAnm(), i.f0 = -1.570796, i.f1 = -0.034907, i.f2 = 0.8, i.i0 = 6, i.ci0 = 8, i.i1 = 80, e = 12;
        break;
      }
      case 12: {
        i.linkChildRelative(56, 0, 0, i.i1, -2, 100), i.f0 += 0.19635, i.i1 += 40, yield 4, e = 13;
        break;
      }
      case 13: {
        if (--i.ci0 > 0) {
          e = 12;
          break;
        }
        e = 14;
        break;
      }
      case 14: {
        i.f0 = -1.570796, i.f1 = 0.034907, i.f2 = 0.8, i.i0 = 2, i.ci0 = 8, i.i1 = 80, e = 15;
        break;
      }
      case 15: {
        i.linkChildRelative(56, 0, 0, 40, -2, 100), i.f0 -= 0.19635, i.i1 += 40, yield 4, e = 16;
        break;
      }
      case 16: {
        if (--i.ci0 > 0) {
          e = 15;
          break;
        }
        e = 17;
        break;
      }
      case 17: {
        if (i.ci1 != 0) {
          e = 19;
          break;
        }
        e = 18;
        break;
      }
      case 18: {
        i.callSubAlloc(0, 55), i.ci1 = 1, e = 19;
        break;
      }
      case 19: {
        i.moveBounce(60, 4, 1.2), i.ci3++, yield 180, e = 20;
        break;
      }
      case 20: {
        e = 2;
        break;
      }
      default:
        return;
    }
}
function* u0(i) {
  let e = 0, t = 0;
  for (; e >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), e) {
      case 0: {
        if (i.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 10,
          color: 0,
          count: 3,
          rings: 1,
          speed: 1.2,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.3926991,
          transform: 515
        }), i.hpRatio >= 128) {
          yield 180, e = 2;
          break;
        }
        e = 1;
        break;
      }
      case 1: {
        i.spawnShot({
          mode: "aimedRing",
          // aim 2 of 96..104
          type: 3,
          color: 4,
          count: 32,
          rings: 2,
          speed: 2.2,
          speed2: 0.8,
          angle: 0,
          angleStep: 0.19634955,
          transform: 515
        }), yield 180, e = 2;
        break;
      }
      case 2: {
        e = 0;
        break;
      }
      default:
        return;
    }
}
function* y0(i) {
  let e = 0, t = 0;
  for (; e >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), e) {
      case 0: {
        i.setAnm(53), i.setHitFlash(1), i.setMisc145(1), i.setBounds(24, 24), i.setMisc160(30), i.clearScriptFlags(8192), i.cf0 = i.posX, i.cf1 = i.posY, i.moveOrbit(91, i.posX, i.posY, i.f0, i.f1, 0, i.f2), yield 90, e = 1;
        break;
      }
      case 1: {
        i.callSubAlloc(0, 57), yield 100, e = 2;
        break;
      }
      case 2: {
        i.setScriptFlags(8192), yield 3600, e = 3;
        break;
      }
      case 3:
        return;
      default:
        return;
    }
}
function* g0(i) {
  let e = 0, t = 0;
  for (; e >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), e) {
      case 0: {
        i.f0 = Math.atan2(i.cf1 - i.posY, i.cf0 - i.posX), i.f1 = i.f2 / 3, i.ci0 = 16, e = 1;
        break;
      }
      case 1: {
        i.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 2,
          color: a(1e4),
          count: 1,
          rings: 1,
          speed: 1.2,
          speed2: 0.5,
          angle: a(10016),
          angleStep: 0.7853982,
          transform: 514
        }), i.f0 += i.f1, yield 4, e = 2;
        break;
      }
      case 2: {
        if (--i.ci0 > 0) {
          e = 1;
          break;
        }
        e = 3;
        break;
      }
      case 3:
        return;
      default:
        return;
    }
}
function* k0(i) {
  let e = 0, t = 0;
  for (; e >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), e) {
      case 0: {
        i.setMisc129(2), i.setDeathCallbackSub(66), i.setShotRepeat(0), i.enemyFunc95(), i.setShotSound(-1, -1), i.clearScriptFlags(4), i.setShotOrigin(0, 0), i.setSpellTimer(2400, 38), i.resetSpellTimerSub(), i.setSpellTimerElapsed(0), i.ci3 = 0, i.moveRelative(110, 4, 192, 128), i.startSpell("国符「三種の神器　鏡」", "上白沢慧音", 45, 0, 2e7), yield 110, e = 1;
        break;
      }
      case 1: {
        i.setScriptFlags(4), i.setMisc160(180), i.ci3 = 5, i.f4 = 0.049087, i.f7 = 1.570796, i.f6 = i.f7 / 2.5, i.ci1 = 0, e = 2;
        break;
      }
      case 2: {
        i.autoAnm(), i.f0 = -1.570796, i.f1 = 0.034907, i.f2 = 0.8, i.i0 = 6, i.ci0 = 8, i.i1 = 200, e = 3;
        break;
      }
      case 3: {
        i.linkChildRelative(60, 0, 0, i.i1, -2, 100), i.f0 -= 0.19635, i.i1 += 20, yield 4, e = 4;
        break;
      }
      case 4: {
        if (--i.ci0 > 0) {
          e = 3;
          break;
        }
        e = 5;
        break;
      }
      case 5: {
        i.f0 = -1.570796, i.f1 = -0.034907, i.f2 = 0.8, i.i0 = 2, i.ci0 = 8, i.i1 = 200, e = 6;
        break;
      }
      case 6: {
        i.linkChildRelative(60, 0, 0, i.i1, -2, 100), i.f0 += 0.19635, i.i1 += 20, yield 4, e = 7;
        break;
      }
      case 7: {
        if (--i.ci0 > 0) {
          e = 6;
          break;
        }
        e = 8;
        break;
      }
      case 8: {
        if (i.ci1 != 0) {
          e = 10;
          break;
        }
        e = 9;
        break;
      }
      case 9: {
        i.callSubAlloc(0, 59), i.ci1 = 1, e = 10;
        break;
      }
      case 10: {
        i.moveBounce(60, 4, 1.2), i.ci3++, yield 180, e = 11;
        break;
      }
      case 11: {
        e = 2;
        break;
      }
      default:
        return;
    }
}
function* m0(i) {
  let e = 0, t = 0;
  for (; e >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), e) {
      case 0: {
        if (i.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 10,
          color: 2,
          count: 7,
          rings: 1,
          speed: 1.2,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.2617994,
          transform: 515
        }), i.hpRatio >= 128) {
          yield 180, e = 2;
          break;
        }
        e = 1;
        break;
      }
      case 1: {
        i.spawnShot({
          mode: "aimedRing",
          // aim 2 of 96..104
          type: 3,
          color: 10,
          count: 32,
          rings: 2,
          speed: 2.2,
          speed2: 0.8,
          angle: 0,
          angleStep: 0.19634955,
          transform: 515
        }), yield 180, e = 2;
        break;
      }
      case 2: {
        e = 0;
        break;
      }
      default:
        return;
    }
}
function* b0(i) {
  let e = 0, t = 0;
  for (; e >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), e) {
      case 0: {
        i.setAnm(53), i.setHitFlash(1), i.setMisc145(1), i.setBounds(24, 24), i.setMisc160(30), i.clearScriptFlags(8192), i.cf0 = i.posX, i.cf1 = i.posY, i.moveOrbit(91, i.posX, i.posY, i.f0, i.f1, 0, i.f2), yield 90, e = 1;
        break;
      }
      case 1: {
        i.callSubAlloc(0, 61), yield 100, e = 2;
        break;
      }
      case 2: {
        i.setScriptFlags(8192), yield 3600, e = 3;
        break;
      }
      case 3:
        return;
      default:
        return;
    }
}
function* S0(i) {
  let e = 0, t = 0;
  for (; e >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), e) {
      case 0: {
        if (i.f1 >= 0) {
          e = 2;
          break;
        }
        e = 1;
        break;
      }
      case 1: {
        i.f0 = 0, e = 3;
        break;
      }
      case 2: {
        i.f0 = -3.141593, e = 3;
        break;
      }
      case 3: {
        i.f1 = i.f1 * 5, i.ci0 = 21, i.setShotRecord(0, 2048, 0, 0, -1, 1.3, 0), i.setShotRecord(1, 16384, 0, 4, i.i0, -1, -1), e = 4;
        break;
      }
      case 4: {
        i.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 2,
          color: a(1e4),
          count: 1,
          rings: 1,
          speed: 3,
          speed2: 0.5,
          angle: a(10016),
          angleStep: 0.7853982,
          transform: 18946
        }), i.f0 += i.f1, yield 4, e = 5;
        break;
      }
      case 5: {
        if (--i.ci0 > 0) {
          e = 4;
          break;
        }
        e = 6;
        break;
      }
      case 6:
        return;
      default:
        return;
    }
}
function* h0(i) {
  let e = 0, t = 0;
  for (; e >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), e) {
      case 0: {
        i.setMisc129(2), i.setDeathCallbackSub(66), i.setShotRepeat(0), i.enemyFunc95(), i.setShotSound(-1, -1), i.clearScriptFlags(4), i.setShotOrigin(0, 0), i.setSpellTimer(2400, 38), i.resetSpellTimerSub(), i.setSpellTimerElapsed(0), i.ci3 = 0, i.moveRelative(110, 4, 192, 128), i.startSpell("国体「三種の神器　郷」", "上白沢慧音", 46, 0, 2e7), yield 110, e = 1;
        break;
      }
      case 1: {
        i.setScriptFlags(4), i.setMisc160(180), i.ci3 = 5, i.f4 = 0.049087, i.f7 = 1.570796, i.f6 = i.f7 / 2.5, i.ci1 = 0, i.callSubAlloc(0, 63), e = 2;
        break;
      }
      case 2: {
        i.autoAnm(), i.f0 = -1.570796, i.f1 = 0.015708, i.f2 = 0.8, i.i0 = 6, i.ci0 = 8, i.i1 = 800, e = 3;
        break;
      }
      case 3: {
        i.linkChildRelative(64, 0, 0, i.i1, -2, 100), i.f0 -= 0.392699, i.i1 += 20, yield 4, e = 4;
        break;
      }
      case 4: {
        if (--i.ci0 > 0) {
          e = 3;
          break;
        }
        e = 5;
        break;
      }
      case 5: {
        i.moveBounce(60, 4, 1.2), yield 100, e = 6;
        break;
      }
      case 6: {
        i.f0 = -1.570796, i.f1 = -0.015708, i.f2 = 0.8, i.i0 = 2, i.ci0 = 8, i.i1 = 200, e = 7;
        break;
      }
      case 7: {
        i.linkChildRelative(64, 0, 0, 40, -2, 100), i.f0 += 0.392699, i.i1 += 80, yield 4, e = 8;
        break;
      }
      case 8: {
        if (--i.ci0 > 0) {
          e = 7;
          break;
        }
        e = 9;
        break;
      }
      case 9: {
        i.moveBounce(60, 4, 1.2), i.ci3++, yield 160, e = 10;
        break;
      }
      case 10: {
        e = 2;
        break;
      }
      default:
        return;
    }
}
function* w0(i) {
  let e = 0, t = 0;
  for (; e >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), e) {
      case 0: {
        if (i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 7,
          color: 3,
          count: 32,
          rings: 2,
          speed: 2,
          speed2: 1,
          angle: a(10082),
          angleStep: 0.3926991,
          transform: 513
        }), i.hpRatio >= 128) {
          e = 2;
          break;
        }
        e = 1;
        break;
      }
      case 1: {
        i.spawnShot({
          mode: "aimedRing",
          // aim 2 of 96..104
          type: 3,
          color: 10,
          count: 32,
          rings: 2,
          speed: 2.2,
          speed2: 0.8,
          angle: 0,
          angleStep: 0.19634955,
          transform: 515
        }), e = 2;
        break;
      }
      case 2: {
        e = 3;
        break;
      }
      case 3: {
        e = 0;
        break;
      }
      default:
        return;
    }
}
function* A0(i) {
  let e = 0, t = 0;
  for (; e >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), e) {
      case 0: {
        i.setAnm(53), i.setHitFlash(1), i.setMisc145(1), i.setBounds(24, 24), i.setMisc160(30), i.clearScriptFlags(8192), i.cf0 = i.posX, i.cf1 = i.posY, i.moveOrbit(51, i.posX, i.posY, i.f0, i.f1, 0, i.f2), yield 50, e = 1;
        break;
      }
      case 1: {
        i.callSubAlloc(0, 65), i.setAccel(180, i.f1, 0), yield 180, e = 2;
        break;
      }
      case 2:
        return;
      default:
        return;
    }
}
function* D0(i) {
  let e = 0, t = 0;
  for (; e >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), e) {
      case 0: {
        i.f1 = i.f2 / 3, i.ci0 = 16, e = 1;
        break;
      }
      case 1: {
        i.f0 = Math.atan2(i.cf1 - i.posY, i.cf0 - i.posX), i.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 5,
          color: a(1e4),
          count: 2,
          rings: 2,
          speed: 2.5,
          speed2: 0.5,
          angle: a(10016),
          angleStep: 0.7853982,
          transform: 512
        }), yield 8, e = 2;
        break;
      }
      case 2: {
        if (--i.ci0 > 0) {
          e = 1;
          break;
        }
        e = 3;
        break;
      }
      case 3:
        return;
      default:
        return;
    }
}
function* M0(i) {
  let e = 0, t = 0;
  for (; e >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), e) {
      case 0: {
        i.setSpellTimer(99999, 75), i.setMisc160(120), i.endSpell(), i.spawnItemRandom(10), i.spawnItemBatch(5), yield 80, e = 1;
        break;
      }
      case 1: {
        i.nop(), yield* p(i);
        return;
      }
      default:
        return;
    }
}
function* p(i) {
  let e = 0, t = 0;
  for (; e >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), e) {
      case 0: {
        i.setMisc129(3), i.setDeathCallbackSub(75), i.setShotRepeat(0), i.enemyFunc95(), i.setShotSound(-1, -1), i.clearScriptFlags(4), i.setShotOrigin(0, 0), i.setSpellTimer(1920, 38), i.resetSpellTimerSub(), i.setSpellTimerElapsed(0), i.ci3 = 0, i.moveRelative(90, 4, 192, 128), i.isDiff(r | s) && i.startSpell("終符「幻想天皇」", "上白沢慧音", 47, 0, 2e7), i.isDiff(l | s) && i.startSpell("終符「幻想天皇」", "上白沢慧音", 48, 0, 2e7), i.isDiff(f | s) && i.startSpell("虚史「幻想郷伝説」", "上白沢慧音", 49, 0, 2e7), i.isDiff(n | s) && i.startSpell("虚史「幻想郷伝説」", "上白沢慧音", 50, 0, 2e7), yield 90, e = 1;
        break;
      }
      case 1: {
        i.setScriptFlags(4), i.setMisc160(180), i.autoAnm(), i.f0 = -1.570796, i.f1 = 0.07854, i.f2 = 0.8, i.linkChildStandard(69, 96, 128, 1200, -2, 100), i.f0 += 2.094395, i.linkChildStandard(69, 96, 128, 1200, -2, 100), i.f0 += 2.094395, i.linkChildStandard(69, 96, 128, 1200, -2, 100), i.f0 = -1.570796, i.f1 = -0.07854, i.f2 = 0.8, i.linkChildStandard(69, 288, 128, 1200, -2, 100), i.f0 += 2.094395, i.linkChildStandard(69, 288, 128, 1200, -2, 100), i.f0 += 2.094395, i.linkChildStandard(69, 288, 128, 1200, -2, 100), i.f0 = 0, i.f1 = -0.07854, i.f2 = 0.8, i.linkChildStandard(69, 192, 224, 500, -2, 100), i.f0 += 3.141593, i.linkChildStandard(69, 192, 224, 500, -2, 100), i.f1 = 0.07854, i.f0 = 3.141593, i.linkChildStandard(69, 192, 224, 300, -2, 100), i.f0 += 3.141593, i.linkChildStandard(69, 192, 224, 300, -2, 100), i.callSubAlloc(0, 68), e = 2;
        break;
      }
      case 2: {
        i.ci3++, yield 180, e = 3;
        break;
      }
      case 3: {
        e = 2;
        break;
      }
      default:
        return;
    }
}
function* I0(i) {
  let e = 0;
  yield 200;
  let t = 0;
  for (; e >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), e) {
      case 0: {
        i.nop(), i.isDiff(r | s) && (i.f0 = 1), i.isDiff(l | s) && (i.f0 = 1), i.isDiff(f | s) && (i.f0 = 1.2), i.isDiff(n | s) && (i.f0 = 1.6), i.isDiff(r | s) && (i.f1 = 1.6), i.isDiff(l | s) && (i.f1 = 1.8), i.isDiff(f | s) && (i.f1 = 2.4), i.isDiff(n | s) && (i.f1 = 2.8), i.isDiff(r | s) && (i.i0 = 300), i.isDiff(l | s) && (i.i0 = 60), i.isDiff(f | s) && (i.i0 = 40), i.isDiff(n | s) && (i.i0 = 40), i.isDiff(r | s) && (i.i1 = 6), i.isDiff(l | s) && (i.i1 = 6), i.isDiff(f | s) && (i.i1 = 2), i.isDiff(n | s) && (i.i1 = 2), i.isDiff(r | s) && (i.i2 = 32), i.isDiff(l | s) && (i.i2 = 48), i.isDiff(f | s) && (i.i2 = 56), i.isDiff(n | s) && (i.i2 = 56), e = 1;
        break;
      }
      case 1: {
        i.spawnShot({
          mode: "aimedRing",
          // aim 2 of 96..104
          type: 6,
          color: a(10001),
          count: a(10002),
          rings: 2,
          speed: a(10017),
          speed2: a(10016),
          angle: 0,
          angleStep: 0.19634955,
          transform: 515
        }), yield i.delay(i.i0), e = 1;
        break;
      }
      default:
        return;
    }
}
function* z0(i) {
  let e = 0, t = 0;
  for (; e >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), e) {
      case 0: {
        i.setAnm(53), i.setHitFlash(1), i.setMisc145(1), i.setBounds(24, 24), i.setMisc160(30), i.clearScriptFlags(8192), i.cf0 = i.posX, i.cf1 = i.posY, i.moveOrbit(41, i.posX, i.posY, i.f0, i.f1, 0, i.f2), yield 40, e = 1;
        break;
      }
      case 1: {
        i.callSubAlloc(0, 70), i.setAccel(3600, 0, 0), i.f1 /= 7, yield 60, e = 2;
        break;
      }
      case 2: {
        i.setAccel(3600, i.f1, 0), yield 3600, e = 3;
        break;
      }
      case 3:
        return;
      default:
        return;
    }
}
function* F0(i) {
  let e = 0, t = 0;
  for (; e >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), e) {
      case 0: {
        i.isDiff(r | s) && (i.i0 = 40), i.isDiff(l | s) && (i.i0 = 20), i.isDiff(f | s) && (i.i0 = 16), i.isDiff(n | s) && (i.i0 = 16), i.isDiff(r | s) && (i.f2 = 1.4), i.isDiff(l | s) && (i.f2 = 1.4), i.isDiff(f | s) && (i.f2 = 2.2), i.isDiff(n | s) && (i.f2 = 2.5), i.isDiff(r | s) && (i.f1 = 100), i.isDiff(l | s) && (i.f1 = 100), i.isDiff(f | s) && (i.f1 = 100), i.isDiff(n | s) && (i.f1 = 150), i.isDiff(r | s) && (i.i2 = 6), i.isDiff(l | s) && (i.i2 = 6), i.isDiff(f | s) && (i.i2 = 2), i.isDiff(n | s) && (i.i2 = 2), e = 1;
        break;
      }
      case 1: {
        i.f0 = Math.atan2(i.cf1 - i.posY, i.cf0 - i.posX), i.playSfx(17), i.isDiff(r | l | s) && i.spawnLaser({
          aimed: !1,
          // op 114 keeps the absolute angle
          type: 4,
          color: a(10002),
          angle: a(10016),
          speed: a(10018),
          tail: 0,
          head: 0,
          startLength: a(10017),
          width: 8,
          startTime: 0,
          duration: 2560,
          despawn: 0,
          hitboxStart: 0,
          hitboxEnd: 0,
          flags: 0
        }), i.isDiff(f | n | s) && i.spawnLaser({
          aimed: !1,
          // op 114 keeps the absolute angle
          type: 4,
          color: a(10002),
          angle: a(10016),
          speed: a(10018),
          tail: 0,
          head: 0,
          startLength: a(10017),
          width: 8,
          startTime: 0,
          duration: 2560,
          despawn: 0,
          hitboxStart: 0,
          hitboxEnd: 0,
          flags: 0
        }), yield i.delay(i.i0), e = 1;
        break;
      }
      case 2:
        return;
      default:
        return;
    }
}
function* u(i) {
  let e = 0, t = 0;
  for (; e >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), e) {
      case 0: {
        i.setShotRepeat(0), i.enemyFunc95(), i.setShotSound(-1, -1), i.clearScriptFlags(4), i.setShotOrigin(0, 0), i.setSpellTimer(2100, 76), i.resetSpellTimerSub(), i.setSpellTimerElapsed(0), i.ci3 = 0, i.moveRelative(90, 4, 192, 128), i.isDiff(l | s) && i.startSpell("未来「高天原」", "上白沢慧音", 51, 0, 2e7), i.isDiff(f | s) && i.startSpell("未来「高天原」", "上白沢慧音", 52, 0, 2e7), i.isDiff(n | s) && i.startSpell("未来「高天原」", "上白沢慧音", 53, 0, 2e7), yield 90, e = 1;
        break;
      }
      case 1: {
        i.setScriptFlags(4), i.setMisc160(120), i.autoAnm(), i.f0 = -1.570796, i.f1 = 0.07854, i.f2 = 0.8, i.linkChildStandard(73, 96, 128, 1200, -2, 100), i.f0 += 2.094395, i.linkChildStandard(73, 96, 128, 1200, -2, 100), i.f0 += 2.094395, i.linkChildStandard(73, 96, 128, 1200, -2, 100), i.f0 = -1.570796, i.f1 = -0.07854, i.f2 = 0.8, i.linkChildStandard(73, 288, 128, 1200, -2, 100), i.f0 += 2.094395, i.linkChildStandard(73, 288, 128, 1200, -2, 100), i.f0 += 2.094395, i.linkChildStandard(73, 288, 128, 1200, -2, 100), i.f0 = 0, i.f1 = -0.07854, i.f2 = 0.8, i.linkChildStandard(73, 192, 224, 500, -2, 100), i.f0 += 3.141593, i.linkChildStandard(73, 192, 224, 500, -2, 100), i.f1 = 0.07854, i.f0 = 3.141593, i.linkChildStandard(73, 192, 224, 500, -2, 100), i.f0 += 3.141593, i.linkChildStandard(73, 192, 224, 500, -2, 100), i.callSubAlloc(0, 72), e = 2;
        break;
      }
      case 2: {
        i.ci3++, yield 180, e = 3;
        break;
      }
      case 3: {
        e = 2;
        break;
      }
      default:
        return;
    }
}
function* C0(i) {
  let e = 0;
  yield 120;
  let t = 0;
  for (; e >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), e) {
      case 0: {
        i.nop(), i.isDiff(r | s) && (i.i0 = 60), i.isDiff(l | s) && (i.i0 = 30), i.isDiff(f | s) && (i.i0 = 40), i.isDiff(n | s) && (i.i0 = 30), i.isDiff(r | s) && (i.f0 = 2.3), i.isDiff(l | s) && (i.f0 = 1.7), i.isDiff(f | s) && (i.f0 = 2), i.isDiff(n | s) && (i.f0 = 3.2), i.isDiff(r | s) && (i.i1 = 32), i.isDiff(l | s) && (i.i1 = 32), i.isDiff(f | s) && (i.i1 = 36), i.isDiff(n | s) && (i.i1 = 42), i.isDiff(r | s) && (i.i2 = 2), i.isDiff(l | s) && (i.i2 = 2), i.isDiff(f | s) && (i.i2 = 2), i.isDiff(n | s) && (i.i2 = 3), e = 1;
        break;
      }
      case 1: {
        i.spawnShot({
          mode: "aimedRing",
          // aim 2 of 96..104
          type: 2,
          color: 2,
          count: a(10001),
          rings: a(10002),
          speed: a(10016),
          speed2: 1.2,
          angle: 0,
          angleStep: 0.19634955,
          transform: 515
        }), yield i.delay(i.i0), e = 1;
        break;
      }
      default:
        return;
    }
}
function* R0(i) {
  let e = 0, t = 0;
  for (; e >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), e) {
      case 0: {
        i.setAnm(53), i.setHitFlash(1), i.setMisc145(1), i.setBounds(24, 24), i.setMisc160(30), i.clearScriptFlags(8192), i.cf0 = i.posX, i.cf1 = i.posY, i.moveOrbit(41, i.posX, i.posY, i.f0, i.f1, 0, i.f2), yield 40, e = 1;
        break;
      }
      case 1: {
        i.callSubAlloc(0, 74), i.setAccel(3600, 0, 0), i.f1 /= 16, yield 60, e = 2;
        break;
      }
      case 2: {
        i.setAccel(3600, i.f1, 0), yield 3600, e = 3;
        break;
      }
      case 3:
        return;
      default:
        return;
    }
}
function* v0(i) {
  let e = 0, t = 0;
  for (; e >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), e) {
      case 0: {
        i.f0 = Math.atan2(i.cf1 - i.posY, i.cf0 - i.posX), i.playSfx(17), i.spawnLaser({
          aimed: !1,
          // op 114 keeps the absolute angle
          type: 0,
          color: 6,
          angle: a(10016),
          speed: 0,
          tail: 0,
          head: 640,
          startLength: 640,
          width: 12,
          startTime: 120,
          duration: 20,
          despawn: 10,
          hitboxStart: 90,
          hitboxEnd: 10,
          flags: 0
        }), yield 32, e = 1;
        break;
      }
      case 1: {
        e = 0;
        break;
      }
      case 2:
        return;
      default:
        return;
    }
}
function* E0(i) {
  let e = 0, t = 0;
  for (; e >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), e) {
      case 0: {
        i.complexBossInit(1), i.maxHp = 1, i.setMisc129(0), i.setDeathCallbackSub(-1), i.clearScriptFlags(3), i.f0 = i.randAngle, i.movePolar(60, 4, i.f0, 0.15), i.f0 = 0, i.ci0 = 6, yield 1, e = 1;
        break;
      }
      case 1: {
        i.f0 += 0.19635, i.f0 = c(i.f0), i.spawnEffectAngle(26, 1, -1, i.f0, 0, 0), yield 1, e = 2;
        break;
      }
      case 2: {
        i.f0 += 0.19635, i.f0 = c(i.f0), i.spawnEffectAngle(26, 1, -1, i.f0, 0, 0), yield 1, e = 3;
        break;
      }
      case 3: {
        i.f0 += 0.19635, i.f0 = c(i.f0), i.spawnEffectAngle(26, 1, -32640, i.f0, 0, 0), yield 1, e = 4;
        break;
      }
      case 4: {
        i.f0 += 0.19635, i.f0 = c(i.f0), i.spawnEffectAngle(26, 1, -32640, i.f0, 0, 0), yield 1, e = 5;
        break;
      }
      case 5: {
        i.f0 += 0.19635, i.f0 = c(i.f0), i.spawnEffectAngle(26, 1, -8323200, i.f0, 0, 0), yield 1, e = 6;
        break;
      }
      case 6: {
        i.f0 += 0.19635, i.f0 = c(i.f0), i.spawnEffectAngle(26, 1, -8323200, i.f0, 0, 0), yield 1, e = 7;
        break;
      }
      case 7: {
        i.f0 += 0.19635, i.f0 = c(i.f0), i.spawnEffectAngle(26, 1, -8355585, i.f0, 0, 0), yield 1, e = 8;
        break;
      }
      case 8: {
        i.f0 += 0.19635, i.f0 = c(i.f0), i.spawnEffectAngle(26, 1, -8355585, i.f0, 0, 0), yield 1, e = 9;
        break;
      }
      case 9: {
        i.f0 += 0.19635, i.f0 = c(i.f0), i.spawnEffectAngle(26, 1, -128, i.f0, 0, 0), yield 1, e = 10;
        break;
      }
      case 10: {
        if (i.f0 += 0.19635, i.f0 = c(i.f0), i.spawnEffectAngle(26, 1, -128, i.f0, 0, 0), i.playSfx(7), --i.ci0 > 0) {
          e = 1;
          break;
        }
        e = 11;
        break;
      }
      case 11: {
        i.playSfx(18), i.spawnEffectAngle(26, 64, -8355585, -999, 0, 0), i.endSpell(), i.setBossPresent(-1), i.maxHp = 0, yield 3e3, e = 12;
        break;
      }
      case 12:
        return;
      default:
        return;
    }
}
function* _0(i) {
  let e = 0, t = 0;
  for (; e >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), e) {
      case 0: {
        if (i.complexBossInit(1), i.setMisc129(0), i.setDeathCallbackSub(-1), i.clearScriptFlags(3), i.f0 = i.randAngle, i.movePolar(60, 4, i.f0, 0.15), i.setMisc173(0), i.spellCardState == 0) {
          e = 4;
          break;
        }
        e = 1;
        break;
      }
      case 1: {
        i.f0 = 0, i.ci0 = 6, i.playSfx(7), e = 2;
        break;
      }
      case 2: {
        if (i.f0 += 0.19635, i.f0 = c(i.f0), i.spawnEffectAngle(26, 1, -1, i.f0, 0, 0), i.f0 += 0.19635, i.f0 = c(i.f0), i.spawnEffectAngle(26, 1, -1, i.f0, 0, 0), i.f0 += 0.19635, i.f0 = c(i.f0), i.spawnEffectAngle(26, 1, -32640, i.f0, 0, 0), i.f0 += 0.19635, i.f0 = c(i.f0), i.spawnEffectAngle(26, 1, -32640, i.f0, 0, 0), i.f0 += 0.19635, i.f0 = c(i.f0), i.spawnEffectAngle(26, 1, -8323200, i.f0, 0, 0), i.f0 += 0.19635, i.f0 = c(i.f0), i.spawnEffectAngle(26, 1, -8323200, i.f0, 0, 0), i.f0 += 0.19635, i.f0 = c(i.f0), i.spawnEffectAngle(26, 1, -8355585, i.f0, 0, 0), i.f0 += 0.19635, i.f0 = c(i.f0), i.spawnEffectAngle(26, 1, -8355585, i.f0, 0, 0), i.f0 += 0.19635, i.f0 = c(i.f0), i.spawnEffectAngle(26, 1, -128, i.f0, 0, 0), i.f0 += 0.19635, i.f0 = c(i.f0), i.spawnEffectAngle(26, 1, -128, i.f0, 0, 0), --i.ci0 > 0) {
          e = 2;
          break;
        }
        e = 3;
        break;
      }
      case 3: {
        i.playSfx(18), i.spawnEffectAngle(26, 64, -8355585, -999, 0, 0), e = 4;
        break;
      }
      case 4: {
        i.endSpell(), i.setBossPresent(-1), i.maxHp = 1, yield 2, e = 5;
        break;
      }
      case 5: {
        i.maxHp = 0, yield 3e3, e = 6;
        break;
      }
      case 6:
        return;
      default:
        return;
    }
}
function* B0(i) {
  let e = 0, t = 0;
  for (; e >= 0; )
    switch (++t > 2e3 && (t = 0, yield 1), e) {
      case 0: {
        if (i.complexBossInit(1), i.setMisc129(0), i.setDeathCallbackSub(-1), i.clearScriptFlags(3), i.f0 = i.randAngle, i.movePolar(60, 4, i.f0, 0.15), i.setMisc173(0), i.ci3 = 0, i.spellCardState == 0) {
          e = 4;
          break;
        }
        e = 1;
        break;
      }
      case 1: {
        i.f0 = 0, i.ci0 = 6, i.playSfx(7), e = 2;
        break;
      }
      case 2: {
        if (i.f0 += 0.19635, i.f0 = c(i.f0), i.spawnEffectAngle(26, 1, -1, i.f0, 0, 0), i.f0 += 0.19635, i.f0 = c(i.f0), i.spawnEffectAngle(26, 1, -1, i.f0, 0, 0), i.f0 += 0.19635, i.f0 = c(i.f0), i.spawnEffectAngle(26, 1, -32640, i.f0, 0, 0), i.f0 += 0.19635, i.f0 = c(i.f0), i.spawnEffectAngle(26, 1, -32640, i.f0, 0, 0), i.f0 += 0.19635, i.f0 = c(i.f0), i.spawnEffectAngle(26, 1, -8323200, i.f0, 0, 0), i.f0 += 0.19635, i.f0 = c(i.f0), i.spawnEffectAngle(26, 1, -8323200, i.f0, 0, 0), i.f0 += 0.19635, i.f0 = c(i.f0), i.spawnEffectAngle(26, 1, -8355585, i.f0, 0, 0), i.f0 += 0.19635, i.f0 = c(i.f0), i.spawnEffectAngle(26, 1, -8355585, i.f0, 0, 0), i.f0 += 0.19635, i.f0 = c(i.f0), i.spawnEffectAngle(26, 1, -128, i.f0, 0, 0), i.f0 += 0.19635, i.f0 = c(i.f0), i.spawnEffectAngle(26, 1, -128, i.f0, 0, 0), --i.ci0 > 0) {
          e = 2;
          break;
        }
        e = 3;
        break;
      }
      case 3: {
        i.playSfx(18), i.spawnEffectAngle(26, 64, -8355585, -999, 0, 0), i.ci3 = 1, e = 4;
        break;
      }
      case 4: {
        if (i.endSpell(), i.ci3 == 0) {
          e = 6;
          break;
        }
        e = 5;
        break;
      }
      case 5: {
        yield i.delay(120), e = 6;
        break;
      }
      case 6: {
        i.setBossPresent(-1), i.maxHp = 1, yield 2, e = 7;
        break;
      }
      case 7: {
        i.maxHp = 0, yield 3e3, e = 8;
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
  sub_0: y,
  sub_1: g,
  sub_10: M,
  sub_11: I,
  sub_12: z,
  sub_13: F,
  sub_14: C,
  sub_15: R,
  sub_16: v,
  sub_17: E,
  sub_18: _,
  sub_19: B,
  sub_2: k,
  sub_20: x,
  sub_21: o,
  sub_22: Y,
  sub_23: X,
  sub_24: H,
  sub_25: T,
  sub_26: P,
  sub_27: L,
  sub_28: O,
  sub_29: W,
  sub_3: m,
  sub_30: V,
  sub_31: G,
  sub_32: N,
  sub_33: j,
  sub_34: Q,
  sub_35: U,
  sub_36: q,
  sub_37: J,
  sub_38: K,
  sub_39: Z,
  sub_4: b,
  sub_40: $,
  sub_41: i0,
  sub_42: e0,
  sub_43: s0,
  sub_44: t0,
  sub_45: a0,
  sub_46: f0,
  sub_47: d,
  sub_48: n0,
  sub_49: l0,
  sub_5: S,
  sub_50: r0,
  sub_51: c0,
  sub_52: o0,
  sub_53: d0,
  sub_54: p0,
  sub_55: u0,
  sub_56: y0,
  sub_57: g0,
  sub_58: k0,
  sub_59: m0,
  sub_6: h,
  sub_60: b0,
  sub_61: S0,
  sub_62: h0,
  sub_63: w0,
  sub_64: A0,
  sub_65: D0,
  sub_66: M0,
  sub_67: p,
  sub_68: I0,
  sub_69: z0,
  sub_7: w,
  sub_70: F0,
  sub_71: u,
  sub_72: C0,
  sub_73: R0,
  sub_74: v0,
  sub_75: E0,
  sub_76: _0,
  sub_77: B0,
  sub_8: A,
  sub_9: D
}, Symbol.toStringTag, { value: "Module" })), Y0 = [
  {
    index: 0,
    offset: 45624,
    instructions: [
      {
        offset: 0,
        time: 1,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([19, 1106247680, -1048576e3, 20, -2, 1e3])
      },
      { offset: 0, time: 400, opcode: 14, size: 12, difficultyMask: 255, args: new Int32Array([1]) },
      { offset: 0, time: 460, opcode: 14, size: 12, difficultyMask: 255, args: new Int32Array([0]) },
      {
        offset: 0,
        time: 620,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1132462080, -1048576e3, 300, -2, 1e3])
      },
      {
        offset: 0,
        time: 620,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1124073472, -1048576e3, 300, -2, 1e3])
      },
      {
        offset: 0,
        time: 740,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1134559232, -1048576e3, 300, -2, 1e3])
      },
      {
        offset: 0,
        time: 740,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1115684864, -1048576e3, 300, -2, 1e3])
      },
      { offset: 0, time: 740, opcode: 14, size: 12, difficultyMask: 255, args: new Int32Array([1]) },
      {
        offset: 0,
        time: 820,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1115684864, -1048576e3, 200, -2, 1e3])
      },
      {
        offset: 0,
        time: 900,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1119879168, -1048576e3, 200, -2, 1e3])
      },
      { offset: 0, time: 900, opcode: 14, size: 12, difficultyMask: 255, args: new Int32Array([0]) },
      {
        offset: 0,
        time: 980,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1124073472, -1048576e3, 200, -2, 1e3])
      },
      {
        offset: 0,
        time: 1280,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([7, 1115684864, -1048576e3, 300, -2, 1e3])
      },
      {
        offset: 0,
        time: 1370,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([7, 1115684864, -1048576e3, 300, -2, 1e3])
      },
      {
        offset: 0,
        time: 1370,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([7, 1134559232, -1048576e3, 300, -2, 1e3])
      },
      {
        offset: 0,
        time: 1460,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([7, 1115684864, -1048576e3, 300, -2, 1e3])
      },
      { offset: 0, time: 1600, opcode: 14, size: 12, difficultyMask: 255, args: new Int32Array([1]) },
      {
        offset: 0,
        time: 1610,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([7, 1134559232, -1048576e3, 300, -2, 1e3])
      },
      {
        offset: 0,
        time: 1670,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([7, 1134559232, -1048576e3, 300, -2, 1e3])
      },
      {
        offset: 0,
        time: 1670,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([7, 1115684864, -1048576e3, 300, -2, 1e3])
      },
      {
        offset: 0,
        time: 1730,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([7, 1134559232, -1048576e3, 300, -2, 1e3])
      },
      {
        offset: 0,
        time: 1730,
        opcode: 1,
        size: 32,
        difficultyMask: 248,
        args: new Int32Array([0, 1132462080, -1048576e3, 300, -2, 1e3])
      },
      { offset: 0, time: 1930, opcode: 14, size: 12, difficultyMask: 255, args: new Int32Array([1]) },
      {
        offset: 0,
        time: 1950,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([7, 1115684864, -1048576e3, 350, -2, 1e3])
      },
      {
        offset: 0,
        time: 1970,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([7, 1134559232, -1048576e3, 350, -2, 1e3])
      },
      {
        offset: 0,
        time: 1990,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([7, 1115684864, -1048576e3, 350, -2, 1e3])
      },
      {
        offset: 0,
        time: 2010,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([7, 1134559232, -1048576e3, 350, -2, 1e3])
      },
      {
        offset: 0,
        time: 2010,
        opcode: 0,
        size: 32,
        difficultyMask: 252,
        args: new Int32Array([0, 1107296256, -1048576e3, 400, -2, 1e3])
      },
      {
        offset: 0,
        time: 2010,
        opcode: 1,
        size: 32,
        difficultyMask: 252,
        args: new Int32Array([0, 1135607808, -1048576e3, 400, -2, 1e3])
      },
      {
        offset: 0,
        time: 2190,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([14, 1134559232, -1048576e3, 600, -2, 1e3])
      },
      { offset: 0, time: 2290, opcode: 14, size: 12, difficultyMask: 255, args: new Int32Array([2]) },
      {
        offset: 0,
        time: 2430,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([13, 1115684864, -1048576e3, 600, -2, 1e3])
      },
      { offset: 0, time: 2530, opcode: 14, size: 12, difficultyMask: 255, args: new Int32Array([2]) },
      {
        offset: 0,
        time: 2680,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([14, 1134559232, -1048576e3, 600, -2, 1e3])
      },
      {
        offset: 0,
        time: 3080,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([20, 1128267776, -1048576e3, 6e4, -2, 1e5])
      },
      { offset: 0, time: 3080, opcode: 10, size: 12, difficultyMask: 255, args: new Int32Array([0]) },
      { offset: 0, time: 3080, opcode: 6, size: 12, difficultyMask: 255, args: new Int32Array([2]) },
      { offset: 0, time: 3081, opcode: 7, size: 8, difficultyMask: 255, args: new Int32Array([]) },
      { offset: 0, time: 3081, opcode: 8, size: 16, difficultyMask: 255, args: new Int32Array([0, 1]) },
      { offset: 0, time: 3082, opcode: 10, size: 12, difficultyMask: 255, args: new Int32Array([0]) },
      { offset: 0, time: 3082, opcode: 6, size: 12, difficultyMask: 255, args: new Int32Array([3]) },
      { offset: 0, time: 3083, opcode: 7, size: 8, difficultyMask: 255, args: new Int32Array([]) },
      { offset: 0, time: 3083, opcode: 8, size: 16, difficultyMask: 255, args: new Int32Array([0, 1]) },
      { offset: 0, time: 3083, opcode: 10, size: 12, difficultyMask: 255, args: new Int32Array([0]) },
      {
        offset: 0,
        time: 3163,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1115684864, -1048576e3, 200, -2, 1e3])
      },
      {
        offset: 0,
        time: 3183,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1119879168, -1048576e3, 200, -2, 1e3])
      },
      {
        offset: 0,
        time: 3203,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1124073472, -1048576e3, 200, -2, 1e3])
      },
      {
        offset: 0,
        time: 3203,
        opcode: 1,
        size: 32,
        difficultyMask: 248,
        args: new Int32Array([7, 1134559232, -1048576e3, 300, -2, 1e3])
      },
      {
        offset: 0,
        time: 3223,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1126170624, -1048576e3, 200, -2, 1e3])
      },
      {
        offset: 0,
        time: 3243,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1128267776, -1048576e3, 200, -2, 1e3])
      },
      { offset: 0, time: 3243, opcode: 14, size: 12, difficultyMask: 255, args: new Int32Array([1]) },
      {
        offset: 0,
        time: 3423,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1134559232, -1048576e3, 200, -2, 1e3])
      },
      {
        offset: 0,
        time: 3443,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1133510656, -1048576e3, 200, -2, 1e3])
      },
      {
        offset: 0,
        time: 3463,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1132462080, -1048576e3, 200, -2, 1e3])
      },
      {
        offset: 0,
        time: 3463,
        opcode: 0,
        size: 32,
        difficultyMask: 252,
        args: new Int32Array([7, 1115684864, -1048576e3, 300, -2, 1e3])
      },
      {
        offset: 0,
        time: 3483,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1130364928, -1048576e3, 200, -2, 1e3])
      },
      {
        offset: 0,
        time: 3503,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1128267776, -1048576e3, 200, -2, 1e3])
      },
      { offset: 0, time: 3603, opcode: 14, size: 12, difficultyMask: 255, args: new Int32Array([2]) },
      {
        offset: 0,
        time: 3723,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([13, 1115684864, -1048576e3, 600, -2, 1e3])
      },
      {
        offset: 0,
        time: 3843,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([14, 1134559232, -1048576e3, 600, -2, 1e3])
      },
      {
        offset: 0,
        time: 4163,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([13, 1124073472, -1048576e3, 500, 2, 1e3])
      },
      {
        offset: 0,
        time: 4163,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([14, 1132462080, -1048576e3, 500, 3, 1e3])
      },
      {
        offset: 0,
        time: 4663,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([34, 1128267776, -1048576e3, 6e4, -2, 1e5])
      },
      { offset: 0, time: 4663, opcode: 6, size: 12, difficultyMask: 255, args: new Int32Array([0]) },
      { offset: 0, time: 4663, opcode: 7, size: 8, difficultyMask: 255, args: new Int32Array([]) },
      { offset: 0, time: 4663, opcode: 8, size: 16, difficultyMask: 255, args: new Int32Array([0, 1]) },
      { offset: 0, time: 4663, opcode: 10, size: 12, difficultyMask: 255, args: new Int32Array([0]) },
      {
        offset: 0,
        time: 4663,
        opcode: 0,
        size: 32,
        difficultyMask: 254,
        args: new Int32Array([43, 1128267776, 1124073472, 6e4, -2, 1e5])
      },
      { offset: 0, time: 4664, opcode: 10, size: 12, difficultyMask: 254, args: new Int32Array([0]) },
      { offset: 0, time: 4664, opcode: 6, size: 12, difficultyMask: 255, args: new Int32Array([1]) },
      { offset: 0, time: 4664, opcode: 7, size: 8, difficultyMask: 255, args: new Int32Array([]) }
    ]
  },
  {
    index: 1,
    offset: 47388,
    instructions: [
      { offset: 0, time: 20, opcode: 13, size: 12, difficultyMask: 255, args: new Int32Array([1]) },
      {
        offset: 0,
        time: 20,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([2, 1128267776, -1048576e3, 200, -2, 1e3])
      },
      {
        offset: 0,
        time: 80,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([4, 1128267776, -1048576e3, 200, -2, 1e3])
      },
      {
        offset: 0,
        time: 140,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([2, 1128267776, -1048576e3, 200, -2, 1e3])
      },
      { offset: 0, time: 140, opcode: 13, size: 12, difficultyMask: 255, args: new Int32Array([1]) },
      {
        offset: 0,
        time: 140,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([10, 1115684864, -1048576e3, 200, -2, 1e3])
      },
      {
        offset: 0,
        time: 140,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([12, 1132462080, -1048576e3, 200, -2, 1e3])
      },
      {
        offset: 0,
        time: 200,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([10, 1132462080, -1048576e3, 200, -2, 1e3])
      },
      {
        offset: 0,
        time: 200,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([12, 1115684864, -1048576e3, 200, -2, 1e3])
      },
      { offset: 0, time: 200, opcode: 13, size: 12, difficultyMask: 255, args: new Int32Array([1]) },
      {
        offset: 0,
        time: 200,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([10, 1124073472, -1048576e3, 200, -2, 1e3])
      },
      {
        offset: 0,
        time: 260,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([12, 1124073472, -1048576e3, 200, -2, 1e3])
      },
      { offset: 0, time: 260, opcode: 13, size: 12, difficultyMask: 255, args: new Int32Array([1]) },
      {
        offset: 0,
        time: 260,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([10, 1128267776, -1048576e3, 200, -2, 1e3])
      },
      {
        offset: 0,
        time: 320,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([12, 1128267776, -1048576e3, 200, -2, 1e3])
      },
      {
        offset: 0,
        time: 380,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([10, 1128267776, -1048576e3, 200, -2, 1e3])
      },
      { offset: 0, time: 380, opcode: 13, size: 12, difficultyMask: 255, args: new Int32Array([1]) },
      {
        offset: 0,
        time: 380,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([2, 1132462080, -1048576e3, 200, -2, 1e3])
      },
      {
        offset: 0,
        time: 440,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([4, 1132462080, -1048576e3, 200, -2, 1e3])
      },
      { offset: 0, time: 440, opcode: 13, size: 12, difficultyMask: 255, args: new Int32Array([1]) },
      {
        offset: 0,
        time: 440,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([2, 1115684864, -1048576e3, 200, -2, 1e3])
      },
      {
        offset: 0,
        time: 500,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([4, 1115684864, -1048576e3, 200, -2, 1e3])
      }
    ]
  },
  {
    index: 2,
    offset: 47988,
    instructions: [
      { offset: 0, time: 20, opcode: 13, size: 12, difficultyMask: 255, args: new Int32Array([0]) },
      {
        offset: 0,
        time: 20,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([18, 1107296256, 1119879168, -1048576e3, 10, -1, 1e3])
      },
      {
        offset: 0,
        time: 35,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([18, 1107296256, 1119879168, -1048576e3, 10, -1, 1e3])
      },
      {
        offset: 0,
        time: 50,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([18, 1115684864, 1124073472, -1048576e3, 10, -1, 1e3])
      },
      {
        offset: 0,
        time: 65,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([18, 1115684864, 1124073472, -1048576e3, 10, -1, 1e3])
      },
      {
        offset: 0,
        time: 80,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([18, 1119879168, 1126170624, -1048576e3, 10, -1, 1e3])
      },
      {
        offset: 0,
        time: 95,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([18, 1119879168, 1126170624, -1048576e3, 10, -1, 1e3])
      },
      {
        offset: 0,
        time: 110,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([18, 1124073472, 1128267776, -1048576e3, 10, -1, 1e3])
      },
      {
        offset: 0,
        time: 125,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([18, 1124073472, 1128267776, -1048576e3, 10, -1, 1e3])
      },
      {
        offset: 0,
        time: 140,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([18, 1126170624, 1130364928, -1048576e3, 10, -1, 1e3])
      },
      {
        offset: 0,
        time: 155,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([18, 1126170624, 1130364928, -1048576e3, 10, -1, 1e3])
      },
      {
        offset: 0,
        time: 170,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([18, 1128267776, 1132462080, -1048576e3, 10, -1, 1e3])
      },
      {
        offset: 0,
        time: 185,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([18, 1128267776, 1132462080, -1048576e3, 10, -1, 1e3])
      },
      {
        offset: 0,
        time: 200,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([18, 1130364928, 1133510656, -1048576e3, 10, -1, 1e3])
      },
      {
        offset: 0,
        time: 215,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([18, 1130364928, 1133510656, -1048576e3, 10, -1, 1e3])
      },
      {
        offset: 0,
        time: 230,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([18, 1132462080, 1134559232, -1048576e3, 10, -1, 1e3])
      },
      {
        offset: 0,
        time: 245,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([18, 1132462080, 1134559232, -1048576e3, 10, -1, 1e3])
      },
      {
        offset: 0,
        time: 260,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([18, 1133510656, 1135607808, -1048576e3, 10, -1, 1e3])
      },
      {
        offset: 0,
        time: 275,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([18, 1133510656, 1135607808, -1048576e3, 10, -1, 1e3])
      },
      { offset: 0, time: 290, opcode: 13, size: 12, difficultyMask: 255, args: new Int32Array([0]) },
      {
        offset: 0,
        time: 290,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([18, 1133510656, 1135607808, -1048576e3, 10, -1, 1e3])
      },
      {
        offset: 0,
        time: 305,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([18, 1133510656, 1135607808, -1048576e3, 10, -1, 1e3])
      },
      {
        offset: 0,
        time: 320,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([18, 1132462080, 1134559232, -1048576e3, 10, -1, 1e3])
      },
      {
        offset: 0,
        time: 335,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([18, 1132462080, 1134559232, -1048576e3, 10, -1, 1e3])
      },
      {
        offset: 0,
        time: 350,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([18, 1130364928, 1133510656, -1048576e3, 10, -1, 1e3])
      },
      {
        offset: 0,
        time: 365,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([18, 1130364928, 1133510656, -1048576e3, 10, -1, 1e3])
      },
      {
        offset: 0,
        time: 380,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([18, 1128267776, 1132462080, -1048576e3, 10, -1, 1e3])
      },
      {
        offset: 0,
        time: 395,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([18, 1128267776, 1132462080, -1048576e3, 10, -1, 1e3])
      },
      {
        offset: 0,
        time: 410,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([18, 1126170624, 1130364928, -1048576e3, 10, -1, 1e3])
      },
      {
        offset: 0,
        time: 425,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([18, 1126170624, 1130364928, -1048576e3, 10, -1, 1e3])
      },
      {
        offset: 0,
        time: 440,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([18, 1124073472, 1128267776, -1048576e3, 10, -1, 1e3])
      },
      {
        offset: 0,
        time: 455,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([18, 1124073472, 1128267776, -1048576e3, 10, -1, 1e3])
      },
      {
        offset: 0,
        time: 470,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([18, 1119879168, 1126170624, -1048576e3, 10, -1, 1e3])
      },
      {
        offset: 0,
        time: 485,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([18, 1119879168, 1126170624, -1048576e3, 10, -1, 1e3])
      },
      {
        offset: 0,
        time: 500,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([18, 1115684864, 1124073472, -1048576e3, 10, -1, 1e3])
      },
      {
        offset: 0,
        time: 515,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([18, 1115684864, 1124073472, -1048576e3, 10, -1, 1e3])
      },
      {
        offset: 0,
        time: 530,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([18, 1107296256, 1119879168, -1048576e3, 10, -1, 1e3])
      },
      {
        offset: 0,
        time: 545,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([18, 1107296256, 1119879168, -1048576e3, 10, -1, 1e3])
      }
    ]
  },
  {
    index: 3,
    offset: 49324,
    instructions: [
      { offset: 0, time: 20, opcode: 13, size: 12, difficultyMask: 255, args: new Int32Array([2]) },
      {
        offset: 0,
        time: 20,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([17, 1098907648, 1128267776, -1048576e3, 10, 1, 1e3])
      },
      {
        offset: 0,
        time: 30,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([17, 1098907648, 1128267776, -1048576e3, 10, 1, 1e3])
      },
      {
        offset: 0,
        time: 40,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([17, 1098907648, 1128267776, -1048576e3, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 50,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([17, 1098907648, 1128267776, -1048576e3, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 60,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([17, 1098907648, 1128267776, -1048576e3, 10, 1, 1e3])
      },
      {
        offset: 0,
        time: 70,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([17, 1098907648, 1128267776, -1048576e3, 10, 1, 1e3])
      },
      {
        offset: 0,
        time: 80,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([17, 1098907648, 1128267776, -1048576e3, 10, 1, 1e3])
      },
      {
        offset: 0,
        time: 90,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([17, 1098907648, 1128267776, -1048576e3, 10, 2, 1e3])
      },
      { offset: 0, time: 90, opcode: 13, size: 12, difficultyMask: 255, args: new Int32Array([2]) },
      {
        offset: 0,
        time: 90,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([17, 1128267776, 1136132096, -1048576e3, 10, 1, 1e3])
      },
      {
        offset: 0,
        time: 100,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([17, 1128267776, 1136132096, -1048576e3, 10, 1, 1e3])
      },
      {
        offset: 0,
        time: 110,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([17, 1128267776, 1136132096, -1048576e3, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 120,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([17, 1128267776, 1136132096, -1048576e3, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 130,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([17, 1128267776, 1136132096, -1048576e3, 10, 1, 1e3])
      },
      {
        offset: 0,
        time: 140,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([17, 1128267776, 1136132096, -1048576e3, 10, 1, 1e3])
      },
      {
        offset: 0,
        time: 150,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([17, 1128267776, 1136132096, -1048576e3, 10, 1, 1e3])
      },
      {
        offset: 0,
        time: 160,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([17, 1128267776, 1136132096, -1048576e3, 10, 2, 1e3])
      },
      { offset: 0, time: 160, opcode: 13, size: 12, difficultyMask: 255, args: new Int32Array([2]) },
      {
        offset: 0,
        time: 160,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([17, 1098907648, 1136132096, -1048576e3, 10, 1, 1e3])
      },
      {
        offset: 0,
        time: 170,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([17, 1098907648, 1136132096, -1048576e3, 10, 1, 1e3])
      },
      {
        offset: 0,
        time: 180,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([17, 1098907648, 1136132096, -1048576e3, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 190,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([17, 1098907648, 1136132096, -1048576e3, 10, 0, 1e3])
      },
      {
        offset: 0,
        time: 200,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([17, 1098907648, 1136132096, -1048576e3, 10, 1, 1e3])
      },
      {
        offset: 0,
        time: 210,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([17, 1098907648, 1136132096, -1048576e3, 10, 1, 1e3])
      },
      {
        offset: 0,
        time: 220,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([17, 1098907648, 1136132096, -1048576e3, 10, 1, 1e3])
      },
      {
        offset: 0,
        time: 230,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([17, 1098907648, 1136132096, -1048576e3, 10, 2, 1e3])
      }
    ]
  }
], X0 = {
  version: 2048,
  subCount: 78,
  subs: [],
  timelines: Y0
}, T0 = {
  route: "stage3",
  source: "ecldata3.ecl",
  subCount: 78,
  timelineCount: 4,
  cards: [
    {
      sub: 30,
      id: 32,
      name: "産霊「ファーストピラミッド」",
      owner: "上白沢慧音",
      face: 0,
      bonus: 2e7,
      lastSpell: !1
    },
    {
      sub: 30,
      id: 33,
      name: "産霊「ファーストピラミッド」",
      owner: "上白沢慧音",
      face: 0,
      bonus: 2e7,
      lastSpell: !1
    },
    {
      sub: 30,
      id: 34,
      name: "産霊「ファーストピラミッド」",
      owner: "上白沢慧音",
      face: 0,
      bonus: 2e7,
      lastSpell: !1
    },
    {
      sub: 30,
      id: 35,
      name: "産霊「ファーストピラミッド」",
      owner: "上白沢慧音",
      face: 0,
      bonus: 2e7,
      lastSpell: !1
    },
    {
      sub: 44,
      id: 36,
      name: "始符「エフェメラリティ137」",
      owner: "上白沢慧音",
      face: 0,
      bonus: 2e7,
      lastSpell: !1
    },
    {
      sub: 44,
      id: 37,
      name: "始符「エフェメラリティ137」",
      owner: "上白沢慧音",
      face: 0,
      bonus: 2e7,
      lastSpell: !1
    },
    {
      sub: 44,
      id: 38,
      name: "始符「エフェメラリティ137」",
      owner: "上白沢慧音",
      face: 0,
      bonus: 2e7,
      lastSpell: !1
    },
    {
      sub: 47,
      id: 39,
      name: "野符「武烈クライシス」",
      owner: "上白沢慧音",
      face: 0,
      bonus: 2e7,
      lastSpell: !1
    },
    {
      sub: 47,
      id: 40,
      name: "野符「将門クライシス」",
      owner: "上白沢慧音",
      face: 0,
      bonus: 2e7,
      lastSpell: !1
    },
    {
      sub: 47,
      id: 41,
      name: "野符「義満クライシス」",
      owner: "上白沢慧音",
      face: 0,
      bonus: 2e7,
      lastSpell: !1
    },
    {
      sub: 47,
      id: 42,
      name: "野符「GHQクライシス」",
      owner: "上白沢慧音",
      face: 0,
      bonus: 2e7,
      lastSpell: !1
    },
    {
      sub: 50,
      id: 43,
      name: "国符「三種の神器　剣」",
      owner: "上白沢慧音",
      face: 0,
      bonus: 2e7,
      lastSpell: !1
    },
    {
      sub: 54,
      id: 44,
      name: "国符「三種の神器　玉」",
      owner: "上白沢慧音",
      face: 0,
      bonus: 2e7,
      lastSpell: !1
    },
    {
      sub: 58,
      id: 45,
      name: "国符「三種の神器　鏡」",
      owner: "上白沢慧音",
      face: 0,
      bonus: 2e7,
      lastSpell: !1
    },
    {
      sub: 62,
      id: 46,
      name: "国体「三種の神器　郷」",
      owner: "上白沢慧音",
      face: 0,
      bonus: 2e7,
      lastSpell: !1
    },
    {
      sub: 67,
      id: 47,
      name: "終符「幻想天皇」",
      owner: "上白沢慧音",
      face: 0,
      bonus: 2e7,
      lastSpell: !1
    },
    {
      sub: 67,
      id: 48,
      name: "終符「幻想天皇」",
      owner: "上白沢慧音",
      face: 0,
      bonus: 2e7,
      lastSpell: !1
    },
    {
      sub: 67,
      id: 49,
      name: "虚史「幻想郷伝説」",
      owner: "上白沢慧音",
      face: 0,
      bonus: 2e7,
      lastSpell: !1
    },
    {
      sub: 67,
      id: 50,
      name: "虚史「幻想郷伝説」",
      owner: "上白沢慧音",
      face: 0,
      bonus: 2e7,
      lastSpell: !1
    },
    {
      sub: 71,
      id: 51,
      name: "未来「高天原」",
      owner: "上白沢慧音",
      face: 0,
      bonus: 2e7,
      lastSpell: !0
    },
    {
      sub: 71,
      id: 52,
      name: "未来「高天原」",
      owner: "上白沢慧音",
      face: 0,
      bonus: 2e7,
      lastSpell: !0
    },
    {
      sub: 71,
      id: 53,
      name: "未来「高天原」",
      owner: "上白沢慧音",
      face: 0,
      bonus: 2e7,
      lastSpell: !0
    }
  ],
  scripts: x0,
  waves: X0
};
export {
  T0 as STAGE3_SCRIPT
};
