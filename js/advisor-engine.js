/**
 * 钦天监随身军师 · 交互式智能决策参谋引擎 (Interactive Advisor Agent Engine)
 * Synthesizes Day Master strength, 100-point vigor, 14-character temporal field,
 * Master Ni's Yin-Yang hexagram dynamics, and Feng Dao's Rong Ku Jian codex into real-time tactical guidance.
 * 100% Offline-First, deterministic, and fully bilingual (zh/en).
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

    // Retrieve active transit details
    let activeDecade = null;
    let activeAnnual = null;
    let activeHex = null;
    let firstScroll = null;
    let primaryArchetype = '技术人员 (Specialist)';

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
   * Generate bespoke tactical decision advice
   */
  static generateAdvice(userQuery, bazi, luck, currentYear = 2026, lang = 'zh') {
    const isEn = (lang === 'en');
    const ctx = this.buildContext(bazi, luck, currentYear, null, lang) || {
      dayMaster: '甲',
      element: 'Wood',
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
    const dm = ctx.dayMaster;
    const scroll = ctx.firstScroll;
    const hex = ctx.activeHexagram;
    const arch = ctx.primaryArchetype;

    // Determine query intent category
    const q = (userQuery || '').toLowerCase();
    let category = 'general';
    if (q.includes('向上') || q.includes('汇报') || q.includes('领导') || q.includes('上级') || q.includes('manage') || q.includes('boss') || q.includes('supervisor')) {
      category = 'manage_up';
    } else if (q.includes('跳槽') || q.includes('转轨') || q.includes('留任') || q.includes('抉择') || q.includes('pivot') || q.includes('career') || q.includes('switch')) {
      category = 'career_pivot';
    } else if (q.includes('内耗') || q.includes('反刍') || q.includes('焦虑') || q.includes('怀疑') || q.includes('friction') || q.includes('doubt') || q.includes('anxiety')) {
      category = 'overthinking';
    } else if (q.includes('财') || q.includes('钱') || q.includes('投资') || q.includes('副业') || q.includes('wealth') || q.includes('money') || q.includes('invest')) {
      category = 'wealth_window';
    }

    if (isEn) {
      return this._generateAdviceEn(category, ctx, isWeak, userQuery);
    }
    return this._generateAdviceZh(category, ctx, isWeak, userQuery);
  }

  static _generateAdviceZh(category, ctx, isWeak, query) {
    let diagnosis = '';
    let tactics = [];
    let redLines = [];
    let mentalAnchor = '';

    if (category === 'manage_up') {
      diagnosis = `命主日元坐【${ctx.dayMaster}】，子平量化活力评分为 ${ctx.vigorScore} 分（${ctx.vigorTier}），天命主场定位于【${ctx.primaryArchetype}】。在向上管理中，${isWeak ? '身弱之人天生敏锐多思，容易在威权面前产生过度预警或防御性抵抗；但你的核心护城河是“专业深度与交付确定性”。' : '身旺之人自带魄力与开创锐气，但容易在汇报时略去细节过程、显得过于强势甚至暗含抗拒管束之意。'}`;
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
      diagnosis = `命主日元【${ctx.dayMaster}】，敏锐感知力与推演力远超常人。平庸愚钝之人绝无内耗之苦，你能内耗，说明心智算力处于空转状态。当这股庞大的精神能量没有被物理世界的具体任务吸收时，它便会掉转枪口向内自残。`;
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
    } else {
      // Wealth & General
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
    }

    return {
      category: category,
      title: (category === 'manage_up') ? '向上管理与职场破局锦囊' : (category === 'career_pivot') ? '战略转轨与去留决断神机' : (category === 'overthinking') ? '斩断内耗与心智重置秘要' : '财富机缘与攻守平衡智策',
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
      mentalAnchor: mentalAnchor
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

  static _ganzhiToEn(gz) {
    if (!gz || typeof gz !== 'string') return 'Bing-Wu';
    const stems = { '甲': 'Jia', '乙': 'Yi', '丙': 'Bing', '丁': 'Ding', '戊': 'Wu', '己': 'Ji', '庚': 'Geng', '辛': 'Xin', '壬': 'Ren', '癸': 'Gui' };
    const branches = { '子': 'Zi', '丑': 'Chou', '寅': 'Yin', '卯': 'Mao', '辰': 'Chen', '巳': 'Si', '午': 'Wu', '未': 'Wei', '申': 'Shen', '酉': 'You', '戌': 'Xu', '亥': 'Hai' };
    const s = gz[0], b = gz[1];
    if (stems[s] && branches[b]) return `${stems[s]}-${branches[b]}`;
    return 'Current Year';
  }

  static _generateAdviceEn(category, ctx, isWeak, query) {
    const enDm = this._stemToEn(ctx.dayMaster);
    const enGz = this._ganzhiToEn(ctx.activeAnnualGanzhi);

    let diagnosis = '';
    let tactics = [];
    let redLines = [];
    let mentalAnchor = '';

    if (category === 'manage_up') {
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
    } else {
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
    }

    return {
      category: category,
      title: (category === 'manage_up') ? 'Upward Management & Workplace Directive' : (category === 'career_pivot') ? 'Strategic Crossroads & Pivot Oracle' : (category === 'overthinking') ? 'Cognitive Reset & Somatic Protocol' : 'Wealth Horizon & Tactical Balance',
      contextMeta: {
        dm: enDm,
        score: ctx.vigorScore,
        tier: ctx.vigorTier,
        year: ctx.activeAnnualYear,
        ganzhi: enGz,
        hex: ctx.activeHexagram,
        scroll: ctx.firstScroll,
        archetype: ctx.primaryArchetype
      },
      diagnosis: diagnosis,
      tactics: tactics,
      redLines: redLines,
      mentalAnchor: mentalAnchor
    };
  }
}

if (typeof window !== 'undefined') {
  window.AdvisorEngine = AdvisorEngine;
}
if (typeof globalThis !== 'undefined') {
  globalThis.AdvisorEngine = AdvisorEngine;
}
