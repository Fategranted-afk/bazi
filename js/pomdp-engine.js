/**
 * 贝尔曼自适应策略迭代与 POMDP 信念状态跟踪引擎 (Bellman POMDP Adaptive Recalibration Engine)
 * Phase 4 Core Module of Autonomous Strategic Agent Architecture.
 *
 * Mathematical Formalization:
 * Partially Observable Markov Decision Process (S, A, T, R, Omega, O, gamma)
 * - S: Hidden Environmental States (expansion, undercurrent, defense, inflection)
 * - A: Action Space (breakthrough, coalition, consolidation, defense, leap)
 * - Omega: Feedback Outcomes (eased, blocked, neutral)
 * - T: Transition Matrix T(s' | s, a)
 * - O: Emission Probability Matrix O(o | s', a)
 * - R: Reward Function R(s, a)
 * - gamma: Discount Factor (0.85)
 *
 * Computes:
 * - Bayesian Belief Update: b'(s') \propto O(o | s', a) * \sum_s T(s' | s, a) * b(s)
 * - Epistemic Entropy: H(b) = - \sum_s b(s) * log2(b(s))
 * - Bellman Q-Value: Q*(b, a) = R(b, a) + gamma * \sum_o P(o | b, a) * V*(b'_{a, o})
 * - Optimal Policy: a* = \arg\max_a Q*(b, a)
 *
 * 100% Zero-CJK in English mode, deterministic, offline-first.
 */

class PomdpEngine {
  static STORAGE_BELIEF_KEY = 'bazi_pomdp_belief_v1';
  static STORAGE_HISTORY_KEY = 'bazi_pomdp_history_v1';

  static STATES = ['expansion', 'undercurrent', 'defense', 'inflection'];
  static ACTIONS = ['breakthrough', 'coalition', 'consolidation', 'defense', 'leap'];
  static OUTCOMES = ['eased', 'neutral', 'blocked'];
  static GAMMA = 0.85;

  // In-memory fallback
  static _memoryBelief = null;
  static _memoryHistory = [];

  /**
   * Reward Matrix R(s, a)
   * Rows: STATES [expansion, undercurrent, defense, inflection]
   * Cols: ACTIONS [breakthrough, coalition, consolidation, defense, leap]
   */
  static REWARD_MATRIX = {
    expansion: {
      breakthrough: 10.0,
      coalition: 6.0,
      consolidation: 3.5,
      defense: -2.0,
      leap: 5.0
    },
    undercurrent: {
      breakthrough: -5.0,
      coalition: 8.5,
      consolidation: 6.0,
      defense: 4.0,
      leap: 5.5
    },
    defense: {
      breakthrough: -9.5,
      coalition: -2.0,
      consolidation: 5.0,
      defense: 8.5,
      leap: 2.0
    },
    inflection: {
      breakthrough: 2.5,
      coalition: 4.5,
      consolidation: 3.0,
      defense: -3.0,
      leap: 10.0
    }
  };

  /**
   * State Transition Matrix T(s' | s, a)
   */
  static TRANSITION_MATRIX = {
    breakthrough: {
      expansion:   { expansion: 0.75, undercurrent: 0.10, defense: 0.05, inflection: 0.10 },
      undercurrent:{ expansion: 0.20, undercurrent: 0.35, defense: 0.35, inflection: 0.10 },
      defense:     { expansion: 0.05, undercurrent: 0.20, defense: 0.70, inflection: 0.05 },
      inflection:  { expansion: 0.40, undercurrent: 0.15, defense: 0.05, inflection: 0.40 }
    },
    coalition: {
      expansion:   { expansion: 0.70, undercurrent: 0.20, defense: 0.05, inflection: 0.05 },
      undercurrent:{ expansion: 0.45, undercurrent: 0.40, defense: 0.10, inflection: 0.05 },
      defense:     { expansion: 0.15, undercurrent: 0.40, defense: 0.40, inflection: 0.05 },
      inflection:  { expansion: 0.25, undercurrent: 0.30, defense: 0.05, inflection: 0.40 }
    },
    consolidation: {
      expansion:   { expansion: 0.65, undercurrent: 0.25, defense: 0.05, inflection: 0.05 },
      undercurrent:{ expansion: 0.30, undercurrent: 0.50, defense: 0.15, inflection: 0.05 },
      defense:     { expansion: 0.10, undercurrent: 0.35, defense: 0.50, inflection: 0.05 },
      inflection:  { expansion: 0.15, undercurrent: 0.25, defense: 0.10, inflection: 0.50 }
    },
    defense: {
      expansion:   { expansion: 0.40, undercurrent: 0.40, defense: 0.15, inflection: 0.05 },
      undercurrent:{ expansion: 0.15, undercurrent: 0.45, defense: 0.35, inflection: 0.05 },
      defense:     { expansion: 0.05, undercurrent: 0.25, defense: 0.65, inflection: 0.05 },
      inflection:  { expansion: 0.10, undercurrent: 0.20, defense: 0.20, inflection: 0.50 }
    },
    leap: {
      expansion:   { expansion: 0.50, undercurrent: 0.10, defense: 0.05, inflection: 0.35 },
      undercurrent:{ expansion: 0.25, undercurrent: 0.20, defense: 0.15, inflection: 0.40 },
      defense:     { expansion: 0.10, undercurrent: 0.15, defense: 0.30, inflection: 0.45 },
      inflection:  { expansion: 0.60, undercurrent: 0.10, defense: 0.05, inflection: 0.25 }
    }
  };

  /**
   * Observation Emission Matrix O(o | s', a)
   */
  static EMISSION_MATRIX = {
    expansion: {
      breakthrough: { eased: 0.78, neutral: 0.16, blocked: 0.06 },
      coalition:    { eased: 0.72, neutral: 0.22, blocked: 0.06 },
      consolidation:{ eased: 0.60, neutral: 0.35, blocked: 0.05 },
      defense:      { eased: 0.35, neutral: 0.55, blocked: 0.10 },
      leap:         { eased: 0.70, neutral: 0.20, blocked: 0.10 }
    },
    undercurrent: {
      breakthrough: { eased: 0.25, neutral: 0.35, blocked: 0.40 },
      coalition:    { eased: 0.65, neutral: 0.25, blocked: 0.10 },
      consolidation:{ eased: 0.55, neutral: 0.35, blocked: 0.10 },
      defense:      { eased: 0.45, neutral: 0.40, blocked: 0.15 },
      leap:         { eased: 0.45, neutral: 0.35, blocked: 0.20 }
    },
    defense: {
      breakthrough: { eased: 0.06, neutral: 0.16, blocked: 0.78 },
      coalition:    { eased: 0.20, neutral: 0.35, blocked: 0.45 },
      consolidation:{ eased: 0.40, neutral: 0.45, blocked: 0.15 },
      defense:      { eased: 0.50, neutral: 0.40, blocked: 0.10 },
      leap:         { eased: 0.20, neutral: 0.30, blocked: 0.50 }
    },
    inflection: {
      breakthrough: { eased: 0.40, neutral: 0.40, blocked: 0.20 },
      coalition:    { eased: 0.50, neutral: 0.35, blocked: 0.15 },
      consolidation:{ eased: 0.45, neutral: 0.45, blocked: 0.10 },
      defense:      { eased: 0.20, neutral: 0.50, blocked: 0.30 },
      leap:         { eased: 0.80, neutral: 0.15, blocked: 0.05 }
    }
  };

  /**
   * Helper: check if localStorage is accessible
   */
  static isStorageAvailable() {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const testKey = '__pomdp_storage_test__';
        window.localStorage.setItem(testKey, testKey);
        window.localStorage.removeItem(testKey);
        return true;
      }
    } catch (e) {}
    return false;
  }

  /**
   * Normalize belief vector so sum(b) = 1.0
   */
  static normalizeBelief(belief) {
    if (!belief || typeof belief !== 'object') {
      return { expansion: 0.25, undercurrent: 0.25, defense: 0.25, inflection: 0.25 };
    }
    let sum = 0.0;
    this.STATES.forEach(s => {
      let val = Number(belief[s]);
      if (isNaN(val) || val < 0.001) val = 0.001;
      sum += val;
    });
    const normalized = {};
    this.STATES.forEach(s => {
      let val = Number(belief[s]) || 0.001;
      if (val < 0.001) val = 0.001;
      normalized[s] = Number((val / sum).toFixed(4));
    });
    // Adjust rounding remainder to highest state
    let adjSum = 0;
    let maxS = 'expansion';
    let maxV = -1;
    this.STATES.forEach(s => {
      adjSum += normalized[s];
      if (normalized[s] > maxV) { maxV = normalized[s]; maxS = s; }
    });
    normalized[maxS] = Number((normalized[maxS] + (1.0 - adjSum)).toFixed(4));
    return normalized;
  }

  /**
   * Compute Epistemic Entropy H(b) in bits (0.00 ~ 2.00)
   */
  static computeEntropy(belief) {
    const b = this.normalizeBelief(belief);
    let entropy = 0.0;
    this.STATES.forEach(s => {
      const p = b[s];
      if (p > 1e-6) {
        entropy -= p * Math.log2(p);
      }
    });
    return Number(entropy.toFixed(3));
  }

  /**
   * Derive initial Bayesian prior belief from BaZi context and situation
   */
  static deriveInitialPrior(baziContext = null, situationText = '') {
    let priors = { expansion: 0.25, undercurrent: 0.25, defense: 0.25, inflection: 0.25 };

    if (baziContext) {
      const score = (baziContext.zipingScore && typeof baziContext.zipingScore.totalScore === 'number')
        ? baziContext.zipingScore.totalScore : 50.0;
      if (score >= 58.0) {
        priors.expansion += 0.12;
        priors.defense -= 0.06;
      } else if (score <= 42.0) {
        priors.defense += 0.10;
        priors.undercurrent += 0.05;
        priors.expansion -= 0.08;
      }

      // Check current luck cycle favorability
      if (baziContext._luckDecades && Array.isArray(baziContext._luckDecades)) {
        const curDecade = baziContext._luckDecades[0];
        if (curDecade && (curDecade.isFavorable || curDecade.favorable)) {
          priors.expansion += 0.08;
          priors.inflection += 0.05;
        } else if (curDecade) {
          priors.defense += 0.08;
          priors.undercurrent += 0.05;
        }
      }
    }

    // Check situational reality context
    const sit = (situationText || '').toLowerCase();
    if (/(裁员|降薪|缺钱|负债|推诿|抢功|背锅|压榨|离职|冲突|排挤|toxic|layoff|debt|scapegoat|squeeze)/.test(sit)) {
      priors.defense += 0.22;
      priors.undercurrent += 0.15;
      priors.expansion = Math.max(0.05, priors.expansion - 0.18);
    } else if (/(升职|扩张|融资|红利|晋升|带团队|机会|高薪|风口|promo|expand|funding|headcount|growth)/.test(sit)) {
      priors.expansion += 0.22;
      priors.inflection += 0.12;
      priors.defense = Math.max(0.05, priors.defense - 0.18);
    }

    return this.normalizeBelief(priors);
  }

  /**
   * Get current belief state (retrieves from localStorage or memory)
   */
  static getBelief(baziContext = null) {
    if (this._memoryBelief) {
      return { ...this._memoryBelief };
    }
    if (this.isStorageAvailable()) {
      try {
        const raw = window.localStorage.getItem(this.STORAGE_BELIEF_KEY);
        if (raw) {
          const parsed = JSON.parse(raw);
          if (parsed && typeof parsed === 'object' && parsed.expansion !== undefined) {
            this._memoryBelief = this.normalizeBelief(parsed);
            return { ...this._memoryBelief };
          }
        }
      } catch (e) {}
    }

    // Fallback to initial prior
    let sit = '';
    if (typeof ActionLedger !== 'undefined' && typeof ActionLedger.getActiveSituation === 'function') {
      sit = ActionLedger.getActiveSituation();
    }
    const initial = this.deriveInitialPrior(baziContext, sit);
    this.saveBelief(initial);
    return initial;
  }

  /**
   * Save current belief state
   */
  static saveBelief(belief) {
    const normalized = this.normalizeBelief(belief);
    this._memoryBelief = { ...normalized };
    if (this.isStorageAvailable()) {
      try {
        window.localStorage.setItem(this.STORAGE_BELIEF_KEY, JSON.stringify(normalized));
      } catch (e) {}
    }
    return normalized;
  }

  /**
   * Classify an action (from ActionLedger record or text) into one of the 5 canonical action types
   */
  static classifyAction(actionOrText) {
    if (!actionOrText) return 'consolidation';
    if (typeof actionOrText === 'object') {
      if (actionOrText.actionType && this.ACTIONS.includes(actionOrText.actionType)) {
        return actionOrText.actionType;
      }
      if (actionOrText.category && this.ACTIONS.includes(actionOrText.category)) {
        return actionOrText.category;
      }
      actionOrText = (actionOrText.text || '') + ' ' + (actionOrText.badge || '') + ' ' + (actionOrText.notes || '');
    }

    const t = String(actionOrText).toLowerCase();
    if (/(攻坚|破局|进击|开拓|主导|推进|抢占|主动出击|亮剑|breakthrough|spearhead|initiative|expansion|offensive)/i.test(t)) {
      return 'breakthrough';
    }
    if (/(结盟|协同|人脉|向上管理|汇报|联合|合作|打通|软磨|sponsor|coalition|alliance|stakeholder|network|diplomacy)/i.test(t)) {
      return 'coalition';
    }
    if (/(深耕|沉淀|打磨|技能|复盘|积累|专精|闭门|苦练|consolidation|mastery|upskill|compound|depth|study)/i.test(t)) {
      return 'consolidation';
    }
    if (/(防守|避险|留痕|边界|风控|止损|对冲|收敛|防御|保全|保护|defense|hedge|boundary|risk|containment|record|safeguard)/i.test(t)) {
      return 'defense';
    }
    if (/(跃迁|跳槽|转型|换轨|离职|面试|出海|外部机会|撤退|leap|pivot|exit|interview|transition|outflow)/i.test(t)) {
      return 'leap';
    }

    return 'consolidation';
  }

  /**
   * Update belief vector given an executed action and its observation outcome
   * Bayesian filter formula:
   * b'(s') = \frac{ O(o | s', a) \sum_s T(s' | s, a) b(s) }{ P(o | b, a) }
   */
  static updateBelief(actionOrType, outcome = 'neutral', baziContext = null) {
    const actType = this.classifyAction(actionOrType);
    const validOutcome = ['eased', 'blocked', 'neutral'].includes(outcome) ? outcome : 'neutral';
    const currentBelief = this.getBelief(baziContext);

    // 1. Predicted state distribution prior to observation
    // P_pred(s') = \sum_s T(s' | s, a) * b(s)
    const predicted = {};
    this.STATES.forEach(sPrime => {
      let sum = 0.0;
      this.STATES.forEach(s => {
        const transProb = this.TRANSITION_MATRIX[actType][s][sPrime] || 0.25;
        sum += transProb * currentBelief[s];
      });
      predicted[sPrime] = sum;
    });

    // 2. Marginal likelihood of observation:
    // P(o | b, a) = \sum_s' O(o | s', a) * P_pred(s')
    let marginalLikelihood = 0.0;
    this.STATES.forEach(sPrime => {
      const emitProb = this.EMISSION_MATRIX[sPrime][actType][validOutcome] || 0.333;
      marginalLikelihood += emitProb * predicted[sPrime];
    });

    if (marginalLikelihood < 1e-6) marginalLikelihood = 1e-6;

    // 3. Posterior update:
    // b'(s') = [ O(o | s', a) * P_pred(s') ] / P(o | b, a)
    const newBelief = {};
    this.STATES.forEach(sPrime => {
      const emitProb = this.EMISSION_MATRIX[sPrime][actType][validOutcome] || 0.333;
      newBelief[sPrime] = (emitProb * predicted[sPrime]) / marginalLikelihood;
    });

    const normalizedNew = this.normalizeBelief(newBelief);
    this.saveBelief(normalizedNew);

    // Log history
    this.recordHistory({
      timestamp: Date.now(),
      action: actType,
      outcome: validOutcome,
      prior: currentBelief,
      posterior: normalizedNew,
      entropy: this.computeEntropy(normalizedNew)
    });

    return normalizedNew;
  }

  /**
   * Reset belief to initial prior
   */
  static resetBelief(baziContext = null) {
    let sit = '';
    if (typeof ActionLedger !== 'undefined' && typeof ActionLedger.getActiveSituation === 'function') {
      sit = ActionLedger.getActiveSituation();
    }
    const prior = this.deriveInitialPrior(baziContext, sit);
    this.saveBelief(prior);
    return prior;
  }

  /**
   * Retrieve update history
   */
  static getHistory() {
    if (this.isStorageAvailable()) {
      try {
        const raw = window.localStorage.getItem(this.STORAGE_HISTORY_KEY);
        if (raw) {
          const list = JSON.parse(raw);
          if (Array.isArray(list)) return list;
        }
      } catch (e) {}
    }
    return [...this._memoryHistory];
  }

  /**
   * Record update event in history (keeps last 20)
   */
  static recordHistory(item) {
    const list = this.getHistory();
    list.unshift(item);
    if (list.length > 20) list.pop();
    this._memoryHistory = [...list];
    if (this.isStorageAvailable()) {
      try {
        window.localStorage.setItem(this.STORAGE_HISTORY_KEY, JSON.stringify(list));
      } catch (e) {}
    }
  }

  /**
   * Solve Bellman Q-Values and Optimal Policy
   * Q*(b, a) = R(b, a) + \gamma \sum_o P(o | b, a) * V*(b'_{a, o})
   * where V*(b') = \max_{a'} R(b', a')
   */
  static solveOptimalPolicy(baziContext = null, lang = 'zh') {
    const isEn = (lang === 'en');
    const belief = this.getBelief(baziContext);
    const entropy = this.computeEntropy(belief);

    // Find dominant state
    let dominantState = 'expansion';
    let maxStateProb = -1;
    this.STATES.forEach(s => {
      if (belief[s] > maxStateProb) {
        maxStateProb = belief[s];
        dominantState = s;
      }
    });

    const qValues = {};
    const details = {};

    this.ACTIONS.forEach(a => {
      // 1. Immediate expected reward R(b, a)
      let immReward = 0.0;
      this.STATES.forEach(s => {
        immReward += belief[s] * this.REWARD_MATRIX[s][a];
      });

      // 2. Expected future value across 3 possible outcomes
      let expectedFuture = 0.0;
      this.OUTCOMES.forEach(o => {
        // Compute P(o | b, a)
        let pO = 0.0;
        const pred = {};
        this.STATES.forEach(sPrime => {
          let sum = 0.0;
          this.STATES.forEach(s => {
            sum += (this.TRANSITION_MATRIX[a][s][sPrime] || 0.25) * belief[s];
          });
          pred[sPrime] = sum;
          pO += (this.EMISSION_MATRIX[sPrime][a][o] || 0.333) * sum;
        });

        if (pO > 1e-5) {
          // Future belief b'_{a, o}
          const nextB = {};
          this.STATES.forEach(sPrime => {
            nextB[sPrime] = ((this.EMISSION_MATRIX[sPrime][a][o] || 0.333) * pred[sPrime]) / pO;
          });
          // V*(b'_{a, o}) = max_{a'} R(b', a')
          let vNext = -999.0;
          this.ACTIONS.forEach(aNext => {
            let rNext = 0.0;
            this.STATES.forEach(sNext => {
              rNext += nextB[sNext] * this.REWARD_MATRIX[sNext][aNext];
            });
            if (rNext > vNext) vNext = rNext;
          });
          expectedFuture += pO * vNext;
        }
      });

      const qVal = Number((immReward + this.GAMMA * expectedFuture).toFixed(2));
      qValues[a] = qVal;
      details[a] = {
        action: a,
        qValue: qVal,
        immediateReward: Number(immReward.toFixed(2)),
        expectedFuture: Number(expectedFuture.toFixed(2))
      };
    });

    // Rank actions by Q-value
    const rankedActions = this.ACTIONS.map(a => details[a]).sort((x, y) => y.qValue - x.qValue);
    const optimalAction = rankedActions[0].action;
    const optimalQ = rankedActions[0].qValue;
    const minQ = rankedActions[rankedActions.length - 1].qValue;
    const spread = Math.max(1.0, optimalQ - minQ);
    const confidencePct = Math.min(99, Math.max(45, Math.round(55 + ((optimalQ - minQ) / spread) * 40)));

    // Generate bilingual strategic exegesis
    const exegesis = this.generateTacticalExegesis(dominantState, optimalAction, belief, lang);

    return {
      belief,
      dominantState,
      dominantStateProb: Number((maxStateProb * 100).toFixed(1)),
      entropy,
      qValues,
      rankedActions,
      optimalAction,
      optimalQ,
      confidencePct,
      exegesis
    };
  }

  /**
   * Tactical Exegesis Generator (100% Zero-CJK in English mode)
   */
  static generateTacticalExegesis(state, action, belief, lang = 'zh') {
    const isEn = (lang === 'en');

    const stateMeta = {
      expansion: {
        zhTitle: '顺风扩张态',
        enTitle: 'Favorable Expansion',
        zhTag: '气运升腾',
        enTag: 'Ascending Momentum',
        color: '#10b981'
      },
      undercurrent: {
        zhTitle: '暗涌重组态',
        enTitle: 'Hidden Undercurrent',
        zhTag: '权势重组',
        enTag: 'Power Realignment',
        color: '#8b5cf6'
      },
      defense: {
        zhTitle: '承压防御态',
        enTitle: 'Pressure Defense',
        zhTag: '深壁固垒',
        enTag: 'Perimeter Fortification',
        color: '#f43f5e'
      },
      inflection: {
        zhTitle: '换轨窗口态',
        enTitle: 'Leap Inflection',
        zhTag: '天时破局',
        enTag: 'Window of Opportunity',
        color: '#06b6d4'
      }
    };

    const actionMeta = {
      breakthrough: {
        zhTitle: '攻坚破局 · 顺水行舟',
        enTitle: 'Aggressive Breakthrough · Surge on Favorable Tide',
        zhSummary: '当前隐状态处于顺风或高回报区间，以主动攻坚与高可见度项目为矛，迅速扩大利益半径。',
        enSummary: 'Dominant environmental alignment is favorable. Spearhead high-impact visible initiatives to seize strategic ground.',
        stepsZh: [
          '主动认领部门战略级核心攻坚项目，确立第一责任人身份',
          '在2周内建立明确阶段性可见里程碑，向决策链高层直接汇报',
          '借机扩大支配预算与团队编制，迅速构筑不可替代的生态位壁垒'
        ],
        stepsEn: [
          'Spearhead high-stakes departmental initiatives as the primary operational anchor.',
          'Deliver clear bi-weekly milestones with direct visibility to executive stakeholders.',
          'Leverage momentum to expand operational resource allocations and solidify your moat.'
        ],
        riskZh: '警惕用力过猛脱离群众，在推进中需同步让渡边缘红利以平息同僚忌惮。',
        riskEn: 'Avoid overextending without stakeholder consensus; share fringe deliverables to neutralize peer friction.'
      },
      coalition: {
        zhTitle: '纵横结盟 · 破冰合纵',
        enTitle: 'Lateral Coalition · Diplomatic Alliance Building',
        zhSummary: '当前局势存在权力重组与暗流博弈，单打独斗易成众矢之的，必须向上向下建立利益共同体。',
        enSummary: 'Internal reorganization and political currents are active. Solo action is vulnerable; forge durable lateral alliances.',
        stepsZh: [
          '梳理跨部门核心赞助人与关键节点伙伴，建立非正式定期沟通管道',
          '在资源分配上主动向协同方释放边际利益，换取关键投票权与信息源',
          '对直属上级采取“紧密汇报、不抢风头”的护航策略，避开暗中清算风头'
        ],
        stepsEn: [
          'Map key organizational sponsors and establish recurring informal communication channels.',
          'Concede marginal advantages to cross-functional partners to secure critical coalition support.',
          'Adopt an indispensable stewardship stance toward direct supervisors while staying out of factional crosshairs.'
        ],
        riskZh: '切忌卷入多方公开站队，保持多源信息节点但对外定调始终以业务大局为名。',
        riskEn: 'Refrain from overt partisan alignments; anchor all diplomatic positioning strictly on objective business objectives.'
      },
      consolidation: {
        zhTitle: '沉潜深耕 · 暗渡陈仓',
        enTitle: 'Subterranean Mastery · Capability Moat Compounding',
        zhSummary: '外界气数存在不确定阻力，盲目冲锋易损元神，宜战略收敛、专精打磨独门护城河。',
        enSummary: 'External friction is elevated. Preserve operational capital and quietly compound scarce technical capabilities.',
        stepsZh: [
          '收缩非核心杂务精力，将80%注意力聚焦于单点不可替代的专业技能攻坚',
          '梳理标准化交付文档与数据资产，形成即使离职他人亦难以复刻的体系',
          '对外部争议保持钝感力与战略静默，不争一时口舌，静待时移世易'
        ],
        stepsEn: [
          'Divest from low-leverage peripheral tasks and focus 80% of energy on rare specialist mastery.',
          'Build standardized documentation and proprietary assets that cannot easily be replicated.',
          'Maintain strategic silence amidst organizational noise and let your compounded deliverables speak.'
        ],
        riskZh: '警惕陷入完全自闭，仍需保持对外部关键考核指标的达标交付。',
        riskEn: 'Ensure critical baseline KPI compliance so your quiet focus is never misconstrued as disengagement.'
      },
      defense: {
        zhTitle: '筑壁防守 · 留痕避险',
        enTitle: 'Defensive Containment · Liability Hedging & Boundary Fortification',
        zhSummary: '当前隐状态承压沉重或存在外部问责甩锅风险，首要原则是止血防守、滴水不漏。',
        enSummary: 'Hostile friction and accountability risks are elevated. Prioritize liability minimization and airtight procedural discipline.',
        stepsZh: [
          '凡重大决策与流程变动一律采用结构化邮件或工作群书面留痕，坚决不背口头承诺',
          '严守法定工作边界与职责红线，对界限模糊的高风险烂摊子坚决推脱或设置对冲前提',
          '储备6-12个月应急现金流，做好最坏情况下从容退场的心理与物质防线'
        ],
        stepsEn: [
          'Enforce strict written documentation across all decisions; accept zero ambiguous verbal handoffs.',
          'Maintain rigid professional boundaries and decline unchartered high-risk obligations without written mandates.',
          'Secure 6-12 months of liquid financial runway to preserve complete psychological autonomy.'
        ],
        riskZh: '防守不等于消极对抗，态度上需保持客气专业，让对手无处下嘴。',
        riskEn: 'Defensive posture must remain impeccably polite and professional to deny adversaries any procedural pretext.'
      },
      leap: {
        zhTitle: '顺势跃迁 · 金蝉脱壳',
        enTitle: 'Strategic Leap · Career Vector Transition',
        zhSummary: '原局生态位已达边际收益天花板或组织存量枯竭，外部换轨窗口处于高动能期，宜果断跳出存量内卷，执行保密换轨跃迁。',
        enSummary: 'Current organizational platform has hit diminishing marginal returns. The external transition window is optimal; execute a confidential career vector pivot to escape negative-sum friction.',
        stepsZh: [
          '【成果脱敏封存】将过去18个月主导项目提炼为量化ROI白皮书（技术架构/产值贡献），仅使用个人非公司设备与私人网络更新履历，定向触达2~3家头部猎头，严禁求职软件开启公开看机会。',
          '【盟友背调预埋】私下锁定原单位1~2位非直属的高信誉合作方或已离职领导达成背调默契；在职工作维持80分基准交付，绝不主动承接跨越下半年的长周期烂摊子，平稳收缩存量职责。',
          '【三证锁死切换】必须以「加盖公章且无保留条件的正式聘用书 + 薪酬期权架构书面确认 + 第三方合规背调圆满通过」三重要件齐全为唯一换轨动能点，坚决不凭口头许诺提前离场。'
        ],
        stepsEn: [
          '[Sanitized Portfolio Packaging] Synthesize the past 18 months of deliverables into an anonymized ROI dossier using private devices and personal networks only; discreetly engage top-tier headhunters while keeping public job profiles strictly private.',
          '[Pre-emptive Reference Alignment] Quietly align backchannel references with 1-2 reputable former supervisors or cross-functional peers; maintain an 80% baseline delivery on current KPIs while politely declining multi-quarter legacy commitments.',
          '[Triple-Condition Lockdown] Transition only when all three gates clear: a formally stamped written offer, fully verified compensation/equity schedules, and successfully completed third-party background checks—never act on verbal promises.'
        ],
        riskZh: '【绝密隔离红线】严禁在办公内网、企业通讯工具留存跳槽沟通记录；离职前30天严控敏感文档与批量代码导出，谨防竞业限制借题发挥与恶意扣发离职证明。',
        riskEn: 'Maintain strict information hygiene: zero job-search footprints on corporate networks or devices. Avoid mass file downloads in the final 30 days to preempt non-compete harassment or bad-faith severance disputes.'
      }
    };

    const curState = stateMeta[state] || stateMeta.expansion;
    const curAction = actionMeta[action] || actionMeta.consolidation;

    return {
      stateTitle: isEn ? curState.enTitle : curState.zhTitle,
      stateTag: isEn ? curState.enTag : curState.zhTag,
      stateColor: curState.color,
      actionTitle: isEn ? curAction.enTitle : curAction.zhTitle,
      actionSummary: isEn ? curAction.enSummary : curAction.zhSummary,
      actionSteps: isEn ? curAction.stepsEn : curAction.stepsZh,
      riskMitigation: isEn ? curAction.riskEn : curAction.riskZh
    };
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PomdpEngine };
}
if (typeof window !== 'undefined') {
  window.PomdpEngine = PomdpEngine;
}
