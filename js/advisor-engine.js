/**
 * 钦天监随身军师 · 交互式智能决策参谋引擎 (Interactive Advisor Agent Engine)
 * Synthesizes Day Master strength, 100-point vigor, 14-character temporal field,
 * Master Ni's Yin-Yang hexagram dynamics, and Feng Dao's Rong Ku Jian codex into real-time tactical guidance.
 * 100% Offline-First, deterministic, context-aware, and fully bilingual (zh/en).
 */

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
      primaryArchetype: primaryArchetype || defaultArchetype
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
          id: 'wealth_window',
          icon: '💰',
          title: 'Wealth & Initiative Timing',
          query: 'Is the current temporal transit favorable for aggressive wealth expansion (side-projects/investments) or consolidation?'
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
        id: 'wealth_window',
        icon: '💰',
        title: '财运时机与投资攻守',
        query: '当下岁运流月逢何神司权？我适宜开拓副业与商业变现，还是当收拢现金流、以沉淀绝技为先？'
      }
    ];
  }

  /**
   * Detect nuanced subcategory / follow-up subtopic
   */
  static detectSubcategory(userQuery) {
    const q = (userQuery || '').toLowerCase();
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
    if (/为什么|何故|原理|根据什么|怎么算出来|八字怎么看|why|reason|how to deduce/i.test(q)) {
      return 'general_why';
    }
    return 'comprehensive';
  }

  /**
   * Classify user query intent robustly, with multi-turn session context inheritance
   */
  static detectIntent(userQuery, sessionContext = null) {
    const q = (userQuery || '').toLowerCase();
    const sub = this.detectSubcategory(userQuery);

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
      if (sub !== 'comprehensive' || /那|具体|然后|还有|另外|怎么|如果|为什么|何时|哪|what about|then|when|how/i.test(q)) {
        return sessionContext.lastCategory;
      }
    }

    // Fallbacks based on subcategory
    if (sub === 'timing_precision') {
      if (sessionContext && sessionContext.lastCategory) return sessionContext.lastCategory;
      return 'romance_timing';
    }

    if (sub === 'spouse_profile' || sub === 'encounter_location' || sub === 'marriage_year') {
      return 'romance_timing';
    }

    return 'general';
  }

  /**
   * Calculate 12-Month Transit Timing Windows (流月应期全相表)
   */
  static calculateMonthlyTransitWindows(bazi, luck, currentYear = 2026, category = 'romance_timing', lang = 'zh') {
    const isEn = (lang === 'en');
    const db = bazi?.pillars?.day?.branch || '午';

    if (category === 'romance_timing') {
      let pMonthZh = '农历六月（乙未月）';
      let pMonthEn = 'Lunar Month 6 (Yi-Wei)';
      let pTermZh = '小暑 至 大暑（公历 7月7日 ~ 8月6日）';
      let pTermEn = 'Minor Heat to Major Heat (Jul 7 ~ Aug 6)';
      let pMechZh = '午未六合化土生财，岁君六合入夫妻宫！逢合主定，气数聚合之第一吉相';
      let pMechEn = 'Six-Harmony union combines with the Annual King and Spouse Palace; harmony anchors formal commitment';
      let pActZh = '最宜确立恋爱名分、坦诚心扉、见家长或共同制定长远发展盟约';
      let pActEn = 'Prime window for formalizing relationship milestones and long-term commitments';
      let pProb = 92;

      let sMonthZh = '农历五月（甲午月）';
      let sMonthEn = 'Lunar Month 5 (Jia-Wu)';
      let sTermZh = '芒种 至 夏至（公历 6月5日 ~ 7月6日）';
      let sTermEn = 'Grain in Ear to Summer Solstice (Jun 5 ~ Jul 6)';
      let sMechZh = '岁君伏吟（甲午值守），同气相感，桃花星动，异性同侪吸引力峰值';
      let sMechEn = 'Annual King duplication vibrates matching resonance; social magnetism and peer attraction peak';
      let sActZh = '主动走出舒适区参与行业峰会、艺术沙龙或校友聚会，触动引力场';
      let sActEn = 'Proactively attend professional symposiums, elite salons, and alumni gatherings';
      let sProb = 88;

      let tMonthZh = '农历九月（戊戌月）';
      let tMonthEn = 'Lunar Month 9 (Wu-Xu)';
      let tTermZh = '寒露 至 霜降（公历 10月8日 ~ 11月6日）';
      let tTermEn = 'Cold Dew to Frost Descent (Oct 8 ~ Nov 6)';
      let tMechZh = '寅午戌三合火局大成入库，财官双美，情感关系尘埃落定';
      let tMechEn = 'Tri-Union fire alliance consolidates in storage; stability and alignment materialize';
      let tActZh = '宜商议未来定居城市与共同生活规划，明确长期生活定所';
      let tActEn = 'Align upon shared future domestic living plans and joint milestones';
      let tProb = 82;

      let cMonthZh = '农历十一月（庚子月）';
      let cMonthEn = 'Lunar Month 11 (Geng-Zi)';
      let cTermZh = '大雪 至 冬至（公历 12月7日 ~ 次年1月4日）';
      let cTermEn = 'Major Snow to Winter Solstice (Dec 7 ~ Jan 4)';
      let cMechZh = '子午相冲冲动夫妻宫与岁君，水火交战，情绪易敏感挑剔甚至冷战';
      let cMechEn = 'Zi-Wu clash stirs the Spouse Palace; heightened emotional sensitivity requires patience';
      let cActZh = '遇事执行24小时冷敷隔离法则，多体恤倾听，切忌冲动做决绝决定';
      let cActEn = 'Practice 24-hour delayed reaction; prioritize attentive listening over confrontation';

      return {
        title: isEn ? '2026 Bing-Wu Transit: 12-Month Romance Timing & Auspicious Windows' : '2026 丙午流年 · 十二流月正缘时令应期全相表',
        category: category,
        primaryWindow: {
          badge: isEn ? '🥇 Primary Peak Window' : '🥇 首席黄金应期',
          lunarMonth: isEn ? pMonthEn : pMonthZh,
          solarTerm: isEn ? pTermEn : pTermZh,
          probability: pProb,
          mechanism: isEn ? pMechEn : pMechZh,
          action: isEn ? pActEn : pActZh
        },
        secondaryWindow: {
          badge: isEn ? '🥈 Secondary Peak Window' : '🥈 次席高光应期',
          lunarMonth: isEn ? sMonthEn : sMonthZh,
          solarTerm: isEn ? sTermEn : sTermZh,
          probability: sProb,
          mechanism: isEn ? sMechEn : sMechZh,
          action: isEn ? sActEn : sActZh
        },
        tertiaryWindow: {
          badge: isEn ? '🥉 Tertiary Window' : '🥉 合局收官应期',
          lunarMonth: isEn ? tMonthEn : tMonthZh,
          solarTerm: isEn ? tTermEn : tTermZh,
          probability: tProb,
          mechanism: isEn ? tMechEn : tMechZh,
          action: isEn ? tActEn : tActZh
        },
        cautionaryMonth: {
          badge: isEn ? '⚠️ Cautionary Buffer Month' : '⚠️ 情绪磨合预警月',
          lunarMonth: isEn ? cMonthEn : cMonthZh,
          solarTerm: isEn ? cTermEn : cTermZh,
          probability: 45,
          mechanism: isEn ? cMechEn : cMechZh,
          action: isEn ? cActEn : cActZh
        }
      };
    } else if (category === 'academic_exam') {
      return {
        title: isEn ? '2026 Academic & Examination Timing Windows' : '2026 丙午流年 · 考学申博与文昌应期全相表',
        category: category,
        primaryWindow: {
          badge: isEn ? '🥇 Prime Exam Window' : '🥇 首席考学黄金期',
          lunarMonth: isEn ? 'Lunar Month 2 (Xin-Mao)' : '农历二月（辛卯月）',
          solarTerm: isEn ? 'Awakening of Insects to Spring Equinox (Mar 5 ~ Apr 4)' : '惊蛰 至 春分（公历 3月5日 ~ 4月4日）',
          probability: 93,
          mechanism: isEn ? 'Wen Chang noble star shines; Wood-Fire clarity compounds mental retention' : '文昌贵人当权，木火通明，深度记忆与逻辑调取效率峰值',
          action: isEn ? 'Ideal for major written examinations, paper submissions, and thesis proposals' : '最宜参加重要笔试、提交关键学术论文或研究立项'
        },
        secondaryWindow: {
          badge: isEn ? '🥈 Defense & Admission Window' : '🥈 答辩放榜顺遂期',
          lunarMonth: isEn ? 'Lunar Month 5 (Jia-Wu)' : '农历五月（甲午月）',
          solarTerm: isEn ? 'Grain in Ear to Summer Solstice (Jun 5 ~ Jul 6)' : '芒种 至 夏至（公历 6月5日 ~ 7月6日）',
          probability: 87,
          mechanism: isEn ? 'Output star vitality illuminates intellectual breakthroughs' : '食伤吐秀大展宏图，面试答辩表达力极具感染力',
          action: isEn ? 'Ideal for interview defense, meeting supervisors, and scholarship interviews' : '最宜导师拜会交流、复试答辩及奖学金争夺'
        },
        tertiaryWindow: {
          badge: isEn ? '🥉 Acceptance Confirmation' : '🥉 录取盖章收官期',
          lunarMonth: isEn ? 'Lunar Month 10 (Ji-Hai)' : '农历十月（己亥月）',
          solarTerm: isEn ? 'Beginning of Winter to Minor Snow (Nov 7 ~ Dec 6)' : '立冬 至 小雪（公历 11月7日 ~ 12月6日）',
          probability: 80,
          mechanism: isEn ? 'Direct Resource combines with Day Master, solidifying institutional moats' : '正印生身入库，官方录取与院校注册尘埃落定',
          action: isEn ? 'Secure formal visa, official enrollment confirmation, and lab allocation' : '宜落实正式录取通知、签证办理与实验室入驻'
        },
        cautionaryMonth: {
          badge: isEn ? '⚠️ Energy Depletion Warning' : '⚠️ 备考心力损耗预警月',
          lunarMonth: isEn ? 'Lunar Month 11 (Geng-Zi)' : '农历十一月（庚子月）',
          solarTerm: isEn ? 'Major Snow to Winter Solstice (Dec 7 ~ Jan 4)' : '大雪 至 冬至（公历 12月7日 ~ 次年1月4日）',
          probability: 50,
          mechanism: isEn ? 'Water-Fire clash scatters cognitive stamina; avoid late-night cramming' : '水火交冲耗损心肾阳气，易心浮气躁或注意力涣散',
          action: isEn ? 'Guard against all-nighters; enforce 8 hours of sleep before crunch tests' : '严禁熬夜刷题，考前以平稳作息与慢跑散步稳固元神'
        }
      };
    } else {
      // Career / Wealth Timing
      return {
        title: isEn ? '2026 Career Elevation & Wealth Opportunity Windows' : '2026 丙午流年 · 事业晋升与财富潮汐全相表',
        category: category,
        primaryWindow: {
          badge: isEn ? '🥇 Prime Career Window' : '🥇 首席晋升黄金期',
          lunarMonth: isEn ? 'Lunar Month 6 (Yi-Wei)' : '农历六月（乙未月）',
          solarTerm: isEn ? 'Minor Heat to Major Heat (Jul 7 ~ Aug 6)' : '小暑 至 大暑（公历 7月7日 ~ 8月6日）',
          probability: 91,
          mechanism: isEn ? 'Six-Harmony wealth alliance stabilizes revenue compounding' : '午未六合化土生财，岁运相合利于职级晋升与项目成果变现',
          action: isEn ? 'Initiate performance reviews, pitch pivotal initiatives, or formalize equity agreements' : '主动发起绩效汇报、争取关键核心项目主导权、敲定期权提成'
        },
        secondaryWindow: {
          badge: isEn ? '🥈 Pivot & Breakthrough Window' : '🥈 破局跃升爆发期',
          lunarMonth: isEn ? 'Lunar Month 9 (Wu-Xu)' : '农历九月（戊戌月）',
          solarTerm: isEn ? 'Cold Dew to Frost Descent (Oct 8 ~ Nov 6)' : '寒露 至 霜降（公历 10月8日 ~ 11月6日）',
          probability: 86,
          mechanism: isEn ? 'Tri-Union fire authority unlocks broader jurisdictional scope' : '寅午戌三合火局大成，财星透干，适合开辟第二增长曲线',
          action: isEn ? 'Execute strategic pivot, sign high-value commercial contracts, or launch prototypes' : '落实跳槽换轨、签署大额商业合同或上线独立商业产品'
        },
        tertiaryWindow: {
          badge: isEn ? '🥉 Foundation Laying Window' : '🥉 积蓄发轫蓄势期',
          lunarMonth: isEn ? 'Lunar Month 1 (Geng-Yin)' : '农历正月（庚寅月）',
          solarTerm: isEn ? 'Beginning of Spring to Rain Water (Feb 4 ~ Mar 4)' : '立春 至 雨水（公历 2月4日 ~ 3月4日）',
          probability: 78,
          mechanism: isEn ? 'Birth-phase vitality kicks off new multi-year trajectory' : '三合长生位萌发，新岁气机生发，适合确立全年作战地图',
          action: isEn ? 'Map annual goals, sharpen core technical skills, and build strategic alliances' : '制定全年关键战役目标，打磨不可替代之看家本领'
        },
        cautionaryMonth: {
          badge: isEn ? '⚠️ High Friction Risk Month' : '⚠️ 职场博弈高摩擦预警月',
          lunarMonth: isEn ? 'Lunar Month 11 (Geng-Zi)' : '农历十一月（庚子月）',
          solarTerm: isEn ? 'Major Snow to Winter Solstice (Dec 7 ~ Jan 4)' : '大雪 至 冬至（公历 12月7日 ~ 次年1月4日）',
          probability: 42,
          mechanism: isEn ? 'Zi-Wu clash prompts organizational friction or sudden restructuring' : '天克地冲组织动荡，易生口角是非或架构突变',
          action: isEn ? 'Adopt low-profile stance; avoid overt confrontations and preserve energy reserves' : '以静制动，严禁当面顶撞上级或卷入无谓派系争斗'
        }
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

    if (category === 'career_pivot' || category === 'manage_up' || category === 'academic_exam' || subcategory === 'decision_compare') {
      links.push({
        id: 'open_simulator',
        icon: '⚖️',
        label: isEn ? 'Launch Decision Simulator' : '载入双轨沙盘推演',
        action: 'open_simulator'
      });
    }

    if (category === 'romance_timing') {
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

    if (category === 'wealth_window' || subcategory === 'spatial_remedy') {
      links.push({
        id: 'open_fengshui',
        icon: '🧭',
        label: isEn ? 'Check Residence & Space Feng Shui' : '测算空间风水与聚财阵',
        action: 'open_fengshui'
      });
    }

    return links;
  }

  /**
   * Generate bespoke tactical decision advice
   */
  static generateAdvice(userQuery, bazi, luck, currentYear = 2026, lang = 'zh', sessionContext = null) {
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

    const isWeak = (ctx.vigorScore < 50);
    const category = this.detectIntent(userQuery, sessionContext);
    const subcategory = this.detectSubcategory(userQuery);

    if (isEn) {
      return this._generateAdviceEn(category, ctx, isWeak, userQuery, bazi, luck, subcategory);
    }
    return this._generateAdviceZh(category, ctx, isWeak, userQuery, bazi, luck, subcategory);
  }

  static _generateAdviceZh(category, ctx, isWeak, query, bazi, luck, subcategory = 'comprehensive') {
    let diagnosis = '';
    let tactics = [];
    let redLines = [];
    let mentalAnchor = '';
    let title = '';
    let directAnswer = '';
    let timingCard = null;
    let profileCard = null;

    const dm = ctx.dayMaster;
    const db = ctx.dayBranch;
    const yb = ctx.yearBranch;
    const isMale = (!ctx.gender || ctx.gender.includes('乾') || ctx.gender.includes('男'));

    // Romance Specific Variables
    let spouseStarZh = isMale ? '正财/偏财' : '正官/七杀';
    let spouseArchetype = '独立自强、开创干练之良伴';
    if (['子', '午', '卯', '酉'].includes(db)) {
      spouseArchetype = '相貌清雅秀丽、极具艺术情调、重视精神深度交流与仪式感之伴侣';
    } else if (['辰', '戌', '丑', '未'].includes(db)) {
      spouseArchetype = '忠厚稳健、朴实持家、能做家庭财富防波堤之靠谱伴侣';
    }

    let annualPalaceDynamic = '';
    if (db === '寅' || db === '戌') {
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
        directAnswer = `【军师直陈】：回禀命主，具体正缘显化与深度破局的黄金应期，首推 **2026 丙午年农历六月（乙未月·小暑至大暑）**、**农历五月（甲午月·芒种至夏至）** 与 **农历九月（戊戌月·寒露至霜降）**！其中以**农历六月（午未六合夫妻宫）**能量最为聚合稳定，逢合主定，是定下恋爱名分或打破单身僵局的第一首选窗口（应期概率 92%）；农历十一月（庚子月）水火对冲，切忌因一时敏感挑剔而心生冷战。下方已为您精细测算流月时令全相表，请命主审阅。`;
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
        directAnswer = `【军师直陈】：回禀命主，您的正缘将在 **2026 丙午至 2027 丁未年** 显化，黄金应期在**农历五月、六月与九月**。对方五官清雅灵动、气质高洁、极重精神共鸣。相处第一铁律是切忌在子午冲克月份（农历五月与十一月）因一时情绪敏感而做出绝决判断，以《周易·咸卦》虚受之道相待即能良缘天成。`;
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
        directAnswer = `【军师直陈】：回禀命主，学业考学与录取的黄金应期落在**农历二月（辛卯月·文昌贵人）**与**农历五月（甲午月·食伤吐秀）**！岁运逢官印相生，夏秋季节放榜申博最为顺畅。`;
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
        directAnswer = `【军师直陈】：回禀命主，今年职业转轨与跳槽的最佳窗口在**农历六月（乙未月·食伤生财）**与**农历九月（戊戌月·财星透干）**！在此之前宜在现工位沉淀核心作品，切忌裸辞；秋季金旺水润之际正是大展宏图之黄金良机。`;
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
      directAnswer = `【军师直陈】：回禀命主，当前岁运以“正财守底盘，偏财抓轻量机会”为大方针。今年农历六月与九月财运场能最旺，适宜验证第二曲线副业；但切忌大额加杠杆或与信用有亏之人合伙。`;
      timingCard = this.calculateMonthlyTransitWindows(bazi, luck, ctx.activeAnnualYear, 'wealth_window', 'zh');

      diagnosis = `命主年岁逢 ${ctx.activeAnnualYear} ${ctx.activeAnnualGanzhi}，岁君当道，六十四卦运势落于【${ctx.activeHexagram}】。当前子平量化活力 ${ctx.vigorScore} 分，处于【${ctx.vigorTier}】。在财富与事业推进中，首重“正财为基，偏财为机，稳中求进”。`;

      tactics = [
        `【深耕主业正财底盘】：确保本职基本盘稳如磐石，将 80% 的时间算力投入到核心本领的不可替代性打磨上。`,
        `【轻量化验证第二曲线】：欲求偏财破局，以极小资金成本测试副业或自媒体工具产品，跑通 0 到 1 最小闭环后再考虑追加资源。`,
        `【秉持《荣枯鉴》保全之道】：${ctx.firstScroll ? `谨记《${ctx.firstScroll}》所诫，低调求财，不显山不露水，蓄深水以行大舟。` : '戒骄戒躁，以广结善缘与利他之心凝聚财运。'}`
      ];

      redLines = [
        `严禁参与高杠杆、不透明或赌徒性质的高风险投机；`,
        `严禁与命带严重刑冲克破、信誉有亏之人合伙谋事。`
      ];

      mentalAnchor = `《滴天髓》云：“何知其人富？财气通门户。何知其人贵？官星有理会。财官相生，自致千钟。”`;
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

    const smartFollowUps = this.anticipateQuestions(category, subcategory, bazi, 'zh');
    const actionLinks = this.getActionLinks(category, subcategory, 'zh');

    return {
      category: category,
      subcategory: subcategory,
      title: title,
      directAnswer: directAnswer,
      timingCard: timingCard,
      profileCard: profileCard,
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

  static _generateAdviceEn(category, ctx, isWeak, query, bazi, luck, subcategory = 'comprehensive') {
    const enDm = this._stemToEn(ctx.dayMaster);
    const enDb = this._branchToEn(ctx.dayBranch);
    const enGz = this._ganzhiToEn(ctx.activeAnnualGanzhi);

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

    let spouseArchetypeEn = 'independent, enterprising, proactive, and resilient';
    if (['子', '午', '卯', '酉'].includes(ctx.dayBranch)) {
      spouseArchetypeEn = 'charismatic, aesthetically refined, values deep emotional and intellectual intimacy';
    } else if (['辰', '戌', '丑', '未'].includes(ctx.dayBranch)) {
      spouseArchetypeEn = 'dependable, grounded, prudent with assets, and deeply loyal to family stability';
    }

    let palaceTransitEn = '';
    if (ctx.dayBranch === '寅' || ctx.dayBranch === '戌') {
      palaceTransitEn = `The 2026 Bing-Wu transit combines with your Spouse Palace [${enDb}] in a Tri-Union harmony. In BaZi, this is the premier herald of matrimonial synchronicity, activating magnetic affinity for a deeply resonant soulmate!`;
    } else if (ctx.dayBranch === '未') {
      palaceTransitEn = `The 2026 Bing-Wu transit forms a Six-Harmony union with your Spouse Palace [${enDb}]. Harmony anchors commitment, opening a prime window for formal relationship milestones and marital decisions!`;
    } else if (ctx.dayBranch === '子') {
      palaceTransitEn = `The 2026 Bing-Wu transit clashes with your Spouse Palace [${enDb}]. Clashes break single inertia, triggering sudden cross-city encounters or romantic acceleration; established couples should practice attentive patience.`;
    } else {
      palaceTransitEn = `Governed by Hexagram [${ctx.activeHexagram}], the 2026 Bing-Wu cycle compounds subtle charisma. Optimal relational windows flourish dynamically through late summer into autumn.`;
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

      diagnosis = `Day Master resides on [${enDm}], with the Spouse Palace rooted in [${enDb}], and a ZiPing vigor score of ${ctx.vigorScore}/100 (${ctx.vigorTier}). In classical synastry, ${isMale ? `males take Wealth stars (${spouseStarEn}) as spouse indicators.` : `females take Officer/Killing stars (${spouseStarEn}) as spouse indicators.`}
` +
        `[Spouse Archetype]: Seated on [${enDb}], your partner embodies a persona that is [${spouseArchetypeEn}].
` +
        `[Transit Timing Resonance]: ${palaceTransitEn}`;

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

      diagnosis = `Day Master [${enDm}] holds a vigor score of ${ctx.vigorScore}/100 (${ctx.vigorTier}). Scholarly advancement is governed by Resource (Institutional Prestige) and Output (Original Intellect). ${isWeak ? 'A sensitive Day Master thrives in structured academia under supportive mentorship, where credentials construct an unassailable moat.' : 'A vigorous Day Master commands abundant Output energy, ideal for interdisciplinary breakthroughs and trailblazing thesis work.'}`;

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

      diagnosis = `Day Master [${enDm}] commands vigor of ${ctx.vigorScore}/100 (${ctx.vigorTier}). Alliance success hinges on whether Companion elements share burdens or compete for spoils. ${isWeak ? 'A sensitive Day Master benefits greatly from robust co-founders to absorb market shocks and provide frontline momentum.' : 'A vigorous Day Master radiates strong leadership; ensure strict contractual governance to prevent equity disputes.'}`;

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
      directAnswer = `Imperial Verdict: Anchored in the [${ctx.primaryArchetype.replace(/[一-龥]/g, '').trim() || 'Specialist'}] archetype, upward management succeeds by dismantling executive defense with certainty. Lead with three metrics: delivery progress, bottleneck blockers, and two actionable options (Option A vs B).`;

      diagnosis = `Day Master is seated on [${enDm}], with a ZiPing vigor score of ${ctx.vigorScore}/100 (${ctx.vigorTier}), rooted in the [${ctx.primaryArchetype}] workplace niche. In upward management, ${isWeak ? 'a sensitive Day Master tends to experience heightened defensive friction around authority; yet your prime moat is deep precision and deliverable dependability.' : 'a vigorous Day Master radiates pioneering authority, yet may inadvertently bypass granular updates and appear resistant to managerial oversight.'}`;

      tactics = [
        `[Conclusion-First with Metric Anchors]: Superiors value certainty over emotions. Lead with three objective milestones (tangible deliverable, % completed, bottleneck blockers) to dissipate emotional friction.`,
        `[Transform Objections into Scenarios]: Applying Feng Dao's Rong Ku Jian (${ctx.firstScroll}), never confront directly. Frame counter-proposals as: "Boss, aligned with your strategic intent, we have two execution paths (Option A vs B) with the following tradeoffs—which do you prefer to greenlight?"`,
        `[Clear Boundaries for Resources]: Operating within the [${ctx.primaryArchetype}] archetype, explicitly request clear deliverables and quiet focus blocks to preserve mental bandwidth.`
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
        directAnswer = `Imperial Verdict: Navigating under Hexagram [${(ctx.activeHexagram || 'The Creative').replace(/[一-龥]/g, '').trim()}], only consider pivots that amplify your primary calling [${(ctx.primaryArchetype || 'Specialist').replace(/[一-龥]/g, '').trim()}]. Reject roles demanding superficial social appeasement.`;
      }

      diagnosis = `Navigating transit year ${ctx.activeAnnualYear} (${enGz}) governed by Hexagram [${ctx.activeHexagram}]. With a vigor score of ${ctx.vigorScore}/100, your field favors ${isWeak ? 'deep craftsmanship, specialized focus, and conservative consolidation' : 'bold multi-dimensional expansion and strategic frontline pioneering'}. The central directive is discerning true elevation from reactive escapism.`;

      tactics = [
        `[Archetype Alignment Filter]: Only pursue opportunities that directly reinforce your primary niche [${ctx.primaryArchetype}] and honor your need for depth; decline tracks that demand frivolous social pandering.`,
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
      directAnswer = `Imperial Verdict: The core doctrine is Direct Wealth as unshakeable anchor, with lightweight auxiliary initiatives compounding in Lunar Months 6 and 9. Avoid speculative high-leverage gambles.`;
      timingCard = this.calculateMonthlyTransitWindows(bazi, luck, ctx.activeAnnualYear, 'wealth_window', 'en');

      diagnosis = `Transiting year ${ctx.activeAnnualYear} (${enGz}) governed by Hexagram [${ctx.activeHexagram}]. Vigor sits at ${ctx.vigorScore}/100 (${ctx.vigorTier}). For wealth and career cultivation, the core protocol is "Direct Wealth as anchor, Indirect Wealth as opportune upside, compounding steadily."`;

      tactics = [
        `[Consolidate the Core Base]: Keep your primary vocation completely unshakeable, allocating 80% of mental bandwidth to deepening irreplaceable technical depth.`,
        `[Lightweight 0-to-1 Second Curves]: For auxiliary ventures, validate prototypes with minimal capital burn before deploying further resources.`,
        `[Prudent Discretion]: Heed the counsel of ${ctx.firstScroll}—accumulate wealth with disciplined subtlety; deep waters carry mighty vessels with silence.`
      ];

      redLines = [
        `Never enter high-leverage speculative ventures with opaque terms;`,
        `Never partner with individuals exhibiting broken integrity or turbulent astrological clash.`
      ];

      mentalAnchor = `Di Tian Sui: "How is great wealth discerned? When the qi of wealth opens the gates. Direct and Indirect Wealth mutually generative establish enduring fortune."`;
    } else {
      title = 'Macro Elemental Alignment & Strategic Overview';
      directAnswer = `Imperial Verdict: Navigating under the 2026 Bing-Wu transit governed by Hexagram [${(ctx.activeHexagram || 'The Creative').replace(/[一-龥]/g, '').trim()}], the overarching mandate is internal consolidation and disciplined alignment. Tap any of the anticipated prompts below to explore deeper.`;

      diagnosis = `Day Master [${enDm}] carries a vigor score of ${ctx.vigorScore}/100 (${ctx.vigorTier}) under the ${ctx.activeAnnualYear} (${enGz}) transit governed by Hexagram [${ctx.activeHexagram}]. Your field is currently positioned in a phase of ${isWeak ? 'internal consolidation, stealth mastery, and energy conservation' : 'steady strategic expansion, grounded authority, and broad momentum'}.`;

      tactics = [
        `[Harmonize with Natural Cycles]: Align personal rhythms with seasonal transitions. Prioritize restorative sleep and physical grounding to nurture your core root.`,
        `[Focus on Compounding Anchors]: Discard superficial noise and channel mental bandwidth into one or two high-leverage initiatives.`,
        `[Pragmatic Adaptability]: Embody the wisdom of ${ctx.firstScroll}—remain flexible, calm, and let patience resolve outer obstacles.`
      ];

      redLines = [
        `Never execute major life-altering decisions when fatigued or running low on physical vitality;`,
        `Never waste cognitive compute on trivial social debates or ungrounded speculation.`
      ];

      mentalAnchor = `Zhuangzi (Free and Easy Wandering): "He who travels to the green woods takes three meals and returns with his belly still full; he who travels a hundred leagues pounds grain by night; he who travels a thousand leagues gathers provisions for three months. Mount the true order of heaven and earth, and ride upon the changes of the six energies!"`;
    }

    const smartFollowUps = this.anticipateQuestions(category, subcategory, bazi, 'en');
    const actionLinks = this.getActionLinks(category, subcategory, 'en');

    return {
      category: category,
      subcategory: subcategory,
      title: title,
      directAnswer: directAnswer,
      timingCard: timingCard,
      profileCard: profileCard,
      contextMeta: {
        dm: enDm,
        score: ctx.vigorScore,
        tier: ctx.vigorTier,
        year: ctx.activeAnnualYear,
        ganzhi: enGz,
        hex: (ctx.activeHexagram || 'The Creative').replace(/[一-龥]/g, '').trim() || 'The Creative',
        scroll: (ctx.firstScroll || 'Scroll I: Adaptability').replace(/[一-龥]/g, '').trim() || 'Scroll I: Adaptability',
        archetype: (ctx.primaryArchetype || 'Specialist & Engineering').replace(/[一-龥]/g, '').trim() || 'Specialist & Engineering'
      },
      diagnosis: diagnosis,
      tactics: tactics,
      redLines: redLines,
      mentalAnchor: mentalAnchor,
      smartFollowUps: smartFollowUps,
      actionLinks: actionLinks
    };
  }
}

if (typeof window !== 'undefined') {
  window.AdvisorEngine = AdvisorEngine;
}
if (typeof globalThis !== 'undefined') {
  globalThis.AdvisorEngine = AdvisorEngine;
}
