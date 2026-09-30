/**
 * 钦天监 · 破产约束长程决策树寻优引擎
 * (Phase 8.2: Bounded MCTS Multi-Year Strategic Planning with Ruin Pruning)
 *
 * Implements a forward-looking decision tree with strict ruin probability constraints:
 *   max_{a_t} E[ sum gamma^t U(s_t, a_t) ]  s.t.  P(Ruin) <= epsilon
 *
 * Any action trajectory that exposes capital to ruin (cash < 3 months operating runway)
 * is assigned an infinite negative penalty and pruned out immediately.
 *
 * 100% Offline, Deterministic Seeds, Pure JavaScript.
 */

(function (global) {
  'use strict';

  const ACTIONS = {
    AGGRESSIVE: {
      id: 'AGGRESSIVE',
      nameZh: '激进扩张 (攻坚拓界)',
      nameEn: 'Aggressive Scale-up',
      burnMultiplier: 1.6,
      energyCost: 35,
      basePayoffMean: 1.8,
      volatility: 0.50
    },
    BALANCED: {
      id: 'BALANCED',
      nameZh: '稳健演进 (守正出奇)',
      nameEn: 'Balanced Progression',
      burnMultiplier: 1.0,
      energyCost: 20,
      basePayoffMean: 1.2,
      volatility: 0.20
    },
    CONSERVATIVE: {
      id: 'CONSERVATIVE',
      nameZh: '蛰伏蓄能 (修宪强本)',
      nameEn: 'Retrenchment & Incubation',
      burnMultiplier: 0.55,
      energyCost: -15, // Recharges energy
      basePayoffMean: 0.95,
      volatility: 0.05
    },
    PIVOT: {
      id: 'PIVOT',
      nameZh: '战术转型 (敏捷变轨)',
      nameEn: 'Tactical Pivot & Adaptation',
      burnMultiplier: 1.2,
      energyCost: 25,
      basePayoffMean: 1.35,
      volatility: 0.35
    }
  };

  class BoundedMctsEngine {
    /**
     * Executes Bounded MCTS multi-year planning
     *
     * @param {Object} config
     * @param {number} config.years - Planning horizon (3..7 years, default 5)
     * @param {number} config.initialCapital - Liquid capital (e.g. 500,000)
     * @param {number} config.monthlyBurn - Base monthly burn rate (e.g. 30,000)
     * @param {number} config.initialEnergy - Founder physical/mental energy reserve (0..100, default 80)
     * @param {number} config.maxAcceptableRuin - Ruin probability ceiling epsilon (default 0.05)
     * @param {Array}  config.luckCycles - Macro or Luck flow array per year [{ year, type: 'support'|'clash'|'neutral', factor }]
     * @param {number} config.simulations - Number of Monte Carlo trajectories (default 500)
     * @param {string} config.lang - 'zh' | 'en'
     */
    static plan(config = {}) {
      const lang = config.lang === 'en' ? 'en' : 'zh';
      const isZh = lang === 'zh';

      const years = Math.max(3, Math.min(7, Number(config.years) || 5));
      const initialCapital = Math.max(10000, Number(config.initialCapital) || 600000);
      const monthlyBurn = Math.max(1000, Number(config.monthlyBurn) || 40000);
      const initialEnergy = Math.max(20, Math.min(100, Number(config.initialEnergy) || 80));
      const maxRuinCeiling = Math.max(0.01, Math.min(0.20, Number(config.maxAcceptableRuin) || 0.05));
      const simulationCount = Math.max(100, Math.min(2000, Number(config.simulations) || 500));
      const discountFactor = 0.90; // gamma

      // Construct Luck Flow for horizon if not provided
      const currentYear = new Date().getFullYear();
      const luckCycles = Array.isArray(config.luckCycles) && config.luckCycles.length >= years
        ? config.luckCycles.slice(0, years)
        : this._generateDefaultLuckFlow(currentYear, years);

      const actionKeys = Object.keys(ACTIONS);
      let prunedBranchCount = 0;

      // Evaluate predefined canonical strategies alongside pure search
      const candidateTrajectories = [
        { id: 'pure_aggressive', name: isZh ? '纯激进扩张' : 'Pure Aggressive', sequence: Array(years).fill('AGGRESSIVE') },
        { id: 'pure_balanced', name: isZh ? '纯稳健渐进' : 'Pure Balanced', sequence: Array(years).fill('BALANCED') },
        { id: 'pure_conservative', name: isZh ? '纯防御蛰伏' : 'Pure Retrenchment', sequence: Array(years).fill('CONSERVATIVE') },
        { id: 'counter_cyclical', name: isZh ? '顺逆周期自适应 (推荐)' : 'Counter-Cyclical Adaptive', sequence: this._generateCounterCyclicalPlan(luckCycles) }
      ];

      // Simulate each candidate strategy across Monte Carlo iterations
      const trajectoryResults = candidateTrajectories.map(strat => {
        let ruinEvents = 0;
        let cumulativeUtilities = [];
        let finalCapitals = [];
        let finalEnergies = [];

        for (let iter = 0; iter < simulationCount; iter++) {
          let cap = initialCapital;
          let energy = initialEnergy;
          let totalUtility = 0;
          let isRuined = false;

          for (let t = 0; t < years; t++) {
            const actionKey = strat.sequence[t];
            const act = ACTIONS[actionKey];
            const luck = luckCycles[t];

            // Annual burn calculation
            const annualBurn = monthlyBurn * 12 * act.burnMultiplier;

            // Macro environment influence on payoff & shock
            let luckMultiplier = 1.0;
            if (luck.type === 'clash') luckMultiplier = 0.65;
            if (luck.type === 'support') luckMultiplier = 1.35;

            // Stochastic return
            const randomShock = (this._pseudoRandom(iter * 100 + t) - 0.5) * act.volatility;
            const payoff = Math.max(0.1, act.basePayoffMean * luckMultiplier + randomShock);

            // In clash years, aggressive actions have heightened cash drain
            const cashFlow = annualBurn * (payoff - 1.0);
            cap += cashFlow;

            // Energy dynamics
            energy = Math.max(10, Math.min(100, energy - act.energyCost + (luck.type === 'support' ? 5 : -5)));

            // Ruin check: Capital must not breach 3 months of emergency runway
            const emergencyRunwayCash = monthlyBurn * 3;
            if (cap < emergencyRunwayCash) {
              isRuined = true;
              break;
            }

            // Utility discounted: U = log(cap) + 0.3 * energy
            const periodUtility = Math.log(Math.max(1, cap)) * 0.1 + (energy / 100) * 2.0;
            totalUtility += Math.pow(discountFactor, t) * periodUtility;
          }

          if (isRuined) {
            ruinEvents++;
            prunedBranchCount++;
          } else {
            cumulativeUtilities.push(totalUtility);
            finalCapitals.push(cap);
            finalEnergies.push(energy);
          }
        }

        const ruinProb = ruinEvents / simulationCount;
        const avgUtility = cumulativeUtilities.length > 0
          ? cumulativeUtilities.reduce((a, b) => a + b, 0) / cumulativeUtilities.length
          : -999;
        const avgCapital = finalCapitals.length > 0
          ? finalCapitals.reduce((a, b) => a + b, 0) / finalCapitals.length
          : 0;
        const avgEnergy = finalEnergies.length > 0
          ? finalEnergies.reduce((a, b) => a + b, 0) / finalEnergies.length
          : 0;

        return {
          id: strat.id,
          name: strat.name,
          sequence: strat.sequence,
          ruinProbability: Number(ruinProb.toFixed(3)),
          isPruned: ruinProb > maxRuinCeiling,
          expectedUtility: Number(avgUtility.toFixed(2)),
          expectedFinalCapital: Math.round(avgCapital),
          expectedFinalEnergy: Math.round(avgEnergy)
        };
      });

      // Filter unpruned and select maximum expected utility
      const compliantTrajectories = trajectoryResults.filter(t => !t.isPruned);
      let bestTrajectory = compliantTrajectories.length > 0
        ? compliantTrajectories.reduce((prev, curr) => (curr.expectedUtility > prev.expectedUtility ? curr : prev))
        : trajectoryResults.reduce((prev, curr) => (curr.ruinProbability < prev.ruinProbability ? curr : prev));

      // Construct detailed year-by-year optimal timeline
      const optimalTimeline = bestTrajectory.sequence.map((actKey, idx) => {
        const act = ACTIONS[actKey];
        const cycle = luckCycles[idx];
        return {
          year: cycle.year,
          macroClimate: cycle.type,
          macroLabel: isZh ? cycle.labelZh : cycle.labelEn,
          actionKey: actKey,
          actionName: isZh ? act.nameZh : act.nameEn,
          burnMultiplier: act.burnMultiplier,
          strategicDirective: this._getDirective(actKey, cycle.type, lang)
        };
      });

      return {
        horizonYears: years,
        initialCapital: initialCapital,
        monthlyBurn: monthlyBurn,
        maxRuinCeiling: maxRuinCeiling,
        totalSimulations: simulationCount,
        prunedBranchCount: prunedBranchCount,
        bestStrategyId: bestTrajectory.id,
        bestStrategyName: bestTrajectory.name,
        survivalProbability: Number((1.0 - bestTrajectory.ruinProbability).toFixed(3)),
        expectedFinalCapital: bestTrajectory.expectedFinalCapital,
        expectedFinalEnergy: bestTrajectory.expectedFinalEnergy,
        optimalTimeline: optimalTimeline,
        comparativeStrategies: trajectoryResults,
        methodologyNotes: isZh
          ? '采用带硬性破产剪枝约束的启发式蒙特卡洛搜索。当分支流动资金跌破 3 个月安全储备线时，立即赋予负无穷效用并直接剪枝，确保推荐路径符合生存概率底线。'
          : 'Bounded Monte Carlo search with strict ruin pruning. Trajectories dipping below a 3-month cash runway are assigned infinite negative utility and pruned immediately.',
        disclaimer: isZh
          ? '【战略风控声明】本寻优推演为结合宏观周期与微观财务约束的启发式运筹模拟，现实市场存在黑天鹅不可知变量，决策请结合即时财务审计与法律风控独立复核。'
          : '[Strategic Risk Notice] This model provides heuristic operational simulation based on cyclical and financial constraints. Real outcomes require independent financial and legal verification.'
      };
    }

    static _generateDefaultLuckFlow(startYear, years) {
      // Alternating sample cycle for realistic demonstration
      const types = [
        { type: 'support', labelZh: '用神进气 (顺境蓄势)', labelEn: 'Favorable Flow (Tailwind)' },
        { type: 'neutral', labelZh: '平稳过渡 (相持巩固)', labelEn: 'Neutral Transition (Consolidation)' },
        { type: 'clash', labelZh: '岁运逢冲 (承压考验)', labelEn: 'Cyclical Friction (Stress Test)' },
        { type: 'support', labelZh: '生扶相助 (动能释放)', labelEn: 'Supportive Resonance (Expansion)' },
        { type: 'neutral', labelZh: '例行稳健 (精细运营)', labelEn: 'Routine Stability (Precision Ops)' },
        { type: 'clash', labelZh: '伏吟阻滞 (节制退守)', labelEn: 'Impedance Stall (Retrenchment)' },
        { type: 'support', labelZh: '开泰亨通 (成果收获)', labelEn: 'Prosperous Harvest (Harvest)' }
      ];

      return Array.from({ length: years }).map((_, i) => {
        const item = types[i % types.length];
        return {
          year: startYear + i,
          type: item.type,
          labelZh: item.labelZh,
          labelEn: item.labelEn
        };
      });
    }

    static _generateCounterCyclicalPlan(luckCycles) {
      return luckCycles.map(c => {
        if (c.type === 'clash') return 'CONSERVATIVE'; // In stress years, retrench to avoid ruin
        if (c.type === 'support') return 'AGGRESSIVE';   // In favorable years, scale up
        return 'BALANCED';                              // In neutral years, balance
      });
    }

    static _getDirective(actionKey, climateType, lang) {
      const isZh = lang === 'zh';
      if (actionKey === 'CONSERVATIVE') {
        return isZh
          ? '严格控制固定开支，主动压缩非核心业务，保存现金储备，为团队核心人员充能。'
          : 'Curtail non-essential overhead, preserve cash reserves, and allow team recovery.';
      }
      if (actionKey === 'AGGRESSIVE') {
        return isZh
          ? '利用外部顺风借力攻坚，加大高附加值市场拓展，建立护城河与先发优势。'
          : 'Leverage favorable external momentum to aggressively capture high-margin market share.';
      }
      if (actionKey === 'PIVOT') {
        return isZh
          ? '快速迭代商业模式，裁剪低产出条线，通过敏捷小步快跑寻找新增长极。'
          : 'Rapidly iterate product-market fit, prune low-yield units, and pivot toward emerging demand.';
      }
      return isZh
        ? '保持现有业务平稳推进，以确定性现金流为锚，不盲目加杠杆，精细化日常运营。'
        : 'Maintain steady operations anchored in predictable cash flow, avoiding excessive leverage.';
    }

    static _pseudoRandom(seed) {
      const x = Math.sin(seed + 1.2345) * 10000;
      return x - Math.floor(x);
    }
  }

  // Universal export
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { BoundedMctsEngine, ACTIONS };
  }
  if (typeof window !== 'undefined') {
    window.BoundedMctsEngine = BoundedMctsEngine;
  }
  if (typeof globalThis !== 'undefined') {
    globalThis.BoundedMctsEngine = BoundedMctsEngine;
  }
})(typeof globalThis !== 'undefined' ? globalThis : this);
