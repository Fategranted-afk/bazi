/**
 * 空间风水与八字开运全典引擎 (Spatial Feng Shui & Metaphysical Remediation Engine)
 * Generates 10 bespoke spatial, talismanic, and architectural recommendations tailored to natal chart & transit dynamics.
 * Fully bilingual (Chinese & English) with zero residual undefined fields.
 */

class SpatialFengShuiEngine {
  /**
   * Main entrypoint to compute all 10 spatial feng shui recommendations
   */
  static generateFengShuiGuide(bazi, luckData, residenceData) {
    if (!bazi || !bazi.pillars) return null;

    // 0. Current Residence City Five-Element Geographic Evaluation
    let currentCityEvaluation = null;
    try {
      const resCountry = (residenceData && residenceData.country) || 'China';
      const resCity = (residenceData && residenceData.city) || 'beijing';
      const customCity = (residenceData && residenceData.customCity) || '';
      currentCityEvaluation = this.evaluateResidenceCity(resCountry, resCity, bazi, customCity);
    } catch (e) {
      console.warn('City evaluation error:', e);
    }

    const dm = bazi.dayMaster;
    const dmEl = bazi.dayMasterElement || '木';
    const ziping = bazi.zipingScore || (typeof BaZiEngine !== 'undefined' ? BaZiEngine.calculateZipingScore(bazi) : null);
    const interactions = bazi.interactions || (typeof BaZiEngine !== 'undefined' ? BaZiEngine.calculatePillarInteractions(bazi.pillars) : null);

    // 1. Determine Favorable Elements (喜用五行)
    const generates = { '木': '火', '火': '土', '土': '金', '金': '水', '水': '木' };
    const generatedBy = { '木': '水', '火': '木', '土': '火', '金': '土', '水': '金' };
    const wealthMap = { '木': '土', '火': '金', '土': '水', '金': '木', '水': '火' };
    const officerMap = { '木': '金', '火': '水', '土': '木', '金': '火', '水': '土' };

    let favorableElements;
    if (ziping && ziping.categoryKey === 'extreme_strong') {
      // 专旺格 (曲直/炎上/稼穑/从革/润下)：顺其专旺之势，首重食伤泄秀疏浚（把能量梳理出去，大坝开闸灌溉），次取同气比劫顺势，最忌官杀克破与重厚生扶
      favorableElements = [generates[dmEl], dmEl, wealthMap[dmEl]];
    } else if (ziping && (ziping.categoryKey === 'moderate_weak' || ziping.categoryKey === 'extreme_weak')) {
      // 较弱或极弱：喜印比同源生扶护身
      favorableElements = [dmEl, generatedBy[dmEl]];
    } else {
      // 较旺格：首重食伤泄秀疏浚、次取财星耗散生发、复取官杀立规匡扶
      favorableElements = [generates[dmEl], wealthMap[dmEl], officerMap[dmEl]];
    }
    const primaryFavEl = favorableElements[0] || '木';

    const elNames = {
      '木': { zh: '木', en: 'Wood' },
      '火': { zh: '火', en: 'Fire' },
      '土': { zh: '土', en: 'Earth' },
      '金': { zh: '金', en: 'Metal' },
      '水': { zh: '水', en: 'Water' }
    };
    const primaryFavElObj = elNames[primaryFavEl] || { zh: primaryFavEl, en: primaryFavEl };

    // 2. Kua Number & Direction (八宅派个人命卦)
    const birthYear = (bazi.input && bazi.input.year) || 1990;
    const gender = bazi.gender || '乾造';
    const kuaInfo = this.calculatePersonalKua(birthYear, gender);

    const waterPct = parseFloat(
      (bazi.fiveElements && bazi.fiveElements.percentages && bazi.fiveElements.percentages['水']) ||
      (bazi.elements && bazi.elements.percentages && bazi.elements.percentages['水']) ||
      '0'
    );
    const isWaterOverloaded = (waterPct >= 38.0) || (dmEl === '水' && ziping && (ziping.categoryKey === 'extreme_strong' || ziping.categoryKey === 'strong' || (ziping.totalScore && ziping.totalScore >= 50)));

    // 3. Item 1: 延年位四方聚财阵 (4貔貅 + 1鼎)
    const yanNianItem = this.buildYanNianArray(kuaInfo, primaryFavEl, isWaterOverloaded);

    // 4. Item 2: 对门大龙龟与随身用神小龙龟
    const dragonTurtleItem = this.buildDragonTurtleGuide(primaryFavEl, primaryFavElObj.en);

    // 5. Item 3: 贪合忘冲/害/刑/破 (六合生肖佩戴与枕下安置、五行材质)
    const tanHeItem = this.buildTanHeWangChongGuide(bazi, interactions, primaryFavEl);

    // 6. Item 4: 汽车挂双铃铛化煞
    const carBellsItem = this.buildCarBellsGuide(primaryFavEl);

    // 7. Item 5: 房屋太极缺角泰山石敢当
    const missingCornerItem = this.buildMissingCornerGuide(primaryFavEl, kuaInfo);

    // 8. Item 6: 三合局天心十道生肖大阵
    const sanHeArrayItem = this.buildSanHeCosmicArray(primaryFavEl, interactions);

    // 9. Item 7: 催贵人、催文昌、催桃花
    const trioBoostItem = this.buildTrioBoostGuide(dm, bazi, isWaterOverloaded);

    // 10. Item 8: 河图洛书吉数与选楼层、车牌尾数、手机号、衣服与车辆颜色、商业拓客方位
    const hetuLuoshuItem = this.buildHetuLuoshuGuide(primaryFavEl, isWaterOverloaded);

    // 11. Item 9: 积德行善指南 (献血、布施、修身)
    const meritItem = this.buildMeritCultivationGuide(ziping);

    // 12. Item 10: 户型气场综合调理评级与风水总诀
    const holisticRatingItem = this.buildHolisticRating(ziping, interactions, kuaInfo, isWaterOverloaded);

    // 13. Specialized Codex: 防范「水多木漂」与五行物性实战指南
    const waterDriftRemedyItem = this.buildDriftingWoodRemedy(bazi, primaryFavEl, isWaterOverloaded, waterPct);

    return {
      timestamp: new Date().toISOString(),
      kuaInfo,
      primaryFavEl,
      primaryFavElZh: primaryFavElObj.zh,
      primaryFavElEn: primaryFavElObj.en,
      favorableElements,
      isWaterOverloaded,
      waterDriftRemedyItem,
      currentCityEvaluation,
      yanNianItem,
      dragonTurtleItem,
      tanHeItem,
      carBellsItem,
      missingCornerItem,
      sanHeArrayItem,
      trioBoostItem,
      hetuLuoshuItem,
      meritItem,
      holisticRatingItem
    };
  }

  /**
   * Computes Personal Eight Mansions Kua (三元九运个人命卦与延年方位)
   */
  static calculatePersonalKua(year, gender) {
    // Sum of digits of year until single digit
    let y = year;
    let sum = 0;
    while (y > 0) {
      sum += y % 10;
      y = Math.floor(y / 10);
    }
    while (sum >= 10) {
      sum = Math.floor(sum / 10) + (sum % 10);
    }

    let kuaNum;
    const isMale = (gender === '乾造' || gender === '男');
    if (year >= 2000) {
      kuaNum = isMale ? (9 - sum) : (sum + 6);
    } else {
      kuaNum = isMale ? (10 - sum) : (sum + 5);
    }
    while (kuaNum <= 0) kuaNum += 9;
    while (kuaNum > 9) kuaNum -= 9;
    if (kuaNum === 5) {
      kuaNum = isMale ? 2 : 8; // 5 maps to Kun(2) for male, Gen(8) for female
    }

    const kuaData = {
      1: { nameZh: '坎水命', nameEn: 'Kan Water Kua (1)', yanNianZh: '正南方 (离宫)', yanNianEn: 'South (Li)', sectorZh: '东四命', sectorEn: 'Eastern Life Group' },
      2: { nameZh: '坤土命', nameEn: 'Kun Earth Kua (2)', yanNianZh: '西北方 (乾宫)', yanNianEn: 'Northwest (Qian)', sectorZh: '西四命', sectorEn: 'Western Life Group' },
      3: { nameZh: '震木命', nameEn: 'Zhen Wood Kua (3)', yanNianZh: '东南方 (巽宫)', yanNianEn: 'Southeast (Xun)', sectorZh: '东四命', sectorEn: 'Eastern Life Group' },
      4: { nameZh: '巽木命', nameEn: 'Xun Wood Kua (4)', yanNianZh: '正东方 (震宫)', yanNianEn: 'East (Zhen)', sectorZh: '东四命', sectorEn: 'Eastern Life Group' },
      6: { nameZh: '乾金命', nameEn: 'Qian Metal Kua (6)', yanNianZh: '西南方 (坤宫)', yanNianEn: 'Southwest (Kun)', sectorZh: '西四命', sectorEn: 'Western Life Group' },
      7: { nameZh: '兑金命', nameEn: 'Dui Metal Kua (7)', yanNianZh: '东北方 (艮宫)', yanNianEn: 'Northeast (Gen)', sectorZh: '西四命', sectorEn: 'Western Life Group' },
      8: { nameZh: '艮土命', nameEn: 'Gen Earth Kua (8)', yanNianZh: '正西方 (兑宫)', yanNianEn: 'West (Dui)', sectorZh: '西四命', sectorEn: 'Western Life Group' },
      9: { nameZh: '离火命', nameEn: 'Li Fire Kua (9)', yanNianZh: '正北方 (坎宫)', yanNianEn: 'North (Kan)', sectorZh: '东四命', sectorEn: 'Eastern Life Group' }
    };

    const res = kuaData[kuaNum] || kuaData[1];
    return {
      kuaNum,
      ...res
    };
  }

  /**
   * 1. 延年位四方聚财阵 (4貔貅 + 1鼎)
   */
  static buildYanNianArray(kuaInfo, favEl, isWaterOverloaded = false) {
    const tripodMaterials = {
      '木': (isWaterOverloaded)
        ? { zh: '厚土青铜三足宝鼎 (内蕴深山沉香重木、五谷厚土与朱砂暖符)', en: 'Heavy bronze tripod infused with dense sinking agarwood, fertile soil, and cinnabar' }
        : { zh: '青铜三足宝鼎 (内蕴松柏香木)', en: 'Bronze tripod infused with fragrant cedar' },
      '火': { zh: '朱砂赤陶双耳神鼎', en: 'Cinnabar red terracotta ceremonial tripod' },
      '土': { zh: '紫砂汉白玉厚土尊鼎', en: 'Purple clay and white jade heavy tripod' },
      '金': { zh: '纯黄铜鎏金万象宝鼎', en: 'Gilded solid brass treasure tripod' },
      '水': { zh: '黑曜石墨玉聚财宝鼎', en: 'Obsidian and black jade prosperity tripod' }
    }[favEl] || { zh: '纯黄铜鎏金宝鼎', en: 'Gilded solid brass tripod' };

    const layoutExtraZh = (isWaterOverloaded && favEl === '木')
      ? '针对水旺大坝之命，依据风水典籍‘水多木漂，赖土培根’之法：鼎内重用五谷厚土深培重木，借厚土固根纳水，将浮泛水势稳稳沉降为延年不动产基石。'
      : '';
    const layoutExtraEn = (isWaterOverloaded && favEl === '木')
      ? ' Specifically engineered against Drifting Wood by packing the tripod with mineral soil and dense sinking wood to anchor liquid surplus into permanent foundations.'
      : '';

    return {
      titleZh: '延年位四方聚财貔貅大阵 (4貔貅 + 1鼎)',
      titleEn: 'Yan Nian Celestial Wealth Array (4 Pixiu + 1 Tripod)',
      locationZh: `本命延年第一吉位：【${kuaInfo.yanNianZh}】`,
      locationEn: `Prime Yan Nian Sector: [${kuaInfo.yanNianEn}]`,
      coreItemZh: `中枢定位：1座【${tripodMaterials.zh}】；四维拱卫：4尊开光纯铜/玉石【吞财双翼貔貅】`,
      coreItemEn: `Center: 1 [${tripodMaterials.en}]; Periphery: 4 consecrated Pixiu guardians`,
      layoutZh: `在房屋或办公室的【${kuaInfo.yanNianZh}】，以宝鼎居于正中央稳镇财库，鼎内安置五谷、五帝钱与天然水晶碎石；四尊貔貅头部呈45度角朝向东、南、西、北四方，象征‘广纳四方之财、吞吐天地资粮’，聚而不散，长保万全。${layoutExtraZh}`,
      layoutEn: `Place the treasure tripod at the center of your [${kuaInfo.yanNianEn}] sector, filled with five sacred grains, ancestral coins, and natural crystal shards. Position the 4 Pixiu facing outward into the cardinal quadrants to inhale wealth from all horizons.${layoutExtraEn}`,
      benefitsZh: '延年位主和合、长寿、资财稳固与贵人庇佑。此阵能牢固锁住流动资金敞口，化浮财为不动产长久基业。',
      benefitsEn: 'Yan Nian governs lasting harmony, longevity, asset consolidation, and mentor sponsorship. Anchors liquid volatility into enduring institutional wealth.'
    };
  }

  /**
   * 2. 对门大龙龟与随身用神小龙龟
   */
  static buildDragonTurtleGuide(favEl, favElEn = 'Water') {
    const pocketMaterial = {
      '木': { zh: '小叶紫檀 / 沉香木雕随身龙龟', en: 'Red Sandalwood / Agarwood carved pocket dragon turtle' },
      '火': { zh: '高纯朱砂 / 天然红玛瑙随身龙龟', en: 'Cinnabar / Red Agate pocket dragon turtle' },
      '土': { zh: '和田黄玉 / 纯天然蜜蜡随身龙龟', en: 'Hetian Yellow Jade / Amber pocket dragon turtle' },
      '金': { zh: '足金999 / 925纯银 / 纯黄铜随身龙龟', en: '24K Gold / Sterling Silver / Pure Brass pocket dragon turtle' },
      '水': { zh: '乌金黑曜石 / 冰种海蓝宝随身龙龟', en: 'Obsidian / Aquamarine pocket dragon turtle' }
    }[favEl] || { zh: '和田玉雕随身龙龟', en: 'Hetian Jade carved pocket dragon turtle' };

    return {
      titleZh: '对门大龙龟化煞与随身用神小龙龟护体',
      titleEn: 'Doorway Dragon Turtle Barrier & Personal Pocket Companion',
      facingDoorZh: '玄关对门大龙龟：若入户大门正对电梯口、下行楼梯、走廊穿堂（开口煞/穿心煞）或邻居大门对冲，必须在玄关处摆放一尊纯铜大号龙龟，头部正对大门，以龙首龟身吞吐化煞，化戾气为祥和。',
      facingDoorEn: 'Entryway Giant Dragon Turtle: If your front entrance faces elevators, downward stairs, long corridors, or opposite apartment doors, place a large brass Dragon Turtle facing outward to swallow incoming sha and secure domestic stability.',
      portableZh: `随身用神小龙龟：根据命理第一喜用神【${favEl}】，随身佩戴或在日常手包、办公桌右上角安置一尊【${pocketMaterial.zh}】。`,
      portableEn: `Personal Pocket Dragon Turtle: Attuned to your prime favorable element [${favElEn}], carry or place on the top-right corner of your desk a [${pocketMaterial.en}].`,
      benefitsZh: '龙龟既有神龙之刚健威武能降伏小人官非，又有灵龟之长寿沉静能聚纳长久资产。随身佩戴能形成贴身以太防护场，抵御职场暗箭与小人中伤。',
      benefitsEn: 'The Dragon Turtle combines the sovereign authority of dragons to dispel workplace intrigue with the turtle\'s immortal longevity to compound wealth.'
    };
  }

  /**
   * 3. 贪合忘冲/害/刑/破 (六合生肖佩戴与枕下安置、五行材质)
   */
  static buildTanHeWangChongGuide(bazi, interactions, favEl) {
    const clashes = (interactions && interactions.branchClashes) ? interactions.branchClashes : [];
    const harms = (interactions && interactions.branchHarms) ? interactions.branchHarms : [];
    const punishments = (interactions && interactions.branchPunishments) ? interactions.branchPunishments : [];

    const liuHeZodiacMap = {
      '子': { partner: '丑', zodiacZh: '牛', zodiacEn: 'Ox' },
      '丑': { partner: '子', zodiacZh: '鼠', zodiacEn: 'Rat' },
      '寅': { partner: '亥', zodiacZh: '猪', zodiacEn: 'Pig' },
      '卯': { partner: '戌', zodiacZh: '狗', zodiacEn: 'Dog' },
      '辰': { partner: '酉', zodiacZh: '鸡', zodiacEn: 'Rooster' },
      '巳': { partner: '申', zodiacZh: '猴', zodiacEn: 'Monkey' },
      '午': { partner: '未', zodiacZh: '羊', zodiacEn: 'Goat' },
      '未': { partner: '午', zodiacZh: '马', zodiacEn: 'Horse' },
      '申': { partner: '巳', zodiacZh: '蛇', zodiacEn: 'Snake' },
      '酉': { partner: '辰', zodiacZh: '龙', zodiacEn: 'Dragon' },
      '戌': { partner: '卯', zodiacZh: '兔', zodiacEn: 'Rabbit' },
      '亥': { partner: '寅', zodiacZh: '虎', zodiacEn: 'Tiger' }
    };

    const branchEnMap = {
      '子': 'Zi (Rat)', '丑': 'Chou (Ox)', '寅': 'Yin (Tiger)', '卯': 'Mao (Rabbit)',
      '辰': 'Chen (Dragon)', '巳': 'Si (Snake)', '午': 'Wu (Horse)', '未': 'Wei (Goat)',
      '申': 'Shen (Monkey)', '酉': 'You (Rooster)', '戌': 'Xu (Dog)', '亥': 'Hai (Pig)'
    };
    const formatBranchesEn = (bStr) => {
      if (!bStr) return '';
      return Array.from(bStr).map(b => branchEnMap[b] || b).join('-');
    };

    const targetBranch = bazi.pillars.day.branch; // Day branch is core self & relationship palace
    const cureZodiac = liuHeZodiacMap[targetBranch] || { partner: '丑', zodiacZh: '牛', zodiacEn: 'Ox' };

    const materialMap = {
      '木': { zh: '雷劈枣木 / 绿檀木雕刻', en: 'Thunder-struck jujube wood or green sandalwood carving' },
      '火': { zh: '古法琉璃 / 紫砂朱泥烧制', en: 'Ancient glasswork or purple clay ceramic' },
      '土': { zh: '岫玉 / 黄蜡石 / 泰山玉雕件', en: 'Natural Xiuyan jade or yellow wax stone' },
      '金': { zh: '纯银精工 / 钛金 / 黄铜铸造', en: 'Sterling silver, titanium, or solid brass casting' },
      '水': { zh: '深海黑曜石 / 冰透天然水晶', en: 'Deep sea obsidian or ice-clear natural crystal' }
    }[favEl] || { zh: '天然玉石雕件', en: 'Natural carved jade' };

    const conflictNotesZh = [];
    const conflictNotesEn = [];
    if (clashes.length > 0) {
      conflictNotesZh.push(`原局见地支冲【${clashes.map(c => c.branches).join('、')}】`);
      conflictNotesEn.push(`Natal branch clashes [${clashes.map(c => formatBranchesEn(c.branches)).join(', ')}]`);
    }
    if (harms.length > 0) {
      conflictNotesZh.push(`带暗害【${harms.map(h => h.branches).join('、')}】`);
      conflictNotesEn.push(`Subtle branch harms [${harms.map(h => formatBranchesEn(h.branches)).join(', ')}]`);
    }
    if (punishments.length > 0) {
      conflictNotesZh.push(`逢刑局【${punishments.map(p => p.branches).join('、')}】`);
      conflictNotesEn.push(`Punishment signatures [${punishments.map(p => formatBranchesEn(p.branches)).join(', ')}]`);
    }

    const stateDescZh = conflictNotesZh.length > 0 ? conflictNotesZh.join('，') : '原局干支顺畅无严重刑冲';
    const stateDescEn = conflictNotesEn.length > 0 ? conflictNotesEn.join('; ') : 'Smooth chart with minimal clash tension';

    return {
      titleZh: '贪合忘冲秘法：六合生肖佩戴与枕下安镇法门',
      titleEn: 'Harmonizing Tension via Six-Harmony Zodiac Talisman',
      natalStateZh: stateDescZh,
      natalStateEn: stateDescEn,
      remedyZodiacZh: `六合通关生肖：属相【${cureZodiac.zodiacZh}】(地支${cureZodiac.partner})`,
      remedyZodiacEn: `Remedy Zodiac: [${cureZodiac.zodiacEn}] (Branch ${branchEnMap[cureZodiac.partner] || cureZodiac.partner})`,
      materialZh: `钦定五行材质：【${materialMap.zh}】`,
      materialEn: `Attuned Material: [${materialMap.en}]`,
      protocolZh: `依据易经古法‘贪合忘冲、贪合忘刑’最高调和准则：在日间贴身佩戴【${cureZodiac.zodiacZh}】生肖挂件；夜间睡眠时，将另一尊【${cureZodiac.zodiacZh}】生肖玉牌或木雕安放于枕头下内胆中心。通过强大的六合阴阳吸附之力，使原局对冲冲气化解为融通生发之力。`,
      protocolEn: `In accordance with classical 'Greedy for Harmony, Oblivious to Clash' principles: wear a [${cureZodiac.zodiacEn}] talisman pendant during the day, and place a carved talisman under your sleeping pillow at night to transmute friction into synergistic momentum.`,
      benefitsZh: '彻底融化夫妻宫冲克、职场暗中掣肘与情绪内耗，重构磁场平稳闭环。',
      benefitsEn: 'Neutralizes relationship palace volatility, removes workplace friction, and restores psychological equilibrium.'
    };
  }

  /**
   * 4. 汽车挂双铃铛化煞
   */
  static buildCarBellsGuide(favEl) {
    return {
      titleZh: '座驾专属化煞：汽车后视镜纯铜双铃铛法门',
      titleEn: 'Automotive Travel Shield: Dual Pure Brass Bells',
      itemZh: '两枚纯铜精铸实心小铜铃 (双铃成双，金声清越)',
      itemEn: 'Pair of solid pure brass bells hung behind rearview mirror',
      protocolZh: '在私家车后视镜背面居中挂上一组【双铃铛】（纯黄铜材质为佳，以红绳或金丝线系结）。车辆行驶转弯或颠簸时，双铃自然碰撞发出清脆金石之音。',
      protocolEn: 'Hang a pair of pure copper bells behind your vehicle\'s central rearview mirror tied with cinnabar cord. The crisp resonant metallic sound dispels driving exhaustion.',
      principleZh: '易学中‘金声玉振破沉滞’。行车路上多煞气（如大车逼压、十字路冲、桥隧阴气）；纯铜双铃之音律属于正统五行乾金之刚，其声波振动频率能瞬间震散睡意浊气与道路虚耗煞，保行车千里平安。',
      principleEn: 'In metaphysics, pure resonant metal frequencies shatter dormant negative energy and road rush sha, preserving peak alertness and clear navigation.'
    };
  }

  /**
   * 5. 房屋太极缺角泰山石敢当
   */
  static buildMissingCornerGuide(favEl, kuaInfo) {
    const palaceMap = {
      '木': { palaceZh: '正东方 (震宫) 或 东南方 (巽宫)', palaceEn: 'East (Zhen) or Southeast (Xun)', impactZh: '若缺角损长子事业、肝胆经络、名声与决断力', impactEn: 'Missing corner impairs executive growth, liver health, and public renown' },
      '火': { palaceZh: '正南方 (离宫)', palaceEn: 'South (Li)', impactZh: '若缺角损文化功名、眼目心血管健康与中女前程', impactEn: 'Missing corner impairs academic renown, cardiovascular vitality, and creativity' },
      '土': { palaceZh: '东北方 (艮宫) 或 西南方 (坤宫)', palaceEn: 'Northeast (Gen) or Southwest (Kun)', impactZh: '若缺角损家业不动产继承、脾胃消化与母亲/幼子福泽', impactEn: 'Missing corner impairs real estate accumulation, digestion, and maternal stability' },
      '金': { palaceZh: '西北方 (乾宫) 或 正西方 (兑宫)', palaceEn: 'Northwest (Qian) or West (Dui)', impactZh: '若缺角直接损伤男主人尊严威望、头部呼吸系统与实权掌控', impactEn: 'Missing corner directly impairs sovereign authority, respiratory health, and leadership' },
      '水': { palaceZh: '正北方 (坎宫)', palaceEn: 'North (Kan)', impactZh: '若缺角损深层智谋、肾脏水运、现金流储备与后代繁衍', impactEn: 'Missing corner impairs cash-flow liquidity, strategic depth, and regenerative stamina' }
    }[favEl] || { palaceZh: '西北方 (乾位天门)', palaceEn: 'Northwest (Qian Gate)', impactZh: '损核心事业与贵人运势', impactEn: 'Impairs core strategic career and authority' };

    return {
      titleZh: '房屋太极补缺：泰山石敢当填补八卦缺角',
      titleEn: 'Architectural Taiji Restoration: Mount Tai Stone Barrier',
      priorityPalaceZh: palaceMap.palaceZh,
      priorityPalaceEn: palaceMap.palaceEn,
      impactZh: palaceMap.impactZh,
      impactEn: palaceMap.impactEn,
      itemZh: '正宗泰山原石【泰山石敢当】(朱砂雕刻，底平顶尖)',
      itemEn: 'Authentic Mount Tai Stone inscribed with red cinnabar calligraphy',
      protocolZh: `经全盘户型太极测算，优先审验住宅或办公室的【${palaceMap.palaceZh}】。若该方位存在缺角、阳台凹陷或洗手间污秽，必须在缺角墙根处安放一尊【泰山石敢当】，石面字样朝向房屋内侧或缺损开口处，以重达数公斤之泰山龙脉镇物弥补户型太极场之缺失。`,
      protocolEn: `Examine your residence or office at [${palaceMap.palaceEn}]. If a missing corner, indented recess, or improper bathroom exists, install an authentic Mount Tai Stone at the base of the wall facing inward to restore the complete 360° Taiji energetic mandala.`,
      benefitsZh: '四正四隅皆满，八卦太极完好，家宅安如磐石，可抵御四时风水刑煞。',
      benefitsEn: 'Reconstructs a balanced energetic foundation across all eight compass sectors, sheltering occupants in enduring peace.'
    };
  }

  /**
   * 6. 三合局天心十道生肖大阵
   */
  static buildSanHeCosmicArray(favEl, interactions) {
    const bureauDefs = {
      '金': {
        bureauZh: '巳酉丑三合金局', bureauEn: 'Si-You-Chou Metal Bureau',
        zodiacsZh: '蛇 (巳) + 鸡 (酉) + 牛 (丑)', zodiacsEn: 'Snake + Rooster + Ox',
        themeZh: '刚毅肃杀 · 坚不可摧之执行力与法理统御', themeEn: 'Decisive sovereign discipline and ironclad legal integrity'
      },
      '水': {
        bureauZh: '申子辰三合水局', bureauEn: 'Shen-Zi-Chen Water Bureau',
        zodiacsZh: '猴 (申) + 鼠 (子) + 龙 (辰)', zodiacsEn: 'Monkey + Rat + Dragon',
        themeZh: '润下渊深 · 浩荡智谋与全球流动性资本布局', themeEn: 'Deep strategic intelligence, fluid adaptation, and capital velocity'
      },
      '木': {
        bureauZh: '亥卯未三合木局', bureauEn: 'Hai-Mao-Wei Wood Bureau',
        zodiacsZh: '猪 (亥) + 兔 (卯) + 羊 (未)', zodiacsEn: 'Pig + Rabbit + Goat',
        themeZh: '仁德葱郁 · 创新生发与文化品牌基业长青', themeEn: 'Benevolent culture, creative innovation, and sustainable legacy'
      },
      '火': {
        bureauZh: '寅午戌三合火局', bureauEn: 'Yin-Wu-Xu Fire Bureau',
        zodiacsZh: '虎 (寅) + 马 (午) + 狗 (戌)', zodiacsEn: 'Tiger + Horse + Dog',
        themeZh: '光明烈烈 · 个人IP光芒万丈与顶层声望破圈', themeEn: 'Radiant illumination, magnetic personal IP, and global prominence'
      },
      '土': {
        bureauZh: '巳酉丑相辅三合金土同源阵', bureauEn: 'Si-You-Chou Earth-Metal Resonance',
        zodiacsZh: '蛇 (巳) + 鸡 (酉) + 牛 (丑)', zodiacsEn: 'Snake + Rooster + Ox',
        themeZh: '厚德载物 · 汇聚稳固不动产与长久信用基石', themeEn: 'Grounded compounding of real property and institutional reputation'
      }
    };

    const curBureau = bureauDefs[favEl] || bureauDefs['水'];

    return {
      titleZh: '三合局天心十道生肖大阵 (生旺库引气大阵)',
      titleEn: 'Three Harmonies Ten-Direction Cosmic Bureau Array',
      targetBureauZh: curBureau.bureauZh,
      targetBureauEn: curBureau.bureauEn,
      zodiacTrioZh: curBureau.zodiacsZh,
      zodiacTrioEn: curBureau.zodiacsEn,
      themeZh: curBureau.themeZh,
      themeEn: curBureau.themeEn,
      protocolZh: `在书房、会议室或客厅的核心案几上，依照‘天心十道’十字坐标排列【${curBureau.zodiacsZh}】三尊精致雕像（长生位在前、帝旺位在左、墓库位在右，中轴空出汇纳天地清气）。三合齐聚引动化神，使该五行量能呈指数级聚拢，冲破运势瓶颈。`,
      protocolEn: `Upon the central desk of your study or boardroom, position the 3 guardians [${curBureau.zodiacsEn}] in a Ten-Direction Cross formation (Birth in front, Peak on the left, Storage on the right). This unifies the elemental triad, sparking exponential energetic compounding.`,
      benefitsZh: '汇聚三方生克全套动能，彻底摆脱单一五行孤立无援之窘境，是开创大事业之绝密阵法。',
      benefitsEn: 'Unites birth, peak, and storage into a self-sustaining powerhouse, breaking deadlocks and elevating enterprises.'
    };
  }

  /**
   * 7. 催贵人、催文昌、催桃花
   */
  static buildTrioBoostGuide(dm, bazi, isWaterOverloaded = false) {
    // 1. Tian Yi Nobleman
    const tianYiMap = {
      '甲': { zh: '东北丑牛位 / 西南未羊位', en: 'Northeast (Ox) / Southwest (Goat)' },
      '戊': { zh: '东北丑牛位 / 西南未羊位', en: 'Northeast (Ox) / Southwest (Goat)' },
      '庚': { zh: '东北丑牛位 / 西南未羊位', en: 'Northeast (Ox) / Southwest (Goat)' },
      '乙': { zh: '正北子鼠位 / 西南申猴位', en: 'North (Rat) / Southwest (Monkey)' },
      '己': { zh: '正北子鼠位 / 西南申猴位', en: 'North (Rat) / Southwest (Monkey)' },
      '丙': { zh: '正西酉鸡位 / 西北亥猪位', en: 'West (Rooster) / Northwest (Pig)' },
      '丁': { zh: '正西酉鸡位 / 西北亥猪位', en: 'West (Rooster) / Northwest (Pig)' },
      '壬': { zh: '正东卯兔位 / 东南巳蛇位', en: 'East (Rabbit) / Southeast (Snake)' },
      '癸': { zh: '正东卯兔位 / 东南巳蛇位', en: 'East (Rabbit) / Southeast (Snake)' },
      '辛': { zh: '正南午马位 / 东北寅虎位', en: 'South (Horse) / Northeast (Tiger)' }
    };
    const nobleLoc = tianYiMap[dm] || { zh: '东北丑位 / 西南未位', en: 'Northeast (Ox) / Southwest (Goat)' };

    // 2. Wen Chang Position
    const wenChangMap = {
      '甲': { zh: '东南巳蛇位', en: 'Southeast (Snake)' },
      '乙': { zh: '正南午马位', en: 'South (Horse)' },
      '丙': { zh: '西南申猴位', en: 'Southwest (Monkey)' },
      '丁': { zh: '正西酉鸡位', en: 'West (Rooster)' },
      '戊': { zh: '西南申猴位', en: 'Southwest (Monkey)' },
      '己': { zh: '正西酉鸡位', en: 'West (Rooster)' },
      '庚': { zh: '西北亥猪位', en: 'Northwest (Pig)' },
      '辛': { zh: '正北子鼠位', en: 'North (Rat)' },
      '壬': { zh: '东北寅虎位', en: 'Northeast (Tiger)' },
      '癸': { zh: '正东卯兔位', en: 'East (Rabbit)' }
    };
    const wenChangLoc = wenChangMap[dm] || { zh: '东南巳位', en: 'Southeast (Snake)' };

    // 3. Peach Blossom Position (based on Day/Year Branch)
    const dayBranch = bazi.pillars.day.branch;
    const peachBlossomMap = {
      '申': { zh: '正西酉鸡位', en: 'West (Rooster)' },
      '子': { zh: '正西酉鸡位', en: 'West (Rooster)' },
      '辰': { zh: '正西酉鸡位', en: 'West (Rooster)' },
      '寅': { zh: '正东卯兔位', en: 'East (Rabbit)' },
      '午': { zh: '正东卯兔位', en: 'East (Rabbit)' },
      '戌': { zh: '正东卯兔位', en: 'East (Rabbit)' },
      '巳': { zh: '正南午马位', en: 'South (Horse)' },
      '酉': { zh: '正南午马位', en: 'South (Horse)' },
      '丑': { zh: '正南午马位', en: 'South (Horse)' },
      '亥': { zh: '正北子鼠位', en: 'North (Rat)' },
      '卯': { zh: '正北子鼠位', en: 'North (Rat)' },
      '未': { zh: '正北子鼠位', en: 'North (Rat)' }
    };
    const peachLoc = peachBlossomMap[dayBranch] || { zh: '正南午马位', en: 'South (Horse)' };

    const wenChangPlantZh = isWaterOverloaded
      ? '大号紫砂厚陶盆深培土栽4枝富贵竹/罗汉松（借厚土固根纳水、防范水多木漂，切忌玻璃瓶水培）并配一盏暖光护眼灯照暖'
      : '水养4枝直立富贵竹';
    const wenChangPlantEn = isWaterOverloaded
      ? '4 stems of lucky bamboo planted in deep soil within a heavy purple clay pot with warm lighting (anchored in soil against drifting wood; strictly avoid water vases)'
      : '4 stems of lucky bamboo in clean water';

    const wenChangDescZh = isWaterOverloaded
      ? `【催文昌】（风水典籍·培土固根防木漂专属）：本命文昌文曲位在【${wenChangLoc.zh}】。布置【九层纯铜文昌塔 + 文房四宝 + ${wenChangPlantZh}】（以土固根、以火温木），将浩瀚智谋深深扎根为硬核立世之作。`
      : `【催文昌】：本命文昌文曲位在【${wenChangLoc.zh}】。布置【九层纯铜文昌塔 + 文房四宝 + ${wenChangPlantZh}】（以四绿文曲星水木相生之气），大幅提升深度专注力、大考通过率与重大战略决策精准度。`;

    const wenChangDescEn = isWaterOverloaded
      ? `[Wisdom & Intellect] (Rooted Earth Remedy against Drifting Wood): Wen Chang sits at [${wenChangLoc.en}]. Deploy a 9-tier bronze Wen Chang Pagoda, calligraphy set, and ${wenChangPlantEn} to anchor boundless intellect into grounded masterpieces.`
      : `[Wisdom & Intellect]: Wen Chang sits at [${wenChangLoc.en}]. Arrange a 9-tier bronze Wen Chang Pagoda, calligraphy set, and ${wenChangPlantEn} to sharpen strategic precision.`;

    return {
      titleZh: '催旺三宝：催贵人、催文昌与催真桃花辨识',
      titleEn: 'Trio Enhancements: Noble Mentors, Wisdom & True Charisma',
      noblemanZh: `【催贵人】：天乙贵人方位在【${nobleLoc.zh}】。在此位置安放一方精雕【羊脂白玉/黄铜九龙玉玺】（官印象征）。能瞬间链接行业顶级领袖与投资人庇佑，逢凶化吉。`,
      noblemanEn: `[Noble Mentors]: Tian Yi Nobleman resides at [${nobleLoc.en}]. Place an Imperial Jade or Brass Seal here to magnetize high-level patronage and decisive sponsorship.`,
      wenChangZh: wenChangDescZh,
      wenChangEn: wenChangDescEn,
      peachBlossomZh: `【催桃花与斩烂桃花】：个人真桃花位在【${peachLoc.zh}】。未婚者可摆放圆润【粉水晶狐狸球】配一尊白瓷花瓶插双数新鲜百合或玫瑰；已婚者切忌在此处放假花或空花瓶（防虚情假意与烂桃花侵扰，若逢烂桃花可挂桃木剑斩断纠葛）。`,
      peachBlossomEn: `[True Peach Blossom]: Charisma & romance locate at [${peachLoc.en}]. Singles can place Rose Quartz and fresh blooming lilies; couples should avoid empty vases or artificial flowers to prevent superficial entanglements.`
    };
  }

  /**
   * 8. 河图洛书吉数与选楼层、车牌尾数、手机号、衣服与车辆颜色、商业拓客方位
   */
  static buildHetuLuoshuGuide(favEl, isWaterOverloaded = false) {
    const matrix = {
      '木': {
        numbersZh: '3、8 (天三生木，地八成之)',
        numbersEn: '3, 8 (Heaven 3 generates Wood, Earth 8 completes it)',
        floorsZh: '3层、8层、13层、18层、23层、28层',
        floorsEn: 'Floors 3, 8, 13, 18, 23, 28',
        phoneTailZh: '尾数带 3、8、38、83',
        phoneTailEn: 'Ending in 3, 8, 38, 83',
        plateTailZh: '车牌尾数喜 3、8',
        plateTailEn: 'License plate suffix 3 or 8',
        colorsZh: '青绿色、墨绿、翠绿、浅草绿 (辅以水系黑色/深蓝)',
        colorsEn: 'Emerald green, olive green, teal (accented with black/navy)',
        carColorZh: '松石绿、墨玉黑、碳灰',
        carColorEn: 'Forest green, metallic black, charcoal grey',
        directionsZh: '正东方 (震宫)、东南方 (巽宫)',
        directionsEn: 'East (Zhen) and Southeast (Xun)'
      },
      '火': {
        numbersZh: '2、7 (地二生火，天七成之)',
        numbersEn: '2, 7 (Earth 2 generates Fire, Heaven 7 completes it)',
        floorsZh: '2层、7层、12层、17层、22层、27层',
        floorsEn: 'Floors 2, 7, 12, 17, 22, 27',
        phoneTailZh: '尾数带 2、7、27、72',
        phoneTailEn: 'Ending in 2, 7, 27, 72',
        plateTailZh: '车牌尾数喜 2、7',
        plateTailEn: 'License plate suffix 2 or 7',
        colorsZh: '绯红、朱砂红、紫罗兰、暖橙色 (辅以木系绿色)',
        colorsEn: 'Crimson, scarlet red, royal purple, warm orange',
        carColorZh: '中国红、酒红色、烈焰橙',
        carColorEn: 'Carmine red, burgundy wine, fiery orange',
        directionsZh: '正南方 (离宫)',
        directionsEn: 'South (Li)'
      },
      '土': {
        numbersZh: '5、10 (天五生土，地十成之)',
        numbersEn: '5, 10 (Heaven 5 generates Earth, Earth 10 completes it)',
        floorsZh: '5层、10层、15层、20层、25层、30层',
        floorsEn: 'Floors 5, 10, 15, 20, 25, 30',
        phoneTailZh: '尾数带 5、0、50、05',
        phoneTailEn: 'Ending in 5, 0, 50, 05',
        plateTailZh: '车牌尾数喜 5、0',
        plateTailEn: 'License plate suffix 5 or 0',
        colorsZh: '姜黄、咖啡色、米白、卡其、大地色',
        colorsEn: 'Ochre yellow, warm brown, cream beige, khaki',
        carColorZh: '香槟金、曜岩棕、浅米白',
        carColorEn: 'Champagne gold, volcanic brown, pearl white',
        directionsZh: '东北方 (艮宫)、西南方 (坤宫)、本地中原',
        directionsEn: 'Northeast (Gen), Southwest (Kun), Central Hub'
      },
      '金': {
        numbersZh: '4、9 (地四生金，天九成之)',
        numbersEn: '4, 9 (Earth 4 generates Metal, Heaven 9 completes it)',
        floorsZh: '4层、9层、14层、19层、24层、29层',
        floorsEn: 'Floors 4, 9, 14, 19, 24, 29',
        phoneTailZh: '尾数带 4、9、49、94',
        phoneTailEn: 'Ending in 4, 9, 49, 94',
        plateTailZh: '车牌尾数喜 4、9',
        plateTailEn: 'License plate suffix 4 or 9',
        colorsZh: '纯白、银灰、钛金、铂金白 (辅以土系米黄)',
        colorsEn: 'Pristine white, silver grey, titanium metallic',
        carColorZh: '珍珠白、钛银、枪灰色',
        carColorEn: 'Pearl white, titanium silver, gunmetal grey',
        directionsZh: '正西方 (兑宫)、西北方 (乾宫)',
        directionsEn: 'West (Dui) and Northwest (Qian)'
      },
      '水': {
        numbersZh: '1、6 (天一生水，地六成之)',
        numbersEn: '1, 6 (Heaven 1 generates Water, Earth 6 completes it)',
        floorsZh: '1层、6层、11层、16层、21层、26层',
        floorsEn: 'Floors 1, 6, 11, 16, 21, 26',
        phoneTailZh: '尾数带 1、6、16、61',
        phoneTailEn: 'Ending in 1, 6, 16, 61',
        plateTailZh: '车牌尾数喜 1、6',
        plateTailEn: 'License plate suffix 1 or 6',
        colorsZh: '曜石黑、深海蓝、藏青、星空黑 (辅以金系银白)',
        colorsEn: 'Obsidian black, deep navy, sapphire blue',
        carColorZh: '星际黑、皇家深蓝、深海灰',
        carColorEn: 'Cosmic black, midnight blue, dark navy',
        directionsZh: '正北方 (坎宫)',
        directionsEn: 'North (Kan)'
      }
    };

    const guide = { ...matrix[favEl] || matrix['木'] };
    if (isWaterOverloaded && favEl === '木') {
      guide.directionsZh = '正东方 (震木，须借厚土与阳火固根以防木漂)、东南方 (巽宫，木火向阳温润大吉)';
      guide.directionsEn = 'East (Zhen, requiring soil and solar warmth against drifting wood) and Southeast (Xun, sun-warmed Wood-Fire)';
      guide.clientOutreachZh = `商业拓客首选【正东方、东南方】。因水旺大坝最忌‘水多木漂、思虑浮泛不实’，拓展战略务必依托扎实实体或硬核业务闭环，切忌轻浮投机；办公朝向东方时，桌上宜置厚泥紫砂绿植或暖色射灯，培土固根、温木成林！`;
      guide.clientOutreachEn = `Target strategic expansions toward [East and Southeast]. Since overflowing charts risk Drifting Wood and superficial speculation, anchor expansions in tangible, grounded business deliverables; align desks with soil-potted greenery and warm lighting to compound steady growth.`;
    }

    return {
      titleZh: '河图洛书吉数、选楼层、车牌号与商业拓客大吉全览',
      titleEn: 'Hetu Luoshu Auspicious Numbers, Real Estate & Strategic Expansions',
      numbersZh: guide.numbersZh,
      numbersEn: guide.numbersEn,
      floorsZh: guide.floorsZh,
      floorsEn: guide.floorsEn,
      phoneTailZh: guide.phoneTailZh,
      phoneTailEn: guide.phoneTailEn,
      plateTailZh: guide.plateTailZh,
      plateTailEn: guide.plateTailEn,
      colorsZh: guide.colorsZh,
      colorsEn: guide.colorsEn,
      carColorZh: guide.carColorZh,
      carColorEn: guide.carColorEn,
      directionsZh: guide.directionsZh,
      directionsEn: guide.directionsEn,
      clientOutreachZh: guide.clientOutreachZh || `商业拓客与战略出海最优方位首选【${guide.directionsZh}】。商务洽谈将办公桌朝向该方，或将主要拓客资源倾斜至该区域城市，必得天地气场生助，成交率大幅翻倍。`,
      clientOutreachEn: guide.clientOutreachEn || `Target client acquisition and market expansions toward [${guide.directionsEn}]. Aligning your office desk toward these sectors dramatically amplifies conversion velocity.`
    };
  }

  /**
   * 9. 积德行善指南 (献血、布施、修身)
   */
  static buildMeritCultivationGuide(ziping) {
    return {
      titleZh: '无上形而上改运之基：积德行善三大实修法门',
      titleEn: 'Supreme Karmic Metaphysical Foundations: The Three Pillars of Merit',
      corePhilosophyZh: '‘一命二运三风水，四积阴德五读书’。器物风水乃顺应天地规律之术，唯有积德行善方为改天换命之根本源泉。',
      corePhilosophyEn: 'Fate, timing, and feng shui configure probabilities, but conscious virtue and intellectual enlightenment rewrite destiny at the root.',
      bloodDonationZh: '【无偿献血化解血光之灾】：凡逢刑冲破害、岁运并临或天克地冲之年，主动参与无偿献血（或在立春、生日当周洗牙抽血）。以主动见红破除被动灾殃，医者仁心，一滴热血可救活人命，功德无量。',
      bloodDonationEn: '[Blood Donation Neutralizing Physical Harm]: During high-stress transit cycles or clash years, voluntary blood donation fulfills the energetic signature of shedding blood proactively, transforming crisis into life-saving merit.',
      almsgivingZh: '【财布施与法布施】：定期将每月净利润的 2%~5% 用于助学贫寒学子、救助流浪动物（护生放生）或扶危济困；毫无保留地将自身专业知识输出传授给年轻人（法布施），广开智慧福田。',
      almsgivingEn: '[Generous Almsgiving & Knowledge Sharing]: Dedicate a disciplined portion of profits to scholarships, animal welfare, and emergency aid; mentor rising youth generously to unlock expanding karmic abundance.',
      selfCultivationZh: '【修身正己与严守口业】：绝不说两舌恶口中伤他人，不造谣传谣；遇他人侵害以德化怨，宽宏大量。心念纯正，神明自护，任何风水凶煞皆难近身。',
      selfCultivationEn: '[Ethical Speech & Right Mindfulness]: Eliminate malicious gossip and deceitful intrigue; forgive adversaries with magnanimity; pure intentionality creates an impenetrable shield against metaphysical misfortune.'
    };
  }

  /**
   * 10. 户型气场综合调理评级与风水总诀
   */
  static buildHolisticRating(ziping, interactions, kuaInfo, isWaterOverloaded = false) {
    let score = 88;
    let badgeZh = '🌟 大吉 · 生生不息';
    let badgeEn = '🌟 Auspicious · Flourishing Flow';
    let verdictZh = '气场流通有序，得延年吉星与喜用生旺扶持，空间风水具备极强吸金化煞之功。';
    let verdictEn = 'Harmonious spatial circulation supported by Yan Nian stars and resonant element combinations.';

    if (interactions && interactions.branchClashes && interactions.branchClashes.length > 1) {
      score -= 8;
      badgeZh = '⚡ 需调 · 动荡多变';
      badgeEn = '⚡ Dynamic · Requires Balancing';
      verdictZh = '原局干支冲克较多，空间环境必须严格依据‘贪合忘冲’与‘延年聚财鼎’布局，以定海神针平抑气场震荡。';
      verdictEn = 'Multiple chart clashes require disciplined deployment of Six-Harmony talismans and central tripods to calm spatial friction.';
    }

    if (isWaterOverloaded) {
      verdictZh += '（特别警示：盘面水势高涨浩荡，风水重在培土固根、以真火照暖，严防水多木漂之患）。';
      verdictEn += ' (Key Note: Natal water density is surging; ground spatial energy in deep soil and solar warmth to neutralize rootless drifting wood).';
    }

    return {
      titleZh: '户型气场综合调理评级与风水总诀',
      titleEn: 'Comprehensive Spatial Field Harmonization Rating & Master Principles',
      score,
      badgeZh,
      badgeEn,
      verdictZh,
      verdictEn,
      masterMottoZh: '心正意诚，天道佑之；器以载道，吉无不利。',
      masterMottoEn: 'Right intent commands cosmic support; sacred spatial alignment unlocks limitless fortune.'
    };
  }

  /**
   * Classical Feng Shui Codex: Utilizing Five-Element Physics to Overcome "Drifting Wood on Violent Waters" (水多木漂)
   */
  static buildDriftingWoodRemedy(bazi, primaryFavEl, isWaterOverloaded, waterPct) {
    if (!isWaterOverloaded || primaryFavEl !== '木') {
      return { isTriggered: false };
    }

    const pctDisplay = waterPct > 0 ? waterPct.toFixed(1) + '%' : '极高';

    return {
      isTriggered: true,
      titleZh: '风水典籍秘旨：利用五行本性彻底化解「水多木漂」实操全案',
      titleEn: 'Classical Feng Shui Codex: Utilizing Five-Element Physics to Overcome Drifting Wood',
      quoteZh: '《滴天髓》真传：“强水得木，方泄其势。水生木，水多木漂；强水得木，方泄其势；但若水盛而木浮，须赖土培其根、火暖其局！”',
      quoteEn: 'Di Tian Sui Maxim: "Strong water requires wood to drain its fury; but excessive water causes wood to drift rootless. It must rely on heavy soil to anchor its roots, and solar fire to warm its climate."',
      warningZh: `命局盘面水势占比高达 ${pctDisplay}（如同蓄满水的大坝），虽以东方木（食伤）泄秀疏浚为第一用神，但风水典籍断言‘水多木漂’：若用木不当（如选用轻浮细枝或水培植物），水大木浮，反致思虑泛滥无根、灵感极多却无法落地交付、行动随波逐流！必须利用五行本身的物理特性进行对症调理。`,
      warningEn: `Your natal water density reaches an overwhelming ${pctDisplay} (like a dam at critical capacity). While Wood drains the spillway as primary remedy, classical texts warn that excessive water without soil and fire triggers Drifting Wood: chronic cognitive restlessness, lack of execution follow-through, and aimless drift. You must master the physical properties of the elements to ground your vitality.`,
      pillars: [
        {
          elementZh: '木之本性',
          elementEn: 'Wood Physics',
          titleZh: '沉水重木与深根乔木 · 严禁无根水培',
          titleEn: 'Dense Sinking Timber & Deep-Rooted Arboreals · Strict Ban on Hydroponics',
          descZh: '普通轻木遇狂澜则浮漂腐烂，唯有密度大于水、入水即沉的“沉水重木”（沉香木、黑檀木、金丝楠乌木、小叶紫檀、铁力木）重逾千钧，入水不浮反而镇定狂波。书房办公案几首选实心重木大案，作为空间“定海神针”；室内绿植坚决杜绝水养插瓶（水培即漂且生阴湿），必须选用粗干深根之乔木厚叶植物（如发财树、琴叶榕、橡皮树）。',
          descEn: 'Light wood drifts, but dense sinking hardwoods (agarwood, ebony, bogwood) sink to anchor raging waves. Use solid hardwood desks as anchors. Ban hydroponic/water vases; deploy heavy, deep-rooted indoor trees.'
        },
        {
          elementZh: '土之本性',
          elementEn: 'Earth Physics',
          titleZh: '培土固根 · 紫砂厚陶深盆纳水',
          titleEn: 'Earth Anchoring · Heavy Ceramic Soil Reservoir',
          descZh: '木无土不立，水无土不蓄。风水典籍断定：“水盛木浮，全凭厚土以培基”。所有绿植必须使用大号沉重紫砂盆、粗厚陶土花盆，深埋肥沃泥土。以土培木，让树根深深扎进厚土之中，利用“土克水、土培木、木纳水”的连环生态链，使浩荡水能转化为大树深扎大地的稳固生命力！',
          descEn: 'Wood cannot stand without soil. Classical texts affirm: "When water swells and wood floats, rely entirely on heavy earth to anchor the foundation." House all greenery in massive purple clay or ceramic pots packed with mineral-rich soil to lock down the flood.'
        },
        {
          elementZh: '火之本性',
          elementEn: 'Fire Physics',
          titleZh: '阳和照暖 · 木火通明驱散水湿阴寒',
          titleEn: 'Solar Warmth · Radiant Wood-Fire Banishing Damp Chill',
          descZh: '满盘大水必兼阴寒湿冷，水冷则木僵不生。必须在东方、东南方绿植区或办公工位配置3000K-3500K暖白/暖黄光长明射灯（人工丙火），朝向向阳采光。借真火温润木气、驱散水寒，形成“水生木、木得土而扎根、木得火而通明”的生生不息大循环，彻底破除水多木漂！',
          descEn: 'Excessive water creates damp, icy cold where unheated wood freezes. Install warm 3000K-3500K spotlights (synthetic solar Fire) over greenery to warm the wood, achieving vibrant Water-Wood-Fire circular harmony.'
        }
      ]
    };
  }

  /**
   * Comprehensive Four-Country Geographic Five-Element Database
   * Mappings: Central Wu-Ji Earth (中央戊己土), South Bing-Ding Fire (南方丙丁火),
   * North Ren-Gui Water (北方壬癸水), East Jia-Yi Wood (东方甲乙木), West Geng-Xin Metal (西方庚辛金)
   */
  static GEO_CITIES_DATABASE = {
    China: {
      countryNameZh: '中国',
      countryNameEn: 'China',
      regions: {
        central: {
          directionZh: '中央',
          directionEn: 'Central',
          element: '土',
          elementZh: '土',
          elementEn: 'Earth',
          elementHeavenlyZh: '中央戊己土',
          elementHeavenlyEn: 'Central Wu-Ji Earth',
          cities: [
            { id: 'zhengzhou', nameZh: '郑州 (Zhengzhou)', nameEn: 'Zhengzhou' },
            { id: 'luoyang', nameZh: '洛阳 (Luoyang)', nameEn: 'Luoyang' },
            { id: 'wuhan', nameZh: '武汉 (Wuhan)', nameEn: 'Wuhan' }
          ]
        },
        south: {
          directionZh: '南方',
          directionEn: 'South',
          element: '火',
          elementZh: '火',
          elementEn: 'Fire',
          elementHeavenlyZh: '南方丙丁火',
          elementHeavenlyEn: 'South Bing-Ding Fire',
          cities: [
            { id: 'guangzhou', nameZh: '广州 (Guangzhou)', nameEn: 'Guangzhou' },
            { id: 'shenzhen', nameZh: '深圳 (Shenzhen)', nameEn: 'Shenzhen' },
            { id: 'hongkong', nameZh: '香港 (Hong Kong)', nameEn: 'Hong Kong' },
            { id: 'macau', nameZh: '澳门 (Macau)', nameEn: 'Macau' },
            { id: 'haikou', nameZh: '海口 (Haikou)', nameEn: 'Haikou' },
            { id: 'sanya', nameZh: '三亚 (Sanya)', nameEn: 'Sanya' }
          ]
        },
        north: {
          directionZh: '北方',
          directionEn: 'North',
          element: '水',
          elementZh: '水',
          elementEn: 'Water',
          elementHeavenlyZh: '北方壬癸水',
          elementHeavenlyEn: 'North Ren-Gui Water',
          cities: [
            { id: 'beijing', nameZh: '北京 (Beijing)', nameEn: 'Beijing' },
            { id: 'tianjin', nameZh: '天津 (Tianjin)', nameEn: 'Tianjin' },
            { id: 'shenyang', nameZh: '沈阳 (Shenyang)', nameEn: 'Shenyang' },
            { id: 'harbin', nameZh: '哈尔滨 (Harbin)', nameEn: 'Harbin' }
          ]
        },
        east: {
          directionZh: '东方',
          directionEn: 'East',
          element: '木',
          elementZh: '木',
          elementEn: 'Wood',
          elementHeavenlyZh: '东方甲乙木',
          elementHeavenlyEn: 'East Jia-Yi Wood',
          cities: [
            { id: 'shanghai', nameZh: '上海 (Shanghai · 极东海运)', nameEn: 'Shanghai (Eastern Maritime Port)', subRegionZh: '长三角极东涉海大门', subRegionEn: 'YRD Eastern Maritime Gateway', directionZh: '极东', directionEn: 'Far East', element: '木', elementHeavenlyZh: '东方甲乙木 (东海之滨 · 涉海大门)', elementHeavenlyEn: 'East Jia-Yi Wood (East Sea Gateway)' },
            { id: 'suzhou', nameZh: '苏州 (Suzhou · 太湖水乡)', nameEn: 'Suzhou (Taihu Basin)', subRegionZh: '长三角太湖水乡工业重镇', subRegionEn: 'YRD Taihu Basin Industrial Hub', directionZh: '东南', directionEn: 'Southeast', element: '木', elementHeavenlyZh: '东南巽木 (太湖润泽 · 金水相涵)', elementHeavenlyEn: 'Southeast Xun Wood (Taihu Basin & Tech Park)' },
            { id: 'hangzhou', nameZh: '杭州 (Hangzhou · 钱塘江南翼)', nameEn: 'Hangzhou (Qiantang South)', subRegionZh: '长三角南翼钱塘江创新中心', subRegionEn: 'YRD South Qiantang River Innovation Hub', directionZh: '南方', directionEn: 'South', element: '火', elementHeavenlyZh: '南方丙丁火 (钱塘江潮 · 水火既济)', elementHeavenlyEn: 'South Bing-Ding Fire (Qiantang River Digital Hub)' },
            { id: 'nanjing', nameZh: '南京 (Nanjing · 江淮西北)', nameEn: 'Nanjing (Jiangsu Northwest)', subRegionZh: '江苏西北江淮科教工商业枢纽', subRegionEn: 'Jiangsu Northwest Educational & Industrial Nexus', directionZh: '西北', directionEn: 'Northwest', element: '金', elementHeavenlyZh: '西北乾金 (钟山风雨 · 金水相涵)', elementHeavenlyEn: 'Northwest Qian Metal (Zhongshan Ancient Bastion)' },
            { id: 'wuxi', nameZh: '无锡 (Wuxi · 太湖北岸)', nameEn: 'Wuxi (North Taihu)', subRegionZh: '太湖北岸苏锡常产业带', subRegionEn: 'North Taihu High-Tech Industrial Corridor', directionZh: '中央', directionEn: 'Central', element: '土', elementHeavenlyZh: '中央戊己土 (太湖明珠 · 智能制造)', elementHeavenlyEn: 'Central Wu-Ji Earth (Taihu Pearl Advanced Manufacturing)' },
            { id: 'taipei', nameZh: '台北 (Taipei · 海岛东南)', nameEn: 'Taipei (Island Southeast)', subRegionZh: '东南海岛经济与半导体产业中枢', subRegionEn: 'Southeast Island Economy & Semiconductor Hub', directionZh: '东南', directionEn: 'Southeast', element: '木', elementHeavenlyZh: '东南巽木 (海岛风华 · 木火通明)', elementHeavenlyEn: 'Southeast Xun Wood (Island Vibrant Hub)' }
          ]
        },
        west: {
          directionZh: '西方',
          directionEn: 'West',
          element: '金',
          elementZh: '金',
          elementEn: 'Metal',
          elementHeavenlyZh: '西方庚辛金',
          elementHeavenlyEn: 'West Geng-Xin Metal',
          cities: [
            { id: 'chengdu', nameZh: '成都 (Chengdu)', nameEn: 'Chengdu' },
            { id: 'chongqing', nameZh: '重庆 (Chongqing)', nameEn: 'Chongqing' },
            { id: 'xian', nameZh: '西安 (Xi\'an)', nameEn: 'Xi\'an' },
            { id: 'urumqi', nameZh: '乌鲁木齐 (Urumqi)', nameEn: 'Urumqi' },
            { id: 'lanzhou', nameZh: '兰州 (Lanzhou)', nameEn: 'Lanzhou' },
            { id: 'kunming', nameZh: '昆明 (Kunming)', nameEn: 'Kunming' },
            { id: 'lhasa', nameZh: '拉萨 (Lhasa)', nameEn: 'Lhasa' }
          ]
        }
      }
    },
    UK: {
      countryNameZh: '英国',
      countryNameEn: 'United Kingdom',
      regions: {
        central: {
          directionZh: '中央',
          directionEn: 'Central',
          element: '土',
          elementZh: '土',
          elementEn: 'Earth',
          elementHeavenlyZh: '中央戊己土',
          elementHeavenlyEn: 'Central Wu-Ji Earth',
          cities: [
            { id: 'birmingham', nameZh: '伯明翰 (Birmingham)', nameEn: 'Birmingham' },
            { id: 'coventry', nameZh: '考文垂 (Coventry)', nameEn: 'Coventry' },
            { id: 'leicester', nameZh: '莱斯特 (Leicester)', nameEn: 'Leicester' },
            { id: 'nottingham', nameZh: '诺丁汉 (Nottingham)', nameEn: 'Nottingham' }
          ]
        },
        south: {
          directionZh: '南方',
          directionEn: 'South',
          element: '火',
          elementZh: '火',
          elementEn: 'Fire',
          elementHeavenlyZh: '南方丙丁火',
          elementHeavenlyEn: 'South Bing-Ding Fire',
          cities: [
            { id: 'london', nameZh: '伦敦 (London)', nameEn: 'London' },
            { id: 'southampton', nameZh: '南安普顿 (Southampton)', nameEn: 'Southampton' },
            { id: 'bristol', nameZh: '布里斯托 (Bristol)', nameEn: 'Bristol' },
            { id: 'brighton', nameZh: '布莱顿 (Brighton)', nameEn: 'Brighton' },
            { id: 'oxford', nameZh: '牛津 (Oxford)', nameEn: 'Oxford' }
          ]
        },
        north: {
          directionZh: '北方',
          directionEn: 'North',
          element: '水',
          elementZh: '水',
          elementEn: 'Water',
          elementHeavenlyZh: '北方壬癸水',
          elementHeavenlyEn: 'North Ren-Gui Water',
          cities: [
            { id: 'manchester', nameZh: '曼彻斯特 (Manchester)', nameEn: 'Manchester' },
            { id: 'leeds', nameZh: '利兹 (Leeds)', nameEn: 'Leeds' },
            { id: 'edinburgh', nameZh: '爱丁堡 (Edinburgh)', nameEn: 'Edinburgh' },
            { id: 'glasgow', nameZh: '格拉斯哥 (Glasgow)', nameEn: 'Glasgow' },
            { id: 'newcastle', nameZh: '纽卡斯尔 (Newcastle)', nameEn: 'Newcastle' }
          ]
        },
        east: {
          directionZh: '东方',
          directionEn: 'East',
          element: '木',
          elementZh: '木',
          elementEn: 'Wood',
          elementHeavenlyZh: '东方甲乙木',
          elementHeavenlyEn: 'East Jia-Yi Wood',
          cities: [
            { id: 'cambridge', nameZh: '剑桥 (Cambridge)', nameEn: 'Cambridge' },
            { id: 'norwich', nameZh: '诺里奇 (Norwich)', nameEn: 'Norwich' },
            { id: 'ipswich', nameZh: '伊普斯威奇 (Ipswich)', nameEn: 'Ipswich' }
          ]
        },
        west: {
          directionZh: '西方',
          directionEn: 'West',
          element: '金',
          elementZh: '金',
          elementEn: 'Metal',
          elementHeavenlyZh: '西方庚辛金',
          elementHeavenlyEn: 'West Geng-Xin Metal',
          cities: [
            { id: 'liverpool', nameZh: '利物浦 (Liverpool)', nameEn: 'Liverpool' },
            { id: 'cardiff', nameZh: '加的夫 (Cardiff)', nameEn: 'Cardiff' },
            { id: 'belfast', nameZh: '贝尔法斯特 (Belfast)', nameEn: 'Belfast' },
            { id: 'swansea', nameZh: '斯旺西 (Swansea)', nameEn: 'Swansea' }
          ]
        }
      }
    },
    USA: {
      countryNameZh: '美国',
      countryNameEn: 'United States',
      regions: {
        central: {
          directionZh: '中央',
          directionEn: 'Central',
          element: '土',
          elementZh: '土',
          elementEn: 'Earth',
          elementHeavenlyZh: '中央戊己土',
          elementHeavenlyEn: 'Central Wu-Ji Earth',
          cities: [
            { id: 'chicago', nameZh: '芝加哥 (Chicago)', nameEn: 'Chicago' },
            { id: 'kansas_city', nameZh: '堪萨斯城 (Kansas City)', nameEn: 'Kansas City' },
            { id: 'st_louis', nameZh: '圣路易斯 (St. Louis)', nameEn: 'St. Louis' },
            { id: 'dallas', nameZh: '达拉斯 (Dallas)', nameEn: 'Dallas' },
            { id: 'indianapolis', nameZh: '印第安纳波利斯 (Indianapolis)', nameEn: 'Indianapolis' },
            { id: 'denver', nameZh: '丹佛 (Denver)', nameEn: 'Denver' }
          ]
        },
        south: {
          directionZh: '南方',
          directionEn: 'South',
          element: '火',
          elementZh: '火',
          elementEn: 'Fire',
          elementHeavenlyZh: '南方丙丁火',
          elementHeavenlyEn: 'South Bing-Ding Fire',
          cities: [
            { id: 'miami', nameZh: '迈阿密 (Miami)', nameEn: 'Miami' },
            { id: 'houston', nameZh: '休斯敦 (Houston)', nameEn: 'Houston' },
            { id: 'atlanta', nameZh: '亚特兰大 (Atlanta)', nameEn: 'Atlanta' },
            { id: 'new_orleans', nameZh: '新奥尔良 (New Orleans)', nameEn: 'New Orleans' },
            { id: 'austin', nameZh: '奥斯汀 (Austin)', nameEn: 'Austin' }
          ]
        },
        north: {
          directionZh: '北方',
          directionEn: 'North',
          element: '水',
          elementZh: '水',
          elementEn: 'Water',
          elementHeavenlyZh: '北方壬癸水',
          elementHeavenlyEn: 'North Ren-Gui Water',
          cities: [
            { id: 'minneapolis', nameZh: '明尼阿波利斯 (Minneapolis)', nameEn: 'Minneapolis' },
            { id: 'detroit', nameZh: '底特律 (Detroit)', nameEn: 'Detroit' },
            { id: 'milwaukee', nameZh: '密尔沃基 (Milwaukee)', nameEn: 'Milwaukee' },
            { id: 'seattle', nameZh: '西雅图 (Seattle)', nameEn: 'Seattle' }
          ]
        },
        east: {
          directionZh: '东方',
          directionEn: 'East',
          element: '木',
          elementZh: '木',
          elementEn: 'Wood',
          elementHeavenlyZh: '东方甲乙木',
          elementHeavenlyEn: 'East Jia-Yi Wood',
          cities: [
            { id: 'new_york', nameZh: '纽约 (New York)', nameEn: 'New York' },
            { id: 'boston', nameZh: '波士顿 (Boston)', nameEn: 'Boston' },
            { id: 'washington', nameZh: '华盛顿特区 (Washington D.C.)', nameEn: 'Washington D.C.' },
            { id: 'philadelphia', nameZh: '费城 (Philadelphia)', nameEn: 'Philadelphia' }
          ]
        },
        west: {
          directionZh: '西方',
          directionEn: 'West',
          element: '金',
          elementZh: '金',
          elementEn: 'Metal',
          elementHeavenlyZh: '西方庚辛金',
          elementHeavenlyEn: 'West Geng-Xin Metal',
          cities: [
            { id: 'los_angeles', nameZh: '洛杉矶 (Los Angeles)', nameEn: 'Los Angeles' },
            { id: 'san_francisco', nameZh: '旧金山 (San Francisco)', nameEn: 'San Francisco' },
            { id: 'san_diego', nameZh: '圣迭戈 (San Diego)', nameEn: 'San Diego' },
            { id: 'las_vegas', nameZh: '拉斯维加斯 (Las Vegas)', nameEn: 'Las Vegas' },
            { id: 'portland', nameZh: '波特兰 (Portland)', nameEn: 'Portland' }
          ]
        }
      }
    },
    Canada: {
      countryNameZh: '加拿大',
      countryNameEn: 'Canada',
      provinces: {
        ontario: {
          key: 'ontario',
          nameZh: '安大略省 (Ontario)',
          nameEn: 'Ontario',
          pillarIndustriesZh: '金融商贸、前沿人工智能、高科技制造与先进汽车工程',
          pillarIndustriesEn: 'Financial Services, Frontier AI, Advanced Manufacturing & Automotive Tech',
          elementZh: '火土交融 (经济中枢)',
          elementEn: 'Fire-Earth Synthesis (Economic Nexus)'
        },
        quebec: {
          key: 'quebec',
          nameZh: '魁北克省 (Quebec)',
          nameEn: 'Quebec',
          pillarIndustriesZh: '航空航天、影视多媒体与游戏研发、绿色水电与生命科学',
          pillarIndustriesEn: 'Aerospace, Digital Multimedia/Gaming, Clean Hydro Energy & Life Sciences',
          elementZh: '水木涵养 (文化创意)',
          elementEn: 'Water-Wood Nourishment (Creative Culture)'
        },
        bc: {
          key: 'bc',
          nameZh: '不列颠哥伦比亚省 (British Columbia)',
          nameEn: 'British Columbia',
          pillarIndustriesZh: '太平洋国际贸易口岸、清洁能源、林业资源与数字科技创新',
          pillarIndustriesEn: 'Pacific International Gateway, Clean Tech, Forestry & Digital Innovation',
          elementZh: '金水汇聚 (口岸重镇)',
          elementEn: 'Metal-Water Confluence (Gateway Port)'
        },
        alberta: {
          key: 'alberta',
          nameZh: '阿尔伯塔省 (Alberta)',
          nameEn: 'Alberta',
          pillarIndustriesZh: '能源战略枢纽、石油天然气勘探、现代大宗农业与算力基建',
          pillarIndustriesEn: 'Energy Strategic Hub, Oil & Natural Gas, Modern Agribusiness & Compute Infrastructure',
          elementZh: '土金刚健 (能源宝库)',
          elementEn: 'Earth-Metal Solid Fortress (Energy Basin)'
        },
        manitoba: {
          key: 'manitoba',
          nameZh: '曼尼托巴省 (Manitoba)',
          nameEn: 'Manitoba',
          pillarIndustriesZh: '泛美洲内陆运输枢纽、重型装备制造、现代谷物农牧业',
          pillarIndustriesEn: 'Continental Logistics Hub, Heavy Equipment Manufacturing & Grain Agribusiness',
          elementZh: '中央戊己土 (交通枢纽)',
          elementEn: 'Central Wu-Ji Earth (Logistics Nexus)'
        }
      },
      regions: {
        central: {
          directionZh: '中央',
          directionEn: 'Central',
          element: '土',
          elementZh: '土',
          elementEn: 'Earth',
          elementHeavenlyZh: '中央戊己土',
          elementHeavenlyEn: 'Central Wu-Ji Earth',
          cities: [
            { id: 'winnipeg', nameZh: '温尼伯 (Winnipeg · 北美大陆中枢)', nameEn: 'Winnipeg (North American Center)', provinceKey: 'manitoba', isDenseCity: true, populationStr: '~749k', subRegionZh: '北美大陆几何中心曼省省会', subRegionEn: 'Continental Geographic Heart', directionZh: '中央', directionEn: 'Central', element: '土', elementHeavenlyZh: '中央戊己土 (泛美洲内陆多式联运枢纽)', elementHeavenlyEn: 'Central Wu-Ji Earth (Continental Logistics Nexus)', pillarIndustryZh: '泛美洲内陆物流枢纽与重工制造', pillarIndustryEn: 'Continental Logistics & Heavy Equipment' },
            { id: 'regina', nameZh: '里贾纳 (Regina)', nameEn: 'Regina', isDenseCity: false, populationStr: '~230k', subRegionZh: '萨省中南农业能源走廊', subRegionEn: 'Saskatchewan South-Central Hub', directionZh: '中央偏西', directionEn: 'Central-West', element: '土', elementHeavenlyZh: '中央戊己土 (农产品深加工与化肥矿业)', elementHeavenlyEn: 'Central Earth (Agri-Processing & Potash)', pillarIndustryZh: '农产品深加工与化肥矿业', pillarIndustryEn: 'Agri-Processing & Potash Mining' },
            { id: 'saskatoon', nameZh: '萨斯卡通 (Saskatoon)', nameEn: 'Saskatoon', isDenseCity: false, populationStr: '~270k', subRegionZh: '萨省中北科技农业中心', subRegionEn: 'Saskatchewan North-Central Tech Hub', directionZh: '中央偏北', directionEn: 'Central-North', element: '土', elementHeavenlyZh: '中央戊己土 (生物科技研发与农业科学)', elementHeavenlyEn: 'Central Earth (Biotech & Agriscience)', pillarIndustryZh: '生物科技研发与农业科学', pillarIndustryEn: 'Biotechnology & Agriscience' }
          ]
        },
        south: {
          directionZh: '南方',
          directionEn: 'South',
          element: '火',
          elementZh: '火',
          elementEn: 'Fire',
          elementHeavenlyZh: '南方丙丁火',
          elementHeavenlyEn: 'South Bing-Ding Fire',
          cities: [
            { id: 'toronto', nameZh: '多伦多 (Toronto · GTA中枢)', nameEn: 'Toronto (GTA Core)', provinceKey: 'ontario', isDenseCity: true, populationStr: '~2.8M', subRegionZh: '大多伦多中枢湖滨区 (GTA Core & Waterfront)', subRegionEn: 'GTA Core & Waterfront Sector', directionZh: '南方 (GTA中南向)', directionEn: 'South (GTA Waterfront)', element: '火', elementHeavenlyZh: '南方丙丁火 (湖水离火 · 水火既济)', elementHeavenlyEn: 'South Bing-Ding Fire (Waterfront Synergy)', pillarIndustryZh: '全球金融商贸中枢与人工智能前沿高地', pillarIndustryEn: 'Global Financial Hub & Frontier AI' },
            { id: 'calgary', nameZh: '卡尔加里 (Calgary · 阿省南部能源金融)', nameEn: 'Calgary (Alberta South)', provinceKey: 'alberta', isDenseCity: true, populationStr: '~1.3M', subRegionZh: '阿尔伯塔南部落基山麓能源金融总部', subRegionEn: 'Alberta South Energy Finance Capital', directionZh: '南方 (阿省南部)', directionEn: 'South (Alberta South)', element: '火', elementHeavenlyZh: '南方丙丁火兼坤土 (国家能源决策总部与大宗商品金融)', elementHeavenlyEn: 'South Bing-Ding Fire & Earth (Energy HQs & Financial Capital)', pillarIndustryZh: '国家能源决策总部、大宗商品金融与创新算力中心', pillarIndustryEn: 'National Energy HQs, Commodity Finance & Digital Tech' },
            { id: 'richmond_bc', nameZh: '列治文 (Richmond · 大温南部空港)', nameEn: 'Richmond (Metro Vancouver South)', provinceKey: 'bc', isDenseCity: false, populationStr: '~210k', subRegionZh: '大温哥华南部菲沙河南岸国际空港枢纽', subRegionEn: 'Metro Vancouver South Airport Hub', directionZh: '南方 (大温南部)', directionEn: 'South (Metro Vancouver South)', element: '火', elementHeavenlyZh: '南方丙丁火 (国际航空枢纽与亚太贸易综合集散)', elementHeavenlyEn: 'South Bing-Ding Fire (International Airport & Trade Nexus)', pillarIndustryZh: '国际航空客货运、跨太平洋进出口与高端物流', pillarIndustryEn: 'Aviation Logistics & Trans-Pacific Trade' },
            { id: 'niagara_falls', nameZh: '尼亚加拉瀑布 (Niagara Falls · 安省南界)', nameEn: 'Niagara Falls (Ontario South)', provinceKey: 'ontario', isDenseCity: false, populationStr: '~88k', subRegionZh: '大湖区文旅与清洁水能南界走廊', subRegionEn: 'Great Lakes Tourism & Clean Hydro Basin', directionZh: '南方 (安省南界)', directionEn: 'South (Ontario South Border)', element: '火', elementHeavenlyZh: '南方丙丁火 (国际文旅会展与清洁水力发电)', elementHeavenlyEn: 'South Bing-Ding Fire (Tourism & Clean Hydro Energy)', pillarIndustryZh: '国际文旅会展与清洁水力发电', pillarIndustryEn: 'International Tourism & Clean Hydroelectric Energy' }
          ]
        },
        north: {
          directionZh: '北方',
          directionEn: 'North',
          element: '水',
          elementZh: '水',
          elementEn: 'Water',
          elementHeavenlyZh: '北方壬癸水',
          elementHeavenlyEn: 'North Ren-Gui Water',
          cities: [
            { id: 'edmonton', nameZh: '埃德蒙顿 (Edmonton · 阿省北部政务枢纽)', nameEn: 'Edmonton (Alberta North)', provinceKey: 'alberta', isDenseCity: true, populationStr: '~1.0M', subRegionZh: '阿尔伯塔北部省府与北极门户走廊', subRegionEn: 'Alberta North Capital & Arctic Gateway', directionZh: '北方 (阿省北部)', directionEn: 'North (Alberta North)', element: '水', elementHeavenlyZh: '北方壬癸水 (石油化工装备与北极物资通道)', elementHeavenlyEn: 'North Ren-Gui Water (Petrochemical & Arctic Gateway)', pillarIndustryZh: '石油化工装备、算力基建中心与北极物资通道', pillarIndustryEn: 'Petrochemical Engineering, AI Compute & Arctic Logistics' },
            { id: 'markham', nameZh: '万锦 (Markham · GTA北区)', nameEn: 'Markham (GTA North)', provinceKey: 'ontario', isDenseCity: false, populationStr: '~340k', subRegionZh: '大多伦多北区约克科技走廊 (GTA North)', subRegionEn: 'GTA North Sector (York Region)', directionZh: '北方 (GTA正北)', directionEn: 'North (GTA North)', element: '水', elementHeavenlyZh: '北方壬癸水 (约克区科技重镇与智慧高地)', elementHeavenlyEn: 'North Ren-Gui Water (York Tech Corridor)', pillarIndustryZh: '加拿大高科技之都与半导体芯片研发', pillarIndustryEn: 'High-Tech Capital & Semiconductor R&D' },
            { id: 'richmond_hill', nameZh: '列治文山 (Richmond Hill · GTA北区)', nameEn: 'Richmond Hill (GTA North)', provinceKey: 'ontario', isDenseCity: false, populationStr: '~202k', subRegionZh: '大多伦多北区高地 (GTA North)', subRegionEn: 'GTA North Sector (York Region)', directionZh: '北方 (GTA正北)', directionEn: 'North (GTA North)', element: '水', elementHeavenlyZh: '北方壬癸水 (高素质专业人才与医疗科技)', elementHeavenlyEn: 'North Ren-Gui Water (Talent & Health Tech)', pillarIndustryZh: '精密医疗健康器械与高技术专业服务', pillarIndustryEn: 'Medical Devices & Professional Tech Services' },
            { id: 'vaughan', nameZh: '旺市 (Vaughan · GTA北区)', nameEn: 'Vaughan (GTA North)', provinceKey: 'ontario', isDenseCity: false, populationStr: '~323k', subRegionZh: '大多伦多北区现代物流商贸 (GTA North)', subRegionEn: 'GTA North Sector (York Region)', directionZh: '北方 (GTA正北)', directionEn: 'North (GTA North)', element: '水', elementHeavenlyZh: '北方壬癸水 (交通枢纽与新型商贸综合体)', elementHeavenlyEn: 'North Ren-Gui Water (Transit & Commerce Hub)', pillarIndustryZh: '大型现代物流中枢与先进自动化工程', pillarIndustryEn: 'Modern Logistics & Automated Engineering' },
            { id: 'laval', nameZh: '拉瓦尔 (Laval · 蒙特利尔以北)', nameEn: 'Laval (North of Montreal)', provinceKey: 'quebec', isDenseCity: false, populationStr: '~440k', subRegionZh: '大蒙特利尔北部现代生物医药园区', subRegionEn: 'Greater Montreal North Biopharma Hub', directionZh: '北方 (魁省中北)', directionEn: 'North (Quebec Central-North)', element: '水', elementHeavenlyZh: '北方壬癸水 (现代生物工程与先进医疗科技)', elementHeavenlyEn: 'North Ren-Gui Water (Biopharma & Health Tech)', pillarIndustryZh: '现代生物工程与先进医疗科技研发', pillarIndustryEn: 'Biopharmaceuticals & Health Tech' },
            { id: 'yellowknife', nameZh: '黄刀镇 (Yellowknife)', nameEn: 'Yellowknife', isDenseCity: false, populationStr: '~20k', subRegionZh: '西北地区极光文旅中心', subRegionEn: 'NWT Aurora Eco-Hub', directionZh: '北方', directionEn: 'North', element: '水', elementHeavenlyZh: '北方壬癸水 (极光生态旅游与北极钻石矿业)', elementHeavenlyEn: 'North Ren-Gui Water (Aurora Tourism & Diamonds)', pillarIndustryZh: '极光生态旅游与北极钻石矿业', pillarIndustryEn: 'Northern Aurora Eco-Tourism & Diamond Mining' },
            { id: 'whitehorse', nameZh: '怀特霍斯 (Whitehorse)', nameEn: 'Whitehorse', isDenseCity: false, populationStr: '~28k', subRegionZh: '育空地区探险矿业枢纽', subRegionEn: 'Yukon Minerals & Exploration Hub', directionZh: '西北偏北', directionEn: 'North-Northwest', element: '水', elementHeavenlyZh: '北方壬癸水 (极地自驾探险与关键矿产地质勘探)', elementHeavenlyEn: 'North Ren-Gui Water (Polar Expedition & Minerals)', pillarIndustryZh: '极地自驾探险与关键矿产地质勘探', pillarIndustryEn: 'Polar Expedition & Critical Mineral Exploration' }
          ]
        },
        east: {
          directionZh: '东方',
          directionEn: 'East',
          element: '木',
          elementZh: '木',
          elementEn: 'Wood',
          elementHeavenlyZh: '东方甲乙木',
          elementHeavenlyEn: 'East Jia-Yi Wood',
          cities: [
            { id: 'ottawa', nameZh: '渥太华 (Ottawa · 安省东部)', nameEn: 'Ottawa (Eastern Ontario)', provinceKey: 'ontario', isDenseCity: true, populationStr: '~1.0M', subRegionZh: '安大略省东部联邦首都圈 (Eastern Ontario)', subRegionEn: 'Eastern Ontario Federal Capital Region', directionZh: '东方 (安省东端)', directionEn: 'East (Eastern Ontario)', element: '木', elementHeavenlyZh: '东方甲乙木 (联邦政务中枢与国家电信高科技园)', elementHeavenlyEn: 'East Jia-Yi Wood (Federal Capital & Telecom Tech)', pillarIndustryZh: '联邦政务中枢与国家电信高科技园', pillarIndustryEn: 'Federal Governance & Telecommunications Tech' },
            { id: 'scarborough', nameZh: '世嘉堡 (Scarborough · GTA东区)', nameEn: 'Scarborough (GTA East)', provinceKey: 'ontario', isDenseCity: true, populationStr: '~632k', subRegionZh: '大多伦多东大门 (GTA East Sector)', subRegionEn: 'GTA East Sector', directionZh: '东方 (GTA正东)', directionEn: 'East (GTA East)', element: '木', elementHeavenlyZh: '东方甲乙木 (生态文教与多元商贸)', elementHeavenlyEn: 'East Jia-Yi Wood (Green Corridor & Education)', pillarIndustryZh: '高等教育与生命健康产业基地', pillarIndustryEn: 'Higher Education & Health Sciences' },
            { id: 'pickering', nameZh: '皮克灵 (Pickering · GTA东区)', nameEn: 'Pickering (GTA East)', provinceKey: 'ontario', isDenseCity: false, populationStr: '~99k', subRegionZh: '大多伦多东部杜兰区 (Durham Region)', subRegionEn: 'GTA East Durham Sector', directionZh: '东方 (GTA正东)', directionEn: 'East (GTA East)', element: '木', elementHeavenlyZh: '东方甲乙木 (清洁核能与东部湖滨生态)', elementHeavenlyEn: 'East Jia-Yi Wood (Clean Nuclear Energy & Lakefront)', pillarIndustryZh: '清洁核电能源与现代先进制造', pillarIndustryEn: 'Clean Nuclear Energy & Advanced Manufacturing' },
            { id: 'burnaby', nameZh: '本拿比 (Burnaby · 大温东部走廊)', nameEn: 'Burnaby (Metro Vancouver East)', provinceKey: 'bc', isDenseCity: false, populationStr: '~249k', subRegionZh: '大温哥华东部科技文教走廊', subRegionEn: 'Metro Vancouver East Sector', directionZh: '东方 (大温东部)', directionEn: 'East (Metro Vancouver East)', element: '木', elementHeavenlyZh: '东方甲乙木 (高科技企业总部、电影工业与大学城)', elementHeavenlyEn: 'East Jia-Yi Wood (Tech HQs & Film Industry)', pillarIndustryZh: '数字创意、高科技研发与电影后期制作基地', pillarIndustryEn: 'Digital Creative, High-Tech & Film Production' },
            { id: 'surrey', nameZh: '素里 (Surrey · 大温东南新中心)', nameEn: 'Surrey (Metro Vancouver Southeast)', provinceKey: 'bc', isDenseCity: true, populationStr: '~568k', subRegionZh: '大温哥华东南部菲沙河谷新增长极', subRegionEn: 'Metro Vancouver Southeast / Fraser Valley', directionZh: '东南 (大温东南)', directionEn: 'Southeast (Metro Vancouver Southeast)', element: '木', elementHeavenlyZh: '东南巽木 (区域现代物流枢纽与智慧绿色制造)', elementHeavenlyEn: 'Southeast Xun Wood (Logistics Hub & Clean Manufacturing)', pillarIndustryZh: '区域现代物流枢纽、智慧农业与绿色科技制造', pillarIndustryEn: 'Regional Logistics Hub, Agri-Tech & Clean Manufacturing' },
            { id: 'quebec_city', nameZh: '魁北克城 (Quebec City · 魁省东北历史首府)', nameEn: 'Quebec City (Quebec Northeast)', provinceKey: 'quebec', isDenseCity: true, populationStr: '~549k', subRegionZh: '魁省东北历史首府与下游深水港区', subRegionEn: 'Quebec Northeast Capital & Maritime Region', directionZh: '东北 (魁省东北)', directionEn: 'Northeast (Quebec Northeast)', element: '木', elementHeavenlyZh: '东北艮土生东方木 (省府政务核心与国际法文文化旅游)', elementHeavenlyEn: 'Northeast Gen Earth & East Wood (Provincial Administration & Francophone Culture)', pillarIndustryZh: '省府政务核心、国际法文文化旅游与生物医药', pillarIndustryEn: 'Provincial Administration, Francophone Culture & Biopharma' },
            { id: 'halifax', nameZh: '哈利法克斯 (Halifax · 大西洋大门)', nameEn: 'Halifax (Atlantic Gateway)', isDenseCity: false, populationStr: '~440k', subRegionZh: '大西洋沿岸深水贸易与海洋科研', subRegionEn: 'Atlantic Deepwater Shipping Hub', directionZh: '东方 (大西洋区)', directionEn: 'East (Atlantic Canada)', element: '木', elementHeavenlyZh: '东方甲乙木 (深水国际航运、海洋科学研究与国防造船)', elementHeavenlyEn: 'East Jia-Yi Wood (Ocean Science & Shipping)', pillarIndustryZh: '深水国际航运、海洋科学研究与国防造船', pillarIndustryEn: 'Deep-Water Shipping, Ocean Science & Naval Shipbuilding' },
            { id: 'st_johns', nameZh: '圣约翰斯 (St. John\'s)', nameEn: 'St. John\'s', isDenseCity: false, populationStr: '~110k', subRegionZh: '北大西洋离岸油气与渔业基准', subRegionEn: 'North Atlantic Offshore Energy Hub', directionZh: '极东', directionEn: 'Far East', element: '木', elementHeavenlyZh: '东方甲乙木 (离岸深海油气开采与北大西洋远洋渔业)', elementHeavenlyEn: 'East Wood (Offshore Energy & Fisheries)', pillarIndustryZh: '离岸深海油气开采与北大西洋远洋渔业', pillarIndustryEn: 'Offshore Energy & North Atlantic Fisheries' }
          ]
        },
        west: {
          directionZh: '西方',
          directionEn: 'West',
          element: '金',
          elementZh: '金',
          elementEn: 'Metal',
          elementHeavenlyZh: '西方庚辛金',
          elementHeavenlyEn: 'West Geng-Xin Metal',
          cities: [
            { id: 'mississauga', nameZh: '密西沙加 (Mississauga · GTA西区)', nameEn: 'Mississauga (GTA West)', provinceKey: 'ontario', isDenseCity: true, populationStr: '~718k', subRegionZh: '大多伦多西区门户 (GTA West / Peel Region)', subRegionEn: 'GTA West Sector (Peel Region)', directionZh: '西方 (GTA正西)', directionEn: 'West (GTA West)', element: '金', elementHeavenlyZh: '西方庚辛金 (总部经济与国际空港物流)', elementHeavenlyEn: 'West Geng-Xin Metal (Corporate HQs & Air Logistics)', pillarIndustryZh: '跨国企业总部集群与国际航空物流', pillarIndustryEn: 'Corporate HQs & Global Air Cargo Logistics' },
            { id: 'brampton', nameZh: '宾顿 (Brampton · GTA西北区)', nameEn: 'Brampton (GTA Northwest)', provinceKey: 'ontario', isDenseCity: true, populationStr: '~656k', subRegionZh: '大多伦多西北制造走廊 (GTA Northwest / Peel Region)', subRegionEn: 'GTA Northwest Sector (Peel Region)', directionZh: '西北 (GTA西北)', directionEn: 'Northwest (GTA Northwest)', element: '金', elementHeavenlyZh: '西北乾金 (先进智能制造与现代供应链走廊)', elementHeavenlyEn: 'Northwest Qian Metal (Advanced Manufacturing & Supply Chains)', pillarIndustryZh: '先进智能制造、生命科学与现代物流网', pillarIndustryEn: 'Advanced Manufacturing & Supply Chain Logistics' },
            { id: 'vancouver', nameZh: '温哥华 (Vancouver · 卑诗西南太平洋门户)', nameEn: 'Vancouver (BC Southwest Gateway)', provinceKey: 'bc', isDenseCity: true, populationStr: '~662k', subRegionZh: '大温哥华核心半岛与国际深水港', subRegionEn: 'Metro Vancouver Core Peninsula & Gateway Port', directionZh: '西方 (卑诗西南)', directionEn: 'West (BC Southwest)', element: '金', elementHeavenlyZh: '西方庚辛金 (亚太国际贸易大港与跨国高科技总部)', elementHeavenlyEn: 'West Geng-Xin Metal (Pacific Gateway & Tech Hub)', pillarIndustryZh: '亚太国际贸易大港、跨国高科技总部与数字视觉影视', pillarIndustryEn: 'Asia-Pacific Gateway Port, Tech Hub & Visual Effects' },
            { id: 'kitchener', nameZh: '滑铁卢/基奇纳 (Kitchener-Waterloo · 安省中西)', nameEn: 'Kitchener-Waterloo (Ontario West-Central)', provinceKey: 'ontario', isDenseCity: false, populationStr: '~256k', subRegionZh: '安大略省中西部高科技三角洲', subRegionEn: 'Ontario West-Central Tech Triangle', directionZh: '西偏中 (安省中西)', directionEn: 'West-Central (Ontario West-Central)', element: '金', elementHeavenlyZh: '西方庚辛金 (世界级量子计算与前沿软件孵化高地)', elementHeavenlyEn: 'West Geng-Xin Metal (Quantum Computing & Tech Hub)', pillarIndustryZh: '世界级前沿量子计算与软件创新孵化高地', pillarIndustryEn: 'Quantum Computing & Software Tech' },
            { id: 'hamilton', nameZh: '汉密尔顿 (Hamilton · 安省西南)', nameEn: 'Hamilton (Golden Horseshoe West)', provinceKey: 'ontario', isDenseCity: true, populationStr: '~569k', subRegionZh: '金马蹄西南重工深水港区 (Golden Horseshoe West)', subRegionEn: 'Golden Horseshoe West Sector', directionZh: '西南 (安省西南)', directionEn: 'Southwest (Ontario Southwest)', element: '土', elementHeavenlyZh: '西南坤土兼金 (特种先进钢铁材料与大湖深水运力)', elementHeavenlyEn: 'Southwest Kun Earth & Metal (Advanced Steel & Deepwater Port)', pillarIndustryZh: '特种先进钢铁材料与健康医疗生命科学', pillarIndustryEn: 'Advanced Materials & Health Sciences' },
            { id: 'windsor', nameZh: '温莎 (Windsor · 安省最西南)', nameEn: 'Windsor (Ontario Far Southwest)', provinceKey: 'ontario', isDenseCity: false, populationStr: '~230k', subRegionZh: '安大略省最西南北美跨境要道', subRegionEn: 'Ontario Far Southwest Cross-Border Gateway', directionZh: '西南 (安省最西南)', directionEn: 'Southwest (Ontario Far Southwest)', element: '土', elementHeavenlyZh: '西南坤土 (汽车工程自动化制造与美加跨境贸易)', elementHeavenlyEn: 'Southwest Kun Earth (Automotive Engineering & Cross-Border Logistics)', pillarIndustryZh: '汽车工程自动化制造与美加跨境贸易', pillarIndustryEn: 'Automotive Engineering & Cross-Border Logistics' },
            { id: 'victoria', nameZh: '维多利亚 (Victoria · 卑诗西南温哥华岛)', nameEn: 'Victoria (Vancouver Island)', provinceKey: 'bc', isDenseCity: false, populationStr: '~92k', subRegionZh: '温哥华岛南端卑诗省府行政中枢', subRegionEn: 'Vancouver Island Provincial Capital Hub', directionZh: '西南 (温哥华岛)', directionEn: 'Southwest (Vancouver Island)', element: '土', elementHeavenlyZh: '西南坤土 (省府行政中枢、海洋高科技与生态文旅)', elementHeavenlyEn: 'Southwest Kun Earth (Provincial Governance & Marine Tech)', pillarIndustryZh: '卑诗省府行政中枢、海洋技术与生态休闲文旅', pillarIndustryEn: 'Provincial Governance, Marine Tech & Eco-Tourism' },
            { id: 'montreal', nameZh: '蒙特利尔 (Montreal · 魁省西南核心岛)', nameEn: 'Montreal (Quebec Southwest Island)', provinceKey: 'quebec', isDenseCity: true, populationStr: '~1.76M', subRegionZh: '大蒙特利尔大都市圈核心岛 (Greater Montreal)', subRegionEn: 'Greater Montreal Island Hub', directionZh: '西南 (魁省西南)', directionEn: 'Southwest (Quebec Southwest)', element: '水', elementHeavenlyZh: '北方水与西方金交融 (全球人工智能科研与顶尖航空航天)', elementHeavenlyEn: 'Water-Metal Synthesis (Global AI & Aerospace)', pillarIndustryZh: '全球人工智能科研中心、顶尖航空航天与数字媒体创意', pillarIndustryEn: 'Global AI Research, Aerospace & Digital Media' }
          ]
        }
      }
    }
  };

  /**
   * Evaluates user's current city based on national geographic coordinates,
   * five-element generation/overcoming dynamics, and personal natal Day Master / Yong Shen.
   */
  static evaluateResidenceCity(countryKey, cityKey, bazi, customCityName) {
    const db = this.GEO_CITIES_DATABASE;
    const country = (db && db[countryKey]) ? db[countryKey] : (db ? db.China : null);
    if (!country) return null;

    let targetRegion = null;
    let targetCity = null;

    if (cityKey === 'custom') {
      const isZh = /[\u4e00-\u9fa5]/.test(customCityName || '');
      const trimmed = (customCityName || '').trim();
      const lower = trimmed.toLowerCase();

      // Intelligent fuzzy matching against known cities in country
      let matchedReg = null;
      let matchedCity = null;
      if (lower) {
        const regionKeys = ['central', 'south', 'north', 'east', 'west'];
        for (let i = 0; i < regionKeys.length; i++) {
          const reg = country.regions[regionKeys[i]];
          if (reg && reg.cities) {
            const found = reg.cities.find(c =>
              c.id.toLowerCase() === lower ||
              c.nameEn.toLowerCase() === lower ||
              c.nameZh.toLowerCase().includes(lower)
            );
            if (found) {
              matchedReg = reg;
              matchedCity = found;
              break;
            }
          }
        }
      }

      if (matchedReg && matchedCity) {
        targetRegion = matchedReg;
        targetCity = {
          id: 'custom',
          nameZh: isZh ? trimmed : (matchedCity.nameZh || trimmed),
          nameEn: isZh ? (matchedCity.nameEn || 'Custom City') : (trimmed || matchedCity.nameEn)
        };
      } else {
        targetRegion = country.regions.central || Object.values(country.regions)[0];
        targetCity = {
          id: 'custom',
          nameZh: trimmed || '自定义城市',
          nameEn: isZh ? 'Custom City' : (trimmed || 'Custom City')
        };
      }
    } else {
      const regionKeys = ['central', 'south', 'north', 'east', 'west'];
      for (let i = 0; i < regionKeys.length; i++) {
        const reg = country.regions[regionKeys[i]];
        if (reg && reg.cities) {
          const found = reg.cities.find(c => c.id === cityKey);
          if (found) {
            targetRegion = reg;
            targetCity = found;
            break;
          }
        }
      }
    }

    if (!targetRegion || !targetCity) {
      targetRegion = country.regions.central || Object.values(country.regions)[0];
      targetCity = (targetRegion && targetRegion.cities && targetRegion.cities[0]) || {
        id: 'default',
        nameZh: '默认城市',
        nameEn: 'Default City'
      };
    }

    const dm = (bazi && bazi.dayMaster) || '甲';
    const dmEl = (bazi && bazi.dayMasterElement) || '木';

    const stemShortEnMap = {
      '甲': 'Jia', '乙': 'Yi', '丙': 'Bing', '丁': 'Ding', '戊': 'Wu',
      '己': 'Ji', '庚': 'Geng', '辛': 'Xin', '壬': 'Ren', '癸': 'Gui'
    };
    const elEnMap = {
      '木': 'Wood', '火': 'Fire', '土': 'Earth', '金': 'Metal', '水': 'Water'
    };
    const elNames = {
      '木': { zh: '木', en: 'Wood' },
      '火': { zh: '火', en: 'Fire' },
      '土': { zh: '土', en: 'Earth' },
      '金': { zh: '金', en: 'Metal' },
      '水': { zh: '水', en: 'Water' }
    };

    const dmShortEn = stemShortEnMap[dm] || 'Jia';
    const dmElEn = elEnMap[dmEl] || 'Wood';
    const dmEn = `${dmShortEn} (${dmElEn})`;
    const dmZh = `${dm} (${dmEl})`;

    const cEl = targetCity.element || targetRegion.element;
    const cElEn = targetCity.elementEn || elEnMap[cEl] || targetRegion.elementEn;
    const cElZh = targetCity.elementZh || (elNames[cEl] && elNames[cEl].zh) || targetRegion.elementZh;
    const cDirZh = targetCity.directionZh || targetRegion.directionZh;
    const cDirEn = targetCity.directionEn || targetRegion.directionEn;
    const cElemHeavenlyZh = targetCity.elementHeavenlyZh || targetRegion.elementHeavenlyZh;
    const cElemHeavenlyEn = targetCity.elementHeavenlyEn || targetRegion.elementHeavenlyEn;
    const subRegionZh = targetCity.subRegionZh || '';
    const subRegionEn = targetCity.subRegionEn || '';

    const generates = { '木': '火', '火': '土', '土': '金', '金': '水', '水': '木' };
    const generatedBy = { '木': '水', '火': '木', '土': '火', '金': '土', '水': '金' };
    const wealthMap = { '木': '土', '火': '金', '土': '水', '金': '木', '水': '火' };
    const officerMap = { '木': '金', '火': '水', '土': '木', '金': '火', '水': '土' };

    const ziping = (bazi && bazi.zipingScore) || (typeof BaZiEngine !== 'undefined' && bazi ? BaZiEngine.calculateZipingScore(bazi) : null);
    
    // Five-Element Classification into Favorable (喜用神), Unfavorable (忌仇神), and Neutral (闲神)
    let favorableElements = [];
    let unfavorableElements = [];
    let neutralElements = [];

    const isExtremeStrong = ziping && ziping.categoryKey === 'extreme_strong';
    const isWeak = (ziping && (ziping.categoryKey === 'moderate_weak' || ziping.categoryKey === 'extreme_weak')) ||
                   (ziping ? (ziping.totalScore <= 50 || ziping.percentage < 48) : false);

    if (isExtremeStrong) {
      // 专旺格：顺势相生，首重食伤泄秀疏浚（把能量梳理出去，大坝开闸灌溉），次喜同气顺势；官杀逆专旺为重忌，印星过盛为塞滞
      favorableElements = [generates[dmEl], dmEl];
      unfavorableElements = [officerMap[dmEl]];
      neutralElements = [generatedBy[dmEl], wealthMap[dmEl]];
    } else if (isWeak) {
      // 身弱格：喜印星生身、比劫帮身；忌官杀克身、食伤泄秀；财星耗身量力稳健为闲神
      favorableElements = [generatedBy[dmEl], dmEl];
      unfavorableElements = [officerMap[dmEl], generates[dmEl]];
      neutralElements = [wealthMap[dmEl]];
    } else {
      // 身旺/普通格：喜食伤泄秀疏导、财星耗散生发、官杀制身；忌比劫争财
      favorableElements = [generates[dmEl], wealthMap[dmEl], officerMap[dmEl]];
      unfavorableElements = [dmEl];
      neutralElements = [generatedBy[dmEl]];
    }

    const primaryFavEl = favorableElements[0] || '木';

    let relType = '';
    let relationZh = '';
    let relationEn = '';

    if (cEl === generatedBy[dmEl]) {
      relType = 'resource';
      relationZh = `生我者为正印偏印（${cEl}生${dmEl}） · 地缘生身庇护`;
      relationEn = `Generates Day Master (${cElEn} generates ${dmElEn} - Resource Star) · Nurturing Qi`;
    } else if (cEl === dmEl) {
      relType = 'peer';
      relationZh = `同我者为比肩劫财（${cEl}同${dmEl}） · 同气相求帮身`;
      relationEn = `Matches Day Master (${cElEn} matches ${dmElEn} - Peer Star) · Reinforcing Foundation`;
    } else if (cEl === generates[dmEl]) {
      relType = 'output';
      relationZh = `我生者为食伤（${dmEl}生${cEl}） · 才华秀气发越`;
      relationEn = `Generated by Day Master (${dmElEn} generates ${cElEn} - Output Star) · Creative Flourishing`;
    } else if (cEl === wealthMap[dmEl]) {
      relType = 'wealth';
      relationZh = `我克者为正偏财（${dmEl}克${cEl}） · 商业财富机遇`;
      relationEn = `Conquered by Day Master (${dmElEn} conquers ${cElEn} - Wealth Star) · Financial Enterprise`;
    } else {
      relType = 'officer';
      relationZh = `克我者为正官七杀（${cEl}克${dmEl}） · 规约磨砺气场`;
      relationEn = `Overcomes Day Master (${cElEn} overcomes ${dmElEn} - Officer Star) · Disciplined Pressure`;
    }

    let gradeZh = '';
    let gradeEn = '';
    let badgeType = 'emerald';
    let score = 80;

    if (favorableElements.includes(cEl)) {
      gradeZh = '吉 / 大利';
      gradeEn = 'Auspicious / Highly Favorable';
      badgeType = 'emerald';
      if (isWeak && cEl === generatedBy[dmEl]) score = 96;
      else if (cEl === generates[dmEl]) score = 96;
      else if (cEl === wealthMap[dmEl]) score = 93;
      else if (cEl === officerMap[dmEl]) score = 90;
      else if (cEl === generatedBy[dmEl]) score = 92;
      else score = 91;
    } else if (unfavorableElements.includes(cEl)) {
      gradeZh = '慎 / 气机对冲';
      gradeEn = 'Caution / Energetic Clash';
      badgeType = 'rose';
      if (cEl === officerMap[dmEl]) score = 58;
      else if (cEl === generates[dmEl]) score = 62;
      else if (cEl === dmEl) score = 66;
      else score = 64;
    } else {
      gradeZh = '平 / 平和稳健';
      gradeEn = 'Neutral / Steady & Harmonious';
      badgeType = 'sky';
      score = 78;
    }

    const summaryZh = `城市【${targetCity.nameZh}】位列【${country.countryNameZh}·${cDirZh}】，承载【${cElemHeavenlyZh}】。日主五行生克属【${relationZh}】，地缘气数定调为【${gradeZh}】（契合度：${score}分）。`;
    const summaryEn = `The city of ${targetCity.nameEn} is in the ${cDirEn} region of ${country.countryNameEn}, vibrating with [${cElemHeavenlyEn}]. Terrestrial dynamic is [${relationEn}], evaluated as [${gradeEn}] (Resonance Score: ${score}/100).`;

    const analysisZh = `您当前身处【${country.countryNameZh}·${targetCity.nameZh}】，该城市坐落于国家【${cDirZh}】，承载【${cElemHeavenlyZh}】之气运。本命日主为【${dmZh}】，地缘五行与日主呈【${relationZh}】。综合地缘吉凶定调为【${gradeZh}】（契合度：${score}分）。${gradeZh === '吉 / 大利' ? '此地五行气脉与本命喜用神同频共振，大展经纶、生旺赋能，利于事业开拓与能量沉淀。' : gradeZh === '慎 / 气机对冲' ? '此地五行气脉与本命气场存在对冲或泄耗，日常宜注重身心调摄，并配合专属空间风水调理化克为生、调和气场。' : '此地五行气机平和稳健，无剧烈刑冲亦无偏枯滋长，宜深耕主业、稳健蓄势。'}`;
    const analysisEn = `You are currently residing in ${targetCity.nameEn}, located in the ${cDirEn} sector of ${country.countryNameEn}, which carries the natural energy of [${cElemHeavenlyEn}]. With your natal Day Master anchored in [${dmEn}], the terrestrial interaction reflects [${relationEn}]. Resonance is rated as [${gradeEn}] (Compatibility Score: ${score}/100). ${gradeZh === '吉 / 大利' ? 'This terrestrial frequency harmonizes seamlessly with your favorable Yong Shen, unlocking expansive vitality and strategic momentum.' : gradeZh === '慎 / 气机对冲' ? 'This terrestrial frequency creates energetic friction or depletion against your natal balance; apply our targeted spatial remedies to convert regulatory tension into authoritative poise.' : 'This terrestrial frequency offers calm, steady equilibrium without destabilizing clashes, favoring sustained cultivation and gradual compound growth.'}`;

    const talismanMap = {
      '木': { zh: '常青阔叶绿植（发财树、琴叶榕）或沉香木雕', en: 'Lush broadleaf flora (Money Tree, Fiddle-leaf Fig) or natural agarwood carving' },
      '火': { zh: '喜马拉雅天然红盐灯、紫水晶洞或朱砂镇宅印', en: 'Himalayan red salt lamp, vibrant amethyst geode, or cinnabar talisman seal' },
      '土': { zh: '天然黄水晶球、泰山石敢当或陶制四方鼎', en: 'Natural citrine sphere, Taishan stone anchor, or ceramic quadrilateral vessel' },
      '金': { zh: '纯铜六帝铜钱、六字真言铜铃或纯铜聚宝盆', en: 'Handcrafted bronze coins, harmonic metal chimes, or solid brass wealth chalice' },
      '水': { zh: '室内循环活水流水景、黑曜石七星阵或墨晶球', en: 'Indoor circulating water fountain, black obsidian sphere, or deep navy ceramic vessel' }
    };

    const favDirZh = (primaryFavEl === '木') ? '正东方或东南方' :
                     (primaryFavEl === '火') ? '正南方' :
                     (primaryFavEl === '土') ? '东北方或西南方' :
                     (primaryFavEl === '金') ? '正西方或西北方' : '正北方';
    const favDirEn = (primaryFavEl === '木') ? 'East or Southeast' :
                     (primaryFavEl === '火') ? 'South' :
                     (primaryFavEl === '土') ? 'Northeast or Southwest' :
                     (primaryFavEl === '金') ? 'West or Northwest' : 'North';

    const remedies = [];
    if (gradeZh === '慎 / 气机对冲') {
      // 1. Palette Remedy: Introduce bridging or shielding elements
      if (relType === 'officer') {
        const bridgeEl = generatedBy[dmEl];
        const bName = elNames[bridgeEl] ? elNames[bridgeEl].zh : '印星';
        remedies.push({
          titleZh: '空间色彩：通关化煞为权',
          titleEn: 'Spatial Palette: Conflict Transformation',
          descZh: `在空间中加入通关五行【${bName}】色系（以印星为桥梁，如金克木用水润通关、木克土用火温通关），将官杀压力化解为晋升权柄与定力。`,
          descEn: `Introduce bridging Resource hues to convert regulatory environmental friction into authoritative leadership poise and impenetrable resilience.`
        });
      } else if (relType === 'output') {
        const resEl = generatedBy[dmEl];
        const rName = elNames[resEl] ? elNames[resEl].zh : '印星';
        remedies.push({
          titleZh: '空间色彩：培元固本生身',
          titleEn: 'Spatial Palette: Regenerative Fortification',
          descZh: `空间宜增设【${rName}】系温润色系（暖米色、柔和原木或明亮光感），强化印星生身护持，防止地缘秀气过度泄耗精力。`,
          descEn: `Deploy warm Resource tones to fortify the Day Master against excessive environmental expenditure, preserving central reserve vitality.`
        });
      } else {
        remedies.push({
          titleZh: '空间色彩：清雅疏导化争',
          titleEn: 'Spatial Palette: Dynamic Decompression',
          descZh: `空间采用通透清爽色调，办公会客区域布局留白，疏解同气竞争压力，转化为协同共创活力。`,
          descEn: `Deploy crisp, airy palettes with generous spatial margins in study and meeting areas to transmute competitive rivalry into productive synergy.`
        });
      }

      // 2. Metaphysical Anchor: Place bridging talisman or primary favorable talisman
      if (relType === 'officer') {
        const bridgeEl = generatedBy[dmEl];
        const bInfo = talismanMap[bridgeEl] || talismanMap['土'];
        remedies.push({
          titleZh: '器物生机：通关化气定鼎',
          titleEn: 'Metaphysical Anchors: Terrestrial Bridging Anchor',
          descZh: `在住宅核心太极区或书桌左侧青龙位安置【${bInfo.zh}】，引动五行通关之气（化煞为生），转逆境为护佑。`,
          descEn: `Position [${bInfo.en}] at your central home Taiji sector or left Azure Dragon desk corner to establish a bridging conduit, converting tension into cosmic shielding.`
        });
      } else {
        const tInfo = talismanMap[primaryFavEl] || talismanMap['土'];
        remedies.push({
          titleZh: '器物生机：用神护持辟煞',
          titleEn: 'Metaphysical Anchors: Yong Shen Shielding Anchor',
          descZh: `在住宅核心太极区或书桌左侧青龙位安置【${tInfo.zh}】，补充本命第一用神生旺之气，稳固气场结界。`,
          descEn: `Position [${tInfo.en}] at your central home Taiji sector or left Azure Dragon desk corner to amplify your primary favorable element, securing cosmic equilibrium.`
        });
      }

      // 3. Orientation: Face favorable direction
      remedies.push({
        titleZh: '坐向定向：顺承吉方纳祥',
        titleEn: 'Directional Orientation: Harnessing Favorable Qi',
        descZh: `办公椅背宜坚实靠墙，坐向或卧房床头优先朝向【${favDirZh}】，汲取天地用神生发之气，调和地缘克耗，工作心流深沉，睡眠安稳甘美。`,
        descEn: `Anchor your executive chair against a solid wall, orienting your desk or headboard toward [${favDirEn}] to capture peak favorable Qi, counteracting terrestrial friction and restoring deep restorative vitality.`
      });
    } else if (gradeZh === '吉 / 大利') {
      remedies.push({
        titleZh: '空间色彩：引动相生共振',
        titleEn: 'Spatial Palette: Nurturing Resonance',
        descZh: `室内主色调宜采用与地缘及喜用神呼应的温润色系（辅以${dmEl}系本命色彩），如暖米色、原木色或柔和灯光，形成‘天生我、地养我’的深层安宁场域。`,
        descEn: `Incorporate harmonious hues matching your favorable terrestrial frequency (accented with ${dmElEn} tones) to establish a deeply regenerative sanctuary.`
      });
      const tInfo = talismanMap[cEl] || talismanMap[primaryFavEl] || talismanMap['土'];
      remedies.push({
        titleZh: '器物生机：地缘太极定鼎',
        titleEn: 'Metaphysical Anchors: Terrestrial Taiji Alignment',
        descZh: `在住宅核心太极区或书桌左手青龙位安置【${tInfo.zh}】，化合地缘气脉，形成坚不可摧的风水护持结界。`,
        descEn: `Position [${tInfo.en}] at your central home Taiji sector or left Azure Dragon desk corner to harmonize terrestrial energy and secure cosmic shielding.`
      });
      remedies.push({
        titleZh: '坐向定向：顺承地气纳祥',
        titleEn: 'Directional Orientation: Harnessing Terrestrial Qi',
        descZh: `办公椅背宜坚实靠墙，坐向或卧房床头优先朝向【${favDirZh}】，汲取天地用神生发之气，工作心流深沉，睡眠安稳甘美。`,
        descEn: `Anchor your executive chair against a solid wall, facing or orienting your headboard toward [${favDirEn}] to capture peak favorable Qi, maximizing strategic focus and restorative sleep.`
      });
    } else {
      // Neutral 平和稳健
      remedies.push({
        titleZh: '空间色彩：平正温和固本',
        titleEn: 'Spatial Palette: Grounding Equilibrium',
        descZh: `空间多采用稳重典雅的自然材质与纯正色泽，办公及会客区多用对称格局，巩固平稳安定的生活节奏与长远定力。`,
        descEn: `Deploy symmetrical architectural lines and balanced organic textures in reception and study zones to anchor sustained stability and focused compound momentum.`
      });
      const tInfo = talismanMap['土'];
      remedies.push({
        titleZh: '器物生机：太极沉香固基',
        titleEn: 'Metaphysical Anchors: Taiji Foundation Anchor',
        descZh: `在住宅核心太极区或书房安置【${tInfo.zh}】，稳固中宫地脉，守中致和、厚积薄发。`,
        descEn: `Position [${tInfo.en}] at your central home Taiji sector or study to stabilize spatial foundations, fostering steady patience and long-term accumulation.`
      });
      remedies.push({
        titleZh: '坐向定向：顺承吉方纳祥',
        titleEn: 'Directional Orientation: Harnessing Favorable Qi',
        descZh: `办公椅背宜坚实靠墙，坐向或卧房床头优先朝向【${favDirZh}】，汲取天地用神生发之气，工作心流深沉，睡眠安稳甘美。`,
        descEn: `Anchor your executive chair against a solid wall, orienting your desk or headboard toward [${favDirEn}] to capture peak favorable Qi, maximizing strategic focus and restorative sleep.`
      });
    }

    const prov = (country.provinces && targetCity.provinceKey && country.provinces[targetCity.provinceKey])
      ? country.provinces[targetCity.provinceKey]
      : null;
    const provinceZh = prov ? prov.nameZh : (targetCity.provinceZh || '');
    const provinceEn = prov ? prov.nameEn : (targetCity.provinceEn || '');
    const isDenseCity = (targetCity.isDenseCity === true);
    const populationStr = targetCity.populationStr || (isDenseCity ? '>500k' : '');
    const pillarIndustriesZh = targetCity.pillarIndustryZh || (prov ? prov.pillarIndustriesZh : '');
    const pillarIndustriesEn = targetCity.pillarIndustryEn || (prov ? prov.pillarIndustriesEn : '');

    return {
      countryKey,
      countryNameZh: country.countryNameZh,
      countryNameEn: country.countryNameEn,
      cityKey: targetCity.id,
      cityNameZh: targetCity.nameZh,
      cityNameEn: targetCity.nameEn,
      provinceZh,
      provinceEn,
      subRegionZh,
      subRegionEn,
      isDenseCity,
      populationStr,
      pillarIndustriesZh,
      pillarIndustriesEn,
      directionZh: cDirZh,
      directionEn: cDirEn,
      elementZh: cElZh,
      elementEn: cElEn,
      elementHeavenlyZh: cElemHeavenlyZh,
      elementHeavenlyEn: cElemHeavenlyEn,
      dayMaster: dm,
      dayMasterEn: dmShortEn,
      dayMasterElement: dmEl,
      dayMasterElementEn: dmElEn,
      cEl,
      cElEn,
      relationZh,
      relationEn,
      relType,
      gradeZh,
      gradeEn,
      score,
      badgeType,
      summaryZh,
      summaryEn,
      analysisZh,
      analysisEn,
      remedies
    };
  }

  /**
   * Renders the current residence city evaluation card in responsive oriental Tailwind UI.
   * Completely bilingual with 100% zero residual Chinese in English mode.
   */
  static renderCityEvaluationCard(ev, isEn) {
    if (!ev) return '';

    const db = this.GEO_CITIES_DATABASE;
    const country = (db && db[ev.countryKey]) ? db[ev.countryKey] : (db ? db.China : null);

    const countryDisplay = isEn ? ev.countryNameEn : ev.countryNameZh;
    const cityDisplay = isEn ? ev.cityNameEn : ev.cityNameZh;
    const directionDisplay = isEn ? ev.directionEn : ev.directionZh;
    const elementDisplay = isEn ? ev.elementHeavenlyEn : ev.elementHeavenlyZh;
    const relationDisplay = isEn ? ev.relationEn : ev.relationZh;
    const gradeDisplay = isEn ? ev.gradeEn : ev.gradeZh;
    const dmDisplay = isEn ? (ev.dayMasterEn || 'Day Master') : ev.dayMaster;

    let badgeColorClass = 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40';
    if (ev.badgeType === 'rose') {
      badgeColorClass = 'bg-rose-500/20 text-rose-300 border-rose-500/40';
    } else if (ev.badgeType === 'amber') {
      badgeColorClass = 'bg-amber-500/20 text-amber-300 border-amber-500/40';
    } else if (ev.badgeType === 'sky') {
      badgeColorClass = 'bg-sky-500/20 text-sky-300 border-sky-500/40';
    }

    const countries = [
      { key: 'China', labelZh: '中国 (China)', labelEn: 'China (CN)' },
      { key: 'UK', labelZh: '英国 (UK)', labelEn: 'United Kingdom (UK)' },
      { key: 'USA', labelZh: '美国 (USA)', labelEn: 'United States (USA)' },
      { key: 'Canada', labelZh: '加拿大 (Canada)', labelEn: 'Canada' }
    ];
    const countryOptionsHtml = countries.map(c => `
      <option value="${c.key}" ${ev.countryKey === c.key ? 'selected' : ''}>${isEn ? c.labelEn : c.labelZh}</option>
    `).join('');

    let cityOptionsHtml = '';
    if (country && country.regions) {
      Object.keys(country.regions).forEach(regKey => {
        const reg = country.regions[regKey];
        const groupLabel = isEn ? `${reg.directionEn} (${reg.elementHeavenlyEn})` : `${reg.directionZh} (${reg.elementHeavenlyZh})`;
        const opts = (reg.cities || []).map(c => {
          const denseTag = c.isDenseCity ? (isEn ? ' [>500k]' : ' [>50万]') : '';
          const provTag = (c.provinceKey && country.provinces && country.provinces[c.provinceKey])
            ? ` · ${isEn ? country.provinces[c.provinceKey].nameEn : country.provinces[c.provinceKey].nameZh.split(' ')[0]}`
            : '';
          const cDir = isEn ? (c.directionEn || reg.directionEn) : (c.directionZh || reg.directionZh);
          const cElem = isEn ? (c.elementEn || reg.elementEn) : (c.elementHeavenlyZh || reg.elementHeavenlyZh);
          return `<option value="${c.id}" ${ev.cityKey === c.id ? 'selected' : ''}>${isEn ? `${c.nameEn}${provTag}${denseTag} · ${cDir} (${cElem})` : `${c.nameZh}${provTag}${denseTag} · ${cElem}`}</option>`;
        }).join('');
        cityOptionsHtml += `<optgroup label="${groupLabel}">${opts}</optgroup>`;
      });
    }
    cityOptionsHtml += `<option value="custom" ${ev.cityKey === 'custom' ? 'selected' : ''}>${isEn ? 'Other / Custom City...' : '其他 / 自定义城市...'}</option>`;

    const remediesHtml = (ev.remedies || []).map((r, idx) => `
      <div class="p-3.5 rounded-xl bg-black/40 border border-gray-800 space-y-1.5 flex flex-col justify-between">
        <div class="flex items-center space-x-2">
          <span class="text-amber-400 text-sm">${['🏺', '🌿', '🧭'][idx] || '✨'}</span>
          <h4 class="text-xs font-bold font-serif-sc text-amber-200">${isEn ? r.titleEn : r.titleZh}</h4>
        </div>
        <p class="text-[11px] text-gray-300 leading-relaxed">${isEn ? r.descEn : r.descZh}</p>
      </div>
    `).join('');

    const customInputPlaceholder = isEn ? 'Enter custom city name' : '输入自定义城市名称';
    const customVal = (ev.cityNameEn && ev.cityNameEn !== 'Custom City' && isEn) ? ev.cityNameEn : ((ev.cityNameZh && ev.cityNameZh !== '自定义城市' && !isEn) ? ev.cityNameZh : '');

    return `
      <div id="fengshuiCityEvaluationCard" class="bg-card p-5 sm:p-6 rounded-2xl border border-border-color shadow-xl mb-6 space-y-4">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gray-800 pb-3">
          <div class="space-y-1">
            <div class="flex items-center gap-2">
              <span class="chinese-seal text-xs py-0.5 border-amber-500 text-amber-300">${isEn ? "Geographic Qi" : "地缘气数"}</span>
              <h2 class="text-base sm:text-lg font-bold font-serif-sc text-amber-300 flex items-center gap-2">
                <span>🗺️</span>
                <span>${isEn ? "Current Residence City Geographic Five-Element Feng Shui Evaluation" : "当前居住城市地缘五行气数评估"}</span>
              </h2>
            </div>
            <p class="text-xs text-gray-400 leading-relaxed">${isEn ? "Terrestrial Five-Element evaluation based on national geographic coordinates and personal natal Yong Shen dynamics" : "基于国家地理五方气机（中央戊己土、南方丙丁火、北方壬癸水、东方甲乙木、西方庚辛金）与本命日主喜用神生克制化推演"}</p>
          </div>
          <div class="flex items-center gap-2 self-start sm:self-center flex-wrap">
            <span class="text-xs text-gray-400 font-mono">${isEn ? "Switch City:" : "切换测试城市："}</span>
            <select id="fsCardCountrySelect" class="fs-card-country-select bg-black/50 border border-gray-700 rounded-lg px-2 py-1 text-xs text-gray-100 focus:outline-none focus:border-amber-500">
              ${countryOptionsHtml}
            </select>
            <select id="fsCardCitySelect" class="fs-card-city-select bg-black/50 border border-gray-700 rounded-lg px-2 py-1 text-xs text-gray-100 focus:outline-none focus:border-amber-500">
              ${cityOptionsHtml}
            </select>
            <input type="text" id="fsCardCustomCityInput" class="fs-card-custom-city-input bg-black/50 border border-gray-700 rounded-lg px-2 py-1 text-xs text-gray-100 focus:outline-none focus:border-amber-500 w-32 ${ev.cityKey === 'custom' ? '' : 'hidden'}" placeholder="${customInputPlaceholder}" value="${customVal}">
          </div>
        </div>

        ${(ev.provinceZh || ev.subRegionZh) ? `
          <div class="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 flex flex-wrap items-center justify-between gap-2.5 text-xs">
            <div class="flex items-center gap-2 flex-wrap">
              <span class="chinese-seal text-[10px] py-0.5 border-amber-500/60 text-amber-300 font-mono">${isEn ? 'ZONE / SECTOR' : '地缘区位'}</span>
              <span class="font-bold text-amber-200 font-serif-sc">${isEn ? (ev.subRegionEn || ev.provinceEn) : (ev.subRegionZh || ev.provinceZh)}</span>
              ${ev.provinceZh && ev.subRegionZh ? `<span class="text-xs text-amber-400/80 font-mono">(${isEn ? ev.provinceEn : ev.provinceZh})</span>` : ''}
              ${ev.isDenseCity ? `<span class="px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/40 text-[10px] font-bold font-mono">${isEn ? `Dense Metropolis (${ev.populationStr || '>500k'})` : `高密度核心都会 (${ev.populationStr || '>50万'})`}</span>` : ''}
            </div>
            ${ev.pillarIndustriesZh ? `
              <div class="text-gray-300 text-[11px] leading-relaxed">
                <b class="text-amber-300/90">${isEn ? 'Pillar Industries: ' : '核心支柱产业：'}</b>${isEn ? ev.pillarIndustriesEn : ev.pillarIndustriesZh}
              </div>
            ` : ''}
          </div>
        ` : ''}

        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
          <div class="p-2.5 rounded-xl bg-black/40 border border-gray-800 text-center">
            <div class="text-[10px] text-gray-400 mb-0.5">${isEn ? "Country" : "所在国度"}</div>
            <div class="text-xs font-bold text-gray-200 font-mono">${countryDisplay}</div>
          </div>
          <div class="p-2.5 rounded-xl bg-black/40 border border-gray-800 text-center">
            <div class="text-[10px] text-gray-400 mb-0.5">${isEn ? "Current City" : "当前城市"}</div>
            <div class="text-xs font-bold text-amber-300 font-mono truncate" title="${cityDisplay}">${cityDisplay}</div>
          </div>
          <div class="p-2.5 rounded-xl bg-black/40 border border-gray-800 text-center">
            <div class="text-[10px] text-gray-400 mb-0.5">${isEn ? "Geographic Sector" : "地缘方位"}</div>
            <div class="text-xs font-bold text-gray-200 font-mono">${directionDisplay}</div>
          </div>
          <div class="p-2.5 rounded-xl bg-black/40 border border-gray-800 text-center">
            <div class="text-[10px] text-gray-400 mb-0.5">${isEn ? "Terrestrial Element" : "五行气机"}</div>
            <div class="text-xs font-bold text-amber-300 font-mono">${elementDisplay}</div>
          </div>
          <div class="p-2.5 rounded-xl bg-black/40 border border-gray-800 text-center">
            <div class="text-[10px] text-gray-400 mb-0.5">${isEn ? "Day Master Dynamic" : "本命日主生克"}</div>
            <div class="text-xs font-bold text-gray-200 font-mono">${dmDisplay} · ${isEn ? ev.cElEn : ev.cEl}</div>
          </div>
          <div class="p-2.5 rounded-xl border text-center ${badgeColorClass}">
            <div class="text-[10px] opacity-80 mb-0.5">${isEn ? "Resonance Grade" : "地缘吉凶定调"}</div>
            <div class="text-xs font-black font-mono">${gradeDisplay} (${ev.score})</div>
          </div>
        </div>

        <div class="p-4 rounded-xl bg-black/30 border border-gray-800/80 text-xs text-gray-300 space-y-2 leading-relaxed">
          <div class="flex items-center gap-2">
            <span class="text-amber-400">⚖️</span>
            <span class="font-bold text-amber-200">${relationDisplay}</span>
          </div>
          <p>${isEn ? ev.analysisEn : ev.analysisZh}</p>
        </div>

        <div class="space-y-2 pt-1">
          <h3 class="text-xs font-bold font-serif-sc text-amber-300 flex items-center gap-1.5">
            <span>🛡️</span>
            <span>${isEn ? "Bespoke Spatial Remediation Remedies" : "专属空间风水调理策 (化克为生 · 调和气场)"}</span>
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
            ${remediesHtml}
          </div>
        </div>
      </div>
    `;
  }
}

SpatialFengShuiEngine.GEO_CITIES_DATABASE = SpatialFengShuiEngine.GEO_CITIES_DATABASE;

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SpatialFengShuiEngine };
}
if (typeof window !== 'undefined') {
  window.SpatialFengShuiEngine = SpatialFengShuiEngine;
}
