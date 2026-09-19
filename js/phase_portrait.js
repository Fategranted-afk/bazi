/**
 * PhasePortraitEngine (动力学相空间与势能井流形引擎)
 * 
 * 将传统离散年份运势重构为非线性耗散系统的相轨迹 (Phase Trajectory) 与双井势能流形:
 * V(x) = (a/4)*x^4 - (b/2)*x^2 - c*x
 * d^2x/dt^2 + gamma*dx/dt + dV/dx = F_transit(t)
 */
class PhasePortraitEngine {
  constructor(canvasOrId) {
    if (typeof canvasOrId === 'string') {
      this.canvas = typeof document !== 'undefined' ? document.getElementById(canvasOrId) : null;
    } else {
      this.canvas = canvasOrId;
    }
    this.ctx = this.canvas && typeof this.canvas.getContext === 'function' ? this.canvas.getContext('2d') : null;
  }

  /**
   * 势函数负导数: -dV/dx = -(a*x^3 - b*x - c)
   */
  computeForce(x, a, b, c) {
    return -(a * Math.pow(x, 3) - b * x - c);
  }

  /**
   * 绘制相平面网格向量场 (Streamline Flow Field)
   */
  renderVectorField(a, b, c, gamma, isDark = true) {
    if (!this.ctx || !this.canvas) return;
    const width = this.canvas.width;
    const height = this.canvas.height;
    this.ctx.clearRect(0, 0, width, height);

    // Background subtle grid
    this.ctx.fillStyle = isDark ? '#0d111a' : '#f8fafc';
    this.ctx.fillRect(0, 0, width, height);

    // Axes
    this.ctx.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)';
    this.ctx.lineWidth = 1;
    this.ctx.beginPath();
    // Horizontal axis v = 0
    this.ctx.moveTo(0, height / 2);
    this.ctx.lineTo(width, height / 2);
    // Vertical axis x = 0
    this.ctx.moveTo(width / 2, 0);
    this.ctx.lineTo(width / 2, height);
    this.ctx.stroke();

    const xSteps = 24;
    const vSteps = 16;
    const xRange = [-2.5, 2.5];
    const vRange = [-2.0, 2.0];

    for (let i = 0; i <= xSteps; i++) {
      for (let j = 0; j <= vSteps; j++) {
        const x = xRange[0] + (i / xSteps) * (xRange[1] - xRange[0]);
        const v = vRange[0] + (j / vSteps) * (vRange[1] - vRange[0]);

        // Dynamics: dx/dt = v, dv/dt = -gamma*v + F(x)
        const dxdt = v;
        const dvdt = -gamma * v + this.computeForce(x, a, b, c);

        const len = Math.hypot(dxdt, dvdt) || 1e-6;
        const arrowLength = 11;
        const normX = (dxdt / len) * arrowLength;
        const normY = (dvdt / len) * arrowLength;

        const screenX = ((x - xRange[0]) / (xRange[1] - xRange[0])) * width;
        const screenY = height - ((v - vRange[0]) / (vRange[1] - vRange[0])) * height;

        const arrowColor = isDark ? 'rgba(245, 158, 11, 0.22)' : 'rgba(217, 119, 6, 0.3)';
        this.drawArrow(screenX, screenY, normX, -normY, arrowColor);
      }
    }
  }

  /**
   * 绘制命主在相空间中的演变轨迹
   */
  renderTrajectory(trajectoryPoints, currentAge = null, isDark = true) {
    if (!this.ctx || !this.canvas || !trajectoryPoints || trajectoryPoints.length === 0) return;
    const width = this.canvas.width;
    const height = this.canvas.height;
    const xRange = [-2.5, 2.5];
    const vRange = [-2.0, 2.0];

    const toScreen = (pt) => {
      const sx = ((pt.x - xRange[0]) / (xRange[1] - xRange[0])) * width;
      const sy = height - ((pt.v - vRange[0]) / (vRange[1] - vRange[0])) * height;
      return { sx, sy };
    };

    // Draw main glowing trajectory
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.strokeStyle = '#f59e0b'; // Amber Gold
    this.ctx.lineWidth = 2.5;
    this.ctx.shadowColor = 'rgba(245, 158, 11, 0.6)';
    this.ctx.shadowBlur = 8;

    trajectoryPoints.forEach((pt, idx) => {
      const { sx, sy } = toScreen(pt);
      if (idx === 0) this.ctx.moveTo(sx, sy);
      else this.ctx.lineTo(sx, sy);
    });
    this.ctx.stroke();
    this.ctx.restore();

    // Draw key age milestone dots
    trajectoryPoints.forEach((pt) => {
      if (pt.age % 10 === 0 || pt.age === 1 || pt.age === 100 || pt.age === currentAge) {
        const { sx, sy } = toScreen(pt);
        this.ctx.beginPath();
        const isCurrent = (pt.age === currentAge);
        this.ctx.fillStyle = isCurrent ? '#10b981' : '#f59e0b';
        this.ctx.arc(sx, sy, isCurrent ? 5.5 : 3.5, 0, Math.PI * 2);
        this.ctx.fill();

        if (isCurrent || pt.age % 20 === 0) {
          this.ctx.fillStyle = isDark ? '#e2e8f0' : '#1e293b';
          this.ctx.font = '10px monospace';
          this.ctx.fillText(`${pt.age}y`, sx + 6, sy - 4);
        }
      }
    });
  }

  /**
   * 绘制单根方向箭头
   */
  drawArrow(x, y, dx, dy, color) {
    if (!this.ctx) return;
    this.ctx.save();
    this.ctx.strokeStyle = color;
    this.ctx.fillStyle = color;
    this.ctx.lineWidth = 1;

    this.ctx.beginPath();
    this.ctx.moveTo(x, y);
    this.ctx.lineTo(x + dx, y + dy);
    this.ctx.stroke();

    // Arrowhead
    const angle = Math.atan2(dy, dx);
    const headLen = 3.5;
    this.ctx.beginPath();
    this.ctx.moveTo(x + dx, y + dy);
    this.ctx.lineTo(x + dx - headLen * Math.cos(angle - Math.PI / 6), y + dy - headLen * Math.sin(angle - Math.PI / 6));
    this.ctx.lineTo(x + dx - headLen * Math.cos(angle + Math.PI / 6), y + dy - headLen * Math.sin(angle + Math.PI / 6));
    this.ctx.closePath();
    this.ctx.fill();
    this.ctx.restore();
  }

  /**
   * 根据八字及大运计算动力学参数与全周期轨迹
   * @param {Object} bazi - 八字排盘结果
   * @param {Array} luckCycles - 大运列表
   * @param {number} currentAge - 当前岁数 (如 30)
   * @returns {Object} { a, b, c, gamma, trajectoryPoints, equilibriumPoints, currentStatus }
   */
  static deriveParametersAndTrajectory(bazi, luckCycles = [], currentAge = 30) {
    const score100 = (bazi && bazi.zipingScore && typeof bazi.zipingScore.totalScore === 'number')
      ? bazi.zipingScore.totalScore
      : 50.0;

    // a: 命局刚性 (Rigidity), 月令强旺度决定抗形变能力
    const a = Number((0.85 + (Math.abs(score100 - 50) / 100.0) * 0.8).toFixed(2));

    // b: 双稳态分岔参数 (Bifurcation). 50分中和为单井，两极(极弱/极旺/身财两停)为双井吸引子
    const b = Number((0.40 + (Math.abs(score100 - 50) / 50.0) * 0.75).toFixed(2));

    // c: 大运外部恒定偏置 (External decadal bias)
    let currentDecade = luckCycles.find(d => currentAge >= d.startAge && currentAge <= d.endAge) || luckCycles[0] || null;
    let decBias = 0.0;
    if (currentDecade) {
      const isFav = currentDecade.isFavorable || currentDecade.favorable || false;
      decBias = isFav ? 0.45 : -0.45;
    }
    const c = Number(decBias.toFixed(2));

    // gamma: 耗散阻尼 (Damping coefficient, 印食泄秀缓冲)
    const gamma = 0.38;

    // 状态模拟积分 (RK4 / symplectic Euler) 1~100岁
    const trajectoryPoints = [];
    let stateX = (score100 - 50.0) / 35.0; // 初始能量状态
    let stateV = 0.0; // 初始动量
    const dt = 0.15; // 离散时间步长

    for (let age = 1; age <= 100; age++) {
      // 外部周期驱动力 F_transit (流年刑冲与生克脉冲)
      let transitPulse = 0.0;
      const decade = luckCycles.find(d => age >= d.startAge && age <= d.endAge);
      if (decade) {
        const fav = decade.isFavorable || decade.favorable;
        transitPulse += (fav ? 0.3 : -0.3);
      }
      // 岁运谐波振荡
      transitPulse += 0.25 * Math.sin((age * Math.PI) / 6);

      // 数值微分 dx/dt = v, dv/dt = -gamma*v + F(x) + F_transit
      for (let step = 0; step < 6; step++) {
        const forceP = -(a * Math.pow(stateX, 3) - b * stateX - c);
        const accel = -gamma * stateV + forceP + transitPulse;
        stateV += accel * dt;
        stateX += stateV * dt;

        // 软截断保护
        if (stateX > 2.4) { stateX = 2.4; stateV *= -0.5; }
        if (stateX < -2.4) { stateX = -2.4; stateV *= -0.5; }
        if (stateV > 1.9) stateV = 1.9;
        if (stateV < -1.9) stateV = -1.9;
      }

      trajectoryPoints.push({
        age,
        x: Number(stateX.toFixed(3)),
        v: Number(stateV.toFixed(3))
      });
    }

    const currentPt = trajectoryPoints.find(p => p.age === currentAge) || trajectoryPoints[Math.min(29, trajectoryPoints.length - 1)];

    return {
      a,
      b,
      c,
      gamma,
      trajectoryPoints,
      currentPt,
      summaryZh: `系统刚度系数 a=${a}，双稳态分岔 b=${b}，岁运外场偏置 c=${c}。当前状态位于相空间 (x=${currentPt.x}, v=${currentPt.v})。`,
      summaryEn: `System rigidity a=${a}, bifurcation parameter b=${b}, external transit bias c=${c}. Current state at phase coordinates (x=${currentPt.x}, v=${currentPt.v}).`
    };
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PhasePortraitEngine };
}
if (typeof window !== 'undefined') {
  window.PhasePortraitEngine = PhasePortraitEngine;
}
