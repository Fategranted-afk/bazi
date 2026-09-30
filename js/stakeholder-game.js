/**
 * 钦天监 · 组织博弈与多利益相关方敏感性沙盘
 * (Phase 8.1: Multi-Stakeholder Governance & Evolutionary Game Sandbox)
 *
 * Models governance dynamics among founders, investors, and core operators
 * without unscientific fatalism. Quantifies Governance Friction Index (GFI),
 * identifies contractual rupture thresholds, and proposes legal de-escalation safeguards.
 *
 * 100% Offline, Zero Network Calls, Zero PII Leakage.
 */

(function (global) {
  'use strict';

  class StakeholderGameEngine {
    /**
     * Default stakeholder templates for rapid setup
     */
    static getArchetypeTemplates(lang = 'zh') {
      const isZh = lang === 'zh';
      return [
        {
          id: 'founder_lead',
          name: isZh ? '主要创始人 (CEO)' : 'Lead Founder (CEO)',
          archetype: 'ShāngGuān_BiJian',
          archetypeName: isZh ? '开拓主权型 (食伤/比肩)' : 'Sovereign Pioneer (Output/Self)',
          equityPct: 51,
          boardSeats: 2,
          riskTolerance: 'high',
          corePriorities: isZh ? ['战略决策主权', '产品愿景把控', '长期股权价值'] : ['Decision Autonomy', 'Product Vision Control', 'Long-term Equity Value'],
          stressReaction: isZh ? '强化控制权，抗拒外部干涉' : 'Tighten control, resist outside interference'
        },
        {
          id: 'co_founder_tech',
          name: isZh ? '技术合伙人 (CTO)' : 'Technical Co-founder (CTO)',
          archetype: 'YinShou_ZhengGuan',
          archetypeName: isZh ? '沉淀自研型 (正印/正官)' : 'R&D Steward (Resource/Officer)',
          equityPct: 24,
          boardSeats: 1,
          riskTolerance: 'medium',
          corePriorities: isZh ? ['技术底座自主', '团队研发节奏', '竞业与知识产权归属'] : ['Tech Stack Autonomy', 'R&D Cadence', 'IP & Non-Compete Safeguards'],
          stressReaction: isZh ? '退守核心代码，反对激进商业化' : 'Retrench into code base, resist rushed commercialization'
        },
        {
          id: 'lead_investor',
          name: isZh ? '领投财务机构 (VC)' : 'Lead Institutional Investor (VC)',
          archetype: 'QiSha_PianCai',
          archetypeName: isZh ? '资本对赌型 (七杀/偏财)' : 'Capital Disruption (Power/Wealth)',
          equityPct: 20,
          boardSeats: 1,
          riskTolerance: 'low_downside',
          corePriorities: isZh ? ['清算优先权 (1.5x)', '年度业绩对赌回购', '一票否决权'] : ['Liquidation Preference (1.5x)', 'Annual Valuation Ratchet', 'Veto Rights'],
          stressReaction: isZh ? '启动清算或要求对赌回购' : 'Trigger redemption or liquidation ratchet'
        },
        {
          id: 'esop_pool',
          name: isZh ? '期权激励池 (ESOP)' : 'Employee Stock Option Pool (ESOP)',
          archetype: 'ZhengCai_BiJian',
          archetypeName: isZh ? '团队激励型 (正财/比肩)' : 'Team Retention (Direct Wealth)',
          equityPct: 5,
          boardSeats: 0,
          riskTolerance: 'medium',
          corePriorities: isZh ? ['行权兑现通道', '公平稀释保护', '退出分红权'] : ['Vesting Liquidity', 'Anti-Dilution Guard', 'Dividend Rights'],
          stressReaction: isZh ? '核心骨干流失风险上升' : 'Elevated key employee attrition'
        }
      ];
    }

    /**
     * Evaluates governance friction and phase shift vulnerability
     *
     * @param {Object} params
     * @param {Array} params.stakeholders - List of stakeholder objects
     * @param {Object} params.shock - Shock parameters { revenueDeclinePct, cashRunwayMonths, valuationDownPct }
     * @param {Object} params.operatingState - { monthlyBurn, currentCash, headcount }
     * @param {string} params.lang - 'zh' | 'en'
     */
    static simulateGovernance(params = {}) {
      const lang = params.lang === 'en' ? 'en' : 'zh';
      const isZh = lang === 'zh';

      const stakeholders = Array.isArray(params.stakeholders) && params.stakeholders.length > 0
        ? params.stakeholders
        : this.getArchetypeTemplates(lang);

      const shock = Object.assign({
        revenueDeclinePct: 35,
        cashRunwayMonths: 5,
        valuationDownPct: 30
      }, params.shock || {});

      const operatingState = Object.assign({
        monthlyBurn: 60000,
        currentCash: 300000,
        headcount: 12
      }, params.operatingState || {});

      // 1. Calculate equity and voting balance
      let totalEquity = 0;
      let totalBoardSeats = 0;
      stakeholders.forEach(s => {
        totalEquity += Number(s.equityPct || 0);
        totalBoardSeats += Number(s.boardSeats || 0);
      });

      // 2. Identify bilateral friction interactions
      const frictionMatrix = [];
      let rawFrictionScore = 0;

      for (let i = 0; i < stakeholders.length; i++) {
        for (let j = i + 1; j < stakeholders.length; j++) {
          const s1 = stakeholders[i];
          const s2 = stakeholders[j];
          const interaction = this._evaluateDyadFriction(s1, s2, shock, lang);
          if (interaction) {
            frictionMatrix.push(interaction);
            rawFrictionScore += interaction.weight;
          }
        }
      }

      // 3. Shock multiplier based on cash runway
      let runwayStressFactor = 1.0;
      if (shock.cashRunwayMonths <= 3) {
        runwayStressFactor = 1.8;
      } else if (shock.cashRunwayMonths <= 6) {
        runwayStressFactor = 1.4;
      } else if (shock.cashRunwayMonths <= 12) {
        runwayStressFactor = 1.1;
      } else {
        runwayStressFactor = 0.8;
      }

      const gfi = Math.min(100, Math.round(rawFrictionScore * runwayStressFactor));

      let frictionTier = 'Low';
      let frictionTierLabel = isZh ? '低阻抗稳定态' : 'Low Friction Stable State';
      if (gfi >= 75) {
        frictionTier = 'Critical';
        frictionTierLabel = isZh ? '极度危险相变区 (破裂临界)' : 'Critical Phase Shift Zone';
      } else if (gfi >= 50) {
        frictionTier = 'High';
        frictionTierLabel = isZh ? '高阻抗相持区' : 'High Friction Standoff';
      } else if (gfi >= 25) {
        frictionTier = 'Moderate';
        frictionTierLabel = isZh ? '中度协同摩擦' : 'Moderate Dynamic Friction';
      }

      // 4. Phase Shift Vulnerability Detection
      const isPhaseShiftImminent = (shock.cashRunwayMonths < 6 && gfi >= 50) || (gfi >= 75);

      // 5. Synthesize Rupture Points & Contractual Safeguards
      const rupturePoints = this._detectRupturePoints(stakeholders, shock, gfi, lang);
      const recommendedSafeguards = this._generateContractualSafeguards(stakeholders, shock, gfi, lang);

      return {
        governanceFrictionIndex: gfi,
        frictionTier: frictionTier,
        frictionTierLabel: frictionTierLabel,
        isPhaseShiftImminent: isPhaseShiftImminent,
        cashRunwayMonths: shock.cashRunwayMonths,
        totalEquityAccounted: totalEquity,
        totalBoardSeats: totalBoardSeats,
        frictionMatrix: frictionMatrix,
        rupturePoints: rupturePoints,
        recommendedSafeguards: recommendedSafeguards,
        auditSummary: this._generateAuditSummary(gfi, shock, isPhaseShiftImminent, lang),
        disclaimer: isZh
          ? '【合规声明】本博弈沙盘基于有限理性与契约利益相关模型演算，旨在辅助团队防范治理风险与建立仲裁防火墙，严禁作为任何单方恶意违约或侵权手段。'
          : '[Compliance Notice] This sandbox models bounded rationality and contractual stakeholder interests to mitigate governance friction. It does not provide legal guarantees.'
      };
    }

    static _evaluateDyadFriction(s1, s2, shock, lang) {
      const isZh = lang === 'zh';
      const key = [s1.id, s2.id].sort().join('__');

      // Founder vs Investor
      if (key.includes('investor') && (key.includes('founder') || key.includes('ceo'))) {
        const severity = shock.revenueDeclinePct > 30 ? 'high' : 'medium';
        return {
          parties: [s1.name, s2.name],
          dyadKey: 'founder_investor_ratchet',
          title: isZh ? '回购对赌与估值下调冲突' : 'Redemption Ratchet vs Control Conflict',
          description: isZh
            ? `当营收下滑达到 ${shock.revenueDeclinePct}% 时，投资方保护性对赌条款与创始人控制权形成直接冲突。`
            : `When revenue drops by ${shock.revenueDeclinePct}%, investor downside protection clauses clash directly with founder control.`,
          weight: severity === 'high' ? 32 : 18,
          mitigation: isZh ? '设立阶梯式估值调整上限与可转债平滑机制' : 'Introduce tiered valuation ratchet caps and convertible note smoothing'
        };
      }

      // Founder vs Tech Co-founder
      if (key.includes('tech') && (key.includes('founder') || key.includes('ceo'))) {
        return {
          parties: [s1.name, s2.name],
          dyadKey: 'commercial_vs_technical_depth',
          title: isZh ? '商业变现节奏与研发自主权拉锯' : 'Commercialization Pace vs R&D Cadence',
          description: isZh
            ? '现金流收紧时，商业端迫切要求裁员或砍研发，技术端倾向守护底层架构完整性。'
            : 'When cash tightens, business drivers demand R&D cuts while technical leads defend core architecture integrity.',
          weight: shock.cashRunwayMonths < 6 ? 24 : 12,
          mitigation: isZh ? '确立敏捷最小可行交付线，明确技术债务还款期' : 'Define agile minimum viable delivery milestone with explicit tech debt timeline'
        };
      }

      // Co-founders vs ESOP / Key Execs
      if (key.includes('esop') || key.includes('exec')) {
        return {
          parties: [s1.name, s2.name],
          dyadKey: 'retention_dilution_concern',
          title: isZh ? '期权兑现预期与稀释焦虑' : 'Option Vesting Expectation & Dilution Anxiety',
          description: isZh
            ? '外部估值折价重组时，核心团队期权价值承压，易出现骨干流失风险。'
            : 'During down-round restructuring, option pool incentives compress, heightening key personnel turnover risk.',
          weight: 12,
          mitigation: isZh ? '设立加速行权与业绩阶梯再充水激励计划 (Option Refresh)' : 'Implement milestone-based option refresh and accelerated vesting'
        };
      }

      return null;
    }

    static _detectRupturePoints(stakeholders, shock, gfi, lang) {
      const isZh = lang === 'zh';
      const points = [];

      if (shock.cashRunwayMonths <= 4) {
        points.push({
          trigger: isZh ? '安全跑道跌破 4 个月' : 'Cash Runway Below 4 Months',
          ruptureMechanism: isZh ? '董事会一票否决权激活，现金流清盘动议触发' : 'Board Veto Activation & Liquidation Motion Risk',
          consequence: isZh ? '创始人可能丧失经营主导权，被迫签署恶性对赌' : 'Founders risk losing executive control or facing punitive ratchets',
          urgency: 'CRITICAL'
        });
      }

      if (gfi >= 50) {
        points.push({
          trigger: isZh ? '治理阻抗指数 (GFI) 超过 50' : 'Governance Friction Index Exceeds 50',
          ruptureMechanism: isZh ? '多头指挥与信任赤字产生决策空转' : 'Multi-head command structure causing organizational deadlock',
          consequence: isZh ? '高管在重大合规与业务方向上互相推诿，延误自救窗口' : 'Executive impasse delaying crucial pivot or refinancing window',
          urgency: 'HIGH'
        });
      }

      if (shock.revenueDeclinePct >= 40) {
        points.push({
          trigger: isZh ? `业绩偏离度达 -${shock.revenueDeclinePct}%` : `Revenue Shortfall Reaches -${shock.revenueDeclinePct}%`,
          ruptureMechanism: isZh ? '早期投资协议中的连带回购义务被敲响' : 'Joint-and-several founder redemption obligations triggered',
          consequence: isZh ? '创始人个人无限连带责任暴露' : 'Exposure of founder personal liability under joint guarantees',
          urgency: 'HIGH'
        });
      }

      return points;
    }

    static _generateContractualSafeguards(stakeholders, shock, gfi, lang) {
      const isZh = lang === 'zh';
      return [
        {
          clauseName: isZh ? '独立第三方仲裁与调解隔离条款' : 'Independent Neutral Arbitration & Mediation Buffer',
          category: isZh ? '治理机制' : 'Governance Mechanism',
          specification: isZh
            ? '当董事会表决产生 50:50 僵局连续超 14 天时，强制移交指定行业仲裁专家进行非诉和解，避免直接司法诉讼冻结账户。'
            : 'If board voting is deadlocked for over 14 days, mandatory mediation by an agreed industry arbitrator is triggered prior to litigation.',
          urgency: gfi >= 50 ? 'IMMEDIATE' : 'RECOMMENDED'
        },
        {
          clauseName: isZh ? '创始人个人无限连带责任豁免与封顶' : 'Founder Personal Liability Cap & Safe Harbor',
          category: isZh ? '风险对冲' : 'Risk Hedging',
          specification: isZh
            ? '在股权投资协议中将回购责任限制在公司自有可用净资产范围内，严格排除创始人家庭个人财产作为连带清偿责任标的。'
            : 'Limit company repurchase liabilities strictly to unencumbered corporate liquid assets, explicitly excluding personal and marital assets.',
          urgency: 'MANDATORY'
        },
        {
          clauseName: isZh ? '动态股权成熟与反恶意退伙锁定期' : 'Dynamic Vesting Schedule & Bad-Leaver Safeguard',
          category: isZh ? '合伙人机制' : 'Partnership Architecture',
          specification: isZh
            ? '确立 4 年成熟期 (1 年悬崖期)，离职合伙人未成熟股权按账面净资产由公司回购，避免离职股东占有大量干股锁死融资。'
            : 'Enforce 4-year vesting with a 1-year cliff. Unvested shares are repurchased at book value upon departure to preserve the cap table.',
          urgency: 'HIGH'
        },
        {
          clauseName: isZh ? '关键骨干期权池重充水 (Option Refresh Scheme)' : 'Option Pool Refresh & Retention Incentive',
          category: isZh ? '团队激励' : 'Team Incentivization',
          specification: isZh
            ? '在下行调整期按经调整估值向一线技术与业务中坚追加授予绩效奖励期权，防止核心团队被外部挖角。'
            : 'Issue performance-based option refreshes at adjusted valuation to lock in critical technical and operational talent.',
          urgency: shock.cashRunwayMonths < 6 ? 'HIGH' : 'MEDIUM'
        }
      ];
    }

    static _generateAuditSummary(gfi, shock, isPhaseShift, lang) {
      const isZh = lang === 'zh';
      if (isZh) {
        return `当前多利益相关方博弈审计测算治理阻抗指数 (GFI) 为 ${gfi}/100。` +
          `在现金跑道剩余 ${shock.cashRunwayMonths} 个月与业绩下挫 ${shock.revenueDeclinePct}% 的应激冲击下，` +
          (isPhaseShift
            ? '组织系统处于高危相变区，需立即激活仲裁隔离与协议清查！'
            : '组织协同处于可控容忍区间，建议按期完善合伙人协议与退出保护条款。');
      } else {
        return `Multi-stakeholder simulation indicates Governance Friction Index (GFI) of ${gfi}/100. ` +
          `Under ${shock.cashRunwayMonths} months of cash runway and a -${shock.revenueDeclinePct}% performance shock, ` +
          (isPhaseShift
            ? 'the organization is in a critical phase-shift zone; immediate legal safeguards and arbitration buffers required.'
            : 'the organization remains in a manageable friction corridor; continue reinforcing vesting and exit protections.');
      }
    }
  }

  // Universal export
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { StakeholderGameEngine };
  }
  if (typeof window !== 'undefined') {
    window.StakeholderGameEngine = StakeholderGameEngine;
  }
  if (typeof globalThis !== 'undefined') {
    globalThis.StakeholderGameEngine = StakeholderGameEngine;
  }
})(typeof globalThis !== 'undefined' ? globalThis : this);
