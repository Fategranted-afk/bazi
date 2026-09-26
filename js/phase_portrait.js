/**
 * PhasePortraitEngine (动力学相空间与势能井流形引擎 · 时空生命螺旋重构)
 * 
 * 将传统离散年份运势重构为以用户日主为固定衡量系的 3D/2.5D 生命时空动力学螺旋轨迹 (Life-Chrono Spiral Manifold):
 * - 横轴为岁月前进时间纵深 (Age 1 -> 100) 与能量投射位移 x
 * - 纵轴为势能水位与动量升降 v (螺旋上升/下探)
 * - 动力学方程: d^2x/dt^2 + gamma*dx/dt + dV/dx = F_transit(t)
 * - 势函数: V(x) = (a/4)*x^4 - (b/2)*x^2 - c*x
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
   * 绘制以用户为固定衡量系的流线场与时空基座 (Streamline Flow Field & Perspective Stage)
   */
  renderVectorField(a, b, c, gamma, isDark = true) {
    if (!this.ctx || !this.canvas) return;
    const width = this.canvas.width;
    const height = this.canvas.height;
    this.ctx.clearRect(0, 0, width, height);

    // 1. 深邃时空底色渐变
    const bgGrad = this.ctx.createLinearGradient(0, 0, width, height);
    if (isDark) {
      bgGrad.addColorStop(0, '#0a0d16');
      bgGrad.addColorStop(0.5, '#0e1220');
      bgGrad.addColorStop(1, '#06080e');
    } else {
      bgGrad.addColorStop(0, '#f8fafc');
      bgGrad.addColorStop(0.5, '#f1f5f9');
      bgGrad.addColorStop(1, '#e2e8f0');
    }
    this.ctx.fillStyle = bgGrad;
    this.ctx.fillRect(0, 0, width, height);

    // 2. 绘制透视时间轴基座与导轨 (Perspective Timeline Rails)
    const floorY = height - 26;
    const midY = height / 2;

    this.ctx.save();
    this.ctx.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)';
    this.ctx.lineWidth = 1;

    // 底部时间标尺轨
    this.ctx.beginPath();
    this.ctx.moveTo(60, floorY);
    this.ctx.lineTo(width - 40, floorY);
    this.ctx.stroke();

    // 中轴平衡基准线 (v = 0 平衡态)
    this.ctx.setLineDash([4, 4]);
    this.ctx.strokeStyle = isDark ? 'rgba(245, 158, 11, 0.16)' : 'rgba(217, 119, 6, 0.2)';
    this.ctx.beginPath();
    this.ctx.moveTo(60, midY);
    this.ctx.lineTo(width - 40, midY);
    this.ctx.stroke();
    this.ctx.setLineDash([]);

    // 绘制底部岁月刻度 (1y, 20y, 40y, 60y, 80y, 100y)
    const tickAges = [1, 20, 40, 60, 80, 100];
    this.ctx.fillStyle = isDark ? 'rgba(148, 163, 184, 0.6)' : 'rgba(100, 116, 139, 0.8)';
    this.ctx.font = '10px monospace';
    this.ctx.textAlign = 'center';

    tickAges.forEach(age => {
      const u = (age - 1) / 99.0;
      const tx = 80 + u * (width - 160);
      this.ctx.beginPath();
      this.ctx.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.18)' : 'rgba(0, 0, 0, 0.18)';
      this.ctx.moveTo(tx, floorY - 3);
      this.ctx.lineTo(tx, floorY + 4);
      this.ctx.stroke();
      this.ctx.fillText(`${age}y`, tx, floorY + 16);
    });

    // 3. 四象限动力学象态隐式印记 (Subtle Zone Watermarks)
    const isEn = (typeof currentLang !== 'undefined' && currentLang === 'en');
    this.ctx.font = '10px "Noto Serif SC", serif';
    this.ctx.fillStyle = isDark ? 'rgba(245, 158, 11, 0.15)' : 'rgba(217, 119, 6, 0.22)';
    
    // 右上: 顺风破局 / 木火升腾
    this.ctx.textAlign = 'right';
    this.ctx.fillText(isEn ? '[Ascent · Momentum Expansion]' : '【木火升腾 · 顺风破局象】', width - 45, 32);

    // 右下: 承压过载 / 财官克耗
    this.ctx.fillText(isEn ? '[Overload · Societal Load Tension]' : '【财官克耗 · 承压过载象】', width - 45, floorY - 14);

    // 左上: 稳步蓄力 / 印比固本
    this.ctx.textAlign = 'left';
    this.ctx.fillText(isEn ? '[Resource · Stable Accumulation]' : '【印比固本 · 稳步蓄力象】', 65, 32);

    // 左下: 筑底自修 / 思虑收敛
    this.ctx.fillText(isEn ? '[Defense · Grounding & Sanctuary]' : '【内修敛藏 · 筑底自持象】', 65, floorY - 14);

    // 4. 绘制优雅流畅的背景等势流动线 (Graceful Vector Streamlines)
    const streamlineCount = 9;
    for (let s = 0; s < streamlineCount; s++) {
      const startX = 65 + s * ((width - 130) / (streamlineCount - 1));
      const phaseNorm = (startX - width / 2) / (width / 2.5);
      const forceVal = this.computeForce(phaseNorm, a, b, c);

      this.ctx.beginPath();
      this.ctx.strokeStyle = isDark ? 'rgba(245, 158, 11, 0.08)' : 'rgba(217, 119, 6, 0.12)';
      this.ctx.lineWidth = 1;

      const yControl = midY - forceVal * 32;
      this.ctx.moveTo(startX - 20, midY + 45);
      this.ctx.quadraticCurveTo(startX, yControl, startX + 25, midY - 45);
      this.ctx.stroke();

      // 小流向微箭头
      const arrowX = startX + 10;
      const arrowY = midY - 20;
      this.drawMiniArrow(arrowX, arrowY, 6, -forceVal * 3, isDark ? 'rgba(245, 158, 11, 0.18)' : 'rgba(217, 119, 6, 0.25)');
    }

    this.ctx.restore();
  }

  /**
   * 绘制 3D/2.5D 生命时空螺旋上升/下降轨迹线 (Life-Chrono Spiral Trajectory)
   */
  renderTrajectory(trajectoryPoints, currentAge = null, isDark = true) {
    if (!this.ctx || !this.canvas || !trajectoryPoints || trajectoryPoints.length === 0) return;
    const width = this.canvas.width;
    const height = this.canvas.height;
    const isEn = (typeof currentLang !== 'undefined' && currentLang === 'en');

    // 坐标映射: 时间 Z 轴沿水平推进展开，相空间 (x, v) 投射为空间椭圆环与升降高程
    const toScreen = (pt) => {
      const u = (pt.age - 1) / 99.0;
      const xBase = 80 + u * (width - 160);
      const sx = xBase + (pt.x * 16.0);
      const sy = (height / 2) - (pt.v * 46.0) - (pt.x * 15.0);
      // 安全视口高度限制
      const clampedSy = Math.max(48, Math.min(height - 48, sy));
      return { sx, sy: clampedSy, age: pt.age, x: pt.x, v: pt.v, isFront: pt.x >= 0 };
    };

    const screenPoints = trajectoryPoints.map(toScreen);

    // 1. 绘制底层发光氛围光带 (Ambient Glow Ribbon)
    this.ctx.save();
    for (let i = 0; i < screenPoints.length - 1; i++) {
      const p1 = screenPoints[i];
      const p2 = screenPoints[i + 1];
      const age = p1.age;

      let glowColor = 'rgba(16, 185, 129, 0.25)'; // 1~25y 翠绿萌芽
      if (age >= 26 && age <= 50) glowColor = 'rgba(245, 158, 11, 0.32)'; // 26~50y 金橙鼎盛
      else if (age >= 51 && age <= 75) glowColor = 'rgba(234, 179, 8, 0.28)'; // 51~75y 赤金沉淀
      else if (age > 75) glowColor = 'rgba(99, 102, 241, 0.30)'; // 76~100y 玄蓝深邃

      this.ctx.beginPath();
      this.ctx.strokeStyle = glowColor;
      this.ctx.lineWidth = 6;
      this.ctx.lineCap = 'round';
      this.ctx.moveTo(p1.sx, p1.sy);
      this.ctx.lineTo(p2.sx, p2.sy);
      this.ctx.stroke();
    }
    this.ctx.restore();

    // 2. 绘制前景清晰立体螺旋主体线 (Crisp 3D Helical Spiral)
    this.ctx.save();
    for (let i = 0; i < screenPoints.length - 1; i++) {
      const p1 = screenPoints[i];
      const p2 = screenPoints[i + 1];
      const age = p1.age;

      // 四阶段生命光色
      let strokeColor = '#10b981';
      if (age >= 26 && age <= 50) strokeColor = p1.v > 0 ? '#f43f5e' : '#f59e0b';
      else if (age >= 51 && age <= 75) strokeColor = '#eab308';
      else if (age > 75) strokeColor = '#38bdf8';

      this.ctx.beginPath();
      this.ctx.strokeStyle = strokeColor;
      // 空间进深感: 朝向视点前侧稍粗(3.2px)，背向视点稍细(2.0px)
      this.ctx.lineWidth = p1.isFront ? 3.0 : 2.0;
      this.ctx.moveTo(p1.sx, p1.sy);
      this.ctx.lineTo(p2.sx, p2.sy);
      this.ctx.stroke();
    }
    this.ctx.restore();

    // 3. 绘制岁运节点珠 (Decade Milestone Nodes)
    screenPoints.forEach(pt => {
      if (pt.age % 20 === 0) {
        this.ctx.beginPath();
        this.ctx.fillStyle = isDark ? '#ffffff' : '#0f172a';
        this.ctx.arc(pt.sx, pt.sy, 3.2, 0, Math.PI * 2);
        this.ctx.fill();

        this.ctx.fillStyle = isDark ? '#cbd5e1' : '#334155';
        this.ctx.font = '9px monospace';
        this.ctx.fillText(`${pt.age}y`, pt.sx + 4, pt.sy - 6);
      }
    });

    // 4. 🌟 起点标定 (1y 起点 · 元神初生)
    const originPt = screenPoints[0];
    if (originPt) {
      this.ctx.save();
      // 外层光晕
      const haloGrad = this.ctx.createRadialGradient(originPt.sx, originPt.sy, 2, originPt.sx, originPt.sy, 14);
      haloGrad.addColorStop(0, 'rgba(251, 191, 36, 0.9)');
      haloGrad.addColorStop(0.5, 'rgba(245, 158, 11, 0.4)');
      haloGrad.addColorStop(1, 'rgba(245, 158, 11, 0.0)');
      this.ctx.fillStyle = haloGrad;
      this.ctx.beginPath();
      this.ctx.arc(originPt.sx, originPt.sy, 14, 0, Math.PI * 2);
      this.ctx.fill();

      // 中心璀璨金星
      this.ctx.fillStyle = '#fbbf24';
      this.ctx.beginPath();
      this.ctx.arc(originPt.sx, originPt.sy, 4.5, 0, Math.PI * 2);
      this.ctx.fill();

      // 起点说明徽章
      const originText = isEn ? '🌟 1y Origin · Natal Dawn' : '🌟 1y 起点 · 元神初生';
      this.ctx.font = 'bold 10px font-sans';
      this.ctx.fillStyle = isDark ? '#fef08a' : '#854d0e';
      this.ctx.textAlign = 'left';
      this.ctx.fillText(originText, originPt.sx - 12, originPt.sy - 15);
      this.ctx.restore();
    }

    // 5. 100y 归真终点标定
    const endPt = screenPoints[screenPoints.length - 1];
    if (endPt) {
      this.ctx.save();
      this.ctx.fillStyle = '#38bdf8';
      this.ctx.beginPath();
      this.ctx.arc(endPt.sx, endPt.sy, 4, 0, Math.PI * 2);
      this.ctx.fill();

      const endText = isEn ? '100y Zenith' : '100y 归真';
      this.ctx.font = 'bold 10px font-sans';
      this.ctx.fillStyle = isDark ? '#93c5fd' : '#1e40af';
      this.ctx.textAlign = 'right';
      this.ctx.fillText(endText, endPt.sx + 8, endPt.sy - 12);
      this.ctx.restore();
    }

    // 6. 📍 命主当前岁数脉冲信标 (Current Age Pulsing Beacon)
    const targetAge = currentAge || 30;
    const currentPt = screenPoints.find(p => p.age === targetAge) || screenPoints[29];
    if (currentPt) {
      this.ctx.save();
      // 双重发光波纹
      this.ctx.beginPath();
      this.ctx.strokeStyle = 'rgba(16, 185, 129, 0.45)';
      this.ctx.lineWidth = 1.5;
      this.ctx.arc(currentPt.sx, currentPt.sy, 13, 0, Math.PI * 2);
      this.ctx.stroke();

      this.ctx.beginPath();
      this.ctx.strokeStyle = 'rgba(16, 185, 129, 0.8)';
      this.ctx.lineWidth = 2;
      this.ctx.arc(currentPt.sx, currentPt.sy, 8, 0, Math.PI * 2);
      this.ctx.stroke();

      // 核心碧玉星点
      this.ctx.fillStyle = '#10b981';
      this.ctx.beginPath();
      this.ctx.arc(currentPt.sx, currentPt.sy, 5, 0, Math.PI * 2);
      this.ctx.fill();

      // 悬浮气泡标签 (Pill Badge)
      const isAscending = currentPt.v >= 0;
      let badgeLabelZh = `📍 当前 ${targetAge}岁 · ${isAscending ? '螺旋上升期 🔺' : '筑底蓄能期 🔻'}`;
      let badgeLabelEn = `📍 Age ${targetAge} · ${isAscending ? 'Spiral Ascending Phase 🔺' : 'Consolidation Phase 🔻'}`;
      const badgeText = isEn ? badgeLabelEn : badgeLabelZh;

      this.ctx.font = 'bold 11px sans-serif';
      const textMetrics = this.ctx.measureText(badgeText);
      const badgeW = textMetrics.width + 16;
      const badgeH = 22;
      const badgeX = Math.max(10, Math.min(width - badgeW - 10, currentPt.sx - badgeW / 2));
      const badgeY = currentPt.sy - 34;

      // 气泡底板
      this.ctx.fillStyle = isDark ? 'rgba(15, 23, 42, 0.92)' : 'rgba(255, 255, 255, 0.95)';
      this.ctx.strokeStyle = isAscending ? '#10b981' : '#f59e0b';
      this.ctx.lineWidth = 1.2;
      this.roundRect(badgeX, badgeY, badgeW, badgeH, 6, true, true);

      // 气泡文字
      this.ctx.fillStyle = isAscending ? '#34d399' : '#fbbf24';
      this.ctx.textAlign = 'left';
      this.ctx.fillText(badgeText, badgeX + 8, badgeY + 15);
      this.ctx.restore();
    }
  }

  /**
   * 绘制圆角矩形辅助
   */
  roundRect(x, y, w, h, r, fill, stroke) {
    if (!this.ctx) return;
    this.ctx.beginPath();
    this.ctx.moveTo(x + r, y);
    this.ctx.lineTo(x + w - r, y);
    this.ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    this.ctx.lineTo(x + w, y + h - r);
    this.ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    this.ctx.lineTo(x + r, y + h);
    this.ctx.quadraticCurveTo(x, y + h, x, y + h - r);
    this.ctx.lineTo(x, y + r);
    this.ctx.quadraticCurveTo(x, y, x + r, y);
    this.ctx.closePath();
    if (fill) this.ctx.fill();
    if (stroke) this.ctx.stroke();
  }

  /**
   * 绘制微型流线箭头
   */
  drawMiniArrow(x, y, dx, dy, color) {
    if (!this.ctx) return;
    this.ctx.save();
    this.ctx.strokeStyle = color;
    this.ctx.fillStyle = color;
    this.ctx.lineWidth = 1;
    this.ctx.beginPath();
    this.ctx.moveTo(x, y);
    this.ctx.lineTo(x + dx, y + dy);
    this.ctx.stroke();

    const angle = Math.atan2(dy, dx);
    const headLen = 3;
    this.ctx.beginPath();
    this.ctx.moveTo(x + dx, y + dy);
    this.ctx.lineTo(x + dx - headLen * Math.cos(angle - Math.PI / 6), y + dy - headLen * Math.sin(angle - Math.PI / 6));
    this.ctx.lineTo(x + dx - headLen * Math.cos(angle + Math.PI / 6), y + dy - headLen * Math.sin(angle + Math.PI / 6));
    this.ctx.closePath();
    this.ctx.fill();
    this.ctx.restore();
  }

  /**
   * 数值微分求解全周期螺旋动力学相轨迹 (1~100岁)
   */
  static integrateTrajectory(a, b, c, gamma, score100, luckCycles = []) {
    const trajectoryPoints = [];
    let stateX = (score100 - 50.0) / 35.0; // 初始能量状态
    let stateV = 0.0; // 初始动量
    const dt = 0.15; // 离散时间步长

    for (let age = 1; age <= 100; age++) {
      // 外部大运脉冲驱动力
      let transitPulse = 0.0;
      const decade = luckCycles.find(d => age >= d.startAge && age <= d.endAge);
      if (decade) {
        const fav = decade.isFavorable || decade.favorable;
        transitPulse += (fav ? 0.35 : -0.35);
      }
      // 岁运谐波振荡 (流年生克周流)
      transitPulse += 0.28 * Math.sin((age * Math.PI) / 6.0);

      // 数值积分 (Runge-Kutta / Symplectic Euler approximation)
      for (let step = 0; step < 6; step++) {
        const forceP = -(a * Math.pow(stateX, 3) - b * stateX - c);
        const accel = -gamma * stateV + forceP + transitPulse;
        stateV += accel * dt;
        stateX += stateV * dt;

        // 软阻尼截断保护，维持数值稳定性
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

    return trajectoryPoints;
  }

  /**
   * 根据八字及大运计算动力学参数与全周期轨迹
   * @param {Object} bazi - 八字排盘结果
   * @param {Array} luckCycles - 大运列表
   * @param {number} currentAge - 当前岁数 (如 30)
   * @returns {Object} { a, b, c, gamma, trajectoryPoints, currentPt, summaryZh, summaryEn }
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

    // 状态模拟积分 1~100岁
    const trajectoryPoints = this.integrateTrajectory(a, b, c, gamma, score100, luckCycles);
    const currentPt = trajectoryPoints.find(p => p.age === currentAge) || trajectoryPoints[Math.min(29, trajectoryPoints.length - 1)];
    const isAscending = currentPt.v >= 0;

    return {
      a,
      b,
      c,
      gamma,
      trajectoryPoints,
      currentPt,
      summaryZh: `系统刚度 a=${a}，双稳态分岔 b=${b}，岁运外场 c=${c}。命主当前 ${currentAge}岁，处于【${isAscending ? '螺旋上升跃迁期 🔺' : '筑底蓄势修整期 🔻'}】(x=${currentPt.x}, v=${currentPt.v})。`,
      summaryEn: `System rigidity a=${a}, bifurcation b=${b}, transit bias c=${c}. Current age ${currentAge} is in [${isAscending ? 'Spiral Ascending Phase' : 'Consolidation & Grounding Phase'}] (x=${currentPt.x}, v=${currentPt.v}).`
    };
  }

  /**
   * Phase 3: 绘制双轨相空间分岔与黄金跳轨窗口流形 (Dual-Track Bifurcation & Transition Manifold)
   * @param {HTMLCanvasElement|string} canvasOrId 
   * @param {Object} bifurcationData - output of ScenarioSimulatorEngine.computeCounterfactualBifurcation
   * @param {boolean} isDark - Dark mode theme flag
   * @param {string} lang - 'zh' or 'en'
   */
  static renderDualTrackBifurcation(canvasOrId, bifurcationData, isDark = true, lang = 'zh') {
    if (!bifurcationData) return;
    const canvas = (typeof canvasOrId === 'string' && typeof document !== 'undefined')
      ? document.getElementById(canvasOrId)
      : canvasOrId;
    if (!canvas || typeof canvas.getContext !== 'function') return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width || 800;
    const height = canvas.height || 360;
    ctx.clearRect(0, 0, width, height);

    const isEn = (lang === 'en');
    const trajA = bifurcationData.trajectoryA || [];
    const trajB = bifurcationData.trajectoryB || [];
    const golden = bifurcationData.goldenWindow || {};

    // 1. 深邃时空底色渐变
    if (typeof ctx.createLinearGradient === 'function') {
      const bgGrad = ctx.createLinearGradient(0, 0, width, height);
      if (isDark) {
        bgGrad.addColorStop(0, '#090b14');
        bgGrad.addColorStop(0.5, '#0d1122');
        bgGrad.addColorStop(1, '#06080f');
      } else {
        bgGrad.addColorStop(0, '#f8fafc');
        bgGrad.addColorStop(0.5, '#f1f5f9');
        bgGrad.addColorStop(1, '#e2e8f0');
      }
      ctx.fillStyle = bgGrad;
    } else {
      ctx.fillStyle = isDark ? '#090b14' : '#f8fafc';
    }
    if (typeof ctx.fillRect === 'function') ctx.fillRect(0, 0, width, height);

    // 2. 坐标转换映射: x in [-2.2, 2.2], v in [-1.8, 1.8]
    const marginX = 70;
    const marginY = 45;
    const toScreen = (pt) => {
      const sx = marginX + ((pt.x + 2.2) / 4.4) * (width - marginX * 2);
      const sy = (height - marginY) - ((pt.v + 1.8) / 3.6) * (height - marginY * 2);
      return { sx, sy, x: pt.x, v: pt.v, year: pt.year };
    };

    // 3. 辅助网格与零速度平衡线 (v = 0)
    ctx.save();
    ctx.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)';
    ctx.lineWidth = 1;
    for (let gx = marginX; gx <= width - marginX; gx += (width - marginX * 2) / 6) {
      ctx.beginPath();
      ctx.moveTo(gx, marginY);
      ctx.lineTo(gx, height - marginY);
      ctx.stroke();
    }

    const midY = (height - marginY) - (1.8 / 3.6) * (height - marginY * 2);
    if (typeof ctx.setLineDash === 'function') ctx.setLineDash([4, 4]);
    ctx.strokeStyle = isDark ? 'rgba(245, 158, 11, 0.22)' : 'rgba(217, 119, 6, 0.25)';
    ctx.beginPath();
    ctx.moveTo(marginX - 20, midY);
    ctx.lineTo(width - marginX + 20, midY);
    ctx.stroke();
    if (typeof ctx.setLineDash === 'function') ctx.setLineDash([]);

    // 坐标轴说明
    ctx.font = '9px monospace';
    ctx.fillStyle = isDark ? 'rgba(148, 163, 184, 0.6)' : 'rgba(100, 116, 139, 0.8)';
    ctx.textAlign = 'right';
    ctx.fillText(isEn ? 'Ascent (+v)' : '动量上升 (+v)', marginX - 8, marginY + 12);
    ctx.fillText(isEn ? 'Descent (-v)' : '阻尼下探 (-v)', marginX - 8, height - marginY - 6);
    ctx.fillText(isEn ? 'Parity (v=0)' : '平衡态 (v=0)', marginX - 8, midY + 3);

    ctx.textAlign = 'center';
    ctx.fillText(isEn ? 'Displacement / Pattern Space (x)' : '势能位移与格局投射位 (x)', width / 2, height - 12);

    // 4. 绘制 Track A 轨迹 (青蓝光弧 Cyan-Indigo)
    if (trajA.length > 0) {
      const ptsA = trajA.map(toScreen);
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.25)';
      ctx.lineWidth = 6;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.moveTo(ptsA[0].sx, ptsA[0].sy);
      for (let i = 1; i < ptsA.length; i++) ctx.lineTo(ptsA[i].sx, ptsA[i].sy);
      ctx.stroke();

      ctx.beginPath();
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 2.5;
      ctx.moveTo(ptsA[0].sx, ptsA[0].sy);
      for (let i = 1; i < ptsA.length; i++) ctx.lineTo(ptsA[i].sx, ptsA[i].sy);
      ctx.stroke();

      ptsA.forEach((p, idx) => {
        ctx.beginPath();
        ctx.fillStyle = idx === 0 ? '#38bdf8' : (isDark ? '#e0f2fe' : '#0369a1');
        ctx.arc(p.sx, p.sy, idx === 0 ? 5 : 3.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = isDark ? '#7dd3fc' : '#0284c7';
        ctx.font = 'bold 9px monospace';
        ctx.fillText(`'${String(p.year).slice(2)}`, p.sx, p.sy - 8);
      });
    }

    // 5. 绘制 Track B 轨迹 (紫罗兰光弧 Purple-Fuchsia)
    if (trajB.length > 0) {
      const ptsB = trajB.map(toScreen);
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(192, 132, 252, 0.25)';
      ctx.lineWidth = 6;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.moveTo(ptsB[0].sx, ptsB[0].sy);
      for (let i = 1; i < ptsB.length; i++) ctx.lineTo(ptsB[i].sx, ptsB[i].sy);
      ctx.stroke();

      ctx.beginPath();
      ctx.strokeStyle = '#c084fc';
      ctx.lineWidth = 2.5;
      ctx.moveTo(ptsB[0].sx, ptsB[0].sy);
      for (let i = 1; i < ptsB.length; i++) ctx.lineTo(ptsB[i].sx, ptsB[i].sy);
      ctx.stroke();

      ptsB.forEach((p, idx) => {
        ctx.beginPath();
        ctx.fillStyle = idx === 0 ? '#c084fc' : (isDark ? '#fae8ff' : '#7e22ce');
        ctx.arc(p.sx, p.sy, idx === 0 ? 5 : 3.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = isDark ? '#d8b4fe' : '#9333ea';
        ctx.font = 'bold 9px monospace';
        ctx.fillText(`'${String(p.year).slice(2)}`, p.sx, p.sy + 14);
      });
    }

    // 6. 绘制黄金跳轨分岔窗口 (Golden Bifurcation Fork Bridge)
    if (golden && golden.year && trajA.length > 0 && trajB.length > 0) {
      const nodeA = trajA.find(p => p.year === golden.year) || trajA[0];
      const nodeB = trajB.find(p => p.year === golden.year) || trajB[0];
      const pA = toScreen(nodeA);
      const pB = toScreen(nodeB);

      const cpx = (pA.sx + pB.sx) / 2 + 25;
      const cpy = (pA.sy + pB.sy) / 2 - 35;

      ctx.save();
      ctx.strokeStyle = '#fbbf24';
      ctx.lineWidth = 2;
      if (typeof ctx.setLineDash === 'function') ctx.setLineDash([5, 3]);
      ctx.beginPath();
      ctx.moveTo(pA.sx, pA.sy);
      ctx.quadraticCurveTo(cpx, cpy, pB.sx, pB.sy);
      ctx.stroke();
      if (typeof ctx.setLineDash === 'function') ctx.setLineDash([]);

      if (typeof ctx.createRadialGradient === 'function') {
        const haloGrad = ctx.createRadialGradient(cpx, cpy, 2, cpx, cpy, 16);
        haloGrad.addColorStop(0, 'rgba(251, 191, 36, 0.9)');
        haloGrad.addColorStop(0.5, 'rgba(245, 158, 11, 0.35)');
        haloGrad.addColorStop(1, 'rgba(245, 158, 11, 0)');
        ctx.fillStyle = haloGrad;
      } else {
        ctx.fillStyle = 'rgba(251, 191, 36, 0.5)';
      }
      ctx.beginPath();
      ctx.arc(cpx, cpy, 16, 0, Math.PI * 2);
      ctx.fill();

      const badgeText = isEn
        ? `[Golden Transition Window (${golden.year}) · Friction ${golden.barrierScore} pts]`
        : `【黄金跳轨分岔 (${golden.year}) · 阻抗 ${golden.barrierScore}分】`;
      ctx.font = 'bold 10px "Noto Serif SC", serif';
      ctx.fillStyle = '#fef08a';
      ctx.textAlign = 'center';
      ctx.fillText(badgeText, cpx, cpy - 8);
      ctx.restore();
    }

    // 7. 顶部图例说明 (Legend)
    ctx.save();
    ctx.font = 'bold 10px sans-serif';
    ctx.fillStyle = '#38bdf8';
    ctx.beginPath();
    ctx.arc(marginX + 8, 22, 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.textAlign = 'left';
    ctx.fillText(isEn ? `Option A Track (λ=${bifurcationData.lyapunovA})` : `方案 A 轨迹 (λ=${bifurcationData.lyapunovA})`, marginX + 18, 25);

    ctx.fillStyle = '#c084fc';
    ctx.beginPath();
    ctx.arc(marginX + (isEn ? 210 : 190), 22, 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillText(isEn ? `Option B Track (λ=${bifurcationData.lyapunovB})` : `方案 B 轨迹 (λ=${bifurcationData.lyapunovB})`, marginX + (isEn ? 220 : 200), 25);

    ctx.textAlign = 'right';
    ctx.fillStyle = isDark ? 'rgba(245, 158, 11, 0.7)' : 'rgba(217, 119, 6, 0.8)';
    ctx.font = '9px monospace';
    ctx.fillText(isEn ? 'Pearl SCM · Addey Wave Bifurcation' : 'Judea Pearl SCM · Addey 谐波分岔流形', width - marginX + 15, 25);
    ctx.restore();
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PhasePortraitEngine };
}
if (typeof window !== 'undefined') {
  window.PhasePortraitEngine = PhasePortraitEngine;
}
