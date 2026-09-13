/**
 * 《神峰通考》 (Shen Feng Tong Kao) Canonical Database
 * Author: 明·张神峰 (张楠)
 * 
 * Core Metaphysical Tenets:
 * 1. 《病药说》 (Theory of Disease and Medicine): "有病方为贵，无伤不是奇。格中如去病，财禄两相随。"
 * 2. 《雕枯旺弱论》 (Sculpting, Withered, Robust & Delicate Theory): 旺者宜雕成器，弱者宜生培根，枯者宜润，寒者宜温。
 * 3. 《动静说》 (Movement and Stillness in Stems and Branches): 干动支静，刑冲破害以动，生旺克泄以变。
 */

const SHEN_FENG_DATA = {
  treatises: [
    {
      id: 'bingyao',
      titleZh: '病药说',
      titleEn: 'Theory of Disease and Medicine (Bing Yao Shuo)',
      quoteZh: '格格推详，以何为病，何者为药。有病方为贵，无伤不是奇。格中如去病，财禄两相随。病重得药，大富大贵；病轻得药，略有小富；无病而受药，反为害也。',
      quoteEn: 'In every natal chart, dissect what constitutes the Disease, and what acts as the Medicine. Greatness arises only where a grave Disease meets its perfect Medicine; without vulnerability, destiny lacks distinction. When the Disease is cured by the Medicine, supreme wealth and honor follow.',
      vernacularZh: '张神峰开创“病药绝学”：寻常命理常求五行四平八稳无病无灾，但天下大成就者，命局往往大偏大枯（大病），正因命带巨症，方能激发出吞吐天地的绝境突围势能。只要命中或大运透出得力之神克制化解该病灶（得大药），便成绝世奇局；反之若无病受药，或病重无药，则难免沉沦坎坷。',
      vernacularEn: 'Zhang Shenfeng established the definitive Theory of Disease and Medicine: Mediocre charts pursue mild balance, but truly extraordinary leaders often possess heavily skewed, afflicted charts (grave Diseases). This very affliction creates massive existential tension. When the chart possesses or transits into the divine antidote (the Medicine) that neutralizes this disease, miraculous greatness is forged.',
      modernInterpretationZh: '在现代社会中，所谓“病”即是一个人核心的性格缺陷、原生阻碍、专业壁垒瓶颈或所处时代的重大生存痛点；所谓“药”即是命主能够打通全局、形成降维打击优势的唯一核心抓手（帕累托20%关键突破口）。',
      modernInterpretationEn: 'In modern strategy, the "Disease" represents the core structural bottleneck, emotional shadow, or macro friction of the native; the "Medicine" represents the single high-leverage 20% fulcrum that dissolves the deadlock and unleashes 80% of personal exponential compound growth.'
    },
    {
      id: 'diaoku',
      titleZh: '雕枯旺弱论',
      titleEn: 'Treatise on Sculpting, Withered, Robust, and Delicate (Diao Ku Wang Ruo)',
      quoteZh: '太旺者，不可强抑，顺其气势或以食伤雕琢之；太衰者，不可暴扶，藉以甘霖印绶温润之。金旺得火成钟鼎，木旺逢金做栋梁；火燥得水则生香，水寒得火方融冻。',
      quoteEn: 'The excessively robust cannot be crudely suppressed; sculpt it through creative Output or channel its momentum. The excessively frail cannot be violently pushed; nurture it through gentle Resource. Robust Metal meeting Fire becomes sacred vessels; thick Wood carved by Metal becomes pillar beams; scorched Fire cooled by Water produces sweet fragrance; freezing Water thawed by Fire unfreezes vitality.',
      vernacularZh: '五行各有体用性情：旺而有力者，需经雕琢方能成栋梁大器，不可任其蛮横荒芜；枯槁衰微者，如同初生嫩苗，必须施以温和之雨露培植，急躁猛药反而催命断根。',
      vernacularEn: 'Each element requires bespoke treatment: Robust forces must be sculptured through discipline and output to achieve architectural mastery; frail saplings require gentle warmth and moisture, as aggressive remedies cause instant collapse.',
      modernInterpretationZh: '强者宜走高强度打磨与严格自律交付之路（雕琢成器）；弱者宜采取小步慢跑、依托成熟体系平台借势生长（温润培根），切勿急功近利。',
      modernInterpretationEn: 'High-vigor natives must undergo rigorous professional discipline and milestone delivery (sculpting); low-vigor natives must anchor inside protective platforms and grow organically without reckless burnout.'
    },
    {
      id: 'dongjing',
      titleZh: '动静说',
      titleEn: 'Treatise on Movement and Stillness (Dong Jing Shuo)',
      quoteZh: '天干主动，乃动者吉凶见于速；地支主静，乃静者吉凶发于迟。支中暗伏生克，遇冲刑破害则发露；岁运交感，引动藏干则事现。',
      quoteEn: 'Heavenly Stems govern Movement, manifesting fortune and calamity swiftly on the surface. Earthly Branches govern Stillness, accumulating karma quietly beneath. Hidden stems in roots stir upon clashes, penalties, and transits.',
      vernacularZh: '天干浮于表面，象征公开的人际、社会地位与外部突发事件，来势迅猛；地支沉潜于内，象征内在家庭、身体潜伏疾患、深层心理以及未显露的资本底盘。岁运引动地支刑冲，方是决定吉凶祸福之深层转折点。',
      vernacularEn: 'Stems reflect public personas, sudden events, and visible career markers; Branches preserve subconscious reserves, domestic realities, and latent organ vitality. When transits trigger root clashes, profound subterranean shifts occur.',
      modernInterpretationZh: '外部风口变动（干动）来去匆匆，唯有组织架构、财务安全垫与身心健康基本盘（支静）稳固，方能经得起时代周期的大风大浪。',
      modernInterpretationEn: 'Surface trends fluctuate wildly; only those with robust organizational balance sheets, private health reserves, and emotional grounding (Branch stillness) weather macro storms.'
    }
  ],

  // 8 Canonical Diseases & Medicines
  diseaseArchetypes: {
    '寒湿凝滞': {
      nameZh: '寒湿凝滞病',
      nameEn: 'Freezing Damp Stagnation Disease',
      symptomZh: '生于冬季（亥子丑月）且命中金水过盛，全盘寒冻无火，万物收缩凝滞，气机无法舒展。',
      symptomEn: 'Born in winter (Hai, Zi, Chou months) with dominant Metal-Water. Frozen tundra lacking sunlight, causing energetic paralysis.',
      medicineZh: '丙丁火（太阳暄照、炉火温焙）与燥土（戊戌未）。',
      medicineEn: 'Bing/Ding Fire (Solar warmth & hearth embers) combined with dry Earth (Wu, Xu, Wei).',
      rationaleZh: '《神峰通考》断曰：“冬月之木水，非丙火不发，非燥土不荣。得丙火解冻，如红日当空，冰雪消融，化枯木为逢春。”',
      rationaleEn: 'Zhang Shenfeng asserts: "Winter Wood and Water require Bing Fire to sprout, and warm Earth to thrive. Once thawed by solar radiance, the frozen landscape revives with blooming vigor."',
      modernStrategyZh: '【20%关键破局药方】：走出阴郁闭塞与自我隔离，主动走向聚光灯下做公开演讲、视觉品牌与高能表达；工作居住优先选择向阳高采光空间或南方温暖城市；生活多沐浴阳光晨跑。',
      modernStrategyEn: '【20% Pivot Antidote】: Break free from depressive isolation. Step into the spotlight through public presentations and vibrant media; locate in sunlit spaces or southern metropolitan centers; practice morning outdoor cardio.'
    },
    '燥热焦枯': {
      nameZh: '燥热焦枯病',
      nameEn: 'Scorching Arid Fire Disease',
      symptomZh: '生于夏季（巳午未月）或火土焚灼无水，燥气升腾，神魂躁动，精血暗耗。',
      symptomEn: 'Born in summer (Si, Wu, Wei months) or dominated by dry Fire-Earth. High inner fever, impetuous volatility, and rapid vital fluid depletion.',
      medicineZh: '壬癸水（汪洋雨露）与湿土（辰丑蓄水）。',
      medicineEn: 'Ren/Gui Water (Rivers & gentle rains) coupled with moist Earth (Chen, Chou).',
      rationaleZh: '《神峰通考》断曰：“火炎土燥，万物自焦。一滴甘露，润物无声；见辰丑蓄水滋润，方得水火既济，枯木逢甘霖。”',
      rationaleEn: 'Zhang Shenfeng asserts: "Scorching Fire incinerates life. A single drop of sweet rain nourishes without friction; moist Earth cools the blaze, achieving sublime equilibrium."',
      modernStrategyZh: '【20%关键破局药方】：强制降温！戒除浮躁冒进的赌徒心态，建立白纸黑字冷静期决策防火墙；多亲近大江大海自然湿地；多饮温润汤水，以沉静包容涵养浩然之气。',
      modernStrategyEn: '【20% Pivot Antidote】: Cool down impetuous ambition! Institute a mandatory 48-hour cooling-off rule before commitments; live near waterfront ecologies; hydrate with restorative teas and meditate to anchor serenity.'
    },
    '官杀攻身': {
      nameZh: '官杀攻身病',
      nameEn: 'Crushing Killings Oppression Disease',
      symptomZh: '日元身弱，命盘官杀星森罗密布，如猛虎围猎娇羊，常遭外界无情打压、苛刻考核与恐慌焦虑。',
      symptomEn: 'Day Master is frail while Seven Killings proliferate like predators, subjecting the native to relentless corporate stress and panic.',
      medicineZh: '正偏印（化杀生身）或食神伤官（制杀化权）。',
      medicineEn: 'Direct/Indirect Resource (transforming Killings into authority) or Eating God/Hurting Officer (taming Killings).',
      rationaleZh: '《神峰通考》断曰：“杀重身轻，终身有损。赖印星化杀为权，如猛兽见驯兽之师，反为我用；食神制杀，英雄独揽兵符。”',
      rationaleEn: 'Zhang Shenfeng asserts: "Heavy Killings crushing a weak self breeds lifelong hardship. Yet Resource transforms ferocious predators into loyal steeds; Output tames adversity into executive triumph."',
      modernStrategyZh: '【20%关键破局药方】：绝对不搞正面硬碰硬！深耕无可替代的顶级硬核专业资质、学术专利与长者贵人人脉（印星化杀）；用真才实学将残酷挑战淬炼为至高个人声望。',
      modernStrategyEn: '【20% Pivot Antidote】: Never confront predators head-on. Build sovereign technical credentials, patented IP, and senior mentor coalitions (Resource) to convert external crises into uncontested authority.'
    },
    '比劫争财': {
      nameZh: '比劫争财病',
      nameEn: 'Rob Wealth Resource Encroachment Disease',
      symptomZh: '日主身旺，比肩劫财羊刃重重，分夺财富权柄，导致破财破耗、合伙反目、恶性内卷。',
      symptomEn: 'Day Master is fiercely robust while Rob Wealth and Yang Ren blades proliferate, triggering margin destruction, backstabbing, and severe asset leaks.',
      medicineZh: '正官七杀（制度克制比劫）或食伤（通关生财吐秀）。',
      medicineEn: 'Direct Officer/Seven Killings (imposing structural rules) or Eating God/Output (channeling rivalry into product innovation).',
      rationaleZh: '《神峰通考》断曰：“比劫分财，群狼争肉。官杀临门，秋霜降而乱草伏，制度立而群盗止；食伤化秀，生财有道。”',
      rationaleEn: 'Zhang Shenfeng asserts: "Rival peers fighting over wealth is a pack of wolves contesting meat. Direct Officer imposes rigorous law, disarming robbers; Output transforms strife into abundant commerce."',
      modernStrategyZh: '【20%关键破局药方】：立规矩！合作坚决以严谨法务合同为准，拒绝口头人情；利益分配主动让出微利换取拥戴；将澎湃精力全然转化为原创研发与开拓增量蓝海。',
      modernStrategyEn: '【20% Pivot Antidote】: Ironclad legal governance! Ban informal verbal pacts; voluntarily share marginal profits to convert rivals into co-investors; redirect competitive aggression into blue-ocean product mastery.'
    },
    '枭神夺食': {
      nameZh: '枭神夺食病',
      nameEn: 'Owl God Suppressing Output Disease',
      symptomZh: '偏印太盛贴身克制食神，灵感被封锁，才华难变现，心胸猜忌多疑，身心深陷内耗。',
      symptomEn: 'Indirect Resource severely clashes with Eating God, suffocating creativity, fueling morbid suspicion, and paralyzing commercial execution.',
      medicineZh: '正偏财（财星破枭护食）与比劫（泄枭通关）。',
      medicineEn: 'Direct/Indirect Wealth (Wealth star destroying Owl to liberate Output) supported by Peers.',
      rationaleZh: '《神峰通考》断曰：“枭印夺食，寸步难移。得财星破印，如春雷破顽石，食神生机勃发，福禄自来。”',
      rationaleEn: 'Zhang Shenfeng asserts: "Owl God smothering Output paralyses destiny. But when Wealth cracks the stagnant Resource, the creative spring erupts into inexhaustible prosperity."',
      modernStrategyZh: '【20%关键破局药方】：强制商业化！不做不计回报的自嗨狂想，所有创意必须以市场真实订单和客户现金流为检验标准；多接触务实接地气的商业伙伴，以实际行动破除精神空转。',
      modernStrategyEn: '【20% Pivot Antidote】: Radical commercialization! Ban ungrounded theoretical rumination; measure every idea against paying customer invoices; partner with pragmatic operators to shatter mental loops.'
    },
    '伤官见官': {
      nameZh: '伤官见官病',
      nameEn: 'Hurting Officer Clashing Authority Disease',
      symptomZh: '伤官与正官贴身冲战，反叛权威，言辞犀利惹祸，极易引发公关危机、行业封杀与官司诉讼。',
      symptomEn: 'Hurting Officer violently collides with Direct Officer: rebellious defiance against leadership, sharp indiscreet speech sparking litigation and institutional backlash.',
      medicineZh: '正印（伤官配印，化狂傲为威仪）或财星（伤官生财，通关化官）。',
      medicineEn: 'Direct Resource (Officer-Resource pairing, refining insolence into dignity) or Wealth (converting rebellious friction into profit).',
      rationaleZh: '《神峰通考》断曰：“伤官见官，为祸百端。若得印绶制伤护官，文采风流化为社稷之器；若得财星通关，转祸为祥，富甲一方。”',
      rationaleEn: 'Zhang Shenfeng asserts: "Hurting Officer meeting Officer invites a hundred calamities. Yet Resource harnesses rebellion into statesmanlike brilliance; Wealth channels fiery critique into lucrative enterprise."',
      modernStrategyZh: '【20%关键破局药方】：克制傲慢，伤官配印！将批判锐气转化为严谨学术著作、专业技术专利或商业解决方案；聘请专业法务总监把关公开发言，筑牢合规防火墙。',
      modernStrategyEn: '【20% Pivot Antidote】: Pair brilliance with discipline! Channel rebellious critique into peer-reviewed publications, patented architectures, or commercial software; retain compliance directors to screen public messaging.'
    },
    '财多身弱': {
      nameZh: '财多身弱病',
      nameEn: 'Excessive Wealth Exhausting Weak Self Disease',
      symptomZh: '财星汪洋遍地，日主衰微娇弱，犹如稚童抱重金于闹市，为金钱指标拼命透支，富屋贫人，身心交瘁。',
      symptomEn: 'Wealth stars overwhelm a delicate constitution: carrying gold bullion across an uphill trail, suffering chronic fatigue and unrewarded balance-sheet stress.',
      medicineZh: '比劫帮身（兄弟同担负重）与正偏印（温补元神根气）。',
      medicineEn: 'Friend/Rob Wealth (coalitions sharing the burden) combined with Resource (fortifying somatic core vitality).',
      rationaleZh: '《神峰通考》断曰：“财多身弱，反受其困。必得比肩分其重担，印绶滋其神精，身强力足，方能驱使万金。”',
      rationaleEn: 'Zhang Shenfeng asserts: "Frail self facing overflowing gold is trapped by its own prize. Must secure peer allies to shoulder weights, and Resource to nourish the soul, commanding boundless treasures."',
      modernStrategyZh: '【20%关键破局药方】：轻资产联盟！坚决不背个人无限连带债务；组建互补型合伙团队共同扛指标；将自身定位为高壁垒智囊/顾问，按利润分红而非承担全部固定经营成本。',
      modernStrategyEn: '【20% Pivot Antidote】: Asset-light coalitions! Never assume unlimited personal debt liability; assemble co-founders to carry operational load; position as high-leverage strategist earning carry rather than overhead burdens.'
    },
    '秀气郁滞': {
      nameZh: '秀气郁滞病',
      nameEn: 'Stagnant Vital Flow & Blocked Output Disease',
      symptomZh: '命中同气比劫与印星堆叠太厚，全盘气机壅塞凝固，空有一腔才华抱负却迟迟不敢出手交付。',
      symptomEn: 'Heavy concentration of Peers and Resources without vents: intense potential energy trapped in chronic procrastination and perfectionist paralysis.',
      medicineZh: '食神伤官（穿针引线吐露菁华）与财星（引通水源）。',
      medicineEn: 'Eating God/Hurting Officer (venting innate genius) anchored into Wealth (manifesting market returns).',
      rationaleZh: '《神峰通考》断曰：“气象纯和而无发泄，如宝藏深埋。得食伤一泄其菁华，灵光四溢，才华绝代。”',
      rationaleEn: 'Zhang Shenfeng asserts: "Pure energetic mass without release is buried treasure. A single vent of Output awakens brilliant expression, dazzling the era."',
      modernStrategyZh: '【20%关键破局药方】：立即行动与小步快跑！打破完美主义强迫症，设立敏捷开发交付节拍；不追求一次性惊世骇俗，哪怕做最小可行性产品（MVP）也要直接推向市场接受检验。',
      modernStrategyEn: '【20% Pivot Antidote】: Ship early, iterate fast! Annihilate perfectionist hesitation by enforcing a strict weekly release cadence; launch minimum viable products (MVPs) into the wild immediately.'
    }
  }
};

class ShenFengDB {
  /**
   * Diagnose the natal "Disease" and "Medicine" according to Zhang Shenfeng
   */
  static getDiseaseAndMedicine(bazi, vigor) {
    const dm = (bazi && bazi.dayMaster) || '甲';
    const stemToEl = { '甲':'木','乙':'木','丙':'火','丁':'火','戊':'土','己':'土','庚':'金','辛':'金','壬':'水','癸':'水' };
    const dmEl = (bazi && bazi.dayMasterElement) || stemToEl[dm] || '木';
    const mBranch = (bazi && bazi.solarInfo && bazi.solarInfo.monthBranch)
      || (bazi && bazi.pillars && bazi.pillars.month && bazi.pillars.month.branch)
      || '子';
    const score = (vigor && vigor.totalScore !== undefined) ? vigor.totalScore : ((vigor && (vigor.isStrong || vigor.isExtreme || vigor.category === '太旺')) ? 65 : 40);
    const isStrong = score >= 52 || (vigor && (vigor.isStrong || vigor.isExtreme || vigor.category === '太旺'));
    const isWeak = score <= 36 || (vigor && (vigor.isWeak || vigor.category === '太弱'));
    const isWinter = ['亥', '子', '丑'].includes(mBranch);
    const isSummer = ['巳', '午', '未'].includes(mBranch);

    // Identify primary disease
    let archetypeKey = '秀气郁滞';
    if (isWinter && ['水', '金', '土'].includes(dmEl)) {
      archetypeKey = '寒湿凝滞';
    } else if (isSummer && ['火', '土'].includes(dmEl)) {
      archetypeKey = '燥热焦枯';
    } else if (isWeak) {
      const p = (bazi && bazi.pillars) || {};
      const allGods = [
        p.year && p.year.stemGod,
        p.month && p.month.stemGod,
        p.hour && p.hour.stemGod
      ].filter(Boolean);
      if (allGods.some(g => g.includes('杀') || g.includes('官'))) {
        archetypeKey = '官杀攻身';
      } else if (allGods.some(g => g.includes('财'))) {
        archetypeKey = '财多身弱';
      } else if (allGods.some(g => g.includes('伤'))) {
        archetypeKey = '伤官见官';
      } else {
        archetypeKey = '官杀攻身';
      }
    } else if (isStrong) {
      const p = (bazi && bazi.pillars) || {};
      const allGods = [
        p.year && p.year.stemGod,
        p.month && p.month.stemGod,
        p.hour && p.hour.stemGod
      ].filter(Boolean);
      if (allGods.some(g => g.includes('劫') || g.includes('比'))) {
        archetypeKey = '比劫争财';
      } else if (allGods.some(g => g.includes('枭') || g.includes('偏印'))) {
        archetypeKey = '枭神夺食';
      } else if (allGods.some(g => g.includes('伤'))) {
        archetypeKey = '伤官见官';
      } else {
        archetypeKey = '秀气郁滞';
      }
    }

    const item = SHEN_FENG_DATA.diseaseArchetypes[archetypeKey] || SHEN_FENG_DATA.diseaseArchetypes['秀气郁滞'];
    let symptomZh = item.symptomZh;
    let symptomEn = item.symptomEn;
    let modernStrategyZh = item.modernStrategyZh;
    let modernStrategyEn = item.modernStrategyEn;

    // Dynamically enrich with stem/branch interactions if available
    const interactions = (bazi && bazi.interactions) || ((bazi && bazi.pillars && typeof BaZiEngine !== 'undefined') ? BaZiEngine.calculatePillarInteractions(bazi.pillars) : null);
    if (interactions) {
      if (interactions.stemClashes && interactions.stemClashes.length > 0) {
        symptomZh += `【干冲暗耗】：局中见${interactions.stemClashes.map(c => c.nameZh).join('、')}，加剧了外部环境与思想层面的激烈摩擦。`;
        symptomEn += ` [Stem Clashes Impact]: Tension exacerbated by ${interactions.stemClashes.map(c => c.nameEn).join('; ')}.`;
      }
      if (interactions.branchHarms && interactions.branchHarms.length > 0) {
        symptomZh += `【地支穿害】：暗带${interactions.branchHarms.map(h => h.nameZh).join('、')}，防隐性利益猜忌与小人暗箭。`;
        symptomEn += ` [Branch Harms Impact]: Latent frictions from ${interactions.branchHarms.map(h => h.nameEn).join('; ')}.`;
        modernStrategyZh += '【穿害化解专令】：所有重大合作严守白纸黑字法务合同，核心关键账务独立复核，杜绝口头托付。';
        modernStrategyEn += ' [Harm Resolution Rule]: Enforce black-and-white legal verification on all key agreements; independent audits on sensitive accounts.';
      }
      if (interactions.branchPunishments && interactions.branchPunishments.length > 0) {
        symptomZh += `【地支带刑】：局带${interactions.branchPunishments.map(p => p.nameZh).join('、')}，注意情绪舒缓与守法合规。`;
        symptomEn += ` [Punishment Marker]: Friction from ${interactions.branchPunishments.map(p => p.nameEn).join('; ')}.`;
      }
    }

    return {
      diseaseKey: archetypeKey,
      diseaseNameZh: item.nameZh,
      diseaseNameEn: item.nameEn,
      nameZh: item.nameZh,
      nameEn: item.nameEn,
      symptomZh,
      symptomEn,
      medicineZh: item.medicineZh,
      medicineEn: item.medicineEn,
      rationaleZh: item.rationaleZh,
      rationaleEn: item.rationaleEn,
      modernStrategyZh,
      modernStrategyEn,
      classicalQuoteZh: '《神峰通考·病药说》：“格格推详，以何为病，何者为药。有病方为贵，无伤不是奇。格中如去病，财禄两相随。”',
      classicalQuoteEn: 'Shen Feng Tong Kao: "Dissect what constitutes the Disease, and what acts as the Medicine. Greatness arises only where a grave Disease meets its perfect Medicine; when cured, supreme wealth and honor follow."'
    };
  }

  /**
   * Sculpting vs Gentle Nurturing (雕枯旺弱论)
   */
  static getSculptingAnalysis(arg1, arg2) {
    let dmElement = '木';
    let isRobust = true;
    if (typeof arg1 === 'object' && arg1 !== null) {
      dmElement = arg1.element || arg1.dayMasterElement || '木';
      if (arg1.totalScore !== undefined) {
        isRobust = arg1.totalScore >= 50;
      } else if (arg1.isExtreme || arg1.category === '太旺' || arg1.isStrong) {
        isRobust = true;
      } else if (arg1.category === '太弱' || arg1.isWeak) {
        isRobust = false;
      }
    } else {
      dmElement = arg1 || '木';
      const score = (arg2 !== undefined) ? (typeof arg2 === 'object' && arg2 !== null ? (arg2.totalScore !== undefined ? arg2.totalScore : 50) : Number(arg2)) : 50;
      isRobust = score >= 50;
    }

    if (isRobust) {
      const textZh = `日元五行【${dmElement}】得令通根，气势雄浑。切忌散漫放任，需施以高标准的严苛专业打磨、严格的项目里程碑与纪律制度，百炼成钢，方显千古大器之风骨。`;
      const textEn = `The Day Master element [${dmElement}] is densely rooted and commanding. Avoid indolence; submit to demanding technical milestones and disciplined governance to forge lasting greatness.`;
      const typeZh = '旺气雕琢型 (成器栋梁)';
      const typeEn = 'Robust Sculpting Archetype (Architectural Mastery)';
      const genderDiffZh = '【男女命雕琢差异】：乾造男命宜置身严苛竞技赛道，以硬仗和硬核战绩立威；坤造女命宜在专业主权与技术领域建立标杆，避免无谓人情消耗。';
      const genderDiffEn = '[Male vs Female Sculpting]: Male native flourishes under demanding competitive milestones; female native flourishes by establishing undisputed mastery in specialized technical domains.';

      return {
        typeZh,
        typeEn,
        categoryZh: typeZh,
        categoryEn: typeEn,
        adviceZh: textZh,
        adviceEn: textEn,
        analysisZh: textZh,
        analysisEn: textEn,
        genderDiffZh,
        genderDiffEn,
        quoteZh: '《神峰通考·雕枯旺弱论》：“金旺得火成钟鼎，木旺逢金做栋梁。大旺者雕琢方能光华内敛。”',
        quoteEn: 'Shen Feng Tong Kao: "Robust Metal sculpted by Fire becomes bells and cauldrons; dense Wood carved by Metal becomes pillar beams."'
      };
    } else {
      const textZh = `日元五行【${dmElement}】质地清秀而形体娇弱。切忌好大喜功或超负荷硬刚高危项目；宜依托成熟平台长线积累，注重身心节律滋养与慢工出细活。`;
      const textEn = `The Day Master element [${dmElement}] is refined yet delicate. Never overextend into hazardous leverage; compound quietly inside protective platforms and honor holistic biorhythms.`;
      const typeZh = '温润培根型 (甘霖养秀)';
      const typeEn = 'Delicate Root-Nurturing Archetype (Organic Compounding)';
      const genderDiffZh = '【男女命培根差异】：乾造男命宜借力成熟大平台沉潜蓄势，勿盲目孤军冒进高杠杆创业；坤造女命宜重身心养护与情绪安和，以长线定力滋养深层福泽。';
      const genderDiffEn = '[Male vs Female Nurturing]: Male native should anchor within resilient platforms and avoid high-debt solo gambles; female native should protect somatic biorhythms and compound through patient wisdom.';

      return {
        typeZh,
        typeEn,
        categoryZh: typeZh,
        categoryEn: typeEn,
        adviceZh: textZh,
        adviceEn: textEn,
        analysisZh: textZh,
        analysisEn: textEn,
        genderDiffZh,
        genderDiffEn,
        quoteZh: '《神峰通考·雕枯旺弱论》：“太衰者，不可暴扶，藉以甘霖印绶温润之。娇木见水，徐徐滋养方为造化。”',
        quoteEn: 'Shen Feng Tong Kao: "The frail cannot be forcefully pushed; nurture gently with Resource rains so young sprouts blossom organically."'
      };
    }
  }

  static getAllTreatises() {
    return SHEN_FENG_DATA.treatises;
  }

  static search(keyword) {
    const results = [];
    if (!keyword || typeof keyword !== 'string') return results;
    const kw = keyword.trim().toLowerCase();

    // Search treatises
    SHEN_FENG_DATA.treatises.forEach(t => {
      if (t.titleZh.toLowerCase().includes(kw) || t.quoteZh.toLowerCase().includes(kw) || t.vernacularZh.toLowerCase().includes(kw)) {
        results.push({
          source: '《神峰通考》· 专论',
          title: t.titleZh,
          content: t.quoteZh,
          detail: t.vernacularZh
        });
      }
    });

    // Search disease archetypes
    for (const [k, d] of Object.entries(SHEN_FENG_DATA.diseaseArchetypes)) {
      if (k.toLowerCase().includes(kw) || d.nameZh.toLowerCase().includes(kw) || d.medicineZh.toLowerCase().includes(kw) || d.modernStrategyZh.toLowerCase().includes(kw)) {
        results.push({
          source: '《神峰通考》· 病药说',
          title: d.nameZh + ' (解药：' + d.medicineZh + ')',
          content: d.rationaleZh,
          detail: d.modernStrategyZh
        });
      }
    }

    return results;
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ShenFengDB, SHEN_FENG_DATA };
}
if (typeof window !== 'undefined') {
  window.ShenFengDB = ShenFengDB;
  window.SHEN_FENG_DATA = SHEN_FENG_DATA;
}
