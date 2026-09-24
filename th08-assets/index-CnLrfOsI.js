import { r as f, n } from "./index-BaCUa-wb.js";
const r = 1, c = 2, a = 4, l = 8, t = 16;
function* b(i) {
  let s = 0, e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
      case 0: {
        i.setAnmScripts6(77), i.setBounds(24, 24), i.clearScriptFlags(2), i.setMisc160(30), i.movePolar(50, 4, 0, 2.5), i.isDiff(r | t) && (i.i0 = 4), i.isDiff(c | t) && (i.i0 = 8), i.isDiff(a | t) && (i.i0 = 10), i.isDiff(l | t) && (i.i0 = 12), i.isDiff(r | t) && (i.f0 = 3), i.isDiff(c | t) && (i.f0 = 4), i.isDiff(a | t) && (i.f0 = 5), i.isDiff(l | t) && (i.f0 = 5.5), yield 50, s = 1;
        break;
      }
      case 1: {
        i.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 1,
          color: 6,
          count: 1,
          rings: f(1e4),
          speed: f(10016),
          speed2: 1,
          angle: 0,
          angleStep: 0,
          transform: 514
        }), yield 30, s = 2;
        break;
      }
      case 2: {
        i.setHeadingSpeed(0, 0), i.setSpeedAccel(0.066667), i.callSubAlloc(0, 1), yield 5e3, s = 3;
        break;
      }
      case 3:
        return;
      default:
        return;
    }
}
function* h(i) {
  let s = 0, e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
      case 0: {
        i.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 2,
          color: 6,
          count: 1,
          rings: 1,
          speed: 2,
          speed2: 0.5,
          angle: 0,
          angleStep: 0.28559932,
          transform: 515
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
function* g(i) {
  let s = 0, e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
      case 0: {
        if (i.setAnm(83), i.setExtraAnm(0, 48), i.setBounds(48, 48), i.setMisc160(200), i.clearScriptFlags(2), i.setMisc144(5, 4), i.movePolar(60, 4, 1.570796, 3), i.posX >= 192) {
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
        if (i.f0 = -3.141593, i.linkChildAttached(3, 0, 0, 300, -2, 100), i.f0 = -1.047198, i.linkChildAttached(3, 0, 0, 200, -2, 100), i.f0 = 1.047198, i.linkChildAttached(3, 0, 0, 300, -2, 100), i.posX >= 192) {
          s = 5;
          break;
        }
        s = 4;
        break;
      }
      case 4: {
        i.f1 = -0.07854, s = 6;
        break;
      }
      case 5: {
        i.f1 = 0.07854, s = 6;
        break;
      }
      case 6: {
        if (i.f0 = -3.141593, i.linkChildAttached(5, 0, 0, 300, -2, 100), i.f0 = -1.884956, i.linkChildAttached(5, 0, 0, 200, -2, 100), i.f0 = -0.628319, i.linkChildAttached(5, 0, 0, 300, -2, 100), i.f0 = 0.628319, i.linkChildAttached(5, 0, 0, 200, -2, 100), i.f0 = 1.884956, i.linkChildAttached(5, 0, 0, 200, -2, 100), i.posX >= 192) {
          s = 8;
          break;
        }
        s = 7;
        break;
      }
      case 7: {
        i.f1 = 0.05236, s = 9;
        break;
      }
      case 8: {
        i.f1 = -0.05236, s = 9;
        break;
      }
      case 9: {
        i.f0 = -3.141593, i.linkChildAttached(7, 0, 0, 300, -2, 100), i.f0 = -1.884956, i.linkChildAttached(7, 0, 0, 200, -2, 100), i.f0 = -0.628319, i.linkChildAttached(7, 0, 0, 300, -2, 100), i.f0 = 0.628319, i.linkChildAttached(7, 0, 0, 200, -2, 100), i.f0 = 1.884956, i.linkChildAttached(7, 0, 0, 200, -2, 100), yield 60, s = 10;
        break;
      }
      case 10: {
        i.setHeadingSpeed(0.392699, 0), i.f0 = 1.570796, i.f1 = 0.05236, yield 120, s = 11;
        break;
      }
      case 11: {
        i.setHeadingSpeed(-1.570796, 0.6), yield 5e3, s = 12;
        break;
      }
      case 12:
        return;
      default:
        return;
    }
}
function* S(i) {
  let s = 0, e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
      case 0: {
        i.setAnm(54), i.setBounds(24, 24), i.clearScriptFlags(16), i.setScriptFlags(3), i.setHitFlash(1), i.moveArc(20, i.f0, i.f1, 1.5), yield 20, s = 1;
        break;
      }
      case 1: {
        i.setAccel(6e3, i.f1, 0), i.isDiff(c | a | l | t) && i.callSubAlloc(0, 4), yield 5e3, s = 2;
        break;
      }
      case 2:
        return;
      default:
        return;
    }
}
function* m(i) {
  let s = 0, e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
      case 0: {
        i.setShotRecord(0, 64, 0, 50, 1, 1.570796, 2.5), i.i0 = 8, s = 1;
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
          speed: 1.5,
          speed2: 0.8,
          angle: f(10016),
          angleStep: 0,
          transform: 578
        }), yield i.delay(i.i0), s = 1;
        break;
      }
      default:
        return;
    }
}
function* w(i) {
  let s = 0, e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
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
function* A(i) {
  let s = 0, e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
      case 0: {
        i.isDiff(r | t) && (i.i0 = 26), i.isDiff(c | t) && (i.i0 = 13), i.isDiff(a | t) && (i.i0 = 11), i.isDiff(l | t) && (i.i0 = 4), s = 1;
        break;
      }
      case 1: {
        if (i.f0 = i.moveAngle + 3.141593, i.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 1,
          color: 6,
          count: 1,
          rings: 2,
          speed: 2.2,
          speed2: 1.2,
          angle: f(10069),
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
function* M(i) {
  let s = 0, e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
      case 0: {
        i.setAnm(54), i.setBounds(24, 24), i.clearScriptFlags(16), i.setScriptFlags(3), i.setHitFlash(1), i.moveArc(20, i.f0, i.f1, 4.5), yield 20, s = 1;
        break;
      }
      case 1: {
        i.setAccel(6e3, i.f1, 0), i.callSubAlloc(0, 8), yield 5e3, s = 2;
        break;
      }
      case 2:
        return;
      default:
        return;
    }
}
function* D(i) {
  let s = 0, e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
      case 0: {
        i.isDiff(r | t) && (i.i0 = 26), i.isDiff(c | t) && (i.i0 = 13), i.isDiff(a | t) && (i.i0 = 11), i.isDiff(l | t) && (i.i0 = 5), s = 1;
        break;
      }
      case 1: {
        if (i.f0 = i.moveAngle + 3.141593, i.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 1,
          color: 2,
          count: 1,
          rings: 2,
          speed: 2.2,
          speed2: 1.2,
          angle: f(10069),
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
  let s = 0, e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
      case 0: {
        if (i.setAnm(83), i.setExtraAnm(0, 48), i.setBounds(48, 48), i.setMisc160(60), i.clearScriptFlags(2), i.setMisc144(5, 4), i.movePolar(60, 4, 1.570796, 3), i.posX >= 192) {
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
        if (i.f0 = -3.141593, i.linkChildAttached(3, 0, 0, 300, -2, 100), i.f0 = -1.047198, i.linkChildAttached(3, 0, 0, 200, -2, 100), i.f0 = 1.047198, i.linkChildAttached(3, 0, 0, 300, -2, 100), i.posX >= 192) {
          s = 5;
          break;
        }
        s = 4;
        break;
      }
      case 4: {
        i.f1 = -0.07854, s = 6;
        break;
      }
      case 5: {
        i.f1 = 0.07854, s = 6;
        break;
      }
      case 6: {
        if (i.f0 = -3.141593, i.linkChildAttached(5, 0, 0, 300, -2, 100), i.f0 = -1.884956, i.linkChildAttached(5, 0, 0, 200, -2, 100), i.f0 = -0.628319, i.linkChildAttached(5, 0, 0, 300, -2, 100), i.f0 = 0.628319, i.linkChildAttached(5, 0, 0, 200, -2, 100), i.f0 = 1.884956, i.linkChildAttached(5, 0, 0, 200, -2, 100), i.posX >= 192) {
          s = 8;
          break;
        }
        s = 7;
        break;
      }
      case 7: {
        i.f1 = 0.05236, s = 9;
        break;
      }
      case 8: {
        i.f1 = -0.05236, s = 9;
        break;
      }
      case 9: {
        i.f0 = -3.141593, i.linkChildAttached(7, 0, 0, 300, -2, 100), i.f0 = -1.884956, i.linkChildAttached(7, 0, 0, 200, -2, 100), i.f0 = -0.628319, i.linkChildAttached(7, 0, 0, 300, -2, 100), i.f0 = 0.628319, i.linkChildAttached(7, 0, 0, 200, -2, 100), i.f0 = 1.884956, i.linkChildAttached(7, 0, 0, 200, -2, 100), yield 60, s = 10;
        break;
      }
      case 10: {
        i.setHeadingSpeed(0.392699, 0), i.f0 = 1.570796, i.f1 = 0.05236, yield 120, s = 11;
        break;
      }
      case 11: {
        i.setHeadingSpeed(-1.570796, 0.6), yield 5e3, s = 12;
        break;
      }
      case 12:
        return;
      default:
        return;
    }
}
function* I(i) {
  let s = 0, e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
      case 0: {
        if (i.setAnm(83), i.setExtraAnm(0, 48), i.setBounds(48, 48), i.setMisc160(60), i.clearScriptFlags(2), i.setMisc144(5, 4), i.movePolar(60, 4, 1.570796, 3), i.posX >= 192) {
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
        if (i.f0 = -3.141593, i.linkChildAttached(11, 0, 0, 300, -2, 100), i.f0 = -1.047198, i.linkChildAttached(11, 0, 0, 200, -2, 100), i.f0 = 1.047198, i.linkChildAttached(11, 0, 0, 300, -2, 100), i.posX >= 192) {
          s = 5;
          break;
        }
        s = 4;
        break;
      }
      case 4: {
        i.f1 = -0.07854, s = 6;
        break;
      }
      case 5: {
        i.f1 = 0.07854, s = 6;
        break;
      }
      case 6: {
        i.f0 = -3.141593, i.linkChildAttached(13, 0, 0, 300, -2, 100), i.f0 = -1.884956, i.linkChildAttached(13, 0, 0, 200, -2, 100), i.f0 = -0.628319, i.linkChildAttached(13, 0, 0, 300, -2, 100), i.f0 = 0.628319, i.linkChildAttached(13, 0, 0, 200, -2, 100), i.f0 = 1.884956, i.linkChildAttached(13, 0, 0, 200, -2, 100), yield 60, s = 7;
        break;
      }
      case 7: {
        i.setHeadingSpeed(0.392699, 0), i.f0 = 1.570796, i.f1 = 0.05236, yield 120, s = 8;
        break;
      }
      case 8: {
        i.setHeadingSpeed(-1.570796, 0.6), yield 5e3, s = 9;
        break;
      }
      case 9:
        return;
      default:
        return;
    }
}
function* z(i) {
  let s = 0, e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
      case 0: {
        i.setAnm(54), i.setBounds(24, 24), i.clearScriptFlags(16), i.setScriptFlags(3), i.setHitFlash(1), i.moveArc(20, i.f0, i.f1, 1.5), yield 20, s = 1;
        break;
      }
      case 1: {
        i.setAccel(6e3, i.f1, 0), i.callSubAlloc(0, 12), yield 5e3, s = 2;
        break;
      }
      case 2:
        return;
      default:
        return;
    }
}
function* C(i) {
  let s = 0, e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
      case 0: {
        i.isDiff(r | t) && (i.i0 = 48), i.isDiff(c | t) && (i.i0 = 24), i.isDiff(a | t) && (i.i0 = 20), i.isDiff(l | t) && (i.i0 = 16), s = 1;
        break;
      }
      case 1: {
        i.f0 = i.moveAngle - 3.141593, i.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 7,
          color: 1,
          count: 1,
          rings: 1,
          speed: 2,
          speed2: 0.8,
          angle: 0,
          angleStep: 0,
          transform: 515
        }), yield i.delay(i.i0), s = 1;
        break;
      }
      default:
        return;
    }
}
function* v(i) {
  let s = 0, e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
      case 0: {
        i.setAnm(54), i.setBounds(24, 24), i.clearScriptFlags(16), i.setScriptFlags(3), i.setHitFlash(1), i.moveArc(20, i.f0, i.f1, 3), yield 20, s = 1;
        break;
      }
      case 1: {
        i.setAccel(6e3, i.f1, 0), i.callSubAlloc(0, 14), yield 5e3, s = 2;
        break;
      }
      case 2:
        return;
      default:
        return;
    }
}
function* R(i) {
  let s = 0, e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
      case 0: {
        i.isDiff(r | t) && (i.i0 = 40), i.isDiff(c | t) && (i.i0 = 13), i.isDiff(a | t) && (i.i0 = 11), i.isDiff(l | t) && (i.i0 = 9), i.isDiff(r | t) && (i.i7 = 1), i.isDiff(c | t) && (i.i7 = 2), i.isDiff(a | t) && (i.i7 = 3), i.isDiff(l | t) && (i.i7 = 3), s = 1;
        break;
      }
      case 1: {
        if (i.f0 = i.moveAngle + 3.141593, i.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 7,
          color: 3,
          count: 1,
          rings: f(10007),
          speed: 1.6,
          speed2: 1.2,
          angle: f(10016),
          angleStep: 0,
          transform: 512
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
function* _(i) {
  let s = 0, e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
      case 0: {
        if (i.setAnm(83), i.setExtraAnm(0, 48), i.setBounds(48, 48), i.setMisc160(120), i.clearScriptFlags(2), i.setMisc144(7, 4), i.movePolar(60, 4, 1.570796, 3), i.posX >= 192) {
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
        if (i.f0 = -3.141593, i.linkChildAttached(16, 0, 0, 300, -2, 100), i.f0 = -1.047198, i.linkChildAttached(16, 0, 0, 200, -2, 100), i.f0 = 1.047198, i.linkChildAttached(16, 0, 0, 300, -2, 100), i.posX >= 192) {
          s = 5;
          break;
        }
        s = 4;
        break;
      }
      case 4: {
        i.f1 = -0.07854, s = 6;
        break;
      }
      case 5: {
        i.f1 = 0.07854, s = 6;
        break;
      }
      case 6: {
        if (i.f0 = -3.141593, i.linkChildAttached(18, 0, 0, 300, -2, 100), i.f0 = -1.884956, i.linkChildAttached(18, 0, 0, 200, -2, 100), i.f0 = -0.628319, i.linkChildAttached(18, 0, 0, 300, -2, 100), i.f0 = 0.628319, i.linkChildAttached(18, 0, 0, 200, -2, 100), i.f0 = 1.884956, i.linkChildAttached(18, 0, 0, 200, -2, 100), i.posX >= 192) {
          s = 8;
          break;
        }
        s = 7;
        break;
      }
      case 7: {
        i.f1 = 0.05236, s = 9;
        break;
      }
      case 8: {
        i.f1 = -0.05236, s = 9;
        break;
      }
      case 9: {
        i.f0 = -3.141593, i.linkChildAttached(20, 0, 0, 300, -2, 100), i.f0 = -1.884956, i.linkChildAttached(20, 0, 0, 200, -2, 100), i.f0 = -0.628319, i.linkChildAttached(20, 0, 0, 300, -2, 100), i.f0 = 0.628319, i.linkChildAttached(20, 0, 0, 200, -2, 100), i.f0 = 1.884956, i.linkChildAttached(20, 0, 0, 200, -2, 100), yield 60, s = 10;
        break;
      }
      case 10: {
        i.setHeadingSpeed(0.392699, 0), i.f0 = 1.570796, i.f1 = 0.05236, yield 340, s = 11;
        break;
      }
      case 11: {
        i.setHeadingSpeed(-1.570796, 0.6), yield 5e3, s = 12;
        break;
      }
      case 12:
        return;
      default:
        return;
    }
}
function* E(i) {
  let s = 0, e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
      case 0: {
        i.setAnm(54), i.setBounds(24, 24), i.clearScriptFlags(16), i.setMisc160(120), i.setScriptFlags(3), i.setHitFlash(1), i.moveArc(20, i.f0, i.f1, 1.5), yield 20, s = 1;
        break;
      }
      case 1: {
        i.setAccel(6e3, i.f1, 0), i.callSubAlloc(0, 17), yield 5e3, s = 2;
        break;
      }
      case 2:
        return;
      default:
        return;
    }
}
function* B(i) {
  let s = 0;
  yield 120;
  let e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
      case 0: {
        i.i0 = 8, s = 1;
        break;
      }
      case 1: {
        i.f0 = i.moveAngle - 1.570796, i.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 1,
          color: 2,
          count: 1,
          rings: 1,
          speed: 1.6,
          speed2: 0.8,
          angle: f(10016),
          angleStep: 0,
          transform: 515
        }), yield i.delay(i.i0), s = 1;
        break;
      }
      default:
        return;
    }
}
function* x(i) {
  let s = 0, e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
      case 0: {
        i.setAnm(54), i.setBounds(24, 24), i.clearScriptFlags(16), i.setMisc160(120), i.setScriptFlags(3), i.setHitFlash(1), i.moveArc(20, i.f0, i.f1, 3), yield 20, s = 1;
        break;
      }
      case 1: {
        i.setAccel(6e3, i.f1, 0), i.callSubAlloc(0, 19), yield 5e3, s = 2;
        break;
      }
      case 2:
        return;
      default:
        return;
    }
}
function* H(i) {
  let s = 0;
  yield 120;
  let e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
      case 0: {
        i.isDiff(r | t) && (i.i0 = 40), i.isDiff(c | t) && (i.i0 = 13), i.isDiff(a | t) && (i.i0 = 13), i.isDiff(l | t) && (i.i0 = 11), s = 1;
        break;
      }
      case 1: {
        if (i.f0 = i.moveAngle + 1.570796, i.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 7,
          color: 3,
          count: 1,
          rings: 2,
          speed: 1.6,
          speed2: 1.2,
          angle: f(10016),
          angleStep: 0,
          transform: 512
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
function* T(i) {
  let s = 0, e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
      case 0: {
        i.setAnm(54), i.setBounds(24, 24), i.clearScriptFlags(16), i.setScriptFlags(3), i.setMisc160(120), i.setHitFlash(1), i.moveArc(20, i.f0, i.f1, 4.5), yield 20, s = 1;
        break;
      }
      case 1: {
        i.setAccel(6e3, i.f1, 0), i.callSubAlloc(0, 21), yield 5e3, s = 2;
        break;
      }
      case 2:
        return;
      default:
        return;
    }
}
function* P(i) {
  let s = 0;
  yield 120;
  let e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
      case 0: {
        i.isDiff(r | t) && (i.i0 = 30), i.isDiff(c | t) && (i.i0 = 9), i.isDiff(a | t) && (i.i0 = 9), i.isDiff(l | t) && (i.i0 = 9), s = 1;
        break;
      }
      case 1: {
        if (i.f0 = i.moveAngle + 3.141593, i.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 1,
          color: 2,
          count: 1,
          rings: 2,
          speed: 2.2,
          speed2: 1.2,
          angle: f(10069),
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
function* L(i) {
  let s = 0, e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
      case 0: {
        if (i.setAnm(83), i.setExtraAnm(0, 48), i.setBounds(48, 48), i.setMisc160(120), i.clearScriptFlags(2), i.setMisc144(7, 4), i.movePolar(60, 4, 1.570796, 3), i.posX >= 192) {
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
        if (i.f0 = -3.141593, i.linkChildAttached(23, 0, 0, 300, -2, 100), i.f0 = -1.047198, i.linkChildAttached(23, 0, 0, 200, -2, 100), i.f0 = 1.047198, i.linkChildAttached(23, 0, 0, 300, -2, 100), i.posX >= 192) {
          s = 5;
          break;
        }
        s = 4;
        break;
      }
      case 4: {
        i.f1 = -0.07854, s = 6;
        break;
      }
      case 5: {
        i.f1 = 0.07854, s = 6;
        break;
      }
      case 6: {
        if (i.f0 = -3.141593, i.linkChildAttached(25, 0, 0, 300, -2, 100), i.f0 = -1.884956, i.linkChildAttached(25, 0, 0, 200, -2, 100), i.f0 = -0.628319, i.linkChildAttached(25, 0, 0, 300, -2, 100), i.f0 = 0.628319, i.linkChildAttached(25, 0, 0, 200, -2, 100), i.f0 = 1.884956, i.linkChildAttached(25, 0, 0, 200, -2, 100), i.posX >= 192) {
          s = 8;
          break;
        }
        s = 7;
        break;
      }
      case 7: {
        i.f1 = 0.05236, s = 9;
        break;
      }
      case 8: {
        i.f1 = -0.05236, s = 9;
        break;
      }
      case 9: {
        i.f0 = -3.141593, i.linkChildAttached(27, 0, 0, 300, -2, 100), i.f0 = -1.884956, i.linkChildAttached(27, 0, 0, 200, -2, 100), i.f0 = -0.628319, i.linkChildAttached(27, 0, 0, 300, -2, 100), i.f0 = 0.628319, i.linkChildAttached(27, 0, 0, 200, -2, 100), i.f0 = 1.884956, i.linkChildAttached(27, 0, 0, 200, -2, 100), yield 60, s = 10;
        break;
      }
      case 10: {
        i.setHeadingSpeed(0.392699, 0), i.f0 = 1.570796, i.f1 = 0.05236, yield 340, s = 11;
        break;
      }
      case 11: {
        i.setHeadingSpeed(-1.570796, 0.6), yield 5e3, s = 12;
        break;
      }
      case 12:
        return;
      default:
        return;
    }
}
function* X(i) {
  let s = 0, e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
      case 0: {
        i.setAnm(54), i.setBounds(24, 24), i.clearScriptFlags(16), i.setMisc160(120), i.setScriptFlags(3), i.setHitFlash(1), i.moveArc(20, i.f0, i.f1, 1.5), yield 20, s = 1;
        break;
      }
      case 1: {
        i.setAccel(6e3, i.f1, 0), i.isDiff(c | a | l | t) && i.callSubAlloc(0, 24), yield 5e3, s = 2;
        break;
      }
      case 2:
        return;
      default:
        return;
    }
}
function* O(i) {
  let s = 0;
  yield 120;
  let e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
      case 0: {
        i.i0 = 9, s = 1;
        break;
      }
      case 1: {
        i.f0 = i.moveAngle - 1.570796, i.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 1,
          color: 2,
          count: 1,
          rings: 1,
          speed: 1.6,
          speed2: 0.8,
          angle: f(10016),
          angleStep: 0,
          transform: 515
        }), yield i.delay(i.i0), s = 1;
        break;
      }
      default:
        return;
    }
}
function* N(i) {
  let s = 0, e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
      case 0: {
        i.setAnm(54), i.setBounds(24, 24), i.clearScriptFlags(16), i.setMisc160(120), i.setScriptFlags(3), i.setHitFlash(1), i.moveArc(20, i.f0, i.f1, 3), yield 20, s = 1;
        break;
      }
      case 1: {
        i.setAccel(6e3, i.f1, 0), i.callSubAlloc(0, 26), yield 5e3, s = 2;
        break;
      }
      case 2:
        return;
      default:
        return;
    }
}
function* Y(i) {
  let s = 0;
  yield 120;
  let e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
      case 0: {
        i.isDiff(r | t) && (i.i0 = 37), i.isDiff(c | t) && (i.i0 = 13), i.isDiff(a | t) && (i.i0 = 12), i.isDiff(l | t) && (i.i0 = 11), i.isDiff(r | t) && (i.f7 = 1.6), i.isDiff(c | t) && (i.f7 = 1.6), i.isDiff(a | t) && (i.f7 = 1.9), i.isDiff(l | t) && (i.f7 = 2.1), s = 1;
        break;
      }
      case 1: {
        if (i.f0 = i.moveAngle + 1.570796, i.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 7,
          color: 3,
          count: 1,
          rings: 2,
          speed: f(10023),
          speed2: 1.2,
          angle: f(10016),
          angleStep: 0,
          transform: 512
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
function* G(i) {
  let s = 0, e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
      case 0: {
        i.setAnm(54), i.setBounds(24, 24), i.clearScriptFlags(16), i.setMisc160(120), i.setScriptFlags(3), i.setHitFlash(1), i.moveArc(20, i.f0, i.f1, 4.5), yield 20, s = 1;
        break;
      }
      case 1: {
        i.setAccel(6e3, i.f1, 0), i.callSubAlloc(0, 28), yield 5e3, s = 2;
        break;
      }
      case 2:
        return;
      default:
        return;
    }
}
function* j(i) {
  let s = 0;
  yield 120;
  let e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
      case 0: {
        i.isDiff(r | t) && (i.i0 = 51), i.isDiff(c | t) && (i.i0 = 23), i.isDiff(a | t) && (i.i0 = 23), i.isDiff(l | t) && (i.i0 = 23), i.isDiff(r | t) && (i.f7 = 1.8), i.isDiff(c | t) && (i.f7 = 1.8), i.isDiff(a | t) && (i.f7 = 2.1), i.isDiff(l | t) && (i.f7 = 3), s = 1;
        break;
      }
      case 1: {
        if (i.f0 = i.moveAngle + 3.141593, i.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 1,
          color: 2,
          count: 1,
          rings: 2,
          speed: f(10023),
          speed2: 1.2,
          angle: f(10069),
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
function* W(i) {
  let s = 0, e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
      case 0: {
        i.setAnm(94), i.setExtraAnm(0, 48), i.setBounds(24, 24), i.clearScriptFlags(2), i.setMisc160(20), i.playSfx(36), yield 20, s = 1;
        break;
      }
      case 1: {
        i.callSubAlloc(0, 30), yield 120, s = 2;
        break;
      }
      case 2: {
        i.setHeadingSpeed(-0.785398, 0), i.setSpeedAccel(0.033333), yield 5e3, s = 3;
        break;
      }
      case 3:
        return;
      default:
        return;
    }
}
function* U(i) {
  let s = 0, e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
      case 0: {
        i.isDiff(r | t) && (i.ci2 = 20), i.isDiff(c | t) && (i.ci2 = 7), i.isDiff(a | t) && (i.ci2 = 6), i.isDiff(l | t) && (i.ci2 = 2), i.isDiff(r | t) && (i.f2 = 0.4), i.isDiff(c | t) && (i.f2 = 0.4), i.isDiff(a | t) && (i.f2 = 0.5), i.isDiff(l | t) && (i.f2 = 1), s = 1;
        break;
      }
      case 1: {
        i.f0 = i.randF32S * 0.785398, i.f0 += i.timer, i.f1 = i.randF32 * 1, i.f1 += i.f2, i.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 2,
          color: 6,
          count: 1,
          rings: 1,
          speed: f(10017),
          speed2: 0.5,
          angle: f(10016),
          angleStep: 0,
          transform: 515
        }), yield i.delay(i.ci2), i.f0 = i.randF32S * 1.570796, i.f0 += i.timer, i.f1 = i.randF32 * 1, i.f1 += i.f2, i.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 2,
          color: 4,
          count: 1,
          rings: 1,
          speed: f(10017),
          speed2: 0.5,
          angle: f(10016),
          angleStep: 0,
          transform: 515
        }), yield i.delay(i.ci2), s = 1;
        break;
      }
      default:
        return;
    }
}
function* q(i) {
  let s = 0, e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
      case 0: {
        i.setAnm(94), i.setExtraAnm(0, 48), i.setBounds(24, 24), i.clearScriptFlags(2), i.setMisc160(20), i.playSfx(36), yield 20, s = 1;
        break;
      }
      case 1: {
        i.callSubAlloc(0, 32), yield 120, s = 2;
        break;
      }
      case 2: {
        i.setHeadingSpeed(-0.785398, 0), i.setSpeedAccel(0.033333), yield 5e3, s = 3;
        break;
      }
      case 3:
        return;
      default:
        return;
    }
}
function* J(i) {
  let s = 0, e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
      case 0: {
        i.isDiff(r | t) && (i.ci2 = 28), i.isDiff(c | t) && (i.ci2 = 9), i.isDiff(a | t) && (i.ci2 = 7), i.isDiff(l | t) && (i.ci2 = 5), i.isDiff(r | t) && (i.f2 = 1.4), i.isDiff(c | t) && (i.f2 = 1.5), i.isDiff(a | t) && (i.f2 = 2), i.isDiff(l | t) && (i.f2 = 2.5), s = 1;
        break;
      }
      case 1: {
        i.setShotRecord(0, 128, 0, 60, 1, 0, 1.4), i.f0 = i.randF32S * 0.785398, i.f0 += i.timer, i.f1 = i.randF32 * 1, i.f1 += i.f2, i.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 2,
          color: 6,
          count: 1,
          rings: 1,
          speed: f(10017),
          speed2: 0.5,
          angle: f(10016),
          angleStep: 0,
          transform: 642
        }), yield i.delay(i.ci2), i.f0 = i.randF32S * 1.570796, i.setShotRecord(0, 128, 0, 60, 1, 0, 2), i.f0 += i.timer, i.f1 = i.randF32 * 1, i.f1 += i.f2, i.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 2,
          color: 4,
          count: 1,
          rings: 1,
          speed: f(10017),
          speed2: 0.5,
          angle: f(10016),
          angleStep: 0,
          transform: 642
        }), yield i.delay(i.ci2), s = 1;
        break;
      }
      default:
        return;
    }
}
function* K(i) {
  let s = 0, e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
      case 0: {
        i.removeAllBullets(), i.enemyFunc95();
        return;
      }
      default:
        return;
    }
}
function* Q(i) {
  let s = 0, e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
      case 0: {
        i.setAnm(95), i.setExtraAnm(0, 48), i.setBounds(24, 24), i.setMisc160(30), i.clearScriptFlags(2), i.movePolar(50, 4, 1.570796, 2), yield 50, s = 1;
        break;
      }
      case 1: {
        i.setHeadingSpeed(1.570796, 1), i.f0 = 1.570796, i.f1 = -0.05236, i.linkChildAttached(35, 0, 0, 100, -2, 100), yield 10, s = 2;
        break;
      }
      case 2: {
        i.linkChildAttached(35, 0, 0, 100, -2, 100), yield 10, s = 3;
        break;
      }
      case 3: {
        i.linkChildAttached(35, 0, 0, 100, -2, 100), yield 10, s = 4;
        break;
      }
      case 4: {
        i.linkChildAttached(35, 0, 0, 100, -2, 100), yield 5e3, s = 5;
        break;
      }
      case 5:
        return;
      default:
        return;
    }
}
function* V(i) {
  let s = 0, e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
      case 0: {
        i.setAnm(56), i.setBounds(24, 24), i.clearScriptFlags(16), i.setScriptFlags(3), i.setHitFlash(1), i.moveArc(100, i.f0, i.f1, 0.833333), yield 60, s = 1;
        break;
      }
      case 1: {
        i.setAccel(6e3, i.f1, 0), yield 5e3, s = 2;
        break;
      }
      case 2:
        return;
      default:
        return;
    }
}
function* Z(i) {
  let s = 0, e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
      case 0: {
        i.setAnm(95), i.setExtraAnm(0, 48), i.setBounds(24, 24), i.setMisc160(30), i.clearScriptFlags(2), i.movePolar(50, 4, 1.570796, 3), yield 50, s = 1;
        break;
      }
      case 1: {
        i.setHeadingSpeed(1.570796, 1), i.f0 = 1.570796, i.f1 = 0.05236, i.linkChildAttached(35, 0, 0, 100, -2, 100), yield 10, s = 2;
        break;
      }
      case 2: {
        i.linkChildAttached(35, 0, 0, 100, -2, 100), yield 10, s = 3;
        break;
      }
      case 3: {
        i.linkChildAttached(35, 0, 0, 100, -2, 100), yield 10, s = 4;
        break;
      }
      case 4: {
        i.linkChildAttached(35, 0, 0, 100, -2, 100), yield 5e3, s = 5;
        break;
      }
      case 5:
        return;
      default:
        return;
    }
}
function* $(i) {
  let s = 0, e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
      case 0: {
        i.clearScriptFlags(56), i.spawnEffectAt(51, 16, 0), yield 4, s = 1;
        break;
      }
      case 1: {
        i.spawnEffectAt(51, 16, 0), yield 4, s = 2;
        break;
      }
      case 2: {
        i.spawnEffectAt(51, 16, 0), yield 4, s = 3;
        break;
      }
      case 3: {
        i.spawnEffectAt(51, 16, 0), yield 4, s = 4;
        break;
      }
      case 4: {
        i.spawnEffectAt(51, 16, 0), yield 4, s = 5;
        break;
      }
      case 5: {
        i.spawnEffectAt(51, 16, 0), s = 6;
        break;
      }
      case 6: {
        i.spawnEffectAt(51, 4, 0), yield 4, s = 7;
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
function* i0(i) {
  let s = 0, e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
      case 0: {
        i.setAnmScripts6Alt(0), i.clearScriptFlags(20), i.setBossPresent(0), i.setBounds(48, 48), i.setMisc160(60), i.setLives(14e3), i.setSpellTimer(2040, 45), i.setMisc129(2), i.setDeathCallbackSub(45), i.eclSetLives(1), i.setRelPos(416, -32), i.moveRelative(60, 4, 192, 128), yield 60, s = 1;
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
        i.setMotionClamp(32, 48, 352, 128), yield* o(i), s = 8;
        break;
      }
      case 8:
        return;
      default:
        return;
    }
}
function* o(i) {
  let s = 0, e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
      case 0: {
        i.setScriptFlags(4), i.setMisc144(10, 5), i.ci3 = 0, s = 1;
        break;
      }
      case 1: {
        yield* p(i), s = 2;
        break;
      }
      case 2: {
        i.moveBounce(60, 4, 1), i.ci0 = 16, i.f0 = i.timer - 1.570796, i.f1 = 1, s = 3;
        break;
      }
      case 3: {
        if (i.f0 = n(i.f0), i.linkChildRelative(42, 0, 0, 300, -2, 100), i.setShotOrigin(0, 0), i.ci3 <= 0) {
          s = 5;
          break;
        }
        s = 4;
        break;
      }
      case 4: {
        i.isDiff(r | t) && i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 1,
          color: 6,
          count: 1,
          rings: 6,
          speed: 2,
          speed2: 0.8,
          angle: f(10016),
          angleStep: 0.014024967,
          transform: 514
        }), i.isDiff(c | t) && i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 1,
          color: 6,
          count: 1,
          rings: 12,
          speed: 3,
          speed2: 0.8,
          angle: f(10016),
          angleStep: 0.016362462,
          transform: 514
        }), i.isDiff(a | t) && i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 1,
          color: 6,
          count: 1,
          rings: 12,
          speed: 3,
          speed2: 0.8,
          angle: f(10016),
          angleStep: 0.016362462,
          transform: 514
        }), i.isDiff(l | t) && i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 1,
          color: 6,
          count: 1,
          rings: 12,
          speed: 3,
          speed2: 0.8,
          angle: f(10016),
          angleStep: 0.016362462,
          transform: 514
        }), s = 5;
        break;
      }
      case 5: {
        if (i.f0 += 0.19635, --i.ci0 > 0) {
          s = 3;
          break;
        }
        s = 6;
        break;
      }
      case 6: {
        yield* u(i), s = 7;
        break;
      }
      case 7: {
        i.moveBounce(60, 4, 1), i.ci0 = 16, i.f1 = 1, i.f0 = i.timer - 1.570796, s = 8;
        break;
      }
      case 8: {
        if (i.f0 = n(i.f0), i.linkChildRelative(42, 0, 0, 300, -2, 100), i.setShotOrigin(0, 0), i.isDiff(r | t) && i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 1,
          color: 2,
          count: 1,
          rings: 6,
          speed: 2,
          speed2: 0.8,
          angle: f(10016),
          angleStep: -0.014024967,
          transform: 514
        }), i.isDiff(c | t) && i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 1,
          color: 2,
          count: 1,
          rings: 12,
          speed: 3,
          speed2: 0.8,
          angle: f(10016),
          angleStep: -0.016362462,
          transform: 514
        }), i.isDiff(a | t) && i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 1,
          color: 2,
          count: 1,
          rings: 12,
          speed: 3,
          speed2: 0.8,
          angle: f(10016),
          angleStep: -0.016362462,
          transform: 514
        }), i.isDiff(l | t) && i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 1,
          color: 2,
          count: 1,
          rings: 12,
          speed: 3,
          speed2: 0.8,
          angle: f(10016),
          angleStep: -0.016362462,
          transform: 514
        }), i.f0 += 0.19635, --i.ci0 > 0) {
          s = 8;
          break;
        }
        s = 9;
        break;
      }
      case 9: {
        i.ci3++, yield 60, s = 10;
        break;
      }
      case 10: {
        s = 1;
        break;
      }
      default:
        return;
    }
}
function* p(i) {
  let s = 0, e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
      case 0: {
        i.f2 = i.randAngle, i.ci0 = 64, i.setShotRecord(0, 8192, 0, 120, -1, -1, -1), s = 1;
        break;
      }
      case 1: {
        if (i.f0 = Math.cos(i.f2), i.f0 *= 64, i.f1 = Math.sin(i.f2), i.f1 *= 64, i.setShotOrigin(i.f0, i.f1), i.i0 = i.ci0 % 2, i.isDiff(r | t) && (i.f7 = 1), i.isDiff(c | t) && (i.f7 = 1), i.isDiff(a | t) && (i.f7 = 1.4), i.isDiff(l | t) && (i.f7 = 1.8), i.i0 != 0) {
          s = 3;
          break;
        }
        s = 2;
        break;
      }
      case 2: {
        i.setShotRecord(1, 64, 1, 60, 1, -1.570796, i.f7), s = 4;
        break;
      }
      case 3: {
        i.setShotRecord(1, 64, 1, 60, 1, 1.570796, i.f7), s = 4;
        break;
      }
      case 4: {
        if (i.setShotRecord(2, 16384, 0, 2, 4, -1, -1), i.f2 += 0.19635, i.f2 = n(i.f2), i.isDiff(r | t) && (i.f7 = 0.19635), i.isDiff(c | t) && (i.f7 = 0.098175), i.isDiff(a | t) && (i.f7 = 0.098175), i.isDiff(l | t) && (i.f7 = 0.098175), i.isDiff(r | t) && (i.i7 = 2), i.isDiff(c | t) && (i.i7 = 5), i.isDiff(a | t) && (i.i7 = 5), i.isDiff(l | t) && (i.i7 = 9), i.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 2,
          color: 2,
          count: f(10007),
          rings: 1,
          speed: 3,
          speed2: 0.8,
          angle: f(10018),
          angleStep: f(10023),
          transform: 25154
        }), i.hpRatio >= 96) {
          yield 1, s = 6;
          break;
        }
        s = 5;
        break;
      }
      case 5: {
        i.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 3,
          color: 6,
          count: 3,
          rings: 1,
          speed: 3,
          speed2: 0.8,
          angle: f(10018),
          angleStep: f(10023),
          transform: 514
        }), yield 1, s = 6;
        break;
      }
      case 6: {
        if (--i.ci0 > 0) {
          s = 1;
          break;
        }
        s = 7;
        break;
      }
      case 7:
        return;
      default:
        return;
    }
}
function* u(i) {
  let s = 0, e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
      case 0: {
        i.f2 = i.randAngle, i.ci0 = 64, i.setShotRecord(0, 8192, 0, 120, -1, -1, -1), s = 1;
        break;
      }
      case 1: {
        if (i.f0 = Math.cos(i.f2), i.f0 *= 64, i.f1 = Math.sin(i.f2), i.f1 *= 64, i.setShotOrigin(i.f0, i.f1), i.i0 = i.ci0 % 2, i.isDiff(r | t) && (i.f7 = 1), i.isDiff(c | t) && (i.f7 = 1), i.isDiff(a | t) && (i.f7 = 1.4), i.isDiff(l | t) && (i.f7 = 1.4), i.i0 != 0) {
          s = 3;
          break;
        }
        s = 2;
        break;
      }
      case 2: {
        i.setShotRecord(1, 64, 1, 60, 1, -1.570796, i.f7), s = 4;
        break;
      }
      case 3: {
        i.setShotRecord(1, 64, 1, 60, 1, 1.570796, i.f7), s = 4;
        break;
      }
      case 4: {
        if (i.setShotRecord(2, 16384, 0, 2, 8, -1, -1), i.f2 -= 0.19635, i.f2 = n(i.f2), i.isDiff(r | t) && (i.f7 = 0.19635), i.isDiff(c | t) && (i.f7 = 0.098175), i.isDiff(a | t) && (i.f7 = 0.098175), i.isDiff(l | t) && (i.f7 = 0.098175), i.isDiff(r | t) && (i.i7 = 2), i.isDiff(c | t) && (i.i7 = 5), i.isDiff(a | t) && (i.i7 = 5), i.isDiff(l | t) && (i.i7 = 7), i.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 2,
          color: 6,
          count: f(10007),
          rings: 1,
          speed: 3,
          speed2: 0.8,
          angle: f(10018),
          angleStep: f(10023),
          transform: 25154
        }), i.hpRatio >= 96) {
          yield 1, s = 6;
          break;
        }
        s = 5;
        break;
      }
      case 5: {
        i.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 3,
          color: 6,
          count: 3,
          rings: 1,
          speed: 4,
          speed2: 0.8,
          angle: f(10018),
          angleStep: f(10023),
          transform: 514
        }), yield 1, s = 6;
        break;
      }
      case 6: {
        if (--i.ci0 > 0) {
          s = 1;
          break;
        }
        s = 7;
        break;
      }
      case 7:
        return;
      default:
        return;
    }
}
function* s0(i) {
  let s = 0, e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
      case 0: {
        i.setAnm(54), i.setBounds(24, 24), i.setHitFlash(1), i.setHeadingSpeed(i.f0, i.f1), yield 1, s = 1;
        break;
      }
      case 1: {
        i.setScriptFlags(3), yield 5e3, s = 2;
        break;
      }
      case 2:
        return;
      default:
        return;
    }
}
function* e0(i) {
  let s = 0, e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
      case 0: {
        i.setBossPresent(-1), i.moveRelative(60, 1, 256, -32), i.clearMotionClamp(), yield 60, s = 1;
        break;
      }
      case 1:
        return;
      default:
        return;
    }
}
function* t0(i) {
  let s = 0, e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
      case 0: {
        i.setBossPresent(-1), i.moveRelative(60, 1, 256, -32), i.spawnItem(5), i.clearMotionClamp(), yield 60, s = 1;
        break;
      }
      case 1:
        return;
      default:
        return;
    }
}
function* f0(i) {
  let s = 0, e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
      case 0: {
        i.setScriptFlags(4), i.setMisc144(10, 5), i.setMisc160(320), i.setLives(11e3), i.moveRelative(60, 4, 192, 128), i.setSpellTimer(1560, 43), i.setMisc129(1), i.setDeathCallbackSub(44), i.eclSetLives(0), yield 180, s = 1;
        break;
      }
      case 1: {
        i.ci3 = 0, i.callSubAlloc(0, 46), i.callSubAlloc(1, 47), s = 2;
        break;
      }
      case 2: {
        i.ci0 = 16, i.f0 = i.timer - 1.570796, i.f1 = 1, s = 3;
        break;
      }
      case 3: {
        if (i.f0 = n(i.f0), i.linkChildRelative(42, 0, 0, 300, -2, 100), i.setShotOrigin(0, 0), i.f0 += 0.19635, --i.ci0 > 0) {
          s = 3;
          break;
        }
        s = 4;
        break;
      }
      case 4: {
        i.ci0 = 16, i.f1 = 1, i.f0 = i.timer - 1.570796, s = 5;
        break;
      }
      case 5: {
        if (i.f0 = n(i.f0), i.linkChildRelative(42, 0, 0, 300, -2, 100), i.setShotOrigin(0, 0), i.f0 += 0.19635, --i.ci0 > 0) {
          s = 5;
          break;
        }
        s = 6;
        break;
      }
      case 6: {
        i.ci3++, yield 170, s = 7;
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
function* a0(i) {
  let s = 0, e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
      case 0: {
        i.f2 = 0, i.ci0 = 64, i.setShotRecord(0, 8192, 0, 120, -1, -1, -1), s = 1;
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
        i.setShotRecord(1, 64, 1, 60, 1, -1.570796, 1.1), i.setShotRecord(2, 16384, 0, 2, 4, -1, -1), s = 4;
        break;
      }
      case 3: {
        i.setShotRecord(1, 64, 1, 60, 1, 1.570796, 1.1), i.setShotRecord(2, 16384, 0, 2, 3, -1, -1), s = 4;
        break;
      }
      case 4: {
        if (i.f2 += 0.1848, i.f2 = n(i.f2), i.isDiff(r | t) && (i.f7 = 0.19635), i.isDiff(c | t) && (i.f7 = 0.1309), i.isDiff(a | t) && (i.f7 = 0.1309), i.isDiff(l | t) && (i.f7 = 0.1309), i.isDiff(r | t) && (i.i7 = 2), i.isDiff(c | t) && (i.i7 = 5), i.isDiff(a | t) && (i.i7 = 5), i.isDiff(l | t) && (i.i7 = 7), i.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 2,
          color: 2,
          count: f(10007),
          rings: 1,
          speed: 3,
          speed2: 0.8,
          angle: f(10018),
          angleStep: f(10023),
          transform: 25154
        }), i.hpRatio >= 96) {
          s = 6;
          break;
        }
        s = 5;
        break;
      }
      case 5: {
        i.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 3,
          color: 6,
          count: 3,
          rings: 1,
          speed: 4,
          speed2: 0.8,
          angle: f(10018),
          angleStep: 0.09817477,
          transform: 514
        }), s = 6;
        break;
      }
      case 6: {
        i.ci0++, yield 4, s = 7;
        break;
      }
      case 7: {
        s = 1;
        break;
      }
      case 8:
        return;
      default:
        return;
    }
}
function* l0(i) {
  let s = 0, e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
      case 0: {
        i.f2 = 1.570796, i.ci0 = 64, i.setShotRecord(0, 8192, 0, 120, -1, -1, -1), s = 1;
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
        i.setShotRecord(1, 64, 1, 60, 1, -1.570796, 1.1), i.setShotRecord(2, 16384, 0, 2, 8, -1, -1), s = 4;
        break;
      }
      case 3: {
        i.setShotRecord(1, 64, 1, 60, 1, 1.570796, 1.1), i.setShotRecord(2, 16384, 0, 2, 7, -1, -1), s = 4;
        break;
      }
      case 4: {
        if (i.f2 -= 0.1848, i.f2 = n(i.f2), i.isDiff(r | t) && (i.f7 = 0.19635), i.isDiff(c | t) && (i.f7 = 0.1309), i.isDiff(a | t) && (i.f7 = 0.1309), i.isDiff(l | t) && (i.f7 = 0.1309), i.isDiff(r | t) && (i.i7 = 2), i.isDiff(c | t) && (i.i7 = 5), i.isDiff(a | t) && (i.i7 = 5), i.isDiff(l | t) && (i.i7 = 9), i.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 2,
          color: 6,
          count: f(10007),
          rings: 1,
          speed: 3,
          speed2: 0.8,
          angle: f(10018),
          angleStep: f(10023),
          transform: 25154
        }), i.hpRatio >= 96) {
          s = 6;
          break;
        }
        s = 5;
        break;
      }
      case 5: {
        i.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 3,
          color: 6,
          count: 3,
          rings: 1,
          speed: 4,
          speed2: 0.8,
          angle: f(10018),
          angleStep: 0.09817477,
          transform: 514
        }), s = 6;
        break;
      }
      case 6: {
        i.ci0++, yield 4, s = 7;
        break;
      }
      case 7: {
        s = 1;
        break;
      }
      case 8:
        return;
      default:
        return;
    }
}
function* c0(i) {
  let s = 0, e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
      case 0: {
        i.setAnmScripts6Alt(12), i.clearScriptFlags(3), i.clearScriptFlags(20), i.setBossPresent(0), i.setBounds(48, 32), i.setMisc160(60), i.eclSetLives(0), i.setSpellTimer(18e4, 62), i.setRelPos(-32, -32), i.moveRelative(60, 4, 192, 128), i.setMisc126(51, 1), yield 100, s = 1;
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
function* r0(i) {
  let s = 0, e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
      case 0: {
        i.setAnmScripts6Alt(6), i.clearScriptFlags(3), i.clearScriptFlags(20), i.setBossPresent(1), i.setBounds(48, 32), i.setMisc160(60), i.eclSetLives(0), i.setSpellTimer(18e4, 62), i.setRelPos(-32, -32), i.moveRelative(60, 4, 128, 128), i.setMisc126(50, 1), yield 100, s = 1;
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
function* n0(i) {
  let s = 0, e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
      case 0: {
        i.moveRelative(60, 0, 128, -32), yield 60, s = 1;
        break;
      }
      case 1:
        return;
      default:
        return;
    }
}
function* d0(i) {
  let s = 0, e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
      case 0: {
        i.setScriptFlags(4), i.setScriptFlags(3), i.setMisc160(120), i.setBossPresent(0), i.setMisc144(10, 5), i.setLives(18e3), i.eclSetLives(2), i.setMisc129(2), i.setDeathCallbackSub(53), i.setSpellTimer(2400, 62), i.setPhase(0, 2200, 62), i.setLifeBarSlice(0, 0, i.phase0, 16744576), i.spawnEffect(6, 1050253722, 1060320051, 1050253722, 1124073472), yield 10, s = 1;
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
        i.setMotionClamp(32, 48, 352, 128), i.i0 = 20, yield* d(i), s = 7;
        break;
      }
      case 7: {
        i.callSubAlloc(0, 52), yield 200, s = 8;
        break;
      }
      case 8: {
        i.moveBounce(60, 4, 1), yield 30, s = 9;
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
function* o0(i) {
  let s = 0, e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
      case 0: {
        i.setGaugeTimer(0, 0, 0, 0, 0, 0), i.isDiff(r | t) && (i.f0 = 6), i.isDiff(c | t) && (i.f0 = 8), i.isDiff(a | t) && (i.f0 = 8.1), i.isDiff(l | t) && (i.f0 = 8.2), i.isDiff(r | t) && (i.i0 = 48), i.isDiff(c | t) && (i.i0 = 64), i.isDiff(a | t) && (i.i0 = 70), i.isDiff(l | t) && (i.i0 = 80), s = 1;
        break;
      }
      case 1: {
        i.setShotRecord(0, 64, 0, 60, 1, 0.1122, 1), i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 16,
          color: 2,
          count: f(1e4),
          rings: 1,
          speed: f(10016),
          speed2: 0.5,
          angle: f(10082),
          angleStep: 0.2617994,
          transform: 578
        }), i.setShotRecord(0, 64, 0, 60, 1, -0.1122, 1), yield 26, s = 2;
        break;
      }
      case 2: {
        i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 16,
          color: 4,
          count: f(1e4),
          rings: 1,
          speed: f(10016),
          speed2: 0.5,
          angle: f(10082),
          angleStep: 0.2617994,
          transform: 578
        }), yield 18, s = 3;
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
function* p0(i) {
  let s = 0, e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
      case 0: {
        i.setScriptFlags(4), i.setScriptFlags(3), i.setMisc160(160), i.setTimeout(-1), i.endSpell(), i.setBossPresent(0), i.setMisc144(10, 5), i.setLives(18e3), i.eclSetLives(1), i.setMotionClamp(32, 48, 352, 128), i.setMisc129(2), i.setDeathCallbackSub(56), i.setSpellTimer(3e3, 66), i.setPhase(0, 2200, 66), i.setLifeBarSlice(0, 0, i.phase0, 16744576), i.moveRelative(60, 4, 192, 112), i.i0 = 20, yield* d(i), s = 1;
        break;
      }
      case 1: {
        i.f0 = 0.785398, i.f1 = 0.098175, i.linkChildAttached(55, 56, 56, 3e3, 1, 1e5), i.f0 = 2.356194, i.f1 = -0.098175, i.linkChildAttached(55, -56, 56, 3e3, 1, 1e5), i.f0 = 1.570796, i.f1 = -0.098175, i.linkChildAttached(55, 56, -56, 8e3, 1, 1e5), i.f0 = 1.570796, i.f1 = 0.098175, i.linkChildAttached(55, -56, -56, 8e3, 1, 1e5), yield 200, s = 2;
        break;
      }
      case 2: {
        i.moveBounce(60, 4, 1), yield 30, s = 3;
        break;
      }
      case 3: {
        s = 2;
        break;
      }
      default:
        return;
    }
}
function* u0(i) {
  let s = 0, e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
      case 0: {
        i.setGaugeTimer(0, 0, 0, 0, 0, 0), i.isDiff(r | t) && (i.i7 = 1), i.isDiff(c | t) && (i.i7 = 2), i.isDiff(a | t) && (i.i7 = 3), i.isDiff(l | t) && (i.i7 = 4), i.isDiff(r | t) && (i.f7 = 6), i.isDiff(c | t) && (i.f7 = 7), i.isDiff(a | t) && (i.f7 = 7.3), i.isDiff(l | t) && (i.f7 = 7.6), s = 1;
        break;
      }
      case 1: {
        i.setShotRecord(0, 64, 0, 55, 1, 0.174533, 1), i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 16,
          color: 2,
          count: f(10007),
          rings: 1,
          speed: f(10023),
          speed2: 0.5,
          angle: f(10016),
          angleStep: 0.2617994,
          transform: 578
        }), i.setShotRecord(0, 64, 0, 55, 1, -0.174533, 1), i.f0 += i.f1, i.f0 = n(i.f0), yield 2, s = 2;
        break;
      }
      case 2: {
        i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 16,
          color: 4,
          count: f(10007),
          rings: 1,
          speed: f(10023),
          speed2: 0.5,
          angle: f(10016),
          angleStep: 0.2617994,
          transform: 578
        }), i.f0 += i.f1, i.f0 = n(i.f0), yield 2, s = 3;
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
function* y0(i) {
  let s = 0, e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
      case 0: {
        i.setAnm(53), i.setHitFlash(1), i.effectWithYoukai(1), i.setMisc145(1), i.setBounds(24, 24), i.setMisc160(30), yield 60, s = 1;
        break;
      }
      case 1: {
        i.callSubAlloc(0, 54), yield 3e4, s = 2;
        break;
      }
      case 2:
        return;
      default:
        return;
    }
}
function* k0(i) {
  let s = 0, e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
      case 0: {
        i.setScriptFlags(4), i.setScriptFlags(3), i.setMisc160(160), i.setTimeout(-1), i.endSpell(), i.setBossPresent(0), i.setMisc144(10, 5), i.setLives(2e4), i.eclSetLives(0), i.setMotionClamp(32, 48, 352, 128), i.setMisc129(2), i.setDeathCallbackSub(56), i.setSpellTimer(3600, 63), i.setPhase(0, 6200, 63), i.setPhase(1, 3200, 74), i.setLifeBarSlice(0, 0, i.phase1, 16736352), i.setLifeBarSlice(1, i.phase1, i.phase0, 16752800), i.moveRelative(60, 4, 192, 112), i.i0 = 20, yield* d(i), s = 1;
        break;
      }
      case 1: {
        if (i.f0 = 0.785398, i.f1 = 0.098175, i.linkChildAttached(59, 24, 32, 3e3, 1, 1e5), i.f0 = 2.356194, i.f1 = -0.098175, i.linkChildAttached(59, 8, 32, 3e3, 1, 1e5), i.f0 = 2.356194, i.f1 = -0.098175, i.linkChildAttached(59, -8, 32, 3e3, 1, 1e5), i.f0 = 2.356194, i.f1 = -0.098175, i.linkChildAttached(59, -24, 32, 3e3, 1, 1e5), i.difficulty < 1) {
          yield 200, s = 3;
          break;
        }
        s = 2;
        break;
      }
      case 2: {
        i.f0 = 1.570796, i.f1 = -0.098175, i.linkChildAttached(59, 40, 32, 8e3, 1, 1e5), i.f0 = 1.570796, i.f1 = 0.098175, i.linkChildAttached(59, -40, 32, 8e3, 1, 1e5), yield 200, s = 3;
        break;
      }
      case 3: {
        i.moveBounce(60, 4, 1), yield 30, s = 4;
        break;
      }
      case 4: {
        s = 3;
        break;
      }
      default:
        return;
    }
}
function* b0(i) {
  let s = 0, e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
      case 0: {
        i.setGaugeTimer(0, 0, 0, 0, 0, 0), i.f1 = 0, i.isDiff(r | t) && (i.f7 = 6.8), i.isDiff(c | t) && (i.f7 = 8.5), i.isDiff(a | t) && (i.f7 = 8.5), i.isDiff(l | t) && (i.f7 = 8.5), i.isDiff(r | t) && (i.ci2 = 20), i.isDiff(c | t) && (i.ci2 = 10), i.isDiff(a | t) && (i.ci2 = 10), i.isDiff(l | t) && (i.ci2 = 10), s = 1;
        break;
      }
      case 1: {
        i.f1 += 0.392699, i.f1 = n(i.f1), i.f0 = Math.sin(i.f1), i.f0 *= 0.392699, i.setShotRecord(0, 64, 0, 60, 1, 0, 1), i.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 16,
          color: 2,
          count: 3,
          rings: 1,
          speed: f(10023),
          speed2: 0.5,
          angle: f(10016),
          angleStep: 0.3926991,
          transform: 578
        }), yield i.delay(i.ci2), s = 1;
        break;
      }
      case 2:
        return;
      default:
        return;
    }
}
function* h0(i) {
  let s = 0, e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
      case 0: {
        i.setGaugeTimer(0, 0, 0, 0, 0, 0), i.f1 = 0, s = 1;
        break;
      }
      case 1: {
        i.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 16,
          color: 1,
          count: 12,
          rings: 1,
          speed: 1.5,
          speed2: 0.5,
          angle: 3.1415927,
          angleStep: 0.3926991,
          transform: 578
        }), yield 80, s = 2;
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
function* g0(i) {
  let s = 0, e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
      case 0: {
        i.setAnm(53), i.setHitFlash(1), i.effectWithYoukai(1), i.setMisc145(1), i.setBounds(24, 24), i.setMisc160(30), i.setShotNoFireRadius(0), yield 60, s = 1;
        break;
      }
      case 1: {
        i.callSubAlloc(0, 57), i.callSubAlloc(1, 58), yield 3e4, s = 2;
        break;
      }
      case 2:
        return;
      default:
        return;
    }
}
function* S0(i) {
  let s = 0, e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
      case 0: {
        if (i.i0 = i.timeOrbReady, i.i0 >= 2) {
          s = 2;
          break;
        }
        s = 1;
        break;
      }
      case 1:
        return;
      case 2: {
        i.setAnmScripts6Alt(12), i.clearScriptFlags(8), i.eclSetLives(0), i.setBossPresent(0), i.setLives(1700), i.setLifeBarSlice(0, 0, i.maxHp, 16752800), i.complexSetup(1), i.setMotionClamp(32, 48, 352, 128), yield 70, s = 3;
        break;
      }
      case 3: {
        i.playSfx(5), i.spawnEffectAt(40, 1, -1), yield 4, s = 4;
        break;
      }
      case 4: {
        i.spawnEffectAt(40, 1, -12080), yield 4, s = 5;
        break;
      }
      case 5: {
        i.spawnEffectAt(40, 1, -32640), yield 4, s = 6;
        break;
      }
      case 6: {
        i.spawnEffectAt(40, 1, -49088), yield 50, s = 7;
        break;
      }
      case 7: {
        i.playSfx(15), i.setScriptFlags(8), i.setMisc173(1), i.setMisc129(3), i.setDeathCallbackSub(88), yield* k(i);
        return;
      }
      default:
        return;
    }
}
function* d(i) {
  let s = 0, e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
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
function* m0(i) {
  let s = 0, e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
      case 0: {
        i.setMisc129(2), i.setDeathCallbackSub(53), i.setShotRepeat(0), i.enemyFunc95(), i.setShotSound(-1, -1), i.clearScriptFlags(4), i.setShotOrigin(0, 0), i.setSpellTimer(3e3, 53), i.resetSpellTimerSub(), i.setSpellTimerElapsed(0), i.ci3 = 0, i.moveRelative(90, 4, 192, 128), i.isDiff(r | t) && i.startSpell("波符「赤眼催眠(マインドシェイカー)」", "鈴仙・Ｕ・イナバ", 100, 0, 26e6), i.isDiff(c | t) && i.startSpell("波符「赤眼催眠(マインドシェイカー)」", "鈴仙・Ｕ・イナバ", 101, 0, 26e6), i.isDiff(a | t) && i.startSpell("幻波「赤眼催眠(マインドブローイング)」", "鈴仙・Ｕ・イナバ", 102, 0, 26e6), i.isDiff(l | t) && i.startSpell("幻波「赤眼催眠(マインドブローイング)」", "鈴仙・Ｕ・イナバ", 103, 0, 26e6), yield 90, s = 1;
        break;
      }
      case 1: {
        i.setScriptFlags(4), i.setMisc160(420), s = 2;
        break;
      }
      case 2: {
        i.f0 = i.randAngle, i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 16,
          color: 2,
          count: 48,
          rings: 1,
          speed: 1,
          speed2: 1,
          angle: f(10016),
          angleStep: 0.09817477,
          transform: 1065488
        }), i.f0 += 0.06545, i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 16,
          color: 2,
          count: 48,
          rings: 1,
          speed: 1,
          speed2: 1,
          angle: f(10016),
          angleStep: 0.09817477,
          transform: 2114064
        }), yield 50, s = 3;
        break;
      }
      case 3: {
        i.nop(), i.ci0 = 50, i.cf0 = 192, i.cf1 = 244, i.callSubAlloc(0, 85), i.i0 = 1048576, i.f0 = 2.356194, i.isDiff(r | t) && (i.f1 = 0.3), i.isDiff(c | t) && (i.f1 = 0.8), i.isDiff(a | t) && (i.f1 = 0.9), i.isDiff(l | t) && (i.f1 = 1), i.i1 = 0, i.setMisc136(12, 0), i.i0 = 2097152, i.f0 = 0.785398, i.setMisc136(12, 0), yield 100, s = 4;
        break;
      }
      case 4: {
        i.i0 = 1048576, i.i1 = 1, i.setMisc136(12, 0), i.i0 = 2097152, i.setMisc136(12, 0), i.isDiff(r | t) && (i.i7 = 24), i.isDiff(c | t) && (i.i7 = 32), i.isDiff(a | t) && (i.i7 = 48), i.isDiff(l | t) && (i.i7 = 64), yield 20, s = 5;
        break;
      }
      case 5: {
        i.f0 = i.randAngle, i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 16,
          color: 2,
          count: f(10007),
          rings: 2,
          speed: 1.4,
          speed2: 0.8,
          angle: f(10016),
          angleStep: 0.09817477,
          transform: 1065488
        }), i.f0 += 0.06545, i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 16,
          color: 2,
          count: f(10007),
          rings: 2,
          speed: 1.4,
          speed2: 0.8,
          angle: f(10016),
          angleStep: 0.09817477,
          transform: 2114064
        }), yield 20, s = 6;
        break;
      }
      case 6: {
        i.f0 = i.randAngle, i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 16,
          color: 6,
          count: f(10007),
          rings: 2,
          speed: 1.2,
          speed2: 0.6,
          angle: f(10016),
          angleStep: 0.09817477,
          transform: 1065488
        }), i.f0 += 0.06545, i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 16,
          color: 6,
          count: f(10007),
          rings: 2,
          speed: 1.2,
          speed2: 0.6,
          angle: f(10016),
          angleStep: 0.09817477,
          transform: 2114064
        }), yield 20, s = 7;
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
function* w0(i) {
  let s = 0, e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
      case 0: {
        i.setMisc129(2), i.setDeathCallbackSub(74), i.setShotRepeat(0), i.enemyFunc95(), i.setShotSound(-1, -1), i.clearScriptFlags(4), i.setShotOrigin(0, 0), i.setSpellTimer(3e3, 87), i.resetSpellTimerSub(), i.setSpellTimerElapsed(0), i.ci3 = 0, i.moveRelative(90, 4, 192, 128), i.isDiff(r | t) && i.startSpell("懶符「生神停止(アイドリングウェーブ」", "鈴仙・Ｕ・イナバ", 108, 0, 26e6), i.isDiff(c | t) && i.startSpell("懶符「生神停止(アイドリングウェーブ)」", "鈴仙・Ｕ・イナバ", 109, 0, 26e6), i.isDiff(a | t) && i.startSpell("懶惰「生神停止(マインドストッパー)」", "鈴仙・Ｕ・イナバ", 110, 0, 26e6), i.isDiff(l | t) && i.startSpell("懶惰「生神停止(マインドストッパー)」", "鈴仙・Ｕ・イナバ", 111, 0, 26e6), yield 90, s = 1;
        break;
      }
      case 1: {
        i.setScriptFlags(4), i.setMisc160(360), i.ci3 = 5, i.f4 = 0.049087, i.f7 = 1.570796, i.f6 = i.f7 / 2.5, i.i7 = 8, i.isDiff(c | a | l | t) && i.linkChildStandard(64, 16, 368, 1200, -2, 100), i.linkChildStandard(64, 16, 432, 1200, -2, 100), i.isDiff(c | a | l | t) && i.linkChildStandard(64, 80, 432, 1200, -2, 100), i.i7 = 6, i.isDiff(c | a | l | t) && i.linkChildStandard(64, 368, 368, 1200, -2, 100), i.linkChildStandard(64, 368, 432, 1200, -2, 100), i.isDiff(c | a | l | t) && i.linkChildStandard(64, 304, 432, 1200, -2, 100), i.i7 = 10, i.isDiff(c | a | l | t) && i.linkChildStandard(64, 16, 80, 1200, -2, 100), i.linkChildStandard(64, 16, 16, 1200, -2, 100), i.isDiff(c | a | l | t) && i.linkChildStandard(64, 80, 16, 1200, -2, 100), i.i7 = 4, i.isDiff(c | a | l | t) && i.linkChildStandard(64, 368, 80, 1200, -2, 100), i.linkChildStandard(64, 368, 16, 1200, -2, 100), i.isDiff(c | a | l | t) && i.linkChildStandard(64, 304, 16, 1200, -2, 100), yield 260, s = 2;
        break;
      }
      case 2: {
        i.nop(), s = 3;
        break;
      }
      case 3: {
        i.ci0 = 50, i.cf0 = 192, i.cf1 = 244, i.callSubAlloc(0, 85), i.i0 = 1048576, i.f0 = 2.356194, i.f1 = 0, i.i1 = 0, i.setMisc136(12, 0), yield 100, s = 4;
        break;
      }
      case 4: {
        i.i0 = 1048576, i.i1 = 1, i.setMisc136(12, 0), i.moveBounce(60, 4, 1), i.ci3++, yield 260, s = 5;
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
function* A0(i) {
  let s = 0, e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
      case 0: {
        i.setAnm(53), i.setHitFlash(1), i.setMisc145(1), i.setBounds(24, 24), i.setMisc160(30), i.clearScriptFlags(8192), i.cf0 = i.posX, i.cf1 = i.posY, yield 60, s = 1;
        break;
      }
      case 1: {
        i.callSubAlloc(0, 65), yield 4200, s = 2;
        break;
      }
      case 2:
        return;
      default:
        return;
    }
}
function* M0(i) {
  let s = 0, e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
      case 0: {
        i.ci0 = 1, i.isDiff(r | t) && (i.i6 = 56), i.isDiff(c | t) && (i.i6 = 56), i.isDiff(a | t) && (i.i6 = 48), i.isDiff(l | t) && (i.i6 = 64), s = 1;
        break;
      }
      case 1: {
        i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 16,
          color: f(10007),
          count: f(10006),
          rings: 1,
          speed: 1,
          speed2: 0.5,
          angle: f(10082),
          angleStep: 1.0471976,
          transform: 1049090
        }), yield 260, s = 2;
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
        i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 16,
          color: f(10007),
          count: f(10006),
          rings: 1,
          speed: 1.2,
          speed2: 0.5,
          angle: f(10082),
          angleStep: 1.0471976,
          transform: 1049090
        }), yield 60, s = 4;
        break;
      }
      case 4: {
        i.ci0 = 8, s = 5;
        break;
      }
      case 5: {
        i.isDiff(a | l | t) && i.spawnShot({
          mode: "aimedFan",
          // aim 0 of 96..104
          type: 16,
          color: 3,
          count: 1,
          rings: 1,
          speed: 2.2,
          speed2: 0.5,
          angle: 0,
          angleStep: 1.0471976,
          transform: 1049090
        }), yield 10, s = 6;
        break;
      }
      case 6: {
        if (--i.ci0 > 0) {
          s = 5;
          break;
        }
        s = 7;
        break;
      }
      case 7: {
        s = 3;
        break;
      }
      default:
        return;
    }
}
function* D0(i) {
  let s = 0, e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
      case 0: {
        i.setMisc129(2), i.setDeathCallbackSub(56), i.setShotRepeat(0), i.enemyFunc95(), i.setShotSound(-1, -1), i.clearScriptFlags(4), i.setShotOrigin(0, 0), i.setSpellTimer(4620, 56), i.resetSpellTimerSub(), i.setSpellTimerElapsed(0), i.ci3 = 0, i.moveRelative(90, 4, 192, 128), i.isDiff(r | t) && i.startSpell("狂符「幻視調律(ビジョナリチューニング)」", "鈴仙・Ｕ・イナバ", 104, 0, 26e6), i.isDiff(c | t) && i.startSpell("狂符「幻視調律(ビジョナリチューニング)」", "鈴仙・Ｕ・イナバ", 105, 0, 26e6), i.isDiff(a | t) && i.startSpell("狂視「狂視調律(イリュージョンシーカー)」", "鈴仙・Ｕ・イナバ", 106, 0, 26e6), i.isDiff(l | t) && i.startSpell("狂視「狂視調律(イリュージョンシーカー)」", "鈴仙・Ｕ・イナバ", 107, 0, 26e6), yield 90, s = 1;
        break;
      }
      case 1: {
        i.setScriptFlags(4), i.setMisc160(600), i.callSubAlloc(0, 67), yield 250, s = 2;
        break;
      }
      case 2: {
        i.nop(), s = 3;
        break;
      }
      case 3: {
        i.callSubAlloc(0, -1), i.ci0 = 50, i.cf0 = 192, i.cf1 = 244, i.callSubAlloc(1, 85), i.i0 = 1048576, i.f0 = 0, i.f1 = 0.6, i.i1 = 0, i.setMisc136(12, 0), i.i0 = 2097152, i.f0 = 3.141593, i.setMisc136(12, 0), yield 100, s = 4;
        break;
      }
      case 4: {
        i.i0 = 1048576, i.callSubAlloc(0, 67), i.i1 = 1, i.setMisc136(12, 0), i.i0 = 2097152, i.setMisc136(12, 0), i.moveBounce(60, 0, 1), yield 100, s = 5;
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
function* F0(i) {
  let s = 0, e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
      case 0: {
        i.isDiff(r | t) && (i.ci2 = 50), i.isDiff(c | t) && (i.ci2 = 25), i.isDiff(a | t) && (i.ci2 = 25), i.isDiff(l | t) && (i.ci2 = 25), s = 1;
        break;
      }
      case 1: {
        i.i7 = 6, i.ci1 = 0, i.f0 = 3.141593, i.cf0 = i.randF32S * 16, i.cf0 += 380, i.cf1 = i.randF32S * 32, i.cf1 += 224, i.linkChildStandard(68, i.cf0, i.cf1, 200, -2, 100), yield i.delay(i.ci2), i.ci1 = 0, i.f0 = 0, i.i7 = 2, i.cf0 = i.randF32S * 16, i.cf0 += 4, i.cf1 = i.randF32S * 32, i.cf1 += 224, i.linkChildStandard(71, i.cf0, i.cf1, 200, -2, 100), yield i.delay(i.ci2), s = 1;
        break;
      }
      default:
        return;
    }
}
function* I0(i) {
  let s = 0, e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
      case 0: {
        i.setAnm(53), i.setHitFlash(1), i.setMisc145(1), i.setBounds(24, 24), i.setMisc160(30), i.setShotNoFireRadius(0), i.cf0 = i.posX, i.cf1 = i.posY, i.callSubAlloc(0, 69), i.isDiff(a | l | t) && i.callSubAlloc(1, 73), i.setHeadingSpeed(i.f0, 1), yield 4200, s = 1;
        break;
      }
      case 1:
        return;
      default:
        return;
    }
}
function* z0(i) {
  let s = 0, e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
      case 0: {
        i.setShotRecord(0, 4194304, 1, 900, -1, -1, -1), s = 1;
        break;
      }
      case 1: {
        i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 16,
          color: f(10007),
          count: 2,
          rings: 1,
          speed: 1.3,
          speed2: 0.5,
          angle: 1.5707964,
          angleStep: 0,
          transform: 5247490
        }), yield 8, s = 2;
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
function* C0(i) {
  let s = 0, e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
      case 0: {
        i.setShotRecord(0, 4194304, 1, 900, -1, -1, -1), s = 1;
        break;
      }
      case 1: {
        i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 16,
          color: f(10007),
          count: 2,
          rings: 1,
          speed: 1,
          speed2: 0.5,
          angle: 1.5707964,
          angleStep: 0,
          transform: 5247490
        }), yield 30, s = 2;
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
  let s = 0, e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
      case 0: {
        i.setAnm(53), i.setHitFlash(1), i.setMisc145(1), i.setBounds(24, 24), i.setMisc160(30), i.clearScriptFlags(8192), i.setShotNoFireRadius(0), i.cf0 = i.posX, i.cf1 = i.posY, i.callSubAlloc(0, 72), i.setHeadingSpeed(i.f0, 1), i.isDiff(a | l | t) && i.callSubAlloc(1, 73), yield 4200, s = 1;
        break;
      }
      case 1:
        return;
      default:
        return;
    }
}
function* R0(i) {
  let s = 0, e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
      case 0: {
        i.setShotRecord(0, 4194304, 1, 900, -1, -1, -1), s = 1;
        break;
      }
      case 1: {
        i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 16,
          color: f(10007),
          count: 2,
          rings: 1,
          speed: 1.3,
          speed2: 0.5,
          angle: 1.5707964,
          angleStep: 0,
          transform: 6296066
        }), yield 8, s = 2;
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
  let s = 0, e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
      case 0: {
        i.setShotRecord(0, 4194304, 1, 900, -1, -1, -1), s = 1;
        break;
      }
      case 1: {
        i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 16,
          color: f(10007),
          count: 2,
          rings: 1,
          speed: 1,
          speed2: 0.5,
          angle: 1.5707964,
          angleStep: 0,
          transform: 6296066
        }), yield 30, s = 2;
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
function* E0(i) {
  let s = 0, e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
      case 0: {
        i.setSpellTimer(99999, 87), i.setMisc160(120), i.endSpell(), i.spawnItemRandom(10), i.spawnItemBatch(5), i.setScriptFlags(3), i.setBossPresent(0), yield 80, s = 1;
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
  let s = 0, e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
      case 0: {
        i.setMisc129(3), i.setDeathCallbackSub(87), i.setShotRepeat(0), i.enemyFunc95(), i.setShotSound(-1, -1), i.clearScriptFlags(4), i.setShotOrigin(0, 0), i.setSpellTimer(3e3, 53), i.resetSpellTimerSub(), i.setSpellTimerElapsed(0), i.ci3 = 0, i.moveRelative(90, 4, 192, 128), i.isDiff(r | t) && i.startSpell("散符「真実の月(インビジブルフルムーン)」", "鈴仙・Ｕ・イナバ", 112, 0, 26e6), i.isDiff(c | t) && i.startSpell("散符「真実の月(インビジブルフルムーン)」", "鈴仙・Ｕ・イナバ", 113, 0, 26e6), i.isDiff(a | t) && i.startSpell("散符「真実の月(インビジブルフルムーン)」", "鈴仙・Ｕ・イナバ", 114, 0, 26e6), i.isDiff(l | t) && i.startSpell("散符「真実の月(インビジブルフルムーン)」", "鈴仙・Ｕ・イナバ", 115, 0, 26e6), yield 90, s = 1;
        break;
      }
      case 1: {
        i.setScriptFlags(4), i.setMisc160(600), s = 2;
        break;
      }
      case 2: {
        i.f0 = i.randAngle, i.isDiff(r | t) && (i.i7 = 80), i.isDiff(c | t) && (i.i7 = 128), i.isDiff(a | t) && (i.i7 = 130), i.isDiff(l | t) && (i.i7 = 144), i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 16,
          color: 2,
          count: f(10007),
          rings: 1,
          speed: 1,
          speed2: 1,
          angle: f(10016),
          angleStep: 0.09817477,
          transform: 1049088
        }), yield 50, s = 3;
        break;
      }
      case 3: {
        i.nop(), i.ci0 = 50, i.cf0 = 192, i.cf1 = 244, i.callSubAlloc(0, 85), i.i0 = 1048576, i.f0 = 2.356194, i.f1 = 0.3, i.i1 = 0, i.setMisc136(14, 0), i.i0 = 2097152, i.f0 = 0.785398, i.setMisc136(14, 0), yield 80, s = 4;
        break;
      }
      case 4: {
        i.i0 = 1048576, i.setMisc136(14, 0), i.i0 = 2097152, i.setMisc136(14, 0), yield 20, s = 5;
        break;
      }
      case 5: {
        i.i0 = 1048576, i.i1 = 1, i.setMisc136(14, 0), i.i0 = 2097152, i.setMisc136(14, 0), yield 20, s = 6;
        break;
      }
      case 6: {
        i.f0 = i.randAngle, i.isDiff(r | t) && (i.i7 = 32), i.isDiff(c | t) && (i.i7 = 44), i.isDiff(a | t) && (i.i7 = 48), i.isDiff(l | t) && (i.i7 = 56), i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 16,
          color: 2,
          count: f(10007),
          rings: 2,
          speed: 1.4,
          speed2: 0.8,
          angle: f(10016),
          angleStep: 0.09817477,
          transform: 1049088
        }), i.f0 += 0.06545, i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 16,
          color: 2,
          count: f(10007),
          rings: 2,
          speed: 1.4,
          speed2: 0.8,
          angle: f(10016),
          angleStep: 0.09817477,
          transform: 2097664
        }), yield 20, s = 7;
        break;
      }
      case 7: {
        i.f0 = i.randAngle, i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 16,
          color: 6,
          count: f(10007),
          rings: 2,
          speed: 1.2,
          speed2: 0.6,
          angle: f(10016),
          angleStep: 0.09817477,
          transform: 1049088
        }), i.f0 += 0.06545, i.spawnShot({
          mode: "evenRing",
          // aim 3 of 96..104
          type: 16,
          color: 6,
          count: f(10007),
          rings: 2,
          speed: 1.2,
          speed2: 0.6,
          angle: f(10016),
          angleStep: 0.09817477,
          transform: 2097664
        }), i.ci0 = 16, i.f0 = i.randAngle, i.f1 = 2, s = 8;
        break;
      }
      case 8: {
        if (i.isDiff(c | a | l | t) && i.linkChildRelative(77, 0, 0, 200, -2, 100), i.f0 += 0.392699, i.f0 = n(i.f0), --i.ci0 > 0) {
          s = 8;
          break;
        }
        s = 9;
        break;
      }
      case 9: {
        s = 2;
        break;
      }
      default:
        return;
    }
}
function* B0(i) {
  let s = 0, e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
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
          angle: f(10069),
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
function* x0(i) {
  let s = 0, e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
      case 0: {
        i.setAnm(53), i.setHitFlash(1), i.setMisc145(1), i.setBounds(24, 24), i.setMisc160(30), i.callSubAlloc(0, 76), i.setHeadingSpeed(i.f0, i.f1), yield 3e4, s = 1;
        break;
      }
      case 1:
        return;
      default:
        return;
    }
}
function* k(i) {
  let s = 0, e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
      case 0: {
        i.setShotRepeat(0), i.enemyFunc95(), i.setShotSound(-1, -1), i.clearScriptFlags(4), i.setShotOrigin(0, 0), i.setSpellTimer(2640, 88), i.resetSpellTimerSub(), i.setSpellTimerElapsed(0), i.ci3 = 0, i.moveRelative(90, 4, 192, 128), i.isDiff(c | t) && i.startSpell("月眼「月兎遠隔催眠術(テレメスメリズム)」", "鈴仙・Ｕ・イナバ", 116, 0, 3e7), i.isDiff(a | t) && i.startSpell("月眼「月兎遠隔催眠術(テレメスメリズム)」", "鈴仙・Ｕ・イナバ", 117, 0, 3e7), i.isDiff(l | t) && i.startSpell("月眼「月兎遠隔催眠術(テレメスメリズム)」", "鈴仙・Ｕ・イナバ", 118, 0, 3e7), yield 90, s = 1;
        break;
      }
      case 1: {
        i.setScriptFlags(4), i.setMisc160(120), i.callSubAlloc(0, 79), yield 150, s = 2;
        break;
      }
      case 2: {
        i.nop(), s = 3;
        break;
      }
      case 3: {
        i.callSubAlloc(0, -1), i.ci0 = 50, i.cf0 = 192, i.cf1 = 244, i.callSubAlloc(1, 85), i.i0 = 1048576, i.f0 = 1.570796, i.f1 = 0.6, i.i1 = 0, i.setMisc136(12, 0), i.i0 = 2097152, i.f0 = -1.570796, i.setMisc136(12, 0), yield 100, s = 4;
        break;
      }
      case 4: {
        i.i0 = 1048576, i.callSubAlloc(0, 80), i.i1 = 1, i.setMisc136(12, 0), i.i0 = 2097152, i.setMisc136(12, 0), i.moveBounce(60, 0, 1), yield 100, s = 5;
        break;
      }
      case 5: {
        i.callSubAlloc(0, -1), i.ci0 = 50, i.cf0 = 192, i.cf1 = 244, i.callSubAlloc(1, 85), i.i0 = 1048576, i.f0 = 1.570796, i.f1 = 0.6, i.i1 = 0, i.setMisc136(12, 0), i.i0 = 2097152, i.f0 = -1.570796, i.setMisc136(12, 0), yield 100, s = 6;
        break;
      }
      case 6: {
        i.i0 = 1048576, i.callSubAlloc(0, 79), i.i1 = 1, i.setMisc136(12, 0), i.i0 = 2097152, i.setMisc136(12, 0), i.moveBounce(60, 0, 1), yield 100, s = 7;
        break;
      }
      case 7: {
        s = 3;
        break;
      }
      default:
        return;
    }
}
function* H0(i) {
  let s = 0, e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
      case 0: {
        i.i7 = 6, i.ci1 = 0, i.f0 = 1.570796, i.f1 = i.randF32 * 1, i.f1 += 2, i.cf0 = i.randF32S * 8, i.cf1 = 0, i.linkChildStandard(81, i.cf0, i.cf1, 300, -2, 100), yield 10, s = 1;
        break;
      }
      case 1: {
        i.ci1 = 0, i.f0 = -1.570796, i.f1 = i.randF32 * 1, i.f1 += 2, i.i7 = 2, i.cf0 = i.randF32S * 16, i.cf0 += 384, i.cf1 = 448, i.linkChildStandard(83, i.cf0, i.cf1, 300, -2, 100), yield 10, s = 2;
        break;
      }
      case 2: {
        s = 0;
        break;
      }
      default:
        return;
    }
}
function* T0(i) {
  let s = 0, e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
      case 0: {
        i.i7 = 6, i.ci1 = 0, i.f0 = 1.570796, i.f1 = i.randF32 * 1, i.f1 += 2, i.cf0 = i.randF32S * 8, i.cf0 += 384, i.cf1 = 0, i.linkChildStandard(81, i.cf0, i.cf1, 300, -2, 100), yield 10, s = 1;
        break;
      }
      case 1: {
        i.ci1 = 0, i.f0 = -1.570796, i.f1 = i.randF32 * 1, i.f1 += 2, i.i7 = 2, i.cf0 = i.randF32S * 8, i.cf1 = 448, i.linkChildStandard(83, i.cf0, i.cf1, 300, -2, 100), yield 10, s = 2;
        break;
      }
      case 2: {
        s = 0;
        break;
      }
      default:
        return;
    }
}
function* P0(i) {
  let s = 0, e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
      case 0: {
        i.setAnm(53), i.setHitFlash(1), i.setMisc145(1), i.setBounds(24, 24), i.setMisc160(30), i.setShotNoFireRadius(0), i.cf0 = i.posX, i.cf1 = i.posY, i.callSubAlloc(0, 82), i.setHeadingSpeed(i.f0, i.f1), yield 4200, s = 1;
        break;
      }
      case 1:
        return;
      default:
        return;
    }
}
function* L0(i) {
  let s = 0, e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
      case 0: {
        i.setShotRecord(0, 8388608, 1, 900, -1, -1, -1), i.isDiff(r | t) && (i.f0 = 1.6), i.isDiff(c | t) && (i.f0 = 1.6), i.isDiff(a | t) && (i.f0 = 1.9), i.isDiff(l | t) && (i.f0 = 2.3), i.isDiff(r | t) && (i.f1 = 0.8), i.isDiff(c | t) && (i.f1 = 0.8), i.isDiff(a | t) && (i.f1 = 0.8), i.isDiff(l | t) && (i.f1 = 0.8), i.isDiff(r | t) && (i.i0 = 24), i.isDiff(c | t) && (i.i0 = 20), i.isDiff(a | t) && (i.i0 = 18), i.isDiff(l | t) && (i.i0 = 16), s = 1;
        break;
      }
      case 1: {
        i.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 16,
          color: 6,
          count: 1,
          rings: 1,
          speed: f(10016),
          speed2: 0.5,
          angle: 0,
          angleStep: 0,
          transform: 9437698
        }), i.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 16,
          color: 6,
          count: 1,
          rings: 1,
          speed: f(10017),
          speed2: 0.5,
          angle: 0,
          angleStep: 0,
          transform: 10486274
        }), yield i.delay(i.i0), s = 1;
        break;
      }
      default:
        return;
    }
}
function* X0(i) {
  let s = 0, e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
      case 0: {
        i.setAnm(53), i.setHitFlash(1), i.setMisc145(1), i.setBounds(24, 24), i.setMisc160(30), i.setShotNoFireRadius(0), i.cf0 = i.posX, i.cf1 = i.posY, i.callSubAlloc(0, 84), i.setHeadingSpeed(i.f0, i.f1), yield 4200, s = 1;
        break;
      }
      case 1:
        return;
      default:
        return;
    }
}
function* O0(i) {
  let s = 0, e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
      case 0: {
        i.setShotRecord(0, 8388608, 1, 900, -1, -1, -1), i.isDiff(r | t) && (i.f0 = 1.6), i.isDiff(c | t) && (i.f0 = 1.6), i.isDiff(a | t) && (i.f0 = 1.9), i.isDiff(l | t) && (i.f0 = 2.3), i.isDiff(r | t) && (i.f1 = 0.8), i.isDiff(c | t) && (i.f1 = 0.8), i.isDiff(a | t) && (i.f1 = 0.8), i.isDiff(l | t) && (i.f1 = 0.8), i.isDiff(r | t) && (i.i0 = 16), i.isDiff(c | t) && (i.i0 = 20), i.isDiff(a | t) && (i.i0 = 18), i.isDiff(l | t) && (i.i0 = 16), s = 1;
        break;
      }
      case 1: {
        i.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 16,
          color: 2,
          count: 1,
          rings: 1,
          speed: f(10016),
          speed2: 0.5,
          angle: 3.1415927,
          angleStep: 0,
          transform: 10486274
        }), i.spawnShot({
          mode: "fixedFan",
          // aim 1 of 96..104
          type: 16,
          color: 2,
          count: 1,
          rings: 1,
          speed: f(10017),
          speed2: 0.5,
          angle: 3.1415927,
          angleStep: 0,
          transform: 9437698
        }), yield i.delay(i.i0), s = 1;
        break;
      }
      default:
        return;
    }
}
function* N0(i) {
  let s = 0, e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
      case 0: {
        i.ci0 -= 25, i.playSfx(42), i.setTimeout(13), s = 1;
        break;
      }
      case 1: {
        i.spawnEnemy(86, 1176352768, 1176353792, 0, 10, -2, 10), yield 2, s = 2;
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
function* Y0(i) {
  let s = 0, e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
      case 0: {
        i.clearScriptFlags(3), i.setAnmAlt(5), yield 60, s = 1;
        break;
      }
      case 1:
        return;
      default:
        return;
    }
}
function* G0(i) {
  let s = 0, e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
      case 0: {
        i.complexBossInit(1), i.maxHp = 1, i.setMisc129(0), i.setDeathCallbackSub(-1), i.clearScriptFlags(3), i.f0 = i.randAngle, i.movePolar(60, 4, i.f0, 0.15), i.f0 = 0, i.ci0 = 6, yield 1, s = 1;
        break;
      }
      case 1: {
        i.f0 += 0.19635, i.f0 = n(i.f0), i.spawnEffectAngle(26, 1, -1, i.f0, 0, 0), yield 1, s = 2;
        break;
      }
      case 2: {
        i.f0 += 0.19635, i.f0 = n(i.f0), i.spawnEffectAngle(26, 1, -1, i.f0, 0, 0), yield 1, s = 3;
        break;
      }
      case 3: {
        i.f0 += 0.19635, i.f0 = n(i.f0), i.spawnEffectAngle(26, 1, -32640, i.f0, 0, 0), yield 1, s = 4;
        break;
      }
      case 4: {
        i.f0 += 0.19635, i.f0 = n(i.f0), i.spawnEffectAngle(26, 1, -32640, i.f0, 0, 0), yield 1, s = 5;
        break;
      }
      case 5: {
        i.f0 += 0.19635, i.f0 = n(i.f0), i.spawnEffectAngle(26, 1, -8323200, i.f0, 0, 0), yield 1, s = 6;
        break;
      }
      case 6: {
        i.f0 += 0.19635, i.f0 = n(i.f0), i.spawnEffectAngle(26, 1, -8323200, i.f0, 0, 0), yield 1, s = 7;
        break;
      }
      case 7: {
        i.f0 += 0.19635, i.f0 = n(i.f0), i.spawnEffectAngle(26, 1, -8355585, i.f0, 0, 0), yield 1, s = 8;
        break;
      }
      case 8: {
        i.f0 += 0.19635, i.f0 = n(i.f0), i.spawnEffectAngle(26, 1, -8355585, i.f0, 0, 0), yield 1, s = 9;
        break;
      }
      case 9: {
        i.f0 += 0.19635, i.f0 = n(i.f0), i.spawnEffectAngle(26, 1, -128, i.f0, 0, 0), yield 1, s = 10;
        break;
      }
      case 10: {
        if (i.f0 += 0.19635, i.f0 = n(i.f0), i.spawnEffectAngle(26, 1, -128, i.f0, 0, 0), i.playSfx(7), --i.ci0 > 0) {
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
function* j0(i) {
  let s = 0, e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
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
        if (i.f0 += 0.19635, i.f0 = n(i.f0), i.spawnEffectAngle(26, 1, -1, i.f0, 0, 0), i.f0 += 0.19635, i.f0 = n(i.f0), i.spawnEffectAngle(26, 1, -1, i.f0, 0, 0), i.f0 += 0.19635, i.f0 = n(i.f0), i.spawnEffectAngle(26, 1, -32640, i.f0, 0, 0), i.f0 += 0.19635, i.f0 = n(i.f0), i.spawnEffectAngle(26, 1, -32640, i.f0, 0, 0), i.f0 += 0.19635, i.f0 = n(i.f0), i.spawnEffectAngle(26, 1, -8323200, i.f0, 0, 0), i.f0 += 0.19635, i.f0 = n(i.f0), i.spawnEffectAngle(26, 1, -8323200, i.f0, 0, 0), i.f0 += 0.19635, i.f0 = n(i.f0), i.spawnEffectAngle(26, 1, -8355585, i.f0, 0, 0), i.f0 += 0.19635, i.f0 = n(i.f0), i.spawnEffectAngle(26, 1, -8355585, i.f0, 0, 0), i.f0 += 0.19635, i.f0 = n(i.f0), i.spawnEffectAngle(26, 1, -128, i.f0, 0, 0), i.f0 += 0.19635, i.f0 = n(i.f0), i.spawnEffectAngle(26, 1, -128, i.f0, 0, 0), --i.ci0 > 0) {
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
function* W0(i) {
  let s = 0, e = 0;
  for (; s >= 0; )
    switch (++e > 2e3 && (e = 0, yield 1), s) {
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
        if (i.f0 += 0.19635, i.f0 = n(i.f0), i.spawnEffectAngle(26, 1, -1, i.f0, 0, 0), i.f0 += 0.19635, i.f0 = n(i.f0), i.spawnEffectAngle(26, 1, -1, i.f0, 0, 0), i.f0 += 0.19635, i.f0 = n(i.f0), i.spawnEffectAngle(26, 1, -32640, i.f0, 0, 0), i.f0 += 0.19635, i.f0 = n(i.f0), i.spawnEffectAngle(26, 1, -32640, i.f0, 0, 0), i.f0 += 0.19635, i.f0 = n(i.f0), i.spawnEffectAngle(26, 1, -8323200, i.f0, 0, 0), i.f0 += 0.19635, i.f0 = n(i.f0), i.spawnEffectAngle(26, 1, -8323200, i.f0, 0, 0), i.f0 += 0.19635, i.f0 = n(i.f0), i.spawnEffectAngle(26, 1, -8355585, i.f0, 0, 0), i.f0 += 0.19635, i.f0 = n(i.f0), i.spawnEffectAngle(26, 1, -8355585, i.f0, 0, 0), i.f0 += 0.19635, i.f0 = n(i.f0), i.spawnEffectAngle(26, 1, -128, i.f0, 0, 0), i.f0 += 0.19635, i.f0 = n(i.f0), i.spawnEffectAngle(26, 1, -128, i.f0, 0, 0), --i.ci0 > 0) {
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
const U0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  sub_0: b,
  sub_1: h,
  sub_10: I,
  sub_11: z,
  sub_12: C,
  sub_13: v,
  sub_14: R,
  sub_15: _,
  sub_16: E,
  sub_17: B,
  sub_18: x,
  sub_19: H,
  sub_2: g,
  sub_20: T,
  sub_21: P,
  sub_22: L,
  sub_23: X,
  sub_24: O,
  sub_25: N,
  sub_26: Y,
  sub_27: G,
  sub_28: j,
  sub_29: W,
  sub_3: S,
  sub_30: U,
  sub_31: q,
  sub_32: J,
  sub_33: K,
  sub_34: Q,
  sub_35: V,
  sub_36: Z,
  sub_37: $,
  sub_38: i0,
  sub_39: o,
  sub_4: m,
  sub_40: p,
  sub_41: u,
  sub_42: s0,
  sub_43: e0,
  sub_44: t0,
  sub_45: f0,
  sub_46: a0,
  sub_47: l0,
  sub_48: c0,
  sub_49: r0,
  sub_5: w,
  sub_50: n0,
  sub_51: d0,
  sub_52: o0,
  sub_53: p0,
  sub_54: u0,
  sub_55: y0,
  sub_56: k0,
  sub_57: b0,
  sub_58: h0,
  sub_59: g0,
  sub_6: A,
  sub_60: S0,
  sub_61: d,
  sub_62: m0,
  sub_63: w0,
  sub_64: A0,
  sub_65: M0,
  sub_66: D0,
  sub_67: F0,
  sub_68: I0,
  sub_69: z0,
  sub_7: M,
  sub_70: C0,
  sub_71: v0,
  sub_72: R0,
  sub_73: _0,
  sub_74: E0,
  sub_75: y,
  sub_76: B0,
  sub_77: x0,
  sub_78: k,
  sub_79: H0,
  sub_8: D,
  sub_80: T0,
  sub_81: P0,
  sub_82: L0,
  sub_83: X0,
  sub_84: O0,
  sub_85: N0,
  sub_86: Y0,
  sub_87: G0,
  sub_88: j0,
  sub_89: W0,
  sub_9: F
}, Symbol.toStringTag, { value: "Module" })), q0 = [
  {
    index: 0,
    offset: 42612,
    instructions: [
      {
        offset: 0,
        time: 260,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([2, 1128267776, -1048576e3, 700, -2, 1e3])
      },
      {
        offset: 0,
        time: 1100,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, -1048576e3, 1124073472, 50, 1, 1e3])
      },
      {
        offset: 0,
        time: 1110,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, -1048576e3, 1125122048, 50, 0, 1e3])
      },
      {
        offset: 0,
        time: 1120,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, -1048576e3, 1126170624, 50, 1, 1e3])
      },
      {
        offset: 0,
        time: 1130,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, -1048576e3, 1127219200, 50, 0, 1e3])
      },
      {
        offset: 0,
        time: 1140,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, -1048576e3, 1128267776, 50, 1, 1e3])
      },
      {
        offset: 0,
        time: 1150,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, -1048576e3, 1129316352, 50, 0, 1e3])
      },
      {
        offset: 0,
        time: 1160,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, -1048576e3, 1130364928, 50, 1, 1e3])
      },
      {
        offset: 0,
        time: 1170,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, -1048576e3, 1131413504, 50, 0, 1e3])
      },
      {
        offset: 0,
        time: 1180,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, -1048576e3, 1132462080, 50, 1, 1e3])
      },
      {
        offset: 0,
        time: 1190,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, -1048576e3, 1132986368, 50, 0, 1e3])
      },
      {
        offset: 0,
        time: 1200,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, -1048576e3, 1133510656, 50, 1, 1e3])
      },
      {
        offset: 0,
        time: 1300,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1137180672, 1124073472, 50, 1, 1e3])
      },
      {
        offset: 0,
        time: 1310,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1137180672, 1125122048, 50, 0, 1e3])
      },
      {
        offset: 0,
        time: 1320,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1137180672, 1126170624, 50, 1, 1e3])
      },
      {
        offset: 0,
        time: 1330,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1137180672, 1127219200, 50, 0, 1e3])
      },
      {
        offset: 0,
        time: 1340,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1137180672, 1128267776, 50, 1, 1e3])
      },
      {
        offset: 0,
        time: 1350,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1137180672, 1129316352, 50, 0, 1e3])
      },
      {
        offset: 0,
        time: 1360,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1137180672, 1130364928, 50, 1, 1e3])
      },
      {
        offset: 0,
        time: 1370,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1137180672, 1131413504, 50, 0, 1e3])
      },
      {
        offset: 0,
        time: 1380,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1137180672, 1132462080, 50, 1, 1e3])
      },
      {
        offset: 0,
        time: 1390,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1137180672, 1132986368, 50, 0, 1e3])
      },
      {
        offset: 0,
        time: 1400,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([0, 1137180672, 1133510656, 50, 1, 1e3])
      },
      {
        offset: 0,
        time: 1520,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([29, 1111490560, 1126170624, 1107296256, 200, 1, 1e3])
      },
      {
        offset: 0,
        time: 1530,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([29, 1111490560, 1126170624, 1115684864, 200, 1, 1e3])
      },
      {
        offset: 0,
        time: 1540,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([29, 1111490560, 1126170624, 1119879168, 200, 0, 1e3])
      },
      {
        offset: 0,
        time: 1550,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([29, 1111490560, 1126170624, 1124073472, 200, 0, 1e3])
      },
      {
        offset: 0,
        time: 1560,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([29, 1111490560, 1126170624, 1126170624, 200, 1, 1e3])
      },
      {
        offset: 0,
        time: 1570,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([29, 1111490560, 1126170624, 1128267776, 200, 1, 1e3])
      },
      {
        offset: 0,
        time: 1580,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([29, 1111490560, 1126170624, 1130364928, 200, 0, 1e3])
      },
      {
        offset: 0,
        time: 1590,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([29, 1111490560, 1126170624, 1132462080, 200, 0, 1e3])
      },
      {
        offset: 0,
        time: 1590,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([34, 1128267776, -1048576e3, 500, 1, 1e3])
      },
      {
        offset: 0,
        time: 1790,
        opcode: 4,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([29, 1135083520, 1126170624, 1107296256, 200, 1, 1e3])
      },
      {
        offset: 0,
        time: 1800,
        opcode: 4,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([29, 1135083520, 1126170624, 1115684864, 200, 1, 1e3])
      },
      {
        offset: 0,
        time: 1810,
        opcode: 4,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([29, 1135083520, 1126170624, 1119879168, 200, 0, 1e3])
      },
      {
        offset: 0,
        time: 1820,
        opcode: 4,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([29, 1135083520, 1126170624, 1124073472, 200, 0, 1e3])
      },
      {
        offset: 0,
        time: 1830,
        opcode: 4,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([29, 1135083520, 1126170624, 1126170624, 200, 1, 1e3])
      },
      {
        offset: 0,
        time: 1840,
        opcode: 4,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([29, 1135083520, 1126170624, 1128267776, 200, 1, 1e3])
      },
      {
        offset: 0,
        time: 1850,
        opcode: 4,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([29, 1135083520, 1126170624, 1130364928, 200, 0, 1e3])
      },
      {
        offset: 0,
        time: 1860,
        opcode: 4,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([29, 1135083520, 1126170624, 1132462080, 200, 0, 1e3])
      },
      {
        offset: 0,
        time: 1860,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([36, 1128267776, -1048576e3, 500, 1, 1e3])
      },
      {
        offset: 0,
        time: 2040,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([29, 1111490560, 1126170624, 1107296256, 200, 1, 1e3])
      },
      {
        offset: 0,
        time: 2050,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([29, 1111490560, 1126170624, 1115684864, 200, 1, 1e3])
      },
      {
        offset: 0,
        time: 2060,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([29, 1111490560, 1126170624, 1119879168, 200, 0, 1e3])
      },
      {
        offset: 0,
        time: 2070,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([29, 1111490560, 1126170624, 1124073472, 200, 0, 1e3])
      },
      {
        offset: 0,
        time: 2080,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([29, 1111490560, 1126170624, 1126170624, 200, 1, 1e3])
      },
      {
        offset: 0,
        time: 2080,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([34, 1128267776, -1048576e3, 500, 1, 1e3])
      },
      {
        offset: 0,
        time: 2270,
        opcode: 4,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([29, 1135083520, 1126170624, 1107296256, 200, 1, 1e3])
      },
      {
        offset: 0,
        time: 2280,
        opcode: 4,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([29, 1135083520, 1126170624, 1115684864, 200, 1, 1e3])
      },
      {
        offset: 0,
        time: 2290,
        opcode: 4,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([29, 1135083520, 1126170624, 1119879168, 200, 0, 1e3])
      },
      {
        offset: 0,
        time: 2300,
        opcode: 4,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([29, 1135083520, 1126170624, 1124073472, 200, 0, 1e3])
      },
      {
        offset: 0,
        time: 2310,
        opcode: 4,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([29, 1135083520, 1126170624, 1126170624, 200, 1, 1e3])
      },
      {
        offset: 0,
        time: 2310,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([36, 1128267776, -1048576e3, 500, 1, 1e3])
      },
      {
        offset: 0,
        time: 2500,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([29, 1111490560, 1128267776, 1107296256, 200, 1, 1e3])
      },
      {
        offset: 0,
        time: 2510,
        opcode: 4,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([29, 1135083520, 1128267776, 1107296256, 200, 1, 1e3])
      },
      {
        offset: 0,
        time: 2520,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([29, 1111490560, 1128267776, 1119879168, 200, 0, 1e3])
      },
      {
        offset: 0,
        time: 2530,
        opcode: 4,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([29, 1135083520, 1128267776, 1119879168, 200, 0, 1e3])
      },
      {
        offset: 0,
        time: 2540,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([29, 1111490560, 1128267776, 1124073472, 200, 1, 1e3])
      },
      {
        offset: 0,
        time: 2550,
        opcode: 4,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([29, 1135083520, 1128267776, 1124073472, 200, 1, 1e3])
      },
      {
        offset: 0,
        time: 2560,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([29, 1111490560, 1128267776, 1126170624, 200, 0, 1e3])
      },
      {
        offset: 0,
        time: 2570,
        opcode: 4,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([29, 1135083520, 1128267776, 1126170624, 200, 0, 1e3])
      },
      {
        offset: 0,
        time: 2580,
        opcode: 4,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([29, 1135083520, 1128267776, 1128267776, 200, 1, 1e3])
      },
      {
        offset: 0,
        time: 2590,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([29, 1111490560, 1128267776, 1128267776, 200, 0, 1e3])
      },
      {
        offset: 0,
        time: 2600,
        opcode: 4,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([29, 1135083520, 1128267776, 1130364928, 200, 0, 1e3])
      },
      {
        offset: 0,
        time: 2610,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([29, 1111490560, 1128267776, 1130364928, 200, 1, 1e3])
      },
      {
        offset: 0,
        time: 2620,
        opcode: 4,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([29, 1135083520, 1128267776, 1132462080, 200, 1, 1e3])
      },
      {
        offset: 0,
        time: 2630,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([29, 1111490560, 1128267776, 1132462080, 200, 0, 1e3])
      },
      {
        offset: 0,
        time: 2640,
        opcode: 4,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([29, 1135083520, 1128267776, 1133510656, 200, 0, 1e3])
      },
      {
        offset: 0,
        time: 2650,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([29, 1111490560, 1128267776, 1133510656, 200, 0, 1e3])
      },
      {
        offset: 0,
        time: 2790,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([33, 1128267776, -1048576e3, 500, 1, 1e3])
      },
      {
        offset: 0,
        time: 3050,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([9, 1128267776, -1048576e3, 1400, -2, 1e3])
      },
      {
        offset: 0,
        time: 3290,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([9, 1115684864, -1048576e3, 1400, -2, 1e3])
      },
      {
        offset: 0,
        time: 3530,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([9, 1134559232, -1048576e3, 1400, -2, 1e3])
      },
      {
        offset: 0,
        time: 3770,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([10, 1128267776, -1048576e3, 1400, -2, 1e3])
      },
      {
        offset: 0,
        time: 3970,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([10, 1134559232, -1048576e3, 1400, -2, 1e3])
      },
      {
        offset: 0,
        time: 4170,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([10, 1115684864, -1048576e3, 1400, -2, 1e3])
      },
      {
        offset: 0,
        time: 4470,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([33, 1128267776, -1048576e3, 500, 1, 1e3])
      },
      {
        offset: 0,
        time: 4530,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([38, 1128267776, -1048576e3, 15e3, 1, 1e3])
      },
      { offset: 0, time: 4531, opcode: 10, size: 12, difficultyMask: 255, args: new Int32Array([0]) },
      {
        offset: 0,
        time: 4711,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([31, 1111490560, 1126170624, 1107296256, 200, 1, 1e3])
      },
      {
        offset: 0,
        time: 4721,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([31, 1111490560, 1126170624, 1115684864, 200, 1, 1e3])
      },
      {
        offset: 0,
        time: 4731,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([31, 1111490560, 1126170624, 1119879168, 200, 0, 1e3])
      },
      {
        offset: 0,
        time: 4741,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([31, 1111490560, 1126170624, 1124073472, 200, 0, 1e3])
      },
      {
        offset: 0,
        time: 4751,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([31, 1111490560, 1126170624, 1126170624, 200, 1, 1e3])
      },
      {
        offset: 0,
        time: 4761,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([31, 1111490560, 1126170624, 1128267776, 200, 1, 1e3])
      },
      {
        offset: 0,
        time: 4771,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([31, 1111490560, 1126170624, 1130364928, 200, 0, 1e3])
      },
      {
        offset: 0,
        time: 4781,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([31, 1111490560, 1126170624, 1132462080, 200, 0, 1e3])
      },
      {
        offset: 0,
        time: 4781,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([34, 1128267776, -1048576e3, 500, 1, 1e3])
      },
      {
        offset: 0,
        time: 4981,
        opcode: 4,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([31, 1135083520, 1126170624, 1107296256, 200, 1, 1e3])
      },
      {
        offset: 0,
        time: 4991,
        opcode: 4,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([31, 1135083520, 1126170624, 1115684864, 200, 1, 1e3])
      },
      {
        offset: 0,
        time: 5001,
        opcode: 4,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([31, 1135083520, 1126170624, 1119879168, 200, 0, 1e3])
      },
      {
        offset: 0,
        time: 5011,
        opcode: 4,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([31, 1135083520, 1126170624, 1124073472, 200, 0, 1e3])
      },
      {
        offset: 0,
        time: 5021,
        opcode: 4,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([31, 1135083520, 1126170624, 1126170624, 200, 1, 1e3])
      },
      {
        offset: 0,
        time: 5031,
        opcode: 4,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([31, 1135083520, 1126170624, 1128267776, 200, 1, 1e3])
      },
      {
        offset: 0,
        time: 5041,
        opcode: 4,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([31, 1135083520, 1126170624, 1130364928, 200, 0, 1e3])
      },
      {
        offset: 0,
        time: 5051,
        opcode: 4,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([31, 1135083520, 1126170624, 1132462080, 200, 0, 1e3])
      },
      {
        offset: 0,
        time: 5051,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([34, 1124073472, -1048576e3, 500, 1, 1e3])
      },
      {
        offset: 0,
        time: 5051,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([34, 1132462080, -1048576e3, 500, 1, 1e3])
      },
      {
        offset: 0,
        time: 5251,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([31, 1111490560, 1126170624, 1107296256, 200, 1, 1e3])
      },
      {
        offset: 0,
        time: 5261,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([31, 1111490560, 1126170624, 1115684864, 200, 1, 1e3])
      },
      {
        offset: 0,
        time: 5271,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([31, 1111490560, 1126170624, 1119879168, 200, 0, 1e3])
      },
      {
        offset: 0,
        time: 5281,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([31, 1111490560, 1126170624, 1124073472, 200, 0, 1e3])
      },
      {
        offset: 0,
        time: 5291,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([31, 1111490560, 1126170624, 1126170624, 200, 1, 1e3])
      },
      {
        offset: 0,
        time: 5301,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([31, 1111490560, 1126170624, 1128267776, 200, 1, 1e3])
      },
      {
        offset: 0,
        time: 5311,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([31, 1111490560, 1126170624, 1130364928, 200, 0, 1e3])
      },
      {
        offset: 0,
        time: 5321,
        opcode: 2,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([31, 1111490560, 1126170624, 1132462080, 200, 0, 1e3])
      },
      {
        offset: 0,
        time: 5321,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([34, 1124073472, -1048576e3, 500, 1, 1e3])
      },
      {
        offset: 0,
        time: 5321,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([34, 1132462080, -1048576e3, 500, 1, 1e3])
      },
      {
        offset: 0,
        time: 5521,
        opcode: 4,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([31, 1135083520, 1126170624, 1107296256, 200, 1, 1e3])
      },
      {
        offset: 0,
        time: 5531,
        opcode: 4,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([31, 1135083520, 1126170624, 1115684864, 200, 1, 1e3])
      },
      {
        offset: 0,
        time: 5541,
        opcode: 4,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([31, 1135083520, 1126170624, 1119879168, 200, 0, 1e3])
      },
      {
        offset: 0,
        time: 5551,
        opcode: 4,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([31, 1135083520, 1126170624, 1124073472, 200, 0, 1e3])
      },
      {
        offset: 0,
        time: 5561,
        opcode: 4,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([31, 1135083520, 1126170624, 1126170624, 200, 1, 1e3])
      },
      {
        offset: 0,
        time: 5571,
        opcode: 4,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([31, 1135083520, 1126170624, 1128267776, 200, 1, 1e3])
      },
      {
        offset: 0,
        time: 5581,
        opcode: 4,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([31, 1135083520, 1126170624, 1130364928, 200, 0, 1e3])
      },
      {
        offset: 0,
        time: 5591,
        opcode: 4,
        size: 36,
        difficultyMask: 255,
        args: new Int32Array([31, 1135083520, 1126170624, 1132462080, 200, 0, 1e3])
      },
      {
        offset: 0,
        time: 5591,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([34, 1119879168, -1048576e3, 500, 1, 1e3])
      },
      {
        offset: 0,
        time: 5591,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([34, 1133510656, -1048576e3, 500, 1, 1e3])
      },
      {
        offset: 0,
        time: 6031,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([15, 1128267776, -1048576e3, 3e3, -2, 1e3])
      },
      {
        offset: 0,
        time: 6131,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([34, 1124073472, -1048576e3, 500, 1, 1e3])
      },
      {
        offset: 0,
        time: 6131,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([36, 1132462080, -1048576e3, 500, 1, 1e3])
      },
      {
        offset: 0,
        time: 6531,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([10, 1134559232, -1048576e3, 1400, -2, 1e3])
      },
      {
        offset: 0,
        time: 6531,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([36, 1119879168, -1048576e3, 500, 1, 1e3])
      },
      {
        offset: 0,
        time: 6531,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([34, 1133510656, -1048576e3, 500, 1, 1e3])
      },
      {
        offset: 0,
        time: 6631,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([10, 1115684864, -1048576e3, 1400, -2, 1e3])
      },
      {
        offset: 0,
        time: 6931,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([22, 1130364928, -1048576e3, 1500, 3, 1e3])
      },
      {
        offset: 0,
        time: 6931,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([22, 1126170624, -1048576e3, 1500, 3, 1e3])
      },
      {
        offset: 0,
        time: 6931,
        opcode: 1,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([34, 1128267776, -1048576e3, 500, 1, 1e3])
      },
      { offset: 0, time: 7481, opcode: 6, size: 12, difficultyMask: 255, args: new Int32Array([0]) },
      { offset: 0, time: 7481, opcode: 7, size: 8, difficultyMask: 255, args: new Int32Array([]) },
      {
        offset: 0,
        time: 7481,
        opcode: 0,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([48, 1128267776, -1048576e3, 6e4, -2, 1e5])
      },
      { offset: 0, time: 7482, opcode: 7, size: 8, difficultyMask: 255, args: new Int32Array([]) },
      {
        offset: 0,
        time: 7482,
        opcode: 15,
        size: 32,
        difficultyMask: 255,
        args: new Int32Array([49, 1128267776, -1048576e3, 6e4, -2, 1e5])
      },
      { offset: 0, time: 7483, opcode: 7, size: 8, difficultyMask: 255, args: new Int32Array([]) },
      { offset: 0, time: 7483, opcode: 8, size: 16, difficultyMask: 255, args: new Int32Array([1, 1]) },
      { offset: 0, time: 7484, opcode: 7, size: 8, difficultyMask: 255, args: new Int32Array([]) },
      { offset: 0, time: 7484, opcode: 8, size: 16, difficultyMask: 255, args: new Int32Array([0, 1]) },
      { offset: 0, time: 7484, opcode: 10, size: 12, difficultyMask: 255, args: new Int32Array([0]) },
      {
        offset: 0,
        time: 7484,
        opcode: 0,
        size: 32,
        difficultyMask: 254,
        args: new Int32Array([60, 1128267776, 1126170624, 6e4, -2, 1e5])
      },
      { offset: 0, time: 7485, opcode: 10, size: 12, difficultyMask: 254, args: new Int32Array([0]) },
      { offset: 0, time: 7485, opcode: 6, size: 12, difficultyMask: 255, args: new Int32Array([10]) },
      { offset: 0, time: 7485, opcode: 7, size: 8, difficultyMask: 255, args: new Int32Array([]) }
    ]
  }
], J0 = {
  version: 2048,
  subCount: 90,
  subs: [],
  timelines: q0
}, Q0 = {
  route: "stage5",
  source: "ecldata5.ecl",
  subCount: 90,
  timelineCount: 1,
  cards: [
    {
      sub: 62,
      id: 100,
      name: "波符「赤眼催眠(マインドシェイカー)」",
      owner: "鈴仙・Ｕ・イナバ",
      face: 0,
      bonus: 26e6,
      lastSpell: !1
    },
    {
      sub: 62,
      id: 101,
      name: "波符「赤眼催眠(マインドシェイカー)」",
      owner: "鈴仙・Ｕ・イナバ",
      face: 0,
      bonus: 26e6,
      lastSpell: !1
    },
    {
      sub: 62,
      id: 102,
      name: "幻波「赤眼催眠(マインドブローイング)」",
      owner: "鈴仙・Ｕ・イナバ",
      face: 0,
      bonus: 26e6,
      lastSpell: !1
    },
    {
      sub: 62,
      id: 103,
      name: "幻波「赤眼催眠(マインドブローイング)」",
      owner: "鈴仙・Ｕ・イナバ",
      face: 0,
      bonus: 26e6,
      lastSpell: !1
    },
    {
      sub: 63,
      id: 108,
      name: "懶符「生神停止(アイドリングウェーブ」",
      owner: "鈴仙・Ｕ・イナバ",
      face: 0,
      bonus: 26e6,
      lastSpell: !1
    },
    {
      sub: 63,
      id: 109,
      name: "懶符「生神停止(アイドリングウェーブ)」",
      owner: "鈴仙・Ｕ・イナバ",
      face: 0,
      bonus: 26e6,
      lastSpell: !1
    },
    {
      sub: 63,
      id: 110,
      name: "懶惰「生神停止(マインドストッパー)」",
      owner: "鈴仙・Ｕ・イナバ",
      face: 0,
      bonus: 26e6,
      lastSpell: !1
    },
    {
      sub: 63,
      id: 111,
      name: "懶惰「生神停止(マインドストッパー)」",
      owner: "鈴仙・Ｕ・イナバ",
      face: 0,
      bonus: 26e6,
      lastSpell: !1
    },
    {
      sub: 66,
      id: 104,
      name: "狂符「幻視調律(ビジョナリチューニング)」",
      owner: "鈴仙・Ｕ・イナバ",
      face: 0,
      bonus: 26e6,
      lastSpell: !1
    },
    {
      sub: 66,
      id: 105,
      name: "狂符「幻視調律(ビジョナリチューニング)」",
      owner: "鈴仙・Ｕ・イナバ",
      face: 0,
      bonus: 26e6,
      lastSpell: !1
    },
    {
      sub: 66,
      id: 106,
      name: "狂視「狂視調律(イリュージョンシーカー)」",
      owner: "鈴仙・Ｕ・イナバ",
      face: 0,
      bonus: 26e6,
      lastSpell: !1
    },
    {
      sub: 66,
      id: 107,
      name: "狂視「狂視調律(イリュージョンシーカー)」",
      owner: "鈴仙・Ｕ・イナバ",
      face: 0,
      bonus: 26e6,
      lastSpell: !1
    },
    {
      sub: 75,
      id: 112,
      name: "散符「真実の月(インビジブルフルムーン)」",
      owner: "鈴仙・Ｕ・イナバ",
      face: 0,
      bonus: 26e6,
      lastSpell: !1
    },
    {
      sub: 75,
      id: 113,
      name: "散符「真実の月(インビジブルフルムーン)」",
      owner: "鈴仙・Ｕ・イナバ",
      face: 0,
      bonus: 26e6,
      lastSpell: !1
    },
    {
      sub: 75,
      id: 114,
      name: "散符「真実の月(インビジブルフルムーン)」",
      owner: "鈴仙・Ｕ・イナバ",
      face: 0,
      bonus: 26e6,
      lastSpell: !1
    },
    {
      sub: 75,
      id: 115,
      name: "散符「真実の月(インビジブルフルムーン)」",
      owner: "鈴仙・Ｕ・イナバ",
      face: 0,
      bonus: 26e6,
      lastSpell: !1
    },
    {
      sub: 78,
      id: 116,
      name: "月眼「月兎遠隔催眠術(テレメスメリズム)」",
      owner: "鈴仙・Ｕ・イナバ",
      face: 0,
      bonus: 3e7,
      lastSpell: !0
    },
    {
      sub: 78,
      id: 117,
      name: "月眼「月兎遠隔催眠術(テレメスメリズム)」",
      owner: "鈴仙・Ｕ・イナバ",
      face: 0,
      bonus: 3e7,
      lastSpell: !0
    },
    {
      sub: 78,
      id: 118,
      name: "月眼「月兎遠隔催眠術(テレメスメリズム)」",
      owner: "鈴仙・Ｕ・イナバ",
      face: 0,
      bonus: 3e7,
      lastSpell: !0
    }
  ],
  scripts: U0,
  waves: J0
};
export {
  Q0 as STAGE5_SCRIPT
};
