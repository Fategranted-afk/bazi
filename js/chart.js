/**
 * Visual Canvas Chart Renderer for Five Elements Energy Distribution
 * Enhanced with Dynamic Morphing Animations, Pulsing Node Halos & Glows
 */

class ElementChart {
  static _activeAnimations = {};
  static _lastValues = {};

  /**
   * Render Five Elements Energy Distribution Radar
   * @param {string} canvasId 
   * @param {Object} percentages e.g. { '木': 25.0, '火': 15.0, '土': 30.0, '金': 10.0, '水': 20.0 }
   * @param {boolean} animated Whether to smoothly tween between old and new values
   */
  static renderRadar(canvasId, percentages, animated = true) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;

    // In non-browser / test environments (e.g. JSC), execute static render immediately
    if (typeof requestAnimationFrame === 'undefined' || !animated) {
      this._drawRadarFrame(canvas, percentages);
      this._lastValues[canvasId] = { ...percentages };
      return;
    }

    const prevValues = this._lastValues[canvasId] || { '木': 20, '火': 20, '土': 20, '金': 20, '水': 20 };
    const targetValues = { ...percentages };

    if (this._activeAnimations[canvasId]) {
      cancelAnimationFrame(this._activeAnimations[canvasId]);
    }

    const startTime = performance.now();
    const duration = 400; // ms

    const elements = ['木', '火', '土', '金', '水'];

    const step = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1.0);
      // Ease out cubic
      const ease = 1 - Math.pow(1 - progress, 3);

      const current = {};
      elements.forEach(el => {
        const start = parseFloat(prevValues[el] || 0);
        const end = parseFloat(targetValues[el] || 0);
        current[el] = (start + (end - start) * ease).toFixed(1);
      });

      this._drawRadarFrame(canvas, current);

      if (progress < 1.0) {
        this._activeAnimations[canvasId] = requestAnimationFrame(step);
      } else {
        this._lastValues[canvasId] = targetValues;
        delete this._activeAnimations[canvasId];
      }
    };

    this._activeAnimations[canvasId] = requestAnimationFrame(step);
  }

  static _drawRadarFrame(canvas, percentages) {
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(centerX, centerY) - 36;

    ctx.clearRect(0, 0, width, height);

    const elements = ['木', '火', '土', '金', '水'];
    const colors = {
      '木': '#10b981',
      '火': '#ef4444',
      '土': '#f59e0b',
      '金': '#fbbf24',
      '水': '#3b82f6'
    };
    const glowColors = {
      '木': 'rgba(16, 185, 129, 0.35)',
      '火': 'rgba(239, 68, 68, 0.35)',
      '土': 'rgba(245, 158, 11, 0.35)',
      '金': 'rgba(251, 191, 36, 0.35)',
      '水': 'rgba(59, 130, 246, 0.35)'
    };
    const totalSides = elements.length;
    const angleStep = (Math.PI * 2) / totalSides;
    const startAngle = -Math.PI / 2; // start from top (Wood)

    // 1. Draw background concentric web
    const levels = 4;
    for (let l = 1; l <= levels; l++) {
      const r = (radius / levels) * l;
      ctx.beginPath();
      for (let i = 0; i < totalSides; i++) {
        const angle = startAngle + i * angleStep;
        const x = centerX + r * Math.cos(angle);
        const y = centerY + r * Math.sin(angle);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // 2. Draw axis lines from center to vertices
    for (let i = 0; i < totalSides; i++) {
      const angle = startAngle + i * angleStep;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(x, y);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
      ctx.stroke();

      // Draw Element labels
      const labelRadius = radius + 22;
      const lx = centerX + labelRadius * Math.cos(angle);
      const ly = centerY + labelRadius * Math.sin(angle);

      ctx.fillStyle = colors[elements[i]];
      ctx.font = 'bold 14px -apple-system, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      const pctVal = percentages[elements[i]] || 0;
      const isEn = (typeof I18N !== 'undefined' && I18N.currentLang === 'en') || (typeof document !== 'undefined' && document.documentElement.lang === 'en');
      const elLabelsEn = { '木': 'Wood', '火': 'Fire', '土': 'Earth', '金': 'Metal', '水': 'Water' };
      const elLabel = isEn ? (elLabelsEn[elements[i]] || elements[i]) : elements[i];
      ctx.fillText(`${elLabel} ${pctVal}%`, lx, ly);
    }

    // 3. Draw Data Polygon
    ctx.beginPath();
    const maxVal = 50;
    const points = [];

    for (let i = 0; i < totalSides; i++) {
      const val = parseFloat(percentages[elements[i]] || 0);
      const ratio = Math.min(val / maxVal, 1.0);
      const r = radius * (0.15 + 0.85 * ratio);
      const angle = startAngle + i * angleStep;
      const x = centerX + r * Math.cos(angle);
      const y = centerY + r * Math.sin(angle);
      points.push({ x, y, color: colors[elements[i]], glow: glowColors[elements[i]], val });
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();

    // Gradient fill
    ctx.fillStyle = 'rgba(212, 175, 55, 0.22)';
    ctx.fill();
    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 2.5;
    ctx.stroke();

    // 4. Draw point markers with pulsating aura
    points.forEach(pt => {
      // Glow halo if element is strong (> 25%)
      if (pt.val >= 25) {
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, 9, 0, Math.PI * 2);
        ctx.fillStyle = pt.glow;
        ctx.fill();
      }

      ctx.beginPath();
      ctx.arc(pt.x, pt.y, 4.5, 0, Math.PI * 2);
      ctx.fillStyle = pt.color;
      ctx.fill();
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 1.5;
      ctx.stroke();
    });
  }
}

if (typeof window !== 'undefined') {
  window.ElementChart = ElementChart;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ElementChart;
}
