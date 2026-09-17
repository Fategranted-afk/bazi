/**
 * 现实决策 · 双轨对抗推演沙盘引擎 (Dual-Track 'What-If' Decision Simulator Engine)
 * Compares two realistic career, location, and strategic options against natal vigor,
 * geographic five elements, Ten Gods organizational dynamics, and 14-character temporal resonance.
 * 100% Offline-First, deterministic, and fully bilingual (zh/en).
 */

class ScenarioSimulatorEngine {
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

    // Calculate Elemental Affinity (用神共振)
    // Weak Day Master favors Resource (generating DM) and Companion (same as DM).
    // Strong Day Master favors Output, Wealth, Officer (draining/controlling DM).
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

    // Cap affinity 20 ~ 96
    const affinityRate = Math.min(96, Math.max(25, affinityBase));

    // Calculate Friction / Mental Drain Rate (心智能量损耗率)
    let frictionBase = 40;
    frictionBase += mgrMeta.pressure;

    // Weak DM in high pressure or competitive environment experiences severe drain
    if (isWeak && (opt.manager === 'killings' || opt.manager === 'rob_wealth')) {
      frictionBase += 20;
    }
    // Weak DM in unfavorable city or industry
    if (isWeak && unfavorableElems.includes(cityMeta.elem)) {
      frictionBase += 12;
    }
    // Strong DM in too comfortable/inert resource environment stagnates
    if (!isWeak && opt.manager === 'resource') {
      frictionBase += 10;
    }
    // Role mismatch
    if (opt.role === 'martial' && isWeak) frictionBase += 15;
    if (opt.role === 'specialist' && isWeak) frictionBase -= 10; // Specialists protect weak DMs!

    const frictionRate = Math.min(95, Math.max(15, frictionBase));

    // Calculate 3-Year Potential Rate (三年爆发潜力)
    let potentialBase = 50 + mgrMeta.breakthrough;
    if (favorableElems.includes(indMeta.primary)) potentialBase += 15;
    if (favorableElems.includes(cityMeta.elem)) potentialBase += 10;
    if (frictionRate > 75) potentialBase -= 15; // Excessive burn limits realization

    const potentialRate = Math.min(95, Math.max(25, potentialBase));

    // Composite Final Score (0 - 100)
    // Score = Affinity (40%) + Potential (40%) + (100 - Friction) (20%)
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
      `【生态位心流承载】：岗位定位于【${opt.role === 'specialist' ? '单一任务技术专家' : opt.role === 'executive' ? '全局操盘统帅' : opt.role === 'martial' ? '一线业务武职开拓' : '文职行政综合事务'}】。${opt.role === 'specialist' ? '深研技术细节可构筑最高防御护城河，心流闭环最稳。' : '务必注重团队协同与向上对齐，防范孤军深入。'}`
    ];

    const notesEn = [
      `[Geographic & Industry Vector]: Location resides in [${cityMeta.nameEn}], operating within [${indMeta.nameEn}]. This vector ${favorableElems.includes(cityMeta.elem) ? 'strongly harmonizes with your favorable elements, acting as an environmental accelerator.' : 'exerts friction against your Day Master, requiring deliberate boundary management and restorative habits.'}`,
      `[Leadership Dynamics]: Supervisor reflects [${mgrMeta.nameEn}]. ${isWeak ? 'A sensitive Day Master must guard mental bandwidth vigilantly—apply the 24-hour delayed response protocol to neutralize emotional friction.' : 'A vigorous Day Master thrives here by translating demanding standards into undeniable organizational leverage.'}`,
      `[Archetype Alignment]: Positioned as [${opt.role === 'specialist' ? 'Specialist / Deep Craft' : opt.role === 'executive' ? 'Executive Leadership' : opt.role === 'martial' ? 'Frontline Operations' : 'Civil / Operations'}]. ${opt.role === 'specialist' ? 'Deep single-task immersion establishes the most resilient psychological moat.' : 'Prioritize strategic alignment and transparent reporting to prevent overextension.'}`
    ];

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
      manager: opt.manager,
      managerName: isEn ? mgrMeta.nameEn : mgrMeta.nameZh,
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
