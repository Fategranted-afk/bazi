/**
 * 历史人物参考与相似度测算引擎 (Historical Figures Reference & Similarity Engine)
 * Grounded in 300 Years of Northern and Southern Division (265 AD - 589 AD):
 * Western Jin, Sixteen Kingdoms, Eastern Jin, Southern Dynasties, Northern Wei, Eastern/Western Wei, Northern Qi/Zhou, and Sui.
 * Compares Native's BaZi (Day Master, 100-pt Score, Patterns, Ten Gods, Archetypes)
 * against 104 Historical Figures to calculate multi-dimensional similarity,
 * top soul mirror, actionable strengths to learn, and critical pitfalls to avoid.
 * Strictly bilingual with 100% zero residual Chinese in English mode.
 */

class HistoricalEngine {
  static getDataset() {
    if (typeof HISTORICAL_FIGURES !== 'undefined') {
      return HISTORICAL_FIGURES;
    }
    if (typeof window !== 'undefined' && window.HISTORICAL_FIGURES) {
      return window.HISTORICAL_FIGURES;
    }
    try {
      const dataModule = require('../data/historical_figures.js');
      return dataModule.HISTORICAL_FIGURES || [];
    } catch (e) {
      return [];
    }
  }

  /**
   * Calculates similarity between native BaZi and 104 historical figures
   * @param {Object} bazi - BaZi calculated result from BaZiEngine
   * @param {Object} luck - LuckEngine result (optional)
   * @param {Object} careerReport - CareerEngine result (optional)
   * @returns {Object} Comprehensive similarity report
   */
  static calculateSimilarity(bazi, luck = null, careerReport = null) {
    const dataset = this.getDataset();
    if (!bazi || !dataset || dataset.length === 0) {
      return null;
    }

    const STEM_ELEMENTS = {
      '甲': '木', '乙': '木', '丙': '火', '丁': '火', '戊': '土',
      '己': '土', '庚': '金', '辛': '金', '壬': '水', '癸': '水'
    };
    const GENERATES = { '木': '火', '火': '土', '土': '金', '金': '水', '水': '木' };
    const CONTROLS = { '木': '土', '土': '水', '水': '火', '火': '金', '金': '木' };

    // Extract Day Master & Elemental Profile
    const dm = bazi.dayMaster || (bazi.pillars && bazi.pillars.day && bazi.pillars.day.stem) || '甲';
    const dmEl = bazi.dayMasterElement || STEM_ELEMENTS[dm] || '木';
    const score100 = (typeof bazi.score100 === 'number') ? bazi.score100 : 50;
    const strengthGrade = bazi.strengthGrade || (score100 >= 50 ? '较旺格' : '较弱格');
    const favorableElements = bazi.favorableElements || [];

    // Extract Primary & Secondary Patterns
    let primaryPattern = '建禄格';
    let patternList = [];
    if (bazi.patterns && Array.isArray(bazi.patterns) && bazi.patterns.length > 0) {
      primaryPattern = bazi.patterns[0].name || bazi.patterns[0].pattern || '建禄格';
      patternList = bazi.patterns.map(p => p.name || p.pattern || '');
    } else if (bazi.primaryPattern) {
      primaryPattern = bazi.primaryPattern;
      patternList = [primaryPattern];
    }

    // Extract Native Dominant Ten Gods
    const nativeTenGods = new Set();
    if (bazi.pillars) {
      ['year', 'month', 'hour'].forEach(k => {
        if (bazi.pillars[k]) {
          if (bazi.pillars[k].tenGod) nativeTenGods.add(bazi.pillars[k].tenGod);
          if (bazi.pillars[k].stemTenGod) nativeTenGods.add(bazi.pillars[k].stemTenGod);
          if (bazi.pillars[k].hiddenStems) {
            bazi.pillars[k].hiddenStems.forEach(hs => {
              if (hs.tenGod) nativeTenGods.add(hs.tenGod);
            });
          }
        }
      });
    }
    // Fallback common gods if none extracted
    if (nativeTenGods.size === 0) {
      nativeTenGods.add('正官');
      nativeTenGods.add('正印');
    }

    // Workplace Archetype Rankings from CareerEngine
    let rank1Arch = 'executive';
    let rank2Arch = 'military';
    let rank3Arch = 'civil';
    let rank4Arch = 'specialist';

    if (careerReport && Array.isArray(careerReport.workplaceArchetypes) && careerReport.workplaceArchetypes.length >= 4) {
      rank1Arch = careerReport.workplaceArchetypes[0].id;
      rank2Arch = careerReport.workplaceArchetypes[1].id;
      rank3Arch = careerReport.workplaceArchetypes[2].id;
      rank4Arch = careerReport.workplaceArchetypes[3].id;
    } else {
      // Deduce from pattern if career report not supplied
      if (primaryPattern.includes('七杀') || primaryPattern.includes('羊刃') || primaryPattern.includes('建禄')) {
        rank1Arch = 'military'; rank2Arch = 'executive'; rank3Arch = 'technical'; rank4Arch = 'civil';
      } else if (primaryPattern.includes('食神') || primaryPattern.includes('伤官') || primaryPattern.includes('偏印')) {
        rank1Arch = 'specialist'; rank2Arch = 'executive'; rank3Arch = 'civil'; rank4Arch = 'military';
      } else if (primaryPattern.includes('正官') || primaryPattern.includes('正印') || primaryPattern.includes('印')) {
        rank1Arch = 'civil'; rank2Arch = 'executive'; rank3Arch = 'specialist'; rank4Arch = 'military';
      } else {
        rank1Arch = 'executive'; rank2Arch = 'civil'; rank3Arch = 'specialist'; rank4Arch = 'military';
      }
    }

    // Hash helper for deterministic micro-distribution
    function getHash(str) {
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
        hash = (hash * 31 + str.charCodeAt(i)) & 0xffffffff;
      }
      return Math.abs(hash % 1000) / 1000;
    }

    // Calculate similarity for all figures
    const scoredFigures = dataset.map((fig, idx) => {
      // 1. Element Affinity (Max 25 pts)
      let elScore = 14;
      const fDom = fig.fiveElements.dominant;
      const fSec = fig.fiveElements.secondary;
      if (fDom === dmEl) {
        elScore += 10;
      } else if (GENERATES[fDom] === dmEl) {
        // Resource generates DM
        elScore += 8.5;
      } else if (GENERATES[dmEl] === fDom) {
        // DM generates Output
        elScore += 7.5;
      } else if (CONTROLS[dmEl] === fDom) {
        // DM controls Wealth
        elScore += 6.5;
      } else {
        // Officer controls DM
        elScore += 5.5;
      }
      if (fSec === dmEl || GENERATES[fSec] === dmEl) {
        elScore += 2;
      }
      if (favorableElements.includes(fDom)) {
        elScore += 2;
      }
      elScore = Math.min(25, Math.max(12, elScore));

      // 2. Ten Gods & Pattern Resonance (Max 35 pts)
      let patternScore = 18;
      // Check pattern type match
      const pType = fig.patternType || '';
      if (pType && patternList.some(p => p.includes(pType) || pType.includes(p))) {
        patternScore += 8;
      } else if (pType && pType.includes(primaryPattern.slice(0, 2))) {
        patternScore += 6;
      }

      // Check Ten Gods overlap
      const figGods = fig.tenGodsAffinity || [];
      let overlapCount = 0;
      figGods.forEach(g => {
        if (nativeTenGods.has(g)) overlapCount++;
      });
      patternScore += Math.min(10, overlapCount * 3.5);
      patternScore = Math.min(35, Math.max(16, patternScore));

      // 3. Workplace Archetype Alignment (Max 20 pts)
      let archScore = 8;
      const figArch = fig.archetype;
      if (figArch === rank1Arch) {
        archScore = 20;
      } else if (figArch === rank2Arch) {
        archScore = 15;
      } else if (figArch === rank3Arch) {
        archScore = 11;
      } else {
        archScore = 7;
      }

      // 4. Energy & Temperament Alignment (Max 20 pts)
      let energyScore = 12;
      const isStrong = score100 >= 50;
      const aggressiveArchetypes = ['military', 'executive'];
      if (isStrong) {
        if (aggressiveArchetypes.includes(figArch)) {
          energyScore += 6;
        } else {
          energyScore += 3;
        }
      } else {
        // Weak or moderate benefits from civil or specialist thinkers
        if (!aggressiveArchetypes.includes(figArch)) {
          energyScore += 6;
        } else {
          energyScore += 3;
        }
      }
      // Closeness of score
      const microHash = getHash(fig.id + dm + primaryPattern);
      energyScore += (microHash * 1.8);
      energyScore = Math.min(20, Math.max(10, energyScore));

      // Total Raw Score (65.0 ~ 98.0)
      let totalRaw = elScore + patternScore + archScore + energyScore;
      // Normalizing spread so top matches land between 92% and 97.5%, and bottom around 68%
      totalRaw = 65 + (totalRaw / 100) * 32.5 + (microHash * 0.45);
      const similarityPercentage = parseFloat(totalRaw.toFixed(1));

      return {
        ...fig,
        similarityScore: similarityPercentage,
        dimensionScores: {
          elementAffinity: parseFloat(elScore.toFixed(1)),
          patternResonance: parseFloat(patternScore.toFixed(1)),
          archetypeConcordance: parseFloat(archScore.toFixed(1)),
          energyTemperament: parseFloat(energyScore.toFixed(1))
        }
      };
    });

    // Sort descending
    scoredFigures.sort((a, b) => b.similarityScore - a.similarityScore);

    // Assign Ranks
    scoredFigures.forEach((fig, index) => {
      fig.rank = index + 1;
    });

    const topMatch = scoredFigures[0];
    const topMatches = scoredFigures.slice(0, 5);

    // Group by Era for easy filtering
    const erasMap = {
      'western_jin': { zh: '西晋风云与八王之乱', en: 'Western Jin & Eight Princes', figures: [] },
      'sixteen_kingdoms': { zh: '五胡十六国与北方争霸', en: 'Sixteen Kingdoms Northern Hegemony', figures: [] },
      'eastern_jin': { zh: '东晋门阀与江左风度', en: 'Eastern Jin Dynastic Era', figures: [] },
      'southern_dynasties': { zh: '南朝宋齐梁陈四代更迭', en: 'Southern Dynasties (Song, Qi, Liang, Chen)', figures: [] },
      'northern_wei': { zh: '北魏拓土与孝文汉化', en: 'Northern Wei Expansion & Sinicization', figures: [] },
      'northern_zhou_qi': { zh: '东西二魏与周齐对峙', en: 'Eastern/Western Wei, Northern Qi & Zhou', figures: [] },
      'sui': { zh: '乱世终局与大隋统一', en: 'Reunification by Great Sui', figures: [] }
    };

    scoredFigures.forEach(fig => {
      if (erasMap[fig.eraTag]) {
        erasMap[fig.eraTag].figures.push(fig);
      }
    });

    // Generate Personalized Synthesis Advice based on Top Match & Native BaZi
    const synthesis = this.generateSynthesisAdvice(bazi, topMatch, strengthGrade);

    return {
      topMatch,
      topMatches,
      allFiguresRanked: scoredFigures,
      totalCount: scoredFigures.length,
      erasMap,
      synthesis,
      nativeContext: {
        dm,
        dmEl,
        score100,
        strengthGrade,
        primaryPattern,
        rank1Arch
      }
    };
  }

  /**
   * Generates bespoke philosophical and strategic synthesis advice
   */
  static generateSynthesisAdvice(bazi, topMatch, strengthGrade) {
    if (!topMatch) return {};

    const dm = bazi.dayMaster || '甲';
    const isStrong = (bazi.score100 || 50) >= 50;

    const dmMapEn = {
      '甲': 'Jia (Yang Wood)', '乙': 'Yi (Yin Wood)',
      '丙': 'Bing (Yang Fire)', '丁': 'Ding (Yin Fire)',
      '戊': 'Wu (Yang Earth)', '己': 'Ji (Yin Earth)',
      '庚': 'Geng (Yang Metal)', '辛': 'Xin (Yin Metal)',
      '壬': 'Ren (Yang Water)', '癸': 'Gui (Yin Water)'
    };
    const strengthMapEn = {
      '极旺格': 'Extremely Strong',
      '较旺格': 'Relatively Strong',
      '较弱格': 'Relatively Weak',
      '极弱格': 'Extremely Weak',
      '中和格': 'Balanced Neutral',
      '偏旺': 'Slightly Strong',
      '偏弱': 'Slightly Weak'
    };
    const dmEn = dmMapEn[dm] || dm;
    const gradeEn = strengthMapEn[strengthGrade] || (isStrong ? 'Strong' : 'Flexible');

    const summaryZh = `命主元神【${dm}】，身居【${strengthGrade}】，在乱世三百年浩瀚星河中，与【${topMatch.dynastyZh} · ${topMatch.nameZh}】（${topMatch.positionZh}）形成高达 ${topMatch.similarityScore}% 的至高天命共鸣。此人物在三百年金戈铁马中所展现的【${topMatch.personalityZh.split('、')[0]}】与【${topMatch.personalityZh.split('、')[1] || '深邃格局'}】，正是命主原局心智特质在历史宏大时空场能下的同频投射。`;

    const summaryEn = `The native's Day Master [${dmEn}] in a [${gradeEn}] configuration exhibits an extraordinary ${topMatch.similarityScore}% celestial resonance with [${topMatch.nameEn}] (${topMatch.positionEn}) of the ${topMatch.dynastyEn}. The strategic posture and traits manifested by this historical figure serve as an authentic historical archetype mirror for your decision-making.`;

    const learnZh = `【学其所长 · 借力破局】：命主应当汲取${topMatch.nameZh}一生最精纯的战略胜手——“${topMatch.strengthAdviceZh}”。在现实职场与事业操盘中，将其转化为自身攻坚克难的核心杠杆，以大格局、定力与执行力穿透眼前迷局。`;

    const learnEn = `[Absorb Strengths · Strategic Leverage]: Internalize ${topMatch.nameEn}'s prime strategic mastery: "${topMatch.strengthAdviceEn}". Apply this resilience and tactical focus to pierce through current workplace and life complexities.`;

    const cautionZh = `【戒其所短 · 设立熔断】：历史镜像最震撼之处在于前车之鉴。命主须高度警惕${topMatch.nameZh}晚年导致其受挫乃至倾覆的致命盲区——“${topMatch.weaknessAdviceZh}”。必须在自身决策回路中设立绝对红线防火墙，克制任性与傲慢，绝不可重蹈历史覆辙。`;

    const cautionEn = `[Guard Against Weaknesses · Risk Circuit-Breaker]: The greatest value of historical reflection lies in cautionary wisdom. You must strictly guard against the fatal blindspot that precipitated ${topMatch.nameEn}'s downfall: "${topMatch.weaknessAdviceEn}". Erect rigid ethical and behavioral firewalls to avoid repeating historical tragedies.`;

    return {
      summaryZh,
      summaryEn,
      learnZh,
      learnEn,
      cautionZh,
      cautionEn
    };
  }
}

// CommonJS export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { HistoricalEngine };
}

// Browser global
if (typeof window !== 'undefined') {
  window.HistoricalEngine = HistoricalEngine;
}
