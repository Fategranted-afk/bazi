/**
 * 社交名片 · 竖屏高颜值社交战报生成引擎 (Social Identity Card Engine)
 * Renders high-fidelity vertical mobile aesthetic cards (Canvas 2D) & generates social share text.
 * 100% Offline-First, deterministic, and fully bilingual (zh/en).
 * Elevated Centerpiece: Classical Historical Figure Portrait, Soul Resonance & Karmic Legacy.
 * High-Craftsmanship Imperial Dossier: Continuous Leiwen Meanders, Corner Silk Wrapping & Pearl Medallions.
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

  static _godToEn(god) {
    if (!god || typeof god !== 'string') return 'Influence';
    const map = {
      '比肩': 'Friend', '劫财': 'Rob Wealth',
      '食神': 'Eating God', '伤官': 'Hurting Officer',
      '偏财': 'Indirect Wealth', '正财': 'Direct Wealth',
      '七杀': 'Seven Killings', '正官': 'Direct Officer',
      '偏印': 'Indirect Resource', '正印': 'Direct Resource',
      '日主': 'Day Master'
    };
    return map[god] || 'Day Master';
  }

  static _naYinToEn(ny) {
    if (!ny || typeof ny !== 'string') return 'Metal';
    if (ny.includes('金')) return 'Gold/Metal';
    if (ny.includes('木')) return 'Wood';
    if (ny.includes('水')) return 'Water';
    if (ny.includes('火')) return 'Fire';
    if (ny.includes('土')) return 'Earth';
    return 'Element';
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
    const pYear = safeBazi.pillars?.year || { stem: '甲', branch: '子', stemGod: '比肩', naYin: '海中金' };
    const pMonth = safeBazi.pillars?.month || { stem: '丙', branch: '寅', stemGod: '食神', naYin: '炉中火' };
    const pDay = safeBazi.pillars?.day || { stem: '甲', branch: '戌', stemGod: '日主', naYin: '山头火' };
    const pHour = safeBazi.pillars?.hour || { stem: '乙', branch: '亥', stemGod: '劫财', naYin: '山头火' };

    const rawY = `${pYear.stem}${pYear.branch}`;
    const rawM = `${pMonth.stem}${pMonth.branch}`;
    const rawD = `${pDay.stem}${pDay.branch}`;
    const rawH = `${pHour.stem}${pHour.branch}`;

    const yStr = isEn ? this._ganzhiToEn(rawY) : rawY;
    const mStr = isEn ? this._ganzhiToEn(rawM) : rawM;
    const dStr = isEn ? this._ganzhiToEn(rawD) : rawD;
    const hStr = isEn ? this._ganzhiToEn(rawH) : rawH;

    const pillarsDetailed = {
      year: {
        label: isEn ? 'Year' : '年柱',
        role: isEn ? 'Root' : '根基',
        ganZhi: yStr,
        stem: isEn ? this._stemToEn(pYear.stem).split(' ')[0] : pYear.stem,
        branch: isEn ? this._ganzhiToEn(rawY).split('-')[1] : pYear.branch,
        god: isEn ? this._godToEn(pYear.stemGod) : pYear.stemGod,
        naYin: isEn ? this._naYinToEn(pYear.naYin) : (pYear.naYin || '海中金')
      },
      month: {
        label: isEn ? 'Month' : '月柱',
        role: isEn ? 'Mandate' : '提纲',
        ganZhi: mStr,
        stem: isEn ? this._stemToEn(pMonth.stem).split(' ')[0] : pMonth.stem,
        branch: isEn ? this._ganzhiToEn(rawM).split('-')[1] : pMonth.branch,
        god: isEn ? this._godToEn(pMonth.stemGod) : pMonth.stemGod,
        naYin: isEn ? this._naYinToEn(pMonth.naYin) : (pMonth.naYin || '炉中火')
      },
      day: {
        label: isEn ? 'Day' : '日柱',
        role: isEn ? 'Self' : '自身',
        ganZhi: dStr,
        stem: isEn ? this._stemToEn(pDay.stem).split(' ')[0] : pDay.stem,
        branch: isEn ? this._ganzhiToEn(rawD).split('-')[1] : pDay.branch,
        god: isEn ? 'Day Master' : '日主',
        naYin: isEn ? this._naYinToEn(pDay.naYin) : (pDay.naYin || '山头火')
      },
      hour: {
        label: isEn ? 'Hour' : '时柱',
        role: isEn ? 'Fruit' : '归宿',
        ganZhi: hStr,
        stem: isEn ? this._stemToEn(pHour.stem).split(' ')[0] : pHour.stem,
        branch: isEn ? this._ganzhiToEn(rawH).split('-')[1] : pHour.branch,
        god: isEn ? this._godToEn(pHour.stemGod) : pHour.stemGod,
        naYin: isEn ? this._naYinToEn(pHour.naYin) : (pHour.naYin || '山头火')
      }
    };

    // Archetype Title & Calling
    let archetypeTitleZh = '技术人员 · 首席天命主场';
    let archetypeTitleEn = 'Specialist & Engineering · Prime Calling';
    let archetypeTagZh = '写代码 · 深度研发 · 算法架构 · 数据量化分析';
    let archetypeTagEn = 'Coding · Deep Architecture · Quantitative Analytics';

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
    let figureLegacyZh = '开创阳明心学，平定宁王之乱，立德立功立言三不朽。以无我之公心驾驭宏大局势，知行合一成万世宗师。';
    let figureLegacyEn = 'Founded Philosophy of Mind, quelled rebellions, achieved Three Immortalities. United supreme inner clarity with relentless worldly execution.';
    let figureAdviceZh = '心即理，事上磨炼；致良知以破心中贼，知行合一。临大事坚壁清野，严防急躁冒进，不取虚名而务实功。';
    let figureAdviceEn = 'Act as virtue dictates; unify wisdom with practical action. Contain reckless ambition and focus strictly on enduring craft.';

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

          // Legacy (立身功业) - Rich multi-sentence strategic moat exegesis
          if (fig.auxiliaryStrengthsZh && fig.auxiliaryStrengthsZh.length > 0) {
            const raw = fig.auxiliaryStrengthsZh[1] || fig.auxiliaryStrengthsZh[0];
            let s = raw.trim();
            if (s.length > 120) s = s.slice(0, 116) + '。';
            if (!/[。！？]$/.test(s)) s += '。';
            figureLegacyZh = s;
          } else if (fig.strengthAdviceZh) {
            let s = fig.strengthAdviceZh.trim();
            if (s.length > 120) s = s.slice(0, 116) + '。';
            if (!/[。！？]$/.test(s)) s += '。';
            figureLegacyZh = s;
          } else if (fig.deedsZh) {
            let s = fig.deedsZh.trim();
            if (s.length > 120) s = s.slice(0, 116) + '。';
            if (!/[。！？]$/.test(s)) s += '。';
            figureLegacyZh = s;
          }

          if (fig.auxiliaryStrengthsEn && fig.auxiliaryStrengthsEn.length > 0) {
            const raw = fig.auxiliaryStrengthsEn[0];
            let s = raw.trim();
            if (s.length > 200) s = s.slice(0, 196) + '.';
            if (!/[.!?]$/.test(s)) s += '.';
            figureLegacyEn = s;
          } else if (fig.strengthAdviceEn) {
            let s = fig.strengthAdviceEn.trim();
            if (s.length > 200) s = s.slice(0, 196) + '.';
            if (!/[.!?]$/.test(s)) s += '.';
            figureLegacyEn = s;
          } else if (fig.deedsEn) {
            let s = fig.deedsEn.trim();
            if (s.length > 200) s = s.slice(0, 196) + '.';
            if (!/[.!?]$/.test(s)) s += '.';
            figureLegacyEn = s;
          }

          // Advice (天机诫勉) - Substantive cautionary advice
          if (fig.auxiliaryWeaknessesZh && fig.auxiliaryWeaknessesZh.length > 0) {
            const raw = fig.auxiliaryWeaknessesZh[0];
            let s = raw.trim();
            if (s.length > 120) s = s.slice(0, 116) + '。';
            if (!/[。！？]$/.test(s)) s += '。';
            figureAdviceZh = s;
          } else if (fig.weaknessAdviceZh) {
            let s = fig.weaknessAdviceZh.trim();
            if (s.length > 120) s = s.slice(0, 116) + '。';
            if (!/[。！？]$/.test(s)) s += '。';
            figureAdviceZh = s;
          }

          if (fig.auxiliaryWeaknessesEn && fig.auxiliaryWeaknessesEn.length > 0) {
            const raw = fig.auxiliaryWeaknessesEn[0];
            let s = raw.trim();
            if (s.length > 200) s = s.slice(0, 196) + '.';
            if (!/[.!?]$/.test(s)) s += '.';
            figureAdviceEn = s;
          } else if (fig.weaknessAdviceEn) {
            let s = fig.weaknessAdviceEn.trim();
            if (s.length > 200) s = s.slice(0, 196) + '.';
            if (!/[.!?]$/.test(s)) s += '.';
            figureAdviceEn = s;
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

    // Annual Transit & Hexagram for 2026
    let annualYear = 2026;
    let annualGanzhi = isEn ? 'Bing-Wu' : '丙午';
    let hexNameZh = '乾为天';
    let hexNameEn = 'Qian (The Creative Heaven)';
    let hexDirectiveZh = '见龙在田，利见大人 · 沉淀口碑，以作品立世';
    let hexDirectiveEn = 'Dragon appearing in the field · Build undeniable craft and let works speak.';
    let hexStructureZh = '乾天纯阳 · 自强不息';
    let hexStructureEn = 'Heaven over Heaven · Supreme Yang';

    const userBYear = (safeBazi.input && safeBazi.input.year) || safeBazi.birthYear || 1990;
    const targetAge2026 = Math.max(1, 2026 - userBYear + 1);

    if (typeof IChingEngine !== 'undefined' && typeof IChingEngine.calculateFourPillarsHexagrams === 'function') {
      try {
        const hRes = IChingEngine.calculateFourPillarsHexagrams(safeBazi, targetAge2026, 2026);
        if (hRes && hRes.zhiNian && hRes.zhiNian.hexagram) {
          hexNameZh = hRes.zhiNian.hexagram.nameZh || hexNameZh;
          hexNameEn = hRes.zhiNian.hexagram.nameEn || hexNameEn;
          const upN = hRes.zhiNian.hexagram.upperTrigramNature || '';
          const loN = hRes.zhiNian.hexagram.lowerTrigramNature || '';
          const upEn = hRes.zhiNian.hexagram.upperTrigramEn || 'Upper';
          const loEn = hRes.zhiNian.hexagram.lowerTrigramEn || 'Lower';
          if (upN && loN) {
            hexStructureZh = `${upN}上${loN}下 · 第${hRes.zhiNian.hexagram.number}卦`;
            hexStructureEn = `Hexagram ${hRes.zhiNian.hexagram.number} · ${upEn} over ${loEn}`;
          }
          if (hRes.zhiNian.tianJi) {
            hexDirectiveZh = hRes.zhiNian.tianJi.liuNianZh || hexDirectiveZh;
            hexDirectiveEn = hRes.zhiNian.tianJi.liuNianEn || hexDirectiveEn;
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
      pillarsDetailed: pillarsDetailed,
      archetypeTitle: isEn ? archetypeTitleEn : archetypeTitleZh,
      archetypeTag: isEn ? archetypeTagEn : archetypeTagZh,
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
      hexDirective: isEn ? hexDirectiveEn : hexDirectiveZh,
      hexStructure: isEn ? hexStructureEn : hexStructureZh
    };
  }

  /**
   * Safe rounded rectangle path helper compatible with all headless/real canvas contexts
   */
  static drawRoundedRect(ctx, x, y, w, h, r) {
    if (!ctx) return;
    if (ctx.beginPath) ctx.beginPath();
    if (ctx.moveTo) ctx.moveTo(x + r, y);
    if (ctx.lineTo) ctx.lineTo(x + w - r, y);
    if (ctx.quadraticCurveTo) ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    if (ctx.lineTo) ctx.lineTo(x + w, y + h - r);
    if (ctx.quadraticCurveTo) ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    if (ctx.lineTo) ctx.lineTo(x + r, y + h);
    if (ctx.quadraticCurveTo) ctx.quadraticCurveTo(x, y + h, x, y + h - r);
    if (ctx.lineTo) ctx.lineTo(x, y + r);
    if (ctx.quadraticCurveTo) ctx.quadraticCurveTo(x, y, x + r, y);
    if (ctx.closePath) ctx.closePath();
  }

  /**
   * Continuous Cloud-Thunder Meanders (云雷纹 / 回纹) Border
   */
  static drawLeiwenBorder(ctx, x, y, w, h, step = 14) {
    if (!ctx || !ctx.beginPath) return;
    const safeStroke = () => { if (ctx.stroke) ctx.stroke(); };
    ctx.strokeStyle = 'rgba(217, 119, 6, 0.45)';
    ctx.lineWidth = 1.0;

    // Top border meanders
    ctx.beginPath();
    for (let curX = x; curX <= x + w - step; curX += step) {
      ctx.moveTo(curX, y);
      ctx.lineTo(curX + step * 0.7, y);
      ctx.lineTo(curX + step * 0.7, y + step * 0.4);
      ctx.lineTo(curX + step * 0.3, y + step * 0.4);
      ctx.lineTo(curX + step * 0.3, y + step * 0.2);
    }
    safeStroke();

    // Bottom border meanders
    ctx.beginPath();
    for (let curX = x; curX <= x + w - step; curX += step) {
      ctx.moveTo(curX, y + h);
      ctx.lineTo(curX + step * 0.7, y + h);
      ctx.lineTo(curX + step * 0.7, y + h - step * 0.4);
      ctx.lineTo(curX + step * 0.3, y + h - step * 0.4);
      ctx.lineTo(curX + step * 0.3, y + h - step * 0.2);
    }
    safeStroke();

    // Left border meanders
    ctx.beginPath();
    for (let curY = y; curY <= y + h - step; curY += step) {
      ctx.moveTo(x, curY);
      ctx.lineTo(x, curY + step * 0.7);
      ctx.lineTo(x + step * 0.4, curY + step * 0.7);
      ctx.lineTo(x + step * 0.4, curY + step * 0.3);
      ctx.lineTo(x + step * 0.2, curY + step * 0.3);
    }
    safeStroke();

    // Right border meanders
    ctx.beginPath();
    for (let curY = y; curY <= y + h - step; curY += step) {
      ctx.moveTo(x + w, curY);
      ctx.lineTo(x + w, curY + step * 0.7);
      ctx.lineTo(x + w - step * 0.4, curY + step * 0.7);
      ctx.lineTo(x + w - step * 0.4, curY + step * 0.3);
      ctx.lineTo(x + w - step * 0.2, curY + step * 0.3);
    }
    safeStroke();
  }

  /**
   * Traditional Bookbinding Corner Silk Wrapping (四角绫绢包角)
   */
  static drawCornerSilkWrap(ctx, x, y, size, corner) {
    if (!ctx || !ctx.beginPath) return;
    const safeSave = () => { if (ctx.save) ctx.save(); };
    const safeRestore = () => { if (ctx.restore) ctx.restore(); };
    const safeStroke = () => { if (ctx.stroke) ctx.stroke(); };
    const safeFill = () => { if (ctx.fill) ctx.fill(); };

    safeSave();
    ctx.beginPath();
    let rivetX = x, rivetY = y;
    if (corner === 'tl') {
      ctx.moveTo(x, y);
      ctx.lineTo(x + size, y);
      ctx.lineTo(x, y + size);
      rivetX = x + size * 0.32;
      rivetY = y + size * 0.32;
    } else if (corner === 'tr') {
      ctx.moveTo(x, y);
      ctx.lineTo(x - size, y);
      ctx.lineTo(x, y + size);
      rivetX = x - size * 0.32;
      rivetY = y + size * 0.32;
    } else if (corner === 'bl') {
      ctx.moveTo(x, y);
      ctx.lineTo(x + size, y);
      ctx.lineTo(x, y - size);
      rivetX = x + size * 0.32;
      rivetY = y - size * 0.32;
    } else if (corner === 'br') {
      ctx.moveTo(x, y);
      ctx.lineTo(x - size, y);
      ctx.lineTo(x, y - size);
      rivetX = x - size * 0.32;
      rivetY = y - size * 0.32;
    }
    if (ctx.closePath) ctx.closePath();
    ctx.fillStyle = '#b45309';
    safeFill();
    ctx.strokeStyle = '#fbbf24';
    ctx.lineWidth = 1.4;
    safeStroke();

    // Silk grain diagonal hatching
    ctx.strokeStyle = 'rgba(254, 240, 138, 0.4)';
    ctx.lineWidth = 0.8;
    ctx.beginPath();
    for (let step = 6; step < size; step += 6) {
      if (corner === 'tl') {
        ctx.moveTo(x + step * 0.3, y);
        ctx.lineTo(x, y + step * 0.3);
      } else if (corner === 'tr') {
        ctx.moveTo(x - step * 0.3, y);
        ctx.lineTo(x, y + step * 0.3);
      } else if (corner === 'bl') {
        ctx.moveTo(x + step * 0.3, y);
        ctx.lineTo(x, y - step * 0.3);
      } else if (corner === 'br') {
        ctx.moveTo(x - step * 0.3, y);
        ctx.lineTo(x, y - step * 0.3);
      }
    }
    safeStroke();

    // Golden brass rivet at apex
    ctx.beginPath();
    if (ctx.arc) ctx.arc(rivetX, rivetY, 3.2, 0, Math.PI * 2);
    ctx.fillStyle = '#fbbf24';
    safeFill();
    ctx.strokeStyle = '#78350f';
    ctx.lineWidth = 1;
    safeStroke();

    // Rivet specular glint
    ctx.beginPath();
    if (ctx.arc) ctx.arc(rivetX - 0.8, rivetY - 0.8, 1, 0, Math.PI * 2);
    ctx.fillStyle = '#ffffff';
    safeFill();

    safeRestore();
  }

  /**
   * Procedural Classical Stylized Portrait Renderer
   * Upgraded with: Beaded Pearl Outer Ring, 3-Layer Embroidered Collar,
   * Lifelike Phoenix Eyes with Dual Specular Glints, and Cinnabar Seal Stamp.
   */
  static drawClassicalPortrait(ctx, data, cx, cy, r) {
    if (!ctx) return;

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

    // 1. Outer antique imperial double gold medallion frame
    ctx.strokeStyle = '#b45309';
    ctx.lineWidth = 3.2;
    safeBeginPath();
    safeArc(cx, cy, r, 0, Math.PI * 2);
    safeStroke();

    ctx.strokeStyle = '#d97706';
    ctx.lineWidth = 1.6;
    safeBeginPath();
    safeArc(cx, cy, r - 3.5, 0, Math.PI * 2);
    safeStroke();

    // 32 Lustrous Golden Pearl Beads encircling outer rim
    const pearlCount = 32;
    for (let i = 0; i < pearlCount; i++) {
      const ang = (i * 2 * Math.PI) / pearlCount;
      const px = cx + Math.cos(ang) * (r + 4);
      const py = cy + Math.sin(ang) * (r + 4);
      safeBeginPath();
      safeArc(px, py, 1.8, 0, Math.PI * 2);
      ctx.fillStyle = '#fef08a';
      safeFill();
      ctx.strokeStyle = '#b45309';
      ctx.lineWidth = 0.6;
      safeStroke();
    }

    // 8 Classical cardinal / trigram ticks in lustrous amber-gold
    ctx.strokeStyle = '#d97706';
    ctx.lineWidth = 1.6;
    for (let i = 0; i < 8; i++) {
      const ang = (i * Math.PI) / 4;
      const x1 = cx + Math.cos(ang) * (r - 3.5);
      const y1 = cy + Math.sin(ang) * (r - 3.5);
      const x2 = cx + Math.cos(ang) * (r + 2.5);
      const y2 = cy + Math.sin(ang) * (r + 2.5);
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

    // 3. Background celestial ink-wash gradient & ambient lighting
    let bg = safeLinearGrad(cx, cy - r, cx, cy + r);
    if (bg) {
      if (arch === 'executive') {
        bg.addColorStop(0, '#881337');
        bg.addColorStop(0.5, '#4c0519');
        bg.addColorStop(1, '#240713');
      } else if (arch === 'civil') {
        bg.addColorStop(0, '#1d4ed8');
        bg.addColorStop(0.5, '#1e3a8a');
        bg.addColorStop(1, '#0d172e');
      } else if (arch === 'military') {
        bg.addColorStop(0, '#9a3412');
        bg.addColorStop(0.5, '#431407');
        bg.addColorStop(1, '#1e140d');
      } else {
        bg.addColorStop(0, '#047857');
        bg.addColorStop(0.5, '#065f46');
        bg.addColorStop(1, '#0d2820');
      }
      ctx.fillStyle = bg;
    } else {
      ctx.fillStyle = '#1e1b4b';
    }
    safeBeginPath();
    safeArc(cx, cy, r - 4, 0, Math.PI * 2);
    safeFill();

    // Luminous dual-layer celestial aura halo behind head
    let cinnabarHalo = safeRadialGrad(cx, cy - 8, 2, cx, cy - 8, r * 0.45);
    if (cinnabarHalo) {
      cinnabarHalo.addColorStop(0, 'rgba(239, 68, 68, 0.60)');
      cinnabarHalo.addColorStop(1, 'rgba(220, 38, 38, 0)');
      ctx.fillStyle = cinnabarHalo;
      safeBeginPath();
      safeArc(cx, cy - 8, r * 0.45, 0, Math.PI * 2);
      safeFill();
    }

    let halo = safeRadialGrad(cx, cy - 8, 4, cx, cy - 8, r * 0.72);
    if (halo) {
      const haloColor = arch === 'executive' ? 'rgba(251, 191, 36, 0.65)'
        : arch === 'civil' ? 'rgba(147, 197, 253, 0.60)'
        : arch === 'military' ? 'rgba(249, 115, 22, 0.60)'
        : 'rgba(52, 211, 153, 0.60)';
      halo.addColorStop(0, haloColor);
      halo.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = halo;
      safeBeginPath();
      safeArc(cx, cy - 8, r * 0.72, 0, Math.PI * 2);
      safeFill();
    }

    // Ink-wash mountain mist at bottom of medallion
    ctx.fillStyle = 'rgba(15, 23, 42, 0.55)';
    safeBeginPath();
    safeMoveTo(cx - r, cy + r * 0.38);
    safeQuad(cx - r * 0.3, cy + r * 0.04, cx, cy + r * 0.28);
    safeQuad(cx + r * 0.4, cy + r * 0.08, cx + r, cy + r * 0.42);
    safeLineTo(cx + r, cy + r);
    safeLineTo(cx - r, cy + r);
    safeClosePath();
    safeFill();

    // 4. Base Anatomy: Neck & Shoulders
    ctx.fillStyle = '#fef08a';
    safeBeginPath();
    safeMoveTo(cx - r * 0.16, cy + r * 0.10);
    safeLineTo(cx - r * 0.18, cy + r * 0.34);
    safeLineTo(cx + r * 0.18, cy + r * 0.34);
    safeLineTo(cx + r * 0.16, cy + r * 0.10);
    safeClosePath();
    safeFill();

    // Subtle warm neck contour shadow
    ctx.fillStyle = 'rgba(217, 119, 6, 0.22)';
    safeBeginPath();
    safeMoveTo(cx - r * 0.14, cy + r * 0.12);
    safeQuad(cx, cy + r * 0.22, cx + r * 0.14, cy + r * 0.12);
    safeLineTo(cx + r * 0.16, cy + r * 0.24);
    safeQuad(cx, cy + r * 0.32, cx - r * 0.16, cy + r * 0.24);
    safeClosePath();
    safeFill();

    // 5. Robes & Ancient Classical Garments (3-Layer Embroidered Collars)
    let robeColor = '#059669';       // Radiant Jade Green (Specialist)
    let robeBorder = '#fbbf24';      // Luminous Gold Collar Embroidery
    let collarColor = '#047857';
    let innerCollar = '#ffffff';

    if (arch === 'executive') {
      robeColor = '#dc2626';        // Brilliant Vermilion Crimson
      robeBorder = '#fbbf24';       // Imperial Golden Trim
      collarColor = '#b91c1c';
    } else if (arch === 'civil') {
      robeColor = '#2563eb';        // Radiant Imperial Sapphire Blue
      robeBorder = '#fbbf24';       // Celestial Gold Embroidery
      collarColor = '#1d4ed8';
    } else if (arch === 'military') {
      robeColor = '#1e293b';        // Royal Obsidian Armor with Burnished Gold
      robeBorder = '#f59e0b';
      collarColor = '#334155';
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

    // Layer 1: Pure White Inner Collar (中单纯白内衬)
    ctx.fillStyle = innerCollar;
    safeBeginPath();
    safeMoveTo(cx - r * 0.22, cy + r * 0.18);
    safeLineTo(cx, cy + r * 0.50);
    safeLineTo(cx + r * 0.22, cy + r * 0.18);
    safeClosePath();
    safeFill();

    // Layer 2: Vermilion Gold-Stitched Middle Collar (朱砂暗金中领)
    ctx.fillStyle = '#b91c1c';
    ctx.strokeStyle = '#fbbf24';
    ctx.lineWidth = 1.0;
    safeBeginPath();
    safeMoveTo(cx - r * 0.25, cy + r * 0.19);
    safeLineTo(cx + r * 0.16, cy + r * 0.56);
    safeLineTo(cx + r * 0.08, cy + r * 0.62);
    safeLineTo(cx - r * 0.30, cy + r * 0.22);
    safeClosePath();
    safeFill();
    safeStroke();

    // Layer 3: Royal Outer Robe Lapels (交领右衽)
    ctx.fillStyle = collarColor;
    ctx.strokeStyle = robeBorder;
    ctx.lineWidth = 1.4;

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
      ctx.strokeStyle = '#d97706';
      ctx.lineWidth = 1.3;
      safeStroke();
    } else if (arch === 'military') {
      ctx.fillStyle = '#f59e0b';
      safeBeginPath();
      safeArc(cx, cy + r * 0.64, r * 0.14, 0, Math.PI * 2);
      safeFill();
      ctx.fillStyle = '#fbbf24';
      safeBeginPath();
      safeArc(cx, cy + r * 0.64, r * 0.07, 0, Math.PI * 2);
      safeFill();
    }

    // 6. Classical Face Contour & Features (Radiant skin tone & 3D shading)
    ctx.fillStyle = '#fef08a';
    ctx.strokeStyle = '#b45309';
    ctx.lineWidth = 1.1;

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

    // 3D Facial Shading: Cheekbones & Chin Contours
    ctx.fillStyle = 'rgba(217, 119, 6, 0.12)';
    safeBeginPath();
    safeMoveTo(cx - faceW * 0.70, cy);
    safeQuad(cx - faceW * 0.40, cy + r * 0.16, cx, faceBotY);
    safeQuad(cx + faceW * 0.40, cy + r * 0.16, cx + faceW * 0.70, cy);
    safeQuad(cx, cy + r * 0.18, cx - faceW * 0.70, cy);
    safeClosePath();
    safeFill();

    // Soft healthy peach blush on cheeks
    ctx.fillStyle = 'rgba(244, 63, 94, 0.18)';
    safeBeginPath();
    safeArc(cx - faceW * 0.45, cy + r * 0.04, r * 0.10, 0, Math.PI * 2);
    safeArc(cx + faceW * 0.45, cy + r * 0.04, r * 0.10, 0, Math.PI * 2);
    safeFill();

    // Ears
    ctx.fillStyle = '#fde68a';
    safeBeginPath();
    safeArc(cx - faceW * 0.84, cy - r * 0.04, r * 0.075, 0, Math.PI * 2);
    safeArc(cx + faceW * 0.84, cy - r * 0.04, r * 0.075, 0, Math.PI * 2);
    safeFill();

    // Eyebrows (Traditional Ink & Brushwork)
    ctx.strokeStyle = '#0f172a';
    ctx.fillStyle = '#0f172a';
    ctx.lineWidth = arch === 'military' ? 2.0 : 1.4;

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

    // Classical Phoenix Eyes (丹凤眼) with Dual Specular White Glints
    ctx.fillStyle = '#0f172a';
    ctx.strokeStyle = '#0f172a';
    ctx.lineWidth = 1.4;

    // Left eye
    safeBeginPath();
    safeMoveTo(cx - faceW * 0.60, cy - r * 0.055);
    safeQuad(cx - faceW * 0.38, cy - r * 0.09, cx - faceW * 0.18, cy - r * 0.05);
    safeStroke();
    safeBeginPath();
    safeArc(cx - faceW * 0.36, cy - r * 0.05, r * 0.038, 0, Math.PI * 2);
    safeFill();

    // Primary pupil highlight glint (Left)
    ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
    safeBeginPath();
    safeArc(cx - faceW * 0.38, cy - r * 0.058, r * 0.013, 0, Math.PI * 2);
    safeFill();
    // Secondary subtle glint (Left)
    safeBeginPath();
    safeArc(cx - faceW * 0.34, cy - r * 0.044, r * 0.007, 0, Math.PI * 2);
    safeFill();

    // Right eye
    ctx.fillStyle = '#0f172a';
    safeBeginPath();
    safeMoveTo(cx + faceW * 0.18, cy - r * 0.05);
    safeQuad(cx + faceW * 0.38, cy - r * 0.09, cx + faceW * 0.60, cy - r * 0.055);
    safeStroke();
    safeBeginPath();
    safeArc(cx + faceW * 0.36, cy - r * 0.05, r * 0.038, 0, Math.PI * 2);
    safeFill();

    // Primary pupil highlight glint (Right)
    ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
    safeBeginPath();
    safeArc(cx + faceW * 0.34, cy - r * 0.058, r * 0.013, 0, Math.PI * 2);
    safeFill();
    // Secondary subtle glint (Right)
    safeBeginPath();
    safeArc(cx + faceW * 0.38, cy - r * 0.044, r * 0.007, 0, Math.PI * 2);
    safeFill();

    // Nose bridge & subtle highlight
    ctx.strokeStyle = '#b45309';
    ctx.lineWidth = 1.1;
    safeBeginPath();
    safeMoveTo(cx, cy - r * 0.06);
    safeLineTo(cx - r * 0.02, cy + r * 0.06);
    safeLineTo(cx + r * 0.02, cy + r * 0.06);
    safeStroke();

    // Mouth / Lips (Vibrant Vermilion)
    ctx.strokeStyle = '#dc2626';
    ctx.lineWidth = 1.4;
    safeBeginPath();
    safeMoveTo(cx - r * 0.08, cy + r * 0.12);
    safeQuad(cx, cy + r * 0.135, cx + r * 0.08, cy + r * 0.12);
    safeStroke();

    // Classical Facial Hair / Scholar Beard
    if (!isYoungPrince) {
      ctx.fillStyle = '#0f172a';
      ctx.strokeStyle = '#0f172a';
      ctx.lineWidth = 1.3;

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
      // Young Prince Xiao Tong: refined youth
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
      ctx.lineWidth = 1.6;
      safeBeginPath();
      safeMoveTo(cx - r * 0.52, cy - r * 0.44);
      safeLineTo(cx + r * 0.52, cy - r * 0.44);
      safeLineTo(cx + r * 0.48, cy - r * 0.52);
      safeLineTo(cx - r * 0.48, cy - r * 0.52);
      safeClosePath();
      safeFill();
      safeStroke();

      // Dangling Pearl Strands (旒珠)
      ctx.fillStyle = '#fef08a';
      const beadYs = [cy - r * 0.42, cy - r * 0.36, cy - r * 0.30, cy - r * 0.24];
      const beadXs = [cx - r * 0.36, cx - r * 0.24, cx - r * 0.12, cx + r * 0.12, cx + r * 0.24, cx + r * 0.36];
      beadXs.forEach(bx => {
        beadYs.forEach(by => {
          safeBeginPath();
          safeArc(bx, by, r * 0.024, 0, Math.PI * 2);
          safeFill();
        });
      });

      // Red Ribbon Cords (缨带)
      ctx.strokeStyle = '#ef4444';
      ctx.lineWidth = 1.3;
      safeBeginPath();
      safeMoveTo(cx - r * 0.24, cy - r * 0.32);
      safeQuad(cx - r * 0.36, cy, cx - r * 0.20, cy + r * 0.26);
      safeStroke();
      safeBeginPath();
      safeMoveTo(cx + r * 0.24, cy - r * 0.32);
      safeQuad(cx + r * 0.36, cy, cx + r * 0.20, cy + r * 0.26);
      safeStroke();

    } else if (arch === 'military') {
      // Battle Helmet (兜鍪) with Scarlet Plume
      ctx.fillStyle = '#dc2626';
      safeBeginPath();
      safeMoveTo(cx, cy - r * 0.52);
      safeQuad(cx - r * 0.24, cy - r * 0.76, cx - r * 0.08, cy - r * 0.92);
      safeQuad(cx + r * 0.12, cy - r * 0.80, cx + r * 0.06, cy - r * 0.52);
      safeClosePath();
      safeFill();

      // Helmet Dome (盔体)
      ctx.fillStyle = '#334155';
      ctx.strokeStyle = '#fbbf24';
      ctx.lineWidth = 1.6;
      safeBeginPath();
      safeMoveTo(cx - r * 0.34, cy - r * 0.20);
      safeQuad(cx - r * 0.36, cy - r * 0.52, cx, cy - r * 0.54);
      safeQuad(cx + r * 0.36, cy - r * 0.52, cx + r * 0.34, cy - r * 0.20);
      safeClosePath();
      safeFill();
      safeStroke();

      // Visor Brow Ridge & Spike
      ctx.fillStyle = '#fbbf24';
      safeBeginPath();
      safeMoveTo(cx - r * 0.08, cy - r * 0.54);
      safeLineTo(cx, cy - r * 0.65);
      safeLineTo(cx + r * 0.08, cy - r * 0.54);
      safeClosePath();
      safeFill();

      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 2.2;
      safeBeginPath();
      safeMoveTo(cx - r * 0.34, cy - r * 0.20);
      safeQuad(cx, cy - r * 0.28, cx + r * 0.34, cy - r * 0.20);
      safeStroke();

    } else if (arch === 'civil') {
      // Official High Ridge Cap (梁冠 / 进贤冠)
      ctx.fillStyle = '#0f172a';
      ctx.strokeStyle = '#60a5fa';
      ctx.lineWidth = 1.3;

      safeBeginPath();
      safeMoveTo(cx - r * 0.28, cy - r * 0.22);
      safeQuad(cx - r * 0.32, cy - r * 0.56, cx - r * 0.10, cy - r * 0.62);
      safeLineTo(cx + r * 0.20, cy - r * 0.52);
      safeQuad(cx + r * 0.30, cy - r * 0.36, cx + r * 0.28, cy - r * 0.22);
      safeClosePath();
      safeFill();
      safeStroke();

      // Vertical ridges
      ctx.strokeStyle = '#93c5fd';
      ctx.lineWidth = 1.1;
      for (let li = -1; li <= 1; li++) {
        safeBeginPath();
        safeMoveTo(cx + li * r * 0.09, cy - r * 0.24);
        safeLineTo(cx + li * r * 0.07, cy - r * 0.56);
        safeStroke();
      }

      // Front jade jewel
      ctx.fillStyle = '#38bdf8';
      safeBeginPath();
      safeArc(cx, cy - r * 0.26, r * 0.048, 0, Math.PI * 2);
      safeFill();

    } else {
      // Specialist (Sage Topknot or Scholar Cowl · 逍遥巾 / 儒巾)
      if (isYoungPrince) {
        ctx.fillStyle = '#1e1b4b';
        ctx.strokeStyle = '#fbbf24';
        ctx.lineWidth = 1.3;
        safeBeginPath();
        safeMoveTo(cx - r * 0.24, cy - r * 0.24);
        safeQuad(cx - r * 0.26, cy - r * 0.48, cx, cy - r * 0.52);
        safeQuad(cx + r * 0.26, cy - r * 0.48, cx + r * 0.24, cy - r * 0.24);
        safeClosePath();
        safeFill();
        safeStroke();

        // Golden Hairpin
        ctx.strokeStyle = '#fbbf24';
        ctx.lineWidth = 2.2;
        safeBeginPath();
        safeMoveTo(cx - r * 0.34, cy - r * 0.34);
        safeLineTo(cx + r * 0.34, cy - r * 0.34);
        safeStroke();

        // Flowing Ribbon Tails
        ctx.strokeStyle = '#818cf8';
        ctx.lineWidth = 1.6;
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
        ctx.lineWidth = 2.2;
        safeBeginPath();
        safeMoveTo(cx - r * 0.30, cy - r * 0.40);
        safeLineTo(cx + r * 0.30, cy - r * 0.40);
        safeStroke();

        // Hairband
        ctx.strokeStyle = '#fbbf24';
        ctx.lineWidth = 1.3;
        safeBeginPath();
        safeMoveTo(cx - r * 0.26, cy - r * 0.22);
        safeQuad(cx, cy - r * 0.32, cx + r * 0.26, cy - r * 0.22);
        safeStroke();
      }
    }

    // 8. Dynastic Cinnabar Seal Stamp inside medallion (鲜亮朱砂方印)
    const sealSize = 25;
    const sealX = cx + r * 0.40;
    const sealY = cy - r * 0.72;

    ctx.fillStyle = '#dc2626';
    ctx.strokeStyle = '#991b1b';
    ctx.lineWidth = 1.3;
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
   * Museum-Grade Craftsmanship: Continuous Leiwen Meanders, Corner Silk Wraps, Architectural Columns.
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

    // 1. Exquisite Imperial Parchment / High-Luminosity Ivory (#ffffff / #fcfbf7 / #fdfcf9)
    const bgGrad = ctx.createLinearGradient(0, 0, W, H);
    bgGrad.addColorStop(0, '#ffffff');
    bgGrad.addColorStop(0.28, '#fdfcf9');
    bgGrad.addColorStop(0.65, '#faf7f0');
    bgGrad.addColorStop(1, '#f6f3eb');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, W, H);

    // Subtle imperial parchment warm amber & emerald radiant glows
    if (ctx.createRadialGradient) {
      try {
        const radGlowTop = ctx.createRadialGradient(W / 2, 140, 20, W / 2, 140, 420);
        radGlowTop.addColorStop(0, 'rgba(245, 158, 11, 0.08)');
        radGlowTop.addColorStop(0.55, 'rgba(251, 191, 36, 0.03)');
        radGlowTop.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = radGlowTop;
        ctx.fillRect(0, 0, W, H);

        const radGlowMid = ctx.createRadialGradient(W / 2, 530, 20, W / 2, 530, 420);
        radGlowMid.addColorStop(0, 'rgba(180, 83, 9, 0.05)');
        radGlowMid.addColorStop(0.6, 'rgba(217, 119, 6, 0.02)');
        radGlowMid.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = radGlowMid;
        ctx.fillRect(0, 0, W, H);

        const radGlowBot = ctx.createRadialGradient(W / 2, 940, 20, W / 2, 940, 380);
        radGlowBot.addColorStop(0, 'rgba(5, 150, 105, 0.06)');
        radGlowBot.addColorStop(0.6, 'rgba(245, 158, 11, 0.03)');
        radGlowBot.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = radGlowBot;
        ctx.fillRect(0, 0, W, H);
      } catch (e) {}
    }

    // Faint antique Bagua celestial astrolabe watermark in center
    if (ctx.beginPath && ctx.arc) {
      ctx.strokeStyle = 'rgba(217, 119, 6, 0.06)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(W / 2, H / 2, 260, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(W / 2, H / 2, 220, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(W / 2, H / 2, 170, 0, Math.PI * 2);
      ctx.stroke();
    }

    // Continuous Cloud-Thunder (云雷纹) Perimeter Meander Border
    SocialCardEngine.drawLeiwenBorder(ctx, 18, 18, W - 36, H - 36, 14);

    // Decorative antique double frame in imperial antique gold (#b45309 & #d97706)
    ctx.strokeStyle = '#b45309';
    ctx.lineWidth = 2.8;
    ctx.strokeRect(26, 26, W - 52, H - 52);

    ctx.strokeStyle = 'rgba(217, 119, 6, 0.75)';
    ctx.lineWidth = 1.3;
    ctx.strokeRect(34, 34, W - 68, H - 68);

    // Traditional Corner Silk Wrapping (四角绫绢包角) on all four corners
    SocialCardEngine.drawCornerSilkWrap(ctx, 26, 26, 36, 'tl');
    SocialCardEngine.drawCornerSilkWrap(ctx, W - 26, 26, 36, 'tr');
    SocialCardEngine.drawCornerSilkWrap(ctx, 26, H - 26, 36, 'bl');
    SocialCardEngine.drawCornerSilkWrap(ctx, W - 26, H - 26, 36, 'br');

    // 6 prominent antique amber-gold celestial stars with 4-point light diffraction flares
    const starFlares = [
      [130, 95], [620, 95], [85, 480], [655, 470], [110, 910], [635, 920]
    ];
    starFlares.forEach(([fx, fy]) => {
      ctx.fillStyle = '#b45309';
      if (ctx.beginPath) ctx.beginPath();
      if (ctx.arc) ctx.arc(fx, fy, 2.2, 0, Math.PI * 2);
      if (ctx.fill) ctx.fill();

      ctx.strokeStyle = 'rgba(180, 83, 9, 0.50)';
      ctx.lineWidth = 1;
      if (ctx.beginPath) ctx.beginPath();
      if (ctx.moveTo) ctx.moveTo(fx - 7, fy);
      if (ctx.lineTo) ctx.lineTo(fx + 7, fy);
      if (ctx.moveTo) ctx.moveTo(fx, fy - 7);
      if (ctx.lineTo) ctx.lineTo(fx, fy + 7);
      if (ctx.stroke) ctx.stroke();
    });

    // 2. Top Imperial Brand & Seal Stamp
    ctx.fillStyle = '#78350f';
    ctx.font = 'bold 20px serif';
    ctx.textAlign = 'center';
    ctx.fillText(data.isEn ? '✦ IMPERIAL ARCHIVE · METAPHYSICS ENGINE ✦' : '✦ 钦 天 监 · 御 制 天 机 战 报 ✦', W / 2, 68);

    // Imperial Vermilion Seal Plaque with Rounded Corners
    const sealBoxW = 124;
    const sealBoxH = 28;
    const sealBoxX = W / 2 - sealBoxW / 2;
    const sealBoxY = 82;
    ctx.fillStyle = '#b91c1c';
    SocialCardEngine.drawRoundedRect(ctx, sealBoxX, sealBoxY, sealBoxW, sealBoxH, 6);
    if (ctx.fill) ctx.fill();
    ctx.strokeStyle = '#d97706';
    ctx.lineWidth = 1.4;
    SocialCardEngine.drawRoundedRect(ctx, sealBoxX, sealBoxY, sealBoxW, sealBoxH, 6);
    if (ctx.stroke) ctx.stroke();

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 14px serif';
    ctx.fillText(data.isEn ? 'SEAL OF FATE' : '钦天御览', W / 2, 102);

    // Decorative golden divider hairline
    ctx.strokeStyle = 'rgba(217, 119, 6, 0.35)';
    ctx.lineWidth = 1;
    if (ctx.beginPath) ctx.beginPath();
    if (ctx.moveTo) ctx.moveTo(80, 120);
    if (ctx.lineTo) ctx.lineTo(W - 80, 120);
    if (ctx.stroke) ctx.stroke();

    // 3. Dais 1: Four Pillars Core Architecture & Calling (4 Architectural Columns)
    const dais1X = 56;
    const dais1Y = 130;
    const dais1W = W - 112;
    const dais1H = 202;
    const daisR = 14;

    ctx.fillStyle = '#fdfbf7';
    SocialCardEngine.drawRoundedRect(ctx, dais1X, dais1Y, dais1W, dais1H, daisR);
    if (ctx.fill) ctx.fill();

    ctx.strokeStyle = 'rgba(217, 119, 6, 0.45)';
    ctx.lineWidth = 1.2;
    SocialCardEngine.drawRoundedRect(ctx, dais1X, dais1Y, dais1W, dais1H, daisR);
    if (ctx.stroke) ctx.stroke();

    // Four Architectural Pillars Grid (Year, Month, Day, Hour)
    const colPad = 12;
    const colW = (dais1W - colPad * 5) / 4;
    const colY = dais1Y + 14;
    const colH = 100;
    const pillarsList = [data.pillarsDetailed.year, data.pillarsDetailed.month, data.pillarsDetailed.day, data.pillarsDetailed.hour];

    pillarsList.forEach((col, idx) => {
      const cx = dais1X + colPad + idx * (colW + colPad);
      const isDayCol = (idx === 2);

      ctx.fillStyle = isDayCol ? '#fef3c7' : '#ffffff';
      SocialCardEngine.drawRoundedRect(ctx, cx, colY, colW, colH, 8);
      if (ctx.fill) ctx.fill();

      ctx.strokeStyle = isDayCol ? '#d97706' : 'rgba(217, 119, 6, 0.3)';
      ctx.lineWidth = isDayCol ? 1.4 : 0.8;
      SocialCardEngine.drawRoundedRect(ctx, cx, colY, colW, colH, 8);
      if (ctx.stroke) ctx.stroke();

      // Top Title & Role
      ctx.fillStyle = '#78350f';
      ctx.font = 'bold 11px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(`${col.label} · ${col.role}`, cx + colW / 2, colY + 16);

      // Ten God Badge
      ctx.fillStyle = isDayCol ? '#b91c1c' : '#475569';
      ctx.font = isDayCol ? 'bold 11px sans-serif' : '10.5px sans-serif';
      ctx.fillText(`[${col.god}]`, cx + colW / 2, colY + 33);

      // Large Calligraphic GanZhi
      ctx.fillStyle = isDayCol ? '#991b1b' : '#0f172a';
      ctx.font = 'bold 24px serif';
      ctx.fillText(col.ganZhi, cx + colW / 2, colY + 62);

      // NaYin Pill
      ctx.fillStyle = '#f8fafc';
      SocialCardEngine.drawRoundedRect(ctx, cx + 8, colY + 74, colW - 16, 18, 4);
      if (ctx.fill) ctx.fill();
      ctx.strokeStyle = 'rgba(148, 163, 184, 0.4)';
      ctx.lineWidth = 0.8;
      SocialCardEngine.drawRoundedRect(ctx, cx + 8, colY + 74, colW - 16, 18, 4);
      if (ctx.stroke) ctx.stroke();

      ctx.fillStyle = '#334155';
      ctx.font = '10px monospace';
      ctx.fillText(col.naYin, cx + colW / 2, colY + 87);
    });

    // Dais 1 Bottom: Primary Calling & Day Master Vigor Summary
    ctx.strokeStyle = 'rgba(217, 119, 6, 0.35)';
    ctx.lineWidth = 1;
    if (ctx.beginPath) ctx.beginPath();
    if (ctx.moveTo) ctx.moveTo(76, dais1Y + 124);
    if (ctx.lineTo) ctx.lineTo(W - 76, dais1Y + 124);
    if (ctx.stroke) ctx.stroke();

    ctx.fillStyle = '#b91c1c';
    ctx.font = 'bold 19px sans-serif';
    ctx.textAlign = 'center';
    this.drawWrappedText(ctx, data.archetypeTitle, W / 2, dais1Y + 148, 590, 22, 1, 'center');

    if (data.archetypeTag) {
      ctx.fillStyle = '#475569';
      ctx.font = '12px sans-serif';
      this.drawWrappedText(ctx, data.archetypeTag, W / 2, dais1Y + 170, 590, 16, 1, 'center');
    }

    ctx.fillStyle = '#18181b';
    ctx.font = '12.5px sans-serif';
    const subText = data.isEn
      ? `Day Master: ${data.dayMaster} · Vigor Score: ${data.score}/100 (${data.tier})`
      : `日元本命：${data.dayMaster} · 子平生克量化活力：${data.score} 分 · 【${data.tier}】`;
    ctx.fillText(subText, W / 2, dais1Y + 192);

    // 4. Dais 2: Grand Historical Soul Mirror & Sage Moat Centerpiece
    const dais2X = 56;
    const dais2Y = 344;
    const dais2W = W - 112;
    const dais2H = 494;
    const dais2R = 16;

    ctx.fillStyle = '#ffffff';
    SocialCardEngine.drawRoundedRect(ctx, dais2X, dais2Y, dais2W, dais2H, dais2R);
    if (ctx.fill) ctx.fill();

    ctx.strokeStyle = 'rgba(180, 83, 9, 0.45)';
    ctx.lineWidth = 1.2;
    SocialCardEngine.drawRoundedRect(ctx, dais2X, dais2Y, dais2W, dais2H, dais2R);
    if (ctx.stroke) ctx.stroke();

    // Centerpiece Header
    ctx.fillStyle = '#78350f';
    ctx.font = 'bold 15px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(data.isEn ? '✦ SOUL MIRROR HISTORICAL PERSONA ✦' : '✦ 天 命 照 命 镜 像 · 先 贤 同 频 ✦', W / 2, dais2Y + 26);

    // Render Atmospheric Classical Stylized Portrait Medallion
    const portraitCx = 152;
    const portraitCy = dais2Y + 106;
    const portraitR = 64;
    this.drawClassicalPortrait(ctx, data, portraitCx, portraitCy, portraitR);

    // Under-Portrait Dynasty Era Tablet
    const eraPillW = 118;
    const eraPillH = 22;
    const eraPillX = portraitCx - eraPillW / 2;
    const eraPillY = portraitCy + portraitR + 8;
    ctx.fillStyle = '#fefce8';
    SocialCardEngine.drawRoundedRect(ctx, eraPillX, eraPillY, eraPillW, eraPillH, 6);
    if (ctx.fill) ctx.fill();
    ctx.strokeStyle = '#b45309';
    ctx.lineWidth = 1.2;
    SocialCardEngine.drawRoundedRect(ctx, eraPillX, eraPillY, eraPillW, eraPillH, 6);
    if (ctx.stroke) ctx.stroke();

    ctx.fillStyle = '#78350f';
    ctx.font = 'bold 11px sans-serif';
    ctx.textAlign = 'center';
    const eraStr = data.figureDynasty || (data.isEn ? 'Sage Era' : '先贤纪元');
    ctx.fillText(eraStr, portraitCx, eraPillY + 15);

    // Right of Portrait: Historical Persona Profile Panel
    const profileX = 238;
    const profileW = 432;

    // Line 1: Figure Name & Affinity Resonance Score
    ctx.textAlign = 'left';
    ctx.fillStyle = '#0f172a';
    ctx.font = 'bold 27px serif';

    const rawFigName = data.figureName || (data.isEn ? 'Historical Sage' : '先贤宗师');
    let displayFigName = rawFigName;
    if (data.isEn && rawFigName.includes('(')) {
      displayFigName = rawFigName.split('(')[0].trim();
    }
    ctx.fillText(displayFigName, profileX, dais2Y + 68);

    // Affinity Score Badge (warm amber pill)
    const affW = 115;
    const affH = 26;
    const affX = W - 195;
    const affY = dais2Y + 48;
    ctx.fillStyle = '#fff7ed';
    SocialCardEngine.drawRoundedRect(ctx, affX, affY, affW, affH, 6);
    if (ctx.fill) ctx.fill();
    ctx.strokeStyle = '#d97706';
    ctx.lineWidth = 1.2;
    SocialCardEngine.drawRoundedRect(ctx, affX, affY, affW, affH, 6);
    if (ctx.stroke) ctx.stroke();

    ctx.fillStyle = '#b45309';
    ctx.font = 'bold 13.5px monospace';
    ctx.textAlign = 'center';
    ctx.fillText(data.isEn ? `${data.figureSim} Match` : `⚡ ${data.figureSim} 同频`, affX + affW / 2, affY + 18);

    // Line 2: Historical Official Position & Credentials
    ctx.textAlign = 'left';
    ctx.fillStyle = '#334155';
    ctx.font = '13.5px sans-serif';
    this.drawWrappedText(ctx, data.figurePosition, profileX, dais2Y + 96, profileW, 19, 2, 'left');

    // Line 3: Archetype Vocation Pill
    const archPillY = dais2Y + 148;
    const archPillW = 220;
    const archPillH = 24;
    ctx.fillStyle = '#eff6ff';
    SocialCardEngine.drawRoundedRect(ctx, profileX, archPillY - 14, archPillW, archPillH, 6);
    if (ctx.fill) ctx.fill();
    ctx.strokeStyle = '#2563eb';
    ctx.lineWidth = 1.2;
    SocialCardEngine.drawRoundedRect(ctx, profileX, archPillY - 14, archPillW, archPillH, 6);
    if (ctx.stroke) ctx.stroke();

    ctx.fillStyle = '#1d4ed8';
    ctx.font = 'bold 12px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(data.figureArchetypeLabel, profileX + archPillW / 2, archPillY + 3);

    // Delicate Golden Separator Hairline
    ctx.strokeStyle = 'rgba(217, 119, 6, 0.35)';
    ctx.lineWidth = 1;
    if (ctx.beginPath) ctx.beginPath();
    if (ctx.moveTo) ctx.moveTo(80, dais2Y + 182);
    if (ctx.lineTo) ctx.lineTo(W - 80, dais2Y + 182);
    if (ctx.stroke) ctx.stroke();

    // Soul Resonance Quote
    ctx.fillStyle = '#1e293b';
    ctx.font = 'italic 13.5px serif';
    this.drawWrappedText(ctx, data.figureQuote, W / 2, dais2Y + 208, 590, 20, 2, 'center');

    // Two Substantive Parchment Panels (Key Legacy & Karmic Lesson)
    // Panel 1: Key Legacy & Strategic Moat (立身功业)
    const legY = dais2Y + 246;
    const cardH = 98;
    const legW = W - 152;
    ctx.fillStyle = '#fefce8';
    SocialCardEngine.drawRoundedRect(ctx, 76, legY, legW, cardH, 10);
    if (ctx.fill) ctx.fill();
    ctx.strokeStyle = 'rgba(217, 119, 6, 0.35)';
    ctx.lineWidth = 1;
    SocialCardEngine.drawRoundedRect(ctx, 76, legY, legW, cardH, 10);
    if (ctx.stroke) ctx.stroke();

    // Left Golden Accent Bar
    ctx.fillStyle = '#d97706';
    SocialCardEngine.drawRoundedRect(ctx, 76, legY, 4, cardH, 2);
    if (ctx.fill) ctx.fill();

    ctx.textAlign = 'left';
    ctx.fillStyle = '#78350f';
    ctx.font = 'bold 13px sans-serif';
    ctx.fillText(data.isEn ? '✦ KEY LEGACY & STRATEGIC MOAT ✦' : '✦ 立身功业 · 传世绝学壁垒 ✦', 94, legY + 22);

    ctx.fillStyle = '#18181b';
    ctx.font = '13px sans-serif';
    this.drawWrappedText(ctx, data.figureLegacy, 94, legY + 44, 560, 20, 3, 'left');

    // Panel 2: Karmic Lesson & Strategic Safeguards (天机诫勉)
    const advY = dais2Y + 360;
    ctx.fillStyle = '#fff1f2';
    SocialCardEngine.drawRoundedRect(ctx, 76, advY, legW, cardH, 10);
    if (ctx.fill) ctx.fill();
    ctx.strokeStyle = 'rgba(239, 68, 68, 0.35)';
    ctx.lineWidth = 1;
    SocialCardEngine.drawRoundedRect(ctx, 76, advY, legW, cardH, 10);
    if (ctx.stroke) ctx.stroke();

    // Left Cinnabar Accent Bar
    ctx.fillStyle = '#dc2626';
    SocialCardEngine.drawRoundedRect(ctx, 76, advY, 4, cardH, 2);
    if (ctx.fill) ctx.fill();

    ctx.textAlign = 'left';
    ctx.fillStyle = '#b91c1c';
    ctx.font = 'bold 13px sans-serif';
    ctx.fillText(data.isEn ? '✦ KARMIC LESSON & STRATEGIC SAFEGUARDS ✦' : '✦ 天机诫勉 · 避坑破局心法 ✦', 94, advY + 22);

    ctx.fillStyle = '#18181b';
    ctx.font = '13px sans-serif';
    this.drawWrappedText(ctx, data.figureAdvice, 94, advY + 44, 560, 20, 3, 'left');

    // 5. Dais 3: Annual Transit Hexagram & Strategic Guidance
    const dais3X = 56;
    const dais3Y = 852;
    const dais3W = W - 112;
    const dais3H = 196;
    const dais3R = 16;

    ctx.fillStyle = '#f8fafc';
    SocialCardEngine.drawRoundedRect(ctx, dais3X, dais3Y, dais3W, dais3H, dais3R);
    if (ctx.fill) ctx.fill();

    ctx.strokeStyle = 'rgba(217, 119, 6, 0.40)';
    ctx.lineWidth = 1.2;
    SocialCardEngine.drawRoundedRect(ctx, dais3X, dais3Y, dais3W, dais3H, dais3R);
    if (ctx.stroke) ctx.stroke();

    ctx.fillStyle = '#78350f';
    ctx.font = 'bold 20px serif';
    ctx.textAlign = 'center';
    const hexTitle = data.isEn
      ? `${data.annualYear} Annual Transit: Hexagram [${data.hexName}]`
      : `${data.annualYear} ${data.annualGanzhi}年 · 值年卦【${data.hexName}】`;
    ctx.fillText(hexTitle, W / 2, dais3Y + 34);

    // Trigram structure subtitle
    ctx.fillStyle = '#b45309';
    ctx.font = 'bold 12px monospace';
    ctx.fillText(data.hexStructure, W / 2, dais3Y + 54);

    // Directive wrapped
    ctx.fillStyle = '#18181b';
    ctx.font = '14px sans-serif';
    this.drawWrappedText(ctx, data.hexDirective, W / 2, dais3Y + 80, 570, 22, 2, 'center');

    // Action banner - Vibrant Emerald-Gold Gradient with High-Contrast White Text
    const bannerW = 580;
    const bannerH = 42;
    const bannerX = W / 2 - bannerW / 2;
    const bannerY = dais3Y + 138;

    let bannerGrad = null;
    if (ctx.createLinearGradient) {
      try {
        bannerGrad = ctx.createLinearGradient(bannerX, bannerY, bannerX + bannerW, bannerY + bannerH);
      } catch (e) {}
    }
    if (bannerGrad) {
      bannerGrad.addColorStop(0, '#065f46');
      bannerGrad.addColorStop(0.35, '#047857');
      bannerGrad.addColorStop(0.7, '#059669');
      bannerGrad.addColorStop(1, '#065f46');
      ctx.fillStyle = bannerGrad;
    } else {
      ctx.fillStyle = '#047857';
    }
    SocialCardEngine.drawRoundedRect(ctx, bannerX, bannerY, bannerW, bannerH, 10);
    if (ctx.fill) ctx.fill();

    ctx.strokeStyle = '#059669';
    ctx.lineWidth = 1.5;
    SocialCardEngine.drawRoundedRect(ctx, bannerX, bannerY, bannerW, bannerH, 10);
    if (ctx.stroke) ctx.stroke();

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 14.5px sans-serif';
    const actionText = data.isEn
      ? 'Direct Action: Build undeniable craft & let works speak.'
      : '年度行持：以硬核作品立世，顺应天理，游刃有余。';
    ctx.textAlign = 'center';
    ctx.fillText(actionText, W / 2, bannerY + 26);

    // 6. Footer Brand & Link
    ctx.fillStyle = '#475569';
    ctx.font = '13px monospace';
    ctx.textAlign = 'center';
    ctx.fillText('bazi-git-main-fategranted-afk.vercel.app', W / 2, 1076);

    ctx.fillStyle = '#18181b';
    ctx.font = '12px sans-serif';
    ctx.fillText(data.isEn ? 'BaZi-AI · Agentic Metaphysics & Decision Engine' : '八字排盘与现代战略决策引擎 · 东方数理全息', W / 2, 1100);
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
