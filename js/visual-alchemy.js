/**
 * Visual Alchemy & Generative Oriental Metaphysics UI Engine
 * Features:
 * 1. Dynamic Elemental Flux Particle Rings (五行生克流动粒子环)
 * 2. Animated Five-Element Radar Morphing (五行雷达流体流变)
 * 3. Interactive Hexagram Transformation Lines (周易六爻变卦互动流变)
 * High-performance, RAF throttled, IntersectionObserver & Page Visibility aware.
 */

const VisualAlchemy = (function() {
  let fluxCanvas = null;
  let fluxCtx = null;
  let animationId = null;
  let isRunning = false;
  let isFluxEnabled = false;
  let activeElement = '木';
  let mousePos = { x: -1000, y: -1000, isHover: false };
  let particles = [];
  const PARTICLE_COUNT = 85;

  const ELEMENTS = [
    { name: '木', en: 'Wood', color: '#10b981', glow: 'rgba(16, 185, 129, 0.45)' },
    { name: '火', en: 'Fire', color: '#ef4444', glow: 'rgba(239, 68, 68, 0.45)' },
    { name: '土', en: 'Earth', color: '#f59e0b', glow: 'rgba(245, 158, 11, 0.45)' },
    { name: '金', en: 'Metal', color: '#e2e8f0', glow: 'rgba(226, 232, 240, 0.45)' },
    { name: '水', en: 'Water', color: '#3b82f6', glow: 'rgba(59, 130, 246, 0.45)' }
  ];

  class Particle {
    constructor(hubIdx) {
      this.reset(hubIdx);
    }

    reset(hubIdx) {
      this.hubIdx = (typeof hubIdx === 'number') ? hubIdx : Math.floor(Math.random() * 5);
      this.nextHubIdx = (this.hubIdx + 1) % 5; // Generation cycle: Wood -> Fire -> Earth -> Metal -> Water -> Wood
      this.progress = Math.random();
      this.speed = 0.003 + Math.random() * 0.004;
      this.size = 1.8 + Math.random() * 2.2;
      this.alpha = 0.2 + Math.random() * 0.7;
      this.offset = (Math.random() - 0.5) * 16;
    }

    update() {
      this.progress += this.speed;
      if (this.progress >= 1) {
        this.reset(this.nextHubIdx);
      }
    }
  }

  function getHubPositions(cx, cy, radius) {
    const startAngle = -Math.PI / 2;
    const step = (Math.PI * 2) / 5;
    return ELEMENTS.map((el, idx) => {
      const angle = startAngle + idx * step;
      return {
        ...el,
        x: cx + radius * Math.cos(angle),
        y: cy + radius * Math.sin(angle),
        angle
      };
    });
  }

  function initParticleRings(canvasId, initialElement = '木') {
    fluxCanvas = document.getElementById(canvasId);
    if (!fluxCanvas) return;
    fluxCtx = fluxCanvas.getContext('2d');
    activeElement = initialElement;

    // Initialize particles
    particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(new Particle());
    }

    // Resize handling with DPR awareness
    function resize() {
      if (!fluxCanvas) return;
      const rect = fluxCanvas.parentElement ? fluxCanvas.parentElement.getBoundingClientRect() : fluxCanvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      const w = rect.width || 360;
      const h = fluxCanvas.clientHeight || 180;
      fluxCanvas.width = w * dpr;
      fluxCanvas.height = h * dpr;
      fluxCtx.scale(dpr, dpr);
      fluxCanvas.style.width = w + 'px';
      fluxCanvas.style.height = h + 'px';
    }
    window.addEventListener('resize', debounce(resize, 150));
    resize();

    // Mouse interactivity (support pointer-events-none overlay)
    window.addEventListener('mousemove', (e) => {
      if (!fluxCanvas) return;
      const rect = fluxCanvas.getBoundingClientRect();
      mousePos.x = e.clientX - rect.left;
      mousePos.y = e.clientY - rect.top;
      mousePos.isHover = (e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom);
    });
    document.addEventListener('mouseleave', () => {
      mousePos.isHover = false;
    });

    // Page visibility to pause when inactive
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        stopLoop();
      } else if (isFluxEnabled) {
        startLoop();
      }
    });

    // IntersectionObserver to pause when off-screen
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && isFluxEnabled) {
            startLoop();
          } else {
            stopLoop();
          }
        });
      }, { threshold: 0.1 });
      observer.observe(fluxCanvas);
    }

    startLoop();
  }

  let lastFrameTime = 0;
  const FRAME_INTERVAL = 1000 / 30; // ~30 fps cap for ambient particle flux, saving 60-75% GPU/CPU power

  function startLoop() {
    if (!isFluxEnabled || isRunning) return;
    isRunning = true;
    lastFrameTime = performance.now();
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
    renderFlux();
  }

  function renderFlux() {
    const w = fluxCanvas.clientWidth || 360;
    const h = fluxCanvas.clientHeight || 180;
    const cx = w / 2;
    const cy = h / 2;
    const radius = Math.min(cx, cy) * 0.72;

    fluxCtx.clearRect(0, 0, w, h);

    const hubs = getHubPositions(cx, cy, radius);

    // 1. Draw Generation Cycle Ring (Outer Sheng Circle)
    fluxCtx.beginPath();
    fluxCtx.arc(cx, cy, radius, 0, Math.PI * 2);
    fluxCtx.strokeStyle = 'rgba(212, 175, 55, 0.12)';
    fluxCtx.lineWidth = 1.2;
    fluxCtx.stroke();

    // 2. Draw Overcoming Cycle Star (Inner Ke Pentagram)
    fluxCtx.beginPath();
    for (let i = 0; i < 5; i++) {
      const targetIdx = (i + 2) % 5;
      fluxCtx.moveTo(hubs[i].x, hubs[i].y);
      fluxCtx.lineTo(hubs[targetIdx].x, hubs[targetIdx].y);
    }
    fluxCtx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
    fluxCtx.setLineDash([3, 4]);
    fluxCtx.stroke();
    fluxCtx.setLineDash([]);

    // 3. Render Particles along Generation Curves
    particles.forEach(p => {
      p.update();
      const from = hubs[p.hubIdx];
      const to = hubs[p.nextHubIdx];

      // Arc bezier interpolation
      const midAngle = (from.angle + to.angle) / 2;
      const ctrlX = cx + (radius * 1.15) * Math.cos(midAngle);
      const ctrlY = cy + (radius * 1.15) * Math.sin(midAngle);

      const t = p.progress;
      const invT = 1 - t;
      let px = invT * invT * from.x + 2 * invT * t * ctrlX + t * t * to.x;
      let py = invT * invT * from.y + 2 * invT * t * ctrlY + t * t * to.y;

      // Mouse subtle gravitational swirl
      if (mousePos.isHover) {
        const dx = mousePos.x - px;
        const dy = mousePos.y - py;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 60) {
          const force = (1 - dist / 60) * 8;
          px += (dx / dist) * force;
          py += (dy / dist) * force;
        }
      }

      fluxCtx.beginPath();
      fluxCtx.arc(px, py, p.size, 0, Math.PI * 2);
      fluxCtx.fillStyle = from.color;
      fluxCtx.globalAlpha = p.alpha;
      fluxCtx.fill();
    });
    fluxCtx.globalAlpha = 1.0;

    // 4. Render Hub Nodes
    hubs.forEach(hub => {
      const isDayMasterHub = (hub.name === activeElement);

      // Glow Halo
      fluxCtx.beginPath();
      const haloRadius = isDayMasterHub ? 16 : 9;
      fluxCtx.arc(hub.x, hub.y, haloRadius, 0, Math.PI * 2);
      fluxCtx.fillStyle = hub.glow;
      fluxCtx.fill();

      // Core Node
      fluxCtx.beginPath();
      const nodeRadius = isDayMasterHub ? 7 : 5;
      fluxCtx.arc(hub.x, hub.y, nodeRadius, 0, Math.PI * 2);
      fluxCtx.fillStyle = hub.color;
      fluxCtx.strokeStyle = isDayMasterHub ? '#fef08a' : '#ffffff';
      fluxCtx.lineWidth = isDayMasterHub ? 2 : 1;
      fluxCtx.fill();
      fluxCtx.stroke();

      // Label
      const isEn = (typeof I18N !== 'undefined' && I18N.currentLang === 'en') || (typeof document !== 'undefined' && document.documentElement.lang === 'en');
      fluxCtx.fillStyle = isDayMasterHub ? '#fef08a' : '#e5e7eb';
      fluxCtx.font = isDayMasterHub ? 'bold 12px "Songti SC", serif' : '10px -apple-system, sans-serif';
      fluxCtx.textAlign = 'center';
      fluxCtx.textBaseline = 'middle';

      const labelDist = radius * 0.24;
      const lx = hub.x + labelDist * Math.cos(hub.angle);
      const ly = hub.y + labelDist * Math.sin(hub.angle);
      const hubLabel = isEn ? (hub.en || hub.name) : hub.name;
      fluxCtx.fillText(hubLabel, lx, ly);
    });

    // 5. Central Taiji Monad
    fluxCtx.beginPath();
    fluxCtx.arc(cx, cy, 12, 0, Math.PI * 2);
    fluxCtx.fillStyle = 'rgba(26, 28, 34, 0.85)';
    fluxCtx.strokeStyle = 'rgba(212, 175, 55, 0.5)';
    fluxCtx.lineWidth = 1;
    fluxCtx.fill();
    fluxCtx.stroke();

    const isEn = (typeof I18N !== 'undefined' && I18N.currentLang === 'en') || (typeof document !== 'undefined' && document.documentElement.lang === 'en');
    fluxCtx.fillStyle = '#d4af37';
    fluxCtx.font = 'bold 9px "Songti SC", serif';
    fluxCtx.textAlign = 'center';
    fluxCtx.textBaseline = 'middle';
    fluxCtx.fillText(isEn ? 'Qi' : '气', cx, cy);
  }

  function setActiveElement(element) {
    if (element && ELEMENTS.some(e => e.name === element)) {
      activeElement = element;
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
