/**
 * 钦天监 · 组织认知多样性与盲区审计引擎
 * (Phase 8.4: Team Cognitive Diversity & Blind Spot Governance Engine)
 *
 * Quantifies leadership team cognitive diversity across 4 core organizational vectors:
 * 1. Strategic Pioneering (食神/伤官/七杀 - Innovation & Disruption)
 * 2. Institutional Governance (正官/正印 - Compliance, Process & Risk Control)
 * 3. Commercial Execution (正财/偏财 - Market Traction & Capital Efficiency)
 * 4. Grounded Delivery (比肩/劫财 - Operational Grit & Team Mobilization)
 *
 * Evaluates Shannon Cognitive Entropy (0..1) and flags collective blind spots.
 *
 * STRICT ETHICAL & LABOR COMPLIANCE:
 * Prohibited from being used for hiring screening, employee termination, or any
 * discriminatory employment decisions under applicable labor laws.
 *
 * 100% Offline, Zero PII Cloud Transmission.
 */

(function (global) {
  'use strict';

  const ARCHETYPES = {
    PIONEER: {
      id: 'PIONEER',
      nameZh: '战略开拓 (食伤/七杀)',
      nameEn: 'Strategic Pioneer (Output / Challenger)',
      vector: 'innovation',
      descriptionZh: '破局探索、敏锐洞察外部先机、擅长从零到一破界。',
      descriptionEn: 'Disruptive innovation, market vision, and 0-to-1 opportunity capture.'
    },
    GOVERNOR: {
      id: 'GOVERNOR',
      nameZh: '合规治理 (正官/印绶)',
      nameEn: 'Institutional Governor (Officer / Resource)',
      vector: 'governance',
      descriptionZh: '建章立制、守正防风控、守护组织信誉与合法合规底线。',
      descriptionEn: 'Process engineering, risk hedging, and corporate governance stewardship.'
    },
    GROWTH: {
      id: 'GROWTH',
      nameZh: '资本商业 (正财/偏财)',
      nameEn: 'Commercial Driver (Wealth / Market)',
      vector: 'commercial',
      descriptionZh: '现金流敏感、商业变现与资源整合、强调投入产出比。',
      descriptionEn: 'Cash flow sensitivity, monetization traction, and capital allocation.'
    },
    OPERATOR: {
      id: 'OPERATOR',
      nameZh: '组织协同 (比肩/劫财)',
      nameEn: 'Operational Mobilizer (Self / Companion)',
      vector: 'operations',
      descriptionZh: '团队凝聚、攻坚执行、协同拉通落地、抵御外部动荡。',
      descriptionEn: 'Team mobilization, disciplined execution, and operational resiliency.'
    }
  };

  class TeamDiversityEngine {
    /**
     * Default executive archetype roster for quick audit demo
     */
    static getDefaultExecutiveRoster(lang = 'zh') {
      const isZh = lang === 'zh';
      return [
        {
          id: 'exec_1',
          name: isZh ? '创始人 / 首席战略官' : 'Founder / CSO',
          primaryArchetype: 'PIONEER',
          tenGodProfile: isZh ? '伤官佩印' : 'Output with Resource',
          weight: 1.0
        },
        {
          id: 'exec_2',
          name: isZh ? '技术副总裁 / CTO' : 'VP Technology / CTO',
          primaryArchetype: 'GOVERNOR',
          tenGodProfile: isZh ? '正官正印' : 'Direct Officer & Direct Resource',
          weight: 1.0
        },
        {
          id: 'exec_3',
          name: isZh ? '商业化负责人 / CBO' : 'Commercial Lead / CBO',
          primaryArchetype: 'GROWTH',
          tenGodProfile: isZh ? '偏财生官' : 'Indirect Wealth with Officer',
          weight: 1.0
        },
        {
          id: 'exec_4',
          name: isZh ? '运营总监 / COO' : 'Head of Operations / COO',
          primaryArchetype: 'OPERATOR',
          tenGodProfile: isZh ? '建禄格 (比肩强旺)' : 'Self-Companion Stride',
          weight: 1.0
        }
      ];
    }

    /**
     * Evaluates cognitive balance, Shannon entropy, and collective blind spots
     *
     * @param {Array} roster - List of team members { id, name, primaryArchetype, weight }
     * @param {string} lang - 'zh' | 'en'
     */
    static auditTeam(roster = [], lang = 'zh') {
      const isZh = lang === 'zh';
      const members = Array.isArray(roster) && roster.length > 0
        ? roster
        : this.getDefaultExecutiveRoster(lang);

      // 1. Accumulate archetype distribution
      const counts = {
        PIONEER: 0,
        GOVERNOR: 0,
        GROWTH: 0,
        OPERATOR: 0
      };

      let totalWeight = 0;
      members.forEach(m => {
        const arch = ARCHETYPES[m.primaryArchetype] ? m.primaryArchetype : 'PIONEER';
        const w = Number(m.weight) || 1.0;
        counts[arch] += w;
        totalWeight += w;
      });

      // 2. Calculate archetype proportions and Shannon Entropy
      // H = - sum(p_i * log2(p_i)) / log2(4)  normalized to [0, 1]
      const proportions = {};
      let entropySum = 0;
      const numCategories = 4;

      Object.keys(counts).forEach(k => {
        const p = totalWeight > 0 ? counts[k] / totalWeight : 0.25;
        proportions[k] = Number(p.toFixed(3));
        if (p > 0) {
          entropySum += p * Math.log2(p);
        }
      });

      const maxEntropy = Math.log2(numCategories); // log2(4) = 2.0
      const shannonEntropy = Number(((-entropySum) / maxEntropy).toFixed(3));

      // 3. Diagnose Blind Spots & Dysfunctions
      const blindSpots = this._diagnoseBlindSpots(proportions, isZh);

      // 4. Synthesize Team Balance Tier
      let diversityTier = 'HIGHLY_BALANCED';
      let diversityLabel = isZh ? '四维完备均衡 (高认知韧性)' : 'Optimal Quad-Vector Balance';
      if (shannonEntropy < 0.60) {
        diversityTier = 'CRITICAL_MONOCULTURE';
        diversityLabel = isZh ? '严重认知单质化 (极高决策盲区)' : 'Critical Cognitive Monoculture';
      } else if (shannonEntropy < 0.80) {
        diversityTier = 'MODERATE_SKEW';
        diversityLabel = isZh ? '中度局部倾斜 (需补充协同角)' : 'Moderate Functional Skew';
      }

      const meta = {};
      Object.keys(ARCHETYPES).forEach(k => {
        const item = ARCHETYPES[k];
        meta[k] = {
          id: item.id,
          name: isZh ? item.nameZh : item.nameEn,
          vector: item.vector,
          description: isZh ? item.descriptionZh : item.descriptionEn
        };
      });

      return {
        memberCount: members.length,
        shannonEntropy: shannonEntropy,
        diversityTier: diversityTier,
        diversityLabel: diversityLabel,
        vectorDistribution: {
          innovationPct: Math.round(proportions.PIONEER * 100),
          governancePct: Math.round(proportions.GOVERNOR * 100),
          commercialPct: Math.round(proportions.GROWTH * 100),
          operationsPct: Math.round(proportions.OPERATOR * 100)
        },
        blindSpots: blindSpots,
        archetypesMeta: meta,
        antiDiscriminationNotice: isZh
          ? '【反歧视与劳动合规严正声明】本审计工具纯属团队内部领导力认知盲区复盘与沟通对齐辅助，严禁任何机构或个人将其用于人才招聘初筛、绩效考核评级、解聘优化等侵害劳动者合法权益的行为。'
          : '[Anti-Discrimination & Compliance Notice] Strictly for internal executive cognitive reflection and deconfliction. Prohibited from employment screening, hiring, termination, or discriminatory personnel actions under labor laws.'
      };
    }

    static _diagnoseBlindSpots(p, isZh) {
      const spots = [];

      // Risk 1: All Gas, No Brakes
      if (p.GOVERNOR < 0.15 && (p.PIONEER + p.GROWTH) > 0.65) {
        spots.push({
          type: 'BRAKELESS_RISK',
          title: isZh ? '刹车与合规真空 (全速冲锋隐患)' : 'Governance Vacuum (All-Gas-No-Brakes)',
          severity: 'HIGH',
          description: isZh
            ? '团队高度由开拓与商业驱动，但缺乏审慎的合规与风控刹车角色，在下行或监管变动周期易出现合规猝死或现金流失控。'
            : 'Heavily skewed toward expansion without governance balance; vulnerable to compliance pitfalls or cash flow shocks.',
          remedy: isZh
            ? '引入外部独立法务/审计常年顾问，或在关键大额支出与战略对赌中赋予合规角色一票否决缓冲权。'
            : 'Retain external legal/audit advisors and institute governance review checkpoints for major commitments.'
        });
      }

      // Risk 2: Analysis Paralysis
      if (p.PIONEER < 0.15 && p.GOVERNOR > 0.40) {
        spots.push({
          type: 'ANALYSIS_PARALYSIS',
          title: isZh ? '决策过度内耗 (缺乏开拓破局力)' : 'Analysis Paralysis (Pioneering Deficit)',
          severity: 'HIGH',
          description: isZh
            ? '组织内部规则严密、程序冗长，但对外部前沿机会反应迟缓，容易在错综复杂的市场中痛失早期破局窗口。'
            : 'Excessive bureaucratic drag and risk aversion; prone to missing time-sensitive strategic inflection points.',
          remedy: isZh
            ? '设立敏捷创新特区，设立小额风险试错预算，不将创新试错与常规绩效直接负向挂钩。'
            : 'Establish an agile skunkworks sandbox with dedicated exploration budget decoupled from routine KPIs.'
        });
      }

      // Risk 3: Commercial Neglect
      if (p.GROWTH < 0.15 && (p.PIONEER + p.OPERATOR) > 0.60) {
        spots.push({
          type: 'COMMERCIAL_NEGLECT',
          title: isZh ? '变现敏感度不足 (自嗨研发风险)' : 'Commercial Blind Spot (R&D Isolation)',
          severity: 'MEDIUM',
          description: isZh
            ? '团队热衷于技术自研与内部交付，但对客户付费意愿、真实回款周期与单客经济模型缺乏直接敬畏。'
            : 'Strong engineering execution but weak monetization discipline; danger of product-market misalignment.',
          remedy: isZh
            ? '将早期客户真实签单与现金回款作为核心里程碑，让技术核心直面第一线客户痛点。'
            : 'Anchor engineering milestones directly to customer revenue traction and operational cash payback.'
        });
      }

      // Risk 4: Execution Drift
      if (p.OPERATOR < 0.15 && (p.PIONEER + p.GOVERNOR) > 0.60) {
        spots.push({
          type: 'EXECUTION_DRIFT',
          title: isZh ? '架构悬空与执行断层 (落地支撑薄弱)' : 'Execution Void (Architectural Drift)',
          severity: 'MEDIUM',
          description: isZh
            ? '高层战略宏大、流程规范完备，但一线缺乏强有力的抓手与执行铁军，策略容易停留在宣讲与文档层面。'
            : 'Vision and governance in place, but lack disciplined execution to turn strategic blueprints into reality.',
          remedy: isZh
            ? '明确项目负责人全周期责任制，配置具备较强韧性的项目推进中坚，打通最后一公里。'
            : 'Assign empowered program leaders and build operational scaffolding to ensure delivery across the last mile.'
        });
      }

      if (spots.length === 0) {
        spots.push({
          type: 'BALANCED_STATE',
          title: isZh ? '动态协同良性态' : 'Harmonious Functional Synergy',
          severity: 'INFO',
          description: isZh
            ? '团队在开拓、风控、商业与交付四大维度配比均衡，具备较强的反脆弱性与自适应纠偏能力。'
            : 'Balanced distribution across innovation, governance, monetization, and operations.',
          remedy: isZh
            ? '保持定期高管对齐机制，及时根据宏观大运周期动态微调各职能决策权重。'
            : 'Maintain regular strategic alignment and adjust functional weights adaptively to external cycles.'
        });
      }

      return spots;
    }
  }

  // Universal export
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { TeamDiversityEngine, ARCHETYPES };
  }
  if (typeof window !== 'undefined') {
    window.TeamDiversityEngine = TeamDiversityEngine;
  }
  if (typeof globalThis !== 'undefined') {
    globalThis.TeamDiversityEngine = TeamDiversityEngine;
  }
})(typeof globalThis !== 'undefined' ? globalThis : this);
