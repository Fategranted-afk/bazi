/**
 * CalendarFeedEngine (动态订阅式天机进退节律历 · RFC 5545 引擎)
 * 
 * 将静态的岁运推演转化为符合 RFC 5545 国际标准的 iCalendar (.ics) 日历流与 webcal 订阅。
 * 基于命主四柱原局与日元五行，纯天文算法精准扫描全年 365 日之流日干支，
 * 提炼 24 个高势能跃迁拐点日与攻防决策窗口:
 * - 天克地冲日柱 (Direct Day Pillar Double Clash)
 * - 天地德合吉日 (Day Pillar Supreme Union & Harmony)
 * - 羊刃逢冲化煞 (Yang Blade Clash & Volatility Buffer)
 * - 天乙贵人显化 (Tian Yi Guardian Nobleman)
 * - 文昌贵人当值 (Wen Chang Wisdom & Cognitive Acuity)
 * - 食伤生财与三合财局 (Output Generates Wealth Vector & Wealth Triad)
 * - 驿马星动跃迁 (Post Horse Kinetic Movement & Boundary Expansion)
 * - 节气交节与阴阳律 (Solar Inceptions & Seasonal Equilibrium)
 */
class CalendarFeedEngine {
  constructor(baziResult = null, year = 2026) {
    this.bazi = baziResult;
    this.year = year || 2026;
  }

  /**
   * 纯天文历法：公历转儒略日 (Julian Day Number)
   */
  static gregorianToJDN(year, month, day) {
    if (typeof gregorianToJDN === 'function') {
      return gregorianToJDN(year, month, day);
    }
    let y = year;
    let m = month;
    if (m <= 2) {
      y -= 1;
      m += 12;
    }
    const a = Math.floor(y / 100);
    const b = 2 - a + Math.floor(a / 4);
    return Math.floor(365.25 * (y + 4716)) + Math.floor(30.6001 * (m + 1)) + day + b - 1524;
  }

  /**
   * 辅助方法：计算次日 YYYYMMDD (用于 RFC 5545 全天日程闭区间 DTEND)
   */
  static getNextDateStr(dateStr) {
    const y = parseInt(dateStr.slice(0, 4), 10);
    const m = parseInt(dateStr.slice(4, 6), 10) - 1;
    const d = parseInt(dateStr.slice(6, 8), 10);
    const dt = new Date(Date.UTC(y, m, d));
    dt.setUTCDate(dt.getUTCDate() + 1);
    const ny = dt.getUTCFullYear();
    const nm = String(dt.getUTCMonth() + 1).padStart(2, '0');
    const nd = String(dt.getUTCDate()).padStart(2, '0');
    return `${ny}${nm}${nd}`;
  }

  /**
   * 提炼全年 24 个能量突变与重大战役决策窗口日 (均匀覆盖 12 个月)
   */
  extractCriticalEvents(year = null, lang = 'zh') {
    const isEn = (lang === 'en');
    const targetYear = year || this.year || 2026;

    // 提取命主四柱参数 (包含完善的防御性 fallback)
    const dm = (this.bazi && this.bazi.dayMaster) || 
               (this.bazi && this.bazi.pillars && this.bazi.pillars.day && this.bazi.pillars.day.stem) || '甲';
    const db = (this.bazi && this.bazi.pillars && this.bazi.pillars.day && this.bazi.pillars.day.branch) || '午';
    const yb = (this.bazi && this.bazi.pillars && this.bazi.pillars.year && this.bazi.pillars.year.branch) || '寅';

    const STEMS_LIST = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
    const BRANCHES_LIST = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];

    const STEM_ELEMENTS_MAP = {
      '甲': 'wood', '乙': 'wood',
      '丙': 'fire', '丁': 'fire',
      '戊': 'earth', '己': 'earth',
      '庚': 'metal', '辛': 'metal',
      '壬': 'water', '癸': 'water'
    };

    const STEM_PINYIN = {
      '甲': 'Jia', '乙': 'Yi', '丙': 'Bing', '丁': 'Ding', '戊': 'Wu',
      '己': 'Ji', '庚': 'Geng', '辛': 'Xin', '壬': 'Ren', '癸': 'Gui'
    };
    const BRANCH_PINYIN = {
      '子': 'Zi', '丑': 'Chou', '寅': 'Yin', '卯': 'Mao', '辰': 'Chen', '巳': 'Si',
      '午': 'Wu', '未': 'Wei', '申': 'Shen', '酉': 'You', '戌': 'Xu', '亥': 'Hai'
    };

    // 七杀相冲 (Direct Stems Clash)
    const STEM_CLASHES_MAP = {
      '甲': '庚', '乙': '辛', '丙': '壬', '丁': '癸', '戊': '甲',
      '己': '乙', '庚': '丙', '辛': '丁', '壬': '戊', '癸': '己'
    };

    // 天干五合 (Five Stem Combinations)
    const STEM_COMBOS_MAP = {
      '甲': '己', '己': '甲',
      '乙': '庚', '庚': '乙',
      '丙': '辛', '辛': '丙',
      '丁': '壬', '壬': '丁',
      '戊': '癸', '癸': '戊'
    };

    // 地支六冲 (Six Branch Clashes)
    const BRANCH_CLASHES_MAP = {
      '子': '午', '午': '子',
      '丑': '未', '未': '丑',
      '寅': '申', '申': '寅',
      '卯': '酉', '酉': '卯',
      '辰': '戌', '戌': '辰',
      '巳': '亥', '亥': '巳'
    };

    // 地支六合 (Six Branch Harmonies)
    const BRANCH_COMBOS_MAP = {
      '子': '丑', '丑': '子',
      '寅': '亥', '亥': '寅',
      '卯': '戌', '戌': '卯',
      '辰': '酉', '酉': '辰',
      '巳': '申', '申': '巳',
      '午': '未', '未': '午'
    };

    // 天乙贵人 (Tian Yi Guardian Nobleman)
    const TIAN_YI_MAP = {
      '甲': ['丑', '未'], '戊': ['丑', '未'], '庚': ['丑', '未'],
      '乙': ['子', '申'], '己': ['子', '申'],
      '丙': ['亥', '酉'], '丁': ['亥', '酉'],
      '壬': ['卯', '巳'], '癸': ['卯', '巳'],
      '辛': ['午', '寅']
    };

    // 文昌贵人 (Wen Chang Wisdom & Intellectual Acuity)
    const WEN_CHANG_MAP = {
      '甲': '巳', '乙': '午', '丙': '申', '丁': '酉', '戊': '申',
      '己': '酉', '庚': '亥', '辛': '子', '壬': '寅', '癸': '卯'
    };

    // 羊刃逢冲 (Yang Blade Clash)
    const YANG_BLADE_MAP = {
      '甲': '卯', '乙': '寅', '丙': '午', '丁': '巳', '戊': '午',
      '己': '巳', '庚': '酉', '辛': '申', '壬': '子', '癸': '亥'
    };

    // 驿马星动 (Post Horse Kinetic Surge)
    const YI_MA_MAP = {
      '申': '寅', '子': '寅', '辰': '寅',
      '寅': '申', '午': '申', '戌': '申',
      '巳': '亥', '酉': '亥', '丑': '亥',
      '亥': '巳', '卯': '巳', '未': '巳'
    };

    // 三合财局与财库 (Wealth Triad & Vaults)
    const WEALTH_TRIAD_MAP = {
      'wood': ['辰', '戌', '丑', '未'],
      'fire': ['巳', '酉', '丑'],
      'earth': ['申', '子', '辰'],
      'metal': ['亥', '卯', '未'],
      'water': ['寅', '午', '戌']
    };

    const dmElement = STEM_ELEMENTS_MAP[dm] || 'wood';

    // 核心公历节气更替节点
    const SOLAR_MILESTONES = {
      '0204': {
        type: 'solar_shift', cat: 'defensive', weight: 96,
        titleZh: '立春岁首交节 · 气机更替防震',
        titleEn: 'Spring Inception Pivot - Annual Field Shift & Grounding',
        summaryZh: '太岁干支交替核心节点，天地磁场剧烈震荡，人心浮动。',
        summaryEn: 'Annual Tai Sui transition marker. Dynamic cosmic field shifts require steady grounding.',
        actionZh: '宜静不宜动，戒躁防争吵，收敛锋芒，做好年度战略规划复盘。',
        actionEn: 'Hold steady; avoid impetuous disputes and review annual operational roadmaps.'
      },
      '0320': {
        type: 'solar_shift', cat: 'offensive', weight: 88,
        titleZh: '春分阴阳平衡 · 战略盘整校准',
        titleEn: 'Vernal Equinox - Dynamic Equilibrium & Strategy Audit',
        summaryZh: '昼夜均分，天地阴阳达至中和平衡，最利校准企业航向与团队架构。',
        summaryEn: 'Equator alignment achieves midpoint equilibrium; prime window for strategic roadmapping.',
        actionZh: '盘点组织资源分配，优化人员协作动线，明确二季度进攻重点。',
        actionEn: 'Audit organizational asset allocation and set quarterly sprint milestones.'
      },
      '0621': {
        type: 'solar_shift', cat: 'defensive', weight: 88,
        titleZh: '夏至一阴生 · 气机阴阳转换节点',
        titleEn: 'Summer Solstice - Yin Energy Emerges & Rhythm Rebalance',
        summaryZh: '阳极而阴生，天地至热而气机潜变，情绪与心火易旺。',
        summaryEn: 'Yang crests and initial Yin stirs. Environmental heat tests mental equanimity.',
        actionZh: '午间静坐闭目，戒急躁武断，谨防决策过热与无谓透支。',
        actionEn: 'Meditate midday; restrain emotional impulsivity in key organizational decisions.'
      },
      '0922': {
        type: 'solar_shift', cat: 'wealth', weight: 88,
        titleZh: '秋分阴阳平分 · 资产盘点与修剪',
        titleEn: 'Autumnal Equinox - Harvest Consolidation & Pruning',
        summaryZh: '平分秋色，岁运收成初显，应顺应天时收缩战线，稳固利润池。',
        summaryEn: 'Equal balance of day and night; season for asset consolidation and trimming low-ROI initiatives.',
        actionZh: '推进阶段性收益落袋，清退低效冗余项目，集中精力保卫现金流。',
        actionEn: 'Harvest completed deliverables and prune low-ROI auxiliary commitments.'
      },
      '1221': {
        type: 'solar_shift', cat: 'defensive', weight: 96,
        titleZh: '冬至一阳生 · 闭关静养以迎新元',
        titleEn: 'Winter Solstice - Yang Energy Reborn & Annual Reset',
        summaryZh: '冬至纯阴转阳，天地初阳萌动，最为滋养生命元神。',
        summaryEn: 'Winter Solstice marks the subtle re-emergence of primary Yang; rejuvenates vital essence.',
        actionZh: '早睡晚起，静心修持，避开喧嚣派对，深层蓄积来年战力。',
        actionEn: 'Rest early; cultivate quiet focus and conserve vitality for the forthcoming year.'
      }
    };

    // 扫描全年候选事件
    const monthCandidates = { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: [], 11: [], 12: [] };

    for (let m = 1; m <= 12; m++) {
      const daysInMonth = new Date(targetYear, m, 0).getDate();
      for (let d = 1; d <= daysInMonth; d++) {
        const jdn = CalendarFeedEngine.gregorianToJDN(targetYear, m, d);
        const dayCycleIdx = ((jdn + 49) % 60 + 60) % 60;
        const dayStem = STEMS_LIST[dayCycleIdx % 10];
        const dayBranch = BRANCHES_LIST[dayCycleIdx % 12];
        const dayPillar = dayStem + dayBranch;
        const mm = String(m).padStart(2, '0');
        const dd = String(d).padStart(2, '0');
        const keyMMDD = `${mm}${dd}`;

        const pillarZh = `${dayPillar}日`;
        const pillarEn = `${STEM_PINYIN[dayStem]} ${BRANCH_PINYIN[dayBranch]} Day`;

        // 1. 节气交节检视
        if (SOLAR_MILESTONES[keyMMDD]) {
          const sm = SOLAR_MILESTONES[keyMMDD];
          monthCandidates[m].push({
            m, d, dayStem, dayBranch, dayPillar, pillarZh, pillarEn,
            cat: sm.cat, type: sm.type, baseWeight: sm.weight,
            titleZh: `${sm.titleZh} (${pillarZh})`,
            titleEn: `${sm.titleEn} (${pillarEn})`,
            summaryZh: sm.summaryZh,
            summaryEn: sm.summaryEn,
            actionZh: sm.actionZh,
            actionEn: sm.actionEn
          });
        }

        // 2. 天克地冲日柱 (Tier 1 终极防御避险)
        if (dayStem === STEM_CLASHES_MAP[dm] && dayBranch === BRANCH_CLASHES_MAP[db]) {
          monthCandidates[m].push({
            m, d, dayStem, dayBranch, dayPillar, pillarZh, pillarEn,
            cat: 'defensive', type: 'crisis_defense', baseWeight: 105,
            titleZh: `天克地冲日柱 · 慎防暗礁与精力透支 (${pillarZh})`,
            titleEn: `Day Pillar Antithetical Clash - Defend Against Friction (${pillarEn})`,
            summaryZh: `流日${dayPillar}与命主日柱${dm}${db}构成天克地冲（${dayStem}克${dm}、${dayBranch}冲${db}），时空磁场交锋剧烈，极易滋生沟通摩擦与精力耗竭。`,
            summaryEn: `Transit ${pillarEn} forms direct double clash against natal Day Pillar (${STEM_PINYIN[dayStem]} clashes Day Master, ${BRANCH_PINYIN[dayBranch]} clashes Day Branch). Heightened friction and systemic tension.`,
            actionZh: `严格避开高风险对抗、重磅谈判与关键签约，拒绝无谓消耗，保证深睡眠与能量静养。`,
            actionEn: `Postpone high-stakes confrontations and decisive signatures; conserve energy and prioritize restorative sleep.`
          });
          continue;
        }

        // 3. 天地德合 (Tier 1 终极大合大成)
        if (dayStem === STEM_COMBOS_MAP[dm] && dayBranch === BRANCH_COMBOS_MAP[db]) {
          monthCandidates[m].push({
            m, d, dayStem, dayBranch, dayPillar, pillarZh, pillarEn,
            cat: 'offensive', type: 'harmony_union', baseWeight: 105,
            titleZh: `天地德合吉日 · 战略破局与高阶合和 (${pillarZh})`,
            titleEn: `Day Pillar Supreme Harmony - Strategic Breakthrough & Alliance (${pillarEn})`,
            summaryZh: `流日${dayPillar}与日柱${dm}${db}天地德合（${dayStem}${dm}相合、${dayBranch}${db}相合），时空磁场浑然天成，百事顺遂，贵人相契。`,
            summaryEn: `Transit ${pillarEn} forms double harmony with natal Day Pillar (${STEM_PINYIN[dayStem]} and ${BRANCH_PINYIN[dayBranch]} combine). Synergistic alignment unlocks institutional support and sponsor trust.`,
            actionZh: `主动约见核心决策高层，推进重磅商务谈判、产品发布或确立长远战略同盟，顺水推舟。`,
            actionEn: `Proactively schedule executive meetings, advance major partnership closures, and cement strategic alliances.`
          });
          continue;
        }

        // 4. 羊刃逢冲 (Tier 2 防御化煞)
        if (dayBranch === BRANCH_CLASHES_MAP[YANG_BLADE_MAP[dm]]) {
          monthCandidates[m].push({
            m, d, dayStem, dayBranch, dayPillar, pillarZh, pillarEn,
            cat: 'defensive', type: 'blade_clash', baseWeight: 92,
            titleZh: `羊刃逢冲防御日 · 谨防冲动与意外血光 (${pillarZh})`,
            titleEn: `Yang Blade Clash Alert - Exercise Caution & Defuse Impulsivity (${pillarEn})`,
            summaryZh: `流日地支${dayBranch}冲动命主羊刃星${YANG_BLADE_MAP[dm]}，犹如拔刃相向，情绪易激化，需防暗礁破财、肢体擦碰或冲动决策。`,
            summaryEn: `Transit branch ${BRANCH_PINYIN[dayBranch]} clashes with Yang Blade. Heightened volatility and potential for impulsive overreaction under stress.`,
            actionZh: `外出减速慢行，严防肢体对抗，遇挑衅主动退让一步，切忌因胜负心孤注一掷。`,
            actionEn: `Exercise defensive caution in travel; avoid high-risk physical sports and refuse provocations.`
          });
        }

        // 5. 文昌贵人 (Tier 2 智慧与高阶决策)
        if (dayBranch === WEN_CHANG_MAP[dm]) {
          monthCandidates[m].push({
            m, d, dayStem, dayBranch, dayPillar, pillarZh, pillarEn,
            cat: 'wisdom', type: 'wenchang_focus', baseWeight: 90,
            titleZh: `文昌贵人当值 · 深度沉浸与认知跃迁 (${pillarZh})`,
            titleEn: `Wen Chang Wisdom Star Awakened - Deep Focus & Cognitive Acuity (${pillarEn})`,
            summaryZh: `文昌吉曜${dayBranch}引动智识文思泉涌，逻辑敏锐缜密，最利专业方案攻坚、深度复盘及终版合同过审。`,
            summaryEn: `Wen Chang wisdom luminary ${BRANCH_PINYIN[dayBranch]} activates peak cognitive clarity; ideal for rigorous analysis, strategy audits, and contract review.`,
            actionZh: `闭关研磨核心技术方案或商业规划，敲定终版合作条款，力求一语中的。`,
            actionEn: `Finalize core technical architectures or key agreements with heightened intellectual clarity.`
          });
        }

        // 6. 天乙贵人 (Tier 2 顺势破局引路)
        if (TIAN_YI_MAP[dm] && TIAN_YI_MAP[dm].includes(dayBranch)) {
          monthCandidates[m].push({
            m, d, dayStem, dayBranch, dayPillar, pillarZh, pillarEn,
            cat: 'offensive', type: 'noble_mentor', baseWeight: 89,
            titleZh: `天乙贵人显化吉日 · 关键破局求索 (${pillarZh})`,
            titleEn: `Tian Yi Guardian Nobleman Day - Seek High-Tier Mentorship (${pillarEn})`,
            summaryZh: `天乙星${dayBranch}与时令同频共振，逢凶化吉，易获高位引路人指点迷津或权威背书。`,
            summaryEn: `Natal Tian Yi star resonates with temporal alignment; optimal window for mentor outreach and resolving structural roadblocks.`,
            actionZh: `主动约见关键业务上级或尊长，递交核心诉求，借势突破瓶颈。`,
            actionEn: `Proactively consult senior leadership; present key strategic proposals for organizational backing.`
          });
        }

        // 7. 三合财局 / 财运转化 (Tier 2 商业变现)
        if (WEALTH_TRIAD_MAP[dmElement] && WEALTH_TRIAD_MAP[dmElement].includes(dayBranch)) {
          monthCandidates[m].push({
            m, d, dayStem, dayBranch, dayPillar, pillarZh, pillarEn,
            cat: 'wealth', type: 'wealth_triad', baseWeight: 87,
            titleZh: `财运聚气转化日 · 商业闭环与资产配置 (${pillarZh})`,
            titleEn: `Wealth Vector Amplification - Commercial Monetization Window (${pillarEn})`,
            summaryZh: `流日五行生旺财局，商业资源聚合度显著提升，投入迎来正向变现回流与资产固化契机。`,
            summaryEn: `Elemental wealth triad locks into alignment; strengthens commercial retention and operational investment yields.`,
            actionZh: `梳理财务报表，推进账款清收，清退低效资产，落袋为安，布局长期稳健收益。`,
            actionEn: `Review financial allocations, collect receivables, and lock in returns with disciplined risk thresholds.`
          });
        }

        // 8. 驿马星动 (Tier 3 空间跃迁)
        if (dayBranch === YI_MA_MAP[db] || dayBranch === YI_MA_MAP[yb]) {
          monthCandidates[m].push({
            m, d, dayStem, dayBranch, dayPillar, pillarZh, pillarEn,
            cat: 'offensive', type: 'yima_surge', baseWeight: 85,
            titleZh: `驿马星动激荡 · 空间位移与异地开拓 (${pillarZh})`,
            titleEn: `Post Horse Kinetic Acceleration - Mobility & Domain Expansion (${pillarEn})`,
            summaryZh: `时空动能爆发，宜动不宜静，异地开拓、公干出差与跨界交流成效卓著。`,
            summaryEn: `Spatiotemporal momentum peaks; highly favored for business travel, cross-sector exploration, and boundary expansion.`,
            actionZh: `安排出访考察、拜访外地核心伙伴，以空间位移打破局部内卷。`,
            actionEn: `Embark on field inspections, visit remote partners, or explore unexplored market domains to break stagnation.`
          });
        }
      }
    }

    // 动态均衡选择算法：每月精选 2 个最具战略价值且类别互补的决策日 (全年恰好 24 个)
    const globalCatCounts = { offensive: 0, defensive: 0, wisdom: 0, wealth: 0 };
    const rawSelected = [];

    for (let m = 1; m <= 12; m++) {
      const cands = monthCandidates[m];
      if (!cands || cands.length === 0) continue;

      // 结合全局频次动态惩罚过载类别，交替激发天克地冲与天地德合
      for (const c of cands) {
        const freq = globalCatCounts[c.cat] || 0;
        let bonus = 0;
        if (c.type === 'crisis_defense' && [4, 8, 12].includes(m)) {
          bonus = 4;
        } else if (c.type === 'harmony_union' && [2, 6, 10].includes(m)) {
          bonus = 4;
        }
        c.effectiveScore = c.baseWeight + bonus - freq * 2.8;
      }

      cands.sort((a, b) => b.effectiveScore - a.effectiveScore);

      const picks = [];
      // 选取当月第一优胜候选
      picks.push(cands[0]);
      globalCatCounts[cands[0].cat] = (globalCatCounts[cands[0].cat] || 0) + 1;

      // 寻找第二优胜候选 (优先保证日期相隔 >= 4 天且类别互补)
      let second = null;
      for (let i = 1; i < cands.length; i++) {
        const c = cands[i];
        if (c.d !== picks[0].d && c.cat !== picks[0].cat && Math.abs(c.d - picks[0].d) >= 4) {
          second = c;
          break;
        }
      }
      if (!second) {
        for (let i = 1; i < cands.length; i++) {
          const c = cands[i];
          if (c.d !== picks[0].d && c.cat !== picks[0].cat) {
            second = c;
            break;
          }
        }
      }
      if (!second) {
        for (let i = 1; i < cands.length; i++) {
          const c = cands[i];
          if (c.d !== picks[0].d) {
            second = c;
            break;
          }
        }
      }

      if (second) {
        picks.push(second);
        globalCatCounts[second.cat] = (globalCatCounts[second.cat] || 0) + 1;
      }

      picks.sort((a, b) => a.d - b.d);
      rawSelected.push(...picks);
    }

    // 格式化输出 24 个标准事件对象
    return rawSelected.map((ev, idx) => {
      const mm = String(ev.m).padStart(2, '0');
      const dd = String(ev.d).padStart(2, '0');
      const dateStr = `${targetYear}${mm}${dd}`;
      const isoDate = `${targetYear}-${mm}-${dd}`;

      const resObj = {
        id: `tianji-${targetYear}-${mm}${dd}`,
        index: idx + 1,
        dateStr,
        isoDate,
        month: ev.m,
        day: ev.d,
        dayStem: ev.dayStem,
        dayBranch: ev.dayBranch,
        dayPillar: ev.dayPillar,
        pillarZh: ev.pillarZh,
        pillarEn: ev.pillarEn,
        type: ev.type,
        category: ev.cat,
        weight: ev.baseWeight,
        title: isEn ? ev.titleEn : ev.titleZh,
        summary: isEn ? ev.summaryEn : ev.summaryZh,
        actionRule: isEn ? ev.actionEn : ev.actionZh,
        titleZh: ev.titleZh,
        titleEn: ev.titleEn,
        summaryZh: ev.summaryZh,
        summaryEn: ev.summaryEn,
        actionZh: ev.actionZh,
        actionEn: ev.actionEn
      };

      resObj.googleCalendarUrl = CalendarFeedEngine.getGoogleCalendarUrl(resObj, lang);
      return resObj;
    });
  }

  /**
   * 格式化单条符合 RFC 5545 国际标准的 VEVENT
   */
  formatEvent(firstArg, titleOrLang, summary, actionRule, lang = 'zh') {
    let dateStr, title, sum, act, isEn;
    if (typeof firstArg === 'object' && firstArg !== null) {
      const ev = firstArg;
      const effectiveLang = titleOrLang || 'zh';
      isEn = (effectiveLang === 'en');
      dateStr = ev.dateStr;
      title = isEn ? (ev.titleEn || ev.title) : (ev.titleZh || ev.title);
      sum = isEn ? (ev.summaryEn || ev.summary) : (ev.summaryZh || ev.summary);
      act = isEn ? (ev.actionEn || ev.actionRule) : (ev.actionZh || ev.actionRule);
    } else {
      dateStr = firstArg;
      title = titleOrLang;
      sum = summary;
      act = actionRule;
      isEn = (lang === 'en');
    }

    const summaryPrefix = isEn ? '[Tianji Rhythm] ' : '【天机·进退】';
    const actionPrefix = isEn ? '\\n\\n[Tactical Directive]\\n' : '\\n\\n【战术行持】\\n';
    const alertPrefix = isEn ? '[Tomorrow Tianji Alert] ' : '【明日天机提醒】';
    const nowIso = new Date().toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    const nextDateStr = CalendarFeedEngine.getNextDateStr(dateStr);

    // 转义 RFC 5545 TEXT 规范字符
    const cleanSum = (sum || '').replace(/,/g, '\\,').replace(/;/g, '\\;');
    const cleanAct = (act || '').replace(/,/g, '\\,').replace(/;/g, '\\;');

    return [
      'BEGIN:VEVENT',
      `UID:tianji-${dateStr}-${Math.random().toString(36).substr(2, 8)}@metaphysics.engine`,
      `DTSTAMP:${nowIso}`,
      `DTSTART;VALUE=DATE:${dateStr}`,
      `DTEND;VALUE=DATE:${nextDateStr}`,
      `SUMMARY:${summaryPrefix}${title}`,
      `DESCRIPTION:${cleanSum}${actionPrefix}${cleanAct}`,
      'TRANSP:TRANSPARENT',
      'BEGIN:VALARM',
      'TRIGGER:-PT4H', // 提前一天晚上 20:00 弹出桌面/手机日历强提醒
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

    const eventsBody = events.map(e => this.formatEvent(e, lang)).join('\r\n');
    const footer = '\r\nEND:VCALENDAR';
    return `${header}\r\n${eventsBody}${footer}`;
  }

  /**
   * 生成单个事件的 RFC 5545 .ics 文本流
   */
  generateSingleEventICS(event, lang = 'zh') {
    const isEn = (lang === 'en');
    const calName = isEn ? 'Tianji Rhythm Single Event' : '天机·单日战术事件';
    const header = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Metaphysics Engine//Tianji Calendar Feed//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      `X-WR-CALNAME:${calName}`,
      'X-WR-TIMEZONE:Asia/Shanghai'
    ].join('\r\n');

    const eventBody = this.formatEvent(event, lang);
    return `${header}\r\n${eventBody}\r\nEND:VCALENDAR`;
  }

  /**
   * 生成一键导入 Google 日历直达链接 (URL Template)
   */
  static getGoogleCalendarUrl(event, lang = 'zh') {
    const isEn = (lang === 'en');
    const title = isEn ? (event.titleEn || event.title) : (event.titleZh || event.title);
    const summary = isEn ? (event.summaryEn || event.summary) : (event.summaryZh || event.summary);
    const action = isEn ? (event.actionEn || event.actionRule) : (event.actionZh || event.actionRule);
    const prefix = isEn ? '[Tianji Rhythm] ' : '【天机·进退】';
    const actionLabel = isEn ? '\n\n[Tactical Directive]\n' : '\n\n【战术行持】\n';
    const pillarLabel = isEn ? '\n\nTransit Pillar: ' : '\n\n流日干支：';
    const pillarText = event.pillarEn || event.pillarZh || event.dayPillar || '';

    const details = `${summary}${actionLabel}${action}${pillarLabel}${pillarText}`;
    const dateStr = event.dateStr || (event.isoDate ? event.isoDate.replace(/-/g, '') : '20260101');
    const nextDateStr = CalendarFeedEngine.getNextDateStr(dateStr);

    const queryParams = [
      'action=TEMPLATE',
      `text=${encodeURIComponent(prefix + title)}`,
      `dates=${dateStr}/${nextDateStr}`,
      `details=${encodeURIComponent(details)}`,
      'trp=true'
    ].join('&');

    return `https://calendar.google.com/calendar/render?${queryParams}`;
  }

  /**
   * 纯前端触发下载全部 24 个日历事件 .ics 文件
   */
  downloadICS(criticalEvents = null, filename = null, lang = 'zh') {
    if (typeof document === 'undefined' || typeof Blob === 'undefined') return;
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
   * 纯前端触发下载单日事件 .ics 文件
   */
  downloadSingleEventICS(event, filename = null, lang = 'zh') {
    if (typeof document === 'undefined' || typeof Blob === 'undefined' || !event) return;
    const icsText = this.generateSingleEventICS(event, lang);
    const blob = new Blob([icsText], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', filename || `tianji_${event.isoDate || event.dateStr}.ics`);
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
