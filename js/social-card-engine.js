/**
 * 社交名片 · 竖屏高颜值社交战报生成引擎 (Social Identity Card Engine)
 * Renders high-fidelity vertical mobile aesthetic cards (Canvas 2D) & generates social share text.
 * 100% Offline-First, deterministic, and fully bilingual (zh/en).
 * Elevated Centerpiece: Classical Historical Figure Portrait, Soul Resonance & Karmic Legacy.
 */

class SocialCardEngine {
  static _stemToEn(dm) {
    const map = {
      '甲': 'Yang Wood (Jia)', '乙': 'Yin Wood (Yi)',
      '丙': 'Yang Fire (Bing)', '丁': 'Yin Fire (Ding)',
      '戊': 'Yang Earth (Wu)', '己': 'Yin Earth (Ji)',
      '庚': 'Yang Metal (Geng)', '辛': 'Yin Metal (Xin)',
      '壬': 'Yang Water (Ren)', '癸': 'Yin Water (Gui)'
    };
    return map[dm] || 'Day Master';
  }

  static _ganzhiToEn(gz) {
    if (!gz || typeof gz !== 'string') return 'Jia-Zi';
    const stems = { '甲': 'Jia', '乙': 'Yi', '丙': 'Bing', '丁': 'Ding', '戊': 'Wu', '己': 'Ji', '庚': 'Geng', '辛': 'Xin', '壬': 'Ren', '癸': 'Gui' };
    const branches = { '子': 'Zi', '丑': 'Chou', '寅': 'Yin', '卯': 'Mao', '辰': 'Chen', '巳': 'Si', '午': 'Wu', '未': 'Wei', '申': 'Shen', '酉': 'You', '戌': 'Xu', '亥': 'Hai' };
    const s = gz[0], b = gz[1];
    if (stems[s] && branches[b]) return `${stems[s]}-${branches[b]}`;
    return gz.replace(/[\u4e00-\u9fa5]/g, '') || 'Transit';
  }

  static _tierToEn(tier) {
    if (!tier || typeof tier !== 'string') return 'Moderately Strong';
    if (tier.includes('较旺')) return 'Moderately Strong';
    if (tier.includes('极旺')) return 'Extremely Strong';
    if (tier.includes('较弱')) return 'Moderately Weak';
    if (tier.includes('极弱')) return 'Extremely Weak';
    return 'Balanced';
  }

  /**
   * Safe multi-line canvas text wrapping with alignment & defensive fallback for headless tests
   */
  static drawWrappedText(ctx, text, x, y, maxWidth, lineHeight, maxLines = 2, align = 'center') {
    if (!text) return y;
    ctx.textAlign = align;
    const str = String(text).trim();
    if (!str) return y;

    const hasCjk = /[\u4e00-\u9fa5]/.test(str);
    let lines = [];
    let curLine = '';

    const fsMatch = (ctx.font || '').match(/(\d+(?:\.\d+)?)px/);
    const fontSize = fsMatch ? parseFloat(fsMatch[1]) : 13;

    const measure = (t) => {
      if (ctx.measureText && typeof ctx.measureText === 'function') {
        try {
          return ctx.measureText(t).width;
        } catch (e) {}
      }
      let w = 0;
      for (let c = 0; c < t.length; c++) {
        w += /[\u4e00-\u9fa5]/.test(t[c]) ? fontSize : (fontSize * 0.58);
      }
      return w;
    };

    if (hasCjk) {
      for (let i = 0; i < str.length; i++) {
        const testLine = curLine + str[i];
        if (measure(testLine) > maxWidth && curLine.length > 0) {
          lines.push(curLine);
          curLine = str[i];
        } else {
          curLine = testLine;
        }
      }
      if (curLine) lines.push(curLine);
    } else {
      const words = str.split(' ');
      for (let i = 0; i < words.length; i++) {
        const testLine = curLine ? `${curLine} ${words[i]}` : words[i];
        if (measure(testLine) > maxWidth && curLine.length > 0) {
          lines.push(curLine);
          curLine = words[i];
        } else {
          curLine = testLine;
        }
      }
      if (curLine) lines.push(curLine);
    }

    if (maxLines && lines.length > maxLines) {
      lines = lines.slice(0, maxLines);
      let lastLine = lines[lines.length - 1];
      while (measure(lastLine + '...') > maxWidth && lastLine.length > 1) {
        lastLine = lastLine.slice(0, -1);
      }
      lines[lines.length - 1] = lastLine + '...';
    }

    let curY = y;
    for (let i = 0; i < lines.length; i++) {
      ctx.fillText(lines[i], x, curY);
      curY += lineHeight;
    }
    return curY;
  }

  /**
   * Cleanly format dynasty strings to prevent multi-dynasty overflow while preserving historical accuracy
   */
  static _cleanDynasty(dynasty, isEn) {
    if (!dynasty) return isEn ? 'Sage Era' : '先贤纪元';
    let s = String(dynasty).replace(/[【】]/g, '').trim();
    if (isEn) {
      if (s.includes('/')) {
        const parts = s.split('/').map(p => p.trim()).filter(Boolean);
        s = parts[parts.length - 1] || parts[0];
      }
      return s;
    } else {
      if (s.includes('/')) {
        const parts = s.split('/').map(p => p.trim()).filter(Boolean);
        if (parts.length > 2) {
          s = `${parts[0]}·${parts[parts.length - 1]}`;
        } else {
          s = parts.join('·');
        }
      }
      return s;
    }
  }

  /**
   * Extract key card data from bazi and auxiliary engines
   */
  static extractCardData(bazi, luck, lang = 'zh') {
    const isEn = (lang === 'en');
    const safeBazi = bazi || { dayMaster: '甲', vigorScore: 50, vigorTier: '较旺格' };

    const rawDm = safeBazi.dayMaster || '甲';
    const dm = isEn ? this._stemToEn(rawDm) : rawDm;
    const score = safeBazi.vigorScore || 50;
    const tier = isEn ? this._tierToEn(safeBazi.vigorTier) : (safeBazi.vigorTier || '较旺格');

    // Pillars GanZhi
    const rawY = safeBazi.pillars?.year ? `${safeBazi.pillars.year.stem}${safeBazi.pillars.year.branch}` : '甲子';
    const rawM = safeBazi.pillars?.month ? `${safeBazi.pillars.month.stem}${safeBazi.pillars.month.branch}` : '丙寅';
    const rawD = safeBazi.pillars?.day ? `${safeBazi.pillars.day.stem}${safeBazi.pillars.day.branch}` : '甲戌';
    const rawH = safeBazi.pillars?.hour ? `${safeBazi.pillars.hour.stem}${safeBazi.pillars.hour.branch}` : '乙亥';

    const yStr = isEn ? this._ganzhiToEn(rawY) : rawY;
    const mStr = isEn ? this._ganzhiToEn(rawM) : rawM;
    const dStr = isEn ? this._ganzhiToEn(rawD) : rawD;
    const hStr = isEn ? this._ganzhiToEn(rawH) : rawH;

    // Archetype Title & Niches
    let archetypeTitleZh = '技术人员 · 首席天命主场';
    let archetypeTitleEn = 'Specialist & Engineering · Prime Calling';
    let archetypeTagZh = '写代码 · 深度研发 · 算法架构 · 数据量化分析';
    let archetypeTagEn = 'Coding · Deep Architecture · Quantitative Analytics';

    let niches = [
      { key: 'specialist', icon: '💻', name: isEn ? 'Specialist (Tech)' : '技术研发', score: 96 },
      { key: 'civil', icon: '📜', name: isEn ? 'Civil & Policy' : '文职治理', score: 82 },
      { key: 'executive', icon: '👑', name: isEn ? 'Executive Lead' : '高管统帅', score: 68 },
      { key: 'martial', icon: '⚔️', name: isEn ? 'Frontline Ops' : '一线武职', score: 45 }
    ];

    if (typeof CareerEngine !== 'undefined' && typeof CareerEngine.computeWorkplaceArchetypes === 'function') {
      try {
        const archs = CareerEngine.computeWorkplaceArchetypes(safeBazi, lang);
        if (archs && archs.length >= 4) {
          const rawZh0 = archs[0].nameZh || '技术人员';
          const cleanZh0 = rawZh0.split('(')[0].trim() || '技术人员';
          const rawEn0 = archs[0].nameEn || 'Specialist & Engineering';
          const cleanEn0 = rawEn0.split('(')[0].trim() || 'Specialist & Engineering';

          archetypeTitleZh = `${cleanZh0} · 首席天命主场`;
          archetypeTitleEn = `${cleanEn0} · Prime Calling`;

          const mZh = rawZh0.match(/\((.*?)\)/);
          if (mZh && mZh[1]) archetypeTagZh = mZh[1];
          const mEn = rawEn0.match(/\((.*?)\)/);
          if (mEn && mEn[1]) archetypeTagEn = mEn[1];

          niches = archs.slice(0, 4).map(a => {
            const shortZh = (a.nameZh || '').split('(')[0].trim() || '生态位';
            const shortEn = (a.nameEn || '').split('(')[0].trim() || 'Niche';
            const icon = a.key === 'specialist' ? '💻' : a.key === 'civil' ? '📜' : a.key === 'executive' ? '👑' : '⚔️';

            let finalScore = 75;
            if (typeof a.fitScore === 'number') {
              finalScore = Math.min(100, Math.max(10, Math.round(a.fitScore)));
            } else if (typeof a.score === 'number') {
              finalScore = Math.min(100, Math.max(10, Math.round(a.score)));
            } else if (typeof a.rawScore === 'number') {
              finalScore = Math.min(100, Math.max(10, Math.round((a.rawScore / 200) * 100)));
            }

            return {
              key: a.key,
              icon: icon,
              name: isEn ? shortEn : shortZh,
              score: finalScore
            };
          });
        }
      } catch (e) {}
    }

    // Historical Soul Mirror & Elevated Persona Centerpiece
    let figureId = 'wang_yangming';
    let figureNameZh = '王阳明';
    let figureNameEn = 'Wang Yangming';
    let figureDynastyZh = '明代';
    let figureDynastyEn = 'Ming Dynasty';
    let figurePositionZh = '阳明心学开山宗师 · 兵部尚书';
    let figurePositionEn = 'Neo-Confucian Sage · Supreme Military Commander';
    let figureArchetype = 'executive';
    let figureArchetypeLabelZh = '👑 统帅领袖 · 心学圣贤';
    let figureArchetypeLabelEn = '👑 Executive & Sage Philosopher';
    let figureSim = '92.8%';
    let figureQuoteZh = '“破山中贼易，破心中贼难。事上磨炼，知行合一。”';
    let figureQuoteEn = '"Easier to defeat external foes than inner demons. Forge virtue through daily action."';
    let figureLegacyZh = '开创阳明心学，平定宁王之乱，立德立功立言三不朽。';
    let figureLegacyEn = 'Founded Philosophy of Mind, quelled rebellions, achieved Three Immortalities.';
    let figureAdviceZh = '心即理，事上磨炼；致良知以破心中贼，知行合一。';
    let figureAdviceEn = 'Act as virtue dictates; unify wisdom with relentless practical action.';

    if (typeof HistoricalEngine !== 'undefined' && typeof HistoricalEngine.calculateSimilarity === 'function') {
      try {
        const hMatch = HistoricalEngine.calculateSimilarity(safeBazi, luck);
        if (hMatch && hMatch.topMatch) {
          const fig = hMatch.topMatch;
          figureId = fig.id || 'wang_yangming';
          figureNameZh = fig.nameZh || '王阳明';
          figureNameEn = fig.nameEn || 'Wang Yangming';
          figureDynastyZh = this._cleanDynasty(fig.dynastyZh || '南梁', false);
          figureDynastyEn = this._cleanDynasty(fig.dynastyEn || 'Southern Liang', true);
          figurePositionZh = fig.positionZh || '先贤名臣';
          figurePositionEn = fig.positionEn || 'Historical Master';
          figureArchetype = fig.archetype || 'specialist';
          figureSim = (typeof fig.similarityScore === 'number' ? fig.similarityScore : 89.4) + '%';

          if (fig.historicalQuoteZh) {
            figureQuoteZh = `“${fig.historicalQuoteZh.replace(/^[“"']|[”"']$/g, '')}”`;
          }
          if (fig.historicalQuoteEn) {
            figureQuoteEn = `"${fig.historicalQuoteEn.replace(/^[“"']|[”"']$/g, '')}"`;
          }

          // Legacy (立身功业)
          if (fig.auxiliaryStrengthsZh && fig.auxiliaryStrengthsZh.length > 0) {
            const raw = fig.auxiliaryStrengthsZh[1] || fig.auxiliaryStrengthsZh[0];
            figureLegacyZh = raw.split('！')[0].split('；')[0].split('。')[0];
            if (figureLegacyZh.length > 38) figureLegacyZh = figureLegacyZh.slice(0, 36) + '...';
            else figureLegacyZh += '。';
          } else if (fig.strengthAdviceZh) {
            figureLegacyZh = fig.strengthAdviceZh.split('！')[0].split('；')[0].split('。')[0];
            if (figureLegacyZh.length > 38) figureLegacyZh = figureLegacyZh.slice(0, 36) + '...';
            else figureLegacyZh += '。';
          } else if (fig.deedsZh) {
            figureLegacyZh = fig.deedsZh.split('！')[0].split('；')[0].split('。')[0];
            if (figureLegacyZh.length > 38) figureLegacyZh = figureLegacyZh.slice(0, 36) + '...';
            else figureLegacyZh += '。';
          }

          if (fig.auxiliaryStrengthsEn && fig.auxiliaryStrengthsEn.length > 0) {
            const raw = fig.auxiliaryStrengthsEn[0];
            const s = raw.split('.')[0].trim();
            figureLegacyEn = (s.length > 92) ? s.slice(0, 89) + '...' : s + '.';
          } else if (fig.strengthAdviceEn) {
            const s = fig.strengthAdviceEn.split('.')[0].trim();
            figureLegacyEn = (s.length > 92) ? s.slice(0, 89) + '...' : s + '.';
          } else if (fig.deedsEn) {
            const s = fig.deedsEn.split('.')[0].trim();
            figureLegacyEn = (s.length > 92) ? s.slice(0, 89) + '...' : s + '.';
          }

          // Advice (天机诫勉)
          if (fig.auxiliaryWeaknessesZh && fig.auxiliaryWeaknessesZh.length > 0) {
            const raw = fig.auxiliaryWeaknessesZh[0];
            figureAdviceZh = raw.split('！')[0].split('；')[0].split('。')[0];
            if (figureAdviceZh.length > 38) figureAdviceZh = figureAdviceZh.slice(0, 36) + '...';
            else figureAdviceZh += '。';
          } else if (fig.weaknessAdviceZh) {
            figureAdviceZh = fig.weaknessAdviceZh.split('！')[0].split('；')[0].split('。')[0];
            if (figureAdviceZh.length > 38) figureAdviceZh = figureAdviceZh.slice(0, 36) + '...';
            else figureAdviceZh += '。';
          }

          if (fig.auxiliaryWeaknessesEn && fig.auxiliaryWeaknessesEn.length > 0) {
            const raw = fig.auxiliaryWeaknessesEn[0];
            const s = raw.split('.')[0].trim();
            figureAdviceEn = (s.length > 92) ? s.slice(0, 89) + '...' : s + '.';
          } else if (fig.weaknessAdviceEn) {
            const s = fig.weaknessAdviceEn.split('.')[0].trim();
            figureAdviceEn = (s.length > 92) ? s.slice(0, 89) + '...' : s + '.';
          }

          // Archetype Label
          if (figureArchetype === 'specialist') {
            figureArchetypeLabelZh = '🏛️ 经世文宗 · 深度专家';
            figureArchetypeLabelEn = '🏛️ Specialist & Canonical Master';
          } else if (figureArchetype === 'executive') {
            figureArchetypeLabelZh = '👑 统帅领袖 · 经纬乾坤';
            figureArchetypeLabelEn = '👑 Executive & Grand Sovereign';
          } else if (figureArchetype === 'civil') {
            figureArchetypeLabelZh = '📜 庙堂文治 · 纲纪经略';
            figureArchetypeLabelEn = '📜 Civil Governance & High Minister';
          } else if (figureArchetype === 'military') {
            figureArchetypeLabelZh = '⚔️ 铁血战将 · 临危破局';
            figureArchetypeLabelEn = '⚔️ Martial Vanguard & Field Commander';
          }
        }
      } catch (e) {}
    }

    // Annual Transit & Hexagram
    let annualYear = 2026;
    let annualGanzhi = isEn ? 'Bing-Wu' : '丙午';
    let hexNameZh = '乾为天';
    let hexNameEn = 'Qian (The Creative Heaven)';
    let hexDirectiveZh = '见龙在田，利见大人 · 沉淀口碑，以作品立世';
    let hexDirectiveEn = 'Dragon appearing in the field · Build undeniable craft and let works speak.';

    if (typeof IChingEngine !== 'undefined' && typeof IChingEngine.calculateFourPillarsHexagrams === 'function') {
      try {
        const hRes = IChingEngine.calculateFourPillarsHexagrams(safeBazi, annualYear, lang);
        if (hRes && hRes.liuNianHexagram) {
          hexNameZh = hRes.liuNianHexagram.nameZh || hRes.liuNianHexagram.name;
          hexNameEn = hRes.liuNianHexagram.nameEn || hRes.liuNianHexagram.name;
          if (hRes.liuNianHexagram.tianJi) {
            hexDirectiveZh = hRes.liuNianHexagram.tianJi.liuNianZh || hexDirectiveZh;
            hexDirectiveEn = hRes.liuNianHexagram.tianJi.liuNianEn || hexDirectiveEn;
          }
        }
      } catch (e) {}
    }

    return {
      isEn: isEn,
      dayMaster: dm,
      score: score,
      tier: tier,
      pillarsStr: `${yStr}  ${mStr}  ${dStr}  ${hStr}`,
      archetypeTitle: isEn ? archetypeTitleEn : archetypeTitleZh,
      archetypeTag: isEn ? archetypeTagEn : archetypeTagZh,
      niches: niches,
      // Historical Figure Centerpiece
      figureId: figureId,
      figureName: isEn ? figureNameEn : figureNameZh,
      figureDynasty: isEn ? figureDynastyEn : figureDynastyZh,
      figurePosition: isEn ? figurePositionEn : figurePositionZh,
      figureArchetype: figureArchetype,
      figureArchetypeLabel: isEn ? figureArchetypeLabelEn : figureArchetypeLabelZh,
      figureSim: figureSim,
      figureQuote: isEn ? figureQuoteEn : figureQuoteZh,
      figureLegacy: isEn ? figureLegacyEn : figureLegacyZh,
      figureAdvice: isEn ? figureAdviceEn : figureAdviceZh,
      // Annual Transit
      annualYear: annualYear,
      annualGanzhi: annualGanzhi,
      hexName: isEn ? hexNameEn : hexNameZh,
      hexDirective: isEn ? hexDirectiveEn : hexDirectiveZh
    };
  }

  /**
   * Procedural Classical Stylized Portrait Renderer
   * Renders traditional ink-wash / imperial medallion portraits on HTML5 Canvas 2D.
   * Completely offline, deterministic, zero CORS tainting, and safe across all environments.
   */
  static drawClassicalPortrait(ctx, data, cx, cy, r) {
    if (!ctx) return;

    // Safe Canvas 2D wrappers for headless test robustness
    const safeSave = () => { if (ctx.save) ctx.save(); };
    const safeRestore = () => { if (ctx.restore) ctx.restore(); };
    const safeBeginPath = () => { if (ctx.beginPath) ctx.beginPath(); };
    const safeClosePath = () => { if (ctx.closePath) ctx.closePath(); };
    const safeArc = (x, y, rad, sa, ea) => { if (ctx.arc) ctx.arc(x, y, rad, sa, ea); };
    const safeMoveTo = (x, y) => { if (ctx.moveTo) ctx.moveTo(x, y); };
    const safeLineTo = (x, y) => { if (ctx.lineTo) ctx.lineTo(x, y); };
    const safeQuad = (cpx, cpy, x, y) => { if (ctx.quadraticCurveTo) ctx.quadraticCurveTo(cpx, cpy, x, y); };
    const safeStroke = () => { if (ctx.stroke) ctx.stroke(); };
    const safeFill = () => { if (ctx.fill) ctx.fill(); };
    const safeClip = () => { if (ctx.clip) ctx.clip(); };

    const safeRadialGrad = (x0, y0, r0, x1, y1, r1) => {
      if (ctx.createRadialGradient) {
        try { return ctx.createRadialGradient(x0, y0, r0, x1, y1, r1); } catch (e) {}
      }
      return null;
    };
    const safeLinearGrad = (x0, y0, x1, y1) => {
      if (ctx.createLinearGradient) {
        try { return ctx.createLinearGradient(x0, y0, x1, y1); } catch (e) {}
      }
      return null;
    };

    const arch = data.figureArchetype || 'specialist';
    const figId = data.figureId || '';
    const isYoungPrince = (figId === 'xiao_tong');

    // 1. Outer antique double gold medallion frame
    ctx.strokeStyle = '#926a38';
    ctx.lineWidth = 2.5;
    safeBeginPath();
    safeArc(cx, cy, r, 0, Math.PI * 2);
    safeStroke();

    ctx.strokeStyle = '#d97706';
    ctx.lineWidth = 1.2;
    safeBeginPath();
    safeArc(cx, cy, r - 3.5, 0, Math.PI * 2);
    safeStroke();

    // 8 Classical cardinal / trigram ticks
    ctx.strokeStyle = '#b45309';
    ctx.lineWidth = 1.2;
    for (let i = 0; i < 8; i++) {
      const ang = (i * Math.PI) / 4;
      const x1 = cx + Math.cos(ang) * (r - 3);
      const y1 = cy + Math.sin(ang) * (r - 3);
      const x2 = cx + Math.cos(ang) * (r + 1.5);
      const y2 = cy + Math.sin(ang) * (r + 1.5);
      safeBeginPath();
      safeMoveTo(x1, y1);
      safeLineTo(x2, y2);
      safeStroke();
    }

    // 2. Clip inside circular medallion
    safeSave();
    safeBeginPath();
    safeArc(cx, cy, r - 4, 0, Math.PI * 2);
    safeClip();

    // 3. Background ink-wash gradient & ambient lighting
    let bg = safeLinearGrad(cx, cy - r, cx, cy + r);
    if (bg) {
      if (arch === 'executive') {
        bg.addColorStop(0, '#2e0b14');
        bg.addColorStop(0.5, '#1a1220');
        bg.addColorStop(1, '#0b0d16');
      } else if (arch === 'civil') {
        bg.addColorStop(0, '#091b35');
        bg.addColorStop(0.5, '#111a2c');
        bg.addColorStop(1, '#070a12');
      } else if (arch === 'military') {
        bg.addColorStop(0, '#2c120c');
        bg.addColorStop(0.5, '#1b1318');
        bg.addColorStop(1, '#0a090e');
      } else {
        // specialist
        bg.addColorStop(0, '#042a1f');
        bg.addColorStop(0.5, '#0c191a');
        bg.addColorStop(1, '#080d11');
      }
      ctx.fillStyle = bg;
    } else {
      ctx.fillStyle = '#141824';
    }
    safeBeginPath();
    safeArc(cx, cy, r - 4, 0, Math.PI * 2);
    safeFill();

    // Luminous celestial aura halo behind head
    let halo = safeRadialGrad(cx, cy - 8, 4, cx, cy - 8, r * 0.70);
    if (halo) {
      const haloColor = arch === 'executive' ? 'rgba(251, 191, 36, 0.40)'
        : arch === 'civil' ? 'rgba(96, 165, 250, 0.35)'
        : arch === 'military' ? 'rgba(239, 68, 68, 0.35)'
        : 'rgba(52, 211, 153, 0.38)';
      halo.addColorStop(0, haloColor);
      halo.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = halo;
      safeBeginPath();
      safeArc(cx, cy - 8, r * 0.70, 0, Math.PI * 2);
      safeFill();
    }

    // Ink-wash mountain mist at bottom of medallion
    ctx.fillStyle = 'rgba(15, 23, 42, 0.70)';
    safeBeginPath();
    safeMoveTo(cx - r, cy + r * 0.38);
    safeQuad(cx - r * 0.3, cy + r * 0.04, cx, cy + r * 0.28);
    safeQuad(cx + r * 0.4, cy + r * 0.08, cx + r, cy + r * 0.42);
    safeLineTo(cx + r, cy + r);
    safeLineTo(cx - r, cy + r);
    safeClosePath();
    safeFill();

    // 4. Base Anatomy: Neck (Skin tone drawn BEFORE collar so collar overlays naturally)
    ctx.fillStyle = '#fde68a';
    safeBeginPath();
    safeMoveTo(cx - r * 0.16, cy + r * 0.10);
    safeLineTo(cx - r * 0.18, cy + r * 0.34);
    safeLineTo(cx + r * 0.18, cy + r * 0.34);
    safeLineTo(cx + r * 0.16, cy + r * 0.10);
    safeClosePath();
    safeFill();

    // Subtle neck shadow
    ctx.fillStyle = 'rgba(180, 83, 9, 0.18)';
    safeBeginPath();
    safeMoveTo(cx - r * 0.14, cy + r * 0.12);
    safeQuad(cx, cy + r * 0.22, cx + r * 0.14, cy + r * 0.12);
    safeLineTo(cx + r * 0.16, cy + r * 0.24);
    safeQuad(cx, cy + r * 0.32, cx - r * 0.16, cy + r * 0.24);
    safeClosePath();
    safeFill();

    // 5. Robes & Ancient Classical Garments
    let robeColor = '#064e3b';
    let robeBorder = '#34d399';
    let collarColor = '#0f766e';
    let innerCollar = '#f8fafc';

    if (arch === 'executive') {
      robeColor = '#7f1d1d';
      robeBorder = '#fbbf24';
      collarColor = '#991b1b';
    } else if (arch === 'civil') {
      robeColor = '#1e3a8a';
      robeBorder = '#60a5fa';
      collarColor = '#1e40af';
    } else if (arch === 'military') {
      robeColor = '#334155';
      robeBorder = '#ea580c';
      collarColor = '#1e293b';
    }

    // Outer Shoulders
    ctx.fillStyle = robeColor;
    safeBeginPath();
    safeMoveTo(cx - r * 0.95, cy + r);
    safeQuad(cx - r * 0.72, cy + r * 0.28, cx - r * 0.32, cy + r * 0.24);
    safeLineTo(cx + r * 0.32, cy + r * 0.24);
    safeQuad(cx + r * 0.72, cy + r * 0.28, cx + r * 0.95, cy + r);
    safeClosePath();
    safeFill();

    // Collar Lapels (交领右衽)
    // Layer 1: White inner collar (中单)
    ctx.fillStyle = innerCollar;
    safeBeginPath();
    safeMoveTo(cx - r * 0.20, cy + r * 0.20);
    safeLineTo(cx, cy + r * 0.48);
    safeLineTo(cx + r * 0.20, cy + r * 0.20);
    safeClosePath();
    safeFill();

    // Layer 2: Main collar left over right (右衽)
    ctx.fillStyle = collarColor;
    ctx.strokeStyle = robeBorder;
    ctx.lineWidth = 1.3;

    safeBeginPath();
    safeMoveTo(cx - r * 0.28, cy + r * 0.20);
    safeLineTo(cx + r * 0.20, cy + r * 0.60);
    safeLineTo(cx + r * 0.10, cy + r * 0.68);
    safeLineTo(cx - r * 0.34, cy + r * 0.24);
    safeClosePath();
    safeFill();
    safeStroke();

    safeBeginPath();
    safeMoveTo(cx + r * 0.28, cy + r * 0.20);
    safeLineTo(cx - r * 0.14, cy + r * 0.56);
    safeLineTo(cx - r * 0.24, cy + r * 0.48);
    safeLineTo(cx + r * 0.20, cy + r * 0.20);
    safeClosePath();
    safeFill();
    safeStroke();

    // Chest Insignia / Roundel (Dragon / Cloud / Tiger / Crane medallion)
    if (arch === 'executive') {
      ctx.fillStyle = '#fbbf24';
      safeBeginPath();
      safeArc(cx, cy + r * 0.64, r * 0.14, 0, Math.PI * 2);
      safeFill();
      ctx.strokeStyle = '#b45309';
      ctx.lineWidth = 1.2;
      safeStroke();
    } else if (arch === 'military') {
      ctx.fillStyle = '#b45309';
      safeBeginPath();
      safeArc(cx, cy + r * 0.64, r * 0.14, 0, Math.PI * 2);
      safeFill();
      ctx.fillStyle = '#f59e0b';
      safeBeginPath();
      safeArc(cx, cy + r * 0.64, r * 0.07, 0, Math.PI * 2);
      safeFill();
    }

    // 6. Classical Face Contour & Features
    ctx.fillStyle = '#fef3c7';
    ctx.strokeStyle = '#b45309';
    ctx.lineWidth = 1;

    const faceW = r * 0.38;
    const faceTopY = cy - r * 0.32;
    const faceBotY = cy + r * 0.20;

    safeBeginPath();
    safeMoveTo(cx, faceTopY);
    safeQuad(cx + faceW, cy - r * 0.10, cx + faceW * 0.82, cy + r * 0.08);
    safeQuad(cx + faceW * 0.52, faceBotY, cx, faceBotY);
    safeQuad(cx - faceW * 0.52, faceBotY, cx - faceW * 0.82, cy + r * 0.08);
    safeQuad(cx - faceW, cy - r * 0.10, cx, faceTopY);
    safeClosePath();
    safeFill();
    safeStroke();

    // Ears
    ctx.fillStyle = '#fde68a';
    safeBeginPath();
    safeArc(cx - faceW * 0.84, cy - r * 0.04, r * 0.075, 0, Math.PI * 2);
    safeArc(cx + faceW * 0.84, cy - r * 0.04, r * 0.075, 0, Math.PI * 2);
    safeFill();

    // Eyebrows (Traditional Ink & Brushwork)
    ctx.strokeStyle = '#1c1917';
    ctx.fillStyle = '#1c1917';
    ctx.lineWidth = arch === 'military' ? 1.8 : 1.3;

    safeBeginPath();
    if (arch === 'military') {
      safeMoveTo(cx - faceW * 0.68, cy - r * 0.16);
      safeLineTo(cx - faceW * 0.14, cy - r * 0.10);
    } else {
      safeMoveTo(cx - faceW * 0.64, cy - r * 0.10);
      safeQuad(cx - faceW * 0.40, cy - r * 0.16, cx - faceW * 0.14, cy - r * 0.11);
    }
    safeStroke();

    safeBeginPath();
    if (arch === 'military') {
      safeMoveTo(cx + faceW * 0.14, cy - r * 0.10);
      safeLineTo(cx + faceW * 0.68, cy - r * 0.16);
    } else {
      safeMoveTo(cx + faceW * 0.14, cy - r * 0.11);
      safeQuad(cx + faceW * 0.40, cy - r * 0.16, cx + faceW * 0.64, cy - r * 0.10);
    }
    safeStroke();

    // Classical Phoenix Eyes (丹凤眼)
    ctx.fillStyle = '#1c1917';
    ctx.strokeStyle = '#1c1917';
    ctx.lineWidth = 1.3;

    // Left eye
    safeBeginPath();
    safeMoveTo(cx - faceW * 0.60, cy - r * 0.055);
    safeQuad(cx - faceW * 0.38, cy - r * 0.09, cx - faceW * 0.18, cy - r * 0.05);
    safeStroke();
    safeBeginPath();
    safeArc(cx - faceW * 0.36, cy - r * 0.05, r * 0.038, 0, Math.PI * 2);
    safeFill();

    // Right eye
    safeBeginPath();
    safeMoveTo(cx + faceW * 0.18, cy - r * 0.05);
    safeQuad(cx + faceW * 0.38, cy - r * 0.09, cx + faceW * 0.60, cy - r * 0.055);
    safeStroke();
    safeBeginPath();
    safeArc(cx + faceW * 0.36, cy - r * 0.05, r * 0.038, 0, Math.PI * 2);
    safeFill();

    // Nose bridge
    ctx.strokeStyle = '#92400e';
    ctx.lineWidth = 1;
    safeBeginPath();
    safeMoveTo(cx, cy - r * 0.06);
    safeLineTo(cx - r * 0.02, cy + r * 0.06);
    safeLineTo(cx + r * 0.02, cy + r * 0.06);
    safeStroke();

    // Mouth / Lips
    ctx.strokeStyle = '#991b1b';
    ctx.lineWidth = 1.3;
    safeBeginPath();
    safeMoveTo(cx - r * 0.08, cy + r * 0.12);
    safeQuad(cx, cy + r * 0.135, cx + r * 0.08, cy + r * 0.12);
    safeStroke();

    // Facial Hair / Classical Scholar Beard (三绺美髯)
    if (!isYoungPrince) {
      ctx.fillStyle = '#1c1917';
      ctx.strokeStyle = '#1c1917';
      ctx.lineWidth = 1.2;

      // Mustache
      safeBeginPath();
      safeMoveTo(cx - r * 0.10, cy + r * 0.11);
      safeQuad(cx - r * 0.04, cy + r * 0.09, cx, cy + r * 0.10);
      safeQuad(cx + r * 0.04, cy + r * 0.09, cx + r * 0.10, cy + r * 0.11);
      safeStroke();

      // Flowing Three-Part Beard (三绺美髯)
      safeBeginPath();
      safeMoveTo(cx - r * 0.12, cy + r * 0.18);
      safeQuad(cx - r * 0.08, cy + r * 0.40, cx, cy + r * 0.48);
      safeQuad(cx + r * 0.08, cy + r * 0.40, cx + r * 0.12, cy + r * 0.18);
      safeClosePath();
      safeFill();
    } else {
      // Young Xiao Tong (昭明太子): refined aristocratic youth
      ctx.strokeStyle = 'rgba(28, 25, 23, 0.45)';
      ctx.lineWidth = 0.8;
      safeBeginPath();
      safeMoveTo(cx - r * 0.06, cy + r * 0.10);
      safeQuad(cx, cy + r * 0.095, cx + r * 0.06, cy + r * 0.10);
      safeStroke();
    }

    // 7. Classical Headwear (Imperial Crown / Scholar Cap / War Helmet / Sage Topknot)
    if (arch === 'executive') {
      // Imperial Mortarboard Crown (冕旒)
      ctx.fillStyle = '#0f172a';
      safeBeginPath();
      safeMoveTo(cx - r * 0.28, cy - r * 0.24);
      safeLineTo(cx + r * 0.28, cy - r * 0.24);
      safeLineTo(cx + r * 0.22, cy - r * 0.44);
      safeLineTo(cx - r * 0.22, cy - r * 0.44);
      safeClosePath();
      safeFill();

      // Horizontal Board (延板)
      ctx.fillStyle = '#090d16';
      ctx.strokeStyle = '#fbbf24';
      ctx.lineWidth = 1.5;
      safeBeginPath();
      safeMoveTo(cx - r * 0.52, cy - r * 0.44);
      safeLineTo(cx + r * 0.52, cy - r * 0.44);
      safeLineTo(cx + r * 0.48, cy - r * 0.52);
      safeLineTo(cx - r * 0.48, cy - r * 0.52);
      safeClosePath();
      safeFill();
      safeStroke();

      // Dangling Pearl Strands (旒珠)
      ctx.fillStyle = '#fbbf24';
      const beadYs = [cy - r * 0.42, cy - r * 0.36, cy - r * 0.30, cy - r * 0.24];
      const beadXs = [cx - r * 0.36, cx - r * 0.24, cx - r * 0.12, cx + r * 0.12, cx + r * 0.24, cx + r * 0.36];
      beadXs.forEach(bx => {
        beadYs.forEach(by => {
          safeBeginPath();
          safeArc(bx, by, r * 0.022, 0, Math.PI * 2);
          safeFill();
        });
      });

      // Red Ribbon Cords (缨带)
      ctx.strokeStyle = '#ef4444';
      ctx.lineWidth = 1.2;
      safeBeginPath();
      safeMoveTo(cx - r * 0.24, cy - r * 0.32);
      safeQuad(cx - r * 0.36, cy, cx - r * 0.20, cy + r * 0.26);
      safeStroke();
      safeBeginPath();
      safeMoveTo(cx + r * 0.24, cy - r * 0.32);
      safeQuad(cx + r * 0.36, cy, cx + r * 0.20, cy + r * 0.26);
      safeStroke();

    } else if (arch === 'military') {
      // Battle Helmet (兜鍪)
      // Red Horsehair Plume (红缨)
      ctx.fillStyle = '#dc2626';
      safeBeginPath();
      safeMoveTo(cx, cy - r * 0.52);
      safeQuad(cx - r * 0.24, cy - r * 0.76, cx - r * 0.08, cy - r * 0.92);
      safeQuad(cx + r * 0.12, cy - r * 0.80, cx + r * 0.06, cy - r * 0.52);
      safeClosePath();
      safeFill();

      // Helmet Dome (盔体)
      ctx.fillStyle = '#334155';
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 1.5;
      safeBeginPath();
      safeMoveTo(cx - r * 0.34, cy - r * 0.20);
      safeQuad(cx - r * 0.36, cy - r * 0.52, cx, cy - r * 0.54);
      safeQuad(cx + r * 0.36, cy - r * 0.52, cx + r * 0.34, cy - r * 0.20);
      safeClosePath();
      safeFill();
      safeStroke();

      // Visor Brow Ridge & Spike
      ctx.fillStyle = '#f59e0b';
      safeBeginPath();
      safeMoveTo(cx - r * 0.08, cy - r * 0.54);
      safeLineTo(cx, cy - r * 0.65);
      safeLineTo(cx + r * 0.08, cy - r * 0.54);
      safeClosePath();
      safeFill();

      // Brow guard plate
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 2;
      safeBeginPath();
      safeMoveTo(cx - r * 0.34, cy - r * 0.20);
      safeQuad(cx, cy - r * 0.28, cx + r * 0.34, cy - r * 0.20);
      safeStroke();

    } else if (arch === 'civil') {
      // Official High Ridge Cap (梁冠 / 进贤冠)
      ctx.fillStyle = '#0f172a';
      ctx.strokeStyle = '#60a5fa';
      ctx.lineWidth = 1.2;

      safeBeginPath();
      safeMoveTo(cx - r * 0.28, cy - r * 0.22);
      safeQuad(cx - r * 0.32, cy - r * 0.56, cx - r * 0.10, cy - r * 0.62);
      safeLineTo(cx + r * 0.20, cy - r * 0.52);
      safeQuad(cx + r * 0.30, cy - r * 0.36, cx + r * 0.28, cy - r * 0.22);
      safeClosePath();
      safeFill();
      safeStroke();

      // Vertical ridges (梁)
      ctx.strokeStyle = '#93c5fd';
      ctx.lineWidth = 1;
      for (let li = -1; li <= 1; li++) {
        safeBeginPath();
        safeMoveTo(cx + li * r * 0.09, cy - r * 0.24);
        safeLineTo(cx + li * r * 0.07, cy - r * 0.56);
        safeStroke();
      }

      // Front jade jewel
      ctx.fillStyle = '#38bdf8';
      safeBeginPath();
      safeArc(cx, cy - r * 0.26, r * 0.045, 0, Math.PI * 2);
      safeFill();

    } else {
      // Specialist (Sage Topknot or Scholar Cowl · 逍遥巾 / 儒巾)
      if (isYoungPrince) {
        // Xiao Tong: Eastern Palace Scholar Cap & Ribbons
        ctx.fillStyle = '#1e1b4b';
        ctx.strokeStyle = '#fbbf24';
        ctx.lineWidth = 1.2;
        safeBeginPath();
        safeMoveTo(cx - r * 0.24, cy - r * 0.24);
        safeQuad(cx - r * 0.26, cy - r * 0.48, cx, cy - r * 0.52);
        safeQuad(cx + r * 0.26, cy - r * 0.48, cx + r * 0.24, cy - r * 0.24);
        safeClosePath();
        safeFill();
        safeStroke();

        // Golden Hairpin
        ctx.strokeStyle = '#fbbf24';
        ctx.lineWidth = 2;
        safeBeginPath();
        safeMoveTo(cx - r * 0.34, cy - r * 0.34);
        safeLineTo(cx + r * 0.34, cy - r * 0.34);
        safeStroke();

        // Flowing Ribbon Tails
        ctx.strokeStyle = '#818cf8';
        ctx.lineWidth = 1.5;
        safeBeginPath();
        safeMoveTo(cx - r * 0.22, cy - r * 0.28);
        safeQuad(cx - r * 0.42, cy, cx - r * 0.32, cy + r * 0.32);
        safeStroke();
        safeBeginPath();
        safeMoveTo(cx + r * 0.22, cy - r * 0.28);
        safeQuad(cx + r * 0.42, cy, cx + r * 0.32, cy + r * 0.32);
        safeStroke();
      } else {
        // Sage topknot with jade hairpin
        ctx.fillStyle = '#0f172a';
        safeBeginPath();
        safeArc(cx, cy - r * 0.40, r * 0.16, 0, Math.PI * 2);
        safeFill();

        // Hairpin
        ctx.strokeStyle = '#34d399';
        ctx.lineWidth = 2;
        safeBeginPath();
        safeMoveTo(cx - r * 0.30, cy - r * 0.40);
        safeLineTo(cx + r * 0.30, cy - r * 0.40);
        safeStroke();

        // Hairband
        ctx.strokeStyle = '#fbbf24';
        ctx.lineWidth = 1.2;
        safeBeginPath();
        safeMoveTo(cx - r * 0.26, cy - r * 0.22);
        safeQuad(cx, cy - r * 0.32, cx + r * 0.26, cy - r * 0.22);
        safeStroke();
      }
    }

    // 8. Dynastic Red Seal Stamp inside medallion (朱砂方印)
    const sealSize = 24;
    const sealX = cx + r * 0.40;
    const sealY = cy - r * 0.72;
    ctx.fillStyle = '#b91c1c';
    ctx.strokeStyle = '#7f1d1d';
    ctx.lineWidth = 1.2;
    ctx.fillRect(sealX, sealY, sealSize, sealSize);
    ctx.strokeRect(sealX, sealY, sealSize, sealSize);

    ctx.fillStyle = '#fef08a';
    ctx.textAlign = 'center';

    if (data.isEn) {
      ctx.font = 'bold 8px serif';
      ctx.fillText('SAGE', sealX + sealSize / 2, sealY + sealSize / 2 + 3);
    } else {
      ctx.font = 'bold 9px serif';
      let c1 = '先', c2 = '贤';
      if (isYoungPrince) { c1 = '昭'; c2 = '明'; }
      else if (figId === 'wang_yangming') { c1 = '阳'; c2 = '明'; }
      else if (arch === 'executive') { c1 = '御'; c2 = '极'; }
      else if (arch === 'military') { c1 = '定'; c2 = '乱'; }
      ctx.fillText(c1, sealX + sealSize / 2, sealY + 10);
      ctx.fillText(c2, sealX + sealSize / 2, sealY + 20);
    }

    // 9. Restore clip
    safeRestore();
  }

  /**
   * Render vertical aesthetic social card onto Canvas
   * Elevated Centerpiece: Classical Portrait, Soul Mirror Resonance, Key Legacy & Karmic Lesson.
   * Four progress bars ("四大生态位定向") have been replaced with the high-fidelity historical portrait.
   */
  static renderToCanvas(canvas, bazi, luck, lang = 'zh') {
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const data = this.extractCardData(bazi, luck, lang);
    const W = 750;
    const H = 1180;
    canvas.width = W;
    canvas.height = H;

    // 1. Background gradient
    const bgGrad = ctx.createLinearGradient(0, 0, W, H);
    bgGrad.addColorStop(0, '#0c0f18');
    bgGrad.addColorStop(0.35, '#14121d');
    bgGrad.addColorStop(0.7, '#10131e');
    bgGrad.addColorStop(1, '#090b12');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, W, H);

    // Decorative antique double frame
    ctx.strokeStyle = '#926a38';
    ctx.lineWidth = 2.5;
    ctx.strokeRect(28, 28, W - 56, H - 56);
    ctx.strokeStyle = '#4a341b';
    ctx.lineWidth = 1;
    ctx.strokeRect(36, 36, W - 72, H - 72);

    // Corner ornaments
    const corners = [
      [36, 36], [W - 36, 36], [36, H - 36], [W - 36, H - 36]
    ];
    ctx.fillStyle = '#d97706';
    corners.forEach(([cx, cy]) => {
      ctx.beginPath();
      ctx.arc(cx, cy, 4.5, 0, Math.PI * 2);
      ctx.fill();
    });

    // 2. Top Imperial Brand & Seal Stamp
    ctx.fillStyle = '#b45309';
    ctx.font = 'bold 20px serif';
    ctx.textAlign = 'center';
    ctx.fillText(data.isEn ? 'IMPERIAL ARCHIVE · METAPHYSICS ENGINE' : '✦ 钦 天 监 · 御 制 天 机 战 报 ✦', W / 2, 72);

    // Seal Box
    ctx.strokeStyle = '#b91c1c';
    ctx.lineWidth = 2;
    ctx.strokeRect(W / 2 - 55, 90, 110, 32);
    ctx.fillStyle = '#ef4444';
    ctx.font = 'bold 15px serif';
    ctx.fillText(data.isEn ? 'SEAL OF FATE' : '钦天御览', W / 2, 112);

    // 3. Four Pillars Display Bar (Box 1)
    const box1Y = 142;
    const box1H = 80;
    ctx.fillStyle = '#171926';
    ctx.fillRect(60, box1Y, W - 120, box1H);
    ctx.strokeStyle = '#333b4f';
    ctx.lineWidth = 1;
    ctx.strokeRect(60, box1Y, W - 120, box1H);

    ctx.fillStyle = '#f59e0b';
    ctx.font = 'bold 26px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(data.pillarsStr, W / 2, box1Y + 44);

    ctx.fillStyle = '#9ca3af';
    ctx.font = '13px sans-serif';
    ctx.fillText(data.isEn ? 'Four Pillars GanZhi Matrix · Day Master: ' + data.dayMaster : '命造四柱干支统揽 · 日元统摄：' + data.dayMaster, W / 2, box1Y + 68);

    // 4. Personality & Archetype Title Box (Box 2)
    const box2Y = 240;
    const box2H = 112;
    ctx.fillStyle = '#161926';
    ctx.fillRect(60, box2Y, W - 120, box2H);
    ctx.strokeStyle = '#d97706';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(60, box2Y, W - 120, box2H);

    // Main Calling Title
    ctx.fillStyle = '#fbbf24';
    ctx.font = 'bold 22px sans-serif';
    this.drawWrappedText(ctx, data.archetypeTitle, W / 2, box2Y + 36, 590, 26, 1, 'center');

    // Subtitle keywords
    if (data.archetypeTag) {
      ctx.fillStyle = '#fde68a';
      ctx.font = '13px sans-serif';
      this.drawWrappedText(ctx, data.archetypeTag, W / 2, box2Y + 66, 590, 18, 1, 'center');
    }

    // Vigor score
    ctx.fillStyle = '#e2e8f0';
    ctx.font = '13.5px sans-serif';
    const subText = data.isEn
      ? `ZiPing Vigor Score: ${data.score}/100 (${data.tier})`
      : `子平生克量化活力：${data.score} 分 · 【${data.tier}】`;
    ctx.fillText(subText, W / 2, box2Y + 96);

    // 5. Grand Centerpiece: Historical Soul Mirror with Classical Stylized Portrait (Box 3)
    // Reclaims space from the old 4-progress-bar ladder, elevating the historical figure into center stage
    const box3Y = 372;
    const box3H = 450;
    ctx.fillStyle = '#141525';
    ctx.fillRect(60, box3Y, W - 120, box3H);
    ctx.strokeStyle = '#4f46e5';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(60, box3Y, W - 120, box3H);

    // Centerpiece Header
    ctx.fillStyle = '#a5b4fc';
    ctx.font = 'bold 15px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(data.isEn ? '✦ SOUL MIRROR HISTORICAL PERSONA ✦' : '✦ 天 命 照 命 镜 像 · 先 贤 同 频 ✦', W / 2, box3Y + 28);

    // Render the Classical Stylized Portrait Medallion
    const portraitCx = 145;
    const portraitCy = box3Y + 102;
    const portraitR = 52;
    this.drawClassicalPortrait(ctx, data, portraitCx, portraitCy, portraitR);

    // Under-Portrait Dynasty Era Badge
    const eraPillW = 114;
    const eraPillH = 20;
    const eraPillX = portraitCx - eraPillW / 2;
    const eraPillY = portraitCy + portraitR + 6;
    ctx.fillStyle = '#1c2033';
    ctx.fillRect(eraPillX, eraPillY, eraPillW, eraPillH);
    ctx.strokeStyle = '#b45309';
    ctx.lineWidth = 1;
    ctx.strokeRect(eraPillX, eraPillY, eraPillW, eraPillH);

    ctx.fillStyle = '#fbbf24';
    ctx.font = 'bold 10.5px sans-serif';
    ctx.textAlign = 'center';
    const eraStr = data.figureDynasty || (data.isEn ? 'Sage Era' : '先贤纪元');
    ctx.fillText(eraStr, portraitCx, eraPillY + 14);

    // Right of Portrait: Historical Persona Profile Panel
    const profileX = 224;
    const profileW = 446;

    // Line 1: Figure Name & Affinity Resonance Score
    ctx.textAlign = 'left';
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 22px serif';

    const rawFigName = data.figureName || (data.isEn ? 'Historical Sage' : '先贤宗师');
    let displayFigName = rawFigName;
    if (data.isEn && rawFigName.includes('(')) {
      displayFigName = rawFigName.split('(')[0].trim();
    }
    ctx.fillText(displayFigName, profileX, box3Y + 70);

    // Affinity Score Badge (right-aligned in top line)
    ctx.fillStyle = '#1f2438';
    ctx.fillRect(W - 190, box3Y + 52, 110, 24);
    ctx.strokeStyle = '#d97706';
    ctx.lineWidth = 1;
    ctx.strokeRect(W - 190, box3Y + 52, 110, 24);

    ctx.fillStyle = '#fbbf24';
    ctx.font = 'bold 13px monospace';
    ctx.textAlign = 'center';
    ctx.fillText(data.isEn ? `${data.figureSim} Match` : `⚡ ${data.figureSim} 同频`, W - 135, box3Y + 69);

    // Line 2: Historical Official Position & Credentials
    ctx.textAlign = 'left';
    ctx.fillStyle = '#cbd5e1';
    ctx.font = '12.5px sans-serif';
    this.drawWrappedText(ctx, data.figurePosition, profileX, box3Y + 98, profileW, 18, 2, 'left');

    // Line 3: Archetype Vocation Pill
    const archPillY = box3Y + 146;
    ctx.fillStyle = '#1e293b';
    ctx.fillRect(profileX, archPillY - 14, 210, 22);
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 1;
    ctx.strokeRect(profileX, archPillY - 14, 210, 22);

    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 12px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(data.figureArchetypeLabel, profileX + 105, archPillY + 2);

    // Fine Divider
    ctx.strokeStyle = '#2d3748';
    ctx.lineWidth = 1;
    if (ctx.beginPath) ctx.beginPath();
    if (ctx.moveTo) ctx.moveTo(80, box3Y + 186);
    if (ctx.lineTo) ctx.lineTo(W - 80, box3Y + 186);
    if (ctx.stroke) ctx.stroke();

    // Reclaimed Space Part A: Soul Resonance Quote
    ctx.fillStyle = '#e2e8f0';
    ctx.font = 'italic 13.5px serif';
    this.drawWrappedText(ctx, data.figureQuote, W / 2, box3Y + 212, 590, 21, 2, 'center');

    // Reclaimed Space Part B: Dual Wisdom Cards (Legacy & Karmic Lesson)
    // Card 1: Key Legacy (立身功业)
    const legY = box3Y + 264;
    const cardH = 74;
    ctx.fillStyle = '#161a29';
    ctx.fillRect(80, legY, W - 160, cardH);
    ctx.strokeStyle = '#78350f';
    ctx.lineWidth = 1;
    ctx.strokeRect(80, legY, W - 160, cardH);

    ctx.textAlign = 'left';
    ctx.fillStyle = '#fbbf24';
    ctx.font = 'bold 12px sans-serif';
    ctx.fillText(data.isEn ? '✦ KEY LEGACY' : '✦ 立身功业 ✦', 96, legY + 22);

    ctx.fillStyle = '#cbd5e1';
    ctx.font = '12px sans-serif';
    this.drawWrappedText(ctx, data.figureLegacy, 96, legY + 42, 558, 17, 2, 'left');

    // Card 2: Karmic Lesson (天机诫勉)
    const advY = box3Y + 350;
    ctx.fillStyle = '#1a1622';
    ctx.fillRect(80, advY, W - 160, cardH);
    ctx.strokeStyle = '#991b1b';
    ctx.lineWidth = 1;
    ctx.strokeRect(80, advY, W - 160, cardH);

    ctx.textAlign = 'left';
    ctx.fillStyle = '#f87171';
    ctx.font = 'bold 12px sans-serif';
    ctx.fillText(data.isEn ? '⚡ KARMIC LESSON' : '✦ 天机诫勉 ✦', 96, advY + 22);

    ctx.fillStyle = '#fca5a5';
    ctx.font = '12px sans-serif';
    this.drawWrappedText(ctx, data.figureAdvice, 96, advY + 42, 558, 17, 2, 'left');

    // 6. Annual Transit Hexagram & Strategic Guidance (Box 4)
    const box4Y = 842;
    const box4H = 196;
    ctx.fillStyle = '#181523';
    ctx.fillRect(60, box4Y, W - 120, box4H);
    ctx.strokeStyle = '#b45309';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(60, box4Y, W - 120, box4H);

    ctx.fillStyle = '#f59e0b';
    ctx.font = 'bold 18px sans-serif';
    ctx.textAlign = 'center';
    const hexTitle = data.isEn
      ? `${data.annualYear} Annual Transit: Hexagram [${data.hexName}]`
      : `${data.annualYear} ${data.annualGanzhi}年 · 值年卦【${data.hexName}】`;
    ctx.fillText(hexTitle, W / 2, box4Y + 34);

    // Directive wrapped
    ctx.fillStyle = '#e2e8f0';
    ctx.font = '14px sans-serif';
    this.drawWrappedText(ctx, data.hexDirective, W / 2, box4Y + 70, 570, 22, 2, 'center');

    // Action banner
    const bannerW = 540;
    const bannerH = 32;
    const bannerX = W / 2 - bannerW / 2;
    const bannerY = box4Y + 144;
    ctx.fillStyle = '#064e3b';
    ctx.fillRect(bannerX, bannerY, bannerW, bannerH);
    ctx.strokeStyle = '#10b981';
    ctx.lineWidth = 1;
    ctx.strokeRect(bannerX, bannerY, bannerW, bannerH);

    ctx.fillStyle = '#6ee7b7';
    ctx.font = 'bold 13px sans-serif';
    const actionText = data.isEn
      ? 'Direct Action: Build undeniable craft & let works speak.'
      : '年度行持：以硬核作品立世，顺应天理，游刃有余。';
    ctx.textAlign = 'center';
    ctx.fillText(actionText, W / 2, bannerY + 21);

    // 7. Footer Brand & Link
    ctx.fillStyle = '#6b7280';
    ctx.font = '13px monospace';
    ctx.textAlign = 'center';
    ctx.fillText('bazi-git-main-fategranted-afk.vercel.app', W / 2, 1074);

    ctx.fillStyle = '#4b5563';
    ctx.font = '12px sans-serif';
    ctx.fillText(data.isEn ? 'BaZi-AI · Agentic Metaphysics & Decision Engine' : '八字排盘与现代战略决策引擎 · 东方数理全息', W / 2, 1098);
  }

  /**
   * Generate copyable text summary for social media
   * Includes enriched soul mirror persona, key legacy and karmic wisdom
   */
  static generateSocialCopyText(bazi, luck, lang = 'zh') {
    const data = this.extractCardData(bazi, luck, lang);
    if (data.isEn) {
      return `👑 BaZi-AI Decision Engine Profile:
🌌 Day Master: [${data.dayMaster}] | Vigor Score: ${data.score}/100 (${data.tier})
🏆 Career Calling: ${data.archetypeTitle}
🪞 Soul Mirror Figure: ${data.figureName} (${data.figureDynasty} · Resonance: ${data.figureSim})
📜 Key Legacy: ${data.figureLegacy}
💡 Karmic Wisdom: ${data.figureAdvice}
☯️ 2026 Transit Hexagram: [${data.hexName}]
🎯 Annual Directive: "${data.hexDirective}"
🔗 Explore your destiny blueprint: https://bazi-git-main-fategranted-afk.vercel.app`;
    }

    return `👑 【我的东方数理命盘与战略战报】
🌌 日元本命：[${data.dayMaster}] | 子平活力：${data.score}分（${data.tier}）
🏆 天命职能：${data.archetypeTitle}
🪞 照命先贤：${data.figureName}（${data.figureDynasty} · 心智契合度：${data.figureSim}）
📜 传世功业：${data.figureLegacy}
💡 天机诫勉：${data.figureAdvice}
☯️ 2026值年卦：【${data.hexName}】
🎯 年度行持密卷：“${data.hexDirective}”
🔗 测算你的天命决策蓝图：https://bazi-git-main-fategranted-afk.vercel.app`;
  }
}

if (typeof window !== 'undefined') {
  window.SocialCardEngine = SocialCardEngine;
  window.SocialCard = SocialCardEngine;
}
if (typeof globalThis !== 'undefined') {
  globalThis.SocialCardEngine = SocialCardEngine;
  globalThis.SocialCard = SocialCardEngine;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SocialCardEngine;
}
