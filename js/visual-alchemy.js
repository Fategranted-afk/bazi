/**
 * Visual Alchemy & Generative Oriental Metaphysics UI Engine
 * Features:
 * 1. Full-Page Ambient Ephemeral Light Streaks & Stardust (全屏转瞬即逝的灵动流光与五行微粒仙气)
 *    - Replaces persistent distracting oscillating wave ribbons with fleeting cosmic flux streaks
 *    - Fade in -> Glide gracefully -> Fade out into the void (流星 / 极光掠影 / 灵动光丝)
 *    - 100% Non-intrusive backdrop, zero foreground distraction
 * 2. Animated Five-Element Radar Morphing (五行雷达流体流变)
 * 3. Interactive Hexagram Transformation Lines (周易六爻变卦互动流变)
 * High-performance, RAF throttled, IntersectionObserver & Page Visibility aware.
 */

const VisualAlchemy = (function() {
  let fluxCanvas = null;
  let fluxCtx = null;
  let animationId = null;
  let isRunning = false;
  let isFluxEnabled = true;
  let activeElement = '木';
  let mousePos = { x: -1000, y: -1000, isHover: false };
  let particles = [];
  let streaks = [];
  const fluxWaves = []; // Deprecated: Continuous sine waves removed in favor of fleeting ephemeral streaks
  const PARTICLE_COUNT = 85;

  const ELEMENTS = [
    { 
      name: '木', en: 'Wood', color: '#10b981', glow: 'rgba(16, 185, 129, 0.45)', 
      lightColor: '#059669', lightGlow: 'rgba(5, 150, 105, 0.18)',
      rgb: '16, 185, 129', lightRgb: '5, 150, 105'
    },
    { 
      name: '火', en: 'Fire', color: '#ef4444', glow: 'rgba(239, 68, 68, 0.45)', 
      lightColor: '#dc2626', lightGlow: 'rgba(220, 38, 38, 0.18)',
      rgb: '239, 68, 68', lightRgb: '220, 38, 38'
    },
    { 
      name: '土', en: 'Earth', color: '#f59e0b', glow: 'rgba(245, 158, 11, 0.45)', 
      lightColor: '#d97706', lightGlow: 'rgba(217, 119, 6, 0.18)',
      rgb: '245, 158, 11', lightRgb: '217, 119, 6'
    },
    { 
      name: '金', en: 'Metal', color: '#fbbf24', glow: 'rgba(251, 191, 36, 0.45)', 
      lightColor: '#b45309', lightGlow: 'rgba(180, 83, 9, 0.18)',
      rgb: '251, 191, 36', lightRgb: '180, 83, 9'
    },
    { 
      name: '水', en: 'Water', color: '#3b82f6', glow: 'rgba(59, 130, 246, 0.45)', 
      lightColor: '#2563eb', lightGlow: 'rgba(37, 99, 235, 0.18)',
      rgb: '59, 130, 246', lightRgb: '37, 99, 235'
    }
  ];

  class AmbientParticle {
    constructor(w, h) {
      this.reset(w, h, true);
    }

    reset(w, h, initial = false) {
      const screenW = w || (typeof window !== 'undefined' ? window.innerWidth : 800) || 800;
      const screenH = h || (typeof window !== 'undefined' ? window.innerHeight : 600) || 600;
      this.x = Math.random() * screenW;
      this.y = initial ? Math.random() * screenH : (screenH + 10 + Math.random() * 20);
      this.vx = (Math.random() - 0.5) * 0.35;
      this.vy = -(0.18 + Math.random() * 0.40); // Gentle upward celestial micro-drift
      this.size = 0.6 + Math.random() * 0.7; // Delicate pinpoint micro-stardust (0.6 ~ 1.3px), eliminating large distracting floating light blobs
      this.baseAlpha = 0.08 + Math.random() * 0.10; // Subdued, serene cosmic stardust
      this.alpha = this.baseAlpha;
      this.phase = Math.random() * Math.PI * 2;
      this.pulseSpeed = 0.015 + Math.random() * 0.025;
      this.elementIdx = Math.floor(Math.random() * 5);
      this.element = ELEMENTS[this.elementIdx];
    }

    update(w, h, isLight) {
      this.x += this.vx;
      this.y += this.vy;
      this.phase += this.pulseSpeed;
      this.alpha = Math.max(0.04, this.baseAlpha + Math.sin(this.phase) * 0.05);

      // Subtle mouse interaction
      if (mousePos.isHover) {
        const dx = mousePos.x - this.x;
        const dy = mousePos.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 80 && dist > 1) {
          const force = (1 - dist / 80) * 0.6;
          this.x -= (dx / dist) * force;
          this.y -= (dy / dist) * force;
        }
      }

      // Wrap around edges
      if (this.y < -20) {
        this.reset(w, h, false);
      }
      if (this.x < -20) this.x = w + 10;
      if (this.x > w + 20) this.x = -10;
    }
  }

  /**
   * Grand Celestial Streamer (大号宏伟流光 · 转瞬即逝的灵动流光 · 极光掠影 / 流星 / 宏伟光丝)
   * Behavior:
   * - Elevated to Grand Celestial Streamers per user specification.
   * - Sweeping majestic length across the celestial expanse (280px ~ 480px).
   * - Brilliant luminous core with broad atmospheric ethereal celestial veil aura (14px ~ 24px).
   * - Spawns with serene staggered intervals (2.5~6.5s) from peripheral or upper celestial expanse.
   * - Glides gracefully: Radiant spark ignition -> Grand streamer elongation -> Majestic glide -> Ethereal dissolution into void.
   * - 100% Non-intrusive backdrop, zero foreground text distraction.
   */
  class FleetingStreak {
    constructor(w, h, initialDelayMs = 0) {
      this.state = 'waiting'; // 'waiting' | 'active'
      this.waitDuration = initialDelayMs || (1200 + Math.random() * 3200);
      this.timer = 0;
      this.reset(w, h);
    }

    reset(w, h) {
      const screenW = (w && w > 0) ? w : ((typeof window !== 'undefined' && window.innerWidth) || 800);
      const screenH = (h && h > 0) ? h : ((typeof window !== 'undefined' && window.innerHeight) || 600);

      // Celestial glide angle: gentle downward diagonal (22° to 38° downward-right)
      // or occasional downward-left (142° to 158°)
      const isLeftToRight = Math.random() > 0.18;
      const angleDeg = isLeftToRight ? (22 + Math.random() * 16) : (142 + Math.random() * 16);
      const angleRad = (angleDeg * Math.PI) / 180;

      // Grand Streamer Length: 280px to 480px (proportional on smaller viewports)
      this.length = Math.min(screenW * 0.52, 280 + Math.random() * 200);

      // Spawn origin: from upper celestial horizon or peripheral margin,
      // avoiding dead-center reading area so foreground text remains completely peaceful
      if (isLeftToRight) {
        if (Math.random() > 0.35) {
          // Upper celestial horizon
          this.startX = -40 + Math.random() * (screenW * 0.75);
          this.startY = -30 + Math.random() * Math.min(screenH * 0.25, 160);
        } else {
          // Left peripheral margin
          this.startX = -50 - Math.random() * 20;
          this.startY = Math.random() * Math.min(screenH * 0.45, 320);
        }
      } else {
        if (Math.random() > 0.35) {
          // Upper right celestial horizon
          this.startX = screenW * 0.25 + Math.random() * (screenW * 0.75);
          this.startY = -30 + Math.random() * Math.min(screenH * 0.25, 160);
        } else {
          // Right peripheral margin
          this.startX = screenW + 30 + Math.random() * 20;
          this.startY = Math.random() * Math.min(screenH * 0.45, 320);
        }
      }

      this.currentX = this.startX;
      this.currentY = this.startY;

      // Speed: 230px to 340px per second -> per millisecond
      const speedPxPerSec = 230 + Math.random() * 110;
      this.vx = (Math.cos(angleRad) * speedPxPerSec) / 1000;
      this.vy = (Math.sin(angleRad) * speedPxPerSec) / 1000;
      this.angleRad = angleRad;

      // Life duration: 2000ms ~ 2800ms
      this.duration = 2000 + Math.random() * 800;
      this.elapsed = 0;

      // Peak alpha: luminous yet ethereal
      this.peakAlphaDark = 0.42 + Math.random() * 0.12; // 0.42 ~ 0.54
      this.peakAlphaLight = 0.20 + Math.random() * 0.08; // 0.20 ~ 0.28

      // Grand Luminous Filament: Core (2.6px ~ 3.6px) & Majestic Celestial Veil (14px ~ 24px)
      this.coreWidth = 2.6 + Math.random() * 1.0;
      this.glowWidth = 14.0 + Math.random() * 10.0;

      // Color selection: weighted towards activeElement with celestial harmony
      let el = ELEMENTS.find(e => e.name === activeElement);
      if (!el || Math.random() > 0.65) {
        el = ELEMENTS[Math.floor(Math.random() * ELEMENTS.length)];
      }
      this.element = el;
      this.state = 'waiting';
    }

    update(deltaMs, w, h) {
      if (this.state === 'waiting') {
        this.timer += deltaMs;
        if (this.timer >= this.waitDuration) {
          this.state = 'active';
          this.timer = 0;
          this.elapsed = 0;
        }
        return;
      }

      if (this.state === 'active') {
        this.elapsed += deltaMs;
        this.currentX += this.vx * deltaMs;
        this.currentY += this.vy * deltaMs;

        if (this.elapsed >= this.duration) {
          // Flight concluded: enter serene intermission pause (2.5s ~ 6.5s)
          this.state = 'waiting';
          this.waitDuration = 2500 + Math.random() * 4000;
          this.timer = 0;
          this.reset(w, h);
        }
      }
    }

    draw(ctx, isLight) {
      if (!ctx || this.state !== 'active') return;

      const progress = Math.min(1, Math.max(0, this.elapsed / this.duration));

      // Fade envelope: Soft fade-in (0 -> 0.20), sustain (0.20 -> 0.70), smooth fade-out (0.70 -> 1.0)
      let fade = 1.0;
      if (progress < 0.20) {
        fade = progress / 0.20;
      } else if (progress > 0.70) {
        fade = (1.0 - progress) / 0.30;
      }
      fade = Math.max(0, Math.min(1, fade));

      const peakAlpha = isLight ? this.peakAlphaLight : this.peakAlphaDark;
      const alpha = peakAlpha * fade;
      if (alpha <= 0.005) return;

      // Dynamic tail elongation & dissolution:
      let lengthFactor = 1.0;
      if (progress < 0.20) {
        lengthFactor = Math.sin((progress / 0.20) * (Math.PI / 2));
      } else if (progress > 0.70) {
        lengthFactor = Math.max(0.15, 1.0 - ((progress - 0.70) / 0.30) * 0.85);
      }
      const curLength = Math.max(3, this.length * lengthFactor);

      const headX = this.currentX;
      const headY = this.currentY;
      const tailX = headX - Math.cos(this.angleRad) * curLength;
      const tailY = headY - Math.sin(this.angleRad) * curLength;

      const rgb = isLight ? (this.element.lightRgb || '180, 83, 9') : (this.element.rgb || '251, 191, 36');

      // Create linear gradient from head to tail with distance guard
      let grad = null;
      if (typeof ctx.createLinearGradient === 'function') {
        try {
          const dx = headX - tailX;
          const dy = headY - tailY;
          if (dx * dx + dy * dy >= 4) {
            grad = ctx.createLinearGradient(headX, headY, tailX, tailY);
            grad.addColorStop(0, `rgba(${rgb}, ${alpha.toFixed(3)})`);
            grad.addColorStop(0.18, `rgba(${rgb}, ${(alpha * 0.80).toFixed(3)})`);
            grad.addColorStop(0.55, `rgba(${rgb}, ${(alpha * 0.35).toFixed(3)})`);
            grad.addColorStop(0.85, `rgba(${rgb}, ${(alpha * 0.10).toFixed(3)})`);
            grad.addColorStop(1, `rgba(${rgb}, 0)`);
          }
        } catch (e) {
          grad = null;
        }
      }

      // Defensive state isolation to prevent canvas property leakage
      const canSave = (typeof ctx.save === 'function' && typeof ctx.restore === 'function');
      if (canSave) ctx.save();
      try {
        // 1. Grand Outer Celestial Aura Streamer (Atmospheric celestial veil)
        if (typeof ctx.beginPath === 'function') ctx.beginPath();
        if (typeof ctx.moveTo === 'function') ctx.moveTo(headX, headY);
        if (typeof ctx.lineTo === 'function') ctx.lineTo(tailX, tailY);
        ctx.strokeStyle = grad || (isLight ? this.element.lightGlow : this.element.glow);
        ctx.lineWidth = this.glowWidth;
        ctx.lineCap = 'round';
        ctx.globalAlpha = 0.40;
        if (typeof ctx.stroke === 'function') ctx.stroke();

        // 2. Radiant Inner Core Filament (Majestic celestial streamer thread)
        if (typeof ctx.beginPath === 'function') ctx.beginPath();
        if (typeof ctx.moveTo === 'function') ctx.moveTo(headX, headY);
        if (typeof ctx.lineTo === 'function') ctx.lineTo(tailX, tailY);
        ctx.strokeStyle = grad || (isLight ? this.element.lightColor : this.element.color);
        ctx.lineWidth = this.coreWidth;
        ctx.lineCap = 'round';
        ctx.globalAlpha = 0.92;
        if (typeof ctx.stroke === 'function') ctx.stroke();

        // 3. Ethereal Leading Head Glow (Celestial Streamer Sparkle & Corona)
        if (typeof ctx.beginPath === 'function') ctx.beginPath();
        if (typeof ctx.arc === 'function') ctx.arc(headX, headY, 2.6, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb}, ${Math.min(1, alpha * 1.4).toFixed(3)})`;
        ctx.globalAlpha = 1.0;
        if (typeof ctx.fill === 'function') ctx.fill();

        // Soft halo around the leading head
        if (typeof ctx.beginPath === 'function') ctx.beginPath();
        if (typeof ctx.arc === 'function') ctx.arc(headX, headY, 5.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb}, ${(alpha * 0.45).toFixed(3)})`;
        if (typeof ctx.fill === 'function') ctx.fill();
      } finally {
        if (canSave) ctx.restore();
      }
    }
  }

  let hasListenersAttached = false;

  function initParticleRings(canvasId, initialElement = '木') {
    fluxCanvas = (typeof document !== 'undefined' && typeof document.getElementById === 'function')
      ? document.getElementById(canvasId)
      : null;
    if (!fluxCanvas) return;
    fluxCtx = (typeof fluxCanvas.getContext === 'function') ? fluxCanvas.getContext('2d') : null;
    activeElement = initialElement;
    isFluxEnabled = true;

    // Initialize full-page ambient particles
    particles = [];
    const w = (typeof window !== 'undefined' ? window.innerWidth : 800) || 800;
    const h = (typeof window !== 'undefined' ? window.innerHeight : 600) || 600;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(new AmbientParticle(w, h));
    }

    // Initialize fleeting ephemeral light streaks (staggered initial delays: 1.2s and 5.5s)
    streaks.length = 0;
    streaks.push(
      new FleetingStreak(w, h, 1200),
      new FleetingStreak(w, h, 5500)
    );

    // Resize handling with DPR awareness for full-screen fixed canvas
    function resize() {
      if (!fluxCanvas || !fluxCtx) return;
      const dpr = Math.min((typeof window !== 'undefined' ? window.devicePixelRatio : 1) || 1, 2);
      const curW = (typeof window !== 'undefined' ? window.innerWidth : 800) || 800;
      const curH = (typeof window !== 'undefined' ? window.innerHeight : 600) || 600;
      fluxCanvas.width = curW * dpr;
      fluxCanvas.height = curH * dpr;
      if (typeof fluxCtx.setTransform === 'function') {
        try { fluxCtx.setTransform(1, 0, 0, 1, 0, 0); } catch (e) {}
      }
      if (typeof fluxCtx.scale === 'function') {
        try { fluxCtx.scale(dpr, dpr); } catch (e) {}
      }
      fluxCanvas.style.width = curW + 'px';
      fluxCanvas.style.height = curH + 'px';
    }

    if (!hasListenersAttached) {
      if (typeof window !== 'undefined') {
        window.addEventListener('resize', debounce(resize, 120));
        window.addEventListener('mousemove', (e) => {
          mousePos.x = e.clientX;
          mousePos.y = e.clientY;
          mousePos.isHover = true;
        });
      }
      if (typeof document !== 'undefined') {
        document.addEventListener('mouseleave', () => {
          mousePos.isHover = false;
        });
        document.addEventListener('visibilitychange', () => {
          if (document.hidden) {
            stopLoop();
          } else if (isFluxEnabled) {
            startLoop();
          }
        });
      }
      hasListenersAttached = true;
    }

    resize();
    startLoop();
  }

  let lastFrameTime = 0;
  const FRAME_INTERVAL = 1000 / 60; // 60 fps pacing guard for silky smooth celestial glide

  function startLoop() {
    if (!isFluxEnabled || isRunning) return;
    isRunning = true;
    lastFrameTime = (typeof performance !== 'undefined' && typeof performance.now === 'function') ? performance.now() : Date.now();
    loop(lastFrameTime);
  }

  function stopLoop() {
    isRunning = false;
    if (animationId) {
      if (typeof cancelAnimationFrame !== 'undefined') {
        cancelAnimationFrame(animationId);
      } else if (typeof window !== 'undefined' && typeof window.cancelAnimationFrame === 'function') {
        window.cancelAnimationFrame(animationId);
      }
      animationId = null;
    }
  }

  function loop(now) {
    if (!isRunning || !fluxCanvas || !fluxCtx) return;
    if (typeof requestAnimationFrame !== 'undefined') {
      animationId = requestAnimationFrame(loop);
    } else if (typeof window !== 'undefined' && typeof window.requestAnimationFrame === 'function') {
      animationId = window.requestAnimationFrame(loop);
    }
    const deltaMs = now - lastFrameTime;
    if (deltaMs < 14) return; // Silky smooth 60fps pacing guard
    lastFrameTime = now;
    renderFlux(now, Math.min(deltaMs, 100));
  }

  function renderFlux(now = 0, deltaMs = 33) {
    const w = (typeof window !== 'undefined' ? window.innerWidth : (fluxCanvas && fluxCanvas.clientWidth)) || 800;
    const h = (typeof window !== 'undefined' ? window.innerHeight : (fluxCanvas && fluxCanvas.clientHeight)) || 600;

    if (fluxCtx && typeof fluxCtx.clearRect === 'function') {
      fluxCtx.clearRect(0, 0, w, h);
    }

    const isLight = (typeof document !== 'undefined') &&
      ((document.documentElement && typeof document.documentElement.getAttribute === 'function' && document.documentElement.getAttribute('data-theme') === 'light') ||
       (document.documentElement && document.documentElement.classList && document.documentElement.classList.contains('light')) ||
       (document.body && document.body.classList && document.body.classList.contains('light-theme')));

    // 1. Render Fleeting Ephemeral Light Streaks (转瞬即逝的灵动流光 · 极光掠影 · 优雅掠过与淡出 · 零干扰)
    if (streaks && streaks.length > 0 && fluxCtx) {
      streaks.forEach(streak => {
        streak.update(deltaMs, w, h);
        streak.draw(fluxCtx, isLight);
      });
    }

    // 2. Render Full-Page Drifting Celestial Micro-Stardust (极微五行星尘 · 彻底取代大号浮动圆点)
    if (particles && particles.length > 0 && fluxCtx) {
      particles.forEach(p => {
        p.update(w, h, isLight);

        if (typeof fluxCtx.beginPath === 'function') fluxCtx.beginPath();
        if (typeof fluxCtx.arc === 'function') fluxCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        fluxCtx.fillStyle = isLight ? (p.element.lightColor || p.element.color) : p.element.color;
        fluxCtx.globalAlpha = isLight ? Math.min(p.alpha, 0.15) : p.alpha;
        if (typeof fluxCtx.fill === 'function') fluxCtx.fill();
      });
    }

    if (fluxCtx) {
      fluxCtx.globalAlpha = 1.0;
    }
  }

  function setActiveElement(element) {
    if (element && ELEMENTS.some(e => e.name === element)) {
      activeElement = element;
      const targetIdx = ELEMENTS.findIndex(e => e.name === element);
      if (targetIdx >= 0) {
        if (particles.length > 0) {
          particles.forEach((p, i) => {
            if (i % 2 === 0) {
              p.elementIdx = targetIdx;
              p.element = ELEMENTS[targetIdx];
            }
          });
        }
        if (streaks.length > 0) {
          streaks.forEach(s => {
            s.element = ELEMENTS[targetIdx];
          });
        }
      }
    }
  }

  function toggleFlux() {
    isFluxEnabled = !isFluxEnabled;
    if (isFluxEnabled) {
      startLoop();
    } else {
      stopLoop();
      if (fluxCtx && fluxCanvas) {
        if (typeof fluxCtx.clearRect === 'function') {
          fluxCtx.clearRect(0, 0, fluxCanvas.width, fluxCanvas.height);
        }
      }
    }
    return isFluxEnabled;
  }

  // Interactive Hexagram Line Morphing Animation Helper
  function animateLineTransformation(lineElement, fromVal, toVal) {
    if (!lineElement) return;
    lineElement.classList.add('transition-all', 'duration-500', 'scale-105');
    lineElement.style.boxShadow = '0 0 16px rgba(245, 158, 11, 0.8)';
    setTimeout(() => {
      lineElement.classList.remove('scale-105');
      lineElement.style.boxShadow = '';
    }, 600);
  }

  function debounce(fn, wait) {
    let t;
    return function(...args) {
      clearTimeout(t);
      t = setTimeout(() => fn.apply(this, args), wait);
    };
  }

  return {
    initParticleRings,
    initFlux: initParticleRings,
    setActiveElement,
    setPalette: setActiveElement,
    toggleFlux,
    startFlux: startLoop,
    stopFlux: stopLoop,
    animateLineTransformation,
    renderHexagramLines: animateLineTransformation,
    getStreaks: () => streaks,
    get streaks() { return streaks; },
    fluxWaves
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = VisualAlchemy;
}
if (typeof window !== 'undefined') {
  window.VisualAlchemy = VisualAlchemy;
}
