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

    return {
      decadeMeta,
      decades,
      activeDecade,
      annuals,
      activeAnnual,
      months,
      activeMonth,
      daily,
      interactions
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
