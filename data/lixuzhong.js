/**
 * 《李虚中命书》 (Li Xu Zhong Ming Shu) Canonical Database
 * Author: 唐·李虚中著 (韩愈作墓志铭：“百不失一二”)
 * 
 * Core Metaphysical Tenets:
 * 1. 三元论 (The Three Primes):
 *    - 天元为禄 (Heavenly Prime - Career Rank & Prestige)
 *    - 地元为命 (Earthly Prime - Lifespan, Grounding & Vital Endowment)
 *    - 人元为身 (Human Prime - Internal Talent, Craft & Soul Capacity)
 * 2. 纳音音律与环境场能交互 (NaYin Acoustic Resonance & Spatial-Era Dynamics):
 *    - 宫商角徵羽五音律动
 *    - 地理方位、居住办公物理气场与现代时代周期交互
 */

const LI_XU_ZHONG_DATA = {
  chapters: [
    {
      id: 'sanyuan',
      titleZh: '论三元禄命身',
      titleEn: 'Treatise on the Three Primes: Rank, Destiny, and Body',
      quoteZh: '天元为禄，以日干论名位爵秩；地元为命，以日支论寿夭荣枯；人元为身，以纳音论气象才干。三元相生，百禄并臻；三元俱旺，福寿双全。',
      quoteEn: 'Heavenly Prime is Rank (Lu), governing societal status through stems; Earthly Prime is Destiny (Ming), governing vitality through branches; Human Prime is Body (Shen), governing intrinsic gifts through NaYin acoustic sound. Mutual generation among the Three Primes brings compound fortune and unbroken longevity.',
      vernacularZh: '唐代命学宗师李虚中以“三元”洞穿造化：天元为禄（象征外在社会名望、公信力与职位权责）；地元为命（象征身体根基、寿命福泽与家族地气）；人元为身（以纳音音律象征内在才情、灵性心力与精神骨相）。三者相辅相成，才是完整的生命全息图景。',
      vernacularEn: 'Tang Dynasty master Li Xuzhong viewed destiny through the Three Primes: Heavenly Prime (Rank - external title and societal credibility); Earthly Prime (Destiny - constitutional foundation, longevity, and land grounding); Human Prime (Body - inner artistic genius, spirit, and acoustic frequency derived from NaYin sound). True fulfillment requires synergy across all three.'
    },
    {
      id: 'nayin_resonance',
      titleZh: '论纳音音律与五音器象',
      titleEn: 'Treatise on NaYin Acoustic Field and Spatial Resonance',
      quoteZh: '五音六律，应天顺时。角木之音和畅，徵火之音炎上，宫土之音厚重，商金之音坚劲，羽水之音润下。人秉音律而生，居处游息，与方隅山川同气相求。',
      quoteEn: 'The Five Tones and Twelve Temperaments harmonize with Heaven and Time. Wood tone is gentle; Fire tone is radiant; Earth tone is profound; Metal tone is crisp; Water tone is fluid. A human resonates with innate acoustic frequencies; living, working, and traveling in alignment with geographic compass directions compounds cosmic harmony.',
      vernacularZh: '李虚中独创音律场能学：人体生命电磁场如同独特的乐器频段，与所身处的自然地理方位、城市规模、建筑气场及宏观时代声场发生物理共振。得其生旺之地则灵光喷涌，居其克耗之所则精神萎顿。',
      vernacularEn: 'Li Xuzhong formulated the science of acoustic-spatial resonance: Human bio-magnetic fields operate at precise elemental frequencies that resonate with geographical geography, architectural layouts, and macroeconomic eras. Aligning with harmonious spatial fields sparks spontaneous genius; conflicting environments induce chronic stagnation.'
    }
  ],

  geographicDirections: {
    '木': {
      directionZh: '东方与沿海绿化生态区域 (震巽之位)',
      directionEn: 'East & Coastal Ecological Belts (Zhen & Xun Quadrants)',
      citiesZh: '上海、杭州、苏州、青岛等东部沿海繁华商圈，或山林秀润、植被茂密之生态新城。',
      citiesEn: 'Eastern coastal hubs (Shanghai, Hangzhou, Tokyo, Boston, Seattle) and verdant eco-cities.',
      fengshuiZh: '办公与居所宜多摆放阔叶绿植、原木家具与自然采光落地窗；清晨宜开东向窗户采紫气。',
      fengshuiEn: 'Workspace requires natural hardwood elements, lush broadleaf plants, and east-facing sunrise windows.'
    },
    '火': {
      directionZh: '南方与热烈高能科技创新中心 (离火之位)',
      directionEn: 'South & High-Energy Technology Innovation Hubs (Li Quadrant)',
      citiesZh: '深圳、广州、海口、新加坡等南方高热高能都市，或算力中心、影视传媒文化聚集地。',
      citiesEn: 'Southern innovation capitals (Shenzhen, Singapore, Silicon Valley, Austin, Miami) and media capitals.',
      fengshuiZh: '办公宜选视野开阔、阳光充沛的高楼层；室内以暖色调氛围灯、艺术挂画点缀，激发灵感火花。',
      fengshuiEn: 'High-floor office with panoramic sunlight exposure, vibrant warm lighting, and stimulating artistic accents.'
    },
    '土': {
      directionZh: '中央腹地与厚重历史文化名城 (坤艮之位)',
      directionEn: 'Central Heartland & Historic Metropolises (Kun & Gen Quadrants)',
      citiesZh: '北京、西安、成都、郑州、武汉等中原与盆地核心枢纽，或依托名山大川的沉静高地。',
      citiesEn: 'Central continental hubs (Beijing, Xi\'an, London, Denver, Chicago) and mountain foothill sanctuaries.',
      fengshuiZh: '建筑宜接地气（低楼层或带庭院），室内陈设陶瓷、紫砂、天然原石，增强沉稳凝聚力。',
      fengshuiEn: 'Grounded low-floor residences or garden villas with natural ceramic, stone, and terracotta accents.'
    },
    '金': {
      directionZh: '西方与制度严谨之金融法务中心 (兑乾之位)',
      directionEn: 'West & Structured Financial/Legal Capitals (Dui & Qian Quadrants)',
      citiesZh: '香港、法兰克福、伦敦、苏黎世、成都等西部或国际金融中心，制度健全合规之大都会。',
      citiesEn: 'Western financial capitals (Hong Kong, Zurich, London, Frankfurt, New York) with rigorous legal frameworks.',
      fengshuiZh: '空间注重极简现代风，白色与金属质感线条利落，避免繁杂杂物堆积，保持气场清爽干练。',
      fengshuiEn: 'Minimalist architectural design with sleek metallic accents, clean white geometry, and clutter-free clarity.'
    },
    '水': {
      directionZh: '北方与大江大河滨水贸易大港 (坎水之位)',
      directionEn: 'North & Waterfront Maritime Trade Ports (Kan Quadrant)',
      citiesZh: '北京、大连、天津、鹿特丹、悉尼等北方都会或依托大江大海的世界级港口水网之城。',
      citiesEn: 'Northern hubs and maritime trade ports (Beijing, Dalian, Vancouver, Sydney, Rotterdam) with rich waterways.',
      fengshuiZh: '居所或办公临近自然湖泊、河流或室内流动水景；色调宜以深蓝、玄黑、水纹玻璃相衬托。',
      fengshuiEn: 'Proximity to natural rivers, lakes, or oceans; indoor circulating water fountains and aquatic glass accents.'
    }
  }
};

class LiXuZhongDB {
  /**
   * Three Primes reading: Rank (Lu), Destiny (Ming), Body (Shen)
   * With explicit Male vs Female Metaphysical Distinctions (男女命差异)
   */
  static getThreePrimes(arg1, arg2, arg3, gender, dayNaYinArg) {
    let dm = '甲';
    let dayBranch = '子';
    let dayNaYin = '天河水';
    let isMale = true;

    if (arg1 && typeof arg1 === 'object') {
      dm = arg1.dayMaster || (arg1.pillars && arg1.pillars.day && arg1.pillars.day.stem) || '甲';
      dayBranch = (arg1.pillars && arg1.pillars.day && arg1.pillars.day.branch) || '子';
      dayNaYin = (arg1.pillars && arg1.pillars.day && arg1.pillars.day.naYin) || '天河水';
      const g = gender || (arg1.input && arg1.input.gender) || arg1.gender;
      if (g) {
        isMale = (g === 'male' || g === '乾造' || g === '男' || g === '男命');
      }
    } else if (typeof arg1 === 'string') {
      dm = arg3 || arg1[0] || '甲';
      dayBranch = (arg2 && arg2[1]) || (arg1 && arg1[1]) || '子';
      if (typeof dayNaYinArg === 'string' && dayNaYinArg) {
        dayNaYin = dayNaYinArg;
      }
      if (gender) {
        isMale = (gender === 'male' || gender === '乾造' || gender === '男' || gender === '男命');
      }
    }

    const STEM_NATURES = {
      '甲': { zh: '阳木 · 参天栋梁 / 仁德开拓', en: 'Yang Wood · Towering Pillar / Benevolent Leadership' },
      '乙': { zh: '阴木 · 花卉藤萝 / 柔韧生机', en: 'Yin Wood · Winding Vine / Agile Adaptability' },
      '丙': { zh: '阳火 · 烈日辉映 / 光明威仪', en: 'Yang Fire · Radiant Sun / Illuminating Splendor' },
      '丁': { zh: '阴火 · 万家灯火 / 灵慧烛照', en: 'Yin Fire · Candle Lantern / Introspective Brilliance' },
      '戊': { zh: '阳土 · 崇山峻岭 / 厚重威信', en: 'Yang Earth · High Mountain / Steadfast Integrity' },
      '己': { zh: '阴土 · 田园沃土 / 涵蓄万物', en: 'Yin Earth · Fertile Soil / Nurturing Prudence' },
      '庚': { zh: '阳金 · 刚铁利刃 / 肃杀决断', en: 'Yang Metal · Razor Blade / Uncompromising Decisiveness' },
      '辛': { zh: '阴金 · 温润珠玉 / 严谨精微', en: 'Yin Metal · Fine Jade / Meticulous Precision' },
      '壬': { zh: '阳水 · 汪洋浩荡 / 周流不滞', en: 'Yang Water · Vast Ocean / Dynamic Exploration' },
      '癸': { zh: '阴水 · 雨露晨霜 / 幽微深邃', en: 'Yin Water · Dewdrop Mist / Intuitive Penetration' }
    };

    const BRANCH_VITALITIES = {
      '子': { zh: '帝旺阳水 · 潜龙极盛', en: 'Imperial Water Peak · Zenith Potency' },
      '丑': { zh: '金土微寒 · 积淀蓄势', en: 'Winter Earth Reservoir · Silent Gathering' },
      '寅': { zh: '孟春生发 · 栋梁初构', en: 'Spring Emergence · Nascent Pillar' },
      '卯': { zh: '仲春极盛 · 芳华繁茂', en: 'Mid-Spring Peak · Verdant Flourishing' },
      '辰': { zh: '水土交汇 · 沃野千里', en: 'Water-Earth Nexus · Fertile Transition' },
      '巳': { zh: '孟夏初阳 · 炉火纯青', en: 'Early Summer Furnace · Refining Purity' },
      '午': { zh: '离火极烈 · 气象峥嵘', en: 'Mid-Summer Zenith · Soaring Radiance' },
      '未': { zh: '燥土木库 · 沉稳内敛', en: 'Summer Earth & Wood Vault · Grounded Reserve' },
      '申': { zh: '孟秋初肃 · 锋芒初试', en: 'Early Autumn Metal · Sharp Prowess' },
      '酉': { zh: '仲秋纯粹 · 珠玉耀目', en: 'Mid-Autumn Pure Metal · Crystal Polish' },
      '戌': { zh: '火库深藏 · 忠烈厚重', en: 'Autumn Fire Vault · Resolute Steadfastness' },
      '亥': { zh: '天门之引 · 源远流长', en: 'Heavenly Gate Ingress · Enduring Spring' }
    };

    let naYinToneZh = '羽水音律 · 润下流芳';
    let naYinToneEn = 'Yu Water Tone · Fluid Resonance';
    if (dayNaYin.includes('金')) {
      naYinToneZh = '商金音律 · 刚肃清朗';
      naYinToneEn = 'Shang Metal Tone · Crisp Integrity';
    } else if (dayNaYin.includes('木')) {
      naYinToneZh = '角木音律 · 和畅欣荣';
      naYinToneEn = 'Jiao Wood Tone · Harmonious Growth';
    } else if (dayNaYin.includes('水')) {
      naYinToneZh = '羽水音律 · 润下流芳';
      naYinToneEn = 'Yu Water Tone · Fluid Resonance';
    } else if (dayNaYin.includes('火')) {
      naYinToneZh = '徵火音律 · 炎上明烈';
      naYinToneEn = 'Zhi Fire Tone · Radiant Radiance';
    } else if (dayNaYin.includes('土')) {
      naYinToneZh = '宫土音律 · 敦厚深沉';
      naYinToneEn = 'Gong Earth Tone · Grounded Center';
    }

    const dmNature = STEM_NATURES[dm] || { zh: `${dm}五行之气`, en: `${dm} Elemental Essence` };
    const branchVit = BRANCH_VITALITIES[dayBranch] || { zh: `${dayBranch}地气所钟`, en: `${dayBranch} Earthly Resonance` };

    const heavenLuZh = `天元为禄【${dm}】：主外在名位、社会公信力与专业职权。代表命主在社会层面的立身之本，宜以清正德行与硬核专业护持，名实相称方能永固。`;
    const heavenLuEn = `Heavenly Prime (Rank) [${dm}]: Governs societal reputation, public trust, and executive credentials. Must be anchored in professional excellence and unyielding integrity.`;
    const earthMingZh = `地元为命【${dayBranch}】：主形体根基、资产沉淀与寿夭休咎。代表命主承受压力的生理耐受度与不动产基业，需规律起居培护元神。`;
    const earthMingEn = `Earthly Prime (Destiny) [${dayBranch}]: Governs somatic resilience, asset preservation, and longevity foundations. Demands balanced circadian rhythm to fortify deep vitality.`;
    const humanShenZh = `人元为身【纳音：${dayNaYin}】：主内在才干、灵性直觉与音律气象。象征命主独一无二的生命频段与精神追求，是超越世俗名利的灵魂底色。`;
    const humanShenEn = `Human Prime (Body) [NaYin: ${dayNaYin}]: Governs internal genius, spiritual intuition, and creative temperament—the sovereign soul frequency beyond mundane metrics.`;

    // Detailed Male vs Female Metaphysical Distinctions (男女命差异)
    const luGenderDiffZh = isMale
      ? `【乾造男命立禄】：男命以天元为建功立业之阳刚总纲。重在行业核心话语权构建、团队攻坚带头、法务契约契合度与宏观战略决断；宜戒心浮气躁与刚愎自用，以博大胸襟统摄群伦。`
      : `【坤造女命立禄】：女命以天元为独立自强之清贵坐标。重在专业硬核壁垒打造、知性公信声誉、商业独立掌控权与优雅社交边界；宜以智慧柔和化解外部阻力，在自立主权中绽放尊荣。`;

    const luGenderDiffEn = isMale
      ? `[Male Native (Qian Zao) Rank Dynamics]: Prioritizes executive mandate, strategic execution, contractual trustworthiness, and sovereign industry leadership. Avoid overconfidence; command authority with magnanimity.`
      : `[Female Native (Kun Zao) Rank Dynamics]: Prioritizes intellectual sovereignty, specialized professional moats, public reputation, and composed poise. Build independent credibility with sharp technical competence.`;

    const mingGenderDiffZh = isMale
      ? `【乾造男命固命】：男命地元重在承压抗挫韧性、骨骼心肺体能底盘与经受长线经济周期的家业压舱石。切忌长期透支应酬与熬夜暴躁，宜以规律自律护持元阳。`
      : `【坤造女命固命】：女命地元重在气血阴阳调和、内分泌生理节律滋养与深层情绪定力。宜防冷滞郁结与过度思虑，顺应四时寒温，以安和从容之体魄颐养天年。`;

    const mingGenderDiffEn = isMale
      ? `[Male Native (Qian Zao) Vital Foundation]: Anchors stress tolerance, musculoskeletal stamina, capital preservation, and multi-year resilience. Guard against lifestyle burnout and excessive night work.`
      : `[Female Native (Kun Zao) Vital Foundation]: Anchors hormonal balance, somatic vitality, emotional grounding, and restorative wellness. Prioritize circadian nourishment and internal peace.`;

    const shenGenderDiffZh = isMale
      ? `【乾造男命修身】：男命人元纳音重在将内在情怀与工匠灵感，切实转化为具备时代竞争力的原创技术产品、商业体系或传世著作，知行合一以副盛名。`
      : `【坤造女命修身】：女命人元纳音重在超凡审美直觉、灵性共情洞察力与精神独立自足。在艺术创作、心理疗愈、现代商业运营或文化创新中构筑丰盈充实的灵魂圣殿。`;

    const shenGenderDiffEn = isMale
      ? `[Male Native (Qian Zao) Inner Craft]: Materializes creative genius into patented architectures, robust commercial systems, and lasting generational deliverables.`
      : `[Female Native (Kun Zao) Inner Craft]: Radiates aesthetic discernment, acute emotional intuition, cultural elegance, and serene spiritual sovereignty.`;

    // Composite Object Construction with safe string conversion
    const heavenlyPrimeObj = {
      stem: dm,
      natureZh: dmNature.zh,
      natureEn: dmNature.en,
      meaningZh: heavenLuZh,
      meaningEn: heavenLuEn,
      genderDiffZh: luGenderDiffZh,
      genderDiffEn: luGenderDiffEn,
      toString() { return heavenLuZh; },
      valueOf() { return heavenLuZh; }
    };

    const earthlyPrimeObj = {
      branch: dayBranch,
      vitalityZh: branchVit.zh,
      vitalityEn: branchVit.en,
      meaningZh: earthMingZh,
      meaningEn: earthMingEn,
      genderDiffZh: mingGenderDiffZh,
      genderDiffEn: mingGenderDiffEn,
      toString() { return earthMingZh; },
      valueOf() { return earthMingZh; }
    };

    const humanPrimeObj = {
      naYin: dayNaYin,
      toneZh: naYinToneZh,
      toneEn: naYinToneEn,
      meaningZh: humanShenZh,
      meaningEn: humanShenEn,
      genderDiffZh: shenGenderDiffZh,
      genderDiffEn: shenGenderDiffEn,
      toString() { return humanShenZh; },
      valueOf() { return humanShenZh; }
    };

    return {
      heavenlyPrime: heavenlyPrimeObj,
      earthlyPrime: earthlyPrimeObj,
      humanPrime: humanPrimeObj,
      heavenLuZh,
      heavenLuEn,
      earthMingZh,
      earthMingEn,
      humanShenZh,
      humanShenEn,
      gender: isMale ? '乾造' : '坤造',
      genderDiffZh: `${luGenderDiffZh}\n${mingGenderDiffZh}\n${shenGenderDiffZh}`,
      genderDiffEn: `${luGenderDiffEn}\n${mingGenderDiffEn}\n${shenGenderDiffEn}`,
      synthesisZh: `三元合参：天元透干以立名，地元通根以立业，人元纳音以安魂。乾坤互鉴，形神兼备。`,
      synthesisEn: `Three Primes Synthesis: Heavenly Prime establishes reputation, Earthly Prime secures material ground, and Human Prime enriches the spiritual soul.`
    };
  }

  /**
   * Environmental and Era Resonance Analysis
   */
  static getEnvironmentalResonance(arg1, arg2) {
    let favorableEl = '木';
    const stemToEl = { '甲':'木','乙':'木','丙':'火','丁':'火','戊':'土','己':'土','庚':'金','辛':'金','壬':'水','癸':'水' };
    const elements = ['木', '火', '土', '金', '水'];

    if (typeof arg1 === 'string') {
      if (elements.includes(arg1)) {
        favorableEl = arg1;
      } else if (stemToEl[arg1]) {
        favorableEl = stemToEl[arg1];
      }
    } else if (arg1 && typeof arg1 === 'object') {
      if (arg2 && arg2.primary && elements.includes(arg2.primary)) {
        favorableEl = arg2.primary;
      } else if (arg1.dayMasterElement && elements.includes(arg1.dayMasterElement)) {
        favorableEl = arg1.dayMasterElement;
      }
    }

    const geo = LI_XU_ZHONG_DATA.geographicDirections[favorableEl] || LI_XU_ZHONG_DATA.geographicDirections['木'];
    const elNames = {
      '木': { zh: '木 (和畅·生长)', en: 'Wood (Vital Growth)' },
      '火': { zh: '火 (明烈·向上)', en: 'Fire (Radiant Energy)' },
      '土': { zh: '土 (厚德·承载)', en: 'Earth (Grounded Stability)' },
      '金': { zh: '金 (坚劲·合规)', en: 'Metal (Precision Integrity)' },
      '水': { zh: '水 (智慧·流通)', en: 'Water (Fluid Wisdom)' }
    };
    const elInfo = elNames[favorableEl] || { zh: favorableEl, en: favorableEl };

    const macroTrendZh = `【时代周期交互】：在当下第四次工业革命与AI人工智能爆发大周期下，五行【${favorableEl}】所对应的赛道（科技向善、绿色生态、文化传承与数字化普惠）正迎来历史级红利期。命主应当将自身核心才干与时代浪潮深度锁合，顺水行舟。`;
    const macroTrendEn = `【Macro Era Resonance】: In the 4th Industrial Revolution and sovereign AI paradigm shift, the [${favorableEl}] sector (ethical intelligence, green ecologies, cultural assets, and decentralized agility) enters a generational super-cycle. Align your sovereign craft with macro tides for compound momentum.`;

    return {
      favorableElement: favorableEl,
      elementZh: elInfo.zh,
      elementEn: elInfo.en,
      directionZh: geo.directionZh,
      directionEn: geo.directionEn,
      citiesZh: geo.citiesZh,
      citiesEn: geo.citiesEn,
      idealGeographyZh: geo.directionZh,
      idealGeographyEn: geo.directionEn,
      targetCitiesZh: geo.citiesZh,
      targetCitiesEn: geo.citiesEn,
      fengshuiZh: geo.fengshuiZh,
      fengshuiEn: geo.fengshuiEn,
      workspaceEnergyZh: geo.fengshuiZh,
      workspaceEnergyEn: geo.fengshuiEn,
      macroTrendZh,
      macroTrendEn,
      eraMacroTrendZh: macroTrendZh,
      eraMacroTrendEn: macroTrendEn,
      canonicalQuoteZh: '《李虚中命书·论五音气象》：“方隅相生，地灵人杰；音律既调，四时成岁。人与天地同流，乘时代之风，无往不利。”',
      canonicalQuoteEn: 'Li Xu Zhong Ming Shu: "When directional winds harmonize, the soil nourishes brilliance; when acoustic frequencies align, seasons bear abundant fruit. Moving in rhythm with Heaven and Earth allows one to ride historical currents effortlessly."'
    };
  }

  static getAllChapters() {
    return LI_XU_ZHONG_DATA.chapters;
  }

  static search(keyword) {
    const results = [];
    if (!keyword || typeof keyword !== 'string') return results;
    const kw = keyword.trim().toLowerCase();

    LI_XU_ZHONG_DATA.chapters.forEach(c => {
      if (c.titleZh.toLowerCase().includes(kw) || c.quoteZh.toLowerCase().includes(kw) || c.vernacularZh.toLowerCase().includes(kw)) {
        results.push({
          source: '《李虚中命书》· 篇章',
          title: c.titleZh,
          content: c.quoteZh,
          detail: c.vernacularZh
        });
      }
    });

    for (const [el, g] of Object.entries(LI_XU_ZHONG_DATA.geographicDirections)) {
      if (el.includes(kw) || g.directionZh.toLowerCase().includes(kw) || g.citiesZh.toLowerCase().includes(kw)) {
        results.push({
          source: '《李虚中命书》· 环境场能',
          title: '五行【' + el + '】地理与环境共振',
          content: g.directionZh + '：' + g.citiesZh,
          detail: g.fengshuiZh
        });
      }
    }

    return results;
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { LiXuZhongDB, LI_XU_ZHONG_DATA };
}
if (typeof window !== 'undefined') {
  window.LiXuZhongDB = LiXuZhongDB;
  window.LI_XU_ZHONG_DATA = LI_XU_ZHONG_DATA;
}
