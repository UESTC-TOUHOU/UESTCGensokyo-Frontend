var B = Object.defineProperty;
var T = (t, s, a) => s in t ? B(t, s, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[s] = a;
var i = (t, s, a) => T(t, typeof s != "symbol" ? s + "" : s, a);
import { w as M } from "./Boss-C8S9tkJU.js";
import { af as O, K as N, ag as w, ah as H, ai as G, a0 as U, a1 as v, A as X, G as V, aj as Y, ak as K, al as z, am as W, an as J, a4 as j, E as k, ao as q, ap as Q, aq as Z, ar as $, as as ss, O as as, a5 as ts, a6 as es, a7 as ns, a8 as rs, a9 as is, aa as os, ab as cs, ac as ls, J as us, ad as ps, I as As, L as hs, at as Ss, ae as _s, au as Es, av as ds, aw as ms, N as Is, _ as gs, F as ys, Q as Bs, R as Ts, ax as Ms, ay as Rs, az as Ls, S as fs, aA as Ps, aB as bs, aC as xs, aD as Ds, aE as Fs, aF as Cs, aG as Os, aH as Ns, aI as ws, aJ as Hs, aK as Gs, aL as Us, a3 as vs, r as Xs, aM as Vs, a2 as Ys, t as Ks } from "./Boss-C8S9tkJU.js";
class _ {
  constructor() {
    /** Defaults to the shared Bullet pool; override with withFactory() to route elsewhere. */
    i(this, "factory", (s) => M(s));
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
    baseAngle: r,
    spreadAngle: o = 0,
    radius: l = 4,
    color: u = 3377407,
    tag: p = "enemy-bullet",
    sprite: A
  } = a, c = [], E = e > 1 ? r - o * (e - 1) / 2 : r;
  for (let h = 0; h < e; h++) {
    const S = E + o * h;
    c.push(
      t({
        position: { x: s.position.x, y: s.position.y },
        velocity: { x: Math.cos(S) * n, y: Math.sin(S) * n },
        radius: l,
        color: u,
        tag: p,
        sprite: A
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
      speed: r,
      angleOffset: o = 0,
      radius: l = 4,
      color: u = 16724804,
      angularVelocity: p = 0,
      acceleration: A = 0,
      tag: c = "enemy-bullet",
      sprite: E
    } = this.config, h = [], S = Math.PI * 2 / n;
    for (let d = 0; d < n; d++) {
      const m = S * d + o, g = Math.cos(m) * r, y = Math.sin(m) * r;
      h.push(
        this.factory({
          position: { x: s.position.x, y: s.position.y },
          velocity: { x: g, y },
          radius: l,
          color: u,
          angularVelocity: p,
          acceleration: A,
          tag: c,
          sprite: E
        })
      );
    }
    return h;
  }
}
class P extends _ {
  constructor(s) {
    super(), this.config = s;
  }
  spawn(s, a, e) {
    const {
      count: n,
      speed: r,
      baseAngle: o,
      spreadAngle: l = 0,
      radius: u = 4,
      color: p = 3377407,
      tag: A = "enemy-bullet",
      sprite: c
    } = this.config;
    return I(this.factory, s, {
      count: n,
      speed: r,
      baseAngle: o,
      spreadAngle: l,
      radius: u,
      color: p,
      tag: A,
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
      speed: r,
      spreadAngle: o = 0.2,
      radius: l = 4,
      color: u = 15615146,
      tag: p = "enemy-bullet",
      sprite: A
    } = this.config, c = e ? s.angleTo(e) : Math.PI / 2;
    return I(this.factory, s, {
      count: n,
      speed: r,
      baseAngle: c,
      spreadAngle: o,
      radius: l,
      color: u,
      tag: p,
      sprite: A
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
    for (const r of this.patterns)
      n.push(...r.spawn(s, a, e));
    return n;
  }
}
class D {
  constructor(s) {
    i(this, "name");
    i(this, "durationSeconds");
    i(this, "bonusScore");
    i(this, "maxHp");
    i(this, "pattern");
    i(this, "timeRemaining");
    i(this, "currentBonus");
    i(this, "isActive", !1);
    i(this, "isCaptured", !0);
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
  U as Boss,
  v as Bullet,
  _ as BulletPattern,
  X as BulletSystem,
  f as CircularPattern,
  V as CollisionSystem,
  x as CompositePattern,
  Y as DEFAULT_BOUNDS,
  K as DEFAULT_BULLET_POOL_CAP,
  z as DEFAULT_GAMEPAD_BINDINGS,
  W as DEFAULT_KEY_BINDINGS,
  J as DEFAULT_PLAYFIELD,
  j as DROP_TABLE,
  k as Enemy,
  q as Entity,
  Q as EventEmitter,
  Z as HITBOX_BEZEL,
  $ as HITBOX_CORE,
  ss as HITBOX_DOT,
  as as HUD,
  ts as ITEM_CAPTURE_LINE,
  es as ITEM_DEEP_CULL,
  ns as ITEM_DRAG,
  rs as ITEM_GRAVITY,
  is as ITEM_MAGNET_RADIUS,
  os as ITEM_MAX_FALL,
  cs as ITEM_MAX_RISE,
  ls as ITEM_SPECS,
  us as InputSystem,
  ps as Item,
  As as ItemSystem,
  hs as Leaderboard,
  P as LinearPattern,
  Ss as MAX_BOSS_HIT_DAMAGE,
  _s as MAX_ITEMS,
  Es as PLAYER_BASE_TILT,
  ds as PLAYER_MAX_LEAN,
  ms as PORTRAIT_SCALE,
  Is as PerformanceMonitor,
  gs as PixiRenderer,
  ys as Player,
  Bs as ReplayPlayer,
  Ts as ReplayRecorder,
  Ms as SWITCH_FLASH_FRAMES,
  Rs as SpatialHashGrid,
  D as SpellCard,
  Ls as SpriteManager,
  fs as Stage,
  Ps as TAISEI_BASE_TILT,
  bs as TAISEI_SCALE,
  xs as addVectors,
  Ds as angleBetween,
  Fs as createVector2,
  Cs as distanceBetween,
  Os as drainBulletPool,
  Ns as getBulletPoolSize,
  ws as getResourceBase,
  Hs as nearestPaletteName,
  Gs as normalizeReplayActions,
  M as obtainBullet,
  Us as releaseBullet,
  vs as resetResourceBase,
  Xs as resolveAssetUrl,
  Vs as scaleVector,
  Ys as setResourceBase,
  I as spawnSpread,
  Ks as taiseiFrameKey
};
