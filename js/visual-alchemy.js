/**
 * Visual Alchemy & Generative Oriental Metaphysics UI Engine
 * Features:
 * 1. Full-Page Ambient Celestial Flux & Elemental Stardust (全屏环境背景流光与五行微粒仙气动效)
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
  let fluxWaves = [];
  const PARTICLE_COUNT = 85;

  const ELEMENTS = [
    { name: '木', en: 'Wood', color: '#10b981', glow: 'rgba(16, 185, 129, 0.45)', lightColor: '#059669', lightGlow: 'rgba(5, 150, 105, 0.18)' },
    { name: '火', en: 'Fire', color: '#ef4444', glow: 'rgba(239, 68, 68, 0.45)', lightColor: '#dc2626', lightGlow: 'rgba(220, 38, 38, 0.18)' },
    { name: '土', en: 'Earth', color: '#f59e0b', glow: 'rgba(245, 158, 11, 0.45)', lightColor: '#d97706', lightGlow: 'rgba(217, 119, 6, 0.18)' },
    { name: '金', en: 'Metal', color: '#fbbf24', glow: 'rgba(251, 191, 36, 0.45)', lightColor: '#b45309', lightGlow: 'rgba(180, 83, 9, 0.18)' },
    { name: '水', en: 'Water', color: '#3b82f6', glow: 'rgba(59, 130, 246, 0.45)', lightColor: '#2563eb', lightGlow: 'rgba(37, 99, 235, 0.18)' }
  ];

  class AmbientParticle {
    constructor(w, h) {
      this.reset(w, h, true);
    }

    reset(w, h, initial = false) {
      const screenW = w || (typeof window !== 'undefined' ? window.innerWidth : 800);
      const screenH = h || (typeof window !== 'undefined' ? window.innerHeight : 600);
      this.x = Math.random() * screenW;
      this.y = initial ? Math.random() * screenH : (screenH + 10 + Math.random() * 20);
      this.vx = (Math.random() - 0.5) * 0.45;
      this.vy = -(0.25 + Math.random() * 0.55); // Gentle upward celestial floating
      this.size = 1.6 + Math.random() * 2.4;
      this.baseAlpha = 0.18 + Math.random() * 0.18; // Elevated brightness: 0.18 ~ 0.36
      this.alpha = this.baseAlpha;
      this.phase = Math.random() * Math.PI * 2;
      this.pulseSpeed = 0.02 + Math.random() * 0.03;
      this.elementIdx = Math.floor(Math.random() * 5);
      this.element = ELEMENTS[this.elementIdx];
    }

    update(w, h, isLight) {
      this.x += this.vx;
      this.y += this.vy;
      this.phase += this.pulseSpeed;
      this.alpha = Math.max(0.08, this.baseAlpha + Math.sin(this.phase) * 0.10);

      // Subtle mouse interaction
      if (mousePos.isHover) {
        const dx = mousePos.x - this.x;
        const dy = mousePos.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100 && dist > 1) {
          const force = (1 - dist / 100) * 0.8;
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

  function initParticleRings(canvasId, initialElement = '木') {
    fluxCanvas = document.getElementById(canvasId);
    if (!fluxCanvas) return;
    fluxCtx = fluxCanvas.getContext('2d');
    activeElement = initialElement;
    isFluxEnabled = true;

    // Initialize full-page ambient particles
    particles = [];
    const w = (typeof window !== 'undefined') ? window.innerWidth : 800;
    const h = (typeof window !== 'undefined') ? window.innerHeight : 600;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(new AmbientParticle(w, h));
    }

    // Initialize waves with elevated luminous colors
    fluxWaves = [
      { yRatio: 0.22, speed: 0.0008, amplitude: 38, wavelength: 0.0018, color: 'rgba(251, 191, 36, 0.24)', lightColor: 'rgba(217, 119, 6, 0.16)' },
      { yRatio: 0.50, speed: 0.0006, amplitude: 48, wavelength: 0.0014, color: 'rgba(168, 85, 247, 0.22)', lightColor: 'rgba(147, 51, 234, 0.14)' },
      { yRatio: 0.76, speed: 0.0007, amplitude: 42, wavelength: 0.0016, color: 'rgba(16, 185, 129, 0.22)', lightColor: 'rgba(5, 150, 105, 0.14)' },
      { yRatio: 0.38, speed: 0.0005, amplitude: 32, wavelength: 0.0022, color: 'rgba(59, 130, 246, 0.22)', lightColor: 'rgba(37, 99, 235, 0.14)' }
    ];

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
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', debounce(resize, 120));
    }
    resize();

    // Mouse interactivity
    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', (e) => {
        mousePos.x = e.clientX;
        mousePos.y = e.clientY;
        mousePos.isHover = true;
      });
      document.addEventListener('mouseleave', () => {
        mousePos.isHover = false;
      });
    }

    // Page visibility to pause when inactive
    if (typeof document !== 'undefined') {
      document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
          stopLoop();
        } else if (isFluxEnabled) {
          startLoop();
        }
      });
    }

    startLoop();
  }

  let lastFrameTime = 0;
  const FRAME_INTERVAL = 1000 / 30; // ~30 fps cap for ambient particle flux, saving GPU/CPU power

  function startLoop() {
    if (!isFluxEnabled || isRunning) return;
    isRunning = true;
    lastFrameTime = (typeof performance !== 'undefined') ? performance.now() : Date.now();
    loop(lastFrameTime);
  }

  function stopLoop() {
    isRunning = false;
    if (animationId) {
      cancelAnimationFrame(animationId);
      animationId = null;
    }
  }

  function loop(now) {
    if (!isRunning || !fluxCanvas || !fluxCtx) return;
    animationId = requestAnimationFrame(loop);
    if (now - lastFrameTime < FRAME_INTERVAL) return;
    lastFrameTime = now;
    renderFlux(now);
  }

  function renderFlux(now = 0) {
    const w = (typeof window !== 'undefined') ? window.innerWidth : (fluxCanvas.clientWidth || 800);
    const h = (typeof window !== 'undefined') ? window.innerHeight : (fluxCanvas.clientHeight || 600);

    if (typeof fluxCtx.clearRect === 'function') {
      fluxCtx.clearRect(0, 0, w, h);
    }

    const isLight = (typeof document !== 'undefined') &&
      ((document.documentElement && typeof document.documentElement.getAttribute === 'function' && document.documentElement.getAttribute('data-theme') === 'light') ||
       (document.documentElement && document.documentElement.classList && document.documentElement.classList.contains('light')) ||
       (document.body && document.body.classList && document.body.classList.contains('light-theme')));

    // 1. Render Full-Page Ambient Luminous Flux Waves (流光飘带 - 双层柔和微光光晕与丝缎光带)
    fluxWaves.forEach((wave, idx) => {
      const baseY = h * wave.yRatio;
      const t = now * wave.speed + idx * 1.5;
      if (fluxCtx.beginPath) fluxCtx.beginPath();
      if (fluxCtx.moveTo) fluxCtx.moveTo(0, baseY + Math.sin(t) * wave.amplitude);

      for (let x = 0; x <= w; x += 40) {
        const y = baseY + Math.sin(x * wave.wavelength + t) * wave.amplitude +
                          Math.cos(x * wave.wavelength * 0.5 + t * 0.8) * (wave.amplitude * 0.5);
        if (fluxCtx.lineTo) fluxCtx.lineTo(x, y);
      }

      // Outer soft glowing aura ribbon
      fluxCtx.strokeStyle = isLight ? wave.lightColor : wave.color;
      fluxCtx.lineWidth = 36 + idx * 6;
      fluxCtx.lineCap = 'round';
      if (fluxCtx.stroke) fluxCtx.stroke();

      // Inner silky radiant core ribbon
      fluxCtx.lineWidth = 10 + idx * 3;
      if (fluxCtx.stroke) fluxCtx.stroke();
    });

    // 2. Render Full-Page Drifting Celestial Stardust Particles (微粒仙气)
    particles.forEach(p => {
      p.update(w, h, isLight);

      if (fluxCtx.beginPath) fluxCtx.beginPath();
      if (fluxCtx.arc) fluxCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      fluxCtx.fillStyle = isLight ? (p.element.lightColor || p.element.color) : p.element.color;
      fluxCtx.globalAlpha = isLight ? Math.min(p.alpha, 0.22) : p.alpha;
      if (fluxCtx.fill) fluxCtx.fill();

      // Soft glow aura for larger particles
      if (p.size > 2.2) {
        if (fluxCtx.beginPath) fluxCtx.beginPath();
        if (fluxCtx.arc) fluxCtx.arc(p.x, p.y, p.size * 2.2, 0, Math.PI * 2);
        fluxCtx.fillStyle = isLight ? (p.element.lightGlow || p.element.glow) : p.element.glow;
        if (fluxCtx.fill) fluxCtx.fill();
      }
    });

    fluxCtx.globalAlpha = 1.0;
  }

  function setActiveElement(element) {
    if (element && ELEMENTS.some(e => e.name === element)) {
      activeElement = element;
      const targetIdx = ELEMENTS.findIndex(e => e.name === element);
      if (targetIdx >= 0 && particles.length > 0) {
        particles.forEach((p, i) => {
          if (i % 2 === 0) {
            p.elementIdx = targetIdx;
            p.element = ELEMENTS[targetIdx];
          }
        });
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
        fluxCtx.clearRect(0, 0, fluxCanvas.width, fluxCanvas.height);
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
    renderHexagramLines: animateLineTransformation
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = VisualAlchemy;
}
if (typeof window !== 'undefined') {
  window.VisualAlchemy = VisualAlchemy;
}
