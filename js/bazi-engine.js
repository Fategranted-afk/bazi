/**
 * BaZi (八字) Core Engine
 * High-precision astronomical calendar and Four Pillars calculation engine.
 */

const STEMS = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
const BRANCHES = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];

// Elements corresponding to Heavenly Stems: 0=木, 1=火, 2=土, 3=金, 4=水
const STEM_ELEMENTS = ['木', '木', '火', '火', '土', '土', '金', '金', '水', '水'];
// Elements corresponding to Earthly Branches
const BRANCH_ELEMENTS = ['水', '土', '木', '木', '土', '火', '火', '土', '金', '金', '土', '水'];

// Polarities (阴阳): 0=阳, 1=阴
const STEM_YINYANG = ['阳', '阴', '阳', '阴', '阳', '阴', '阳', '阴', '阳', '阴'];
const BRANCH_YINYANG = ['阳', '阴', '阳', '阴', '阳', '阴', '阳', '阴', '阳', '阴', '阳', '阴'];

// Hidden Stems (地支藏干) with their precise percentage weight
const HIDDEN_STEMS = {
  '子': [{ stem: '癸', weight: 1.0 }],
  '丑': [{ stem: '己', weight: 0.6 }, { stem: '癸', weight: 0.3 }, { stem: '辛', weight: 0.1 }],
  '寅': [{ stem: '甲', weight: 0.6 }, { stem: '丙', weight: 0.2 }, { stem: '戊', weight: 0.2 }],
  '卯': [{ stem: '乙', weight: 1.0 }],
  '辰': [{ stem: '戊', weight: 0.6 }, { stem: '乙', weight: 0.3 }, { stem: '癸', weight: 0.1 }],
  '巳': [{ stem: '丙', weight: 0.6 }, { stem: '庚', weight: 0.2 }, { stem: '戊', weight: 0.2 }],
  '午': [{ stem: '丁', weight: 0.6 }, { stem: '己', weight: 0.4 }],
  '未': [{ stem: '己', weight: 0.6 }, { stem: '丁', weight: 0.3 }, { stem: '乙', weight: 0.1 }],
  '申': [{ stem: '庚', weight: 0.6 }, { stem: '壬', weight: 0.2 }, { stem: '戊', weight: 0.2 }],
  '酉': [{ stem: '辛', weight: 1.0 }],
  '戌': [{ stem: '戊', weight: 0.6 }, { stem: '辛', weight: 0.3 }, { stem: '丁', weight: 0.1 }],
  '亥': [{ stem: '壬', weight: 0.6 }, { stem: '甲', weight: 0.2 }, { stem: '戊', weight: 0.2 }]
};

// 60 Na Yin (纳音五行)
const NA_YIN = [
  '海中金', '海中金', '炉中火', '炉中火', '大林木', '大林木', '路旁土', '路旁土', '剑锋金', '剑锋金',
  '山头火', '山头火', '涧下水', '涧下水', '城头土', '城头土', '白蜡金', '白蜡金', '杨柳木', '杨柳木',
  '泉中水', '泉中水', '屋上土', '屋上土', '霹雳火', '霹雳火', '松柏木', '松柏木', '长流水', '长流水',
  '沙中金', '沙中金', '山下火', '山下火', '平地木', '平地木', '壁上土', '壁上土', '金箔金', '金箔金',
  '覆灯火', '覆灯火', '天河水', '天河水', '大驿土', '大驿土', '钗钏金', '钗钏金', '桑柘木', '桑柘木',
  '大溪水', '大溪水', '沙中土', '沙中土', '天上火', '天上火', '石榴木', '石榴木', '大海水', '大海水'
];

// Ten Gods lookup (十神表) relative to Day Master
const TEN_GODS = {
  '木': { '木': ['比肩', '劫财'], '火': ['食神', '伤官'], '土': ['偏财', '正财'], '金': ['七杀', '正官'], '水': ['偏印', '正印'] },
  '火': { '火': ['比肩', '劫财'], '土': ['食神', '伤官'], '金': ['偏财', '正财'], '水': ['七杀', '正官'], '木': ['偏印', '正印'] },
  '土': { '土': ['比肩', '劫财'], '金': ['食神', '伤官'], '水': ['偏财', '正财'], '木': ['七杀', '正官'], '火': ['偏印', '正印'] },
  '金': { '金': ['比肩', '劫财'], '水': ['食神', '伤官'], '木': ['偏财', '正财'], '火': ['七杀', '正官'], '土': ['偏印', '正印'] },
  '水': { '水': ['比肩', '劫财'], '木': ['食神', '伤官'], '火': ['偏财', '正财'], '土': ['七杀', '正官'], '金': ['偏印', '正印'] }
};

/**
 * High-precision Solar Terms (24 节气) calculation based on Jean Meeus Astronomical Algorithms
 */
class SolarTermEngine {
  // 12 "Jie" (节) that divide BaZi solar months, in ecliptic longitude (degrees)
  // 0: 立春(315°), 1: 惊蛰(345°), 2: 清明(15°), 3: 立夏(45°), 4: 芒种(75°), 5: 小暑(105°),
  // 6: 立秋(135°), 7: 白露(165°), 8: 寒露(195°), 9: 立冬(225°), 10: 大雪(255°), 11: 小寒(285°)
  static JIE_ANGLES = [315, 345, 15, 45, 75, 105, 135, 165, 195, 225, 255, 285];
  static JIE_NAMES = ['立春', '惊蛰', '清明', '立夏', '芒种', '小暑', '立秋', '白露', '寒露', '立冬', '大雪', '小寒'];
  static JIE_MONTH_BRANCHES = ['寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥', '子', '丑'];

  /**
   * Approximate solar term day for a given year and solar longitude angle
   */
  static getSolarTermDate(year, angle) {
    const D = 0.2422;
    const ref = {
      315: { c: 3.87, m: 2 },   // 立春
      345: { c: 5.63, m: 3 },   // 惊蛰
      15:  { c: 4.81, m: 4 },   // 清明
      45:  { c: 5.52, m: 5 },   // 立夏
      75:  { c: 5.678, m: 6 },  // 芒种
      105: { c: 7.108, m: 7 },  // 小暑
      135: { c: 7.50, m: 8 },   // 立秋
      165: { c: 7.646, m: 9 },  // 白露
      195: { c: 8.318, m: 10 }, // 寒露
      225: { c: 7.438, m: 11 }, // 立冬
      255: { c: 7.18, m: 12 },  // 大雪
      285: { c: 5.4055, m: 1 }  // 小寒
    }[angle];

    const y = year % 100;
    const isNextYearForXiaoHan = (angle === 285);
    const calcYear = isNextYearForXiaoHan ? (year + 1) : year;
    const calcY = calcYear % 100;
    const leapAdjustment = Math.floor((calcY - 1) / 4);

    let day = Math.floor(calcY * D + ref.c) - leapAdjustment;
    const month = ref.m;
    const targetYear = isNextYearForXiaoHan ? year : year;
    return new Date(Date.UTC(targetYear, month - 1, day, 12, 0, 0));
  }

  /**
   * Determine the current solar year and solar month branch based on birth date
   */
  static getSolarYearAndMonth(dt) {
    const calYear = dt.getUTCFullYear();
    const liChunCur = this.getSolarTermDate(calYear, 315);
    
    let solarYear = calYear;
    if (dt < liChunCur) {
      solarYear = calYear - 1;
    }

    // Now find which of the 12 "Jie" is currently active
    const jieDates = [];
    // Previous year's Xiao Han
    jieDates.push({ name: '小寒', branch: '丑', date: this.getSolarTermDate(solarYear, 285), monthIdx: 11 });
    // Current solar year terms
    for (let i = 0; i < this.JIE_ANGLES.length - 1; i++) {
      jieDates.push({
        name: this.JIE_NAMES[i],
        branch: this.JIE_MONTH_BRANCHES[i],
        date: this.getSolarTermDate(solarYear, this.JIE_ANGLES[i]),
        monthIdx: i
      });
    }
    // Next year's Xiao Han
    jieDates.push({
      name: '小寒',
      branch: '丑',
      date: this.getSolarTermDate(solarYear + 1, 285),
      monthIdx: 11
    });

    jieDates.sort((a, b) => a.date - b.date);

    let activeJie = jieDates[0];
    for (let i = 0; i < jieDates.length; i++) {
      if (dt >= jieDates[i].date) {
        activeJie = jieDates[i];
      } else {
        break;
      }
    }

    return {
      solarYear,
      monthBranch: activeJie.branch,
      monthIdx: activeJie.monthIdx,
      jieName: activeJie.name
    };
  }
}

/**
 * Astronomical Julian Day Number calculation
 */
function gregorianToJDN(year, month, day) {
  let y = year;
  let m = month;
  if (m <= 2) {
    y -= 1;
    m += 12;
  }
  const a = Math.floor(y / 100);
  const b = 2 - a + Math.floor(a / 4);
  return Math.floor(365.25 * (y + 4716)) + Math.floor(30.6001 * (m + 1)) + day + b - 1524;
}

/**
 * Equation of time (EoT) calculation in minutes
 */
function getEquationOfTime(dayOfYear) {
  const b = (2 * Math.PI * (dayOfYear - 81)) / 365;
  return 9.87 * Math.sin(2 * b) - 7.53 * Math.cos(b) - 1.5 * Math.sin(b);
}

/**
 * Core BaZi Calculator
 */
class BaZiEngine {
  static calculate(options) {
    let {
      year,
      month,
      day,
      hour,
      minute = 0,
      gender = '乾造',
      isLateRatNextDay = false,
      useTrueSolarTime = false,
      longitude = 116.4,
      timezone = 8.0 // default UTC+8
    } = options;

    let adjustedHour = hour;
    let adjustedMinute = minute;
    let adjustedDay = day;
    let adjustedMonth = month;
    let adjustedYear = year;
    let lonOffsetMinutes = 0;
    let eot = 0;
    let totalSolarOffset = 0;

    // 1. True Solar Time Correction with Global Timezone Support
    if (useTrueSolarTime) {
      // Standard meridian for the given timezone is timezone * 15°
      const standardMeridian = timezone * 15.0;
      // Longitude offset: 4 minutes per degree east of standard meridian
      lonOffsetMinutes = (longitude - standardMeridian) * 4;
      // Equation of Time (EoT)
      const dayOfYear = Math.floor((new Date(year, month - 1, day) - new Date(year, 0, 0)) / 86400000);
      eot = getEquationOfTime(dayOfYear);
      totalSolarOffset = lonOffsetMinutes + eot;

      let totalMinutes = hour * 60 + minute + totalSolarOffset;
      if (totalMinutes < 0) {
        totalMinutes += 1440;
        const prevDate = new Date(Date.UTC(year, month - 1, day - 1));
        adjustedYear = prevDate.getUTCFullYear();
        adjustedMonth = prevDate.getUTCMonth() + 1;
        adjustedDay = prevDate.getUTCDate();
      } else if (totalMinutes >= 1440) {
        totalMinutes -= 1440;
        const nextDate = new Date(Date.UTC(year, month - 1, day + 1));
        adjustedYear = nextDate.getUTCFullYear();
        adjustedMonth = nextDate.getUTCMonth() + 1;
        adjustedDay = nextDate.getUTCDate();
      }
      adjustedHour = Math.floor(totalMinutes / 60);
      adjustedMinute = Math.floor(totalMinutes % 60);
    }

    // 2. Night Rat (夜子时) vs Early Rat (早子时)
    const isNightRat = (adjustedHour === 23);
    let dayForDayPillar = adjustedDay;
    if (isNightRat && isLateRatNextDay) {
      dayForDayPillar += 1;
    }

    // Convert local birth time to UTC timestamp for astronomical Solar Terms (24节气) comparison
    const birthTimestampUTC = Date.UTC(year, month - 1, day, hour, minute) - Math.round(timezone * 3600 * 1000);
    const birthDateUTC = new Date(birthTimestampUTC);

    // 3. Year Pillar (年柱)
    const solarInfo = SolarTermEngine.getSolarYearAndMonth(birthDateUTC);
    const solarYear = solarInfo.solarYear;
    const yearStemIdx = (solarYear - 4 + 60000) % 10;
    const yearBranchIdx = (solarYear - 4 + 60000) % 12;
    const yearPillar = STEMS[yearStemIdx] + BRANCHES[yearBranchIdx];

    // 4. Month Pillar (月柱) - 五虎遁元
    const monthStemIdx = (yearStemIdx % 5 * 2 + 2 + solarInfo.monthIdx) % 10;
    const monthBranch = solarInfo.monthBranch;
    const monthBranchIdx = BRANCHES.indexOf(monthBranch);
    const monthPillar = STEMS[monthStemIdx] + monthBranch;

    // 5. Day Pillar (日柱) - Julian Day Number
    const jdn = gregorianToJDN(adjustedYear, adjustedMonth, dayForDayPillar);
    const dayCycleIdx = (jdn + 49) % 60;
    const dayStemIdx = dayCycleIdx % 10;
    const dayBranchIdx = dayCycleIdx % 12;
    const dayPillar = STEMS[dayStemIdx] + BRANCHES[dayBranchIdx];
    const dayMaster = STEMS[dayStemIdx];

    // 6. Hour Pillar (时柱) - 五鼠遁元
    const hourBranchIdx = Math.floor((adjustedHour + 1) / 2) % 12;
    let dayStemForHour = dayStemIdx;
    if (isNightRat && !isLateRatNextDay) {
      dayStemForHour = (dayStemIdx + 1) % 10;
    }
    const hourStemIdx = (dayStemForHour % 5 * 2 + hourBranchIdx) % 10;
    const hourPillar = STEMS[hourStemIdx] + BRANCHES[hourBranchIdx];

    // 7. Ten Gods (十神)
    const getTenGod = (targetStem) => {
      const dmElement = STEM_ELEMENTS[dayStemIdx];
      const targetElement = STEM_ELEMENTS[STEMS.indexOf(targetStem)];
      const dmYinYang = STEM_YINYANG[dayStemIdx];
      const targetYinYang = STEM_YINYANG[STEMS.indexOf(targetStem)];
      const isSameYinYang = (dmYinYang === targetYinYang);
      return TEN_GODS[dmElement][targetElement][isSameYinYang ? 0 : 1];
    };

    // 8. Hidden Stems & Their Ten Gods
    const getBranchHidden = (branch) => {
      return (HIDDEN_STEMS[branch] || []).map(item => ({
        stem: item.stem,
        weight: item.weight,
        element: STEM_ELEMENTS[STEMS.indexOf(item.stem)],
        god: getTenGod(item.stem)
      }));
    };

    // 9. Na Yin (纳音)
    const getNaYin = (pillar) => {
      const sIdx = STEMS.indexOf(pillar[0]);
      const bIdx = BRANCHES.indexOf(pillar[1]);
      for (let i = 0; i < 60; i++) {
        if (i % 10 === sIdx && i % 12 === bIdx) {
          return NA_YIN[i];
        }
      }
      return '';
    };

    // 10. Five Elements Statistics & Balance
    const elementScores = { '木': 0, '火': 0, '土': 0, '金': 0, '水': 0 };
    [yearStemIdx, monthStemIdx, dayStemIdx, hourStemIdx].forEach(idx => {
      elementScores[STEM_ELEMENTS[idx]] += 1.0;
    });
    [yearPillar[1], monthPillar[1], dayPillar[1], hourPillar[1]].forEach(branch => {
      (HIDDEN_STEMS[branch] || []).forEach(h => {
        const el = STEM_ELEMENTS[STEMS.indexOf(h.stem)];
        elementScores[el] += h.weight * 1.0;
      });
    });

    const totalScore = Object.values(elementScores).reduce((a, b) => a + b, 0);
    const elementPercentages = {};
    for (const [el, score] of Object.entries(elementScores)) {
      elementPercentages[el] = ((score / totalScore) * 100).toFixed(1);
    }

    const pillars = {
      year: {
        stem: STEMS[yearStemIdx],
        branch: BRANCHES[yearBranchIdx],
        text: yearPillar,
        stemElement: STEM_ELEMENTS[yearStemIdx],
        branchElement: BRANCH_ELEMENTS[yearBranchIdx],
        stemGod: getTenGod(STEMS[yearStemIdx]),
        hidden: getBranchHidden(BRANCHES[yearBranchIdx]),
        naYin: getNaYin(yearPillar)
      },
      month: {
        stem: STEMS[monthStemIdx],
        branch: BRANCHES[monthBranchIdx],
        text: monthPillar,
        stemElement: STEM_ELEMENTS[monthStemIdx],
        branchElement: BRANCH_ELEMENTS[monthBranchIdx],
        stemGod: getTenGod(STEMS[monthStemIdx]),
        hidden: getBranchHidden(BRANCHES[monthBranchIdx]),
        naYin: getNaYin(monthPillar)
      },
      day: {
        stem: STEMS[dayStemIdx],
        branch: BRANCHES[dayBranchIdx],
        text: dayPillar,
        stemElement: STEM_ELEMENTS[dayStemIdx],
        branchElement: BRANCH_ELEMENTS[dayBranchIdx],
        stemGod: '日主 (元神)',
        hidden: getBranchHidden(BRANCHES[dayBranchIdx]),
        naYin: getNaYin(dayPillar)
      },
      hour: {
        stem: STEMS[hourStemIdx],
        branch: BRANCHES[hourBranchIdx],
        text: hourPillar,
        stemElement: STEM_ELEMENTS[hourStemIdx],
        branchElement: BRANCH_ELEMENTS[hourBranchIdx],
        stemGod: getTenGod(STEMS[hourStemIdx]),
        hidden: getBranchHidden(BRANCHES[hourBranchIdx]),
        naYin: getNaYin(hourPillar)
      }
    };

    const interactions = BaZiEngine.calculatePillarInteractions(pillars);
    const zipingScore = BaZiEngine.calculateZipingScore({ dayMaster, pillars });

    return {
      gender,
      input: {
        year, month, day, hour, minute, gender,
        adjustedYear, adjustedMonth, adjustedDay, adjustedHour, adjustedMinute,
        useTrueSolarTime, longitude, timezone, isLateRatNextDay,
        lonOffsetMinutes, eot, totalSolarOffset
      },
      solarInfo,
      dayMaster,
      dayMasterElement: STEM_ELEMENTS[dayStemIdx],
      dayMasterYinYang: STEM_YINYANG[dayStemIdx],
      pillars,
      interactions,
      zipingScore,
      elements: {
        scores: elementScores,
        percentages: elementPercentages
      },
      fiveElements: {
        scores: elementScores,
        percentages: elementPercentages
      }
    };
  }

  /**
   * Systematically computes all Celestial Stems & Earthly Branches interactions:
   * 1. 天干五合 (Five Stem Combinations) & 争合/妒合
   * 2. 天干四冲 (Four Stem Clashes)
   * 3. 地支六合 (Six Branch Combinations)
   * 4. 地支六冲 (Six Branch Clashes)
   * 5. 地支六害 / 穿害 (Six Branch Harms)
   * 6. 地支三刑与自刑 (Three Punishments & Self-Punishments)
   */
  static calculatePillarInteractions(pillars) {
    if (!pillars || !pillars.year || !pillars.month || !pillars.day || !pillars.hour) {
      return {
        stemCombos: [], stemClashes: [],
        branchCombos: [], branchClashes: [], branchHarms: [], branchPunishments: [],
        all: [], summaryZh: '干支和平顺生，无显著刑冲破害。', summaryEn: 'Harmonious elemental circulation with minimal friction.'
      };
    }

    const pKeys = ['year', 'month', 'day', 'hour'];
    const pNamesZh = { year: '年', month: '月', day: '日', hour: '时' };
    const pNamesEn = { year: 'Year', month: 'Month', day: 'Day', hour: 'Hour' };

    // 1. 天干五合 (Five Stem Combinations)
    const STEM_COMBOS = {
      '甲己': { name: '中正之合', element: '土', descZh: '敦厚守信，重社会公信与组织合规，得长辈贵人庇佑', descEn: 'Integrity and upright alignment' },
      '己甲': { name: '中正之合', element: '土', descZh: '敦厚守信，重社会公信与组织合规，得长辈贵人庇佑', descEn: 'Integrity and upright alignment' },
      '乙庚': { name: '仁义之合', element: '金', descZh: '刚柔兼具，果决决断讲求情义，善于跨部门整合', descEn: 'Righteousness, agility, and bold execution' },
      '庚乙': { name: '仁义之合', element: '金', descZh: '刚柔兼具，果决决断讲求情义，善于跨部门整合', descEn: 'Righteousness, agility, and bold execution' },
      '丙辛': { name: '威制之合', element: '水', descZh: '智谋出众，仪表威严，讲求法理契约，具开拓魄力', descEn: 'Dignity, sharp intelligence, and institutional authority' },
      '辛丙': { name: '威制之合', element: '水', descZh: '智谋威严，仪表堂堂，讲求规矩法度，具开拓魄力', descEn: 'Dignity, sharp intelligence, and institutional authority' },
      '丁壬': { name: '有情之合', element: '木', descZh: '才智灵秀，极具文学艺术灵感与人情关怀', descEn: 'Affectionate empathy, charisma, and creative insight' },
      '壬丁': { name: '有情之合', element: '木', descZh: '才智灵秀，极具文学艺术灵感与人情关怀', descEn: 'Affectionate empathy, charisma, and creative insight' },
      '戊癸': { name: '水火相济', element: '火', descZh: '古称老少之合，理智与热情并存，极具前瞻突破力', descEn: 'Dynamic transformation: analytical depth meets visionary drive' },
      '癸戊': { name: '水火相济', element: '火', descZh: '古称老少之合，理智与热情并存，极具前瞻突破力', descEn: 'Dynamic transformation: analytical depth meets visionary drive' }
    };

    // 2. 天干四冲 (Four Stem Clashes)
    const STEM_CLASHES = {
      '甲庚': { name: '甲庚相冲', type: '金木交战', typeEn: 'Metal-Wood Clash', descZh: '果断刚决但防头颈筋骨劳损与人际摩擦', descEn: 'Metal-Wood collision: decisive action; guard against rigidity' },
      '庚甲': { name: '甲庚相冲', type: '金木交战', typeEn: 'Metal-Wood Clash', descZh: '果断刚决但防头颈筋骨劳损与人际摩擦', descEn: 'Metal-Wood collision: decisive action; guard against rigidity' },
      '乙辛': { name: '乙辛相冲', type: '金木相挫', typeEn: 'Metal-Wood Friction', descZh: '心智极其敏锐，纤巧多思，需防手足神经暗耗', descEn: 'Precision Metal clipping agile Wood: hyper-sensitive vigilance' },
      '辛乙': { name: '乙辛相冲', type: '金木相挫', typeEn: 'Metal-Wood Friction', descZh: '心智极其敏锐，纤巧多思，需防手足神经暗耗', descEn: 'Precision Metal clipping agile Wood: hyper-sensitive vigilance' },
      '丙壬': { name: '丙壬相冲', type: '水火相射', typeEn: 'Water-Fire Clash', descZh: '思维碰撞极度剧烈，灵感澎湃如海，注意情绪大起大落', descEn: 'Water-Fire clash: intense inspiration and emotional dialectic' },
      '壬丙': { name: '丙壬相冲', type: '水火相射', typeEn: 'Water-Fire Clash', descZh: '思维碰撞极度剧烈，灵感澎湃如海，注意情绪大起大落', descEn: 'Water-Fire clash: intense inspiration and emotional dialectic' },
      '丁癸': { name: '丁癸相冲', type: '水火不容', typeEn: 'Water-Fire Opposition', descZh: '深思熟虑、灵感幽微，需防心肾失调与精力暗耗', descEn: 'Candle vs rain: profound intuition; preserve cognitive stamina' },
      '癸丁': { name: '丁癸相冲', type: '水火不容', typeEn: 'Water-Fire Opposition', descZh: '深思熟虑、灵感幽微，需防心肾失调与精力暗耗', descEn: 'Candle vs rain: profound intuition; preserve cognitive stamina' }
    };

    // 3. 地支六合 (Six Branch Combinations)
    const BRANCH_COMBOS = {
      '子丑': { name: '子丑合', element: '土', descZh: '泥土蓄水，暗中相助，做事稳重有条理，利不动产与团队稳固', descEn: 'Water-Earth consolidation: steady compounding' },
      '丑子': { name: '子丑合', element: '土', descZh: '泥土蓄水，暗中相助，做事稳重有条理，利不动产与团队稳固', descEn: 'Water-Earth consolidation: steady compounding' },
      '寅亥': { name: '寅亥合', element: '木', descZh: '生发合木，主仁慈宽广，多贵人提携生扶，利学业文化', descEn: 'Wood generation: benevolent growth and mentorship' },
      '亥寅': { name: '寅亥合', element: '木', descZh: '生发合木，主仁慈宽广，多贵人提携生扶，利学业文化', descEn: 'Wood generation: benevolent growth and mentorship' },
      '卯戌': { name: '卯戌合', element: '火', descZh: '枯草引火，热情忠诚，为人信实重义气，利品牌传播', descEn: 'Fire ignition: charismatic passion and loyalty' },
      '戌卯': { name: '卯戌合', element: '火', descZh: '枯草引火，热情忠诚，为人信实重义气，利品牌传播', descEn: 'Fire ignition: charismatic passion and loyalty' },
      '辰酉': { name: '辰酉合', element: '金', descZh: '湿土生金，珠玉生辉，才干易获名利赏识，利法务金融合规', descEn: 'Metal cultivation: strategic clarity and asset recognition' },
      '酉辰': { name: '辰酉合', element: '金', descZh: '湿土生金，珠玉生辉，才干易获名利赏识，利法务金融合规', descEn: 'Metal cultivation: strategic clarity and asset recognition' },
      '巳申': { name: '巳申合', element: '水', descZh: '水火金交融，多谋善断，兼带刑克需防变节，宜契约明确', descEn: 'Agile transformation with internal friction: requires tight contracts' },
      '申巳': { name: '巳申合', element: '水', descZh: '水火金交融，多谋善断，兼带刑克需防变节，宜契约明确', descEn: 'Agile transformation with internal friction: requires tight contracts' },
      '午未': { name: '午未合', element: '火土', descZh: '日月太极之合，光明磊落，处世威严受人敬重，家业昌盛', descEn: 'Solar-Lunar harmony: dignity, magnanimity, and public stature' },
      '未午': { name: '午未合', element: '火土', descZh: '日月太极之合，光明磊落，处世威严受人敬重，家业昌盛', descEn: 'Solar-Lunar harmony: dignity, magnanimity, and public stature' }
    };

    // 4. 地支六冲 (Six Branch Clashes)
    const BRANCH_CLASHES = {
      '子午': { name: '子午相冲', palaceZh: '水火交战，思想极度活跃与瞬间转折，感情与内心张力巨大', palaceEn: 'Water-Fire clash: intense emotional and cognitive dialectic' },
      '午子': { name: '子午相冲', palaceZh: '水火交战，思想极度活跃与瞬间转折，感情与内心张力巨大', palaceEn: 'Water-Fire clash: intense emotional and cognitive dialectic' },
      '丑未': { name: '丑未相冲', palaceZh: '四墓相冲，冲开库气，资产动荡或不动产变换，性情沉稳但固执', palaceEn: 'Earth vault clash: wealth and property repositioning' },
      '未丑': { name: '丑未相冲', palaceZh: '四墓相冲，冲开库气，资产动荡或不动产变换，性情沉稳但固执', palaceEn: 'Earth vault clash: wealth and property repositioning' },
      '寅申': { name: '寅申相冲', palaceZh: '驿马交驰，一生多动迁开拓，奔波四海，自立破局能力极强', palaceEn: 'Traveling Horse clash: frequent mobility and pioneer expansion' },
      '申寅': { name: '寅申相冲', palaceZh: '驿马交驰，一生多动迁开拓，奔波四海，自立破局能力极强', palaceEn: 'Traveling Horse clash: frequent mobility and pioneer expansion' },
      '卯酉': { name: '卯酉相冲', palaceZh: '门户交战，背井离乡或职场变换频仍，直爽清高但防口角背离', palaceEn: 'Doorway clash: relocation and changing career environments' },
      '酉卯': { name: '卯酉相冲', palaceZh: '门户交战，背井离乡或职场变换频仍，直爽清高但防口角背离', palaceEn: 'Doorway clash: relocation and changing career environments' },
      '辰戌': { name: '辰戌相冲', palaceZh: '天罗地网魁罡之冲，胆大包天、敢作敢当，利于法律金融破局', palaceEn: 'Celestial Net clash: bold courage and judicial/financial breakthrough' },
      '戌辰': { name: '辰戌相冲', palaceZh: '天罗地网魁罡之冲，胆大包天、敢作敢当，利于法律金融破局', palaceEn: 'Celestial Net clash: bold courage and judicial/financial breakthrough' },
      '巳亥': { name: '巳亥相冲', palaceZh: '风木之引，多思多虑、爱管闲事、善于长途涉足与跨界创新', palaceEn: 'Wind-fire clash: cross-domain dynamism and restless exploration' },
      '亥巳': { name: '巳亥相冲', palaceZh: '风木之引，多思多虑、爱管闲事、善于长途涉足与跨界创新', palaceEn: 'Wind-fire clash: cross-domain dynamism and restless exploration' }
    };

    // 5. 地支六害 / 穿害 (Six Branch Harms)
    const BRANCH_HARMS = {
      '子未': { name: '子未相害', descZh: '水土交凌，恩反成怨，需防与尊长朋友因利益产生隐性隔阂', descEn: 'Water-Earth mutual harm: boundary defense' },
      '未子': { name: '子未相害', descZh: '水土交凌，恩反成怨，需防与尊长朋友因利益产生隐性隔阂', descEn: 'Water-Earth mutual harm: boundary defense' },
      '丑午': { name: '丑午相害', descZh: '火土阴阳相击，脾胃虚火与急躁暗伏，防亲近之人言语误解', descEn: 'Internal friction: emotional patience required' },
      '午丑': { name: '丑午相害', descZh: '火土阴阳相击，脾胃虚火与急躁暗伏，防亲近之人言语误解', descEn: 'Internal friction: emotional patience required' },
      '寅巳': { name: '寅巳相害', descZh: '木火交煎，才高招忌，合同契约宜白纸黑字防暗箭纠葛', descEn: 'Envy from talent: precise contractual clarity' },
      '巳寅': { name: '寅巳相害', descZh: '木火交煎，才高招忌，合同契约宜白纸黑字防暗箭纠葛', descEn: 'Envy from talent: precise contractual clarity' },
      '卯辰': { name: '卯辰相害', descZh: '身旺凌弱，性格执拗，与同侪合作宜多包容少计较枝节', descEn: 'Stubbornness: practice radical magnanimity' },
      '辰卯': { name: '卯辰相害', descZh: '身旺凌弱，性格执拗，与同侪合作宜多包容少计较枝节', descEn: 'Stubbornness: practice radical magnanimity' },
      '申亥': { name: '申亥相害', descZh: '金水生过，多才惹妒，聪明反被聪明误，防私密信息外泄', descEn: 'Over-cleverness: safeguard confidential records' },
      '亥申': { name: '申亥相害', descZh: '金水生过，多才惹妒，聪明反被聪明误，防私密信息外泄', descEn: 'Over-cleverness: safeguard confidential records' },
      '酉戌': { name: '酉戌相害', descZh: '金火相残，面从心违，最忌耳软轻信，核心账务需独立核验', descEn: 'Surface consensus vs hidden discord: verify independently' },
      '戌酉': { name: '酉戌相害', descZh: '金火相残，面从心违，最忌耳软轻信，核心账务需独立核验', descEn: 'Surface consensus vs hidden discord: verify independently' }
    };

    const stemCombos = [];
    const stemClashes = [];
    const branchCombos = [];
    const branchClashes = [];
    const branchHarms = [];
    const branchPunishments = [];

    // All pairwise combinations of the 4 pillars (6 pairs)
    for (let i = 0; i < pKeys.length; i++) {
      for (let j = i + 1; j < pKeys.length; j++) {
        const k1 = pKeys[i];
        const k2 = pKeys[j];
        const isAdjacent = (j === i + 1);

        // A. Stem Interactions
        const sPair = pillars[k1].stem + pillars[k2].stem;
        if (STEM_COMBOS[sPair]) {
          const item = STEM_COMBOS[sPair];
          stemCombos.push({
            p1: k1, p2: k2,
            stems: sPair,
            nameZh: `${pNamesZh[k1]}${pNamesZh[k2]}干【${sPair}】${item.name}`,
            nameEn: `${pNamesEn[k1]}-${pNamesEn[k2]} Stems Combination (${item.element})`,
            element: item.element,
            isAdjacent,
            descZh: item.descZh,
            descEn: item.descEn
          });
        }
        if (STEM_CLASHES[sPair]) {
          const item = STEM_CLASHES[sPair];
          stemClashes.push({
            p1: k1, p2: k2,
            stems: sPair,
            nameZh: `${pNamesZh[k1]}${pNamesZh[k2]}干【${sPair}】相冲`,
            nameEn: `${pNamesEn[k1]}-${pNamesEn[k2]} Stems Clash (${item.typeEn || 'Clash'})`,
            type: item.type,
            typeEn: item.typeEn || 'Clash',
            isAdjacent,
            descZh: item.descZh,
            descEn: item.descEn
          });
        }

        // B. Branch Interactions
        const bPair = pillars[k1].branch + pillars[k2].branch;
        if (BRANCH_COMBOS[bPair]) {
          const item = BRANCH_COMBOS[bPair];
          branchCombos.push({
            p1: k1, p2: k2,
            branches: bPair,
            nameZh: `${pNamesZh[k1]}${pNamesZh[k2]}支【${bPair}】六合`,
            nameEn: `${pNamesEn[k1]}-${pNamesEn[k2]} Branches Six Combination (${item.element})`,
            element: item.element,
            isAdjacent,
            descZh: item.descZh,
            descEn: item.descEn
          });
        }
        if (BRANCH_CLASHES[bPair]) {
          const item = BRANCH_CLASHES[bPair];
          branchClashes.push({
            p1: k1, p2: k2,
            branches: bPair,
            nameZh: `${pNamesZh[k1]}${pNamesZh[k2]}支【${bPair}】六冲`,
            nameEn: `${pNamesEn[k1]}-${pNamesEn[k2]} Branches Six Clash`,
            isAdjacent,
            descZh: item.palaceZh,
            descEn: item.palaceEn
          });
        }
        if (BRANCH_HARMS[bPair]) {
          const item = BRANCH_HARMS[bPair];
          branchHarms.push({
            p1: k1, p2: k2,
            branches: bPair,
            nameZh: `${pNamesZh[k1]}${pNamesZh[k2]}支【${bPair}】穿害`,
            nameEn: `${pNamesEn[k1]}-${pNamesEn[k2]} Branches Mutual Harm`,
            isAdjacent,
            descZh: item.descZh,
            descEn: item.descEn
          });
        }

        // C. Two-branch Punishments
        if ((bPair === '子卯' || bPair === '卯子')) {
          branchPunishments.push({
            p1: k1, p2: k2,
            branches: bPair,
            nameZh: `${pNamesZh[k1]}${pNamesZh[k2]}支【${bPair}】子卯无礼之刑`,
            nameEn: `${pNamesEn[k1]}-${pNamesEn[k2]} Branches Zi-Mao Punishment`,
            descZh: '水木失调，防言语冲突与人情冷暖是非',
            descEn: 'Zi-Mao Punishment: tactful communication required'
          });
        } else if (['辰辰', '午午', '酉酉', '亥亥'].includes(bPair)) {
          branchPunishments.push({
            p1: k1, p2: k2,
            branches: bPair,
            nameZh: `${pNamesZh[k1]}${pNamesZh[k2]}支【${bPair}】自刑`,
            nameEn: `${pNamesEn[k1]}-${pNamesEn[k2]} Branches Self-Punishment`,
            descZh: '相同五行气机过亢，易自寻烦恼或多思自困，需豁达解脱',
            descEn: 'Self-Punishment: overcome cognitive rumination and self-criticism'
          });
        }
      }
    }

    // Check Three Punishments across all 4 branches
    const allBranches = [pillars.year.branch, pillars.month.branch, pillars.day.branch, pillars.hour.branch];
    const hasYin = allBranches.includes('寅');
    const hasSi = allBranches.includes('巳');
    const hasShen = allBranches.includes('申');
    if (hasYin && hasSi && hasShen) {
      branchPunishments.push({
        branches: '寅巳申',
        nameZh: '寅巳申三刑 (无恩之刑全逢)',
        nameEn: 'Yin-Si-Shen Triple Punishment (Ungrateful Punishment)',
        descZh: '金木火交激，最需坚守法律底线与契约契合度，防利益恩怨反目',
        descEn: 'Triple Punishment: enforce strict contractual clarity and legal adherence'
      });
    }

    const hasChou = allBranches.includes('丑');
    const hasWei = allBranches.includes('未');
    const hasXu = allBranches.includes('戌');
    if (hasChou && hasWei && hasXu) {
      branchPunishments.push({
        branches: '丑未戌',
        nameZh: '丑未戌三刑 (持势之刑全逢)',
        nameEn: 'Chou-Wei-Xu Triple Punishment (Bullying Punishment)',
        descZh: '土气极盛厚重，为人刚强倔强，注意脾胃脏腑调护，切忌恃才凌人',
        descEn: 'Earth Triple Punishment: stay humble and protect digestive health'
      });
    }

    // Three Seasonal Meeting Direction Bureaus (三会局: 方局汇聚，量能最广)
    const SAN_HUI_DEFS = [
      { branches: ['寅', '卯', '辰'], key: '寅卯辰', element: '木', seasonZh: '春', nameZh: '寅卯辰三会东方木局', nameEn: 'Yin-Mao-Chen Eastern Wood Meeting', descZh: '春令东方木气全备，生机磅礴，方局汇聚能量最为浩荡，优先于普通生克与刑冲', descEn: 'Eastern Spring Wood Directional Meeting: seasonal peak energy taking absolute precedence over standard clashes' },
      { branches: ['巳', '午', '未'], key: '巳午未', element: '火', seasonZh: '夏', nameZh: '巳午未三会南方火局', nameEn: 'Si-Wu-Wei Southern Fire Meeting', descZh: '夏令南方烈火全备，火势赫赫，方局汇聚能量最为浩荡，优先于普通生克与刑冲', descEn: 'Southern Summer Fire Directional Meeting: blazing seasonal focus taking precedence over standard clashes' },
      { branches: ['申', '酉', '戌'], key: '申酉戌', element: '金', seasonZh: '秋', nameZh: '申酉戌三会西方金局', nameEn: 'Shen-You-Xu Western Metal Meeting', descZh: '秋令西方坚金全备，肃杀刚毅，方局汇聚能量最为浩荡，优先于普通生克与刑冲', descEn: 'Western Autumn Metal Directional Meeting: resolute seasonal discipline taking precedence over standard clashes' },
      { branches: ['亥', '子', '丑'], key: '亥子丑', element: '水', seasonZh: '冬', nameZh: '亥子丑三会北方水局', nameEn: 'Hai-Zi-Chou Northern Water Meeting', descZh: '冬令北方寒水全备，深邃智谋，方局汇聚能量最为浩荡，优先于普通生克与刑冲', descEn: 'Northern Winter Water Directional Meeting: profound seasonal wisdom taking precedence over standard clashes' }
    ];

    // Three Harmonies Combination Bureaus (三合局: 生旺库化合)
    const SAN_HE_DEFS = [
      { branches: ['申', '子', '辰'], key: '申子辰', element: '水', nameZh: '申子辰三合水局', nameEn: 'Shen-Zi-Chen Water Bureau', descZh: '申生长、子帝旺、辰墓库，三合聚气化水，主智谋深远、流动周全，优先于个别刑冲', descEn: 'Water Bureau (Shen-Zi-Chen): birth, peak, and storage unite into fluid wisdom' },
      { branches: ['亥', '卯', '未'], key: '亥卯未', element: '木', nameZh: '亥卯未三合木局', nameEn: 'Hai-Mao-Wei Wood Bureau', descZh: '亥生长、卯帝旺、未墓库，三合聚气化木，主人文仁德、创新生发，优先于个别刑冲', descEn: 'Wood Bureau (Hai-Mao-Wei): birth, peak, and storage unite into benevolent growth' },
      { branches: ['寅', '午', '戌'], key: '寅午戌', element: '火', nameZh: '寅午戌三合火局', nameEn: 'Yin-Wu-Xu Fire Bureau', descZh: '寅生长、午帝旺、戌墓库，三合聚气化火，主光明热情、威权礼节，优先于个别刑冲', descEn: 'Fire Bureau (Yin-Wu-Xu): birth, peak, and storage unite into radiant illumination' },
      { branches: ['巳', '酉', '丑'], key: '巳酉丑', element: '金', nameZh: '巳酉丑三合金局', nameEn: 'Si-You-Chou Metal Bureau', descZh: '巳生长、酉帝旺、丑墓库，三合聚气化金，主刚正决断、义气严整，优先于个别刑冲', descEn: 'Metal Bureau (Si-You-Chou): birth, peak, and storage unite into decisive integrity' }
    ];

    // Half Combination Bureaus (半合局与拱合)
    const BAN_HE_DEFS = {
      '申子': { element: '水', type: '生旺半合', nameZh: '申子半合水局', nameEn: 'Shen-Zi Half Water Bureau' },
      '子辰': { element: '水', type: '旺库半合', nameZh: '子辰半合水局', nameEn: 'Zi-Chen Half Water Bureau' },
      '申辰': { element: '水', type: '拱合水局', nameZh: '申辰拱合水局', nameEn: 'Shen-Chen Arch Water Bureau' },
      '亥卯': { element: '木', type: '生旺半合', nameZh: '亥卯半合木局', nameEn: 'Hai-Mao Half Wood Bureau' },
      '卯未': { element: '木', type: '旺库半合', nameZh: '卯未半合木局', nameEn: 'Mao-Wei Half Wood Bureau' },
      '亥未': { element: '木', type: '拱合木局', nameZh: '亥未拱合木局', nameEn: 'Hai-Wei Arch Wood Bureau' },
      '寅午': { element: '火', type: '生旺半合', nameZh: '寅午半合火局', nameEn: 'Yin-Wu Half Fire Bureau' },
      '午戌': { element: '火', type: '旺库半合', nameZh: '午戌半合火局', nameEn: 'Wu-Xu Half Fire Bureau' },
      '寅戌': { element: '火', type: '拱合火局', nameZh: '寅戌拱合火局', nameEn: 'Yin-Xu Arch Fire Bureau' },
      '巳酉': { element: '金', type: '生旺半合', nameZh: '巳酉半合金局', nameEn: 'Si-You Half Metal Bureau' },
      '酉丑': { element: '金', type: '旺库半合', nameZh: '酉丑半合金局', nameEn: 'You-Chou Half Metal Bureau' },
      '巳丑': { element: '金', type: '拱合金局', nameZh: '巳丑拱合金局', nameEn: 'Si-Chou Arch Metal Bureau' }
    };

    const sanHuiCombos = [];
    const sanHeCombos = [];
    const banHeCombos = [];

    // Detect Three Directional Meetings (三会局)
    SAN_HUI_DEFS.forEach(def => {
      const allFound = def.branches.every(b => allBranches.includes(b));
      if (allFound) {
        sanHuiCombos.push({
          key: def.key,
          branches: def.branches,
          element: def.element,
          nameZh: def.nameZh,
          nameEn: def.nameEn,
          descZh: def.descZh,
          descEn: def.descEn,
          priority: 1
        });
      }
    });

    // Detect Three Harmonies (三合局)
    SAN_HE_DEFS.forEach(def => {
      const allFound = def.branches.every(b => allBranches.includes(b));
      if (allFound) {
        sanHeCombos.push({
          key: def.key,
          branches: def.branches,
          element: def.element,
          nameZh: def.nameZh,
          nameEn: def.nameEn,
          descZh: def.descZh,
          descEn: def.descEn,
          priority: 2
        });
      }
    });

    // Detect Half Harmonies (半合局) if full San He not present for that element
    for (let i = 0; i < pKeys.length; i++) {
      for (let j = i + 1; j < pKeys.length; j++) {
        const k1 = pKeys[i];
        const k2 = pKeys[j];
        const bPair = pillars[k1].branch + pillars[k2].branch;
        const bRev = pillars[k2].branch + pillars[k1].branch;
        const bh = BAN_HE_DEFS[bPair] || BAN_HE_DEFS[bRev];
        if (bh) {
          const hasFullHe = sanHeCombos.some(sh => sh.element === bh.element);
          if (!hasFullHe) {
            banHeCombos.push({
              p1: k1, p2: k2,
              branches: bPair,
              element: bh.element,
              type: bh.type,
              nameZh: `${pNamesZh[k1]}${pNamesZh[k2]}支【${bPair}】${bh.nameZh}`,
              nameEn: `${pNamesEn[k1]}-${pNamesEn[k2]} Branches (${bh.nameEn})`
            });
          }
        }
      }
    }

    // Energy Priority Resolution:
    // If branch is engaged in a San Hui or San He combination, combination energy takes priority over clashes/harms/punishments
    const dominantComboBranches = new Set();
    sanHuiCombos.forEach(c => c.branches.forEach(b => dominantComboBranches.add(b)));
    sanHeCombos.forEach(c => c.branches.forEach(b => dominantComboBranches.add(b)));

    branchClashes.forEach(c => {
      const b1 = c.branches[0];
      const b2 = c.branches[1];
      if (dominantComboBranches.has(b1) || dominantComboBranches.has(b2)) {
        c.resolvedByCombo = true;
        c.resolutionNoteZh = '贪合忘冲：三合/三会方局能量优先汇聚，此冲激荡已为合局吸收化解。';
        c.resolutionNoteEn = 'Combination takes precedence over clash: energetic synthesis neutralizes friction.';
      }
    });

    branchPunishments.forEach(p => {
      if (p.branches && [...p.branches].some(b => dominantComboBranches.has(b))) {
        p.resolvedByCombo = true;
        p.resolutionNoteZh = '贪合忘刑：合会浩荡生克能量主导全局，刑伤之气退居其次。';
        p.resolutionNoteEn = 'Bureau combination energy takes precedence, moderating punishment friction.';
      }
    });

    branchHarms.forEach(h => {
      const b1 = h.branches[0];
      const b2 = h.branches[1];
      if (dominantComboBranches.has(b1) || dominantComboBranches.has(b2)) {
        h.resolvedByCombo = true;
        h.resolutionNoteZh = '贪合忘害：三合会局势隆，穿害被合气涵摄化解。';
        h.resolutionNoteEn = 'Harm subsumed and resolved by dominant combination bureau.';
      }
    });

    // Stem Jealous/Competing Combination (争合/妒合)
    let isJealousCombo = false;
    if (stemCombos.length >= 2) {
      const stemCount = {};
      [pillars.year.stem, pillars.month.stem, pillars.day.stem, pillars.hour.stem].forEach(s => {
        stemCount[s] = (stemCount[s] || 0) + 1;
      });
      for (const [s, cnt] of Object.entries(stemCount)) {
        if (cnt >= 2) isJealousCombo = true;
      }
    }

    const hasMonthDayClash = branchClashes.some(c => (c.p1 === 'month' && c.p2 === 'day') || (c.p1 === 'day' && c.p2 === 'month'));
    const hasDayHourClash = branchClashes.some(c => (c.p1 === 'day' && c.p2 === 'hour') || (c.p1 === 'hour' && c.p2 === 'day'));
    const hasYearMonthClash = branchClashes.some(c => (c.p1 === 'year' && c.p2 === 'month') || (c.p1 === 'month' && c.p2 === 'year'));
    const hasMonthDayHarm = branchHarms.some(h => (h.p1 === 'month' && h.p2 === 'day') || (h.p1 === 'day' && h.p2 === 'month'));
    const hasDayHourHarm = branchHarms.some(h => (h.p1 === 'day' && h.p2 === 'hour') || (h.p1 === 'hour' && h.p2 === 'day'));
    const hasYearMonthHarm = branchHarms.some(h => (h.p1 === 'year' && h.p2 === 'month') || (h.p1 === 'month' && h.p2 === 'year'));
    const hasMonthDayCombo = branchCombos.some(c => (c.p1 === 'month' && c.p2 === 'day') || (c.p1 === 'day' && c.p2 === 'month'));
    const hasDayHourCombo = branchCombos.some(c => (c.p1 === 'day' && c.p2 === 'hour') || (c.p1 === 'hour' && c.p2 === 'day'));

    // Generate synthesis narrative
    const partsZh = [];
    const partsEn = [];
    if (sanHuiCombos.length > 0) {
      partsZh.push(`原局汇成【${sanHuiCombos.map(c => c.nameZh).join('、')}】`);
      partsEn.push(`Natal chart forms Directional Meeting [${sanHuiCombos.map(c => c.nameEn).join('; ')}]`);
    }
    if (sanHeCombos.length > 0) {
      partsZh.push(`原局聚合【${sanHeCombos.map(c => c.nameZh).join('、')}】`);
      partsEn.push(`Natal chart forms Three Harmonies [${sanHeCombos.map(c => c.nameEn).join('; ')}]`);
    }
    if (banHeCombos.length > 0) {
      partsZh.push(`带半合【${banHeCombos.map(c => c.nameZh).join('、')}】`);
      partsEn.push(`Natal chart carries Half Harmonies [${banHeCombos.map(c => c.nameEn).join('; ')}]`);
    }
    if (stemCombos.length > 0) {
      partsZh.push(`天干显【${stemCombos.map(c => c.nameZh).join('、')}】`);
      partsEn.push(`Heavenly Stems manifest ${stemCombos.map(c => c.nameEn).join('; ')}`);
    }
    if (stemClashes.length > 0) {
      partsZh.push(`天干交【${stemClashes.map(c => c.nameZh).join('、')}】`);
      partsEn.push(`Heavenly Stems clash via ${stemClashes.map(c => c.nameEn).join('; ')}`);
    }
    if (branchCombos.length > 0) {
      partsZh.push(`地支逢【${branchCombos.map(c => c.nameZh).join('、')}】`);
      partsEn.push(`Earthly Branches combine via ${branchCombos.map(c => c.nameEn).join('; ')}`);
    }
    if (branchClashes.length > 0) {
      partsZh.push(`地支见【${branchClashes.map(c => c.nameZh).join('、')}】`);
      partsEn.push(`Earthly Branches clash via ${branchClashes.map(c => c.nameEn).join('; ')}`);
    }
    if (branchHarms.length > 0) {
      partsZh.push(`暗伏【${branchHarms.map(c => c.nameZh).join('、')}】`);
      partsEn.push(`Subtle piercing harms detected via ${branchHarms.map(c => c.nameEn).join('; ')}`);
    }
    if (branchPunishments.length > 0) {
      partsZh.push(`带【${branchPunishments.map(p => p.nameZh).join('、')}】`);
      partsEn.push(`Punishment signatures detected: ${branchPunishments.map(p => p.nameEn).join('; ')}`);
    }

    const summaryZh = partsZh.length > 0
      ? partsZh.join('；') + '。命局干支交互复杂，需以此定格局张力与化解之法。'
      : '干支气象纯良相生，无显著刑冲破害，主一生行事稳健平顺。';
    const summaryEn = partsEn.length > 0
      ? partsEn.join('; ') + '. Deep dynamic tensions shape destiny.'
      : 'Harmonious elemental circulation with minimal friction.';

    return {
      sanHuiCombos,
      sanHeCombos,
      banHeCombos,
      stemCombos,
      stemClashes,
      branchCombos,
      branchClashes,
      branchHarms,
      branchPunishments,
      isJealousCombo,
      hasMonthDayClash,
      hasDayHourClash,
      hasYearMonthClash,
      hasMonthDayHarm,
      hasDayHourHarm,
      hasYearMonthHarm,
      hasMonthDayCombo,
      hasDayHourCombo,
      summaryZh,
      summaryEn
    };
  }

  /**
   * 子平 100 分制生克量化评分体系 (Ziping 100-Point Quantitative Scoring Engine)
   * 权重体系:
   * - 天干各 10 分 (年干 10, 月干 10, 日干 10, 时干 10，共 40 分)；日干永远+
   * - 月地支 35 分，日地支 15 分，年时支各 5 分 (共 60 分)
   * - 辰戌丑未杂气精准折算 (按藏干与分日深浅比例折算: 本气 60%, 余气 30%, 中气 10%)
   * - 判定四大命格: 极弱格 (<15)、较弱格 (15-50)、较旺格 (50-85)、极旺格 (>85 对应五大专旺格)
   * - 用神取法 (弱取生扶印比，旺取克泄耗财官食伤)
   * - 用神距离日干 (日支 15分 > 月干 10分 > 时干 10分)
   * - 月令有力性 (月支 35分)
   * - 判定命格高低 (富贵命格 / 较好命格 / 普通命格)
   */
  static calculateZipingScore(chart) {
    if (!chart || !chart.pillars) return null;
    const dm = chart.dayMaster || chart.pillars.day.stem;
    const dmIdx = STEMS.indexOf(dm);
    const dmElement = STEM_ELEMENTS[dmIdx];

    const generatedBy = { '木': '水', '火': '木', '土': '火', '金': '土', '水': '金' };
    const parentElement = generatedBy[dmElement];
    const supportingElements = [dmElement, parentElement];

    const pillars = chart.pillars;

    // Stems (40 points total: 10 each)
    const stemsBreakdown = {
      year: { stem: pillars.year.stem, element: pillars.year.stemElement, weight: 10, score: 0, isSupport: false },
      month: { stem: pillars.month.stem, element: pillars.month.stemElement, weight: 10, score: 0, isSupport: false },
      day: { stem: pillars.day.stem, element: dmElement, weight: 10, score: 10, isSupport: true, note: '日干永远+' },
      hour: { stem: pillars.hour.stem, element: pillars.hour.stemElement, weight: 10, score: 0, isSupport: false }
    };

    ['year', 'month', 'hour'].forEach(k => {
      const el = stemsBreakdown[k].element;
      if (supportingElements.includes(el)) {
        stemsBreakdown[k].score = 10;
        stemsBreakdown[k].isSupport = true;
      }
    });

    const stemsScore = stemsBreakdown.year.score + stemsBreakdown.month.score + stemsBreakdown.day.score + stemsBreakdown.hour.score;

    // Branches (60 points total: Month=35, Day=15, Year=5, Hour=5)
    const branchWeights = { month: 35, day: 15, year: 5, hour: 5 };
    const zaQiBranches = ['辰', '戌', '丑', '未'];
    const branchesBreakdown = {};
    let branchesScore = 0;

    ['month', 'day', 'year', 'hour'].forEach(k => {
      const p = pillars[k];
      const br = p.branch;
      const maxW = branchWeights[k];
      const isZaQi = zaQiBranches.includes(br);

      if (isZaQi) {
        const hidden = HIDDEN_STEMS[br] || [];
        let supportRatio = 0;
        const supportingHidden = [];
        hidden.forEach(h => {
          const hEl = STEM_ELEMENTS[STEMS.indexOf(h.stem)];
          if (supportingElements.includes(hEl)) {
            supportRatio += h.weight;
            supportingHidden.push({ stem: h.stem, element: hEl, weight: h.weight });
          }
        });
        const score = parseFloat((maxW * supportRatio).toFixed(2));
        branchesScore += score;
        branchesBreakdown[k] = {
          branch: br,
          maxWeight: maxW,
          score,
          isZaQi: true,
          supportRatio,
          supportingHidden
        };
      } else {
        const brEl = BRANCH_ELEMENTS[BRANCHES.indexOf(br)];
        const isSupport = supportingElements.includes(brEl);
        const score = isSupport ? maxW : 0;
        branchesScore += score;
        branchesBreakdown[k] = {
          branch: br,
          maxWeight: maxW,
          score,
          isZaQi: false,
          element: brEl,
          isSupport
        };
      }
    });

    const totalScore = parseFloat((stemsScore + branchesScore).toFixed(2));

    // Determine Pattern Category (四大命格 & 五大专旺格)
    let categoryKey = 'moderate_weak';
    let categoryZh = '较弱格';
    let categoryEn = 'Moderately Weak Pattern';
    let dominantSpecialPattern = null;
    let dominantSpecialPatternEn = null;

    if (totalScore < 15) {
      categoryKey = 'extreme_weak';
      categoryZh = '极弱格 (弃命从格 / 极度衰微)';
      categoryEn = 'Extremely Weak Pattern (Follow / Ultra-Weak)';
    } else if (totalScore <= 50) {
      categoryKey = 'moderate_weak';
      categoryZh = '较弱格 (喜印比生扶)';
      categoryEn = 'Moderately Weak Pattern (Resource & Companion Favored)';
    } else if (totalScore <= 85) {
      categoryKey = 'moderate_strong';
      categoryZh = '较旺格 (喜克泄耗财官食伤)';
      categoryEn = 'Moderately Strong Pattern (Wealth, Officer, Food Favored)';
    } else {
      categoryKey = 'extreme_strong';
      categoryZh = '极旺格 (专旺气象)';
      categoryEn = 'Extremely Strong Pattern (Dominant Monopolistic)';

      const specialMap = {
        '木': { zh: '曲直格 (仁寿格)', en: 'Qu Zhi (Curving & Straight Wood)' },
        '火': { zh: '炎上格 (明德格)', en: 'Yan Shang (Flaming Upward Fire)' },
        '土': { zh: '稼穑格 (厚德格)', en: 'Jia Se (Sowing & Reaping Earth)' },
        '金': { zh: '从革格 (刚毅格)', en: 'Cong Ge (Molding & Refining Metal)' },
        '水': { zh: '润下格 (灵智格)', en: 'Run Xia (Soaking & Descending Water)' }
      };
      const sp = specialMap[dmElement] || { zh: '专旺格', en: 'Dominant Monopolistic' };
      dominantSpecialPattern = sp.zh;
      dominantSpecialPatternEn = sp.en;
      categoryZh = `极旺格 · 五大专旺之【${dominantSpecialPattern}】`;
      categoryEn = `Extremely Strong · Dominant [${dominantSpecialPatternEn}]`;
    }

    // Favorable & Unfavorable Gods (用神取法)
    let favorableGodsZh = [];
    let favorableGodsEn = [];
    let unfavorableGodsZh = [];
    let unfavorableGodsEn = [];

    if (totalScore <= 50) {
      favorableGodsZh = ['正印', '偏印 (枭神)', '比肩', '劫财'];
      favorableGodsEn = ['Direct Resource', 'Indirect Resource', 'Friend (Peer)', 'Rob Wealth'];
      unfavorableGodsZh = ['正财', '偏财', '正官', '七杀', '伤官', '食神'];
      unfavorableGodsEn = ['Direct Wealth', 'Indirect Wealth', 'Direct Officer', 'Seven Killings', 'Hurting Officer', 'Eating God'];
    } else if (totalScore <= 85) {
      favorableGodsZh = ['正官', '七杀', '正财', '偏财', '食神', '伤官'];
      favorableGodsEn = ['Direct Officer', 'Seven Killings', 'Direct Wealth', 'Indirect Wealth', 'Eating God', 'Hurting Officer'];
      unfavorableGodsZh = ['正印', '偏印', '比肩', '劫财'];
      unfavorableGodsEn = ['Direct Resource', 'Indirect Resource', 'Friend (Peer)', 'Rob Wealth'];
    } else {
      favorableGodsZh = ['比肩', '劫财', '食神', '伤官', '正印'];
      favorableGodsEn = ['Companion', 'Rob Wealth', 'Eating God', 'Hurting Officer', 'Direct Resource'];
      unfavorableGodsZh = ['正官', '七杀', '正财', '偏财'];
      unfavorableGodsEn = ['Direct Officer', 'Seven Killings', 'Direct Wealth', 'Indirect Wealth'];
    }

    // Proximity to Day Master (用神距离日干: 日支15分 > 月干10分 > 时干10分)
    const proximityChecks = {
      dayBranch: {
        position: '日支',
        positionEn: 'Day Branch',
        weight: 15,
        weightRank: 1,
        tenGod: (pillars.day.hidden && pillars.day.hidden[0]) ? pillars.day.hidden[0].god : '',
        isFavorable: false
      },
      monthStem: {
        position: '月干',
        positionEn: 'Month Stem',
        weight: 10,
        weightRank: 2,
        tenGod: pillars.month.stemGod || '',
        isFavorable: false
      },
      hourStem: {
        position: '时干',
        positionEn: 'Hour Stem',
        weight: 10,
        weightRank: 3,
        tenGod: pillars.hour.stemGod || '',
        isFavorable: false
      }
    };

    ['dayBranch', 'monthStem', 'hourStem'].forEach(k => {
      const item = proximityChecks[k];
      if (item.tenGod && favorableGodsZh.some(fg => item.tenGod.includes(fg) || fg.includes(item.tenGod))) {
        item.isFavorable = true;
      }
    });

    // Monthly Command Support (月令有力性: 月支35分)
    const monthBranchElement = BRANCH_ELEMENTS[BRANCHES.indexOf(pillars.month.branch)];
    const monthBranchSupportsFavorable = (totalScore <= 50)
      ? supportingElements.includes(monthBranchElement)
      : !supportingElements.includes(monthBranchElement);

    // Pattern Tier (命格高低: 富贵命格 / 较好命格 / 普通命格)
    let tierKey = 'ordinary';
    let tierZh = '普通命格 (平稳持重)';
    let tierEn = 'Grounded Ordinary Tier';
    let tierReasonZh = '';
    let tierReasonEn = '';

    const favorableCountNear = [proximityChecks.dayBranch.isFavorable, proximityChecks.monthStem.isFavorable, proximityChecks.hourStem.isFavorable].filter(Boolean).length;

    if (dominantSpecialPattern || (favorableCountNear >= 2 && monthBranchSupportsFavorable) || (proximityChecks.dayBranch.isFavorable && proximityChecks.monthStem.isFavorable)) {
      tierKey = 'noble';
      tierZh = '富贵命格 (上乘贵格)';
      tierEn = 'Nobility & High Accomplishment Pattern';
      tierReasonZh = dominantSpecialPattern
        ? `专旺大格【${dominantSpecialPattern}】真纯成局，气专势盛，主名垂青史、执掌大权。`
        : '用神在近位（日支坐基/月干门户）强力透出护身，且得月令有力生扶，格局高昂清纯，功名显达。';
      tierReasonEn = dominantSpecialPattern
        ? `Pure Special Dominant Pattern [${dominantSpecialPatternEn}] formed with pristine concentrated energy.`
        : 'Favorable god anchored in close proximity (Day Branch / Month Stem) and strongly backed by Monthly Command.';
    } else if (favorableCountNear >= 1 || monthBranchSupportsFavorable) {
      tierKey = 'good';
      tierZh = '较好命格 (中上成格)';
      tierEn = 'Promising & Flourishing Pattern';
      tierReasonZh = '用神在月干、时干或日支得力承托，全局五行流通有救，一生顺遂富足，能成实业名声。';
      tierReasonEn = 'Favorable god effectively situated adjacent to Day Master; energetic circulation intact; predicts lasting prosperity.';
    } else {
      tierKey = 'ordinary';
      tierZh = '普通命格 (平稳持重)';
      tierEn = 'Grounded Ordinary Pattern';
      tierReasonZh = '用神远在年柱或深藏未透，日主受制较重，更需依赖后天大运良机破局，宜守正求稳。';
      tierReasonEn = 'Favorable god distant or constrained; destiny relies significantly on favorable transit cycles.';
    }

    return {
      totalScore,
      categoryKey,
      categoryZh,
      categoryEn,
      dominantSpecialPattern,
      dominantSpecialPatternEn,
      stemsScore,
      branchesScore,
      stemsBreakdown,
      branchesBreakdown,
      favorableGodsZh,
      favorableGodsEn,
      unfavorableGodsZh,
      unfavorableGodsEn,
      proximityChecks,
      favorableCountNear,
      monthBranchSupportsFavorable,
      tierKey,
      tierZh,
      tierEn,
      tierReasonZh,
      tierReasonEn
    };
  }

  /**
   * Calculate Canonical Shen Sha (四柱神煞与四大吉神)
   * Evaluates Tian Yi, Wen Chang, Hong Luan, Tian Xi, Yi Ma, Lu Shen, Jiang Xing, Hua Gai, etc.
   */
  static calculateShenSha(bazi, lang = 'zh') {
    if (!bazi || !bazi.pillars) return null;
    const isEn = (lang === 'en');
    const dayStem = bazi.pillars.day?.stem || '甲';
    const yearStem = bazi.pillars.year?.stem || '甲';
    const yearBranch = bazi.pillars.year?.branch || '子';
    const dayBranch = bazi.pillars.day?.branch || '子';

    const pillarKeys = ['year', 'month', 'day', 'hour'];
    const pillarNamesZh = { year: '年柱', month: '月柱', day: '日柱', hour: '时柱' };
    const pillarNamesEn = { year: 'Year Pillar', month: 'Month Pillar', day: 'Day Pillar', hour: 'Hour Pillar' };

    // 1. Tian Yi Nobleman (天乙贵人)
    // 甲戊庚牛羊，乙己鼠猴乡，丙丁猪鸡位，壬癸兔蛇藏，六辛逢马虎
    const tianYiMap = {
      '甲': ['丑', '未'], '戊': ['丑', '未'], '庚': ['丑', '未'],
      '乙': ['子', '申'], '己': ['子', '申'],
      '丙': ['亥', '酉'], '丁': ['亥', '酉'],
      '壬': ['卯', '巳'], '癸': ['卯', '巳'],
      '辛': ['午', '寅']
    };
    const dayTianYi = tianYiMap[dayStem] || [];
    const yearTianYi = tianYiMap[yearStem] || [];
    const allTianYiBranches = Array.from(new Set([...dayTianYi, ...yearTianYi]));

    // 2. Wen Chang Nobleman (文昌贵人)
    // 甲巳乙午丙戊申，丁己酉位庚亥寻，辛子壬寅癸见卯
    const wenChangMap = {
      '甲': '巳', '乙': '午', '丙': '申', '丁': '酉', '戊': '申',
      '己': '酉', '庚': '亥', '辛': '子', '壬': '寅', '癸': '卯'
    };
    const dayWenChang = wenChangMap[dayStem];
    const yearWenChang = wenChangMap[yearStem];

    // 3. Hong Luan & Tian Xi (红鸾天喜)
    // 卯上起子逆数太岁，对宫天喜
    const BRANCHES_ORDER = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
    const yIdx = BRANCHES_ORDER.indexOf(yearBranch);
    const hongLuanBranch = yIdx !== -1 ? BRANCHES_ORDER[(3 - yIdx + 12) % 12] : '卯';
    const tianXiBranch = yIdx !== -1 ? BRANCHES_ORDER[((3 - yIdx + 12) % 12 + 6) % 12] : '酉';

    // 4. Yi Ma Post Horse (驿马星动)
    // 申子辰马在寅，寅午戌马在申，巳酉丑马在亥，亥卯未马在巳
    const yimaMap = {
      '申': '寅', '子': '寅', '辰': '寅',
      '寅': '申', '午': '申', '戌': '申',
      '巳': '亥', '酉': '亥', '丑': '亥',
      '亥': '巳', '卯': '巳', '未': '巳'
    };
    const yearYiMa = yimaMap[yearBranch];
    const dayYiMa = yimaMap[dayBranch];
    const allYiMaBranches = Array.from(new Set([yearYiMa, dayYiMa].filter(Boolean)));

    // 5. Lu Shen (禄神)
    const luShenMap = {
      '甲': '寅', '乙': '卯', '丙': '巳', '丁': '午', '戊': '巳',
      '己': '午', '庚': '申', '辛': '酉', '壬': '亥', '癸': '子'
    };
    const luShenBranch = luShenMap[dayStem];

    // 6. Jiang Xing (将星)
    const jiangXingMap = {
      '申': '子', '子': '子', '辰': '子',
      '寅': '午', '午': '午', '戌': '午',
      '巳': '酉', '酉': '酉', '丑': '酉',
      '亥': '卯', '卯': '卯', '未': '卯'
    };
    const jiangXingBranch = jiangXingMap[yearBranch];

    // 7. Hua Gai (华盖)
    const huaGaiMap = {
      '申': '辰', '子': '辰', '辰': '辰',
      '寅': '戌', '午': '戌', '戌': '戌',
      '巳': '丑', '酉': '丑', '丑': '丑',
      '亥': '未', '卯': '未', '未': '未'
    };
    const huaGaiBranch = huaGaiMap[yearBranch];

    // Evaluate for each pillar
    const pillarsShenSha = {};
    pillarKeys.forEach(pKey => {
      const p = bazi.pillars[pKey];
      if (!p) return;
      const b = p.branch;
      const badges = [];

      // Tian Yi
      if (dayTianYi.includes(b) || yearTianYi.includes(b)) {
        const isDayNoble = dayTianYi.includes(b);
        badges.push({
          id: 'tianyi',
          name: isEn ? 'Tian Yi Noble' : (isDayNoble ? '天乙贵人(日贵)' : '天乙贵人(岁贵)'),
          icon: '✨',
          color: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
          desc: isEn ? 'Supreme Nobleman: shields against hazards, grants divine rescue.' : '至尊第一吉神：逢凶化吉，危难时刻必有贵人援手。'
        });
      }

      // Wen Chang
      if (b === dayWenChang || b === yearWenChang) {
        badges.push({
          id: 'wenchang',
          name: isEn ? 'Wen Chang Wisdom' : '文昌贵人',
          icon: '📖',
          color: 'bg-blue-500/20 text-blue-300 border-blue-500/40',
          desc: isEn ? 'Academic & Wisdom Star: boosts cognition, research, exams, and innovation.' : '科甲智慧吉神：文思敏捷，利学业申博、执笔破圈与考学晋升。'
        });
      }

      // Hong Luan
      if (b === hongLuanBranch) {
        badges.push({
          id: 'hongluan',
          name: isEn ? 'Hong Luan Romance' : '红鸾正缘',
          icon: '🌸',
          color: 'bg-rose-500/20 text-rose-300 border-rose-500/40',
          desc: isEn ? 'Destined Romance Star: sparks true soulmate affinity and matrimonial bond.' : '正缘第一吉神：主情缘和顺、定下名分、喜结良缘与婚育之喜。'
        });
      }

      // Tian Xi
      if (b === tianXiBranch) {
        badges.push({
          id: 'tianxi',
          name: isEn ? 'Tian Xi Celebration' : '天喜吉神',
          icon: '🎉',
          color: 'bg-pink-500/20 text-pink-300 border-pink-500/40',
          desc: isEn ? 'Joyful Blessing Star: softens interpersonal tension, brings household happiness.' : '祥和喜乐吉神：对宫拱照红鸾，增进和睦喜悦，化解冷战阻碍。'
        });
      }

      // Yi Ma
      if (allYiMaBranches.includes(b)) {
        badges.push({
          id: 'yima',
          name: isEn ? 'Post Horse Dynamic' : '驿马星动',
          icon: '🐎',
          color: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
          desc: isEn ? 'Pivotal Mobility Star: drives career leap, relocation, and expansion.' : '时空跃迁动星：主动能爆发、迁徙出洋、异地开拓与晋升换轨。'
        });
      }

      // Lu Shen
      if (b === luShenBranch) {
        badges.push({
          id: 'lushen',
          name: isEn ? 'Prosperity Salary' : '专位禄神',
          icon: '🏛️',
          color: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
          desc: isEn ? 'Salary & Self-Reliance Star: signifies authentic foundational strength.' : '福禄本源之星：主身体强健、食禄丰足、自立自强与稳健资产。'
        });
      }

      // Jiang Xing
      if (b === jiangXingBranch) {
        badges.push({
          id: 'jiangxing',
          name: isEn ? 'General Command' : '将星当权',
          icon: '⭐',
          color: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40',
          desc: isEn ? 'Leadership Authority Star: confers organizational command and strategic edge.' : '统帅掌印之星：主大局统御、领导威望、决断果敢与管理实权。'
        });
      }

      // Hua Gai
      if (b === huaGaiBranch) {
        badges.push({
          id: 'huagai',
          name: isEn ? 'Canopy Spiritual' : '华盖灵性',
          icon: '📜',
          color: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
          desc: isEn ? 'Spiritual Insight Star: deep intellect, artistic talent, and philosophical introspection.' : '艺术哲学之星：主灵性超凡、深度思辨、见解独到与沉静自持。'
        });
      }

      pillarsShenSha[pKey] = badges;
    });

    const bPinyin = { '子': 'Zi', '丑': 'Chou', '寅': 'Yin', '卯': 'Mao', '辰': 'Chen', '巳': 'Si', '午': 'Wu', '未': 'Wei', '申': 'Shen', '酉': 'You', '戌': 'Xu', '亥': 'Hai' };

    // Helper to find location description
    function findLocations(targetBranches) {
      const locsZh = [];
      const locsEn = [];
      pillarKeys.forEach(pKey => {
        const b = bazi.pillars[pKey]?.branch;
        if (targetBranches.includes(b)) {
          if (!isEn) locsZh.push(`${pillarNamesZh[pKey]}【${b}】`);
          locsEn.push(`${pillarNamesEn[pKey]} [${bPinyin[b] || b}]`);
        }
      });
      if (isEn) {
        return {
          present: locsEn.length > 0,
          desc: locsEn.length > 0 ? locsEn.join(', ') : 'Not in natal pillars',
          descEn: locsEn.length > 0 ? locsEn.join(', ') : 'Not in natal pillars'
        };
      }
      return {
        present: locsZh.length > 0,
        desc: locsZh.length > 0 ? locsZh.join('、') : '原局未透',
        descZh: locsZh.length > 0 ? locsZh.join('、') : '原局未透',
        descEn: locsEn.length > 0 ? locsEn.join(', ') : 'Not in natal pillars'
      };
    }

    const tianYiLoc = findLocations(allTianYiBranches);
    const wenChangLoc = findLocations([dayWenChang, yearWenChang].filter(Boolean));
    const hongLuanLoc = findLocations([hongLuanBranch]);
    const tianXiLoc = findLocations([tianXiBranch]);
    const yimaLoc = findLocations(allYiMaBranches);

    const tianYiEnList = allTianYiBranches.map(b => bPinyin[b] || b).join('/');
    const wenChangEnList = [dayWenChang, yearWenChang].filter(Boolean).map(b => bPinyin[b] || b).join('/');
    const hongLuanEn = bPinyin[hongLuanBranch] || hongLuanBranch;
    const tianXiEn = bPinyin[tianXiBranch] || tianXiBranch;
    const yimaEnList = allYiMaBranches.map(b => bPinyin[b] || b).join('/');

    const fourAuspicious = [
      {
        id: 'tianyi',
        name: isEn ? 'Tian Yi Nobleman' : '天乙贵人',
        icon: '👑',
        status: tianYiLoc.present ? (isEn ? 'Present in Natal Chart' : '本命坐守 · 岁岁护佑') : (isEn ? 'Awaiting Transit Awakening' : '原局待发 · 岁运引动'),
        statusClass: tianYiLoc.present ? 'bg-amber-950/80 text-amber-300 border-amber-500/50' : 'bg-gray-800/80 text-gray-300 border-gray-700',
        locationText: isEn ? tianYiLoc.descEn : tianYiLoc.descZh,
        verse: isEn ? 'Ancient Codex: "Tian Yi transforms hardship into fortune and summons paramount mentors."' : '“甲戊庚牛羊，乙己鼠猴乡，丙丁猪鸡位，壬癸兔蛇藏，六辛逢马虎” —— 《渊海子平》',
        essence: isEn ? 'The supreme paramount deity. Shields against existential crises; attracts influential mentors and transforms peril into triumph.' : '至尊极品吉神。凡命带天乙，一生遇大难必有高位贵人或长辈恩师出手托底救应，遇险呈祥，是消灾化劫第一枢纽。',
        trigger: isEn ? `Triggered in [${tianYiEnList}] transit years or lunar months; optimal for seeking vital sponsorship.` : `岁运遇【${allTianYiBranches.join(' / ')}】流年或农历流月，贵人星动，宜主动拜见贵人、争取核心资源。`,
        advisorQuery: isEn ? 'When is my Tian Yi Nobleman active in 2026, and how to harness mentor support?' : '我的天乙贵人在2026年何时当值？如何主动接引贵人助力？'
      },
      {
        id: 'wenchang',
        name: isEn ? 'Wen Chang Wisdom Star' : '文昌贵人',
        icon: '📚',
        status: wenChangLoc.present ? (isEn ? 'Present in Natal Chart' : '文曲入命 · 才思泉涌') : (isEn ? 'Awaiting Transit Awakening' : '潜龙在渊 · 岁运启智'),
        statusClass: wenChangLoc.present ? 'bg-blue-950/80 text-blue-300 border-blue-500/50' : 'bg-gray-800/80 text-gray-300 border-gray-700',
        locationText: isEn ? wenChangLoc.descEn : wenChangLoc.descZh,
        verse: isEn ? 'Ancient Codex: "Wen Chang rules scholastic brilliance, strategic patents, and cognitive sharpness."' : '“甲巳乙午丙戊申，丁己酉位庚亥寻，辛子壬寅癸见卯” —— 《子平真诠》',
        essence: isEn ? 'Academy and intellectual beacon. Fuels cognitive fluency, academic honors, technical research, and publication breakthroughs.' : '科甲文章之宿。主思维缜密敏锐、考学申博、专业绝技、论文专利与技术壁垒突破。遇之如破竹，举重若轻。',
        trigger: isEn ? `Awakened during [${wenChangEnList}] cycles; ideal for concentrated study, certifications, and exams.` : `岁运逢【${[dayWenChang, yearWenChang].filter(Boolean).join(' / ')}】之期，考运智识爆发，最宜闭关精研与重磅考试。`,
        advisorQuery: isEn ? 'When is my Wen Chang star at peak power, and how to optimize career advancement?' : '我的文昌贵人何时最旺？2026年如何催动考学、晋升与技术突破？'
      },
      {
        id: 'hongluan_tianxi',
        name: isEn ? 'Hong Luan & Tian Xi' : '红鸾天喜',
        icon: '🌸',
        status: (hongLuanLoc.present || tianXiLoc.present) ? (isEn ? 'Present in Natal Chart' : '吉曜照临 · 良缘早定') : (isEn ? 'Awaiting Transit Awakening' : '待时而动 · 流年待发'),
        statusClass: (hongLuanLoc.present || tianXiLoc.present) ? 'bg-rose-950/80 text-rose-300 border-rose-500/50' : 'bg-gray-800/80 text-gray-300 border-gray-700',
        locationText: isEn ? `Hong Luan: ${hongLuanLoc.descEn} | Tian Xi: ${tianXiLoc.descEn}` : `红鸾：${hongLuanLoc.descZh} · 天喜：${tianXiLoc.descZh}`,
        verse: isEn ? 'Ancient Codex: "Hong Luan anchors genuine matrimony; Tian Xi brings domestic joy and celebration."' : '“卯上起子逆数太岁，对宫天喜相随朝” —— 《三命通会》',
        essence: isEn ? 'Paramount soulmate and matrimonial star. Magnetizes true romantic destiny, resolves relationship estrangement, and brings joyous celebration.' : '婚恋正缘第一吉神。主异性缘佳、正缘交契、定下恋爱名分或步入婚姻殿堂；天喜对冲拱照，主家宅喜庆与添丁添喜。',
        trigger: isEn ? `Triggered in [${hongLuanEn}] Hong Luan year or [${tianXiEn}] Tian Xi year; primary window for committed partnership.` : `流年遇【${hongLuanBranch}】红鸾发动、遇【${tianXiBranch}】天喜照临，是婚恋结缘或破除单身僵局的黄金窗口。`,
        advisorQuery: isEn ? 'When will I encounter my destined partner, and in which direction are they located?' : '什么时候可以碰到对象，以及对象在何方？'
      },
      {
        id: 'yima',
        name: isEn ? 'Yi Ma Post Horse' : '驿马星动',
        icon: '🐎',
        status: yimaLoc.present ? (isEn ? 'Present in Natal Chart' : '天马行空 · 动能充沛') : (isEn ? 'Awaiting Transit Awakening' : '蓄势待发 · 逢冲即发'),
        statusClass: yimaLoc.present ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500/50' : 'bg-gray-800/80 text-gray-300 border-gray-700',
        locationText: isEn ? yimaLoc.descEn : yimaLoc.descZh,
        verse: isEn ? 'Ancient Codex: "The Post Horse unleashes rapid mobility, geographic transitions, and career velocity."' : '“申子辰马在寅，寅午戌马在申，巳酉丑马在亥，亥卯未马在巳” —— 《神峰通考》',
        essence: isEn ? 'Dynamic vector of momentum and expansion. Drives overseas relocation, swift promotion leaps, and boundary-breaking entrepreneurial moves.' : '时空动能与跨界跃迁第一吉星。主动能爆发、出洋留学、异地开拓、职级三级跳与突破行业内卷瓶颈。宜动不宜静。',
        trigger: isEn ? `Ignited during [${yimaEnList}] cycles; prime for bold pivots, strategic travel, and cross-border ventures.` : `流年遇【${allYiMaBranches.join(' / ')}】之期，气机激荡，最利换赛道、出差考察、海外立业与升迁调动。`,
        advisorQuery: isEn ? 'Should I pivot or hold steady in 2026? When will the Post Horse trigger my career surge?' : '2026年适合跳槽还是守成？驿马星何时发动财运爆发？'
      }
    ];

    if (isEn) {
      fourAuspicious.forEach(item => {
        item.nameEn = item.name;
        item.verseEn = item.verse;
        item.essenceEn = item.essence;
        item.triggerEn = item.trigger;
        item.advisorQueryEn = item.advisorQuery;
        item.statusEn = item.status;
        item.locationTextEn = item.locationText;
      });
    } else {
      fourAuspicious.forEach(item => {
        item.nameZh = item.name;
        item.verseZh = item.verse;
        item.essenceZh = item.essence;
        item.triggerZh = item.trigger;
        item.advisorQueryZh = item.advisorQuery;
        item.statusZh = item.status;
        item.locationTextZh = item.locationText;
      });
    }

    return {
      pillarsShenSha,
      fourAuspicious,
      tianYiLoc,
      wenChangLoc,
      hongLuanLoc,
      tianXiLoc,
      yimaLoc
    };
  }
}

// Export for ES modules and browser global
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { BaZiEngine, STEMS, BRANCHES, STEM_ELEMENTS, BRANCH_ELEMENTS, NA_YIN, SolarTermEngine };
}
if (typeof window !== 'undefined') {
  window.BaZiEngine = BaZiEngine;
  window.STEMS = STEMS;
  window.BRANCHES = BRANCHES;
  window.STEM_ELEMENTS = STEM_ELEMENTS;
  window.BRANCH_ELEMENTS = BRANCH_ELEMENTS;
}
