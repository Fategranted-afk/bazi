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

    // 1. High-DPI Retina Display Handling (Fixes blurry canvas on Mac Retina)
    const dpr = (typeof window !== 'undefined' && window.devicePixelRatio) ? Math.max(1, window.devicePixelRatio) : 1;
    let cssWidth = canvas.clientWidth || (canvas.parentElement && canvas.parentElement.clientWidth) || 800;
    let cssHeight = canvas.clientHeight || 360;
    if (cssWidth < 320) cssWidth = 800;
    if (cssHeight < 240) cssHeight = 360;

    if (canvas.width !== Math.round(cssWidth * dpr) || canvas.height !== Math.round(cssHeight * dpr)) {
      canvas.width = Math.round(cssWidth * dpr);
      canvas.height = Math.round(cssHeight * dpr);
    }
    ctx.save();
    if (typeof ctx.scale === 'function') {
      ctx.scale(dpr, dpr);
    }
    ctx.clearRect(0, 0, cssWidth, cssHeight);

    const isEn = (lang === 'en');
    const trajA = bifurcationData.trajectoryA || [];
    const trajB = bifurcationData.trajectoryB || [];
    const timeline = bifurcationData.transitionTimeline || [];
    const golden = bifurcationData.goldenWindow || {};

    // 2. High-contrast theme color palettes (Tailored for both Dark and Light modes)
    const palette = isDark ? {
      bgGradStart: '#0d1120',
      bgGradEnd: '#060810',
      cardBorder: 'rgba(255, 255, 255, 0.08)',
      gridLine: 'rgba(255, 255, 255, 0.06)',
      textMain: '#f8fafc',
      textMuted: '#94a3b8',
      trackA: '#38bdf8',
      trackAGlow: 'rgba(56, 189, 248, 0.18)',
      trackB: '#c084fc',
      trackBGlow: 'rgba(192, 132, 252, 0.18)',
      bandPeak: 'rgba(16, 185, 129, 0.08)',
      bandGrowth: 'rgba(14, 165, 233, 0.06)',
      bandConsol: 'rgba(245, 158, 11, 0.04)',
      goldenBoxBg: 'rgba(28, 20, 10, 0.92)',
      goldenBoxBorder: '#fbbf24',
      goldenText: '#fef08a',
      goldenSubText: '#fde68a'
    } : {
      bgGradStart: '#ffffff',
      bgGradEnd: '#f8fafc',
      cardBorder: 'rgba(0, 0, 0, 0.08)',
      gridLine: 'rgba(0, 0, 0, 0.06)',
      textMain: '#0f172a',
      textMuted: '#475569',
      trackA: '#0284c7',
      trackAGlow: 'rgba(2, 132, 199, 0.15)',
      trackB: '#7c3aed',
      trackBGlow: 'rgba(124, 58, 237, 0.15)',
      bandPeak: 'rgba(16, 185, 129, 0.08)',
      bandGrowth: 'rgba(14, 165, 233, 0.06)',
      bandConsol: 'rgba(245, 158, 11, 0.05)',
      goldenBoxBg: '#fef3c7',
      goldenBoxBorder: '#b45309',
      goldenText: '#78350f',
      goldenSubText: '#92400e'
    };

    // 3. Crisp Background
    if (typeof ctx.createLinearGradient === 'function') {
      const bgGrad = ctx.createLinearGradient(0, 0, cssWidth, cssHeight);
      bgGrad.addColorStop(0, palette.bgGradStart);
      bgGrad.addColorStop(1, palette.bgGradEnd);
      ctx.fillStyle = bgGrad;
    } else {
      ctx.fillStyle = palette.bgGradStart;
    }
    if (typeof ctx.fillRect === 'function') ctx.fillRect(0, 0, cssWidth, cssHeight);

    // Layout margins
    const plotLeft = 65;
    const plotRight = cssWidth - 45;
    const plotTop = 48;
    const plotBottom = cssHeight - 72;
    const plotWidth = plotRight - plotLeft;
    const plotHeight = plotBottom - plotTop;

    // Helper: Coordinate projections
    const colCount = Math.max(1, (timeline.length || 5) - 1);
    const getColX = (index) => plotLeft + index * (plotWidth / colCount);
    const getY = (score) => {
      const clamped = Math.max(40, Math.min(100, score || 70));
      return plotBottom - ((clamped - 40) / 60) * plotHeight;
    };

    // 4. Horizontal Momentum Bands (40 - 100 pts)
    const y85 = getY(85);
    const y70 = getY(70);
    const y55 = getY(55);

    if (typeof ctx.fillRect === 'function') {
      // 85 - 100 Peak zone
      ctx.fillStyle = palette.bandPeak;
      ctx.fillRect(plotLeft, plotTop, plotWidth, y85 - plotTop);

      // 70 - 85 Optimal growth zone
      ctx.fillStyle = palette.bandGrowth;
      ctx.fillRect(plotLeft, y85, plotWidth, y70 - y85);

      // 55 - 70 Consolidation zone
      ctx.fillStyle = palette.bandConsol;
      ctx.fillRect(plotLeft, y70, plotWidth, y55 - y70);
    }

    // Horizontal gridlines & Y-axis labels
    const gridYLevels = [
      { score: 85, label: isEn ? '85 Peak' : '85分 爆发', y: y85 },
      { score: 70, label: isEn ? '70 Growth' : '70分 顺风', y: y70 },
      { score: 55, label: isEn ? '55 Steady' : '55分 蓄势', y: y55 }
    ];

    gridYLevels.forEach(lvl => {
      ctx.save();
      ctx.strokeStyle = palette.gridLine;
      ctx.lineWidth = 1;
      if (typeof ctx.setLineDash === 'function') ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(plotLeft - 10, lvl.y);
      ctx.lineTo(plotRight, lvl.y);
      ctx.stroke();
      ctx.restore();

      ctx.font = 'bold 10px monospace';
      ctx.fillStyle = palette.textMuted;
      ctx.textAlign = 'right';
      ctx.fillText(lvl.label, plotLeft - 12, lvl.y + 3);
    });

    // 5. Vertical Year Guidelines and Bottom Timeline
    timeline.forEach((item, idx) => {
      const cx = getColX(idx);

      // Vertical guide line
      ctx.save();
      ctx.strokeStyle = palette.gridLine;
      ctx.lineWidth = 1;
      if (typeof ctx.setLineDash === 'function') ctx.setLineDash([2, 4]);
      ctx.beginPath();
      ctx.moveTo(cx, plotTop);
      ctx.lineTo(cx, plotBottom);
      ctx.stroke();
      ctx.restore();

      // Year Title (e.g. 2028 戊申)
      ctx.font = 'bold 12px monospace';
      ctx.fillStyle = palette.textMain;
      ctx.textAlign = 'center';
      const yrText = String(item.year);
      ctx.fillText(yrText, cx, plotBottom + 18);

      const subStem = isEn ? (item.pillarEn ? item.pillarEn.split(' ')[0] : '') : (item.pillarZh ? item.pillarZh.split(' ')[0] : '');
      ctx.font = '10px font-sans';
      ctx.fillStyle = palette.textMuted;
      ctx.fillText(subStem, cx, plotBottom + 31);

      // Action Status Badge Pill
      const isGold = (item.status === 'golden');
      const isLock = (item.status === 'lockin');

      const pillW = isEn ? 92 : 82;
      const pillH = 20;
      const pillX = cx - pillW / 2;
      const pillY = plotBottom + 38;

      ctx.save();
      ctx.beginPath();
      if (typeof ctx.roundRect === 'function') {
        ctx.roundRect(pillX, pillY, pillW, pillH, 10);
      } else if (typeof ctx.rect === 'function') {
        ctx.rect(pillX, pillY, pillW, pillH);
      }

      if (isGold) {
        ctx.fillStyle = isDark ? 'rgba(245, 158, 11, 0.3)' : '#fef3c7';
        ctx.fill();
        ctx.strokeStyle = isDark ? '#fbbf24' : '#b45309';
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.fillStyle = isDark ? '#fef08a' : '#78350f';
        ctx.font = 'bold 9.5px font-sans';
        ctx.fillText(isEn ? 'Leap Window' : '🚀 黄金跳轨', cx, pillY + 13);
      } else if (isLock) {
        ctx.fillStyle = isDark ? 'rgba(239, 68, 68, 0.25)' : '#fee2e2';
        ctx.fill();
        ctx.strokeStyle = isDark ? '#f87171' : '#dc2626';
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.fillStyle = isDark ? '#fca5a5' : '#991b1b';
        ctx.font = 'bold 9.5px font-sans';
        ctx.fillText(isEn ? 'Hold Steady' : '⚠️ 坚守本轨', cx, pillY + 13);
      } else {
        ctx.fillStyle = isDark ? 'rgba(255, 255, 255, 0.08)' : '#f1f5f9';
        ctx.fill();
        ctx.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.15)' : '#cbd5e1';
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.fillStyle = isDark ? '#cbd5e1' : '#475569';
        ctx.font = '9.5px font-sans';
        ctx.fillText(isEn ? 'Consolidate' : '🛡️ 稳态蓄力', cx, pillY + 13);
      }
      ctx.restore();
    });

    // 6. Helper to draw smooth curves
    const drawTrackCurve = (points, strokeColor, fillColor) => {
      if (!points || points.length === 0) return;
      ctx.save();

      // Translucent Area Fill
      ctx.beginPath();
      ctx.moveTo(points[0].x, plotBottom);
      ctx.lineTo(points[0].x, points[0].y);
      for (let i = 0; i < points.length - 1; i++) {
        const mx = (points[i].x + points[i + 1].x) / 2;
        const my = (points[i].y + points[i + 1].y) / 2;
        ctx.quadraticCurveTo(points[i].x, points[i].y, mx, my);
      }
      ctx.lineTo(points[points.length - 1].x, points[points.length - 1].y);
      ctx.lineTo(points[points.length - 1].x, plotBottom);
      ctx.closePath();
      ctx.fillStyle = fillColor;
      ctx.fill();

      // Main Crisp Curve Line
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      for (let i = 0; i < points.length - 1; i++) {
        const mx = (points[i].x + points[i + 1].x) / 2;
        const my = (points[i].y + points[i + 1].y) / 2;
        ctx.quadraticCurveTo(points[i].x, points[i].y, mx, my);
      }
      ctx.lineTo(points[points.length - 1].x, points[points.length - 1].y);
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = 3.2;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.stroke();
      ctx.restore();
    };

    // Calculate node coordinates for Track A and Track B
    const ptsA = trajA.map((pt, idx) => ({
      x: getColX(idx),
      y: getY(pt.score || (75 + (pt.v || 0) * 8)),
      score: pt.score || Math.round(75 + (pt.v || 0) * 8),
      year: pt.year
    }));

    const ptsB = trajB.map((pt, idx) => ({
      x: getColX(idx),
      y: getY(pt.score || (78 + (pt.v || 0) * 8)),
      score: pt.score || Math.round(78 + (pt.v || 0) * 8),
      year: pt.year
    }));

    // Draw Track A (Blue)
    drawTrackCurve(ptsA, palette.trackA, palette.trackAGlow);

    // Draw Track B (Purple)
    drawTrackCurve(ptsB, palette.trackB, palette.trackBGlow);

    // 7. Node Markers & Score Labels
    // Track A Nodes
    ptsA.forEach((p, idx) => {
      ctx.save();
      ctx.beginPath();
      ctx.arc(p.x, p.y, 5, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.fill();
      ctx.lineWidth = 3;
      ctx.strokeStyle = palette.trackA;
      ctx.stroke();

      // Score Text
      ctx.font = 'bold 11px monospace';
      ctx.fillStyle = palette.trackA;
      ctx.textAlign = 'center';
      // Shift text slightly above or below to prevent collision
      const yOffset = (ptsB[idx] && Math.abs(ptsB[idx].y - p.y) < 18 && p.y > ptsB[idx].y) ? 16 : -10;
      ctx.fillText(`${p.score}${isEn ? 'pts' : '分'}`, p.x, p.y + yOffset);
      ctx.restore();
    });

    // Track B Nodes
    ptsB.forEach((p, idx) => {
      ctx.save();
      ctx.beginPath();
      ctx.arc(p.x, p.y, 5, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.fill();
      ctx.lineWidth = 3;
      ctx.strokeStyle = palette.trackB;
      ctx.stroke();

      // Score Text
      ctx.font = 'bold 11px monospace';
      ctx.fillStyle = palette.trackB;
      ctx.textAlign = 'center';
      const yOffset = (ptsA[idx] && Math.abs(ptsA[idx].y - p.y) < 18 && p.y > ptsA[idx].y) ? 16 : -10;
      ctx.fillText(`${p.score}${isEn ? 'pts' : '分'}`, p.x, p.y + yOffset);
      ctx.restore();
    });

    // 8. Golden Bifurcation Leap Bridge (黄金跳轨天桥)
    const goldenIdx = timeline.findIndex(t => t.status === 'golden');
    if (goldenIdx !== -1 && ptsA[goldenIdx] && ptsB[goldenIdx]) {
      const pA = ptsA[goldenIdx];
      const pB = ptsB[goldenIdx];
      const gx = pA.x;

      ctx.save();
      // Golden vertical dashed leap beam
      ctx.strokeStyle = isDark ? '#fbbf24' : '#b45309';
      ctx.lineWidth = 2.5;
      if (typeof ctx.setLineDash === 'function') ctx.setLineDash([4, 3]);
      ctx.beginPath();
      ctx.moveTo(gx, pA.y);
      ctx.lineTo(gx, pB.y);
      ctx.stroke();
      if (typeof ctx.setLineDash === 'function') ctx.setLineDash([]);

      // Leap Arrowhead pointing toward the higher score
      const isBHigher = (pB.score >= pA.score);
      const targetY = isBHigher ? pB.y : pA.y;
      const arrowDir = isBHigher ? -1 : 1;

      ctx.beginPath();
      ctx.moveTo(gx, targetY);
      ctx.lineTo(gx - 5, targetY - arrowDir * 9);
      ctx.lineTo(gx + 5, targetY - arrowDir * 9);
      ctx.closePath();
      ctx.fillStyle = isDark ? '#fbbf24' : '#b45309';
      ctx.fill();

      // Pulsing golden beacon ring on the winning node
      ctx.beginPath();
      ctx.arc(gx, targetY, 9, 0, Math.PI * 2);
      ctx.strokeStyle = isDark ? 'rgba(251, 191, 36, 0.6)' : 'rgba(180, 83, 9, 0.6)';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Floating Callout Badge next to leap arrow
      const badgeW = isEn ? 190 : 160;
      const badgeH = 46;
      // Position to the left or right depending on column
      const badgeX = goldenIdx >= 3 ? (gx - badgeW - 14) : (gx + 14);
      const badgeY = Math.min(pA.y, pB.y) + Math.abs(pB.y - pA.y) / 2 - badgeH / 2;

      ctx.beginPath();
      if (typeof ctx.roundRect === 'function') {
        ctx.roundRect(badgeX, badgeY, badgeW, badgeH, 8);
      } else if (typeof ctx.rect === 'function') {
        ctx.rect(badgeX, badgeY, badgeW, badgeH);
      }
      ctx.fillStyle = palette.goldenBoxBg;
      ctx.fill();
      ctx.strokeStyle = palette.goldenBoxBorder;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Badge Text Content
      ctx.textAlign = 'left';
      ctx.font = 'bold 11px font-sans';
      ctx.fillStyle = palette.goldenText;
      const yrHeader = isEn ? `Golden Leap Window (${golden.year})` : `🚀 黄金跳轨窗口 (${golden.year})`;
      ctx.fillText(yrHeader, badgeX + 8, badgeY + 16);

      ctx.font = '10px font-sans';
      ctx.fillStyle = palette.goldenSubText;
      const scoreDiff = Math.abs(pB.score - pA.score);
      const subInfo = isEn ? `Lowest Friction (${golden.barrierScore}pts) · Delta +${scoreDiff}pts` : `阻抗最低 (${golden.barrierScore}分) · 动能跃迁 +${scoreDiff}分`;
      ctx.fillText(subInfo, badgeX + 8, badgeY + 31);
      ctx.restore();
    }

    // 9. Top Navigation & Legend Bar
    ctx.save();
    // Track A Legend
    ctx.beginPath();
    ctx.arc(plotLeft + 6, 20, 5, 0, Math.PI * 2);
    ctx.fillStyle = palette.trackA;
    ctx.fill();
    ctx.font = 'bold 11px font-sans';
    ctx.fillStyle = palette.trackA;
    ctx.textAlign = 'left';
    ctx.fillText(isEn ? 'Track A: Option A (Steady Base)' : '方案 A 轨迹 (稳健保底型)', plotLeft + 16, 23);

    // Track B Legend
    const midLegX = plotLeft + (isEn ? 210 : 180);
    ctx.beginPath();
    ctx.arc(midLegX + 6, 20, 5, 0, Math.PI * 2);
    ctx.fillStyle = palette.trackB;
    ctx.fill();
    ctx.fillStyle = palette.trackB;
    ctx.fillText(isEn ? 'Track B: Option B (Peak Upside)' : '方案 B 轨迹 (爆发成长型)', midLegX + 16, 23);

    // Right-aligned strategic takeaway
    ctx.textAlign = 'right';
    ctx.font = 'bold 11px font-sans';
    ctx.fillStyle = isDark ? '#fbbf24' : '#b45309';
    const topTip = isEn ? `Deployment: Consolidate in A -> Leap in ${golden.year || 2028}` : `🌟 推荐部署：先在 A 轨蓄力 ➔ ${golden.year || 2028} 顺势跳入 B 轨`;
    ctx.fillText(topTip, plotRight, 23);

    ctx.restore();
    ctx.restore(); // Restore high-dpi scale
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PhasePortraitEngine };
}
if (typeof window !== 'undefined') {
  window.PhasePortraitEngine = PhasePortraitEngine;
}
