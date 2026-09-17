/**
 * 现实决策 · 双轨对抗推演沙盘引擎 (Dual-Track 'What-If' Decision Simulator Engine)
 * Compares two realistic career, location, and strategic options against natal vigor,
 * geographic five elements, Ten Gods organizational dynamics, and 14-character temporal resonance.
 * 100% Offline-First, deterministic, and fully bilingual (zh/en).
 */

class ScenarioSimulatorEngine {
  /**
   * Helper: Lookup Institution in database
   */
  static findInstitution(key) {
    if (!key) return null;
    const db = (typeof INSTITUTIONS_DB !== 'undefined') ? INSTITUTIONS_DB : (typeof window !== 'undefined' ? window.INSTITUTIONS_DB : null);
    if (!db) return null;
    const lowerKey = key.toLowerCase().trim();
    for (const c in db) {
      const list = db[c];
      for (const inst of list) {
        if (inst.id.toLowerCase() === lowerKey ||
            inst.nameZh.toLowerCase() === lowerKey ||
            inst.nameEn.toLowerCase() === lowerKey ||
            lowerKey.includes(inst.id.toLowerCase()) ||
            lowerKey.includes(inst.nameZh.toLowerCase()) ||
            inst.nameZh.includes(key) ||
            inst.nameEn.toLowerCase().includes(lowerKey)) {
          return inst;
        }
      }
    }
    return null;
  }

  /**
   * Helper: Lookup Enterprise in database
   */
  static findEnterprise(key) {
    if (!key) return null;
    const db = (typeof ENTERPRISES_DB !== 'undefined') ? ENTERPRISES_DB : (typeof window !== 'undefined' ? window.ENTERPRISES_DB : null);
    if (!db) return null;
    const lowerKey = key.toLowerCase().trim();
    for (const c in db) {
      const list = db[c];
      for (const ent of list) {
        if (ent.id.toLowerCase() === lowerKey ||
            ent.nameZh.toLowerCase() === lowerKey ||
            ent.nameEn.toLowerCase() === lowerKey ||
            lowerKey.includes(ent.id.toLowerCase()) ||
            lowerKey.includes(ent.nameZh.toLowerCase()) ||
            ent.nameZh.includes(key) ||
            ent.nameEn.toLowerCase().includes(lowerKey)) {
          return ent;
        }
      }
    }
    return null;
  }

  /**
   * Helper: Evaluate City-Industry Micro-Ecosystem
   */
  static getMicroEcosystemAnalysis(country, city, industry, isEn) {
    const c = (country || '').toUpperCase();
    const ct = (city || '').toLowerCase();
    const ind = industry || '';

    // Finance
    if (ind === 'finance_quant') {
      if (ct.includes('shenzhen') || ct.includes('深圳')) {
        return isEn
          ? {
              tag: 'Shenzhen Quantitative Micro-Ecosystem: High-Frequency Alpha & Horse-Racing Dynamics',
              desc: 'Shenzhen finance is propelled by Southern Fire and dynamic capital velocity. The environment emphasizes high-frequency quantitative execution, rapid model iteration, and meritocratic horse-racing culture (Seven Killings & Indirect Wealth driven). Suited for vigorous minds who thrive in aggressive performance-driven environments.'
            }
          : {
              tag: '深圳金融微生态：高频量化与赛马制穿透',
              desc: '深圳金融坐落于南方丙丁火地，充盈着敏捷高效与高流动性。生态极度推崇高频量化模型、敏捷迭代与高强度的业绩赛马机制（七杀偏财场能极盛）。适合精力充沛、能在结果导向高压下迅速变现之人。'
            };
      }
      if (ct.includes('london') || ct.includes('伦敦')) {
        return isEn
          ? {
              tag: 'London Financial Hub: Global Macro Strategy & Common Law Governance',
              desc: 'The City of London and Mayfair represent centuries of financial stewardship governed by English Common Law. The ecosystem prioritizes global macro allocation, strict institutional risk management, cross-border multi-currency hedging, and fiduciary compliance (Direct Officer & Direct Resource driven).'
            }
          : {
              tag: '伦敦金融微生态：全球宏观对冲与普通法制度合规',
              desc: '伦敦金融城与梅费尔依托数百年金融底蕴与英美普通法程序正义，生态重在“全球宏观大类资产配置、严格风险限额与长线信义合规”（正官正印场能深厚）。适合注重合规护城河与稳健深耕者。'
            };
      }
      if (ct.includes('new york') || ct.includes('纽约') || ct.includes('wall street')) {
        return isEn
          ? {
              tag: 'New York Wall Street: Elite Investment Banking & High-Stakes Capital',
              desc: 'Wall Street embodies high-stakes financial warfare, intensive dealmaking, and fierce meritocracy driven by Direct Wealth and Seven Killings.'
            }
          : {
              tag: '纽约华尔街微生态：投行并购与精英资本交锋',
              desc: '华尔街集聚全球最高密度投行与私募巨头，兼具偏财之锐气与七杀之威权，强调高强度高回报的精英博弈与全天候商业变现。'
            };
      }
      if (ct.includes('toronto') || ct.includes('多伦多') || ct.includes('bay street')) {
        return isEn
          ? {
              tag: 'Toronto Bay Street: Institutional Pension Management & Tier-1 Stability',
              desc: 'Bay Street is anchored by Canada\'s Big Five banks and world-class public pension funds (CPPIB, OTPP), embodying Direct Resource and Direct Officer institutional prudence.'
            }
          : {
              tag: '多伦多湾街微生态：大型养老金管治与一级银行稳健盘',
              desc: '多伦多湾街由加拿大五大行与全球顶级养老金（CPPIB/OTPP）为主导，秉持正印正官稳健之风，注重资产安全性与长线年化稳健收益。'
            };
      }
    }

    // Tech / AI
    if (ind === 'tech_ai') {
      if (ct.includes('london') || ct.includes('伦敦')) {
        return isEn
          ? {
              tag: 'London AI Hub: Foundational Mathematical Rigor & Academic Synergy',
              desc: 'London is the global nexus for fundamental AI research (epitomized by DeepMind). The micro-ecosystem blends world-class collegiate mathematics with patient foundational discovery (Water and Wood synergy).'
            }
          : {
              tag: '伦敦AI微生态：底层数学底蕴与产学研厚度',
              desc: '伦敦以 Google DeepMind 等世界顶级实验室为核心，依托剑桥牛津帝国理工数理底蕴，极重底层算法创新与基础理论突破，兼具水木生发之气。'
            };
      }
      if (ct.includes('shenzhen') || ct.includes('深圳')) {
        return isEn
          ? {
              tag: 'Shenzhen AI Hub: Massive Commercialization & Rapid Scale',
              desc: 'Shenzhen AI thrives on immediate commercial integration, hardware-software synergy, and massive user scale driven by Southern Fire dynamism.'
            }
          : {
              tag: '深圳AI微生态：软硬一体落地与极速商业化闭环',
              desc: '深圳AI生态依托珠三角智能硬件供应链与腾讯/华为等科技巨擘，强调AI算法在产业、消费端与智能制造中的极速商业落地。'
            };
      }
      if (ct.includes('san francisco') || ct.includes('silicon valley') || ct.includes('旧金山') || ct.includes('硅谷')) {
        return isEn
          ? {
              tag: 'Silicon Valley: Frontier Generative AI & Disruptive Venture Capital',
              desc: 'The Bay Area is the world engine of disruptive AI innovation, frontier models, and abundant venture capital funding.'
            }
          : {
              tag: '硅谷/旧金山微生态：前沿生成式AI与颠覆性风险投资',
              desc: '以OpenAI、Anthropic等先锋为代表，聚集全球最密集的风险资本与前沿大模型算力，崇尚颠覆式创新。'
            };
      }
    }

    // Academia
    if (ind === 'academia_research') {
      if (ct.includes('birmingham') || ct.includes('伯明翰')) {
        return isEn
          ? {
              tag: 'Birmingham Academic Micro-Ecosystem: Central Earth Stability & Materials Science',
              desc: 'Birmingham embodies Central Earth grounded stability, excelling in clinical medicine, advanced metallurgy, and steady faculty governance.'
            }
          : {
              tag: '伯明翰学术微生态：中央戊己土稳健治学与应用转化',
              desc: '伯明翰坐落于英国地理中枢中央戊己土位，在先进材料、医疗健康与重工业技术研发上底蕴深厚，教职晋升体制稳固。'
            };
      }
      if (ct.includes('oxford') || ct.includes('cambridge') || ct.includes('牛津') || ct.includes('剑桥')) {
        return isEn
          ? {
              tag: 'Oxbridge Academic Micro-Ecosystem: Collegiate Independence & Supreme Heritage',
              desc: 'Collegiate autonomy, global academic primacy, and centuries of scholarly sovereignty provide unmatched prestige and intellectual freedom.'
            }
          : {
              tag: '牛剑学术微生态：学院制古老学统与学者最高殿堂',
              desc: '牛津剑桥八百年学统与学院制独立自治，赋予学者至高无上的印星声望与独立学术治学空间。'
            };
      }
      if (ct.includes('beijing') || ct.includes('北京')) {
        return isEn
          ? {
              tag: 'Beijing Academic Micro-Ecosystem: National Laboratories & Strategic Prestige',
              desc: 'Tsinghua and Peking University represent the pinnacle of national research initiatives, policy advisory power, and top-tier scientific funding.'
            }
          : {
              tag: '北京高校学术微生态：国家战略级实验室与顶层智库威权',
              desc: '清北领衔的高校集群承载国家核心攻关战略，聚集全国最充沛的科研基金与学者威权，正官正印声望极大。'
            };
      }
    }

    return null;
  }

  /**
   * Geographic five-element lookup helper
   */
  static getCityElement(country, cityKey) {
    const c = (country || 'UK').toUpperCase();
    const city = (cityKey || '').toLowerCase();

    // UK
    if (c === 'UK' || c === 'UNITED KINGDOM' || c === '英国') {
      if (city.includes('birmingham') || city.includes('coventry') || city.includes('伯明翰')) return { elem: 'Earth', nameZh: '中央戊己土', nameEn: 'Central Earth' };
      if (city.includes('london') || city.includes('bristol') || city.includes('southampton') || city.includes('伦敦')) return { elem: 'Fire', nameZh: '南方丙丁火', nameEn: 'Southern Fire' };
      if (city.includes('manchester') || city.includes('edinburgh') || city.includes('glasgow') || city.includes('leeds') || city.includes('曼彻斯特')) return { elem: 'Water', nameZh: '北方壬癸水', nameEn: 'Northern Water' };
      if (city.includes('cambridge') || city.includes('norwich') || city.includes('剑桥')) return { elem: 'Wood', nameZh: '东方甲乙木', nameEn: 'Eastern Wood' };
      if (city.includes('liverpool') || city.includes('cardiff') || city.includes('belfast') || city.includes('利物浦')) return { elem: 'Metal', nameZh: '西方庚辛金', nameEn: 'Western Metal' };
      return { elem: 'Earth', nameZh: '中央戊己土', nameEn: 'Central Earth' };
    }

    // CHINA
    if (c === 'CHINA' || c === '中国') {
      if (city.includes('beijing') || city.includes('tianjin') || city.includes('shenyang') || city.includes('harbin') || city.includes('北京')) return { elem: 'Water', nameZh: '北方壬癸水', nameEn: 'Northern Water' };
      if (city.includes('guangzhou') || city.includes('shenzhen') || city.includes('hongkong') || city.includes('haikou') || city.includes('广州') || city.includes('深圳')) return { elem: 'Fire', nameZh: '南方丙丁火', nameEn: 'Southern Fire' };
      if (city.includes('shanghai') || city.includes('hangzhou') || city.includes('nanjing') || city.includes('suzhou') || city.includes('上海') || city.includes('杭州')) return { elem: 'Wood', nameZh: '东方甲乙木', nameEn: 'Eastern Wood' };
      if (city.includes('chengdu') || city.includes('chongqing') || city.includes('xian') || city.includes('成都') || city.includes('重庆') || city.includes('西安')) return { elem: 'Metal', nameZh: '西方庚辛金', nameEn: 'Western Metal' };
      return { elem: 'Earth', nameZh: '中央戊己土', nameEn: 'Central Earth' };
    }

    // USA
    if (c === 'USA' || c === 'US' || c === '美国') {
      if (city.includes('new york') || city.includes('boston') || city.includes('washington') || city.includes('philadelphia') || city.includes('纽约') || city.includes('波士顿')) return { elem: 'Wood', nameZh: '东方甲乙木', nameEn: 'Eastern Wood' };
      if (city.includes('miami') || city.includes('houston') || city.includes('atlanta') || city.includes('迈阿密') || city.includes('休斯顿')) return { elem: 'Fire', nameZh: '南方丙丁火', nameEn: 'Southern Fire' };
      if (city.includes('los angeles') || city.includes('san francisco') || city.includes('seattle') || city.includes('旧金山') || city.includes('洛杉矶')) return { elem: 'Metal', nameZh: '西方庚辛金', nameEn: 'Western Metal' };
      if (city.includes('minneapolis') || city.includes('detroit') || city.includes('chicago north') || city.includes('芝加哥北')) return { elem: 'Water', nameZh: '北方壬癸水', nameEn: 'Northern Water' };
      return { elem: 'Earth', nameZh: '中央戊己土', nameEn: 'Central Earth' };
    }

    // CANADA
    if (c === 'CANADA' || c === '加拿大') {
      if (city.includes('toronto') || city.includes('ottawa') || city.includes('montreal') || city.includes('多伦多') || city.includes('渥太华')) return { elem: 'Fire', nameZh: '南方丙丁火', nameEn: 'Southern Fire' };
      if (city.includes('vancouver') || city.includes('calgary') || city.includes('victoria') || city.includes('温哥华') || city.includes('卡尔加里')) return { elem: 'Metal', nameZh: '西方庚辛金', nameEn: 'Western Metal' };
      if (city.includes('winnipeg') || city.includes('regina') || city.includes('温尼伯')) return { elem: 'Earth', nameZh: '中央戊己土', nameEn: 'Central Earth' };
      if (city.includes('edmonton') || city.includes('yellowknife') || city.includes('埃德蒙顿')) return { elem: 'Water', nameZh: '北方壬癸水', nameEn: 'Northern Water' };
      return { elem: 'Wood', nameZh: '东方甲乙木', nameEn: 'Eastern Wood' };
    }

    return { elem: 'Earth', nameZh: '中和戊己土', nameEn: 'Balanced Earth' };
  }

  /**
   * Industry five-element mapping
   */
  static getIndustryElements(indKey) {
    const map = {
      'tech_ai': { primary: 'Fire', secondary: 'Wood', nameZh: 'AI人工智能与前沿科技 (火/木)', nameEn: 'AI & Frontier Technology (Fire/Wood)' },
      'finance_quant': { primary: 'Metal', secondary: 'Water', nameZh: '金融量化与对冲投资 (金/水)', nameEn: 'Quant Finance & Investments (Metal/Water)' },
      'academia_research': { primary: 'Water', secondary: 'Wood', nameZh: '高校学术与科研治学 (水/木)', nameEn: 'Academia & Pure Scientific Research (Water/Wood)' },
      'civil_admin': { primary: 'Earth', secondary: 'Fire', nameZh: '体制机关与合规行政 (土/火)', nameEn: 'Public Institutions & Compliance Administration (Earth/Fire)' },
      'manufacturing': { primary: 'Earth', secondary: 'Metal', nameZh: '实体智能制造与工程硬件 (土/金)', nameEn: 'Smart Manufacturing & Hardware Engineering (Earth/Metal)' },
      'creative_media': { primary: 'Wood', secondary: 'Fire', nameZh: '文化出海与数字内容创意 (木/火)', nameEn: 'Cultural Content & Creative Media (Wood/Fire)' }
    };
    return map[indKey] || map['tech_ai'];
  }

  /**
   * Manager leadership dynamic mapping
   */
  static getManagerDynamic(mgrKey) {
    const map = {
      'killings': { god: 'SevenKillings', nameZh: '严苛结果导向 · 七杀统帅型', nameEn: 'Strict Results-Driven (Seven Killings)', pressure: 30, breakthrough: 25 },
      'resource': { god: 'DirectResource', nameZh: '温和放权护持 · 正印庇佑型', nameEn: 'Nurturing & Empowering (Direct Resource)', pressure: -15, breakthrough: 10 },
      'rob_wealth': { god: 'RobWealth', nameZh: '同侪高压赛马 · 比劫竞逐型', nameEn: 'High-Stakes Peer Rivalry (Rob Wealth)', pressure: 35, breakthrough: 15 },
      'wealth': { god: 'DirectWealth', nameZh: '唯商业效益考量 · 财星驱动型', nameEn: 'Commercial & Incentive Driven (Wealth)', pressure: 20, breakthrough: 20 },
      'officer': { god: 'DirectOfficer', nameZh: '严明体制合规 · 正官秩序型', nameEn: 'Structured & Compliance-Bound (Officer)', pressure: 15, breakthrough: 12 }
    };
    return map[mgrKey] || map['resource'];
  }

  /**
   * Simulate a single option against native chart
   */
  static evaluateSingleOption(opt, bazi, isEn = false) {
    const dm = bazi.dayMaster || '甲';
    const dmElem = bazi.pillars?.day?.stemElement || 'Wood';
    const vigorScore = bazi.vigorScore || 50;
    const isWeak = (vigorScore < 50);

    const cityMeta = this.getCityElement(opt.country, opt.city);
    const indMeta = this.getIndustryElements(opt.industry);
    const mgrMeta = this.getManagerDynamic(opt.manager);

    // Look up Institution and Enterprise
    const matchedInst = this.findInstitution(opt.institution || opt.institutionId || opt.title);
    const matchedEnt = this.findEnterprise(opt.enterprise || opt.enterpriseId || opt.title);
    const microEcosystem = this.getMicroEcosystemAnalysis(opt.country, opt.city, opt.industry, isEn);

    // Calculate Elemental Affinity (用神共振)
    let favorableElems = [];
    let unfavorableElems = [];

    const elemCycle = {
      'Wood': { generates: 'Fire', generatedBy: 'Water', controls: 'Earth', controlledBy: 'Metal' },
      'Fire': { generates: 'Earth', generatedBy: 'Wood', controls: 'Metal', controlledBy: 'Water' },
      'Earth': { generates: 'Metal', generatedBy: 'Fire', controls: 'Water', controlledBy: 'Wood' },
      'Metal': { generates: 'Water', generatedBy: 'Earth', controls: 'Wood', controlledBy: 'Fire' },
      'Water': { generates: 'Wood', generatedBy: 'Metal', controls: 'Fire', controlledBy: 'Earth' }
    };

    const cycle = elemCycle[dmElem] || elemCycle['Wood'];

    if (isWeak) {
      favorableElems = [cycle.generatedBy, dmElem]; // Resource + Companion
      unfavorableElems = [cycle.controlledBy, cycle.controls, cycle.generates]; // Officer, Wealth, Output
    } else {
      favorableElems = [cycle.generates, cycle.controls, cycle.controlledBy]; // Output, Wealth, Officer
      unfavorableElems = [cycle.generatedBy, dmElem]; // Resource + Companion
    }

    let affinityBase = 55;
    if (favorableElems.includes(cityMeta.elem)) affinityBase += 15;
    if (unfavorableElems.includes(cityMeta.elem)) affinityBase -= 12;

    if (favorableElems.includes(indMeta.primary)) affinityBase += 18;
    else if (unfavorableElems.includes(indMeta.primary)) affinityBase -= 10;

    if (favorableElems.includes(indMeta.secondary)) affinityBase += 8;

    // Institution affinity bonus
    if (matchedInst) {
      if (favorableElems.includes(matchedInst.elementalFocus.primary)) affinityBase += 8;
      if (matchedInst.qsRank <= 10) affinityBase += 6;
      else if (matchedInst.qsRank <= 50) affinityBase += 4;
    }

    // Enterprise elemental field match
    if (matchedEnt) {
      if (favorableElems.includes(matchedEnt.elementalField.primary)) affinityBase += 7;
      if (favorableElems.includes(matchedEnt.elementalField.secondary)) affinityBase += 4;
    }

    const affinityRate = Math.min(96, Math.max(25, affinityBase));

    // Calculate Friction / Mental Drain Rate (心智能量损耗率)
    let frictionBase = 40;
    frictionBase += mgrMeta.pressure;

    if (isWeak && (opt.manager === 'killings' || opt.manager === 'rob_wealth')) {
      frictionBase += 20;
    }
    if (isWeak && unfavorableElems.includes(cityMeta.elem)) {
      frictionBase += 12;
    }
    if (!isWeak && opt.manager === 'resource') {
      frictionBase += 10;
    }
    if (opt.role === 'martial' && isWeak) frictionBase += 15;
    if (opt.role === 'specialist' && isWeak) frictionBase -= 10;

    // Enterprise culture impact on friction
    if (matchedEnt) {
      if (isWeak && (matchedEnt.corporateCultureZh.includes('七杀') || matchedEnt.corporateCultureZh.includes('赛马') || matchedEnt.corporateCultureZh.includes('高压'))) {
        frictionBase += 10;
      } else if (isWeak && (matchedEnt.corporateCultureZh.includes('正印') || matchedEnt.corporateCultureZh.includes('放权') || matchedEnt.corporateCultureZh.includes('护持'))) {
        frictionBase -= 8;
      }
    }

    const frictionRate = Math.min(95, Math.max(15, frictionBase));

    // Calculate 3-Year Potential Rate (三年爆发潜力)
    let potentialBase = 50 + mgrMeta.breakthrough;
    if (favorableElems.includes(indMeta.primary)) potentialBase += 15;
    if (favorableElems.includes(cityMeta.elem)) potentialBase += 10;
    if (frictionRate > 75) potentialBase -= 15;

    // Institution halo boost to potential
    if (matchedInst) {
      if (matchedInst.qsRank <= 20) potentialBase += 12;
      else if (matchedInst.qsRank <= 100) potentialBase += 8;
    }

    // Enterprise Fortune 500 standing boost
    if (matchedEnt) {
      potentialBase += 10;
    }

    const potentialRate = Math.min(95, Math.max(25, potentialBase));

    // Composite Final Score (0 - 100)
    const rawScore = (affinityRate * 0.40) + (potentialRate * 0.40) + ((100 - frictionRate) * 0.20);
    const finalScore = Math.round(Math.min(98, Math.max(30, rawScore)));

    // Verdict Tag & Strategic Notes
    let verdictTagZh = '';
    let verdictTagEn = '';
    if (finalScore >= 85) {
      verdictTagZh = '🏆 强烈推荐 · 天命共振主场';
      verdictTagEn = '🏆 Highly Recommended · Prime Resonance';
    } else if (finalScore >= 72) {
      verdictTagZh = '⚖️ 稳健备选 · 需设心理防火墙';
      verdictTagEn = '⚖️ Viable Alternative · Guard Boundaries';
    } else {
      verdictTagZh = '⚠️ 慎选赛道 · 易现能量过载透支';
      verdictTagEn = '⚠️ Caution · High Energy Drain Risk';
    }

    const notesZh = [
      `【地缘与赛道五行】：目标城市坐落于【${cityMeta.nameZh}】，行业依托【${indMeta.nameZh}】。此组合${favorableElems.includes(cityMeta.elem) ? '深度契合本命喜用神，地缘磁场自带赋能加速效应。' : '对日主形成克泄之势，需主动通过空间风水与作息进行补益平衡。'}`,
      `【人际与领导力博弈】：直属上司呈现【${mgrMeta.nameZh}】风格。${isWeak ? '身弱之造需严防过度情绪消耗，务必依《荣枯鉴》建立“公事公办、延时拒绝”的人际心理隔离带。' : '身旺之造正宜借助严苛标准打磨心性，以攻坚硬仗奠定不可替代之核心威权。'}`,
      `【生态位心流承载】：岗位定位于【${opt.roleTitle || (opt.role === 'specialist' ? '单一任务技术专家' : opt.role === 'executive' ? '全局操盘统帅' : opt.role === 'martial' ? '一线业务武职开拓' : '文职行政综合事务')}】。${opt.role === 'specialist' ? '深研技术细节可构筑最高防御护城河，心流闭环最稳。' : '务必注重团队协同与向上对齐，防范孤军深入。'}`
    ];

    const notesEn = [
      `[Geographic & Industry Vector]: Location resides in [${cityMeta.nameEn}], operating within [${indMeta.nameEn}]. This vector ${favorableElems.includes(cityMeta.elem) ? 'strongly harmonizes with your favorable elements, acting as an environmental accelerator.' : 'exerts friction against your Day Master, requiring deliberate boundary management and restorative habits.'}`,
      `[Leadership Dynamics]: Supervisor reflects [${mgrMeta.nameEn}]. ${isWeak ? 'A sensitive Day Master must guard mental bandwidth vigilantly—apply the 24-hour delayed response protocol to neutralize emotional friction.' : 'A vigorous Day Master thrives here by translating demanding standards into undeniable organizational leverage.'}`,
      `[Archetype Alignment]: Positioned as [${opt.roleTitleEn || (opt.role === 'specialist' ? 'Specialist / Deep Craft' : opt.role === 'executive' ? 'Executive Leadership' : opt.role === 'martial' ? 'Frontline Operations' : 'Civil / Operations')}]. ${opt.role === 'specialist' ? 'Deep single-task immersion establishes the most resilient psychological moat.' : 'Prioritize strategic alignment and transparent reporting to prevent overextension.'}`
    ];

    // Micro-ecosystem note injection
    if (microEcosystem) {
      notesZh.push(`【${microEcosystem.tag}】：${microEcosystem.desc}`);
      notesEn.push(`[${microEcosystem.tag}]: ${microEcosystem.desc}`);
    }

    // Institution details injection
    if (matchedInst) {
      const top5Zh = matchedInst.top5SubjectsZh.join('、');
      const top5En = matchedInst.top5SubjectsEn.join(', ');
      notesZh.push(`【学术名校光环与前五强王牌学科】：${matchedInst.nameZh}（QS全球第${matchedInst.qsRank} / THE第${matchedInst.theRank} · ${matchedInst.tierBadge}）。前五强王牌学科：${top5Zh}。${matchedInst.academicAdvantageZh}`);
      notesEn.push(`[Academic Prestige & Top 5 Standout Disciplines]: ${matchedInst.nameEn} (QS Rank #${matchedInst.qsRank} / THE #${matchedInst.theRank} · ${matchedInst.tierBadgeEn}). Standout Disciplines: ${top5En}. ${matchedInst.academicAdvantageEn}`);
    }

    // Enterprise details injection
    if (matchedEnt) {
      const rolesZh = matchedEnt.typicalRoles.map(r => r.titleZh).slice(0, 3).join('、');
      const rolesEn = matchedEnt.typicalRoles.map(r => r.titleEn).slice(0, 3).join(', ');
      notesZh.push(`【世界五百强名企文化与生态位】：${matchedEnt.nameZh}（${matchedEnt.fortune500Rank}）。企业十神文化：${matchedEnt.corporateCultureZh}。代表岗位梯队：${rolesZh}等。`);
      notesEn.push(`[Fortune Global 500 Culture & Positions]: ${matchedEnt.nameEn} (${matchedEnt.fortune500RankEn}). Corporate Ten Gods Culture: ${matchedEnt.corporateCultureEn}. Representative Positions: ${rolesEn}.`);
    }

    let optionTitle = opt.title;
    if (!optionTitle || (isEn && /[\u4e00-\u9fa5]/.test(optionTitle))) {
      optionTitle = isEn ? `${cityMeta.nameEn} · ${indMeta.nameEn}` : `${cityMeta.nameZh} · ${indMeta.nameZh}`;
    }

    return {
      title: optionTitle,
      country: opt.country,
      city: opt.city,
      cityName: isEn ? cityMeta.nameEn : cityMeta.nameZh,
      industry: opt.industry,
      industryName: isEn ? indMeta.nameEn : indMeta.nameZh,
      role: opt.role,
      roleTitle: isEn ? (opt.roleTitleEn || opt.role) : (opt.roleTitle || opt.role),
      manager: opt.manager,
      managerName: isEn ? mgrMeta.nameEn : mgrMeta.nameZh,
      institution: matchedInst ? (isEn ? matchedInst.nameEn : matchedInst.nameZh) : null,
      enterprise: matchedEnt ? (isEn ? matchedEnt.nameEn : matchedEnt.nameZh) : null,
      score: finalScore,
      affinityRate: Math.round(affinityRate),
      frictionRate: Math.round(frictionRate),
      potentialRate: Math.round(potentialRate),
      verdictTag: isEn ? verdictTagEn : verdictTagZh,
      notes: isEn ? notesEn : notesZh
    };
  }

  /**
   * Dual-Track Simulation Main Runner
   */
  static simulateOptions(optionA, optionB, bazi, luck = null, lang = 'zh') {
    const isEn = (lang === 'en');
    const safeBazi = bazi || { dayMaster: '甲', pillars: { day: { stemElement: 'Wood' } }, vigorScore: 50 };

    const resA = this.evaluateSingleOption(optionA, safeBazi, isEn);
    const resB = this.evaluateSingleOption(optionB, safeBazi, isEn);

    let winner = 'tie';
    let delta = Math.abs(resA.score - resB.score);
    if (resA.score > resB.score) winner = 'A';
    else if (resB.score > resA.score) winner = 'B';

    let summaryZh = '';
    let summaryEn = '';

    if (winner === 'A') {
      summaryZh = `【推演结论】：双轨综合权衡下，【${resA.title}】以 ${resA.score} 分大幅优于【${resB.title}】（${resB.score} 分，胜出 ${delta} 分）。方案 A 在用神气数契合度（${resA.affinityRate}% vs ${resB.affinityRate}%）与心智能耗控制上优势显著，能够以更小的心理摩擦兑现长期价值。`;
      summaryEn = `[Strategic Verdict]: In this dual-track simulation, [${resA.title}] (Score: ${resA.score}) clearly outperforms [${resB.title}] (Score: ${resB.score}) by a margin of +${delta} points. Option A delivers superior elemental resonance (${resA.affinityRate}% vs ${resB.affinityRate}%) and significantly reduced cognitive friction.`;
    } else if (winner === 'B') {
      summaryZh = `【推演结论】：双轨综合权衡下，【${resB.title}】以 ${resB.score} 分大幅优于【${resA.title}】（${resA.score} 分，胜出 ${delta} 分）。方案 B 在三年爆发潜力（${resB.potentialRate}%）与气数承载上更契合命局发展主轴，建议重点布局推进。`;
      summaryEn = `[Strategic Verdict]: In this dual-track simulation, [${resB.title}] (Score: ${resB.score}) decisively surpasses [${resA.title}] (Score: ${resA.score}) by +${delta} points. Option B commands superior multi-year momentum (${resB.potentialRate}%) and aligns closer with your dominant strategic trajectory.`;
    } else {
      summaryZh = `【推演结论】：两套方案综合分值旗鼓相当（均为 ${resA.score} 分）。建议结合当期十年大运的干支偏好做微观对冲：若重在积蓄本领选低能耗方，若重在破局进阶选高潜力方。`;
      summaryEn = `[Strategic Verdict]: Both pathways hold balanced parity (Score: ${resA.score}). Choose the lower-friction option for foundational consolidation, or the higher-potential option for ambitious breakthroughs.`;
    }

    return {
      optionA: resA,
      optionB: resB,
      winner: winner,
      delta: delta,
      summary: isEn ? summaryEn : summaryZh
    };
  }
}

if (typeof window !== 'undefined') {
  window.ScenarioSimulatorEngine = ScenarioSimulatorEngine;
}
if (typeof globalThis !== 'undefined') {
  globalThis.ScenarioSimulatorEngine = ScenarioSimulatorEngine;
}
