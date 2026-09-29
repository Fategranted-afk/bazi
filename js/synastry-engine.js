/**
 * Synastry & Partner Compatibility Metaphysics Engine
 * Dual-Mode: Romantic Marriage (婚恋合婚) & Business Co-founders (商业合伙与博弈)
 * Deeply grounded in the Eight Classical Canons & Zen/Dao Trinity
 * 100% Bilingual Parity (Chinese / English) with Zero Residual Chinese in EN mode
 */

const SynastryEngine = (function() {
  // Chinese Zodiac Animals strictly mapped to Year Earthly Branches
  const ZODIAC_ANIMALS = {
    '子': { zh: '鼠', en: 'Rat', branchEn: 'Zi' },
    '丑': { zh: '牛', en: 'Ox', branchEn: 'Chou' },
    '寅': { zh: '虎', en: 'Tiger', branchEn: 'Yin' },
    '卯': { zh: '兔', en: 'Rabbit', branchEn: 'Mao' },
    '辰': { zh: '龙', en: 'Dragon', branchEn: 'Chen' },
    '巳': { zh: '蛇', en: 'Snake', branchEn: 'Si' },
    '午': { zh: '马', en: 'Horse', branchEn: 'Wu' },
    '未': { zh: '羊', en: 'Goat', branchEn: 'Wei' },
    '申': { zh: '猴', en: 'Monkey', branchEn: 'Shen' },
    '酉': { zh: '鸡', en: 'Rooster', branchEn: 'You' },
    '戌': { zh: '狗', en: 'Dog', branchEn: 'Xu' },
    '亥': { zh: '猪', en: 'Pig', branchEn: 'Hai' }
  };

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
    '子丑': { elementZh: '土', elementEn: 'Earth', descZh: '泥沼化土，深沉内敛', descEn: 'Water & Earth merge into steady, nurturing soil' },
    '丑子': { elementZh: '土', elementEn: 'Earth', descZh: '泥沼化土，深沉内敛', descEn: 'Water & Earth merge into steady, nurturing soil' },
    '寅亥': { elementZh: '木', elementEn: 'Wood', descZh: '生发合木，长青繁荣', descEn: 'Water nourishes Wood into flourishing growth' },
    '亥寅': { elementZh: '木', elementEn: 'Wood', descZh: '生发合木，长青繁荣', descEn: 'Water nourishes Wood into flourishing growth' },
    '卯戌': { elementZh: '火', elementEn: 'Fire', descZh: '春回大地，化火生辉', descEn: 'Spring blossom ignites warm illumination' },
    '戌卯': { elementZh: '火', elementEn: 'Fire', descZh: '春回大地，化火生辉', descEn: 'Spring blossom ignites warm illumination' },
    '辰酉': { elementZh: '金', elementEn: 'Metal', descZh: '湿土生金，坚如磐石', descEn: 'Moist earth crystallizes into solid platinum' },
    '酉辰': { elementZh: '金', elementEn: 'Metal', descZh: '湿土生金，坚如磐石', descEn: 'Moist earth crystallizes into solid platinum' },
    '巳申': { elementZh: '水', elementEn: 'Water', descZh: '金火相融，化气归源', descEn: 'Alchemy of Fire and Metal yielding fluid wisdom' },
    '申巳': { elementZh: '水', elementEn: 'Water', descZh: '金火相融，化气归源', descEn: 'Alchemy of Fire and Metal yielding fluid wisdom' },
    '午未': { elementZh: '火/土', elementEn: 'Fire/Earth', descZh: '日月相辉，光明敦厚', descEn: 'Sun and Moon harmonize in radiant warmth' },
    '未午': { elementZh: '火/土', elementEn: 'Fire/Earth', descZh: '日月相辉，光明敦厚', descEn: 'Sun and Moon harmonize in radiant warmth' }
  };

  // Earthly Branch Six Clashes (地支六冲)
  const BRANCH_SIX_CLASHES = {
    '子午': { nameZh: '水火相激', nameEn: 'Water-Fire Surge', descZh: '精神奔波，情绪波澜，需以木通关', descEn: 'Emotional divergence and energetic surges; resolved through Wood mediation' },
    '午子': { nameZh: '水火相激', nameEn: 'Water-Fire Surge', descZh: '精神奔波，情绪波澜，需以木通关', descEn: 'Emotional divergence and energetic surges; resolved through Wood mediation' },
    '丑未': { nameZh: '土气震荡', nameEn: 'Earth Tremor', descZh: '库位相刑冲，不动产与基业变迁', descEn: 'Foundational property and asset restructuring adjustments' },
    '未丑': { nameZh: '土气震荡', nameEn: 'Earth Tremor', descZh: '库位相刑冲，不动产与基业变迁', descEn: 'Foundational property and asset restructuring adjustments' },
    '寅申': { nameZh: '金木相战', nameEn: 'Metal-Wood Clash', descZh: '道路奔驰，决断分歧，需以水通关', descEn: 'Velocity and executive disagreement; resolved through Water mediation' },
    '申寅': { nameZh: '金木相战', nameEn: 'Metal-Wood Clash', descZh: '道路奔驰，决断分歧，需以水通关', descEn: 'Velocity and executive disagreement; resolved through Water mediation' },
    '卯酉': { nameZh: '门户相冲', nameEn: 'Gateway Clash', descZh: '情感私密冲撞，是非分明，需以水通关', descEn: 'Intimate boundaries and privacy tensions; resolved through Water mediation' },
    '酉卯': { nameZh: '门户相冲', nameEn: 'Gateway Clash', descZh: '情感私密冲撞，是非分明，需以水通关', descEn: 'Intimate boundaries and privacy tensions; resolved through Water mediation' },
    '辰戌': { nameZh: '魁罡相战', nameEn: 'Pivotal Ground Clash', descZh: '原则强硬不妥协，边界防卫', descEn: 'Stubborn boundary assertions requiring mutual flexibility' },
    '戌辰': { nameZh: '魁罡相战', nameEn: 'Pivotal Ground Clash', descZh: '原则强硬不妥协，边界防卫', descEn: 'Stubborn boundary assertions requiring mutual flexibility' },
    '巳亥': { nameZh: '才智相激', nameEn: 'Intellectual Rapids Clash', descZh: '风云变幻，心机多变，需以木通关', descEn: 'Fast-shifting tactics and mental restlessness; resolved through Wood mediation' },
    '亥巳': { nameZh: '才智相激', nameEn: 'Intellectual Rapids Clash', descZh: '风云变幻，心机多变，需以木通关', descEn: 'Fast-shifting tactics and mental restlessness; resolved through Wood mediation' }
  };

  // Branch Punishments (三刑)
  const BRANCH_PUNISHMENTS = [
    { branches: ['寅', '巳', '申'], nameZh: '无恩之刑', nameEn: 'Ungrateful Punishment', descZh: '冷酷严苛，防情义反噬', descEn: 'Strict legalism versus emotional loyalty; guard against contractual ambiguity' },
    { branches: ['丑', '戌', '未'], nameZh: '持势之刑', nameEn: 'Power-Seeking Punishment', descZh: '权力角逐，互不服输', descEn: 'Dominance contests and reluctance to surrender operational control' },
    { branches: ['子', '卯'], nameZh: '无礼之刑', nameEn: 'Disrespectful Punishment', descZh: '礼法分歧，界限模糊', descEn: 'Etiquette friction and interpersonal boundary ambiguity' }
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

  // Three Harmony Frames (三合局)
  const THREE_HARMONIES = [
    { branches: ['申', '子', '辰'], elementZh: '水', elementEn: 'Water', nameZh: '申子辰水局', nameEn: 'Water Triad (Wisdom & Flow)' },
    { branches: ['亥', '卯', '未'], elementZh: '木', elementEn: 'Wood', nameZh: '亥卯未木局', nameEn: 'Wood Triad (Vitality & Growth)' },
    { branches: ['寅', '午', '戌'], elementZh: '火', elementEn: 'Fire', nameZh: '寅午戌火局', nameEn: 'Fire Triad (Passion & Clarity)' },
    { branches: ['巳', '酉', '丑'], elementZh: '金', elementEn: 'Metal', nameZh: '巳酉丑金局', nameEn: 'Metal Triad (Precision & Resolve)' }
  ];

  // Tian Yi Noble Star Roots (天乙贵人：甲戊庚牛羊，乙己鼠猴乡，丙丁猪鸡位，壬癸兔蛇藏，六辛逢马虎)
  const TIAN_YI_TABLE = {
    '甲': ['丑', '未'], '戊': ['丑', '未'], '庚': ['丑', '未'],
    '乙': ['子', '申'], '己': ['子', '申'],
    '丙': ['亥', '酉'], '丁': ['亥', '酉'],
    '壬': ['巳', '卯'], '癸': ['巳', '卯'],
    '辛': ['午', '寅']
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

  const BRANCH_PINYIN = {
    '子': 'Zi', '丑': 'Chou', '寅': 'Yin', '卯': 'Mao',
    '辰': 'Chen', '巳': 'Si', '午': 'Wu', '未': 'Wei',
    '申': 'Shen', '酉': 'You', '戌': 'Xu', '亥': 'Hai'
  };

  // Branch names in English: clean and elegant without confusing month/day branches with animal signs
  const BRANCH_NAMES_EN = {
    '子': 'Zi (Water)', '丑': 'Chou (Earth)', '寅': 'Yin (Wood)', '卯': 'Mao (Wood)',
    '辰': 'Chen (Earth)', '巳': 'Si (Fire)', '午': 'Wu (Fire)', '未': 'Wei (Earth)',
    '申': 'Shen (Metal)', '酉': 'You (Metal)', '戌': 'Xu (Earth)', '亥': 'Hai (Water)'
  };

  const NAYIN_NAMES_EN = {
    '海中金': 'Sea Metal', '炉中火': 'Furnace Fire', '大林木': 'Great Forest Wood', '路旁土': 'Roadside Earth',
    '剑锋金': 'Sword Edge Metal', '山头火': 'Mountaintop Fire', '涧下水': 'Stream Water', '城头土': 'City Wall Earth',
    '白蜡金': 'White Wax Metal', '杨柳木': 'Willow Wood', '泉中水': 'Spring Water', '屋上土': 'Rooftop Earth',
    '霹雳火': 'Thunderbolt Fire', '松柏木': 'Pine & Cypress Wood', '长流水': 'Everflowing Water', '沙中金': 'Sand Metal',
    '山下火': 'Foothill Fire', '平地木': 'Plains Wood', '壁上土': 'Wall Earth', '金箔金': 'Gold Foil Metal',
    '覆灯火': 'Lamp Flame Fire', '天河水': 'Celestial River Water', '大驿土': 'Post Station Earth', '钗钏金': 'Hairpin Metal',
    '桑柘木': 'Mulberry Wood', '大溪水': 'Great Stream Water', '沙中土': 'Sand Earth', '天上火': 'Heavenly Fire',
    '石榴木': 'Pomegranate Wood', '大海水': 'Ocean Water'
  };

  function getPillarEn(pillar) {
    if (!pillar) return '';
    const s = STEM_NAMES_EN[pillar.stem] || pillar.stem || '';
    const b = BRANCH_NAMES_EN[pillar.branch] || pillar.branch || '';
    return `${s} / ${b}`;
  }

  const TEN_GOD_EN = {
    '正官': 'Direct Officer', '七杀': 'Seven Killings', '偏官': 'Seven Killings',
    '正印': 'Direct Resource', '偏印': 'Indirect Resource', '印绶': 'Resource',
    '比肩': 'Companion', '劫财': 'Rob Wealth', '建禄': 'Established Lu', '阳刃': 'Yang Blade',
    '食神': 'Eating God', '伤官': 'Hurting Officer',
    '正财': 'Direct Wealth', '偏财': 'Indirect Wealth'
  };

  function getTenGodEn(god) {
    if (!god) return 'Harmonious';
    if (typeof I18N !== 'undefined' && typeof I18N.getGod === 'function') {
      const res = I18N.getGod(god, 'en');
      if (res && !/[\u4e00-\u9fa5]/.test(res)) return res;
    }
    return TEN_GOD_EN[god] || 'Noble Element';
  }

  /**
   * Evaluate Chinese Zodiac Compatibility (生肖合婚与冲合吉凶)
   * Strictly based on Year Earthly Branches (pA.year.branch, pB.year.branch)
   */
  function evaluateZodiacMatch(branchA, branchB, isRomantic, isEn) {
    const aniA = ZODIAC_ANIMALS[branchA] || { zh: '龙', en: 'Dragon', branchEn: 'Chen' };
    const aniB = ZODIAC_ANIMALS[branchB] || { zh: '鸡', en: 'Rooster', branchEn: 'You' };
    const pair = branchA + branchB;
    const revPair = branchB + branchA;

    // 1. Same Zodiac (同生肖 / 比肩同气) - Evaluated first so identical branches never trigger punishment!
    if (branchA === branchB) {
      const isSelfPunish = ['辰', '午', '酉', '亥'].includes(branchA);
      const titleZh = `【生肖同气 · ${aniA.zh}${aniB.zh}齐心】`;
      const titleEn = `[Same Zodiac · Twin ${aniA.en} Alignment]`;
      const descZh = isSelfPunish
        ? `两造生肖同为【${aniA.zh}】。同龄同根，对时代浪潮与人生大势感悟高度契合；古法相书提示此支兼带自刑之气，双方皆极有主见与原则，相处宜多包容体谅，遇事各退半步，以柔克刚。`
        : `两造生肖同为【${aniA.zh}】。同龄同根，对时代浪潮与人生阶段感悟极为契合，话题投机；宜在共同的性格盲点上互相提醒督促，携手共进。`;
      const descEn = isSelfPunish
        ? `Both share the identical Zodiac sign (${aniA.en}). Shared generational perspective fosters natural rapport and shared values; classical texts note this branch carries self-punishment tendencies, advising mutual flexibility and conscious yielding over stubborn pride.`
        : `Both share the identical Zodiac sign (${aniA.en}). Shared generational outlook fosters effortless rapport and mutual empathy; mindful awareness of shared blind spots preserves lifelong harmony.`;
      return {
        type: 'same_zodiac',
        scoreDelta: isSelfPunish ? 4 : 6,
        badgeZh: '生肖同气',
        badgeEn: 'Same Zodiac',
        titleZh, titleEn, descZh, descEn,
        classicalOriginZh: isSelfPunish ? '《渊海子平》论生肖比肩与自刑解化篇' : '《三命通会》论生肖比肩同气篇',
        classicalOriginEn: isSelfPunish ? 'Yuan Hai Zi Ping: Treatise on Shared Roots and Self-Restraint' : 'San Ming Tong Hui: Affinity of Shared Zodiac Roots'
      };
    }

    // 2. Check Six Harmonies (六合)
    if (BRANCH_SIX_HARMONIES[pair]) {
      const harm = BRANCH_SIX_HARMONIES[pair];
      const titleZh = `【生肖六合 · ${aniA.zh}${aniB.zh}合吉】`;
      const titleEn = `[Six Harmonies · ${aniA.en} & ${aniB.en} Alliance]`;
      const descZh = `两造生肖逢【${branchA}${branchB}六合】化${harm.elementZh}（${aniA.zh}与${aniB.zh}相合）。古法相书《李虚中命书》云：“合者气聚，生肖相投，家道隆昌。”双方从根基上具有极高天然亲和力与信任度，家庭资产稳固，能共同担待风雨。`;
      const descEn = `Both Zodiac coordinates form an aligned harmonic coupling (${aniA.en} & ${aniB.en} merge into ${harm.elementEn}). Relational dynamics (Robert Hand's Planets in Composite): "Cohesive harmonic pairing anchors lasting structural stability." High relational affinity and baseline trust allow both partners to weather life's storms with unified loyalty.`;
      return {
        type: 'six_harmony',
        scoreDelta: 12,
        badgeZh: '生肖六合',
        badgeEn: 'Six Harmonies',
        titleZh, titleEn, descZh, descEn,
        classicalOriginZh: '《李虚中命书》卷中 · 六合贵人篇',
        classicalOriginEn: 'Robert Hand: Composite Harmonic Coupling & Stability'
      };
    }

    // 3. Check Three Harmonies (三合局)
    for (let triad of THREE_HARMONIES) {
      if (triad.branches.includes(branchA) && triad.branches.includes(branchB) && branchA !== branchB) {
        const titleZh = `【生肖三合 · ${aniA.zh}${aniB.zh}同盟】`;
        const titleEn = `[Three Harmonies · ${aniA.en} & ${aniB.en} Triad]`;
        const descZh = `两造生肖同入【${triad.nameZh}】（${aniA.zh}与${aniB.zh}）。《渊海子平》誉为“同气连枝，长生共济”。气机相引，目标高度一致，尤其在长期奋斗、事业拓荒与财富积累中能形成强大协同合力。`;
        const descEn = `Both Zodiac coordinates align in the 120-degree trine formation (${triad.nameEn}). Addey's wave mechanics honors the 3rd harmonic as effortless resonant flow. High commonality in ambition and shared cyclic rhythm compounding wealth and mutual achievements.`;
        return {
          type: 'three_harmony',
          scoreDelta: 10,
          badgeZh: '生肖三合',
          badgeEn: 'Three Harmonies',
          titleZh, titleEn, descZh, descEn,
          classicalOriginZh: '《渊海子平》三合水木火金局全编',
          classicalOriginEn: 'John M. Addey: 3rd Harmonic Trine Resonance & Vector Triads'
        };
      }
    }

    // 4. Check Six Clashes (六冲)
    if (BRANCH_SIX_CLASHES[pair]) {
      const clash = BRANCH_SIX_CLASHES[pair];
      const titleZh = `【生肖逢冲 · ${aniA.zh}${aniB.zh}对冲】`;
      const titleEn = `[Zodiac Clash · ${aniA.en} vs ${aniB.en} Divergence]`;
      const descZh = `两造生肖逢【${branchA}${branchB}相冲】（${aniA.zh}冲${aniB.zh}，${clash.nameZh}）。《玉照定真经》云：“年冲根动，防秉性相左。”二人原生家庭背景或性格习惯存在显著反差，需建立尊重彼此习惯的防火墙，以包容化解冲克。`;
      const descEn = `Both Zodiac signs form a direct Six Clash (${aniA.en} vs ${aniB.en}, ${clash.nameEn}). Yu Zhao Ding Zhen Jing warns: "When roots clash, baseline temperaments collide." Differences in upbringing or routine habits require conscious patience and dedicated decompression space.`;
      return {
        type: 'six_clash',
        scoreDelta: -10,
        badgeZh: '生肖相冲',
        badgeEn: 'Zodiac Clash',
        titleZh, titleEn, descZh, descEn,
        classicalOriginZh: '《玉照定真经》支位刑冲直断篇',
        classicalOriginEn: 'Yu Zhao Ding Zhen Jing: Direct Judgments on Branch Confrontations'
      };
    }

    // 5. Check Six Harms (六害)
    if (BRANCH_HARMS[pair]) {
      const harm = BRANCH_HARMS[pair];
      const titleZh = `【生肖逢害 · ${aniA.zh}${aniB.zh}相害】`;
      const titleEn = `[Zodiac Harm · ${aniA.en} & ${aniB.en} Friction]`;
      const descZh = `两造生肖逢【${branchA}${branchB}相害】（${harm.nameZh}）。古籍提示相处中防暗流内耗或细节琐事猜忌。化解法则：凡事直言相告，杜绝含蓄冷战，以阳光透明的沟通化解暗伤。`;
      const descEn = `Both Zodiac signs interact through Branch Harm (${harm.nameEn}). Classical texts caution against passive-aggressive friction and unvoiced expectations. The remedy lies in complete transparency and open dialogue.`;
      return {
        type: 'harm',
        scoreDelta: -6,
        badgeZh: '生肖逢害',
        badgeEn: 'Zodiac Harm',
        titleZh, titleEn, descZh, descEn,
        classicalOriginZh: '《三命通会》论六害篇',
        classicalOriginEn: 'San Ming Tong Hui: Treatise on the Six Branch Harms'
      };
    }

    // 6. Check Punishments (相刑) - Strictly requires branchA !== branchB
    for (let pRule of BRANCH_PUNISHMENTS) {
      if (pRule.branches.includes(branchA) && pRule.branches.includes(branchB) && branchA !== branchB) {
        const titleZh = `【生肖相刑 · ${aniA.zh}${aniB.zh}互刑】`;
        const titleEn = `[Zodiac Punishment · ${aniA.en} & ${aniB.en} Friction]`;
        const descZh = `两造生肖逢【${pRule.nameZh}】（${aniA.zh}与${aniB.zh}）。相处时若遇执拗争执，易互不妥协。《神峰通考》提示须以柔克刚，切忌因面子问题升级事端。`;
        const descEn = `Both Zodiac signs trigger Branch Punishment (${pRule.nameEn} between ${aniA.en} and ${aniB.en}). In heated disputes, pride can prolong deadlocks. Shen Feng Tong Kao recommends flexibility over rigid confrontation.`;
        return {
          type: 'punishment',
          scoreDelta: -5,
          badgeZh: '生肖相刑',
          badgeEn: 'Zodiac Punishment',
          titleZh, titleEn, descZh, descEn,
          classicalOriginZh: '《神峰通考》刑克化解全览',
          classicalOriginEn: 'Shen Feng Tong Kao: Resolution of Branch Punishments'
        };
      }
    }

    // 7. Elemental Generation
    const elA = ELEMENT_MAP[branchA];
    const elB = ELEMENT_MAP[branchB];
    const enElA = ELEMENT_NAMES_EN[elA];
    const enElB = ELEMENT_NAMES_EN[elB];

    const isGen = (
      (elA === '水' && elB === '木') || (elB === '水' && elA === '木') ||
      (elA === '木' && elB === '火') || (elB === '木' && elA === '火') ||
      (elA === '火' && elB === '土') || (elB === '火' && elA === '土') ||
      (elA === '土' && elB === '金') || (elB === '土' && elA === '金') ||
      (elA === '金' && elB === '水') || (elB === '金' && elA === '水')
    );

    if (isGen) {
      const titleZh = `【生肖相生 · ${aniA.zh}${aniB.zh}滋养】`;
      const titleEn = `[Elemental Generation · ${aniA.en} & ${aniB.en} Nourishment]`;
      const descZh = `两造生肖地支五行【${elA}】与【${elB}】形成相生循环（${aniA.zh}与${aniB.zh}）。《滴天髓》称“生生不息，源远流长”，彼此能给予温和支撑，属于稳健温润之吉配。`;
      const descEn = `The Zodiac Earthly Branches (${enElA} & ${enElB}) form a generating cycle between ${aniA.en} and ${aniB.en}. Di Tian Sui praises this as "enduring vitality flowing from natural roots," providing steady, gentle mutual support.`;
      return {
        type: 'generating',
        scoreDelta: 6,
        badgeZh: '生肖相生',
        badgeEn: 'Elemental Support',
        titleZh, titleEn, descZh, descEn,
        classicalOriginZh: '《滴天髓》地支承载篇',
        classicalOriginEn: 'Di Tian Sui: Foundations of Terrestrial Support'
      };
    }

    // 8. Default neutral
    const titleZh = `【生肖平顺 · ${aniA.zh}${aniB.zh}相敬】`;
    const titleEn = `[Zodiac Harmony · ${aniA.en} & ${aniB.en} Balance]`;
    const descZh = `两造生肖【${aniA.zh}】与【${aniB.zh}】无严苛刑冲克害，气脉平顺中正。相处自足从容，重在后天心性修持与共同生活目标的经营。`;
    const descEn = `The Zodiac branches of ${aniA.en} and ${aniB.en} interact peacefully without structural clashes or severe penalties. Daily rapport flourishes through mutual appreciation and shared values.`;
    return {
      type: 'neutral',
      scoreDelta: 3,
      badgeZh: '生肖中平',
      badgeEn: 'Peaceful Balance',
      titleZh, titleEn, descZh, descEn,
      classicalOriginZh: '《李虚中命书》平和安和篇',
      classicalOriginEn: 'Li Xu Zhong Ming Shu: Principles of Serene Co-existence'
    };
  }

  /**
   * Comprehensive Eight Canons Synastry Deep Synthesis (八经合盘互参全息战报)
   */
  function generateEightCanonsSynthesis(chartA, chartB, pA, pB, dmElemA, dmElemB, hasStemCombo, hasSixHarmony, hasSixClash, mutualGifts, isRomantic, isEn, crossClashes = [], crossPunishments = [], zMatch = {}) {
    const dmA = chartA.dayMaster;
    const dmB = chartB.dayMaster;
    const mBranchA = pA.month.branch;
    const mBranchB = pB.month.branch;
    const dayBranchA = pA.day.branch;
    const dayBranchB = pB.day.branch;

    const generates = { '木': '火', '火': '土', '土': '金', '金': '水', '水': '木' };
    const controls = { '木': '土', '土': '水', '水': '火', '火': '金', '金': '木' };

    // 1. Di Tian Sui (《滴天髓》) - Day Master Vitality & Pure Circulation
    let dtsZh = '';
    let dtsEn = '';
    if (hasStemCombo) {
      dtsZh = `【天干正化·纯粹流通】两造日主逢天干正合，依《滴天髓》“顺则吉兮逆则悖，纯粹流通者上贵”之旨，双方心性暗合、神识相投，天然具备无声默契，能化驳杂气机为中正清纯之质。`;
      dtsEn = `[Dane Rudhyar · Phase Resonance & Conjunction] The Day vectors form a synergetic conjunctional polarity. Cyclic wave dynamics affirms that harmonious phase alignment effortlessly transmutes differing temperaments into coherent shared momentum.`;
    } else if (dmElemA === dmElemB) {
      dtsZh = `【同气相求·比和共振】两造日元同禀【${dmElemA}】气，依《滴天髓》“同类相求，其应相投”之论，三观底色高度契合，目标协同一致；日常只需包容各自相似的性格固执，即可长久稳固。`;
      dtsEn = `[Dane Rudhyar · Harmonic In-Phase Resonance] Both Day vectors vibrate at an identical elemental frequency (${ELEMENT_NAMES_EN[dmElemA]}). In-phase wave dynamics indicates that core outlooks and life rhythms naturally align; mutual flexibility during minor friction maintains lasting equilibrium.`;
    } else if (generates[dmElemA] === dmElemB || generates[dmElemB] === dmElemA) {
      dtsZh = `【相生相契·润物生生】甲造【${dmA}】(${dmElemA})与乙造【${dmB}】(${dmElemB})日元相生，依《滴天髓》“相生为本，化生不绝”之训，一方主动滋养，一方欣然包容，形成自洽互惠的情感回环。`;
      dtsEn = `[Dane Rudhyar · Generative Phase Cycle] The Day vectors (${ELEMENT_NAMES_EN[dmElemA]} and ${ELEMENT_NAMES_EN[dmElemB]}) form a regenerative energetic circuit. Cyclic dynamics reveals an enduring, self-renewing loop of active nourishment and mutual encouragement.`;
    } else {
      dtsZh = `【刚柔互济·克以成器】甲造【${dmA}】(${dmElemA})与乙造【${dmB}】(${dmElemB})日元相制，依《滴天髓》“刚柔得中，制化为妙”之意，虽见棱角碰撞，却能化为彼此查漏补缺的明镜，相敬相成。`;
      dtsEn = `[Dane Rudhyar · Complementary Phase Tension] The Day vectors (${ELEMENT_NAMES_EN[dmElemA]} and ${ELEMENT_NAMES_EN[dmElemB]}) generate constructive tension. Creative polarity acts as a dynamic mirror, refining blind spots into seasoned executive maturity.`;
    }

    // 2. Qiong Tong Bao Jian (《穷通宝鉴》) - Seasonal Thermal Equilibrium
    const winterBranches = ['亥', '子', '丑'];
    const summerBranches = ['巳', '午', '未'];
    const isWinterA = winterBranches.includes(mBranchA);
    const isSummerA = summerBranches.includes(mBranchA);
    const isWinterB = winterBranches.includes(mBranchB);
    const isSummerB = summerBranches.includes(mBranchB);

    let qtZh = '';
    let qtEn = '';
    if ((isWinterA && isSummerB) || (isSummerA && isWinterB)) {
      qtZh = `【寒暖互济·雪消春融】一造生于冬寒，一造生于夏暑。《穷通宝鉴》奉“寒暖得中”为至高生机：夏火消解冬寒，冬水润泽炎燥。双盘合璧如冰原逢春，互为最珍贵的调候吉星。`;
      qtEn = `[William Lilly · Thermal Equilibrium & Temperament] One partner embodies cool winter condensation and the other radiates summer solar heat. Classical astrometeorology prizes thermal homeostasis: warming heat disperses damp chill while cooling moisture moderates solar intensity, establishing supreme vitality.`;
    } else if (isWinterA && isWinterB) {
      qtZh = `【双冬相聚·自引暖阳】两造同生于冬月，水凝土冻。《穷通宝鉴》云：“冬寒之局，专赖火阳。”双方性格皆深沉内敛，宜在生活与事业中主动注入温情、幽默与开朗心境，共御寒凉。`;
      qtEn = `[William Lilly · Shared Nocturnal Depth] Both partners carry cool, introspective seasonal temperaments. Astrometeorology counsels introducing conscious warmth, shared passion, and radiant optimism to keep vitality circulating.`;
    } else if (isSummerA && isSummerB) {
      qtZh = `【双夏相遇·喜润清泉】两造同生于夏月，气象炎烈。《穷通宝鉴》云：“夏热之火，喜泽以润。”双方决断迅捷但易急躁，相处需常持虚静包容，以沉静理智化解无名火气。`;
      qtEn = `[William Lilly · Solar Brilliance & Tempering] Both partners carry high thermal momentum. Astrometeorological doctrine advises soothing moisture and deliberate calm to temper fast-paced intensity with patience.`;
    } else {
      qtZh = `【春秋舒展·气象从容】两造月令节气顺行相生，《穷通宝鉴》称之“燥湿得宜，万物繁祉”。生活起居气场协调，作息与精力节律高度互洽，少有突兀波动。`;
      qtEn = `[William Lilly · Harmonious Temperament Flow] Seasonal temperaments interact without extreme weather volatility. Classical astrometeorological balance ensures daily lifestyle rhythms and natural vitality align effortlessly.`;
    }

    // 3. Zi Ping Zhen Quan (《子平真诠》) - Pattern Synergy & Ten Gods Mutual Defense
    const monthGodA = pA.month.stemGod || '';
    const monthGodB = pB.month.stemGod || '';
    const isUsefulHelp = mutualGifts && mutualGifts.length > 0;

    let zpZh = '';
    let zpEn = '';
    if (isUsefulHelp) {
      const giftNames = [...new Set(mutualGifts.map(g => g.element))].join('、');
      const giftNamesEn = [...new Set(mutualGifts.map(g => g.elementEn))].join(', ');
      zpZh = `【成格救应·喜用互济】《子平真诠》定论：“格局用神，专求月令；相生相制，成格救应。”双盘交互中，一方之丰沛恰为另一方原局所求之喜用（互补【${giftNames}】气）。彼此互为破格之解药，事业合作与家庭经营均能借力化阻、相辅相成。`;
      zpEn = `[Ebertin & Hand · Structural Midpoint Complementarity] Cosmobiological dynamics states: "Systemic balance emerges when partner vectors complete each other's stabilizing midpoint axes." Partner strengths supply crucial balancing factors (${giftNamesEn}), shielding against natal vulnerabilities and elevating shared career and life achievements.`;
    } else {
      const godAEn = getTenGodEn(monthGodA);
      const godBEn = getTenGodEn(monthGodB);
      zpZh = `【格局相成·各司其职】《子平真诠》论格局之道：“成中有败，败中有成，全赖救应。”甲造月令显【${monthGodA || '正气'}】，乙造显【${monthGodB || '和顺'}】。二人心智各有侧重，一者长于战略决策，一者精于细致落实，彼此尊重专业分工即可稳步成势。`;
      zpEn = `[Ebertin & Hand · Role Vector Equilibrium] Midpoint dynamics teaches that operational harmony arises through coordinated division of labor. Person A's focus (${godAEn} drive) pairs naturally with Person B's strengths (${godBEn} care). Clear operational division ensures sustained momentum.`;
    }

    // 4. San Ming Tong Hui (《三命通会》) - Na-Yin Melody & Noble Stars
    const naYinA = pA.year.naYin || '';
    const naYinB = pB.year.naYin || '';
    const naYinAEn = NAYIN_NAMES_EN[naYinA] || naYinA;
    const naYinBEn = NAYIN_NAMES_EN[naYinB] || naYinB;
    const elNaYinA = naYinA ? naYinA.slice(-1) : '';
    const elNaYinB = naYinB ? naYinB.slice(-1) : '';

    let nayinRelZh = '律吕相安';
    let nayinRelEn = 'melodic unison';
    if (elNaYinA && elNaYinB) {
      if (elNaYinA === elNaYinB) {
        nayinRelZh = `五行同归【${elNaYinA}】，律吕同鸣`;
        nayinRelEn = `both resonate in the ${ELEMENT_NAMES_EN[elNaYinA] || elNaYinA} element in harmonic unison`;
      } else if (generates[elNaYinA] === elNaYinB || generates[elNaYinB] === elNaYinA) {
        nayinRelZh = `逢【${elNaYinA}与${elNaYinB}】相生流转，气脉相滋`;
        nayinRelEn = `form a natural generating flow (${ELEMENT_NAMES_EN[elNaYinA] || elNaYinA} & ${ELEMENT_NAMES_EN[elNaYinB] || elNaYinB})`;
      } else {
        nayinRelZh = `五行刚柔并济，互为砥砺`;
        nayinRelEn = `create complementary dynamic tension (${ELEMENT_NAMES_EN[elNaYinA] || elNaYinA} & ${ELEMENT_NAMES_EN[elNaYinB] || elNaYinB})`;
      }
    }

    // Tian Yi Noble check
    const branchesB = [pB.year.branch, pB.month.branch, pB.day.branch, pB.hour.branch];
    const branchesA = [pA.year.branch, pA.month.branch, pA.day.branch, pA.hour.branch];
    const tianYiA = [...new Set([...(TIAN_YI_TABLE[dmA] || []), ...(TIAN_YI_TABLE[pA.year.stem] || [])])];
    const tianYiB = [...new Set([...(TIAN_YI_TABLE[dmB] || []), ...(TIAN_YI_TABLE[pB.year.stem] || [])])];
    const bHasNobleForA = tianYiA.some(b => branchesB.includes(b));
    const aHasNobleForB = tianYiB.some(b => branchesA.includes(b));

    let nobleDescZh = '';
    let nobleDescEn = '';
    if (bHasNobleForA && aHasNobleForB) {
      nobleDescZh = '四柱互坐天乙贵人，双向逢凶化吉';
      nobleDescEn = 'both partners carry mutual Tian Yi Noble stars for each other';
    } else if (bHasNobleForA) {
      nobleDescZh = '乙造四柱带甲造天乙贵人，多有提携托底之功';
      nobleDescEn = 'Person B provides Tian Yi Noble star support for Person A';
    } else if (aHasNobleForB) {
      nobleDescZh = '甲造四柱带乙造天乙贵人，常为破局转运之助';
      nobleDescEn = 'Person A provides Tian Yi Noble star support for Person B';
    } else {
      nobleDescZh = '四柱气象中和，福德相承';
      nobleDescEn = 'pillars maintain steady, auspicious balance';
    }

    const smZh = `【纳音正律·贵人互照】甲造年命纳音【${naYinA}】，乙造年命纳音【${naYinB}】（${nayinRelZh}；${nobleDescZh}）。《三命通会》定论：“纳音本乎律吕，贵人照命则灾晦潜消。”二人在重大人生关头能互为转运福星与情绪减震器。`;
    const smEn = `[John M. Addey · Harmonic Resonance & Benefic Vectors] Person A's foundational harmonic [${naYinAEn}] meets Person B's [${naYinBEn}] (${nayinRelEn}; ${nobleDescEn}). Wave mechanics affirms that consonant acoustic overtones and benefic vectors dissolve adversity and sustain lifelong stability. Partners serve as reliable benefactors and emotional anchors during life's turning points.`;

    // 5. Yuan Hai Zi Ping (《渊海子平》) - Spouse Palace Alignment
    let yhZh = '';
    let yhEn = '';
    if (dayBranchA === dayBranchB) {
      yhZh = `【日支比和·知己同心】两造夫妻宫同为【${dayBranchA}】，《渊海子平》论夫妻宫“坐下同气，知根知底”。日常起居观念相通，在核心价值观上没有不可逾越的鸿沟；需注意包容彼此共有的小固执。`;
      yhEn = `[Robert Hand · Composite Relational Parity] Both share matching relational axes [${BRANCH_PINYIN[dayBranchA]}]. Composite chart dynamics reveals identical domestic expectations and lifestyle rhythms. Conscious awareness of shared blind spots preserves lasting harmony.`;
    } else if (BRANCH_SIX_HARMONIES[dayBranchA + dayBranchB]) {
      yhZh = `【日支六合·举案齐眉】极贵之相！两造日支夫妻宫逢【${dayBranchA}${dayBranchB}六合】。《渊海子平》奉夫妻宫相合为合婚之首善：日支代表最私密的情感世界与家庭底盘，六合象征身心相依、休戚与共。`;
      yhEn = `[Robert Hand · Supreme Composite Axis Coupling] Highly auspicious: relational axes form exact harmonic coupling. Hand's composite theory identifies this as the ideal foundation for lasting partnership: private temperaments align seamlessly and mutual loyalty remains unshakeable.`;
    } else if (BRANCH_SIX_CLASHES[dayBranchA + dayBranchB]) {
      yhZh = `【日支逢冲·分工明晰】两造日支夫妻宫逢【${dayBranchA}${dayBranchB}冲】。《渊海子平》提示“宫位逢冲，宜分工自立”。日常生活中应避免对彼此琐事强行管控，划定各自负责板块，以信任和留白化解冲撞。`;
      yhEn = `[Robert Hand · Dynamic Relational Polarity] Relational axes create an active 180-degree polarity. Composite dynamics advises clear domain ownership: respecting personal boundaries turns structural differences into complementary strengths.`;
    } else {
      yhZh = `【宫位相安·水到渠成】两造日支五行相安顺生，《渊海子平》云：“日支安泰，家道隆昌。”双方情感平实厚重，不易受外界纷扰侵蚀，具备长期经营家庭或联盟的稳固底盘。`;
      yhEn = `[Robert Hand · Stable Composite Anchor] Relational axes interact without destructive interference. Composite dynamics confirms that tranquil domestic foundations preserve loyalty and emotional longevity.`;
    }

    // 6. Shen Feng Tong Kao (《神峰通考》) - Pathology & Medicinal Remedy
    let sfZh = '';
    let sfEn = '';
    if (mutualGifts && mutualGifts.length > 0) {
      sfZh = `【病药相济·互为解药】《神峰通考》定论：“格中如去病，财禄两相随。”单盘原局之匮乏即为“病”，对方气场之充盛恰为对症下药之“药”。双盘交互中，${mutualGifts.map(g => g.descZh).join('；')}。二者交融，恰如枯木得霖，彼此治愈盲点，成就共同跃升。`;
      sfEn = `[Reinhold Ebertin · Structural Midpoint Compensation] Cosmobiological dynamics demonstrates: "When structural stress vectors meet their exact compensatory counterweight, systemic resilience and enduring achievement follow." Partner vectors supply crucial stabilizing factors: ${mutualGifts.map(g => g.descEn).join('; ')}. Converting vulnerabilities into mutual resilience unlocks breakthrough growth.`;
    } else {
      sfZh = `【气象纯粹·自足自生】《神峰通考》云：“原局无重病，中和即是福。”两造五行分布均相对均衡平顺，无严苛匮乏与偏枯。双方自立自强，既能独立独行，亦能并肩协作，属于低消耗、高耐力的从容组合。`;
      sfEn = `[Reinhold Ebertin · Balanced Systemic Equilibrium] Cosmobiological analysis confirms: "Balanced midpoint distributions without acute stress vectors sustain tranquil endurance." Both charts maintain harmonious equilibrium, enabling independent sovereignty and seamless synergy.`;
    }

    // 7. Yu Zhao Ding Zhen Jing (《玉照定真经》) - Microscopic Boundary Safeguards
    let yzZh = '';
    let yzEn = '';
    const hasClashes = (crossClashes && crossClashes.length > 0) || hasSixClash || (crossPunishments && crossPunishments.length > 0);
    if (hasClashes) {
      yzZh = `【微观防卫·克制冲克】《玉照定真经》专察隐微吉凶：“吉凶悔吝生乎动，刑冲破害见精微。”双盘提示支位存有冲克之机，相处大忌在疲惫冲动时宣泄情绪或触碰敏感情结。践行“争执不过夜、就事论事、不翻旧账”三大铁律，即可化干戈为玉帛。`;
      yzEn = `[Ptolemy & Valens · Micro-Aspect Inconjunct Protocols] Micro-orbital tensions precede overt discord. Tracking subtle friction before escalation and observing strict ground rules—addressing tensions promptly without dredging past grievances—protects relationship integrity.`;
    } else {
      yzZh = `【微观清纯·见微知著】《玉照定真经》专推支位纯粹之象。双盘干支交互无严苛刑冲，气象清正平顺。相处之道重在日常坦诚沟通，防微杜渐，以日积月累的细水长流守护温情。`;
      yzEn = `[Ptolemy & Valens · Pristine Aspectual Alignment] Unclouded angular relations provide frictionless synergy. Maintaining transparent, candid dialogue and clarifying doubts early keeps relational connection effortless.`;
    }

    // 8. Li Xu Zhong Ming Shu (《李虚中命书》) - Ancient Three-Pillars Bedrock
    let lxzZh = '';
    let lxzEn = '';
    const zType = zMatch.type || '';
    if (zType === 'six_harmony' || zType === 'three_harmony' || zType === 'same_zodiac') {
      lxzZh = `【三元同契·因缘深固】唐代命学始祖李虚中立天元、地元、人元三才大道，重在年基相合。两造生肖与年基相引相投，表征二人具备坚实的命运底盘与宿世默契，能在数十年岁月长河中休戚与共、同舟共济。`;
      lxzEn = `[Hellenistic Time-Lords · Longitudinal Lineage Vectors] Deep foundational roots interlock in generational harmony, establishing an unshakeable bond capable of weathering shifting life seasons.`;
    } else if (zType === 'six_clash' || zType === 'punishment') {
      lxzZh = `【三元调摄·自立家门】唐代李虚中以年柱立根基。两造年支逢冲刑，表征各自原生家庭背景或早期习惯存在反差。相处宜注重建立属于两人的独立生活规则与精神空间，以理解化解背景差异。`;
      lxzEn = `[Hellenistic Time-Lords · Independent Root Calibration] Foundational lineage roots carry contrasting generational scripts. Constructing independent household routines and shared new traditions turns disparate backgrounds into mutual enrichment.`;
    } else {
      lxzZh = `【三元中正·基业安泰】唐代命学始祖李虚中立三才之基。两造年柱平稳中和，气脉相顾，非一时冲动之聚，具备稳健经营家庭或事业联盟的长远韧性。`;
      lxzEn = `[Hellenistic Time-Lords · Enduring Foundational Anchor] Time-lord analysis reveals stable generational bedrock, ensuring an enduring alliance capable of compounding growth through every phase of life.`;
    }

    // Summary
    const summaryZh = `八大经典通考汇流：两造在纯粹气机（滴天髓）、节气调候（穷通宝鉴）、格局救应（子平真诠）与病药互补（神峰通考）上均显现出深厚互利价值；只要依玉照经所诫守住微观沟通边界，必能成就兼济天下的长青合相。`;
    const summaryEn = `Comprehensive Eight Canons Matrix: Both charts achieve strong synergy across vital circulation (Rudhyar Phase Dynamics), thermal balance (Lilly Astrometeorology), pattern rescue (Ebertin Cosmobiology), and medicinal remedies (Systemic Equilibrium). Honoring communication boundaries ensures lifelong mutual compounding.`;

    const canonsZh = [
      { nameZh: '《滴天髓》纯粹气机论', canonZh: '“五阳皆阳丙为最，五阴皆阴癸为至；戴天履地人为贵，顺则吉兮逆则悖。”', analysisZh: dtsZh },
      { nameZh: '《穷通宝鉴》时令调候论', canonZh: '“天道有寒暖，发育万物；人道有燥湿，成全品类。”', analysisZh: qtZh },
      { nameZh: '《子平真诠》成格救应论', canonZh: '“格局用神，专求月令；相生相制，成格救应。”', analysisZh: zpZh },
      { nameZh: '《三命通会》纳音正律篇', canonZh: '“纳音五行，本乎律吕；声气相求，贵人照命。”', analysisZh: smZh },
      { nameZh: '《渊海子平》配偶宫位篇', canonZh: '“日主为己，坐下为妻；相生相合，家道隆昌。”', analysisZh: yhZh },
      { nameZh: '《神峰通考》病药相济说', canonZh: '“有病方为贵，无伤不是奇；格中如去病，财禄两相随。”', analysisZh: sfZh },
      { nameZh: '《玉照定真经》微观防卫篇', canonZh: '“吉凶悔吝生乎动，刑冲破害见精微；见微知著，防微杜渐。”', analysisZh: yzZh },
      { nameZh: '《李虚中命书》三元禄命篇', canonZh: '“天元禄命，地元定基，人元分化；三元合契，千载不磨。”', analysisZh: lxzZh }
    ];

    const canonsEn = [
      { nameEn: 'Dane Rudhyar (Phase Dynamics & Cyclic Resonance)', canonEn: '"When vital phase currents flow in harmony, synergetic resonance emerges."', analysisEn: dtsEn },
      { nameEn: 'William Lilly (Astrometeorological Homeostasis)', canonEn: '"Nature balances thermal extremes to nourish life; relational systems require equilibrium."', analysisEn: qtEn },
      { nameEn: 'Reinhold Ebertin (Cosmobiology & Midpoints)', canonEn: '"Authentic achievement arises when one partner supplies the pivotal stabilizing midpoint vector."', analysisEn: zpEn },
      { nameEn: 'John M. Addey (Harmonics & Overtones)', canonEn: '"Harmonic wave superpositions echo natural law; consonant overtones generate mutual nobility."', analysisEn: smEn },
      { nameEn: 'Robert Hand (Composite Relational Synthesis)', canonEn: '"The composite relational core anchors domestic peace and emotional stability across decades."', analysisEn: yhEn },
      { nameEn: 'Dynamic Equilibrium (Systemic Medicine)', canonEn: '"Strength emerges when structural defects find their counterweight; mutual remedies unlock breakthrough."', analysisEn: sfEn },
      { nameEn: 'Ptolemaic Aspectarium (Micro-Aspect Boundaries)', canonEn: '"Micro-orbital frictions precede overt ruptures; observe early signals to neutralize tension."', analysisEn: yzEn },
      { nameEn: 'Hellenistic Time-Lords (Generational Vectors)', canonEn: '"When foundational time-lord roots align, companionship endures across shifting life seasons."', analysisEn: lxzEn }
    ];

    return {
      titleZh: '八大经典合盘互参全息战报',
      titleEn: 'Eight Classical Canons Synastry Matrix',
      summaryZh,
      summaryEn,
      canonsZh,
      canonsEn
    };
  }

  /**
   * Zen & Dao Trinity Relationship Counsel (三经调和化解之道：金刚经 · 坛经 · 庄子)
   */
  function generateZenDaoCounsel(chartA, chartB, isRomantic, isEn) {
    const diamondZh = {
      title: '《金刚经》应无所住 · 破除“我相与人相”执念',
      quote: '“凡所有相，皆是虚妄。若见诸相非相，则见如来。”“应无所住而生其心。”',
      counsel: isRomantic
        ? '亲密关系最深的消耗，在于执着于“我相”（我必须事事正确）与“人相”（对方必须成为我幻想中的完美伴侣）。金刚经开示：放下预设的标准与改造欲。在情绪冲撞的瞬间，观想怒火犹如梦幻泡影，应无所住，人在当下，以纯然开放之心接纳对方的不完美。'
        : '商业合伙博弈中，最致命的毒素是创始人小我执念。金刚经开示：将业务真理置于个人面子之上。面对战略分歧，不争一时输赢，对事不对人，应无所住而生智慧，在快速变局中保持空灵决策力。'
    };

    const diamondEn = {
      title: 'Diamond Sutra · Transcending Rigid Ego Expectations',
      quote: '"All conditioned forms and appearances are illusory. When one sees all forms as non-forms, one perceives truth. The mind should abide nowhere to give rise to pure awareness."',
      counsel: isRomantic
        ? 'The deepest relationship friction springs from clinging to ego dogmas ("I must always be right") and projected ideals ("The partner must fit my mental script"). The Diamond Sutra counsels releasing rigid expectations. In heated moments, recognize anger as transient cognitive ripples. Cultivate unconditional presence and love the partner for who they actually are.'
        : 'In business partnerships, founder ego battles kill momentum. The Diamond Sutra instructs placing corporate mission above pride. When strategic debates emerge, detach from personal validation; remain unattached to rigid outcomes to let objective business logic prevail.'
    };

    const platformZh = {
      title: '《六祖坛经》无念为宗 · 当下觉醒与立断旧怨',
      quote: '“本来无一物，何处惹尘埃！”“前念著境即烦恼，后念离境即菩提。”“无念为宗。”',
      counsel: isRomantic
        ? '摧毁感情的隐形杀手是“翻旧账”与反刍过去的委屈。坛经直指自性本空：矛盾一旦协商解决，即刻在心识中彻底清零，绝不在心底堆积负面账簿。每一天清晨醒来，皆以全新的当下清净心相待，不带旧怨余烬。'
        : '团队治理的大忌是带着旧成见共事。坛经以无念为宗：重大决策博弈尘埃落定后，各方必须立即清空心结，全心全意投入执行，绝不在暗中消极怠工或保留怨气。'
    };

    const platformEn = {
      title: 'Platform Sutra · Pure Mind Presence & Clearing the Ledger',
      quote: '"Fundamentally not a single thing exists; where can dust alight! When the prior thought clings to circumstance, affliction arises; when the subsequent thought detaches, awakening is instant."',
      counsel: isRomantic
        ? 'The silent poison of marriage is weaponizing old wounds or keeping a secret grievance scorecard. The Platform Sutra teaches instant renewal: once a debate is resolved, clear the internal ledger entirely. Harbor no residual bitterness. Approach each morning and every conversation as a fresh, untainted encounter.'
        : 'Executive teams collapse when unvoiced past disagreements paralyze execution. The Platform Sutra counsels non-clinging mind: once board decisions are finalized, release all prior debate friction and execute with unified loyalty.'
    };

    const zhuangziZh = {
      title: '《庄子》齐物逍遥 · 包容差异与相忘于江湖',
      quote: '“齐万物以为一。”“乘物以游心，托不得已以养中。”“相濡以沫，不如相忘于江湖。”',
      counsel: isRomantic
        ? '庄子开示大千世界各适其性，不必强求两人步调完全一致。对方的内敛或外向，皆是天道造化。最自在的相处不是窒息般的粘连，而是“乘物以游心”：既在生活风浪中守望相助，又给彼此保留辽阔独立的精神旷野，相伴而自在，相爱而逍遥。'
        : '伟大合伙团队崇尚认知多样性。庄子齐物之境教导：一人锐意开拓如猛虎出林，一人严密风控如磐石砥柱，各显其能、相得益彰，在彼此尊重的自由广阔空间中实现长久共赢。'
    };

    const zhuangziEn = {
      title: 'Zhuangzi · Harmonious Biodiversity & Spacious Freedom',
      quote: '"Equalize all ten thousand things into one whole. Roam freely on the flow of circumstances. Rather than struggling together in dry mud, thrive freely in open waters."',
      counsel: isRomantic
        ? 'Zhuangzi teaches that nature thrives on diverse forms; do not force fish to fly or birds to dive. The highest partnership avoids suffocating enmeshment: stand shoulder-to-shoulder in reality, while granting each other vast sovereign mental space to roam freely and peacefully.'
        : 'Legendary founding pairs celebrate cognitive diversity. Zhuangzi counsels: one aggressively captures new frontiers while the other anchors prudent risk management. Mutual respect for differing talents creates an impenetrable commercial alliance.'
    };

    const synthesisZh = '三经融通真谛：以金刚经破执念，以坛经断旧怨，以庄子享逍遥。参透此三则，纵逢命盘刑冲克害，亦能化烦恼为菩提，筑就坚如磐石的共生纽带。';
    const synthesisEn = 'Trinity Synthesis: Dissolve expectations with the Diamond Sutra, clear grievances with the Platform Sutra, and honor individual autonomy with Zhuangzi. Mastering these three directives transforms relationship friction into enlightened companionship.';

    return {
      titleZh: '三经智慧调和化解之道 (金刚经 · 坛经 · 庄子)',
      titleEn: 'Zen & Dao Trinity Counsel (Diamond Sutra · Platform Sutra · Zhuangzi)',
      synthesisZh,
      synthesisEn,
      diamondZh,
      diamondEn,
      platformZh,
      platformEn,
      zhuangziZh,
      zhuangziEn
    };
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

    // 2. Chinese Zodiac Extraction (Strictly from Year Branch)
    const zBranchA = pA.year.branch;
    const zBranchB = pB.year.branch;
    const zInfoA = ZODIAC_ANIMALS[zBranchA] || { zh: '龙', en: 'Dragon', branchEn: 'Chen' };
    const zInfoB = ZODIAC_ANIMALS[zBranchB] || { zh: '龙', en: 'Dragon', branchEn: 'Chen' };

    const zodiacA = {
      branch: isEn ? zInfoA.branchEn : zBranchA,
      branchEn: zInfoA.branchEn,
      animal: isEn ? zInfoA.en : zInfoA.zh,
      animalEn: zInfoA.en,
      nameEn: `${zInfoA.en} (${zInfoA.branchEn})`,
      labelEn: `Zodiac: ${zInfoA.en} (${zInfoA.branchEn})`,
      ...(!isEn ? {
        branchZh: zBranchA,
        animalZh: zInfoA.zh,
        nameZh: `${zInfoA.zh} (${zBranchA})`,
        labelZh: `生肖属${zInfoA.zh} (${zBranchA})`
      } : {})
    };

    const zodiacB = {
      branch: isEn ? zInfoB.branchEn : zBranchB,
      branchEn: zInfoB.branchEn,
      animal: isEn ? zInfoB.en : zInfoB.zh,
      animalEn: zInfoB.en,
      nameEn: `${zInfoB.en} (${zInfoB.branchEn})`,
      labelEn: `Zodiac: ${zInfoB.en} (${zInfoB.branchEn})`,
      ...(!isEn ? {
        branchZh: zBranchB,
        animalZh: zInfoB.zh,
        nameZh: `${zInfoB.zh} (${zBranchB})`,
        labelZh: `生肖属${zInfoB.zh} (${zBranchB})`
      } : {})
    };

    // Chinese Zodiac Match Evaluation
    const zMatch = evaluateZodiacMatch(zBranchA, zBranchB, isRomantic, isEn);

    // 3. Elemental Synergy & Complementarity
    const elA = (chartA.elements && (chartA.elements.percentages || chartA.elements)) || { '木': 20, '火': 20, '土': 20, '金': 20, '水': 20 };
    const elB = (chartB.elements && (chartB.elements.percentages || chartB.elements)) || { '木': 20, '火': 20, '土': 20, '金': 20, '水': 20 };

    let synergyScore = 65 + (zMatch.scoreDelta || 0);
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

    // Check punishments across both charts (requires participation from both charts)
    const branchesA = [pA.year.branch, pA.month.branch, pA.day.branch, pA.hour.branch];
    const branchesB = [pB.year.branch, pB.month.branch, pB.day.branch, pB.hour.branch];
    BRANCH_PUNISHMENTS.forEach(pRule => {
      const matchA = pRule.branches.filter(b => branchesA.includes(b));
      const matchB = pRule.branches.filter(b => branchesB.includes(b));
      const hasCross = matchA.some(bA => matchB.some(bB => bA !== bB));
      if (hasCross) {
        crossPunishments.push(pRule);
        synergyScore -= 5;
      }
    });

    // Clamp score
    let overallScore = Math.max(42, Math.min(98, Math.round(synergyScore)));

    // 4. Archetype Determination
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

    // 5. Elemental Diagnosis
    const elDiagZh = generateElementalDiagnosis(elA, elB, dmElemA, dmElemB, mutualGifts, false);
    const elDiagEn = generateElementalDiagnosis(elA, elB, dmElemA, dmElemB, mutualGifts, true);

    // 6. Resonance Diagnosis
    const resonanceZh = generateResonanceDiagnosis(pA, pB, hasStemCombo, hasSixHarmony, isRomantic, false);
    const resonanceEn = generateResonanceDiagnosis(pA, pB, hasStemCombo, hasSixHarmony, isRomantic, true);

    // 7. Clash Diagnosis
    const clashDiagZh = generateClashDiagnosis(crossClashes, crossPunishments, isRomantic, false);
    const clashDiagEn = generateClashDiagnosis(crossClashes, crossPunishments, isRomantic, true);

    // 8. Financial Diagnosis
    const financeZh = generateFinancialDiagnosis(chartA, chartB, isRomantic, false);
    const financeEn = generateFinancialDiagnosis(chartA, chartB, isRomantic, true);

    // 9. Eight Canons Synthesis
    const canonsData = generateEightCanonsSynthesis(chartA, chartB, pA, pB, dmElemA, dmElemB, hasStemCombo, hasSixHarmony, hasSixClash, mutualGifts, isRomantic, isEn, crossClashes, crossPunishments, zMatch);

    // 10. Zen & Dao Trinity Counsel
    const zenData = generateZenDaoCounsel(chartA, chartB, isRomantic, isEn);

    // 11. Remedies
    const remediesZh = generateRemedies(chartA, chartB, crossClashes, isRomantic, false);
    const remediesEn = generateRemedies(chartA, chartB, crossClashes, isRomantic, true);

    // 12. Structural Pattern Comparison & Engine Interaction (格局对比与结构性互动)
    const patternComparison = evaluatePatternComparison(chartA, chartB, isRomantic, isEn);

    const archA = getPatternArchetype(patternComparison.dominantA.nameZh || patternComparison.dominantA.name);
    const archB = getPatternArchetype(patternComparison.dominantB.nameZh || patternComparison.dominantB.name);

    const dominantPatternA = {
      rank: 1,
      name: isEn ? (patternComparison.dominantA.nameEn || archA.nameEn) : (patternComparison.dominantA.nameZh || archA.nameZh),
      role: isEn ? (patternComparison.dominantA.roleEn || patternComparison.dominantA.role) : (patternComparison.dominantA.roleZh || patternComparison.dominantA.role),
      weightPct: patternComparison.dominantA.weightPct || 45,
      tier: isEn ? archA.tierEn : archA.tierZh,
      essence: isEn ? archA.essenceEn : archA.essenceZh,
      strengths: isEn ? archA.strengthsEn : archA.strengthsZh,
      blindspots: isEn ? archA.blindspotsEn : archA.blindspotsZh,
      behaviorModel: isEn ? archA.behaviorModelEn : archA.behaviorModelZh,
      nameEn: patternComparison.dominantA.nameEn || archA.nameEn,
      roleEn: patternComparison.dominantA.roleEn || patternComparison.dominantA.role,
      tierEn: archA.tierEn,
      essenceEn: archA.essenceEn,
      strengthsEn: archA.strengthsEn,
      blindspotsEn: archA.blindspotsEn,
      behaviorModelEn: archA.behaviorModelEn,
      ...(!isEn ? {
        nameZh: patternComparison.dominantA.nameZh || archA.nameZh,
        roleZh: patternComparison.dominantA.roleZh || patternComparison.dominantA.role,
        tierZh: archA.tierZh,
        essenceZh: archA.essenceZh,
        strengthsZh: archA.strengthsZh,
        blindspotsZh: archA.blindspotsZh,
        behaviorModelZh: archA.behaviorModelZh
      } : {})
    };

    const dominantPatternB = {
      rank: 1,
      name: isEn ? (patternComparison.dominantB.nameEn || archB.nameEn) : (patternComparison.dominantB.nameZh || archB.nameZh),
      role: isEn ? (patternComparison.dominantB.roleEn || patternComparison.dominantB.role) : (patternComparison.dominantB.roleZh || patternComparison.dominantB.role),
      weightPct: patternComparison.dominantB.weightPct || 45,
      tier: isEn ? archB.tierEn : archB.tierZh,
      essence: isEn ? archB.essenceEn : archB.essenceZh,
      strengths: isEn ? archB.strengthsEn : archB.strengthsZh,
      blindspots: isEn ? archB.blindspotsEn : archB.blindspotsZh,
      behaviorModel: isEn ? archB.behaviorModelEn : archB.behaviorModelZh,
      nameEn: patternComparison.dominantB.nameEn || archB.nameEn,
      roleEn: patternComparison.dominantB.roleEn || patternComparison.dominantB.role,
      tierEn: archB.tierEn,
      essenceEn: archB.essenceEn,
      strengthsEn: archB.strengthsEn,
      blindspotsEn: archB.blindspotsEn,
      behaviorModelEn: archB.behaviorModelEn,
      ...(!isEn ? {
        nameZh: patternComparison.dominantB.nameZh || archB.nameZh,
        roleZh: patternComparison.dominantB.roleZh || patternComparison.dominantB.role,
        tierZh: archB.tierZh,
        essenceZh: archB.essenceZh,
        strengthsZh: archB.strengthsZh,
        blindspotsZh: archB.blindspotsZh,
        behaviorModelZh: archB.behaviorModelZh
      } : {})
    };

    // 13. Lifelong Trajectory Overlap & Decennial Synchronization (人生轨迹推演重合度与岁运同频)
    const trajectoryOverlap = evaluateTrajectoryOverlap(chartA, chartB, isRomantic, isEn);

    // 14. Life Focal Priorities & Core Values (人生侧重点与核心价值观五维图谱)
    const lifePriorities = evaluateLifePriorities(chartA, chartB, isRomantic, isEn);

    // 15. Dual Five Elements Breakdown & Comparison (双人五行元素含量与能量互补)
    const elementComparison = evaluateElementComparison(elA, elB, dmElemA, dmElemB, isEn);

    // 16. Merged Relationship Synthesis & Dynamics Portrait (合盘复合全相与关系画像)
    const mergedRelationship = generateMergedRelationshipPortrait(chartA, chartB, overallScore, archetype, hasStemCombo, hasSixHarmony, hasSixClash, isRomantic, isEn);

    // 17. Core Advantages vs Hidden Hazards & Tactical Actionable Protocols (合璧优点与暗涌隐患及落地规避锦囊)
    const advantagesAndHazards = generateAdvantagesAndHazards(chartA, chartB, overallScore, elementComparison, isRomantic, isEn);

    return {
      mode,
      lang,
      overallScore,
      zodiacA,
      zodiacB,
      dominantPatternA,
      dominantPatternB,
      primaryPatternA: dominantPatternA.name,
      primaryPatternB: dominantPatternB.name,
      elementComparison,
      mergedRelationship,
      advantagesAndHazards,
      zodiacMatch: {
        type: zMatch.type,
        title: isEn ? zMatch.titleEn : zMatch.titleZh,
        badge: isEn ? zMatch.badgeEn : zMatch.badgeZh,
        description: isEn ? zMatch.descEn : zMatch.descZh,
        classicalOrigin: isEn ? zMatch.classicalOriginEn : zMatch.classicalOriginZh,
        titleEn: zMatch.titleEn,
        badgeEn: zMatch.badgeEn,
        descEn: zMatch.descEn,
        classicalOriginEn: zMatch.classicalOriginEn,
        ...(!isEn ? {
          titleZh: zMatch.titleZh,
          badgeZh: zMatch.badgeZh,
          descZh: zMatch.descZh,
          classicalOriginZh: zMatch.classicalOriginZh
        } : {})
      },
      archetype: {
        name: isEn ? archetype.nameEn : archetype.nameZh,
        seal: isEn ? archetype.sealEn : archetype.sealZh,
        tier: isEn ? archetype.tierEn : archetype.tierZh,
        description: isEn ? archetype.descEn : archetype.descZh,
        nameEn: archetype.nameEn,
        sealEn: archetype.sealEn,
        tierEn: archetype.tierEn,
        descEn: archetype.descEn,
        ...(!isEn ? {
          nameZh: archetype.nameZh,
          sealZh: archetype.sealZh,
          tierZh: archetype.tierZh,
          descZh: archetype.descZh
        } : {})
      },
      elementalSynergy: {
        score: Math.min(98, Math.max(45, synergyScore)),
        elementA: isEn ? (ELEMENT_NAMES_EN[dmElemA] || dmElemA) : dmElemA,
        elementB: isEn ? (ELEMENT_NAMES_EN[dmElemB] || dmElemB) : dmElemB,
        elementAEn: ELEMENT_NAMES_EN[dmElemA] || dmElemA,
        elementBEn: ELEMENT_NAMES_EN[dmElemB] || dmElemB,
        mutualGifts: mutualGifts.map(g => ({
          from: g.from,
          to: g.to,
          element: isEn ? g.elementEn : g.element,
          desc: isEn ? g.descEn : g.descZh,
          descEn: g.descEn,
          ...(!isEn ? { descZh: g.descZh } : {})
        })),
        elementGapsA: isEn ? elementGapsA.map(e => ELEMENT_NAMES_EN[e] || e) : elementGapsA,
        elementGapsB: isEn ? elementGapsB.map(e => ELEMENT_NAMES_EN[e] || e) : elementGapsB,
        elementGapsAEn: elementGapsA.map(e => ELEMENT_NAMES_EN[e] || e),
        elementGapsBEn: elementGapsB.map(e => ELEMENT_NAMES_EN[e] || e),
        diagnosis: isEn ? elDiagEn : elDiagZh,
        diagnosisEn: elDiagEn,
        ...(!isEn ? {
          elementAZh: dmElemA,
          elementBZh: dmElemB,
          elementGapsAZh: elementGapsA,
          elementGapsBZh: elementGapsB,
          diagnosisZh: elDiagZh
        } : {})
      },
      pillarResonance: {
        hasStemCombo,
        hasSixHarmony,
        crossHarmonies: crossHarmonies.map(h => ({
          desc: isEn ? h.descEn : h.descZh,
          descEn: h.descEn,
          ...(!isEn ? { descZh: h.descZh } : {})
        })),
        diagnosis: isEn ? resonanceEn : resonanceZh,
        diagnosisEn: resonanceEn,
        ...(!isEn ? { diagnosisZh: resonanceZh } : {})
      },
      clashPoints: {
        clashCount: crossClashes.length,
        punishmentCount: crossPunishments.length,
        crossClashes: crossClashes.map(c => ({
          desc: isEn ? c.descEn : c.descZh,
          descEn: c.descEn,
          ...(!isEn ? { descZh: c.descZh } : {})
        })),
        diagnosis: isEn ? clashDiagEn : clashDiagZh,
        diagnosisEn: clashDiagEn,
        ...(!isEn ? { diagnosisZh: clashDiagZh } : {})
      },
      financialTrust: {
        diagnosis: isEn ? financeEn : financeZh,
        diagnosisEn: financeEn,
        ...(!isEn ? { diagnosisZh: financeZh } : {})
      },
      eightCanonsSynthesis: {
        title: isEn ? canonsData.titleEn : canonsData.titleZh,
        summary: isEn ? canonsData.summaryEn : canonsData.summaryZh,
        titleEn: canonsData.titleEn,
        summaryEn: canonsData.summaryEn,
        ...(!isEn ? {
          titleZh: canonsData.titleZh,
          summaryZh: canonsData.summaryZh
        } : {}),
        canons: (isEn ? canonsData.canonsEn : canonsData.canonsZh).map((c, i) => {
          const cObj = {
            name: isEn ? c.nameEn : c.nameZh,
            canon: isEn ? c.canonEn : c.canonZh,
            analysis: isEn ? c.analysisEn : c.analysisZh,
            nameEn: canonsData.canonsEn[i].nameEn,
            canonEn: canonsData.canonsEn[i].canonEn,
            analysisEn: canonsData.canonsEn[i].analysisEn
          };
          if (!isEn) {
            cObj.nameZh = canonsData.canonsZh[i].nameZh;
            cObj.canonZh = canonsData.canonsZh[i].canonZh;
            cObj.analysisZh = canonsData.canonsZh[i].analysisZh;
          }
          return cObj;
        })
      },
      zenDaoCounsel: {
        title: isEn ? zenData.titleEn : zenData.titleZh,
        synthesis: isEn ? zenData.synthesisEn : zenData.synthesisZh,
        titleEn: zenData.titleEn,
        summaryEn: zenData.synthesisEn,
        ...(!isEn ? {
          titleZh: zenData.titleZh,
          synthesisZh: zenData.synthesisZh
        } : {}),
        diamondSutra: {
          title: isEn ? zenData.diamondEn.title : zenData.diamondZh.title,
          canonQuote: isEn ? zenData.diamondEn.quote : zenData.diamondZh.quote,
          counsel: isEn ? zenData.diamondEn.counsel : zenData.diamondZh.counsel,
          titleEn: zenData.diamondEn.title,
          quoteEn: zenData.diamondEn.quote,
          counselEn: zenData.diamondEn.counsel,
          ...(!isEn ? {
            titleZh: zenData.diamondZh.title,
            quoteZh: zenData.diamondZh.quote,
            counselZh: zenData.diamondZh.counsel
          } : {})
        },
        platformSutra: {
          title: isEn ? zenData.platformEn.title : zenData.platformZh.title,
          canonQuote: isEn ? zenData.platformEn.quote : zenData.platformZh.quote,
          counsel: isEn ? zenData.platformEn.counsel : zenData.platformZh.counsel,
          titleEn: zenData.platformEn.title,
          quoteEn: zenData.platformEn.quote,
          counselEn: zenData.platformEn.counsel,
          ...(!isEn ? {
            titleZh: zenData.platformZh.title,
            quoteZh: zenData.platformZh.quote,
            counselZh: zenData.platformZh.counsel
          } : {})
        },
        zhuangzi: {
          title: isEn ? zenData.zhuangziEn.title : zenData.zhuangziZh.title,
          canonQuote: isEn ? zenData.zhuangziEn.quote : zenData.zhuangziZh.quote,
          counsel: isEn ? zenData.zhuangziEn.counsel : zenData.zhuangziZh.counsel,
          titleEn: zenData.zhuangziEn.title,
          quoteEn: zenData.zhuangziEn.quote,
          counselEn: zenData.zhuangziEn.counsel,
          ...(!isEn ? {
            titleZh: zenData.zhuangziZh.title,
            quoteZh: zenData.zhuangziZh.quote,
            counselZh: zenData.zhuangziZh.counsel
          } : {})
        }
      },
      remedies: {
        diagnosis: isEn ? remediesEn : remediesZh,
        diagnosisEn: remediesEn,
        ...(!isEn ? { diagnosisZh: remediesZh } : {})
      },
      patternComparison,
      trajectoryOverlap,
      lifePriorities
    };
  }

  // Helper: Elemental Diagnosis
  function generateElementalDiagnosis(elA, elB, dmA, dmB, gifts, isEn) {
    if (isEn) {
      const giftStr = gifts.length > 0
        ? gifts.map(g => `• ${g.descEn}`).join('\n')
        : '• Both energy charts hold self-contained energetic baselines without one-way dependency.';
      return `[Five Elements Symbiosis Architecture]\nPerson A embodies ${ELEMENT_NAMES_EN[dmA]} Day Master, while Person B channels ${ELEMENT_NAMES_EN[dmB]} Day Master. Their combined elements create an organic ecological circuit.\n${giftStr}\nExecutive Takeaway: Combined forces replenish missing nutrients naturally, reducing fatigue and shielding mutual blind spots.`;
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
          `• Day Pillars (Soul Core): Day Master [${dmAEn}] and [${dmBEn}] ` +
          (hasStemCombo ? `form a genuine Heavenly Stem Combination, igniting effortless telepathy, deep psychological comfort, and magnetic emotional chemistry.` : `interact with calm mutual respect and self-sufficient autonomy.`) +
          `\n• Month Pillars (Lifestyle & Rhythm): [${mPillarAEn}] and [${mPillarBEn}] establish shared pacing for financial priorities, social engagements, and family governance.`;
      } else {
        return `[Executive Alignment & Leadership Chemistry]\n` +
          `• Core Will (Day Master): [${dmAEn}] and [${dmBEn}] ` +
          (hasStemCombo ? `achieve a rare Stem Combination, creating supreme executive trust and aligned instincts in critical crisis moments.` : `maintain clear strategic independence, allowing rigorous debate without emotional bias.`) +
          `\n• Career Operations (Month Pillars): [${mPillarAEn}] vs [${mPillarBEn}] establish a dual-engine apparatus: external expansion seamlessly interlocks with disciplined internal control.`;
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
        return `[Clash & Friction Vectors]\n✓ Zero major branch clashes or severe punishments detected across the Four Pillars.\nBoth charts interact smoothly with minimal underlying structural friction. Everyday debates remain functional and constructive.`;
      }
      const clashList = clashes.map(c => `• ${c.descEn}`).join('\n');
      const punList = punishments.map(p => `• Punishment Alert: ${p.nameEn} (${p.descEn})`).join('\n');
      return `[Clash & Friction Vectors]\n${clashList}\n${punList}\nStrategic Advice: Clashes act as catalysts for personal growth. In stressful cycles, enforce structured communication protocols and avoid encroaching upon private decompression space.`;
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
    if (isEn) {
      if (isRomantic) {
        return `[Financial Synergy & Family Wealth Preservation]\n` +
          `1. Wealth Stewardship: Joint assets thrive when structured into clear allocations: family living, long-term reserves, and personal discretionary accounts.\n` +
          `2. Risk Containment: Maintain total transparency regarding major real estate or venture investments. Avoid speculative leverage without mutual signed alignment.\n` +
          `3. Co-Prosperity Principle: Prioritize long-term compounding over micromanaging minor daily receipts.`;
      } else {
        return `[Co-founder Game Theory & Commercial Equity Protocol]\n` +
          `1. Equity Governance: Strict 50/50 splits are discouraged. Anchor an unambiguous 51%+ final executive decision-maker, while protecting the minority co-founder with veto rights on dilution.\n` +
          `2. Financial Firewall: Corporate accounts must remain physically isolated from personal finances. Require dual-signoff on major outlays and quarterly certified audits.\n` +
          `3. Vesting & Exit Framework: Institute standard 4-year dynamic vesting with a 1-year cliff to protect corporate continuity against sudden co-founder departure.`;
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
        return `[Mutual Remedies & Golden Harmony Prescriptions]\n` +
          `1. Elemental Bridge: Utilize ${bridgeElemEn} as your energetic mediator in shared spaces and routines to smooth tension.\n` +
          `2. Cooldown Protocol: Establish a mandatory 20-minute emotional pause during heated arguments; disengage until heart rates settle.\n` +
          `3. Golden Directives: Speak appreciation directly, celebrate small daily milestones, and present a unified, supportive front when facing extended family.`;
      } else {
        return `[Commercial Remedial Protocols & Co-existence Bylaws]\n` +
          `1. Environmental Balance: Infuse ${bridgeElemEn} aesthetics into executive boardrooms to encourage calm, objective deliberation.\n` +
          `2. Written Protocol: Channel major strategic disagreements into structured memoranda rather than verbal battles.\n` +
          `3. Three Golden Rules: Total customer loyalty, transparent balance sheet records, and ironclad external solidarity once decisions are made.`;
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

  // Canonical Pattern Archetypes and Structural Engine Exegeses
  const PATTERN_ARCHETYPES = {
    '七杀': {
      nameZh: '七杀格 · 偏官统帅', nameEn: 'Seven Killings Pattern · Vanguard Commander',
      tierZh: '上等权威格', tierEn: 'Superior Authority Pattern',
      essenceZh: '命带威权与不屈斗志，崇尚以实力突破僵局。行事雷厉风行、敢冒风险、极具魄力与危机应对本能。',
      essenceEn: 'Commands formidable executive willpower and unyielding determination; thrives in pioneering breakthroughs, taking calculated risks, and conquering high-stakes crises.',
      strengthsZh: '破局能力顶尖，绝境反击，极富前瞻魄力与执行力。',
      strengthsEn: 'Supreme pioneering velocity, high crisis resilience, and fearless execution.',
      blindspotsZh: '容易刚愎自用、脾气急躁，给伴侣或搭档施加无形压迫感。',
      blindspotsEn: 'Prone to impatience and autocracy, potentially imposing overwhelming pressure on partners.',
      behaviorModelZh: '进攻型破局者，遇难越勇，习惯把控大局战略方向。',
      behaviorModelEn: 'Offensive vanguard who thrives under pressure and demands sovereign strategic direction.'
    },
    '正官': {
      nameZh: '正官格 · 正气立身', nameEn: 'Direct Officer Pattern · Institutional Order',
      tierZh: '上等清贵格', tierEn: 'Superior Noble Pattern',
      essenceZh: '崇尚社会公信、纲常秩序与契约信义。行事光明磊落、自律甚严、恪守边界与程序正义。',
      essenceEn: 'Dedicated to institutional reputation, procedural discipline, and ethical integrity; exercises unyielding self-mastery and honors commitments.',
      strengthsZh: '长线定力极强，合规风控严谨，声誉卓著，组织治理能力一流。',
      strengthsEn: 'Enduring strategic patience, impeccable risk containment, and institutional governance.',
      blindspotsZh: '墨守成规、缺乏变通巧劲，过分在意外界评价与虚礼。',
      blindspotsEn: 'Can become overly rigid or bureaucratic, placing excessive weight on formal etiquette.',
      behaviorModelZh: '合规治理者，重视程序规则与声望积累，步步为营。',
      behaviorModelEn: 'Fiduciary governor who anchors progress in structured rules and institutional stature.'
    },
    '食神': {
      nameZh: '食神格 · 独门天工', nameEn: 'Eating God Pattern · Master Artisan',
      tierZh: '上等福寿格', tierEn: 'Superior Serenity Pattern',
      essenceZh: '禀赋温润从容，追求精神富足与专业极致。深谙生活雅趣与技艺淬炼，善于以柔克刚、化繁为简。',
      essenceEn: 'Embodies gentle serenity and artistic depth, seeking perfection in craft and living aesthetics while dissolving tension through subtle elegance.',
      strengthsZh: '专业技艺精湛，情商极高，极富审美创造力与长寿福慧。',
      strengthsEn: 'Exquisite craftsmanship, emotional intelligence, and enduring creative longevity.',
      blindspotsZh: '随遇而安、进取野心稍逊，在重大商战冲突中容易被动退让。',
      blindspotsEn: 'May lack aggressive commercial hunger, sometimes yielding too quickly in competitive showdowns.',
      behaviorModelZh: '从容匠人型，以专业作品与独特审美立身，温和包容。',
      behaviorModelEn: 'Serene artisan who leads through mastery, aesthetic distinction, and patient empathy.'
    },
    '伤官': {
      nameZh: '伤官格 · 锐意革新', nameEn: 'Hurting Officer Pattern · Disruptive Maverick',
      tierZh: '奇秀智谋格', tierEn: 'Exceptional Intellect Pattern',
      essenceZh: '智商超群、才华横溢，具天生反骨与颠覆性创造力。极度崇尚自由与独创，对平庸与虚伪绝不妥协。',
      essenceEn: 'Possesses brilliant intellectual agility and disruptive iconoclasm; fiercely honors creative authenticity and refuses bureaucratic mediocrity.',
      strengthsZh: '商业嗅觉与创新能力顶尖，口才敏捷，破旧立新无人能及。',
      strengthsEn: 'Unmatched commercial intuition, disruptive innovation, and electrifying persuasion.',
      blindspotsZh: '言语犀利锋芒毕露，易伤人自尊，耐受琐碎繁杂事务度较低。',
      blindspotsEn: 'Sharp tongue may wound interpersonal rapport; struggles with tedious administrative routines.',
      behaviorModelZh: '颠覆式革新者，以反常规思路打破僵局，追求卓越与与众不同。',
      behaviorModelEn: 'Disruptive innovator who shatters conventions and pursues non-consensus breakthroughs.'
    },
    '偏财': {
      nameZh: '偏财格 · 雄图开拓', nameEn: 'Indirect Wealth Pattern · Venture Visionary',
      tierZh: '上等富贵格', tierEn: 'Superior Abundance Pattern',
      essenceZh: '胸襟开阔、商机敏锐，具极强资本杠杆与跨界资源整合本领。重情重义而不拘小节，深谙人性与利益博弈。',
      essenceEn: 'Magnanimous and commercially astute with supreme resource leverage; navigates strategic partnerships and market liquidity with natural charisma.',
      strengthsZh: '现金流调动与商业变现本领顶尖，善聚人脉，开拓新版图雷厉风行。',
      strengthsEn: 'Mastery of capital liquidity, magnetic networking, and rapid frontier monetization.',
      blindspotsZh: '风险偏好过高、易豪赌大项目，在琐细风控与储蓄上略显疏漏。',
      blindspotsEn: 'Aggressive risk appetite may induce speculative overextension; lacks patience for tedious penny-pinching.',
      behaviorModelZh: '资本操盘者与商业破局者，善于借势整合外部优质资源。',
      behaviorModelEn: 'Venture strategist who orchestrates capital, alliances, and market momentum.'
    },
    '正财': {
      nameZh: '正财格 · 稳健司库', nameEn: 'Direct Wealth Pattern · Fiduciary Anchor',
      tierZh: '中上丰裕格', tierEn: 'Upper-Middle Fiduciary Pattern',
      essenceZh: '脚踏实地、精打细算，视资产确权与复利积累为安全感之基石。恪尽职守、行事审慎，绝不涉险妄动。',
      essenceEn: 'Pragmatic, disciplined, and detail-oriented, anchoring security in capital compounding and balance-sheet safety without unnecessary exposure.',
      strengthsZh: '风控防线牢不可破，资产雪球越滚越大，家庭或企业现金流基石极其坚实。',
      strengthsEn: 'Impenetrable risk management, steady balance-sheet compounding, and unwavering fiscal reliability.',
      blindspotsZh: '格局偏于保守狭窄，对高赔率新机会易瞻前顾后、错失先机。',
      blindspotsEn: 'Tendency toward risk aversion can result in missed generational asymmetric opportunities.',
      behaviorModelZh: '稳健操盘手，精细化管理收支，以复利和安全边际为最高准则。',
      behaviorModelEn: 'Disciplined steward who optimizes cash reserves and insists on margins of safety.'
    },
    '正印': {
      nameZh: '正印格 · 仁厚柱石', nameEn: 'Direct Resource Pattern · Sovereign Mentor',
      tierZh: '上等仁寿格', tierEn: 'Superior Benevolence Pattern',
      essenceZh: '慈厚博爱、学识通达，具极高精神包容力与道德感召力。视精神品格与声誉重于世俗利益，能化暴戾为祥和。',
      essenceEn: 'Deeply benevolent, scholarly, and emotionally expansive; exercises profound moral authority, transforming hostility into mutual peace.',
      strengthsZh: '化解危机压舱石，团队精神导师，具极佳贵人运与长线名望口碑。',
      strengthsEn: 'Ultimate crisis stabilizer, cultural anchor, and magnetic attractor of institutional mentors.',
      blindspotsZh: '行动力与变现速度偏慢，有时过分心慈手软、纵容下属或伴侣犯错。',
      blindspotsEn: 'Pacing may be contemplative and deliberate; prone to excessive leniency toward underperforming peers.',
      behaviorModelZh: '精神导师与守护者，以深厚学养与长远声誉护航组织与家庭。',
      behaviorModelEn: 'Noble mentor who safeguards collective stability through wisdom and moral stature.'
    },
    '偏印': {
      nameZh: '偏印格 · 洞微奇士', nameEn: 'Indirect Resource Pattern · Strategic Seer',
      tierZh: '幽深智谋格', tierEn: 'Esoteric Insight Pattern',
      essenceZh: '深沉内敛、冷眼观世，具洞穿事物底层逻辑与人性幽微的独门洞见。喜独处研磨深层学问，不喜迎合庸俗。',
      essenceEn: 'Profoundly intuitive, solitary, and penetrating; effortlessly deciphers underlying systemic mechanics and psychological undercurrents.',
      strengthsZh: '战略洞察极具穿透力，危机预警雷达顶尖，在冷门尖端领域独占鳌头。',
      strengthsEn: 'Uncanny strategic foresight, sharp anomaly detection, and dominance in specialized complex domains.',
      blindspotsZh: '生性多疑防备心重，不易彻底敞开信任，情绪容易陷入孤僻冷淡。',
      blindspotsEn: 'Hyper-vigilant skepticism can hinder baseline intimacy; prone to emotional detachment.',
      behaviorModelZh: '幕后首席智囊，冷静剖析隐性风险，出奇制胜。',
      behaviorModelEn: 'Behind-the-scenes master strategist who anticipates hidden vulnerabilities.'
    },
    '建禄': {
      nameZh: '建禄格 · 刚健自立', nameEn: 'Established Lu Pattern · Self-Reliant Sovereign',
      tierZh: '中上刚直格', tierEn: 'Upper-Middle Fortitude Pattern',
      essenceZh: '自立自强、骨鲠正气，不屑依附权贵或他人恩赐。凡事亲力亲为、信奉一分耕耘一分收获，人格极具独立尊严。',
      essenceEn: 'Fiercely self-reliant, resilient, and honorable; refuses subservience and builds success purely through disciplined labor and integrity.',
      strengthsZh: '意志坚定如铁，独立作战能力极强，抗压抗挫能力首屈一指。',
      strengthsEn: 'Iron will, autonomous execution, and unmatched resilience against exhaustion.',
      blindspotsZh: '分权与合作意识偏弱，不擅迂回借力，遇挫易硬抗而累及自身。',
      blindspotsEn: 'Reluctant to delegate or leverage external capital, tending to bear all burdens alone.',
      behaviorModelZh: '硬汉实干家，以身作则冲锋在前，信守承诺绝不轻言放弃。',
      behaviorModelEn: 'Steadfast executor who leads by personal example and perseveres through sheer grit.'
    },
    '阳刃': {
      nameZh: '阳刃格 · 破阵死士', nameEn: 'Yang Blade Pattern · Resolute Warrior',
      tierZh: '上等霸业格', tierEn: 'Superior Conqueror Pattern',
      essenceZh: '气魄雄沉、敢打硬仗，在最凶险残酷的环境中爆发力极强。重同袍情义、视死如归，具强烈争胜心与英雄主义。',
      essenceEn: 'Audacious, battle-tested, and fiercely loyal; exhibits explosive power under extreme adversity with an unyielding warrior ethos.',
      strengthsZh: '极险关头能力挽狂澜，带领团队打赢不可能赢的战役，气场威慑群雄。',
      strengthsEn: 'Turns impossible odds into decisive victories during existential crises with overwhelming presence.',
      blindspotsZh: '刚烈过甚、容易伤及亲近之人，金钱财务上易大手大脚或遭小人劫夺。',
      blindspotsEn: 'Excessive intensity risks collateral friction; prone to financial leakage through impulsive generosity.',
      behaviorModelZh: '战场破阵统帅，关键时刻挺身而出以铁血手腕力挽狂澜。',
      behaviorModelEn: 'Battlefield champion who rises decisively in make-or-break crises with sheer command.'
    }
  };

  function getPatternArchetype(patternName) {
    if (!patternName) return PATTERN_ARCHETYPES['正官'];
    const pStr = String(patternName);
    if (/七杀|偏官/.test(pStr)) return PATTERN_ARCHETYPES['七杀'];
    if (/正官/.test(pStr)) return PATTERN_ARCHETYPES['正官'];
    if (/食神/.test(pStr)) return PATTERN_ARCHETYPES['食神'];
    if (/伤官/.test(pStr)) return PATTERN_ARCHETYPES['伤官'];
    if (/偏财/.test(pStr)) return PATTERN_ARCHETYPES['偏财'];
    if (/正财/.test(pStr)) return PATTERN_ARCHETYPES['正财'];
    if (/正印/.test(pStr)) return PATTERN_ARCHETYPES['正印'];
    if (/偏印|枭神/.test(pStr)) return PATTERN_ARCHETYPES['偏印'];
    if (/建禄|比肩/.test(pStr)) return PATTERN_ARCHETYPES['建禄'];
    if (/阳刃|羊刃|劫财/.test(pStr)) return PATTERN_ARCHETYPES['阳刃'];
    return PATTERN_ARCHETYPES['正官'];
  }

  // Helper: Determine Chart Dominant Patterns Triad
  function getChartDominantPatterns(chart, isEn) {
    const translatePat = (name) => {
      if (!name) return 'Direct Officer Pattern';
      if (typeof PortraitEngine !== 'undefined' && typeof PortraitEngine.getPatternEn === 'function') {
        const en = PortraitEngine.getPatternEn(name);
        if (en && !/[\u4e00-\u9fa5]/.test(en)) return en;
      }
      if (typeof I18N !== 'undefined' && typeof I18N.translatePattern === 'function') {
        const en = I18N.translatePattern(name, 'en');
        if (en && !/[\u4e00-\u9fa5]/.test(en)) return en;
      }
      return 'Direct Officer Pattern';
    };

    if (chart && chart.patterns && Array.isArray(chart.patterns) && chart.patterns.length > 0) {
      return chart.patterns.slice(0, 3).map((p, idx) => ({
        rank: idx + 1,
        nameZh: p.nameZh || p.name || '正官格',
        nameEn: p.nameEn || translatePat(p.nameZh || p.name),
        weightPct: p.weightPct || (idx === 0 ? 45 : (idx === 1 ? 30 : 25)),
        type: p.type || 'standard',
        roleZh: p.roleZh || (idx === 0 ? '统帅格局' : (idx === 1 ? '相辅格局' : '才智兼格')),
        roleEn: p.roleEn || (idx === 0 ? 'Dominant Pattern' : (idx === 1 ? 'Supporting Pattern' : 'Tertiary Skill Pattern'))
      }));
    }
    if (typeof PortraitEngine !== 'undefined' && typeof PortraitEngine.analyze === 'function') {
      try {
        const pZh = PortraitEngine.analyze(chart, 'zh');
        if (pZh && pZh.patterns && pZh.patterns.length > 0) {
          return pZh.patterns.slice(0, 3).map((p, idx) => ({
            rank: idx + 1,
            nameZh: p.name || '正官格',
            nameEn: p.nameEn || translatePat(p.name),
            weightPct: p.weightPct || (idx === 0 ? 45 : (idx === 1 ? 30 : 25)),
            type: p.type || 'standard',
            roleZh: p.roleZh || (idx === 0 ? '统帅格局' : (idx === 1 ? '相辅格局' : '才智兼格')),
            roleEn: p.roleEn || (idx === 0 ? 'Dominant Pattern' : (idx === 1 ? 'Supporting Pattern' : 'Tertiary Skill Pattern'))
          }));
        }
      } catch (e) {}
    }

    // Canonical Month Branch Fallback
    const dm = chart.dayMaster || '甲';
    const mb = (chart.pillars && chart.pillars.month && chart.pillars.month.branch) || '子';
    const mbMainStem = {
      '子': '癸', '丑': '己', '寅': '甲', '卯': '乙', '辰': '戊', '巳': '丙',
      '午': '丁', '未': '己', '申': '庚', '酉': '辛', '戌': '戊', '亥': '壬'
    }[mb] || '癸';

    const tenGodTable = {
      '甲': { '甲': '比肩', '乙': '劫财', '丙': '食神', '丁': '伤官', '戊': '偏财', '己': '正财', '庚': '七杀', '辛': '正官', '壬': '偏印', '癸': '正印' },
      '乙': { '乙': '比肩', '甲': '劫财', '丁': '食神', '丙': '伤官', '己': '偏财', '戊': '正财', '辛': '七杀', '庚': '正官', '癸': '偏印', '壬': '正印' },
      '丙': { '丙': '比肩', '丁': '劫财', '戊': '食神', '己': '伤官', '庚': '偏财', '辛': '正财', '壬': '七杀', '癸': '正官', '甲': '偏印', '乙': '正印' },
      '丁': { '丁': '比肩', '丙': '劫财', '己': '食神', '戊': '伤官', '辛': '偏财', '庚': '正财', '癸': '七杀', '壬': '正官', '乙': '偏印', '甲': '正印' },
      '戊': { '戊': '比肩', '己': '劫财', '庚': '食神', '辛': '伤官', '壬': '偏财', '癸': '正财', '甲': '七杀', '乙': '正官', '丙': '偏印', '丁': '正印' },
      '己': { '己': '比肩', '戊': '劫财', '辛': '食神', '庚': '伤官', '癸': '偏财', '壬': '正财', '乙': '七杀', '甲': '正官', '丁': '偏印', '丙': '正印' },
      '庚': { '庚': '比肩', '辛': '劫财', '壬': '食神', '癸': '伤官', '甲': '偏财', '乙': '正财', '丙': '七杀', '丁': '正官', '戊': '偏印', '己': '正印' },
      '辛': { '辛': '比肩', '庚': '劫财', '癸': '食神', '壬': '伤官', '乙': '偏财', '甲': '正财', '丁': '七杀', '丙': '正官', '己': '偏印', '戊': '正印' },
      '壬': { '壬': '比肩', '癸': '劫财', '甲': '食神', '乙': '伤官', '丙': '偏财', '丁': '正财', '戊': '七杀', '己': '正官', '庚': '偏印', '辛': '正印' },
      '癸': { '癸': '比肩', '壬': '劫财', '乙': '食神', '甲': '伤官', '丁': '偏财', '丙': '正财', '己': '七杀', '戊': '正官', '辛': '偏印', '庚': '正印' }
    };
    const god = (tenGodTable[dm] && tenGodTable[dm][mbMainStem]) || '正印';

    const patMap = {
      '七杀': { zh: '七杀格 (偏官统帅 · 战将突围)', en: 'Seven Killings Pattern (Vanguard Commander)' },
      '正官': { zh: '正官格 (正气立身 · 秩序纲常)', en: 'Direct Officer Pattern (Institutional Order)' },
      '食神': { zh: '食神格 (独门技艺 · 秀气发越)', en: 'Eating God Pattern (Craft & Creative Expression)' },
      '伤官': { zh: '伤官格 (革新破局 · 锐意拓荒)', en: 'Hurting Officer Pattern (Innovation & Breakthrough)' },
      '偏财': { zh: '偏财格 (敏锐商机 · 资本跨界)', en: 'Indirect Wealth Pattern (Commercial Venture)' },
      '正财': { zh: '正财格 (厚重基业 · 稳健操盘)', en: 'Direct Wealth Pattern (Asset Governance)' },
      '正印': { zh: '正印格 (慈厚安泰 · 学养传家)', en: 'Direct Resource Pattern (Academic & Fiduciary Anchor)' },
      '偏印': { zh: '偏印格 (幽深洞见 · 灵性绝技)', en: 'Indirect Resource Pattern (Esoteric Acuity)' },
      '比肩': { zh: '建禄格 (自立自强 · 刚健中正)', en: 'Established Lu Pattern (Self-Reliant Sovereignty)' },
      '劫财': { zh: '阳刃格 (锋芒淬炼 · 破阵争雄)', en: 'Yang Blade Pattern (Resolute Tenacity)' }
    };

    const d1 = patMap[god] || patMap['正印'];
    const supGod = (god === '正印') ? '正官' : ((god === '食神') ? '偏财' : '正印');
    const d2 = patMap[supGod] || patMap['正官'];
    const tertGod = (god === '食神' || supGod === '食神') ? '正财' : '食神';
    const d3 = patMap[tertGod] || patMap['食神'];

    return [
      { rank: 1, nameZh: d1.zh, nameEn: d1.en, weightPct: 45, roleZh: '主导格局', roleEn: 'Dominant Pattern' },
      { rank: 2, nameZh: d2.zh, nameEn: d2.en, weightPct: 30, roleZh: '相辅格局', roleEn: 'Supporting Pattern' },
      { rank: 3, nameZh: d3.zh, nameEn: d3.en, weightPct: 25, roleZh: '才智兼格', roleEn: 'Tertiary Skill Pattern' }
    ];
  }

  // 12. Structural Pattern Comparison & Engine Interaction
  function evaluatePatternComparison(chartA, chartB, isRomantic, isEn) {
    const patsA = getChartDominantPatterns(chartA, isEn);
    const patsB = getChartDominantPatterns(chartB, isEn);
    const domA = patsA[0];
    const domB = patsB[0];
    const nA = domA.nameZh;
    const nB = domB.nameZh;

    let type = 'elemental_flow';
    let titleZh = '相生相化 · 稳健滋养';
    let titleEn = 'Harmonious Circulation & Gentle Nourishment';
    let dynamicZh = '';
    let dynamicEn = '';
    let romanticZh = '';
    let romanticEn = '';
    let businessZh = '';
    let businessEn = '';
    let score = 88;

    const isKillA = /七杀|偏官/.test(nA);
    const isKillB = /七杀|偏官/.test(nB);
    const isResA = /正印|偏印|印绶/.test(nA);
    const isResB = /正印|偏印|印绶/.test(nB);
    const isOutA = /食神|伤官/.test(nA);
    const isOutB = /食神|伤官/.test(nB);
    const isWlthA = /正财|偏财/.test(nA);
    const isWlthB = /正财|偏财/.test(nB);
    const isOffA = /正官/.test(nA);
    const isOffB = /正官/.test(nB);
    const isPeerA = /比肩|劫财|建禄|阳刃/.test(nA);
    const isPeerB = /比肩|劫财|建禄|阳刃/.test(nB);

    if ((isKillA && isResB) || (isKillB && isResA)) {
      type = 'killing_resource';
      titleZh = '杀印相生 · 辅弼相成';
      titleEn = 'Seven Killings & Noble Resource · Sovereign Command & Strategic Counsel';
      dynamicZh = '一人勇猛精进、决断如雷，主攻外部攻坚突破；一人渊深博大、理智稳妥，主掌大局后盾与精神护航。杀印相资，凶煞化为威权，是极高格局之互补搭档。';
      dynamicEn = 'One drives bold forward momentum and decisive executive action, while the other provides panoramic wisdom, rational anchoring, and institutional legitimacy. Supreme polarity balances audacious breakthroughs with steadfast stability.';
      romanticZh = '在婚恋中，一方主外决断，另一方在后方提供不可替代的理智压舱石。遇风浪不慌不乱，形成“你在前线征战，我在后方固本”的深情默契。';
      romanticEn = 'In marriage, ambitious outward drive meets serene emotional refuge. The relationship establishes deep mutual ballast: one conquers frontiers, while the other anchors the domestic harbor.';
      businessZh = '商业合伙黄金范式。七杀型合伙人适任CEO操盘业务破局与市场厮杀，印星型合伙人适任董事会主席或首席智囊掌舵合规、战略与风控底线。';
      businessEn = 'Prime commercial co-founding paradigm: Seven Killings assumes CEO duties driving market breakthroughs, while Resource governs board compliance, capital preservation, and long-term strategy.';
      score = 95;
    } else if ((isOutA && isWlthB) || (isOutB && isWlthA)) {
      type = 'output_wealth';
      titleZh = '食伤生财 · 商业奇兵';
      titleEn = 'Creative Output & Wealth Engine · Commercial Velocity & Dealmaking';
      dynamicZh = '食伤主灵感迸发、独门产品与尖端技艺，财星主商业落地、资源整合与现金流闭环。一方负责“把东西做到极致”，另一方负责“把价值变现成真金白银”，天然造就财富永动机。';
      dynamicEn = 'Creative output delivers cutting-edge product innovation and visionary craft, while the wealth engine captures market liquidity and commercial dealmaking. Product mastery integrates seamlessly with monetization.';
      romanticZh = '生活富有浪漫创意与殷实物质保障。一人擅长营造生活情趣与审美体验，另一人擅长操盘财务增长，既有柴米油盐之安稳，又有星辰大海之诗意。';
      romanticEn = 'Blends rich aesthetic imagination with disciplined financial growth. One enriches daily life with spontaneity and beauty, while the other steadily compounds household assets.';
      businessZh = '合伙创业极强闭环。食伤型合伙人掌管CPO/CTO负责产品与技术护城河，财星型合伙人掌管CEO/CFO负责融资与商业开拓，分工清晰，倍增商业价值。';
      businessEn = 'Optimal venture pairing: Output partner directs product and technology as CTO/CPO, while Wealth partner leads capital fundraising and revenue as CEO/CFO.';
      score = 96;
    } else if ((isOffA && isResB) || (isOffB && isResA)) {
      type = 'officer_resource';
      titleZh = '官印双清 · 鼎立治世';
      titleEn = 'Direct Officer & Pure Resource · Institutional Rigor & Fiduciary Stability';
      dynamicZh = '正官主公信名望、严谨法度与程序正义，正印主博学慈爱、信义立身与社会底蕴。双方皆极具自律性与社会责任感，相处如明镜对照，步步为营，享有极高家族门楣与社会声誉。';
      dynamicEn = 'Direct Officer provides institutional integrity and procedural discipline, while Resource fosters enduring scholarship and moral standing. Both embody structured accountability and mutual respect.';
      romanticZh = '相敬如宾之典范。家风严整淳厚，双方在重大决策上均讲求体面、尊重规则与长远信义，子孙家教极优，风评卓绝。';
      romanticEn = 'An exemplar of mutual reverence. Family governance is orderly and gracious; major choices honor long-term family stability and educational excellence.';
      businessZh = '适合长线经营、合规严密之大型机构或受监管行业。一人负责组织治理与外部监管对接，一人掌管内部企业文化与人才梯队培养，基业长青。';
      businessEn = 'Ideal for institutional governance and regulated sectors. One aligns corporate structure with external regulatory mandates, while the other mentors leadership talent.';
      score = 93;
    } else if ((isWlthA && isOffB) || (isWlthB && isOffA)) {
      type = 'wealth_officer';
      titleZh = '财官相生 · 荣身辅政';
      titleEn = 'Wealth Generating Officer · Asset Governance & Institutional Prestige';
      dynamicZh = '财星提供充沛资源赋能与敏锐商业落地，官星主掌社会公信、秩序纲常与组织权威。财以滋官，官以护财，形成财富与地位交相辉映的高维稳态。';
      dynamicEn = 'Wealth provides resource liquidity and pragmatic execution, while Officer anchors institutional reputation, regulatory order, and executive authority. Wealth nourishes authority, while authority safeguards assets.';
      romanticZh = '内实外贵之上等婚配。一方擅于财富积累与务实操盘，另一方树立家庭门楣与社会体面，彼此互为贵人，家道隆昌。';
      romanticEn = 'A distinguished union of prosperity and honor. One compounds family assets while the other elevates societal stature; mutual respect creates an enduring legacy.';
      businessZh = '政商兼修、合规扩张的最佳拍档。财星操盘市场业务与资本运作，官星负责合规风控、政府关系与顶层架构，双剑合璧。';
      businessEn = 'Prime corporate expansion pairing: Wealth partner leads capital allocation and commercial frontiers, while Officer governs compliance, board relations, and institutional stature.';
      score = 94;
    } else if ((isOutA && isKillB) || (isOutB && isKillA)) {
      type = 'output_killing';
      titleZh = '食伤制杀 · 谋勇并举';
      titleEn = 'Creative Strategy & Seven Killings · Visionary Intellect & Frontline Valor';
      dynamicZh = '食伤主超凡智谋、敏锐嗅觉与破局巧劲，七杀主雷霆手段、敢打敢拼与绝地反击。智谋指引勇力，勇力落实谋略，乃攻坚克难之天下无双搭档。';
      dynamicEn = 'Creative output brings visionary insight, agility, and ingenious tactics, while Seven Killings delivers audacious courage and unrelenting frontline execution. Intellect guides force, turning obstacles into breakthroughs.';
      romanticZh = '欢喜冤家与灵魂同盟。一人机敏幽默化解对方的严肃紧绷，另一人以坚实臂膀护佑对方的灵气天真，彼此治愈，越磨合越深厚。';
      romanticEn = 'A vibrant and complementary alliance. One disarms intensity with playful wit and empathy, while the other provides unyielding protective loyalty.';
      businessZh = '破局打硬仗的尖刀连。食伤型合伙人掌舵战略研发、独特商业模式，七杀型合伙人攻坚大客户与市场撕杀，所向披靡。';
      businessEn = 'High-impact market disrupter: Output partner crafts proprietary product and disruptive model, while Killings partner conquers key accounts and drives battlefield execution.';
      score = 92;
    } else if (isResA && isResB) {
      type = 'resource_intellect';
      titleZh = '双印通灵 · 学养同频';
      titleEn = 'Dual Resource Archetype · Philosophical Depth & Fiduciary Calm';
      dynamicZh = '两造皆具深厚学养、静笃心性与博大胸襟。相处时精神交流超越世俗琐碎，彼此心照不宣，互为精神导师与避风良港。';
      dynamicEn = 'Both share contemplative depth, intellectual sophistication, and profound moral integrity. Communication reaches rare spiritual resonance.';
      romanticZh = '灵魂伴侣，琴瑟和鸣。追求精神富足与家庭雅致，生活如品茗清茶，温润悠长，福泽深厚。';
      romanticEn = 'True soulmates cultivating domestic elegance and philosophical peace. Daily life compounds quiet harmony and intellectual kinship.';
      businessZh = '适合文化、学术教育、高端智库或长期资产管理。以信义与声望立身，重口碑胜过短期暴利，声誉卓著。';
      businessEn = 'Superb for think tanks, education, culture, or fiduciary asset management where enduring reputation and institutional integrity prevail.';
      score = 90;
    } else if (isOutA && isOutB) {
      type = 'dual_output';
      titleZh = '双秀争妍 · 灵感共振';
      titleEn = 'Dual Creative Expressive · Innovation Sparks & Shared Vision';
      dynamicZh = '双方皆具天马行空之才华与审美洞见，话题无穷，彼此点燃灵感火花。需在具体执行层面引入第三方制度约束与落实工具。';
      dynamicEn = 'Both possess sparkling aesthetic imagination and creative drive. Conversations sparkle with original ideas; anchoring progress requires structural discipline.';
      romanticZh = '生活处处是诗和远方，充满仪式感与审美惊喜。需注意多落脚于柴米油盐之具体安排，防范情绪共振过激。';
      romanticEn = 'Life is rich with aesthetic spontaneity and romance; balance imaginative aspirations with grounded domestic logistics.';
      businessZh = '极佳的创意产品研发搭档。在内容创作、设计、前沿技术赛道无与伦比，建议引入强执行力的COO团队协助落地交付。';
      businessEn = 'Exceptional creative and R&D synergy in design, tech, and media; pair with a strong operational COO to ensure seamless commercial delivery.';
      score = 89;
    } else if ((isOffA || isKillA) && (isOffB || isKillB)) {
      type = 'dual_sovereign';
      titleZh = '两强竞逐 · 领地分明';
      titleEn = 'Dual Sovereign Helms · Distinct Territorial Sovereignty';
      dynamicZh = '两盘皆具极强统领欲与原则底线，性格刚毅不阿。相合之处在于能对彼此的专业野心感同身受；挑战在于若在同一具体事务上产生分歧，容易互不退让。关键在于“划分独立领地”。';
      dynamicEn = 'Both charts possess formidable executive will and unyielding core principles. They deeply respect each other\'s ambition, yet authority deadlocks emerge if boundaries blur. Success requires absolute territorial demarcation.';
      romanticZh = '避免在家庭琐事上争夺控制权。建议各自拥有完全主导的家庭事务领域（如一人全权负责房产投资，另一人全权负责子女教育），切忌互相微观插手。';
      romanticEn = 'Avoid power struggles over domestic micromanagement. Establish clear sovereign domains where each holds final authority, eliminating territorial encroachment.';
      businessZh = '必须建立联席CEO或CEO与董事长之间的刚性权责防火墙，并在公司章程中引入第三方独立董事或一票否决权分配，杜绝合伙人内耗。';
      businessEn = 'Mandates explicit jurisdictional firewalls in corporate governance, backed by independent board arbitration to prevent founder deadlocks.';
      score = 83;
    } else if ((isPeerA || isPeerB) && (isWlthA || isWlthB)) {
      type = 'companion_wealth';
      titleZh = '财星互制 · 契约筑基';
      titleEn = 'Capital Safeguard · Contractual Clarity & Financial Firewalls';
      dynamicZh = '比劫充盈带来极强拼搏干劲与兄弟同袍之情，但财星受制提示双方在金钱分配、资产确权或风险承担上容易产生认知偏差。必须以“先小人后君子”的透明契约建立信任。';
      dynamicEn = 'High camaraderie and shared grit drive joint endeavors, yet capital ownership and expenditure priorities risk friction. Trust must be grounded in transparent balance sheets and explicit contractual clarity.';
      romanticZh = '家庭资产推行阳光透明化管理。大宗支出共同商议，设立彼此知情的独立零花账户与共同理财账户，防范因人情借贷引发家庭矛盾。';
      romanticEn = 'Maintain full balance sheet transparency. Structure shared savings alongside autonomous personal accounts, safeguarding domestic peace against ambiguous third-party loans.';
      businessZh = '股权代持与口头协议乃合伙大忌。必须在创立之初严格确立出资比例、动态稀释规则与违约退出估值，以法律武器守护纯洁友情。';
      businessEn = 'Never rely on informal verbal understandings. Fortify the partnership with unambiguous cap tables, vesting schedules, and fair-value buyback clauses.';
      score = 81;
    } else {
      type = 'elemental_flow';
      titleZh = '相生相化 · 稳健滋养';
      titleEn = 'Harmonious Circulation & Gentle Nourishment';
      dynamicZh = '双盘五行与格局气机顺畅相通，虽无惊涛骇浪之戏剧性冲撞，却胜在细水长流之默契与滋养。在彼此陪伴中不断修正自身偏颇，渐入佳境。';
      dynamicEn = 'Energetic patterns circulate smoothly without volatile polarity. Steady mutual nourishment provides enduring grounding, allowing both charts to flourish through reciprocal patience.';
      romanticZh = '日常生活温润和睦，价值观与消费观相近，相濡以沫，家和万事兴。';
      romanticEn = 'Daily life is peaceful and harmonious; shared values foster gentle companionship and long-term domestic tranquility.';
      businessZh = '稳扎稳打的同侪协同伙伴，以务实沟通与互信为基石，在既定赛道上稳步复利增长。';
      businessEn = 'A grounded, pragmatic operational alliance compounding steady progress along established objectives.';
      score = 88;
    }

    const directivesZh = [
      '确立清晰的职能与心理边界，主客位分明，互不越俎代庖。',
      '在对方主导的专业领域给予100%信任与最终裁量权。',
      '以结构化制度与定期复盘代替情绪化摩擦，将格局反差转化为互补势能。'
    ];
    const directivesEn = [
      'Establish clear operational and psychological boundaries with defined sovereign domains.',
      'Grant 100% trust and decisive authority within each other\'s primary functional purview.',
      'Channel structural divergence into mutual leverage via periodic review rather than emotional debate.'
    ];

    const interactionObj = {
      type,
      title: isEn ? titleEn : titleZh,
      score,
      dynamic: isEn ? dynamicEn : dynamicZh,
      romanticDirective: isEn ? romanticEn : romanticZh,
      businessDirective: isEn ? businessEn : businessZh,
      modeDirective: isRomantic ? (isEn ? romanticEn : romanticZh) : (isEn ? businessEn : businessZh),
      directives: isEn ? directivesEn : directivesZh
    };
    if (!isEn) {
      interactionObj.titleZh = titleZh;
      interactionObj.titleEn = titleEn;
      interactionObj.dynamicZh = dynamicZh;
      interactionObj.dynamicEn = dynamicEn;
      interactionObj.romanticDirectiveZh = romanticZh;
      interactionObj.romanticDirectiveEn = romanticEn;
      interactionObj.businessDirectiveZh = businessZh;
      interactionObj.businessDirectiveEn = businessEn;
      interactionObj.directivesZh = directivesZh;
      interactionObj.directivesEn = directivesEn;
    }

    const resPatternObj = {
      dominantA: {
        name: isEn ? domA.nameEn : domA.nameZh,
        weightPct: domA.weightPct,
        role: isEn ? domA.roleEn : domA.roleZh
      },
      dominantB: {
        name: isEn ? domB.nameEn : domB.nameZh,
        weightPct: domB.weightPct,
        role: isEn ? domB.roleEn : domB.roleZh
      },
      top3PatternsA: patsA.map(p => ({
        rank: p.rank,
        name: isEn ? p.nameEn : p.nameZh,
        weightPct: p.weightPct
      })),
      top3PatternsB: patsB.map(p => ({
        rank: p.rank,
        name: isEn ? p.nameEn : p.nameZh,
        weightPct: p.weightPct
      })),
      interaction: interactionObj
    };
    if (!isEn) {
      resPatternObj.dominantA.nameZh = domA.nameZh;
      resPatternObj.dominantA.nameEn = domA.nameEn;
      resPatternObj.dominantA.roleZh = domA.roleZh;
      resPatternObj.dominantA.roleEn = domA.roleEn;
      resPatternObj.dominantB.nameZh = domB.nameZh;
      resPatternObj.dominantB.nameEn = domB.nameEn;
      resPatternObj.dominantB.roleZh = domB.roleZh;
      resPatternObj.dominantB.roleEn = domB.roleEn;
    }
    return resPatternObj;
  }

  // 13. Lifelong Trajectory Overlap & Decennial Synchronization
  function evaluateTrajectoryOverlap(chartA, chartB, isRomantic, isEn) {
    let luckA = null;
    let luckB = null;
    if (typeof LuckEngine !== 'undefined' && typeof LuckEngine.calculateLuck === 'function') {
      try {
        luckA = LuckEngine.calculateLuck(chartA);
        luckB = LuckEngine.calculateLuck(chartB);
      } catch (e) {}
    }

    const decsA = (luckA && luckA.decades && luckA.decades.length > 0) ? luckA.decades : null;
    const decsB = (luckB && luckB.decades && luckB.decades.length > 0) ? luckB.decades : null;

    const ageSpans = [
      { age: 25, spanZh: '20~29岁 (青年起势)', spanEn: 'Age 20-29 (Youth Inception)' },
      { age: 35, spanZh: '30~39岁 (而立拓荒)', spanEn: 'Age 30-39 (Career Foundation)' },
      { age: 45, spanZh: '40~49岁 (不惑鼎盛)', spanEn: 'Age 40-49 (Prime Apex)' },
      { age: 55, spanZh: '50~59岁 (知命操盘)', spanEn: 'Age 50-59 (Executive Stewardship)' },
      { age: 65, spanZh: '60~69岁 (花甲守成)', spanEn: 'Age 60-69 (Wisdom Legacy)' },
      { age: 75, spanZh: '70~79岁 (古稀颐养)', spanEn: 'Age 70-79 (Serene Harmony)' }
    ];

    const findDecadeForAge = (decs, targetAge, fallbackIdx) => {
      if (!decs || decs.length === 0) return null;
      const found = decs.find(d => typeof d.ageStart === 'number' && typeof d.ageEnd === 'number' && targetAge >= d.ageStart && targetAge <= d.ageEnd);
      if (found) return found;
      let closest = decs[0];
      let minDiff = 999;
      decs.forEach(d => {
        const mid = (typeof d.ageStart === 'number' && typeof d.ageEnd === 'number') ? (d.ageStart + d.ageEnd) / 2 : 50;
        const diff = Math.abs(mid - targetAge);
        if (diff < minDiff) {
          minDiff = diff;
          closest = d;
        }
      });
      return closest || decs[Math.min(fallbackIdx, decs.length - 1)];
    };

    const deriveDecadeScore = (dec, idx) => {
      if (!dec) return 70;
      if (typeof dec.score === 'number') return dec.score;
      const rating = (dec.fortune && dec.fortune.rating) || (dec.isFavorable ? 'good' : 'caution');
      if (rating === 'good' || rating === 'auspicious') {
        return 82 + ((idx * 3) % 10);
      } else if (rating === 'bad' || rating === 'challenging') {
        return 58 + ((idx * 2) % 8);
      } else if (rating === 'caution' || rating === 'warning') {
        return 65 + ((idx * 2) % 6);
      }
      return 72 + ((idx * 2) % 6);
    };

    let peakCount = 0;
    let supportCount = 0;
    let jointDefenseCount = 0;

    const milestoneDecades = ageSpans.map((sp, idx) => {
      const decA = findDecadeForAge(decsA, sp.age, idx) || {
        stem: '甲', branch: '寅', text: '甲寅', stemGod: '比肩', naYin: '大溪水', isFavorable: idx % 2 === 0
      };
      const decB = findDecadeForAge(decsB, sp.age, idx) || {
        stem: '丙', branch: '午', text: '丙午', stemGod: '正印', naYin: '天河水', isFavorable: idx !== 1
      };

      const scoreA = deriveDecadeScore(decA, idx);
      const scoreB = deriveDecadeScore(decB, idx);

      const delta = Math.abs(scoreA - scoreB);
      let phaseType = 'steady';
      let phaseBadgeZh = '同舟共济 · 稳健守成';
      let phaseBadgeEn = 'Joint Steadfast Stewardship';
      let verdictZh = '';
      let verdictEn = '';

      if (scoreA >= 75 && scoreB >= 75) {
        phaseType = 'peak_resonance';
        phaseBadgeZh = '双星合耀 · 黄金共振';
        phaseBadgeEn = 'Synchronized Prime Apex';
        verdictZh = '两造岁运同步逢吉乘风破浪，适宜同心协力大举开拓事业、合伙创业或购置核心家产。';
        verdictEn = 'Both charts operate under peak momentum; expand ventures boldly and consolidate major family assets.';
        peakCount++;
      } else if (delta >= 14) {
        phaseType = 'counterbalance_support';
        phaseBadgeZh = '一进一退 · 压舱石互补';
        phaseBadgeEn = 'Counterbalance Anchor Window';
        if (scoreA > scoreB) {
          verdictZh = '甲造值逢高势能黄金期托底全局，乙造顺势韬光养晦修持内功，互为避风港。';
          verdictEn = 'Person A commands prime momentum to advance, while Person B anchors the base with deep prudence.';
        } else {
          verdictZh = '乙造高势能运势庇护全局，甲造稳固后方筑牢资产防波堤，攻守有度。';
          verdictEn = 'Person B commands prime momentum to advance, while Person A provides steadfast domestic and capital ballast.';
        }
        supportCount++;
      } else {
        phaseType = 'joint_defense';
        phaseBadgeZh = '同舟共济 · 稳守防线';
        phaseBadgeEn = 'Joint Defensive Consolidation';
        verdictZh = '气机平和中正，宜守正不冒进，严控财务杠杆，注重身心健康与家庭温情。';
        verdictEn = 'Equable momentum favors disciplined pacing; avoid speculative leverage and invest in wellness.';
        jointDefenseCount++;
      }

      const stemAEn = (typeof I18N !== 'undefined' && I18N.getStem) ? I18N.getStem(decA.stem, 'en').split(' ')[0] : (STEM_NAMES_EN[decA.stem] || decA.stem);
      const branchAEn = (typeof I18N !== 'undefined' && I18N.getBranch) ? I18N.getBranch(decA.branch, 'en').split(' ')[0] : (BRANCH_PINYIN[decA.branch] || decA.branch);
      const stemBEn = (typeof I18N !== 'undefined' && I18N.getStem) ? I18N.getStem(decB.stem, 'en').split(' ')[0] : (STEM_NAMES_EN[decB.stem] || decB.stem);
      const branchBEn = (typeof I18N !== 'undefined' && I18N.getBranch) ? I18N.getBranch(decB.branch, 'en').split(' ')[0] : (BRANCH_PINYIN[decB.branch] || decB.branch);

      const godAEn = getTenGodEn(decA.stemGod);
      const godBEn = getTenGodEn(decB.stemGod);

      const mObj = {
        decadeIndex: idx + 1,
        ageSpan: isEn ? sp.spanEn : sp.spanZh,
        phaseType,
        phaseBadge: isEn ? phaseBadgeEn : phaseBadgeZh,
        pillarA: {
          text: isEn ? `${stemAEn}-${branchAEn}` : (decA.text || `${decA.stem}${decA.branch}`),
          stemGod: isEn ? godAEn : decA.stemGod,
          score: scoreA
        },
        pillarB: {
          text: isEn ? `${stemBEn}-${branchBEn}` : (decB.text || `${decB.stem}${decB.branch}`),
          stemGod: isEn ? godBEn : decB.stemGod,
          score: scoreB
        },
        verdict: isEn ? verdictEn : verdictZh
      };
      if (!isEn) {
        mObj.ageSpanZh = sp.spanZh;
        mObj.ageSpanEn = sp.spanEn;
        mObj.phaseBadgeZh = phaseBadgeZh;
        mObj.phaseBadgeEn = phaseBadgeEn;
        mObj.verdictZh = verdictZh;
        mObj.verdictEn = verdictEn;
      }
      return mObj;
    });

    const syncIndex = Math.min(96, Math.max(68, Math.round(72 + (peakCount * 4) + (supportCount * 3))));

    const summaryZh = `双人岁运推演整体重合度高达 ${syncIndex}%。两造在黄金大运上有 ${peakCount} 个大运周期处于“双星合耀·协同爆发”窗口，并有 ${supportCount} 个周期形成绝佳的“一进一退·互为压舱石”互补机制，极少出现双双受困无解之绝境，属运势同舟共济之上等配合。`;
    const summaryEn = `Overall lifelong trajectory synchronization stands at an impressive ${syncIndex}%. The dual charts feature ${peakCount} prime decennial cycles in Synchronized Apex Resonance, alongside ${supportCount} complementary shock-absorber cycles where one shields while the other consolidates, minimizing systemic vulnerability.`;

    const trajObj = {
      synchronizationIndex: syncIndex,
      peakWindowsCount: peakCount,
      supportWindowsCount: supportCount,
      jointDefenseWindowsCount: jointDefenseCount,
      summary: isEn ? summaryEn : summaryZh,
      milestones: milestoneDecades,
      timelineA: (luckA && luckA.timeline) ? luckA.timeline : [],
      timelineB: (luckB && luckB.timeline) ? luckB.timeline : []
    };
    if (!isEn) {
      trajObj.summaryZh = summaryZh;
      trajObj.summaryEn = summaryEn;
    }
    return trajObj;
  }

  // 14. Life Focal Priorities & Core Values
  function evaluateLifePriorities(chartA, chartB, isRomantic, isEn) {
    const calcDimensions = (chart) => {
      const p = chart.pillars || {};
      const gods = [];
      ['year', 'month', 'day', 'hour'].forEach(k => {
        if (p[k]) {
          if (p[k].stemGod && !p[k].stemGod.includes('元神') && !p[k].stemGod.includes('日主')) {
            gods.push(p[k].stemGod);
          }
          if (Array.isArray(p[k].hidden)) {
            p[k].hidden.forEach(h => {
              if (h && h.god) gods.push(h.god);
            });
          }
        }
      });
      const els = (chart.elements && (chart.elements.percentages || chart.elements)) || {};

      const countGod = (re) => gods.filter(g => re.test(g)).length;
      const getEl = (el) => parseFloat(els[el] || 20);

      const career = Math.round(Math.min(96, Math.max(38, 44 + countGod(/七杀|偏官/) * 12 + countGod(/正官/) * 10 + countGod(/伤官/) * 8 + (getEl('火') + getEl('金')) * 0.22)));
      const wealth = Math.round(Math.min(96, Math.max(38, 46 + countGod(/偏财/) * 12 + countGod(/正财/) * 11 + (getEl('土') + getEl('金')) * 0.22)));
      const domestic = Math.round(Math.min(96, Math.max(38, 46 + countGod(/正印/) * 13 + countGod(/正官/) * 8 + (getEl('水') + getEl('土')) * 0.22)));
      const spiritual = Math.round(Math.min(96, Math.max(38, 42 + countGod(/偏印/) * 13 + countGod(/食神/) * 10 + (getEl('木') + getEl('水')) * 0.24)));
      const autonomy = Math.round(Math.min(96, Math.max(38, 43 + countGod(/比肩/) * 11 + countGod(/劫财/) * 12 + countGod(/伤官/) * 7 + (getEl('木') + getEl('火')) * 0.20)));

      return { career, wealth, domestic, spiritual, autonomy };
    };

    const dimsA = calcDimensions(chartA);
    const dimsB = calcDimensions(chartB);

    const dimList = [
      { key: 'career', nameZh: '事业开拓与权柄驱动', nameEn: 'Career Ambition & Authority', descZh: '追求社会地位、事业天梯登顶与终局商业影响力', descEn: 'Aspiration for executive leadership, social standing, and career impact' },
      { key: 'wealth', nameZh: '金玉资财与资产安全', nameEn: 'Wealth Accumulation & Capital Security', descZh: '重视资产稳固增值、被动收益与防御性现金流防波堤', descEn: 'Emphasis on wealth creation, compounding yield, and downside protection' },
      { key: 'domestic', nameZh: '家庭温情与后方港湾', nameEn: 'Domestic Sanctuary & Emotional Anchor', descZh: '重视家宅和睦、后方安宁陪伴与伴侣间的心灵依归', descEn: 'Focus on domestic peace, mutual care, and family foundation' },
      { key: 'spiritual', nameZh: '精神求索与智识共鸣', nameEn: 'Spiritual Growth & Intellectual Depth', descZh: '追求认知升维、心智自由度与形而上的哲学深度', descEn: 'Dedication to cognitive expansion, intellectual inquiry, and inner peace' },
      { key: 'autonomy', nameZh: '社交声誉与独立空间', nameEn: 'Social Autonomy & Personal Freedom', descZh: '保持边界清晰的个人独立空间、同侪声望与自由探索', descEn: 'Desire for personal boundaries, peer recognition, and personal autonomy' }
    ];

    let totalDelta = 0;
    const comparisons = dimList.map(dim => {
      const valA = dimsA[dim.key];
      const valB = dimsB[dim.key];
      const delta = Math.abs(valA - valB);
      totalDelta += delta;

      let statusZh = '高度共鸣 · 同向同频';
      let statusEn = 'Strong Concordance · Unified Vision';
      if (delta >= 18) {
        statusZh = valA > valB ? '甲造侧重偏高 · 需乙造理解' : '乙造侧重偏高 · 需甲造体察';
        statusEn = valA > valB ? 'Person A Priority Higher · Mutual Pacing Needed' : 'Person B Priority Higher · Mutual Pacing Needed';
      } else if (delta >= 10) {
        statusZh = '互补适中 · 协调互鉴';
        statusEn = 'Balanced Complementarity · Steady Synergy';
      }

      const cObj = {
        key: dim.key,
        name: isEn ? dim.nameEn : dim.nameZh,
        desc: isEn ? dim.descEn : dim.descZh,
        scoreA: valA,
        scoreB: valB,
        delta,
        status: isEn ? statusEn : statusZh
      };
      if (!isEn) {
        cObj.nameZh = dim.nameZh;
        cObj.nameEn = dim.nameEn;
        cObj.descZh = dim.descZh;
        cObj.descEn = dim.descEn;
        cObj.statusZh = statusZh;
        cObj.statusEn = statusEn;
      }
      return cObj;
    });

    const alignmentScore = Math.min(96, Math.max(62, Math.round(100 - (totalDelta / 5) * 1.1)));

    const sortedA = [...comparisons].sort((a, b) => b.scoreA - a.scoreA);
    const sortedB = [...comparisons].sort((a, b) => b.scoreB - a.scoreB);

    const topA = sortedA[0];
    const topB = sortedB[0];

    const convergences = comparisons.filter(c => c.delta <= 10).map(c => ({
      name: isEn ? c.nameEn : (c.nameZh || c.name),
      desc: isEn ? `Both share strong parity in ${c.nameEn || c.name} (${c.scoreA} vs ${c.scoreB}).` : `双方在【${c.nameZh || c.name}】上保持高度一致（${c.scoreA}分 vs ${c.scoreB}分），是最坚实的合作基石。`
    }));

    const divergences = comparisons.filter(c => c.delta >= 14).map(c => ({
      name: isEn ? c.nameEn : (c.nameZh || c.name),
      desc: isEn ? `Divergence in ${c.nameEn || c.name} (${c.scoreA} vs ${c.scoreB}); requires conscious pacing and mutual boundaries.` : `在【${c.nameZh || c.name}】上存在认知温差（${c.scoreA}分 vs ${c.scoreB}分），需建立包容妥协机制。`
    }));

    const protocolZh = isRomantic
      ? `【婚恋核心价值观调和法则】：甲造第一核心支点在【${topA.nameZh || topA.name}】，乙造第一核心支点在【${topB.nameZh || topB.name}】。双方在重大人生决策时，切忌以自身偏好强加对方，应当建立“你负责仰望星空，我负责脚踏实地”的弹性角色分工，在尊重差异中将反差转化为家庭护城河。`
      : `【商业合伙核心价值观调和法则】：甲造聚焦【${topA.nameZh || topA.name}】，乙造聚焦【${topB.nameZh || topB.name}】。在公司顶层治理中，应根据各自价值观侧重点设立分工专长（如重开拓者掌业务，重安全者掌风控），以明确考核目标取代主观价值判断。`;

    const protocolEn = isRomantic
      ? `[Marital Core Value Harmony Protocol]: Person A's primary anchor is [${topA.nameEn || topA.name}], while Person B centers on [${topB.nameEn || topB.name}]. In major family transitions, celebrate divergent orientations as complementary strengths: one drives expansive vision while the other anchors foundational peace.`
      : `[Commercial Co-founder Alignment Protocol]: Person A centers on [${topA.nameEn || topA.name}], while Person B prioritizes [${topB.nameEn || topB.name}]. Structure corporate governance to leverage these distinct priorities (e.g., expansion driver leads business frontiers, security driver governs risk controls).`;

    const lifeObj = {
      alignmentScore,
      topPriorityA: {
        key: topA.key,
        name: isEn ? (topA.nameEn || topA.name) : (topA.nameZh || topA.name),
        score: topA.scoreA
      },
      topPriorityB: {
        key: topB.key,
        name: isEn ? (topB.nameEn || topB.name) : (topB.nameZh || topB.name),
        score: topB.scoreB
      },
      dimensions: comparisons,
      convergences,
      divergences,
      harmonyProtocol: isEn ? protocolEn : protocolZh
    };
    if (!isEn) {
      lifeObj.harmonyProtocolZh = protocolZh;
      lifeObj.harmonyProtocolEn = protocolEn;
    }
    return lifeObj;
  }

  // 15. Dual Five Elements Breakdown & Comparative Assessment
  function evaluateElementComparison(elA, elB, dmA, dmB, isEn) {
    const elements = ['木', '火', '土', '金', '水'];
    const breakdown = elements.map(el => {
      const valA = parseFloat(elA[el] || 0);
      const valB = parseFloat(elB[el] || 0);
      const combinedVal = Math.round(((valA + valB) / 2) * 10) / 10;
      const diff = Math.round((valA - valB) * 10) / 10;
      const elEn = ELEMENT_NAMES_EN[el] || el;

      function getStatus(val, isEnglish) {
        if (val >= 35) return isEnglish ? 'Surplus' : '过旺';
        if (val >= 22) return isEnglish ? 'Abundant' : '充沛';
        if (val >= 14) return isEnglish ? 'Balanced' : '适中';
        if (val >= 6) return isEnglish ? 'Deficient' : '偏弱';
        return isEnglish ? 'Depleted' : '匮乏';
      }

      const statusA = getStatus(valA, false);
      const statusB = getStatus(valB, false);
      const statusAEn = getStatus(valA, true);
      const statusBEn = getStatus(valB, true);

      let synergyNoteZh = '';
      let synergyNoteEn = '';

      if (valA < 14 && valB >= 22) {
        synergyNoteZh = `乙造${el}气充沛，自然弥补甲造匮乏，形成生机互济之势。`;
        synergyNoteEn = `Person B supplies abundant ${elEn}, replenishing Person A's deficiency and creating natural equilibrium.`;
      } else if (valB < 14 && valA >= 22) {
        synergyNoteZh = `甲造${el}气盈满，源源滋养乙造不足，构成良性能量滋润。`;
        synergyNoteEn = `Person A provides rich ${elEn}, nourishing Person B's shortfall and sustaining metabolic harmony.`;
      } else if (valA >= 22 && valB >= 22) {
        synergyNoteZh = `双盘${el}气皆旺，势能强劲，宜设泄秀与引导通道以防过亢。`;
        synergyNoteEn = `Both charts carry robust ${elEn}, creating formidable momentum that benefits from intentional grounding channels.`;
      } else if (valA < 12 && valB < 12) {
        synergyNoteZh = `双盘${el}气皆偏少，属于共同薄弱板块，需在岁运逢此五行时借势调补。`;
        synergyNoteEn = `Both charts show leaner ${elEn}, identifying a shared growth sector that thrives through cyclical seasonal support.`;
      } else {
        synergyNoteZh = `双盘${el}气适度均衡，气运流通稳定，维持自足平顺。`;
        synergyNoteEn = `Both charts sustain balanced ${elEn}, maintaining steady self-contained equilibrium.`;
      }

      const statusTagZh = (valA < 14 && valB >= 22) || (valB < 14 && valA >= 22)
        ? '良性互补'
        : (valA >= 22 && valB >= 22)
          ? '双旺共振'
          : (valA < 12 && valB < 12)
            ? '同需待济'
            : '平顺中和';

      const statusTagEn = (valA < 14 && valB >= 22) || (valB < 14 && valA >= 22)
        ? 'Mutual Complement'
        : (valA >= 22 && valB >= 22)
          ? 'Dual Strong'
          : (valA < 12 && valB < 12)
            ? 'Shared Lean'
            : 'Harmonious';

      return {
        element: isEn ? elEn : el,
        elementEn: elEn,
        pctA: valA,
        pctB: valB,
        combinedPct: combinedVal,
        diff,
        statusA: isEn ? statusAEn : statusA,
        statusB: isEn ? statusBEn : statusB,
        statusAEn,
        statusBEn,
        statusTag: isEn ? statusTagEn : statusTagZh,
        statusTagZh,
        statusTagEn,
        synergyNote: isEn ? synergyNoteEn : synergyNoteZh,
        synergyNoteZh,
        synergyNoteEn,
        ...(!isEn ? {
          elementZh: el,
          statusAZh: statusA,
          statusBZh: statusB
        } : {})
      };
    });

    const dominantEl = breakdown.reduce((max, cur) => cur.combinedPct > max.combinedPct ? cur : max, breakdown[0]);
    const leanEl = breakdown.reduce((min, cur) => cur.combinedPct < min.combinedPct ? cur : min, breakdown[0]);

    const balanceVerdictZh = `双盘五行能量合参：两盘汇聚后最富集元素为【${dominantEl.element}】（平均占比 ${dominantEl.combinedPct}%），最需关注补益元素为【${leanEl.element}】（平均占比 ${leanEl.combinedPct}%）。整体气机呈现“互有盈缺、生化有情”之大生态，能够有效对冲单一命局的五行偏颇，形成更具抗压韧性的生命共同体。`;
    const balanceVerdictEn = `Composite Elemental Diagnostics: The most abundant shared element is ${dominantEl.elementEn} (${dominantEl.combinedPct}%), while the primary development element is ${leanEl.elementEn} (${leanEl.combinedPct}%). Combined energetics form a complementary circuit where individual excesses and deficits balance naturally, fostering shared psychological resilience and vitality.`;

    return {
      breakdown,
      dominantElement: isEn ? dominantEl.elementEn : dominantEl.element,
      leanElement: isEn ? leanEl.elementEn : leanEl.element,
      balanceVerdict: isEn ? balanceVerdictEn : balanceVerdictZh,
      balanceVerdictZh,
      balanceVerdictEn
    };
  }

  // 16. Merged Relationship Synthesis & Dynamics Portrait
  function generateMergedRelationshipPortrait(chartA, chartB, score, archetype, hasStemCombo, hasSixHarmony, hasSixClash, isRomantic, isEn) {
    const dmA = chartA.dayMaster || '甲';
    const dmB = chartB.dayMaster || '乙';
    const dmAEn = STEM_NAMES_EN[dmA] || dmA;
    const dmBEn = STEM_NAMES_EN[dmB] || dmB;

    let titleZh = isRomantic ? '【合盘复合全相 · 关系定调与动力学画像】' : '【合伙复合全相 · 战略共生与博弈画像】';
    let titleEn = isRomantic ? '[Composite Union · Core Dynamics & Relational Synthesis]' : '[Executive Partnership · Strategic Synthesis & Dynamics]';

    let natureZh = '';
    let natureEn = '';
    let emotionalToneZh = '';
    let emotionalToneEn = '';
    let decisionModeZh = '';
    let decisionModeEn = '';
    let longTermEvolutionZh = '';
    let longTermEvolutionEn = '';

    if (isRomantic) {
      if (score >= 80) {
        natureZh = `双造命盘合参，气机融洽而神魂相依。并非单向依附的偏颇组合，而是两套成熟引力系统在深层心灵轨道上的同频共振。甲造日元【${dmA}】与乙造日元【${dmB}】在精神深处极易形成心照不宣的信任托底，日常如细雨润物，遇风浪则合抱如磐石。`;
        natureEn = `The composite chart exhibits profound harmonic resonance and mutual elevation. Rather than one-way dependence, two mature gravitational fields synchronize in shared orbital alignment. Day Masters [${dmAEn}] and [${dmBEn}] foster instinctive emotional sanctuary, tranquil in calm periods and unshakeable amidst external storms.`;
        emotionalToneZh = `情感底色温厚而坚定，相处少有歇斯底里的情绪内耗。彼此能敏锐察觉对方未言说的倦意与隐忧，以恰如其分的体谅给予包容空间。`;
        emotionalToneEn = `The emotional atmosphere is grounded and reassuring with negligible drama; both partners perceive subtle unspoken fatigue and provide spacious, restorative empathy.`;
        decisionModeZh = `天然形成“内外协同、商量共进”的双轨决策机制。一方长于大方向直觉定调，另一方长于细节推敲与稳妥落地，极少因个人意志凌驾对方。`;
        decisionModeEn = `Natural dual-track governance: intuitive directional vision integrates smoothly with prudent operational validation, avoiding autocratic unilateralism.`;
        longTermEvolutionZh = `随着岁月演进，彼此性格棱角自发被岁月温润磨平，共同资产与精神家园呈现持续复利累积，越老越见情深。`;
        longTermEvolutionEn = `Long-term trajectory compounds mutual domestic and psychological ballast, gracefully softening sharp edges into enduring warmth and shared security.`;
      } else {
        natureZh = `双造命盘交汇，属于典型的“水火激荡 · 砥砺共生”格局。性格底色鲜明迥异，既能碰撞出惊艳的灵感火花与深刻吸引力，又对各自的独立边界提出极高修炼要求。相处的关键在于“视差异为礼物而非威胁”。`;
        natureEn = `The composite union embodies dynamic polarity and transformative growth. Contrasting constitutional temperaments generate profound creative chemistry alongside distinct personal boundaries, thriving when differences are embraced as gifts rather than threats.`;
        emotionalToneZh = `情绪互动张力十足，热烈时如胶似漆，执拗时各不相让。需谨防在日常疲惫时将工作生活压力转嫁到伴侣身上，宜以幽默化解刚硬。`;
        emotionalToneEn = `Emotional dynamics carry high creative voltage; passionate rapport requires conscious mindfulness during high fatigue to prevent stress displacement onto each other.`;
        decisionModeZh = `建议确立明确的家庭领域分工，避免在同一微观事务上争夺谁对谁错，各自在其擅长的版块拥有最终决策权，大宗支出共同签署。`;
        decisionModeEn = `Clear domain demarcation is essential: designate sovereign spheres of authority for domestic and financial matters, reserving joint sign-off strictly for major capital outlays.`;
        longTermEvolutionZh = `经过前期磨合与规则确立后，双方将成为彼此生命中最不可替代的“破局合伙人与灵魂解药”，同甘共苦，历久弥坚。`;
        longTermEvolutionEn = `Following early alignment and structured communication bylaws, the partnership evolves into an irreplaceable anchor of mutual growth and resilience.`;
      }
    } else {
      // Business mode
      if (score >= 80) {
        natureZh = `商业合伙之王炸组合，属于典型的“将相和鸣 · 攻守闭环”。甲造日元【${dmA}】与乙造日元【${dmB}】在战略决策与商业嗅觉上形成天然闭环：一人决断如雷主攻外部市场拓展，一人周密严谨主掌内部运营与风控底线。`;
        natureEn = `An elite commercial co-founding alliance characterized by unified executive vision and closed-loop execution. Day Masters [${dmAEn}] and [${dmBEn}] create seamless attack-and-defense leverage: external market velocity integrates with ironclad fiduciary risk containment.`;
        emotionalToneZh = `以高度职业化信任与共赢契约为基底，能把彼此最真实的战略疑虑摊开辩论而不伤私交，重大危机时具备无条件把后背交托对方的默契。`;
        emotionalToneEn = `Anchored in rigorous professional fiduciary trust; allows uninhibited intellectual debate without interpersonal friction, backed by unwavering loyalty in high-stakes crises.`;
        decisionModeZh = `推行“双首席联席制”：前台拓展与商业模式由领军者定调，中后台运营合规与资金清算由稳健者一票否决，权责分明无内耗。`;
        decisionModeEn = `Dual-Chief Protocol: commercial expansion and strategy rest with the frontier lead, while capital allocation and compliance are safeguarded by the operational fiduciary.`;
        longTermEvolutionZh = `商业价值呈几何级数放大，随着企业规模扩张，双人组合将形成难以被竞争对手复制的复合护城河，合伙基业长青。`;
        longTermEvolutionEn = `Commercial valuation scales geometrically; as operations expand, the dual-helm apparatus builds an impenetrable institutional moat.`;
      } else {
        natureZh = `属于“契约筑基 · 职能分明”的务实博弈型搭档。双方皆具备极强专业才能与主见，但由于气机存在一定制衡摩擦，绝不能靠情感或口头承诺维系，必须依托冰冷的契约条款与透明的治理机制。`;
        natureEn = `A pragmatic, contract-fortified operational partnership. Both founders carry pronounced expertise and ambition; enduring success depends entirely on explicit bylaws and transparent equity covenants rather than informal verbal understandings.`;
        emotionalToneZh = `理性克制、公私分明。在商言商，以KPI与实际交付成果为衡量标尺，避免情感绑架与模糊妥协。`;
        emotionalToneEn = `Pragmatic, rational, and objective. Performance metrics and measurable deliverables anchor the collaboration, eliminating emotional ambiguity.`;
        decisionModeZh = `必须建立刚性表决章程与第三方独立董事仲裁机制，并在创业初期明确股权动态兑现机制（Vesting）与争议退出清算通道。`;
        decisionModeEn = `Mandates explicit governance voting rules, equity vesting schedules, and fair-value buyback clauses to arbitrate deadlock cleanly.`;
        longTermEvolutionZh = `只要权责与利益分配机制公正透明，双方能在既定业务赛道上持续稳健推进，打造经得起资本市场检验的合规企业。`;
        longTermEvolutionEn = `Protected by transparent cap tables and defined boundaries, the venture steadily captures market share and sustains institutional durability.`;
      }
    }

    return {
      title: isEn ? titleEn : titleZh,
      nature: isEn ? natureEn : natureZh,
      emotionalTone: isEn ? emotionalToneEn : emotionalToneZh,
      decisionMode: isEn ? decisionModeEn : decisionModeZh,
      longTermEvolution: isEn ? longTermEvolutionEn : longTermEvolutionZh,
      titleZh, titleEn,
      natureZh, natureEn,
      emotionalToneZh, emotionalToneEn,
      decisionModeZh, decisionModeEn,
      longTermEvolutionZh, longTermEvolutionEn
    };
  }

  // 17. Core Advantages vs Hidden Hazards & Tactical Actionable Protocols
  function generateAdvantagesAndHazards(chartA, chartB, score, elComp, isRomantic, isEn) {
    const adv1Zh = {
      title: '五行气机交融 · 天然死角补齐',
      titleEn: 'Complementary Elemental Circuit & Vitality Balancing',
      desc: '双盘五行能量交汇后，单一原局的匮乏元素在合盘后自发获得充沛滋养，使身体精力、情绪稳定性与抗压阈值大幅提升。',
      descEn: 'Merged elemental energetics replenish individual constitutional deficits naturally, boosting stamina, emotional stability, and baseline stress tolerance.',
      impact: '大幅减轻长期单打独斗的疲劳透支感，日常相处自发带来身心舒展与安全感。',
      impactEn: 'Eliminates chronic burnout and fosters effortless mutual restorative calm.'
    };

    const adv2Zh = {
      title: isRomantic ? '格局攻守兼备 · 家庭事业双轮驱动' : '战略与执行闭环 · 商业价值成倍放大',
      titleEn: isRomantic ? 'Dual-Engine Leverage · Holistic Life Prosperity' : 'Strategic & Operational Synergy · Compounding Commercial Leverage',
      desc: isRomantic
        ? '两造主导格局分工明晰，一人擅长对外破局开拓或立足社会门楣，另一人擅长深耕内在秩序、财富风控与生活审美，形成“外有战力、内有静气”的良性稳态。'
        : '一人掌舵战略视野与商业模式拓荒，一人筑牢中后台交付、财务清算与合规防火墙。分工不重叠、能力互为杠杆，形成商业攻防闭环。',
      descEn: isRomantic
        ? 'Clear operational archetypes eliminate rivalry: one excels in external career conquest while the other anchors domestic governance and asset stewardship.'
        : 'One leads visionary growth and dealmaking while the other reinforces execution and compliance, multiplying collective commercial effectiveness.',
      impact: isRomantic ? '家庭整体抗周期风浪能力极强，兼顾物质丰盈与精神归宿。' : '大幅降低创业试错成本，决策周密，企业在竞争红海中脱颖而出。',
      impactEn: isRomantic ? 'Robust household antifragility balancing wealth growth with domestic peace.' : 'Significantly reduces venture failure risk and builds an enduring institutional moat.'
    };

    const adv3Zh = {
      title: '关键时刻不离不弃 · 逆境压舱石效应',
      titleEn: 'Adversity Resilience & Joint Crisis Ballast',
      desc: '合盘根基与岁运同频度经受得住现实考验。在面对大环境经济周期波动、职业转换或家庭重大变故时，双方天然具备高度认同的底层价值观，能迅速协同御敌。',
      descEn: 'High structural baseline stability and decennial synchronization provide unshakeable solidarity during economic downturns, health challenges, or career shifts.',
      impact: '越是在狂风骤雨的艰难关头，双人合力越显从容强大，不易被世俗困难击溃。',
      impactEn: 'The partnership strengthens under pressure, transforming volatile adversity into shared triumph.'
    };

    // Hazards with actionable remedies
    const haz1Zh = {
      title: '意志碰撞与主导权边界摩擦',
      titleEn: 'Ego Contention & Sovereign Territory Friction',
      desc: '两盘命格均带有一方统领之气，各自在擅长领域极有原则与掌控欲。若在具体事务上边界模糊，容易在无意识中干涉对方主权，引发隐蔽对抗。',
      descEn: 'Both charts possess pronounced executive wills; without clear division of responsibilities, boundary overlap can trigger unspoken power struggles.',
      remedy: '【落地规避锦囊】推行“领域绝对自治法则”：在生活或商业中严格划定各自全权负责的独立领地，彼此在对方领域内只提供参谋建议，不作强制干涉。',
      remedyEn: 'Actionable Protocol: Implement the Sovereign Domain Rule—grant absolute final veto to each partner in their designated domain, restricting the other to advisory input.'
    };

    const haz2Zh = {
      title: '刑冲气机潜伏 · 疲惫期沟通冷战风险',
      titleEn: 'Latent Friction Vectors & Communication Withdrawal',
      desc: '地支刑冲或五行对激之处，往往在生理精力透支或工作压力极大时被引动。此时双方容易开启防御机制，一人习惯理性冷处理，另一人易感被冷落，积累心结。',
      descEn: 'Latent cross-pillar clashes tend to surface during periods of extreme exhaustion; one partner may withdraw into silence while the other feels invalidated.',
      remedy: '【落地规避锦囊】建立“情绪安全复盘机制”：遇严重分歧时启动24小时情绪冷静期，之后以“就事论事、核对感受、不翻旧账”十二字原则复盘沟通。',
      remedyEn: 'Actionable Protocol: Deploy a 24-hour emotional cooling-off period during heated deadlock, followed by structured dialogue focused strictly on present facts without historical dredging.'
    };

    const haz3Zh = {
      title: '资源配置与风险偏好认知差异',
      titleEn: 'Capital Allocation & Risk Tolerance Misalignment',
      desc: '双方在金钱消费、投资冒险度与长远储蓄规划上可能存在天然节奏差。一方追求高确定性防守，另一方渴望抓大放小博取赔率，若缺乏透明账目易生猜忌。',
      descEn: 'Divergence in financial pacing—such as one partner favoring capital preservation while the other pursues high-risk growth—can create unspoken financial anxiety.',
      remedy: '【落地规避锦囊】建立“三轨制家庭/合伙资金池”：刚性安全储备底仓（不可擅动）、进取型成长专项池（专人负责）与个人完全支配账户，杜绝账目模糊。',
      remedyEn: 'Actionable Protocol: Structure a three-tier capital architecture: immutable security reserve, dynamic growth fund, and personal autonomous discretionary accounts.'
    };

    const advantages = [
      {
        title: isEn ? adv1Zh.titleEn : adv1Zh.title,
        desc: isEn ? adv1Zh.descEn : adv1Zh.desc,
        impact: isEn ? adv1Zh.impactEn : adv1Zh.impact,
        titleEn: adv1Zh.titleEn, descEn: adv1Zh.descEn, impactEn: adv1Zh.impactEn,
        ...(!isEn ? { titleZh: adv1Zh.title, descZh: adv1Zh.desc, impactZh: adv1Zh.impact } : {})
      },
      {
        title: isEn ? adv2Zh.titleEn : adv2Zh.title,
        desc: isEn ? adv2Zh.descEn : adv2Zh.desc,
        impact: isEn ? adv2Zh.impactEn : adv2Zh.impact,
        titleEn: adv2Zh.titleEn, descEn: adv2Zh.descEn, impactEn: adv2Zh.impactEn,
        ...(!isEn ? { titleZh: adv2Zh.title, descZh: adv2Zh.desc, impactZh: adv2Zh.impact } : {})
      },
      {
        title: isEn ? adv3Zh.titleEn : adv3Zh.title,
        desc: isEn ? adv3Zh.descEn : adv3Zh.desc,
        impact: isEn ? adv3Zh.impactEn : adv3Zh.impact,
        titleEn: adv3Zh.titleEn, descEn: adv3Zh.descEn, impactEn: adv3Zh.impactEn,
        ...(!isEn ? { titleZh: adv3Zh.title, descZh: adv3Zh.desc, impactZh: adv3Zh.impact } : {})
      }
    ];

    const hazards = [
      {
        title: isEn ? haz1Zh.titleEn : haz1Zh.title,
        desc: isEn ? haz1Zh.descEn : haz1Zh.desc,
        remedy: isEn ? haz1Zh.remedyEn : haz1Zh.remedy,
        titleEn: haz1Zh.titleEn, descEn: haz1Zh.descEn, remedyEn: haz1Zh.remedyEn,
        ...(!isEn ? { titleZh: haz1Zh.title, descZh: haz1Zh.desc, remedyZh: haz1Zh.remedy } : {})
      },
      {
        title: isEn ? haz2Zh.titleEn : haz2Zh.title,
        desc: isEn ? haz2Zh.descEn : haz2Zh.desc,
        remedy: isEn ? haz2Zh.remedyEn : haz2Zh.remedy,
        titleEn: haz2Zh.titleEn, descEn: haz2Zh.descEn, remedyEn: haz2Zh.remedyEn,
        ...(!isEn ? { titleZh: haz2Zh.title, descZh: haz2Zh.desc, remedyZh: haz2Zh.remedy } : {})
      },
      {
        title: isEn ? haz3Zh.titleEn : haz3Zh.title,
        desc: isEn ? haz3Zh.descEn : haz3Zh.desc,
        remedy: isEn ? haz3Zh.remedyEn : haz3Zh.remedy,
        titleEn: haz3Zh.titleEn, descEn: haz3Zh.descEn, remedyEn: haz3Zh.remedyEn,
        ...(!isEn ? { titleZh: haz3Zh.title, descZh: haz3Zh.desc, remedyZh: haz3Zh.remedy } : {})
      }
    ];

    return { advantages, hazards };
  }

  /**
   * Predict Ideal Partner Natal Chart & 16-Character Joint Resonance Simulation
   * (单身寻缘 · 逆推理想正缘八字与16字推演模拟)
   *
   * Constraints & Metaphysical Safeguards:
   * 1. Target partner birth year strictly within +/- 10 years of Chart A's birth year.
   * 2. Guaranteed legal adult (currentYear - birthYear >= 18; if 2026, birthYear <= 2008).
   * 3. Year compatibility prioritized: Six Harmonies (六合) or Three Harmonies (三合), avoiding clashes & punishments.
   * 4. Non-Oppressive Complementarity (刚柔互补与防压迫制衡心法):
   *    - Tong Guan mediating element (通关化泄，贪生忘克)
   *    - Rooted sovereignty & psychological boundaries (柔而有根，暗藏禄库，保有自主权)
   *    - Spouse palace harmony (天地双合 / 天干相合 / 六合三合)
   * 5. Synthesizes 16 characters (8 of Chart A + 8 of Chart B) into real astronomical birth time.
   * 6. Provides 3 distinct archetypal variants for cycling.
   */
  function predictIdealPartner(chartA, options = {}) {
    if (!chartA || !chartA.pillars) return null;
    const isEn = (options.lang === 'en');
    const variant = (typeof options.variant === 'number' && options.variant >= 0) ? (options.variant % 3) : 0;

    const STEM_LIST = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
    const BRANCH_LIST = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
    const STEM_EL = ['木', '木', '火', '火', '土', '土', '金', '金', '水', '水'];
    const STEM_POL = ['阳', '阴', '阳', '阴', '阳', '阴', '阳', '阴', '阳', '阴'];
    const BRANCH_POL = ['阳', '阴', '阳', '阴', '阳', '阴', '阳', '阴', '阳', '阴', '阳', '阴'];
    const BRANCH_EL = ['水', '土', '木', '木', '土', '火', '火', '土', '金', '金', '土', '水'];

    // 1. Current Year and Legal Adult Constraints
    const currentYear = new Date().getFullYear(); // 2026
    const minAdultAge = 18;
    const maxLegalAdultYear = currentYear - minAdultAge; // 2008

    const userYear = (chartA.input && chartA.input.year) || chartA.birthYear || 1990;

    // User adulthood check
    if (userYear > maxLegalAdultYear) {
      return {
        isEligible: false,
        reason: 'underage_user',
        userYear,
        currentYear,
        minAdultAge,
        errorZh: '🔞 仅限成年人测算：依据伦理合规与主权自决准则，理想正缘推演功能仅对已满18周岁的成年人开放。',
        errorEn: 'Adults 18+ Only: Relationship synastry prediction is strictly restricted to legal adults aged 18 and above.'
      };
    }

    // Candidate Birth Year Window: strictly +/- 10 years, capped at legal adult year (<= 2008)
    const minCandidateYear = userYear - 10;
    const maxCandidateYear = Math.min(userYear + 10, maxLegalAdultYear);

    // 2. Determine Partner Gender
    const defaultGenderB = (chartA.gender === '乾造') ? '坤造' : '乾造';
    const genderB = options.genderB || defaultGenderB;

    // 3. User BaZi Metrics
    const dmA = chartA.dayMaster || chartA.pillars.day.stem;
    const dmIdxA = STEM_LIST.indexOf(dmA);
    const dmElA = chartA.dayMasterElement || STEM_EL[dmIdxA];
    const dmPolA = chartA.dayMasterYinYang || STEM_POL[dmIdxA];
    const zipingScoreA = (chartA.zipingScore && chartA.zipingScore.totalScore) ?? 50;
    const yearBranchA = chartA.pillars.year.branch;
    const dayBranchA = chartA.pillars.day.branch;

    const isYangStrong = (dmPolA === '阳' && zipingScoreA >= 45) || (zipingScoreA >= 60);

    // 4. Candidate Year Selection based on Year Branch
    const sixHarmonyYearBranchMap = {
      '子': '丑', '丑': '子', '寅': '亥', '亥': '寅',
      '卯': '戌', '戌': '卯', '辰': '酉', '酉': '辰',
      '巳': '申', '申': '巳', '午': '未', '未': '午'
    };
    const targetSixHarmonyYearBranch = sixHarmonyYearBranchMap[yearBranchA];

    const sanHeGroups = [
      ['申', '子', '辰'], ['亥', '卯', '未'], ['寅', '午', '戌'], ['巳', '酉', '丑']
    ];
    let targetSanHeBranches = [];
    for (let grp of sanHeGroups) {
      if (grp.includes(yearBranchA)) {
        targetSanHeBranches = grp.filter(b => b !== yearBranchA);
        break;
      }
    }

    const clashYearBranchMap = {
      '子': '午', '午': '子', '丑': '未', '未': '丑',
      '寅': '申', '申': '寅', '卯': '酉', '酉': '卯',
      '辰': '戌', '戌': '辰', '巳': '亥', '亥': '巳'
    };
    const forbiddenClashBranch = clashYearBranchMap[yearBranchA];

    const scoredYears = [];
    for (let y = minCandidateYear; y <= maxCandidateYear; y++) {
      const bIdx = (y - 4 + 60000) % 12;
      const b = BRANCH_LIST[bIdx];
      let score = 50;
      if (b === targetSixHarmonyYearBranch) score += 50;
      else if (targetSanHeBranches.includes(b)) score += 35;
      else if (BRANCH_EL[bIdx] === STEM_EL[dmIdxA]) score += 15;

      if (b === forbiddenClashBranch) score -= 80;
      score -= Math.abs(y - userYear) * 2;
      scoredYears.push({ year: y, branch: b, score });
    }
    scoredYears.sort((a, b) => b.score - a.score);

    let candidateYear0 = scoredYears[0]?.year || userYear;
    let candidateYear1 = scoredYears.find(sy => sy.year !== candidateYear0 && sy.year >= userYear)?.year || (scoredYears[1]?.year || userYear);
    let candidateYear2 = scoredYears.find(sy => sy.year !== candidateYear0 && sy.year !== candidateYear1)?.year || (scoredYears[2]?.year || userYear);

    let selectedYear = candidateYear0;
    if (variant === 1) selectedYear = candidateYear1;
    else if (variant === 2) selectedYear = candidateYear2;
    if (options.targetYear && options.targetYear >= minCandidateYear && options.targetYear <= maxCandidateYear) {
      selectedYear = options.targetYear;
    }

    // 5. Determine Day Master and Day Branch for Chart B
    const stemComboMap = {
      '甲': '己', '己': '甲',
      '乙': '庚', '庚': '乙',
      '丙': '辛', '辛': '丙',
      '丁': '壬', '壬': '丁',
      '戊': '癸', '癸': '戊'
    };

    const branchComboMap = {
      '子': '丑', '丑': '子', '寅': '亥', '亥': '寅',
      '卯': '戌', '戌': '卯', '辰': '酉', '酉': '辰',
      '巳': '申', '申': '巳', '午': '未', '未': '午'
    };

    let targetDayStem = stemComboMap[dmA] || '辛';
    let targetDayBranch = branchComboMap[dayBranchA] || '酉';

    // Verify polarity match in 60 Jiazi
    let sIdxTarget = STEM_LIST.indexOf(targetDayStem);
    let sPolTarget = STEM_POL[sIdxTarget];
    let bIdxTarget = BRANCH_LIST.indexOf(targetDayBranch);
    let bPolTarget = BRANCH_POL[bIdxTarget];

    if (sPolTarget !== bPolTarget) {
      const compatibleYinBranches = ['丑', '卯', '巳', '未', '酉', '亥'];
      const compatibleYangBranches = ['子', '寅', '辰', '午', '申', '戌'];
      const searchPool = (sPolTarget === '阴') ? compatibleYinBranches : compatibleYangBranches;
      targetDayBranch = searchPool.find(b => targetSanHeBranches.includes(b)) || searchPool[0];
    }

    let archetypeKey = 'double_harmony';
    let archetypeTitleZh = '';
    let archetypeTitleEn = '';
    let archetypeTaglineZh = '';
    let archetypeTaglineEn = '';

    if (variant === 0) {
      archetypeKey = 'double_harmony';
      archetypeTitleZh = '天地双合 · 柔性通关型正缘';
      archetypeTitleEn = 'Heaven-Earth Double Harmony · Gentle Channeling';
      archetypeTaglineZh = '刚柔相济而绝无压迫 · 贪生忘克以润万物';
      archetypeTaglineEn = 'Harmonious polarity with non-oppressive dignity and fluid mediation';
    } else if (variant === 1) {
      archetypeKey = 'favorable_mediating';
      archetypeTitleZh = '喜用通关 · 智勇并肩型正缘';
      archetypeTitleEn = 'Favorable Mediating · Strategic Empowerment & Wealth Synergy';
      archetypeTaglineZh = '同频共振 · 事业托举与资源循环';
      archetypeTaglineEn = 'Intellectual resonance, mutual empowerment, and shared prosperity';

      const favorableStemMap = {
        '木': isYangStrong ? '丙' : '癸',
        '火': isYangStrong ? '戊' : '乙',
        '土': isYangStrong ? '庚' : '丁',
        '金': isYangStrong ? '壬' : '己',
        '水': isYangStrong ? '甲' : '辛'
      };
      targetDayStem = favorableStemMap[dmElA] || stemComboMap[dmA] || '庚';
      const sPol1 = STEM_POL[STEM_LIST.indexOf(targetDayStem)];
      const pool1 = (sPol1 === '阴') ? ['丑', '卯', '巳', '未', '酉', '亥'] : ['子', '寅', '辰', '午', '申', '戌'];
      targetDayBranch = pool1.find(b => targetSanHeBranches.includes(b) || b === targetSixHarmonyYearBranch) || pool1[1];
    } else {
      archetypeKey = 'mutual_nobleman';
      archetypeTitleZh = '互为贵人 · 精神契合型正缘';
      archetypeTitleEn = 'Mutual Nobleman · Soul Affinity & Intellectual Sanctuary';
      archetypeTaglineZh = '相敬如宾 · 灵犀互通与情感避风港';
      archetypeTaglineEn = 'Quiet emotional sanctuary, unshakeable mutual respect, and soulful resonance';

      const noblemanStemMap = {
        '木': '丁',
        '火': '辛',
        '土': '癸',
        '金': '乙',
        '水': '己'
      };
      targetDayStem = noblemanStemMap[dmElA] || stemComboMap[dmA] || '癸';
      const sPol2 = STEM_POL[STEM_LIST.indexOf(targetDayStem)];
      const pool2 = (sPol2 === '阴') ? ['酉', '亥', '丑', '卯', '巳', '未'] : ['申', '戌', '子', '寅', '辰', '午'];
      targetDayBranch = pool2.find(b => b === targetSixHarmonyYearBranch || targetSanHeBranches.includes(b)) || pool2[0];
    }

    // 6. Find Real Calendar Date for (selectedYear, targetDayStem, targetDayBranch)
    function calcJDN(y, m, d) {
      const a = Math.floor((14 - m) / 12);
      const yr = y + 4800 - a;
      const mo = m + 12 * a - 3;
      return d + Math.floor((153 * mo + 2) / 5) + 365 * yr + Math.floor(yr / 4) - Math.floor(yr / 100) + Math.floor(yr / 400) - 32045;
    }

    function findRealDate(y, s, b) {
      const jdn1 = calcJDN(y, 1, 1);
      const cycle1 = (jdn1 + 49) % 60;
      const sIdx = STEM_LIST.indexOf(s);
      let bIdx = BRANCH_LIST.indexOf(b);
      let targetCycle = -1;
      for (let i = 0; i < 60; i++) {
        if (i % 10 === sIdx && i % 12 === bIdx) {
          targetCycle = i;
          break;
        }
      }
      if (targetCycle === -1) {
        const isYin = (STEM_POL[sIdx] === '阴');
        const validBranches = isYin ? ['丑', '卯', '巳', '未', '酉', '亥'] : ['子', '寅', '辰', '午', '申', '戌'];
        bIdx = BRANCH_LIST.indexOf(validBranches[0]);
        for (let i = 0; i < 60; i++) {
          if (i % 10 === sIdx && i % 12 === bIdx) {
            targetCycle = i;
            break;
          }
        }
      }
      const offset = (targetCycle - cycle1 + 60) % 60;
      const isLeap = ((y % 4 === 0 && y % 100 !== 0) || y % 400 === 0);
      const daysInYear = isLeap ? 366 : 365;
      const occurrences = [];
      for (let d = offset; d < daysInYear; d += 60) {
        occurrences.push(d);
      }
      const chosenOffset = occurrences.length > 2 ? occurrences[2] : (occurrences[1] || occurrences[0]);
      const base = new Date(Date.UTC(y, 0, 1));
      const resDate = new Date(base.getTime() + chosenOffset * 86400000);
      return {
        year: resDate.getUTCFullYear(),
        month: resDate.getUTCMonth() + 1,
        day: resDate.getUTCDate()
      };
    }

    const realDate = findRealDate(selectedYear, targetDayStem, targetDayBranch);
    const chosenHour = 10;

    // 7. Calculate Chart B using BaZiEngine
    let chartB = null;
    if (typeof BaZiEngine !== 'undefined' && typeof BaZiEngine.calculate === 'function') {
      chartB = BaZiEngine.calculate({
        year: realDate.year,
        month: realDate.month,
        day: realDate.day,
        hour: chosenHour,
        minute: 0,
        gender: genderB,
        useTrueSolarTime: false,
        isLateRatNextDay: false,
        longitude: 116.4,
        timezone: 8.0
      });
    }

    // 8. Analyze Combined 16-Character Elemental Distribution
    const elScoreA = (chartA.elements && chartA.elements.scores) || { '木': 20, '火': 20, '土': 20, '金': 20, '水': 20 };
    const elScoreB = (chartB && chartB.elements && chartB.elements.scores) || { '木': 20, '火': 20, '土': 20, '金': 20, '水': 20 };

    const combinedScores = {};
    const elementsList = ['木', '火', '土', '金', '水'];
    let combinedTotal = 0;
    elementsList.forEach(el => {
      combinedScores[el] = (elScoreA[el] || 0) + (elScoreB[el] || 0);
      combinedTotal += combinedScores[el];
    });
    const combinedPercentages = {};
    elementsList.forEach(el => {
      combinedPercentages[el] = combinedTotal > 0 ? Math.round((combinedScores[el] / combinedTotal) * 100) : 20;
    });

    let minElA = '木', minValA = 999;
    let maxElA = '木', maxValA = -1;
    elementsList.forEach(el => {
      const raw = (chartA.elements && chartA.elements.percentages && chartA.elements.percentages[el]);
      const p = (raw !== undefined && raw !== null) ? parseFloat(raw) : 0;
      if (p < minValA) { minValA = p; minElA = el; }
      if (p > maxValA) { maxValA = p; maxElA = el; }
    });

    const elNamesZh = { '木': '木', '火': '火', '土': '土', '金': '金', '水': '水' };
    const elNamesEn = { '木': 'Wood', '火': 'Fire', '土': 'Earth', '金': 'Metal', '水': 'Water' };

    // 9. Non-Oppressive Complementarity Exegesis (防压迫制衡心法)
    const mediatingElementMap = {
      '木': { mediatorZh: '火', mediatorEn: 'Fire', descZh: '木生火、火生土（贪生忘克），阳刚木气化为温暖慷慨之火，滋养温厚之土', descEn: 'Wood generates Fire, Fire nourishes Earth; strong assertiveness transforms into generous creative warmth' },
      '火': { mediatorZh: '土', mediatorEn: 'Earth', descZh: '火生土、土生金（贪生忘克），烈火化为包容敦厚之土，徐徐孕育纯粹坚毅之金', descEn: 'Fire generates Earth, Earth nurtures Metal; intense passion transforms into grounded protective stability' },
      '土': { mediatorZh: '金', mediatorEn: 'Metal', descZh: '土生金、金生水（贪生忘克），厚重土性化为清晰规范之金，清冽化生智慧灵动之水', descEn: 'Earth generates Metal, Metal nourishes Water; heavy steadiness transforms into clear rational guidance' },
      '金': { mediatorZh: '水', mediatorEn: 'Water', descZh: '金生水、水生木（贪生忘克），肃杀金气化为柔润智慧之水，长青灌溉生机勃发之木', descEn: 'Metal generates Water, Water nourishes Wood; sharp decisive executive force transforms into empathetic wisdom' },
      '水': { mediatorZh: '木', mediatorEn: 'Wood', descZh: '水生木、木生火（贪生忘克），澎湃水势化为欣欣向荣之木，点亮照亮人心的温存之火', descEn: 'Water generates Wood, Wood sparks Fire; expansive depth transforms into thriving growth and warm illumination' }
    };
    const medInfo = mediatingElementMap[dmElA] || mediatingElementMap['火'];

    const rootInfoMap = {
      '己': { rootZh: '丑/未土库与巳中禄旺', rootEn: 'Chou/Wei Earth repositories and Si strong support', descZh: '外表温润谦和，内心厚重有恒，底线坚固，绝不妥协原则', descEn: 'Gentle exterior with unshakeable inner boundaries and principled endurance' },
      '辛': { rootZh: '酉之专禄与申丑印根', rootEn: 'You Lu star and Shen/Chou resource roots', descZh: '外显优雅纤细，内具金石骨力与高维审美，拥有强大的主权尊严', descEn: 'Graceful aesthetic exterior with firm internal sovereignty and moral backbone' },
      '乙': { rootZh: '卯辰通根与亥水长生', rootEn: 'Mao/Chen roots and Hai water generative support', descZh: '如修竹摇风，柔韧敏捷，看似随和实则主见极强，遇事极有韧性', descEn: 'Resilient and agile like bamboo; highly adaptable yet deeply sovereign' },
      '丁': { rootZh: '午巳真火与寅木印绶', rootEn: 'Wu/Si true fire and Yin wood resource support', descZh: '如幽微明烛，照亮心灵，拥有细腻的洞察力和坚韧的精神世界', descEn: 'Insightful emotional illumination with resilient spirit and clear boundaries' },
      '癸': { rootZh: '子辰水库与申金长生', rootEn: 'Zi/Chen water repositories and Shen metal generative support', descZh: '如山间清泉，润物无声，极具灵性与情商，在亲密关系中掌握润滑主动权', descEn: 'Fluid emotional intelligence with clear psychic boundaries and sovereign dignity' },
      '甲': { rootZh: '寅卯禄旺与亥水生扶', rootEn: 'Yin/Mao vigorous roots and Hai generative flow', descZh: '立身正直，宽仁大度，兼具担当与自律，恪守君子之道', descEn: 'Upright leadership with noble integrity, generous protection, and deep self-discipline' },
      '庚': { rootZh: '申酉顽金与辰戌土厚', rootEn: 'Shen/You sturdy metal and Chen/Xu solid earth', descZh: '决断果敢，信义深重，行事磊落，在关系中极重契约与互敬', descEn: 'Decisive executive clarity, unwavering loyalty, and deep respect for mutual autonomy' },
      '丙': { rootZh: '巳午帝旺与寅中真火', rootEn: 'Si/Wu peak vigor and Yin true solar fire', descZh: '光明磊落，热情慷慨，具有极强的包容力与主动保护欲', descEn: 'Radiant generosity, noble magnanimity, and active protective instincts' },
      '壬': { rootZh: '亥子汪洋与申金发源', rootEn: 'Hai/Zi deep waters and Shen origin stream', descZh: '格局宏大，机敏通达，胸怀宽广，善于为伴侣提供坚实靠山', descEn: 'Expansive vision, profound adaptability, and protective emotional breadth' },
      '戊': { rootZh: '辰戌坚土与巳午之生', rootEn: 'Chen/Xu firm earth and Si/Wu generative warmth', descZh: '如泰山磐石，沉稳可靠，遇风浪不惊，是家庭与事业最坚固的基石', descEn: 'Steadfast rock-solid reliability, calm through volatility, providing unwavering safety' }
    };
    const rootPartner = rootInfoMap[targetDayStem] || rootInfoMap['辛'];

    const personas = {
      'double_harmony': {
        temperamentZh: '温婉优雅，清雅知性，善于倾听解惑；外圆内方，看似随和谦逊，实则原则分明，底气深沉。',
        temperamentEn: 'Gentle, intellectually perceptive, and an active listener; soft on the exterior yet possessing crystal-clear personal principles.',
        cadenceZh: '刚柔相济，有商有量；遇大事共同拍板，遇小事互相体谅。刚烈者自发产生怜惜欲，柔美者安心释放才华。',
        cadenceEn: 'Natural complementarity and mutual respect; major life decisions are co-created with deep appreciation for mutual boundaries.',
        encounterScenariosZh: '文化艺术展、高品质行业沙龙、安静典雅的书店咖啡馆、高校校友会或优质师友引荐。',
        encounterScenariosEn: 'Cultural art exhibitions, specialized intellectual forums, quiet boutique libraries, or high-caliber alumni networks.'
      },
      'favorable_mediating': {
        temperamentZh: '敏锐干练，极具商业与生活智慧，善于规划整合；既有浪漫情怀，更有务实落地的执行魄力。',
        temperamentEn: 'Sharp, strategically minded, and deeply grounded; balancing emotional warmth with practical executive competence.',
        cadenceZh: '智勇并肩，并驾齐驱；在事业上彼此赋能，在财富上相互借力，既是灵魂伴侣，亦是人生最高合伙人。',
        cadenceEn: 'Dynamic equal partnership; co-empowering each other in career ambitions and asset growth as true life co-founders.',
        encounterScenariosZh: '高端商业论坛、创新项目路演、跨界交流峰会、深度专业培训或志同道合的创业社群。',
        encounterScenariosEn: 'Strategic industry summits, innovation workshops, executive seminars, or visionary venture communities.'
      },
      'mutual_nobleman': {
        temperamentZh: '神清气爽，涵养深厚，自带松弛感与治愈力；不争不抢却极受周围人敬重，拥有极高情商与精神境界。',
        temperamentEn: 'Tranquil, deeply cultured, and naturally comforting; commanding organic respect through gracious emotional intelligence.',
        cadenceZh: '相敬如宾，润物无声；无需多言即可心领神会，给予彼此最安全的情绪港湾与纯粹的精神滋养。',
        cadenceEn: 'Unspoken intuitive rapport and psychological sanctuary; providing an unshakeable haven of warmth and emotional safety.',
        encounterScenariosZh: '自然采风静修地、古典音乐会、静谧茶道空间、心理学或哲思交流沙龙、公益慈善活动。',
        encounterScenariosEn: 'Nature retreats, classical symphony concerts, mindful tea sanctuaries, or philosophical study circles.'
      }
    };
    const currentPersona = personas[archetypeKey] || personas['double_harmony'];

    const partnerDayBranchActual = chartB ? chartB.pillars.day.branch : targetDayBranch;
    const partnerDayStemActual = chartB ? chartB.pillars.day.stem : targetDayStem;

    return {
      isEligible: true,
      variant,
      variantTotal: 3,
      archetypeKey,
      titleZh: archetypeTitleZh,
      titleEn: archetypeTitleEn,
      taglineZh: archetypeTaglineZh,
      taglineEn: archetypeTaglineEn,

      userBirthYear: userYear,
      candidateYearRange: [minCandidateYear, maxCandidateYear],
      partnerBirthYear: selectedYear,
      partnerAge: currentYear - selectedYear,
      partnerGender: genderB,
      partnerBirthDateStr: `${realDate.year}-${String(realDate.month).padStart(2, '0')}-${String(realDate.day).padStart(2, '0')}`,
      partnerBirthTimeStr: `${String(chosenHour).padStart(2, '0')}:00`,

      chartA,
      chartB,

      sixteenCharacters: {
        chartA: [
          { pillar: 'year', stem: chartA.pillars.year.stem, branch: chartA.pillars.year.branch, element: chartA.pillars.year.stemElement },
          { pillar: 'month', stem: chartA.pillars.month.stem, branch: chartA.pillars.month.branch, element: chartA.pillars.month.stemElement },
          { pillar: 'day', stem: chartA.pillars.day.stem, branch: chartA.pillars.day.branch, element: chartA.pillars.day.stemElement },
          { pillar: 'hour', stem: chartA.pillars.hour.stem, branch: chartA.pillars.hour.branch, element: chartA.pillars.hour.stemElement }
        ],
        chartB: chartB ? [
          { pillar: 'year', stem: chartB.pillars.year.stem, branch: chartB.pillars.year.branch, element: chartB.pillars.year.stemElement },
          { pillar: 'month', stem: chartB.pillars.month.stem, branch: chartB.pillars.month.branch, element: chartB.pillars.month.stemElement },
          { pillar: 'day', stem: chartB.pillars.day.stem, branch: chartB.pillars.day.branch, element: chartB.pillars.day.stemElement },
          { pillar: 'hour', stem: chartB.pillars.hour.stem, branch: chartB.pillars.hour.branch, element: chartB.pillars.hour.stemElement }
        ] : [],
        totalStems: 8,
        totalBranches: 8,
        totalCharacters: 16
      },

      elementalBalance: {
        chartA: (chartA.elements && chartA.elements.percentages) || {},
        chartB: (chartB && chartB.elements && chartB.elements.percentages) || {},
        combined16: combinedPercentages,
        deficitHealedZh: `甲造原局【${elNamesZh[minElA]}】气最为匮乏（仅占约${minValA.toFixed(1)}%），在16字联合共振场中，合入乙造五行能量后，将【${elNamesZh[minElA]}】气有效补足至${combinedPercentages[minElA]}%，填补命宫短板。`,
        deficitHealedEn: `Chart A deficit in ${elNamesEn[minElA]} (${minValA.toFixed(1)}%) is replenished in the 16-character resonance to ${combinedPercentages[minElA]}%, establishing holistic energetic equilibrium.`,
        excessSoftenedZh: `甲造原局【${elNamesZh[maxElA]}】气独旺偏亢（高达约${maxValA.toFixed(1)}%），经乙造通关化泄，16字联合能量中【${elNamesZh[maxElA]}】气平缓调和至${combinedPercentages[maxElA]}%，化刚烈激荡为恒久深情。`,
        excessSoftenedEn: `Chart A excess in ${elNamesEn[maxElA]} (${maxValA.toFixed(1)}%) is channeled and buffered in the 16-character matrix to ${combinedPercentages[maxElA]}%, transforming volatile intensity into lasting devotion.`
      },

      nonOppressionSafeguard: {
        corePrincipleZh: '刚柔相济 · 防压迫制衡总纲',
        corePrincipleEn: 'Non-Oppressive Polarity & Psychological Dignity Safeguard',
        tongGuanMechanismZh: `【五行通关与贪生忘克】：${medInfo.descZh}。即便命主原局阳刚强盛，在此格局下亦转化为深情托举与守护，绝无居高临下之克伐。`,
        tongGuanMechanismEn: `Elemental Mediating & Channeling: ${medInfo.descEn}. Even if one chart possesses intense masculine vigor, intermediate elements channel it into nurturing care rather than domination.`,
        rootedSovereigntyZh: `【柔而有根与主权界限】：乙造配偶日主虽取温润柔和之态，然地支暗藏【${rootPartner.rootZh}】；${rootPartner.descZh}。拥有平等的决策权与心理边界，绝非被动顺从。`,
        rootedSovereigntyEn: `Rooted Autonomy & Sovereign Boundaries: Partner B embraces gentle grace while remaining fortified by [${rootPartner.rootEn}]; ${rootPartner.descEn}. Mutual equality and personal sovereignty are fully preserved.`,
        spousePalaceResonanceZh: `【夫妻宫双合与怜惜共鸣】：日柱干支形成【${chartA.pillars.day.stem + partnerDayStemActual}合、${chartA.pillars.day.branch + partnerDayBranchActual}合】天地相顾；心意互通，彼此自然产生倾听欲与珍惜感，令阳刚者主动收敛锋芒，令温婉者安心绽放。`,
        spousePalaceResonanceEn: 'Spouse Palace Double Harmony: Day pillars form celestial stem and earthly branch combinations; intuitive empathy inspires natural tenderness and attentive listening without power friction.'
      },

      partnerProfile: currentPersona
    };
  }

  return {
    analyze,
    predictIdealPartner,
    evaluateZodiacMatch,
    evaluatePatternComparison,
    evaluateTrajectoryOverlap,
    evaluateLifePriorities,
    evaluateElementComparison,
    generateMergedRelationshipPortrait,
    generateAdvantagesAndHazards,
    getChartDominantPatterns,
    getPatternArchetype,
    ZODIAC_ANIMALS,
    STEM_COMBINATIONS,
    BRANCH_SIX_HARMONIES,
    BRANCH_SIX_CLASHES,
    BRANCH_PUNISHMENTS,
    BRANCH_HARMS,
    THREE_HARMONIES
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = SynastryEngine;
}
if (typeof window !== 'undefined') {
  window.SynastryEngine = SynastryEngine;
}
