/**
 * BaZi Luck & Fortune Cycles Engine (大运、流年、流月、流日推演系统)
 * Computes Major 10-Year Decades, Annual Luck, Monthly Solar Terms, Daily JDN, and 5-Pillar Interactions.
 */

const LuckEngine = (function() {
  const STEMS = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
  const BRANCHES = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
  const MONTH_BRANCHES = ['寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥', '子', '丑'];
  const JIE_NAMES = ['立春', '惊蛰', '清明', '立夏', '芒种', '小暑', '立秋', '白露', '寒露', '立冬', '大雪', '小寒'];
  const JIE_EN_NAMES = [
    'Beginning of Spring', 'Awakening of Insects', 'Clear and Bright', 'Beginning of Summer',
    'Grain in Ear', 'Minor Heat', 'Beginning of Autumn', 'White Dew',
    'Cold Dew', 'Beginning of Winter', 'Major Snow', 'Minor Cold'
  ];

  const STEM_ELEMENTS = ['木', '木', '火', '火', '土', '土', '金', '金', '水', '水'];
  const BRANCH_ELEMENTS = ['水', '土', '木', '木', '土', '火', '火', '土', '金', '金', '土', '水'];
  const STEM_YINYANG = ['阳', '阴', '阳', '阴', '阳', '阴', '阳', '阴', '阳', '阴'];

  const NA_YIN = [
    '海中金', '海中金', '炉中火', '炉中火', '大林木', '大林木', '路旁土', '路旁土', '剑锋金', '剑锋金',
    '山头火', '山头火', '涧下水', '涧下水', '城头土', '城头土', '白蜡金', '白蜡金', '杨柳木', '杨柳木',
    '泉中水', '泉中水', '屋上土', '屋上土', '霹雳火', '霹雳火', '松柏木', '松柏木', '长流水', '长流水',
    '沙中金', '沙中金', '山下火', '山下火', '平地木', '平地木', '壁上土', '壁上土', '金箔金', '金箔金',
    '覆灯火', '覆灯火', '天河水', '天河水', '大驿土', '大驿土', '钗钏金', '钗钏金', '桑柘木', '桑柘木',
    '大溪水', '大溪水', '沙中土', '沙中土', '天上火', '天上火', '石榴木', '石榴木', '大海水', '大海水'
  ];

  const TEN_GODS_TABLE = {
    '木': { '木': ['比肩', '劫财'], '火': ['食神', '伤官'], '土': ['偏财', '正财'], '金': ['七杀', '正官'], '水': ['偏印', '正印'] },
    '火': { '火': ['比肩', '劫财'], '土': ['食神', '伤官'], '金': ['偏财', '正财'], '水': ['七杀', '正官'], '木': ['偏印', '正印'] },
    '土': { '土': ['比肩', '劫财'], '金': ['食神', '伤官'], '水': ['偏财', '正财'], '木': ['七杀', '正官'], '火': ['偏印', '正印'] },
    '金': { '金': ['比肩', '劫财'], '水': ['食神', '伤官'], '木': ['偏财', '正财'], '火': ['七杀', '正官'], '土': ['偏印', '正印'] },
    '水': { '水': ['比肩', '劫财'], '木': ['食神', '伤官'], '火': ['偏财', '正财'], '土': ['七杀', '正官'], '金': ['偏印', '正印'] }
  };

  function getTenGod(dm, targetStem) {
    const dmIdx = STEMS.indexOf(dm);
    const targetIdx = STEMS.indexOf(targetStem);
    if (dmIdx < 0 || targetIdx < 0) return '';
    const dmEl = STEM_ELEMENTS[dmIdx];
    const targetEl = STEM_ELEMENTS[targetIdx];
    const dmYY = STEM_YINYANG[dmIdx];
    const targetYY = STEM_YINYANG[targetIdx];
    return TEN_GODS_TABLE[dmEl][targetEl][dmYY === targetYY ? 0 : 1];
  }

  function getNaYin(pillar) {
    if (!pillar || pillar.length < 2) return '';
    const sIdx = STEMS.indexOf(pillar[0]);
    const bIdx = BRANCHES.indexOf(pillar[1]);
    if (sIdx < 0 || bIdx < 0) return '';
    for (let i = 0; i < 60; i++) {
      if (i % 10 === sIdx && i % 12 === bIdx) {
        return NA_YIN[i];
      }
    }
    return '';
  }

  function gregorianToJDN(year, month, day) {
    let y = year, m = month;
    if (m <= 2) { y -= 1; m += 12; }
    const a = Math.floor(y / 100);
    const b = 2 - a + Math.floor(a / 4);
    return Math.floor(365.25 * (y + 4716)) + Math.floor(30.6001 * (m + 1)) + day + b - 1524;
  }

  /**
   * Determine Day Master Vigor (Strong vs Weak)
   */
  function isDayMasterStrong(bazi) {
    if (typeof PortraitEngine !== 'undefined' && typeof PortraitEngine.evaluateVigor === 'function') {
      try {
        const v = PortraitEngine.evaluateVigor(bazi);
        if (v && typeof v.totalScore === 'number') {
          return v.totalScore >= 50;
        }
      } catch (e) {}
    }
    const dm = bazi.dayMaster;
    const dmEl = bazi.dayMasterElement || STEM_ELEMENTS[STEMS.indexOf(dm)];
    const mb = (bazi.solarInfo && bazi.solarInfo.monthBranch) || (bazi.pillars && bazi.pillars.month && bazi.pillars.month.branch) || '寅';
    const seasonEls = {
      '寅': '木', '卯': '木', '辰': '土',
      '巳': '火', '午': '火', '未': '土',
      '申': '金', '酉': '金', '戌': '土',
      '亥': '水', '子': '水', '丑': '土'
    };
    const elementGeneratedBy = { '木': '水', '火': '木', '土': '火', '金': '土', '水': '金' };
    const mEl = seasonEls[mb];
    return (mEl === dmEl || mEl === elementGeneratedBy[dmEl]);
  }

  /**
   * Comprehensive Fortune Evaluation for Transit Pillars (大运、流年、流月、流日)
   * Determines Good vs Bad, Deep Meaning, Aspects that Could Go Wrong (if Good), and Taboos (if Bad)
   */
  function evaluateTransitFortune(bazi, pillar, transitType) {
    const isStrong = isDayMasterStrong(bazi);
    const god = pillar.stemGod || getTenGod(bazi.dayMaster, pillar.stem);
    const text = pillar.text || (pillar.stem + pillar.branch);

    const typeNames = {
      decade: { zh: '十年大运', en: '10-Year Major Decade' },
      annual: { zh: '流年太岁', en: 'Annual Transit' },
      monthly: { zh: '节令流月', en: 'Solar Month' },
      daily: { zh: '流日精微', en: 'Transit Day' }
    };
    const tName = typeNames[transitType] || typeNames.decade;

    let rating = 'good';
    let badgeZh = '🟢 吉';
    let badgeEn = '🟢 Auspicious';
    let statusZh = '';
    let statusEn = '';
    let meaningZh = '';
    let meaningEn = '';
    let pitfallsZh = '';
    let pitfallsEn = '';
    let taboosZh = '';
    let taboosEn = '';
    let guidanceZh = '';
    let guidanceEn = '';

    if (god.includes('正印')) {
      if (!isStrong) {
        rating = 'good';
        badgeZh = '🟢 吉';
        badgeEn = '🟢 Auspicious';
        statusZh = '🟢 顺畅吉运 · 正印生身';
        statusEn = '🟢 Favorable · Direct Resource Generating Self';
        meaningZh = `此${tName.zh}【${text}】临正印，主权威尊长庇护、学术声誉、专业资质与心神安宁。运逢甘露，利于借助主流平台立足、考取功名认证、调养身心并建立长久壁垒。`;
        meaningEn = `This ${tName.en} [${text}] brings Direct Resource, ruling mentor protection, certifications, institutional elevation, and mental tranquility. Optimal for platform leverage and rebuilding vitality.`;
        pitfallsZh = '⚠️【吉中防患 · 居安思危】：虽得贵人庇佑，谨防贪恋安逸舒适圈而丧失独立开拓锐气；切勿过度透支人情面子招致潜在人情负债；重要法务合同必须亲审，警惕隐性免责条款；体力与气血逐渐恢复后切忌盲目贪多扩张。';
        pitfallsEn = '⚠️【Aspects That Could Go Wrong】: Under institutional shelter, beware of complacency and losing competitive drive. Do not incur heavy moral debts; personally audit contracts for hidden disclaimers; avoid premature reckless expansion as vitality recovers.';
        guidanceZh = '🎯【行动策略】：主动向前辈请益，借助稳定合规系统筑牢专业护城河，将学识与声望转化为长期复利资产。';
        guidanceEn = '🎯【Tactical Action】: Seek veteran mentor guidance, compound core skills within structured systems, and convert credentials into enduring assets.';
      } else {
        rating = 'bad';
        badgeZh = '🔴 慎';
        badgeEn = '🔴 Challenging';
        statusZh = '🔴 考验磨砺 · 旺印重叠';
        statusEn = '🔴 Challenging · Excessive Resource Inertia';
        meaningZh = `身旺再逢重印生身，母慈灭子，土多金埋。气机凝滞，容易陷入想多做少、自命清高、脱离商业现实的理论内耗中。`;
        meaningEn = `A strong frame meeting further Resource triggers energetic stagnation, theoretical perfectionism, overthinking, and disconnected market execution.`;
        taboosZh = '🛑【避坑戒律 · 绝对切勿作为】：绝对切忌闭门造车脱离市场一线与客户真实反馈；切忌因清高傲慢而鄙薄商业常识；严禁未经市场验证盲目为情怀项目重金买单；切忌陷入无休止的考证推演而迟迟不敢下场交付。';
        taboosEn = '🛑【Strict Taboos (What NOT to Do)】: DO NOT isolate in academic ivory towers disconnected from commercial realities; NEVER disdain practical market feedback; DO NOT fund unvalidated vanity projects; DO NOT procrastinate execution in endless study loops.';
        guidanceZh = '🎯【行动策略】：强制以可交付商业成果和现金流为抓手，多接触一线业务人员，用实际行动破除精神空转。';
        guidanceEn = '🎯【Tactical Action】: Anchor firmly in measurable outputs and cash-flow delivery, forcing practical action to break through mental inertia.';
      }
    } else if (god.includes('偏印') || god.includes('枭')) {
      if (!isStrong) {
        rating = 'good';
        badgeZh = '🟢 吉';
        badgeEn = '🟢 Auspicious';
        statusZh = '🟢 顺畅吉运 · 偏印通幽';
        statusEn = '🟢 Favorable · Specialized Breakthrough';
        meaningZh = `此${tName.zh}【${text}】临偏印，主独门绝技、底层技术研发、逆向思维与冷门赛道的突破性领悟。利于攻克高壁垒硬核课题与开创专属IP。`;
        meaningEn = `This ${tName.en} [${text}] brings Indirect Resource, fostering esoteric insight, deep-tech breakthroughs, contrarian thinking, and specialized IP creation.`;
        pitfallsZh = '⚠️【吉中防患 · 居安思危】：洞察深邃但极易钻牛角尖，谨防自命不凡而脱离团队协同；高度警惕夜间灵感亢奋导致的失眠偏头痛与脾胃失调；与人沟通切忌晦涩孤傲，防范人际误解排挤。';
        pitfallsEn = '⚠️【Aspects That Could Go Wrong】: Profound insight easily lapses into stubborn isolation. Guard against insomnia, migraine, and digestive strain from night work; avoid obscure, cynical communication that alienates allies.';
        guidanceZh = '🎯【行动策略】：将冷门独特见解沉淀为专利体系或作品，定期进行阳光户外运动调和身心。';
        guidanceEn = '🎯【Tactical Action】: Formalize unique insights into systematic intellectual property, patents, or publications while maintaining regular outdoor restorative pacing.';
      } else {
        rating = 'bad';
        badgeZh = '🔴 慎';
        badgeEn = '🔴 Challenging';
        statusZh = '🔴 考验磨砺 · 枭神夺食';
        statusEn = '🔴 Challenging · Owl God Clashing Output';
        meaningZh = `身旺逢偏印枭神，古云“枭神夺食”。创造力与表达欲受到压制，猜忌多疑，身心内耗加剧，容易与亲近之人产生情感隔阂。`;
        meaningEn = `Strong self encountering Owl God suppresses creative fire, fueling chronic suspicion, emotional friction, and strained relationships.`;
        taboosZh = '🛑【避坑戒律 · 绝对切勿作为】：绝对切忌捕风捉影怀疑合作伙伴或伴侣的动机；严禁参与任何神怪偏门或高风险暗箱投资；切忌因情绪低沉而断绝一切正常社交退入孤岛；切勿将尖锐讥讽对准忠诚的支持者。';
        taboosEn = '🛑【Strict Taboos (What NOT to Do)】: Absolutely DO NOT succumb to paranoid suspicion about partners or loved ones; NEVER invest in opaque esoteric schemes; DO NOT withdraw into bitter isolation; NEVER direct sharp sarcasm at loyal supporters.';
        guidanceZh = '🎯【行动策略】：保持财务账目极度公开透明，规律作息，遇事直接核对客观事实而非主观臆想，多通过有氧运动排汗解郁。';
        guidanceEn = '🎯【Tactical Action】: Maintain rigorous accounting transparency and brisk aerobic exercise, grounding the mind in verifiable facts rather than dark assumptions.';
      }
    } else if (god.includes('比肩')) {
      if (!isStrong) {
        rating = 'good';
        badgeZh = '🟢 吉';
        badgeEn = '🟢 Auspicious';
        statusZh = '🟢 顺畅吉运 · 同道相助';
        statusEn = '🟢 Favorable · Peer Alignment & Shared Strength';
        meaningZh = `此${tName.zh}【${text}】临比肩，同气相求，兄弟朋友同心戮力。容易结识志趣相投的合伙人与团队同侪，共担风雨，破除单打独斗的瓶颈。`;
        meaningEn = `This ${tName.en} [${text}] brings the Friend star, gathering reliable peers and collaborative teammates to break through lonely bottlenecks.`;
        pitfallsZh = '⚠️【吉中防患 · 居安思危】：同侪虽亲，丑话须说在前头。谨防因哥们义气而模糊股权与财务协议细节；切勿盲目充当朋友借贷担保人或代持资产；利益分配界限不清极易埋下日后反目地雷。';
        pitfallsEn = '⚠️【Aspects That Could Go Wrong】: Friendship is high, but legal boundaries must be strict. Beware of vague equity terms that breed future resentment; never guarantee third-party loans out of emotional pride; ensure transparent financial audits.';
        guidanceZh = '🎯【行动策略】：组建互补型攻坚战队，出资与退出机制立字为据，以现代合伙人机制凝聚团队合力。';
        guidanceEn = '🎯【Tactical Action】: Assemble a complementary coalition, codifying shares, responsibilities, and buy-out rules in writing before operational kickoff.';
      } else {
        rating = 'bad';
        badgeZh = '🔴 慎';
        badgeEn = '🔴 Challenging';
        statusZh = '🔴 考验磨砺 · 同侪争夺';
        statusEn = '🔴 Challenging · Rivalry & Profit Dilution';
        meaningZh = `身旺逢比肩，同辈分夺权柄与利益。同行恶性内卷加剧，客户资源易遭分流撬单，利润被摊薄，容易引发合作纠纷与口舌摩擦。`;
        meaningEn = `Strong self meeting Friend star intensifies competitive encroachment, margin compression, peer friction, and potential disputes.`;
        taboosZh = '🛑【避坑戒律 · 绝对切勿作为】：绝对切忌与同行在红海市场打恶性价格战两败俱伤；严禁向朋友熟人无抵押出借大额资金；切忌在团队中搞一言堂霸道行事；切勿向外随意泄露未落地的核心商业底牌。';
        taboosEn = '🛑【Strict Taboos (What NOT to Do)】: DO NOT engage in ruinous zero-sum price wars; NEVER lend substantial unsecured funds to friends; DO NOT enforce autocracy in partnerships; NEVER prematurely disclose proprietary plans.';
        guidanceZh = '🎯【行动策略】：主动避开存量零和博弈，开辟差异化增量细分赛道；在利益分配上主动让出微利换取盟友相护。';
        guidanceEn = '🎯【Tactical Action】: Pivot toward differentiated blue-ocean niches, voluntarily sharing margin to convert rivals into co-investors.';
      }
    } else if (god.includes('劫财')) {
      if (!isStrong) {
        rating = 'good';
        badgeZh = '🟢 吉';
        badgeEn = '🟢 Auspicious';
        statusZh = '🟢 顺畅吉运 · 阳刃夺魁';
        statusEn = '🟢 Favorable · Bold Pioneer & Competitive Victory';
        meaningZh = `弱质得遇劫财阳刃，如得虎狼先锋。行事魄力与决断力倍增，敢于在胶着险局中亮剑突围，能在关键资源抢夺战中克敌制胜。`;
        meaningEn = `Weak self blessed with Rob Wealth gains ferocious fighting courage, cutting through stagnation and winning contested market resources.`;
        pitfallsZh = '⚠️【吉中防患 · 居安思危】：豪气过盛容易演化为冒进狂躁，谨防因情绪上头许下超能兑现的诺言；获胜后必须论功行赏稳固军心，切莫独吞利益；严防胜局已定之时心防松懈招致暗箭反扑。';
        pitfallsEn = '⚠️【Aspects That Could Go Wrong】: Audacity can slip into impetuous bravado. Avoid making sweeping promises you cannot deliver; distribute gains generously to loyal soldiers; guard against counter-offensives after initial triumphs.';
        guidanceZh = '🎯【行动策略】：借勇毅之势快刀斩乱麻拿下硬骨头，一旦占领高地立刻健全正规制度加固防御。';
        guidanceEn = '🎯【Tactical Action】: Leverage high-octane courage to capture contested ground, then immediately institute orderly SOPs to secure the win.';
      } else {
        rating = 'bad';
        badgeZh = '🔴 慎';
        badgeEn = '🔴 Challenging';
        statusZh = '🔴 考验磨砺 · 劫财破耗';
        statusEn = '🔴 Challenging · Asset Leaks & Conflict Minefield';
        meaningZh = `身旺逢劫财，为破耗伤财之魁。行事易冲动莽撞、盲目挥霍，投资易遭踩雷反噬，团队骨干易生二心，婚姻情感矛盾激烈。`;
        meaningEn = `Strong self encountering Rob Wealth is the prime omen of severe financial leaks, bad bets, betrayal, and domestic crises.`;
        taboosZh = '🛑【避坑戒律 · 绝对切勿作为】：绝对切忌参与任何加杠杆炒币炒股、地下非法集资或涉赌博彩；严禁给任何亲友签署债务担保；切忌因脾气失控与他人发生肢体或法律纠纷；切勿酒后轻率应承重大商业合作。';
        taboosEn = '🛑【Strict Taboos (What NOT to Do)】: Absolutely DO NOT engage in leveraged speculation, gambling, or high-yield lending; NEVER co-sign or guarantee any loans; AVOID physical or explosive arguments; NEVER agree to major commercial deals under alcohol influence.';
        guidanceZh = '🎯【行动策略】：主动“破欢喜财”，将流动现金转化为不易变现的不动产、购置长期稳固研发设备或给家人买保障型保险，破耗自解。';
        guidanceEn = '🎯【Tactical Action】: Practice deliberate capital lockup: purchase illiquid conservative assets or upgrade core business tooling to preempt cash leaks.';
      }
    } else if (god.includes('食神')) {
      if (isStrong) {
        rating = 'good';
        badgeZh = '🟢 吉';
        badgeEn = '🟢 Auspicious';
        statusZh = '🟢 顺畅吉运 · 食神吐秀';
        statusEn = '🟢 Favorable · Creative Grace & Sustainable Fortune';
        meaningZh = `身旺泄秀于食神，如沃土孕育甘泉。从容洒脱，才思敏捷，研发作品与商业产品极具市场号召力，财源水到渠成、福禄双全。`;
        meaningEn = `Eating God releases vibrant intellect from a strong frame: effortless charm, exquisite craftsmanship, and sustainable wealth flow.`;
        pitfallsZh = '⚠️【吉中防患 · 居安思危】：生活滋润才情洋溢之时，谨防因过度追求完美细节而一再拖延商业交付节点；警惕暴饮暴食与懒散作息引发的代谢负担；切勿轻慢市场上低调野蛮的竞争对手。';
        pitfallsEn = '⚠️【Aspects That Could Go Wrong】: Serene abundance easily triggers perfectionist delays missing release windows; watch out for culinary overindulgence; never underestimate predatory commercial rivals.';
        guidanceZh = '🎯【行动策略】：深耕核心技艺与原创品牌，以过硬口碑立足，在保持优雅从容的同时严控项目交付节点。';
        guidanceEn = '🎯【Tactical Action】: Direct focus into one signature masterwork, marrying refined artistry with strict milestone deadlines.';
      } else {
        rating = 'bad';
        badgeZh = '🔴 慎';
        badgeEn = '🔴 Challenging';
        statusZh = '🔴 考验磨砺 · 食神泄身';
        statusEn = '🔴 Challenging · Chronic Exhaustion & Energy Drain';
        meaningZh = `身弱再遭食神抽丝剥茧，脑力极度透支，精力不济。付出海量心血却回报微薄，容易陷入慢性疲劳、注意力涣散的虚脱之象。`;
        meaningEn = `Weak self suffering constant drainage by Eating God triggers severe mental exhaustion, chronic fatigue, and unrewarded overextension.`;
        taboosZh = '🛑【避坑戒律 · 绝对切勿作为】：绝对切忌同时开启多个耗神大项目；切忌为讨好他人而无休止修改方案透支精力；严禁连续熬夜赶稿干活；切勿在脑子昏沉低血糖时做重大签约决断。';
        taboosEn = '🛑【Strict Taboos (What NOT to Do)】: DO NOT multitask across multiple sprawling projects; NEVER overcommit mental energy to appease clients; DO NOT work late nights; NEVER sign binding agreements while mentally exhausted.';
        guidanceZh = '🎯【行动策略】：坚决做减法！聚焦单一核心点，严格设定每天脑力工作上限，多喝温补热汤恢复精气神。';
        guidanceEn = '🎯【Tactical Action】: Ruthless subtraction: limit daily deep-work to 4 hours and replenish vital qi with restorative sleep and warm broths.';
      }
    } else if (god.includes('伤官')) {
      if (isStrong) {
        rating = 'good';
        badgeZh = '🟢 吉';
        badgeEn = '🟢 Auspicious';
        statusZh = '🟢 顺畅吉运 · 伤官生财';
        statusEn = '🟢 Favorable · Disruptive Triumph & Rapid Scaling';
        meaningZh = `身旺任伤官，如宝刀出鞘。思维敏锐前瞻，敢于打破行业教条，在技术变革、流量矩阵与商业模式创新中一骑绝尘、吸金如狂。`;
        meaningEn = `Hurting Officer unleashes pioneering disruption: brilliant strategic audacity, charismatic media reach, and massive financial scalability.`;
        pitfallsZh = '⚠️【吉中防患 · 居安思危】：才智绝伦极易目中无人，谨防言辞尖锐得罪同僚与监管机构；严防“伤官见官”引发的公关灾难与法务合规重罚；切勿仗着聪明游走在政策法律边缘踩雷。';
        pitfallsEn = '⚠️【Aspects That Could Go Wrong】: Genius breeds arrogance. Beware of razor-sharp words alienating allies and provoking bureaucratic crackdowns; never skirt regulatory compliance lines.';
        guidanceZh = '🎯【行动策略】：收敛狂傲之气，聘用专业法务合规总监设防，将澎湃冲劲全然转化为突破性硬核研发。';
        guidanceEn = '🎯【Tactical Action】: Cultivate humility, employ rigorous compliance auditors, and channel fiery energy strictly into breakthrough technical architecture.';
      } else {
        rating = 'bad';
        badgeZh = '🔴 慎';
        badgeEn = '🔴 Challenging';
        statusZh = '🔴 考验磨砺 · 伤官招祸';
        statusEn = '🔴 Challenging · Sharp Clashes & Burnout';
        meaningZh = `身弱逢伤官，狂风折弱柳。叛逆抗上之心甚切而抗风险能力不足，极易情绪失控与体制领导公开对轰，招致打压、口舌官非或身心重耗。`;
        meaningEn = `Weak self colliding with Hurting Officer sparks defiant emotional clashes with authority, resulting in workplace backlash, litigation, and constitutional breakdown.`;
        taboosZh = '🛑【避坑戒律 · 绝对切勿作为】：绝对切忌在公开网络平台实名发泄对单位、主管或政策的不满；严禁因一时委屈冲动裸辞；切忌参与任何性质的撕破脸互撕与法律诉讼；切忌酒后失态激化争执。';
        taboosEn = '🛑【Strict Taboos (What NOT to Do)】: Absolutely DO NOT rant against leadership or regulators on public platforms; NEVER quit your job in anger; AVOID contentious lawsuits; DO NOT make inflammatory statements after alcohol.';
        guidanceZh = '🎯【行动策略】：坚守“24小时冷静延迟发声”铁律，将委屈转化为私密成长日记，多做低心率有氧运动疏解郁怒。';
        guidanceEn = '🎯【Tactical Action】: Enforce a strict 24-hour delayed reply protocol for all heated matters, discharging internal frustration through steady outdoor cardio.';
      }
    } else if (god.includes('正财')) {
      if (isStrong) {
        rating = 'good';
        badgeZh = '🟢 吉';
        badgeEn = '🟢 Auspicious';
        statusZh = '🟢 顺畅吉运 · 财官两旺';
        statusEn = '🟢 Favorable · Solid Profitability & Stable Growth';
        meaningZh = `身旺任正财，主业稳健盈利，资产沉淀复利增长。契约严谨，业务合作井然有序，家庭婚姻和睦相伴。`;
        meaningEn = `Direct Wealth brings solid commercial cash-flow, disciplined wealth compounding, contractual integrity, and harmonious marriage.`;
        pitfallsZh = '⚠️【吉中防患 · 居安思危】：收益虽稳，谨防陷入守成惰性，漠视行业颠覆性技术冲击；谨防为蝇头小利寸步不让而伤了长期战略伙伴的体面；警惕久坐导致的腰椎与心血管隐患。';
        pitfallsEn = '⚠️【Aspects That Could Go Wrong】: Steady gains easily breed conservative inertia that blinds you to technological disruption; avoid stubborn micro-bargaining that alienates partners.';
        guidanceZh = '🎯【行动策略】：做深做精核心现金牛业务，定期提取10%~15%净利润投入防御型创新实验与资产安全仓。';
        guidanceEn = '🎯【Tactical Action】: Fortify baseline cash cows while allocating 15% net profits toward future-proof innovation experiments and insured bonds.';
      } else {
        rating = 'bad';
        badgeZh = '🔴 慎';
        badgeEn = '🔴 Challenging';
        statusZh = '🔴 考验磨砺 · 财重身困';
        statusEn = '🔴 Challenging · Wealth Burden & Health Strain';
        meaningZh = `财多身弱，富屋贫人。财星太旺而身躯娇弱无法负荷。极易因完成高额金钱指标而累坏身体，或为家庭经济账目劳神伤骨。`;
        meaningEn = `A weak constitution strained by heavy capital quotas: exhausted health chasing unattainable financial targets.`;
        taboosZh = '🛑【避坑戒律 · 绝对切勿作为】：绝对切忌背负超出偿债能力的个人房贷或商业负债；严禁接下严重透支体能、每周超80小时的高压高薪摧残岗位；切忌轻率接盘重资产实体店加盟。';
        taboosEn = '🛑【Strict Taboos (What NOT to Do)】: Absolutely DO NOT take heavy personal mortgages or business debt; NEVER accept grueling 80-hour workweeks that ruin immune health; DO NOT take on capital-heavy franchise stores.';
        guidanceZh = '🎯【行动策略】：轻装简行！做轻资产服务与智囊型角色，依托大企业拿稳定提成，守住身心健康底线。';
        guidanceEn = '🎯【Tactical Action】: Run asset-light advisory models, partnering with established platforms for revenue shares without personal balance-sheet liability.';
      }
    } else if (god.includes('偏财')) {
      if (isStrong) {
        rating = 'good';
        badgeZh = '🟢 吉';
        badgeEn = '🟢 Auspicious';
        statusZh = '🟢 顺畅吉运 · 偏财纵横';
        statusEn = '🟢 Favorable · Capital Expansion & Venture Returns';
        meaningZh = `身旺逢偏财，乃商界纵横捭阖、资本运作与大规模商业裂变之天时。手腕灵活机敏，利于项目融资、大单并购与商业模式规模化。`;
        meaningEn = `Indirect Wealth brings expansive commercial dealmaking, venture capital, high-multiple scaling, and financial agility.`;
        pitfallsZh = '⚠️【吉中防患 · 居安思危】：来财迅猛极易财来财去成过路财神；谨防生活骄奢淫逸引发桃花纠纷与家庭破裂；严禁挪用公司经营性流动资金去进行高风险二级市场博弈；必须强制储备至少18个月生存防汛金。';
        pitfallsEn = '⚠️【Aspects That Could Go Wrong】: Fast capital inflows easily vanish. Beware of lavish hedonism triggering messy scandals; never divert operational working capital into high-risk bets; secure an 18-month cash moat.';
        guidanceZh = '🎯【行动策略】：严格执行“收益强制截留归仓”铁律，将部分快钱转投低波动性不动产或长期国债，锁定胜利成果。';
        guidanceEn = '🎯【Tactical Action】: Enforce an automatic profit-sweep rule into defensive treasuries, securing real liquidity gains.';
      } else {
        rating = 'bad';
        badgeZh = '🔴 慎';
        badgeEn = '🔴 Challenging';
        statusZh = '🔴 考验磨砺 · 贪财招灾';
        statusEn = '🔴 Challenging · Speculation Debt & Entanglement';
        meaningZh = `身弱遇大偏财，犹如稚童抱金过闹市。贪念一起则陷阱随之而生，极易遭遇金融诈骗、朋友借款不还、商业连环债务套牢或婚外桃色纠纷。`;
        meaningEn = `A child carrying gold across a crowded bazaar: commercial greed triggers fraud, debt traps, and domestic turmoil.`;
        taboosZh = '🛑【避坑戒律 · 绝对切勿作为】：绝对切忌参与任何所谓“内幕消息”炒币、高息地下集资或非法金融衍生品；严禁向亲友大额借钱去以小博大；切忌婚外寻欢作乐惹火烧身；切忌盲目扩充团队与门面排场。';
        taboosEn = '🛑【Strict Taboos (What NOT to Do)】: DO NOT participate in opaque financial schemes, high-yield arbitrage, or insider stock tips; NEVER borrow to speculate; AVOID romantic entanglements; DO NOT lease lavish offices.';
        guidanceZh = '🎯【行动策略】：戒贪即是真聚财！安心守住本职专业薪资，定期做慈善义举散去虚浮之气，守正以避大难。';
        guidanceEn = '🎯【Tactical Action】: Contentment is your greatest financial moat. Anchor in baseline earnings and practice charitable donations to discharge toxic greed.';
      }
    } else if (god.includes('正官')) {
      if (isStrong) {
        rating = 'good';
        badgeZh = '🟢 吉';
        badgeEn = '🟢 Auspicious';
        statusZh = '🟢 顺畅吉运 · 官星清贵';
        statusEn = '🟢 Favorable · Institutional Elevation & Proven Leadership';
        meaningZh = `身旺得正官雕琢，百炼成钢。组织协调与战略治理能力备受高层赞许，迎来公职升迁、权威确立与业界高度声望。`;
        meaningEn = `Direct Officer brings professional promotion, esteemed governance, institutional elevation, and commanding leadership.`;
        pitfallsZh = '⚠️【吉中防患 · 居安思危】：居要职者极易遭同僚暗中嫉恨与捕风捉影；严守廉洁自律合规红线，切勿在合同审批或商务招待中违规越线；警惕大企业病官僚内耗，保持对业务前沿敏锐度。';
        pitfallsEn = '⚠️【Aspects That Could Go Wrong】: High office easily attracts covert peer jealousy. Adhere strictly to institutional compliance, rejecting dubious gifts; beware of bureaucratic inertia.';
        guidanceZh = '🎯【行动策略】：公道正直，多为下属争取切身发展空间，以严谨制度服人，构筑牢不可破的组织向心力。';
        guidanceEn = '🎯【Tactical Action】: Exercise transparent, meritocratic governance, shielding subordinates and winning deep institutional loyalty.';
      } else {
        rating = 'bad';
        badgeZh = '🔴 慎';
        badgeEn = '🔴 Challenging';
        statusZh = '🔴 考验磨砺 · 官重压身';
        statusEn = '🔴 Challenging · Heavy Institutional Burden & Stress';
        meaningZh = `身弱遇正官，制度化为枷锁。考核严苛无情、上司高压相逼，身心背负沉重考核指标，极易滋生失眠焦虑与自我怀疑。`;
        meaningEn = `Weak self under Direct Officer feels suffocated by rigid regulations, harsh management pressure, and unachievable corporate quotas.`;
        taboosZh = '🛑【避坑戒律 · 绝对切勿作为】：绝对切忌与直属上司或组织管理层公开对轰撕破脸；切忌逞强揽下超出能力范围的“背锅”死任务；严禁带病强撑熬夜加班；切勿因领导一时批评而陷入习得性无助。';
        taboosEn = '🛑【Strict Taboos (What NOT to Do)】: DO NOT launch head-on confrontations against executive leadership; NEVER accept suicide-mission project deadlines; DO NOT sacrifice critical health over corporate KPIs; DO NOT internalize workplace criticism into self-loathing.';
        guidanceZh = '🎯【行动策略】：学会委婉向上管理，以客观数据汇报资源缺口，主动申请资深导师（印星）介入指导化解危机。';
        guidanceEn = '🎯【Tactical Action】: Practice graceful upward management: document resource constraints in writing and seek veteran mentor intervention.';
      }
    } else {
      // 七杀 / 偏官
      if (isStrong) {
        rating = 'good';
        badgeZh = '🟢 吉';
        badgeEn = '🟢 Auspicious';
        statusZh = '🟢 顺畅吉运 · 偏官化权';
        statusEn = '🟢 Favorable · Turnaround Victory & High Authority';
        meaningZh = `身旺驾杀，英雄独揽兵符。敢于在最严峻的危机与混乱中力挽狂澜，破局开拓，执掌关键项目大权。`;
        meaningEn = `Seven Killings turns crisis into conquest. The strong native thrives in high-stakes turnaround environments, conquering frontiers with iron resolve.`;
        pitfallsZh = '⚠️【吉中防患 · 居安思危】：杀气过重四面树敌，雷霆手腕谨防逼人太甚引发暗中反扑；外出出行高度注意交通安全与防范意外跌打损伤；回家对待亲友伴侣必须卸下铠甲，切忌在家施展霸道作风。';
        pitfallsEn = '⚠️【Aspects That Could Go Wrong】: Fierce authority easily creates enemies. Beware of backlashes from disgruntled subordinates; observe travel safety; take off your armor when returning home.';
        guidanceZh = '🎯【行动策略】：战役取得决定性胜利后，主动广施善意抚恤部属，将威服化为真正的由衷信服。';
        guidanceEn = '🎯【Tactical Action】: Exercise magnanimity in victory: follow decisive action with generous rehabilitation, converting conquered adversaries into allies.';
      } else {
        rating = 'bad';
        badgeZh = '🔴 慎';
        badgeEn = '🔴 Challenging';
        statusZh = '🔴 考验磨砺 · 七杀攻身';
        statusEn = '🔴 Challenging · Acute Adversity & Severe Caution';
        meaningZh = `身弱逢七杀克身，犹如猛虎扑向娇羊，乃时运之险阻。容易遭遇突发恶疾、官司诉讼、恶性小人霸凌或意外伤灾。`;
        meaningEn = `Weak self hunted by Seven Killings represents a perilous transit: acute health crises, predatory rivals, litigation, and severe existential threats.`;
        taboosZh = '🛑【避坑戒律 · 绝对切勿作为】：绝对切忌与流氓恶霸或霸凌势力发生肢体及言语硬碰硬对抗；严禁参与赛车、高空跳伞、野潜等极端高危运动；切忌出具任何个人名义的担保与抵押；切勿无视身体出现的持续隐痛警报，须立刻就医。';
        taboosEn = '🛑【Strict Taboos (What NOT to Do)】: Absolutely DO NOT engage in physical or aggressive confrontations with bullies or hostile adversaries; NEVER participate in extreme danger sports; DO NOT sign guarantees; NEVER ignore persistent physical pain symptoms.';
        guidanceZh = '🎯【行动策略】：低调！退避三舍，全面退入防御纵深，寻求顶级权威专家、大律师或德高望重之印星贵人出面化解。';
        guidanceEn = '🎯【Tactical Action】: Adopt a radical low-profile stance. Retreat into defensive depth, bringing in top doctors, seasoned lawyers, or protective mentors.';
      }
    }

    const adversityBreakdown = generateAdversityBreakdown(god, isStrong, bazi, pillar, rating);

    return {
      rating,
      badgeZh,
      badgeEn,
      statusZh,
      statusEn,
      meaningZh,
      meaningEn,
      pitfallsZh,
      pitfallsEn,
      taboosZh,
      taboosEn,
      guidanceZh,
      guidanceEn,
      adversityBreakdown
    };
  }

  /**
   * Comprehensive origin and concrete manifestations for all adversity terms
   * Covers: Malicious Bullying, Physical Accidents, Lawsuits, Acute Illnesses, Wealth Leaks, and Relational Betrayal.
   */
  function generateAdversityBreakdown(god, isStrong, bazi, pillar, rating) {
    const isGood = (rating === 'good');
    const sources = [];

    if (god.includes('七杀') || god.includes('偏官')) {
      if (!isStrong) {
        sources.push({
          type: 'bullying',
          termZh: '恶性小人霸凌 / 恶意打压与职场排挤',
          termEn: 'Malicious Bullying & Hostile Encroachment',
          originZh: '【来源定位】：职场月令提纲遭克或岁运七杀透干，多源于手握权柄的霸道直属上司、流氓恶霸或蛮横竞对；亦易见网络匿名黑粉恶意造谣与群体网暴。',
          originEn: '【Origin & Actors】: Authoritarian superiors abusing executive power, predatory rivals, workplace cliques, or coordinated online smear campaigns.',
          manifestationZh: '【具象形态】：利用职权设卡、无端刁难、剥夺核心业务资源、公开人身侮辱或罗织莫须有罪名予以排挤。',
          manifestationEn: '【Manifestation】: Unreasonable performance quotas, deliberate obstruction of key resources, public humiliation, or trumped-up charges to force isolation.',
          defenseZh: '【精准防御法门】：退避三舍，绝不当面正面硬顶；所有指令必须通过企业微信/邮件文字留痕备份；主动寻求德高望重行业前辈或法律顾问（印星）作为坚实后盾。',
          defenseEn: '【Concrete Defense】: Adopt strategic retreat; never confront directly; ensure 100% written paper trails via email/official channels; engage senior mentors or legal counsel (Resource star) for institutional protection.'
        });
        sources.push({
          type: 'accident',
          termZh: '意外伤灾 / 急性血光外伤之险',
          termEn: 'Physical Accidents, Trauma & Bodily Harm',
          originZh: '【来源定位】：金木战伐或七杀强攻日元，易应在道路交通汽车碰撞、机械器械刮擦割伤、高空坠物砸伤或剧烈对抗运动扭伤骨折。',
          originEn: '【Origin & Actors】: Severe elemental clashing (Metal clashing Wood or Killing assaulting Day Master), manifesting in automotive collisions, mechanical tool lacerations, falls, or acute sports fractures.',
          manifestationZh: '【具象形态】：注意力分散导致车祸刮蹭、金属利刃割伤、高压作业环境外伤、肢体筋骨挫伤。',
          manifestationEn: '【Manifestation】: Highway traffic scrapes, sharp instrument wounds, construction/industrial accidents, or ligament and bone fractures.',
          defenseZh: '【精准防御法门】：运逢七杀主动“见微破血”，提前安排全身体检抽血化验或洗牙；严禁参与赛车、深潜、跳伞等极限运动；雨雪恶劣天气严禁夜间开快车。',
          defenseEn: '【Concrete Defense】: Proactively dissipate blood-trauma energy through scheduled medical blood tests or dental cleaning; strictly avoid extreme sports; never drive under severe weather or fatigued nighttime conditions.'
        });
        sources.push({
          type: 'litigation',
          termZh: '官司诉讼 / 苛刻合规稽查与法务纠纷',
          termEn: 'Litigation, Regulatory Audits & Legal Minefields',
          originZh: '【来源定位】：商业合同暗礁、离职劳动仲裁、知识产权恶意起诉、税务审计穿透检查或轻信他人签署连带借贷担保。',
          originEn: '【Origin & Actors】: Hidden contract breaches, labor arbitrations, predatory copyright lawsuits, tax authority audits, or joint debt guarantees.',
          manifestationZh: '【具象形态】：收到法院传票、账户被诉前保全冻结、行政罚款、因下属或合伙人违规牵连连带赔偿。',
          manifestationEn: '【Manifestation】: Court summons, pre-litigation bank account freezes, severe regulatory fines, or vicarious liability from rogue partners.',
          defenseZh: '【精准防御法门】：所有签约必须经过专业资深律师穿透审查；严禁一切口头君子协议；绝对拒绝为亲友出具任何形式的债务担保书。',
          defenseEn: '【Concrete Defense】: Mandate comprehensive legal vetting for all contractual clauses; eliminate informal verbal deals; absolutely refuse to sign personal debt guarantees.'
        });
        sources.push({
          type: 'illness',
          termZh: '突发恶疾 / 脏腑功能急性代偿崩溃',
          termEn: 'Acute Illnesses & Constitutional Breakdown',
          originZh: '【来源定位】：日元受旺杀克伐，神经系统长期高压紧绷，易引发心脑血管急性供血失衡、心肌炎、突发偏头痛或脏腑急性炎症。',
          originEn: '【Origin & Actors】: The Day Master suppressed by crushing Killing star: autonomic nervous overload, cardiovascular emergencies, severe migraines, and acute inflammatory attacks.',
          manifestationZh: '【具象形态】：剧烈偏头痛、血压剧烈波动、顽固性心悸失眠、消化道应激性溃疡出血。',
          manifestationEn: '【Manifestation】: Acute migraines, severe blood pressure spikes, erratic arrhythmias, and stress-induced peptic ulcers.',
          defenseZh: '【精准防御法门】：身体出现持续钝痛必须即刻就诊三甲医院；严格执行每天8小时深度睡眠保护期；通过慢速腹式呼吸降低交感神经过度激活。',
          defenseEn: '【Concrete Defense】: Immediately consult medical specialists upon persistent physical symptoms; protect an 8-hour sleep window; practice deep diaphragmatic breathing to pacify sympathetic nervous arousal.'
        });
        sources.push({
          type: 'wealth_drain',
          termZh: '破财破耗 / 危机紧急支出与资产缩水',
          termEn: 'Acute Wealth Leaks & Emergency Capital Drains',
          originZh: '【来源定位】：因突发事故、诉讼律师费、医疗急救账单或遭遇敲诈勒索而被迫支出大额储备金。',
          originEn: '【Origin & Actors】: Sudden emergency medical fees, legal retainer bills, settlement payoffs, or extortion demands forcing capital depletion.',
          manifestationZh: '【具象形态】：非生产性被迫大额破财，现金流被突发事件瞬间抽干，动摇家庭根本资产安全。',
          manifestationEn: '【Manifestation】: Massive unbudgeted outflows, cash reserves abruptly drained, imperiling fundamental financial security.',
          defenseZh: '【精准防御法门】：预先设立不可动用的专项应急救急准备金（至少6-12个月生活费）；主动参与社会公益慈善捐赠，以“破欢喜财”化解凶煞破财。',
          defenseEn: '【Concrete Defense】: Ring-fence an untouchable 6-12 month emergency liquidity buffer; make voluntary charitable donations to pre-emptively satisfy the wealth-drain cycle.'
        });
        sources.push({
          type: 'relational_severance',
          termZh: '感情婚变 / 亲友反目与阵营孤立',
          termEn: 'Relational Severance & Emotional Alienation',
          originZh: '【来源定位】：外部高压导致性情暴躁迁怒家人伴侣；或患难之时昔日盟友作壁上观甚至落井下石。',
          originEn: '【Origin & Actors】: External pressure discharged onto spouses at home; fair-weather allies abandoning or betraying you during crises.',
          manifestationZh: '【具象形态】：夫妻爆发剧烈争吵冷战、伴侣提出分居离婚、核心团队骨干离职另立门户。',
          manifestationEn: '【Manifestation】: Marital explosive rows, silent treatment, separation ultimatums, and core executive defections.',
          defenseZh: '【精准防御法门】：回家进门前静坐三分钟卸下职场负能量；真诚向伴侣倾诉压力而非指责挑剔；对人性期望值归零，看淡人走茶凉。',
          defenseEn: '【Concrete Defense】: Decompress for 3 minutes before stepping into your home; share vulnerability with your partner instead of projecting frustration; manage expectations of human loyalty.'
        });
      } else {
        sources.push({
          type: 'bullying',
          termZh: '吉中防患 · 四面树敌与暗箭中伤',
          termEn: 'Covert Peer Jealousy & Subordinate Resentment',
          originZh: '【来源定位】：杀伐决断虽揽大权，但雷霆手段易伤及无辜，引发被淘汰者的刻骨嫉恨与暗中联手抵制。',
          originEn: '【Origin & Actors】: Swift executive actions alienating disenfranchised peers and displaced competitors, sowing seeds for subterranean vendettas.',
          manifestationZh: '【具象形态】：下属匿名越级告发、竞对在行业协会暗中散播负面舆情。',
          manifestationEn: '【Manifestation】: Anonymous whistleblower leaks, competitor whisper campaigns, or coordinated trade body obstruction.',
          defenseZh: '【精准防御法门】：破竹克敌之后务必分封犒赏部属，留出利益退路，切勿赶尽杀绝。',
          defenseEn: '【Concrete Defense】: Follow swift triumph with generous rehabilitation and profit-sharing; never back a defeated opponent into a desperate corner.'
        });
        sources.push({
          type: 'accident',
          termZh: '吉中防患 · 舟车劳顿与出行安全隐患',
          termEn: 'Travel Fatigue & Transit Collision Hazards',
          originZh: '【来源定位】：出差频繁、日程密集，身心亢奋下易忽略路途交通安全。',
          originEn: '【Origin & Actors】: High-tempo business transit schedules causing driver distraction and logistical collisions.',
          manifestationZh: '【具象形态】：长途高速疲劳驾驶险情、差旅途中滑倒扭伤。',
          manifestationEn: '【Manifestation】: Highway speeding close-calls, slip-and-fall injuries during international travel.',
          defenseZh: '【精准防御法门】：严禁疲劳驾驶，长途差旅优先选乘高铁飞机并购置足额交通意外险。',
          defenseEn: '【Concrete Defense】: Mandate designated drivers; prioritize high-speed rail; maintain comprehensive travel insurance.'
        });
      }
    } else if (god.includes('正官')) {
      if (!isStrong) {
        sources.push({
          type: 'bullying',
          termZh: '恶性职场霸凌 / 体制高压与制度碾压',
          termEn: 'Institutional Bullying & Executive Pressure',
          originZh: '【来源定位】：身弱官重，制度化为无形枷锁。直属领导高压问责、甩锅推诿，将无法完成的死指标压在命主身上。',
          originEn: '【Origin & Actors】: Bureaucratic hierarchies, demanding supervisors, and toxic corporate politics shifting blame onto vulnerable subordinates.',
          manifestationZh: '【具象形态】：被强制承担自杀式无解项目、劳动成果被掠夺、遭遇冷暴力孤立与绩效不公评级。',
          manifestationEn: '【Manifestation】: Unrealistic KPIs assigned without resources, credit theft by managers, and arbitrary disciplinary citations.',
          defenseZh: '【精准防御法门】：以周报和书面数据清晰罗列资源缺口，向上管理；拒绝口头背锅；主动联络跨部门导师（印星）建立保护伞。',
          defenseEn: '【Concrete Defense】: Document all resource deficiencies in formal weekly reports; deflect blame with verifiable metrics; cultivate senior mentor allies.'
        });
        sources.push({
          type: 'illness',
          termZh: '突发恶疾 / 神经衰弱与免疫机能衰竭',
          termEn: 'Chronic Nervous Exhaustion & Adrenal Fatigue',
          originZh: '【来源定位】：官星克身无制，交感神经过载，气血难以滋养脏腑，形成慢性重度疲劳与神经功能失调。',
          originEn: '【Origin & Actors】: Relentless structural stress overtaxing adrenal glands, depressing immune response and sleep architecture.',
          manifestationZh: '【具象形态】：顽固性神经衰弱、晨起心悸惊恐、内分泌紊乱、易感风寒久咳不愈。',
          manifestationEn: '【Manifestation】: Severe insomnia, morning panic attacks, endocrine deregulation, and recurrent chronic infections.',
          defenseZh: '【精准防御法门】：强制设立下班物理断电时间；睡前一小时远离工作电子屏幕；温水泡脚配合五谷温养脾胃。',
          defenseEn: '【Concrete Defense】: Implement strict post-work digital shutdowns; disconnect screens 60 minutes before bed; replenish core vitality with warm nutrition.'
        });
        sources.push({
          type: 'litigation',
          termZh: '官司诉讼 / 合规审查与行政违约连带',
          termEn: 'Compliance Penalties & Administrative Liability',
          originZh: '【来源定位】：因流程疏忽或上级违规指令，沦为替罪羊承担签字法务连带责任。',
          originEn: '【Origin & Actors】: Regulatory audit traps, ambiguous compliance protocols, or coercive executive directives making you sign hazardous documents.',
          manifestationZh: '【具象形态】：合同纰漏招致经济索赔、被监管部门传唤调查、个人职业信用受损。',
          manifestationEn: '【Manifestation】: Financial damage claims from defective paperwork, compliance hearings, and professional licensing penalties.',
          defenseZh: '【精准防御法门】：凡有重大签字权必须由法务与管理层共同联署，坚决不作单一背书人。',
          defenseEn: '【Concrete Defense】: Never serve as sole signatory on sensitive documents; require formal multi-departmental co-signatures.'
        });
      }
    } else if (god.includes('伤官')) {
      if (!isStrong) {
        sources.push({
          type: 'litigation',
          termZh: '官司诉讼 / 祸从口出与公关维权官非',
          termEn: 'Litigation, PR Backlash & Libel Disputes',
          originZh: '【来源定位】：伤官见官，心高气傲抗上。公开网络平台宣泄情绪、尖锐批评权威或同行，招致名誉侵权起诉或劳动官司。',
          originEn: '【Origin & Actors】: Sharp defiance clashing with authority; indiscreet public statements triggering libel lawsuits or labor arbitrations.',
          manifestationZh: '【具象形态】：收到律师函警告、名誉权纠纷对簿公堂、遭到全网公开谴责与封号降权。',
          manifestationEn: '【Manifestation】: Cease-and-desist letters, defamation litigation, regulatory censorship, and platform account bans.',
          defenseZh: '【精准防御法门】：严格执行“24小时延时发声”铁律；所有敏感争议言论绝不实名发在公共网络；停止一切赌气式诉讼。',
          defenseEn: '【Concrete Defense】: Enforce a strict 24-hour cooling-off rule before publishing controversial takes; refrain from emotional litigation.'
        });
        sources.push({
          type: 'bullying',
          termZh: '恶性小人霸凌 / 遭行业权威封杀与联合打压',
          termEn: 'Industry Blacklisting & Establishment Retaliation',
          originZh: '【来源定位】：才华出众但言语刻薄刺伤上层利益，招致行业既得利益集团联合封锁。',
          originEn: '【Origin & Actors】: Incisive public criticisms injuring establishment interests, provoking coordinated blacklisting and career obstruction.',
          manifestationZh: '【具象形态】：关键合作被突然叫停、投递简历被行业暗中标记、评奖晋升被无理由剔除。',
          manifestationEn: '【Manifestation】: Canceled partnerships, quiet industry blacklisting, and systematic rejection from professional associations.',
          defenseZh: '【精准防御法门】：收敛锋芒，闭关深耕硬核研发作品；用无可替代的客观技术成果说话，以时间换空间。',
          defenseEn: '【Concrete Defense】: Conceal sharp brilliance; redirect energy entirely into proprietary R&D; bypass gatekeepers with sovereign product quality.'
        });
      }
    } else if (god.includes('劫财')) {
      if (isStrong) {
        sources.push({
          type: 'wealth_drain',
          termZh: '破财破耗 / 投机杠杆爆仓与债务无底洞',
          termEn: 'Disastrous Wealth Drain, Speculation Bust & Debt Traps',
          originZh: '【来源定位】：劫财争财，赌性狂躁。加杠杆炒币炒股、参与高息民间借贷、接盘空壳项目或替亲友无抵押担保。',
          originEn: '【Origin & Actors】: Aggressive financial greed: leveraged crypto/stock speculation, private shadow banking, or unsecured debt guarantees.',
          manifestationZh: '【具象形态】：爆仓强平血本无归、出借资金变为呆账死账、被银行或债权人起诉冻结名下资产。',
          manifestationEn: '【Manifestation】: Margin calls, total capital wipeouts, unrecoverable bad loans, and judicial asset freezes.',
          defenseZh: '【精准防御法门】：绝对封死杠杆接口；坚决不为任何人签字担保；主动将现金投入不可撤销的稳固长期资产（主动破财）。',
          defenseEn: '【Concrete Defense】: Strictly prohibit leverage trading; refuse all loan guarantees; convert liquid cash into safe illiquid annuities.'
        });
        sources.push({
          type: 'relational_severance',
          termZh: '感情婚变 / 亲友合伙反目成仇与利益撕裂',
          termEn: 'Severe Relational Rupture, Feuds & Spousal Divorce',
          originZh: '【来源定位】：兄弟朋友同侪因分红不均对簿公堂；家庭中因隐瞒债务或财产处置问题引发伴侣决裂。',
          originEn: '【Origin & Actors】: Business partners fighting over equity distributions; marital trust shattered over concealed debts.',
          manifestationZh: '【具象形态】：昔日兄弟反目撕破脸、合伙公司被掏空分流、夫妻劳燕分飞因财产分割反目。',
          manifestationEn: '【Manifestation】: Partnership dissolutions erupting into lawsuits, trade secrets stolen by co-founders, and bitter divorce proceedings.',
          defenseZh: '【精准防御法门】：丑话必须说在前面，合伙必须有白纸黑字竞业与退出协议；家庭财务重大开支向伴侣坦诚相告。',
          defenseEn: '【Concrete Defense】: Establish ironclad legal buy-out agreements before partnering; maintain complete financial transparency with your spouse.'
        });
        sources.push({
          type: 'accident',
          termZh: '意外伤灾 / 冲动暴躁引发肢体冲突与创伤',
          termEn: 'Violent Altercations & Impulsive Physical Trauma',
          originZh: '【来源定位】：劫财阳刃性燥如雷，酒后口角或路怒争执极易演化为肢体斗殴受伤。',
          originEn: '【Origin & Actors】: Hot-tempered aggression triggered by alcohol or road rage escalating into violent scuffles and physical injury.',
          manifestationZh: '【具象形态】：酒吧或饭局口角打斗致伤、治安拘留赔偿、肢体骨折缝针。',
          manifestationEn: '【Manifestation】: Bar brawls, police detention, emergency stitches, and orthopedic trauma.',
          defenseZh: '【精准防御法门】：逢劫财运滴酒不沾；遇到蛮横挑衅者立即远离现场，不争一时之气。',
          defenseEn: '【Concrete Defense】: Maintain strict sobriety; physically exit heated environments immediately; conquer ego through disciplined restraint.'
        });
      }
    } else if (god.includes('偏印') || god.includes('枭')) {
      if (isStrong) {
        sources.push({
          type: 'bullying',
          termZh: '恶性小人霸凌 / 阴暗暗算与背后造谣中伤',
          termEn: 'Covert Smear Campaigns & Malicious Sabotage',
          originZh: '【来源定位】：偏印枭神为阴暗之神，易招致心胸狭隘之辈在暗地里挑拨离间、匿名举报、散播私德谣言。',
          originEn: '【Origin & Actors】: Toxic, jealous adversaries operating in shadows: anonymous defamation, malicious whispers, and covert sabotage.',
          manifestationZh: '【具象形态】：即将敲定的重要晋升或大单被匿名信搅黄、在社交圈被恶意贴标签抹黑。',
          manifestationEn: '【Manifestation】: Critical promotions derailed by anonymous complaints, reputation smeared in professional networks.',
          defenseZh: '【精准防御法门】：行事极度光明磊落，不留任何口实；遇谣言直接通过法务律师公开发布声明，不与小人私下纠缠。',
          defenseEn: '【Concrete Defense】: Maintain absolute transparency; issue formal legal statements against slander without engaging in petty private spats.'
        });
        sources.push({
          type: 'illness',
          termZh: '突发恶疾 / 严重心结抑郁与消化道顽疾',
          termEn: 'Severe Depressive Internal Friction & Somatic Disorders',
          originZh: '【来源定位】：枭神夺食，克制食神生机。思虑过甚、悲观猜忌导致肝脾郁结，引发胃溃疡、神经衰弱及抑郁倾向。',
          originEn: '【Origin & Actors】: Owl God suppressing the Eating God: excessive rumination, morbid suspicion causing gastrointestinal and psychological strain.',
          manifestationZh: '【具象形态】：长期顽固性厌食失眠、躯体化胸闷头痛、对一切丧失兴趣、情绪持续低沉。',
          manifestationEn: '【Manifestation】: Chronic appetite loss, somatic chest tightness, existential despair, and deep depressive cycles.',
          defenseZh: '【精准防御法门】：每天强制户外快走或慢跑1小时晒太阳；停止独处胡思乱想，主动与阳光豁达的朋友深度交流。',
          defenseEn: '【Concrete Defense】: Commit to 60 minutes of brisk outdoor walking in sunlight daily; avoid isolated rumination; connect with cheerful companions.'
        });
        sources.push({
          type: 'relational_severance',
          termZh: '感情婚变 / 猜忌多疑导致冷暴力婚姻危机',
          termEn: 'Paranoid Distrust & Marital Cold War',
          originZh: '【来源定位】：潜意识中缺乏安全感，反复试探伴侣忠诚度，捕风捉影，令伴侣感到窒息与受辱。',
          originEn: '【Origin & Actors】: Deep insecurity projecting imagined betrayals onto the spouse, testing loyalty until the partner withdraws completely.',
          manifestationZh: '【具象形态】：翻看手机引发激烈对峙、长期分房冷暴力、伴侣忍无可忍决绝分居。',
          manifestationEn: '【Manifestation】: Invasions of privacy provoking furious standoffs, protracted silent treatment, and emotional breakdown.',
          defenseZh: '【精准防御法门】：收回向外索取安全感的触角；直接沟通真实脆弱而非指责讽刺；多给彼此独立呼吸的空间。',
          defenseEn: '【Concrete Defense】: Build internal self-soothing capacity; communicate vulnerable feelings rather than sarcastic accusations; respect mutual autonomy.'
        });
      }
    } else if (god.includes('偏财')) {
      if (!isStrong) {
        sources.push({
          type: 'wealth_drain',
          termZh: '破财破耗 / 贪财招灾与杀猪盘金融诈骗',
          termEn: 'Catastrophic Fraud, Ponzi Scams & Asset Traps',
          originZh: '【来源定位】：身弱逢偏财，贪念一起陷阱即至。轻信所谓“内部原始股、炒币暴富内幕、高息理财”而误入骗局。',
          originEn: '【Origin & Actors】: Greed-driven traps: deceptive high-yield investment programs, fake crypto arbitrage schemes, or predatory lenders.',
          manifestationZh: '【具象形态】：平台暴雷跑路无法提现、资金被洗劫一空、因参与灰色投资面临监管追责。',
          manifestationEn: '【Manifestation】: Ponzi collapse, frozen platform withdrawals, total principal loss, and regulatory investigation.',
          defenseZh: '【精准防御法门】：凡承诺“超常高年化、保本保息”者一律视作诈骗；守好正当主业薪资，戒除一夜暴富幻想。',
          defenseEn: '【Concrete Defense】: Treat any guaranteed above-market return as outright fraud; anchor strictly in verified professional income.'
        });
        sources.push({
          type: 'relational_severance',
          termZh: '感情婚变 / 烂桃花纠葛与家庭婚姻破裂',
          termEn: 'Illicit Affairs, Blackmail & Marital Ruin',
          originZh: '【来源定位】：偏财混杂，野桃花乘虚而入。因一时冲动涉足不正当男女关系，招致仙人跳敲诈或婚姻破裂。',
          originEn: '【Origin & Actors】: Fleeting romantic temptations, honeytraps, extortion setups, or high-risk extramarital affairs.',
          manifestationZh: '【具象形态】：被敲诈巨额封口费、配偶发现后决裂离婚、名誉与家庭两败俱伤。',
          manifestationEn: '【Manifestation】: Blackmail ultimatums, public adultery exposure, and acrimonious divorce proceedings.',
          defenseZh: '【精准防御法门】：洁身自好，与暧昧异性保持绝对社交距离；不涉足不良娱乐社交场所；珍视原配发妻。',
          defenseEn: '【Concrete Defense】: Maintain unwavering ethical boundaries; avoid compromising nightlife venues; cherish marital fidelity.'
        });
      }
    } else if (god.includes('正财')) {
      if (!isStrong) {
        sources.push({
          type: 'illness',
          termZh: '突发恶疾 / 严重过劳虚脱与脏腑慢性耗竭',
          termEn: 'Chronic Overwork, Burnout & Vitality Depletion',
          originZh: '【来源定位】：身弱财重，为完成严苛业绩指标拼命加班，透支阳气与骨髓，诱发心脑血管与脊椎重症。',
          originEn: '【Origin & Actors】: Weak constitution overburdened by heavy financial targets, depleting vital qi and skeletal integrity.',
          manifestationZh: '【具象形态】：突发晕厥、严重腰椎颈椎间盘突出瘫卧、心脏早搏频发、身体机能全面预警。',
          manifestationEn: '【Manifestation】: Sudden syncopes, severe lumbar disc herniation, cardiac arrhythmias, and acute adrenal collapse.',
          defenseZh: '【精准防御法门】：立刻拒绝无意义加班；调换为轻资产顾问岗位；把身体健康视为第一优先资产。',
          defenseEn: '【Concrete Defense】: Cut grueling overtime hours; pivot into asset-light advisory roles; treat health as your non-negotiable core asset.'
        });
      }
    } else if (god.includes('比肩')) {
      if (isStrong) {
        sources.push({
          type: 'wealth_drain',
          termZh: '破财破耗 / 同行价格内卷与借款变呆账',
          termEn: 'Margin Destruction & Unrecoverable Peer Loans',
          originZh: '【来源定位】：同侪分夺利益。同行恶性打折竞争抢走客户；向亲友熟人出借资金碍于情面无法催讨。',
          originEn: '【Origin & Actors】: Aggressive competitors undercutting prices to poach clients; uncollectible personal loans extended to friends out of pride.',
          manifestationZh: '【具象形态】：业务毛利率断崖式下滑、出借给朋友的数十万资金石沉大海、甚至反目成仇。',
          manifestationEn: '【Manifestation】: Severe gross margin compression, unpaid friend debts causing relational bitterness.',
          defenseZh: '【精准防御法门】：避开同质化红海竞争，专注做差异化高端定制；任何人借钱一概以“资金已购买长期理财”为由婉拒。',
          defenseEn: '【Concrete Defense】: Pivot into customized high-value blue-ocean offerings; decline loan requests by citing illiquid financial commitments.'
        });
      }
    } else if (god.includes('食神')) {
      if (!isStrong) {
        sources.push({
          type: 'illness',
          termZh: '突发恶疾 / 脑力极度透支与精力枯竭',
          termEn: 'Extreme Cognitive Exhaustion & Mental Fatigue',
          originZh: '【来源定位】：身弱食神泄身，思考过度心神涣散。长期进行高难度脑力创作而缺乏补给，导致神经系统崩溃。',
          originEn: '【Origin & Actors】: Weak self continuously drained by cognitive output: protracted creative marathons depleting neuro-vitality.',
          manifestationZh: '【具象形态】：注意力无法集中、脑雾严重、健忘脱发、慢性疲劳综合征。',
          manifestationEn: '【Manifestation】: Debilitating brain fog, severe cognitive lapses, hair loss, and chronic fatigue syndrome.',
          defenseZh: '【精准防御法门】：严格设定每天脑力深工时长不超过4小时；多食补高蛋白与温润汤品补养真气。',
          defenseEn: '【Concrete Defense】: Cap intense deep work at 4 hours per day; replenish constitutional energy with restorative nutritional broths.'
        });
      }
    }

    if (sources.length === 0) {
      sources.push({
        type: 'general',
        termZh: '吉运防患 · 居安思危与合规防御',
        termEn: 'General Caution & Compliance Safeguard',
        originZh: '【来源定位】：顺境之中极易心防松懈、疏忽合同细节或因言辞傲慢招致微型人际摩擦。',
        originEn: '【Origin & Actors】: Complacency in prosperous seasons leading to neglected contract details or casual remarks sparking peer jealousy.',
        manifestationZh: '【具象形态】：小合同条款疏漏引发后续扯皮、过度承诺超出交付负荷。',
        manifestationEn: '【Manifestation】: Overlooked minor clauses causing disputes, or over-promising beyond delivery capacity.',
        defenseZh: '【精准防御法门】：保持谦逊低调，重要事务严格复核合同，确保商业交付闭环。',
        defenseEn: '【Concrete Defense】: Maintain modesty; rigorously verify contract terms; ensure airtight delivery pipelines.'
      });
    }

    return {
      titleZh: isGood ? '⚠️ 吉运防患 · 潜在不利与危机来源深度剖析' : '🛑 灾患来源与不利术语具体注解 (六维溯源与防御指南)',
      titleEn: isGood ? '⚠️ Transit Pitfalls: In-Depth Origin Analysis of Potential Risks' : '🛑 Adversity Origin Annotations: 6-Dimension Diagnostics & Defense',
      sources
    };
  }

  /**
   * Determine Major Luck progression direction and start age
   */
  function calculateDecadeMetadata(bazi) {
    const yearStem = bazi.pillars.year.stem;
    const yearStemIdx = STEMS.indexOf(yearStem);
    const isYearYang = (yearStemIdx % 2 === 0);
    const gender = bazi.input.gender || 'male';
    const isMale = (gender === 'male' || gender === '乾造' || gender === '男' || gender === '男命');

    // 阳男阴女顺排，阴男阳女逆排
    const isForward = (isYearYang && isMale) || (!isYearYang && !isMale);

    const dirZh = isForward ? '顺行' : '逆行';
    const dirEn = isForward ? 'Forward Progression' : 'Backward Progression';
    const dirReasonZh = isForward
      ? (isYearYang ? '阳年男命，大运顺行' : '阴年女命，大运顺行')
      : (isYearYang ? '阳年女命，大运逆行' : '阴年男命，大运逆行');
    const dirReasonEn = isForward
      ? (isYearYang ? 'Yang Year Male: Forward Progression' : 'Yin Year Female: Forward Progression')
      : (isYearYang ? 'Yang Year Female: Backward Progression' : 'Yin Year Male: Backward Progression');

    // Calculate birth date UTC
    const bYear = bazi.input.adjustedYear;
    const bMonth = bazi.input.adjustedMonth;
    const bDay = bazi.input.adjustedDay;
    const bHour = bazi.input.adjustedHour;
    const bMin = bazi.input.adjustedMinute;
    const birthDate = new Date(Date.UTC(bYear, bMonth - 1, bDay, bHour, bMin));

    // Get 12 Jie dates for surrounding years
    const jieList = [];
    [-1, 0, 1].forEach(offset => {
      const y = bYear + offset;
      if (typeof SolarTermEngine !== 'undefined') {
        SolarTermEngine.JIE_ANGLES.forEach((angle, idx) => {
          const d = SolarTermEngine.getSolarTermDate(y, angle);
          jieList.push({
            nameZh: JIE_NAMES[idx],
            nameEn: JIE_EN_NAMES[idx],
            date: d
          });
        });
      }
    });

    jieList.sort((a, b) => a.date - b.date);

    let prevJie = jieList[0];
    let nextJie = jieList[jieList.length - 1];

    for (let i = 0; i < jieList.length; i++) {
      if (birthDate >= jieList[i].date) {
        prevJie = jieList[i];
      } else {
        nextJie = jieList[i];
        break;
      }
    }

    const targetJie = isForward ? nextJie : prevJie;
    const diffMs = isForward ? (nextJie.date - birthDate) : (birthDate - prevJie.date);
    const diffDays = Math.max(0.1, diffMs / (1000 * 60 * 60 * 24));

    // 传统法门：3天为1岁，1天为4个月，1时辰(2小时)为10天
    const startYears = Math.floor(diffDays / 3);
    const remDays = diffDays - startYears * 3;
    const startMonths = Math.floor(remDays * 4);
    const startDays = Math.round((remDays * 4 - startMonths) * 30);

    // 整数起运岁数 (最小起运岁数为1岁，最大9岁)
    let nominalStartAge = Math.max(1, Math.min(9, Math.round(diffDays / 3)));
    const startCalendarYear = bYear + nominalStartAge;

    const startAgeTextZh = `${nominalStartAge} 岁起运 (约生后 ${startYears}岁${startMonths}个月，${startCalendarYear}年交运)`;
    const startAgeTextEn = `Starts at Age ${nominalStartAge} (${startYears}y ${startMonths}m, Year ${startCalendarYear})`;

    return {
      isForward,
      direction: isForward ? 1 : -1,
      directionZh: dirZh,
      directionEn: dirEn,
      directionReasonZh: dirReasonZh,
      directionReasonEn: dirReasonEn,
      nominalStartAge,
      startYears,
      startMonths,
      startDays,
      diffDays: Math.floor(diffDays),
      diffHours: Math.round((diffDays % 1) * 24),
      startCalendarYear,
      targetJieZh: targetJie.nameZh,
      targetJieEn: targetJie.nameEn,
      startAgeTextZh,
      startAgeTextEn
    };
  }

  /**
   * Generate 10 Major Luck Decades (大运)
   */
  function getDecades(bazi, decadeMeta, currentYear) {
    const dm = bazi.dayMaster;
    const monthStem = bazi.pillars.month.stem;
    const monthBranch = bazi.pillars.month.branch;
    const monthStemIdx = STEMS.indexOf(monthStem);
    const monthBranchIdx = BRANCHES.indexOf(monthBranch);

    const nowYear = currentYear || new Date().getFullYear();
    const decades = [];

    for (let k = 1; k <= 9; k++) {
      const step = decadeMeta.isForward ? k : -k;
      const sIdx = (monthStemIdx + step + 600) % 10;
      const bIdx = (monthBranchIdx + step + 600) % 12;
      const stem = STEMS[sIdx];
      const branch = BRANCHES[bIdx];
      const text = stem + branch;

      const ageStart = decadeMeta.nominalStartAge + (k - 1) * 10;
      const ageEnd = ageStart + 9;
      const yearStart = decadeMeta.startCalendarYear + (k - 1) * 10;
      const yearEnd = yearStart + 9;

      const isActive = (nowYear >= yearStart && nowYear <= yearEnd);
      const stemGod = getTenGod(dm, stem);
      const naYin = getNaYin(text);
      const fortune = evaluateTransitFortune(bazi, { stem, branch, text, stemGod, naYin }, 'decade');

      decades.push({
        index: k,
        stem,
        branch,
        text,
        stemElement: STEM_ELEMENTS[sIdx],
        branchElement: BRANCH_ELEMENTS[bIdx],
        stemGod,
        naYin,
        ageStart,
        ageEnd,
        yearStart,
        yearEnd,
        ageSpanZh: `${ageStart} ~ ${ageEnd} 岁`,
        ageSpanEn: `Age ${ageStart}-${ageEnd}`,
        yearSpanZh: `${yearStart} ~ ${yearEnd} 年`,
        yearSpanEn: `${yearStart}-${yearEnd}`,
        isActive,
        fortune
      });
    }

    return decades;
  }

  /**
   * Generate 10 Annual Luck years (流年) for a chosen decade
   */
  function getAnnualLuck(bazi, decade, selectedYear) {
    const dm = bazi.dayMaster;
    const birthYear = bazi.input.adjustedYear;
    const currentCalYear = selectedYear || new Date().getFullYear();

    const years = [];
    for (let y = decade.yearStart; y <= decade.yearEnd; y++) {
      const sIdx = (y - 4 + 60000) % 10;
      const bIdx = (y - 4 + 60000) % 12;
      const stem = STEMS[sIdx];
      const branch = BRANCHES[bIdx];
      const text = stem + branch;
      const age = y - birthYear + 1; // 虚岁

      const isSelected = (y === currentCalYear);
      const stemGod = getTenGod(dm, stem);
      const naYin = getNaYin(text);
      const fortune = evaluateTransitFortune(bazi, { stem, branch, text, stemGod, naYin }, 'annual');

      years.push({
        year: y,
        stem,
        branch,
        text,
        stemElement: STEM_ELEMENTS[sIdx],
        branchElement: BRANCH_ELEMENTS[bIdx],
        stemGod,
        naYin,
        ageZh: `${age} 岁`,
        ageEn: `Age ${age}`,
        isSelected,
        fortune
      });
    }

    return years;
  }

  /**
   * Generate 12 Solar Months (流月) for a chosen year using Five Tigers (五虎遁元)
   */
  function getMonthlyLuck(bazi, targetYear, selectedMonthBranch) {
    const dm = bazi.dayMaster;
    const yearStemIdx = (targetYear - 4 + 60000) % 10;

    // 五虎遁元：甲己之年丙作首，乙庚之岁戊为头，丙辛必定寻庚起，丁壬壬位顺行流，戊癸何方发，甲寅好追求
    const startStemIdx = (yearStemIdx % 5 * 2 + 2) % 10;

    const currentMonthDate = new Date();
    const currentMonthIdx = (currentMonthDate.getMonth() + 11) % 12; // approximate solar month index

    const months = [];
    for (let i = 0; i < 12; i++) {
      const sIdx = (startStemIdx + i) % 10;
      const stem = STEMS[sIdx];
      const branch = MONTH_BRANCHES[i];
      const text = stem + branch;
      const bIdx = BRANCHES.indexOf(branch);

      const isSelected = selectedMonthBranch ? (branch === selectedMonthBranch) : (i === currentMonthIdx);

      // Approximate Gregorian solar term month window
      const dateRangeZh = [
        '2.4 ~ 3.5', '3.5 ~ 4.4', '4.4 ~ 5.5', '5.5 ~ 6.5',
        '6.5 ~ 7.7', '7.7 ~ 8.7', '8.7 ~ 9.7', '9.7 ~ 10.8',
        '10.8 ~ 11.7', '11.7 ~ 12.7', '12.7 ~ 1.5', '1.5 ~ 2.4'
      ][i];

      const stemGod = getTenGod(dm, stem);
      const naYin = getNaYin(text);
      const fortune = evaluateTransitFortune(bazi, { stem, branch, text, stemGod, naYin }, 'monthly');

      months.push({
        index: i + 1,
        solarTermZh: JIE_NAMES[i],
        solarTermEn: JIE_EN_NAMES[i],
        monthBranch: branch,
        stem,
        branch,
        text,
        stemElement: STEM_ELEMENTS[sIdx],
        branchElement: BRANCH_ELEMENTS[bIdx],
        stemGod,
        naYin,
        dateRangeZh,
        isSelected,
        fortune
      });
    }

    return months;
  }

  /**
   * Compute Daily Luck (流日) for a specific Gregorian date
   */
  function getDailyLuck(bazi, year, month, day) {
    const dm = bazi.dayMaster;
    const jdn = gregorianToJDN(year, month, day);
    const dayCycleIdx = (jdn + 49) % 60;
    const sIdx = dayCycleIdx % 10;
    const bIdx = dayCycleIdx % 12;
    const stem = STEMS[sIdx];
    const branch = BRANCHES[bIdx];
    const text = stem + branch;
    const stemGod = getTenGod(dm, stem);
    const naYin = getNaYin(text);
    const fortune = evaluateTransitFortune(bazi, { stem, branch, text, stemGod, naYin }, 'daily');

    return {
      year,
      month,
      day,
      dateString: `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`,
      stem,
      branch,
      text,
      stemElement: STEM_ELEMENTS[sIdx],
      branchElement: BRANCH_ELEMENTS[bIdx],
      stemGod,
      naYin,
      fortune
    };
  }

  /**
   * 5-Pillar Grand Alignment Diagnostics (五柱同参 · 岁运交感)
   * Analyzes interactions between Natal 4 Pillars, Active Decade, Annual, Month, and Day Pillars.
   */
  function evaluateInteractions(bazi, decade, annual, month, day) {
    const dm = bazi.dayMaster;
    const natal = bazi.pillars;
    const interactions = [];

    // 1. 岁运并临 (Annual GanZhi identical to Decade GanZhi)
    if (annual && decade && annual.text === decade.text) {
      interactions.push({
        type: 'parallel',
        severity: 'high',
        titleZh: '⚠️ 岁运并临 (大运与流年同柱)',
        titleEn: '⚠️ Decade & Annual Pillar Alignment (Sui Yun Bing Lin)',
        descZh: `当前大运【${decade.text}】与流年【${annual.text}】干支完全重叠，能量极端倍增。古云“岁运并临，不死自己死他人”，实指人生面临剧烈转折或重大抉择。吉凶依喜忌加倍发酵。`,
        descEn: `Current Major Decade [${decade.text}] and Annual Pillar [${annual.text}] are identical, intensifying energy dramatically. Signals a pivotal milestone year requiring cautious risk control.`
      });
    }

    // 2. 天克地冲 (Heavenly Clash & Earthly Cracking)
    const stemsClash = { '甲': '庚', '庚': '甲', '乙': '辛', '辛': '乙', '丙': '壬', '壬': '丙', '丁': '癸', '癸': '丁' };
    const branchesClash = {
      '子': '午', '午': '子', '丑': '未', '未': '丑',
      '寅': '申', '申': '寅', '卯': '酉', '酉': '卯',
      '辰': '戌', '戌': '辰', '巳': '亥', '亥': '巳'
    };

    // Check Annual against Day Pillar (Fan Yin / Clashing Self)
    if (annual) {
      const isStemClashDay = (stemsClash[annual.stem] === natal.day.stem);
      const isBranchClashDay = (branchesClash[annual.branch] === natal.day.branch);
      if (isStemClashDay && isBranchClashDay) {
        interactions.push({
          type: 'clash',
          severity: 'critical',
          titleZh: '⚡ 流年天克地冲日柱 (反吟重战)',
          titleEn: '⚡ Annual Clashing & Cracking Day Pillar (Fan Yin)',
          descZh: `流年【${annual.text}】与日柱【${natal.day.text}】天干相克且地支相冲。日柱为自身与配偶宫，主身心动荡、居住环境变动或家庭亲密关系面临考验，宜守静安详、谨慎置业签约。`,
          descEn: `Annual Pillar [${annual.text}] forms direct clash and combat with Day Pillar [${natal.day.text}]. Demands mindful emotional balance and careful handling of relationships.`
        });
      }

      // Check Annual against Month Pillar (Ti Gang Clashing)
      const isBranchClashMonth = (branchesClash[annual.branch] === natal.month.branch);
      if (isBranchClashMonth) {
        interactions.push({
          type: 'clash',
          severity: 'medium',
          titleZh: '💥 流年冲克月令提纲',
          titleEn: '💥 Annual Clashing Monthly Mandate',
          descZh: `流年地支【${annual.branch}】冲月令【${natal.month.branch}】。提纲受冲，职场赛道、组织架构或居住城市容易发生重大迁移与变动，破旧立新，迎难而上。`,
          descEn: `Annual branch [${annual.branch}] clashes with Month branch [${natal.month.branch}]. Indicates potential career shifts, organizational changes, or geographic relocation.`
        });
      }
    }

    // 3. 天合地合 (Heavenly & Earthly Double Combination)
    const stemsCombine = { '甲': '己', '己': '甲', '乙': '庚', '庚': '乙', '丙': '辛', '辛': '丙', '丁': '壬', '壬': '丁', '戊': '癸', '癸': '戊' };
    const branchesCombine = { '子': '丑', '丑': '子', '寅': '亥', '亥': '寅', '卯': '戌', '戌': '卯', '辰': '酉', '酉': '辰', '巳': '申', '申': '巳', '午': '未', '未': '午' };

    if (annual) {
      const isStemCombDay = (stemsCombine[annual.stem] === natal.day.stem);
      const isBranchCombDay = (branchesCombine[annual.branch] === natal.day.branch);
      if (isStemCombDay && isBranchCombDay) {
        interactions.push({
          type: 'harmony',
          severity: 'positive',
          titleZh: '🌸 流年天合地合日柱 (天地鸳鸯合)',
          titleEn: '🌸 Annual Double Harmony with Day Pillar',
          descZh: `流年【${annual.text}】与日柱【${natal.day.text}】天作之合。气象和畅，人际关系极佳，利合作聚财、缔结良缘或开拓新商业生态。`,
          descEn: `Annual Pillar [${annual.text}] forms complete harmonious combination with Day Pillar [${natal.day.text}]. Favorable for partnerships, marriage, and strategic expansions.`
        });
      }
    }

    // 4. 地支三合局 (Three Harmonies Triad)
    const sanHeMaps = [
      { branches: ['申', '子', '辰'], element: '水', name: '水局' },
      { branches: ['亥', '卯', '未'], element: '木', name: '木局' },
      { branches: ['寅', '午', '戌'], element: '火', name: '火局' },
      { branches: ['巳', '酉', '丑'], element: '金', name: '金局' }
    ];

    const currentAllBranches = [
      natal.year.branch, natal.month.branch, natal.day.branch, natal.hour.branch,
      decade ? decade.branch : null,
      annual ? annual.branch : null,
      month ? month.branch : null,
      day ? day.branch : null
    ].filter(Boolean);

    sanHeMaps.forEach(sh => {
      const matchCount = sh.branches.filter(b => currentAllBranches.includes(b)).length;
      if (matchCount === 3) {
        interactions.push({
          type: 'triad',
          severity: 'positive',
          titleZh: `🌊 岁运会合成【${sh.branches.join('')}三合${sh.name}】`,
          titleEn: `🌊 Three Harmonies Triad Formed: [${sh.branches.join('-')}] (${sh.element})`,
          descZh: `命局与岁运合聚【${sh.branches.join('')}】，五行【${sh.element}】气势暴涨汇聚成汪洋之势。若为喜神则事业大发越，若为忌神宜疏导化解。`,
          descEn: `Pillars assemble [${sh.branches.join('-')}], creating a massive tidal surge of ${sh.element} energy.`
        });
      }
    });

    if (interactions.length === 0) {
      interactions.push({
        type: 'peace',
        severity: 'neutral',
        titleZh: '🕊️ 岁运循序渐进，平稳安泰',
        titleEn: '🕊️ Peaceful Steady Alignment',
        descZh: '当前流年、流月与流日与命盘四柱无剧烈刑冲破害，气象平和循行，利于潜心积累、精进专业与稳健复利。',
        descEn: 'Current annual, monthly, and daily pillars interact smoothly with the natal chart. Optimal for disciplined compounding and skill refinement.'
      });
    }

    return interactions;
  }

  /**
   * Main Luck Calculation Entrypoint
   */
  function calculateLuck(bazi, targetYear, targetMonthBranch, targetDay) {
    if (!bazi || !bazi.pillars) return null;

    const decadeMeta = calculateDecadeMetadata(bazi);
    const now = new Date();
    const curYear = targetYear || now.getFullYear();

    const decades = getDecades(bazi, decadeMeta, curYear);
    
    // Find active decade covering curYear, or active, or first
    let activeDecade = decades.find(d => curYear >= d.yearStart && curYear <= d.yearEnd) || decades.find(d => d.isActive) || decades[0];

    const annuals = getAnnualLuck(bazi, activeDecade, curYear);
    let activeAnnual = annuals.find(a => a.year === curYear) || annuals.find(a => a.isSelected) || annuals[0];

    const months = getMonthlyLuck(bazi, activeAnnual.year, targetMonthBranch);
    let activeMonth = months.find(m => m.branch === targetMonthBranch) || months.find(m => m.isSelected) || months[0];

    let dYear, dMonth, dDay;
    if (typeof targetDay === 'string' && targetDay.includes('-')) {
      const parts = targetDay.split('-').map(Number);
      dYear = parts[0] || activeAnnual.year;
      dMonth = parts[1] || 1;
      dDay = parts[2] || 1;
    } else {
      dYear = activeAnnual.year;
      dMonth = activeMonth.index >= 11 ? (activeMonth.index === 11 ? 12 : 1) : (activeMonth.index + 1);
      dDay = (typeof targetDay === 'number') ? targetDay : Math.min(15, now.getDate());
    }
    const daily = getDailyLuck(bazi, dYear, dMonth, dDay);

    const interactions = evaluateInteractions(bazi, activeDecade, activeAnnual, activeMonth, daily);
    if (!bazi._timelineCache) {
      bazi._timelineCache = calculateLifelongTimeline(bazi, { decades, activeDecade });
    }
    const timeline = bazi._timelineCache;

    const operationalPlaybook = generateOperationalPlaybook(bazi, { decades, activeDecade, annuals, activeAnnual, months, activeMonth }, activeAnnual, activeMonth);
    const ecologicalResonance = generateGeographicEcologicalResonance(bazi);

    return {
      decadeMeta,
      decades,
      activeDecade,
      annuals,
      activeAnnual,
      months,
      activeMonth,
      daily,
      interactions,
      timeline,
      operationalPlaybook,
      ecologicalResonance
    };
  }

  function calculateLifelongTimeline(bazi, luckData) {
    if (!bazi || !bazi.pillars) return [];
    const birthYear = (bazi.input && bazi.input.year) || bazi.birthYear || 1990;
    const dm = bazi.dayMaster;
    const isStrong = isDayMasterStrong(bazi);
    const dayBranch = bazi.pillars.day.branch;
    const dayStem = bazi.pillars.day.stem;
    const decades = (luckData && luckData.decades && luckData.decades.length > 0) ? luckData.decades : getDecades(bazi);

    const timeline = [];

    const SIX_CLASHES = {
      '子': '午', '午': '子', '丑': '未', '未': '丑',
      '寅': '申', '申': '寅', '卯': '酉', '酉': '卯',
      '辰': '戌', '戌': '辰', '巳': '亥', '亥': '巳'
    };

    const STEM_CLASHES = {
      '甲': '庚', '庚': '甲', '乙': '辛', '辛': '乙',
      '丙': '壬', '壬': '丙', '丁': '癸', '癸': '丁'
    };

    const SIX_HARMONIES = {
      '子': '丑', '丑': '子', '寅': '亥', '亥': '寅',
      '卯': '戌', '戌': '卯', '辰': '酉', '酉': '辰',
      '巳': '申', '申': '巳', '午': '未', '未': '午'
    };

    const STEM_EN_MAP = { '甲': 'Jia', '乙': 'Yi', '丙': 'Bing', '丁': 'Ding', '戊': 'Wu', '己': 'Ji', '庚': 'Geng', '辛': 'Xin', '壬': 'Ren', '癸': 'Gui' };
    const BRANCH_EN_MAP = { '子': 'Zi', '丑': 'Chou', '寅': 'Yin', '卯': 'Mao', '辰': 'Chen', '巳': 'Si', '午': 'Wu', '未': 'Wei', '申': 'Shen', '酉': 'You', '戌': 'Xu', '亥': 'Hai' };
    const GOD_EN_MAP = {
      '比肩': 'Friend (Bi Jian)', '劫财': 'Rob Wealth (Jie Cai)',
      '食神': 'Eating God (Shi Shen)', '伤官': 'Hurting Officer (Shang Guan)',
      '偏财': 'Indirect Wealth (Pian Cai)', '正财': 'Direct Wealth (Zheng Cai)',
      '七杀': 'Seven Killings (Qi Sha)', '正官': 'Direct Officer (Zheng Guan)',
      '偏印': 'Indirect Resource (Pian Yin)', '正印': 'Direct Resource (Zheng Yin)'
    };

    for (let age = 1; age <= 100; age++) {
      const year = birthYear + age - 1;
      let sIdx = (year - 4) % 10;
      if (sIdx < 0) sIdx += 10;
      let bIdx = (year - 4) % 12;
      if (bIdx < 0) bIdx += 12;
      const stem = STEMS[sIdx];
      const branch = BRANCHES[bIdx];
      const ganZhi = stem + branch;
      const tenGod = getTenGod(dm, stem);
      const naYin = getNaYin(ganZhi);

      let activeDecade = decades.find(d => age >= d.ageStart && age <= d.ageEnd);
      let decadeText = activeDecade ? activeDecade.text : (age < (decades[0] ? decades[0].ageStart : 10) ? '童限' : '晚境');
      let decadeSpanZh = activeDecade ? activeDecade.ageSpanZh : (age < (decades[0] ? decades[0].ageStart : 10) ? `1 ~ ${(decades[0] ? decades[0].ageStart - 1 : 9)} 岁` : `${(decades[decades.length - 1] ? decades[decades.length - 1].ageEnd + 1 : 90)} 岁之后`);
      let decadeSpanEn = activeDecade ? activeDecade.ageSpanEn : (age < (decades[0] ? decades[0].ageStart : 10) ? `Age 1-${(decades[0] ? decades[0].ageStart - 1 : 9)}` : `Age ${(decades[decades.length - 1] ? decades[decades.length - 1].ageEnd + 1 : 90)}+`);

      let energyScore = isStrong ? 64 : 54;
      let wealthScore = 55;

      if (activeDecade && activeDecade.fortune) {
        if (activeDecade.fortune.rating === 'good') {
          energyScore += 8;
          wealthScore += 8;
        } else {
          energyScore -= 8;
          wealthScore -= 6;
        }
      }

      if (tenGod.includes('印')) {
        if (!isStrong) { energyScore += 16; wealthScore += 6; }
        else { energyScore -= 6; wealthScore -= 4; }
      } else if (tenGod.includes('比') || tenGod.includes('劫')) {
        if (!isStrong) { energyScore += 14; wealthScore -= 4; }
        else { energyScore -= 8; wealthScore -= 16; }
      } else if (tenGod.includes('财')) {
        if (isStrong) { energyScore += 10; wealthScore += 24; }
        else { energyScore -= 12; wealthScore += 8; }
      } else if (tenGod.includes('食') || tenGod.includes('伤')) {
        if (isStrong) { energyScore += 12; wealthScore += 18; }
        else { energyScore -= 6; wealthScore += 10; }
      } else if (tenGod.includes('官') || tenGod.includes('杀')) {
        if (isStrong) { energyScore += 14; wealthScore += 12; }
        else { energyScore -= 16; wealthScore -= 8; }
      }

      const alerts = [];
      const alertsEn = [];

      const isSuiYunBingLin = activeDecade && (activeDecade.text === ganZhi);
      if (isSuiYunBingLin) {
        alerts.push('岁运并临');
        alertsEn.push('Transit Duplication');
        energyScore -= 12;
      }

      const isTianKeDiChong = (STEM_CLASHES[stem] === dayStem && SIX_CLASHES[branch] === dayBranch);
      if (isTianKeDiChong) {
        alerts.push('天克地冲');
        alertsEn.push('Heaven & Earth Clash');
        energyScore -= 18;
        wealthScore -= 14;
      }

      const isDayBranchClash = (SIX_CLASHES[branch] === dayBranch);
      if (isDayBranchClash && !isTianKeDiChong) {
        alerts.push('日支逢冲');
        alertsEn.push('Day Branch Clash');
        energyScore -= 10;
        wealthScore -= 8;
      }

      const isLiuHe = (SIX_HARMONIES[branch] === dayBranch);
      if (isLiuHe) {
        alerts.push('岁君六合');
        alertsEn.push('Auspicious Harmony');
        energyScore += 10;
        wealthScore += 10;
      }

      energyScore = Math.max(22, Math.min(98, Math.round(energyScore)));
      wealthScore = Math.max(20, Math.min(98, Math.round(wealthScore)));

      let rating = 'steady';
      if (energyScore >= 75 || wealthScore >= 75) rating = 'auspicious';
      else if (energyScore < 45 || alerts.includes('天克地冲') || alerts.includes('岁运并临')) rating = 'challenging';

      let sEn = (typeof I18N !== 'undefined') ? I18N.getStem(stem, 'en').split(' ')[0] : (STEM_EN_MAP[stem] || stem);
      let bEn = (typeof I18N !== 'undefined') ? I18N.getBranch(branch, 'en').split(' ')[0] : (BRANCH_EN_MAP[branch] || branch);
      let ganZhiEn = sEn + '-' + bEn;
      let tenGodEn = (typeof I18N !== 'undefined') ? I18N.getGod(tenGod, 'en') : (GOD_EN_MAP[tenGod] || 'Influence Star');

      let directiveZh = '';
      let directiveEn = '';
      let focusZh = '';
      let focusEn = '';

      if (rating === 'auspicious') {
        focusZh = '主动突破 · 乘势扩张';
        focusEn = 'Active Expansion · Strategic Breakthrough';
        directiveZh = `${age}岁（${year} ${ganZhi}年）临【${tenGod}】，能量与财禄双星高照。此年当顺应大势，果断开拓新增长极、落实重大职业晋升或战略投资，以进为御，奠定未来数年复利壁垒。`;
        directiveEn = `At age ${age} (${year} ${ganZhiEn}), favored by [${tenGodEn}], vitality and fortune peak. Decisively pursue expansion, promotions, and strategic investments to establish high-leverage compound advantage.`;
      } else if (rating === 'challenging') {
        focusZh = '守正防守 · 筑牢底线';
        focusEn = 'Prudent Defense · Boundary Preservation';
        directiveZh = `${age}岁（${year} ${ganZhi}年）见【${alerts.length > 0 ? alerts.join(' / ') : tenGod}】，气机激荡震荡。此年战略核心在“防守反击与固本培元”，切忌盲目扩大杠杆，合同细节务求严密，注意脾胃睡眠调理。`;
        directiveEn = `At age ${age} (${year} ${ganZhiEn}), navigating [${alertsEn.length > 0 ? alertsEn.join(' / ') : tenGodEn}], energetic currents fluctuate. Focus strictly on capital preservation, risk containment, and vitality restoration; avoid excessive leverage.`;
      } else {
        focusZh = '稳健深耕 · 蓄势待发';
        focusEn = 'Steady Cultivation · Poised Readiness';
        directiveZh = `${age}岁（${year} ${ganZhi}年）气数平稳中和，逢【${tenGod}】值守。适宜打磨核心技能、沉淀客户口碑与优化资产配置，积小胜为大胜，为下一轮高光大运夯实地基。`;
        directiveEn = `At age ${age} (${year} ${ganZhiEn}), energy flows evenly under [${tenGodEn}]. Ideal for refining technical craft, consolidating operational systems, and compounding core skills in preparation for the next growth surge.`;
      }

      timeline.push({
        age,
        year,
        stem,
        branch,
        ganZhi,
        ganZhiEn,
        tenGod,
        tenGodEn,
        naYin,
        naYinEn: (typeof I18N !== 'undefined') ? I18N.getNaYin(naYin, 'en') : naYin,
        decade: decadeText,
        decadeSpanZh,
        decadeSpanEn,
        energyScore,
        wealthScore,
        rating,
        alerts,
        alertsEn,
        focusZh,
        focusEn,
        directiveZh,
        directiveEn
      });
    }

    return timeline;
  }

  /**
   * Current Year & Season Operational Playbook (当季/本年现实破局罗盘)
   * Mainline focus, 4-season energy tides, immediate decision safeguards & red flags
   */
  function generateOperationalPlaybook(bazi, luckData, targetAnnual, targetMonth) {
    if (!bazi || !bazi.pillars) return null;
    const dm = bazi.dayMaster || '甲';
    const dmEl = bazi.dayMasterElement || STEM_ELEMENTS[STEMS.indexOf(dm)] || '木';
    const isStrong = isDayMasterStrong(bazi);
    const annual = targetAnnual || (luckData && luckData.activeAnnual) || (luckData && luckData.annuals && luckData.annuals[0]) || { year: new Date().getFullYear(), stem: '丙', branch: '午', text: '丙午' };
    const stem = annual.stem || '丙';
    const branch = annual.branch || '午';
    const ganZhi = annual.text || (stem + branch);
    const year = annual.year || 2026;
    const sIdx = STEMS.indexOf(stem);
    const bIdx = BRANCHES.indexOf(branch);
    const stemEl = STEM_ELEMENTS[sIdx] || '火';
    const branchEl = BRANCH_ELEMENTS[bIdx] || '火';

    const STEM_EN_MAP = { '甲': 'Jia', '乙': 'Yi', '丙': 'Bing', '丁': 'Ding', '戊': 'Wu', '己': 'Ji', '庚': 'Geng', '辛': 'Xin', '壬': 'Ren', '癸': 'Gui' };
    const BRANCH_EN_MAP = { '子': 'Zi', '丑': 'Chou', '寅': 'Yin', '卯': 'Mao', '辰': 'Chen', '巳': 'Si', '午': 'Wu', '未': 'Wei', '申': 'Shen', '酉': 'You', '戌': 'Xu', '亥': 'Hai' };
    const GOD_EN_MAP = {
      '比肩': 'Friend (Bi Jian)', '劫财': 'Rob Wealth (Jie Cai)',
      '食神': 'Eating God (Shi Shen)', '伤官': 'Hurting Officer (Shang Guan)',
      '偏财': 'Indirect Wealth (Pian Cai)', '正财': 'Direct Wealth (Zheng Cai)',
      '七杀': 'Seven Killings (Qi Sha)', '正官': 'Direct Officer (Zheng Guan)',
      '偏印': 'Indirect Resource (Pian Yin)', '正印': 'Direct Resource (Zheng Yin)'
    };

    const stemGod = annual.stemGod || getTenGod(dm, stem) || '偏财';
    const stemGodEn = (typeof I18N !== 'undefined' && typeof I18N.getGod === 'function') ? I18N.getGod(stemGod, 'en') : (GOD_EN_MAP[stemGod] || stemGod);
    const stemEn = (typeof I18N !== 'undefined' && typeof I18N.getStem === 'function') ? I18N.getStem(stem, 'en') : (STEM_EN_MAP[stem] || stem);
    const branchEn = (typeof I18N !== 'undefined' && typeof I18N.getBranch === 'function') ? I18N.getBranch(branch, 'en') : (BRANCH_EN_MAP[branch] || branch);
    const ganZhiEn = `${stemEn} ${branchEn}`;

    // Evaluate strategic tone & mainline mission
    let strategicToneZh = '';
    let strategicToneEn = '';
    let mainlineMissionZh = '';
    let mainlineMissionEn = '';
    let priorityTasksZh = [];
    let priorityTasksEn = [];
    let deprioritizedZh = [];
    let deprioritizedEn = [];

    if (stemGod.includes('印')) {
      if (!isStrong) {
        strategicToneZh = '厚积薄发 · 体系深筑与名望沉淀';
        strategicToneEn = 'Deep Foundations: Moat Architecture & Credibility Elevation';
        mainlineMissionZh = `太岁干支【${ganZhi}】临【${stemGod}】，日元得生得助，此年核心主线是“借力大机构、沉淀硬专业、构筑长久壁垒”。运逢甘露，万不可浮躁冒进，应专注将个人声誉与权威资质化为长期复利资产。`;
        mainlineMissionEn = `The annual transit [${ganZhiEn}] brings [${stemGodEn}], providing supportive resource replenishment. Your mainline mission is deep institutional alignment, credential mastery, and moat consolidation. Avoid hasty speculation; compound core reputational and intellectual assets for enduring leverage.`;
        priorityTasksZh = [
          '① 考取高阶行业认证、升级核心专业资质壁垒',
          '② 绑定主流头部平台或尊长贵人，借船出海',
          '③ 修复身心元气，建立终身可持续的作息与知识输入库'
        ];
        priorityTasksEn = [
          '1. Acquire elite industry credentials and upgrade specialized moat barriers',
          '2. Anchor to established institutional platforms and veteran mentors for leveraged distribution',
          '3. Restore vital somatic reserves and build sustainable intellectual compounding systems'
        ];
      } else {
        strategicToneZh = '收敛防守 · 谨防内耗与舒适陷阱';
        strategicToneEn = 'Prudent Consolidation: Guarding Against Complacency';
        mainlineMissionZh = `太岁印星过盛，身强遇印易生惰性与思想空转。此年主线任务是“强行打破舒适圈、拒绝理论空转、将存量知识转化为实体产品”。`;
        mainlineMissionEn = `Resource energy is overflowing against a strong Day Master, risking mental rumination and passive complacency. Your mainline mission is shattering passive comfort zones, stopping theoretical paralysis, and transmuting archived knowledge into tangible market products.`;
        priorityTasksZh = [
          '① 强行以输出倒逼输入，将库存技能产品化',
          '② 定期清空颅内杂念，以高强度行动阻断反刍',
          '③ 审视人际边界，规避冗余人情负债与拖延'
        ];
        priorityTasksEn = [
          '1. Force concrete production over passive learning, monetizing latent skillsets',
          '2. Regularly purge cognitive clutter, using disciplined physical execution to interrupt rumination',
          '3. Audit relational boundaries and eliminate unreciprocated moral obligations'
        ];
      }
      deprioritizedZh = ['盲目跟风加杠杆下场重资产投资', '沉湎于空头推演而迟迟不肯交付糙版产品'];
      deprioritizedEn = ['Blind leveraged debt for unproven capital investments', 'Endless mental simulation while delaying imperfect public launches'];
    } else if (stemGod.includes('官') || stemGod.includes('杀')) {
      if (isStrong) {
        strategicToneZh = '铁血掌舵 · 权威立标与层峰跨越';
        strategicToneEn = 'Decisive Command: Authority Building & Rank Elevation';
        mainlineMissionZh = `太岁临【${stemGod}】，身强能挑重担，此年迎来职场与事业的层峰突破之年。核心主线任务是“主动挑大梁、制定铁律规范、拿下标志性硬仗胜利”。`;
        mainlineMissionEn = `The annual transit manifests [${stemGodEn}], perfectly harnessed by your robust Day Master. Your mainline mission is seizing operational leadership, setting organizational standards, and delivering decisive milestone victories under pressure.`;
        priorityTasksZh = [
          '① 主动挂帅承接团队最艰难的核心攻坚项目',
          '② 规范组织流程与权责契约，树立不可替代的领导公信力',
          '③ 向上管理争取顶层资源，确立战略主导权'
        ];
        priorityTasksEn = [
          '1. Take executive command of high-stakes mission-critical initiatives',
          '2. Codify governance protocols and contractual clarity to cement authoritative leadership',
          '3. Manage upward decisively to lock in top-tier executive resource allocations'
        ];
      } else {
        strategicToneZh = '低调蛰伏 · 化解压力与避其锋芒';
        strategicToneEn = 'Low-Profile Resilience: Stress Diffusion & Conflict Avoidance';
        mainlineMissionZh = `太岁官杀克身，身弱遇克防压力过载与突发变局。此年主线任务是“严格遵守法务合规、寻求贵人庇护、绝不正面硬刚”。`;
        mainlineMissionEn = `Authority stars apply heavy pressure on a delicate Day Master, demanding stress insulation. Your mainline mission is ironclad regulatory compliance, seeking institutional cover, and dodging direct high-friction confrontations.`;
        priorityTasksZh = [
          '① 严查一切合同法务与财务隐性漏洞，杜绝官非隐患',
          '② 凡事留有缓冲退路，不强出头、不立军令状',
          '③ 强化身体底子，规律监测睡眠与心血管健康'
        ];
        priorityTasksEn = [
          '1. Audit all legal contracts and fiscal commitments to eliminate compliance vulnerabilities',
          '2. Build systemic buffers and avoid premature promises or high-visibility exposure',
          '3. Reinforce physical stamina, prioritizing restorative sleep and cardiovascular recovery'
        ];
      }
      deprioritizedZh = ['因意气用事与体制红线正面硬撞', '超负荷熬夜透支健康强撑虚名'];
      deprioritizedEn = ['Combative clashes against institutional red lines driven by ego', 'Chronic sleep deprivation and destructive overdrive to preserve appearances'];
    } else if (stemGod.includes('财')) {
      if (isStrong) {
        strategicToneZh = '商业决战 · 势能变现与资本扩张';
        strategicToneEn = 'Commercial Triumph: Asset Expansion & Monetization';
        mainlineMissionZh = `太岁见【${stemGod}】，身强任财，此年是商业变现与资本积累的高光之年。核心主线是“聚焦现金流业务、果断商业转化、锁定实际利润”。`;
        mainlineMissionEn = `The annual transit unveils [${stemGodEn}], met by strong capacity to hold wealth. Your mainline mission is laser-focusing on cash-flow generative initiatives, bold commercial monetization, and securing tangible net gains.`;
        priorityTasksZh = [
          '① 打磨拳头产品商业闭环，提高单客价值与交付毛利',
          '② 拓展多元收益渠道，将个人影响力转化为可持续资产',
          '③ 及时落袋为安，留足至少24个月安全现金储备'
        ];
        priorityTasksEn = [
          '1. Polish the core commercial loop, elevating customer lifetime value and delivery margins',
          '2. Diversify revenue streams, converting professional influence into durable wealth vehicles',
          '3. Systematically lock in profits, maintaining a minimum 24-month liquid cash reserve'
        ];
      } else {
        strategicToneZh = '现金为王 · 严防破耗与去伪存真';
        strategicToneEn = 'Cash Is King: Pruning Liabilities & Capital Protection';
        mainlineMissionZh = `身弱逢财旺之年，容易因贪图眼前利益而陷入财多身弱的虚浮泥潭。此年主线是“严控预算开支、拒绝超出承载力的高杠杆诱惑、保护元神不受利益撕扯”。`;
        mainlineMissionEn = `A delicate Day Master encountering abundant Wealth risks over-extension and fiscal fatigue. Your mainline mission is conservative capital preservation, resisting high-leverage gambles, and shielding mental sovereignty from commercial anxieties.`;
        priorityTasksZh = [
          '① 全面砍掉低效订阅与冗余支出，实施极简财务主义',
          '② 与信誉良好、资源雄厚的靠谱合伙人协同分成，降低单兵风险',
          '③ 严禁借贷加杠杆投机炒作，确保底线万无一失'
        ];
        priorityTasksEn = [
          '1. Ruthlessly eliminate superfluous overhead and adopt fiscal minimalism',
          '2. Partner with well-capitalized alliances to distribute execution risks',
          '3. Ban speculative leverage and unverified ventures to protect core solvency'
        ];
      }
      deprioritizedZh = ['脱离现实能力的盲目扩充团队与重资产租赁', '为了面子而打肿脸充胖子的非理性高消费'];
      deprioritizedEn = ['Reckless headcount expansion and heavy fixed asset leases beyond immediate cashflow', 'Conspicuous status spending and unhedged speculative commitments'];
    } else if (stemGod.includes('食') || stemGod.includes('伤')) {
      strategicToneZh = '锋芒出鞘 · 创新破局与产品爆发';
      strategicToneEn = 'Disruptive Breakthrough: Creative Innovation & Product Apex';
      mainlineMissionZh = `太岁临【${stemGod}】，才华秀气全力奔涌。此年核心主线是“打破常规陈规、打造杀手级产品或代表作、用极致才华击穿行业同质化壁垒”。`;
      mainlineMissionEn = `The annual transit ignites [${stemGodEn}], activating exceptional generative creativity. Your mainline mission is breaking obsolete dogmas, releasing a flagship signature masterpiece, and slicing through market noise with radical innovation.`;
      priorityTasksZh = [
        '① 全力投入核心作品的打磨研发与上线推广',
        '② 敢于表达独到见解，以独特风格占领行业心智',
        '③ 建立自动化交付流程，释放双手专注高维灵感'
      ];
      priorityTasksEn = [
        '1. Channel hyper-focus into engineering and launching your flagship product or portfolio',
        '2. Articulate bold differentiated perspectives to command cognitive real estate in your niche',
        '3. Automate delivery workflows to protect mental bandwidth for high-leverage creativity'
      ];
      deprioritizedZh = ['言语过激得罪核心盟友与无谓的网上口舌之争', '项目做到80%便失去兴趣半途而废'];
      deprioritizedEn = ['Abrasive communication that alienates key allies or pointless online debates', 'Abandoning projects at 80% completion due to novelty chasing'];
    } else {
      // 比肩 / 劫财
      if (isStrong) {
        strategicToneZh = '收紧边界 · 谨防背刺与资产泄露';
        strategicToneEn = 'Tighten Boundaries: Defense Against Betrayal & Leaks';
        mainlineMissionZh = `太岁临【${stemGod}】，同侪竞争白热化。此年主线是“明晰权责利益契约、防范资产与商业机密外泄、不与同质对手死磕内卷”。`;
        mainlineMissionEn = `The annual transit activates [${stemGodEn}], intensifying peer competition. Your mainline mission is fortifying legal boundaries, guarding proprietary intelligence, and refusing zero-sum infighting.`;
        priorityTasksZh = [
          '① 重新审视股权与利益分配机制，白纸黑字签定刚性协议',
          '② 开辟非对称差异化新赛道，跳出同业红海内耗',
          '③ 警惕所谓朋友或熟人的借款、担保与合作画饼'
        ];
        priorityTasksEn = [
          '1. Audit shareholder equity and profit splits with ironclad legal contracts',
          '2. Pivot to asymmetric differentiated niches to escape zero-sum red ocean friction',
          '3. Decline uncollateralized loans, financial guarantees, and speculative joint ventures with peers'
        ];
      } else {
        strategicToneZh = '群雄集结 · 合伙借力与版图拓宽';
        strategicToneEn = 'Alliance Synergy: Strategic Partnership & Network Scaling';
        mainlineMissionZh = `身弱得比劫相助，兄弟同心其利断金。此年主线是“积极寻求强力合伙人、共担风险共享收益、借助团队力量打破单兵发展瓶颈”。`;
        mainlineMissionEn = `A delicate Day Master receives vital Companion support. Your mainline mission is forging strategic alliances, pooling resources, and breaking past solo bottlenecks through team synergy.`;
        priorityTasksZh = [
          '① 寻找能力互补且三观一致的核心事业合伙人',
          '② 融入高能量圈子与行业同行建立深度业务协同',
          '③ 敢于分利让人，以大胸怀聚拢同行者'
        ];
        priorityTasksEn = [
          '1. Recruit complementary co-founders and allies sharing aligned core ethics',
          '2. Embed within high-vitality networks to orchestrate cross-functional collaborations',
          '3. Generously distribute equity and gains to rally formidable talent around your vision'
        ];
      }
      deprioritizedZh = ['盲目相信口头承诺而省略正式协议', '过度讲哥们义气而牺牲商业底线'];
      deprioritizedEn = ['Relying on informal verbal promises without rigorous paper contracts', 'Sacrificing fundamental business viability for sentimental peer loyalty'];
    }

    // Four Seasonal Energy Tides (春夏秋冬 四季节律)
    const seasonsData = [
      {
        seasonZh: '春季 · 木气升发 (寅卯辰月)',
        seasonEn: 'Spring · Wood Inception (Feb - Apr)',
        monthsZh: '正月立春 ~ 三月谷雨 (寅月、卯月、辰月)',
        monthsEn: 'Solar terms Yin, Mao, Chen (Feb to Apr)',
        solarTermsZh: '正月立春 ~ 三月谷雨 (寅月、卯月、辰月)',
        solarTermsEn: 'Solar terms Yin, Mao, Chen (Feb to Apr)',
        element: '木',
        elementEn: 'Wood',
        energyScore: (dmEl === '木' || dmEl === '火') ? (isStrong ? 82 : 92) : (dmEl === '金' ? 62 : 75),
        tidePostureZh: (dmEl === '木' || dmEl === '火') ? '生发布局 · 抢先试水' : '沉着破土 · 稳步扎根',
        tidePostureEn: (dmEl === '木' || dmEl === '火') ? 'Rapid Deployment & Probing' : 'Grounded Seeding & Rooting',
        rhythmZh: '天地气机由潜藏转为生发，阳气初起。此时万物破土，宜做全盘年度规划、启动最小可行性产品（MVP）试水、拜访行业领路人；忌犹豫观望延误春耕良机。',
        rhythmEn: 'Cosmic energy shifts from hibernation to vigorous sprouting. Optimal for master annual planning, piloting Minimum Viable Products, and engaging mentors. Avoid hesitations that miss spring seeding windows.',
        actionDoZh: '明确年度战略大纲、快速启动原型验证、主动结交先锋伙伴',
        actionDoEn: 'Finalize annual roadmaps, pilot rapid prototypes, initiate pioneering partnerships',
        actionAvoidZh: '过度沉溺细节迟迟不动、在寒气未退时盲目豪赌大笔资金',
        actionAvoidEn: 'Paralysis by analysis, premature heavy capital bets before spring frost recedes'
      },
      {
        seasonZh: '夏季 · 火土繁盛 (巳午未月)',
        seasonEn: 'Summer · Fire & Earth Apex (May - Jul)',
        monthsZh: '四月立夏 ~ 六月大暑 (巳月、午月、未月)',
        monthsEn: 'Solar terms Si, Wu, Wei (May to Jul)',
        solarTermsZh: '四月立夏 ~ 六月大暑 (巳月、午月、未月)',
        solarTermsEn: 'Solar terms Si, Wu, Wei (May to Jul)',
        element: '火',
        elementEn: 'Fire',
        energyScore: (dmEl === '火' || dmEl === '土') ? (isStrong ? 78 : 95) : (dmEl === '水' ? 58 : 72),
        tidePostureZh: (dmEl === '火' || dmEl === '土') ? '势能顶峰 · 决战攻坚' : '保持冷静 · 避暑均称',
        tidePostureEn: (dmEl === '火' || dmEl === '土') ? 'Apex Momentum & Decisive Campaign' : 'Thermal Balance & Cadence Preservation',
        rhythmZh: '阳气盛极，万物繁茂。此时市场情绪与活力达到全年波峰，是推出产品、做大规模公开展演、加速商业转化、决战攻坚的黄金决战期。注意补水与规律睡眠防心火亢盛。',
        rhythmEn: 'Yang energy reaches its radiant climax. Market momentum and vitality crest; optimal for launching flagship products, public showcases, aggressive conversions, and conquering pivotal battles.',
        actionDoZh: '重拳出击上线主打产品、密集进行市场推广与公关曝光、拿下大单',
        actionDoEn: 'Launch flagship offerings with full force, execute high-intensity PR, close landmark deals',
        actionAvoidZh: '情绪失控与人正面冲突、心浮气躁签订草率条约、忽视身体降温',
        actionAvoidEn: 'Hot-tempered emotional confrontations, signing hasty contracts, ignoring heat burnout'
      },
      {
        seasonZh: '秋季 · 金气肃降 (申酉戌月)',
        seasonEn: 'Autumn · Metal Harvest (Aug - Oct)',
        monthsZh: '七月立秋 ~ 九月霜降 (申月、酉月、戌月)',
        monthsEn: 'Solar terms Shen, You, Xu (Aug to Oct)',
        solarTermsZh: '七月立秋 ~ 九月霜降 (申月、酉月、戌月)',
        solarTermsEn: 'Solar terms Shen, You, Xu (Aug to Oct)',
        element: '金',
        elementEn: 'Metal',
        energyScore: (dmEl === '金' || dmEl === '水') ? (isStrong ? 80 : 90) : (dmEl === '木' ? 60 : 76),
        tidePostureZh: (dmEl === '金' || dmEl === '水') ? '利刃收割 · 梳理落袋' : '清退断舍 · 防范纠纷',
        tidePostureEn: (dmEl === '金' || dmEl === '水') ? 'Harvesting Gains & Moat Consolidation' : 'Ruthless Pruning & Dispute Shielding',
        rhythmZh: '金风肃杀，由发散转为收敛。此时重心在于核验上半年战果、及时落袋为安、裁撤低效冗余项目、严格法务与回款催收；以冷峻客观的眼光剔除无效资产。',
        rhythmEn: 'Metal qi brings pruning clarity, transmuting outward expansion into harvest. Focus on cash collections, profit taking, pruning redundant operations, and tightening legal compliance.',
        actionDoZh: '督促项目回款、关闭边缘赔钱业务、盘点资产并制定风控预案',
        actionDoEn: 'Accelerate receivable collections, terminate loss-making pet projects, audit reserves',
        actionAvoidZh: '盲目跨界开辟新战线、对拖欠款项姑息放任、与官方法律规则对抗',
        actionAvoidEn: 'Opening sprawling new fronts, tolerating chronic bad debts, cutting regulatory corners'
      },
      {
        seasonZh: '冬季 · 水气归藏 (亥子丑月)',
        seasonEn: 'Winter · Water Hibernation (Nov - Jan)',
        monthsZh: '十月立冬 ~ 十二月大寒 (亥月、子月、丑月)',
        monthsEn: 'Solar terms Hai, Zi, Chou (Nov to Jan)',
        solarTermsZh: '十月立冬 ~ 十二月大寒 (亥月、子月、丑月)',
        solarTermsEn: 'Solar terms Hai, Zi, Chou (Nov to Jan)',
        element: '水',
        elementEn: 'Water',
        energyScore: (dmEl === '水' || dmEl === '木') ? (isStrong ? 85 : 88) : (dmEl === '火' ? 55 : 68),
        tidePostureZh: '闭关深潜 · 能量休养',
        tidePostureEn: 'Deep Strategic Priming & Restorative Hibernation',
        rhythmZh: '水主润下与静止，阳气内收闭藏。此阶段严禁冒进扩张，宜闭关静修、系统化复盘整年得失、重塑底层知识架构、养精蓄锐；为来年开春蓄积不可撼动的爆发势能。',
        rhythmEn: 'Water commands deep stillness and inward restoration. Avoid hasty expansion; dedicate this quiet phase to rigorous annual retrospectives, theoretical deepening, and vitality replenishment.',
        actionDoZh: '做深度复盘与资产年终审计、静心研读经典著作、温补元气早睡晚起',
        actionDoEn: 'Conduct forensic annual post-mortems, deep-dive classical studies, nourish vitality',
        actionAvoidZh: '在年底现金流紧缩时盲目启动重资本项目、透支体力熬夜',
        actionAvoidEn: 'Launching capital-heavy projects amid year-end cash contractions, chronic fatigue'
      }
    ];

    // Immediate Decision Safeguards & Red Flags (即时决策防火墙与雷区预警)
    const riskTriggers = [];
    const natalBranches = [
      bazi.pillars.year.branch,
      bazi.pillars.month.branch,
      bazi.pillars.day.branch,
      bazi.pillars.hour.branch
    ];
    const SIX_CLASH_MAP = { '子': '午', '午': '子', '丑': '未', '未': '丑', '寅': '申', '申': '寅', '卯': '酉', '酉': '卯', '辰': '戌', '戌': '辰', '巳': '亥', '亥': '巳' };
    const clashBranch = SIX_CLASH_MAP[branch];
    const hasClash = natalBranches.includes(clashBranch);

    if (hasClash) {
      const clashBranchEn = (typeof I18N !== 'undefined') ? I18N.getBranch(clashBranch, 'en') : (BRANCH_EN_MAP[clashBranch] || clashBranch);
      riskTriggers.push({
        icon: '⚡',
        titleZh: `太岁地支冲克红线 (${branch}与命中${clashBranch}相冲)`,
        titleEn: `Annual Clash Alarm (${branchEn} Clashing with Natal ${clashBranchEn})`,
        riskZh: `流年地支【${branch}】与本命地支【${clashBranch}】形成六冲，气机剧烈震荡。容易面临居所变动、职场动荡、人际撕裂或合伙破裂之突发风险。`,
        riskEn: `The annual branch [${branchEn}] forms a direct six-clash with your natal [${clashBranchEn}], causing systemic tectonic shifts. Elevates risks of sudden location moves, leadership volatility, and partner fallouts.`,
        circuitBreakerZh: '【即时熔断机制】：凡涉及重大解约、辞职跳槽或大宗置业决策，必须设立72小时冷静缓冲期，并邀请第三方客观法务审计，严禁在情绪顶峰当场摊牌。',
        circuitBreakerEn: '[Circuit Breaker Protocol]: Enforce a strict 72-hour cooling-off delay for any contract termination, job resignation, or major real estate purchase; require third-party legal review.'
      });
    } else {
      riskTriggers.push({
        icon: '⚖️',
        titleZh: '合规与契约边界红线',
        titleEn: 'Contractual Integrity & Compliance Red Line',
        riskZh: '市场环境与利益流动加快，容易遭遇隐蔽性口头承诺陷阱、知识产权边界模糊或权责不清的被动背锅风险。',
        riskEn: 'Accelerating commercial interactions heighten exposures to unverified verbal commitments, ambiguous intellectual property boundaries, and collateral blame.',
        circuitBreakerZh: '【即时熔断机制】：杜绝任何“先干活后补合同”的侥幸心态；凡无白纸黑字盖章对公协议的业务，一律停止垫资与资源注入。',
        circuitBreakerEn: '[Circuit Breaker Protocol]: Zero tolerance for starting work without signed contracts. Cease capital or labor allocation immediately if bilateral documentation is missing.'
      });
    }

    if (stemGod.includes('财') || stemGod.includes('劫')) {
      riskTriggers.push({
        icon: '💰',
        titleZh: '大额资金与流动性雷区',
        titleEn: 'Capital Liquidity & Leverage Trap',
        riskZh: '资金链易受市场非理性波动或所谓“暴利风口”诱惑，警惕因短贷长投或盲目跟投熟人项目导致的现金流瞬间断裂。',
        riskEn: 'Vulnerable to market volatility and seductive high-yield mirages. Guard against maturity mismatches (borrowing short to invest long) or speculative peer ventures that wipe out liquidity.',
        circuitBreakerZh: '【即时熔断机制】：坚持“单笔不可承受损失清零”原则。严禁向任何人提供非必要借款或连带担保；账户必须保留覆盖18个月基础生存底线的独立防火墙基金。',
        circuitBreakerEn: '[Circuit Breaker Protocol]: Apply the zero-ruin principle. Ban personal loan guarantees; safeguard an unencumbered 18-month baseline liquidity reserve.'
      });
    } else {
      riskTriggers.push({
        icon: '🛡️',
        titleZh: '身心过载与精力透支红线',
        titleEn: 'Burnout & Over-Commitment Red Line',
        riskZh: '面对过多并发机会时难以拒绝，容易将注意力撕扯在过多低价值枝节上，导致核心业务推进迟滞并引发神经衰弱。',
        riskEn: 'Over-committing to distracting opportunities fragments attention across low-leverage tasks, slowing down core delivery while triggering chronic autonomic nervous fatigue.',
        circuitBreakerZh: '【即时熔断机制】：严格执行“一票否决单核法则”——同一季度内只允许设立1个核心胜负手任务；非主线事务统一回复：“暂不参与，来年再看”。',
        circuitBreakerEn: '[Circuit Breaker Protocol]: Single-core rule: allow only ONE decisive strategic priority per quarter. For non-core solicitations, issue a polite standard rejection.'
      });
    }

    riskTriggers.push({
      icon: '🕊️',
      titleZh: '人际声誉与情绪防护栏',
      titleEn: 'Reputation Shield & Emotional Firewall',
      riskZh: '容易受外界负面评判、小人暗箭或同行酸言酸语激怒，若卷入无休止的争辩自证，将迅速落入消耗算力的内耗圈套。',
      riskEn: 'Susceptibility to malicious rumors, petty provocations, or competitive envy. Entering public debates or defensive self-justifications drains high-value cognitive bandwidth.',
      circuitBreakerZh: '【即时熔断机制】：恪守“不自证、不纠缠、不反击低维小人”。面对非难微笑退避，把所有反击精力转化为高质量公开作品与业绩降维打击。',
      circuitBreakerEn: '[Circuit Breaker Protocol]: Never litigate against bad-faith actors. Smile and disengage instantly; channel all reactive energy into shipping superior work that renders critics irrelevant.'
    });

    const goldenRulesZh = [
      '① 主线第一：今年只攻克一件能产生10倍杠杆的核心成果，其余皆为支线噪音。',
      '② 底线封死：任何决策先算最坏下场；只要最坏情况能安然承受，便果断执行。',
      '③ 绝不自耗：不在脑中反复演练他人的可能态度；以客观物理事实为唯一决策依据。'
    ];
    const goldenRulesEn = [
      '1. Mainline Supremacy: Win the single 10x leverage milestone this year; treat everything else as secondary noise.',
      '2. Absolute Floor: Stress-test the catastrophic downside first; if survivable, pull the trigger decisively.',
      '3. Zero Rumination: Never second-guess others\' hidden motives; anchor solely on empirical physical facts.'
    ];

    return {
      year,
      stemBranch: ganZhi,
      stemBranchEn: ganZhiEn,
      stemGod,
      stemGodEn,
      strategicToneZh,
      strategicToneEn,
      mainlineMissionZh,
      mainlineMissionEn,
      priorityTasksZh,
      priorityTasksEn,
      deprioritizedZh,
      deprioritizedEn,
      seasonalTides: seasonsData,
      safeguards: {
        safeguardTitleZh: '当季与本年现实决策防火墙 · 即时熔断机制',
        safeguardTitleEn: 'Operational Decision Safeguard & Real-Time Circuit Breakers',
        riskTriggers,
        goldenRulesZh,
        goldenRulesEn
      }
    };
  }

  /**
   * Geographic & Workplace Ecological Resonance (地理方位与组织生态匹配仪)
   */
  function generateGeographicEcologicalResonance(bazi) {
    if (!bazi || !bazi.pillars) return null;
    const dm = bazi.dayMaster || '甲';
    const dmEl = bazi.dayMasterElement || STEM_ELEMENTS[STEMS.indexOf(dm)] || '木';
    const isStrong = isDayMasterStrong(bazi);

    // Evaluate 5 Geographic Directions (East 木, South 火, Central 土, West 金, North 水)
    const directionConfigs = [
      {
        directionZh: '东方 (木气场)',
        directionEn: 'East (Wood Field)',
        element: '木',
        elementEn: 'Wood',
        citiesZh: '上海、杭州、苏州、南京、青岛、江浙沿海、东京等',
        citiesEn: 'Shanghai, Hangzhou, Suzhou, Nanjing, East Coast, Tokyo',
        evalRule: (dmEl === '水') ? { score: 88, ratingZh: '生发吐秀 · 创意沃土', ratingEn: 'Creative Flowering Zone' }
                : (dmEl === '木') ? (isStrong ? { score: 72, ratingZh: '同侪汇聚 · 竞争激烈', ratingEn: 'Peer Hub - Intense Rivalry' } : { score: 94, ratingZh: '本命强根 · 稳固基石', ratingEn: 'Supreme Natal Anchoring' })
                : (dmEl === '火') ? { score: 92, ratingZh: '木火通明 · 贵人滋养', ratingEn: 'Nourishing Mentor Springboard' }
                : (dmEl === '土') ? { score: 65, ratingZh: '官煞克伐 · 磨砺压制', ratingEn: 'High Pressure Crucible' }
                : { score: 85, ratingZh: '金木生财 · 商业开拓', ratingEn: 'Commercial Exploitation Field' }
      },
      {
        directionZh: '南方 (火气场)',
        directionEn: 'South (Fire Field)',
        element: '火',
        elementEn: 'Fire',
        citiesZh: '深圳、广州、香港、珠三角、海口、新加坡、东南亚等',
        citiesEn: 'Shenzhen, Guangzhou, Hong Kong, Pearl River Delta, Singapore, Southeast Asia',
        evalRule: (dmEl === '木') ? { score: 92, ratingZh: '木火通明 · 锋芒绽放', ratingEn: 'Radiant Talent Apex' }
                : (dmEl === '火') ? (isStrong ? { score: 70, ratingZh: '烈火烹油 · 防范浮躁', ratingEn: 'Hyper-Dynamic - Guard Overdrive' } : { score: 95, ratingZh: '暖阳融融 · 威权倍增', ratingEn: 'Vitality & Authority Surge' })
                : (dmEl === '土') ? { score: 90, ratingZh: '印星生身 · 平台得力', ratingEn: 'Generative Platform Moat' }
                : (dmEl === '金') ? { score: 68, ratingZh: '真金火炼 · 强压挑战', ratingEn: 'Refining Smelter - High Stress' }
                : { score: 86, ratingZh: '水火既济 · 财富变现', ratingEn: 'Water-Fire Harmonious Wealth' }
      },
      {
        directionZh: '中原 / 枢纽 (土气场)',
        directionEn: 'Central / Continental Hub (Earth Field)',
        element: '土',
        elementEn: 'Earth',
        citiesZh: '北京、西安、郑州、武汉、成都、重庆等中西部枢纽',
        citiesEn: 'Beijing, Xi\'an, Zhengzhou, Wuhan, Chengdu, Chongqing',
        evalRule: (dmEl === '火') ? { score: 86, ratingZh: '火土相生 · 稳实落地', ratingEn: 'Grounded Execution Zone' }
                : (dmEl === '土') ? (isStrong ? { score: 74, ratingZh: '厚重沉稳 · 节奏趋缓', ratingEn: 'Stately Steady Pace' } : { score: 92, ratingZh: '厚德载物 · 滋养培补', ratingEn: 'Generous Nourishing Sanctuary' })
                : (dmEl === '金') ? { score: 90, ratingZh: '土金相生 · 财库充盈', ratingEn: 'Generative Capital Vault' }
                : (dmEl === '水') ? { score: 66, ratingZh: '堤岸围困 · 循规蹈矩', ratingEn: 'Rigid Boundaries & Rules' }
                : { score: 84, ratingZh: '扎根深厚 · 稳步取财', ratingEn: 'Deep Rooting & Steady Wealth' }
      },
      {
        directionZh: '西方 (金气场)',
        directionEn: 'West (Metal Field)',
        element: '金',
        elementEn: 'Metal',
        citiesZh: '成渝高新、西安科技圈、西欧(伦敦/巴黎)、北美西海岸等',
        citiesEn: 'Chengdu-Chongqing tech hubs, Western Europe, North American West',
        evalRule: (dmEl === '土') ? { score: 88, ratingZh: '土金吐秀 · 精英研创', ratingEn: 'Elite Analytical R&D Haven' }
                : (dmEl === '金') ? (isStrong ? { score: 70, ratingZh: '铁骑并进 · 需求差异', ratingEn: 'Fierce Analytical Competition' } : { score: 93, ratingZh: '金水相生 · 肃穆成器', ratingEn: 'Formidable Crafting Mastery' })
                : (dmEl === '水') ? { score: 91, ratingZh: '源远流长 · 学术智库', ratingEn: 'Enduring Source Intellect' }
                : (dmEl === '木') ? { score: 68, ratingZh: '修剪雕琢 · 规训打磨', ratingEn: 'Rigorous Pruning Crucible' }
                : { score: 85, ratingZh: '火炼真金 · 掌控大权', ratingEn: 'Smelting Gold - Executive Authority' }
      },
      {
        directionZh: '北方 (水气场)',
        directionEn: 'North (Water Field)',
        element: '水',
        elementEn: 'Water',
        citiesZh: '北京、天津、沈阳、大连、北欧、加拿大等北方重镇',
        citiesEn: 'Beijing, Tianjin, Northern coastal cities, Northern Europe, Canada',
        evalRule: (dmEl === '金') ? { score: 90, ratingZh: '金白水清 · 灵性远见', ratingEn: 'Pure Intellect & Vision' }
                : (dmEl === '水') ? (isStrong ? { score: 72, ratingZh: '汪洋大海 · 需堤防洪', ratingEn: 'Vast Ocean - Guard Flooding' } : { score: 94, ratingZh: '深流得助 · 潜龙出渊', ratingEn: 'Deep Fluid Powerhouse' })
                : (dmEl === '木') ? { score: 91, ratingZh: '水木相涵 · 智慧长青', ratingEn: 'Spiritual Wisdom & Long-term Growth' }
                : (dmEl === '火') ? { score: 65, ratingZh: '水火相激 · 寒凝冰封', ratingEn: 'Challenging Cold Damp Tension' }
                : { score: 86, ratingZh: '润泽丰沃 · 积聚资粮', ratingEn: 'Nourishing Resource Abundance' }
      }
    ];

    const geographicDirections = directionConfigs.map(cfg => {
      const res = cfg.evalRule;
      let resonanceZh = '';
      let resonanceEn = '';
      let careerSynergyZh = '';
      let careerSynergyEn = '';

      if (res.score >= 90) {
        resonanceZh = `本地方位【${cfg.element}】气场与命元日主形成天作之合，气机顺畅无阻。在此能激发深层潜能、得贵人相助、减少莫名的人际与现实阻力。`;
        resonanceEn = `This direction\'s [${cfg.elementEn}] energy harmonizes perfectly with your natal core. Fluid elemental circulation unlocks deep potential, attracts mentors, and dissolves friction.`;
        careerSynergyZh = '适合作为核心事业根据地、长期定居立足点或重大项目落地主场。';
        careerSynergyEn = 'Prime destination for core career headquarters, permanent residency, or pivotal business deployments.';
      } else if (res.score >= 80) {
        resonanceZh = `本地方位气场偏向务实稳健，五行相生相化，能为你提供坚实的基础设施支撑与稳步积累的物质环境。`;
        resonanceEn = `This direction provides steady pragmatic grounding and balanced circulation, offering reliable infrastructure and systematic capital accumulation.`;
        careerSynergyZh = '适合开展常规商业运营、设立区域分支中心或技术研发基地。';
        careerSynergyEn = 'Ideal for robust operational scaling, regional subsidiary hubs, or technical R&D centers.';
      } else {
        resonanceZh = `本地方位五行气场与命元存在明显的相克或过重耗泄，容易在人际文化、心理适应或生活习惯上感受到隐形阻力。`;
        resonanceEn = `This direction exhibits significant elemental friction or exhausting tension with your Day Master, presenting subtle cultural and interpersonal headwinds.`;
        careerSynergyZh = '适合短期攻坚或磨炼意志，不建议作为耗竭元神时期的长期避风港。';
        careerSynergyEn = 'Valuable for short-term discipline or high-stakes sprints, but unadvisable as a long-term sanctuary during low vitality periods.';
      }

      return {
        directionZh: cfg.directionZh,
        directionEn: cfg.directionEn,
        element: cfg.element,
        elementEn: cfg.elementEn,
        citiesZh: cfg.citiesZh,
        citiesEn: cfg.citiesEn,
        fitScore: res.score,
        ratingZh: res.ratingZh,
        ratingEn: res.ratingEn,
        resonanceZh,
        resonanceEn,
        careerSynergyZh,
        careerSynergyEn
      };
    });

    geographicDirections.sort((a, b) => b.fitScore - a.fitScore);
    const bestDir = geographicDirections[0];
    const bestDirectionZh = `首选主场方位：${bestDir.directionZh}（契合度 ${bestDir.fitScore}% · ${bestDir.ratingZh}），代表枢纽：${bestDir.citiesZh}`;
    const bestDirectionEn = `Prime Resonant Direction: ${bestDir.directionEn} (Resonance: ${bestDir.fitScore}% · ${bestDir.ratingEn}), Hubs: ${bestDir.citiesEn}`;

    // Workplace Organizational Ecosystem Fit (4 Dimensions)
    const pillars = bazi.pillars;
    const godSet = new Set();
    ['year', 'month', 'day', 'hour'].forEach(k => {
      const p = pillars[k];
      if (p.stemGod && p.stemGod !== '日主') godSet.add(p.stemGod);
      if (p.hidden) p.hidden.forEach(h => godSet.add(h.god));
    });

    const hasOfficer = godSet.has('正官') || godSet.has('正印');
    const hasKillings = godSet.has('七杀') || godSet.has('偏官');
    const hasHurting = godSet.has('伤官');
    const hasEating = godSet.has('食神');
    const hasWealth = godSet.has('正财') || godSet.has('偏财');
    const hasRobWealth = godSet.has('劫财') || godSet.has('比肩');
    const hasIndirectResource = godSet.has('偏印');

    // 1. System, SOE & Large Bureaucracy
    let sysScore = 65;
    if (hasOfficer) sysScore += 20;
    if (hasHurting) sysScore -= 22;
    if (hasKillings && !hasOfficer) sysScore -= 10;
    if (!isStrong) sysScore += 10;
    sysScore = Math.max(40, Math.min(95, sysScore));

    // 2. Flat Startups & Agile Venture
    let ventureScore = 60;
    if (hasHurting) ventureScore += 22;
    if (hasKillings) ventureScore += 18;
    if (hasWealth) ventureScore += 12;
    if (isStrong) ventureScore += 10;
    if (hasOfficer && !hasHurting) ventureScore -= 15;
    ventureScore = Math.max(40, Math.min(96, ventureScore));

    // 3. Professional Partnership & Guild
    let partnerScore = 62;
    if (hasRobWealth) partnerScore += 18;
    if (hasWealth) partnerScore += 12;
    if (hasEating) partnerScore += 10;
    if (hasKillings && !hasOfficer) partnerScore -= 8;
    partnerScore = Math.max(40, Math.min(94, partnerScore));

    // 4. Solo Expert & Boutique Creator IP
    let soloScore = 60;
    if (hasIndirectResource) soloScore += 22;
    if (hasEating) soloScore += 18;
    if (hasHurting) soloScore += 15;
    if (!isStrong) soloScore += 12;
    if (hasOfficer && !hasIndirectResource) soloScore -= 12;
    soloScore = Math.max(40, Math.min(95, soloScore));

    const workplaceEcosystems = [
      {
        key: 'systemSOE',
        nameZh: '体制内 / 国企 / 央企科层制系统',
        nameEn: 'System, SOEs & Hierarchical Bureaucracy',
        icon: '🏛️',
        fitScore: sysScore,
        gradeZh: sysScore >= 80 ? '天然适任主场' : sysScore >= 65 ? '需高维心智防耗' : '极度耗能避让',
        gradeEn: sysScore >= 80 ? 'Prime Natural Fit' : sysScore >= 65 ? 'Requires Conscious Adaptation' : 'High Friction - Unfavorable',
        resonanceZh: sysScore >= 80
          ? '正官正印纯粹，高度契合体制内程序规范与层级秩序。重契约有担当，能以稳健资历赢得组织信任与逐步晋升。'
          : '命带叛逆锐气（伤官七杀），在繁琐教条与形式主义汇报中易感窒息；若无高情商中和，容易因直言不讳遭致无形边缘化。',
        resonanceEn: sysScore >= 80
          ? 'Clear Officer and Resource alignment thrives within institutional order and regulatory compliance, steadily winning trust and seniority.'
          : 'Disruptive edge (Hurting Officer / Seven Killings) feels constrained by dogmatic red tape, risking friction if outspoken.',
        frictionRootCauseZh: '【内耗核心因由】：讨厌虚耗时间的流程汇报与复杂办公室政治，感到个人专业才华无法即时得到物理世界的正反馈。',
        frictionRootCauseEn: '[Core Friction Trigger]: Exhaustion from ceremonial reporting and subtle political posturing where individual competence yields delayed feedback.',
        survivalTacticsZh: '【破局自处指南】：若身在其中，收起锋芒不作道德裁判官；把组织当作不可替代的资源护城河，利用充裕时间深耕硬核学术资质。',
        survivalTacticsEn: '[Operational Survival Guide]: If operating within, lower your combat posture. Treat the institution as a stable protective moat while quietly compounding independent credentials.'
      },
      {
        key: 'flatVenture',
        nameZh: '扁平创新创业 / 互联网科技 / 敏捷初创',
        nameEn: 'Flat Startups, Agile Tech & Venture Growth',
        icon: '🚀',
        fitScore: ventureScore,
        gradeZh: ventureScore >= 80 ? '天然适任主场' : ventureScore >= 65 ? '需高维心智防耗' : '极度耗能避让',
        gradeEn: ventureScore >= 80 ? 'Prime Natural Fit' : ventureScore >= 65 ? 'Requires Conscious Adaptation' : 'High Friction - Unfavorable',
        resonanceZh: ventureScore >= 80
          ? '伤官生财、七杀当权，天生具备颠覆性创新敏锐度与绝境破局魄力。在去中心化、唯业绩说话的战壕中能够释放十倍战斗力。'
          : '注重确定感与安全边际，面对初创企业的高频战略转向、现金流不确定性与多工种一人身兼容易产生焦虑。',
        resonanceEn: ventureScore >= 80
          ? 'Hurting Officer generating Wealth paired with Seven Killings excels in agile, meritocratic environments, delivering tenfold creative breakthroughs.'
          : 'High need for structural certainty finds chronic startup pivots and volatile runway metrics emotionally destabilizing.',
        frictionRootCauseZh: '【内耗核心因由】：因追求过高极致完美而频繁否定当前版本，或因团队执行力跟不上自己超前的大脑算力而倍感焦躁。',
        frictionRootCauseEn: '[Core Friction Trigger]: Perfectionist paralysis delaying shipment, or extreme irritation when team execution lags behind your swift mental architecture.',
        survivalTacticsZh: '【破局自处指南】：坚持“完成远胜于完美”，允许交付粗糙MVP；克制亲力亲为的冲动，将注意力锁定在战略胜负手与商业回款。',
        survivalTacticsEn: '[Operational Survival Guide]: Adhere to "Done is better than perfect"; resist micromanagement and focus exclusively on core revenue engines.'
      },
      {
        key: 'partnership',
        nameZh: '专业合伙制 / 事务所 / 专家联盟',
        nameEn: 'Professional Partnership, Guild & Alliance',
        icon: '🤝',
        fitScore: partnerScore,
        gradeZh: partnerScore >= 80 ? '天然适任主场' : partnerScore >= 65 ? '需高维心智防耗' : '极度耗能避让',
        gradeEn: partnerScore >= 80 ? 'Prime Natural Fit' : partnerScore >= 65 ? 'Requires Conscious Adaptation' : 'High Friction - Unfavorable',
        resonanceZh: partnerScore >= 80
          ? '比劫有制、财星流通，善于通过利益捆绑聚拢各路高手。在合伙人共治模式下既能保持相对独立，又能借助集体品牌打大仗。'
          : '对伙伴忠诚度与付出公平度极度敏感，一旦出现责任不均或收益分配瑕疵，容易在心中积压怨怼引发剧烈动荡。',
        resonanceEn: partnerScore >= 80
          ? 'Companion stars balanced by Wealth enable effective profit-sharing and guild governance, combining autonomy with pooled collective leverage.'
          : 'Extreme sensitivity to fairness and contribution equity can lead to silent resentment if accountability or profit dividends drift.',
        frictionRootCauseZh: '【内耗核心因由】：遇到搭便车的合伙人不敢当面撕破脸，表面隐忍迁就，内心反复盘算投入产出比而自我内耗。',
        frictionRootCauseEn: '[Core Friction Trigger]: Internalizing anger toward free-riding peers; agonizing over unreciprocated energy investment instead of enforcing boundaries.',
        survivalTacticsZh: '【破局自处指南】：先小人后君子，入局前确立冷酷刚性的股权退出与考核机制；把情分与契约严格隔离，亲兄弟明算账。',
        survivalTacticsEn: '[Operational Survival Guide]: Ironclad buy-sell agreements upfront. Strictly decouple emotional fraternity from cold corporate contractual obligations.'
      },
      {
        key: 'autonomousIP',
        nameZh: '独立专家工作室 / 超级个体 / 知识IP',
        nameEn: 'Solo Specialist Studio, Creator & Knowledge IP',
        icon: '💡',
        fitScore: soloScore,
        gradeZh: soloScore >= 80 ? '天然适任主场' : soloScore >= 65 ? '需高维心智防耗' : '极度耗能避让',
        gradeEn: soloScore >= 80 ? 'Prime Natural Fit' : soloScore >= 65 ? 'Requires Conscious Adaptation' : 'High Friction - Unfavorable',
        resonanceZh: soloScore >= 80
          ? '偏印灵性与食伤才华交织，享受深度沉浸式心流。一个人就是一家公司，依靠无可替代的专业护城河活得从容体面。'
          : '缺乏单兵作战的抗压韧性或缺乏商业闭环意识，容易陷入空想清高、难以将高深技能顺利变现的财务窘境。',
        resonanceEn: soloScore >= 80
          ? 'Indirect Resource spirituality combined with expressive talent thrives in autonomous deep work, operating as a resilient one-person enterprise.'
          : 'Potential commercial blind spots or loneliness: intellectual aloofness without a crisp customer acquisition funnel leads to cash anxiety.',
        frictionRootCauseZh: '【内耗核心因由】：既渴望绝对自由又惧怕完全暴露在市场风浪中；思想巨人行动矮子，深陷无休止的打磨拖延。',
        frictionRootCauseEn: '[Core Friction Trigger]: Craving total autonomy while dreading market exposure; endless refinement without publishing.',
        survivalTacticsZh: '【破局自处指南】：建立极简自动化运营管道，把专业知识封装为标准化数字资产；保持高密度的公开输出，以作品吸引高质量同频伙伴。',
        survivalTacticsEn: '[Operational Survival Guide]: Productize specialized insight into scalable digital assets; publish continuously to let your work attract aligned clientele.'
      }
    ];

    workplaceEcosystems.sort((a, b) => b.fitScore - a.fitScore);

    return {
      geographicDirections,
      bestDirectionZh,
      bestDirectionEn,
      workplaceEcosystems
    };
  }

  return {
    calculateLuck,
    calculateDecadeMetadata,
    getDecades,
    getAnnualLuck,
    getMonthlyLuck,
    getDailyLuck,
    evaluateInteractions,
    evaluateTransitFortune,
    calculateLifelongTimeline,
    generateOperationalPlaybook,
    generateGeographicEcologicalResonance,
    isDayMasterStrong,
    getTenGod,
    getNaYin
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = LuckEngine;
}
if (typeof window !== 'undefined') {
  window.LuckEngine = LuckEngine;
}
