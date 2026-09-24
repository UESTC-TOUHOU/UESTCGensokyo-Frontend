var T = Object.defineProperty;
var M = (t, s, a) => s in t ? T(t, s, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[s] = a;
var r = (t, s, a) => M(t, typeof s != "symbol" ? s + "" : s, a);
import { v as B } from "./Boss-BY9U9ygY.js";
import { ac as O, J as N, ad as w, ae as H, af as G, $ as v, a0 as U, z as X, F as V, ag as Y, ah as z, ai as K, aj as W, ak as Z, a1 as j, E as k, al as q, am as J, an as $, ao as Q, ap as ss, N as as, a2 as ts, a3 as es, a4 as ns, a5 as is, a6 as rs, a7 as os, a8 as cs, a9 as ls, G as us, aa as ps, I as hs, L as As, aq as Ss, ab as _s, ar as Es, as as ds, at as ms, K as Is, Z as ys, A as gs, O as Ts, R as Ms, au as Bs, av as Ls, aw as Rs, S as fs, ax as Ps, ay as bs, az as xs, aA as Ds, aB as Fs, aC as Cs, aD as Os, aE as Ns, aF as ws, aG as Hs, aH as Gs, aI as vs, t as Us } from "./Boss-BY9U9ygY.js";
class _ {
  constructor() {
    /** Defaults to the shared Bullet pool; override with withFactory() to route elsewhere. */
    r(this, "factory", (s) => B(s));
  }
  /** Override how spawned bullets are created (used for object pooling). */
  withFactory(s) {
    return this.factory = s, this;
  }
}
function I(t, s, a) {
  const {
    count: e,
    speed: n,
    baseAngle: i,
    spreadAngle: o = 0,
    radius: l = 4,
    color: u = 3377407,
    tag: p = "enemy-bullet",
    sprite: h
  } = a, c = [], E = e > 1 ? i - o * (e - 1) / 2 : i;
  for (let A = 0; A < e; A++) {
    const S = E + o * A;
    c.push(
      t({
        position: { x: s.position.x, y: s.position.y },
        velocity: { x: Math.cos(S) * n, y: Math.sin(S) * n },
        radius: l,
        color: u,
        tag: p,
        sprite: h
      })
    );
  }
  return c;
}
class f extends _ {
  constructor(s) {
    super(), this.config = s;
  }
  spawn(s, a, e) {
    const {
      count: n,
      speed: i,
      angleOffset: o = 0,
      radius: l = 4,
      color: u = 16724804,
      angularVelocity: p = 0,
      acceleration: h = 0,
      tag: c = "enemy-bullet",
      sprite: E
    } = this.config, A = [], S = Math.PI * 2 / n;
    for (let d = 0; d < n; d++) {
      const m = S * d + o, y = Math.cos(m) * i, g = Math.sin(m) * i;
      A.push(
        this.factory({
          position: { x: s.position.x, y: s.position.y },
          velocity: { x: y, y: g },
          radius: l,
          color: u,
          angularVelocity: p,
          acceleration: h,
          tag: c,
          sprite: E
        })
      );
    }
    return A;
  }
}
class P extends _ {
  constructor(s) {
    super(), this.config = s;
  }
  spawn(s, a, e) {
    const {
      count: n,
      speed: i,
      baseAngle: o,
      spreadAngle: l = 0,
      radius: u = 4,
      color: p = 3377407,
      tag: h = "enemy-bullet",
      sprite: c
    } = this.config;
    return I(this.factory, s, {
      count: n,
      speed: i,
      baseAngle: o,
      spreadAngle: l,
      radius: u,
      color: p,
      tag: h,
      sprite: c
    });
  }
}
class b extends _ {
  constructor(s) {
    super(), this.config = s;
  }
  spawn(s, a, e) {
    const {
      count: n = 1,
      speed: i,
      spreadAngle: o = 0.2,
      radius: l = 4,
      color: u = 15615146,
      tag: p = "enemy-bullet",
      sprite: h
    } = this.config, c = e ? s.angleTo(e) : Math.PI / 2;
    return I(this.factory, s, {
      count: n,
      speed: i,
      baseAngle: c,
      spreadAngle: o,
      radius: l,
      color: u,
      tag: p,
      sprite: h
    });
  }
}
class x extends _ {
  constructor(s) {
    super(), this.patterns = s;
  }
  /** Propagate the factory to every child pattern so composite bullets pool too. */
  withFactory(s) {
    super.withFactory(s);
    for (const a of this.patterns)
      a.withFactory(s);
    return this;
  }
  spawn(s, a, e) {
    const n = [];
    for (const i of this.patterns)
      n.push(...i.spawn(s, a, e));
    return n;
  }
}
class D {
  constructor(s) {
    r(this, "name");
    r(this, "durationSeconds");
    r(this, "bonusScore");
    r(this, "maxHp");
    r(this, "pattern");
    r(this, "timeRemaining");
    r(this, "currentBonus");
    r(this, "isActive", !1);
    r(this, "isCaptured", !0);
    this.name = s.name, this.durationSeconds = s.durationSeconds, this.bonusScore = s.bonusScore ?? 1e6, this.maxHp = s.maxHp, this.pattern = s.pattern, this.timeRemaining = this.durationSeconds, this.currentBonus = this.bonusScore;
  }
  start() {
    this.isActive = !0, this.timeRemaining = this.durationSeconds, this.currentBonus = this.bonusScore, this.isCaptured = !0;
  }
  update(s) {
    if (!this.isActive) return;
    const a = s / 60;
    if (this.timeRemaining = Math.max(0, this.timeRemaining - a), this.durationSeconds > 0) {
      const e = this.timeRemaining / this.durationSeconds;
      this.currentBonus = Math.floor(this.bonusScore * e);
    }
    this.timeRemaining <= 0 && (this.isActive = !1);
  }
  failCapture() {
    this.isCaptured = !1, this.currentBonus = 0;
  }
}
export {
  b as AimingPattern,
  O as AssetManager,
  N as AudioManager,
  w as BOSS_HALO_SPAN,
  H as BOSS_WARNING_FRAMES,
  G as BOSS_WARNING_SLIDE_FRAMES,
  v as Boss,
  U as Bullet,
  _ as BulletPattern,
  X as BulletSystem,
  f as CircularPattern,
  V as CollisionSystem,
  x as CompositePattern,
  Y as DEFAULT_BOUNDS,
  z as DEFAULT_BULLET_POOL_CAP,
  K as DEFAULT_GAMEPAD_BINDINGS,
  W as DEFAULT_KEY_BINDINGS,
  Z as DEFAULT_PLAYFIELD,
  j as DROP_TABLE,
  k as Enemy,
  q as Entity,
  J as EventEmitter,
  $ as HITBOX_BEZEL,
  Q as HITBOX_CORE,
  ss as HITBOX_DOT,
  as as HUD,
  ts as ITEM_CAPTURE_LINE,
  es as ITEM_DEEP_CULL,
  ns as ITEM_DRAG,
  is as ITEM_GRAVITY,
  rs as ITEM_MAGNET_RADIUS,
  os as ITEM_MAX_FALL,
  cs as ITEM_MAX_RISE,
  ls as ITEM_SPECS,
  us as InputSystem,
  ps as Item,
  hs as ItemSystem,
  As as Leaderboard,
  P as LinearPattern,
  Ss as MAX_BOSS_HIT_DAMAGE,
  _s as MAX_ITEMS,
  Es as PLAYER_BASE_TILT,
  ds as PLAYER_MAX_LEAN,
  ms as PORTRAIT_SCALE,
  Is as PerformanceMonitor,
  ys as PixiRenderer,
  gs as Player,
  Ts as ReplayPlayer,
  Ms as ReplayRecorder,
  Bs as SWITCH_FLASH_FRAMES,
  Ls as SpatialHashGrid,
  D as SpellCard,
  Rs as SpriteManager,
  fs as Stage,
  Ps as TAISEI_BASE_TILT,
  bs as TAISEI_SCALE,
  xs as addVectors,
  Ds as angleBetween,
  Fs as createVector2,
  Cs as distanceBetween,
  Os as drainBulletPool,
  Ns as getBulletPoolSize,
  ws as nearestPaletteName,
  Hs as normalizeReplayActions,
  B as obtainBullet,
  Gs as releaseBullet,
  vs as scaleVector,
  I as spawnSpread,
  Us as taiseiFrameKey
};
