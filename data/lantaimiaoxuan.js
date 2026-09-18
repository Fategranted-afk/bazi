/**
 * 《兰台妙选》 (Lan Tai Miao Xuan) Canonical Database
 * Classical Masterpiece of Ancient Lu-Ming NaYin Configurations & Acoustic Metaphysics
 * (明·西山老人 / 晋·郭璞遗意)
 * 
 * Core Metaphysical Tenets:
 * 1. 纳音象数大格 (NaYin Acoustic-Image Great Configurations): 观五行纳音神机，不专以生克为断，重在气象之宏伟纯粹。
 * 2. 贵人交互与干支交感 (Reciprocal Noble Stars & Pillar Interactions): 互换贵人、水火既济、苍龙驾海、蚌珠照月。
 * 3. 极阴变阳与极阳变阴 (Polar Transformation of Yin & Yang).
 */

const LAN_TAI_DATA = {
  patterns: [
    {
      id: 'shuihuojiji',
      nameZh: '水火既济格',
      nameEn: 'Water-Fire Fulfilled Equilibrium Pattern (Shui Huo Ji Ji)',
      category: '古法禄命纳音宗',
      categoryEn: 'Ancient Lu-Ming NaYin School',
      quoteZh: '水火既济，有经邦济世之才；坎离交媾，秉燮理阴阳之略。纳音得水火互通，无偏枯偏燥，主大贵显达。',
      quoteEn: 'Water and Fire in fulfilled equilibrium produce talents capable of governing nations. When Kan and Li unite without scorch or chill, sublime nobility manifests.',
      meaningZh: '命中水火二气均平，纳音或干支见润下之水与炎上之火交相辉映，水不灭火，火不枯水，相资为用，乃阴阳和合之至贵象。',
      meaningEn: 'Water and Fire energies achieve perfect equilibrium within natal NaYin or pillar dynamics. Neither extinguishing nor scorching each other, they catalyze boundless synergistic governance.',
      conditionsZh: '四柱干支或纳音中水与火力量相当且互为通关，如纳音天河水见炉中火，或壬癸水日元逢丙丁通根化解。',
      conditionsEn: 'Natal pillars or NaYin hold equal Water and Fire weights with circulation bridges, uniting cooler intellect with warm charisma.',
      modernInterpretationZh: '【现代心智与社会画像】：理智冷静（水）与激情执行（火）的完美融合。既有战略洞察深度，又有领军冲锋的感召力，是顶级企业CEO或政法统帅的罕见心智原型。',
      modernInterpretationEn: '【Modern Strategic Archetype】: Flawless synthesis of cold strategic analytical depth (Water) and visionary charismatic execution (Fire), characteristic of top-tier enterprise CEOs and pivotal statesmen.'
    },
    {
      id: 'canglongjiahai',
      nameZh: '苍龙驾海格',
      nameEn: 'Azure Dragon Galloping Across Ocean Pattern (Cang Long Jia Hai)',
      category: '古法禄命纳音宗',
      categoryEn: 'Ancient Lu-Ming NaYin School',
      quoteZh: '苍龙驾海，势跨乾坤；甲辰木逢大海水，腾云致雨，位至极品。',
      quoteEn: 'The Azure Dragon gallops across the boundless ocean, spanning Heaven and Earth; Jia Chen Wood meeting Great Ocean Water summons thunderous rain and reaches paramount stature.',
      meaningZh: '辰为龙，甲辰纳音佛灯火或干支乘苍龙之象，见壬戌癸亥大海水，象征神龙乘惊涛骇浪腾空而起，主破除万难、乘风破浪成就惊天伟业。',
      meaningEn: 'Chen embodies the Dragon. Jia Chen riding vibrant oceanic waves symbolizes a celestial sovereign dragon ascending through stormy tides, overcoming extreme obstacles into historic triumph.',
      conditionsZh: '柱中见辰龙（尤以甲辰、戊辰为尊），配合壬戌、癸亥大海水或天河水，无冲破克绝。',
      conditionsEn: 'Pillars feature Chen (especially Jia Chen or Wu Chen) harmonized with Ocean Water (Ren Xu, Gui Hai) or Celestial River Water, free from destructive clashes.',
      modernInterpretationZh: '【现代心智与社会画像】：天生的逆风翻盘者与行业破局者。在动荡与剧烈行业变局中展现极强掌控力，能驾驭庞大资源做全球化扩张。',
      modernInterpretationEn: '【Modern Strategic Archetype】: Natural turnaround pioneer. Thrives during macro turbulence and disruptive industry transitions, effortlessly marshaling capital across global frontiers.'
    },
    {
      id: 'bangzhuzhaoyue',
      nameZh: '蚌珠照月格',
      nameEn: 'Pearl Illuminating the Moon Pattern (Bang Zhu Zhao Yue)',
      category: '古法禄命纳音宗',
      categoryEn: 'Ancient Lu-Ming NaYin School',
      quoteZh: '蚌珠照月，清奇超脱之品；纳音水土涵润，见太阴酉金得气，光华内蕴，文章冠世。',
      quoteEn: 'The pearl illuminating the moonlight embodies sublime elegance; moist Water-Earth meeting the Lunar Metal of You manifests inner brilliance and peerless scholarly renown.',
      meaningZh: '如同深海蚌贝孕育璀璨明珠，又逢中秋明月鉴照。主为人风华内敛，精神世界极为深邃高尚，文笔才华或学术研发独步天下。',
      meaningEn: 'Like a precious pearl cultivated in deep ocean waters illuminated by a full autumn moon. Denotes profound introspective brilliance, peerless intellectual or creative mastery.',
      conditionsZh: '四柱见润泽水气配合地支酉金或辛酉石榴木，形成清澈透亮的气象。',
      conditionsEn: 'Pillars combine nourishing Water with You branch or pure Metal-Wood clarity, forming a luminous, pristine energetic atmosphere.',
      modernInterpretationZh: '【现代心智与社会画像】：顶尖研发科学家、国宝级学者、杰出艺术家或超级产品架构师。不求虚浮炒作，以纯粹硬核作品震撼时代。',
      modernInterpretationEn: '【Modern Strategic Archetype】: Elite research scientist, master scholar, or chief product architect whose enduring legacy stems from quiet, undeniable craftsmanship.'
    },
    {
      id: 'yuelangtianmen',
      nameZh: '月朗天门格',
      nameEn: 'Moon Shining on Heaven Gate Pattern (Yue Lang Tian Men)',
      category: '古法禄命纳音宗',
      categoryEn: 'Ancient Lu-Ming NaYin School',
      quoteZh: '月朗天门，金玉满堂；亥为天门，辛金或癸水坐之，清明澄澈，公辅之尊。',
      quoteEn: 'The moon shining through Heaven Gate fills palaces with gold and jade. Hai is the Gate of Heaven; Xin Metal or Gui Water resting upon it bestows ministerial dignity.',
      meaningZh: '乾位西北亥地为天门，辛金为月之精，癸水为天之津。月挂天门，浩气长存，主门庭高贵、声誉清白显赫。',
      meaningEn: 'The northwest quadrant (Hai) represents Heaven Gate. When illuminated by crisp Metal or deep Water, it projects pristine moral credibility and executive prestige.',
      conditionsZh: '四柱地支见亥，透辛金或生逢辛亥、癸亥日时，无刑害混浊。',
      conditionsEn: 'Pillars feature Hai branch housing Xin Metal or Gui Water without muddy conflicts.',
      modernInterpretationZh: '【现代心智与社会画像】：清流高管、顶级司法裁判官、学术领袖或道德威望极高的非营利基金掌门人。',
      modernInterpretationEn: '【Modern Strategic Archetype】: High-integrity executive, chief justice, university provost, or sovereign wealth steward endowed with pristine public trust.'
    },
    {
      id: 'huhwanguiren',
      nameZh: '互换贵人格',
      nameEn: 'Reciprocal Noble Stars Pattern (Hu Huan Gui Ren)',
      category: '古法禄命纳音宗',
      categoryEn: 'Ancient Lu-Ming NaYin School',
      quoteZh: '互换贵人，富贵双全；年干见日支贵人，日干见年支贵人，交相辉映，出入多贵客。',
      quoteEn: 'Reciprocal Nobles ensure comprehensive prosperity. When Year Stem finds its Noble Star in the Day Branch, and Day Stem finds its Noble Star in the Year Branch, nobility compounds unbrokenly.',
      meaningZh: '年为根基，日为自身；两柱互坐天乙贵人。一生左右逢源，在关键十字路口必有超级贵人倾囊相助，逢凶化吉。',
      meaningEn: 'Year Pillar governs roots and Day Pillar governs self. Mutually hosting Tianyi Nobles ensures unbroken mentorship and serendipitous rescues at pivotal crossroads.',
      conditionsZh: '年干的天乙贵人在日支，且日干的天乙贵人在年支（如甲见丑未，庚见丑未交相印证）。',
      conditionsEn: 'Year Stem’s Tianyi Noble star rests in Day Branch while Day Stem’s Tianyi Noble star rests in Year Branch.',
      modernInterpretationZh: '【现代心智与社会画像】：天生具备极高的人际信用与资本吸附力，极易获得顶级投资人、政商名流与行业泰斗的信赖与托付。',
      modernInterpretationEn: '【Modern Strategic Archetype】: Magnetic institutional trustworthiness; spontaneously attracts institutional capital, industry titans, and sovereign sponsors.'
    },
    {
      id: 'jiyinbianyang',
      nameZh: '极阴变阳格',
      nameEn: 'Extreme Yin Transmuting to Yang Pattern (Ji Yin Bian Yang)',
      category: '古法禄命纳音宗',
      categoryEn: 'Ancient Lu-Ming NaYin School',
      quoteZh: '极阴变阳，大器晚成；四柱纯阴而纳音引得阳生，物极必反，否极泰来。',
      quoteEn: 'Extreme Yin transmuting into Yang signifies magnificent late-blooming triumph. When all-Yin pillars awaken vital Yang through NaYin spark, adversity turns into boundless success.',
      meaningZh: '盘中八字表面柔顺沉潜，但内藏阳刚生发之机。前半生看似坎坷内敛，一旦行至阳和时令，顿悟开窍，成就不世功业。',
      meaningEn: 'Quiet subterranean patience abruptly igniting into radiant outward triumph once the cyclical turning point arrives.',
      conditionsZh: '八字干支偏阴（乙、丁、己、辛、癸与子、丑、卯、巳、未、酉、亥），但纳音或运途接通生旺阳火阳金。',
      conditionsEn: 'Pillars are heavily Yin, yet internal NaYin or dynamic decadal cycles trigger robust Yang vitality.',
      modernInterpretationZh: '【现代心智与社会画像】：厚积薄发的长期主义者。在寂寞冷板凳上十年磨一剑，最终凭借无可替代的底层深厚功力惊艳全场。',
      modernInterpretationEn: '【Modern Strategic Archetype】: Patient long-term compounding specialist. Masters deep foundational craft in total obscurity before orchestrating an astonishing late-career renaissance.'
    },
    {
      id: 'jianqichongxiao',
      nameZh: '剑气冲霄格',
      nameEn: 'Sword Qi Piercing Firmament Pattern (Jian Qi Chong Xiao)',
      category: '古法禄命纳音宗',
      categoryEn: 'Ancient Lu-Ming NaYin School',
      quoteZh: '剑气冲霄，威震边夷；壬申癸酉剑锋金，见木为砥砺，见水为淬刃，佩印掌权。',
      quoteEn: 'Sword Qi piercing the firmament strikes awe into frontiers. Ren Shen and Gui You Sword Edge Metal, polished by Wood and tempered by Water, commands sovereign authority.',
      meaningZh: '剑锋金乃六十甲子中最锋锐之金，不畏火炼，反喜水淬木雕。命带此格者，言辞犀利如剑，执行力雷厉风行，战无不克。',
      meaningEn: 'Sword Edge Metal is the sharpest among the 60 JiaZi, welcoming Water quenching and Wood resistance to forge an invincible executive blade.',
      conditionsZh: '柱中见壬申或癸酉剑锋金，配合旺水淬火或甲乙木雕琢，成斩将夺旗之势。',
      conditionsEn: 'Features Ren Shen or Gui You Sword Edge Metal bolstered by pure Water quenching or Wood targets.',
      modernInterpretationZh: '【现代心智与社会画像】：铁血执行官、尖端突击队长、危机处理专家或百亿量化基金交易操盘手。以极准极狠的战略定力一剑封喉。',
      modernInterpretationEn: '【Modern Strategic Archetype】: Decisive crisis turnaround commander, high-frequency quant trader, or surgical litigator renowned for pinpoint precision.'
    }
  ]
};

class LanTaiDB {
  static getAllPatterns() {
    return LAN_TAI_DATA.patterns;
  }

  /**
   * Match native chart against classical Lan Tai Miao Xuan configurations
   */
  static getMatchingPatterns(bazi) {
    if (!bazi || !bazi.pillars) return [];
    const matched = [];
    const p = bazi.pillars;
    const allBranches = [p.year?.branch, p.month?.branch, p.day?.branch, p.hour?.branch].filter(Boolean);
    const allStems = [p.year?.stem, p.month?.stem, p.day?.stem, p.hour?.stem].filter(Boolean);
    const allPillars = [p.year?.text, p.month?.text, p.day?.text, p.hour?.text].filter(Boolean);
    const allNaYins = [p.year?.naYin, p.month?.naYin, p.day?.naYin, p.hour?.naYin].filter(Boolean);

    // 1. 水火既济格
    const hasWater = allNaYins.some(n => n && n.includes('水')) || allStems.some(s => ['壬', '癸'].includes(s));
    const hasFire = allNaYins.some(n => n && n.includes('火')) || allStems.some(s => ['丙', '丁'].includes(s));
    if (hasWater && hasFire) {
      const pat = LAN_TAI_DATA.patterns.find(x => x.id === 'shuihuojiji');
      if (pat) matched.push(pat);
    }

    // 2. 苍龙驾海格 (见辰 + 见大海水/天河水/水盛)
    const hasChen = allBranches.includes('辰');
    const hasOcean = allNaYins.some(n => n && (n.includes('大海水') || n.includes('天河水') || n.includes('长流水')))
      || allBranches.includes('亥') || allBranches.includes('子');
    if (hasChen && hasOcean) {
      const pat = LAN_TAI_DATA.patterns.find(x => x.id === 'canglongjiahai');
      if (pat && !matched.some(m => m.id === pat.id)) matched.push(pat);
    }

    // 3. 蚌珠照月格 (见酉 + 水/湿土)
    const hasYou = allBranches.includes('酉');
    const hasMoist = allNaYins.some(n => n && (n.includes('水') || n.includes('大驿土') || n.includes('壁上土')))
      || ['子', '亥', '丑', '辰'].some(b => allBranches.includes(b));
    if (hasYou && hasMoist) {
      const pat = LAN_TAI_DATA.patterns.find(x => x.id === 'bangzhuzhaoyue');
      if (pat && !matched.some(m => m.id === pat.id)) matched.push(pat);
    }

    // 4. 月朗天门格 (见亥 + 辛/癸)
    const hasHai = allBranches.includes('亥');
    const hasXinOrGui = allStems.includes('辛') || allStems.includes('癸');
    if (hasHai && hasXinOrGui) {
      const pat = LAN_TAI_DATA.patterns.find(x => x.id === 'yuelangtianmen');
      if (pat && !matched.some(m => m.id === pat.id)) matched.push(pat);
    }

    // 5. 剑气冲霄格 (见剑锋金壬申/癸酉 或 申酉金旺逢水)
    const hasJianFeng = allPillars.includes('壬申') || allPillars.includes('癸酉') || allNaYins.some(n => n && n.includes('剑锋金'));
    if (hasJianFeng) {
      const pat = LAN_TAI_DATA.patterns.find(x => x.id === 'jianqichongxiao');
      if (pat && !matched.some(m => m.id === pat.id)) matched.push(pat);
    }

    // 6. 互换贵人 (Year Stem noble in Day Branch & Day Stem noble in Year Branch)
    const tianYiMap = {
      '甲': ['丑', '未'], '戊': ['丑', '未'], '庚': ['丑', '未'],
      '乙': ['子', '申'], '己': ['子', '申'],
      '丙': ['亥', '酉'], '丁': ['亥', '酉'],
      '壬': ['巳', '卯'], '癸': ['巳', '卯'],
      '辛': ['午', '寅']
    };
    const yStem = p.year?.stem;
    const dStem = p.day?.stem;
    const yBranch = p.year?.branch;
    const dBranch = p.day?.branch;
    if (yStem && dStem && yBranch && dBranch && tianYiMap[yStem] && tianYiMap[dStem]) {
      const yNobleInDay = tianYiMap[yStem].includes(dBranch);
      const dNobleInYear = tianYiMap[dStem].includes(yBranch);
      if (yNobleInDay || dNobleInYear) {
        const pat = LAN_TAI_DATA.patterns.find(x => x.id === 'huhwanguiren');
        if (pat && !matched.some(m => m.id === pat.id)) matched.push(pat);
      }
    }

    // 7. 极阴变阳格 (All Yin or heavily Yin stems/branches)
    const yinStems = ['乙', '丁', '己', '辛', '癸'];
    const yinCount = allStems.filter(s => yinStems.includes(s)).length;
    if (yinCount >= 3) {
      const pat = LAN_TAI_DATA.patterns.find(x => x.id === 'jiyinbianyang');
      if (pat && !matched.some(m => m.id === pat.id)) matched.push(pat);
    }

    return matched;
  }

  static search(query) {
    if (!query) return [];
    const q = query.toLowerCase();
    const results = [];
    LAN_TAI_DATA.patterns.forEach(p => {
      if (
        (p.nameZh && p.nameZh.includes(query)) ||
        (p.nameEn && p.nameEn.toLowerCase().includes(q)) ||
        (p.quoteZh && p.quoteZh.includes(query)) ||
        (p.quoteEn && p.quoteEn.toLowerCase().includes(q)) ||
        (p.meaningZh && p.meaningZh.includes(query)) ||
        (p.meaningEn && p.meaningEn.toLowerCase().includes(q)) ||
        (p.modernInterpretationZh && p.modernInterpretationZh.includes(query)) ||
        (p.modernInterpretationEn && p.modernInterpretationEn.toLowerCase().includes(q))
      ) {
        results.push({
          source: '《兰台妙选》',
          sourceEn: 'Lan Tai Miao Xuan',
          title: p.nameZh,
          titleEn: p.nameEn,
          content: p.quoteZh,
          contentEn: p.quoteEn,
          detail: p.meaningZh,
          detailEn: p.meaningEn
        });
      }
    });
    return results;
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { LanTaiDB, LAN_TAI_DATA };
}
if (typeof window !== 'undefined') {
  window.LanTaiDB = LanTaiDB;
}
