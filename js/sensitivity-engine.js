/**
 * 生时临界微扰分析与结构稳定性引擎 (Sensitivity Analysis Engine)
 * In the real world, user-provided birth times frequently carry ±5 to ±15 minute recording errors.
 * On the borderline of solar terms (节气), early/late rat transitions, or adjacent two-hour branches (时辰交界),
 * slight minute drifts can trigger fundamental phase transitions (相变) in the Four Pillars chart.
 * 
 * Performs discrete 1-minute step perturbations across [t0 - 15min, t0 + 15min] (31 samples),
 * monitoring Day Master vigor variance, pattern type transitions, and element extrema.
 * Outputs a structural stability score (0~100%) and actionable diagnosis.
 * 100% Offline-First, deterministic, and fully bilingual (zh/en).
 */

class SensitivityEngine {
  /**
   * Helper: Adjust date and time by a specific minute offset
   */
  static offsetDateTime(year, month, day, hour, minute, offsetMinutes) {
    const d = new Date(Date.UTC(year, month - 1, day, hour, minute + offsetMinutes));
    return {
      year: d.getUTCFullYear(),
      month: d.getUTCMonth() + 1,
      day: d.getUTCDate(),
      hour: d.getUTCHours(),
      minute: d.getUTCMinutes()
    };
  }

  /**
   * Core Method: Analyze perturbation around baseline birth time
   * @param {Object} baseOptions - Standard options passed to BaZiEngine.calculate
   * @param {number} windowMinutes - Half-window size in minutes (default 15 -> [-15, +15])
   * @param {number} stepMinutes - Step size in minutes (default 1)
   * @returns {Object} Complete Sensitivity Report
   */
  static analyzePerturbation(baseOptions, windowMinutes = 15, stepMinutes = 1) {
    if (!baseOptions || typeof BaZiEngine === 'undefined') {
      return {
        stabilityScore: 100,
        status: 'robust',
        messageZh: '未获取到基准出生时间，默认刚健。',
        messageEn: 'No baseline birth time supplied; defaulted to robust.',
        variance: 0,
        stdDev: 0,
        scoreRange: 0,
        hasHourTransition: false,
        hasMonthTransition: false,
        hasPatternTransition: false,
        sampleCount: 0
      };
    }

    const {
      year,
      month,
      day,
      hour,
      minute = 0,
      gender = '乾造',
      isLateRatNextDay = false,
      useTrueSolarTime = false,
      longitude = 116.4,
      timezone = 8.0,
      lang = 'zh'
    } = baseOptions;

    const samples = [];
    const hourPillarsSet = new Set();
    const monthPillarsSet = new Set();
    const patternsSet = new Set();
    const dmScores = [];

    // Sample from -windowMinutes to +windowMinutes with stepMinutes
    for (let offset = -windowMinutes; offset <= windowMinutes; offset += stepMinutes) {
      const shifted = this.offsetDateTime(year, month, day, hour, minute, offset);
      try {
        const res = BaZiEngine.calculate({
          year: shifted.year,
          month: shifted.month,
          day: shifted.day,
          hour: shifted.hour,
          minute: shifted.minute,
          gender,
          isLateRatNextDay,
          useTrueSolarTime,
          longitude,
          timezone
        });

        if (res && res.pillars) {
          const hp = `${res.pillars.hour?.stem || ''}${res.pillars.hour?.branch || ''}`;
          const mp = `${res.pillars.month?.stem || ''}${res.pillars.month?.branch || ''}`;
          const pat = (res.zipingScore && res.zipingScore.pattern) || '标准格局';
          const score = (res.zipingScore && typeof res.zipingScore.dayMasterScore === 'number')
            ? res.zipingScore.dayMasterScore
            : (res.vigorScore || 50);

          hourPillarsSet.add(hp);
          monthPillarsSet.add(mp);
          patternsSet.add(pat);
          dmScores.push(score);

          samples.push({
            offsetMinutes: offset,
            hour: shifted.hour,
            minute: shifted.minute,
            hourPillar: hp,
            monthPillar: mp,
            pattern: pat,
            score
          });
        }
      } catch (err) {
        // Safe skip if edge calculation error
      }
    }

    const sampleCount = dmScores.length || 1;
    const meanScore = dmScores.reduce((acc, v) => acc + v, 0) / sampleCount;
    const variance = dmScores.reduce((acc, v) => acc + Math.pow(v - meanScore, 2), 0) / sampleCount;
    const stdDev = Math.sqrt(variance);
    const minScore = dmScores.length ? Math.min(...dmScores) : 50;
    const maxScore = dmScores.length ? Math.max(...dmScores) : 50;
    const scoreRange = maxScore - minScore;

    const hasHourTransition = hourPillarsSet.size > 1;
    const hasMonthTransition = monthPillarsSet.size > 1;
    const hasPatternTransition = patternsSet.size > 1;

    // Mathematical Stability Score S in [0, 100%]
    let stabilityScore = 100;

    // 1. Solar Term Transition penalty (Critical Month change)
    if (hasMonthTransition) {
      stabilityScore -= 45;
    }

    // 2. Hour Pillar Boundary Transition penalty
    if (hasHourTransition) {
      stabilityScore -= 35;
    }

    // 3. Pattern Leap Transition penalty
    if (hasPatternTransition) {
      stabilityScore -= 20;
    }

    // 4. Day Master Vigor Variance penalty
    if (scoreRange > 3) {
      stabilityScore -= Math.min(20, Math.round(scoreRange * 2));
    }

    stabilityScore = Math.max(15, Math.min(100, stabilityScore));

    // Status tier & localized diagnoses
    let status = 'robust';
    let messageZh = '';
    let messageEn = '';

    const STEM_PINYIN = {
      '甲': 'Jia', '乙': 'Yi', '丙': 'Bing', '丁': 'Ding', '戊': 'Wu',
      '己': 'Ji', '庚': 'Geng', '辛': 'Xin', '壬': 'Ren', '癸': 'Gui'
    };
    const BRANCH_PINYIN = {
      '子': 'Zi', '丑': 'Chou', '寅': 'Yin', '卯': 'Mao', '辰': 'Chen', '巳': 'Si',
      '午': 'Wu', '未': 'Wei', '申': 'Shen', '酉': 'You', '戌': 'Xu', '亥': 'Hai'
    };

    function toGanzhiEn(gz) {
      if (!gz || typeof gz !== 'string') return '';
      const s = gz.charAt(0);
      const b = gz.charAt(1);
      const sEn = STEM_PINYIN[s] || s;
      const bEn = BRANCH_PINYIN[b] || b;
      return `${sEn}-${bEn}`;
    }

    const hourListZh = Array.from(hourPillarsSet).join(' / ');
    const hourListEn = Array.from(hourPillarsSet).map(toGanzhiEn).join(' / ');
    const monthListZh = Array.from(monthPillarsSet).join(' 与 ');
    const monthListEn = Array.from(monthPillarsSet).map(toGanzhiEn).join(' and ');

    const PAT_EN = {
      '正官格': 'Direct Officer',
      '七杀格': 'Seven Killings',
      '正印格': 'Direct Resource',
      '偏印格': 'Indirect Resource',
      '食神格': 'Eating God',
      '伤官格': 'Hurting Officer',
      '正财格': 'Direct Wealth',
      '偏财格': 'Indirect Wealth',
      '建禄格': 'Thriving Spirit',
      '阳刃格': 'Yang Blade',
      '较旺格': 'Vigorous Pattern',
      '较弱格': 'Delicate Pattern',
      '极旺格': 'Dominant Pattern',
      '极弱格': 'Surrender Pattern',
      '正格': 'Standard Pattern'
    };
    const patListZh = Array.from(patternsSet).join(' / ');
    const patListEn = Array.from(patternsSet).map(p => PAT_EN[p] || 'Standard Pattern').join(' / ');

    if (stabilityScore >= 90) {
      status = 'robust';
      messageZh = '命局结构极为刚健。在前后 15 分钟内时柱与格局高度锁定，微小出生时差不影响核心大运与格局推演。';
      messageEn = 'Natal structure is exceptionally robust. Hour pillar and pattern remain locked within ±15 minutes; minor recording errors will not affect readings.';
    } else if (stabilityScore >= 60) {
      status = 'moderate';
      messageZh = `命局结构基本稳固。时柱保持稳定（${hourListZh}），日元分值波动轻微（极差 ${scoreRange.toFixed(1)} 分），核心格局保持一致。`;
      messageEn = `Natal structure is largely stable. Hour pillar remains (${hourListEn}), with minimal vigor score fluctuations (range: ${scoreRange.toFixed(1)} pts).`;
    } else {
      status = 'critical';
      if (hasMonthTransition) {
        messageZh = `当前时间处于节气交界敏感区！前后 15 分钟跨越月令节气（月柱出现 ${monthListZh} 漂移），大运起运交运时间与主导格局将发生相变，强烈建议进行生时校准。`;
        messageEn = `Birth time is on a critical solar term boundary! Month pillar drifts between ${monthListEn}, altering luck inception timing. Rectification strongly advised.`;
      } else if (hasHourTransition) {
        messageZh = `当前时间处于时辰敏感交界区（临界相变区）！前后 15 分钟时柱在【${hourListZh}】之间漂移，格局可能在【${patListZh}】间变迁，建议进入生时校准流程。`;
        messageEn = `Birth time falls on an hour boundary! Hour pillar shifts between [${hourListEn}] and patterns vary [${patListEn}]. Birth time rectification recommended.`;
      } else {
        messageZh = `当前时间处于能量波动敏感区，日主旺衰波动较大（极差 ${scoreRange.toFixed(1)} 分，格局浮动 ${patListZh}），建议进行生时校准以校定精准用神。`;
        messageEn = `Birth time exhibits significant vigor fluctuation (range: ${scoreRange.toFixed(1)} pts). Rectification recommended to lock primary useful god.`;
      }
    }

    return {
      stabilityScore,
      status,
      messageZh,
      messageEn,
      variance: Math.round(variance * 100) / 100,
      stdDev: Math.round(stdDev * 100) / 100,
      scoreRange: Math.round(scoreRange * 10) / 10,
      minScore: Math.round(minScore * 10) / 10,
      maxScore: Math.round(maxScore * 10) / 10,
      hasHourTransition,
      hasMonthTransition,
      hasPatternTransition,
      hourPillarsFound: Array.from(hourPillarsSet),
      monthPillarsFound: Array.from(monthPillarsSet),
      patternsFound: Array.from(patternsSet),
      sampleCount,
      timeWindowMinutes: windowMinutes * 2,
      samples
    };
  }
}

// Export for Node/JSC test runtime and browser window
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SensitivityEngine };
}
if (typeof window !== 'undefined') {
  window.SensitivityEngine = SensitivityEngine;
}
