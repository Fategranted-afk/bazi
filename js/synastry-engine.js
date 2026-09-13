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

  /**
   * Evaluate Chinese Zodiac Compatibility (生肖合婚与冲合吉凶)
   * Strictly based on Year Earthly Branches (pA.year.branch, pB.year.branch)
   */
  function evaluateZodiacMatch(branchA, branchB, isRomantic, isEn) {
    const aniA = ZODIAC_ANIMALS[branchA] || { zh: '龙', en: 'Dragon', branchEn: 'Chen' };
    const aniB = ZODIAC_ANIMALS[branchB] || { zh: '凤', en: 'Phoenix', branchEn: 'You' };
    const pair = branchA + branchB;
    const revPair = branchB + branchA;

    // 1. Check Six Harmonies (六合)
    if (BRANCH_SIX_HARMONIES[pair]) {
      const harm = BRANCH_SIX_HARMONIES[pair];
      const titleZh = `【生肖六合 · ${aniA.zh}${aniB.zh}合吉】`;
      const titleEn = `[Six Harmonies · ${aniA.en} & ${aniB.en} Celestial Match]`;
      const descZh = `两造生肖逢【${branchA}${branchB}六合】化${harm.elementZh}（${aniA.zh}与${aniB.zh}相合）。古法相书《李虚中命书》云：“合者气聚，生肖相投，家道隆昌。”双方从根基上具有极高天然亲和力与信任度，家庭资产稳固，能共同担待风雨。`;
      const descEn = `Both Zodiac signs form Six Harmonies (${aniA.en} & ${aniB.en} merge into ${harm.elementEn}). Canonical scripture Li Xu Zhong Ming Shu states: "Harmony of year roots anchors lasting prosperity." Natural affinity and baseline trust allow both partners to weather life's storms with unified loyalty.`;
      return {
        type: 'six_harmony',
        scoreDelta: 12,
        badgeZh: '生肖六合',
        badgeEn: 'Six Harmonies',
        titleZh, titleEn, descZh, descEn,
        classicalOriginZh: '《李虚中命书》卷中 · 六合贵人篇',
        classicalOriginEn: 'Li Xu Zhong Ming Shu, Vol. 2: Six Harmonies and Noble Guidance'
      };
    }

    // 2. Check Three Harmonies (三合局)
    for (let triad of THREE_HARMONIES) {
      if (triad.branches.includes(branchA) && triad.branches.includes(branchB) && branchA !== branchB) {
        const titleZh = `【生肖三合 · ${aniA.zh}${aniB.zh}同盟】`;
        const titleEn = `[Three Harmonies · ${aniA.en} & ${aniB.en} Triad Resonance]`;
        const descZh = `两造生肖同入【${triad.nameZh}】（${aniA.zh}与${aniB.zh}）。《渊海子平》誉为“同气连枝，长生共济”。气机相引，目标高度一致，尤其在长期奋斗、事业拓荒与财富积累中能形成强大协同合力。`;
        const descEn = `Both Zodiac signs unite in the ${triad.nameEn}. Yuan Hai Zi Ping honors this as "branches of the same tree, thriving together." High commonality in ambition and shared rhythm compounding wealth and mutual achievements.`;
        return {
          type: 'three_harmony',
          scoreDelta: 10,
          badgeZh: '生肖三合',
          badgeEn: 'Three Harmonies',
          titleZh, titleEn, descZh, descEn,
          classicalOriginZh: '《渊海子平》三合水木火金局全编',
          classicalOriginEn: 'Yuan Hai Zi Ping: The Four Elemental Triad Formations'
        };
      }
    }

    // 3. Check Six Clashes (六冲)
    if (BRANCH_SIX_CLASHES[pair]) {
      const clash = BRANCH_SIX_CLASHES[pair];
      const titleZh = `【生肖逢冲 · ${aniA.zh}${aniB.zh}对冲】`;
      const titleEn = `[Zodiac Clash · ${aniA.en} vs ${aniB.en} Confrontation]`;
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

    // 4. Check Six Harms (六害)
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

    // 5. Check Punishments (相刑)
    for (let pRule of BRANCH_PUNISHMENTS) {
      if (pRule.branches.includes(branchA) && pRule.branches.includes(branchB)) {
        const titleZh = `【生肖相刑 · ${aniA.zh}${aniB.zh}互刑】`;
        const titleEn = `[Zodiac Punishment · ${aniA.en} & ${aniB.en} Friction]`;
        const descZh = `两造生肖逢【${pRule.nameZh}】。相处时若遇执拗争执，易互不妥协。《神峰通考》提示须以柔克刚，切忌因面子问题升级事端。`;
        const descEn = `Both Zodiac signs trigger Branch Punishment (${pRule.nameEn}). In heated disputes, pride can prolong deadlocks. Shen Feng Tong Kao recommends flexibility over rigid confrontation.`;
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

    // 6. Same Zodiac (同生肖)
    if (branchA === branchB) {
      const titleZh = `【生肖同气 · ${aniA.zh}${aniB.zh}齐心】`;
      const titleEn = `[Same Zodiac · Twin ${aniA.en} Alignment]`;
      const descZh = `两造生肖同为【${aniA.zh}】。同龄同根，对时代浪潮与人生阶段感悟极为契合，话题投机；宜在共同的性格短板上互相提醒督促。`;
      const descEn = `Both share the identical Zodiac sign (${aniA.en}). Shared generational perspective fosters effortless rapport and mutual empathy; mindful awareness of shared blind spots preserves harmony.`;
      return {
        type: 'same',
        scoreDelta: 4,
        badgeZh: '生肖同气',
        badgeEn: 'Same Zodiac',
        titleZh, titleEn, descZh, descEn,
        classicalOriginZh: '《三命通会》同根论',
        classicalOriginEn: 'San Ming Tong Hui: Treatise on Shared Roots'
      };
    }

    // 7. Elemental Generation / Control
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
        badgeEn: 'Elemental Generation',
        titleZh, titleEn, descZh, descEn,
        classicalOriginZh: '《滴天髓》地支承载篇',
        classicalOriginEn: 'Di Tian Sui: Foundations of Terrestrial Support'
      };
    }

    // Default neutral
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
  function generateEightCanonsSynthesis(chartA, chartB, pA, pB, dmElemA, dmElemB, hasStemCombo, hasSixHarmony, hasSixClash, mutualGifts, isRomantic, isEn) {
    const dmA = chartA.dayMaster;
    const dmB = chartB.dayMaster;
    const mBranchA = pA.month.branch;
    const mBranchB = pB.month.branch;
    const dayBranchA = pA.day.branch;
    const dayBranchB = pB.day.branch;

    // 1. Di Tian Sui (《滴天髓》) - Day Master Vitality & Pure Circulation
    let dtsZh = '';
    let dtsEn = '';
    if (hasStemCombo) {
      dtsZh = `【天干正化·纯粹流通】两造日主逢天干正合，依《滴天髓》精微发凡：“顺则吉兮逆则悖，纯粹流通者上贵。”双方心性相合，气机水乳交融，极易形成心有灵犀一点通的默契，将杂乱气机转化为纯粹正能。`;
      dtsEn = `[Di Tian Sui · Pure Circulation] The Day Masters form a genuine Heavenly Stem Combination. Di Tian Sui declares: "Harmony between Stems dissolves conflict, transforming turbulence into lucid synergy." Intuitive empathy and mental resonance operate effortlessly.`;
    } else if (dmElemA === dmElemB) {
      dtsZh = `【同气相求·比和共振】两造日元同禀【${dmElemA}】之气，依《滴天髓》“同类相求，其应相投”之旨，双方三观与底层追求高度相近，共谋事业或组建家庭极易达成共识；唯需防双强相抗，各留半步退路。`;
      dtsEn = `[Di Tian Sui · Peer Alignment] Both embody the ${ELEMENT_NAMES_EN[dmElemA]} Day Master. Di Tian Sui notes that shared elemental roots foster identical core instincts and quick alignment; cultivating deliberate patience prevents stubborn impasses.`;
    } else {
      dtsZh = `【相生相济·生生不息】甲造【${dmA}】与乙造【${dmB}】干气相顾，依《滴天髓》“戴天履地人为贵”之论，彼此存在天然的气机补益关系，一者主动开拓一者沉稳承载，形成生生不息的能量闭环。`;
      dtsEn = `[Di Tian Sui · Mutual Nourishment] Day Masters interact with organic complementary flow. Di Tian Sui affirms that balanced polarity allows active initiative to interlock with grounded stewardship, creating a compounding growth cycle.`;
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
      qtZh = `【寒暖调候·绝妙互济】一造生于冬令严寒，一造生于夏令炎热。《穷通宝鉴》奉“寒暖燥湿”为第一要义：夏令之火温润冬水之冰霜，冬令之水解除酷暑之焦渴。双盘合力，犹如大地回春，为彼此命运注入最珍贵的调候生机。`;
      qtEn = `[Qiong Tong Bao Jian · Thermal Equilibrium] An ideal climate counterbalance: one is born in winter and the other in summer. Qiong Tong Bao Jian treats temperature balance as supreme: summer warmth dissolves winter frost, while winter coolness quenches summer parching, revitalizing both destinies.`;
    } else {
      qtZh = `【时令调和·水土互培】两造月令节气气象和谐，《穷通宝鉴》强调气机之润泽与温厚。原局所缺之微候，因彼此相合而得到天然润滑，生活步调与精力节律高度同步。`;
      qtEn = `[Qiong Tong Bao Jian · Synchronized Climate] Both charts share harmonious seasonal dynamics. Qiong Tong Bao Jian highlights that complementary moisture and warmth prevent energy exhaustion, sustaining matched circadian pacing and shared vitality.`;
    }

    // 3. Zi Ping Zhen Quan (《子平真诠》) - Pattern Synergy & Ten Gods Mutual Defense
    const zpZh = `【成格救应·十神互助】《子平真诠》定论：“格局用神，专求月令；相生相制，成格救应。”双盘交互中，一造之强项恰为另一造格局所求之喜神（如食伤吐秀生财、财官相辅相成）。二人联手，能有效补齐彼此原局的破格隐患，使事业阶梯稳步上升。`;
    const zpEn = `[Zi Ping Zhen Quan · Pattern Synergy] Zi Ping Zhen Quan dictates that authentic achievement arises when one chart supplies the key stabilizing star for the other's noble aspirations. Partner A's core assets actively shield Partner B's vulnerabilities, creating an executive and emotional mutual defense fortress.`;

    // 4. San Ming Tong Hui (《三命通会》) - Na-Yin Melody & Noble Stars
    const naYinA = pA.year.naYin;
    const naYinB = pB.year.naYin;
    const naYinAEn = NAYIN_NAMES_EN[naYinA] || naYinA;
    const naYinBEn = NAYIN_NAMES_EN[naYinB] || naYinB;
    const smZh = `【纳音正律·贵人互照】甲造年命纳音【${naYinA}】，乙造年命纳音【${naYinB}】。《三命通会》探究六十甲子纳音音律，两造纳音宫商相协、音律同调；更兼四柱互为天乙贵人、天德福星。在重大关头彼此即是最大的转运吉神与减震器。`;
    const smEn = `[San Ming Tong Hui · Na-Yin Symphony] Person A's Year Na-Yin [${naYinAEn}] harmonizes melodically with Person B's [${naYinBEn}]. San Ming Tong Hui honors this vibrational coherence as a harbinger of shared aesthetic refinement and mutual Noble Star protection during life crossroads.`;

    // 5. Yuan Hai Zi Ping (《渊海子平》) - Spouse Palace Alignment
    let yhZh = '';
    let yhEn = '';
    if (dayBranchA === dayBranchB) {
      yhZh = `【日支比和·知己同心】两造夫妻宫同为【${dayBranchA}】，《渊海子平》论夫妻宫“坐下同气，知根知底”。日常起居观念相通，在核心价值观上没有不可逾越的鸿沟。`;
      yhEn = `[Yuan Hai Zi Ping · Partner Palace Harmony] Both share the same Day Branch [${BRANCH_PINYIN[dayBranchA]}]. Yuan Hai Zi Ping notes that identical spouse palaces foster natural rapport, intuitive lifestyle synchrony, and shared domestic expectations.`;
    } else if (BRANCH_SIX_HARMONIES[dayBranchA + dayBranchB]) {
      yhZh = `【配偶六合·举案齐眉】极贵之相！两造日支夫妻宫逢【${dayBranchA}${dayBranchB}六合】。《渊海子平》奉夫妻宫相合为合婚之首善：日支代表最私密的情感世界与家庭生活底盘，六合象征身心相依、执子之手与子偕老。`;
      yhEn = `[Yuan Hai Zi Ping · Supreme Spouse Palace Union] Highly auspicious: Day Branches form Six Harmonies directly in the Partner Palaces. Yuan Hai Zi Ping extols this as the golden standard for marriage and deep partnership: private temperaments and lifestyle rituals align effortlessly.`;
    } else if (BRANCH_SIX_CLASHES[dayBranchA + dayBranchB]) {
      yhZh = `【宫位逢冲·分工明晰】两造日支夫妻宫逢【${dayBranchA}${dayBranchB}冲】。《渊海子平》提示“宫位逢冲，宜分工自立”。日常生活中应避免对彼此琐事强行管控，划定各自负责板块，以信任和留白化解冲撞。`;
      yhEn = `[Yuan Hai Zi Ping · Spouse Palace Polarity] The Day Branches form an active branch confrontation. Yuan Hai Zi Ping counsels clear division of authority: respect individual private boundaries and avoid micromanaging daily habits to maintain mutual peace.`;
    } else {
      yhZh = `【宫位相安·基业安澜】两造日支五行相安顺生，《渊海子平》云：“日支安泰，家道隆昌。”双方情感平实厚重，不易受外界流言侵扰，具备长期经营家庭或联盟的稳固底盘。`;
      yhEn = `[Yuan Hai Zi Ping · Enduring Domestic Anchor] Day Branches interact steadily without destructive clashes. Yuan Hai Zi Ping confirms that tranquil spouse palaces preserve emotional loyalty and shield against external gossip.`;
    }

    // 6. Shen Feng Tong Kao (《神峰通考》) - Pathology & Medicinal Remedy
    const sfZh = `【病药相济·互为解药】《神峰通考》阐发命理至高突破法门：“有病方为贵，无伤不是奇；格中如去病，财禄两相随。”人无全人，单盘原局之匮乏即为“病”，而对方气场之充盛恰为对症下药之“药”。二者交汇，恰如枯木得霖，彼此治愈盲点，成就共同飞跃。`;
    const sfEn = `[Shen Feng Tong Kao · Pathology & Remedy] Master Zhang Shen-Feng's famous 'Pathology and Remedy' doctrine declares: "Nobility emerges when systemic flaws find their cure." The elemental abundance of one chart serves as the medicinal antidote for the other's blind spot, converting vulnerability into mutual resilience.`;

    // 7. Yu Zhao Ding Zhen Jing (《玉照定真经》) - Microscopic Boundary Safeguards
    const yzZh = `【微观避坑·界限护持】《玉照定真经》专察隐微祸福，详推地支刑冲破害之兆。双盘交互提示：相处大忌在疲惫时刻口出恶言或触碰对方原生家庭敏感区。建立“争执不上火、当场不翻旧账、遇事就事论事”的三大铁律，方能久远。`;
    const yzEn = `[Yu Zhao Ding Zhen Jing · Boundary Protocols] Yu Zhao Ding Zhen Jing monitors delicate micro-clash vectors. Actionable safeguard: banish passive-aggressive retaliation during fatigued moments; establish clear boundaries regarding family discussions and financial transparency.`;

    // 8. Li Xu Zhong Ming Shu (《李虚中命书》) - Ancient Three-Pillars Bedrock
    const lxzZh = `【三元禄命·因缘夙定】唐代命学始祖李虚中立天元禄、地元命、人元身三才大道。两造年柱祖荫与生肖根基相顾有情，表征二人在命运深处具备坚韧的因缘羁绊，不仅是短暂情投意合，更能在数十年岁月长河中同舟共济。`;
    const lxzEn = `[Li Xu Zhong Ming Shu · Ancient Three-Pillar Bedrock] Tang Dynasty forefather Li Xu Zhong anchors human destiny in ancestral Year roots. Their foundational branches interlock harmoniously, signifying enduring karmic staying power that outlasts transient external pressures.`;

    // Summary
    const summaryZh = `八大经典通考汇流：双盘在气机纯粹度（滴天髓）、调候平衡（穷通宝鉴）与病药互补（神峰通考）上均显现出深厚的互利价值。只要依玉照经所诫守住微观沟通边界，必能成就兼济天下的长青合相。`;
    const summaryEn = `Comprehensive Eight Canons Synthesis: Both charts achieve strong synergy across vital circulation (Di Tian Sui), thermal balance (Qiong Tong), and mutual medicinal support (Shen Feng). Honoring communication boundaries ensures lifelong mutual compounding.`;

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
      { nameEn: 'Di Tian Sui (Essence of Vitality)', canonEn: '"Harmony between Heavenly Stems dissolves conflict, transforming turbulence into lucid synergy."', analysisEn: dtsEn },
      { nameEn: 'Qiong Tong Bao Jian (Climate Mirror)', canonEn: '"Nature balances heat and cold to nourish life; human destinies require moisture and warmth."', analysisEn: qtEn },
      { nameEn: 'Zi Ping Zhen Quan (Authentic Zi Ping)', canonEn: '"Authentic achievement arises when one chart supplies the key stabilizing star for the other."', analysisEn: zpEn },
      { nameEn: 'San Ming Tong Hui (Comprehensive Canons)', canonEn: '"Na-Yin vibrations echo harmonic laws; complementary notes generate mutual nobility."', analysisEn: smEn },
      { nameEn: 'Yuan Hai Zi Ping (Deep Sea of Zi Ping)', canonEn: '"The Day Master is the self; the Day Branch is the partner palace, anchoring domestic peace."', analysisEn: yhEn },
      { nameEn: 'Shen Feng Tong Kao (Pathology & Remedy)', canonEn: '"Nobility emerges when systemic flaws find their cure; mutual remedies unlock breakthrough."', analysisEn: sfEn },
      { nameEn: 'Yu Zhao Ding Zhen Jing (Jade Illumination)', canonEn: '"Subtle branch harms precede overt ruptures; observe early signals to neutralize friction."', analysisEn: yzEn },
      { nameEn: 'Li Xu Zhong Ming Shu (Ancient Bedrock)', canonEn: '"When the Three Roots align, fortune endures across decades of shifting circumstances."', analysisEn: lxzEn }
    ];

    return {
      titleZh: '八大经典合盘互参全息战报',
      titleEn: 'Eight Classical Canons Synastry Hologram',
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
      branch: zBranchA,
      animal: isEn ? zInfoA.en : zInfoA.zh,
      animalZh: zInfoA.zh,
      animalEn: zInfoA.en,
      nameZh: `${zInfoA.zh} (${zBranchA})`,
      nameEn: `${zInfoA.en} (${zInfoA.branchEn})`,
      labelZh: `生肖属${zInfoA.zh} (${zBranchA})`,
      labelEn: `Zodiac: ${zInfoA.en} (${zInfoA.branchEn})`
    };

    const zodiacB = {
      branch: zBranchB,
      animal: isEn ? zInfoB.en : zInfoB.zh,
      animalZh: zInfoB.zh,
      animalEn: zInfoB.en,
      nameZh: `${zInfoB.zh} (${zBranchB})`,
      nameEn: `${zInfoB.en} (${zInfoB.branchEn})`,
      labelZh: `生肖属${zInfoB.zh} (${zBranchB})`,
      labelEn: `Zodiac: ${zInfoB.en} (${zInfoB.branchEn})`
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
    const canonsData = generateEightCanonsSynthesis(chartA, chartB, pA, pB, dmElemA, dmElemB, hasStemCombo, hasSixHarmony, hasSixClash, mutualGifts, isRomantic, isEn);

    // 10. Zen & Dao Trinity Counsel
    const zenData = generateZenDaoCounsel(chartA, chartB, isRomantic, isEn);

    // 11. Remedies
    const remediesZh = generateRemedies(chartA, chartB, crossClashes, isRomantic, false);
    const remediesEn = generateRemedies(chartA, chartB, crossClashes, isRomantic, true);

    return {
      mode,
      lang,
      overallScore,
      zodiacA,
      zodiacB,
      zodiacMatch: {
        type: zMatch.type,
        title: isEn ? zMatch.titleEn : zMatch.titleZh,
        badge: isEn ? zMatch.badgeEn : zMatch.badgeZh,
        description: isEn ? zMatch.descEn : zMatch.descZh,
        classicalOrigin: isEn ? zMatch.classicalOriginEn : zMatch.classicalOriginZh,
        titleZh: zMatch.titleZh,
        titleEn: zMatch.titleEn,
        badgeZh: zMatch.badgeZh,
        badgeEn: zMatch.badgeEn,
        descZh: zMatch.descZh,
        descEn: zMatch.descEn,
        classicalOriginZh: zMatch.classicalOriginZh,
        classicalOriginEn: zMatch.classicalOriginEn
      },
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
        elementGapsA: isEn ? elementGapsA.map(e => ELEMENT_NAMES_EN[e] || e) : elementGapsA,
        elementGapsB: isEn ? elementGapsB.map(e => ELEMENT_NAMES_EN[e] || e) : elementGapsB,
        elementGapsAZh: elementGapsA,
        elementGapsBZh: elementGapsB,
        elementGapsAEn: elementGapsA.map(e => ELEMENT_NAMES_EN[e] || e),
        elementGapsBEn: elementGapsB.map(e => ELEMENT_NAMES_EN[e] || e),
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
      eightCanonsSynthesis: {
        title: isEn ? canonsData.titleEn : canonsData.titleZh,
        summary: isEn ? canonsData.summaryEn : canonsData.summaryZh,
        titleZh: canonsData.titleZh,
        titleEn: canonsData.titleEn,
        summaryZh: canonsData.summaryZh,
        summaryEn: canonsData.summaryEn,
        canons: (isEn ? canonsData.canonsEn : canonsData.canonsZh).map((c, i) => ({
          name: isEn ? c.nameEn : c.nameZh,
          canon: isEn ? c.canonEn : c.canonZh,
          analysis: isEn ? c.analysisEn : c.analysisZh,
          nameZh: canonsData.canonsZh[i].nameZh,
          nameEn: canonsData.canonsEn[i].nameEn,
          canonZh: canonsData.canonsZh[i].canonZh,
          canonEn: canonsData.canonsEn[i].canonEn,
          analysisZh: canonsData.canonsZh[i].analysisZh,
          analysisEn: canonsData.canonsEn[i].analysisEn
        }))
      },
      zenDaoCounsel: {
        title: isEn ? zenData.titleEn : zenData.titleZh,
        synthesis: isEn ? zenData.synthesisEn : zenData.synthesisZh,
        titleZh: zenData.titleZh,
        titleEn: zenData.titleEn,
        synthesisZh: zenData.synthesisZh,
        synthesisEn: zenData.synthesisEn,
        diamondSutra: {
          title: isEn ? zenData.diamondEn.title : zenData.diamondZh.title,
          canonQuote: isEn ? zenData.diamondEn.quote : zenData.diamondZh.quote,
          counsel: isEn ? zenData.diamondEn.counsel : zenData.diamondZh.counsel,
          titleZh: zenData.diamondZh.title,
          titleEn: zenData.diamondEn.title,
          quoteZh: zenData.diamondZh.quote,
          quoteEn: zenData.diamondEn.quote,
          counselZh: zenData.diamondZh.counsel,
          counselEn: zenData.diamondEn.counsel
        },
        platformSutra: {
          title: isEn ? zenData.platformEn.title : zenData.platformZh.title,
          canonQuote: isEn ? zenData.platformEn.quote : zenData.platformZh.quote,
          counsel: isEn ? zenData.platformEn.counsel : zenData.platformZh.counsel,
          titleZh: zenData.platformZh.title,
          titleEn: zenData.platformEn.title,
          quoteZh: zenData.platformZh.quote,
          quoteEn: zenData.platformEn.quote,
          counselZh: zenData.platformZh.counsel,
          counselEn: zenData.platformEn.counsel
        },
        zhuangzi: {
          title: isEn ? zenData.zhuangziEn.title : zenData.zhuangziZh.title,
          canonQuote: isEn ? zenData.zhuangziEn.quote : zenData.zhuangziZh.quote,
          counsel: isEn ? zenData.zhuangziEn.counsel : zenData.zhuangziZh.counsel,
          titleZh: zenData.zhuangziZh.title,
          titleEn: zenData.zhuangziEn.title,
          quoteZh: zenData.zhuangziZh.quote,
          quoteEn: zenData.zhuangziEn.quote,
          counselZh: zenData.zhuangziZh.counsel,
          counselEn: zenData.zhuangziEn.counsel
        }
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

  return {
    analyze,
    evaluateZodiacMatch,
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
