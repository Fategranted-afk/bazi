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
    this.hoverPos = null;
    this.hoverNearestAge = null;
    this._eventsBound = false;
    this.bindEvents();
  }

  /**
   * 绑定鼠标交互事件 (实时探针与点击聚焦)
   */
  bindEvents() {
    if (!this.canvas || this._eventsBound || typeof this.canvas.addEventListener !== 'function') return;
    this._eventsBound = true;

    this.canvas.addEventListener('mousemove', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      this.hoverPos = { x: mx, y: my };
      this.redraw();
    });

    this.canvas.addEventListener('mouseleave', () => {
      this.hoverPos = null;
      this.hoverNearestAge = null;
      this.redraw();
    });

    this.canvas.addEventListener('click', () => {
      if (!this.hoverNearestAge) return;
      const clickedAge = this.hoverNearestAge;
      if (typeof window !== 'undefined') {
        window.fourPillarsActiveAge = clickedAge;
        if (typeof window.setIChingActiveAge === 'function') {
          window.setIChingActiveAge(clickedAge);
        }
      }
      this.lastCurrentAge = clickedAge;
      this.redraw();

      const summaryBox = typeof document !== 'undefined' ? document.getElementById('phaseTrajectorySummary') : null;
      if (summaryBox && this.lastTrajectory) {
        const curPt = this.lastTrajectory.find(p => p.age === clickedAge) || this.lastTrajectory[0];
        const isAsc = curPt && curPt.v >= 0;
        const isEn = (typeof currentLang !== 'undefined' && currentLang === 'en');
        summaryBox.textContent = isEn
          ? `Focused on Age ${clickedAge}: ${isAsc ? 'Spiral Ascending Phase 🔺 (Momentum Expansion)' : 'Consolidation Phase 🔻 (Grounding & Sanctuary)'} (x=${curPt.x}, v=${curPt.v}).`
          : `已聚焦选择【${clickedAge}岁】：处于【${isAsc ? '螺旋上升跃迁期 🔺 · 木火升腾' : '筑底蓄能修整期 🔻 · 印比固本'}】(位移 x=${curPt.x}, 动量 v=${curPt.v})。`;
      }
    });
  }

  /**
   * High-DPI Retina 4K 自适应分辨率配置 (Fixes canvas blurriness)
   */
  setupDPI() {
    if (!this.canvas) return { width: 640, height: 360, dpr: 1 };
    const dpr = (typeof window !== 'undefined' && window.devicePixelRatio) ? Math.max(1, window.devicePixelRatio) : 1;
    let cssWidth = this.canvas.clientWidth || (this.canvas.parentElement && this.canvas.parentElement.clientWidth) || 640;
    let cssHeight = this.canvas.clientHeight || 360;
    if (cssWidth < 320) cssWidth = 640;
    if (cssHeight < 240) cssHeight = 360;

    const targetW = Math.round(cssWidth * dpr);
    const targetH = Math.round(cssHeight * dpr);

    if (this.canvas.width !== targetW || this.canvas.height !== targetH) {
      this.canvas.width = targetW;
      this.canvas.height = targetH;
    }
    this.cssWidth = cssWidth;
    this.cssHeight = cssHeight;
    this.dpr = dpr;
    return { width: cssWidth, height: cssHeight, dpr };
  }

  /**
   * 重绘当前已缓存参数与轨迹
   */
  redraw() {
    if (this.lastParams) {
      this.renderVectorField(this.lastParams.a, this.lastParams.b, this.lastParams.c, this.lastParams.gamma, this.lastParams.isDark);
    }
    if (this.lastTrajectory) {
      this.renderTrajectory(this.lastTrajectory, this.lastCurrentAge, this.lastParams ? this.lastParams.isDark : true);
    }
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
    this.lastParams = { a, b, c, gamma, isDark };

    const { width, height, dpr } = this.setupDPI();
    this.ctx.save();
    if (typeof this.ctx.scale === 'function') {
      this.ctx.scale(dpr, dpr);
    }
    this.ctx.clearRect(0, 0, width, height);

    // 1. 深邃时空底色渐变
    const bgGrad = this.ctx.createLinearGradient(0, 0, width, height);
    if (isDark) {
      bgGrad.addColorStop(0, '#090d1a');
      bgGrad.addColorStop(0.5, '#0d1224');
      bgGrad.addColorStop(1, '#05070e');
    } else {
      bgGrad.addColorStop(0, '#ffffff');
      bgGrad.addColorStop(0.5, '#f8fafc');
      bgGrad.addColorStop(1, '#f1f5f9');
    }
    this.ctx.fillStyle = bgGrad;
    this.ctx.fillRect(0, 0, width, height);

    // 2. 暗夜模式绘制星辰微尘背景 (Deterministic Celestial Stars)
    if (isDark) {
      this.ctx.save();
      const starSeeds = [
        [0.12, 0.18, 1.2, 0.4], [0.24, 0.28, 0.8, 0.2], [0.38, 0.12, 1.5, 0.5],
        [0.52, 0.22, 1.0, 0.3], [0.68, 0.15, 1.4, 0.45], [0.82, 0.25, 1.1, 0.35],
        [0.18, 0.72, 1.3, 0.4], [0.35, 0.82, 0.9, 0.25], [0.62, 0.78, 1.2, 0.35],
        [0.79, 0.85, 1.0, 0.3], [0.91, 0.65, 1.4, 0.4]
      ];
      starSeeds.forEach(([rx, ry, r, alpha]) => {
        this.ctx.beginPath();
        this.ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        this.ctx.arc(rx * width, ry * height, r, 0, Math.PI * 2);
        this.ctx.fill();
      });
      this.ctx.restore();
    }

    // 3. 绘制透视时间轴基座与导轨 (Perspective Timeline Rails)
    const floorY = height - 26;
    const midY = height / 2;

    this.ctx.save();
    this.ctx.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.10)';
    this.ctx.lineWidth = 1;

    // 3D 纵深透视网格线 (Perspective floor grid receding to horizon)
    const gridAges = [1, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    const plotLeft = 70;
    const plotRight = width - 50;
    const plotWidth = plotRight - plotLeft;

    gridAges.forEach(age => {
      const u = (age - 1) / 99.0;
      const tx = plotLeft + u * plotWidth;

      // 从底部向中轴延伸的透视网格线
      this.ctx.beginPath();
      this.ctx.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.04)';
      this.ctx.moveTo(tx, floorY);
      this.ctx.lineTo(tx + (tx - width / 2) * 0.08, midY + 30);
      this.ctx.stroke();

      // 底部时间标尺刻度
      this.ctx.beginPath();
      this.ctx.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.22)' : 'rgba(0, 0, 0, 0.22)';
      this.ctx.moveTo(tx, floorY - 3);
      this.ctx.lineTo(tx, floorY + 4);
      this.ctx.stroke();

      if (age === 1 || age % 20 === 0 || age === 100) {
        this.ctx.fillStyle = isDark ? 'rgba(203, 213, 225, 0.85)' : '#475569';
        this.ctx.font = 'bold 10px monospace';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(`${age}y`, tx, floorY + 16);
      }
    });

    // 底部时间基准导轨
    this.ctx.beginPath();
    this.ctx.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.18)' : 'rgba(0, 0, 0, 0.18)';
    this.ctx.moveTo(plotLeft - 10, floorY);
    this.ctx.lineTo(plotRight + 10, floorY);
    this.ctx.stroke();

    // 中轴平衡基准线 (v = 0 平衡态)
    this.ctx.save();
    if (typeof this.ctx.setLineDash === 'function') this.ctx.setLineDash([4, 4]);
    this.ctx.strokeStyle = isDark ? 'rgba(245, 158, 11, 0.25)' : 'rgba(180, 83, 9, 0.30)';
    this.ctx.lineWidth = 1.2;
    this.ctx.beginPath();
    this.ctx.moveTo(plotLeft - 10, midY);
    this.ctx.lineTo(plotRight + 10, midY);
    this.ctx.stroke();
    this.ctx.restore();

    // 中轴平衡态文字标注
    const isEn = (typeof currentLang !== 'undefined' && currentLang === 'en');
    this.ctx.font = 'bold 9.5px monospace';
    this.ctx.fillStyle = isDark ? 'rgba(245, 158, 11, 0.5)' : '#854d0e';
    this.ctx.textAlign = 'left';
    this.ctx.fillText(isEn ? '[v = 0 Equilibrium]' : '[v = 0 平衡基准态]', plotLeft - 10, midY - 6);

    // 4. 四象限动力学象态 HUD 铭牌 (High-Contrast Elegantly Bordered HUD Badges)
    const drawHudBadge = (text, x, y, align, colorTheme) => {
      this.ctx.save();
      this.ctx.font = 'bold 10px "Noto Serif SC", serif';
      const textW = this.ctx.measureText(text).width;
      const padX = 8;
      const padY = 4;
      const boxW = textW + padX * 2;
      const boxH = 20;
      const boxX = align === 'right' ? (x - boxW) : x;
      const boxY = y - 14;

      this.ctx.beginPath();
      if (typeof this.ctx.roundRect === 'function') {
        this.ctx.roundRect(boxX, boxY, boxW, boxH, 4);
      } else {
        this.ctx.rect(boxX, boxY, boxW, boxH);
      }
      this.ctx.fillStyle = isDark ? colorTheme.darkBg : colorTheme.lightBg;
      this.ctx.fill();
      this.ctx.strokeStyle = isDark ? colorTheme.darkBorder : colorTheme.lightBorder;
      this.ctx.lineWidth = 1;
      this.ctx.stroke();

      this.ctx.fillStyle = isDark ? colorTheme.darkText : colorTheme.lightText;
      this.ctx.textAlign = 'left';
      this.ctx.fillText(text, boxX + padX, boxY + 14);
      this.ctx.restore();
    };

    // 右上: 顺风破局 / 木火升腾 (+v, +x)
    drawHudBadge(
      isEn ? '🚀 [Ascent · Momentum Expansion]' : '🚀 顺风破局区 (势能爆发 · 木火升腾)',
      width - 35, 32, 'right',
      { darkBg: 'rgba(16, 185, 129, 0.15)', darkBorder: 'rgba(16, 185, 129, 0.35)', darkText: '#34d399', lightBg: '#ecfdf5', lightBorder: '#a7f3d0', lightText: '#047857' }
    );

    // 右下: 承压克耗 / 财官制化 (-v, +x)
    drawHudBadge(
      isEn ? '⚡ [Overload · Tension & Friction]' : '⚡ 承压克耗区 (防守自持 · 逆风求稳)',
      width - 35, floorY - 10, 'right',
      { darkBg: 'rgba(239, 68, 68, 0.15)', darkBorder: 'rgba(239, 68, 68, 0.35)', darkText: '#fca5a5', lightBg: '#fee2e2', lightBorder: '#fca5a5', lightText: '#b91c1c' }
    );

    // 左上: 稳步蓄力 / 印比固本 (+v, -x)
    drawHudBadge(
      isEn ? '🛡️ [Resource · Stable Accumulation]' : '🛡️ 稳步蓄力区 (印比固本 · 资源沉淀)',
      plotLeft - 10, 32, 'left',
      { darkBg: 'rgba(245, 158, 11, 0.15)', darkBorder: 'rgba(245, 158, 11, 0.35)', darkText: '#fbbf24', lightBg: '#fef3c7', lightBorder: '#fde68a', lightText: '#854d0e' }
    );

    // 左下: 筑底自修 / 战略收敛 (-v, -x)
    drawHudBadge(
      isEn ? '🧘 [Sanctuary · Deep Grounding]' : '🧘 内修自持区 (战略收敛 · 筑底重塑)',
      plotLeft - 10, floorY - 10, 'left',
      { darkBg: 'rgba(99, 102, 241, 0.15)', darkBorder: 'rgba(99, 102, 241, 0.35)', darkText: '#a5b4fc', lightBg: '#eef2ff', lightBorder: '#c7d2fe', lightText: '#4338ca' }
    );

    // 5. 绘制背景等势流动线与动力学矢量 (Graceful Vector Streamlines with Energy Force)
    const streamlineCount = 10;
    for (let s = 0; s < streamlineCount; s++) {
      const startX = plotLeft + s * (plotWidth / (streamlineCount - 1));
      const phaseNorm = (startX - width / 2) / (width / 2.5);
      const forceVal = this.computeForce(phaseNorm, a, b, c);

      this.ctx.beginPath();
      this.ctx.strokeStyle = isDark ? 'rgba(245, 158, 11, 0.08)' : 'rgba(180, 83, 9, 0.12)';
      this.ctx.lineWidth = 1;

      const yControl = midY - forceVal * 36;
      this.ctx.moveTo(startX - 22, midY + 48);
      this.ctx.quadraticCurveTo(startX, yControl, startX + 26, midY - 48);
      this.ctx.stroke();

      // 小流向微箭头
      const arrowX = startX + 8;
      const arrowY = midY - 20;
      this.drawMiniArrow(arrowX, arrowY, 6, -forceVal * 3.2, isDark ? 'rgba(245, 158, 11, 0.20)' : 'rgba(180, 83, 9, 0.25)');
    }

    this.ctx.restore();
    this.ctx.restore(); // restore high-dpi scaling
  }

  /**
   * 绘制 3D/2.5D 生命时空螺旋上升/下降轨迹线 (Life-Chrono Spiral Trajectory)
   */
  renderTrajectory(trajectoryPoints, currentAge = null, isDark = true) {
    if (!this.ctx || !this.canvas || !trajectoryPoints || trajectoryPoints.length === 0) return;
    this.lastTrajectory = trajectoryPoints;
    this.lastCurrentAge = currentAge;

    const { width, height, dpr } = this.setupDPI();
    this.ctx.save();
    if (typeof this.ctx.scale === 'function') {
      this.ctx.scale(dpr, dpr);
    }

    const isEn = (typeof currentLang !== 'undefined' && currentLang === 'en');
    const plotLeft = 70;
    const plotRight = width - 50;
    const plotWidth = plotRight - plotLeft;
    const floorY = height - 26;
    const midY = height / 2;

    // 1. 动态自适应动量高程缩放 (Dynamic Amplitude Normalization)
    const maxV = Math.max(...trajectoryPoints.map(p => Math.abs(p.v || 0)), 0.35);
    const vScale = Math.min(80 / maxV, 110);

    // 2. 坐标投射: 真实 3D 螺旋流形空间展开 (3D Helical Coil on Spatiotemporal Streamline)
    const toScreen = (pt) => {
      const u = (pt.age - 1) / 99.0;
      const xBase = plotLeft + u * plotWidth;
      const phi = ((pt.age - 1) * Math.PI * 2) / 6.5 + (pt.x || 0) * 1.4;
      const coilR = 13.0; // 3D 螺旋线柱半径

      const dx = Math.cos(phi) * 8.5;
      const dy = Math.sin(phi) * coilR;
      const sx = xBase + dx;
      const sy = Math.max(42, Math.min(height - 42, midY - (pt.v * vScale) + dy));
      const isFront = Math.cos(phi) >= -0.15; // 深度分层 (前卷/后卷)
      return { sx, sy, age: pt.age, x: pt.x, v: pt.v, isFront, phi };
    };

    const screenPoints = trajectoryPoints.map(toScreen);

    // 3. 空间进深投影虚线 (Milestone Ground Projection Anchors)
    this.ctx.save();
    screenPoints.forEach(pt => {
      if (pt.age === 1 || pt.age % 20 === 0 || pt.age === 100) {
        this.ctx.beginPath();
        this.ctx.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.07)' : 'rgba(0, 0, 0, 0.06)';
        this.ctx.lineWidth = 1;
        if (typeof this.ctx.setLineDash === 'function') this.ctx.setLineDash([2, 4]);
        this.ctx.moveTo(pt.sx, pt.sy);
        this.ctx.lineTo(pt.sx, floorY);
        this.ctx.stroke();
      }
    });
    this.ctx.restore();

    // 4. 第一层通道: 绘制空间背向螺旋线段 (Back Helical Loops - Depth Illusion)
    this.ctx.save();
    for (let i = 0; i < screenPoints.length - 1; i++) {
      const p1 = screenPoints[i];
      const p2 = screenPoints[i + 1];
      if (!p1.isFront && !p2.isFront) {
        this.ctx.beginPath();
        this.ctx.strokeStyle = isDark ? 'rgba(148, 163, 184, 0.35)' : 'rgba(100, 116, 139, 0.35)';
        this.ctx.lineWidth = 1.8;
        this.ctx.lineCap = 'round';
        this.ctx.moveTo(p1.sx, p1.sy);
        this.ctx.lineTo(p2.sx, p2.sy);
        this.ctx.stroke();
      }
    }
    this.ctx.restore();

    // 5. 第二层通道: 绘制底层发光氛围光带 (Ambient Glow Ribbon)
    this.ctx.save();
    for (let i = 0; i < screenPoints.length - 1; i++) {
      const p1 = screenPoints[i];
      const p2 = screenPoints[i + 1];
      const age = p1.age;

      let glowColor = 'rgba(16, 185, 129, 0.28)'; // 1~25y 翠绿萌芽
      if (age >= 26 && age <= 50) glowColor = 'rgba(245, 158, 11, 0.35)'; // 26~50y 金橙鼎盛
      else if (age >= 51 && age <= 75) glowColor = 'rgba(234, 179, 8, 0.30)'; // 51~75y 赤金沉淀
      else if (age > 75) glowColor = 'rgba(56, 189, 248, 0.32)'; // 76~100y 玄蓝深邃

      this.ctx.beginPath();
      this.ctx.strokeStyle = glowColor;
      this.ctx.lineWidth = 7;
      this.ctx.lineCap = 'round';
      this.ctx.moveTo(p1.sx, p1.sy);
      this.ctx.lineTo(p2.sx, p2.sy);
      this.ctx.stroke();
    }
    this.ctx.restore();

    // 6. 第三层通道: 绘制空间前向主体螺旋线 (Front Helical Loops - Vivid 3D Foreground)
    this.ctx.save();
    for (let i = 0; i < screenPoints.length - 1; i++) {
      const p1 = screenPoints[i];
      const p2 = screenPoints[i + 1];
      const age = p1.age;

      let strokeColor = '#10b981'; // 萌芽期
      if (age >= 26 && age <= 50) {
        strokeColor = p1.v > 0 ? '#f43f5e' : '#f59e0b'; // 鼎盛期
      } else if (age >= 51 && age <= 75) {
        strokeColor = '#eab308'; // 沉淀期
      } else if (age > 75) {
        strokeColor = '#38bdf8'; // 归真期
      }

      this.ctx.beginPath();
      this.ctx.strokeStyle = strokeColor;
      this.ctx.lineWidth = p1.isFront ? 3.4 : 2.2;
      this.ctx.lineCap = 'round';
      this.ctx.lineJoin = 'round';
      this.ctx.moveTo(p1.sx, p1.sy);
      this.ctx.lineTo(p2.sx, p2.sy);
      this.ctx.stroke();
    }
    this.ctx.restore();

    // 7. 一生重大动能峰值点与筑底转折点自动标注 (Peak & Trough Landmark Badges)
    let peakPt = screenPoints[0];
    let troughPt = screenPoints[0];
    screenPoints.forEach(p => {
      if (p.v > peakPt.v) peakPt = p;
      if (p.v < troughPt.v) troughPt = p;
    });

    // 绘制一生动能顶峰徽章 (Lifetime Peak Momentum)
    if (peakPt && peakPt.v > 0.1) {
      this.ctx.save();
      // 竖向金光投影
      this.ctx.beginPath();
      this.ctx.strokeStyle = isDark ? 'rgba(251, 191, 36, 0.4)' : 'rgba(180, 83, 9, 0.4)';
      this.ctx.lineWidth = 1.5;
      if (typeof this.ctx.setLineDash === 'function') this.ctx.setLineDash([3, 3]);
      this.ctx.moveTo(peakPt.sx, peakPt.sy);
      this.ctx.lineTo(peakPt.sx, floorY);
      this.ctx.stroke();
      if (typeof this.ctx.setLineDash === 'function') this.ctx.setLineDash([]);

      // 顶峰金冠圆环
      this.ctx.beginPath();
      this.ctx.arc(peakPt.sx, peakPt.sy, 6, 0, Math.PI * 2);
      this.ctx.fillStyle = '#fbbf24';
      this.ctx.fill();
      this.ctx.strokeStyle = '#ffffff';
      this.ctx.lineWidth = 2;
      this.ctx.stroke();

      // 悬浮顶峰标签
      const peakText = isEn ? `🚀 Peak ${peakPt.age}y` : `🚀 动能巅峰 ${peakPt.age}岁`;
      this.ctx.font = 'bold 9.5px sans-serif';
      const textW = this.ctx.measureText(peakText).width;
      const bX = Math.max(10, Math.min(width - textW - 20, peakPt.sx - (textW + 16) / 2));
      const bY = Math.max(22, peakPt.sy - 22);

      this.ctx.beginPath();
      if (typeof this.ctx.roundRect === 'function') {
        this.ctx.roundRect(bX, bY, textW + 16, 18, 9);
      } else {
        this.ctx.rect(bX, bY, textW + 16, 18);
      }
      this.ctx.fillStyle = isDark ? 'rgba(30, 20, 10, 0.92)' : '#fef3c7';
      this.ctx.fill();
      this.ctx.strokeStyle = isDark ? '#fbbf24' : '#854d0e';
      this.ctx.lineWidth = 1;
      this.ctx.stroke();

      this.ctx.fillStyle = isDark ? '#fef08a' : '#854d0e';
      this.ctx.textAlign = 'left';
      this.ctx.fillText(peakText, bX + 8, bY + 12);
      this.ctx.restore();
    }

    // 8. 绘制岁运节点珠 (Decade Milestone Nodes: 20y, 40y, 60y, 80y)
    screenPoints.forEach(pt => {
      if (pt.age % 20 === 0 && pt.age !== 100) {
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.fillStyle = isDark ? '#ffffff' : '#0f172a';
        this.ctx.arc(pt.sx, pt.sy, 3.5, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.strokeStyle = isDark ? 'rgba(245, 158, 11, 0.8)' : '#854d0e';
        this.ctx.lineWidth = 1.5;
        this.ctx.stroke();

        this.ctx.fillStyle = isDark ? '#e2e8f0' : '#1e293b';
        this.ctx.font = 'bold 9.5px monospace';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(`${pt.age}y`, pt.sx, pt.sy - 8);
        this.ctx.restore();
      }
    });

    // 9. 🌟 起点标定 (1y 起点 · 元神初生)
    const originPt = screenPoints[0];
    if (originPt) {
      this.ctx.save();
      const haloGrad = this.ctx.createRadialGradient(originPt.sx, originPt.sy, 2, originPt.sx, originPt.sy, 16);
      haloGrad.addColorStop(0, 'rgba(251, 191, 36, 0.9)');
      haloGrad.addColorStop(0.5, 'rgba(245, 158, 11, 0.35)');
      haloGrad.addColorStop(1, 'rgba(245, 158, 11, 0.0)');
      this.ctx.fillStyle = haloGrad;
      this.ctx.beginPath();
      this.ctx.arc(originPt.sx, originPt.sy, 16, 0, Math.PI * 2);
      this.ctx.fill();

      this.ctx.fillStyle = '#fbbf24';
      this.ctx.beginPath();
      this.ctx.arc(originPt.sx, originPt.sy, 5, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.strokeStyle = '#ffffff';
      this.ctx.lineWidth = 2;
      this.ctx.stroke();

      const originText = isEn ? '🌟 1y Origin · Natal Dawn' : '🌟 1y 起点 · 元神初生';
      this.ctx.font = 'bold 10px font-sans';
      this.ctx.fillStyle = isDark ? '#fef08a' : '#854d0e';
      this.ctx.textAlign = 'left';
      this.ctx.fillText(originText, originPt.sx + 10, originPt.sy + 18);
      this.ctx.restore();
    }

    // 10. 100y 归真终点标定
    const endPt = screenPoints[screenPoints.length - 1];
    if (endPt) {
      this.ctx.save();
      this.ctx.fillStyle = '#38bdf8';
      this.ctx.beginPath();
      this.ctx.arc(endPt.sx, endPt.sy, 5, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.strokeStyle = '#ffffff';
      this.ctx.lineWidth = 2;
      this.ctx.stroke();

      const endText = isEn ? '🌌 100y Zenith' : '🌌 100y 归真';
      this.ctx.font = 'bold 10px font-sans';
      this.ctx.fillStyle = isDark ? '#93c5fd' : '#1e40af';
      this.ctx.textAlign = 'right';
      this.ctx.fillText(endText, endPt.sx - 8, endPt.sy + 18);
      this.ctx.restore();
    }

    // 11. 📍 命主当前岁数脉冲信标 (Current Age Pulsing Beacon)
    const targetAge = (currentAge !== null && currentAge !== undefined) ? currentAge : 30;
    const currentPt = screenPoints.find(p => p.age === targetAge) || screenPoints[Math.min(29, screenPoints.length - 1)];
    if (currentPt) {
      this.ctx.save();
      // 双重同心发光雷达波纹
      this.ctx.beginPath();
      this.ctx.strokeStyle = 'rgba(16, 185, 129, 0.45)';
      this.ctx.lineWidth = 1.5;
      this.ctx.arc(currentPt.sx, currentPt.sy, 14, 0, Math.PI * 2);
      this.ctx.stroke();

      this.ctx.beginPath();
      this.ctx.strokeStyle = 'rgba(16, 185, 129, 0.85)';
      this.ctx.lineWidth = 2.2;
      this.ctx.arc(currentPt.sx, currentPt.sy, 8.5, 0, Math.PI * 2);
      this.ctx.stroke();

      // 核心碧玉星点
      this.ctx.fillStyle = '#10b981';
      this.ctx.beginPath();
      this.ctx.arc(currentPt.sx, currentPt.sy, 5, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.strokeStyle = '#ffffff';
      this.ctx.lineWidth = 1.8;
      this.ctx.stroke();

      // 悬浮气泡标签 (Pill Badge)
      const isAscending = currentPt.v >= 0;
      let badgeLabelZh = `📍 当前 ${targetAge}岁 · ${isAscending ? '螺旋上升期 🔺' : '筑底蓄能期 🔻'}`;
      let badgeLabelEn = `📍 Age ${targetAge} · ${isAscending ? 'Spiral Ascending Phase 🔺' : 'Consolidation Phase 🔻'}`;
      const badgeText = isEn ? badgeLabelEn : badgeLabelZh;

      this.ctx.font = 'bold 11px sans-serif';
      const textMetrics = this.ctx.measureText(badgeText);
      const badgeW = textMetrics.width + 18;
      const badgeH = 24;

      // 智能边界与左右对齐，防止在两端或边缘时截断溢出
      let badgeX = currentPt.sx - badgeW / 2;
      let badgeY = currentPt.sy - 36;
      if (currentPt.sx < 120) {
        badgeX = currentPt.sx + 14;
        badgeY = currentPt.sy - 12;
      } else if (currentPt.sx > width - 130) {
        badgeX = currentPt.sx - badgeW - 14;
        badgeY = currentPt.sy - 12;
      }
      if (badgeY < 20) badgeY = currentPt.sy + 16;

      // 气泡底板
      this.ctx.fillStyle = isDark ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255, 255, 255, 0.98)';
      this.ctx.strokeStyle = isAscending ? '#10b981' : '#f59e0b';
      this.ctx.lineWidth = 1.5;
      this.roundRect(badgeX, badgeY, badgeW, badgeH, 6, true, true);

      // 气泡文字
      this.ctx.fillStyle = isAscending ? (isDark ? '#34d399' : '#047857') : (isDark ? '#fbbf24' : '#854d0e');
      this.ctx.textAlign = 'left';
      this.ctx.fillText(badgeText, badgeX + 9, badgeY + 16);
      this.ctx.restore();
    }

    // 12. 交互式鼠标探针与悬浮卡片 (Interactive Hover Scan Laser & Glassmorphic HUD)
    if (this.hoverPos) {
      let nearestPt = screenPoints[0];
      let minDist = 999999;
      screenPoints.forEach(p => {
        const dist = Math.abs(p.sx - this.hoverPos.x);
        if (dist < minDist) {
          minDist = dist;
          nearestPt = p;
        }
      });

      if (nearestPt && minDist < 60) {
        this.hoverNearestAge = nearestPt.age;
        this.ctx.save();

        // 竖向激光扫描虚线 (Scanning Laser Line)
        this.ctx.beginPath();
        this.ctx.strokeStyle = isDark ? 'rgba(56, 189, 248, 0.7)' : 'rgba(2, 132, 199, 0.7)';
        this.ctx.lineWidth = 1.5;
        if (typeof this.ctx.setLineDash === 'function') this.ctx.setLineDash([3, 3]);
        this.ctx.moveTo(nearestPt.sx, 24);
        this.ctx.lineTo(nearestPt.sx, floorY);
        this.ctx.stroke();

        // 目标十字准心圆 (Target Reticle)
        this.ctx.beginPath();
        this.ctx.arc(nearestPt.sx, nearestPt.sy, 8, 0, Math.PI * 2);
        this.ctx.strokeStyle = '#38bdf8';
        this.ctx.lineWidth = 2.5;
        this.ctx.stroke();

        // 悬浮玻璃拟态探针卡片 (Glassmorphic HUD Card)
        const hudW = isEn ? 210 : 180;
        const hudH = 76;
        let hudX = nearestPt.sx + 16;
        let hudY = nearestPt.sy - hudH / 2;
        if (hudX + hudW > width - 15) hudX = nearestPt.sx - hudW - 16;
        if (hudY < 24) hudY = 24;
        if (hudY + hudH > height - 24) hudY = height - hudH - 24;

        this.ctx.beginPath();
        if (typeof this.ctx.roundRect === 'function') {
          this.ctx.roundRect(hudX, hudY, hudW, hudH, 8);
        } else {
          this.ctx.rect(hudX, hudY, hudW, hudH);
        }
        this.ctx.fillStyle = isDark ? 'rgba(11, 15, 25, 0.94)' : 'rgba(255, 255, 255, 0.98)';
        this.ctx.fill();
        this.ctx.strokeStyle = isDark ? '#38bdf8' : '#0284c7';
        this.ctx.lineWidth = 1.5;
        this.ctx.stroke();

        const isAsc = nearestPt.v >= 0;
        this.ctx.textAlign = 'left';

        // Title Line
        this.ctx.font = 'bold 11px sans-serif';
        this.ctx.fillStyle = isDark ? '#f8fafc' : '#0f172a';
        const titleStr = isEn ? `Age ${nearestPt.age} Horizon Scan` : `🧭 【${nearestPt.age}岁 · 时空动力探针】`;
        this.ctx.fillText(titleStr, hudX + 10, hudY + 18);

        // Momentum Line
        this.ctx.font = '10px font-mono';
        this.ctx.fillStyle = isAsc ? (isDark ? '#34d399' : '#047857') : (isDark ? '#fbbf24' : '#854d0e');
        const vSign = nearestPt.v >= 0 ? '+' : '';
        const vText = isEn
          ? `Momentum: v = ${vSign}${nearestPt.v} (${isAsc ? 'Ascent 🔺' : 'Grounding 🔻'})`
          : `动能势位: v = ${vSign}${nearestPt.v} (${isAsc ? '上升跃迁期 🔺' : '筑底自持期 🔻'})`;
        this.ctx.fillText(vText, hudX + 10, hudY + 36);

        // Displacement Line
        this.ctx.font = '10px font-mono';
        this.ctx.fillStyle = isDark ? '#94a3b8' : '#475569';
        const xText = isEn ? `Displacement: x = ${nearestPt.x}` : `能量自持位移: x = ${nearestPt.x}`;
        this.ctx.fillText(xText, hudX + 10, hudY + 52);

        // Interaction Prompt
        this.ctx.font = '9.5px sans-serif';
        this.ctx.fillStyle = isDark ? '#38bdf8' : '#0284c7';
        const clickPrompt = isEn ? '💡 Click to focus & sync charts' : '💡 点击可聚焦排盘与周流推演';
        this.ctx.fillText(clickPrompt, hudX + 10, hudY + 68);

        this.ctx.restore();
      }
    }

    this.ctx.restore(); // restore high-dpi scaling
  }

  /**
   * 绘制圆角矩形辅助
   */
  roundRect(x, y, w, h, r, fill, stroke) {
    if (!this.ctx) return;
    this.ctx.beginPath();
    if (typeof this.ctx.roundRect === 'function') {
      this.ctx.roundRect(x, y, w, h, r);
    } else {
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
    }
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
      goldenBoxBorder: '#ca8a04',
      goldenText: '#854d0e',
      goldenSubText: '#a16207'
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
        ctx.strokeStyle = isDark ? '#fbbf24' : '#ca8a04';
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.fillStyle = isDark ? '#fef08a' : '#854d0e';
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
      ctx.strokeStyle = isDark ? '#fbbf24' : '#ca8a04';
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
      ctx.fillStyle = isDark ? '#fbbf24' : '#ca8a04';
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
    ctx.fillStyle = isDark ? '#fbbf24' : '#854d0e';
    const topTip = isEn ? `Deployment: Consolidate in A -> Leap in ${golden.year || 2028}` : `🌟 推荐部署：先在 A 轨蓄力 ➔ ${golden.year || 2028} 顺势跳入 B 轨`;
    ctx.fillText(topTip, plotRight, 23);

    ctx.restore();
    ctx.restore(); // Restore high-dpi scale
  }

  /**
   * 提取指定年龄区间 (默认 30~70岁 黄金生命期) 的相对极值点 (高点与低点)
   * @param {Array} trajectoryPoints - 100岁轨迹点数组
   * @param {number} minAge - 区间起始岁数 (默认 30)
   * @param {number} maxAge - 区间结束岁数 (默认 70)
   * @returns {Object} { peak, trough, lifetimePeak, lifetimeTrough, minAge, maxAge }
   */
  static findKeyExtrema(trajectoryPoints, minAge = 30, maxAge = 70) {
    if (!trajectoryPoints || !trajectoryPoints.length) {
      const fallback = { age: 30, x: 0, v: 0 };
      return { peak: fallback, trough: fallback, lifetimePeak: fallback, lifetimeTrough: fallback, minAge, maxAge };
    }

    let lifetimePeak = trajectoryPoints[0];
    let lifetimeTrough = trajectoryPoints[0];
    trajectoryPoints.forEach(p => {
      if (p.v > lifetimePeak.v) lifetimePeak = p;
      if (p.v < lifetimeTrough.v) lifetimeTrough = p;
    });

    const primePoints = trajectoryPoints.filter(p => p.age >= minAge && p.age <= maxAge);
    const pool = primePoints.length > 0 ? primePoints : trajectoryPoints;

    let peak = pool[0];
    let trough = pool[0];
    pool.forEach(p => {
      if (p.v > peak.v) peak = p;
      if (p.v < trough.v) trough = p;
    });

    return {
      peak,
      trough,
      lifetimePeak,
      lifetimeTrough,
      minAge,
      maxAge
    };
  }

  /**
   * Dual Synastry: 求解甲乙双人动力学参数与轨迹
   */
  static deriveDualSpiralTrajectories(chartA, luckCyclesA, currentAgeA, chartB, luckCyclesB, currentAgeB) {
    const ageA = (currentAgeA !== null && currentAgeA !== undefined) ? currentAgeA : 30;
    const ageB = (currentAgeB !== null && currentAgeB !== undefined) ? currentAgeB : 30;

    const derivedA = this.deriveParametersAndTrajectory(chartA, luckCyclesA || [], ageA);
    const derivedB = this.deriveParametersAndTrajectory(chartB, luckCyclesB || [], ageB);

    const extremaA = this.findKeyExtrema(derivedA.trajectoryPoints, 30, 70);
    const extremaB = this.findKeyExtrema(derivedB.trajectoryPoints, 30, 70);
    derivedA.extrema = extremaA;
    derivedB.extrema = extremaB;

    const ascA = derivedA.currentPt.v >= 0;
    const ascB = derivedB.currentPt.v >= 0;

    let synergyType = 'counterbalance';
    let synergyTitleZh = '一进一退 · 互为压舱石';
    let synergyTitleEn = 'Counterbalance Anchor · Dynamic Balance';
    let synergyDescZh = '';
    let synergyDescEn = '';

    if (ascA && ascB) {
      synergyType = 'dual_ascent';
      synergyTitleZh = '双星合耀 · 协同爆发';
      synergyTitleEn = 'Dual Apex Surge · Resonance Ascent';
      synergyDescZh = '两造当前均处于螺旋势能上升跃迁期，动能丰沛，攻守兼备，适宜同心合力大举开拓战略增量空间。';
      synergyDescEn = 'Both charts command prime positive momentum; optimal window for high-ambition joint ventures.';
    } else if (!ascA && !ascB) {
      synergyType = 'joint_grounding';
      synergyTitleZh = '同舟共济 · 蓄能守成';
      synergyTitleEn = 'Joint Consolidation · Defensive Grounding';
      synergyDescZh = '两造岁运均处于内修蓄能与筑底阶段，宜守正笃实，严控杠杆，深筑护城河，静候下一次螺旋升腾。';
      synergyDescEn = 'Both charts favor strategic patience and defensive consolidation; reinforce core assets and wellness.';
    } else {
      synergyType = 'counterbalance';
      synergyTitleZh = '一进一退 · 互为压舱石';
      synergyTitleEn = 'Counterbalance Anchor · Complementary Dynamics';
      if (ascA) {
        synergyDescZh = '甲造处于高势能跃迁开拓期，乙造处于内修筑底稳固期，前攻后守，互为避风港与压舱石。';
        synergyDescEn = 'Person A commands prime momentum to advance, while Person B provides domestic and operational ballast.';
      } else {
        synergyDescZh = '乙造处于高势能跃迁开拓期，甲造处于内修筑底稳固期，前攻后守，互为避风港与压舱石。';
        synergyDescEn = 'Person B commands prime momentum to advance, while Person A provides steadfast stability and resource protection.';
      }
    }

    return {
      derivedA,
      derivedB,
      extremaA,
      extremaB,
      synergyType,
      synergyTitleZh,
      synergyTitleEn,
      synergyDescZh,
      synergyDescEn
    };
  }

  /**
   * Dual Synastry: 绘制时空动力学相空间双人生命螺旋流形
   * @param {HTMLCanvasElement|string} canvasOrId 
   * @param {Object} dataA - output of deriveParametersAndTrajectory or { trajectoryPoints }
   * @param {Object} dataB - output of deriveParametersAndTrajectory or { trajectoryPoints }
   * @param {number} activeAgeA - Current age for Person A
   * @param {number} activeAgeB - Current age for Person B
   * @param {string} labelA - Label for Person A
   * @param {string} labelB - Label for Person B
   * @param {boolean} isDark - Dark theme flag
   * @param {string} lang - 'zh' or 'en'
   * @param {Object|null} hoverPos - Optional { x, y } hover position
   */
  static renderDualSpiralManifold(canvasOrId, dataA, dataB, activeAgeA, activeAgeB, labelA, labelB, isDark = true, lang = 'zh', hoverPos = null) {
    if (!dataA || !dataB) return;
    const canvas = (typeof canvasOrId === 'string' && typeof document !== 'undefined')
      ? document.getElementById(canvasOrId)
      : canvasOrId;
    if (!canvas || typeof canvas.getContext !== 'function') return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const isEn = (lang === 'en');
    const nameA = labelA || (isEn ? 'Person A' : '甲造');
    const nameB = labelB || (isEn ? 'Person B' : '乙造');

    const trajA = dataA.trajectoryPoints || [];
    const trajB = dataB.trajectoryPoints || [];
    if (!trajA.length || !trajB.length) return;

    // 1. High-DPI Retina Display Handling
    const dpr = (typeof window !== 'undefined' && window.devicePixelRatio) ? Math.max(1, window.devicePixelRatio) : 1;
    let cssWidth = canvas.clientWidth || (canvas.parentElement && canvas.parentElement.clientWidth) || 680;
    let cssHeight = canvas.clientHeight || 360;
    if (cssWidth < 320) cssWidth = 680;
    if (cssHeight < 240) cssHeight = 360;

    const targetW = Math.round(cssWidth * dpr);
    const targetH = Math.round(cssHeight * dpr);
    if (canvas.width !== targetW || canvas.height !== targetH) {
      canvas.width = targetW;
      canvas.height = targetH;
    }

    ctx.save();
    if (typeof ctx.scale === 'function') {
      ctx.scale(dpr, dpr);
    }
    ctx.clearRect(0, 0, cssWidth, cssHeight);

    // 2. Background Gradient
    const bgGrad = ctx.createLinearGradient(0, 0, cssWidth, cssHeight);
    if (isDark) {
      bgGrad.addColorStop(0, '#090d1a');
      bgGrad.addColorStop(0.5, '#0d1224');
      bgGrad.addColorStop(1, '#05070e');
    } else {
      bgGrad.addColorStop(0, '#ffffff');
      bgGrad.addColorStop(0.5, '#f8fafc');
      bgGrad.addColorStop(1, '#f1f5f9');
    }
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, cssWidth, cssHeight);

    // Stars in dark mode
    if (isDark) {
      ctx.save();
      const starSeeds = [
        [0.10, 0.16, 1.2, 0.4], [0.22, 0.26, 0.8, 0.2], [0.36, 0.14, 1.5, 0.5],
        [0.50, 0.20, 1.0, 0.3], [0.66, 0.16, 1.4, 0.45], [0.80, 0.24, 1.1, 0.35],
        [0.16, 0.74, 1.3, 0.4], [0.33, 0.84, 0.9, 0.25], [0.60, 0.80, 1.2, 0.35],
        [0.78, 0.86, 1.0, 0.3], [0.90, 0.66, 1.4, 0.4]
      ];
      starSeeds.forEach(([rx, ry, r, alpha]) => {
        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.arc(rx * cssWidth, ry * cssHeight, r, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.restore();
    }

    // 3. Layout geometry
    const plotLeft = 65;
    const plotRight = cssWidth - 45;
    const plotWidth = plotRight - plotLeft;
    const floorY = cssHeight - 26;
    const midY = cssHeight / 2;

    // Timeline scale & floor grid
    ctx.save();
    ctx.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.10)';
    ctx.lineWidth = 1;
    const gridAges = [1, 20, 40, 60, 80, 100];
    gridAges.forEach(age => {
      const u = (age - 1) / 99.0;
      const tx = plotLeft + u * plotWidth;

      ctx.beginPath();
      ctx.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.04)';
      ctx.moveTo(tx, floorY);
      ctx.lineTo(tx + (tx - cssWidth / 2) * 0.08, midY + 30);
      ctx.stroke();

      ctx.beginPath();
      ctx.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.22)' : 'rgba(0, 0, 0, 0.22)';
      ctx.moveTo(tx, floorY - 3);
      ctx.lineTo(tx, floorY + 4);
      ctx.stroke();

      ctx.fillStyle = isDark ? 'rgba(203, 213, 225, 0.85)' : '#475569';
      ctx.font = 'bold 9.5px monospace';
      ctx.textAlign = 'center';
      ctx.fillText(`${age}y`, tx, floorY + 16);
    });

    // Prime 30~70 Age Corridor Highlight (30~70岁 黄金主升与攻守核心带)
    const u30 = (30 - 1) / 99.0;
    const u70 = (70 - 1) / 99.0;
    const x30 = plotLeft + u30 * plotWidth;
    const x70 = plotLeft + u70 * plotWidth;

    ctx.save();
    const corridorGrad = ctx.createLinearGradient(x30, 0, x70, 0);
    if (isDark) {
      corridorGrad.addColorStop(0, 'rgba(245, 158, 11, 0.05)');
      corridorGrad.addColorStop(0.5, 'rgba(168, 85, 247, 0.06)');
      corridorGrad.addColorStop(1, 'rgba(245, 158, 11, 0.05)');
    } else {
      corridorGrad.addColorStop(0, 'rgba(245, 158, 11, 0.04)');
      corridorGrad.addColorStop(0.5, 'rgba(168, 85, 247, 0.05)');
      corridorGrad.addColorStop(1, 'rgba(245, 158, 11, 0.04)');
    }
    ctx.fillStyle = corridorGrad;
    ctx.fillRect(x30, 24, x70 - x30, floorY - 24);

    if (typeof ctx.setLineDash === 'function') ctx.setLineDash([3, 3]);
    ctx.strokeStyle = isDark ? 'rgba(245, 158, 11, 0.28)' : 'rgba(202, 138, 4, 0.35)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x30, 24);
    ctx.lineTo(x30, floorY);
    ctx.moveTo(x70, 24);
    ctx.lineTo(x70, floorY);
    ctx.stroke();
    if (typeof ctx.setLineDash === 'function') ctx.setLineDash([]);

    const corridorLabel = isEn ? '✨ [Age 30–70 Prime Dynamic Corridor]' : '✨ [30~70岁 黄金主升与攻守核心带]';
    ctx.font = 'bold 8.5px sans-serif';
    ctx.fillStyle = isDark ? 'rgba(251, 191, 36, 0.75)' : '#854d0e';
    ctx.textAlign = 'center';
    ctx.fillText(corridorLabel, (x30 + x70) / 2, 20);
    ctx.restore();

    // Floor rail
    ctx.beginPath();
    ctx.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.18)' : 'rgba(0, 0, 0, 0.18)';
    ctx.moveTo(plotLeft - 10, floorY);
    ctx.lineTo(plotRight + 10, floorY);
    ctx.stroke();

    // Central Equilibrium v=0
    if (typeof ctx.setLineDash === 'function') ctx.setLineDash([4, 4]);
    ctx.strokeStyle = isDark ? 'rgba(245, 158, 11, 0.22)' : 'rgba(180, 83, 9, 0.25)';
    ctx.lineWidth = 1.1;
    ctx.beginPath();
    ctx.moveTo(plotLeft - 10, midY);
    ctx.lineTo(plotRight + 10, midY);
    ctx.stroke();
    if (typeof ctx.setLineDash === 'function') ctx.setLineDash([]);

    ctx.font = 'bold 9px monospace';
    ctx.fillStyle = isDark ? 'rgba(245, 158, 11, 0.5)' : '#854d0e';
    ctx.textAlign = 'left';
    ctx.fillText(isEn ? '[v = 0 Equilibrium]' : '[v = 0 平衡基准态]', plotLeft - 10, midY - 6);
    ctx.restore();

    // 4. Four HUD Quadrants
    const drawHudBadge = (text, x, y, align, colorTheme) => {
      ctx.save();
      ctx.font = 'bold 9.5px "Noto Serif SC", serif';
      const textW = ctx.measureText(text).width;
      const padX = 7;
      const padY = 3.5;
      const boxW = textW + padX * 2;
      const boxH = 18;
      const boxX = align === 'right' ? (x - boxW) : x;
      const boxY = y - 13;

      ctx.beginPath();
      if (typeof ctx.roundRect === 'function') {
        ctx.roundRect(boxX, boxY, boxW, boxH, 4);
      } else if (typeof ctx.rect === 'function') {
        ctx.rect(boxX, boxY, boxW, boxH);
      }
      ctx.fillStyle = isDark ? colorTheme.darkBg : colorTheme.lightBg;
      ctx.fill();
      ctx.strokeStyle = isDark ? colorTheme.darkBorder : colorTheme.lightBorder;
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.fillStyle = isDark ? colorTheme.darkText : colorTheme.lightText;
      ctx.textAlign = 'left';
      ctx.fillText(text, boxX + padX, boxY + 13);
      ctx.restore();
    };

    drawHudBadge(
      isEn ? '🚀 [Ascent · Expansion]' : '🚀 顺风破局区 (势能爆发 · 木火升腾)',
      cssWidth - 30, 26, 'right',
      { darkBg: 'rgba(16, 185, 129, 0.15)', darkBorder: 'rgba(16, 185, 129, 0.35)', darkText: '#34d399', lightBg: '#ecfdf5', lightBorder: '#a7f3d0', lightText: '#047857' }
    );
    drawHudBadge(
      isEn ? '⚡ [Friction · Resistance]' : '⚡ 承压克耗区 (防守自持 · 逆风求稳)',
      cssWidth - 30, floorY - 10, 'right',
      { darkBg: 'rgba(239, 68, 68, 0.15)', darkBorder: 'rgba(239, 68, 68, 0.35)', darkText: '#fca5a5', lightBg: '#fee2e2', lightBorder: '#fca5a5', lightText: '#b91c1c' }
    );
    drawHudBadge(
      isEn ? '🛡️ [Resource · Accumulation]' : '🛡️ 稳步蓄力区 (印比固本 · 资源沉淀)',
      plotLeft - 10, 26, 'left',
      { darkBg: 'rgba(245, 158, 11, 0.15)', darkBorder: 'rgba(245, 158, 11, 0.35)', darkText: '#fbbf24', lightBg: '#fef3c7', lightBorder: '#fde68a', lightText: '#854d0e' }
    );
    drawHudBadge(
      isEn ? '🧘 [Sanctuary · Grounding]' : '🧘 内修自持区 (战略收敛 · 筑底重塑)',
      plotLeft - 10, floorY - 10, 'left',
      { darkBg: 'rgba(99, 102, 241, 0.15)', darkBorder: 'rgba(99, 102, 241, 0.35)', darkText: '#a5b4fc', lightBg: '#eef2ff', lightBorder: '#c7d2fe', lightText: '#4338ca' }
    );

    // 5. Amplitude normalization
    const allV = [...trajA.map(p => Math.abs(p.v || 0)), ...trajB.map(p => Math.abs(p.v || 0))];
    const maxV = Math.max(...allV, 0.35);
    const vScale = Math.min(75 / maxV, 100);

    // Coordinate projections for A & B
    const toScreenA = (pt) => {
      const u = (pt.age - 1) / 99.0;
      const xBase = plotLeft + u * plotWidth;
      const phi = ((pt.age - 1) * Math.PI * 2) / 6.5 + (pt.x || 0) * 1.4;
      const coilR = 12.0;
      const dx = Math.cos(phi) * 7.5;
      const dy = Math.sin(phi) * coilR;
      const sx = xBase + dx;
      const sy = Math.max(38, Math.min(cssHeight - 38, midY - (pt.v * vScale) + dy));
      const isFront = Math.cos(phi) >= -0.15;
      return { sx, sy, age: pt.age, x: pt.x, v: pt.v, isFront, phi };
    };

    const toScreenB = (pt) => {
      const u = (pt.age - 1) / 99.0;
      const xBase = plotLeft + u * plotWidth;
      const phi = ((pt.age - 1) * Math.PI * 2) / 6.5 + (pt.x || 0) * 1.4 + Math.PI;
      const coilR = 11.0;
      const dx = Math.cos(phi) * 7.0;
      const dy = Math.sin(phi) * coilR;
      const sx = xBase + dx;
      const sy = Math.max(38, Math.min(cssHeight - 38, midY - (pt.v * vScale) + dy));
      const isFront = Math.cos(phi) >= -0.15;
      return { sx, sy, age: pt.age, x: pt.x, v: pt.v, isFront, phi };
    };

    const screenPointsA = trajA.map(toScreenA);
    const screenPointsB = trajB.map(toScreenB);

    // 6. Draw Helixes
    const drawSpiralHelicalLayer = (pts, isPersonA) => {
      // Glow ribbon
      ctx.save();
      for (let i = 0; i < pts.length - 1; i++) {
        const p1 = pts[i];
        const p2 = pts[i + 1];
        ctx.beginPath();
        ctx.strokeStyle = isPersonA
          ? 'rgba(245, 158, 11, 0.22)'
          : 'rgba(168, 85, 247, 0.22)';
        ctx.lineWidth = 5.5;
        ctx.lineCap = 'round';
        ctx.moveTo(p1.sx, p1.sy);
        ctx.lineTo(p2.sx, p2.sy);
        ctx.stroke();
      }
      ctx.restore();

      // Back loops
      ctx.save();
      for (let i = 0; i < pts.length - 1; i++) {
        const p1 = pts[i];
        const p2 = pts[i + 1];
        if (!p1.isFront && !p2.isFront) {
          ctx.beginPath();
          ctx.strokeStyle = isPersonA
            ? (isDark ? 'rgba(202, 138, 4, 0.35)' : 'rgba(180, 83, 9, 0.35)')
            : (isDark ? 'rgba(147, 51, 234, 0.35)' : 'rgba(126, 34, 206, 0.35)');
          ctx.lineWidth = 1.6;
          ctx.lineCap = 'round';
          ctx.moveTo(p1.sx, p1.sy);
          ctx.lineTo(p2.sx, p2.sy);
          ctx.stroke();
        }
      }
      ctx.restore();

      // Front loops
      ctx.save();
      for (let i = 0; i < pts.length - 1; i++) {
        const p1 = pts[i];
        const p2 = pts[i + 1];
        const age = p1.age;
        let strokeColor = isPersonA
          ? (age >= 26 && age <= 50 ? '#f59e0b' : (age > 75 ? '#ca8a04' : '#10b981'))
          : (age >= 26 && age <= 50 ? '#a855f7' : (age > 75 ? '#06b6d4' : '#8b5cf6'));

        ctx.beginPath();
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = p1.isFront ? 3.0 : 1.8;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.moveTo(p1.sx, p1.sy);
        ctx.lineTo(p2.sx, p2.sy);
        ctx.stroke();
      }
      ctx.restore();
    };

    drawSpiralHelicalLayer(screenPointsB, false);
    drawSpiralHelicalLayer(screenPointsA, true);

    // 7. Relative High & Low Points (Extrema Badges) for Person A & Person B (30~70 Stage Focus)
    const extremaA = PhasePortraitEngine.findKeyExtrema(trajA, 30, 70);
    const extremaB = PhasePortraitEngine.findKeyExtrema(trajB, 30, 70);

    const sPeakA = screenPointsA.find(p => p.age === extremaA.peak.age) || toScreenA(extremaA.peak);
    const sTroughA = screenPointsA.find(p => p.age === extremaA.trough.age) || toScreenA(extremaA.trough);
    const sPeakB = screenPointsB.find(p => p.age === extremaB.peak.age) || toScreenB(extremaB.peak);
    const sTroughB = screenPointsB.find(p => p.age === extremaB.trough.age) || toScreenB(extremaB.trough);

    // Stagger heights if X coordinates are close to avoid visual overlap
    let yOffPeakA = -22;
    let yOffPeakB = -22;
    if (sPeakA && sPeakB && Math.abs(sPeakA.sx - sPeakB.sx) < 65) {
      yOffPeakA = -36;
      yOffPeakB = -18;
    }
    let yOffTroughA = 15;
    let yOffTroughB = 15;
    if (sTroughA && sTroughB && Math.abs(sTroughA.sx - sTroughB.sx) < 65) {
      yOffTroughA = 12;
      yOffTroughB = 30;
    }

    const drawExtremaPin = (pt, isPeak, isPersonA, yOffset) => {
      if (!pt) return;
      ctx.save();
      const isAmber = isPersonA;
      const mainCol = isAmber ? '#fbbf24' : '#c084fc';
      const borderCol = isAmber ? '#f59e0b' : '#a855f7';
      const textColDark = isAmber ? '#fbbf24' : '#e9d5ff';
      const textColLight = isAmber ? '#854d0e' : '#6b21a8';
      const lineCol = isAmber
        ? (isDark ? 'rgba(245, 158, 11, 0.45)' : 'rgba(202, 138, 4, 0.45)')
        : (isDark ? 'rgba(168, 85, 247, 0.45)' : 'rgba(147, 51, 234, 0.45)');

      // Dropline to floor
      ctx.beginPath();
      ctx.strokeStyle = lineCol;
      ctx.lineWidth = 1.1;
      if (typeof ctx.setLineDash === 'function') ctx.setLineDash([2.5, 2.5]);
      ctx.moveTo(pt.sx, pt.sy);
      ctx.lineTo(pt.sx, floorY);
      ctx.stroke();
      if (typeof ctx.setLineDash === 'function') ctx.setLineDash([]);

      // Star / Ring marker on trajectory
      ctx.beginPath();
      ctx.arc(pt.sx, pt.sy, isPeak ? 5 : 4, 0, Math.PI * 2);
      ctx.fillStyle = mainCol;
      ctx.fill();
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 1.6;
      ctx.stroke();

      // Floating Tag
      const icon = isPeak ? '👑' : '⚓';
      const personName = isPersonA ? nameA : nameB;
      const typeStr = isPeak ? (isEn ? 'Peak' : '高点') : (isEn ? 'Trough' : '低点');
      const sign = pt.v >= 0 ? '+' : '';
      const tagText = isEn
        ? `${icon} ${personName} ${typeStr} ${pt.age}y (${sign}${pt.v})`
        : `${icon} ${personName}${typeStr} ${pt.age}岁 (${sign}${pt.v})`;

      ctx.font = 'bold 8.5px sans-serif';
      const tw = ctx.measureText(tagText).width;
      const bW = tw + 10;
      const bH = 17;
      let bX = pt.sx - bW / 2;
      let bY = pt.sy + yOffset;

      if (bX < 10) bX = 10;
      if (bX + bW > cssWidth - 10) bX = cssWidth - bW - 10;
      if (bY < 20) bY = 20;
      if (bY + bH > floorY) bY = floorY - bH - 2;

      ctx.beginPath();
      if (typeof ctx.roundRect === 'function') {
        ctx.roundRect(bX, bY, bW, bH, 4);
      } else if (typeof ctx.rect === 'function') {
        ctx.rect(bX, bY, bW, bH);
      }
      ctx.fillStyle = isDark ? 'rgba(15, 23, 42, 0.94)' : 'rgba(255, 255, 255, 0.96)';
      ctx.fill();
      ctx.strokeStyle = borderCol;
      ctx.lineWidth = 1.1;
      ctx.stroke();

      ctx.fillStyle = isDark ? textColDark : textColLight;
      ctx.textAlign = 'left';
      ctx.fillText(tagText, bX + 5, bY + 11.5);
      ctx.restore();
    };

    // Draw extrema pins
    drawExtremaPin(sPeakA, true, true, yOffPeakA);
    drawExtremaPin(sTroughA, false, true, yOffTroughA);
    drawExtremaPin(sPeakB, true, false, yOffPeakB);
    drawExtremaPin(sTroughB, false, false, yOffTroughB);

    // 8. Dynamic Moving Beacons for Both Person A and Person B
    const ptA = screenPointsA.find(p => p.age === activeAgeA) || screenPointsA[Math.min(activeAgeA - 1, screenPointsA.length - 1)] || screenPointsA[0];
    const ptB = screenPointsB.find(p => p.age === activeAgeB) || screenPointsB[Math.min(activeAgeB - 1, screenPointsB.length - 1)] || screenPointsB[0];

    // Connecting Resonance Vector Chord between A and B
    if (ptA && ptB) {
      ctx.save();
      ctx.beginPath();
      if (typeof ctx.setLineDash === 'function') ctx.setLineDash([3, 3]);
      ctx.strokeStyle = isDark ? 'rgba(56, 189, 248, 0.55)' : 'rgba(2, 132, 199, 0.6)';
      ctx.lineWidth = 1.6;
      ctx.moveTo(ptA.sx, ptA.sy);
      ctx.lineTo(ptB.sx, ptB.sy);
      ctx.stroke();
      if (typeof ctx.setLineDash === 'function') ctx.setLineDash([]);

      // Midpoint Dynamic Synergy Chip
      const midX = (ptA.sx + ptB.sx) / 2;
      const midYCoord = (ptA.sy + ptB.sy) / 2;
      const ascA = ptA.v >= 0;
      const ascB = ptB.v >= 0;
      let tagText = '';
      if (ascA && ascB) tagText = isEn ? '🌟 Dual Apex Surge' : '🌟 双星跃迁';
      else if (!ascA && !ascB) tagText = isEn ? '🧘 Joint Grounding' : '🧘 同舟筑底';
      else tagText = isEn ? '🛡️ Counterbalance' : '🛡️ 互补托底';

      ctx.font = 'bold 9px sans-serif';
      const tagW = ctx.measureText(tagText).width + 12;
      ctx.beginPath();
      if (typeof ctx.roundRect === 'function') {
        ctx.roundRect(midX - tagW / 2, midYCoord - 9, tagW, 18, 9);
      } else if (typeof ctx.rect === 'function') {
        ctx.rect(midX - tagW / 2, midYCoord - 9, tagW, 18);
      }
      ctx.fillStyle = isDark ? 'rgba(15, 23, 42, 0.9)' : 'rgba(255, 255, 255, 0.95)';
      ctx.fill();
      ctx.strokeStyle = isDark ? '#38bdf8' : '#0284c7';
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.fillStyle = isDark ? '#7dd3fc' : '#0369a1';
      ctx.textAlign = 'center';
      ctx.fillText(tagText, midX, midYCoord + 3.5);
      ctx.restore();
    }

    // Beacon A (甲造)
    if (ptA) {
      ctx.save();
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(245, 158, 11, 0.45)';
      ctx.lineWidth = 1.5;
      ctx.arc(ptA.sx, ptA.sy, 13, 0, Math.PI * 2);
      ctx.stroke();

      ctx.beginPath();
      ctx.strokeStyle = 'rgba(245, 158, 11, 0.85)';
      ctx.lineWidth = 2.2;
      ctx.arc(ptA.sx, ptA.sy, 8, 0, Math.PI * 2);
      ctx.stroke();

      ctx.fillStyle = '#f59e0b';
      ctx.beginPath();
      ctx.arc(ptA.sx, ptA.sy, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      const isAscA = ptA.v >= 0;
      const textA = isEn
        ? `👤 ${nameA} ${ptA.age}y · ${isAscA ? 'Ascent 🔺' : 'Grounding 🔻'} (x=${ptA.x}, v=${ptA.v})`
        : `👤 ${nameA} ${ptA.age}岁 · ${isAscA ? '跃迁期 🔺' : '蓄能期 🔻'} (x=${ptA.x}, v=${ptA.v})`;

      ctx.font = 'bold 10px sans-serif';
      const twA = ctx.measureText(textA).width;
      const bW = twA + 16;
      const bH = 22;
      let bX = ptA.sx - bW / 2;
      let bY = ptA.sy - 34;
      if (bX < 15) bX = 15;
      if (bX + bW > cssWidth - 15) bX = cssWidth - bW - 15;
      if (bY < 18) bY = ptA.sy + 16;

      ctx.fillStyle = isDark ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255, 255, 255, 0.98)';
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      if (typeof ctx.roundRect === 'function') ctx.roundRect(bX, bY, bW, bH, 6);
      else if (typeof ctx.rect === 'function') ctx.rect(bX, bY, bW, bH);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = isDark ? '#fbbf24' : '#854d0e';
      ctx.textAlign = 'left';
      ctx.fillText(textA, bX + 8, bY + 15);
      ctx.restore();
    }

    // Beacon B (乙造)
    if (ptB) {
      ctx.save();
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(168, 85, 247, 0.45)';
      ctx.lineWidth = 1.5;
      ctx.arc(ptB.sx, ptB.sy, 13, 0, Math.PI * 2);
      ctx.stroke();

      ctx.beginPath();
      ctx.strokeStyle = 'rgba(168, 85, 247, 0.85)';
      ctx.lineWidth = 2.2;
      ctx.arc(ptB.sx, ptB.sy, 8, 0, Math.PI * 2);
      ctx.stroke();

      ctx.fillStyle = '#a855f7';
      ctx.beginPath();
      ctx.arc(ptB.sx, ptB.sy, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      const isAscB = ptB.v >= 0;
      const textB = isEn
        ? `👥 ${nameB} ${ptB.age}y · ${isAscB ? 'Ascent 🔺' : 'Grounding 🔻'} (x=${ptB.x}, v=${ptB.v})`
        : `👥 ${nameB} ${ptB.age}岁 · ${isAscB ? '跃迁期 🔺' : '蓄能期 🔻'} (x=${ptB.x}, v=${ptB.v})`;

      ctx.font = 'bold 10px sans-serif';
      const twB = ctx.measureText(textB).width;
      const bW = twB + 16;
      const bH = 22;
      let bX = ptB.sx - bW / 2;
      let bY = ptB.sy + 14;
      if (bX < 15) bX = 15;
      if (bX + bW > cssWidth - 15) bX = cssWidth - bW - 15;
      if (bY + bH > floorY) bY = ptB.sy - 34;

      ctx.fillStyle = isDark ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255, 255, 255, 0.98)';
      ctx.strokeStyle = '#a855f7';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      if (typeof ctx.roundRect === 'function') ctx.roundRect(bX, bY, bW, bH, 6);
      else if (typeof ctx.rect === 'function') ctx.rect(bX, bY, bW, bH);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = isDark ? '#c084fc' : '#6b21a8';
      ctx.textAlign = 'left';
      ctx.fillText(textB, bX + 8, bY + 15);
      ctx.restore();
    }

    // 8. Interactive Hover Laser Probe (optional)
    if (hoverPos) {
      let nearestA = screenPointsA[0];
      let nearestB = screenPointsB[0];
      let minDist = 999999;
      screenPointsA.forEach(p => {
        const dist = Math.abs(p.sx - hoverPos.x);
        if (dist < minDist) {
          minDist = dist;
          nearestA = p;
        }
      });
      nearestB = screenPointsB.find(p => p.age === nearestA.age) || screenPointsB[0];

      if (nearestA && minDist < 60) {
        ctx.save();
        ctx.beginPath();
        ctx.strokeStyle = isDark ? 'rgba(56, 189, 248, 0.7)' : 'rgba(2, 132, 199, 0.7)';
        ctx.lineWidth = 1.5;
        if (typeof ctx.setLineDash === 'function') ctx.setLineDash([3, 3]);
        ctx.moveTo(nearestA.sx, 24);
        ctx.lineTo(nearestA.sx, floorY);
        ctx.stroke();
        if (typeof ctx.setLineDash === 'function') ctx.setLineDash([]);

        const hudW = isEn ? 220 : 190;
        const hudH = 80;
        let hudX = nearestA.sx + 16;
        let hudY = Math.min(nearestA.sy, nearestB.sy) - 20;
        if (hudX + hudW > cssWidth - 15) hudX = nearestA.sx - hudW - 16;
        if (hudY < 24) hudY = 24;
        if (hudY + hudH > cssHeight - 24) hudY = cssHeight - hudH - 24;

        ctx.beginPath();
        if (typeof ctx.roundRect === 'function') ctx.roundRect(hudX, hudY, hudW, hudH, 8);
        else if (typeof ctx.rect === 'function') ctx.rect(hudX, hudY, hudW, hudH);
        ctx.fillStyle = isDark ? 'rgba(11, 15, 25, 0.94)' : 'rgba(255, 255, 255, 0.98)';
        ctx.fill();
        ctx.strokeStyle = isDark ? '#38bdf8' : '#0284c7';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.textAlign = 'left';
        ctx.font = 'bold 11px sans-serif';
        ctx.fillStyle = isDark ? '#f8fafc' : '#0f172a';
        ctx.fillText(isEn ? `Age ${nearestA.age} Dual Scan` : `🧭 【${nearestA.age}岁 · 双人时空动力探针】`, hudX + 10, hudY + 18);

        ctx.font = '10px font-mono';
        ctx.fillStyle = isDark ? '#fbbf24' : '#854d0e';
        ctx.fillText(`${nameA}: v=${nearestA.v >= 0 ? '+' : ''}${nearestA.v}, x=${nearestA.x}`, hudX + 10, hudY + 36);

        ctx.fillStyle = isDark ? '#c084fc' : '#6b21a8';
        ctx.fillText(`${nameB}: v=${nearestB.v >= 0 ? '+' : ''}${nearestB.v}, x=${nearestB.x}`, hudX + 10, hudY + 52);

        ctx.font = '9px sans-serif';
        ctx.fillStyle = isDark ? '#38bdf8' : '#0284c7';
        ctx.fillText(isEn ? '💡 Synced with Life-Chrono Navigator' : '💡 与上方岁运潮汐推演器实时联动', hudX + 10, hudY + 68);
        ctx.restore();
      }
    }

    ctx.restore();
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PhasePortraitEngine };
}
if (typeof window !== 'undefined') {
  window.PhasePortraitEngine = PhasePortraitEngine;
}
