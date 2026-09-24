var ke = Object.defineProperty;
var De = (o, t, e) => t in o ? ke(o, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[t] = e;
var a = (o, t, e) => De(o, typeof t != "symbol" ? t + "" : t, e);
import { Assets as Re, Container as Y, Sprite as ft, Shader as Ne, compileHighShaderGlProgram as Le, localUniformBitGl as Ge, textureBitGl as He, roundPixelsBitGl as Oe, compileHighShaderGpuProgram as Ve, localUniformBit as Ue, textureBit as ze, roundPixelsBit as Ke, UniformGroup as Ye, MeshGeometry as Xe, Buffer as We, BufferUsage as Xt, Mesh as qe, Application as Qe, Graphics as A, Text as F, TextStyle as O, RendererType as Wt } from "pixi.js";
function gt(o = 0, t = 0) {
  return { x: o, y: t };
}
function Oi(o, t) {
  return { x: o.x + t.x, y: o.y + t.y };
}
function Vi(o, t) {
  return { x: o.x * t, y: o.y * t };
}
function Se(o, t) {
  const e = t.x - o.x, s = t.y - o.y;
  return Math.hypot(e, s);
}
function $e(o, t) {
  return Math.atan2(t.y - o.y, t.x - o.x);
}
class Te {
  constructor() {
    a(this, "events", /* @__PURE__ */ new Map());
  }
  on(t, e) {
    return this.events.has(t) || this.events.set(t, /* @__PURE__ */ new Set()), this.events.get(t).add(e), () => this.off(t, e);
  }
  /** Subscribe for the next emission only; auto-unsubscribes before invoking the listener. */
  once(t, e) {
    const s = this.on(t, (i) => {
      s(), e(i);
    });
    return s;
  }
  off(t, e) {
    const s = this.events.get(t);
    s && (s.delete(e), s.size === 0 && this.events.delete(t));
  }
  emit(t, ...e) {
    const s = this.events.get(t);
    if (s)
      for (const i of s)
        i(e[0]);
  }
  removeAllListeners() {
    this.events.clear();
  }
}
const wt = class wt extends Te {
  constructor(e = {}, s = {}, i = {}, r = "default") {
    super();
    a(this, "id");
    a(this, "position");
    a(this, "velocity");
    a(this, "hitbox");
    a(this, "isAlive");
    a(this, "tag");
    a(this, "_transform");
    this.id = `entity_${wt.nextId++}`, this.position = gt(e.x ?? 0, e.y ?? 0), this.velocity = gt(s.x ?? 0, s.y ?? 0), this._transform = { position: this.position, velocity: this.velocity, rotation: 0 }, this.hitbox = {
      radius: i.radius ?? 0,
      offset: i.offset ?? { x: 0, y: 0 }
    }, this.isAlive = !0, this.tag = r;
  }
  /** Shared Transform view; `rotation` reads/writes through to keep both sides live. */
  get transform() {
    return this._transform;
  }
  get rotation() {
    return this._transform.rotation;
  }
  set rotation(e) {
    this._transform.rotation = e;
  }
  update(e) {
    this.isAlive && (this.position.x += this.velocity.x * e, this.position.y += this.velocity.y * e);
  }
  destroy() {
    this.isAlive && (this.isAlive = !1, this.emit("destroy", this), this.removeAllListeners());
  }
  distanceTo(e) {
    return Se(this.position, e.position);
  }
  angleTo(e) {
    return $e(this.position, e.position);
  }
  getHitboxCenter() {
    const e = this.hitbox.offset || { x: 0, y: 0 };
    return {
      x: this.position.x + e.x,
      y: this.position.y + e.y
    };
  }
};
a(wt, "nextId", 1);
let X = wt;
const st = { up: 16, down: 32, left: 64, right: 128 }, P = {
  idle: 0,
  up: 1,
  down: 2,
  left: 3,
  right: 4,
  upLeft: 5,
  upRight: 6,
  downLeft: 7,
  downRight: 8
};
function je(o) {
  const { up: t, down: e, left: s, right: i } = st;
  return (o & (t | s)) === (t | s) ? P.upLeft : (o & (e | s)) === (e | s) ? P.downLeft : (o & (t | i)) === (t | i) ? P.upRight : (o & (e | i)) === (e | i) ? P.downRight : o & e ? P.down : o & t ? P.up : o & s ? P.left : o & i ? P.right : P.idle;
}
function Je(o, t, e) {
  switch (o) {
    case P.up:
      return [0, -t];
    case P.down:
      return [0, t];
    case P.left:
      return [-t, 0];
    case P.right:
      return [t, 0];
    case P.upLeft:
      return [-e, -e];
    case P.upRight:
      return [e, -e];
    case P.downLeft:
      return [-e, e];
    case P.downRight:
      return [e, e];
    default:
      return [0, 0];
  }
}
const Ze = 512, j = [];
function Me(o = {}) {
  const t = j.pop();
  return t ? (t.reset(o), t) : new ve(o);
}
function ts(o, t = Ze) {
  !(o instanceof ve) || o.isAlive || o.isPooled || t > 0 && j.length >= t || (o.isPooled = !0, j.push(o));
}
function nt() {
  return j.length;
}
function Ui() {
  return j.splice(0, j.length).map((o) => (o.isPooled = !1, o));
}
class ve extends X {
  constructor(e = {}) {
    super(e.position, e.velocity, { radius: e.radius ?? 4 }, e.tag ?? "enemy-bullet");
    a(this, "color");
    a(this, "sprite");
    a(this, "damage");
    a(this, "grazed");
    a(this, "angularVelocity");
    a(this, "acceleration");
    a(this, "angularAcceleration");
    a(this, "angularJerk");
    a(this, "jerk");
    /** Lower speed clamp (px/frame); 0 disables the floor. */
    a(this, "speedMin");
    /** Upper speed clamp (px/frame); Infinity disables the ceiling. */
    a(this, "speedMax");
    /** Lower angular velocity clamp (rad/frame); -Infinity disables it. */
    a(this, "angularVelocityMin");
    /** Upper angular velocity clamp (rad/frame); Infinity disables it. */
    a(this, "angularVelocityMax");
    /** Lower radial acceleration clamp (px/frame²); -Infinity disables it. */
    a(this, "accelerationMin");
    /** Upper radial acceleration clamp (px/frame²); Infinity disables it. */
    a(this, "accelerationMax");
    /** Lower angular acceleration clamp (rad/frame²); -Infinity disables it. */
    a(this, "angularAccelerationMin");
    /** Upper angular acceleration clamp (rad/frame²); Infinity disables it. */
    a(this, "angularAccelerationMax");
    /** Lower heading bound (rad); -Infinity disables it. */
    a(this, "headingMin");
    /** Upper heading bound (rad); Infinity disables it. */
    a(this, "headingMax");
    /** Authoritative travel direction (radians) — drives velocity even from rest. */
    a(this, "heading");
    /** See BulletConfig.homingTurn / homingFrames / spin. */
    a(this, "homingTurn");
    a(this, "homingFrames");
    a(this, "spin");
    /** Heading the shot launched along; homing is capped relative to this. */
    a(this, "launchHeading");
    /** See BulletConfig.homingMaxTurn. */
    a(this, "homingMaxTurn");
    /**
     * Half the width to paint the sprite at, in playfield pixels. 0 keeps the
     * legacy sizing that scales the texture from the hit radius; real .anm cells
     * are authored 1:1, so a game that ships them sets this to the cell size.
     */
    a(this, "drawRadius", 0);
    a(this, "lifetime", 0);
    /** See BulletConfig.maxLifetime. 0 disables the timer. */
    a(this, "maxLifetime", 0);
    /** True while this instance sits in the shared free-list awaiting reuse. */
    a(this, "isPooled", !1);
    this.color = e.color ?? 16724838, this.sprite = e.sprite ?? "bullet_small", this.damage = e.damage ?? 1, this.grazed = e.grazed ?? !1, this.angularVelocity = e.angularVelocity ?? 0, this.acceleration = e.acceleration ?? 0, this.angularAcceleration = e.angularAcceleration ?? 0, this.angularJerk = e.angularJerk ?? 0, this.jerk = e.jerk ?? 0, this.speedMin = e.speedMin ?? 0, this.speedMax = e.speedMax ?? Number.POSITIVE_INFINITY, this.angularVelocityMin = e.angularVelocityMin ?? Number.NEGATIVE_INFINITY, this.angularVelocityMax = e.angularVelocityMax ?? Number.POSITIVE_INFINITY, this.accelerationMin = e.accelerationMin ?? Number.NEGATIVE_INFINITY, this.accelerationMax = e.accelerationMax ?? Number.POSITIVE_INFINITY, this.angularAccelerationMin = e.angularAccelerationMin ?? Number.NEGATIVE_INFINITY, this.angularAccelerationMax = e.angularAccelerationMax ?? Number.POSITIVE_INFINITY, this.headingMin = e.headingMin ?? Number.NEGATIVE_INFINITY, this.headingMax = e.headingMax ?? Number.POSITIVE_INFINITY, this.heading = qt(e), this.homingTurn = e.homingTurn ?? 0, this.homingFrames = e.homingFrames ?? 0, this.spin = e.spin ?? 0, this.launchHeading = this.heading, this.homingMaxTurn = e.homingMaxTurn ?? 0, this.maxLifetime = e.maxLifetime ?? 0;
  }
  /** Re-arm a pooled instance with fresh config so it can be reused. */
  reset(e = {}) {
    var s, i, r, n;
    this.isPooled = !1, this.position.x = ((s = e.position) == null ? void 0 : s.x) ?? 0, this.position.y = ((i = e.position) == null ? void 0 : i.y) ?? 0, this.velocity.x = ((r = e.velocity) == null ? void 0 : r.x) ?? 0, this.velocity.y = ((n = e.velocity) == null ? void 0 : n.y) ?? 0, this.rotation = 0, this.hitbox.radius = e.radius ?? 4, this.hitbox.offset = { x: 0, y: 0 }, this.isAlive = !0, this.tag = e.tag ?? "enemy-bullet", this.color = e.color ?? 16724838, this.sprite = e.sprite ?? "bullet_small", this.damage = e.damage ?? 1, this.grazed = e.grazed ?? !1, this.angularVelocity = e.angularVelocity ?? 0, this.acceleration = e.acceleration ?? 0, this.angularAcceleration = e.angularAcceleration ?? 0, this.angularJerk = e.angularJerk ?? 0, this.jerk = e.jerk ?? 0, this.speedMin = e.speedMin ?? 0, this.speedMax = e.speedMax ?? Number.POSITIVE_INFINITY, this.angularVelocityMin = e.angularVelocityMin ?? Number.NEGATIVE_INFINITY, this.angularVelocityMax = e.angularVelocityMax ?? Number.POSITIVE_INFINITY, this.accelerationMin = e.accelerationMin ?? Number.NEGATIVE_INFINITY, this.accelerationMax = e.accelerationMax ?? Number.POSITIVE_INFINITY, this.angularAccelerationMin = e.angularAccelerationMin ?? Number.NEGATIVE_INFINITY, this.angularAccelerationMax = e.angularAccelerationMax ?? Number.POSITIVE_INFINITY, this.headingMin = e.headingMin ?? Number.NEGATIVE_INFINITY, this.headingMax = e.headingMax ?? Number.POSITIVE_INFINITY, this.heading = qt(e), this.homingTurn = e.homingTurn ?? 0, this.homingFrames = e.homingFrames ?? 0, this.spin = e.spin ?? 0, this.launchHeading = this.heading, this.homingMaxTurn = e.homingMaxTurn ?? 0, this.drawRadius = e.drawRadius ?? 0, this.lifetime = 0, this.maxLifetime = e.maxLifetime ?? 0;
  }
  /** Point the bullet along an absolute heading, keeping velocity in sync. */
  setHeading(e) {
    this.heading = e;
    const s = Math.hypot(this.velocity.x, this.velocity.y);
    this.velocity.x = Math.cos(e) * s, this.velocity.y = Math.sin(e) * s;
  }
  /**
   * Rotate heading toward target by at most maxTurn radians, then resync velocity.
   * This is the bounded steering th08 homing shots use; unlike a raw angularVelocity
   * it can never curl a projectile back into a loop around its own origin.
   */
  turnToward(e, s) {
    if (!(s > 0)) return;
    const i = At(e - this.heading);
    this.setHeading(this.heading + Math.max(-s, Math.min(s, i)));
  }
  /**
   * One bounded homing step. Steers toward `target` by at most `maxTurn`, but never
   * further than homingMaxTurn radians off the launch heading, and gives up once
   * the target sits behind the shot. Those two guards are what keep a homing charm
   * curving toward its mark instead of looping back over the shooter.
   */
  homeToward(e, s) {
    if (!(s > 0) || Math.cos(At(e - this.heading)) <= 0) return !1;
    if (this.turnToward(e, s), this.homingMaxTurn > 0) {
      const i = At(this.heading - this.launchHeading), r = Math.max(-this.homingMaxTurn, Math.min(this.homingMaxTurn, i));
      r !== i && this.setHeading(this.launchHeading + r);
    }
    return !0;
  }
  /**
   * Polar integrator mirroring th08 MoveVector.runStep exactly:
   *
   *   theta += w;  r += ra;  w += wa;  ra += raa;  wa += waa;  (then clamp)
   *
   * heading/angularVelocity are the radian equivalents of theta/w, and
   * acceleration/jerk the equivalents of ra/raa. `velocity` is re-derived every
   * frame so consumers (BulletSystem culling, renderer rotation) stay in sync —
   * and so bullets that spawn at r:0 still accelerate along their theta.
   */
  update(e) {
    if (!this.isAlive) return;
    const s = this.angularVelocity !== 0 || this.angularAcceleration !== 0 || this.angularJerk !== 0, i = this.acceleration !== 0 || this.jerk !== 0, r = this.speedMin !== 0 || this.speedMax !== Number.POSITIVE_INFINITY || this.angularVelocityMin !== Number.NEGATIVE_INFINITY || this.angularVelocityMax !== Number.POSITIVE_INFINITY || this.accelerationMin !== Number.NEGATIVE_INFINITY || this.accelerationMax !== Number.POSITIVE_INFINITY || this.angularAccelerationMin !== Number.NEGATIVE_INFINITY || this.angularAccelerationMax !== Number.POSITIVE_INFINITY || this.headingMin !== Number.NEGATIVE_INFINITY || this.headingMax !== Number.POSITIVE_INFINITY;
    if (s || i || r) {
      let n = Math.hypot(this.velocity.x, this.velocity.y);
      s && (this.heading += this.angularVelocity * e), i && (n += this.acceleration * e), s && (this.angularVelocity += this.angularAcceleration * e), i && (this.acceleration += this.jerk * e), s && (this.angularAcceleration += this.angularJerk * e), this.heading < this.headingMin && (this.heading = this.headingMin), this.heading > this.headingMax && (this.heading = this.headingMax), n < this.speedMin && (n = this.speedMin), n > this.speedMax && (n = this.speedMax), n < 0 && (n = 0), this.angularVelocity = Ct(this.angularVelocity, this.angularVelocityMin, this.angularVelocityMax), this.acceleration = Ct(this.acceleration, this.accelerationMin, this.accelerationMax), this.angularAcceleration = Ct(
        this.angularAcceleration,
        this.angularAccelerationMin,
        this.angularAccelerationMax
      ), this.velocity.x = Math.cos(this.heading) * n, this.velocity.y = Math.sin(this.heading) * n;
    }
    super.update(e), this.lifetime += e, this.maxLifetime > 0 && this.lifetime >= this.maxLifetime && this.destroy();
  }
}
function Ct(o, t, e) {
  return Math.max(t, Math.min(e, o));
}
function At(o) {
  let t = o % (Math.PI * 2);
  return t > Math.PI && (t -= Math.PI * 2), t <= -Math.PI && (t += Math.PI * 2), t;
}
function qt(o) {
  var s, i;
  if (typeof o.heading == "number") return o.heading;
  const t = ((s = o.velocity) == null ? void 0 : s.x) ?? 0, e = ((i = o.velocity) == null ? void 0 : i.y) ?? 0;
  return Math.atan2(e, t);
}
const yt = 30, Vt = 30, es = 60, ss = -15, is = 6, as = 7, rs = 15, os = 30, ns = 2, hs = [18, 10, 10, 12];
function ls(o) {
  return Math.floor((o - 4) / 2);
}
function cs(o) {
  return o < 4 ? o : ls(o);
}
function us(o) {
  return o === 0 || o === 4 || o === 5;
}
function ds(o) {
  if (o.bombs < 1) return ns;
  let t = o.bombs * is;
  return o.timeOrbs >= o.lastSpellTimeOrbThreshold && (t += as), t = Math.min(t, rs), o.spellCardActive && (t = Math.min(t * 2, os)), us(o.shotType) && (t = Math.floor(t * 9 / 5)), t;
}
function ps(o) {
  return hs[cs(o) & 3] ?? 10;
}
function ms(o, t) {
  return o ? t < 2 ? Math.max(0, t) : 2 : 1;
}
function Qt(o, t) {
  return Math.min(o + 6, ps(t));
}
const bt = {
  scaleX: 1,
  scaleY: 1,
  alpha: 1,
  additive: !1,
  whiteout: !1
};
function fs(o) {
  if (o >= yt) return bt;
  const t = Math.max(0, o) / yt;
  return {
    scaleX: 3 * t + 1,
    scaleY: 1 - t,
    alpha: 1 - t,
    additive: !0,
    whiteout: !1
  };
}
function gs(o) {
  if (o >= Vt) return bt;
  const t = Math.max(0, o), e = 1 - t / 60;
  return {
    scaleX: 2 * e + 1,
    scaleY: 1 - e,
    alpha: Math.min(1, t * 255 / 30 / 255),
    additive: !0,
    whiteout: !1
  };
}
function ys(o, t, e = 0) {
  return o === "dying" ? e > 0 ? { ...bt, whiteout: !0 } : fs(yt - t) : o === "respawning" ? gs(Vt - t) : bt;
}
const V = (o) => o, U = {
  reimu: V({
    id: "reimu",
    name: "灵梦",
    label: "Reimu A",
    role: "A",
    shotStyle: "homing",
    shotCount: 3,
    spread: 0.3,
    shotRate: 5,
    shotDamage: 15,
    shotRadius: 3.2,
    shotSpeed: 12,
    bulletColor: 16724804,
    accentColor: 16773350,
    shotSprite: "shot:reimu",
    homingTurn: 0.05,
    homingFrames: 34,
    homingMaxTurn: 0.62,
    spin: 0.05,
    blurb: "阴阳玉 · 追踪符咒"
  }),
  yukari: V({
    id: "yukari",
    name: "紫",
    label: "Yukari B",
    role: "B",
    shotStyle: "spread",
    shotCount: 7,
    spread: 0.95,
    shotRate: 7,
    shotDamage: 11,
    shotRadius: 2.6,
    shotSpeed: 13,
    bulletColor: 12159999,
    accentColor: 15984895,
    shotSprite: "shot:yukari",
    homingTurn: 0,
    homingFrames: 0,
    homingMaxTurn: 0,
    spin: 0,
    blurb: "境界 · 扇形针刺"
  }),
  marisa: V({
    id: "marisa",
    name: "魔理沙",
    label: "Marisa A",
    role: "A",
    shotStyle: "laser",
    shotCount: 3,
    spread: 0.16,
    shotRate: 6,
    shotDamage: 22,
    shotRadius: 4.2,
    shotSpeed: 20,
    bulletColor: 16766023,
    accentColor: 16773544,
    shotSprite: "shot:marisa",
    homingTurn: 0,
    homingFrames: 0,
    homingMaxTurn: 0,
    spin: 0,
    blurb: "魔导 · 集中激光"
  }),
  alice: V({
    id: "alice",
    name: "爱丽丝",
    label: "Alice B",
    role: "B",
    shotStyle: "homing",
    shotCount: 4,
    spread: 0.55,
    shotRate: 7,
    shotDamage: 13,
    shotRadius: 3,
    shotSpeed: 10,
    bulletColor: 16743120,
    accentColor: 16773368,
    shotSprite: "shot:alice",
    homingTurn: 0.055,
    homingFrames: 46,
    homingMaxTurn: 0.7,
    spin: 0.08,
    blurb: "上海人形 · 强追踪"
  }),
  sakuya: V({
    id: "sakuya",
    name: "咲夜",
    label: "Sakuya A",
    role: "A",
    shotStyle: "needle",
    shotCount: 6,
    spread: 0.14,
    shotRate: 2,
    shotDamage: 8,
    shotRadius: 2.4,
    shotSpeed: 22,
    bulletColor: 10414335,
    accentColor: 15267839,
    shotSprite: "shot:sakuya",
    homingTurn: 0,
    homingFrames: 0,
    homingMaxTurn: 0,
    spin: 0,
    blurb: "时停小刀 · 高射速"
  }),
  remilia: V({
    id: "remilia",
    name: "蕾米莉亚",
    label: "Remilia B",
    role: "B",
    shotStyle: "spread",
    shotCount: 9,
    spread: 1.25,
    shotRate: 6,
    shotDamage: 9,
    shotRadius: 3.4,
    shotSpeed: 11,
    bulletColor: 16733296,
    accentColor: 16769256,
    shotSprite: "shot:remilia",
    homingTurn: 0,
    homingFrames: 0,
    homingMaxTurn: 0,
    spin: 0.02,
    blurb: "红雾 · 广角弹幕"
  }),
  youmu: V({
    id: "youmu",
    name: "妖梦",
    label: "Youmu A",
    role: "A",
    shotStyle: "spread",
    shotCount: 5,
    spread: 0.72,
    shotRate: 5,
    shotDamage: 14,
    shotRadius: 5,
    shotSpeed: 14,
    bulletColor: 9431232,
    accentColor: 15925240,
    shotSprite: "shot:youmu",
    homingTurn: 0,
    homingFrames: 0,
    homingMaxTurn: 0,
    spin: 0.12,
    blurb: "灵刃 · 宽幅扇面"
  }),
  yuyuko: V({
    id: "yuyuko",
    name: "幽幽子",
    label: "Yuyuko B",
    role: "B",
    shotStyle: "homing",
    shotCount: 3,
    spread: 0.85,
    shotRate: 8,
    shotDamage: 12,
    shotRadius: 3.6,
    shotSpeed: 8,
    bulletColor: 13084927,
    accentColor: 16315391,
    shotSprite: "shot:yuyuko",
    homingTurn: 0.045,
    homingFrames: 52,
    homingMaxTurn: 0.8,
    spin: 0.03,
    blurb: "亡灵 · 缓速追踪"
  })
}, it = 128, $t = [8, 24, 48, 80, 128, 1 / 0], It = 128, Pt = 10, Ft = 12, bs = 16, xs = 16, ht = {
  "reimu-yukari": {
    fastSpeed: 4,
    fastDiagonalSpeed: 4 / Math.SQRT2,
    slowSpeed: 2,
    slowDiagonalSpeed: 2 / Math.SQRT2
  },
  "marisa-alice": {
    fastSpeed: 5,
    fastDiagonalSpeed: 5 / Math.SQRT2,
    slowSpeed: 2.2,
    slowDiagonalSpeed: 2.2 / Math.SQRT2
  },
  "sakuya-remilia": {
    fastSpeed: 4,
    fastDiagonalSpeed: 4 / Math.SQRT2,
    slowSpeed: 2.3,
    slowDiagonalSpeed: 2.3 / Math.SQRT2
  },
  "youmu-yuyuko": {
    fastSpeed: 5,
    fastDiagonalSpeed: 5 / Math.SQRT2,
    slowSpeed: 1.9,
    slowDiagonalSpeed: 1.9 / Math.SQRT2
  }
}, lt = {
  "reimu-yukari": { itemTimeScale: 0.9, itemTimeScaleFocused: 0.9 },
  "marisa-alice": { itemTimeScale: 0.9, itemTimeScaleFocused: 0.9 },
  "sakuya-remilia": { itemTimeScale: 0.65, itemTimeScaleFocused: 0.9 },
  "youmu-yuyuko": { itemTimeScale: 0.9, itemTimeScaleFocused: 0.9 }
}, xt = {
  "reimu-yukari": {
    id: "reimu-yukari",
    name: "灵梦 / 紫",
    subtitle: "平衡型 · 追踪阴阳玉",
    maxPower: it,
    pointItemValueLine: It,
    itemGrabSpeed: Pt,
    itemPickupHalfExtent: Ft,
    hitboxHalfExtent: 0.825,
    grazeHalfExtent: 1.4,
    bombDamage: 150,
    color: 12852794,
    accentColor: 16773350,
    ...ht["reimu-yukari"],
    ...lt["reimu-yukari"],
    members: [U.reimu, U.yukari]
  },
  "marisa-alice": {
    id: "marisa-alice",
    name: "魔理沙 / 爱丽丝",
    subtitle: "高火力 · 集中激光",
    maxPower: it,
    // Marisa's team owns the lower line and the wider box: the farming ship.
    pointItemValueLine: 160,
    itemGrabSpeed: 12,
    itemPickupHalfExtent: 16,
    hitboxHalfExtent: 1,
    grazeHalfExtent: 1.4,
    bombDamage: 220,
    color: 10181119,
    accentColor: 16773544,
    ...ht["marisa-alice"],
    ...lt["marisa-alice"],
    members: [U.marisa, U.alice]
  },
  "sakuya-remilia": {
    id: "sakuya-remilia",
    name: "咲夜 / 蕾米莉亚",
    subtitle: "精准型 · 时停刀刃",
    maxPower: it,
    pointItemValueLine: It,
    itemGrabSpeed: Pt,
    itemPickupHalfExtent: Ft,
    hitboxHalfExtent: 1,
    grazeHalfExtent: 3,
    bombDamage: 180,
    color: 6011059,
    accentColor: 15267839,
    ...ht["sakuya-remilia"],
    ...lt["sakuya-remilia"],
    members: [U.sakuya, U.remilia]
  },
  "youmu-yuyuko": {
    id: "youmu-yuyuko",
    name: "妖梦 / 幽幽子",
    subtitle: "近战型 · 宽幅灵刃",
    maxPower: it,
    pointItemValueLine: It,
    itemGrabSpeed: Pt,
    itemPickupHalfExtent: Ft,
    hitboxHalfExtent: 1,
    grazeHalfExtent: 1.5,
    bombDamage: 190,
    color: 10212560,
    accentColor: 16315391,
    ...ht["youmu-yuyuko"],
    ...lt["youmu-yuyuko"],
    members: [U.youmu, U.yuyuko]
  }
}, zi = (o) => xt[o] ?? xt["reimu-yukari"], ws = {
  // World space, not canvas space: the 384x448 field is drawn inside a 640x480
  // window, and the renderer applies the offset. The ship keeps an 8px margin
  // from the walls exactly like the retail clip box.
  minX: 8,
  maxX: 376,
  minY: 16,
  maxY: 432
}, Ss = 14, E = class E extends X {
  constructor(e = {}, s = {}) {
    const i = s.profile ?? (s.characterId ? xt[s.characterId] : xt["reimu-yukari"]);
    super(e, {}, { radius: s.hitboxRadius ?? i.hitboxHalfExtent }, "player");
    /** The team this player belongs to (menu selection, leaderboard entry). */
    a(this, "team");
    a(this, "characterId");
    a(this, "characterName");
    a(this, "memberIndex", 0);
    /** Frames left on the swap flourish; drives the renderer's flash. */
    a(this, "switchFlash", 0);
    a(this, "fastSpeed");
    a(this, "slowSpeed");
    /** Per-axis diagonal speed, unfocused (`plyNNa.sht + 0x2C`). */
    a(this, "fastDiagonalSpeed");
    /** Per-axis diagonal speed, focused (`plyNNas.sht + 0x30`). */
    a(this, "slowDiagonalSpeed");
    a(this, "bombDamage");
    /** Nearest target for homing shots, refreshed by the game each frame. */
    a(this, "aimTarget", null);
    a(this, "color");
    a(this, "accentColor");
    a(this, "isSlowMode", !1);
    /**
     * Whether the hitbox dot is drawn. TH08 raises this a few frames *after* focus
     * is engaged (`Player.cpp:716, 778`), so it is deliberately not the same flag
     * as `isSlowMode`.
     */
    a(this, "hitboxVisible", !1);
    /**
     * Intended horizontal velocity in px/frame, mirroring `PlayerSim.leanX`. The
     * renderer leans the ship from this rather than from `velocity`, because the
     * position delta carries wall-clamp and sub-pixel noise that retriggers the
     * lean/unlean transition forever. See `Player.cpp:791-872`.
     */
    a(this, "leanX", null);
    a(this, "lives");
    a(this, "bombs");
    /** Power in 1/128 units; 128 reads as 2.00 on the HUD. */
    a(this, "power", 0);
    /** Ceiling for power, from the team profile (128 = 2.00). */
    a(this, "maxPower", it);
    /**
     * Power shed by the most recent death, still owed to the drop-item spawner.
     * TH08 hands back one big P plus four small P, so the game reads this once.
     */
    a(this, "powerLost", 0);
    /**
     * 永夜抄 life cycle. `dying` freezes the ship behind a death burst for 30
     * frames, `respawning` flies the 60-frame spawn-in at the start position,
     * and `dead` is the game-over parking lot.
     */
    a(this, "state", "alive");
    /** Countdown for the current non-alive state, in game frames. */
    a(this, "stateTimer", 0);
    /**
     * Frames left of the deathbomb grace window (`0xE2A68`). The ship holds on the
     * death spot, white, for exactly this long before it dissolves.
     */
    a(this, "graceTimer", 0);
    /** `field_4`: a press while this is set spends two bombs and the partner's card. */
    a(this, "deathbombArmed", !1);
    /** One-tick flag: this frame the death stopped being cancellable. */
    a(this, "deathSettled", !1);
    /** Inputs to the grace-window formula, kept current by the game. */
    a(this, "shotType", 0);
    a(this, "timeOrbs", 0);
    a(this, "lastSpellTimeOrbThreshold", Number.POSITIVE_INFINITY);
    a(this, "spellCardActive", !1);
    /**
     * Frames left of the post-respawn bullet-cancel volume (playerStateSlotCooldown
     * = 60 in the reference). Bullets inside it vanish without being grazed.
     */
    a(this, "cancelTimer", 0);
    a(this, "score", 0);
    a(this, "graze", 0);
    a(this, "isInvulnerable", !1);
    a(this, "invulnerabilityTimer", 0);
    /**
     * Set while a spell card's own state clock has the ship, on the frames it is meant
     * to read red. Mirrors `PlayerSim.bombStateFlash`; a game without that clock just
     * leaves it false.
     */
    a(this, "bombStateFlash", !1);
    a(this, "shootCooldown", 0);
    a(this, "playfield");
    a(this, "bulletFactory");
    this.team = i, this.characterId = s.characterId ?? i.id, this.characterName = i.name, this.fastSpeed = s.fastSpeed ?? i.fastSpeed, this.slowSpeed = s.slowSpeed ?? i.slowSpeed, this.fastDiagonalSpeed = i.fastDiagonalSpeed, this.slowDiagonalSpeed = i.slowDiagonalSpeed, this.bombDamage = i.bombDamage, this.color = i.color, this.accentColor = i.accentColor, this.maxPower = i.maxPower, this.power = Math.min(this.maxPower, s.initialPower ?? 0), this.state = "alive", this.lives = s.initialLives ?? 3, this.maxPower = s.profile ? s.profile.maxPower : this.maxPower, this.bombs = s.initialBombs ?? 3, this.playfield = s.playfield ?? ws, this.bulletFactory = s.bulletFactory ?? ((r) => Me(r));
  }
  /** The member currently flying (A unfocused, B focused). */
  get member() {
    return this.team.members[this.memberIndex];
  }
  /** The member standing down; the renderer trails it as a translucent shadow. */
  get partner() {
    return this.team.members[this.memberIndex === 0 ? 1 : 0];
  }
  get memberId() {
    return this.member.id;
  }
  /** Weapon read-outs follow the active member so HUD and tests stay truthful. */
  get shotStyle() {
    return this.member.shotStyle;
  }
  get shotCount() {
    return this.member.shotCount;
  }
  get shotRate() {
    return this.member.shotRate;
  }
  get shotDamage() {
    return this.member.shotDamage;
  }
  get shotRadius() {
    return this.member.shotRadius;
  }
  get shotSpread() {
    return this.member.spread;
  }
  get shotColor() {
    return this.member.bulletColor;
  }
  get shotSprite() {
    return this.member.shotSprite;
  }
  applyProfile(e) {
    this.team = e, this.characterId = e.id, this.characterName = e.name, this.fastSpeed = e.fastSpeed, this.slowSpeed = e.slowSpeed, this.fastDiagonalSpeed = e.fastDiagonalSpeed, this.slowDiagonalSpeed = e.slowDiagonalSpeed, this.bombDamage = e.bombDamage, this.color = e.color, this.accentColor = e.accentColor, this.maxPower = e.maxPower, this.power = Math.min(this.maxPower, this.power), this.hitbox.radius = e.hitboxHalfExtent;
  }
  /** Swap the flying member directly (tests, replays and scripted demos). */
  setMember(e) {
    return this.memberIndex === e ? !1 : (this.memberIndex = e, this.switchFlash = Ss, !0);
  }
  /**
   * Enter or leave focus mode. In Imperishable Night this *is* the member swap:
   * `playerNN.anm` keeps the human's stance in scripts 0-4 and the partner's own
   * frames in the 低速 family scripts 5-9, and `Player.cpp:791-820` takes the
   * focus speed from the secondary (partner) .sht. There is no separate change
   * key in `Global.hpp:97-126` because Shift already does the switching.
   */
  setFocus(e) {
    this.isSlowMode = e, this.setMember(e ? 1 : 0);
  }
  /**
   * Raise power by amount (1/256 units) and report what actually landed,
   * so callers can score the overflow the way TH08 does at max power.
   */
  addPower(e) {
    const s = this.power;
    return this.power = Math.min(this.maxPower, this.power + e), this.power - s;
  }
  /** Fill power to the team cap (the 電 item). Returns the amount gained. */
  fillPower() {
    return this.addPower(this.maxPower);
  }
  /** Point homing shots at the closest live target (null = fire straight). */
  setAimTarget(e) {
    this.aimTarget = e;
  }
  /**
   * Put the ship back at the start position for a new stage.
   *
   * Lives, bombs and power deliberately survive: Touhou 8 carries all three
   * across the whole run, and only death (or a continue) touches them.
   */
  resetForStage(e = !0) {
    this.position.x = 192, this.position.y = 384, this.velocity.x = 0, this.velocity.y = 0, this.isAlive = !0, this.state = "alive", this.stateTimer = 0, this.cancelTimer = 0, this.graceTimer = 0, this.deathbombArmed = !1, this.deathSettled = !1, this.isInvulnerable = !1, this.invulnerabilityTimer = 0, this.shootCooldown = 0, this.switchFlash = 0, this.powerLost = 0, e || (this.score = 0);
  }
  /**
   * @param fieldPointer Where a pointer device wants the ship, already in this
   * player's own coordinate space, or `null` when nothing is steering. The field is
   * not the whole canvas (`canvasToWorldX`), so a host that draws it inside a
   * 640x480 window has to convert the cursor before handing it over -- the ECL
   * player sim gets the converted point, and this call needs the same one or the
   * two writers disagree by the playfield offset. Left out, the pointer is read as
   * already being in this player's space, which is what a full-window game wants.
   */
  handleInput(e, s) {
    this.setFocus(e.isKeyDown("slow"));
    const i = s === void 0 ? e.isSteering ? e.getPointerTarget() ?? e.pointerPos : null : s;
    if (i) {
      const d = i.x - this.position.x, u = i.y - this.position.y, m = Math.hypot(d, u), g = this.isSlowMode ? this.slowSpeed : this.fastSpeed;
      if (m > 1) {
        const S = Math.min(m, g);
        this.velocity.x = d / m * S, this.velocity.y = u / m * S;
      } else
        this.velocity.x = 0, this.velocity.y = 0;
      this.leanX = this.velocity.x;
      return;
    }
    const r = this.isSlowMode ? this.slowSpeed : this.fastSpeed, n = this.isSlowMode ? this.slowDiagonalSpeed : this.fastDiagonalSpeed, l = e.movementBits, [h, c] = Je(je(l), r, n);
    this.velocity.x = h, this.velocity.y = c, this.leanX = this.velocity.x;
  }
  /**
   * Decay only the fire-rate gate.
   *
   * `update()` owns this cooldown, but the ECL-driven stage runs its own player sim
   * and never calls `update()`. Without this the first volley latches `shootCooldown`
   * forever and the ship appears to have no weapon at all.
   */
  tickShootCooldown(e = 1) {
    this.shootCooldown > 0 && (this.shootCooldown = Math.max(0, this.shootCooldown - e));
  }
  /**
   * Fire the active member's weapon. Every one of the eight members is a real
   * design point: homing charms, wide gap spreads, concentrated lasers and rapid
   * knives all behave differently, and none of them curl back on the shooter.
   */
  /** Pull a lane offset back inside `MUZZLE_LIMIT` of the ship centre line. */
  muzzleX(e) {
    const s = E.MUZZLE_LIMIT;
    return this.position.x + Math.max(-s, Math.min(s, e));
  }
  shoot(e = 0) {
    if (this.shootCooldown > 0) return [];
    const s = this.member;
    this.shootCooldown = s.shotRate;
    const i = [], r = Math.min(4, this.shotLevel), n = s.shotCount + r, l = this.isSlowMode ? s.spread * 0.55 : s.spread, h = s.shotSpeed, c = this.position.y - 18;
    for (let d = 0; d < n; d++) {
      const m = (n === 1 ? 0 : d / (n - 1) - 0.5) * l, g = {
        position: { x: this.muzzleX(m * 26), y: c },
        radius: s.shotRadius,
        color: s.bulletColor,
        damage: Math.round(s.shotDamage * (this.isSlowMode ? 1.15 : 1)),
        tag: "player-bullet",
        sprite: s.shotSprite,
        spin: s.spin
      };
      switch (s.shotStyle) {
        case "homing": {
          const S = -Math.PI / 2 + m * 1.6;
          i.push(
            this.makeBullet({
              ...g,
              velocity: { x: Math.cos(S) * h, y: Math.sin(S) * h },
              heading: S,
              homingTurn: s.homingTurn,
              homingFrames: s.homingFrames,
              homingMaxTurn: s.homingMaxTurn
            })
          );
          break;
        }
        case "spread": {
          const S = -Math.PI / 2 + m * 2.4;
          i.push(
            this.makeBullet({
              ...g,
              position: { x: this.muzzleX(m * 34), y: c },
              velocity: { x: Math.cos(S) * h, y: Math.sin(S) * h },
              heading: S
            })
          );
          break;
        }
        case "needle": {
          i.push(
            this.makeBullet({
              ...g,
              position: { x: this.muzzleX(m * 14), y: c - d % 2 * 7 },
              velocity: { x: m * 6, y: -h },
              damage: Math.round(s.shotDamage)
            })
          );
          break;
        }
        default:
          i.push(
            this.makeBullet({
              ...g,
              position: { x: this.muzzleX(m * 7), y: c },
              velocity: { x: m * 3, y: -h },
              radius: s.shotRadius + 1.2,
              damage: Math.round(s.shotDamage * (this.isSlowMode ? 1.3 : 1))
            })
          );
      }
    }
    return i;
  }
  makeBullet(e) {
    return this.bulletFactory(e);
  }
  /**
   * Take a hit: start the death sequence and pay the power bill.
   *
   * The reference costs 16 units (0.25) per death and zeroes anything at or
   * below 16, then hands the shed power back as drop items; see Player::Die and
   * the ITEM_POWER_* spawns that follow it.
   */
  /**
   * Take a hit and open the deathbomb window.
   *
   * The power bill is deliberately not paid here: `Player::Die` only touches power
   * once the grace counter runs out (`FUN_0044cbf0:1341-1346`), which is what makes a
   * deathbomb worth its two bombs.
   */
  hit() {
    return this.isInvulnerable || this.state !== "alive" ? !1 : (this.state = "dying", this.stateTimer = E.DEATH_FRAMES, this.graceTimer = ds({
      bombs: this.bombs,
      timeOrbs: this.timeOrbs,
      lastSpellTimeOrbThreshold: this.lastSpellTimeOrbThreshold,
      spellCardActive: this.spellCardActive,
      shotType: this.shotType
    }), this.deathbombArmed = this.graceTimer > 0, this.deathSettled = !1, this.isInvulnerable = !1, this.invulnerabilityTimer = 0, this.emit("hit", this.lives), !0);
  }
  /**
   * The frame the window runs out: pay the power bill and arm the drop spawn
   * (`Player.cpp:1341-1369`). Out of lives the whole bar goes instead of a slice.
   */
  settleDeath() {
    const e = this.lives <= 0 ? this.power : this.power <= xs ? this.power : bs;
    this.power -= e, this.powerLost += e, this.deathSettled = !0, this.emit("deathSettled");
  }
  /**
   * Spend one life and fly back in.
   *
   * Bombs deliberately survive. `Player.cpp:1341-1358` pays a death with power and a
   * drop of P items, and the only bomb it ever hands back is the `ITEM_BOMB` pickup the
   * Sakuya/Remilia side gets -- so the count carries through a death.
   *
   * @returns false when there are no lives left, i.e. the run is over.
   */
  respawn() {
    return this.lives <= 0 ? (this.state = "dead", this.isAlive = !1, this.emit("gameover"), !1) : (this.lives -= 1, this.bombs = E.INITIAL_BOMBS, this.position.x = E.RESPAWN_X, this.position.y = E.RESPAWN_Y, this.velocity.x = 0, this.velocity.y = 0, this.state = "respawning", this.stateTimer = E.SPAWN_FRAMES, this.cancelTimer = E.BULLET_CANCEL_FRAMES, this.graceTimer = 0, this.deathbombArmed = !1, this.isInvulnerable = !1, this.invulnerabilityTimer = 0, this.emit("respawn", this.lives), !0);
  }
  /** True while the ship is on screen and can be hit or can fire. */
  get isFlying() {
    return this.state === "alive" || this.state === "respawning";
  }
  /** Point-of-collection line for this team (plyNNa.sht + 0x1c). */
  get pointItemValueLine() {
    return this.team.pointItemValueLine;
  }
  /** Homing speed used once items are grabbed (sht + 0x14). */
  get itemGrabSpeed() {
    return this.team.itemGrabSpeed;
  }
  /**
   * Time scale on items that are still drifting on their own (sht + 0x34).
   *
   * `ItemManager.cpp:207-209` swaps the table with the focus flag, exactly like
   * the move speed does, so Sakuya's unfocused field falls at 0.65 and Remilia's
   * focused one at 0.9.
   */
  get itemTimeScale() {
    return this.isSlowMode ? this.team.itemTimeScaleFocused : this.team.itemTimeScale;
  }
  /** Half of the item box (sht + 0x18 / 2). */
  get itemPickupHalfExtent() {
    return this.team.itemPickupHalfExtent;
  }
  /** Half of the hit box (sht + 0x0C / 2). */
  get hitboxHalfExtent() {
    return this.team.hitboxHalfExtent;
  }
  /** Half of the graze box (sht + 0x10 / 2). */
  get grazeHalfExtent() {
    return this.team.grazeHalfExtent;
  }
  /** Shot level 0..5 from g_PowerUpThresholds {8,24,48,80,128}. */
  get shotLevel() {
    let e = 0;
    for (; e < $t.length - 1 && this.power >= $t[e]; )
      e++;
    return e;
  }
  /**
   * Spend a card. A press during the grace window is a deathbomb: it costs two bombs
   * (or everything left, if that is fewer) and belongs to the member not flying.
   * Retail buys no invulnerability with any of this (`acceptBomb:1244-1271`).
   */
  useBomb() {
    if (this.bombs <= 0) return !1;
    const e = this.state === "dying" && this.deathbombArmed && this.graceTimer > 0;
    if (!e && this.state !== "alive") return !1;
    const s = ms(e, this.bombs);
    return s <= 0 ? !1 : (this.bombs -= s, this.graceTimer = Qt(this.graceTimer, this.shotType), this.emit("bomb", this.bombs), !0);
  }
  /**
   * Scale, blend and opacity for the grace window, the dissolve and the spawn-in.
   * `null` means the ship draws as usual.
   */
  get shipPose() {
    const e = ys(this.state, this.stateTimer, this.graceTimer);
    return e.alpha >= 1 && e.scaleX === 1 && e.scaleY === 1 && !e.whiteout ? null : e;
  }
  /** True while the ship is held white on the death spot inside its window. */
  get whiteoutHold() {
    return this.state === "dying" && this.graceTimer > 0;
  }
  update(e) {
    super.update(e), this.shootCooldown > 0 && (this.shootCooldown = Math.max(0, this.shootCooldown - e)), this.switchFlash > 0 && (this.switchFlash = Math.max(0, this.switchFlash - e)), this.cancelTimer > 0 && (this.cancelTimer = Math.max(0, this.cancelTimer - e)), this.state === "dying" ? this.graceTimer > 0 ? (this.timeOrbs = Math.max(0, this.timeOrbs + ss * e), this.graceTimer = Math.max(0, this.graceTimer - e), this.deathbombArmed = this.graceTimer > 0, this.graceTimer === 0 && this.settleDeath()) : (this.stateTimer = Math.max(0, this.stateTimer - e), this.stateTimer === 0 && this.respawn()) : this.state === "respawning" && (this.stateTimer = Math.max(0, this.stateTimer - e), this.stateTimer === 0 && (this.state = "alive", this.graceTimer = Qt(0, this.shotType))), this.isInvulnerable && (this.invulnerabilityTimer -= e, this.invulnerabilityTimer <= 0 && (this.isInvulnerable = !1, this.invulnerabilityTimer = 0)), this.position.x = Math.max(this.playfield.minX, Math.min(this.playfield.maxX, this.position.x)), this.position.y = Math.max(this.playfield.minY, Math.min(this.playfield.maxY, this.position.y));
  }
};
/** 0 = member A (unfocused), 1 = member B (focused). */
/** Death burst before the ship is allowed back (Player::Die -> 30 frames). */
a(E, "DEATH_FRAMES", yt), /** Spawn-in scale/fade animation (FUN_0044d180 -> 30 frames). */
a(E, "SPAWN_FRAMES", Vt), /** Post-respawn bullet-cancel volume (playerStateSlotCooldown = 60). */
a(E, "BULLET_CANCEL_FRAMES", es), /** plyNNa.sht bombCount: every team restarts a life with 3 bombs. */
a(E, "INITIAL_BOMBS", 3), /** Respawn point: arcadeRegionSize.x / 2, arcadeRegionSize.y - 64. */
/**
 * 192 = the centre of the 384-wide playfield (`sim/Playfield.ts` RESPAWN_X). This
 * used to read 224, the centre of the retired 448-wide field, so the presentation
 * ship came back 32px right of where the sim put it.
 */
a(E, "RESPAWN_X", 192), a(E, "RESPAWN_Y", 384), /**
 * How far a volley lane may sit from the hitbox at the instant of firing.
 *
 * Retail fans a weapon out by angle rather than by moving the muzzle sideways, so
 * a volley always starts inside the ship silhouette. The launch points are not
 * recoverable from the decompile -- `PlayerRawShtFile` declares the whole first
 * 0x1c bytes of `plyNNa.sht` as `unknown_fields` (`Player.hpp:13-17`) -- so this
 * is an observed bound, and every lane is clamped to it rather than tuned to it.
 */
a(E, "MUZZLE_LIMIT", 12);
let jt = E;
const ct = {
  minX: -50,
  maxX: 450,
  minY: -50,
  maxY: 650
};
class Ki {
  constructor(t = {}) {
    a(this, "bullets", []);
    a(this, "bounds");
    /** Cap for the shared bullet free-list (0 = unlimited). */
    a(this, "maxPoolSize");
    /**
     * Aim provider for bullets carrying a homingTurn. The game layer points this at
     * the nearest live target so player homing shots track it frame by frame.
     */
    a(this, "homingAim", null);
    /** Debug counters (reported through getStats()). */
    a(this, "poolReused", 0);
    a(this, "poolAllocated", 0);
    this.bounds = {
      minX: t.minX ?? ct.minX,
      maxX: t.maxX ?? ct.maxX,
      minY: t.minY ?? ct.minY,
      maxY: t.maxY ?? ct.maxY
    }, this.maxPoolSize = t.maxPoolSize ?? 512;
  }
  /** Create a bullet from the shared module pool, reusing a dead instance when available. */
  createBullet(t = {}) {
    const e = nt(), s = Me(t);
    return nt() < e ? this.poolReused++ : this.poolAllocated++, s;
  }
  /** Return a dead bullet to the shared pool (double-release safe, respects the cap). */
  recycle(t) {
    ts(t, this.maxPoolSize);
  }
  add(...t) {
    for (const e of t)
      e.isAlive && this.bullets.push(e);
  }
  update(t) {
    for (let e = this.bullets.length - 1; e >= 0; e--) {
      const s = this.bullets[e];
      if (!s._eclSynced) {
        if (!s.isAlive) {
          this.bullets.splice(e, 1), this.recycle(s);
          continue;
        }
        this.steerHoming(s, t), s.update(t), (s.position.x < this.bounds.minX || s.position.x > this.bounds.maxX || s.position.y < this.bounds.minY || s.position.y > this.bounds.maxY) && (s.destroy(), this.bullets.splice(e, 1), this.recycle(s));
      }
    }
  }
  /**
   * Apply bounded homing steering before the polar integrator runs, so the new
   * heading is the one the frame actually travels along.
   */
  steerHoming(t, e) {
    if (t.homingTurn <= 0 || !this.homingAim || t.homingFrames > 0 && t.lifetime >= t.homingFrames) return;
    const s = this.homingAim(t);
    s && t.homeToward(Math.atan2(s.y - t.position.y, s.x - t.position.x), t.homingTurn * e);
  }
  clearAll(t) {
    const e = [];
    for (const s of this.bullets)
      !t || s.tag === t ? (s.destroy(), this.recycle(s)) : e.push(s);
    this.bullets = t ? e : [];
  }
  getBullets() {
    return this.bullets;
  }
  /**
   * Replace the bullet array with externally-managed bullets (ECL adapter).
   * The BulletSystem will render them but not update their physics.
   */
  syncFromEcl(t) {
    this.bullets = this.bullets.filter((e) => !e._eclSynced);
    for (const e of t)
      e._eclSynced = !0, this.bullets.push(e);
  }
  getCount() {
    return this.bullets.length;
  }
  /** Number of bullets currently held in the shared reuse pool. */
  get poolSize() {
    return nt();
  }
  getStats() {
    return {
      reused: this.poolReused,
      allocated: this.poolAllocated,
      poolSize: nt()
    };
  }
}
class Ts {
  constructor(t = 64) {
    /** Cell edge length in px (read-only; exposed for debug visualization). */
    a(this, "cellSize");
    a(this, "grid");
    this.cellSize = t, this.grid = /* @__PURE__ */ new Map();
  }
  hash(t, e) {
    const s = Math.floor(t / this.cellSize), i = Math.floor(e / this.cellSize);
    return `${s},${i}`;
  }
  clear() {
    this.grid.clear();
  }
  insert(t) {
    if (!t.isAlive) return;
    const e = t.getHitboxCenter(), s = this.hash(e.x, e.y);
    let i = this.grid.get(s);
    i || (i = /* @__PURE__ */ new Set(), this.grid.set(s, i)), i.add(t);
  }
  query(t) {
    const e = t.getHitboxCenter(), s = Math.floor(e.x / this.cellSize), i = Math.floor(e.y / this.cellSize), r = /* @__PURE__ */ new Set();
    for (let n = -1; n <= 1; n++)
      for (let l = -1; l <= 1; l++) {
        const h = `${s + n},${i + l}`, c = this.grid.get(h);
        if (c)
          for (const d of c)
            d !== t && d.isAlive && r.add(d);
      }
    return r;
  }
  /** Read-only traversal of occupied cells (key = "cx,cy"); for debug visualization only. */
  forEachCell(t) {
    for (const [e, s] of this.grid)
      t(e, s);
  }
  checkCollisions(t) {
    if (!t.isAlive || t.hitbox.radius <= 0) return [];
    const e = this.query(t), s = [], i = t.getHitboxCenter(), r = t.hitbox.radius;
    for (const n of e) {
      if (n.hitbox.radius <= 0) continue;
      const l = n.getHitboxCenter();
      Se(i, l) <= r + n.hitbox.radius && s.push(n);
    }
    return s;
  }
}
class Yi {
  constructor(t = 64) {
    a(this, "grid");
    /** Last list handed to update(); the grid is (re)built from it lazily. */
    a(this, "lastEntities", []);
    a(this, "dirty", !0);
    /** Number of real distance comparisons performed this frame (F12 metric). */
    a(this, "totalChecks", 0);
    this.grid = new Ts(t);
  }
  /**
   * Register the live entity set for this frame. The grid itself is rebuilt
   * lazily on the first query (once per update), so calling this before every
   * query is not required — but queries between two update() calls reuse the
   * grid built from the previous list.
   */
  update(t) {
    this.lastEntities = t, this.dirty = !0, this.totalChecks = 0;
  }
  /** Rebuild the grid from the last update() list if it is stale (no-op when fresh). */
  ensureGrid() {
    if (this.dirty) {
      this.grid.clear();
      for (const t of this.lastEntities)
        t.isAlive && this.grid.insert(t);
      this.dirty = !1;
    }
  }
  /** Cell edge length in px (read-only; exposed for debug visualization). */
  get cellSize() {
    return this.grid.cellSize;
  }
  /** Read-only traversal of occupied cells (key = "cx,cy"); for debug visualization only. */
  forEachCell(t) {
    this.ensureGrid(), this.grid.forEachCell(t);
  }
  matchesFilter(t, e) {
    return Array.isArray(e) ? e.includes(t) : e === t;
  }
  resolve(t) {
    if (!t.isAlive || t.hitbox.radius <= 0) return [];
    this.ensureGrid();
    const e = this.grid.query(t), s = [], i = t.getHitboxCenter(), r = t.hitbox.radius;
    for (const n of e) {
      if (n === t || !n.isAlive || n.hitbox.radius <= 0) continue;
      const l = n.getHitboxCenter(), h = l.x - i.x, c = l.y - i.y;
      this.totalChecks++;
      const d = h * h + c * c, u = r + n.hitbox.radius;
      d <= u * u && s.push({ entity: n, distance: Math.sqrt(d) });
    }
    return s;
  }
  /** Collisions of `entity` against candidates matching `tags`. */
  checkCollisions(t, e) {
    const s = this.resolve(t);
    return e ? s.filter((i) => this.matchesFilter(i.entity.tag, e)) : s;
  }
  /** Entities within `radius` px of `entity`, filtered by `tags` (used for graze). */
  queryNearby(t, e, s) {
    if (!t.isAlive || e <= 0) return [];
    this.ensureGrid();
    const i = this.grid.query(t), r = [], n = t.getHitboxCenter();
    for (const l of i) {
      if (l === t || !l.isAlive || s && !this.matchesFilter(l.tag, s)) continue;
      const h = l.getHitboxCenter(), c = h.x - n.x, d = h.y - n.y;
      this.totalChecks++;
      const u = Math.sqrt(c * c + d * d);
      u <= e && r.push({ entity: l, distance: u });
    }
    return r;
  }
}
const Ms = {
  up: ["ArrowUp", "KeyW"],
  down: ["ArrowDown", "KeyS"],
  left: ["ArrowLeft", "KeyA"],
  right: ["ArrowRight", "KeyD"],
  shoot: ["KeyZ", "Space"],
  bomb: ["KeyX"],
  slow: ["ShiftLeft", "ShiftRight"],
  pause: ["Escape"],
  skip: ["ControlLeft", "ControlRight"],
  debug: ["F12", "KeyP"],
  /** 碰撞网格可视化开关（票据 04 的 "D" 与 WASD 右移冲突，改用 G） */
  "debug-collision": ["KeyG"]
}, vs = {
  up: { axes: [{ index: 1, direction: -1 }], buttons: [12] },
  down: { axes: [{ index: 1, direction: 1 }], buttons: [13] },
  left: { axes: [{ index: 0, direction: -1 }], buttons: [14] },
  right: { axes: [{ index: 0, direction: 1 }], buttons: [15] },
  shoot: { buttons: [0] },
  // A
  bomb: { buttons: [1, 2] },
  // B / X
  slow: { buttons: [4, 6] },
  // LB / LT
  pause: { buttons: [9] }
  // Start
}, Cs = 3;
class Xi {
  constructor(t = Ms, e = vs) {
    a(this, "bindings");
    a(this, "gamepadBindings");
    a(this, "gamepadProvider");
    a(this, "rawKeysDown", /* @__PURE__ */ new Set());
    /** Codes pressed but never sampled as held (quick taps), expiring after PRESS_BUFFER_FRAMES. */
    a(this, "pressBuffer", /* @__PURE__ */ new Map());
    /** Actions whose buffered tap is being reported as a press this frame. */
    a(this, "bufferedPresses", /* @__PURE__ */ new Set());
    a(this, "frame", 0);
    a(this, "currentFrameDown", /* @__PURE__ */ new Set());
    a(this, "prevFrameDown", /* @__PURE__ */ new Set());
    a(this, "boundKeyDownHandler");
    a(this, "boundKeyUpHandler");
    a(this, "boundPointerDownHandler");
    a(this, "boundPointerMoveHandler");
    a(this, "boundPointerUpHandler");
    a(this, "boundPointerEnterHandler");
    a(this, "boundPointerLeaveHandler");
    /** True while a touch/pointer is dragging the player ship. */
    a(this, "isDragging", !1);
    /**
     * Opt-in mouse steering (US: 鼠标操作可通过选项开启). When enabled the ship
     * tracks the cursor without holding a button; when disabled only touch drag
     * steers, which is the default so desktop keyboard play is never hijacked.
     */
    a(this, "mouseControl", !1);
    /** True while the cursor is over the game element (only meaningful with mouseControl). */
    a(this, "pointerInside", !1);
    /** Pointer position in game coordinates (canvas-local, CSS-scale corrected). */
    a(this, "pointerPos", { x: 0, y: 0 });
    /** Element used to map screen pointer coords -> canvas coords. */
    a(this, "attachTarget");
    /** Game resolution — needed to undo the CSS scaling of the canvas (US#9). */
    a(this, "gameSize");
    this.bindings = { ...t }, this.gamepadBindings = e;
  }
  /**
   * Enable gamepad polling. By default reads `navigator.getGamepads()` each
   * `update()`; pass a provider to inject states (e.g. in tests).
   */
  enableGamepad(t) {
    this.gamepadProvider = t ?? (typeof navigator < "u" && typeof navigator.getGamepads == "function" ? () => Array.from(navigator.getGamepads()) : void 0);
  }
  /** Rebind a keyboard action at runtime (e.g. from a settings menu). */
  setKeyBinding(t, e) {
    this.bindings[t] = [...e];
  }
  /** Rebind a gamepad action at runtime. */
  setGamepadBinding(t, e) {
    e ? this.gamepadBindings[t] = e : delete this.gamepadBindings[t];
  }
  /** Current keyboard bindings (deep copy) — for rendering a settings screen. */
  getBindings() {
    const t = {};
    for (const [e, s] of Object.entries(this.bindings))
      t[e] = [...s];
    return t;
  }
  /** Safe viewport reference (undefined outside browsers, e.g. Vitest). */
  get viewport() {
    return typeof window < "u" ? window : void 0;
  }
  /**
   * 绑定输入监听。
   * - 传 `HTMLElement`（推荐：游戏容器/canvas）：键盘监听在 window 上生效，
   *   pointer/touch 拖动以该元素为坐标基准并启用。
   * - 传 `window` 或省略：仅键盘监听（兼容旧 API `attach(window)`）。
   * - `gameSize`：游戏内部分辨率（默认 640×480）。canvas 被 CSS 缩放时，
   *   指针坐标会按 rect/gameSize 比例换算回游戏坐标（US#9）。
   */
  attach(t, e) {
    const s = this.viewport;
    this.gameSize = e, t && typeof t.addEventListener == "function" && t !== s && (this.attachTarget = t), this.boundKeyDownHandler = (i) => {
      this.rawKeysDown.add(i.code), this.pressBuffer.set(i.code, this.frame);
    }, this.boundKeyUpHandler = (i) => {
      this.rawKeysDown.delete(i.code);
    }, s == null || s.addEventListener("keydown", this.boundKeyDownHandler), s == null || s.addEventListener("keyup", this.boundKeyUpHandler), this.enableGamepad(), this.attachTarget && (this.boundPointerDownHandler = (i) => {
      (i.pointerType === "touch" || i.button === 0) && this.pointerDown(i.clientX, i.clientY);
    }, this.boundPointerMoveHandler = (i) => {
      this.pointerMove(i.clientX, i.clientY);
    }, this.boundPointerUpHandler = () => {
      this.pointerUp();
    }, this.boundPointerEnterHandler = (i) => {
      this.mouseControl && (this.pointerInside = !0, this.pointerMove(i.clientX, i.clientY));
    }, this.boundPointerLeaveHandler = () => {
      this.pointerInside = !1;
    }, this.attachTarget.addEventListener("pointerdown", this.boundPointerDownHandler), this.attachTarget.addEventListener("pointerenter", this.boundPointerEnterHandler), this.attachTarget.addEventListener("pointerleave", this.boundPointerLeaveHandler), s == null || s.addEventListener("pointermove", this.boundPointerMoveHandler), s == null || s.addEventListener("pointerup", this.boundPointerUpHandler));
  }
  /**
   * 解绑输入监听。参数保留仅为兼容旧 API `detach(window)`。
   */
  detach(t) {
    const e = this.viewport;
    this.boundKeyDownHandler && (e == null || e.removeEventListener("keydown", this.boundKeyDownHandler)), this.boundKeyUpHandler && (e == null || e.removeEventListener("keyup", this.boundKeyUpHandler)), this.boundPointerDownHandler && this.attachTarget && this.attachTarget.removeEventListener("pointerdown", this.boundPointerDownHandler), this.boundPointerMoveHandler && (e == null || e.removeEventListener("pointermove", this.boundPointerMoveHandler)), this.boundPointerUpHandler && (e == null || e.removeEventListener("pointerup", this.boundPointerUpHandler)), this.boundPointerEnterHandler && this.attachTarget && this.attachTarget.removeEventListener("pointerenter", this.boundPointerEnterHandler), this.boundPointerLeaveHandler && this.attachTarget && this.attachTarget.removeEventListener("pointerleave", this.boundPointerLeaveHandler), this.pointerInside = !1, this.attachTarget = void 0;
  }
  /** Simulate a key press (sampled by the next update() call, like real keydown events). */
  simulateKeyDown(t) {
    this.rawKeysDown.add(t), this.pressBuffer.set(t, this.frame);
  }
  simulateKeyUp(t) {
    this.rawKeysDown.delete(t);
  }
  /** Begin a drag at the given viewport coordinates. */
  pointerDown(t, e) {
    this.isDragging = !0, this.pointerMove(t, e);
  }
  /** Toggle cursor steering on/off (driven by the in-game options menu). */
  setMouseControl(t) {
    this.mouseControl = t, t || (this.pointerInside = !1);
  }
  pointerMove(t, e) {
    if (!this.isDragging && !this.mouseControl) return;
    const s = this.attachTarget;
    if (s) {
      const i = s.getBoundingClientRect(), r = this.gameSize && i.width > 0 ? this.gameSize.width / i.width : 1, n = this.gameSize && i.height > 0 ? this.gameSize.height / i.height : 1;
      this.pointerPos = {
        x: (t - i.left) * r,
        y: (e - i.top) * n
      };
    } else
      this.pointerPos = { x: t, y: e };
  }
  pointerUp() {
    this.isDragging = !1;
  }
  /** True when a pointer device (touch drag or opt-in mouse) is steering the ship. */
  get isSteering() {
    return this.isDragging || this.mouseControl && this.pointerInside;
  }
  /** Current steering target in game coordinates, or null when no pointer is driving. */
  getPointerTarget() {
    return this.isSteering ? { ...this.pointerPos } : null;
  }
  refreshCurrentActions() {
    this.currentFrameDown.clear(), this.bufferedPresses.clear();
    for (const [t, e] of Object.entries(this.bindings))
      if (e.some((s) => this.rawKeysDown.has(s))) {
        this.currentFrameDown.add(t);
        for (const s of e) this.pressBuffer.delete(s);
      } else if (e.some((s) => this.pressBuffer.has(s))) {
        this.bufferedPresses.add(t);
        for (const s of e) this.pressBuffer.delete(s);
      }
    this.pollGamepad();
  }
  /**
   * Sample connected gamepads (via `navigator.getGamepads()` or an injected
   * provider) and merge pressed actions into the current frame state.
   * No-op when no provider is available (e.g. Node, or gamepad unsupported).
   */
  pollGamepad() {
    if (this.gamepadProvider)
      for (const t of Object.keys(this.gamepadBindings))
        this.isGamepadActionPressed(t) && this.currentFrameDown.add(t);
  }
  isGamepadActionPressed(t) {
    var i, r;
    const e = this.gamepadBindings[t];
    if (!e) return !1;
    const s = e.threshold ?? 0.5;
    for (const n of this.gamepadProvider())
      if (n && ((i = e.buttons) != null && i.some((l) => {
        var h;
        return (h = n.buttons[l]) == null ? void 0 : h.pressed;
      }) || (r = e.axes) != null && r.some(({ index: l, direction: h }) => h * (n.axes[l] ?? 0) >= s)))
        return !0;
    return !1;
  }
  update() {
    this.prevFrameDown = new Set(this.currentFrameDown), this.refreshCurrentActions(), this.frame++;
    for (const [t, e] of this.pressBuffer)
      this.frame - e >= Cs && this.pressBuffer.delete(t);
  }
  isKeyDown(t) {
    return this.currentFrameDown.has(t);
  }
  /** Currently-held actions (keyboard or gamepad) — for real-time input display. */
  getActiveActions() {
    return [...this.currentFrameDown];
  }
  getSnapshot() {
    return {
      actions: this.getActiveActions(),
      pointerPos: { ...this.pointerPos },
      isDragging: this.isDragging
    };
  }
  applySnapshot(t) {
    this.prevFrameDown = new Set(this.currentFrameDown), this.currentFrameDown = new Set(t.actions), this.pointerPos = { ...t.pointerPos }, this.isDragging = t.isDragging, this.bufferedPresses.clear(), this.frame++;
  }
  wasKeyPressed(t) {
    return this.bufferedPresses.has(t) ? !0 : this.currentFrameDown.has(t) && !this.prevFrameDown.has(t);
  }
  wasKeyReleased(t) {
    return !this.currentFrameDown.has(t) && this.prevFrameDown.has(t);
  }
  getMovementVector() {
    let t = 0, e = 0;
    if (this.isKeyDown("left") && (t -= 1), this.isKeyDown("right") && (t += 1), this.isKeyDown("up") && (e -= 1), this.isKeyDown("down") && (e += 1), t !== 0 && e !== 0) {
      const s = Math.SQRT1_2;
      return gt(t * s, e * s);
    }
    return gt(t, e);
  }
  /**
   * The four direction actions as the bit set `core/Movement` resolves.
   *
   * `getMovementVector` cancels opposite keys, which is the right answer for an
   * analogue stick and the wrong one for a keyboard: a player pinched against a
   * wall holds both horizontals, and a game that reads a grid wants a decision,
   * not a zero. This keeps the four keys visible.
   */
  get movementBits() {
    return (this.isKeyDown("up") ? st.up : 0) | (this.isKeyDown("down") ? st.down : 0) | (this.isKeyDown("left") ? st.left : 0) | (this.isKeyDown("right") ? st.right : 0);
  }
}
const ut = 640, Z = 480, $ = 384, tt = 448, at = 32, Nt = 16;
function Wi(o) {
  return o - at;
}
function qi(o) {
  return o - Nt;
}
function As(o, t) {
  let e = null, s = Number.POSITIVE_INFINITY;
  for (const [i, r] of Object.entries(t)) {
    const n = (r >> 16 & 255) - (o >> 16 & 255), l = (r >> 8 & 255) - (o >> 8 & 255), h = (r & 255) - (o & 255), c = n * n + l * l + h * h;
    c < s && (s = c, e = i);
  }
  return e;
}
const k = class k {
  constructor(t = k.ball) {
    a(this, "sprites", /* @__PURE__ */ new Map());
    a(this, "defaultSprite");
    /** sprite key -> texture shape (e.g. bullet_small -> ball). */
    a(this, "shapeByKey", /* @__PURE__ */ new Map());
    /** sprite key -> standalone texture name (player shots, entity sprites). */
    a(this, "textureByKey", /* @__PURE__ */ new Map());
    a(this, "bulletTexture", null);
    this.defaultSprite = t, this.register("bullet_small", k.ball), this.register("bullet_ring", k.ring), this.register("bullet_needle", k.needle), this.register("bullet_star", k.star), this.register("player_needle", k.needle), this.shapeByKey.set("bullet_small", "ball"), this.shapeByKey.set("bullet_ring", "ring"), this.shapeByKey.set("bullet_needle", "needle"), this.shapeByKey.set("bullet_star", "star"), this.shapeByKey.set("bullet_rice", "rice"), this.shapeByKey.set("bullet_orb", "orb"), this.shapeByKey.set("bullet_eye", "eye"), this.shapeByKey.set("bullet_seal", "seal"), this.shapeByKey.set("bullet_spark", "spark"), this.shapeByKey.set("bullet_koto", "koto"), this.shapeByKey.set("bullet_mouth", "mouth"), this.shapeByKey.set("bullet_laser", "laser"), this.shapeByKey.set("bullet_droplet", "droplet"), this.shapeByKey.set("bullet_crystal", "crystal"), this.shapeByKey.set("bullet_diamond", "diamond"), this.shapeByKey.set("bullet_pill", "pill"), this.shapeByKey.set("bullet_ghost", "ghost"), this.shapeByKey.set("bullet_soul", "soul"), this.shapeByKey.set("bullet_apple", "apple"), this.shapeByKey.set("bullet_homing", "homing");
  }
  register(t, e) {
    this.sprites.set(t, e);
  }
  /** Enable baked bullet textures (one PNG per shape x palette colour). */
  setBulletTextures(t) {
    this.bulletTexture = t;
  }
  /** Map a bullet `sprite` key onto a baked texture shape. */
  registerBulletShape(t, e) {
    this.shapeByKey.set(t, e);
  }
  /** Map a sprite key onto a single texture name (no colour ramp). */
  registerTexture(t, e) {
    this.textureByKey.set(t, e);
  }
  /**
   * Texture name for a bullet, or null when the procedural fallback should draw it.
   * Falls back to the palette's `master` entry so unknown colours still render.
   */
  bulletTextureKey(t, e) {
    if (!this.bulletTexture) return null;
    const s = this.shapeByKey.get(t);
    if (!s || !this.bulletTexture.shapes.includes(s)) return null;
    const i = As(e, this.bulletTexture.palette) ?? "master";
    return (this.bulletTexture.template ?? "bullet:{shape}:{color}").replace("{shape}", s).replace("{color}", i);
  }
  /** Standalone texture name registered for a sprite key. */
  textureKey(t) {
    return this.textureByKey.get(t);
  }
  has(t) {
    return this.sprites.has(t);
  }
  draw(t, e, s, i, r) {
    (this.sprites.get(e) ?? this.defaultSprite)(t, s, i, r);
  }
};
/** Classic glowing orb: white halo + colored core. */
a(k, "ball", (t, e, s, { color: i, radius: r, alpha: n = 1 }) => {
  t.circle(e, s, r + 1.5).fill({ color: 16777215, alpha: 0.5 * n }), t.circle(e, s, r).fill({ color: i, alpha: n });
}), /** Hollow ring danmaku (Demarcation-style boundary bullets). */
a(k, "ring", (t, e, s, { color: i, radius: r, alpha: n = 1 }) => {
  t.circle(e, s, r + 1.5).fill({ color: 16777215, alpha: 0.6 * n }), t.circle(e, s, r).fill({ color: i, alpha: n }), t.circle(e, s, Math.max(1, r * 0.45)).fill({ color: 1052696, alpha: n });
}), /** Elongated needle, oriented along `rotation` (velocity angle). */
a(k, "needle", (t, e, s, { color: i, radius: r, rotation: n = 0, alpha: l = 1 }) => {
  const h = r * 3, c = Math.max(1.5, r * 0.6), d = Math.cos(n), u = Math.sin(n);
  t.poly([
    { x: e + d * h - u * c, y: s + u * h + d * c },
    { x: e + d * h + u * c, y: s + u * h - d * c },
    { x: e - d * h + u * c, y: s - u * h - d * c },
    { x: e - d * h - u * c, y: s - u * h + d * c }
  ]).fill({ color: i, alpha: l });
}), /** 5-point star (fairy / item-flavored bullets). */
a(k, "star", (t, e, s, { color: i, radius: r, alpha: n = 1 }) => {
  const l = [];
  for (let h = 0; h < 10; h++) {
    const c = h % 2 === 0 ? r + 1.5 : r * 0.5, d = Math.PI / 5 * h - Math.PI / 2;
    l.push({ x: e + Math.cos(d) * c, y: s + Math.sin(d) * c });
  }
  t.poly(l).fill({ color: i, alpha: n });
});
let Lt = k;
const Ce = 8, v = {
  left: 64,
  top: 19,
  width: 320,
  height: 4,
  /** Life-pip row sits to the left of the bar: x 35..61, same 4px band. */
  pipLeft: 35,
  pipWidth: 26,
  /** Timer text origin, just past the right end of the bar. */
  timerX: 384,
  timerY: 16,
  /** bossUIOpacity ramps 4/255 per frame in both directions. */
  opacityStep: 4 / 255,
  /** bossLifeBarMaxSize easing rates from Gui::FUN_00435900. */
  riseStep: 0.01,
  fallStep: 0.02
}, Ae = 2105440, Is = 2105376, Jt = {
  normal: [6088959, 3117008],
  spell: [16769130, 16742972]
}, dt = [10539263, 10518783, 14713024, 16728128];
function Ps(o) {
  return o >> 2 & 4144959 | 0;
}
function Ut(o, t, e, s) {
  return { x: o, y: v.top, width: t, height: v.height, color: e, shade: s };
}
function Fs(o) {
  const t = Ie(o);
  return Ut(v.left, v.width * t, 16777215, Ae);
}
function Es(o, t, e) {
  const s = Ie(t);
  if (s <= 0) return [];
  const i = Pe(o), r = e ? Jt.spell : Jt.normal, n = [];
  for (let l = 0; l < i; l++) {
    const h = l / i;
    if (h >= s) break;
    const c = Math.min((l + 1) / i, s), d = r[l % r.length];
    n.push(
      Ut(
        v.left + h * v.width,
        (c - h) * v.width,
        d,
        Ps(d)
      )
    );
  }
  return n;
}
function Bs(o) {
  const t = Pe(o);
  if (t <= 0) return [];
  const e = t <= 5 ? 2 : 1, s = [];
  for (let i = 0; i < t; i++) {
    const r = v.pipLeft + i * v.pipWidth / t, n = v.pipLeft + (i + 1) * v.pipWidth / t - e, l = 16777215 - Math.floor(i * 255 / 9);
    s.push(Ut(r, Math.max(1, n - r), l, Is));
  }
  return s;
}
function _s(o) {
  return o >= 20 ? dt[0] : o >= 10 ? dt[1] : o >= 5 ? dt[2] : dt[3];
}
function ks(o) {
  const t = Math.max(0, Math.min(99, Math.floor(o)));
  return {
    x: v.timerX,
    y: v.timerY,
    text: t.toString().padStart(2, "0"),
    color: _s(o)
  };
}
function Ie(o) {
  return Math.max(0, Math.min(1, o));
}
function Pe(o) {
  return Math.max(0, Math.min(Ce, Math.floor(o) || 0));
}
class Ds {
  constructor() {
    a(this, "textures", /* @__PURE__ */ new Map());
  }
  async load(t, e) {
    try {
      const s = await Re.load(e);
      return this.textures.set(t, s), s;
    } catch {
      return null;
    }
  }
  async loadManifest(t = {}) {
    await Promise.all(Object.entries(t).map(([e, s]) => this.load(e, s)));
  }
  register(t, e) {
    this.textures.set(t, e);
  }
  /**
   * Drop a registered texture.
   *
   * Games use this when real assets replace a procedural placeholder: the
   * renderer already skips a layer whose texture is missing, so unregistering
   * is how the placeholder stops drawing.
   */
  unregister(t) {
    return this.textures.delete(t);
  }
  get(t) {
    return this.textures.get(t);
  }
  has(t) {
    return this.textures.has(t);
  }
  clear() {
    this.textures.clear();
  }
}
class N {
  constructor(t, e = "layer") {
    a(this, "container");
    a(this, "pool", []);
    a(this, "cursor", 0);
    this.container = new Y(), this.container.label = e, t.addChild(this.container);
  }
  begin() {
    this.cursor = 0;
  }
  /** Returns the sprite used for this slot, or null when nothing can be drawn. */
  draw(t) {
    if (!t.texture) return null;
    const e = this.acquire();
    if (e.texture = t.texture, e.anchor.set(t.anchorX ?? 0.5, t.anchorY ?? 0.5), e.position.set(t.x, t.y), e.rotation = t.rotation ?? 0, e.alpha = t.alpha ?? 1, e.visible = !0, t.tint !== void 0 && (e.tint = t.tint), t.width !== void 0 && t.height !== void 0)
      e.scale.set(t.width / e.texture.width, t.height / e.texture.height);
    else if (t.width !== void 0) {
      const s = t.width / e.texture.width;
      e.scale.set(s);
    } else
      e.scale.set(1);
    return e;
  }
  acquire() {
    let t = this.pool[this.cursor];
    return t || (t = new ft(), t.anchor.set(0.5), this.pool.push(t), this.container.addChild(t)), this.cursor++, t;
  }
  /** Hide pooled sprites this frame did not touch. */
  end() {
    for (let t = this.cursor; t < this.pool.length; t++)
      this.pool[t].visible && (this.pool[t].visible = !1);
  }
  get activeCount() {
    return this.cursor;
  }
  destroy() {
    this.pool.length = 0;
  }
}
const rt = "aFogDepth", Zt = (
  /* wgsl */
  `
            struct FogUniforms {
                uFogColor:vec4<f32>,
                uFogRange:vec4<f32>,
            }

            @group(3) @binding(0) var<uniform> fogUniforms : FogUniforms;
        `
), Rs = (
  /* wgsl */
  `
            let fogSpan = max(fogUniforms.uFogRange.y - fogUniforms.uFogRange.x, 0.0001);
            let fogAmount = clamp((vFogDepth - fogUniforms.uFogRange.x) / fogSpan, 0.0, 1.0)
                * fogUniforms.uFogRange.z;
            // Premultiplied space, so the fog term has to carry the fragment alpha
            // the same way the texel already does: a hole in a sheet must not fog
            // brighter than the scenery around it.
            outColor = vec4(
                mix(outColor.rgb, fogUniforms.uFogColor.rgb * outColor.a, fogAmount),
                outColor.a
            );
        `
), Ns = (
  /* glsl */
  `
            float fogSpan = max(uFogRange.y - uFogRange.x, 0.0001);
            float fogAmount = clamp((vFogDepth - uFogRange.x) / fogSpan, 0.0, 1.0) * uFogRange.z;
            outColor = vec4(mix(outColor.rgb, uFogColor.rgb * outColor.a, fogAmount), outColor.a);
        `
), Ls = {
  name: "fog-bit",
  vertex: {
    header: (
      /* wgsl */
      `
            ${Zt}
            @in ${rt}: f32;
            @out vFogDepth: f32;
        `
    ),
    main: (
      /* wgsl */
      `
            vFogDepth = ${rt};
        `
    )
  },
  fragment: {
    header: (
      /* wgsl */
      `
            ${Zt}
            @in vFogDepth: f32;
        `
    ),
    main: (
      /* wgsl */
      Rs
    )
  }
}, Gs = {
  name: "fog-bit",
  vertex: {
    header: (
      /* glsl */
      `
            in float ${rt};
            out float vFogDepth;
        `
    ),
    main: (
      /* glsl */
      `
            vFogDepth = ${rt};
        `
    )
  },
  fragment: {
    header: (
      /* glsl */
      `
            in float vFogDepth;
            uniform vec4 uFogColor;
            uniform vec4 uFogRange;
        `
    ),
    main: (
      /* glsl */
      Ns
    )
  }
};
function Hs() {
  return new Ye({
    uFogColor: { value: new Float32Array([0, 0, 0, 1]), type: "vec4<f32>" },
    uFogRange: { value: new Float32Array([0, 0, 0, 0]), type: "vec4<f32>" }
  });
}
function Os(o, t) {
  const e = o.uniforms.uFogRange;
  if (!t || !(t.far > t.near)) {
    e[0] = 0, e[1] = 0, e[2] = 0, o.update();
    return;
  }
  const s = o.uniforms.uFogColor;
  s[0] = (t.color >> 16 & 255) / 255, s[1] = (t.color >> 8 & 255) / 255, s[2] = (t.color & 255) / 255, s[3] = 1, e[0] = t.near, e[1] = t.far, e[2] = 1, o.update();
}
function Vs(o, t) {
  return new Ne({
    gpuProgram: Ve({
      name: "fog-mesh-gpu",
      bits: [Ue, ze, Ke, Ls]
    }),
    glProgram: Le({
      name: "fog-mesh-gl",
      bits: [Ge, He, Oe, Gs]
    }),
    // The keys are the WGSL binding names, which is how `Shader` sorts each
    // resource into its group. `textureUniforms` is the page's pixel-to-0..1
    // matrix, normally applied by the mesh adaptor that a custom shader replaces.
    resources: {
      fogUniforms: t,
      uTexture: o.source,
      uSampler: o.source.style,
      textureUniforms: {
        uTextureMatrix: { type: "mat3x3<f32>", value: o.textureMatrix.mapCoord }
      }
    }
  });
}
const Et = 32, Us = [0, 1, 2, 0, 2, 3], et = 48;
class zs {
  constructor(t, e = {}) {
    a(this, "container");
    a(this, "options");
    /** Insertion order is draw order, so buckets appear in the order the stage emits them. */
    a(this, "buckets", /* @__PURE__ */ new Map());
    a(this, "live", /* @__PURE__ */ new Set());
    this.container = t, this.options = e;
  }
  /** Begin a frame: buffers are kept, only the fill counters reset. */
  begin() {
    this.live.clear();
    for (const t of this.buckets.values()) t.count = 0;
  }
  push(t) {
    var l;
    if (!(t.alpha > 0)) return;
    const e = Math.min(Et, Math.max(1, Math.round(t.alpha * Et))), s = !!t.depth && !!this.options.fogShader, i = t.page + ":" + e + ":" + (t.additive ? "a" : "n") + (s ? ":f" : ""), r = this.ensure(i, t.texture, e / Et, !!t.additive, s);
    this.live.add(i), r.count >= r.capacity && this.grow(r);
    const n = r.count * 4;
    for (let h = 0; h < 8; h += 2) {
      const c = n * 2 + h / 2 * 2;
      r.positions[c] = t.screen[h], r.positions[c + 1] = t.screen[h + 1], r.uvs[c] = t.uv[h] * r.invU, r.uvs[c + 1] = t.uv[h + 1] * r.invV;
    }
    if (r.depths)
      for (let h = 0; h < 4; h++)
        r.depths[n + h] = ((l = t.depth) == null ? void 0 : l[h]) ?? 0;
    for (let h = 0; h < 6; h++)
      r.indices[r.count * 6 + h] = n + Us[h];
    r.count++;
  }
  /** Publish the frame: slots past the last quad collapse to zero area. */
  end() {
    var t;
    for (const [e, s] of this.buckets) {
      const i = s.count > 0 && this.live.has(e);
      s.mesh.visible = i, s.count > s.written && (s.written = s.count);
      for (let r = s.count; r < s.written; r++) {
        const n = r * 4;
        for (let l = 0; l < 6; l++) s.indices[r * 6 + l] = n;
      }
      i && (s.geometry.attributes.aPosition.buffer.update(), s.geometry.attributes.aUV.buffer.update(), (t = s.depthBuffer) == null || t.update(), s.geometry.indexBuffer.update());
    }
  }
  /** Tear every mesh down; used when the stage pack changes. */
  clear() {
    for (const t of this.buckets.values())
      this.container.removeChild(t.mesh), t.geometry.destroy();
    this.buckets.clear(), this.live.clear();
  }
  get bucketCount() {
    return this.live.size;
  }
  get quadCount() {
    var e;
    let t = 0;
    for (const s of this.live) t += ((e = this.buckets.get(s)) == null ? void 0 : e.count) ?? 0;
    return t;
  }
  ensure(t, e, s, i, r) {
    const n = this.buckets.get(t);
    if (n) return n;
    const l = new Xe({
      positions: new Float32Array(et * 8),
      uvs: new Float32Array(et * 8),
      indices: this.degenerateIndices(et)
    });
    l.batchMode = "batch";
    let h = null, c = null, d;
    if (r) {
      const g = this.options.fogShader;
      if (!g) throw new Error("QuadLayer: a fogged quad needs a fogShader");
      h = new Float32Array(et * 4), c = new We({
        data: h,
        label: "quad-layer-fog-depth",
        usage: Xt.VERTEX | Xt.COPY_DST
      }), l.addAttribute(rt, {
        buffer: c,
        format: "float32",
        stride: 4,
        offset: 0
      }), l.batchMode = "no-batch", d = g(e);
    }
    const u = new qe({ geometry: l, texture: e, shader: d, label: "quad-layer" });
    u.alpha = s, u.blendMode = i ? "add" : "normal", this.container.addChild(u);
    const m = {
      mesh: u,
      geometry: l,
      positions: l.positions,
      uvs: l.uvs,
      indices: l.indices,
      depths: h,
      depthBuffer: c,
      count: 0,
      written: 0,
      capacity: et,
      invU: 1 / (e.source.width || 1),
      invV: 1 / (e.source.height || 1)
    };
    return this.buckets.set(t, m), m;
  }
  grow(t) {
    const e = t.capacity * 2, s = new Float32Array(e * 8);
    s.set(t.positions.subarray(0, t.count * 8));
    const i = new Float32Array(e * 8);
    i.set(t.uvs.subarray(0, t.count * 8));
    const r = this.degenerateIndices(e);
    if (r.set(t.indices.subarray(0, t.count * 6)), t.geometry.positions = s, t.geometry.uvs = i, t.geometry.indices = r, t.positions = s, t.uvs = i, t.indices = r, t.depths && t.depthBuffer) {
      const n = new Float32Array(e * 4);
      n.set(t.depths.subarray(0, t.count * 4)), t.depthBuffer.data = n, t.depths = n;
    }
    t.capacity = e, t.written = e;
  }
  /** Every slot starts as a zero-area triangle so unused room draws nothing. */
  degenerateIndices(t) {
    const e = new Uint32Array(t * 6);
    for (let s = 0; s < t; s++)
      for (let i = 0; i < 6; i++) e[s * 6 + i] = s * 4;
    return e;
  }
}
const te = ["main", "left", "right"], Ks = { normal: "", slow: "s:" };
class Ys {
  constructor(t, e = "main") {
    a(this, "group");
    a(this, "index", 0);
    a(this, "timer", 0);
    a(this, "loop", !0);
    a(this, "steady", "main");
    a(this, "pending", null);
    a(this, "transition", null);
    a(this, "frame", 0);
    a(this, "mirror", !1);
    a(this, "pose", "normal");
    this.anim = t, this.group = t[e] ? e : "main", this.loop = te.includes(this.group), this.transition = this.loop ? null : this.group;
    const s = this.def(this.group);
    this.frame = (s == null ? void 0 : s.frames[0]) ?? 0, this.mirror = (s == null ? void 0 : s.mirror) ?? !1;
  }
  /** Current texture frame index inside the group. */
  get frameIndex() {
    return this.frame;
  }
  /** True when the frame must be drawn horizontally flipped. */
  get flipped() {
    return this.mirror;
  }
  /** Name of the group currently playing. */
  get currentGroup() {
    return this.group;
  }
  /** True while a one-shot transition clip is running. */
  get isTransitioning() {
    return this.transition !== null;
  }
  /** Force a group, clearing any queued direction change. */
  setGroup(t) {
    !this.def(t) || t === this.group || (this.pending = null, this.play(t, te.includes(t)));
  }
  /**
   * Switch between the upright and the 低速 stance.
   *
   * Retail answers a focus press with `SetAndExecuteScriptIdx(vm, 5)` and a release
   * with `SetAndExecuteScriptIdx(vm, 0)` (`Player.cpp:696-703, 760-767`): the ship
   * jumps straight to the other stance's *upright* clip and keeps it until the
   * horizontal velocity changes again, because lean clips are only ever armed on a
   * velocity edge. That is why sliding sideways while pressing Shift starts upright.
   */
  setPose(t) {
    t !== this.pose && (this.pose = t, this.steady = "main", this.pending = null, this.play("main", !0));
  }
  /**
   * Aim at a horizontal velocity. Dead zone keeps an idle character on the
   * upright bob instead of flickering between lean frames.
   */
  setDirection(t, e = 0.08) {
    const s = Math.max(0.05, e), i = t > s ? "right" : t < -s ? "left" : "main";
    i !== this.steady && (this.transition ? this.pending = i : this.startTransition(this.steady, i));
  }
  startTransition(t, e) {
    this.steady = e, this.pending = null, e === "main" ? this.play(t + "2main", !1) : t === "main" ? this.play("main2" + e, !1) : this.play(t + "2main", !1);
  }
  play(t, e) {
    const s = this.def(t);
    if (!s || !s.frames.length) {
      this.recover(this.steady);
      return;
    }
    this.group = t, this.index = 0, this.timer = 0, this.loop = e, this.transition = e ? null : t, this.frame = s.frames[0], this.mirror = s.mirror;
  }
  /**
   * Park the player on a looping pose after a missing or degenerate clip.
   *
   * `wanted` keeps the visual facing the direction the ship is actually
   * travelling; without it a bank that lacks lean clips would flicker back to
   * upright on every frame that the missing group got selected.
   */
  recover(t = "main") {
    var i;
    const e = (i = this.def(t)) != null && i.frames.length ? t : "main";
    this.group = e, this.steady = e, this.index = 0, this.timer = 0, this.loop = !0, this.transition = null, this.pending = null;
    const s = this.def(e);
    this.frame = (s == null ? void 0 : s.frames[0]) ?? 0, this.mirror = (s == null ? void 0 : s.mirror) ?? !1;
  }
  /** Advance by whole game frames (Taisei's animator is frame based, not time based). */
  update(t = 1) {
    const e = this.def(this.group);
    if (!e || e.frames.length === 0) {
      this.recover(this.steady);
      return;
    }
    if (this.frame = e.frames[Math.min(this.index, e.frames.length - 1)], this.mirror = e.mirror, e.frames.length < 2) {
      this.transition && this.onTransitionEnd();
      return;
    }
    for (this.timer += t; this.timer >= e.delay; ) {
      if (this.timer -= e.delay, this.index += 1, this.index >= e.frames.length)
        if (this.loop)
          this.index = 0;
        else {
          this.index = e.frames.length - 1, this.onTransitionEnd();
          return;
        }
      this.frame = e.frames[this.index], this.mirror = e.mirror;
    }
  }
  onTransitionEnd() {
    const t = this.transition;
    if (this.transition = null, this.pending && this.pending !== this.steady && (this.steady = this.pending), this.pending = null, this.steady === "main") {
      this.play("main", !0);
      return;
    }
    if (t !== "main2" + this.steady && this.def("main2" + this.steady)) {
      this.play("main2" + this.steady, !1);
      return;
    }
    this.play(this.steady, !0);
  }
  /**
   * Resolve a group name against the current stance.
   *
   * Banks that never authored a 低速 family fall back to the plain names, so the
   * vendored Taisei ships keep animating exactly as before.
   */
  key(t) {
    const e = Ks[this.pose];
    return e && this.anim[e + t] ? e + t : t;
  }
  /** Definition for a group name, honouring the current stance. */
  def(t) {
    return this.anim[this.key(t)];
  }
}
const ee = at + $, pt = 32, q = { w: 128, h: 16 }, Xs = 432, G = 488, Ws = 13, se = 16, R = {
  hiscore: 40,
  score: 56,
  player: 88,
  spell: 104,
  power: 136,
  graze: 152,
  point: 168,
  time: 184
}, ie = { x: 480, y: 208 }, ae = { x: 552, y: 200 }, qs = { x: 528, y: 320, r: 40 }, ot = 12, re = (o) => {
  const t = Math.min(ot, Math.max(0, o)) / ot;
  return Math.PI * 2 * t + Math.PI;
}, Qs = (o) => {
  const t = Math.min(ot, Math.max(0, Math.trunc(o)));
  return Math.floor(t / 2) + ":" + (t % 2 ? "30" : "00");
}, Bt = { x: G, y: R.power, h: 16 }, oe = 8, $s = 60, js = 0.5, Fe = 10, ne = 80, Js = 208, C = {
  x: at,
  y: 449,
  w: 128,
  /** Half-travel of the cursor and the two limit icons, in pixels. */
  span: 56,
  cursorY: 453,
  cursorW: 8,
  cursorH: 12,
  iconSize: 16
}, Gt = (o) => "hud:glyph:" + o, Zs = (o) => "hud:label:" + o, he = (o) => "hud:pip:" + o, _t = (o) => "hud:plate:" + o, mt = (o) => "hud:gauge:" + o, ti = (o) => "hud:badge:" + o, ei = (o) => "hud:popup:" + o, si = Gt(48), Qi = 4294967040, le = 4294967295, $i = 16772992, ji = 4294951072, ce = 48, ii = [0, 11, 21], ai = 52, ri = 56, kt = 1024, ue = 4096;
class Ht {
  constructor() {
    a(this, "pool", Array.from({ length: ce }, () => ({
      inUse: !1,
      x: 0,
      y: 0,
      digits: [],
      color: le,
      timer: 0,
      scale: 1
    })));
    a(this, "cursor", 0);
  }
  /**
   * Float `value` over (x, y). A negative value is the shot-level-up star rather than
   * a number, which is exactly how `Item::CollectPowerSmall` asks for it.
   *
   * `scale` doubles the whole run, which is how the card-capture totals read bigger
   * than a pickup (`AsciiManager::SetScale` before `CreateTimePopup`).
   */
  spawn(t, e, s, i = le, r = 1) {
    const n = this.pool[this.cursor];
    this.cursor = (this.cursor + 1) % ce, n.inUse = !0, n.x = t, n.y = e, n.color = i, n.timer = 0, n.scale = r > 0 ? r : 1, n.digits = s < 0 ? [Fe] : s === 0 ? [0] : (() => {
      const l = [];
      let h = s;
      for (; h > 0; )
        l.push(h % 10), h = Math.floor(h / 10);
      return l;
    })();
  }
  /** Rise every live popup and retire the ones that have run out their 60 frames. */
  update() {
    for (const t of this.pool)
      t.inUse && (t.y -= js, t.timer++, t.timer > $s && (t.inUse = !1));
  }
  /** Bank index for a popup age, matching the three sprite ranges in `DrawPopups`. */
  static bankFor(t) {
    return t < ai ? 0 : t < ri ? 1 : 2;
  }
  /**
   * `AsciiManager.cpp:1615-1629`: distance from the ship sets opacity, so a popup that
   * spawns on top of the player is deliberately faint and brightens as it drifts away.
   */
  static alphaFor(t, e, s, i) {
    const r = s - t, n = i - e, l = r * r + n * n;
    return l > ue ? Js : l > kt ? (l - kt << 7) / (ue - kt) + ne | 0 : ne;
  }
  /** Canvas-space views for this frame; (offsetX, offsetY) maps playfield to canvas. */
  view(t, e, s, i) {
    const r = [];
    for (const n of this.pool)
      n.inUse && r.push({
        x: n.x + s,
        y: n.y + i,
        digits: n.digits,
        color: n.color,
        bank: Ht.bankFor(n.timer),
        alpha: Ht.alphaFor(n.x, n.y, t, e) / 255,
        scale: n.scale
      });
    return r;
  }
  get activeCount() {
    let t = 0;
    for (const e of this.pool) e.inUse && t++;
    return t;
  }
  reset() {
    for (const t of this.pool) t.inUse = !1;
    this.cursor = 0;
  }
}
const oi = (o, t) => o === Fe && t > 0 ? o : o + ii[t], Q = (o) => o.alpha ?? 1, z = "★", I = { anchorX: 0, anchorY: 0 }, ni = 16773312, K = class K {
  constructor() {
    a(this, "app");
    a(this, "gameContainer");
    a(this, "hudContainer");
    a(this, "debugContainer");
    a(this, "bulletGraphics");
    a(this, "entityGraphics");
    /** Named procedural sprites; renderer draws bullets by `Bullet.sprite` key. */
    a(this, "sprites", new Lt());
    a(this, "assets", new Ds());
    a(this, "hudGraphics");
    a(this, "debugGraphics");
    a(this, "backgroundGraphics");
    a(this, "playerSprite");
    a(this, "scoreText");
    a(this, "hiScoreText");
    a(this, "livesText");
    a(this, "bombsText");
    a(this, "powerText");
    a(this, "grazeText");
    a(this, "stageText");
    a(this, "timeText");
    /** Which half of the team is flying right now (永夜抄 focus switch). */
    a(this, "memberText");
    a(this, "spellNameText");
    a(this, "spellTimerText");
    a(this, "spellCapturedText");
    a(this, "centerBannerText");
    a(this, "debugText");
    a(this, "width");
    a(this, "height");
    a(this, "pauseOverlay");
    a(this, "pauseText");
    /**
     * Playfield rect inside the 640x480 canvas; everything else is furniture.
     *
     * 永夜抄 runs its logic on a 384x448 field centred in the left of a 640x480
     * window, so `gameContainer` is translated by (x, y) and every world entity
     * draws in raw 0..384 / 0..448 script coordinates.
     */
    a(this, "playfield", {
      x: at,
      y: Nt,
      width: $,
      height: tt
    });
    a(this, "rightPanelX", 460);
    a(this, "entityLayer");
    /** ECL 114/115 beams, drawn under the bullets that fly over them. */
    a(this, "laserLayer");
    a(this, "bullets");
    a(this, "playerShots");
    a(this, "fx");
    /** Additive layer the spell cards paint their art into. */
    a(this, "bombGraphics");
    a(this, "bgSky");
    a(this, "bgMid");
    a(this, "bgNear");
    /** Meshes for a game-authored 3D backdrop, plus the wipe that hides it. */
    a(this, "backdropLayer");
    a(this, "backdropQuads");
    a(this, "backdropFade");
    /**
     * The two halves of a game's screen wash: a colour plate under every sprite, and a
     * square over them. Danmaku games drive these from their bomb cards, where the
     * plate floods the backdrop and the square whites out the field, but nothing about
     * them is game-specific.
     */
    a(this, "washPlate");
    a(this, "washFlash");
    /**
     * One fog block for the whole layer, shared by reference with every fogged bucket,
     * so `drawBackdrop` publishes a frame's ramp once. Built on demand: a game with no
     * 3D backdrop never allocates one, and a renderer under test never has to mock it.
     */
    a(this, "fogBlock", null);
    a(this, "frameSprite");
    a(this, "panelSprite");
    /** Panel-native status art (portrait, 妖率計) drawn above the panel plate. */
    a(this, "statusGraphics");
    /** Stance the ship is drawn in; `render` refreshes it from the environment. */
    a(this, "playerPose", "normal");
    a(this, "bannerSprite");
    /**
     * Card-owner portrait for the 永夜抄 cut-in: the boss's art slides in from the
     * left when it declares a card, the player's from the right when a spell is
     * spent. The texture is whatever key the game put on `hud.spellCutIn`.
     */
    a(this, "cutInSprite");
    /** Upstream 'Enemy' banner shown when a boss enters. */
    a(this, "bossWarningSprite");
    /** Retail-style boss life gauge: shaded rects plus a two-digit timer. */
    a(this, "bossGaugeGraphics");
    a(this, "bossTimerText");
    a(this, "bossSprite");
    /** Rotating spell-card circle + ground shadow, both real Taisei art. */
    a(this, "spellCircle");
    a(this, "bossShadow");
    /** Hitbox dot and swap flourish: always composited above every sprite. */
    a(this, "hitboxGraphics");
    /** The retail 判定点光环 (effect template 22), painted just below `hitboxGraphics`. */
    a(this, "hitboxMarker");
    /** The live glow handed in by the game layer, or null while none is on screen. */
    a(this, "hitboxGlow", null);
    a(this, "playfieldMask");
    /**
     * The standing-down team member, drawn as a portrait in the right panel.
     * Retail never puts the sub-character on the playfield, and stacking it under
     * the flying ship is what turned the two into one muddy silhouette.
     */
    a(this, "partnerSprite");
    /** Pooled heart / star icons for the lives and spell rows. */
    a(this, "hudIcons");
    /**
     * Pooled sprites for the original bitmap HUD: `front.anm` panel plates and labels,
     * `ascii.anm` digits, the 残机/灵击 stars and the 妖率計. Drawn last in the HUD so
     * nothing of the placeholder layer can bleed through it.
     */
    a(this, "hudBitmap");
    /**
     * Floating score digits. Kept in a layer of their own above `hudBitmap` because
     * `AsciiManager::DrawPopups` runs after `Gui::DrawGameScene`'s panel strips, and the
     * numbers have to read over the plate rather than under it.
     */
    a(this, "hudPopups");
    /** The power meter's fill, printed under the bitmap digits. */
    a(this, "powerBar");
    /** The 夜時計: its dial and its hand are redrawn every frame. */
    a(this, "nightClockFace");
    a(this, "nightClockHand");
    /**
     * Latched once the original panel art lands. The registration is asynchronous, so a
     * negative probe must never stick -- caching `false` on frame 0 would keep the
     * placeholder panel on screen forever.
     */
    a(this, "hudArtReady", !1);
    a(this, "spellCircleAngle", 0);
    a(this, "enemySprites", /* @__PURE__ */ new Map());
    a(this, "itemLayer");
    a(this, "itemSprites", /* @__PURE__ */ new Map());
    /** How many sprites the last frame actually drew, for `spriteAudit`. */
    a(this, "drawnEnemies", 0);
    a(this, "drawnItems", 0);
    a(this, "theme");
    a(this, "scroll", 0);
    /** Animated sprite sheets supplied by the game layer (real Taisei art). */
    a(this, "sheets", /* @__PURE__ */ new Map());
    /**
     * Animation clocks are keyed per sprite *and* per slot. Keeping one player
     * instance per (sprite, slot) pair is what stops a fallback swap from
     * restarting the clock: the old single-slot-per-sprite map re-created the
     * player every time a sheet missed a frame, which made the ship snap back to
     * frame 0 and read as a twitch.
     */
    a(this, "anims", /* @__PURE__ */ new WeakMap());
    /** Slot most recently drawn by each sprite, for the debug overlay. */
    a(this, "lastSlot", /* @__PURE__ */ new WeakMap());
    /** Slots that failed a frame lookup; retired so fallback art stays stable. */
    a(this, "brokenSheets", /* @__PURE__ */ new Set());
    /**
     * Last frame's ship animation choice, kept for the dev mirror only. It is the
     * one place that can say which group the lean machine actually settled on, so
     * a "the ship twitches by itself" report can be read instead of guessed at.
     */
    a(this, "playerAnimDebug", "");
    /** Target ship width in playfield pixels. */
    a(this, "playerScale", 46);
    a(this, "playerSkin");
    a(this, "bombFlash", 0);
    /**
     * Tint of the running bomb flash. 永夜抄 gives every spell card its own
     * colour (`BombSpec.accent`), and the flash is the one cue that reads as
     * "whose card this was" before the cut-in finishes; a fixed white made all
     * sixteen cards look like the same effect.
     */
    a(this, "bombFlashTint", 16777215);
    /**
     * `ScreenEffect::RegisterChain(FULL_FADE_OUT, ticks, colour, …)`
     * (`Gui.cpp:876-879`): a full-screen quad whose alpha climbs from 0 to 1 as the
     * countdown runs, washing the whole picture into `screenFadeTint`.
     */
    a(this, "screenFadeFrames", 0);
    a(this, "screenFadeTotal", 0);
    a(this, "screenFadeTint", 16777215);
    a(this, "screenFade");
    a(this, "pendingFx", []);
    this.app = new Qe(), this.gameContainer = new Y(), this.hudContainer = new Y(), this.debugContainer = new Y(), this.theme = "forestNight", this.playerSkin = "taisei", this.backgroundGraphics = new A(), this.gameContainer.addChild(this.backgroundGraphics), this.bgSky = new N(this.gameContainer, "bg-sky"), this.bgMid = new N(this.gameContainer, "bg-mid"), this.bgNear = new N(this.gameContainer, "bg-near"), this.backdropLayer = new Y(), this.gameContainer.addChild(this.backdropLayer), this.backdropQuads = new zs(this.backdropLayer, {
      fogShader: (e) => Vs(e, this.fog())
    }), this.backdropFade = new A(), this.gameContainer.addChild(this.backdropFade), this.washPlate = new A(), this.gameContainer.addChild(this.washPlate), this.frameSprite = D(0, 0), this.gameContainer.addChild(this.frameSprite), this.spellCircle = D(), this.bossShadow = D(), this.gameContainer.addChild(this.spellCircle), this.gameContainer.addChild(this.bossShadow), this.entityLayer = new Y(), this.gameContainer.addChild(this.entityLayer), this.itemLayer = new Y(), this.gameContainer.addChild(this.itemLayer), this.entityGraphics = new A(), this.gameContainer.addChild(this.entityGraphics), this.bulletGraphics = new A(), this.gameContainer.addChild(this.bulletGraphics), this.partnerSprite = D(), this.playerSprite = D(), this.gameContainer.addChild(this.playerSprite), this.bossSprite = D(), this.gameContainer.addChild(this.bossSprite), this.laserLayer = new N(this.gameContainer, "lasers"), this.bullets = new N(this.gameContainer, "bullets"), this.playerShots = new N(this.gameContainer, "shots"), this.fx = new N(this.gameContainer, "fx"), this.bombGraphics = new A(), this.bombGraphics.blendMode = "add", this.gameContainer.addChild(this.bombGraphics), this.hitboxMarker = D(), this.hitboxMarker.blendMode = "normal", this.gameContainer.addChild(this.hitboxMarker), this.hitboxGraphics = new A(), this.gameContainer.addChild(this.hitboxGraphics), this.washFlash = new A(), this.gameContainer.addChild(this.washFlash), this.playfieldMask = new A().rect(0, 0, $, tt).fill({ color: 16777215 }), this.gameContainer.addChild(this.playfieldMask), this.gameContainer.mask = this.playfieldMask, this.hudGraphics = new A(), this.hudContainer.addChild(this.hudGraphics), this.panelSprite = D(0, 0), this.bossGaugeGraphics = new A(), this.bossTimerText = new F({
      text: "",
      style: new O({
        fontFamily: "Consolas, monospace",
        fontSize: 16,
        fontWeight: "bold",
        fill: 10539263
      })
    }), this.hudContainer.addChild(this.panelSprite), this.hudContainer.addChild(this.partnerSprite), this.statusGraphics = new A(), this.hudContainer.addChild(this.statusGraphics), this.hudContainer.addChild(this.bossGaugeGraphics), this.hudContainer.addChild(this.bossTimerText);
    const t = new O({
      fontFamily: "Consolas, monospace",
      fontSize: 14,
      fill: 16777215,
      fontWeight: "bold",
      dropShadow: { alpha: 0.8, angle: 45, blur: 2, color: 0, distance: 2 }
    });
    this.scoreText = new F({ text: "Score: 0000000000", style: t }), this.hiScoreText = new F({ text: "HiScore: 000000000 0", style: t }), this.livesText = new F({ text: "Player: " + z + z + z, style: t }), this.bombsText = new F({ text: "Spell:  " + z + z + z, style: t }), this.powerText = new F({ text: "Power:  128 / 128", style: t }), this.grazeText = new F({ text: "Graze:  0", style: t }), this.stageText = new F({ text: "Stage 1 - Normal", style: t }), this.timeText = new F({ text: "Time: night", style: t }), this.memberText = new F({ text: "Member: Reimu A", style: t });
    for (const e of [
      this.scoreText,
      this.hiScoreText,
      this.livesText,
      this.bombsText,
      this.powerText,
      this.grazeText,
      this.stageText,
      this.timeText,
      this.memberText
    ])
      this.hudContainer.addChild(e);
    this.hudIcons = new N(this.hudContainer, "hud-icons"), this.powerBar = new A(), this.hudContainer.addChild(this.powerBar), this.nightClockFace = new A(), this.nightClockHand = new A(), this.hudContainer.addChild(this.nightClockFace), this.hudContainer.addChild(this.nightClockHand), this.hudBitmap = new N(this.hudContainer, "hud-bitmap"), this.hudPopups = new N(this.hudContainer, "hud-popups"), this.hudContainer.addChild(this.partnerSprite), this.spellNameText = new F({
      text: "",
      style: new O({
        fontFamily: "serif, sans-serif",
        fontSize: 18,
        fill: 16766720,
        fontWeight: "bold",
        stroke: { color: 2228224, width: 3 }
      })
    }), this.spellTimerText = new F({
      text: "",
      style: new O({
        fontFamily: "Consolas, monospace",
        fontSize: 22,
        fill: 16729156,
        fontWeight: "bold",
        stroke: { color: 0, width: 3 }
      })
    }), this.centerBannerText = new F({
      text: "",
      style: new O({
        fontFamily: "sans-serif",
        fontSize: 24,
        fill: 16777215,
        fontWeight: "bold",
        stroke: { color: 12852794, width: 4 }
      })
    }), this.spellCapturedText = new F({
      text: "CAPTURED",
      style: new O({
        fontFamily: "sans-serif",
        fontSize: 15,
        fill: 7143306,
        fontWeight: "bold",
        stroke: { color: 8714, width: 3 }
      })
    }), this.bannerSprite = D(), this.hudContainer.addChild(this.bannerSprite), this.cutInSprite = D(), this.hudContainer.addChild(this.cutInSprite), this.bossWarningSprite = D(), this.hudContainer.addChild(this.bossWarningSprite), this.hudContainer.addChild(this.spellNameText), this.hudContainer.addChild(this.spellTimerText), this.hudContainer.addChild(this.spellCapturedText), this.hudContainer.addChild(this.centerBannerText), this.debugGraphics = new A(), this.debugText = new F({
      text: "",
      style: new O({ fontFamily: "Consolas, monospace", fontSize: 12, fill: 65416 })
    }), this.debugContainer.addChild(this.debugGraphics), this.debugContainer.addChild(this.debugText), this.pauseOverlay = new A(), this.screenFade = new A(), this.screenFade.visible = !1, this.pauseText = new F({
      text: "",
      style: new O({
        fontFamily: "sans-serif",
        fontSize: 30,
        fill: 16777215,
        fontWeight: "bold",
        stroke: { color: 0, width: 4 }
      })
    }), this.pauseOverlay.visible = !1, this.pauseText.visible = !1, this.pauseText.anchor.set(0.5, 0.5), this.width = ut, this.height = Z;
  }
  async init(t) {
    this.width = t.width ?? ut, this.height = t.height ?? Z, this.theme = t.theme ?? this.theme, this.playerSkin = t.playerSkin ?? this.playerSkin, await this.assets.loadManifest(t.assetManifest), await this.app.init({
      width: this.width,
      height: this.height,
      backgroundColor: 855318,
      antialias: !0,
      resolution: window.devicePixelRatio || 1,
      autoDensity: !0,
      preference: t.backend
    }), t.container.appendChild(this.app.canvas), this.app.stage.addChild(this.gameContainer), this.app.stage.addChild(this.hudContainer), this.app.stage.addChild(this.screenFade), this.app.stage.addChild(this.debugContainer), this.app.stage.addChild(this.pauseOverlay), this.app.stage.addChild(this.pauseText), this.playfield = {
      x: at,
      y: Nt,
      width: $,
      height: tt
    }, this.rightPanelX = 460, this.gameContainer.position.set(this.playfield.x, this.playfield.y), this.frameSprite.position.set(0, 0), this.panelSprite.position.set(this.rightPanelX - 12, 32);
    const e = (s) => 40 + s * 21;
    this.scoreText.position.set(this.rightPanelX, e(0)), this.hiScoreText.position.set(this.rightPanelX, e(1)), this.livesText.position.set(this.rightPanelX, e(2)), this.bombsText.position.set(this.rightPanelX, e(3)), this.powerText.position.set(this.rightPanelX, e(4)), this.grazeText.position.set(this.rightPanelX, e(5)), this.memberText.position.set(this.rightPanelX, e(6)), this.stageText.position.set(this.rightPanelX, e(7)), this.timeText.position.set(this.rightPanelX, e(8)), this.spellNameText.anchor.set(0.5), this.spellNameText.position.set(
      this.playfield.x + this.playfield.width / 2,
      this.playfield.y + this.playfield.height / 2
    ), this.spellTimerText.position.set(
      this.playfield.x + this.playfield.width - 8,
      this.playfield.y + this.playfield.height / 2 - 10
    ), this.spellTimerText.anchor.set(1, 0), this.spellCapturedText.anchor.set(0.5, 0), this.centerBannerText.position.set(224, 240), this.centerBannerText.anchor.set(0.5, 0.5), this.bossTimerText.position.set(v.timerX, v.timerY), this.debugText.position.set(10, 10);
  }
  render(t, e, s, i, r, n, l = !1, h = null, c = {}, d = []) {
    var Yt;
    this.playerPose = c.playerPose ?? "normal", this.hitboxMarker.visible = !1, this.entityGraphics.clear(), this.bulletGraphics.clear(), this.hitboxGraphics.clear(), this.bombGraphics.clear(), this.washPlate.clear(), this.washFlash.clear(), this.hudGraphics.clear(), this.statusGraphics.clear(), this.debugGraphics.clear(), this.bullets.begin(), this.laserLayer.begin(), this.playerShots.begin(), this.fx.begin(), this.drawBombArt(c.bombZones, c.bombCancel), this.drawWash(c.bombWash);
    const u = this.drawBackdrop(c.backdrop), m = u ? ((Yt = c.backdrop) == null ? void 0 : Yt.clearColor) ?? 0 : c.backgroundColor ?? 855318;
    this.backgroundGraphics.clear(), this.backgroundGraphics.rect(-this.playfield.x, -this.playfield.y, this.width, this.height).fill({ color: m });
    const g = c.theme ?? this.theme;
    g !== this.theme && (this.theme = g, this.scroll = 0), l || (this.scroll += c.scrollSpeed ?? 1.1);
    const S = this.assets.get("bg:" + g + ":sky"), L = this.assets.get("bg:" + g + ":mid"), B = this.assets.get("bg:" + g + ":near"), W = Math.max(0.42, Math.min(1, c.brightness ?? 1)), Ee = [S, L, B].filter(Boolean).length > 1 ? 0.34 : 1;
    this.placeLayer(this.bgSky, u ? void 0 : S, this.scroll * Ee, W), this.placeLayer(this.bgMid, u ? void 0 : L, this.scroll * 0.68, W * 0.96), this.placeLayer(this.bgNear, u ? void 0 : B, this.scroll, W * 0.92);
    const zt = this.assets.get("ui:frame"), J = this.usingBitmapHud();
    J ? (this.frameSprite.visible = !1, this.panelSprite.visible = !1, this.hudGraphics.clear()) : zt ? (this.frameSprite.visible = !0, this.frameSprite.texture = zt, this.frameSprite.position.set(0, 0)) : (this.frameSprite.visible = !1, this.hudGraphics.rect(this.playfield.x, this.playfield.y, this.playfield.width, this.playfield.height).stroke({ width: 2, color: 6011059 }));
    const Kt = this.assets.get("ui:hudPanel");
    if (Kt && !J ? (this.panelSprite.visible = !0, this.panelSprite.texture = Kt, this.panelSprite.position.set(this.rightPanelX - 12, 32)) : J || (this.panelSprite.visible = !1, this.hudGraphics.rect(this.rightPanelX - 12, 32, 180, 416).stroke({ width: 2, color: 12852794 })), this.playerSprite.visible = !1, t.isAlive || t.state === "dying") {
      const p = t.position.x, f = t.position.y, y = Q(t), x = (t.leanX ?? t.velocity.x) / Math.max(1e-3, t.fastSpeed), w = !t.isInvulnerable || Math.floor(t.invulnerabilityTimer / 6) % 2 === 0;
      this.playerSprite.blendMode = "normal", w && this.drawMember(this.playerSprite, t.member.id, p, f, y, x), this.playerSprite.tint = t.bombStateFlash ? 15736864 : 16777215;
      const b = this.hitboxGlow, T = b ? this.assets.get(b.key) : void 0;
      if (b && T && b.alpha > 0 && (this.hitboxMarker.visible = !0, this.hitboxMarker.texture = T, this.hitboxMarker.position.set(p, f), this.hitboxMarker.alpha = y * b.alpha, this.hitboxMarker.rotation = b.rotation, this.hitboxMarker.scale.set(
        b.width / Math.max(1, T.width),
        b.height / Math.max(1, T.height)
      )), t.hitboxVisible) {
        const M = this.hitboxGraphics, _ = Math.max(di, t.hitbox.radius);
        M.circle(p, f, _ + pi).fill({ color: 397855, alpha: 0.82 * y }), M.circle(p, f, _).fill({ color: 16734830, alpha: 0.95 * y }), M.circle(p, f, Math.max(1.4, _ - mi)).fill({ color: 16777215, alpha: y });
      }
      if (t.switchFlash > 0) {
        const M = 1 - t.switchFlash / fi, _ = 14 + M * 30;
        this.hitboxGraphics.circle(p, f, _).stroke({
          width: 2.4 * (1 - M) + 0.4,
          color: t.member.accentColor,
          alpha: (1 - M) * 0.9 * y
        });
      }
    }
    const St = /* @__PURE__ */ new Set();
    for (const p of s) {
      if (!p.isAlive) continue;
      St.add(p);
      const f = p.position.x, y = p.position.y, x = Q(p), w = this.sprites.textureKey(p.spriteKey ?? "enemy") ?? p.spriteKey ?? "enemy", b = this.enemySpriteFor(p);
      if (this.drawSheet("enemy:" + w, b, f, y, x, 0, p.rotation, p.hitbox.radius * 3.4))
        continue;
      const T = this.assets.get(w) ?? this.assets.get("enemy:" + w) ?? this.assets.get("sprite:enemy:" + w);
      if (T) {
        const M = Number.isFinite(p.drawScale) && p.drawScale !== 0 ? p.drawScale : 1;
        b.visible = !0, b.texture = T, b.position.set(f, y), b.rotation = p.rotation, b.alpha = x, b.scale.set(M);
      } else
        this.entityGraphics.ellipse(f - 8, y - 4, 10, 5).fill({ color: 16777215, alpha: 0.6 * x }), this.entityGraphics.ellipse(f + 8, y - 4, 10, 5).fill({ color: 16777215, alpha: 0.6 * x }), this.entityGraphics.circle(f, y, p.hitbox.radius).fill({ color: p.color, alpha: x });
    }
    for (const [p, f] of this.enemySprites)
      St.has(p) || (f.visible = !1, typeof this.entityLayer.removeChild == "function" && this.entityLayer.removeChild(f), f.destroy(), this.enemySprites.delete(p));
    this.drawnEnemies = St.size, this.drawItems(d);
    const Be = e && "alpha" in e ? Q(e) : 0;
    if (e && (e.isAlive || e.isDefeated && Be > 0)) {
      const p = e.position.x, f = e.position.y, y = Q(e);
      this.bossSprite.visible = !1;
      const x = this.sprites.textureKey(e.spriteKey ?? e.name) ?? e.spriteKey ?? e.name;
      this.drawBossAura(p, f, y, e.isSpellCardActive, pe(e));
      const w = e.isAlive && this.drawSheet(
        "boss:" + x,
        this.bossSprite,
        p,
        f,
        y,
        0,
        e.rotation,
        e.hitbox.radius * 3.6
      ), b = w ? void 0 : this.assets.get(x) ?? this.assets.get("boss:" + x) ?? this.assets.get("enemy:" + x);
      if (b && e.isAlive)
        this.bossSprite.visible = !0, this.bossSprite.texture = b, this.bossSprite.position.set(p, f), this.bossSprite.alpha = y, this.bossSprite.rotation = e.rotation, this.bossSprite.scale.set(1);
      else if (!w) {
        const T = (0.2 + 0.1 * Math.sin(e.timer * 0.1)) * y;
        this.entityGraphics.circle(p, f, 32).fill({ color: pe(e), alpha: T }), this.entityGraphics.circle(p, f - 6, 12).fill({ color: yi(e), alpha: y }), this.entityGraphics.poly([
          { x: p, y: f },
          { x: p - 14, y: f + 20 },
          { x: p + 14, y: f + 20 }
        ]).fill({ color: 1710628, alpha: y });
      }
      this.drawBossGauge(e);
    } else
      this.bossSprite.visible = !1, this.spellCircle.visible = !1, this.bossShadow.visible = !1, c.bossGauge ? this.drawBossGauge(c.bossGauge) : (this.bossGaugeGraphics.clear(), this.bossTimerText.visible = !1);
    for (const p of c.lasers ?? []) {
      const f = this.assets.get(p.sprite);
      if (!f) continue;
      const y = Math.max(1, p.length), x = Math.max(1, p.width), w = p.angle;
      for (const b of [!1, !0]) {
        const T = this.laserLayer.acquire();
        T.visible = !0, T.texture = f, T.position.set(p.x, p.y), T.rotation = w, T.blendMode = b ? "add" : "normal", T.alpha = p.alpha * (b ? 0.75 : 1);
        const M = b ? x * 0.5 : x;
        T.scale.set(y / f.width, M / f.height);
      }
    }
    this.laserLayer.end();
    for (const p of i) {
      if (!p.isAlive) continue;
      const y = Math.hypot(p.velocity.x, p.velocity.y) > 0.01 ? Math.atan2(p.velocity.y, p.velocity.x) : p.heading, x = p.tag === "player-bullet", w = x ? this.playerShots : this.bullets, b = x ? this.sprites.textureKey(p.sprite) ?? "shot:" + t.memberId : this.sprites.bulletTextureKey(p.sprite, p.color) ?? // Games that ship their own sliced bullet art name the bullet's `sprite`
      // after the texture itself, so the name is usable as a key directly.
      (this.assets.has(p.sprite) ? p.sprite : void 0), T = b ? this.assets.get(b) : void 0;
      if (T) {
        const M = p.drawRadius > 0 ? p.drawRadius * 2 : p.hitbox.radius * (x ? 4.2 : 3.1), _ = w.acquire();
        _.visible = !0, _.texture = T, _.position.set(p.position.x, p.position.y), _.rotation = x ? p.spin * p.lifetime : y + Math.PI / 2, _.alpha = Q(p), _.scale.set(M / Math.max(1, T.width));
      } else
        this.sprites.draw(this.bulletGraphics, p.sprite, p.position.x, p.position.y, {
          color: p.color,
          radius: p.hitbox.radius,
          rotation: y,
          alpha: Q(p)
        });
    }
    if (this.bullets.end(), this.playerShots.end(), this.bombFlash > 0) {
      const p = this.playfield.width / 2, f = this.playfield.height / 2, y = this.bombFlash / 18;
      for (const [w, b] of [
        ["taisei:part:blast_huge_rays", 620],
        ["taisei:part:blast_huge_halo", 520]
      ]) {
        const T = this.assets.get(w);
        if (!T) continue;
        const M = this.fx.acquire();
        M.visible = !0, M.texture = T, M.position.set(p, f), M.rotation = w.endsWith("rays") ? (1 - y) * 0.7 : 0, M.alpha = Math.min(1, y * (w.endsWith("rays") ? 0.9 : 0.7)), M.tint = this.bombFlashTint, M.blendMode = "add", M.scale.set(b / Math.max(1, T.width));
      }
      const x = this.assets.get("fx:bombFlash") ?? this.assets.get("fx:glow");
      if (x) {
        const w = this.fx.acquire();
        w.visible = !0, w.texture = x, w.position.set(p, f), w.alpha = Math.min(1, this.bombFlash / 18), w.tint = this.bombFlashTint, w.scale.set(this.width * 1.4 / Math.max(1, x.width));
      }
      this.bombFlash = Math.max(0, this.bombFlash - 1);
    }
    for (const p of this.pendingFx.splice(0)) {
      const f = this.assets.get(p.texture);
      if (!f) continue;
      const y = this.fx.acquire();
      y.visible = !0, y.texture = f, y.position.set(p.x, p.y), y.alpha = p.alpha, y.rotation = p.rotation ?? 0, p.tint !== void 0 && (y.tint = p.tint), y.blendMode = p.additive ? "add" : "normal";
      const x = p.width ?? p.size, w = p.height ?? p.size;
      y.scale.set(
        (p.flipX ? -x : x) / Math.max(1, f.width),
        w / Math.max(1, f.height)
      );
    }
    if (this.fx.end(), J)
      this.drawBitmapHud(r, c.youkaiMeter, c.banners);
    else {
      this.drawNightClock(r.clockTime, !J), this.hudBitmap.begin(), this.hudBitmap.end(), this.scoreText.text = "Score:  " + r.formattedScore, this.hiScoreText.text = "HiScore:" + r.formattedHiScore;
      const p = !!(this.assets.get("taisei:ui:heart") && this.assets.get("taisei:ui:star"));
      this.livesText.text = "Player: " + (p ? "" : r.lives > 0 ? z.repeat(Math.min(8, r.lives)) : "-"), this.bombsText.text = "Spell:  " + (p ? "" : z.repeat(Math.max(0, r.bombs))), this.drawHudIcons(r.lives, r.bombs, (f) => 40 + f * 21), this.powerText.text = "Power:  " + r.power + " / " + r.maxPower, this.grazeText.text = "Graze:  " + r.graze, this.stageText.text = "Stage " + r.stageNumber + " - " + r.difficulty, this.timeText.text = "Time: " + r.timePhase, this.memberText.text = "Member: " + r.memberLabel + (r.focusActive ? " *" : "");
    }
    this.drawTeamStatus(t, c.youkaiMeter), this.drawScorePopups(c.scorePopups);
    const Tt = this.assets.get("taisei:ui:spell"), _e = this.assets.get("ui:spellBanner"), Mt = r.spellCutIn ? this.assets.get(r.spellCutIn) : void 0;
    if (r.spellCardName) {
      this.spellNameText.text = r.spellCardName, this.spellTimerText.text = Math.ceil(r.spellCardTime).toString(), this.spellNameText.visible = !0, this.spellTimerText.visible = !0;
      const p = K.DISPLAY_WINDOW - Math.max(0, r.spellCardDisplayTimer), f = Math.min(1, p / K.DISPLAY_ANIM_FRAMES), y = 1 - Math.pow(1 - f, 3), x = this.width / 2, w = x + (1 - y) * (this.width - x);
      this.spellCapturedText.visible = r.spellCaptured, this.spellCapturedText.position.set(this.spellNameText.position.x, this.spellNameText.position.y + 14), this.spellNameText.alpha = Math.min(1, 0.2 + y * 0.8), this.spellNameText.scale.set(1.6 - 0.6 * y), this.spellNameText.position.set(w, this.height / 2 - 14);
      const b = _e ?? Tt;
      b ? (this.bannerSprite.visible = !0, this.bannerSprite.texture = b, this.bannerSprite.position.set(w, this.height / 2 - 14), this.bannerSprite.alpha = this.spellNameText.alpha, this.bannerSprite.blendMode = b === Tt ? "add" : "normal", this.bannerSprite.scale.set((b === Tt ? 430 : 420) / Math.max(1, b.width))) : this.bannerSprite.visible = !1;
    } else
      this.spellNameText.visible = !1, this.spellTimerText.visible = !1, this.spellCapturedText.visible = !1, this.bannerSprite.visible = !1, this.spellNameText.scale.set(1), this.spellNameText.alpha = 1;
    if (Mt && r.spellCardDisplayTimer > 0) {
      const p = r.spellCardDisplayTimer, f = (K.DISPLAY_WINDOW - p) / K.DISPLAY_ANIM_FRAMES, y = 1 - Math.pow(1 - Math.min(1, f), 3), x = r.spellCutInSide === "player", w = 210, b = x ? this.playfield.x + this.playfield.width - 6 : this.playfield.x + 6;
      this.cutInSprite.visible = !0, this.cutInSprite.texture = Mt, this.cutInSprite.scale.set(w / Math.max(1, Mt.height)), this.cutInSprite.anchor.set(x ? 1 : 0, 0.5), this.cutInSprite.position.set(
        b + (x ? 1 : -1) * (1 - y) * (w * 0.8),
        this.playfield.y + this.playfield.height - w / 2 - 10
      ), this.cutInSprite.alpha = Math.min(1, p / 18) * 0.96;
    } else
      this.cutInSprite.visible = !1;
    const vt = r.bossWarning ? this.assets.get("taisei:ui:boss_indicator") : void 0;
    if (vt) {
      const p = r.centerMessageTimer, f = Math.min(1, (li - p) / ci), y = 1 - Math.pow(1 - f, 3), x = 210, w = this.playfield.x + this.playfield.width / 2, b = this.playfield.x - x;
      this.bossWarningSprite.visible = !0, this.bossWarningSprite.texture = vt, this.bossWarningSprite.anchor.set(0.5, 0.5), this.bossWarningSprite.scale.set(x / Math.max(1, vt.width)), this.bossWarningSprite.position.set(
        b + (w - b) * y,
        this.playfield.y + this.playfield.height * 0.3
      ), this.bossWarningSprite.alpha = Math.min(1, p / 24), this.centerBannerText.visible = !1;
    } else
      this.bossWarningSprite.visible = !1, this.centerBannerText.visible = !!r.centerMessage, r.centerMessage && (this.centerBannerText.text = r.centerMessage);
    if (this.screenFadeTotal > 0 ? (this.screenFade.visible = !0, this.screenFade.clear(), this.screenFade.rect(0, 0, this.width, this.height).fill({ color: this.screenFadeTint, alpha: this.screenFadeAlpha }), this.screenFadeFrames > 0 ? this.screenFadeFrames-- : this.screenFadeTotal = 0) : (this.screenFade.visible = !1, this.screenFade.clear()), n.isVisible) {
      this.debugContainer.visible = !0;
      const p = n.getMetricsText();
      if (h) {
        const f = h.getActiveActions();
        p.push("Input: " + (f.length > 0 ? f.join(" ") : "-"));
      }
      this.debugText.text = p.join(`
`), this.debugGraphics.rect(5, 5, 230, p.length * 15 + 10).fill({ color: 0, alpha: 0.7 });
    } else
      this.debugContainer.visible = !1;
    l ? (this.pauseOverlay.clear(), this.pauseOverlay.rect(0, 0, this.width, this.height).fill({ color: 0, alpha: 0.55 }), this.pauseText.text = "PAUSED - press ESC to resume", this.pauseText.position.set(this.width / 2, this.height / 2), this.pauseOverlay.visible = !0, this.pauseText.visible = !0) : (this.pauseOverlay.visible = !1, this.pauseText.visible = !1);
  }
  /**
   * Paint the spell card that is currently running. Each shape gets its own
   * geometry so the 16 cards read differently, the way the retail ANM scripts
   * do: pillars for Marisa, wedges for Youmu, orbs for Reimu, knives for Sakuya,
   * edge barriers for Yukari, rings for Remilia, dolls and butterflies.
   */
  /**
   * Paint a card's backdrop. The plate belongs with the stage's own background
   * colour, under every sprite; the square belongs over them, because retail's
   * `ScreenEffect::DrawSquare` goes down with the ship's high-priority draw. The
   * hitbox dot still sits above both: Eternal Night whites the field out without
   * ever hiding where the ship is.
   */
  drawWash(t) {
    const e = [
      [this.washPlate, t == null ? void 0 : t.plate],
      [this.washFlash, t == null ? void 0 : t.flash]
    ];
    for (const [s, i] of e)
      !i || i.alpha <= 0 || s.rect(0, 0, $, tt).fill({ color: i.color, alpha: Math.min(1, i.alpha) });
  }
  drawBombArt(t, e) {
    const s = this.bombGraphics;
    if (e && (s.circle(e.x, e.y, e.radius).stroke({
      width: 14,
      color: 16777215,
      alpha: 0.3 * e.alpha
    }), s.circle(e.x, e.y, e.radius).stroke({
      width: 3,
      color: 10479871,
      alpha: 0.85 * e.alpha
    })), !!t)
      for (const i of t) {
        const r = i.alpha;
        switch (i.shape) {
          case "beam": {
            const n = Math.cos(i.angle), l = Math.sin(i.angle), h = -l, c = n, d = i.x + n * i.radius, u = i.y + l * i.radius, m = (g, S, L) => {
              const B = i.width * g;
              s.moveTo(i.x + h * B, i.y + c * B).lineTo(d + h * B * 0.6, u + c * B * 0.6).lineTo(d - h * B * 0.6, u - c * B * 0.6).lineTo(i.x - h * B, i.y - c * B).closePath().fill({ color: S, alpha: L });
            };
            m(2.1, i.color, 0.16 * r), m(1.25, i.color, 0.4 * r), m(0.55, 16777215, 0.92 * r);
            for (let g = -1; g <= 1; g++) {
              const S = g * i.width * 0.8;
              s.moveTo(i.x + h * S, i.y + c * S).lineTo(d + h * S * 0.4, u + c * S * 0.4).stroke({ width: 1.5, color: 16777215, alpha: 0.35 * r });
            }
            s.circle(i.x, i.y, i.width * 1.5).fill({ color: 16777215, alpha: 0.55 * r });
            break;
          }
          case "slash": {
            s.moveTo(i.x, i.y);
            for (let l = 0; l <= 10; l++) {
              const h = i.angle - i.width + 2 * i.width * l / 10;
              s.lineTo(i.x + Math.cos(h) * i.radius, i.y + Math.sin(h) * i.radius);
            }
            s.closePath().fill({ color: i.color, alpha: 0.22 * r }), s.stroke({ width: 2.5, color: 16777215, alpha: 0.7 * r });
            break;
          }
          case "knife": {
            const n = Math.cos(i.angle), l = Math.sin(i.angle), h = -l, c = n, d = Math.max(6, i.radius * 0.5);
            s.moveTo(i.x + n * d, i.y + l * d).lineTo(i.x + h * i.width, i.y + c * i.width).lineTo(i.x - n * d, i.y - l * d).lineTo(i.x - h * i.width, i.y - c * i.width).closePath().fill({ color: 15923455, alpha: 0.9 * r }).stroke({ width: 1, color: i.color, alpha: 0.9 * r });
            break;
          }
          case "butterfly": {
            const n = 0.45 + 0.55 * Math.abs(Math.sin(i.spin * 2)), l = Math.cos(i.angle + Math.PI / 2), h = Math.sin(i.angle + Math.PI / 2), c = 10 * n;
            s.ellipse(i.x + l * c, i.y + h * c, 9, 6).fill({
              color: i.color,
              alpha: 0.5 * r
            }), s.ellipse(i.x - l * c, i.y - h * c, 9, 6).fill({
              color: i.color,
              alpha: 0.5 * r
            }), s.circle(i.x, i.y, 2.4).fill({ color: 16777215, alpha: 0.8 * r });
            break;
          }
          case "barrier": {
            s.rect(i.x - i.width, i.y - i.radius, i.width * 2, i.radius * 2).fill({ color: i.color, alpha: 0.13 * r }).stroke({ width: 3, color: i.color, alpha: 0.7 * r }), s.rect(i.x - i.width + 7, i.y - i.radius + 7, (i.width - 7) * 2, (i.radius - 7) * 2).stroke({
              width: 1,
              color: 16777215,
              alpha: 0.4 * r
            });
            break;
          }
          case "wave": {
            s.circle(i.x, i.y, i.radius).stroke({
              width: i.width * 0.55,
              color: i.color,
              alpha: 0.3 * r
            }), s.circle(i.x, i.y, i.radius).stroke({ width: 2, color: 16777215, alpha: 0.6 * r });
            break;
          }
          case "doll": {
            s.circle(i.x, i.y, i.radius * 0.7).fill({ color: i.color, alpha: 0.55 * r }), s.rect(i.x - i.radius * 0.28, i.y, i.radius * 0.56, i.radius * 0.9).fill({
              color: 16777215,
              alpha: 0.6 * r
            });
            break;
          }
          default: {
            s.circle(i.x, i.y - i.radius * 0.42, i.radius * 0.64).fill({
              color: i.color,
              alpha: 0.92 * r
            }), s.circle(i.x, i.y + i.radius * 0.42, i.radius * 0.64).fill({
              color: 16777215,
              alpha: 0.92 * r
            }), s.circle(i.x, i.y, i.radius).stroke({ width: 1.5, color: 16777215, alpha: 0.35 * r });
            break;
          }
        }
      }
  }
  /**
   * Spell-card circle and ground shadow behind the boss, straight from the
   * vendored Taisei pack. The circle spins faster while a spell card is live,
   * which is the visual cue players read as "card active".
   */
  /**
   * Retail boss gauge (Gui::DrawBossGauge): a shaded 320x4 track at (64,19),
   * one coloured slice per remaining life bar, a 26px life-pip row to its left
   * and the two-digit spell-card timer at (384,16), all faded by bossUIOpacity.
   */
  drawBossGauge(t) {
    const e = this.bossGaugeGraphics;
    e.clear();
    const s = t.gaugeOpacity;
    if (s <= 0) {
      this.bossTimerText.visible = !1;
      return;
    }
    const i = v.height, r = i / 2, n = (h) => {
      h.width <= 0 || (e.rect(h.x, h.y, h.width, r).fill({ color: h.color, alpha: s }), e.rect(h.x, h.y + r, h.width, i - r).fill({ color: h.shade, alpha: s }));
    };
    e.rect(v.left, v.top, v.width, i).stroke({
      width: 1,
      color: Ae,
      alpha: s * 0.9
    }), n(Fs(t.gaugeDisplayRatio));
    for (const h of Es(t.lifeBars, t.gaugeDisplayRatio, t.isSpellCardActive))
      n(h);
    for (const h of Bs(t.remainingBars))
      n(h);
    const l = ks(t.spellcardSecondsRemaining);
    this.bossTimerText.visible = t.isSpellCardActive && l.text !== "00", this.bossTimerText.text = l.text, this.bossTimerText.style.fill = l.color, this.bossTimerText.alpha = s;
  }
  drawBossAura(t, e, s, i, r) {
    this.spellCircleAngle += i ? 0.014 : 4e-3;
    const n = this.assets.get(i ? "taisei:huge:boss_spellcircle0" : "taisei:huge:boss_circle");
    if (n) {
      const h = i ? 250 : 190;
      this.spellCircle.visible = !0, this.spellCircle.texture = n, this.spellCircle.position.set(t, e), this.spellCircle.rotation = this.spellCircleAngle * (i ? 1 : -1), this.spellCircle.alpha = (i ? 0.85 : 0.4) * s, this.spellCircle.tint = i ? r : 16777215, this.spellCircle.blendMode = "add", this.spellCircle.scale.set(h / Math.max(1, n.width));
    } else
      this.spellCircle.visible = !1;
    const l = this.assets.get("taisei:part:boss_shadow");
    l ? (this.bossShadow.visible = !0, this.bossShadow.texture = l, this.bossShadow.position.set(t, e - 10), this.bossShadow.alpha = (i ? 0.34 : 0.2) * s, this.bossShadow.blendMode = "add", this.bossShadow.tint = r, this.bossShadow.scale.set(hi / Math.max(1, l.height))) : this.bossShadow.visible = !1;
  }
  /**
   * Lives and bombs as real heart/star art instead of the text glyph, falling
   * back to the star character when the vendored pack is missing.
   */
  drawHudIcons(t, e, s) {
    const i = this.assets.get("taisei:ui:heart"), r = this.assets.get("taisei:ui:star");
    if (this.hudIcons.begin(), i && r) {
      const n = this.rightPanelX + 62;
      for (let l = 0; l < Math.min(8, Math.max(0, t)); l++)
        this.hudIcons.draw({ texture: i, x: n + l * 15, y: s(2) + 8, width: 13 });
      for (let l = 0; l < Math.min(8, Math.max(0, e)); l++)
        this.hudIcons.draw({ texture: r, x: n + l * 15, y: s(3) + 8, width: 13 });
    }
    this.hudIcons.end();
  }
  /**
   * True when the original panel sheets are live. The digit '0' is the probe: the
   * registration pass slices the whole font in one go, so one glyph standing for all
   * of them is a fair bet, and it keeps the monospace read-out on screens that were
   * started without the asset pack.
   */
  usingBitmapHud() {
    return this.hudArtReady || (this.hudArtReady = !!this.assets.get(si)), this.hudArtReady;
  }
  /** Blit `text` in the retail 16x16 font from (x, y) and return the advance. */
  drawHudText(t, e, s, i = 1, r = "left", n = {}) {
    const l = n.advance ?? Ws, h = t.length * l * i;
    let c = r === "right" ? e - h : e;
    for (const d of t) {
      const u = this.assets.get(Gt(d.charCodeAt(0)));
      u && this.hudBitmap.draw({
        texture: u,
        x: c,
        y: s,
        width: 16 * i,
        height: 16 * i,
        alpha: n.alpha ?? 1,
        tint: n.tint ?? 16777215,
        ...I
      }), c += l * i;
    }
    return h;
  }
  /**
   * `AsciiManager::DrawPopups`. Each pickup is a run of 8x8 digit cells, centred on the
   * spawn point: retail offsets the run by `4 * digitCount` and then advances eight
   * pixels per character, printing the most significant digit first.
   */
  drawScorePopups(t) {
    const e = this.hudPopups;
    if (e.begin(), t)
      for (const s of t) {
        const i = s.digits.length;
        if (!i) continue;
        const r = s.scale > 0 ? s.scale : 1;
        let n = s.x - oe * r * i / 2;
        for (let l = i - 1; l >= 0; l--) {
          const h = this.assets.get(ei(oi(s.digits[l], s.bank)));
          h && e.draw({
            texture: h,
            x: n,
            y: s.y,
            width: 8 * r,
            height: 8 * r,
            alpha: s.alpha,
            tint: s.color & 16777215,
            ...I
          }), n += oe * r;
        }
      }
    e.end();
  }
  /**
   * The whole right panel, drawn the way retail draws it.
   *
   * Order matters and mirrors `Gui::DrawGameScene`: backdrop tiles, then the top and
   * bottom border strips, then the 永夜抄 plate, then the eight labels, then their
   * values. The 妖率計 belongs to this layer too because it overlaps the playfield's
   * bottom-left corner rather than sitting in the panel.
   */
  drawBitmapHud(t, e, s) {
    const i = this.hudBitmap;
    i.begin();
    for (const u of [
      this.scoreText,
      this.hiScoreText,
      this.livesText,
      this.bombsText,
      this.powerText,
      this.grazeText,
      this.stageText,
      this.timeText,
      this.memberText
    ])
      u.visible = !1;
    this.hudIcons.begin(), this.hudIcons.end();
    const r = this.assets.get(_t("tile"));
    if (r) {
      for (let u = 0; u < Z - q.h; u += pt)
        i.draw({ texture: r, x: 0, y: u, ...I });
      for (let u = ee; u < ut - pt / 2; u += pt)
        for (let m = q.h; m < Z - q.h; m += pt)
          i.draw({ texture: r, x: u, y: m, ...I });
    }
    const n = this.assets.get(_t("border"));
    if (n)
      for (let u = 0; u < ut - q.w / 2; u += q.w)
        i.draw({ texture: n, x: u, y: 0, ...I }), i.draw({ texture: n, x: u, y: Z - q.h, ...I });
    const l = this.assets.get(_t("panel"));
    l && i.draw({ texture: l, x: ie.x, y: ie.y, ...I });
    for (const u of ["hiscore", "score", "player", "spell", "power", "graze", "point", "time"]) {
      const m = this.assets.get(Zs(u)), g = R[u];
      m && i.draw({ texture: m, x: Xs, y: g, ...I });
    }
    this.drawHudText(t.formattedHiScore, G, R.hiscore), this.drawHudText(t.formattedScore, G, R.score);
    const h = this.assets.get(he("life"));
    if (h)
      for (let u = 0; u < Math.max(0, t.lives); u++)
        i.draw({
          texture: h,
          x: G + u * se,
          y: R.player,
          ...I
        });
    const c = this.assets.get(he("bomb"));
    if (c)
      for (let u = 0; u < Math.max(0, t.bombs); u++)
        i.draw({
          texture: c,
          x: G + u * se,
          y: R.spell,
          ...I
        });
    if (this.powerBar.clear(), t.power > 0) {
      const u = Math.min(8, Math.max(1, Math.round(t.power / 8))), m = t.power / u;
      for (let g = 0; g < u; g++) {
        const S = u === 1 ? 0 : g / (u - 1);
        this.powerBar.rect(Bt.x + g * m, Bt.y, m + 0.5, Bt.h).fill({ color: 14737663, alpha: 0.875 - 0.375 * S });
      }
    }
    if (this.drawHudText(t.power < t.maxPower ? String(t.power) : "MAX", G, R.power), this.drawHudText(String(t.graze), G, R.graze), this.drawPointRow(String(t.pointItems), String(t.nextPointExtend), R.point), t.timeOrbThreshold === null)
      this.drawPointRow(String(t.timeOrbs), String(t.timeOrbTotal), R.time);
    else {
      const u = t.timeOrbs >= t.timeOrbThreshold;
      this.drawPointRow(
        String(t.timeOrbs),
        String(t.timeOrbThreshold),
        R.time,
        u ? ni : void 0
      );
    }
    const d = this.assets.get(ti(t.difficulty));
    d && i.draw({
      texture: d,
      x: ae.x,
      y: ae.y,
      ...I
    }), this.drawYoukaiGauge(e), this.drawGuiBanners(s), i.end();
  }
  /**
   * `Gui.cpp:2075-2138`: the two panel text slots, blit last so a banner can
   * cross from the panel over the playfield without either clipping it.
   */
  drawGuiBanners(t) {
    if (t)
      for (const e of t)
        this.drawHudText(e.text, e.x, e.y, e.scale, "left", {
          advance: e.advance,
          tint: e.color & 16777215,
          alpha: e.alpha
        });
  }
  /**
   * Point/Time rows: `count`, a half-width slash, then the extend threshold. The tint is
   * retail's whole-row `SetColor`, so it has to cover the slash as well as the digits.
   */
  drawPointRow(t, e, s, i) {
    const r = this.drawHudText(t, G, s, 1, "left", { tint: i }), n = G + r, l = this.assets.get(Gt(47));
    l && this.hudBitmap.draw({
      texture: l,
      x: n,
      y: s,
      width: 8,
      height: 16,
      tint: i ?? 16777215,
      ...I
    }), this.drawHudText(e, n + 8 + 6, s, 1, "left", { tint: i });
  }
  /**
   * The 夜時計. Midnight has the hand pointing down and dawn brings it back to
   * the top, one full turn for the 12 steps `GetClockTime()` counts, so the
   * remaining night is readable as the arc still to run -- which is the same
   * quantity the `2000000 * (12 - clock)` bonus is paid on.
   *
   * The retail art for the dial never reached the vendored pack and no
   * decompiled function draws it, so this is vector art in the panel's own
   * colours. `hud:clock:dial` lets a real sheet take it over unchanged.
   */
  drawNightClock(t, e = !0) {
    const { x: s, y: i, r } = qs, n = re(t), l = this.assets.get("hud:clock:dial");
    if (this.nightClockFace.clear(), l)
      this.hudBitmap.draw({
        texture: l,
        x: s - r,
        y: i - r,
        width: r * 2,
        height: r * 2,
        ...I
      });
    else {
      this.nightClockFace.circle(s, i, r).fill({ color: 1052696, alpha: 0.72 }).stroke({ width: 2, color: 13153386, alpha: 0.9 });
      for (let c = 0; c < ot; c++) {
        const d = re(c), u = c % 2 === 0, m = r - (u ? 9 : 5);
        this.nightClockFace.moveTo(s + Math.sin(d) * m, i - Math.cos(d) * m).lineTo(s + Math.sin(d) * r, i - Math.cos(d) * r).stroke({ width: u ? 2 : 1, color: 13153386, alpha: u ? 0.95 : 0.55 });
      }
    }
    const h = t >= ot;
    this.nightClockHand.clear().moveTo(s - Math.sin(n) * 5, i + Math.cos(n) * 5).lineTo(s + Math.sin(n) * (r - 6), i - Math.cos(n) * (r - 6)).stroke({ width: 2.5, color: h ? 16765514 : 15790335, alpha: 0.95 }), e && this.drawHudText(Qs(t), s - 20, i + r + 4);
  }
  /**
   * The 妖率計 at the bottom of the playfield: the ornate 128x16 track, the 人 and 妖
   * limit icons at its stops, and the cursor between them (`AsciiManager.cpp:280-289`
   * runs `ascii.anm` scripts 5..8 to place exactly these four pieces).
   */
  drawYoukaiGauge(t) {
    if (t === void 0) return;
    const e = this.assets.get(mt("track"));
    if (!e) return;
    const s = this.hudBitmap;
    s.draw({ texture: e, x: C.x, y: C.y, ...I });
    const i = this.assets.get(mt("human"));
    i && s.draw({
      texture: i,
      x: C.x,
      y: C.y,
      width: C.iconSize,
      height: C.iconSize,
      ...I
    });
    const r = this.assets.get(mt("youkai"));
    r && s.draw({
      texture: r,
      x: C.x + C.w - C.iconSize,
      y: C.y,
      width: C.iconSize,
      height: C.iconSize,
      ...I
    });
    const n = this.assets.get(mt("cursor")), h = C.x + C.w / 2 + (Math.max(0, Math.min(1, t)) - 0.5) * C.span * 2;
    n && s.draw({
      texture: n,
      x: h - C.cursorW / 2,
      y: C.cursorY,
      width: C.cursorW,
      height: C.cursorH,
      ...I
    });
  }
  /** Queue a one-shot effect sprite for the next frame. */
  spawnEffect(t, e, s, i = 64, r = 1, n = 0, l, h = !1) {
    this.pendingFx.push({ texture: t, x: e, y: s, size: i, alpha: r, rotation: n, tint: l, additive: h });
  }
  /**
   * Queue a one-shot sprite at its own rectangular footprint.
   *
   * The retail effect pool blits ANM atlas cells, and those cells are rectangles: a needle
   * is 8x32 and a scale is 24x16, so forcing one size for both axes stretches the art.
   */
  spawnEffectRect(t, e, s, i, r, n = 1, l = 0, h, c = !1, d = !1) {
    this.pendingFx.push({
      texture: t,
      x: e,
      y: s,
      size: i,
      width: i,
      height: r,
      alpha: n,
      rotation: l,
      tint: h,
      additive: c,
      flipX: d
    });
  }
  /**
   * Trigger the full-screen bomb flash. `accent` is the card's own colour, so
   * the flash separates 霊夢's pink from 魔理沙's gold the way the retail
   * spell art does.
   */
  triggerBombFlash(t = 16777215) {
    this.bombFlash = 18, this.bombFlashTint = t;
  }
  /** Colour the running bomb flash is using, or `null` when nothing is flashing. */
  get bombFlashColor() {
    return this.bombFlash > 0 ? this.bombFlashTint : null;
  }
  /**
   * Take the ship's 判定点光环 for this frame, or null when the script has none live.
   *
   * Called once per frame by the game layer out of the effect pool, before `render`.
   * Holding it here rather than pushing it through the ordinary effect batch is the only
   * liberty taken, and it is a layering one: the batch composites under the ship sprite,
   * and retail's ring is unmistakably drawn over the ship's own art.
   */
  setHitboxGlow(t) {
    this.hitboxGlow = t;
  }
  /**
   * Wash the whole picture into `color` over `frames` frames.
   *
   * `Gui.cpp:876-879` asks for exactly this from stage message op 14:
   * `ScreenEffect::RegisterChain(FULL_FADE_OUT, 442, 0xffffff, 0, 0, 21)`. The
   * ramp is linear because `ScreenEffect.cpp` is not in the decompilation, and a
   * linear climb is the only reading of `CalcFadeOut`/`DrawFullFade` that reaches
   * full coverage exactly when the countdown does.
   */
  startScreenFade(t, e = 16777215) {
    this.screenFadeFrames = Math.max(0, Math.round(t)), this.screenFadeTotal = this.screenFadeFrames, this.screenFadeTint = e;
  }
  /** Coverage of the running screen fade, 0 (nothing) to 1 (solid). */
  get screenFadeAlpha() {
    return this.screenFadeTotal <= 0 ? 0 : 1 - this.screenFadeFrames / this.screenFadeTotal;
  }
  /** Frames left on the screen fade, for a browser pass to read. */
  get screenFadeRemaining() {
    return this.screenFadeFrames;
  }
  /** Cancel a fade that is still running, e.g. when a run leaves the stage. */
  clearScreenFade() {
    this.screenFadeFrames = 0, this.screenFadeTotal = 0;
  }
  /**
   * Register an animated sprite sheet under a logical slot name. Slots are
   * 'player:<characterId>', 'enemy:<spriteKey>' and 'boss:<spriteKey>'; the game
   * layer fills them from the vendored Taisei atlases so the engine stays
   * title-agnostic.
   */
  registerSheet(t, e) {
    this.sheets.set(t, e), this.brokenSheets.delete(t);
  }
  /** Which sheet slot a sprite is currently animating, if any (used by tests and the debug overlay). */
  sheetState(t) {
    var i;
    const e = this.lastSlot.get(t);
    if (!e) return null;
    const s = (i = this.anims.get(t)) == null ? void 0 : i.get(e);
    return s ? {
      slot: e,
      group: s.player.currentGroup,
      frame: s.player.frameIndex,
      flipped: s.player.flipped
    } : null;
  }
  /** True when a slot has a real animated sheet registered. */
  hasSheet(t) {
    return this.sheets.has(t) && !this.brokenSheets.has(t);
  }
  /**
   * Point a sprite at the next frame of its sheet. Taisei bakes the bank into
   * the lean frames and mirrors them for the opposite direction, so the only
   * rotation here is the one the caller asks for. Returns false when the slot is
   * unknown, letting callers fall back to the procedural painter.
   */
  drawSheet(t, e, s, i, r, n = 0, l = 0, h = 0) {
    const c = this.sheets.get(t);
    if (!c || this.brokenSheets.has(t)) return !1;
    let d = this.anims.get(e);
    d || (d = /* @__PURE__ */ new Map(), this.anims.set(e, d));
    let u = d.get(t);
    (!u || u.sheet !== c) && (u = { sheet: c, player: new Ys(c.anim) }, d.set(t, u)), this.lastSlot.set(e, t), e === this.playerSprite && u.player.setPose(this.playerPose), c.steer && u.player.setDirection(n, c.deadZone ?? 0.2), u.player.update(1), e === this.playerSprite && (this.playerAnimDebug = t + " " + u.player.currentGroup + "#" + u.player.frameIndex + " dir=" + n.toFixed(2) + " pose=" + this.playerPose);
    const m = this.assets.get(c.frameKey(u.player.frameIndex));
    if (!m)
      return this.brokenSheets.add(t), !1;
    const g = c.fit && h > 0 ? h / Math.max(1, m.width) : c.scale ?? gi;
    return e.visible = !0, e.texture = m, e.position.set(s, i), e.rotation = l, e.alpha = r, e.scale.set(u.player.flipped ? -g : g, g), !0;
  }
  /**
   * Draw one team member. The registered sheet wins (real Taisei frames for
   * Reimu/Marisa/Youmu, our own idle loop for the rest); the static still is the
   * fallback. Returns false when nothing matched so callers can paint a shape.
   */
  drawMember(t, e, s, i, r, n = 0, l = 1, h = !1) {
    const c = this.playerSkin === "painted" ? "player-painted:" : "player:", d = h ? ["player-portrait:" + e, c + e, "player-painted:" + e] : [c + e, "player-painted:" + e];
    for (const g of new Set(d))
      if (this.drawSheet(g, t, s, i, r, n))
        return l !== 1 && t.scale.set(t.scale.x * l, t.scale.y * l), !0;
    const u = "player:" + e, m = this.playerSkin === "taisei" ? this.assets.get("player-taisei:" + e) ?? this.assets.get(u) : this.assets.get(u) ?? this.assets.get("player-taisei:" + e);
    return m ? (this.playerSprite, t.rotation = 0, t.position.set(s, i), t.visible = !0, t.texture = m, t.alpha = r, t.scale.set(this.playerScale / Math.max(1, m.width) * l), !0) : (t === this.playerSprite && this.drawMemberFallback(s, i, r), !1);
  }
  /**
   * The 永夜抄 status block: the standing-down member as a panel portrait, plus
   * the human/youkai meter under it. The meter is centred, because retail parks
   * neutral in the middle and slides the cursor left for 人 and right for 妖
   * (`AsciiManager.cpp:1764-1813`).
   */
  drawTeamStatus(t, e) {
    this.partnerSprite.visible = !1;
    const s = this.usingBitmapHud(), i = s ? ee + 2 : this.rightPanelX + 16, r = s ? 210 : 250;
    if (!s && t.isAlive && t.partner && this.drawMember(
      this.partnerSprite,
      t.partner.id,
      i,
      r,
      1,
      0,
      ui,
      !0
    ), e === void 0) return;
    if (s) {
      this.statusGraphics.clear();
      return;
    }
    const n = this.rightPanelX + 26, l = 128, h = 300, c = n + l / 2, d = n + l * Math.max(0, Math.min(1, e)), u = this.statusGraphics;
    u.rect(n, h - 5, l, 10).fill({ color: 1314844, alpha: 0.75 }), u.rect(Math.min(c, d), h - 4, Math.abs(d - c), 8).fill({
      color: e >= 0.5 ? 16731501 : 8377343,
      alpha: 0.9
    }), u.rect(d - 1, h - 8, 2, 16).fill({ color: 16777215, alpha: 0.95 }), u.rect(n, h - 5, l, 10).stroke({ width: 1, color: 9076664, alpha: 0.8 }), this.extremeMeter(e) && u.rect(n - 2, h - 7, l + 4, 14).stroke({
      width: 1.5,
      color: e >= 0.5 ? 16765286 : 10217471,
      alpha: 0.85
    }), u.rect(n - 12, h - 6, 9, 12).fill({ color: 8377343, alpha: 0.5 }), u.rect(n + l + 3, h - 6, 9, 12).fill({ color: 16731501, alpha: 0.5 });
  }
  /** True when the meter sits in one of the two extreme wells. */
  extremeMeter(t) {
    return t <= 0.1 || t >= 0.9;
  }
  /** Last-resort silhouette so the ship is never invisible if art is missing. */
  drawMemberFallback(t, e, s) {
    this.entityGraphics.circle(t, e - 4, 8).fill({ color: 16773350, alpha: s }), this.entityGraphics.poly([
      { x: t, y: e - 4 },
      { x: t - 12, y: e + 14 },
      { x: t + 12, y: e + 14 }
    ]).fill({ color: 12852794, alpha: s }), this.entityGraphics.rect(t - 10, e - 10, 20, 6).fill({ color: 12852794, alpha: s });
  }
  /** 'taisei' prefers upstream animation; 'painted' forces one in-house look. */
  setPlayerSkin(t) {
    this.playerSkin = t;
  }
  /** Which ship animation the last rendered frame settled on (dev mirror only). */
  get playerAnimState() {
    return this.playerAnimDebug;
  }
  /**
   * `[held, drawn]` entity sprite counts for one kind, from the last frame.
   *
   * The sprite maps are keyed by the entity object, so a picture only leaves when
   * its owner stops being drawn -- which is exactly the "killed fairy left its
   * sprite on screen" bug class. Held has to equal drawn; a gap that widens over a
   * stage is a leak, not a frame of lag.
   */
  get spriteAudit() {
    return {
      enemies: [this.enemySprites.size, this.drawnEnemies],
      items: [this.itemSprites.size, this.drawnItems]
    };
  }
  /**
   * Scroll one parallax sheet across the playfield.
   *
   * Night lighting is a multiply rather than a fade: alpha let the backdrop fill
   * bleed through the sheet and turned the art to mud. Because opaque tiles are
   * idempotent under normal blending, the rows can overlap by a couple of pixels
   * to hide filtering gaps without leaving a bright band behind.
   *
   * Every other tile is mirrored. The retail sheets are painted backdrops, not
   * authored tileables, so a plain repeat puts the sheet's bottom edge against its
   * own top edge and draws a hard line straight across the stage. Mirroring makes
   * the wrap edge continuous (same pixels meet) and doubles the visible period,
   * which is the difference between "scrolling scene" and "wallpaper".
   */
  placeLayer(t, e, s, i) {
    if (!e || !e.width || !e.height) {
      t.begin(), t.end();
      return;
    }
    const r = e.width >= this.playfield.width / 2 ? this.playfield.width / e.width : 1, n = e.width * r, l = e.height * r, h = Math.ceil(this.playfield.width / n), c = Math.min(4, Math.round(2 * r)), d = Math.max(1, l - c), u = Math.ceil(this.playfield.height / d) + 1, m = (s % d + d) % d, g = bi(i);
    t.begin();
    for (let S = u; S >= -1; S--)
      for (let L = 0; L < h; L++) {
        const B = Math.abs(S % 2) === 1, W = Math.abs(L % 2) === 1, H = t.acquire();
        H.visible = !0, H.anchor.set(0, 0), H.texture = e, H.position.set(
          L * n + (W ? n : 0),
          S * d + m - l + (B ? l : 0)
        ), H.alpha = 1, H.tint = g, H.scale.set(W ? -r : r, B ? -r : r);
      }
    t.end();
  }
  /**
   * The backend Pixi actually settled on, for the debug mirror. `'pending'` until
   * `init` has run; a forced `'webgl'` that fell back is visible here as `'webgpu'`.
   */
  get backend() {
    if (!this.app.renderer) return "pending";
    const t = this.app.renderer.type;
    return t & Wt.WEBGPU ? "webgpu" : t & Wt.WEBGL ? "webgl" : "other";
  }
  /** The backdrop layer's fog block, made on first fogged quad. */
  fog() {
    return this.fogBlock ?? (this.fogBlock = Hs()), this.fogBlock;
  }
  /**
   * Put a game-authored 3D backdrop onto the GPU.
   *
   * Each quad names a page, so the layer only goes up once every page it needs is
   * registered: a stage whose art pack is still unpacking falls back to the parallax
   * placeholder rather than showing holes in the scenery.
   */
  drawBackdrop(t) {
    if (this.backdropQuads.begin(), this.backdropFade.clear(), !t)
      return this.backdropQuads.end(), !1;
    if (t.quads.some((e) => e.depth) && Os(this.fog(), t.fog ?? null), t.quads.some((e) => !this.assets.has(e.page)))
      return this.backdropQuads.end(), !1;
    for (const e of t.quads) {
      const s = this.assets.get(e.page);
      s && this.backdropQuads.push({
        texture: s,
        page: e.page,
        screen: e.screen,
        uv: e.uv,
        alpha: e.alpha,
        additive: e.additive,
        depth: e.depth
      });
    }
    return this.backdropQuads.end(), (t.fade ?? 0) > 0 && this.backdropFade.rect(0, 0, $, tt).fill({ color: 0, alpha: Math.min(1, t.fade ?? 0) }), !0;
  }
  /**
   * Draw every live drop. Items pop in over their first frames and scale up to
   * their authored size, which is what sells the 'plop' of a fresh drop.
   */
  drawItems(t) {
    const e = /* @__PURE__ */ new Set();
    for (const s of t) {
      if (!s.isAlive) continue;
      e.add(s);
      const i = s.position.x, r = s.position.y, n = Math.min(1, s.timer / 5), l = 0.72 + 0.28 * n, h = s.spec.size * l, c = this.itemSpriteFor(s), d = this.assets.get(s.spec.sprite);
      d ? (c.visible = !0, c.texture = d, c.position.set(i, r), c.alpha = s.alpha * n, c.scale.set(h / Math.max(1, d.width))) : (c.visible = !1, this.entityGraphics.rect(i - h / 2, r - h / 2, h, h).fill({ color: s.spec.color, alpha: s.alpha * n }), this.entityGraphics.rect(i - h / 2, r - h / 2, h, h).stroke({ width: 1.5, color: 16777215, alpha: 0.85 * s.alpha * n }));
    }
    for (const [s, i] of this.itemSprites)
      e.has(s) || (i.destroy(), this.itemSprites.delete(s));
    this.drawnItems = e.size;
  }
  itemSpriteFor(t) {
    let e = this.itemSprites.get(t);
    return e || (e = new ft(), e.anchor.set(0.5, 0.5), this.itemSprites.set(t, e), this.itemLayer.addChild(e)), e;
  }
  enemySpriteFor(t) {
    let e = this.enemySprites.get(t);
    return e || (e = new ft(), e.anchor.set(0.5, 0.5), this.enemySprites.set(t, e), this.entityLayer.addChild(e)), e;
  }
  destroy() {
    this.assets.clear(), this.app.destroy(!0, { children: !0, texture: !0 });
  }
};
/** HUD.showSpellCard display window (frames); the first slice is the pop-in. */
a(K, "DISPLAY_WINDOW", 90), a(K, "DISPLAY_ANIM_FRAMES", 30);
let de = K;
const Ji = 0, Zi = 0, ta = (o, t) => (e) => o + ":" + t + ":frame" + String(e).padStart(4, "0"), hi = 96, li = 150, ci = 18, ui = 1.5, di = 3.4, pi = 2.6, mi = 1.4, fi = 14, gi = 0.6, ea = 0.26, pe = (o) => o.displayColor ?? (o.isSpellCardActive ? 16720469 : 4491519), yi = (o) => o.accentColor ?? 16769126;
function D(o = 0.5, t = o) {
  const e = new ft();
  return e.anchor.set(o, t), e.visible = !1, e;
}
function bi(o) {
  const t = Math.max(0, Math.min(1, o)) * 255, e = Math.round(t);
  return e << 16 | e << 8 | e;
}
const xi = 1, me = 3;
function Dt(o, t) {
  return String.fromCharCode(o[t], o[t + 1], o[t + 2], o[t + 3]);
}
function Rt(o, t) {
  return o[t] | o[t + 1] << 8;
}
function fe(o, t) {
  return (o[t] | o[t + 1] << 8 | o[t + 2] << 16 | o[t + 3] << 24) >>> 0;
}
function wi(o) {
  if (o.length < 12 || Dt(o, 0) !== "RIFF" || Dt(o, 8) !== "WAVE") return null;
  let t = 0, e = 0, s = 0, i = 0, r = null;
  for (let d = 12; d + 8 <= o.length; ) {
    const u = Dt(o, d), m = fe(o, d + 4), g = d + 8;
    u === "fmt " ? (t = Rt(o, g), e = Rt(o, g + 2), s = fe(o, g + 4), i = Rt(o, g + 14)) : u === "data" && (r = o.subarray(g, Math.min(g + m, o.length))), d = g + m + m % 2;
  }
  if (!(r != null && r.length) || !e || !s || !i || t !== xi && t !== me) return null;
  const n = i / 8, l = Math.floor(r.length / n), h = new Float32Array(l), c = new DataView(r.buffer, r.byteOffset, r.byteLength);
  for (let d = 0; d < l; d++) {
    const u = d * n;
    if (t === me)
      h[d] = i === 32 ? c.getFloat32(u, !0) : c.getFloat64(u, !0);
    else if (i === 8)
      h[d] = (r[u] - 128) / 128;
    else if (i === 16)
      h[d] = c.getInt16(u, !0) / 32768;
    else if (i === 24) {
      const m = (r[u] | r[u + 1] << 8 | r[u + 2] << 16) << 8;
      h[d] = m / 2147483648;
    } else
      return null;
  }
  return { sampleRate: s, channels: e, samples: h };
}
const Si = 12, Ti = 20;
function Mi(o) {
  return 10 ** (o / 2e3);
}
function vi(o) {
  const t = Math.max(0, Math.min(1, o));
  if (t <= 0) return 0;
  const e = 1 - t;
  return 1 - e * e * e;
}
function Ci(o, t) {
  const e = vi(t);
  return e <= 0 ? 0 : Mi(Math.round((o + 5e3) * e) - 5e3);
}
function ge(o, t, e) {
  for (const s of o)
    if (s.idx === t)
      return s.panSum += e, s.panCount += 1, !1;
  return o.length >= Si ? !1 : (o.push({ idx: t, panSum: e, panCount: 1, tries: 0 }), !0);
}
const Ai = (o) => fetch(o).then((t) => t.ok ? t.arrayBuffer() : Promise.reject(new Error(`HTTP ${t.status}`)));
class Ii {
  constructor(t, e, s = Ai) {
    a(this, "slots", []);
    /** Decoded audio, keyed by file path so indices sharing a recording share it too. */
    a(this, "buffers", /* @__PURE__ */ new Map());
    a(this, "loading", /* @__PURE__ */ new Set());
    a(this, "failed", /* @__PURE__ */ new Set());
    /** One live voice per index, which is what makes a retrigger cut the old one. */
    a(this, "voices", /* @__PURE__ */ new Map());
    a(this, "volume", 1);
    a(this, "frameHandle", 0);
    this.source = t, this.context = e, this.load = s;
  }
  /** How many requests are waiting for this frame's flush. Debug aid. */
  get pending() {
    return this.slots.length;
  }
  /**
   * How many of the bank's recordings are decoded and ready. Debug aid: it is the
   * difference between "the table is wired up" and "the sound is actually there".
   */
  get loaded() {
    return this.buffers.size;
  }
  /** A name for the slider: it changes every gain through `seGain`. */
  setVolume(t) {
    this.volume = Math.max(0, Math.min(1, t));
  }
  /**
   * Ask for sound `idx`. `pan` is -1..1 (`PlaySoundByIdx` passes 0, which is why an
   * unpositioned request lands dead centre).
   */
  queue(t, e = 0) {
    const s = this.source.entries[t];
    s && (this.ensure(s), ge(this.slots, t, Math.max(-1, Math.min(1, e))), this.schedule());
  }
  /** Fetch and decode every file in the table, so the first hit is not late. */
  preload() {
    for (const t of this.source.entries) this.ensure(t);
  }
  /** Cut everything. Used when the run stops mid-frame. */
  stopAll() {
    for (const t of this.voices.values())
      try {
        t.stop();
      } catch {
      }
    this.voices.clear(), this.slots.length = 0;
  }
  /**
   * Kick off one load. A file that fails is remembered as missing so a busy frame
   * does not keep re-requesting it.
   */
  ensure(t) {
    const e = this.source.files[t.buffer];
    if (!e || this.buffers.has(e) || this.loading.has(e) || this.failed.has(e)) return;
    const s = this.context();
    s && (this.loading.add(e), this.load(e).then((i) => {
      const r = wi(new Uint8Array(i));
      if (!r) throw new Error("unparsable wav");
      const n = s.createBuffer(
        r.channels,
        Math.floor(r.samples.length / r.channels),
        r.sampleRate
      );
      for (let l = 0; l < r.channels; l++)
        n.copyToChannel(
          r.samples.filter((h, c) => c % r.channels === l),
          l
        );
      this.buffers.set(e, n);
    }).catch(() => {
      this.failed.add(e);
    }).finally(() => {
      this.loading.delete(e);
    }));
  }
  schedule() {
    if (!this.frameHandle) {
      if (typeof requestAnimationFrame != "function") {
        this.flush();
        return;
      }
      this.frameHandle = requestAnimationFrame(() => {
        this.frameHandle = 0, this.flush();
      });
    }
  }
  /** Play the frame's queue, then empty it. */
  flush() {
    var s;
    const t = this.context(), e = this.slots;
    if (this.slots = [], !!t)
      for (const i of e) {
        const r = this.source.entries[i.idx];
        if (!r) continue;
        const n = this.source.files[r.buffer], l = n ? this.buffers.get(n) : void 0;
        if (!l) {
          n && !this.failed.has(n) && i.tries < Ti && (i.tries += 1, ge(this.slots, i.idx, i.panSum / i.panCount));
          continue;
        }
        const h = Ci(r.mb, this.volume);
        if (h <= 0) continue;
        (s = this.voices.get(i.idx)) == null || s.stop();
        const c = t.createBufferSource();
        c.buffer = l;
        const d = t.createGain();
        d.gain.value = h;
        const u = t.createStereoPanner();
        u.pan.value = i.panSum / i.panCount, c.connect(d).connect(u).connect(t.destination), this.voices.set(i.idx, c), c.onended = () => {
          this.voices.get(i.idx) === c && this.voices.delete(i.idx);
        }, c.start();
      }
  }
}
const Pi = [220, 261.63, 329.63, 440, 329.63, 261.63, 440, 523.25], Fi = 0.35;
class sa {
  constructor() {
    a(this, "bgmVolume", 0.7);
    a(this, "seVolume", 1);
    a(this, "isMuted", !1);
    /** True while BGM is playing (tracked even in non-browser/Node tests). */
    a(this, "isBgmPlaying", !1);
    /** Last requested BGM fade-in duration (ms). */
    a(this, "fadeInMs", 0);
    a(this, "audioCtx");
    a(this, "bgmAudio");
    a(this, "bgmGainNode");
    a(this, "bgmScheduler");
    a(this, "bgmFadeInterval");
    /** Rewind-to-intro-end watcher, and the point it rewinds to. See `BgmOptions`. */
    a(this, "bgmLoopWatcher");
    a(this, "bgmLoopFrom");
    a(this, "lastBgmUrl");
    a(this, "lastBgmOptions", {});
    a(this, "preloaded", /* @__PURE__ */ new Set());
    a(this, "seSource");
    a(this, "seBus");
  }
  getContext() {
    if (!(typeof window > "u")) {
      if (!this.audioCtx) {
        const t = window.AudioContext || window.webkitAudioContext;
        t && (this.audioCtx = new t());
      }
      return this.audioCtx && this.audioCtx.state === "suspended" && this.audioCtx.resume(), this.audioCtx;
    }
  }
  setMuted(t) {
    this.isMuted = t, this.bgmAudio && (this.bgmAudio.muted = t);
  }
  setBgmVolume(t) {
    this.bgmVolume = Math.max(0, Math.min(1, t)), this.bgmAudio && (this.bgmAudio.volume = this.isMuted ? 0 : this.bgmVolume);
  }
  setSeVolume(t) {
    var e;
    this.seVolume = Math.max(0, Math.min(1, t)), (e = this.seBus) == null || e.setVolume(this.seVolume);
  }
  /**
   * Hand the manager the game's sound bank, and start fetching it.
   *
   * Until this is called - and in any environment where the recordings cannot be
   * loaded - `playSE` falls back to synthesised blips, which keeps every test
   * environment and every machine without the assets audible.
   */
  configureSe(t) {
    this.seSource = t, this.seBus = new Ii(t, () => this.getContext()), this.seBus.setVolume(this.seVolume), this.seBus.preload();
  }
  /** Waiting requests, and how many recordings are in hand. Debug aid. */
  get sePending() {
    var t;
    return ((t = this.seBus) == null ? void 0 : t.pending) ?? 0;
  }
  get seLoaded() {
    var t;
    return ((t = this.seBus) == null ? void 0 : t.loaded) ?? 0;
  }
  /**
   * Ask for a bank sound by its index, panned by `pan`.
   *
   * This is the call sites' replacement for naming files: the ECL scripts, the
   * message VM, and the player all already speak in `SoundIdx` numbers.
   */
  queueSe(t, e = 0) {
    this.isMuted || this.seVolume <= 0 || !this.seBus || this.seBus.queue(t, e);
  }
  playSE(t, e = {}) {
    var r, n;
    if (this.isMuted || this.seVolume <= 0) return;
    const s = (n = (r = this.seSource) == null ? void 0 : r.names) == null ? void 0 : n[t];
    if (s !== void 0 && this.seBus) {
      this.queueSe(s, e.pan ?? 0);
      return;
    }
    const i = this.getContext();
    if (i)
      try {
        const l = i.currentTime, h = i.createOscillator(), c = i.createGain();
        h.connect(c), c.connect(i.destination);
        const d = Math.max(0, Math.min(1, e.volume ?? 1)), u = this.seVolume * d * 0.2;
        switch (t) {
          case "shoot": {
            h.type = "square", h.frequency.setValueAtTime(880, l), h.frequency.exponentialRampToValueAtTime(220, l + 0.08), c.gain.setValueAtTime(u * 0.4, l), c.gain.linearRampToValueAtTime(1e-3, l + 0.08), h.start(l), h.stop(l + 0.08);
            break;
          }
          case "enemy-hit": {
            h.type = "triangle", h.frequency.setValueAtTime(320, l), h.frequency.linearRampToValueAtTime(100, l + 0.05), c.gain.setValueAtTime(u * 0.5, l), c.gain.linearRampToValueAtTime(1e-3, l + 0.05), h.start(l), h.stop(l + 0.05);
            break;
          }
          case "graze": {
            h.type = "sine", h.frequency.setValueAtTime(1760, l), h.frequency.setValueAtTime(2200, l + 0.02), c.gain.setValueAtTime(u * 0.6, l), c.gain.linearRampToValueAtTime(1e-3, l + 0.05), h.start(l), h.stop(l + 0.05);
            break;
          }
          case "spellcard": {
            h.type = "sawtooth", h.frequency.setValueAtTime(440, l), h.frequency.exponentialRampToValueAtTime(1320, l + 0.4), c.gain.setValueAtTime(u * 0.8, l), c.gain.linearRampToValueAtTime(1e-3, l + 0.5), h.start(l), h.stop(l + 0.5);
            break;
          }
          case "bomb": {
            h.type = "sawtooth", h.frequency.setValueAtTime(150, l), h.frequency.linearRampToValueAtTime(40, l + 0.8), c.gain.setValueAtTime(u, l), c.gain.linearRampToValueAtTime(1e-3, l + 0.8), h.start(l), h.stop(l + 0.8);
            break;
          }
          case "item": {
            h.type = "sine", h.frequency.setValueAtTime(1046, l), h.frequency.setValueAtTime(1568, l + 0.045), c.gain.setValueAtTime(u * 0.45, l), c.gain.linearRampToValueAtTime(1e-3, l + 0.1), h.start(l), h.stop(l + 0.1);
            break;
          }
          case "pldead": {
            h.type = "sawtooth", h.frequency.setValueAtTime(400, l), h.frequency.exponentialRampToValueAtTime(80, l + 0.4), c.gain.setValueAtTime(u, l), c.gain.linearRampToValueAtTime(1e-3, l + 0.4), h.start(l), h.stop(l + 0.4);
            break;
          }
        }
      } catch {
      }
  }
  /**
   * 当前音轨的实际文件名（如 `th08_00.ogg`）。
   * 未播放时 `null`；用内置合成器占位时 `'synth'`。
   * 供 QA 读取，以区分关卡开场曲与 op 7 触发的 BOSS 曲。
   */
  get bgmName() {
    return this.isBgmPlaying ? this.lastBgmUrl ? this.lastBgmUrl.split("/").pop() ?? this.lastBgmUrl : "synth" : null;
  }
  /**
   * 播放 BGM。
   * - `url` 给出时用 HTMLAudio 播放（支持 loop/volume/fadeIn）。
   * - 无 `url`（或资源缺失）时回退到内置 Web Audio 合成琶音循环，
   *   保证任何环境立即有声（Phase 1 无需外部素材）。
   */
  playBGM(t, e = {}) {
    this.stopBGM(), this.lastBgmUrl = t, this.lastBgmOptions = { ...e };
    const { loop: s = !0, volume: i, fadeIn: r = !1, fadeInMs: n } = e, l = n ?? r;
    this.fadeInMs = typeof l == "number" ? Math.max(0, l) : l ? 1e3 : 0;
    const h = Math.max(0, Math.min(1, i ?? this.bgmVolume));
    if (this.isBgmPlaying = !0, !(typeof window > "u"))
      if (t) {
        if (this.bgmAudio = new Audio(t), this.bgmLoopFrom = s && e.loopFromSeconds !== void 0 && e.loopFromSeconds > 0 ? e.loopFromSeconds : void 0, this.bgmAudio.loop = s && this.bgmLoopFrom === void 0, this.bgmAudio.muted = this.isMuted, this.bgmAudio.volume = this.isMuted ? 0 : h, this.fadeInMs > 0 && !this.isMuted) {
          this.bgmAudio.volume = 0;
          const c = 20;
          let d = 0;
          this.bgmFadeInterval = window.setInterval(() => {
            d++, this.bgmAudio && d <= c ? this.bgmAudio.volume = h * (d / c) : this.stopFadeIn();
          }, this.fadeInMs / c);
        }
        this.bgmAudio.play().catch(() => {
        }), this.bgmLoopFrom !== void 0 && this.startLoopWatch();
      } else
        this.playSynthesizedBgm(h);
  }
  /**
   * Wind a looping track back to its loop point rather than to the start.
   *
   * HTML has no loop-range primitive for `<audio>`, so this polls the playhead.
   * The look-ahead is deliberately small: at 25 ms a tick is 40x finer than a
   * 140-second track, and the `ended` listener catches the case where a
   * backgrounded tab was throttled straight past the window.
   */
  startLoopWatch() {
    const t = this.bgmAudio;
    t && (t.addEventListener("ended", () => {
      const e = this.bgmAudio, s = this.bgmLoopFrom;
      !e || s === void 0 || (e.currentTime = s, e.play().catch(() => {
      }));
    }), this.bgmLoopWatcher = window.setInterval(() => {
      const e = this.bgmAudio, s = this.bgmLoopFrom;
      if (!e || e.paused || s === void 0) return;
      const i = e.duration;
      Number.isFinite(i) && i > s && e.currentTime >= i - 0.06 && (e.currentTime = s);
    }, 25));
  }
  /** Cancel the loop-point watcher (the element itself is dropped by `stopBGM`). */
  stopLoopWatch() {
    this.bgmLoopWatcher !== void 0 && (window.clearInterval(this.bgmLoopWatcher), this.bgmLoopWatcher = void 0), this.bgmLoopFrom = void 0;
  }
  /** 内置合成 BGM：三角波琶音循环（东方风格小调），无外部素材。 */
  playSynthesizedBgm(t) {
    const e = this.getContext();
    if (!e) return;
    const s = e.createGain();
    s.gain.value = t * 0.25, s.connect(e.destination), this.bgmGainNode = s;
    const i = Fi, r = Pi;
    let n = e.currentTime + 0.05;
    const l = () => {
      for (let c = 0; c < 16; c++) {
        const d = r[c % r.length] * (c % 2 === 0 ? 1 : 0.5), u = e.createOscillator(), m = e.createGain();
        u.type = "triangle", u.frequency.value = d, m.gain.setValueAtTime(1e-4, n), m.gain.linearRampToValueAtTime(t * 0.12, n + 0.02), m.gain.linearRampToValueAtTime(1e-4, n + i * 0.95), u.connect(m), m.connect(s), u.start(n), u.stop(n + i), n += i;
      }
    }, h = window.setInterval(() => {
      if (!this.isBgmPlaying) {
        clearInterval(h);
        return;
      }
      if (e.state === "running")
        for (; n < e.currentTime + 2; )
          l();
    }, 500);
    this.bgmScheduler = h, l();
  }
  /** Cancel a running fade-in ramp (interval handle is kept for cleanup). */
  stopFadeIn() {
    this.bgmFadeInterval !== void 0 && (clearInterval(this.bgmFadeInterval), this.bgmFadeInterval = void 0);
  }
  /**
   * Ramp the BGM to silence over `seconds` and stop it there.
   *
   * This is retail `Supervisor::FadeOutMusic(float)` (`Supervisor.cpp:1695`), which
   * the message VM asks for with 4.0 seconds at a stage's last line
   * (`Gui.cpp:873-874`, `op 12`). Abruptly stopping instead would be heard.
   */
  fadeBGM(t = 4) {
    this.stopFadeIn();
    const e = Math.max(0.05, t);
    if (typeof window > "u" || !this.bgmAudio) {
      this.stopBGM();
      return;
    }
    const s = this.bgmAudio.volume, i = 20;
    let r = 0;
    this.bgmFadeInterval = window.setInterval(
      () => {
        r++, this.bgmAudio && r < i ? this.bgmAudio.volume = Math.max(0, s * (1 - r / i)) : (this.stopFadeIn(), this.stopBGM());
      },
      e * 1e3 / i
    );
  }
  /** 预加载音频资源（Ticket 13）。非浏览器环境为 noop。 */
  preload(t) {
    if (!(typeof window > "u" || typeof Audio > "u"))
      for (const e of t) {
        const s = new Audio(e);
        s.preload = "auto", s.load(), this.preloaded.add(s);
      }
  }
  /** 预加载单首 BGM（Ticket 13）：`new Audio(url).load()`，非浏览器环境为 noop。 */
  preloadBGM(t) {
    this.preload([t]);
  }
  /** 暂停 BGM（保留位置，resume 时续播）。 */
  pauseBGM() {
    this.bgmAudio && !this.bgmAudio.paused && this.bgmAudio.pause(), this.isBgmPlaying = !1;
  }
  /** 恢复暂停的 BGM；若底噪被用户关闭过则重新 play。 */
  resumeBGM() {
    if (this.bgmAudio && this.lastBgmUrl)
      this.bgmAudio.play().catch(() => {
      });
    else if (this.lastBgmUrl === void 0) {
      this.playBGM(void 0, this.lastBgmOptions);
      return;
    }
    this.isBgmPlaying = !0;
  }
  stopBGM() {
    if (this.isBgmPlaying = !1, this.lastBgmUrl = void 0, this.lastBgmOptions = {}, this.stopFadeIn(), this.stopLoopWatch(), this.bgmAudio && (this.bgmAudio.pause(), this.bgmAudio.currentTime = 0, this.bgmAudio = void 0), this.bgmScheduler !== void 0 && (clearInterval(this.bgmScheduler), this.bgmScheduler = void 0), this.bgmGainNode) {
      try {
        const t = this.audioCtx;
        t && this.bgmGainNode.gain.setTargetAtTime(1e-4, t.currentTime, 0.05);
      } catch {
      }
      this.bgmGainNode = void 0;
    }
  }
  /** Release all audio resources (close AudioContext, drop preloads). */
  destroy() {
    var t;
    if (this.stopBGM(), (t = this.seBus) == null || t.stopAll(), this.preloaded.clear(), this.audioCtx) {
      try {
        this.audioCtx.close();
      } catch {
      }
      this.audioCtx = void 0;
    }
  }
}
class ia {
  constructor() {
    a(this, "fps", 60);
    a(this, "entityCount", 0);
    a(this, "collisionChecks", 0);
    a(this, "isVisible", !0);
    a(this, "categories", null);
    a(this, "frameCount", 0);
    a(this, "lastTime", typeof performance < "u" ? performance.now() : 0);
  }
  updateFrame(t = typeof performance < "u" ? performance.now() : 0) {
    this.frameCount++;
    const e = t - this.lastTime;
    e >= 500 && (this.fps = Math.round(this.frameCount * 1e3 / e), this.frameCount = 0, this.lastTime = t);
  }
  updateMetrics(t, e, s) {
    this.entityCount = t, this.collisionChecks = e, s && (this.categories = s);
  }
  toggle() {
    this.isVisible = !this.isVisible;
  }
  /** Chrome-only JS heap usage; null where `performance.memory` is unavailable. */
  getMemoryText() {
    const t = performance.memory;
    return !t || typeof t.usedJSHeapSize != "number" ? "Memory: n/a" : `Memory: ${(t.usedJSHeapSize / 1048576).toFixed(1)} MB`;
  }
  getMetricsText() {
    const t = [`FPS: ${this.fps}`, this.getMemoryText(), `Entities: ${this.entityCount}`];
    if (this.categories) {
      const e = this.categories;
      t.push(`  bullets:${e.bullets} enemies:${e.enemies} items:${e.items} player:${e.player}`);
    }
    return t.push(`Collision Checks: ${this.collisionChecks}`, "Engine: PixiJS 8 + TS"), t;
  }
}
class Ot {
  constructor() {
    a(this, "stageNumber", 1);
    a(this, "stageName", "Stage 1");
    a(this, "difficulty", "Normal");
    a(this, "timePhase", "night");
    a(this, "score", 0);
    /** Stored best for this shot type and difficulty, with its own continue count. */
    a(this, "hiScore", 0);
    a(this, "hiScoreContinues", 0);
    /** Continues used on the live run, which rides the score row's last column. */
    a(this, "retries", 0);
    a(this, "lives", 3);
    a(this, "bombs", 3);
    a(this, "power", 0);
    a(this, "maxPower", 128);
    /** Active team member (永夜抄 swaps A/B with focus). */
    a(this, "memberName", "灵梦");
    a(this, "memberLabel", "Reimu A");
    a(this, "focusActive", !1);
    a(this, "graze", 0);
    a(this, "spellCardName", null);
    a(this, "spellCardTime", 0);
    a(this, "spellCardBonus", 0);
    /**
     * Set when the bar broke before the clock did. 永夜抄 keeps a green CAPTURED
     * on the plate for the rest of the card, and never shows one for a time-out.
     */
    a(this, "spellCaptured", !1);
    /**
     * Point items: how many the run has collected, and the count at which the next
     * extend drops (`Gui.cpp:1453-1461` reads the same pair for the Point row).
     */
    a(this, "pointItems", 0);
    a(this, "nextPointExtend", 100);
    /** Time orbs, plus the threshold of the spell last fought. */
    a(this, "timeOrbs", 0);
    /** Second Time column: run-lifetime orbs, `g_GameManager + 0x3054`. */
    a(this, "timeOrbTotal", 0);
    /**
     * The 时符 count this stage's last spell asks for, `globals->lastSpellTimeOrbThreshold`
     * (`GameManager.cpp:226-229`). Retail prints it as the Time row's right column and warms
     * the whole row once the orbs on hand reach it (`Gui.cpp:1462-1471`).
     *
     * `null` means the host does not model a last-spell threshold at all, in which case the
     * renderer keeps the second column on the run-lifetime count and leaves the row untinted.
     */
    a(this, "timeOrbThreshold", null);
    /**
     * The night clock, in the units `GetClockTime()` returns: 0 is midnight and
     * 12 is dawn. The panel draws it as a dial, so the renderer needs the raw
     * count rather than a formatted string.
     */
    a(this, "clockTime", 0);
    /** Frames remaining for the pop-in banner animation (US#6). */
    a(this, "spellCardDisplayTimer", 0);
    /**
     * Asset key of the card owner's portrait for the cut-in that rides along with
     * the banner. 永夜抄 slides the boss's face in when it declares a card and the
     * player's face when a spell is spent, so the game owns the choice of art.
     */
    a(this, "spellCutIn", null);
    /** Which seat the cut-in belongs to: 'boss' enters left, 'player' enters right. */
    a(this, "spellCutInSide", "boss");
    a(this, "centerMessage", null);
    a(this, "centerMessageTimer", 0);
    /**
     * True while the upstream 'Enemy' approach banner owns the centre message, so
     * the renderer can show the real Taisei art instead of plain text.
     */
    a(this, "bossWarning", !1);
  }
  setStageInfo(t, e, s) {
    this.stageNumber = t, this.stageName = e, this.difficulty = s;
  }
  setTimePhase(t) {
    this.timePhase = t;
  }
  /** Record which member is flying; focus (Shift) is what swaps them in TH08. */
  setMember(t, e, s) {
    this.memberName = t, this.memberLabel = e, this.focusActive = s;
  }
  /**
   * `Gui.cpp:1428-1443`: the score and HiScore rows are nine digits plus a
   * separate tenth column holding the continues used, clamped at 9.
   */
  get formattedScore() {
    return Ot.scoreRow(this.score, this.retries);
  }
  get formattedHiScore() {
    return Ot.scoreRow(this.hiScore, this.hiScoreContinues);
  }
  static scoreRow(t, e) {
    return Math.max(0, Math.floor(t)).toString().padStart(9, "0") + " " + Math.min(9, Math.max(0, Math.floor(e)));
  }
  updateFromPlayer(t) {
    this.score = t.score, this.lives = t.lives, this.bombs = t.bombs, this.power = t.power, this.graze = t.graze;
  }
  showSpellCard(t, e, s = 1e6, i = 90, r, n = "boss") {
    this.spellCardName = t, this.spellCardTime = e, this.spellCardBonus = s, this.spellCardDisplayTimer = i, this.spellCutIn = r ?? null, this.spellCutInSide = n, this.spellCaptured = !1;
  }
  /** The card was taken by damage rather than by its clock. */
  markSpellCaptured() {
    this.spellCaptured = !0;
  }
  /**
   * Slide a portrait in without a card name, which is what the player's own
   * spell needs: the banner stays out of the way but the cut-in still flashes.
   */
  showCutIn(t, e, s = 60) {
    this.spellCutIn = t, this.spellCutInSide = e, this.spellCardDisplayTimer = Math.max(this.spellCardDisplayTimer, s);
  }
  hideSpellCard() {
    this.spellCardName = null, this.spellCardTime = 0, this.spellCardBonus = 0, this.spellCardDisplayTimer = 0, this.spellCutIn = null, this.spellCaptured = !1;
  }
  /** Raise the boss-approach warning for `frames` game frames. */
  showBossWarning(t = 150) {
    this.bossWarning = !0, this.showMessage("ENEMY APPROACHING", t);
  }
  showMessage(t, e = 180) {
    this.centerMessage = t, this.centerMessageTimer = e;
  }
  update(t) {
    this.spellCardDisplayTimer > 0 && (this.spellCardDisplayTimer = Math.max(0, this.spellCardDisplayTimer - t)), this.centerMessageTimer > 0 && (this.centerMessageTimer -= t, this.centerMessageTimer <= 0 && (this.centerMessage = null, this.bossWarning = !1));
  }
}
class aa extends X {
  constructor(e = {}, s = {}, i = {}) {
    super(e, s, { radius: i.radius ?? 14 }, "enemy");
    a(this, "hp");
    a(this, "maxHp");
    a(this, "scoreValue");
    a(this, "color");
    a(this, "shootInterval");
    a(this, "shootPattern");
    a(this, "timer", 0);
    a(this, "waypoints", []);
    /** Art key resolved by the renderer; defaults to the palette-derived kind. */
    a(this, "spriteKey");
    /** Drop tier used when this enemy dies; see `dropTierFor`. */
    a(this, "dropTier");
    a(this, "alpha", 1);
    /**
     * Extra magnification the renderer applies on top of the art's native size.
     * TH08 keeps this on the enemy's ANM script, which scales sprites in on
     * entry and out on death; 1 leaves the original cell untouched.
     */
    a(this, "drawScale", 1);
    this.hp = i.hp ?? 30, this.maxHp = this.hp, this.scoreValue = i.scoreValue ?? 1e3, this.color = i.color ?? 4500223, this.shootInterval = i.shootInterval ?? 0, this.shootPattern = i.shootPattern, this.shootPattern && i.bulletFactory && (this.shootPattern = this.shootPattern.withFactory(i.bulletFactory)), this.waypoints = i.movementWayPoints ?? [], this.spriteKey = i.spriteKey, this.dropTier = i.dropTier;
  }
  /**
   * Tier of loot this enemy yields. Explicit config wins; otherwise a tough
   * enemy is treated as an elite and drops the large power item.
   */
  dropTierFor() {
    return this.dropTier ?? (this.maxHp > 100 ? "elite" : "fairy");
  }
  takeDamage(e) {
    return this.isAlive ? (this.hp -= e, this.hp <= 0 ? (this.destroy(), this.emit("killed", this), !0) : !1) : !1;
  }
  update(e) {
    super.update(e), this.timer += e;
    for (const s of this.waypoints)
      Math.abs(this.timer - s.time) < e && (this.velocity.x = s.velocity.x, this.velocity.y = s.velocity.y);
  }
  updateAI(e, s) {
    return !this.isAlive || this.shootInterval <= 0 || !this.shootPattern ? [] : Math.floor(this.timer) % this.shootInterval === 0 ? this.shootPattern.spawn(this, this.timer, s) : [];
  }
}
const ye = {
  // Big P is worth 8 units and small P 1, straight from AddPower(8) /
  // AddPower(1) in the reference Item::CollectPower* handlers.
  power: {
    sprite: "taisei:item:power",
    size: 26,
    color: 12595264,
    power: 8,
    score: 0,
    lives: 0,
    bombs: 0
  },
  powerSmall: {
    sprite: "taisei:item:minipower",
    size: 18,
    color: 16744592,
    power: 1,
    score: 0,
    lives: 0,
    bombs: 0
  },
  point: { sprite: "taisei:item:point", size: 20, color: 4882368, power: 0, score: 100, lives: 0, bombs: 0 },
  life: { sprite: "taisei:item:life", size: 26, color: 14704808, power: 0, score: 0, lives: 1, bombs: 0 },
  bomb: { sprite: "taisei:item:bomb", size: 28, color: 4239472, power: 0, score: 0, lives: 0, bombs: 1 },
  fullpower: {
    sprite: "taisei:item:voltage",
    size: 26,
    color: 9457856,
    power: 0,
    fillsPower: !0,
    score: 0,
    lives: 0,
    bombs: 0
  },
  surge: { sprite: "taisei:item:surge", size: 22, color: 16767088, power: 2, score: 50, lives: 0, bombs: 0 }
}, Ei = 0.08, Bi = 0.955, _i = 2.2, ki = 2.6, Di = 92, Ri = 128, Ni = 48;
class Li extends X {
  constructor(e = {}, s = {}, i = {}) {
    const r = i.kind ?? "powerSmall", n = ye[r];
    super(e, s, { radius: i.radius ?? n.size / 2 }, "item");
    a(this, "kind");
    a(this, "spec");
    a(this, "alpha", 1);
    /** Accumulated flight time, used for the spawn pop-in. */
    a(this, "timer", 0);
    /** True once the item is being pulled toward the player. */
    a(this, "magnetized", !1);
    this.kind = r, this.spec = n;
  }
  /** Re-arm a pooled item at a new spawn position. */
  reset(e, s, i = this.kind) {
    this.kind = i, this.spec = ye[i], this.hitbox.radius = this.spec.size / 2, this.position.x = e, this.position.y = s, this.velocity.x = 0, this.velocity.y = 0, this.alpha = 1, this.timer = 0, this.magnetized = !1, this.isAlive = !0;
  }
  update(e) {
    this.isAlive && (this.timer += e, this.velocity.y = Math.min(_i, this.velocity.y + Ei * e), this.velocity.x *= Math.pow(Bi, e), super.update(e));
  }
  /** Curve the item toward `target`, ramping up speed the closer it gets. */
  attract(e, s, i = 1) {
    this.magnetized = !0;
    const r = e.x - this.position.x, n = e.y - this.position.y, l = Math.max(1, Math.hypot(r, n)), h = 0.34 * i * s;
    this.velocity.x += r / l * h, this.velocity.y += n / l * h;
    const c = Math.hypot(this.velocity.x, this.velocity.y), d = 9;
    c > d && (this.velocity.x = this.velocity.x / c * d, this.velocity.y = this.velocity.y / c * d);
  }
}
const be = {
  fairy: { power: 0, powerSmall: 1, point: 1, rare: 0.01 },
  elite: { power: 1, powerSmall: 2, point: 2, rare: 0.05 },
  midboss: { power: 3, powerSmall: 4, point: 4, rare: 0.25 },
  boss: { power: 6, powerSmall: 6, point: 8, rare: 1 }
}, xe = 220;
class ra {
  constructor(t = Math.random) {
    a(this, "items", []);
    /** Total items collected since the last reset, for the debug overlay. */
    a(this, "collected", 0);
    a(this, "pool", []);
    this.rng = t;
  }
  /** Number of live items. */
  get count() {
    return this.items.length;
  }
  /** Roll and spawn the drop set for a killed enemy of `tier` at (x, y). */
  spawnDrops(t, e, s) {
    return this.rollDrops(s).map((r, n) => this.spawn(r, t, e, n));
  }
  /** Decide which items a kill of `tier` yields. */
  rollDrops(t) {
    const e = be[t] ?? be.fairy, s = [];
    for (let r = 0; r < e.power; r++) s.push("power");
    for (let r = 0; r < e.powerSmall; r++) s.push("powerSmall");
    for (let r = 0; r < e.point; r++) s.push("point");
    const i = this.rng();
    return i < e.rare * 0.4 ? s.push("life") : i < e.rare && s.push("bomb"), s;
  }
  /** Spawn one item, arcing it outward so a stack does not collapse into a dot. */
  spawn(t, e, s, i = 0) {
    const r = this.pool.pop() ?? new Li();
    r.reset(e, s, t);
    const n = this.rng() * Math.PI * 2, l = 0.6 + this.rng() * 1.5;
    return r.velocity.x = Math.cos(n) * l, r.velocity.y = Math.max(-ki, -Math.abs(Math.sin(n)) * l - 0.4), r.position.x += Math.cos(n) * i * 0.5, r.isAlive = !0, this.items.push(r), this.items.length > xe && this.release(this.items.shift()), r;
  }
  /**
   * Advance every item and return the ones the player touched.
   *
   * Items home in when the player is within `ITEM_MAGNET_RADIUS`, or whenever
   * the player sits above the capture line, which is how TH08 sweeps the screen.
   */
  update(t, e, s) {
    const i = [], r = e.position.x, n = e.position.y, l = n <= Ri;
    for (let h = this.items.length - 1; h >= 0; h--) {
      const c = this.items[h];
      if (!c.isAlive) {
        this.items.splice(h, 1);
        continue;
      }
      const d = r - c.position.x, u = n - c.position.y, m = Math.hypot(d, u);
      (l || m < Di) && c.attract(e.position, t, l ? 1.6 : 1), c.update(t);
      const g = c.hitbox.radius;
      if (c.position.x < s.minX + g ? (c.position.x = s.minX + g, c.velocity.x = Math.abs(c.velocity.x) * 0.5) : c.position.x > s.maxX - g && (c.position.x = s.maxX - g, c.velocity.x = -Math.abs(c.velocity.x) * 0.5), m <= c.hitbox.radius + 8) {
        i.push(this.toResult(c)), this.items.splice(h, 1), this.release(c);
        continue;
      }
      c.position.y > s.maxY + Ni && (this.items.splice(h, 1), this.release(c));
    }
    return this.collected += i.length, i;
  }
  /** Sweep every live item into the player, as TH08 does on boss death. */
  collectAll() {
    const t = this.items.map((e) => this.toResult(e));
    this.collected += t.length;
    for (const e of this.items) this.release(e);
    return this.items = [], t;
  }
  /** Remove every item without collecting it (stage transitions, resets). */
  clear() {
    for (const t of this.items) this.release(t);
    this.items = [];
  }
  toResult(t) {
    return {
      kind: t.kind,
      power: t.spec.power,
      fillsPower: !!t.spec.fillsPower,
      score: t.spec.score,
      lives: t.spec.lives,
      bombs: t.spec.bombs
    };
  }
  release(t) {
    t.magnetized = !1, t.timer = 0, t.alpha = 1, t.velocity.x = 0, t.velocity.y = 0, this.pool.length < xe && this.pool.push(t);
  }
}
class oa extends Te {
  constructor(e) {
    super();
    a(this, "name");
    a(this, "stageNumber");
    a(this, "currentFrame", 0);
    a(this, "isPaused", !1);
    a(this, "isCompleted", !1);
    /** How many timeline events have fired so far - lets tests and the HUD prove a chart ran. */
    a(this, "executedEvents", 0);
    /** StageContext API (ticket 08): timeline-produced entities, drained by the host game. */
    a(this, "spawnedEntities", []);
    /** Pending boss phase requests, drained by the host game. */
    a(this, "bossPhaseRequests", []);
    /** Pending dialogue lines, drained by the host game. */
    a(this, "dialogueQueue", []);
    a(this, "timeline");
    this.name = e.name ?? "Stage", this.stageNumber = e.stageNumber ?? 1, this.timeline = [...e.timeline].sort((s, i) => s.frame - i.frame);
  }
  update(e = 1) {
    if (this.isPaused || this.isCompleted) return;
    const s = this.currentFrame;
    this.currentFrame += e;
    for (const i of this.timeline)
      !i.executed && i.frame > s && i.frame <= this.currentFrame && (i.executed = !0, this.executedEvents += 1, i.action(this));
  }
  complete() {
    this.isCompleted = !0, this.emit("complete", this);
  }
  /** StageContext API (ticket 08): enqueue an entity for the host game to spawn. */
  spawnEntity(e) {
    this.spawnedEntities.push(e);
  }
  /** StageContext API (ticket 08): request the host game to switch `boss` to phase `index`. */
  startBossPhase(e, s) {
    this.bossPhaseRequests.push({ boss: e, index: s });
  }
  /** StageContext API (ticket 08): enqueue a dialogue/message line for the host HUD. */
  showDialogue(e, s = 180) {
    this.dialogueQueue.push({ text: e, frames: s });
  }
  reset() {
    this.currentFrame = 0, this.isPaused = !1, this.isCompleted = !1, this.spawnedEntities.length = 0, this.bossPhaseRequests.length = 0, this.dialogueQueue.length = 0, this.executedEvents = 0;
    for (const e of this.timeline)
      e.executed = !1;
  }
}
class na {
  constructor(t = "touhou-web-engine:leaderboard", e) {
    a(this, "entries", []);
    a(this, "storage");
    this.key = t, this.storage = e ?? (typeof localStorage < "u" ? localStorage : void 0), this.load();
  }
  submit(t) {
    return this.entries.push({ ...t, createdAt: (/* @__PURE__ */ new Date()).toISOString() }), this.entries.sort((e, s) => s.score - e.score || e.createdAt.localeCompare(s.createdAt)), this.entries = this.entries.slice(0, 10), this.save(), this.getEntries();
  }
  getEntries() {
    return this.entries.map((t) => ({ ...t }));
  }
  /**
   * The best entry stored for one shot type and difficulty. 永夜抄 keeps a
   * separate high score per character, and the row also reports how many
   * continues that run spent.
   */
  bestFor(t, e) {
    let s = null;
    for (const i of this.entries)
      i.difficulty !== t || i.character !== e || (!s || i.score > s.score) && (s = i);
    return s;
  }
  clear() {
    var t;
    this.entries = [], (t = this.storage) == null || t.removeItem(this.key);
  }
  load() {
    var e;
    const t = (e = this.storage) == null ? void 0 : e.getItem(this.key);
    if (t)
      try {
        const s = JSON.parse(t);
        Array.isArray(s) && (this.entries = s.slice(0, 10));
      } catch {
        this.entries = [];
      }
  }
  save() {
    var t;
    (t = this.storage) == null || t.setItem(this.key, JSON.stringify(this.entries));
  }
}
class ha {
  constructor() {
    a(this, "frames", []);
    a(this, "recording", !1);
    a(this, "metadata", { stage: 1, difficulty: "normal", character: "reimu-yukari" });
  }
  start(t) {
    this.metadata = { ...t }, this.frames = [], this.recording = !0;
  }
  capture(t, e) {
    this.recording && this.frames.push({
      frame: t,
      snapshot: {
        actions: [...e.actions],
        pointerPos: { ...e.pointerPos },
        isDragging: e.isDragging
      }
    });
  }
  stop() {
    return this.recording = !1, this.stopSnapshot();
  }
  stopSnapshot() {
    return {
      version: 1,
      metadata: { ...this.metadata },
      frames: this.frames.map((t) => ({
        ...t,
        snapshot: {
          ...t.snapshot,
          actions: [...t.snapshot.actions],
          pointerPos: { ...t.snapshot.pointerPos }
        }
      }))
    };
  }
  /** Current recording without stopping it (safe to call every frame). */
  peek() {
    return this.stopSnapshot();
  }
  get frameCount() {
    return this.frames.length;
  }
  get isRecording() {
    return this.recording;
  }
  static encode(t) {
    return JSON.stringify(t);
  }
  static decode(t) {
    const e = JSON.parse(t);
    if (e.version !== 1 || !Array.isArray(e.frames)) throw new Error("Unsupported replay format");
    return e;
  }
}
class la {
  constructor(t) {
    a(this, "cursor", 0);
    this.data = t;
  }
  reset() {
    this.cursor = 0;
  }
  next() {
    const t = this.data.frames[this.cursor];
    return t && this.cursor++, t;
  }
  get isFinished() {
    return this.cursor >= this.data.frames.length;
  }
}
function ca(o) {
  const t = [
    "up",
    "down",
    "left",
    "right",
    "shoot",
    "bomb",
    "slow",
    "pause",
    "skip",
    "debug",
    "debug-collision"
  ];
  return o.filter((e) => t.includes(e));
}
const we = 70;
class ua extends X {
  constructor(e) {
    super(e.position ?? { x: 224, y: 120 }, {}, { radius: e.hitboxRadius ?? 24 }, "boss");
    a(this, "name");
    a(this, "phases");
    a(this, "currentPhaseIndex", 0);
    a(this, "currentHp", 0);
    a(this, "isDefeated", !1);
    a(this, "timer", 0);
    a(this, "spriteKey");
    a(this, "alpha", 1);
    /** Eased gauge fill — the retail `bossLifeBarMaxSize` trailing ghost bar. */
    a(this, "gaugeDisplayRatio", 0);
    /** Whole-gauge fade in/out, retail `bossUIOpacity / 255`. */
    a(this, "gaugeOpacity", 0);
    a(this, "hpPerBar", 0);
    this.name = e.name, this.spriteKey = e.spriteKey, this.phases = e.phases, e.bulletFactory && this.withBulletFactory(e.bulletFactory), this.initPhase(0);
  }
  /** Route bullet patterns through a shared object-pool factory. */
  withBulletFactory(e) {
    var s, i, r;
    for (const n of this.phases)
      (i = (s = n.spellCard) == null ? void 0 : s.pattern) == null || i.withFactory(e), (r = n.pattern) == null || r.withFactory(e);
    return this;
  }
  get currentPhase() {
    return this.phases[this.currentPhaseIndex];
  }
  get isSpellCardActive() {
    var e;
    return ((e = this.currentPhase) == null ? void 0 : e.isSpellCard) ?? !1;
  }
  get currentSpellCard() {
    var e;
    return (e = this.currentPhase) == null ? void 0 : e.spellCard;
  }
  /** Life bars owned by the current phase (>= 1, <= 8 gauge slots). */
  get lifeBars() {
    var s;
    const e = ((s = this.currentPhase) == null ? void 0 : s.lifeBars) ?? 1;
    return Math.max(1, Math.min(Ce, Math.round(e)));
  }
  /** How many whole life bars are still standing. */
  get remainingBars() {
    return !this.isAlive || this.currentHp <= 0 || this.hpPerBar <= 0 ? 0 : Math.max(1, Math.min(this.lifeBars, Math.ceil(this.currentHp / this.hpPerBar)));
  }
  /** Progress through the life bar currently being chewed through, 0..1. */
  get currentBarRatio() {
    if (this.hpPerBar <= 0) return 0;
    const e = this.currentHp % this.hpPerBar;
    return Math.max(0, Math.min(1, e === 0 ? 1 : e / this.hpPerBar));
  }
  /** Gauge fill the retail game would hand to `Gui::FUN_004230c0`. */
  get gaugeRatio() {
    var s;
    const e = ((s = this.currentPhase) == null ? void 0 : s.maxHp) ?? 0;
    return e <= 0 ? 0 : Math.max(0, Math.min(1, this.currentHp / e));
  }
  /** Seconds left on the active spell card, 0 outside spell cards. */
  get spellcardSecondsRemaining() {
    var e;
    return ((e = this.currentSpellCard) == null ? void 0 : e.timeRemaining) ?? 0;
  }
  initPhase(e) {
    if (e >= this.phases.length) {
      this.isDefeated = !0, this.emit("defeat", this), this.destroy();
      return;
    }
    this.currentPhaseIndex = e;
    const s = this.phases[e];
    this.currentHp = s.maxHp, this.hpPerBar = s.maxHp / this.lifeBars, this.timer = 0, this.gaugeDisplayRatio = 1, s.isSpellCard && s.spellCard && (s.spellCard.start(), this.emit("spellcard-start", s.spellCard));
  }
  takeDamage(e) {
    var s;
    !this.isAlive || this.isDefeated || (this.currentHp -= Math.max(0, Math.min(we, e)), this.emit("damage", { currentHp: this.currentHp, maxHp: (s = this.currentPhase) == null ? void 0 : s.maxHp }), this.currentHp <= 0 && this.nextPhase());
  }
  /**
   * Spend a lump-sum damage source (spell card bombs) as a run of retail-sized
   * hits, so the per-hit cap cannot be bypassed. Overkill is lost, exactly as
   * when a TH08 boss's last life bar breaks mid-volley.
   */
  applyBurst(e) {
    let s = Math.max(0, Math.round(e));
    for (; s > 0 && this.isAlive && !this.isDefeated; ) {
      const i = Math.min(we, s);
      s -= i, this.takeDamage(i);
    }
  }
  nextPhase() {
    this.emit("phase-clear", {
      phaseIndex: this.currentPhaseIndex,
      spellCard: this.currentSpellCard
    }), this.initPhase(this.currentPhaseIndex + 1);
  }
  updateAI(e, s) {
    return [];
  }
  update(e) {
    super.update(e), this.timer += e, this.currentSpellCard && this.currentSpellCard.isActive && (this.currentSpellCard.update(e), this.currentSpellCard.timeRemaining <= 0 && this.nextPhase()), this.updateGauge(e);
  }
  /**
   * Retail `Gui::FUN_00435900` gauge easing: the fill chases the true value at
   * 0.01/frame going up and 0.02/frame going down, which is what leaves the
   * pale damage ghost behind the bar.
   */
  updateGauge(e) {
    const s = this.isAlive && !this.isDefeated ? this.gaugeRatio : 0, i = this.gaugeDisplayRatio;
    s > i ? this.gaugeDisplayRatio = Math.min(s, i + v.riseStep * e) : s < i && (this.gaugeDisplayRatio = Math.max(s, i - v.fallStep * e));
    const r = this.isAlive && !this.isDefeated ? 1 : 0, n = v.opacityStep * e;
    this.gaugeOpacity < r ? this.gaugeOpacity = Math.min(r, this.gaugeOpacity + n) : this.gaugeOpacity > r && (this.gaugeOpacity = Math.max(r, this.gaugeOpacity - n));
  }
}
export {
  ua as $,
  jt as A,
  es as B,
  xt as C,
  ss as D,
  aa as E,
  Yi as F,
  Xi as G,
  Ws as H,
  ra as I,
  sa as J,
  ia as K,
  na as L,
  st as M,
  Ot as N,
  la as O,
  $ as P,
  qi as Q,
  ha as R,
  oa as S,
  Wi as T,
  le as U,
  $i as V,
  Qi as W,
  ji as X,
  Ce as Y,
  de as Z,
  v as _,
  mt as a,
  ve as a0,
  be as a1,
  Ri as a2,
  Ni as a3,
  Bi as a4,
  Ei as a5,
  Di as a6,
  _i as a7,
  ki as a8,
  ye as a9,
  $e as aA,
  gt as aB,
  Se as aC,
  Ui as aD,
  nt as aE,
  As as aF,
  ca as aG,
  ts as aH,
  Vi as aI,
  Li as aa,
  xe as ab,
  Ds as ac,
  hi as ad,
  li as ae,
  ci as af,
  ct as ag,
  Ze as ah,
  vs as ai,
  Ms as aj,
  ws as ak,
  X as al,
  Te as am,
  pi as an,
  mi as ao,
  di as ap,
  we as aq,
  Zi as ar,
  ea as as,
  ui as at,
  Ss as au,
  Ts as av,
  Lt as aw,
  Ji as ax,
  gi as ay,
  Oi as az,
  ti as b,
  ei as c,
  Zs as d,
  he as e,
  _t as f,
  tt as g,
  Gt as h,
  ps as i,
  Je as j,
  yt as k,
  ds as l,
  je as m,
  Vt as n,
  ms as o,
  Qt as p,
  cs as q,
  ls as r,
  ys as s,
  ta as t,
  zi as u,
  Me as v,
  Nt as w,
  at as x,
  Ht as y,
  Ki as z
};
