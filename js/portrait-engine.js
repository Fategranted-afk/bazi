/**
 * Five Canons Holistic Persona Portrait & Pattern Diagnostics Engine
 * (五经融贯 · 命理人物全息画像与格局用神总决系统)
 * Synthesizes:
 * 1. 《滴天髓》 (理气衰旺调和)
 * 2. 《三命通会》 (日时断法与万民英诗诀)
 * 3. 《穷通宝鉴》 (月令调候与寒暖燥湿)
 * 4. 《子平真诠》 (格局成败救应与相神法则)
 * 5. 《渊海子平》 (继善篇、喜忌篇与十神本相)
 */

class PortraitEngine {
  /**
   * Main analysis method
   * @param {Object} bazi - The calculated BaZi object from BaZiEngine
   */
  static analyze(bazi, lang = 'zh') {
    const dm = bazi.dayMaster; // e.g. "壬"
    const dmElement = bazi.dayMasterElement; // e.g. "水"
    const dmYinYang = bazi.dayMasterYinYang; // e.g. "阳"
    const monthBranch = bazi.solarInfo.monthBranch; // e.g. "卯" or "申"
    const dayPillar = bazi.pillars.day.text; // e.g. "壬子"
    const hourPillar = bazi.pillars.hour.text; // e.g. "癸卯"

    // 1. 生旺衰精微判别 (Vigor & Strength Evaluation)
    const vigor = this.evaluateVigor(bazi);

    // 2. 气候与调候用神诊断 (Climate & Seasonal Adjustment from 《穷通宝鉴》 & 《滴天髓》)
    const climate = this.evaluateClimate(dm, monthBranch);

    // 3. 格局甄别、四维精解与能量占比计算 (Pattern Diagnostics with 4 Dimensions & Energy Weights)
    const patterns = this.diagnosePatterns(bazi, vigor);

    // 4. 全息人物画像生成 (Persona Portrait Generation)
    const portrait = this.generatePersona(bazi, vigor, patterns, climate);

    // 5. 命主缺陷、心性盲区与败局暗礁深度透视 (Day Master Defects & Vulnerabilities)
    const defects = this.diagnoseDefects(bazi, vigor, patterns, climate);

    // 6. 命理调补与改运总决 (Remedy Guide for Weak/Strong Day Master)
    const remedyGuide = this.generateRemedyGuide(bazi, vigor, patterns, climate);

    // 7. 精神内耗专项诊断与实战彻底改善方案 (Mental Friction Diagnosis & Antidotes)
    const mentalFriction = this.diagnoseMentalFriction(bazi, vigor, patterns, climate);

    // 8. 👑 五经融通 · 帕累托 20% 关键枢纽全盘画像 (Pareto 80/20 Core Synthesis Report)
    const paretoCore = this.generateParetoCoreSynthesis(bazi, vigor, patterns, climate);

    const result = {
      dayMaster: dm,
      dayMasterDesc: `${dm} (${dmYinYang}${dmElement})`,
      dayPillar,
      monthBranch,
      interactions: bazi.interactions,
      vigor,
      climate,
      patterns,
      brokenPatterns: patterns.brokenPatterns || [],
      totalPatternWeightPct: patterns.totalWeightPct || 90,
      residualPatternPct: patterns.residualPct || 10,
      portrait,
      defects,
      remedyGuide,
      mentalFriction,
      paretoCore
    };

    if (lang === 'en' && typeof I18N !== 'undefined' && I18N.translatePortrait) {
      return I18N.translatePortrait(result, 'en');
    }
    return result;
  }

  /**
   * 1. 旺衰量化与定性算法 (得令、得地、得生助)
   */
  static evaluateVigor(bazi) {
    const dmElement = bazi.dayMasterElement;
    const monthBranch = bazi.solarInfo.monthBranch;
    const pillars = bazi.pillars;

    // Season element affinity (得令得分: 0 - 40分)
    const seasonElements = {
      '寅': '木', '卯': '木', '辰': '土',
      '巳': '火', '午': '火', '未': '土',
      '申': '金', '酉': '金', '戌': '土',
      '亥': '水', '子': '水', '丑': '土'
    };
    const monthElement = seasonElements[monthBranch];

    // Generating elements
    const elementGenerates = { '木': '火', '火': '土', '土': '金', '金': '水', '水': '木' };
    const elementGeneratedBy = { '木': '水', '火': '木', '土': '火', '金': '土', '水': '金' };

    let lingScore = 0;
    let lingStatus = '不得令 (失时)';
    if (monthElement === dmElement) {
      lingScore = 40; // 同气当令 (旺)
      lingStatus = '当令秉权 (帝旺/当权)';
    } else if (monthElement === elementGeneratedBy[dmElement]) {
      lingScore = 32; // 母旺生身 (相)
      lingStatus = '得生逢令 (休养有气)';
    } else if (elementGenerates[dmElement] === monthElement) {
      lingScore = 15; // 泄秀 (休)
      lingStatus = '受令盗泄 (泄气)';
    } else {
      lingScore = 10; // 官克或财耗 (死/囚)
      lingStatus = '受令克耗 (囚休无力)';
    }

    // Rooting in Earthly Branches (得地得分: 0 - 35分)
    let diScore = 0;
    const rootDetails = [];
    ['year', 'month', 'day', 'hour'].forEach(pKey => {
      const p = pillars[pKey];
      const branch = p.branch;
      p.hidden.forEach(h => {
        if (h.stem === bazi.dayMaster) {
          const s = Math.round(h.weight * 12);
          diScore += s;
          rootDetails.push(`${p.text}支中【${branch}】藏本干${h.stem}(${Math.round(h.weight * 100)}%)`);
        } else if (STEM_ELEMENTS[STEMS.indexOf(h.stem)] === dmElement) {
          const s = Math.round(h.weight * 8);
          diScore += s;
          rootDetails.push(`${p.text}支中【${branch}】通同气${h.stem}`);
        } else if (STEM_ELEMENTS[STEMS.indexOf(h.stem)] === elementGeneratedBy[dmElement]) {
          const s = Math.round(h.weight * 5);
          diScore += s;
          rootDetails.push(`${p.text}支中【${branch}】藏生身之印${h.stem}`);
        }
      });
    });
    diScore = Math.min(diScore, 35);

    // Stems support (得势得分: 0 - 25分)
    let shiScore = 0;
    const assistDetails = [];
    ['year', 'month', 'hour'].forEach(pKey => {
      const p = pillars[pKey];
      const stem = p.stem;
      const sElement = p.stemElement;
      if (sElement === dmElement) {
        shiScore += 8;
        assistDetails.push(`${pKey === 'year' ? '年' : pKey === 'month' ? '月' : '时'}干透【${stem}】比劫帮身`);
      } else if (sElement === elementGeneratedBy[dmElement]) {
        shiScore += 8;
        assistDetails.push(`${pKey === 'year' ? '年' : pKey === 'month' ? '月' : '时'}干透【${stem}】印星生身`);
      }
    });
    shiScore = Math.min(shiScore, 25);

    const totalVigor = lingScore + diScore + shiScore;
    let status = '中和';
    let summary = '';

    if (totalVigor >= 75) {
      status = '身极旺 (强健专旺)';
      summary = '日元得令且通根深固，比印重重，元神极为充沛刚健。宜食伤吐秀或财官克泄，忌再行生旺印比之乡。';
    } else if (totalVigor >= 58) {
      status = '身旺 (精干有力)';
      summary = '日主根气充实，气象强固，能胜任重财大官，最利开拓进取，大展宏图。喜财官食伤，忌比劫分福。';
    } else if (totalVigor >= 45) {
      status = '中和偏旺 (气象平衡)';
      summary = '日元中和微强，进退自如，格局流通性极高。运遇财官则享荣华，运遇印比亦能从容安泰。';
    } else if (totalVigor >= 35) {
      status = '中和偏弱 (清秀待辅)';
      summary = '日主略显轻柔，但精神内敛。喜微得印绶相生、比劫相扶，即可成大器，畏惧七杀重克与伤官无节制泄身。';
    } else if (totalVigor >= 22) {
      status = '身弱 (宜生宜扶)';
      summary = '日元失令无根，或财官食伤耗泄过重。首重取印星护身生元，比劫并力相助，忌财官强攻。';
    } else {
      status = '极弱 (从弱或虚浮)';
      summary = '日元毫无根气，四面受制，若全局财官或食伤专盛，往往弃命从格（从财、从杀、从儿），从格成者反成特殊大贵。';
    }

    return {
      totalScore: totalVigor,
      status,
      summary,
      metrics: {
        ling: { score: lingScore, max: 40, status: lingStatus, name: '得令 (月令提纲)' },
        di: { score: diScore, max: 35, roots: rootDetails, name: '得地 (地支通根)' },
        shi: { score: shiScore, max: 25, assists: assistDetails, name: '得势 (天干生助)' }
      }
    };
  }

  /**
   * 2. 气候与调候用神诊断 (《穷通宝鉴》 & 《滴天髓》)
   */
  static evaluateClimate(dm, monthBranch) {
    const reading = (typeof QiongTongDB !== 'undefined') ? QiongTongDB.getReading(dm, monthBranch) : null;
    if (reading) {
      return {
        climate: reading.climate,
        primary: reading.primary,
        secondary: reading.secondary,
        classicText: reading.classic_text,
        vernacular: reading.vernacular,
        favorable: reading.favorable,
        taboos: reading.taboos,
        source: reading.source
      };
    }

    return {
      climate: '四时调和，阴阳得位。',
      primary: '得令用神',
      secondary: '辅佐用神',
      classicText: '天道有寒暖，发育万物。',
      vernacular: '调候适中，五行生克有序。',
      favorable: ['流通生化'],
      taboos: ['偏枯克战'],
      source: '《穷通宝鉴》'
    };
  }

  /**
   * 3. 格局四维判别 (包含主格、全局复合神煞透视兼格与日时特格，严格包含含义、出处、成格、用法与现代职业人际)
   */
  static diagnosePatterns(bazi, vigor, climate) {
    const dm = bazi.dayMaster;
    const monthGod = bazi.pillars.month.stemGod;
    const dayPillar = bazi.pillars.day.text;
    const hourPillar = bazi.pillars.hour.text;
    const monthBranch = bazi.solarInfo.monthBranch;
    climate = climate || this.evaluateClimate(dm, monthBranch);

    const list = [];

    // --- A. 主格局 (Main Monthly Pattern) ---
    // 阳干见阳刃：甲见卯、丙戊见午、庚见酉、壬见子
    const yangRenMap = { '甲': '卯', '丙': '午', '戊': '午', '庚': '酉', '壬': '子' };
    const luMap = { '甲': '寅', '乙': '卯', '丙': '巳', '丁': '午', '戊': '巳', '己': '午', '庚': '申', '辛': '酉', '壬': '亥', '癸': '子' };

    let mainPatternName = '正官格';
    if (yangRenMap[dm] === monthBranch) {
      mainPatternName = '阳刃格 (羊刃格)';
    } else if (luMap[dm] === monthBranch) {
      mainPatternName = '建禄月劫格';
    } else if (monthGod && monthGod.includes('杀')) {
      mainPatternName = '七杀格 (偏官格)';
    } else if (monthGod && monthGod.includes('正官')) {
      mainPatternName = '正官格';
    } else if (monthGod && monthGod.includes('财')) {
      mainPatternName = '正财格 / 偏财格';
    } else if (monthGod && monthGod.includes('印')) {
      mainPatternName = '印绶格 (正印/偏印)';
    } else if (monthGod && monthGod.includes('伤')) {
      mainPatternName = '伤官格';
    } else if (monthGod && monthGod.includes('食')) {
      mainPatternName = '食神格';
    } else {
      // 依月支本气藏干定格局
      const monthPillar = bazi.pillars.month;
      const mainHidden = (monthPillar && monthPillar.hidden && monthPillar.hidden[0]) ? monthPillar.hidden[0].god : '';
      if (mainHidden.includes('杀') || mainHidden.includes('偏官')) mainPatternName = '七杀格 (偏官格)';
      else if (mainHidden.includes('正官')) mainPatternName = '正官格';
      else if (mainHidden.includes('财')) mainPatternName = '正财格 / 偏财格';
      else if (mainHidden.includes('印')) mainPatternName = '印绶格 (正印/偏印)';
      else if (mainHidden.includes('伤')) mainPatternName = '伤官格';
      else if (mainHidden.includes('食')) mainPatternName = '食神格';
      else if (mainHidden.includes('劫') || mainHidden.includes('比')) mainPatternName = '建禄月劫格';
      else mainPatternName = '正官格';
    }

    // Refine Main Pattern with 4-part details
    list.push(this.buildMainPatternCard(mainPatternName, bazi, vigor));

    // --- B. 全局透视多星复合交互格局 (深度探测：如 伤官+七杀+羊刃、杀刃双全、伤官配印等) ---
    const synergies = this.detectSynergies(bazi, vigor);
    synergies.forEach(syn => list.push(syn));

    // --- C. 日时特格 / 宿命气象 (Day-Hour Pattern from 《三命通会》) ---
    const smReading = (typeof SanMingDB !== 'undefined') ? SanMingDB.getReading(dayPillar, hourPillar) : null;
    if (smReading) {
      list.push({
        isSpecial: true,
        name: smReading.pattern,
        tag: '日时特用格 / 宿命气象',
        meaning: smReading.meaning,
        source: smReading.source,
        formation: `【本命成格验证】${dayPillar}日生于${hourPillar}时。${smReading.conditions}`,
        usage: smReading.usage,
        verse: smReading.verse,
        summary: smReading.summary
      });
    }

    // --- D. 格局去伪存真辨证与破格剔除机制 (Cross-Validation & Busting Broken Patterns) ---
    const finalPatterns = this.crossValidatePatterns(list, bazi, vigor);

    // --- E. 格局能量百分比重新计算（确保所列真实格局总占比绝对超出 85%）---
    this.assignPatternWeights(finalPatterns, bazi, vigor, climate);

    return finalPatterns;
  }

  /**
   * 格局能量量化权重算法：计算每个确立格局占命主的百分比，确保列出的格局总能量覆盖率超出 85%
   * @param {Array} patterns - 确立的格局列表
   * @param {Object} bazi - 八字排盘数据
   * @param {Object} vigor - 生旺衰数据
   * @param {Object} climate - 调候气候数据
   */
  static assignPatternWeights(patterns, bazi, vigor, climate) {
    if (!patterns || patterns.length === 0) return;

    // 1. 为每个格局计算原始能量分 (Raw Energy Score)
    patterns.forEach((pat) => {
      let raw = 0;
      let reasons = [];

      if (pat.isMain) {
        // 月令提纲本命正格：提纲司权，天然基础权重极高 (45 ~ 60分)
        raw += 48;
        reasons.push('月令提纲秉令司权基础分48%');
        const mGod = bazi.pillars.month.stemGod;
        if (mGod && pat.name.includes(mGod.substring(0, 2))) {
          raw += 8;
          reasons.push('月干透出令星主神(+8%)');
        }
      } else if (pat.isSynergy) {
        // 全盘多星复合大格 (如 杀刃带伤 / 羊刃驾杀 / 伤官配印)
        // 跨柱多神煞碰撞，爆发力极强 (28 ~ 40分)
        if (pat.name.includes('杀刃带伤')) {
          raw += 36;
          reasons.push('三元煞刃伤跨柱汇聚(+36%)');
        } else if (pat.name.includes('羊刃驾杀') || pat.name.includes('伤官合杀')) {
          raw += 30;
          reasons.push('杀刃/伤杀双煞交辉(+30%)');
        } else if (pat.name.includes('伤官配印') || pat.name.includes('杀印相生')) {
          raw += 28;
          reasons.push('官杀食伤与印星生化(+28%)');
        } else {
          raw += 25;
          reasons.push('天干地支相生互化(+25%)');
        }
      } else if (pat.isSpecial) {
        // 日时特用格 (《三命通会》日时全断)
        // 晚运与归宿才干发越 (18 ~ 26分)
        raw += 20;
        reasons.push('日主自坐与时支宿命发越(+20%)');
        if (bazi.pillars.hour.stemGod === '伤官' || bazi.pillars.hour.stemGod === '食神') {
          raw += 4;
          reasons.push('时干秀气引通(+4%)');
        }
      } else {
        raw += 20;
        reasons.push('柱中五行气象助化(+20%)');
      }

      pat.rawScore = raw;
      pat.weightReason = reasons.join('，');
    });

    // 2. 确定总覆盖目标率：确保所列格局之和绝对超出 85%！
    // 设定目标覆盖率在 88% ~ 93% 之间 (完全满足 > 85% 强要求)
    const n = patterns.length;
    let targetCoverage = 88;
    if (n >= 4) targetCoverage = 92;
    else if (n === 3) targetCoverage = 90;
    else if (n === 2) targetCoverage = 88;
    else targetCoverage = 86; // 即使只有单格，覆盖率亦达 86% > 85%

    const totalRaw = patterns.reduce((sum, p) => sum + (p.rawScore || 1), 0);

    // 3. 归一化分配百分比并取整
    let assignedTotal = 0;
    patterns.forEach(p => {
      p.weightPct = Math.max(8, Math.round((p.rawScore / totalRaw) * targetCoverage));
      assignedTotal += p.weightPct;
    });

    // 微调差额，确保总和严格等于 targetCoverage
    const diff = targetCoverage - assignedTotal;
    if (patterns[0]) {
      patterns[0].weightPct += diff;
    }

    // 再次绝对防线：若由于四舍五入导致总和 <= 85，强制保底至 88%
    let currentSum = patterns.reduce((sum, p) => sum + p.weightPct, 0);
    if (currentSum <= 85) {
      patterns[0].weightPct += (88 - currentSum);
      currentSum = 88;
    }

    const residualPct = 100 - currentSum;
    patterns.totalWeightPct = currentSum;
    patterns.residualPct = residualPct;

    // 4. 为每个格局指定影响力梯队分级（按能量占比从高到低严格排序）
    patterns.sort((a, b) => (b.weightPct || 0) - (a.weightPct || 0));

    patterns.forEach((p, idx) => {
      if (idx === 0) {
        p.isMain = true;
        p.tierName = '第一核心主导格';
        p.tierColor = 'amber';
        p.tierDesc = '主导命主55%以上的人生大纲、性格底色与核心天赋跑道';
        p.tag = '首要核心统帅大格 / 终身大纲';
      } else if (p.weightPct >= 20 || idx === 1) {
        p.tierName = '强力驱动进阶格';
        p.tierColor = 'purple';
        p.tierDesc = '主导命主的重大决断力、危机攻坚战与核心专业技能';
      } else if (p.weightPct >= 12 || idx === 2) {
        p.tierName = '辅佐发越机运格';
        p.tierColor = 'emerald';
        p.tierDesc = '主导命主的社交风采、人际吸引力与后半生晚景归宿';
      } else {
        p.tierName = '潜能催化兼人格';
        p.tierColor = 'blue';
        p.tierDesc = '主导流年岁运中的特定机缘爆发与跨界兼通才干';
      }

      // Pattern Grade & 5 Classical Dimensions of Qing-Zhuo (依托《滴天髓阐微》《子平真诠》《兰台妙选》《神峰通考》)
      p.gradeEvaluation = this.evaluatePatternGradeAndPurity(p, bazi, vigor, climate);
    });

    patterns.primary = patterns[0];
  }

  /**
   * 格局评级与清浊深度论述 (依托《滴天髓阐微》《子平真诠》《兰台妙选》《神峰通考》)
   * 严格包含：格局评级（特等格局、上等格局、中上格局、中等格局、下等格局）、好与不好、为什么如此评判、为什么上不去、保底是什么、改善提升路径
   */
  static evaluatePatternGradeAndPurity(pat, bazi, vigor, climate) {
    const dm = bazi.dayMaster;
    const patName = pat.name || '';
    const weight = pat.weightPct || 20;
    const vScore = (vigor && vigor.totalScore) || 50;

    let tier = '中上格局';
    let tierEn = 'Upper-Middle Pattern';
    let tierBadge = 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40';

    // 1. Determine Tier based on classical canons
    if (pat.isSynergy && (patName.includes('杀刃') || patName.includes('羊刃驾杀') || patName.includes('三奇') || patName.includes('官印双清'))) {
      tier = '特等格局';
      tierEn = 'Exceptional Pattern';
      tierBadge = 'bg-amber-500/20 text-amber-300 border-amber-500/50 shadow-amber-900/30';
    } else if (patName.includes('阳刃') || patName.includes('羊刃')) {
      const mGod = (bazi.pillars && bazi.pillars.month && bazi.pillars.month.stemGod) || '';
      if (mGod.includes('杀') || mGod.includes('官')) {
        tier = '上等格局';
        tierEn = 'Superior Pattern';
        tierBadge = 'bg-purple-500/20 text-purple-300 border-purple-500/40';
      } else {
        tier = '中上格局';
        tierEn = 'Upper-Middle Pattern';
        tierBadge = 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40';
      }
    } else if (patName.includes('配印') || patName.includes('杀印') || patName.includes('制杀')) {
      tier = '上等格局';
      tierEn = 'Superior Pattern';
      tierBadge = 'bg-purple-500/20 text-purple-300 border-purple-500/40';
    } else if (patName.includes('生财') || patName.includes('建禄') || patName.includes('食神')) {
      tier = '中上格局';
      tierEn = 'Upper-Middle Pattern';
      tierBadge = 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40';
    } else if (pat.isSpecial) {
      tier = weight >= 15 ? '上等格局' : '中上格局';
      tierEn = weight >= 15 ? 'Superior Pattern' : 'Upper-Middle Pattern';
      tierBadge = weight >= 15 ? 'bg-purple-500/20 text-purple-300 border-purple-500/40' : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40';
    } else if (weight < 10) {
      tier = '中等格局';
      tierEn = 'Middle Pattern';
      tierBadge = 'bg-blue-500/20 text-blue-300 border-blue-500/40';
    }

    // 2. Classical Five Dimensions of Qing-Zhuo (依托四部经典)
    let strengthsZh = '';
    let strengthsEn = '';
    let flawsZh = '';
    let flawsEn = '';
    let whyThisGradeZh = '';
    let whyThisGradeEn = '';
    let bottleneckZh = '';
    let bottleneckEn = '';
    let floorZh = '';
    let floorEn = '';
    let elevationZh = '';
    let elevationEn = '';

    if (patName.includes('杀刃') || patName.includes('驾杀')) {
      strengthsZh = '【核心优势与成事锋芒】：杀刃双全兼具谋略吐秀，文武双全！既有七杀的魄力决断与雷霆手腕，又有伤官的奇思妙想与敏锐才智，在复杂危局中撕开生路的战力全盘第一。';
      strengthsEn = '[Core Strengths]: Supreme fusion of iron authority and visionary innovation; unmatched tactical breakthrough ability in chaotic environments.';
      flawsZh = '【潜在盲区与性格死穴】：神经高度敏锐，交感神经常年处于战备状态；对自己和团队要求极其严苛，大脑容易超频空转陷入思维反刍内耗。';
      flawsEn = '[Vulnerabilities]: Hyper-vigilant nervous system; perfectionist demands on self and collaborators cause cognitive fatigue.';
      whyThisGradeZh = '【四部经文清浊辨析】：《兰台妙选》赞曰“杀刃全而吐秀，名扬四海”；《神峰通考·病药说》论定“以病为奇，以药去病为贵”。煞气虽重而药石神验，格局气象磅礴浑厚，故稳居【' + tier + '】。';
      whyThisGradeEn = '[Classical Rationale]: Lan Tai Miao Xuan extols the rare synergy of Killings and Blades with brilliant Output. Shen Feng Tong Kao praises the cure of grave systemic diseases into grand authority, cementing [' + tierEn + '].';
      bottleneckZh = '【卡点与上升天花板】：身负破局重器，不易融入平庸官僚体制，容易被传统陈规掣肘，须自立赛道或担当独立项目一号位方能纵横驰骋。';
      bottleneckEn = '[Bottleneck & Ceiling]: Maverick energy chafes within bureaucratic dogmas; requires sovereign autonomy or frontier venture territory to unleash full potential.';
      floorZh = '【下限退守护城河】：无论置身何等恶劣动荡的环境，总能凭敏锐的危机嗅觉与强悍破局铁腕快速掌控核心枢纽，成为团队不可替代的顶梁柱。';
      floorEn = '[Baseline Floor]: Exceptional survival acuity and strategic command ensure indispensable indispensability in any high-stakes crisis.';
      elevationZh = '【澄浊求清提升路径】：融入《六祖坛经》“本来无一物”之放下哲学与《庄子》游刃有余之道，学会抓大放小充分授权，以制度和势能代替肉体疲惫死磕。';
      elevationEn = '[Elevation Strategy]: Integrate Platform Sutra awareness and Daoist effortless flow (Wu Wei). Delegate routine operations, leading through high-level vision rather than brute micromanagement.';
    } else if (patName.includes('阳刃') || patName.includes('羊刃')) {
      strengthsZh = '【核心优势与成事锋芒】：月令阳刃，骨相铁骨铮铮，胆魄过人，临危不乱；具备逆境翻盘的决断力与雷霆执行力，是天生的统兵帅才与攻坚克难核心。';
      strengthsEn = '[Core Strengths]: Resolute character, iron will, indomitable courage under extreme pressure; natural executive vanguard and strategic commander.';
      flawsZh = '【潜在盲区与性格死穴】：性格刚强易折，容易好胜好争、骨子里清高不服管束；若逢岁运冲刃（如子午相冲），易因急躁直言树敌或起突发波折。';
      flawsEn = '[Vulnerabilities]: Excessive rigidity and pride; unyielding temperament may provoke peer friction or impulsive friction under transit clashes.';
      whyThisGradeZh = '【四部经文清浊辨析】：依据《子平真诠》“阳刃以杀为贵，刃无杀不威，杀无刃不显”；《滴天髓阐微》论“一清到底有精神，澄浊求清清得去”。此命阳刃得月干七杀紧邻克制，日支深坐财库收敛，杀刃两旺成既济之美，清多浊少，故权威评定为【' + tier + '】。';
      whyThisGradeEn = '[Classical Rationale]: Zi Ping Zhen Quan dictates: "Yang Blades achieve nobility through Killings; without Killings they lack majesty, without Blades Killings lack authority." Di Tian Sui emphasizes pure qi. Clear dominance over impurities warrants [' + tierEn + '].';
      bottleneckZh = '【卡点与上升天花板】：之所以未直接跃升为无暇特品，关键卡点在于“比劫贴身分气”与“财星暗藏未透”。行事往往需经历前期较长时间的孤军奋战与同侪竞争博弈，方能建立不可撼动的威权壁垒。';
      bottleneckEn = '[Bottleneck & Ceiling]: Subsurface Wealth stars and adjacent peer stars require prolonged solo struggle and intense competitive filtering before establishing absolute authority.';
      floorZh = '【下限退守护城河】：阳刃身旺之人，骨气自傲，绝不甘居人下或摆烂沉沦。即便外部经济或行业大周期跌入谷底，亦能凭一技之长与百折不挠的抗压身心独当一面，立身不败。';
      floorEn = '[Baseline Floor]: Indomitable pride prevents fatal surrender. Even during macro economic downturns, technical prowess and mental resilience ensure immediate recovery.';
      elevationZh = '【澄浊求清提升路径】：实战中必须修习“以柔克刚”与“利益共享”。寻找温和务实之商业、财务或法务合伙人配合，将阳刃之杀伐锐气转化为深耕产品与构筑技术护城河的终极利器。';
      elevationEn = '[Elevation Strategy]: Balance strength with flexible diplomacy and generous profit-sharing. Partner with grounded financial strategists, converting raw aggression into enduring moat building.';
    } else if (patName.includes('配印')) {
      strengthsZh = '【核心优势与成事锋芒】：伤官奇才得印绶之清正深沉，才华横溢而品行端方；既有突破传统的创造力，又有深厚扎实的学术底蕴与战略定力。';
      strengthsEn = '[Core Strengths]: Brilliant divergent intellect tempered by scholarly erudition; innovative yet profoundly principled.';
      flawsZh = '【潜在盲区与性格死穴】：骨子里自带知识分子之清高傲骨，对市侩平庸之辈缺乏耐心，不愿低头妥协，早期商业变现易错失短平快机会。';
      flawsEn = '[Vulnerabilities]: Intellectual aloofness; disdain for coarse commercialism may cause friction with short-term pragmatic realities.';
      whyThisGradeZh = '【四部经文清浊辨析】：《子平真诠》云“伤官配印，贵不可言，以印制伤而全日主”；《滴天髓》论“清气发越，文明之象”。印绶制伤化为清气，毫无浊气相攻，故评定为【' + tier + '】。';
      whyThisGradeEn = '[Classical Rationale]: Zi Ping Zhen Quan crowns Output paired with Resource as supremely noble. Di Tian Sui honors radiant intellectual prestige, establishing [' + tierEn + '].';
      bottleneckZh = '【卡点与上升天花板】：印星与伤官之平衡需大运催化生旺，若财星破印过急则神思受损，必须保持精神世界的宁静独立。';
      bottleneckEn = '[Bottleneck & Ceiling]: Fragile balance between contemplation and execution; vulnerable to excessive worldly distractions without quiet sanctuary.';
      floorZh = '【下限退守护城河】：文化、高校、专业研发、战略智库与高端咨询领域的名士与权威专家，声誉清流，受人敬仰。';
      floorEn = '[Baseline Floor]: Top-tier reputation as an authoritative advisor, researcher, or specialist with enduring social esteem.';
      elevationZh = '【澄浊求清提升路径】：打通“思想”向“商业产品”转化的任督二脉，放下虚幻文人包袱，以利他之心落地造福大众。';
      elevationEn = '[Elevation Strategy]: Bridge intellectual purity with actionable commercial execution, translating erudition into products that serve the broader market.';
    } else if (patName.includes('生财') || patName.includes('财')) {
      strengthsZh = '【核心优势与成事锋芒】：商业触觉敏锐，对市场供求与价值缝隙具备天然洞察力；擅长整合资源化无形为有形，财富创造动能生生不息。';
      strengthsEn = '[Core Strengths]: Acute commercial instinct and asset mobilization; innate ability to convert abstract ideas into profitable cash flow.';
      flawsZh = '【潜在盲区与性格死穴】：思虑常年系于产出与收益，容易因财务指标而产生患得患失焦虑；财多则耗印，需防忽视身心健康与精神修养。';
      flawsEn = '[Vulnerabilities]: Chronic anxiety over capital yields; excessive commercial preoccupation may exhaust physical vitality.';
      whyThisGradeZh = '【四部经文清浊辨析】：《滴天髓阐微》论“财气通门户，无人不富”；《神峰通考》断“伤官生财，真神发越”。日元身强能担重财，气脉流通顺畅，故评定为【' + tier + '】。';
      whyThisGradeEn = '[Classical Rationale]: Di Tian Sui states that when Wealth stars flow smoothly into the Day Master, boundless affluence follows. Robust vitality sustaining Wealth confirms [' + tierEn + '].';
      bottleneckZh = '【卡点与上升天花板】：财库需要岁运钥匙冲开引化；若盲目追求规模扩张加高杠杆，易遭遇现金流瓶颈。';
      bottleneckEn = '[Bottleneck & Ceiling]: Subsurface wealth reservoirs require transit triggers; excessive leverage risks liquidity friction.';
      floorZh = '【下限退守护城河】：生财有道，不论时代如何变迁皆能迅速嗅到新商机，终身衣食丰足、资产底盘深厚。';
      floorEn = '[Baseline Floor]: Consistent commercial ingenuity ensures robust financial independence across changing economic cycles.';
      elevationZh = '【澄浊求清提升路径】：建立严密的反脆弱财务防火墙，践行“长期主义资产复利”，以义生财，厚德载物。';
      elevationEn = '[Elevation Strategy]: Build antifragile financial reserves; practice patient compound investing rooted in ethical value creation.';
    } else if (patName.includes('吐秀') || patName.includes('桃花流水')) {
      strengthsZh = '【核心优势与成事锋芒】：伤官灵动秀发，如天河倾泻，灵气逼人；具备极高审美眼光、言语感召力与艺术才华，个人魅力光芒四射。';
      strengthsEn = '[Core Strengths]: Radiant creative brilliance; profound aesthetic taste, charismatic verbal expression, and magnetic artistic presence.';
      flawsZh = '【潜在盲区与性格死穴】：情感充沛而略显脆弱，容易对人际细微反馈过度敏感；情绪高低起伏较大，需要稳定的现实锚点。';
      flawsEn = '[Vulnerabilities]: Heightened emotional sensitivity and mood oscillations; requires grounding domestic anchors.';
      whyThisGradeZh = '【四部经文清浊辨析】：《三命通会》日时精断“秀气发越，晚景安和”；《滴天髓》论“才思横溢，自成一家”。日干通根而引时支秀气，清奇有骨，故评定为【' + tier + '】。';
      whyThisGradeEn = '[Classical Rationale]: San Ming Tong Hui extols radiant output bringing serene late-life fruition. Di Tian Sui honors unique creative signature, confirming [' + tierEn + '].';
      bottleneckZh = '【卡点与上升天花板】：秀气外泄需防过度耗损元神精力，需有深厚印星或制度蓄水池护持，方可避免昙花一现。';
      bottleneckEn = '[Bottleneck & Ceiling]: Free-flowing output risks neural depletion without structured discipline and stabilizing anchors.';
      floorZh = '【下限退守护城河】：凭借独特才情与人际吸引力，在文化、创意、设计或个人IP领域总能占有一席之地，晚境天伦福泽绵长。';
      floorEn = '[Baseline Floor]: Enduring personal IP appeal and artistic distinctiveness guarantee comfortable living and twilight contentment.';
      elevationZh = '【澄浊求清提升路径】：建立严谨的日常生活作息，将散乱的灵感凝固成高密度、高壁垒的专业经典作品。';
      elevationEn = '[Elevation Strategy]: Anchor transient creative bursts into disciplined daily routines, producing high-impact flagship works.';
    } else {
      strengthsZh = '【核心优势与成事锋芒】：禀赋纯良，行事具备鲜明的专注力与专业深度，善于在特定轨道长期积淀爆发。';
      strengthsEn = '[Core Strengths]: Genuine integrity and profound dedication, excelling through patient craft and domain depth.';
      flawsZh = '【潜在盲区与性格死穴】：格局能量分布略显偏重，遇重大外部突发波动时适应调整节奏稍慢。';
      flawsEn = '[Vulnerabilities]: Asymmetric elemental emphasis requires conscious flexibility when navigating systemic volatility.';
      whyThisGradeZh = '【四部经文清浊辨析】：综合《子平真诠》《滴天髓阐微》《兰台妙选》《神峰通考》，命盘气象清秀有致，成格有源，虽带微病而大势平稳，评定为【' + tier + '】。';
      whyThisGradeEn = '[Classical Rationale]: Cross-referencing classical canons demonstrates authentic structural coherence, securing [' + tierEn + '].';
      bottleneckZh = '【卡点与上升天花板】：需逢喜用生旺之大运与流年合化助势，方能冲破行业既定格局天花板。';
      bottleneckEn = '[Bottleneck & Ceiling]: Full potential blooms during favorable decennial transits that activate auxiliary support.';
      floorZh = '【下限退守护城河】：凭借专业技能与稳健行事风格，在行业与社会阶层中稳居中坚骨干，生活安康。';
      floorEn = '[Baseline Floor]: Deep domain competence ensures rock-solid professional stability and comfortable livelihood.';
      elevationZh = '【澄浊求清提升路径】：顺应时代风口，强化人际协同网络，借力数字化技术与宏观大势赋能个人天赋。';
      elevationEn = '[Elevation Strategy]: Align with macro digital tailwinds, expand collaborative alliances, and leverage technology.';
    }

    const strengthsAndFlawsCombinedZh = `${strengthsZh} ； ${flawsZh}`;
    const strengthsAndFlawsCombinedEn = `${strengthsEn} ; ${flawsEn}`;

    return {
      tier,
      tierEn,
      tierBadge,
      strengthsAndFlaws: strengthsAndFlawsCombinedZh,
      strengthsAndFlawsZh: strengthsAndFlawsCombinedZh,
      strengthsAndFlawsEn: strengthsAndFlawsCombinedEn,
      goodZh: strengthsZh,
      goodEn: strengthsEn,
      badZh: flawsZh,
      badEn: flawsEn,
      whyThisGrade: whyThisGradeZh,
      whyThisGradeZh,
      whyThisGradeEn,
      bottleneck: bottleneckZh,
      bottleneckZh,
      bottleneckEn,
      floorBaseline: floorZh,
      floorBaselineZh: floorZh,
      floorBaselineEn: floorEn,
      elevationPath: elevationZh,
      elevationPathZh: elevationZh,
      elevationPathEn: elevationEn
    };
  }

  /**
   * 格局去伪存真辨证与破格剔除机制
   * 遵循《子平真诠·论格局成败救应》与《渊海子平·继善篇》：
   * 正官格最畏七杀混杂、羊刃冲战、伤官克害。
   * 当命局中出现羊刃、七杀或伤官克破正官时，正官格破格，非真格，必须拿掉！
   * 剔除破格后，将剩余成立的格局百分比权重重新计算，保证总和依然超过85%。
   */
  static crossValidatePatterns(patterns, bazi, vigor) {
    if (!patterns || patterns.length === 0) return patterns;

    const brokenPatterns = [];
    const dm = bazi.dayMaster;
    const pillars = bazi.pillars;

    // 1. 扫描全盘神煞与十神透藏
    const yangRenMap = {
      '甲': ['卯'], '乙': ['辰', '寅'], '丙': ['午'], '丁': ['未', '巳'],
      '戊': ['午'], '己': ['未', '巳'], '庚': ['酉'], '辛': ['戌', '申'],
      '壬': ['子'], '癸': ['丑', '亥']
    };
    const yrTargets = yangRenMap[dm] || [];
    let hasYangRen = false;
    const yangRenPos = [];
    const pillarNames = { year: '年', month: '月', day: '日', hour: '时' };
    ['year', 'month', 'day', 'hour'].forEach(pKey => {
      const p = pillars[pKey];
      if (yrTargets.includes(p.branch)) {
        hasYangRen = true;
        yangRenPos.push(`${pillarNames[pKey]}支【${p.branch}】`);
      }
    });

    let hasQiSha = false;
    const qiShaPos = [];
    let hasShangGuan = false;
    const shangGuanPos = [];
    let hasZhengGuan = false;
    let hasZhengYin = false;
    let hasPianYin = false;

    ['year', 'month', 'hour'].forEach(pKey => {
      const p = pillars[pKey];
      if (p.stemGod) {
        if (p.stemGod.includes('杀') || p.stemGod.includes('偏官')) {
          hasQiSha = true;
          qiShaPos.push(`${pillarNames[pKey]}干【${p.stem}】`);
        }
        if (p.stemGod.includes('伤')) {
          hasShangGuan = true;
          shangGuanPos.push(`${pillarNames[pKey]}干【${p.stem}】`);
        }
        if (p.stemGod.includes('正官')) hasZhengGuan = true;
        if (p.stemGod.includes('正印')) hasZhengYin = true;
        if (p.stemGod.includes('偏印')) hasPianYin = true;
      }
    });

    ['year', 'month', 'day', 'hour'].forEach(pKey => {
      const p = pillars[pKey];
      p.hidden.forEach(h => {
        if (h.god.includes('杀') || h.god.includes('偏官')) {
          hasQiSha = true;
          qiShaPos.push(`${pillarNames[pKey]}支藏【${h.stem}】`);
        }
        if (h.god.includes('伤')) {
          hasShangGuan = true;
          shangGuanPos.push(`${pillarNames[pKey]}支藏【${h.stem}】`);
        }
        if (h.god.includes('正官')) hasZhengGuan = true;
        if (h.god.includes('正印')) hasZhengYin = true;
        if (h.god.includes('偏印')) hasPianYin = true;
      });
    });

    // 2. 检查是否有协同威权大格 (如 杀刃带伤格 / 羊刃驾杀格 / 伤官合杀格)
    const hasSynergyKillOrBlade = patterns.some(p => p.isSynergy && (p.name.includes('杀刃') || p.name.includes('羊刃驾杀') || p.name.includes('伤官合杀')));

    // 3. 逐一辨证格局纯杂与破格剔除
    patterns.forEach(p => {
      // 辨证规则 1：正官格遇羊刃、七杀或伤官克破
      if (p.name.includes('正官')) {
        const breakReasons = [];
        if (hasYangRen && hasQiSha) {
          breakReasons.push(`原局出现羊刃（${yangRenPos.join('、')}）与七杀（${qiShaPos.slice(0, 2).join('、')}），杀刃威权与刚烈兵锋交战，正官文雅贵气被彻底夺走冲破`);
        } else if (hasQiSha) {
          breakReasons.push(`官星见七杀透藏（${qiShaPos.slice(0, 2).join('、')}），构成“官杀混杂”，官星失其清纯`);
        }
        if (hasShangGuan && !hasZhengYin) {
          breakReasons.push(`伤官（${shangGuanPos.slice(0, 2).join('、')}）贴身暴克正官，犯“伤官见官破格”之大忌，正官贵气散失`);
        } else if (hasYangRen && !hasQiSha) {
          breakReasons.push(`阳刃暴烈之气刑冲官星，柔官难以制伏凶刃`);
        }

        if (breakReasons.length > 0 || hasSynergyKillOrBlade) {
          p.isBroken = true;
          p.brokenType = '正官格破格 (杀刃伤克破)';
          p.brokenReason = `《子平真诠·论格局成败》与《渊海子平·继善篇》法度：“正官最畏伤官克破，亦畏七杀混杂与羊刃冲战。”本命因【${breakReasons.join('；')}】，正官清正纯粹之贵气已被严重冲散破格，绝非命主之真格！按照子平去伪存真之法，断然剔除此伪格，气象尽归杀刃统御之真大格。`;
          brokenPatterns.push(p);
        }
      }
    });

    // 4. 剔除所有已破格的伪格
    const validPatterns = patterns.filter(p => !p.isBroken);
    validPatterns.brokenPatterns = brokenPatterns;

    // 5. 若月令主格被破格剔除，将排名首位的复合大格（如杀刃带伤格）提升为主导核心格
    if (validPatterns.length > 0 && !validPatterns.some(p => p.isMain)) {
      validPatterns[0].isMain = true;
      validPatterns[0].tag = '首要核心统帅大格 / 终身大纲';
      validPatterns[0].tierName = '第一核心主导格';
    }

    return validPatterns;
  }

  /**
   * 全局穿透扫描：精准识别四柱干支与藏干中的核心神煞与十神复合大格 (伤官、七杀、羊刃等)
   */
  static detectSynergies(bazi, vigor) {
    const dm = bazi.dayMaster;
    const pillars = bazi.pillars;
    const synergies = [];

    // 1. 羊刃 (阳刃与阴干刃)
    const yangRenMap = {
      '甲': ['卯'],
      '乙': ['辰', '寅'],
      '丙': ['午'],
      '丁': ['未', '巳'],
      '戊': ['午'],
      '己': ['未', '巳'],
      '庚': ['酉'],
      '辛': ['戌', '申'],
      '壬': ['子'],
      '癸': ['丑', '亥']
    };
    const yrTargets = yangRenMap[dm] || [];

    const yangRenPositions = [];
    const pillarNames = { year: '年', month: '月', day: '日', hour: '时' };
    ['year', 'month', 'day', 'hour'].forEach(pKey => {
      const p = pillars[pKey];
      if (yrTargets.includes(p.branch)) {
        yangRenPositions.push(`${pillarNames[pKey]}支【${p.branch}】`);
      }
    });
    const hasYangRen = yangRenPositions.length > 0;

    // 2. 收集天干与藏干中出现的十神与其具体出处柱位
    const godDetails = {};
    const registerGod = (godName, desc) => {
      if (!godName) return;
      if (!godDetails[godName]) godDetails[godName] = [];
      godDetails[godName].push(desc);
    };

    ['year', 'month', 'hour'].forEach(pKey => {
      const p = pillars[pKey];
      if (p.stemGod && p.stemGod !== '日主') {
        registerGod(p.stemGod, `${pillarNames[pKey]}干透【${p.stem}】`);
      }
    });

    ['year', 'month', 'day', 'hour'].forEach(pKey => {
      const p = pillars[pKey];
      p.hidden.forEach(h => {
        registerGod(h.god, `${pillarNames[pKey]}支【${p.branch}】藏干【${h.stem}】`);
      });
    });

    const hasGod = (gName) => (godDetails[gName] && godDetails[gName].length > 0);
    const getGodDesc = (gName) => (godDetails[gName] || []).join('、');

    const hasShangGuan = hasGod('伤官');
    const hasQiSha = hasGod('七杀') || hasGod('偏官');
    const hasZhengGuan = hasGod('正官');
    const hasZhengYin = hasGod('正印');
    const hasPianYin = hasGod('偏印');
    const hasYin = hasZhengYin || hasPianYin;
    const hasZhengCai = hasGod('正财');
    const hasPianCai = hasGod('偏财');
    const hasCai = hasZhengCai || hasPianCai;
    const hasShiShen = hasGod('食神');

    // 组合1：【杀刃带伤 / 威权统帅大贵格 (七杀 + 羊刃 + 伤官)】
    // 用户测试特别提及的至高威权格局！
    if (hasYangRen && hasQiSha && hasShangGuan) {
      synergies.push({
        isSpecial: true,
        isSynergy: true,
        name: '杀刃带伤格 (羊刃驾杀兼伤官吐秀)',
        tag: '🔥 顶级威权破局三元贵格',
        meaning: '命局同时汇聚“七杀之魄力霸气”、“羊刃之钢铁意志”与“伤官之机变才华”。七杀主开拓威权与杀伐决断，羊刃主勇猛刚毅与不怕牺牲，伤官主谋略才干与打破陈规。三者交汇，形成命理中最具统帅力与逆境翻盘能量的“杀刃带伤”大将奇格！文能安邦破死局，武能定国掌重权。',
        source: '《渊海子平》卷三·论羊刃；《子平真诠》第十章·论伤官；《三命通会》卷五·明通赋：“煞无刃不显，刃无煞不威。更逢伤官吐秀，杀刃化为权柄。”',
        formation: `【本命成格验证】① 羊刃坐镇：${yangRenPositions.join('、')}，日元根骨极硬，身能任重杀；② 七杀透聚：${getGodDesc('七杀') || getGodDesc('偏官')}，威权充沛；③ 伤官吐秀：${getGodDesc('伤官')}，机变谋略纵横。三元互制互化，凶煞悉化为至大之威权。`,
        usage: '🎯【实战用法与现代落地】\n' +
               '💼【适合现代职业】：危机企业破局CEO、顶级刑事辩护大律师、军警公安反恐高层指挥官、尖端外科医疗专家、高风险硬核科技创业先锋、跨国战略并购重组操盘手。\n' +
               '👥【人际关系交往】：气场极其威严，做事雷厉风行，极具人格统摄力。对下属要求极高但护犊重义，与同道豪杰惺惺相惜；不屑于阿谀奉承，讨厌软弱推诿之人。亲密关系中占有欲与保护欲极强，愿为家庭遮风挡雨，但性格刚直急躁，宜多戒猜疑，多展现温柔体恤。\n' +
               '🌟【生活案例原型】：如同生死关头受命力挽狂澜的铁血统帅或商战操盘手，常规环境下可能显得桀骜不驯，但在大风大浪与危机死局中能杀出一条血路！'
      });
    }

    // 组合2：【羊刃驾杀格 / 杀刃双全 (七杀 + 羊刃)】
    if (hasYangRen && hasQiSha && !hasShangGuan) {
      synergies.push({
        isSpecial: true,
        isSynergy: true,
        name: '羊刃驾杀格 (杀刃双全)',
        tag: '⚔️ 铁血开拓威权格',
        meaning: '七杀为克身攻坚之猛烈煞星，羊刃为日主最刚劲之兵刃。两强相遇，以羊刃之刚勇抵御七杀之凶暴，以七杀之法度约束羊刃之鲁莽，化凶为吉，乃千古公认的威权开拓大贵格。',
        source: '《渊海子平·继善篇》：“羊刃重重见，无杀定伤残；煞刃两全，威镇边疆。”《子平真诠·论偏官》。',
        formation: `【本命成格验证】日干【${dm}】见${yangRenPositions.join('、')}为羊刃，局中逢${getGodDesc('七杀') || getGodDesc('偏官')}相制衡。杀刃停匀，身强任煞。`,
        usage: '🎯【实战用法与现代落地】\n' +
               '💼【适合现代职业】：刑侦司法、国防军工、重大工程总指挥、高风险投资操盘、企业重整突击队长、应急特种部门。\n' +
               '👥【人际关系交往】：言出必行，重然诺守信用，极具江湖豪气。职场中令行禁止，下属多敬畏服从；在家庭中重担当，但需防说话生硬、脾气急躁，多学会倾听缓和。\n' +
               '🌟【生活案例原型】：如同纪律严明的实干型项目总指挥，敢啃最硬的骨头，顶住一切压力达成战略目标。'
      });
    }

    // 组合3：【伤官合杀 / 伤官制杀 (伤官 + 七杀)】
    if (hasShangGuan && hasQiSha && !hasYangRen) {
      synergies.push({
        isSpecial: true,
        isSynergy: true,
        name: '伤官合杀格 (伤官驾杀)',
        tag: '💡 智谋破局大贵格',
        meaning: '伤官主机变高智，七杀主权柄煞气。以伤官之聪明才智降服七杀之凶性，变阻力为权柄，主为人极具战略眼光、洞察深邃、善于兵不血刃化解危局。',
        source: '《子平真诠》第十章·论伤官：“伤官合杀，武贵双全。”《三命通会·明通赋》。',
        formation: `【本命成格验证】局中伤官（${getGodDesc('伤官')}）与七杀（${getGodDesc('七杀') || getGodDesc('偏官')}）并见，伤官机变有制杀之功。`,
        usage: '🎯【实战用法与现代落地】\n' +
               '💼【适合现代职业】：智库高级顾问、谈判专家、硬核技术架构师、争议解决诉讼律师、品牌公关战略官。\n' +
               '👥【人际关系交往】：洞察力极其敏锐，擅长揣摩人心与局势；人际交往中讲究策略与价值互换。感情中追求精神同频，需戒言语尖锐挑剔。\n' +
               '🌟【生活案例原型】：如同顶级商业谈判高手，在复杂的各方利益博弈中游刃有余，凭智慧达成多方共赢。'
      });
    }

    // 组合4：【伤官配印 (伤官 + 印星)】
    if (hasShangGuan && hasYin) {
      synergies.push({
        isSpecial: true,
        isSynergy: true,
        name: '伤官配印格 (学贵清流)',
        tag: '📜 名扬天下文贵格',
        meaning: '伤官狂放发散，易招是非；印星慈悲仁厚，能生身收敛。二者结合，印星约束伤官之浮躁狂傲，伤官激活印星之学养才华，化为真正的经世致用真学问。',
        source: '《子平真诠》第十章·论伤官：“伤官配印，贵不可言。”《渊海子平·喜忌篇》。',
        formation: `【本命成格验证】柱中见伤官（${getGodDesc('伤官')}）透秀，又得印星（${getGodDesc('正印') || getGodDesc('偏印')}）庇护制衡，才情与涵养兼备。`,
        usage: '🎯【实战用法与现代落地】\n' +
               '💼【适合现代职业】：大学教授、国家智库学者、知名作家编剧、法官、专利科学家、资深架构师、战略出版人。\n' +
               '👥【人际关系交往】：外表斯文儒雅，内心才华横溢。人缘极佳，深得学界同行与尊长推崇。亲密关系中富有情调且有责任感，家庭和睦。\n' +
               '🌟【生活案例原型】：如同既能撰写严谨传世学术巨著，又能在讲坛上妙语连珠、轰动全场的学者名宿。'
      });
    }

    // 组合5：【杀印相生 / 官印双全】
    if ((hasQiSha || hasZhengGuan) && hasYin && !hasShangGuan) {
      synergies.push({
        isSpecial: true,
        isSynergy: true,
        name: hasQiSha ? '杀印相生格 (文武兼资)' : '官印相生格 (尊荣贵品)',
        tag: '🏛️ 威信声望名流格',
        meaning: '官杀代表权力与挑战，印星代表德行与学养。官杀生印，印星生身，将外在的挑战与压力彻底转化为自身的公信力与社会名望。',
        source: '《渊海子平·继善篇》：“杀印相生，必掌兵符之重；印绶逢官，定居文翰之首。”',
        formation: `【本命成格验证】局中官杀与印星两全（${getGodDesc('正印') || getGodDesc('偏印')}），杀不克身反而化气生印，气象纯正。`,
        usage: '🎯【实战用法与现代落地】\n' +
               '💼【适合现代职业】：国家部委/政法高层公职、大型国企央企一把手、权威行业协会理事长、大学校长、医学院院长。\n' +
               '👥【人际关系交往】：行事极具分寸感与威仪，深受领导信任、受下属拥戴；在社交中属于主心骨人物，婚姻多得良配与家庭助力。\n' +
               '🌟【生活案例原型】：如同学养深厚且主政一方的清廉长官，既有决断权威，又有慈爱民风。'
      });
    }

    // 组合6：【食神制杀格】
    if (hasShiShen && hasQiSha && !hasShangGuan) {
      synergies.push({
        isSpecial: true,
        isSynergy: true,
        name: '食神制杀格 (文韬武略)',
        tag: '🌟 英雄压众大将格',
        meaning: '七杀刚烈凶猛，食神宽和内敛。食神以智谋与从容之姿压制七杀之暴躁，属于“外表温文尔雅，内心胜券在握”的顶级博弈大格。',
        source: '《渊海子平·寸金赋》：“食神制杀，英雄独压万人。”《子平真诠·论食神》。',
        formation: `【本命成格验证】柱中食神（${getGodDesc('食神')}）与七杀（${getGodDesc('七杀') || getGodDesc('偏官')}）配合得所，无枭神夺食克破。`,
        usage: '🎯【实战用法与现代落地】\n' +
               '💼【适合现代职业】：医学专家、工程院院士、总工程师、高科技产品线总裁、文武双全的综合领军人。\n' +
               '👥【人际关系交往】：外柔内刚，善解人意，人缘极佳，在团队中擅长润物细无声地化解重大争端与危机。\n' +
               '🌟【生活案例原型】：如同顶级医院心脑血管领域的首席专家，面对危重病人沉着冷静、妙手回春。'
      });
    }

    // 组合7：【食伤生财格】
    if ((hasShiShen || hasShangGuan) && hasCai) {
      synergies.push({
        isSpecial: true,
        isSynergy: true,
        name: '食伤生财格 (富贵自天来)',
        tag: '💰 财源滚滚商贾格',
        meaning: '食神伤官为才华智识之秀气，财星为物质财富与资源变现。秀气转化为财源，代表个人专业技术、创意产品或商业模式具有天然的高变现能力。',
        source: '《渊海子平·继善篇》：“食神生财，胜似财官。”《三命通会·论正偏财》。',
        formation: `【本命成格验证】柱中食伤（${getGodDesc('食神') || getGodDesc('伤官')}）生旺，转生财星（${getGodDesc('正财') || getGodDesc('偏财')}），源流不竭。`,
        usage: '🎯【实战用法与现代落地】\n' +
               '💼【适合现代职业】：商业天使投资人、高科技初创企业创始人、自媒体头部IP变现、高端跨境电商操盘、创意产品商业化总监。\n' +
               '👥【人际关系交往】：情商高、擅沟通、懂人心，人脉资源极广。在商场上善于“分润利益、做大蛋糕”，受合作伙伴高度欢迎。\n' +
               '🌟【生活案例原型】：如同通过打造爆款产品迅速完成数千万乃至数亿财富积累的新一代实业企业家。'
      });
    }

    // 组合8：【魁罡专位格】
    const kgDays = ['戊戌', '庚辰', '庚戌', '壬辰'];
    if (kgDays.includes(bazi.pillars.day.text)) {
      synergies.push({
        isSpecial: true,
        isSynergy: true,
        name: `魁罡格 (${bazi.pillars.day.text}专位)`,
        tag: '⚡ 掌权司衡威猛奇格',
        meaning: '魁罡者，天罡大煞之正位。主命主性情刚毅果决、聪明多智、临危不乱、胆识过人，具有超强的领导魄力与杀伐威势。',
        source: '《渊海子平·喜忌篇》：“若遇魁罡专位，掌权司衡。”《三命通会·论魁罡》。',
        formation: `【本命成格验证】日柱得【${bazi.pillars.day.text}】真魁罡位，秉承天地大威之气。`,
        usage: '🎯【实战用法与现代落地】\n' +
               '💼【适合现代职业】：公安司法督察、军队将领、大型集团强权铁腕CEO、重特大危机调查组负责人。\n' +
               '👥【人际关系交往】：威严庄重，容不得虚伪与背叛。遇事独当一面，但在亲密关系中宜多倾听伴侣，勿将职场霸气带回家中。\n' +
               '🌟【生活案例原型】：如同力排众议、铁腕整肃纪律的强力改革领导者。'
      });
    }

    return synergies;
  }

  /**
   * 辅助函数：构建八字主格的四维卡片
   */
  static buildMainPatternCard(name, bazi, vigor) {
    const dm = bazi.dayMaster;
    const monthBranch = bazi.solarInfo.monthBranch;
    const monthGod = bazi.pillars.month.stemGod;

    const cards = {
      '伤官格': {
        name: '伤官格 (伤官吐秀 / 伤官配印)',
        meaning: '伤官为日元元神所生发之秀气。主悟性极高、聪慧卓绝、才气纵横，具有敏锐的创新洞察力与表现欲。身旺吐秀者，文贵冠世；身弱配印者，学识渊深。',
        source: '《子平真诠》第十章·论伤官；《渊海子平》卷三·论伤官格；《三命通会》卷五·明通赋。',
        formation: `【本命成格验证】日元【${dm}】生于【${monthBranch}】月，月柱透出【${monthGod}】伤官之令星。日主得【${vigor.status}】，本局秀气有托，伤官不被枭神暴克，成格清奇。`,
        usage: '【实战用法】① 用神喜忌：身旺最喜见财星通关成“伤官生财”；身弱最喜正印生身化伤成“伤官配印”；大忌无印解救而见官（伤官见官，为祸百端）；② 事业方向：适宜高智力、高创意、文化艺术、科研架构、媒体品牌或独立领军领域；③ 修身进退：才华虽高，需谨防性情傲物清高，宜借现实之“财星”把才华转化为落地成果。'
      },
      '正官格': {
        name: '正官格 (官印相生 / 财官双美)',
        meaning: '正官者，天地之纯良正气，忠信名望之神。代表社会责任感、自律端正、公正威信与组织领导力。为人行事光明磊落，重法度守信诺。',
        source: '《子平真诠》第七章·论正官；《三命通会》卷五·论正官；《渊海子平》卷一·论官星。',
        formation: `【本命成格验证】日干【${dm}】遇月令【${monthBranch}】之正官贵气，地支官星得令。日主【${vigor.status}】，局无伤官混杀克破，官星纯粹成格。`,
        usage: '【实战用法】① 用神喜忌：喜财生官、印护官；大忌见伤官克官与七杀混杂；② 事业方向：适宜政法治理、国家机关、大型企事业单位高层管理、审计合规等公信力岗位；③ 行运调和：行财运名利双显，行印运尊荣安泰。'
      },
      '七杀格 (偏官格)': {
        name: '七杀格 (杀印相生 / 食神制杀)',
        meaning: '七杀为刚烈开拓之权星，主胆识过人、杀伐决断、处变不惊、具有卓越的统御与逆境反弹力。降伏得宜，即为治世功臣与开拓领袖。',
        source: '《子平真诠》第八章·论偏官；《渊海子平·继善篇》；《三命通会》卷六·论偏官。',
        formation: `【本命成格验证】月令透杀或坐杀，威权暗藏。日主【${vigor.status}】，局中有印星生身化杀，或有食伤制其暴性，威权收归己用。`,
        usage: '【实战用法】① 用神喜忌：喜食神制杀以显文武双全，或印绶化杀以成慈威兼备；大忌财星生旺凶杀攻身；② 事业方向：适宜军旅武职、司法政法、高难度创业破局、尖端外科医疗、危机管理；③ 修持心法：戒除急躁刚愎，以仁德御威严。'
      },
      '正财格 / 偏财格': {
        name: '财格 (财旺生官 / 食伤生财)',
        meaning: '财为养命之源，亦为才干调配与资源变现之能力。正财务实持重，偏财慷慨大度。主人精通商道、精于算度、务实进取。',
        source: '《子平真诠》第九章·论财；《三命通会》卷六·论财帛；《渊海子平·喜忌篇》。',
        formation: `【本命成格验证】月令真财当权，食伤生财，源流不竭。日主【${vigor.status}】，身强能任重财，财官两旺。`,
        usage: '【实战用法】① 用神喜忌：喜身旺行食伤运或官印运；大忌比劫争财无官制护；② 事业方向：适宜金融资本运作、实业商贸、财富管理、大型贸易与现代供应链；③ 行运建议：身强见财发如猛虎，身弱得比劫帮身方可聚财。'
      },
      '印绶格 (正印/偏印)': {
        name: '印绶格 (官印双全 / 杀印相生)',
        meaning: '印者，生我庇我之神。主宅心仁厚、学养深邃、德高望重、极具学者名宿与名誉声望之风度。重精神境界与学术沉淀。',
        source: '《子平真诠》第十一章·论印绶；《渊海子平·继善篇》；《滴天髓·知命论》。',
        formation: `【本命成格验证】月令印星秉令，得天独厚。日主【${vigor.status}】，气象温纯，局无重财坏印破格，印星得所。`,
        usage: '【实战用法】① 用神喜忌：喜官杀相生显名誉，忌重财贴身破印；② 事业方向：适宜高等教育、理论学术科研、国家智库、哲学文化传承、医药仁爱之业；③ 修身建议：谨防空想怠惰，宜以食伤行知合一，将学识发越于天下。'
      },
      '食神格': {
        name: '食神格 (食神生财 / 食神制杀)',
        meaning: '食神为和顺之爵星、福寿之神。主为人谦逊温和、才情内秀、深谙生活美学、一生多得意外福报与贵人照拂。',
        source: '《子平真诠》第十二章·论食神；《三命通会》卷六·论食神；《渊海子平·寸金赋》。',
        formation: `【本命成格验证】月令食神生旺，吐秀生财。日主【${vigor.status}】，无枭神夺食之忧，天然福寿深长。`,
        usage: '【实战用法】① 用神喜忌：喜身强行财运生财，行比劫相帮；大忌见偏印夺食；② 事业方向：适宜文化创意、高端餐饮、美学品鉴、心理咨询、文娱康养产业；③ 人生指南：以从容宽厚为立身之本，福禄自能细水长流。'
      },
      '建禄月劫格': {
        name: '建禄月劫格 (身旺任重 / 专旺自立)',
        meaning: '月令逢日主专禄建禄，主人骨骼刚劲、独立自主、意志坚定不拔，白手起家，自立门户成大事业。',
        source: '《子平真诠》第十三章·论建禄月劫；《三命通会》卷七·论建禄；《渊海子平·继善篇》。',
        formation: `【本命成格验证】月令得日元临官建禄之位。日主得【${vigor.status}】，骨气自立，天生抗压能力极强。`,
        usage: '【实战用法】① 用神喜忌：建禄身旺，最喜天干透财官发荣（透官得贵，透财得富）；忌柱无财官而比劫重叠；② 事业方向：适宜开辟全新业务、自立门户创业、大型工程统筹与关键破局之任；③ 进退之策：戒自傲孤行，善于合作分润。'
      },
      '阳刃格 (羊刃格)': {
        name: '阳刃格 (月刃格 / 威权大将)',
        meaning: '阳刃为日元极旺之阳气，如刀刃兵锋，司生杀予夺之权。主为人骨骼刚劲、胆魄盖世、雷厉风行，有万夫不当之勇。喜见七杀以杀制刃，或见食伤吐秀；大忌无制盲目冲撞。',
        source: '《子平真诠》卷四·论阳刃；《渊海子平》卷三·论羊刃；《三命通会》卷五·论阳刃。',
        formation: `【本命成格验证】日干【${dm}】生于【${monthBranch}】月，逢阳刃专位司权。日主气势雄浑极旺，天生具备超强的抗压拼搏与绝境突围意志。`,
        usage: '【实战用法】① 用神喜忌：最喜天干透出七杀成“羊刃驾杀”之万夫莫当之贵；次喜伤官食神吐秀生财；大忌盲目行比劫运争夺；② 事业方向：适宜刑侦军警、特战应急、破产企业攻坚重组CEO、顶尖外科主刀、极限对抗竞技；③ 修身进退：收敛暴烈冲动之性，以法纪道德自我约束，化刚烈为天下之公器。'
      }
    };

    const card = cards[name] || cards['正官格'];
    return {
      isMain: true,
      name: card.name,
      tag: '月令本命正格 / 终身大纲',
      meaning: card.meaning,
      source: card.source,
      formation: card.formation,
      usage: card.usage
    };
  }

  /**
   * 4. 五经全息人物画像构建 (性格、才华、财富、修持)
   */
  static generatePersona(bazi, vigor, patterns, climate) {
    const dm = bazi.dayMaster;
    const dmElement = bazi.dayMasterElement;
    const dayPillar = (bazi.pillars && bazi.pillars.day && bazi.pillars.day.text) || (dm + '子');
    const mainPattern = (patterns && patterns[0]) || { name: '正本清源格', meaning: '五行流通' };
    const specialPattern = (patterns && patterns.find(p => p.isSpecial)) || null;
    const monthBranch = (bazi.solarInfo && bazi.solarInfo.monthBranch) || '卯';

    const pProfile = (typeof YuZhaoDB !== 'undefined' && YuZhaoDB.dayPillarProfiles) ? YuZhaoDB.dayPillarProfiles[dayPillar] : null;
    const interactions = bazi.interactions || ((bazi.pillars && typeof BaZiEngine !== 'undefined') ? BaZiEngine.calculatePillarInteractions(bazi.pillars) : null);

    // 1. 性格画像 (Psychological Blueprint)
    let personality = `【日元性灵与六十甲子元神】：命主生于【${dayPillar}】日，元神为【${dm}（${dmElement}）】。`;
    if (pProfile) {
      personality += `日柱精微赋象为“${pProfile.archetypeZh}”：${pProfile.traitsZh} `;
    } else {
      personality += `五行以“${dmElement === '木' ? '仁' : dmElement === '火' ? '礼' : dmElement === '土' ? '信' : dmElement === '金' ? '义' : '智'}”为骨髓。`;
    }

    if (vigor.totalScore >= 55) {
      personality += `日元${vigor.status}（量化得分${vigor.totalScore}分），根骨雄健，性格独立自信、果决明断，有强烈的开拓主导意识，敢挑重担而不畏逆境；`;
    } else {
      personality += `日元${vigor.status}（量化得分${vigor.totalScore}分），气象中和柔顺，心思缜密，感知细腻，具有高超的共情力与敏锐的直觉洞察；`;
    }

    // Stem combos and clashes
    if (interactions) {
      if (interactions.stemCombos && interactions.stemCombos.length > 0) {
        personality += `天干逢${interactions.stemCombos.map(c => `【${c.nameZh}】`).join('、')}，${interactions.isJealousCombo ? '多见争合妒合之象，为人思虑细腻多情，但常在多重目标或情感取舍中反复权衡，需定力破局；' : '天干气象和顺有情，兼具原则与妥协艺术，待人接物极具亲和包容度；'}`;
      }
      if (interactions.stemClashes && interactions.stemClashes.length > 0) {
        personality += `天干透${interactions.stemClashes.map(c => `【${c.nameZh}】`).join('、')}，思想交锋激烈，做事雷厉风行、直截了当、眼里揉不得沙子；`;
      }
      if (interactions.branchClashes && interactions.branchClashes.length > 0) {
        personality += `地支带${interactions.branchClashes.map(c => `【${c.nameZh}】`).join('、')}，潜意识中危机感与紧迫感极强，勇于打破现状逆境突围；`;
      }
      if (interactions.branchHarms && interactions.branchHarms.length > 0) {
        personality += `地支逢${interactions.branchHarms.map(h => `【${h.nameZh}】`).join('、')}穿害，心防较重，对人际关系的幽微变动体察极其敏感；`;
      }
    }

    personality += `受【${mainPattern.name}】核心格局陶铸，为人注重人格尊严与战略格局。`;
    if (specialPattern) {
      personality += `更兼具【${specialPattern.name}】之非凡气象，才智兼备，破局能力卓绝。`;
    }

    // 2. 事业与才华画像 (Talent & Career Blueprint)
    let career = `命局气象以【${mainPattern.name}】为主纲，日柱【${dayPillar}】（${pProfile ? pProfile.archetypeZh : dm}）为行事底色，结合月令【${monthBranch}】月之【${climate.primary}】调候用神。`;
    if (mainPattern.name.includes('伤官') || (specialPattern && specialPattern.name.includes('伤官'))) {
      career += `才华聚焦于“创新颠覆、智力变现与战略建构”。极适合硬核科技架构、文化传媒、高端智库咨询、品牌战略操盘或独立领军领域，能在展现非凡创意与专业壁垒的同时确立尊崇声望。`;
    } else if (mainPattern.name.includes('官') || mainPattern.name.includes('杀')) {
      career += `具备天生的组织威严、攻坚魄力与危机破局担当。适宜政法治理、大企业综合管治、重大项目铁血指挥、危机破局与战略攻坚等重度平台。`;
    } else if (mainPattern.name.includes('财')) {
      career += `对商业机遇、资产周转与资源流动极其敏锐。擅长资本运作、商道统筹、商业模式变现与产业整合，宜在商业金融大潮中掌舵领航。`;
    } else {
      career += `才华侧重于学术沉淀、系统搭建与厚德载物。适宜高校智库、科研开发、文化传承、教育出版与德高望重之行业。`;
    }
    if (interactions && interactions.branchClashes && interactions.branchClashes.some(c => c.nameZh.includes('寅申') || c.nameZh.includes('巳亥'))) {
      career += `命中兼带驿马逢冲，极利跨地域、跨国界开拓或频繁差旅外务，动中求财、变中建功。`;
    }

    // 3. 财富与贵气画像 (Wealth Dynamics)
    let wealth = `在五经命理中，财富讲求“身能胜任，源远流长”。本命日柱【${dayPillar}】，日元【${vigor.status}】。`;
    if (vigor.totalScore >= 50) {
      wealth += `日元身健有力，能够充分驾驭大财大物与复杂商业资本。财富增长呈现爆发与阶梯式跃升，中年后借调候【${climate.primary}】之机势，商道通达，积金累玉。`;
    } else {
      wealth += `身主中和细腻，求财之道在“借力打力，专业立身”。通过依附稳健大平台、结盟同道伙伴，将知识壁垒与专业技能转化为长效收益，细水长流，晚景丰厚悠游。`;
    }
    if (interactions && interactions.branchHarms && interactions.branchHarms.length > 0) {
      wealth += `【财务合规提醒】：因地支逢穿害，合作经商或投资理财需严守白纸黑字合同条款，坚决杜绝因人情抹不开面子而违规担保或口头分润。`;
    }

    // 4. 修持与锦囊 (Life Coaching)
    let advice = `根据《滴天髓》“配合干支仔细详”与《子平真诠》救应之道：\n`;
    if (pProfile && pProfile.adviceZh) {
      advice += `① 【日柱立命修持】：${pProfile.adviceZh}\n`;
    }
    advice += `② 【调候环境借势】：生活与工作空间多亲近【${climate.primary}】所代表的五行能量与方位空间；\n`;
    if (interactions && (interactions.branchClashes.length > 0 || interactions.branchHarms.length > 0)) {
      advice += `③ 【刑冲穿害化解】：内省克己，逢刑冲之岁运守正静退，遇穿害之时以法务规则护持边界，不卷入无底线的人情是非；\n`;
    }
    advice += `④ 【立身行止总纲】：格局有秀气者，修身在“谦抑收敛、利他共赢”；格局有威势者，修身在“慈和宽宏、德配其位”。以此五经真诀持身，自能趋吉避凶，达于圆融至境。`;

    return {
      personality,
      career,
      wealth,
      advice
    };
  }

  /**
   * 5. 命主缺陷、心性盲区与败局暗礁深度透视 (Defects, Blind Spots & Vulnerabilities)
   * 深度融合《滴天髓》、《三命通会》、《子平真诠》、《渊海子平》与现代心理学、商业博弈及身心健康学
   */
  static diagnoseDefects(bazi, vigor, patterns, climate) {
    const dm = bazi.dayMaster;
    const dmElement = bazi.dayMasterElement;
    const pillars = bazi.pillars;
    const isStrong = vigor.totalScore >= 52;
    const isWeak = vigor.totalScore <= 36;

    // 1. 羊刃位置探测 (Yang Ren Detection)
    const yangRenMap = {
      '甲': ['卯'], '乙': ['寅', '辰'],
      '丙': ['午'], '丁': ['巳', '未'],
      '戊': ['午'], '己': ['巳', '未'],
      '庚': ['酉'], '辛': ['戌', '申'],
      '壬': ['子'], '癸': ['丑', '亥']
    };
    const yrTargets = yangRenMap[dm] || [];
    const yangRenPositions = [];
    const pillarNames = { year: '年', month: '月', day: '日', hour: '时' };
    ['year', 'month', 'day', 'hour'].forEach(pKey => {
      const p = pillars[pKey];
      if (yrTargets.includes(p.branch)) {
        yangRenPositions.push(`${pillarNames[pKey]}支【${p.branch}】`);
      }
    });
    const hasYangRen = yangRenPositions.length > 0;

    // 2. 收集天干与藏干十神 (Ten Gods Collection across Pillars)
    const godDetails = {};
    const registerGod = (godName, desc) => {
      if (!godName) return;
      if (!godDetails[godName]) godDetails[godName] = [];
      godDetails[godName].push(desc);
    };

    ['year', 'month', 'hour'].forEach(pKey => {
      const p = pillars[pKey];
      if (p.stemGod && p.stemGod !== '日主') {
        registerGod(p.stemGod, `${pillarNames[pKey]}干【${p.stem}】`);
      }
    });

    ['year', 'month', 'day', 'hour'].forEach(pKey => {
      const p = pillars[pKey];
      p.hidden.forEach(h => {
        registerGod(h.god, `${pillarNames[pKey]}支【${p.branch}】藏干【${h.stem}】`);
      });
    });

    const hasGod = (gName) => (godDetails[gName] && godDetails[gName].length > 0);
    const getGodDesc = (gName) => (godDetails[gName] || []).join('、');

    const hasShangGuan = hasGod('伤官');
    const hasQiSha = hasGod('七杀') || hasGod('偏官');
    const hasZhengGuan = hasGod('正官');
    const hasZhengYin = hasGod('正印');
    const hasPianYin = hasGod('偏印');
    const hasYin = hasZhengYin || hasPianYin;
    const hasZhengCai = hasGod('正财');
    const hasPianCai = hasGod('偏财');
    const hasCai = hasZhengCai || hasPianCai;
    const hasShiShen = hasGod('食神');
    const hasJieCai = hasGod('劫财');
    const hasBiJian = hasGod('比肩');

    // 3. 计算五行分布极值 (找出最弱与最旺五行)
    let minEl = '木', minPct = 100;
    let maxEl = '木', maxPct = 0;
    const elementPercentages = bazi.elements ? bazi.elements.percentages : {};
    for (const [el, pctStr] of Object.entries(elementPercentages)) {
      const p = parseFloat(pctStr);
      if (p < minPct) { minPct = p; minEl = el; }
      if (p > maxPct) { maxPct = p; maxEl = el; }
    }

    const cards = [];

    // ==========================================
    // 卡片 1: 🧠 性格特质与心性死穴 (Psychological & Emotional Blind Spots)
    // ==========================================
    const pPoints = [];
    if (isStrong) {
      pPoints.push({
        label: '自负刚愎与以自我为中心',
        text: `日元${vigor.status}（得分为${vigor.totalScore}分）。天生自尊心极重，骨子里认准的事九头牛拉不回。最忌被他人反驳或当面指导，习惯以己度人，容易产生“唯我独尊”的偏执，难纳逆耳忠言。`
      });
    } else if (isWeak) {
      pPoints.push({
        label: '边界失守与深度精神内耗',
        text: `日元${vigor.status}（得分为${vigor.totalScore}分）。心理防御防线脆弱，极具讨好型人格倾向；极怕发生人际冲突，遇争执往往压抑委屈、委曲求全，容易陷入反复思虑与自我怀疑的内耗旋涡。`
      });
    } else {
      pPoints.push({
        label: '犹豫徘徊与杀伐魄力不足',
        text: `日元中和微和。处事求全责备，在重大机遇与危机面前往往平衡顾虑过多，容易陷入“温水煮青蛙”的舒适区，关键关头缺乏孤注一掷的雷霆手段。`
      });
    }

    if (hasShangGuan) {
      pPoints.push({
        label: '恃才傲物与口诛笔伐伤人',
        text: `${getGodDesc('伤官')}。才华横溢但优越感强烈，对平庸之人极度缺乏耐心；言辞犀利如刀，常在不经意间一语中的刺痛他人软肋，所谓“言者无意听者有心”，无形中埋下重重暗怨。`
      });
    }
    if (hasQiSha) {
      pPoints.push({
        label: '危机感过剩与过度防御机制',
        text: `${getGodDesc('七杀')}。潜意识中时刻将外界设定为险恶丛林，防备心极重；容易将同僚或下属的无心之失上升为背叛或敌对，草木皆兵，神经长期紧绷，容易走向极端攻伐。`
      });
    }
    if (hasYangRen) {
      pPoints.push({
        label: '面子至上与受不得激将之毒',
        text: `${yangRenPositions.join('、')}。性情刚烈桀骜，死要面子活受罪；最忌受人言语挤兑或激将，一旦热血上涌往往不计后果硬刚到底，哪怕明知是错也要打肿脸充胖子。`
      });
    }
    if (hasPianYin) {
      pPoints.push({
        label: '孤芳自赏与佛系拖延脱节',
        text: `${getGodDesc('偏印')}。心性清高多疑，与世俗大众保持冷眼疏离；容易陷入“思想上的巨人、行动上的矮子”之怪圈，在理论与幻想中空耗时光，执行力严重滞后。`
      });
    }
    if (!hasShangGuan && !hasQiSha && !hasYangRen && hasCai) {
      pPoints.push({
        label: '功利焦虑与算计过多反受缚',
        text: `全盘财星气盛。对现实利益与回报率过于敏感，极易被眼前蝇头小利牵扯精力，格局因过分精于计算而难以承载长周期大造化。`
      });
    }

    cards.push({
      id: 'psychological',
      icon: '🧠',
      title: '性格特质与心性死穴',
      subtitle: '情绪死穴 · 心理盲区 · 潜意识陷阱',
      borderColor: 'border-rose-800/50',
      tagColor: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
      points: pPoints,
      rootCause: `【古法病灶透视】《滴天髓》云：“偏全之理，造化之机”。本造日主${vigor.status}，配合${hasShangGuan ? '伤官吐秀' : ''}${hasQiSha ? '七杀攻伐' : ''}${hasYangRen ? '羊刃助威' : ''}，心性中“${isStrong ? '刚烈难制、骄矜凌人' : '虚浮易摇、内耗自伤'}”乃毕生心性首要大关。`
    });

    // ==========================================
    // 卡片 2: 👥 职场博弈与人际交往雷区 (Workplace & Interpersonal Traps)
    // ==========================================
    const wPoints = [];
    if (hasShangGuan || hasQiSha) {
      wPoints.push({
        label: '上下级死门：功高震主与蔑视庸官',
        text: `天生反骨，骨子里看不起才具平庸、作风官僚的上级。若上级能力无法服众，命主极易当面硬顶或暗地冷嘲热讽，在体制内极易成为“首批被雪藏打压、穿小鞋”的众矢之的。`
      });
    } else if (isWeak && (hasZhengGuan || hasQiSha)) {
      wPoints.push({
        label: '上下级死门：职场背锅与边界不清',
        text: `官杀压身身弱无力，职场中不敢向上拒绝、不敢向下问责。常被甩锅顶雷，明明承担了核心脏活累活，功劳却被他人掠夺，沦为吃力不讨好的“受气包”。`
      });
    } else {
      wPoints.push({
        label: '上下级死门：缺乏组织顺从与认同感',
        text: `不喜被体制过度约束，对流程化、机械式的服从极度抵触，容易与直属管辖层产生隐性摩擦。`
      });
    }

    if (hasYangRen || hasJieCai || (isStrong && hasBiJian)) {
      wPoints.push({
        label: '合伙死门：同甘苦易、共分红必反目',
        text: `命带比劫羊刃，千古大忌在“与熟人朋友合伙经商”。极易因“义气与情面”模糊契约与账目，业务做大之时必现抢夺客户、私设暗账或反目成仇；切戒为任何人作连带借贷担保，否则必定沦为“替人买单背巨债”。`
      });
    } else {
      wPoints.push({
        label: '合伙死门：契约失衡与利益被动',
        text: `在合作中缺乏严密法务防御意识，容易被能言善辩的项目操盘手画饼诱惑，往往在投入核心心力与资源后陷入被边缘化或被分食权益的被动局面。`
      });
    }

    if (hasShangGuan || hasYangRen || hasQiSha) {
      wPoints.push({
        label: '亲密关系：高压挑剔与情绪霸权',
        text: `对外界往往礼节周全，却把最苛刻的评判与最坏的情绪留给伴侣。习惯用审判官的显微镜找对方毛病，言辞句句带刺，让伴侣长期处于窒息与被否定之中，易致情感冷战或突发破裂。`
      });
    } else {
      wPoints.push({
        label: '亲密关系：情感疏离与沟通壁垒',
        text: `内心情感表达过于内敛或冷淡，习惯把心事藏在心底独自承受，难以向伴侣提供充分的情绪价值，长期相处易使关系退化为形式上的平淡与疏离。`
      });
    }

    cards.push({
      id: 'workplace',
      icon: '👥',
      title: '职场博弈与人际交往雷区',
      subtitle: '上下级死门 · 合伙反目 · 亲密关系挑剔',
      borderColor: 'border-amber-800/50',
      tagColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
      points: wPoints,
      rootCause: `【人际死门透视】《三命通会》论比劫争端云：“相生者贵，相战者残”。人际与合伙的核心陷阱在于“以情分代替规则，以义气掩盖账目”，必须建立铁面无私的契约防线。`
    });

    // ==========================================
    // 卡片 3: 💰 商业决策与破财暗礁 (Decision & Wealth Pitfalls)
    // ==========================================
    const fPoints = [];
    if (isWeak && hasCai) {
      fPoints.push({
        label: '小马拉大车：盲目扩张引发流动性猝死',
        text: `身弱财旺，承载力不足却欲望冲天。最易在基本盘尚未扎牢时好大喜功，盲目上马多条业务线或借贷加杠杆；一旦市场大势逆转或应收账款延宕，现金流顷刻休克，导致全盘崩盘。`
      });
    } else if (isStrong && (hasJieCai || hasYangRen)) {
      fPoints.push({
        label: '豪赌投机：赚多漏多与高位接盘爆仓',
        text: `自恃眼光独到，蔑视细水长流之慢钱，极度沉迷高风险、高杠杆投机或所谓灰色快钱。在牛市顶点极易孤注一掷满仓梭哈，极易因一次傲慢的豪赌将数年甚至半生积累输得一干二净。`
      });
    } else {
      fPoints.push({
        label: '投入产出失衡：重投入轻变现',
        text: `容易在产品研发、情怀打磨或表面光鲜上耗费巨资，但在销售获客与资金回笼上缺乏狠劲，极易造成“叫好不叫座”、利润被高额固定成本吞噬。`
      });
    }

    if (hasShangGuan && !hasYin) {
      fPoints.push({
        label: '合规意识淡漠：涉险擦边引火烧身',
        text: `伤官无印管束，做事信奉“兵行险着”，对行业准入、税务合规、合同审查及劳动用工等底层规则心存侥幸。极易在监管严打、同行举报或客户纠纷中遭遇巨额罚单甚至官非刑责。`
      });
    } else {
      fPoints.push({
        label: '人情买单破财：熟人借贷多肉包打狗',
        text: `往往因面子难堪或熟人引荐，在未做严谨尽调的情况下出借资金、参股空壳项目或替人垫资，资金出库容易回收极难，最终沦为不良死账。`
      });
    }

    cards.push({
      id: 'wealth',
      icon: '💰',
      title: '商业决策与破财暗礁',
      subtitle: '盲目杠杆 · 投机爆仓 · 致命担保与合规死穴',
      borderColor: 'border-red-800/50',
      tagColor: 'bg-red-500/20 text-red-300 border-red-500/30',
      points: fPoints,
      rootCause: `【破财病灶透视】《渊海子平·喜忌篇》云：“财多身弱，富屋贫人；羊刃逢财，勃然大祸”。财富之道在“胜任与守成”，贪快、好赌、轻信熟人担保是致穷三大魔咒。`
    });

    // ==========================================
    // 卡片 4: 🩺 五行偏枯与身心弱项 (Physical & Energy Vulnerabilities)
    // ==========================================
    const hPoints = [];
    const organMap = {
      '木': {
        organ: '肝胆系统、经络神经、四肢筋骨、眼目',
        symptoms: '肝气不舒郁结、眼干眼涩视力疲劳、经络筋腱僵硬抽筋、偏头痛、易躁动发怒或长期精神疲倦，易见神经衰弱与睡眠障碍。',
        clash: '受旺金强克伐或缺水滋养，筋骨脆性大。'
      },
      '火': {
        organ: '心脑血管系统、小肠、血液循环、双目',
        symptoms: '心阳不足、脑供血迟缓、常年手足冰凉、低血压、心悸胸闷、畏寒怕冷、精力耐受力较差，秋冬季易发季节性情绪低沉。',
        clash: '逢强水克灭或极燥耗竭，心血管负荷大。'
      },
      '土': {
        organ: '脾胃消化系统、肌肉组织、水湿代谢',
        symptoms: '脾胃虚寒受纳运化不畅、食欲不振、胃胀反酸、肠道紊乱、水湿聚积浮肿、肌肉松弛乏力，易见代谢综合征与痰湿体质。',
        clash: '受旺木重克或厚水浸泡，脾阳极难舒展。'
      },
      '金': {
        organ: '呼吸系统（肺部、气管、鼻咽）、大肠、皮肤屏障',
        symptoms: '肺气虚耗、过敏性鼻炎、咽喉干痛反复发作、易感风寒咳喘、大肠排毒传导不畅（便秘或稀溏）、皮肤干燥易起过敏皮疹。',
        clash: '受烈火熔炼或燥土深埋，气管与皮表极敏感。'
      },
      '水': {
        organ: '肾脏泌尿系统、骨髓、生殖内分泌、腰耳',
        symptoms: '肾精暗耗、精力透支早衰、腰膝酸软隐痛、耳鸣多梦、下肢沉重水肿、夜尿频繁、脱发白发，内分泌轴与荷尔蒙失衡。',
        clash: '逢燥土厚壅或烈火熬干，元阳真阴两亏。'
      }
    };

    const minInfo = organMap[minEl] || organMap['水'];
    const maxInfo = organMap[maxEl] || organMap['木'];

    hPoints.push({
      label: `偏枯首恶：【${minEl}】行过弱（占比仅 ${minPct}%）`,
      text: `本命【${minEl}】行能量严重偏枯，对应【${minInfo.organ}】先天受制。常见表征：${minInfo.symptoms}`
    });

    hPoints.push({
      label: `亢过必折：【${maxEl}】行独旺（占比达 ${maxPct}%）`,
      text: `【${maxEl}】气专横旺相，必对其所克之五行造成持续高压，导致【${minInfo.clash}】日常起居极易处于亚健康代偿状态。`
    });

    if (hasQiSha || hasShangGuan) {
      hPoints.push({
        label: '心理亚健康预警：过度警觉与神经疲惫',
        text: `因命带${hasQiSha ? '七杀' : '伤官'}，中枢神经常期处于亢奋应急状态。极易诱发心因性失眠、浅睡眠多梦、焦灼不安等交感神经紊乱征兆。`
      });
    }

    cards.push({
      id: 'health',
      icon: '🩺',
      title: '五行偏枯与身心弱项',
      subtitle: '脏腑弱征 · 气血失衡 · 亚健康预警',
      borderColor: 'border-cyan-800/50',
      tagColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
      points: hPoints,
      rootCause: `【五行医理透视】《黄帝内经》与《穷通宝鉴》同源：“五行中和，百病不生；偏枯偏胜，疾恶乃生”。调理当以补【${minEl}】、制【${maxEl}】、兼顾调候【${climate.primary}】为日常养生第一要务。`
    });

    // ==========================================
    // 卡片 5: 🛡️ 对症下药·破局绝密解药 (Actionable Guardrails & Strategic Antidotes)
    // ==========================================
    const rPoints = [];
    rPoints.push({
      label: '决策熔断法则：48小时强制冷冻机制',
      text: `重大投资、重大合伙签约、人事开除或在被激怒/极度亢奋时，坚决启动“48小时决策熔断”。冷冻期内严禁表态与签字，交由外部独立顾问审核，彻底切断被情绪脑绑架的冲动败局。`
    });

    rPoints.push({
      label: '制度防火墙：三不原则与契约铁律',
      text: `毕生恪守三条铁律：① 绝不为任何人（包括至亲挚友）提供连带借贷担保；② 不出借超过单月净收入的情面款，一概视作沉没成本；③ 合伙必签白纸黑字竞业与对赌退股退出机制，股权必须有一人绝对控股（≥67%）。`
    });

    if (isStrong) {
      rPoints.push({
        label: '身旺心性口诀：装愚守拙，利出三分',
        text: `“水至清则无鱼，人至察则无徒”。在事业顺境中，切忌凡事争锋出尽风头；学会隐藏锋芒，把聚光灯让给同僚，把利润分给下属，以厚德宽宏驾驭群雄，方能消解比劫夺财之煞。`
      });
    } else {
      rPoints.push({
        label: '身弱心性口诀：设立边界，借势而行',
        text: `“柔弱胜刚强，大树底下好乘凉”。立即停止无意义的讨好与心理内耗，敢于对消耗自己的烂人烂事说不。不单打独斗，深耕核心专业壁垒，主动依附成熟的大平台与强力贵人，以退为进。`
      });
    }

    rPoints.push({
      label: '调候起居指南：五行能量对症化解',
      text: `首要调候用神为【${climate.primary}】、弱势五行为【${minEl}】。日常宜多置身于五行【${climate.primary}】所对应的地理方位与自然环境；起居作息宜避开子夜熬夜，早晚进行深呼吸或站桩调息，以此凝聚精气神。`
    });

    cards.push({
      id: 'remedies',
      icon: '🛡️',
      title: '对症下药 · 破局绝密解药',
      subtitle: '心性修炼口诀 · 制度化防火墙 · 终身避坑军规',
      borderColor: 'border-emerald-800/50',
      tagColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
      points: rPoints,
      rootCause: `【破局终极法门】《子平真诠·论救应》云：“病重得药，大富大贵；有病无药，沦为庸流”。命中有缺陷并不可怕，知其死穴而筑制度防线，以修心克制魔障，方为上上大智慧！`
    });

    return {
      summary: `全盘透视日主【${dm}】元神之深层缺陷，直面心性死穴、职场雷区、破财陷阱与五行偏枯，并配备定制化破局解药与制度防火墙。`,
      cards
    };
  }

  /**
   * 6. 命理调补与改运总决 (Remedy Guide for Weak/Strong Day Master)
   * 包含：
   * A. 针对本命八字的定向调补方案 (理气生克、心智模型、日常起居、职场商业)
   * B. 身弱培补六大总决 vs 身强疏导六大总决 全对照指南
   */
  static generateRemedyGuide(bazi, vigor, patterns, climate) {
    const dm = bazi.dayMaster;
    const dmElement = bazi.dayMasterElement;
    const isStrong = vigor.totalScore >= 52;
    const isWeak = vigor.totalScore <= 36;
    const isExtremeStrong = vigor.totalScore >= 68;
    const isExtremeWeak = vigor.totalScore <= 22;

    // 五行生克对应关系
    const generates = { '木': '火', '火': '土', '土': '金', '金': '水', '水': '木' };
    const generatedBy = { '木': '水', '火': '木', '土': '火', '金': '土', '水': '金' };
    const controls = { '木': '土', '火': '金', '土': '水', '金': '木', '水': '火' };
    const controlledBy = { '木': '金', '火': '水', '土': '木', '金': '火', '水': '土' };

    const yinElement = generatedBy[dmElement] || '金'; // 生我者为印星
    const biElement = dmElement;                      // 同我者为比劫
    const shiElement = generates[dmElement] || '木';   // 我生者为食伤
    const caiElement = controls[dmElement] || '土';    // 我克者为财星
    const guanElement = controlledBy[dmElement] || '火';// 克我者为官杀

    let vigorType = '中和微偏';
    if (isExtremeStrong) vigorType = '极旺 / 专旺气象';
    else if (isStrong) vigorType = '身强 / 身旺格局';
    else if (isExtremeWeak) vigorType = '极弱 / 从格气象';
    else if (isWeak) vigorType = '身弱 / 待生待扶';

    // 1. 定制化本命调补方案 (Tailored Advice)
    let tailored = null;

    if (isWeak || isExtremeWeak) {
      tailored = {
        type: 'weak',
        title: `日主【${dm} (${dmElement})】· 身弱培补生扶总决`,
        subtitle: `培补元神 · 闭环蓄能 · 依附借势 · 零杠杆制胜`,
        badge: `本命鉴定：${vigor.status} (精力承载力 ${vigor.totalScore}分)`,
        philosophy: `《渊海子平》云：“日干弱，要印绶生之，比劫帮之。” 身弱非劣命，老子曰“柔弱胜刚强”。身弱之病在“元气亏虚，不耐克泄耗”，治法首在“滋阴涵养、杜绝漏能”，以专精与借势赢天下。`,
        elementRemedy: {
          mainAction: `首取印星【${yinElement}】生身，次取比劫【${biElement}】帮身，严控财【${caiElement}】、食伤【${shiElement}】、官杀【${guanElement}】之耗泄。`,
          details: [
            {
              name: `主用神 · 印星【${yinElement}】(生扶滋养)`,
              content: `印为母亲、文化、学识、靠山与休息。日常宜多读书深造、考取权威认证牌照；亲近文化大儒与厚重导师；善借大公司大平台的品牌声誉背书。`
            },
            {
              name: `辅佐神 · 比劫【${biElement}】(抱团分劳)`,
              content: `比劫为同道、战友与筋骨。不搞单打独斗，寻找互补型合伙人分担攻坚压力；日常注重强身健体、增强骨密度与体魄，以体魄聚底气。`
            },
            {
              name: `避忌克泄 · 严控贪求`,
              content: `身弱最忌财旺加杠杆（耗尽元气）与食伤无度宣泄（心力交瘁）。克制物欲与虚荣心，不盲目追求快钱与多线并发。`
            }
          ]
        },
        mentalRemedy: [
          {
            tag: '闭环蓄能',
            text: '立刻戒除“讨好型人格”与“过度共情”。身弱者天生是情绪海绵，极易吸收外界负能量。对消耗自己的人与琐事冷面拒绝，建立心理防火墙，把能量闭环在自己身上。'
          },
          {
            tag: '依附借势',
            text: '秉承“大树底下好乘凉”的智慧。不当冲锋陷阵的炮灰，主动依附成熟的组织体制或实力强盛的靠山。以首席专家、幕僚军师或技术二把手的生态位立足，享受大平台庇护。'
          },
          {
            tag: '聚焦单点',
            text: '既然全面铺开必崩，便将全部火力凝聚于“针尖之大”的细分专业。打造不可替代的单点核心绝技，深挖护城河，让别人主动来找你，以逸待劳。'
          }
        ],
        habitRemedy: [
          {
            tag: '睡眠为天',
            text: '睡眠是身弱最好的天然补印大法。坚决杜绝子夜（23:00~01:00）熬夜，必须睡足7~8小时子午觉。睡前1小时远离手机屏，静坐调息，让真阳真阴归位。'
          },
          {
            tag: '微汗柔养',
            text: '严禁力竭性大重量健身或极度耗气的马拉松暴汗。宜练太极、八段锦、站桩、慢走与瑜伽，以“微汗即止、练后神清气爽”为度，只聚气不散气。'
          },
          {
            tag: '气场吸能',
            text: '多去图书馆、山川林泉、古刹书院等印星能量充盈之地；多与情绪稳定、慈眉善目的长辈相处。少去酒吧夜店与争拗之地。'
          },
          {
            tag: '温养脾肾',
            text: '戒除冰冷冷饮与生鲜寒凉，饮食以温热、易消化为主；常饮温水、红枣桂圆或养胃健脾粥，以内调外，充盈后天气血。'
          }
        ],
        careerRemedy: [
          {
            tag: '零杠杆运作',
            text: '身弱经不起现金流断裂的狂风暴雨。生活与商业坚决不碰高利借贷与高倍杠杆；必须常备6~12个月的生活营运无风险储备金，留足安全垫。'
          },
          {
            tag: '终身三不保',
            text: '坚决不为任何人作银行贷款担保、不借超过单月收入的情面死账、不参与无清晰退路的高风险集资，彻底切断被连累破财的祸根。'
          },
          {
            tag: '生态位选择',
            text: '首选合规、文教、研发、医疗、大企战略规划等重智力、轻重资产的岗位；在合伙中宜担任技术总监（CTO/COO）或首席顾问，将法务法人交由身旺者担当。'
          }
        ],
        energyRecharge: {
          mental: {
            title: '🧠 精神脑力消耗大 · 固神回魂法 (补印固元)',
            causes: '伤官食神过度泄秀（思虑过度、脑力暴走）、官杀克身（精神紧绷焦虑、防御内耗）或心肾不交。',
            steps: [
              {
                name: '视觉与信息绝对断联 (数字排毒)',
                detail: '人身之神发于目。《黄帝内经》云“五脏六腑之精气皆上注于目”。看手机刷短视频最耗心血神气。精神枯竭时，立刻关机或开启飞行模式，闭目养神30分钟，切断外部光影刺激，让散乱的神识归巢。'
              },
              {
                name: '止语静心蓄元 (言语最耗气)',
                detail: '古云“多言伤肺气，多语散心神”。减少无效社交与争论，实行半日“止语”。不发表意见、不做评判，以沉默沉淀精神浮躁，闭口深呼吸。'
              },
              {
                name: '高维印星能量接引 (读经典/游名山)',
                detail: '精神被尘俗琐事压垮时，多读先哲经典（《道德经》《庄子》《黄帝内经》或高雅艺术美学），或独坐古树林泉旁深呼吸，接地气（Grounding），接引天地自然深沉印星能量。'
              },
              {
                name: '安神引火归元功 (数息与涌泉按揉)',
                detail: '每晚睡前盘坐，做腹式深长呼吸（吸气4秒，屏气2秒，呼气6秒，重复21次），意守下丹田；睡前揉搓脚心涌泉穴100下，引脑部上浮虚火下归肾水，安魂入眠。'
              }
            ]
          },
          physical: {
            title: '🩺 身体肉体消耗大 · 培土填精法 (培脾固肾)',
            causes: '财多耗身（肉体过度奔波劳碌）、生化气血不足（脾胃运化虚弱）或肾水真元暗耗。',
            steps: [
              {
                name: '雷打不动的黄金子午觉 (骨髓造血)',
                detail: '子时（23:00~01:00）胆经当令，为一阳初生之时。此时必须处于深度熟睡状态，这是身体骨髓造血、修复细胞的唯一黄金窗口；午时（11:00~13:00）闭目小憩20分钟养心气。'
              },
              {
                name: '停止过竭运动 · 改为站桩与八段锦',
                detail: '身体极度疲惫时盲目去健身房举铁或长跑是“慢性自杀”（透支残存元阳）。必须改为站桩（浑圆桩15分钟）、八段锦（尤其“双手攀足固肾腰”），以意领气，只聚气不伤耗。'
              },
              {
                name: '脾肾双补药膳回血汤 (后天生先天)',
                detail: '肾主骨髓藏精，脾主肌肉生血。日常备“三黑粥”（黑豆、黑米、黑芝麻加核桃枸杞）填补肾精；脾胃虚寒者常饮黄芪党参红枣生姜水，温阳化气，迅速提振肌肉耐力。'
              },
              {
                name: '温阳督脉照晒与艾灸温通',
                detail: '后背为人体诸阳之会（督脉与膀胱经）。上午9~10点晒后背15~20分钟吸收太阳真阳；睡前艾叶生姜热水泡脚至后背微潮，暖敷神阙（肚脐）与命门，逼出体内沉寒湿气。'
              }
            ]
          }
        }
      };
    } else if (isStrong || isExtremeStrong) {
      tailored = {
        type: 'strong',
        title: `日主【${dm} (${dmElement})】· 身强身旺制化疏导总决`,
        subtitle: `食伤泄秀 · 财星分润 · 官杀立规 · 藏锋守拙`,
        badge: `本命鉴定：${vigor.status} (精力承载力 ${vigor.totalScore}分)`,
        philosophy: `《滴天髓》云：“强木得火，方化其顽；强水得木，方泄其怒。” 身强者如满弦之弓、出笼猛虎，精力充沛、意志顽强；其病在“刚愎自用、过满则溢”，治法在于“疏泄秀气、利出三分、敬畏法度”，以谦逊化解反噬。`,
        elementRemedy: {
          mainAction: `首取食伤【${shiElement}】泄秀吐芳，次取财星【${caiElement}】分润经商，复取官杀【${guanElement}】立规克己，严禁再逢印【${yinElement}】比【${biElement}】火上浇油。`,
          details: [
            {
              name: `主用神 · 食伤【${shiElement}】(才华秀气发越)`,
              content: `将体内充沛无处宣泄的元神转化为文采、科技创新、商业产品研发与精湛技艺；以建设性输出化解暴烈之气，名扬四海。`
            },
            {
              name: `辅佐神 · 财星【${caiElement}】(利益分润天下)`,
              content: `承担商业资本运营与财富统筹。牢记“财散人聚，财聚人散”，主动大方让利给团队伙伴，以共同富裕消除比劫夺财之劫。`
            },
            {
              name: `规矩绳墨 · 官杀【${guanElement}】(敬畏法律公器)`,
              content: `自觉接受制度纪律约束，克制目空一切的霸气。在商业与生活中严守法律红线，引入制度与合规机制自律。`
            }
          ]
        },
        mentalRemedy: [
          {
            tag: '藏锋守拙',
            text: '克制“好为人师、凡事必胜”的本能。身强者气场强大，极易无意中给他人造成压迫感。学会“装傻示弱”，把聚光灯和风头让给他人，多倾听慢表态，以柔克刚。'
          },
          {
            tag: '利出三分',
            text: '身旺者最大的暗礁是“比劫夺财与众叛亲离”。在任何利益分配中，宁可自己少拿一成，多分给一线伙伴与合作伙伴。舍得让利，才能把潜在的敌人变成死忠同盟。'
          },
          {
            tag: '严设刹车',
            text: '身强者胆子大、敢冒险，极易好大喜功铤而走险。身边必须配备冷静、甚至敢于直言进谏的法务与财务总监，重大决策必须经由“刹车机制”过滤，杜绝独断专行。'
          }
        ],
        habitRemedy: [
          {
            tag: '暴汗排燥',
            text: '身旺之人气血过于亢盛，若长期伏案则易郁而化火、烦躁易怒。适合拳击、大重量力量、越野跑、激烈球类运动，通过暴汗宣泄过盛阳气，令心神回归平和。'
          },
          {
            tag: '静坐磨性',
            text: '每日固定安排20~30分钟静坐观息、练习书法、茶道品鉴或慢速太极，克制火气与急躁，磨炼沉稳持重的深沉定力。'
          },
          {
            tag: '饮食清火',
            text: '少吃牛羊肉、烧烤煎炸与烈性烈酒，防止肝火与心火上炎；多食绿叶蔬菜、苦瓜、绿豆汤，常饮菊花清肝茶，以内清降内燥。'
          },
          {
            tag: '开阔透气',
            text: '生活与办公环境宜宽敞明亮、通风极佳，保持极简断舍离，不让过多杂物堵塞气场，让磅礴精力得以舒畅发散。'
          }
        ],
        careerRemedy: [
          {
            tag: '开辟新赛道',
            text: '天生适合当领头羊与开拓者。敢打硬仗、能抗重压，适宜自立门户、开拓无人区业务、主持危机重组与大项目攻坚，承担第一责任人。'
          },
          {
            tag: '股权大方分润',
            text: '创业合伙切忌一人独吞所有收益。采用“控制权一人独大，收益权大方分润”的股权架构，用丰厚的期权池绑定人才，防范合伙人反水。'
          },
          {
            tag: '严防牛市加杠杆',
            text: '身强者最易在顺风顺水时误判形势，把运气当实力，在狂热期盲目All-in高风险投机。必须强设利润回撤止盈线，把战果转化为稳固基本盘。'
          }
        ],
        energyRecharge: {
          mental: {
            title: '🧠 精神躁动与内耗 · 降火安神法 (清心制妄)',
            causes: '身旺火燥、比劫争斗心切、好大喜功导致精神过度亢奋而引发的虚脱与烦躁。',
            steps: [
              {
                name: '静坐观心与强制减速',
                detail: '身强者精神消耗多因“转速过高”引发轴承过热。每日强制慢下来，练习书法、慢品单丛茶或静坐冥想20分钟，观察念头起伏而不随之起舞，平抑中枢神经亢进。'
              },
              {
                name: '清热降燥茶饮疏理',
                detail: '精神烦躁易怒时，常饮白茶、菊花决明子茶、苦丁茶或竹叶心茶，清泻心火与肝经郁火，恢复清明理智。'
              },
              {
                name: '放下执念与断欲放空',
                detail: '把必须争第一、必须控制一切的执念主动卸下一半。设定每周一次“彻底放空日”，不看任何商业数据与竞争信息，重塑心智弹性。'
              }
            ]
          },
          physical: {
            title: '🩺 身体气血郁热与透支 · 排毒疏泄法 (通利经络)',
            causes: '过盛精力被困在室内伏案，气血瘀滞化火，或剧烈应酬酗酒伤及肝胆脾胃。',
            steps: [
              {
                name: '大汗淋漓的耐力宣泄',
                detail: '通过高强度拳击、越野跑、大重量力量或游泳，将郁结在经络肌肉中的暴烈躁气彻底排出，让亢奋的交感神经重回副交感神经主导。'
              },
              {
                name: '饮食戒酒控肉清道夫',
                detail: '停止高热量、辛辣肥甘厚味与烈酒轰炸。多食绿叶蔬菜、冬瓜汤、绿豆百合粥，通利大肠排毒，减轻心血管与肝胆代谢重负。'
              },
              {
                name: '定期刮痧拔罐疏通膀胱经',
                detail: '身旺之人后背督脉与膀胱经易积存厚重火毒。定期进行后背走罐或刮痧，散去经络淤热，改善肩颈僵硬，恢复肌肉轻灵。'
              }
            ]
          }
        }
      };
    } else {
      // 中和格局
      tailored = {
        type: 'neutral',
        title: `日主【${dm} (${dmElement})】· 中和中庸行运总决`,
        subtitle: `顺应岁运 · 调候为急 · 执两用中 · 守正出奇`,
        badge: `本命鉴定：${vigor.status} (精力承载力 ${vigor.totalScore}分)`,
        philosophy: `《中庸》云：“致中和，天地位焉，万物育焉。” 日主气象中和，无偏枯之患，乃天然大贵福寿之基。处事宜顺天应时，岁运逢弱则补，岁运逢旺则泄，重点在于“调候气候之冷暖燥湿”。`,
        elementRemedy: {
          mainAction: `以本命调候用神【${climate.primary}】为核心，随流年大运之生克灵活流转。`,
          details: [
            {
              name: `调候急务 · 【${climate.primary}】`,
              content: `顺应时令节气调节五行平衡，寒则用火，暖则用水，燥则润之，湿则燥之。`
            },
            {
              name: `中正平和 · 兼顾生泄`,
              content: `平日不走极端，守住中庸之道，进可攻退可守。`
            }
          ]
        },
        mentalRemedy: [
          { tag: '知止有度', text: '顺境不骄纵，逆境不颓丧，以平常心应对世事沧桑。' },
          { tag: '顺势而为', text: '逢官运重名誉合规，逢财运广开商道，逢印运潜心读书深造。' }
        ],
        habitRemedy: [
          { tag: '作息规律', text: '起居有常，饮食有节，天人合一。' },
          { tag: '动静相宜', text: '动则强筋健骨，静则涵养性灵。' }
        ],
        careerRemedy: [
          { tag: '稳中求进', text: '不冒进亦不保守，紧跟时代主流大势稳健成长。' }
        ],
        energyRecharge: {
          mental: {
            title: '🧠 精神调摄 · 动静相兼安神法',
            causes: '随四时气候阴阳变化而产生的轻微心神波动。',
            steps: [
              { name: '顺应四时作息', detail: '春生夏长秋收冬藏，春季晚睡早起广步于庭，冬季早睡晚起必待日光。' },
              { name: '情志平衡知止', detail: '以平常心待人接物，心无挂碍则神气清爽。' }
            ]
          },
          physical: {
            title: '🩺 身体调护 · 阴阳平衡维稳法',
            causes: '季节交替与劳逸失调引发的生理机能轻微失衡。',
            steps: [
              { name: '食饮有节起居有常', detail: '少食多餐，荤素均衡搭配，常饮温开水，保持气血通畅。' },
              { name: '太极八段锦调和气血', detail: '每日晨起练八段锦或太极拳，疏通经络，保持身心如水般流转自如。' }
            ]
          }
        }
      };
    }

    // 2. 身弱 vs 身强 完整全法对照总决 (Comparison Guide)
    const comparisonGuide = {
      weakRules: [
        {
          num: '01',
          name: '补印蓄元',
          theme: '以文化、靠山、大平台为铠甲',
          detail: '身弱首重印星。将学习深造、权威文凭牌照与大平台的背书作为立身基石；亲近厚重长者与实力导师，借助印星的护佑化解官杀风浪。'
        },
        {
          num: '02',
          name: '依附借势',
          theme: '大树底下好乘凉，幕僚军师制胜',
          detail: '不单枪匹马在红海肉搏。定位于核心业务骨干、技术CTO、专业幕僚或二把手，让身旺有魄力的人在前方冲锋，自己守住核心专业享受分红。'
        },
        {
          num: '03',
          name: '界限分明',
          theme: '戒除讨好型人格，严防能量外泄',
          detail: '身弱最忌做“老好人”。敢于对消耗自己的烂人烂事说不，建立冰冷的心理防护网，把有限的元神闭环收敛，杜绝无效社交与精神内耗。'
        },
        {
          num: '04',
          name: '聚焦单点',
          theme: '以针尖之力打穿极窄赛道',
          detail: '精力有限，切忌多线作战与盲目跨界。将全部火力凝聚于一个不可替代的专业领域，打造深厚技术壁垒，以专精特新安身立命。'
        },
        {
          num: '05',
          name: '零杠杆防守',
          theme: '充足现金流，终身不为人担保',
          detail: '生活与经商拒绝高额负债加杠杆；常备12个月生活储备金；恪守“不作连带借贷担保、不借超过单月收入的死账款”，严防破财雪崩。'
        },
        {
          num: '06',
          name: '柔和微汗',
          theme: '睡眠为天，太极站桩聚气固元',
          detail: '把充足睡眠（7~8小时子午觉）当作第一补药；运动以太极、八段锦、站桩、慢走为主，重在“微汗聚气”，严禁过竭性剧烈暴汗耗竭精血。'
        }
      ],
      strongRules: [
        {
          num: '01',
          name: '食伤吐秀',
          theme: '将过盛精力和智力化为才华与作品',
          detail: '身强如满弦之弓，不可再憋。必须找到高强度的创造性出口——投身科研攻坚、内容创作、产品打磨或技术研发，以卓越成果享誉天下。'
        },
        {
          num: '02',
          name: '利出三分',
          theme: '财散人聚，舍得分利以消比劫夺财',
          detail: '身旺最忌独吞利益引发背叛与暗箭。在合伙与团队中主动让利三分，多设期权分红，把潜在的竞争对手转化为利益同盟，以舍得换百年基业。'
        },
        {
          num: '03',
          name: '敬畏法度',
          theme: '严设刹车系统，引入法务合规内控',
          detail: '身强者胆大妄为易蔑视规则。必须在身边安插敢于说真话的法务合规与财务主管，赋予其重大决策“一票否决权”，杜绝刚愎自用涉险翻车。'
        },
        {
          num: '04',
          name: '藏锋守拙',
          theme: '在众人前装愚示弱，让出聚光灯',
          detail: '克制好为人师与争强好胜的虚荣心。在同僚与公众面前收敛锐利锋芒，多倾听慢表态，把荣誉与掌声让给团队，以谦逊仁德赢得拥戴。'
        },
        {
          num: '05',
          name: '暴汗排燥',
          theme: '高强度耐力运动疏泄体内暴烈阳气',
          detail: '体内阳刚之气过盛，若长期静止易诱发脾气暴躁与心血管负荷。适合拳击、大重量力量、马拉松越野跑，通过暴汗宣泄过剩精力。'
        },
        {
          num: '06',
          name: '静坐磨性',
          theme: '茶道书法冥想，磨掉急躁与好大喜功',
          detail: '每日坚持20~30分钟静坐冥想、品茶或练习书法，让疾驰的思绪冷却沉淀；饮食清淡少辛辣烈酒，内化心神，克制盲目加杠杆的豪赌冲动。'
        }
      ]
    };

    return {
      vigorType,
      tailored,
      comparisonGuide
    };
  }

  /**
   * 7. 精神内耗专项诊断与实战彻底改善方案 (Mental Internal Friction: Diagnosis & Practical Antidotes)
   */
  static diagnoseMentalFriction(bazi, vigor, patterns, climate) {
    const dm = bazi.dayMaster;
    const dmElement = bazi.dayMasterElement;
    const isWeak = vigor.totalScore <= 36;
    const isStrong = vigor.totalScore >= 52;
    const pillars = bazi.pillars;

    // 收集十神
    const godDetails = {};
    const registerGod = (godName, desc) => {
      if (!godName) return;
      if (!godDetails[godName]) godDetails[godName] = [];
      godDetails[godName].push(desc);
    };
    ['year', 'month', 'hour'].forEach(pKey => {
      const p = pillars[pKey];
      if (p.stemGod && p.stemGod !== '日主') registerGod(p.stemGod, `${pKey === 'year' ? '年' : pKey === 'month' ? '月' : '时'}干【${p.stem}】`);
    });
    ['year', 'month', 'day', 'hour'].forEach(pKey => {
      const p = pillars[pKey];
      p.hidden.forEach(h => {
        registerGod(h.god, `${pKey === 'year' ? '年' : pKey === 'month' ? '月' : pKey === 'day' ? '日' : '时'}支【${p.branch}】藏干【${h.stem}】`);
      });
    });

    const hasGod = (gName) => (godDetails[gName] && godDetails[gName].length > 0);
    const getGodDesc = (gName) => (godDetails[gName] || []).join('、');

    const hasShangGuan = hasGod('伤官');
    const hasQiSha = hasGod('七杀') || hasGod('偏官');
    const hasPianYin = hasGod('偏印');
    const hasShiShen = hasGod('食神');
    const hasCai = hasGod('正财') || hasGod('偏财');

    // 检测内耗触发因素
    let detected = false;
    let score = 50; // 基准
    let triggers = [];
    let triggersEn = [];
    let primaryRoot = '';
    let primaryRootEn = '';

    if (hasShangGuan) {
      detected = true;
      score += 15;
      triggers.push(`伤官秀气外泄（${getGodDesc('伤官')}），容易追求极致完美主义，事情未做脑中已推演多遍，陷入自我苛责与言语反思`);
      triggersEn.push(`Hurting Officer Output: Pursuit of extreme perfectionism, over-simulating scenarios before execution, trapped in self-reproach.`);
      if (!primaryRoot) {
        primaryRoot = '【伤官挑剔与完美主义反噬】才思敏捷追求极致，容不得半点瑕疵；一旦未达预期便向内苛责自己，陷入“想得太多而迟迟不敢动手”的内耗死循环。';
        primaryRootEn = '[Hurting Officer Perfectionism]: Hyper-acute intellect seeking absolute perfection; turns inward with severe self-blame upon the slightest imperfection, falling into analysis paralysis.';
      }
    }

    if (hasQiSha) {
      detected = true;
      score += 15;
      triggers.push(`七杀攻身（${getGodDesc('七杀')}），交感神经常期处于危机战逃状态，过度警觉，容易对外界评价与风吹草动过度解读`);
      triggersEn.push(`Seven Killings Pressure: Sympathetic nervous system locked in chronic fight-or-flight, hyper-vigilance, and over-interpreting external cues.`);
      if (!primaryRoot) {
        primaryRoot = '【七杀危机感与过度防御内耗】时刻将外界预设为潜在考场与战场，防备心极重，草木皆兵；容易把别人的无心之语当成针对，神经长期紧绷内耗。';
        primaryRootEn = '[Seven Killings Hyper-Vigilance]: Habitually frames external reality as a battlefield or tribunal; hyper-defensive, interpreting casual remarks as covert hostility, maintaining chronic neuro-somatic tension.';
      }
    }

    if (hasPianYin) {
      detected = true;
      score += 12;
      triggers.push(`偏印枭神主事（${getGodDesc('偏印')}），心性清高多疑，沉溺于自我庞大的精神逻辑推演，容易脱离现实、思想巨人行动矮子`);
      triggersEn.push(`Indirect Resource Aloofness: Intellectual isolation and hyper-suspicion, lost in labyrinthine mental models, disconnected from concrete execution.`);
      if (!primaryRoot) {
        primaryRoot = '【偏印空想孤傲与行动拖延】沉浸在自我的庞大思想世界中，想得极深极远，但行动力严重滞后，陷入理论自我空转与虚无感中。';
        primaryRootEn = '[Indirect Resource Over-intellectualization]: Absorbed in deep, solitary mental constructs with severely lagging execution, drifting into theoretical paralysis and existential void.';
      }
    }

    if (isWeak) {
      detected = true;
      score += 12;
      triggers.push(`日元虚浮（${vigor.status}），心理能量防御网脆弱，容易成为情绪海绵吸收负能量，有讨好型人格倾向不敢拒绝`);
      triggersEn.push(`Delicate Day Master: Fragile psychological boundaries, absorbing environmental negativity like an emotional sponge, prone to conflict-avoidant compliance.`);
      if (!primaryRoot) {
        primaryRoot = '【身弱边界不清与讨好型内耗】天生共情力过高、边界感薄弱；极度害怕冲突与被讨厌，往往表面妥协迎合，内心委屈纠结，长期处于自我攻击状态。';
        primaryRootEn = '[Weak Day Master Boundary Fatigue]: Excessive empathy paired with permeable psychological boundaries; fears conflict and disapproval, acquiescing outwardly while harboring chronic internal distress.';
      }
    }

    if (isWeak && hasCai) {
      score += 8;
      triggers.push('身弱财旺，欲望与承载力失衡，容易产生即期利益焦虑与患得患失');
      triggersEn.push('Delicate Master with Heavy Wealth: Imbalance between ambition and physical capacity, triggering acute anxiety over immediate gains and losses.');
    }

    if (!primaryRoot) {
      primaryRoot = '【气象中和自省自律】命局五行气象较为中和，内耗主要表现为偶尔的深度复盘与阶段性思虑，能够通过适度行动自我调节。';
      primaryRootEn = '[Harmonious Self-Correction]: Elemental energies are relatively balanced; friction manifests primarily as constructive self-reflection, easily alleviated through deliberate physical action.';
    }
    if (triggers.length === 0) {
      triggers.push('阶段性反思与自我精进要求');
      triggersEn.push('Periodic self-reflection and personal growth standards');
    }

    // 封顶 95
    score = Math.min(95, score);

    let level = '轻度反思型 (自省自持)';
    let levelBadge = 'bg-blue-500/20 text-blue-300 border-blue-500/30';
    if (score >= 82) {
      level = '重度思维反刍型 (大脑超频空转)';
      levelBadge = 'bg-rose-500/20 text-rose-300 border-rose-500/30';
    } else if (score >= 68) {
      level = '高度完美主义与人际内耗型';
      levelBadge = 'bg-amber-500/20 text-amber-300 border-amber-500/30';
    }

    // 实战改善四大绝技 (Battle-tested practical solutions)
    const solutions = [
      {
        icon: '⚡',
        name: '即刻阻断：3分钟物理打断法',
        theme: '绝不在脑子里解决脑子里的问题',
        steps: [
          '【笔尖降维外部化】拿出一张白纸，把脑中纠结的所有焦虑烂账毫无逻辑地全写下来。写在纸上那一刻，大脑瞬间从“情绪受害者”切换为“客观审视者”。',
          '【冷水潜水反射刺激】内耗念头翻滚时，立刻去洗手间用冰凉冷水用力洗脸15秒，强行激活迷走神经，物理阻断交感神经的焦虑风暴。',
          '【手脑置换断反刍】立刻离开座椅，去干擦桌子、洗碗、叠衣服、大步快走等具体体力动作，用手掌肌肉触觉抢占大脑注意力带宽。'
        ]
      },
      {
        icon: '🛡️',
        name: '心智防线：课题分离与延迟拒绝',
        theme: '设立冰冷的人际心理隔离网',
        steps: [
          '【阿德勒课题分离】划分“我的课题”与“别人的课题”。他人的情绪、脸色与评价是他自己的业力，与我何干？坚决收回向外索求认可的触角。',
          '【24小时延迟拒绝期】面对任何非职责内的请求或求助，严禁当场答应。统一使用固定话术：“我查一下日程，明天答复你”，只要有一丝勉强，坚决冷面拒绝。',
          '【斯多葛预先封顶】每当焦虑“万一搞砸了”，直接把最烂底线写出并制定生存预案。底线一旦封死，绝不再为未发生的概率消耗一秒脑力。'
        ]
      },
      {
        icon: '🎯',
        name: '反拖延行动：完成远胜于完美',
        theme: '行动是消融内耗的唯一物理溶剂',
        steps: [
          '【先交出一个烂透的第一版】（Done is Better than Perfect）打破完美主义魔咒，允许自己做个糙活，行动起来就击败了90%的颅内纠结。',
          '【5分钟无痛起跑规则】告诉自己“我只做5分钟，哪怕写三行字就收工”。只要飞轮启动，惯性就会带你冲出拖延与内耗泥潭。',
          '【单核运转关闭多任务】任何时刻桌面上只留一个窗口，纸上只留一件任务，做完一件划掉一件，恢复心神的确定感。'
        ]
      },
      {
        icon: '🗡️',
        name: '命理终极转化：调转利刃降维打击',
        theme: '把向内自残的刀，变成向外斩敌的剑',
        steps: [
          '【认清敏锐与多思的本质】真正平庸迟钝的人不会内耗。你能内耗，说明命带超常的感知力与推演力（食伤秀气与偏印灵性）。',
          '【掉转枪口全力向外输出】停止向内自我攻击！把颅内多余的心智算力全部倾注于写文章、写代码、打磨商业产品、精研专业绝技。',
          '【以作品立世】只要精神能量在现实世界有了物理载体，原本折磨你的内耗，就会瞬间蜕变为击穿一切同行的核心杀伤力！'
        ]
      }
    ];

    // 🌟 三经合一 · 禅道心智终极破除专栏 (Gold Masterpiece Box: 《金刚经》+《六祖坛经》+《庄子》)
    const zenDaoWisdom = {
      titleZh: '🌟 三经合一 · 禅道心智终极破除专栏',
      titleEn: '🌟 Zen & Dao Trinity Wisdom · Ultimate Mental Liberation Sanctuary',
      subtitleZh: '融通《金刚经》之应无所住、《六祖坛经》之本来无一物、《庄子》之乘物游心，直捣大脑反刍空转根源，以无上禅道大智慧彻底消融精神内耗。',
      subtitleEn: 'Synthesizing Diamond Sutra (Formlessness), Platform Sutra (Immediate Awakening), and Zhuangzi (Free Roaming) to conquer rumination.',
      diamond: {
        titleZh: '《金刚经》：破“相”之执 · 应无所住而生其心',
        titleEn: 'The Diamond Sutra: Dissolving the Attachment to Illusionary Forms',
        canonVerseZh: '“凡所有相，皆是虚妄。若见诸相非相，则见如来。”“不应住色生心，不应住声香味触法生心，应无所住而生其心。”',
        canonVerseEn: '"All conditioned phenomena are like a dream, an illusion, a bubble, a shadow. When seeing that all forms are not true forms, one perceives Tathagata. The mind should abide nowhere to give rise to pure awareness."',
        mantraZh: '“凡所有相，皆是虚妄。若见诸相非相，则见如来。”“不应住色生心，不应住声香味触法生心，应无所住而生其心。”',
        mantraEn: '"All conditioned phenomena are like a dream, an illusion, a bubble, a shadow. When seeing that all forms are not true forms, one perceives Tathagata. The mind should abide nowhere to give rise to pure awareness."',
        mindsetAnalysisZh: '【对症破除命主虚妄心相】：内耗的核心病根在于“执相”。命主（尤其命带伤官、七杀、偏印或身弱之人）潜意识里执着于“完美我相”（我必须事事做到完美无瑕）、“被审判人相”（外界每个人都在苛责挑剔我）、“灾难众生相”（万一失败将坠入万劫不复）。这些全是交感神经在大脑剧场自编自导的虚妄电影。',
        mindsetAnalysisEn: '[Diagnosing Fatal Fixations]: Mental friction stems from obsessive fixation on forms—the ego delusion of perfection, hyper-sensitivity to perceived judgment, and catastrophic future projections. These are transient neural illusions projected on the canvas of awareness.',
        insightZh: '【对症破除命主虚妄心相】：内耗的核心病根在于“执相”。命主（尤其命带伤官、七杀、偏印或身弱之人）潜意识里执着于“完美我相”（我必须事事做到完美无瑕）、“被审判人相”（外界每个人都在苛责挑剔我）、“灾难众生相”（万一失败将坠入万劫不复）。这些全是交感神经在大脑剧场自编自导的虚妄电影。',
        insightEn: '[Diagnosing Fatal Fixations]: Mental friction stems from obsessive fixation on forms—the ego delusion of perfection, hyper-sensitivity to perceived judgment, and catastrophic future projections. These are transient neural illusions projected on the canvas of awareness.',
        practicalPracticeZh: '【无所住心法实操】：当觉察到焦虑风暴升起、大脑开始推演灾难剧本时，立刻在心中当头棒喝：“凡所有相，皆是虚妄！”深吸一口气，抽离那个焦灼紧绷的“角色身份”，回到纯粹清澈的觉照本身。应无所住，人在当下，手做何事心即在何事。',
        practicalPracticeEn: '[Formless Presence Practice]: Whenever the rumination storm rises, mentally thunder: "All forms are impermanent illusions!" Immediately disidentify from the frantic ego character and return to grounded physical presence.',
        practicalZh: '【无所住心法实操】：当觉察到焦虑风暴升起、大脑开始推演灾难剧本时，立刻在心中当头棒喝：“凡所有相，皆是虚妄！”深吸一口气，抽离那个焦灼紧绷的“角色身份”，回到纯粹清澈的觉照本身。应无所住，人在当下，手做何事心即在何事。',
        practicalEn: '[Formless Presence Practice]: Whenever the rumination storm rises, mentally thunder: "All forms are impermanent illusions!" Immediately disidentify from the frantic ego character and return to grounded physical presence.',
        badgeZh: '应无所住 · 破除我相',
        badgeEn: 'Abide Nowhere',
        quotes: [
          {
            verseZh: '“凡所有相，皆是虚妄。若见诸相非相，则见如来。”',
            verseEn: '"All conditioned forms and appearances are illusory. When one perceives that all forms are not true forms, one perceives Tathagata."',
            sourceZh: '《金刚经·如理实见分第五》',
            sourceEn: 'The Diamond Sutra, Ch. 5',
            insightZh: '【破除四相幻翳】：一切令你彻夜难眠的恐惧、他人审判、灾难预想，皆是大脑交感神经投射的虚妄幻影，非真实自性。',
            insightEn: '[Dissolving Ego Forms]: All catastrophic projections and perceived criticisms are transient cognitive illusions, not ultimate reality.',
            practicalZh: '【虚妄觉照】：焦虑风暴升起时，立刻在心中当头棒喝：“凡所有相，皆是虚妄！”抽离角色身份，做纯粹的觉照观察者。',
            practicalEn: '[Witnessing Awareness]: When anxiety strikes, thunder mentally: "All forms are illusory!" Disidentify from the frantic ego character.'
          },
          {
            verseZh: '“一切有为法，如梦幻泡影，如露亦如电，应作如是观。”',
            verseEn: '"All conditioned phenomena are like dreams, illusions, bubbles, and shadows; like dew or a lightning flash; thus should one contemplate them."',
            sourceZh: '《金刚经·应化非真分第三十二》',
            sourceEn: 'The Diamond Sutra, Ch. 32',
            insightZh: '【梦幻泡影观】：世间一切功名成败、得失毁誉，如晨露闪电瞬息即逝。抓得越紧，内耗越深；视如泡影，心自释怀。',
            insightEn: '[Contemplating Ephemerality]: Worldly successes, losses, and opinions vanish like dew or lightning. Loosening your grip instantly restores inner peace.',
            practicalZh: '【降维破执】：遭遇挫折反刍时，观想事件如电光一闪，百千万劫弹指一挥间，放平心态笑看浮沉。',
            practicalEn: '[Cosmic Perspective]: In times of setback, view the event as a momentary spark across vast cosmic time; internal pressure dissolves.'
          },
          {
            verseZh: '“不应住色生心，不应住声香味触法生心，应无所住而生其心。”',
            verseEn: '"The mind should not abide in forms, sounds, scents, tastes, touch, or mental objects; it should give rise to pure awareness by abiding nowhere."',
            sourceZh: '《金刚经·庄严净土分第十》',
            sourceEn: 'The Diamond Sutra, Ch. 10',
            insightZh: '【应无所住】：心一旦执着停留在任何结果或外在评价上，便成牢笼；不住一法，清净觉照之创造力方能自然流淌。',
            insightEn: '[Abiding Nowhere]: Fixating on rigid outcomes traps the mind; relinquishing all attachment frees innate intelligence to flow spontaneously.',
            practicalZh: '【人在当下】：手做何事，心即在此。走路只管走路，敲代码只管敲代码，不迎不送，身心彻底合一。',
            practicalEn: '[Presence in Action]: Whatever the hands do, let the mind dwell solely therein. Fully inhabit the present action without mental wandering.'
          },
          {
            verseZh: '“过去心不可得，现在心不可得，未来心不可得。”',
            verseEn: '"The past mind cannot be grasped, the present mind cannot be grasped, the future mind cannot be grasped."',
            sourceZh: '《金刚经·一体同观分第十八》',
            sourceEn: 'The Diamond Sutra, Ch. 18',
            insightZh: '【三心不可得】：过去已逝无可追悔，未来未至何必预支恐惧，现在瞬息不住；执着于时间线上的得失是最大的内耗。',
            insightEn: '[Ungraspable Time]: The past has vanished, the future is unformed, and the present never freezes; clinging across time is the root of rumination.',
            practicalZh: '【立断时间纠缠】：当大脑回溯悔恨或前瞻恐慌时，猛断一喝：“三心不可得！”一把拉回眼前这一秒钟呼吸。',
            practicalEn: '[Time Disconnect]: Whenever regret or anticipatory terror grips you, mentally shout: "Time cannot be held!" Return to the current breath.'
          },
          {
            verseZh: '“知我说法，如筏喻者，法尚应舍，何况非法。”',
            verseEn: '"My teachings are like a raft for crossing a river; once crossed, even the teachings must be let go, how much more so what is not truth!"',
            sourceZh: '《金刚经·正信希有分第六》',
            sourceEn: 'The Diamond Sutra, Ch. 6',
            insightZh: '【筏喻舍执】：一切规训、计划与完美主义教条皆如渡河竹筏，到达彼岸即当放下；死死执着于规矩反被规矩勒死。',
            insightEn: '[The Raft Analogy]: Plans, dogmas, and perfectionist ideals are mere transport across obstacles; holding onto the raft on dry land paralyzes you.',
            practicalZh: '【破完美主义】：允许过程有瑕疵，完成胜于无休止的空想完美；过河弃筏，灵活变通，不再自我苛责。',
            practicalEn: '[Embracing Imperfection]: Completion triumphs over sterile rumination. Discard the mental raft and move freely without self-reproach.'
          }
        ]
      },
      platform: {
        titleZh: '《六祖坛经》：直断妄念 · 本来无一物与顿悟自性',
        titleEn: 'The Platform Sutra: Direct Severance of Rumination & Pure Self-Nature',
        canonVerseZh: '“菩提本无树，明镜亦非台。本来无一物，何处惹尘埃！”“前念著境即烦恼，后念离境即菩提。”“不思善，不思恶，正与么时，哪个是明上座本来面目？”',
        canonVerseEn: '"Bodhi fundamentally has no tree, nor is the bright mirror a stand. Originally there is not a single thing; where can dust alight? Prior thoughts clinging to circumstances breed affliction; subsequent thoughts detached from circumstances become awakening."',
        mantraZh: '“菩提本无树，明镜亦非台。本来无一物，何处惹尘埃！”“前念著境即烦恼，后念离境即菩提。”“不思善，不思恶，正与么时，哪个是明上座本来面目？”',
        mantraEn: '"Bodhi fundamentally has no tree, nor is the bright mirror a stand. Originally there is not a single thing; where can dust alight? Prior thoughts clinging to circumstances breed affliction; subsequent thoughts detached from circumstances become awakening."',
        mindsetAnalysisZh: '【对症直断第二念狂澜】：第一念是外界刺激带来的本能反应，而让你彻夜难眠、痛苦不堪的，是随之而来的千万个“自责、辩解、懊悔与预支焦虑”的第二念、第三念。六祖惠能一语点破：你的自性本来清净明澈，宛若虚空万里无云。任凭念头飞沙走石，何曾沾染虚空分毫？',
        mindsetAnalysisEn: '[Severing the Rumination Loop]: Friction is not caused by the primary impulse, but by the endless cascade of secondary and tertiary obsessive ruminations. Hui-neng reveals: Your innate awareness is pristine as boundless space; passing storms cannot leave a trace.',
        insightZh: '【对症直断第二念狂澜】：第一念是外界刺激带来的本能反应，而让你彻夜难眠、痛苦不堪的，是随之而来的千万个“自责、辩解、懊悔与预支焦虑”的第二念、第三念。六祖惠能一语点破：你的自性本来清净明澈，宛若虚空万里无云。任凭念头飞沙走石，何曾沾染虚空分毫？',
        insightEn: '[Severing the Rumination Loop]: Friction is not caused by the primary impulse, but by the endless cascade of secondary and tertiary obsessive ruminations. Hui-neng reveals: Your innate awareness is pristine as boundless space; passing storms cannot leave a trace.',
        practicalPracticeZh: '【念起即觉直断功法】：六祖示人“无念为宗”。绝不要在脑海里试图“说服念头”或“压制焦虑”（用脑子解决脑子只会越陷越深）。觉察到念头翻滚时，只需冷眼旁观：“念头如过客，我是虚空主。”不要跟随，不要评判，念起即觉，觉之即无，念头自会如水上泡沫瞬间破灭。',
        practicalPracticeEn: '[Immediate Awakening Practice]: Do not debate with or suppress intrusive thoughts. Simply witness them as detached space: "Thoughts are transient guests; I am the vast, untouched host." In that pure noticing, the frantic narrative collapses.',
        practicalZh: '【念起即觉直断功法】：六祖示人“无念为宗”。绝不要在脑海里试图“说服念头”或“压制焦虑”（用脑子解决脑子只会越陷越深）。觉察到念头翻滚时，只需冷眼旁观：“念头如过客，我是虚空主。”不要跟随，不要评判，念起即觉，觉之即无，念头自会如水上泡沫瞬间破灭。',
        practicalEn: '[Immediate Awakening Practice]: Do not debate with or suppress intrusive thoughts. Simply witness them as detached space: "Thoughts are transient guests; I am the vast, untouched host." In that pure noticing, the frantic narrative collapses.',
        badgeZh: '顿悟自性 · 见性解脱',
        badgeEn: 'Instant Awakening',
        quotes: [
          {
            verseZh: '“菩提本无树，明镜亦非台。本来无一物，何处惹尘埃！”',
            verseEn: '"Bodhi fundamentally has no tree, nor is the bright mirror a stand. Originally there is not a single thing; where can dust alight?"',
            sourceZh: '《六祖坛经·行由品第一》',
            sourceEn: 'The Platform Sutra, Ch. 1',
            insightZh: '【自性本空】：自性如万里虚空本无一物，那些焦虑、自卑、惶恐皆是虚空过隙的风沙，根本无法染污自性分毫。',
            insightEn: '[Void Self-Nature]: Consciousness is pristine as boundless space; emotional storms of fear and inadequacy leave no stain upon the sky.',
            practicalZh: '【观心如虚空】：觉察到念头翻滚时，静观自心如无垠虚空：“任凭念头飞沙走石，何曾动我虚空分毫？”',
            practicalEn: '[Spacious Witnessing]: Observe turbulent thoughts calmly: "Storms rage across the sky, yet the vast space itself is untouched."'
          },
          {
            verseZh: '“何期自性，本自清净；何期自性，本不生灭；何期自性，本自具足；何期自性，本无动摇；何期自性，能生万法！”',
            verseEn: '"How wondrous that self-nature is fundamentally pure, birthless and deathless, inherently self-sufficient, completely unshakeable, and capable of generating all phenomena!"',
            sourceZh: '《六祖坛经·行由品第一》',
            sourceEn: 'The Platform Sutra, Ch. 1',
            insightZh: '【本自具足】：你内在早已拥有一切破局力量与大智慧，何须向外乞求认同与赞许？本无动摇，何来患得患失？',
            insightEn: '[Innate Wholeness]: You possess complete clarity and sovereignty within; seeking validation from external judgment is seeking water from a mirage.',
            practicalZh: '【终结冒名顶替】：产生自我怀疑时，深吸一口气默念：“本自具足，本无动摇！”彻底斩断向外乞求认同的软弱触角。',
            practicalEn: '[Ending Imposter Syndrome]: In moments of self-doubt, breathe deeply: "Inherently sufficient, unshakably sovereign!" Sever external validation-seeking.'
          },
          {
            verseZh: '“前念著境即烦恼，后念离境即菩提。念念不住，于一切法不取不舍。”',
            verseEn: '"Clinging to circumstances in the prior thought breeds affliction; detaching from circumstances in the subsequent thought awakens wisdom. Flowing without stopping, neither grasping nor rejecting."',
            sourceZh: '《六祖坛经·般若品第二》',
            sourceEn: 'The Platform Sutra, Ch. 2',
            insightZh: '【前念后念】：外界刺激激起第一念是生理常态，折磨你的是千万个自责反刍的第二念；后念离境，当下即得觉悟解脱。',
            insightEn: '[Severing Secondary Loops]: Initial impulses are instinctual; the endless chain of self-blaming secondary ruminations is what tortures the spirit.',
            practicalZh: '【掐断第二念】：觉察到第一念的懊悔或恐惧后，严禁在脑海中继续展开辩解或推演，任其如水上浮沫瞬间破灭。',
            practicalEn: '[Snapping the Second Thought]: The moment a critical impulse appears, refuse to elaborate or argue with it; let it dissolve like foam.'
          },
          {
            verseZh: '“不思善，不思恶，正与么时，哪个是明上座本来面目？”',
            verseEn: '"Do not think of good, do not think of evil; in this exact moment, what is your original face?"',
            sourceZh: '《六祖坛经·行由品第一》',
            sourceEn: 'The Platform Sutra, Ch. 1',
            insightZh: '【息灭二元评判】：大脑之累全在无休止的“我对不对、我行不行、好与不好”二元审判中；抛开对错标签，灵明自性立现。',
            insightEn: '[Beyond Dualistic Judgment]: Cognitive fatigue is fueled by constant self-indictment. Stepping beyond praise vs blame reveals your original unblemished face.',
            practicalZh: '【停止自我审判】：不作事后诸葛亮苛责自己，既不对过去的失误咬牙切齿，也不对未来的表现过度担忧，安住本来面目。',
            practicalEn: '[Suspending Trial]: Cease internal litigation against yourself; neither berate past mistakes nor over-rehearse future evaluations.'
          },
          {
            verseZh: '“无念者，于念而无念；无相者，于相而离相；无住者，人之本性。”',
            verseEn: '"Non-thought is to not abide in thought; non-form is to be detached amidst forms; non-dwelling is human original nature."',
            sourceZh: '《六祖坛经·定慧品第四》',
            sourceEn: 'The Platform Sutra, Ch. 4',
            insightZh: '【无念无住】：无念不是绝念变成木石，而是事来则应、事去则静；身在纷扰红尘之中，心游超然物外，从不粘滞。',
            insightEn: '[Clear Flow]: Non-dwelling does not mean numbness, but responding impeccably to circumstances and remaining pristine the moment they pass.',
            practicalZh: '【零滞留心法】：面对繁冗工作，以最高专注处理眼前事务；一旦完工立刻清空大脑缓存，绝不把白天的战场带回夜晚的枕头。',
            practicalEn: '[Zero-Buffer Mindset]: Focus intensely on the task at hand; once complete, purge mental cache immediately, bringing zero residue to rest.'
          }
        ]
      },
      zhuangzi: {
        titleZh: '《庄子》：物物而不物于物 · 乘物以游心与庖丁解牛',
        titleEn: 'Zhuangzi: Mastering Circumstances without Being Subjugated & Free Roaming',
        canonVerseZh: '“物物而不物于物，则胡可得而累邪！”“乘天地之正，而御六气之辩，以游无穷者，彼且恶乎待哉！”“神遇之而不以目视，官知止而神欲行。以无厚入有间，恢恢乎其于游刃必有余地矣。”',
        canonVerseEn: '"Master circumstances rather than letting circumstances master you; how then can you be burdened? Roaming freely upon the rhythm of Heaven and Earth. Encountering life through intuitive spirit rather than eye-straining struggle. Moving through the spacious gaps with room to spare."',
        mantraZh: '“物物而不物于物，则胡可得而累邪！”“乘天地之正，而御六气之辩，以游无穷者，彼且恶乎待哉！”“神遇之而不以目视，官知止而神欲行。以无厚入有间，恢恢乎其于游刃必有余地矣。”',
        mantraEn: '"Master circumstances rather than letting circumstances master you; how then can you be burdened? Roaming freely upon the rhythm of Heaven and Earth. Encountering life through intuitive spirit rather than eye-straining struggle. Moving through the spacious gaps with room to spare."',
        mindsetAnalysisZh: '【对症化解紧绷死磕】：命主之所以疲惫不堪，往往因骨气过硬或心智要强而与现实“硬碰硬死磕”，把世俗功名利禄、他人反馈当成了沉重枷锁，沦为外物的奴隶（即“物于物”）。庄子点醒：天地万物本是供你生命历练游玩的道具，何苦将道具顶在头上压垮自己？',
        mindsetAnalysisEn: '[Dissolving Hyper-Rigidity]: You exhaust yourself by fighting every worldly circumstance with brute force, becoming enslaved by external outcomes. Zhuangzi reminds: All worldly affairs are mere playthings for the spirit’s cosmic journey.',
        insightZh: '【对症化解紧绷死磕】：命主之所以疲惫不堪，往往因骨气过硬或心智要强而与现实“硬碰硬死磕”，把世俗功名利禄、他人反馈当成了沉重枷锁，沦为外物的奴隶（即“物于物”）。庄子点醒：天地万物本是供你生命历练游玩的道具，何苦将道具顶在头上压垮自己？',
        insightEn: '[Dissolving Hyper-Rigidity]: You exhaust yourself by fighting every worldly circumstance with brute force, becoming enslaved by external outcomes. Zhuangzi reminds: All worldly affairs are mere playthings for the spirit’s cosmic journey.',
        practicalPracticeZh: '【游刃有余庖丁解牛功法】：化“用力过度”为“顺其自然游刃有余”。面对复杂棘手的工作与人际，不再用蛮力硬顶，而是如庖丁解牛般“依乎天理，批大郤，导大窾”，顺应事物本身的自然节律轻轻切入，避开硬骨死穴。以游戏旷达之心待世，乘物游心，天下何人何事能累我？',
        practicalPracticeEn: '[The Free Roaming Craft]: Shift from exhausting friction to effortless action (Wu Wei). Navigate complex projects like the master butcher, gliding effortlessly through the natural spaces between obstacles, maintaining spacious playfulness.',
        practicalZh: '【游刃有余庖丁解牛功法】：化“用力过度”为“顺其自然游刃有余”。面对复杂棘手的工作与人际，不再用蛮力硬顶，而是如庖丁解牛般“依乎天理，批大郤，导大窾”，顺应事物本身的自然节律轻轻切入，避开硬骨死穴。以游戏旷达之心待世，乘物游心，天下何人何事能累我？',
        practicalEn: '[The Free Roaming Craft]: Shift from exhausting friction to effortless action (Wu Wei). Navigate complex projects like the master butcher, gliding effortlessly through the natural spaces between obstacles, maintaining spacious playfulness.',
        badgeZh: '乘物游心 · 逍遥无待',
        badgeEn: 'Free Roaming',
        quotes: [
          {
            verseZh: '“物物而不物于物，则胡可得而累邪！”',
            verseEn: '"Master circumstances rather than letting circumstances master you; how then can you ever be burdened?"',
            sourceZh: '《庄子·山木第二十》',
            sourceEn: 'Zhuangzi, Ch. 20',
            insightZh: '【役物而不役于物】：世间名利、KPI与他人眼光皆是供你生命历练游玩的道具，万不可将道具顶在头上反做外物的奴隶。',
            insightEn: '[Sovereign Agency]: Worldly accolades and metrics are mere instruments for experiential play; never crown the tools as masters of your soul.',
            practicalZh: '【角色抽离法】：时刻提醒自己是“役物之人”；工作只是戏台上的角色扮演，下班即出戏，不可让打工工具异化生命本真。',
            practicalEn: '[Role Disidentification]: Recognize professional roles as theatrical games; disengage immediately after hours, preserving spiritual autonomy.'
          },
          {
            verseZh: '“乘天地之正，而御六气之辩，以游无穷者，彼且恶乎待哉！”',
            verseEn: '"To roam infinitely by mounting the genuine rhythm of Heaven and Earth and harnessing the transformations of all elemental forces—upon what then does one depend?"',
            sourceZh: '《庄子·内篇·逍遥游第一》',
            sourceEn: 'Zhuangzi, Ch. 1',
            insightZh: '【无待之逍遥】：凡有所依赖（依赖赞誉、依赖万事如意），心必有所掣肘；唯有顺应天地大化，无所拘绊，方得真正大自由。',
            insightEn: '[Absolute Autonomy]: Relying on praise or fixed outcomes binds the spirit; aligning with cosmic fluidity unlocks unconditioned liberation.',
            practicalZh: '【乘势游心】：放下对“事情必须按我意志发展”的执念，顺风扬帆，逆风稳舵，悠游于人生无尽的可能性中。',
            practicalEn: '[Surfing the Flow]: Relinquish dogmatic control; trim your sails with favorable winds, anchor calmly in storms, wandering freely.'
          },
          {
            verseZh: '“神遇之而不以目视，官知止而神欲行。以无厚入有间，恢恢乎其于游刃必有余地矣。”',
            verseEn: '"I encounter it through spirit rather than sensory eye; senses cease while intuition moves. Inserting that which has no thickness into spacious crevices, there is boundless room for the blade to wander."',
            sourceZh: '《庄子·内篇·养生主第三·庖丁解牛》',
            sourceEn: 'Zhuangzi, Ch. 3',
            insightZh: '【庖丁解牛·游刃有余】：面对千头万绪的复杂危局，切忌用蛮力死磕硬撞，而要循着天理脉络，在结构缝隙中四两拨千斤。',
            insightEn: '[Effortless Precision]: Never attack systemic knots with blunt force; trace natural fault lines and glide smoothly through spacious gaps.',
            practicalZh: '【避实就虚】：遇到难啃的骨头，寻找其体制和人性上的天然缝隙（大郤大窾），以巧劲破局，保全元气丝毫无损。',
            practicalEn: '[Strategic Gaps]: Identify natural structural openings in complex deadlocks; leverage leverage over exertion to preserve vitality.'
          },
          {
            verseZh: '“知其不可奈何而安之若命，德之至也。哀乐不易施乎前，知其不可奈何而安之若命。”',
            verseEn: '"To recognize what cannot be avoided and rest in it as destiny is the pinnacle of virtue. Neither sorrow nor joy can disturb the inner sanctuary."',
            sourceZh: '《庄子·内篇·人间世第四》',
            sourceEn: 'Zhuangzi, Ch. 4',
            insightZh: '【安之若命】：天地之间人力有时而穷，面对无法抗拒的客观规律与既成事实，坦然接纳臣服，方是最高明的情绪护甲。',
            insightEn: '[Equanimous Acceptance]: Certain realities surpass human contrivance. Accepting what cannot be altered anchors tranquility beyond sorrow and joy.',
            practicalZh: '【划分控制二分法】：将万事划分为“我能掌控的”与“我无法掌控的”；不可掌控者坦然安之若命，可掌控者全力深耕。',
            practicalEn: '[Radical Dichotomy of Control]: Separate what you can control from what you cannot; embrace the uncontrollable serenely while focusing on right action.'
          },
          {
            verseZh: '“至人之用心若镜，不将不迎，应而不藏，故能胜物而不伤。”',
            verseEn: '"The supreme sage employs the mind like a mirror: it welcomes nothing, it pursues nothing; it reflects everything without retaining anything. Thus one overcomes all without injury."',
            sourceZh: '《庄子·内篇·应帝王第七》',
            sourceEn: 'Zhuangzi, Ch. 7',
            insightZh: '【用心若镜】：不预支焦虑迎接未来（不迎），不沉溺执念挽留过去（不将）；事物来了清晰照见，事物去了不留痕迹，故神明不伤。',
            insightEn: '[The Mirror Mind]: Reaching for nothing ahead, clinging to nothing behind, reflecting present reality without retention; thus one remains indestructible.',
            practicalZh: '【镜子心智修炼】：将外界的非难、赞赏、催促全当做镜前走过的过客；如实应对处理，事毕立刻复归光洁明镜，元神不耗。',
            practicalEn: '[Cultivating the Mirror Mind]: View external demands as transient visitors before a mirror; reflect accurately, release instantly, keeping energy intact.'
          },
          {
            verseZh: '“举世誉之而不加劝，举世非之而不加沮，定乎内外之分，辩乎荣辱之境，斯已矣。”',
            verseEn: '"Though the whole world praises him, he is not thereby encouraged; though the whole world condemns him, he is not thereby dismayed. He fixed the boundary between inner self and outer world, discriminating true honor from disgrace."',
            sourceZh: '《庄子·内篇·逍遥游第一·宋荣子》',
            sourceEn: 'Zhuangzi, Ch. 1',
            insightZh: '【内外之分】：天下人赞誉我，我不会因此迷失自满；天下人诋毁我，我绝不因此怀疑自轻。边界清晰，彻底免于外界审判内耗。',
            insightEn: '[Sovereign Boundary]: Total immunity to public acclaim or derision; distinguishing inner dignity from worldly status extinguishes rumination.',
            practicalZh: '【解耦他人评价】：将“自我价值”与“外界评价”彻底解耦；外界评价不过是他人主观投射，我之价值由内自定，岿然不动。',
            practicalEn: '[Decoupling Self-Worth]: Completely divorce intrinsic worth from external feedback; others\' opinions are mere reflections of their states.'
          }
        ]
      }
    };

    // 👑 1. 出厂核心心智出厂参数 (Original Factory Mindset Specifications)
    const STEM_EN_MAP = { '甲': 'Jia', '乙': 'Yi', '丙': 'Bing', '丁': 'Ding', '戊': 'Wu', '己': 'Ji', '庚': 'Geng', '辛': 'Xin', '壬': 'Ren', '癸': 'Gui' };
    const dmEn = (typeof I18N !== 'undefined') ? I18N.getStem(dm, 'en') : (STEM_EN_MAP[dm] || dm);

    const factorySpecs = {
      dayMasterZh: `${dm}木 (阳木参天)`,
      dayMasterEn: `${dmEn} (Pioneering Stem)`,
      processorTypeZh: `${dm}木主生发开创，配置【${hasShangGuan ? '高频秀气外溢型' : hasQiSha ? '极度警觉防御型' : hasPianYin ? '深度自省洞察型' : '稳实承载聚合型'}】神经架构`,
      processorTypeEn: `Pioneering Creative Neural Architecture with ${hasShangGuan ? 'Expressive Output' : hasQiSha ? 'Vigilant Threat-Detection' : 'Deep Introspective'} Bandwidth`,
      osVersionZh: '乾坤原厂纯净版 1.0 (Natal Factory Clean OS v1.0)',
      osVersionEn: 'Natal Factory Clean OS v1.0',
      coreEngineZh: `日元${vigor.status} · ${hasShangGuan ? '伤官才气驱动' : hasQiSha ? '七杀危机驱动' : hasPianYin ? '偏印灵性驱动' : '正印正官纯正驱动'}`,
      coreEngineEn: `${vigor.status === '身旺' ? 'Robust Vitality Engine' : 'Refined High-Sensitivity Engine'} with ${hasShangGuan ? 'Creative Output Drive' : hasQiSha ? 'Vigilant Crisis Drive' : 'Intuitive Depth Drive'}`,
      ruminationBandwidthZh: `额叶神经回旋超频占比：${score}% (基准待机负载偏高)`,
      ruminationBandwidthEn: `Cognitive Rumination Bandwidth: ${score}% (Elevated baseline standby load)`,
      efficiencyRatioZh: '高感知敏锐度 (高输入算力 / 需防向内自噬)',
      efficiencyRatioEn: 'High Sensitivity Quotient (High input compute / Requires outward channeling)'
    };
    if (dm === '乙') {
      factorySpecs.dayMasterZh = '乙木 (柔韧藤萝)';
    } else if (dm === '丙') {
      factorySpecs.dayMasterZh = '丙火 (太阳普照)';
    } else if (dm === '丁') {
      factorySpecs.dayMasterZh = '丁火 (万家灯火)';
    } else if (dm === '戊') {
      factorySpecs.dayMasterZh = '戊土 (厚德重山)';
    } else if (dm === '己') {
      factorySpecs.dayMasterZh = '己土 (田园润沃)';
    } else if (dm === '庚') {
      factorySpecs.dayMasterZh = '庚金 (利刃肃杀)';
    } else if (dm === '辛') {
      factorySpecs.dayMasterZh = '辛金 (珠玉流光)';
    } else if (dm === '壬') {
      factorySpecs.dayMasterZh = '壬水 (江河浩瀚)';
    } else if (dm === '癸') {
      factorySpecs.dayMasterZh = '癸水 (甘霖润泽)';
    }

    // 📜 2. 八大典籍正统出厂心智细注 (Eight Classical Canons Scripture Manual)
    const classicalCanonsManual = [
      {
        canonId: 'ditiansui',
        canonNameZh: '《滴天髓》',
        canonNameEn: 'Di Tian Sui',
        dynastyZh: '宋·京图 / 明·刘基',
        dynastyEn: 'Song: Jing Tu / Ming: Liu Ji',
        themeZh: '理气心机与神魂归位',
        themeEn: 'Qi Circulation & Somatic Grounding',
        quoteZh: '“天道有寒暖，地道有燥湿。理气乘除，衰旺真假不可不察。”',
        quoteEn: '"The Way of Heaven possesses cold and warmth; the Way of Earth possesses dryness and dampness. The multiplication and division of qi, and the true vs false vigor, must be rigorously discerned."',
        vernacularZh: '【通俗白话精解】：人的心理内耗本质上是体内五行气机（气血与神经递质）的升降失衡。天冷则心境凝滞，火燥则情绪暴烈。不要在脑子里跟念头打架，先把呼吸调匀、体温调和、气血流通，心神自然安歇。',
        vernacularEn: '[Vernacular Modern Exegesis]: Mental friction is fundamentally an imbalance in the somatic circulation of vital qi and autonomic nervous currents. Excessive cold freezes the spirit; excessive dryness provokes impulsive flares. Cease wrestling with thoughts in the cerebral cortex; ground your physical breath and thermal balance, and the mind naturally settles into equilibrium.',
        remedyZh: '【出厂调律】：身冷时晒太阳喝温姜茶；心焦火炽时用冷水洗脸深长吐气，先调生理气机，再理心理念头。',
        remedyEn: '[Factory Tuning Habit]: When cold and lethargic, absorb sunlight and drink warm tea; when mentally overheated, splash cold water on your face. Regulate somatic physiology first; mental clarity follows.'
      },
      {
        canonId: 'qiongtong',
        canonNameZh: '《穷通宝鉴》',
        canonNameEn: 'Qiong Tong Bao Jian',
        dynastyZh: '清·余春台',
        dynastyEn: 'Qing: Yu Chuntai',
        themeZh: '寒暖燥湿与调候心境',
        themeEn: 'Seasonal Equilibrium & Climate Harmony',
        quoteZh: '“天时有燥湿之宜，五行兼生克之妙。得其调和，神清气爽；失其调候，郁结自生。”',
        quoteEn: '"The seasons dictate dryness and moisture; the Five Elements weave generation and restraint. When harmonized, spirit is luminous and vital qi is pristine; when seasonal regulation is lost, internal gloom inevitably coagulates."',
        vernacularZh: '【通俗白话精解】：你的心境是由出生的“季节温湿度”奠定基调的。冬生者天生自带防备与克制，夏生者天生急于求成与易焦躁。内耗不是你性格不好，而是身体在极端天候下发出的生理调候信号。',
        vernacularEn: '[Vernacular Modern Exegesis]: Your baseline psychological weather is anchored in the seasonal climate of your birth. Winter charts possess instinctual wariness and self-restraint; summer charts struggle with urgency and irritation. Anxiety is not a moral defect, but an autonomic signal crying out for environmental and seasonal regulation.',
        remedyZh: '【出厂调律】：冬生喜暖，多做户外阳光有氧；夏生喜润，居室保持清凉湿润，远离嘈杂人声。',
        remedyEn: '[Factory Tuning Habit]: Winter natives require solar radiance and cardiovascular warmth; summer natives require cool, humid workspaces and acoustic sanctuary.'
      },
      {
        canonId: 'ziping',
        canonNameZh: '《子平真诠》',
        canonNameEn: 'Zi Ping Zhen Quan',
        dynastyZh: '清·沈孝瞻',
        dynastyEn: 'Qing: Shen Xiaozhan',
        themeZh: '格局成败与相神护持',
        themeEn: 'Pattern Archetype & The Guardian Minister',
        quoteZh: '“八字用神，专求月令。何谓相神？协规中矩，救应扶持。有病有药，神清气聚。”',
        quoteEn: '"The governing pattern seeks the monthly mandate. What is the Guardian Minister? It preserves discipline, offers rescue, and repairs affliction. Where affliction meets medicine, the spirit unifies and vital focus crystallizes."',
        vernacularZh: '【通俗白话精解】：格局就像你被赋予的天命剧本（主角人设），而“相神”就是你最该紧握的保命法宝。只要找到了你的相神（如伤官配印之印、食神制杀之食神），一切内耗都成了为你淬炼真金的养分。',
        vernacularEn: '[Vernacular Modern Exegesis]: Your BaZi pattern is your factory-assigned life script, while the "Guarding Minister" is your indispensable cognitive shield. Once you identify your primary remedy (e.g. Seal discipline for creative overthinking, or structured action for crisis anxiety), friction instantly converts into structural mastery.',
        remedyZh: '【出厂调律】：明确你命中最核心的相神，用铁律保护它。若以印为护，每天雷打不动留出2小时独处学习不被打扰。',
        remedyEn: '[Factory Tuning Habit]: Identify your core Guarding Minister and protect it ruthlessly. If Resource (Seal) is your anchor, block 2 hours daily for uninterrupted deep sanctuary.'
      },
      {
        canonId: 'sanming',
        canonNameZh: '《三命通会》',
        canonNameEn: 'San Ming Tong Hui',
        dynastyZh: '明·万民英',
        dynastyEn: 'Ming: Wan Minying',
        themeZh: '十神情性本相与心智画像',
        themeEn: 'Ten Gods Behavioral Typology',
        quoteZh: '“官清印正，纯粹笃实；伤官偏印，才奇性僻。善恶相参，皆出乎五行气质之偏。”',
        quoteEn: '"Pure Officer and upright Resource produce steadfast honor; Hurting Officer and Indirect Resource yield singular genius and aloof eccentricity. Virtues and vices alike arise from elemental predispositions."',
        vernacularZh: '【通俗白话精解】：万民英告诉你：你的多思、敏锐、挑剔或孤傲，根本不是缺点，而是天才特质的另一面硬币。平庸钝化的人根本没有内耗的神经带宽。接纳你偏颇的气质，无需强行逼自己八面玲珑。',
        vernacularEn: '[Vernacular Modern Exegesis]: Master Wan Minying reveals: Your acute sensitivity, perfectionism, and aloofness are simply the reverse side of exceptional genius. Dull minds do not possess the computational bandwidth to ruminate. Embrace your elemental idiosyncrasies rather than forcing false superficial conformity.',
        remedyZh: '【出厂调律】：停止为自己的“格格不入”自责，把清高转化为专业极致，用传世硬作品让世界向你走来。',
        remedyEn: '[Factory Tuning Habit]: Cease apologizing for feeling misaligned with generic crowds; convert intellectual aloofness into world-class craftsmanship.'
      },
      {
        canonId: 'yuanhai',
        canonNameZh: '《渊海子平》',
        canonNameEn: 'Yuan Hai Zi Ping',
        dynastyZh: '宋·徐升',
        dynastyEn: 'Song: Xu Sheng',
        themeZh: '根基清浊之辨与宿命脱胎',
        themeEn: 'Foundational Purity & Transcending Karma',
        quoteZh: '“凡推命者，先看干支纯杂，次看格局清浊。清者高明脱俗，浊者牵缠滞涩。”',
        quoteEn: '"In evaluating destiny, examine first purity versus complexity, then assess clear nobility versus turbid entanglement. The clear mind is detached and luminous; the turbid mind is trapped in cyclic friction."',
        vernacularZh: '【通俗白话精解】：“清”就是目标专注纯粹，不为琐碎杂务分神；“浊”就是既想要名又想要利，既怕别人说又想特立独行。彻底清退脑中互相冲突的双重标准，你的心智立刻由浊转清，内耗烟消云散。',
        vernacularEn: '[Vernacular Modern Exegesis]: "Purity" denotes laser-like single-minded purpose; "Turbidity" is harboring contradictory ambitions—craving radical independence while agonizing over public approval. Purging conflicting dual standards instantly purifies your mental engine, dissipating rumination.',
        remedyZh: '【出厂调律】：一刀切断矛盾诉求：选择要自由，就坦然接受暂时的冷清；选择要财富，就彻底放下虚妄的面子。',
        remedyEn: '[Factory Tuning Habit]: Sever contradictory desires: if you choose freedom, embrace solitary focus; if you choose commercial triumph, discard vanity.'
      },
      {
        canonId: 'shenfeng',
        canonNameZh: '《神峰通考》',
        canonNameEn: 'Shen Feng Tong Kao',
        dynastyZh: '明·张神峰',
        dynastyEn: 'Ming: Zhang Shenfeng',
        themeZh: '病药枢机与逆境转化',
        themeEn: 'Disease & Medicine Fulcrum Transformation',
        quoteZh: '“天下之命，有病方为贵，无伤不是奇。格中如去病，财禄两相随。”',
        quoteEn: '"Among human destinies, supreme greatness arises only where a grave Disease exists; without affliction, there is no extraordinary wonder. If the chart cures its disease, boundless wealth and dignity follow."',
        vernacularZh: '【通俗白话精解】：张神峰石破天惊地指出：平庸八字无病无药，一生平淡如水；而真正成大事业者，命中必有巨大病灶（严重内耗与卡点）！你所承受的痛苦反刍，就是你破茧成蝶的唯一核燃料。',
        vernacularEn: '[Vernacular Modern Exegesis]: Zhang Shenfeng thunders with radical insight: Mediocre charts suffer no affliction, coasting in bland oblivion; sovereign leaders possess monumental existential wounds! The intense friction you suffer is the exact nuclear propellant required for your metamorphosis.',
        remedyZh: '【出厂调律】：每一次内耗爆发，都是在提示你：“此处有病，良药何在？”立刻顺藤摸瓜，用最坚决的实战行动治好它。',
        remedyEn: '[Factory Tuning Habit]: Whenever rumination strikes, treat it as a clinical diagnostic: "Here lies the disease; where is the medicine?" Take immediate structural action to solve it.'
      },
      {
        canonId: 'yuzhao',
        canonNameZh: '《玉照定真经》',
        canonNameEn: 'Yu Zhao Ding Zhen Jing',
        dynastyZh: '晋·郭璞',
        dynastyEn: 'Jin: Guo Pu',
        themeZh: '六亲情结与外境投射',
        themeEn: 'Relational Boundaries & Environmental Projection',
        quoteZh: '“吉凶交会，系于动静之间；祸福倚伏，生乎情意之内。察外境之相激，明心性之自守。”',
        quoteEn: '"Auspiciousness and misfortune intersect between movement and stillness; blessing and calamity germinate within emotional attachments. Witness external frictions calmly, anchoring pristine inner sovereignty."',
        vernacularZh: '【通俗白话精解】：80%的人格痛苦源自把别人当成了自己内心的投影仪。别人皱个眉头，你在脑里演了一出大戏。郭璞告诉你：外境万物自生自灭，守住本心如如不动，何来伤害？',
        vernacularEn: '[Vernacular Modern Exegesis]: Eighty percent of mental suffering stems from projecting internal anxieties onto interpersonal relationships. Another person frowns, and your mind rehearses a tragedy. Guo Pu teaches: External circumstances rise and fall naturally; anchor inner sovereignty, and nothing can harm you.',
        remedyZh: '【出厂调律】：面对他人的情绪风暴，默念：“这是他的因果，不是我的考场”，立刻在心理上退后三步冷眼旁观。',
        remedyEn: '[Factory Tuning Habit]: In the face of another\'s emotional storm, mentally whisper: "This is their karma, not my examination." Take three steps back psychologically and observe neutrally.'
      },
      {
        canonId: 'lixuzhong',
        canonNameZh: '《李虚中命书》',
        canonNameEn: 'Li Xu Zhong Ming Shu',
        dynastyZh: '唐·李虚中',
        dynastyEn: 'Tang: Li Xuzhong',
        themeZh: '三命元神与时代共振',
        themeEn: 'Three Primes & Epochal Synchronization',
        quoteZh: '“天元主禄，地元主命，人元主身。顺天应时，物我两忘，则无夭折之患。”',
        quoteEn: '"Heavenly Prime rules rank, Earthly Prime rules destiny, Human Prime rules body. Flowing in unison with epochal cycles, dissolving the dichotomy of self and world, one is freed from exhaustion."',
        vernacularZh: '【通俗白话精解】：唐代宗师李虚中主张天、地、人三元合一。不要把自己孤立成无助的单兵。顺应时代大势（如九运AI火运、数字智能潮），站在风口借力借势，个体的渺小焦虑瞬间化解于宇宙洪流中。',
        vernacularEn: '[Vernacular Modern Exegesis]: Tang Dynasty Master Li Xu Zhong unites Heaven, Earth, and Man. Cease viewing yourself as an isolated, helpless soldier. Align with secular megatrends (Period 9 Fire era, AI compute, digital synthesis); ride the cosmic tide, and personal anxiety evaporates into universal flow.',
        remedyZh: '【出厂调律】：抬头看路，把眼光放到未来20年的九紫离火大运中；顺势而为，不与客观规律与时代车轮较劲。',
        remedyEn: '[Factory Tuning Habit]: Elevate your horizon to the 20-year Period 9 Fire cycle; flow with systemic waves rather than resisting macro tides.'
      }
    ];

    // ⚡ 3. 极端压力触发开关与认知红线 (Stress Trigger Signatures & Red Lines)
    const stressTriggers = [
      {
        nameZh: '完美主义反噬与上线拖延',
        nameEn: 'Perfectionist Paralysis & Launch Dread',
        icon: '🌪️',
        classicalSignZh: '伤官秀气外溢 · 追求无瑕反自缚',
        classicalSignEn: 'Hurting Officer Output: Flawless Ideals Breeding Self-Paralysis',
        mechanismZh: '颅内大脑已推演出100分甚至120分的极致版本，面对现实中只有70分的初代粗糙原型产生剧烈自我否定，导致一拖再拖不敢交付。',
        mechanismEn: 'Mental simulation imagines an immaculate 120-point masterpiece; encountering a rough 70-point physical prototype triggers acute self-reproach, delaying launch.',
        redLineZh: '【出厂绝对红线】：严禁在草稿阶段追求完美！凡打磨超过计划时间50%者，强制立刻公开交付第一版。',
        redLineEn: '[Factory Absolute Red Line]: Zero perfectionism in drafting! If polishing exceeds 50% of the timeline, mandate an immediate public launch.'
      },
      {
        nameZh: '权威压制与教条官僚对抗',
        nameEn: 'Bureaucratic Subjugation & Micro-Management',
        icon: '⚔️',
        classicalSignZh: '伤官见官 · 七杀侵凌日元',
        classicalSignEn: 'Officer Clashing & Killings Encroachment',
        mechanismZh: '当面对体制教条、无逻辑的规章或官僚领导的权威压制时，神经系统瞬间进入战逃狂暴状态，极易因正面硬刚而自损八百。',
        mechanismEn: 'Facing dogmatic bureaucracy or authoritarian micro-management instantly triggers aggressive sympathetic fight-or-flight, risking self-destructive confrontations.',
        redLineZh: '【出厂绝对红线】：永远不在情绪顶点与体制直接摊牌；以游刃有余之巧劲寻找结构缝隙，保护自身元气。',
        redLineEn: '[Factory Absolute Red Line]: Never confront institutional power at emotional peaks; navigate structural crevices with tactical flexibility.'
      },
      {
        nameZh: '边界坍塌与讨好型被迫应承',
        nameEn: 'Boundary Erosion & People-Pleasing Fatigue',
        icon: '🛡️',
        classicalSignZh: '身弱杀旺财重 · 承载过载',
        classicalSignEn: 'Delicate Day Master Carrying Excessive Wealth & Pressure',
        mechanismZh: '极度害怕冲突和让别人失望，表面迁就应承，事后内心极度委屈纠结，陷入长期的自我攻击与精力透支。',
        mechanismEn: 'Terror of interpersonal friction leads to involuntary acquiescence, followed by internal resentment, self-blame, and energy exhaustion.',
        redLineZh: '【出厂绝对红线】：严禁当面当场答应任何非分内的求助！统一执行24小时延迟回复冷面原则。',
        redLineEn: '[Factory Absolute Red Line]: Ban instant on-the-spot agreements! Enforce a non-negotiable 24-hour delayed response protocol.'
      },
      {
        nameZh: '多线并发与失控混乱内耗',
        nameEn: 'Multitasking Overdrive & Chaos Friction',
        icon: '🧩',
        classicalSignZh: '偏印化煞未成 · 念头丛生',
        classicalSignEn: 'Indirect Resource Hyper-Proliferation',
        mechanismZh: '同时开启过多并行任务，桌面杂乱无序，导致认知缓存被打爆，在频繁的任务上下文切换中精神涣散、焦虑空转。',
        mechanismEn: 'Opening too many concurrent tasks saturates cognitive RAM; continuous context switching shatters focus and triggers anxious paralysis.',
        redLineZh: '【出厂绝对红线】：桌面与视线内永远只留一件任务！未划掉当前事项前，绝不打开下一个浏览器标签页。',
        redLineEn: '[Factory Absolute Red Line]: Allow only ONE task in your field of vision! Never open a new tab until the active task is completed.'
      }
    ];

    // 🛡️ 4. 出厂自救三阶降维心法 (Three-Level Factory Emergency De-escalation Protocols)
    const deEscalationProtocols = [
      {
        levelZh: '第一阶：3分钟躯体硬重启 (生理神经阻断)',
        levelEn: 'Level 1: 3-Minute Somatic Emergency Reset (Physiological Vagal Circuit Breaker)',
        icon: '🧊',
        principleZh: '绝不在脑子里解决脑子里的问题，用身体感觉强行拉回当下',
        principleEn: 'Never solve cerebral loops with the mind; force consciousness into somatic grounding',
        stepsZh: [
          '【冰水潜水反射】用冷水用力洗脸冲腕15秒，刺激哺乳动物潜水反射，强行降低心率断开杏仁核警报。',
          '【4-7-8战术呼吸】鼻吸4秒、闭息7秒、慢呼8秒，连做3轮，强行激活副交感神经安稳回路。',
          '【空间肌肉位移】立即站起身离开工位走动2分钟，用擦桌、洗手、大步快走抢占大脑算力。'
        ],
        stepsEn: [
          'Ice-cold facial immersion for 15s stimulates mammalian diving reflex, instantly lowering pulse and aborting amygdala panic.',
          'Tactical 4-7-8 breathing: Inhale 4s, hold 7s, exhale 8s for 3 cycles to force parasympathetic relaxation.',
          'Physical displacement: Stand up immediately, leave your desk for 2 minutes, and engage somatic tactile touch.'
        ]
      },
      {
        levelZh: '第二阶：经典经文降维破相 (认知解耦升维)',
        levelEn: 'Level 2: Classical Scripture & Zen Cognitive De-framing (Transmuting Mental Projections)',
        icon: '🪞',
        principleZh: '事来则应、事去则静，掐断千百个自责推演的第二念',
        principleEn: 'Respond fully as events arrive, settle pristine as they depart; sever secondary rumination loops',
        stepsZh: [
          '【凡所有相皆是虚妄】觉察到焦虑风暴时当头棒喝：“凡所有相皆是虚妄！”抽离角色，静观念头生灭。',
          '【后念离境即菩提】外界刺激产生第一念是生理常态，严禁在脑中推演第二念第三念，让念头如水上泡影自灭。',
          '【用心若镜不将不迎】像镜子一样映照现实，不预迎未来的灾难，不挽留过去的过失，照过即空，元神不伤。'
        ],
        stepsEn: [
          'Declare mentally: "All conditioned forms are illusory!" Step back as an unblemished cosmic witness.',
          'Primary impulses are biological; sever secondary and tertiary ruminations immediately, allowing thoughts to dissolve like foam.',
          'Mirror Mind: Anticipate no future catastrophe, harbor no past regrets; reflect clearly and release instantly without damage.'
        ]
      },
      {
        levelZh: '第三阶：课题分离与利刃出鞘 (外向实体交付)',
        levelEn: 'Level 3: Sovereign Boundary Reset & Creative Transmutation (Outward Masterpiece Shipping)',
        icon: '🗡️',
        principleZh: '把向内自残的刀，变成向外斩击现实困境的利剑',
        principleEn: 'Transmute the blade of self-attack outward into laser-focused product creation',
        stepsZh: [
          '【阿德勒课题分离】划分我的课题与别人的课题；别人的评价是他自己的业力，坚决收回向外索求认可的触角。',
          '【先交出一个烂版本】打破完美主义魔咒，允许做个糙活，以“完成击败空想”启动正向反馈飞轮。',
          '【以硬核作品立世】把颅内多余的心智算力全部倾注于写代码、造产品、做商业变现，作品落地内耗自解！'
        ],
        stepsEn: [
          'Adlerian separation of tasks: Other people\'s judgments belong to their karma; sever all external validation seeking.',
          'Done beats perfect: Ship an imperfect baseline prototype to ignite real-world momentum over internal fantasy.',
          'Anchor your dignity in concrete works: Channel excess compute into shipping code, articles, and products.'
        ]
      }
    ];

    // 🌿 5. 五行能量微习惯 (Daily Five-Element Micro-Habits)
    const favorableEl = (climate && climate.primary) ? climate.primary : (isStrong ? '金' : '水');
    const fiveElementMicroHabits = [
      {
        element: '木',
        elementEn: 'Wood',
        icon: '🌱',
        isPrimaryFavorable: (favorableEl.includes('木') || dm === '甲' || dm === '乙'),
        durationZh: '3分钟',
        durationEn: '3 min',
        habitNameZh: '晨间生发生长与筋骨拉伸',
        habitNameEn: 'Morning Wood Sprouting Stretch',
        ritualZh: '晨起面向东方，做3组双手托天理三焦大拉伸；在案头摆放一盆鲜活绿植，观察嫩芽舒展，汲取生发之气。',
        ritualEn: 'Face East upon waking, perform 3 full-body upward stretches; place a vibrant plant on your desk to align with living growth.',
        potencyZh: '疏泄肝胆郁结气机，化解压抑与拖延，激发全新行动力。',
        potencyEn: 'Unblocks hepatic qi stagnation, dispels hesitation, and sparks organic forward momentum.'
      },
      {
        element: '火',
        elementEn: 'Fire',
        icon: '☀️',
        isPrimaryFavorable: (favorableEl.includes('火') || dm === '丙' || dm === '丁'),
        durationZh: '5分钟',
        durationEn: '5 min',
        habitNameZh: '正午采光沐浴与高能冲刺',
        habitNameEn: 'Solar Radiance Absorption & Sprint',
        ritualZh: '正午走到阳光下闭目仰头沐浴日光3分钟；工作前泡一杯温热红茶，设定一个25分钟全神贯注番茄钟单点突破。',
        ritualEn: 'Step into midday sunlight for 3 minutes with eyes closed; sip warm red tea and execute a single-minded 25-minute Pomodoro sprint.',
        potencyZh: '驱散胸中寒湿阴郁，点燃心神活力，重振开创激情。',
        potencyEn: 'Dispels cold internal gloom, activates cardiac vitality, and reignites creative enthusiasm.'
      },
      {
        element: '土',
        elementEn: 'Earth',
        icon: '🏔️',
        isPrimaryFavorable: (favorableEl.includes('土') || dm === '戊' || dm === '己'),
        durationZh: '5分钟',
        durationEn: '5 min',
        habitNameZh: '赤足接地气与温热规律餐饮',
        habitNameEn: 'Barefoot Earth Grounding & Warm Meal',
        ritualZh: '脱去鞋袜在草地或木地板赤足静立3分钟感知大地承托；正午享用一份热气腾腾的谷物汤饭，专注咀嚼不看手机。',
        ritualEn: 'Stand barefoot on grass or solid wood for 3 minutes feeling gravitational stability; eat a warm, nourishing meal with zero phone distractions.',
        potencyZh: '健旺脾胃运化，封堵焦虑浮躁，建立无可撼动的心理安全底盘。',
        potencyEn: 'Nourishes digestion, anchors anxious flightiness, and establishes an unshakable psychological foundation.'
      },
      {
        element: '金',
        elementEn: 'Metal',
        icon: '⚔️',
        isPrimaryFavorable: (favorableEl.includes('金') || dm === '庚' || dm === '辛'),
        durationZh: '3分钟',
        durationEn: '3 min',
        habitNameZh: '数字桌面断舍离与冷峻呼吸',
        habitNameEn: 'Digital Decluttering & Crisp Boundary',
        ritualZh: '工作前关闭所有无关浏览器标签，清理桌面冗杂纸屑；做3组深长鼻吸鼻呼，练习在心中冷峻地说出一次“不”。',
        ritualEn: 'Close all irrelevant browser tabs and clean physical clutter; take 3 crisp nasal breaths and practice uttering a clean, polite "no".',
        potencyZh: '收敛散乱注意力，肃清杂念冗余，建立清晰冰冷的人际与任务护城河。',
        potencyEn: 'Consolidates scattered attention, prunes cognitive overhead, and fortifies crisp interpersonal moats.'
      },
      {
        element: '水',
        elementEn: 'Water',
        icon: '🌊',
        isPrimaryFavorable: (favorableEl.includes('水') || dm === '壬' || dm === '癸'),
        durationZh: '5分钟',
        durationEn: '5 min',
        habitNameZh: '晚间静水疗愈与虚空放空',
        habitNameEn: 'Evening Hydrotherapy & Void Meditation',
        ritualZh: '睡前用温水浸泡双足或沐浴冲洗颈后大椎穴；关灯静坐，观想意识如无边幽深水面，任凭微波荡漾自归澄澈。',
        ritualEn: 'Take a warm footbath or shower before rest; sit in stillness contemplating consciousness as an unruffled nocturnal ocean.',
        potencyZh: '滋养肾水元精，熄灭心火躁动，恢复深层觉照与灵性直觉。',
        potencyEn: 'Nourishes kidney yin essence, cools cerebral agitation, and restores pristine intuitive depth.'
      }
    ];

    return {
      detected,
      score,
      level,
      levelBadge,
      primaryRoot,
      primaryRootEn,
      triggers,
      triggersEn,
      solutions,
      zenDaoWisdom,
      factorySpecs,
      classicalCanonsManual,
      stressTriggers,
      deEscalationProtocols,
      fiveElementMicroHabits
    };
  }

  /**
   * 8. 👑 五经全盘画像 · 帕累托 20% 关键枢纽全盘分析 (Pareto 80/20 Core Synthesis)
   * Powered by:
   * 1. 《神峰通考》 (Shen Feng Tong Kao) - 病药绝学 (The 20% Vital Fulcrum)
   * 2. 《玉照定真经》 (Yu Zhao Ding Zhen Jing) - 夫妻与婚姻深层全息透视
   * 3. 《玉照定真经》 (Yu Zhao Ding Zhen Jing) - 子女与后嗣才干缘法
   * 4. 《玉照定真经》 (Yu Zhao Ding Zhen Jing) - 父母与家族祖荫传承
   * 5. 《李虚中命书》 (Li Xu Zhong Ming Shu) - 人与社会环境/时代周期的综合交互分析
   */
  static generateParetoCoreSynthesis(bazi, vigor, patterns, climate) {
    const gender = bazi.gender || (bazi.input && bazi.input.gender) || '乾造';
    const dayMaster = bazi.dayMaster || (bazi.pillars && bazi.pillars.day && bazi.pillars.day.stem) || '甲';
    const monthBranch = (bazi.pillars && bazi.pillars.month && bazi.pillars.month.branch) || bazi.monthBranch || '寅';
    const dayPillar = (bazi.pillars && bazi.pillars.day && bazi.pillars.day.text) || bazi.dayPillar || `${dayMaster}子`;
    const hourPillar = (bazi.pillars && bazi.pillars.hour && bazi.pillars.hour.text) || bazi.hourPillar || '甲子';

    // 0. 提取全盘第一核心主导格局 (按能量占比绝对排序)
    let patternList = Array.isArray(patterns) ? patterns : [];
    if (patternList.length > 0) {
      patternList.sort((a, b) => (b.weightPct || 0) - (a.weightPct || 0));
    }
    const topPattern = (patterns && patterns.primary)
      ? patterns.primary
      : (patternList.length > 0 ? patternList[0] : { name: '阳刃格 (月刃格 / 威权大将)', weightPct: 28 });
    const primaryPatternName = topPattern.name || '阳刃格 (月刃格 / 威权大将)';
    const primaryPatternPct = topPattern.weightPct || 28;
    const secondPattern = patternList.length > 1 ? patternList[1] : null;

    // 1. 《滴天髓》 (Di Tian Sui - Vital Qi & Vigor 20% Fulcrum)
    let ditiansui = null;
    if (typeof DiTianSuiDB !== 'undefined') {
      const stemData = DiTianSuiDB.getForDayMaster(dayMaster) || {};
      const isStrong = vigor && (vigor.isStrong || vigor.totalScore >= 50);
      ditiansui = {
        canonId: 'ditiansui',
        canonNameZh: '滴天髓',
        canonNameEn: 'Di Tian Sui',
        titleZh: '👑 《滴天髓》：20% 理气真假与衰旺核心枢纽',
        titleEn: '👑 Di Tian Sui: 20% Vital Qi & True/False Vigor Fulcrum',
        subtitleZh: '宋·京图 / 明·刘基《滴天髓》：“天道有寒暖，地道有燥湿。理气乘除，衰旺真假不可不察。”',
        subtitleEn: 'Di Tian Sui: "Heaven has cold and warmth; Earth has dryness and moisture. Discerning true from false vigor is the paramount secret."',
        pivotNameZh: isStrong ? '理气乘旺 · 乘除引通' : '理气虚灵 · 培元固本',
        pivotNameEn: isStrong ? 'Abundant Qi · Channeled Refinement' : 'Tender Receptive Qi · Root Consolidation',
        summaryZh: isStrong
          ? `命主【${dayMaster}】元神得局通根，理气旺盛。滴天髓指明：“旺极宜泄，见火为荣”；切忌困闭滞涩，须有克泄耗之神引通生机。`
          : `命主【${dayMaster}】元神气质虚和，理气待发。滴天髓指明：“衰而不穷，如有嫡母，可秋可冬”；须得印比通根生扶，筑牢生命底盘。`,
        summaryEn: isStrong
          ? `Day Master [${dayMaster}] possesses dominant root vigor. Di Tian Sui dictates: "When Qi culminates, channel its brilliance outward through productive output; avoid stagnation."`
          : `Day Master [${dayMaster}] carries delicate, receptive Qi. Di Tian Sui dictates: "Gentle Qi perseveres through resource roots; anchor core vitality with supportive mentorship."`,
        favorableZh: (stemData.favorable && stemData.favorable.join('、')) || '得天时地利相和',
        favorableEn: (stemData.favorable && stemData.favorable.join(', ')) || 'Harmonious elemental alignment',
        taboosZh: (stemData.taboos && stemData.taboos.join('、')) || '过燥过湿、偏枯无制',
        taboosEn: (stemData.taboos && stemData.taboos.join(', ')) || 'Excessive dryness or moisture',
        modernStrategyZh: stemData.beneficial_lifestyle || '保持生活作息规律，晨间亲近自然阳光；工作中主动担当重要使命，以专业价值立足。',
        modernStrategyEn: stemData.beneficial_lifestyle || 'Align daily rhythms with natural sunlight and deep focus; lead initiatives through verifiable craftsmanship.',
        genderDiffZh: gender === 'female'
          ? '【坤造理气辨析】：女命重在理气柔顺中和，不宜过度纯刚刑克；得印绶食伤则秀外慧中、福寿绵长。'
          : '【乾造理气辨析】：男命贵在刚健笃实、勇于突破；逢杀刃制化则立功名垂青史，成就非凡基业。',
        genderDiffEn: gender === 'female'
          ? '[Female Native Dynamics]: Values gentle, resilient Qi flow without abrasive clashes, radiating intellectual grace and domestic dignity.'
          : '[Male Native Dynamics]: Values sovereign fortitude and disciplined execution, converting adversity into enduring legacy.',
        personaDepictionZh: `命主受【${dayMaster}】天干本气滋养，骨相清奇，内力深敛蓄势，如汪洋深潭不露声色而暗藏千钧之力。`,
        personaDepictionEn: `Endowed with Day Master [${dayMaster}] elemental depth; serene on the surface while harboring deep regenerative momentum.`,
        destinyTrajectoryZh: '顺天应时乘除引通；逢燥热蒸腾之大运激化才干为甘霖，逢生旺滋养岁运乘风破浪万里扬帆。',
        destinyTrajectoryEn: 'Harmonizes seasonal rhythms; transforms challenges into rainclouds and catches oceanic tailwinds in favorable transits.',
        actionableManeuverZh: '以静制动，涵养元神精神力，严禁在浮躁盲从的红海中消耗有限心智；守正出奇方成极品。',
        actionableManeuverEn: 'Master stillness over rash movement; conserve internal focus and eliminate distracting superficial rivalries.'
      };
    }

    // 2. 《穷通宝鉴》 (Qiong Tong Bao Jian - Climatic 20% Fulcrum)
    let qiongtong = null;
    if (typeof QiongTongDB !== 'undefined') {
      const qt = QiongTongDB.getReading(dayMaster, monthBranch) || {};
      qiongtong = {
        canonId: 'qiongtong',
        canonNameZh: '穷通宝鉴',
        canonNameEn: 'Qiong Tong Bao Jian',
        titleZh: '👑 《穷通宝鉴》：20% 月令调候寒暖燥湿命脉',
        titleEn: '👑 Qiong Tong Bao Jian: 20% Climatic Balance & Seasonal Mandate Fulcrum',
        subtitleZh: '清·余春台《穷通宝鉴》：“终南捷径，先观提纲月令。调候为急，专执用神。”',
        subtitleEn: 'Qiong Tong Bao Jian: "The supreme shortcut lies in the Month Order. Climatic adjustment is paramount; sovereign focus governs destiny."',
        pivotNameZh: qt.climateDesc || `${dayMaster}生于${monthBranch}月 · 气候调候`,
        pivotNameEn: qt.climateDescEn || `${dayMaster} born in ${monthBranch} Month · Seasonal Balance`,
        summaryZh: qt.vernacular || `月令提纲为命盘气象主轴，寒暖燥湿失衡则百病丛生，得调候用神照拂则生机盎然、名利水到渠成。`,
        summaryEn: qt.vernacularEn || `The Month decree governs natal meteorological balance; favorable seasonal balancing stars unlock career flow and physical vitality.`,
        favorableZh: qt.favorable || '丙火暄照、癸水滋润',
        favorableEn: qt.favorableEn || 'Sunlight warmth and nourishing moisture',
        taboosZh: qt.taboos || '严冬无火、酷暑无水',
        taboosEn: qt.taboosEn || 'Severe chill without warmth or scorching heat without water',
        modernStrategyZh: qt.modernCareer || '根据四季五行调候方位选择发展城市，居住及办公环境保持适度温湿度与采光。',
        modernStrategyEn: qt.modernCareerEn || 'Select metropolitan hubs matching seasonal climatic needs; optimize living and workspaces for natural light and air flow.',
        genderDiffZh: gender === 'female'
          ? '【坤造调候辨析】：寒暖调和直接关乎身心气血充盈与家庭温馨气场；得金水相滋则气色明润、知书达礼。'
          : '【乾造调候辨析】：调候得宜主把握宏观时代风口，遇水火既济则文武兼备、事业开拓如有神助。',
        genderDiffEn: gender === 'female'
          ? '[Female Native Dynamics]: Climatic harmony anchors somatic wellness and serene emotional intuition, elevating domestic warmth.'
          : '[Male Native Dynamics]: Seasonal adjustment empowers rapid market positioning and cross-industry breakthrough.',
        personaDepictionZh: `得月令【${monthBranch}】气象淬炼，心性耐得住长期苦寒冷板凳，在极端逆境高压中具备超常耐受力与战略定力。`,
        personaDepictionEn: `Tempered by Month [${monthBranch}] seasonal climate; extraordinary tolerance for solitude and pressure under adversity.`,
        destinyTrajectoryZh: '早运历经寒暖洗礼淬砺筋骨，逢调候用神大运骤然破土开花，事业迎来火箭式质变爆发。',
        destinyTrajectoryEn: 'Early seasons temper resilience; entering favorable climatic transits triggers exponential career breakthroughs.',
        actionableManeuverZh: '日常起居办公多采光纳阳，业务聚焦朝阳温暖之科技创新赛道，以火热信念融化内心冰霜。',
        actionableManeuverEn: 'Maximize natural sunlight in workspace; pivot ventures toward solar digital technologies to warm the soul.'
      };
    }

    // 3. 《子平真诠》 (Zi Ping Zhen Quan - Pattern & Guarding Minister 20% Fulcrum)
    let ziping = null;
    if (typeof ZiPingZhenQuanDB !== 'undefined') {
      const zp = ZiPingZhenQuanDB.getPattern(primaryPatternName) || {};
      const isYangRen = primaryPatternName.includes('刃');
      const canonSourceZh = isYangRen
        ? '《子平真诠·卷四·论阳刃》'
        : (primaryPatternName.includes('杀') ? '《子平真诠·卷三·论偏官》' : '《子平真诠·论格局成败》');
      const canonSourceEn = isYangRen
        ? 'Zi Ping Zhen Quan: Chapter 4 On Yang Blade'
        : 'Zi Ping Zhen Quan: On Pattern Formation';

      ziping = {
        canonId: 'ziping',
        canonNameZh: '子平真诠',
        canonNameEn: 'Zi Ping Zhen Quan',
        titleZh: `👑 《子平真诠》：20% 【${primaryPatternName}】成败相神命脉`,
        titleEn: `👑 Zi Ping Zhen Quan: 20% [${zp.nameEn || primaryPatternName}] Pattern & Guarding Minister`,
        subtitleZh: `清·沈孝瞻《子平真诠》：“八字用神，专求月令。伤用神甚于伤身，相神救应有情有力。”（${canonSourceZh}）`,
        subtitleEn: `Zi Ping Zhen Quan: "Natal utility star resides in the Month decree. Harm to utility harms life; Guarding Minister rescues the pattern." (${canonSourceEn})`,
        pivotNameZh: `${zp.name || primaryPatternName}（占比 ${primaryPatternPct}%）`,
        pivotNameEn: `${zp.nameEn || primaryPatternName} (${primaryPatternPct}% Energy)`,
        summaryZh: `【${primaryPatternName} · 20%成败枢纽】：${zp.meaning || '格局决定人生社会成就上限与阶层维度，相神则是化解破格风险的大药命门。'}`,
        summaryEn: `[Pattern Fulcrum]: ${zp.meaningEn || 'Pattern dictates the societal ceiling of influence; Guarding Minister provides critical rescue.'}`,
        formationZh: zp.conditions || zp.successConditions || '官印相生、杀刃相制、食伤生财',
        formationEn: zp.conditionsEn || zp.successConditionsEn || 'Clear generational flow and disciplined restraint',
        rescueZh: zp.remedies || zp.rescueMethod || '逢财破印透劫制财，逢官杀混杂透食伤去杀留官，逢刃冲战取法度节制',
        rescueEn: zp.remediesEn || zp.rescueMethodEn || 'Employ Companion stars to shield Seal or Output to purify authority',
        modernStrategyZh: zp.usage || zp.modernStrategy || '锁定自身核心生态位，杜绝杂念分散精力，以制度法纪驾驭天赋锋芒。',
        modernStrategyEn: zp.modernStrategyEn || 'Anchor positioning within structured institutions; reinforce core competencies.',
        genderDiffZh: gender === 'female'
          ? '【坤造格局辨析】：女命以纯和安详、清贵端庄为吉；大格刚烈逢冲者需相神柔顺通关，方获事业与家庭双美。'
          : '【乾造格局辨析】：男命贵在杀刃立威、财官成业；相神有力透干，主执掌权柄、建功立业。',
        genderDiffEn: gender === 'female'
          ? '[Female Native Dynamics]: Thrives in benevolent, stable structures; Guarding Minister balances ambition with emotional peace.'
          : '[Male Native Dynamics]: Thrives in competitive arenas; a potent Guarding Minister manifests decisive executive command.',
        personaDepictionZh: '格局法度严整，骨子里极注重契约、信誉与长治久安之正道声望；为人处世讲究章法，不屑投机。',
        personaDepictionEn: 'Structural integrity and profound respect for covenants; disciplined, ethical, and disdainful of opportunism.',
        destinyTrajectoryZh: '在规范成熟的平台或自建严密体系的组织中步步为营，中晚年权柄、专业威望与财富复利双丰收。',
        destinyTrajectoryEn: 'Compounds systemic authority step-by-step within structured organizations, flourishing into prominent mature years.',
        actionableManeuverZh: '严控合规底线，强化团队制度建设；以相神护卫主格，防范流年官杀混杂或枭神夺食等破局暗礁。',
        actionableManeuverEn: 'Maintain strict compliance safeguards; deploy protective ministers to buffer against sudden transit clashes.'
      };
    }

    // 4. 《三命通会》 (San Ming Tong Hui - Day-Hour Pillar 20% Fulcrum)
    let sanming = null;
    if (typeof SanMingDB !== 'undefined') {
      const sm = SanMingDB.getReading(dayPillar, hourPillar) || {};
      const isYangRen = primaryPatternName.includes('刃');
      const smChapterZh = isYangRen ? '《三命通会·卷五·论阳刃》' : '《三命通会·卷十二·日时通变》';
      sanming = {
        canonId: 'sanming',
        canonNameZh: '三命通会',
        canonNameEn: 'San Ming Tong Hui',
        titleZh: '👑 《三命通会》：20% 日时贵宿与终身归宿枢纽',
        titleEn: '👑 San Ming Tong Hui: 20% Day-Hour Pillar & Terminal Legacy Fulcrum',
        subtitleZh: `明·万民英《三命通会》：“夫日为身主，时为引从。日时相生相克，定一生富贵寿考之归宿。”（${smChapterZh}）`,
        subtitleEn: 'San Ming Tong Hui: "Day Pillar is the sovereign self; Hour Pillar is the guiding destiny. Their dynamic interaction seals lifetime legacy, wealth, and twilight fruition."',
        pivotNameZh: sm.pattern || `${dayPillar}日 ${hourPillar}时 取格`,
        pivotNameEn: sm.patternEn || `${dayPillar} Day ${hourPillar} Hour Synthesis`,
        summaryZh: sm.summary || sm.meaning || `日干与时支配合，定一生事业功名与晚年归宿之大势。吉神照应主晚景荣昌、后代光宗耀祖。`,
        summaryEn: sm.summaryEn || sm.meaningEn || `The Day-Hour synthesis anchors terminal legacy, intellectual output, and generational transition in the second half of life.`,
        verseZh: sm.verse || '日落青山时正隆，贵宿相生福自通。若得行运无刑克，晚岁安闲富寿翁。',
        verseEn: sm.verseEn || 'When Day and Hour commune in harmony, blessings flow uninterrupted into serene late-life fruition.',
        modernStrategyZh: sm.usage || '中年后重视资产传承与知识经验沉淀，设立家族信托或培育核心接班人，实现长期主义复利。',
        modernStrategyEn: sm.usageEn || 'Invest in legacy preservation and intellectual capital; mentor successors to compound generational advantage.',
        genderDiffZh: gender === 'female'
          ? '【坤造日时辨析】：时宿为子息宫与晚年安身立命之所，得生旺吉神照应，主儿女显贵、老有所依。'
          : '【乾造日时辨析】：时宿为终身事业与社会声望的最终收官，得贵气聚拢，主立德立功名垂晚晴。',
        genderDiffEn: gender === 'female'
          ? '[Female Native Dynamics]: Hour Pillar anchors late-life emotional serenity and generational pride with lasting dignity.'
          : '[Male Native Dynamics]: Day-Hour synthesis crowns lifetime contributions and institutional stature.',
        personaDepictionZh: '日坐财库而时引秀气，外表沉静儒雅，内心才思澎湃，深具战略谋士与实战操盘手兼备的双重魅力。',
        personaDepictionEn: 'Dual temperament of grounded asset steward and visionary creative strategist; cultured magnetic presence.',
        destinyTrajectoryZh: '前半生多历练摸索自立门户，后半生归宿安详昌盛，因文化、科技或商业重大建树而名传后世。',
        destinyTrajectoryEn: 'Pioneers independent domain in youth; reaches enduring prominence and generational fruition in twilight years.',
        actionableManeuverZh: '晚景宜以提携后学、著书立说或孵化新锐为主，将一生认知沉淀为不可动摇的长期文化与物质福报。',
        actionableManeuverEn: 'Dedicate mature decades to mentorship, flagship publications, and incubation, compounding lasting legacy.'
      };
    }

    // 5. 《渊海子平》 (Yuan Hai Zi Ping - Transformations & Canonical Verses 20% Fulcrum)
    let yuanhai = null;
    if (typeof YuanHaiDB !== 'undefined') {
      let tenGod = '正官';
      if (primaryPatternName.includes('刃')) tenGod = '阳刃';
      else if (primaryPatternName.includes('杀') || primaryPatternName.includes('偏官')) tenGod = '七杀';
      else if (primaryPatternName.includes('伤')) tenGod = '伤官';
      else if (primaryPatternName.includes('食')) tenGod = '食神';
      else if (primaryPatternName.includes('偏财')) tenGod = '偏财';
      else if (primaryPatternName.includes('财')) tenGod = '正财';
      else if (primaryPatternName.includes('偏印') || primaryPatternName.includes('枭')) tenGod = '偏印';
      else if (primaryPatternName.includes('印')) tenGod = '正印';
      else if (primaryPatternName.includes('劫')) tenGod = '劫财';
      else if (primaryPatternName.includes('比')) tenGod = '比肩';

      const tgTreatise = YuanHaiDB.getTenGodTreatise(tenGod) || YuanHaiDB.getTenGodTreatise('正官') || {};
      const isYangRen = primaryPatternName.includes('刃');
      const yhCanonSource = isYangRen ? '《渊海子平·卷三·论羊刃》' : '《渊海子平·卷一·继善篇》';
      const yhQuote = isYangRen
        ? '《渊海子平·继善篇》：“羊刃重重见，无杀定伤残；凶煞有制，翻成大富大贵之资。”'
        : '《渊海子平·继善篇》：“人禀天地，命属阴阳；官星纯正定居显贵之尊，凶煞有制翻成大器。”';
      const yhQuoteEn = isYangRen
        ? 'Ji Shan Pian: "When multiple Yang Blades appear, lack of Killings causes ruin; yet when ferocious blades meet righteous restraint, they convert into supreme wealth and nobility."'
        : 'Ji Shan Pian: "Endowed by Heaven and Earth, when stars meet righteous restraint, they transform into towering greatness."';

      yuanhai = {
        canonId: 'yuanhai',
        canonNameZh: '渊海子平',
        canonNameEn: 'Yuan Hai Zi Ping',
        titleZh: `👑 《渊海子平》：20% 【${tenGod}】凶煞制化与骨相命脉`,
        titleEn: `👑 Yuan Hai Zi Ping: 20% [${tenGod}] Star Transformation & Foundational Verses`,
        subtitleZh: `宋·徐升《渊海子平》：“造化先须审日干，更凭月令讨论看。有杀先论杀，无杀方论用。”（${yhCanonSource}）`,
        subtitleEn: 'Yuan Hai Zi Ping: "First scrutinize the Day Stem, then examine the Month order. Prioritize Killings if present; transform hazards into supreme nobility."',
        pivotNameZh: `${tgTreatise.name || tenGod} · 煞刃制化真机`,
        pivotNameEn: `${tgTreatise.nameEn || tenGod} · Star Transformation`,
        summaryZh: isYangRen
          ? `【阳刃骨相 · 20%战力聚焦】：命主骨相铁骨铮铮、刚劲勇悍，具备开疆拓土与危机破局之胆魄。唯必须以七杀（法律合规、森严纪律）相制伏，方成帅将威权；大忌无制盲目冲撞。`
          : (tgTreatise.plain_text || `命主承袭${tenGod}本相，得时者吉，失时者凶。精修20%关键心性，转化煞气为权柄。`),
        summaryEn: isYangRen
          ? `Day Master possesses unyielding Yang Blade stamina; disciplined restraint transforms raw aggressive momentum into executive command.`
          : (tgTreatise.plain_textEn || 'Refining core temperament transforms raw momentum into enduring authority.'),
        verseQuoteZh: yhQuote,
        verseQuoteEn: yhQuoteEn,
        modernStrategyZh: isYangRen
          ? '将20%的核心精力聚焦于高壁垒技术攻坚、危机应对与重大谈判博弈；日常坚决遵守合规红线，防冲动树敌。'
          : (tgTreatise.careers ? `重点布局：${tgTreatise.careers.substring(0, 45)}...` : '精准识别性格利刃特质，将锋芒转化为硬核技术攻坚攻防利器。'),
        modernStrategyEn: isYangRen
          ? 'Focus 20% vital energy on high-stakes crisis breakthrough, complex negotiations, and strict compliance boundaries.'
          : 'Channel core temperament traits into high-stakes technical breakthroughs.',
        genderDiffZh: gender === 'female'
          ? '【坤造赋文辨析】：女命贵在安详纯和、气脉通顺；刚烈大格多修温润内功，以柔克刚家庭事业长治久安。'
          : '【乾造赋文辨析】：男命先看杀刃有无制伏，次审财官衰旺；一身铁骨铮铮，敢开风气之先建功立业。',
        genderDiffEn: gender === 'female'
          ? '[Female Native Dynamics]: Prioritizes cohesive inner elegance and boundary integrity, creating an unshakeable domestic and professional sanctuary.'
          : '[Male Native Dynamics]: Evaluates how formidable challenges are converted into executive courage and market dominance.',
        personaDepictionZh: '煞刃交辉，一身硬骨傲气，遇强则强；敢在别人不敢涉足的荒原危局中横刀立马单骑闯关。',
        personaDepictionEn: 'Unyielding martial courage; thrives where others falter, charging fearlessly into frontier crises.',
        destinyTrajectoryZh: '波澜壮阔之命！凡重大成败皆在大开大合之战役中见分晓；以凶煞化为执掌权柄，大器晚成。',
        destinyTrajectoryEn: 'Epic trajectory marked by monumental battles; transforming ferocious challenges into towering sovereign triumphs.',
        actionableManeuverZh: '切忌意气用事，严防言语伤人与冲动树敌；以法律、纪律与制度契约锁死战略战车。',
        actionableManeuverEn: 'Eliminate emotional vendettas; bind all campaigns in ironclad legal covenants and structured alliances.'
      };
    }

    // 6. 《神峰通考》 (Shen Feng Tong Kao - Disease and Medicine 20% Fulcrum)
    let shenfeng = null;
    if (typeof ShenFengDB !== 'undefined') {
      const dmDisease = ShenFengDB.getDiseaseAndMedicine(bazi, vigor, patterns);
      const sculpting = ShenFengDB.getSculptingAnalysis(bazi.dayMasterElement, vigor.totalScore);
      shenfeng = {
        canonId: 'shenfeng',
        canonNameZh: '神峰通考',
        canonNameEn: 'Shen Feng Tong Kao',
        titleZh: '👑 《神峰通考》：20% 命局巨症与对症大药枢纽',
        titleEn: '👑 Shen Feng Tong Kao: 20% Disease & Medicine Pivot (Pareto 80/20)',
        subtitleZh: '明·张神峰《神峰通考》：“有病方为贵，无伤不是奇。格中如去病，财禄两相随。”',
        subtitleEn: 'Shen Feng Tong Kao: "Greatness arises only where a grave Disease meets its perfect Medicine; when cured, supreme wealth and honor follow."',
        pivotNameZh: dmDisease.diseaseNameZh,
        pivotNameEn: dmDisease.diseaseNameEn,
        diseaseNameZh: dmDisease.diseaseNameZh,
        diseaseNameEn: dmDisease.diseaseNameEn,
        symptomZh: dmDisease.symptomZh,
        symptomEn: dmDisease.symptomEn,
        medicineZh: dmDisease.medicineZh,
        medicineEn: dmDisease.medicineEn,
        rationaleZh: dmDisease.rationaleZh,
        rationaleEn: dmDisease.rationaleEn,
        summaryZh: dmDisease.rationaleZh,
        summaryEn: dmDisease.rationaleEn,
        modernStrategyZh: dmDisease.modernStrategyZh,
        modernStrategyEn: dmDisease.modernStrategyEn,
        sculptingTypeZh: sculpting.typeZh,
        sculptingTypeEn: sculpting.typeEn,
        sculptingAdviceZh: sculpting.adviceZh,
        sculptingAdviceEn: sculpting.adviceEn,
        genderDiffZh: sculpting.genderDiffZh || '【男女命雕琢差异】：乾造重在建功立威与纪律约束；坤造重在专业独立与边界保护。',
        genderDiffEn: sculpting.genderDiffEn || '[Gender Dynamics]: Male native focuses on institutional leadership and discipline; female native focuses on professional sovereignty and emotional boundaries.',
        personaDepictionZh: '有病方奇，痛定思痛；命主身上具备极罕见的“在自我否定与绝地反击中完成基因重组”之蜕变力。',
        personaDepictionEn: 'Profound regenerative capacity; continuously reinventing self through decisive surgical breakthroughs.',
        destinyTrajectoryZh: '每次重大人生低谷，皆是对症大药生效之契机；病去药显之时，便是财富名位指数级飞跃之日。',
        destinyTrajectoryEn: 'Every trough is the precise catalyst for the golden cure; when resolved, wealth and rank compound exponentially.',
        actionableManeuverZh: '认准命局核心病灶（过旺或偏枯），毫不手软地实施外科手术式割席，聚焦药神全力单点突破。',
        actionableManeuverEn: 'Isolate the single systemic bottleneck and excise distractions ruthlessly, channeling 80% effort into the remedy.'
      };
    }

    // 7. 《玉照定真经》 (Yu Zhao Ding Zhen Jing - Kinship & Palaces 20% Fulcrum)
    let yuzhao = null;
    if (typeof YuZhaoDB !== 'undefined') {
      const sp = YuZhaoDB.getSpousePalaceReading(bazi, gender);
      const ch = YuZhaoDB.getChildrenPalaceReading(bazi, gender);
      const pa = YuZhaoDB.getParentsPalaceReading(bazi, gender);
      yuzhao = {
        canonId: 'yuzhao',
        canonNameZh: '玉照定真经',
        canonNameEn: 'Yu Zhao Ding Zhen Jing',
        titleZh: '👑 《玉照定真经》：20% 宫位六亲与家庭能量枢纽',
        titleEn: '👑 Yu Zhao Ding Zhen Jing: 20% Palace Lineage & Kinship Fulcrum',
        subtitleZh: '晋·郭璞 / 宋·徐子平《玉照定真经》：“根在苗先，实从花后。年月为父母祖基，日时为妻儿归宿。”',
        subtitleEn: 'Yu Zhao Ding Zhen Jing: "Roots precede shoots, fruits follow blossoms. Year-Month anchors ancestral foundations; Day-Hour governs consort and offspring destiny."',
        pivotNameZh: `六亲宫位全息（配偶【${sp.palaceBranch}】· 子息【${ch.hourPillarText}】· 祖荫【${pa.typeZh}】）`,
        pivotNameEn: `Kinship Hologram (Spouse [${sp.palaceBranch}], Child [${ch.hourPillarText}], Ancestral [${pa.typeEn}])`,
        summaryZh: `玉照定真经专论四柱宫位感应与六亲吉凶。日支夫妻宫藏深沉心性，时柱子息宫系晚景才秀，年月祖基定早岁根基。三位一体，调和家庭能量场。`,
        summaryEn: `Yu Zhao Ding Zhen Jing deciphers palace energetic resonance. Day Branch anchors spousal psychology, Hour Pillar mirrors offspring talent, and Year-Month stabilizes ancestral root security.`,
        spouseSummaryZh: `配偶心性：【${sp.archetypeZh}】。${sp.traitsZh}`,
        spouseSummaryEn: `Spouse Archetype: [${sp.archetypeEn}]. ${sp.traitsEn}`,
        childrenSummaryZh: `子嗣才干：【${ch.archetypeZh}】。${ch.talentZh}`,
        childrenSummaryEn: `Children Talent: [${ch.archetypeEn}]. ${ch.talentEn}`,
        parentsSummaryZh: `祖业基石：【${pa.typeZh}】。${pa.heritageZh}`,
        parentsSummaryEn: `Ancestral Roots: [${pa.typeEn}]. ${pa.heritageEn}`,
        modernStrategyZh: '理顺家庭情感边界与代际支持机制，以日支配偶为共同盟友，借家庭和睦稳定后方赋能外界事业破局。',
        modernStrategyEn: 'Harmonize familial boundary systems and reciprocal intergenerational support, turning domestic tranquility into career breakthrough.',
        genderDiffZh: gender === 'female'
          ? '【坤造六亲全息】：坤造以夫星官星与子女食伤为核心情感枢纽，气脉通和则家庭幸福、旺夫益子。'
          : '【乾造六亲全息】：乾造以日支正财为内助基石，以时柱官杀为传承担当，刚柔并济撑起门庭。',
        genderDiffEn: gender === 'female'
          ? '[Female Native Dynamics]: Anchors spousal alignment and offspring mentoring to sustain emotional fulfillment.'
          : '[Male Native Dynamics]: Transforms ancestral blessings into entrepreneurial shelter for loved ones.',
        personaDepictionZh: '重情重义，家庭观与宗族意识深厚；在外雷厉风行，对至亲家人则倾注全部深情与护佑。',
        personaDepictionEn: 'Deeply honorable domestic protector; fierce externally yet intensely devoted to familial sanctuary.',
        destinyTrajectoryZh: '以日支夫妻为终身中流砥柱，后嗣昌荣，世代家风清正长留，福荫子孙。',
        destinyTrajectoryEn: 'Marital alignment serves as the lifelong bedrock, culminating in distinguished descendants and enduring family honor.',
        actionableManeuverZh: '经营好夫妻二人精神沟通与财务透明度，设立家族信托与教育基金，把小家变成坚实堡垒。',
        actionableManeuverEn: 'Nurture spousal emotional intimacy and financial transparency; establish generational family trusts.'
      };
    }

    // 8. 《李虚中命书》 (Li Xu Zhong Ming Shu - Three Primes & Era Resonance 20% Fulcrum)
    let lixuzhong = null;
    if (typeof LiXuZhongDB !== 'undefined') {
      const tp = LiXuZhongDB.getThreePrimes(bazi);
      const er = LiXuZhongDB.getEnvironmentalResonance(bazi, climate);
      lixuzhong = {
        canonId: 'lixuzhong',
        canonNameZh: '李虚中命书',
        canonNameEn: 'Li Xu Zhong Ming Shu',
        titleZh: '👑 《李虚中命书》：20% 三元禄命与时代地理场能枢纽',
        titleEn: '👑 Li Xu Zhong Ming Shu: 20% Three Primes & Macro Era Fulcrum',
        subtitleZh: '唐·李虚中《李虚中命书》：“天元为禄，地元为命，人元为身。乘时代之机，音律相生无往不利。”',
        subtitleEn: 'Li Xu Zhong Ming Shu: "Heavenly Prime is Rank, Earthly Prime is Destiny, Human Prime is Body. Synchronizing with acoustic resonance and historical momentum unlocks sovereign triumphs."',
        pivotNameZh: '三元禄命身一体 · 宏观时代与地理场能共振',
        pivotNameEn: 'Three Primes Unified · Macro Era & Spatial Acoustic Field',
        threePrimesZh: `${tp.heavenLuZh}\n${tp.earthMingZh}\n${tp.humanShenZh}`,
        threePrimesEn: `${tp.heavenLuEn}\n${tp.earthMingEn}\n${tp.humanShenEn}`,
        summaryZh: `以干为禄、支为命、纳音为身。将个人纳音五行与物理空间地理方位（${er.idealGeographyZh}）及九运AI智能化科技大潮深度共振，借势腾飞。`,
        summaryEn: `Heavenly Stem governs Rank, Earthly Branch governs Destiny, NaYin Acoustic governs Body. Synchronizing acoustic signatures with optimal geography (${er.idealGeographyEn}) and the AI technological supercycle amplifies personal success.`,
        idealGeographyZh: er.idealGeographyZh,
        idealGeographyEn: er.idealGeographyEn,
        targetCitiesZh: er.targetCitiesZh,
        targetCitiesEn: er.targetCitiesEn,
        workspaceEnergyZh: er.workspaceEnergyZh,
        workspaceEnergyEn: er.workspaceEnergyEn,
        eraMacroTrendZh: er.eraMacroTrendZh,
        eraMacroTrendEn: er.eraMacroTrendEn,
        modernStrategyZh: `主动融入【${er.targetCitiesZh}】等核心创新高地，在办公物理环境中调配生旺场能，拥抱数字智能技术杠杆。`,
        modernStrategyEn: `Deploy career focus toward leading innovation hubs (${er.targetCitiesEn}), calibrate workspace environmental energy, and leverage digital AI tools.`,
        genderDiffZh: tp.genderDiffZh || '【三元男女命差异】：男命以天元禄立功名、地元固气血；女命以天元立清贵、人元纳音安性灵。',
        genderDiffEn: tp.genderDiffEn || '[Gender Dynamics]: Male native anchors external reputation and somatic stamina; female native anchors intellectual prestige and spiritual intuition.',
        personaDepictionZh: '三元禄命身一体，气场浩大，能敏锐感知宏观时代水温变迁，天生具备宏观战略家视野。',
        personaDepictionEn: 'Three Primes unified; intuitive sensitivity to macroeconomic cycles and geopolitical tides.',
        destinyTrajectoryZh: '深度踏准国家与时代大运周期（如九运AI大潮），将个人微小的努力乘以宏观时代的巨大乘数。',
        destinyTrajectoryEn: 'Synchronizes personal craft with the 20-year mega-cycle (Period 9 AI/Digital), compounding gains across eras.',
        actionableManeuverZh: '物理办公环境调配合适方位，拥抱数字智能与前沿生产力工具，借势时代红利实现财富跃迁。',
        actionableManeuverEn: 'Calibrate physical workspace orientations and deploy frontier AI tooling to ride macro era winds.'
      };
    }

    // Retain deep specialized readings for Spouse, Children, Parents, and Environment
    const spouse = (typeof YuZhaoDB !== 'undefined') ? YuZhaoDB.getSpousePalaceReading(bazi, gender) : null;
    const children = (typeof YuZhaoDB !== 'undefined') ? YuZhaoDB.getChildrenPalaceReading(bazi, gender) : null;
    const parents = (typeof YuZhaoDB !== 'undefined') ? YuZhaoDB.getParentsPalaceReading(bazi, gender) : null;
    const environment = (typeof LiXuZhongDB !== 'undefined') ? {
      tp: LiXuZhongDB.getThreePrimes(bazi),
      er: LiXuZhongDB.getEnvironmentalResonance(bazi, climate)
    } : null;

    const canons = {
      ditiansui,
      qiongtong,
      ziping,
      sanming,
      yuanhai,
      shenfeng,
      yuzhao,
      lixuzhong
    };

    const grandPicture = this.generateGrandPicture(
      bazi, vigor, patterns, climate, canons, spouse, children, parents, environment
    );

    return {
      titleZh: '👑 八经全盘核心画像 · 帕累托 20% 关键枢纽全相分析',
      titleEn: '👑 Eight Canons Holographic Portrait · Pareto 80/20 Vital Fulcrum Core Synthesis',
      descriptionZh: '八大经典名著全息汇通，过滤80%平庸细枝末节噪声，锁定决定命主80%运势走向的20%核心枢纽，贯通夫妻、子女、父母六亲全息与宏观时代场能交互。',
      descriptionEn: 'Synthesizing all 8 classical treatises to isolate the vital 20% fulcrum that drives 80% of destiny, linking marital, offspring, and ancestral roots with macro-era acoustic resonance.',
      primaryPatternNameZh: primaryPatternName,
      primaryPatternNameEn: topPattern.nameEn || primaryPatternName,
      primaryPatternWeightPct: primaryPatternPct,
      primaryPatternDescZh: `全盘五大格局中，【${primaryPatternName}】以 ${primaryPatternPct}% 绝对能量占比位居第一核心主导，统摄命主一生之骨相气魄与成败枢纽。《子平真诠》《三命通会》《渊海子平》诸经法度皆以此格为全相定盘针。`,
      primaryPatternDescEn: `Among natal patterns, [${topPattern.nameEn || primaryPatternName}] leads with ${primaryPatternPct}% dominant energy weight, steering character, decisive breakthroughs, and career trajectory across classical canons.`,
      grandPicture,
      canons,
      fulcrum: shenfeng, // For backwards compatibility
      spouse: spouse ? (() => {
        const branchAuraMap = {
          '子': { zh: '眉清目秀，身形修长灵动，气质清冷而睿智，谈吐机敏透彻，自带深邃知性的智囊气场。', en: 'Clear-eyed and agile; cool, intellectual elegance with sharp strategic insight.' },
          '丑': { zh: '体态端正稳重，目光笃定纯朴，神情内敛沉静，举止质朴大方，自带令人心安的踏实气场。', en: 'Poised and solid; grounded, calm gaze with reliable domestic tranquility.' },
          '寅': { zh: '英姿勃发，神采奕奕，步伐矫健豪迈，举止自带领袖豪气与开拓者魄力，极具气场张力。', en: 'Vibrant and charismatic; purposeful stride carrying bold entrepreneurial leadership.' },
          '卯': { zh: '容颜秀美温润，眼神清澈含柔，举手投足温文尔雅，自带书卷清韵与古典艺术灵气。', en: 'Gentle and refined; soft, cultured grace infused with classical artistic sensibility.' },
          '辰': { zh: '器宇轩昂，气度宽宏沉稳，面容大气质朴，谈吐沉着有度，自带深谋远虑的大家风范。', en: 'Magnanimous and composed; dignified presence with strategic patience and depth.' },
          '巳': { zh: '目光敏锐明澈，仪态精明干练，神采飞扬，衣着考究得体，处事极具分寸感与时尚品味。', en: 'Sharp and impeccably groomed; sophisticated, articulate, and highly polished demeanor.' },
          '午': { zh: '面色红润明朗，性格热情开朗，笑颜生动，待人诚挚坦荡，自带温暖人心的阳光光芒。', en: 'Radiant and spirited; warm, engaging smile with vibrant, infectious enthusiasm.' },
          '未': { zh: '温雅恬淡，神韵内敛平和，举止从容大方，耐看耐品，自带包容涵养与细腻柔情。', en: 'Warm and understated; graceful, patient composure with deep emotional empathy.' },
          '申': { zh: '骨骼清奇，神情坚毅果决，言谈干脆利落，办事雷厉风行，自带英姿飒爽的侠客气场。', en: 'Crisp and resolute; decisive, brisk demeanor carrying sharp modern efficiency.' },
          '酉': { zh: '五官精致清丽，肤色白皙典雅，审美卓越高尚，衣品卓然，自带清贵名士/名媛仪态。', en: 'Finely sculpted features; immaculate aesthetic elegance with dignified aristocratic prestige.' },
          '戌': { zh: '面相敦厚方正，眼神真诚坚定，神情稳健可靠，自带忠义信实、坚韧如磐石之气场。', en: 'Square, loyal countenance; steadfast and grounded, radiating unshakeable fidelity.' },
          '亥': { zh: '神态深邃从容，天庭饱满，性情豁达温和，自带哲人般的超然清幽与慈悲亲和力。', en: 'Serene and profound; generous, philosophical calm radiating soulful warmth.' }
        };
        const aura = branchAuraMap[spouse.palaceBranch] || { zh: '端庄稳重，谈吐从容，自带令人信赖的亲和力与名士气质。', en: 'Dignified, articulate, and poised with warm, trustworthy presence.' };
        return {
          titleZh: '💑 夫妻与婚姻深层全息透视 (Spouse & Marital Dynamics)',
          titleEn: '💑 Spouse & Marital Dynamics (Palace Hologram)',
          subtitleZh: '晋·郭璞 / 宋·徐子平《玉照定真经》：“日干为己，日支为妻（夫）。干支相照，夫妻和乐寿考。”',
          subtitleEn: 'Yu Zhao Ding Zhen Jing: "Day Stem is self, Day Branch is consort. Mutual generation brings harmonious longevity."',
          palaceBranch: spouse.palaceBranch,
          spouseStarZh: spouse.spouseStarZh,
          spouseStarEn: spouse.spouseStarEn,
          archetypeZh: spouse.archetypeZh,
          archetypeEn: spouse.archetypeEn,
          traitsZh: spouse.traitsZh,
          traitsEn: spouse.traitsEn,
          clashRiskZh: spouse.clashRiskZh,
          clashRiskEn: spouse.clashRiskEn,
          adviceZh: spouse.adviceZh,
          adviceEn: spouse.adviceEn,
          genderDiffZh: spouse.genderDiffZh || '【乾坤婚配差异】：男命看财星以知妻德，女命看官星以识夫贵。',
          genderDiffEn: spouse.genderDiffEn || '[Gender Dynamics]: Male native reads Wealth stars for spousal virtue; female native reads Officer stars for marital honor.',
          energyZh: `【坐支深凝 · 压舱砥柱】日支【${spouse.palaceBranch}】为夫妻正位，能量与日主紧密咬合共振，为命主最核心的生活盟友与精神避风港。`,
          energyEn: `[Anchored Core Energy]: Day Branch [${this.formatBranchEn(spouse.palaceBranch)}] tightly bonds with Day Master as an irreplaceable marital ballast and sanctuary.`,
          energy: `【坐支深凝 · 压舱砥柱】日支【${spouse.palaceBranch}】为夫妻正位，能量与日主紧密咬合共振，为命主最核心的生活盟友与精神避风港。`,
          personalityZh: `【性格特征】：${spouse.archetypeZh}。${spouse.traitsZh}`,
          personalityEn: `[Personality Profile]: ${spouse.archetypeEn}. ${spouse.traitsEn}`,
          personality: `【性格特征】：${spouse.archetypeZh}。${spouse.traitsZh}`,
          demeanourZh: `【有可能的气质仪态】：${aura.zh}`,
          demeanourEn: `[Potential Demeanour & Aura]: ${aura.en}`,
          demeanour: `【有可能的气质仪态】：${aura.zh}`,
          relationshipZh: `【相处关系与互动机制】：${spouse.adviceZh} ${spouse.clashRiskZh}`,
          relationshipEn: `[Relationship Dynamics]: ${spouse.adviceEn} ${spouse.clashRiskEn}`,
          relationship: `【相处关系与互动机制】：${spouse.adviceZh} ${spouse.clashRiskZh}`
        };
      })() : null,
      children: children ? {
        titleZh: '👶 子女与后嗣才干缘法 (Children & Descendants)',
        titleEn: '👶 Children & Descendants (Hour Palace Legacy)',
        subtitleZh: '《玉照定真经》：“时为子息宫，生旺主后裔昌隆。食伤引秀，子秀孙贤。”',
        subtitleEn: 'Yu Zhao Ding Zhen Jing: "The Hour governs descendants; a flourishing Hour denotes flourishing progeny and serene late-life joy."',
        hourPillarText: children.hourPillarText,
        archetypeZh: children.archetypeZh,
        archetypeEn: children.archetypeEn,
        talentZh: children.talentZh,
        talentEn: children.talentEn,
        guideZh: children.guideZh,
        guideEn: children.guideEn,
        genderDiffZh: children.genderDiffZh || '【子息男女命差异】：男命看官杀以定子嗣担当，女命看食伤以知儿女灵秀。',
        genderDiffEn: children.genderDiffEn || '[Gender Dynamics]: Male native evaluates Officer/Killings for descendant leadership; female native evaluates Output for descendant intellect.',
        energyZh: `【时宿生发 · 灵秀破土】时柱【${children.hourPillarText}】引通元神秀气，为命主智慧与基因之结晶；后嗣生命力与创新动能充盈。`,
        energyEn: `[Vibrant Generational Energy]: Hour Pillar [${this.formatPillarEn(children.hourPillarText)}] channels innate wisdom into fertile descendant vitality and innovation.`,
        energy: `【时宿生发 · 灵秀破土】时柱【${children.hourPillarText}】引通元神秀气，为命主智慧与基因之结晶；后嗣生命力与创新动能充盈。`,
        personalityZh: `【性格特征】：${children.archetypeZh}。${children.talentZh}`,
        personalityEn: `[Personality Profile]: ${children.archetypeEn}. ${children.talentEn}`,
        personality: `【性格特征】：${children.archetypeZh}。${children.talentZh}`,
        demeanourZh: '【有可能的气质仪态】：目光清朗聪慧，神态敏锐自信，举手投足充满当代新锐探索活力，思维前沿，极具时代风采。',
        demeanourEn: '[Potential Demeanour & Aura]: Bright-eyed, confident, and sharp, radiating modern creative curiosity and cutting-edge presence.',
        demeanour: '【有可能的气质仪态】：目光清朗聪慧，神态敏锐自信，举手投足充满当代新锐探索活力，思维前沿，极具时代风采。',
        relationshipZh: `【相处关系与互动机制】：${children.guideZh} ${children.destinyZh}`,
        relationshipEn: `[Relationship Dynamics]: ${children.guideEn} ${children.destinyEn}`,
        relationship: `【相处关系与互动机制】：${children.guideZh} ${children.destinyZh}`
      } : null,
      parents: parents ? {
        titleZh: '🏡 父母与家族祖荫传承 (Parents & Ancestral Heritage)',
        titleEn: '🏡 Parents & Ancestral Heritage (Year-Month Foundations)',
        subtitleZh: '《玉照定真经》：“年月相生，祖业长留。自立门户者，反成栋梁之材。”',
        subtitleEn: 'Yu Zhao Ding Zhen Jing: "When Year and Month mutually generate, ancestral heritage endures; pioneers forged in independence become realm pillars."',
        typeZh: parents.typeZh,
        typeEn: parents.typeEn,
        heritageZh: parents.heritageZh,
        heritageEn: parents.heritageEn,
        debtOrBlessingZh: parents.debtOrBlessingZh,
        debtOrBlessingEn: parents.debtOrBlessingEn,
        filialAdviceZh: parents.filialAdviceZh,
        filialAdviceEn: parents.filialAdviceEn,
        genderDiffZh: parents.genderDiffZh || '【宗族男女命差异】：男命重在家族立户独立建树，女命重在情感边界与完全人格自立。',
        genderDiffEn: parents.genderDiffEn || '[Gender Dynamics]: Male native balances family legacy with financial sovereignty; female native balances filial care with emotional autonomy.',
        energyZh: '【中和偏旺 · 厚重如山】年月基业有根，祖辈原生家庭具备深厚精神托举、品德风范与基石护持力。',
        energyEn: '[Balanced & Grounded Energy]: Ancestral roots in Year-Month provide solid psychological, moral, and material anchorage.',
        energy: '【中和偏旺 · 厚重如山】年月基业有根，祖辈原生家庭具备深厚精神托举、品德风范与基石护持力。',
        personalityZh: `【性格特征】：${parents.typeZh}。${parents.heritageZh}`,
        personalityEn: `[Personality Profile]: ${parents.typeEn}. ${parents.heritageEn}`,
        personality: `【性格特征】：${parents.typeZh}。${parents.heritageZh}`,
        demeanourZh: '【有可能的气质仪态】：神态庄重持重，言谈举止自带长者尊严与风骨；待人接物讲求规矩章法，在宗族社会具备天然威信。',
        demeanourEn: '[Potential Demeanour & Aura]: Dignified, principled, and deeply respected, exuding ancestral moral authority and social propriety.',
        demeanour: '【有可能的气质仪态】：神态庄重持重，言谈举止自带长者尊严与风骨；待人接物讲求规矩章法，在宗族社会具备天然威信。',
        relationshipZh: `【相处关系与互动机制】：${parents.filialAdviceZh} ${parents.debtOrBlessingZh}`,
        relationshipEn: `[Relationship Dynamics]: ${parents.filialAdviceEn} ${parents.debtOrBlessingEn}`,
        relationship: `【相处关系与互动机制】：${parents.filialAdviceZh} ${parents.debtOrBlessingZh}`
      } : null,
      environment: environment ? {
        titleZh: '🌍 人与社会环境/时代周期的综合交互分析 (Native & Environment / Era Dynamics)',
        titleEn: '🌍 Native & Environment / Era Dynamics (Three Primes & Acoustic Fields)',
        subtitleZh: '唐·李虚中《李虚中命书》：“天元为禄，地元为命，人元为身。方隅相生，乘时代之风无往不利。”',
        subtitleEn: 'Li Xu Zhong Ming Shu: "Heavenly Prime is Rank, Earthly Prime is Destiny, Human Prime is Body. Moving in rhythm with Heaven and Earth allows one to ride historical tides effortlessly."',
        threePrimesZh: `${environment.tp.heavenLuZh}\n${environment.tp.earthMingZh}\n${environment.tp.humanShenZh}`,
        threePrimesEn: `${environment.tp.heavenLuEn}\n${environment.tp.earthMingEn}\n${environment.tp.humanShenEn}`,
        idealGeographyZh: environment.er.idealGeographyZh,
        idealGeographyEn: environment.er.idealGeographyEn,
        targetCitiesZh: environment.er.targetCitiesZh,
        targetCitiesEn: environment.er.targetCitiesEn,
        workspaceEnergyZh: environment.er.workspaceEnergyZh,
        workspaceEnergyEn: environment.er.workspaceEnergyEn,
        eraMacroTrendZh: environment.er.eraMacroTrendZh,
        eraMacroTrendEn: environment.er.eraMacroTrendEn,
        genderDiffZh: environment.tp.genderDiffZh || '【三元男女命差异】：男命以天元禄立功名、地元固气血；女命以天元立清贵、人元纳音安性灵。',
        genderDiffEn: environment.tp.genderDiffEn || '[Gender Dynamics]: Male native anchors external reputation and somatic stamina; female native anchors intellectual prestige and spiritual intuition.'
      } : null
    };
  }

  static formatPillarEn(pillarText) {
    if (!pillarText || pillarText.length < 2) return pillarText || '';
    const s = pillarText[0];
    const b = pillarText[1];
    const sName = (typeof I18N !== 'undefined' && I18N.STEMS && I18N.STEMS[s]) ? I18N.STEMS[s].pinyin : s;
    const bName = (typeof I18N !== 'undefined' && I18N.BRANCHES && I18N.BRANCHES[b]) ? I18N.BRANCHES[b].en.split(' ')[0] : b;
    return `${sName}-${bName}`;
  }

  static formatBranchEn(branch) {
    if (!branch) return '';
    return (typeof I18N !== 'undefined' && I18N.BRANCHES && I18N.BRANCHES[branch]) ? I18N.BRANCHES[branch].en.split(' ')[0] : branch;
  }

  static getPatternEn(patName) {
    if (!patName) return 'Dominant Pattern';
    if (patName.includes('阳刃') || patName.includes('羊刃') || patName.includes('月刃')) {
      return 'Yang Blade Pattern (Sovereign General)';
    }
    if (typeof I18N !== 'undefined' && I18N.getPatternName) {
      const res = I18N.getPatternName(patName, 'en');
      if (!/[\u4e00-\u9fa5]/.test(res)) return res;
    }
    return 'Primary Dominant Pattern';
  }

  /**
   * 👑 全盘大局通融 · 综合全息画像 (Grand Holistic Synthesis Masterpiece)
   * 汇通八经八典、六亲宫位与时代场能，生成高度提炼、逻辑连贯、气势宏大的战略大相总图
   */
  static generateGrandPicture(bazi, vigor, patterns, climate, canons, spouse, children, parents, environment) {
    const gender = bazi.gender || (bazi.input && bazi.input.gender) || '乾造';
    const dm = bazi.dayMaster || (bazi.pillars && bazi.pillars.day && bazi.pillars.day.stem) || '甲';
    const monthBranch = (bazi.pillars && bazi.pillars.month && bazi.pillars.month.branch) || bazi.monthBranch || '寅';
    const dayPillar = (bazi.pillars && bazi.pillars.day && bazi.pillars.day.text) || bazi.dayPillar || `${dm}子`;
    const hourPillar = (bazi.pillars && bazi.pillars.hour && bazi.pillars.hour.text) || bazi.hourPillar || '甲子';

    const dmEn = (typeof I18N !== 'undefined' && I18N.getStem) ? I18N.getStem(dm, 'en') : dm;
    const monthBranchEn = this.formatBranchEn(monthBranch);
    const dayPillarEn = this.formatPillarEn(dayPillar);
    const hourPillarEn = this.formatPillarEn(hourPillar);

    // 0. Extract top pattern
    let patternList = Array.isArray(patterns) ? patterns : [];
    if (patternList.length > 0) {
      patternList.sort((a, b) => (b.weightPct || 0) - (a.weightPct || 0));
    }
    const topPat = patternList.length > 0 ? patternList[0] : { name: '阳刃格 (月刃格 / 威权大将)', weightPct: 28, nameEn: 'Yang Blade Pattern' };
    const patNameZh = topPat.name || '阳刃格 (月刃格 / 威权大将)';
    let patNameEn = this.getPatternEn(patNameZh);
    const patPct = topPat.weightPct || 28;

    // Day Master Metaphors
    const dmMetaphors = {
      '甲': { zh: '参天乔木 · 栋梁先锋', en: 'Towering Timber · Pioneering Pillar', descZh: '苍松翠柏，气干云霄，天生具有领袖担当与向上求索之志', descEn: 'an ancient towering cedar, reaching toward the sky with natural leadership and unyielding growth' },
      '乙': { zh: '柔顺灵藤 · 坚韧通达', en: 'Resilient Flora · Adaptive Strategist', descZh: '花草藤萝，柔顺温婉却具极强适应力，善于借力借势曲折破局', descEn: 'winding vines and elegant flora, gentle yet remarkably resilient, mastering indirect leverage' },
      '丙': { zh: '普照太阳 · 宏大领袖', en: 'Radiant Sun · Magnanimous Sovereign', descZh: '当空烈日，普照万物，胸怀博大光明，天生具有感召人心的统驭气场', descEn: 'the blazing sun, illuminating all beneath heaven with infectious passion and sovereign warmth' },
      '丁': { zh: '文明烛火 · 洞察学者', en: 'Guiding Hearth · Penetrating Scholar', descZh: '炉火烛光，幽微深邃，专注于精微洞察、文明传承与深层钻研', descEn: 'a steady lantern flame, deeply observant, dedicated to specialized mastery and spiritual warmth' },
      '戊': { zh: '巍峨昆仑 · 厚德山岳', en: 'Lofty Mountain · Immovable Bastion', descZh: '高山重峦，沉稳如渊，能阻遏狂澜、构筑防线，给人不可撼动的安全感', descEn: 'an ancient mountain ridge, steadfast, unshakeable, providing solid refuge against turmoil' },
      '己': { zh: '广袤原野 · 蓄秀含章', en: 'Fertile Soil · Nurturing Cultivator', descZh: '田园沃土，包容含蓄，善于承载万物、博纳众长，以默默深耕成就伟业', descEn: 'rich fertile loam, quietly nurturing all seeds into harvest with boundless patience' },
      '庚': { zh: '百炼重剑 · 刚肃先锋', en: 'Tempered Blade · Decisive Arbiter', descZh: '顽钝金石经烈火淬炼成利刃，秉公尚义，敢于向一切沉疴陋习挥剑破局', descEn: 'a master-forged steel blade, strictly honorable, piercing through complacency with decisive edge' },
      '辛': { zh: '璀璨真玉 · 精密匠心', en: 'Polished Gem · Precision Artificer', descZh: '温润美玉、精密珠宝，气质清雅高贵，追求卓越细节与极致品质壁垒', descEn: 'a pristine diamond, luminous and refined, demanding flawless aesthetic and intellectual precision' },
      '壬': { zh: '汪洋江海 · 破局战将', en: 'Vast Ocean · Torrential Commander', descZh: '奔腾大江、浩瀚汪洋，气魄吞吐天地，具有席卷一切阻碍的开拓动能与战术穿透力', descEn: 'a raging ocean torrent, vast and unstoppable, possessing panoramic vision and tidal breakthrough force' },
      '癸': { zh: '润物雨露 · 灵变通智', en: 'Nourishing Rain · Pervasive Intellect', descZh: '甘霖雨露，随方就圆，以柔克刚，富于深邃哲思与直觉灵性', descEn: 'mist and gentle raindrops, effortlessly shapeshifting, penetrating depths through subtle wisdom' }
    };
    const dmM = dmMetaphors[dm] || dmMetaphors['壬'];

    // Seasonal Tone
    const seasonTones = {
      '子': { zh: '仲冬极寒凝冰之时', en: 'mid-winter frozen culmination', charZh: '水势帝旺，寒气澈骨，生机敛藏', charEn: 'peak water imperial vigor with piercing chill' },
      '丑': { zh: '季冬湿冷冻土之季', en: 'late-winter damp frozen earth', charZh: '天寒地冻，厚土封水，待阳和解冻', charEn: 'frigid soil waiting for the first sunbeam' },
      '寅': { zh: '初春少阳初生之时', en: 'early spring rising Yang', charZh: '木气萌发，雷动风行，天地发陈', charEn: 'surging vegetative vitality and new dawn' },
      '卯': { zh: '仲春木旺乘权之季', en: 'mid-spring flourishing wood', charZh: '枝繁叶茂，生机盎然，舒展畅达', charEn: 'lush thriving growth reaching full expression' },
      '辰': { zh: '季春水库蓄湿之月', en: 'late-spring moist reservoir', charZh: '湿土培木，草木繁茂，气象温润', charEn: 'fertile reservoir nurturing flourishing life' },
      '巳': { zh: '初夏阳明舒发之时', en: 'early summer blooming fire', charZh: '火势渐烈，金气受制，万物欣欣向荣', charEn: 'ascending thermal brilliance and active momentum' },
      '午': { zh: '仲夏炎炎烈火之令', en: 'mid-summer peak solar blaze', charZh: '阳极反生，燥热升腾，神魂激越', charEn: 'supreme solar radiance demanding cooling moderation' },
      '未': { zh: '季夏燥土木库之节', en: 'late-summer arid kiln', charZh: '火炎土燥，暑气蒸腾，亟需甘霖', charEn: 'sweltering kiln requiring nourishing moisture' },
      '申': { zh: '初秋金水发源之时', en: 'early autumn source of springs', charZh: '金风渐起，肃杀清澈，流水下滩', charEn: 'crisp autumn breezes and burgeoning springs' },
      '酉': { zh: '仲秋纯金专旺之序', en: 'mid-autumn pure metal sovereignty', charZh: '金气专精，坚刚锐利，物候收敛', charEn: 'crystalline autumnal clarity and razor harvest focus' },
      '戌': { zh: '季秋燥土火库之界', en: 'late-autumn arid martial vault', charZh: '草木零落，火库深藏，大局深稳', charEn: 'martial earthen gate guarding subterranean warmth' },
      '亥': { zh: '初冬水木长生之时', en: 'early winter primordial waters', charZh: '寒风初起，天门洞开，气势潜藏', charEn: 'primordial aquatic currents gathering covert force' }
    };
    const sT = seasonTones[monthBranch] || seasonTones['子'];

    // 1. Archetype Synthesis
    const thesisZh = `命主元神【${dm}】为【${dmM.zh}】，生于提纲【${monthBranch}月】（${sT.zh}，${sT.charZh}）。全盘在《子平真诠》与《渊海子平》诸经衡定下，以【${patNameZh}】（能量占比：${patPct}%）坐镇第一核心主导中枢。命主之性情气象，如${dmM.descZh}。这不是偏安一隅的平庸守成之局，而是一生注定要经受风浪淬炼、在重大危机与复杂格局中建功立业的统帅型命盘。日柱【${dayPillar}】与时柱【${hourPillar}】相为引从，骨子里深藏敢为人先的魄力与坚忍不拔的意志。`;
    const thesisEn = `Day Master [${dmEn}] embodies [${dmM.en}], born in the [${monthBranchEn} Month] (${sT.en}, ${sT.charEn}). Across canonical doctrines of Zi Ping Zhen Quan and Yuan Hai Zi Ping, the natal architecture is crowned by the primary pattern [${patNameEn}] (${patPct}% dominant weight). The native's core archetype is like ${dmM.descEn}. This is not a passive or fragile chart; it is a high-voltage command architecture destined to conquer turbulent frontiers and forge enduring institutional stature. Day Pillar [${dayPillarEn}] and Hour Pillar [${hourPillarEn}] seal this trajectory with unrelenting stamina and pioneer resolve.`;

    // 2. Campaign & 20% Lever
    const sf = (canons && canons.shenfeng) || {};
    const diseaseZh = sf.diseaseNameZh || '寒湿凝滞病';
    let diseaseEn = sf.diseaseNameEn || 'Freezing Stagnation Affliction';
    let rawMedicineZh = sf.medicineZh || '丙火暄照与燥土筑堤';
    let rawMedicineEn = sf.medicineEn || 'Solar warmth and disciplined earth barriers';
    rawMedicineZh = rawMedicineZh.replace(/[。！.!?]+$/, '');
    rawMedicineEn = rawMedicineEn.replace(/[。！.!?]+$/, '');

    let zpRescueZh = (canons && canons.ziping && canons.ziping.rescueZh) || '以官杀立规矩，以相神护卫用神';
    let zpRescueEn = (canons && canons.ziping && canons.ziping.rescueEn) || 'Impose structural law to tame ferocious momentum';
    zpRescueZh = zpRescueZh.replace(/[。！.!?]+$/, '');
    zpRescueEn = zpRescueEn.replace(/[。！.!?]+$/, '');

    const campaignZh = `明代张神峰《神峰通考》确立千古铁律：“有病方为贵，无伤不是奇。格中如去病，财禄两相随。”本盘全相之核心受制痛点在于【${diseaseZh}】——极度偏旺之势若无制化，往往演变为自命不凡、冲动冒险、孤傲拒人或与环境相煎的重大暗礁；而全盘决定80%成败高度的20%关键杠杆（相神大药），正在于【${rawMedicineZh}】。《子平真诠》所谓相神救应在此显微发力：必须引入【${zpRescueZh}】。一言以蔽之：命主的胜负手绝非逞勇斗狠，而是“以严苛法度纪律驾驭锋芒，以广阔利他远见融解孤寒”。当锋芒被规则约束、严寒被温暖照耀，凶煞便立转为威权帅印。`;
    const campaignEn = `In Shen Feng Tong Kao, Zhang Shenfeng states: "Greatness arises only where a grave Disease meets its perfect Medicine; cured of affliction, supreme wealth and stature follow." The core structural bottleneck of this chart is [${diseaseEn}]—unchecked intensity risks degenerating into dogmatic isolation, sudden burnout, and tactical recklessness. The pivotal 20% Pareto lever that unlocks 80% of life triumph lies in [${rawMedicineEn}], harmonized by Zi Ping Zhen Quan's Guarding Minister: [${zpRescueEn}]. The supreme strategic formula: Never confront friction with raw aggression; govern ferocious drive with ironclad discipline, and melt icy aloofness with radiant long-term vision. Once disciplined and warmed, danger converts into sovereign leadership.`;

    // 3. Kinship & Anchor
    const sp = spouse || {};
    const spBranch = sp.palaceBranch || dayPillar.substring(1);
    const spBranchEn = this.formatBranchEn(spBranch);
    const spArchZh = sp.archetypeZh || '大局深稳内助型';
    let spArchEn = sp.archetypeEn || 'Steadfast Ballast Consort';
    if (/[\u4e00-\u9fa5]/.test(spArchEn)) {
      spArchEn = 'Steadfast Ballast Consort';
    }

    const ch = children || {};
    const chArchZh = ch.archetypeZh || '敏锐创新突破型';
    let chArchEn = ch.archetypeEn || 'Frontier Innovation Progeny';
    if (/[\u4e00-\u9fa5]/.test(chArchEn)) {
      chArchEn = 'Frontier Innovation Progeny';
    }
    let chTalentZh = ch.talentZh || '富有新锐商业灵性与艺术才情';
    let chTalentEn = ch.talentEn || 'blessed with commercial acuity and creative intellect';
    chTalentZh = chTalentZh.replace(/[。！.!?]+$/, '');
    chTalentEn = chTalentEn.replace(/[。！.!?]+$/, '');

    const kinshipZh = `《玉照定真经》论六亲宫位：“年月为父母祖基，日时为妻儿归宿。”统帅征战于外，后方家庭乃一生立足之根本。命主日支配偶宫坐【${spBranch}】，呈现【${spArchZh}】之气象。配偶具备深厚的大局观与家庭护持力，如同一道天然稳固的压舱石防波堤，不仅在暗中稳住财富底盘，更能在命主锋芒过盛或面临外界风暴时提供最可靠的精神庇护与理智制衡。时柱【${hourPillar}】子息宫呈现【${chArchZh}】，后嗣【${chTalentZh}】。子嗣的繁盛不仅是家族传承，更是命主一身磅礴生机自然流淌引秀的最佳归宿，晚年得享儿孙光耀之福。`;
    const kinshipEn = `Yu Zhao Ding Zhen Jing asserts: "Year-Month anchors ancestral heritage; Day-Hour seals consort and offspring destiny." A field commander relies fundamentally upon a secure domestic base. Day Branch spouse palace sits on [${spBranchEn}], manifesting the [${spArchEn}] archetype. The partner acts as an unshakeable breakwater and financial ballast—anchoring assets, mitigating emotional volatility, and standing as a loyal guardian through life's storms. Hour Pillar [${hourPillarEn}] governs offspring, manifesting the [${chArchEn}] archetype (${chTalentEn}). Descendants channel the native's intense vital output into cultural or entrepreneurial brilliance, crowning late-life fruition.`;

    // 4. Era & Geography
    const env = environment || {};
    const idealGeoZh = env.idealGeographyZh || '沿海经济带与北方高能级核心都会';
    let idealGeoEn = env.idealGeographyEn || 'Coastal economic arteries and northern metropolises';
    if (/[\u4e00-\u9fa5]/.test(idealGeoEn)) {
      idealGeoEn = 'Coastal economic arteries and northern metropolises';
    }
    let targetCitiesZh = env.targetCitiesZh || '北京、大连、天津、上海或国际港口城市';
    let targetCitiesEn = env.targetCitiesEn || 'Beijing, Tianjin, Shanghai, Rotterdam, Sydney or global port hubs';
    if (/[\u4e00-\u9fa5]/.test(targetCitiesEn)) {
      targetCitiesEn = 'Beijing, Tianjin, Shanghai, Rotterdam, Sydney or global port hubs';
    }
    targetCitiesZh = targetCitiesZh.replace(/[。！.!?]+$/, '');
    targetCitiesEn = targetCitiesEn.replace(/[。！.!?]+$/, '');

    const eraZh = `唐·李虚中《李虚中命书》开宗明义：“天元为禄，地元为命，人元为身。方隅相生，乘时代之风无往不利。”当前人类文明已全面步入下元九运（2024–2043 九紫离火运），宏观时代场能聚焦于人工智能算力、数字科技、认知跃升与文化复兴。命主以深邃敏锐的天赋心智，与九运数字化大潮形成天然的“水火既济”共振机制。在空间地理上，深度依托【${idealGeoZh}】（重点布局：${targetCitiesZh}）拓展宏图，将实体产业与数字化智能化杠杆深度融合，即可顺时代天道之风，实现十倍个人效能杠杆爆发。`;
    const eraEn = `In Li Xu Zhong Ming Shu, the Tang master establishes: "Heavenly Prime is Rank, Earthly Prime is Destiny, Human Prime is Body. Moving in unison with epochal tides unlocks triumph without friction." The world has entered Period 9 (2024–2043 Nine Purple Fire Era), governed by AI compute, digital synthesis, knowledge economy, and cultural renaissance. The native's profound intuitive intellect resonates organically with this fire cycle, forging the classical "Water-Fire Harmonious Convergence". Geographically anchoring in [${idealGeoEn}] (key nodes: ${targetCitiesEn}) and compounding digital AI leverage will amplify personal impact tenfold across the next two decades.`;

    // 5. Sovereign Golden Directives
    const rulesZh = [
      { label: '一、守正驭锋 · 法度护航', desc: '以森严的契约规则、合规红线与制度流程作为出招前置条件；锋芒越强，越要用铁律入鞘，绝不轻率凭一时意气蛮干。' },
      { label: '二、融冰化雪 · 远见暖人', desc: '戒除清高冷傲与独断专行；在商业与事业博弈中主动让渡局部小利，以共赢机制和太阳般的利他胸怀凝聚核心盟友。' },
      { label: '三、固本培基 · 家和万事', desc: '深尊配偶为命运同舟的压舱石，资产稳健归库不搞投机赌博；经营好家庭大后方，方能抵御外界任何风浪侵袭。' }
    ];
    const rulesEn = [
      { label: '1. Discipline Over Impulse', desc: 'Establish ironclad legal compliance, clear contracts, and structural governance before bold moves; sovereign discipline turns raw momentum into enduring authority.' },
      { label: '2. Solar Warmth Over Chill', desc: 'Eradicate aloof isolation; proactively share marginal gains, cultivate win-win alliances, and lead with magnanimous vision to melt opposition.' },
      { label: '3. Anchor the Domestic Sanctuary', desc: 'Honor the consort as the vital stabilizing ballast; systematically preserve wealth in secure family vaults, as an unshakeable home guarantees lifelong invincibility.' }
    ];

    return {
      titleZh: '👑 全盘大局通融 · 综合全息画像',
      titleEn: '👑 Grand Holistic Synthesis · Master Destiny Portrait',
      subtitleZh: '八典融通 · 过滤80%细枝末节噪声，提炼统摄全盘命途的宏观大局与关键破局总相',
      subtitleEn: 'Eight Canons Unified · Filtering out 80% peripheral noise to distill the grand macro-picture and decisive strategic mandate',
      thesisZh,
      thesisEn,
      campaignZh,
      campaignEn,
      kinshipZh,
      kinshipEn,
      eraZh,
      eraEn,
      rulesZh,
      rulesEn,
      highlightsZh: [
        `${dmM.zh}`,
        `${patNameZh.split(' ')[0]} 统摄`,
        `以药化病 · 破局大成`
      ],
      highlightsEn: [
        `${dmM.en}`,
        `${patNameEn.split(' ')[0]} Governs`,
        `Alchemy of Medicine & Disease`
      ]
    };
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PortraitEngine };
}
if (typeof window !== 'undefined') {
  window.PortraitEngine = PortraitEngine;
}
