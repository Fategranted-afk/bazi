/**
 * 钦天监 · 生物体征趋势遥测与人在回路草稿生成助手
 * (Phase 8.3: Cyber-Biometric Telemetry & Human-in-the-Loop Advisory Guardrails)
 *
 * Evaluates physiological stress trends (HRV rolling baseline deviation, sleep debt,
 * resting heart rate shifts) and generates editable action drafts.
 *
 * STRICT GUARDRAIL PRINCIPLES:
 * 1. Zero Autonomous Action: NEVER delete calendar events or send external communications silently.
 * 2. Mandatory Human-in-the-Loop: All suggested actions are presented as editable drafts requiring explicit confirmation.
 * 3. Non-Diagnostic Health Disclaimer: Strictly for lifestyle pacing & stress resilience self-observation, not clinical medical diagnosis.
 *
 * 100% Offline, Local Storage Only, Zero Health PII Cloud Sync.
 */

(function (global) {
  'use strict';

  class BiometricTelemetryEngine {
    /**
     * Default mock/starter telemetry when wearable is not actively connected
     */
    static getSampleTelemetry() {
      return {
        baselineHrvMs: 65,
        currentHrvMs: 48,           // 26% drop from baseline
        restingHeartRateBpm: 68,
        baselineRhrBpm: 60,
        deepSleepPct: 9.5,          // below 12% threshold
        sleepDebtHours: 3.5,
        recordedDays: 7
      };
    }

    /**
     * Evaluates biometric stress and generates human-in-the-loop recommendations
     *
     * @param {Object} telemetry - Biometric metrics { baselineHrvMs, currentHrvMs, deepSleepPct, sleepDebtHours }
     * @param {Object} context - Operational context { highStakesEventToday, upcomingNegotiation, calendarEvents }
     * @param {string} lang - 'zh' | 'en'
     */
    static evaluateTelemetry(telemetry = {}, context = {}, lang = 'zh') {
      const isZh = lang === 'zh';
      const data = Object.assign(this.getSampleTelemetry(), telemetry);

      // 1. Calculate baseline deviations
      const hrvDropPct = data.baselineHrvMs > 0
        ? Math.max(0, Math.round(((data.baselineHrvMs - data.currentHrvMs) / data.baselineHrvMs) * 100))
        : 0;

      const rhrElevatedBpm = Math.max(0, data.restingHeartRateBpm - data.baselineRhrBpm);

      // 2. Synthesize Physiological Stress Index (0..100)
      // HRV drop contributes 45%, sleep debt contributes 30%, deep sleep deficit contributes 15%, RHR contributes 10%
      let stressScore = (hrvDropPct * 1.1) +
        (Math.min(6, data.sleepDebtHours) * 5) +
        (Math.max(0, 15 - data.deepSleepPct) * 2.5) +
        (rhrElevatedBpm * 1.5);

      const physiologicalStressIndex = Math.min(100, Math.max(5, Math.round(stressScore)));

      // 3. Resilience Status Tier
      let resilienceTier = 'OPTIMAL';
      let resilienceLabel = isZh ? '充沛稳态 (自主神经抗压高值)' : 'Optimal Autonomic Resilience';
      let requiresBuffer = false;

      if (physiologicalStressIndex >= 65 || hrvDropPct >= 25) {
        resilienceTier = 'ACUTE_STRAIN';
        resilienceLabel = isZh ? '显著应激耗损 (交感神经持续高警)' : 'Acute Autonomic Strain';
        requiresBuffer = true;
      } else if (physiologicalStressIndex >= 40 || hrvDropPct >= 15) {
        resilienceTier = 'MODERATE_FATIGUE';
        resilienceLabel = isZh ? '中度疲劳累积 (代偿修复期)' : 'Moderate Cumulative Fatigue';
        requiresBuffer = true;
      } else if (physiologicalStressIndex >= 25) {
        resilienceTier = 'BALANCED';
        resilienceLabel = isZh ? '正常平衡态 (日常稳定)' : 'Balanced Homeostasis';
      }

      // 4. Generate Human-in-the-Loop Action Drafts (NOT autonomous executions!)
      const drafts = this._generateActionDrafts(data, context, resilienceTier, hrvDropPct, lang);

      return {
        physiologicalStressIndex: physiologicalStressIndex,
        resilienceTier: resilienceTier,
        resilienceLabel: resilienceLabel,
        hrvDropPct: hrvDropPct,
        currentHrvMs: data.currentHrvMs,
        baselineHrvMs: data.baselineHrvMs,
        sleepDebtHours: data.sleepDebtHours,
        deepSleepPct: data.deepSleepPct,
        requiresBuffer: requiresBuffer,
        actionDrafts: drafts,
        guardrailNotice: isZh
          ? '【人在回路安全保障】系统绝不自动执行日历修改或发送邮件。以下事项均为待审阅建议草稿，需经您亲自确认后生效。'
          : '[Human-in-the-Loop Guardrail] Autonomous execution disabled. The following items are editable drafts requiring your explicit confirmation.',
        medicalDisclaimer: isZh
          ? '【非医疗诊断声明】心率变异性及睡眠趋势仅反映日常精力负荷与恢复状态，绝非临床医学或心理病理学判定。若感持续身体不适，请咨询正规医疗机构。'
          : '[Non-Medical Disclaimer] Physiological indicators reflect stress resilience and pacing, not clinical medical diagnosis. Consult healthcare professionals if symptoms persist.'
      };
    }

    /**
     * Generates structured editable action drafts
     */
    static _generateActionDrafts(data, context, tier, hrvDropPct, lang) {
      const isZh = lang === 'zh';
      const drafts = [];

      if (tier === 'ACUTE_STRAIN' || tier === 'MODERATE_FATIGUE') {
        // Draft 1: Calendar Decompression Buffer
        drafts.push({
          id: 'draft_calendar_buffer',
          type: 'CALENDAR_BUFFER',
          title: isZh ? '【待确认草稿】在日程中插入 45 分钟精力缓冲舱' : '[Draft for Review] Insert 45-min Decompression Buffer',
          recipient: isZh ? '本地个人日历' : 'Local Personal Calendar',
          status: 'PENDING_USER_REVIEW',
          requiresConfirmation: true,
          content: isZh
            ? `建议在今日 14:00 - 14:45 预留认知缓冲舱（静音通知、暂停多任务处理），以缓解连续高交感负荷对关键决断的损耗。`
            : `Proposed: Reserve a 45-minute cognitive buffer between 14:00 - 14:45 (mute non-essential alerts, pause multitasking) to mitigate high autonomic strain.`,
          actionPayload: {
            eventType: 'BLOCK_TIME',
            durationMinutes: 45,
            suggestedTime: '14:00'
          }
        });

        // Draft 2: High-Stakes Negotiation Deferral or Framing
        drafts.push({
          id: 'draft_meeting_reschedule',
          type: 'COMMUNICATION_DRAFT',
          title: isZh ? '【待审阅邮件草稿】关键商务谈判柔性推迟 / 线上调整建议' : '[Draft for Review] Meeting Reschedule & Adjustment Template',
          recipient: isZh ? '相关商务对接人' : 'Counterpart Stakeholders',
          status: 'PENDING_USER_REVIEW',
          requiresConfirmation: true,
          content: isZh
            ? `您好，为保证今日关键方案推演的充分性与深入度，建议将原定于今日下午的战略对齐会调整为明日上午 10:00，或先以异步文档形式推进第一轮条款复核。感谢您的理解与支持！`
            : `Hello, to ensure thorough strategic review and due diligence on the core terms, I propose rescheduling our alignment meeting to tomorrow at 10:00 AM, or beginning with an asynchronous document review. Thank you for your flexibility!`,
          actionPayload: {
            communicationType: 'EMAIL_OR_CHAT',
            subject: isZh ? '关于今日战略对齐会议时间的协商' : 'Proposal for Adjusting Strategic Alignment Meeting Window'
          }
        });

        // Draft 3: Delegation of Non-Critical Operational Chores
        drafts.push({
          id: 'draft_task_delegation',
          type: 'INTERNAL_MEMO',
          title: isZh ? '【待分发备忘草稿】非核心例行业务委托交接清单' : '[Draft for Review] Routine Task Delegation Memo',
          recipient: isZh ? '项目助理 / 运营支持团队' : 'Project Operations Lead',
          status: 'PENDING_USER_REVIEW',
          requiresConfirmation: true,
          content: isZh
            ? `请协助跟进今日以下例行事项：1. 周报汇总与格式校对；2. 供应商发票审批流转。我今日将主要聚焦于核心技术与法务条款的审阅。`
            : `Please assist with the following routine workflows today: 1. Weekly report formatting and synthesis; 2. Supplier billing approvals. I will focus primarily on core technical and legal architecture today.`,
          actionPayload: {
            taskScope: 'DELEGATE_ROUTINE'
          }
        });
      } else {
        // Optimal State: Green-light High-Value Action
        drafts.push({
          id: 'draft_deep_focus_block',
          type: 'FOCUS_INITIATION',
          title: isZh ? '【高能窗口建议】锁定 2 小时无干扰攻坚期' : '[High-Energy Window] Allocate 2-Hour Deep Focus Block',
          recipient: isZh ? '本地待办与专注模式' : 'Local Focus Mode',
          status: 'PENDING_USER_REVIEW',
          requiresConfirmation: true,
          content: isZh
            ? `监测到当前身心抗压与自主神经恢复力处在基线最佳状态，建议立即开启 120 分钟专注攻坚，集中推进战略规划或关键代码交付。`
            : `Autonomic resilience is currently optimal. Recommended: initiate a 120-minute deep focus sprint to resolve strategic architecture or complex deliverables.`,
          actionPayload: {
            durationMinutes: 120
          }
        });
      }

      return drafts;
    }
  }

  // Universal export
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { BiometricTelemetryEngine };
  }
  if (typeof window !== 'undefined') {
    window.BiometricTelemetryEngine = BiometricTelemetryEngine;
  }
  if (typeof globalThis !== 'undefined') {
    globalThis.BiometricTelemetryEngine = BiometricTelemetryEngine;
  }
})(typeof globalThis !== 'undefined' ? globalThis : this);
