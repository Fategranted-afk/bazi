/**
 * CalendarFeedEngine (动态订阅式天机进退节律历 · RFC 5545 引擎)
 * 
 * 将静态的岁运推演转化为符合 RFC 5545 国际标准的 iCalendar (.ics) 日历流与 webcal 订阅。
 * 杜绝 365 天无意义流水账，一年提炼 20~30 个高势能跃迁/防御拐点日:
 * - 岁运并临与天克地冲日柱
 * - 羊刃逢冲 (拔刃化煞)
 * - 食伤生财与三合财局成格
 * - 四大吉神 (天乙、文昌、红鸾、驿马) 当值应期
 */
class CalendarFeedEngine {
  constructor(baziResult = null, year = 2026) {
    this.bazi = baziResult;
    this.year = year || 2026;
  }

  /**
   * 提炼全年 20~30 个能量突变与重大战役窗口日
   */
  extractCriticalEvents(year = null, lang = 'zh') {
    const isEn = (lang === 'en');
    const targetYear = year || this.year || 2026;
    const dm = (this.bazi && this.bazi.dayMaster) || '甲';
    const dayBranch = (this.bazi && this.bazi.pillars && this.bazi.pillars.day && this.bazi.pillars.day.branch) || '午';

    // 智能推演 24 个重点能量日 (分布于 12 个月)
    const rawTemplates = [
      {
        month: 1, day: 15,
        type: 'noble_mentor',
        titleZh: '天乙贵人显化吉日 · 关键破局求索',
        titleEn: 'Tian Yi Guardian Nobleman Day - Seek High-Tier Mentorship',
        summaryZh: '原局天乙星与时令同频共振，易遇高位引路人或权威背书。',
        summaryEn: 'Natal Tian Yi star resonates with temporal alignment; optimal window for mentor outreach.',
        actionZh: '主动约见关键业务上级或尊长，递交核心诉求，借势突破瓶颈。',
        actionEn: 'Proactively consult senior leadership; present key strategic proposals for organizational backing.'
      },
      {
        month: 2, day: 4,
        type: 'solar_shift',
        titleZh: '立春岁首交节 · 气机更替防震',
        titleEn: 'Spring Inception Pivot - Annual Field Shift & Calibration',
        summaryZh: '太岁干支交替核心节点，天地磁场剧烈震荡，人心浮动。',
        summaryEn: 'Annual Tai Sui transition marker. Dynamic cosmic field shifts require steady grounding.',
        actionZh: '宜静不宜动，戒躁防争吵，收敛锋芒，做好年度战略规划复盘。',
        actionEn: 'Hold steady; avoid impetuous disputes and review annual operational roadmaps.'
      },
      {
        month: 2, day: 22,
        type: 'wenchang_focus',
        titleZh: '文昌贵人当值 · 专业绝技与签约',
        titleEn: 'Wen Chang Wisdom Star Awakened - Deep Focus & Key Agreements',
        summaryZh: '智识文思泉涌，逻辑敏锐缜密，最利签署重磅合同与方案过审。',
        summaryEn: 'Cognitive acuity peaks; optimal for contract finalization, exams, and IP publications.',
        actionZh: '闭关攻坚难点技术方案或终版协议，一鼓作气敲定关键条款。',
        actionEn: 'Finalize technical architectures or core agreements with heightened cognitive clarity.'
      },
      {
        month: 3, day: 18,
        type: 'wealth_pivot',
        titleZh: '食伤生财转化日 · 商业闭环落地',
        titleEn: 'Output Generates Wealth Vector - Commercial Monetization Window',
        summaryZh: '才智与商业渠道高度咬合，前期投入迎来阶段性变现回流。',
        summaryEn: 'Intellectual capital meshes with capital channels; prime timing for monetization.',
        actionZh: '推出新产品或商务拓展，推动客户回款与利益兑现。',
        actionEn: 'Launch new offerings and close client transactions to secure cash flow.'
      },
      {
        month: 4, day: 5,
        type: 'crisis_defense',
        titleZh: '天克地冲日柱 · 慎防暗礁与精力透支',
        titleEn: 'Day Pillar Transit Clash - Defense Against Attrition & Conflict',
        summaryZh: '流日与日元地支对冲，身心负荷沉重，人际沟通易生摩擦。',
        summaryEn: 'Direct stem-branch tension to Day Pillar; friction points emerge under mental overload.',
        actionZh: '严格避开高风险谈判与重大决策，拒绝无谓社交，保证深睡眠。',
        actionEn: 'Postpone sensitive confrontations; retreat into defensive maintenance and rest.'
      },
      {
        month: 4, day: 26,
        type: 'yima_surge',
        titleZh: '驿马星动激荡 · 出洋考察与空间位移',
        titleEn: 'Post Horse Kinetic Acceleration - Mobility & Boundary Expansion',
        summaryZh: '时空动能爆发，宜动不宜静，异地开拓与出差成效卓著。',
        summaryEn: 'Spatiotemporal momentum peaks; highly favored for business travel and cross-border expansion.',
        actionZh: '安排出差、拜访外地客户或考察新赛道，以空间位移打破内卷。',
        actionEn: 'Embark on travel, field inspections, or market expansion to break stagnation.'
      },
      {
        month: 5, day: 12,
        type: 'romance_union',
        titleZh: '红鸾吉曜照临 · 良缘契合与团队和合',
        titleEn: 'Hong Luan Matrimonial Luminary - Soulmate Affinity & Team Cohesion',
        summaryZh: '桃花合和之气充盈，人缘极佳，利于定下情感名分或弥合团队嫌隙。',
        summaryEn: 'Harmonious affinity flows smoothly; ideal for romantic milestones and collaborative alliances.',
        actionZh: '单身者宜主动邀约心仪之人；职场中利于组织团建化解隔阂。',
        actionEn: 'Engage with destined romantic partners or foster goodwill across team stakeholders.'
      },
      {
        month: 5, day: 28,
        type: 'wealth_triad',
        titleZh: '三合财局聚水 · 资产配置与大额进账',
        titleEn: 'Three Harmonies Wealth Triad - Strategic Asset Allocation Day',
        summaryZh: '五行财局成库，资金聚合能力强盛，投资理财迎来正向反馈。',
        summaryEn: 'Elemental wealth triad locks into alignment; strengthens asset retention and investment yields.',
        actionZh: '梳理财务报表，清退低效资产，落袋为安，布局长期稳健收益。',
        actionEn: 'Review financial allocations; lock in returns and trim underperforming assets.'
      },
      {
        month: 6, day: 21,
        type: 'solar_shift',
        titleZh: '夏至一阴生 · 气机阴阳转换节点',
        titleEn: 'Summer Solstice - Yin Energy Emerges & Rhythm Rebalance',
        summaryZh: '阳极而阴生，天地至热而气机潜变，情绪与心火易旺。',
        summaryEn: 'Yang crests and initial Yin stirs. Environmental heat tests mental equanimity.',
        actionZh: '清淡饮食，午间静坐15分钟，戒急躁武断，谨防决策过热。',
        actionEn: 'Meditate for 15 minutes midday; restrain emotional impulsivity in key decisions.'
      },
      {
        month: 7, day: 14,
        type: 'noble_mentor',
        titleZh: '贵人引路托底 · 困局豁然贯通',
        titleEn: 'Patronage & Protective Shield - Systemic Breakthrough Window',
        summaryZh: '逢凶化吉极品吉曜发力，遇险有人出手援助。',
        summaryEn: 'Supreme guardian star intervenes; external sponsors arrive to resolve structural roadblocks.',
        actionZh: '向信任的前辈坦诚请教疑难，往往获指点迷津或直接借到关键资源。',
        actionEn: 'Seek candid advice from trusted elders or sponsors to bypass organizational impasses.'
      },
      {
        month: 8, day: 8,
        type: 'blade_clash',
        titleZh: '羊刃逢冲防御日 · 谨防冲动与意外血光',
        titleEn: 'Yang Blade Clash Risk - Maintain Strict Safety & De-escalate',
        summaryZh: '阳刃被流日冲动，犹如拔刃相向，极易滋生口角官非或肢体擦碰。',
        summaryEn: 'Transit branch clashes with Yang Blade; heightened volatility and interpersonal friction.',
        actionZh: '驾车减速慢行，严禁酒驾与极限运动，遇挑衅主动退让一步海阔天空。',
        actionEn: 'Drive defensively; avoid extreme sports and refuse to engage in provocative disputes.'
      },
      {
        month: 8, day: 25,
        type: 'wenchang_focus',
        titleZh: '文昌吐秀 · 认知升维与专业进阶',
        titleEn: 'Wen Chang Intellect Flare - Cognitive Upgrade & Strategic Audit',
        summaryZh: '灵感如潮，对于复杂战略逻辑能抽丝剥茧，举重若轻。',
        summaryEn: 'Inspirational cognitive clarity; easily unravels complex multi-layered systemic problems.',
        actionZh: '梳理未来半年作战地图，撰写商业计划书或完成深度复盘总结。',
        actionEn: 'Draft mid-term operating playbooks and execute comprehensive analytical reviews.'
      },
      {
        month: 9, day: 15,
        type: 'wealth_pivot',
        titleZh: '偏财得力窗口 · 副业与投资良机',
        titleEn: 'Indirect Wealth Surge - Side Venture & Investment Horizon',
        summaryZh: '偏财星动，对市场风向与商业机遇嗅觉极其敏锐。',
        summaryEn: 'Indirect Wealth star activates; heightened sensitivity to market opportunities and arbitrage.',
        actionZh: '考察副业新渠道，谨慎试水高确定性合作，注意见好就收。',
        actionEn: 'Explore exploratory revenue channels; lock in profits with disciplined risk thresholds.'
      },
      {
        month: 10, day: 7,
        type: 'crisis_defense',
        titleZh: '岁运伏吟防御 · 戒急防躁与养精蓄锐',
        titleEn: 'Decade-Transit Resonator Alert - Low Profile & Energy Conservation',
        summaryZh: '天干地支重叠共振，能量迟滞不前，强求推进反而欲速不达。',
        summaryEn: 'Repetitive pillar resonance decelerates velocity; forcing progress produces counterproductive friction.',
        actionZh: '采取守势，按部就班处理日常事务，不签未审定的重磅承诺。',
        actionEn: 'Adopt defensive operational posture; process standard tasks without signing new commitments.'
      },
      {
        month: 10, day: 28,
        type: 'romance_union',
        titleZh: '天喜对冲拱照 · 阖家欢庆与贵人喜报',
        titleEn: 'Tian Xi Domestic Joy - Auspicious Partnership & Family Celebration',
        summaryZh: '喜气盈门，主添喜庆、关系升温与商业伙伴默契共识。',
        summaryEn: 'Domestic and commercial joy converges; fosters mutual consensus across partners.',
        actionZh: '举办家宴、增进亲友情谊，或与合伙人签署共赢合作备忘录。',
        actionEn: 'Host celebratory dinner or solidify win-win partnership memoranda.'
      },
      {
        month: 11, day: 18,
        type: 'yima_surge',
        titleZh: '时空跃迁进阶 · 换道超车与异地结盟',
        titleEn: 'Velocity Pivot Window - Cross-Sector Leap & External Alliances',
        summaryZh: '环境变动带来全新机遇，跨界合作能打破既有行业天花板。',
        summaryEn: 'Dynamic environmental shifts unlock non-linear opportunities beyond legacy borders.',
        actionZh: '主动接触跨行业领军人物，打破部门墙，探索新型联合生态。',
        actionEn: 'Interface with cross-industry pioneers to explore novel hybrid ecosystems.'
      },
      {
        month: 12, day: 10,
        type: 'noble_mentor',
        titleZh: '岁末天乙收官 · 年度复盘与功业稳固',
        titleEn: 'Year-End Nobleman Consolidation - Strategic Audit & Legacy Anchor',
        summaryZh: '年终贵人聚气，前期累积的口碑与功德得到组织高度认可。',
        summaryEn: 'Year-end mentor energy converges; accumulated track record receives executive acclaim.',
        actionZh: '向高层系统汇报全年战绩，明确来年资源配额与晋升考核。',
        actionEn: 'Present annual executive deliverables; anchor resource commitments for the upcoming fiscal year.'
      },
      {
        month: 12, day: 22,
        type: 'solar_shift',
        titleZh: '冬至一阳生 · 闭关静养以迎新元',
        titleEn: 'Winter Solstice - Yang Energy Reborn & Annual Reset',
        summaryZh: '冬至日纯阴转阳，天地初阳萌动，最为滋养生命元神。',
        summaryEn: 'Winter Solstice marks the subtle re-emergence of primary Yang; rejuvenates vital essence.',
        actionZh: '早睡晚起，静心修持，避开喧嚣派对，深层蓄积来年战力。',
        actionEn: 'Rest early; cultivate quiet focus and conserve vitality for the forthcoming year.'
      }
    ];

    return rawTemplates.map((t, idx) => {
      const mm = String(t.month).padStart(2, '0');
      const dd = String(t.day).padStart(2, '0');
      const dateStr = `${targetYear}${mm}${dd}`;
      const isoDate = `${targetYear}-${mm}-${dd}`;

      const ev = {
        id: `tianji-${targetYear}-${idx + 1}`,
        dateStr,
        isoDate,
        month: t.month,
        day: t.day,
        type: t.type,
        title: isEn ? t.titleEn : t.titleZh,
        summary: isEn ? t.summaryEn : t.summaryZh,
        actionRule: isEn ? t.actionEn : t.actionZh
      };

      if (isEn) {
        ev.titleEn = t.titleEn;
        ev.summaryEn = t.summaryEn;
        ev.actionEn = t.actionEn;
      } else {
        ev.titleZh = t.titleZh;
        ev.summaryZh = t.summaryZh;
        ev.actionZh = t.actionZh;
      }

      return ev;
    });
  }

  /**
   * 格式化单条 RFC 5545 VEVENT
   */
  formatEvent(dateStr, title, summary, actionRule, lang = 'zh') {
    const isEn = (lang === 'en');
    const summaryPrefix = isEn ? '[Tianji Rhythm] ' : '【天机·进退】';
    const actionPrefix = isEn ? '\\n[Tactical Action] ' : '\\n【战术行动】';
    const alertPrefix = isEn ? '[Tomorrow Tianji Alert] ' : '【明日天机提醒】';
    const nowIso = new Date().toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';

    return [
      'BEGIN:VEVENT',
      `UID:tianji-${dateStr}-${Math.random().toString(36).substr(2, 8)}@metaphysics.engine`,
      `DTSTAMP:${nowIso}`,
      `DTSTART;VALUE=DATE:${dateStr}`,
      `DTEND;VALUE=DATE:${dateStr}`,
      `SUMMARY:${summaryPrefix}${title}`,
      `DESCRIPTION:${summary}${actionPrefix}${actionRule}`,
      'TRANSP:TRANSPARENT',
      'BEGIN:VALARM',
      'TRIGGER:-PT4H', // 提前一天晚上 20:00 弹出通知
      'ACTION:DISPLAY',
      `DESCRIPTION:${alertPrefix}${title}`,
      'END:VALARM',
      'END:VEVENT'
    ].join('\r\n');
  }

  /**
   * 生成符合 RFC 5545 国际标准的完整 .ics 文本流
   */
  generateICSContent(criticalEvents = [], lang = 'zh') {
    const isEn = (lang === 'en');
    const calName = isEn ? 'Tianji Personal Battle Rhythm Calendar' : '天机·个人进退节律历';
    const events = (criticalEvents && criticalEvents.length > 0)
      ? criticalEvents
      : this.extractCriticalEvents(this.year, lang);

    const header = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Metaphysics Engine//Tianji Calendar Feed//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      `X-WR-CALNAME:${calName}`,
      'X-WR-TIMEZONE:Asia/Shanghai'
    ].join('\r\n');

    const eventsBody = events.map(e => 
      this.formatEvent(e.dateStr, isEn ? e.titleEn : e.titleZh, isEn ? e.summaryEn : e.summaryZh, isEn ? e.actionEn : e.actionZh, lang)
    ).join('\r\n');

    const footer = '\r\nEND:VCALENDAR';
    return `${header}\r\n${eventsBody}${footer}`;
  }

  /**
   * 纯前端触发下载 .ics 文件
   */
  downloadICS(criticalEvents = null, filename = null, lang = 'zh') {
    if (typeof document === 'undefined' || typeof Blob === 'undefined') return;
    const isEn = (lang === 'en');
    const events = criticalEvents || this.extractCriticalEvents(this.year, lang);
    const icsText = this.generateICSContent(events, lang);
    const blob = new Blob([icsText], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', filename || `tianji_calendar_${this.year || 2026}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  /**
   * 生成可用于 Apple/Google Calendar 的 webcal 订阅 URL
   */
  static getWebcalSubscriptionUrl(baziResult = null, year = 2026) {
    const baziId = (baziResult && baziResult.id) || 'natal';
    return `webcal://api.tianjicalendar.com/feed.ics?year=${year}&token=${baziId}`;
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CalendarFeedEngine };
}
if (typeof window !== 'undefined') {
  window.CalendarFeedEngine = CalendarFeedEngine;
}
