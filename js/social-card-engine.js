/**
 * 社交名片 · 竖屏高颜值社交战报生成引擎 (Social Identity Card Engine)
 * Renders high-fidelity vertical mobile aesthetic cards (Canvas 2D) & generates social share text.
 * 100% Offline-First, deterministic, and fully bilingual (zh/en).
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

    const measure = (t) => {
      if (ctx.measureText && typeof ctx.measureText === 'function') {
        try {
          return ctx.measureText(t).width;
        } catch (e) {}
      }
      return t.length * 10;
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

    // Historical Soul Mirror
    let figureNameZh = '王阳明';
    let figureNameEn = 'Wang Yangming';
    let figureSim = '89.4%';
    let figureQuoteZh = '“破山中贼易，破心中贼难。事上磨炼，知行合一。”';
    let figureQuoteEn = '"Easier to defeat external foes than inner demons. Forge virtue through daily action."';

    if (typeof HistoricalEngine !== 'undefined' && typeof HistoricalEngine.calculateSimilarity === 'function') {
      try {
        const hMatch = HistoricalEngine.calculateSimilarity(safeBazi, luck);
        if (hMatch && hMatch.topMatch) {
          figureNameZh = hMatch.topMatch.nameZh || '王阳明';
          figureNameEn = hMatch.topMatch.nameEn || 'Wang Yangming';
          figureSim = (hMatch.topMatch.similarityScore || 89.4) + '%';
          if (hMatch.topMatch.historicalQuoteZh) {
            figureQuoteZh = `“${hMatch.topMatch.historicalQuoteZh.replace(/^[“"']|[”"']$/g, '')}”`;
          }
          if (hMatch.topMatch.historicalQuoteEn) {
            figureQuoteEn = `"${hMatch.topMatch.historicalQuoteEn.replace(/^[“"']|[”"']$/g, '')}"`;
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
      figureName: isEn ? figureNameEn : figureNameZh,
      figureSim: figureSim,
      figureQuote: isEn ? figureQuoteEn : figureQuoteZh,
      annualYear: annualYear,
      annualGanzhi: annualGanzhi,
      hexName: isEn ? hexNameEn : hexNameZh,
      hexDirective: isEn ? hexDirectiveEn : hexDirectiveZh
    };
  }

  /**
   * Render vertical aesthetic social card onto Canvas
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
    ctx.fillText(data.isEn ? 'IMPERIAL ARCHIVE · METAPHYSICS ENGINE' : '✦ 钦 天 监 · 御 制 天 机 战 报 ✦', W / 2, 76);

    // Seal Box
    ctx.strokeStyle = '#b91c1c';
    ctx.lineWidth = 2;
    ctx.strokeRect(W / 2 - 55, 96, 110, 34);
    ctx.fillStyle = '#ef4444';
    ctx.font = 'bold 16px serif';
    ctx.fillText(data.isEn ? 'SEAL OF FATE' : '钦天御览', W / 2, 120);

    // 3. Four Pillars Display Bar (Box 1)
    const box1Y = 152;
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
    const box2Y = 248;
    const box2H = 128;
    ctx.fillStyle = '#161926';
    ctx.fillRect(60, box2Y, W - 120, box2H);
    ctx.strokeStyle = '#d97706';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(60, box2Y, W - 120, box2H);

    // Main Calling Title
    ctx.fillStyle = '#fbbf24';
    ctx.font = 'bold 23px sans-serif';
    this.drawWrappedText(ctx, data.archetypeTitle, W / 2, box2Y + 38, 590, 26, 1, 'center');

    // Subtitle keywords
    if (data.archetypeTag) {
      ctx.fillStyle = '#fde68a';
      ctx.font = '13px sans-serif';
      this.drawWrappedText(ctx, data.archetypeTag, W / 2, box2Y + 70, 590, 18, 1, 'center');
    }

    // Vigor score
    ctx.fillStyle = '#e2e8f0';
    ctx.font = '14px sans-serif';
    const subText = data.isEn
      ? `ZiPing Vigor Score: ${data.score}/100 (${data.tier})`
      : `子平生克量化活力：${data.score} 分 · 【${data.tier}】`;
    ctx.fillText(subText, W / 2, box2Y + 104);

    // 5. Workplace Archetype 4 Niches Ladder (Box 3)
    const box3Y = 394;
    const box3H = 186;
    ctx.fillStyle = '#10131e';
    ctx.fillRect(60, box3Y, W - 120, box3H);
    ctx.strokeStyle = '#333b4f';
    ctx.lineWidth = 1;
    ctx.strokeRect(60, box3Y, W - 120, box3H);

    ctx.fillStyle = '#9ca3af';
    ctx.font = 'bold 15px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(data.isEn ? '✦ WORKPLACE ECOLOGICAL NICHES ✦' : '✦ 天 命 职 能 四 大 生 态 位 定 向 ✦', W / 2, box3Y + 32);

    let startY = box3Y + 66;
    data.niches.forEach((n, idx) => {
      // Label on the left
      ctx.fillStyle = '#e5e7eb';
      ctx.font = '14px sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText(`${n.icon || ''} ${n.name}`, 80, startY);

      // Track
      const trackX = 220;
      const trackW = 380;
      ctx.fillStyle = '#1c2132';
      ctx.fillRect(trackX, startY - 12, trackW, 12);

      // Active bar
      const barColor = idx === 0 ? '#10b981' : idx === 1 ? '#3b82f6' : idx === 2 ? '#f59e0b' : '#818cf8';
      ctx.fillStyle = barColor;
      const fillW = Math.min(trackW, Math.max(8, (n.score / 100) * trackW));
      ctx.fillRect(trackX, startY - 12, fillW, 12);

      // Score on the right
      ctx.fillStyle = '#fbbf24';
      ctx.font = 'bold 14px monospace';
      ctx.textAlign = 'right';
      ctx.fillText(data.isEn ? `${n.score}` : `${n.score} 分`, 655, startY);

      startY += 27;
    });

    // 6. Soul Mirror Historical Figure Card (Box 4)
    const box4Y = 598;
    const box4H = 172;
    ctx.fillStyle = '#151726';
    ctx.fillRect(60, box4Y, W - 120, box4H);
    ctx.strokeStyle = '#4f46e5';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(60, box4Y, W - 120, box4H);

    ctx.fillStyle = '#a5b4fc';
    ctx.font = 'bold 15px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(data.isEn ? '✦ SOUL MIRROR HISTORICAL PERSONA ✦' : '✦ 天 命 照 命 镜 像 · 先 贤 同 频 ✦', W / 2, box4Y + 32);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 22px serif';
    ctx.fillText(`${data.figureName}  (${data.figureSim})`, W / 2, box4Y + 70);

    // Multi-line wrapped quote
    ctx.fillStyle = '#cbd5e1';
    ctx.font = 'italic 13.5px serif';
    this.drawWrappedText(ctx, data.figureQuote, W / 2, box4Y + 106, 570, 22, 2, 'center');

    // 7. Annual Transit Hexagram & Strategic Guidance (Box 5)
    const box5Y = 788;
    const box5H = 188;
    ctx.fillStyle = '#181523';
    ctx.fillRect(60, box5Y, W - 120, box5H);
    ctx.strokeStyle = '#b45309';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(60, box5Y, W - 120, box5H);

    ctx.fillStyle = '#f59e0b';
    ctx.font = 'bold 18px sans-serif';
    ctx.textAlign = 'center';
    const hexTitle = data.isEn
      ? `${data.annualYear} Annual Transit: Hexagram [${data.hexName}]`
      : `${data.annualYear} ${data.annualGanzhi}年 · 值年卦【${data.hexName}】`;
    ctx.fillText(hexTitle, W / 2, box5Y + 34);

    // Directive wrapped
    ctx.fillStyle = '#e2e8f0';
    ctx.font = '14.5px sans-serif';
    this.drawWrappedText(ctx, data.hexDirective, W / 2, box5Y + 72, 570, 22, 2, 'center');

    // Action banner
    ctx.fillStyle = '#34d399';
    ctx.font = 'bold 14px sans-serif';
    const actionText = data.isEn
      ? 'Direct Action: Consolidate core skills & output tangible works.'
      : '年度行持：以硬核作品立世，顺应天理，游刃有余。';
    this.drawWrappedText(ctx, actionText, W / 2, box5Y + 148, 570, 20, 1, 'center');

    // 8. Footer Brand & Link
    ctx.fillStyle = '#6b7280';
    ctx.font = '13px monospace';
    ctx.textAlign = 'center';
    ctx.fillText('bazi-git-main-fategranted-afk.vercel.app', W / 2, 1022);

    ctx.fillStyle = '#4b5563';
    ctx.font = '12px sans-serif';
    ctx.fillText(data.isEn ? 'BaZi-AI · Agentic Metaphysics & Decision Engine' : '八字排盘与现代战略决策引擎 · 东方数理全息', W / 2, 1046);
  }

  /**
   * Generate copyable text summary for social media
   */
  static generateSocialCopyText(bazi, luck, lang = 'zh') {
    const data = this.extractCardData(bazi, luck, lang);
    if (data.isEn) {
      return `👑 BaZi-AI Decision Engine Profile:
🌌 Day Master: [${data.dayMaster}] | Vigor Score: ${data.score}/100 (${data.tier})
🏆 Career Calling: ${data.archetypeTitle}
🪞 Soul Mirror Figure: ${data.figureName} (Resonance: ${data.figureSim})
☯️ 2026 Transit Hexagram: [${data.hexName}]
🎯 Annual Directive: "${data.hexDirective}"
🔗 Explore your destiny blueprint: https://bazi-git-main-fategranted-afk.vercel.app`;
    }

    return `👑 【我的东方数理命盘与战略战报】
🌌 日元本命：[${data.dayMaster}] | 子平活力：${data.score}分（${data.tier}）
🏆 天命职能：${data.archetypeTitle}
🪞 照命先贤：${data.figureName}（心智契合度：${data.figureSim}）
☯️ 2026值年卦：【${data.hexName}】
🎯 年度行持密卷：“${data.hexDirective}”
🔗 测算你的天命决策蓝图：https://bazi-git-main-fategranted-afk.vercel.app`;
  }
}

if (typeof window !== 'undefined') {
  window.SocialCardEngine = SocialCardEngine;
}
if (typeof globalThis !== 'undefined') {
  globalThis.SocialCardEngine = SocialCardEngine;
}
