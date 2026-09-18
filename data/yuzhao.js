/**
 * 《玉照定真经》 (Yu Zhao Ding Zhen Jing) Canonical Database
 * Author: 晋·郭璞著 / 宋·徐子平注
 * 
 * Core Metaphysical Tenets:
 * 1. 四柱宫位直断法 (Palace Genealogy): 年为祖基、月为父母兄弟、日为夫妻自身、时为子女晚景。
 * 2. 六亲休咎与深层缘法 (Relational Hologram): 夫妻相合刑冲、子嗣才干后代、父母祖荫传承。
 * 3. 刑冲破害与伤灾形貌 (Palace Branch Clashes & Physical Health Markers).
 * 4. 六十甲子日柱专属配偶档案 (60 JiaZi Day Pillar Matrimonial Database).
 */

const YU_ZHAO_DATA = {
  aphorisms: [
    {
      id: 'spouse_intro',
      titleZh: '夫妻宫位本论',
      titleEn: 'Spouse Palace Treatise',
      quoteZh: '日干为己，日支为妻（夫）；干支相生者和睦，相克者猜忌；日坐刑冲，多主异离；日带贵人，必得良配。',
      quoteEn: 'The Day Stem represents the self, the Day Branch represents the spouse. Mutually generating branches produce domestic bliss; conflicting branches breed friction and suspicion; clashes indicate marital friction; auspicious stars bring a noble partner.',
      vernacularZh: '郭璞与徐子平指出：日柱是判断夫妻关系的核心宫位。天干为命主，地支为配偶。干支相生（如甲子、乙亥），夫妻相敬如宾如鱼得水；干支相克（如甲申、庚寅），二人性格棱角分明常起摩擦；若日支逢月时刑冲，则易有婚恋暗礁，需以包容化解。',
      vernacularEn: 'Guo Pu and Xu Ziping identify the Day Pillar as the core matrimonial pivot. Stem is the native; Branch is the consort. Mutual generation fosters deep harmony; mutual clash manifests complementary yet combative friction; branch clashes require mature psychological boundary-setting.'
    },
    {
      id: 'children_intro',
      titleZh: '子女时宿归宿论',
      titleEn: 'Children & Descendants Treatise',
      quoteZh: '时为帝座，又为子息。时逢生旺，子孙昌盛；时逢死绝，子嗣晚成。时带食神，后嗣温良；时居七杀，儿孙英毅。',
      quoteEn: 'The Hour represents the throne of conclusion and descendants. Flourishing Hour pillars denote thriving offspring; restrained pillars indicate late-blooming children. Eating God in Hour brings benevolent scholars; Seven Killings in Hour brings intrepid, resolute pioneers.',
      vernacularZh: '时柱象征一个人晚年的归宿与子女的生命状态。时柱气清有气，后嗣必有出类拔萃之人，晚景优渥颐养天年；时柱干支所临十神，深刻揭示了后代的性格模型、成长路径与亲子沟通密码。',
      vernacularEn: 'The Hour Pillar reflects the soul’s late-life sanctuary and genetic legacy. A clear Hour pillar produces distinguished progeny and serene twilight years; the Ten Gods residing in the Hour dictate children’s archetypes and parental coaching dynamics.'
    },
    {
      id: 'parents_intro',
      titleZh: '父母祖荫基业论',
      titleEn: 'Ancestral & Parental Heritage Treatise',
      quoteZh: '年月相生，祖业兴隆；印绶逢官，父贵母慈；偏财得地，父寿而丰；年冲月令，离祖成家。',
      quoteEn: 'Harmony between Year and Month signifies flourishing ancestral legacy; Resource meeting Officer denotes noble fathers and benevolent mothers; unhindered Indirect Wealth grants paternal longevity; Year-Month clashes indicate self-made migration from ancestral soil.',
      vernacularZh: '年柱代表祖辈根基与家族传承，月柱代表父母抚育与原生家庭门风。年月相生者得父母长辈倾力托举；年月相冲相战者，多自幼离乡背井白手起家，破除原生家庭桎梏而独立自强。',
      vernacularEn: 'Year Pillar governs ancestral roots; Month Pillar governs parental upbringing and familial culture. Generating relationships grant deep parental shelter; clashing pillars foster early independence, requiring the native to build their own empire away from home.'
    },
    {
      id: 'suiyun_jiaogan',
      titleZh: '岁运交感与刑冲破害直断',
      titleEn: 'Transit-Pillar Intersection & Clash Verdicts',
      quoteZh: '太岁冲刑，吉凶见于朝夕；岁月交加，喜庆集于门庭。日逢时冲，晚景多变；月被年伤，早年离析。煞刃交加，行险以求全；贵马相扶，乘风而直上。',
      quoteEn: 'Annual clash triggers swift consequences overnight; harmonious conjunction gathers celebrations into households. Day-Hour clash implies dynamic late-career transformation; Year-Month friction indicates early self-reliance.',
      vernacularZh: '晋代郭璞开篇即点明四柱岁运交感神机：大运流年引动命中地支刑冲破害，即是命运能量的总引爆点。冲开喜用库藏则财富暴涨，冲破用神根基则须慎防波折；以日时为终局，以岁月为先兆。',
      vernacularEn: 'Master Guo Pu emphasizes that transits activating natal clashes trigger rapid breakthroughs or sudden pivot requirements. Unlocking favorable storage generates unexpected wealth; shielding vulnerable roots prevents unnecessary friction.'
    },
    {
      id: 'xingchong_poshen',
      titleZh: '四柱刑害神煞吉凶应验诀',
      titleEn: 'Four Pillars Penalty, Harm & Auspicious Star Verdicts',
      quoteZh: '子卯相刑，门风自慎；丑戌未相刑，持重以防内诈。六害临门，骨肉须宽容；六合交泰，所谋多成遂。吉神乘旺，千灾自解；凶煞无制，防微杜渐。',
      quoteEn: 'Zi-Mao penalty counsels self-discipline; Earth penalties advise vigilant governance against internal deception. Six Harms counsel familial grace; Six Harmonies ensure smooth execution of strategic plans.',
      vernacularZh: '玉照定真经独创四柱神煞与地支刑冲互看之法：刑害虽为不利之兆，然若带天乙贵人或印绶护持，反而淬炼出超常的心智深度与危机免疫力；凡事防微杜渐，以正道自持则无往不利。',
      vernacularEn: 'Guo Pu pioneered integrating branch penalties with deity stars: branch tensions shielded by Noble Stars forge rare depth and crisis immunity; principled integrity reliably transmutes hazards into triumphs.'
    }
  ],

  // 12 Day Branches Spouse Palace Archetypes (Fallbacks & General Branch Resonance)
  spousePalaceProfiles: {
    '子': {
      element: '水',
      archetypeZh: '灵动深邃智囊型',
      archetypeEn: 'Insightful, Agile & Intuitive Strategist',
      traitsZh: '配偶聪颖机敏，情感细腻且极具洞察力。善于在关键时刻出谋划策，对生活品位要求高；外表多清秀典雅，但内心偶有敏感多疑与情绪暗潮。',
      traitsEn: 'Consort is sharp-witted, perceptive, and emotionally nuanced. Excels at providing strategic counsel; elegant aesthetic taste, though occasionally prone to sensitive mood undercurrents.',
      clashRiskZh: '遇午年冲（子午相冲）：谨防因异地分离、沟通冷战或外界异性诱惑引发信任危机；水火激荡易伴有心神不宁。',
      clashRiskEn: 'Clashing with Wu (Horse): Beware of emotional estrangement during long distances or sharp verbal confrontations; cardiovascular and emotional volatility.',
      adviceZh: '【婚姻护持锦囊】：给予配偶充分的安全感与深度倾听，多进行心灵层面的精神交流，切忌敷衍冷暴力。',
      adviceEn: '【Matrimonial Cultivation】: Provide emotional safety and deep listening; engage in intellectual and soulful dialogue; eliminate cold silences.'
    },
    '丑': {
      element: '土',
      archetypeZh: '沉稳坚毅务实型',
      archetypeEn: 'Grounded, Diligent & Pragmatic Realist',
      traitsZh: '配偶务实本分，任劳任怨，极具家庭责任感与理财观念。不善甜言蜜语，但做事脚踏实地，是风雨同舟的坚实后盾；性格偶有固执较真。',
      traitsEn: 'Consort is deeply reliable, frugal, hard-working, and family-oriented. Expresses love through quiet service rather than flattery; firm domestic pillar, though at times unyielding.',
      clashRiskZh: '遇未年冲（丑未相冲）：易因房产、理财投资理念或双方家族长辈赡养问题产生顽固分歧。',
      clashRiskEn: 'Clashing with Wei (Goat): Property disputes, divergent savings habits, or friction over in-law family responsibilities.',
      adviceZh: '【婚姻护持锦囊】：多肯定对方默默付出的汗水，重大财务共同商议，用温和态度化解对方骨子里的倔强。',
      adviceEn: '【Matrimonial Cultivation】: Sincerely praise their quiet acts of service; co-plan major financial allocations; soften their stubbornness with patient warmth.'
    },
    '寅': {
      element: '木',
      archetypeZh: '豪迈进取开拓型',
      archetypeEn: 'Ambitious, Generous & Pioneering Leader',
      traitsZh: '配偶胸怀开阔，事业心强烈，为人豪爽仗义。做事有冲劲有魄力，乐于在外打拼开拓；但自尊心极强，不喜被过度管束指责。',
      traitsEn: 'Consort is bold, charismatic, fiercely ambitious, and generous. Possesses formidable entrepreneurial drive; highly honorable, with great sensitivity to personal dignity.',
      clashRiskZh: '遇申年冲（寅申相冲）：职场聚少离多，差旅频繁；金木相战易因说话冲撞脾气爆发而互不相让。',
      clashRiskEn: 'Clashing with Shen (Monkey): Frequent business travel causing physical separation; sharp clashing tempers when provoked.',
      adviceZh: '【婚姻护持锦囊】：在外人面前给予配偶足够的面子与赞美，私下以柔克刚，支持其事业梦想并做好大后方温情港湾。',
      adviceEn: '【Matrimonial Cultivation】: Bestow unconditional public respect and praise; soften their fiery ambition with gentle domestic serenity.'
    },
    '卯': {
      element: '木',
      archetypeZh: '温雅仁善艺术型',
      archetypeEn: 'Gentle, Benevolent & Cultured Empath',
      traitsZh: '配偶性情温和，举止文雅，富有同理心与审美情趣。为人善良体贴，重视生活仪式感；但心性偶显脆弱柔弱，遇重大风浪易显优柔寡断。',
      traitsEn: 'Consort is graceful, empathetic, artistically inclined, and considerate. Cherishes domestic aesthetics and romantic rituals; may struggle with indecision under high stress.',
      clashRiskZh: '遇酉年冲（卯酉相冲）：金克木之战，极易因外界挑拨、家庭边界受侵犯或突然的搬迁变动而引发情感震荡。',
      clashRiskEn: 'Clashing with You (Rooster): External gossip undermining marital boundaries, or sudden relocation stress destabilizing affection.',
      adviceZh: '【婚姻护持锦囊】：成为配偶遮风挡雨的心理依靠，在生活小事上营造浪漫仪式感，鼓励其建立独立决断力。',
      adviceEn: '【Matrimonial Cultivation】: Act as an unshakeable emotional anchor; cultivate small aesthetic daily rituals; empower their independent decision-making.'
    },
    '辰': {
      element: '土',
      archetypeZh: '宽厚包容理财型',
      archetypeEn: 'Magnanimous, Astute & Protective Nurturer',
      traitsZh: '辰为水库，配偶宽宏大量，兼具商业头脑与持家智慧。擅长资源整合与资产打理，喜怒不形于色；但内心城府较深，不易轻易吐露真实心事。',
      traitsEn: 'Chen is the Water Reservoir: Consort is generous, commercially astute, and strategically patient. Outstanding asset allocator; retains quiet internal depths.',
      clashRiskZh: '遇戌年冲（辰戌相冲）：土气动荡，易因家族隐性债务、投资项目转型或亲戚借贷问题引发家庭争吵。',
      clashRiskEn: 'Clashing with Xu (Dog): Volatile earth clashes over undisclosed investments, family business reallocations, or relative loan demands.',
      adviceZh: '【婚姻护持锦囊】：主动分担家庭重压，建立高度透明的家庭财务账目，定期创造二人独处走心交流的契机。',
      adviceEn: '【Matrimonial Cultivation】: Share domestic burdens proactively; maintain transparent household balance sheets; set aside distraction-free private couples time.'
    },
    '巳': {
      element: '火',
      archetypeZh: '明敏热忱社交型',
      archetypeEn: 'Vibrant, Perceptive & Charming Catalyst',
      traitsZh: '配偶聪明伶俐，谈吐风趣幽默，人脉广泛善于交际。做事雷厉风行，能给家庭带来生机与活力；但性格偶显急躁，防三分钟热度。',
      traitsEn: 'Consort is witty, socially brilliant, energetic, and magnetic. Brings endless vitality to domestic life; requires steady grounding against impatient volatility.',
      clashRiskZh: '遇亥年冲（巳亥相冲）：水火相激，容易因双方社交圈界限不清、异性交往分寸或工作调动引发争端。',
      clashRiskEn: 'Clashing with Hai (Pig): Fire-water conflict over boundary ambiguity in social networks or disruptive career reassignments.',
      adviceZh: '【婚姻护持锦囊】：尊重配偶社交自由的同时树立明确原则底线，遇急躁事“缓三秒再开口”，以幽默消融火气。',
      adviceEn: '【Matrimonial Cultivation】: Balance social freedom with explicit fidelity boundaries; practice the 3-second breathing rule to disarm heated arguments.'
    },
    '午': {
      element: '火',
      archetypeZh: '光芒耀目真率型',
      archetypeEn: 'Radiant, Passionate & Forthright Sovereign',
      traitsZh: '配偶性格开朗大方，敢爱敢恨，极富感染力与个人魅力。凡事光明磊落，重情重义；但脾气来得快去得快，受不得冷落与委屈。',
      traitsEn: 'Consort is vivacious, warmhearted, candid, and dynamic. Loves wholeheartedly and values transparency; impatient with ambiguities or emotional neglect.',
      clashRiskZh: '遇子年冲（子午相冲）：极烈之冲，防情绪失控爆发剧烈争吵，或因子女观念、经济分配瞬间掀起风暴。',
      clashRiskEn: 'Clashing with Zi (Rat): Fierce confrontation triggered by sudden emotional outbursts, child-rearing debates, or abrupt spending differences.',
      adviceZh: '【婚姻护持锦囊】：在对方情绪上头时切勿针锋相对，多用拥抱与真诚夸赞肯定其付出，待火气消退再理智沟通。',
      adviceEn: '【Matrimonial Cultivation】: Never engage head-on during emotional crests; defuse tension with physical affection and appreciation, addressing logic only after calm returns.'
    },
    '未': {
      element: '土',
      archetypeZh: '温良慈和奉献型',
      archetypeEn: 'Gentle, Dutiful & Patient Guardian',
      traitsZh: '配偶性格温厚纯良，任劳任怨，对家庭照料无微不至。兼具艺术修养与生活巧思；但容易把委屈憋在心里，长期隐忍后偶有爆发。',
      traitsEn: 'Consort is sweet-tempered, devoted, highly domestic, and artistic. Patiently bears household burdens; prone to repressing silent grievances until sudden saturation.',
      clashRiskZh: '遇丑年冲（丑未相冲）：土气相冲，易因婆媳长辈关系复杂或家庭重大开支出现隐性冷战与心理隔阂。',
      clashRiskEn: 'Clashing with Chou (Ox): Simmering domestic cold wars over extended in-law dynamics or unbudgeted major expenditures.',
      adviceZh: '【婚姻护持锦囊】：敏锐觉察配偶未说出口的委屈与疲惫，主动替其分担家务与心理压力，营造松弛有爱的倾诉空间。',
      adviceEn: '【Matrimonial Cultivation】: Attune to their unspoken exhaustion; proactively share caregiving duties; offer an unconditionally supportive sanctuary for emotional release.'
    },
    '申': {
      element: '金',
      archetypeZh: '机敏果敢决断型',
      archetypeEn: 'Astute, Resolute & Strategic Realist',
      traitsZh: '配偶头脑极其清醒，办事效率极高，兼具法律规则意识与商业判断力。能独当一面解决复杂棘手问题；但有时言辞略显犀利理智过头。',
      traitsEn: 'Consort is exceptionally sharp, efficient, contractually minded, and pragmatic. A master troubleshooter, though at times overly analytical in emotional spheres.',
      clashRiskZh: '遇寅年冲（寅申相冲）：驿马相逢，差旅两地分居增加，防因各忙各的事业而导致情感浓度降温疏离。',
      clashRiskEn: 'Clashing with Yin (Tiger): Dual traveling horses causing frequent career separations; risk of emotional cooling amid frantic professional sprints.',
      adviceZh: '【婚姻护持锦囊】：家是讲爱而不是讲理的地方；多展现脆弱与温情一面，共同设立“无手机/无工作”的家庭温情日。',
      adviceEn: '【Matrimonial Cultivation】: Remember the home is governed by affection rather than courtroom logic; display vulnerable tenderness; institute weekly distraction-free tech blackouts.'
    },
    '酉': {
      element: '金',
      archetypeZh: '清秀端庄精致型',
      archetypeEn: 'Refined, Meticulous & Aesthetic Connoisseur',
      traitsZh: '配偶容貌多端庄清秀，审美眼光挑剔，极度重视生活品质与个人仪态。做事追求完美细节，守时重诺；但骨子里清高自负，容不得粗鄙。',
      traitsEn: 'Consort is graceful, aesthetically impeccable, punctual, and highly organized. Seeks absolute perfection in domestic details; highly sensitive to vulgarity or carelessness.',
      clashRiskZh: '遇卯年冲（卯酉相冲）：门户相战，防因生活琐事挑剔、审美生活习惯分歧或外部异性人际引发猜忌口角。',
      clashRiskEn: 'Clashing with Mao (Rabbit): Intense disputes over aesthetic details, micro-habits, or external social jealousy.',
      adviceZh: '【婚姻护持锦囊】：注重个人外在形象管理与生活细节品位，用仪式感与尊重呵护配偶，学会对不完美多一份从容包容。',
      adviceEn: '【Matrimonial Cultivation】: Honor their high aesthetic standards; show continuous chivalrous respect; gently encourage acceptance of everyday imperfections.'
    },
    '戌': {
      element: '土',
      archetypeZh: '忠厚仗义护短型',
      archetypeEn: 'Loyal, Steadfast & Protective Stalwart',
      traitsZh: '配偶忠诚耿直，极具大局观与家庭保护欲，对外护短对内负责。是危难关头最值得托付后背的生死伴侣；但脾气偶有固执急躁。',
      traitsEn: 'Consort is intensely loyal, fiercely protective, honorable, and unshakeable. The ultimate life ally in adversity, though occasionally stubborn and dogmatic.',
      clashRiskZh: '遇辰年冲（辰戌相冲）：天罗地网，防因亲朋好友经济纠纷、借贷作保或房产置业引发家庭风波。',
      clashRiskEn: 'Clashing with Chen (Dragon): Strains caused by relative financial entanglements, debt guarantees, or property disputes.',
      adviceZh: '【婚姻护持锦囊】：坚决划定小家庭与原生亲朋的财务边界，遇事不瞒不欺，以诚意换取配偶百分百的信任支持。',
      adviceEn: '【Matrimonial Cultivation】: Build an ironclad financial boundary protecting the nuclear household; practice absolute radical transparency.'
    },
    '亥': {
      element: '水',
      archetypeZh: '豁达乐天智慧型',
      archetypeEn: 'Magnanimous, Affectionate & Wise Free-Spirit',
      traitsZh: '亥为天门，配偶心胸宽广豁达，幽默风趣，富有极高的生活智慧与包容心。能轻松化解家庭焦虑，但有时生活习惯略显随性松散。',
      traitsEn: 'Hai is the Heavenly Gate: Consort is magnanimous, optimistic, witty, and spiritually grounded. Effortlessly diffuses domestic anxiety, though occasionally unstructured.',
      clashRiskZh: '遇巳年冲（巳亥相冲）：易因差旅频繁奔波导致聚少离多，或因消费理财习惯过于随性而引发矛盾。',
      clashRiskEn: 'Clashing with Si (Snake): Heavy business travels disrupting family routines, or overly casual spending triggering domestic friction.',
      adviceZh: '【婚姻护持锦囊】：共同培养高雅爱好与旅行探索，互相督促健康作息，在松弛与自律之间找到家庭最佳平衡点。',
      adviceEn: '【Matrimonial Cultivation】: Co-explore travel and spiritual arts; support mutual health routines; balance carefree joy with structured rhythm.'
    }
  }
,
  // 60 JiaZi Day Pillar Matrimonial Specifics,
  // 60 JiaZi Day Pillar Matrimonial Specifics
  dayPillarProfiles: {
  "甲子": {
    "archetypeZh": "甲坐子 · 印星所钟【涵养知性型】",
    "archetypeEn": "Jia Zi Archetype (Jia on Zi) · Auspicious Qi Dynamic",
    "traitsZh": "日柱【甲子】：日元甲（阳木）坐子（水）。配偶具备涵养知性，慈爱生扶之特质，做事有主见且极具家庭责任感。双方性格优势互补，在生活中既能同享富贵，亦能在关键时刻共克时艰。",
    "traitsEn": "Day Pillar [Jia Zi]: Native Jia sits on Zi (Water). Consort embodies deep reliability, strategic competence, and mutual loyalty, balancing personal ambition with affectionate domestic stability.",
    "adviceZh": "【甲子日柱婚姻指南】：珍惜配偶的付出，多进行高质量的情感沟通与共同理财规划；遇意见相左时以柔克刚，切忌因固执硬顶而生嫌隙。",
    "adviceEn": "[Matrimonial Advice for Jia Zi]: Value consort contributions through proactive praise; cultivate transparent mutual financial governance; replace dogmatic arguments with gentle compromise."
  },
  "乙丑": {
    "archetypeZh": "乙坐丑 · 财星所钟【厚重务实型】",
    "archetypeEn": "Yi Chou Archetype (Yi on Chou) · Wealth Star Dynamic",
    "traitsZh": "日柱【乙丑】：日元乙（阴木）坐丑（土）。配偶具备厚重务实，善聚商财之特质，做事有主见且极具家庭责任感。双方性格优势互补，在生活中既能同享富贵，亦能在关键时刻共克时艰。",
    "traitsEn": "Day Pillar [Yi Chou]: Native Yi sits on Chou (Earth). Consort embodies deep reliability, strategic competence, and mutual loyalty, balancing personal ambition with affectionate domestic stability.",
    "adviceZh": "【乙丑日柱婚姻指南】：珍惜配偶的付出，多进行高质量的情感沟通与共同理财规划；遇意见相左时以柔克刚，切忌因固执硬顶而生嫌隙。",
    "adviceEn": "[Matrimonial Advice for Yi Chou]: Value consort contributions through proactive praise; cultivate transparent mutual financial governance; replace dogmatic arguments with gentle compromise."
  },
  "丙寅": {
    "archetypeZh": "丙坐寅 · 印星所钟【学养高深型】",
    "archetypeEn": "Bing Yin Archetype (Bing on Yin) · Auspicious Qi Dynamic",
    "traitsZh": "日柱【丙寅】：日元丙（阳火）坐寅（木）。配偶具备学养高深，长生贵气之特质，做事有主见且极具家庭责任感。双方性格优势互补，在生活中既能同享富贵，亦能在关键时刻共克时艰。",
    "traitsEn": "Day Pillar [Bing Yin]: Native Bing sits on Yin (Wood). Consort embodies deep reliability, strategic competence, and mutual loyalty, balancing personal ambition with affectionate domestic stability.",
    "adviceZh": "【丙寅日柱婚姻指南】：珍惜配偶的付出，多进行高质量的情感沟通与共同理财规划；遇意见相左时以柔克刚，切忌因固执硬顶而生嫌隙。",
    "adviceEn": "[Matrimonial Advice for Bing Yin]: Value consort contributions through proactive praise; cultivate transparent mutual financial governance; replace dogmatic arguments with gentle compromise."
  },
  "丁卯": {
    "archetypeZh": "丁坐卯 · 印星所钟【学养高深型】",
    "archetypeEn": "Ding Mao Archetype (Ding on Mao) · Auspicious Qi Dynamic",
    "traitsZh": "日柱【丁卯】：日元丁（阴火）坐卯（木）。配偶具备学养高深，长生贵气之特质，做事有主见且极具家庭责任感。双方性格优势互补，在生活中既能同享富贵，亦能在关键时刻共克时艰。",
    "traitsEn": "Day Pillar [Ding Mao]: Native Ding sits on Mao (Wood). Consort embodies deep reliability, strategic competence, and mutual loyalty, balancing personal ambition with affectionate domestic stability.",
    "adviceZh": "【丁卯日柱婚姻指南】：珍惜配偶的付出，多进行高质量的情感沟通与共同理财规划；遇意见相左时以柔克刚，切忌因固执硬顶而生嫌隙。",
    "adviceEn": "[Matrimonial Advice for Ding Mao]: Value consort contributions through proactive praise; cultivate transparent mutual financial governance; replace dogmatic arguments with gentle compromise."
  },
  "戊辰": {
    "archetypeZh": "戊坐辰 · 比劫所钟【淳朴厚重型】",
    "archetypeEn": "Wu Chen Archetype (Wu on Chen) · Auspicious Qi Dynamic",
    "traitsZh": "日柱【戊辰】：日元戊（阳土）坐辰（土）。配偶具备淳朴厚重，坚定守信之特质，做事有主见且极具家庭责任感。双方性格优势互补，在生活中既能同享富贵，亦能在关键时刻共克时艰。",
    "traitsEn": "Day Pillar [Wu Chen]: Native Wu sits on Chen (Earth). Consort embodies deep reliability, strategic competence, and mutual loyalty, balancing personal ambition with affectionate domestic stability.",
    "adviceZh": "【戊辰日柱婚姻指南】：珍惜配偶的付出，多进行高质量的情感沟通与共同理财规划；遇意见相左时以柔克刚，切忌因固执硬顶而生嫌隙。",
    "adviceEn": "[Matrimonial Advice for Wu Chen]: Value consort contributions through proactive praise; cultivate transparent mutual financial governance; replace dogmatic arguments with gentle compromise."
  },
  "己巳": {
    "archetypeZh": "己坐巳 · 印星所钟【慈厚长者型】",
    "archetypeEn": "Ji Si Archetype (Ji on Si) · Auspicious Qi Dynamic",
    "traitsZh": "日柱【己巳】：日元己（阴土）坐巳（火）。配偶具备慈厚长者，福寿绵长之特质，做事有主见且极具家庭责任感。双方性格优势互补，在生活中既能同享富贵，亦能在关键时刻共克时艰。",
    "traitsEn": "Day Pillar [Ji Si]: Native Ji sits on Si (Fire). Consort embodies deep reliability, strategic competence, and mutual loyalty, balancing personal ambition with affectionate domestic stability.",
    "adviceZh": "【己巳日柱婚姻指南】：珍惜配偶的付出，多进行高质量的情感沟通与共同理财规划；遇意见相左时以柔克刚，切忌因固执硬顶而生嫌隙。",
    "adviceEn": "[Matrimonial Advice for Ji Si]: Value consort contributions through proactive praise; cultivate transparent mutual financial governance; replace dogmatic arguments with gentle compromise."
  },
  "庚午": {
    "archetypeZh": "庚坐午 · 官杀所钟【仪态威严型】",
    "archetypeEn": "Geng Wu Archetype (Geng on Wu) · Officer Star Dynamic",
    "traitsZh": "日柱【庚午】：日元庚（阳金）坐午（火）。配偶具备仪态威严，尊崇显贵之特质，做事有主见且极具家庭责任感。双方性格优势互补，在生活中既能同享富贵，亦能在关键时刻共克时艰。",
    "traitsEn": "Day Pillar [Geng Wu]: Native Geng sits on Wu (Fire). Consort embodies deep reliability, strategic competence, and mutual loyalty, balancing personal ambition with affectionate domestic stability.",
    "adviceZh": "【庚午日柱婚姻指南】：珍惜配偶的付出，多进行高质量的情感沟通与共同理财规划；遇意见相左时以柔克刚，切忌因固执硬顶而生嫌隙。",
    "adviceEn": "[Matrimonial Advice for Geng Wu]: Value consort contributions through proactive praise; cultivate transparent mutual financial governance; replace dogmatic arguments with gentle compromise."
  },
  "辛未": {
    "archetypeZh": "辛坐未 · 印星所钟【沉静深思型】",
    "archetypeEn": "Xin Wei Archetype (Xin on Wei) · Auspicious Qi Dynamic",
    "traitsZh": "日柱【辛未】：日元辛（阴金）坐未（土）。配偶具备沉静深思，深厚稳健之特质，做事有主见且极具家庭责任感。双方性格优势互补，在生活中既能同享富贵，亦能在关键时刻共克时艰。",
    "traitsEn": "Day Pillar [Xin Wei]: Native Xin sits on Wei (Earth). Consort embodies deep reliability, strategic competence, and mutual loyalty, balancing personal ambition with affectionate domestic stability.",
    "adviceZh": "【辛未日柱婚姻指南】：珍惜配偶的付出，多进行高质量的情感沟通与共同理财规划；遇意见相左时以柔克刚，切忌因固执硬顶而生嫌隙。",
    "adviceEn": "[Matrimonial Advice for Xin Wei]: Value consort contributions through proactive praise; cultivate transparent mutual financial governance; replace dogmatic arguments with gentle compromise."
  },
  "壬申": {
    "archetypeZh": "壬坐申 · 印星所钟【博雅通达型】",
    "archetypeEn": "Ren Shen Archetype (Ren on Shen) · Auspicious Qi Dynamic",
    "traitsZh": "日柱【壬申】：日元壬（阳水）坐申（金）。配偶具备博雅通达，智识渊深之特质，做事有主见且极具家庭责任感。双方性格优势互补，在生活中既能同享富贵，亦能在关键时刻共克时艰。",
    "traitsEn": "Day Pillar [Ren Shen]: Native Ren sits on Shen (Metal). Consort embodies deep reliability, strategic competence, and mutual loyalty, balancing personal ambition with affectionate domestic stability.",
    "adviceZh": "【壬申日柱婚姻指南】：珍惜配偶的付出，多进行高质量的情感沟通与共同理财规划；遇意见相左时以柔克刚，切忌因固执硬顶而生嫌隙。",
    "adviceEn": "[Matrimonial Advice for Ren Shen]: Value consort contributions through proactive praise; cultivate transparent mutual financial governance; replace dogmatic arguments with gentle compromise."
  },
  "癸酉": {
    "archetypeZh": "癸坐酉 · 印星所钟【博雅通达型】",
    "archetypeEn": "Gui You Archetype (Gui on You) · Auspicious Qi Dynamic",
    "traitsZh": "日柱【癸酉】：日元癸（阴水）坐酉（金）。配偶具备博雅通达，智识渊深之特质，做事有主见且极具家庭责任感。双方性格优势互补，在生活中既能同享富贵，亦能在关键时刻共克时艰。",
    "traitsEn": "Day Pillar [Gui You]: Native Gui sits on You (Metal). Consort embodies deep reliability, strategic competence, and mutual loyalty, balancing personal ambition with affectionate domestic stability.",
    "adviceZh": "【癸酉日柱婚姻指南】：珍惜配偶的付出，多进行高质量的情感沟通与共同理财规划；遇意见相左时以柔克刚，切忌因固执硬顶而生嫌隙。",
    "adviceEn": "[Matrimonial Advice for Gui You]: Value consort contributions through proactive praise; cultivate transparent mutual financial governance; replace dogmatic arguments with gentle compromise."
  },
  "甲戌": {
    "archetypeZh": "甲坐戌 · 财星所钟【厚重务实型】",
    "archetypeEn": "Jia Xu Archetype (Jia on Xu) · Wealth Star Dynamic",
    "traitsZh": "日柱【甲戌】：日元甲（阳木）坐戌（土）。配偶具备厚重务实，善聚商财之特质，做事有主见且极具家庭责任感。双方性格优势互补，在生活中既能同享富贵，亦能在关键时刻共克时艰。",
    "traitsEn": "Day Pillar [Jia Xu]: Native Jia sits on Xu (Earth). Consort embodies deep reliability, strategic competence, and mutual loyalty, balancing personal ambition with affectionate domestic stability.",
    "adviceZh": "【甲戌日柱婚姻指南】：珍惜配偶的付出，多进行高质量的情感沟通与共同理财规划；遇意见相左时以柔克刚，切忌因固执硬顶而生嫌隙。",
    "adviceEn": "[Matrimonial Advice for Jia Xu]: Value consort contributions through proactive praise; cultivate transparent mutual financial governance; replace dogmatic arguments with gentle compromise."
  },
  "乙亥": {
    "archetypeZh": "乙坐亥 · 印星所钟【涵养知性型】",
    "archetypeEn": "Yi Hai Archetype (Yi on Hai) · Auspicious Qi Dynamic",
    "traitsZh": "日柱【乙亥】：日元乙（阴木）坐亥（水）。配偶具备涵养知性，慈爱生扶之特质，做事有主见且极具家庭责任感。双方性格优势互补，在生活中既能同享富贵，亦能在关键时刻共克时艰。",
    "traitsEn": "Day Pillar [Yi Hai]: Native Yi sits on Hai (Water). Consort embodies deep reliability, strategic competence, and mutual loyalty, balancing personal ambition with affectionate domestic stability.",
    "adviceZh": "【乙亥日柱婚姻指南】：珍惜配偶的付出，多进行高质量的情感沟通与共同理财规划；遇意见相左时以柔克刚，切忌因固执硬顶而生嫌隙。",
    "adviceEn": "[Matrimonial Advice for Yi Hai]: Value consort contributions through proactive praise; cultivate transparent mutual financial governance; replace dogmatic arguments with gentle compromise."
  },
  "丙子": {
    "archetypeZh": "丙坐子 · 官杀所钟【端庄公信型】",
    "archetypeEn": "Bing Zi Archetype (Bing on Zi) · Officer Star Dynamic",
    "traitsZh": "日柱【丙子】：日元丙（阳火）坐子（水）。配偶具备端庄公信，相敬如宾之特质，做事有主见且极具家庭责任感。双方性格优势互补，在生活中既能同享富贵，亦能在关键时刻共克时艰。",
    "traitsEn": "Day Pillar [Bing Zi]: Native Bing sits on Zi (Water). Consort embodies deep reliability, strategic competence, and mutual loyalty, balancing personal ambition with affectionate domestic stability.",
    "adviceZh": "【丙子日柱婚姻指南】：珍惜配偶的付出，多进行高质量的情感沟通与共同理财规划；遇意见相左时以柔克刚，切忌因固执硬顶而生嫌隙。",
    "adviceEn": "[Matrimonial Advice for Bing Zi]: Value consort contributions through proactive praise; cultivate transparent mutual financial governance; replace dogmatic arguments with gentle compromise."
  },
  "丁丑": {
    "archetypeZh": "丁坐丑 · 食伤所钟【包容博雅型】",
    "archetypeEn": "Ding Chou Archetype (Ding on Chou) · Auspicious Qi Dynamic",
    "traitsZh": "日柱【丁丑】：日元丁（阴火）坐丑（土）。配偶具备包容博雅，生活美学之特质，做事有主见且极具家庭责任感。双方性格优势互补，在生活中既能同享富贵，亦能在关键时刻共克时艰。",
    "traitsEn": "Day Pillar [Ding Chou]: Native Ding sits on Chou (Earth). Consort embodies deep reliability, strategic competence, and mutual loyalty, balancing personal ambition with affectionate domestic stability.",
    "adviceZh": "【丁丑日柱婚姻指南】：珍惜配偶的付出，多进行高质量的情感沟通与共同理财规划；遇意见相左时以柔克刚，切忌因固执硬顶而生嫌隙。",
    "adviceEn": "[Matrimonial Advice for Ding Chou]: Value consort contributions through proactive praise; cultivate transparent mutual financial governance; replace dogmatic arguments with gentle compromise."
  },
  "戊寅": {
    "archetypeZh": "戊坐寅 · 官杀所钟【威严担当型】",
    "archetypeEn": "Wu Yin Archetype (Wu on Yin) · Officer Star Dynamic",
    "traitsZh": "日柱【戊寅】：日元戊（阳土）坐寅（木）。配偶具备威严担当，事业领军之特质，做事有主见且极具家庭责任感。双方性格优势互补，在生活中既能同享富贵，亦能在关键时刻共克时艰。",
    "traitsEn": "Day Pillar [Wu Yin]: Native Wu sits on Yin (Wood). Consort embodies deep reliability, strategic competence, and mutual loyalty, balancing personal ambition with affectionate domestic stability.",
    "adviceZh": "【戊寅日柱婚姻指南】：珍惜配偶的付出，多进行高质量的情感沟通与共同理财规划；遇意见相左时以柔克刚，切忌因固执硬顶而生嫌隙。",
    "adviceEn": "[Matrimonial Advice for Wu Yin]: Value consort contributions through proactive praise; cultivate transparent mutual financial governance; replace dogmatic arguments with gentle compromise."
  },
  "己卯": {
    "archetypeZh": "己坐卯 · 官杀所钟【威严担当型】",
    "archetypeEn": "Ji Mao Archetype (Ji on Mao) · Officer Star Dynamic",
    "traitsZh": "日柱【己卯】：日元己（阴土）坐卯（木）。配偶具备威严担当，事业领军之特质，做事有主见且极具家庭责任感。双方性格优势互补，在生活中既能同享富贵，亦能在关键时刻共克时艰。",
    "traitsEn": "Day Pillar [Ji Mao]: Native Ji sits on Mao (Wood). Consort embodies deep reliability, strategic competence, and mutual loyalty, balancing personal ambition with affectionate domestic stability.",
    "adviceZh": "【己卯日柱婚姻指南】：珍惜配偶的付出，多进行高质量的情感沟通与共同理财规划；遇意见相左时以柔克刚，切忌因固执硬顶而生嫌隙。",
    "adviceEn": "[Matrimonial Advice for Ji Mao]: Value consort contributions through proactive praise; cultivate transparent mutual financial governance; replace dogmatic arguments with gentle compromise."
  },
  "庚辰": {
    "archetypeZh": "庚坐辰 · 印星所钟【沉静深思型】",
    "archetypeEn": "Geng Chen Archetype (Geng on Chen) · Auspicious Qi Dynamic",
    "traitsZh": "日柱【庚辰】：日元庚（阳金）坐辰（土）。配偶具备沉静深思，深厚稳健之特质，做事有主见且极具家庭责任感。双方性格优势互补，在生活中既能同享富贵，亦能在关键时刻共克时艰。",
    "traitsEn": "Day Pillar [Geng Chen]: Native Geng sits on Chen (Earth). Consort embodies deep reliability, strategic competence, and mutual loyalty, balancing personal ambition with affectionate domestic stability.",
    "adviceZh": "【庚辰日柱婚姻指南】：珍惜配偶的付出，多进行高质量的情感沟通与共同理财规划；遇意见相左时以柔克刚，切忌因固执硬顶而生嫌隙。",
    "adviceEn": "[Matrimonial Advice for Geng Chen]: Value consort contributions through proactive praise; cultivate transparent mutual financial governance; replace dogmatic arguments with gentle compromise."
  },
  "辛巳": {
    "archetypeZh": "辛坐巳 · 官杀所钟【仪态威严型】",
    "archetypeEn": "Xin Si Archetype (Xin on Si) · Officer Star Dynamic",
    "traitsZh": "日柱【辛巳】：日元辛（阴金）坐巳（火）。配偶具备仪态威严，尊崇显贵之特质，做事有主见且极具家庭责任感。双方性格优势互补，在生活中既能同享富贵，亦能在关键时刻共克时艰。",
    "traitsEn": "Day Pillar [Xin Si]: Native Xin sits on Si (Fire). Consort embodies deep reliability, strategic competence, and mutual loyalty, balancing personal ambition with affectionate domestic stability.",
    "adviceZh": "【辛巳日柱婚姻指南】：珍惜配偶的付出，多进行高质量的情感沟通与共同理财规划；遇意见相左时以柔克刚，切忌因固执硬顶而生嫌隙。",
    "adviceEn": "[Matrimonial Advice for Xin Si]: Value consort contributions through proactive praise; cultivate transparent mutual financial governance; replace dogmatic arguments with gentle compromise."
  },
  "壬午": {
    "archetypeZh": "壬坐午 · 财星所钟【既济温良型】",
    "archetypeEn": "Ren Wu Archetype (Ren on Wu) · Wealth Star Dynamic",
    "traitsZh": "日柱【壬午】：日元壬（阳水）坐午（火）。配偶具备既济温良，荣华富足之特质，做事有主见且极具家庭责任感。双方性格优势互补，在生活中既能同享富贵，亦能在关键时刻共克时艰。",
    "traitsEn": "Day Pillar [Ren Wu]: Native Ren sits on Wu (Fire). Consort embodies deep reliability, strategic competence, and mutual loyalty, balancing personal ambition with affectionate domestic stability.",
    "adviceZh": "【壬午日柱婚姻指南】：珍惜配偶的付出，多进行高质量的情感沟通与共同理财规划；遇意见相左时以柔克刚，切忌因固执硬顶而生嫌隙。",
    "adviceEn": "[Matrimonial Advice for Ren Wu]: Value consort contributions through proactive praise; cultivate transparent mutual financial governance; replace dogmatic arguments with gentle compromise."
  },
  "癸未": {
    "archetypeZh": "癸坐未 · 官杀所钟【大局深稳型】",
    "archetypeEn": "Gui Wei Archetype (Gui on Wei) · Officer Star Dynamic",
    "traitsZh": "日柱【癸未】：日元癸（阴水）坐未（土）。配偶具备大局深稳，威权统摄之特质，做事有主见且极具家庭责任感。双方性格优势互补，在生活中既能同享富贵，亦能在关键时刻共克时艰。",
    "traitsEn": "Day Pillar [Gui Wei]: Native Gui sits on Wei (Earth). Consort embodies deep reliability, strategic competence, and mutual loyalty, balancing personal ambition with affectionate domestic stability.",
    "adviceZh": "【癸未日柱婚姻指南】：珍惜配偶的付出，多进行高质量的情感沟通与共同理财规划；遇意见相左时以柔克刚，切忌因固执硬顶而生嫌隙。",
    "adviceEn": "[Matrimonial Advice for Gui Wei]: Value consort contributions through proactive praise; cultivate transparent mutual financial governance; replace dogmatic arguments with gentle compromise."
  },
  "甲申": {
    "archetypeZh": "甲坐申 · 官杀所钟【规矩严谨型】",
    "archetypeEn": "Jia Shen Archetype (Jia on Shen) · Officer Star Dynamic",
    "traitsZh": "日柱【甲申】：日元甲（阳木）坐申（金）。配偶具备规矩严谨，威严自律之特质，做事有主见且极具家庭责任感。双方性格优势互补，在生活中既能同享富贵，亦能在关键时刻共克时艰。",
    "traitsEn": "Day Pillar [Jia Shen]: Native Jia sits on Shen (Metal). Consort embodies deep reliability, strategic competence, and mutual loyalty, balancing personal ambition with affectionate domestic stability.",
    "adviceZh": "【甲申日柱婚姻指南】：珍惜配偶的付出，多进行高质量的情感沟通与共同理财规划；遇意见相左时以柔克刚，切忌因固执硬顶而生嫌隙。",
    "adviceEn": "[Matrimonial Advice for Jia Shen]: Value consort contributions through proactive praise; cultivate transparent mutual financial governance; replace dogmatic arguments with gentle compromise."
  },
  "乙酉": {
    "archetypeZh": "乙坐酉 · 官杀所钟【规矩严谨型】",
    "archetypeEn": "Yi You Archetype (Yi on You) · Officer Star Dynamic",
    "traitsZh": "日柱【乙酉】：日元乙（阴木）坐酉（金）。配偶具备规矩严谨，威严自律之特质，做事有主见且极具家庭责任感。双方性格优势互补，在生活中既能同享富贵，亦能在关键时刻共克时艰。",
    "traitsEn": "Day Pillar [Yi You]: Native Yi sits on You (Metal). Consort embodies deep reliability, strategic competence, and mutual loyalty, balancing personal ambition with affectionate domestic stability.",
    "adviceZh": "【乙酉日柱婚姻指南】：珍惜配偶的付出，多进行高质量的情感沟通与共同理财规划；遇意见相左时以柔克刚，切忌因固执硬顶而生嫌隙。",
    "adviceEn": "[Matrimonial Advice for Yi You]: Value consort contributions through proactive praise; cultivate transparent mutual financial governance; replace dogmatic arguments with gentle compromise."
  },
  "丙戌": {
    "archetypeZh": "丙坐戌 · 食伤所钟【包容博雅型】",
    "archetypeEn": "Bing Xu Archetype (Bing on Xu) · Auspicious Qi Dynamic",
    "traitsZh": "日柱【丙戌】：日元丙（阳火）坐戌（土）。配偶具备包容博雅，生活美学之特质，做事有主见且极具家庭责任感。双方性格优势互补，在生活中既能同享富贵，亦能在关键时刻共克时艰。",
    "traitsEn": "Day Pillar [Bing Xu]: Native Bing sits on Xu (Earth). Consort embodies deep reliability, strategic competence, and mutual loyalty, balancing personal ambition with affectionate domestic stability.",
    "adviceZh": "【丙戌日柱婚姻指南】：珍惜配偶的付出，多进行高质量的情感沟通与共同理财规划；遇意见相左时以柔克刚，切忌因固执硬顶而生嫌隙。",
    "adviceEn": "[Matrimonial Advice for Bing Xu]: Value consort contributions through proactive praise; cultivate transparent mutual financial governance; replace dogmatic arguments with gentle compromise."
  },
  "丁亥": {
    "archetypeZh": "丁坐亥 · 官杀所钟【端庄公信型】",
    "archetypeEn": "Ding Hai Archetype (Ding on Hai) · Officer Star Dynamic",
    "traitsZh": "日柱【丁亥】：日元丁（阴火）坐亥（水）。配偶具备端庄公信，相敬如宾之特质，做事有主见且极具家庭责任感。双方性格优势互补，在生活中既能同享富贵，亦能在关键时刻共克时艰。",
    "traitsEn": "Day Pillar [Ding Hai]: Native Ding sits on Hai (Water). Consort embodies deep reliability, strategic competence, and mutual loyalty, balancing personal ambition with affectionate domestic stability.",
    "adviceZh": "【丁亥日柱婚姻指南】：珍惜配偶的付出，多进行高质量的情感沟通与共同理财规划；遇意见相左时以柔克刚，切忌因固执硬顶而生嫌隙。",
    "adviceEn": "[Matrimonial Advice for Ding Hai]: Value consort contributions through proactive praise; cultivate transparent mutual financial governance; replace dogmatic arguments with gentle compromise."
  },
  "戊子": {
    "archetypeZh": "戊坐子 · 财星所钟【暗合聚富型】",
    "archetypeEn": "Wu Zi Archetype (Wu on Zi) · Wealth Star Dynamic",
    "traitsZh": "日柱【戊子】：日元戊（阳土）坐子（水）。配偶具备暗合聚富，商财殷实之特质，做事有主见且极具家庭责任感。双方性格优势互补，在生活中既能同享富贵，亦能在关键时刻共克时艰。",
    "traitsEn": "Day Pillar [Wu Zi]: Native Wu sits on Zi (Water). Consort embodies deep reliability, strategic competence, and mutual loyalty, balancing personal ambition with affectionate domestic stability.",
    "adviceZh": "【戊子日柱婚姻指南】：珍惜配偶的付出，多进行高质量的情感沟通与共同理财规划；遇意见相左时以柔克刚，切忌因固执硬顶而生嫌隙。",
    "adviceEn": "[Matrimonial Advice for Wu Zi]: Value consort contributions through proactive praise; cultivate transparent mutual financial governance; replace dogmatic arguments with gentle compromise."
  },
  "己丑": {
    "archetypeZh": "己坐丑 · 比劫所钟【淳朴厚重型】",
    "archetypeEn": "Ji Chou Archetype (Ji on Chou) · Auspicious Qi Dynamic",
    "traitsZh": "日柱【己丑】：日元己（阴土）坐丑（土）。配偶具备淳朴厚重，坚定守信之特质，做事有主见且极具家庭责任感。双方性格优势互补，在生活中既能同享富贵，亦能在关键时刻共克时艰。",
    "traitsEn": "Day Pillar [Ji Chou]: Native Ji sits on Chou (Earth). Consort embodies deep reliability, strategic competence, and mutual loyalty, balancing personal ambition with affectionate domestic stability.",
    "adviceZh": "【己丑日柱婚姻指南】：珍惜配偶的付出，多进行高质量的情感沟通与共同理财规划；遇意见相左时以柔克刚，切忌因固执硬顶而生嫌隙。",
    "adviceEn": "[Matrimonial Advice for Ji Chou]: Value consort contributions through proactive praise; cultivate transparent mutual financial governance; replace dogmatic arguments with gentle compromise."
  },
  "庚寅": {
    "archetypeZh": "庚坐寅 · 财星所钟【商业机敏型】",
    "archetypeEn": "Geng Yin Archetype (Geng on Yin) · Wealth Star Dynamic",
    "traitsZh": "日柱【庚寅】：日元庚（阳金）坐寅（木）。配偶具备商业机敏，敢作敢为之特质，做事有主见且极具家庭责任感。双方性格优势互补，在生活中既能同享富贵，亦能在关键时刻共克时艰。",
    "traitsEn": "Day Pillar [Geng Yin]: Native Geng sits on Yin (Wood). Consort embodies deep reliability, strategic competence, and mutual loyalty, balancing personal ambition with affectionate domestic stability.",
    "adviceZh": "【庚寅日柱婚姻指南】：珍惜配偶的付出，多进行高质量的情感沟通与共同理财规划；遇意见相左时以柔克刚，切忌因固执硬顶而生嫌隙。",
    "adviceEn": "[Matrimonial Advice for Geng Yin]: Value consort contributions through proactive praise; cultivate transparent mutual financial governance; replace dogmatic arguments with gentle compromise."
  },
  "辛卯": {
    "archetypeZh": "辛坐卯 · 财星所钟【商业机敏型】",
    "archetypeEn": "Xin Mao Archetype (Xin on Mao) · Wealth Star Dynamic",
    "traitsZh": "日柱【辛卯】：日元辛（阴金）坐卯（木）。配偶具备商业机敏，敢作敢为之特质，做事有主见且极具家庭责任感。双方性格优势互补，在生活中既能同享富贵，亦能在关键时刻共克时艰。",
    "traitsEn": "Day Pillar [Xin Mao]: Native Xin sits on Mao (Wood). Consort embodies deep reliability, strategic competence, and mutual loyalty, balancing personal ambition with affectionate domestic stability.",
    "adviceZh": "【辛卯日柱婚姻指南】：珍惜配偶的付出，多进行高质量的情感沟通与共同理财规划；遇意见相左时以柔克刚，切忌因固执硬顶而生嫌隙。",
    "adviceEn": "[Matrimonial Advice for Xin Mao]: Value consort contributions through proactive praise; cultivate transparent mutual financial governance; replace dogmatic arguments with gentle compromise."
  },
  "壬辰": {
    "archetypeZh": "壬坐辰 · 官杀所钟【大局深稳型】",
    "archetypeEn": "Ren Chen Archetype (Ren on Chen) · Officer Star Dynamic",
    "traitsZh": "日柱【壬辰】：日元壬（阳水）坐辰（土）。配偶具备大局深稳，威权统摄之特质，做事有主见且极具家庭责任感。双方性格优势互补，在生活中既能同享富贵，亦能在关键时刻共克时艰。",
    "traitsEn": "Day Pillar [Ren Chen]: Native Ren sits on Chen (Earth). Consort embodies deep reliability, strategic competence, and mutual loyalty, balancing personal ambition with affectionate domestic stability.",
    "adviceZh": "【壬辰日柱婚姻指南】：珍惜配偶的付出，多进行高质量的情感沟通与共同理财规划；遇意见相左时以柔克刚，切忌因固执硬顶而生嫌隙。",
    "adviceEn": "[Matrimonial Advice for Ren Chen]: Value consort contributions through proactive praise; cultivate transparent mutual financial governance; replace dogmatic arguments with gentle compromise."
  },
  "癸巳": {
    "archetypeZh": "癸坐巳 · 财星所钟【既济温良型】",
    "archetypeEn": "Gui Si Archetype (Gui on Si) · Wealth Star Dynamic",
    "traitsZh": "日柱【癸巳】：日元癸（阴水）坐巳（火）。配偶具备既济温良，荣华富足之特质，做事有主见且极具家庭责任感。双方性格优势互补，在生活中既能同享富贵，亦能在关键时刻共克时艰。",
    "traitsEn": "Day Pillar [Gui Si]: Native Gui sits on Si (Fire). Consort embodies deep reliability, strategic competence, and mutual loyalty, balancing personal ambition with affectionate domestic stability.",
    "adviceZh": "【癸巳日柱婚姻指南】：珍惜配偶的付出，多进行高质量的情感沟通与共同理财规划；遇意见相左时以柔克刚，切忌因固执硬顶而生嫌隙。",
    "adviceEn": "[Matrimonial Advice for Gui Si]: Value consort contributions through proactive praise; cultivate transparent mutual financial governance; replace dogmatic arguments with gentle compromise."
  },
  "甲午": {
    "archetypeZh": "甲坐午 · 食伤所钟【秀气发越型】",
    "archetypeEn": "Jia Wu Archetype (Jia on Wu) · Auspicious Qi Dynamic",
    "traitsZh": "日柱【甲午】：日元甲（阳木）坐午（火）。配偶具备秀气发越，浪漫才华之特质，做事有主见且极具家庭责任感。双方性格优势互补，在生活中既能同享富贵，亦能在关键时刻共克时艰。",
    "traitsEn": "Day Pillar [Jia Wu]: Native Jia sits on Wu (Fire). Consort embodies deep reliability, strategic competence, and mutual loyalty, balancing personal ambition with affectionate domestic stability.",
    "adviceZh": "【甲午日柱婚姻指南】：珍惜配偶的付出，多进行高质量的情感沟通与共同理财规划；遇意见相左时以柔克刚，切忌因固执硬顶而生嫌隙。",
    "adviceEn": "[Matrimonial Advice for Jia Wu]: Value consort contributions through proactive praise; cultivate transparent mutual financial governance; replace dogmatic arguments with gentle compromise."
  },
  "乙未": {
    "archetypeZh": "乙坐未 · 财星所钟【厚重务实型】",
    "archetypeEn": "Yi Wei Archetype (Yi on Wei) · Wealth Star Dynamic",
    "traitsZh": "日柱【乙未】：日元乙（阴木）坐未（土）。配偶具备厚重务实，善聚商财之特质，做事有主见且极具家庭责任感。双方性格优势互补，在生活中既能同享富贵，亦能在关键时刻共克时艰。",
    "traitsEn": "Day Pillar [Yi Wei]: Native Yi sits on Wei (Earth). Consort embodies deep reliability, strategic competence, and mutual loyalty, balancing personal ambition with affectionate domestic stability.",
    "adviceZh": "【乙未日柱婚姻指南】：珍惜配偶的付出，多进行高质量的情感沟通与共同理财规划；遇意见相左时以柔克刚，切忌因固执硬顶而生嫌隙。",
    "adviceEn": "[Matrimonial Advice for Yi Wei]: Value consort contributions through proactive praise; cultivate transparent mutual financial governance; replace dogmatic arguments with gentle compromise."
  },
  "丙申": {
    "archetypeZh": "丙坐申 · 财星所钟【精于商略型】",
    "archetypeEn": "Bing Shen Archetype (Bing on Shen) · Wealth Star Dynamic",
    "traitsZh": "日柱【丙申】：日元丙（阳火）坐申（金）。配偶具备精于商略，开拓资本之特质，做事有主见且极具家庭责任感。双方性格优势互补，在生活中既能同享富贵，亦能在关键时刻共克时艰。",
    "traitsEn": "Day Pillar [Bing Shen]: Native Bing sits on Shen (Metal). Consort embodies deep reliability, strategic competence, and mutual loyalty, balancing personal ambition with affectionate domestic stability.",
    "adviceZh": "【丙申日柱婚姻指南】：珍惜配偶的付出，多进行高质量的情感沟通与共同理财规划；遇意见相左时以柔克刚，切忌因固执硬顶而生嫌隙。",
    "adviceEn": "[Matrimonial Advice for Bing Shen]: Value consort contributions through proactive praise; cultivate transparent mutual financial governance; replace dogmatic arguments with gentle compromise."
  },
  "丁酉": {
    "archetypeZh": "丁坐酉 · 财星所钟【精于商略型】",
    "archetypeEn": "Ding You Archetype (Ding on You) · Wealth Star Dynamic",
    "traitsZh": "日柱【丁酉】：日元丁（阴火）坐酉（金）。配偶具备精于商略，开拓资本之特质，做事有主见且极具家庭责任感。双方性格优势互补，在生活中既能同享富贵，亦能在关键时刻共克时艰。",
    "traitsEn": "Day Pillar [Ding You]: Native Ding sits on You (Metal). Consort embodies deep reliability, strategic competence, and mutual loyalty, balancing personal ambition with affectionate domestic stability.",
    "adviceZh": "【丁酉日柱婚姻指南】：珍惜配偶的付出，多进行高质量的情感沟通与共同理财规划；遇意见相左时以柔克刚，切忌因固执硬顶而生嫌隙。",
    "adviceEn": "[Matrimonial Advice for Ding You]: Value consort contributions through proactive praise; cultivate transparent mutual financial governance; replace dogmatic arguments with gentle compromise."
  },
  "戊戌": {
    "archetypeZh": "戊坐戌 · 比劫所钟【淳朴厚重型】",
    "archetypeEn": "Wu Xu Archetype (Wu on Xu) · Auspicious Qi Dynamic",
    "traitsZh": "日柱【戊戌】：日元戊（阳土）坐戌（土）。配偶具备淳朴厚重，坚定守信之特质，做事有主见且极具家庭责任感。双方性格优势互补，在生活中既能同享富贵，亦能在关键时刻共克时艰。",
    "traitsEn": "Day Pillar [Wu Xu]: Native Wu sits on Xu (Earth). Consort embodies deep reliability, strategic competence, and mutual loyalty, balancing personal ambition with affectionate domestic stability.",
    "adviceZh": "【戊戌日柱婚姻指南】：珍惜配偶的付出，多进行高质量的情感沟通与共同理财规划；遇意见相左时以柔克刚，切忌因固执硬顶而生嫌隙。",
    "adviceEn": "[Matrimonial Advice for Wu Xu]: Value consort contributions through proactive praise; cultivate transparent mutual financial governance; replace dogmatic arguments with gentle compromise."
  },
  "己亥": {
    "archetypeZh": "己坐亥 · 财星所钟【暗合聚富型】",
    "archetypeEn": "Ji Hai Archetype (Ji on Hai) · Wealth Star Dynamic",
    "traitsZh": "日柱【己亥】：日元己（阴土）坐亥（水）。配偶具备暗合聚富，商财殷实之特质，做事有主见且极具家庭责任感。双方性格优势互补，在生活中既能同享富贵，亦能在关键时刻共克时艰。",
    "traitsEn": "Day Pillar [Ji Hai]: Native Ji sits on Hai (Water). Consort embodies deep reliability, strategic competence, and mutual loyalty, balancing personal ambition with affectionate domestic stability.",
    "adviceZh": "【己亥日柱婚姻指南】：珍惜配偶的付出，多进行高质量的情感沟通与共同理财规划；遇意见相左时以柔克刚，切忌因固执硬顶而生嫌隙。",
    "adviceEn": "[Matrimonial Advice for Ji Hai]: Value consort contributions through proactive praise; cultivate transparent mutual financial governance; replace dogmatic arguments with gentle compromise."
  },
  "庚子": {
    "archetypeZh": "庚坐子 · 食伤所钟【金水吐秀型】",
    "archetypeEn": "Geng Zi Archetype (Geng on Zi) · Auspicious Qi Dynamic",
    "traitsZh": "日柱【庚子】：日元庚（阳金）坐子（水）。配偶具备金水吐秀，聪慧倾城之特质，做事有主见且极具家庭责任感。双方性格优势互补，在生活中既能同享富贵，亦能在关键时刻共克时艰。",
    "traitsEn": "Day Pillar [Geng Zi]: Native Geng sits on Zi (Water). Consort embodies deep reliability, strategic competence, and mutual loyalty, balancing personal ambition with affectionate domestic stability.",
    "adviceZh": "【庚子日柱婚姻指南】：珍惜配偶的付出，多进行高质量的情感沟通与共同理财规划；遇意见相左时以柔克刚，切忌因固执硬顶而生嫌隙。",
    "adviceEn": "[Matrimonial Advice for Geng Zi]: Value consort contributions through proactive praise; cultivate transparent mutual financial governance; replace dogmatic arguments with gentle compromise."
  },
  "辛丑": {
    "archetypeZh": "辛坐丑 · 印星所钟【沉静深思型】",
    "archetypeEn": "Xin Chou Archetype (Xin on Chou) · Auspicious Qi Dynamic",
    "traitsZh": "日柱【辛丑】：日元辛（阴金）坐丑（土）。配偶具备沉静深思，深厚稳健之特质，做事有主见且极具家庭责任感。双方性格优势互补，在生活中既能同享富贵，亦能在关键时刻共克时艰。",
    "traitsEn": "Day Pillar [Xin Chou]: Native Xin sits on Chou (Earth). Consort embodies deep reliability, strategic competence, and mutual loyalty, balancing personal ambition with affectionate domestic stability.",
    "adviceZh": "【辛丑日柱婚姻指南】：珍惜配偶的付出，多进行高质量的情感沟通与共同理财规划；遇意见相左时以柔克刚，切忌因固执硬顶而生嫌隙。",
    "adviceEn": "[Matrimonial Advice for Xin Chou]: Value consort contributions through proactive praise; cultivate transparent mutual financial governance; replace dogmatic arguments with gentle compromise."
  },
  "壬寅": {
    "archetypeZh": "壬坐寅 · 食伤所钟【文采飞扬型】",
    "archetypeEn": "Ren Yin Archetype (Ren on Yin) · Auspicious Qi Dynamic",
    "traitsZh": "日柱【壬寅】：日元壬（阳水）坐寅（木）。配偶具备文采飞扬，才情卓著之特质，做事有主见且极具家庭责任感。双方性格优势互补，在生活中既能同享富贵，亦能在关键时刻共克时艰。",
    "traitsEn": "Day Pillar [Ren Yin]: Native Ren sits on Yin (Wood). Consort embodies deep reliability, strategic competence, and mutual loyalty, balancing personal ambition with affectionate domestic stability.",
    "adviceZh": "【壬寅日柱婚姻指南】：珍惜配偶的付出，多进行高质量的情感沟通与共同理财规划；遇意见相左时以柔克刚，切忌因固执硬顶而生嫌隙。",
    "adviceEn": "[Matrimonial Advice for Ren Yin]: Value consort contributions through proactive praise; cultivate transparent mutual financial governance; replace dogmatic arguments with gentle compromise."
  },
  "癸卯": {
    "archetypeZh": "癸坐卯 · 食伤所钟【文采飞扬型】",
    "archetypeEn": "Gui Mao Archetype (Gui on Mao) · Auspicious Qi Dynamic",
    "traitsZh": "日柱【癸卯】：日元癸（阴水）坐卯（木）。配偶具备文采飞扬，才情卓著之特质，做事有主见且极具家庭责任感。双方性格优势互补，在生活中既能同享富贵，亦能在关键时刻共克时艰。",
    "traitsEn": "Day Pillar [Gui Mao]: Native Gui sits on Mao (Wood). Consort embodies deep reliability, strategic competence, and mutual loyalty, balancing personal ambition with affectionate domestic stability.",
    "adviceZh": "【癸卯日柱婚姻指南】：珍惜配偶的付出，多进行高质量的情感沟通与共同理财规划；遇意见相左时以柔克刚，切忌因固执硬顶而生嫌隙。",
    "adviceEn": "[Matrimonial Advice for Gui Mao]: Value consort contributions through proactive praise; cultivate transparent mutual financial governance; replace dogmatic arguments with gentle compromise."
  },
  "甲辰": {
    "archetypeZh": "甲坐辰 · 财星所钟【厚重务实型】",
    "archetypeEn": "Jia Chen Archetype (Jia on Chen) · Wealth Star Dynamic",
    "traitsZh": "日柱【甲辰】：日元甲（阳木）坐辰（土）。配偶具备厚重务实，善聚商财之特质，做事有主见且极具家庭责任感。双方性格优势互补，在生活中既能同享富贵，亦能在关键时刻共克时艰。",
    "traitsEn": "Day Pillar [Jia Chen]: Native Jia sits on Chen (Earth). Consort embodies deep reliability, strategic competence, and mutual loyalty, balancing personal ambition with affectionate domestic stability.",
    "adviceZh": "【甲辰日柱婚姻指南】：珍惜配偶的付出，多进行高质量的情感沟通与共同理财规划；遇意见相左时以柔克刚，切忌因固执硬顶而生嫌隙。",
    "adviceEn": "[Matrimonial Advice for Jia Chen]: Value consort contributions through proactive praise; cultivate transparent mutual financial governance; replace dogmatic arguments with gentle compromise."
  },
  "乙巳": {
    "archetypeZh": "乙坐巳 · 食伤所钟【秀气发越型】",
    "archetypeEn": "Yi Si Archetype (Yi on Si) · Auspicious Qi Dynamic",
    "traitsZh": "日柱【乙巳】：日元乙（阴木）坐巳（火）。配偶具备秀气发越，浪漫才华之特质，做事有主见且极具家庭责任感。双方性格优势互补，在生活中既能同享富贵，亦能在关键时刻共克时艰。",
    "traitsEn": "Day Pillar [Yi Si]: Native Yi sits on Si (Fire). Consort embodies deep reliability, strategic competence, and mutual loyalty, balancing personal ambition with affectionate domestic stability.",
    "adviceZh": "【乙巳日柱婚姻指南】：珍惜配偶的付出，多进行高质量的情感沟通与共同理财规划；遇意见相左时以柔克刚，切忌因固执硬顶而生嫌隙。",
    "adviceEn": "[Matrimonial Advice for Yi Si]: Value consort contributions through proactive praise; cultivate transparent mutual financial governance; replace dogmatic arguments with gentle compromise."
  },
  "丙午": {
    "archetypeZh": "丙坐午 · 比劫所钟【热烈刚真型】",
    "archetypeEn": "Bing Wu Archetype (Bing on Wu) · Auspicious Qi Dynamic",
    "traitsZh": "日柱【丙午】：日元丙（阳火）坐午（火）。配偶具备热烈刚真，豪爽并肩之特质，做事有主见且极具家庭责任感。双方性格优势互补，在生活中既能同享富贵，亦能在关键时刻共克时艰。",
    "traitsEn": "Day Pillar [Bing Wu]: Native Bing sits on Wu (Fire). Consort embodies deep reliability, strategic competence, and mutual loyalty, balancing personal ambition with affectionate domestic stability.",
    "adviceZh": "【丙午日柱婚姻指南】：珍惜配偶的付出，多进行高质量的情感沟通与共同理财规划；遇意见相左时以柔克刚，切忌因固执硬顶而生嫌隙。",
    "adviceEn": "[Matrimonial Advice for Bing Wu]: Value consort contributions through proactive praise; cultivate transparent mutual financial governance; replace dogmatic arguments with gentle compromise."
  },
  "丁未": {
    "archetypeZh": "丁坐未 · 食伤所钟【包容博雅型】",
    "archetypeEn": "Ding Wei Archetype (Ding on Wei) · Auspicious Qi Dynamic",
    "traitsZh": "日柱【丁未】：日元丁（阴火）坐未（土）。配偶具备包容博雅，生活美学之特质，做事有主见且极具家庭责任感。双方性格优势互补，在生活中既能同享富贵，亦能在关键时刻共克时艰。",
    "traitsEn": "Day Pillar [Ding Wei]: Native Ding sits on Wei (Earth). Consort embodies deep reliability, strategic competence, and mutual loyalty, balancing personal ambition with affectionate domestic stability.",
    "adviceZh": "【丁未日柱婚姻指南】：珍惜配偶的付出，多进行高质量的情感沟通与共同理财规划；遇意见相左时以柔克刚，切忌因固执硬顶而生嫌隙。",
    "adviceEn": "[Matrimonial Advice for Ding Wei]: Value consort contributions through proactive praise; cultivate transparent mutual financial governance; replace dogmatic arguments with gentle compromise."
  },
  "戊申": {
    "archetypeZh": "戊坐申 · 食伤所钟【精明利落型】",
    "archetypeEn": "Wu Shen Archetype (Wu on Shen) · Auspicious Qi Dynamic",
    "traitsZh": "日柱【戊申】：日元戊（阳土）坐申（金）。配偶具备精明利落，多才多艺之特质，做事有主见且极具家庭责任感。双方性格优势互补，在生活中既能同享富贵，亦能在关键时刻共克时艰。",
    "traitsEn": "Day Pillar [Wu Shen]: Native Wu sits on Shen (Metal). Consort embodies deep reliability, strategic competence, and mutual loyalty, balancing personal ambition with affectionate domestic stability.",
    "adviceZh": "【戊申日柱婚姻指南】：珍惜配偶的付出，多进行高质量的情感沟通与共同理财规划；遇意见相左时以柔克刚，切忌因固执硬顶而生嫌隙。",
    "adviceEn": "[Matrimonial Advice for Wu Shen]: Value consort contributions through proactive praise; cultivate transparent mutual financial governance; replace dogmatic arguments with gentle compromise."
  },
  "己酉": {
    "archetypeZh": "己坐酉 · 食伤所钟【精明利落型】",
    "archetypeEn": "Ji You Archetype (Ji on You) · Auspicious Qi Dynamic",
    "traitsZh": "日柱【己酉】：日元己（阴土）坐酉（金）。配偶具备精明利落，多才多艺之特质，做事有主见且极具家庭责任感。双方性格优势互补，在生活中既能同享富贵，亦能在关键时刻共克时艰。",
    "traitsEn": "Day Pillar [Ji You]: Native Ji sits on You (Metal). Consort embodies deep reliability, strategic competence, and mutual loyalty, balancing personal ambition with affectionate domestic stability.",
    "adviceZh": "【己酉日柱婚姻指南】：珍惜配偶的付出，多进行高质量的情感沟通与共同理财规划；遇意见相左时以柔克刚，切忌因固执硬顶而生嫌隙。",
    "adviceEn": "[Matrimonial Advice for Ji You]: Value consort contributions through proactive praise; cultivate transparent mutual financial governance; replace dogmatic arguments with gentle compromise."
  },
  "庚戌": {
    "archetypeZh": "庚坐戌 · 印星所钟【沉静深思型】",
    "archetypeEn": "Geng Xu Archetype (Geng on Xu) · Auspicious Qi Dynamic",
    "traitsZh": "日柱【庚戌】：日元庚（阳金）坐戌（土）。配偶具备沉静深思，深厚稳健之特质，做事有主见且极具家庭责任感。双方性格优势互补，在生活中既能同享富贵，亦能在关键时刻共克时艰。",
    "traitsEn": "Day Pillar [Geng Xu]: Native Geng sits on Xu (Earth). Consort embodies deep reliability, strategic competence, and mutual loyalty, balancing personal ambition with affectionate domestic stability.",
    "adviceZh": "【庚戌日柱婚姻指南】：珍惜配偶的付出，多进行高质量的情感沟通与共同理财规划；遇意见相左时以柔克刚，切忌因固执硬顶而生嫌隙。",
    "adviceEn": "[Matrimonial Advice for Geng Xu]: Value consort contributions through proactive praise; cultivate transparent mutual financial governance; replace dogmatic arguments with gentle compromise."
  },
  "辛亥": {
    "archetypeZh": "辛坐亥 · 食伤所钟【金水吐秀型】",
    "archetypeEn": "Xin Hai Archetype (Xin on Hai) · Auspicious Qi Dynamic",
    "traitsZh": "日柱【辛亥】：日元辛（阴金）坐亥（水）。配偶具备金水吐秀，聪慧倾城之特质，做事有主见且极具家庭责任感。双方性格优势互补，在生活中既能同享富贵，亦能在关键时刻共克时艰。",
    "traitsEn": "Day Pillar [Xin Hai]: Native Xin sits on Hai (Water). Consort embodies deep reliability, strategic competence, and mutual loyalty, balancing personal ambition with affectionate domestic stability.",
    "adviceZh": "【辛亥日柱婚姻指南】：珍惜配偶的付出，多进行高质量的情感沟通与共同理财规划；遇意见相左时以柔克刚，切忌因固执硬顶而生嫌隙。",
    "adviceEn": "[Matrimonial Advice for Xin Hai]: Value consort contributions through proactive praise; cultivate transparent mutual financial governance; replace dogmatic arguments with gentle compromise."
  },
  "壬子": {
    "archetypeZh": "壬坐子 · 比劫所钟【汪洋浩大型】",
    "archetypeEn": "Ren Zi Archetype (Ren on Zi) · Auspicious Qi Dynamic",
    "traitsZh": "日柱【壬子】：日元壬（阳水）坐子（水）。配偶具备汪洋浩大，志同道合之特质，做事有主见且极具家庭责任感。双方性格优势互补，在生活中既能同享富贵，亦能在关键时刻共克时艰。",
    "traitsEn": "Day Pillar [Ren Zi]: Native Ren sits on Zi (Water). Consort embodies deep reliability, strategic competence, and mutual loyalty, balancing personal ambition with affectionate domestic stability.",
    "adviceZh": "【壬子日柱婚姻指南】：珍惜配偶的付出，多进行高质量的情感沟通与共同理财规划；遇意见相左时以柔克刚，切忌因固执硬顶而生嫌隙。",
    "adviceEn": "[Matrimonial Advice for Ren Zi]: Value consort contributions through proactive praise; cultivate transparent mutual financial governance; replace dogmatic arguments with gentle compromise."
  },
  "癸丑": {
    "archetypeZh": "癸坐丑 · 官杀所钟【大局深稳型】",
    "archetypeEn": "Gui Chou Archetype (Gui on Chou) · Officer Star Dynamic",
    "traitsZh": "日柱【癸丑】：日元癸（阴水）坐丑（土）。配偶具备大局深稳，威权统摄之特质，做事有主见且极具家庭责任感。双方性格优势互补，在生活中既能同享富贵，亦能在关键时刻共克时艰。",
    "traitsEn": "Day Pillar [Gui Chou]: Native Gui sits on Chou (Earth). Consort embodies deep reliability, strategic competence, and mutual loyalty, balancing personal ambition with affectionate domestic stability.",
    "adviceZh": "【癸丑日柱婚姻指南】：珍惜配偶的付出，多进行高质量的情感沟通与共同理财规划；遇意见相左时以柔克刚，切忌因固执硬顶而生嫌隙。",
    "adviceEn": "[Matrimonial Advice for Gui Chou]: Value consort contributions through proactive praise; cultivate transparent mutual financial governance; replace dogmatic arguments with gentle compromise."
  },
  "甲寅": {
    "archetypeZh": "甲坐寅 · 比肩所钟【自强自立型】",
    "archetypeEn": "Jia Yin Archetype (Jia on Yin) · Friend Dynamic",
    "traitsZh": "日柱【甲寅】：日元甲（阳木）坐寅（木）。配偶具备自强自立，携手并进之特质，做事有主见且极具家庭责任感。双方性格优势互补，在生活中既能同享富贵，亦能在关键时刻共克时艰。",
    "traitsEn": "Day Pillar [Jia Yin]: Native Jia sits on Yin (Wood). Consort embodies deep reliability, strategic competence, and mutual loyalty, balancing personal ambition with affectionate domestic stability.",
    "adviceZh": "【甲寅日柱婚姻指南】：珍惜配偶的付出，多进行高质量的情感沟通与共同理财规划；遇意见相左时以柔克刚，切忌因固执硬顶而生嫌隙。",
    "adviceEn": "[Matrimonial Advice for Jia Yin]: Value consort contributions through proactive praise; cultivate transparent mutual financial governance; replace dogmatic arguments with gentle compromise."
  },
  "乙卯": {
    "archetypeZh": "乙坐卯 · 比肩所钟【自强自立型】",
    "archetypeEn": "Yi Mao Archetype (Yi on Mao) · Friend Dynamic",
    "traitsZh": "日柱【乙卯】：日元乙（阴木）坐卯（木）。配偶具备自强自立，携手并进之特质，做事有主见且极具家庭责任感。双方性格优势互补，在生活中既能同享富贵，亦能在关键时刻共克时艰。",
    "traitsEn": "Day Pillar [Yi Mao]: Native Yi sits on Mao (Wood). Consort embodies deep reliability, strategic competence, and mutual loyalty, balancing personal ambition with affectionate domestic stability.",
    "adviceZh": "【乙卯日柱婚姻指南】：珍惜配偶的付出，多进行高质量的情感沟通与共同理财规划；遇意见相左时以柔克刚，切忌因固执硬顶而生嫌隙。",
    "adviceEn": "[Matrimonial Advice for Yi Mao]: Value consort contributions through proactive praise; cultivate transparent mutual financial governance; replace dogmatic arguments with gentle compromise."
  },
  "丙辰": {
    "archetypeZh": "丙坐辰 · 食伤所钟【包容博雅型】",
    "archetypeEn": "Bing Chen Archetype (Bing on Chen) · Auspicious Qi Dynamic",
    "traitsZh": "日柱【丙辰】：日元丙（阳火）坐辰（土）。配偶具备包容博雅，生活美学之特质，做事有主见且极具家庭责任感。双方性格优势互补，在生活中既能同享富贵，亦能在关键时刻共克时艰。",
    "traitsEn": "Day Pillar [Bing Chen]: Native Bing sits on Chen (Earth). Consort embodies deep reliability, strategic competence, and mutual loyalty, balancing personal ambition with affectionate domestic stability.",
    "adviceZh": "【丙辰日柱婚姻指南】：珍惜配偶的付出，多进行高质量的情感沟通与共同理财规划；遇意见相左时以柔克刚，切忌因固执硬顶而生嫌隙。",
    "adviceEn": "[Matrimonial Advice for Bing Chen]: Value consort contributions through proactive praise; cultivate transparent mutual financial governance; replace dogmatic arguments with gentle compromise."
  },
  "丁巳": {
    "archetypeZh": "丁坐巳 · 比劫所钟【热烈刚真型】",
    "archetypeEn": "Ding Si Archetype (Ding on Si) · Auspicious Qi Dynamic",
    "traitsZh": "日柱【丁巳】：日元丁（阴火）坐巳（火）。配偶具备热烈刚真，豪爽并肩之特质，做事有主见且极具家庭责任感。双方性格优势互补，在生活中既能同享富贵，亦能在关键时刻共克时艰。",
    "traitsEn": "Day Pillar [Ding Si]: Native Ding sits on Si (Fire). Consort embodies deep reliability, strategic competence, and mutual loyalty, balancing personal ambition with affectionate domestic stability.",
    "adviceZh": "【丁巳日柱婚姻指南】：珍惜配偶的付出，多进行高质量的情感沟通与共同理财规划；遇意见相左时以柔克刚，切忌因固执硬顶而生嫌隙。",
    "adviceEn": "[Matrimonial Advice for Ding Si]: Value consort contributions through proactive praise; cultivate transparent mutual financial governance; replace dogmatic arguments with gentle compromise."
  },
  "戊午": {
    "archetypeZh": "戊坐午 · 印星所钟【慈厚长者型】",
    "archetypeEn": "Wu Wu Archetype (Wu on Wu) · Auspicious Qi Dynamic",
    "traitsZh": "日柱【戊午】：日元戊（阳土）坐午（火）。配偶具备慈厚长者，福寿绵长之特质，做事有主见且极具家庭责任感。双方性格优势互补，在生活中既能同享富贵，亦能在关键时刻共克时艰。",
    "traitsEn": "Day Pillar [Wu Wu]: Native Wu sits on Wu (Fire). Consort embodies deep reliability, strategic competence, and mutual loyalty, balancing personal ambition with affectionate domestic stability.",
    "adviceZh": "【戊午日柱婚姻指南】：珍惜配偶的付出，多进行高质量的情感沟通与共同理财规划；遇意见相左时以柔克刚，切忌因固执硬顶而生嫌隙。",
    "adviceEn": "[Matrimonial Advice for Wu Wu]: Value consort contributions through proactive praise; cultivate transparent mutual financial governance; replace dogmatic arguments with gentle compromise."
  },
  "己未": {
    "archetypeZh": "己坐未 · 比劫所钟【淳朴厚重型】",
    "archetypeEn": "Ji Wei Archetype (Ji on Wei) · Auspicious Qi Dynamic",
    "traitsZh": "日柱【己未】：日元己（阴土）坐未（土）。配偶具备淳朴厚重，坚定守信之特质，做事有主见且极具家庭责任感。双方性格优势互补，在生活中既能同享富贵，亦能在关键时刻共克时艰。",
    "traitsEn": "Day Pillar [Ji Wei]: Native Ji sits on Wei (Earth). Consort embodies deep reliability, strategic competence, and mutual loyalty, balancing personal ambition with affectionate domestic stability.",
    "adviceZh": "【己未日柱婚姻指南】：珍惜配偶的付出，多进行高质量的情感沟通与共同理财规划；遇意见相左时以柔克刚，切忌因固执硬顶而生嫌隙。",
    "adviceEn": "[Matrimonial Advice for Ji Wei]: Value consort contributions through proactive praise; cultivate transparent mutual financial governance; replace dogmatic arguments with gentle compromise."
  },
  "庚申": {
    "archetypeZh": "庚坐申 · 比劫所钟【铁骨铮铮型】",
    "archetypeEn": "Geng Shen Archetype (Geng on Shen) · Auspicious Qi Dynamic",
    "traitsZh": "日柱【庚申】：日元庚（阳金）坐申（金）。配偶具备铁骨铮铮，义气深重之特质，做事有主见且极具家庭责任感。双方性格优势互补，在生活中既能同享富贵，亦能在关键时刻共克时艰。",
    "traitsEn": "Day Pillar [Geng Shen]: Native Geng sits on Shen (Metal). Consort embodies deep reliability, strategic competence, and mutual loyalty, balancing personal ambition with affectionate domestic stability.",
    "adviceZh": "【庚申日柱婚姻指南】：珍惜配偶的付出，多进行高质量的情感沟通与共同理财规划；遇意见相左时以柔克刚，切忌因固执硬顶而生嫌隙。",
    "adviceEn": "[Matrimonial Advice for Geng Shen]: Value consort contributions through proactive praise; cultivate transparent mutual financial governance; replace dogmatic arguments with gentle compromise."
  },
  "辛酉": {
    "archetypeZh": "辛坐酉 · 比劫所钟【铁骨铮铮型】",
    "archetypeEn": "Xin You Archetype (Xin on You) · Auspicious Qi Dynamic",
    "traitsZh": "日柱【辛酉】：日元辛（阴金）坐酉（金）。配偶具备铁骨铮铮，义气深重之特质，做事有主见且极具家庭责任感。双方性格优势互补，在生活中既能同享富贵，亦能在关键时刻共克时艰。",
    "traitsEn": "Day Pillar [Xin You]: Native Xin sits on You (Metal). Consort embodies deep reliability, strategic competence, and mutual loyalty, balancing personal ambition with affectionate domestic stability.",
    "adviceZh": "【辛酉日柱婚姻指南】：珍惜配偶的付出，多进行高质量的情感沟通与共同理财规划；遇意见相左时以柔克刚，切忌因固执硬顶而生嫌隙。",
    "adviceEn": "[Matrimonial Advice for Xin You]: Value consort contributions through proactive praise; cultivate transparent mutual financial governance; replace dogmatic arguments with gentle compromise."
  },
  "壬戌": {
    "archetypeZh": "壬坐戌 · 官杀所钟【大局深稳型】",
    "archetypeEn": "Ren Xu Archetype (Ren on Xu) · Officer Star Dynamic",
    "traitsZh": "日柱【壬戌】：日元壬（阳水）坐戌（土）。配偶具备大局深稳，威权统摄之特质，做事有主见且极具家庭责任感。双方性格优势互补，在生活中既能同享富贵，亦能在关键时刻共克时艰。",
    "traitsEn": "Day Pillar [Ren Xu]: Native Ren sits on Xu (Earth). Consort embodies deep reliability, strategic competence, and mutual loyalty, balancing personal ambition with affectionate domestic stability.",
    "adviceZh": "【壬戌日柱婚姻指南】：珍惜配偶的付出，多进行高质量的情感沟通与共同理财规划；遇意见相左时以柔克刚，切忌因固执硬顶而生嫌隙。",
    "adviceEn": "[Matrimonial Advice for Ren Xu]: Value consort contributions through proactive praise; cultivate transparent mutual financial governance; replace dogmatic arguments with gentle compromise."
  },
  "癸亥": {
    "archetypeZh": "癸坐亥 · 比劫所钟【汪洋浩大型】",
    "archetypeEn": "Gui Hai Archetype (Gui on Hai) · Auspicious Qi Dynamic",
    "traitsZh": "日柱【癸亥】：日元癸（阴水）坐亥（水）。配偶具备汪洋浩大，志同道合之特质，做事有主见且极具家庭责任感。双方性格优势互补，在生活中既能同享富贵，亦能在关键时刻共克时艰。",
    "traitsEn": "Day Pillar [Gui Hai]: Native Gui sits on Hai (Water). Consort embodies deep reliability, strategic competence, and mutual loyalty, balancing personal ambition with affectionate domestic stability.",
    "adviceZh": "【癸亥日柱婚姻指南】：珍惜配偶的付出，多进行高质量的情感沟通与共同理财规划；遇意见相左时以柔克刚，切忌因固执硬顶而生嫌隙。",
    "adviceEn": "[Matrimonial Advice for Gui Hai]: Value consort contributions through proactive praise; cultivate transparent mutual financial governance; replace dogmatic arguments with gentle compromise."
  }
}
};

class YuZhaoDB {
  /**
   * Deep reading of the Spouse Palace from 《玉照定真经》
   * Fully incorporates:
   * 1. The 60 JiaZi Day Pillar (六十甲子日柱) Matrimonial Archetype
   * 2. Celestial & Terrestrial Branch Interactions (六合、六冲、六害、三刑)
   * 3. Consort Star (财星为妻/官星为夫) Status
   */
  static getSpousePalaceReading(arg1, arg2) {
    let dayBranch = '子';
    let dayStem = '甲';
    let dayPillar = '甲子';
    let isMale = true;
    let interactions = null;

    if (typeof arg1 === 'string') {
      dayBranch = arg1[1] || arg1[0] || '子';
      dayStem = arg1[0] || '甲';
      dayPillar = (arg1.length >= 2) ? arg1.substring(0, 2) : (dayStem + dayBranch);
      if (arg2 && typeof arg2 === 'object') {
        const gender = arg2.gender || (arg2.input && arg2.input.gender);
        if (gender) isMale = (gender === 'male' || gender === '乾造' || gender === '男' || gender === '男命');
        interactions = arg2.interactions;
      }
    } else if (arg1 && typeof arg1 === 'object') {
      dayBranch = (arg1.pillars && arg1.pillars.day && arg1.pillars.day.branch) || arg1.dayBranch || '子';
      dayStem = (arg1.pillars && arg1.pillars.day && arg1.pillars.day.stem) || arg1.dayMaster || '甲';
      dayPillar = (arg1.pillars && arg1.pillars.day && arg1.pillars.day.text) || (dayStem + dayBranch);
      const gender = (arg1.input && arg1.input.gender) || arg1.gender || 'male';
      isMale = (gender === 'male' || gender === '乾造' || gender === '男' || gender === '男命');
      interactions = arg1.interactions || (arg1.pillars && (typeof BaZiEngine !== 'undefined') && BaZiEngine.calculatePillarInteractions(arg1.pillars));
    }

    const baseProfile = YU_ZHAO_DATA.spousePalaceProfiles[dayBranch] || YU_ZHAO_DATA.spousePalaceProfiles['子'];
    const pProfile = YU_ZHAO_DATA.dayPillarProfiles[dayPillar] || null;

    const archetypeZh = pProfile ? pProfile.archetypeZh : baseProfile.archetypeZh;
    const archetypeEn = pProfile ? pProfile.archetypeEn : baseProfile.archetypeEn;
    const traitsZh = (pProfile ? pProfile.traitsZh + ' ' : '') + baseProfile.traitsZh;
    const traitsEn = (pProfile ? pProfile.traitsEn + ' ' : '') + baseProfile.traitsEn;

    let clashRiskZh = baseProfile.clashRiskZh;
    let clashRiskEn = baseProfile.clashRiskEn;
    let adviceZh = baseProfile.adviceZh;
    let adviceEn = baseProfile.adviceEn;

    // Weave Pillar Interactions dynamically
    if (interactions) {
      if (interactions.hasMonthDayClash) {
        clashRiskZh += '【月日相冲 · 门户受震】：夫妻宫与月令提纲相冲，早年婚恋易受外界或双方原生家庭介入干预，或因异地奔波聚少离多；破局之法在于自立门户，保持健康物理边界。';
        clashRiskEn += ' [Month-Day Clash Alert]: Spouse palace clashes with Month commander: relationship tested by in-law interference or dual-city commutes; maintain independent household boundaries.';
      }
      if (interactions.hasDayHourClash) {
        clashRiskZh += '【日时相冲 · 宅嗣相激】：夫妻宫与子女时宿相冲，人到中年后易在子女教育观念、生活重心上产生分歧；宜定期安排二人独处时光，巩固夫妻同盟为第一序列。';
        clashRiskEn += ' [Day-Hour Clash Alert]: Spouse palace clashes with Hour descendant palace: child-rearing disagreements under stress; schedule weekly couple-only dates.';
      }
      if (interactions.hasMonthDayHarm || interactions.hasDayHourHarm) {
        clashRiskZh += '【夫妻宫逢穿害】：夫妻宫受地支六害相穿，最忌冷战与胡思乱想，防小人亲友闲话挑唆，凡事宜当面坦诚沟通。';
        clashRiskEn += ' [Spouse Palace Piercing Harm]: Subtle emotional friction or relative gossip; practice radical transparency and discard passive-aggressive silences.';
      }
      if (interactions.hasMonthDayCombo || interactions.hasDayHourCombo) {
        adviceZh += '【夫妻宫逢六合】：日支逢合，配偶依恋深厚、同舟共济，但需警惕过度依赖而丧失个人独立成长空间。';
        adviceEn += ' [Spouse Palace Combination]: Deep mutual attachment and compounding loyalty; balance sweet togetherness with autonomous personal growth.';
      }
    }

    const spouseStarZh = isMale ? '正财 / 偏财星 (妻星)' : '正官 / 七杀星 (夫星)';
    const spouseStarEn = isMale ? 'Direct / Indirect Wealth (Consort Star)' : 'Direct Officer / Seven Killings (Spouse Star)';

    const genderDiffZh = isMale
      ? '【乾造男命以财为妻】：日支为妻宫，财星为妻星。身旺任财者，配偶贤德勤勉，携手共创家业；身弱财重者，切忌盲目过度为配偶兜底高杠杆债务，宜建立清晰家庭资产防火墙与透明协商机制。'
      : '【坤造女命以官为夫】：日支为夫宫，官杀为夫星。官星纯粹带印者，夫荣妻贵，相敬如宾；若命局见伤官见官或七杀攻身，需戒除言语苛刻清高，以尊重与倾听化解锋芒，共建笃定温情。';

    const genderDiffEn = isMale
      ? '[Male Native Consort Dynamics]: Wealth star represents consort. When Day Master is robust, consort provides profound managerial support and wealth compounding. When delicate, establish clear financial boundaries to prevent spousal over-domination.'
      : '[Female Native Consort Dynamics]: Officer/Killings star represents spouse. Pure Officer with Seal brings mutual dignity and social prestige. If Hurting Officer clashes with Officer, practice emotional de-escalation and gentle communication.';

    return {
      palaceBranch: dayBranch,
      dayPillar,
      gender: isMale ? '乾造' : '坤造',
      spouseStarZh,
      spouseStarEn,
      archetypeZh,
      archetypeEn,
      traitsZh,
      traitsEn,
      clashRiskZh,
      clashRiskEn,
      adviceZh,
      adviceEn,
      genderDiffZh,
      genderDiffEn,
      canonicalQuoteZh: '《玉照定真经》：“日干为己，日支为妻（夫）。干支相生相照，夫妻和乐寿考；支有刑冲破害，修身克己可解。”',
      canonicalQuoteEn: 'Yu Zhao Ding Zhen Jing: "Day Stem is self, Day Branch is consort. Mutual generation brings harmonious longevity; potential clashes are completely dissolved through mutual emotional discipline."'
    };
  }

  /**
   * Children and Descendants reading from Hour Pillar
   */
  static getChildrenPalaceReading(arg1, arg2) {
    let hourBranch = '申';
    let hourStem = '甲';
    let hourGod = '食神';
    let isMale = true;
    let interactions = null;

    if (typeof arg1 === 'string') {
      hourBranch = arg1;
      if (arg2 && typeof arg2 === 'object') {
        const gender = arg2.gender || (arg2.input && arg2.input.gender);
        if (gender) isMale = (gender === 'male' || gender === '乾造' || gender === '男' || gender === '男命');
        interactions = arg2.interactions;
      }
    } else if (arg1 && typeof arg1 === 'object') {
      hourBranch = (arg1.pillars && arg1.pillars.hour && arg1.pillars.hour.branch) || '申';
      hourStem = (arg1.pillars && arg1.pillars.hour && arg1.pillars.hour.stem) || '甲';
      hourGod = (arg1.pillars && arg1.pillars.hour && arg1.pillars.hour.stemGod) || '时宿';
      const gender = (arg1.input && arg1.input.gender) || arg1.gender || 'male';
      isMale = (gender === 'male' || gender === '乾造' || gender === '男' || gender === '男命');
      interactions = arg1.interactions || (arg1.pillars && (typeof BaZiEngine !== 'undefined') && BaZiEngine.calculatePillarInteractions(arg1.pillars));
    }

    let archetypeZh = '聪慧卓越进取型';
    let archetypeEn = 'Intelligent, Progressive & Ambitious Offspring';
    let talentZh = '后嗣在现代科技研发、商业管理或高等学术领域具备极高天赋，领悟力超群。';
    let talentEn = 'Children possess innate genius for frontier technology, commercial strategy, or deep academia, with rapid cognitive agility.';
    let guideZh = '亲子沟通宜以“平等对话、尊重自主选择”为第一法则，切忌以长辈权威强力打压，引导其将旺盛精力转化为专注创造。';
    let guideEn = 'Parenting must center on egalitarian dialogue and radical autonomy; avoid autocratic commands; guide their abundant vitality into dedicated craft.';

    if (hourGod.includes('食神')) {
      archetypeZh = '温良仁厚福寿型';
      archetypeEn = 'Gentle, Benevolent & Highly Blessed Offspring';
      talentZh = '子女气质文雅秀润，在文化艺术、创意设计、心理咨询、教育出版或大健康领域出类拔萃，人缘极佳，福泽深厚。';
      talentEn = 'Offspring exude cultural refinement, excelling in fine arts, design, psychology, education, or wellness industries with deep social warmth.';
      guideZh = '注重启发其审美情趣与人文情怀，营造松弛有爱的家庭港湾，切忌施加过于急功近利的商业考核指标。';
      guideEn = 'Cultivate their aesthetic sensibility; maintain an affectionate, pressure-free domestic haven; avoid imposing hurried commercial demands.';
    } else if (hourGod.includes('伤官')) {
      archetypeZh = '惊世英才颠覆型';
      archetypeEn = 'Brilliant, Maverick & Disruptive Pioneer';
      talentZh = '后嗣思维天马行空，突破常规，在硬核科技突破、数字化创新、前沿艺术或独立自主创业赛道极具爆发力。';
      talentEn = 'Children exhibit unconstrained divergent genius, excelling in frontier breakthrough science, disruptive digital technologies, or cutting-edge entrepreneurship.';
      guideZh = '多给予情感上的温暖与肯定，减轻其心理自我期许过高的包袱，鼓励其在严谨之余学会放松自处。';
      guideEn = 'Offer abundant unconditional affirmation; lighten their self-imposed perfectionist burdens; teach them the sacred art of relaxation.';
    } else if (hourGod.includes('印')) {
      archetypeZh = '学者鸿儒沉静型';
      archetypeEn = 'Scholarly, Contemplative & Erudite Thinker';
      talentZh = '子女喜静好学，深得尊长喜爱，在高校科研、医学哲学、历史社科或智库顾问领域造诣深厚，名望远扬。';
      talentEn = 'Children are calm, studious, and beloved by elders, excelling in scientific research, clinical medicine, philosophy, or strategic think tanks.';
      guideZh = '鼓励其多走出书斋进行户外阳光体育锻炼，多与同龄人建立广阔连接，破除脱离实务的书生气。';
      guideEn = 'Encourage outdoor sports and vibrant peer socializing, balancing scholarly contemplation with grounded practical agility.';
    } else if (hourGod.includes('财')) {
      archetypeZh = '商界敏锐财富型';
      archetypeEn = 'Commercially Astute & Resourceful Builder';
      talentZh = '子女商业嗅觉极其灵敏，擅长资源整合、品牌运营与资本增值，年少即具经商持家风范，晚年能光耀门楣。';
      talentEn = 'Children possess instinctive commercial acuity, mastering capital compounding and brand scaling, bringing immense prosperity to the family.';
      guideZh = '自幼培养其崇高品德与社会责任感，树立“君子爱财，取之有道”的底线思维，避免被物欲迷失双眼。';
      guideEn = 'Instill profound ethical responsibility from childhood, teaching that honorable wealth compounds through genuine service to society.';
    }

    // Weave Day-Hour dynamic interactions
    let destinyZh = '后嗣时宿深稳，晚年得承天伦之乐。子女不仅在各自专业领域建功立业，更能常念孝顺反哺，形成良性世代财富与品德复利。';
    let destinyEn = 'Descendant stars are deeply anchored, promising joyous late-life familial blessings. Offspring achieve excellence in their fields while reciprocating filial care, compounding generational prosperity.';

    if (interactions) {
      if (interactions.hasDayHourClash) {
        destinyZh += '【日时相冲】：后嗣早年志在四方，多跨城市或跨国深造立业；如同雏鹰展翅，物理距离上的独立反而更能激发其自主破局成就。';
        destinyEn += ' [Day-Hour Clash]: Offspring thrive through early geographical independence, building sovereign success away from the family seat.';
      }
      if (interactions.hasDayHourCombo) {
        destinyZh += '【日时相合】：日时干支暗合相生，晚景天伦之乐融融，子女常伴左右或事业深度协同，世代和乐。';
        destinyEn += ' [Day-Hour Harmony]: Day and Hour resonate in mutual combination, promising affectionate late-life closeness and seamless generational synergy.';
      }
    }

    const genderDiffZh = isMale
      ? '【乾造男命以官杀论子息】：古诀云“男命官杀为儿女，七杀为子，正官为女”。男命重在责任担当与身教示范，切忌以专断命令打压子女天性，宜以宽厚胸襟做子女最坚实后盾。'
      : '【坤造女命以食伤论子息】：古诀云“女命食伤为儿女，食神为女，伤官为子”。女命重在情感温情连接与才情启蒙，切忌过度焦虑包办，给子女充分的自主试错空间。';

    const genderDiffEn = isMale
      ? '[Male Native Offspring Dynamics]: Governed by Officer/Killings. Focus on integrity, leadership modeling, and emotional presence over authoritarian decrees.'
      : '[Female Native Offspring Dynamics]: Governed by Eating God/Output. Focus on emotional intimacy, creative encouragement, and avoiding overprotective anxiety.';

    return {
      hourPillarText: `${hourStem}${hourBranch}`,
      hourGod,
      gender: isMale ? '乾造' : '坤造',
      archetypeZh,
      archetypeEn,
      talentZh,
      talentEn,
      traitsZh: talentZh,
      traitsEn: talentEn,
      destinyZh,
      destinyEn,
      guideZh,
      guideEn,
      parentingZh: guideZh,
      parentingEn: guideEn,
      genderDiffZh,
      genderDiffEn,
      canonicalQuoteZh: '《玉照定真经》：“时为子息宫，生旺主后裔昌隆。食伤引秀，子秀孙贤；修德齐家，天伦晚福无疆。”',
      canonicalQuoteEn: 'Yu Zhao Ding Zhen Jing: "The Hour governs descendants; a flourishing Hour denotes flourishing progeny. Nurturing virtue inside the home yields boundless late-life joy."'
    };
  }

  /**
   * Ancestral and Parental reading from Year and Month Pillars
   */
  static getParentsPalaceReading(arg1, arg2) {
    let yBranch = '子';
    let mBranch = '午';
    let isMale = true;
    let interactions = null;

    if (typeof arg1 === 'string') {
      yBranch = arg1;
      mBranch = (typeof arg2 === 'string') ? arg2 : '午';
    } else if (arg1 && typeof arg1 === 'object') {
      yBranch = (arg1.pillars && arg1.pillars.year && arg1.pillars.year.branch) || '子';
      mBranch = (arg1.pillars && arg1.pillars.month && arg1.pillars.month.branch) || '午';
      const gender = (arg1.input && arg1.input.gender) || arg1.gender || 'male';
      isMale = (gender === 'male' || gender === '乾造' || gender === '男' || gender === '男命');
      interactions = arg1.interactions || (arg1.pillars && (typeof BaZiEngine !== 'undefined') && BaZiEngine.calculatePillarInteractions(arg1.pillars));
    }

    const clashes = {
      '子': '午', '午': '子', '丑': '未', '未': '丑',
      '寅': '申', '申': '寅', '卯': '酉', '酉': '卯',
      '辰': '戌', '戌': '辰', '巳': '亥', '亥': '巳'
    };
    const isClashed = (clashes[yBranch] === mBranch) || (interactions && interactions.hasYearMonthClash);
    const isCombo = interactions && interactions.hasYearMonthCombo;
    const isHarm = interactions && interactions.hasYearMonthHarm;

    const genderDiffZh = isMale
      ? '【乾造男命宗族立身】：男命在原生家庭中多承载立户光宗之期待，需在尊重长辈与坚持个人独立事业主权之间保持清醒边界，经济与决策全面独立是真正的顶梁柱。'
      : '【坤造女命宗族立身】：女命在原生家庭中多承载情感关怀与连结之纽带，需平衡孝道反哺与个人小家庭的边界，拒绝成为无底线情感消耗的“扶持者”，以完全人格立世。';

    const genderDiffEn = isMale
      ? '[Male Native Ancestral Dynamics]: Balance carrying generational expectations with firm financial and career sovereignty.'
      : '[Female Native Ancestral Dynamics]: Balance affectionate filial care with emotional autonomy, maintaining clear personal boundaries.';

    if (isClashed) {
      const heritageZh = '年月见刑冲，命主与家族原生环境气场存在差异，难以全盘依赖家族祖荫。少小离家或跨城市跨国开拓，白手起家，自立宗派。';
      const heritageEn = 'Year-Month clash indicates divergent frequencies from ancestral origins. The native flourishes by leaving the hometown, building their own sovereign empire away from ancestral soil.';
      const debtOrBlessingZh = '原生家庭提供历练多于直接资产铺路，容易背负沉重家族情感债务；正是这种破茧重生的张力，倒逼命主成长为独当一面的参天大树。';
      const debtOrBlessingEn = 'The family provides crucible training rather than cushioned wealth. This very tension compels the native to mature into a self-reliant powerhouse.';
      const filialAdviceZh = '【孝道与独立平衡】：在物理距离上保持“一碗汤的距离”，经济与精神全面独立自主；逢年过节温情尽孝，但在核心人生决策上坚决自己当家作主。';
      const filialAdviceEn = '【Balancing Filial Love & Autonomy】: Maintain a healthy physical buffer; retain complete financial and spiritual sovereignty while honoring parents with generous holiday care.';
      const familyTraditionZh = '家族原生环境更偏向严苛磨砺与自主试炼，祖荫提供早期精神韧性大于直接物质铺路。';
      const familyTraditionEn = 'The ancestral origin serves as an intense crucible of character rather than cushioned material inheritance.';

      return {
        typeZh: '离祖自立 · 破茧拓荒型',
        typeEn: 'Self-Made Migration & Frontier Pioneer',
        gender: isMale ? '乾造' : '坤造',
        heritageZh,
        heritageEn,
        familyTraditionZh,
        familyTraditionEn,
        debtOrBlessingZh,
        debtOrBlessingEn,
        growthPathZh: debtOrBlessingZh,
        growthPathEn: debtOrBlessingEn,
        filialAdviceZh,
        filialAdviceEn,
        genderDiffZh,
        genderDiffEn,
        canonicalQuoteZh: '《玉照定真经》：“年冲月令，离祖成家。自立门户者，反成栋梁之材。”',
        canonicalQuoteEn: 'Yu Zhao Ding Zhen Jing: "When Year clashes with Month, the native leaves the ancestral land; those who forge their own path become the true pillars of the realm."'
      };
    } else {
      let heritageZh = '年月气象温和相生，祖上积德深厚，父母行善积仁。自幼受良好家庭教育与品行熏陶，成长关键期常有长辈贵人暗中庇护相助。';
      let heritageEn = 'Year and Month pillars generate harmoniously: deep ancestral benevolence and parental cultivation. The native receives essential shelter and moral grounding during formative years.';
      let debtOrBlessingZh = '家族隐性资产与声望人脉丰厚，起步基础扎实稳固；但需警惕因舒适温室而产生依赖心理，避免躺平或丧失饥饿感。';
      let debtOrBlessingEn = 'Substantial intangible cultural and relationship assets provide a solid foundation. Beware of complacency within the family comfort zone.';
      let filialAdviceZh = '【孝道与独立平衡】：常怀感恩之心承继家风，将家族清正美德发扬光大，同时在家族已有根基之上进行现代产业创新，光大门第。';
      let filialAdviceEn = '【Balancing Filial Love & Autonomy】: Carry forward ancestral values with gratitude while driving innovative modern adaptations on top of the family foundation.';
      let familyTraditionZh = '家族历代崇尚仁德修身，家风淳正温和，自幼得祖辈清誉熏陶与无形福泽护持。';
      let familyTraditionEn = 'Generations of virtuous moral stewardship, surrounding the native with quiet ancestral blessings and ethical grounding.';

      if (isHarm) {
        debtOrBlessingZh += '【年月穿害提示】：父母两代在价值观或生活习惯上存在时代隐性代沟，宜多包容少辩论，以各自安好为福。';
        debtOrBlessingEn += ' [Ancestral Harm Note]: Subtle generational value gaps; maintain peaceful coexistence without forcing ideological consensus.';
      }

      return {
        typeZh: '祖德延绵 · 蒙荫积福型',
        typeEn: 'Ancestral Blessing & Compounded Heritage',
        gender: isMale ? '乾造' : '坤造',
        heritageZh,
        heritageEn,
        familyTraditionZh,
        familyTraditionEn,
        debtOrBlessingZh,
        debtOrBlessingEn,
        growthPathZh: debtOrBlessingZh,
        growthPathEn: debtOrBlessingEn,
        filialAdviceZh,
        filialAdviceEn,
        genderDiffZh,
        genderDiffEn,
        canonicalQuoteZh: '《玉照定真经》：“年月相生，祖业长留。父慈子孝，百福骈臻。”',
        canonicalQuoteEn: 'Yu Zhao Ding Zhen Jing: "When Year and Month mutually generate, ancestral heritage endures. Loving parents and filial offspring attract compounded blessings."'
      };
    }
  }

  static getAllAphorisms() {
    return YU_ZHAO_DATA.aphorisms;
  }

  static getTransitInteractionReading(bazi) {
    if (!bazi || !bazi.pillars) {
      return {
        titleZh: '四柱岁运交感直断',
        titleEn: 'Pillar-Transit Interaction Direct Verdict',
        verdictZh: '四柱相生互照，岁运逢冲亦有吉神护佑。',
        verdictEn: 'Pillars mutually generate; transits meeting clashes are sheltered by auspicious stars.'
      };
    }
    const p = bazi.pillars;
    const branches = [p.year?.branch, p.month?.branch, p.day?.branch, p.hour?.branch].filter(Boolean);
    const dayBranch = p.day?.branch || '子';
    const monthBranch = p.month?.branch || '子';

    let verdictZh = '《玉照定真经》断诀：';
    let verdictEn = 'Yu Zhao Ding Zhen Jing Direct Verdict: ';

    if (dayBranch === monthBranch) {
      verdictZh += '日月同支比和，立身沉稳坚毅，然中年须防婚恋与合伙之暗耗。';
      verdictEn += 'Day and Month share the same branch: resolute character; maintain clear boundaries in partnership.';
    } else if (
      (dayBranch === '子' && monthBranch === '午') || (dayBranch === '午' && monthBranch === '子') ||
      (dayBranch === '卯' && monthBranch === '酉') || (dayBranch === '酉' && monthBranch === '卯') ||
      (dayBranch === '寅' && monthBranch === '申') || (dayBranch === '申' && monthBranch === '寅') ||
      (dayBranch === '巳' && monthBranch === '亥') || (dayBranch === '亥' && monthBranch === '巳') ||
      (dayBranch === '辰' && monthBranch === '戌') || (dayBranch === '戌' && monthBranch === '辰') ||
      (dayBranch === '丑' && monthBranch === '未') || (dayBranch === '未' && monthBranch === '丑')
    ) {
      verdictZh += '日月逢冲，早年多离乡创业，自立门户破茧成蝶，动中求财大富。';
      verdictEn += 'Day and Month clash: early self-made pioneer leaving ancestral ground to amass dynamic wealth.';
    } else {
      verdictZh += '四柱宫位气机顺行，得父母长者庇荫，晚景子嗣昌明。';
      verdictEn += 'Smooth circulation across pillars: blessed by ancestral support and promising descendants.';
    }

    return {
      titleZh: '《玉照定真经》四柱岁运交感与刑冲神煞直断',
      titleEn: 'Yu Zhao Ding Zhen Jing: Structural Clash & Transit Hologram',
      verdictZh,
      verdictEn
    };
  }

  static search(keyword) {
    const results = [];
    if (!keyword || typeof keyword !== 'string') return results;
    const kw = keyword.trim().toLowerCase();

    // Search aphorisms
    YU_ZHAO_DATA.aphorisms.forEach(a => {
      if (a.titleZh.toLowerCase().includes(kw) || a.quoteZh.toLowerCase().includes(kw) || a.vernacularZh.toLowerCase().includes(kw) ||
          (a.titleEn && a.titleEn.toLowerCase().includes(kw)) || (a.quoteEn && a.quoteEn.toLowerCase().includes(kw))) {
        results.push({
          source: '《玉照定真经》· 经文',
          sourceEn: 'Yu Zhao Ding Zhen Jing: Aphorisms',
          title: a.titleZh,
          titleEn: a.titleEn || a.titleZh,
          content: a.quoteZh,
          contentEn: a.quoteEn || a.quoteZh,
          detail: a.vernacularZh,
          detailEn: a.vernacularEn || a.vernacularZh
        });
      }
    });

    // Search spouse profiles
    for (const [branch, p] of Object.entries(YU_ZHAO_DATA.spousePalaceProfiles)) {
      if (branch.includes(kw) || p.archetypeZh.toLowerCase().includes(kw) || p.traitsZh.toLowerCase().includes(kw) || p.adviceZh.toLowerCase().includes(kw) ||
          (p.archetypeEn && p.archetypeEn.toLowerCase().includes(kw)) || (p.traitsEn && p.traitsEn.toLowerCase().includes(kw))) {
        results.push({
          source: '《玉照定真经》· 夫妻宫',
          sourceEn: 'Yu Zhao Ding Zhen Jing: Spouse Palace',
          title: '日坐【' + branch + '】配偶原型：' + p.archetypeZh,
          titleEn: 'Day Branch [' + branch + '] Consort Archetype: ' + (p.archetypeEn || p.archetypeZh),
          content: p.traitsZh,
          contentEn: p.traitsEn || p.traitsZh,
          detail: p.adviceZh,
          detailEn: p.adviceEn || p.adviceZh
        });
      }
    }

    // Search 60 day pillar profiles
    if (YU_ZHAO_DATA.dayPillarProfiles) {
      for (const [pillar, p] of Object.entries(YU_ZHAO_DATA.dayPillarProfiles)) {
        if (pillar.includes(kw) || p.archetypeZh.toLowerCase().includes(kw) || p.traitsZh.toLowerCase().includes(kw) ||
            (p.archetypeEn && p.archetypeEn.toLowerCase().includes(kw)) || (p.traitsEn && p.traitsEn.toLowerCase().includes(kw))) {
          results.push({
            source: '《玉照定真经》· 六十甲子日柱',
            sourceEn: 'Yu Zhao Ding Zhen Jing: 60 JiaZi Day Pillar',
            title: '日柱【' + pillar + '】配偶：' + p.archetypeZh,
            titleEn: 'Day Pillar [' + pillar + '] Consort: ' + (p.archetypeEn || p.archetypeZh),
            content: p.traitsZh,
            contentEn: p.traitsEn || p.traitsZh,
            detail: p.adviceZh,
            detailEn: p.adviceEn || p.adviceZh
          });
        }
      }
    }

    return results;
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { YuZhaoDB, YU_ZHAO_DATA };
}
if (typeof window !== 'undefined') {
  window.YuZhaoDB = YuZhaoDB;
  window.YU_ZHAO_DATA = YU_ZHAO_DATA;
}
