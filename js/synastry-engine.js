/**
 * Synastry & Partner Compatibility Metaphysics Engine
 * Dual-Mode: Romantic Marriage (婚恋合婚) & Business Co-founders (商业合伙与博弈)
 * 100% Bilingual Parity (Chinese / English) with Zero Residual Chinese in EN mode
 */

const SynastryEngine = (function() {
  // Heavenly Stem Combinations (天干五合)
  const STEM_COMBINATIONS = {
    '甲己': { elementZh: '土', elementEn: 'Earth', nameZh: '中正之合', nameEn: 'Combination of Integrity & Grounding' },
    '己甲': { elementZh: '土', elementEn: 'Earth', nameZh: '中正之合', nameEn: 'Combination of Integrity & Grounding' },
    '乙庚': { elementZh: '金', elementEn: 'Metal', nameZh: '仁义之合', nameEn: 'Combination of Righteousness & Loyalty' },
    '庚乙': { elementZh: '金', elementEn: 'Metal', nameZh: '仁义之合', nameEn: 'Combination of Righteousness & Loyalty' },
    '丙辛': { elementZh: '水', elementEn: 'Water', nameZh: '威制之合', nameEn: 'Combination of Authority & Charm' },
    '辛丙': { elementZh: '水', elementEn: 'Water', nameZh: '威制之合', nameEn: 'Combination of Authority & Charm' },
    '丁壬': { elementZh: '木', elementEn: 'Wood', nameZh: '仁寿之合', nameEn: 'Combination of Vitality & Benevolence' },
    '壬丁': { elementZh: '木', elementEn: 'Wood', nameZh: '仁寿之合', nameEn: 'Combination of Vitality & Benevolence' },
    '戊癸': { elementZh: '火', elementEn: 'Fire', nameZh: '多礼之合', nameEn: 'Combination of Passion & Elegance' },
    '癸戊': { elementZh: '火', elementEn: 'Fire', nameZh: '多礼之合', nameEn: 'Combination of Passion & Elegance' }
  };

  // Earthly Branch Six Harmonies (地支六合)
  const BRANCH_SIX_HARMONIES = {
    '子丑': { elementZh: '土', elementEn: 'Earth', descZh: '泥沼化土，深沉内敛', descEn: 'Water & Earth merge into nurturing ground' },
    '丑子': { elementZh: '土', elementEn: 'Earth', descZh: '泥沼化土，深沉内敛', descEn: 'Water & Earth merge into nurturing ground' },
    '寅亥': { elementZh: '木', elementEn: 'Wood', descZh: '生发合木，长青繁荣', descEn: 'Water nourishes Wood into vibrant growth' },
    '亥寅': { elementZh: '木', elementEn: 'Wood', descZh: '生发合木，长青繁荣', descEn: 'Water nourishes Wood into vibrant growth' },
    '卯戌': { elementZh: '火', elementEn: 'Fire', descZh: '春回大地，化火生辉', descEn: 'Spring blossom ignites warm illumination' },
    '戌卯': { elementZh: '火', elementEn: 'Fire', descZh: '春回大地，化火生辉', descEn: 'Spring blossom ignites warm illumination' },
    '辰酉': { elementZh: '金', elementEn: 'Metal', descZh: '湿土生金，坚如磐石', descEn: 'Moist earth crystallizes into solid platinum' },
    '酉辰': { elementZh: '金', elementEn: 'Metal', descZh: '湿土生金，坚如磐石', descEn: 'Moist earth crystallizes into solid platinum' },
    '巳申': { elementZh: '水', elementEn: 'Water', descZh: '金火相融，化气归源', descEn: 'Alchemy of Fire and Metal yielding fluid wisdom' },
    '申巳': { elementZh: '水', elementEn: 'Water', descZh: '金火相融，化气归源', descEn: 'Alchemy of Fire and Metal yielding fluid wisdom' },
    '午未': { elementZh: '火/土', elementEn: 'Fire/Earth', descZh: '日月相辉，光明敦厚', descEn: 'Sun and Moon harmonize in radiant balance' },
    '未午': { elementZh: '火/土', elementEn: 'Fire/Earth', descZh: '日月相辉，光明敦厚', descEn: 'Sun and Moon harmonize in radiant balance' }
  };

  // Earthly Branch Six Clashes (地支六冲)
  const BRANCH_SIX_CLASHES = {
    '子午': { nameZh: '水火相激', nameEn: 'Water-Fire Surge', descZh: '精神奔波，情绪波澜，需以木通关', descEn: 'Emotional turbulence and spiritual divergence; requires Wood mediation' },
    '午子': { nameZh: '水火相激', nameEn: 'Water-Fire Surge', descZh: '精神奔波，情绪波澜，需以木通关', descEn: 'Emotional turbulence and spiritual divergence; requires Wood mediation' },
    '丑未': { nameZh: '土气震荡', nameEn: 'Earth Tremor', descZh: '金库逢刑冲，不动产与基业变迁', descEn: 'Foundational property and asset restructuring tremors' },
    '未丑': { nameZh: '土气震荡', nameEn: 'Earth Tremor', descZh: '金库逢刑冲，不动产与基业变迁', descEn: 'Foundational property and asset restructuring tremors' },
    '寅申': { nameZh: '金木相战', nameEn: 'Metal-Wood Clash', descZh: '道路奔驰，决断分歧，需以水通关', descEn: 'Direct confrontation of wills and velocity; requires Water mediation' },
    '申寅': { nameZh: '金木相战', nameEn: 'Metal-Wood Clash', descZh: '道路奔驰，决断分歧，需以水通关', descEn: 'Direct confrontation of wills and velocity; requires Water mediation' },
    '卯酉': { nameZh: '门户相冲', nameEn: 'Gateway Clash', descZh: '情感私密冲撞，是非分明，需以水通关', descEn: 'Intimate boundaries and privacy tensions; requires Water mediation' },
    '酉卯': { nameZh: '门户相冲', nameEn: 'Gateway Clash', descZh: '情感私密冲撞，是非分明，需以水通关', descEn: 'Intimate boundaries and privacy tensions; requires Water mediation' },
    '辰戌': { nameZh: '魁罡相战', nameEn: 'Pivotal Ground Clash', descZh: '原则强硬不妥协，边界防卫', descEn: 'Stubborn boundary confrontations and dogmatic rigidity' },
    '戌辰': { nameZh: '魁罡相战', nameEn: 'Pivotal Ground Clash', descZh: '原则强硬不妥协，边界防卫', descEn: 'Stubborn boundary confrontations and dogmatic rigidity' },
    '巳亥': { nameZh: '才智相激', nameEn: 'Intellectual Rapids Clash', descZh: '风云变幻，心机多变，需以木通关', descEn: 'Rapid shifting tactics and mental restlessness; requires Wood mediation' },
    '亥巳': { nameZh: '才智相激', nameEn: 'Intellectual Rapids Clash', descZh: '风云变幻，心机多变，需以木通关', descEn: 'Rapid shifting tactics and mental restlessness; requires Wood mediation' }
  };

  // Branch Punishments (三刑)
  const BRANCH_PUNISHMENTS = [
    { branches: ['寅', '巳', '申'], nameZh: '无恩之刑', nameEn: 'Ungrateful Punishment', descZh: '冷酷严苛，防情义反噬', descEn: 'Strict legalism versus emotional loyalty; guard against contractual betrayal' },
    { branches: ['丑', '戌', '未'], nameZh: '持势之刑', nameEn: 'Power-Seeking Punishment', descZh: '权力角逐，互不服输', descEn: 'Dominance struggles and reluctance to surrender executive control' },
    { branches: ['子', '卯'], nameZh: '无礼之刑', nameEn: 'Disrespectful Punishment', descZh: '礼法分歧，界限模糊', descEn: 'Etiquette and interpersonal boundary boundary friction' }
  ];

  // Branch Harms (六害)
  const BRANCH_HARMS = {
    '子未': { nameZh: '势家之害', nameEn: 'Resource Friction Harm' },
    '未子': { nameZh: '势家之害', nameEn: 'Resource Friction Harm' },
    '丑午': { nameZh: '暗火焦灼', nameEn: 'Simmering Friction Harm' },
    '午丑': { nameZh: '暗火焦灼', nameEn: 'Simmering Friction Harm' },
    '寅巳': { nameZh: '争进刑害', nameEn: 'Ambitious Rivalry Harm' },
    '巳寅': { nameZh: '争进刑害', nameEn: 'Ambitious Rivalry Harm' },
    '卯辰': { nameZh: '少凌长害', nameEn: 'Hierarchy Disruption Harm' },
    '辰卯': { nameZh: '少凌长害', nameEn: 'Hierarchy Disruption Harm' },
    '申亥': { nameZh: '才华相嫉', nameEn: 'Talent Rivalry Harm' },
    '亥申': { nameZh: '才华相嫉', nameEn: 'Talent Rivalry Harm' },
    '酉戌': { nameZh: '暗箭相残', nameEn: 'Passive Invalidation Harm' },
    '戌酉': { nameZh: '暗箭相残', nameEn: 'Passive Invalidation Harm' }
  };

  const ELEMENT_MAP = {
    '甲': '木', '乙': '木', '丙': '火', '丁': '火', '戊': '土',
    '己': '土', '庚': '金', '辛': '金', '壬': '水', '癸': '水',
    '寅': '木', '卯': '木', '巳': '火', '午': '火', '辰': '土',
    '戌': '土', '丑': '土', '未': '土', '申': '金', '酉': '金',
    '亥': '水', '子': '水'
  };

  const ELEMENT_NAMES_EN = {
    '木': 'Wood', '火': 'Fire', '土': 'Earth', '金': 'Metal', '水': 'Water'
  };

  const STEM_NAMES_EN = {
    '甲': 'Jia (Yang Wood)', '乙': 'Yi (Yin Wood)', '丙': 'Bing (Yang Fire)', '丁': 'Ding (Yin Fire)',
    '戊': 'Wu (Yang Earth)', '己': 'Ji (Yin Earth)', '庚': 'Geng (Yang Metal)', '辛': 'Xin (Yin Metal)',
    '壬': 'Ren (Yang Water)', '癸': 'Gui (Yin Water)'
  };

  const BRANCH_NAMES_EN = {
    '子': 'Zi (Rat)', '丑': 'Chou (Ox)', '寅': 'Yin (Tiger)', '卯': 'Mao (Rabbit)',
    '辰': 'Chen (Dragon)', '巳': 'Si (Snake)', '午': 'Wu (Horse)', '未': 'Wei (Goat)',
    '申': 'Shen (Monkey)', '酉': 'You (Rooster)', '戌': 'Xu (Dog)', '亥': 'Hai (Pig)'
  };

  function getPillarEn(pillar) {
    if (!pillar) return '';
    const s = STEM_NAMES_EN[pillar.stem] || pillar.stem || '';
    const b = BRANCH_NAMES_EN[pillar.branch] || pillar.branch || '';
    return `${s} / ${b}`;
  }

  /**
   * Main Compatibility Analysis Function
   * @param {Object} chartA First BaZi calculation result
   * @param {Object} chartB Second BaZi calculation result
   * @param {string} mode 'romantic' | 'business'
   * @param {string} lang 'zh' | 'en'
   */
  function analyze(chartA, chartB, mode = 'romantic', lang = 'zh') {
    if (!chartA || !chartB || !chartA.pillars || !chartB.pillars) {
      throw new Error("Both chartA and chartB must be valid BaZi calculation results.");
    }

    const isEn = (lang === 'en');
    const isRomantic = (mode === 'romantic');

    // 1. Core Data Extraction
    const pA = chartA.pillars;
    const pB = chartB.pillars;

    const dmA = chartA.dayMaster;
    const dmB = chartB.dayMaster;
    const dmElemA = ELEMENT_MAP[dmA] || '木';
    const dmElemB = ELEMENT_MAP[dmB] || '土';

    const dayBranchA = pA.day.branch;
    const dayBranchB = pB.day.branch;

    // 2. Elemental Synergy & Complementarity
    const elA = chartA.elements || { '木': 20, '火': 20, '土': 20, '金': 20, '水': 20 };
    const elB = chartB.elements || { '木': 20, '火': 20, '土': 20, '金': 20, '水': 20 };

    let synergyScore = 65;
    const elementGapsA = [];
    const elementGapsB = [];
    const mutualGifts = [];

    const elements = ['木', '火', '土', '金', '水'];
    elements.forEach(el => {
      const valA = parseFloat(elA[el] || 0);
      const valB = parseFloat(elB[el] || 0);
      const enEl = ELEMENT_NAMES_EN[el];

      if (valA < 15 && valB >= 25) {
        elementGapsA.push(el);
        mutualGifts.push({
          from: 'B', to: 'A', element: el, elementEn: enEl,
          descZh: `乙造${el}气充沛（${valB}%），补益甲造所缺（${valA}%）`,
          descEn: `Person B provides abundant ${enEl} (${valB}%), compensating Person A's deficiency (${valA}%)`
        });
        synergyScore += 6;
      }
      if (valB < 15 && valA >= 25) {
        elementGapsB.push(el);
        mutualGifts.push({
          from: 'A', to: 'B', element: el, elementEn: enEl,
          descZh: `甲造${el}气充盈（${valA}%），滋养乙造不足（${valB}%）`,
          descEn: `Person A supplies rich ${enEl} (${valA}%), nourishing Person B's shortfall (${valB}%)`
        });
        synergyScore += 6;
      }
    });

    // Day Master interaction
    const stemPair = dmA + dmB;
    const hasStemCombo = Boolean(STEM_COMBINATIONS[stemPair]);
    if (hasStemCombo) synergyScore += 12;

    // Day Branch interaction
    const branchPair = dayBranchA + dayBranchB;
    const hasSixHarmony = Boolean(BRANCH_SIX_HARMONIES[branchPair]);
    const hasSixClash = Boolean(BRANCH_SIX_CLASHES[branchPair]);
    const hasHarm = Boolean(BRANCH_HARMS[branchPair]);

    if (hasSixHarmony) synergyScore += 14;
    if (hasSixClash) synergyScore -= 15;
    if (hasHarm) synergyScore -= 8;

    // Check all cross-pillar clashes and harmonies
    const crossClashes = [];
    const crossHarmonies = [];
    const crossPunishments = [];

    const pillarKeys = ['year', 'month', 'day', 'hour'];
    const pillarLabelsZh = { year: '年柱(祖业根基)', month: '月柱(事业性格)', day: '日柱(核心心性/配偶宫)', hour: '时柱(愿景晚景)' };
    const pillarLabelsEn = { year: 'Year (Roots & Background)', month: 'Month (Career & Temperament)', day: 'Day (Core Soul & Partner Palace)', hour: 'Hour (Aspirations & Legacy)' };

    pillarKeys.forEach(k1 => {
      pillarKeys.forEach(k2 => {
        const bA = pA[k1].branch;
        const bB = pB[k2].branch;
        const pair = bA + bB;

        if (BRANCH_SIX_CLASHES[pair]) {
          const pAEn = getPillarEn(pA[k1]);
          const pBEn = getPillarEn(pB[k2]);
          const bAEn = BRANCH_NAMES_EN[bA] || bA;
          const bBEn = BRANCH_NAMES_EN[bB] || bB;
          crossClashes.push({
            pillarA: k1,
            pillarB: k2,
            branchA: bA,
            branchB: bB,
            info: BRANCH_SIX_CLASHES[pair],
            descZh: `甲造【${pA[k1].text}】${pillarLabelsZh[k1]} 与 乙造【${pB[k2].text}】${pillarLabelsZh[k2]} 逢【${bA}${bB}冲】`,
            descEn: `Person A [${pAEn}] ${pillarLabelsEn[k1]} clashes with Person B [${pBEn}] ${pillarLabelsEn[k2]} (${bAEn} vs ${bBEn} Clash)`
          });
        }

        if (BRANCH_SIX_HARMONIES[pair]) {
          const pAEn = getPillarEn(pA[k1]);
          const pBEn = getPillarEn(pB[k2]);
          const bAEn = BRANCH_NAMES_EN[bA] || bA;
          const bBEn = BRANCH_NAMES_EN[bB] || bB;
          crossHarmonies.push({
            pillarA: k1,
            pillarB: k2,
            branchA: bA,
            branchB: bB,
            info: BRANCH_SIX_HARMONIES[pair],
            descZh: `甲造【${pA[k1].text}】与 乙造【${pB[k2].text}】逢【${bA}${bB}六合】(${BRANCH_SIX_HARMONIES[pair].descZh})`,
            descEn: `Person A [${pAEn}] and Person B [${pBEn}] form Six Harmonies (${bAEn} & ${bBEn}: ${BRANCH_SIX_HARMONIES[pair].descEn})`
          });
        }
      });
    });

    // Check punishments
    const allBranches = [
      pA.year.branch, pA.month.branch, pA.day.branch, pA.hour.branch,
      pB.year.branch, pB.month.branch, pB.day.branch, pB.hour.branch
    ];
    BRANCH_PUNISHMENTS.forEach(pRule => {
      const matchCount = pRule.branches.filter(b => allBranches.includes(b)).length;
      if (matchCount >= 2) {
        crossPunishments.push(pRule);
        synergyScore -= 5;
      }
    });

    // Clamp score
    let overallScore = Math.max(42, Math.min(97, Math.round(synergyScore)));

    // 3. Archetype Determination
    let archetype;
    if (isRomantic) {
      if (overallScore >= 88) {
        archetype = {
          nameZh: '天作之合 · 金风玉露',
          nameEn: 'Heavenly Match · Golden Wind & Jade Dew',
          sealZh: '天赐良缘',
          sealEn: 'CELESTIAL HARMONY',
          tierZh: '特优相合',
          tierEn: 'Exceptional Affinity',
          descZh: '气机水乳交融，既有深层的心灵默契，又具备现实生活的互补支撑。相处如沐春风，共同抵御岁月风浪。',
          descEn: 'Energetic currents merge effortlessly, fostering profound soul resonance and robust real-world mutual elevation.'
        };
      } else if (overallScore >= 75) {
        archetype = {
          nameZh: '水火既济 · 砥砺共生',
          nameEn: 'Fire & Water in Harmony · Resilient Polarity',
          sealZh: '既济同舟',
          sealEn: 'RESILIENT UNION',
          tierZh: '优良互补',
          tierEn: 'Superior Polarity',
          descZh: '虽有性格特质上的鲜明反差，却能在关键时刻形成最强大的互补支柱。懂得欣赏彼此差异便能成为彼此的压舱石。',
          descEn: 'Distinct temperament contrasts create an unshakeable counterbalance when differences are embraced with mutual respect.'
        };
      } else if (overallScore >= 60) {
        archetype = {
          nameZh: '细水长流 · 守中致和',
          nameEn: 'Gentle Flow · Balanced Equilibrium',
          sealZh: '守中克谐',
          sealEn: 'STEADY EQUILIBRIUM',
          tierZh: '中平稳健',
          tierEn: 'Stable Balance',
          descZh: '平稳恬淡，没有大起大落的狂热，胜在生活节奏与日常作息的持久契合。需注重增添情趣与深层精神沟通。',
          descEn: 'Tranquil and enduring without turbulent extremes, excelling in routine synchrony while benefiting from intentional emotional intimacy.'
        };
      } else {
        archetype = {
          nameZh: '磨砺欢喜 · 破茧成蝶',
          nameEn: 'Dynamic Friction · Transformative Crucible',
          sealZh: '历练克融',
          sealEn: 'GROWTH CRUCIBLE',
          tierZh: '考验磨合',
          tierEn: 'Crucible Testing',
          descZh: '气机碰撞较多，容易在微小琐事上触发意志对抗。此盘为灵魂进阶之磨刀石，需以包容与智慧化解锋芒。',
          descEn: 'High energetic friction frequently tests personal boundaries, serving as an evolutionary crucible requiring conscious cultivation.'
        };
      }
    } else {
      // Business mode
      if (overallScore >= 88) {
        archetype = {
          nameZh: '龙腾虎跃 · 黄金搭档',
          nameEn: 'Dragon & Tiger · Golden Co-Founders',
          sealZh: '将相和鸣',
          sealEn: 'EXECUTIVE SYNERGY',
          tierZh: '王炸合伙',
          tierEn: 'Executive Powerhouse',
          descZh: '一人开拓市场如猛虎出林，一人稳固后方如定海神针。战略与执行完美闭环，商业价值成倍放大。',
          descEn: 'One aggressively captures market frontiers while the other anchors operations; strategy and execution form an impenetrable compounding loop.'
        };
      } else if (overallScore >= 75) {
        archetype = {
          nameZh: '管鲍之交 · 攻守兼备',
          nameEn: 'Legendary Trust · Dynamic Balance',
          sealZh: '同舟共济',
          sealEn: 'TACTICAL ALLIANCE',
          tierZh: '互补共赢',
          tierEn: 'Complementary Leverage',
          descZh: '能力结构互补性极高，一人擅长战略与商业嗅觉，一人擅长精细运营与风控。契约清晰则无往不利。',
          descEn: 'High operational complementarity: strategic vision aligns seamlessly with prudent risk containment under clear equity definitions.'
        };
      } else if (overallScore >= 60) {
        archetype = {
          nameZh: '契约筑基 · 职能分明',
          nameEn: 'Contractual Armor · Clear Division',
          sealZh: '公私分明',
          sealEn: 'STRUCTURED PROTOCOL',
          tierZh: '职能协同',
          tierEn: 'Structured Collaboration',
          descZh: '理性共事大于个人交情，需以冰冷的法律合同与清晰的KPI/OKR为纽带，严禁模糊权责与情感用事。',
          descEn: 'Professional pragmatic alignment over personal sentiment; thrives strictly when fortified by transparent bylaws and measurable KPIs.'
        };
      } else {
        archetype = {
          nameZh: '博弈防范 · 权责防火墙',
          nameEn: 'Strategic Game Theory · Corporate Firewall',
          sealZh: '慎密防权',
          sealEn: 'FIREWALL SAFEGUARD',
          tierZh: '博弈防范',
          tierEn: 'Calculated Caution',
          descZh: '存在较强的话语权争夺或财星比劫摩擦，必须设置绝对一票否决权、财务独立审计与清退机制，方可合作。',
          descEn: 'Pronounced authority rivalry or asset competition; requires decisive veto allocation, third-party audit, and ironclad exit clauses.'
        };
      }
    }

    // 4. Elemental Synergy Breakdown
    const elDiagZh = generateElementalDiagnosis(elA, elB, dmElemA, dmElemB, mutualGifts, false);
    const elDiagEn = generateElementalDiagnosis(elA, elB, dmElemA, dmElemB, mutualGifts, true);

    // 5. Emotional Chemistry / Team Dynamics
    const resonanceZh = generateResonanceDiagnosis(pA, pB, hasStemCombo, hasSixHarmony, isRomantic, false);
    const resonanceEn = generateResonanceDiagnosis(pA, pB, hasStemCombo, hasSixHarmony, isRomantic, true);

    // 6. Potential Clash Points & Stress Vectors
    const clashDiagZh = generateClashDiagnosis(crossClashes, crossPunishments, isRomantic, false);
    const clashDiagEn = generateClashDiagnosis(crossClashes, crossPunishments, isRomantic, true);

    // 7. Financial Trust & Co-founder Game Theory
    const financeZh = generateFinancialDiagnosis(chartA, chartB, isRomantic, false);
    const financeEn = generateFinancialDiagnosis(chartA, chartB, isRomantic, true);

    // 8. Mutual Remedies & Harmony Prescriptions
    const remediesZh = generateRemedies(chartA, chartB, crossClashes, isRomantic, false);
    const remediesEn = generateRemedies(chartA, chartB, crossClashes, isRomantic, true);

    return {
      mode,
      lang,
      overallScore,
      archetype: {
        name: isEn ? archetype.nameEn : archetype.nameZh,
        seal: isEn ? archetype.sealEn : archetype.sealZh,
        tier: isEn ? archetype.tierEn : archetype.tierZh,
        description: isEn ? archetype.descEn : archetype.descZh,
        nameZh: archetype.nameZh,
        nameEn: archetype.nameEn,
        sealZh: archetype.sealZh,
        sealEn: archetype.sealEn,
        tierZh: archetype.tierZh,
        tierEn: archetype.tierEn,
        descZh: archetype.descZh,
        descEn: archetype.descEn
      },
      elementalSynergy: {
        score: Math.min(98, Math.max(45, synergyScore)),
        elementA: isEn ? (ELEMENT_NAMES_EN[dmElemA] || dmElemA) : dmElemA,
        elementB: isEn ? (ELEMENT_NAMES_EN[dmElemB] || dmElemB) : dmElemB,
        elementAZh: dmElemA,
        elementBZh: dmElemB,
        elementAEn: ELEMENT_NAMES_EN[dmElemA] || dmElemA,
        elementBEn: ELEMENT_NAMES_EN[dmElemB] || dmElemB,
        mutualGifts: mutualGifts.map(g => ({
          from: g.from,
          to: g.to,
          element: isEn ? g.elementEn : g.element,
          desc: isEn ? g.descEn : g.descZh,
          descZh: g.descZh,
          descEn: g.descEn
        })),
        diagnosis: isEn ? elDiagEn : elDiagZh,
        diagnosisZh: elDiagZh,
        diagnosisEn: elDiagEn
      },
      pillarResonance: {
        hasStemCombo,
        hasSixHarmony,
        crossHarmonies: crossHarmonies.map(h => ({
          desc: isEn ? h.descEn : h.descZh,
          descZh: h.descZh,
          descEn: h.descEn
        })),
        diagnosis: isEn ? resonanceEn : resonanceZh,
        diagnosisZh: resonanceZh,
        diagnosisEn: resonanceEn
      },
      clashPoints: {
        clashCount: crossClashes.length,
        punishmentCount: crossPunishments.length,
        crossClashes: crossClashes.map(c => ({
          desc: isEn ? c.descEn : c.descZh,
          descZh: c.descZh,
          descEn: c.descEn
        })),
        diagnosis: isEn ? clashDiagEn : clashDiagZh,
        diagnosisZh: clashDiagZh,
        diagnosisEn: clashDiagEn
      },
      financialTrust: {
        diagnosis: isEn ? financeEn : financeZh,
        diagnosisZh: financeZh,
        diagnosisEn: financeEn
      },
      remedies: {
        diagnosis: isEn ? remediesEn : remediesZh,
        diagnosisZh: remediesZh,
        diagnosisEn: remediesEn
      }
    };
  }

  // Helper: Elemental Diagnosis
  function generateElementalDiagnosis(elA, elB, dmA, dmB, gifts, isEn) {
    if (isEn) {
      const giftStr = gifts.length > 0
        ? gifts.map(g => `• ${g.descEn}`).join('\n')
        : '• Both energy charts hold self-contained energetic baselines without sharp one-way dependency.';
      return `[Five Elements Symbiosis Architecture]\nPerson A embodies ${ELEMENT_NAMES_EN[dmA]} Day Master, while Person B channels ${ELEMENT_NAMES_EN[dmB]} Day Master. Their combined elements create a dynamic ecological circuit.\n${giftStr}\nStrategically, when both individuals combine forces, missing environmental nutrients are organically replenished, reducing blind spots and fatigue.`;
    }

    const giftStr = gifts.length > 0
      ? gifts.map(g => `• ${g.descZh}`).join('\n')
      : '• 双盘各自五行基底较为均衡自足，不存在极端的单一五行依赖。';
    return `【五行气机交融图谱】\n甲造日元禀【${dmA}】之本性，乙造日元承【${dmB}】之造化。两盘交汇，五行气场形成连环相生与互补循环：\n${giftStr}\n从命理大生态来看，二者合力能自发补齐各自原局的匮乏板块，使事业与生活具备更强抗风险韧性。`;
  }

  // Helper: Resonance Diagnosis
  function generateResonanceDiagnosis(pA, pB, hasStemCombo, hasSixHarmony, isRomantic, isEn) {
    if (isEn) {
      const dmAEn = STEM_NAMES_EN[pA.day.stem] || pA.day.stem;
      const dmBEn = STEM_NAMES_EN[pB.day.stem] || pB.day.stem;
      const mPillarAEn = getPillarEn(pA.month);
      const mPillarBEn = getPillarEn(pB.month);

      if (isRomantic) {
        return `[Soul & Psychological Resonance]\n` +
          `Day Pillars form the intimate heart of the union: Day Master [${dmAEn}] and [${dmBEn}] ` +
          (hasStemCombo ? `achieve authentic Heavenly Stem Combination, igniting intuitive empathy, magnetic physical chemistry, and effortless telepathy.` : `interact through mutual respect and individual autonomy without smothering enmeshment.`) +
          `\nMonth Pillars govern operational lifestyles: [${mPillarAEn}] and [${mPillarBEn}] establish a shared rhythm for financial administration, social circles, and future legacy planning.`;
      } else {
        return `[Executive Alignment & Leadership Chemistry]\n` +
          `Day Master [${dmAEn}] and [${dmBEn}] ` +
          (hasStemCombo ? `form a rare Stem Combination, creating supreme executive trust and aligned core values when navigating crisis moments.` : `demonstrate clear philosophical independence, allowing objective debate and strategic rigor.`) +
          `\nCareer Month Pillars ([${mPillarAEn}] vs [${mPillarBEn}]) provide a dual-engine apparatus: external expansion seamlessly interlocks with internal governance.`;
      }
    }

    if (isRomantic) {
      return `【灵魂相融与情志默契】\n` +
        `日柱乃夫妻宫与本命性灵核心：甲造日主【${pA.day.stem}】与乙造日主【${pB.day.stem}】` +
        (hasStemCombo ? `暗合天干正配，彼此在精神世界极易产生灵犀共振，言笑之间便能明了对方未尽之意。` : `呈现温和独立之象，既保有个人自足的精神领地，又能相敬如宾。`) +
        `\n月柱主管现实生活秩序与三观：【${pA.month.text}】与【${pB.month.text}】相互激荡，在家庭资产规划与社交生活上能够同频共振。`;
    } else {
      return `【合伙博弈与决策心智协同】\n` +
        `日主【${pA.day.stem}】与【${pB.day.stem}】` +
        (hasStemCombo ? `逢天干合化，在重大生死关头具有难能可贵的无条件互信，能把后背完全交托对方。` : `呈现理性分立之势，利于在重大决策时保持清醒客观的辩证视角，防止集体盲从。`) +
        `\n月令事业轴心【${pA.month.text}】与【${pB.month.text}】构筑了双核驱动引擎：一人负责战略破局与资源攻坚，一人负责筑牢合规后盾与深耕运营。`;
    }
  }

  // Helper: Clash Diagnosis
  function generateClashDiagnosis(clashes, punishments, isRomantic, isEn) {
    if (isEn) {
      if (clashes.length === 0 && punishments.length === 0) {
        return `【Clash & Friction Vectors】\n✓ Zero major branch clashes or severe punishments detected across the Four Pillars.\nBoth charts interact smoothly with low underlying structural friction. Everyday debates remain functional without triggering deep emotional hostility or institutional breakdown.`;
      }
      const clashList = clashes.map(c => `• ${c.descEn}`).join('\n');
      const punList = punishments.map(p => `• Punishment Alert: ${p.nameEn} (${p.descEn})`).join('\n');
      return `【Clash & Friction Vectors】\n${clashList}\n${punList}\nStrategic Advice: Clashes are natural catalysts for systemic evolution. In stressful seasons, refrain from reactive accusations; enforce strict communication protocols and avoid mutual territory infringement.`;
    }

    if (clashes.length === 0 && punishments.length === 0) {
      return `【潜在雷区与刑冲预警】\n✓ 全盘未见重大地支六冲与三刑对抗，气场温和顺畅。\n二者共事或相处，极少出现毁灭性的原则对立或暴烈冲突，日常摩擦多能通过沟通迅速平息，属于稳定基底。`;
    }
    const clashList = clashes.map(c => `• ${c.descZh}`).join('\n');
    const punList = punishments.map(p => `• 刑克提示: ${p.nameZh} (${p.descZh})`).join('\n');
    return `【潜在雷区与刑冲预警】\n${clashList}\n${punList}\n化解要领：逢冲逢刑非必然凶兆，乃气机调整之催化剂。在运势交战年份，应避免情绪冲动下的重大决策，建立缓冲期与第三方斡旋机制。`;
  }

  // Helper: Financial Diagnosis
  function generateFinancialDiagnosis(chartA, chartB, isRomantic, isEn) {
    const dmA = chartA.dayMaster;
    const dmB = chartB.dayMaster;

    if (isEn) {
      if (isRomantic) {
        return `【Financial Synergy & Family Wealth Preservation】\n` +
          `1. Wealth Stewardship: Wealth stars in both charts indicate that joint assets thrive best when clear allocations are made for family investments, liquidity reserves, and discretionary accounts.\n` +
          `2. Risk Appetite: Maintain transparency in major real estate, equity, or startup allocations. Avoid emotional co-signing or uncontrolled leverage without mutual signed consent.\n` +
          `3. Co-Prosperity Rule: Focus on compounding combined resources rather than micromanaging daily household expenditures.`;
      } else {
        return `【Co-founder Game Theory & Commercial Equity Protocol】\n` +
          `1. Equity & Governance: Absolute equity parity (50/50) is strictly discouraged. Anchor a decisive 67% or 51% final operational decision-maker while protecting the minority founder with veto rights on dilution and sale.\n` +
          `2. Financial Firewall: All business disbursements above agreed thresholds require dual authorization and quarterly certified third-party bookkeeping.\n` +
          `3. Vesting & Exit Mechanism: Institute a standard 4-year dynamic vesting schedule with a 1-year cliff to protect corporate continuity against sudden partnership divergence.`;
      }
    }

    if (isRomantic) {
      return `【财富共荣与资产稳固策略】\n` +
        `1. 财运合力：双盘财星与库位相照，利于通过共同置业、长期复利基金与家族信托筑牢资产护城河。\n` +
        `2. 消费观念：双方对生活品质与安全感要求不一，建议设立三个独立账户（家庭公用账户、个人自由支配账户、紧急备用金），兼顾亲密与自由。\n` +
        `3. 投资底线：严禁在未获对方知情同意的情况下进行大额高杠杆投机或为人做连带担保。`;
    } else {
      return `【商业合伙博弈与股权治理红线】\n` +
        `1. 股权架构设计：切忌平分股权（如50/50或33/33/33）。必须确立一位绝对核心大股东（拥有51%以上表决权），另一方享有重大资产处置的一票否决权与高额利润分红权。\n` +
        `2. 财务阳光防火墙：业务资金流与个人账户彻底物理隔离，大额支出实行双签制，每季度由独立第三方审计记账并出具财报。\n` +
        `3. 动态成熟与退出机制：实行标准的四年期股权成熟机制（Vesting Schedule，含1年锁定期），明确因健康、理念分歧退出时的公允估值回购公式，防患于未然。`;
    }
  }

  // Helper: Remedies
  function generateRemedies(chartA, chartB, clashes, isRomantic, isEn) {
    const dmA = chartA.dayMaster;
    const dmB = chartB.dayMaster;
    const elemA = ELEMENT_MAP[dmA] || '木';
    const elemB = ELEMENT_MAP[dmB] || '土';

    let bridgeElemZh = '水';
    let bridgeElemEn = 'Water';

    if ((elemA === '木' && elemB === '金') || (elemA === '金' && elemB === '木')) {
      bridgeElemZh = '水 (润金生木)';
      bridgeElemEn = 'Water (Hydrates Metal, Nourishes Wood)';
    } else if ((elemA === '水' && elemB === '火') || (elemA === '火' && elemB === '水')) {
      bridgeElemZh = '木 (通关水火)';
      bridgeElemEn = 'Wood (Absorbs Water, Fuels Fire)';
    } else if ((elemA === '火' && elemB === '金') || (elemA === '金' && elemB === '火')) {
      bridgeElemZh = '土 (泄火生金)';
      bridgeElemEn = 'Earth (Dissipates Fire, Births Metal)';
    } else if ((elemA === '土' && elemB === '木') || (elemA === '木' && elemB === '土')) {
      bridgeElemZh = '火 (化木生土)';
      bridgeElemEn = 'Fire (Converts Wood, Enriches Earth)';
    } else if ((elemA === '土' && elemB === '水') || (elemA === '水' && elemB === '土')) {
      bridgeElemZh = '金 (化土生水)';
      bridgeElemEn = 'Metal (Channels Earth, Enriches Water)';
    }

    if (isEn) {
      if (isRomantic) {
        return `【Mutual Remedies & Golden Harmony Prescriptions】\n` +
          `1. Elemental Bridge: Harness ${bridgeElemEn} as your energetic mediator. Decorate shared spaces with its corresponding colors and natural materials to smooth residual tension.\n` +
          `2. Sacred Boundaries: Designate individual decompression sanctuaries at home. When heated debates arise, enforce a mandatory 20-minute emotional cooldown protocol.\n` +
          `3. Golden Directives: Speak appreciation directly, celebrate small daily milestones together, and always align long-term priorities before addressing trivial logistical disagreements.`;
      } else {
        return `【Commercial Remedial Protocols & Co-existence Bylaws】\n` +
          `1. Energetic Pivot: Introduce ${bridgeElemEn} elements in boardrooms and executive workspaces to foster calm contemplation and reduce confrontation.\n` +
          `2. Procedural Boundary: Institutionalize disagreements into structured memorandum formats rather than subjective verbal crossfire. All major strategy pivots require a written business case.\n` +
          `3. Three Golden Rules: Uncompromising loyalty to client outcomes, total transparency on balance sheet transactions, and unified public alignment once executive decisions are settled.`;
      }
    }

    if (isRomantic) {
      return `【双人调和化解之道与共生锦囊】\n` +
        `1. 五行通关密钥：以【${bridgeElemZh}】为调和能量枢纽。在家居软装、卧室色调中引入相应五行意象（如流水生机、温润绿植或雅致陶木），可润滑气机冲克。\n` +
        `2. 情绪缓冲机制：建立“冷静20分钟”家庭共识。遇到争执不下时，各自退回独立空间平复心率，拒绝在愤怒状态下做出情感定性。\n` +
        `3. 传世共处三则：多看对方长处而常怀感恩；把对错之争转化为需求表达；在父母与亲戚社交中彼此充当最坚实的第一防线。`;
    } else {
      return `【商业合伙共赢规约与化解锦囊】\n` +
        `1. 风水与场能调适：以【${bridgeElemZh}】之气场布局核心办公空间与会议室，促进心平气和的深度理性研判。\n` +
        `2. 议事决策协议：推行“书面提案制”，重大战略分歧严禁口头争吵，须形成数据化商业计划书提交董事会或专家顾问团裁决。\n` +
        `3. 事业不败三则：对外口径绝对高度统一；对内权责界限寸土不让；以业务增长与客户价值为唯一检验真理的标准，超越个人情绪。`;
    }
  }

  return {
    analyze,
    STEM_COMBINATIONS,
    BRANCH_SIX_HARMONIES,
    BRANCH_SIX_CLASHES,
    BRANCH_PUNISHMENTS,
    BRANCH_HARMS
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = SynastryEngine;
}
if (typeof window !== 'undefined') {
  window.SynastryEngine = SynastryEngine;
}
