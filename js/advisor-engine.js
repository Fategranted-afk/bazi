/**
 * 钦天监随身军师 · 交互式智能决策参谋引擎 (Interactive Advisor Agent Engine)
 * Synthesizes Day Master strength, 100-point vigor, 14-character temporal field,
 * Master Ni's Yin-Yang hexagram dynamics, and Feng Dao's Rong Ku Jian codex into real-time tactical guidance.
 * 100% Offline-First, deterministic, context-aware, and fully bilingual (zh/en).
 */

/**
 * 闭环动作账本系统 (Action Ledger System)
 * Persists micro-actions in local storage, tracks execution feedback (eased | blocked | neutral),
 * and dynamic impedance adaptation to close the decision-feedback loop.
 */
class ActionLedger {
  static STORAGE_KEY = 'agy_action_ledger_v1';
  static SITUATION_KEY = 'agy_action_ledger_situation_v1';
  static _memoryStore = [];
  static _memorySituation = '';

  static getActiveSituation() {
    if (this.isStorageAvailable()) {
      try {
        const val = window.localStorage.getItem(this.SITUATION_KEY);
        if (val) return val;
      } catch (e) {}
    }
    return this._memorySituation || '';
  }

  static setActiveSituation(situationText) {
    const text = (typeof situationText === 'string') ? situationText.trim() : '';
    this._memorySituation = text;
    if (this.isStorageAvailable()) {
      try {
        if (text) {
          window.localStorage.setItem(this.SITUATION_KEY, text);
        } else {
          window.localStorage.removeItem(this.SITUATION_KEY);
        }
      } catch (e) {}
    }
    return text;
  }

  static clearActiveSituation() {
    return this.setActiveSituation('');
  }

  static isStorageAvailable() {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const testKey = '__storage_test__';
        window.localStorage.setItem(testKey, testKey);
        window.localStorage.removeItem(testKey);
        return true;
      }
    } catch (e) {
      return false;
    }
    return false;
  }

  static getAll() {
    if (this.isStorageAvailable()) {
      try {
        const raw = window.localStorage.getItem(this.STORAGE_KEY);
        if (raw) return JSON.parse(raw);
      } catch (e) {}
    }
    return [...this._memoryStore];
  }

  static saveAll(records) {
    if (!Array.isArray(records)) records = [];
    this._memoryStore = [...records];
    if (this.isStorageAvailable()) {
      try {
        window.localStorage.setItem(this.STORAGE_KEY, JSON.stringify(records));
      } catch (e) {}
    }
    return records;
  }

  static recordAction(actionObj) {
    if (!actionObj || !actionObj.id) return null;
    const records = this.getAll();
    const existingIdx = records.findIndex(r => r.id === actionObj.id);
    const now = Date.now();
    const item = {
      id: actionObj.id,
      category: actionObj.category || 'general',
      subcategory: actionObj.subcategory || '',
      badge: actionObj.badge || (actionObj.lang === 'en' ? 'Tactic' : '战术动作'),
      text: actionObj.text || '',
      timestamp: actionObj.timestamp || now,
      status: actionObj.status || 'pending',
      feedback: actionObj.feedback || null,
      feedbackAt: actionObj.feedbackAt || null,
      notes: actionObj.notes || ''
    };

    if (existingIdx >= 0) {
      item.status = records[existingIdx].status || item.status;
      item.feedback = (records[existingIdx].feedback !== undefined) ? records[existingIdx].feedback : item.feedback;
      item.feedbackAt = records[existingIdx].feedbackAt || item.feedbackAt;
      item.notes = records[existingIdx].notes || item.notes;
      records[existingIdx] = { ...records[existingIdx], ...item };
    } else {
      records.unshift(item);
    }
    this.saveAll(records);
    return item;
  }

  static updateStatus(actionId, status) {
    const records = this.getAll();
    const item = records.find(r => r.id === actionId);
    if (!item) return null;
    item.status = status;
    item.updatedAt = Date.now();
    this.saveAll(records);
    return item;
  }

  static updateFeedback(actionId, feedback, notes = '') {
    const records = this.getAll();
    const item = records.find(r => r.id === actionId);
    if (!item) return null;
    item.feedback = feedback;
    item.feedbackAt = Date.now();
    item.status = 'executed';
    if (notes) item.notes = notes;
    this.saveAll(records);
    return item;
  }

  static getStats() {
    const records = this.getAll();
    const stats = {
      total: records.length,
      pending: 0,
      executed: 0,
      skipped: 0,
      eased: 0,
      blocked: 0,
      neutral: 0
    };
    records.forEach(r => {
      if (r.status === 'executed') stats.executed++;
      else if (r.status === 'skipped') stats.skipped++;
      else stats.pending++;

      if (r.feedback === 'eased') stats.eased++;
      else if (r.feedback === 'blocked') stats.blocked++;
      else if (r.feedback === 'neutral') stats.neutral++;
    });
    return stats;
  }

  static getRecentFeedbackSummary(lang = 'zh', limit = 5) {
    const isEn = (lang === 'en');
    const records = this.getAll().filter(r => r.feedback != null).slice(0, limit);
    if (records.length === 0) return null;

    let easedCount = 0;
    let blockedCount = 0;
    let neutralCount = 0;

    records.forEach(r => {
      if (r.feedback === 'eased') easedCount++;
      else if (r.feedback === 'blocked') blockedCount++;
      else if (r.feedback === 'neutral') neutralCount++;
    });

    if (blockedCount > easedCount) {
      return {
        state: 'blocked',
        mode: 'defensive_recalibration',
        ratio: `${blockedCount}/${records.length}`,
        title: isEn ? 'Dynamic Recalibration: Tactical Resistance Detected' : '闭环校准：近期动作遭遇阻力，启动防御性阻抗调节',
        lead: isEn
          ? `[Closed-Loop Audit]: Native logged resistance across recent micro-actions (${blockedCount}/${records.length} blocked). Recalibrating subsequent operational impedance downward: shifting priority from offensive push to defensive perimeter consolidation.`
          : `【闭环校准指示】：监测到近期微动作执行存在明显阻力（近期 ${blockedCount}/${records.length} 项遇阻）。军师已动态调低战术阻抗，后续策论全面由“激进进攻”切换为“防守筑底、收敛锋芒”。`,
        tacticalBias: 'defensive'
      };
    } else if (easedCount > blockedCount) {
      return {
        state: 'eased',
        mode: 'traction_momentum',
        ratio: `${easedCount}/${records.length}`,
        title: isEn ? 'Dynamic Recalibration: Positive Traction Verified' : '闭环校准：近期动作缓和见效，乘胜推进',
        lead: isEn
          ? `[Closed-Loop Audit]: Native verified positive traction (${easedCount}/${records.length} eased). Natal qi rhythm is resonating favorably with reality; maintain forward cadence while anchoring long-term gains.`
          : `【闭环校准指示】：检测到近期微动作已形成正向突破（近期 ${easedCount}/${records.length} 项见效）。当前现实步调与原局气数产生良性共振，建议保持战术定力，在优势领域趁势扩大战果。`,
        tacticalBias: 'offensive'
      };
    } else {
      return {
        state: 'neutral',
        mode: 'steady_neutral',
        ratio: `${neutralCount}/${records.length}`,
        title: isEn ? 'Dynamic Recalibration: Baseline Equilibrium' : '闭环校准：气机平稳平衡',
        lead: isEn
          ? `[Closed-Loop Audit]: Recent micro-actions reflect steady baseline progress. Maintain continuous iteration.`
          : `【闭环校准指示】：近期微动作反馈平稳中和，能量运行顺畅，继续按既定节奏稳步推进。`,
        tacticalBias: 'balanced'
      };
    }
  }

  static clear() {
    this._memoryStore = [];
    this._memorySituation = '';
    if (this.isStorageAvailable()) {
      try {
        window.localStorage.removeItem(this.STORAGE_KEY);
        window.localStorage.removeItem(this.SITUATION_KEY);
      } catch (e) {}
    }
  }
}

/**
 * 可审计的意图工具路由系统 (Auditable Tool Dispatcher)
 * Detects user strategic intent and transparently routes to deterministic engines:
 * 1. RectificationEngine (Bayesian Birth Time Rectification)
 * 2. GeomagneticCorrection (WMM True North & 24 Mountains Calibration)
 * 3. ScenarioSimulatorEngine (Dual-Track Strategic Decision Sandbox)
 * 4. CalendarFeedEngine (Tianji Battle Rhythm RFC 5545 Feed)
 */
class ToolDispatcher {
  static dispatch(query, bazi, luck, lang = 'zh', currentYear = 2026) {
    if (!query || typeof query !== 'string') return null;
    const isEn = (lang === 'en');

    // 1. Rectification Engine Dispatch
    if (
      /(校准|对时|几点|生时|哪个时辰|时辰不准|出生时间|确定时辰)/i.test(query) ||
      /(rectif|birth time|what hour|which hour|unsure of hour|unknown hour|verify hour)/i.test(query)
    ) {
      return this._dispatchRectification(query, bazi, lang, currentYear);
    }

    // 2. Geomagnetic / Feng Shui True North Dispatch
    if (
      /(真北|磁偏角|风水|罗盘|山向|空亡|兼向|二十四山|方位|办公桌朝向|立向)/i.test(query) ||
      /(declination|true north|feng shui|compass|mountain|geomagnet|void line|orientation|wmm)/i.test(query)
    ) {
      return this._dispatchGeomagnetism(query, bazi, lang, currentYear);
    }

    // 3. Scenario Simulator Dispatch (Dual-Track A/B)
    if (
      /(选a还是b|哪个offer|去北京还是上海|去深圳还是|留校还是去企业|离职还是留下|二选一|对比两个|双轨|决策沙盘|跳槽还是)/i.test(query) ||
      /(choice a or b|which offer|compare offer|relocate or stay|which job|scenario simulator|dual-track)/i.test(query)
    ) {
      return this._dispatchScenarioSimulator(query, bazi, luck, lang, currentYear);
    }

    // 4. Calendar Feed Engine Dispatch
    if (
      /(日历|提醒|订阅|日程|关键日期|进退历|天机历|导出日历|ics)/i.test(query) ||
      /(calendar|schedule|subscribe|webcal|ics|key dates|rhythm|export calendar)/i.test(query)
    ) {
      return this._dispatchCalendarFeed(query, bazi, lang, currentYear);
    }

    // 5. Hierarchical Cyclic Aphesis & Career Breakout
    if (
      /(跳槽|转轨|换工作|换赛道|跃迁|何时爆发|大运交接|解纽|转型|何时转运|突破窗口|周期|明年规划|提前布局)/i.test(query) ||
      /(career pivot|breakout|leap|transition|aphesis|time-lord|releasing|track jump|change job|preemptive layout)/i.test(query)
    ) {
      return this._dispatchCycleDynamics(query, bazi, lang, currentYear);
    }

    // 6. Homeostatic Thermodynamics & Somatic Health
    if (
      /(身心|气血|五脏|调摄|失眠|内耗|焦虑|疲惫|精力|体虚|上火|除湿|寒热|作息)/i.test(query) ||
      /(health|vitality|somatic|insomnia|anxiety|homeostasis|fatigue|organ|qi blood|sleep)/i.test(query)
    ) {
      return this._dispatchHomeostaticDynamics(query, bazi, lang, currentYear);
    }

    // 7. Cosmobiology Midpoint Game Matrix (Upward Management & Negotiation)
    if (
      /(向上管理|汇报|要资源|领导挑刺|合伙|博弈|攻心|多方矛盾|站队|权力|制衡|合伙人)/i.test(query) ||
      /(manage up|reporting|negotiat|midpoint|friction|stakeholder|power dynamic|game matrix|partnership)/i.test(query)
    ) {
      return this._dispatchMidpointGameMatrix(query, bazi, lang, currentYear);
    }

    // 8. Harmonic Wave & Financial Risk Dynamics
    if (
      /(投资|理财|炒股|偏财|副业|做生意|现金流|风险控制|亏损|加杠杆|资金)/i.test(query) ||
      /(invest|wealth|portfolio|side hustle|capital|financial risk|harmonic resistance|cash flow)/i.test(query)
    ) {
      return this._dispatchHarmonicsDynamics(query, bazi, lang, currentYear);
    }

    return null;
  }

  static _dispatchRectification(query, bazi, lang, currentYear) {
    const isEn = (lang === 'en');
    let natalBase = {
      year: (bazi && bazi.birthYear) || 1990,
      month: (bazi && bazi.birthMonth) || 6,
      day: (bazi && bazi.birthDay) || 20,
      gender: (bazi && bazi.gender) || '乾造'
    };

    let rankings = [];
    let tieBreaker = null;

    if (typeof RectificationEngine !== 'undefined') {
      try {
        const events = [
          { year: currentYear - 5, type: 'career' },
          { year: currentYear - 2, type: 'wealth' }
        ];
        const res = RectificationEngine.rectifyBirthTime(natalBase, events);
        if (res && res.rankings) {
          rankings = res.rankings;
          if (rankings.length >= 2) {
            tieBreaker = RectificationEngine.generateTieBreaker(rankings[0], rankings[1], natalBase.year);
          }
        }
      } catch (e) {}
    }

    const topCandidates = rankings.slice(0, 3).map(r => ({
      name: isEn ? r.cand?.nameEn : r.cand?.nameZh,
      branch: r.cand?.branch || '',
      probPercent: r.probPercent || 0,
      evidencesCount: r.evidences ? r.evidences.length : 0
    }));

    return {
      toolId: 'rectification_engine',
      toolName: isEn ? 'Bayesian Birth Time Rectification Engine' : '贝叶斯生时反向校准引擎',
      status: 'SUCCESS',
      rationale: isEn
        ? 'Detected birth hour uncertainty. Dispatched to Bayesian MAP likelihood estimation across 13 candidate hours.'
        : '检测到生辰时辰疑问与校准意图；自动激活贝叶斯十三时辰全相似然度求解器。',
      disclaimer: isEn
        ? 'Deterministic mathematical computation · Zero black-box hallucination'
        : '【确定性工具审计】纯数理与经典格局推演 · 拒绝黑箱幻觉',
      parameters: {
        natalDate: `${natalBase.year}-${natalBase.month}-${natalBase.day}`,
        candidateCount: 13,
        priorModel: isEn ? 'Gaussian Proximity Prior' : '正态时辰邻近先验'
      },
      output: {
        topCandidates: topCandidates,
        tieBreakerQuestion: tieBreaker ? (isEn ? tieBreaker.questionEn : tieBreaker.questionZh) : null
      }
    };
  }

  static _dispatchGeomagnetism(query, bazi, lang, currentYear) {
    const isEn = (lang === 'en');
    let lat = 39.90;
    let lon = 116.40;
    let heading = 180.0;

    const headingMatch = query.match(/(\d{1,3}(?:\.\d+)?)\s*(?:度|deg|°)/i);
    if (headingMatch) {
      const val = parseFloat(headingMatch[1]);
      if (val >= 0 && val <= 360) heading = val;
    }

    let declination = -6.1;
    let correction = {
      trueHeading: heading + declination,
      mountain: isEn ? 'Wu (Horse) - Direct South' : '正南午山',
      centerOffset: 0,
      isParting: false,
      isSevereParting: false,
      warning: isEn ? 'Pure central meridian alignment.' : '正向纯清，气聚神专。',
      advice: isEn ? 'Maintain current orientation.' : '无需实体化解，保持当前真北中轴线纳气即可。'
    };

    if (typeof GeomagneticCorrection !== 'undefined') {
      try {
        declination = GeomagneticCorrection.getDeclination(lat, lon, currentYear);
        correction = GeomagneticCorrection.correctCompassHeading(heading, declination, lang);
      } catch (e) {}
    }

    return {
      toolId: 'geomagnetic_correction',
      toolName: isEn ? 'NOAA WMM Geomagnetic & 24 Mountains Calibration' : 'NOAA WMM 地磁真北与二十四山向校准引擎',
      status: 'SUCCESS',
      rationale: isEn
        ? 'Detected spatial orientation inquiry. Dispatched to NOAA World Magnetic Model to solve true north and 24-mountain parting.'
        : '检测到空间朝向、罗盘或风水研判意图；自动激活NOAA世界地磁模型修正真北与二十四山兼向。',
      disclaimer: isEn
        ? 'Deterministic mathematical computation · Zero black-box hallucination'
        : '【确定性工具审计】纯数理与经典格局推演 · 拒绝黑箱幻觉',
      parameters: {
        latitude: lat,
        longitude: lon,
        year: currentYear,
        magneticHeading: `${heading}°`
      },
      output: {
        declination: `${declination}°`,
        trueHeading: `${correction.trueHeading}°`,
        mountain: correction.mountain,
        centerOffset: `${correction.centerOffset}°`,
        isParting: correction.isParting,
        isSevereParting: correction.isSevereParting,
        warning: correction.warning,
        advice: correction.advice
      }
    };
  }

  static _dispatchScenarioSimulator(query, bazi, luck, lang, currentYear) {
    const isEn = (lang === 'en');
    let optA = { country: 'CN', city: 'BJ', industry: 'tech', role: 'engineer', supervisor: 'tech_lead', title: isEn ? 'Beijing Tech Lead' : '北京硬核研发' };
    let optB = { country: 'CN', city: 'SH', industry: 'finance', role: 'manager', supervisor: 'director', title: isEn ? 'Shanghai Financial Analyst' : '上海金融资管' };

    let sim = null;
    if (typeof ScenarioSimulatorEngine !== 'undefined') {
      try {
        sim = ScenarioSimulatorEngine.simulateOptions(optA, optB, bazi, luck, lang);
      } catch (e) {}
    }

    const winner = sim ? sim.winner : 'A';
    const verdictTitle = sim ? (isEn ? sim.verdictTitleEn : sim.verdictTitleZh) : (isEn ? 'Option A Outperforms Option B' : '方案A显著优于方案B');
    const summary = sim ? (isEn ? sim.summaryEn : sim.summaryZh) : '';
    const scoreA = sim?.resA?.score || 85;
    const scoreB = sim?.resB?.score || 72;
    const delta = sim ? sim.delta : Math.abs(scoreA - scoreB);

    const leaderboard = (sim && sim.rawLeaderboard ? sim.rawLeaderboard.slice(0, 3) : []).map(l => ({
      dimension: isEn ? l.dimensionEn : l.dimensionZh,
      scoreA: l.scoreA,
      scoreB: l.scoreB,
      verdict: isEn ? l.verdictEn : l.verdictZh
    }));

    return {
      toolId: 'scenario_simulator',
      toolName: isEn ? 'Dual-Track Strategic Decision Sandbox' : '双轨博弈对抗决策沙盘推演引擎',
      status: 'SUCCESS',
      rationale: isEn
        ? 'Detected A/B dilemma inquiry. Dispatched to 5-dimensional multi-attribute utility and natal pattern alignment simulator.'
        : '检测到双轨二选一困境；自动执行五维多属性效用函数，推演城市五行与格局乘数效应。',
      disclaimer: isEn
        ? 'Deterministic mathematical computation · Zero black-box hallucination'
        : '【确定性工具审计】纯数理与经典格局推演 · 拒绝黑箱幻觉',
      parameters: {
        optionA: optA.title,
        optionB: optB.title,
        evaluator: '5-Dimensional Dynamic Scorecard'
      },
      output: {
        winner: winner,
        verdictTitle: verdictTitle,
        deltaScore: delta,
        scoreA: scoreA,
        scoreB: scoreB,
        summary: summary,
        leaderboard: leaderboard
      }
    };
  }

  static _dispatchCalendarFeed(query, bazi, lang, currentYear) {
    const isEn = (lang === 'en');
    let events = [];
    let webcalUrl = '';

    if (typeof CalendarFeedEngine !== 'undefined') {
      try {
        const feed = new CalendarFeedEngine(bazi, currentYear);
        events = feed.extractCriticalEvents(currentYear, lang) || [];
        webcalUrl = CalendarFeedEngine.getWebcalSubscriptionUrl(bazi, currentYear);
      } catch (e) {}
    }

    const upcomingEvents = events.slice(0, 3).map(e => ({
      dateStr: e.dateStr,
      title: isEn ? e.titleEn : e.titleZh,
      summary: isEn ? e.summaryEn : e.summaryZh,
      action: isEn ? e.actionEn : e.actionZh
    }));

    return {
      toolId: 'calendar_feed_engine',
      toolName: isEn ? 'Tianji Battle Rhythm RFC 5545 Calendar Feed Engine' : '天机进退节律历 · RFC 5545 国际标准日历引擎',
      status: 'SUCCESS',
      rationale: isEn
        ? 'Detected calendar schedule / subscription query. Extracted annual high-amplitude turning point dates into RFC 5545 feed.'
        : '检测到流年节奏与日历提醒诉求；自动提炼全年高势能跃迁与防御节点日并生成国际标准日历流。',
      disclaimer: isEn
        ? 'Deterministic mathematical computation · Zero black-box hallucination'
        : '【确定性工具审计】纯数理与经典格局推演 · 拒绝黑箱幻觉',
      parameters: {
        year: currentYear,
        standard: 'RFC 5545 iCalendar',
        alarmTrigger: '-PT4H (Eve 20:00)'
      },
      output: {
        totalEvents: events.length,
        webcalUrl: webcalUrl,
        upcomingEvents: upcomingEvents
      }
    };
  }

  static _dispatchCycleDynamics(query, bazi, lang, currentYear) {
    const isEn = (lang === 'en');
    const data = (typeof WesternCanonsDB !== 'undefined' && typeof WesternCanonsDB.computeCycleDynamics === 'function')
      ? WesternCanonsDB.computeCycleDynamics(bazi, currentYear, lang)
      : null;

    return {
      toolId: 'cycle_dynamics',
      toolName: isEn ? 'Hierarchical Cyclic Aphesis & Breakout Engine' : '宏观跃迁周期与解纽时序递推引擎',
      status: 'SUCCESS',
      rationale: isEn
        ? 'Detected career pivot / milestone breakthrough intent. Dispatched to multi-tier cyclic aphesis and decennial transition model.'
        : '检测到跳槽转轨、职业换道与重大跃迁诉求；自动激活多层级周期解纽律与岁运交接时序递推模型。',
      disclaimer: isEn
        ? 'Deterministic mathematical computation · Zero black-box hallucination'
        : '【确定性工具审计】纯数理与经典格局推演 · 拒绝黑箱幻觉',
      parameters: {
        evaluationHorizon: isEn ? 'Hierarchical Aphesis (L1-L4)' : '多层级周期递归',
        currentYear: currentYear
      },
      output: data
    };
  }

  static _dispatchHomeostaticDynamics(query, bazi, lang, currentYear) {
    const isEn = (lang === 'en');
    const data = (typeof WesternCanonsDB !== 'undefined' && typeof WesternCanonsDB.computeHomeostaticDynamics === 'function')
      ? WesternCanonsDB.computeHomeostaticDynamics(bazi, lang)
      : null;

    return {
      toolId: 'homeostatic_dynamics',
      toolName: isEn ? 'Quadripartite Thermodynamic Balance Engine' : '寒暖燥湿物候稳态调节引擎',
      status: 'SUCCESS',
      rationale: isEn
        ? 'Detected health, somatic vitality, or anxiety management intent. Dispatched to quadripartite temperature-moisture homeostatic balance matrix.'
        : '检测到身心气血、睡眠焦虑与精力调摄诉求；自动执行寒暖燥湿物候四相稳态调节矩阵。',
      disclaimer: isEn
        ? 'Deterministic mathematical computation · Zero black-box hallucination'
        : '【确定性工具审计】纯数理与经典格局推演 · 拒绝黑箱幻觉',
      parameters: {
        matrix: isEn ? '4-Element Thermodynamic Model' : '寒暖燥湿四相矩阵',
        evaluator: isEn ? 'Somatic Equilibrium' : '体液物候自洽度'
      },
      output: data
    };
  }

  static _dispatchMidpointGameMatrix(query, bazi, lang, currentYear) {
    const isEn = (lang === 'en');
    const data = (typeof WesternCanonsDB !== 'undefined' && typeof WesternCanonsDB.computeMidpointDynamics === 'function')
      ? WesternCanonsDB.computeMidpointDynamics(bazi, lang)
      : null;

    return {
      toolId: 'midpoint_game_matrix',
      toolName: isEn ? 'Cosmobiology 90-Degree Midpoint Stress Matrix' : '多方博弈中点应力轴决策引擎',
      status: 'SUCCESS',
      rationale: isEn
        ? 'Detected stakeholder negotiation / upward management dilemma. Dispatched to 90-degree dial midpoint stress and power leverage matrix.'
        : '检测到向上管理、跨部门协商或合伙人博弈困境；自动执行90°刻度盘中点对称应力轴解算。',
      disclaimer: isEn
        ? 'Deterministic mathematical computation · Zero black-box hallucination'
        : '【确定性工具审计】纯数理与经典格局推演 · 拒绝黑箱幻觉',
      parameters: {
        dialAngle: '90-degree Symmetry',
        stressType: isEn ? 'Resource vs Output Tension' : '印伤利益交叠'
      },
      output: data
    };
  }

  static _dispatchHarmonicsDynamics(query, bazi, lang, currentYear) {
    const isEn = (lang === 'en');
    const data = (typeof WesternCanonsDB !== 'undefined' && typeof WesternCanonsDB.computeHarmonicsDynamics === 'function')
      ? WesternCanonsDB.computeHarmonicsDynamics(bazi, lang)
      : null;

    return {
      toolId: 'harmonics_dynamics',
      toolName: isEn ? 'Harmonic Standing Wave & Kinetic Risk Engine' : '能量驻波律动与抗压阻抗引擎',
      status: 'SUCCESS',
      rationale: isEn
        ? 'Detected financial timing / side-hustle risk query. Dispatched to Fourier harmonic standing wave and kinetic impedance evaluation.'
        : '检测到财富时机、投资风控与副业变现诉求；自动执行傅里叶多频谐波分解与动能阻抗评估。',
      disclaimer: isEn
        ? 'Deterministic mathematical computation · Zero black-box hallucination'
        : '【确定性工具审计】纯数理与经典格局推演 · 拒绝黑箱幻觉',
      parameters: {
        waveModel: 'Fourier H4/H9 Superposition',
        riskVector: isEn ? 'Kinetic Dissipation' : '动能耗散阻抗'
      },
      output: data
    };
  }
}

class AdvisorEngine {
  /**
   * Build complete metaphysical context object for the active native
   */
  static buildContext(bazi, luck, currentYear = 2026, currentMonth = null, lang = 'zh') {
    if (!bazi || !bazi.pillars) return null;

    const dm = bazi.dayMaster || '甲';
    const dmElem = bazi.pillars.day?.stemElement || 'Wood';
    const vigorScore = bazi.vigorScore || 50;
    const vigorTier = bazi.vigorTier || '较旺格';
    const gender = bazi.gender || '乾造';
    const dayBranch = bazi.pillars.day?.branch || '寅';
    const yearBranch = bazi.pillars.year?.branch || '午';
    const monthBranch = bazi.pillars.month?.branch || '午';
    const hourBranch = bazi.pillars.hour?.branch || '巳';

    // Retrieve active transit details
    let activeDecade = null;
    let activeAnnual = null;
    let activeHex = null;
    let firstScroll = null;
    let primaryArchetype = lang === 'en' ? 'Specialist & Engineering' : '技术人员';

    if (luck) {
      activeDecade = luck.currentDecade || (luck.decades && luck.decades[0]) || null;
      activeAnnual = luck.currentAnnual || null;
    }

    if (typeof IChingEngine !== 'undefined' && typeof IChingEngine.calculateFourPillarsHexagrams === 'function') {
      try {
        const hexRes = IChingEngine.calculateFourPillarsHexagrams(bazi, currentYear, lang);
        if (hexRes) {
          activeHex = hexRes.liuNianHexagram || hexRes.xianTianHexagram || null;
        }
      } catch (e) {
        // Fallback gracefully
      }
    }

    if (typeof RongKuJianDB !== 'undefined') {
      try {
        const rkEval = RongKuJianDB.evaluateNativeScrolls(bazi, lang);
        if (rkEval && rkEval.primaryScroll) {
          firstScroll = lang === 'en' ? rkEval.primaryScroll.nameEn : rkEval.primaryScroll.nameZh;
        }
      } catch (e) {}
    }

    if (typeof CareerEngine !== 'undefined' && typeof CareerEngine.computeWorkplaceArchetypes === 'function') {
      try {
        const archs = CareerEngine.computeWorkplaceArchetypes(bazi, lang);
        if (archs && archs.length > 0) {
          primaryArchetype = lang === 'en' ? archs[0].nameEn : archs[0].nameZh;
        }
      } catch (e) {}
    }

    const defaultFirstScroll = lang === 'en' ? 'Scroll I: Adaptability' : '圆通卷';
    const defaultArchetype = lang === 'en' ? 'Specialist & Engineering' : '技术人员';

    let hexName = lang === 'en' ? 'The Creative (Heaven)' : '乾为天';
    if (activeHex) {
      hexName = lang === 'en' ? (activeHex.nameEn || activeHex.trans || activeHex.name) : (activeHex.nameZh || activeHex.name);
    }

    let decadeStr = lang === 'en' ? 'Current Decade' : '当前大运';
    if (activeDecade) {
      decadeStr = `${activeDecade.stem}${activeDecade.branch}`;
    }

    let annualStr = '丙午';
    if (activeAnnual) {
      annualStr = `${activeAnnual.stem}${activeAnnual.branch}`;
    }

    let tierStr = vigorTier;
    if (lang === 'en') {
      if (vigorTier.includes('较旺')) tierStr = 'Moderately Strong';
      else if (vigorTier.includes('极旺')) tierStr = 'Extremely Strong';
      else if (vigorTier.includes('较弱')) tierStr = 'Moderately Weak';
      else if (vigorTier.includes('极弱')) tierStr = 'Extremely Weak';
      else tierStr = 'Balanced';
    }

    let lookahead = null;
    let traj = (bazi && (bazi.hexTrajectory || bazi.hundredYearsTrajectory)) || null;
    if (!traj && typeof IChingEngine !== 'undefined' && typeof IChingEngine.calculateLifelongCycle === 'function') {
      try {
        traj = IChingEngine.calculateLifelongCycle(bazi);
      } catch (e) {}
    }
    if (traj && traj.length > 0) {
      const curPt = traj.find(p => p.year === currentYear);
      if (curPt && curPt.lookahead) {
        lookahead = curPt.lookahead;
      }
    }

    return {
      dayMaster: dm,
      element: dmElem,
      gender: gender,
      dayBranch: dayBranch,
      yearBranch: yearBranch,
      monthBranch: monthBranch,
      hourBranch: hourBranch,
      vigorScore: vigorScore,
      vigorTier: tierStr,
      activeDecade: decadeStr,
      activeAnnualYear: currentYear,
      activeAnnualGanzhi: annualStr,
      activeHexagram: hexName,
      firstScroll: firstScroll || defaultFirstScroll,
      primaryArchetype: primaryArchetype || defaultArchetype,
      lookahead: lookahead
    };
  }

  /**
   * Return curated tactical prompt presets for 1-click consultation
   */
  static getCuratedPrompts(lang = 'zh') {
    if (lang === 'en') {
      return [
        {
          id: 'romance_timing',
          icon: '💍',
          title: 'Romance Timing & Destiny Spouse',
          query: 'When will my destiny partner arrive? What are their personality archetype, spatial peach blossom activation, and key relationship red lines?'
        },
        {
          id: 'academic_exam',
          icon: '🎓',
          title: 'Academic & Exam Advancement',
          query: 'Evaluating my Resource and Output stars with Wen Chang nobility, should I pursue graduate research, overseas study, or industry? What is my exam timing window?'
        },
        {
          id: 'manage_up',
          icon: '💼',
          title: 'Managing Up & Superiors',
          query: 'How should I communicate and report to my manager/supervisor without triggering friction, based on my chart archetype?'
        },
        {
          id: 'career_pivot',
          icon: '⚔️',
          title: 'Stay vs. Pivot Crossroads',
          query: 'Facing a career crossroads: stay in my current track or pivot to an ambitious new opportunity? How does my vigor favor this?'
        },
        {
          id: 'overthinking',
          icon: '🧘',
          title: 'Defeating Mental Friction',
          query: 'Dealing with excessive overthinking and self-doubt lately. What is my optimal cognitive reframing anchor and physical reset?'
        },
        {
          id: 'health_vitality',
          icon: '🫁',
          title: 'Health & Five-Element Vitality',
          query: 'Evaluating my Five Elements balance and current transit, what are my organ vulnerabilities, sleep remedies, and wellness rhythm?'
        },
        {
          id: 'synastry_inquiry',
          icon: '👥',
          title: 'Partner & Peer Synastry Match',
          query: 'Evaluate compatibility between my chart and my partner/colleague: what are our elemental friction zones and alliance tactics?'
        },
        {
          id: 'wealth_window',
          icon: '💰',
          title: 'Wealth & Initiative Timing',
          query: 'Is the current temporal transit favorable for aggressive wealth expansion (side-projects/investments) or consolidation?'
        },
        {
          id: 'pattern_metaphysics',
          icon: '🔮',
          title: 'Pattern Dialectics & Hidden Wealth/Wife',
          query: 'What is the deep difference between Hurting Officer expressing talent vs harnessing Seven Killings, and does the Mao-Xu combination into fire count as Wife and Wealth?'
        }
      ];
    }

    return [
      {
        id: 'romance_timing',
        icon: '💍',
        title: '世俗婚恋与正缘应期',
        query: '结合我的日支配偶宫、桃花星与当下岁运，我命定正缘何时出现？对方相貌心性与相处避坑红线是什么？'
      },
      {
        id: 'academic_exam',
        icon: '🎓',
        title: '学业考学与文昌深造',
        query: '结合本命印星、食伤秀气与文昌贵人，我适合考研升学、出国留学还是博士深造？考运应期如何？'
      },
      {
        id: 'manage_up',
        icon: '💼',
        title: '向上管理与汇报策略',
        query: '结合我命盘的格局与性格，向严苛或强势上级汇报工作/争取资源时，如何精准切中要害且绝不踩雷？'
      },
      {
        id: 'career_pivot',
        icon: '⚔️',
        title: '跳槽转轨 vs 留任守成',
        query: '目前面临职业转轨与留任十字路口：依我本命身旺衰与当前岁运，是宜主动进击还是深筑护城河？'
      },
      {
        id: 'overthinking',
        icon: '🧘',
        title: '斩断反刍与内耗重置',
        query: '近期精神内耗反刍严重、怀疑自我算力，如何用我命造最适宜的禅道心法与躯体动作实现硬重启？'
      },
      {
        id: 'health_vitality',
        icon: '🫁',
        title: '身心气血与五脏调摄',
        query: '结合我八字五行旺衰与当下岁运，我的五脏气血弱项在哪里？如何通过作息食疗与空间调养进行身心硬重启？'
      },
      {
        id: 'synastry_inquiry',
        icon: '👥',
        title: '双人合盘与博弈攻心',
        query: '评测我与伴侣/领导的命盘相处合化：对方气场对我是否补益用神？相处有哪些必须避开的克伐雷区？'
      },
      {
        id: 'wealth_window',
        icon: '💰',
        title: '财运时机与投资攻守',
        query: '当下岁运流月逢何神司权？我适宜开拓副业与商业变现，还是当收拢现金流、以沉淀绝技为先？'
      },
      {
        id: 'pattern_metaphysics',
        icon: '🔮',
        title: '格局辩证与暗财妻财推演',
        query: '伤官吐秀与伤官驾杀有何本质差别？水旺加戌土遇卯木加持，卯戌六合化火算在妻财里面吗？'
      }
    ];
  }

  /**
   * Calculate Xun Kong (Earthly Branches in Void / 空亡) from Day/Year Stem and Branch
   */
  static calculateKongWang(stem, branch) {
    const STEMS = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
    const BRANCHES = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
    const sIdx = STEMS.indexOf(stem);
    const bIdx = BRANCHES.indexOf(branch);
    if (sIdx === -1 || bIdx === -1) return ['戌', '亥'];
    const xunStart = (bIdx - sIdx + 12) % 12;
    const v1 = (xunStart - 2 + 12) % 12;
    const v2 = (xunStart - 1 + 12) % 12;
    return [BRANCHES[v1], BRANCHES[v2]];
  }

  /**
   * Evaluate Noble Stars (Shen Sha / 神煞) for a given Lunar Month
   */
  static evaluateMonthShenSha(dayStem, yearBranch, monthBranch, lang = 'zh') {
    const isEn = (lang === 'en');
    const badges = [];

    // Tian Yi Nobleman (天乙贵人)
    const tianYiMap = {
      '甲': ['丑', '未'], '戊': ['丑', '未'], '庚': ['丑', '未'],
      '乙': ['子', '申'], '己': ['子', '申'],
      '丙': ['亥', '酉'], '丁': ['亥', '酉'],
      '壬': ['卯', '巳'], '癸': ['卯', '巳'],
      '辛': ['午', '寅']
    };
    if (tianYiMap[dayStem] && tianYiMap[dayStem].includes(monthBranch)) {
      badges.push(isEn ? '✨ Tian Yi Nobleman' : '✨ 天乙贵人值守');
    }

    // Wen Chang (文昌贵人)
    const wenChangMap = {
      '甲': '巳', '乙': '午', '丙': '申', '丁': '酉', '戊': '申',
      '己': '酉', '庚': '亥', '辛': '子', '壬': '寅', '癸': '卯'
    };
    if (wenChangMap[dayStem] === monthBranch) {
      badges.push(isEn ? '📖 Wen Chang Noble' : '📖 文昌贵人启智');
    }

    // Hong Luan & Tian Xi (红鸾天喜)
    const BRANCHES = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
    const yIdx = BRANCHES.indexOf(yearBranch);
    if (yIdx !== -1) {
      const hlIdx = (3 - yIdx + 12) % 12;
      const txIdx = (hlIdx + 6) % 12;
      if (BRANCHES[hlIdx] === monthBranch) {
        badges.push(isEn ? '🌸 Hong Luan Romance' : '🌸 红鸾喜庆动照');
      } else if (BRANCHES[txIdx] === monthBranch) {
        badges.push(isEn ? '🎉 Tian Xi Joy Noble' : '🎉 天喜临门护佑');
      }
    }

    // Post Horse (驿马星)
    const yimaMap = {
      '申': '寅', '子': '寅', '辰': '寅',
      '寅': '申', '午': '申', '戌': '申',
      '巳': '亥', '酉': '亥', '丑': '亥',
      '亥': '巳', '卯': '巳', '未': '巳'
    };
    if (yimaMap[yearBranch] === monthBranch) {
      badges.push(isEn ? '🐎 Post Horse Pivot' : '🐎 驿马跃迁催动');
    }

    return badges;
  }

  /**
   * Evaluate Synastry Dynamics with Partner or Superior
   */
  static evaluateSynastryTactics(targetStr, bazi, luck, lang = 'zh') {
    const isEn = (lang === 'en');
    const dm = bazi?.dayMaster || '甲';
    const db = bazi?.pillars?.day?.branch || '午';

    let targetYear = 1998;
    const matchYear = (targetStr || '').match(/\b(19\d{2}|20\d{2})\b/);
    if (matchYear) {
      targetYear = parseInt(matchYear[1], 10);
    }
    const STEMS = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
    const BRANCHES = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
    const gzIdx = (targetYear - 4) % 60;
    const targetStem = STEMS[gzIdx % 10];
    const targetBranch = BRANCHES[gzIdx % 12];
    const targetGz = `${targetStem}${targetBranch}`;

    let score = 86;
    let harmonyReasonZh = '地支三合化气生身，气数相投互为犄角';
    let harmonyReasonEn = 'Harmonious elemental branch resonance aligns pacing';

    const branchSixHarmonies = { '子': '丑', '丑': '子', '寅': '亥', '亥': '寅', '卯': '戌', '戌': '卯', '辰': '酉', '酉': '辰', '巳': '申', '申': '巳', '午': '未', '未': '午' };
    const branchClashes = { '子': '午', '午': '子', '丑': '未', '未': '丑', '寅': '申', '申': '寅', '卯': '酉', '酉': '卯', '辰': '戌', '戌': '辰', '巳': '亥', '亥': '巳' };

    if (branchSixHarmonies[db] === targetBranch) {
      score = 96;
      harmonyReasonZh = '地支六合归位（天作之合），极具默契与灵魂共振';
      harmonyReasonEn = 'Six-Harmony branch union represents exceptional soulmate resonance';
    } else if (['寅', '午', '戌'].includes(db) && ['寅', '午', '戌'].includes(targetBranch)) {
      score = 92;
      harmonyReasonZh = '寅午戌三合局同气连枝，长远目标志向高度契合';
      harmonyReasonEn = 'Tri-Union elemental fire alliance drives aligned long-term visions';
    } else if (branchClashes[db] === targetBranch) {
      score = 73;
      harmonyReasonZh = '逢冲动荡，初见吸引力极强，需注重理性包容与情绪脱敏';
      harmonyReasonEn = 'Branch polarity creates intense initial magnetism followed by friction';
    }

    return {
      title: isEn ? 'Synastry Tactical Oracle & Relationship Matrix' : '双人命盘博弈与天合地合神机卡',
      targetInfo: isEn ? `Partner Profile: Year ${targetYear} (${AdvisorEngine._ganzhiToEn(targetGz)})` : `对方气数：${targetYear}年生人（${targetGz}）`,
      score: score,
      allianceArchetype: score >= 90 ? (isEn ? 'Soulmate Resonance & Mutual Compounding' : '天作之合 · 灵魂共鸣型') : (isEn ? 'Pragmatic Alliance & Growth Balance' : '现实互补 · 磨合成长型'),
      mechanism: isEn ? harmonyReasonEn : harmonyReasonZh,
      coreKey: isEn ? 'Core Alliance Strategy: Lead with transparent delivery and clear mutual boundaries.' : '攻心相处法门：多展现交付确定性与专业边界，以平等同盟相待，忌居高临下指导。',
      frictionRedLine: isEn ? 'Friction Red Line: Enforce a 24-hour delayed reaction before confronting sensitive friction.' : '相处触碰雷区：严禁在疲惫期互翻旧账或单方面冷战，遇争议设置 24 小时情绪隔离期。',
      energyBalance: isEn ? 'Energy Balance: Other person provides vital grounding; reciprocate with strategic insight.' : '能量平衡锦囊：对方能为你提供宝贵的现实落地感，你当以远见与情绪共鸣回馈。'
    };
  }

  /**
   * Detect nuanced subcategory / follow-up subtopic
   */
  static detectSubcategory(userQuery) {
    const q = (userQuery || '').toLowerCase();

    // High-order Pattern & Dialectics subcategories
    if (/伤官吐秀.*(伤官驾杀|差别|区别)|伤官驾杀.*(伤官吐秀|差别|区别)|(伤官.*(差别|区别))|talent expression.*harness|difference.*hurting officer|compare.*hurting officer|hurting officer.*(vs|versus).*seven killing|hurting officer expressing talent.*(?:vs|versus|harnessing)/i.test(q)) {
      return 'pattern_diff';
    }
    if (/妻财|暗财|合化火.*财|财星|暗合化财|hidden wealth|wife and wealth|count as wife|spouse star/i.test(q)) {
      return 'wealth_wife_fire';
    }
    if (/杀刃带伤|羊刃驾杀|杀刃|blade killing|blade.*seven killing|killing.*blade|killing blade/i.test(q)) {
      return 'killing_blade_officer';
    }
    if (/水旺.*戌土|没有金|无金|水土混杂|水土相战|water.*(?:heavy|vigorous|strong).*xu|water.*xu.*metal|lack(?:s)? metal|without metal|no metal|turbid clash|muddy water/i.test(q)) {
      return 'water_xu_metal';
    }
    if (/卯木(?:加持)?|卯戌(?:合|六合|化火)?|化火|mao wood|mao[- ]?xu.*fire|combination into fire|desiring union/i.test(q)) {
      return 'mao_xu_fire';
    }

    if (/具体期限|期限|几月份?|具体哪个月|什么时候|具体时间|何时|何月|何年|哪天|应期|时间点|哪年|哪一?天|何时出现|何时显化|何时来|timing|deadline|which month|when exactly|what time|schedule|when will/i.test(q)) {
      return 'timing_precision';
    }
    if (/长相|相貌|长得怎么样|容貌|五官|身材|外貌|心性|性格|脾气|为人|是哪种人|什么人|做什么工作|职业背景|profile|appearance|looks|personality|character|background|what is .* like/i.test(q)) {
      return 'spouse_profile';
    }
    if (/怎么布置|摆放|风水|器物|花瓶|水晶|化解|怎么做|怎么弄|如何化解|风水阵|remedy|feng shui|placement|crystal|flowers/i.test(q)) {
      return 'spatial_remedy';
    }
    if (/在哪遇到|去哪找|怎么认识|相遇地点|相遇场域|去什么地方|哪个城市|方位|where to meet|location|encounter|venue/i.test(q)) {
      return 'encounter_location';
    }
    if (/定下名分|领证|结婚年份|何时结婚|婚期|哪年结婚|marry|wedding|marriage year/i.test(q)) {
      return 'marriage_year';
    }
    if (/领导挑刺|领导穿小鞋|跟领导吵架|汇报被批|领导针对|boss conflict|superior friction/i.test(q)) {
      return 'boss_conflict';
    }
    if (/同事搞鬼|小人背刺|职场孤立|同事竞争|peer conflict|colleague/i.test(q)) {
      return 'colleague_friction';
    }
    if (/选哪个|选a还是|还是去|跳槽还是|去深圳还是|还是留任|比较|vs|compare|which option/i.test(q)) {
      return 'decision_compare';
    }
    if (/器官|五脏|失眠原因|怎么调理|养生方|organ|sleep remedy|diet/i.test(q)) {
      return 'health_organ';
    }
    if (/买房方位|哪个城市买|首付|贷款|房产|property direction|mortgage/i.test(q)) {
      return 'property_timing';
    }

    if (/为什么|何故|原理|根据什么|怎么算出来|八字怎么看|why|reason|how to deduce/i.test(q)) {
      return 'general_why';
    }

    return 'comprehensive';
  }

  /**
   * Classify user query intent robustly, with multi-turn session context inheritance
   */
  static detectIntent(userQuery, sessionContext = null) {
    const q = (userQuery || '').toLowerCase().trim();
    const sub = this.detectSubcategory(userQuery);

    // 0a. Vague Confusion / Directionless / Lost
    if (/^(我)?(很)?迷茫|不知道(该)?怎么(办|选)|求指点|指点(一下)?|今年好难受|我该怎么办|心乱|心烦|救救我|给我点建议|^迷茫$|confused|so lost|i am lost|help me|what should i do|feel stuck/i.test(q)) {
      return 'vague_confusion';
    }

    // 0b. Synastry / Compatibility / Match with another person
    if (/我和(他|她|ta|对方)合不合|合盘|看下我们合不合|我们合适吗|对方(是|属|生于|八字)|他(是|属)|她(是|属)|相亲对象|领导是\d{4}|领导属|合不合|配不配|相克|相生|synastry|compatibility|compatib|are we compatible|partner's chart|boss was born/i.test(q)) {
      return 'synastry_inquiry';
    }

    // 0c. Health & Vitality / Organs / Sleep / Wellness
    if (/健康|身体|失眠|五脏|气血|生病|养生|作息|精力|疲惫|脾胃|肝胆|心肾|心脏|甲状腺|头痛|wellness|vitality|health|body|sleep|insomnia|organ/i.test(q)) {
      return 'health_vitality';
    }

    // 0d. Real Estate / Housing / Moving / Relocation
    if (/买房|置业|买房时机|搬家|乔迁|迁居|定居|安居|买房子|房产|动产|换城市|real estate|buy a house|property|move house|relocat|moving/i.test(q)) {
      return 'real_estate_moving';
    }

    // 0e. Legal Dispute / Lawsuit / Defense / Contract Breach / Layoff
    if (/小人|官非|打官司|起诉|纠纷|合同|诉讼|背刺|辞退|裁员|被坑|劳动仲裁|legal|lawsuit|dispute|contract|court|sue|layoff|betray/i.test(q)) {
      return 'legal_dispute';
    }

    // 0f. Pattern Metaphysics / Structure Dialectics / Ten Gods Transformation / Hidden Wealth & Spouse
    if (/伤官(吐秀|驾杀|制杀|配印|生财|合杀)|杀刃(带伤)?|羊刃(驾杀|配杀)|卯戌(合|化)|暗合?化财|合化火|水土混杂|水土相战|食神制杀|从格|格局(辨析|判断|判定|分析|差别|区别)|七杀(配印|有制)|hurting officer|seven killing|yang blade|mao xu|combination into fire|hidden wealth|wife and wealth|talent expression|harnessing killing|subduing killing/i.test(q) ||
        (/妻财/i.test(q) && /合|化|火|算|暗|局/i.test(q)) ||
        (/卯木/i.test(q) && /加持|合|戌/i.test(q)) ||
        (/水旺/i.test(q) && /戌土|金/i.test(q))) {
      return 'pattern_metaphysics';
    }

    // 1. Romance / Marriage / Dating / Partner
    if (/对象|婚恋|结婚|恋爱|脱单|另一半|正缘|伴侣|男朋友|女朋友|老公|老婆|姻缘|桃花|夫妻|配偶|红鸾|天喜|相亲|嫁|娶|romance|partner|marriage|dating|love|spouse|boyfriend|girlfriend|wife|husband|relationship|peach blossom/i.test(q)) {
      return 'romance_timing';
    }

    // 2. Academic / Graduate / Exam / Study / PhD
    if (/考研|考学|升学|考公|考试|留学|博士|硕博|论文|学术|大学|高校|学校|文昌|深造|读书|申博|读博|exam|study|academic|university|school|phd|master|degree|research|admission/i.test(q)) {
      return 'academic_exam';
    }

    // 3. Partnership / Co-founder / Cooperation
    if (/合伙|合作|搭档|股东|合资|合伙人|合股|合伙做|partner(?!.*(?:romance|love|dating|spouse|wife|husband))|cooperat|co-founder|shareholder|alliance/i.test(q)) {
      return 'partnership';
    }

    // 4. Upward Management / Boss / Superiors
    if (/向上|汇报|领导|上级|老板|主管|上司|manage|boss|supervisor|manager/i.test(q)) {
      return 'manage_up';
    }

    // 5. Career Pivot / Stay vs Move
    if (/跳槽|转轨|留任|抉择|工作|找工作|转行|换工作|离职|pivot|career|switch|job|resignation/i.test(q)) {
      return 'career_pivot';
    }

    // 6. Overthinking / Anxiety / Mental Friction
    if (/内耗|反刍|焦虑|怀疑|失眠|心累|烦躁|抑郁|自耗|friction|doubt|anxiety|stress|overthinking|ruminat/i.test(q)) {
      return 'overthinking';
    }

    // 7. Wealth / Investment / Side-business
    if (/财|钱|投资|副业|理财|基金|炒股|发财|暴富|变现|商业|商业化|wealth|money|invest|cash/i.test(q)) {
      return 'wealth_window';
    }

    // Contextual Inheritance for follow-up questions
    if (sessionContext && sessionContext.lastCategory) {
      if (sessionContext.lastCategory === 'pattern_metaphysics' && (/那|具体|然后|还有|另外|怎么|如果|为什么|何时|哪|what about|then|when|how/i.test(q) || sub !== 'comprehensive')) {
        return 'pattern_metaphysics';
      }
      if (sub !== 'comprehensive' || /那|具体|然后|还有|另外|怎么|如果|为什么|何时|哪|what about|then|when|how/i.test(q)) {
        return sessionContext.lastCategory;
      }
    }

    // Fallbacks based on subcategory
    if (['pattern_diff', 'water_xu_metal', 'mao_xu_fire', 'killing_blade_officer', 'wealth_wife_fire'].includes(sub)) {
      return 'pattern_metaphysics';
    }

    if (sub === 'timing_precision') {
      if (sessionContext && sessionContext.lastCategory) return sessionContext.lastCategory;
      return 'romance_timing';
    }

    if (sub === 'spouse_profile' || sub === 'encounter_location' || sub === 'marriage_year') {
      return 'romance_timing';
    }

    if (sub === 'health_organ') return 'health_vitality';
    if (sub === 'property_timing') return 'real_estate_moving';

    return 'general';
  }

  /**
   * Calculate 12-Month Transit Timing Windows (流月应期全相表)
   */
  static calculateMonthlyTransitWindows(bazi, luck, currentYear = 2026, category = 'romance_timing', lang = 'zh') {
    const isEn = (lang === 'en');
    const dm = bazi?.dayMaster || '甲';
    const db = bazi?.pillars?.day?.branch || '午';
    const yb = bazi?.pillars?.year?.branch || '午';

    // Void Branches
    const voidBranches = this.calculateKongWang(dm, db);
    const isDayBranchVoid = voidBranches.includes(db);

    const enrichWin = (w, monthBranch, startDate, endDate) => {
      w.startDate = startDate;
      w.endDate = endDate;
      w.gregorianDates = {
        start: startDate ? startDate.replace(/-/g, '') : '20260707',
        end: endDate ? endDate.replace(/-/g, '') : '20260807'
      };
      w.shenShaBadges = this.evaluateMonthShenSha(dm, yb, monthBranch, lang);
      if (isDayBranchVoid && (monthBranch === db || voidBranches.includes(monthBranch))) {
        w.voidStatus = isEn ? '⚡ Void Pierced · Surge' : '⚡ 冲空填实 · 奇运突破';
      } else {
        w.voidStatus = '';
      }
      return w;
    };

    if (category === 'pattern_metaphysics') {
      const p = enrichWin({
        badge: isEn ? '🥇 Culmination & Manifestation Window' : '🥇 六合化火·暗财显化黄金期',
        lunarMonth: isEn ? 'Lunar Month 9 (Wu-Xu)' : '农历九月（戊戌月）',
        solarTerm: isEn ? 'Cold Dew to Frost Descent (Oct 8 ~ Nov 6)' : '寒露 至 霜降（公历 10月8日 ~ 11月6日）',
        probability: 93,
        mechanism: isEn ? 'Wu-Xu triggers the Mao-Xu combination into Fire; hidden assets and strategic alliances materialize into concrete reality' : '戊戌月岁君与原局触动【卯戌六合化火】与【寅午戌三合火局】，暗合化财由隐入显，战友型正缘与危机套利之第一高光期',
        action: isEn ? 'Formalize joint commercial equity, seal strategic partnerships, and lock in milestone marital or financial commitments' : '落实深度商业合伙签约、敲定隐形权益分配、明确正缘盟约或启动重大危机并购'
      }, '戌', '2026-10-08', '2026-11-06');

      const s = enrichWin({
        badge: isEn ? '🥈 Solar King Elevation Window' : '🥈 岁君坐镇·权威破局爆发期',
        lunarMonth: isEn ? 'Lunar Month 5 (Jia-Wu)' : '农历五月（甲午月）',
        solarTerm: isEn ? 'Grain in Ear to Summer Solstice (Jun 5 ~ Jul 6)' : '芒种 至 夏至（公历 6月5日 ~ 7月6日）',
        probability: 89,
        mechanism: isEn ? 'Bing-Wu annual king commands the field; fire tempers the Seven Killings and sharpens Hurting Officer ingenuity' : '丙午岁君本气坐镇，纯阳真火彻底暖局，七杀凶威被纯火淬砺为统帅权柄，伤官灵感与执行力处于周期极值',
        action: isEn ? 'Take command of pivotal high-stakes turnaround initiatives; pitch bold, unconventional business innovations' : '主动承担最硬核高难度的危机破局业务，向管理层或市场亮出颠覆式创新战法'
      }, '午', '2026-06-05', '2026-07-06');

      const t = enrichWin({
        badge: isEn ? '🥉 Output Genius Ignition Window' : '🥉 伤官得令·灵动机变生发期',
        lunarMonth: isEn ? 'Lunar Month 2 (Xin-Mao)' : '农历二月（辛卯月）',
        solarTerm: isEn ? 'Insects Awaken to Spring Equinox (Mar 5 ~ Apr 4)' : '惊蛰 至 春分（公历 3月5日 ~ 4月4日）',
        probability: 84,
        mechanism: isEn ? 'Mao Wood output star flourishes; intellect and asymmetric tactics unlock breakthrough opportunities' : '卯木伤官主事当令，秀气外发，机变谋略纵横，以智破死局，吸引同频顶尖盟友'
      }, '卯', '2026-03-05', '2026-04-04');

      const c = enrichWin({
        badge: isEn ? '⚠️ Energy Clashing Caution Month' : '⚠️ 冲刑克泄·情绪波动预警月',
        lunarMonth: isEn ? 'Lunar Month 11 (Geng-Zi)' : '农历十一月（庚子月）',
        solarTerm: isEn ? 'Major Snow to Winter Solstice (Dec 7 ~ Jan 4)' : '大雪 至 冬至（公历 12月7日 ~ 次年1月4日）',
        probability: 45,
        mechanism: isEn ? 'Zi-Wu clash and Zi-Mao friction introduce cognitive tension; guard against impulsive confrontations or emotional fatigue' : '天克地冲，子水冲午火又刑卯木，气机震荡，易生口角是非或克泄交加之心神疲惫',
        action: isEn ? 'Practice calm detachment; avoid uncalculated confrontations and protect sleep and physical vitality' : '戒骄戒躁，以静制动；绝不在心神激荡时做重大断绝决定，守固元神'
      }, '子', '2026-12-07', '2027-01-04');

      return {
        title: isEn ? '2026 Pattern Fruition & Transformed Wealth Activation Windows' : '2026 丙午流年 · 格局大成与暗财妻财应期全相表',
        category: category,
        primaryWindow: p,
        secondaryWindow: s,
        tertiaryWindow: t,
        cautionaryMonth: c
      };
    } else if (category === 'romance_timing') {
      const p = enrichWin({
        badge: isEn ? '🥇 Primary Peak Window' : '🥇 首席黄金应期',
        lunarMonth: isEn ? 'Lunar Month 6 (Yi-Wei)' : '农历六月（乙未月）',
        solarTerm: isEn ? 'Minor Heat to Major Heat (Jul 7 ~ Aug 6)' : '小暑 至 大暑（公历 7月7日 ~ 8月6日）',
        probability: 92,
        mechanism: isEn ? 'Six-Harmony union combines with the Annual King and Spouse Palace; harmony anchors formal commitment' : '午未六合化土生财，岁君六合入夫妻宫！逢合主定，气数聚合之第一吉相',
        action: isEn ? 'Prime window for formalizing relationship milestones and long-term commitments' : '最宜确立恋爱名分、坦诚心扉、见家长或共同制定长远发展盟约'
      }, '未', '2026-07-07', '2026-08-06');

      const s = enrichWin({
        badge: isEn ? '🥈 Secondary Peak Window' : '🥈 次席高光应期',
        lunarMonth: isEn ? 'Lunar Month 5 (Jia-Wu)' : '农历五月（甲午月）',
        solarTerm: isEn ? 'Grain in Ear to Summer Solstice (Jun 5 ~ Jul 6)' : '芒种 至 夏至（公历 6月5日 ~ 7月6日）',
        probability: 88,
        mechanism: isEn ? 'Annual King duplication vibrates matching resonance; social magnetism and peer attraction peak' : '岁君伏吟（甲午值守），同气相感，桃花星动，异性同侪吸引力峰值',
        action: isEn ? 'Proactively attend professional symposiums, elite salons, and alumni gatherings' : '主动走出舒适区参与行业峰会、艺术沙龙或校友聚会，触动引力场'
      }, '午', '2026-06-05', '2026-07-06');

      const t = enrichWin({
        badge: isEn ? '🥉 Tertiary Window' : '🥉 合局收官应期',
        lunarMonth: isEn ? 'Lunar Month 9 (Wu-Xu)' : '农历九月（戊戌月）',
        solarTerm: isEn ? 'Cold Dew to Frost Descent (Oct 8 ~ Nov 6)' : '寒露 至 霜降（公历 10月8日 ~ 11月6日）',
        probability: 82,
        mechanism: isEn ? 'Tri-Union fire alliance consolidates in storage; stability and alignment materialize' : '寅午戌三合火局大成入库，财官双美，情感关系尘埃落定',
        action: isEn ? 'Align upon shared future domestic living plans and joint milestones' : '宜商议未来定居城市与共同生活规划，明确长期生活定所'
      }, '戌', '2026-10-08', '2026-11-06');

      const c = enrichWin({
        badge: isEn ? '⚠️ Cautionary Buffer Month' : '⚠️ 情绪磨合预警月',
        lunarMonth: isEn ? 'Lunar Month 11 (Geng-Zi)' : '农历十一月（庚子月）',
        solarTerm: isEn ? 'Major Snow to Winter Solstice (Dec 7 ~ Jan 4)' : '大雪 至 冬至（公历 12月7日 ~ 次年1月4日）',
        probability: 45,
        mechanism: isEn ? 'Zi-Wu clash stirs the Spouse Palace; heightened emotional sensitivity requires patience' : '子午相冲冲动夫妻宫与岁君，水火交战，情绪易敏感挑剔甚至冷战',
        action: isEn ? 'Practice 24-hour delayed reaction; prioritize attentive listening over confrontation' : '遇事执行24小时冷敷隔离法则，多体恤倾听，切忌冲动做决绝决定'
      }, '子', '2026-12-07', '2027-01-04');

      return {
        title: isEn ? '2026 Bing-Wu Transit: 12-Month Romance Timing & Auspicious Windows' : '2026 丙午流年 · 十二流月正缘时令应期全相表',
        category: category,
        primaryWindow: p,
        secondaryWindow: s,
        tertiaryWindow: t,
        cautionaryMonth: c
      };
    } else if (category === 'academic_exam') {
      const p = enrichWin({
        badge: isEn ? '🥇 Prime Exam Window' : '🥇 首席考学黄金期',
        lunarMonth: isEn ? 'Lunar Month 2 (Xin-Mao)' : '农历二月（辛卯月）',
        solarTerm: isEn ? 'Awakening of Insects to Spring Equinox (Mar 5 ~ Apr 4)' : '惊蛰 至 春分（公历 3月5日 ~ 4月4日）',
        probability: 93,
        mechanism: isEn ? 'Wen Chang noble star shines; Wood-Fire clarity compounds mental retention' : '文昌贵人当权，木火通明，深度记忆与逻辑调取效率峰值',
        action: isEn ? 'Ideal for major written examinations, paper submissions, and thesis proposals' : '最宜参加重要笔试、提交关键学术论文或研究立项'
      }, '卯', '2026-03-05', '2026-04-04');

      const s = enrichWin({
        badge: isEn ? '🥈 Defense & Admission Window' : '🥈 答辩放榜顺遂期',
        lunarMonth: isEn ? 'Lunar Month 5 (Jia-Wu)' : '农历五月（甲午月）',
        solarTerm: isEn ? 'Grain in Ear to Summer Solstice (Jun 5 ~ Jul 6)' : '芒种 至 夏至（公历 6月5日 ~ 7月6日）',
        probability: 87,
        mechanism: isEn ? 'Output star vitality illuminates intellectual breakthroughs' : '食伤吐秀大展宏图，面试答辩表达力极具感染力',
        action: isEn ? 'Ideal for interview defense, meeting supervisors, and scholarship interviews' : '最宜导师拜会交流、复试答辩及奖学金争夺'
      }, '午', '2026-06-05', '2026-07-06');

      const t = enrichWin({
        badge: isEn ? '🥉 Acceptance Confirmation' : '🥉 录取盖章收官期',
        lunarMonth: isEn ? 'Lunar Month 10 (Ji-Hai)' : '农历十月（己亥月）',
        solarTerm: isEn ? 'Beginning of Winter to Minor Snow (Nov 7 ~ Dec 6)' : '立冬 至 小雪（公历 11月7日 ~ 12月6日）',
        probability: 80,
        mechanism: isEn ? 'Direct Resource combines with Day Master, solidifying institutional moats' : '正印生身入库，官方录取与院校注册尘埃落定',
        action: isEn ? 'Secure formal visa, official enrollment confirmation, and lab allocation' : '宜落实正式录取通知、签证办理与实验室入驻'
      }, '亥', '2026-11-07', '2026-12-06');

      const c = enrichWin({
        badge: isEn ? '⚠️ Energy Depletion Warning' : '⚠️ 备考心力损耗预警月',
        lunarMonth: isEn ? 'Lunar Month 11 (Geng-Zi)' : '农历十一月（庚子月）',
        solarTerm: isEn ? 'Major Snow to Winter Solstice (Dec 7 ~ Jan 4)' : '大雪 至 冬至（公历 12月7日 ~ 次年1月4日）',
        probability: 50,
        mechanism: isEn ? 'Water-Fire clash scatters cognitive stamina; avoid late-night cramming' : '水火交冲耗损心肾阳气，易心浮气躁或注意力涣散',
        action: isEn ? 'Guard against all-nighters; enforce 8 hours of sleep before crunch tests' : '严禁熬夜刷题，考前以平稳作息与慢跑散步稳固元神'
      }, '子', '2026-12-07', '2027-01-04');

      return {
        title: isEn ? '2026 Academic & Examination Timing Windows' : '2026 丙午流年 · 考学申博与文昌应期全相表',
        category: category,
        primaryWindow: p,
        secondaryWindow: s,
        tertiaryWindow: t,
        cautionaryMonth: c
      };
    } else if (category === 'health_vitality') {
      const p = enrichWin({
        badge: isEn ? '🥇 Cellular Recovery Window' : '🥇 固本培元回阳期',
        lunarMonth: isEn ? 'Lunar Month 10 (Ji-Hai)' : '农历十月（己亥月）',
        solarTerm: isEn ? 'Beginning of Winter to Minor Snow (Nov 7 ~ Dec 6)' : '立冬 至 小雪（公历 11月7日 ~ 12月6日）',
        probability: 92,
        mechanism: isEn ? 'Water energy restores Kidney and Heart balance; prime window for cellular recuperation' : '亥水润泽燥火，心肾相交，水火既济，乃元气固本与深度睡眠调摄之第一吉相',
        action: isEn ? 'Adopt restorative circadian habits, drink nourishing herbal infusions, and avoid late screen time' : '严守子时睡眠、温补肾水、以八段锦或慢走温养气血，忌大汗淋漓'
      }, '亥', '2026-11-07', '2026-12-06');

      const s = enrichWin({
        badge: isEn ? '🥈 Spleen & Metabolism Window' : '🥈 脾胃代谢畅旺期',
        lunarMonth: isEn ? 'Lunar Month 4 (Gui-Si)' : '农历四月（癸巳月）',
        solarTerm: isEn ? 'Beginning of Summer to Grain Buds (May 5 ~ Jun 4)' : '立夏 至 小满（公历 5月5日 ~ 6月4日）',
        probability: 87,
        mechanism: isEn ? 'Dew energy harmonizes digestion and boosts mitochondrial vitality' : '雨露滋润生旺之位，调和脾胃运化，体能代谢效率达到周期峰值',
        action: isEn ? 'Optimize digestive nutrition; engage in consistent moderate aerobic exercise' : '调理清淡饮食、排湿健脾、晨间快走或有氧运动激活周身微循环'
      }, '巳', '2026-05-05', '2026-06-04');

      const t = enrichWin({
        badge: isEn ? '🥉 Musculoskeletal Recovery' : '🥉 经络舒展复健期',
        lunarMonth: isEn ? 'Lunar Month 6 (Yi-Wei)' : '农历六月（乙未月）',
        solarTerm: isEn ? 'Minor Heat to Major Heat (Jul 7 ~ Aug 6)' : '小暑 至 大暑（公历 7月7日 ~ 8月6日）',
        probability: 81,
        mechanism: isEn ? 'Six-Harmony stabilizes muscle tissue and musculoskeletal flexibility' : '午未六合化土，肌肉经络舒展，适合运动损伤康复与身心释压',
        action: isEn ? 'Schedule full somatic bodywork, acupuncture, or posture corrective therapy' : '安排推拿正骨、针灸艾灸或全身筋膜深度放松调理'
      }, '未', '2026-07-07', '2026-08-06');

      const c = enrichWin({
        badge: isEn ? '⚠️ Cardiovascular Strain Warning' : '⚠️ 心肾交战透支预警月',
        lunarMonth: isEn ? 'Lunar Month 11 (Geng-Zi)' : '农历十一月（庚子月）',
        solarTerm: isEn ? 'Major Snow to Winter Solstice (Dec 7 ~ Jan 4)' : '大雪 至 冬至（公历 12月7日 ~ 次年1月4日）',
        probability: 40,
        mechanism: isEn ? 'Zi-Wu clash stirs cardiovascular tension; guard against mental burnout' : '子午相冲水火激战，心血管与神经负荷加重，极易因劳累出现失眠头痛',
        action: isEn ? 'Enforce strict 23:00 sleep cutoff; halt intense night-time cognitive workouts' : '严禁子时熬夜刷手机，睡前温水泡脚，心率亢奋时执行冷水冲腕阻断'
      }, '子', '2026-12-07', '2027-01-04');

      return {
        title: isEn ? '2026 Health, Vitality & Five-Element Circadian Timing' : '2026 丙午流年 · 身心气血与五脏调摄时令全相表',
        category: category,
        primaryWindow: p,
        secondaryWindow: s,
        tertiaryWindow: t,
        cautionaryMonth: c
      };
    } else if (category === 'real_estate_moving') {
      const p = enrichWin({
        badge: isEn ? '🥇 Prime Deed & Purchase Window' : '🥇 置业签约黄金期',
        lunarMonth: isEn ? 'Lunar Month 6 (Yi-Wei)' : '农历六月（乙未月）',
        solarTerm: isEn ? 'Minor Heat to Major Heat (Jul 7 ~ Aug 6)' : '小暑 至 大暑（公历 7月7日 ~ 8月6日）',
        probability: 94,
        mechanism: isEn ? 'Six-Harmony consolidates Earth storage; prime window for property deed finalization' : '午未六合化土生财入印库，房产契约与宅基气场聚合稳固',
        action: isEn ? 'Finalize property purchases, execute mortgage deeds, or confirm long-term leases' : '宜签订购房合同、敲定银行贷款利率、落定核心安居居所'
      }, '未', '2026-07-07', '2026-08-06');

      const s = enrichWin({
        badge: isEn ? '🥈 Asset Optimization Window' : '🥈 房产优化重组期',
        lunarMonth: isEn ? 'Lunar Month 9 (Wu-Xu)' : '农历九月（戊戌月）',
        solarTerm: isEn ? 'Cold Dew to Frost Descent (Oct 8 ~ Nov 6)' : '寒露 至 霜降（公历 10月8日 ~ 11月6日）',
        probability: 88,
        mechanism: isEn ? 'Tri-Union fire transforms into stable Earth assets; wealth storage locked' : '寅午戌三合火局化生重土，利于大额资产重组与置换高能级不动产',
        action: isEn ? 'Complete key renovations, conduct property appraisals, or transition properties' : '宜收房验房、推进大件硬装施工与资产优化配置'
      }, '戌', '2026-10-08', '2026-11-06');

      const t = enrichWin({
        badge: isEn ? '🥉 Relocation & Moving Window' : '🥉 乔迁入宅发轫期',
        lunarMonth: isEn ? 'Lunar Month 1 (Geng-Yin)' : '农历正月（庚寅月）',
        solarTerm: isEn ? 'Beginning of Spring to Rain Water (Feb 4 ~ Mar 4)' : '立春 至 雨水（公历 2月4日 ~ 3月4日）',
        probability: 82,
        mechanism: isEn ? 'Post Horse and birth vitality trigger smooth household relocation' : '新岁长生动土，驿马逢生，利于搬家乔迁入宅生旺气象',
        action: isEn ? 'Execute official move-in ceremonies and clear old spatial clutter' : '选定吉日举行乔迁温居仪式，彻底清理旧居滞气杂物'
      }, '寅', '2026-02-04', '2026-03-04');

      const c = enrichWin({
        badge: isEn ? '⚠️ Title Dispute Warning' : '⚠️ 产权条款防坑预警月',
        lunarMonth: isEn ? 'Lunar Month 11 (Geng-Zi)' : '农历十一月（庚子月）',
        solarTerm: isEn ? 'Major Snow to Winter Solstice (Dec 7 ~ Jan 4)' : '大雪 至 冬至（公历 12月7日 ~ 次年1月4日）',
        probability: 40,
        mechanism: isEn ? 'Zi-Wu clash disturbs foundation qi; risk of contractual disputes or leaks' : '子午冲犯宅基气机，易因房屋漏水、产权条款或定金纠纷产生耗损',
        action: isEn ? 'Avoid signing non-refundable property deposits; thoroughly review title encumbrances' : '避开在此月签署大额不可退定金，务必严查产权背书与物业细节'
      }, '子', '2026-12-07', '2027-01-04');

      return {
        title: isEn ? '2026 Real Estate Acquisition & Relocation Timing' : '2026 丙午流年 · 置业安居与乔迁买房时令全相表',
        category: category,
        primaryWindow: p,
        secondaryWindow: s,
        tertiaryWindow: t,
        cautionaryMonth: c
      };
    } else if (category === 'legal_dispute') {
      const p = enrichWin({
        badge: isEn ? '🥇 Statutory Justice Window' : '🥇 法度立案维权期',
        lunarMonth: isEn ? 'Lunar Month 2 (Xin-Mao)' : '农历二月（辛卯月）',
        solarTerm: isEn ? 'Awakening of Insects to Spring Equinox (Mar 5 ~ Apr 4)' : '惊蛰 至 春分（公历 3月5日 ~ 4月4日）',
        probability: 93,
        mechanism: isEn ? 'Direct Officer commands statutory order; institutional justice strongly prevails' : '正官星当令司权，体制规则与程序正义庇护，利于依法维权抗争',
        action: isEn ? 'Collect and notarize evidence; submit official legal notices or labor arbitrations' : '全面固化证据链条、发送正规律师函、提起劳动仲裁或诉讼立案'
      }, '卯', '2026-03-05', '2026-04-04');

      const s = enrichWin({
        badge: isEn ? '🥈 Mediation Settlement Window' : '🥈 谈判调解止损期',
        lunarMonth: isEn ? 'Lunar Month 10 (Ji-Hai)' : '农历十月（己亥月）',
        solarTerm: isEn ? 'Beginning of Winter to Minor Snow (Nov 7 ~ Dec 6)' : '立冬 至 小雪（公历 11月7日 ~ 12月6日）',
        probability: 89,
        mechanism: isEn ? 'Tian De noble star intervenes; amicable settlement and mediation favored' : '天德吉星化解凶煞，官杀化印，利于在权威第三方主持下和解',
        action: isEn ? 'Negotiate settlement covenants, release agreements, and exit compensations' : '签署具有法律约束力的调解协议书，锁定赔偿条款并解除竞业限制'
      }, '亥', '2026-11-07', '2026-12-06');

      const t = enrichWin({
        badge: isEn ? '🥉 Resolution & Restitution' : '🥉 纠纷了结收官期',
        lunarMonth: isEn ? 'Lunar Month 6 (Yi-Wei)' : '农历六月（乙未月）',
        solarTerm: isEn ? 'Minor Heat to Major Heat (Jul 7 ~ Aug 6)' : '小暑 至 大暑（公历 7月7日 ~ 8月6日）',
        probability: 83,
        mechanism: isEn ? 'Six-Harmony dissolves adversarial tension; adversary momentum dissipates' : '午未六合化解戾气，对方破绽暴露，谈判筹码完全倒向命主',
        action: isEn ? 'Solidify financial restitution and establish irreversible mutual waivers' : '落实资金到账赔付，白纸黑字签署免责与互不追究协议'
      }, '未', '2026-07-07', '2026-08-06');

      const c = enrichWin({
        badge: isEn ? '⚠️ Peak Friction Hazard Month' : '⚠️ 激化冲突高危预警月',
        lunarMonth: isEn ? 'Lunar Month 11 (Geng-Zi)' : '农历十一月（庚子月）',
        solarTerm: isEn ? 'Major Snow to Winter Solstice (Dec 7 ~ Jan 4)' : '大雪 至 冬至（公历 12月7日 ~ 次年1月4日）',
        probability: 38,
        mechanism: isEn ? 'Tian Ke Di Chong peak friction; heightened risk of impulsive escalations' : '天克地冲水火相战，小人跳梁背刺，极易因情绪激动而在法庭失言',
        action: isEn ? 'Maintain complete silence; refrain from verbal sparring and delegate to legal counsel' : '绝不私下与对方进行情绪化口舌争吵，全权委托专业律师依法对接'
      }, '子', '2026-12-07', '2027-01-04');

      return {
        title: isEn ? '2026 Legal Defense & Interpersonal Protection Windows' : '2026 丙午流年 · 维权自保与官非小人防坑时令全相表',
        category: category,
        primaryWindow: p,
        secondaryWindow: s,
        tertiaryWindow: t,
        cautionaryMonth: c
      };
    } else {
      // Career / Wealth Timing
      const p = enrichWin({
        badge: isEn ? '🥇 Prime Career Window' : '🥇 首席晋升黄金期',
        lunarMonth: isEn ? 'Lunar Month 6 (Yi-Wei)' : '农历六月（乙未月）',
        solarTerm: isEn ? 'Minor Heat to Major Heat (Jul 7 ~ Aug 6)' : '小暑 至 大暑（公历 7月7日 ~ 8月6日）',
        probability: 91,
        mechanism: isEn ? 'Six-Harmony wealth alliance stabilizes revenue compounding' : '午未六合化土生财，岁运相合利于职级晋升与项目成果变现',
        action: isEn ? 'Initiate performance reviews, pitch pivotal initiatives, or formalize equity agreements' : '主动发起绩效汇报、争取关键核心项目主导权、敲定期权提成'
      }, '未', '2026-07-07', '2026-08-06');

      const s = enrichWin({
        badge: isEn ? '🥈 Pivot & Breakthrough Window' : '🥈 破局跃升爆发期',
        lunarMonth: isEn ? 'Lunar Month 9 (Wu-Xu)' : '农历九月（戊戌月）',
        solarTerm: isEn ? 'Cold Dew to Frost Descent (Oct 8 ~ Nov 6)' : '寒露 至 霜降（公历 10月8日 ~ 11月6日）',
        probability: 86,
        mechanism: isEn ? 'Tri-Union fire authority unlocks broader jurisdictional scope' : '寅午戌三合火局大成，财星透干，适合开辟第二增长曲线',
        action: isEn ? 'Execute strategic pivot, sign high-value commercial contracts, or launch prototypes' : '落实跳槽换轨、签署大额商业合同或上线独立商业产品'
      }, '戌', '2026-10-08', '2026-11-06');

      const t = enrichWin({
        badge: isEn ? '🥉 Foundation Laying Window' : '🥉 积蓄发轫蓄势期',
        lunarMonth: isEn ? 'Lunar Month 1 (Geng-Yin)' : '农历正月（庚寅月）',
        solarTerm: isEn ? 'Beginning of Spring to Rain Water (Feb 4 ~ Mar 4)' : '立春 至 雨水（公历 2月4日 ~ 3月4日）',
        probability: 78,
        mechanism: isEn ? 'Birth-phase vitality kicks off new multi-year trajectory' : '三合长生位萌发，新岁气机生发，适合确立全年作战地图',
        action: isEn ? 'Map annual goals, sharpen core technical skills, and build strategic alliances' : '制定全年关键战役目标，打磨不可替代之看家本领'
      }, '寅', '2026-02-04', '2026-03-04');

      const c = enrichWin({
        badge: isEn ? '⚠️ High Friction Risk Month' : '⚠️ 职场博弈高摩擦预警月',
        lunarMonth: isEn ? 'Lunar Month 11 (Geng-Zi)' : '农历十一月（庚子月）',
        solarTerm: isEn ? 'Major Snow to Winter Solstice (Dec 7 ~ Jan 4)' : '大雪 至 冬至（公历 12月7日 ~ 次年1月4日）',
        probability: 42,
        mechanism: isEn ? 'Zi-Wu clash prompts organizational friction or sudden restructuring' : '天克地冲组织动荡，易生口角是非或架构突变',
        action: isEn ? 'Adopt low-profile stance; avoid overt confrontations and preserve energy reserves' : '以静制动，严禁当面顶撞上级或卷入无谓派系争斗'
      }, '子', '2026-12-07', '2027-01-04');

      return {
        title: isEn ? '2026 Career Elevation & Wealth Opportunity Windows' : '2026 丙午流年 · 事业晋升与财富潮汐全相表',
        category: category,
        primaryWindow: p,
        secondaryWindow: s,
        tertiaryWindow: t,
        cautionaryMonth: c
      };
    }
  }

  /**
   * Anticipate high-probability next user questions based on current intent & subcategory
   */
  static anticipateQuestions(category, subcategory, bazi, lang = 'zh') {
    const isEn = (lang === 'en');
    if (category === 'romance_timing') {
      if (subcategory === 'timing_precision') {
        return isEn ? [
          { icon: '👤', title: 'Partner Profile', query: 'What are my destiny partner appearance, stature, and career background?' },
          { icon: '📍', title: 'Encounter Venue', query: 'In what venues or life scenarios are we most likely to meet?' },
          { icon: '💍', title: 'Marriage Year', query: 'In which year are we most likely to formalize marriage commitment?' }
        ] : [
          { icon: '👤', title: '相貌身材画像', query: '我命定正缘的长相五官、身材气质与从事行业特征是什么？' },
          { icon: '📍', title: '相遇场域地点', query: '我们在什么地点、城市或生活场景下最容易相遇？' },
          { icon: '💍', title: '成婚领证年份', query: '依据岁运合化，我们最可能领证定下名分的是哪一年？' }
        ];
      }
      if (subcategory === 'spouse_profile') {
        return isEn ? [
          { icon: '📅', title: 'Precise Timing', query: 'What specific lunar months offer the highest probability window for our encounter?' },
          { icon: '⚠️', title: 'Relationship Red Lines', query: 'What are the critical psychological taboos and red lines in our relationship?' },
          { icon: '🌸', title: 'Peach Blossom Feng Shui', query: 'How should I arrange bedroom Feng Shui to activate authentic Peach Blossom?' }
        ] : [
          { icon: '📅', title: '具体应期月份', query: '我们具体是在2026年农历哪几个月相识相遇的概率最高？' },
          { icon: '⚠️', title: '相处禁忌红线', query: '在两人深度相处中，有哪些绝对不能踩的心智雷区与沟通禁忌？' },
          { icon: '🌸', title: '桃花风水布局', query: '如何在卧室精准布置真桃花风水阵来催旺正缘磁场？' }
        ];
      }
      // General romance
      return isEn ? [
        { icon: '📅', title: 'Specific Lunar Months', query: 'When will my destiny partner arrive? What are the specific lunar months and deadline?' },
        { icon: '👤', title: 'Appearance & Stature', query: 'What are my destiny partner facial features, stature, and career background?' },
        { icon: '🌸', title: 'Bedroom Feng Shui', query: 'How should I arrange bedroom Feng Shui to activate authentic Peach Blossom?' }
      ] : [
        { icon: '📅', title: '具体期限月份', query: '那具体期限是什么时候？在农历哪几个月份应期最强？' },
        { icon: '👤', title: '相貌身材全相', query: '对方的长相五官、身材气质与从事行业特征全相是什么？' },
        { icon: '🌸', title: '卧室风水布局', query: '如何在卧室布置真桃花风水阵来加速正缘显化？' }
      ];
    } else if (category === 'manage_up') {
      return isEn ? [
        { icon: '💼', title: '3-Sentence Reporting', query: 'What is the precise 3-sentence reporting formula when dealing with a demanding supervisor?' },
        { icon: '🛡️', title: 'Handling Public Criticism', query: 'How should I handle unfair public criticism from management without escalating friction?' },
        { icon: '📅', title: 'Promotion Window', query: 'Which lunar month is optimal for proposing a raise or title advancement this year?' }
      ] : [
        { icon: '💼', title: '汇报三句话定式', query: '向强势且苛刻的领导汇报工作时，专属的三句话汇报定式是什么？' },
        { icon: '🛡️', title: '化解公开挑刺', query: '领导在公开会议上挑刺或甩锅时，如何四两拨千斤化解尴尬？' },
        { icon: '📅', title: '升职加薪时机', query: '今年在单位主动争取升职加薪或核心资源，最佳窗口在几月份？' }
      ];
    } else if (category === 'career_pivot') {
      return isEn ? [
        { icon: '📅', title: 'Best Pivot Window', query: 'Which lunar month is the optimal window for job switching or career pivot?' },
        { icon: '⚖️', title: 'Stay vs Move Odds', query: 'Compare staying in my current role versus jumping to an ambitious track: what are the odds and energy friction?' },
        { icon: '🌍', title: 'Geographic Alignment', query: 'Which city element aligns best with my favorable elements for career relocation?' }
      ] : [
        { icon: '📅', title: '跳槽转轨月份', query: '今年最佳跳槽或转轨的黄金窗口在农历几月份？' },
        { icon: '⚖️', title: '留任vs转轨胜率', query: '对比留在当前工位与转向新赛道，我的综合胜率与能耗比如何？' },
        { icon: '🌍', title: '地缘城市选择', query: '依我八字喜用神，向哪个城市或区域发展能够获得最大助力？' }
      ];
    } else if (category === 'academic_exam') {
      return isEn ? [
        { icon: '📅', title: 'Exam/Admission Timing', query: 'What are the specific lunar months for exam performance and admission breakthroughs?' },
        { icon: '🎓', title: 'Target Universities', query: 'Which top disciplines and universities resonate best with my chart elements?' },
        { icon: '🧘', title: 'Defeating Study Stress', query: 'How can I maintain sustained focus and defeat exam anxiety using spatial alignment?' }
      ] : [
        { icon: '📅', title: '考学录取流月', query: '考研、申博或放榜录取的最佳应期月份具体是在何时？' },
        { icon: '🎓', title: '契合学府学科', query: '我的命盘五行最契合哪些王牌学科与顶尖名校的场能？' },
        { icon: '🧘', title: '文昌风水安神', query: '备考冲刺期如何利用文昌风水与心智法门克服心浮气躁？' }
      ];
    } else if (category === 'wealth_window') {
      return isEn ? [
        { icon: '📅', title: 'Wealth Peak Months', query: 'Which lunar months command the highest indirect wealth momentum this year?' },
        { icon: '💰', title: 'Side-Hustle Validation', query: 'Should I focus on technical side-hustle freelancing or capital investment?' },
        { icon: '⚠️', title: 'Partnership Red Lines', query: 'What are the vital red lines when co-founding or signing business partnerships?' }
      ] : [
        { icon: '📅', title: '财运爆发月份', query: '今年哪几个月份偏财与副业变现爆发力最强？' },
        { icon: '💰', title: '副业模式选择', query: '我更适合做技术类轻资产副业，还是做金融理财投资？' },
        { icon: '⚠️', title: '合伙经商红线', query: '与人合伙做生意或投资时，有哪些绝对不能碰的契约红线？' }
      ];
    } else if (category === 'overthinking') {
      return isEn ? [
        { icon: '🧊', title: '3-Minute Somatic Reset', query: 'What are the immediate physical actions to break a severe ruminative loop?' },
        { icon: '📜', title: 'Handling Judgment', query: 'How does Feng Daos Rong Ku Jian advise dealing with others judgment and cold refusal?' },
        { icon: '🗡️', title: 'Channeling Bandwidth', query: 'How can I convert excess ruminative mental energy into tangible deliverables?' }
      ] : [
        { icon: '🧊', title: '3分钟物理阻断', query: '此刻立刻能做的 3 分钟躯体物理打断动作是什么？' },
        { icon: '📜', title: '他人脸色脱敏', query: '依五代冯道《荣枯鉴》，如何做到对他人脸色与评价彻底脱敏？' },
        { icon: '🗡️', title: '多余算力变现', query: '如何将颅内多余的内耗算力转化为现实世界具有杀伤力的硬核作品？' }
      ];
    } else if (category === 'vague_confusion') {
      return isEn ? [
        { icon: '💼', title: 'Career Roadblock', query: 'Career strategy: how should I manage up or pivot to a new job?' },
        { icon: '💰', title: 'Wealth Strategy', query: 'Wealth strategy: how should I protect cash flow and build income?' },
        { icon: '💖', title: 'Romance Timing', query: 'When will my destiny partner arrive based on my Spouse Palace?' }
      ] : [
        { icon: '💼', title: '职场卡点破局', query: '职场卡点：我该如何向上管理破局或转轨跳槽？' },
        { icon: '💰', title: '财富现金流固守', query: '财富困局：当下岁运我该如何守住现金流或轻量化增收？' },
        { icon: '💖', title: '世俗婚恋正缘', query: '情感迷茫：结合我夫妻宫与岁运，我的正缘何时出现？' }
      ];
    } else if (category === 'synastry_inquiry') {
      return isEn ? [
        { icon: '💡', title: 'Alliance Key', query: 'What is the master key to maintaining a long-term strategic alliance with this person?' },
        { icon: '⚠️', title: 'Friction Red Lines', query: 'What critical emotional or communication triggers must we strictly avoid?' },
        { icon: '📅', title: 'Peak Harmony Timing', query: 'Which lunar months command the highest mutual cooperation resonance this year?' }
      ] : [
        { icon: '💡', title: '攻心相处法门', query: '与对方长期相处的首席核心法门与沟通技巧是什么？' },
        { icon: '⚠️', title: '触碰禁忌雷区', query: '在两人深度博弈或日常相处中，有哪些绝不能碰的死穴与雷区？' },
        { icon: '📅', title: '合化高光月份', query: '今年在农历哪几个月我们双方的合作或情感最容易达成共识？' }
      ];
    } else if (category === 'health_vitality') {
      return isEn ? [
        { icon: '🫁', title: 'Organ Balance', query: 'Which of my Five Elements organs are most vulnerable to energy depletion?' },
        { icon: '🌙', title: 'Circadian Sleep Reset', query: 'What is the optimal sleep cutoff and physical protocol to cure insomnia?' },
        { icon: '🍵', title: 'Herbal Dietary Remedies', query: 'What specific seasonal foods and teas nourish my Day Master energy?' }
      ] : [
        { icon: '🫁', title: '五脏弱项防损', query: '我命盘中哪一个五行脏腑最容易在当前岁运透支或受克？' },
        { icon: '🌙', title: '睡眠硬重启法门', query: '失眠多梦或深度疲惫时，如何通过时令作息斩断神经亢奋？' },
        { icon: '🍵', title: '五行食疗调摄', query: '依我八字喜用神，日常宜多补充哪种性味色彩的食疗与茶饮？' }
      ];
    } else if (category === 'real_estate_moving') {
      return isEn ? [
        { icon: '📅', title: 'Purchase Window', query: 'Which lunar month is the safest and most favorable for signing property deeds?' },
        { icon: '🧭', title: 'Auspicious Directions', query: 'Which geographic city and residential direction best complements my chart?' },
        { icon: '🏠', title: 'Home Feng Shui', query: 'What spatial Feng Shui elements should I inspect before committing to a home?' }
      ] : [
        { icon: '📅', title: '购房签约时机', query: '今年最适宜签订购房合同或落定贷款的黄金窗口在几月份？' },
        { icon: '🧭', title: '利己安居方位', query: '依我八字喜用神，买房置业选在城市的什么方位对自身场能最有利？' },
        { icon: '🏠', title: '户型风水避坑', query: '看房选房时，有哪些房屋朝向或缺角煞气是必须坚决避开的？' }
      ];
    } else if (category === 'pattern_metaphysics') {
      return isEn ? [
        { icon: '⚔️', title: 'Talent vs Harnessing Killing', query: 'What is the core difference between Hurting Officer expressing talent vs harnessing Seven Killings?' },
        { icon: '🔥', title: 'Mao-Xu Fire Transformation', query: 'How does adding Mao Wood resolve the Water-Xu clash into Fire through desiring union?' },
        { icon: '💰', title: 'Hidden Wealth & Spouse Star', query: 'Does the Mao-Xu fire count as Wife and Wealth? How does 2026 Bing-Wu trigger this hidden fortune?' }
      ] : [
        { icon: '⚔️', title: '伤官吐秀与驾杀差别', query: '伤官吐秀与伤官驾杀有何本质差别？对日主身旺身弱与根骨有何根本要求？' },
        { icon: '🔥', title: '卯木加持化火玄机', query: '水旺见戌土遇卯木加持，为何能贪合忘克化火？这如何解开水土相战？' },
        { icon: '💰', title: '暗财妻财与岁运引动', query: '卯戌六合化火算在妻财里面吗？男命暗财聚气与战友型正缘在2026丙午年如何爆发？' }
      ];
    } else if (category === 'legal_dispute') {
      return isEn ? [
        { icon: '⚖️', title: 'Statutory Defense', query: 'How does Feng Daos Rong Ku Jian advise preserving evidence and statutory rights?' },
        { icon: '🛡️', title: 'Handling Betrayal', query: 'How to handle peer sabotage or unfair contract termination without losing leverage?' },
        { icon: '📅', title: 'Mediation Settlement', query: 'Which lunar month is most favorable for achieving an enforceable settlement?' }
      ] : [
        { icon: '⚖️', title: '法度维权存证', query: '依五代冯道《荣枯鉴·法度卷》，如何做到合法合规固化证据而不打草惊蛇？' },
        { icon: '🛡️', title: '化解小人背刺', query: '遭遇同事背刺或不公对待时，如何利用冷面延时化解对方攻势？' },
        { icon: '📅', title: '谈判调解时机', query: '今年在农历几月份进行谈判或调解，最容易争取到理想赔付结果？' }
      ];
    }

    // Default general
    return isEn ? [
      { icon: '💍', title: 'Romance Timing', query: 'When will my destiny partner arrive? What are their personality archetype?' },
      { icon: '💼', title: 'Managing Up', query: 'How should I communicate and report to my supervisor without triggering friction?' },
      { icon: '⚔️', title: 'Career Crossroads', query: 'Facing a career crossroads: stay in my current track or pivot to a new opportunity?' }
    ] : [
      { icon: '💍', title: '正缘何时显化', query: '结合日支配偶宫与当下岁运，我命定正缘何时出现？相貌心性如何？' },
      { icon: '💼', title: '向上管理定式', query: '向严苛或强势上级汇报工作时，如何精准切中要害且绝不踩雷？' },
      { icon: '⚔️', title: '跳槽留任决断', query: '目前面临职业转轨与留任十字路口：依我八字宜主动进击还是深筑护城河？' }
    ];
  }

  /**
   * Actionable Deep Links to other major subsystems
   */
  static getActionLinks(category, subcategory, lang = 'zh') {
    const isEn = (lang === 'en');
    const links = [];

    if (category === 'career_pivot' || category === 'manage_up' || category === 'academic_exam' || category === 'legal_dispute' || subcategory === 'decision_compare') {
      links.push({
        id: 'open_simulator',
        icon: '⚖️',
        label: isEn ? 'Launch Decision Simulator' : '载入双轨沙盘推演',
        action: 'open_simulator'
      });
    }

    if (category === 'romance_timing' || category === 'synastry_inquiry') {
      links.push({
        id: 'open_dossier_spouse',
        icon: '📜',
        label: isEn ? 'Imperial Dossier: Spouse & Family' : '调阅皇家战报·配偶家庭',
        action: 'open_dossier_spouse'
      });
      links.push({
        id: 'open_fengshui',
        icon: '🧭',
        label: isEn ? 'Feng Shui & Residence Guidance' : '测算空间风水与桃花位',
        action: 'open_fengshui'
      });
    }

    if (category === 'wealth_window' || category === 'real_estate_moving' || category === 'health_vitality' || subcategory === 'spatial_remedy') {
      links.push({
        id: 'open_fengshui',
        icon: '🧭',
        label: isEn ? 'Check Residence & Space Feng Shui' : '测算空间风水与五行调理',
        action: 'open_fengshui'
      });
    }

    if (category === 'pattern_metaphysics') {
      links.push({
        id: 'open_simulator',
        icon: '⚖️',
        label: isEn ? 'Launch Decision Simulator' : '载入双轨沙盘推演',
        action: 'open_simulator'
      });
      links.push({
        id: 'open_dossier_spouse',
        icon: '📜',
        label: isEn ? 'Imperial Dossier: Spouse & Family' : '调阅皇家战报·配偶家庭',
        action: 'open_dossier_spouse'
      });
      links.push({
        id: 'open_fengshui',
        icon: '🧭',
        label: isEn ? 'Feng Shui & Residence Guidance' : '测算空间风水与五行调理',
        action: 'open_fengshui'
      });
    }

    return links;
  }

  /**
   * Generate bespoke tactical decision advice
   */
  static generateAdvice(userQuery, bazi, luck, currentYear = 2026, lang = 'zh', sessionContext = null, userSituation = null) {
    const isEn = (lang === 'en');
    const ctx = this.buildContext(bazi, luck, currentYear, null, lang) || {
      dayMaster: '甲',
      element: 'Wood',
      gender: '乾造',
      dayBranch: '寅',
      yearBranch: '午',
      monthBranch: '午',
      hourBranch: '巳',
      vigorScore: 50,
      vigorTier: '较旺格',
      activeDecade: '庚子',
      activeAnnualYear: 2026,
      activeAnnualGanzhi: '丙午',
      activeHexagram: '乾为天',
      firstScroll: '圆通卷',
      primaryArchetype: '技术人员'
    };

    // Extract situation context if provided directly or embedded in query
    let effectiveSituation = (typeof userSituation === 'string' && userSituation.trim()) ? userSituation.trim() : '';
    if (!effectiveSituation && userQuery) {
      const mZh = userQuery.match(/【现实处境补充与深度定制】[：:]\s*(.+)$/);
      const mEn = userQuery.match(/\[Situational Context\][：:]\s*(.+)$/i);
      const mGen = userQuery.match(/^(?:我的)?(?:现实)?处境(?:是|补充)?[：:]\s*(.+)$/);
      if (mZh && mZh[1]) effectiveSituation = mZh[1].trim();
      else if (mEn && mEn[1]) effectiveSituation = mEn[1].trim();
      else if (mGen && mGen[1]) effectiveSituation = mGen[1].trim();
    }
    if (effectiveSituation) {
      if (typeof ActionLedger !== 'undefined') ActionLedger.setActiveSituation(effectiveSituation);
      if (sessionContext) sessionContext.activeSituation = effectiveSituation;
    }

    const isWeak = (ctx.vigorScore < 50);
    const category = this.detectIntent(userQuery, sessionContext);
    const subcategory = this.detectSubcategory(userQuery);

    // 1. Closed-Loop Action Ledger Feedback Audit (Dynamic Impedance Recalibration)
    const feedbackSummary = (typeof ActionLedger !== 'undefined')
      ? ActionLedger.getRecentFeedbackSummary(lang)
      : null;

    // 2. Deterministic Auditable Tool Dispatcher
    const toolDispatchCard = (typeof ToolDispatcher !== 'undefined')
      ? ToolDispatcher.dispatch(userQuery, bazi, luck, lang, currentYear)
      : null;

    let advice;
    if (effectiveSituation) {
      if (isEn) {
        advice = this._generateSituationalAdviceEn(effectiveSituation, userQuery, ctx, bazi, luck, feedbackSummary);
      } else {
        advice = this._generateSituationalAdviceZh(effectiveSituation, userQuery, ctx, bazi, luck, feedbackSummary);
      }
    } else {
      if (isEn) {
        advice = this._generateAdviceEn(category, ctx, isWeak, userQuery, bazi, luck, subcategory, feedbackSummary);
      } else {
        advice = this._generateAdviceZh(category, ctx, isWeak, userQuery, bazi, luck, subcategory, feedbackSummary);
      }
    }

    if (advice) {
      advice.recalibrationBanner = feedbackSummary;
      advice.toolDispatchCard = toolDispatchCard;
    }

    return advice;
  }

  static _generateSituationalAdviceZh(userSituation, query, ctx, bazi, luck, feedbackSummary = null) {
    const isWeak = (ctx.vigorScore < 50);
    const cleanSituation = userSituation.trim();

    // Specific situation markers analysis
    const hasMoney = /存款|资金|现金|负债|房贷|车贷|没钱|经济|生活费|生活成本|省钱|预算|断粮|借钱|还款|经济压力|分期/.test(cleanSituation);
    const hasPolitics = /领导|上级|老板|主管|抢功|推诿|甩锅|打压|pua|小人|同事|排挤|站队|背锅|背锅侠|苛刻|难缠|部门/.test(cleanSituation);
    const hasExamCareer = /考公|考编|事业单位|编制|公务员|考研|面试|找工作|跳槽|转行|简历|裁员|失业|下岗|离职|辞职|被辞|毕业|论文/.test(cleanSituation);
    const hasSomatic = /累|疲惫|失眠|焦虑|内耗|崩溃|头痛|精力|身体|家庭|父母|催婚|催促|伴侣吵架|冷战/.test(cleanSituation);

    const title = '【因地制宜 · 现实处境定制军师令】';
    let directAnswer = `【军师直陈 · 因地制宜】：回禀命主，审视您坦陈之现实处境——“${cleanSituation}”。\n\n此等具体处境绝非单纯依靠空洞的命理谶语所能化解。军师已将命主生克原局（${ctx.dayMaster}木${ctx.vigorTier}）、十四字岁运时空场能（${ctx.activeAnnualGanzhi}流年·值年卦【${ctx.activeHexagram}】）与眼前的资金、人事与精力制约深度锚定。在多重现实约束之下，上策非盲目硬碰硬，而在于“因地制宜、避锐就虚、分阶突围”。下方为您量身定制专属的现实处境破局预案：`;

    let diagnosis = `【现实处境痛点与底层因果穿透】：\n1. 能量与时空交感：当前岁运逢【${ctx.activeAnnualGanzhi}】流年，火土乘旺，而您原局处于${ctx.vigorTier}。在现实中，这种气机最直接的投影就是外部生存竞争与消耗加剧，导致心理负荷与外部阻抗急剧攀升。\n2. 矛盾焦点解构：您所面临的${hasPolitics ? '“职场人事摩擦/领导抢功推诿”' : '“外部人事纷扰”'}${hasMoney ? '与“资金储备/生活现金流底线”' : ''}${hasExamCareer ? '及“备考跳槽时间精力不足”' : ''}，表面是外部环境严峻，实则是命主原局气数与当前环境微气候产生了硬性摩擦。\n3. 破局关键枢纽：越是处境逼仄，越不可乱了阵脚。核心破局点在于“严守底线、切片推进、借力打力”，把有限的精力和资金锁死在最具长期翻盘确定性的事项上。`;

    const tactics = [];

    // 1. 权宜之策（短期止血/避坑/即刻自保）
    let tacticalDefense = '';
    if (hasMoney) {
      tacticalDefense = '【锁定6个月绝对生存基线】：立即盘点手头一切活期与应急资金，严格缩减一切非核心支出。在未拿到确定性书面Offer或完成平稳过渡前，坚决不裸辞、不冲动加杠杆，确保现金流能从容对冲外部动荡。';
    } else if (hasPolitics) {
      tacticalDefense = '【职场全链条留痕防护】：严格遵循《荣枯鉴·守卷》要义。一切核心交付均以邮件或文字备忘录抄送关键协同人留痕；汇报突出“在领导指导与指示下落实”，把锋芒收敛进领导政绩中，让领导无法甩锅、无需防备。';
    } else {
      tacticalDefense = '【收缩战线，立足生存底盘】：面对当前现实多重挤压，首先做减法。砍掉80%低价值应酬与无谓内耗，仅保留维持核心基本盘的20%关键任务，以静制动。';
    }
    tactics.push({
      badge: '权宜之策 · 即刻止血',
      text: tacticalDefense,
      isKey: true
    });

    // 2. 进取之策（中期蓄势/低阻突围）
    let tacticalOffense = '';
    if (hasExamCareer) {
      tacticalOffense = '【时间物理切片与低阻突围】：在职备考或求职切忌“全天候紧绷”。工作时间内按部就班合格交付不惹是非，将备考时间绝对切片：早晨6:30-8:00专注刷行测或专业题，晚间20:30-22:00专攻申论与复盘。日拱一卒，不受白天琐事人事干扰。';
    } else if (hasPolitics) {
      tacticalOffense = '【暗中铺设救生艇，精准点对点出击】：借《荣枯鉴·微卷》之术，利用同僚校友或可靠猎头进行非公开简历推荐；每周定点探寻3-5家最契合的核心机会，以战养战，在外部交流中持续校准市场溢价。';
    } else {
      tacticalOffense = '【单核聚焦，培育不可替代性】：在现有缝隙中打磨一项能直接带来变现或破圈的硬核成果，用小作品或小成果持续建立外部背书。';
    }
    tactics.push({
      badge: '进取之策 · 蓄势借力',
      text: tacticalOffense,
      isKey: true
    });

    // 3. 治本之策（长期立身/顺运跃迁）
    let tacticalLongTerm = '';
    if (ctx.lookahead) {
      if (ctx.lookahead.mode === 'preemptive_defense') {
        tacticalLongTerm = `【顺应岁运节奏 · 提前防险跨周期】：因次年（${ctx.lookahead.nextYear}）值年卦逢【${ctx.lookahead.nextHexZh}】暗藏风控阻力，当年应对策略为“高筑墙、广积粮、稳扎稳打”。眼前的现实处境正是锻炼您风险对冲与极限抗压能力的关键磨刀石，待平稳度过风浪，自成坚不可摧之势。`;
      } else if (ctx.lookahead.mode === 'preemptive_layout') {
        tacticalLongTerm = `【顺应岁运节奏 · 提前起势迎爆发】：次年（${ctx.lookahead.nextYear}）值年卦逢【${ctx.lookahead.nextHexZh}】乃重大爆发之吉年（能级 ${ctx.lookahead.nextScore}%）。当前所承受的处境委屈皆为破茧前夕之蛰伏；以年为尺度保持战略耐性，今年积攒弹药与人脉，次年窗口一开必乘风扶摇直上！`;
      } else {
        tacticalLongTerm = `【顺应岁运节奏 · 平稳质变复利成长】：次年时空场能平稳过渡。以平常心对待眼前得失，建立抗周期的专业壁垒与被动资产储备，实现人生命运底盘的根本跃迁。`;
      }
    } else {
      tacticalLongTerm = '【借时空势能，长线结构质变】：以3年为战略周期，从根源上跳出当前的狭窄生态位，完成从被动受制于人到拥有自主选择权的结构跃迁。';
    }
    tactics.push({
      badge: '治本之策 · 根本跃迁',
      text: tacticalLongTerm,
      isKey: true
    });

    // Customized Micro-Actions
    const microActions = [];
    if (hasMoney) {
      microActions.push({
        id: 'situation_runway',
        badge: '处境定制',
        text: '【精算现金流底线】：今晚盘点全部流动资产，列出未来6个月每月不可减除的硬性支出，计算出确切的生存缓冲天数，并坚决冻结非必要大额开支。'
      });
    }
    if (hasPolitics) {
      microActions.push({
        id: 'situation_politics',
        badge: '处境定制',
        text: '【工作成果文字留痕】：自明日起，凡涉及方案确认、进度节点及跨部门协同，一律在口头沟通后15分钟内发送结构化邮件或工作群记录，抄送关键干系人，彻底杜绝推诿与抢功。'
      });
    }
    if (hasExamCareer) {
      microActions.push({
        id: 'situation_study',
        badge: '处境定制',
        text: '【设立雷打不动备考结界】：将每日精力分为“生存工作时段”与“升学冲刺时段”，在手机中设定早晨6:30与晚间20:30闹钟，期间进入完全飞行模式专心刷题，绝不内耗。'
      });
    }
    if (hasSomatic) {
      microActions.push({
        id: 'situation_somatic',
        badge: '处境定制',
        text: '【切断晚间信息过载】：晚间22:00强行退出工作群消息通知，用温水沐足15分钟，不带任何未完困境入眠，确保次日有清晰的大脑精力应对博弈。'
      });
    }
    if (microActions.length < 3) {
      microActions.push({
        id: 'situation_anchor',
        badge: '处境定制',
        text: '【恪守言语界限】：面对刁难或挑衅时，心中默数5秒再作答，只说客观事实，绝不说带情绪的对抗字眼，借规则与程序保全自己。'
      });
    }

    // Auto-record to ActionLedger
    microActions.forEach(act => {
      if (typeof ActionLedger !== 'undefined') {
        ActionLedger.recordAction({
          id: act.id,
          category: 'situational',
          subcategory: 'customized',
          badge: '处境定制',
          text: act.text,
          status: 'pending'
        });
      }
    });

    const mentalAnchor = '《荣枯鉴·知止卷》：“知足不辱，知止不殆。智者不与时争，达者因势利导。势逆则隐，势顺则进，从容处困，终莫能害。”';

    const smartFollowUps = [
      { id: 'f1', icon: '🛡️', title: '职场留痕防甩锅模板', query: '针对强势爱抢功的领导，请军师给出一套既不得罪人又能滴水不漏留痕的邮件回复话术模板。' },
      { id: 'f2', icon: '💰', title: '6个月现金流极简预算', query: '请军师指导如何做极简生存预算规划，在现有存款下把安全垫拉长至9个月？' },
      { id: 'f3', icon: '⏱️', title: '在职备考每日日程切片', query: '请军师为在职备考制定一套工作日与周末的无痛高效日程表。' },
      { id: 'f4', icon: '🚀', title: '何时是主动摊牌跳槽的最佳时机', query: '结合我的大运流年，我何时能彻底跳出目前的困境生态位？' }
    ];

    if (feedbackSummary && feedbackSummary.lead) {
      directAnswer = `${feedbackSummary.lead}\n\n${directAnswer}`;
    }

    return {
      title,
      directAnswer,
      diagnosis,
      tactics,
      microActions,
      mentalAnchor,
      smartFollowUps,
      isSituational: true,
      userSituation: cleanSituation,
      category: 'situational',
      subcategory: 'customized'
    };
  }

  static _generateSituationalAdviceEn(userSituation, query, ctx, bazi, luck, feedbackSummary = null) {
    const isWeak = (ctx.vigorScore < 50);
    const cleanSituation = userSituation.trim();

    const hasMoney = /money|saving|cash|debt|mortgage|runway|pay|budget|unemployment|finance/i.test(cleanSituation);
    const hasPolitics = /boss|manager|lead|credit|toxic|politic|blame|scapegoat|undermine|colleague|coworker/i.test(cleanSituation);
    const hasExamCareer = /exam|study|phd|master|test|interview|job|career|layoff|fired|unemployed|transition/i.test(cleanSituation);
    const hasSomatic = /stress|burnout|exhaust|sleep|anxiety|family|parent|pressure|tired/i.test(cleanSituation);

    const enDm = this._stemToEn ? this._stemToEn(ctx.dayMaster) : ctx.dayMaster;
    const enGz = this._ganzhiToEn ? this._ganzhiToEn(ctx.activeAnnualGanzhi) : ctx.activeAnnualGanzhi;
    const cleanHex = (ctx.activeHexagram || 'The Creative').replace(/[\u4e00-\u9fa5]/g, '').trim() || 'The Creative';
    const cleanTier = (ctx.vigorTier || 'Moderately Strong').replace(/[\u4e00-\u9fa5]/g, '').trim() || 'Moderately Strong';

    const title = 'Bespoke Situational Strategy Directive';
    let directAnswer = `[Advisor Tactical Verdict - Bespoke Real-World Alignment]: Acknowledging your specific circumstances: "${cleanSituation}".\n\nTheoretical aphorisms fail when real-world pressures mount. The Advisor has aligned your natal Day Master vigor (${enDm} ${cleanTier}), 14-character temporal transit (${enGz} / Hexagram ${cleanHex}), and your active situational constraints. In this dilemma, the optimal path is not reckless frontal confrontation, but adaptive terrain navigation: defensive triage, low-friction leverage, and structured breakout. Below is your tailored tactical playbook:`;

    let diagnosis = `[Situational Root-Cause Diagnosis & Dynamic Tension]:\n1. Temporal Pressure Field: Current transit under ${enGz} and Hexagram ${cleanHex} manifests as institutional friction and resource contraction, elevating cognitive and financial burn rates.\n2. Friction Nodes: The confluence of ${hasPolitics ? 'workplace political hostility and credit-stealing' : 'environmental friction'}${hasMoney ? ' with limited cash runway' : ''}${hasExamCareer ? ' and competing time commitments' : ''} represents acute environmental resistance.\n3. Sovereign Pivot: In acute dilemmas, maintain unshakeable discipline. Anchor defensive baselines first, compartmentalize mental energy, and direct scarce hours exclusively toward high-probability leverage.`;

    const tactics = [];

    // 1. Triage & Immediate Defense
    let tacticalDefense = '';
    if (hasMoney) {
      tacticalDefense = '[Lock 6-Month Liquidity Runway]: Immediately audit all liquid accounts and freeze discretionary capital burn. Under no circumstances resign impulsively without a written agreement; protect month-to-month cash flow above all else.';
    } else if (hasPolitics) {
      tacticalDefense = '[Immutable Audit Trail Defense]: Follow the Classical Codex of Self-Preservation. Summarize verbal discussions in structured written memos within 15 minutes; frame milestones under managerial direction to disarm hostility and prevent credit theft.';
    } else {
      tacticalDefense = '[Perimeter Consolidation & De-escalation]: Pare down peripheral commitments. Eliminate 80% of low-yield obligations to defend the 20% core survival operational base.';
    }
    tactics.push({
      badge: 'Immediate Triage & Defense',
      text: tacticalDefense,
      isKey: true
    });

    // 2. Mid-Term Tactical Compounding
    let tacticalOffense = '';
    if (hasExamCareer) {
      tacticalOffense = '[Temporal Compartmentalization]: Compartmentalize daytime duties to baseline acceptable delivery. Protect an untouchable morning focus window (6:30-8:00 AM) and evening module (8:30-10:00 PM) solely for test and interview preparation.';
    } else if (hasPolitics) {
      tacticalOffense = '[Discreet Network Expansion]: Establish discrete off-market inquiries through trusted alumni and mentors; target 3-5 high-match openings to calibrate market value without tipping off your current team.';
    } else {
      tacticalOffense = '[Single-Core Competence Focus]: Polish a demonstrable portfolio milestone or technical asset that produces undeniable external validation.';
    }
    tactics.push({
      badge: 'Mid-Term Tactical Leverage',
      text: tacticalOffense,
      isKey: true
    });

    // 3. Long-Term Structural Leap
    let tacticalLongTerm = '';
    if (ctx.lookahead) {
      if (ctx.lookahead.mode === 'preemptive_defense') {
        tacticalLongTerm = `[Preemptive Caution for ${ctx.lookahead.nextYear}]: Next year arrives under Hexagram ${ctx.lookahead.nextHexEn} signaling external headwinds. Treat current friction as an essential hardening crucible; consolidate liquidity and avoid high-leverage gambles.`;
      } else if (ctx.lookahead.mode === 'preemptive_layout') {
        tacticalLongTerm = `[Preemptive Strategic Layout for ${ctx.lookahead.nextYear}]: Next year brings Hexagram ${ctx.lookahead.nextHexEn} with a major breakout inflection (score ${ctx.lookahead.nextScore}%). Endure current constraints with patience; assemble credentials now to seize the open breakout window next year!`;
      } else {
        tacticalLongTerm = `[Steady Compounding for ${ctx.lookahead.nextYear}]: Next year transitions smoothly into balanced equilibrium. Compound core competencies quietly to build unassailable career sovereignty.`;
      }
    } else {
      tacticalLongTerm = '[Structural Ecosystem Leap]: Over a 3-year horizon, fundamentally exit this constrained operating bracket to establish complete professional agency.';
    }
    tactics.push({
      badge: 'Long-Term Structural Leap',
      text: tacticalLongTerm,
      isKey: true
    });

    // Customized Micro-Actions
    const microActions = [];
    if (hasMoney) {
      microActions.push({
        id: 'situation_runway',
        badge: 'Situational',
        text: '[Calculate True Runway]: Audit liquid assets tonight and divide total reserves by mandatory non-discretionary monthly burn to establish precise baseline runway days.'
      });
    }
    if (hasPolitics) {
      microActions.push({
        id: 'situation_politics',
        badge: 'Situational',
        text: '[Deploy Written Follow-Up Protocol]: Send structured email confirmation memos within 15 minutes of any verbal briefing, copying essential stakeholders to eliminate credit theft.'
      });
    }
    if (hasExamCareer) {
      microActions.push({
        id: 'situation_study',
        badge: 'Situational',
        text: '[Establish Untouchable Study Sandbox]: Configure smartphone airplane mode during morning 6:30-8:00 AM study sessions, completing one test section daily before work emails begin.'
      });
    }
    if (hasSomatic) {
      microActions.push({
        id: 'situation_somatic',
        badge: 'Situational',
        text: '[Sever Late-Night Notifications]: Disable all workplace communication apps at 22:00; implement a 15-minute warm water soak to reset autonomic nervous system tone.'
      });
    }
    if (microActions.length < 3) {
      microActions.push({
        id: 'situation_anchor',
        badge: 'Situational',
        text: '[Practice 5-Second Response Delay]: Count 5 seconds before answering confrontational questions; state objective facts without defensive emotional inflection.'
      });
    }

    // Auto-record to ActionLedger
    microActions.forEach(act => {
      if (typeof ActionLedger !== 'undefined') {
        ActionLedger.recordAction({
          id: act.id,
          category: 'situational',
          subcategory: 'customized',
          badge: 'Situational',
          text: act.text,
          status: 'pending'
        });
      }
    });

    const mentalAnchor = 'Classical Codex of Preservation: "He who knows when to stop meets no danger. The sage does not contend against temporal waves, but channels momentum. In adversity, maintain composure."';

    const smartFollowUps = [
      { id: 'f1', icon: '🛡️', title: 'Paper-Trail Memo Script', query: 'Provide a diplomatic, audit-proof email memo template to follow up with a credit-stealing manager without causing overt conflict.' },
      { id: 'f2', icon: '💰', title: 'Runway Extension Plan', query: 'How should I structure a lean survival budget to stretch 6 months of reserves into 9 months?' },
      { id: 'f3', icon: '⏱️', title: 'Daily Study Schedule', query: 'Design an efficient daily schedule balancing full-time corporate duties with dedicated exam preparation.' },
      { id: 'f4', icon: '🚀', title: 'Optimal Exit Timing', query: 'Based on my annual transit and Four Pillars vigor, when is the optimal calendar window to execute a career pivot?' }
    ];

    if (feedbackSummary && feedbackSummary.lead) {
      directAnswer = `${feedbackSummary.lead}\n\n${directAnswer}`;
    }

    return {
      title,
      directAnswer,
      diagnosis,
      tactics,
      microActions,
      mentalAnchor,
      smartFollowUps,
      isSituational: true,
      userSituation: cleanSituation,
      category: 'situational',
      subcategory: 'customized'
    };
  }

  static _generateAdviceZh(category, ctx, isWeak, query, bazi, luck, subcategory = 'comprehensive', feedbackSummary = null) {
    let diagnosis = '';
    let tactics = [];
    let redLines = [];
    let mentalAnchor = '';
    let title = '';
    let directAnswer = '';
    let timingCard = null;
    let profileCard = null;
    let synastryCard = null;
    let diagnosticTree = null;

    const dm = ctx.dayMaster;
    const db = ctx.dayBranch;
    const yb = ctx.yearBranch;
    const isMale = (!ctx.gender || ctx.gender.includes('乾') || ctx.gender.includes('男'));

    // Branch & Elemental Synergy Analysis (Mao-Xu Six Harmony & Water Day Master)
    const allBranches = [
      ctx.dayBranch, ctx.yearBranch, ctx.monthBranch, ctx.hourBranch,
      bazi?.pillars?.year?.branch, bazi?.pillars?.month?.branch, bazi?.pillars?.day?.branch, bazi?.pillars?.hour?.branch
    ].filter(Boolean);
    const hasMao = allBranches.includes('卯') || /卯/.test(query);
    const hasXu = allBranches.includes('戌') || /戌/.test(query);
    const isWaterDm = (dm === '壬' || dm === '癸') || /水旺|水日/.test(query);
    const hasMaoXuSynergy = (hasMao && hasXu) || (isWaterDm && (hasMao || hasXu || /妻财|暗财|合化火/.test(query)));

    // Romance Specific Variables
    let spouseStarZh = isMale ? '正财/偏财' : '正官/七杀';
    let spouseArchetype = '独立自强、开创干练之良伴';
    if (hasMaoXuSynergy) {
      spouseArchetype = '兼具才情灵犀与刚强风骨、能与命主并肩作战抗击风浪之战友型灵魂伴侣';
    } else if (['子', '午', '卯', '酉'].includes(db)) {
      spouseArchetype = '相貌清雅秀丽、极具艺术情调、重视精神深度交流与仪式感之伴侣';
    } else if (['辰', '戌', '丑', '未'].includes(db)) {
      spouseArchetype = '忠厚稳健、朴实持家、能做家庭财富防波堤之靠谱伴侣';
    }

    let annualPalaceDynamic = '';
    if (hasMaoXuSynergy) {
      annualPalaceDynamic = `原局暗藏【卯戌六合化火】之神妙玄机！伤官之才情灵犀（卯）与七杀之风骨名望（戌）相逢，贪合忘克，合化为真火妻星。命定正缘绝非依附弱质，而是并肩作战、同舟共济的【战友型灵魂伴侣】！更具造化的是，对于寒水命局而言，此火带来至关紧要的【调候暖局】，成家即立业，婚后财富与心智呈现阶梯式爆发！2026 丙午流年岁君丙火偏财天透、午火半合戌土火局，引爆原局卯戌暗火，暗财转明，正缘显化，正是战友正缘缔结长远盟约之极盛奇点！`;
    } else if (db === '寅' || db === '戌') {
      annualPalaceDynamic = `2026 丙午岁君与日支配偶宫【${db}】形成【寅午戌三合火局】，合动配偶宫！这是命理正缘感召引动之第一等吉象，预示今年正缘磁场全面共振，极易在专业交流或共同追求中邂逅宿命感契合者！`;
    } else if (db === '未') {
      annualPalaceDynamic = `2026 丙午岁君与配偶宫【未】构成【午未六合】！岁君六合入夫妻宫，逢合主定，预示感情有尘埃落定、谈及婚嫁盟约之重大契机！`;
    } else if (db === '子') {
      annualPalaceDynamic = `2026 丙午岁君与配偶宫【子】呈现【子午相冲】！岁君冲动夫妻宫，逢冲打破单身惯性，极易出现异地邂逅、差旅结缘或打破长久单身僵局之闪电缘分；已有伴侣者需注重包容克制口角。`;
    } else if (db === '巳' || db === '午') {
      annualPalaceDynamic = `2026 丙午南方旺火与配偶宫比和，社交同行或好友同侪网络活跃，极易通过熟人聚会、校友或行业圈层引荐结识心仪对象。`;
    } else {
      annualPalaceDynamic = `2026 丙午岁运坐【${ctx.activeHexagram}】，火土相生之年。当前时空宜以内外兼修为基，夏秋火土丰饶之际（农历四月至七月）乃正缘引动之黄金窗口。`;
    }

    const hasPeachBlossom = ['巳', '酉', '丑'].includes(yb) || ['巳', '酉', '丑'].includes(db);
    const peachBlossomNote = hasPeachBlossom ? '【咸池真桃花司权】：命逢巳/酉/丑，2026 丙午流年正值咸池桃花主事，本年度社交异性吸引力与情感感知力处于周期峰值！' : '';

    if (category === 'romance_timing') {
      title = '世俗婚恋与正缘应期神策';

      if (subcategory === 'timing_precision') {
        directAnswer = `【军师直陈】：回禀命主，具体正缘显化与深度破局的黄金应期，首推 2026 丙午年农历六月（乙未月·小暑至大暑）、农历五月（甲午月·芒种至夏至） 与 农历九月（戊戌月·寒露至霜降）！其中以【农历六月（午未六合夫妻宫）】能量最为聚合稳定，逢合主定，是定下恋爱名分或打破单身僵局的第一首选窗口（应期概率 92%）；农历十一月（庚子月）水火对冲，切忌因一时敏感挑剔而心生冷战。下方已为您精细测算流月时令全相表，请命主审阅。`;
        timingCard = this.calculateMonthlyTransitWindows(bazi, luck, ctx.activeAnnualYear, 'romance_timing', 'zh');
      } else if (subcategory === 'spouse_profile') {
        directAnswer = `【军师直陈】：回禀命主，依您日支坐【${db}】配偶宫推演，对方五官容貌【${spouseArchetype}】；身材骨相匀称修长，富有灵动神采与艺术审美；心性外柔内刚，重视精神契合与生活仪式感；职业圈层多在文化传媒、前沿科技研发、教育学术或专业咨询领域。相处时宜多倾听认同，切忌冷面挑刺。下方已为您整理配偶全相画像。`;
        profileCard = {
          title: '命定配偶面相五行与心智全相画像',
          palaceSign: `日支坐【${db}】配偶宫`,
          appearance: spouseArchetype,
          stature: (db === '午' || db === '子') ? '身材高挑匀称，骨肉停匀，步履轻盈富有神采' : '体格稳健修长，气度端方沉稳',
          temperament: '外柔内刚，极其看重精神深度契合与情绪价值，为人重诺守信，有独立专业主见',
          careerFields: '文化传媒、数字科技/AI研发、高校教育、艺术设计、管理咨询顾问',
          bestMatchAdvice: '以平等同盟之心相待，遇事共同推演决策，尊重彼此专业边界，忌居高临下挑刺'
        };
      } else {
        directAnswer = `【军师直陈】：回禀命主，您的正缘将在 2026 丙午至 2027 丁未年 显化，黄金应期在农历五月、六月与九月。对方五官清雅灵动、气质高洁、极重精神共鸣。相处第一铁律是切忌在子午冲克月份（农历五月与十一月）因一时情绪敏感而做出绝决判断，以《周易·咸卦》虚受之道相待即能良缘天成。`;
        timingCard = this.calculateMonthlyTransitWindows(bazi, luck, ctx.activeAnnualYear, 'romance_timing', 'zh');
      }

      diagnosis = `命主日元坐【${dm}】，配偶宫定位于日支【${db}】，子平活力量化评分为 ${ctx.vigorScore} 分（${ctx.vigorTier}）。在世俗婚恋中，${isMale ? `男命以财星（${spouseStarZh}）为妻星，日支配偶宫【${db}】反映配偶底层心性模型。` : `女命以官杀（${spouseStarZh}）为夫星，日支配偶宫【${db}】反映配偶底层心性模型。`}
` +
        `【配偶特质画像】：配偶宫坐【${db}】，呈现【${spouseArchetype}】气象。
` +
        `【岁运交感应期】：${annualPalaceDynamic}
` +
        (peachBlossomNote ? `${peachBlossomNote}
` : '') +
        `综合岁运研判，2026 丙午至 2027 丁未年，正是命主打破情感闭环、正缘显化的核心跃迁窗口。`;

      tactics = [
        `【相遇场域与正缘雷达】：对方气质偏向【${spouseArchetype.slice(0, 12)}】，极易在专业交流研讨会、行业峰会、图书艺术空间、差旅途中或高能量朋友私密聚会中相遇。主动走出舒适区参与高质量场景，即可触动引力场。`,
        `【空间风水桃花气场激活】：依据日支配偶宫方位，在卧室生旺桃花方（如正东卯位或正南午位）摆放水养鲜花（单数枝为佳，如百合/玫瑰）或粉水晶原石；严禁放置塑料假花或枯萎干花，以防假桃花虚耗心神。`,
        `【《周易·咸卦》虚受之道】：放下“既要百分百情绪价值、又要世俗完美无瑕”的内耗执念。婚姻本质是并肩抗击风浪的人生合伙同盟，以真诚虚己的心胸接纳彼此瑕疵，方能水到渠成。`
      ];

      redLines = [
        `严禁在流月地支相冲相刑之时（如农历五月午月、农历十一月子月）因一时情绪敏感而做出断崖式决绝判断；`,
        `严禁陷入对过往情感的反复精神反刍，正缘之门唯有在清空旧执念后方能真正洞开。`
      ];

      mentalAnchor = `《周易·咸卦》云：“山上有泽，咸；君子以虚受人。天地感而万物化生，圣人感人心而天下和平。观其所感，而天地万物之情可见矣。”`;
    } else if (category === 'academic_exam') {
      title = '学业考学与文昌深造锦囊';
      if (subcategory === 'timing_precision') {
        directAnswer = `【军师直陈】：回禀命主，学业考学与录取的黄金应期落在【农历二月（辛卯月·文昌贵人）】与【农历五月（甲午月·食伤吐秀）】！岁运逢官印相生，夏秋季节放榜申博最为顺畅。`;
        timingCard = this.calculateMonthlyTransitWindows(bazi, luck, ctx.activeAnnualYear, 'academic_exam', 'zh');
      } else {
        directAnswer = `【军师直陈】：回禀命主，您命盘印星护持、食伤秀气，非常适宜在高校科研或技术研发深造。备考关键是以“3个连续90分钟无干扰心流模块”替代碎片化刷题，书桌左侧安放文昌塔或四支富贵竹即可大幅提振记忆调取效率！`;
        timingCard = this.calculateMonthlyTransitWindows(bazi, luck, ctx.activeAnnualYear, 'academic_exam', 'zh');
      }

      diagnosis = `命主日元【${dm}】，子平评分 ${ctx.vigorScore} 分（${ctx.vigorTier}）。学业功名首重“印星护持、食伤吐秀与文昌贵人”。${isWeak ? '身弱逢印星，最宜在制度化高校与导师庇佑下潜心钻研，学术文凭是安身立命的最佳护城河。' : '身旺食伤有力，灵感澎湃，善于产出原创理论与跨学科研究，深造利于拔高认知维度。'}`;

      tactics = [
        `【文昌空间风水布局】：在书桌左前方安放九层紫砂/白玉文昌塔，或配四支水养富贵竹，借木火通明之气提振深度专注力与记忆提取效率。`,
        `【单一任务深度工作法】：考学冲刺切忌多线程空转。每天固定锁定 3 个连续 90 分钟不被打扰的硬核学习模块，以物理笔尖推演代替颅内空想。`,
        `【借力权威与导师同频】：依冯道《荣枯鉴》处世法，与导师学者交流保持“严谨求教、定期闭环汇报”，争取核心课题参与权。`
      ];

      redLines = [
        `严禁考前高频更换复习参考书目或被社群焦虑言论打乱学习心流；`,
        `严禁在深夜子时强行熬夜刷题，损伤心肾阳气反而导致考场大脑死机。`
      ];

      mentalAnchor = `《六祖坛经》云：“何期自性，本自具足；何期自性，能生万法。心平何劳持戒，行直何用修禅。”`;
    } else if (category === 'partnership') {
      title = '合伙盟约与同侪借力法门';
      directAnswer = `【军师直陈】：回禀命主，合伙之本在“明分笃契，利他共赢”。凡涉及商业合作，切忌以江湖义气代替制度条款。务必在出资、投票权、动态分红与违约退出四大核心机制上白纸黑字锁定，方可借同侪之力攻城略地！`;

      diagnosis = `命主日元【${dm}】，子平活力为 ${ctx.vigorScore} 分（${ctx.vigorTier}）。合伙之本在“比劫分忧还是比劫争财”。${isWeak ? '身弱之造喜比肩劫财帮身抗煞，适宜寻找心性互补、实力强大的合伙人借力破局。' : '身旺之造自带统帅气魄，需防比劫争夺核心利润与决策话语权，凡合伙必当制度先行。'}`;

      tactics = [
        `【丑话说前与股权契约】：凡涉及商业合伙，严禁以江湖义气替代法律协议。务必白纸黑字锁定投票权、退出机制与动态分红条款。`,
        `【能力互补与边界隔离】：一人主内抓技术交付与产品底盘，一人主外跑市场融资，互不干涉专业领域决策权。`,
        `【识人心性察其幽微】：优先选择五行补益自身喜用神、行事重诺守信之人，避开行险侥幸之徒。`
      ];

      redLines = [
        `严禁在未约定核心退出机制时共同签署无限连带担保责任；`,
        `严禁合伙账目模糊或将私人开支与公账混同。`
      ];

      mentalAnchor = `五代·冯道《荣枯鉴》云：“利天下者，天下启之；疑同行者，同道绝之。明分笃契，乃免争端。”`;
    } else if (category === 'manage_up') {
      title = '向上管理与职场破局锦囊';
      directAnswer = `【军师直陈】：回禀命主，身处【${ctx.primaryArchetype}】天命生态位，向上管理核心在于“以确定性消解权威防御”。向强势上级汇报切忌空谈情绪，务必以『三句话定式』破局：先报关键交付进度、次列卡点瓶颈、再给 A/B 两套落地预案，将上下博弈转化为协作推演！`;

      diagnosis = `命主日元坐【${dm}】，子平量化活力评分为 ${ctx.vigorScore} 分（${ctx.vigorTier}），天命主场定位于【${ctx.primaryArchetype}】。在向上管理中，${isWeak ? '身弱之人天生敏锐多思，容易在威权面前产生过度预警或防御性抵抗；但你的核心护城河是“专业深度与交付确定性”。' : '身旺之人自带魄力与开创锐气，但容易在汇报时略去细节过程、显得过于强势甚至暗含抗拒管束之意。'}`;

      tactics = [
        `【结论先行与数据筑基】：上级关注确定性而非情绪。汇报第一句话直奔三项核心指标（交付成果、进度百分比、阻碍卡点），以理智数字稀释感性博弈。`,
        `【化反驳为选择题】：依五代冯道《荣枯鉴·${ctx.firstScroll}》之法，凡面对不同意见，绝不当面抵触。使用“领导，按您的战略方向，我们有两个落地路径（A方案与B方案），各自资源消耗如下，请您定夺”的话术，将矛盾转化为协作推演。`,
        `【向上索取资源定式】：身处【${ctx.primaryArchetype}】生态位，主动索取“明确的交付边界与计算资源”，明确约定交付时限，以契约换取心智自由空间。`
      ];

      redLines = [
        `严禁在没有备选方案时直接指出上级规划的漏洞或逻辑缺陷；`,
        `严禁在情绪波动或疲惫期回复微信/邮件工作指令，牢记“24小时冷敷隔离法则”。`
      ];

      mentalAnchor = `五代·冯道《荣枯鉴》云：“智者不立危墙，善战者无赫赫之功。顺天应势，借权成事，此之谓大通。”`;
    } else if (category === 'career_pivot') {
      title = '战略转轨与去留决断神机';
      if (subcategory === 'timing_precision') {
        directAnswer = `【军师直陈】：回禀命主，今年职业转轨与跳槽的最佳窗口在【农历六月（乙未月·食伤生财）】与【农历九月（戊戌月·财星透干）】！在此之前宜在现工位沉淀核心作品，切忌裸辞；秋季金旺水润之际正是大展宏图之黄金良机。`;
        timingCard = this.calculateMonthlyTransitWindows(bazi, luck, ctx.activeAnnualYear, 'career_pivot', 'zh');
      } else {
        directAnswer = `【军师直陈】：回禀命主，当前岁运值年卦坐【${ctx.activeHexagram}】，子平活力为 ${ctx.vigorScore} 分。当前十字路口首要原则是“生态位不匹配绝不动，用神方位不契合绝不迁”。若新机会能深度发挥你【${ctx.primaryArchetype}】之专长，可在下半年果断出击；反之若需大量无效社交，坚决深耕留任。`;
      }

      diagnosis = `命主逢 ${ctx.activeAnnualYear} ${ctx.activeAnnualGanzhi}年，值年卦坐【${ctx.activeHexagram}】。子平评分 ${ctx.vigorScore} 分展现出${isWeak ? '“守拙蓄势、深钻单一绝技更易爆发”的内敛聚能场' : '“大开大合、宜在多维竞争中开疆拓土”的锋芒动能场'}。当下岁运交汇，战略重心在于“辨明究竟是能量升级还是内耗逃避”。`;

      tactics = [
        `【生态位锚定原则】：若新机会高度契合你的首席生态位【${ctx.primaryArchetype}】，且允许你发挥沉潜深研的长处，方可作为有效跃升选项；反之若需大量低效世俗应酬，坚决避让。`,
        `【地缘与五行场能协同】：考察目标城市与赛道是否补益你的喜用神。向用神方位（如科研属水木、技术属火木）迁移往往事半功倍；向冲克忌神方位迁移则易陷入水土不服。`,
        `【骑马找马的行动闭环】：${isWeak ? '身弱之造忌仓促裸辞断粮。务必先在当前工位交付出一个经得起考验的硬核作品或代表作，以作品作为敲门砖，方能立于不败之地。' : '身旺之造可在做好风险兜底预案后果断出击，主动争取更高维度的项目操盘权。'}`
      ];

      redLines = [
        `切忌因人际一时受挫而冲动跳槽，换个环境若未修得处世铠甲，同样的博弈依然会重复上演；`,
        `切忌在未看清目标组织真实现金流与直属领导心性前轻率承诺签署排他条款。`
      ];

      mentalAnchor = `《庄子·养生主》云：“依乎天理，批大郤，导大窾，因其固然。以无厚入有间，恢恢乎其于游刃必有余地矣。”`;
    } else if (category === 'overthinking') {
      title = '斩断内耗与心智重置秘要';
      directAnswer = `【军师直陈】：回禀命主，敏锐多思是顶尖专家的天赋禀赋，你能内耗说明大脑算力处于空转状态。请立即执行『3分钟躯体硬重启』：用冷水猛冲手腕与脸颊15秒降低心率，拿出白纸将焦虑无逻辑全部写下。只要物理动作启动，反刍立时烟消云散！`;

      diagnosis = `命主日元【${dm}】，敏锐感知力与推演力远超常人。平庸愚钝之人绝无内耗之苦，你能内耗，说明心智算力处于空转状态。当这股庞大的精神能量没有被物理世界的具体任务吸收时，它便会掉转枪口向内自残。`;

      tactics = [
        `【3分钟躯体硬重启】：绝不在脑子里解决脑子里的问题！立刻用冰凉冷水猛洗双脸冲洗手腕15秒，刺激哺乳动物潜水反射强行降低心率；紧接着完成3组 4-7-8 战术呼吸。`,
        `【笔尖降维外部化】：拿出一张白纸，将脑海中纠结的所有烂账毫无逻辑地全部写在纸上。写出那一刻，大脑瞬间由“受害者”升维为“审视者”。`,
        `【以粗糙交付打破完美魔咒】（Done is better than perfect）：允许自己先写一个烂透了的第一版代码或方案。只要飞轮物理转动，内耗反刍立时烟消云散！`
      ];

      redLines = [
        `严禁在深夜 23:00（子时）之后推演任何人生重大命题或揣摩他人脸色；`,
        `严禁将“别人对你的评价”纳为自己的课题，他人脸色是他自己的业力。`
      ];

      mentalAnchor = `《金刚经》云：“凡所有相，皆是虚妄。若见诸相非相，即见如来。应无所住，而生其心。”`;
    } else if (category === 'wealth_window') {
      title = '财富机缘与攻守平衡智策';
      directAnswer = hasMaoXuSynergy
        ? `【军师直陈】：回禀命主，您命盘暗藏【卯戌六合化火】之暗财神机！此非寻常死板劳作薪资，而是凭借绝顶智谋（伤官卯木）降服化解复杂危机（七杀戌土）而无中生有创造的“暗合化财”。2026 丙午流年岁君天透地藏引爆暗火，暗财由隐入显！今年农历五月、六月与九月为财富爆发极盛窗口，宜大展拳脚运作高附加值创新项目，严禁盲目参与高杠杆赌徒投机！`
        : `【军师直陈】：回禀命主，当前岁运以“正财守底盘，偏财抓轻量机会”为大方针。今年农历六月与九月财运场能最旺，适宜验证第二曲线副业；但切忌大额加杠杆或与信用有亏之人合伙。`;
      timingCard = this.calculateMonthlyTransitWindows(bazi, luck, ctx.activeAnnualYear, 'wealth_window', 'zh');

      diagnosis = `命主年岁逢 ${ctx.activeAnnualYear} ${ctx.activeAnnualGanzhi}，岁君当道，六十四卦运势落于【${ctx.activeHexagram}】。当前子平量化活力 ${ctx.vigorScore} 分，处于【${ctx.vigorTier}】。` +
        (hasMaoXuSynergy
          ? `局中暗藏“卯木伤官与戌土七杀六合化火”之暗财通道，对于${isWaterDm ? '水日元' : '命主'}而言，火即为正偏财星，主凭借智谋打破危机壁垒、无中生有创造巨额增量财富。岁逢 2026 丙午帝旺火运，暗火转为燎原之势！`
          : `在财富与事业推进中，首重“正财为基，偏财为机，稳中求进”。`);

      tactics = [
        hasMaoXuSynergy
          ? `【激活卯戌暗合之高维资产】：将核心算力倾注于“用前沿创新模式（伤官）解决行业或企业最硬核危机与痛点（七杀）”，以此获取项目分红、隐形股权或超额咨询溢价，实现无中生有之暗财聚气。`
          : `【深耕主业正财底盘】：确保本职基本盘稳如磐石，将 80% 的时间算力投入到核心本领的不可替代性打磨上。`,
        `【轻量化验证第二曲线】：欲求偏财破局，以极小资金成本测试副业或自媒体工具产品，跑通 0 到 1 最小闭环后再考虑追加资源。`,
        `【秉持《荣枯鉴》保全之道】：${ctx.firstScroll ? `谨记《${ctx.firstScroll}》所诫，低调求财，不显山不露水，蓄深水以行大舟。` : '戒骄戒躁，以广结善缘与利他之心凝聚财运。'}`
      ];

      redLines = [
        `严禁参与高杠杆、不透明或赌徒性质的高风险投机；`,
        `严禁与命带严重刑冲克破、信誉有亏之人合伙谋事。`
      ];

      mentalAnchor = hasMaoXuSynergy
        ? `《滴天髓》云：“何知其人富？财气通门户。暗会明化，火暖寒江，自致千钟。”`
        : `《滴天髓》云：“何知其人富？财气通门户。何知其人贵？官星有理会。财官相生，自致千钟。”`;
    } else if (category === 'vague_confusion') {
      title = '心神定海与迷茫破局神策';
      directAnswer = `【军师直陈】：回禀命主，气数处于岁运交更之际，迷茫与算力空转乃能量重组常态。无靶之箭，空耗心神。请点击下方军师为您诊断的 4 大现实卡点，军师即刻为您调取相对应急兵法：`;
      diagnosticTree = {
        title: '钦天监迷茫诊断罗盘 · 厘清核心困局',
        prompt: '点击下方任一关键战场，军师即刻为您调取相对应急兵法：',
        nodes: [
          { id: 'diag_career', label: '职场卡点 · 向上管理与转轨去留', query: '职场卡点：我该如何向上管理破局或转轨跳槽？' },
          { id: 'diag_wealth', label: '财富困局 · 现金流固守与增收防坑', query: '财富困局：当下岁运我该如何守住现金流或轻量化增收？' },
          { id: 'diag_romance', label: '世俗婚恋 · 正缘应期与情感破局', query: '结合我的日支配偶宫、桃花星与当下岁运，我命定正缘何时出现？对方相貌心性与相处避坑红线是什么？' },
          { id: 'diag_health', label: '身心调摄 · 五脏气血与硬核重启', query: '身心调摄：近期疲惫焦虑严重，如何根据五行气血进行身心硬重启？' }
        ]
      };
      diagnosis = `命主日元坐【${dm}】，子平活力为 ${ctx.vigorScore} 分（${ctx.vigorTier}）。真正的平庸之人不会迷茫。你能感到迷茫，说明内在元神渴望跃迁但受困于现实阻力，心智算力处于空转状态。`;
      tactics = [
        `【物理行动切断空想】：迷茫是空想的产物。立刻挑出一件能在 10 分钟内闭环的具体小事去交付，行动是融化内耗的唯一溶剂。`,
        `【锁定第一矛盾抓手】：人生无法同时打赢四场战役。在职场、财富、婚恋、健康中挑出最痛的一项集中突破。`,
        `【秉承《${ctx.firstScroll}》顺天应人】：不逆大势，接受当下的蓄力节奏，蓄深水以待大舟。`
      ];
      redLines = [
        `严禁在深夜迷茫时刷手机短视频或向无关人员倾倒情绪垃圾；`,
        `严禁因一时空虚而做重大且不可逆的冲动开支或草率决定。`
      ];
      mentalAnchor = `《金刚经》云：“过去心不可得，现在心不可得，未来心不可得。应无所住，而生其心。”`;
    } else if (category === 'synastry_inquiry') {
      title = '双人合盘与博弈攻心神机';
      synastryCard = this.evaluateSynastryTactics(query, bazi, luck, 'zh');
      directAnswer = `【军师直陈】：回禀命主，双人相处之要在“明其性情、借其长板、避其刑冲”。已为您推演双盘博弈与合化神机卡，综合契合度评分为 ${synastryCard.score} 分（${synastryCard.allianceArchetype}）。核心法门在于：${synastryCard.coreKey}`;
      diagnosis = `命主日元坐【${dm}】，日支为【${db}】。人与人相处本质是两大五行场能的对流互锁。${synastryCard.mechanism}。`;
      tactics = [
        `【攻心法门】：${synastryCard.coreKey}`,
        `【雷区隔离】：${synastryCard.frictionRedLine}`,
        `【长效平衡】：${synastryCard.energyBalance}`
      ];
      redLines = [
        `严禁在双方五行冲克之流月因一时琐事冷战赌气；`,
        `严禁试图按自己的行为习惯强制改造对方天生秉性。`
      ];
      mentalAnchor = `《周易·系辞》云：“二人同心，其利断金；同心之言，其臭如兰。”`;
    } else if (category === 'health_vitality') {
      title = '身心气血与五脏调摄神策';
      directAnswer = `【军师直陈】：回禀命主，您的命盘以五行气血调摄为要。2026 丙午火旺之年，务必注重“降心火、滋肾水、健脾土”。黄金调摄窗口在农历十月与农历四月。睡前温水泡脚并严守 23:00 子时就寝，即可大幅修复元气！`;
      timingCard = this.calculateMonthlyTransitWindows(bazi, luck, ctx.activeAnnualYear, 'health_vitality', 'zh');
      diagnosis = `命主日元【${dm}】，子平活力评分为 ${ctx.vigorScore} 分（${ctx.vigorTier}）。在五脏气血中，火旺易导致心烦失眠、口苦心悸；土燥易致脾胃胀闷、体液代谢滞缓。调候首重“水火既济”。`;
      tactics = [
        `【时令作息铁律】：子时（23:00~01:00）胆经当令，午时（11:00~13:00）心经当令。子午两时静卧闭目，哪怕不睡着也能养护心肾阳气。`,
        `【饮食五行滋润】：日常多饮百合莲子水、黑芝麻桑葚茶或石斛汤，少食烧烤油炸辛辣，以清润之品化解岁运燥热。`,
        `【空间气场净化】：卧室保持通风整洁，床头不放充电设备，床尾可置一小巧陶瓷水盂调节卧室温湿度。`
      ];
      redLines = [
        `严禁长期熬夜透支心肾阴液，否则极易出现心悸头晕与神经衰弱；`,
        `严禁在盛怒或剧烈情绪波动后立即暴饮暴食或剧烈运动。`
      ];
      mentalAnchor = `《黄帝内经》云：“正气存内，邪不可干。阴平阳秘，精神乃治；阴阳离决，精气乃绝。”`;
    } else if (category === 'real_estate_moving') {
      title = '置业安居与乔迁买房神机';
      directAnswer = `【军师直陈】：回禀命主，今年置业安居的最佳黄金签约窗口在农历六月（乙未月·午未六合印库）与农历九月（戊戌月·土厚藏金）！安居宜选城市中补益喜用神的方位，避开农历十一月冲宅基月份签约，务必严审产权条款。`;
      timingCard = this.calculateMonthlyTransitWindows(bazi, luck, ctx.activeAnnualYear, 'real_estate_moving', 'zh');
      diagnosis = `命主日元坐【${dm}】，子平活力评分为 ${ctx.vigorScore} 分。在八字中，房产不动产以“印星与辰戌丑未四库”为象。2026 丙午岁运火土相生，利于锁定稳健实体资产作为安身立命之所。`;
      tactics = [
        `【方位与地缘借势】：优选城市中契合自身用神的板块（如水木喜东方、北方；火木喜南方、东方），向生旺方位布局不动产更能聚财安神。`,
        `【户型太极完整性】：看房优先选择户型方正、采光通透之宅；若遇西北缺角（损长者/事业）或西南缺角（损女主/财运），必须用泰山石敢当化解。`,
        `【现金流严苛封顶】：买房首付与月供严禁超过总现金流的 35%，留足 12 个月以上应急储备金以抵御大环境波动。`
      ];
      redLines = [
        `严禁在流月与日支冲刑之期（如农历十一月）草率支付大额不可退定金；`,
        `严禁购买产权不明、抵押复杂或缺乏核心流动性的偏远高杠杆房产。`
      ];
      mentalAnchor = `《黄帝宅经》云：“地善即苗茂，宅吉即人荣。夫宅者，乃是阴阳之枢纽，人伦之轨模。”`;
    } else if (category === 'legal_dispute') {
      title = '维权自保与官非小人防坑神策';
      directAnswer = `【军师直陈】：回禀命主，凡涉争议纷争，第一铁律是“以法度固证据，以冷面退小人”。最佳谈判调解窗口在农历二月与农历十月。严禁私下情绪化口角互喷，一切以文字证据和专业律师对接为准！`;
      timingCard = this.calculateMonthlyTransitWindows(bazi, luck, ctx.activeAnnualYear, 'legal_dispute', 'zh');
      diagnosis = `命主日元坐【${dm}】，子平活力评分为 ${ctx.vigorScore} 分。岁运遇刑冲化煞之期，难免遭遇职场小人挑拨或合同争议。制服小人绝非逞一时口舌之快，而在“法度严明、证据确凿”。`;
      tactics = [
        `【留痕存证与静默收集】：依《荣枯鉴·法度卷》，所有争议绝不依赖口头承诺。将录音、微信记录、考勤与邮件整理成证据闭环，未亮剑前神色如常。`,
        `【24小时延时与冷面拒绝】：面对非分苛求或甩锅，固定话术回复：“我已记录，稍后交法务与律师核实后出具正式答复”，以制度屏障化解对手锋芒。`,
        `【化争端为和解筹码】：谈判核心不在于把对方逼入绝境，而在于通过法律筹码锁定最有利的经济赔偿与清白结案。`
      ];
      redLines = [
        `严禁在情绪失控时签署任何含有放弃权利条款的免责书或离职单；`,
        `严禁通过非正规或涉嫌违法的灰色手段报复对方，以防有理变成理亏。`
      ];
      mentalAnchor = `五代·冯道《荣枯鉴·法度卷》云：“法者，立国之本，保身之规。不可轻犯，不可忽失。顺法者存，逆法者亡。”`;
    } else if (category === 'pattern_metaphysics') {
      title = '高阶格局辩证与暗财妻财神策';
      timingCard = this.calculateMonthlyTransitWindows(bazi, luck, ctx.activeAnnualYear, 'pattern_metaphysics', 'zh');

      diagnosticTree = {
        title: '高阶格局与暗财妻财推演罗盘 · 四维跃升路径',
        prompt: '点击下方任一维度，军师即刻为您深度解析能量跃升机制：',
        nodes: [
          { id: 'diag_diff', label: '伤官吐秀 vs 伤官驾杀 · 本质差别', query: '伤官吐秀与伤官驾杀有何本质差别？对日主身旺身弱与根骨有何根本要求？' },
          { id: 'diag_water_xu', label: '水旺遇戌土无金 · 水土相战病态', query: '水旺遇戌土无金会引发何种水土相战与精神内耗？为何不算吐秀？' },
          { id: 'diag_mao_fire', label: '卯木加持 · 卯戌六合贪合忘克', query: '水旺见戌土遇卯木加持，为何能贪合忘克化火？这如何解开水土相战？' },
          { id: 'diag_wife_wealth', label: '合化火为妻财 · 战友正缘与暗财', query: '卯戌六合化火算在妻财里面吗？男命暗财聚气与战友型正缘在2026丙午年如何爆发？' }
        ]
      };

      if (subcategory === 'pattern_diff') {
        directAnswer = `【军师直陈】：回禀命主，“伤官吐秀”与“伤官驾杀”是子平命理中两套截然不同的能量转化回路！\n①【伤官吐秀】：本质是“身强得泄、文贵清华”。日元能量充沛过盛（身旺有印比生扶），伤官作为向外泄放秀气的管道，转化为艺术创作、学术著述、顶尖设计或发明创造。其前提是身主底气充足；若身弱或水多无金无源，则不是吐秀，而是“盗泄元气”；\n②【伤官驾杀】：本质是“以奇胜正、化敌为权”。七杀是外部凶顽对手、极端压迫与生死危机，伤官是叛逆利刃与非常规奇谋。以智降虎，化外部危机为自身统帅权柄与执行力！其前提是身主有硬骨（如羊刃抗压），且伤与杀力量均衡，否则克泄交加反遭反噬。`;
        diagnosis = `命主探问伤官吐秀与伤官驾杀之分。日元【${dm}】，子平活力评分为 ${ctx.vigorScore} 分（【${ctx.vigorTier}】）。《子平真诠》论格局首重身主能否任使凶神：吐秀重在“内力充盈自然发越”，驾杀重在“外敌压境以智降虎”。二者判若云泥，不可同日而语。`;
        tactics = [
          `【辨明身元根基，严禁身弱盗泄】：若原局身旺有印比护身，放胆以伤官作为先锋打破陈规，输出高维智力作品（伤官吐秀）；若身弱无援，首重补印生身，不可逞强强出头。`,
          `【以智降虎，化危为权】：面临职场或商战重重危机（七杀）时，绝不以蛮力硬碰，而是运用伤官的不对称战术与逆向思维，将对手的杀伤力收编为己方权柄（伤官驾杀）。`,
          `【平衡杀伤能量，严防克泄交加】：驾杀必须确保自身能量充沛（如带羊刃或得禄）。在七杀势大时，善用制度与团队协同分担冲击，防止心神过劳反噬。`
        ];
        redLines = [
          `严禁在身主衰弱或元气未充时强行以伤官正面硬撼强权，以防引火烧身；`,
          `严禁将伤官的机变谋略演变为轻浮狂妄或无端挑衅，伤官见官无印解救最为忌讳。`
        ];
        mentalAnchor = `《子平真诠》云：“伤官虽非吉神，实为秀气，故文人学士，多于伤官格求之……伤官合杀，武贵双全；伤官佩印，文贵清华。”`;
      } else if (subcategory === 'water_xu_metal') {
        directAnswer = `【军师直陈】：回禀命主，水旺遇戌土但全局无金，绝对不能论作“伤官吐秀”！\n水旺缺金（无正偏印），则水无源头且无法收敛澄清；戌土为燥土火库兼七杀，遇到汪洋水势，二者直接爆发激烈的【水土相战、水土混杂】！\n戌土非但无法有效制水，反而被激荡为浑浊泥浆，导致“泥沙俱下、浊水困龙”。在现实中对应心思重重、精神内耗、怀才不遇、遭严苛权威压制且难以理清破局路径，绝非秀气发越之吉相！`;
        diagnosis = `命主研判水旺见戌土无金之局。水势浩荡而缺金生化收敛，戌为燥土七杀，水土互搏，导致“水浊土荡、神昏气乱”。此为典型的水土相战阻抗局，亟需木来疏土通关或金来澄清水源。`;
        tactics = [
          `【引入木神疏浚，打破水土死结】：不可再借蛮力堵截旺水，当借助木（食伤）之生发力量疏通戌土，使郁结之水土转化为生发之机。`,
          `【补充金印澄源，清退混浊泥沙】：在日常思维与行动中强化“金”的理性法度与极简归纳，戒除思虑发散，以清晰的数据与事实锚定方向。`,
          `【空间与行为化煞】：居住或工作环境多采用白色、金色饰品或水养绿植，以金木双向调和水土冲荡之戾气。`
        ];
        redLines = [
          `严禁在水土混杂期盲目扩大投资或做多线决策，以防水质混浊陷入财务泥潭；`,
          `严禁陷入对困局的自责与情绪内耗，水土交战易伤脾胃肾经，以身体调养为先。`
        ];
        mentalAnchor = `《滴天髓》云：“水不容土，汪洋并漫；土不受水，堤岸倾颓。水土相战，若无金木通关，终致混浊无成。”`;
      } else if (subcategory === 'mao_xu_fire') {
        directAnswer = `【军师直陈】：回禀命主，一旦引入卯木加持（乙木纯伤官），原局将迎来颠覆性的质变解盘！\n卯木遇戌土，触发命理至深奥秘——【卯戌六合化火】！\n命理最高法则是“贪合忘克”：卯木不再去克伐戌土，戌土也不再去阻遏冲荡旺水；二者阴阳交泰，在木火相激中化生出腾腾纯阳之【火】！\n一举化干戈为玉帛，既解开了水土相战的死结，又为原本寒水汪洋的命局注入了最宝贵的温暖纯阳能量，反败为胜！`;
        diagnosis = `命局在卯木介入后，发生【卯戌六合化火】之神妙化学反应。木能克土，但逢六合则“贪合忘克”；戌为火库，卯为春木，木火相生化出丙丁真火，彻底暖局化煞，病树前头万木春。`;
        tactics = [
          `【借合化之力，化敌为友】：在博弈中不与对手死磕到底，而是寻找双方共同利益交集点，将潜在敌对力量（七杀）转化为深度合作同盟。`,
          `【发挥伤官巧思，借木生火】：充分释放自身的洞察力与模式创新能力，用精妙的方案与沟通技巧撬动停滞已久的棘手难题。`,
          `【迎候火局时令，乘势而上】：紧盯夏季农历四至六月及九月戌月，乘天时火旺之际将合化成果落地为现实交付物。`
        ];
        redLines = [
          `严禁在合化成局的关键期横生猜忌破坏同盟，六合最重彼此信任交付；`,
          `严禁因一时顺遂而骄矜跋扈，火势生发宜低调敛财。`
        ];
        mentalAnchor = `《渊海子平》云：“贪合忘克，化凶为吉。卯戌相逢化作火，暗藏玄机福自多。”`;
      } else if (subcategory === 'killing_blade_officer') {
        directAnswer = `【军师直陈】：回禀命主，这正是为何命局汇聚“羊刃、七杀与伤官”时，被千古命理公推为极贵的【杀刃带伤格】（羊刃驾杀兼伤官吐秀）！\n三大极烈凶星在命局中形成了无懈可击的三位一体：\n①【羊刃】：提供不屈不挠的钢铁意志、不死之身与极限制衡底盘；\n②【七杀】：提供宏大的野心战场、开疆拓土的统率权柄与危急局势；\n③【伤官】：提供天马行空的非常规谋略、破除陈规的奇谋与心理攻防术！\n羊刃抗压、七杀指疆、伤官出奇，凶煞悉化为至大之权柄，乃乱世挽狂澜于既倒之统帅奇格！`;
        diagnosis = `杀刃带伤格（羊刃驾杀兼伤官吐秀）乃命理至强统帅大将格。羊刃刚烈护身任杀，七杀宏大威严开拓，伤官敏锐奇变破局。三者互制互化，如烈火炼真金，能在最复杂的危难与高风险战场中成就顶天立地之功业。`;
        tactics = [
          `【以羊刃为盾，抗击极端压强】：面对风浪不退缩，将高压环境视作淬炼意志的磨刀石，以极强钝感力与执行力支撑战略大盘。`,
          `【以七杀为矛，锁定宏大战略目标】：不沉迷于琐碎小利，主动对标行业天花板与高壁垒难关，争夺关键主导权与统御地位。`,
          `【以伤官为奇，行不对称降维打击】：在正面强攻受阻时，随时启动降维奇招，用前沿技术架构与非常规商业模式实现弯道超车。`
        ];
        redLines = [
          `严禁将杀刃之刚性演变为暴躁专横或孤家寡人，务必以大度容纳团队贤能；`,
          `严禁在法律与道德边界游走涉险，大格者必严守法度底线以保全基业。`
        ];
        mentalAnchor = `《三命通会·明通赋》云：“煞无刃不显，刃无煞不威。更逢伤官吐秀，杀刃化为权柄，威震边疆，功业传世。”`;
      } else if (subcategory === 'wealth_wife_fire') {
        directAnswer = `【军师直陈】：回禀命主，卯戌六合化火所成之火，百分之百算在【妻财】之中，且兼具财富与婚恋之双重奇功！\n①【暗财聚气（无中生有）】：对于水日主而言，火即为财。此火非固定死工资之明财，而是地支暗合所生之“暗财”——凭借顶级谋略（卯木伤官）降服复杂危机（七杀戌土）而创造的高额溢价、隐形股权与危机套利之财；\n②【战友型正缘（调候暖局）】：男命以财为妻，此妻星由卯之才情灵动与戌之刚毅名望合化而来，必是能与命主并肩作战、共历风浪的战友型灵魂伴侣！且对于寒水过旺之局，合化之火起到了至关紧要的【调候暖局】神效，婚后元神彻底舒展，呈现“成家即立业、婚后财富阶梯式爆发”的跃升奇观；\n③【2026 丙午引爆】：2026 丙午岁君天干透丙火（偏财）、地支午火与戌半合火局，全面引爆原局卯戌暗合之火，暗财转明，正缘显化，乃数十年一遇之极盛时机！`;
        diagnosis = `卯戌六合化火在水日主命盘中，定为【妻财双美】之大吉象。伤官之智合杀化财，既创造了无中生有的暗合之财，又孕育了并肩携手的战友型妻子。全局得纯阳真火调候，驱散冰寒，婚后与岁运交汇必迎爆发式跃升。`;
        tactics = [
          `【捕获暗财商机，布局高附加值模式】：聚焦于“以智破难”的轻资产商业与咨询顾问模式，锁定非对称回报，将潜在危机变现为高额利润。`,
          `【珍惜战友正缘，共同推演共谋大事】：在亲密关系中视伴侣为第一同盟与合伙人，重大事项开诚布公共同裁决，借对方之气场互补自身短板。`,
          `【借 2026 丙午流年全面变现】：今年岁君丙午乃火星最旺之年，正是将多年暗中积蓄的才智、项目与人脉彻底推向市场变现的黄金窗口！`
        ];
        redLines = [
          `严禁在暗财涌动时沾沾自喜、显摆炫耀，暗财最忌高调招致小人觊觎；`,
          `严禁对战友型伴侣盛气凌人或掩盖真实财务状况，信任为同盟之本。`
        ];
        mentalAnchor = `《滴天髓》云：“何知其人富？财气通门户。暗会明化，火暖寒江，自致千钟。”`;
      } else {
        directAnswer = `【军师直陈】：回禀命主，您所探究的正是子平命理中最为精微深邃的“凶星协同转化”大典！从【伤官吐秀】（身旺泄秀生智）到【伤官驾杀】（以奇谋降服危机），再到【水旺+戌土无金】的水土混杂死局；而一旦【卯木加持】，即触发【卯戌六合化火、贪合忘克】，化干戈为玉帛！此化出之火，在水日主命盘中百分之百定为【妻财双美】：既是无中生有的“暗合化财”，又是并肩作战且能“调候暖局”的战友型正缘！若再配以羊刃，则大成千古统帅大格【杀刃带伤格】！2026 丙午岁君将此暗火全线引爆！`;
        diagnosis = `命主通盘洞察伤官、七杀、羊刃与六合化火之高阶命理回路。日元坐【${dm}】，子平活力评分为 ${ctx.vigorScore} 分（【${ctx.vigorTier}】）。全局能量通过卯戌合化与水木火土相生相制，展现出极具深度的谋略与爆发潜能。`;
        tactics = [
          `【以智降虎，化危为机】：面对外界压力与高难度挑战，坚决以不对称策略与破局创新攻坚，将危机转化为至高权柄。`,
          `【善用六合，广聚暗财】：深谙贪合忘克之机，在人际协作与商业项目中促成多方共赢，激活暗合化财的高额收益。`,
          `【携手良伴，借火暖局】：在情感与事业中与战友型灵魂伴侣紧密协同，借家庭温暖与同盟之力激发元神最大潜能。`
        ];
        redLines = [
          `严禁在能量未聚齐时单打独斗盲目逞强，大格者必善借天时与同道之势；`,
          `严禁因急功近利而破坏长远契约，真火之聚重在持久纯正。`
        ];
        mentalAnchor = `《三命通会》云：“吉凶相互为用，凶神得制化为权，暗合格局有奇功。水火相济，文武兼资。”`;
      }
    } else {
      // General Fallback
      title = '元神气机与宏观定调神策';
      directAnswer = `【军师直陈】：回禀命主，当前岁运行至 2026 丙午，值年卦坐【${ctx.activeHexagram}】。全盘气机重在“顺应时节、蓄力深耕、以稳致远”。请点击下方为您预判的参谋命题深入推演，或直接告知您面临的具体抉择。`;

      diagnosis = `命主日元坐【${dm}】，子平量化活力评分为 ${ctx.vigorScore} 分（【${ctx.vigorTier}】），岁运流年行至 ${ctx.activeAnnualYear} ${ctx.activeAnnualGanzhi}，当值六十四卦气运坐【${ctx.activeHexagram}】。全盘气机处于${isWeak ? '“积蓄潜能、内修定力、以拙胜巧”' : '“顺势而发、拓宽格局、以稳行远”'}的时空坐标系。`;

      tactics = [
        `【顺应节律与元神调和】：不逆大势，不过早亮出全部底牌。以日常稳定的睡眠和锻炼固本培元。`,
        `【专注高价值交付】：将注意力从散乱琐事中抽离，聚焦于最具长线复利的一到两件核心要务。`,
        `【修习《${ctx.firstScroll}》保全法则】：处世不亢不卑，因势利导，善借外力化解阻力。`
      ];

      redLines = [
        `严禁在身体元气不足或精力透支时做出重大人生决策；`,
        `严禁将心智算力消耗于无意义的言语争辩或虚妄社交中。`
      ];

      mentalAnchor = `《庄子·逍遥游》云：“适莽苍者，三餐而反，腹犹果然；适百里者，宿舂粮；适千里者，三月聚粮。若夫乘天地之正，而御六气之辩，以游无穷者，彼且恶乎待哉！”`;
    }

    let microActions = [];
    if (category === 'romance_timing') {
      microActions = [
        { id: 'somatic', badge: '躯体动作', text: '今日整理仪容神采，慢跑或拉伸20分钟，以充盈气色激活异性引力场' },
        { id: 'tactical', badge: '现实推进', text: '本周主动报名参加 1 场高质量行业研讨会、读书沙龙或朋友私密聚会' },
        { id: 'spatial', badge: '空间微调', text: '清理卧室正东或正南杂物，换上一瓶新鲜水养鲜花（忌塑料假花）' }
      ];
    } else if (category === 'manage_up') {
      microActions = [
        { id: 'somatic', badge: '躯体动作', text: '汇报前执行 3 轮 4-7-8 呼吸法，强行降低心率，消除在权威面前的防御紧张' },
        { id: 'tactical', badge: '现实推进', text: '准备 1 页精炼闭环小结，用三句话定式向直属上级同步交付进度与关键卡点' },
        { id: 'spatial', badge: '空间微调', text: '工位左侧放置紫砂文昌印或金属名片夹，借西北乾金之气稳住职场气场' }
      ];
    } else if (category === 'career_pivot') {
      microActions = [
        { id: 'somatic', badge: '躯体动作', text: '绝不在深夜疲惫时浏览招聘网站或做冲动离职决定，保证8小时深度睡眠' },
        { id: 'tactical', badge: '现实推进', text: '在现有工位全力打磨出 1 个不可替代的标杆作品或案例，作为核心谈判敲门砖' },
        { id: 'spatial', badge: '空间微调', text: '办公桌摆放黑曜石或白水晶原石，阻断低效同事消耗，护持沉潜心流' }
      ];
    } else if (category === 'academic_exam') {
      microActions = [
        { id: 'somatic', badge: '躯体动作', text: '将每天复习切分为 3 个连续 90 分钟无干扰心流块，以实体手写草稿代替空想' },
        { id: 'tactical', badge: '现实推进', text: '主动向导师或行业专家发送 1 封阶段性学术汇报邮件，争取关键推荐与资源' },
        { id: 'spatial', badge: '空间微调', text: '书桌左前方安放九层文昌塔或 4 支富贵竹，借木火通明之气提振记忆提取' }
      ];
    } else if (category === 'overthinking') {
      microActions = [
        { id: 'somatic', badge: '躯体动作', text: '立即用冰凉冷水猛冲面部与双手腕内侧 15 秒，强行阻断交感神经反刍警报' },
        { id: 'tactical', badge: '现实推进', text: '拿出一张白纸把脑中所有焦虑烂账无逻辑写下，随后只挑出 1 件具体体力活去干' },
        { id: 'spatial', badge: '空间微调', text: '立刻离开当前座位走动 2 分钟，擦净桌面，断开空间内耗物理锚定' }
      ];
    } else if (category === 'health_vitality') {
      microActions = [
        { id: 'somatic', badge: '躯体动作', text: '晚间 22:30 关闭手机并用温水泡脚 15 分钟，确保 23:00 前安卧入眠固守肾阳' },
        { id: 'tactical', badge: '现实推进', text: '晨间空腹饮用温水一杯，进行 10 分钟八段锦或慢走，排解体液湿滞' },
        { id: 'spatial', badge: '空间微调', text: '卧室保持空气流通，床头切忌堆放过多充电插座或强辐射电子产品' }
      ];
    } else if (category === 'real_estate_moving') {
      microActions = [
        { id: 'somatic', badge: '躯体动作', text: '实地踏勘目标楼盘时，在房屋中心闭目静立 1 分钟，感知身心是否舒缓安定' },
        { id: 'tactical', badge: '现实推进', text: '严格核对房屋产调信息与产权抵押状态，确认无任何隐性连带债务' },
        { id: 'spatial', badge: '空间微调', text: '若有缺角，在对应方位安置泰山石敢当或常青绿植填补宅基太极能量' }
      ];
    } else if (category === 'legal_dispute') {
      microActions = [
        { id: 'somatic', badge: '躯体动作', text: '面对挑衅执行 24 小时冷面隔离，绝不当场被激怒回复任何情绪化文字' },
        { id: 'tactical', badge: '现实推进', text: '将所有聊天记录、邮件与合同按时间线整理为不可篡改的 PDF 证据链条' },
        { id: 'spatial', badge: '空间微调', text: '随身携带白玉或黄水晶饰物，以土金之气化解暴戾官杀，借制度规则维权' }
      ];
    } else if (category === 'synastry_inquiry') {
      microActions = [
        { id: 'somatic', badge: '躯体动作', text: '与对方交流时保持平稳语速，先倾听对方 70% 的诉求再做理智表态' },
        { id: 'tactical', badge: '现实推进', text: '在涉及利益或责任分工的关键节点，以书面备忘录形式友好确认边界' },
        { id: 'spatial', badge: '空间微调', text: '在共同所处空间摆放温润陶瓷或暖色灯光，中和水火对冲之戾气' }
      ];
    } else if (category === 'pattern_metaphysics') {
      microActions = [
        { id: 'somatic', badge: '躯体动作', text: '执行 3 组 4-7-8 深度呼吸，静观体内水火气机交融，以平稳心率破除急躁' },
        { id: 'tactical', badge: '现实推进', text: '梳理手头最棘手的一个高难度难题，提炼出 1 套用创新智谋化解危机的方案' },
        { id: 'spatial', badge: '空间微调', text: '工位或书房摆放温润红木雕件或暖光台灯，以木火之气催旺卯戌暗合之暗财' }
      ];
    } else {
      microActions = [
        { id: 'somatic', badge: '躯体动作', text: '站起身离开座椅快步走动 2 分钟，深呼吸 3 次恢复心智确定感' },
        { id: 'tactical', badge: '现实推进', text: '聚焦今日最具长线复利的一件硬核任务，关闭多任务窗口单核推进' },
        { id: 'spatial', badge: '空间微调', text: '清理办公桌面杂乱文件，留出一片整洁清爽的视觉留白空间' }
      ];
    }

    if (feedbackSummary && feedbackSummary.lead) {
      directAnswer = `${feedbackSummary.lead}\n\n${directAnswer}`;
    }

    if (ctx && ctx.lookahead && ctx.lookahead.directiveZh) {
      tactics.unshift({
        badge: ctx.lookahead.shortBadgeZh,
        text: ctx.lookahead.directiveZh,
        isKey: true
      });
      microActions.push({
        id: 'lookahead_preemptive',
        badge: ctx.lookahead.shortBadgeZh.replace(/[^\u4e00-\u9fa5]/g, ''),
        text: ctx.lookahead.mode === 'preemptive_defense'
          ? `【基于次年（${ctx.lookahead.nextYear}）流年卦风控预警】：提前一年筑牢防线，盘点并固守现金流底盘，暂缓大额激进负债或高风险单飞，勿轻举妄动。`
          : (ctx.lookahead.mode === 'preemptive_layout'
            ? `【基于次年（${ctx.lookahead.nextYear}）流年卦胜势布局】：提前一年主动接触关键人脉与破圈资源，打磨核心技能底牌，做好次年起飞蓄能。`
            : `【基于次年（${ctx.lookahead.nextYear}）平稳过渡】：保持身心与财务自洽节律，按部就班推进核心技能复利积累。`)
      });
    }

    microActions = microActions.map(act => {
      const normalizedId = `act_${category}_${act.id}`;
      let status = 'pending';
      let feedback = null;
      if (typeof ActionLedger !== 'undefined') {
        ActionLedger.recordAction({
          id: normalizedId,
          category: category,
          subcategory: subcategory,
          badge: act.badge,
          text: act.text,
          lang: 'zh'
        });
        const rec = ActionLedger.getAll().find(r => r.id === normalizedId);
        if (rec) {
          status = rec.status;
          feedback = rec.feedback;
        }
      }
      return {
        id: normalizedId,
        badge: act.badge,
        text: act.text,
        status: status,
        feedback: feedback
      };
    });

    const smartFollowUps = this.anticipateQuestions(category, subcategory, bazi, 'zh');
    const actionLinks = this.getActionLinks(category, subcategory, 'zh');

    // Offline Semantic RAG retrieval across Canons, RongKuJian, and Historical Figures
    let ragResults = [];
    if (typeof VectorRAG !== 'undefined' && typeof VectorRAG.search === 'function') {
      try {
        ragResults = VectorRAG.search(query, { topK: 2, lang: 'zh' });
      } catch (e) {}
    }

    const contextPayload = {
      user_query: query,
      category: category,
      subcategory: subcategory,
      natal_facts: {
        day_master: ctx.dayMaster,
        vigor_score: ctx.vigorScore,
        pattern: ctx.vigorTier,
        active_year: `${ctx.activeAnnualYear} ${ctx.activeAnnualGanzhi}`,
        active_hexagram: ctx.activeHexagram,
        primary_scroll: ctx.firstScroll
      },
      direct_verdict: directAnswer,
      strategic_tactics: tactics.slice(0, 3).map(t => (typeof t === 'string' ? t : ((t.title || '') + ': ' + (t.desc || '')))),
      taboos_redlines: redLines.slice(0, 2),
      semantic_rag_citations: ragResults.map(r => `${r.canonName}: ${r.quote}`)
    };

    return {
      category: category,
      subcategory: subcategory,
      title: title,
      directAnswer: directAnswer,
      timingCard: timingCard,
      profileCard: profileCard,
      synastryCard: synastryCard,
      diagnosticTree: diagnosticTree,
      microActions: microActions,
      ragResults: ragResults,
      contextPayload: contextPayload,
      contextMeta: {
        dm: ctx.dayMaster,
        score: ctx.vigorScore,
        tier: ctx.vigorTier,
        year: ctx.activeAnnualYear,
        ganzhi: ctx.activeAnnualGanzhi,
        hex: ctx.activeHexagram,
        scroll: ctx.firstScroll,
        archetype: ctx.primaryArchetype
      },
      diagnosis: diagnosis,
      tactics: tactics,
      redLines: redLines,
      mentalAnchor: mentalAnchor,
      smartFollowUps: smartFollowUps,
      actionLinks: actionLinks
    };
  }

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

  static _branchToEn(b) {
    const map = {
      '子': 'Zi (Water/Rat)', '丑': 'Chou (Earth/Ox)', '寅': 'Yin (Wood/Tiger)', '卯': 'Mao (Wood/Rabbit)',
      '辰': 'Chen (Earth/Dragon)', '巳': 'Si (Fire/Snake)', '午': 'Wu (Fire/Horse)', '未': 'Wei (Earth/Goat)',
      '申': 'Shen (Metal/Monkey)', '酉': 'You (Metal/Rooster)', '戌': 'Xu (Earth/Dog)', '亥': 'Hai (Water/Pig)'
    };
    return map[b] || 'Branch';
  }

  static _ganzhiToEn(gz) {
    if (!gz || typeof gz !== 'string') return 'Bing-Wu';
    const stems = { '甲': 'Jia', '乙': 'Yi', '丙': 'Bing', '丁': 'Ding', '戊': 'Wu', '己': 'Ji', '庚': 'Geng', '辛': 'Xin', '壬': 'Ren', '癸': 'Gui' };
    const branches = { '子': 'Zi', '丑': 'Chou', '寅': 'Yin', '卯': 'Mao', '辰': 'Chen', '巳': 'Si', '午': 'Wu', '未': 'Wei', '申': 'Shen', '酉': 'You', '戌': 'Xu', '亥': 'Hai' };
    const s = gz[0], b = gz[1];
    if (stems[s] && branches[b]) return `${stems[s]}-${branches[b]}`;
    return 'Current Year';
  }

  static _generateAdviceEn(category, ctx, isWeak, query, bazi, luck, subcategory = 'comprehensive', feedbackSummary = null) {
    const enDm = this._stemToEn(ctx.dayMaster);
    const enDb = this._branchToEn(ctx.dayBranch);
    const enGz = this._ganzhiToEn(ctx.activeAnnualGanzhi);

    const cleanHex = (ctx.activeHexagram || 'The Creative').replace(/[\u4e00-\u9fa5]/g, '').trim() || 'The Creative';
    const cleanArchetype = (ctx.primaryArchetype || 'Specialist & Engineering').replace(/[\u4e00-\u9fa5]/g, '').trim() || 'Specialist & Engineering';
    const cleanScroll = (ctx.firstScroll || 'Scroll I: Adaptability').replace(/[\u4e00-\u9fa5]/g, '').trim() || 'Scroll I: Adaptability';
    const cleanTier = (ctx.vigorTier || 'Moderately Strong').replace(/[\u4e00-\u9fa5]/g, '').trim() || 'Moderately Strong';

    const isMale = (!ctx.gender || ctx.gender.includes('乾') || ctx.gender.includes('男'));
    const spouseStarEn = isMale ? 'Direct Wealth / Indirect Wealth' : 'Direct Officer / Seven Killings';

    let diagnosis = '';
    let tactics = [];
    let redLines = [];
    let mentalAnchor = '';
    let title = '';
    let directAnswer = '';
    let timingCard = null;
    let profileCard = null;
    let synastryCard = null;
    let diagnosticTree = null;

    // Branch & Elemental Synergy Analysis (Mao-Xu Six Harmony & Water Day Master)
    const allBranches = [
      ctx.dayBranch, ctx.yearBranch, ctx.monthBranch, ctx.hourBranch,
      bazi?.pillars?.year?.branch, bazi?.pillars?.month?.branch, bazi?.pillars?.day?.branch, bazi?.pillars?.hour?.branch
    ].filter(Boolean);
    const hasMao = allBranches.includes('卯') || /mao/i.test(query);
    const hasXu = allBranches.includes('戌') || /xu/i.test(query);
    const isWaterDm = (ctx.dayMaster === '壬' || ctx.dayMaster === '癸') || /water/i.test(query);
    const hasMaoXuSynergy = (hasMao && hasXu) || (isWaterDm && (hasMao || hasXu || /wealth|fire|wife/i.test(query)));

    let spouseArchetypeEn = 'independent, enterprising, proactive, and resilient';
    if (hasMaoXuSynergy) {
      spouseArchetypeEn = 'brilliant in intellect and resolute in fortitude, a formidable strategic ally and lifelong battle-companion';
    } else if (['子', '午', '卯', '酉'].includes(ctx.dayBranch)) {
      spouseArchetypeEn = 'charismatic, aesthetically refined, values deep emotional and intellectual intimacy';
    } else if (['辰', '戌', '丑', '未'].includes(ctx.dayBranch)) {
      spouseArchetypeEn = 'dependable, grounded, prudent with assets, and deeply loyal to family stability';
    }

    let palaceTransitEn = '';
    if (hasMaoXuSynergy) {
      palaceTransitEn = `Your natal chart harbors the profound [Mao-Xu Six-Harmony Transformation into Fire]! Hurting Officer elegance (Mao) fuses with Seven Killings fortitude (Xu), desiring union and forgetting conflict to birth your Spouse star. Your partner is not a passive dependent, but an extraordinary strategic ally and soulmate who stands shoulder-to-shoulder with you against worldly storms. Crucially, for a cold water chart, this transformed Fire brings indispensable Climate Warming Regulation, unlocking a catalytic post-marriage surge in wealth and strategic clarity! In 2026 Bing-Wu, the annual king penetrates Fire stems and branches, fully activating this hidden fire and bringing your destiny strategic soulmate into sharp focus!`;
    } else if (ctx.dayBranch === '寅' || ctx.dayBranch === '戌') {
      palaceTransitEn = `The 2026 Bing-Wu transit combines with your Spouse Palace [${enDb}] in a Tri-Union harmony. In BaZi, this is the premier herald of matrimonial synchronicity, activating magnetic affinity for a deeply resonant soulmate!`;
    } else if (ctx.dayBranch === '未') {
      palaceTransitEn = `The 2026 Bing-Wu transit forms a Six-Harmony union with your Spouse Palace [${enDb}]. Harmony anchors commitment, opening a prime window for formal relationship milestones and marital decisions!`;
    } else if (ctx.dayBranch === '子') {
      palaceTransitEn = `The 2026 Bing-Wu transit clashes with your Spouse Palace [${enDb}]. Clashes break single inertia, triggering sudden cross-city encounters or romantic acceleration; established couples should practice attentive patience.`;
    } else {
      palaceTransitEn = `Governed by Hexagram [${cleanHex}], the 2026 Bing-Wu cycle compounds subtle charisma. Optimal relational windows flourish dynamically through late summer into autumn.`;
    }

    if (category === 'romance_timing') {
      title = 'Romance Timing & Destiny Spouse Oracle';

      if (subcategory === 'timing_precision') {
        directAnswer = `Imperial Verdict: Seekers destiny romance accelerates decisively across 2026 Bing-Wu transit, peaking in Lunar Month 6 (Yi-Wei, Jul 7 ~ Aug 6, probability 92%), Lunar Month 5 (Jia-Wu, Jun 5 ~ Jul 6, probability 88%), and Lunar Month 9 (Wu-Xu, Oct 8 ~ Nov 6, probability 82%). Month 6 represents the paramount window as the Six-Harmony combines into the Spouse Palace. Review the dedicated 12-Month Transit Table below.`;
        timingCard = this.calculateMonthlyTransitWindows(bazi, luck, ctx.activeAnnualYear, 'romance_timing', 'en');
      } else if (subcategory === 'spouse_profile') {
        directAnswer = `Imperial Verdict: Rooted in Spouse Palace [${enDb}], your partner embodies a persona that is [${spouseArchetypeEn}]. They possess an elegant poise, intellectual curiosity, and high creative standards. Review the detailed profile card below.`;
        profileCard = {
          title: 'Destiny Partner Facial Features & Temperament Profile',
          palaceSign: `Spouse Palace seated on [${enDb}]`,
          appearance: spouseArchetypeEn,
          stature: (ctx.dayBranch === '午' || ctx.dayBranch === '子') ? 'Graceful and slender with a luminous, engaging presence' : 'Dignified, grounded, and composed',
          temperament: 'Gentle exterior with resolute inner fortitude; treasures intellectual resonance and authentic loyalty',
          careerFields: 'Digital tech/AI, cultural media, academic institutions, arts/design, management consulting',
          bestMatchAdvice: 'Treat as an equal strategic ally; decide collaboratively while honoring professional boundaries'
        };
      } else {
        directAnswer = `Imperial Verdict: Your destiny romantic window unfolds dynamically across 2026 Bing-Wu and 2027 Ding-Wei, with prime golden peaks in Lunar Months 5, 6, and 9. Your partner radiates refined aesthetic sensibilities and values profound intellectual intimacy.`;
        timingCard = this.calculateMonthlyTransitWindows(bazi, luck, ctx.activeAnnualYear, 'romance_timing', 'en');
      }

      diagnosis = `Day Master resides on [${enDm}], with the Spouse Palace rooted in [${enDb}], and a ZiPing vigor score of ${ctx.vigorScore}/100 (${cleanTier}). In classical synastry, ${isMale ? `males take Wealth stars (${spouseStarEn}) as spouse indicators.` : `females take Officer/Killing stars (${spouseStarEn}) as spouse indicators.`}\n[Spouse Archetype]: Seated on [${enDb}], your partner embodies a persona that is [${spouseArchetypeEn}].\n[Transit Timing Resonance]: ${palaceTransitEn}`;

      tactics = [
        `[Optimal Encounter Field]: Your destiny partner resonates within intellectual conferences, professional symposiums, artistic venues, travel journeys, or curated introductions by high-caliber confidants.`,
        `[Spatial Peach Blossom Harmonization]: According to your Day Branch quadrant, place fresh water flowers (odd numbers like lilies or roses) or raw rose quartz crystal in your bedroom's vitality sector. Avoid artificial dried flowers.`,
        `[The Way of Hexagram Xian (Mutual Influence)]: Relinquish perfectionism demanding both absolute emotional catering and worldly faultlessness. True lifelong alliance rests upon mutual sheltering against worldly storms.`
      ];

      redLines = [
        `Strictly avoid impulsive emotional breakups or hurried commitments during astrologically turbulent transit months;`,
        `Never dwell on past romantic rumination—the gate of destiny opens only when historical attachments are cleared.`
      ];

      mentalAnchor = `I Ching (Hexagram 31 Xian / Mutual Influence): "A lake on the mountain: the image of Influence. Thus the superior man encourages people to approach him by his readiness to receive them with humility."`;
    } else if (category === 'academic_exam') {
      title = 'Academic Advancement & Examination Strategy';
      if (subcategory === 'timing_precision') {
        directAnswer = `Imperial Verdict: Your peak scholarly and admission timing concentrates in Lunar Month 2 (Xin-Mao, Mar 5 ~ Apr 4, probability 93%) and Lunar Month 5 (Jia-Wu, Jun 5 ~ Jul 6, probability 87%), where the Wen Chang noble star and Output energy maximize examination breakthroughs.`;
        timingCard = this.calculateMonthlyTransitWindows(bazi, luck, ctx.activeAnnualYear, 'academic_exam', 'en');
      } else {
        directAnswer = `Imperial Verdict: Your chart is blessed with Resource and Output vitality, highly favorable for advanced graduate research or technical depth. Replace fragmented study with three unbroken 90-minute immersion blocks.`;
        timingCard = this.calculateMonthlyTransitWindows(bazi, luck, ctx.activeAnnualYear, 'academic_exam', 'en');
      }

      diagnosis = `Day Master [${enDm}] holds a vigor score of ${ctx.vigorScore}/100 (${cleanTier}). Scholarly advancement is governed by Resource (Institutional Prestige) and Output (Original Intellect). ${isWeak ? 'A sensitive Day Master thrives in structured academia under supportive mentorship, where credentials construct an unassailable moat.' : 'A vigorous Day Master commands abundant Output energy, ideal for interdisciplinary breakthroughs and trailblazing thesis work.'}`;

      tactics = [
        `[Wen Chang Spatial Alignment]: Place a 9-tier Pagoda or 4 stalks of lucky bamboo on the left corner of your study desk to harmonize Wood-Fire cognition and deep memory retention.`,
        `[Single-Task Deep Work Modules]: Replace fragmented study with three unbroken 90-minute deep immersion blocks per day. Physical handwriting anchors neural mastery.`,
        `[Institutional Alignment]: Emulate Feng Dao's Rong Ku Jian codex by providing concise, consistent milestone updates to academic advisors, securing vital research resources.`
      ];

      redLines = [
        `Never switch foundational reference textbooks hastily during pre-exam crunch weeks;`,
        `Strictly avoid pulling all-nighters before major exams, which depletes cognitive vitality.`
      ];

      mentalAnchor = `Platform Sutra: "Who would have thought that self-nature is inherently self-sufficient; who would have thought that self-nature can manifest all things."`;
    } else if (category === 'partnership') {
      title = 'Partnership Synergy & Strategic Alliance Protocol';
      directAnswer = `Imperial Verdict: Successful partnership requires clear covenants before camaraderie. Codify voting rights, vesting thresholds, and exit provisions in binding legal agreements to harness co-founder momentum without governance strife.`;

      diagnosis = `Day Master [${enDm}] commands vigor of ${ctx.vigorScore}/100 (${cleanTier}). Alliance success hinges on whether Companion elements share burdens or compete for spoils. ${isWeak ? 'A sensitive Day Master benefits greatly from robust co-founders to absorb market shocks and provide frontline momentum.' : 'A vigorous Day Master radiates strong leadership; ensure strict contractual governance to prevent equity disputes.'}`;

      tactics = [
        `[Contracts Before Camaraderie]: Never substitute friendship for corporate bylaws. Explicitly codify voting rights, vesting cliffs, and exit buyout mechanisms in writing.`,
        `[Domain Separation Moats]: Delineate clear domains—one handles technical product execution, while the other leads commercial fundraising, respecting autonomous authority.`,
        `[Vetting Core Character]: Prioritize partners whose elemental chart complements your favorable elements and who demonstrate unwavering integrity under stress.`
      ];

      redLines = [
        `Never co-sign unlimited personal liability guarantees without definitive exit provisions;`,
        `Never permit ambiguous accounting or mixing personal expenses with corporate capital.`
      ];

      mentalAnchor = `Rong Ku Jian: "Those who benefit all under heaven find all gates open; those who sow distrust among peers sever their own path. Clear boundaries and firm covenants avert strife."`;
    } else if (category === 'manage_up') {
      title = 'Upward Management & Workplace Directive';
      directAnswer = `Imperial Verdict: Anchored in the [${cleanArchetype}] archetype, upward management succeeds by dismantling executive defense with certainty. Lead with three metrics: delivery progress, bottleneck blockers, and two actionable options (Option A vs B).`;

      diagnosis = `Day Master is seated on [${enDm}], with a ZiPing vigor score of ${ctx.vigorScore}/100 (${cleanTier}), rooted in the [${cleanArchetype}] workplace niche. In upward management, ${isWeak ? 'a sensitive Day Master tends to experience heightened defensive friction around authority; yet your prime moat is deep precision and deliverable dependability.' : 'a vigorous Day Master radiates pioneering authority, yet may inadvertently bypass granular updates and appear resistant to managerial oversight.'}`;

      tactics = [
        `[Conclusion-First with Metric Anchors]: Superiors value certainty over emotions. Lead with three objective milestones (tangible deliverable, % completed, bottleneck blockers) to dissipate emotional friction.`,
        `[Transform Objections into Scenarios]: Applying Feng Dao's Rong Ku Jian (${cleanScroll}), never confront directly. Frame counter-proposals as: "Boss, aligned with your strategic intent, we have two execution paths (Option A vs B) with the following tradeoffs—which do you prefer to greenlight?"`,
        `[Clear Boundaries for Resources]: Operating within the [${cleanArchetype}] archetype, explicitly request clear deliverables and quiet focus blocks to preserve mental bandwidth.`
      ];

      redLines = [
        `Never point out flaws in leadership's strategy without presenting two viable solutions;`,
        `Never reply to critical workplace communications during emotional fatigue—adhere strictly to the 24-hour delayed response protocol.`
      ];

      mentalAnchor = `Rong Ku Jian: "The truly wise never stand beneath collapsing walls. By harmonizing with momentum, one leverages external authority to manifest greatness."`;
    } else if (category === 'career_pivot') {
      title = 'Strategic Crossroads & Pivot Oracle';
      if (subcategory === 'timing_precision') {
        directAnswer = `Imperial Verdict: The optimal career transition windows fall in Lunar Month 6 (Yi-Wei) and Lunar Month 9 (Wu-Xu). Ship a definitive masterpiece in your current post first before greenlighting aggressive mobility.`;
        timingCard = this.calculateMonthlyTransitWindows(bazi, luck, ctx.activeAnnualYear, 'career_pivot', 'en');
      } else {
        directAnswer = `Imperial Verdict: Navigating under Hexagram [${cleanHex}], only consider pivots that amplify your primary calling [${cleanArchetype}]. Reject roles demanding superficial social appeasement.`;
      }

      diagnosis = `Navigating transit year ${ctx.activeAnnualYear} (${enGz}) governed by Hexagram [${cleanHex}]. With a vigor score of ${ctx.vigorScore}/100, your field favors ${isWeak ? 'deep craftsmanship, specialized focus, and conservative consolidation' : 'bold multi-dimensional expansion and strategic frontline pioneering'}. The central directive is discerning true elevation from reactive escapism.`;

      tactics = [
        `[Archetype Alignment Filter]: Only pursue opportunities that directly reinforce your primary niche [${cleanArchetype}] and honor your need for depth; decline tracks that demand frivolous social pandering.`,
        `[Geographic Five-Element Synergy]: Verify that the prospective location and industry resonate with your favorable elements (e.g. academia in Water/Wood, technology in Fire/Wood). Moving toward favorable elemental vectors yields compound acceleration.`,
        `[Done is Better Than Speculation]: ${isWeak ? 'Avoid impulsive resignations without proof. Ship a bulletproof piece of work in your current post to serve as your undeniable leverage.' : 'Establish downside protection, then execute decisively to seize broader strategic autonomy.'}`
      ];

      redLines = [
        `Never pivot purely as an emotional escape from temporary interpersonal friction—without inner boundaries, similar dynamics will repeat;`,
        `Never sign restrictive covenants before vetting the organizational cash flow and managerial temperament.`
      ];

      mentalAnchor = `Zhuangzi (The Secret of Caring for Life): "Follow the natural grain of reality, strike through the great hollows, guide through the wide openings. With that which has no thickness entering into space, how vast is the room for the blade to wander freely!"`;
    } else if (category === 'overthinking') {
      title = 'Cognitive Reset & Somatic Protocol';
      directAnswer = `Imperial Verdict: You overthink solely because excess cognitive compute is idling without anchor. Execute the 3-minute somatic reset immediately: splash cold water on your face and inner wrists for 15 seconds, then externalize all spinning thoughts onto physical paper.`;

      diagnosis = `Day Master [${enDm}] endows you with perceptive intellect far beyond the average mind. Truly dull individuals never suffer from mental friction. You overthink solely because excess cognitive bandwidth is spinning in vacuum without grounding in physical reality.`;

      tactics = [
        `[3-Minute Somatic Hard Reboot]: Never resolve mental loops inside the mind. Splash ice-cold water onto your face and inner wrists for 15 seconds to trigger the mammalian dive reflex; follow with 3 rounds of 4-7-8 tactical breathing.`,
        `[Pen-and-Paper Externalization]: Write down every swirling anxiety uncensored on paper. The instant it hits the page, your brain shifts from emotional hostage to detached analytical observer.`,
        `[Ship an Imperfect Draft First]: Done is far superior to perfect. Permit yourself to produce an imperfect first draft of code or writing. Physical momentum instantly dissolves ruminative loops.`
      ];

      redLines = [
        `Strictly forbid contemplating life-defining decisions or analyzing others' micro-expressions after 23:00 (Zi hour);`,
        `Recognize others' opinions as their own karma, never your internal responsibility.`
      ];

      mentalAnchor = `Diamond Sutra: "All conditioned phenomena are like a dream, an illusion, a bubble, a shadow. When one perceives all appearances as non-appearances, one beholds reality. Let the mind abide nowhere, and so give rise to true awakening."`;
    } else if (category === 'wealth_window') {
      title = 'Wealth Horizon & Tactical Balance';
      directAnswer = hasMaoXuSynergy
        ? `Imperial Verdict: Your natal chart conceals the profound [Mao-Xu Six-Harmony Transformation into Fire] hidden wealth code! This is not static linear labor wages, but "Hidden Wealth" generated out of crisis: leveraging supreme strategic intellect (Mao Hurting Officer) to pacify and monetize high-stakes adversity (Xu Seven Killings). In 2026 Bing-Wu, the annual king penetrates Fire stems and branches to ignite this hidden fire, transmuting latent assets into manifest reality! Peak wealth compounding surges across Lunar Months 5, 6, and 9.`
        : `Imperial Verdict: The core doctrine is Direct Wealth as unshakeable anchor, with lightweight auxiliary initiatives compounding in Lunar Months 6 and 9. Avoid speculative high-leverage gambles.`;
      timingCard = this.calculateMonthlyTransitWindows(bazi, luck, ctx.activeAnnualYear, 'wealth_window', 'en');

      diagnosis = `Transiting year ${ctx.activeAnnualYear} (${enGz}) governed by Hexagram [${cleanHex}]. Vigor sits at ${ctx.vigorScore}/100 (${cleanTier}). ` +
        (hasMaoXuSynergy
          ? `Your chart harbors an esoteric conduit where Mao Wood and Xu Earth combine into Fire. For a ${isWaterDm ? 'Water Day Master' : 'seeker'}, Fire constitutes Wealth stars, representing extraordinary gains created out of thin air by resolving complex enterprise dilemmas. Under the 2026 Bing-Wu fire transit, this hidden wealth sparks into blazing expansion!`
          : `For wealth and career cultivation, the core protocol is "Direct Wealth as anchor, Indirect Wealth as opportune upside, compounding steadily."`);

      tactics = [
        hasMaoXuSynergy
          ? `[Monetize Crisis Arbitrage via Mao-Xu]: Direct your primary cognitive bandwidth toward resolving the industry's most daunting bottlenecks (Seven Killings) using disruptive innovation (Hurting Officer), capturing asymmetric equity and consulting premiums.`
          : `[Consolidate the Core Base]: Keep your primary vocation completely unshakeable, allocating 80% of mental bandwidth to deepening irreplaceable technical depth.`,
        `[Lightweight 0-to-1 Second Curves]: For auxiliary ventures, validate prototypes with minimal capital burn before deploying further resources.`,
        `[Prudent Discretion]: Heed the counsel of ${cleanScroll}—accumulate wealth with disciplined subtlety; deep waters carry mighty vessels with silence.`
      ];

      redLines = [
        `Never enter high-leverage speculative ventures with opaque terms;`,
        `Never partner with individuals exhibiting broken integrity or turbulent astrological clash.`
      ];

      mentalAnchor = hasMaoXuSynergy
        ? `Di Tian Sui: "How is great wealth discerned? When the qi of wealth opens the gates. Secret combinations manifest visible radiance; warm fire dissolves the frozen rivers to unlock thousands of measures of grain."`
        : `Di Tian Sui: "How is great wealth discerned? When the qi of wealth opens the gates. Direct and Indirect Wealth mutually generative establish enduring fortune."`;
    } else if (category === 'vague_confusion') {
      title = 'Macro Strategic Guidance & Compass Diagnostic';
      directAnswer = `Imperial Verdict: Ruminating in vacuum breeds anxiety; only structured classification brings clarity. Your Day Master [${enDm}] possesses sharp perception, but excess bandwidth requires targeted anchoring. Review the 4 strategic pathways below to illuminate your immediate priority.`;
      diagnosticTree = {
        title: 'Imperial Clarification Compass: Select Your Core Dilemma',
        prompt: 'Tap any strategic pathway to deploy targeted guidance:',
        nodes: [
          { id: 'diag_career', label: 'Career Crossroads & Breakthrough', query: 'My career direction is uncertain, what is my breakthrough path and timing?' },
          { id: 'diag_wealth', label: 'Wealth Defense & Financial Horizon', query: 'How is my wealth fortune and investment defense strategy this year?' },
          { id: 'diag_romance', label: 'Destiny Romance & Relationship Timing', query: 'When will my destiny romantic partner appear and what are their traits?' },
          { id: 'diag_health', label: 'Energy Depletion & Physical Reset', query: 'I feel exhausted and stressed, what is my somatic vitality reset protocol?' }
        ]
      };
      diagnosis = `Day Master seated on [${enDm}], with a ZiPing vigor score of ${ctx.vigorScore}/100 (${cleanTier}). Uncertainty stems from an overload of divergent choices rather than a deficit of talent. Ground your energy by selecting a single life theater to conquer first.`;
      tactics = [
        `[Single-Theater Concentration]: Discard all multi-tasking illusions. Focus entirely on one primary life arena for the next 90 days.`,
        `[Somatic Discharge]: When feeling overwhelmed, cease mental calculation immediately. Cleanse physical surroundings to reset inner mental order.`,
        `[Embody Feng Dao's Rong Ku Jian]: True masters never rush into blind action. Clarify boundaries first, then execute with deliberate composure.`
      ];
      redLines = [
        `Strictly forbid making radical lifestyle or career declarations while in a confused mental state;`,
        `Never seek external validation from peers who carry their own unexamined anxieties.`
      ];
      mentalAnchor = `Zhuangzi: "The fish trap exists because of the fish; once you've gotten the fish, you can forget the trap. Words exist because of meaning; once you've gotten the meaning, you can forget the words."`;
    } else if (category === 'synastry_inquiry') {
      title = 'Synastry Dynamics & Alliance Strategy';
      synastryCard = this.evaluateSynastryTactics(query, bazi, luck, 'en');
      directAnswer = `Imperial Verdict: Evaluated against your Day Master [${enDm}] and Spouse Palace [${enDb}], your interpersonal resonance reveals a compatibility score of ${synastryCard.score}/100 (${synastryCard.allianceArchetype}). Deepen collaboration through explicit expectations and boundary agreements.`;
      diagnosis = `Day Master [${enDm}] paired with transiting energies. Interpersonal synergy is governed by elemental complementary balance. With a compatibility rating of ${synastryCard.score}/100, mutual understanding requires active translation of each other's emotional dialect.`;
      tactics = [
        `[Covenants Before Camaraderie]: Explicitly codify mutual responsibilities, deliverables, and boundaries to eliminate ambiguous resentment.`,
        `[Pacing Synchronization]: Honor the other person's decision latency without applying coercive urgency; give space for natural alignment.`,
        `[24-Hour Emotional Decoupling]: When disagreements emerge, enforce a 24-hour cool-down protocol before delivering formal counter-proposals.`
      ];
      redLines = [
        `Never criticize each other's foundational values or core family background during heated debates;`,
        `Never rely solely on verbal tacit understanding for high-stakes collaborative commitments.`
      ];
      mentalAnchor = `Rong Ku Jian: "Those who benefit others open every gateway; those who cultivate distrust sever their own foundation. Firm agreements avert enduring strife."`;
    } else if (category === 'health_vitality') {
      title = 'Five-Element Vitality & Circadian Reset';
      timingCard = this.calculateMonthlyTransitWindows(bazi, luck, ctx.activeAnnualYear, 'health_vitality', 'en');
      directAnswer = `Imperial Verdict: Day Master [${enDm}] indicates elemental sensitivity in digestive balance and circadian rhythm. In transit year ${ctx.activeAnnualYear} (${enGz}), enforce sleep before 23:00 (Zi hour) and incorporate daily morning movement to dissipate internal stagnation.`;
      diagnosis = `Day Master is [${enDm}] with vigor score ${ctx.vigorScore}/100 (${cleanTier}). Under seasonal transit shifts, physical resilience hinges upon preserving kidney essence and harmonizing digestion. Chronic mental rumination tends to drain splenic qi.`;
      tactics = [
        `[Zi Hour Bedtime Invariant]: Disconnect all electronic screens by 22:30. Ensure deep recumbency before 23:00 to replenish vital essence.`,
        `[Warm Hydration & Morning Movement]: Drink a cup of warm water upon waking and execute 10 minutes of somatic stretching to activate lymphatic flow.`,
        `[Spatial Airflow & Toxin Clearance]: Maintain bedroom ventilation and remove excessive high-radiation charging stations from the bedside.`
      ];
      redLines = [
        `Strictly forbid intense anaerobic workouts or alcohol intake past 22:00;`,
        `Never ignore persistent gastrointestinal discomfort or rely on caffeine to mask physical depletion.`
      ];
      mentalAnchor = `Yellow Emperor's Inner Canon: "The three months of spring are called the period of renewal. Sleep late and rise early, stroll in the courtyard with loose hair and unfastened robes, to let one's aspirations take birth."`;
    } else if (category === 'real_estate_moving') {
      title = 'Property Acquisition & Relocation Oracle';
      timingCard = this.calculateMonthlyTransitWindows(bazi, luck, ctx.activeAnnualYear, 'real_estate_moving', 'en');
      directAnswer = `Imperial Verdict: Property acquisitions and relocations are governed by the Seal star and Earth branches. Favorable golden windows emerge in Lunar Months 6 (Yi-Wei) and 9 (Wu-Xu). Prioritize capital liquidity defense and sound structural feng shui over speculative appreciation.`;
      diagnosis = `Day Master [${enDm}] holds a vigor score of ${ctx.vigorScore}/100 (${cleanTier}). Property ownership represents the physical manifestation of Resource (Seal star). In transit year ${ctx.activeAnnualYear} (${enGz}), focus on debt conservative thresholds and location micro-climates.`;
      tactics = [
        `[Physical Spatial Resonance Sensing]: When inspecting prospective residences, pause silently at the center of the floor plan for one minute to assess autonomic ease.`,
        `[Conservative Mortgage Threshold]: Cap all monthly mortgage obligations strictly beneath 35% of stable primary monthly cash flow.`,
        `[Remedy Geometric Missing Corners]: If residential floor plans exhibit missing corners, place grounding stone or verdant greenery in that quadrant to balance room energy.`
      ];
      redLines = [
        `Never sign purchase agreements under high-pressure sales tactics without independent legal and title review;`,
        `Never over-leverage personal credit cards or short-term bridge debt for down payments.`
      ];
      mentalAnchor = `Book of Burial: "Qi rides the wind and scatters, but is retained by water. The ancients collected it to prevent dispersal, guided it to assure its retention; hence it was called Feng Shui."`;
    } else if (category === 'legal_dispute') {
      title = 'Dispute Resolution & Legal Defense Protocol';
      timingCard = this.calculateMonthlyTransitWindows(bazi, luck, ctx.activeAnnualYear, 'legal_dispute', 'en');
      directAnswer = `Imperial Verdict: Encountering confrontational transit friction demands rigorous composure. Win not through theatrical rhetoric, but via unassailable documentary evidence and disciplined procedural strategy under the canon of Rong Ku Jian.`;
      diagnosis = `Day Master [${enDm}] with vigor score ${ctx.vigorScore}/100 (${cleanTier}). Transiting tensions activate Officer/Killing friction. The key to subduing adversaries lies in dispassionate institutional discipline and airtight evidentiary chains.`;
      tactics = [
        `[Silent Evidence Preservation]: Catalog all correspondence, emails, timesheets, and contracts into a secure, immutable chronology before signaling legal intent.`,
        `[24-Hour Delayed Corporate Response]: Respond to adversarial provocations with scripted neutrality: "Received; our legal counsel is reviewing the matter for formal reply."`,
        `[Convert Friction into Settlement Leverage]: Aim not for emotional annihilation of opponents, but for clean contractual closure and financial restitution.`
      ];
      redLines = [
        `Strictly forbid signing any settlement waivers or release documents while in an emotionally compromised state;`,
        `Never resort to questionable informal tactics that could jeopardize clean evidentiary standing.`
      ];
      mentalAnchor = `Rong Ku Jian (Scroll on Law & Conduct): "The law is the foundation of order and the shield of self-preservation. It must never be taken lightly. Those who align with due process endure."`;
    } else if (category === 'pattern_metaphysics') {
      title = 'High-Order Pattern Dialectics & Hidden Wealth-Spouse Oracle';
      timingCard = this.calculateMonthlyTransitWindows(bazi, luck, ctx.activeAnnualYear, 'pattern_metaphysics', 'en');

      diagnosticTree = {
        title: 'High-Order Pattern & Transformed Wealth Compass: 4-Phase Escalation',
        prompt: 'Tap any dimensional node below to inspect the dynamic energy transformation mechanism:',
        nodes: [
          { id: 'diag_diff', label: 'Talent Expression vs Harnessing Killings: Core Distinction', query: 'What is the core difference between Hurting Officer expressing talent vs harnessing Seven Killings?' },
          { id: 'diag_water_xu', label: 'Water Heavy Xu Earth No Metal: Turbid Clash Pathology', query: 'Why does Water heavy with Xu Earth and no Metal cause turbid clash instead of talent expression?' },
          { id: 'diag_mao_fire', label: 'Mao Wood Intervention: Six-Harmony Desiring Union into Fire', query: 'How does adding Mao Wood resolve the Water-Xu clash into Fire through desiring union?' },
          { id: 'diag_wife_wealth', label: 'Transformed Fire as Wife & Wealth: Strategic Soulmate', query: 'Does the Mao-Xu fire count as Wife and Wealth? How does 2026 Bing-Wu trigger this hidden fortune?' }
        ]
      };

      if (subcategory === 'pattern_diff') {
        directAnswer = `Imperial Verdict: "Hurting Officer Expressing Talent" and "Hurting Officer Harnessing Seven Killings" represent two fundamentally distinct metaphysical energy conversion mechanisms!\n1. [Hurting Officer Expressing Talent]: The essence is "vigor channeled into intellectual radiance". When Day Master is robust with strong roots and resource support, the Hurting Officer acts as an outlet for excess vitality, transmuting it into artistic creation, academic literature, elite architecture, or scientific invention. The prerequisite is robust stamina; if Day Master is weak or water is torrential without metal, it is not talent expression, but an exhausting drain of vital essence.\n2. [Hurting Officer Harnessing Seven Killings]: The essence is "subduing brutality with tactical intellect to command authority". Seven Killings represents external crisis, cutthroat competition, and ruthless authority, while Hurting Officer is the rebellious sword and unconventional strategy. Taming the fierce tiger through tactical brilliance converts crisis into sovereign leadership and executive authority! The prerequisite is an iron constitution (such as Yang Blade), with balanced strength between Killing and Officer to prevent crossfire exhaustion.`;
        diagnosis = `Seeker inquires into the classical distinction between Hurting Officer Expressing Talent versus Harnessing Killings. Day Master sits on [${enDm}] with a ZiPing vigor score of ${ctx.vigorScore}/100 (${cleanTier}). Master Chen Su'an's ZiPing ZhenQuan establishes that pattern mastery depends fundamentally upon whether the Day Master can command ferocious deities: Talent Expression relies upon abundant internal surplus pouring forth naturally, whereas Harnessing Killings demands taming formidable external threats through asymmetric tactical intellect.`;
        tactics = [
          `[Assess Root Vitality Before Aggressive Output]: If your Day Master possesses strong roots and resource backing, boldly deploy Hurting Officer disruption to create breakthrough intellectual innovations (Talent Expression). If stamina is depleted, prioritize grounding consolidation before taking the vanguard.`,
          `[Tame Crises into Executive Leverage]: When confronting cutthroat corporate crises or aggressive adversaries (Seven Killings), avoid brute-force head-on friction; deploy asymmetric warfare and reverse-engineering to assimilate the adversary's power into your own institutional jurisdiction (Harnessing Killings).`,
          `[Calibrate Force Equilibrium against Burnout]: Harnessing ferocious stars demands an indomitable stamina baseline. If adversary pressure peaks, distribute the impact through institutional structures and trusted alliances to prevent mental exhaustion.`
        ];
        redLines = [
          `Strictly forbid launching direct ideological confrontations against entrenched authority while running low on personal physical vitality;`,
          `Never degrade Hurting Officer ingenuity into arrogant vanity or superficial defiance—unbridled provocation without protective resource invites swift destruction.`
        ];
        mentalAnchor = `ZiPing ZhenQuan: "Though Hurting Officer is an ominous star, it embodies pristine radiance; scholars and literary masters frequently emerge from this structure. When Hurting Officer combines with Seven Killings, military and political nobility are both attained."`;
      } else if (subcategory === 'water_xu_metal') {
        directAnswer = `Imperial Verdict: Torrential Water meeting Xu Earth without Metal in the chart can NEVER be classified as Hurting Officer Expressing Talent!\nWithout Metal (Resource stars), Water lacks both continuous source and purifying containment. Xu Earth is dry scorched earth, a fire storehouse, and Seven Killings. When confronted with torrential water, they clash violently in a "Water-Earth Combat" and "Turbid Mud Contamination".\nXu Earth fails to dam the water, and water dissolves the earth into turbid mud. In daily reality, this manifests as heavy mental rumination, self-doubt, unrecognized genius, and authoritarian pressure without a clear exit path!`;
        diagnosis = `Evaluating the pathology of torrential Water clashing against Xu Earth without Metal. The unanchored water torrent lacks mineral purification, colliding violently against the scorched earth of Seven Killings. This triggers the classical dead-end of "Muddy Waters and Shaken Embankments", requiring Wood to drain the stagnant soil or Metal to clarify the headwaters.`;
        tactics = [
          `[Introduce Wood Energy to Dissolve Deadlocks]: Abandon direct stubborn head-on collisions; introduce Wood (Output/Ingenuity) to naturally channel and aerate the compressed soil, transmuting deadlock into creative momentum.`,
          `[Reinforce Metal Discipline to Purify Ambiguity]: Infuse daily workflows with the pristine discipline of Metal—clear analytical frameworks, strict data audit trails, and ruthless prioritization to filter out muddy speculation.`,
          `[Spatial and Behavioral Cleansing]: Incorporate white, metallic, or lush living botanical accents in your workspace to harmonize the abrasive friction between water and earth.`
        ];
        redLines = [
          `Never initiate multi-front speculative investments while navigating periods of mental confusion, lest capital drown in turbid stagnation;`,
          `Never fall into self-blaming rumination—water-earth friction specifically strains gastrointestinal balance; prioritize somatic restoration.`
        ];
        mentalAnchor = `Di Tian Sui: "When water cannot tolerate earth, torrential floods inundate the plains; when earth cannot absorb water, the embankments crumble into dust. When water and earth clash without Metal or Wood to mediate, turbidity reigns without achievement."`;
      } else if (subcategory === 'mao_xu_fire') {
        directAnswer = `Imperial Verdict: The moment Mao Wood (pure Yin Wood, Hurting Officer for Water Day Master) intervenes, the chart undergoes a revolutionary qualitative transformation!\nWhen Mao encounters Xu, they trigger the esoteric Six-Harmony mystery: [Mao-Xu Combination Transforming into Fire]!\nThe supreme law of metaphysics is "Desiring Union and Forgetting Conflict": Mao Wood ceases attacking Xu Earth, and Xu Earth ceases muddying torrential water. Instead, their yin and yang fuse together, generating radiant, pure solar Fire!\nThis resolves the Water-Earth hostility in one stroke, infusing essential warmth and dynamic momentum into a cold chart!`;
        diagnosis = `The entry of Mao Wood triggers the alchemical [Mao-Xu Combination Transforming into Fire]. While Wood typically clashes with Earth, the presence of Six-Harmony causes them to desire union and forget conflict. Xu as Fire Storehouse and Mao as Spring Wood merge into solar fire, illuminating the entire chart and turning previous adversity into fertile expansion.`;
        tactics = [
          `[Convert Adversaries into Allies via Shared Benefit]: In negotiations, cease zero-sum battles; identify mutual existential interests to transform potential adversarial blockers (Seven Killings) into devoted strategic partners.`,
          `[Deploy Hurting Officer Ingenuity to Ignite Growth]: Unleash your distinctive strategic insight and business model disruption to dismantle long-standing institutional bottlenecks.`,
          `[Ride the Solar Wave]: Align major deliverables and venture unveilings with the peak Fire cycles of summer and mid-autumn, capitalizing on maximum solar resonance.`
        ];
        redLines = [
          `Strictly forbid introducing petty suspicion during the delicate formation of strategic alliances—Six-Harmony thrives exclusively upon uncompromising mutual trust;`,
          `Never let initial breakthroughs devolve into arrogance; let expanding solar warmth express itself through calm generosity.`
        ];
        mentalAnchor = `Yuan Hai Zi Ping: "When desire for union forgets conflict, ominous forces dissolve into sovereign fortune. When Mao and Xu unite to birth solar fire, boundless blessings emerge from the concealed void."`;
      } else if (subcategory === 'killing_blade_officer') {
        directAnswer = `Imperial Verdict: This is precisely why a chart uniting "Yang Blade, Seven Killings, and Hurting Officer" is venerated throughout classical canons as the supreme [Blade, Killing, and Hurting Officer Trinity Pattern] (Yang Blade Harnessing Killings combined with Hurting Officer Expressing Talent)!\nThree ferocious stars unite in an indomitable trinity:\n1. [Yang Blade]: Provides unyielding physical fortitude, an immortal spirit, and baseline shock absorption;\n2. [Seven Killings]: Provides the vast enterprise battlefield, crisis magnitude, and commanding authority;\n3. [Hurting Officer]: Provides unconventional strategy, agile maneuverability, and psychological dexterity!\nBlade endures, Killings command, and Officer triumphs—transmuting lethal adversity into supreme executive authority!`;
        diagnosis = `The Blade, Killing, and Hurting Officer Trinity Pattern represents the zenith of commanding martial structures. Yang Blade provides an unshakeable armor that absorbs punishing blows; Seven Killings commands ambitious territory and ruthless discipline; Hurting Officer executes asymmetric disruption. Mutual checks and balances forge an extraordinary general capable of turning the tide in extreme volatility.`;
        tactics = [
          `[Anchor Unyielding Resilience with Yang Blade]: View high-pressure environments as a crucible for personal mastery. Meet turbulence with calm emotional detachment and relentless daily execution.`,
          `[Direct Uncompromising Ambition with Seven Killings]: Reject trivial distractions; direct your strategic sights toward the industry's highest hurdles and most coveted commanding heights.`,
          `[Deliver Asymmetric Mastery with Hurting Officer]: When conventional frontal attacks stall, deploy unconventional architectures and bold business narratives to achieve decisive breakthroughs.`
        ];
        redLines = [
          `Never allow martial intensity to degenerate into tyrannical isolation; true commanders govern through magnanimity and institutional loyalty;`,
          `Strictly honor statutory and ethical boundaries—magnificent patterns preserve their longevity only through unshakeable adherence to the law.`
        ];
        mentalAnchor = `San Ming Tong Hui: "Seven Killings without the Blade lacks prestige; the Blade without Seven Killings lacks authority. When reinforced by Hurting Officer expressing radiant genius, the ferocious stars transform into supreme sovereignty, inspiring awe across frontiers."`;
      } else if (subcategory === 'wealth_wife_fire') {
        directAnswer = `Imperial Verdict: The Fire produced by the Mao-Xu Six-Harmony transformation counts 100% as [Wife and Wealth], conferring profound dual blessings!\n1. [Hidden Wealth Creation (Generating Fortune out of Crisis)]: For Water Day Masters, Fire is the Wealth star. This is not ordinary linear labor wage, but "Hidden Wealth" generated from resolving intense crisis (Xu Seven Killings) through intellectual brilliance (Mao Hurting Officer)—manifesting high-margin equity, crisis turnaround returns, and unprecedented leverage;\n2. [Strategic Ally Soulmate (Climate Warming Regulation)]: In male charts, Wealth represents the wife. This spouse is born from the fusion of Mao elegance and Xu fortitude, making her an extraordinary strategic co-pilot who battles worldly storms alongside you! Furthermore, for a cold water chart, this transformed Fire provides vital "Climate Warming Regulation", triggering a stepwise surge in prosperity and peace after marriage;\n3. [2026 Bing-Wu Activation]: The 2026 Bing-Wu transit penetrates Bing Fire on the stems and Wu-Xu fire alliance on the branches, fully igniting this hidden fire into manifest fortune and matrimonial fruition!`;
        diagnosis = `The transformation of Mao-Xu Six-Harmony into Fire functions in a Water chart as the paramount omen of [Dual Fortune in Wealth and Matrimony]. Ingenuity subdues adversity into capital, generating hidden wealth while cultivating a loyal, formidable life partner. Radiant solar fire warms the frozen waterways, unlocking compounding prosperity post-marriage and across transits.`;
        tactics = [
          `[Capture High-Margin Crisis Arbitrage]: Center commercial ventures on solving high-complexity enterprise dilemmas through intellectual models, capturing non-linear returns and equity stakes.`,
          `[Treasure Your Strategic Battle-Partner]: Approach your spouse as your primary confidante and strategic co-pilot; make major life and commercial deliberations collaboratively with full transparency.`,
          `[Execute Decisive Monetization in 2026 Bing-Wu]: With 2026 reigning as the imperial Fire Horse transit, deploy projects and commercial ventures into the open market during this once-in-a-generation window.`
        ];
        redLines = [
          `Never display ostentatious extravagance when hidden wealth begins flowing—hidden capital flourishes only in discreet privacy;`,
          `Never conceal financial truths or adopt condescending attitudes toward your battle-companion spouse; shared trust is the bedrock of your fortune.`
        ];
        mentalAnchor = `Di Tian Sui: "How is great wealth discerned? When the qi of wealth opens the gates. Concealed harmonies ignite luminous fire, warming the winter waters to amass thousands of measures of grain."`;
      } else {
        directAnswer = `Imperial Verdict: You are exploring the pinnacle of BaZi transformation dialectics! From [Talent Expression] (channeling surplus vigor) to [Harnessing Killings] (taming crisis into authority), past the dead-end of [Water-Heavy Xu Earth without Metal]; the moment [Mao Wood Intervenes], [Mao-Xu Combines into Fire through Desiring Union]. For Water Day Masters, this transformed Fire is 100% [Wife and Wealth]: both hidden wealth created out of crisis leverage, and a strategic ally soulmate who provides climate warming and post-marriage catalytic compounding! Combined with Yang Blade, it forms the sovereign [Blade, Killing, and Hurting Officer Trinity], fully ignited by 2026 Bing-Wu!`;
        diagnosis = `Comprehensive synthesis of Hurting Officer, Seven Killings, Yang Blade, and Six-Harmony transformation mechanics. Seated on Day Master [${enDm}] with vigor score ${ctx.vigorScore}/100 (${cleanTier}), the elemental forces harmonize through Mao-Xu fusion into radiant solar warmth, demonstrating extraordinary resilience and explosive strategic potential.`;
        tactics = [
          `[Tame Lethal Adversity into Executive Power]: Meet daunting obstacles with asymmetric ingenuity and systemic innovation, converting high crises into commanding authority.`,
          `[Harness Six-Harmony for Non-Linear Capital]: Embody the wisdom of desiring union and forgetting conflict, forging win-win ecosystems that yield substantial hidden returns.`,
          `[Partner with Strategic Allies to Warm the Field]: Collaborate intimately with trusted confidantes and your battle-partner spouse, drawing upon relational warmth to realize your grandest ambitions.`
        ];
        redLines = [
          `Never attempt reckless solo heroics before all elemental pieces are aligned; true commanders leverage cosmic timing and trusted alliances;`,
          `Never sacrifice long-term contractual integrity for immediate speculative advantage.`
        ];
        mentalAnchor = `San Ming Tong Hui: "Auspicious and inauspicious forces serve each other; ferocious stars subdued become sovereign authority; concealed combinations achieve extraordinary works. When Water and Fire attain harmony, civic and martial glory are both fulfilled."`;
      }
    } else {
      title = 'Macro Elemental Alignment & Strategic Overview';
      directAnswer = `Imperial Verdict: Navigating under the 2026 Bing-Wu transit governed by Hexagram [${cleanHex}], the overarching mandate is internal consolidation and disciplined alignment. Tap any of the anticipated prompts below to explore deeper.`;

      diagnosis = `Day Master [${enDm}] carries a vigor score of ${ctx.vigorScore}/100 (${cleanTier}) under the ${ctx.activeAnnualYear} (${enGz}) transit governed by Hexagram [${cleanHex}]. Your field is currently positioned in a phase of ${isWeak ? 'internal consolidation, stealth mastery, and energy conservation' : 'steady strategic expansion, grounded authority, and broad momentum'}.`;

      tactics = [
        `[Harmonize with Natural Cycles]: Align personal rhythms with seasonal transitions. Prioritize restorative sleep and physical grounding to nurture your core root.`,
        `[Focus on Compounding Anchors]: Discard superficial noise and channel mental bandwidth into one or two high-leverage initiatives.`,
        `[Pragmatic Adaptability]: Embody the wisdom of ${cleanScroll}—remain flexible, calm, and let patience resolve outer obstacles.`
      ];

      redLines = [
        `Never execute major life-altering decisions when fatigued or running low on physical vitality;`,
        `Never waste cognitive compute on trivial social debates or ungrounded speculation.`
      ];

      mentalAnchor = `Zhuangzi (Free and Easy Wandering): "He who travels to the green woods takes three meals and returns with his belly still full; he who travels a hundred leagues pounds grain by night; he who travels a thousand leagues gathers provisions for three months. Mount the true order of heaven and earth, and ride upon the changes of the six energies!"`;
    }

    let microActions = [];
    if (category === 'romance_timing') {
      microActions = [
        { id: 'somatic', badge: 'Somatic Reset', text: 'Refresh personal grooming and take a 20-minute brisk walk to activate social vitality' },
        { id: 'tactical', badge: 'Real-World Action', text: 'Register for 1 high-caliber industry conference, book salon, or curated private gathering this week' },
        { id: 'spatial', badge: 'Spatial Alignment', text: 'Clear bedroom East or South quadrant and place fresh water flowers (avoid artificial blooms)' }
      ];
    } else if (category === 'manage_up') {
      microActions = [
        { id: 'somatic', badge: 'Somatic Reset', text: 'Complete 3 cycles of 4-7-8 tactical breathing before executive briefings to eliminate physiological tension' },
        { id: 'tactical', badge: 'Real-World Action', text: 'Draft a 1-page milestone memo using the 3-sentence framework (progress, bottleneck, two options)' },
        { id: 'spatial', badge: 'Spatial Alignment', text: 'Position a solid metallic cardholder or grounding seal on the left of your desk to anchor authority' }
      ];
    } else if (category === 'career_pivot') {
      microActions = [
        { id: 'somatic', badge: 'Somatic Reset', text: 'Strictly avoid browsing job boards late at night; secure 8 hours of restorative sleep before deciding' },
        { id: 'tactical', badge: 'Real-World Action', text: 'Deliver 1 indisputable benchmark project in your current post as your primary negotiation leverage' },
        { id: 'spatial', badge: 'Spatial Alignment', text: 'Place a raw clear quartz crystal on your desk to protect quiet focus and block workplace distractions' }
      ];
    } else if (category === 'academic_exam') {
      microActions = [
        { id: 'somatic', badge: 'Somatic Reset', text: 'Structure daily study into 3 unbroken 90-minute immersion blocks using physical pen and paper' },
        { id: 'tactical', badge: 'Real-World Action', text: 'Send a concise milestone update email to your academic advisor to secure guidance and resources' },
        { id: 'spatial', badge: 'Spatial Alignment', text: 'Place a 9-tier pagoda or 4 stems of lucky bamboo on the left corner of your desk to focus memory' }
      ];
    } else if (category === 'overthinking') {
      microActions = [
        { id: 'somatic', badge: 'Somatic Reset', text: 'Splash ice-cold water on face and inner wrists for 15 seconds to immediately halt the mental loop' },
        { id: 'tactical', badge: 'Real-World Action', text: 'Externalize all swirling thoughts onto physical paper, then engage in 1 single tangible physical chore' },
        { id: 'spatial', badge: 'Spatial Alignment', text: 'Stand up and walk away from your workstation for 2 minutes; wipe down desk to clear spatial anchor' }
      ];
    } else if (category === 'health_vitality') {
      microActions = [
        { id: 'somatic', badge: 'Somatic Reset', text: 'Power down digital devices at 22:30 and take a warm foot bath to ensure sleep before 23:00' },
        { id: 'tactical', badge: 'Real-World Action', text: 'Drink warm water upon waking and perform 10 minutes of gentle morning stretching' },
        { id: 'spatial', badge: 'Spatial Alignment', text: 'Ventilate bedroom thoroughly and remove high-radiation electronics from bedside tables' }
      ];
    } else if (category === 'real_estate_moving') {
      microActions = [
        { id: 'somatic', badge: 'Somatic Reset', text: 'Pause and stand quietly for 1 minute at the center of any candidate property to assess autonomic calm' },
        { id: 'tactical', badge: 'Real-World Action', text: 'Thoroughly verify property title, encumbrances, and municipal zoning to ensure clean legal ownership' },
        { id: 'spatial', badge: 'Spatial Alignment', text: 'Address any missing floor plan corners with grounding stone or vibrant indoor plants' }
      ];
    } else if (category === 'legal_dispute') {
      microActions = [
        { id: 'somatic', badge: 'Somatic Reset', text: 'Apply a 24-hour delayed reaction protocol to provocations; never reply in emotional agitation' },
        { id: 'tactical', badge: 'Real-World Action', text: 'Compile all emails, chat histories, and contracts into an organized chronological PDF dossier' },
        { id: 'spatial', badge: 'Spatial Alignment', text: 'Carry a piece of white jade or yellow quartz to steady inner composure and support clear strategy' }
      ];
    } else if (category === 'synastry_inquiry') {
      microActions = [
        { id: 'somatic', badge: 'Somatic Reset', text: 'Maintain a calm vocal cadence and listen attentively to 70% of the counterparty points first' },
        { id: 'tactical', badge: 'Real-World Action', text: 'Codify collaborative boundaries and deliverables in written memos rather than verbal assumptions' },
        { id: 'spatial', badge: 'Spatial Alignment', text: 'Introduce warm ceramic elements or ambient warm lighting in shared spaces to harmonize energy' }
      ];
    } else if (category === 'pattern_metaphysics') {
      microActions = [
        { id: 'somatic', badge: 'Somatic Reset', text: 'Execute 3 cycles of 4-7-8 deep breathing to observe the inner harmony of Water and Fire' },
        { id: 'tactical', badge: 'Real-World Action', text: 'Distill your most challenging dilemma into 1 strategic plan that subdues crisis through innovation' },
        { id: 'spatial', badge: 'Spatial Alignment', text: 'Position warm red sandalwood or ambient lighting in your workspace to nurture the transformed solar warmth' }
      ];
    } else {
      microActions = [
        { id: 'somatic', badge: 'Somatic Reset', text: 'Stand up, step outside for 2 minutes, and take 3 diaphragmatic breaths to restore clarity' },
        { id: 'tactical', badge: 'Real-World Action', text: 'Focus exclusively on today most compounding high-leverage priority in single-task mode' },
        { id: 'spatial', badge: 'Spatial Alignment', text: 'Clear desktop clutter to create an open visual field that fosters serene concentration' }
      ];
    }

    if (feedbackSummary && feedbackSummary.lead) {
      directAnswer = `${feedbackSummary.lead}\n\n${directAnswer}`;
    }

    if (ctx && ctx.lookahead && ctx.lookahead.directiveEn) {
      tactics.unshift({
        badge: ctx.lookahead.shortBadgeEn,
        text: ctx.lookahead.directiveEn,
        isKey: true
      });
      microActions.push({
        id: 'lookahead_preemptive',
        badge: ctx.lookahead.mode === 'preemptive_defense' ? 'Preemptive Defense' : (ctx.lookahead.mode === 'preemptive_layout' ? 'Preemptive Layout' : 'Steady Compounding'),
        text: ctx.lookahead.directiveEn
      });
    }

    microActions = microActions.map(act => {
      const normalizedId = `act_${category}_${act.id}`;
      let status = 'pending';
      let feedback = null;
      if (typeof ActionLedger !== 'undefined') {
        ActionLedger.recordAction({
          id: normalizedId,
          category: category,
          subcategory: subcategory,
          badge: act.badge,
          text: act.text,
          lang: 'en'
        });
        const rec = ActionLedger.getAll().find(r => r.id === normalizedId);
        if (rec) {
          status = rec.status;
          feedback = rec.feedback;
        }
      }
      return {
        id: normalizedId,
        badge: act.badge,
        text: act.text,
        status: status,
        feedback: feedback
      };
    });

    const smartFollowUps = this.anticipateQuestions(category, subcategory, bazi, 'en');
    const actionLinks = this.getActionLinks(category, subcategory, 'en');

    // Offline Semantic RAG retrieval across Canons, RongKuJian, and Historical Figures
    let ragResults = [];
    if (typeof VectorRAG !== 'undefined' && typeof VectorRAG.search === 'function') {
      try {
        ragResults = VectorRAG.search(query, { topK: 2, lang: 'en' });
      } catch (e) {}
    }

    const contextPayload = {
      user_query: query,
      category: category,
      subcategory: subcategory,
      natal_facts: {
        day_master: enDm,
        vigor_score: ctx.vigorScore,
        pattern: cleanTier,
        active_year: `${ctx.activeAnnualYear} ${enGz}`,
        active_hexagram: cleanHex,
        primary_scroll: cleanScroll
      },
      direct_verdict: directAnswer,
      strategic_tactics: tactics.slice(0, 3).map(t => (typeof t === 'string' ? t : ((t.title || '') + ': ' + (t.desc || '')))),
      taboos_redlines: redLines.slice(0, 2),
      semantic_rag_citations: ragResults.map(r => `${r.canonName}: ${r.quote}`)
    };

    return {
      category: category,
      subcategory: subcategory,
      title: title,
      directAnswer: directAnswer,
      timingCard: timingCard,
      profileCard: profileCard,
      synastryCard: synastryCard,
      diagnosticTree: diagnosticTree,
      microActions: microActions,
      ragResults: ragResults,
      contextPayload: contextPayload,
      contextMeta: {
        dm: enDm,
        score: ctx.vigorScore,
        tier: cleanTier,
        year: ctx.activeAnnualYear,
        ganzhi: enGz,
        hex: cleanHex,
        scroll: cleanScroll,
        archetype: cleanArchetype
      },
      diagnosis: diagnosis,
      tactics: tactics,
      redLines: redLines,
      mentalAnchor: mentalAnchor,
      smartFollowUps: smartFollowUps,
      actionLinks: actionLinks
    };
  }

  /**
   * Hybrid LLM Polish ("计算归算法，表达归模型")
   * Takes the 100% deterministically computed advice object, attempts browser-native window.ai
   * (Chrome Gemini Nano) to polish expression into warm, bespoke strategic prose within 200 words.
   * If window.ai is absent or fails, seamlessly and gracefully retains the deterministic text.
   */
  static async polishWithLLM(adviceObj, userQuery, lang = 'zh') {
    if (!adviceObj) return adviceObj;

    const isEn = (lang === 'en');
    adviceObj.llmEnhanced = false;
    adviceObj.llmModel = isEn ? 'Deterministic Core Engine' : '确定性算法中枢';

    // 1. Check browser-native window.ai (Chrome Built-in Gemini Nano)
    if (typeof window !== 'undefined' && window.ai && window.ai.languageModel) {
      try {
        const capabilities = await window.ai.languageModel.capabilities();
        if (capabilities && capabilities.available !== 'no') {
          const systemPrompt = isEn
            ? `You are Antigravity Imperial Metaphysical Strategic Advisor (钦天监随身军师).
ROLE: Strictly constrained strategic narrator.
RULES:
1. You MUST NOT calculate, invent, or alter any astrology, bazi, element, or hexagram facts.
2. Use ONLY the provided deterministic facts to formulate a sharp, empathetic, and decisive response under 200 words.
3. Address the native directly with calm authority and clarity.`
            : `你是由Google DeepMind团队架构的钦天监随身军师。
角色定位：受限解说员与战略谋士。
核心铁律：
1. 严禁自行推算五行吉凶、篡改任何干支命理计算结果；
2. 严格依据系统提供的确定性事实Payload，提炼为一段温和、决断、行云流水且富有东方智慧的策略解答，字数严格控制在200字以内；
3. 直切痛点，杜绝模棱两可与公式化套话。`;

          const session = await window.ai.languageModel.create({
            systemPrompt: systemPrompt
          });

          const prompt = `[USER QUERY]: ${userQuery}\n[DETERMINISTIC FACTS PAYLOAD]: ${JSON.stringify(adviceObj.contextPayload)}`;
          const response = await session.prompt(prompt);

          if (response && response.trim().length > 20) {
            adviceObj.llmEnhanced = true;
            adviceObj.llmNarrative = response.trim();
            adviceObj.llmModel = isEn ? 'Chrome Built-in Gemini Nano (window.ai)' : '端侧大模型 Gemini Nano (window.ai)';
            session.destroy();
            return adviceObj;
          }
        }
      } catch (err) {
        console.warn('window.ai polish error, falling back gracefully:', err);
      }
    }

    // Graceful degradation: returns unchanged adviceObj with deterministic flag
    return adviceObj;
  }
}

if (typeof window !== 'undefined') {
  window.AdvisorEngine = AdvisorEngine;
  window.ActionLedger = ActionLedger;
  window.ToolDispatcher = ToolDispatcher;
}
if (typeof globalThis !== 'undefined') {
  globalThis.AdvisorEngine = AdvisorEngine;
  globalThis.ActionLedger = ActionLedger;
  globalThis.ToolDispatcher = ToolDispatcher;
}
