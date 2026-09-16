/**
 * 职场打工人破局与财运事业全相推演引擎 (Career & Wealth Trajectory Engine)
 * Grounded in Eight Canons (八经), Zhou Yi (周易值年卦), Decade Luck (大运), Annual (流年) and Monthly (流月) transits.
 * Four Major Workplace Pillars:
 * 1. 向上管理与职场沟通 (Managing Up & Superiors Interaction)
 * 2. 横向协作与人际防火墙 (Peer & Colleague Dynamics)
 * 3. 天命职能与四大生态位精准定向 (Workplace Archetype Matching: 文职, 武职, 技术人员, 高管)
 * 4. 时空财运与事业窗口推演 (Dynamic Timing of Career & Wealth: Decade, Annual, Zhou Yi, Direct/Indirect Wealth, 12 Months Calendar)
 * Strictly bilingual with 100% zero residual Chinese in English mode.
 */

class CareerEngine {
  static getTenGod(dm, target) {
    if (!dm || !target) return '正官';
    const STEMS = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
    const STEM_ELEMENTS = {
      '甲': '木', '乙': '木', '丙': '火', '丁': '火', '戊': '土',
      '己': '土', '庚': '金', '辛': '金', '壬': '水', '癸': '水'
    };
    const STEM_YIN_YANG = {
      '甲': true, '乙': false, '丙': true, '丁': false, '戊': true,
      '己': false, '庚': true, '辛': false, '壬': true, '癸': false
    };
    const GENERATES = { '木': '火', '火': '土', '土': '金', '金': '水', '水': '木' };
    const CONTROLS = { '木': '土', '土': '水', '水': '火', '火': '金', '金': '木' };

    const dmEl = STEM_ELEMENTS[dm];
    const tEl = STEM_ELEMENTS[target];
    if (!dmEl || !tEl) return '正官';
    const sameYY = (STEM_YIN_YANG[dm] === STEM_YIN_YANG[target]);
    if (dmEl === tEl) return sameYY ? '比肩' : '劫财';
    if (GENERATES[dmEl] === tEl) return sameYY ? '食神' : '伤官';
    if (CONTROLS[dmEl] === tEl) return sameYY ? '偏财' : '正财';
    if (CONTROLS[tEl] === dmEl) return sameYY ? '七杀' : '正官';
    if (GENERATES[tEl] === dmEl) return sameYY ? '偏印' : '正印';
    return '正官';
  }

  static getGanzhiEn(gz) {
    if (!gz || typeof gz !== 'string' || gz.length < 2) return gz || '';
    const STEM_NAMES = {
      '甲': 'Jia', '乙': 'Yi', '丙': 'Bing', '丁': 'Ding', '戊': 'Wu',
      '己': 'Ji', '庚': 'Geng', '辛': 'Xin', '壬': 'Ren', '癸': 'Gui'
    };
    const BRANCH_NAMES = {
      '子': 'Zi', '丑': 'Chou', '寅': 'Yin', '卯': 'Mao',
      '辰': 'Chen', '巳': 'Si', '午': 'Wu', '未': 'Wei',
      '申': 'Shen', '酉': 'You', '戌': 'Xu', '亥': 'Hai'
    };
    const s = gz[0];
    const b = gz[1];
    const sName = STEM_NAMES[s] || s;
    const bName = BRANCH_NAMES[b] || b;
    return `${sName}-${bName}`;
  }

  /**
   * Generates the comprehensive Career & Wealth Trajectory Report
   */
  static generateCareerReport(bazi, luck, targetYear = null, targetMonthBranch = null) {
    if (!bazi || !bazi.pillars) return null;

    const now = new Date();
    const effYear = targetYear || now.getFullYear();
    const birthYear = (bazi.input && bazi.input.year) || bazi.birthYear || 1990;
    const realAge = Math.max(1, effYear - birthYear);

    // Compute or extract Luck
    let effLuck = luck;
    if (!effLuck && typeof LuckEngine !== 'undefined' && typeof LuckEngine.calculateLuck === 'function') {
      try {
        effLuck = LuckEngine.calculateLuck(bazi, effYear, targetMonthBranch);
      } catch (e) {
        effLuck = null;
      }
    }

    // Extract Day Master & basic traits
    const dm = bazi.dayMaster || (bazi.pillars.day && bazi.pillars.day.stem) || '甲';
    const STEM_EN_MAP = {
      '甲': 'Jia (Yang Wood)', '乙': 'Yi (Yin Wood)',
      '丙': 'Bing (Yang Fire)', '丁': 'Ding (Yin Fire)',
      '戊': 'Wu (Yang Earth)', '己': 'Ji (Yin Earth)',
      '庚': 'Geng (Yang Metal)', '辛': 'Xin (Yin Metal)',
      '壬': 'Ren (Yang Water)', '癸': 'Gui (Yin Water)'
    };
    const dmEn = (typeof I18N !== 'undefined' && typeof I18N.getStem === 'function')
      ? I18N.getStem(dm, 'en').split(' ')[0]
      : (STEM_EN_MAP[dm] ? STEM_EN_MAP[dm].split(' ')[0] : dm);
    const dayPillar = (bazi.pillars.day && bazi.pillars.day.text) || `${dm}子`;
    const monthBranch = (bazi.pillars.month && bazi.pillars.month.branch) || '寅';

    // Day Master Element
    const STEM_ELEMENTS = {
      '甲': '木', '乙': '木', '丙': '火', '丁': '火', '戊': '土',
      '己': '土', '庚': '金', '辛': '金', '壬': '水', '癸': '水'
    };
    const dmEl = STEM_ELEMENTS[dm] || '木';

    // Day Master Vigor (deep calibration)
    let isStrong = true;
    if (typeof LuckEngine !== 'undefined' && typeof LuckEngine.isDayMasterStrong === 'function') {
      isStrong = LuckEngine.isDayMasterStrong(bazi);
    } else if (typeof isDayMasterStrong === 'function') {
      isStrong = isDayMasterStrong(bazi);
    } else if (bazi.zipingScore && typeof bazi.zipingScore.totalScore === 'number') {
      isStrong = bazi.zipingScore.totalScore >= 50;
    }

    // Pattern & Ten Gods Evaluation
    const PATTERN_EN_MAP = {
      '正官格': 'Direct Officer Pattern',
      '七杀格': 'Seven Killings Pattern',
      '偏官格': 'Seven Killings Pattern',
      '正财格': 'Direct Wealth Pattern',
      '偏财格': 'Indirect Wealth Pattern',
      '正印格': 'Direct Resource Pattern',
      '偏印格': 'Indirect Resource Pattern',
      '枭神格': 'Indirect Resource (Owl) Pattern',
      '食神格': 'Eating God Pattern',
      '伤官格': 'Hurting Officer Pattern',
      '建禄格': 'Established Lu Pattern',
      '建禄月劫格': 'Established Lu & Month Rob Wealth Pattern',
      '月劫格': 'Month Rob Wealth Pattern',
      '阳刃格': 'Yang Blade Pattern',
      '羊刃格': 'Yang Blade Pattern'
    };
    const primaryPattern = (bazi.pattern && bazi.pattern.name) || (bazi.dominantPattern && bazi.dominantPattern.name) || '正官格';
    const primaryPatternEn = (typeof PortraitEngine !== 'undefined' && typeof PortraitEngine.getPatternEn === 'function')
      ? PortraitEngine.getPatternEn(primaryPattern)
      : (PATTERN_EN_MAP[primaryPattern] || 'Direct Officer Pattern');

    // Count ten gods in chart (both stems and earthly branch hidden stems)
    const godCounts = this.extractGodCounts(bazi);

    // 1. Module: Managing Up & Superiors Interaction (向上管理与职场沟通)
    const managingUp = this.computeManagingUp(dm, dmEn, isStrong, godCounts, primaryPattern, primaryPatternEn);

    // 2. Module: Peer & Colleague Dynamics (横向协作与人际防火墙)
    const peerDynamics = this.computePeerDynamics(dm, dmEn, isStrong, godCounts);

    // 3. Module: Workplace Archetype Matching (天命职能与四大生态位精准定向)
    const workplaceArchetypes = this.computeWorkplaceArchetypes(dm, dmEn, isStrong, godCounts, primaryPattern, primaryPatternEn, bazi);

    // 4. Module: Timing Trajectory of Career & Wealth (时空财运与事业窗口推演)
    const timingTrajectory = this.computeTimingTrajectory(bazi, effLuck, effYear, realAge, dm, isStrong, godCounts);

    // 5. Module: Rong Ku Jian Workplace Strategy Codex (五代·冯道《荣枯鉴》职场实操全相手册)
    const rongkujian = this.computeRongKuJianManual(dm, isStrong, godCounts, primaryPattern);

    return {
      bazi,
      dm,
      dmEn,
      isStrong,
      primaryPattern,
      primaryPatternEn,
      summary: {
        dm,
        dmEn,
        dmEl,
        dayPillar,
        monthBranch,
        isStrong,
        primaryPattern,
        primaryPatternEn,
        realAge,
        effYear
      },
      managingUp,
      peerDynamics,
      workplaceArchetypes,
      timingTrajectory,
      rongkujian,
      glossary: (typeof TEN_GODS_GLOSSARY !== 'undefined') ? TEN_GODS_GLOSSARY : ((typeof TenGodsDB !== 'undefined' && TenGodsDB.getAll) ? TenGodsDB.getAll() : {})
    };
  }

  /**
   * 5. 《荣枯鉴》全相职场生存与破局推演 (Rong Ku Jian Workplace Strategy Codex)
   */
  static computeRongKuJianManual(dm, isStrong, godCounts, primaryPattern) {
    if (typeof RongKuJianDB !== 'undefined' && typeof RongKuJianDB.evaluateNativeScrolls === 'function') {
      return RongKuJianDB.evaluateNativeScrolls(dm, isStrong, godCounts, primaryPattern);
    }
    return null;
  }

  /**
   * Helper to extract 10 Gods counts from BaZi chart
   */
  static extractGodCounts(bazi) {
    const godCounts = {
      officer: 0,
      killings: 0,
      directWealth: 0,
      indirectWealth: 0,
      directResource: 0,
      indirectResource: 0,
      eatingGod: 0,
      hurtingOfficer: 0,
      friend: 0,
      robWealth: 0
    };
    if (!bazi || !bazi.pillars) return godCounts;

    const countGod = (g) => {
      if (!g || typeof g !== 'string') return;
      if (g.includes('正官')) godCounts.officer++;
      else if (g.includes('七杀') || g.includes('偏官')) godCounts.killings++;
      else if (g.includes('正财')) godCounts.directWealth++;
      else if (g.includes('偏财')) godCounts.indirectWealth++;
      else if (g.includes('正印')) godCounts.directResource++;
      else if (g.includes('偏印') || g.includes('枭')) godCounts.indirectResource++;
      else if (g.includes('食神')) godCounts.eatingGod++;
      else if (g.includes('伤官')) godCounts.hurtingOfficer++;
      else if (g.includes('比肩')) godCounts.friend++;
      else if (g.includes('劫财')) godCounts.robWealth++;
    };

    ['year', 'month', 'day', 'hour'].forEach(pKey => {
      const p = bazi.pillars[pKey];
      if (!p) return;
      if (pKey !== 'day' && p.stemGod) {
        countGod(p.stemGod);
      }
      if (Array.isArray(p.hidden)) {
        p.hidden.forEach(h => {
          if (h && h.god) countGod(h.god);
        });
      }
    });

    return godCounts;
  }

  /**
   * 1. 向上管理与职场沟通 (Managing Up & Superiors Interaction)
   */
  static computeManagingUp(dm, dmEn, isStrong, godCounts, pattern, patternEn) {
    const hasHurting = godCounts.hurtingOfficer > 0;
    const hasKillings = godCounts.killings > 0;
    const hasOfficer = godCounts.officer > 0;
    const hasResource = (godCounts.directResource + godCounts.indirectResource) > 0;

    // Upward style diagnosis
    let styleZh = '';
    let styleEn = '';
    let avoidOffendingZh = '';
    let avoidOffendingEn = '';
    let askingResourcesZh = '';
    let askingResourcesEn = '';

    if (hasHurting) {
      styleZh = '命带伤官秀气，思维跳跃且极具敏锐洞察力，天生反感形式主义与平庸教条。在向上沟通中，容易因一眼看出方案漏洞而直接反驳，潜意识带有一种“智力优越感”。';
      styleEn = 'Endowed with Hurting Officer acuity, your intellect is razor-sharp and naturally intolerant of bureaucratic inertia. In upward interactions, you risk expressing intellectual impatience when spotting flaws in executive directives.';
      avoidOffendingZh = '【核心避坑法门 · 戒当面硬怼（《荣枯鉴·闻达卷》：直为骨媚为仪；直而无媚上疑也）】：绝不在部门大会或公开场合指出上司的逻辑漏洞或决策失误。上司最在乎的是权威与掌控感；遵照冯道“求忌直曲之乃得、顺其上者伪非过”，私下一对一沟通，并采取“赞同全局大方向 + 补充边缘兜底试验方案”的话术，让功劳归于上司，方能化戾气为助力。';
      avoidOffendingEn = '[Prime Directive: Avoid Public Contradiction (Rong Ku Jian: Integrity as bone, manners as garment; frankness without deference breeds suspicion)]: Never dismantle a superior\'s proposal in open forums. Superiors prioritize status certainty and control. Adopt Feng Dao\'s curved diplomacy: deliver feedback exclusively in 1-on-1 sessions, praising their macro vision before proposing incremental safety-net experiments.';
    } else if (hasKillings) {
      styleZh = '命带七杀刚烈之气，执行力与抗压魄力极强，但在面对微观管理型或情绪多变的上司时，容易产生强烈的逆反心理，遇强则硬抗。';
      styleEn = 'Guided by Seven Killings intensity, you possess extraordinary execution grit but chafe under micromanagement or volatile superiors, instinctively meeting institutional pressure with fierce internal resistance.';
      avoidOffendingZh = '【核心避坑法门 · 交付确定性】：七杀型员工最能赢得铁血型领导赏识，但前提是“凡事有交代，件件有着落”。向上汇报坚持“结论先行 + 3个备选方案 + 风险应对表”，绝不将没有解法的混乱问题直接甩给上司。';
      avoidOffendingEn = '[Prime Directive: Deliver Absolute Certainty]: Decisive leaders value your combat edge only when paired with closure. Lead every update with the definitive bottom-line outcome, followed by 3 vetted options and a contingency table. Never dump raw dilemmas without pre-packaged solutions.';
    } else if (hasOfficer) {
      styleZh = '正官星当权，天生具备强烈的秩序意识与制度敬畏心。对待上司彬彬有礼、尊重层级，擅长在公司既定规则边界内步步为营推进工作。';
      styleEn = 'Governed by Direct Officer order, you possess deep respect for hierarchy and institutional protocol. You interact with superiors with natural deference, thriving within structured corporate frameworks.';
      avoidOffendingZh = '【核心避坑法门 · 守序与汇报】：严格遵守层级边界，严禁越级汇报；在推进跨部门事务前，必须提前征询直属上司的背书与知情权，使其感到被充分尊重。';
      avoidOffendingEn = '[Prime Directive: Respect Chain of Command]: Strictly honor jurisdictional boundaries. Never bypass immediate managers; secure their explicit sponsorship and visibility before launching cross-functional initiatives.';
    } else {
      styleZh = '以踏实和顺为主轴，性格温和低调，埋头拉车多于抬头看路，有时在上司眼中缺乏足够的存在感与冲劲。';
      styleEn = 'Characterized by steady modesty and reliable diligence, you tend to focus on deep execution rather than upward visibility, occasionally risking being taken for granted by executive leadership.';
      avoidOffendingZh = '【核心避坑法门 · 增强可见度】：建立定期的主动对齐机制，不要等上司来问才汇报；把默默完成的工作量转化为结构化的成果看板，适度展示业务关键里程碑。';
      avoidOffendingEn = '[Prime Directive: Amplify Strategic Visibility]: Shift from passive silence to proactive cadence. Do not wait for superiors to inquire; synthesize background labor into crisp executive milestone dashboards.';
    }

    if (hasResource) {
      askingResourcesZh = '争取资源时，从“组织收益与长辈导师视角”切入：强调申请预算或HC是为了替上司分担核心业务风险、确保部门重点项目稳健落地，并附上清晰的投入产出对比。';
      askingResourcesEn = 'When requesting budget or headcount, frame the ask around shielding the superior\'s strategic agenda: demonstrate how extra resources de-risk key quarterly deliverables with measurable ROI metrics.';
    } else {
      askingResourcesZh = '争取资源时切忌单纯倒苦水强调自己辛苦；必须把个人诉求绑定到直属领导本季度的核心战役与升迁政绩上，让领导觉得“给你资源就是帮他自己打仗”。';
      askingResourcesEn = 'Never ask for resources by merely complaining of heavy workload. Tightly align your requisition with your superior\'s quarterly OKRs and career advancement, so funding you directly advances their own triumph.';
    }

    // Four Concrete Communication Scripts
    const scripts = [
      {
        id: 'script_sync',
        titleZh: '场景一：周度汇报与OKR主线对齐 (Weekly Sync)',
        titleEn: 'Scenario 1: Weekly Sync & OKR Alignment',
        badgeZh: '闭环对齐',
        badgeEn: 'Closure & Sync',
        dialogueZh: '“领导您好，向您快速同步本周核心进展：本周主线重点A已按计划推进至80%，关键交付物已上线；次重点B发现潜在协同风险，我已初步制定了2套兜底预案，预计下周二前闭环；下周重心将聚焦在攻坚C业务。关于资源协同，我需要您在周四评审会上帮我们部门定调。”',
        dialogueEn: '"Good morning [Leader]. Quick alignment on this week\'s core deliverables: Primary Milestone A is tracking at 80% with key assets deployed. On Objective B, I identified a cross-functional bottleneck and drafted two mitigation contingencies, targeting full resolution by Tuesday. Next week our bandwidth focuses on Priority C. To maintain momentum, I would appreciate your strategic alignment at Thursday\'s review."',
        tipsZh: '法则：3分钟电梯法则，结论在前，风险带预案，让领导做选择题而非思考题。',
        tipsEn: 'Rule: 3-minute elevator rule: conclusions first, risks accompanied by remedies, present structured choices rather than open dilemmas.'
      },
      {
        id: 'script_reject',
        titleZh: '场景二：方案被否与建设性争鸣 (Constructive Pushback)',
        titleEn: 'Scenario 2: Diplomatic Pushback When Ideas Are Rejected',
        badgeZh: '化解分歧',
        badgeEn: 'Diplomatic Pivot',
        dialogueZh: '“领导，您刚才指出的这两点风险非常一针见血，确实是我之前在宏观成本端考虑不够周全。您的战略意图是守住利润底线，基于这个前提，如果我们在保留原有核心功能的基础上，把B环节替换为轻量级外部采购，这样既能满足您的成本要求，又能把上线时间抢回2周，您看我们是否可以先做个微型MVP测试？”',
        dialogueEn: '"I appreciate your sharp critique on these two risk vectors—they highlight a cost consideration I had understated. Given your priority to safeguard gross margins, what if we keep the core functional architecture but substitute module B with a lightweight external vendor? This adheres strictly to your budget cap while accelerating shipment by two weeks. May we run a 14-day micro-MVP to test this?"',
        tipsZh: '法则：先肯定领导的深层意图（找共同目标），再以低成本小步快跑（MVP）化解僵局。',
        tipsEn: 'Rule: Validate the superior\'s strategic intent first, then pivot to low-risk experimental validation (MVP) to unlock stalemate.'
      },
      {
        id: 'script_promotion',
        titleZh: '场景三：争取资源与升职加薪谈判 (Raise & Resources)',
        titleEn: 'Scenario 3: Pitching Promotions, Compensation & Requisitions',
        badgeZh: '价值对价',
        badgeEn: 'Value Exchange',
        dialogueZh: '“领导，感谢您这一年来对我的信任与指导。过去三个季度，我主导推进的A项目为部门带来了XX%的效率提升与YY万元新增收益，个人考核也始终保持在上游。随着接下来新业务线全面展开，我希望能够承担更大的职责范围，并申请职级与薪酬调整至[目标水平]，以便我能全力以赴带领梯队攻下下一阶段更艰巨的目标。”',
        dialogueEn: '"Thank you for your consistent trust and mentorship this past year. Over the last three quarters, project A under my lead generated a XX% operational efficiency gain and $YY in incremental value, maintaining top-tier performance ratings. As we expand into the next growth frontier, I am eager to assume broader strategic ownership and request a grade and compensation review to [Target Level], positioning me to spearhead our next major campaign."',
        tipsZh: '法则：用不可辩驳的数据沉淀说话，升职加薪不是“索取福利”，而是“为承担更大业务责任完成契约对价”。',
        tipsEn: 'Rule: Lead with indisputable empirical contributions. Treat promotion not as an emotional favor, but as an equitable contractual exchange for higher strategic ownership.'
      },
      {
        id: 'script_crisis',
        titleZh: '场景四：突发危机拆弹与主动复盘 (Crisis Ownership)',
        titleEn: 'Scenario 4: Crisis Mitigation & Accountability Remediation',
        badgeZh: '排雷复盘',
        badgeEn: 'Crisis Remediation',
        dialogueZh: '“领导，向您紧急通报：今天下午A系统出现异常波动，影响了部分用户访问。我们已在15分钟内启动应急熔断并切换备用集群，目前核心业务已100%恢复正常。此次事故的核心根因是新接口的并发承载评估不足，责任在我。我们已在今晚部署了3重防护监控机制，并已整理出一份详尽的排查复盘报告与整改清单，绝不让同类问题二次发生。”',
        dialogueEn: '"Urgent briefing, Leader: System A experienced an anomaly this afternoon affecting a subset of users. We triggered our failover protocol within 15 minutes, routing traffic to backup clusters; all core operations are now 100% restored. The root cause was an underestimation of peak API concurrency—I take full ownership. We implemented three automated monitoring circuit-breakers tonight and compiled a post-mortem review with preventative remediation to ensure zero recurrence."',
        tipsZh: '法则：10秒讲清现状与恢复状态，敢于担责不甩锅，给出永久防复发熔断机制。',
        tipsEn: 'Rule: Clarify containment status within 10 seconds, take unambiguous ownership without blaming peers, and deliver irreversible systemic safeguards.'
      }
    ];

    return {
      styleZh,
      styleEn,
      avoidOffendingZh,
      avoidOffendingEn,
      generalRuleZh: avoidOffendingZh,
      generalRuleEn: avoidOffendingEn,
      askingResourcesZh,
      askingResourcesEn,
      scripts
    };
  }

  /**
   * 2. 横向协作与人际防火墙 (Peer & Colleague Dynamics)
   */
  static computePeerDynamics(dm, dmEn, isStrong, godCounts) {
    const peerScore = (godCounts.friend * 12 + godCounts.robWealth * 18);
    const hasRobWealth = godCounts.robWealth > 0;
    const hasFriend = godCounts.friend > 0;

    let peerAnalysisZh = '';
    let peerAnalysisEn = '';
    let betrayalWarningZh = '';
    let betrayalWarningEn = '';

    if (hasRobWealth || peerScore >= 25) {
      peerAnalysisZh = '命局中比劫（尤其是劫财）气机活跃，在职场同僚关系中呈现典型的“竞合博弈态势”。一方面你待人豪爽热情，能迅速与同事打成一片；但另一方面，你极易遭遇“比劫争财”暗礁——同级别同事抢功、成果被合伙人截胡、或者在关键晋升名额面前遭遇表面称兄道弟背地暗施冷箭。';
      peerAnalysisEn = 'Companion and Rob Wealth energies are highly pronounced, placing peer relationships in an intense competitive-collaborative paradox. While naturally engaging and generous, you are exposed to Peer Wealth Robbery—colleagues claiming credit for your labor, lateral friction, or subtle betrayal when promotion slots narrow.';
      betrayalWarningZh = '【同僚竞争高危预警（《荣枯鉴·节义卷》：穿上铠甲拿着刀做好人）】：谨防“过度相信口头承诺”。冯道开示：“外小人而内君子者，真君子也；德与刀是做好人的成本，有刀而不砍出去才是真正的善良。”职场中绝不可把同僚当作无话不谈的知心密友，任何涉及项目归属、绩效分配与客户资源的环节，必须白纸黑字留痕形成防御威慑；警惕搭便车的同事在项目成功时出来摘桃子。';
      betrayalWarningEn = '[Peer Betrayal Warning]: Guard against naive reliance on verbal assurances. Never treat lateral competitors as intimate emotional confidants. Ensure deal attribution, client rosters, and deliverable timestamps are documented in immutable corporate systems; beware of free-riding peers appearing only to claim credit at harvest.';
    } else {
      peerAnalysisZh = '命中比劫气机温和清纯，在团队中为人正直本分，不喜拉帮结派与恶性内耗。你通常倾向于就事论事，与大多数同事能维持体面专业的职场距离。';
      peerAnalysisEn = 'Companion energies are balanced and peaceful. You naturally disdain toxic factional politics and petty office gossip, preferring meritocratic, objective teamwork and professional boundaries.';
      betrayalWarningZh = '【同僚协作防备】：防人之心不可无，在跨部门协作时，容易因过分讲道理、守信用而承担过多本不属于你的脏活累活；需学会设立清晰的工作职责界限。';
      betrayalWarningEn = '[Lateral Collaboration Guardrail]: Never let conscientious integrity morph into taking on colleagues\' neglected burdens without attribution. Establish unambiguous cross-functional RACI matrices.';
    }

    const threeFirewalls = [
      {
        id: 'firewall_doc',
        titleZh: '防火墙一：沟通留痕与确权防火墙 (Written Audit Trail)',
        titleEn: 'Firewall 1: Written Audit Trail & Attribution Shield',
        descZh: '凡是涉及项目排期变更、需求增删、资源借调或跨部门交接，绝不以“微信口头说了”为准。任何口头沟通必须在半小时内跟进一封结构化邮件或Jira工单抄送相关主管：“根据刚才讨论，对齐如下要点...如有异议请在本日18:00前回信”。沟通留痕，责权明晰，杜绝扯皮。',
        descEn: 'Never permit critical scope changes, timeline commitments, or resource handoffs to rest on casual verbal agreements. Follow up every verbal exchange within 30 minutes with a structured summary email or ticket copied to pertinent stakeholders. Clear documentation eliminates ambiguity.',
        sealZh: '留痕立契',
        sealEn: 'Audit Trail'
      },
      {
        id: 'firewall_emotion',
        titleZh: '防火墙二：情绪与隐私防火墙 (Emotional & Boundary Shield)',
        titleEn: 'Firewall 2: Psychological Boundary & Privacy Fortress',
        descZh: '在公司内建立绝对的“情绪隔离带”。严禁在茶水间、小群或饭局中向上级以外的同僚抱怨直属领导的决策缺陷；同事是事业盟友而非心理咨询师。个人私生活、财务状况、副业探索与跳槽面试意向，对同僚一概保持“无可奉告”的专业神秘感。',
        descEn: 'Erect an impenetrable psychological barrier within workplace boundaries. Never ventilate managerial grievances or leadership critique to colleagues over drinks or in private chats. Keep personal finances, side ventures, and external opportunities completely confidential.',
        sealZh: '慎言自持',
        sealEn: 'Discreet Boundary'
      },
      {
        id: 'firewall_moat',
        titleZh: '防火墙三：核心资产与不可替代性护城河 (Irreplaceable Asset Moat)',
        titleEn: 'Firewall 3: Irreplaceable Technical & Institutional Moat',
        descZh: '在团队日常业务之外，必须深耕至少一项别人无法在短期内替代的“硬核压舱石”——例如核心客户深度信任关系、底层高难度代码架构主导权、特定行业高阶从业资质、或者极为高效的复杂供应商谈判网络。只要你有底牌，任何同僚的排挤与抢功都会不攻自破。',
        descEn: 'Cultivate at least one proprietary domain that cannot be replicated or siphoned by peers: unshakeable institutional relationships, deep architectural ownership of critical systems, scarce certifications, or strategic supplier networks. Indispensable competence is your ultimate armor.',
        sealZh: '硬核壁垒',
        sealEn: 'Indispensable Moat'
      }
    ];

    return {
      peerAnalysisZh,
      peerAnalysisEn,
      betrayalWarningZh,
      betrayalWarningEn,
      threeFirewalls
    };
  }

  /**
   * 3. 天命职能与四大生态位精准定向 (Workplace Archetype Matching)
   * 衡量四大生态位：文职、武职、技术人员、高管
   * 依据占比最高的前三大格局、日主喜忌与十神分布强力区分打分，杜绝无差异扎堆
   */
  static computeWorkplaceArchetypes(dm, dmEn, isStrong, godCounts, pattern, patternEn, bazi) {
    if (dm && typeof dm === 'object' && dm.pillars) {
      bazi = dm;
      dm = bazi.dayMaster;
      dmEn = bazi.dayMasterEn || '';
      isStrong = (typeof isDayMasterStrong === 'function') ? isDayMasterStrong(bazi) : (bazi.isDayMasterStrong || false);
      godCounts = this.extractGodCounts(bazi);
      pattern = bazi.primaryPattern || (bazi.patterns && bazi.patterns[0] && bazi.patterns[0].name) || '';
      patternEn = bazi.primaryPatternEn || (bazi.patterns && bazi.patterns[0] && bazi.patterns[0].nameEn) || '';
    }
    if (!godCounts) {
      godCounts = this.extractGodCounts(bazi);
    }
    pattern = String(pattern || '');

    // 1. Obtain top 3 dominant patterns from bazi or PortraitEngine
    let patternList = [];
    if (bazi && Array.isArray(bazi.patterns) && bazi.patterns.length > 0) {
      patternList = bazi.patterns;
    } else if (typeof PortraitEngine !== 'undefined' && typeof PortraitEngine.analyze === 'function' && bazi) {
      try {
        const pAnalysis = PortraitEngine.analyze(bazi, 'zh');
        if (pAnalysis && Array.isArray(pAnalysis.patterns)) {
          patternList = pAnalysis.patterns;
        }
      } catch (e) {
        patternList = [];
      }
    }

    if (patternList.length === 0 && pattern) {
      patternList = [{ name: pattern, weightPct: 60 }];
    }

    const top3Patterns = patternList.slice(0, 3);

    // 2. Initialize raw scores for each of the 4 archetypes
    let rawScores = {
      martial: 50,
      civil: 50,
      specialist: 50,
      executive: 50
    };

    // 3. Top 3 Patterns strong directional differentiation (+35 base tilt)
    top3Patterns.forEach((pat, idx) => {
      const pName = pat.name || pat.patternName || '';
      // Rank weight: 1st pattern 1.0, 2nd 0.7, 3rd 0.45
      const rankMultiplier = idx === 0 ? 1.0 : (idx === 1 ? 0.7 : 0.45);

      if (/七杀|偏官|羊刃|阳刃|建禄|武职|突围/.test(pName)) {
        rawScores.martial += 38 * rankMultiplier;
        rawScores.executive += 12 * rankMultiplier;
      }
      if (/正官|正印|官印|合规|行政|顺德|中正/.test(pName)) {
        rawScores.civil += 38 * rankMultiplier;
        rawScores.executive += 15 * rankMultiplier;
      }
      if (/食神|伤官|偏印|枭神|技术|极客|匠心|秀气|研发/.test(pName)) {
        rawScores.specialist += 38 * rankMultiplier;
        rawScores.civil += 8 * rankMultiplier;
      }
      if (/财旺|财官|杀印相生|建极|操盘|专旺|全局|大运/.test(pName)) {
        rawScores.executive += 38 * rankMultiplier;
        rawScores.martial += 10 * rankMultiplier;
      }
    });

    // 4. Ten Gods allocation
    rawScores.martial += (godCounts.killings * 12) + (godCounts.robWealth * 10) + (godCounts.friend * 5) + (godCounts.indirectWealth * 4);
    rawScores.civil += (godCounts.officer * 12) + (godCounts.directResource * 12) + (godCounts.directWealth * 6) + (godCounts.eatingGod * 4);
    rawScores.specialist += (godCounts.eatingGod * 14) + (godCounts.hurtingOfficer * 14) + (godCounts.indirectResource * 14);

    const wealthTotal = godCounts.directWealth + godCounts.indirectWealth;
    const officerTotal = godCounts.officer + godCounts.killings;
    const resourceTotal = godCounts.directResource + godCounts.indirectResource;
    rawScores.executive += (wealthTotal * 6) + (officerTotal * 6) + (resourceTotal * 4);
    if (wealthTotal > 0 && officerTotal > 0) rawScores.executive += 16;
    if (officerTotal > 0 && resourceTotal > 0) rawScores.executive += 14;

    // 5. Day Master vigor nuance & ZiPing 100-point somatic/cognitive bandwidth
    const zScore = (bazi && bazi.zipingScore && typeof bazi.zipingScore.totalScore === 'number')
      ? bazi.zipingScore.totalScore
      : (isStrong ? 60 : 35);

    if (zScore < 45) {
      // 身弱格 / 较弱格 (<45分): 能量负荷不足以支持多线并进与全能霸主统帅，心智带宽聚焦于单一任务纵深、专业绝技与制度合规
      rawScores.executive -= 32;
      rawScores.martial -= 28;
      rawScores.specialist += 26;
      rawScores.civil += 18;
    } else if (zScore >= 60) {
      rawScores.executive += 18;
      rawScores.martial += 14;
    }

    if (isStrong) {
      rawScores.martial += 10;
      rawScores.executive += 10;
      rawScores.specialist += 4;
    } else {
      rawScores.civil += 10;
      if (godCounts.killings >= 2) rawScores.martial -= 14;
      if (wealthTotal >= 3) rawScores.executive -= 12;
    }

    const baseArchetypes = [
      {
        key: 'civil',
        nameZh: '文职 (写东西 · 研报起草 · 政策法规 · 制度合规 · 行业分析)',
        nameEn: 'Civil & Policy Research (Writing, Policy Drafting, Industry Analysis & Compliance)',
        icon: '📜',
        rawScore: rawScores.civil,
        functionalOutputsZh: '【核心产出技能：写东西 & 做分析】适合从事高阶文案起草、学术研报与制度合规：① 写东西（政策法规研究拟定、行业深度研报撰写、集团公文公报起草、国家级基金/课题申报书编写、技术白皮书撰写、商业计划书[BP]与高规格汇报材料）；② 做分析（宏观经济与产业政策解构、竞争对手深度情报透视、财务流程内控审计、法务合规风控排查）。以文字严谨度、政策敏锐度与制度护城河安身立命。',
        functionalOutputsEn: '[Core Functional Outputs: Writing & Strategic Analysis] Primed for high-level textual synthesis and institutional governance: (1) Professional Writing (regulatory policy drafting, deep industry equity/sector research, corporate communiqués, grant/fellowship proposals, technical whitepapers, executive briefings & business plans); (2) Analytical Research (macroeconomic/industrial policy synthesis, competitive landscape intelligence, internal control auditing, and legal compliance risk screening). Moat built on impeccable editorial rigor, regulatory acumen, and procedural durability.',
        coreStrengthsZh: '文字功底深厚严谨，逻辑框架清晰，对组织制度与政策红线敬畏度极高；善于在科层制与大型稳定组织内长跑，能将繁杂模糊的各方意图整理为结构严密的正式文本，抗系统风险能力极强。',
        coreStrengthsEn: 'Exceptional compositional clarity, rigorous textual discipline, and acute reverence for institutional protocols and regulatory redlines. Highly adapted to long-distance endurance within corporate bureaucracies, adept at distilling ambiguity into structured governance.',
        typicalRolesZh: '大型企业法务风控专家 (Legal Counsel)、行业分析师/智库高级研究员 (Equity/Industry Analyst)、政府与公关事务总监 (Gov Relations Director)、集团战略企划与政策研究员、高校学者/基金课题负责人、人力资源内控与组织治理专家。',
        typicalRolesEn: 'Chief Legal & Compliance Counsel, Senior Equity/Industry Research Analyst, Government Affairs Director, Enterprise Strategy & Policy Fellow, Academic Principal Investigator, Internal Audit & HR Governance Lead.',
        pitfallAlertZh: '容易陷入教条主义、文犊主义与流程拖延，在面对突发颠覆性市场危机时反应迟缓；过度追求流程合规容易自我设限，不敢主动承担模糊决策责任，易被激进的业务部门视为“阻碍增长的刹车片”。',
        pitfallAlertEn: 'Prone to procedural paralysis, excessive risk aversion, and bureaucratic pedantry; may react sluggishly during turbulent market disruptions; risks being marginalized by frontline business units as a growth bottleneck.',
        breakthroughTacticZh: '以“风控前置赋能”打破刹车片定位：把自己的法律、合规与文笔功底，转化为“帮助业务团队安全抢跑、合规规避数百万元监管罚款、高效率拿下拉拢官方牌照”的促增长武器；考取含金量最高的专业执业证书，以权威背书建立不可动摇的话语权。',
        breakthroughTacticEn: 'Reposition compliance into an active business enabler: use regulatory mastery and elite drafting to unlock new market licenses, legally pre-empt million-dollar regulatory penalties, and empower business expansion safely; cement authority through top-tier professional certifications.'
      },
      {
        key: 'martial',
        nameZh: '武职 (打硬仗 · 狼性商务 · 地推铁军 · 现场统筹 · 危机排障)',
        nameEn: 'Martial & Frontline Operations (B2B Dealmaking, Field Blitz, Expansion & Crisis PMO)',
        icon: '⚔️',
        rawScore: rawScores.martial,
        functionalOutputsZh: '【核心产出技能：打硬仗 & 商务突击】适合从事直面残酷竞争的攻坚开拓：① 打硬仗（战区级B2B大客户销售攻坚、多方商务博弈谈判、代理商与地推突击铁军统领、海外新兴市场0-1拓荒破冰、抢占濒临丢失的核心大客户）；② 现场统筹（特种重大工程极限交付PMO、供应链断供突发排障抢险、跨战线拉通抢跑）。以攻坚战功、抢单速度与抗压破局力安身立命。',
        functionalOutputsEn: '[Core Functional Outputs: Frontline Dealmaking & Crisis Breakthrough] Primed for high-pressure market combat: (1) High-Stakes Dealmaking (regional enterprise B2B sales blitz, tough commercial negotiations, channel & field sales army leadership, 0-to-1 overseas market pioneering, salvaging high-risk strategic accounts); (2) Turnaround PMO (mission-critical project delivery under impossible deadlines, emergency supply-chain continuity, cross-departmental command). Moat built on verifiable revenue conquest, turnaround velocity, and unshakeable psychological toughness.',
        coreStrengthsZh: '狼性进攻力极强、敢打硬仗、抗压耐受度高、能在混乱恶性竞争中带队突围；雷厉风行，不拖泥带水；在生死存亡的至暗时刻具备极强的军心稳定力与决胜执行力。',
        coreStrengthsEn: 'Relentless frontline aggression, unflinching courage in uphill battles, extraordinary crisis endurance, and the rare ability to lead teams through hyper-competitive fog. Decisive, swift, and commanding when stakes are highest.',
        typicalRolesZh: '战区大客户商务总监 (Enterprise Sales Director)、地推突击铁军统领 (Head of Field Operations)、重大工程项目PMO总指挥 (Turnaround PMO Director)、海外全球化业务开拓先锋 (Global Expansion Lead)、应急处突与危机公关总管。',
        typicalRolesEn: 'Enterprise Sales Director (Strategic Accounts), Head of Field Operations & Channel Blitz, Mission-Critical Turnaround PMO Director, Overseas Market Expansion Head, Crisis Intervention & Emergency Operations Lead.',
        pitfallAlertZh: '脾气过刚过急，对内部团队要求过于严酷，易造成下属高流动率与团队恐惧感；身弱逢杀旺岁运容易引发身心严重过劳、与同级横向部门激烈冲突，甚至树敌过多遭暗中掣肘。',
        pitfallAlertEn: 'Hyper-aggressive cadence and abrasive command style risk burning out subordinates and alienating lateral peers; during weak transit years, severe risk of burnout, cardiovascular strain, and sabotage by internal rivals.',
        breakthroughTacticZh: '坚持“以印化煞”：主动拉入法务中台、财务总监与长辈军师充当身边的降温阀门与智囊团；将狂暴攻击力全部用于向外部市场撕咬订单与抢占市场份额，在内部则论功行赏、广施恩德、温润护持，实现“外威内仁”的大将之风。',
        breakthroughTacticEn: 'Harness Resource De-escalation: embed seasoned legal, financial, and executive mentors as thermal regulators; direct 100% of raw aggression outward against market competitors, while cultivating gracious generosity and emotional safety internally to become a truly venerated general.'
      },
      {
        key: 'specialist',
        nameZh: '技术人员 (写代码 · 深度研发 · 算法架构 · 数据量化分析 · 系统工程)',
        nameEn: 'Specialist & Engineering (Coding, Deep Architecture, AI/Algorithms & Quant Analytics)',
        icon: '💻',
        rawScore: rawScores.specialist,
        functionalOutputsZh: '【核心产出技能：写代码 & 做分析】适合从事高门槛工程落地与深度技术研发：① 写代码（后端高并发微服务系统开发、全栈敏捷研发、分布式底层架构、AI大模型微调与算法优化、量化交易策略编写、底层内核与高性能调优）；② 做分析（海量数据清洗与归因建模、系统性能瓶颈剖析、量化风险敞口回测、技术债务治理）。以代码质量、系统高可用性(SLA 99.99%)与不可替代的技术壁垒安身立命。',
        functionalOutputsEn: '[Core Functional Outputs: Coding & Quantitative Analysis] Primed for high-barrier technical engineering: (1) Coding & Implementation (distributed backend systems, high-concurrency pipelines, full-stack development, AI/LLM fine-tuning, quant algorithmic trading, kernel & performance optimization); (2) Quantitative Analytics (big data telemetry attribution, system bottleneck profiling, risk exposure backtesting, algorithmic optimization). Moat built on clean code, 99.99% system availability, and insurmountable technical competence.',
        coreStrengthsZh: '对底层技术原理与工程逻辑具有极高敏锐度，具备强悍的单点技术钻研心流；对复杂系统抽象能力极强，不仰仗复杂办公室政治，靠无可替代的技术壁垒与扎实的工程交付赢得全场尊重。',
        coreStrengthsEn: 'Deep structural intellect and immaculate mathematical logic, capable of protracted cognitive flow states in root engineering. Indifferent to political posturing; compounds authority entirely on verifiable engineering excellence, modular abstractions, and zero-defect deployments.',
        typicalRolesZh: '首席系统架构师 (Chief Architect)、资深后端/全栈软件工程师 (Senior SWE)、AI算法工程师/大模型科学家 (AI/ML Scientist)、量化策略开发工程师 (Quant Developer)、底层操作系统/云原生专家、网络安全渗透与红蓝对抗专家、大数据平台架构师。',
        typicalRolesEn: 'Chief Systems Architect, Senior Software Engineer (Distributed Systems/Full-Stack), AI/ML Research Scientist, Quantitative Developer, Cloud-Native Infrastructure Engineer, Cybersecurity Penetration Specialist, Big Data Platform Lead.',
        pitfallAlertZh: '容易陷入“技术完美主义自嗨”，过度追求架构优雅而忽视业务商业闭环与商业ROI；沟通易出现“极客防御心理”，在面临非技术维度的职场争夺、部门重组或向上管理时缺乏自我保护心智。',
        pitfallAlertEn: 'Vulnerable to perfectionist over-engineering without commercial ROI alignment; prone to defensive tech-centric communication; easily blindsided during departmental reorganizations or non-technical corporate turf battles.',
        breakthroughTacticZh: '建立商业价值翻译能力：把深奥的算法优化与重构收益，主动折算为“降低服务器成本XX%、提升系统吞吐量XX倍、赋能业务直接增收XX万”的可量化商业指标向高层汇报；从“被动接需求的码农”跃迁为“用技术卡住业务咽喉的技术合伙人”。',
        breakthroughTacticEn: 'Master business translation: translate arcane technical refactoring into concrete dollar-value ROI (e.g. "reduced latency by 45%, slashed cloud compute costs by $1.8M annually, unlocked 3x query throughput"); transition from a passive task executor to an indispensable technical partner who controls the enterprise engineering lifeline.'
      },
      {
        key: 'executive',
        nameZh: '高管 / 统帅 (操盘统帅 · 损益全局 · 资源调配 · 组织治理 · 战略拍板)',
        nameEn: 'Executive & General Manager (P&L Ownership, Strategic Allocation & Organizational Governance)',
        icon: '👑',
        rawScore: rawScores.executive,
        functionalOutputsZh: '【核心产出技能：操盘统帅 & 全局损益(P&L)统筹】适合承担终局商业责任与战略总指挥：① 全局操盘（事业部/公司独立核算损益表P&L兜底、年度资本与资源流动性配置、商业变现路径与重大战略战役拍板）；② 组织治理（顶层合伙人股权架构设计、关键高管招聘与分权激励考核、企业文化建设与跨战线利益博弈平衡）。以商业盈利结果、组织凝聚力与战略定力安身立命。',
        functionalOutputsEn: '[Core Functional Outputs: Executive Stewardship & P&L Accountability] Primed for sovereign governance and final business accountability: (1) Panoramic P&L Ownership (end-to-end profit and loss stewardship, capital liquidity allocation, commercial model innovation, high-stakes strategic bets); (2) Organizational Governance (executive recruitment, cap table & equity partnership structuring, incentive calibration, corporate culture & cross-functional harmony). Moat built on sustainable bottom-line profitability, organizational cohesion, and strategic foresight.',
        coreStrengthsZh: '兼具高维商业嗅觉与组织治理手腕，善于在多方利益博弈中寻找最优平衡点；懂得知人善任、分权授权与利益分配，具备泰山崩于前而色不变的战略定力，能独挑大梁掌舵全局损益。',
        coreStrengthsEn: 'Dual mastery of commercial capital appreciation and complex organizational governance; supreme poise under volatility, master of high-stakes political equilibrium, strategic delegation, and sovereign bottom-line accountability.',
        typicalRolesZh: '独立核算事业部总经理 (General Manager)、企业联合创始人/CEO/COO、跨国集团大区总裁 (Regional Managing Director)、产业投资控股合伙人 (Operating Partner)、大型综合业务操盘手。',
        typicalRolesEn: 'Business Unit General Manager (P&L Head), Corporate Co-Founder / CEO / COO, Multinational Regional Managing Director, Private Equity Operating Partner, Group Strategic Operating Officer.',
        pitfallAlertZh: '决策责任重大，容错率极低；最忌在身弱逢财多之岁运盲目扩张过多战线、分散现金流储备；若合伙人团队与高管层未设立防背叛契约机制，易遭心腹骨干带走核心客户或资产被掏空。',
        pitfallAlertEn: 'Zero margin for strategic miscalculation; disastrous vulnerability during weak transits if overextending liquidity across too many speculative fronts; catastrophe if lacking binding non-compete/anti-embezzlement covenants with core partners.',
        breakthroughTacticZh: '抓大放小，建立刚性治理契约：把80%心力聚焦在“商业模式护城河、现金流生命线、核心关键人才招聘与合伙人退出机制”四件事上，其余事务全权下放；设立不可逾越的财务审计红线，防患于未然。',
        breakthroughTacticEn: 'Ruthless prioritization and ironclad covenants: focus 80% of cognitive bandwidth strictly on "business model moat, runway liquidity solvency, elite talent recruitment, and partner buy-sell clauses"; delegate all tactical operations while enforcing non-negotiable financial audits.'
      }
    ];

    // Expose canonical template
    CareerEngine.ECOLOGICAL_ARCHETYPES = baseArchetypes.map(a => ({ ...a }));

    // Sort by rawScore descending
    baseArchetypes.sort((a, b) => b.rawScore - a.rawScore);

    // 6. Direct framing and strict score differentiation:
    // Rank 0: 最适合 · 首席天命主场 (93 ~ 97分)
    // Rank 1: 其次适合 · 次席进阶主场 (78 ~ 85分)
    // Rank 2: 发展性可塑 · 辅助协同方向 (60 ~ 69分)
    // Rank 3: 耗能避让区 · 慎入高摩擦场景 (35 ~ 48分)
    const tierDefs = [
      {
        baseScore: 95,
        scoreRange: [93, 97],
        zh: '最适合 · 首席天命主场',
        en: 'Optimal Fit · Prime Natural Calling',
        tagZh: '最适合',
        tagEn: 'Optimal Fit',
        badgeClass: 'bg-emerald-950/60 text-emerald-300 border-emerald-500/50'
      },
      {
        baseScore: 82,
        scoreRange: [78, 85],
        zh: '其次适合 · 次席进阶主场',
        en: 'Secondary Fit · Viable Advancement Track',
        tagZh: '其次适合',
        tagEn: 'Secondary Fit',
        badgeClass: 'bg-amber-950/60 text-amber-300 border-amber-500/50'
      },
      {
        baseScore: 65,
        scoreRange: [60, 69],
        zh: '发展性可塑 · 辅助协同方向',
        en: 'Developmental · Collaborative Support Track',
        tagZh: '发展性可塑',
        tagEn: 'Developmental',
        badgeClass: 'bg-blue-950/60 text-blue-300 border-blue-500/50'
      },
      {
        baseScore: 42,
        scoreRange: [35, 48],
        zh: '耗能避让区 · 慎入高摩擦场景',
        en: 'High Friction · High Energy Drain Zone',
        tagZh: '耗能避让区',
        tagEn: 'High Friction',
        badgeClass: 'bg-rose-950/60 text-rose-300 border-rose-500/50'
      }
    ];

    const finalArchetypes = baseArchetypes.map((arch, rank) => {
      const tier = tierDefs[rank];
      let fitScore = tier.baseScore;
      if (rank === 0) {
        const gap = Math.min(2, Math.max(-2, Math.round((arch.rawScore - baseArchetypes[1].rawScore) / 15)));
        fitScore = Math.max(tier.scoreRange[0], Math.min(tier.scoreRange[1], 95 + gap));
      } else if (rank === 1) {
        const gap = Math.min(3, Math.max(-3, Math.round((arch.rawScore - baseArchetypes[2].rawScore) / 12)));
        fitScore = Math.max(tier.scoreRange[0], Math.min(tier.scoreRange[1], 82 + gap));
      } else if (rank === 2) {
        const gap = Math.min(3, Math.max(-3, Math.round((arch.rawScore - baseArchetypes[3].rawScore) / 10)));
        fitScore = Math.max(tier.scoreRange[0], Math.min(tier.scoreRange[1], 65 + gap));
      } else {
        fitScore = Math.max(tier.scoreRange[0], Math.min(tier.scoreRange[1], Math.round(38 + Math.min(8, arch.rawScore / 15))));
      }

      return {
        ...arch,
        fitScore,
        grade: {
          zh: tier.zh,
          en: tier.en,
          tagZh: tier.tagZh,
          tagEn: tier.tagEn,
          badgeClass: tier.badgeClass
        }
      };
    });

    return finalArchetypes;
  }

  /**
   * 4. 时空财运与事业窗口推演 (Dynamic Timing of Career & Wealth)
   */
  static computeTimingTrajectory(bazi, luck, effYear, realAge, dm, isStrong, godCounts) {
    const GOD_EN_MAP = {
      '比肩': 'Friend', '劫财': 'Rob Wealth', '食神': 'Eating God', '伤官': 'Hurting Officer',
      '偏财': 'Indirect Wealth', '正财': 'Direct Wealth', '七杀': 'Seven Killings', '偏官': 'Seven Killings',
      '正官': 'Direct Officer', '偏印': 'Indirect Resource', '枭神': 'Indirect Resource', '正印': 'Direct Resource'
    };

    // Current Decade (read actual text and stemGod from LuckEngine)
    const activeDecade = (luck && luck.activeDecade) || null;
    const decadeGanzhi = (activeDecade && (activeDecade.text || activeDecade.ganzhi)) || '庚寅';
    const decadeGod = (activeDecade && (activeDecade.stemGod || activeDecade.tenGod)) || CareerEngine.getTenGod(dm, decadeGanzhi[0]);
    const decadeGodEn = (typeof I18N !== 'undefined' && typeof I18N.getGod === 'function')
      ? I18N.getGod(decadeGod, 'en')
      : (activeDecade && (activeDecade.stemGodEn || activeDecade.tenGodEn)) || GOD_EN_MAP[decadeGod] || 'Seven Killings';

    // Current Annual (read actual text and stemGod from LuckEngine)
    const activeAnnual = (luck && luck.activeAnnual) || null;
    const annualGanzhi = (activeAnnual && (activeAnnual.text || activeAnnual.ganzhi)) || '丙午';
    const annualGod = (activeAnnual && (activeAnnual.stemGod || activeAnnual.tenGod)) || CareerEngine.getTenGod(dm, annualGanzhi[0]);
    const annualGodEn = (typeof I18N !== 'undefined' && typeof I18N.getGod === 'function')
      ? I18N.getGod(annualGod, 'en')
      : (activeAnnual && (activeAnnual.stemGodEn || activeAnnual.tenGodEn)) || GOD_EN_MAP[annualGod] || 'Eating God';

    // Zhou Yi Hexagram Calculation (read real annual hexagram and tianJi)
    let annualHex = null;
    if (typeof IChingEngine !== 'undefined' && typeof IChingEngine.calculateFourPillarsHexagrams === 'function') {
      try {
        const hexRes = IChingEngine.calculateFourPillarsHexagrams(bazi, realAge, effYear);
        const zn = hexRes && (hexRes.zhiNian || hexRes.zhiNianHex);
        const h = zn && (zn.hexagram || zn);
        const tj = zn && (zn.tianJi || hexRes.zhiNianTJ);
        if (h && h.nameZh) {
          const hexNum = h.number || 1;
          const charSym = (hexNum >= 1 && hexNum <= 64) ? String.fromCodePoint(0x4DC0 + hexNum - 1) : '䷀';
          annualHex = {
            number: hexNum,
            nameZh: h.nameZh,
            nameEn: h.nameEn || 'The Creative',
            pinyin: h.pinyin || '',
            character: charSym,
            decisionZh: (tj && tj.liuNianZh) || h.judgmentZh || '当以中正之德守常蓄力，顺应天道节律，进退有据。',
            decisionEn: (tj && tj.liuNianEn) || h.judgmentEn || 'Anchor to moral equilibrium and strategic patience, attuning bold action to cosmic timing.'
          };
        }
      } catch (e) {}
    }

    if (!annualHex) {
      annualHex = {
        number: 1,
        nameZh: '乾为天',
        nameEn: 'The Creative (Heaven)',
        pinyin: 'Qián',
        character: '䷀',
        decisionZh: '天行健，君子以自强不息。飞龙在天，利见大人。',
        decisionEn: 'Heaven moves with tireless vigor; the noble person perseveres relentlessly without ceasing.'
      };
    }

    // Direct Wealth (正财) vs Indirect Wealth (偏财) analysis
    let directWealthScore = 70;
    let indirectWealthScore = 65;
    if (isStrong) {
      directWealthScore += 12;
      indirectWealthScore += 16;
    } else {
      directWealthScore += 5;
      indirectWealthScore -= 10;
    }

    const dGod = String(decadeGod || '');
    const aGod = String(annualGod || '');

    if (dGod.includes('财')) {
      directWealthScore += 8;
      indirectWealthScore += 10;
    } else if (dGod.includes('劫')) {
      directWealthScore -= 4;
      indirectWealthScore -= 10;
    }

    if (aGod.includes('财')) {
      directWealthScore += 10;
      indirectWealthScore += 12;
    } else if (aGod.includes('劫')) {
      directWealthScore -= 5;
      indirectWealthScore -= 12;
    }
    if (aGod.includes('官') || aGod.includes('印')) {
      directWealthScore += 12;
    }
    if (aGod.includes('食') || aGod.includes('伤')) {
      directWealthScore += 6;
      indirectWealthScore += 12;
    }

    if (godCounts && godCounts.directWealth > 0) directWealthScore += Math.min(8, godCounts.directWealth * 3);
    if (godCounts && godCounts.indirectWealth > 0) indirectWealthScore += Math.min(8, godCounts.indirectWealth * 3);
    if (godCounts && godCounts.robWealth >= 2) indirectWealthScore -= 8;

    directWealthScore = Math.max(45, Math.min(96, directWealthScore));
    indirectWealthScore = Math.max(35, Math.min(95, indirectWealthScore));

    const decadeGanzhiEn = CareerEngine.getGanzhiEn(decadeGanzhi);
    const annualGanzhiEn = CareerEngine.getGanzhiEn(annualGanzhi);

    const directWealthAnalysisZh = directWealthScore >= 75
      ? `【主业薪酬 · ${directWealthScore}分稳健高光】：大运【${decadeGanzhi}】（${decadeGod}）与流年【${annualGanzhi}】（${annualGod}）形成主业护持，主业岗位稳定性高，是向领导层申请绩效晋级、加薪谈判的黄金窗口期，踏实交付即能换来确定性的现金流增长。`
      : `【主业薪酬 · ${directWealthScore}分守成固本】：当前大运【${decadeGanzhi}】与流年【${annualGanzhi}】主业面临结构性考核调整或组织重组阵痛。建议收起锋芒，不争一时职位虚名，扎实守住岗位基本盘，避免盲目裸辞。`;

    const directWealthAnalysisEn = directWealthScore >= 75
      ? `[Direct Wealth (Base Salary & Career Promotion: Score ${directWealthScore}/100 - Strong High-Growth Window)]: Decade [${decadeGanzhiEn}] (${decadeGodEn}) and Annual Transit [${annualGanzhiEn}] (${annualGodEn}) consolidate career stability. A prime strategic window to negotiate grade advancement and merit compensation increases based on measurable deliveries.`
      : `[Direct Wealth (Base Salary & Career Promotion: Score ${directWealthScore}/100 - Defensive Consolidation)]: Decade [${decadeGanzhiEn}] and Annual Transit [${annualGanzhiEn}] face institutional restructuring or revised KPI scrutiny. Maintain steady discipline, preserve your core post, and resist impulsive job switches.`;

    const indirectWealthAnalysisZh = indirectWealthScore >= 75
      ? `【副业投资 · ${indirectWealthScore}分适度进取】：偏财气机生旺，具备开展副业咨询、知识IP变现、技术出海或稳健股权投资的契机。可投入不超过闲置资金30%的轻资产试水，善用个人专业信息差获利。`
      : `【副业投资 · ${indirectWealthScore}分严防破耗】：偏财气机受制或受劫财冲克，严禁参与高杠杆借贷、击鼓传花式虚拟资产炒作或无资质的民间合伙借贷，防备“比劫分财”导致资金链断裂。`;

    const indirectWealthAnalysisEn = indirectWealthScore >= 75
      ? `[Indirect Wealth (Side-Hustles & Investment Yields: Score ${indirectWealthScore}/100 - Calculated Expansion)]: Secondary capital engines are stimulated. Favorable for launching consulting advisories, digital IP productization, or disciplined venture investments capped at 30% of liquid reserves.`
      : `[Indirect Wealth (Side-Hustles & Investment Yields: Score ${indirectWealthScore}/100 - High-Risk Defense)]: Speculative channels face intense impedance and peer plunder risks. Strictly avoid high-leverage trading, unvetted angel syndicates, or cosigning personal loans to prevent sudden insolvency.`;

    // 12 Monthly transits tactical roadmap
    const monthlyRoadmap = this.computeMonthlyRoadmap(bazi, effYear, dm, isStrong);

    return {
      decadeGanzhi,
      decadeGanzhiEn,
      decadeGod,
      decadeGodEn,
      annualGanzhi,
      annualGanzhiEn,
      annualGod,
      annualGodEn,
      annualHex,
      directWealthScore,
      indirectWealthScore,
      directWealthAnalysisZh,
      directWealthAnalysisEn,
      directWealthEvaluationZh: directWealthAnalysisZh,
      directWealthEvaluationEn: directWealthAnalysisEn,
      indirectWealthAnalysisZh,
      indirectWealthAnalysisEn,
      indirectWealthEvaluationZh: indirectWealthAnalysisZh,
      indirectWealthEvaluationEn: indirectWealthAnalysisEn,
      annualHexTacticZh: (annualHex && annualHex.decisionZh) || '顺应天道节律，进退有据。',
      annualHexTacticEn: (annualHex && annualHex.decisionEn) || 'Align actions with timing and maintain strategic patience.',
      monthlyRoadmap
    };
  }

  /**
   * Generates 12 Months tactical roadmap for working professionals
   */
  static computeMonthlyRoadmap(bazi, effYear, dm, isStrong) {
    const STEMS = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
    const BRANCHES = ['寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥', '子', '丑'];
    const MONTH_SOLAR_SPANS = [
      { zh: '2月4日 - 3月4日 (立春·雨水)', en: 'Feb 4 - Mar 4 (Spring Begins)' },
      { zh: '3月5日 - 4月4日 (惊蛰·春分)', en: 'Mar 5 - Apr 4 (Awakening Insects)' },
      { zh: '4月5日 - 5月4日 (清明·谷雨)', en: 'Apr 5 - May 4 (Clear & Bright)' },
      { zh: '5月5日 - 6月4日 (立夏·小满)', en: 'May 5 - Jun 4 (Summer Begins)' },
      { zh: '6月5日 - 7月6日 (芒种·夏至)', en: 'Jun 5 - Jul 6 (Grain in Ear)' },
      { zh: '7月7日 - 8月6日 (小暑·大暑)', en: 'Jul 7 - Aug 6 (Slight Heat)' },
      { zh: '8月7日 - 9月6日 (立秋·处暑)', en: 'Aug 7 - Sep 6 (Autumn Begins)' },
      { zh: '9月7日 - 10月7日 (白露·秋分)', en: 'Sep 7 - Oct 7 (White Dew)' },
      { zh: '10月8日 - 11月6日 (寒露·霜降)', en: 'Oct 8 - Nov 6 (Cold Dew)' },
      { zh: '11月7日 - 12月6日 (立冬·小雪)', en: 'Nov 7 - Dec 6 (Winter Begins)' },
      { zh: '12月7日 - 1月4日 (大雪·冬至)', en: 'Dec 7 - Jan 4 (Great Snow)' },
      { zh: '1月5日 - 2月3日 (小寒·大寒)', en: 'Jan 5 - Feb 3 (Slight Cold)' }
    ];

    // Five Tigers Seek Stem (五虎遁元推算首月天干)
    // 甲己之年丙作首，乙庚之岁戊为头，丙辛之岁寻庚上，丁壬壬位顺行流，戊癸何方法？甲寅好追求。
    const annualStem = STEMS[(effYear - 4 + 60000) % 10];
    const firstMonthStemMap = {
      '甲': '丙', '己': '丙',
      '乙': '戊', '庚': '戊',
      '丙': '庚', '辛': '庚',
      '丁': '壬', '壬': '壬',
      '戊': '甲', '癸': '甲'
    };
    const firstStem = firstMonthStemMap[annualStem] || '丙';
    const firstStemIdx = STEMS.indexOf(firstStem);

    const roadmap = [];
    for (let i = 0; i < 12; i++) {
      const b = BRANCHES[i];
      const s = STEMS[(firstStemIdx + i) % 10];
      const ganzhi = s + b;

      // Ten god of month stem relative to Day Master (robust self-contained derivation)
      const god = CareerEngine.getTenGod(dm, s);
      const GOD_EN_MAP = {
        '比肩': 'Friend', '劫财': 'Rob Wealth', '食神': 'Eating God', '伤官': 'Hurting Officer',
        '偏财': 'Indirect Wealth', '正财': 'Direct Wealth', '七杀': 'Seven Killings', '偏官': 'Seven Killings',
        '正官': 'Direct Officer', '偏印': 'Indirect Resource', '枭神': 'Indirect Resource', '正印': 'Direct Resource'
      };
      const godEn = (typeof I18N !== 'undefined' && typeof I18N.getGod === 'function')
        ? I18N.getGod(god, 'en')
        : (GOD_EN_MAP[god] || 'Direct Officer');

      let actionTagZh = '';
      let actionTagEn = '';
      let adviceZh = '';
      let adviceEn = '';
      let badgeColor = 'emerald';

      if (god.includes('官') || god.includes('杀')) {
        actionTagZh = '体制加权 · 向上对齐';
        actionTagEn = 'Governance & Alignment';
        adviceZh = '高层领导注意力聚焦之月，工作紧密围绕上司核心OKR推进，汇报突出确定性成果与合规风控。';
        adviceEn = 'Superior scrutiny peaks: align closely with executive priorities; highlight certainty and compliance in updates.';
        badgeColor = 'purple';
      } else if (god.includes('财')) {
        actionTagZh = '绩效变现 · 商务攻坚';
        actionTagEn = 'Commercial Execution';
        adviceZh = '业务转化与财富变现黄金期，适合全力冲刺季度业绩指标，跟进关键大客户签约与回款。';
        adviceEn = 'Prime revenue and commission conversion window: accelerate deal closings and quarterly KPI milestones.';
        badgeColor = 'amber';
      } else if (god.includes('食') || god.includes('伤')) {
        actionTagZh = '才华吐秀 · 产品突围';
        actionTagEn = 'Innovation & Product Launch';
        adviceZh = '创意灵感迸发之月，适合发布新产品、打磨设计方案或进行公开演讲分享，但需防言多必失。';
        adviceEn = 'Creative flow peaks: ideal for product releases and strategic pitches; practice tactical discretion in meetings.';
        badgeColor = 'sky';
      } else if (god.includes('印')) {
        actionTagZh = '深耕学习 · 资质背书';
        actionTagEn = 'Credentials & Upskilling';
        adviceZh = '利于考取行业证书、深造进修或申请内部战略导师支持；多向资深元老请教，借力长辈声望。';
        adviceEn = 'Favorable for certification examinations, formal training, and securing patronage from senior mentors.';
        badgeColor = 'emerald';
      } else {
        actionTagZh = '同僚连横 · 慎防争财';
        actionTagEn = 'Peer Synergy & Boundary Defense';
        adviceZh = '团队协同频繁，需与战友抱团取暖；但涉及奖金分配与项目归属时必须落实系统留痕，防他人抢功。';
        adviceEn = 'Intense cross-team coordination: collaborate actively but lock in project attribution in writing to prevent credit-stealing.';
        badgeColor = 'rose';
      }

      roadmap.push({
        monthIndex: i + 1,
        ganzhi,
        ganzhiEn: CareerEngine.getGanzhiEn(ganzhi),
        stem: s,
        branch: b,
        god,
        godEn,
        solarSpanZh: MONTH_SOLAR_SPANS[i].zh,
        solarSpanEn: MONTH_SOLAR_SPANS[i].en,
        actionTagZh,
        actionTagEn,
        adviceZh,
        adviceEn,
        badgeColor
      });
    }

    return roadmap;
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CareerEngine };
}
if (typeof window !== 'undefined') {
  window.CareerEngine = CareerEngine;
}
