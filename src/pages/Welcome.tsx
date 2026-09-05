import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import kyoukoLogo from '../assets/kyouko-logo.png';
import './Welcome.css';

// ---- 弹幕粒子：手写 Canvas，零依赖 ----
// 低透明度青/红弹丸缓慢漂浮，边界反弹模拟 yamabiko 回声。
// prefers-reduced-motion 时完全停绘。
const PARTICLE_COUNT = 40;

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  color: string;
  spin: number;
  spinSpeed: number;
};

// 弹丸形状：小圆（米弹）/ 菱形（针弹）/ 五角星（星弹）
function drawBullet(ctx: CanvasRenderingContext2D, p: Particle) {
  ctx.save();
  ctx.translate(p.x, p.y);
  ctx.rotate(p.spin);
  ctx.beginPath();
  if (p.r > 6) {
    for (let i = 0; i < 10; i++) {
      const ang = (Math.PI / 5) * i - Math.PI / 2;
      const rad = i % 2 === 0 ? p.r : p.r * 0.42;
      const px = Math.cos(ang) * rad;
      const py = Math.sin(ang) * rad;
      if (i === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
  } else if (p.r > 3.5) {
    ctx.moveTo(0, -p.r * 1.6);
    ctx.lineTo(p.r * 0.7, 0);
    ctx.lineTo(0, p.r * 1.6);
    ctx.lineTo(-p.r * 0.7, 0);
  } else {
    ctx.arc(0, 0, p.r, 0, Math.PI * 2);
  }
  ctx.closePath();
  ctx.fillStyle = p.color;
  ctx.fill();
  ctx.restore();
}

function startDanmaku() {
  const canvas = document.getElementById('danmaku-bg') as HTMLCanvasElement | null;
  if (!canvas) return () => {};
  const ctx = canvas.getContext('2d');
  if (!ctx) return () => {};

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return () => {};
  }

  const DPR = Math.min(window.devicePixelRatio || 1, 2);
  let w = 0;
  let h = 0;

  const resize = () => {
    const parent = canvas.parentElement;
    w = parent?.clientWidth ?? window.innerWidth;
    h = parent?.clientHeight ?? window.innerHeight;
    canvas.width = Math.round(w * DPR);
    canvas.height = Math.round(h * DPR);
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  };
  resize();
  window.addEventListener('resize', resize);

  const COLORS = [
    'rgba(142, 30, 38, 0.18)',
    'rgba(47, 117, 113, 0.18)',
    'rgba(201, 151, 56, 0.16)',
  ];
  const particles: Particle[] = [];
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      r: 2.5 + Math.random() * 6,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      spin: Math.random() * Math.PI * 2,
      spinSpeed: (Math.random() - 0.5) * 0.03,
    });
  }

  let raf = 0;
  const tick = () => {
    ctx.clearRect(0, 0, w, h);
    for (const p of particles) {
      p.x += p.vx;
      p.y += p.vy;
      p.spin += p.spinSpeed;
      if (p.x < -p.r || p.x > w + p.r) p.vx *= -1;
      if (p.y < -p.r || p.y > h + p.r) p.vy *= -1;
      p.x = Math.max(-p.r, Math.min(w + p.r, p.x));
      p.y = Math.max(-p.r, Math.min(h + p.r, p.y));
      drawBullet(ctx, p);
    }
    raf = requestAnimationFrame(tick);
  };
  raf = requestAnimationFrame(tick);

  return () => {
    cancelAnimationFrame(raf);
    window.removeEventListener('resize', resize);
  };
}

function Welcome() {
  const { t } = useTranslation();
  const cleanupRef = useRef<(() => void) | undefined>(undefined);

  useEffect(() => {
    // canvas 需在 DOM 挂载并布局后初始化
    const id = setTimeout(() => {
      cleanupRef.current = startDanmaku();
    }, 50);
    return () => {
      clearTimeout(id);
      cleanupRef.current?.();
    };
  }, []);

  return (
    <div className="welcome-container">
      <div className="welcome-stage">
        <canvas id="danmaku-bg" className="danmaku-bg" aria-hidden="true"></canvas>

        <div className="spellcard-banner welcome-banner">
          {t('welcome.spellcard')}
        </div>

        <h1 className="welcome-title">{t('welcome.title')}</h1>

        <div className="seal-container">
          <div className="seal-ring seal-ring-outer"></div>
          <div className="seal-ring seal-ring-inner"></div>
          <div className="spellcard-frame">
            <img src={kyoukoLogo} className="animated-logo" alt={t('welcome.logo_alt')} />
          </div>
        </div>

        <p className="welcome-sub">{t('welcome.subtitle')}</p>
      </div>
    </div>
  );
}

export default Welcome;
