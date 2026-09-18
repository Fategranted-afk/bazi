/**
 * 《千里命稿》 (Qian Li Ming Gao) Canonical Database
 * Republican Era Masterpiece of Practical Modern Ziping & Case Precedents
 * Author: 民国·韦千里 (现代命学通俗化与实证实战奠基人)
 * 
 * Core Metaphysical Tenets:
 * 1. 用神五法总枢 (The Five Principles of Useful God): 扶抑、病药、调候、通关、专旺。
 * 2. 通俗化与系统化 (Vernacular Systematization): 融会古今，扫除迷信，以现代实证案例解析格局演变。
 * 3. 六亲运途断案实录 (Case Law & Jurisprudence System): 强调岁运交接之实操应期与决策指导。
 */

const QIAN_LI_DATA = {
  protocols: [
    {
      id: 'fuyi',
      nameZh: '扶抑用神法',
      nameEn: 'Supporting & Restraining Protocol (Fu Yi)',
      quoteZh: '强则抑之，衰则扶之。日干旺而喜克泄耗，日干弱而喜印绶生扶与比劫同气相求。',
      quoteEn: 'Restrain the overbearing; support the delicate. When Day Master is robust, Output, Wealth, and Officer flourish; when frail, Resource and Peer allies nourish.',
      vernacularZh: '韦千里指出：扶抑法为后世子平推命之最广泛通用大法。五行之中，以中和为贵。太强者不可任其骄横，须以官杀制之或食伤泄之；太衰者不可使其枯槁，须以印生之或比劫帮之。',
      vernacularEn: 'Wei Qianli designates Supporting and Restraining as the bedrock of modern practice: harmonious balance is supreme. Excessive vigor requires disciplined output or regulation; frailty demands protective nourishment and peer alliances.',
      modernInterpretationZh: '【现代实操准则】：体量大时做组织规约与交付输出（抑其过强）；体量小时做深耕蓄能与借势依托（扶其不足）。',
      modernInterpretationEn: '【Modern Operational Rule】: Scale-ups require strict governance and product shipping; early-stage ventures require institutional shelter and capital accumulation.'
    },
    {
      id: 'tiaohou',
      nameZh: '调候用神法',
      nameEn: 'Climate Regulation Protocol (Tiao Hou)',
      quoteZh: '天道有寒暖燥湿，人命应之。冬生喜火暄照以解其冻，夏生喜水润泽以涤其燥。得调候者，心智通达，富贵自来。',
      quoteEn: 'Nature cycles through freezing cold and scorching heat; human destiny resonates in kind. Winter charts rejoice in Fire sunlight; Summer charts welcome Water dew. Regulated charts unlock lucid intellect and effortless stature.',
      vernacularZh: '大自然气候的极端是制约万物生长的物理硬约束。即便格局生克停当，若生于严冬无火解冻或生于酷暑无水降温，全盘生机皆处冻结焦枯之中。调候为第一急务，得火水调停，才智方能开窍变现。',
      vernacularEn: 'Seasonal climate is the physical boundary condition. Without solar warmth in winter or hydration in summer, raw talent remains frozen or burned out. Climate regulation is the emergency first priority.',
      modernInterpretationZh: '【现代实操准则】：环境与心理的体感舒适度是生产力的放大器。在寒冬与困境中保持乐观心态与团队温暖；在高压暴躁环境中建立冷静防火墙。',
      modernInterpretationEn: '【Modern Operational Rule】: Environmental ergonomics and emotional psychological safety compound productivity. Radiate warmth in downturns; enforce cooling periods in hyper-growth.'
    },
    {
      id: 'tongguan',
      nameZh: '通关用神法',
      nameEn: 'Bridging & Circulation Protocol (Tong Guan)',
      quoteZh: '两气相战，势均力敌，必得通关之神引化生生。金木相持得水引化，水火相争得木通和。',
      quoteEn: 'When two mighty elemental forces collide with equal ferocity, a bridging deity must mediate to transmute conflict into continuous creation. Metal and Wood battling yield to Water; Water and Fire clashing harmonize via Wood.',
      vernacularZh: '命局中若有两股巨大力量彼此对立互不相让（如财官与比劫抗衡，或金木交战、水火相射），命主易陷入深重内耗撕裂。此时取能化敌为友的“中间引通之神”（通关神），便能将致命对抗转化为生生不息的闭环飞轮。',
      vernacularEn: 'When two dominant forces clash directly, the native suffers profound internal friction. Introducing the mediator element converts catastrophic civil war into an unbroken compounding flywheel.',
      modernInterpretationZh: '【现代实操准则】：在冲突与两难博弈中寻找第三选择（通商中介、产品形态转变、以研发创新化解市场恶性内卷）。',
      modernInterpretationEn: '【Modern Operational Rule】: Solve deadlock via a third-party architectural bridge: transforming commercial litigation into joint product integration.'
    },
    {
      id: 'bingyao',
      nameZh: '病药用神法',
      nameEn: 'Disease & Medicine Protocol (Bing Yao)',
      quoteZh: '原局有瑕疵阻碍，此之谓病；有神能克制化解其瑕疵，此之谓药。得药去病，格局立转清纯。',
      quoteEn: 'An acute structural defect in the natal matrix is the Disease; an element that neutralizes this defect is the Medicine. Curing the disease instantly clarifies the sovereign pattern.',
      vernacularZh: '命格不必全盘完美，有大缺陷方能激发出超越常人的极致爆发力。关键在于命中或岁运有无针对性的克制救应之神。见药去病者，往往能将曾经的原生创伤或行业危机转化为一生的王牌护城河。',
      vernacularEn: 'Perfection is rarely extraordinary. An acute bottleneck creates existential drive; securing the precise medicinal star transmutes trauma into an impregnable competitive moat.',
      modernInterpretationZh: '【现代实操准则】：把自身最痛的缺点和行业最大的痛点，做成自己最强的独家解决方案与商业卖点。',
      modernInterpretationEn: '【Modern Operational Rule】: Repackage your greatest personal bottleneck and industry friction into your sovereign proprietary product line.'
    },
    {
      id: 'zhuanwang',
      nameZh: '专旺用神法',
      nameEn: 'Specialized Dominance Protocol (Zhuan Wang)',
      quoteZh: '一气独旺，顺其气势。曲直、炎上、稼穑、从革、润下，顺之者昌，逆之者亡。',
      quoteEn: 'When a single element commands absolute dominance, follow its pure momentum. Wood, Fire, Earth, Metal, Water: prosper by yielding to its wave; court disaster by opposing it.',
      vernacularZh: '当命中某一五行势不可挡（如全盘木气旺极成曲直仁寿，或火旺成炎上），切不可强行克伐违逆其浩大声势。必须顺其气势，以食伤泄秀或比劫同行，顺水推舟方能成就一代巨擘。',
      vernacularEn: 'When a single element reaches torrential dominance, never oppose it. Ride its crest through output expression or peer expansion; flowing with the cosmic current creates visionary titans.',
      modernInterpretationZh: '【现代实操准则】：顺应时代超级贝塔（行业巨大红利与自身压倒性天赋）。切忌逆势强出头，以一己之力抗衡时代洪流。',
      modernInterpretationEn: '【Modern Operational Rule】: Yield completely to exponential macro beta and native superpower. Never swim against torrential historical currents.'
    }
  ],

  caseStudies: [
    {
      id: 'case_civil_official',
      titleZh: '民国名臣顾维钧造',
      titleEn: 'Republican Diplomat Wellington Koo Case',
      pillars: '戊子 乙丑 丁酉 戊申',
      pillarsEn: 'Wu-Zi, Yi-Chou, Ding-You, Wu-Shen',
      summaryZh: '丁火生于季冬，财伤太旺，日元娇弱。取月干乙木偏印为通关用神与生身主药，化杀生身，文采风流，官拜外交总长。',
      summaryEn: 'Ding Fire born in late winter, overwhelmed by Wealth and Output. Employed Yi Wood Indirect Resource to bridge circulation, becoming China’s preeminent sovereign diplomat.',
      insightZh: '《千里命稿》案断：“财多身弱得印通关，文贵炳然，名扬欧亚。”',
      insightEn: 'Wei Qianli verdict: "Frail self facing heavy Wealth finds salvation in Resource bridge, commanding worldwide diplomatic acclaim."'
    },
    {
      id: 'case_industrialist',
      titleZh: '近代纺织巨擘荣德生造',
      titleEn: 'Industrial Tycoon Rong Desheng Case',
      pillars: '乙亥 丁亥 丙子 己亥',
      pillarsEn: 'Yi-Hai, Ding-Hai, Bing-Zi, Ji-Hai',
      summaryZh: '丙火生于亥月，三逢亥水七杀森严，全仗年透乙木正印化杀生身，成杀印相生之大格。实业兴邦，面粉纺织冠绝华夏。',
      summaryEn: 'Bing Fire born in Hai month surrounded by torrential Seven Killings Water. Rescued by Yi Wood Direct Resource in Year Pillar to forge Killings-Resource greatness, building a textile empire.',
      insightZh: '《千里命稿》案断：“杀重赖印化，置实业于惊涛骇浪之中，屹然不动。”',
      insightEn: 'Wei Qianli verdict: "Ferocious Killings harnessed by benevolent Resource builds manufacturing empires that endure national storms."'
    }
  ]
};

class QianLiDB {
  static getAllProtocols() {
    return QIAN_LI_DATA.protocols;
  }

  static getCaseStudies() {
    return QIAN_LI_DATA.caseStudies;
  }

  /**
   * Evaluate which of the 5 Yong Shen protocols is primary for this chart
   */
  static evaluateNativeYongShen(bazi, vigor) {
    const isWinter = ['亥', '子', '丑'].includes(bazi?.pillars?.month?.branch);
    const isSummer = ['巳', '午', '未'].includes(bazi?.pillars?.month?.branch);
    const isExtreme = vigor && (vigor.isExtreme || vigor.category === '太旺' || vigor.category === '从强' || vigor.category === '从旺');
    const isFrail = vigor && (vigor.isWeak || vigor.category === '较弱' || vigor.category === '太弱' || vigor.category === '从弱');

    let pId = 'fuyi';
    let rationaleZh = '';
    let rationaleEn = '';

    if (isExtreme) {
      pId = 'zhuanwang';
      rationaleZh = '日主旺极势不可挡，符合《千里命稿》专旺用神法，宜顺其气势以食伤吐秀为上。';
      rationaleEn = 'Day Master holds overwhelming dominance, aligning with Wei Qianli’s Specialized Dominance rule: ride momentum via creative Output.';
    } else if (isWinter || isSummer) {
      pId = 'tiaohou';
      rationaleZh = '生于严寒严燥月令，符合《千里命稿》调候为急之训，首取火解冻或水降温润泽全盘生机。';
      rationaleEn = 'Born in extreme seasonal weather, aligning with Wei Qianli’s urgent Climate Regulation rule: deploy solar Fire or hydrating Water.';
    } else if (isFrail) {
      pId = 'fuyi';
      rationaleZh = '日元偏弱，以《千里命稿》扶抑正法为主，重取印星生扶与比劫同盟挑起财官大梁。';
      rationaleEn = 'Delicate Day Master adheres to orthodox Supporting and Restraining: leverage Resource mentorship and Peer alliances.';
    } else {
      pId = 'tongguan';
      rationaleZh = '盘中干支交错，取《千里命稿》通关引化法门，打通生克死结，化对抗为协同。';
      rationaleEn = 'Intricate inter-pillar dynamics favor Bridging & Circulation: neutralize deadlocks and turn rivals into partners.';
    }

    const proto = QIAN_LI_DATA.protocols.find(x => x.id === pId) || QIAN_LI_DATA.protocols[0];

    return {
      protocolId: pId,
      nameZh: proto.nameZh,
      nameEn: proto.nameEn,
      quoteZh: proto.quoteZh,
      quoteEn: proto.quoteEn,
      rationaleZh,
      rationaleEn,
      modernInterpretationZh: proto.modernInterpretationZh,
      modernInterpretationEn: proto.modernInterpretationEn
    };
  }

  static search(query) {
    if (!query) return [];
    const q = query.toLowerCase();
    const results = [];

    // Search protocols
    QIAN_LI_DATA.protocols.forEach(p => {
      if (
        (p.nameZh && p.nameZh.includes(query)) ||
        (p.nameEn && p.nameEn.toLowerCase().includes(q)) ||
        (p.quoteZh && p.quoteZh.includes(query)) ||
        (p.quoteEn && p.quoteEn.toLowerCase().includes(q)) ||
        (p.vernacularZh && p.vernacularZh.includes(query)) ||
        (p.vernacularEn && p.vernacularEn.toLowerCase().includes(q)) ||
        (p.modernInterpretationZh && p.modernInterpretationZh.includes(query)) ||
        (p.modernInterpretationEn && p.modernInterpretationEn.toLowerCase().includes(q))
      ) {
        results.push({
          source: '《千里命稿》',
          sourceEn: 'Qian Li Ming Gao',
          title: p.nameZh,
          titleEn: p.nameEn,
          content: p.quoteZh,
          contentEn: p.quoteEn,
          detail: p.vernacularZh,
          detailEn: p.vernacularEn
        });
      }
    });

    // Search cases
    QIAN_LI_DATA.caseStudies.forEach(c => {
      if (
        (c.titleZh && c.titleZh.includes(query)) ||
        (c.titleEn && c.titleEn.toLowerCase().includes(q)) ||
        (c.summaryZh && c.summaryZh.includes(query)) ||
        (c.summaryEn && c.summaryEn.toLowerCase().includes(q)) ||
        (c.insightZh && c.insightZh.includes(query)) ||
        (c.insightEn && c.insightEn.toLowerCase().includes(q))
      ) {
        results.push({
          source: '《千里命稿·断案范例》',
          sourceEn: 'Qian Li Ming Gao Case Law',
          title: c.titleZh,
          titleEn: c.titleEn,
          content: c.pillars,
          contentEn: c.pillarsEn || c.pillars,
          detail: c.summaryZh,
          detailEn: c.summaryEn
        });
      }
    });

    return results;
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { QianLiDB, QIAN_LI_DATA };
}
if (typeof window !== 'undefined') {
  window.QianLiDB = QianLiDB;
}
