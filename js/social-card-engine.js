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

    // Archetype Title
    let archetypeTitleZh = '技术人员 · 首席天命主场';
    let archetypeTitleEn = 'Specialist & Engineering · Prime Calling';
    let niches = [
      { name: isEn ? 'Specialist' : '技术研发', score: 96 },
      { name: isEn ? 'Civil Admin' : '文职治理', score: 82 },
      { name: isEn ? 'Executive' : '操盘统帅', score: 68 },
      { name: isEn ? 'Frontline' : '武职开拓', score: 45 }
    ];

    if (typeof CareerEngine !== 'undefined' && typeof CareerEngine.computeWorkplaceArchetypes === 'function') {
      try {
        const archs = CareerEngine.computeWorkplaceArchetypes(safeBazi, lang);
        if (archs && archs.length >= 4) {
          archetypeTitleZh = `${archs[0].nameZh || '技术人员'} · 首席天命主场`;
          archetypeTitleEn = `${archs[0].nameEn || 'Specialist & Engineering'} · Prime Calling`;
          niches = archs.slice(0, 4).map(a => ({
            name: isEn ? (a.nameEn || 'Specialist') : (a.nameZh || '技术人员'),
            score: a.rawScore || a.fitScore || a.score || 80
          }));
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
          figureQuoteZh = hMatch.topMatch.historicalQuoteZh || figureQuoteZh;
          figureQuoteEn = hMatch.topMatch.historicalQuoteEn || figureQuoteEn;
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
    bgGrad.addColorStop(0, '#0e111a');
    bgGrad.addColorStop(0.4, '#17141f');
    bgGrad.addColorStop(1, '#0a0d14');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, W, H);

    // Decorative antique double frame
    ctx.strokeStyle = '#926a38';
    ctx.lineWidth = 3;
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
      ctx.arc(cx, cy, 5, 0, Math.PI * 2);
      ctx.fill();
    });

    // 2. Top Imperial Brand & Seal Stamp
    ctx.fillStyle = '#b45309';
    ctx.font = 'bold 22px serif';
    ctx.textAlign = 'center';
    ctx.fillText(data.isEn ? 'IMPERIAL ARCHIVE · METAPHYSICS ENGINE' : '✦ 钦 天 监 · 御 制 天 机 战 报 ✦', W / 2, 85);

    // Seal Box
    ctx.strokeStyle = '#b91c1c';
    ctx.lineWidth = 2;
    ctx.strokeRect(W / 2 - 65, 105, 130, 42);
    ctx.fillStyle = '#ef4444';
    ctx.font = 'bold 18px serif';
    ctx.fillText(data.isEn ? 'SEAL OF FATE' : '钦天御览', W / 2, 133);

    // 3. Four Pillars Display Bar
    ctx.fillStyle = '#1c1e2d';
    ctx.fillRect(60, 175, W - 120, 80);
    ctx.strokeStyle = '#374151';
    ctx.lineWidth = 1;
    ctx.strokeRect(60, 175, W - 120, 80);

    ctx.fillStyle = '#f59e0b';
    ctx.font = 'bold 26px sans-serif';
    ctx.fillText(data.pillarsStr, W / 2, 222);

    ctx.fillStyle = '#9ca3af';
    ctx.font = '14px sans-serif';
    ctx.fillText(data.isEn ? 'Four Pillars GanZhi Matrix · Day Master: ' + data.dayMaster : '命造四柱干支统揽 · 日元统摄：' + data.dayMaster, W / 2, 246);

    // 4. Personality & Archetype Title Box
    ctx.fillStyle = '#181b2a';
    ctx.fillRect(60, 280, W - 120, 135);
    ctx.strokeStyle = '#d97706';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(60, 280, W - 120, 135);

    ctx.fillStyle = '#fbbf24';
    ctx.font = 'bold 26px sans-serif';
    ctx.fillText(data.archetypeTitle, W / 2, 330);

    ctx.fillStyle = '#e5e7eb';
    ctx.font = '16px sans-serif';
    const subText = data.isEn
      ? `ZiPing Vigor Score: ${data.score}/100 (${data.tier})`
      : `子平生克量化活力：${data.score} 分 · 【${data.tier}】`;
    ctx.fillText(subText, W / 2, 370);

    // 5. Workplace Archetype 4 Niches Ladder
    ctx.fillStyle = '#111422';
    ctx.fillRect(60, 440, W - 120, 175);
    ctx.strokeStyle = '#374151';
    ctx.lineWidth = 1;
    ctx.strokeRect(60, 440, W - 120, 175);

    ctx.fillStyle = '#9ca3af';
    ctx.font = 'bold 15px sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(data.isEn ? 'WORKPLACE ECOLOGICAL NICHES' : '天命职能四大生态位定向', 85, 475);

    let startY = 505;
    data.niches.forEach((n, idx) => {
      ctx.fillStyle = '#d1d5db';
      ctx.font = '14px sans-serif';
      ctx.fillText(n.name, 85, startY);

      // Bar track
      ctx.fillStyle = '#1f2937';
      ctx.fillRect(230, startY - 12, 380, 12);

      // Active bar
      const barColor = idx === 0 ? '#10b981' : idx === 1 ? '#3b82f6' : idx === 2 ? '#f59e0b' : '#6b7280';
      ctx.fillStyle = barColor;
      ctx.fillRect(230, startY - 12, (n.score / 100) * 380, 12);

      // Score
      ctx.fillStyle = '#fbbf24';
      ctx.font = 'bold 14px sans-serif';
      ctx.fillText(String(n.score), 630, startY);

      startY += 26;
    });

    // 6. Soul Mirror Historical Figure Card
    ctx.textAlign = 'center';
    ctx.fillStyle = '#181b2a';
    ctx.fillRect(60, 640, W - 120, 170);
    ctx.strokeStyle = '#4f46e5';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(60, 640, W - 120, 170);

    ctx.fillStyle = '#818cf8';
    ctx.font = 'bold 18px sans-serif';
    ctx.fillText(data.isEn ? 'SOUL MIRROR HISTORICAL PERSONA' : '✦ 天 命 照 命 镜 像 · 先 贤 同 频 ✦', W / 2, 678);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 24px serif';
    ctx.fillText(`${data.figureName}  (${data.figureSim})`, W / 2, 720);

    ctx.fillStyle = '#9ca3af';
    ctx.font = 'italic 15px sans-serif';
    ctx.fillText(data.figureQuote, W / 2, 765);

    // 7. Annual Transit Hexagram & Strategic Guidance
    ctx.fillStyle = '#1c1825';
    ctx.fillRect(60, 835, W - 120, 175);
    ctx.strokeStyle = '#b45309';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(60, 835, W - 120, 175);

    ctx.fillStyle = '#f59e0b';
    ctx.font = 'bold 18px sans-serif';
    const hexTitle = data.isEn
      ? `${data.annualYear} Annual Transit: Hexagram [${data.hexName}]`
      : `${data.annualYear} ${data.annualGanzhi}年 · 值年卦【${data.hexName}】`;
    ctx.fillText(hexTitle, W / 2, 875);

    ctx.fillStyle = '#e5e7eb';
    ctx.font = '16px sans-serif';
    ctx.fillText(data.hexDirective, W / 2, 925);

    ctx.fillStyle = '#10b981';
    ctx.font = 'bold 15px sans-serif';
    ctx.fillText(data.isEn ? 'Direct Action: Consolidate core skills & output tangible works.' : '年度行持：以硬核作品立世，顺应天理，游刃有余。', W / 2, 965);

    // 8. Footer Brand & Link
    ctx.fillStyle = '#4b5563';
    ctx.font = '14px monospace';
    ctx.fillText('bazi-git-main-fategranted-afk.vercel.app', W / 2, 1070);

    ctx.fillStyle = '#6b7280';
    ctx.font = '13px sans-serif';
    ctx.fillText(data.isEn ? 'BaZi-AI · Agentic Metaphysics & Decision Engine' : '八字排盘与现代战略决策引擎 · 东方数理全息', W / 2, 1095);
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
