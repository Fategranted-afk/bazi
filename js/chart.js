/**
 * Visual Canvas Chart Renderer for Five Elements Energy Distribution
 */

class ElementChart {
  /**
   * Render Five Elements Energy Distribution Radar and Progress Bars
   * @param {string} canvasId 
   * @param {Object} percentages e.g. { '木': 25.0, '火': 15.0, '土': 30.0, '金': 10.0, '水': 20.0 }
   */
  static renderRadar(canvasId, percentages) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
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
    const totalSides = elements.length;
    const angleStep = (Math.PI * 2) / totalSides;
    const startAngle = -Math.PI / 2; // start from top (Wood)

    // Draw background concentric web
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

    // Draw axis lines from center to vertices
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
      ctx.fillText(`${elements[i]} ${pctVal}%`, lx, ly);
    }

    // Draw Data Polygon
    ctx.beginPath();
    // Normalize percentage (max expected ~ 50%)
    const maxVal = 50;
    const points = [];

    for (let i = 0; i < totalSides; i++) {
      const val = parseFloat(percentages[elements[i]] || 0);
      const ratio = Math.min(val / maxVal, 1.0);
      const r = radius * (0.15 + 0.85 * ratio);
      const angle = startAngle + i * angleStep;
      const x = centerX + r * Math.cos(angle);
      const y = centerY + r * Math.sin(angle);
      points.push({ x, y, color: colors[elements[i]] });
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();

    // Gradient fill
    ctx.fillStyle = 'rgba(212, 175, 55, 0.25)';
    ctx.fill();
    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 2.5;
    ctx.stroke();

    // Draw point markers
    points.forEach(pt => {
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
