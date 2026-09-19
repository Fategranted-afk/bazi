/**
 * 算法反向闭环：基于历史事件的生时校准引擎 (Bayesian Birth Time Rectification Engine)
 * Reverses the birth hour from discrete historical timestamped life events using Bayesian MAP estimation.
 * Traverses 13 candidate hours (早子, 丑, 寅, 卯, 辰, 巳, 午, 未, 申, 酉, 戌, 亥, 夜子),
 * evaluates static structure + dynamic transit resonance, and yields Softmax-normalized confidence rankings.
 * Includes tie-breaker discriminatory questions for bimodal competitions.
 * 100% Offline-First, deterministic, and fully bilingual (zh/en).
 */

class RectificationEngine {
  // 13 Discrete Hour Hypothesis Candidates
  static CANDIDATE_HOURS = [
    { id: 'early_rat', nameZh: '早子时 (00:00 - 01:00)', nameEn: 'Early Rat (00:00 - 01:00)', hour: 0, minute: 30, branch: '子' },
    { id: 'chou',      nameZh: '丑时 (01:00 - 03:00)',   nameEn: 'Ox Hour (01:00 - 03:00)',   hour: 2, minute: 0,  branch: '丑' },
    { id: 'yin',       nameZh: '寅时 (03:00 - 05:00)',   nameEn: 'Tiger Hour (03:00 - 05:00)',hour: 4, minute: 0,  branch: '寅' },
    { id: 'mao',       nameZh: '卯时 (05:00 - 07:00)',   nameEn: 'Rabbit Hour (05:00 - 07:00)',hour: 6, minute: 0, branch: '卯' },
    { id: 'chen',      nameZh: '辰时 (07:00 - 09:00)',   nameEn: 'Dragon Hour (07:00 - 09:00)',hour: 8, minute: 0, branch: '辰' },
    { id: 'si',        nameZh: '巳时 (09:00 - 11:00)',   nameEn: 'Snake Hour (09:00 - 11:00)', hour: 10, minute: 0,branch: '巳' },
    { id: 'wu',        nameZh: '午时 (11:00 - 13:00)',   nameEn: 'Horse Hour (11:00 - 13:00)', hour: 12, minute: 0,branch: '午' },
    { id: 'wei',       nameZh: '未时 (13:00 - 15:00)',   nameEn: 'Goat Hour (13:00 - 15:00)',  hour: 14, minute: 0,branch: '未' },
    { id: 'shen',      nameZh: '申时 (15:00 - 17:00)',   nameEn: 'Monkey Hour (15:00 - 17:00)',hour: 16, minute: 0,branch: '申' },
    { id: 'you',       nameZh: '酉时 (17:00 - 19:00)',   nameEn: 'Rooster Hour (17:00 - 19:00)',hour: 18, minute: 0,branch: '酉' },
    { id: 'xu',        nameZh: '戌时 (19:00 - 21:00)',   nameEn: 'Dog Hour (19:00 - 21:00)',   hour: 20, minute: 0,branch: '戌' },
    { id: 'hai',       nameZh: '亥时 (21:00 - 23:00)',   nameEn: 'Pig Hour (21:00 - 23:00)',   hour: 22, minute: 0,branch: '亥' },
    { id: 'late_rat',  nameZh: '夜子时 (23:00 - 24:00)', nameEn: 'Late Rat (23:00 - 24:00)',  hour: 23, minute: 30,branch: '子' }
  ];

  // Standard 60 JiaZi stems & branches
  static STEMS = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
  static BRANCHES = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];

  // Six Clashes (六冲)
  static SIX_CLASHES = {
    '子': '午', '午': '子', '丑': '未', '未': '丑',
    '寅': '申', '申': '寅', '卯': '酉', '酉': '卯',
    '辰': '戌', '戌': '辰', '巳': '亥', '亥': '巳'
  };

  // Six Combinations (六合)
  static SIX_COMBINES = {
    '子': '丑', '丑': '子', '寅': '亥', '亥': '寅',
    '卯': '戌', '戌': '卯', '辰': '酉', '酉': '辰',
    '巳': '申', '申': '巳', '午': '未', '未': '午'
  };

  // Three Combinations (三合)
  static THREE_COMBINES = {
    '申': ['子', '辰'], '子': ['申', '辰'], '辰': ['申', '子'],
    '亥': ['卯', '未'], '卯': ['亥', '未'], '未': ['亥', '卯'],
    '寅': ['午', '戌'], '午': ['寅', '戌'], '戌': ['寅', '午'],
    '巳': ['酉', '丑'], '酉': ['巳', '丑'], '丑': ['巳', '酉']
  };

  // Yang Blade branches per Heavenly Stem
  static YANG_BLADES = {
    '甲': '卯', '乙': '辰', '丙': '午', '丁': '未', '戊': '午',
    '己': '未', '庚': '酉', '辛': '戌', '壬': '子', '癸': '丑'
  };

  // Post Horse (驿马) by Day/Year branch
  static POST_HORSES = {
    '申': '寅', '子': '寅', '辰': '寅',
    '寅': '申', '午': '申', '戌': '申',
    '巳': '亥', '酉': '亥', '丑': '亥',
    '亥': '巳', '卯': '巳', '未': '巳'
  };

  static STEM_PINYIN = {
    '甲': 'Jia', '乙': 'Yi', '丙': 'Bing', '丁': 'Ding', '戊': 'Wu',
    '己': 'Ji', '庚': 'Geng', '辛': 'Xin', '壬': 'Ren', '癸': 'Gui'
  };

  static BRANCH_PINYIN = {
    '子': 'Zi', '丑': 'Chou', '寅': 'Yin', '卯': 'Mao', '辰': 'Chen', '巳': 'Si',
    '午': 'Wu', '未': 'Wei', '申': 'Shen', '酉': 'You', '戌': 'Xu', '亥': 'Hai'
  };

  static BRANCH_EN = {
    '子': 'Rat', '丑': 'Ox', '寅': 'Tiger', '卯': 'Rabbit', '辰': 'Dragon', '巳': 'Snake',
    '午': 'Horse', '未': 'Goat', '申': 'Monkey', '酉': 'Rooster', '戌': 'Dog', '亥': 'Pig'
  };

  /**
   * Calculate transit annual stem-branch for any Gregorian year
   */
  static getAnnualPillar(year) {
    const stemIdx = (year - 4) % 10;
    const branchIdx = (year - 4) % 12;
    const stem = this.STEMS[(stemIdx + 10) % 10];
    const branch = this.BRANCHES[(branchIdx + 12) % 12];
    return { stem, branch, name: `${stem}${branch}` };
  }

  /**
   * Prior Probability Distribution P(h_i)
   * If user provides approximate window (e.g. centerHour = 19 for evening), uses Gaussian truncation.
   * Otherwise returns uniform prior 1/13.
   */
  static computePriorLog(approximateHour = null) {
    const priors = [];
    if (approximateHour === null || approximateHour === undefined || approximateHour < 0) {
      const uniformLog = Math.log(1.0 / this.CANDIDATE_HOURS.length);
      return this.CANDIDATE_HOURS.map(() => uniformLog);
    }

    const sigma = 3.5; // Gaussian standard deviation in hours
    let sumWeight = 0;
    const weights = this.CANDIDATE_HOURS.map(cand => {
      const diff = Math.min(
        Math.abs(cand.hour - approximateHour),
        24 - Math.abs(cand.hour - approximateHour)
      );
      const w = Math.exp(-Math.pow(diff, 2) / (2 * Math.pow(sigma, 2)));
      sumWeight += w;
      return w;
    });

    return weights.map(w => Math.log(Math.max(1e-6, w / sumWeight)));
  }

  /**
   * Event Resonance Score: Computes ΔΦ(e_k, h_i) log-odds gain
   */
  static evaluateEventResonance(event, baziResult, cand) {
    const evYear = parseInt(event.year, 10);
    const evType = event.type; // 'career_academic' | 'trauma_accident' | 'marriage_union' | 'childbirth' | 'relocation_travel'
    const annualPillar = this.getAnnualPillar(evYear);

    const dm = baziResult.dayMaster || '甲';
    const dayBranch = baziResult.pillars?.day?.branch || '子';
    const hourBranch = cand.branch;
    const hourStem = baziResult.pillars?.hour?.stem || '甲';

    let deltaPhi = 0;
    const evidenceNotesZh = [];
    const evidenceNotesEn = [];

    switch (evType) {
      // 1. 学业登顶 / 职场跃迁 (Positive Career / Academic)
      case 'career_academic': {
        const ziping = baziResult.zipingScore || {};
        const isFavorable = ziping.dayMasterScore >= 40 && ziping.dayMasterScore <= 80;

        // Does annual stem or branch generate/anchor Useful God?
        if (isFavorable) {
          deltaPhi += 1.8;
          evidenceNotesZh.push(`原局中和得位，流年【${annualPillar.name}】助益格局跃迁`);
          evidenceNotesEn.push(`Natal balance solid; transit year [${annualPillar.name}] elevates career momentum`);
        }

        // Hour branch contains Lu/Root or Officer/Seal
        if (hourBranch === '寅' && dm === '甲' || hourBranch === '卯' && dm === '乙' || hourBranch === '巳' && dm === '丙' || hourBranch === '午' && dm === '丁') {
          deltaPhi += 1.2;
          evidenceNotesZh.push(`时支【${hourBranch}】临日元建禄归禄位，晚运基底深厚助推功名`);
          evidenceNotesEn.push(`Hour branch [${hourBranch}] anchors Lu position, cementing achievement`);
        }

        // Penalty if heavily broken pattern
        if (annualPillar.branch === this.SIX_CLASHES[hourBranch]) {
          deltaPhi -= 0.8;
          evidenceNotesZh.push(`流年地支与时支【${hourBranch}】逢冲克，存在波折阻力`);
          evidenceNotesEn.push(`Transit branch clashes hour [${hourBranch}], inducing frictions`);
        }
        break;
      }

      // 2. 严重伤病 / 手术血光 (Physical Trauma / Surgery)
      case 'trauma_accident': {
        const yangBlade = this.YANG_BLADES[dm];

        // Is hour branch a Yang Blade?
        if (hourBranch === yangBlade) {
          deltaPhi += 2.4;
          evidenceNotesZh.push(`时支坐日主羊刃【${hourBranch}】，逢冲克岁运极易引动血光手术`);
          evidenceNotesEn.push(`Hour branch sits on Yang Blade [${hourBranch}], heightening physical trauma probability`);
        }

        // Does annual branch clash hour branch? (Hour = physical limbs / mobility)
        if (annualPillar.branch === this.SIX_CLASHES[hourBranch]) {
          deltaPhi += 2.0;
          evidenceNotesZh.push(`流年【${annualPillar.branch}】强烈对冲时支【${hourBranch}】，引动肢体门户受损`);
          evidenceNotesEn.push(`Transit [${annualPillar.branch}] directly clashes hour [${hourBranch}], indicating trauma`);
        }

        // Does annual branch clash day branch (Spouse/body)?
        if (annualPillar.branch === this.SIX_CLASHES[dayBranch]) {
          deltaPhi += 1.4;
          evidenceNotesZh.push(`流年冲动日支【${dayBranch}】身宫，元气动荡`);
          evidenceNotesEn.push(`Transit clashes day [${dayBranch}] body palace, disrupting vital essence`);
        }

        if (deltaPhi === 0) {
          deltaPhi = -1.2; // Unlikely if chart is tranquil
          evidenceNotesZh.push(`此年份岁运无剧烈刑冲时柱，血光契合度较低`);
          evidenceNotesEn.push(`No severe clashes with hour pillar this year; trauma likelihood low`);
        }
        break;
      }

      // 3. 婚恋正缘 / 结婚领证 (Spousal Union / Marriage)
      case 'marriage_union': {
        // Spousal palace (day branch) combined by annual branch
        if (annualPillar.branch === this.SIX_COMBINES[dayBranch]) {
          deltaPhi += 2.2;
          evidenceNotesZh.push(`流年【${annualPillar.branch}】与日支夫妻宫【${dayBranch}】六合，正缘天定大喜之象`);
          evidenceNotesEn.push(`Transit [${annualPillar.branch}] forms Six Harmony with spousal palace [${dayBranch}]`);
        } else if (this.THREE_COMBINES[dayBranch] && this.THREE_COMBINES[dayBranch].includes(annualPillar.branch)) {
          deltaPhi += 1.8;
          evidenceNotesZh.push(`流年【${annualPillar.branch}】三合入夫妻宫【${dayBranch}】，婚契引动`);
          evidenceNotesEn.push(`Transit [${annualPillar.branch}] forms Tri-Harmony with spousal palace [${dayBranch}]`);
        }

        // Hour branch assists union through combination
        if (annualPillar.branch === this.SIX_COMBINES[hourBranch]) {
          deltaPhi += 1.0;
          evidenceNotesZh.push(`时支【${hourBranch}】亦受流年合动，家宅开阖添彩`);
          evidenceNotesEn.push(`Hour branch [${hourBranch}] combined by transit, blessing domestic foundation`);
        }

        if (deltaPhi === 0) {
          deltaPhi = -0.5;
        }
        break;
      }

      // 4. 添丁生育 / 子嗣落地 (Childbirth - Paramount Hour Sensitivity)
      case 'childbirth': {
        // Hour Pillar is specifically the Children Palace (子女宫)!
        // High frequency indicator: annual branch clashes, combines, or touches hour branch
        if (annualPillar.branch === this.SIX_COMBINES[hourBranch]) {
          deltaPhi += 3.2;
          evidenceNotesZh.push(`流年【${annualPillar.branch}】六合时柱子女宫【${hourBranch}】，极强添丁化气应期`);
          evidenceNotesEn.push(`Transit [${annualPillar.branch}] Six-Harmonizes children palace [${hourBranch}], strongly marking childbirth`);
        } else if (annualPillar.branch === this.SIX_CLASHES[hourBranch]) {
          deltaPhi += 2.8;
          evidenceNotesZh.push(`流年【${annualPillar.branch}】冲动时柱子女宫【${hourBranch}】，门户破水喜生贵子`);
          evidenceNotesEn.push(`Transit [${annualPillar.branch}] clashes children palace [${hourBranch}], triggering arrival of progeny`);
        } else if (annualPillar.branch === hourBranch) {
          deltaPhi += 2.4;
          evidenceNotesZh.push(`流年值临子女宫位（伏吟【${hourBranch}】），添丁征兆明晰`);
          evidenceNotesEn.push(`Transit duplicates hour branch [${hourBranch}], actively signposting progeny`);
        } else {
          deltaPhi -= 1.8;
          evidenceNotesZh.push(`时柱【${hourBranch}】未受到直接干支引动，与添丁敏感度不符`);
          evidenceNotesEn.push(`Hour [${hourBranch}] shows zero kinetic stimulation during childbirth year`);
        }
        break;
      }

      // 5. 跨国搬迁 / 远行移居 (Relocation / Travel)
      case 'relocation_travel': {
        const postHorse = this.POST_HORSES[dayBranch] || this.POST_HORSES[baziResult.pillars?.year?.branch || '子'];

        // Yi Ma activated?
        if (annualPillar.branch === postHorse) {
          deltaPhi += 2.0;
          evidenceNotesZh.push(`流年正值驿马星【${annualPillar.branch}】发动，时空位移大势已成`);
          evidenceNotesEn.push(`Transit triggers Post Horse [${annualPillar.branch}], unleashing spatial relocation`);
        }

        // Hour Pillar is the Gateway (门户 / 外域)
        if (annualPillar.branch === this.SIX_CLASHES[hourBranch]) {
          deltaPhi += 2.2;
          evidenceNotesZh.push(`流年冲克时支【${hourBranch}】（门户位），举家迁移/出洋定居征兆剧烈`);
          evidenceNotesEn.push(`Transit clashes hour [${hourBranch}] (gateway palace), driving cross-border migration`);
        } else if (hourBranch === postHorse) {
          deltaPhi += 1.6;
          evidenceNotesZh.push(`时支本身坐驿马【${hourBranch}】，生来具外向远行迁徙之命`);
          evidenceNotesEn.push(`Hour sits on Post Horse [${hourBranch}], naturally predisposing native to travel`);
        }

        if (deltaPhi === 0) {
          deltaPhi = -0.6;
        }
        break;
      }

      default:
        break;
    }

    return {
      deltaPhi,
      evidenceZh: evidenceNotesZh.join('；'),
      evidenceEn: evidenceNotesEn.join('; ')
    };
  }

  /**
   * Main Inference Method: Bayesian Reverse Calibration
   * @param {Object} natalBase - { year, month, day, gender, approximateHour, useTrueSolarTime, longitude, timezone }
   * @param {Array} events - [ { year: 2020, type: 'trauma_accident', description: '骨折' }, ... ]
   * @returns {Object} Rectification analysis with Top 13 candidates, confidence, and tie-breakers
   */
  static rectifyBirthTime(natalBase, events = []) {
    if (!natalBase || !natalBase.year || !natalBase.month || !natalBase.day) {
      return null;
    }

    const priorLogs = this.computePriorLog(natalBase.approximateHour);
    const candidateResults = [];

    // 1. Evaluate each of the 13 candidate hours
    this.CANDIDATE_HOURS.forEach((cand, idx) => {
      let logLikelihood = priorLogs[idx];
      const eventEvidences = [];

      try {
        const baziRes = BaZiEngine.calculate({
          year: natalBase.year,
          month: natalBase.month,
          day: natalBase.day,
          hour: cand.hour,
          minute: cand.minute,
          gender: natalBase.gender || '乾造',
          isLateRatNextDay: (cand.hour === 23),
          useTrueSolarTime: natalBase.useTrueSolarTime || false,
          longitude: natalBase.longitude || 116.4,
          timezone: natalBase.timezone || 8.0
        });

        // Loop over each historical event
        events.forEach(ev => {
          if (!ev || !ev.year || !ev.type) return;
          const res = this.evaluateEventResonance(ev, baziRes, cand);
          logLikelihood += res.deltaPhi;
          if (res.evidenceZh) {
            eventEvidences.push({
              year: ev.year,
              type: ev.type,
              gain: res.deltaPhi,
              textZh: res.evidenceZh,
              textEn: res.evidenceEn
            });
          }
        });

        const hourStem = baziRes.pillars?.hour?.stem || '';
        const stemEn = this.STEM_PINYIN[hourStem] || hourStem;
        const branchEn = this.BRANCH_PINYIN[cand.branch] || cand.branch;
        const hourPillarZh = `${hourStem}${cand.branch}`;
        const hourPillarEn = `${stemEn}-${branchEn}`;

        candidateResults.push({
          id: cand.id,
          nameZh: cand.nameZh,
          nameEn: cand.nameEn,
          hour: cand.hour,
          minute: cand.minute,
          branch: cand.branch,
          hourPillarZh: hourPillarZh,
          hourPillarEn: hourPillarEn,
          patternZh: baziRes.zipingScore?.categoryZh || baziRes.zipingScore?.pattern || '正格',
          patternEn: baziRes.zipingScore?.categoryEn || 'Standard Pattern',
          logScore: logLikelihood,
          evidences: eventEvidences
        });
      } catch (err) {
        // Fallback for failed single calculation
        const fallbackBranchEn = this.BRANCH_PINYIN[cand.branch] || cand.branch;
        candidateResults.push({
          id: cand.id,
          nameZh: cand.nameZh,
          nameEn: cand.nameEn,
          hour: cand.hour,
          minute: cand.minute,
          branch: cand.branch,
          hourPillarZh: cand.branch,
          hourPillarEn: fallbackBranchEn,
          patternZh: '标准格',
          patternEn: 'Standard Pattern',
          logScore: -999,
          evidences: []
        });
      }
    });

    // 2. Softmax normalization
    const maxLog = Math.max(...candidateResults.map(c => c.logScore));
    const expScores = candidateResults.map(c => Math.exp(c.logScore - maxLog));
    const sumExp = expScores.reduce((a, b) => a + b, 0);

    candidateResults.forEach((cand, idx) => {
      cand.probability = expScores[idx] / sumExp;
      cand.confidencePercent = Math.round(cand.probability * 100);
    });

    // 3. Sort descending by confidence
    candidateResults.sort((a, b) => b.probability - a.probability);

    const top1 = candidateResults[0];
    const top2 = candidateResults[1] || null;

    // 4. Decision Convergence Assessment
    const deltaTop = top2 ? (top1.probability - top2.probability) : 1.0;
    const isConverged = (top1.probability >= 0.50 || deltaTop >= 0.20);
    const isBimodal = (!isConverged && top2 && (top1.probability - top2.probability < 0.15));

    // 5. Generate Tie-Breaker Discriminatory Question if bimodal
    let tieBreaker = null;
    if (isBimodal && top1 && top2) {
      tieBreaker = this.generateTieBreaker(top1, top2, natalBase.year);
    }

    // 6. Summary narrative
    let narrativeZh = '';
    let narrativeEn = '';

    if (isConverged) {
      narrativeZh = `根据您录入的 ${events.length} 个确定性历史大事件，贝叶斯后验概率高度收敛于【${top1.nameZh}】（置信度 ${top1.confidencePercent}%），胜出第二名 ${Math.round(deltaTop * 100)} 个百分点。时柱【${top1.hourPillarZh}】与已知事件的刑冲合动完全咬合。`;
      narrativeEn = `Based on your ${events.length} verified life events, Bayesian posterior probability strongly converges onto [${top1.nameEn}] (${top1.confidencePercent}% confidence), outperforming 2nd place by +${Math.round(deltaTop * 100)}%. Hour pillar [${top1.hourPillarEn}] exhibits perfect resonance.`;
    } else if (isBimodal) {
      narrativeZh = `推演呈现双峰并立局势：首选【${top1.nameZh}】（${top1.confidencePercent}%）与次选【${top2.nameZh}】（${top2.confidencePercent}%）差距微弱（仅差 ${Math.round(deltaTop * 100)}%）。建议通过下方的决胜题进行精准甄别。`;
      narrativeEn = `Inference displays a bimodal tie between [${top1.nameEn}] (${top1.confidencePercent}%) and [${top2.nameEn}] (${top2.confidencePercent}%). Please answer the discriminatory tie-breaker question below to finalize calibration.`;
    } else {
      narrativeZh = `推演暂未形成压倒性收敛。当前首选为【${top1.nameZh}】（${top1.confidencePercent}%），建议补充录入 1 个更具辨识度的时间节点（如添丁或骨折手术年份）。`;
      narrativeEn = `Inference is broadly distributed. Current leader is [${top1.nameEn}] (${top1.confidencePercent}%). Inputting an additional distinctive event (e.g. childbirth or surgery year) is recommended.`;
    }

    return {
      topCandidate: top1,
      top1: top1,
      top2: top2,
      runnerUp: top2,
      rankings: candidateResults,
      isConverged,
      isBimodal,
      deltaPercent: Math.round(deltaTop * 100),
      narrativeZh,
      narrativeEn,
      tieBreaker,
      eventsProcessed: events.length
    };
  }

  /**
   * Helper: Generate a discriminatory tie-breaker question
   */
  static generateTieBreaker(top1, top2, birthYear) {
    const b1 = top1.branch;
    const b2 = top2.branch;
    const clash1 = this.SIX_CLASHES[b1] || '午';
    const clash2 = this.SIX_CLASHES[b2] || '酉';
    const clash1En = this.BRANCH_EN[clash1] || 'Horse';
    const clash2En = this.BRANCH_EN[clash2] || 'Rooster';
    const b1En = this.BRANCH_EN[b1] || 'Rat';
    const b2En = this.BRANCH_EN[b2] || 'Ox';

    return {
      titleZh: `决胜判别题（甄别 ${top1.hourPillarZh} vs ${top2.hourPillarZh}）`,
      titleEn: `Discriminatory Tie-Breaker (${top1.hourPillarEn} vs ${top2.hourPillarEn})`,
      questionZh: `请问在过去的岁运流转中，您是否在逢【${clash1}】年（对冲 ${b1}）感受过剧烈的门户变动/外向搬迁，还是在逢【${clash2}】年（对冲 ${b2}）感受过长辈人际或身心健康的明显波动？`,
      questionEn: `Over past transit cycles, did you experience intense domestic/overseas relocations during [${clash1En}] years (clashing ${b1En}), or did you experience notable mentor/elder health shifts during [${clash2En}] years (clashing ${b2En})?`,
      optionAZh: `A. 逢【${clash1}】年动荡更明显（支持【${top1.nameZh}】）`,
      optionAEn: `A. Turbulence felt stronger in [${clash1En}] years (Supports [${top1.nameEn}])`,
      optionBZh: `B. 逢【${clash2}】年动荡更明显（支持【${top2.nameZh}】）`,
      optionBEn: `B. Turbulence felt stronger in [${clash2En}] years (Supports [${top2.nameEn}])`
    };
  }
}

// Export for Node/JSC test runtime and browser window
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { RectificationEngine };
}
if (typeof window !== 'undefined') {
  window.RectificationEngine = RectificationEngine;
}
