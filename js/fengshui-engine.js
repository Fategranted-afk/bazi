/**
 * 空间风水与八字开运全典引擎 (Spatial Feng Shui & Metaphysical Remediation Engine)
 * Generates 10 bespoke spatial, talismanic, and architectural recommendations tailored to natal chart & transit dynamics.
 * Fully bilingual (Chinese & English) with zero residual undefined fields.
 */

class SpatialFengShuiEngine {
  /**
   * Main entrypoint to compute all 10 spatial feng shui recommendations
   */
  static generateFengShuiGuide(bazi, luckData) {
    if (!bazi || !bazi.pillars) return null;

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
      // 专旺格 (曲直/炎上/稼穑/从革/润下)：顺其专旺之势，喜同气比劫、生身印枭与泄秀食伤，最忌官杀克破
      favorableElements = [dmEl, generatedBy[dmEl], generates[dmEl]];
    } else if (ziping && (ziping.categoryKey === 'moderate_weak' || ziping.categoryKey === 'extreme_weak')) {
      // 较弱或极弱：喜印比同源生扶护身
      favorableElements = [dmEl, generatedBy[dmEl]];
    } else {
      // 较旺格：喜克泄耗 (食伤泄秀、财星生发、官杀匡扶)
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

    // 3. Item 1: 延年位四方聚财阵 (4貔貅 + 1鼎)
    const yanNianItem = this.buildYanNianArray(kuaInfo, primaryFavEl);

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
    const trioBoostItem = this.buildTrioBoostGuide(dm, bazi);

    // 10. Item 8: 河图洛书吉数与选楼层、车牌尾数、手机号、衣服与车辆颜色、商业拓客方位
    const hetuLuoshuItem = this.buildHetuLuoshuGuide(primaryFavEl);

    // 11. Item 9: 积德行善指南 (献血、布施、修身)
    const meritItem = this.buildMeritCultivationGuide(ziping);

    // 12. Item 10: 户型气场综合调理评级与风水总诀
    const holisticRatingItem = this.buildHolisticRating(ziping, interactions, kuaInfo);

    return {
      timestamp: new Date().toISOString(),
      kuaInfo,
      primaryFavEl,
      primaryFavElZh: primaryFavElObj.zh,
      primaryFavElEn: primaryFavElObj.en,
      favorableElements,
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
  static buildYanNianArray(kuaInfo, favEl) {
    const tripodMaterials = {
      '木': { zh: '青铜三足宝鼎 (内蕴松柏香木)', en: 'Bronze tripod infused with fragrant cedar' },
      '火': { zh: '朱砂赤陶双耳神鼎', en: 'Cinnabar red terracotta ceremonial tripod' },
      '土': { zh: '紫砂汉白玉厚土尊鼎', en: 'Purple clay and white jade heavy tripod' },
      '金': { zh: '纯黄铜鎏金万象宝鼎', en: 'Gilded solid brass treasure tripod' },
      '水': { zh: '黑曜石墨玉聚财宝鼎', en: 'Obsidian and black jade prosperity tripod' }
    }[favEl] || { zh: '纯黄铜鎏金宝鼎', en: 'Gilded solid brass tripod' };

    return {
      titleZh: '延年位四方聚财貔貅大阵 (4貔貅 + 1鼎)',
      titleEn: 'Yan Nian Celestial Wealth Array (4 Pixiu + 1 Tripod)',
      locationZh: `本命延年第一吉位：【${kuaInfo.yanNianZh}】`,
      locationEn: `Prime Yan Nian Sector: [${kuaInfo.yanNianEn}]`,
      coreItemZh: `中枢定位：1座【${tripodMaterials.zh}】；四维拱卫：4尊开光纯铜/玉石【吞财双翼貔貅】`,
      coreItemEn: `Center: 1 [${tripodMaterials.en}]; Periphery: 4 consecrated Pixiu guardians`,
      layoutZh: `在房屋或办公室的【${kuaInfo.yanNianZh}】，以宝鼎居于正中央稳镇财库，鼎内安置五谷、五帝钱与天然水晶碎石；四尊貔貅头部呈45度角朝向东、南、西、北四方，象征‘广纳四方之财、吞吐天地资粮’，聚而不散，长保万全。`,
      layoutEn: `Place the treasure tripod at the center of your [${kuaInfo.yanNianEn}] sector, filled with five sacred grains, ancestral coins, and natural crystal shards. Position the 4 Pixiu facing outward into the cardinal quadrants to inhale wealth from all horizons.`,
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
  static buildTrioBoostGuide(dm, bazi) {
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

    return {
      titleZh: '催旺三宝：催贵人、催文昌与催真桃花辨识',
      titleEn: 'Trio Enhancements: Noble Mentors, Wisdom & True Charisma',
      noblemanZh: `【催贵人】：天乙贵人方位在【${nobleLoc.zh}】。在此位置安放一方精雕【羊脂白玉/黄铜九龙玉玺】（官印象征）。能瞬间链接行业顶级领袖与投资人庇佑，逢凶化吉。`,
      noblemanEn: `[Noble Mentors]: Tian Yi Nobleman resides at [${nobleLoc.en}]. Place an Imperial Jade or Brass Seal here to magnetize high-level patronage and decisive sponsorship.`,
      wenChangZh: `【催文昌】：本命文昌文曲位在【${wenChangLoc.zh}】。布置【九层纯铜文昌塔 + 文房四宝 + 水养4枝直立富贵竹】（以四绿文曲星水木相生之气），大幅提升深度专注力、大考通过率与重大战略决策精准度。`,
      wenChangEn: `[Wisdom & Intellect]: Wen Chang sits at [${wenChangLoc.en}]. Arrange a 9-tier bronze Wen Chang Pagoda, calligraphy set, and 4 stems of lucky bamboo in clean water to sharpen strategic precision.`,
      peachBlossomZh: `【催桃花与斩烂桃花】：个人真桃花位在【${peachLoc.zh}】。未婚者可摆放圆润【粉水晶狐狸球】配一尊白瓷花瓶插双数新鲜百合或玫瑰；已婚者切忌在此处放假花或空花瓶（防虚情假意与烂桃花侵扰，若逢烂桃花可挂桃木剑斩断纠葛）。`,
      peachBlossomEn: `[True Peach Blossom]: Charisma & romance locate at [${peachLoc.en}]. Singles can place Rose Quartz and fresh blooming lilies; couples should avoid empty vases or artificial flowers to prevent superficial entanglements.`
    };
  }

  /**
   * 8. 河图洛书吉数与选楼层、车牌尾数、手机号、衣服与车辆颜色、商业拓客方位
   */
  static buildHetuLuoshuGuide(favEl) {
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

    const guide = matrix[favEl] || matrix['木'];

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
      clientOutreachZh: `商业拓客与战略出海最优方位首选【${guide.directionsZh}】。商务洽谈将办公桌朝向该方，或将主要拓客资源倾斜至该区域城市，必得天地气场生助，成交率大幅翻倍。`,
      clientOutreachEn: `Target client acquisition and market expansions toward [${guide.directionsEn}]. Aligning your office desk toward these sectors dramatically amplifies conversion velocity.`
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
  static buildHolisticRating(ziping, interactions, kuaInfo) {
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
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SpatialFengShuiEngine };
}
if (typeof window !== 'undefined') {
  window.SpatialFengShuiEngine = SpatialFengShuiEngine;
}
