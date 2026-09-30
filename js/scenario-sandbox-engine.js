/**
 * 钦天监 · 现实约束决策沙盘引擎 (Phase 7.1: User-Grounded Scenario Sandbox Engine)
 *
 * Core Principles:
 * 1. Physical & Financial Reality First: Grounds decisions in liquid runway, tolerable loss, and weekly hours.
 * 2. Three-Track Scenario Simulation:
 *    - Defensive / Safe (Base Track): High survival rate, skill consolidation, zero ruin risk.
 *    - Balanced Breakthrough (Optimal Track): Controlled phased investment, staged stop-loss triggers.
 *    - Stress-Tested Downside (Stress Track): Macro downshock + temporal clash, calculating cash breach month and ruin probability.
 * 3. Ruin Probability & Breakeven Analysis: Quantitative bounds replacing hand-waving "good/bad luck" assertions.
 * 4. Metaphysical Prior as Non-Fatal Heuristic: Temporal clash intensity acts as a friction weight, not destiny.
 *
 * 100% Offline-First, deterministic, bilingual (zh/en), zero CJK leakage in English mode.
 */

(function (global) {
  'use strict';

  class ScenarioSandboxEngine {
    /**
     * Run three-track decision simulation.
     */
    static simulate(params = {}, isEn = false) {
      const runway = Math.max(1, Number(params.liquidRunwayMonths) || 12);
      const maxLoss = Math.max(0, Number(params.maxTolerableLoss) || 100000);
      const hoursPerWeek = Math.max(1, Math.min(100, Number(params.weeklyAvailableHours) || 20));
      const macro = params.macroClimate || 'neutral'; // 'tight', 'neutral', 'abundant'
      const partnerRel = Math.max(0.1, Math.min(1.0, Number(params.partnerReliability) || 0.8));
      const problemType = params.problemType || 'career_pivot'; // 'career_pivot', 'venture_launch', 'major_asset'

      // Metaphysical Chrono-Prior (From Phase 1 / Phase 5, bounded to [0.0, 1.0])
      const clashIntensity = Math.max(0.0, Math.min(1.0, Number(params.clashIntensity) || 0.3));
      const resourceFavorable = Boolean(params.resourceFavorable);
      const dominantPattern = params.dominantPattern || 'balanced';

      // 1. Macro multipliers
      const macroMultiplier = {
        tight: { burnRate: 1.35, growthLag: 1.40, failureOdds: 0.35 },
        neutral: { burnRate: 1.00, growthLag: 1.00, failureOdds: 0.15 },
        abundant: { burnRate: 0.85, growthLag: 0.80, failureOdds: 0.08 }
      }[macro] || { burnRate: 1.0, growthLag: 1.0, failureOdds: 0.15 };

      // 2. Compute Track 1: Defensive / Safe (Base Track)
      const baseRunwayExtension = Math.round(runway * 1.35);
      const baseSurvivalProb = Math.min(0.99, Math.max(0.85, 0.95 - clashIntensity * 0.10));
      const baseTrack = {
        trackKey: 'safe_track',
        titleZh: '防御守正轨 (低能耗蓄力)',
        titleEn: 'Defensive Preservation Track (Low-Burn Asset Shielding)',
        hypothesisZh: '以保留核心流动性为第一要务，降低固定资产与精力开销，借助印星深造强化护城河。',
        hypothesisEn: 'Prioritizes liquidity preservation, downsizes fixed overhead, and builds strategic intellectual capital.',
        expectedRunwayMonths: baseRunwayExtension,
        survivalProbability: Math.round(baseSurvivalProb * 100),
        ruinProbability: Math.round((1.0 - baseSurvivalProb) * 100),
        capitalDrawdownPercent: 12,
        directivesZh: [
          '保持现有主干现金流，避免在岁运冲克期启动高杠杆借贷',
          '每周精力优先倾斜于底层壁垒沉淀（认证资质、技术研发、合规架构）',
          '与合作方采取轻量顾问或项目制分润，避免单方面无限连带兜底'
        ],
        directivesEn: [
          'Maintain core cash flow baseline; avoid taking on leverage during volatile periods',
          'Allocate weekly bandwidth toward foundational credentials, IP, and compliance',
          'Engage partners via flexible milestone-based structures rather than joint liability'
        ]
      };

      // 3. Compute Track 2: Balanced Breakthrough (Optimal Track)
      const optimalBurn = runway * (1.0 / (macroMultiplier.burnRate * 0.95));
      const optimalRunway = Math.max(6, Math.round(optimalBurn));
      const optimalSurv = Math.min(0.92, Math.max(0.60, 0.82 * partnerRel - clashIntensity * 0.15 + (resourceFavorable ? 0.08 : 0)));
      const optimalTrack = {
        trackKey: 'optimal_track',
        titleZh: '稳健突破轨 (阶段里程碑对赌)',
        titleEn: 'Balanced Breakthrough Track (Staged Milestone Verification)',
        hypothesisZh: '设定 3 个月阶段性止损对赌点，在控制最大回撤限额内分批释放资源，以食伤生财方式小步快跑。',
        hypothesisEn: 'Establishes 90-day stop-loss triggers, allocating capital incrementally within strict drawdown bounds.',
        expectedRunwayMonths: optimalRunway,
        survivalProbability: Math.round(optimalSurv * 100),
        ruinProbability: Math.round((1.0 - optimalSurv) * 100),
        capitalDrawdownPercent: 35,
        directivesZh: [
          '按季度设立清晰的关键指标（用户留存、小规模正向毛利、协议排他期）',
          '若首期 90 天未达最低生死线，立即触发平滑降速机制，退守防御轨',
          '核心团队推行双向一票否决权，重大财务支出超标即启动联合审计'
        ],
        directivesEn: [
          'Define quarterly viability KPIs (unit economics, organic retention, milestone delivery)',
          'If first 90-day survival threshold is missed, gracefully decelerate into Defensive Track',
          'Enforce bilateral veto on unbudgeted capital expenditures exceeding tolerance bounds'
        ]
      };

      // 4. Compute Track 3: Stress-Tested Downside (Stress Track)
      const stressBurnRate = macroMultiplier.burnRate * (1.0 + clashIntensity * 0.5);
      const stressRunwayMonths = Math.max(2, Math.round(runway / stressBurnRate));
      const stressRuinProb = Math.min(0.85, Math.max(0.15, (1.0 - partnerRel * 0.7) + clashIntensity * 0.35 + macroMultiplier.failureOdds));
      const stressTrack = {
        trackKey: 'stress_track',
        titleZh: '极端承压轨 (黑天鹅与岁运交感测试)',
        titleEn: 'Stress-Tested Downside Track (Black-Swan Scenario Audit)',
        hypothesisZh: '模拟遭遇行业寒冬、合作方违约与个人岁运逢冲三重共振，测算流动资金断裂时间与应急防线。',
        hypothesisEn: 'Audits systemic resilience under macro downturn, counterparty breach, and cycle friction.',
        expectedRunwayMonths: stressRunwayMonths,
        survivalProbability: Math.round((1.0 - stressRuinProb) * 100),
        ruinProbability: Math.round(stressRuinProb * 100),
        capitalDrawdownPercent: 78,
        cashBreachMonth: stressRunwayMonths <= 6 ? stressRunwayMonths : Math.max(3, Math.round(stressRunwayMonths * 0.75)),
        circuitBreakersZh: [
          `预警触发点：若流动资金储备跌破 6 个月（即消耗至 ${Math.round(maxLoss * 0.6).toLocaleString()} 元），全线终止高耗能投入`,
          '启动法律与合规资产防火墙，确保个人及家庭刚性赡养账户完全隔离',
          '立即进入休眠保育模式，保留核心牌照与主体，等待下个岁运天机窗口'
        ],
        circuitBreakersEn: [
          `Circuit Breaker: If liquid reserves fall below 6 months, freeze all discretionary operational expenses`,
          'Isolate personal and family asset reserves behind legal firewall structures',
          'Shift into dormant low-burn holding pattern, preserving core IP until favorable cycle arrival'
        ]
      };

      // 5. Sensitivity Assessment & Critical Lever
      const sensitivityAnalysis = {
        primaryVulnerabilityZh: macro === 'tight' ? '宏观资金紧缩导致获客转化周期延长' : (partnerRel < 0.7 ? '核心合作方履约信任与执行力不足' : '岁运冲克期心智带宽易被非核心纠纷耗散'),
        primaryVulnerabilityEn: macro === 'tight' ? 'Macro liquidity contraction elongates customer conversion cycles' : (partnerRel < 0.7 ? 'Counterparty execution volatility and trust friction' : 'Cognitive bandwidth drain from peripheral conflict during volatile periods'),
        criticalLeverZh: hoursPerWeek < 20 ? '精力工时为第一瓶颈，严禁单兵肉身扛所有脏活' : (runway < 12 ? '现金跑道不足12个月，当前战略权重必须将生存置于扩张之上' : '具备18个月以上健康垫，适宜以小博大、分步验证'),
        criticalLeverEn: hoursPerWeek < 20 ? 'Weekly bandwidth constraint is critical bottleneck; avoid solo operational sprawl' : (runway < 12 ? 'Runway under 12 months; survival and margin of safety must supersede aggressive growth' : 'Runway exceeds 18 months; well-positioned for measured, phased iteration')
      };

      return {
        timestamp: new Date().toISOString(),
        inputs: {
          liquidRunwayMonths: runway,
          maxTolerableLoss: maxLoss,
          weeklyAvailableHours: hoursPerWeek,
          macroClimate: macro,
          partnerReliability: partnerRel,
          problemType,
          clashIntensity,
          resourceFavorable
        },
        tracks: {
          base: baseTrack,
          optimal: optimalTrack,
          stress: stressTrack
        },
        sensitivityAnalysis,
        auditNoticeZh: '【科学与理性声明】：本推演为基于用户给定约束与宏观参数的离散情景规划，旨在揭示隐性脆弱点与现金流安全边界，绝非确定性未来预测。',
      };
    }

    /**
     * High-level wrapper for structured inputs
     */
    static simulateScenario(params = {}) {
      const isEn = (params.lang === 'en');
      let runway = 12;
      let maxLoss = 100000;
      let hours = 40;

      if (params.financials) {
        const cash = Number(params.financials.liquidRunwayCash) || 360000;
        const burn = Math.max(1000, Number(params.financials.monthlyBurnRate) || 60000);
        runway = Math.max(1, Math.round(cash / burn));
        maxLoss = Number(params.financials.maxCapitalLossTolerance) || 100000;
      } else if (params.liquidRunwayMonths) {
        runway = Number(params.liquidRunwayMonths);
      }
      if (params.timeEnergy && params.timeEnergy.weeklyHoursBudget) {
        hours = Number(params.timeEnergy.weeklyHoursBudget);
      } else if (params.weeklyAvailableHours) {
        hours = Number(params.weeklyAvailableHours);
      }

      const sim = this.simulate({
        liquidRunwayMonths: runway,
        maxTolerableLoss: maxLoss,
        weeklyAvailableHours: hours,
        macroClimate: params.macroClimate || 'neutral',
        clashIntensity: params.clashIntensity || 0.3
      }, isEn);

      const baseTrack = sim.tracks.base;
      const optTrack = sim.tracks.optimal;
      const stressTrack = sim.tracks.stress;

      const trajectories = {
        base: {
          name: isEn ? baseTrack.titleEn : baseTrack.titleZh,
          netCashFlow: -Math.round(maxLoss * 0.25),
          viability: isEn ? 'High Viability' : '高可行性',
          survivalProb: baseTrack.survivalProbability
        },
        optimal: {
          name: isEn ? optTrack.titleEn : optTrack.titleZh,
          netCashFlow: Math.round(maxLoss * 0.8),
          viability: isEn ? 'Breakthrough' : '突破增长',
          survivalProb: optTrack.survivalProbability
        },
        stress: {
          name: isEn ? stressTrack.titleEn : stressTrack.titleZh,
          cashDepletionMonth: stressTrack.cashBreachMonth,
          viability: isEn ? 'Critical Buffer' : '极限预警',
          ruinProbability: stressTrack.ruinProbability
        }
      };

      const directives = (isEn ? stressTrack.circuitBreakersEn : stressTrack.circuitBreakersZh).map(d => ({ directive: d }));

      const sanitizedTracks = {
        base: {
          title: isEn ? baseTrack.titleEn : baseTrack.titleZh,
          hypothesis: isEn ? baseTrack.hypothesisEn : baseTrack.hypothesisZh,
          expectedRunwayMonths: baseTrack.expectedRunwayMonths,
          survivalProbability: baseTrack.survivalProbability,
          ruinProbability: baseTrack.ruinProbability,
          capitalPreservationPercent: baseTrack.capitalPreservationPercent
        },
        optimal: {
          title: isEn ? optTrack.titleEn : optTrack.titleZh,
          hypothesis: isEn ? optTrack.hypothesisEn : optTrack.hypothesisZh,
          expectedRunwayMonths: optTrack.expectedRunwayMonths,
          survivalProbability: optTrack.survivalProbability,
          ruinProbability: optTrack.ruinProbability,
          projectedReturnMultiplier: optTrack.projectedReturnMultiplier
        },
        stress: {
          title: isEn ? stressTrack.titleEn : stressTrack.titleZh,
          hypothesis: isEn ? stressTrack.hypothesisEn : stressTrack.hypothesisZh,
          expectedRunwayMonths: stressTrack.expectedRunwayMonths,
          survivalProbability: stressTrack.survivalProbability,
          ruinProbability: stressTrack.ruinProbability,
          cashBreachMonth: stressTrack.cashBreachMonth,
          circuitBreakers: isEn ? stressTrack.circuitBreakersEn : stressTrack.circuitBreakersZh
        }
      };

      const sensitivityAnalysis = isEn
        ? {
            primaryVulnerability: sim.sensitivityAnalysis.primaryVulnerabilityEn,
            criticalLever: sim.sensitivityAnalysis.criticalLeverEn
          }
        : {
            primaryVulnerability: sim.sensitivityAnalysis.primaryVulnerabilityZh,
            criticalLever: sim.sensitivityAnalysis.criticalLeverZh
          };

      return {
        safeRunwayMonths: runway,
        stressRuinProbability: stressTrack.ruinProbability / 100.0,
        trajectories: trajectories,
        tracks: sanitizedTracks,
        strategicDirectives: directives,
        sensitivityAnalysis: sensitivityAnalysis,
        auditNotice: isEn ? sim.auditNoticeEn : sim.auditNoticeZh
      };
    }
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = ScenarioSandboxEngine;
  }
  if (typeof window !== 'undefined') {
    window.ScenarioSandboxEngine = ScenarioSandboxEngine;
  }
  if (typeof global !== 'undefined') {
    global.ScenarioSandboxEngine = ScenarioSandboxEngine;
  }
  if (typeof globalThis !== 'undefined') {
    globalThis.ScenarioSandboxEngine = ScenarioSandboxEngine;
  }
})(typeof globalThis !== 'undefined' ? globalThis : this);
