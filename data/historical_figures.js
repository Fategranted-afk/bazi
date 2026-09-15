/**
 * 历史人物参考 208位历史名人数据库 (南北乱世三百年：西晋至隋朝)
 * Historical Figures Mirror & Reference Database (265 AD - 589 AD)
 * 涵盖：西晋八王之乱、五胡十六国、东晋门阀风度、南朝宋齐梁陈、北魏拓土汉化、东西二魏、周齐对峙、大隋一统
 */

const HISTORICAL_FIGURES = [
  {
    "id": "sima_yan",
    "nameZh": "司马炎",
    "nameEn": "Sima Yan (Emperor Wu of Jin)",
    "dynastyZh": "西晋",
    "dynastyEn": "Western Jin",
    "eraTag": "western_jin",
    "eraNameZh": "西晋风云",
    "eraNameEn": "Western Jin Dynastic Era",
    "positionZh": "西晋开国皇帝 · 一统三国",
    "positionEn": "Founding Emperor of Western Jin · Unifier of Three Kingdoms",
    "personalityZh": "宽仁宽弘、后期怠政、溺于安逸、缺乏制度纵深",
    "personalityEn": "Benevolent and magnanimous early on, yet indulgent, lax, and lacking institutional foresight in late years",
    "deedsZh": "代魏立晋，灭东吴终结三国鼎立局面；推行占田制太康之治；然晚年大封同姓诸王并立痴愚惠帝，埋下八王之乱与西晋崩溃的总根源。",
    "deedsEn": "Usurped Cao Wei to establish Jin and conquered Eastern Wu, ending the Three Kingdoms era. Decreed land tenure reforms, but later mass-enfeoffed imperial princes and installed his intellectually impaired heir, sparking the devastating War of Eight Princes.",
    "archetype": "executive",
    "fiveElements": {
      "dominant": "土",
      "secondary": "金"
    },
    "tenGodsAffinity": [
      "正官",
      "正财",
      "食神"
    ],
    "patternType": "正官格",
    "strengthAdviceZh": "善聚四方人心，善抓时代风口顺势而为；有海纳百川之气度，能整合存量资源达成大一统宏图。",
    "strengthAdviceEn": "Master at rallying human hearts and seizing macro momentum; possesses immense breadth to integrate diverse factions into systemic victory.",
    "weaknessAdviceZh": "警惕小胜即骄与晚节不保！切忌在取得阶段性胜利后彻底放松警惕、贪图享乐，决不可把核心法度与制度基石建立在侥幸与血缘私情上。",
    "weaknessAdviceEn": "Beware premature complacency and moral laxity! Never lower guard after early triumphs, and never anchor core governance on nepotism or sentimental wishful thinking.",
    "historicalQuoteZh": "《晋书》评：平吴之后，怠于政事，羊车望幸，极度荒耽，社稷自覆之端，发于斯矣。",
    "historicalQuoteEn": "Book of Jin: After conquering Wu, he abandoned discipline and indulged in court luxuries; the catastrophic demise of his dynasty was seeded therein.",
    "auxiliaryStrengthsZh": [
      "善聚四方人心，善抓时代风口顺势而为",
      "有海纳百川之气度，能整合存量资源达成大一统宏图"
    ],
    "auxiliaryStrengthsEn": [
      "Master at rallying human hearts and seizing macro momentum",
      "possesses immense breadth to integrate diverse factions into systemic victory"
    ],
    "auxiliaryWeaknessesZh": [
      "警惕小胜即骄与晚节不保",
      "切忌在取得阶段性胜利后彻底放松警惕、贪图享乐，决不可把核心法度与制度基石建立在侥幸与血缘私情上"
    ],
    "auxiliaryWeaknessesEn": [
      "Beware premature complacency and moral laxity",
      "Never lower guard after early triumphs, and never anchor core governance on nepotism or sentimental wishful thinking"
    ]
  },
  {
    "id": "sima_zhong",
    "nameZh": "司马衷",
    "nameEn": "Sima Zhong (Emperor Hui of Jin)",
    "dynastyZh": "西晋",
    "dynastyEn": "Western Jin",
    "eraTag": "western_jin",
    "eraNameZh": "西晋风云",
    "eraNameEn": "Western Jin Dynastic Era",
    "positionZh": "西晋第二任皇帝 · 傀儡天子",
    "positionEn": "Second Emperor of Western Jin · Puppet Sovereign",
    "personalityZh": "痴顽暗弱、质朴无争、任人摆布、毫无政治决断力",
    "personalityEn": "Mentally feeble, docile, completely manipulable, devoid of political agency and situational discernment",
    "deedsZh": "天下饥荒闻民饥而问“何不食肉糜”；在位17年沦为贾南风及诸王血腥争权的摆设木偶，导致中原陆沉与永嘉之乱。",
    "deedsEn": "Famously asked 'Why don't they eat meat porridge?' upon hearing starving peasants had no grain. Reigned for 17 years as a voiceless hostage amid brutal civil wars, precipitating the fall of northern China.",
    "archetype": "civil",
    "fiveElements": {
      "dominant": "水",
      "secondary": "木"
    },
    "tenGodsAffinity": [
      "正印",
      "食神"
    ],
    "patternType": "从弱格",
    "strengthAdviceZh": "保有难得的纯真天性与无害心境，在极端凶险险境中因无威胁性而屡次免遭当场诛杀。",
    "strengthAdviceEn": "Preserves genuine harmlessness and total absence of malice, which ironically spared his life as a harmless figurehead amid deadly factional purges.",
    "weaknessAdviceZh": "千万不可德不配位！在自身能力、心智认知极度欠缺时，万不可被他人推上风口浪尖承担生死重责，否则必沦为嗜血豺狼的提线木偶与牺牲品。",
    "weaknessAdviceEn": "Never accept a seat of authority far exceeding your capacity! When lacking competence and strategic awareness, being thrust into high power guarantees destruction as a pawn.",
    "historicalQuoteZh": "及天下荒乱，百姓饿死，帝曰：何不食肉糜？",
    "historicalQuoteEn": "When famine starved the common people, the Emperor asked: 'Why do they not eat meat porridge?'",
    "auxiliaryStrengthsZh": [
      "保有难得的纯真天性与无害心境",
      "在极端凶险险境中因无威胁性而屡次免遭当场诛杀"
    ],
    "auxiliaryStrengthsEn": [
      "Preserves genuine harmlessness and total absence of malice",
      "which ironically spared his life as a harmless figurehead amid deadly factional purges"
    ],
    "auxiliaryWeaknessesZh": [
      "千万不可德不配位",
      "在自身能力、心智认知极度欠缺时，万不可被他人推上风口浪尖承担生死重责，否则必沦为嗜血豺狼的提线木偶与牺牲品"
    ],
    "auxiliaryWeaknessesEn": [
      "Never accept a seat of authority far exceeding your capacity",
      "When lacking competence and strategic awareness, being thrust into high power guarantees destruction as a pawn"
    ]
  },
  {
    "id": "jia_nanfeng",
    "nameZh": "贾南风",
    "nameEn": "Empress Jia Nanfeng",
    "dynastyZh": "西晋",
    "dynastyEn": "Western Jin",
    "eraTag": "western_jin",
    "eraNameZh": "西晋风云",
    "eraNameEn": "Western Jin Dynastic Era",
    "positionZh": "西晋皇后 · 铁血权后",
    "positionEn": "Empress of Western Jin · Iron-Fisted Autocrat",
    "personalityZh": "悍妒残忍、果决狠辣、权力欲极强、权谋手段极端激进",
    "personalityEn": "Fiercely jealous, ruthless, highly decisive, intoxicated by sheer power, adopting extreme Machiavellian maneuvers",
    "deedsZh": "联络楚王玮血洗杨骏外戚集团，废杀皇太后；鸩杀愍怀太子司马遹，直接引爆赵王司马伦起兵诛贾氏，拉开八王之乱滔天浩劫序幕。",
    "deedsEn": "Forged alliances to exterminate the regent Yang Jun, deposed Empress Dowager Yang, and poisoned Crown Prince Sima Yu, directly triggering Sima Lun's armed uprising and the catastrophe of the Eight Princes.",
    "archetype": "executive",
    "fiveElements": {
      "dominant": "火",
      "secondary": "金"
    },
    "tenGodsAffinity": [
      "七杀",
      "伤官",
      "劫财"
    ],
    "patternType": "伤官见官",
    "strengthAdviceZh": "杀伐果断，善于在危急关头迅速识别并组建政治同盟，执行力极其强悍，敢打敢拼绝不手软。",
    "strengthAdviceEn": "Demonstrates relentless tactical decisiveness, quickly forms opportunistic power coalitions, and executes high-stakes operations without hesitation.",
    "weaknessAdviceZh": "毒辣无制与缺乏长远道德防线必致粉身碎骨！凡事做绝者必无退路，滥用权谋、斩草除根之举终将激起天下共愤并遭同等惨烈反噬。",
    "weaknessAdviceEn": "Unrestrained cruelty and utter disregard for moral guardrails lead to absolute doom! Pushing adversaries to extinction burns all bridges and inevitably invites annihilating retribution.",
    "historicalQuoteZh": "《晋书》赞曰：贾后操戈，遂覆神器。弑后杀储，凶残莫比。",
    "historicalQuoteEn": "Book of Jin: Empress Jia wielded the dagger and overturned the imperial altar; slaying empresses and poisoning the heir, her brutality was unmatched.",
    "auxiliaryStrengthsZh": [
      "杀伐果断",
      "善于在危急关头迅速识别并组建政治同盟，执行力极其强悍，敢打敢拼绝不手软"
    ],
    "auxiliaryStrengthsEn": [
      "Demonstrates relentless tactical decisiveness",
      "quickly forms opportunistic power coalitions, and executes high-stakes operations without hesitation"
    ],
    "auxiliaryWeaknessesZh": [
      "毒辣无制与缺乏长远道德防线必致粉身碎骨",
      "凡事做绝者必无退路，滥用权谋、斩草除根之举终将激起天下共愤并遭同等惨烈反噬"
    ],
    "auxiliaryWeaknessesEn": [
      "Unrestrained cruelty and utter disregard for moral guardrails lead to absolute doom",
      "Pushing adversaries to extinction burns all bridges and inevitably invites annihilating retribution"
    ]
  },
  {
    "id": "sima_lun",
    "nameZh": "司马伦",
    "nameEn": "Sima Lun (Prince of Zhao)",
    "dynastyZh": "西晋",
    "dynastyEn": "Western Jin",
    "eraTag": "western_jin",
    "eraNameZh": "西晋风云",
    "eraNameEn": "Western Jin Dynastic Era",
    "positionZh": "赵王 · 篡位称帝宗室",
    "positionEn": "Prince of Zhao · Usurping Imperial Regent",
    "personalityZh": "志大才疏、阴鸷贪婪、听信佞幸、德浅而欲壑难填",
    "personalityEn": "Grandiose yet shallow, greedy, blindly trusting corrupt sycophants, possessing vast ambition without competence",
    "deedsZh": "设计激怒贾后诛杀太子后反手诛贾后夺权；逼晋惠帝退位篡位称帝，大肆滥封亲信致“貂不足，狗尾续”，激起三王起兵勤王将其兵败赐死。",
    "deedsEn": "Schemed to let Empress Jia murder the prince before exterminating her clan to seize power. Usurped the imperial throne, handing out noble titles so promiscuously that dog tails patched court caps ('dog tails continuing sable'), provoking nationwide revolt and execution.",
    "archetype": "executive",
    "fiveElements": {
      "dominant": "土",
      "secondary": "木"
    },
    "tenGodsAffinity": [
      "偏印",
      "劫财",
      "七杀"
    ],
    "patternType": "枭神夺食",
    "strengthAdviceZh": "善于隐忍蛰伏于两强相争之间，抓住空隙发起致命一击实现权力跃升。",
    "strengthAdviceEn": "Patiently lurks in the shadows between rival titans, seizing opportune power vacuums to execute fatal strikes.",
    "weaknessAdviceZh": "切忌被谄媚佞臣蒙蔽双眼！能力与资望不足时贸然黄袍加身篡夺最高位，滥施爵位恩惠只会自掘坟墓，成为众矢之的。",
    "weaknessAdviceEn": "Never allow sycophants to dictate policy! Usurping supreme command without moral standing or talent, and distributing cheap favors will make you the universal target of annihilation.",
    "historicalQuoteZh": "时人谣曰：貂不足，狗尾续。伦之狂悖，自取其戮。",
    "historicalQuoteEn": "Popular folk ballad: 'When sable fur runs out, dog tails patch the cap.' His reckless vanity sealed his inevitable ruin.",
    "auxiliaryStrengthsZh": [
      "善于隐忍蛰伏于两强相争之间",
      "抓住空隙发起致命一击实现权力跃升"
    ],
    "auxiliaryStrengthsEn": [
      "Patiently lurks in the shadows between rival titans",
      "seizing opportune power vacuums to execute fatal strikes"
    ],
    "auxiliaryWeaknessesZh": [
      "切忌被谄媚佞臣蒙蔽双眼",
      "能力与资望不足时贸然黄袍加身篡夺最高位，滥施爵位恩惠只会自掘坟墓，成为众矢之的"
    ],
    "auxiliaryWeaknessesEn": [
      "Never allow sycophants to dictate policy",
      "Usurping supreme command without moral standing or talent, and distributing cheap favors will make you the universal target of annihilation"
    ]
  },
  {
    "id": "sima_jiong",
    "nameZh": "司马冏",
    "nameEn": "Sima Jiong (Prince of Qi)",
    "dynastyZh": "西晋",
    "dynastyEn": "Western Jin",
    "eraTag": "western_jin",
    "eraNameZh": "西晋风云",
    "eraNameEn": "Western Jin Dynastic Era",
    "positionZh": "齐王 · 大司马专政",
    "positionEn": "Prince of Qi · Grand Marshal & Regent",
    "personalityZh": "功高骄横、奢靡纵欲、偏听自大、缺乏深层政治敏锐",
    "personalityEn": "Arrogant following military success, lavish, self-important, and oblivious to emerging political peril",
    "deedsZh": "首发讨伐赵王伦义旗，迎复惠帝有再造之功；然辅政后骄奢淫逸，大造宫室，拒绝忠言，终被长沙王司马乂夜袭斩杀于宫门。",
    "deedsEn": "Raised the first banner of righteous rebellion to topple usurper Sima Lun and restored Emperor Hui. Yet upon becoming regent, he plunged into luxury and despotism, ignoring sage counsel until ambushed and slain by Sima Ai.",
    "archetype": "military",
    "fiveElements": {
      "dominant": "金",
      "secondary": "火"
    },
    "tenGodsAffinity": [
      "比肩",
      "七杀",
      "偏财"
    ],
    "patternType": "羊刃格",
    "strengthAdviceZh": "具备在大乱中敢为天下先的魄力与军事号召力，能迅速凝聚共识打碎旧权威。",
    "strengthAdviceEn": "Exhibits immense courage to be the first mover in chaos, possessing battlefield charisma to break tyrannical power.",
    "weaknessAdviceZh": "大功告成之日即是生死存亡之秋！居大功切莫矜傲，一旦沉溺于权力顶峰的骄奢与傲慢，必在权力真空的睡梦中被同袍背刺。",
    "weaknessAdviceEn": "The moment of crowning achievement is the pinnacle of danger! Never wallow in arrogance after triumph; complacency invites immediate betrayals from peers.",
    "historicalQuoteZh": "《晋书》：齐王矜伐大勋，自恣专政，祸不旋踵，悲夫！",
    "historicalQuoteEn": "Book of Jin: The Prince of Qi flaunted monumental merit and indulged in unchecked tyranny; calamity arrived before his footsteps settled.",
    "auxiliaryStrengthsZh": [
      "具备在大乱中敢为天下先的魄力与军事号召力",
      "能迅速凝聚共识打碎旧权威"
    ],
    "auxiliaryStrengthsEn": [
      "Exhibits immense courage to be the first mover in chaos",
      "possessing battlefield charisma to break tyrannical power"
    ],
    "auxiliaryWeaknessesZh": [
      "大功告成之日即是生死存亡之秋",
      "居大功切莫矜傲，一旦沉溺于权力顶峰的骄奢与傲慢，必在权力真空的睡梦中被同袍背刺"
    ],
    "auxiliaryWeaknessesEn": [
      "The moment of crowning achievement is the pinnacle of danger",
      "Never wallow in arrogance after triumph"
    ]
  },
  {
    "id": "sima_yue",
    "nameZh": "司马越",
    "nameEn": "Sima Yue (Prince of Donghai)",
    "dynastyZh": "西晋",
    "dynastyEn": "Western Jin",
    "eraTag": "western_jin",
    "eraNameZh": "西晋风云",
    "eraNameEn": "Western Jin Dynastic Era",
    "positionZh": "东海王 · 八王之乱终局操盘手",
    "positionEn": "Prince of Donghai · Final Victor of Eight Princes",
    "personalityZh": "深沉善算、隐忍老谋、手段毒辣、弃顾大局",
    "personalityEn": "Deep, calculating, cunningly patient, merciless, frequently sacrificing the greater national interest for factional survival",
    "deedsZh": "平灭成都王司马颖与河间王司马颙，毒死晋惠帝立晋怀帝，独揽西晋最后大权；为自保诛杀忠臣王衍、卫玠之族，引主力出洛阳导致京师空虚，忧死项县，其十万主力旋即被石勒全歼焚尸。",
    "deedsEn": "Crushed Prince of Chengdu and Prince of Hejian, poisoned Emperor Hui, and seized supreme power. Sacrificed imperial defenses to safeguard his own army, fleeing Luoyang and dying of anxiety; his 100,000 elite troops were immediately surrounded, butchered, and burned by Shi Le.",
    "archetype": "executive",
    "fiveElements": {
      "dominant": "水",
      "secondary": "金"
    },
    "tenGodsAffinity": [
      "正官",
      "七杀",
      "劫财"
    ],
    "patternType": "官杀混杂",
    "strengthAdviceZh": "具备极强的危机生存能力与长期政治缠斗韧性，善于熬垮所有竞争对手。",
    "strengthAdviceEn": "Unrivaled resilience in factional endurance warfare; an expert at outlasting opponents through tactical patience and defensive survival.",
    "weaknessAdviceZh": "格局狭隘与本位主义是倾覆的死敌！若只顾保留自身势力而弃大局生态于不顾，皮之不存毛将焉附，最终自身主力亦难逃覆亡。",
    "weaknessAdviceEn": "Self-serving factionalism destroys the whole vessel! Neglecting system stability merely to hoard personal reserves leaves you naked when external cataclysms strike.",
    "historicalQuoteZh": "石勒焚司马越柩曰：乱天下者，此人也，吾为天下报之！",
    "historicalQuoteEn": "Shi Le incinerated Sima Yue's coffin, proclaiming: 'This is the man who threw the realm into turmoil; I avenge the empire upon him!'",
    "auxiliaryStrengthsZh": [
      "具备极强的危机生存能力与长期政治缠斗韧性",
      "善于熬垮所有竞争对手"
    ],
    "auxiliaryStrengthsEn": [
      "Unrivaled resilience in factional endurance warfare",
      "an expert at outlasting opponents through tactical patience and defensive survival"
    ],
    "auxiliaryWeaknessesZh": [
      "格局狭隘与本位主义是倾覆的死敌",
      "若只顾保留自身势力而弃大局生态于不顾，皮之不存毛将焉附，最终自身主力亦难逃覆亡"
    ],
    "auxiliaryWeaknessesEn": [
      "Self-serving factionalism destroys the whole vessel",
      "Neglecting system stability merely to hoard personal reserves leaves you naked when external cataclysms strike"
    ]
  },
  {
    "id": "yang_xianrong",
    "nameZh": "羊献容",
    "nameEn": "Empress Yang Xianrong",
    "dynastyZh": "西晋 / 前赵",
    "dynastyEn": "Western Jin / Former Zhao",
    "eraTag": "western_jin",
    "eraNameZh": "西晋风云",
    "eraNameEn": "Western Jin Dynastic Era",
    "positionZh": "晋赵两朝皇后 · 五废六立传奇",
    "positionEn": "Empress of Both Jin and Former Zhao · Legendary Resilient Matriarch",
    "personalityZh": "坚韧从容、审时度势、敏察善语、逆境极强生存适应力",
    "personalityEn": "Incredibly tough, calm, perceptive, articulate, possessing exceptional psychological adaptability under harrowing adversity",
    "deedsZh": "八王之乱中作为晋惠帝皇后屡遭废黜拘禁，历经五次被废、六次立后之奇险；永嘉之乱陷于匈奴汉赵，嫁刘曜深得宠爱，再立为前赵皇后，参预国政安享晚年。",
    "deedsEn": "Survived five depositions and six restorations during the chaotic War of Eight Princes as Jin Empress. Captured by Xiongnu troops in the fall of Luoyang, she married Liu Yao, earned deep love, was crowned Former Zhao Empress, and guided court affairs serenely.",
    "archetype": "civil",
    "fiveElements": {
      "dominant": "水",
      "secondary": "木"
    },
    "tenGodsAffinity": [
      "正印",
      "正官",
      "伤官"
    ],
    "patternType": "伤官佩印",
    "strengthAdviceZh": "在命运极端狂风巨浪面前具备惊人的韧性与降维解套智慧，不被虚名所累，善于与当下的现实深度和解并赢得新生。",
    "strengthAdviceEn": "Unmatched psychological elasticity in the face of cosmic upheaval; sheds vanity to make total peace with reality and claim rebirth through genuine competence.",
    "weaknessAdviceZh": "早期深陷弱势依附地位无法掌控自身命盘，必须尽早构筑不可替代的自主智慧与情感防线。",
    "weaknessAdviceEn": "Early dependence on volatile sovereigns left her a captive pawn; build autonomous intellectual defenses early to avoid being buffeted by external storms.",
    "historicalQuoteZh": "刘曜问：我何如司马家儿？献容曰：何可相提并论！陛下开基之圣主，彼亡国之暗夫。",
    "historicalQuoteEn": "Liu Yao asked: 'How do I compare to Sima's son?' She replied: 'How can you be compared! Your Majesty is a founding monarch; he was a dim sovereign who lost his realm.'",
    "auxiliaryStrengthsZh": [
      "在命运极端狂风巨浪面前具备惊人的韧性与降维解套智慧",
      "不被虚名所累，善于与当下的现实深度和解并赢得新生"
    ],
    "auxiliaryStrengthsEn": [
      "Unmatched psychological elasticity in the face of cosmic upheaval",
      "sheds vanity to make total peace with reality and claim rebirth through genuine competence"
    ],
    "auxiliaryWeaknessesZh": [
      "早期深陷弱势依附地位无法掌控自身命盘",
      "必须尽早构筑不可替代的自主智慧与情感防线"
    ],
    "auxiliaryWeaknessesEn": [
      "Early dependence on volatile sovereigns left her a captive pawn",
      "build autonomous intellectual defenses early to avoid being buffeted by external storms"
    ]
  },
  {
    "id": "wei_jie",
    "nameZh": "卫玠",
    "nameEn": "Wei Jie",
    "dynastyZh": "西晋",
    "dynastyEn": "Western Jin",
    "eraTag": "western_jin",
    "eraNameZh": "西晋风云",
    "eraNameEn": "Western Jin Dynastic Era",
    "positionZh": "魏晋风度极致名士 · 玉人",
    "positionEn": "Epitome of Wei-Jin Pure Conversationalist · Jade Gentleman",
    "personalityZh": "神姿高迈、清秀绝俗、思辨深邃、体虚多思而神伤",
    "personalityEn": "Ethereal charisma, transcendent eloquence, philosophically profound, yet physically fragile and prone to mental exhaustion",
    "deedsZh": "幼有神童之誉，人称“璧人”；长于玄学清谈，辞理清远；避乱南下建康，观者倾城如堵，因体羸过劳而亡，世称“看杀卫玠”。",
    "deedsEn": "Renowned from childhood as a breathtaking beauty ('Jade Person') and unmatched metaphysical debater. Fleeing south to Jiankang, vast crowds thronged to gaze upon him; frail in health, the strain proved fatal, giving rise to the idiom 'Gazed to death Wei Jie'.",
    "archetype": "specialist",
    "fiveElements": {
      "dominant": "金",
      "secondary": "水"
    },
    "tenGodsAffinity": [
      "食神",
      "偏印",
      "比肩"
    ],
    "patternType": "食神吐秀",
    "strengthAdviceZh": "精神境界极其超脱，具备穿透浮华直击哲学本质的深度悟性与人格审美魅力。",
    "strengthAdviceEn": "Profound spiritual detachment and razor-sharp intellect capable of piercing superficialities to touch transcendent philosophical truths.",
    "weaknessAdviceZh": "切忌过度颅内内耗与体力透支！敏感多思型心智必须强制建立生理防火墙，绝不可让外界的审视眼光与社交围观耗干自身元气。",
    "weaknessAdviceEn": "Strictly prevent cognitive overload and physical depletion! Highly sensitive intellectual minds must erect bodily firewalls to prevent social scrutiny from draining life essence.",
    "historicalQuoteZh": "京师相传：卫玠素抱羸疾，见者如堵，莫不叹异，劳顿致卒，时人谓之‘看杀卫玠’。",
    "historicalQuoteEn": "Capital annals recorded: 'Wei Jie was chronically fragile; crowds blocked roads to see him, exhausting him unto death, named \"Gazed to death Wei Jie\".'",
    "auxiliaryStrengthsZh": [
      "精神境界极其超脱",
      "具备穿透浮华直击哲学本质的深度悟性与人格审美魅力"
    ],
    "auxiliaryStrengthsEn": [
      "Profound spiritual detachment and razor-sharp intellect capable of piercing superficialities to touch transcendent philosophical truths.",
      "Leverages core natural talents to pierce strategic bottlenecks."
    ],
    "auxiliaryWeaknessesZh": [
      "切忌过度颅内内耗与体力透支",
      "敏感多思型心智必须强制建立生理防火墙，绝不可让外界的审视眼光与社交围观耗干自身元气"
    ],
    "auxiliaryWeaknessesEn": [
      "Strictly prevent cognitive overload and physical depletion",
      "Highly sensitive intellectual minds must erect bodily firewalls to prevent social scrutiny from draining life essence"
    ]
  },
  {
    "id": "pan_an",
    "nameZh": "潘安 (潘岳)",
    "nameEn": "Pan An (Pan Yue)",
    "dynastyZh": "西晋",
    "dynastyEn": "Western Jin",
    "eraTag": "western_jin",
    "eraNameZh": "西晋风云",
    "eraNameEn": "Western Jin Dynastic Era",
    "positionZh": "西晋文坛泰斗 · 金谷二十四友",
    "positionEn": "Literary Titan of Western Jin · Jingu 24 Worthies",
    "personalityZh": "才藻绝代、容貌盖世、趋炎附势、政治投机心切",
    "personalityEn": "Supreme literary genius, legendary peerless looks, yet opportunistically sycophantic and politically reckless",
    "deedsZh": "美姿仪，出游洛阳妇女掷果盈车；作《悼亡诗》成千古绝唱；然趋炎附势依附贾谧，谄事权贵望尘而拜，更参与伪造太子谋反草书，终在八王乱中被司马伦夷灭三族。",
    "deedsEn": "Famed for peerless beauty, women filled his carriage with fruits in Luoyang; penned immortal mourning poetry. Yet he shamelessly curried favor with Jia Mi, prostrating in roadside dust, and drafted the forged treason edict against the prince, meeting execution alongside his whole clan.",
    "archetype": "specialist",
    "fiveElements": {
      "dominant": "水",
      "secondary": "火"
    },
    "tenGodsAffinity": [
      "伤官",
      "正财",
      "偏印"
    ],
    "patternType": "伤官生财",
    "strengthAdviceZh": "文采斐然、表达沟通与审美天赋极高，善于在文化与专业领域建立顶尖辨识度。",
    "strengthAdviceEn": "Brilliant artistic eloquence, persuasive communication, and supreme aesthetic distinction in craft and culture.",
    "weaknessAdviceZh": "文人切忌卷入无底线投机权斗！不要为了短期名利践踏良知去做刀笔吏构陷他人，政治权谋的血腥绞肉机绝非才子投机之所。",
    "weaknessAdviceEn": "Scholars must never become cynical pawns in ruthless political machinations! Fabricating evidence for tyrants to secure status invariably leads to total destruction.",
    "historicalQuoteZh": "岳性轻躁，趋附贾谧，每候其出，与石崇望尘而拜，终至夷灭。",
    "historicalQuoteEn": "Book of Jin: Pan Yue was frivolous and vain, bowing to dust before Jia Mi's carriage, ultimately bringing extinction upon his lineage.",
    "auxiliaryStrengthsZh": [
      "文采斐然、表达沟通与审美天赋极高",
      "善于在文化与专业领域建立顶尖辨识度"
    ],
    "auxiliaryStrengthsEn": [
      "Brilliant artistic eloquence",
      "persuasive communication, and supreme aesthetic distinction in craft and culture"
    ],
    "auxiliaryWeaknessesZh": [
      "文人切忌卷入无底线投机权斗",
      "不要为了短期名利践踏良知去做刀笔吏构陷他人，政治权谋的血腥绞肉机绝非才子投机之所"
    ],
    "auxiliaryWeaknessesEn": [
      "Scholars must never become cynical pawns in ruthless political machinations",
      "Fabricating evidence for tyrants to secure status invariably leads to total destruction"
    ]
  },
  {
    "id": "lu_ji",
    "nameZh": "陆机",
    "nameEn": "Lu Ji",
    "dynastyZh": "西晋",
    "dynastyEn": "Western Jin",
    "eraTag": "western_jin",
    "eraNameZh": "西晋风云",
    "eraNameEn": "Western Jin Dynastic Era",
    "positionZh": "一代文宗 · 后将军河北大都督",
    "positionEn": "Literary Patriarch · Commander of Hebei Army",
    "personalityZh": "才高自矜、文人挂帅、书生气重、不识军旅险诈",
    "personalityEn": "Supremely talented yet proud; a bookish scholar-general utterly out of his depth amid cutthroat military intrigues",
    "deedsZh": "东吴名门之后，入洛阳文震中原，著《文赋》为古代文论巅峰；八王之乱卷入成都王司马颖阵营，受命统帅二十万大军攻洛阳，遭谗言陷害与诸将掣肘兵败，被谮诛三族，临刑叹‘华亭鹤唳’。",
    "deedsEn": "Heir of Wu's elite nobility, shook Luoyang with literary mastery and wrote the landmark 'Wen Fu'. Enlisted by Prince of Chengdu to lead 200,000 troops against Luoyang, he was sabotaged by jealous rivals, suffered defeat, and was executed with his clan, lamenting the lost cranes of Huating.",
    "archetype": "specialist",
    "fiveElements": {
      "dominant": "木",
      "secondary": "火"
    },
    "tenGodsAffinity": [
      "伤官",
      "偏印",
      "正官"
    ],
    "patternType": "伤官用印",
    "strengthAdviceZh": "学术洞察力与理论总结能力达登峰造极之境，善于开创系统性的传世经典体系。",
    "strengthAdviceEn": "Towering theoretical vision and analytical rigor capable of founding timeless masterpieces and strategic treatises.",
    "weaknessAdviceZh": "技术/学术专精人才千万不可在缺乏实战根基时强行接盘超大规模武职操盘！文人带兵遭群狼嫉恨掣肘必败，当警惕被捧杀。",
    "weaknessAdviceEn": "Specialists must never accept massive operational warfare commands without grassroots control! Bookish intellectuals commanding cutthroat warlords will be sabotaged and framed.",
    "historicalQuoteZh": "陆机临刑叹曰：华亭鹤唳，岂可复闻乎！三族皆夷，天下悲之。",
    "historicalQuoteEn": "Lu Ji lamented at the execution block: 'Shall I ever hear the cry of Huating's cranes again?' His whole clan was executed, mourning echoed through the realm.",
    "auxiliaryStrengthsZh": [
      "学术洞察力与理论总结能力达登峰造极之境",
      "善于开创系统性的传世经典体系"
    ],
    "auxiliaryStrengthsEn": [
      "Towering theoretical vision and analytical rigor capable of founding timeless masterpieces and strategic treatises.",
      "Leverages core natural talents to pierce strategic bottlenecks."
    ],
    "auxiliaryWeaknessesZh": [
      "技术/学术专精人才千万不可在缺乏实战根基时强行接盘超大规模武职操盘",
      "文人带兵遭群狼嫉恨掣肘必败，当警惕被捧杀"
    ],
    "auxiliaryWeaknessesEn": [
      "Specialists must never accept massive operational warfare commands without grassroots control",
      "Bookish intellectuals commanding cutthroat warlords will be sabotaged and framed"
    ]
  },
  {
    "id": "lu_yun",
    "nameZh": "陆云",
    "nameEn": "Lu Yun",
    "dynastyZh": "西晋",
    "dynastyEn": "Western Jin",
    "eraTag": "western_jin",
    "eraNameZh": "西晋风云",
    "eraNameEn": "Western Jin Dynastic Era",
    "positionZh": "二陆之一 · 清正御史中丞",
    "positionEn": "One of the Two Lus · Upright Imperial Censor",
    "personalityZh": "温雅聪敏、敏正忠直、骨肉情深、洞察政局却难独善其身",
    "personalityEn": "Gentle, intellectually razor-sharp, morally upright, deeply devoted to family, yet helpless against the tidal wave of factional purge",
    "deedsZh": "与兄陆机并称“二陆”，才名动四海；官任御史中丞多所绳纠，清正廉明；兄长陆机受谗被捕，陆云连坐下狱，临刑坦荡从容，与兄共赴黄泉。",
    "deedsEn": "Celebrated alongside brother Lu Ji as the literary titans 'Two Lus'. As Imperial Censor, he boldly investigated corruption with incorruptible integrity. When his brother was framed, Lu Yun was arrested by association and met death with serene dignity.",
    "archetype": "civil",
    "fiveElements": {
      "dominant": "木",
      "secondary": "水"
    },
    "tenGodsAffinity": [
      "正印",
      "正官",
      "食神"
    ],
    "patternType": "官印相生",
    "strengthAdviceZh": "为人清正忠直、行事严谨克己，具备极佳的组织合规把关与文书治理才能。",
    "strengthAdviceEn": "Incorruptible moral compass and scrupulous diligence, excelling at governance compliance and institutional justice.",
    "weaknessAdviceZh": "血缘与家族捆绑过深，明知大势倾覆却未能果断切割熔断，导致全盘受累覆灭。",
    "weaknessAdviceEn": "Overly entangled with familial obligations; failing to execute decisive strategic severance when the patriarch falls drags down all connected branches.",
    "historicalQuoteZh": "云性纯和，才藻敏给，遭逢乱世，连罹兄祸，悲夫冤酷！",
    "historicalQuoteEn": "Book of Jin: Lu Yun was harmonious and brilliantly endowed, yet born into chaos and entangled in his brother's tragedy—a bitter sorrow indeed!",
    "auxiliaryStrengthsZh": [
      "为人清正忠直、行事严谨克己",
      "具备极佳的组织合规把关与文书治理才能"
    ],
    "auxiliaryStrengthsEn": [
      "Incorruptible moral compass and scrupulous diligence",
      "excelling at governance compliance and institutional justice"
    ],
    "auxiliaryWeaknessesZh": [
      "血缘与家族捆绑过深",
      "明知大势倾覆却未能果断切割熔断，导致全盘受累覆灭"
    ],
    "auxiliaryWeaknessesEn": [
      "Overly entangled with familial obligations",
      "failing to execute decisive strategic severance when the patriarch falls drags down all connected branches"
    ]
  },
  {
    "id": "ji_shao",
    "nameZh": "嵇绍",
    "nameEn": "Ji Shao",
    "dynastyZh": "西晋",
    "dynastyEn": "Western Jin",
    "eraTag": "western_jin",
    "eraNameZh": "西晋风云",
    "eraNameEn": "Western Jin Dynastic Era",
    "positionZh": "竹林七贤之后 · 侍中忠烈",
    "positionEn": "Heir to Seven Sages of Bamboo Grove · Loyal Imperial Attendant",
    "personalityZh": "孤忠亮节、沉毅果敢、舍生取义、恪尽职守至死不渝",
    "personalityEn": "Steadfastly loyal, stoic, morally courageous, fulfilling constitutional duty unto death without hesitation",
    "deedsZh": "嵇康之子，山涛举荐入仕；荡阴之战晋惠帝溃败百官奔散，嵇绍端正冠服挺身以身护帝，飞箭如雨血溅御衣而亡；战后惠帝感念曰‘此嵇侍中血，勿洗也’。",
    "deedsEn": "Son of Ji Kang. At the Battle of Dangyin, when imperial forces shattered and courtiers fled in panic, Ji Shao shielded Emperor Hui with his own body, taking arrows until dead with blood splashing the dragon robe. Later the Emperor wept: 'This is Attendant Ji's blood—do not wash it!'",
    "archetype": "civil",
    "fiveElements": {
      "dominant": "金",
      "secondary": "木"
    },
    "tenGodsAffinity": [
      "正官",
      "七杀",
      "正印"
    ],
    "patternType": "杀印相生",
    "strengthAdviceZh": "具备不可动摇的职业操守与关键时刻挺身而出的极致担当，在狂风暴雨中能以一人立天下之志。",
    "strengthAdviceEn": "Unshakeable professional ethics and heroic responsibility; stands tall when everyone else scatters in terror.",
    "weaknessAdviceZh": "所护持之对象昏庸无能、大厦将倾已无可救药，个人英雄主义式的殉道难以扭转时代倾颓的洪流。",
    "weaknessAdviceEn": "Sacrificing oneself for a fundamentally bankrupt master or decaying enterprise cannot alter macro destiny; evaluate whether the altar is worthy of the offering.",
    "historicalQuoteZh": "帝坠于草中，侍中嵇绍端冕以身卫帝，兵交射之，血溅帝衣。帝曰：‘此嵇侍中血，勿浣也！’",
    "historicalQuoteEn": "Arrows fell like rain; Ji Shao shielded the Emperor unto death. The Emperor later ordered: 'This is Attendant Ji's blood, never wash it away!'",
    "auxiliaryStrengthsZh": [
      "具备不可动摇的职业操守与关键时刻挺身而出的极致担当",
      "在狂风暴雨中能以一人立天下之志"
    ],
    "auxiliaryStrengthsEn": [
      "Unshakeable professional ethics and heroic responsibility",
      "stands tall when everyone else scatters in terror"
    ],
    "auxiliaryWeaknessesZh": [
      "所护持之对象昏庸无能、大厦将倾已无可救药",
      "个人英雄主义式的殉道难以扭转时代倾颓的洪流"
    ],
    "auxiliaryWeaknessesEn": [
      "Sacrificing oneself for a fundamentally bankrupt master or decaying enterprise cannot alter macro destiny",
      "evaluate whether the altar is worthy of the offering"
    ]
  },
  {
    "id": "zhang_hua",
    "nameZh": "张华",
    "nameEn": "Zhang Hua",
    "dynastyZh": "西晋",
    "dynastyEn": "Western Jin",
    "eraTag": "western_jin",
    "eraNameZh": "西晋风云",
    "eraNameEn": "Western Jin Dynastic Era",
    "positionZh": "博古通今重臣 · 司空司徒",
    "positionEn": "Polymath Grand Chancellor · Minister of Works",
    "personalityZh": "博洽多识、谋虑深远、调和折中、在乱世狂澜中独木难支",
    "personalityEn": "Profoundly erudite, visionary, skilled at political mediation, yet powerless to halt systemic collapse alone",
    "deedsZh": "著《博物志》，力排众议力主晋武帝伐吴一统；贾后掌权期间尽心辅政弥合中枢，保全社稷近十年；然不忍去位自免，在赵王伦政变中因不肯从逆被斩杀。",
    "deedsEn": "Penned the encyclopedic 'Bowuzhi' and vigorously championed the southern campaign against Wu. During Empress Jia's rule, he painstakingly stabilized civil administration for a decade. Yet refusing to resign or compromise with usurper Sima Lun, he was executed.",
    "archetype": "civil",
    "fiveElements": {
      "dominant": "水",
      "secondary": "土"
    },
    "tenGodsAffinity": [
      "偏印",
      "正印",
      "正官"
    ],
    "patternType": "官印相生",
    "strengthAdviceZh": "知识库极其广博，具有顶级的系统治理、制度修缮与多方平衡协调能力，能在乱局中撑起行政基本盘。",
    "strengthAdviceEn": "Vast encyclopedic acumen, institutional architect capability, and exceptional mediator skills that maintain stability amid chaos.",
    "weaknessAdviceZh": "君子不可抱残守缺！当政治绞肉机已经完全失控、野蛮武夫彻底踏碎规则时，继续迷信制度流程而不果断抽身退避，必成祭刀牺牲品。",
    "weaknessAdviceEn": "Do not cling to crumbling structures when ruthless warlords burn the rulebook! Believing bureaucratic legitimacy protects you against violent coup d'états leads to martyrdom.",
    "historicalQuoteZh": "华博洽文史，算无遗策，伐吴之役，谋谟帷幄。及贾后乱政，华力持正道，终不免祸。",
    "historicalQuoteEn": "Book of Jin: Zhang Hua mastered all history, strategizing the Wu conquest. Facing palace madness, he defended righteousness until tragedy overwhelmed him.",
    "auxiliaryStrengthsZh": [
      "知识库极其广博",
      "具有顶级的系统治理、制度修缮与多方平衡协调能力，能在乱局中撑起行政基本盘"
    ],
    "auxiliaryStrengthsEn": [
      "Vast encyclopedic acumen",
      "institutional architect capability, and exceptional mediator skills that maintain stability amid chaos"
    ],
    "auxiliaryWeaknessesZh": [
      "君子不可抱残守缺",
      "当政治绞肉机已经完全失控、野蛮武夫彻底踏碎规则时，继续迷信制度流程而不果断抽身退避，必成祭刀牺牲品"
    ],
    "auxiliaryWeaknessesEn": [
      "Do not cling to crumbling structures when ruthless warlords burn the rulebook",
      "Believing bureaucratic legitimacy protects you against violent coup d'états leads to martyrdom"
    ]
  },
  {
    "id": "pei_wei",
    "nameZh": "裴頠",
    "nameEn": "Pei Wei",
    "dynastyZh": "西晋",
    "dynastyEn": "Western Jin",
    "eraTag": "western_jin",
    "eraNameZh": "西晋风云",
    "eraNameEn": "Western Jin Dynastic Era",
    "positionZh": "尚书左仆射 · 《崇有论》哲人",
    "positionEn": "Left Vice Director of Imperial Secretariat · Author of 'Advocating Being'",
    "personalityZh": "崇实尚用、深恶虚浮、刚直敢言、力挽狂澜之哲人官僚",
    "personalityEn": "Pragmatic, utilitarian, despising hollow nihilism, morally forthright, a philosophical statesman fighting societal decay",
    "deedsZh": "目睹贵族清谈误国虚无废事，作千古名篇《崇有论》针砭时弊，倡导实干治国；参与调停贾后与宗室矛盾，政变中同被赵王伦诛杀。",
    "deedsEn": "Horrified by the aristocratic escapism of empty metaphysical talk, he authored the philosophical masterpiece 'Chong You Lun' (Advocating Being) to champion utilitarian statecraft. Attempted to rein in imperial feuds, but was murdered in Sima Lun's coup.",
    "archetype": "specialist",
    "fiveElements": {
      "dominant": "土",
      "secondary": "金"
    },
    "tenGodsAffinity": [
      "正官",
      "食神",
      "比肩"
    ],
    "patternType": "食神生财",
    "strengthAdviceZh": "脚踏实地，具备刺破一切假大空谎言的实践求真精神，善于在虚火过盛的生态中构筑硬核实干价值。",
    "strengthAdviceEn": "Grounded pragmatism capable of shattering vacuous hype; excels at building tangible functional value in decadent environments.",
    "weaknessAdviceZh": "在群体疯狂的非理性时代，仅凭逻辑与义理难以唤醒自甘沉沦的阶层，缺乏枪杆子武装保障的清醒者往往死于疯狂群氓之手。",
    "weaknessAdviceEn": "In eras of collective hysteria, pure rational philosophy cannot disarm armed madness; clarity without coercive muscle leaves you vulnerable to barbaric slaughter.",
    "historicalQuoteZh": "頠深患清谈废事，乃著《崇有论》以救之，其言深切著明，为世之药石。",
    "historicalQuoteEn": "Book of Jin: Pei Wei grieved that metaphysical banquets paralyzed governance, penning 'Chong You Lun' as a medicinal tonic for the age.",
    "auxiliaryStrengthsZh": [
      "脚踏实地",
      "具备刺破一切假大空谎言的实践求真精神，善于在虚火过盛的生态中构筑硬核实干价值"
    ],
    "auxiliaryStrengthsEn": [
      "Grounded pragmatism capable of shattering vacuous hype",
      "excels at building tangible functional value in decadent environments"
    ],
    "auxiliaryWeaknessesZh": [
      "在群体疯狂的非理性时代",
      "仅凭逻辑与义理难以唤醒自甘沉沦的阶层，缺乏枪杆子武装保障的清醒者往往死于疯狂群氓之手"
    ],
    "auxiliaryWeaknessesEn": [
      "In eras of collective hysteria, pure rational philosophy cannot disarm armed madness",
      "clarity without coercive muscle leaves you vulnerable to barbaric slaughter"
    ]
  },
  {
    "id": "gou_xi",
    "nameZh": "苟晞",
    "nameEn": "Gou Xi",
    "dynastyZh": "西晋",
    "dynastyEn": "Western Jin",
    "eraTag": "western_jin",
    "eraNameZh": "西晋风云",
    "eraNameEn": "Western Jin Dynastic Era",
    "positionZh": "青州刺史 · 屠伯名将",
    "positionEn": "Governor of Qingzhou · The Iron Executioner General",
    "personalityZh": "严苛如铁、杀伐无情、骁勇善战、后期狂躁嗜杀而覆亡",
    "personalityEn": "Ruthlessly strict, draconian disciplinarian, fierce battlefield warrior, yet grew manic, tyrannical, and collapsed inwardly",
    "deedsZh": "行法严苛六亲不认，时人号为‘屠伯’；八王之乱中破吕朗、破石勒，连战皆捷被誉为‘韩信再世’；后与司马越交恶反目，晚年骄纵嗜杀大失军心，终被石勒突袭击俘杀害。",
    "deedsEn": "Enforced military law so mercilessly that even relatives were beheaded, dubbed 'The Butcher'. Defeated Shi Le and rebel warlords repeatedly, hailed as the reincarnation of Han Xin. Later feuded with Sima Yue, grew paranoid and bloodthirsty, and was captured and executed by Shi Le.",
    "archetype": "military",
    "fiveElements": {
      "dominant": "金",
      "secondary": "水"
    },
    "tenGodsAffinity": [
      "七杀",
      "偏官",
      "伤官"
    ],
    "patternType": "羊刃驾杀",
    "strengthAdviceZh": "铁血纪律与极致执行力的化身，善于在人心涣散、军纪败坏的废墟中快速打造所向披靡的铁军。",
    "strengthAdviceEn": "Embodiment of iron discipline and terrifying execution, capable of forging an indomitable fighting force out of broken rabble.",
    "weaknessAdviceZh": "绝不可陷入严苛过甚的暴力暴躁循环！水至清则无鱼，人至察则无徒，纯靠杀戮与恐怖统治维系的体系，一旦遭遇挫折必被军心彻底抛弃。",
    "weaknessAdviceEn": "Never rely solely on terror and slaughter! When discipline turns into tyrannical cruelty, team allegiance shatters instantly upon the first severe reverse.",
    "historicalQuoteZh": "晞用法严峻，虽姑息无所赦，时人谓之‘屠伯’。始以用法济，终以严暴亡。",
    "historicalQuoteEn": "Book of Jin: Gou Xi enforced laws with terrifying severity, spared no kin, called 'The Butcher'. Elevated by iron laws, he perished by his own brutality.",
    "auxiliaryStrengthsZh": [
      "铁血纪律与极致执行力的化身",
      "善于在人心涣散、军纪败坏的废墟中快速打造所向披靡的铁军"
    ],
    "auxiliaryStrengthsEn": [
      "Embodiment of iron discipline and terrifying execution",
      "capable of forging an indomitable fighting force out of broken rabble"
    ],
    "auxiliaryWeaknessesZh": [
      "绝不可陷入严苛过甚的暴力暴躁循环",
      "水至清则无鱼，人至察则无徒，纯靠杀戮与恐怖统治维系的体系，一旦遭遇挫折必被军心彻底抛弃"
    ],
    "auxiliaryWeaknessesEn": [
      "Never rely solely on terror and slaughter",
      "When discipline turns into tyrannical cruelty, team allegiance shatters instantly upon the first severe reverse"
    ]
  },
  {
    "id": "liu_kun",
    "nameZh": "刘琨",
    "nameEn": "Liu Kun",
    "dynastyZh": "西晋",
    "dynastyEn": "Western Jin",
    "eraTag": "western_jin",
    "eraNameZh": "西晋风云",
    "eraNameEn": "Western Jin Dynastic Era",
    "positionZh": "并州刺史 · 枕戈待旦英雄",
    "positionEn": "Governor of Bingzhou · Hero of Iron Resolve",
    "personalityZh": "豪迈孤忠、忠肝义胆、善赋诗胡笳退兵、轻信他人不察军机",
    "personalityEn": "Heroic, utterly loyal to the homeland, poetic soul, yet overly trusting and vulnerable to cunning warlord deceit",
    "deedsZh": "少与祖逖‘闻鸡起舞’；西晋覆亡中原陆沉，刘琨孤悬并州抗击匈奴汉赵十余年，胡笳一曲感退围城胡骑；后依附幽州段匹磾，因轻信中反间计惨遭冤杀。",
    "deedsEn": "Rose at cockcrow with Zu Ti to practice swordsmanship. When Jin collapsed, he held isolated Bingzhou against nomadic hordes for over a decade, famously playing the nomad reed pipe atop the battlements to rout an besieging army with homesickness. Tragically framed and slain by ally Duan Pidi.",
    "archetype": "military",
    "fiveElements": {
      "dominant": "木",
      "secondary": "火"
    },
    "tenGodsAffinity": [
      "七杀",
      "食神",
      "偏印"
    ],
    "patternType": "杀印相生",
    "strengthAdviceZh": "拥有穿透黑夜的精神感召力与文艺豪情，逆境中坚守信仰十数年，能以极高人格魅力凝聚人心绝处逢生。",
    "strengthAdviceEn": "Electrifying spiritual charisma and indomitable romantic heroism; holds the line across decades of darkness through sheer personal magnetism.",
    "weaknessAdviceZh": "英雄最忌政治天真与盲目轻信！在丛林法则肆虐的乱世，绝不可将身家性命押注在军阀盟友的空头道德契约上，必须手握独立武装退路。",
    "weaknessAdviceEn": "Heroic souls must eliminate political naivety! In cutthroat jungles, never surrender self-defense autonomy to temporary warlord allies based on sentimental faith.",
    "historicalQuoteZh": "琨尝为诗曰：‘何意百炼刚，化为绕指柔。’忠义激荡，天地可鉴！",
    "historicalQuoteEn": "Liu Kun famously penned: 'How could tempered steel be bent like a pliant thread around fingers?' His loyalty shook heaven and earth.",
    "auxiliaryStrengthsZh": [
      "拥有穿透黑夜的精神感召力与文艺豪情",
      "逆境中坚守信仰十数年，能以极高人格魅力凝聚人心绝处逢生"
    ],
    "auxiliaryStrengthsEn": [
      "Electrifying spiritual charisma and indomitable romantic heroism",
      "holds the line across decades of darkness through sheer personal magnetism"
    ],
    "auxiliaryWeaknessesZh": [
      "英雄最忌政治天真与盲目轻信",
      "在丛林法则肆虐的乱世，绝不可将身家性命押注在军阀盟友的空头道德契约上，必须手握独立武装退路"
    ],
    "auxiliaryWeaknessesEn": [
      "Heroic souls must eliminate political naivety",
      "In cutthroat jungles, never surrender self-defense autonomy to temporary warlord allies based on sentimental faith"
    ]
  },
  {
    "id": "zu_ti",
    "nameZh": "祖逖",
    "nameEn": "Zu Ti",
    "dynastyZh": "东晋 / 北伐",
    "dynastyEn": "Eastern Jin (Northern Expeditions)",
    "eraTag": "sixteen_kingdoms",
    "eraNameZh": "十六国北伐",
    "eraNameEn": "Sixteen Kingdoms Era",
    "positionZh": "奋威将军 · 中流击楫北伐统帅",
    "positionEn": "General of Resolute Might · The Oath-Striking Commander",
    "personalityZh": "慷慨沉勇、深得士心、矢志复仇、克己奉公、坚毅顽强",
    "personalityEn": "Magnanimous, intrepid, deeply revered by soldiers, single-mindedly devoted to national recovery, incorruptible",
    "deedsZh": "闻鸡起舞，率部百艘船北伐渡江，中流击楫发誓‘不请清中原，而复济此者，有如大江！’；无后方援助自铸兵刃收复黄河以南大片失地，却遭东晋朝廷猜忌掣肘，忧愤病卒。",
    "deedsEn": "Practiced swordsmanship at cockcrow with Liu Kun. Crossing the Yangtze with only a handful of troops, he struck the oar midstream, swearing: 'If I cannot purge the Central Plains, may the Yangtze swallow me!' Reclaimed massive northern territory without court aid, only to die of grief when sabotaged by imperial jealousy.",
    "archetype": "military",
    "fiveElements": {
      "dominant": "金",
      "secondary": "木"
    },
    "tenGodsAffinity": [
      "七杀",
      "正官",
      "比肩"
    ],
    "patternType": "建禄格",
    "strengthAdviceZh": "以无退路之决心白手起家，擅长零预算整合资源并建立钢铁团队，行事光明磊落，感召力无与伦比。",
    "strengthAdviceEn": "Boasts invincible zero-budget boot-strapping grit; rallies desperate masses into an iron force through sheer integrity and boundless devotion.",
    "weaknessAdviceZh": "前线孤军奋战时切莫忽视后方政治冷箭！必须建立与后方权力机构的利益捆绑或反制筹码，防范‘前方吃紧，后方紧吃’的阴谋掣肘。",
    "weaknessAdviceEn": "Never ignore the daggers aimed at your back while waging frontline war! Tie headquarters to your survival, or court jealousy will decapitate your vanguard.",
    "historicalQuoteZh": "中流击楫而誓曰：‘祖逖不能清中原而复济者，有如大江！’辞色壮烈，众皆慨叹。",
    "historicalQuoteEn": "Striking the oar in mid-river, he swore: 'If Zu Ti fails to liberate the Plains, let the great river carry my corpse!' Tears and fury ignited the ranks.",
    "auxiliaryStrengthsZh": [
      "以无退路之决心白手起家",
      "擅长零预算整合资源并建立钢铁团队，行事光明磊落，感召力无与伦比"
    ],
    "auxiliaryStrengthsEn": [
      "Boasts invincible zero-budget boot-strapping grit",
      "rallies desperate masses into an iron force through sheer integrity and boundless devotion"
    ],
    "auxiliaryWeaknessesZh": [
      "前线孤军奋战时切莫忽视后方政治冷箭",
      "必须建立与后方权力机构的利益捆绑或反制筹码，防范‘前方吃紧，后方紧吃’的阴谋掣肘"
    ],
    "auxiliaryWeaknessesEn": [
      "Never ignore the daggers aimed at your back while waging frontline war",
      "Tie headquarters to your survival, or court jealousy will decapitate your vanguard"
    ]
  },
  {
    "id": "liu_yuan",
    "nameZh": "刘渊",
    "nameEn": "Liu Yuan (Emperor Guangwen of Han-Zhao)",
    "dynastyZh": "汉赵 (前赵)",
    "dynastyEn": "Han Zhao (Former Zhao)",
    "eraTag": "sixteen_kingdoms",
    "eraNameZh": "十六国风云",
    "eraNameEn": "Sixteen Kingdoms Era",
    "positionZh": "汉赵开国皇帝 · 首启胡人入主中原",
    "positionEn": "Founding Emperor of Han Zhao · Pioneer of Northern Steppe Dynasties",
    "personalityZh": "深通汉典、兼通胡汉、雄图大略、善借大义名分",
    "personalityEn": "Profoundly versed in Confucian classics, harmonizing nomad prowess with Han legitimacy; visionary and strategic master of moral pretexts",
    "deedsZh": "匈奴五部大都督，精研《左传》《孙吴兵法》；乘西晋八王之乱在左国城起兵，以汉朝外甥自居建国号‘汉’，追尊刘邦刘备，引爆五胡建政大幕。",
    "deedsEn": "Commander of the Five Xiongnu Tribes, deeply studied in classical history and Sun Tzu. Capitalizing on Western Jin's civil war, he proclaimed the Han dynasty in the north, venerating Liu Bang and Liu Bei to win Han allegiance, inaugurating the Sixteen Kingdoms era.",
    "archetype": "executive",
    "fiveElements": {
      "dominant": "土",
      "secondary": "火"
    },
    "tenGodsAffinity": [
      "正官",
      "偏财",
      "偏印"
    ],
    "patternType": "官印相生",
    "strengthAdviceZh": "极其擅长利用文化大义与历史名分包装自身诉求，打破文化界限构建多民族、多阵营大联盟。",
    "strengthAdviceEn": "Superb mastery of legalistic legitimacy and cultural narrative; bridges polarized demographics to construct unstoppable multi-tribal coalitions.",
    "weaknessAdviceZh": "以大义名分起家后，若未能建立起稳固的二代接班制度与宗室法度，基业极易在狂暴宗王争夺中迅速陷入内耗流血。",
    "weaknessAdviceEn": "Building an empire on borrowed legitimacy collapses if succession protocols remain primitive; tribal brothers will tear the crown apart upon your death.",
    "historicalQuoteZh": "晋人虐我，我何惜一人之命！汉有天下久，吾又汉氏之甥，立汉以收人望。",
    "historicalQuoteEn": "Liu Yuan declared: 'Jin has oppressed our people; Han reigned long and I am Han's nephew. I resurrect Han to rally universal allegiance!'",
    "auxiliaryStrengthsZh": [
      "极其擅长利用文化大义与历史名分包装自身诉求",
      "打破文化界限构建多民族、多阵营大联盟"
    ],
    "auxiliaryStrengthsEn": [
      "Superb mastery of legalistic legitimacy and cultural narrative",
      "bridges polarized demographics to construct unstoppable multi-tribal coalitions"
    ],
    "auxiliaryWeaknessesZh": [
      "以大义名分起家后",
      "若未能建立起稳固的二代接班制度与宗室法度，基业极易在狂暴宗王争夺中迅速陷入内耗流血"
    ],
    "auxiliaryWeaknessesEn": [
      "Building an empire on borrowed legitimacy collapses if succession protocols remain primitive",
      "tribal brothers will tear the crown apart upon your death"
    ]
  },
  {
    "id": "liu_cong",
    "nameZh": "刘聪",
    "nameEn": "Liu Cong (Emperor Zhaowu of Han-Zhao)",
    "dynastyZh": "汉赵 (前赵)",
    "dynastyEn": "Han Zhao (Former Zhao)",
    "eraTag": "sixteen_kingdoms",
    "eraNameZh": "十六国风云",
    "eraNameEn": "Sixteen Kingdoms Era",
    "positionZh": "汉赵皇帝 · 攻灭西晋二帝",
    "positionEn": "Emperor of Han Zhao · Conqueror of Western Jin",
    "personalityZh": "兼资文武、晚年暴虐、荒淫极恶、猜忌好杀",
    "personalityEn": "Brilliant in arts and warfare early on, but degenerated into extreme savagery, hedonism, and lethal paranoia",
    "deedsZh": "遣刘曜、石勒攻破洛阳俘晋怀帝，后克长安俘晋愍帝，彻底消灭西晋政权；然晚年骄纵奢淫，置三后、杀忠良，导致汉赵大乱国脉断送。",
    "deedsEn": "Dispatched armies to sack Luoyang and Chang'an, capturing both Western Jin emperors and ending the Western Jin dynasty. Yet his later reign descended into decadent insanity, simultaneously appointing multiple empresses and butchering loyal chancellors, sealing his dynasty's ruin.",
    "archetype": "executive",
    "fiveElements": {
      "dominant": "火",
      "secondary": "水"
    },
    "tenGodsAffinity": [
      "七杀",
      "伤官",
      "劫财"
    ],
    "patternType": "伤官驾杀",
    "strengthAdviceZh": "青年时期才华横溢，军事战略眼光毒辣，敢于在关键战役中倾力出击消灭宿敌。",
    "strengthAdviceEn": "Exhibited dazzling military aggression and tactical brilliance in early campaigns, swiftly crushing entrenched rival empires.",
    "weaknessAdviceZh": "胜极而狂、声色犬马是霸主的致命毒药！失去制约的绝对权力必将异化心智，放纵兽性最终将把一手开创的江山付之一炬。",
    "weaknessAdviceEn": "Unchecked hedonism and unrestrained ego are lethal toxins! Absolute power unhinges the mind; indulging primal cruelty burns your conquests to ash.",
    "historicalQuoteZh": "《资治通鉴》：聪初有武艺文学，及得志，荒淫无度，刑赏妄施，宗族残灭。",
    "historicalQuoteEn": "Zizhi Tongjian: Liu Cong possessed martial courage and letters; once triumphant, he sank into madness, murdering loyalists and destroying his kin.",
    "auxiliaryStrengthsZh": [
      "青年时期才华横溢",
      "军事战略眼光毒辣，敢于在关键战役中倾力出击消灭宿敌"
    ],
    "auxiliaryStrengthsEn": [
      "Exhibited dazzling military aggression and tactical brilliance in early campaigns",
      "swiftly crushing entrenched rival empires"
    ],
    "auxiliaryWeaknessesZh": [
      "胜极而狂、声色犬马是霸主的致命毒药",
      "失去制约的绝对权力必将异化心智，放纵兽性最终将把一手开创的江山付之一炬"
    ],
    "auxiliaryWeaknessesEn": [
      "Unchecked hedonism and unrestrained ego are lethal toxins",
      "Absolute power unhinges the mind"
    ]
  },
  {
    "id": "shi_le",
    "nameZh": "石勒",
    "nameEn": "Shi Le (Emperor Ming of Later Zhao)",
    "dynastyZh": "后赵",
    "dynastyEn": "Later Zhao",
    "eraTag": "sixteen_kingdoms",
    "eraNameZh": "十六国风云",
    "eraNameEn": "Sixteen Kingdoms Era",
    "positionZh": "后赵开国皇帝 · 奴隶出身的北中国霸主",
    "positionEn": "Founding Emperor of Later Zhao · Slave-to-Emperor Hegemon",
    "personalityZh": "坚毅雄武、善用谋士、大度兼听、文盲而好史书反思",
    "personalityEn": "Indomitable warrior, humble listener to strategists, deeply reflective, illiterate yet passionate for classical historical wisdom",
    "deedsZh": "羯族人，曾被卖为农奴；起于微末聚十八骑起兵，倚重汉人谋臣张宾，苦战二十年平灭汉赵、全歼晋军，统一整个北方中国，开创后赵盛世。",
    "deedsEn": "A Jie captive sold into slavery; rose from dust with eighteen riders. Relying totally on strategist Zhang Bin, he fought across two decades to exterminate rival warlords, unseat Han Zhao, and unify the entirety of Northern China into Later Zhao.",
    "archetype": "executive",
    "fiveElements": {
      "dominant": "金",
      "secondary": "土"
    },
    "tenGodsAffinity": [
      "七杀",
      "偏财",
      "比肩"
    ],
    "patternType": "羊刃驾杀",
    "strengthAdviceZh": "终极草根逆袭典范！不因出身卑微而自弃，懂得将所有战术短板交付顶级专业参谋（张宾），展现出第一流的用人之道与兼听胸襟。",
    "strengthAdviceEn": "The quintessential grass-roots titan! Never bowed to humble slavery; completely entrusted tactical blindspots to master advisors, practicing transcendent leadership humility.",
    "weaknessAdviceZh": "未能彻底解决残暴血亲（石虎）的继承权隐患，临终托孤缺乏制度性军权制衡，导致死后子孙遭石虎斩尽杀绝。",
    "weaknessAdviceEn": "Failed to eliminate the ferocious butcher in his own house (Shi Hu); soft-pedaled succession security, leaving his children to be wiped out by his cousin.",
    "historicalQuoteZh": "勒问徐光：‘朕可比古何等主？’光曰：‘轩辕未可逮，刘邦之俦也。’勒笑曰：‘朕遇高皇，当北面事之；遇光武，当并驱于中原！’",
    "historicalQuoteEn": "Shi Le asked courtier Xu Guang: 'Whom do I resemble in antiquity?' Guang replied: 'Emperor Gaozu Liu Bang.' Shi Le smiled: 'Meeting Gaozu, I would serve him; meeting Guangwu, we would race horses across the Plains!'",
    "auxiliaryStrengthsZh": [
      "终极草根逆袭典范",
      "不因出身卑微而自弃，懂得将所有战术短板交付顶级专业参谋（张宾），展现出第一流的用人之道与兼听胸襟"
    ],
    "auxiliaryStrengthsEn": [
      "The quintessential grass-roots titan",
      "Never bowed to humble slavery"
    ],
    "auxiliaryWeaknessesZh": [
      "未能彻底解决残暴血亲（石虎）的继承权隐患",
      "临终托孤缺乏制度性军权制衡，导致死后子孙遭石虎斩尽杀绝"
    ],
    "auxiliaryWeaknessesEn": [
      "Failed to eliminate the ferocious butcher in his own house (Shi Hu)",
      "soft-pedaled succession security, leaving his children to be wiped out by his cousin"
    ]
  },
  {
    "id": "zhang_bin",
    "nameZh": "张宾",
    "nameEn": "Zhang Bin",
    "dynastyZh": "后赵",
    "dynastyEn": "Later Zhao",
    "eraTag": "sixteen_kingdoms",
    "eraNameZh": "十六国风云",
    "eraNameEn": "Sixteen Kingdoms Era",
    "positionZh": "后赵右侯 · 谋不虚发的运筹军师",
    "positionEn": "Marquis of the Right of Later Zhao · Flawless Mastermind",
    "personalityZh": "智计无双、洞察天下、从容谦退、算无遗策",
    "personalityEn": "Infallible strategist, geopolitical seer, modest and self-effacing, calculating every move with mathematical perfection",
    "deedsZh": "精研经史，自比张良；在石勒穷途末路时主动投效，为其制定‘规取襄国，图并北方’的顶级宏观战略；料敌如神计无不中，助石勒成就北方霸业，位极人臣谦恭自守。",
    "deedsEn": "A consummate Han scholar who likened himself to Zhang Liang. Joined the illiterate slave Shi Le when others scoffed, designing the grand strategy to seize Xiangguo and conquer the north. Flawlessly guided every military campaign until his untimely death.",
    "archetype": "specialist",
    "fiveElements": {
      "dominant": "水",
      "secondary": "金"
    },
    "tenGodsAffinity": [
      "偏印",
      "伤官",
      "正官"
    ],
    "patternType": "伤官佩印",
    "strengthAdviceZh": "顶级军师的最高境界：精准识人选主，不因对方外在标签而错失潜龙；具备千载难逢的战略架构能力与战役级推演精度。",
    "strengthAdviceEn": "Peak strategist archetypal genius: identifies true sovereigns through rough disguises; crafts bulletproof grand geopolitical architectures with surgical tactical precision.",
    "weaknessAdviceZh": "积劳成疾英年早逝，死后后赵无人能压制石虎之残虐狂暴，未能完成制度的闭环交接便骤然离场。",
    "weaknessAdviceEn": "Overworked himself into an early grave. His premature demise removed the only rational anchor holding back savage warlord Shi Hu, plunging the realm into blood.",
    "historicalQuoteZh": "张宾卒，石勒痛哭流涕曰：‘天欲不成吾事邪？何夺吾右侯之早也！’",
    "historicalQuoteEn": "Upon Zhang Bin's death, Shi Le wept profusely: 'Does Heaven refuse to grant my empire, taking my Right Marquis so soon?!'",
    "auxiliaryStrengthsZh": [
      "顶级军师的最高境界：精准识人选主，不因对方外在标签而错失潜龙",
      "具备千载难逢的战略架构能力与战役级推演精度"
    ],
    "auxiliaryStrengthsEn": [
      "Peak strategist archetypal genius: identifies true sovereigns through rough disguises",
      "crafts bulletproof grand geopolitical architectures with surgical tactical precision"
    ],
    "auxiliaryWeaknessesZh": [
      "积劳成疾英年早逝",
      "死后后赵无人能压制石虎之残虐狂暴，未能完成制度的闭环交接便骤然离场"
    ],
    "auxiliaryWeaknessesEn": [
      "Overworked himself into an early grave. His premature demise removed the only rational anchor holding back savage warlord Shi Hu",
      "plunging the realm into blood"
    ]
  },
  {
    "id": "shi_hu",
    "nameZh": "石虎",
    "nameEn": "Shi Hu (Emperor Wu of Later Zhao)",
    "dynastyZh": "后赵",
    "dynastyEn": "Later Zhao",
    "eraTag": "sixteen_kingdoms",
    "eraNameZh": "十六国风云",
    "eraNameEn": "Sixteen Kingdoms Era",
    "positionZh": "后赵皇帝 · 屠戮人间的暴君",
    "positionEn": "Emperor of Later Zhao · The Terrifying Tyrant",
    "personalityZh": "残暴嗜杀、勇力冠绝、毫无人性、精神狂暴极端猜忌",
    "personalityEn": "Unhinged sadist, titanic physical ferocity, utterly devoid of empathy, paranoiac and manic",
    "deedsZh": "勇冠三军，百战克敌；石勒死后弑君篡位，屠灭石勒后人；大修宫殿、广选民女、坑杀降卒数十万，甚至将两个亲生太子残杀烹食，致后赵生灵涂炭引发冉闵绝杀。",
    "deedsEn": "Supreme martial commander under Shi Le. Upon Shi Le's death, he seized power, butchered Shi Le's children, enslaved hundreds of thousands for luxury fortresses, and slaughtered his own crown princes when crossed. His sadistic reign brought Later Zhao to the brink of genocide.",
    "archetype": "military",
    "fiveElements": {
      "dominant": "火",
      "secondary": "金"
    },
    "tenGodsAffinity": [
      "七杀",
      "羊刃",
      "劫财"
    ],
    "patternType": "专旺格",
    "strengthAdviceZh": "拥有毁灭性的破阵冲锋与战场威慑力，在以力破巧的血腥肉搏中具备压倒性的暴力输出。",
    "strengthAdviceEn": "Devastating raw battlefield combat momentum capable of crushing physical resistance through pure shock-and-awe brutality.",
    "weaknessAdviceZh": "人类历史上最典型的暴君鉴戒！把暴力当做唯一统治工具、连亲子同袍皆视如刍狗者，必将彻底激发所有人最深层的灭门求生反杀，死后尸骨无存。",
    "weaknessAdviceEn": "The ultimate cautionary monster in historiography! Treating terror as your sole currency and murdering your own heirs guarantees total collective counter-annihilation.",
    "historicalQuoteZh": "《晋书》：石虎残忍自恣，穷凶极暴，古今未有。子弑其父，父戮其子，天道报应，速若影响！",
    "historicalQuoteEn": "Book of Jin: Shi Hu's ferocity and cruelty were unprecedented in all history. Sons murdered fathers and fathers boiled sons; heaven's retribution struck like lightning!",
    "auxiliaryStrengthsZh": [
      "拥有毁灭性的破阵冲锋与战场威慑力",
      "在以力破巧的血腥肉搏中具备压倒性的暴力输出"
    ],
    "auxiliaryStrengthsEn": [
      "Devastating raw battlefield combat momentum capable of crushing physical resistance through pure shock-and-awe brutality.",
      "Leverages core natural talents to pierce strategic bottlenecks."
    ],
    "auxiliaryWeaknessesZh": [
      "人类历史上最典型的暴君鉴戒",
      "把暴力当做唯一统治工具、连亲子同袍皆视如刍狗者，必将彻底激发所有人最深层的灭门求生反杀，死后尸骨无存"
    ],
    "auxiliaryWeaknessesEn": [
      "The ultimate cautionary monster in historiography",
      "Treating terror as your sole currency and murdering your own heirs guarantees total collective counter-annihilation"
    ]
  },
  {
    "id": "ran_min",
    "nameZh": "冉闵",
    "nameEn": "Ran Min (Heavenly King of Ran Wei)",
    "dynastyZh": "冉魏",
    "dynastyEn": "Ran Wei",
    "eraTag": "sixteen_kingdoms",
    "eraNameZh": "十六国风云",
    "eraNameEn": "Sixteen Kingdoms Era",
    "positionZh": "冉魏开国皇帝 · 武悼天王",
    "positionEn": "Founding Emperor of Ran Wei · Martial Resolute Heavenly King",
    "personalityZh": "勇冠万夫、杀伐决绝、孤勇无双、缺乏宏观外交纵深",
    "personalityEn": "Colossal warrior courage, fiercely decisive, lone-wolf vanguard, lacking strategic diplomatic finesse",
    "deedsZh": "石虎养孙，羯赵末年汉人血泪浩劫中奋起，发布著名‘杀胡令’诛杀羯胡数十万恢复汉统，建立冉魏；转战中原所向披靡，后与前燕慕容恪十战全胜，因寡不敌众遭连环马合围被俘不屈就义。",
    "deedsEn": "Adopted grandson of Shi Hu. Amid northern genocide, he revolted, issued the famed 'Exterminate Hu Decree' slaying over 200,000 Jie nomads to resurrect Han rule. Defeated Murong Ke in nine straight battles before being overwhelmed by Xianbei iron cataphracts, dying defiant.",
    "archetype": "military",
    "fiveElements": {
      "dominant": "金",
      "secondary": "火"
    },
    "tenGodsAffinity": [
      "七杀",
      "比肩",
      "羊刃"
    ],
    "patternType": "羊刃格",
    "strengthAdviceZh": "天下无双的个人战力与极限绝境下的破釜沉舟意志，能在绝望黑暗中强行撕开一道血路。",
    "strengthAdviceEn": "Unrivaled personal combat lethality and defiance under doom; capable of hacking an escape corridor through impossible darkness.",
    "weaknessAdviceZh": "切忌四面树敌与战略孤立！纯靠以暴制暴与种族报复难以构建稳固政权，不懂得通过纵横捭阖争取盟友注定沦为悲剧英雄。",
    "weaknessAdviceEn": "Never isolate yourself strategically against all fronts! Retaliatory slaughter alone cannot establish enduring sovereignty; war without diplomacy breeds fatal encirclement.",
    "historicalQuoteZh": "闵跨朱龙，左操双刃矛，右持钩戟，斩燕兵三百余级。及被擒，恪问曰：‘何敢妄自称帝？’闵曰：‘天下大乱，尔曹夷狄禽兽尚称帝，况我中原英雄！’",
    "historicalQuoteEn": "Astride his steed Red Dragon, spear in left hand and halberd in right, he slew 300 enemy horsemen. Captured, he roared to Murong Jun: 'Barbarian beasts usurp empires, how dare you question a hero of the Central Plains!'",
    "auxiliaryStrengthsZh": [
      "天下无双的个人战力与极限绝境下的破釜沉舟意志",
      "能在绝望黑暗中强行撕开一道血路"
    ],
    "auxiliaryStrengthsEn": [
      "Unrivaled personal combat lethality and defiance under doom",
      "capable of hacking an escape corridor through impossible darkness"
    ],
    "auxiliaryWeaknessesZh": [
      "切忌四面树敌与战略孤立",
      "纯靠以暴制暴与种族报复难以构建稳固政权，不懂得通过纵横捭阖争取盟友注定沦为悲剧英雄"
    ],
    "auxiliaryWeaknessesEn": [
      "Never isolate yourself strategically against all fronts",
      "Retaliatory slaughter alone cannot establish enduring sovereignty"
    ]
  },
  {
    "id": "murong_gui",
    "nameZh": "慕容廆",
    "nameEn": "Murong Gui",
    "dynastyZh": "前燕",
    "dynastyEn": "Former Yan",
    "eraTag": "sixteen_kingdoms",
    "eraNameZh": "十六国风云",
    "eraNameEn": "Sixteen Kingdoms Era",
    "positionZh": "前燕奠基者 · 辽东公",
    "positionEn": "Founder of Former Yan Dynasty · Duke of Liaodong",
    "personalityZh": "器量弘远、笃好儒学、虚怀若谷、奠定慕容鲜卑百年基业",
    "personalityEn": "Magnanimous vision, devoted patron of Confucian scholars, humble, laid the century-long foundation for Murong Xianbei",
    "deedsZh": "鲜卑部落首领，受晋武帝册封；招徕中原流亡士族开辟辽东，劝课农桑兴办学校，使慕容鲜卑迅速汉化壮大，奠定前燕入主中原基石。",
    "deedsEn": "Leader of the Murong Xianbei, recognized by Jin. Sheltered fleeing northern Han gentry in Liaodong, promoted agriculture, and founded classical schools, transforming his tribe into a civilized powerhouse.",
    "archetype": "executive",
    "fiveElements": {
      "dominant": "木",
      "secondary": "土"
    },
    "tenGodsAffinity": [
      "正官",
      "正印",
      "食神"
    ],
    "patternType": "官印相生",
    "strengthAdviceZh": "极具远见的跨文化整合者与基地建设大师，懂得在天下大乱时筑巢引凤，夯实底层人才与物质粮仓。",
    "strengthAdviceEn": "Visionary cross-cultural unifier and sanctuary builder; excels at attracting elite human capital and hoarding real resources during macro turmoil.",
    "weaknessAdviceZh": "偏居辽东地利受限，早期缺乏进图中原的战略魄力，发展步伐偏于稳重克制。",
    "weaknessAdviceEn": "Geographically constrained in the northeast; his early caution delayed rapid expansion into the Central Plains.",
    "historicalQuoteZh": "《晋书》：廆雅好经典，开国辽左，远近宗归，慕容之盛，基于是矣。",
    "historicalQuoteEn": "Book of Jin: Murong Gui cherished classical learning, founding an enduring state in Liaodong where scholars gathered from afar.",
    "auxiliaryStrengthsZh": [
      "极具远见的跨文化整合者与基地建设大师",
      "懂得在天下大乱时筑巢引凤，夯实底层人才与物质粮仓"
    ],
    "auxiliaryStrengthsEn": [
      "Visionary cross-cultural unifier and sanctuary builder",
      "excels at attracting elite human capital and hoarding real resources during macro turmoil"
    ],
    "auxiliaryWeaknessesZh": [
      "偏居辽东地利受限",
      "早期缺乏进图中原的战略魄力，发展步伐偏于稳重克制"
    ],
    "auxiliaryWeaknessesEn": [
      "Geographically constrained in the northeast",
      "his early caution delayed rapid expansion into the Central Plains"
    ]
  },
  {
    "id": "murong_huang",
    "nameZh": "慕容皝",
    "nameEn": "Murong Huang (Emperor Wenming of Former Yan)",
    "dynastyZh": "前燕",
    "dynastyEn": "Former Yan",
    "eraTag": "sixteen_kingdoms",
    "eraNameZh": "十六国风云",
    "eraNameEn": "Sixteen Kingdoms Era",
    "positionZh": "前燕燕王 · 文明帝",
    "positionEn": "Prince of Yan · Civil & Martial Sovereign",
    "personalityZh": "沉毅果敢、善平内乱、军事手腕高超、治军严整",
    "personalityEn": "Determined, resolute, master at suppressing internal rebellions, commanding iron military discipline",
    "deedsZh": "平定同母弟慕容仁叛乱，破段氏鲜卑、灭宇文鲜卑，远征高句丽破其丸都城，建立前燕政权定都龙城，威震东北亚。",
    "deedsEn": "Crushed sibling rebellions, absorbed the Duan Xianbei, obliterated Yuwen Xianbei, and humbled Goguryeo, establishing the Kingdom of Yan at Longcheng as the undisputed master of Northeast Asia.",
    "archetype": "executive",
    "fiveElements": {
      "dominant": "金",
      "secondary": "水"
    },
    "tenGodsAffinity": [
      "七杀",
      "正官",
      "比肩"
    ],
    "patternType": "建禄格",
    "strengthAdviceZh": "内乱平定手腕果决凌厉，在错综复杂的氏族内斗中能迅速稳固核心领导权，开拓疆土势如破竹。",
    "strengthAdviceEn": "Incisive mastery in quelling tribal factions; restores core command authority swiftly and drives relentless outward expansion.",
    "weaknessAdviceZh": "对兄弟宗室防范过严甚至逼反骨肉，家族权力传承中始终潜藏互不信任的基因血债。",
    "weaknessAdviceEn": "Excessive paranoia toward royal brothers sparked family rebellions; left a legacy of fratricidal mistrust in the clan.",
    "historicalQuoteZh": "《晋书》：皝勇略兼备，摧强破敌，克定辽碣，威振遐迩。",
    "historicalQuoteEn": "Book of Jin: Murong Huang possessed both martial audacity and strategic foresight, shattering mighty foes to dominate Liaodong.",
    "auxiliaryStrengthsZh": [
      "内乱平定手腕果决凌厉",
      "在错综复杂的氏族内斗中能迅速稳固核心领导权，开拓疆土势如破竹"
    ],
    "auxiliaryStrengthsEn": [
      "Incisive mastery in quelling tribal factions",
      "restores core command authority swiftly and drives relentless outward expansion"
    ],
    "auxiliaryWeaknessesZh": [
      "对兄弟宗室防范过严甚至逼反骨肉",
      "家族权力传承中始终潜藏互不信任的基因血债"
    ],
    "auxiliaryWeaknessesEn": [
      "Excessive paranoia toward royal brothers sparked family rebellions",
      "left a legacy of fratricidal mistrust in the clan"
    ]
  },
  {
    "id": "murong_jun",
    "nameZh": "慕容儁",
    "nameEn": "Murong Jun (Emperor Jingzhao of Former Yan)",
    "dynastyZh": "前燕",
    "dynastyEn": "Former Yan",
    "eraTag": "sixteen_kingdoms",
    "eraNameZh": "十六国风云",
    "eraNameEn": "Sixteen Kingdoms Era",
    "positionZh": "前燕皇帝 · 景昭帝",
    "positionEn": "Emperor Jingzhao of Former Yan · Hegemon of Central Plains",
    "personalityZh": "博涉文史、志吞天下、威仪庄重、好大喜功",
    "personalityEn": "Erudite in history, harboring empire-conquering ambitions, commanding imposing presence, yet grandiosely overreaching",
    "deedsZh": "乘后赵大乱率兵南下，破冉闵灭冉魏，迁都邺城正式称帝；招徕汉人士族，建立律令制度；晚年欲征集一百五十万大军南伐东晋一统天下，未行而卒。",
    "deedsEn": "Capitalizing on Later Zhao's fall, he pushed south, crushed Ran Min, and moved the imperial capital to Ye. Consolidated institutional codes, but on his deathbed wildly ordered 1.5 million men mobilized to conquer Jin, dying before departure.",
    "archetype": "executive",
    "fiveElements": {
      "dominant": "金",
      "secondary": "火"
    },
    "tenGodsAffinity": [
      "正官",
      "七杀",
      "偏财"
    ],
    "patternType": "财官双美",
    "strengthAdviceZh": "抓住历史窗口南下逐鹿的果决气魄无可挑剔，善于在灭国战争后快速建立国家法统制度。",
    "strengthAdviceEn": "Flawless predatory timing to strike south; quickly formalizes imperial statutes and institutional governance upon conquered lands.",
    "weaknessAdviceZh": "晚期野心急剧膨胀，不顾民力枯竭企图强行发动毁灭性的大决战，极易使新生帝国因过度动员而瞬间猝死。",
    "weaknessAdviceEn": "Delusions of grandeur in late years; attempting astronomical military mobilizations without checking fiscal exhaustion risks catastrophic implosion.",
    "historicalQuoteZh": "儁梦石季龙啮其臂，恶之，发其墓取尸，投之于漳水，骂曰：‘死胡，敢逆天子！’",
    "historicalQuoteEn": "Dreaming Shi Hu bit his arm, he desecrated Shi Hu's tomb, hurling the bones into the Zhang River, yelling: 'Dead nomad, dare you defy the Son of Heaven!'",
    "auxiliaryStrengthsZh": [
      "抓住历史窗口南下逐鹿的果决气魄无可挑剔",
      "善于在灭国战争后快速建立国家法统制度"
    ],
    "auxiliaryStrengthsEn": [
      "Flawless predatory timing to strike south",
      "quickly formalizes imperial statutes and institutional governance upon conquered lands"
    ],
    "auxiliaryWeaknessesZh": [
      "晚期野心急剧膨胀",
      "不顾民力枯竭企图强行发动毁灭性的大决战，极易使新生帝国因过度动员而瞬间猝死"
    ],
    "auxiliaryWeaknessesEn": [
      "Delusions of grandeur in late years",
      "attempting astronomical military mobilizations without checking fiscal exhaustion risks catastrophic implosion"
    ]
  },
  {
    "id": "murong_ke",
    "nameZh": "慕容恪",
    "nameEn": "Murong Ke",
    "dynastyZh": "前燕",
    "dynastyEn": "Former Yan",
    "eraTag": "sixteen_kingdoms",
    "eraNameZh": "十六国风云",
    "eraNameEn": "Sixteen Kingdoms Era",
    "positionZh": "前燕太宰 · 百战百胜鲜卑战神兼千古完人",
    "positionEn": "Grand Chancellor of Former Yan · Undefeated Xianbei Mars",
    "personalityZh": "虚怀若谷、料敌制胜、忠贞无私、大权在握而不逾矩",
    "personalityEn": "Unassuming humility, flawless tactical foresight, selfless devotion, wielding total military power with impeccable restraint",
    "deedsZh": "前燕四杰之首，创连环铁骑战法生擒冉闵，破段氏、克洛阳，一生百战未尝一败；辅政幼主慕容𬀩十年，位极人臣清简奉公，死前力荐慕容垂自代，千古名将完人之典范。",
    "deedsEn": "Peerless hero of Former Yan. Invented interconnected cataphract tactics to capture Ran Min, took Luoyang, remaining undefeated across his life. Served as regent for a decade with flawless modesty; on his deathbed selflessly commended Murong Chui.",
    "archetype": "military",
    "fiveElements": {
      "dominant": "水",
      "secondary": "金"
    },
    "tenGodsAffinity": [
      "正印",
      "正官",
      "七杀"
    ],
    "patternType": "官印相生",
    "strengthAdviceZh": "真正的战略定海神针与道德完人！战役推演百战百胜却从不矜功自傲，身居摄政最高位却恪守臣节，用无私与专业化解一切政治猜忌。",
    "strengthAdviceEn": "The ultimate anchor general and moral paragon! Undefeated in war yet free of arrogance; held supreme regency yet maintained perfect constitutional boundaries.",
    "weaknessAdviceZh": "未能彻底清算朝中嫉贤妒能的顽固外戚势力（慕容评），逝世后导致慕容垂被迫出奔、前燕迅速被前秦所灭。",
    "weaknessAdviceEn": "Spared corrupt royal factions (Murong Ping) out of gentle mercy; his death unleashed petty jealousy that exiled Murong Chui and doomed the state.",
    "historicalQuoteZh": "《资治通鉴》：恪为人谦恭退让，每有军功，皆推与诸将。及居宰相，事无大小，虚心纳谏，前燕之盛，恪之力也。",
    "historicalQuoteEn": "Zizhi Tongjian: Murong Ke was modest and yielding, always crediting officers with victories. As chancellor, he governed with total open-mindedness; Former Yan's glory rested entirely on his shoulders.",
    "auxiliaryStrengthsZh": [
      "真正的战略定海神针与道德完人",
      "战役推演百战百胜却从不矜功自傲，身居摄政最高位却恪守臣节，用无私与专业化解一切政治猜忌"
    ],
    "auxiliaryStrengthsEn": [
      "The ultimate anchor general and moral paragon",
      "Undefeated in war yet free of arrogance"
    ],
    "auxiliaryWeaknessesZh": [
      "未能彻底清算朝中嫉贤妒能的顽固外戚势力（慕容评）",
      "逝世后导致慕容垂被迫出奔、前燕迅速被前秦所灭"
    ],
    "auxiliaryWeaknessesEn": [
      "Spared corrupt royal factions (Murong Ping) out of gentle mercy",
      "his death unleashed petty jealousy that exiled Murong Chui and doomed the state"
    ]
  },
  {
    "id": "murong_chui",
    "nameZh": "慕容垂",
    "nameEn": "Murong Chui (Emperor Chengwu of Later Yan)",
    "dynastyZh": "前燕 / 后燕",
    "dynastyEn": "Former Yan / Later Yan",
    "eraTag": "sixteen_kingdoms",
    "eraNameZh": "十六国风云",
    "eraNameEn": "Sixteen Kingdoms Era",
    "positionZh": "后燕开国皇帝 · 战无不胜的七旬老英雄",
    "positionEn": "Founding Emperor of Later Yan · Invincible Septuagenarian Warrior",
    "personalityZh": "英姿盖世、雄才大略、隐忍待机、百折不挠、威震中原",
    "personalityEn": "Towering warrior presence, tactical brilliance, legendary patience to await cosmic turning points, indomitable will",
    "deedsZh": "前燕枋头之战以三万铁骑大破桓温五万北伐精锐；遭太傅慕容评嫉恨谋害亡命投奔前秦苻坚，深得器重；淝水之战前秦溃败慕容垂三万军独完，从容护送苻坚归长安后自立，复国建立后燕；古稀之年征战无敌，却因太子慕容宝参合陂惨败，抱病亲征击溃北魏军，过参合陂闻哭声悲愤呕血而亡。",
    "deedsEn": "Decimated Huan Wen's massive northern invasion at Fangtou. Exiled by jealous ministers, he sheltered under Fu Jian. After Former Qin collapsed at Fei River, his 30,000 troops alone remained intact; escorting Fu Jian safely, he then founded Later Yan. Undefeated until age 70, when his son lost the army at Canhe Slope; Chui campaigned on his deathbed, wept at the bone heaps, and died vomiting blood.",
    "archetype": "executive",
    "fiveElements": {
      "dominant": "金",
      "secondary": "火"
    },
    "tenGodsAffinity": [
      "七杀",
      "偏财",
      "偏印"
    ],
    "patternType": "羊刃驾杀",
    "strengthAdviceZh": "乱世第一战神英雄气概与极限隐忍典范！身处逆境能俯首称臣卧薪尝胆十余年，风云突变时能一日千里裂土复国，军事造诣冠绝当世。",
    "strengthAdviceEn": "Superhuman resilience and ultimate military genius! Endured a decade in exile under rival monarchs, then resurrected his empire overnight when the macro cycle turned.",
    "weaknessAdviceZh": "英雄最痛在舐犊之情与继承人之殇！在继承人慕容宝孱弱无能时未果断换储，最终一生辉煌基业毁于二代之手。",
    "weaknessAdviceEn": "Fatal blindspot: parental indulgence toward an inept crown prince! Failing to replace his weak heir Murong Bao allowed his hard-won empire to dissolve upon his death.",
    "historicalQuoteZh": "《十六国春秋》：垂少有大度，善断大事。战必胜，攻必克，天下雄杰，罕有其匹。晚遭参合之变，悲愤致卒，烈士暮年，壮心不已！",
    "historicalQuoteEn": "Spring and Autumn of Sixteen Kingdoms: Murong Chui possessed boundless vision and tactical infallibility. Undefeated in war, his final sorrow at Canhe Slope remains an eternal tragic ballad of aging heroes.",
    "auxiliaryStrengthsZh": [
      "乱世第一战神英雄气概与极限隐忍典范",
      "身处逆境能俯首称臣卧薪尝胆十余年，风云突变时能一日千里裂土复国，军事造诣冠绝当世"
    ],
    "auxiliaryStrengthsEn": [
      "Superhuman resilience and ultimate military genius",
      "Endured a decade in exile under rival monarchs, then resurrected his empire overnight when the macro cycle turned"
    ],
    "auxiliaryWeaknessesZh": [
      "英雄最痛在舐犊之情与继承人之殇",
      "在继承人慕容宝孱弱无能时未果断换储，最终一生辉煌基业毁于二代之手"
    ],
    "auxiliaryWeaknessesEn": [
      "Fatal blindspot: parental indulgence toward an inept crown prince",
      "Failing to replace his weak heir Murong Bao allowed his hard-won empire to dissolve upon his death"
    ]
  },
  {
    "id": "murong_de",
    "nameZh": "慕容德",
    "nameEn": "Murong De (Emperor Xianwu of Southern Yan)",
    "dynastyZh": "南燕",
    "dynastyEn": "Southern Yan",
    "eraTag": "sixteen_kingdoms",
    "eraNameZh": "十六国风云",
    "eraNameEn": "Sixteen Kingdoms Era",
    "positionZh": "南燕开国皇帝 · 献武帝",
    "positionEn": "Founding Emperor of Southern Yan · Resilient Sovereign",
    "personalityZh": "仁厚识度、善抚遗民、从善如流、临机变通",
    "personalityEn": "Kind, perceptive, compassionate toward refugees, receptive to counsel, highly adaptable in crisis",
    "deedsZh": "慕容垂之弟，后燕参合陂之败后北方沦陷，慕容德率残部南渡黄河进据滑台；后遭北魏压迫果断挥师东进占领青齐，建立南燕政权称帝，轻徭薄赋安抚流民，为慕容鲜卑保全最后命脉。",
    "deedsEn": "Brother of Murong Chui. When Later Yan disintegrated, he led refugees across the Yellow River, seized Shandong, established Southern Yan, lowered taxes, and sheltered displaced families, securing a flourishing sanctuary for his clan.",
    "archetype": "executive",
    "fiveElements": {
      "dominant": "木",
      "secondary": "水"
    },
    "tenGodsAffinity": [
      "正印",
      "正官",
      "食神"
    ],
    "patternType": "官印相生",
    "strengthAdviceZh": "极佳的危机转向与异地重建能力，不与不可战胜之强敌硬碰硬，懂得战略转移开辟全新利基市场。",
    "strengthAdviceEn": "Superb crisis relocation and greenfield restructuring agility; avoids futile head-on collisions with unstoppable leviathans to carve out fresh thriving niches.",
    "weaknessAdviceZh": "南燕立国于山东孤岛，地狭民寡，未能在有生之年彻底奠定深层战略纵深，身后易为江东强权所灭。",
    "weaknessAdviceEn": "Confined to coastal Shandong without strategic hinterland; small demographic scale left his successor defenseless against southern behemoths.",
    "historicalQuoteZh": "《晋书》：德沉雅仁厚，受命于危难之际，开国海隅，礼乐刑赏，有可观者焉。",
    "historicalQuoteEn": "Book of Jin: Murong De was refined and benevolent, accepting sovereign destiny in extreme peril to build a flourishing realm on the eastern seaboard.",
    "auxiliaryStrengthsZh": [
      "极佳的危机转向与异地重建能力",
      "不与不可战胜之强敌硬碰硬，懂得战略转移开辟全新利基市场"
    ],
    "auxiliaryStrengthsEn": [
      "Superb crisis relocation and greenfield restructuring agility",
      "avoids futile head-on collisions with unstoppable leviathans to carve out fresh thriving niches"
    ],
    "auxiliaryWeaknessesZh": [
      "南燕立国于山东孤岛",
      "地狭民寡，未能在有生之年彻底奠定深层战略纵深，身后易为江东强权所灭"
    ],
    "auxiliaryWeaknessesEn": [
      "Confined to coastal Shandong without strategic hinterland",
      "small demographic scale left his successor defenseless against southern behemoths"
    ]
  },
  {
    "id": "fu_jian",
    "nameZh": "苻坚",
    "nameEn": "Fu Jian (Emperor Xuanzhao of Former Qin)",
    "dynastyZh": "前秦",
    "dynastyEn": "Former Qin",
    "eraTag": "sixteen_kingdoms",
    "eraNameZh": "十六国风云",
    "eraNameEn": "Sixteen Kingdoms Era",
    "positionZh": "前秦宣昭帝 · 统一北方的悲剧仁君",
    "positionEn": "Emperor Xuanzhao of Former Qin · Tragic Benevolent Sovereign",
    "personalityZh": "雄才大略、仁厚博爱、笃信大同、缺乏帝王冷酷防线、好大喜功",
    "personalityEn": "Visionary unifier, profoundly benevolent, devoted to universal brotherhood, lacking Machiavellian cynicism, prone to grandiosity",
    "deedsZh": "得王猛辅佐诛暴君即位，一统北方平灭前燕、仇池、前凉、代国，开创前秦极盛；实行胡汉一家政策，厚待降将慕容垂、姚苌；王猛死后力排众议发动淝水之战投鞭断流，八十万大军溃败，后遭姚苌缢杀于新平佛寺，一代豪雄悲剧落幕。",
    "deedsEn": "Partnered with Wang Meng to unseat a tyrant and unify the northern realm, crushing rival empires. Practiced unprecedented pan-ethnic egalitarianism, bestowing high command upon defeated rivals. Following Wang Meng's death, launched the catastrophic million-man invasion at Fei River; defeated, he was betrayed, captured, and strangled by Yao Chang in a Buddhist monastery.",
    "archetype": "executive",
    "fiveElements": {
      "dominant": "土",
      "secondary": "火"
    },
    "tenGodsAffinity": [
      "正印",
      "偏财",
      "正官"
    ],
    "patternType": "官印相生",
    "strengthAdviceZh": "格局博大、心怀天下大同之宏图，敢于打破民族偏见任用贤能，政治魄力与包容力千古少见。",
    "strengthAdviceEn": "Monumental idealism and pan-human brotherhood vision; daringly smashed ethnic barriers to employ the most brilliant minds.",
    "weaknessAdviceZh": "仁慈到了近乎天真的危险境地！对反复无常的野心家（慕容垂、姚苌）毫无提防与人质扣押，听不进防范背刺的警钟；战略盲目盲信兵力优势，忽视后方凝聚力与战略战术破绽，导致一战倾覆万劫不复。",
    "weaknessAdviceEn": "Fatal benevolence bordering on suicidal naivety! Showered treacherous conquered warlords with elite armies without collateral; mistook sheer numbers for true cohesion, suffering total catastrophic collapse at Fei River.",
    "historicalQuoteZh": "坚登寿阳城望晋军，见草木皆以为晋兵，顾谓融曰：‘此亦劲敌，何谓弱也！’怃然始有惧色。",
    "historicalQuoteEn": "Gazing from the walls of Shouyang, Fu Jian mistook trees and reeds for armored Jin troops, whispering to Fu Rong: 'These are formidable foes indeed; who called them weak?!' His face paled with sudden terror.",
    "auxiliaryStrengthsZh": [
      "格局博大、心怀天下大同之宏图",
      "敢于打破民族偏见任用贤能，政治魄力与包容力千古少见"
    ],
    "auxiliaryStrengthsEn": [
      "Monumental idealism and pan-human brotherhood vision",
      "daringly smashed ethnic barriers to employ the most brilliant minds"
    ],
    "auxiliaryWeaknessesZh": [
      "仁慈到了近乎天真的危险境地",
      "对反复无常的野心家（慕容垂、姚苌）毫无提防与人质扣押，听不进防范背刺的警钟"
    ],
    "auxiliaryWeaknessesEn": [
      "Fatal benevolence bordering on suicidal naivety",
      "Showered treacherous conquered warlords with elite armies without collateral"
    ]
  },
  {
    "id": "wang_meng",
    "nameZh": "王猛",
    "nameEn": "Wang Meng",
    "dynastyZh": "前秦",
    "dynastyEn": "Former Qin",
    "eraTag": "sixteen_kingdoms",
    "eraNameZh": "十六国风云",
    "eraNameEn": "Sixteen Kingdoms Era",
    "positionZh": "前秦丞相兼大将军 · 功迈诸葛的一代奇才",
    "positionEn": "Grand Chancellor of Former Qin · Peerless Statesman Surpassing Zhuge Liang",
    "personalityZh": "明察秋毫、刚毅果决、法度森严、知人善任、见微知著",
    "personalityEn": "Omniscient clarity, unbending will, legalistic discipline, consummate talent scout, reading cosmic macro cycles effortlessly",
    "deedsZh": "少贫卖畚，扪虱而谈震动桓温，谢绝南下留在北方寻找真主；辅佐苻坚十八年，内立法度肃清豪强、劝课农桑、平反冤狱，外统大军扫平前燕拓土千里，身兼数要职治国如神；临终苦谏苻坚‘晋虽僻陋天命未改，切勿伐晋；慕容垂、姚苌皆我仇敌，速宜除之’，千古谋国巨匠。",
    "deedsEn": "Lived in poverty selling baskets; famously squeezed lice from his robes while debating Huan Wen, refusing southern exile. Steered Former Qin for 18 years, enforcing iron laws, breaking aristocratic mafias, and conquering Former Yan. On his deathbed warned: 'Eastern Jin holds the mandate of heaven; never attack south. Murong Chui and Yao Chang are vipers—execute them immediately!'",
    "archetype": "civil",
    "fiveElements": {
      "dominant": "水",
      "secondary": "金"
    },
    "tenGodsAffinity": [
      "正官",
      "偏印",
      "七杀"
    ],
    "patternType": "杀印相生",
    "strengthAdviceZh": "系统治理与战略推演的天花板级宗师！不仅拥有顶级的治国理政实干执行力，更能对未来数十年的地缘战略与人性阴暗面做出百分之百准确的生死预言。",
    "strengthAdviceEn": "The ultimate titan of systemic governance and geopolitical foresight! Combines iron executive execution with flawless prophetic discernment of human nature's darkest treachery.",
    "weaknessAdviceZh": "个人能力过于耀眼以致前秦体系高度依赖其一人运转；未能建立起摆脱其个人权威的制度自动驾驶机制，自己一去前秦迅速崩盘。",
    "weaknessAdviceEn": "Systemic over-reliance on his singular genius; failed to automate governance beyond his personal presence, causing the entire empire to unravel once he departed.",
    "historicalQuoteZh": "王猛临终顾谓坚曰：‘晋虽僻陋，正朔相承，不可伐也。慕容、姚氏，我之仇敌，宜早除之，以宁社稷！’",
    "historicalQuoteEn": "Wang Meng whispered on his deathbed: 'Though Jin is southern and distant, it holds lawful continuity; never invade it. Murong Chui and Yao Chang are mortal vipers—destroy them now to safeguard the realm!'",
    "auxiliaryStrengthsZh": [
      "系统治理与战略推演的天花板级宗师",
      "不仅拥有顶级的治国理政实干执行力，更能对未来数十年的地缘战略与人性阴暗面做出百分之百准确的生死预言"
    ],
    "auxiliaryStrengthsEn": [
      "The ultimate titan of systemic governance and geopolitical foresight",
      "Combines iron executive execution with flawless prophetic discernment of human nature's darkest treachery"
    ],
    "auxiliaryWeaknessesZh": [
      "个人能力过于耀眼以致前秦体系高度依赖其一人运转",
      "未能建立起摆脱其个人权威的制度自动驾驶机制，自己一去前秦迅速崩盘"
    ],
    "auxiliaryWeaknessesEn": [
      "Systemic over-reliance on his singular genius",
      "failed to automate governance beyond his personal presence, causing the entire empire to unravel once he departed"
    ]
  },
  {
    "id": "fu_rong",
    "nameZh": "苻融",
    "nameEn": "Fu Rong (Prince of Yangping)",
    "dynastyZh": "前秦",
    "dynastyEn": "Former Qin",
    "eraTag": "sixteen_kingdoms",
    "eraNameZh": "十六国风云",
    "eraNameEn": "Sixteen Kingdoms Era",
    "positionZh": "前秦阳平公 · 征南大将军",
    "positionEn": "Prince of Yangping · General Who Conquers the South",
    "personalityZh": "兼资文武、明察断狱、深明大局、敢于死谏、悲壮忠烈",
    "personalityEn": "Brilliant civil magistrate and warrior, possesses deep strategic clarity, fearless in dissent, tragically loyal",
    "deedsZh": "苻坚幼弟，断案如神，文武百官敬服；继王猛之后主持政务，数度痛哭苦谏苻坚不可南征东晋，明言慕容垂等人必生祸心；淝水之战受命任先锋总指挥，在晋军渡水前锋溃退时驰马阵前力挽狂澜试图止乱，战马跌倒被晋军所杀，前秦大军随之土崩瓦解。",
    "deedsEn": "Fu Jian's younger brother. A legendary jurist and battlefield general. Wept openly and begged Fu Jian not to invade the south, accurately exposing Murong Chui's treachery. At the Battle of Fei River, commanded the vanguard; dashed across the lines trying to halt a panicked retreat, fell from his horse, and was slain, triggering the fatal rout.",
    "archetype": "civil",
    "fiveElements": {
      "dominant": "土",
      "secondary": "金"
    },
    "tenGodsAffinity": [
      "正官",
      "正印",
      "七杀"
    ],
    "patternType": "官印相生",
    "strengthAdviceZh": "智商情商极高的二把手典范，察微知著，对战略风险有本能的精准预警，且在危机爆发时敢于亲临一线力挽狂澜。",
    "strengthAdviceEn": "Supreme second-in-command archetype; detects structural vulnerabilities instinctively and risks everything on the frontline to prevent systemic failure.",
    "weaknessAdviceZh": "明知最高统帅陷入执念与非理性冒险，在谏阻无效后只能无奈随波逐流担任执行者，最终成为错误战略决策的陪葬品。",
    "weaknessAdviceEn": "When the sovereign descends into manic delusion, voicing logical objections without having an independent executive circuit forces you to march into slaughter alongside him.",
    "historicalQuoteZh": "融流涕曰：‘陛下宠育鲜卑、羌、羯，布满畿甸，此皆我之仇敌。今悉国兵以争江东，臣恐变生肘腋，悔之无及！’",
    "historicalQuoteEn": "Fu Rong wept: 'Your Majesty has loaded the capital with Xianbei and Qiang warlords who are mortal enemies! Throwing our entire army across the river will spark doom at our backs!'",
    "auxiliaryStrengthsZh": [
      "智商情商极高的二把手典范",
      "察微知著，对战略风险有本能的精准预警，且在危机爆发时敢于亲临一线力挽狂澜"
    ],
    "auxiliaryStrengthsEn": [
      "Supreme second-in-command archetype",
      "detects structural vulnerabilities instinctively and risks everything on the frontline to prevent systemic failure"
    ],
    "auxiliaryWeaknessesZh": [
      "明知最高统帅陷入执念与非理性冒险",
      "在谏阻无效后只能无奈随波逐流担任执行者，最终成为错误战略决策的陪葬品"
    ],
    "auxiliaryWeaknessesEn": [
      "When the sovereign descends into manic delusion",
      "voicing logical objections without having an independent executive circuit forces you to march into slaughter alongside him"
    ]
  },
  {
    "id": "yao_chang",
    "nameZh": "姚苌",
    "nameEn": "Yao Chang (Emperor Wuzhao of Later Qin)",
    "dynastyZh": "后秦",
    "dynastyEn": "Later Qin",
    "eraTag": "sixteen_kingdoms",
    "eraNameZh": "十六国风云",
    "eraNameEn": "Sixteen Kingdoms Era",
    "positionZh": "后秦武昭帝 · 弑主反噬的极恶枭雄",
    "positionEn": "Founding Emperor of Later Qin · The Ruthless Usurper",
    "personalityZh": "狡诈如狐、沉鸷多诡、善抓战机、冷酷背叛",
    "personalityEn": "Cunning like a fox, patient, ruthless opportunist, completely unburdened by loyalty or gratitude",
    "deedsZh": "羌族首领，曾事后赵、降前秦，苻坚待之甚厚；淝水之战随军出征，战后受命西征失败畏罪叛变，聚众自立为万年秦王建立后秦；擒杀大恩人苻坚并逼其让出国玺，后夜夜梦苻坚索命惊惧发狂致疾而亡。",
    "deedsEn": "Chieftain of the Qiang tribe. Lavishly trusted and elevated by Fu Jian after surrendering. Fleeing after Fei River, he formed an army, proclaimed the Later Qin dynasty, captured his benefactor Fu Jian, and brutally strangled him. Plagued by terrifying nightmares of Fu Jian's ghost until his agonizing death.",
    "archetype": "executive",
    "fiveElements": {
      "dominant": "土",
      "secondary": "水"
    },
    "tenGodsAffinity": [
      "偏印",
      "七杀",
      "偏财"
    ],
    "patternType": "偏印格",
    "strengthAdviceZh": "极端冷酷务实的生存主义大师！在群雄环伺的乱世中嗅觉极其灵敏，善于在巨人倒下的一刹那噬咬其骨髓自立门派。",
    "strengthAdviceEn": "Master of predatory survivalism; sniffs out the exact millisecond a titan trips, ruthlessly consuming his flesh to establish independent sovereignty.",
    "weaknessAdviceZh": "背信弃义弑杀恩主的道德负债与心理梦魇足以摧毁一个人的心智！靠卑劣背叛聚拢的人心缺乏根本向心力，晚年必在无尽的猜忌惊恐中神魂颠倒。",
    "weaknessAdviceEn": "Moral bankruptcy and patricidal betrayal generate insurmountable psychological karmic rot! Treachery breeds pervasive internal paranoia that rots your sanity from within.",
    "historicalQuoteZh": "苌梦苻坚将天官使者将数百骑入营拔槊刺之，苌惊走，误中槊刃，呼叫而死。",
    "historicalQuoteEn": "Yao Chang dreamt Fu Jian led a spectral cavalry into his tent, thrusting a spear through his groin. Waking screaming, he suffered abdominal hemorrhage and died in agony.",
    "auxiliaryStrengthsZh": [
      "极端冷酷务实的生存主义大师",
      "在群雄环伺的乱世中嗅觉极其灵敏，善于在巨人倒下的一刹那噬咬其骨髓自立门派"
    ],
    "auxiliaryStrengthsEn": [
      "Master of predatory survivalism",
      "sniffs out the exact millisecond a titan trips, ruthlessly consuming his flesh to establish independent sovereignty"
    ],
    "auxiliaryWeaknessesZh": [
      "背信弃义弑杀恩主的道德负债与心理梦魇足以摧毁一个人的心智",
      "靠卑劣背叛聚拢的人心缺乏根本向心力，晚年必在无尽的猜忌惊恐中神魂颠倒"
    ],
    "auxiliaryWeaknessesEn": [
      "Moral bankruptcy and patricidal betrayal generate insurmountable psychological karmic rot",
      "Treachery breeds pervasive internal paranoia that rots your sanity from within"
    ]
  },
  {
    "id": "lv_guang",
    "nameZh": "吕光",
    "nameEn": "Lü Guang (Emperor Yiwu of Later Cool)",
    "dynastyZh": "后凉",
    "dynastyEn": "Later Liang",
    "eraTag": "sixteen_kingdoms",
    "eraNameZh": "十六国风云",
    "eraNameEn": "Sixteen Kingdoms Era",
    "positionZh": "后凉开国皇帝 · 远征西域之霸主",
    "positionEn": "Founding Emperor of Later Liang · Conqueror of the Western Regions",
    "personalityZh": "沉勇威重、不苟言笑、骁勇善战、晚年溺爱诸子引爆内乱",
    "personalityEn": "Stoic, stern, fearless frontier commander, yet fatally indulged his incompetent sons, sparking succession civil wars",
    "deedsZh": "前秦名将，受苻坚之命率七万精锐远征西域，横扫三十余国威震大漠，迎请佛学泰斗鸠摩罗什东归；闻前秦淝水之溃，回师据河西割据称帝建立后凉；晚年废长立幼引爆诸子流血夺嫡，后凉迅速瓦解。",
    "deedsEn": "General under Fu Jian. Commanded 70,000 men to subdue over thirty kingdoms in the Western Regions, bringing back the revered translator Kumarajiva. Hearing of Fu Jian's fall, seized the Hexi Corridor to found Later Liang. Later destabilized his realm through succession nepotism.",
    "archetype": "executive",
    "fiveElements": {
      "dominant": "金",
      "secondary": "土"
    },
    "tenGodsAffinity": [
      "七杀",
      "正印",
      "比肩"
    ],
    "patternType": "七杀格",
    "strengthAdviceZh": "独当一面的远征统帅，具备在极端陌生、复杂的外部地缘环境中开疆拓土、独立决断的超级攻坚能力。",
    "strengthAdviceEn": "Formidable expeditionary commander capable of dominating alien geopolitical landscapes through autonomous decision-making and martial grit.",
    "weaknessAdviceZh": "在战略大方向上缺乏敏锐度，困守河西一隅坐失逐鹿中原良机；在接班人培养上摇摆不定，导致辛苦开拓的疆土瞬间内爆。",
    "weaknessAdviceEn": "Lacked grand geopolitical vision, staying marooned in the Hexi corridor; erratic succession choices triggered fratricidal bloodbaths upon his death.",
    "historicalQuoteZh": "《晋书》：光勇力绝人，威加西域，开基河右。然宠爱庶幼，祸及宗邦，悲夫！",
    "historicalQuoteEn": "Book of Jin: Lü Guang possessed titanic valor, subduing the Western Regions. Yet pampering concubines' sons brought utter destruction upon his state.",
    "auxiliaryStrengthsZh": [
      "独当一面的远征统帅",
      "具备在极端陌生、复杂的外部地缘环境中开疆拓土、独立决断的超级攻坚能力"
    ],
    "auxiliaryStrengthsEn": [
      "Formidable expeditionary commander capable of dominating alien geopolitical landscapes through autonomous decision-making and martial grit.",
      "Leverages core natural talents to pierce strategic bottlenecks."
    ],
    "auxiliaryWeaknessesZh": [
      "在战略大方向上缺乏敏锐度，困守河西一隅坐失逐鹿中原良机",
      "在接班人培养上摇摆不定，导致辛苦开拓的疆土瞬间内爆"
    ],
    "auxiliaryWeaknessesEn": [
      "Lacked grand geopolitical vision, staying marooned in the Hexi corridor",
      "erratic succession choices triggered fratricidal bloodbaths upon his death"
    ]
  },
  {
    "id": "qifu_guoren",
    "nameZh": "乞伏国仁",
    "nameEn": "Qifu Guoren",
    "dynastyZh": "西秦",
    "dynastyEn": "Western Qin",
    "eraTag": "sixteen_kingdoms",
    "eraNameZh": "十六国风云",
    "eraNameEn": "Sixteen Kingdoms Era",
    "positionZh": "西秦开国奠基者 · 陇西鲜卑雄杰",
    "positionEn": "Founding Monarch of Western Qin · Steppe Hero of Longxi",
    "personalityZh": "雄勇果毅、善抚部众、因势利导、审时度势",
    "personalityEn": "Fierce, decisive, paternalistic tribal chief, highly adept at riding geopolitical waves",
    "deedsZh": "陇西鲜卑首领，随苻坚南下征晋，中途闻前秦兵败果断返回陇西筑勇士城起兵自立，建立西秦；联结汉羌各族，保境安民开创陇右霸业。",
    "deedsEn": "Chieftain of the Longxi Xianbei. Marched south with Fu Jian; sensing imminent disaster, he pivoted back to Longxi, built Yongshi fortress, and proclaimed Western Qin, harmonizing Han and Qiang tribes.",
    "archetype": "executive",
    "fiveElements": {
      "dominant": "土",
      "secondary": "金"
    },
    "tenGodsAffinity": [
      "比肩",
      "七杀",
      "正财"
    ],
    "patternType": "建禄格",
    "strengthAdviceZh": "拥有极强的危机嗅觉与瞬间跳船保全团队的决断力，擅长在地方边缘地带构筑小而精的稳固防线。",
    "strengthAdviceEn": "Possesses exceptional crisis radar to jump sinking ships instantly; builds tight, resilient regional defensive enclaves.",
    "weaknessAdviceZh": "格局偏于区域偏安，缺乏向中原腹地辐射影响力的长远制度规划，始终处于强邻夹缝之中。",
    "weaknessAdviceEn": "Confined to a regional survival mindset; lacked institutional depth to project power beyond the rugged valleys.",
    "historicalQuoteZh": "国仁性深沈，有大度，见机而作，保境立基，实乱世之雄也。",
    "historicalQuoteEn": "Book of Jin: Qifu Guoren was profound and magnanimous; seizing turning points to build fortresses, a true pragmatist of chaos.",
    "auxiliaryStrengthsZh": [
      "拥有极强的危机嗅觉与瞬间跳船保全团队的决断力",
      "擅长在地方边缘地带构筑小而精的稳固防线"
    ],
    "auxiliaryStrengthsEn": [
      "Possesses exceptional crisis radar to jump sinking ships instantly",
      "builds tight, resilient regional defensive enclaves"
    ],
    "auxiliaryWeaknessesZh": [
      "格局偏于区域偏安",
      "缺乏向中原腹地辐射影响力的长远制度规划，始终处于强邻夹缝之中"
    ],
    "auxiliaryWeaknessesEn": [
      "Confined to a regional survival mindset",
      "lacked institutional depth to project power beyond the rugged valleys"
    ]
  },
  {
    "id": "tufa_wugu",
    "nameZh": "秃发乌孤",
    "nameEn": "Tufa Wugu (Martial King of Southern Liang)",
    "dynastyZh": "南凉",
    "dynastyEn": "Southern Liang",
    "eraTag": "sixteen_kingdoms",
    "eraNameZh": "十六国风云",
    "eraNameEn": "Sixteen Kingdoms Era",
    "positionZh": "南凉开国皇帝 · 河西鲜卑霸王",
    "positionEn": "Founding King of Southern Liang · Fierce Sovereign of Hexi",
    "personalityZh": "雄勇果烈、虚心纳谏、善待士民、英年早逝",
    "personalityEn": "Courageous, fiery, humble listener to strategic advice, beloved by commoners, died in his prime",
    "deedsZh": "河西鲜卑首领，拒绝后凉吕光封爵自称西平王，建立南凉；广招汉人士族，修水利劝农桑，击破吕光后凉军威震河西；后因醉酒策马坠马重伤身亡。",
    "deedsEn": "Leader of the Tufa Xianbei. Defied Lü Guang's summons to establish Southern Liang. Welcomed Han scholars, built massive irrigation networks, and defeated Later Liang armies, before fatally crashing from a gallop while intoxicated.",
    "archetype": "military",
    "fiveElements": {
      "dominant": "火",
      "secondary": "木"
    },
    "tenGodsAffinity": [
      "七杀",
      "伤官",
      "偏财"
    ],
    "patternType": "羊刃驾杀",
    "strengthAdviceZh": "具备锐意改革、重视生产与听取直言的优秀统帅特质，敢于挑战盘踞已久的旧霸权并战而胜之。",
    "strengthAdviceEn": "Dynamic reformist general who respected agriculture and took harsh criticism gracefully, daring to challenge and overthrow entrenched regional hegemons.",
    "weaknessAdviceZh": "缺乏生理与情绪层面的自我节制，饮酒纵马导致荒唐横死，个人意外直接葬送了政权处于上升期的巨大势头。",
    "weaknessAdviceEn": "Fatal lack of behavioral self-discipline; drunken horse-racing led to a sudden accidental death that decapitated his rising kingdom.",
    "historicalQuoteZh": "乌孤临终叹曰：‘吾醉酒乘马，自取颠覆，社稷未定，何以为天子！’言讫而卒。",
    "historicalQuoteEn": "On his deathbed, Wugu wept: 'Intoxicated on horseback, I brought doom upon myself. With the realm unsettled, how dare I be called king!' and died.",
    "auxiliaryStrengthsZh": [
      "具备锐意改革、重视生产与听取直言的优秀统帅特质",
      "敢于挑战盘踞已久的旧霸权并战而胜之"
    ],
    "auxiliaryStrengthsEn": [
      "Dynamic reformist general who respected agriculture and took harsh criticism gracefully",
      "daring to challenge and overthrow entrenched regional hegemons"
    ],
    "auxiliaryWeaknessesZh": [
      "缺乏生理与情绪层面的自我节制",
      "饮酒纵马导致荒唐横死，个人意外直接葬送了政权处于上升期的巨大势头"
    ],
    "auxiliaryWeaknessesEn": [
      "Fatal lack of behavioral self-discipline",
      "drunken horse-racing led to a sudden accidental death that decapitated his rising kingdom"
    ]
  },
  {
    "id": "li_gao",
    "nameZh": "李暠",
    "nameEn": "Li Gao (Emperor Wuzhao of Western Liang)",
    "dynastyZh": "西凉",
    "dynastyEn": "Western Liang",
    "eraTag": "sixteen_kingdoms",
    "eraNameZh": "十六国风云",
    "eraNameEn": "Sixteen Kingdoms Era",
    "positionZh": "西凉开国皇帝 · 李唐宗室始祖",
    "positionEn": "Founding Emperor of Western Liang · Imperial Progenitor of Tang Dynasty",
    "personalityZh": "沉敏宽和、博通经史、善抚边陲、儒雅风范",
    "personalityEn": "Calm, gentle, deeply versed in Confucian classics, beloved frontier administrator, dignified scholar-statesman",
    "deedsZh": "汉飞将军李广之后，精通经史兵法；为段业所任敦煌太守，后受推戴自立建立西凉定都酒泉；开渠屯田、兴办学校、著书立说，为河西保存汉文化火种，被后世唐太宗追尊为唐朝始祖。",
    "deedsEn": "Descendant of Han general Li Guang; a master of literature and warfare. Appointed governor of Dunhuang, he was elevated to found Western Liang at Jiuquan. Dug canals, opened schools, and preserved classical Han civilization, later venerated by Emperor Taizong as the ancestor of the Tang dynasty.",
    "archetype": "civil",
    "fiveElements": {
      "dominant": "木",
      "secondary": "土"
    },
    "tenGodsAffinity": [
      "正印",
      "正官",
      "食神"
    ],
    "patternType": "正印格",
    "strengthAdviceZh": "乱世中保存文明火种的典范！以文化认同凝聚人心，在兵荒马乱中坚持办学兴农，为后世积攒深厚的文明基因与政治福报。",
    "strengthAdviceEn": "The gold standard for preserving cultural flames in dark ages! Rallied hearts through high civilization, storing cultural and political karma for future dynasties.",
    "weaknessAdviceZh": "军事扩张与进攻决断力偏弱，偏安酒泉敦煌一隅，无力与中原残暴军阀进行高烈度战略对抗。",
    "weaknessAdviceEn": "Lacked offensive aggression; contented with cultural isolationism in oasis fortresses, leaving successors vulnerable to predatory conquerors.",
    "historicalQuoteZh": "《晋书》：暠通涉经史，尤善文义。抚纳流民，劝课农桑，河右冠带之风，于斯为盛。",
    "historicalQuoteEn": "Book of Jin: Li Gao was profoundly versed in classics and prose; sheltering refugees and tending fields, the scholar-gentry culture flourished under him.",
    "auxiliaryStrengthsZh": [
      "乱世中保存文明火种的典范",
      "以文化认同凝聚人心，在兵荒马乱中坚持办学兴农，为后世积攒深厚的文明基因与政治福报"
    ],
    "auxiliaryStrengthsEn": [
      "The gold standard for preserving cultural flames in dark ages",
      "Rallied hearts through high civilization, storing cultural and political karma for future dynasties"
    ],
    "auxiliaryWeaknessesZh": [
      "军事扩张与进攻决断力偏弱",
      "偏安酒泉敦煌一隅，无力与中原残暴军阀进行高烈度战略对抗"
    ],
    "auxiliaryWeaknessesEn": [
      "Lacked offensive aggression",
      "contented with cultural isolationism in oasis fortresses, leaving successors vulnerable to predatory conquerors"
    ]
  },
  {
    "id": "helian_bobo",
    "nameZh": "赫连勃勃",
    "nameEn": "Helian Bobo (Emperor Wulie of Daxia)",
    "dynastyZh": "大夏",
    "dynastyEn": "Daxia",
    "eraTag": "sixteen_kingdoms",
    "eraNameZh": "十六国风云",
    "eraNameEn": "Sixteen Kingdoms Era",
    "positionZh": "大夏开国皇帝 · 暴虐铸造统万城的沙漠苍狼",
    "positionEn": "Founding Emperor of Daxia · The Terrifying Desert Wolf of Tongwan",
    "personalityZh": "残暴狡黠、飘忽机变、用兵诡谲、嗜杀成性、极度偏执",
    "personalityEn": "Sadistically cruel, mercurial, master of nomadic guerrilla warfare, bloodthirsty, pathologically obsessed with absolute terror",
    "deedsZh": "匈奴铁弗部首领，父遭拓跋珪所杀流亡各地；后乘后秦内乱起兵自立建立大夏，以游击战术把后秦、南凉、北魏各路强敌玩弄于股掌；筑蒸土筑城之‘统万城’，锥入一寸杀筑者填入墙中；攻占长安屠城筑‘骷髅台’，性格暴虐至极，临死无悔意。",
    "deedsEn": "Son of a slain Xiongnu chief. Survived exile to establish the Daxia dynasty, running dazzling nomadic guerrilla rings around rival empires. Built the impregnable white fortress of Tongwan, testing walls with iron spikes: if a spike penetrated one inch, the builder was executed and buried inside the wall. Built pyramids of severed enemy heads ('Skull Platforms').",
    "archetype": "military",
    "fiveElements": {
      "dominant": "金",
      "secondary": "水"
    },
    "tenGodsAffinity": [
      "七杀",
      "伤官",
      "羊刃"
    ],
    "patternType": "羊刃驾杀",
    "strengthAdviceZh": "游击机动作战与不对称战争的绝顶奇才！善于利用空间换时间，飘忽不定绝不决战，在运动战中将庞大对手逐步放血消磨殆尽。",
    "strengthAdviceEn": "Supreme master of asymmetric and mobile guerrilla warfare! Trades space for time, never accepting pitched battles, bleeding lumbering empires dry on the move.",
    "weaknessAdviceZh": "残暴到了变态地步！把屠杀当做心理威慑的唯一工具，视同僚与战俘为草芥，全凭恐怖统治维系的政权在其死后瞬间分崩离析。",
    "weaknessAdviceEn": "Monstrous sadism! Relied purely on massacres and terror to rule; an empire held together only by fear evaporated the second the butcher breathed his last.",
    "historicalQuoteZh": "勃勃性残暴，好杀戮。每视筑城，以铁锥刺之，入一寸则杀工匠而并筑之。又造五兵，器成呈进，工匠亦死，是以兵器尤精。",
    "historicalQuoteEn": "Book of Jin: Helian Bobo was naturally bloodthirsty. Testing newly forged swords on his armorer: if the blade severed armor, the armorer was executed; if it failed, the bladesmith was beheaded.",
    "auxiliaryStrengthsZh": [
      "游击机动作战与不对称战争的绝顶奇才",
      "善于利用空间换时间，飘忽不定绝不决战，在运动战中将庞大对手逐步放血消磨殆尽"
    ],
    "auxiliaryStrengthsEn": [
      "Supreme master of asymmetric and mobile guerrilla warfare",
      "Trades space for time, never accepting pitched battles, bleeding lumbering empires dry on the move"
    ],
    "auxiliaryWeaknessesZh": [
      "残暴到了变态地步",
      "把屠杀当做心理威慑的唯一工具，视同僚与战俘为草芥，全凭恐怖统治维系的政权在其死后瞬间分崩离析"
    ],
    "auxiliaryWeaknessesEn": [
      "Monstrous sadism",
      "Relied purely on massacres and terror to rule"
    ]
  },
  {
    "id": "feng_ba",
    "nameZh": "冯跋",
    "nameEn": "Feng Ba (Emperor Wencheng of Northern Yan)",
    "dynastyZh": "北燕",
    "dynastyEn": "Northern Yan",
    "eraTag": "sixteen_kingdoms",
    "eraNameZh": "十六国风云",
    "eraNameEn": "Sixteen Kingdoms Era",
    "positionZh": "北燕文成帝 · 沉毅平乱的汉人豪杰",
    "positionEn": "Emperor Wencheng of Northern Yan · Stoic Han Sovereign",
    "personalityZh": "沉毅果敢、俭德素行、重农修法、力抗强邻",
    "personalityEn": "Stoic, frugal, devoted to agricultural recovery, upholding laws, standing firm against northern titans",
    "deedsZh": "后燕慕容氏末年汉人起事，冯跋平定内乱拥立慕容云，后即天王位建立北燕；在位二十二年躬行节俭、奖励农桑、兴修学校，在北魏拓跋氏与高句丽等强敌环伺的绝境中守卫辽西汉人命脉。",
    "deedsEn": "Led Han officers to revolt against tyrannical Murong Xi. Crowned Heavenly King of Northern Yan, ruling for 22 years with unbending frugality, educational reform, and border defense, preserving the Liaoxi frontier against the rising Northern Wei juggernaut.",
    "archetype": "civil",
    "fiveElements": {
      "dominant": "土",
      "secondary": "金"
    },
    "tenGodsAffinity": [
      "正官",
      "正印",
      "比肩"
    ],
    "patternType": "建禄格",
    "strengthAdviceZh": "极端清醒克己的危机管家！在不可逆转的四面包围绝境中坚守核心价值，行事低调内敛，以制度规范与艰苦朴素延长了组织的生存期。",
    "strengthAdviceEn": "Clear-eyed crisis steward; preserved core organizational sanity amid surrounded doom, practicing Spartan frugality and institutional rigor to survive across decades.",
    "weaknessAdviceZh": "晚年病重期间大权旁落于宠妃与外戚之手，导致其卧病在床被活活气死，引发弟冯弘篡位内乱，加速了北燕灭亡。",
    "weaknessAdviceEn": "Fell ill in late years and lost control to concubines; died of rage while bedridden as palace coups broke out in the outer chambers.",
    "historicalQuoteZh": "《晋书》：跋沉毅少言，自奉甚俭，政尚清简。开国边垂，能抗北魏之强，善保其民者也。",
    "historicalQuoteEn": "Book of Jin: Feng Ba was quiet and resolute, austere in personal life. Ruling a besieged border realm, he held off Northern Wei's might to shelter his people.",
    "auxiliaryStrengthsZh": [
      "极端清醒克己的危机管家",
      "在不可逆转的四面包围绝境中坚守核心价值，行事低调内敛，以制度规范与艰苦朴素延长了组织的生存期"
    ],
    "auxiliaryStrengthsEn": [
      "Clear-eyed crisis steward",
      "preserved core organizational sanity amid surrounded doom, practicing Spartan frugality and institutional rigor to survive across decades"
    ],
    "auxiliaryWeaknessesZh": [
      "晚年病重期间大权旁落于宠妃与外戚之手",
      "导致其卧病在床被活活气死，引发弟冯弘篡位内乱，加速了北燕灭亡"
    ],
    "auxiliaryWeaknessesEn": [
      "Fell ill in late years and lost control to concubines",
      "died of rage while bedridden as palace coups broke out in the outer chambers"
    ]
  },
  {
    "id": "kumarajiva",
    "nameZh": "鸠摩罗什",
    "nameEn": "Kumarajiva",
    "dynastyZh": "后凉 / 后秦",
    "dynastyEn": "Later Liang / Later Qin",
    "eraTag": "sixteen_kingdoms",
    "eraNameZh": "十六国风云",
    "eraNameEn": "Sixteen Kingdoms Era",
    "positionZh": "佛教四大译经家之首 · 三藏法师",
    "positionEn": "Foremost Buddhist Master & Translator · Tripitaka Master",
    "personalityZh": "慧悟天纵、妙契佛理、通达中西、坚忍淡泊",
    "personalityEn": "Celestial enlightenment, supreme translator uniting Chinese aesthetics with Sanskrit philosophy, serene and stoic",
    "deedsZh": "龟兹高僧，吕光破龟兹俘之居凉州十七年；后秦姚兴灭凉迎入长安，尊为国师译经；译出《金刚经》《妙法莲华经》《维摩诘经》《中论》等三百余卷，辞理圆融万古传诵；示寂焚身‘舌根不烂’成为千古奇迹。",
    "deedsEn": "Kucha-born Buddhist polymath. Held captive in Liangzhou for 17 years by Lü Guang. Escorted to Chang'an by Yao Xing as National Preceptor, he translated the definitive editions of Diamond Sutra, Lotus Sutra, and Vimalakirti Sutra into immortal Chinese prose; upon cremation, his tongue remained unburned.",
    "archetype": "specialist",
    "fiveElements": {
      "dominant": "火",
      "secondary": "木"
    },
    "tenGodsAffinity": [
      "偏印",
      "食神",
      "正印"
    ],
    "patternType": "食神用印",
    "strengthAdviceZh": "终极跨文化翻译与思想降维落地大师！能够将极端晦涩抽象的高维异域哲学，以最具审美感染力与文学穿透力的人类白话重构传世，经受千年时间的检验。",
    "strengthAdviceEn": "Supreme master of cross-cultural translation and philosophical synthesis! Transmuted transcendent metaphysical doctrine into peerless classical Chinese literature that survives millennia.",
    "weaknessAdviceZh": "生逢乱世作为文化圣贤屡次沦为军阀武力掠夺的‘政治吉祥物’与战利品，面对强权强迫破戒娶妻只能坦然承受其苦。",
    "weaknessAdviceEn": "As a spiritual titan in a savage era, he was frequently treated as a geopolitical trophy by armed warlords, forced to endure personal degradation while preserving dharma.",
    "historicalQuoteZh": "罗什临终誓曰：‘若所译经论不缪，焚身之后，舌根不焦。’及荼毗，薪灭形消，唯舌不烂！",
    "historicalQuoteEn": "Kumarajiva swore: 'If my translations contain no falsehoods, let my tongue not burn in the funeral pyre.' After cremation, while his body turned to ash, his tongue was entirely intact!",
    "auxiliaryStrengthsZh": [
      "终极跨文化翻译与思想降维落地大师",
      "能够将极端晦涩抽象的高维异域哲学，以最具审美感染力与文学穿透力的人类白话重构传世，经受千年时间的检验"
    ],
    "auxiliaryStrengthsEn": [
      "Supreme master of cross-cultural translation and philosophical synthesis",
      "Transmuted transcendent metaphysical doctrine into peerless classical Chinese literature that survives millennia"
    ],
    "auxiliaryWeaknessesZh": [
      "生逢乱世作为文化圣贤屡次沦为军阀武力掠夺的‘政治吉祥物’与战利品",
      "面对强权强迫破戒娶妻只能坦然承受其苦"
    ],
    "auxiliaryWeaknessesEn": [
      "As a spiritual titan in a savage era",
      "he was frequently treated as a geopolitical trophy by armed warlords, forced to endure personal degradation while preserving dharma"
    ]
  },
  {
    "id": "fotudeng",
    "nameZh": "佛图澄",
    "nameEn": "Fotudeng",
    "dynastyZh": "后赵",
    "dynastyEn": "Later Zhao",
    "eraTag": "sixteen_kingdoms",
    "eraNameZh": "十六国风云",
    "eraNameEn": "Sixteen Kingdoms Era",
    "positionZh": "后赵国师 · 神通救苦的天竺圣僧",
    "positionEn": "National Preceptor of Later Zhao · Divine Buddhist Healer",
    "personalityZh": "慈悲为怀、神通广大、智略过人、善化暴虐",
    "personalityEn": "Boundless compassion, esoteric miracle worker, master psychological strategist, transforming bloody tyrants",
    "deedsZh": "西域高僧，永嘉之乱来中原弘法；以钵生青莲、铃音预言等异能令残暴魔头石勒、石虎叹服，拜为大和尚国师；以宗教慈悲潜移默化劝止石勒滥杀无辜，暗中保全拯救中原百姓数十万人，弟子出释道安等开创中国佛教僧团制度。",
    "deedsEn": "West Asian Buddhist master. Tamed ferocious nomad tyrants Shi Le and Shi Hu through profound divination miracles, making lotus blossom from iron bowls. Exploited his mystical prestige to temper their bloodthirsty urges, saving hundreds of thousands of civilians.",
    "archetype": "specialist",
    "fiveElements": {
      "dominant": "水",
      "secondary": "火"
    },
    "tenGodsAffinity": [
      "偏印",
      "正印",
      "伤官"
    ],
    "patternType": "伤官佩印",
    "strengthAdviceZh": "利用神秘威权与超越世俗的智力杠杆，降伏极端野蛮暴力的顶级心理操盘大师，在修罗屠场中以柔克刚挽救无辜众生。",
    "strengthAdviceEn": "Master psychological tamer who leveraged spiritual aura and transcendent intelligence to restrain monstrous warlords, rescuing millions from the butchery floor.",
    "weaknessAdviceZh": "依附于暴虐君主石勒石虎的政权神权结构，虽能竭力劝阻屠杀，却终究无法从制度层面彻底根除极权暴虐的血腥根源。",
    "weaknessAdviceEn": "Tethered to murderous tyrants; while saving individual lives, he was powerless to permanently eradicate the structural savagery of the regime.",
    "historicalQuoteZh": "勒问曰：‘佛道有何灵验？’澄取钵盛水烧香咒之，须臾生青莲花，芬馥溢庭。勒大悦，自是军国大事无不请咨，受戒免死者不可胜数。",
    "historicalQuoteEn": "Shi Le asked: 'What miracle does your Buddha possess?' Fotudeng chanted over a bowl of water; instantly a blooming azure lotus emerged, filling the hall with fragrance. Overwhelmed with awe, Shi Le spared countless condemned captives thereafter.",
    "auxiliaryStrengthsZh": [
      "利用神秘威权与超越世俗的智力杠杆",
      "降伏极端野蛮暴力的顶级心理操盘大师，在修罗屠场中以柔克刚挽救无辜众生"
    ],
    "auxiliaryStrengthsEn": [
      "Master psychological tamer who leveraged spiritual aura and transcendent intelligence to restrain monstrous warlords",
      "rescuing millions from the butchery floor"
    ],
    "auxiliaryWeaknessesZh": [
      "依附于暴虐君主石勒石虎的政权神权结构",
      "虽能竭力劝阻屠杀，却终究无法从制度层面彻底根除极权暴虐的血腥根源"
    ],
    "auxiliaryWeaknessesEn": [
      "Tethered to murderous tyrants",
      "while saving individual lives, he was powerless to permanently eradicate the structural savagery of the regime"
    ]
  },
  {
    "id": "sima_rui",
    "nameZh": "司马睿",
    "nameEn": "Sima Rui (Emperor Yuan of Jin)",
    "dynastyZh": "东晋",
    "dynastyEn": "Eastern Jin",
    "eraTag": "eastern_jin",
    "eraNameZh": "东晋门阀",
    "eraNameEn": "Eastern Jin Dynastic Era",
    "positionZh": "东晋开国皇帝 · 王与马共天下",
    "positionEn": "Founding Emperor of Eastern Jin · Co-Ruler with Wang Clan",
    "personalityZh": "恭俭退让、隐忍求全、宽仁接纳、后期忧愤",
    "personalityEn": "Humble, accommodating, practicing strategic restraint and compromise, yet melancholic in late years",
    "deedsZh": "西晋琅琊王，南渡建康；依托琅琊王氏王导、王敦建立东晋偏安政权，时称‘王与马，共天下’；晚年不满王氏专权试图借刘隗、刁协抑王，激起王敦起兵逼宫，忧愤发病而崩。",
    "deedsEn": "Prince of Langya who fled south to Jiankang. Allied with brothers Wang Dao and Wang Dun to establish the Eastern Jin dynasty ('Wang and Horse co-rule the realm'). Later resisted the Wang clan's hegemony, sparking Wang Dun's armed revolt; died in sorrowful helplessness.",
    "archetype": "executive",
    "fiveElements": {
      "dominant": "木",
      "secondary": "土"
    },
    "tenGodsAffinity": [
      "正官",
      "正财",
      "正印"
    ],
    "patternType": "官印相生",
    "strengthAdviceZh": "地缘大迁移与异地创业的绝佳政客典范！善于放下架子结交顶级本地豪族与过江门阀，以共赢分权换取政权立足生根。",
    "strengthAdviceEn": "Master at geographic enterprise pivoting! Graciously shared sovereign equity with powerful gentry clans to secure regime survival.",
    "weaknessAdviceZh": "皇权极度虚弱，缺乏自身嫡系军事武装，一旦试图收回权力打破既得利益集团平衡，便迅速招致致命反扑。",
    "weaknessAdviceEn": "Lacked dedicated military firepower; attempting to claw back centralized authority without troops sparked armed rebellion by his partners.",
    "historicalQuoteZh": "晋元帝践阼，引王导升御座同坐，导辞曰：‘若太阳下同万物，苍生何以仰照！’帝乃止。",
    "historicalQuoteEn": "At the coronation, Emperor Yuan pulled Chancellor Wang Dao onto the imperial throne to sit beside him. Dao bowed: 'If the Sun descends to the level of common dust, how shall the people gaze upon light!'",
    "auxiliaryStrengthsZh": [
      "地缘大迁移与异地创业的绝佳政客典范",
      "善于放下架子结交顶级本地豪族与过江门阀，以共赢分权换取政权立足生根"
    ],
    "auxiliaryStrengthsEn": [
      "Master at geographic enterprise pivoting",
      "Graciously shared sovereign equity with powerful gentry clans to secure regime survival"
    ],
    "auxiliaryWeaknessesZh": [
      "皇权极度虚弱",
      "缺乏自身嫡系军事武装，旦试图收回权力打破既得利益集团平衡，便迅速招致致命反扑"
    ],
    "auxiliaryWeaknessesEn": [
      "Lacked dedicated military firepower",
      "attempting to claw back centralized authority without troops sparked armed rebellion by his partners"
    ]
  },
  {
    "id": "wang_dao",
    "nameZh": "王导",
    "nameEn": "Wang Dao",
    "dynastyZh": "东晋",
    "dynastyEn": "Eastern Jin",
    "eraTag": "eastern_jin",
    "eraNameZh": "东晋门阀",
    "eraNameEn": "Eastern Jin Dynastic Era",
    "positionZh": "东晋司空丞相 · 偏安江左的立国总设计师",
    "positionEn": "Prime Minister of Eastern Jin · Grand Architect of Jiangnan",
    "personalityZh": "镇之以静、从容包容、调和南北、清正宽简、大局宗师",
    "personalityEn": "Supremely calm, unflappable, master harmonizer of northern and southern clans, practicing Zen-like governance",
    "deedsZh": "琅琊王氏领袖，一手策划司马睿南渡建康；‘新亭对泣’力斥众人‘当共戮力王室，何至作楚囚相对泣邪！’；执掌东晋国政三十载，镇之以静群情自安，成功化解王敦之乱保全东晋社稷。",
    "deedsEn": "Patriarch of the Langya Wang clan. Architect of Eastern Jin. At the Xinting weeping banquet, scolded despairing refugees: 'We must dedicate our blood to recover the realm, why weep like Chu captives?!' Governed with supreme tranquility for 30 years, stabilizing southern civilization.",
    "archetype": "civil",
    "fiveElements": {
      "dominant": "水",
      "secondary": "木"
    },
    "tenGodsAffinity": [
      "正印",
      "正官",
      "食神"
    ],
    "patternType": "官印相生",
    "strengthAdviceZh": "天下第一等的宏观调停与情绪减震大师！不折腾、不激化矛盾，善于在派系纷争中以静制动，用极高的时间换空间智慧抚平一切撕裂。",
    "strengthAdviceEn": "The supreme master of macro diplomatic mediation and emotional shock absorption! Resolves violent polarities through effortless calm, trading time for space.",
    "weaknessAdviceZh": "过度放纵门阀士族兼并土地特权，为了政局稳定屡屡妥协姑息，埋下东晋门阀政治长期尾大不掉的痼疾。",
    "weaknessAdviceEn": "Excessive appeasement toward noble clans entrenched land monopolies, weakening long-term central state capacity.",
    "historicalQuoteZh": "导尝叹曰：‘不审卫展何以不至？’周顗曰：‘今年杀诸贼奴，取卫展何用！’导笑曰：‘卿又醉邪！’从容若此。",
    "historicalQuoteEn": "Wang Dao was endlessly serene in crisis. When reviled by drunken ministers during rebellions, he simply smiled: 'Are you tipsy again?' His equanimity calmed the empire.",
    "auxiliaryStrengthsZh": [
      "天下第一等的宏观调停与情绪减震大师",
      "不折腾、不激化矛盾，善于在派系纷争中以静制动，用极高的时间换空间智慧抚平一切撕裂"
    ],
    "auxiliaryStrengthsEn": [
      "The supreme master of macro diplomatic mediation and emotional shock absorption",
      "Resolves violent polarities through effortless calm, trading time for space"
    ],
    "auxiliaryWeaknessesZh": [
      "过度放纵门阀士族兼并土地特权",
      "为了政局稳定屡屡妥协姑息，埋下东晋门阀政治长期尾大不掉的痼疾"
    ],
    "auxiliaryWeaknessesEn": [
      "Excessive appeasement toward noble clans entrenched land monopolies",
      "weakening long-term central state capacity"
    ]
  },
  {
    "id": "wang_dun",
    "nameZh": "王敦",
    "nameEn": "Wang Dun",
    "dynastyZh": "东晋",
    "dynastyEn": "Eastern Jin",
    "eraTag": "eastern_jin",
    "eraNameZh": "东晋门阀",
    "eraNameEn": "Eastern Jin Dynastic Era",
    "positionZh": "大将军荆州牧 · 专兵逼宫的跋扈权臣",
    "positionEn": "Grand General & Governor of Jingzhou · Treasonous Warlord",
    "personalityZh": "刚暴自傲、雄杰不羁、专兵好斗、野心勃勃却气量狭隘",
    "personalityEn": "Fierce, arrogant, domineering military titan, ambitious yet lacking psychological stamina in the endgame",
    "deedsZh": "王导从兄，都督江扬荆六州军事，手握东晋半壁兵权；击缶唾壶唱曹操诗将唾壶边尽缺；因怨元帝用刘隗，两次自武昌起兵叛乱攻陷建康逼死重臣；再叛时病困军中，死后被掘墓剖棺戮尸。",
    "deedsEn": "Cousin of Wang Dao. Commanded the armies of six southern provinces, holding the military juggernaut of Eastern Jin. Beat spitting pots to shreds reciting Cao Cao's verses. Twice marched armies on the capital to depose rivals; died bedridden during rebellion and had his corpse unearthed and beheaded.",
    "archetype": "military",
    "fiveElements": {
      "dominant": "金",
      "secondary": "木"
    },
    "tenGodsAffinity": [
      "七杀",
      "比蛇",
      "偏财"
    ],
    "patternType": "羊刃格",
    "strengthAdviceZh": "气盖山河的军阀号召力与一线实战铁腕，敢于撕破虚伪的礼教面纱向最高统治机构索取绝对利益。",
    "strengthAdviceEn": "Unchecked martial ferocity and battlefield swagger; boldly tore down hypocritical court etiquette to extract maximum power.",
    "weaknessAdviceZh": "自绝于天下公序良俗！大义名分有亏、肆意刀兵践踏皇权社稷，在关键时刻生理崩坏病死军中，招致挫骨扬灰之千古耻辱。",
    "weaknessAdviceEn": "Sacrificed legitimacy and moral high ground; armed insurrection against the state left him isolated when fatal illness struck, suffering posthumous desecration.",
    "historicalQuoteZh": "每酒后咏魏武‘老骥伏枥，志在千里。烈士暮年，壮心不已’，以如意打唾壶为节，壶边尽缺。",
    "historicalQuoteEn": "Drunk, he struck spitting pots to the cadence of Cao Cao's poem 'The aged warhorse rests in the stable yet yearns to gallop ten thousand miles', shattering the porcelain rim to dust.",
    "auxiliaryStrengthsZh": [
      "气盖山河的军阀号召力与一线实战铁腕",
      "敢于撕破虚伪的礼教面纱向最高统治机构索取绝对利益"
    ],
    "auxiliaryStrengthsEn": [
      "Unchecked martial ferocity and battlefield swagger",
      "boldly tore down hypocritical court etiquette to extract maximum power"
    ],
    "auxiliaryWeaknessesZh": [
      "自绝于天下公序良俗",
      "大义名分有亏、肆意刀兵践踏皇权社稷，在关键时刻生理崩坏病死军中，招致挫骨扬灰之千古耻辱"
    ],
    "auxiliaryWeaknessesEn": [
      "Sacrificed legitimacy and moral high ground",
      "armed insurrection against the state left him isolated when fatal illness struck, suffering posthumous desecration"
    ]
  },
  {
    "id": "wen_qiao",
    "nameZh": "温峤",
    "nameEn": "Wen Qiao",
    "dynastyZh": "东晋",
    "dynastyEn": "Eastern Jin",
    "eraTag": "eastern_jin",
    "eraNameZh": "东晋门阀",
    "eraNameEn": "Eastern Jin Dynastic Era",
    "positionZh": "骠骑将军 · 平定王敦苏峻二乱的国之砥柱",
    "positionEn": "General of Agile Cavalry · Hero Quelling Rebellions",
    "personalityZh": "智勇兼备、忠直公允、深谋远略、临危受命、善解死结",
    "personalityEn": "Brilliant synthesis of intellect and valor, fair-minded, master crisis solver stepping into fire without fear",
    "deedsZh": "早年事刘琨抗胡，南渡后深得元帝信任；潜入王敦幕府假意阿附侦知叛乱虚实，逃归建康组织平叛；后与陶侃结盟平定苏峻之乱收复建康；燃犀照渚见水怪，还师途中拔齿中风暴卒。",
    "deedsEn": "Early defender of the north under Liu Kun. Infiltrated Wang Dun's rebel camp to gather intelligence, then escaped to lead imperial defenses. Allied with Tao Kan to crush Su Jun's rebellion and restore Jiankang. Famously lit a rhino horn torch to peer into deep river abyss, dying of stroke shortly after.",
    "archetype": "military",
    "fiveElements": {
      "dominant": "水",
      "secondary": "火"
    },
    "tenGodsAffinity": [
      "正官",
      "七杀",
      "偏印"
    ],
    "patternType": "杀印相生",
    "strengthAdviceZh": "顶级间谍情报与危机联盟整合大师！深入虎穴而不露声色，在朝廷危亡时能以一人之力捏合各方军阀组成平叛胜利大同盟。",
    "strengthAdviceEn": "Supreme master of undercover intelligence and coalition warcraft! Penetrates enemy headquarters unharmed and orchestrates rival warlords into an invincible alliance.",
    "weaknessAdviceZh": "功成名就后过度劳碌且好奇涉险（燃犀照水），在生理极度疲惫时拔齿引发感染，英年早逝令人痛惜。",
    "weaknessAdviceEn": "Overexerted body and indulged in reckless peril (lighting rhino horn over mystic waters); died abruptly from dental infection shock amidst triumph.",
    "historicalQuoteZh": "峤至牛渚矶，水深不可测，燃犀角而照之，须臾见水族奇形异状，其夕梦人怒曰：‘与卿幽明道殊，何苦相照！’峤齿疾发卒。",
    "historicalQuoteEn": "At Niuzhu deeps, Wen Qiao lit a magical rhino horn torch to illuminate the black abyss, revealing terrifying spectral sea creatures. That night an abyss spirit cursed him: 'We dwell in separate realms, why disturb our darkness!' He died days later.",
    "auxiliaryStrengthsZh": [
      "顶级间谍情报与危机联盟整合大师",
      "深入虎穴而不露声色，在朝廷危亡时能以一人之力捏合各方军阀组成平叛胜利大同盟"
    ],
    "auxiliaryStrengthsEn": [
      "Supreme master of undercover intelligence and coalition warcraft",
      "Penetrates enemy headquarters unharmed and orchestrates rival warlords into an invincible alliance"
    ],
    "auxiliaryWeaknessesZh": [
      "功成名就后过度劳碌且好奇涉险（燃犀照水）",
      "在生理极度疲惫时拔齿引发感染，英年早逝令人痛惜"
    ],
    "auxiliaryWeaknessesEn": [
      "Overexerted body and indulged in reckless peril (lighting rhino horn over mystic waters)",
      "died abruptly from dental infection shock amidst triumph"
    ]
  },
  {
    "id": "yu_liang",
    "nameZh": "庾亮",
    "nameEn": "Yu Liang",
    "dynastyZh": "东晋",
    "dynastyEn": "Eastern Jin",
    "eraTag": "eastern_jin",
    "eraNameZh": "东晋门阀",
    "eraNameEn": "Eastern Jin Dynastic Era",
    "positionZh": "中书令太尉 · 刚愎执政的外戚权臣",
    "positionEn": "Imperial Secretariat Director · Haughty Aristocratic Regent",
    "personalityZh": "雅量风度、容仪俊美、刚愎偏狭、决策失当引爆苏峻大乱",
    "personalityEn": "Refined, physically handsome, but rigid, dogmatically self-righteous, provoking devastating rebellions through arrogance",
    "deedsZh": "明穆皇后之兄，晋成帝母舅，辅政独揽大权；自视甚高，强行征召骄横军阀苏峻入朝，直接激成‘苏峻之乱’导致建康沦陷宗庙被焚；败奔温峤，合军平叛后内疚退镇武昌，北伐未成忧愤而亡。",
    "deedsEn": "Uncle to the child emperor. Regarded himself as incorruptible and omniscient. Ignored all warnings to forcibly summon warlord Su Jun, triggering a massive insurrection that razed Jiankang. Fled to Wen Qiao; after quelling the rebels, retreated in deep guilt and died of grief.",
    "archetype": "civil",
    "fiveElements": {
      "dominant": "金",
      "secondary": "木"
    },
    "tenGodsAffinity": [
      "正官",
      "伤官",
      "劫财"
    ],
    "patternType": "伤官见官",
    "strengthAdviceZh": "个人道德与魏晋士族审美无可挑剔，风姿特秀、谈吐清雅，具备强大的士族号召力。",
    "strengthAdviceEn": "Flawless personal charisma and aristocratic aesthetic; exceptionally articulate and cultured, embodying the ultimate gentry ideal.",
    "weaknessAdviceZh": "致命的书生自负与战略盲目！缺乏对草莽武装人性的敬畏，试图用单薄的一纸诏书强行降伏握有重兵的亡命军阀，酿成覆国之祸。",
    "weaknessAdviceEn": "Fatal ideological hubris! Arrogantly believed bureaucratic decrees could disarm heavily armed savage warlords, provoking cataclysms that burned the capital.",
    "historicalQuoteZh": "苏峻既反，亮奔温峤。峤见亮，拜之，亮亦自责拜谢。峤曰：‘君侯昔日何忽于苏峻？’亮抚膺叹曰：‘吾智虑短浅，几覆社稷！’",
    "historicalQuoteEn": "When Su Jun revolted, Yu Liang fled to Wen Qiao, weeping bitterly: 'My shallow arrogance nearly destroyed the ancestral altars!'",
    "auxiliaryStrengthsZh": [
      "个人道德与魏晋士族审美无可挑剔",
      "风姿特秀、谈吐清雅，具备强大的士族号召力"
    ],
    "auxiliaryStrengthsEn": [
      "Flawless personal charisma and aristocratic aesthetic",
      "exceptionally articulate and cultured, embodying the ultimate gentry ideal"
    ],
    "auxiliaryWeaknessesZh": [
      "致命的书生自负与战略盲目",
      "缺乏对草莽武装人性的敬畏，试图用单薄的一纸诏书强行降伏握有重兵的亡命军阀，酿成覆国之祸"
    ],
    "auxiliaryWeaknessesEn": [
      "Fatal ideological hubris",
      "Arrogantly believed bureaucratic decrees could disarm heavily armed savage warlords, provoking cataclysms that burned the capital"
    ]
  },
  {
    "id": "tao_kan",
    "nameZh": "陶侃",
    "nameEn": "Tao Kan",
    "dynastyZh": "东晋",
    "dynastyEn": "Eastern Jin",
    "eraTag": "eastern_jin",
    "eraNameZh": "东晋门阀",
    "eraNameEn": "Eastern Jin Dynastic Era",
    "positionZh": "太尉大都督 · 运甓励志的平民宗师",
    "positionEn": "Grand Marshal & Governor of Eight Provinces · The Brick-Carrying Stoic",
    "personalityZh": "勤勉俭约、恪尽职守、行事缜密、爱民如子、严防怠惰",
    "personalityEn": "Indefatigably diligent, frugal, scrupulous detail manager, protective of the masses, hating idle decadence",
    "deedsZh": "寒门出身，鄱阳早孤，母截发留宾；任荆江八州都督，威震长江半壁；在广州每日朝运百甓于斋外、暮运于斋内以砥砺筋骨；造船命收竹头木屑竹钉，后平叛造船全派大用场；平定苏峻之乱首功，东晋第一实干统帅。",
    "deedsEn": "Born of humble origins, raised by a widowed mother who sold her hair to host guests. Commanded eight key provinces. In Guangzhou, carried 100 bricks outside every morning and back inside every dusk to stave off luxury and decay. Hoarded sawdust and bamboo scraps, later using them to waterproof warships that saved the dynasty.",
    "archetype": "military",
    "fiveElements": {
      "dominant": "土",
      "secondary": "金"
    },
    "tenGodsAffinity": [
      "正官",
      "正财",
      "比肩"
    ],
    "patternType": "建禄格",
    "strengthAdviceZh": "白手起家与微观运营极致大师！绝不在浮华清谈中虚掷光阴，用日复一日枯燥却严苛的身体训练和底层细节管理构筑不可摧毁的护城河。",
    "strengthAdviceEn": "The ultimate titan of disciplined execution and micro-operational excellence! Rejects hollow vanity, forging an impenetrable moat through relentless daily habits.",
    "weaknessAdviceZh": "出身寒门始终受江东高门士族歧视排挤，即便立下再造社稷之不世奇功，依然无法真正进入建康核心政权枢纽执政。",
    "weaknessAdviceEn": "Perpetually marginalized by the hereditary oligarchy due to humble birth; denied supreme court leadership despite saving the realm.",
    "historicalQuoteZh": "侃在州无事，辄朝运百甓于斋外，暮运于斋内。人问其故，答曰：‘吾方致力中原，过尔优逸，恐不堪事，故自劳耳。’",
    "historicalQuoteEn": "When idle, Tao Kan moved 100 heavy bricks from his room at dawn and carried them back at dusk, explaining: 'I must recover the Central Plains; if I grow soft in comfort, I shall fail my country.'",
    "auxiliaryStrengthsZh": [
      "白手起家与微观运营极致大师",
      "绝不在浮华清谈中虚掷光阴，用日复一日枯燥却严苛的身体训练和底层细节管理构筑不可摧毁的护城河"
    ],
    "auxiliaryStrengthsEn": [
      "The ultimate titan of disciplined execution and micro-operational excellence",
      "Rejects hollow vanity, forging an impenetrable moat through relentless daily habits"
    ],
    "auxiliaryWeaknessesZh": [
      "出身寒门始终受江东高门士族歧视排挤",
      "即便立下再造社稷之不世奇功，依然无法真正进入建康核心政权枢纽执政"
    ],
    "auxiliaryWeaknessesEn": [
      "Perpetually marginalized by the hereditary oligarchy due to humble birth",
      "denied supreme court leadership despite saving the realm"
    ]
  },
  {
    "id": "huan_wen",
    "nameZh": "桓温",
    "nameEn": "Huan Wen",
    "dynastyZh": "东晋",
    "dynastyEn": "Eastern Jin",
    "eraTag": "eastern_jin",
    "eraNameZh": "东晋门阀",
    "eraNameEn": "Eastern Jin Dynastic Era",
    "positionZh": "大司马南郡公 · 威震华夏的三度北伐枭雄",
    "positionEn": "Grand Marshal & Duke of Nanjun · Colossal Warlord of Three Northern Expeditions",
    "personalityZh": "雄武跋扈、气吞天下、豪情万丈、功高震主、晚节留恨",
    "personalityEn": "Domineering military colossus, harboring world-conquering ambitions, yet paralyzed between imperial ambition and historical reputation",
    "deedsZh": "溯江入蜀灭成汉名震天下；三次率大军北伐中原，克洛阳、临灞水抚慰中原遗民；叹‘树犹如此，人何以堪’；晚年废立皇帝权倾朝野，叹曰‘既不能流芳百世，不足复遗臭万年邪！’，欲求九锡以称帝，终被谢安王坦之拖延至死。",
    "deedsEn": "Shattered Cheng Han to conquer Sichuan. Launched three thunderous northern expeditions, standing by the Ba River outside Chang'an. Wept touching ancient willow trees: 'If trees age thus, how can men bear time!' Deposed an emperor; muttered: 'If I cannot leave a fragrant name for ten thousand years, should I not leave a stink for ten thousand years?!' Foiled by Xie An's stalling tactics until death.",
    "archetype": "executive",
    "fiveElements": {
      "dominant": "金",
      "secondary": "水"
    },
    "tenGodsAffinity": [
      "七杀",
      "伤官",
      "偏财"
    ],
    "patternType": "伤官驾杀",
    "strengthAdviceZh": "极其宏大的魄力与气象！敢于主动出击逆转历史颓势，三度北伐直捣中原腹地，展现出超凡脱俗的军事动员与进攻才能。",
    "strengthAdviceEn": "Monumental ambition and operational drive! Daringly attacked north to reverse history's downward momentum, commanding awe-inspiring battlefield respect.",
    "weaknessAdviceZh": "内心在‘千秋清名’与‘篡位野心’之间剧烈拉扯！关键时刻既想当曹操又顾惜青史骂名，最终被王谢门阀以太极推手拖垮耗尽生命。",
    "weaknessAdviceEn": "Torn apart inwardly between vanity for moral reputation and lust for imperial usurping! Hesitating at the Rubicon allowed clever courtiers to stall his final coup until his grave.",
    "historicalQuoteZh": "桓温抚枕叹曰：‘既不能流芳百世，不足复遗臭万年邪！’其雄鸷狂狷，千载之下，犹令人扼腕。",
    "historicalQuoteEn": "Huan Wen slammed his pillow, roaring: 'If I cannot leave a glorious fragrance for ten thousand generations, is it not enough to leave a stink for ten thousand years?!'",
    "auxiliaryStrengthsZh": [
      "极其宏大的魄力与气象",
      "敢于主动出击逆转历史颓势，三度北伐直捣中原腹地，展现出超凡脱俗的军事动员与进攻才能"
    ],
    "auxiliaryStrengthsEn": [
      "Monumental ambition and operational drive",
      "Daringly attacked north to reverse history's downward momentum, commanding awe-inspiring battlefield respect"
    ],
    "auxiliaryWeaknessesZh": [
      "内心在‘千秋清名’与‘篡位野心’之间剧烈拉扯",
      "关键时刻既想当曹操又顾惜青史骂名，最终被王谢门阀以太极推手拖垮耗尽生命"
    ],
    "auxiliaryWeaknessesEn": [
      "Torn apart inwardly between vanity for moral reputation and lust for imperial usurping",
      "Hesitating at the Rubicon allowed clever courtiers to stall his final coup until his grave"
    ]
  },
  {
    "id": "xie_an",
    "nameZh": "谢安",
    "nameEn": "Xie An",
    "dynastyZh": "东晋",
    "dynastyEn": "Eastern Jin",
    "eraTag": "eastern_jin",
    "eraNameZh": "东晋门阀",
    "eraNameEn": "Eastern Jin Dynastic Era",
    "positionZh": "太保中书监 · 淝水之战帷幄从容的总指挥",
    "positionEn": "Grand Protector & Chancellor · Supreme Commander at Battle of Fei River",
    "personalityZh": "从容自若、镇定若山、清雅冲淡、大智若愚、举重若轻",
    "personalityEn": "Imperturbable serenity, monumental calm under existential crisis, elegant detachment, carrying the heavens lightly",
    "deedsZh": "少居会稽东山隐居，屡征不起，四十岁方‘东山再起’；出任宰辅面对前秦苻坚百万大军压境，从容派谢玄破敌，自己在后方对弈如常；捷报至，安看毕掷弈局，客问何如，答曰‘小儿辈大破贼’，神色自若；奠定陈郡谢氏百年顶级门阀基业。",
    "deedsEn": "Lived in hermitage at East Mountain until age forty ('East Mountain Rising'). As chancellor, faced Fu Jian's invading million-man horde with Zen serenity. Continued playing weiqi chess as the battle raged; reading the victory dispatch, he casually tossed it aside: 'The boys have crushed the barbarians', stepping over the door threshold and snapping his wooden clogs unnoticed.",
    "archetype": "civil",
    "fiveElements": {
      "dominant": "木",
      "secondary": "水"
    },
    "tenGodsAffinity": [
      "食神",
      "偏印",
      "正官"
    ],
    "patternType": "食神吐秀",
    "strengthAdviceZh": "古往今来从容风度与极端抗压心理素质的天花板！在灭顶之灾面前保持绝对的清醒与松弛感，以无为胜有为，举重若轻化解天崩地裂。",
    "strengthAdviceEn": "The absolute ceiling of grace under fire and psychological unshakeability in human history! Disarms cosmic terror through effortless detachment and supreme strategic composure.",
    "weaknessAdviceZh": "淝水大捷后功高震主，遭宗室司马道子猜忌排挤，只能主动避让离开权力中枢，未能在胜利后彻底整合北方收复中原。",
    "weaknessAdviceEn": "His dazzling prestige invited paranoid court jealousy from imperial princes, forcing him to yield supreme power rather than liberating the north.",
    "historicalQuoteZh": "淮上捷书至，安方对客围棋，看书便放床上，了无喜色。客问之，徐答曰：‘小儿辈大破贼。’既罢，还内，过户限，不觉屐齿之折。",
    "historicalQuoteEn": "The Fei River victory letter arrived while Xie An was playing chess. Setting it aside without expression, he murmured: 'The boys crushed the foes.' Entering his chamber afterward, he stepped so swiftly he snapped the teeth off his wooden sandals without realizing.",
    "auxiliaryStrengthsZh": [
      "古往今来从容风度与极端抗压心理素质的天花板",
      "在灭顶之灾面前保持绝对的清醒与松弛感，以无为胜有为，举重若轻化解天崩地裂"
    ],
    "auxiliaryStrengthsEn": [
      "The absolute ceiling of grace under fire and psychological unshakeability in human history",
      "Disarms cosmic terror through effortless detachment and supreme strategic composure"
    ],
    "auxiliaryWeaknessesZh": [
      "淝水大捷后功高震主",
      "遭宗室司马道子猜忌排挤，只能主动避让离开权力中枢，未能在胜利后彻底整合北方收复中原"
    ],
    "auxiliaryWeaknessesEn": [
      "His dazzling prestige invited paranoid court jealousy from imperial princes",
      "forcing him to yield supreme power rather than liberating the north"
    ]
  },
  {
    "id": "xie_xuan",
    "nameZh": "谢玄",
    "nameEn": "Xie Xuan",
    "dynastyZh": "东晋",
    "dynastyEn": "Eastern Jin",
    "eraTag": "eastern_jin",
    "eraNameZh": "东晋门阀",
    "eraNameEn": "Eastern Jin Dynastic Era",
    "positionZh": "建武将军 · 淝水大捷前锋总指挥与北府军缔造者",
    "positionEn": "General of Martial Construction · Creator of Beifu Army & Victor of Fei River",
    "personalityZh": "英姿飒爽、善治劲旅、算无遗策、临阵机变、芝兰玉树",
    "personalityEn": "Dazzling military charisma, architect of elite strike forces, master battlefield tactician, swift and lethal",
    "deedsZh": "谢安之侄，创筑著名的‘北府兵’（刘牢之、刘裕皆出其门）；淝水之战以八千北府精锐为前锋，设计诱使前秦苻坚大军退后，乘其乱水突击歼灭敌主力，斩苻融立下再造华夏之万世奇功；后乘胜北伐收复河南山东大片失地，积劳成疾三十六岁英年早逝。",
    "deedsEn": "Nephew of Xie An. Recruited and trained the invincible 'Beifu Army' (Northern Garrison Troops). At Fei River, commanded 8,000 elite troops, baited Fu Jian into an unstable retreat, and executed a lightning crossing to obliterate the colossal empire. Liberated Henan and Shandong before dying of exhaustion at age 36.",
    "archetype": "military",
    "fiveElements": {
      "dominant": "金",
      "secondary": "水"
    },
    "tenGodsAffinity": [
      "七杀",
      "伤官",
      "正印"
    ],
    "patternType": "杀印相生",
    "strengthAdviceZh": "特种精锐力量打造与突击战役指挥的天才！不拼消耗拼战术代差，用极其严苛的筛选打造小而极强的王牌特战部队，在关键转折点一击封喉。",
    "strengthAdviceEn": "Genius architect of elite special operations forces! Avoids wasteful attrition, training razor-sharp shock troops to deliver fatal precision decapitation strikes.",
    "weaknessAdviceZh": "战争烈度过大身体严重透支，未能兼顾长期战略休养，过早离世导致北伐成果迅速被后方政客丢失。",
    "weaknessAdviceEn": "Overworked his physical vessel to the brink in brutal campaigns; his premature demise at 36 allowed court factions to squander his hard-won northern gains.",
    "historicalQuoteZh": "玄募骁勇之士，得刘牢之等，号‘北府兵’，敌人畏之如神明。淝水之捷，玄以八千破百万，功冠古今！",
    "historicalQuoteEn": "Xie Xuan forged the Beifu Army; foes feared them like gods. At Fei River, leading 8,000 against a million, his martial achievement outshines all history.",
    "auxiliaryStrengthsZh": [
      "特种精锐力量打造与突击战役指挥的天才",
      "不拼消耗拼战术代差，用极其严苛的筛选打造小而极强的王牌特战部队，在关键转折点一击封喉"
    ],
    "auxiliaryStrengthsEn": [
      "Genius architect of elite special operations forces",
      "Avoids wasteful attrition, training razor-sharp shock troops to deliver fatal precision decapitation strikes"
    ],
    "auxiliaryWeaknessesZh": [
      "战争烈度过大身体严重透支",
      "未能兼顾长期战略休养，过早离世导致北伐成果迅速被后方政客丢失"
    ],
    "auxiliaryWeaknessesEn": [
      "Overworked his physical vessel to the brink in brutal campaigns",
      "his premature demise at 36 allowed court factions to squander his hard-won northern gains"
    ]
  },
  {
    "id": "xie_shi",
    "nameZh": "谢石",
    "nameEn": "Xie Shi",
    "dynastyZh": "东晋",
    "dynastyEn": "Eastern Jin",
    "eraTag": "eastern_jin",
    "eraNameZh": "东晋门阀",
    "eraNameEn": "Eastern Jin Dynastic Era",
    "positionZh": "征讨大都督 · 淝水名义统帅",
    "positionEn": "Commander-in-Chief of Fei River Campaign",
    "personalityZh": "持重恭谨、严守防线、顾全大局、甘当绿叶",
    "personalityEn": "Prudent, scrupulous, defensive anchor, selflessly enabling brilliant subordinates to shine",
    "deedsZh": "谢安之弟，受命为淝水之战征讨大都督；初见前秦军声势浩大心存忧惧，及得降将朱序情报，果断支持谢玄乘乱出击决胜；战后封南康郡公，谦退自持不争贪功。",
    "deedsEn": "Brother of Xie An. Appointed nominal Commander-in-Chief of the Fei River defense. Overcame initial dread upon receiving intelligence from prisoner Zhu Xu, decisively authorizing Xie Xuan's strike. Modestly credited frontline officers after triumph.",
    "archetype": "civil",
    "fiveElements": {
      "dominant": "土",
      "secondary": "金"
    },
    "tenGodsAffinity": [
      "正官",
      "正印",
      "正财"
    ],
    "patternType": "官印相生",
    "strengthAdviceZh": "大兵团名义主帅的顶级配角智慧！懂得在专业领域放手一线少壮派发挥，做好后勤保障与责任兜底，不抢功、不添乱。",
    "strengthAdviceEn": "Exemplary wise institutional director! Grants complete tactical freedom to brilliant frontline generals, shielding them from rear interference without stealing glory.",
    "weaknessAdviceZh": "个人军事决断魄力相对不足，在战役初始阶段面对巨大心理压力时极易产生悲观动摇心态。",
    "weaknessAdviceEn": "Lacked supreme battlefield audacity; prone to crippling defensive panic when initially confronted by overwhelming enemy scale.",
    "historicalQuoteZh": "石性清整，善处昆季之间。虽总大权，任玄以专，遂成大勋，君子叹其能容。",
    "historicalQuoteEn": "Book of Jin: Xie Shi was pure and orderly; commanding total power, he entrusted the battlefield entirely to Xuan, achieving immortal glory through leadership humility.",
    "auxiliaryStrengthsZh": [
      "大兵团名义主帅的顶级配角智慧",
      "懂得在专业领域放手一线少壮派发挥，做好后勤保障与责任兜底，不抢功、不添乱"
    ],
    "auxiliaryStrengthsEn": [
      "Exemplary wise institutional director",
      "Grants complete tactical freedom to brilliant frontline generals, shielding them from rear interference without stealing glory"
    ],
    "auxiliaryWeaknessesZh": [
      "个人军事决断魄力相对不足",
      "在战役初始阶段面对巨大心理压力时极易产生悲观动摇心态"
    ],
    "auxiliaryWeaknessesEn": [
      "Lacked supreme battlefield audacity",
      "prone to crippling defensive panic when initially confronted by overwhelming enemy scale"
    ]
  },
  {
    "id": "huan_chong",
    "nameZh": "桓冲",
    "nameEn": "Huan Chong",
    "dynastyZh": "东晋",
    "dynastyEn": "Eastern Jin",
    "eraTag": "eastern_jin",
    "eraNameZh": "东晋门阀",
    "eraNameEn": "Eastern Jin Dynastic Era",
    "positionZh": "车骑将军荆州刺史 · 顾全大局的良将宰辅",
    "positionEn": "General of Chariots & Cavalry · Selfless Patriarch",
    "personalityZh": "谦虚恭顺、深明大义、让权解怨、大度顾局、廉洁奉公",
    "personalityEn": "Humble, fiercely patriotic, voluntarily yielding supreme power to defuse family feuds and safeguard the realm",
    "deedsZh": "桓温幼弟，桓温死后手握重兵本可专政，桓冲深知兄长跋扈令天下侧目，毅然将扬州等朝廷枢纽大权全数让与谢安，自己退镇上游荆襄保卫长江防线；淝水战前曾欲派精兵入援建康，谢安谢绝，战后愧服谢安之神谋，数月后病逝。",
    "deedsEn": "Youngest brother of Huan Wen. Inherited his brother's titanic private army; yet knowing the realm feared a Huan dictatorship, he voluntarily surrendered central court power to Xie An, taking his troops upstream to guard the western gates. An irreplaceable pillar of selfless patriotism.",
    "archetype": "military",
    "fiveElements": {
      "dominant": "土",
      "secondary": "木"
    },
    "tenGodsAffinity": [
      "正官",
      "正印",
      "比肩"
    ],
    "patternType": "官印相生",
    "strengthAdviceZh": "超越家族私利、顾全国家民族大局的崇高典范！懂得在家族权势登峰造极遭全天下警惕时主动后退一步，化解灭族之灾。",
    "strengthAdviceEn": "Transcendent archetype of prioritizing systemic survival over selfish clan dynasty! Defused existential factional civil war by stepping down at the pinnacle of power.",
    "weaknessAdviceZh": "心理包袱沉重，对后方局势过度焦虑（曾因谢安轻敌对弈而忧愤成疾），未能摆脱过重的情感内耗负担。",
    "weaknessAdviceEn": "Borne down by immense emotional burden and chronic worry; excessive anxiety over national survival ate away his physical health.",
    "historicalQuoteZh": "冲性俭素，谦虚爱士。以兄温威权太盛，物情猜阻，遂悉以朝政让谢安，退镇江陵，天下服其公忠。",
    "historicalQuoteEn": "Book of Jin: Huan Chong lived simply and cherished men of honor. Seeing his brother's overbearing power had frightened the empire, he yielded supreme governance to Xie An, winning universal reverence.",
    "auxiliaryStrengthsZh": [
      "超越家族私利、顾全国家民族大局的崇高典范",
      "懂得在家族权势登峰造极遭全天下警惕时主动后退一步，化解灭族之灾"
    ],
    "auxiliaryStrengthsEn": [
      "Transcendent archetype of prioritizing systemic survival over selfish clan dynasty",
      "Defused existential factional civil war by stepping down at the pinnacle of power"
    ],
    "auxiliaryWeaknessesZh": [
      "心理包袱沉重",
      "对后方局势过度焦虑（曾因谢安轻敌对弈而忧愤成疾），未能摆脱过重的情感内耗负担"
    ],
    "auxiliaryWeaknessesEn": [
      "Borne down by immense emotional burden and chronic worry",
      "excessive anxiety over national survival ate away his physical health"
    ]
  },
  {
    "id": "wang_xizhi",
    "nameZh": "王羲之",
    "nameEn": "Wang Xizhi",
    "dynastyZh": "东晋",
    "dynastyEn": "Eastern Jin",
    "eraTag": "eastern_jin",
    "eraNameZh": "东晋门阀",
    "eraNameEn": "Eastern Jin Dynastic Era",
    "positionZh": "右军将军 · 兰亭千古书圣",
    "positionEn": "General of the Right Army · The Immortal Sage of Calligraphy",
    "personalityZh": "飘若游云、旷达不羁、超脱世俗、直击生命真谛、绝不屈意权贵",
    "personalityEn": "Ethereal as floating clouds, fiercely independent, transcendent artist seeing through cosmic impermanence, refusing to bow to court hypocrites",
    "deedsZh": "琅琊王氏嫡系，东床快婿；官至右军将军，因厌恶官场伪善与王述争隙，愤然辞官誓墓不仕；汇聚名士于兰亭修禊，挥毫写就千古第一行书《兰亭集序》，其字骨力遒劲如龙跳天门，开创中国书法审美之巅。",
    "deedsEn": "Noble heir of the Wang clan; famously reclined bare-chested on an eastern couch to win his bride. Governed as General of the Right Army, but despising bureaucratic pettiness, swore an oath at his parents' tomb never to hold office again. Penned the peerless 'Lanting Preface', setting the eternal crown of Chinese calligraphy.",
    "archetype": "specialist",
    "fiveElements": {
      "dominant": "水",
      "secondary": "木"
    },
    "tenGodsAffinity": [
      "伤官",
      "食神",
      "偏印"
    ],
    "patternType": "伤官吐秀",
    "strengthAdviceZh": "将专业技艺升华至宇宙哲学高度的千古宗师！具备绝对不肯同流合污的高贵灵魂，能从大自然的呼吸律动中提炼出穿越千年的绝美艺术生命力。",
    "strengthAdviceEn": "Elevated artistic craft into cosmic metaphysics! Possesses a fierce, incorruptible soul that distilled nature's eternal heartbeat into timeless aesthetic perfection.",
    "weaknessAdviceZh": "性格孤高傲岸，与世俗官场体制极难调和，遇到同僚龃龉时往往以决绝决裂退场，缺乏制度内的持久斡旋耐心。",
    "weaknessAdviceEn": "Aloof and allergic to bureaucratic politics; responds to friction with immediate total severance, lacking patience for institutional wrangling.",
    "historicalQuoteZh": "羲之幼讷于言，及长辩赡，以骨气称。工草隶，为古今之冠，论者称其笔势，以为‘飘若浮云，矫若惊龙’。",
    "historicalQuoteEn": "Book of Jin: Wang Xizhi's strokes were praised across millennia: 'Drifting like wandering clouds, soaring like a startled dragon!'",
    "auxiliaryStrengthsZh": [
      "将专业技艺升华至宇宙哲学高度的千古宗师",
      "具备绝对不肯同流合污的高贵灵魂，能从大自然的呼吸律动中提炼出穿越千年的绝美艺术生命力"
    ],
    "auxiliaryStrengthsEn": [
      "Elevated artistic craft into cosmic metaphysics",
      "Possesses a fierce, incorruptible soul that distilled nature's eternal heartbeat into timeless aesthetic perfection"
    ],
    "auxiliaryWeaknessesZh": [
      "性格孤高傲岸",
      "与世俗官场体制极难调和，遇到同僚龃龉时往往以决绝决裂退场，缺乏制度内的持久斡旋耐心"
    ],
    "auxiliaryWeaknessesEn": [
      "Aloof and allergic to bureaucratic politics",
      "responds to friction with immediate total severance, lacking patience for institutional wrangling"
    ]
  },
  {
    "id": "wang_xianzhi",
    "nameZh": "王献之",
    "nameEn": "Wang Xianzhi",
    "dynastyZh": "东晋",
    "dynastyEn": "Eastern Jin",
    "eraTag": "eastern_jin",
    "eraNameZh": "东晋门阀",
    "eraNameEn": "Eastern Jin Dynastic Era",
    "positionZh": "中书令 · 小圣草圣",
    "positionEn": "Director of Imperial Secretariat · The Junior Calligraphy Sage",
    "personalityZh": "清峻旷拔、豪迈傲岸、情深义重、革新书体自成一家",
    "personalityEn": "Lofty and sharp, proud, fiercely devoted to true love, visionary aesthetic innovator forging his own school",
    "deedsZh": "王羲之第七子，自幼苦练书法，创‘破体’与一笔书，与其父合称‘二王’；新亭失火从容下舆徐步；被逼与爱妻郗道茂离婚娶新安公主，至死深念前妻叹‘不觉有余事，唯忆与郗家离婚’，四十岁英年早逝。",
    "deedsEn": "Seventh son of Wang Xizhi. Created cursive 'Broken Style' and continuous single-stroke calligraphy, revered with his father as 'The Two Wangs'. Escaped a blazing palace at a tranquil stroll. Forced to divorce his beloved wife to marry an imperial princess, dying at 40 confessing: 'I have no regrets in life, save divorcing Chi Daomao.'",
    "archetype": "specialist",
    "fiveElements": {
      "dominant": "水",
      "secondary": "火"
    },
    "tenGodsAffinity": [
      "伤官",
      "偏印",
      "正财"
    ],
    "patternType": "伤官生财",
    "strengthAdviceZh": "不活在父辈光环下的顶级自主创新者！敢于在宗师父亲的巍峨大山前另辟蹊径自创法度，展现出惊人的审美破局魄力。",
    "strengthAdviceEn": "Daring innovator who refused to remain in his legendary father's shadow; boldly invented new brushwork disciplines to claim independent mastery.",
    "weaknessAdviceZh": "面对皇室强权的政治婚姻强拆无法抗拒，将一生巨大的痛苦内化为刻骨铭心的精神创伤与内耗，耗干了生命元气。",
    "weaknessAdviceEn": "Powerless against imperial dynastic intrusion into his personal love; internalized immense emotional sorrow that burned out his health prematurely.",
    "historicalQuoteZh": "献之疾笃，道家上章，应首过，问其有何罪。献之曰：‘不觉有余事，唯忆与郗家离婚。’言毕涕零。",
    "historicalQuoteEn": "On his deathbed, when Daoist priests asked what sins he repented of, Wang Xianzhi wept: 'I remember no sins, save my divorce from Lady Chi.'",
    "auxiliaryStrengthsZh": [
      "不活在父辈光环下的顶级自主创新者",
      "敢于在宗师父亲的巍峨大山前另辟蹊径自创法度，展现出惊人的审美破局魄力"
    ],
    "auxiliaryStrengthsEn": [
      "Daring innovator who refused to remain in his legendary father's shadow",
      "boldly invented new brushwork disciplines to claim independent mastery"
    ],
    "auxiliaryWeaknessesZh": [
      "面对皇室强权的政治婚姻强拆无法抗拒",
      "将一生巨大的痛苦内化为刻骨铭心的精神创伤与内耗，耗干了生命元气"
    ],
    "auxiliaryWeaknessesEn": [
      "Powerless against imperial dynastic intrusion into his personal love",
      "internalized immense emotional sorrow that burned out his health prematurely"
    ]
  },
  {
    "id": "gu_kaizhi",
    "nameZh": "顾恺之",
    "nameEn": "Gu Kaizhi",
    "dynastyZh": "东晋",
    "dynastyEn": "Eastern Jin",
    "eraTag": "eastern_jin",
    "eraNameZh": "东晋门阀",
    "eraNameEn": "Eastern Jin Dynastic Era",
    "positionZh": "散骑常侍 · 才绝画绝痴绝的一代画祖",
    "positionEn": "Sanqi Attendant · The Peerless Master of Chinese Painting",
    "personalityZh": "天真烂漫、痴情专注、传神写照、通透豁达",
    "personalityEn": "Pure-hearted, laser-focused in artistic trance, master of capturing the soul's essence, delightfully eccentric",
    "deedsZh": "东晋杰出画家，开创中国传统绘画理论‘迁想妙得’‘以形写神’；画人几年不点眼睛，曰‘传神写照，正在阿堵中’；作《洛神赋图》《女史箴图》为千古国宝；世人叹其有‘才绝、画绝、痴绝’三绝，游戏人间自得其乐。",
    "deedsEn": "The father of classical Chinese painting theory ('Spiritual resonance via form'). Often left eyes unpainted on portraits for years, explaining: 'The spirit dwells right inside these pupils!' Painted immortal treasures 'Nymph of the Luo River' and 'Admonitions of the Court Instructress'. Celebrated for Three Peerless Qualities: Genius, Artistry, and Divine Folly.",
    "archetype": "specialist",
    "fiveElements": {
      "dominant": "木",
      "secondary": "水"
    },
    "tenGodsAffinity": [
      "食神",
      "伤官",
      "正印"
    ],
    "patternType": "食神吐秀",
    "strengthAdviceZh": "将心智算力百分之百倾注于专业造极的纯粹大师！以看似‘痴愚’的天真保护内心最圣洁的创造力，屏蔽一切世俗恶斗与消耗。",
    "strengthAdviceEn": "A pure master who channelled 100% of his cognitive bandwidth into artistic creation! Uses playful 'divine madness' as armor to deflect corrupt court intrigues.",
    "weaknessAdviceZh": "在残酷现实权力博弈中缺乏起码的防御手腕，多依附于桓温、桓玄等强权麾下，常遭他人窃画欺哄而不知。",
    "weaknessAdviceEn": "Completely defenseless in real-world political power struggles; relied on warlord patrons and was notoriously easy to swindle by unscrupulous friends.",
    "historicalQuoteZh": "恺之每食甘蔗，恒自尾至本。人怪之，答曰：‘渐至佳境！’其才绝、画绝、痴绝，古今一绝。",
    "historicalQuoteEn": "Eating sugar cane, Gu Kaizhi always started from the leafy tip down to the sweet root. Asked why, he smiled: 'Entering step by step into sweet bliss!'",
    "auxiliaryStrengthsZh": [
      "将心智算力百分之百倾注于专业造极的纯粹大师",
      "以看似‘痴愚’的天真保护内心最圣洁的创造力，屏蔽一切世俗恶斗与消耗"
    ],
    "auxiliaryStrengthsEn": [
      "A pure master who channelled 100% of his cognitive bandwidth into artistic creation",
      "Uses playful 'divine madness' as armor to deflect corrupt court intrigues"
    ],
    "auxiliaryWeaknessesZh": [
      "在残酷现实权力博弈中缺乏起码的防御手腕",
      "多依附于桓温、桓玄等强权麾下，常遭他人窃画欺哄而不知"
    ],
    "auxiliaryWeaknessesEn": [
      "Completely defenseless in real-world political power struggles",
      "relied on warlord patrons and was notoriously easy to swindle by unscrupulous friends"
    ]
  },
  {
    "id": "tao_yuanming",
    "nameZh": "陶渊明 (陶潜)",
    "nameEn": "Tao Yuanming (Tao Qian)",
    "dynastyZh": "东晋 / 刘宋",
    "dynastyEn": "Eastern Jin / Liu Song",
    "eraTag": "eastern_jin",
    "eraNameZh": "东晋隐逸",
    "eraNameEn": "Eastern Jin Dynastic Era",
    "positionZh": "彭泽县令 · 古今隐逸诗人之宗",
    "positionEn": "Magistrate of Pengze · Patriarch of Pastoral Hermit Poets",
    "personalityZh": "高洁傲岸、不屈五斗米、复归自然、淡泊明志、通透达观",
    "personalityEn": "Fiercely proud, refusing to bow for five pecks of grain, returning to mother nature, serenely enlightened",
    "deedsZh": "陶侃曾孙，少有大志；数度出仕目睹官场黑暗，任彭泽令八十一天，因拒向乡里小儿督邮折腰，叹‘吾不能为五斗米折腰向乡里小儿！’挂冠而去；隐居田园二十年，著《桃花源记》《归去来兮辞》《五柳先生传》，开创田园诗派万世流芳。",
    "deedsEn": "Great-grandson of Tao Kan. Served in office briefly; disgusted by corrupt bureaucracy, resigned after 81 days declaring: 'I cannot bend my waist for five pecks of grain to a county inspector!' Retired to his farm for 20 years, authoring 'Peach Blossom Spring' and 'Return Home', founding the pastoral poetic tradition.",
    "archetype": "specialist",
    "fiveElements": {
      "dominant": "木",
      "secondary": "土"
    },
    "tenGodsAffinity": [
      "偏印",
      "食神",
      "比肩"
    ],
    "patternType": "食神吐秀",
    "strengthAdviceZh": "人类精神独立与主动做减法的最高巅峰！决不在精神消耗的垃圾组织中内耗生命，敢于断舍离回归土地与真我，在极简生活中构筑永恒的精神丰碑。",
    "strengthAdviceEn": "The zenith of spiritual independence and voluntary simplicity! Refuses to waste life in toxic organizations, radically cutting ties to find eternity in raw nature.",
    "weaknessAdviceZh": "物质生活极度匮乏，晚年屡遭火灾饥寒之苦，子女多不成器，终身未能完全解决生计维艰的现实困窘。",
    "weaknessAdviceEn": "Suffered crushing poverty, famine, and house fires in later years; spiritual transcendence came at the heavy price of daily economic misery.",
    "historicalQuoteZh": "潜叹曰：‘吾不能为五斗米折腰向乡里小人！’即日解印绶去职。赋《归去来兮》，恬然自乐。",
    "historicalQuoteEn": "Tao Qian sighed: 'I cannot bend my waist for five pecks of rice to a vulgar minion!' Resigned immediately, penning 'Return Home' to dwell in tranquil joy.",
    "auxiliaryStrengthsZh": [
      "人类精神独立与主动做减法的最高巅峰",
      "决不在精神消耗的垃圾组织中内耗生命，敢于断舍离回归土地与真我，在极简生活中构筑永恒的精神丰碑"
    ],
    "auxiliaryStrengthsEn": [
      "The zenith of spiritual independence and voluntary simplicity",
      "Refuses to waste life in toxic organizations, radically cutting ties to find eternity in raw nature"
    ],
    "auxiliaryWeaknessesZh": [
      "物质生活极度匮乏",
      "晚年屡遭火灾饥寒之苦，子女多不成器，终身未能完全解决生计维艰的现实困窘"
    ],
    "auxiliaryWeaknessesEn": [
      "Suffered crushing poverty, famine, and house fires in later years",
      "spiritual transcendence came at the heavy price of daily economic misery"
    ]
  },
  {
    "id": "sun_en",
    "nameZh": "孙恩",
    "nameEn": "Sun En",
    "dynastyZh": "东晋",
    "dynastyEn": "Eastern Jin",
    "eraTag": "eastern_jin",
    "eraNameZh": "东晋门阀",
    "eraNameEn": "Eastern Jin Dynastic Era",
    "positionZh": "五斗米道首领 · 覆灭东晋门阀基石的狂暴起义者",
    "positionEn": "Leader of Way of Five Pecks of Rice · Fierce Insurgent",
    "personalityZh": "狂热神化、蛊惑人心、狡黠机动、嗜血狂暴",
    "personalityEn": "Fanatical cult leader, mesmerizing orator, slippery guerrilla fighter, devastatingly bloodthirsty",
    "deedsZh": "五斗米道教主孙泰之侄，泰被诛后逃入海岛；乘东晋内乱率数千徒众登陆会稽，利用道教迷信裹挟数十万人破八郡，斩杀会稽内史王凝之（王羲之子）；数度兵临建康，后遭刘裕等北府军连续重创，跳海自沉自称水仙。",
    "deedsEn": "Nephew of executed Daoist sectarian Sun Tai. Fleeing to offshore islands, he raided the mainland, weaponizing religious fanaticism to recruit 100,000 peasants and slaughter eastern gentry (including Wang Xizhi's son). Shattered Eastern Jin's economic heartland before being crushed by Liu Yu, drowning himself in the ocean.",
    "archetype": "military",
    "fiveElements": {
      "dominant": "水",
      "secondary": "火"
    },
    "tenGodsAffinity": [
      "七杀",
      "伤官",
      "偏印"
    ],
    "patternType": "伤官见官",
    "strengthAdviceZh": "极其可怕的宗教群众动员与不对称游击作战手腕，善于在阶级固化极端严重的腐朽社会中点燃底层仇恨狂潮。",
    "strengthAdviceEn": "Terrifying ability to weaponize sectarian fanaticism and asymmetric sea-land guerrilla warfare to torch entrenched aristocratic hierarchies.",
    "weaknessAdviceZh": "除了破坏与屠杀没有任何建设性政纲！以神道邪术愚弄信众，缺乏真正的制度愿景与军事纵深，最终在职业正规军（刘裕）打击下自取灭亡。",
    "weaknessAdviceEn": "Zero constructive governing blueprint; relied solely on slaughter and apocalyptic hallucinations, evaporating the moment professional armies adapted.",
    "historicalQuoteZh": "恩入会稽，杀内史王凝之及其诸子。士民附之者数十万，转斗数年，江东为之荒废，恩计穷赴海死。",
    "historicalQuoteEn": "Book of Jin: Sun En took Kuaiji, slaughtering the magistrate Wang Ningzhi and his sons. Hundreds of thousands rebelled; coastal provinces lay desolate until En threw himself into the waves.",
    "auxiliaryStrengthsZh": [
      "极其可怕的宗教群众动员与不对称游击作战手腕",
      "善于在阶级固化极端严重的腐朽社会中点燃底层仇恨狂潮"
    ],
    "auxiliaryStrengthsEn": [
      "Terrifying ability to weaponize sectarian fanaticism and asymmetric sea-land guerrilla warfare to torch entrenched aristocratic hierarchies.",
      "Leverages core natural talents to pierce strategic bottlenecks."
    ],
    "auxiliaryWeaknessesZh": [
      "除了破坏与屠杀没有任何建设性政纲",
      "以神道邪术愚弄信众，缺乏真正的制度愿景与军事纵深，最终在职业正规军（刘裕）打击下自取灭亡"
    ],
    "auxiliaryWeaknessesEn": [
      "Zero constructive governing blueprint",
      "relied solely on slaughter and apocalyptic hallucinations, evaporating the moment professional armies adapted"
    ]
  },
  {
    "id": "huan_xuan",
    "nameZh": "桓玄",
    "nameEn": "Huan Xuan (Emperor of Chu)",
    "dynastyZh": "东晋 / 桓楚",
    "dynastyEn": "Eastern Jin / Huan Chu",
    "eraTag": "eastern_jin",
    "eraNameZh": "东晋门阀",
    "eraNameEn": "Eastern Jin Dynastic Era",
    "positionZh": "桓楚开国皇帝 · 颠覆晋室的草包枭雄",
    "positionEn": "Founding Emperor of Huan Chu · Vain Usurper",
    "personalityZh": "志大才疏、附庸风雅、奢靡猜忌、临战手足无措",
    "personalityEn": "Grandiose, vain connoisseur of art, decadent, paranoiac, completely paralyzed when confronted by iron-blooded battlefield veterans",
    "deedsZh": "桓温之子，袭爵南郡公；乘司马道子昏乱起兵顺流而下攻陷建康独揽大权，逼晋安帝禅位建立‘桓楚’；然而称帝后骄奢淫逸，酷好字画珍玩，闻刘裕起兵讨伐惊慌失措，出逃江陵遭义军斩杀于峥嵘洲。",
    "deedsEn": "Son of Huan Wen. Rose in revolt, sailed down the Yangtze to conquer Jiankang, and forced Emperor An to abdicate, founding the Huan Chu dynasty. Yet once crowned, he obsessively cataloged calligraphy and paintings while feasting; paralyzed with terror when Liu Yu revolted, fled and was beheaded.",
    "archetype": "executive",
    "fiveElements": {
      "dominant": "金",
      "secondary": "木"
    },
    "tenGodsAffinity": [
      "偏财",
      "正官",
      "伤官"
    ],
    "patternType": "财旺生官",
    "strengthAdviceZh": "深厚的家学渊源与极佳的艺术鉴赏品位，借父兄余威能迅速整合荆楚军事资源席卷京师。",
    "strengthAdviceEn": "Immense family lineage and refined connoisseurship; easily mobilized his father's veteran army to sweep into the imperial capital.",
    "weaknessAdviceZh": "彻底的温室巨婴与战术软蛋！能打顺风局却绝不能打逆风硬仗，一遇真正从尸山血海中爬出来的狠人（刘裕）立刻心理崩溃土崩瓦解。",
    "weaknessAdviceEn": "A fragile hothouse child! Soared in easy victories but collapsed into frantic hysteria upon facing hardened frontline warriors (Liu Yu).",
    "historicalQuoteZh": "玄既登基，床忽陷，群臣失色。殷仲文曰：‘将由圣德渊深，大地不能载！’玄大悦。及刘裕起兵，玄走死江陵，天下莫不笑之。",
    "historicalQuoteEn": "Upon Huan Xuan's throne coronation, the floor collapsed beneath him. A sycophant flattered: 'Your sage virtue is so immense the Earth cannot bear it!' Hearing Liu Yu approached, he wet himself and fled, slain in a reed boat.",
    "auxiliaryStrengthsZh": [
      "深厚的家学渊源与极佳的艺术鉴赏品位",
      "借父兄余威能迅速整合荆楚军事资源席卷京师"
    ],
    "auxiliaryStrengthsEn": [
      "Immense family lineage and refined connoisseurship",
      "easily mobilized his father's veteran army to sweep into the imperial capital"
    ],
    "auxiliaryWeaknessesZh": [
      "彻底的温室巨婴与战术软蛋",
      "能打顺风局却绝不能打逆风硬仗，一遇真正从尸山血海中爬出来的狠人（刘裕）立刻心理崩溃土崩瓦解"
    ],
    "auxiliaryWeaknessesEn": [
      "A fragile hothouse child",
      "Soared in easy victories but collapsed into frantic hysteria upon facing hardened frontline warriors (Liu Yu)"
    ]
  },
  {
    "id": "liu_laozhi",
    "nameZh": "刘牢之",
    "nameEn": "Liu Laozhi",
    "dynastyZh": "东晋 / 北府兵",
    "dynastyEn": "Eastern Jin / Beifu Army",
    "eraTag": "southern_dynasties",
    "eraNameZh": "南朝更迭",
    "eraNameEn": "Southern Dynasties Era",
    "positionZh": "北府兵统帅 · 屡叛身亡的悲剧武将",
    "positionEn": "Commander of Beifu Army · The Tragic Rebellious General",
    "personalityZh": "骁勇冠绝、反复无常、唯利是图、缺乏政治定力",
    "personalityEn": "Fiercely courageous frontline warrior, yet chronically treacherous, opportunistic, and politically myopic",
    "deedsZh": "谢玄麾下第一勇将，淝水之战领五千精兵斩梁成破前秦；后相继背叛王恭、司马元显投靠桓玄；桓玄得势后剥夺其军权，刘牢之惧祸又欲叛桓玄，众叛亲离无处容身，自缢于新洲。",
    "deedsEn": "Foremost assault general under Xie Xuan; crushed Former Qin at Fei River. Subsequently betrayed regent Wang Gong, betrayed Sima Yuanxian to join Huan Xuan, and when Huan Xuan stripped his command, plotted another betrayal. Abandoned by all officers, he hanged himself in despair.",
    "archetype": "military",
    "fiveElements": {
      "dominant": "金",
      "secondary": "木"
    },
    "tenGodsAffinity": [
      "七杀",
      "比肩",
      "劫财"
    ],
    "patternType": "羊刃格",
    "strengthAdviceZh": "无畏的战术突击猛将，在正规军对阵撕裂敌方防线时具备无与伦比的撕扯力与战斗力。",
    "strengthAdviceEn": "Devastating tactical assault battering ram; tears through enemy lines with ferocious battlefield fury.",
    "weaknessAdviceZh": "缺乏任何长远政治信义与人格底线！‘三姓家奴’式的反复背叛在乱世中是最致命的毒药，一旦失去信任资本，纵有万夫不当之勇也必遭所有人唾弃孤立而死。",
    "weaknessAdviceEn": "Chronic opportunistic treason burns through all social credit! A general who repeatedly betrays his patrons becomes universally radioactive, ensuring friendless suicide.",
    "historicalQuoteZh": "牢之既死，其子刘敬宣亡命后秦。将吏议曰：‘牢之反王恭、背元显、迎桓玄，天下谁能复容之！’自绝于世，悲夫。",
    "historicalQuoteEn": "Book of Jin: Liu Laozhi betrayed Wang Gong, betrayed Yuanxian, and invited Huan Xuan; who on earth could ever trust him again? His suicide was inevitable.",
    "auxiliaryStrengthsZh": [
      "无畏的战术突击猛将",
      "在正规军对阵撕裂敌方防线时具备无与伦比的撕扯力与战斗力"
    ],
    "auxiliaryStrengthsEn": [
      "Devastating tactical assault battering ram",
      "tears through enemy lines with ferocious battlefield fury"
    ],
    "auxiliaryWeaknessesZh": [
      "缺乏任何长远政治信义与人格底线",
      "‘三姓家奴’式的反复背叛在乱世中是最致命的毒药，一旦失去信任资本，纵有万夫不当之勇也必遭所有人唾弃孤立而死"
    ],
    "auxiliaryWeaknessesEn": [
      "Chronic opportunistic treason burns through all social credit",
      "A general who repeatedly betrays his patrons becomes universally radioactive, ensuring friendless suicide"
    ]
  },
  {
    "id": "liu_yu",
    "nameZh": "刘裕 (宋武帝)",
    "nameEn": "Liu Yu (Emperor Wu of Song)",
    "dynastyZh": "刘宋",
    "dynastyEn": "Liu Song",
    "eraTag": "southern_dynasties",
    "eraNameZh": "南朝刘宋",
    "eraNameEn": "Southern Dynasties Era",
    "positionZh": "刘宋开国皇帝 · 气吞万里如虎的南朝第一帝",
    "positionEn": "Founding Emperor of Liu Song · The Tiger-Hearted Titan of the South",
    "personalityZh": "雄武刚烈、杀伐决断、用兵如神、布衣天子、雷霆万钧",
    "personalityEn": "Iron-willed, lightning strategist, majestic military colossus rising from commoner poverty, relentless executioner of destiny",
    "deedsZh": "寒门卖履出身，投北府军数战荡平孙恩；京口起义兵斩桓玄再造晋室；两度北伐千里奔袭，车悬‘却月阵’以两千步兵破北魏数万铁骑，先后攻灭南燕俘慕容超、溯黄河灭后秦收复长安洛阳，收复江淮河南；代晋建宋，整顿吏治抑制豪强，终结东晋门阀专政，辛弃疾赞曰‘金戈铁马，气吞万里如虎’！",
    "deedsEn": "Born in poverty selling straw sandals; rose through the Beifu Army. Toppled usurper Huan Xuan to restore the throne. Launched thunderous northern expeditions, inventing the crescent-chariot 'Queyue Formation' where 2,000 infantry slaughtered tens of thousands of northern cavalry. Obliterated Southern Yan, annexed Later Qin, and reclaimed Chang'an and Luoyang. Founded the Liu Song dynasty, breaking aristocratic monopolies.",
    "archetype": "executive",
    "fiveElements": {
      "dominant": "金",
      "secondary": "火"
    },
    "tenGodsAffinity": [
      "七杀",
      "偏财",
      "比肩"
    ],
    "patternType": "羊刃驾杀",
    "strengthAdviceZh": "古往今来从底层杀伐崛起的第一铁血军事统帅！敢于在绝对劣势中以极致的战术创新（却月阵）完成以步克骑的战争奇迹，政治改革大刀阔斧雷厉风行。",
    "strengthAdviceEn": "The ultimate military sovereign rising from absolute poverty! Invented revolutionary tactics (Queyue formation) to crush massive nomadic cavalry with light infantry; governed with iron discipline.",
    "weaknessAdviceZh": "为巩固自家寒门子孙皇权，大开杀戒屠灭东晋司马宗室数十人，开启了南朝弑杀前朝废帝宗室的恶劣先例，以致其后代亦深陷血腥互戮魔咒。",
    "weaknessAdviceEn": "Slaughtered the dethroned Sima imperial clan to secure his dynasty, setting a horrific precedent of exterminating predecessor sovereigns that cursed his own descendants.",
    "historicalQuoteZh": "辛弃疾词赞：‘想当年，金戈铁马，气吞万里如虎！’沈约《宋书》叹其：‘威棱慴于殊俗，算略烛于未形。’",
    "historicalQuoteEn": "Xin Qiji immortalized him: 'Remembering those golden spears and iron armor, swallowing ten thousand miles like a hungry tiger!' Shen Yue hailed his lightning tactical foresight.",
    "auxiliaryStrengthsZh": [
      "古往今来从底层杀伐崛起的第一铁血军事统帅",
      "敢于在绝对劣势中以极致的战术创新（却月阵）完成以步克骑的战争奇迹，政治改革大刀阔斧雷厉风行"
    ],
    "auxiliaryStrengthsEn": [
      "The ultimate military sovereign rising from absolute poverty",
      "Invented revolutionary tactics (Queyue formation) to crush massive nomadic cavalry with light infantry"
    ],
    "auxiliaryWeaknessesZh": [
      "为巩固自家寒门子孙皇权",
      "大开杀戒屠灭东晋司马宗室数十人，开启了南朝弑杀前朝废帝宗室的恶劣先例，以致其后代亦深陷血腥互戮魔咒"
    ],
    "auxiliaryWeaknessesEn": [
      "Slaughtered the dethroned Sima imperial clan to secure his dynasty",
      "setting a horrific precedent of exterminating predecessor sovereigns that cursed his own descendants"
    ]
  },
  {
    "id": "liu_yilong",
    "nameZh": "刘义隆 (宋文帝)",
    "nameEn": "Liu Yilong (Emperor Wen of Song)",
    "dynastyZh": "刘宋",
    "dynastyEn": "Liu Song",
    "eraTag": "southern_dynasties",
    "eraNameZh": "南朝刘宋",
    "eraNameEn": "Southern Dynasties Era",
    "positionZh": "宋文帝 · 元嘉之治与仓皇北顾的悲喜君王",
    "positionEn": "Emperor Wen of Liu Song · Architect of Yuanjia Era & Tragic Hegemon",
    "personalityZh": "崇尚文治、恭俭谦抑、深谋疑忌、军略平庸却好大喜功",
    "personalityEn": "Patron of arts and scholarship, frugal, deeply suspicious, militarily amateurish yet prone to launching grand invasions",
    "deedsZh": "刘裕第三子，诛权相徐羡之等夺回大权；在位三十年休养生息、减赋轻徭、繁荣学术，开创南朝最辉煌的‘元嘉之治’；然三次发动北伐不听良将之言微操战场，遭北魏太武帝拓跋焘打至瓜步山江北震恐；晚年多疑诛杀功臣檀道济，终遭亲生长子刘劭弑杀于含章殿。",
    "deedsEn": "Third son of Liu Yu. Purged regents to reclaim throne, ruling for 30 years. Lowered taxes, promoted Confucian academies, establishing the golden 'Yuanjia Era'. Yet launched three poorly micro-managed northern expeditions, crushed by Northern Wei. Murdered his greatest general Tan Daoji, and was ultimately slain by his own crown prince.",
    "archetype": "executive",
    "fiveElements": {
      "dominant": "土",
      "secondary": "金"
    },
    "tenGodsAffinity": [
      "正官",
      "正印",
      "正财"
    ],
    "patternType": "正官格",
    "strengthAdviceZh": "极佳的守成文治与经济内政复苏大师！善于在战乱初定时期调养生息，推动文化艺术与学术制度繁荣达到顶峰。",
    "strengthAdviceEn": "Exceptional civilian recovery and peacetime domestic governance administrator; nurtured agricultural wealth and high culture to their zenith.",
    "weaknessAdviceZh": "典型的‘后方外行微操前线内行’！缺乏一线实战将略却盲目干预战役部署致全军覆没；自残手足冤杀长城柱石，最终自食其果惨遭逆子弑杀。",
    "weaknessAdviceEn": "The classic amateur sovereign micro-managing frontline masters! Overruling veteran commanders brought catastrophic defeats; executing his own defensive shield invited patricide.",
    "historicalQuoteZh": "辛弃疾词：‘元嘉草草，封狼居胥，赢得仓皇北顾！’四十三年，望中犹记，烽火扬州路。",
    "historicalQuoteEn": "Xin Qiji's immortal verse: 'Yuanjia's hurried dreams of ancient triumphs, yielded only panicked glances backward over the northern plain!'",
    "auxiliaryStrengthsZh": [
      "极佳的守成文治与经济内政复苏大师",
      "善于在战乱初定时期调养生息，推动文化艺术与学术制度繁荣达到顶峰"
    ],
    "auxiliaryStrengthsEn": [
      "Exceptional civilian recovery and peacetime domestic governance administrator",
      "nurtured agricultural wealth and high culture to their zenith"
    ],
    "auxiliaryWeaknessesZh": [
      "典型的‘后方外行微操前线内行’",
      "缺乏一线实战将略却盲目干预战役部署致全军覆没"
    ],
    "auxiliaryWeaknessesEn": [
      "The classic amateur sovereign micro-managing frontline masters",
      "Overruling veteran commanders brought catastrophic defeats"
    ]
  },
  {
    "id": "tan_daoji",
    "nameZh": "檀道济",
    "nameEn": "Tan Daoji",
    "dynastyZh": "刘宋",
    "dynastyEn": "Liu Song",
    "eraTag": "southern_dynasties",
    "eraNameZh": "南朝刘宋",
    "eraNameEn": "Southern Dynasties Era",
    "positionZh": "司空江州刺史 · 自毁万里长城的绝世名将",
    "positionEn": "Grand Chancellor & General · The Self-Destroyed Great Wall",
    "personalityZh": "沉毅善断、谋略通神、威振敌国、孤忠见嫉、唱筹量沙",
    "personalityEn": "Resolute, tactically omniscient, terrifying to foreign empires, innocent loyalist destroyed by envious courtiers",
    "deedsZh": "刘宋北府开国第一名将，随刘裕破姚秦攻灭后秦；北伐被围粮尽，道济夜唱筹量沙以糠覆之，佯示粮足，白服巡营吓退北魏数十万大军全师而还；宋文帝病重，权臣刘义康等深忌其威名，召入建康收捕下狱赐死；道济临死掷帻于地怒吼‘乃复坏汝万里长城！’魏人闻之欢呼雀跃。",
    "deedsEn": "Foremost battlefield general of Liu Song. When encircled and starving in the north, he had soldiers measure heaps of sand at night with grain tossed on top, casually strolling in white robes; awed by his calm, Northern Wei withdrew. When Emperor Wen fell ill, terrified ministers poisoned him; Daoji hurled his hat down, roaring: 'You destroy your own Great Wall!' Northern Wei celebrated wildly.",
    "archetype": "military",
    "fiveElements": {
      "dominant": "金",
      "secondary": "水"
    },
    "tenGodsAffinity": [
      "七杀",
      "正官",
      "偏印"
    ],
    "patternType": "杀印相生",
    "strengthAdviceZh": "极其深厚的战场心理战与极端危机脱困智慧（唱筹量沙）！在断粮绝境中凭极高定力骗过庞大对手，指挥艺术出神入化。",
    "strengthAdviceEn": "Supreme master of psychological warfare and impossible crisis extraction (measuring sand as grain)! Outfoxed an overwhelming enemy army through nerves of steel.",
    "weaknessAdviceZh": "功高震主而缺乏政治防卫嗅觉！身处多疑虚弱的宫廷权力边缘，对朝廷借探病诱召入京的致命杀局毫无防范与武装抗衡准备，束手就擒成千古冤魂。",
    "weaknessAdviceEn": "Immense battlefield prestige without palace defense armor; walk blindly into imperial trap convocations without personal security detachments, ensuring tragic judicial murder.",
    "historicalQuoteZh": "道济见收，愤怒气盛，目光如炬，拔帻投地曰：‘乃坏汝万里长城！’魏人闻之皆庆曰：‘道济已死，吴子不足复惮矣！’",
    "historicalQuoteEn": "Arrested, Daoji's eyes blazed like fire; throwing his cap to the stones, he roared: 'You have destroyed your own Great Wall!' Northern Wei courtiers cheered: 'Daoji is dead, the southern state is toothless!'",
    "auxiliaryStrengthsZh": [
      "极其深厚的战场心理战与极端危机脱困智慧（唱筹量沙）",
      "在断粮绝境中凭极高定力骗过庞大对手，指挥艺术出神入化"
    ],
    "auxiliaryStrengthsEn": [
      "Supreme master of psychological warfare and impossible crisis extraction (measuring sand as grain)",
      "Outfoxed an overwhelming enemy army through nerves of steel"
    ],
    "auxiliaryWeaknessesZh": [
      "功高震主而缺乏政治防卫嗅觉",
      "身处多疑虚弱的宫廷权力边缘，对朝廷借探病诱召入京的致命杀局毫无防范与武装抗衡准备，束手就擒成千古冤魂"
    ],
    "auxiliaryWeaknessesEn": [
      "Immense battlefield prestige without palace defense armor",
      "walk blindly into imperial trap convocations without personal security detachments, ensuring tragic judicial murder"
    ]
  },
  {
    "id": "fan_ye",
    "nameZh": "范晔",
    "nameEn": "Fan Ye",
    "dynastyZh": "刘宋",
    "dynastyEn": "Liu Song",
    "eraTag": "southern_dynasties",
    "eraNameZh": "南朝刘宋",
    "eraNameEn": "Southern Dynasties Era",
    "positionZh": "左卫将军 · 《后汉书》千古史家",
    "positionEn": "General of the Left Guard · Author of Book of Later Han",
    "personalityZh": "才华绝代、狂傲任诞、心怀异志、涉入谋反惨遭族诛",
    "personalityEn": "Dazzling literary intellect, arrogant, eccentric, harboring secret political ambitions, crushed in conspiracy",
    "deedsZh": "名门顺阳范氏，长于史学辞赋，在宣城太守任上著《后汉书》九十卷成一代史学高峰；然自矜才高，在彭城王刘义康失势时被孔熙先拉拢卷入弑君密谋，事发被捕处斩，临刑赋诗谈笑，三族皆夷。",
    "deedsEn": "Noble scion who authored the monumental 90-volume 'Book of Later Han'. Yet blinding intellectual hubris led him to join a half-baked conspiracy to assassinate Emperor Wen and crown Prince Liu Yikang. Betrayed and arrested, he walked to the execution block composing poetry while his clan was exterminated.",
    "archetype": "specialist",
    "fiveElements": {
      "dominant": "水",
      "secondary": "木"
    },
    "tenGodsAffinity": [
      "伤官",
      "偏印",
      "劫财"
    ],
    "patternType": "伤官生财",
    "strengthAdviceZh": "极其耀眼的史学构架力与文字审美穿透力，能将几百年的庞杂王朝历史编纂为字字珠玑的万古经典。",
    "strengthAdviceEn": "Towering historiographical vision and prose elegance; organized centuries of imperial history into an immortal canonical gem.",
    "weaknessAdviceZh": "狂妄自大且政治智商低下！搞阴谋政变幼稚如儿戏，轻信投机狂徒的拉拢，最终让千古才华陪葬于拙劣的政治野心之中。",
    "weaknessAdviceEn": "Catastrophic political naivety mixed with intellectual arrogance! Entangled in childish palace coup plots that incinerated his lineage.",
    "historicalQuoteZh": "晔临刑，顾谓狱吏曰：‘天下可无我，不可无《后汉书》！’其狂简自负若此。",
    "historicalQuoteEn": "At the execution grounds, Fan Ye scoffed to the warden: 'The world can live without me, but it cannot live without my Book of Later Han!'",
    "auxiliaryStrengthsZh": [
      "极其耀眼的史学构架力与文字审美穿透力",
      "能将几百年的庞杂王朝历史编纂为字字珠玑的万古经典"
    ],
    "auxiliaryStrengthsEn": [
      "Towering historiographical vision and prose elegance",
      "organized centuries of imperial history into an immortal canonical gem"
    ],
    "auxiliaryWeaknessesZh": [
      "狂妄自大且政治智商低下",
      "搞阴谋政变幼稚如儿戏，轻信投机狂徒的拉拢，最终让千古才华陪葬于拙劣的政治野心之中"
    ],
    "auxiliaryWeaknessesEn": [
      "Catastrophic political naivety mixed with intellectual arrogance",
      "Entangled in childish palace coup plots that incinerated his lineage"
    ]
  },
  {
    "id": "xiao_daocheng",
    "nameZh": "萧道成 (齐高帝)",
    "nameEn": "Xiao Daocheng (Emperor Gao of Qi)",
    "dynastyZh": "南齐",
    "dynastyEn": "Southern Qi",
    "eraTag": "southern_dynasties",
    "eraNameZh": "南朝南齐",
    "eraNameEn": "Southern Dynasties Era",
    "positionZh": "南齐开国皇帝 · 宽仁清俭的道家天子",
    "positionEn": "Founding Emperor of Southern Qi · Austere Taoist Sovereign",
    "personalityZh": "深沉宽厚、节俭自律、善抚士卒、从善如流、崇尚道法自然",
    "personalityEn": "Deep, benevolent, disciplined in Spartan frugality, beloved by troops, receptive to wise counsel, steeped in Daoist moderation",
    "deedsZh": "兰陵萧氏，汉相萧何之后；任宋右领军将军，刘宋后废帝狂暴欲以其腹为箭靶，萧道成奋起政变诛暴君；后代宋建齐建立南齐；在位期间提倡节俭，反思刘宋奢靡，留名言‘使我治天下十年，当使黄金与土同价’，保境息民。",
    "deedsEn": "Descendant of Han chancellor Xiao He. Survived near-execution when tyrannical Emperor Houfei tried to shoot arrows at his belly. Seized power, toppled Liu Song, and established Southern Qi. Championed radical court austerity, famously proclaiming: 'If I rule for ten years, gold shall be as cheap as dirt.'",
    "archetype": "executive",
    "fiveElements": {
      "dominant": "木",
      "secondary": "土"
    },
    "tenGodsAffinity": [
      "正印",
      "正官",
      "食神"
    ],
    "patternType": "官印相生",
    "strengthAdviceZh": "极其深沉的自我克制与逆境绝杀智慧！面对疯癫暴君的生死威胁能隐忍不发一招毙命，登基后以极高的道德自律树立政权公信力。",
    "strengthAdviceEn": "Supreme self-control and predatory reflex under lethal threat; eliminated a mad tyrant in one strike and established moral credibility via rigorous personal frugality.",
    "weaknessAdviceZh": "宗室分封与诸王权力结构未能有效锁死，给南齐二代之后残酷暴烈的宗室骨肉自相残杀埋下了祸根。",
    "weaknessAdviceEn": "Failed to institutionalize checks on royal princes; his succession setup devolved into horrific fratricidal butchery in the second generation.",
    "historicalQuoteZh": "道成常言：‘使我治天下十年，当使黄金与土同价！’自奉俭朴，后宫不设雕饰。",
    "historicalQuoteEn": "Xiao Daocheng declared: 'Give me ten years to govern, and I will make gold as common as dirt!' Kept his palace free of gold and luxuries.",
    "auxiliaryStrengthsZh": [
      "极其深沉的自我克制与逆境绝杀智慧",
      "面对疯癫暴君的生死威胁能隐忍不发一招毙命，登基后以极高的道德自律树立政权公信力"
    ],
    "auxiliaryStrengthsEn": [
      "Supreme self-control and predatory reflex under lethal threat",
      "eliminated a mad tyrant in one strike and established moral credibility via rigorous personal frugality"
    ],
    "auxiliaryWeaknessesZh": [
      "宗室分封与诸王权力结构未能有效锁死",
      "给南齐二代之后残酷暴烈的宗室骨肉自相残杀埋下了祸根"
    ],
    "auxiliaryWeaknessesEn": [
      "Failed to institutionalize checks on royal princes",
      "his succession setup devolved into horrific fratricidal butchery in the second generation"
    ]
  },
  {
    "id": "xiao_ze",
    "nameZh": "萧赜 (齐武帝)",
    "nameEn": "Xiao Ze (Emperor Wu of Qi)",
    "dynastyZh": "南齐",
    "dynastyEn": "Southern Qi",
    "eraTag": "southern_dynasties",
    "eraNameZh": "南朝南齐",
    "eraNameEn": "Southern Dynasties Era",
    "positionZh": "南齐武帝 · 永明之治的盛世明君",
    "positionEn": "Emperor Wu of Southern Qi · Architect of Yongming Peace",
    "personalityZh": "精明干练、刚毅严察、崇尚和平、整顿户籍、爱惜民力",
    "personalityEn": "Sharp, pragmatic, vigilant administrator, preferring diplomatic peace over reckless war, reforming censuses",
    "deedsZh": "齐高帝长子，随父征战南征北战；即位后停止与北魏高烈度战争互通使节，倡导边境贸易；改革户籍推行‘黄籍检籍’强化国家税基；开创南齐最为繁荣的‘永明之治’；临终遗诏丧事从简，不设金银珠玉。",
    "deedsEn": "Eldest son of Xiao Daocheng. Halted draining border wars against Northern Wei, opening lucrative frontier trade missions. Audited tax registries and built civic prosperity, establishing the flourishing 'Yongming Era'. Decreed zero gold or pearls in his tomb.",
    "archetype": "executive",
    "fiveElements": {
      "dominant": "金",
      "secondary": "土"
    },
    "tenGodsAffinity": [
      "正官",
      "偏财",
      "比肩"
    ],
    "patternType": "建禄用官",
    "strengthAdviceZh": "务实的战略减速与和平红利兑现者！不被虚妄的北伐口号绑架，专注国内民生经济恢复与制度修缮。",
    "strengthAdviceEn": "Pragmatic builder of peace dividends; refused to be hostage to romantic warmongering, channeling resources into domestic commerce and fiscal infrastructure.",
    "weaknessAdviceZh": "‘检籍’政策推行过急过严引发富阳唐寓之暴动；晚年托孤于残暴外戚萧鸾，致使其死后萧鸾大肆屠戮齐高帝齐武帝子孙近百人，南齐皇统断绝。",
    "weaknessAdviceEn": "Overly aggressive tax audits sparked peasant rebellions. Critically misjudged his cousin Xiao Luan, who upon his death butchered over 100 princes of his lineage.",
    "historicalQuoteZh": "武帝性聪断，躬亲庶政。诏曰：‘古者敛手足形，还葬于地，何须多品！棺内但安被褥，勿用珍宝。’",
    "historicalQuoteEn": "Book of Southern Qi: Emperor Wu was acutely intelligent. Decreed: 'The ancients buried naked flesh; why hoard treasures? Lay only plain quilts in my casket.'",
    "auxiliaryStrengthsZh": [
      "务实的战略减速与和平红利兑现者",
      "不被虚妄的北伐口号绑架，专注国内民生经济恢复与制度修缮"
    ],
    "auxiliaryStrengthsEn": [
      "Pragmatic builder of peace dividends",
      "refused to be hostage to romantic warmongering, channeling resources into domestic commerce and fiscal infrastructure"
    ],
    "auxiliaryWeaknessesZh": [
      "‘检籍’政策推行过急过严引发富阳唐寓之暴动",
      "晚年托孤于残暴外戚萧鸾，致使其死后萧鸾大肆屠戮齐高帝齐武帝子孙近百人，南齐皇统断绝"
    ],
    "auxiliaryWeaknessesEn": [
      "Overly aggressive tax audits sparked peasant rebellions. Critically misjudged his cousin Xiao Luan",
      "who upon his death butchered over 100 princes of his lineage"
    ]
  },
  {
    "id": "xiao_yan",
    "nameZh": "萧衍 (梁武帝)",
    "nameEn": "Xiao Yan (Emperor Wu of Liang)",
    "dynastyZh": "南梁",
    "dynastyEn": "Southern Liang",
    "eraTag": "southern_dynasties",
    "eraNameZh": "南朝南梁",
    "eraNameEn": "Southern Dynasties Era",
    "positionZh": "南梁开国皇帝 · 在位四十八年的菩萨皇帝与侯景之乱悲剧",
    "positionEn": "Founding Emperor of Southern Liang · The Bodhisattva Sovereign",
    "personalityZh": "博学多才、文武兼资、晚年佞佛、虚伪沽名、纵容宗室致江南浩劫",
    "personalityEn": "Erudite scholar, martial conqueror early on, but sank into dogmatic Buddhist fanaticism, hollow vanity, and fatal blind indulgence",
    "deedsZh": "竟陵八友之一，起兵襄阳灭残暴南齐建立南梁；在位四十八年，早年励精图治兴修水利创通泰盛世；晚年极度崇佛四度舍身同泰寺逼朝廷斥亿万赎回；虚伪沽名优容宗室子弟作恶；八十三岁昏庸接纳东魏降将侯景，引爆‘侯景之乱’台城被围，江南富庶之地化为人间地狱，梁武帝在净居殿饥渴交加叹‘自我得之，自我失之，亦复何恨！’饿死台城。",
    "deedsEn": "One of the 'Eight Friends of Jingling'. Overthrew tyrannical Qi to found Southern Liang, reigning 48 years. Early on a brilliant patron of arts and canals. Later fell into extreme religious fanaticism, four times offering himself as a monastery slave, forcing courtiers to ransom him with vast fortunes. At age 83, sheltered traitor Hou Jing, unleashing the catastrophic Hou Jing Rebellion; trapped in Taicheng without food or water, he sighed 'Won by me, lost by me, why regret!' before starving to death.",
    "archetype": "executive",
    "fiveElements": {
      "dominant": "木",
      "secondary": "火"
    },
    "tenGodsAffinity": [
      "正印",
      "偏印",
      "伤官"
    ],
    "patternType": "伤官用印",
    "strengthAdviceZh": "极高的个人文化修养、经史哲学造诣与开国创业魄力，在长达半个世纪的统治前期打造了南朝文化艺术的最高黄金峰峦。",
    "strengthAdviceEn": "Astounding polymath intelligence and cultural vision; created the zenith of southern literary and architectural civilization over half a century.",
    "weaknessAdviceZh": "中国历史上最惨烈的帝王晚年反面教材！虚伪的仁慈是最大的残忍，以宗教出家逃避现实政务，姑息纵容狼子野心的叛将（侯景），最终一手葬送整个江南三百年积聚的文明繁华，饿死内殿沦为千古笑柄。",
    "weaknessAdviceEn": "The most catastrophic cautionary tragedy in imperial history! Hypocritical piety turned into monstrous negligence; coddling traitor Hou Jing brought apocalyptic ruin to southern China, starving to death on a reed mat.",
    "historicalQuoteZh": "帝饥困，求蜜不得，叹曰：‘自我得之，自我失之，亦复何恨！’遂殂于净居殿，时年八十六。",
    "historicalQuoteEn": "Starving in the besieged palace, Xiao Yan begged for honey and was refused. Sighing: 'Won by my hand, lost by my hand, what is there to resent!' he breathed his last at age 86.",
    "auxiliaryStrengthsZh": [
      "极高的个人文化修养、经史哲学造诣与开国创业魄力",
      "在长达半个世纪的统治前期打造了南朝文化艺术的最高黄金峰峦"
    ],
    "auxiliaryStrengthsEn": [
      "Astounding polymath intelligence and cultural vision",
      "created the zenith of southern literary and architectural civilization over half a century"
    ],
    "auxiliaryWeaknessesZh": [
      "中国历史上最惨烈的帝王晚年反面教材",
      "虚伪的仁慈是最大的残忍，以宗教出家逃避现实政务，姑息纵容狼子野心的叛将（侯景），最终一手葬送整个江南三百年积聚的文明繁华，饿死内殿沦为千古笑柄"
    ],
    "auxiliaryWeaknessesEn": [
      "The most catastrophic cautionary tragedy in imperial history",
      "Hypocritical piety turned into monstrous negligence"
    ]
  },
  {
    "id": "wei_rui",
    "nameZh": "韦睿",
    "nameEn": "Wei Rui",
    "dynastyZh": "南梁",
    "dynastyEn": "Southern Liang",
    "eraTag": "southern_dynasties",
    "eraNameZh": "南朝南梁",
    "eraNameEn": "Southern Dynasties Era",
    "positionZh": "通直散骑常侍 · 钟离之战威震北朝的韦虎",
    "positionEn": "General of Valiant Cavalry · The Tiger Wei of Zhongli",
    "personalityZh": "儒雅慈和、体弱乘舆、料敌如神、仁德爱兵、治军严肃",
    "personalityEn": "Gentle Confucian scholar-general, physically frail in a wooden sedan, tactically brilliant, deeply beloved by his soldiers",
    "deedsZh": "南梁著名儒将，体弱不能骑马，临战常着葛巾素服乘板舆督战，执竹如意指挥三军；钟离之战率大军决淮水倒灌，以火攻大破北魏中山王元英二十万精锐，斩俘十余万人，魏军闻风丧胆称其为‘韦虎’；功成名就后谦逊自处，所得赏赐尽分宗族部属，千古儒将典范。",
    "deedsEn": "Confucian scholar-general. So physically frail he could not ride a horse, directing battles from a bamboo sedan chair waving a bamboo pointer. At the Battle of Zhongli, breached the Huai River dykes and launched fire ships, annihilating a 200,000-man Northern Wei army; terrified northern troops called him 'Tiger Wei'. Remained endlessly humble, distributing all riches to his soldiers.",
    "archetype": "military",
    "fiveElements": {
      "dominant": "水",
      "secondary": "木"
    },
    "tenGodsAffinity": [
      "正印",
      "正官",
      "食神"
    ],
    "patternType": "官印相生",
    "strengthAdviceZh": "真正的儒将风范与以智破力的水战宗师！不以肌肉勇力称雄，凭对水文地理的透彻掌控与心理压制，在谈笑风生间樯橹灰飞烟灭。",
    "strengthAdviceEn": "The quintessential scholar-commander! Overcomes raw physical muscle through hydrological engineering and psychological warfare, obliterating mighty hosts with serene grace.",
    "weaknessAdviceZh": "身体机能天然羸弱，晚年在梁武帝佞佛腐化的政权大染缸中只能洁身自好退缩自保，无力扭转中枢决策恶化。",
    "weaknessAdviceEn": "Frail physical constitution; powerless to cure the creeping decay of Xiao Yan's court in his retirement, choosing quiet retreat.",
    "historicalQuoteZh": "睿虽体羸，临阵神采焕发。魏军望见板舆，皆惊呼曰：‘此韦虎也！速避之！’",
    "historicalQuoteEn": "Book of Liang: Though physically frail, Wei Rui's spirit blazed upon the battlefield. Northern Wei troops saw his wooden sedan and screamed: 'It is Tiger Wei! Run for your lives!'",
    "auxiliaryStrengthsZh": [
      "真正的儒将风范与以智破力的水战宗师",
      "不以肌肉勇力称雄，凭对水文地理的透彻掌控与心理压制，在谈笑风生间樯橹灰飞烟灭"
    ],
    "auxiliaryStrengthsEn": [
      "The quintessential scholar-commander",
      "Overcomes raw physical muscle through hydrological engineering and psychological warfare, obliterating mighty hosts with serene grace"
    ],
    "auxiliaryWeaknessesZh": [
      "身体机能天然羸弱",
      "晚年在梁武帝佞佛腐化的政权大染缸中只能洁身自好退缩自保，无力扭转中枢决策恶化"
    ],
    "auxiliaryWeaknessesEn": [
      "Frail physical constitution",
      "powerless to cure the creeping decay of Xiao Yan's court in his retirement, choosing quiet retreat"
    ]
  },
  {
    "id": "tao_hongjing",
    "nameZh": "陶弘景",
    "nameEn": "Tao Hongjing",
    "dynastyZh": "南齐 / 南梁",
    "dynastyEn": "Southern Qi / Southern Liang",
    "eraTag": "southern_dynasties",
    "eraNameZh": "南朝道学",
    "eraNameEn": "Southern Dynasties Era",
    "positionZh": "华阳隐居 · 坐镇茅山的一代山中宰相",
    "positionEn": "Hermit of Huayang · The Prime Minister in the Mountains",
    "personalityZh": "仙风道骨、博通天文地理医药神仙之术、清心寡欲、神机妙算",
    "personalityEn": "Transcendent sage, polymath in astronomy, pharmacology, and Daoist alchemy, detached, revered counselor",
    "deedsZh": "齐梁高士，茅山宗开山祖师；辞官隐居茅山华阳洞，梁武帝深器重其才德，国家每有吉凶征讨军国大事，无不驰驿前往咨询，世号‘山中宰相’；整理《本草经集注》奠定中国药物分类学基础，著《真诰》，精通冶炼铸剑与历算，万世敬仰之全才大师。",
    "deedsEn": "Patriarch of the Maoshan Daoist School. Retired to the mountains; Emperor Wu of Liang venerated his wisdom so deeply that whenever military or state crises erupted, messengers raced to his mountain cave for counsel, earning him the title 'Prime Minister in the Mountains'. Penned the seminal 'Collected Annotations on the Materia Medica', systematizing Chinese pharmacology.",
    "archetype": "specialist",
    "fiveElements": {
      "dominant": "水",
      "secondary": "金"
    },
    "tenGodsAffinity": [
      "偏印",
      "食神",
      "伤官"
    ],
    "patternType": "食神吐秀",
    "strengthAdviceZh": "世外高人与专业顾问的最高境界！身在江湖之远却握有天下算力，以无上的学术专业与超然物外的人格，成为最高权力机构最敬仰的超级智囊。",
    "strengthAdviceEn": "The ultimate spiritual outsider and trusted external strategist! Holds immense intellectual gravity while remaining pure and untethered to court vanity.",
    "weaknessAdviceZh": "超然世外只能提供形而上的参谋建议，在侯景之乱等血腥暴虐的乱世狂潮面前，山中洞天亦难以抵挡武装蛮族的焚掠与兵燹。",
    "weaknessAdviceEn": "Spiritual transcendence offers philosophical advice but cannot field iron legions; sacred hermit sanctuaries remain vulnerable when savage barbarians burn the forests.",
    "historicalQuoteZh": "梁武帝问其山中何所有，弘景作诗答曰：‘山中何所有？岭上多白云。只可自怡悦，不堪持赠君。’高蹈清风，千古绝唱。",
    "historicalQuoteEn": "Emperor Wu asked what kept him in the wild mountains. Tao Hongjing replied with immortal verse: 'What dwells within the mountains? White clouds adrift atop the ridge. They serve to bring my spirit joy, but cannot be presented to my Lord.'",
    "auxiliaryStrengthsZh": [
      "世外高人与专业顾问的最高境界",
      "身在江湖之远却握有天下算力，以无上的学术专业与超然物外的人格，成为最高权力机构最敬仰的超级智囊"
    ],
    "auxiliaryStrengthsEn": [
      "The ultimate spiritual outsider and trusted external strategist",
      "Holds immense intellectual gravity while remaining pure and untethered to court vanity"
    ],
    "auxiliaryWeaknessesZh": [
      "超然世外只能提供形而上的参谋建议",
      "在侯景之乱等血腥暴虐的乱世狂潮面前，山中洞天亦难以抵挡武装蛮族的焚掠与兵燹"
    ],
    "auxiliaryWeaknessesEn": [
      "Spiritual transcendence offers philosophical advice but cannot field iron legions",
      "sacred hermit sanctuaries remain vulnerable when savage barbarians burn the forests"
    ]
  },
  {
    "id": "xiao_gang",
    "nameZh": "萧纲 (梁简文帝)",
    "nameEn": "Xiao Gang (Emperor Jianwen of Liang)",
    "dynastyZh": "南梁",
    "dynastyEn": "Southern Liang",
    "eraTag": "southern_dynasties",
    "eraNameZh": "南朝南梁",
    "eraNameEn": "Southern Dynasties Era",
    "positionZh": "梁简文帝 · 宫体诗宗师与囚徒天子",
    "positionEn": "Emperor Jianwen of Liang · Palace Style Poet & Hostage Sovereign",
    "personalityZh": "才思绮丽、轻华浮艳、仁弱无断、沦为侯景玩偶傀儡",
    "personalityEn": "Dazzlingly sensual poetic flair, ornate, morally fragile and passive, degraded into Hou Jing's helpless hostage",
    "deedsZh": "梁武帝第三子，文学才华横溢，开创辞藻华丽描写宫闱声色的‘宫体诗’；侯景之乱城陷，梁武帝死后被侯景拥立为帝，实为囚徒；作诗叹‘壁高何局促，日短极虚游’，终被侯景部将以土囊压死于永福省，死后被侯景肆意嘲弄。",
    "deedsEn": "Third son of Xiao Yan. Brilliant literary innovator who created the sensual, ornate 'Palace Style Poetry'. After Taicheng fell and his father starved, crowned as Hou Jing's puppet captive. Penned sorrowful prison verses before being suffocated with earthbags under Hou Jing's orders.",
    "archetype": "specialist",
    "fiveElements": {
      "dominant": "火",
      "secondary": "木"
    },
    "tenGodsAffinity": [
      "伤官",
      "食神",
      "正印"
    ],
    "patternType": "伤官佩印",
    "strengthAdviceZh": "纯文学与感官审美的天才革新者，能够以极尽工巧的文字捕捉声色光影的流动，在文学史上占据专属一席。",
    "strengthAdviceEn": "Brilliant innovator of sensual aesthetics and courtly lyricism, capturing fleeting moments of physical beauty with crystalline elegance.",
    "weaknessAdviceZh": "极度缺乏在乱世生存的钢铁意志与政治骨气！把心智全消耗在风花雪月上，大难临头只能作凄惨艳诗自怜，沦为残暴屠夫随意踩踏抹杀的玩物。",
    "weaknessAdviceEn": "Complete absence of moral steel and situational grit! Squandered mind on decadent romanticism, weeping pathetic verses while savage killers sealed his coffin with dirt.",
    "historicalQuoteZh": "景使人用土囊压弑之。简文自知不免，引觞自醉，赋诗曰：‘壁高何局促，日短极虚游。聊当对金爵，寂听吹竹钩。’",
    "historicalQuoteEn": "Knowing executioners came with sacks of earth, he drank wine and recited his final sorrow: 'These prison walls close so tight, the sun sets upon empty wanderings.' They smothered him to death moments later.",
    "auxiliaryStrengthsZh": [
      "纯文学与感官审美的天才革新者",
      "能够以极尽工巧的文字捕捉声色光影的流动，在文学史上占据专属一席"
    ],
    "auxiliaryStrengthsEn": [
      "Brilliant innovator of sensual aesthetics and courtly lyricism",
      "capturing fleeting moments of physical beauty with crystalline elegance"
    ],
    "auxiliaryWeaknessesZh": [
      "极度缺乏在乱世生存的钢铁意志与政治骨气",
      "把心智全消耗在风花雪月上，大难临头只能作凄惨艳诗自怜，沦为残暴屠夫随意踩踏抹杀的玩物"
    ],
    "auxiliaryWeaknessesEn": [
      "Complete absence of moral steel and situational grit",
      "Squandered mind on decadent romanticism, weeping pathetic verses while savage killers sealed his coffin with dirt"
    ]
  },
  {
    "id": "hou_jing",
    "nameZh": "侯景",
    "nameEn": "Hou Jing",
    "dynastyZh": "东魏 / 南梁 / 汉",
    "dynastyEn": "Eastern Wei / Southern Liang / Han",
    "eraTag": "southern_dynasties",
    "eraNameZh": "南朝南梁",
    "eraNameEn": "Southern Dynasties Era",
    "positionZh": "宇宙大将军 · 屠戮江南的人间恶魔",
    "positionEn": "Cosmic Grand General · The Butcher of Southern China",
    "personalityZh": "狡诈如鬼、残忍无情、长于乱战、反复背叛无常、野心膨胀",
    "personalityEn": "Demonic cunning, sadistically merciless, slippery opportunistic warlord, betraying every benefactor in blood",
    "deedsZh": "跛足北人，善骑射用兵诡诈，初事尔朱荣后归高欢；高欢死叛东魏降西魏，西魏不纳遂投奔南梁；梁武帝昏庸接纳，侯景反手起兵叛梁攻陷台城，饿死梁武帝、屠杀江南士民数十万，自封‘宇宙大将军’，篡位称汉皇帝；后被王僧辩、陈霸先大军击溃，逃亡途中遭部下杀死，尸体被建康百姓生食烹尽。",
    "deedsEn": "Lame northern general who rose under Gao Huan. Betrayed Eastern Wei, turned to Western Wei, and was welcomed by foolish Liang Wu Di. Promptly revolted, seized Taicheng, starved the Emperor, slaughtered the gentry clans, and crowned himself 'Cosmic Grand General' and Emperor of Han. Crushed by Chen Baxian; his fleeing corpse was pickled and devoured by vengeful civilians in Jiankang.",
    "archetype": "military",
    "fiveElements": {
      "dominant": "金",
      "secondary": "火"
    },
    "tenGodsAffinity": [
      "七杀",
      "伤官",
      "羊刃"
    ],
    "patternType": "羊刃驾杀",
    "strengthAdviceZh": "战场直觉极度敏锐的野兽级军阀！擅长在多国夹缝中挑动矛盾借鸡生蛋，进攻手段狠辣绝决，攻城心理战炉火纯青。",
    "strengthAdviceEn": "Beast-like survival intuition in multi-polar battlefields; manipulates geopolitical paranoia to extract resources, executing merciless shock assaults.",
    "weaknessAdviceZh": "毫无道义底线的恶魔化身！一生把背叛与屠戮当饭吃，激起全天下最刻骨铭心的仇恨，不仅身死族灭，更沦为尸骨被万民分食的千古第一罪魁。",
    "weaknessAdviceEn": "The personification of moral abomination! Lived by betrayal and sadistic bloodletting, earning universal wrath until his dead flesh was literally eaten by citizens in the streets.",
    "historicalQuoteZh": "景篡位，自称‘宇宙大将军、都督六合诸军事’。及死，百姓争取其尸，脔食立尽，连其骨皆烧灰饮之，其妻溧阳公主亦食其肉！",
    "historicalQuoteEn": "Hou Jing crowned himself 'Cosmic Grand General'. When slain, civilians tore his corpse apart and devoured every shred of flesh, mixing his powdered bones in wine; even his forced wife Lady Liyang ate his heart.",
    "auxiliaryStrengthsZh": [
      "战场直觉极度敏锐的野兽级军阀",
      "擅长在多国夹缝中挑动矛盾借鸡生蛋，进攻手段狠辣绝决，攻城心理战炉火纯青"
    ],
    "auxiliaryStrengthsEn": [
      "Beast-like survival intuition in multi-polar battlefields",
      "manipulates geopolitical paranoia to extract resources, executing merciless shock assaults"
    ],
    "auxiliaryWeaknessesZh": [
      "毫无道义底线的恶魔化身",
      "生把背叛与屠戮当饭吃，激起全天下最刻骨铭心的仇恨，不仅身死族灭，更沦为尸骨被万民分食的千古第一罪魁"
    ],
    "auxiliaryWeaknessesEn": [
      "The personification of moral abomination",
      "Lived by betrayal and sadistic bloodletting, earning universal wrath until his dead flesh was literally eaten by citizens in the streets"
    ]
  },
  {
    "id": "chen_baxian",
    "nameZh": "陈霸先 (陈武帝)",
    "nameEn": "Chen Baxian (Emperor Wu of Chen)",
    "dynastyZh": "南陈",
    "dynastyEn": "Southern Chen",
    "eraTag": "southern_dynasties",
    "eraNameZh": "南朝南陈",
    "eraNameEn": "Southern Dynasties Era",
    "positionZh": "南陈开国皇帝 · 挽狂澜于既倒的草根战神",
    "positionEn": "Founding Emperor of Chen · The Indomitable Savior of Southern China",
    "personalityZh": "沉毅多智、雄武盖世、百折不挠、身先士卒、清简奉公",
    "personalityEn": "Steely resolve, boundless battlefield genius, leading charges in frontline armor, incorruptible father of his people",
    "deedsZh": "岭南寒门出身，侯景之乱江南陆沉，陈霸先自交趾大庾岭提孤军北上，与王僧辩协同收复建康荡平侯景残暴狂徒；后破王僧辩擅立之谋独揽南朝大权；北齐乘虚以十万大军渡江直扑建康，陈霸先以数千精锐冒死出击，白下血战彻底打碎北齐吞并江南狂梦；代梁建陈，在赤地千里废墟中保全华夏衣冠文脉，千古南土守护神。",
    "deedsEn": "Rose from poverty in southern Lingnan. When Hou Jing turned southern China into ash, Chen Baxian marched north through jagged mountain passes, crushed the rebels, and liberated Jiankang. When the massive Northern Qi empire invaded to annex the south, Chen Baxian led desperate counterattacks at Baixia, obliterating the northern hordes. Founded the Chen dynasty on apocalyptic ruins, preserving Chinese civilization.",
    "archetype": "executive",
    "fiveElements": {
      "dominant": "金",
      "secondary": "木"
    },
    "tenGodsAffinity": [
      "七杀",
      "偏财",
      "比肩"
    ],
    "patternType": "羊刃驾杀",
    "strengthAdviceZh": "真正挽狂澜于既倒的绝境拯救者！在山河破碎、十室九空的终极废墟中白手起家，凭神级统帅力以弱胜强击碎强敌，展现出泰山崩于前而面不改色的钢铁意志。",
    "strengthAdviceEn": "The ultimate apocalyptic savior! Rebuilt an entire civilization from smoldering ashes, shattering colossal foreign invasions through peerless tactical courage and iron discipline.",
    "weaknessAdviceZh": "国力底盘在侯景之乱后已被摧毁殆尽，南陈疆域狭小民力凋敝，终其一生只能苦苦支撑自保，无力恢复大一统荣光。",
    "weaknessAdviceEn": "Inherited an utterly devastated, depopulated southern landscape; spent his whole reign in desperate defensive wars, lacking economic depth for northern reclamation.",
    "historicalQuoteZh": "陈武帝征战数十年，夜不释甲。白下之战，兵无斗志，武帝拔剑誓曰：‘今日之事，有进无退！’亲冒矢石破强齐，江表遂安。",
    "historicalQuoteEn": "Book of Chen: Emperor Wu spent decades sleeping in armor. At Baixia, soldiers wavered; Chen Baxian drew his broadsword: 'Today we march forward, there is no retreat!' Defeating mighty Qi, southern civilization was preserved.",
    "auxiliaryStrengthsZh": [
      "真正挽狂澜于既倒的绝境拯救者",
      "在山河破碎、十室九空的终极废墟中白手起家，凭神级统帅力以弱胜强击碎强敌，展现出泰山崩于前而面不改色的钢铁意志"
    ],
    "auxiliaryStrengthsEn": [
      "The ultimate apocalyptic savior",
      "Rebuilt an entire civilization from smoldering ashes, shattering colossal foreign invasions through peerless tactical courage and iron discipline"
    ],
    "auxiliaryWeaknessesZh": [
      "国力底盘在侯景之乱后已被摧毁殆尽",
      "南陈疆域狭小民力凋敝，终其一生只能苦苦支撑自保，无力恢复大一统荣光"
    ],
    "auxiliaryWeaknessesEn": [
      "Inherited an utterly devastated, depopulated southern landscape",
      "spent his whole reign in desperate defensive wars, lacking economic depth for northern reclamation"
    ]
  },
  {
    "id": "xiao_tong",
    "nameZh": "萧统 (昭明太子)",
    "nameEn": "Xiao Tong (Crown Prince Zhaoming)",
    "dynastyZh": "南梁",
    "dynastyEn": "Southern Liang",
    "eraTag": "southern_dynasties",
    "eraNameZh": "南朝南梁",
    "eraNameEn": "Southern Dynasties Era",
    "positionZh": "昭明太子 · 编纂《文选》的千古仁孝储君",
    "positionEn": "Crown Prince Zhaoming · Compiler of 'Wen Xuan' & Paragon of Filial Piety",
    "personalityZh": "仁孝慈爱、温恭好学、博览群书、清正爱民、英年早逝",
    "personalityEn": "Profoundly filial, gentle, insatiably scholarly, benevolent toward commoners, dying tragically young",
    "deedsZh": "梁武帝长子，自幼聪明绝顶读书过目不忘；主持编纂中国现存最早的诗文总集《文选》（《昭明文选》），确立后世一千五百年科举与文学审美的黄金标准；其人极重孝道仁义，因生母病逝悲痛呕血；因蜡鹅诅咒嫌疑遭梁武帝猜忌，忧郁成疾，游后池溺水受惊三十岁早逝，举国号啕痛哭。",
    "deedsEn": "Eldest son of Liang Wu Di. A child prodigy who read classical canons effortlessly. Oversaw the compilation of 'Wen Xuan' (Selections of Refined Literature), the supreme anthology defining Chinese literary and civil examination standards for 1,500 years. Deeply compassionate; fell under his father's paranoid suspicion over court voodoo rumors, dying at age 30 after falling into a palace lake.",
    "archetype": "specialist",
    "fiveElements": {
      "dominant": "木",
      "secondary": "水"
    },
    "tenGodsAffinity": [
      "正印",
      "食神",
      "正官"
    ],
    "patternType": "食神吐秀",
    "strengthAdviceZh": "中华文明文学经典化第一功臣！具备博大精深的学术审美眼光与海纳百川的文化整合力，奠定了后世数千年的文化基因坐标。",
    "strengthAdviceEn": "The foremost architect of classical Chinese literary canonization! Possessed transcendent taste that forged the aesthetic DNA of the empire for two millennia.",
    "weaknessAdviceZh": "心理承受力与面对父权猜忌时的心理免疫力偏弱，因一次无端的误会内耗至深，未能熬过人性的猜忌考验，导致南梁痛失最佳接班人。",
    "weaknessAdviceEn": "Vulnerable to emotional despair and parental mistrust; allowed unjust royal suspicion to break his spirit, dying young and robbing the realm of its finest heir.",
    "historicalQuoteZh": "统性仁孝，爱玩经籍，引纳文学之士，赏拔无遗。所撰《文选》，流行于世，至今遵之。及薨，京师男女号泣于道，如丧亲戚。",
    "historicalQuoteEn": "Book of Liang: Xiao Tong was gentle, filial, and loved classical learning. His 'Wen Xuan' remains a beacon for centuries. When he passed, common people wept in the streets as if mourning their own parents.",
    "auxiliaryStrengthsZh": [
      "中华文明文学经典化第一功臣",
      "具备博大精深的学术审美眼光与海纳百川的文化整合力，奠定了后世数千年的文化基因坐标"
    ],
    "auxiliaryStrengthsEn": [
      "The foremost architect of classical Chinese literary canonization",
      "Possessed transcendent taste that forged the aesthetic DNA of the empire for two millennia"
    ],
    "auxiliaryWeaknessesZh": [
      "心理承受力与面对父权猜忌时的心理免疫力偏弱",
      "因一次无端的误会内耗至深，未能熬过人性的猜忌考验，导致南梁痛失最佳接班人"
    ],
    "auxiliaryWeaknessesEn": [
      "Vulnerable to emotional despair and parental mistrust",
      "allowed unjust royal suspicion to break his spirit, dying young and robbing the realm of its finest heir"
    ]
  },
  {
    "id": "jiang_yan",
    "nameZh": "江淹",
    "nameEn": "Jiang Yan",
    "dynastyZh": "刘宋 / 南齐 / 南梁",
    "dynastyEn": "Liu Song / Southern Qi / Southern Liang",
    "eraTag": "southern_dynasties",
    "eraNameZh": "南朝文宗",
    "eraNameEn": "Southern Dynasties Era",
    "positionZh": "金紫光禄大夫 · 江郎才尽的仕宦文豪",
    "positionEn": "Grand Master of Golden Seals · The 'Exhausted Talent' Literary Master",
    "personalityZh": "少贫好学、文思泉涌、明哲保身、历仕三朝、晚年知止",
    "personalityEn": "Brilliant writer in youth, shrewd survivor across three volatile dynasties, knowing when to put down the brush to secure peaceful retirement",
    "deedsZh": "早年孤贫樵采自供，以惊世诗赋名动天下，《别赋》《恨赋》成千古绝唱；仕历刘宋、南齐、南梁三朝，深通政治风向；梦郭璞索还五色笔后自称‘江郎才尽’，从此不复赋诗，专心为官直言规谏，官至金紫光禄大夫安享晚年。",
    "deedsEn": "Gathered firewood in poverty to buy oil for study. Penned immortal prose masterpieces 'Farewell Rhapsody' and 'Resentment Rhapsody'. Served across three dynasties with supreme political agility. Famously dreamt poet Guo Pu took back the five-colored brush, proclaiming 'Master Jiang's talent is exhausted!'—voluntarily abandoning writing to survive peacefully as a senior statesman.",
    "archetype": "civil",
    "fiveElements": {
      "dominant": "水",
      "secondary": "火"
    },
    "tenGodsAffinity": [
      "伤官",
      "正财",
      "正官"
    ],
    "patternType": "伤官生财",
    "strengthAdviceZh": "主动降维与大智若愚自保的最高典范！在文名炽热、树大招风之际，懂得借‘才尽’之由主动卸下光环，从名利的靶心全身而退安享天年。",
    "strengthAdviceEn": "Master of strategic self-diminution and graceful exit! Voluntarily declared his talent 'exhausted' to step off the celebrity target board and retire in prosperity.",
    "weaknessAdviceZh": "在三朝更迭剧变中以明哲保身为第一信条，缺乏誓死坚守某一政治理想或道统阵线的执着与风骨。",
    "weaknessAdviceEn": "Prioritized personal survival over ideological loyalty; flexibly adapted across usurpations, lacking tragic moral backbone.",
    "historicalQuoteZh": "淹少以文章显，晚节才思微退，时人谓之‘江郎才尽’。然其明哲保身，历事三代，金玉满堂，亦乱世之智者也。",
    "historicalQuoteEn": "Book of Liang: Jiang Yan shone in youth but withdrew his brush in late years, termed 'Master Jiang's talent exhausted'. Yet surviving three dynasties in honor, he was truly a sage of chaos.",
    "auxiliaryStrengthsZh": [
      "主动降维与大智若愚自保的最高典范",
      "在文名炽热、树大招风之际，懂得借‘才尽’之由主动卸下光环，从名利的靶心全身而退安享天年"
    ],
    "auxiliaryStrengthsEn": [
      "Master of strategic self-diminution and graceful exit",
      "Voluntarily declared his talent 'exhausted' to step off the celebrity target board and retire in prosperity"
    ],
    "auxiliaryWeaknessesZh": [
      "在三朝更迭剧变中以明哲保身为第一信条",
      "缺乏誓死坚守某一政治理想或道统阵线的执着与风骨"
    ],
    "auxiliaryWeaknessesEn": [
      "Prioritized personal survival over ideological loyalty",
      "flexibly adapted across usurpations, lacking tragic moral backbone"
    ]
  },
  {
    "id": "chen_shubao",
    "nameZh": "陈叔宝 (陈后主)",
    "nameEn": "Chen Shubao (Chen Houzhu)",
    "dynastyZh": "南陈",
    "dynastyEn": "Southern Chen",
    "eraTag": "southern_dynasties",
    "eraNameZh": "南朝南陈",
    "eraNameEn": "Southern Dynasties Era",
    "positionZh": "南陈末代皇帝 · 玉树后庭花的荒淫亡国之君",
    "positionEn": "Last Emperor of Chen · The Decadent Sovereign of 'Courtyard Flowers'",
    "personalityZh": "沉溺声色、荒淫昏聩、不恤政事、降井偷生、麻木不仁",
    "personalityEn": "Obsessed with sensual luxury, pathologically oblivious to geopolitical doom, cowardly, shamelessly obtuse",
    "deedsZh": "南陈后主，在位期间大修临春、结绮、望仙三阁，日与宠妃张丽华及狎客饮酒赋诗，作靡靡之音《玉树后庭花》；隋文帝五十万大军南下渡江，叔宝犹言‘王气在建康，齐兵三来魏兵两次皆败，隋军何为！’；隋军破城，陈叔宝携二妃投景阳宫枯井藏匿被俘，入隋后整日嗜酒求官，毫无亡国之耻。",
    "deedsEn": "Last ruler of Chen. Built extravagant pleasure towers, feasting with concubine Zhang Lihua and composing decadent songs like 'Jade Trees and Backyard Flowers'. When Sui armies crossed the river, laughed that cosmic qi protected his capital. Captured hiding in a dried palace well with two concubines; spent his remaining years in Sui begging for minor titles and getting drunk.",
    "archetype": "specialist",
    "fiveElements": {
      "dominant": "水",
      "secondary": "火"
    },
    "tenGodsAffinity": [
      "食神",
      "偏财",
      "比肩"
    ],
    "patternType": "从儿格",
    "strengthAdviceZh": "在音乐旋律、辞藻声律与奢靡享乐方面具备敏锐的天赋，为后世留下了惊艳千古的亡国靡靡之音。",
    "strengthAdviceEn": "A gifted sensual melody creator and indulgent courtly stylist whose musical decadence haunted Chinese history forever.",
    "weaknessAdviceZh": "统治者沉溺享乐逃避现实的终极耻辱败类！大敌当前依然自欺欺人，城破后投井求生甚至毫无国破家亡的羞耻感，沦为历史的千古笑柄。",
    "weaknessAdviceEn": "The supreme disgrace of sovereign abdication! Deluded himself until the gates fell, cowered in a filthy well, and begged his conquerors for drinking wine.",
    "historicalQuoteZh": "隋兵入宫，求后主不得。有窥枯井者，呼之不应，将下石，后主乃呼。引绳出之，后主与张丽华、孔贵嫔同囊而出，隋军大笑！",
    "historicalQuoteEn": "Sui troops searched the palace and found the Emperor hiding down a dried well. Threading a rope down, they hauled up a basket holding Chen Shubao and his two concubines tied together, erupting in mocking laughter!",
    "auxiliaryStrengthsZh": [
      "在音乐旋律、辞藻声律与奢靡享乐方面具备敏锐的天赋",
      "为后世留下了惊艳千古的亡国靡靡之音"
    ],
    "auxiliaryStrengthsEn": [
      "A gifted sensual melody creator and indulgent courtly stylist whose musical decadence haunted Chinese history forever.",
      "Leverages core natural talents to pierce strategic bottlenecks."
    ],
    "auxiliaryWeaknessesZh": [
      "统治者沉溺享乐逃避现实的终极耻辱败类",
      "大敌当前依然自欺欺人，城破后投井求生甚至毫无国破家亡的羞耻感，沦为历史的千古笑柄"
    ],
    "auxiliaryWeaknessesEn": [
      "The supreme disgrace of sovereign abdication",
      "Deluded himself until the gates fell, cowered in a filthy well, and begged his conquerors for drinking wine"
    ]
  },
  {
    "id": "tuoba_gui",
    "nameZh": "拓跋珪 (道武帝)",
    "nameEn": "Tuoba Gui (Emperor Daowu of Northern Wei)",
    "dynastyZh": "北魏",
    "dynastyEn": "Northern Wei",
    "eraTag": "northern_wei",
    "eraNameZh": "北魏风云",
    "eraNameEn": "Northern Wei Dynastic Era",
    "positionZh": "北魏开国皇帝 · 参合陂一战定乾坤的雄主",
    "positionEn": "Founding Emperor of Northern Wei · Conqueror of Canhe Slope",
    "personalityZh": "雄武深算、用兵奇诡、开基定鼎、晚年服食寒食散狂暴被弑",
    "personalityEn": "Martial strategist, brilliant nomad innovator, yet destroyed by mineral drug psychosis and paranoid rage in late years",
    "deedsZh": "拓跋鲜卑首领，登牛川即代王位，改国号为魏；参合陂之战伏击后燕大军全歼四至五万人，一举扭转北方强弱均势；定都平城开创北魏百年帝国基业；然晚年服用五石散中毒精神错乱，喜怒无常滥杀左右，终被次子拓跋绍夜入寝宫刺杀。",
    "deedsEn": "Elected king at Niuchuan, established Northern Wei. At the landmark Battle of Canhe Slope, ambushed and obliterated the Later Yan army, shifting the northern balance of power forever. Built the imperial capital at Pingcheng. Later poisoned by mineral drugs ('Five Minerals Powder'), lapsing into paranoid mania until murdered by his son.",
    "archetype": "executive",
    "fiveElements": {
      "dominant": "金",
      "secondary": "水"
    },
    "tenGodsAffinity": [
      "七杀",
      "偏印",
      "比肩"
    ],
    "patternType": "羊刃驾杀",
    "strengthAdviceZh": "具备惊人的战略定力与运动战伏击战术！在强敌（后燕）环伺的极端劣势下捕捉稍纵即逝的战机，一战逆天改命奠定北方霸业。",
    "strengthAdviceEn": "Immense strategic patience and ambush mastery! Capitalized on fleeting enemy errors to overturn a continental power balance in a single strike.",
    "weaknessAdviceZh": "生理药物中毒与精神狂乱彻底摧毁了心智！晚年肆意滥杀臣下甚至逼反骨肉，完全失去了理智防御机制，死于最亲近之人的枕边利刃。",
    "weaknessAdviceEn": "Chemical drug poisoning broke his sanity! Indiscriminate paranoia towards loyal ministers and concubines invited assassination by his own family.",
    "historicalQuoteZh": "《魏书》：帝聪爽仁智，年甫十五，复积石之业。然晚节沉湎药石，朝野震恐，遂致内乱之祸，伤哉！",
    "historicalQuoteEn": "Book of Wei: Emperor Daowu was brilliantly perceptive in youth; yet in his late years, drug-induced madness terrified court and countryside, courting patricidal ruin.",
    "auxiliaryStrengthsZh": [
      "具备惊人的战略定力与运动战伏击战术",
      "在强敌（后燕）环伺的极端劣势下捕捉稍纵即逝的战机，一战逆天改命奠定北方霸业"
    ],
    "auxiliaryStrengthsEn": [
      "Immense strategic patience and ambush mastery",
      "Capitalized on fleeting enemy errors to overturn a continental power balance in a single strike"
    ],
    "auxiliaryWeaknessesZh": [
      "生理药物中毒与精神狂乱彻底摧毁了心智",
      "晚年肆意滥杀臣下甚至逼反骨肉，完全失去了理智防御机制，死于最亲近之人的枕边利刃"
    ],
    "auxiliaryWeaknessesEn": [
      "Chemical drug poisoning broke his sanity",
      "Indiscriminate paranoia towards loyal ministers and concubines invited assassination by his own family"
    ]
  },
  {
    "id": "tuoba_tao",
    "nameZh": "拓跋焘 (太武帝)",
    "nameEn": "Tuoba Tao (Emperor Taiwu of Northern Wei)",
    "dynastyZh": "北魏",
    "dynastyEn": "Northern Wei",
    "eraTag": "northern_wei",
    "eraNameZh": "北魏风云",
    "eraNameEn": "Northern Wei Dynastic Era",
    "positionZh": "北魏太武帝 · 统一北方灭十六国的铁血大帝",
    "positionEn": "Emperor Taiwu of Northern Wei · Conqueror Who Unified Northern China",
    "personalityZh": "勇冠百王、雄图无极、亲冒矢石、太武灭佛、晚年多疑遭弑",
    "personalityEn": "Titanic martial conqueror, leading cavalry charges in person, ruthless anti-Buddhist iconoclast, slain by eunuchs",
    "deedsZh": "拓跋珪之孙，军事天才，亲率铁骑灭大夏、灭柔然、灭北燕、灭北凉，终结五胡十六国一百三十五年分裂混战局面，一统北方中国；三度南征宋文帝饮马长江；听信崔浩推行严法并掀起中国历史上首次‘太武灭佛’；晚年性严好杀，被中常侍宦官宗爱弑杀于行宫。",
    "deedsEn": "Military genius who personally commanded iron cataphracts to smash Daxia, Rouran, Northern Yan, and Northern Liang, ending 135 years of chaotic civil war to unify the entire north. Rushed south to the Yangtze River. Instigated China's first great Buddhist suppression. Murdered in his pavilion by eunuch Zong Ai.",
    "archetype": "executive",
    "fiveElements": {
      "dominant": "金",
      "secondary": "火"
    },
    "tenGodsAffinity": [
      "七杀",
      "羊刃",
      "正官"
    ],
    "patternType": "羊刃驾杀",
    "strengthAdviceZh": "古往今来亲临前线战术冲锋的第一帝王！拥有恐怖的军事直觉与高强度跨区域机动作战能力，以摧枯拉朽之势完成地缘大统一。",
    "strengthAdviceEn": "Peerless battlefield shock general among sovereigns! Unmatched operational agility and tactical momentum capable of pulverizing fragmented regional warlords.",
    "weaknessAdviceZh": "杀伐过甚缺乏对精神文化信仰的敬畏（灭佛之浩劫）；晚年对身边近侍（宦官）缺乏起码的安全防范意识，最终死于卑贱家奴之手。",
    "weaknessAdviceEn": "Draconian savagery devoid of spiritual empathy (wholesale slaughter of monastics); fatal blindspot toward palace eunuchs left him murdered in his bed by a servant.",
    "historicalQuoteZh": "太武亲跨鞍马，出入矢石之间，前后讨灭诸国，风卷残云。然性严急，多残忍，终及宗爱之手，甚可叹也！",
    "historicalQuoteEn": "Book of Wei: Emperor Taiwu spent his life in the saddle among flying arrows, sweeping away rival kingdoms like storm winds. Yet his hair-trigger temper and cruelty delivered him into the eunuch's dagger.",
    "auxiliaryStrengthsZh": [
      "古往今来亲临前线战术冲锋的第一帝王",
      "拥有恐怖的军事直觉与高强度跨区域机动作战能力，以摧枯拉朽之势完成地缘大统一"
    ],
    "auxiliaryStrengthsEn": [
      "Peerless battlefield shock general among sovereigns",
      "Unmatched operational agility and tactical momentum capable of pulverizing fragmented regional warlords"
    ],
    "auxiliaryWeaknessesZh": [
      "杀伐过甚缺乏对精神文化信仰的敬畏（灭佛之浩劫）",
      "晚年对身边近侍（宦官）缺乏起码的安全防范意识，最终死于卑贱家奴之手"
    ],
    "auxiliaryWeaknessesEn": [
      "Draconian savagery devoid of spiritual empathy (wholesale slaughter of monastics)",
      "fatal blindspot toward palace eunuchs left him murdered in his bed by a servant"
    ]
  },
  {
    "id": "cui_hao",
    "nameZh": "崔浩",
    "nameEn": "Cui Hao",
    "dynastyZh": "北魏",
    "dynastyEn": "Northern Wei",
    "eraTag": "northern_wei",
    "eraNameZh": "北魏风云",
    "eraNameEn": "Northern Wei Dynastic Era",
    "positionZh": "司徒白马公 · 算无遗策却惨遭夷族的北朝第一谋臣",
    "positionEn": "Grand Chancellor & Duke of Baima · Infallible Strategist of the North",
    "personalityZh": "纤妍白皙、如美妇人、才智通神、算无遗策、刚直触怒鲜卑贵族",
    "personalityEn": "Delicate beauty like an elegant woman, divine strategic foresight, calculating campaigns with 100% precision, yet fatally arrogant",
    "deedsZh": "清河崔氏领袖，历仕三朝太武帝最信任之军师；料敌如神，算夏必破、算凉必克，定灭十六国宏观方略；力主太武帝崇道抑佛；主持编纂北魏国史《魏书》，将拓跋氏早期野蛮丑事直笔勒石刻碑置于通衢大道，激怒鲜卑贵族，遭太武帝下狱诛灭清河崔氏三族及姻亲上千人（‘国史之狱’）。",
    "deedsEn": "Patriarch of the elite Qinghe Cui clan. Infallible strategic brain behind Emperor Taiwu's conquests. Advised Daoism and masterminded the Buddhist purge. Oversaw the compilation of the imperial history; with brutal academic honesty, carved unvarnished records of barbarian ancestry onto stone tablets beside the highway. Outraged Xianbei nobility; Taiwu had Cui Hao and his entire clan across three lines executed ('National History Inquisition').",
    "archetype": "specialist",
    "fiveElements": {
      "dominant": "水",
      "secondary": "金"
    },
    "tenGodsAffinity": [
      "偏印",
      "伤官",
      "七杀"
    ],
    "patternType": "伤官见官",
    "strengthAdviceZh": "顶级的战役级参谋演算大脑！对地缘政治大势与军事胜负的推演达到神级精度，是太武帝一统北方的核心智力引擎。",
    "strengthAdviceEn": "The absolute pinnacle of campaign calculation and geopolitical prophecy; provided the algorithmic brain that powered the reunification of Northern China.",
    "weaknessAdviceZh": "技术专精分子的致命政治盲区！缺乏对异族军事集团底层心理创伤的同理心，天真地用所谓‘史官直笔’公开揭露掌握枪杆子实权者的历史伤疤与隐私，自取灭族灭门绝祸。",
    "weaknessAdviceEn": "The ultimate cautionary tragedy of intellectual hubris! Publicly engraving the raw, shameful tribal origins of armed warlords onto highway monoliths is suicidal provocation.",
    "historicalQuoteZh": "崔浩才艺通博，究极天人之际。太武待之，言听计从。然直笔暴扬国恶，勒石通衢，鲜卑贵族愤恚，浩遂族诛，行刑者甚至溺其尸，悲夫！",
    "historicalQuoteEn": "Cui Hao was omniscient in heavenly and human lore. Yet brutally broadcasting imperial clan scandals on public stone led to his entire lineage being butchered and desecrated.",
    "auxiliaryStrengthsZh": [
      "顶级的战役级参谋演算大脑",
      "对地缘政治大势与军事胜负的推演达到神级精度，是太武帝一统北方的核心智力引擎"
    ],
    "auxiliaryStrengthsEn": [
      "The absolute pinnacle of campaign calculation and geopolitical prophecy",
      "provided the algorithmic brain that powered the reunification of Northern China"
    ],
    "auxiliaryWeaknessesZh": [
      "技术专精分子的致命政治盲区",
      "缺乏对异族军事集团底层心理创伤的同理心，天真地用所谓‘史官直笔’公开揭露掌握枪杆子实权者的历史伤疤与隐私，自取灭族灭门绝祸"
    ],
    "auxiliaryWeaknessesEn": [
      "The ultimate cautionary tragedy of intellectual hubris",
      "Publicly engraving the raw, shameful tribal origins of armed warlords onto highway monoliths is suicidal provocation"
    ]
  },
  {
    "id": "empress_feng",
    "nameZh": "冯太后 (文明太后)",
    "nameEn": "Empress Dowager Feng (Empress Wenming)",
    "dynastyZh": "北魏",
    "dynastyEn": "Northern Wei",
    "eraTag": "northern_wei",
    "eraNameZh": "北魏风云",
    "eraNameEn": "Northern Wei Dynastic Era",
    "positionZh": "北魏文明太后 · 汉化改制真正总设计师",
    "positionEn": "Empress Dowager Wenming · Supreme Architect of Sinicization",
    "personalityZh": "雄才大略、深沉机变、赏罚严明、制度重构者、果决如铁",
    "personalityEn": "Monumental political vision, Machiavellian genius, scrupulously meritocratic, master institutional rebuilder with an iron hand",
    "deedsZh": "北燕皇族之后，没入北魏后宫；先后两次临朝称制二十余载，诛杀跋扈太原王乙浑稳固皇权；一手抚育教导孝文帝元宏；在全帝国大刀阔斧推行‘均田制’、‘三长制’、‘整顿俸禄制’，从经济与行政底层彻底瓦解鲜卑旧部族特权，奠定隋唐盛世制度根基。",
    "deedsEn": "Imperial scion of Northern Yan enslaved in the palace; rose to supreme empress dowager. Twice seized regency, executing arrogant warlords. Reared and mentored Emperor Xiaowen. Decreed the Equal-Field System, the Three-Chief Administrative System, and official salary reforms, transforming nomadic tribalism into a civilized bureaucratic empire.",
    "archetype": "executive",
    "fiveElements": {
      "dominant": "土",
      "secondary": "金"
    },
    "tenGodsAffinity": [
      "正官",
      "七杀",
      "正印"
    ],
    "patternType": "杀印相生",
    "strengthAdviceZh": "古往今来罕见的顶层制度设计师与政治铁腕女皇！具备看透社会经济本质的深邃眼光，用精密的制度工具（均田三长）从根基上完成了国家现代化改造。",
    "strengthAdviceEn": "One of history's greatest systemic institutional architects! Redesigned the socio-economic substructure through visionary agrarian and cadastral reforms.",
    "weaknessAdviceZh": "行事冷酷严厉，为保权力数次毒杀政敌及逼死亲子献文帝；对待左右近臣动辄施以鞭刑与诛杀，个人统治极具恐怖压迫感。",
    "weaknessAdviceEn": "Brutally ruthless in palace warfare; poisoned sovereign adversaries and ruled through fear and corporal punishment.",
    "historicalQuoteZh": "《魏书》赞曰：后性严明，假借威权，能行大事。均田立长之制，开隋唐之先声，女中之雄豪也！",
    "historicalQuoteEn": "Book of Wei: Empress Wenming possessed terrifying clarity and supreme command. Her Equal-Field and Three-Chief institutions laid the bedrock of Sui and Tang glory.",
    "auxiliaryStrengthsZh": [
      "古往今来罕见的顶层制度设计师与政治铁腕女皇",
      "具备看透社会经济本质的深邃眼光，用精密的制度工具（均田三长）从根基上完成了国家现代化改造"
    ],
    "auxiliaryStrengthsEn": [
      "One of history's greatest systemic institutional architects",
      "Redesigned the socio-economic substructure through visionary agrarian and cadastral reforms"
    ],
    "auxiliaryWeaknessesZh": [
      "行事冷酷严厉，为保权力数次毒杀政敌及逼死亲子献文帝",
      "对待左右近臣动辄施以鞭刑与诛杀，个人统治极具恐怖压迫感"
    ],
    "auxiliaryWeaknessesEn": [
      "Brutally ruthless in palace warfare",
      "poisoned sovereign adversaries and ruled through fear and corporal punishment"
    ]
  },
  {
    "id": "tuoba_hong",
    "nameZh": "元宏 (孝文帝)",
    "nameEn": "Tuoba Hong (Emperor Xiaowen of Northern Wei)",
    "dynastyZh": "北魏",
    "dynastyEn": "Northern Wei",
    "eraTag": "northern_wei",
    "eraNameZh": "北魏汉化",
    "eraNameEn": "Northern Wei Dynastic Era",
    "positionZh": "北魏孝文帝 · 迁都洛阳断诸北语的千古改制帝王",
    "positionEn": "Emperor Xiaowen of Northern Wei · The Great Civilizational Transformer",
    "personalityZh": "旷古雄图、深通儒术、悲天悯人、力排众议迁都洛阳、全盘汉化",
    "personalityEn": "Unprecedented civilizational visionary, deeply steeped in Confucian ethics, compassionate, moving the capital against all odds to execute total reform",
    "deedsZh": "冯太后抚育成人，博览经史；为彻底打破鲜卑保守贵族掣肘，以‘假意南伐’之计将国都强行从平城迁往洛阳；禁鲜卑语断诸北语改说汉语、改胡服为汉服、改拓跋姓为元姓、鼓励鲜卑与汉族通婚、尊孔兴学；重构华夏文明版图，然激起北方六镇保守鲜卑强烈不满，埋下日后六镇之乱总伏笔。",
    "deedsEn": "Reared by Empress Feng; master of classics. To crush reactionary nomad nobles, engineered a staged military campaign to move the capital from Datong to Luoyang. Banned Xianbei speech, adopted Han attire, renamed his royal house 'Yuan', encouraged intermarriage, and institutionalized Confucian academies. Re-anchored Chinese cultural geography, though alienating northern border garrison troops.",
    "archetype": "executive",
    "fiveElements": {
      "dominant": "木",
      "secondary": "土"
    },
    "tenGodsAffinity": [
      "正印",
      "正官",
      "食神"
    ],
    "patternType": "官印相生",
    "strengthAdviceZh": "站在人类文明演化制高点的终极大改革家！敢于砸碎本民族狭隘的血缘部族优越感，主动融入更高维的文明长河，气魄与胸怀千古一人。",
    "strengthAdviceEn": "The ultimate civilizational revolutionary! Dared to sacrifice his own tribe's narrow ethnic chauvinism to assimilate into universal humanistic civilization.",
    "weaknessAdviceZh": "改革步调过急过激，文化一刀切造成体制严重撕裂！极度偏重洛阳文治而彻底边缘化抛弃了北方六镇的鲜卑军事武力基本盘，引发北魏最终四分五裂。",
    "weaknessAdviceEn": "Reforms were pushed too fast and dogmatically; elevating southern-style elegance entirely alienated the northern military garrisons, sparking the apocalyptic Six Garrisons Rebellion.",
    "historicalQuoteZh": "孝文帝南征至洛阳，霖雨不止。帝策马执鞭曰：‘今日既不进兵，便当迁都于此！诸王以为何如？’群臣莫敢抗，洛邑遂定。",
    "historicalQuoteEn": "Arriving at Luoyang in torrential rain, Xiaowen raised his whip: 'If we halt our southern march today, then let this be our permanent capital!' None dared object; the move was sealed.",
    "auxiliaryStrengthsZh": [
      "站在人类文明演化制高点的终极大改革家",
      "敢于砸碎本民族狭隘的血缘部族优越感，主动融入更高维的文明长河，气魄与胸怀千古一人"
    ],
    "auxiliaryStrengthsEn": [
      "The ultimate civilizational revolutionary",
      "Dared to sacrifice his own tribe's narrow ethnic chauvinism to assimilate into universal humanistic civilization"
    ],
    "auxiliaryWeaknessesZh": [
      "改革步调过急过激，文化一刀切造成体制严重撕裂",
      "极度偏重洛阳文治而彻底边缘化抛弃了北方六镇的鲜卑军事武力基本盘，引发北魏最终四分五裂"
    ],
    "auxiliaryWeaknessesEn": [
      "Reforms were pushed too fast and dogmatically",
      "elevating southern-style elegance entirely alienated the northern military garrisons, sparking the apocalyptic Six Garrisons Rebellion"
    ]
  },
  {
    "id": "yuan_ke",
    "nameZh": "元恪 (宣武帝)",
    "nameEn": "Yuan Ke (Emperor Xuanwu of Northern Wei)",
    "dynastyZh": "北魏",
    "dynastyEn": "Northern Wei",
    "eraTag": "northern_wei",
    "eraNameZh": "北魏风云",
    "eraNameEn": "Northern Wei Dynastic Era",
    "positionZh": "北魏宣武帝 · 龙门石窟开凿的崇佛君主",
    "positionEn": "Emperor Xuanwu of Northern Wei · Patron of Longmen Grottoes",
    "personalityZh": "沉和仁厚、精研佛理、大拓疆土、晚年疏于吏治、外戚干政",
    "personalityEn": "Gentle, devoted to Buddhist metaphysical study, expanded borders south, yet lax in administration and allowing in-law usurpation",
    "deedsZh": "孝文帝次子，即位后继续巩固洛阳新都，开凿著名的洛阳龙门石窟古阳洞、宾阳中洞；对南梁屡次发动局部战役拓土汉中、淮南大片土地；在位前期励精图治，后期沉湎佛理、宠信外戚高肇，大杀宗室诸王元详等人，导致朝政由盛转衰。",
    "deedsEn": "Second son of Xiaowen. Excavated the world-renowned Longmen Grottoes (Guyang and Binyang Caves). Annexed Hanzhong and Huainan from Southern Liang. However, in later years indulged in Buddhist retreats, empowered corrupt in-laws, and executed royal princes, seeding dynastic rot.",
    "archetype": "executive",
    "fiveElements": {
      "dominant": "火",
      "secondary": "土"
    },
    "tenGodsAffinity": [
      "偏印",
      "正官",
      "正财"
    ],
    "patternType": "偏印格",
    "strengthAdviceZh": "在文化遗产营造与帝国疆域稳固方面有不俗功绩，善于在父皇改革红利期维持大兵团对外威慑力。",
    "strengthAdviceEn": "Maintained robust imperial territorial deterrence during the post-reform harvest; commissioned timeless UNESCO cultural masterpieces (Longmen).",
    "weaknessAdviceZh": "沉迷宗教形而上哲学导致对世俗政治权力暗流丧失警惕，放任外戚专权屠戮手足，动摇了皇权合法性根基。",
    "weaknessAdviceEn": "Excessive retreat into religious mysticism blinded him to court conspiracies; empowering predatory in-laws poisoned dynastic stability.",
    "historicalQuoteZh": "恪性爱佛法，常于禁中亲讲经论。然高肇专权，宗室受戮，朝政日乱，实由斯启。",
    "historicalQuoteEn": "Book of Wei: Yuan Ke loved Buddhist sutras, lecturing courtiers inside palace halls. Yet empowering corrupt in-law Gao Zhao fractured the state.",
    "auxiliaryStrengthsZh": [
      "在文化遗产营造与帝国疆域稳固方面有不俗功绩",
      "善于在父皇改革红利期维持大兵团对外威慑力"
    ],
    "auxiliaryStrengthsEn": [
      "Maintained robust imperial territorial deterrence during the post-reform harvest",
      "commissioned timeless UNESCO cultural masterpieces (Longmen)"
    ],
    "auxiliaryWeaknessesZh": [
      "沉迷宗教形而上哲学导致对世俗政治权力暗流丧失警惕",
      "放任外戚专权屠戮手足，动摇了皇权合法性根基"
    ],
    "auxiliaryWeaknessesEn": [
      "Excessive retreat into religious mysticism blinded him to court conspiracies",
      "empowering predatory in-laws poisoned dynastic stability"
    ]
  },
  {
    "id": "empress_hu",
    "nameZh": "胡太后 (灵太后)",
    "nameEn": "Empress Dowager Hu (Empress Ling)",
    "dynastyZh": "北魏",
    "dynastyEn": "Northern Wei",
    "eraTag": "northern_wei",
    "eraNameZh": "北魏风云",
    "eraNameEn": "Northern Wei Dynastic Era",
    "positionZh": "北魏灵太后 · 毒杀亲子引爆河阴之变的极恶权后",
    "positionEn": "Empress Dowager Ling · The Hedonistic Regent Who Poisoned Her Son",
    "personalityZh": "聪慧敏悟、贪恋权位、荒淫放纵、政出多门、毒杀亲子",
    "personalityEn": "Intellectually brilliant early on, but consumed by lust for absolute power, sexual debauchery, and catastrophic infanticide",
    "deedsZh": "宣武帝胡皇后，生孝明帝元诩，废除北魏‘子贵母死’旧制临朝称制；前期亲政崇尚佛法，建奢华绝伦之洛阳永宁寺九级浮屠；后期贪恋大权纵情声色，养男宠清河王元怿、郑俨等人，卖官鬻爵民不聊生；因不满亲子孝明帝试图夺权，竟狠心将其鸩杀，直接引爆尔朱荣河阴之变惨遭沉入黄河溺毙。",
    "deedsEn": "Mother of Emperor Xiaoming; abolished the cruel Northern Wei custom of executing imperial mothers. Reared magnificent Buddhist monuments like the Yongning Pagoda. Later descended into wild debauchery, taking paramours, selling offices, and ultimately poisoning her own 19-year-old son to retain regency, provoking Erzhu Rong's march on Luoyang; she was thrown into the Yellow River to drown.",
    "archetype": "executive",
    "fiveElements": {
      "dominant": "火",
      "secondary": "金"
    },
    "tenGodsAffinity": [
      "伤官",
      "偏印",
      "劫财"
    ],
    "patternType": "伤官见官",
    "strengthAdviceZh": "青年时期聪明果决，敢于直面死亡打破残酷的政治旧习（子贵母死制），展现出极强的生存求胜意志。",
    "strengthAdviceEn": "Courageous and clear-minded in early life; dared to challenge and abolish barbaric court traditions (executing mothers of heirs) through sheer nerve.",
    "weaknessAdviceZh": "丧失人伦底线的极度自私与权力毒瘾！把国家神器当做满足个人淫乐的玩物，甚至下毒谋杀亲子，彻底撕碎一切政治合法性底线，换来沉尸黄河万劫不复。",
    "weaknessAdviceEn": "Absolute moral putrefaction and power addiction! Poisoning her own sovereign son obliterated the final thread of legitimacy, courting immediate drowning in the Yellow River.",
    "historicalQuoteZh": "尔朱荣令骑兵沉太后及幼帝于黄河雷公矶，太后叩头哀呼，不能免，遂溺死。天下称快而痛宗庙之倾覆。",
    "historicalQuoteEn": "Erzhu Rong ordered Empress Dowager Hu and her puppet toddler tossed into the Yellow River at Leigong Rapids. Kowtowing and screaming, she was hurled in to drown; all celebrated her death yet grieved the fallen empire.",
    "auxiliaryStrengthsZh": [
      "青年时期聪明果决",
      "敢于直面死亡打破残酷的政治旧习（子贵母死制），展现出极强的生存求胜意志"
    ],
    "auxiliaryStrengthsEn": [
      "Courageous and clear-minded in early life",
      "dared to challenge and abolish barbaric court traditions (executing mothers of heirs) through sheer nerve"
    ],
    "auxiliaryWeaknessesZh": [
      "丧失人伦底线的极度自私与权力毒瘾",
      "把国家神器当做满足个人淫乐的玩物，甚至下毒谋杀亲子，彻底撕碎一切政治合法性底线，换来沉尸黄河万劫不复"
    ],
    "auxiliaryWeaknessesEn": [
      "Absolute moral putrefaction and power addiction",
      "Poisoning her own sovereign son obliterated the final thread of legitimacy, courting immediate drowning in the Yellow River"
    ]
  },
  {
    "id": "erzhu_rong",
    "nameZh": "尔朱荣",
    "nameEn": "Erzhu Rong",
    "dynastyZh": "北魏",
    "dynastyEn": "Northern Wei",
    "eraTag": "northern_wei",
    "eraNameZh": "北魏风云",
    "eraNameEn": "Northern Wei Dynastic Era",
    "positionZh": "太原王大都督 · 河阴之变溺杀百官的嗜血枭雄",
    "positionEn": "Prince of Taiyuan & Grand Marshal · The Butcher of Heyin Coup",
    "personalityZh": "骁勇绝伦、用兵如神、行刑严苛、手段残暴、政治幼稚",
    "personalityEn": "Fierce combat genius, operational maestro, ruthlessly brutal disciplinarian, yet politically puerile",
    "deedsZh": "契胡部落首领，善养战马骑射；乘北魏六镇之乱与胡太后鸩杀孝明帝之机，率精骑自太原直扑洛阳；在河阴借祭天之名诱骗北魏朝官两千余人尽数屠杀沉入黄河（‘河阴之变’），立孝庄帝元子攸操纵皇权；后遭孝庄帝伏兵诱入明光殿亲手刺杀于御座之前。",
    "deedsEn": "Chieftain of the Qihu nomads. Exploiting the Six Garrisons Rebellion and the Empress's infanticide, he marched horsemen into Luoyang. At Heyin, under guise of imperial sacrifice, he slaughtered over 2,000 top courtiers and tossed them into the river. Installed Emperor Xiaozhuang as puppet; was ambushed and stabbed to death by Xiaozhuang in the throne room.",
    "archetype": "military",
    "fiveElements": {
      "dominant": "金",
      "secondary": "火"
    },
    "tenGodsAffinity": [
      "七杀",
      "羊刃",
      "偏印"
    ],
    "patternType": "羊刃驾杀",
    "strengthAdviceZh": "北朝首屈一指的骑兵大兵团战术统帅！在平定葛荣数十万流民军战役中以七千精骑穿插斩首敌帅，战术想象力与冲击力神鬼莫测。",
    "strengthAdviceEn": "Unequaled master of heavy shock cavalry maneuver warfare! Defeated 300,000 rebel troops with 7,000 elite horsemen through surgical leadership decapitation.",
    "weaknessAdviceZh": "政治智商低下的屠夫悲剧！试图用肉体消灭士大夫阶层的‘河阴之变’彻底自绝于华夏文明体系；入宫骄慢毫无防备，被年轻傀儡皇帝当场诱杀反杀。",
    "weaknessAdviceEn": "A political barbarian who believed mass slaughter could replace legitimacy! Terrifying brutality alienated the entire world; strolled arrogantly into the palace to be gutted by his puppet.",
    "historicalQuoteZh": "荣入朝，庄帝伏兵于明光殿。荣见备，跃起扑帝，帝手持长刀直刺荣胸，应手而毙。宗党随诛，洛阳城中欢声雷动！",
    "historicalQuoteEn": "Entering the throne hall, Emperor Xiaozhuang drew his concealed blade; as Erzhu Rong lunged, the young sovereign drove the blade through his heart, killing him instantly.",
    "auxiliaryStrengthsZh": [
      "北朝首屈一指的骑兵大兵团战术统帅",
      "在平定葛荣数十万流民军战役中以七千精骑穿插斩首敌帅，战术想象力与冲击力神鬼莫测"
    ],
    "auxiliaryStrengthsEn": [
      "Unequaled master of heavy shock cavalry maneuver warfare",
      "Defeated 300,000 rebel troops with 7,000 elite horsemen through surgical leadership decapitation"
    ],
    "auxiliaryWeaknessesZh": [
      "政治智商低下的屠夫悲剧",
      "试图用肉体消灭士大夫阶层的‘河阴之变’彻底自绝于华夏文明体系"
    ],
    "auxiliaryWeaknessesEn": [
      "A political barbarian who believed mass slaughter could replace legitimacy",
      "Terrifying brutality alienated the entire world"
    ]
  },
  {
    "id": "yuan_ziyou",
    "nameZh": "元子攸 (孝庄帝)",
    "nameEn": "Yuan Ziyou (Emperor Xiaozhuang)",
    "dynastyZh": "北魏",
    "dynastyEn": "Northern Wei",
    "eraTag": "northern_wei",
    "eraNameZh": "北魏风云",
    "eraNameEn": "Northern Wei Dynastic Era",
    "positionZh": "北魏孝庄帝 · 亲刃权相尔朱荣的血性天子",
    "positionEn": "Emperor Xiaozhuang of Northern Wei · The Sovereign Who Slain Erzhu Rong",
    "personalityZh": "容貌俊美、风骨峭拔、不甘为偶、舍命诛贼、从容赴死",
    "personalityEn": "Handsome, unbending moral spine, refusing to reign as a voiceless slave, sacrificing life to slay the tyrant",
    "deedsZh": "尔朱荣河阴之变后拥立为帝，实为刀俎上的鱼肉；元子攸不堪权奸践踏皇威，假称皇后生子诱尔朱荣入朝，亲提三尺长刀刺死尔朱荣；后尔朱兆、尔朱世隆领重兵反扑攻陷洛阳，元子攸被俘押往晋阳佛寺绞杀，临刑题诗佛壁从容就义，谥曰武烈。",
    "deedsEn": "Placed on the throne by Erzhu Rong as a captive puppet. Refusing to endure tyranny, faked an imperial birth to summon Erzhu Rong, slaying the warlord with his own hands. When the Erzhu clan counterattacked and captured Luoyang, he was dragged to Jinyang and strangled in a Buddhist cell, leaving immortal defiance poems.",
    "archetype": "executive",
    "fiveElements": {
      "dominant": "金",
      "secondary": "木"
    },
    "tenGodsAffinity": [
      "七杀",
      "正官",
      "正印"
    ],
    "patternType": "杀印相生",
    "strengthAdviceZh": "中国帝王史上罕见的血性男儿！宁为玉碎不为瓦全，绝不甘受权臣凌辱，有亲自拔剑斩杀凶魔的无畏暴烈勇气。",
    "strengthAdviceEn": "A sovereign of incandescent personal courage! Refused to grovel as a captive dog, boldly drawing the blade himself to decapitate the realm's most terrifying butcher.",
    "weaknessAdviceZh": "只长于孤注一掷的宫廷刺杀战术，缺乏刺杀成功后的全国军事防卫体系与军权布局，导致首恶虽除、残部反扑即刻灭顶身死。",
    "weaknessAdviceEn": "Excelled at palace decapitation assassinations but lacked follow-up military contingency plans; eliminating the warlord without securing the armies invited swift annihilation.",
    "historicalQuoteZh": "庄帝临终礼佛，赋诗曰：‘权去人道尽，身亡理亦齐。感物情虽倦，求生愿未迷。’神色怡然，遂就绞。天下闻而悲壮之！",
    "historicalQuoteEn": "Emperor Xiaozhuang bowed to Buddha, inscribed a serene farewell poem, and accepted the garrote with tranquil grace. The realm wept at his tragic chivalry.",
    "auxiliaryStrengthsZh": [
      "中国帝王史上罕见的血性男儿",
      "宁为玉碎不为瓦全，绝不甘受权臣凌辱，有亲自拔剑斩杀凶魔的无畏暴烈勇气"
    ],
    "auxiliaryStrengthsEn": [
      "A sovereign of incandescent personal courage",
      "Refused to grovel as a captive dog, boldly drawing the blade himself to decapitate the realm's most terrifying butcher"
    ],
    "auxiliaryWeaknessesZh": [
      "只长于孤注一掷的宫廷刺杀战术",
      "缺乏刺杀成功后的全国军事防卫体系与军权布局，导致首恶虽除、残部反扑即刻灭顶身死"
    ],
    "auxiliaryWeaknessesEn": [
      "Excelled at palace decapitation assassinations but lacked follow-up military contingency plans",
      "eliminating the warlord without securing the armies invited swift annihilation"
    ]
  },
  {
    "id": "gao_huan",
    "nameZh": "高欢 (神武帝)",
    "nameEn": "Gao Huan (Emperor Shenwu of Northern Qi)",
    "dynastyZh": "北魏 / 东魏 / 北齐",
    "dynastyEn": "Northern Wei / Eastern Wei / Northern Qi",
    "eraTag": "northern_wei",
    "eraNameZh": "东西魏分立",
    "eraNameEn": "Northern Wei Dynastic Era",
    "positionZh": "北齐神武帝 · 借人借势的权谋祖师与东魏奠基人",
    "positionEn": "Emperor Shenwu of Northern Qi · Grand Manipulator & Architect of Eastern Wei",
    "personalityZh": "深谋诡谲、大度容人、善驭群雄、借势借人、战役坚韧",
    "personalityEn": "Machiavellian mastermind, astonishingly generous in forgiving subordinates, master of ethnic balancing and political illusion",
    "deedsZh": "怀朔镇兵出身，早年随尔朱荣，善察大势；尔朱荣死后借统帅河北镇兵之机自立，信都起兵破尔朱兆灭尔朱氏集团；架空孝武帝迁都邺城建立东魏，三度与西魏宇文泰展开邙山、沙苑大决战；玉壁之战苦攻韦孝宽五十天不克忧愤发病，临终唱《敕勒歌》悲壮落幕，为北齐实际奠基人。",
    "deedsEn": "Garrison soldier of Huaishuo; rose under Erzhu Rong. Seized northern troops after Rong's assassination, smashing the Erzhu clan at Hanling. Usurped Eastern Wei at Ye, waging epic clashes against Yuwen Tai at Mangshan and Shayuan. His final siege of Yubi was thwarted by Wei Xiaokuan; wept singing 'Chile Song' before dying, founding the Northern Qi dynasty.",
    "archetype": "executive",
    "fiveElements": {
      "dominant": "土",
      "secondary": "金"
    },
    "tenGodsAffinity": [
      "正官",
      "偏印",
      "偏财"
    ],
    "patternType": "财官双美",
    "strengthAdviceZh": "草根出身操盘天下的顶级政治魔术师！善于用极尽谦卑与慷慨的姿态收服桀骜不驯的鲜卑丘八与汉人士族，把矛盾对立的多方势力玩弄于股掌之间。",
    "strengthAdviceEn": "The ultimate grand political illusionist! Subdued wild nomad warriors and proud Han elites through calculated magnanimity and irresistible charisma.",
    "weaknessAdviceZh": "战役指挥在面对同量级甚至更高级的防守大师（宇文泰、韦孝宽）时缺乏攻坚破局手段；对残暴子孙（高洋高湛）的基因恶性缺乏预判与制约。",
    "weaknessAdviceEn": "Tactical limitations when besieging master defensive generals (Yubi siege broke his health); failed to restrain the manic, sadistic traits of his sons.",
    "historicalQuoteZh": "高欢临终病危，命斛律金唱《敕勒歌》，欢亲自和之：‘敕勒川，阴山下。天似穹庐，笼盖四野。天苍苍，野茫茫，风吹草低见牛羊。’欢流涕呜咽，英雄气绝！",
    "historicalQuoteEn": "Dying in his tent, Gao Huan had Hulü Jin sing 'The Chile Song', weeping as he joined the chorus: 'The sky is boundless, the wilds are vast, winds bend the grasses to reveal our cattle and sheep!' Tears drenched his armor as he expired.",
    "auxiliaryStrengthsZh": [
      "草根出身操盘天下的顶级政治魔术师",
      "善于用极尽谦卑与慷慨的姿态收服桀骜不驯的鲜卑丘八与汉人士族，把矛盾对立的多方势力玩弄于股掌之间"
    ],
    "auxiliaryStrengthsEn": [
      "The ultimate grand political illusionist",
      "Subdued wild nomad warriors and proud Han elites through calculated magnanimity and irresistible charisma"
    ],
    "auxiliaryWeaknessesZh": [
      "战役指挥在面对同量级甚至更高级的防守大师（宇文泰、韦孝宽）时缺乏攻坚破局手段",
      "对残暴子孙（高洋高湛）的基因恶性缺乏预判与制约"
    ],
    "auxiliaryWeaknessesEn": [
      "Tactical limitations when besieging master defensive generals (Yubi siege broke his health)",
      "failed to restrain the manic, sadistic traits of his sons"
    ]
  },
  {
    "id": "yuwen_tai",
    "nameZh": "宇文泰 (周文帝)",
    "nameEn": "Yuwen Tai (Emperor Wen of Northern Zhou)",
    "dynastyZh": "西魏 / 北周",
    "dynastyEn": "Western Wei / Northern Zhou",
    "eraTag": "northern_wei",
    "eraNameZh": "东西魏分立",
    "eraNameEn": "Northern Wei Dynastic Era",
    "positionZh": "西魏太师 · 八柱国府兵制与隋唐盛世制度总源头",
    "positionEn": "Grand Chancellor of Western Wei · Founding Architect of Guanzhong System & Sui-Tang Blueprint",
    "personalityZh": "雄深大略、崇实尚贤、深谋远虑、制度巨匠、以弱胜强",
    "personalityEn": "Profound visionary, champion of meritocracy, strategic genius who created institutions that outlasted all rivals",
    "deedsZh": "武川镇鲜卑化匈奴贵族，贺拔岳遇刺后受推为统帅，据有关陇；迎北魏孝武帝建立西魏；面对兵力数倍于己的高欢东魏大军，沙苑之战以少胜多歼敌数万；创立‘八柱国十二大将军’构筑关陇门阀集团，首创‘府兵制’，任用苏绰推行‘六条诏书’整饬吏治；奠定北周灭齐、大隋一统与大唐盛世的三百年制度总源头。",
    "deedsEn": "Wuchuan frontier commander. Welcomed Emperor Xiaowu to Chang'an, establishing Western Wei. Facing Gao Huan's overwhelming army, lured them into reed marshes at Shayuan, shattering them with inferior numbers. Created the 'Eight Pillar States and Twelve Generals' (Guanlong Group), invented the Fubing militia system, and implemented Su Chuo's Six Edicts, founding the legal and military DNA of the Sui and Tang empires.",
    "archetype": "executive",
    "fiveElements": {
      "dominant": "金",
      "secondary": "水"
    },
    "tenGodsAffinity": [
      "正官",
      "正印",
      "七杀"
    ],
    "patternType": "杀印相生",
    "strengthAdviceZh": "中国历史上最伟大的制度工程大师之一！不计较一城一地之得失，懂得用全新的军事激励（府兵制）与政治共同体（八柱国关陇集团）重塑生产关系，以弱胜强实现历史大逆转。",
    "strengthAdviceEn": "One of the towering institutional engineers in world history! Reshaped the fundamental social contract via the Fubing military system and Guanzhong elite covenant, turning an impoverished state into an unstoppable juggernaut.",
    "weaknessAdviceZh": "临终诸子年幼，无奈将摄政大权移交心狠手辣的侄子宇文护，导致西魏北周政局陷入长达十几年的弑君内耗血腥阴影。",
    "weaknessAdviceEn": "Died leaving young sons, forced to pass regency to his ruthless nephew Yuwen Hu, plunging Northern Zhou into years of fratricidal palace assassinations.",
    "historicalQuoteZh": "泰雅好儒术，礼遇苏绰，制六条诏书以革旧弊。沙苑之捷，泰以轻骑出芦苇中，短兵接战，破欢二十万大军，神机天纵！",
    "historicalQuoteEn": "Book of Zhou: Yuwen Tai cherished classical statecraft. At Shayuan, charging from dense reeds with light cavalry, he smashed Gao Huan's 200,000 men in close-quarters combat.",
    "auxiliaryStrengthsZh": [
      "中国历史上最伟大的制度工程大师之一",
      "不计较一城一地之得失，懂得用全新的军事激励（府兵制）与政治共同体（八柱国关陇集团）重塑生产关系，以弱胜强实现历史大逆转"
    ],
    "auxiliaryStrengthsEn": [
      "One of the towering institutional engineers in world history",
      "Reshaped the fundamental social contract via the Fubing military system and Guanzhong elite covenant, turning an impoverished state into an unstoppable juggernaut"
    ],
    "auxiliaryWeaknessesZh": [
      "临终诸子年幼",
      "无奈将摄政大权移交心狠手辣的侄子宇文护，导致西魏北周政局陷入长达十几年的弑君内耗血腥阴影"
    ],
    "auxiliaryWeaknessesEn": [
      "Died leaving young sons",
      "forced to pass regency to his ruthless nephew Yuwen Hu, plunging Northern Zhou into years of fratricidal palace assassinations"
    ]
  },
  {
    "id": "su_chuo",
    "nameZh": "苏绰",
    "nameEn": "Su Chuo",
    "dynastyZh": "西魏",
    "dynastyEn": "Western Wei",
    "eraTag": "northern_wei",
    "eraNameZh": "西魏改制",
    "eraNameEn": "Northern Wei Dynastic Era",
    "positionZh": "大行台左丞 · 撰写六条诏书的财税制度圣手",
    "positionEn": "Minister of State Secretariat · Author of the Six Edicts & Fiscal Titan",
    "personalityZh": "博洽深敏、恪尽职守、公忠体国、积劳成疾、制度规划大师",
    "personalityEn": "Erudite, tirelessly diligent, totally devoted to public welfare, institutional budgeting mastermind",
    "deedsZh": "京兆武功人，精通经史算数；得宇文泰赏识昼夜论道，主持西魏财政民政大改制；撰《六条诏书》（先治心、敦教化、尽地利、豁贤良、恤狱讼、均赋役）成为西魏北周官员座右铭；首创‘朱出墨入’会计记账制度沿用至今；鞠躬尽瘁年仅四十九岁呕血卒于任上，宇文泰痛哭‘天何夺我苏绰之速！’。",
    "deedsEn": "Master of mathematics and history. Debated with Yuwen Tai overnight; tasked with reforming Western Wei's shattered fiscal machinery. Authored the seminal 'Six Imperial Edicts' reforming bureaucratic ethics, tax equity, and agricultural output. Invented red-and-black double-entry bookkeeping still used today. Died of overwork at 49; Yuwen Tai wept inconsolably.",
    "archetype": "civil",
    "fiveElements": {
      "dominant": "水",
      "secondary": "土"
    },
    "tenGodsAffinity": [
      "正财",
      "正官",
      "正印"
    ],
    "patternType": "财官双美",
    "strengthAdviceZh": "天下第一等的财税规划与行政制度标准化大师！善于用严密的数学逻辑与流程规范，把一盘散沙的落后体制打造成高效精密的国家运转机器。",
    "strengthAdviceEn": "The ultimate titan of public finance, budgeting, and administrative standardization! Replaced chaos with algorithmic fiscal discipline.",
    "weaknessAdviceZh": "典型的‘蜡炬成灰泪始干’！把所有的生命能量过度倾注在无穷无尽的工作流中，缺乏对自身生理肉体的休息保护，中年早逝成为体制的巨大损失。",
    "weaknessAdviceEn": "Burned his physical vessel to ash in relentless overwork; absolute self-sacrifice without bodily boundary cost the empire its brightest administrative light.",
    "historicalQuoteZh": "绰性俭素，不治家产，深识治理。及死，宇文泰亲临其丧，流涕痛惜曰：‘尚书度量宏达，忠规亮节，天何夺我栋梁之早也！’",
    "historicalQuoteEn": "Book of Zhou: Su Chuo owned no private riches. When he died, Yuwen Tai wept at his casket: 'Heaven takes my pillar of state so young!'",
    "auxiliaryStrengthsZh": [
      "天下第一等的财税规划与行政制度标准化大师",
      "善于用严密的数学逻辑与流程规范，把一盘散沙的落后体制打造成高效精密的国家运转机器"
    ],
    "auxiliaryStrengthsEn": [
      "The ultimate titan of public finance, budgeting, and administrative standardization",
      "Replaced chaos with algorithmic fiscal discipline"
    ],
    "auxiliaryWeaknessesZh": [
      "典型的‘蜡炬成灰泪始干’",
      "把所有的生命能量过度倾注在无穷无尽的工作流中，缺乏对自身生理肉体的休息保护，中年早逝成为体制的巨大损失"
    ],
    "auxiliaryWeaknessesEn": [
      "Burned his physical vessel to ash in relentless overwork",
      "absolute self-sacrifice without bodily boundary cost the empire its brightest administrative light"
    ]
  },
  {
    "id": "haba_yue",
    "nameZh": "贺拔岳",
    "nameEn": "Haba Yue",
    "dynastyZh": "北魏 / 关陇先驱",
    "dynastyEn": "Northern Wei / Western Vanguard",
    "eraTag": "northern_wei",
    "eraNameZh": "关陇先驱",
    "eraNameEn": "Northern Wei Dynastic Era",
    "positionZh": "都督关西诸军事 · 关陇军事集团的第一位真正开拓者",
    "positionEn": "Commander-in-Chief of Western Military · Forefather of Guanlong Vanguard",
    "personalityZh": "沉毅果敢、善于驭军、勇烈服人、轻信小人惨遭刺杀",
    "personalityEn": "Resolute, charismatic cavalry general, adored by warriors, yet fatally gullible to traitorous assassination plots",
    "deedsZh": "敕勒族名将，随尔朱荣征战有大功；受命西征平定万俟丑奴盘踞之关陇，镇抚西北，麾下聚拢宇文泰、李虎、独孤信等八柱国班底；高欢深忌其威名，密令侯莫陈悦诱骗贺拔岳至河曲营帐密谈，突施暗算将贺拔岳刺杀于马前，死后部属推举宇文泰继承遗志。",
    "deedsEn": "Noble cavalry commander under Erzhu Rong. Pacified the rugged Guanzhong region, gathering under his wing the future eight pillar families (Yuwen Tai, Li Hu, Dugu Xin). Gao Huan feared his rising stature and bribed Houmochen Yue to ambush and assassinate Haba Yue in a diplomatic tent.",
    "archetype": "military",
    "fiveElements": {
      "dominant": "金",
      "secondary": "土"
    },
    "tenGodsAffinity": [
      "七杀",
      "比肩",
      "正印"
    ],
    "patternType": "建禄格",
    "strengthAdviceZh": "卓越的开拓型大区领袖！具备在陌生地理板块快速平乱、网罗顶级核心人才建立班底的巨大向心力与军事魄力。",
    "strengthAdviceEn": "Exceptional frontier expansion leader; possessed magnetic gravity to rally top-tier talent and pacify rugged territory.",
    "weaknessAdviceZh": "在凶险万状的军阀角力中极度缺乏单刀赴会的防谍安保机制！在毫无戒备的情况下轻入他人营盘，葬送了自己的大好前程与生命。",
    "weaknessAdviceEn": "Fatal blindspot in personal VIP security! Strolled into a rival commander's tent without personal bodyguards, falling victim to crude assassination.",
    "historicalQuoteZh": "岳勇武多奇略，士卒乐为之死。及入侯莫陈悦营，悦诱岳入幕，使人刺杀之。三军闻之，号哭动地，宇文泰奔丧誓报其仇！",
    "historicalQuoteEn": "Book of Zhou: Haba Yue was fearless and deeply beloved by his ranks. When Houmochen Yue assassinated him, soldiers wept so loudly the hills shook; Yuwen Tai swore vengeance.",
    "auxiliaryStrengthsZh": [
      "卓越的开拓型大区领袖",
      "具备在陌生地理板块快速平乱、网罗顶级核心人才建立班底的巨大向心力与军事魄力"
    ],
    "auxiliaryStrengthsEn": [
      "Exceptional frontier expansion leader",
      "possessed magnetic gravity to rally top-tier talent and pacify rugged territory"
    ],
    "auxiliaryWeaknessesZh": [
      "在凶险万状的军阀角力中极度缺乏单刀赴会的防谍安保机制",
      "在毫无戒备的情况下轻入他人营盘，葬送了自己的大好前程与生命"
    ],
    "auxiliaryWeaknessesEn": [
      "Fatal blindspot in personal VIP security",
      "Strolled into a rival commander's tent without personal bodyguards, falling victim to crude assassination"
    ]
  },
  {
    "id": "jia_sixie",
    "nameZh": "贾思勰",
    "nameEn": "Jia Sixie",
    "dynastyZh": "北魏",
    "dynastyEn": "Northern Wei",
    "eraTag": "northern_wei",
    "eraNameZh": "北魏农学",
    "eraNameEn": "Northern Wei Dynastic Era",
    "positionZh": "高阳太守 · 著《齐民要术》的中国古代农学之父",
    "positionEn": "Governor of Gaoyang · Author of 'Qimin Yaoshu' & Father of Chinese Agronomy",
    "personalityZh": "务实求真、躬耕田野、严谨细致、造福民生、万世法式",
    "personalityEn": "Grounded empiricist, hands-on field scientist, scrupulously detailed, prioritizing civilian sustenance over empty court honors",
    "deedsZh": "北魏齐郡益都人，曾任高阳太守；深感农本对天下安危之重，辞官后系统整理民间农业经验，深入田间地头实地调研数十年；著成中国现存最早最完整的巨著《齐民要术》，涵盖耕种、育种、农具、酿造、储藏等全套农工科技，为中华农耕文明确立万世法式。",
    "deedsEn": "Magistrate of Gaoyang. Believing agriculture was the bedrock of societal survival, spent decades conducting empirical fieldwork. Authored 'Qimin Yaoshu' (Essential Techniques for the Peasantry), the earliest and most comprehensive agricultural and bio-fermentation encyclopedia in Chinese history.",
    "archetype": "specialist",
    "fiveElements": {
      "dominant": "土",
      "secondary": "水"
    },
    "tenGodsAffinity": [
      "食神",
      "偏印",
      "正财"
    ],
    "patternType": "食神生财",
    "strengthAdviceZh": "脚踏实地与经验科学归纳的绝顶宗师！不务虚名、不慕虚荣，用毕生心血将底层劳动人民的生产实践升华为系统科学，荫庇万代黎民。",
    "strengthAdviceEn": "The supreme master of empirical science and practical knowledge synthesis! Sublimated peasant field wisdom into an eternal scientific system that fed civilization for millennia.",
    "weaknessAdviceZh": "在讲究门阀声望与军功厮杀的南北乱世，其伟大学术成果在当时未能获得最高统治阶层足够的政治封赏，属于死后流芳万古的寂寞潜龙。",
    "weaknessAdviceEn": "Unappreciated in an age obsessed with violent butchery and noble pedigrees; a lonely sage whose monumental value emerged posthumously.",
    "historicalQuoteZh": "思勰自序曰：‘采捃经传，爰及歌谣，询之老成，验之行事，起自耕农，终于醯醢，资生之业，靡不毕书。’实万代农耕之宝典！",
    "historicalQuoteEn": "Jia Sixie wrote in his preface: 'Gathered from ancient canons, tested against folk songs, questioned of elders, verified in fields—recording everything essential to human survival.'",
    "auxiliaryStrengthsZh": [
      "脚踏实地与经验科学归纳的绝顶宗师",
      "不务虚名、不慕虚荣，用毕生心血将底层劳动人民的生产实践升华为系统科学，荫庇万代黎民"
    ],
    "auxiliaryStrengthsEn": [
      "The supreme master of empirical science and practical knowledge synthesis",
      "Sublimated peasant field wisdom into an eternal scientific system that fed civilization for millennia"
    ],
    "auxiliaryWeaknessesZh": [
      "在讲究门阀声望与军功厮杀的南北乱世",
      "其伟大学术成果在当时未能获得最高统治阶层足够的政治封赏，属于死后流芳万古的寂寞潜龙"
    ],
    "auxiliaryWeaknessesEn": [
      "Unappreciated in an age obsessed with violent butchery and noble pedigrees",
      "a lonely sage whose monumental value emerged posthumously"
    ]
  },
  {
    "id": "li_daoyuan",
    "nameZh": "郦道元",
    "nameEn": "Li Daoyuan",
    "dynastyZh": "北魏",
    "dynastyEn": "Northern Wei",
    "eraTag": "northern_wei",
    "eraNameZh": "北魏地理",
    "eraNameEn": "Northern Wei Dynastic Era",
    "positionZh": "御史中尉 · 著《水经注》的刚正地理学宗师",
    "positionEn": "Imperial Censor & Polymath · Author of 'Shui Jing Zhu' & Fearless Magistrate",
    "personalityZh": "严猛刚烈、执法不阿、踏遍山川、文采斐然、宁折不弯",
    "personalityEn": "Fiercely upright, incorruptible judge who defied royalty, tireless explorer with immortal literary elegance, unbending unto death",
    "deedsZh": "北魏官员兼地理学家，官任御史中尉行法严峻，王公贵戚皆侧目避道；走遍北方江河源流，撰写四十卷三十万字地理名著《水经注》，不仅记录千余河流水道，更融汇历史古迹与优美游记文学；后因得罪汝南王元悦，遭其借汝南叛变借刀杀人派往抚谕，被叛军围于阴盘驿力战不屈遇害。",
    "deedsEn": "Imperial Censor famed for unbending justice; princes feared his gaze in court corridors. Traversed the river valleys of China to author the landmark 40-volume 'Shui Jing Zhu' (Commentary on the Water Classic). Framed by vindictive imperial princes who dispatched him without troops to pacify armed rebels, dying in a besieged post house.",
    "archetype": "specialist",
    "fiveElements": {
      "dominant": "水",
      "secondary": "金"
    },
    "tenGodsAffinity": [
      "正官",
      "伤官",
      "偏印"
    ],
    "patternType": "伤官用印",
    "strengthAdviceZh": "将严谨的科学地理调查与第一等绝美写景散文完美交融的旷世奇才！行事刚直不阿，对正义法度有着殉道式的执着坚守。",
    "strengthAdviceEn": "Miraculous synthesis of rigorous geographical field exploration and breathtaking literary prose! An incorruptible pillar of uncompromising justice.",
    "weaknessAdviceZh": "刚硬过甚而不知迂回保身！在门阀贵胄密织的暗流中过分锋芒毕露，明知被政敌借刀杀人仍固执前往而无防备预案，壮志未酬惨遭暗算。",
    "weaknessAdviceEn": "Tragic inflexibility; flaunted righteousness so aggressively against royal mafias that he walked into their transparent death trap without defensive countermeasures.",
    "historicalQuoteZh": "道元执法严猛，豪戚震惮。临难被围，井泉已竭，道元神色不挠，与二子力战俱死。所著《水经注》，山水文学之冠冕也。",
    "historicalQuoteEn": "Book of Wei: Li Daoyuan enforced laws without mercy. Encircled by rebels with wells dry, he fought alongside his sons to the last breath; his 'Shui Jing Zhu' remains the eternal crown of Chinese travel literature.",
    "auxiliaryStrengthsZh": [
      "将严谨的科学地理调查与第一等绝美写景散文完美交融的旷世奇才",
      "行事刚直不阿，对正义法度有着殉道式的执着坚守"
    ],
    "auxiliaryStrengthsEn": [
      "Miraculous synthesis of rigorous geographical field exploration and breathtaking literary prose",
      "An incorruptible pillar of uncompromising justice"
    ],
    "auxiliaryWeaknessesZh": [
      "刚硬过甚而不知迂回保身",
      "在门阀贵胄密织的暗流中过分锋芒毕露，明知被政敌借刀杀人仍固执前往而无防备预案，壮志未酬惨遭暗算"
    ],
    "auxiliaryWeaknessesEn": [
      "Tragic inflexibility",
      "flaunted righteousness so aggressively against royal mafias that he walked into their transparent death trap without defensive countermeasures"
    ]
  },
  {
    "id": "gao_cheng",
    "nameZh": "高澄 (文襄帝)",
    "nameEn": "Gao Cheng (Emperor Wenxiang of Northern Qi)",
    "dynastyZh": "东魏 / 北齐",
    "dynastyEn": "Eastern Wei / Northern Qi",
    "eraTag": "northern_zhou_qi",
    "eraNameZh": "周齐对峙",
    "eraNameEn": "Northern Zhou & Qi Era",
    "positionZh": "东魏大将军齐王 · 登基前夕被刺的俊美权臣",
    "positionEn": "Grand General of Eastern Wei · The Assassinated Prince",
    "personalityZh": "敏悟明断、容貌绝美、政务机敏、骄狂放纵、防备疏漏",
    "personalityEn": "Razor-sharp administrative intelligence, drop-dead gorgeous looks, dynamic executive, yet arrogant and disastrously careless",
    "deedsZh": "高欢长子，自幼辅政，平侯景叛乱、夺南梁江淮之地，整顿东魏吏治雷厉风行；二十八岁受封齐王，逼东魏孝静帝禅位在即；然行事骄横轻狂，当众殴打皇帝并辱骂厨师兰京；在密室与心腹商议受禅即位前夕，遭贴身厨师兰京藏刀于盘中突袭刺死，年仅二十八岁，白白将称帝荣光让与二弟高洋。",
    "deedsEn": "Eldest son of Gao Huan. A brilliant political prodigy who restored fiscal order and reclaimed Huainan. At age 28, was poised to depose the emperor and crown himself. Yet haughtily abused his servants and slapped an enslaved palace cook, Lan Jing. On the eve of his coronation, Lan Jing smuggled a dagger inside a dinner platter and hacked him to death.",
    "archetype": "executive",
    "fiveElements": {
      "dominant": "金",
      "secondary": "火"
    },
    "tenGodsAffinity": [
      "七杀",
      "伤官",
      "偏财"
    ],
    "patternType": "伤官见官",
    "strengthAdviceZh": "极其出色的青年政治家！业务处置能力与整肃官场风气雷厉风行，具备极高的执政效率与战略决断力。",
    "strengthAdviceEn": "Astonishingly brilliant young statesman! Overhauled civil administration and crushed rebellions with terrifying executive efficiency.",
    "weaknessAdviceZh": "对身边弱小群体的侮辱与安全防卫的惊人松懈！习惯性羞辱家仆下人而不加防范，在密谋绝密政务时撤掉护卫，最终死于一个小厨师的反杀刀下，千古警钟！",
    "weaknessAdviceEn": "The ultimate warning on abusing underlings and catastrophic security negligence! Deriding servants while dismissing palace guards invited an enslaved cook to slit his throat on coronation eve.",
    "historicalQuoteZh": "澄好声色，自负才智，辱其庖人兰京。京与党作乱，进食，藏刀于盘。澄惊跃，投于床下，被刺数十刃而亡，年二十八。",
    "historicalQuoteEn": "Book of Northern Qi: Gao Cheng loved luxury and prided himself on intellect, yet abused his cook Lan Jing. Bringing in dinner, Lan Jing withdrew a blade from the platter, cornering Gao Cheng under the bed and stabbing him to death at age 28.",
    "auxiliaryStrengthsZh": [
      "极其出色的青年政治家",
      "业务处置能力与整肃官场风气雷厉风行，具备极高的执政效率与战略决断力"
    ],
    "auxiliaryStrengthsEn": [
      "Astonishingly brilliant young statesman",
      "Overhauled civil administration and crushed rebellions with terrifying executive efficiency"
    ],
    "auxiliaryWeaknessesZh": [
      "对身边弱小群体的侮辱与安全防卫的惊人松懈",
      "习惯性羞辱家仆下人而不加防范，在密谋绝密政务时撤掉护卫，最终死于一个小厨师的反杀刀下，千古警钟"
    ],
    "auxiliaryWeaknessesEn": [
      "The ultimate warning on abusing underlings and catastrophic security negligence",
      "Deriding servants while dismissing palace guards invited an enslaved cook to slit his throat on coronation eve"
    ]
  },
  {
    "id": "gao_yang",
    "nameZh": "高洋 (文宣帝)",
    "nameEn": "Gao Yang (Emperor Wenxuan of Northern Qi)",
    "dynastyZh": "北齐",
    "dynastyEn": "Northern Qi",
    "eraTag": "northern_zhou_qi",
    "eraNameZh": "周齐对峙",
    "eraNameEn": "Northern Zhou & Qi Era",
    "positionZh": "北齐文宣帝 · 一半英武天子一半癫狂恶魔",
    "positionEn": "Emperor Wenxuan of Northern Qi · The Half-Hero, Half-Demon Sovereign",
    "personalityZh": "前半生装疯卖傻大智若愚、亲征破柔然契丹如神，后半生酗酒癫狂残虐嗜杀",
    "personalityEn": "Pretended madness in youth to conceal genius; conquered northern steppe hordes in brilliance, before descending into unhinged alcoholic butchery",
    "deedsZh": "高欢次子，自幼其貌不扬装痴卖呆；兄高澄遇刺后一跃而起从容平乱，代东魏称帝建立北齐；在位前期励精图治，修长城四千里，亲率大军大破柔然、契丹、突厥，降突厥为臣号‘英雄天子’；后期患精神癔症彻底发疯，终日酗酒裸奔街市，亲手肢解杀害宠妃薛嫔并将其腿骨制成琵琶弹唱，滥杀宗室百官，三十四岁暴亡。",
    "deedsEn": "Second son of Gao Huan. Played dumb for decades to avoid family purges. When brother Gao Cheng was murdered, instantly seized command, deposed the emperor, and founded Northern Qi. Early reign was glorious: crushed Rouran and Khitans, hailed as 'Hero Emperor'. Late reign descended into psychotic madness: ran naked in snowstorms, hacked his beloved consort to pieces to fashion a lute from her femur, dying at 34 of alcohol poisoning.",
    "archetype": "executive",
    "fiveElements": {
      "dominant": "火",
      "secondary": "金"
    },
    "tenGodsAffinity": [
      "伤官",
      "七杀",
      "偏印"
    ],
    "patternType": "专旺格",
    "strengthAdviceZh": "神级的前期隐忍与军事统帅爆发力！能在极端残酷的夺嫡环境中完美伪装隐藏獠牙，一旦掌权雷霆出击横扫大漠强敌。",
    "strengthAdviceEn": "Superhuman patience in hiding his genius behind a facade of idiot buffoonery; erupted with titanic military ferocity to dominate the Eurasian steppes upon accession.",
    "weaknessAdviceZh": "精神心智失控与酗酒狂暴的终极恶果！成功后失去敬畏与自律，被颅内神经狂躁与酒精彻底吞噬，将英雄盛世异化为人间魔窟。",
    "weaknessAdviceEn": "Absolute self-annihilation through psychosis and unrestrained hedonism! Surrendering self-control to alcohol turned a golden empire into an abattoir.",
    "historicalQuoteZh": "洋后酗酒狂暴，剖薛嫔之尸，出其股骨以为琵琶，自弹而泣曰：‘佳人难再得！’群臣见者无不毛骨悚然。",
    "historicalQuoteEn": "Book of Northern Qi: Emperor Wenxuan butchered his beloved Consort Xue in a drunken fit, fashioning a lute from her thigh bone, weeping while strumming: 'A peerless beauty never to return!' Courtiers shuddered in cold horror.",
    "auxiliaryStrengthsZh": [
      "神级的前期隐忍与军事统帅爆发力",
      "能在极端残酷的夺嫡环境中完美伪装隐藏獠牙，一旦掌权雷霆出击横扫大漠强敌"
    ],
    "auxiliaryStrengthsEn": [
      "Superhuman patience in hiding his genius behind a facade of idiot buffoonery",
      "erupted with titanic military ferocity to dominate the Eurasian steppes upon accession"
    ],
    "auxiliaryWeaknessesZh": [
      "精神心智失控与酗酒狂暴的终极恶果",
      "成功后失去敬畏与自律，被颅内神经狂躁与酒精彻底吞噬，将英雄盛世异化为人间魔窟"
    ],
    "auxiliaryWeaknessesEn": [
      "Absolute self-annihilation through psychosis and unrestrained hedonism",
      "Surrendering self-control to alcohol turned a golden empire into an abattoir"
    ]
  },
  {
    "id": "gao_changgong",
    "nameZh": "高长恭 (兰陵王)",
    "nameEn": "Gao Changgong (Prince of Lanling)",
    "dynastyZh": "北齐",
    "dynastyEn": "Northern Qi",
    "eraTag": "northern_zhou_qi",
    "eraNameZh": "周齐对峙",
    "eraNameEn": "Northern Zhou & Qi Era",
    "positionZh": "兰陵武王 · 面具战神与千古英豪",
    "positionEn": "Prince of Lanling · The Masked God of War",
    "personalityZh": "温良敦厚、貌美心善、勇冠三军、谦逊退让、兰陵王入阵曲",
    "personalityEn": "Gentle, dazzlingly handsome like a woman, fighting masked to terrify enemies, modest and benevolent, victim of imperial jealousy",
    "deedsZh": "高澄第四子，因貌美如妇人临阵常戴狰狞面具破敌；邙山之战率五百精骑孤军突入北周重围直达洛阳金墉城下，城上军民见其免胄露出俊容欢呼雷动，遂大破北周军，将士作千古名曲《兰陵王入阵曲》；战功太盛遭北齐后主高纬猜忌，叹‘家事即国事’惹祸，饮鸠毒酒从容自尽，年仅三十二岁。",
    "deedsEn": "Fourth son of Gao Cheng. Possessed such exquisite feminine beauty he wore a terrifying demonic mask into battle. At the Siege of Luoyang, led 500 elite horsemen to pierce Northern Zhou's encirclement; lifting his mask at the fortress gate, defenders cheered, routing the besiegers. Honored by the immortal composition 'Prince of Lanling Entering the Battle'. Murdered with poison at 32 by his paranoid cousin Emperor Gao Wei.",
    "archetype": "military",
    "fiveElements": {
      "dominant": "金",
      "secondary": "水"
    },
    "tenGodsAffinity": [
      "七杀",
      "食神",
      "正印"
    ],
    "patternType": "杀印相生",
    "strengthAdviceZh": "卓越的人格魅力与战役突击艺术！身先士卒勇猛盖世，对待部属宽厚仁慈（得一瓜必与将士分食），深受军民崇敬。",
    "strengthAdviceEn": "Hypnotic battlefield aura and tactical vanguard genius; shared every fruit with foot soldiers, commanding boundless adoration.",
    "weaknessAdviceZh": "在猜忌成狂的末代昏暴王朝中缺乏深层政治自保防线！在皇帝面前说错话（‘国事即家事’）触碰皇权敏感死穴，在明知被忌恨时未能果断装病交权或起兵自保。",
    "weaknessAdviceEn": "Fatal slip of the tongue in an insecure tyrant's court ('National affairs are my family affairs') triggered his execution; lacked ruthless survival autonomy.",
    "historicalQuoteZh": "后主赐毒酒，长恭谓妻郑氏曰：‘我忠以事上，何辜于天，而遭鸩也！’妻曰：‘何不求见？’长恭曰：‘天颜何由可见！’遂饮药而薨。",
    "historicalQuoteEn": "When poison arrived from the throne, Gao Changgong wept to his wife: 'I served with absolute loyalty, how have I offended Heaven?!' Drinking the cup, he died at 32.",
    "auxiliaryStrengthsZh": [
      "卓越的人格魅力与战役突击艺术",
      "身先士卒勇猛盖世，对待部属宽厚仁慈（得一瓜必与将士分食），深受军民崇敬"
    ],
    "auxiliaryStrengthsEn": [
      "Hypnotic battlefield aura and tactical vanguard genius",
      "shared every fruit with foot soldiers, commanding boundless adoration"
    ],
    "auxiliaryWeaknessesZh": [
      "在猜忌成狂的末代昏暴王朝中缺乏深层政治自保防线",
      "在皇帝面前说错话（‘国事即家事’）触碰皇权敏感死穴，在明知被忌恨时未能果断装病交权或起兵自保"
    ],
    "auxiliaryWeaknessesEn": [
      "Fatal slip of the tongue in an insecure tyrant's court ('National affairs are my family affairs') triggered his execution",
      "lacked ruthless survival autonomy"
    ]
  },
  {
    "id": "hulu_guang",
    "nameZh": "斛律光",
    "nameEn": "Hu Lü Guang",
    "dynastyZh": "北齐",
    "dynastyEn": "Northern Qi",
    "eraTag": "northern_zhou_qi",
    "eraNameZh": "周齐对峙",
    "eraNameEn": "Northern Zhou & Qi Era",
    "positionZh": "左丞相咸阳王 · 落雕都督与北齐最后万里长城",
    "positionEn": "Grand Chancellor & Prince of Xianyang · The Eagle-Shooting Commander",
    "personalityZh": "性沉重刚直、善骑射一箭落雕、治军严整、战无不胜、不涉私利",
    "personalityEn": "Stoic, incorruptible, famed for shooting diving eagles with a single arrow, undefeated general, strictly detached from court corruption",
    "deedsZh": "敕勒族名将，北齐第一军事支柱；曾射落高空大雕号‘落雕都督’；治军秋毫无犯，对阵北周军百战不殆，屡次击溃宇文邕与韦孝宽东侵；因刚直不阿深恶奸臣祖珽、穆提婆，韦孝宽利用反间计在邺城散布童谣‘百升飞上天，明月照长安’，昏君高纬中计，诱斛律光入凉风堂用弓弦勒杀，北齐长城自毁，数年后北齐亡国。",
    "deedsEn": "Chieftain general; supreme defensive shield of Northern Qi. Famed for shooting double eagles out of the clouds with a single bowstring. Maintained an unblemished record against Northern Zhou invaders. Despised corrupt eunuchs. Warlord Wei Xiaokuan planted a destabilizing nursery rhyme ('A bushel flies into heaven, the bright moon illuminates Chang'an'—punning on Guang's courtesy name). Foolish sovereign Gao Wei fell into the trap, strangling his protector with a bowstring.",
    "archetype": "military",
    "fiveElements": {
      "dominant": "金",
      "secondary": "木"
    },
    "tenGodsAffinity": [
      "正官",
      "七杀",
      "比肩"
    ],
    "patternType": "建禄格",
    "strengthAdviceZh": "北朝纯军事专业主义的最高峰！一生治军严肃秋毫无犯，在战场上是让所有对手绝望的铜墙铁壁。",
    "strengthAdviceEn": "The gold standard of pure professional military competence! An immovable iron fortress who never lost a field battle against rival superpowers.",
    "weaknessAdviceZh": "极其拙劣的政治宫斗情商！对皇帝身边的贴身佞幸（祖珽）公开羞辱甚至扬言杀之，却未先发制人，反给对方充足时间炮制反间计致死。",
    "weaknessAdviceEn": "Disastrous court political intelligence; openly insulted ruthless palace sycophants without striking first, leaving them ample runway to orchestrate his murder.",
    "historicalQuoteZh": "光被诱入凉风堂，壮士自后引弓弦勒杀之。后主发诏诬其谋反。北周武帝闻光死，大喜下诏大赦，亲提大军平灭北齐！",
    "historicalQuoteEn": "Lured into a palace pavilion, assassins choked Hulü Guang with a bowstring. Hearing the news, Emperor Wu of Northern Zhou danced with joy, declaring an imperial amnesty and marching to annex Northern Qi!",
    "auxiliaryStrengthsZh": [
      "治军严明秋毫无犯：恪守军纪以铁血威望统帅三军，身先士卒铸就无懈可击的阵地防御",
      "战术敏锐神射克敌：落雕都督箭无虚发，战场战术嗅觉极度敏锐，多次击溃北周重兵侵犯"
    ],
    "auxiliaryStrengthsEn": [
      "Ironclad Command Discipline: Enforces pristine military ethics with zero extortion, forging an unshakeable defensive bastion.",
      "Supreme Battlefield Tactical Intuition: Renowned for legendary archery and battlefield composure, repeatedly crushing superior invasion forces."
    ],
    "auxiliaryWeaknessesZh": [
      "政治情商极度拙劣：对皇帝宠信的佞幸（祖珽）公开当面羞辱甚至扬言杀之，树敌过早且全无防备",
      "缺乏自保反制后手：空放狠话让对手有充裕时间炮制反间童谣，身处猜忌漩涡毫无退路终致长城自毁"
    ],
    "auxiliaryWeaknessesEn": [
      "Disastrous Courtroom Naivety: Publicly insulted and threatened ruthless court sycophants without striking first or securing defense networks.",
      "Zero Self-Preservation Safeguards: Allowed schemers ample runway to forge treacherous nursery rhymes, walking into palace traps unarmed."
    ]
  },
  {
    "id": "gao_wei",
    "nameZh": "高纬 (北齐后主)",
    "nameEn": "Gao Wei (Later Ruler of Northern Qi)",
    "dynastyZh": "北齐",
    "dynastyEn": "Northern Qi",
    "eraTag": "northern_zhou_qi",
    "eraNameZh": "周齐对峙",
    "eraNameEn": "Northern Zhou & Qi Era",
    "positionZh": "北齐后主 · 荒唐自毁长城的无愁天子",
    "positionEn": "Later Ruler of Northern Qi · The 'Carefree Emperor' Who Strangled His Realm",
    "personalityZh": "荒淫昏聩、怯懦猜忌、视国政如儿戏、自弹琵琶号无愁天子",
    "personalityEn": "Decadent, cowardly, paranoid, playing the lute while his empire burned, calling himself the Carefree Son of Heaven",
    "deedsZh": "北齐末代皇帝，在位时荒淫无道，宠信奸佞穆提婆、高阿那肱与妖妃冯小怜；自谱琵琶曲自唱，宫中百人群和号‘无愁天子’；自毁长城鸩杀兰陵王、勒死斛律光；周武帝大军克晋州，高纬为看冯小怜梳妆延误战机致全军大溃；后仓皇禅位逃跑被俘，押往长安被宇文邕诬以谋反赐死。",
    "deedsEn": "Last emperor of Northern Qi. Strangled his shield Hulü Guang and poisoned Lanling Wang out of paranoid cowardice. Composed jaunty songs strumming the lute, hailed as 'The Carefree Emperor'. When Northern Zhou breached his frontier, halted counterattacks so his concubine Feng Xiaolian could finish putting on makeup. Captured and executed in Chang'an.",
    "archetype": "civil",
    "fiveElements": {
      "dominant": "水",
      "secondary": "木"
    },
    "tenGodsAffinity": [
      "食神",
      "偏印",
      "劫财"
    ],
    "patternType": "从儿格",
    "strengthAdviceZh": "对音乐、艺术与戏剧有着沉浸式的享乐天赋，擅长营造荒诞戏谑的宫廷狂欢气氛。",
    "strengthAdviceEn": "Absurdist artistic flair and theatrical showmanship, turning courtly ceremonies into satirical spectacles of sensory pleasure.",
    "weaknessAdviceZh": "昏聩亡国的极致标本！猜忌贤良自残臂膀，大敌压境仍将生死决战当成讨好宠妃的马戏表演，最终在极度屈辱中成为刀下亡魂。",
    "weaknessAdviceEn": "The textbook caricature of dynastic suicide! Butchered his own protectors, delayed crucial battles for concubines' vanities, dying in pathetic humiliation.",
    "historicalQuoteZh": "晋州之战，齐军掘地道破城，城陷在即。后主驰召冯小怜观之。小怜方梳妆，使帝少待。妆成至，周兵已填修完固，齐军大败！",
    "historicalQuoteEn": "At the Siege of Jinzhou, Qi troops breached the walls; Victory was minutes away. Gao Wei ordered troops to wait so Feng Xiaolian could watch. She delayed to finish her hair; by the time she arrived, enemies had repaired the breach, annihilating his army!",
    "auxiliaryStrengthsZh": [
      "对音乐、艺术与戏剧有着沉浸式的享乐天赋",
      "擅长营造荒诞戏谑的宫廷狂欢气氛"
    ],
    "auxiliaryStrengthsEn": [
      "Absurdist artistic flair and theatrical showmanship",
      "turning courtly ceremonies into satirical spectacles of sensory pleasure"
    ],
    "auxiliaryWeaknessesZh": [
      "昏聩亡国的极致标本",
      "猜忌贤良自残臂膀，大敌压境仍将生死决战当成讨好宠妃的马戏表演，最终在极度屈辱中成为刀下亡魂"
    ],
    "auxiliaryWeaknessesEn": [
      "The textbook caricature of dynastic suicide",
      "Butchered his own protectors, delayed crucial battles for concubines' vanities, dying in pathetic humiliation"
    ]
  },
  {
    "id": "zu_ting",
    "nameZh": "祖珽",
    "nameEn": "Zu Ting",
    "dynastyZh": "东魏 / 北齐",
    "dynastyEn": "Eastern Wei / Northern Qi",
    "eraTag": "northern_zhou_qi",
    "eraNameZh": "周齐对峙",
    "eraNameEn": "Northern Zhou & Qi Era",
    "positionZh": "尚书左仆射 · 偷盗双目失明的毒蛇宰相",
    "positionEn": "Grand Chancellor of Northern Qi · The Blind Viper Statesman",
    "personalityZh": "才辩无双、狡诈阴狠、贪鄙好利、虽盲而操弄权柄如神",
    "personalityEn": "Brilliant orator and political tactician, chronically corrupt, completely blind yet orchestrating palace coups with terrifying precision",
    "deedsZh": "精通文史医卜音律，才高八斗却品行极其恶劣，屡次盗窃公私财物入狱；后因政争被北齐权臣熏瞎双眼；双目失明后以过人听力与机敏重新获宠，官至宰相；构陷斛律光谋反并一手将其勒死；晚年与陆令萱争权失势，出为徐州刺史，仍能屡施奇计击退南陈进攻，七十五岁寿终正寝。",
    "deedsEn": "Polymath genius in medicine, divination, and literature, yet a chronic thief who was blinded with toxic smoke during prison torture. Despite total blindness, crawled back to supreme power through razor-sharp ears and silver-tongued rhetoric, becoming chancellor and framing Hulü Guang. Outmaneuvered rival factions until a peaceful old age.",
    "archetype": "specialist",
    "fiveElements": {
      "dominant": "水",
      "secondary": "金"
    },
    "tenGodsAffinity": [
      "伤官",
      "偏印",
      "正财"
    ],
    "patternType": "伤官用印",
    "strengthAdviceZh": "身体残障却拥有惊人生命意志与权谋算力的毒蛇级政客！双目虽盲却心眼通透，在极度险恶的深宫泥潭中展现出恐怖的政治生存翻盘才能。",
    "strengthAdviceEn": "Terrifying survival elasticity! Overcame complete physical blindness to dominate court politics through supersonic hearing and cunning psychological leverage.",
    "weaknessAdviceZh": "人格毫无道义底线！贪婪、偷窃、构陷忠良、谗杀国家柱石，为个人私利将国家推向深渊，被万世士人视为卑劣小人的典型。",
    "weaknessAdviceEn": "Devoid of ethical bottom line; institutionalized corruption, framed the nation's greatest hero, and dragged an empire into the abyss for petty survival.",
    "historicalQuoteZh": "珽少聪敏，有才藻，多浮薄。双目虽盲，而机变百端。谮杀斛律光，尽出其谋。人称‘盲毒蛇’，畏之如蝎。",
    "historicalQuoteEn": "Book of Northern Qi: Zu Ting was brilliantly eloquent yet morally rotten. Blind in both eyes, he plotted every step of Hulü Guang's judicial murder, dreaded by all as 'The Blind Viper.'",
    "auxiliaryStrengthsZh": [
      "身体残障却拥有惊人生命意志与权谋算力的毒蛇级政客",
      "双目虽盲却心眼通透，在极度险恶的深宫泥潭中展现出恐怖的政治生存翻盘才能"
    ],
    "auxiliaryStrengthsEn": [
      "Terrifying survival elasticity",
      "Overcame complete physical blindness to dominate court politics through supersonic hearing and cunning psychological leverage"
    ],
    "auxiliaryWeaknessesZh": [
      "人格毫无道义底线",
      "贪婪、偷窃、构陷忠良、谗杀国家柱石，为个人私利将国家推向深渊，被万世士人视为卑劣小人的典型"
    ],
    "auxiliaryWeaknessesEn": [
      "Devoid of ethical bottom line",
      "institutionalized corruption, framed the nation's greatest hero, and dragged an empire into the abyss for petty survival"
    ]
  },
  {
    "id": "yuwen_hu",
    "nameZh": "宇文护",
    "nameEn": "Yuwen Hu (Prince of Jin)",
    "dynastyZh": "西魏 / 北周",
    "dynastyEn": "Western Wei / Northern Zhou",
    "eraTag": "northern_zhou_qi",
    "eraNameZh": "周齐对峙",
    "eraNameEn": "Northern Zhou & Qi Era",
    "positionZh": "大冢宰晋国公 · 连弑三帝的西陲铁血权相",
    "positionEn": "Grand Chancellor & Duke of Jin · The Regent Who Killed Three Emperors",
    "personalityZh": "坚忍沉鸷、专权弄柄、手段狠辣、志图统一却缺乏决战才略",
    "personalityEn": "Cold, deeply secretive, ruthless regent who monopolized sovereign power, yet tactically mediocre in field warfare",
    "deedsZh": "宇文泰之侄，宇文泰死后受命托孤；执掌北周中枢大权十六载，先后弑杀西魏恭帝元廓、北周孝闵帝宇文觉、北周明帝宇文毓三位皇帝，创中国历史上‘连弑三帝’之奇迹；多次率军攻北齐战绩平平；后被隐忍十二年的北周武帝宇文邕诱入含仁殿，被武帝以玉珽击倒就地斩杀，其党羽全被剿灭。",
    "deedsEn": "Nephew of Yuwen Tai. Steered Northern Zhou for 16 years. Executed Emperor Gong of Western Wei, Emperor Xiaomin, and Emperor Ming—assassinating three sovereigns in succession to monopolize power. Stymied in campaigns against Northern Qi. After 12 years of patient deference, Emperor Wu lured him into his mother's chamber and smashed his head with a jade scepter.",
    "archetype": "executive",
    "fiveElements": {
      "dominant": "金",
      "secondary": "水"
    },
    "tenGodsAffinity": [
      "七杀",
      "比肩",
      "偏印"
    ],
    "patternType": "七杀格",
    "strengthAdviceZh": "极其强悍的内政权斗控制力与危机铁腕，在宇文泰初崩主少国疑的动荡绝境中，以雷霆杀戮强行稳住了关陇集团的基本盘。",
    "strengthAdviceEn": "Absolute mastery of cutthroat court power mechanics; stabilized a fracturing regime following the founder's death through ruthless pre-emptive purges.",
    "weaknessAdviceZh": "对最高皇权名器缺乏敬畏，连杀三帝埋下不可化解的君臣宿怨；对羽翼丰满的年轻君主（宇文邕）盲目自大缺乏警惕，最终喋血殿阶。",
    "weaknessAdviceEn": "Assassinating three monarchs left him doomed; fatally underestimated his seemingly obedient young nephew Emperor Wu, meeting bloody death upon the palace tiles.",
    "historicalQuoteZh": "武帝引护入含仁殿见太后，护方读《酒诰》，武帝自后以玉珽击之，护倒地，帝命卫士就地引颈斩杀之，阖门尽诛！",
    "historicalQuoteEn": "Book of Zhou: Emperor Wu invited Yuwen Hu into the palace to read temperance texts to the Empress Dowager. From behind, Emperor Wu smashed a heavy jade scepter into Hu's skull, executing his entire faction.",
    "auxiliaryStrengthsZh": [
      "极其强悍的内政权斗控制力与危机铁腕",
      "在宇文泰初崩主少国疑的动荡绝境中，以雷霆杀戮强行稳住了关陇集团的基本盘"
    ],
    "auxiliaryStrengthsEn": [
      "Absolute mastery of cutthroat court power mechanics",
      "stabilized a fracturing regime following the founder's death through ruthless pre-emptive purges"
    ],
    "auxiliaryWeaknessesZh": [
      "对最高皇权名器缺乏敬畏，连杀三帝埋下不可化解的君臣宿怨",
      "对羽翼丰满的年轻君主（宇文邕）盲目自大缺乏警惕，最终喋血殿阶"
    ],
    "auxiliaryWeaknessesEn": [
      "Assassinating three monarchs left him doomed",
      "fatally underestimated his seemingly obedient young nephew Emperor Wu, meeting bloody death upon the palace tiles"
    ]
  },
  {
    "id": "yuwen_yong",
    "nameZh": "宇文邕 (北周武帝)",
    "nameEn": "Yuwen Yong (Emperor Wu of Northern Zhou)",
    "dynastyZh": "北周",
    "dynastyEn": "Northern Zhou",
    "eraTag": "northern_zhou_qi",
    "eraNameZh": "周齐对峙",
    "eraNameEn": "Northern Zhou & Qi Era",
    "positionZh": "北周武帝 · 诛权臣灭北齐奠基大一统的千古铁腕雄主",
    "positionEn": "Emperor Wu of Northern Zhou · Iron-Willed Sovereign Who Crushed Northern Qi",
    "personalityZh": "隐忍十二年、雄才大略、俭朴如兵、灭佛富国、亲冒矢石、英年早逝",
    "personalityEn": "Endured 12 years of meek subservience to slay the usurper, brilliant unifier, Spartan ascetic, anti-Buddhist reformer, died on campaign",
    "deedsZh": "宇文泰第四子，登基后隐忍权相宇文护十二载对其事事顺从；十二年后伏兵手刃宇文护独掌朝政；励精图治躬行节俭，衣不华饰寝不重席；发动中国历史上‘周武灭佛’没收寺产还俗三百万僧尼充军实农；亲征率大军东出潼关，克晋州破邺城攻灭北齐一统北方；乘胜欲北伐突厥一统天下，三十六岁于出征路上积劳暴病身亡，隋文帝杨坚承其基业完成大一统。",
    "deedsEn": "Fourth son of Yuwen Tai. Feigned docile obedience for 12 years under tyrant Yuwen Hu before personally bashing his skull with a scepter. Reigned with Spartan simplicity, eating coarse rations. Suppressed Buddhism, returning 3 million monks to civilian agriculture and military rosters. Personally conquered Northern Qi to unify Northern China. Died on campaign against the Turks at age 36, bequeathing the launchpad for Sui's grand reunification.",
    "archetype": "executive",
    "fiveElements": {
      "dominant": "金",
      "secondary": "木"
    },
    "tenGodsAffinity": [
      "七杀",
      "正官",
      "比肩"
    ],
    "patternType": "建禄格",
    "strengthAdviceZh": "极限隐忍与雷霆出击相结合的千古帝王典范！能忍天下人所不能忍，一朝出手除恶务尽；治国雷厉风行，以最高执行力在废墟中凝聚起横扫天下的攻坚铁拳。",
    "strengthAdviceEn": "The gold standard of supreme patience combined with lethal surgical execution! Endured 12 years in the crosshairs to strike once; reformed taxation and wiped out mighty rivals.",
    "weaknessAdviceZh": "行事过急过刚，生活作息极度透支肉体极限，加上严酷灭佛触动巨大的社会潜意识反弹，三十六岁壮年暴卒令天下抱憾。",
    "weaknessAdviceEn": "Pushed his physical vessel beyond human limits while provoking deep spiritual animosity through brutal iconoclasm; dying at 36 halted his ultimate reunification.",
    "historicalQuoteZh": "帝克邺城，见北齐奢靡，叹曰：‘如此不亡，理将安在！’下诏尽撤奇巧。及崩，三军将士号恸如丧考妣，隋文帝承其资以混一天下。",
    "historicalQuoteEn": "Book of Zhou: Entering conquered Ye, Emperor Wu saw decadent palace gold and sighed: 'If such vanity did not fall, where is cosmic justice!' His untimely death at 36 paved the way for Sui's coronation.",
    "auxiliaryStrengthsZh": [
      "极限隐忍与雷霆出击相结合的千古帝王典范",
      "能忍天下人所不能忍，一朝出手除恶务尽"
    ],
    "auxiliaryStrengthsEn": [
      "The gold standard of supreme patience combined with lethal surgical execution",
      "Endured 12 years in the crosshairs to strike once"
    ],
    "auxiliaryWeaknessesZh": [
      "行事过急过刚",
      "生活作息极度透支肉体极限，加上严酷灭佛触动巨大的社会潜意识反弹，三十六岁壮年暴卒令天下抱憾"
    ],
    "auxiliaryWeaknessesEn": [
      "Pushed his physical vessel beyond human limits while provoking deep spiritual animosity through brutal iconoclasm",
      "dying at 36 halted his ultimate reunification"
    ]
  },
  {
    "id": "wei_xiaokuan",
    "nameZh": "韦孝宽",
    "nameEn": "Wei Xiaokuan",
    "dynastyZh": "西魏 / 北周 / 隋",
    "dynastyEn": "Western Wei / Northern Zhou / Sui",
    "eraTag": "northern_zhou_qi",
    "eraNameZh": "周齐对峙",
    "eraNameEn": "Northern Zhou & Qi Era",
    "positionZh": "郧国公 · 玉壁城下气死高欢的千古第一防守神将",
    "positionEn": "Duke of Yun · The Infallible Bastion Master of Yubi",
    "personalityZh": "智谋冠绝、算无遗策、善于守御、用间谍如神、功高不矜保全门祚",
    "personalityEn": "Supreme grandmaster of fortification warfare, uncrackable defensive anchor, peerless intelligence spymaster, modest and enduring",
    "deedsZh": "京兆韦氏名将，南北朝第一守将兼谍战之祖；玉壁之战面对高欢十万东魏精锐以数千人孤军坚守五十天，化解高欢地道、土山、火攻、招降等所有奇策，高欢战死数万人忧愤生疾班师；善用间谍，一手散布反间童谣借高纬之手杀北齐名将斛律光；晚年以七十二岁高龄出山平灭尉迟迥叛乱稳固杨坚隋朝帝业，位极人臣清名播世，寿终正寝。",
    "deedsEn": "The immortal defensive guardian of China and the father of classical espionage warfare. At the Siege of Yubi, held a small garrison of thousands against Gao Huan's 100,000 veterans for 50 days, countering every sap, fire engine, and earthwork until Gao Huan coughed blood in retreat. Planted the nursery rhyme that tricked Qi into executing Hulü Guang. At age 72, crushed Yuchi Jiong's revolt to secure Yang Jian's rise to founding Sui.",
    "archetype": "military",
    "fiveElements": {
      "dominant": "土",
      "secondary": "金"
    },
    "tenGodsAffinity": [
      "正印",
      "偏印",
      "正官"
    ],
    "patternType": "官印相生",
    "strengthAdviceZh": "古往今来阵地防御战与情报反间战的天花板宗师！以极其冷静深邃的工程学思维化解狂暴攻击，擅长用极小的支点撬动敌人最高中枢的自残自毁。",
    "strengthAdviceEn": "The absolute ceiling of defensive architecture and psychological intelligence warfare in human history! Disarms titan offensives through analytical engineering and lethal counter-espionage.",
    "weaknessAdviceZh": "行事极尽诡诈隐秘（谍报间谍网），一生杀人无数多在无形帷幄之中，晚年在杨坚代周之际果断站在新强权一方，缺乏传统儒家愚忠包袱。",
    "weaknessAdviceEn": "Operated in shadows of ruthless tactical cynicism; prioritized clan survival and systemic stability over romantic dynastic martyrdom.",
    "historicalQuoteZh": "高欢攻玉壁五十日，攻城之术皆尽，孝宽临机应变，皆破之。欢苦甚发疾，唱敕勒歌而绝。孝宽威名震于天下！",
    "historicalQuoteEn": "Book of Zhou: Gao Huan attacked Yubi for 50 days exhausting every siege engine known; Wei Xiaokuan countered each with miraculous foresight until Gao Huan died of despair.",
    "auxiliaryStrengthsZh": [
      "古往今来阵地防御战与情报反间战的天花板宗师",
      "以极其冷静深邃的工程学思维化解狂暴攻击，擅长用极小的支点撬动敌人最高中枢的自残自毁"
    ],
    "auxiliaryStrengthsEn": [
      "The absolute ceiling of defensive architecture and psychological intelligence warfare in human history",
      "Disarms titan offensives through analytical engineering and lethal counter-espionage"
    ],
    "auxiliaryWeaknessesZh": [
      "行事极尽诡诈隐秘（谍报间谍网）",
      "生杀人无数多在无形帷幄之中，晚年在杨坚代周之际果断站在新强权一方，缺乏传统儒家愚忠包袱"
    ],
    "auxiliaryWeaknessesEn": [
      "Operated in shadows of ruthless tactical cynicism",
      "prioritized clan survival and systemic stability over romantic dynastic martyrdom"
    ]
  },
  {
    "id": "dugu_xin",
    "nameZh": "独孤信",
    "nameEn": "Dugu Xin",
    "dynastyZh": "西魏 / 北周",
    "dynastyEn": "Western Wei / Northern Zhou",
    "eraTag": "northern_zhou_qi",
    "eraNameZh": "周齐对峙",
    "eraNameEn": "Northern Zhou & Qi Era",
    "positionZh": "八柱国大司马 · 帅绝天下与三朝国丈",
    "positionEn": "Grand Marshal & Eight Pillar States · The Ultimate Aristocratic Father-in-Law",
    "personalityZh": "美容止、善骑射、风度翩翩、侧帽倾城、长于抚众、卷入政争赐死",
    "personalityEn": "Breathtakingly handsome, peerless horse archer, setting capital fashion with his crooked silk hat, beloved magistrate, undone by factional strife",
    "deedsZh": "云中鲜卑勋贵，西魏八柱国之一；长相极俊美，一次暮归洛阳帽微侧，次日全城男子皆争相侧帽模仿，世称‘侧帽风流’；镇守陇右陇西大治，深得民心；其三个女儿分别嫁为北周明敬皇后（宇文毓妻）、唐元贞皇后（李渊生母）、大隋文献皇后（杨坚妻独孤伽罗），一门三朝国丈千古未有；因卷入赵贵刺杀宇文护密谋被逼自尽于家中。",
    "deedsEn": "Pillar of the Guanzhong aristocracy. Celebrated as the handsomest nobleman of the era; once riding home at dusk with his velvet hat slightly tilted, all young men in the capital wore their hats tilted the next day. Fathered three daughters who became Empresses of three successive dynasties: Northern Zhou, Tang (Li Yuan's mother), and Sui (Dugu Jialuo). Forced to commit suicide after a failed plot against Yuwen Hu.",
    "archetype": "civil",
    "fiveElements": {
      "dominant": "木",
      "secondary": "土"
    },
    "tenGodsAffinity": [
      "正官",
      "偏财",
      "正印"
    ],
    "patternType": "财官双美",
    "strengthAdviceZh": "顶级的个人形象魅力、门阀血缘战略联姻与区域行政教化典范！不仅在地方治理上清正廉洁，更用绝世的家族基因与联姻网络深刻重构了三朝皇统。",
    "strengthAdviceEn": "Incomparable aristocratic aura, civil administration excellence, and strategic marital networking! His familial bloodline literally birthed the ruling houses of Northern Zhou, Sui, and Tang.",
    "weaknessAdviceZh": "在凶残狡诈的顶级权力绞肉机（宇文护）面前立场犹疑摇摆，既知赵贵谋乱却未果断主导局面或彻底切割，最终被连坐赐死。",
    "weaknessAdviceEn": "Indecision amid lethal high-stakes palace coups; aware of conspirators' plots without taking ruthless control or cleanly detaching, leading to forced suicide.",
    "historicalQuoteZh": "信美容仪，善骑射。在秦州，尝因猎日暮驰马入城，其帽微侧，及旦，吏民莫不侧帽以学信。其后三女皆为天下母，贵震古今！",
    "historicalQuoteEn": "Book of Zhou: Dugu Xin's beauty was transcendent. Tilted his hat riding back from hunting, the whole populace adopted tilted hats by morning. His three daughters crowned three imperial dynasties.",
    "auxiliaryStrengthsZh": [
      "顶级的个人形象魅力、门阀血缘战略联姻与区域行政教化典范",
      "不仅在地方治理上清正廉洁，更用绝世的家族基因与联姻网络深刻重构了三朝皇统"
    ],
    "auxiliaryStrengthsEn": [
      "Incomparable aristocratic aura, civil administration excellence, and strategic marital networking",
      "His familial bloodline literally birthed the ruling houses of Northern Zhou, Sui, and Tang"
    ],
    "auxiliaryWeaknessesZh": [
      "在凶残狡诈的顶级权力绞肉机（宇文护）面前立场犹疑摇摆",
      "既知赵贵谋乱却未果断主导局面或彻底切割，最终被连坐赐死"
    ],
    "auxiliaryWeaknessesEn": [
      "Indecision amid lethal high-stakes palace coups",
      "aware of conspirators' plots without taking ruthless control or cleanly detaching, leading to forced suicide"
    ]
  },
  {
    "id": "yang_jian",
    "nameZh": "杨坚 (隋文帝)",
    "nameEn": "Yang Jian (Emperor Wen of Sui)",
    "dynastyZh": "北周 / 隋朝",
    "dynastyEn": "Northern Zhou / Sui",
    "eraTag": "sui",
    "eraNameZh": "大隋统一",
    "eraNameEn": "Sui Dynastic Era",
    "positionZh": "隋文帝 · 终结三百年乱世开创开皇之治的千古一帝",
    "positionEn": "Emperor Wen of Sui · Grand Unifier Who Ended 300 Years of Chaos",
    "personalityZh": "沉敏沉毅、天性猜疑、躬行节俭、开科取士、大破突厥、统一天下",
    "personalityEn": "Profoundly resilient, suspicious by nature, Spartan in personal frugality, revolutionary institution builder, re-unifying civilization",
    "deedsZh": "弘农杨氏，八柱国杨忠之子；北周外戚辅政，果断平定尉迟迥、王谦三总管叛乱代周建隋；开皇九年遣五十万大军渡江灭陈，彻底终结自西晋永嘉之乱以来近三百年分裂割据浩劫；开创开皇之治，首创三省六部制、废九品中正制始置科举雏形、开凿广通渠、编订《开皇律》；然晚年多疑苛细，废长立幼立杨广，晚节受制深宫暴疾崩逝。",
    "deedsEn": "Son of Pillar General Yang Zhong. Overcame armed rebellions to establish the Sui dynasty. Dispatched 500,000 troops across the Yangtze to conquer Chen, ending 300 years of fragmentation to reunite China under a single crown. Founded the Three Departments and Six Ministries, pioneered imperial civil service examinations, built grand canals, and drafted the Kaihuang Legal Code. In his old age, grew paranoid, replaced his heir with tyrannical Yang Guang, and died in mysterious palace illness.",
    "archetype": "executive",
    "fiveElements": {
      "dominant": "金",
      "secondary": "土"
    },
    "tenGodsAffinity": [
      "正官",
      "七杀",
      "正印"
    ],
    "patternType": "官印相生",
    "strengthAdviceZh": "古往今来最伟大的系统整合者与文明再造巨匠！终结数百年血腥乱世，以极其宏伟的制度设计（三省六部、科举雏形、均田开皇律）为后世中华帝国奠定了千秋万代的大一统钢筋铁骨。",
    "strengthAdviceEn": "The supreme unifier and institutional architect of Chinese civilization! Rebuilt a unified empire from three centuries of blood and ruins, inventing administrative systems that endured a millennium.",
    "weaknessAdviceZh": "晚年病态的多疑与苛察！对开国元勋功臣（高颎、史万岁）大肆清洗猜忌，在继承人问题上被伪善的杨广蒙蔽换储，亲手为大隋盛世骤然短命埋下了掘墓雷管。",
    "weaknessAdviceEn": "Pathological late-life paranoia and micro-tyranny! Purged foundational statesmen and fell for deceptive flattery to crown tyrannical Yang Guang, sabotaging his own imperial dynasty.",
    "historicalQuoteZh": "隋文帝躬履节俭，天下安乐，开皇之治，威震四海。灭陈混一，天下大同，古今帝王功业，罕有其比！",
    "historicalQuoteEn": "Book of Sui: Emperor Wen practiced rigorous frugality; the empire enjoyed profound peace. Reuniting the realm after centuries of division, his monumental merit stands alongside the greatest sovereigns of antiquity.",
    "auxiliaryStrengthsZh": [
      "古往今来最伟大的系统整合者与文明再造巨匠",
      "终结数百年血腥乱世，以极其宏伟的制度设计（三省六部、科举雏形、均田开皇律）为后世中华帝国奠定了千秋万代的大一统钢筋铁骨"
    ],
    "auxiliaryStrengthsEn": [
      "The supreme unifier and institutional architect of Chinese civilization",
      "Rebuilt a unified empire from three centuries of blood and ruins, inventing administrative systems that endured a millennium"
    ],
    "auxiliaryWeaknessesZh": [
      "晚年病态的多疑与苛察",
      "对开国元勋功臣（高颎、史万岁）大肆清洗猜忌，在继承人问题上被伪善的杨广蒙蔽换储，亲手为大隋盛世骤然短命埋下了掘墓雷管"
    ],
    "auxiliaryWeaknessesEn": [
      "Pathological late-life paranoia and micro-tyranny",
      "Purged foundational statesmen and fell for deceptive flattery to crown tyrannical Yang Guang, sabotaging his own imperial dynasty"
    ]
  },
  {
    "id": "dugu_jialuo",
    "nameZh": "独孤伽罗 (文献皇后)",
    "nameEn": "Dugu Jialuo (Empress Wenxian)",
    "dynastyZh": "北周 / 隋朝",
    "dynastyEn": "Northern Zhou / Sui",
    "eraTag": "sui",
    "eraNameZh": "大隋统一",
    "eraNameEn": "Sui Dynastic Era",
    "positionZh": "文献皇后 · 二圣临朝的大隋开国核心操盘手",
    "positionEn": "Empress Wenxian of Sui · Co-Ruler of Kaihuang Era",
    "personalityZh": "刚毅果敢、深明大势、驭夫极严、辅弼开皇、痛恨妾侍废立太子",
    "personalityEn": "Steely resolute, geopolitical strategist, strictly enforcing monogamy upon the throne, master of palace governance, fiercely opinionated",
    "deedsZh": "独孤信第七女，十四岁嫁杨坚；北周宣帝死政局凶险，伽罗派人向杨坚传密信‘事已至此，骑兽之势，必不得下，勉之！’坚决促使杨坚称帝；与隋文帝并称‘二圣’，深度参预开皇之治朝政决断；性严妒，誓与文帝同生共死六宫虚设；因见太子杨勇纳妾溺爱而极度厌恶，坚决主导废太子杨勇改立善于伪装纯情的晋王杨广，酿成大隋二世而亡的历史浩劫。",
    "deedsEn": "Seventh daughter of Dugu Xin. Married Yang Jian at 14. At the supreme turning point of Northern Zhou, sent the fateful cipher to her husband: 'Events have reached the point of riding a tiger—you cannot dismount, drive forward!' Co-ruled the empire with Yang Jian as 'Two Sages'. Enforced strict monogamy, executing imperial mistresses. Despising concubines, she spearheaded the deposition of Crown Prince Yang Yong to elevate the deceptive Yang Guang, inadvertently setting the stage for Sui's fall.",
    "archetype": "executive",
    "fiveElements": {
      "dominant": "金",
      "secondary": "火"
    },
    "tenGodsAffinity": [
      "正官",
      "伤官",
      "正印"
    ],
    "patternType": "伤官见官",
    "strengthAdviceZh": "古代后妃中顶级政治胆魄与战略推动力的化身！在历史命运关头能踢出最关键的临门一脚逼丈夫成就帝业，行事果断干练，开皇盛世有其半壁功勋。",
    "strengthAdviceEn": "The embodiment of audacious strategic statecraft among imperial consorts! Delivered the decisive push to usurp the throne and co-steered the golden Kaihuang era.",
    "weaknessAdviceZh": "将个人的极端道德洁癖与妒忌心理凌驾于国家继承人战略大局之上！因反感大儿子纳妾宠幸便盲信二儿子杨广的伪善孝顺，一手主导换储直接导致大隋覆亡。",
    "weaknessAdviceEn": "Allowed personal moral dogmatism and obsession with monogamy to distort imperial succession! Duped by Yang Guang's ascetic play-acting, she orchestrated the catastrophic succession switch.",
    "historicalQuoteZh": "伽罗密谓高祖曰：‘事已至此，政如骑兽，势不得下，勉之！’高祖遂定大计。及开皇之治，后与高祖同辇而行，宫中谓之‘二圣’。",
    "historicalQuoteEn": "Book of Sui: Dugu Jialuo sent word: 'Affairs have become like riding a tiger; you cannot dismount, push forward!' Sovereign and Empress rode together, revered universally as the 'Two Sages.'",
    "auxiliaryStrengthsZh": [
      "古代后妃中顶级政治胆魄与战略推动力的化身",
      "在历史命运关头能踢出最关键的临门一脚逼丈夫成就帝业，行事果断干练，开皇盛世有其半壁功勋"
    ],
    "auxiliaryStrengthsEn": [
      "The embodiment of audacious strategic statecraft among imperial consorts",
      "Delivered the decisive push to usurp the throne and co-steered the golden Kaihuang era"
    ],
    "auxiliaryWeaknessesZh": [
      "将个人的极端道德洁癖与妒忌心理凌驾于国家继承人战略大局之上",
      "因反感大儿子纳妾宠幸便盲信二儿子杨广的伪善孝顺，一手主导换储直接导致大隋覆亡"
    ],
    "auxiliaryWeaknessesEn": [
      "Allowed personal moral dogmatism and obsession with monogamy to distort imperial succession",
      "Duped by Yang Guang's ascetic play-acting, she orchestrated the catastrophic succession switch"
    ]
  },
  {
    "id": "gao_jiong",
    "nameZh": "高颎",
    "nameEn": "Gao Jiong",
    "dynastyZh": "北周 / 隋朝",
    "dynastyEn": "Northern Zhou / Sui",
    "eraTag": "sui",
    "eraNameZh": "大隋统一",
    "eraNameEn": "Sui Dynastic Era",
    "positionZh": "左领军大都督尚书左仆射 · 开皇之治第一名相",
    "positionEn": "Prime Minister of Sui · Foremost Statesman of Kaihuang Era",
    "personalityZh": "深谋远虑、公忠体国、料敌制胜、知人善任、一代贤相",
    "personalityEn": "Profound geopolitical foresight, selfless statesman, flawless logistical strategist, the indispensable anchor of the Sui state",
    "deedsZh": "杨坚心腹重臣，参与平定尉迟迥叛乱；主持隋灭陈大计，推荐韩擒虎、贺若弼为前锋名将，挂帅克建康平南陈；执掌大隋国政二十年，修订《开皇律》、推行‘输籍定样’清查户口、减赋税、抚突厥，使大隋府库充盈四海宾服；后因同情太子杨勇、反对废立，触怒独孤皇后与隋文帝遭罢相，隋炀帝即位后因直言批评朝政被杀。",
    "deedsEn": "Chief architect of the Sui Empire. Planned the southern campaign to conquer Chen, personally recommending generals Han Qinhu and He Ruobi. Chancellored the empire for two decades, drafting the Kaihuang Code, conducting censuses, and filling imperial granaries to capacity. Opposed the deposition of Crown Prince Yang Yong, offending Empress Dugu and losing office; later executed by tyrant Yang Guang for voicing dissent.",
    "archetype": "civil",
    "fiveElements": {
      "dominant": "水",
      "secondary": "金"
    },
    "tenGodsAffinity": [
      "正官",
      "正印",
      "食神"
    ],
    "patternType": "官印相生",
    "strengthAdviceZh": "开皇盛世与大一统的总工程师与真正操盘手！统领全局出将入相，既能在宏观上制定千秋法度，又能在微观上精算后勤粮草，知人善任无私奉公。",
    "strengthAdviceEn": "The supreme master engineer and operational brain of Sui's golden era! Managed grand strategy, legal architecture, and logistics with total integrity and flawless talent selection.",
    "weaknessAdviceZh": "卷入皇帝皇后的立储家事纠纷时缺乏弹性缓冲机制，在君权独断与皇后雷霆之怒面前硬抗，最终被猜忌罢相甚至招致炀帝屠刀。",
    "weaknessAdviceEn": "Lacked diplomatic insulation when trapped between the Emperor's insecurity and the Empress's wrath over succession, suffering tragic purge.",
    "historicalQuoteZh": "《隋书》赞曰：高颎深识大略，知人善任。凡军国大策，皆颎所定。自开皇创业，二十年间，天下大治，颎之力也！",
    "historicalQuoteEn": "Book of Sui: Gao Jiong possessed vast geopolitical depth. Every great policy of the empire was forged in his mind; the two decades of golden peace rested on his shoulders.",
    "auxiliaryStrengthsZh": [
      "开皇盛世与大一统的总工程师与真正操盘手",
      "统领全局出将入相，既能在宏观上制定千秋法度，又能在微观上精算后勤粮草，知人善任无私奉公"
    ],
    "auxiliaryStrengthsEn": [
      "The supreme master engineer and operational brain of Sui's golden era",
      "Managed grand strategy, legal architecture, and logistics with total integrity and flawless talent selection"
    ],
    "auxiliaryWeaknessesZh": [
      "卷入皇帝皇后的立储家事纠纷时缺乏弹性缓冲机制",
      "在君权独断与皇后雷霆之怒面前硬抗，最终被猜忌罢相甚至招致炀帝屠刀"
    ],
    "auxiliaryWeaknessesEn": [
      "Lacked diplomatic insulation when trapped between the Emperor's insecurity and the Empress's wrath over succession",
      "suffering tragic purge"
    ]
  },
  {
    "id": "he_ruobi",
    "nameZh": "贺若弼",
    "nameEn": "He Ruobi",
    "dynastyZh": "北周 / 隋朝",
    "dynastyEn": "Northern Zhou / Sui",
    "eraTag": "sui",
    "eraNameZh": "大隋统一",
    "eraNameEn": "Sui Dynastic Era",
    "positionZh": "上柱国右武候大将军 · 拔剑斩浪过江灭陈的勇烈狂将",
    "positionEn": "Grand General of Right Martial Guards · The Thunderous Conqueror of Chen",
    "personalityZh": "勇烈善战、料敌机先、治军奇谋、矜伐功大、狂傲触怒炀帝被杀",
    "personalityEn": "Fearless battlefield genius, master of deceptive river-crossing stratagems, yet boasting, vain, and destroyed by his proud tongue",
    "deedsZh": "将门之后，父临终以锥刺其舌戒其妄言；受高颎举荐任庐州总管主持灭陈前锋；施‘移换战马’‘多买废船’‘故意射猎’等奇谋麻痹陈军防线；开皇九年自广陵白马渡长江，破钟山敌军直捣乐游苑，生擒陈叔宝；平陈首功封宋国公；然居功自傲与韩擒虎争功，常发怨言，后在隋炀帝朝因私议朝政被炀帝所杀。",
    "deedsEn": "Son of an executed general whose father pierced his tongue with an awl on his deathbed to warn him against loose talk. Appointed forward commander by Gao Jiong against Chen. Employed ingenious deception: repeatedly buying old boats and staging hunts to habituate enemy defenders. Crossed the Yangtze in fog, shattered Chen's elite guards, and seized the palace. Yet boastful and insubordinate, executed by Yang Guang for critical speech.",
    "archetype": "military",
    "fiveElements": {
      "dominant": "金",
      "secondary": "火"
    },
    "tenGodsAffinity": [
      "七杀",
      "伤官",
      "偏财"
    ],
    "patternType": "羊刃驾杀",
    "strengthAdviceZh": "战役战术欺骗与大规模渡江登岛作战的天才！善于利用心理战让防守方彻底丧失警惕，闪电突击直捣黄龙攻无不克。",
    "strengthAdviceEn": "Military genius of tactical deception and amphibious shock assault! Lulled fortified defenders into terminal sleep before striking with lightning fury.",
    "weaknessAdviceZh": "致命的居功自傲与口无遮拦！父亲临终刺舌之诫抛之脑后，在极权君主面前不断抱怨待遇不公、大放厥词，最终难逃杀身之祸。",
    "weaknessAdviceEn": "Fatal arrogance and uncontrollable loose talk! Ignored his dying father's bloody warning, openly griping about honors until tyrants severed his head.",
    "historicalQuoteZh": "若弼自负功大，每进见，辞色不平，常有怨言。炀帝杀之，天下叹其才而轻其为人。",
    "historicalQuoteEn": "Book of Sui: He Ruobi boasted incessantly of his monumental victories, glowering with resentment over court honors. Yang Guang had him beheaded; all admired his talent yet pitied his tragic vanity.",
    "auxiliaryStrengthsZh": [
      "战役战术欺骗与大规模渡江登岛作战的天才",
      "善于利用心理战让防守方彻底丧失警惕，闪电突击直捣黄龙攻无不克"
    ],
    "auxiliaryStrengthsEn": [
      "Military genius of tactical deception and amphibious shock assault",
      "Lulled fortified defenders into terminal sleep before striking with lightning fury"
    ],
    "auxiliaryWeaknessesZh": [
      "致命的居功自傲与口无遮拦",
      "父亲临终刺舌之诫抛之脑后，在极权君主面前不断抱怨待遇不公、大放厥词，最终难逃杀身之祸"
    ],
    "auxiliaryWeaknessesEn": [
      "Fatal arrogance and uncontrollable loose talk",
      "Ignored his dying father's bloody warning, openly griping about honors until tyrants severed his head"
    ]
  },
  {
    "id": "han_qinhu",
    "nameZh": "韩擒虎",
    "nameEn": "Han Qinhu",
    "dynastyZh": "北周 / 隋朝",
    "dynastyEn": "Northern Zhou / Sui",
    "eraTag": "sui",
    "eraNameZh": "大隋统一",
    "eraNameEn": "Sui Dynastic Era",
    "positionZh": "上柱国大将军 · 兵不血刃夜袭建康的阎罗神将",
    "positionEn": "Grand General & Pillar of State · Legendary Conqueror of Jiankang",
    "personalityZh": "沉勇威重、不战屈人、神将风范、死后为阎罗王传奇",
    "personalityEn": "Imposing stoic warrior, conquering empires without bloodshed, legendary commander deified as King of the Underworld",
    "deedsZh": "勇猛过人，少时能生擒猛虎，故名擒虎；隋灭陈之役任先锋主力，率五百精骑夜渡长江，兵不血刃袭占采石矶，连拔姑孰直抵建康城下；自朱雀门入建康俘陈叔宝，平定江南；晚年威重海外，突厥使者入朝拜见失色不敢仰视；临终病重有阴间仪仗迎驾，邻人见其为阎罗王，从容而逝，万世传颂。",
    "deedsEn": "Captured wild tigers alive with bare hands in youth. As vanguard general against Chen, ferried 500 elite shock riders across the stormy Yangtze at night, taking enemy fortresses without shedding a drop of blood. Marched straight through the capital's Vermilion Bird Gate to capture the Chen emperor. Later when foreign steppe ambassadors saw him, they shuddered. On his deathbed, spectral hosts arrived to crown him King of the Underworld.",
    "archetype": "military",
    "fiveElements": {
      "dominant": "金",
      "secondary": "水"
    },
    "tenGodsAffinity": [
      "七杀",
      "正印",
      "正官"
    ],
    "patternType": "杀印相生",
    "strengthAdviceZh": "兵不血刃直捣黄龙的特战统帅典范！行军神速如幽灵鬼魅，善于以强大的心理威慑瓦解敌军斗志，达成零伤亡灭国战果。",
    "strengthAdviceEn": "Ghostly vanguard commander who conquered capitals without shedding blood! Paralzyed enemy morale through shock infiltration and supernatural composure.",
    "weaknessAdviceZh": "在胜利入城时军纪把控出现微小缝隙，被贺若弼抢先进宫搜捕争功，引发战后同僚将领之间长期的功劳龃龉。",
    "weaknessAdviceEn": "Allowed rival commander He Ruobi to breach the palace first and claim the primary capture credit, sparking bitter post-war military disputes.",
    "historicalQuoteZh": "擒虎临终，见鬼神仪卫满门，曰：‘迎大王也！’擒虎曰：‘生为上柱国，死作阎罗王，斯亦足矣！’遂瞑目而逝，神采弈弈。",
    "historicalQuoteEn": "Book of Sui: On his deathbed, spectral legions filled the courtyard, proclaiming: 'We come to escort our King!' Han Qinhu smiled: 'Alive, a Pillar of the Empire; dead, the Lord of the Underworld—it is enough!' and expired in peace.",
    "auxiliaryStrengthsZh": [
      "兵不血刃直捣黄龙的特战统帅典范",
      "行军神速如幽灵鬼魅，善于以强大的心理威慑瓦解敌军斗志，达成零伤亡灭国战果"
    ],
    "auxiliaryStrengthsEn": [
      "Ghostly vanguard commander who conquered capitals without shedding blood",
      "Paralzyed enemy morale through shock infiltration and supernatural composure"
    ],
    "auxiliaryWeaknessesZh": [
      "在胜利入城时军纪把控出现微小缝隙",
      "被贺若弼抢先进宫搜捕争功，引发战后同僚将领之间长期的功劳龃龉"
    ],
    "auxiliaryWeaknessesEn": [
      "Allowed rival commander He Ruobi to breach the palace first and claim the primary capture credit",
      "sparking bitter post-war military disputes"
    ]
  },
  {
    "id": "sima_shi",
    "nameZh": "司马师",
    "nameEn": "Sima Shi (Emperor Jing of Jin)",
    "dynastyZh": "西晋",
    "dynastyEn": "Western Jin",
    "eraTag": "western_jin",
    "eraNameZh": "西晋风云",
    "eraNameEn": "Western Jin Dynastic Era",
    "positionZh": "曹魏大将军 · 晋景帝 · 高平陵之变主谋",
    "positionEn": "General-in-Chief of Cao Wei · Posthumous Emperor Jing · Mastermind of Gaoping Coup",
    "personalityZh": "沉着坚毅、阴鸷冷峻、处变不惊、极具铁血决断力",
    "personalityEn": "Deeply resolute, icy, unshakeable under supreme pressure, possessing iron tactical decisiveness",
    "deedsZh": "暗中豢养死士三千，高平陵之变一夜骤发掌控洛阳；统军平定毌丘俭、文钦之乱；眼疾剧痛仍勒兵大破强敌，震慑天下。",
    "deedsEn": "Secretly drilled 3,000 elite retainers and seized Luoyang overnight during the Gaoping Tomb coup; suppressed massive rebellions despite severe eye trauma, securing his family's iron grip on the empire.",
    "archetype": "executive",
    "fiveElements": {
      "dominant": "金",
      "secondary": "水"
    },
    "tenGodsAffinity": [
      "七杀",
      "偏印",
      "劫财"
    ],
    "patternType": "七杀格",
    "strengthAdviceZh": "静如磐石、动如奔雷的战略定力！善于在暗中积蓄压倒性杠杆，在命运决战窗口一击定乾坤。",
    "strengthAdviceEn": "Unyielding strategic discipline! Accumulate overwhelming leverage in total silence and strike decisively at historic pivot points.",
    "weaknessAdviceZh": "性格过刚过烈、猜忌嗜杀，对肉体极限过度透支，缺乏温润仁德护体导致英年早卒。",
    "weaknessAdviceEn": "Excessive ruthlessness and physical overexertion; lack of benevolence drained vital reserve leading to premature death.",
    "historicalQuoteZh": "《晋书》评：景皇养威持重，运筹决胜，内弘武略，外廓宏规，高平之事，神武绝伦。",
    "historicalQuoteEn": "Book of Jin: Emperor Jing possessed terrifying poise and decisive strategic mastery, executing the Gaoping coup with peerless martial genius.",
    "auxiliaryStrengthsZh": [
      "静如磐石、动如奔雷的战略定力",
      "善于在暗中积蓄压倒性杠杆，在命运决战窗口一击定乾坤"
    ],
    "auxiliaryStrengthsEn": [
      "Unyielding strategic discipline",
      "Accumulate overwhelming leverage in total silence and strike decisively at historic pivot points"
    ],
    "auxiliaryWeaknessesZh": [
      "性格过刚过烈、猜忌嗜杀",
      "对肉体极限过度透支，缺乏温润仁德护体导致英年早卒"
    ],
    "auxiliaryWeaknessesEn": [
      "Excessive ruthlessness and physical overexertion",
      "lack of benevolence drained vital reserve leading to premature death"
    ]
  },
  {
    "id": "sima_fu",
    "nameZh": "司马孚",
    "nameEn": "Sima Fu (Prince Xian of Anping)",
    "dynastyZh": "西晋",
    "dynastyEn": "Western Jin",
    "eraTag": "western_jin",
    "eraNameZh": "西晋风云",
    "eraNameEn": "Western Jin Dynastic Era",
    "positionZh": "西晋太宰 · 安平献王 · 历事魏晋长寿宗室",
    "positionEn": "Grand Tutor of Western Jin · Prince Xian of Anping · Venerable Statesman across Wei and Jin",
    "personalityZh": "忠谨宽厚、持身贞固、守节自律、享寿九十三岁",
    "personalityEn": "Faithfully prudent, morally unshakeable, living with strict personal integrity to age 93",
    "deedsZh": "曹髦遇害时枕尸痛哭自称魏臣；魏晋易代之际不居首功，始终坚守伦理底线；历仕魏晋四世，以纯德善终。",
    "deedsEn": "Wept bitterly over Emperor Cao Mao's body declaring himself forever a Wei minister; maintained absolute moral decorum during dynastic transition, living in peace and honor to age 93.",
    "archetype": "civil",
    "fiveElements": {
      "dominant": "水",
      "secondary": "木"
    },
    "tenGodsAffinity": [
      "正印",
      "正官",
      "比肩"
    ],
    "patternType": "正印格",
    "strengthAdviceZh": "以德全躯的大德寿者智慧！在最凶险的政治漩涡中坚守道德压舱石，不争功、不树敌，赢得朝野无上敬仰。",
    "strengthAdviceEn": "Supreme longevity and ethical ballast! Preserved moral boundaries amid brutal political storms, earning universal reverence by avoiding factional pride.",
    "weaknessAdviceZh": "在家族夺权的滔天大势前无力扭转乾坤，独善其身虽全其节，终究只能作悲壮的旁观者。",
    "weaknessAdviceEn": "Powerless to alter his clan's violent usurpation; righteous restraint could only offer tragic moral witness rather than institutional correction.",
    "historicalQuoteZh": "孚临终遗令：‘有魏贞士安平献王司马孚之墓。’晋武帝素服举哀，望轀訞而恸。",
    "historicalQuoteEn": "Book of Jin: On his deathbed Sima Fu ordered his tomb to read 'Tomb of the Loyal Wei Hermit Sima Fu'; Emperor Wu wept bitterly in mourning attire.",
    "auxiliaryStrengthsZh": [
      "以德全躯的大德寿者智慧",
      "在最凶险的政治漩涡中坚守道德压舱石，不争功、不树敌，赢得朝野无上敬仰"
    ],
    "auxiliaryStrengthsEn": [
      "Supreme longevity and ethical ballast",
      "Preserved moral boundaries amid brutal political storms, earning universal reverence by avoiding factional pride"
    ],
    "auxiliaryWeaknessesZh": [
      "在家族夺权的滔天大势前无力扭转乾坤",
      "独善其身虽全其节，终究只能作悲壮的旁观者"
    ],
    "auxiliaryWeaknessesEn": [
      "Powerless to alter his clan's violent usurpation",
      "righteous restraint could only offer tragic moral witness rather than institutional correction"
    ]
  },
  {
    "id": "chen_shou",
    "nameZh": "陈寿",
    "nameEn": "Chen Shou",
    "dynastyZh": "西晋",
    "dynastyEn": "Western Jin",
    "eraTag": "western_jin",
    "eraNameZh": "西晋风云",
    "eraNameEn": "Western Jin Dynastic Era",
    "positionZh": "西晋著作郎 · 《三国志》作者 · 史学巨匠",
    "positionEn": "Gentleman of Writing of Western Jin · Author of Records of the Three Kingdoms",
    "personalityZh": "文笔简练、秉笔直书、隐忍治学、考据精严",
    "personalityEn": "Concise in prose, strictly objective in record, persevering under adversity, rigorous in research",
    "deedsZh": "蜀亡后入洛阳任著作郎，历尽政治排挤；穷数十年之心力，撰写六十五卷《三国志》，叙事简而有法，流芳百世。",
    "deedsEn": "Surviving Shu Han's fall, entered Luoyang as court writer amid factional suspicion; compiled the 65-volume Records of the Three Kingdoms, renowned forever for precision and integrity.",
    "archetype": "specialist",
    "fiveElements": {
      "dominant": "木",
      "secondary": "水"
    },
    "tenGodsAffinity": [
      "食神",
      "偏印",
      "正官"
    ],
    "patternType": "食神吐秀",
    "strengthAdviceZh": "以客观硬核作品立身百代的专家风范！面对现实打击沉下心打磨不朽传世成果，文字简练而千钧重。",
    "strengthAdviceEn": "Immortal specialist authority through ironclad masterworks! Converted career frustration into timeless scholarship with concise, piercing eloquence.",
    "weaknessAdviceZh": "不擅官场阿谀逢迎与权贵结网，屡遭小人借父丧不守礼等私德非议中伤贬抑。",
    "weaknessAdviceEn": "Lacked agility in court intrigue, frequently marginalized by jealous rivals over trivial personal protocol accusations.",
    "historicalQuoteZh": "《晋书》本传：寿善叙事，有良史之才。夏侯湛读其书，便毁己之作。",
    "historicalQuoteEn": "Book of Jin: Chen Shou was brilliant in historical narrative; scholar Xiahou Zhan burned his own unfinished history upon reading Chen's masterpiece.",
    "auxiliaryStrengthsZh": [
      "以客观硬核作品立身百代的专家风范",
      "面对现实打击沉下心打磨不朽传世成果，文字简练而千钧重"
    ],
    "auxiliaryStrengthsEn": [
      "Immortal specialist authority through ironclad masterworks",
      "Converted career frustration into timeless scholarship with concise, piercing eloquence"
    ],
    "auxiliaryWeaknessesZh": [
      "不擅官场阿谀逢迎与权贵结网",
      "屡遭小人借父丧不守礼等私德非议中伤贬抑"
    ],
    "auxiliaryWeaknessesEn": [
      "Lacked agility in court intrigue",
      "frequently marginalized by jealous rivals over trivial personal protocol accusations"
    ]
  },
  {
    "id": "wang_xiang",
    "nameZh": "王祥",
    "nameEn": "Wang Xiang",
    "dynastyZh": "西晋",
    "dynastyEn": "Western Jin",
    "eraTag": "western_jin",
    "eraNameZh": "西晋风云",
    "eraNameEn": "Western Jin Dynastic Era",
    "positionZh": "西晋太保 · 二十四孝‘卧冰求鲤’原型 · 三公重臣",
    "positionEn": "Grand Protector of Western Jin · Archetype of Filial Piety · Supreme Minister",
    "personalityZh": "笃孝仁厚、识度清穆、德高望重、进退有度",
    "personalityEn": "Exemplary in filial piety, dignified and serene, widely venerated, measured in court conduct",
    "deedsZh": "后母虐待仍纯孝无违，卧冰求鲤传唱千年；魏晋朝中以道德楷模辅政，司马昭每见之必拜，晚年优游告老善终。",
    "deedsEn": "Endured stepmother's cruelty with unwavering filial devotion; rose to the pinnacle of state as Grand Protector, commanding profound deference from regents and emperors alike.",
    "archetype": "civil",
    "fiveElements": {
      "dominant": "土",
      "secondary": "水"
    },
    "tenGodsAffinity": [
      "正印",
      "正官",
      "正财"
    ],
    "patternType": "正印格",
    "strengthAdviceZh": "以至纯人格魅力与伦理声望构筑不可动摇的防护盾！用孝悌仁厚立身，胜过万千权术谋算。",
    "strengthAdviceEn": "Unshakeable moral authority and personal gravitas! Building reputation on authentic virtue shields against ruthless political turbulence.",
    "weaknessAdviceZh": "性情过于笃厚循规，面对西晋宗室日益骄奢与奢靡之风难以从制度层面强行力挽狂澜。",
    "weaknessAdviceEn": "Temperament was overly gentle and protocol-bound, unable to structurally curb the rampant luxury and corruption of the Jin nobility.",
    "historicalQuoteZh": "《晋书》评：王祥孝悌之德，感通神明。辅相二代，弼谐朝野，海内归仁。",
    "historicalQuoteEn": "Book of Jin: Wang Xiang's sublime virtue touched heaven; serving two reigns with harmony, he stood as the empire's moral anchor.",
    "auxiliaryStrengthsZh": [
      "以至纯人格魅力与伦理声望构筑不可动摇的防护盾",
      "用孝悌仁厚立身，胜过万千权术谋算"
    ],
    "auxiliaryStrengthsEn": [
      "Unshakeable moral authority and personal gravitas",
      "Building reputation on authentic virtue shields against ruthless political turbulence"
    ],
    "auxiliaryWeaknessesZh": [
      "性情过于笃厚循规",
      "面对西晋宗室日益骄奢与奢靡之风难以从制度层面强行力挽狂澜"
    ],
    "auxiliaryWeaknessesEn": [
      "Temperament was overly gentle and protocol-bound",
      "unable to structurally curb the rampant luxury and corruption of the Jin nobility"
    ]
  },
  {
    "id": "shan_tao",
    "nameZh": "山涛",
    "nameEn": "Shan Tao",
    "dynastyZh": "西晋",
    "dynastyEn": "Western Jin",
    "eraTag": "western_jin",
    "eraNameZh": "西晋风云",
    "eraNameEn": "Western Jin Dynastic Era",
    "positionZh": "西晋吏部尚书 · 竹林七贤之一 · 选拔官吏国士",
    "positionEn": "Minister of Personnel of Western Jin · One of Seven Sages of Bamboo Grove · Master Talent Scout",
    "personalityZh": "大智若愚、外圆内方、识人之明、融汇玄儒",
    "personalityEn": "Wise beneath apparent simplicity, internally upright yet outwardly pragmatic, possessing peerless insight into human talent",
    "deedsZh": "身在竹林心系天下，转任吏部尚书选拔天下俊杰，所举皆成重器（山涛启事）；嵇康虽与绝交然临死将孤儿托付于山涛，足见其人品信义。",
    "deedsEn": "Bridged Bamboo Grove hermitage and court governance; served as Minister of Personnel picking top talent without favoritism. Even Ji Kang entrusted his son to him upon execution.",
    "archetype": "executive",
    "fiveElements": {
      "dominant": "土",
      "secondary": "木"
    },
    "tenGodsAffinity": [
      "正官",
      "正印",
      "伤官"
    ],
    "patternType": "官印相生",
    "strengthAdviceZh": "在理想与现实间游刃有余的顶级人事统帅！外表旷达而内心极其严密，善于在复杂权力网中识拔并保护真才。",
    "strengthAdviceEn": "Supreme talent architect bridging vision and harsh reality! Balanced worldly adaptability with profound inner integrity to cultivate elite successors.",
    "weaknessAdviceZh": "处事过于中庸圆融，虽能保全自我与朋友，但面对西晋腐败士族门阀的大势妥协过多。",
    "weaknessAdviceEn": "Pragmatic compromise and excessive moderation left institutional roots of aristocratic decay largely untouched.",
    "historicalQuoteZh": "嵇康临诛，戒子绍曰：‘巨源在，汝不孤矣！’《晋书》：山涛甄拔人物，各极其量。",
    "historicalQuoteEn": "Before execution, Ji Kang told his son: 'With Shan Juyuan alive, you are never an orphan!' Book of Jin: Shan Tao elevated men to their exact potential.",
    "auxiliaryStrengthsZh": [
      "在理想与现实间游刃有余的顶级人事统帅",
      "外表旷达而内心极其严密，善于在复杂权力网中识拔并保护真才"
    ],
    "auxiliaryStrengthsEn": [
      "Supreme talent architect bridging vision and harsh reality",
      "Balanced worldly adaptability with profound inner integrity to cultivate elite successors"
    ],
    "auxiliaryWeaknessesZh": [
      "处事过于中庸圆融",
      "虽能保全自我与朋友，但面对西晋腐败士族门阀的大势妥协过多"
    ],
    "auxiliaryWeaknessesEn": [
      "Pragmatic compromise and excessive moderation left institutional roots of aristocratic decay largely untouched.",
      "Erects rigid ethical and behavioral safeguards against blindspots."
    ]
  },
  {
    "id": "xiang_xiu",
    "nameZh": "向秀",
    "nameEn": "Xiang Xiu",
    "dynastyZh": "西晋",
    "dynastyEn": "Western Jin",
    "eraTag": "western_jin",
    "eraNameZh": "西晋风云",
    "eraNameEn": "Western Jin Dynastic Era",
    "positionZh": "西晋黄门侍郎 · 《庄子注》奠基者 · 《思旧赋》作者",
    "positionEn": "Yellow Gate Attendant of Western Jin · Master Commentator on Zhuangzi · Author of Reminiscence of the Past",
    "personalityZh": "玄思玄妙、隐忍寄托、深情悲悯、不争于世",
    "personalityEn": "Philosophically profound, patient, quietly mournful, avoiding violent clashes with prevailing power",
    "deedsZh": "竹林玄学名家，撰《庄子注》启发郭象；嵇康、吕安被诛后被迫入洛应辟，作《思旧赋》追忆故友，文辞哀婉千古动容。",
    "deedsEn": "Core Bamboo Grove philosopher; pioneered Zhuangzi exegesis. After Ji Kang's death, forced to serve at court, composing the heartbreaking Reminiscence of the Past to honor fallen friends.",
    "archetype": "specialist",
    "fiveElements": {
      "dominant": "水",
      "secondary": "木"
    },
    "tenGodsAffinity": [
      "偏印",
      "伤官",
      "正财"
    ],
    "patternType": "偏印格",
    "strengthAdviceZh": "以精神深邃与哲学穿透力完成自我救赎！即便身处逼仄高压环境，亦能用传世篇章安放灵魂。",
    "strengthAdviceEn": "Philosophical transcendence and intellectual depth! Able to safeguard one's core spirit through profound creative output even under severe external pressure.",
    "weaknessAdviceZh": "面对强权压制缺乏正面反抗的决断，在现实与妥协间常抱有深沉的内耗与精神创伤。",
    "weaknessAdviceEn": "Helpless against imperial coercion; endured persistent cognitive friction and sorrow in accommodating power.",
    "historicalQuoteZh": "司马昭问：‘卿有箕山之志，何以至此？’秀曰：‘巢、许狷介之士，未足以多慕。’昭甚悦。",
    "historicalQuoteEn": "When regent Sima Zhao mocked his arrival at court, Xiang Xiu tactfully deflected: 'Ancient hermits were too rigid to blindly imitate,' disarming suspicious power.",
    "auxiliaryStrengthsZh": [
      "以精神深邃与哲学穿透力完成自我救赎",
      "即便身处逼仄高压环境，亦能用传世篇章安放灵魂"
    ],
    "auxiliaryStrengthsEn": [
      "Philosophical transcendence and intellectual depth",
      "Able to safeguard one's core spirit through profound creative output even under severe external pressure"
    ],
    "auxiliaryWeaknessesZh": [
      "面对强权压制缺乏正面反抗的决断",
      "在现实与妥协间常抱有深沉的内耗与精神创伤"
    ],
    "auxiliaryWeaknessesEn": [
      "Helpless against imperial coercion",
      "endured persistent cognitive friction and sorrow in accommodating power"
    ]
  },
  {
    "id": "zhou_chu",
    "nameZh": "周处",
    "nameEn": "Zhou Chu",
    "dynastyZh": "西晋",
    "dynastyEn": "Western Jin",
    "eraTag": "western_jin",
    "eraNameZh": "西晋风云",
    "eraNameEn": "Western Jin Dynastic Era",
    "positionZh": "西晋建威将军 · 平西将军 · ‘周处除三害’主角",
    "positionEn": "General of Western Jin · Hero of Legend 'Zhou Chu Eliminating the Three Evils'",
    "personalityZh": "勇力过人、知耻后勇、刚正不阿、死战尽节",
    "personalityEn": "Fierce martial prowess, transforming remorse into sterling courage, unbending in justice, dying in duty",
    "deedsZh": "年少横暴乡里，后射虎斩蛟痛改前非除三害；入晋为官刚直不阿弹劾权贵梁王司马肜；出征氐羌叛乱遭梁王故意断后，弹尽粮绝斩敌数千战死沙场。",
    "deedsEn": "Reformed youthful hooliganism by slaying tiger and dragon; served as incorruptible imperial magistrate censuring corrupt princes. Betrayed by jealous commanders in battle, fought to the last arrow.",
    "archetype": "military",
    "fiveElements": {
      "dominant": "金",
      "secondary": "火"
    },
    "tenGodsAffinity": [
      "七杀",
      "比肩",
      "食神"
    ],
    "patternType": "食神制杀",
    "strengthAdviceZh": "浪子回头金不换的史诗蜕变力！具备顶级执行力与视死如归的亮剑精神，面对任何强敌从不退缩半步。",
    "strengthAdviceEn": "Legendary power of self-redemption! Possesses indomitable willpower and fearless frontline execution against overwhelming adversity.",
    "weaknessAdviceZh": "刚烈过甚、不谙官场同僚暗算与政治阴谋防范；明知权贵借刀杀人仍无后方防波堤支撑，导致悲壮捐躯。",
    "weaknessAdviceEn": "Excessive blunt rigidity without political defense firewalls; walked knowingly into fatal military sabotage by vengeful corrupt superiors.",
    "historicalQuoteZh": "临战作诗：‘去去世事已，策马感悲思。慷慨身当死，天道安可期！’《晋书》忠烈传第一。",
    "historicalQuoteEn": "Composed poem before his last charge: 'Worldly ties fade away; courage demands I die for duty today!' Head of Book of Jin's Martyrs Volume.",
    "auxiliaryStrengthsZh": [
      "浪子回头金不换的史诗蜕变力",
      "具备顶级执行力与视死如归的亮剑精神，面对任何强敌从不退缩半步"
    ],
    "auxiliaryStrengthsEn": [
      "Legendary power of self-redemption",
      "Possesses indomitable willpower and fearless frontline execution against overwhelming adversity"
    ],
    "auxiliaryWeaknessesZh": [
      "刚烈过甚、不谙官场同僚暗算与政治阴谋防范",
      "明知权贵借刀杀人仍无后方防波堤支撑，导致悲壮捐躯"
    ],
    "auxiliaryWeaknessesEn": [
      "Excessive blunt rigidity without political defense firewalls",
      "walked knowingly into fatal military sabotage by vengeful corrupt superiors"
    ]
  },
  {
    "id": "wei_guan",
    "nameZh": "卫瓘",
    "nameEn": "Wei Guan",
    "dynastyZh": "西晋",
    "dynastyEn": "Western Jin",
    "eraTag": "western_jin",
    "eraNameZh": "西晋风云",
    "eraNameEn": "Western Jin Dynastic Era",
    "positionZh": "西晋太保 · 录尚书事 · 平蜀定乱总监军",
    "positionEn": "Grand Protector of Western Jin · Chancellor · Master Supervisor of Shu Conquest",
    "personalityZh": "精敏机警、识见卓异、法度严谨、书法草隶宗匠",
    "personalityEn": "Sharply alert, profound in foresight, legally meticulous, renowned calligrapher of draft script",
    "deedsZh": "监军伐蜀，在钟会邓艾反乱危局中以智巧全身而退并平定叛乱；武帝时抚育惠帝知其不慧曾托辞规谏；八王之乱初起被贾南风矫诏杀害。",
    "deedsEn": "Supervised conquest of Shu, deftly outmaneuvering rebellions by generals Zhong Hui and Deng Ai; subtly warned Emperor Wu of heir's foolishness; martyred early in the War of the Eight Princes.",
    "archetype": "executive",
    "fiveElements": {
      "dominant": "金",
      "secondary": "土"
    },
    "tenGodsAffinity": [
      "正官",
      "偏印",
      "正财"
    ],
    "patternType": "杀印相生",
    "strengthAdviceZh": "在极端混乱中借力打力、化险为夷的高维政务高手！拥有缜密的法律程序思维与敏锐的风向捕捉力。",
    "strengthAdviceEn": "Master of crisis leverage and procedural navigation! Disarm lethal conspiracies through razor-sharp administrative and legal maneuvering.",
    "weaknessAdviceZh": "规谏储君时过于含蓄（抚床叹曰此坐可惜），未能坚决阻击贾后夺权，在宫廷政变突发时应对迟缓。",
    "weaknessAdviceEn": "Too polite and subtle in warning against the incompetent crown prince; caught unprepared by Empress Jia's sudden bloody coup.",
    "historicalQuoteZh": "《晋书》评：卫瓘筹策清长，风神秀雅，平蜀乱于既崩之势，制危局于顾盼之间。",
    "historicalQuoteEn": "Book of Jin: Wei Guan possessed far-reaching intellect and refined bearing, subduing the chaotic Shu mutiny with peerless presence of mind.",
    "auxiliaryStrengthsZh": [
      "在极端混乱中借力打力、化险为夷的高维政务高手",
      "拥有缜密的法律程序思维与敏锐的风向捕捉力"
    ],
    "auxiliaryStrengthsEn": [
      "Master of crisis leverage and procedural navigation",
      "Disarm lethal conspiracies through razor-sharp administrative and legal maneuvering"
    ],
    "auxiliaryWeaknessesZh": [
      "规谏储君时过于含蓄（抚床叹曰此坐可惜）",
      "未能坚决阻击贾后夺权，在宫廷政变突发时应对迟缓"
    ],
    "auxiliaryWeaknessesEn": [
      "Too polite and subtle in warning against the incompetent crown prince",
      "caught unprepared by Empress Jia's sudden bloody coup"
    ]
  },
  {
    "id": "jia_chong",
    "nameZh": "贾充",
    "nameEn": "Jia Chong",
    "dynastyZh": "西晋",
    "dynastyEn": "Western Jin",
    "eraTag": "western_jin",
    "eraNameZh": "西晋风云",
    "eraNameEn": "Western Jin Dynastic Era",
    "positionZh": "西晋司空 · 太尉 · 司马氏第一谋臣 · 制定泰始律令",
    "positionEn": "Grand Commander of Western Jin · Paramount Advisor of Sima Clan · Drafter of Taishi Legal Code",
    "personalityZh": "狡谲狠厉、政治嗅觉极强、善附强权、家门失教",
    "personalityEn": "Crafty, ruthless, possessed of uncanny survival instincts, loyal to power brokers yet disastrous in family governance",
    "deedsZh": "甘露之变中命成济当街弑杀曹髦，为司马昭立下首功；主持编纂《泰始律》奠定晋朝法度；将恶妻悍女贾南风送入东宫，毒乱天下。",
    "deedsEn": "Ordered the street murder of Emperor Cao Mao, clinching absolute power for the Sima family; drafted the empire's foundational Taishi Legal Code, yet engineered his tyrannical daughter Jia Nanfeng into empress.",
    "archetype": "executive",
    "fiveElements": {
      "dominant": "土",
      "secondary": "金"
    },
    "tenGodsAffinity": [
      "偏财",
      "七杀",
      "劫财"
    ],
    "patternType": "七杀破军",
    "strengthAdviceZh": "顶级政治风向捕捉者与制度起草人！敢于背负骂名承担最险恶任务，以硬核法典成果稳固自身政治生态。",
    "strengthAdviceEn": "Supreme court survivalist and codifier! Ready to absorb public wrath to deliver mission-critical outcomes for apex stakeholders.",
    "weaknessAdviceZh": "家风败坏、私德尽失！为保权位纵容悍女贾南风入主中宫，最终引爆八王之乱毁掉西晋半壁江山，遭万世唾骂。",
    "weaknessAdviceEn": "Moral bankruptcy in family succession; placing dynastic power in the hands of his depraved daughter plunged the empire into total ruin.",
    "historicalQuoteZh": "《晋书》评：充虽赞成大业，然甘露之事，天下痛心，家门不肃，覆国殃民。",
    "historicalQuoteEn": "Book of Jin: Though Jia Chong helped build the Jin empire, the murder of Cao Mao and the elevation of his daughter cursed the realm forever.",
    "auxiliaryStrengthsZh": [
      "顶级政治风向捕捉者与制度起草人",
      "敢于背负骂名承担最险恶任务，以硬核法典成果稳固自身政治生态"
    ],
    "auxiliaryStrengthsEn": [
      "Supreme court survivalist and codifier",
      "Ready to absorb public wrath to deliver mission-critical outcomes for apex stakeholders"
    ],
    "auxiliaryWeaknessesZh": [
      "家风败坏、私德尽失",
      "为保权位纵容悍女贾南风入主中宫，最终引爆八王之乱毁掉西晋半壁江山，遭万世唾骂"
    ],
    "auxiliaryWeaknessesEn": [
      "Moral bankruptcy in family succession",
      "placing dynastic power in the hands of his depraved daughter plunged the empire into total ruin"
    ]
  },
  {
    "id": "wang_jun_yz",
    "nameZh": "王浚(幽州)",
    "nameEn": "Wang Jun (Governor of Youzhou)",
    "dynastyZh": "西晋",
    "dynastyEn": "Western Jin",
    "eraTag": "western_jin",
    "eraNameZh": "西晋风云",
    "eraNameEn": "Western Jin Dynastic Era",
    "positionZh": "西晋幽州刺史 · 大司马 · 割据北方引鲜卑入塞",
    "positionEn": "Governor of Youzhou · Grand Marshal of Jin · Warlord who introduced Xianbei cavalry",
    "personalityZh": "野心勃勃、自负骄纵、引狼入室、偏安妄尊",
    "personalityEn": "Ambitious, arrogant, blind to fatal geopolitical risks, prone to delusion of grandeur",
    "deedsZh": "坐拥幽州精兵，与鲜卑段部联姻，引异族铁骑南下屠戮中原；西晋倾覆之际不思勤王，反而贪图帝位妄图登基，终被后赵石勒伪降生擒处斩。",
    "deedsEn": "Commanded formidable Youzhou borders, allying with Xianbei tribes to terrorize rivals; rather than rescue the dying empire, sought imperial title, only to be outwitted, captured, and beheaded by Shi Le.",
    "archetype": "military",
    "fiveElements": {
      "dominant": "金",
      "secondary": "火"
    },
    "tenGodsAffinity": [
      "劫财",
      "七杀",
      "偏财"
    ],
    "patternType": "劫财格",
    "strengthAdviceZh": "敏锐洞察并调动跨界外部暴力杠杆（鲜卑突骑）打破内陆博弈僵局的边疆枭雄手腕。",
    "strengthAdviceEn": "Audacity in weaponizing alien external coalitions to overturn domestic political deadlocks.",
    "weaknessAdviceZh": "贪欲过炽、轻信佞言、缺乏对终局博弈的深度推演，引狼入室终反被豺狼吞噬。",
    "weaknessAdviceEn": "Fatal vanity and geopolitical gullibility; inviting ferocious external beasts ultimately led to his own decapitation.",
    "historicalQuoteZh": "《晋书》评：王浚图危托附，引戎启寇，专制一方，终罹俘戮。",
    "historicalQuoteEn": "Book of Jin: Wang Jun unleashed barbarian hordes to serve private ambition, ruling as a tyrant until Shi Le captured and butchered him.",
    "auxiliaryStrengthsZh": [
      "敏锐洞察并调动跨界外部暴力杠杆（鲜卑突骑）打破内陆博弈僵局的边疆枭雄手腕。",
      "善于发挥自身核心优势穿透迷局"
    ],
    "auxiliaryStrengthsEn": [
      "Audacity in weaponizing alien external coalitions to overturn domestic political deadlocks.",
      "Leverages core natural talents to pierce strategic bottlenecks."
    ],
    "auxiliaryWeaknessesZh": [
      "贪欲过炽、轻信佞言、缺乏对终局博弈的深度推演",
      "引狼入室终反被豺狼吞噬"
    ],
    "auxiliaryWeaknessesEn": [
      "Fatal vanity and geopolitical gullibility",
      "inviting ferocious external beasts ultimately led to his own decapitation"
    ]
  },
  {
    "id": "zuo_si",
    "nameZh": "左思",
    "nameEn": "Zuo Si",
    "dynastyZh": "西晋",
    "dynastyEn": "Western Jin",
    "eraTag": "western_jin",
    "eraNameZh": "西晋风云",
    "eraNameEn": "Western Jin Dynastic Era",
    "positionZh": "西晋秘书郎 · 《三都赋》作者 · ‘洛阳纸贵’典故主角",
    "positionEn": "Imperial Secretary of Western Jin · Author of Three Capitals Rhapsody · Origin of 'Luoyang Paper Scarcity'",
    "personalityZh": "貌寝讷言、十年磨剑、傲骨凌霜、甘于寂寞",
    "personalityEn": "Plain in appearance and quiet in speech, yet enduring ten years of intense solitary toil to create immortal art",
    "deedsZh": "寒门出身相貌丑陋，然闭门十年苦研构思《三都赋》，问世后轰动京师，豪贵竞相抄写导致‘洛阳纸贵’；诗作《咏史》痛斥门阀‘金玉满堂，何用孤高！’",
    "deedsEn": "Humble and unattractive, labored ten years in seclusion to compose the Rhapsody on the Three Capitals, causing paper scarcity across Luoyang; his poems fiercely attacked aristocratic privilege.",
    "archetype": "specialist",
    "fiveElements": {
      "dominant": "土",
      "secondary": "金"
    },
    "tenGodsAffinity": [
      "偏印",
      "伤官",
      "食神"
    ],
    "patternType": "食伤生财",
    "strengthAdviceZh": "十年如一日坐冷板凳的深厚匠心与破圈神力！不靠出身与颜值，纯凭无可匹敌的硬核产品击穿时代壁垒。",
    "strengthAdviceEn": "Legendary craftsmanship through ten years of silent, monastic focus! Obliterated social glass ceilings solely through an undeniable masterpiece.",
    "weaknessAdviceZh": "社交表达与人际公关能力偏弱，在门阀等级森严的西晋官场受尽寒门出身的无形压制。",
    "weaknessAdviceEn": "Lacked court charisma and political networking, remaining permanently excluded from the highest state offices by hereditary oligarchs.",
    "historicalQuoteZh": "《晋书》本传：左思构思十年，门庭籓溷，皆著笔砚，赋成，洛阳纸贵。",
    "historicalQuoteEn": "Book of Jin: Zuo Si labored a decade, placing inkstones even in doorways and outhouses; when finished, wealthy patrons copied it until paper ran out.",
    "auxiliaryStrengthsZh": [
      "十年如一日坐冷板凳的深厚匠心与破圈神力",
      "不靠出身与颜值，纯凭无可匹敌的硬核产品击穿时代壁垒"
    ],
    "auxiliaryStrengthsEn": [
      "Legendary craftsmanship through ten years of silent, monastic focus",
      "Obliterated social glass ceilings solely through an undeniable masterpiece"
    ],
    "auxiliaryWeaknessesZh": [
      "社交表达与人际公关能力偏弱",
      "在门阀等级森严的西晋官场受尽寒门出身的无形压制"
    ],
    "auxiliaryWeaknessesEn": [
      "Lacked court charisma and political networking",
      "remaining permanently excluded from the highest state offices by hereditary oligarchs"
    ]
  },
  {
    "id": "liu_yao",
    "nameZh": "刘曜",
    "nameEn": "Liu Yao (Emperor of Former Zhao)",
    "dynastyZh": "前赵",
    "dynastyEn": "Former Zhao (Sixteen Kingdoms)",
    "eraTag": "sixteen_kingdoms",
    "eraNameZh": "十六国争霸",
    "eraNameEn": "Sixteen Kingdoms Hegemonic Era",
    "positionZh": "前赵皇帝 · 匈奴骁骑铁腕帝王 · 攻陷洛阳长安",
    "positionEn": "Emperor of Former Zhao · Fierce Xiongnu Cavalry Monarch · Conqueror of Luoyang and Chang'an",
    "personalityZh": "勇冠三军、铁血骁悍、嗜酒好杀、兼通儒书",
    "personalityEn": "Peerless warrior emperor, lethal in cavalry shock, prone to heavy drinking, surprisingly cultured in classics",
    "deedsZh": "身长九尺开七石硬弓，两破西晋二帝攻克洛阳长安；建立前赵横扫关陇；然在与后赵石勒决战洛阳时，战前豪饮数斗马陷冰坑被俘遇弑。",
    "deedsEn": "Towering archer-king who led forces capturing Western Jin's dual capitals; subdued the northwest, but drank excessively before the climactic battle against Shi Le, falling into ice and getting captured.",
    "archetype": "military",
    "fiveElements": {
      "dominant": "金",
      "secondary": "水"
    },
    "tenGodsAffinity": [
      "七杀",
      "劫财",
      "伤官"
    ],
    "patternType": "阳刃驾杀",
    "strengthAdviceZh": "冲锋陷阵无坚不摧的狂暴突击力！在乱世中敢于以少胜多，以肉身绝对力量摧毁既有统治秩序。",
    "strengthAdviceEn": "Unstoppable shock cavalry momentum! Shatters entrenched dynastic orders through raw courage and frontline martial brilliance.",
    "weaknessAdviceZh": "在决定生死存亡的终局博弈前放纵嗜酒、情绪失控，致命的非理性行为直接毁掉整座帝国。",
    "weaknessAdviceEn": "Catastrophic lack of self-discipline at the ultimate crucible; drunkenness before battle cost him his empire and life.",
    "historicalQuoteZh": "《晋书》载曜临战：‘饮酒数斗，常乘赤马，入阵马踣，为石勒所擒。’",
    "historicalQuoteEn": "Book of Jin: Liu Yao drank heavily before battle; his steed stumbled into cracked ice, leading to capture by his arch-rival Shi Le.",
    "auxiliaryStrengthsZh": [
      "冲锋陷阵无坚不摧的狂暴突击力",
      "在乱世中敢于以少胜多，以肉身绝对力量摧毁既有统治秩序"
    ],
    "auxiliaryStrengthsEn": [
      "Unstoppable shock cavalry momentum",
      "Shatters entrenched dynastic orders through raw courage and frontline martial brilliance"
    ],
    "auxiliaryWeaknessesZh": [
      "在决定生死存亡的终局博弈前放纵嗜酒、情绪失控",
      "致命的非理性行为直接毁掉整座帝国"
    ],
    "auxiliaryWeaknessesEn": [
      "Catastrophic lack of self-discipline at the ultimate crucible",
      "drunkenness before battle cost him his empire and life"
    ]
  },
  {
    "id": "fu_hong",
    "nameZh": "苻洪",
    "nameEn": "Fu Hong",
    "dynastyZh": "前秦",
    "dynastyEn": "Former Qin (Sixteen Kingdoms)",
    "eraTag": "sixteen_kingdoms",
    "eraNameZh": "十六国争霸",
    "eraNameEn": "Sixteen Kingdoms Hegemonic Era",
    "positionZh": "前秦太祖 · 氐族酋领 · 大都督 · 前秦奠基始祖",
    "positionEn": "Founding Progenitor of Former Qin · Grand Chieftain of Di Clan · Grand Viceroy",
    "personalityZh": "雄鸷果决、审时度势、厚抚部曲、坚韧善战",
    "personalityEn": "Shrewd, audacious, master at reading geopolitical winds, beloved by his clan and troops",
    "deedsZh": "率氐族部众在刘曜、石勒之间反复纵横捭阖积蓄实力；石虎死后自称三秦王欲归关中，遭降将麻秋毒杀，临终诫子苻健‘急入关中’，奠定前秦基业。",
    "deedsEn": "Skillfully balanced between rival conquerors to preserve and grow his Di tribal coalition; poisoned by a traitor, on his deathbed commanded his son to seize Chang'an immediately, birthing Former Qin.",
    "archetype": "executive",
    "fiveElements": {
      "dominant": "土",
      "secondary": "木"
    },
    "tenGodsAffinity": [
      "比肩",
      "七杀",
      "偏财"
    ],
    "patternType": "建禄格",
    "strengthAdviceZh": "在超级大国夹缝中求生存壮大的战略隐忍与爆发力！临终指明唯一正确的战略要地（关中）。",
    "strengthAdviceEn": "Geopolitical balance and strategic endurance among warring titans! Pinpointed the decisive geographical lever for his dynasty.",
    "weaknessAdviceZh": "对新归降将领的背叛风险防范不足，轻信小人导致身中剧毒含恨而终。",
    "weaknessAdviceEn": "Insufficient internal counter-intelligence against freshly surrendered defectors, dying prematurely of poison.",
    "historicalQuoteZh": "洪临终谓健曰：‘吾所以未入关者，以为燕、赵可兼。今死矣，汝等宜速入关！’《晋书》：洪沉毅多大度。",
    "historicalQuoteEn": "Dying command to his heir: 'Do not tarry in the east; seize the mountain passes of Chang'an at once!' Book of Jin praises his resolute vision.",
    "auxiliaryStrengthsZh": [
      "在超级大国夹缝中求生存壮大的战略隐忍与爆发力",
      "临终指明唯一正确的战略要地（关中）"
    ],
    "auxiliaryStrengthsEn": [
      "Geopolitical balance and strategic endurance among warring titans",
      "Pinpointed the decisive geographical lever for his dynasty"
    ],
    "auxiliaryWeaknessesZh": [
      "对新归降将领的背叛风险防范不足",
      "轻信小人导致身中剧毒含恨而终"
    ],
    "auxiliaryWeaknessesEn": [
      "Insufficient internal counter-intelligence against freshly surrendered defectors",
      "dying prematurely of poison"
    ]
  },
  {
    "id": "yao_xing",
    "nameZh": "姚兴",
    "nameEn": "Yao Xing (Emperor Wenhuan of Later Qin)",
    "dynastyZh": "后秦",
    "dynastyEn": "Later Qin (Sixteen Kingdoms)",
    "eraTag": "sixteen_kingdoms",
    "eraNameZh": "十六国争霸",
    "eraNameEn": "Sixteen Kingdoms Hegemonic Era",
    "positionZh": "后秦高祖 · 文桓皇帝 · 迎奉鸠摩罗什 · 关陇文治盛世",
    "positionEn": "Emperor Wenhuan of Later Qin · Patron of Kumarajiva · Golden Era of Buddhist Letters",
    "personalityZh": "崇佛敬德、仁恕爱民、虚怀若谷、文治斐然",
    "personalityEn": "Devout Buddhist, merciful, humble listener, presiding over cultural flourishing in the northwest",
    "deedsZh": "灭前秦苻登统一关陇；发兵凉州迎鸠摩罗什入长安，于草堂寺设国家译场翻译大乘经典千余卷；推行休养生息，关陇人口繁盛商贸通达。",
    "deedsEn": "Destroyed rival Former Qin remnants to unify the northwest; rescued Kumarajiva to establish the grand national Buddhist translation bureau at Chang'an, reviving cultural civilization.",
    "archetype": "civil",
    "fiveElements": {
      "dominant": "土",
      "secondary": "水"
    },
    "tenGodsAffinity": [
      "正印",
      "食神",
      "正官"
    ],
    "patternType": "正印护官",
    "strengthAdviceZh": "以国家级最高资源赋能世界级文化IP的大格局！通过引进顶级思想文化大师（罗什）构筑天下精神信仰中心。",
    "strengthAdviceEn": "Grand visionary state sponsorship of transformative culture! Elevated Chang'an into the spiritual capital of East Asia by patronizing Kumarajiva.",
    "weaknessAdviceZh": "过度沉溺佛事玄谈，对皇子夺嫡争权心慈手软、姑息纵容，死后即引爆宫廷内讧导致后秦被刘裕横扫。",
    "weaknessAdviceEn": "Excessive leniency towards rebellious sons; fatal hesitation in succession planning left his empire vulnerable to immediate conquest by Liu Yu.",
    "historicalQuoteZh": "《晋书》评：姚兴笃好经史，深崇释教，风化移于胡越，然溺于私爱，祸起萧墙。",
    "historicalQuoteEn": "Book of Jin: Yao Xing loved scriptures and Buddhist wisdom, civilizing the realm; yet sentimental weakness towards his sons sparked palace ruin.",
    "auxiliaryStrengthsZh": [
      "以国家级最高资源赋能世界级文化IP的大格局",
      "通过引进顶级思想文化大师（罗什）构筑天下精神信仰中心"
    ],
    "auxiliaryStrengthsEn": [
      "Grand visionary state sponsorship of transformative culture",
      "Elevated Chang'an into the spiritual capital of East Asia by patronizing Kumarajiva"
    ],
    "auxiliaryWeaknessesZh": [
      "过度沉溺佛事玄谈",
      "对皇子夺嫡争权心慈手软、姑息纵容，死后即引爆宫廷内讧导致后秦被刘裕横扫"
    ],
    "auxiliaryWeaknessesEn": [
      "Excessive leniency towards rebellious sons",
      "fatal hesitation in succession planning left his empire vulnerable to immediate conquest by Liu Yu"
    ]
  },
  {
    "id": "qifu_chipan",
    "nameZh": "乞伏炽磐",
    "nameEn": "Qifu Chipan (King Wenzhao of Western Qin)",
    "dynastyZh": "西秦",
    "dynastyEn": "Western Qin (Sixteen Kingdoms)",
    "eraTag": "sixteen_kingdoms",
    "eraNameZh": "十六国争霸",
    "eraNameEn": "Sixteen Kingdoms Hegemonic Era",
    "positionZh": "西秦文昭王 · 兼并南凉 · 雄霸陇右河西走廊",
    "positionEn": "King Wenzhao of Western Qin · Conqueror of Southern Liang · Hegemon of the Hexi Corridor",
    "personalityZh": "沉鸷多权谋、勇毅果敢、善于出奇制胜、法度严明",
    "personalityEn": "Cold, calculated, tactical master of surprise, ruthless in exploiting enemy blunders",
    "deedsZh": "面对南凉后秦强敌环伺，暗中示弱诱敌，趁南凉秃发傉檀西征之际奇袭乐都灭亡南凉；恩威并施招抚降附，使西秦达到疆域全盛鼎峰。",
    "deedsEn": "Surrounded by hostile powers, feigned weakness before launching a devastating surprise strike on Ledu to conquer Southern Liang, bringing Western Qin to its geopolitical peak.",
    "archetype": "military",
    "fiveElements": {
      "dominant": "金",
      "secondary": "土"
    },
    "tenGodsAffinity": [
      "七杀",
      "偏财",
      "偏印"
    ],
    "patternType": "杀印相生",
    "strengthAdviceZh": "极擅隐忍伪装与一击必杀的潜行猎手智慧！善于趁敌不备直捣巢穴，在劣势中吞并同侪实现规模跃迁。",
    "strengthAdviceEn": "Master of strategic stealth and lethal opportunism! Seize the exact window when rivals overextend to swallow their assets whole.",
    "weaknessAdviceZh": "地缘狭小、经济落后，过度依赖游牧掠夺与军事兼并，缺乏深厚的自持性农耕经济后方支持。",
    "weaknessAdviceEn": "Impoverished logistical baseline; over-reliant on nomadic raids without sustainable agrarian infrastructure.",
    "historicalQuoteZh": "《晋书》载：炽磐英武绝伦，算无遗策，克灭南凉，威行陇右，西秦之盛莫过于斯。",
    "historicalQuoteEn": "Book of Jin: Qifu Chipan was peerlessly bold and calculating; crushing Southern Liang, he expanded Western Qin to its zenith.",
    "auxiliaryStrengthsZh": [
      "极擅隐忍伪装与一击必杀的潜行猎手智慧",
      "善于趁敌不备直捣巢穴，在劣势中吞并同侪实现规模跃迁"
    ],
    "auxiliaryStrengthsEn": [
      "Master of strategic stealth and lethal opportunism",
      "Seize the exact window when rivals overextend to swallow their assets whole"
    ],
    "auxiliaryWeaknessesZh": [
      "地缘狭小、经济落后",
      "过度依赖游牧掠夺与军事兼并，缺乏深厚的自持性农耕经济后方支持"
    ],
    "auxiliaryWeaknessesEn": [
      "Impoverished logistical baseline",
      "over-reliant on nomadic raids without sustainable agrarian infrastructure"
    ]
  },
  {
    "id": "tufa_rutan",
    "nameZh": "秃发傉檀",
    "nameEn": "Tufa Rutan (King Jing of Southern Liang)",
    "dynastyZh": "南凉",
    "dynastyEn": "Southern Liang (Sixteen Kingdoms)",
    "eraTag": "sixteen_kingdoms",
    "eraNameZh": "十六国争霸",
    "eraNameEn": "Sixteen Kingdoms Hegemonic Era",
    "positionZh": "南凉景王 · 鲜卑雄主 · 文武兼备 · 悲壮亡国之君",
    "positionEn": "King Jing of Southern Liang · Cultured Xianbei Warrior · Tragic Last Sovereign",
    "personalityZh": "好学爱士、宽仁慷慨、刚愎用兵、轻敌致败",
    "personalityEn": "Learned, generous to scholars, yet stubborn in military decisions and chronically underestimating foes",
    "deedsZh": "善于文词好尚文士，轻徭薄赋治理姑臧；然在连年旱灾军食匮乏之际，盲目率大军西征乙弗部落，后方乐都惨遭西秦奇袭攻破，无奈投降遭鸩死。",
    "deedsEn": "Cultured steppe king who patronized letters and ruled Guzang; yet launched a disastrous expedition during extreme famine, leaving his capital undefended and conquered by Western Qin.",
    "archetype": "civil",
    "fiveElements": {
      "dominant": "木",
      "secondary": "火"
    },
    "tenGodsAffinity": [
      "伤官",
      "正印",
      "正财"
    ],
    "patternType": "伤官生财",
    "strengthAdviceZh": "游牧部族罕见的文化教化与民生仁政胸怀！能将粗犷部族迅速推向文明轨道与学术繁荣。",
    "strengthAdviceEn": "Remarkable humanitarian and cultural reform within a nomadic society; modernized civic life through education and light taxes.",
    "weaknessAdviceZh": "战略后方极度空虚时冒险全军远征，犯了‘后院失火弃根本’的致命战术大忌。",
    "weaknessAdviceEn": "Fatal abandonment of base sanctuary; marching the entire royal army on foreign plunder left his home capital defenseless.",
    "historicalQuoteZh": "《晋书》评：傉檀学涉经史，才器朗拔，然而连年用兵，国内凋敝，终至陨覆。",
    "historicalQuoteEn": "Book of Jin: Tufa Rutan was erudite and articulate, yet endless campaigns bled his kingdom dry until total annihilation.",
    "auxiliaryStrengthsZh": [
      "游牧部族罕见的文化教化与民生仁政胸怀",
      "能将粗犷部族迅速推向文明轨道与学术繁荣"
    ],
    "auxiliaryStrengthsEn": [
      "Remarkable humanitarian and cultural reform within a nomadic society",
      "modernized civic life through education and light taxes"
    ],
    "auxiliaryWeaknessesZh": [
      "战略后方极度空虚时冒险全军远征",
      "犯了‘后院失火弃根本’的致命战术大忌"
    ],
    "auxiliaryWeaknessesEn": [
      "Fatal abandonment of base sanctuary",
      "marching the entire royal army on foreign plunder left his home capital defenseless"
    ]
  },
  {
    "id": "zhang_gui",
    "nameZh": "张轨",
    "nameEn": "Zhang Gui (Duke Wu of Xiping)",
    "dynastyZh": "前凉",
    "dynastyEn": "Former Liang (Sixteen Kingdoms)",
    "eraTag": "sixteen_kingdoms",
    "eraNameZh": "十六国争霸",
    "eraNameEn": "Sixteen Kingdoms Hegemonic Era",
    "positionZh": "前凉太祖 · 凉州刺史 · 西平武公 · 保境安民开创五凉避风港",
    "positionEn": "Founding Ancestor of Former Liang · Governor of Liangzhou · Architect of the Western Haven",
    "personalityZh": "清正温良、笃志儒术、忠顺晋室、深谋固本",
    "personalityEn": "Upright, benevolent, deeply committed to Confucian culture, loyal to Jin while building unassailable regional strength",
    "deedsZh": "见西晋大乱，主动请缨赴凉州保境安民；推行五铢钱、兴办学校、收纳数万避难士人；屡出铁骑东下勤王救晋；使河西走廊成为五胡乱世中唯一的‘文明诺亚方舟’。",
    "deedsEn": "Foreseeing Jin's collapse, took office in Liangzhou to build a cultural haven; restored coinage, built academies, and protected millions of refugees, preserving Chinese civilization across Hexi.",
    "archetype": "executive",
    "fiveElements": {
      "dominant": "土",
      "secondary": "水"
    },
    "tenGodsAffinity": [
      "正印",
      "正官",
      "食神"
    ],
    "patternType": "正印格",
    "strengthAdviceZh": "在时代大崩塌中提前布局‘文明诺亚方舟’的顶级避险战略！以清明吏治与安全庇护所吸引海量高端人才加盟。",
    "strengthAdviceEn": "Supreme crisis foresight building an unassailable sanctuary! Attracted top-tier human capital by providing safety, rule of law, and economic stability.",
    "weaknessAdviceZh": "始终恪守晋朝藩属之名，缺乏逐鹿中原争夺天下大一统的强悍进攻性野心。",
    "weaknessAdviceEn": "Content with defensive preservation; lacked the ruthless predatory drive to expand into the chaotic Central Plains.",
    "historicalQuoteZh": "《晋书》评：张轨德洽河右，威行西陲，辟土全邦，天下仰其仁惠，实五凉之冠。",
    "historicalQuoteEn": "Book of Jin: Zhang Gui's virtue shone across Hexi; maintaining peace and culture, his sanctuary stood supreme among the Five Liang states.",
    "auxiliaryStrengthsZh": [
      "在时代大崩塌中提前布局‘文明诺亚方舟’的顶级避险战略",
      "以清明吏治与安全庇护所吸引海量高端人才加盟"
    ],
    "auxiliaryStrengthsEn": [
      "Supreme crisis foresight building an unassailable sanctuary",
      "Attracted top-tier human capital by providing safety, rule of law, and economic stability"
    ],
    "auxiliaryWeaknessesZh": [
      "始终恪守晋朝藩属之名",
      "缺乏逐鹿中原争夺天下大一统的强悍进攻性野心"
    ],
    "auxiliaryWeaknessesEn": [
      "Content with defensive preservation",
      "lacked the ruthless predatory drive to expand into the chaotic Central Plains"
    ]
  },
  {
    "id": "zhang_chonghua",
    "nameZh": "张重华",
    "nameEn": "Zhang Chonghua (Duke Huan of Xiping)",
    "dynastyZh": "前凉",
    "dynastyEn": "Former Liang (Sixteen Kingdoms)",
    "eraTag": "sixteen_kingdoms",
    "eraNameZh": "十六国争霸",
    "eraNameEn": "Sixteen Kingdoms Hegemonic Era",
    "positionZh": "前凉世宗 · 桓王 · 拔擢谢艾大破后赵石虎数十万大军",
    "positionEn": "Duke Huan of Former Liang · Discoverer of General Xie Ai · Vanquisher of Shi Hu's Grand Armies",
    "personalityZh": "识人拔贤、果敢坚决、晚年耽乐、宠信佞幸",
    "personalityEn": "Decisive patron of talent in youth, crushing northern invasions, yet declining into indulgence in later years",
    "deedsZh": "年少袭位，面对后赵石虎十万精锐伐凉，力排众议破格提拔文官谢艾为主帅，三战三捷大破赵军斩首数万；保全西北江山；晚年怠政信小人早卒。",
    "deedsEn": "Succeeded young; facing Shi Hu's massive invasion, defied court conservatism to promote civilian Xie Ai to commander, routing the Zhao hordes in three battles. Declined late in life.",
    "archetype": "executive",
    "fiveElements": {
      "dominant": "水",
      "secondary": "金"
    },
    "tenGodsAffinity": [
      "偏财",
      "偏官",
      "食神"
    ],
    "patternType": "偏官格",
    "strengthAdviceZh": "打破常规、不拘一格降人才的战略魄力！在生死悬于一线的危难时刻敢于孤注一掷重用奇才破局。",
    "strengthAdviceEn": "Radical meritocratic courage! Overruled entrenched court skepticism to empower unconventional geniuses who delivered absolute victory.",
    "weaknessAdviceZh": "大胜之后骄纵怠惰，宠信佞幸赵长等人，临终未能遏制宗室反叛，导致前凉陷入血腥内乱。",
    "weaknessAdviceEn": "Post-victory complacency; relied on flattering sycophants, leaving succession vulnerable to disastrous palace coups.",
    "historicalQuoteZh": "《晋书》载：重华任谢艾，大破石虎大将麻秋，保境全师，时论嘉其识拔之明。",
    "historicalQuoteEn": "Book of Jin: Zhang Chonghua's promotion of Xie Ai destroyed Zhao's fiercest armies, celebrated by contemporaries for uncanny eye for talent.",
    "auxiliaryStrengthsZh": [
      "打破常规、不拘一格降人才的战略魄力",
      "在生死悬于一线的危难时刻敢于孤注一掷重用奇才破局"
    ],
    "auxiliaryStrengthsEn": [
      "Radical meritocratic courage",
      "Overruled entrenched court skepticism to empower unconventional geniuses who delivered absolute victory"
    ],
    "auxiliaryWeaknessesZh": [
      "大胜之后骄纵怠惰",
      "宠信佞幸赵长等人，临终未能遏制宗室反叛，导致前凉陷入血腥内乱"
    ],
    "auxiliaryWeaknessesEn": [
      "Post-victory complacency",
      "relied on flattering sycophants, leaving succession vulnerable to disastrous palace coups"
    ]
  },
  {
    "id": "zhidun",
    "nameZh": "支遁",
    "nameEn": "Zhidun (Master Daolin)",
    "dynastyZh": "东晋",
    "dynastyEn": "Eastern Jin / Sixteen Kingdoms",
    "eraTag": "sixteen_kingdoms",
    "eraNameZh": "十六国争霸",
    "eraNameEn": "Sixteen Kingdoms Hegemonic Era",
    "positionZh": "东晋高僧 · 玄佛合流大宗匠 · 《逍遥游》新义",
    "positionEn": "Eminent Buddhist Master · Pioneer of Xuanxue-Buddhism Synthesis · New Meaning of Xiaoyaoyou",
    "personalityZh": "超脱尘俗、雅量高致、玄思奇绝、爱鹤惜物",
    "personalityEn": "Transcendent, elegant in debate, profoundly innovative in philosophy, famed for releasing caged cranes",
    "deedsZh": "隐居沃洲山，与王羲之、谢安等顶级名士坐而论道；作《逍遥游》新义，打破郭象旧说，认为‘各适其性即为逍遥’，将佛教般若空性与庄子思想完美融合。",
    "deedsEn": "Lived in mountain retreat, debating philosophy with Wang Xizhi and Xie An; revolutionized Zhuangzi's 'Free and Easy Wandering' by redefining freedom as fulfilling innate nature, uniting Buddhism and Taoism.",
    "archetype": "specialist",
    "fiveElements": {
      "dominant": "水",
      "secondary": "木"
    },
    "tenGodsAffinity": [
      "偏印",
      "食神",
      "比肩"
    ],
    "patternType": "水木清华",
    "strengthAdviceZh": "跨学科跨文明体系底层逻辑融通融合的宗师手腕！用极具开创性的新诠释降维打击传统桎梏。",
    "strengthAdviceEn": "Sublime cross-paradigmatic synthesis! Redefined centuries of philosophical debate through fresh conceptual frameworks.",
    "weaknessAdviceZh": "身处精神云端超然世外，对底层民间疾苦与乱世战火缺乏直接的救济实践杠杆。",
    "weaknessAdviceEn": "Detached in high metaphysical towers, providing philosophical solace but limited practical relief to peasant misery.",
    "historicalQuoteZh": "《世说新语》：支道林拔新理于微言之外，王羲之初不相重，及听其论《逍遥篇》，乃大加叹服。",
    "historicalQuoteEn": "A New Account of Tales of the World: Calligrapher Wang Xizhi initially scoffed at monks, but was entirely enchanted upon hearing Zhidun's sublime Zhuangzi lectures.",
    "auxiliaryStrengthsZh": [
      "跨学科跨文明体系底层逻辑融通融合的宗师手腕",
      "用极具开创性的新诠释降维打击传统桎梏"
    ],
    "auxiliaryStrengthsEn": [
      "Sublime cross-paradigmatic synthesis",
      "Redefined centuries of philosophical debate through fresh conceptual frameworks"
    ],
    "auxiliaryWeaknessesZh": [
      "身处精神云端超然世外",
      "对底层民间疾苦与乱世战火缺乏直接的救济实践杠杆"
    ],
    "auxiliaryWeaknessesEn": [
      "Detached in high metaphysical towers",
      "providing philosophical solace but limited practical relief to peasant misery"
    ]
  },
  {
    "id": "sengzhao",
    "nameZh": "僧肇",
    "nameEn": "Sengzhao",
    "dynastyZh": "后秦",
    "dynastyEn": "Later Qin (Sixteen Kingdoms)",
    "eraTag": "sixteen_kingdoms",
    "eraNameZh": "十六国争霸",
    "eraNameEn": "Sixteen Kingdoms Hegemonic Era",
    "positionZh": "后秦法师 · 鸠摩罗什大弟子 · 《肇论》作者 · 般若中观集大成者",
    "positionEn": "Master Sengzhao · Chief Disciple of Kumarajiva · Author of Zhao Lun · Summit of Madhyamaka Logic",
    "personalityZh": "颖悟绝伦、辨才无碍、深窥实相、视生死如梦幻",
    "personalityEn": "Prodigiously gifted in logic, master debater, piercing into ultimate reality, serene in the face of death",
    "deedsZh": "幼时家贫为人抄书得以博览群书；投罗什门下被称为‘解空第一’；著《般若无知论》《不真空论》《物不迁论》，建立中国佛学史上首座纯正中观理论大厦，三十一岁圆寂。",
    "deedsEn": "Impoverished scribe who mastered classics; recognized by Kumarajiva as foremost in understanding emptiness; penned the immortal Treatise of Zhao (Zhao Lun), dying serenely at age 31.",
    "archetype": "specialist",
    "fiveElements": {
      "dominant": "金",
      "secondary": "水"
    },
    "tenGodsAffinity": [
      "偏印",
      "伤官",
      "正官"
    ],
    "patternType": "偏印吐秀",
    "strengthAdviceZh": "以无懈可击的纯逻辑推演与哲学概念建构登顶人类心智巅峰！文字如飞瀑落九天，洞彻万法本体。",
    "strengthAdviceEn": "Unassailable logical rigor and metaphysical clarity! Constructed foundational philosophical architecture that enlightened millennia of scholars.",
    "weaknessAdviceZh": "天不假年！过于消耗心智于形而上终极领域，躯体底盘未能承受超负荷的大脑算力，年仅三十一岁早夭。",
    "weaknessAdviceEn": "Premature burnout; immense metaphysical output overwhelmed his physical vessel, passing away at merely 31.",
    "historicalQuoteZh": "罗什叹曰：‘秦人解空者，僧肇一人而已！’临终偈曰：‘四大元无主，五阴本来空。将头临白刃，犹似斩春风！’",
    "historicalQuoteEn": "Kumarajiva marveled: 'In all China, Sengzhao alone truly comprehends Emptiness!' Deathbed verse: 'Bearing the white blade feels like slashing the spring breeze!'",
    "auxiliaryStrengthsZh": [
      "以无懈可击的纯逻辑推演与哲学概念建构登顶人类心智巅峰",
      "文字如飞瀑落九天，洞彻万法本体"
    ],
    "auxiliaryStrengthsEn": [
      "Unassailable logical rigor and metaphysical clarity",
      "Constructed foundational philosophical architecture that enlightened millennia of scholars"
    ],
    "auxiliaryWeaknessesZh": [
      "天不假年",
      "过于消耗心智于形而上终极领域，躯体底盘未能承受超负荷的大脑算力，年仅三十一岁早夭"
    ],
    "auxiliaryWeaknessesEn": [
      "Premature burnout",
      "immense metaphysical output overwhelmed his physical vessel, passing away at merely 31"
    ]
  },
  {
    "id": "daoan",
    "nameZh": "道安",
    "nameEn": "Dao'an",
    "dynastyZh": "前秦",
    "dynastyEn": "Former Qin (Sixteen Kingdoms)",
    "eraTag": "sixteen_kingdoms",
    "eraNameZh": "十六国争霸",
    "eraNameEn": "Sixteen Kingdoms Hegemonic Era",
    "positionZh": "前秦高僧 · 中国僧尼以‘释’为姓开创者 · 佛教规范奠基宗师",
    "positionEn": "Master Dao'an · Originator of Monastic 'Shi' Surname · Architect of Chinese Monastic Vinaya",
    "personalityZh": "渊默雷声、仪范严正、博览群籍、立规立矩",
    "personalityEn": "Majestic in presence, scholarly, disciplined, creating institutional codes and national monastic standards",
    "deedsZh": "佛图澄高徒，在战乱中率僧团奔走传法；编订中国第一部佛经总录《综理众经目录》；制定僧尼轨范与三具戒法；统一全国出家人皆以‘释’为姓；力劝苻坚迎请罗什。",
    "deedsEn": "Disciple of Fotucheng; compiled the first national catalog of Buddhist scriptures; codified uniform monastic rules and ordained all monks to take 'Shi' (Sakya) as surname; urged Fu Jian to invite Kumarajiva.",
    "archetype": "specialist",
    "fiveElements": {
      "dominant": "土",
      "secondary": "木"
    },
    "tenGodsAffinity": [
      "正印",
      "正官",
      "比肩"
    ],
    "patternType": "正印统天",
    "strengthAdviceZh": "开创行业通用标准与全国统一规范的制度设计师！把松散游民组织转化为千年不绝的正规化宗门系统。",
    "strengthAdviceEn": "Institutional systems architect! Transformed fragmented spiritual seekers into a standardized, resilient, millennia-enduring civilizational institution.",
    "weaknessAdviceZh": "受制于北国君王（苻坚）的政治控制与战争裹挟，无法脱离皇权庇护而真正享有全盘独立地位。",
    "weaknessAdviceEn": "Dependent on the precarious patronage of autocratic emperors, his institutions remaining tethered to dynastic fate.",
    "historicalQuoteZh": "时人语曰：‘弥天释道安，天下独步。’苻坚叹曰：‘朕以十万之师破襄阳，唯得一人半，安公一人也。’",
    "historicalQuoteEn": "Emperor Fu Jian declared after taking Xiangyang: 'My 100,000 soldiers conquered only one and a half men—Dao'an is the whole man!'",
    "auxiliaryStrengthsZh": [
      "开创行业通用标准与全国统一规范的制度设计师",
      "把松散游民组织转化为千年不绝的正规化宗门系统"
    ],
    "auxiliaryStrengthsEn": [
      "Institutional systems architect",
      "Transformed fragmented spiritual seekers into a standardized, resilient, millennia-enduring civilizational institution"
    ],
    "auxiliaryWeaknessesZh": [
      "受制于北国君王（苻坚）的政治控制与战争裹挟",
      "无法脱离皇权庇护而真正享有全盘独立地位"
    ],
    "auxiliaryWeaknessesEn": [
      "Dependent on the precarious patronage of autocratic emperors",
      "his institutions remaining tethered to dynastic fate"
    ]
  },
  {
    "id": "huiyuan",
    "nameZh": "慧远",
    "nameEn": "Huiyuan",
    "dynastyZh": "东晋",
    "dynastyEn": "Eastern Jin / Sixteen Kingdoms",
    "eraTag": "sixteen_kingdoms",
    "eraNameZh": "十六国争霸",
    "eraNameEn": "Sixteen Kingdoms Hegemonic Era",
    "positionZh": "东晋高僧 · 庐山东林寺开山祖师 · 净土宗始祖 · 著《沙门不敬王者论》",
    "positionEn": "Master Huiyuan · Founder of Donglin Temple on Mt. Lu · First Patriarch of Pure Land Buddhism",
    "personalityZh": "风仪神爽、刚正清峭、遗世独立、不随波逐流",
    "personalityEn": "Aura of crystalline purity, upright, fiercely independent from imperial control, pioneering Pure Land practice",
    "deedsZh": "道安首席高徒，南渡庐山结白莲社三十年影不出山；面对篡权权臣桓玄逼迫僧尼屈膝跪拜，作《沙门不敬王者论》力保宗教精神独立性；开启净土念佛法门。",
    "deedsEn": "Stationed on Mount Lu for thirty years never leaving its bamboo forests; when dictator Huan Xuan demanded monks prostrate before the throne, Huiyuan wrote 'Monks Do Not Bow to Kings', defending spiritual sovereignty.",
    "archetype": "specialist",
    "fiveElements": {
      "dominant": "木",
      "secondary": "火"
    },
    "tenGodsAffinity": [
      "正印",
      "偏官",
      "比肩"
    ],
    "patternType": "杀印相生",
    "strengthAdviceZh": "以铁骨傲然捍卫信仰与学术独立性的大法骨！面对最残暴的世俗强权绝不屈膝低头，树立永恒的精神丰碑。",
    "strengthAdviceEn": "Unyielding defense of spiritual and intellectual autonomy! Stand fearless against political tyranny to protect core institutional principles.",
    "weaknessAdviceZh": "立身极高、不入世途，把全部精力专注于方外解脱，对世间具体的战火与政治苦难保持抽离隔离。",
    "weaknessAdviceEn": "Radical monastic withdrawal; intentional detachment from frontline civic crises in favor of transcendent meditation.",
    "historicalQuoteZh": "桓玄入山见远，肃然起敬，不敢致难。《高僧传》评：远公神气卓朗，道风肃整，百代仰止。",
    "historicalQuoteEn": "Even tyrant Huan Xuan stood in silent awe upon climbing Mount Lu, unable to utter threats before Huiyuan's commanding moral presence.",
    "auxiliaryStrengthsZh": [
      "以铁骨傲然捍卫信仰与学术独立性的大法骨",
      "面对最残暴的世俗强权绝不屈膝低头，树立永恒的精神丰碑"
    ],
    "auxiliaryStrengthsEn": [
      "Unyielding defense of spiritual and intellectual autonomy",
      "Stand fearless against political tyranny to protect core institutional principles"
    ],
    "auxiliaryWeaknessesZh": [
      "立身极高、不入世途",
      "把全部精力专注于方外解脱，对世间具体的战火与政治苦难保持抽离隔离"
    ],
    "auxiliaryWeaknessesEn": [
      "Radical monastic withdrawal",
      "intentional detachment from frontline civic crises in favor of transcendent meditation"
    ]
  },
  {
    "id": "deng_qiang",
    "nameZh": "邓羌",
    "nameEn": "Deng Qiang",
    "dynastyZh": "前秦",
    "dynastyEn": "Former Qin (Sixteen Kingdoms)",
    "eraTag": "sixteen_kingdoms",
    "eraNameZh": "十六国争霸",
    "eraNameEn": "Sixteen Kingdoms Hegemonic Era",
    "positionZh": "前秦车骑大将军 · 并州刺史 · 号称‘万人敌’ · 王猛麾下第一破阵勇将",
    "positionEn": "Grand General of Chariots and Cavalry · Governor of Bingzhou · Famed 'Match for Ten Thousand Men'",
    "personalityZh": "勇冠三军、临阵争功、粗中有细、骁勇无俦",
    "personalityEn": "Peerless frontline shock warrior, calculating in combat, demanding appropriate rewards for heroic valor",
    "deedsZh": "与张蚝并称前秦双壁；壶关战役中与王猛并肩，要求封司隶校尉方肯出战，王猛许诺后亲率数骑突入慕容评数十万大军中，如入无人之境，斩将搴旗大获全胜。",
    "deedsEn": "The invincible spearhead of Former Qin. Before the critical Battle of Hukuan, demanded high office from Wang Meng, then charged into 300,000 enemy troops, shattering the Yan army single-handedly.",
    "archetype": "military",
    "fiveElements": {
      "dominant": "金",
      "secondary": "火"
    },
    "tenGodsAffinity": [
      "七杀",
      "劫财",
      "正财"
    ],
    "patternType": "阳刃合杀",
    "strengthAdviceZh": "能在千钧一发之际彻底撕碎敌军防线的终极单兵杀手锏！战意澎湃，越是大场面越能迸发非人战力。",
    "strengthAdviceEn": "Ultimate breakthrough spearhead in decisive engagements! Thrives in maximum danger, shattering mass formations through lethal valor.",
    "weaknessAdviceZh": "临战讨价还价、斤斤计较官爵利益，缺乏战略全局格局观，必须依赖王猛这等超级帅才统御方显其功。",
    "weaknessAdviceEn": "Mercenary transactional attitude before crucial battles; requires an apex strategic master like Wang Meng to channel his explosive ferocity.",
    "historicalQuoteZh": "《晋书》载：羌身先士卒，出入数万骑中，所向披靡。秦人语曰：‘关东有徐、王，关西有邓、张。’",
    "historicalQuoteEn": "Book of Jin: Deng Qiang charged repeatedly through tens of thousands of enemy cavalry, completely unstoppable wherever he rode.",
    "auxiliaryStrengthsZh": [
      "能在千钧一发之际彻底撕碎敌军防线的终极单兵杀手锏",
      "战意澎湃，越是大场面越能迸发非人战力"
    ],
    "auxiliaryStrengthsEn": [
      "Ultimate breakthrough spearhead in decisive engagements",
      "Thrives in maximum danger, shattering mass formations through lethal valor"
    ],
    "auxiliaryWeaknessesZh": [
      "临战讨价还价、斤斤计较官爵利益",
      "缺乏战略全局格局观，必须依赖王猛这等超级帅才统御方显其功"
    ],
    "auxiliaryWeaknessesEn": [
      "Mercenary transactional attitude before crucial battles",
      "requires an apex strategic master like Wang Meng to channel his explosive ferocity"
    ]
  },
  {
    "id": "zhang_tianxi",
    "nameZh": "张天锡",
    "nameEn": "Zhang Tianxi",
    "dynastyZh": "前凉",
    "dynastyEn": "Former Liang (Sixteen Kingdoms)",
    "eraTag": "sixteen_kingdoms",
    "eraNameZh": "十六国争霸",
    "eraNameEn": "Sixteen Kingdoms Hegemonic Era",
    "positionZh": "前凉末代国公 · 东晋散骑常侍 · 两次亡国两次风雅保命",
    "positionEn": "Last Ruler of Former Liang · Attendant of Eastern Jin · Master of Suave Survival across Conquerors",
    "personalityZh": "风流潇洒、长于清谈、见风使舵、隐忍保命",
    "personalityEn": "Suave, witty conversationalist, agile in political survival, preserving life across multiple regime collapses",
    "deedsZh": "政变杀侄自立为前凉主；苻坚大兵压境抵抗不支面缚出降；入长安被苻坚封官；淝水之战乘秦军溃败奔逃归降东晋，在会稽与王献之等风流名士玄谈，优游终老。",
    "deedsEn": "Seized power in Liangzhou, but surrendered to Fu Jian's onslaught; during the rout at Fei River escaped to Eastern Jin, charming southern aristocrats with clever banter and surviving in comfort.",
    "archetype": "civil",
    "fiveElements": {
      "dominant": "水",
      "secondary": "木"
    },
    "tenGodsAffinity": [
      "伤官",
      "偏财",
      "正印"
    ],
    "patternType": "伤官生财",
    "strengthAdviceZh": "九死一生的绝地变色龙求生智慧！在极度险恶的连续倾覆中，凭高超言谈与情商总能化险为夷保全性命。",
    "strengthAdviceEn": "Master of diplomatic survival and social charm! Maneuvered through multiple dynastic executions by disarming conquerors with self-deprecating wit.",
    "weaknessAdviceZh": "丧失为君者的节操与担当，骨头过软、沉溺宴乐，虽全首领却沦为历史笑柄。",
    "weaknessAdviceEn": "Complete abdication of sovereign dignity; surrendered kingdoms twice without shame to purchase private salon comforts.",
    "historicalQuoteZh": "《晋书》：天锡机捷，善应对。顾恺之好食甘蔗，天锡问其故，答曰：‘渐入佳境。’天锡抚掌叹服。",
    "historicalQuoteEn": "Book of Jin: Zhang Tianxi was celebrated for witty banter in salons; painter Gu Kaizhi and nobles found his lighthearted company delightful.",
    "auxiliaryStrengthsZh": [
      "九死一生的绝地变色龙求生智慧",
      "在极度险恶的连续倾覆中，凭高超言谈与情商总能化险为夷保全性命"
    ],
    "auxiliaryStrengthsEn": [
      "Master of diplomatic survival and social charm",
      "Maneuvered through multiple dynastic executions by disarming conquerors with self-deprecating wit"
    ],
    "auxiliaryWeaknessesZh": [
      "丧失为君者的节操与担当",
      "骨头过软、沉溺宴乐，虽全首领却沦为历史笑柄"
    ],
    "auxiliaryWeaknessesEn": [
      "Complete abdication of sovereign dignity",
      "surrendered kingdoms twice without shame to purchase private salon comforts"
    ]
  },
  {
    "id": "feng_hong",
    "nameZh": "冯弘",
    "nameEn": "Feng Hong (Emperor Zhaocheng of Northern Yan)",
    "dynastyZh": "北燕",
    "dynastyEn": "Northern Yan (Sixteen Kingdoms)",
    "eraTag": "sixteen_kingdoms",
    "eraNameZh": "十六国争霸",
    "eraNameEn": "Sixteen Kingdoms Hegemonic Era",
    "positionZh": "北燕昭成皇帝 · 北燕末帝 · 困守辽东绝境",
    "positionEn": "Emperor Zhaocheng of Northern Yan · Last Monarch of Northern Yan · Besieged Sovereign of Liaodong",
    "personalityZh": "猜忌刻薄、残害亲族、狂妄自大、客死异邦",
    "personalityEn": "Suspicious, cruel toward kin, haughty in exile, tragically outplayed by foreign hosts",
    "deedsZh": "弑侄自立为北燕天王；面对北魏太武帝拓跋焘大兵压境死守龙城；求援于高句丽获接引东渡，然在异国仍摆帝王架子轻侮高句丽长寿王，终被高句丽遣将诛杀族灭。",
    "deedsEn": "Usurped power by killing his nephew; besieged by Northern Wei, fled to Goguryeo. In exile, stubbornly demanded imperial deference from the Goguryeo king, who promptly executed him.",
    "archetype": "executive",
    "fiveElements": {
      "dominant": "金",
      "secondary": "土"
    },
    "tenGodsAffinity": [
      "七杀",
      "偏印",
      "劫财"
    ],
    "patternType": "七杀无制",
    "strengthAdviceZh": "在四面楚歌的灭国危局中顽强周旋、巧妙利用第三方跨界势力（高句丽）撤离死地的求生决断。",
    "strengthAdviceEn": "Resourcefulness in orchestrating cross-border evacuation to escape total siege annihilation.",
    "weaknessAdviceZh": "亡国寄人篱下却认不清现实，身无立锥之地仍大摆宗主国架子，狂妄傲慢自掘坟墓。",
    "weaknessAdviceEn": "Fatal arrogance in exile; demanding royal subservience while relying on foreign bread provoked his immediate execution.",
    "historicalQuoteZh": "《晋书》评：冯弘杀其侄而自立，荒淫傲慢，逃奔高丽，犹以天子自居，终见诛灭。",
    "historicalQuoteEn": "Book of Jin: Feng Hong murdered his nephew to rule; fleeing as a beggar to Goguryeo, he still acted like an emperor until slaughtered.",
    "auxiliaryStrengthsZh": [
      "在四面楚歌的灭国危局中顽强周旋、巧妙利用第三方跨界势力（高句丽）撤离死地的求生决断。",
      "善于发挥自身核心优势穿透迷局"
    ],
    "auxiliaryStrengthsEn": [
      "Resourcefulness in orchestrating cross-border evacuation to escape total siege annihilation.",
      "Leverages core natural talents to pierce strategic bottlenecks."
    ],
    "auxiliaryWeaknessesZh": [
      "亡国寄人篱下却认不清现实",
      "身无立锥之地仍大摆宗主国架子，狂妄傲慢自掘坟墓"
    ],
    "auxiliaryWeaknessesEn": [
      "Fatal arrogance in exile",
      "demanding royal subservience while relying on foreign bread provoked his immediate execution"
    ]
  },
  {
    "id": "qifu_gangui",
    "nameZh": "乞伏乾归",
    "nameEn": "Qifu Gangui (King Wuyuan of Western Qin)",
    "dynastyZh": "西秦",
    "dynastyEn": "Western Qin (Sixteen Kingdoms)",
    "eraTag": "sixteen_kingdoms",
    "eraNameZh": "十六国争霸",
    "eraNameEn": "Sixteen Kingdoms Hegemonic Era",
    "positionZh": "西秦武元王 · 骁勇铁骑霸主 · 二度复国",
    "positionEn": "King Wuyuan of Western Qin · Steppe Cavalry Warlord · Two-Time Dynastic Restorer",
    "personalityZh": "勇猛善骑、百折不挠、身段极其灵活、能屈能伸",
    "personalityEn": "Fierce cavalry tactician, indomitable resilience, capable of bowing to survive and rebounding to rule",
    "deedsZh": "接掌西秦霸业，一度被后秦姚兴击溃灭国；他果断降秦潜伏长安，乘后秦内乱偷渡奔回金城重聚旧部，奇迹般第二次复国光复西秦社稷；后遭叛侄袭杀。",
    "deedsEn": "Succeeded early to Western Qin; crushed by Later Qin, feigned loyalty as an officer in Chang'an, then sneaked back across frontiers to rally his cavalry and resurrect his kingdom.",
    "archetype": "military",
    "fiveElements": {
      "dominant": "火",
      "secondary": "金"
    },
    "tenGodsAffinity": [
      "七杀",
      "比肩",
      "偏财"
    ],
    "patternType": "七杀制劫",
    "strengthAdviceZh": "百折不挠的绝地复盘再起力！哪怕公司破产倾覆，也能潜入巨头内部蛰伏偷师，伺机重整旗鼓再建商业帝国。",
    "strengthAdviceEn": "Unrivaled Phoenix resilience! Even after losing his throne, infiltrated the conqueror's court to bide time and launch a spectacular resurrection.",
    "weaknessAdviceZh": "对宗室子侄的安保防线漏洞百出，在日常起居中缺乏最基本的贴身警戒，被叛乱侄子血溅当场。",
    "weaknessAdviceEn": "Careless domestic security; murdered in his private quarters by an envious nephew due to lax guard.",
    "historicalQuoteZh": "《晋书》载：乾归勇略过人，丧国复兴，诚陇右骁雄，然忽于防备，死于宵小。",
    "historicalQuoteEn": "Book of Jin: Qifu Gangui was peerless in frontier bravery, resurrecting his state from ash; yet carelessness in private security ruined him.",
    "auxiliaryStrengthsZh": [
      "百折不挠的绝地复盘再起力",
      "哪怕公司破产倾覆，也能潜入巨头内部蛰伏偷师，伺机重整旗鼓再建商业帝国"
    ],
    "auxiliaryStrengthsEn": [
      "Unrivaled Phoenix resilience",
      "Even after losing his throne, infiltrated the conqueror's court to bide time and launch a spectacular resurrection"
    ],
    "auxiliaryWeaknessesZh": [
      "对宗室子侄的安保防线漏洞百出",
      "在日常起居中缺乏最基本的贴身警戒，被叛乱侄子血溅当场"
    ],
    "auxiliaryWeaknessesEn": [
      "Careless domestic security",
      "murdered in his private quarters by an envious nephew due to lax guard"
    ]
  },
  {
    "id": "juqu_anzhou",
    "nameZh": "沮渠安周",
    "nameEn": "Juqu Anzhou",
    "dynastyZh": "北凉",
    "dynastyEn": "Northern Liang / Gaochang (Sixteen Kingdoms)",
    "eraTag": "sixteen_kingdoms",
    "eraNameZh": "十六国争霸",
    "eraNameEn": "Sixteen Kingdoms Hegemonic Era",
    "positionZh": "北凉末代君主 · 高昌凉王 · 守西域吐鲁番绝响",
    "positionEn": "Last Ruler of Northern Liang · King of Gaochang · Guardian of the Turpan Outpost",
    "personalityZh": "坚忍偏执、转战绝域、顽强自守、终难抗天",
    "personalityEn": "Tenacious in exile, persevering in desert frontiers, holding the last embers of the Liang dynasty",
    "deedsZh": "北魏攻灭凉州姑臧后，沮渠安周率余部跋涉数千里翻越沙漠挺进西域，攻占高昌（吐鲁番）维系凉国香火近二十年；修造寺院译写佛经，终被柔然大军围攻所灭。",
    "deedsEn": "After Northern Wei overran Hexi, marched his surviving host thousands of miles across deserts into Turpan, establishing Gaochang-Liang and patronizing Silk Road Buddhist art for two decades.",
    "archetype": "executive",
    "fiveElements": {
      "dominant": "土",
      "secondary": "火"
    },
    "tenGodsAffinity": [
      "偏官",
      "偏印",
      "比肩"
    ],
    "patternType": "绝处逢生",
    "strengthAdviceZh": "万里西迁在沙漠绿洲再辟生机的极端生存韧性！在母体被连根拔起后，依然能在边疆缝隙延续火种。",
    "strengthAdviceEn": "Extreme survival tenacity across thousands of miles of desert! Carried civilizational embers to barren frontiers after total domestic defeat.",
    "weaknessAdviceZh": "深陷荒漠地缘死局，人口极度匮乏，在北方新兴柔然铁骑与北魏强敌挤压下注定难逃覆灭。",
    "weaknessAdviceEn": "Geographical dead-end; trapped in isolated oases with dwindling population between predatory steppe empires.",
    "historicalQuoteZh": "《魏书》载：沮渠安周保守高昌，柔然攻灭之，沮渠氏遂绝。",
    "historicalQuoteEn": "Book of Wei: Juqu Anzhou held isolated Gaochang until Rouran steppe hordes besieged and extinguished his clan.",
    "auxiliaryStrengthsZh": [
      "万里西迁在沙漠绿洲再辟生机的极端生存韧性",
      "在母体被连根拔起后，依然能在边疆缝隙延续火种"
    ],
    "auxiliaryStrengthsEn": [
      "Extreme survival tenacity across thousands of miles of desert",
      "Carried civilizational embers to barren frontiers after total domestic defeat"
    ],
    "auxiliaryWeaknessesZh": [
      "深陷荒漠地缘死局",
      "人口极度匮乏，在北方新兴柔然铁骑与北魏强敌挤压下注定难逃覆灭"
    ],
    "auxiliaryWeaknessesEn": [
      "Geographical dead-end",
      "trapped in isolated oases with dwindling population between predatory steppe empires"
    ]
  },
  {
    "id": "li_xin_xl",
    "nameZh": "李歆",
    "nameEn": "Li Xin (King of Western Liang)",
    "dynastyZh": "西凉",
    "dynastyEn": "Western Liang (Sixteen Kingdoms)",
    "eraTag": "sixteen_kingdoms",
    "eraNameZh": "十六国争霸",
    "eraNameEn": "Sixteen Kingdoms Hegemonic Era",
    "positionZh": "西凉后主 · 敦煌之主 · 违背父训轻敌亡国",
    "positionEn": "Last King of Western Liang · Lord of Dunhuang · Sovereign whose rashness destroyed his state",
    "personalityZh": "骄躁刚愎、好大喜功、不听忠谏、轻举妄动",
    "personalityEn": "Brash, headstrong, disdainful of wise counsel, squandering royal inheritance on reckless campaigns",
    "deedsZh": "西凉太祖李暠次子，即位后大兴土木耗损国力；不听母后与重臣劝谏，妄图出奇兵击溃北凉沮渠蒙逊，在撩泉落入蒙逊伏击圈全军覆没战死，西凉随之土崩瓦解。",
    "deedsEn": "Son of wise founder Li Gao; ignored his mother's tearful warnings and launched a reckless offensive against Juqu Mengxun, falling into an ambush at Liaoquan and losing his kingdom.",
    "archetype": "military",
    "fiveElements": {
      "dominant": "金",
      "secondary": "火"
    },
    "tenGodsAffinity": [
      "七杀",
      "伤官",
      "劫财"
    ],
    "patternType": "伤官见官",
    "strengthAdviceZh": "敢于在边陲以弱击强、发起攻势作战的骁锐血气（唯此一点尚存沙场霸气）。",
    "strengthAdviceEn": "Fierce martial aggression attempting proactive attacks against larger regional rivals.",
    "weaknessAdviceZh": "完全背弃开创者留下的‘守境安民、切勿主动挑衅强敌’的黄金祖训，急功近利以致国破家亡。",
    "weaknessAdviceEn": "Total repudiation of founding doctrine; reckless overconfidence walked his entire army into a textbook ambush.",
    "historicalQuoteZh": "其母尹太后泣谏曰：‘汝违先王之策，弃万全之守，吾见汝不归矣！’歆果败死撩泉。",
    "historicalQuoteEn": "His mother Empress Yin wept before his march: 'You violate your father's golden rules; I shall never see you return!' He died in the trap.",
    "auxiliaryStrengthsZh": [
      "敢于在边陲以弱击强、发起攻势作战的骁锐血气（唯此一点尚存沙场霸气）。",
      "善于发挥自身核心优势穿透迷局"
    ],
    "auxiliaryStrengthsEn": [
      "Fierce martial aggression attempting proactive attacks against larger regional rivals.",
      "Leverages core natural talents to pierce strategic bottlenecks."
    ],
    "auxiliaryWeaknessesZh": [
      "完全背弃开创者留下的‘守境安民、切勿主动挑衅强敌’的黄金祖训",
      "急功近利以致国破家亡"
    ],
    "auxiliaryWeaknessesEn": [
      "Total repudiation of founding doctrine",
      "reckless overconfidence walked his entire army into a textbook ambush"
    ]
  },
  {
    "id": "li_xun_xl",
    "nameZh": "李恂",
    "nameEn": "Li Xun",
    "dynastyZh": "西凉",
    "dynastyEn": "Western Liang (Sixteen Kingdoms)",
    "eraTag": "sixteen_kingdoms",
    "eraNameZh": "十六国争霸",
    "eraNameEn": "Sixteen Kingdoms Hegemonic Era",
    "positionZh": "西凉冠军将军 · 敦煌太守 · 孤守危城殉国忠烈",
    "positionEn": "Champion General of Western Liang · Governor of Dunhuang · Tragic Defender of the Oasis",
    "personalityZh": "沉毅坚贞、爱抚士卒、宁死不辱、悲壮殉国",
    "personalityEn": "Resolute, loyal, beloved by his men, choosing death over shameful surrender",
    "deedsZh": "李歆阵亡后，李恂退保敦煌被推为主；率军民死守敦煌孤城抗击北凉大军长达百日；城被蒙逊引水灌破，李恂拔剑自刎，西凉李氏政权彻底终结。",
    "deedsEn": "After his brother's demise, defended Dunhuang against northern hordes for 100 days under siege. When floodwaters breached the walls, slit his own throat rather than yield.",
    "archetype": "military",
    "fiveElements": {
      "dominant": "水",
      "secondary": "金"
    },
    "tenGodsAffinity": [
      "正官",
      "七杀",
      "比肩"
    ],
    "patternType": "杀刃相持",
    "strengthAdviceZh": "危难受命绝不妥协的忠烈风骨！在整座大厦倾倒的绝境下，能团结孤城军民死战百日流尽最后一滴血。",
    "strengthAdviceEn": "Monumental loyalty under inescapable doom! Rallied a starving desert outpost to heroic hundred-day defense against overwhelming forces.",
    "weaknessAdviceZh": "大局已去无力回天，缺乏跳出死地另谋生路的战略回旋空间，终随孤城一同沉没。",
    "weaknessAdviceEn": "Trapped in an isolated tactical island without geopolitical exit routes; doomed by previous regime failures.",
    "historicalQuoteZh": "《晋书》载：敦煌城陷，恂自杀。蒙逊纵兵大掠，屠城三日，西凉遂亡。",
    "historicalQuoteEn": "Book of Jin: Dunhuang fell after water breached the walls; Li Xun took his own life, and the western oasis dynasty was extinguished.",
    "auxiliaryStrengthsZh": [
      "危难受命绝不妥协的忠烈风骨",
      "在整座大厦倾倒的绝境下，能团结孤城军民死战百日流尽最后一滴血"
    ],
    "auxiliaryStrengthsEn": [
      "Monumental loyalty under inescapable doom",
      "Rallied a starving desert outpost to heroic hundred-day defense against overwhelming forces"
    ],
    "auxiliaryWeaknessesZh": [
      "大局已去无力回天",
      "缺乏跳出死地另谋生路的战略回旋空间，终随孤城一同沉没"
    ],
    "auxiliaryWeaknessesEn": [
      "Trapped in an isolated tactical island without geopolitical exit routes",
      "doomed by previous regime failures"
    ]
  },
  {
    "id": "kui_teng",
    "nameZh": "夔安",
    "nameEn": "Kui An",
    "dynastyZh": "后赵",
    "dynastyEn": "Later Zhao (Sixteen Kingdoms)",
    "eraTag": "sixteen_kingdoms",
    "eraNameZh": "十六国争霸",
    "eraNameEn": "Sixteen Kingdoms Hegemonic Era",
    "positionZh": "后赵尚书令 · 太尉 · 石勒‘十八骑’元勋之首",
    "positionEn": "Prefect of Masters of Writing of Later Zhao · Grand Commander · Chief of Shi Le's Founding Eighteen Riders",
    "personalityZh": "忠诚敦厚、谋略过人、战功赫赫、老成谋国",
    "personalityEn": "Deeply loyal, steady tactician, battlefield veteran, founding pillar of the Later Zhao state",
    "deedsZh": "石勒起义最早跟随的‘十八骑’核心智囊领袖；转战幽并攻城掠地立下首功；后统大军南伐东晋，攻破邾城逼退庾亮大军，辅佐后赵鼎盛。",
    "deedsEn": "Foremost of Shi Le's famous Eighteen Riders who rose from slavery to conquer Northern China; later led the southern campaign breaking Jin fortresses and solidifying Later Zhao hegemony.",
    "archetype": "executive",
    "fiveElements": {
      "dominant": "土",
      "secondary": "金"
    },
    "tenGodsAffinity": [
      "正官",
      "偏印",
      "正财"
    ],
    "patternType": "官印相生",
    "strengthAdviceZh": "与草莽创业者从零到一打天下的顶级创始合伙人忠诚与执行力！既能冲锋陷阵，又能统摄文武安抚百官。",
    "strengthAdviceEn": "Premier co-founder execution from scratch! Blended frontline assault capability with ministerial administrative composure.",
    "weaknessAdviceZh": "面对石虎的凶残夺权与血洗石勒皇族无力抗衡，只能随波逐流沦为强暴政治的服从者。",
    "weaknessAdviceEn": "Powerless to stop the psychotic usurper Shi Hu from butchering founder Shi Le's imperial progeny.",
    "historicalQuoteZh": "《晋书》载：夔安与石勒同布衣之交，转战天下，官至太尉，为后赵勋臣之冠。",
    "historicalQuoteEn": "Book of Jin: Kui An shared humble origins with Shi Le; fighting across China, he rose to Grand Commander as chief founding father.",
    "auxiliaryStrengthsZh": [
      "与草莽创业者从零到一打天下的顶级创始合伙人忠诚与执行力",
      "既能冲锋陷阵，又能统摄文武安抚百官"
    ],
    "auxiliaryStrengthsEn": [
      "Premier co-founder execution from scratch",
      "Blended frontline assault capability with ministerial administrative composure"
    ],
    "auxiliaryWeaknessesZh": [
      "面对石虎的凶残夺权与血洗石勒皇族无力抗衡",
      "只能随波逐流沦为强暴政治的服从者"
    ],
    "auxiliaryWeaknessesEn": [
      "Powerless to stop the psychotic usurper Shi Hu from butchering founder Shi Le's imperial progeny.",
      "Erects rigid ethical and behavioral safeguards against blindspots."
    ]
  },
  {
    "id": "yu_bing",
    "nameZh": "庾冰",
    "nameEn": "Yu Bing",
    "dynastyZh": "东晋",
    "dynastyEn": "Eastern Jin",
    "eraTag": "eastern_jin",
    "eraNameZh": "东晋衣冠",
    "eraNameEn": "Eastern Jin Scholarly Era",
    "positionZh": "东晋车骑将军 · 录尚书事 · 庾氏辅政贤相",
    "positionEn": "General of Chariots and Cavalry · Chancellor · Astute Custodian of State Stability",
    "personalityZh": "经纶长略、深明大体、清慎恭谨、善处危机",
    "personalityEn": "Strategic vision, understanding systemic equilibrium, prudent in factional compromise, selfless in crisis",
    "deedsZh": "兄庾亮死后总揽朝政；成帝病危时，力排众议舍弃幼主而立年长之康帝司马岳以安社稷；出镇武昌防备外敌，勤俭谨慎死而后已。",
    "deedsEn": "Succeeded his brother at the apex of government; wisely persuaded the court to crown an adult prince rather than an infant during national crisis, preserving civil peace.",
    "archetype": "executive",
    "fiveElements": {
      "dominant": "水",
      "secondary": "木"
    },
    "tenGodsAffinity": [
      "正印",
      "正官",
      "正财"
    ],
    "patternType": "正官配印",
    "strengthAdviceZh": "以大局为重打破宗族私利的卓越政治家胸怀！在关键权力交接点选择最稳健方案，避免主少国疑之厄。",
    "strengthAdviceEn": "Systemic maturity over clan self-interest! Engineered stable royal succession by prioritizing imperial survival over easy puppet manipulation.",
    "weaknessAdviceZh": "地处东晋门阀平衡的夹缝中，虽能勉强维系稳定，但无力从根本上消除士族内耗与北伐困局。",
    "weaknessAdviceEn": "Constrained within delicate oligarchic gridlock; exhausted vital reserves maintaining status quo rather than structural breakthroughs.",
    "historicalQuoteZh": "《晋书》赞：冰识达清裁，处权事之间，内抚朝廷，外绥方岳，社稷赖之。",
    "historicalQuoteEn": "Book of Jin: Yu Bing possessed penetrating clarity; balancing internal court factions and frontier armies, he was a true anchor of state.",
    "auxiliaryStrengthsZh": [
      "以大局为重打破宗族私利的卓越政治家胸怀",
      "在关键权力交接点选择最稳健方案，避免主少国疑之厄"
    ],
    "auxiliaryStrengthsEn": [
      "Systemic maturity over clan self-interest",
      "Engineered stable royal succession by prioritizing imperial survival over easy puppet manipulation"
    ],
    "auxiliaryWeaknessesZh": [
      "地处东晋门阀平衡的夹缝中",
      "虽能勉强维系稳定，但无力从根本上消除士族内耗与北伐困局"
    ],
    "auxiliaryWeaknessesEn": [
      "Constrained within delicate oligarchic gridlock",
      "exhausted vital reserves maintaining status quo rather than structural breakthroughs"
    ]
  },
  {
    "id": "yu_yi",
    "nameZh": "庾翼",
    "nameEn": "Yu Yi",
    "dynastyZh": "东晋",
    "dynastyEn": "Western Jin",
    "eraTag": "eastern_jin",
    "eraNameZh": "东晋衣冠",
    "eraNameEn": "Eastern Jin Scholarly Era",
    "positionZh": "东晋征西将军 · 荆州刺史 · 志在北伐草隶大家",
    "positionEn": "General of Western Conquest · Governor of Jingzhou · Northern Expeditionary and Master Calligrapher",
    "personalityZh": "豪爽果断、风骨昂扬、不畏强寇、书法盖世",
    "personalityEn": "Bold, decisive, burning with ambition to reclaim North China, celebrated calligrapher rivaling Wang Xizhi",
    "deedsZh": "镇守荆襄整饬戎马，常有扫清中原席卷天下之志；派军进驻襄阳准备北伐；书法草隶并妙，早年王羲之亦自叹弗如；不幸暴病英年早卒。",
    "deedsEn": "Governed the strategic middle Yangtze; mobilized massive armaments aimed at recovering the Central Plains; esteemed calligrapher whose brushwork humbled contemporaries, dying before his grand march.",
    "archetype": "military",
    "fiveElements": {
      "dominant": "金",
      "secondary": "木"
    },
    "tenGodsAffinity": [
      "七杀",
      "伤官",
      "食神"
    ],
    "patternType": "杀刃透干",
    "strengthAdviceZh": "兼具军政硬核武装与极致书法美学的全能将星！敢于在偏安江南时树立光复神州的大格局志向。",
    "strengthAdviceEn": "Rare synthesis of frontline martial vigor and transcendent calligraphic art! Kept the dream of national reunification burning bright.",
    "weaknessAdviceZh": "行动急躁激进，在粮饷筹措与同僚配合尚未成熟时急于冒进出征，遭内部掣肘且体力过耗夭折。",
    "weaknessAdviceEn": "Impatience and logistical overextension; launched premature offensives against widespread court reluctance, draining his health.",
    "historicalQuoteZh": "王羲之常叹其书曰：‘小儿辈遂逼人！’《晋书》评：庾翼有经略四方之志，功名未遂，惜哉！",
    "historicalQuoteEn": "Even Wang Xizhi marveled at his stroke dynamics; Book of Jin laments that his vast military vision was cut short by untimely death.",
    "auxiliaryStrengthsZh": [
      "兼具军政硬核武装与极致书法美学的全能将星",
      "敢于在偏安江南时树立光复神州的大格局志向"
    ],
    "auxiliaryStrengthsEn": [
      "Rare synthesis of frontline martial vigor and transcendent calligraphic art",
      "Kept the dream of national reunification burning bright"
    ],
    "auxiliaryWeaknessesZh": [
      "行动急躁激进",
      "在粮饷筹措与同僚配合尚未成熟时急于冒进出征，遭内部掣肘且体力过耗夭折"
    ],
    "auxiliaryWeaknessesEn": [
      "Impatience and logistical overextension",
      "launched premature offensives against widespread court reluctance, draining his health"
    ]
  },
  {
    "id": "su_jun",
    "nameZh": "苏峻",
    "nameEn": "Su Jun",
    "dynastyZh": "东晋",
    "dynastyEn": "Eastern Jin",
    "eraTag": "eastern_jin",
    "eraNameZh": "东晋衣冠",
    "eraNameEn": "Eastern Jin Scholarly Era",
    "positionZh": "东晋历阳内史 · 冠军将军 · ‘苏峻之乱’叛乱巨寇",
    "positionEn": "Prefect of Liyang of Eastern Jin · Rebel Warlord who sacked the capital Jiankang",
    "personalityZh": "骁勇凶悍、桀骜不驯、残忍贪暴、战术突击凶猛",
    "personalityEn": "Savage combat warrior, rebellious against civilian elites, devastating in shock assaults, politically blind",
    "deedsZh": "收容数万北方流民乞活军，战力极强；因不满庾亮逼召削权，联络祖约起兵反晋攻陷建康，俘虏成帝大掠宫室；后在白石山单骑突阵醉酒落马遭斩杀。",
    "deedsEn": "Commander of desperate northern refugee armies; enraged by court arrogance, rebelled and burned Jiankang to ash, but was impaled after charging enemy lines drunk at Baishi.",
    "archetype": "military",
    "fiveElements": {
      "dominant": "火",
      "secondary": "金"
    },
    "tenGodsAffinity": [
      "七杀",
      "劫财",
      "偏印"
    ],
    "patternType": "羊刃倒戈",
    "strengthAdviceZh": "凝聚破产流民爆发生死绝战力量的极限突击杀伤力！在战场前线身先士卒所向无敌。",
    "strengthAdviceEn": "Explosive military shock value rallying desperate dispossessed masses; devastating assault commander on open battlefields.",
    "weaknessAdviceZh": "完全缺乏政治智慧与建设能力！攻占京师后放任暴行焚掠宗庙，在决战中酗酒单骑送命沦为反面教材。",
    "weaknessAdviceEn": "Zero strategic statecraft; reduced his uprising to mindless arson and pillage, meeting a drunken death on the spear points of Jin veterans.",
    "historicalQuoteZh": "《晋书》载：峻乘马醉突陈，坠马为陶侃部卒所杀，剖其胸取心。乱平，朝廷乃安。",
    "historicalQuoteEn": "Book of Jin: Su Jun charged drunk, fell from horse, and was hacked to pieces by Tao Kan's spearmen; his catastrophic rebellion was finally crushed.",
    "auxiliaryStrengthsZh": [
      "凝聚破产流民爆发生死绝战力量的极限突击杀伤力",
      "在战场前线身先士卒所向无敌"
    ],
    "auxiliaryStrengthsEn": [
      "Explosive military shock value rallying desperate dispossessed masses",
      "devastating assault commander on open battlefields"
    ],
    "auxiliaryWeaknessesZh": [
      "完全缺乏政治智慧与建设能力",
      "攻占京师后放任暴行焚掠宗庙，在决战中酗酒单骑送命沦为反面教材"
    ],
    "auxiliaryWeaknessesEn": [
      "Zero strategic statecraft",
      "reduced his uprising to mindless arson and pillage, meeting a drunken death on the spear points of Jin veterans"
    ]
  },
  {
    "id": "xie_shang",
    "nameZh": "谢尚",
    "nameEn": "Xie Shang",
    "dynastyZh": "东晋",
    "dynastyEn": "Eastern Jin",
    "eraTag": "eastern_jin",
    "eraNameZh": "东晋衣冠",
    "eraNameEn": "Eastern Jin Scholarly Era",
    "positionZh": "东晋镇西将军 · 豫州刺史 · 谢安从兄 · 迎奉传国玉玺",
    "positionEn": "General of Western Defense · Governor of Yuzhou · Elder Cousin of Xie An · Recoverer of Imperial Jade Seal",
    "personalityZh": "风流善舞、机敏通达、能文能武、抚绥江淮",
    "personalityEn": "Graceful in dance, agile in mind, competent in both war and letters, stabilizing the Huai frontier",
    "deedsZh": "年幼时即显名士风度，王导叹其‘此儿非凡’；身着单衣舞鸲鹆舞折服四座；出镇豫州收揽中原民心，自邺城迎得秦始皇传国玉玺归还江东；为陈郡谢氏跃升门阀奠基。",
    "deedsEn": "Dazzled salons in youth with his poetic Myna Bird dance; governed the northern border with warmth, recovering the lost Qin Dynasty Imperial Jade Seal from Ye for Eastern Jin.",
    "archetype": "civil",
    "fiveElements": {
      "dominant": "水",
      "secondary": "火"
    },
    "tenGodsAffinity": [
      "食神",
      "偏财",
      "正官"
    ],
    "patternType": "食伤生财",
    "strengthAdviceZh": "将名士风度与边关实干完美兼容的跨界名将！既能登堂起舞风靡士林，又能统领边镇迎回传国重器。",
    "strengthAdviceEn": "Seamless fusion of elite cultural charisma and tough border governance! Earned supreme legitimacy by securing sacred imperial regalia.",
    "weaknessAdviceZh": "军事指挥硬仗攻坚战力稍逊，在与前秦苻健部将交战中遭遇张遇重创，不得不依靠桓温等后方解围。",
    "weaknessAdviceEn": "Frontline military tactical vulnerabilities against northern iron cavalry; required allied rescue during major campaigns.",
    "historicalQuoteZh": "《晋书》赞：谢尚神怀畅远，才武兼备，起舞清华，迎玺归晋，谢氏门第自此隆崇。",
    "historicalQuoteEn": "Book of Jin: Xie Shang was expansive and martially gifted; recovering the sacred Jade Seal, he propelled the Xie clan to paramount glory.",
    "auxiliaryStrengthsZh": [
      "将名士风度与边关实干完美兼容的跨界名将",
      "既能登堂起舞风靡士林，又能统领边镇迎回传国重器"
    ],
    "auxiliaryStrengthsEn": [
      "Seamless fusion of elite cultural charisma and tough border governance",
      "Earned supreme legitimacy by securing sacred imperial regalia"
    ],
    "auxiliaryWeaknessesZh": [
      "军事指挥硬仗攻坚战力稍逊",
      "在与前秦苻健部将交战中遭遇张遇重创，不得不依靠桓温等后方解围"
    ],
    "auxiliaryWeaknessesEn": [
      "Frontline military tactical vulnerabilities against northern iron cavalry",
      "required allied rescue during major campaigns"
    ]
  },
  {
    "id": "wang_xun",
    "nameZh": "王珣",
    "nameEn": "Wang Xun",
    "dynastyZh": "东晋",
    "dynastyEn": "Eastern Jin",
    "eraTag": "eastern_jin",
    "eraNameZh": "东晋衣冠",
    "eraNameEn": "Eastern Jin Scholarly Era",
    "positionZh": "东晋尚书令 · 书法家 · 《伯远帖》唯一东晋真迹作者",
    "positionEn": "Prefect of Masters of Writing of Eastern Jin · Author of Boyuan Tie (Only Surviving Jin Original)",
    "personalityZh": "神采秀迈、辞翰绝伦、骨鲠正派、从容不迫",
    "personalityEn": "Radiantly cultured, peerless calligrapher, principled magistrate, maintaining poise amid shifting factions",
    "deedsZh": "王导之孙，曾为桓温主簿深得倚重；孝武帝时任尚书令辅政，执法严正；其墨迹《伯远帖》为‘三希堂’之首，亦是目前天下唯一存世的东晋名家真迹原件。",
    "deedsEn": "Grandson of Wang Dao and confidant to Huan Xuan; served as chief minister maintaining court justice. His handwritten letter 'Boyuan Tie' is the sole surviving direct calligraphic paper original from the Jin dynasty.",
    "archetype": "specialist",
    "fiveElements": {
      "dominant": "金",
      "secondary": "水"
    },
    "tenGodsAffinity": [
      "伤官",
      "正印",
      "正官"
    ],
    "patternType": "金水伤官",
    "strengthAdviceZh": "留下天下独一无二稀世真迹的传世法眼！以孤篇压全唐、一帖传千载的绝顶艺术造诣超然于政客倾轧之外。",
    "strengthAdviceEn": "Sole surviving direct artifact legacy of an entire golden era! Ascended beyond temporal political decay through unrepeatable calligraphic mastery.",
    "weaknessAdviceZh": "在皇权与门阀家族撕扯中多受牵制，晚年政治舞台空间逼仄，未能彻底化解司马道子擅权乱局。",
    "weaknessAdviceEn": "Constrained by late Eastern Jin palace degeneration under Prince Daozi, unable to arrest systemic imperial unraveling.",
    "historicalQuoteZh": "乾隆帝定《伯远帖》为‘三希’真宝。董其昌题跋：‘潇洒古淡，东晋风流，宛然在目。’",
    "historicalQuoteEn": "Emperor Qianlong enshrined Boyuan Tie as supreme treasure; Dong Qichang praised: 'Elegantly ancient, the living soul of Jin nobility.'",
    "auxiliaryStrengthsZh": [
      "留下天下独一无二稀世真迹的传世法眼",
      "以孤篇压全唐、一帖传千载的绝顶艺术造诣超然于政客倾轧之外"
    ],
    "auxiliaryStrengthsEn": [
      "Sole surviving direct artifact legacy of an entire golden era",
      "Ascended beyond temporal political decay through unrepeatable calligraphic mastery"
    ],
    "auxiliaryWeaknessesZh": [
      "在皇权与门阀家族撕扯中多受牵制",
      "晚年政治舞台空间逼仄，未能彻底化解司马道子擅权乱局"
    ],
    "auxiliaryWeaknessesEn": [
      "Constrained by late Eastern Jin palace degeneration under Prince Daozi",
      "unable to arrest systemic imperial unraveling"
    ]
  },
  {
    "id": "lu_ye",
    "nameZh": "陆晔",
    "nameEn": "Lu Ye",
    "dynastyZh": "东晋",
    "dynastyEn": "Eastern Jin",
    "eraTag": "eastern_jin",
    "eraNameZh": "东晋衣冠",
    "eraNameEn": "Eastern Jin Scholarly Era",
    "positionZh": "东晋司空 · 录尚书事 · 江东三世元老重臣",
    "positionEn": "Grand Minister of Works of Eastern Jin · Chancellor · Three-Generation Southern Pillar",
    "personalityZh": "贞恪寡欲、深识远虑、端穆廉正、江东士族表率",
    "personalityEn": "Austere, uncorrupted, deeply prescient, setting the gold standard of integrity for southern native aristocrats",
    "deedsZh": "西晋灭吴后恪守臣节；晋室南渡后作为江东本土顶级大族（吴郡陆氏）领袖鼎力辅佐司马睿立国；苏峻攻陷建康时坚守宫禁护卫幼帝成帝；进拜司空以老成德重善终。",
    "deedsEn": "Leader of native southern Wu aristocracy; welcomed northern refugees and secured state foundation for Emperor Yuan. Guarded the child emperor with his bare body during the sack of Jiankang.",
    "archetype": "civil",
    "fiveElements": {
      "dominant": "土",
      "secondary": "木"
    },
    "tenGodsAffinity": [
      "正印",
      "正官",
      "正财"
    ],
    "patternType": "正印格",
    "strengthAdviceZh": "以至公无私的崇高威望作为地方本土派与外来政权利益平衡的‘定海神针’！危难时刻挺身护卫正统。",
    "strengthAdviceEn": "Invaluable political bridge between native local power and incoming northern refugee regimes! Stood firm in palace crisis as universal moral anchor.",
    "weaknessAdviceZh": "作风保守循旧、不慕功名，在拓土恢复中原的大业上缺乏积极主动作业的进攻热情。",
    "weaknessAdviceEn": "Conservative and risk-averse; focused purely on southern domestic stability rather than proactive national northern recovery.",
    "historicalQuoteZh": "《晋书》评：陆晔器量淹雅，风轨端凝，三世居公辅之位，清规自饬，江东领袖也。",
    "historicalQuoteEn": "Book of Jin: Lu Ye possessed serene dignity and unyielding rectitude; serving three reigns as premier minister, he was the pride of Jiangnan.",
    "auxiliaryStrengthsZh": [
      "以至公无私的崇高威望作为地方本土派与外来政权利益平衡的‘定海神针’",
      "危难时刻挺身护卫正统"
    ],
    "auxiliaryStrengthsEn": [
      "Invaluable political bridge between native local power and incoming northern refugee regimes",
      "Stood firm in palace crisis as universal moral anchor"
    ],
    "auxiliaryWeaknessesZh": [
      "作风保守循旧、不慕功名",
      "在拓土恢复中原的大业上缺乏积极主动作业的进攻热情"
    ],
    "auxiliaryWeaknessesEn": [
      "Conservative and risk-averse",
      "focused purely on southern domestic stability rather than proactive national northern recovery"
    ]
  },
  {
    "id": "gu_rong",
    "nameZh": "顾荣",
    "nameEn": "Gu Rong",
    "dynastyZh": "东晋",
    "dynastyEn": "Eastern Jin",
    "eraTag": "eastern_jin",
    "eraNameZh": "东晋衣冠",
    "eraNameEn": "Eastern Jin Scholarly Era",
    "positionZh": "西晋散骑常侍 · 东晋骠骑将军 · ‘机发奇策安江南’本土名士",
    "positionEn": "General of Agile Cavalry of Eastern Jin · Master Southern Strategist who anchored Jin in the South",
    "personalityZh": "机警敏悟、器度清旷、善识时务、深具乡邦大义",
    "personalityEn": "Astute, magnanimous, swift to read seismic historical turns, prioritizing regional peace above private ambition",
    "deedsZh": "吴郡四大家族之顾氏领袖；西晋大乱敏锐南归；陈敏谋反企图割据江东，顾荣在战场一挥白羽扇，三军倒戈溃散；力劝江东大族拥戴司马睿，奠定东晋三百年偏安格局。",
    "deedsEn": "Southern elite titan who crushed warlord Chen Min's mutiny with a mere wave of his white feather fan; mobilized southern clan support for Sima Rui, literally birthing Eastern Jin stability.",
    "archetype": "executive",
    "fiveElements": {
      "dominant": "木",
      "secondary": "水"
    },
    "tenGodsAffinity": [
      "偏财",
      "偏官",
      "正印"
    ],
    "patternType": "财生杀旺",
    "strengthAdviceZh": "以惊人威望‘挥羽扇散众敌’的一击破局力！善于在动荡期做出最符合地缘大势的关键决断，定国安民。",
    "strengthAdviceEn": "Legendary soft power disarming armies with a wave of a fan! Engineered the foundational coalition that secured Southern China for centuries.",
    "weaknessAdviceZh": "过早病卒未能亲见东晋政权彻底稳固，在平衡南渡士族对本土吴姓世家的排挤压制上留存后患。",
    "weaknessAdviceEn": "Died prematurely, leaving local southern gentry vulnerable to aggressive northern migrant aristocratic monopolization.",
    "historicalQuoteZh": "时人语曰：‘机发奇策顾彦先。’《晋书》评：顾荣识断通赡，挥扇回麾，江表清晏，元皇化基，荣之力也。",
    "historicalQuoteEn": "Book of Jin: Gu Rong's foresight was brilliant; waving his feather fan he pacified Jiangnan, single-handedly laying the throne for Emperor Yuan.",
    "auxiliaryStrengthsZh": [
      "以惊人威望‘挥羽扇散众敌’的一击破局力",
      "善于在动荡期做出最符合地缘大势的关键决断，定国安民"
    ],
    "auxiliaryStrengthsEn": [
      "Legendary soft power disarming armies with a wave of a fan",
      "Engineered the foundational coalition that secured Southern China for centuries"
    ],
    "auxiliaryWeaknessesZh": [
      "过早病卒未能亲见东晋政权彻底稳固",
      "在平衡南渡士族对本土吴姓世家的排挤压制上留存后患"
    ],
    "auxiliaryWeaknessesEn": [
      "Died prematurely",
      "leaving local southern gentry vulnerable to aggressive northern migrant aristocratic monopolization"
    ]
  },
  {
    "id": "he_xun",
    "nameZh": "贺循",
    "nameEn": "He Xun",
    "dynastyZh": "东晋",
    "dynastyEn": "Eastern Jin",
    "eraTag": "eastern_jin",
    "eraNameZh": "东晋衣冠",
    "eraNameEn": "Eastern Jin Scholarly Era",
    "positionZh": "东晋太常 · 礼学宗师 · 江东儒宗 · 朝廷第一典仪法眼",
    "positionEn": "Grand Master of Ceremonies of Eastern Jin · Supreme Confucian Ritualist of Jiangnan",
    "personalityZh": "博通经史、谨严如神、清贫乐道、士林楷模",
    "personalityEn": "Encyclopedic scholar of classical rites, impeccably upright, content in poverty, revered as ethical compass",
    "deedsZh": "江东名士贺齐之后，博览经传被尊为‘儒宗’；司马睿初至建康，制度全无，贺循为之制定全部郊庙礼仪、官制法度；居官清苦衣食不周，司马睿亲临其府嗟叹抚恤。",
    "deedsEn": "Foremost ritual philosopher of the south; drafted the entire constitutional, imperial, ancestral, and liturgical blueprint for the newly founded Eastern Jin court from thin air.",
    "archetype": "civil",
    "fiveElements": {
      "dominant": "木",
      "secondary": "土"
    },
    "tenGodsAffinity": [
      "正印",
      "正官",
      "食神"
    ],
    "patternType": "正印格",
    "strengthAdviceZh": "在蛮荒废墟中凭空搭建国家级礼乐文明与宪章制度的系统架构师！以绝对专业深度获得最高统治者顶格敬仰。",
    "strengthAdviceEn": "Civilizational system architect! Rebuilt the entire ceremonial and constitutional framework of an empire from imperial ashes.",
    "weaknessAdviceZh": "过于泥古守礼、清廉至生活赤贫，缺乏解决现实经济粮饷与军事动员硬仗的实权手段。",
    "weaknessAdviceEn": "Overly dogmatic ritualist; lived in acute personal poverty, lacking leverage in brutal fiscal or military conflicts.",
    "historicalQuoteZh": "晋元帝手诏曰：‘贺太常德操清劭，儒冠江湘，五礼之废，一朝备定，社稷之臣也。’",
    "historicalQuoteEn": "Emperor Yuan decreed: 'Lord He's virtue illuminates the south; all imperial rites were restored by his single hand. A titan of the realm.'",
    "auxiliaryStrengthsZh": [
      "在蛮荒废墟中凭空搭建国家级礼乐文明与宪章制度的系统架构师",
      "以绝对专业深度获得最高统治者顶格敬仰"
    ],
    "auxiliaryStrengthsEn": [
      "Civilizational system architect",
      "Rebuilt the entire ceremonial and constitutional framework of an empire from imperial ashes"
    ],
    "auxiliaryWeaknessesZh": [
      "过于泥古守礼、清廉至生活赤贫",
      "缺乏解决现实经济粮饷与军事动员硬仗的实权手段"
    ],
    "auxiliaryWeaknessesEn": [
      "Overly dogmatic ritualist",
      "lived in acute personal poverty, lacking leverage in brutal fiscal or military conflicts"
    ]
  },
  {
    "id": "ji_zhan",
    "nameZh": "纪瞻",
    "nameEn": "Ji Zhan",
    "dynastyZh": "东晋",
    "dynastyEn": "Eastern Jin",
    "eraTag": "eastern_jin",
    "eraNameZh": "东晋衣冠",
    "eraNameEn": "Eastern Jin Scholarly Era",
    "positionZh": "东晋侍中 · 骠骑将军 · 平定三乱之江东名帅",
    "positionEn": "Palace Attendant · General of Agile Cavalry · Southern Pacifier of Three Rebellions",
    "personalityZh": "敦雅和正、文武兼资、谦退让功、老成谋国",
    "personalityEn": "Gentle yet firm in military command, dual-talented in arms and civil strategy, deferential in victory",
    "deedsZh": "江东五俊之一；数次临危统军，平定石冰、陈敏、周玘之乱，屡建殊勋；进退有据不揽大权，屡上表辞让重职，以温良恭俭深得元帝明帝两代君臣信任。",
    "deedsEn": "Southern patrician general who crushed three major rebellions threating early Eastern Jin; consistently declined excessive military honors, winning absolute royal trust.",
    "archetype": "executive",
    "fiveElements": {
      "dominant": "水",
      "secondary": "土"
    },
    "tenGodsAffinity": [
      "正官",
      "正印",
      "偏财"
    ],
    "patternType": "官印双清",
    "strengthAdviceZh": "战功赫赫却能功成身退的顶级职场安全感智慧！在外部势力严密防范本土派的局势下以谦逊换取长治久安。",
    "strengthAdviceEn": "Master of post-victory deference! Won battlefield glory yet disarmed imperial suspicion by gracefully declining dangerous excess titles.",
    "weaknessAdviceZh": "处处谨小慎微过度避嫌，在东晋早期多次面对门阀专横时采取避让自保，未能力争制度主导权。",
    "weaknessAdviceEn": "Excessive modesty borderlined on timidity; yielded political primacy to domineering northern immigrant oligarchs.",
    "historicalQuoteZh": "《晋书》赞：纪瞻和而能峻，清而通整，屡出师破贼，退让位冠，世称纯臣。",
    "historicalQuoteEn": "Book of Jin: Ji Zhan was gentle yet stern in war; repeatedly routing rebels, he was celebrated as a model of immaculate integrity.",
    "auxiliaryStrengthsZh": [
      "战功赫赫却能功成身退的顶级职场安全感智慧",
      "在外部势力严密防范本土派的局势下以谦逊换取长治久安"
    ],
    "auxiliaryStrengthsEn": [
      "Master of post-victory deference",
      "Won battlefield glory yet disarmed imperial suspicion by gracefully declining dangerous excess titles"
    ],
    "auxiliaryWeaknessesZh": [
      "处处谨小慎微过度避嫌",
      "在东晋早期多次面对门阀专横时采取避让自保，未能力争制度主导权"
    ],
    "auxiliaryWeaknessesEn": [
      "Excessive modesty borderlined on timidity",
      "yielded political primacy to domineering northern immigrant oligarchs"
    ]
  },
  {
    "id": "dai_kui",
    "nameZh": "戴逵",
    "nameEn": "Dai Kui",
    "dynastyZh": "东晋",
    "dynastyEn": "Eastern Jin",
    "eraTag": "eastern_jin",
    "eraNameZh": "东晋衣冠",
    "eraNameEn": "Eastern Jin Scholarly Era",
    "positionZh": "东晋雕塑巨匠 · 画圣级名士 · 琴艺大家 · ‘破琴绝仕’高士",
    "positionEn": "Master Sculptor and Painter of Eastern Jin · Virtuoso Musician · Legendary Hermit of Broken Zither",
    "personalityZh": "傲岸高蹈、绝意仕途、巧夺天工、至情至性",
    "personalityEn": "Loftily independent, scorning bureaucratic office, artistic visionary, intensely passionate in authentic craft",
    "deedsZh": "隐居剡溪以雕塑绘画为业，所造佛像妙绝千古；武陵王司马晞召其弹琴，戴逵当使者面当场摔碎古琴曰‘戴安道非江东僮仆！’朝廷屡次公车征辟皆坚辞不就。",
    "deedsEn": "Master sculptor who pioneered realistic Buddhist iconography; when a corrupt imperial prince ordered him to play the zither like a servant, smashed his instrument on stone, refusing all state offices.",
    "archetype": "specialist",
    "fiveElements": {
      "dominant": "金",
      "secondary": "木"
    },
    "tenGodsAffinity": [
      "伤官",
      "偏印",
      "比肩"
    ],
    "patternType": "伤官佩印",
    "strengthAdviceZh": "以粉身碎骨的傲骨捍卫艺术家尊严的铁血品格！宁碎古琴不事权贵，成为中华文化史上独立人格的永恒象征。",
    "strengthAdviceEn": "Unshakeable artistic sovereignty! Smashed his prized zither rather than flatter aristocratic tyrants, enshrining creative integrity forever.",
    "weaknessAdviceZh": "与世俗权力体系彻底决裂，艺术造诣虽登峰造极，但毕生颠沛隐遁山林，物质生活受限。",
    "weaknessAdviceEn": "Radical societal withdrawal; absolute defiance of power guaranteed lifetime monastic poverty and material vulnerability.",
    "historicalQuoteZh": "逵破琴曰：‘戴安道不为王门伶人！’《晋书》评：戴逵孤峰独拔，雅操高蹈，名重当时。",
    "historicalQuoteEn": "Smashed his instrument saying: 'Dai Andao is no prince's minstrel!' Book of Jin celebrates him as a peak of incorruptible hermitage.",
    "auxiliaryStrengthsZh": [
      "以粉身碎骨的傲骨捍卫艺术家尊严的铁血品格",
      "宁碎古琴不事权贵，成为中华文化史上独立人格的永恒象征"
    ],
    "auxiliaryStrengthsEn": [
      "Unshakeable artistic sovereignty",
      "Smashed his prized zither rather than flatter aristocratic tyrants, enshrining creative integrity forever"
    ],
    "auxiliaryWeaknessesZh": [
      "与世俗权力体系彻底决裂",
      "艺术造诣虽登峰造极，但毕生颠沛隐遁山林，物质生活受限"
    ],
    "auxiliaryWeaknessesEn": [
      "Radical societal withdrawal",
      "absolute defiance of power guaranteed lifetime monastic poverty and material vulnerability"
    ]
  },
  {
    "id": "wang_chen",
    "nameZh": "王忱",
    "nameEn": "Wang Chen",
    "dynastyZh": "东晋",
    "dynastyEn": "Eastern Jin",
    "eraTag": "eastern_jin",
    "eraNameZh": "东晋衣冠",
    "eraNameEn": "Eastern Jin Scholarly Era",
    "positionZh": "东晋中书令 · 荆州刺史 · 小字‘阿字’风流名士",
    "positionEn": "Director of Secretariat · Governor of Jingzhou · Famous Salon Eccentric",
    "personalityZh": "任诞放纵、嗜酒纵横、才气过人、英迈傲俗",
    "personalityEn": "Wildly eccentric, heavy drinker, prodigiously witty, contemptuous of vulgar court protocol",
    "deedsZh": "太原王氏名门，与殷仲堪互争江荆霸柄；幼有大志，好任诞狂歌；在荆州大旱时大开粮仓赈济数万饥民，展现民政铁腕；然因饮酒过甚年仅三十七岁醉崩任上。",
    "deedsEn": "Scion of Taiyuan Wang clan; rival to Yin Zhongkan. Relieved tens of thousands during severe drought in Jingzhou with bold administrative grain releases, but drank himself to death at 37.",
    "archetype": "executive",
    "fiveElements": {
      "dominant": "火",
      "secondary": "水"
    },
    "tenGodsAffinity": [
      "伤官",
      "偏财",
      "偏官"
    ],
    "patternType": "伤官驾杀",
    "strengthAdviceZh": "不拘小节大开大合的突击行政魄力！在突发特大灾难面前敢于越权开仓放粮拯救万民生命。",
    "strengthAdviceEn": "Bold, decisive crisis governance cutting through red tape! Emptied state granaries to feed starving millions during catastrophic drought.",
    "weaknessAdviceZh": "私生活放荡无度、酗酒成瘾摧毁健康底盘，年仅三十七岁壮年暴毙，断送大好仕途。",
    "weaknessAdviceEn": "Destructive lifestyle and acute alcoholism; physical vessel collapsed at age 37, truncating a stellar career.",
    "historicalQuoteZh": "时人语曰：‘见阿字，觉山川自映发。’《晋书》：忱博学善属文，然好酒荒纵，以此陨命。",
    "historicalQuoteEn": "Contemporary saying: 'Gazing upon Wang Chen, mountains and rivers seem to shine.' Yet chronic drinking extinguished his life.",
    "auxiliaryStrengthsZh": [
      "不拘小节大开大合的突击行政魄力",
      "在突发特大灾难面前敢于越权开仓放粮拯救万民生命"
    ],
    "auxiliaryStrengthsEn": [
      "Bold, decisive crisis governance cutting through red tape",
      "Emptied state granaries to feed starving millions during catastrophic drought"
    ],
    "auxiliaryWeaknessesZh": [
      "私生活放荡无度、酗酒成瘾摧毁健康底盘",
      "年仅三十七岁壮年暴毙，断送大好仕途"
    ],
    "auxiliaryWeaknessesEn": [
      "Destructive lifestyle and acute alcoholism",
      "physical vessel collapsed at age 37, truncating a stellar career"
    ]
  },
  {
    "id": "yin_zhongkan",
    "nameZh": "殷仲堪",
    "nameEn": "Yin Zhongkan",
    "dynastyZh": "东晋",
    "dynastyEn": "Eastern Jin",
    "eraTag": "eastern_jin",
    "eraNameZh": "东晋衣冠",
    "eraNameEn": "Eastern Jin Scholarly Era",
    "positionZh": "东晋荆州刺史 · 孝武帝心腹 · 廉洁自守悲剧督帅",
    "positionEn": "Governor of Jingzhou · Confidant of Emperor Xiaowu · Tragic Incorruptible Viceroy",
    "personalityZh": "清修自厉、俭素寡欲、至孝笃信、缺乏军阀权谋",
    "personalityEn": "Frugal, pious, devoted son, scrupulously honest, yet outmatched in cold Machiavellian military intrigue",
    "deedsZh": "食饭落饭屑必自拾而食，常戒子侄‘勿以我居大位而忘贫俭’；为父患眼病亲尝汤药致一眼失明；受命镇守荆州防衡强藩桓玄，在与桓玄的争斗中轻信敌言，被桓玄击溃逼迫自缢。",
    "deedsEn": "Ate crumbs from the table to teach humility; blinded in one eye caring for his sick father. Stationed at Jingzhou to balance Huan Xuan, was outmaneuvered by the tyrant and driven to suicide.",
    "archetype": "civil",
    "fiveElements": {
      "dominant": "木",
      "secondary": "水"
    },
    "tenGodsAffinity": [
      "正印",
      "正官",
      "比肩"
    ],
    "patternType": "官印双全",
    "strengthAdviceZh": "令人肃然起敬的一尘不染道德操守！位居方面大督依然粗茶淡饭节俭爱民，成为千古官德丰碑。",
    "strengthAdviceEn": "Immaculate personal incorruptibility and moral gravitas! Governed massive provincial armies while living on humble gruel as a beacon of virtue.",
    "weaknessAdviceZh": "以书生软心肠面对狼子野心（桓玄），兵败时犹怀妇人之仁，缺乏在乱世中雷霆诛除政敌的霹雳手段。",
    "weaknessAdviceEn": "Fatal softness against apex predators; treated ruthless warlords with gentlemanly trust, paying with his life and province.",
    "historicalQuoteZh": "仲堪戒子弟曰：‘贫者，士之常也。诸儿见我居此，勿谓我贫！’《晋书》：仲堪善名，然兵败自刎，悲夫！",
    "historicalQuoteEn": "Instructed his sons: 'Poverty is the natural state of scholars; never forget simplicity.' Book of Jin laments his tragic end.",
    "auxiliaryStrengthsZh": [
      "令人肃然起敬的一尘不染道德操守",
      "位居方面大督依然粗茶淡饭节俭爱民，成为千古官德丰碑"
    ],
    "auxiliaryStrengthsEn": [
      "Immaculate personal incorruptibility and moral gravitas",
      "Governed massive provincial armies while living on humble gruel as a beacon of virtue"
    ],
    "auxiliaryWeaknessesZh": [
      "以书生软心肠面对狼子野心（桓玄）",
      "兵败时犹怀妇人之仁，缺乏在乱世中雷霆诛除政敌的霹雳手段"
    ],
    "auxiliaryWeaknessesEn": [
      "Fatal softness against apex predators",
      "treated ruthless warlords with gentlemanly trust, paying with his life and province"
    ]
  },
  {
    "id": "liu_muzhi",
    "nameZh": "刘穆之",
    "nameEn": "Liu Muzhi",
    "dynastyZh": "东晋",
    "dynastyEn": "Eastern Jin / Liu Song",
    "eraTag": "eastern_jin",
    "eraNameZh": "东晋衣冠",
    "eraNameEn": "Eastern Jin Scholarly Era",
    "positionZh": "东晋前将军 · 尚书左仆射 · 刘裕幕后第一统筹谋主 · ‘江左萧何’",
    "positionEn": "Left Minister of Masters of Writing · Chief Strategist to Liu Yu · The 'Xiao He of Jiangnan'",
    "personalityZh": "机敏绝伦、一心多用、食肠宽大、决断如流",
    "personalityEn": "Astoundingly multifaceted administrator, handling ten crises at once with supreme ease, immense appetite for work and life",
    "deedsZh": "寒门出身，早年贫寒赖妻族食；投刘裕为机要谋主，一人统领留守大后方，宾客满堂、口授答辩、手批公文数十万言，决断如流水；刘裕在外北伐灭后秦，穆之卒于建康，刘裕闻讯大恸。",
    "deedsEn": "Foremost civilian strategist to Liu Yu; governed the home capital with superhuman efficiency, dictating military orders, answering visitors, and signing laws simultaneously without a single error.",
    "archetype": "civil",
    "fiveElements": {
      "dominant": "土",
      "secondary": "水"
    },
    "tenGodsAffinity": [
      "正财",
      "正官",
      "偏印"
    ],
    "patternType": "财官印三奇",
    "strengthAdviceZh": "中国古代政务统筹与多线程并发执行处理能力的最高标杆！一人支撑千军万马后方粮饷军机无一纰漏。",
    "strengthAdviceEn": "Paramount multi-threaded administrative engine! Solved endless logistical and political crises simultaneously with unflappable brilliance.",
    "weaknessAdviceZh": "因常年超负荷消耗心力脑力，暴饮暴食无度，致使身体代谢失衡在刘裕北伐未竞之际猝逝。",
    "weaknessAdviceEn": "Extreme cognitive overload and poor physical lifestyle; sudden death at home derailed Liu Yu's total northern conquest.",
    "historicalQuoteZh": "宋武帝刘裕哭之恸曰：‘穆之不死，天下何愁不定！’《宋书》：才谋总洽，决断如流，江左一人而已。",
    "historicalQuoteEn": "Emperor Liu Yu wept: 'Had Muzhi lived, conquering the world would have been trivial!' Book of Song: Peerless administrative genius.",
    "auxiliaryStrengthsZh": [
      "中国古代政务统筹与多线程并发执行处理能力的最高标杆",
      "人支撑千军万马后方粮饷军机无一纰漏"
    ],
    "auxiliaryStrengthsEn": [
      "Paramount multi-threaded administrative engine",
      "Solved endless logistical and political crises simultaneously with unflappable brilliance"
    ],
    "auxiliaryWeaknessesZh": [
      "因常年超负荷消耗心力脑力",
      "暴饮暴食无度，致使身体代谢失衡在刘裕北伐未竞之际猝逝"
    ],
    "auxiliaryWeaknessesEn": [
      "Extreme cognitive overload and poor physical lifestyle",
      "sudden death at home derailed Liu Yu's total northern conquest"
    ]
  },
  {
    "id": "shen_qingzhi",
    "nameZh": "沈庆之",
    "nameEn": "Shen Qingzhi",
    "dynastyZh": "南朝宋",
    "dynastyEn": "Liu Song (Southern Dynasties)",
    "eraTag": "southern_dynasties",
    "eraNameZh": "南朝更迭",
    "eraNameEn": "Southern Dynasties Era",
    "positionZh": "南朝宋太尉 · 始兴郡公 · 白发老将 · ‘耕当问奴，织当问婢’",
    "positionEn": "Grand Commander of Liu Song · Duke of Shixing · Famed Veteran of 'Ask Servants to Farm'",
    "personalityZh": "沉勇果决、务实清醒、力阻妄动、战阵骁悍",
    "personalityEn": "Pragmatic, courageous, razor-sharp frontline realism, mocking court scholars who played at war",
    "deedsZh": "自幼领军平蛮定叛无虚发；宋文帝刘义隆欲北伐，沈庆之苦谏‘耕当问奴，织当问婢，今陛下治国伐乱乃与白面书生谋之，安得不败！’后虽遭文帝不听导致元嘉惨败，庆之仍全军而退。",
    "deedsEn": "Battle-hardened veteran who warned Emperor Wen against armchair scholar war plans: 'To farm, ask servants; to weave, ask maidens; you plan war with soft scholars—failure is certain!'",
    "archetype": "military",
    "fiveElements": {
      "dominant": "金",
      "secondary": "土"
    },
    "tenGodsAffinity": [
      "七杀",
      "偏印",
      "比肩"
    ],
    "patternType": "杀印相生",
    "strengthAdviceZh": "以最朴素底层实操真知痛击形而上空谈的高维务实智慧！深谙真实战场规律，从不被书生幻想所惑。",
    "strengthAdviceEn": "Supreme operational realism shredding academic delusions! Governed frontline combat with hard empirical truth rather than salon poetry.",
    "weaknessAdviceZh": "晚年功高震主，面对暴君宋前废帝刘子业的屠杀威胁缺乏先发制人的政治决断，惨遭毒杀。",
    "weaknessAdviceEn": "Excessive dynastic loyalty; failed to neutralize the psychotic child-emperor Liu Ziye in time, meeting assassination in retirement.",
    "historicalQuoteZh": "庆之谏伐北魏：‘治国伐乱，当与武夫谋，今与白面书生议之，事何由济！’文帝不从，果大败。",
    "historicalQuoteEn": "His historic warning remains immortal: 'War must be planned with warriors, not white-faced bookworms!' Unheeded, the empire collapsed in blood.",
    "auxiliaryStrengthsZh": [
      "以最朴素底层实操真知痛击形而上空谈的高维务实智慧",
      "深谙真实战场规律，从不被书生幻想所惑"
    ],
    "auxiliaryStrengthsEn": [
      "Supreme operational realism shredding academic delusions",
      "Governed frontline combat with hard empirical truth rather than salon poetry"
    ],
    "auxiliaryWeaknessesZh": [
      "晚年功高震主",
      "面对暴君宋前废帝刘子业的屠杀威胁缺乏先发制人的政治决断，惨遭毒杀"
    ],
    "auxiliaryWeaknessesEn": [
      "Excessive dynastic loyalty",
      "failed to neutralize the psychotic child-emperor Liu Ziye in time, meeting assassination in retirement"
    ]
  },
  {
    "id": "zong_que",
    "nameZh": "宗悫",
    "nameEn": "Zong Que",
    "dynastyZh": "南朝宋",
    "dynastyEn": "Liu Song (Southern Dynasties)",
    "eraTag": "southern_dynasties",
    "eraNameZh": "南朝更迭",
    "eraNameEn": "Southern Dynasties Era",
    "positionZh": "南朝宋车骑将军 · 洮阳侯 · ‘愿乘长风破万里浪’英雄原型",
    "positionEn": "General of Chariots and Cavalry · Originator of 'Riding Winds to Break Ten Thousand Miles of Waves'",
    "personalityZh": "豪迈雄阔、志凌云霄、机变多谋、临危制胜",
    "personalityEn": "Magnificently ambitious, courageous, tactical innovator using wild psychological warfare",
    "deedsZh": "少年即立大志‘愿乘长风破万里浪’；南征林邑国面对敌军象阵，宗悫造假狮子冲锋惊吓战象，破象阵大获全胜缴获无数黄金；一生忠勇克敌，官至车骑将军善终。",
    "deedsEn": "Declared in youth: 'I desire to ride the great wind and cleave ten thousand miles of waves!' Subdued Champa in Vietnam by inventing mechanical lions to panic war elephants.",
    "archetype": "military",
    "fiveElements": {
      "dominant": "水",
      "secondary": "木"
    },
    "tenGodsAffinity": [
      "食神",
      "七杀",
      "偏财"
    ],
    "patternType": "食神制杀",
    "strengthAdviceZh": "以冲破天际的英雄气魄与出奇制胜的假狮破象战术克敌制胜！将浪漫志向与狡黠实战谋略完美统一。",
    "strengthAdviceEn": "Inspiring grand ambition unified with brilliant tactical cunning! Overcame terrifying elephant phalanxes through psychological warfare inventions.",
    "weaknessAdviceZh": "性格粗豪刚直，不擅朝堂细微派系博弈，数度因言语直率遭权贵嫉恨险遭贬黜。",
    "weaknessAdviceEn": "Outspoken and blunt in civil court circles, narrowly escaping factional demotions by staying on remote borders.",
    "historicalQuoteZh": "叔父炳问其志，悫曰：‘愿乘长风破万里浪！’炳曰：‘汝不富贵，即破我门户。’《宋书》良将第一。",
    "historicalQuoteEn": "Asked his lifelong ambition: 'I wish to ride the great winds and break ten thousand miles of waves!' Leading general in the Book of Song.",
    "auxiliaryStrengthsZh": [
      "以冲破天际的英雄气魄与出奇制胜的假狮破象战术克敌制胜",
      "将浪漫志向与狡黠实战谋略完美统一"
    ],
    "auxiliaryStrengthsEn": [
      "Inspiring grand ambition unified with brilliant tactical cunning",
      "Overcame terrifying elephant phalanxes through psychological warfare inventions"
    ],
    "auxiliaryWeaknessesZh": [
      "性格粗豪刚直",
      "不擅朝堂细微派系博弈，数度因言语直率遭权贵嫉恨险遭贬黜"
    ],
    "auxiliaryWeaknessesEn": [
      "Outspoken and blunt in civil court circles",
      "narrowly escaping factional demotions by staying on remote borders"
    ]
  },
  {
    "id": "wang_xuanmo",
    "nameZh": "王玄谟",
    "nameEn": "Wang Xuanmo",
    "dynastyZh": "南朝宋",
    "dynastyEn": "Liu Song (Southern Dynasties)",
    "eraTag": "southern_dynasties",
    "eraNameZh": "南朝更迭",
    "eraNameEn": "Southern Dynasties Era",
    "positionZh": "南朝宋领军将军 · 南徐州刺史 · 元嘉草草北伐主力将领",
    "positionEn": "Army Commander of Liu Song · Frontline General of Emperor Wen's Fateful Northern Crusade",
    "personalityZh": "严肃威重、法令整饬、贪财吝赏、战守顽强",
    "personalityEn": "Stern disciplinarian, legally severe, notoriously tight-fisted with war spoils, yet stubborn under siege",
    "deedsZh": "文帝时力主北伐攻碻磝；围滑台百日因苛刻敛财致部卒离心，被北魏太武帝拓跋焘数十万大军反包围大败溃逃；然守陕城数月顽强抗击魏军，屡遭挫折仍能以严法保全军团。",
    "deedsEn": "Chief champion of the northern crusade; besieged Huatai but alienated his soldiers by hoarding booty, suffering catastrophic defeat by Northern Wei's counter-offensive, yet stubbornly defended later fortresses.",
    "archetype": "military",
    "fiveElements": {
      "dominant": "金",
      "secondary": "木"
    },
    "tenGodsAffinity": [
      "七杀",
      "正财",
      "正官"
    ],
    "patternType": "财生杀旺",
    "strengthAdviceZh": "严厉法纪与坚韧不拔的据点防御战力！在兵败如山倒的危机中总能维持基本框架不灭。",
    "strengthAdviceEn": "Stubborn fortress grit and iron disciplinary endurance! Held fortified nodes even after massive macro collapses.",
    "weaknessAdviceZh": "贪恋财帛、赏赐吝啬！在攻坚关键时刻搜刮民财失去基层士气拥戴，导致大好进攻战功败垂成。",
    "weaknessAdviceEn": "Disastrous stinginess and greed; extorted captured populations rather than distributing spoils, destroying army morale at the gates.",
    "historicalQuoteZh": "辛弃疾词云：‘元嘉草草，封狼居胥，赢得仓皇北顾。’玄谟攻滑台积绢万匹不赏，军民怨声载道。",
    "historicalQuoteEn": "Poet Xin Qiji immortalized his folly: 'Yuanjia marched in haste, dreaming of Wolf Mountain, only to flee panic-stricken to the south.'",
    "auxiliaryStrengthsZh": [
      "严厉法纪与坚韧不拔的据点防御战力",
      "在兵败如山倒的危机中总能维持基本框架不灭"
    ],
    "auxiliaryStrengthsEn": [
      "Stubborn fortress grit and iron disciplinary endurance",
      "Held fortified nodes even after massive macro collapses"
    ],
    "auxiliaryWeaknessesZh": [
      "贪恋财帛、赏赐吝啬",
      "在攻坚关键时刻搜刮民财失去基层士气拥戴，导致大好进攻战功败垂成"
    ],
    "auxiliaryWeaknessesEn": [
      "Disastrous stinginess and greed",
      "extorted captured populations rather than distributing spoils, destroying army morale at the gates"
    ]
  },
  {
    "id": "wang_rong",
    "nameZh": "王融",
    "nameEn": "Wang Rong",
    "dynastyZh": "南朝齐",
    "dynastyEn": "Southern Qi (Southern Dynasties)",
    "eraTag": "southern_dynasties",
    "eraNameZh": "南朝更迭",
    "eraNameEn": "Southern Dynasties Era",
    "positionZh": "南朝齐中书郎 · ‘竟陵八友’之一 · 永明文坛急先锋",
    "positionEn": "Secretariat Drafter of Southern Qi · One of Eight Friends of Jingling · Fiery Literary Courtier",
    "personalityZh": "自负俊朗、急功近利、风采照人、热衷政变",
    "personalityEn": "Brilliant, vain, wildly ambitious, eager for instant political glory, caught in fatal court conspiracies",
    "deedsZh": "琅琊王氏贵胄，文采斐然；年少得志常抚案叹曰‘三十不作公卿，何足为人！’齐武帝临终时谋立竟陵王萧子良夺权，遭萧鸾反杀入狱赐死，年仅二十七岁。",
    "deedsEn": "Young literary sensation who lamented: 'If I am not prime minister by thirty, life is worthless!' Orchestrated a failed succession coup upon Emperor Wu's death, executed at merely 27.",
    "archetype": "specialist",
    "fiveElements": {
      "dominant": "火",
      "secondary": "金"
    },
    "tenGodsAffinity": [
      "伤官",
      "偏财",
      "七杀"
    ],
    "patternType": "伤官破格",
    "strengthAdviceZh": "惊艳文坛的写作产出速度与敏捷口才！具备极高社交魅力与组织文化沙龙的凝聚力。",
    "strengthAdviceEn": "Stunning creative output velocity and salon charisma! A prodigy capable of dictating master manifestos in minutes.",
    "weaknessAdviceZh": "野心过大而心智极端幼稚！把血腥残酷的政治篡权政变当成写诗作文，缺乏真正军事与情报底盘，断送性命。",
    "weaknessAdviceEn": "Fatal romantic amateurism in bloody coups; treating lethal succession conspiracies like a salon debate led to prompt execution.",
    "historicalQuoteZh": "融每引镜自照曰：‘安陵、龙阳何足道哉！三十不为公辅，非丈夫也！’《南齐书》叹其急功速祸。",
    "historicalQuoteEn": "Admired himself in mirrors, demanding supreme power before thirty; Book of Southern Qi mourns how hubris invited swift death.",
    "auxiliaryStrengthsZh": [
      "惊艳文坛的写作产出速度与敏捷口才",
      "具备极高社交魅力与组织文化沙龙的凝聚力"
    ],
    "auxiliaryStrengthsEn": [
      "Stunning creative output velocity and salon charisma",
      "A prodigy capable of dictating master manifestos in minutes"
    ],
    "auxiliaryWeaknessesZh": [
      "野心过大而心智极端幼稚",
      "把血腥残酷的政治篡权政变当成写诗作文，缺乏真正军事与情报底盘，断送性命"
    ],
    "auxiliaryWeaknessesEn": [
      "Fatal romantic amateurism in bloody coups",
      "treating lethal succession conspiracies like a salon debate led to prompt execution"
    ]
  },
  {
    "id": "cao_jingzong",
    "nameZh": "曹景宗",
    "nameEn": "Cao Jingzong",
    "dynastyZh": "南朝梁",
    "dynastyEn": "Liang (Southern Dynasties)",
    "eraTag": "southern_dynasties",
    "eraNameZh": "南朝更迭",
    "eraNameEn": "Southern Dynasties Era",
    "positionZh": "南朝梁右卫将军 · 竟陵郡公 · 钟离之战前锋猛将",
    "positionEn": "Right Guard General of Liang · Duke of Jingling · Vanguard Hero of Battle of Zhongli",
    "personalityZh": "豪爽暴烈、嗜赌豪饮、善射烈马、战阵争先",
    "personalityEn": "Larger-than-life warrior, heavy gambler, legendary horseman and archer, racing for vanguard glory",
    "deedsZh": "幼即善骑射，能于马背射鸟；钟离大战中率精锐战舰破开北魏浮桥断敌退路，斩敌无数；凯旋建康赋诗‘去来双雀儿，不知命悬掌’震撼梁武帝文武百官。",
    "deedsEn": "Fierce combat veteran who severed Northern Wei's pontoon bridges during the Battle of Zhongli; celebrated victory in imperial poetry competitions by improvising verses that stunned the court.",
    "archetype": "military",
    "fiveElements": {
      "dominant": "火",
      "secondary": "金"
    },
    "tenGodsAffinity": [
      "七杀",
      "偏财",
      "劫财"
    ],
    "patternType": "阳刃驾杀",
    "strengthAdviceZh": "摧坚陷阵无所畏惧的先锋破局利刃！战法大开大合，善于在最混乱的战场上抓住敌军枢纽猛插致命一刀。",
    "strengthAdviceEn": "Fierce assault spearhead! Pierced enemy tactical bottlenecks with overwhelming audacity and frontline naval precision.",
    "weaknessAdviceZh": "好赌纵酒、骄横跋扈，胜利后沉溺声色奢华，缺乏韦叡那种厚德载物的深层制度政治修养。",
    "weaknessAdviceEn": "Addicted to gambling and luxury; reckless vanity and vulgar hubris limited his evolution beyond battlefield shock.",
    "historicalQuoteZh": "景宗赋诗曰：‘去来双雀儿，不知命悬掌！’沈约叹曰：‘休文文不如此！’武帝大悦。",
    "historicalQuoteEn": "His impromptu victory poem astounded literary court masters; Shen Yue admitted his own refined prose lacked Cao's raw vital power.",
    "auxiliaryStrengthsZh": [
      "摧坚陷阵无所畏惧的先锋破局利刃",
      "战法大开大合，善于在最混乱的战场上抓住敌军枢纽猛插致命一刀"
    ],
    "auxiliaryStrengthsEn": [
      "Fierce assault spearhead",
      "Pierced enemy tactical bottlenecks with overwhelming audacity and frontline naval precision"
    ],
    "auxiliaryWeaknessesZh": [
      "好赌纵酒、骄横跋扈",
      "胜利后沉溺声色奢华，缺乏韦叡那种厚德载物的深层制度政治修养"
    ],
    "auxiliaryWeaknessesEn": [
      "Addicted to gambling and luxury",
      "reckless vanity and vulgar hubris limited his evolution beyond battlefield shock"
    ]
  },
  {
    "id": "chen_qingzhi",
    "nameZh": "陈庆之",
    "nameEn": "Chen Qingzhi",
    "dynastyZh": "南朝梁",
    "dynastyEn": "Liang (Southern Dynasties)",
    "eraTag": "southern_dynasties",
    "eraNameZh": "南朝更迭",
    "eraNameEn": "Southern Dynasties Era",
    "positionZh": "南朝梁飚勇将军 · 永兴侯 · ‘名师大将莫自牢，千兵万马避白袍’白袍战神",
    "positionEn": "General of Liang · The Immortal 'White-Robed God of War' who conquered Luoyang with 7,000 men",
    "personalityZh": "不能骑射、弱不禁风、身先士卒、战术奇绝",
    "personalityEn": "Unable to shoot a bow or ride a horse, yet mathematically precise in tactical strikes, beloved by his troops",
    "deedsZh": "书童出身，四十一岁方掌兵马；率七千精锐白袍军护送北魏降王北伐，连下三十二城，四十七战百战百胜攻克洛阳；以极微兵力打穿数十万北方铁骑大阵，创战争史神话。",
    "deedsEn": "Bookish royal attendant who took field command at 41; led 7,000 white-robed riders north, winning 47 consecutive battles, capturing 32 fortresses, and taking Luoyang from 300,000 northern cavalry.",
    "archetype": "military",
    "fiveElements": {
      "dominant": "金",
      "secondary": "水"
    },
    "tenGodsAffinity": [
      "七杀",
      "伤官",
      "食神"
    ],
    "patternType": "伤官带杀",
    "strengthAdviceZh": "以极度微量杠杆达成百倍史诗级战果的特种战术大师！战法飘忽如神，专打敌军软肋，百战百胜。",
    "strengthAdviceEn": "Ultimate asymmetrical warfare prodigy! Leveraged a tiny elite force through psychological shock and tactical speed to shatter vast armies.",
    "weaknessAdviceZh": "战略纵深与后方兵员补给彻底断绝，孤军深入洛阳孤立无援，终遭尔朱荣数十万大军合围溃散。",
    "weaknessAdviceEn": "Zero logistical depth and political isolation; overextended into northern heartlands without allied reinforcement, doomed when seasonal floods hit.",
    "historicalQuoteZh": "洛阳童谣曰：‘名师大将莫自牢，千兵万马避白袍！’《梁书》赞其节制整肃，神奇变化。",
    "historicalQuoteEn": "Luoyang ballad warned: 'No master general can save his ground; thousands of armies must flee the White Gown!'",
    "auxiliaryStrengthsZh": [
      "以极度微量杠杆达成百倍史诗级战果的特种战术大师",
      "战法飘忽如神，专打敌军软肋，百战百胜"
    ],
    "auxiliaryStrengthsEn": [
      "Ultimate asymmetrical warfare prodigy",
      "Leveraged a tiny elite force through psychological shock and tactical speed to shatter vast armies"
    ],
    "auxiliaryWeaknessesZh": [
      "战略纵深与后方兵员补给彻底断绝",
      "孤军深入洛阳孤立无援，终遭尔朱荣数十万大军合围溃散"
    ],
    "auxiliaryWeaknessesEn": [
      "Zero logistical depth and political isolation",
      "overextended into northern heartlands without allied reinforcement, doomed when seasonal floods hit"
    ]
  },
  {
    "id": "zhou_wenyu",
    "nameZh": "周文育",
    "nameEn": "Zhou Wenyu",
    "dynastyZh": "南朝陈",
    "dynastyEn": "Chen (Southern Dynasties)",
    "eraTag": "southern_dynasties",
    "eraNameZh": "南朝更迭",
    "eraNameEn": "Southern Dynasties Era",
    "positionZh": "南朝陈开府仪同三司 · 司空 · 陈霸先麾下第一拓疆名将",
    "positionEn": "Grand Marshal of Chen Dynasty · Chancellor · Foremost Founding General under Chen Baxian",
    "personalityZh": "骁果有勇力、忠纯笃实、战阵争先、重义轻生",
    "personalityEn": "Fierce combat leader, steadfastly loyal, marching at the head of every charge, trusting allies to a fault",
    "deedsZh": "随陈霸先自岭南起兵北伐侯景，水战陆战皆冠绝全军；平定萧勃、欧阳頠割据势力；面对王琳大军血战被俘，不屈反间逃回；后遭降将熊昙朗暗算身亡，陈霸先痛哭。",
    "deedsEn": "Fought alongside Chen Baxian from Lingnan to extinguish Hou Jing; conquered the southern warlords; escaped enemy capture to return to duty, tragically assassinated by a double-crossing traitor.",
    "archetype": "military",
    "fiveElements": {
      "dominant": "金",
      "secondary": "水"
    },
    "tenGodsAffinity": [
      "七杀",
      "比肩",
      "正印"
    ],
    "patternType": "杀刃互济",
    "strengthAdviceZh": "在草莽微末期与统帅生死相依的基石级悍将！执行力顶级，水陆丛林作战战无不克。",
    "strengthAdviceEn": "Foundational battlefield enforcer! Bound his destiny to his leader from jungle outposts to imperial victory through unmatched loyalty.",
    "weaknessAdviceZh": "性情过于笃直轻信降将，在兵荒马乱之际缺乏对反复小人的贴身防备，死于宵小偷袭暗算。",
    "weaknessAdviceEn": "Excessive trust in treacherous surrendered officers; murdered in his tent due to lax personal security.",
    "historicalQuoteZh": "陈武帝闻文育死，哭之恸，追赠太尉。《陈书》评：周文育勇冠一时，忠于陈氏，死非其罪。",
    "historicalQuoteEn": "Emperor Chen Baxian wept bitter tears at his murder; Book of Chen honors him as the empire's bravest founding shield.",
    "auxiliaryStrengthsZh": [
      "在草莽微末期与统帅生死相依的基石级悍将",
      "执行力顶级，水陆丛林作战战无不克"
    ],
    "auxiliaryStrengthsEn": [
      "Foundational battlefield enforcer",
      "Bound his destiny to his leader from jungle outposts to imperial victory through unmatched loyalty"
    ],
    "auxiliaryWeaknessesZh": [
      "性情过于笃直轻信降将",
      "在兵荒马乱之际缺乏对反复小人的贴身防备，死于宵小偷袭暗算"
    ],
    "auxiliaryWeaknessesEn": [
      "Excessive trust in treacherous surrendered officers",
      "murdered in his tent due to lax personal security"
    ]
  },
  {
    "id": "hou_andu",
    "nameZh": "侯安都",
    "nameEn": "Hou Andu",
    "dynastyZh": "南朝陈",
    "dynastyEn": "Chen (Southern Dynasties)",
    "eraTag": "southern_dynasties",
    "eraNameZh": "南朝更迭",
    "eraNameEn": "Southern Dynasties Era",
    "positionZh": "南朝陈司空 · 清泉郡公 · 拥立陈文帝之第一佐命功臣",
    "positionEn": "Grand Minister of Works of Chen · Kingmaker of Emperor Wen of Chen",
    "personalityZh": "威武豪迈、战功盖世、居功自傲、言语僭越",
    "personalityEn": "Heroic conqueror, supreme in field tactics, fatally arrogant, bragging openly of making emperors",
    "deedsZh": "平定侯景之乱立首功，破王琳、退北齐大军，屡解陈朝倾覆之危；陈霸先死后力排众议拥立文帝陈蒨即位；然自恃功高震主，酒后对文帝妄言‘做天子何如做临川王！’终被赐死。",
    "deedsEn": "Shattered northern armies and rebellious fleets to secure the fragile Chen dynasty; installed Emperor Wen on the throne, but his drunken arrogance and taunting of the emperor led to swift execution.",
    "archetype": "military",
    "fiveElements": {
      "dominant": "金",
      "secondary": "火"
    },
    "tenGodsAffinity": [
      "七杀",
      "劫财",
      "伤官"
    ],
    "patternType": "阳刃驾杀",
    "strengthAdviceZh": "在帝国生死存亡危急关头能横刀立马挽狂澜于既倒的超级擎天柱！具备挽救政权的大无畏魄力。",
    "strengthAdviceEn": "Colossal martial pillar who rescued a dying dynasty multiple times! Decisive kingmaker who acted with lightning resolve.",
    "weaknessAdviceZh": "功高震主第一禁忌！不知道‘天子无友’的残酷现实，酒后狂妄调侃君主权力，亲手将自己送上断头台。",
    "weaknessAdviceEn": "Ultimate hubris of kingmaking! Bragging of putting the emperor on the throne violated imperial sanctity, guaranteeing execution.",
    "historicalQuoteZh": "安都尝戏文帝曰：‘何如作临川王时？’文帝由是忌之。《陈书》评：安都才武绝伦，然功高骄肆，取诛自速。",
    "historicalQuoteEn": "Jested drunkenly to the Emperor: 'Is being Son of Heaven as fun as your old prince days?' The emperor smiled, then ordered his death.",
    "auxiliaryStrengthsZh": [
      "在帝国生死存亡危急关头能横刀立马挽狂澜于既倒的超级擎天柱",
      "具备挽救政权的大无畏魄力"
    ],
    "auxiliaryStrengthsEn": [
      "Colossal martial pillar who rescued a dying dynasty multiple times",
      "Decisive kingmaker who acted with lightning resolve"
    ],
    "auxiliaryWeaknessesZh": [
      "功高震主第一禁忌",
      "不知道‘天子无友’的残酷现实，酒后狂妄调侃君主权力，亲手将自己送上断头台"
    ],
    "auxiliaryWeaknessesEn": [
      "Ultimate hubris of kingmaking",
      "Bragging of putting the emperor on the throne violated imperial sanctity, guaranteeing execution"
    ]
  },
  {
    "id": "liu_xie",
    "nameZh": "刘勰",
    "nameEn": "Liu Xie",
    "dynastyZh": "南朝梁",
    "dynastyEn": "Liang (Southern Dynasties)",
    "eraTag": "southern_dynasties",
    "eraNameZh": "南朝更迭",
    "eraNameEn": "Southern Dynasties Era",
    "positionZh": "南朝梁步兵校尉 · 《文心雕龙》作者 · 中国文学批评之巅",
    "positionEn": "Author of The Literary Mind and the Carving of Dragons (Wen Xin Diao Long) · Supreme Master of Literary Criticism",
    "personalityZh": "渊默幽邃、体大思精、甘于孤苦、著述垂世",
    "personalityEn": "Profoundly meditative, monumental in theoretical synthesis, living in monastic austerity, authoring immortal theory",
    "deedsZh": "家贫不娶入定林寺依僧祐三十余年，潜心整理三藏佛经；感叹当时文风浮华，撰写五卷五十篇巨著《文心雕龙》，构建中国文学理论史最高丰碑；晚年出家法名慧地。",
    "deedsEn": "Lived in monastic seclusion for thirty years sorting Buddhist canons; deploring superficial court literature, composed the monumental 50-chapter Wen Xin Diao Long, defining the soul of Chinese literary thought.",
    "archetype": "specialist",
    "fiveElements": {
      "dominant": "木",
      "secondary": "水"
    },
    "tenGodsAffinity": [
      "偏印",
      "食神",
      "正官"
    ],
    "patternType": "木火通明",
    "strengthAdviceZh": "一人穷数十年之功建构一套文明理论体系的旷世定力！辞约而旨丰，事单而理广，体大思精万代仰止。",
    "strengthAdviceEn": "Unrivaled intellectual architecture! Dedicated decades of monastic solitude to construct the definitive theoretical bible of literature.",
    "weaknessAdviceZh": "终生不求显达仕途，深居寺院甘受冷落，在生前现实世俗权力与财富层面极为微薄。",
    "weaknessAdviceEn": "Total disinterest in material wealth or bureaucratic promotion; lived and died in humble monastic obscurity.",
    "historicalQuoteZh": "沈约读其书，大加赏服，常置之几案。清代章学诚赞曰：‘《文心》体大思精，文章之统宗也。’",
    "historicalQuoteEn": "Scholar-statesman Shen Yue kept the book perpetually on his desk; Qing historians hailed it as the sovereign fountainhead of criticism.",
    "auxiliaryStrengthsZh": [
      "人穷数十年之功建构一套文明理论体系的旷世定力",
      "辞约而旨丰，事单而理广，体大思精万代仰止"
    ],
    "auxiliaryStrengthsEn": [
      "Unrivaled intellectual architecture",
      "Dedicated decades of monastic solitude to construct the definitive theoretical bible of literature"
    ],
    "auxiliaryWeaknessesZh": [
      "终生不求显达仕途",
      "深居寺院甘受冷落，在生前现实世俗权力与财富层面极为微薄"
    ],
    "auxiliaryWeaknessesEn": [
      "Total disinterest in material wealth or bureaucratic promotion",
      "lived and died in humble monastic obscurity"
    ]
  },
  {
    "id": "xiao_zixian",
    "nameZh": "萧子显",
    "nameEn": "Xiao Zixian",
    "dynastyZh": "南朝梁",
    "dynastyEn": "Liang (Southern Dynasties)",
    "eraTag": "southern_dynasties",
    "eraNameZh": "南朝更迭",
    "eraNameEn": "Southern Dynasties Era",
    "positionZh": "南朝梁吏部尚书 · 《南齐书》作者 · 齐高帝之孙",
    "positionEn": "Minister of Personnel of Liang · Author of Book of Southern Qi · Imperial Grandson of Qi Founder",
    "personalityZh": "风仪秀美、自矜风采、雅好文史、容止清雅",
    "personalityEn": "Aristocratic charm, deeply proud of his clan heritage, elegant stylist, rigorous compiler of dynastic history",
    "deedsZh": "南齐宗室，齐亡后入梁深受梁武帝器重；撰成二十四史之一《南齐书》，不仅记述自家王朝盛衰，更在文学批评上提倡创新；每入朝堂缓步徐行，自顾其影怡然自得。",
    "deedsEn": "Grandson of Southern Qi emperor who entered Liang court with high distinction; authored the official Book of Southern Qi, balancing family loyalty with historiographical integrity.",
    "archetype": "civil",
    "fiveElements": {
      "dominant": "木",
      "secondary": "金"
    },
    "tenGodsAffinity": [
      "正印",
      "食神",
      "正官"
    ],
    "patternType": "正印格",
    "strengthAdviceZh": "以客观良史之笔为前代家族王朝立传树碑的文化担当！在改朝换代后依然受到新政权极度礼遇。",
    "strengthAdviceEn": "Preserving the historical soul of one's fallen dynasty with dignity and precision, winning high office even from rival conquerors.",
    "weaknessAdviceZh": "自恋情结过深，过于沉醉个人风仪与虚荣自赏，在面对重大政治风暴时缺乏底层铁血决断力。",
    "weaknessAdviceEn": "Excessive aristocratic vanity and narcissism; enamored with courtly manners while lacking frontline survival steel.",
    "historicalQuoteZh": "《梁书》载：子显清雅有风度，见者皆耸动。武帝曰：‘子显慢我，亦当自取其美。’撰《南齐书》成一家之言。",
    "historicalQuoteEn": "Book of Liang: Xiao Zixian walked with such sublime aristocratic poise that even Emperor Wu smiled with indulgence at his pride.",
    "auxiliaryStrengthsZh": [
      "以客观良史之笔为前代家族王朝立传树碑的文化担当",
      "在改朝换代后依然受到新政权极度礼遇"
    ],
    "auxiliaryStrengthsEn": [
      "Preserving the historical soul of one's fallen dynasty with dignity and precision",
      "winning high office even from rival conquerors"
    ],
    "auxiliaryWeaknessesZh": [
      "自恋情结过深",
      "过于沉醉个人风仪与虚荣自赏，在面对重大政治风暴时缺乏底层铁血决断力"
    ],
    "auxiliaryWeaknessesEn": [
      "Excessive aristocratic vanity and narcissism",
      "enamored with courtly manners while lacking frontline survival steel"
    ]
  },
  {
    "id": "zhong_rong",
    "nameZh": "钟嵘",
    "nameEn": "Zhong Rong",
    "dynastyZh": "南朝梁",
    "dynastyEn": "Liang (Southern Dynasties)",
    "eraTag": "southern_dynasties",
    "eraNameZh": "南朝更迭",
    "eraNameEn": "Southern Dynasties Era",
    "positionZh": "南朝梁司徒记室参军 · 《诗品》作者 · 中国诗歌批评法眼",
    "positionEn": "Military Counselor of Liang · Author of The Critique of Poetry (Shi Pin) · Sovereign Critic of Verse",
    "personalityZh": "品藻精审、直言不讳、独具法眼、不媚权贵",
    "personalityEn": "Razor-sharp critical eye, outspoken, incorruptible arbiter of literary merit, refusing to flatter court favorites",
    "deedsZh": "官位不高但傲骨嶙峋；撰写中国第一部诗歌专论《诗品》，品评汉魏至梁诗人一百二十二人，分上中下三品，尊曹植、陶渊明为宗，严批浮华虚靡用事文风，成为万代法眼。",
    "deedsEn": "Humble secretary who authored the supreme Shi Pin, ranking 122 poets into three tiers; elevated Tao Yuanming and Cao Zhi while fearlessly shredding pretentious court fashion.",
    "archetype": "specialist",
    "fiveElements": {
      "dominant": "金",
      "secondary": "水"
    },
    "tenGodsAffinity": [
      "偏印",
      "伤官",
      "正官"
    ],
    "patternType": "金水清贵",
    "strengthAdviceZh": "不向权威权贵低头的独立品评与学术鉴赏力！以无懈可击的标准建立行业坐标系，引领审美潮流。",
    "strengthAdviceEn": "Fearless independent critical judgment! Established an enduring qualitative coordinate system for poetry that defied contemporary imperial taste.",
    "weaknessAdviceZh": "直言不讳得罪大量宫廷权臣与当红文坛大佬，仕途极其逼仄，终生仅沉沦于中下级参军幕僚。",
    "weaknessAdviceEn": "Inflexible candor alienated powerful aristocrats, permanently stunting his civil career in minor secretarial posts.",
    "historicalQuoteZh": "《南史》评：嵘博学有思理，品第群诗，直绳品格，不随流俗，文章法眼也。",
    "historicalQuoteEn": "History of Southern Dynasties: Zhong Rong was deeply learned; judging poets by timeless merit rather than social rank, he was poetry's golden scale.",
    "auxiliaryStrengthsZh": [
      "不向权威权贵低头的独立品评与学术鉴赏力",
      "以无懈可击的标准建立行业坐标系，引领审美潮流"
    ],
    "auxiliaryStrengthsEn": [
      "Fearless independent critical judgment",
      "Established an enduring qualitative coordinate system for poetry that defied contemporary imperial taste"
    ],
    "auxiliaryWeaknessesZh": [
      "直言不讳得罪大量宫廷权臣与当红文坛大佬",
      "仕途极其逼仄，终生仅沉沦于中下级参军幕僚"
    ],
    "auxiliaryWeaknessesEn": [
      "Inflexible candor alienated powerful aristocrats",
      "permanently stunting his civil career in minor secretarial posts"
    ]
  },
  {
    "id": "lu_xiujing",
    "nameZh": "陆修静",
    "nameEn": "Lu Xiujing",
    "dynastyZh": "南朝宋",
    "dynastyEn": "Liu Song (Southern Dynasties)",
    "eraTag": "southern_dynasties",
    "eraNameZh": "南朝更迭",
    "eraNameEn": "Southern Dynasties Era",
    "positionZh": "南朝宋道门宗师 · ‘三洞四辅’道藏奠基人 · 白鹿野仙人",
    "positionEn": "Daoist Master of Liu Song · Creator of 'Three Caverns' Daoist Canon · Grand Systematizer",
    "personalityZh": "清玄幽远、洞察天人、整饬教纲、开宗明义",
    "personalityEn": "Esoterically enlightened, profound scholar of nature, strict reformer of religious liturgy, master cataloger",
    "deedsZh": "吴中大族出身，弃绝家财入庐山修道；总括上清、灵宝、三皇诸道派，开创‘三洞四辅’道经分类体系，编撰中国首部道教经目《三洞经书目录》；制定斋醮科仪规整道门风气。",
    "deedsEn": "Southern patrician who abandoned vast lands to become a hermit; unified diverse Daoist traditions under the definitive 'Three Caverns' schema, drafting the first Daoist encyclopedia and liturgy.",
    "archetype": "specialist",
    "fiveElements": {
      "dominant": "木",
      "secondary": "水"
    },
    "tenGodsAffinity": [
      "正印",
      "偏印",
      "比肩"
    ],
    "patternType": "正印统宗",
    "strengthAdviceZh": "对庞大繁杂信息进行分类、重组与顶层标准建构的百科全书式宗师智慧！建立千古传世大典体系。",
    "strengthAdviceEn": "Architectural classification of massive civilizational knowledge! Synthesized disparate esoteric traditions into a standardized national canon.",
    "weaknessAdviceZh": "潜心方外秘境，对世俗民生制度的直接改造有限，影响力主要集中在宗教与精神信仰领域。",
    "weaknessAdviceEn": "Focused strictly within the esoteric spiritual sphere, detached from practical civic and economic reform.",
    "historicalQuoteZh": "宋明帝召其入京，筑崇虚馆以居之。《宋书》：修静道行纯备，总括玄旨，道门大宗师也。",
    "historicalQuoteEn": "Emperor Ming built him the Palace of Lofty Emptiness; Book of Song crowns him as the ultimate grandmaster of Daoist civilization.",
    "auxiliaryStrengthsZh": [
      "对庞大繁杂信息进行分类、重组与顶层标准建构的百科全书式宗师智慧",
      "建立千古传世大典体系"
    ],
    "auxiliaryStrengthsEn": [
      "Architectural classification of massive civilizational knowledge",
      "Synthesized disparate esoteric traditions into a standardized national canon"
    ],
    "auxiliaryWeaknessesZh": [
      "潜心方外秘境",
      "对世俗民生制度的直接改造有限，影响力主要集中在宗教与精神信仰领域"
    ],
    "auxiliaryWeaknessesEn": [
      "Focused strictly within the esoteric spiritual sphere",
      "detached from practical civic and economic reform"
    ]
  },
  {
    "id": "ge_rong",
    "nameZh": "葛荣",
    "nameEn": "Ge Rong",
    "dynastyZh": "北魏",
    "dynastyEn": "Northern Wei / Rebel Hegemon",
    "eraTag": "northern_wei",
    "eraNameZh": "北魏中兴",
    "eraNameEn": "Northern Wei Dynastic Era",
    "positionZh": "北魏六镇起义齐王 · 天子 · 聚众三十万席卷河北",
    "positionEn": "Rebel Emperor of Northern Wei Six Garrisons Revolt · Commander of 300,000 Troops",
    "personalityZh": "慓悍善聚众、轻狂自负、军纪涣散、缺乏大战略",
    "personalityEn": "Fierce rebel organizer, hubristic, commanding vast but unruly hosts, blind to elite cavalry shock",
    "deedsZh": "兼并杜洛周等六镇义军，自称天子，拥有数十万铁骑横扫河北，斩杀北魏名臣章武王元融、淮安王元育；然在邺城盲目轻敌，遭尔朱荣七千精骑奇袭生擒处斩于洛阳。",
    "deedsEn": "Unified the Northern Frontier garrison rebellions, commanding hundreds of thousands and slaughtering imperial princes; yet grew contemptuous of tactics and was captured by Erzhu Rong's 7,000 elite riders at Ye.",
    "archetype": "military",
    "fiveElements": {
      "dominant": "火",
      "secondary": "金"
    },
    "tenGodsAffinity": [
      "劫财",
      "七杀",
      "伤官"
    ],
    "patternType": "劫财格",
    "strengthAdviceZh": "在阶级矛盾白热化时期引爆底层起义、短时间内聚拢数十万大军的爆发性动员力！",
    "strengthAdviceEn": "Explosive mass mobilization of disenfranchised frontier legions! Shattered entrenched imperial armies through sheer numerical momentum.",
    "weaknessAdviceZh": "乌合之众的虚胖幻觉！数量巨大却缺乏专业阵法训练与防骑兵冲击防火墙，被7000精骑一击穿透直捣中枢擒杀。",
    "weaknessAdviceEn": "Fatal delusion of mere size; massive, undisciplined mobs were easily sliced through by concentrated elite shock cavalry.",
    "historicalQuoteZh": "荣见尔朱荣兵少，狂笑曰：‘此易与耳，吾诸军持绳索反缚之足矣！’《魏书》：葛荣狂狡，自速屠戮。",
    "historicalQuoteEn": "Seeing Erzhu Rong's small force, Ge Rong laughed: 'Bring ropes to tie them up like cattle!' He was captured minutes later.",
    "auxiliaryStrengthsZh": [
      "在阶级矛盾白热化时期引爆底层起义、短时间内聚拢数十万大军的爆发性动员力！",
      "善于发挥自身核心优势穿透迷局"
    ],
    "auxiliaryStrengthsEn": [
      "Explosive mass mobilization of disenfranchised frontier legions",
      "Shattered entrenched imperial armies through sheer numerical momentum"
    ],
    "auxiliaryWeaknessesZh": [
      "乌合之众的虚胖幻觉",
      "数量巨大却缺乏专业阵法训练与防骑兵冲击防火墙，被7000精骑一击穿透直捣中枢擒杀"
    ],
    "auxiliaryWeaknessesEn": [
      "Fatal delusion of mere size",
      "massive, undisciplined mobs were easily sliced through by concentrated elite shock cavalry"
    ]
  },
  {
    "id": "du_luozhou",
    "nameZh": "杜洛周",
    "nameEn": "Du Luozhou",
    "dynastyZh": "北魏",
    "dynastyEn": "Northern Wei / Rebel Leader",
    "eraTag": "northern_wei",
    "eraNameZh": "北魏中兴",
    "eraNameEn": "Northern Wei Dynastic Era",
    "positionZh": "北魏六镇起义首领 · 揭竿上谷震动平城",
    "positionEn": "Frontier Garrison Rebel Leader of Northern Wei · Initiator of the Shanggu Uprising",
    "personalityZh": "骁悍狂躁、率先起义、手段暴烈、为他人作嫁衣裳",
    "personalityEn": "Fierce pioneer of frontier revolt, turbulent and brutal, ultimately consumed by rival conspirators",
    "deedsZh": "怀朔镇兵，于上谷率六镇流民起兵，连破北魏名将李宪，攻陷幽州截断北魏中枢与北疆联系；声势浩大，后被投奔而来的狡黠同僚葛荣设计诱杀并吞其部众。",
    "deedsEn": "Frontier guardsman who launched the Shanggu rebellion, severing northern imperial supply lines; grew immensely powerful until assassinated and absorbed by his cunning lieutenant Ge Rong.",
    "archetype": "military",
    "fiveElements": {
      "dominant": "金",
      "secondary": "火"
    },
    "tenGodsAffinity": [
      "七杀",
      "比肩",
      "劫财"
    ],
    "patternType": "阳刃破军",
    "strengthAdviceZh": "敢为人先在铁板一块的专制帝国率先打响第一枪的惊人反叛勇气与煽动力！",
    "strengthAdviceEn": "Audacious trailblazer courage! Struck the first revolutionary hammer blow that unraveled Northern Wei's century-old imperial apparatus.",
    "weaknessAdviceZh": "政治防谍与反间计谋严重欠缺，引狼入室轻信伪降的葛荣，在自己的大营中被对手斩杀吞并全部资产。",
    "weaknessAdviceEn": "Naive internal political defense; welcomed the treacherous Ge Rong into his camp, paying with his head and his army.",
    "historicalQuoteZh": "《魏书》载：洛周狂乱燕蓟，杀掠无道，葛荣因民怨设计诱杀之，并其部曲。",
    "historicalQuoteEn": "Book of Wei: Du Luozhou ravished the northern marches with fire and sword until Ge Rong trapped and murdered him.",
    "auxiliaryStrengthsZh": [
      "敢为人先在铁板一块的专制帝国率先打响第一枪的惊人反叛勇气与煽动力！",
      "善于发挥自身核心优势穿透迷局"
    ],
    "auxiliaryStrengthsEn": [
      "Audacious trailblazer courage",
      "Struck the first revolutionary hammer blow that unraveled Northern Wei's century-old imperial apparatus"
    ],
    "auxiliaryWeaknessesZh": [
      "政治防谍与反间计谋严重欠缺",
      "引狼入室轻信伪降的葛荣，在自己的大营中被对手斩杀吞并全部资产"
    ],
    "auxiliaryWeaknessesEn": [
      "Naive internal political defense",
      "welcomed the treacherous Ge Rong into his camp, paying with his head and his army"
    ]
  },
  {
    "id": "yuan_cheng",
    "nameZh": "元澄",
    "nameEn": "Yuan Cheng (Prince Wenxuan of Rencheng)",
    "dynastyZh": "北魏",
    "dynastyEn": "Northern Wei",
    "eraTag": "northern_wei",
    "eraNameZh": "北魏中兴",
    "eraNameEn": "Northern Wei Dynastic Era",
    "positionZh": "北魏尚书令 · 任城文宣王 · 孝文帝汉化改革第一宗室辅弼",
    "positionEn": "Prefect of Masters of Writing of Northern Wei · Prince Wenxuan of Rencheng · Chief Royal Champion of Sinicization",
    "personalityZh": "深明大义、博通经典、刚正严厉、宗室领袖",
    "personalityEn": "Statesman of supreme integrity, learned in Confucian canons, iron pillar of royal reform",
    "deedsZh": "孝文帝元宏推行迁都洛阳与全面汉化改革的最核心宗室盟友；力挫鲜卑保守派反对浪潮；兼具军武大略平定南齐进犯；出入将相三十载，公忠体国天下楷模。",
    "deedsEn": "Foremost royal champion of Emperor Xiaowen's revolutionary capital relocation to Luoyang and cultural reforms; crushed conservative Xianbei opposition and defeated southern invasions with honor.",
    "archetype": "executive",
    "fiveElements": {
      "dominant": "土",
      "secondary": "水"
    },
    "tenGodsAffinity": [
      "正官",
      "正印",
      "正财"
    ],
    "patternType": "官印双全",
    "strengthAdviceZh": "在激进制度变革中力挽狂澜为改革派保驾护航的宗室顶梁柱！以绝对公心与高洁威望压制内部保守势力。",
    "strengthAdviceEn": "Unshakeable royal stabilizer of radical progressive reform! Shielded modernizing policy from reactionary palace backlashes through sheer personal gravitas.",
    "weaknessAdviceZh": "孝文帝死后面对宣武帝、孝明帝朝政日益腐朽，虽极力规谏整肃，已难阻挡北魏国势走下坡路。",
    "weaknessAdviceEn": "Unable to arrest the post-Xiaowen dynastic decay; even his monumental virtue could not prevent the brewing frontier explosion.",
    "historicalQuoteZh": "孝文帝叹曰：‘任城，朕之鲁卫也！社稷安危，在此一人。’《魏书》：澄清身立操，名冠宗英。",
    "historicalQuoteEn": "Emperor Xiaowen declared: 'Prince Rencheng is my ultimate shield; the empire's survival rests upon his shoulders alone.'",
    "auxiliaryStrengthsZh": [
      "在激进制度变革中力挽狂澜为改革派保驾护航的宗室顶梁柱",
      "以绝对公心与高洁威望压制内部保守势力"
    ],
    "auxiliaryStrengthsEn": [
      "Unshakeable royal stabilizer of radical progressive reform",
      "Shielded modernizing policy from reactionary palace backlashes through sheer personal gravitas"
    ],
    "auxiliaryWeaknessesZh": [
      "孝文帝死后面对宣武帝、孝明帝朝政日益腐朽",
      "虽极力规谏整肃，已难阻挡北魏国势走下坡路"
    ],
    "auxiliaryWeaknessesEn": [
      "Unable to arrest the post-Xiaowen dynastic decay",
      "even his monumental virtue could not prevent the brewing frontier explosion"
    ]
  },
  {
    "id": "li_biao",
    "nameZh": "李彪",
    "nameEn": "Li Biao",
    "dynastyZh": "北魏",
    "dynastyEn": "Northern Wei",
    "eraTag": "northern_wei",
    "eraNameZh": "北魏中兴",
    "eraNameEn": "Northern Wei Dynastic Era",
    "positionZh": "北魏御史中尉 · 散骑常侍 · 孝文帝铁面法官 · ‘执法如霜雪’",
    "positionEn": "Chief Imperial Censor of Northern Wei · Emperor Xiaowen's 'Iron Censor' who made nobles tremble",
    "personalityZh": "刚烈深刻、执法不阿、峭厉孤傲、睚眦必报",
    "personalityEn": "Fierce, unbending inquisitor, unyielding toward corrupt nobles, yet abrasive and petty in personal disputes",
    "deedsZh": "孝文帝最锋利的御史铁剑；不畏勋贵大族，弹劾百官案无大小皆绳之以法，京师为之震悚；出使南齐不辱使命；然因性格刻削与仆射李冲在朝堂激烈反目，遭免官废黜。",
    "deedsEn": "Emperor Xiaowen's terror-inducing chief prosecutor; prosecuted princes and aristocrats with cold impartiality until a venomous public clash with prime minister Li Chong destroyed his career.",
    "archetype": "civil",
    "fiveElements": {
      "dominant": "金",
      "secondary": "木"
    },
    "tenGodsAffinity": [
      "七杀",
      "正官",
      "偏印"
    ],
    "patternType": "七杀专克",
    "strengthAdviceZh": "敢于对顶级权贵利益集团亮剑的铁血反腐利刃！以无懈可击的法条和证据撕开任何法外特权之网。",
    "strengthAdviceEn": "Fearless anti-corruption prosecutor cutting through elite oligarchic impunity! Smashed aristocratic corruption through relentless statutory audit.",
    "weaknessAdviceZh": "性格过刚必折、不懂政治妥协艺术；把反腐变成个人恩怨之争，与内阁宰相生死撕扯导致两败俱伤。",
    "weaknessAdviceEn": "Abrasive lack of emotional intelligence; escalated procedural disputes into toxic personal warfare with ministerial colleagues.",
    "historicalQuoteZh": "《魏书》评：李彪刚毅深刻，抗衡权戚，朝野肃然。然性躁而忿，以此致败，惜哉！",
    "historicalQuoteEn": "Book of Wei: Li Biao was austere and terrifying to corrupt lords; yet unmanageable temper and vindictiveness ruined his own fortune.",
    "auxiliaryStrengthsZh": [
      "敢于对顶级权贵利益集团亮剑的铁血反腐利刃",
      "以无懈可击的法条和证据撕开任何法外特权之网"
    ],
    "auxiliaryStrengthsEn": [
      "Fearless anti-corruption prosecutor cutting through elite oligarchic impunity",
      "Smashed aristocratic corruption through relentless statutory audit"
    ],
    "auxiliaryWeaknessesZh": [
      "性格过刚必折、不懂政治妥协艺术",
      "把反腐变成个人恩怨之争，与内阁宰相生死撕扯导致两败俱伤"
    ],
    "auxiliaryWeaknessesEn": [
      "Abrasive lack of emotional intelligence",
      "escalated procedural disputes into toxic personal warfare with ministerial colleagues"
    ]
  },
  {
    "id": "wang_su",
    "nameZh": "王肃",
    "nameEn": "Wang Su",
    "dynastyZh": "北魏",
    "dynastyEn": "Northern Wei",
    "eraTag": "northern_wei",
    "eraNameZh": "北魏中兴",
    "eraNameEn": "Northern Wei Dynastic Era",
    "positionZh": "北魏镇南将军 · 扬州刺史 · 尚书令 · 琅琊王氏投魏引申汉礼",
    "positionEn": "Prefect of Masters of Writing · Langya Wang Aristocrat who brought Southern Imperial Rites to Northern Wei",
    "personalityZh": "博学多才、哀痛雪仇、雅致温和、礼乐化胡",
    "personalityEn": "Learned in classical rites, driven by family grief, bringing southern aristocratic elegance to transform Northern Wei",
    "deedsZh": "父兄被南齐萧鸾冤杀后单骑投奔北魏；孝文帝大喜如获至宝，尊其为师友尚陈留长公主；为北魏制订全部南朝礼仪、朝服典章；领兵数破南齐大军报仇雪恨，三十八岁英年早卒。",
    "deedsEn": "Fled to Northern Wei after his father was murdered in southern court purges; Emperor Xiaowen embraced him, married him to an imperial princess, and had him codify southern court rituals for the northern realm.",
    "archetype": "civil",
    "fiveElements": {
      "dominant": "木",
      "secondary": "水"
    },
    "tenGodsAffinity": [
      "正印",
      "正官",
      "食神"
    ],
    "patternType": "官印相生",
    "strengthAdviceZh": "将南方士族最极致的文明典礼与治理制度成套‘技术转移’到北方游牧政权的跨时代功臣！",
    "strengthAdviceEn": "Master of civilizational technology transfer! Imported centuries of refined southern court etiquette and administrative law to civilize northern rulers.",
    "weaknessAdviceZh": "沉重的心灵创伤与父仇包袱长期郁结体内，过早耗尽精力心血，年仅三十八岁英年逝去。",
    "weaknessAdviceEn": "Chronic physical consumption from deep familial trauma and overwork; died exhausted at age 38.",
    "historicalQuoteZh": "孝文帝常谓公卿曰：‘王肃入国，如宣尼见老彭，吾所敬重也！’《魏书》：肃文武兼资，典礼备焉。",
    "historicalQuoteEn": "Emperor Xiaowen declared: 'Gaining Wang Su is like Confucius meeting Laozi; he brought the sacred rites of China to our throne.'",
    "auxiliaryStrengthsZh": [
      "将南方士族最极致的文明典礼与治理制度成套‘技术转移’到北方游牧政权的跨时代功臣！",
      "善于发挥自身核心优势穿透迷局"
    ],
    "auxiliaryStrengthsEn": [
      "Master of civilizational technology transfer",
      "Imported centuries of refined southern court etiquette and administrative law to civilize northern rulers"
    ],
    "auxiliaryWeaknessesZh": [
      "沉重的心灵创伤与父仇包袱长期郁结体内",
      "过早耗尽精力心血，年仅三十八岁英年逝去"
    ],
    "auxiliaryWeaknessesEn": [
      "Chronic physical consumption from deep familial trauma and overwork",
      "died exhausted at age 38"
    ]
  },
  {
    "id": "gongsun_biao",
    "nameZh": "公孙表",
    "nameEn": "Gongsun Biao",
    "dynastyZh": "北魏",
    "dynastyEn": "Northern Wei",
    "eraTag": "northern_wei",
    "eraNameZh": "北魏中兴",
    "eraNameEn": "Northern Wei Dynastic Era",
    "positionZh": "北魏尚书 · 广州刺史 · 开国机要参谋",
    "positionEn": "Imperial Master of Writing of Northern Wei · Strategic Military Staff Officer",
    "personalityZh": "谋略深长、机变多诈、战阵筹策、心胸偏狭",
    "personalityEn": "Sharp military strategist, tactical schemer, experienced in frontier combat, jealous of rival fame",
    "deedsZh": "道武帝太武帝两代开国谋臣，随军南征北讨算无遗策；在对刘宋刘裕北伐交战中献策设伏，屡建殊勋；然与大谋士崔浩严重政见不合暗中进谗，反遭太武帝识破赐死。",
    "deedsEn": "Senior staff strategist through early Northern Wei conquests; plotted brilliant ambushes against Liu Yu's expedition, but plotted toxic slanders against genius advisor Cui Hao, leading to his execution.",
    "archetype": "specialist",
    "fiveElements": {
      "dominant": "水",
      "secondary": "土"
    },
    "tenGodsAffinity": [
      "偏印",
      "七杀",
      "伤官"
    ],
    "patternType": "偏印格",
    "strengthAdviceZh": "在军事前线洞察敌军行军补给破绽、精准设伏截杀的硬核战术参谋计算力！",
    "strengthAdviceEn": "Surgical tactical ambush calculation! Exploited adversary march fatigue and supply delays to execute lethal traps.",
    "weaknessAdviceZh": "嫉贤妒能！试图用低级暗箭中伤真正的天下第一等国士（崔浩），反被最高统治者看穿心机身败名裂。",
    "weaknessAdviceEn": "Fatal professional jealousy; weaponizing backstabbing slanders against a superior genius like Cui Hao invited instant royal wrath.",
    "historicalQuoteZh": "《魏书》评：公孙表筹策多奇，然心胸褊隘，谮毁崔浩，自取灭亡，非智者所为。",
    "historicalQuoteEn": "Book of Wei: Gongsun Biao was tactically ingenious but small-minded; scheming against Cui Hao, he brought about his own destruction.",
    "auxiliaryStrengthsZh": [
      "在军事前线洞察敌军行军补给破绽、精准设伏截杀的硬核战术参谋计算力！",
      "善于发挥自身核心优势穿透迷局"
    ],
    "auxiliaryStrengthsEn": [
      "Surgical tactical ambush calculation",
      "Exploited adversary march fatigue and supply delays to execute lethal traps"
    ],
    "auxiliaryWeaknessesZh": [
      "嫉贤妒能",
      "试图用低级暗箭中伤真正的天下第一等国士（崔浩），反被最高统治者看穿心机身败名裂"
    ],
    "auxiliaryWeaknessesEn": [
      "Fatal professional jealousy",
      "weaponizing backstabbing slanders against a superior genius like Cui Hao invited instant royal wrath"
    ]
  },
  {
    "id": "xi_juan",
    "nameZh": "奚眷",
    "nameEn": "Xi Juan",
    "dynastyZh": "北魏",
    "dynastyEn": "Northern Wei",
    "eraTag": "northern_wei",
    "eraNameZh": "北魏中兴",
    "eraNameEn": "Northern Wei Dynastic Era",
    "positionZh": "北魏征北大将军 · 幽州刺史 · 太武帝横扫塞北拓土战将",
    "positionEn": "General of Northern Conquest of Northern Wei · Master Cavalry Vanguard under Emperor Taiwu",
    "personalityZh": "勇冠绝伦、行军如风、治军严整、战功震烁",
    "personalityEn": "Peerless cavalry charger, moving with the speed of wind, stern disciplinarian on frozen steppes",
    "deedsZh": "太武帝拓跋焘最信任的塞北破阵名将；破柔然、灭夏国赫连昌、克北燕，长驱万里如风卷残云；在征伐柔然战役中与崔浩密计奇袭，屡建殊勋名列勋臣上第。",
    "deedsEn": "Chief steppe shock general under Taiwu; crushed the Rouran khaganate, captured Xia fortresses, and extinguished Northern Yan with hurricane velocity alongside Cui Hao's intelligence.",
    "archetype": "military",
    "fiveElements": {
      "dominant": "金",
      "secondary": "水"
    },
    "tenGodsAffinity": [
      "七杀",
      "比肩",
      "正印"
    ],
    "patternType": "杀印相生",
    "strengthAdviceZh": "在大纵深荒漠草原进行极限狂飙突击的超级机动兵团统帅力！行军神速，出其不意攻其不备。",
    "strengthAdviceEn": "Grand steppe operational mobility! Executed lightning cavalry maneuvers across waterless wastelands to shatter enemy bastions.",
    "weaknessAdviceZh": "晚年在北魏复杂的宗室权力洗牌中未能彻底站稳政治队形，在残酷的宫廷政治暗流中受牵连遇害。",
    "weaknessAdviceEn": "Lacked court political camouflage; fell victim to palace purges when the ruthless internal succession battles erupted.",
    "historicalQuoteZh": "《魏书》载：奚眷勇烈雄敢，深入漠北，俘斩万计，世祖嘉其忠勇，倚为爪牙。",
    "historicalQuoteEn": "Book of Wei: Xi Juan was boldly fearless, plunging into deep desert territories to capture tens of thousands; Emperor Taiwu's supreme claw and fang.",
    "auxiliaryStrengthsZh": [
      "在大纵深荒漠草原进行极限狂飙突击的超级机动兵团统帅力",
      "行军神速，出其不意攻其不备"
    ],
    "auxiliaryStrengthsEn": [
      "Grand steppe operational mobility",
      "Executed lightning cavalry maneuvers across waterless wastelands to shatter enemy bastions"
    ],
    "auxiliaryWeaknessesZh": [
      "晚年在北魏复杂的宗室权力洗牌中未能彻底站稳政治队形",
      "在残酷的宫廷政治暗流中受牵连遇害"
    ],
    "auxiliaryWeaknessesEn": [
      "Lacked court political camouflage",
      "fell victim to palace purges when the ruthless internal succession battles erupted"
    ]
  },
  {
    "id": "yuchi_guduo",
    "nameZh": "尉迟古拔",
    "nameEn": "Yuchi Guba",
    "dynastyZh": "北魏",
    "dynastyEn": "Northern Wei",
    "eraTag": "northern_wei",
    "eraNameZh": "北魏中兴",
    "eraNameEn": "Northern Wei Dynastic Era",
    "positionZh": "北魏统领宿卫 · 镇西将军 · 忠勇护驾第一鲜卑名臣",
    "positionEn": "Commander of Imperial Guard of Northern Wei · General of Western Defense · Incorruptible Bodyguard",
    "personalityZh": "忠贞不贰、恪谨守分、勇毅沉雄、不苟言笑",
    "personalityEn": "Unshakable personal loyalty, vigilant protector, stoic, silent, incorruptible under all bribes",
    "deedsZh": "尉迟氏名勋；宿卫宫禁数十载，行军打仗常执兵刃立于帝王辇侧；历仕拓跋珪、拓跋嗣、拓跋焘三朝，面对多次宫廷流血政变坚守禁门，以绝对忠纯保全幼主，世代享荣华。",
    "deedsEn": "Commanded the royal bodyguards across three reigns; stood blade-drawn beside the imperial carriage in battles and coups, shielding the throne with unquestioned devotion.",
    "archetype": "military",
    "fiveElements": {
      "dominant": "金",
      "secondary": "土"
    },
    "tenGodsAffinity": [
      "正官",
      "比肩",
      "正印"
    ],
    "patternType": "官印双清",
    "strengthAdviceZh": "作为‘统帅护城河’最高典范的绝对可靠性！数十载如一日严守安全底线，赢得历代最高领袖生死托付。",
    "strengthAdviceEn": "Supreme standard of the executive security ballast! Absolute reliability over decades earned total imperial reliance during life-and-death crises.",
    "weaknessAdviceZh": "职责仅限于保卫中枢与服从指令，不具备主动提出宏观顶层治国大政方针的政治开创格局。",
    "weaknessAdviceEn": "Confined strictly to military guard duty; lacked independent civil vision or grand statecraft initiatives.",
    "historicalQuoteZh": "《魏书》赞：尉迟古拔恪勤宿卫，历事三帝，纯固如铁，社稷之金汤也。",
    "historicalQuoteEn": "Book of Wei: Yuchi Guba guarded the palaces through three emperors, true as cast iron, a living fortress of the imperial realm.",
    "auxiliaryStrengthsZh": [
      "作为‘统帅护城河’最高典范的绝对可靠性",
      "数十载如一日严守安全底线，赢得历代最高领袖生死托付"
    ],
    "auxiliaryStrengthsEn": [
      "Supreme standard of the executive security ballast",
      "Absolute reliability over decades earned total imperial reliance during life-and-death crises"
    ],
    "auxiliaryWeaknessesZh": [
      "职责仅限于保卫中枢与服从指令",
      "不具备主动提出宏观顶层治国大政方针的政治开创格局"
    ],
    "auxiliaryWeaknessesEn": [
      "Confined strictly to military guard duty",
      "lacked independent civil vision or grand statecraft initiatives"
    ]
  },
  {
    "id": "lu_xuan",
    "nameZh": "卢玄",
    "nameEn": "Lu Xuan",
    "dynastyZh": "北魏",
    "dynastyEn": "Northern Wei",
    "eraTag": "northern_wei",
    "eraNameZh": "北魏中兴",
    "eraNameEn": "Northern Wei Dynastic Era",
    "positionZh": "北魏中书侍郎 · 范阳卢氏领袖 · 引儒入塞名门基石",
    "positionEn": "Imperial Secretary of Northern Wei · Patriarch of Fanyang Lu Clan · Conduit of Confucian Bureaucracy",
    "personalityZh": "端严雅正、儒宗世范、识度宽远、笃学力行",
    "personalityEn": "Dignified, patriarchal moral pillar, encyclopedic scholar, anchoring Northern Wei to Chinese family law",
    "deedsZh": "范阳卢氏第一世家领袖，被太武帝征召入洛；以儒家宗法、礼乐文明改造鲜卑蛮俗，崔浩称其‘汉北之伟才’；在北魏残酷政争中以家族德行保全门风，开创延续五百年的范阳卢氏簪缨盛世。",
    "deedsEn": "Patriarch of the aristocratic Fanyang Lu clan; recruited by Emperor Taiwu to formulate legal codes; preserved his family line through brutal purges to anchor a five-century ministerial dynasty.",
    "archetype": "civil",
    "fiveElements": {
      "dominant": "木",
      "secondary": "土"
    },
    "tenGodsAffinity": [
      "正印",
      "正官",
      "正财"
    ],
    "patternType": "正印格",
    "strengthAdviceZh": "打造跨越王朝更迭延续数百年‘百年家族长青企业’的家族治理与文化护城河架构力！",
    "strengthAdviceEn": "Architect of multigenerational cultural immortality! Built clan governance codes that survived regime overthrows across half a millennium.",
    "weaknessAdviceZh": "以家族门第延续为第一优先考量，对现实皇权的倒行逆施采取隐忍自保姿态，缺乏雷霆对抗的公义决绝。",
    "weaknessAdviceEn": "Family preservation trumped broader public reform; accommodated royal excesses to guarantee clan survival.",
    "historicalQuoteZh": "崔浩常称叹曰：‘卢玄才通政术，德重人伦，真经国之器也！’《魏书》冠儒学传首位。",
    "historicalQuoteEn": "Cui Hao praised him: 'Lu Xuan possesses towering statecraft and moral perfection, a true pillar of civilization.'",
    "auxiliaryStrengthsZh": [
      "打造跨越王朝更迭延续数百年‘百年家族长青企业’的家族治理与文化护城河架构力！",
      "善于发挥自身核心优势穿透迷局"
    ],
    "auxiliaryStrengthsEn": [
      "Architect of multigenerational cultural immortality",
      "Built clan governance codes that survived regime overthrows across half a millennium"
    ],
    "auxiliaryWeaknessesZh": [
      "以家族门第延续为第一优先考量",
      "对现实皇权的倒行逆施采取隐忍自保姿态，缺乏雷霆对抗的公义决绝"
    ],
    "auxiliaryWeaknessesEn": [
      "Family preservation trumped broader public reform",
      "accommodated royal excesses to guarantee clan survival"
    ]
  },
  {
    "id": "zheng_xi",
    "nameZh": "郑羲",
    "nameEn": "Zheng Xi",
    "dynastyZh": "北魏",
    "dynastyEn": "Northern Wei",
    "eraTag": "northern_wei",
    "eraNameZh": "北魏中兴",
    "eraNameEn": "Northern Wei Dynastic Era",
    "positionZh": "北魏中书令 · 兖州刺史 · 《郑文公碑》主角 · 魏碑书法极品",
    "positionEn": "Director of Imperial Secretariat · Subject of the Immortal Northern Wei Stele of Lord Zheng",
    "personalityZh": "文学博通、书法奇肆、治民宽简、偶有贪墨",
    "personalityEn": "Cultured scholar, legendary stele calligrapher, relaxed magistrate, tainted by occasional bribery scandals",
    "deedsZh": "荥阳郑氏名门，博通经史，出任中书令主持文书大诰；其子郑道昭为其所刻《郑文公碑》被后世尊为‘魏碑圆笔之极轨’‘楷书之神品’；虽曾遭贪财非议，然治理兖州政绩卓异百姓爱戴。",
    "deedsEn": "Patrician statesman whose monumental memorial stele (Zheng Wengong Bei), carved by his son Zheng Daozhao, represents the undisputed pinnacle of Northern Wei dynamic stone calligraphy.",
    "archetype": "civil",
    "fiveElements": {
      "dominant": "土",
      "secondary": "金"
    },
    "tenGodsAffinity": [
      "偏印",
      "正财",
      "食神"
    ],
    "patternType": "食神生财",
    "strengthAdviceZh": "借血脉后代之顶级艺术创作让自己名字永载人类石刻艺术青史的奇绝文化赋能！",
    "strengthAdviceEn": "Immortalized on sacred cliff inscriptions through generational devotion; his monumental stele defined the majestic soul of Wei calligraphy.",
    "weaknessAdviceZh": "私德有亏、爱财纳贿，在位期间曾因生活奢靡受贿遭到朝廷御史李彪严词弹劾，晚节有损。",
    "weaknessAdviceEn": "Laxity in private financial integrity; censured by court prosecutors for accepting lavish gifts from local gentry.",
    "historicalQuoteZh": "康有为评《郑文公碑》：‘通篇骨法坚劲，如金石铿锵，魏碑之神圣也！’《魏书》：羲善文章，有文誉。",
    "historicalQuoteEn": "Kang Youwei marveled at Zheng's stele: 'Iron bones forged in stone, ringing like bronze bells—the divine peak of Wei calligraphy!'",
    "auxiliaryStrengthsZh": [
      "借血脉后代之顶级艺术创作让自己名字永载人类石刻艺术青史的奇绝文化赋能！",
      "善于发挥自身核心优势穿透迷局"
    ],
    "auxiliaryStrengthsEn": [
      "Immortalized on sacred cliff inscriptions through generational devotion",
      "his monumental stele defined the majestic soul of Wei calligraphy"
    ],
    "auxiliaryWeaknessesZh": [
      "私德有亏、爱财纳贿",
      "在位期间曾因生活奢靡受贿遭到朝廷御史李彪严词弹劾，晚节有损"
    ],
    "auxiliaryWeaknessesEn": [
      "Laxity in private financial integrity",
      "censured by court prosecutors for accepting lavish gifts from local gentry"
    ]
  },
  {
    "id": "jia_si_bo",
    "nameZh": "贾思伯",
    "nameEn": "Jia Sibo",
    "dynastyZh": "北魏",
    "dynastyEn": "Northern Wei",
    "eraTag": "northern_wei",
    "eraNameZh": "北魏中兴",
    "eraNameEn": "Northern Wei Dynastic Era",
    "positionZh": "北魏侍中 · 廷尉 · 宗正卿 · 兄弟侍从经席儒臣",
    "positionEn": "Palace Attendant · Minister of Justice · Renowned Royal Tutor of Confucian Canons",
    "personalityZh": "清俭温雅、笃厚好学、谦退退让、笃于兄弟之爱",
    "personalityEn": "Frugally humble, gentle scholar, legendary in fraternal affection, teaching emperors with devotion",
    "deedsZh": "博学多才，与弟贾思同俱为朝廷宿儒，同讲经于皇宫席侧，天下艳羡；官至廷尉执掌司法，执法仁恕平反无数冤狱；俸禄全部分散给贫寒亲族，死时家中无余财，朝野同悲。",
    "deedsEn": "Twin Confucian scholars alongside brother Jia Sitong, lecturing to emperors; served as Minister of Justice pardoning hundreds of innocent peasants and distributing all state stipends to the destitute.",
    "archetype": "civil",
    "fiveElements": {
      "dominant": "木",
      "secondary": "水"
    },
    "tenGodsAffinity": [
      "正印",
      "正官",
      "比肩"
    ],
    "patternType": "正印格",
    "strengthAdviceZh": "以仁爱平反冤狱、以纯儒学识教导君主的司法良心！散尽万贯家财济贫，构筑无上公信力。",
    "strengthAdviceEn": "Merciful justice that clears wrongful convictions! Donated his entire fortune to the poor, earning unassailable moral stature.",
    "weaknessAdviceZh": "面对六镇起义前夕腐朽黑暗的社会总危机缺乏雷霆霹雳手段，只能在局部个案上施以道德抚慰。",
    "weaknessAdviceEn": "Limited to individual judicial mercy; powerless against the systemic structural rot consuming late Northern Wei.",
    "historicalQuoteZh": "《魏书》赞：贾思伯温恭笃友，器识淹通，掌大理而无滥狱，居重位而家无儋石，清贤之士也。",
    "historicalQuoteEn": "Book of Wei: Jia Sibo was gentle and brotherly; administering supreme justice without wrongful executions, he died in voluntary poverty.",
    "auxiliaryStrengthsZh": [
      "以仁爱平反冤狱、以纯儒学识教导君主的司法良心",
      "散尽万贯家财济贫，构筑无上公信力"
    ],
    "auxiliaryStrengthsEn": [
      "Merciful justice that clears wrongful convictions",
      "Donated his entire fortune to the poor, earning unassailable moral stature"
    ],
    "auxiliaryWeaknessesZh": [
      "面对六镇起义前夕腐朽黑暗的社会总危机缺乏雷霆霹雳手段",
      "只能在局部个案上施以道德抚慰"
    ],
    "auxiliaryWeaknessesEn": [
      "Limited to individual judicial mercy",
      "powerless against the systemic structural rot consuming late Northern Wei"
    ]
  },
  {
    "id": "yuan_xie",
    "nameZh": "元勰",
    "nameEn": "Yuan Xie (Prince Wuxuan of Pengcheng)",
    "dynastyZh": "北魏",
    "dynastyEn": "Northern Wei",
    "eraTag": "northern_wei",
    "eraNameZh": "北魏中兴",
    "eraNameEn": "Northern Wei Dynastic Era",
    "positionZh": "北魏太师 · 彭城武宣王 · 孝文帝最疼爱幼弟 · 忠公无私悲情宗王",
    "positionEn": "Grand Tutor of Northern Wei · Prince Wuxuan of Pengcheng · Tragic Loyal Brother to Emperor Xiaowen",
    "personalityZh": "英姿天挺、文武兼资、忠直无私、不避嫌疑",
    "personalityEn": "Brilliant royal prodigy, fearless in battlefield service, utterly selfless, too noble to anticipate jealous murder",
    "deedsZh": "孝文帝幼弟兼第一心腹，南征北战屡破南齐；孝文帝驾崩于行军途中，元勰秘不发丧从容护送遗体返京，拥立宣武帝登基，功高而退避；然宣武帝猜忌过重，听信谗言将其鸩杀于官邸。",
    "deedsEn": "Beloved brother of Emperor Xiaowen; disguised the emperor's death on campaign to safely guide the army back and crown the heir. Despite immense humility, was poisoned by his paranoid nephew.",
    "archetype": "executive",
    "fiveElements": {
      "dominant": "水",
      "secondary": "木"
    },
    "tenGodsAffinity": [
      "正官",
      "食神",
      "正印"
    ],
    "patternType": "官印相生",
    "strengthAdviceZh": "在最高统帅突然陨落的千钧一发之际秘不发丧、从容稳定军心江山的卓越辅政定力！",
    "strengthAdviceEn": "Master of crisis succession control! Concealed the emperor's battlefield demise to execute a flawless transition without bloodshed.",
    "weaknessAdviceZh": "把纯粹的叔侄亲情幻想带入血腥皇权斗争；明知侄儿宣武帝猜忌日深仍不肯领兵外逃自立，以死明志饮恨鸩酒。",
    "weaknessAdviceEn": "Naive belief in royal family affection; refused to rebel or flee when royal paranoia escalated, meekly drinking poisoned wine.",
    "historicalQuoteZh": "临终饮鸩叹曰：‘吾生何辜，而罹此祸！普天之下，安得忠臣！’《魏书》评其文雅高远，一代名王。",
    "historicalQuoteEn": "Dying lament upon drinking poison: 'What crime have I committed? Across all heaven, where can a loyal servant find sanctuary!'",
    "auxiliaryStrengthsZh": [
      "在最高统帅突然陨落的千钧一发之际秘不发丧、从容稳定军心江山的卓越辅政定力！",
      "善于发挥自身核心优势穿透迷局"
    ],
    "auxiliaryStrengthsEn": [
      "Master of crisis succession control",
      "Concealed the emperor's battlefield demise to execute a flawless transition without bloodshed"
    ],
    "auxiliaryWeaknessesZh": [
      "把纯粹的叔侄亲情幻想带入血腥皇权斗争",
      "明知侄儿宣武帝猜忌日深仍不肯领兵外逃自立，以死明志饮恨鸩酒"
    ],
    "auxiliaryWeaknessesEn": [
      "Naive belief in royal family affection",
      "refused to rebel or flee when royal paranoia escalated, meekly drinking poisoned wine"
    ]
  },
  {
    "id": "diao_yong",
    "nameZh": "刁雍",
    "nameEn": "Diao Yong",
    "dynastyZh": "北魏",
    "dynastyEn": "Northern Wei",
    "eraTag": "northern_wei",
    "eraNameZh": "北魏中兴",
    "eraNameEn": "Northern Wei Dynastic Era",
    "positionZh": "北魏镇西将军 · 薄骨律镇将 · 水利屯田治理黄河功臣",
    "positionEn": "General of Western Defense · Commander of Bogulu · Master Hydraulic Engineer on the Yellow River",
    "personalityZh": "笃实精细、通晓水利、抚民以慈、老当益壮",
    "personalityEn": "Empirical, precise in hydraulic engineering, compassionate magistrate, vigorous in remote frontiers until 80",
    "deedsZh": "投奔北魏后镇守塞北薄骨律（宁夏灵武）；在黄河上开凿艾山渠，引黄灌溉农田四万余顷，建造大型漕船经黄河运粮五十万斛供应平城中枢，使塞外荒漠变为塞上江南；寿登八十善终。",
    "deedsEn": "Governed the Ningxia desert frontiers; carved grand canals along the Yellow River, irrigating 40,000 hectares and constructing naval grain barges that fed the imperial capital across arid frontiers.",
    "archetype": "specialist",
    "fiveElements": {
      "dominant": "水",
      "secondary": "土"
    },
    "tenGodsAffinity": [
      "正财",
      "食神",
      "正官"
    ],
    "patternType": "食神生财",
    "strengthAdviceZh": "在荒芜不毛之地依靠大型水利基建与漕运水网重构地缘经济命脉的超级工程基建大师！",
    "strengthAdviceEn": "Transforming barren wastelands into agricultural empires through master civil engineering and Yellow River grain transport!",
    "weaknessAdviceZh": "毕生专注地方工程与边镇屯田，在中央朝廷核心权力权力博弈场中的发言权相对边缘化。",
    "weaknessAdviceEn": "Confined to frontier public works, lacking direct influence over the high-stakes political decisions in Luoyang.",
    "historicalQuoteZh": "《魏书》评：刁雍通晓地理水脉，凿渠兴灌，漕运通利，北边蒙其惠，民赞神功。",
    "historicalQuoteEn": "Book of Wei: Diao Yong possessed profound insight into waterways, carving canals that turned desert sands into blooming granaries.",
    "auxiliaryStrengthsZh": [
      "在荒芜不毛之地依靠大型水利基建与漕运水网重构地缘经济命脉的超级工程基建大师！",
      "善于发挥自身核心优势穿透迷局"
    ],
    "auxiliaryStrengthsEn": [
      "Transforming barren wastelands into agricultural empires through master civil engineering and Yellow River grain transport!",
      "Leverages core natural talents to pierce strategic bottlenecks."
    ],
    "auxiliaryWeaknessesZh": [
      "毕生专注地方工程与边镇屯田",
      "在中央朝廷核心权力权力博弈场中的发言权相对边缘化"
    ],
    "auxiliaryWeaknessesEn": [
      "Confined to frontier public works",
      "lacking direct influence over the high-stakes political decisions in Luoyang"
    ]
  },
  {
    "id": "cui_guang",
    "nameZh": "崔光",
    "nameEn": "Cui Guang",
    "dynastyZh": "北魏",
    "dynastyEn": "Northern Wei",
    "eraTag": "northern_wei",
    "eraNameZh": "北魏中兴",
    "eraNameEn": "Northern Wei Dynastic Era",
    "positionZh": "北魏太保 · 太师 · 中书监 · 历仕四朝老成谋国文宗",
    "positionEn": "Grand Tutor of Northern Wei · Director of Secretariat · Four-Reign Venerable Historian and Statesman",
    "personalityZh": "谦退谨慎、温雅自持、读书不倦、远祸保身",
    "personalityEn": "Modest, intensely cautious, unceasingly scholarly, master of staying clear of lethal political crossfires",
    "deedsZh": "清河崔氏名宿；博通三教主持国史撰修数十年；虽居太师太保至尊之位，常谦退辞让车骑服章；历经孝文、宣武、孝明及胡太后四朝险恶政争，无一人能谗毁之，以寿考寿终正寝。",
    "deedsEn": "Scholar patriarch who supervised imperial history across four volatile reigns; held supreme ministerial titles yet rode simple carriages and avoided factional purges, dying peacefully at a ripe old age.",
    "archetype": "civil",
    "fiveElements": {
      "dominant": "土",
      "secondary": "水"
    },
    "tenGodsAffinity": [
      "正印",
      "正官",
      "正财"
    ],
    "patternType": "正官配印",
    "strengthAdviceZh": "在腥风血雨的四朝改弦易辙中做到‘零差错、零把柄、零树敌’的顶级生存明哲保身艺术！",
    "strengthAdviceEn": "Flawless operational defense across four bloody regimes! Zero mistakes, zero factional enmity, and total scholarly authority.",
    "weaknessAdviceZh": "面对胡太后荒淫政乱与北魏末年大厦将倾的灾难，为保全自身不敢奋力诤谏，终成‘伴食太师’。",
    "weaknessAdviceEn": "Prioritized personal survival over bold national salvation; kept silent during palace corruption to safeguard his tenure.",
    "historicalQuoteZh": "《魏书》赞：崔光内明智略，外顺风规，历事四朝，不倾不危，纯谨之士，古之良史也。",
    "historicalQuoteEn": "Book of Wei: Cui Guang was brilliant within and accommodating without; surviving four chaotic reigns unscathed, he was a model of prudent wisdom.",
    "auxiliaryStrengthsZh": [
      "在腥风血雨的四朝改弦易辙中做到‘零差错、零把柄、零树敌’的顶级生存明哲保身艺术！",
      "善于发挥自身核心优势穿透迷局"
    ],
    "auxiliaryStrengthsEn": [
      "Flawless operational defense across four bloody regimes",
      "Zero mistakes, zero factional enmity, and total scholarly authority"
    ],
    "auxiliaryWeaknessesZh": [
      "面对胡太后荒淫政乱与北魏末年大厦将倾的灾难",
      "为保全自身不敢奋力诤谏，终成‘伴食太师’"
    ],
    "auxiliaryWeaknessesEn": [
      "Prioritized personal survival over bold national salvation",
      "kept silent during palace corruption to safeguard his tenure"
    ]
  },
  {
    "id": "li_hu",
    "nameZh": "李虎",
    "nameEn": "Li Hu (Grand Ancestor of Tang)",
    "dynastyZh": "西魏",
    "dynastyEn": "Western Wei / Northern Zhou (Guanlong Group)",
    "eraTag": "northern_zhou_qi",
    "eraNameZh": "东西魏 · 周齐对峙",
    "eraNameEn": "Zhou & Qi Contention Era",
    "positionZh": "西魏八柱国之一 · 太尉 · 陇西郡开国公 · 唐高祖李渊之祖 · 唐朝追尊‘太祖景皇帝’",
    "positionEn": "One of the Eight Pillar Generals of Western Wei · Grand Commander · Duke of Longxi · Grandfather of Tang Founder Li Yuan · Posthumous Emperor Jing of Tang",
    "personalityZh": "骁勇善战、威严慎密、敦厚沈雄、深谋远虑、军纪严明",
    "personalityEn": "Militarily formidable, imposing and meticulous, steadfastly dignified, calculating with vast geopolitical vision",
    "deedsZh": "随贺拔岳入关中定鼎陇西；贺拔岳遇害后与赵贵等拥戴宇文泰主持关中大局；位列西魏‘八柱国’（太尉），统领二十四军府兵主力；征战东西魏大小数十战，功勋卓著；奠定陇西李氏腾飞基石，其孙李渊建立大唐帝国，追尊李虎为唐太祖景皇帝。",
    "deedsEn": "Key commander under Heba Yue in securing the Guanzhong basin; allied with Yuwen Tai to establish Western Wei, standing as one of the legendary Eight Pillar Generals (Grand Commander). Commanded the Fubing elite cavalry in dozens of campaigns, laying the dynastic foundation for his grandson Li Yuan to found the glorious Tang Dynasty.",
    "archetype": "military",
    "fiveElements": {
      "dominant": "金",
      "secondary": "土"
    },
    "tenGodsAffinity": [
      "七杀",
      "正印",
      "偏财"
    ],
    "patternType": "杀印相生",
    "strengthAdviceZh": "以铁血军功与宗族声望奠定百年帝国基石的开宗元勋风范！善于在关键历史十字路口站队最能成事的主线领袖（宇文泰），以八柱国之尊构筑不可撼动的关陇豪门底盘。",
    "strengthAdviceEn": "Paramount founding architect whose military and clan legacy seeded the Tang Empire! Aligned with the winning strategic partner (Yuwen Tai) to entrench his house as the supreme military aristocracy of China.",
    "weaknessAdviceZh": "英年早逝未能亲睹关陇集团最终混一南北，生前征战过于劳瘁致使寿命受限。",
    "weaknessAdviceEn": "Died prematurely from prolonged battlefield exhaustion before witnessing the ultimate imperial unification achieved by his progeny.",
    "historicalQuoteZh": "《周书》本传赞：李虎少有大志，倜傥不群，文武兼资，与宇文泰协规大业，入统宿卫，出总元戎，功参八柱，庆流百代。",
    "historicalQuoteEn": "Book of Zhou: Li Hu possessed colossal ambition and towering martial prowess; uniting with Yuwen Tai to forge the Eight Pillars, his glory flowed to birth the golden Tang.",
    "auxiliaryStrengthsZh": [
      "以铁血军功与宗族声望奠定百年帝国基石的开宗元勋风范",
      "善于在关键历史十字路口站队最能成事的主线领袖（宇文泰），以八柱国之尊构筑不可撼动的关陇豪门底盘"
    ],
    "auxiliaryStrengthsEn": [
      "Paramount founding architect whose military and clan legacy seeded the Tang Empire",
      "Aligned with the winning strategic partner (Yuwen Tai) to entrench his house as the supreme military aristocracy of China"
    ],
    "auxiliaryWeaknessesZh": [
      "英年早逝未能亲睹关陇集团最终混一南北",
      "生前征战过于劳瘁致使寿命受限"
    ],
    "auxiliaryWeaknessesEn": [
      "Died prematurely from prolonged battlefield exhaustion before witnessing the ultimate imperial unification achieved by his progeny.",
      "Erects rigid ethical and behavioral safeguards against blindspots."
    ]
  },
  {
    "id": "li_bi",
    "nameZh": "李弼",
    "nameEn": "Li Bi (Duke of Zhao)",
    "dynastyZh": "西魏",
    "dynastyEn": "Western Wei / Northern Zhou (Guanlong Group)",
    "eraTag": "northern_zhou_qi",
    "eraNameZh": "东西魏 · 周齐对峙",
    "eraNameEn": "Zhou & Qi Contention Era",
    "positionZh": "西魏八柱国之一 · 太保 · 赵国公 · 沙苑之战陷阵主帅 · 李密曾祖",
    "positionEn": "One of Eight Pillar Generals · Grand Protector · Duke of Zhao · Vanguard Hero of Battle of Shayuan · Great-Grandfather of Li Mi",
    "personalityZh": "沉毅骁锐、临危立断、善用伏兵、勇冠三军",
    "personalityEn": "Resolute, lethal shock cavalry tactician, master of concealed ambushes, cool-headed under crushing odds",
    "deedsZh": "尔朱荣麾下骁将，后归宇文泰；沙苑大战中面对高欢二十万大军，李弼率六十铁骑自侧翼伏兵横击东魏中军，将高欢二十万大军彻底腰斩斩首八万；宇文泰握其手叹曰‘公真神将！’位列八柱国。",
    "deedsEn": "Legendary general who saved Western Wei at the Battle of Shayuan; led 60 heavy shock riders from a marsh ambush directly into Gao Huan's 200,000-strong army, severing the enemy center and routing the eastern empire.",
    "archetype": "military",
    "fiveElements": {
      "dominant": "金",
      "secondary": "水"
    },
    "tenGodsAffinity": [
      "七杀",
      "伤官",
      "比肩"
    ],
    "patternType": "伤官驾杀",
    "strengthAdviceZh": "以几十骑微型奇兵刺破数十万大军中枢的顶级突击穿透力！善于在绝对绝境中找出对手最脆弱的衔接缝隙一击致命。",
    "strengthAdviceEn": "Lethal surgical shock assault! Decapitated an army of 200,000 with 60 hidden shock riders by exploiting battlefield overconfidence.",
    "weaknessAdviceZh": "战场突击极其暴烈凶险，每每亲身陷阵与死神擦肩而过，在战后家族内部继承与政略平衡上略逊于于谨。",
    "weaknessAdviceEn": "Repeatedly gambled personal survival on razor-edge battlefield charges; slightly less adept at quiet bureaucratic survival than Yu Jin.",
    "historicalQuoteZh": "沙苑战胜，宇文泰握弼手曰：‘公真吾之韩信也！’《周书》八柱国名将，首推李弼之勇烈。",
    "historicalQuoteEn": "Yuwen Tai grasped his hands in tears after Shayuan: 'You are my Han Xin!' Book of Zhou crowns his battlefield valor supreme among the Eight Pillars.",
    "auxiliaryStrengthsZh": [
      "以几十骑微型奇兵刺破数十万大军中枢的顶级突击穿透力",
      "善于在绝对绝境中找出对手最脆弱的衔接缝隙一击致命"
    ],
    "auxiliaryStrengthsEn": [
      "Lethal surgical shock assault",
      "Decapitated an army of 200,000 with 60 hidden shock riders by exploiting battlefield overconfidence"
    ],
    "auxiliaryWeaknessesZh": [
      "战场突击极其暴烈凶险",
      "每每亲身陷阵与死神擦肩而过，在战后家族内部继承与政略平衡上略逊于于谨"
    ],
    "auxiliaryWeaknessesEn": [
      "Repeatedly gambled personal survival on razor-edge battlefield charges",
      "slightly less adept at quiet bureaucratic survival than Yu Jin"
    ]
  },
  {
    "id": "zhao_gui",
    "nameZh": "赵贵",
    "nameEn": "Zhao Gui (Duke of Chu)",
    "dynastyZh": "西魏",
    "dynastyEn": "Western Wei / Northern Zhou (Guanlong Group)",
    "eraTag": "northern_zhou_qi",
    "eraNameZh": "东西魏 · 周齐对峙",
    "eraNameEn": "Zhou & Qi Contention Era",
    "positionZh": "西魏八柱国之一 · 太保 · 大宗伯 · 楚国公 · 拥立宇文泰之首功元勋",
    "positionEn": "One of Eight Pillar Generals · Grand Protector · Duke of Chu · Key Kingmaker of Yuwen Tai",
    "personalityZh": "深沉重义、功高性傲、不屈权势、谋略稍逊",
    "personalityEn": "Deeply honorable, proud of founding merits, unyielding before tyrannical upstarts, outmaneuvered in palace intrigue",
    "deedsZh": "贺拔岳遇刺后，群将无主，赵贵力排众议星夜自平凉奔迎宇文泰统领三军，奠定西魏关陇霸业；战黑水破沙苑战功赫赫，位列八柱国；宇文泰死后不忿年轻之宇文护专权，谋诛宇文护因事泄被诛。",
    "deedsEn": "Rallied demoralized officers after Heba Yue's murder to crown Yuwen Tai supreme viceroy; fought in every foundational campaign as an Eight Pillar General; later plotted to assassinate tyrant Yuwen Hu, but was betrayed and executed.",
    "archetype": "military",
    "fiveElements": {
      "dominant": "金",
      "secondary": "火"
    },
    "tenGodsAffinity": [
      "七杀",
      "劫财",
      "正官"
    ],
    "patternType": "阳刃驾杀",
    "strengthAdviceZh": "在三军无主崩溃边缘力挽狂澜拥立真正领袖的开国首功决断力！眼光毒辣，敢作敢当。",
    "strengthAdviceEn": "Supreme kingmaking resolve in total vacuum! Rode through enemy lines to hand command to Yuwen Tai, forging an empire.",
    "weaknessAdviceZh": "密谋夺权时缺乏绝对保密防火墙与闪电执行力，过于相信同谋独孤信等人，导致机密外泄反遭宇文护反杀诛灭。",
    "weaknessAdviceEn": "Fatal hesitation and leak in counter-coup execution; trusting hesitant co-conspirators allowed tyrant Yuwen Hu to strike first.",
    "historicalQuoteZh": "《周书》评：赵贵首建大谋，迎奉黑獭（宇文泰），定策关中，八柱之任，功勋盖世，然死于权臣之手，悲夫！",
    "historicalQuoteEn": "Book of Zhou: Zhao Gui initiated the grand coalition that made Yuwen Tai master of the West; his tragic execution by usurper Yuwen Hu remains deeply mourned.",
    "auxiliaryStrengthsZh": [
      "在三军无主崩溃边缘力挽狂澜拥立真正领袖的开国首功决断力",
      "眼光毒辣，敢作敢当"
    ],
    "auxiliaryStrengthsEn": [
      "Supreme kingmaking resolve in total vacuum",
      "Rode through enemy lines to hand command to Yuwen Tai, forging an empire"
    ],
    "auxiliaryWeaknessesZh": [
      "密谋夺权时缺乏绝对保密防火墙与闪电执行力",
      "过于相信同谋独孤信等人，导致机密外泄反遭宇文护反杀诛灭"
    ],
    "auxiliaryWeaknessesEn": [
      "Fatal hesitation and leak in counter-coup execution",
      "trusting hesitant co-conspirators allowed tyrant Yuwen Hu to strike first"
    ]
  },
  {
    "id": "yu_jin",
    "nameZh": "于谨",
    "nameEn": "Yu Jin (Duke of Yan)",
    "dynastyZh": "西魏",
    "dynastyEn": "Western Wei / Northern Zhou (Guanlong Group)",
    "eraTag": "northern_zhou_qi",
    "eraNameZh": "东西魏 · 周齐对峙",
    "eraNameEn": "Zhou & Qi Contention Era",
    "positionZh": "西魏八柱国之一 · 太师 · 燕国公 · 平江陵灭南梁主帅 · 关陇第一元老谋帅",
    "positionEn": "One of Eight Pillar Generals · Grand Tutor · Duke of Yan · Conqueror of Southern Liang at Jiangling · Chief Strategic Elder of Guanlong",
    "personalityZh": "沉谋绝伦、智冠群伦、博览权变、老谋深算",
    "personalityEn": "Master of grand strategy, peerless in operational deception, universally deferred to by emperors and generals alike",
    "deedsZh": "西魏第一智囊；沙苑战前献‘乱草诱敌伏兵计’促成大捷；统大军南伐攻破梁都江陵，生擒梁元帝俘数万士民入关；宇文泰死后他威望第一，力挺宇文护摄政平息争端；位尊太师，四海仰望善终。",
    "deedsEn": "Paramount strategic brain of Western Wei. Designed the ambushes at Shayuan; commanded the southern invasion taking Jiangling and extinguishing Liang. Single-handedly stabilized succession after Yuwen Tai's death.",
    "archetype": "executive",
    "fiveElements": {
      "dominant": "土",
      "secondary": "水"
    },
    "tenGodsAffinity": [
      "正印",
      "偏官",
      "正财"
    ],
    "patternType": "杀印相生",
    "strengthAdviceZh": "出则为方面统帅灭一国（灭梁），入则为庙堂三公定国策的‘文武双绝第一谋相’！深谙进退自保之道。",
    "strengthAdviceEn": "Sovereign dual mastery of continental warfare and imperial statecraft! Conquered rival empires abroad while anchoring domestic succession in peace.",
    "weaknessAdviceZh": "在江陵破城后未能阻止西魏军团对南梁文教图书典籍的焚毁与贵族军民的野蛮瓜分，留下历史浩劫。",
    "weaknessAdviceEn": "Failed to prevent the tragic burning of 140,000 ancient imperial library scrolls during the sack of Jiangling.",
    "historicalQuoteZh": "宇文泰常谓诸将曰：‘于公，吾之蓍龟也！有疑必决。’《周书》：谨深沉有识略，名冠柱国。",
    "historicalQuoteEn": "Yuwen Tai praised him: 'Lord Yu is my living oracle—whenever in doubt, he reveals the path.' Premier pillar of Zhou glory.",
    "auxiliaryStrengthsZh": [
      "出则为方面统帅灭一国（灭梁），入则为庙堂三公定国策的‘文武双绝第一谋相’",
      "深谙进退自保之道"
    ],
    "auxiliaryStrengthsEn": [
      "Sovereign dual mastery of continental warfare and imperial statecraft",
      "Conquered rival empires abroad while anchoring domestic succession in peace"
    ],
    "auxiliaryWeaknessesZh": [
      "在江陵破城后未能阻止西魏军团对南梁文教图书典籍的焚毁与贵族军民的野蛮瓜分",
      "留下历史浩劫"
    ],
    "auxiliaryWeaknessesEn": [
      "Failed to prevent the tragic burning of 140",
      "000 ancient imperial library scrolls during the sack of Jiangling"
    ]
  },
  {
    "id": "houmochen_chong",
    "nameZh": "侯莫陈崇",
    "nameEn": "Houmochen Chong (Duke of Liang)",
    "dynastyZh": "西魏",
    "dynastyEn": "Western Wei / Northern Zhou (Guanlong Group)",
    "eraTag": "northern_zhou_qi",
    "eraNameZh": "东西魏 · 周齐对峙",
    "eraNameEn": "Zhou & Qi Contention Era",
    "positionZh": "西魏八柱国之一 · 大司空 · 太保 · 梁国公 · 十三岁临阵单骑斩将骁将",
    "positionEn": "One of Eight Pillar Generals · Grand Minister of Works · Duke of Liang · Prodigy who slew enemy generals at 13",
    "personalityZh": "勇悍绝伦、骁捷善战、朴实忠耿、言多有失",
    "personalityEn": "Fierce cavalry charger, fearless from boyhood, unpolished in court diplomacy, ruined by careless speech",
    "deedsZh": "十五岁随贺拔岳出征，单骑突入敌阵刺死敌帅万俟丑奴，威名震动西北；沙苑、河桥血战屡立奇功，位列八柱国；晚年随周武帝出巡，酒后私言‘晋公（宇文护）今年必死’，遭宇文护逼令自杀。",
    "deedsEn": "Leaped into legend at 15 by single-handedly spearing rebel king Wanqi Chounu from his chariot; fought in every bloody battle of Western Wei. In old age, carelessly muttered prophecies about tyrant Yuwen Hu and was forced to commit suicide.",
    "archetype": "military",
    "fiveElements": {
      "dominant": "金",
      "secondary": "火"
    },
    "tenGodsAffinity": [
      "七杀",
      "比肩",
      "正印"
    ],
    "patternType": "杀刃互济",
    "strengthAdviceZh": "自少年即展现摧锋拔寨、单骑生擒敌酋的天赐武力与冲锋气魄！战阵之上永不言败。",
    "strengthAdviceEn": "Inborn shock assault fearlessness from boyhood! Capable of turning entire battles by assassinating enemy commanders in open field.",
    "weaknessAdviceZh": "祸从口出！身为最高军政八柱国之一，在残暴摄政王（宇文护）眼线下妄议宫廷夺权预言，招致灭顶之灾逼令自裁。",
    "weaknessAdviceEn": "Fatal indiscretion in speech; whispered political prophecies in a surveillance police state, provoking tyrant Yuwen Hu to surround his home.",
    "historicalQuoteZh": "十三岁临阵刺丑奴，天下咸骇。《周书》赞其：沉勇有断，骁捷无双，然言不由衷，死非其咎。",
    "historicalQuoteEn": "Shocked all China by slaying rebel chieftains at 15; Book of Zhou praises his raw valor while mourning his tragic end from careless words.",
    "auxiliaryStrengthsZh": [
      "自少年即展现摧锋拔寨、单骑生擒敌酋的天赐武力与冲锋气魄",
      "战阵之上永不言败"
    ],
    "auxiliaryStrengthsEn": [
      "Inborn shock assault fearlessness from boyhood",
      "Capable of turning entire battles by assassinating enemy commanders in open field"
    ],
    "auxiliaryWeaknessesZh": [
      "祸从口出",
      "身为最高军政八柱国之一，在残暴摄政王（宇文护）眼线下妄议宫廷夺权预言，招致灭顶之灾逼令自裁"
    ],
    "auxiliaryWeaknessesEn": [
      "Fatal indiscretion in speech",
      "whispered political prophecies in a surveillance police state, provoking tyrant Yuwen Hu to surround his home"
    ]
  },
  {
    "id": "yuan_xin",
    "nameZh": "元欣",
    "nameEn": "Yuan Xin (Prince of Guangling)",
    "dynastyZh": "西魏",
    "dynastyEn": "Western Wei (Guanlong Group)",
    "eraTag": "northern_zhou_qi",
    "eraNameZh": "东西魏 · 周齐对峙",
    "eraNameEn": "Zhou & Qi Contention Era",
    "positionZh": "西魏八柱国之一 · 太傅 · 广陵王 · 西魏宗室第一元勋长老",
    "positionEn": "One of Eight Pillar Generals · Grand Preceptor · Prince of Guangling · Senior Royal Elder of Western Wei",
    "personalityZh": "敦厚宽和、不预机要、安分守己、声犬自娱",
    "personalityEn": "Placid, genial, deliberately avoiding cutthroat military decisions, enjoying serene luxury to disarm suspicion",
    "deedsZh": "北魏孝文帝之侄，西魏建立时宗室地位最为尊崇；虽为八柱国之首，然深明宇文泰独揽大权，主动不参与军国机密，每日以声色犬马自娱，宇文泰亦极尽礼敬，使拓跋皇室与关陇军阀保持数十年和谐。",
    "deedsEn": "Highest royal prince among the Eight Pillar Generals; wisely refrained from meddling in Yuwen Tai's military command, living in peaceful aristocratic leisure to guarantee royal harmony and die in honor.",
    "archetype": "civil",
    "fiveElements": {
      "dominant": "土",
      "secondary": "水"
    },
    "tenGodsAffinity": [
      "正印",
      "正财",
      "正官"
    ],
    "patternType": "正印居尊",
    "strengthAdviceZh": "在权臣当道时代以‘主动装糊涂、绝不抓兵权’实现全宗族平安的大智慧！不争即是争，保全一门富贵。",
    "strengthAdviceEn": "Strategic abdication of dangerous operational power! Disarmed suspicious military dictators by deliberately refusing command while retaining supreme social honor.",
    "weaknessAdviceZh": "完全沦为关陇集团的吉祥物与牌坊，对北魏拓跋皇权被宇文氏最终篡夺无可奈何任人宰割。",
    "weaknessAdviceEn": "Pure ceremonial figurehead; helpless to prevent his imperial dynasty from being formally usurped by the Yuwen clan.",
    "historicalQuoteZh": "《周书》评：元欣宗室重器，居八柱之右，谦冲寡营，声犬自乐，宇文敬而全之，此长守富贵之术也。",
    "historicalQuoteEn": "Book of Zhou: Yuan Xin stood atop the Eight Pillars yet cultivated humble harmlessness; Yuwen Tai revered and protected him for life.",
    "auxiliaryStrengthsZh": [
      "在权臣当道时代以‘主动装糊涂、绝不抓兵权’实现全宗族平安的大智慧",
      "不争即是争，保全一门富贵"
    ],
    "auxiliaryStrengthsEn": [
      "Strategic abdication of dangerous operational power",
      "Disarmed suspicious military dictators by deliberately refusing command while retaining supreme social honor"
    ],
    "auxiliaryWeaknessesZh": [
      "完全沦为关陇集团的吉祥物与牌坊",
      "对北魏拓跋皇权被宇文氏最终篡夺无可奈何任人宰割"
    ],
    "auxiliaryWeaknessesEn": [
      "Pure ceremonial figurehead",
      "helpless to prevent his imperial dynasty from being formally usurped by the Yuwen clan"
    ]
  },
  {
    "id": "heba_sheng",
    "nameZh": "贺拔胜",
    "nameEn": "Heba Sheng",
    "dynastyZh": "西魏",
    "dynastyEn": "Western Wei (Guanlong Group)",
    "eraTag": "northern_zhou_qi",
    "eraNameZh": "东西魏 · 周齐对峙",
    "eraNameEn": "Zhou & Qi Contention Era",
    "positionZh": "西魏太保 · 太师 · 荆州刺史 · 贺拔氏三杰兄长 · 槊刺高欢马镫骁将",
    "positionEn": "Grand Tutor of Western Wei · Eldest of Legendary Heba Brothers · Hero who speared Gao Huan's stirrup",
    "personalityZh": "勇冠三军、弓槊绝伦、义薄云天、悲慨沉痛",
    "personalityEn": "Peerless warrior, unmatched with lance and composite bow, heroic in code of honor, dying of grief over murdered sons",
    "deedsZh": "关陇集团奠基核心；邙山大战中率十三精骑直冲高欢中军大帐，长槊刺中高欢坐骑马镫，差半寸即可取高欢性命；高欢痛恨之，将贺拔胜留东魏诸子尽行屠戮，胜痛悼成疾疽发背而亡。",
    "deedsEn": "Eldest brother of the Guanlong founding clan; at the Battle of Mangshan, led 13 riders straight into Gao Huan's personal guard, his lance striking Gao Huan's stirrup inches from his heart. Died of heartbreak after Gao Huan butchered his captive sons.",
    "archetype": "military",
    "fiveElements": {
      "dominant": "金",
      "secondary": "火"
    },
    "tenGodsAffinity": [
      "七杀",
      "伤官",
      "比肩"
    ],
    "patternType": "阳刃驾杀",
    "strengthAdviceZh": "千军万马中单骑斩将、差半寸改写整个中国历史的极致突击力！武艺之精湛冠绝南北朝。",
    "strengthAdviceEn": "Heroic shock assault that came within inches of altering Chinese history forever! Possessed peerless cavalry lance mastery.",
    "weaknessAdviceZh": "子女家人留在敌国沦为人质，缺乏撤离保护机制；承受不住全家被杀的剧烈情感撕裂，郁愤暴毙。",
    "weaknessAdviceEn": "Failed to extract his children from enemy territory; the slaughter of his family broke his invincible spirit into fatal depression.",
    "historicalQuoteZh": "胜刺高欢马，欢惊走叹曰：‘今日几死于贺拔破胡之手！’《周书》：贺拔胜雄烈绝人，悲怀以没。",
    "historicalQuoteEn": "Gao Huan shuddered after his narrow escape: 'Today I was within half an inch of death by Heba Sheng's spear!'",
    "auxiliaryStrengthsZh": [
      "千军万马中单骑斩将、差半寸改写整个中国历史的极致突击力",
      "武艺之精湛冠绝南北朝"
    ],
    "auxiliaryStrengthsEn": [
      "Heroic shock assault that came within inches of altering Chinese history forever",
      "Possessed peerless cavalry lance mastery"
    ],
    "auxiliaryWeaknessesZh": [
      "子女家人留在敌国沦为人质，缺乏撤离保护机制",
      "承受不住全家被杀的剧烈情感撕裂，郁愤暴毙"
    ],
    "auxiliaryWeaknessesEn": [
      "Failed to extract his children from enemy territory",
      "the slaughter of his family broke his invincible spirit into fatal depression"
    ]
  },
  {
    "id": "gao_aocao",
    "nameZh": "高敖曹",
    "nameEn": "Gao Aocao (Gao Ang)",
    "dynastyZh": "东魏",
    "dynastyEn": "Eastern Wei",
    "eraTag": "northern_zhou_qi",
    "eraNameZh": "东西魏 · 周齐对峙",
    "eraNameEn": "Zhou & Qi Contention Era",
    "positionZh": "东魏大都督 · 司徒 · 汉家第一马槊勇将 · 号称‘当世项羽’",
    "positionEn": "Grand Viceroy of Eastern Wei · Prime Minister · Incomparable Horse-Lance Champion · The 'Xiang Yu of His Age'",
    "personalityZh": "勇猛霸烈、视死如归、桀骜不驯、轻视鲜卑",
    "personalityEn": "Terrifying battlefield fury, boundless physical courage, fiercely proud of his Han blood, scorning barbarian officers",
    "deedsZh": "东魏第一猛将，专领汉军冲锋陷阵，高欢对其敬畏异常令鲜卑诸军皆降旗致敬；沙苑大战单骑救主；河桥之战中孤军突进遭西魏三军合围，奋战斩敌数十人，力竭刎颈阵亡。",
    "deedsEn": "The most terrifying horse-lance warrior of the era; so ferocious that supreme dictator Gao Huan ordered Xianbei steppe cavalry to bow before his Han troops. Besieged alone at the Battle of Heqiao, killed dozens before offering his neck.",
    "archetype": "military",
    "fiveElements": {
      "dominant": "金",
      "secondary": "火"
    },
    "tenGodsAffinity": [
      "七杀",
      "劫财",
      "伤官"
    ],
    "patternType": "阳刃格",
    "strengthAdviceZh": "凭借一身不可思议的冷兵器格斗杀伤力迫使最高统治者低头膜拜的硬汉人格！霸气横溢所向披靡。",
    "strengthAdviceEn": "Unadulterated warrior majesty that forced imperial conquerors to defer to his command! Absolute mastery of heavy cavalry shock.",
    "weaknessAdviceZh": "骄狂自负、轻敌冒进！在战场上狂傲脱离主力阵线孤军深入，被友军妒忌拒关不纳，惨遭重兵围杀。",
    "weaknessAdviceEn": "Fatal vanity and arrogant isolation; rode far ahead of his supply lines and was locked out of river fortresses by envious allies to die.",
    "historicalQuoteZh": "临终仰天大呼：‘来！乞汝开国公！’引颈受刃。《北齐书》：敖曹勇冠当时，真霸王之俦也。",
    "historicalQuoteEn": "Surrounded, yelled to enemy spearmen: 'Come take my head and claim your dukedom!' Book of Northern Qi compares him to Xiang Yu.",
    "auxiliaryStrengthsZh": [
      "凭借一身不可思议的冷兵器格斗杀伤力迫使最高统治者低头膜拜的硬汉人格",
      "霸气横溢所向披靡"
    ],
    "auxiliaryStrengthsEn": [
      "Unadulterated warrior majesty that forced imperial conquerors to defer to his command",
      "Absolute mastery of heavy cavalry shock"
    ],
    "auxiliaryWeaknessesZh": [
      "骄狂自负、轻敌冒进",
      "在战场上狂傲脱离主力阵线孤军深入，被友军妒忌拒关不纳，惨遭重兵围杀"
    ],
    "auxiliaryWeaknessesEn": [
      "Fatal vanity and arrogant isolation",
      "rode far ahead of his supply lines and was locked out of river fortresses by envious allies to die"
    ]
  },
  {
    "id": "duan_shao",
    "nameZh": "段韶",
    "nameEn": "Duan Shao (Prince of Pingyuan)",
    "dynastyZh": "北齐",
    "dynastyEn": "Northern Qi",
    "eraTag": "northern_zhou_qi",
    "eraNameZh": "东西魏 · 周齐对峙",
    "eraNameEn": "Zhou & Qi Contention Era",
    "positionZh": "北齐太师 · 平原王 · 孝昭武成之柱石 · 战无不胜一代名帅",
    "positionEn": "Grand Tutor of Northern Qi · Prince of Pingyuan · Unconquerable Field Marshal across Three Reigns",
    "personalityZh": "沉静有大略、治军肃整、爱抚士卒、算无遗策",
    "personalityEn": "Cool-headed strategic intellect, meticulous drillmaster, beloved by troops, never defeated in field operations",
    "deedsZh": "高欢外甥，自幼从军料敌如神；邙山大捷设奇谋大破西魏；周齐争霸中屡败北周数十万名将铁骑，解晋阳之围、破柏谷城；身患重病仍抬棺登城指挥击退周军，病卒军中，天下号为齐国长城。",
    "deedsEn": "Undefeated master marshal of Northern Qi; crushed Western Wei and Northern Zhou armies across decades, rescuing Jinyang and capturing Bai Valley. Carried on a stretcher while dying to direct defenses, mourned as Northern Qi's Great Wall.",
    "archetype": "military",
    "fiveElements": {
      "dominant": "土",
      "secondary": "金"
    },
    "tenGodsAffinity": [
      "正官",
      "正印",
      "七杀"
    ],
    "patternType": "杀印相生",
    "strengthAdviceZh": "将冷静理性战术推演发挥到极致的一生不败之神！善于以严整阵型消解强敌狂暴冲击，反手破敌中枢。",
    "strengthAdviceEn": "Mathematical strategic composure! Defeated the fiercest Guanlong shock armies by absorbing their charge with disciplined infantry phalanxes before striking.",
    "weaknessAdviceZh": "为北齐暴虐昏庸君主（如高洋、高湛）尽忠效力，虽能打胜仗，却无力扭转皇族内部残暴自毁的深层体制弊病。",
    "weaknessAdviceEn": "Tethered his genius to a degenerate ruling dynasty; battlefield victories merely postponed Northern Qi's inevitable internal self-destruction.",
    "historicalQuoteZh": "《北齐书》赞：段韶经纶大略，出将入相，忠勤克己，算无遗策，实北齐柱石之第一人也。",
    "historicalQuoteEn": "Book of Northern Qi: Duan Shao was supreme in strategic vision and civic duty; undefeated in field battle, he was Northern Qi's greatest son.",
    "auxiliaryStrengthsZh": [
      "将冷静理性战术推演发挥到极致的一生不败之神",
      "善于以严整阵型消解强敌狂暴冲击，反手破敌中枢"
    ],
    "auxiliaryStrengthsEn": [
      "Mathematical strategic composure",
      "Defeated the fiercest Guanlong shock armies by absorbing their charge with disciplined infantry phalanxes before striking"
    ],
    "auxiliaryWeaknessesZh": [
      "为北齐暴虐昏庸君主（如高洋、高湛）尽忠效力",
      "虽能打胜仗，却无力扭转皇族内部残暴自毁的深层体制弊病"
    ],
    "auxiliaryWeaknessesEn": [
      "Tethered his genius to a degenerate ruling dynasty",
      "battlefield victories merely postponed Northern Qi's inevitable internal self-destruction"
    ]
  },
  {
    "id": "wang_sizheng",
    "nameZh": "王思政",
    "nameEn": "Wang Sizheng",
    "dynastyZh": "西魏",
    "dynastyEn": "Western Wei",
    "eraTag": "northern_zhou_qi",
    "eraNameZh": "东西魏 · 周齐对峙",
    "eraNameEn": "Zhou & Qi Contention Era",
    "positionZh": "西魏大都督 · 太尉 · 颍川死战忠烈名帅 · 玉壁筑城始祖",
    "positionEn": "Grand Viceroy of Western Wei · Grand Commander · Hero of the Defense of Yingchuan",
    "personalityZh": "刚毅忠勇、智深勇沉、治城坚固、死不背义",
    "personalityEn": "Iron-willed defender, genius in fortification architecture, refusing surrender until drowned in his fortress",
    "deedsZh": "筑玉壁坚城阻击东魏；移镇颍川面对高澄十万大军围攻，坚守长达一年；东魏决洧水灌城，城塌粮尽，思政欲拔刀自刎被部下夺刀，城破被俘；高澄敬其忠义待为上宾，坚贞不屈而终。",
    "deedsEn": "Designed the impregnable fortress of Yubi; held Yingchuan under 100,000 besiegers for an entire year. When floodwaters drowned the walls, attempted suicide rather than yield. Highly honored by his captors.",
    "archetype": "military",
    "fiveElements": {
      "dominant": "土",
      "secondary": "金"
    },
    "tenGodsAffinity": [
      "正官",
      "正印",
      "比肩"
    ],
    "patternType": "官印双全",
    "strengthAdviceZh": "以血肉筑起不可逾越坚固堡垒的终极防守大师！善于化劣势为死地，以难以想象的意志消耗强敌数十万主力。",
    "strengthAdviceEn": "Master of siege defense and architectural fortification! Pinned down massive invasion armies for an entire year through unshakeable fortitude.",
    "weaknessAdviceZh": "孤城死守缺乏外援接应，在敌军利用大自然水攻决堤时缺乏机动转移方案，终陷孤军覆没。",
    "weaknessAdviceEn": "Overly wedded to fixed static positions; vulnerable when opponents weaponized hydro-engineering to drown his fortress.",
    "historicalQuoteZh": "城破，思政仰天号恸，欲自杀，部将抱持之。高澄降阶执手礼敬。《周书》忠烈第一。",
    "historicalQuoteEn": "Book of Zhou: Wang Sizheng wept as the walls flooded, seeking suicide; captor Gao Cheng descended the dais to bow to his peerless integrity.",
    "auxiliaryStrengthsZh": [
      "以血肉筑起不可逾越坚固堡垒的终极防守大师",
      "善于化劣势为死地，以难以想象的意志消耗强敌数十万主力"
    ],
    "auxiliaryStrengthsEn": [
      "Master of siege defense and architectural fortification",
      "Pinned down massive invasion armies for an entire year through unshakeable fortitude"
    ],
    "auxiliaryWeaknessesZh": [
      "孤城死守缺乏外援接应",
      "在敌军利用大自然水攻决堤时缺乏机动转移方案，终陷孤军覆没"
    ],
    "auxiliaryWeaknessesEn": [
      "Overly wedded to fixed static positions",
      "vulnerable when opponents weaponized hydro-engineering to drown his fortress"
    ]
  },
  {
    "id": "shi_wansui",
    "nameZh": "史万岁",
    "nameEn": "Shi Wansui (Duke of Taiping)",
    "dynastyZh": "隋朝",
    "dynastyEn": "Sui Dynasty",
    "eraTag": "sui",
    "eraNameZh": "大隋统合",
    "eraNameEn": "Great Sui Unification Era",
    "positionZh": "隋朝上柱国 · 太平县公 · 威震突厥南宁之旷世战神",
    "positionEn": "Pillar of State of Sui · Legendary Conqueror of Turks and Southern Rebels · Tragic Champion",
    "personalityZh": "勇冠万夫、长于骑射、爱抚部下、不治文辞、耿介招妒",
    "personalityEn": "Invincible in single combat, adored by his soldiers, blunt, illiterate in palace intrigue, a magnet for envious courtiers",
    "deedsZh": "平陈战争转战千里；征南宁深入云贵诸夷数千里诸部落望风归降；北征突厥达头可汗，单骑出阵报姓名‘我史万岁也’，突厥数十万铁骑吓得掉头狂奔；遭杨素陷害，杨坚震怒当朝杖杀之，天下冤痛。",
    "deedsEn": "Sui's supreme battlefield hero; subdued Yunnan and crushed the Turks. At the northern border, rode out alone shouting 'I am Shi Wansui!' causing the entire Turkish horde to retreat in terror. Falsely framed by Yang Su, was beaten to death in court.",
    "archetype": "military",
    "fiveElements": {
      "dominant": "金",
      "secondary": "木"
    },
    "tenGodsAffinity": [
      "七杀",
      "比肩",
      "食神"
    ],
    "patternType": "七杀专旺",
    "strengthAdviceZh": "一人之名威震敌国万骑的无敌战神气魄！临阵身先士卒爱兵如子，能让三军为其效死。",
    "strengthAdviceEn": "Colossal martial aura that dispersed enemy armies by his mere name! Won absolute devotion from troops by sharing every battlefield privation.",
    "weaknessAdviceZh": "不懂政治防波堤与向上管理，被阴险毒辣的同僚（杨素）借皇帝猜忌借刀杀人，当殿屈死冤绝人寰。",
    "weaknessAdviceEn": "Zero defensive political intelligence; outmaneuvered by the cunning prime minister Yang Su, murdered in cold blood on the palace floor.",
    "historicalQuoteZh": "突厥问曰：‘隋将为谁？’答曰：‘史万岁。’突厥咸失色奔遁。《隋书》：万岁善抚士卒，死之日，三军莫不流涕。",
    "historicalQuoteEn": "When steppe riders heard his name, they fled in terror. Book of Sui notes that on the day of his murder, all soldiers wept.",
    "auxiliaryStrengthsZh": [
      "人之名威震敌国万骑的无敌战神气魄",
      "临阵身先士卒爱兵如子，能让三军为其效死"
    ],
    "auxiliaryStrengthsEn": [
      "Colossal martial aura that dispersed enemy armies by his mere name",
      "Won absolute devotion from troops by sharing every battlefield privation"
    ],
    "auxiliaryWeaknessesZh": [
      "不懂政治防波堤与向上管理",
      "被阴险毒辣的同僚（杨素）借皇帝猜忌借刀杀人，当殿屈死冤绝人寰"
    ],
    "auxiliaryWeaknessesEn": [
      "Zero defensive political intelligence",
      "outmaneuvered by the cunning prime minister Yang Su, murdered in cold blood on the palace floor"
    ]
  },
  {
    "id": "li_delin",
    "nameZh": "李德林",
    "nameEn": "Li Delin (Duke of Anping)",
    "dynastyZh": "隋朝",
    "dynastyEn": "Sui Dynasty",
    "eraTag": "sui",
    "eraNameZh": "大隋统合",
    "eraNameEn": "Great Sui Unification Era",
    "positionZh": "隋朝内史令 · 安平公 · 制定《开皇律》 · 大隋开国文治第一谋臣",
    "positionEn": "President of Secretariat of Sui · Drafter of Kaihuang Legal Code · Chief Civil Architect of Sui Dynasty",
    "personalityZh": "博洽经史、才思如流、敢触龙鳞、严谨持正",
    "personalityEn": "Profoundly learned in law and history, swift in composition, principled, daring to challenge imperial cruelty",
    "deedsZh": "历仕北齐北周；杨坚辅政及受禅一切诏敕律令皆出其手；主纂《开皇律》废除前代残忍酷刑，开创文明刑律典范；在处置叛臣时力主慎刑株连，屡救数千无辜人性命；后遭苏威高颎排挤出守地方。",
    "deedsEn": "Civil mastermind who drafted all foundational imperial edicts for Sui's founding; authored the historic Kaihuang Legal Code abolishing cruel mutilation punishments, fearlessly saving thousands from execution.",
    "archetype": "civil",
    "fiveElements": {
      "dominant": "木",
      "secondary": "金"
    },
    "tenGodsAffinity": [
      "正官",
      "正印",
      "偏印"
    ],
    "patternType": "正官配印",
    "strengthAdviceZh": "以大仁慈与极高法典专业度洗刷乱世酷刑的宪章文明巨匠！以法治规范皇权，泽被后世百代。",
    "strengthAdviceEn": "Constitutional reformer who humanized penal law! Abolished barbaric tortures to establish the civilized foundational code for Sui and Tang dynasties.",
    "weaknessAdviceZh": "恃才自傲、言语抗直，在内阁中与高颎、苏威等形成尖锐同行相轻竞争，晚年被联手排挤出中枢。",
    "weaknessAdviceEn": "Academic pride and abrasive self-righteousness alienated cabinet peers, leaving him politically isolated in old age.",
    "historicalQuoteZh": "隋文帝叹曰：‘李德林之文，无双之才也！’《隋书》评：德林辞学渊富，宪章大定，社稷文章之宗。",
    "historicalQuoteEn": "Emperor Wen praised: 'Li Delin's prose and legal mind are without peer!' Book of Sui celebrates him as the father of Sui civil codes.",
    "auxiliaryStrengthsZh": [
      "以大仁慈与极高法典专业度洗刷乱世酷刑的宪章文明巨匠",
      "以法治规范皇权，泽被后世百代"
    ],
    "auxiliaryStrengthsEn": [
      "Constitutional reformer who humanized penal law",
      "Abolished barbaric tortures to establish the civilized foundational code for Sui and Tang dynasties"
    ],
    "auxiliaryWeaknessesZh": [
      "恃才自傲、言语抗直",
      "在内阁中与高颎、苏威等形成尖锐同行相轻竞争，晚年被联手排挤出中枢"
    ],
    "auxiliaryWeaknessesEn": [
      "Academic pride and abrasive self-righteousness alienated cabinet peers",
      "leaving him politically isolated in old age"
    ]
  },
  {
    "id": "niu_hong",
    "nameZh": "牛弘",
    "nameEn": "Niu Hong (Duke of Qizhang)",
    "dynastyZh": "隋朝",
    "dynastyEn": "Sui Dynasty",
    "eraTag": "sui",
    "eraNameZh": "大隋统合",
    "eraNameEn": "Great Sui Unification Era",
    "positionZh": "隋朝吏部尚书 · 奇章公 · 上表‘开皇求书’立藏书楼 · 大儒长者",
    "positionEn": "Minister of Personnel of Sui · Architect of the Great Kaihuang Book Restoration · Legendary Stoic",
    "personalityZh": "笃好典籍、宽仁大度、大智若愚、临事不怒",
    "personalityEn": "Passionately devoted to literature, extraordinarily patient, unflappable temper, revered for transcendent forbearance",
    "deedsZh": "面对南北三百年丧乱文籍荡然无存，上表《请开献书之路》，总结历史上‘五厄’大浩劫，以重赏购募天下藏书搜求遗篇数十万卷；弟酗酒射杀其驾车之牛，牛弘归家面不改色只言‘做脯食之’，宽厚长者名扬天下。",
    "deedsEn": "Saved Chinese classical civilization by petitioning the emperor to restore ancient books, building an empire-wide collection of 370,000 volumes; famous for superhuman forbearance when his drunken brother shot his carriage ox.",
    "archetype": "specialist",
    "fiveElements": {
      "dominant": "土",
      "secondary": "木"
    },
    "tenGodsAffinity": [
      "正印",
      "正官",
      "食神"
    ],
    "patternType": "正印格",
    "strengthAdviceZh": "以一己之智拯救整个华夏典籍文明于灰烬之中的文化救世主！心宽似海，任何外界冒犯皆波澜不惊。",
    "strengthAdviceEn": "Cultural savior who rescued the ancient Chinese library from the ashes of 300 years of war! Superhuman emotional equanimity and patience.",
    "weaknessAdviceZh": "为人过度宽退谦忍，在乱世纷争或残酷宫廷博弈中缺乏雷霆进攻手段，唯以守正防身。",
    "weaknessAdviceEn": "Ultra-passive forbearance; avoided conflict to a fault, leaving frontline political battles entirely to aggressive courtiers.",
    "historicalQuoteZh": "隋文帝叹曰：‘大笃厚人也！’《隋书》评其：牛弘宽裕纯和，以仁恕称，聚书兴学，功格区宇。",
    "historicalQuoteEn": "Emperor Wen marvelled: 'A soul of purest magnanimity!' Book of Sui: His salvation of ancient literature blessed all generations.",
    "auxiliaryStrengthsZh": [
      "以一己之智拯救整个华夏典籍文明于灰烬之中的文化救世主",
      "心宽似海，任何外界冒犯皆波澜不惊"
    ],
    "auxiliaryStrengthsEn": [
      "Cultural savior who rescued the ancient Chinese library from the ashes of 300 years of war",
      "Superhuman emotional equanimity and patience"
    ],
    "auxiliaryWeaknessesZh": [
      "为人过度宽退谦忍",
      "在乱世纷争或残酷宫廷博弈中缺乏雷霆进攻手段，唯以守正防身"
    ],
    "auxiliaryWeaknessesEn": [
      "Ultra-passive forbearance",
      "avoided conflict to a fault, leaving frontline political battles entirely to aggressive courtiers"
    ]
  },
  {
    "id": "su_wei",
    "nameZh": "苏威",
    "nameEn": "Su Wei (Duke of Pi)",
    "dynastyZh": "隋朝",
    "dynastyEn": "Sui Dynasty",
    "eraTag": "sui",
    "eraNameZh": "大隋统合",
    "eraNameEn": "Great Sui Unification Era",
    "positionZh": "隋朝尚书左仆射 · 纳言 · 邳国公 · 苏绰之子 · 开皇律历礼乐共制者",
    "positionEn": "Left Chancellor of Sui Dynasty · Son of Su Chuo · Co-Architect of Kaihuang Administration",
    "personalityZh": "少承家学、守正谨肃、廉洁清白、崇尚节俭",
    "personalityEn": "Heir to master administrative lore, ascetic, incorruptible, partnering with Gao Jiong to forge a golden age",
    "deedsZh": "西魏经济改革家苏绰之子；与高颎同心协力执掌大隋朝政二十余年，减赋抑豪、推行轻徭薄赋与大索貌阅，开创开皇盛世；为官清廉洁身自好，深得隋文帝信赖。",
    "deedsEn": "Son of legal reformer Su Chuo; partnered with Prime Minister Gao Jiong for 20 years to govern the Sui Empire, reducing taxes, curbing oligarchs, and building the peak peace of Kaihuang.",
    "archetype": "civil",
    "fiveElements": {
      "dominant": "土",
      "secondary": "金"
    },
    "tenGodsAffinity": [
      "正官",
      "正财",
      "正印"
    ],
    "patternType": "官印双全",
    "strengthAdviceZh": "两代名臣代际传承的专业顶层设计能力！善于将父辈的理论制度落地为全国性庞大治理体系。",
    "strengthAdviceEn": "Generational master of statecraft! Converted familial administrative theory into practical empire-wide fiscal prosperity.",
    "weaknessAdviceZh": "隋炀帝继位后未能坚守早年骨鲠正道，在炀帝好大喜功与三征高句丽浪潮中数度妥协附和以保余年。",
    "weaknessAdviceEn": "Compromised his principles under Emperor Yang's megalomania, pandering to disastrous foreign wars to save his neck in old age.",
    "historicalQuoteZh": "隋文帝谓群臣曰：‘苏威之清正，朝廷之领袖也！’《隋书》评：苏威识识优纯，辅相开皇，功绩茂焉。",
    "historicalQuoteEn": "Emperor Wen praised: 'Su Wei's purity of office makes him the moral leader of my court!' A foundational prime minister of Sui.",
    "auxiliaryStrengthsZh": [
      "两代名臣代际传承的专业顶层设计能力",
      "善于将父辈的理论制度落地为全国性庞大治理体系"
    ],
    "auxiliaryStrengthsEn": [
      "Generational master of statecraft",
      "Converted familial administrative theory into practical empire-wide fiscal prosperity"
    ],
    "auxiliaryWeaknessesZh": [
      "隋炀帝继位后未能坚守早年骨鲠正道",
      "在炀帝好大喜功与三征高句丽浪潮中数度妥协附和以保余年"
    ],
    "auxiliaryWeaknessesEn": [
      "Compromised his principles under Emperor Yang's megalomania",
      "pandering to disastrous foreign wars to save his neck in old age"
    ]
  },
  {
    "id": "yang_hu",
    "nameZh": "羊祜",
    "nameEn": "Yang Hu (Marquis of Juping)",
    "dynastyZh": "西晋",
    "dynastyEn": "Western Jin",
    "eraTag": "western_jin",
    "eraNameZh": "西晋风云",
    "eraNameEn": "Western Jin Dynastic Era",
    "positionZh": "征南大将军 · 荆州诸军事 · 晋灭吴战略总策划师 · 堕泪碑圣贤",
    "positionEn": "General Conquering the South · Commander of Jingzhou · Chief Strategist of Wu Conquest · Tear-Evoking Sage",
    "personalityZh": "温良敦厚、深谋远虑、以德怀远、信义卓著",
    "personalityEn": "Gentle, profoundly far-sighted, governing through moral grace and unblemished integrity",
    "deedsZh": "都督荆州前线十余载，行仁政休养生息，开办学堂安抚荆襄军民；与东吴名将陆抗隔江对峙互通药食信义，深得敌国爱戴；临终力荐杜预自代，终平东吴。",
    "deedsEn": "Commanded Jingzhou frontier for decades, winning the hearts of both Jin and Wu armies through benevolence; established famous truce of honor with Lu Kang; recommended Du Yu before passing.",
    "archetype": "executive",
    "fiveElements": {
      "dominant": "土",
      "secondary": "金"
    },
    "tenGodsAffinity": [
      "正印",
      "正官",
      "正财"
    ],
    "patternType": "正德格",
    "strengthAdviceZh": "以长线的制度善意与不可撼动的信誉构筑道德制高点，让竞争对手不战而折服。",
    "strengthAdviceEn": "Build insurmountable moral and strategic high ground through relentless institutional goodwill, disarming competitors through honor.",
    "weaknessAdviceZh": "过度温良可能在急难险情中缺乏霹雳杀伐手段，需配合铁血战将作为互补执行手。",
    "weaknessAdviceEn": "Unbounded gentleness risks lacking tactical ferocity in sudden crises; partner with ruthless executive vanguards to enforce results.",
    "historicalQuoteZh": "《晋书》评：祜历职二纪，保釐南服，化被胡汉，身没之日，江汉之间望其碑而堕泪者相继。",
    "historicalQuoteEn": "Book of Jin: Yang Hu guarded the southern marches for decades; on the day he departed, commoners wept profusely gazing upon his monument.",
    "auxiliaryStrengthsZh": [
      "以长线的制度善意与不可撼动的信誉构筑道德制高点",
      "让竞争对手不战而折服"
    ],
    "auxiliaryStrengthsEn": [
      "Build insurmountable moral and strategic high ground through relentless institutional goodwill",
      "disarming competitors through honor"
    ],
    "auxiliaryWeaknessesZh": [
      "过度温良可能在急难险情中缺乏霹雳杀伐手段",
      "需配合铁血战将作为互补执行手"
    ],
    "auxiliaryWeaknessesEn": [
      "Unbounded gentleness risks lacking tactical ferocity in sudden crises",
      "partner with ruthless executive vanguards to enforce results"
    ]
  },
  {
    "id": "du_yu",
    "nameZh": "杜预",
    "nameEn": "Du Yu (Marquis of Dangyang)",
    "dynastyZh": "西晋",
    "dynastyEn": "Western Jin",
    "eraTag": "western_jin",
    "eraNameZh": "西晋风云",
    "eraNameEn": "Western Jin Dynastic Era",
    "positionZh": "镇南大将军 · 当阳侯 · 灭吴主帅 · 文武全才‘杜武库’",
    "positionEn": "General Pacifying the South · Marquis of Dangyang · Conqueror of Wu · The Omniscient Armory",
    "personalityZh": "算无遗策、博闻强记、勤勉善断、知常达变",
    "personalityEn": "Meticulous strategist, encyclopedic scholar, tirelessly decisive, master of realpolitik and engineering",
    "deedsZh": "继羊祜之后都督荆州，以‘势如破竹’之势挥师顺江直下席卷建平、江陵等江汉要塞，一举平定东吴；文治方面注疏《左传》，人称‘左传癖’与‘杜武库’。",
    "deedsEn": "Commanded the ultimate Southern offensive that crushed Eastern Wu like splitting bamboo; authored standard exegesis of Zuo Zhuan, celebrated as the 'Omniscient Armory'.",
    "archetype": "executive",
    "fiveElements": {
      "dominant": "木",
      "secondary": "火"
    },
    "tenGodsAffinity": [
      "偏印",
      "正官",
      "食神"
    ],
    "patternType": "正官格",
    "strengthAdviceZh": "将跨学科通才学识与关键战役的雷霆执行力融为一体，蓄势已久则破竹而下。",
    "strengthAdviceEn": "Synthesize multidisciplinary polymath knowledge with lightning execution when strategic momentum tilts favorably.",
    "weaknessAdviceZh": "不擅骑射却统领大军，常遭守旧武将讥诮；需以无可争辩的运筹帷幄胜绩确立指挥中枢。",
    "weaknessAdviceEn": "Physical or technical nontraditional traits invite peer skepticism; silence doubt through undeniable logistical and tactical triumphs.",
    "historicalQuoteZh": "《晋书》评：杜预博学多通，朝野称其‘武库’，顺流长驱，吴寇摧崩，破竹之功照耀简策。",
    "historicalQuoteEn": "Book of Jin: Du Yu was revered across the realm as an 'Omniscient Armory'; his victorious surge shattered Wu like split bamboo.",
    "auxiliaryStrengthsZh": [
      "将跨学科通才学识与关键战役的雷霆执行力融为一体",
      "蓄势已久则破竹而下"
    ],
    "auxiliaryStrengthsEn": [
      "Synthesize multidisciplinary polymath knowledge with lightning execution when strategic momentum tilts favorably.",
      "Leverages core natural talents to pierce strategic bottlenecks."
    ],
    "auxiliaryWeaknessesZh": [
      "不擅骑射却统领大军，常遭守旧武将讥诮",
      "需以无可争辩的运筹帷幄胜绩确立指挥中枢"
    ],
    "auxiliaryWeaknessesEn": [
      "Physical or technical nontraditional traits invite peer skepticism",
      "silence doubt through undeniable logistical and tactical triumphs"
    ]
  },
  {
    "id": "shi_chong",
    "nameZh": "石崇",
    "nameEn": "Shi Chong (Marquis of Anyang)",
    "dynastyZh": "西晋",
    "dynastyEn": "Western Jin",
    "eraTag": "western_jin",
    "eraNameZh": "西晋风云",
    "eraNameEn": "Western Jin Dynastic Era",
    "positionZh": "卫尉 · 荆州刺史 · 金谷园巨富 · 炫富斗奢之首",
    "positionEn": "Commandant of Guards · Governor of Jingzhou · Wealthiest Magnate of Golden Valley Garden",
    "personalityZh": "奢靡狂纵、敛财豪夺、才学卓异、不知收敛",
    "personalityEn": "Extravagant, aggressive wealth-accumulator, artistically accomplished, incapable of restraint",
    "deedsZh": "任荆州刺史劫掠客商积累泼天富贵，筑金谷园汇聚天下文士；与外戚王恺斗富掷碎珊瑚树，名动京华；后因宠妾绿珠被孙秀索要不允，遭构陷灭族。",
    "deedsEn": "Amassed staggering fortune via commerce and extortion, created Golden Valley Garden for literati; famous coral tree contest with Wang Kai; purged after refusing to yield concubine Lüzhu.",
    "archetype": "specialist",
    "fiveElements": {
      "dominant": "火",
      "secondary": "土"
    },
    "tenGodsAffinity": [
      "偏财",
      "伤官",
      "劫财"
    ],
    "patternType": "偏财格",
    "strengthAdviceZh": "敏锐洞悉资本与财富的扩张规律，善于构筑顶级名流圈层并打造传世文化沙龙。",
    "strengthAdviceEn": "Master wealth generation and high-society networking; orchestrate elite cultural salons to amplify prestige.",
    "weaknessAdviceZh": "财富极度招摇且深度卷入派系政治，不知‘财不露白’与全身远害，终致杀身灭门。",
    "weaknessAdviceEn": "Ostentatious wealth flaunting without sovereign political protection inevitably triggers catastrophic expropriation and destruction.",
    "historicalQuoteZh": "《世说新语》记：崇以铁如意击珊瑚树，应手碎落；及就戮，叹曰：‘奴辈利吾财耳！’",
    "historicalQuoteEn": "A New Account of Tales of the World: Shi Chong struck the coral tree with an iron ruyi; facing execution, he sighed: 'They only crave my fortune!'",
    "auxiliaryStrengthsZh": [
      "敏锐洞悉资本与财富的扩张规律",
      "善于构筑顶级名流圈层并打造传世文化沙龙"
    ],
    "auxiliaryStrengthsEn": [
      "Master wealth generation and high-society networking",
      "orchestrate elite cultural salons to amplify prestige"
    ],
    "auxiliaryWeaknessesZh": [
      "财富极度招摇且深度卷入派系政治",
      "不知‘财不露白’与全身远害，终致杀身灭门"
    ],
    "auxiliaryWeaknessesEn": [
      "Ostentatious wealth flaunting without sovereign political protection inevitably triggers catastrophic expropriation and destruction.",
      "Erects rigid ethical and behavioral safeguards against blindspots."
    ]
  },
  {
    "id": "sima_zhao",
    "nameZh": "司马昭",
    "nameEn": "Sima Zhao (King of Jin)",
    "dynastyZh": "西晋奠基",
    "dynastyEn": "Western Jin Founder",
    "eraTag": "western_jin",
    "eraNameZh": "西晋风云",
    "eraNameEn": "Western Jin Dynastic Era",
    "positionZh": "曹魏大将军 · 相国 · 晋王 · 晋朝实质奠基人",
    "positionEn": "General-in-Chief · Chancellor · King of Jin · De Facto Architect of Jin Dynasty",
    "personalityZh": "阴鸷深沉、野心勃勃、铁腕专断、能容才干",
    "personalityEn": "Machiavellian, relentlessly ambitious, iron-fisted ruler, pragmatic patron of tactical talent",
    "deedsZh": "平定淮南诸葛诞叛乱，弑高贵乡公曹髦确立弑君威权；策划灭蜀之战派遣钟会、邓艾双线入川灭亡蜀汉；建立‘司马昭之心路人皆知’的政治底盘，为其子司马炎代魏奠基。",
    "deedsEn": "Suppressed Huainan rebellions, consolidated absolute dictatorship over Cao Wei, orchestrated conquest of Shu Han via Deng Ai and Zhong Hui, preparing Jin's enthronement.",
    "archetype": "executive",
    "fiveElements": {
      "dominant": "金",
      "secondary": "水"
    },
    "tenGodsAffinity": [
      "七杀",
      "偏印",
      "劫财"
    ],
    "patternType": "七杀格",
    "strengthAdviceZh": "以长远战略意志锁定终极权柄，善于在重大政治险滩中把控组织命脉并统摄顶级战将。",
    "strengthAdviceEn": "Maintain unyielding strategic focus on paramount leadership; command volatile, brilliant subordinates to conquer macro goals.",
    "weaknessAdviceZh": "政治手腕过于露骨赤裸（司马昭之心），易丧失道义合法性并在后世引发反噬风暴。",
    "weaknessAdviceEn": "Overly transparent machinations deplete systemic moral legitimacy, inviting historic cynicism and succession turbulence.",
    "historicalQuoteZh": "《三国志》引《汉晋春秋》：曹髦曰：‘司马昭之心，路人所知也。吾不能坐受废辱，今日便当自出决之。’",
    "historicalQuoteEn": "Records of the Three Kingdoms: Cao Mao declared, 'Sima Zhao's imperial mind is patent to every commoner in the street; I cannot suffer deposition in silence.'",
    "auxiliaryStrengthsZh": [
      "以长远战略意志锁定终极权柄",
      "善于在重大政治险滩中把控组织命脉并统摄顶级战将"
    ],
    "auxiliaryStrengthsEn": [
      "Maintain unyielding strategic focus on paramount leadership",
      "command volatile, brilliant subordinates to conquer macro goals"
    ],
    "auxiliaryWeaknessesZh": [
      "政治手腕过于露骨赤裸（司马昭之心）",
      "易丧失道义合法性并在后世引发反噬风暴"
    ],
    "auxiliaryWeaknessesEn": [
      "Overly transparent machinations deplete systemic moral legitimacy",
      "inviting historic cynicism and succession turbulence"
    ]
  },
  {
    "id": "ruan_xian",
    "nameZh": "阮咸",
    "nameEn": "Ruan Xian",
    "dynastyZh": "西晋",
    "dynastyEn": "Western Jin",
    "eraTag": "western_jin",
    "eraNameZh": "西晋风云",
    "eraNameEn": "Western Jin Dynastic Era",
    "positionZh": "竹林七贤之一 · 散骑侍郎 · 著名音律大师",
    "positionEn": "One of Seven Sages of Bamboo Grove · Gentleman Attendant · Renowned Music Master",
    "personalityZh": "任诞通达、不拘礼法、神清骨秀、极具艺术灵性",
    "personalityEn": "Unconventional, spiritually free, transcendent of dogma, possessing supreme artistic genius",
    "deedsZh": "精通音律，审音识乐无双，发明改良阮琴（阮咸）；蔑视世俗繁文缛节，与士庶同乐，以真性情名动洛下。",
    "deedsEn": "Master of acoustics who perfected the Chinese lute (Ruanxian); disdained hypocritical court rituals, celebrated for authentic bohemian spirit.",
    "archetype": "specialist",
    "fiveElements": {
      "dominant": "木",
      "secondary": "火"
    },
    "tenGodsAffinity": [
      "食神",
      "伤官",
      "比肩"
    ],
    "patternType": "食神生财格",
    "strengthAdviceZh": "培养不被世俗规训束缚的独特审美，以专业技艺与赤诚真性情立身破局。",
    "strengthAdviceEn": "Cultivate unconventional aesthetic mastery and maintain authentic creative integrity without fear of social orthodoxy.",
    "weaknessAdviceZh": "过于放浪形骸与轻视世俗规则可能导致官场被排挤与现实资源匮乏。",
    "weaknessAdviceEn": "Excessive disdain for pragmatic rules may cause political alienation and resource vulnerability.",
    "historicalQuoteZh": "《晋书》评：咸和乐神契，妙尽律吕之奥，虽荀勖之妙思，自谓不能及也。",
    "historicalQuoteEn": "Book of Jin: Ruan Xian's intuitive musical genius pierced the deepest acoustic secrets, unmatched even by Xun Xu.",
    "auxiliaryStrengthsZh": [
      "培养不被世俗规训束缚的独特审美",
      "以专业技艺与赤诚真性情立身破局"
    ],
    "auxiliaryStrengthsEn": [
      "Cultivate unconventional aesthetic mastery and maintain authentic creative integrity without fear of social orthodoxy.",
      "Leverages core natural talents to pierce strategic bottlenecks."
    ],
    "auxiliaryWeaknessesZh": [
      "过于放浪形骸与轻视世俗规则可能导致官场被排挤与现实资源匮乏。",
      "设立刚性风险熔断防火墙，防微杜渐"
    ],
    "auxiliaryWeaknessesEn": [
      "Excessive disdain for pragmatic rules may cause political alienation and resource vulnerability.",
      "Erects rigid ethical and behavioral safeguards against blindspots."
    ]
  },
  {
    "id": "li_te",
    "nameZh": "李特",
    "nameEn": "Li Te (Founding Monarch of Cheng Han)",
    "dynastyZh": "十六国 · 成汉",
    "dynastyEn": "Sixteen Kingdoms · Cheng Han",
    "eraTag": "sixteen_kingdoms",
    "eraNameZh": "五胡十六国",
    "eraNameEn": "Sixteen Kingdoms Era",
    "positionZh": "大将军 · 益州牧 · 成汉开基奠基人",
    "positionEn": "General-in-Chief · Shepherd of Yizhou · Founding Pioneer of Cheng Han",
    "personalityZh": "勇武果烈、豪侠仗义、抚恤流亡、死战不旋踵",
    "personalityEn": "Fierce combatant, deeply chivalrous champion of refugees, unflinching in mortal combat",
    "deedsZh": "带领秦陇数万受灾流民入蜀，面对晋朝官军的迫害围剿，率流民义军屡挫晋军，分粮济饥，建立政权雏形，战死沙场。",
    "deedsEn": "Led thousands of starving refugees into Sichuan, organized an indomitable popular army to shatter persecuting imperial forces, laying Cheng Han's foundation.",
    "archetype": "military",
    "fiveElements": {
      "dominant": "火",
      "secondary": "土"
    },
    "tenGodsAffinity": [
      "七杀",
      "比肩",
      "食神"
    ],
    "patternType": "七杀格",
    "strengthAdviceZh": "在至暗时刻敢于挑起救护弱小的责任，以朴素正义感凝聚最坚固的生死团队。",
    "strengthAdviceEn": "In darkest crises, shoulder direct responsibility for the vulnerable; moral courage forges unbreakable grassroots solidarity.",
    "weaknessAdviceZh": "初胜之后轻信敌人伪降与和谈承诺，缺乏战略戒心容易遭遇致命伏击。",
    "weaknessAdviceEn": "Premature trust in false enemy capitulation or truces will leave strategic vanguards exposed to lethal ambushes.",
    "historicalQuoteZh": "《晋书》载：特雄武善骑射，沈毅有大度，流民归之如归市，抗暴于蜀，死战不屈。",
    "historicalQuoteEn": "Book of Jin: Li Te was valiant, resolute, and magnanimous; displaced refugees flocked to him like a bustling market.",
    "auxiliaryStrengthsZh": [
      "在至暗时刻敢于挑起救护弱小的责任",
      "以朴素正义感凝聚最坚固的生死团队"
    ],
    "auxiliaryStrengthsEn": [
      "In darkest crises, shoulder direct responsibility for the vulnerable",
      "moral courage forges unbreakable grassroots solidarity"
    ],
    "auxiliaryWeaknessesZh": [
      "初胜之后轻信敌人伪降与和谈承诺",
      "缺乏战略戒心容易遭遇致命伏击"
    ],
    "auxiliaryWeaknessesEn": [
      "Premature trust in false enemy capitulation or truces will leave strategic vanguards exposed to lethal ambushes.",
      "Erects rigid ethical and behavioral safeguards against blindspots."
    ]
  },
  {
    "id": "li_xiong",
    "nameZh": "李雄",
    "nameEn": "Li Xiong (Emperor Wu of Cheng Han)",
    "dynastyZh": "十六国 · 成汉",
    "dynastyEn": "Sixteen Kingdoms · Cheng Han",
    "eraTag": "sixteen_kingdoms",
    "eraNameZh": "五胡十六国",
    "eraNameEn": "Sixteen Kingdoms Era",
    "positionZh": "成汉开国皇帝 · 成武帝 · 蜀中三十载太平之主",
    "positionEn": "Founding Emperor of Cheng Han · Emperor Wu · 30-Year Guardian of Sichuan Peace",
    "personalityZh": "宽和仁恕、简刑薄赋、尊贤下士、善于安民",
    "personalityEn": "Warmhearted, merciful, dedicated to light taxation, respectful of sages, benevolent statecraft",
    "deedsZh": "继父兄之业平定益州称帝，拜范长生为丞相，在五胡乱华烽烟中保蜀中三十年无大战，赋税极轻，百姓安居乐业如世外桃源。",
    "deedsEn": "Inherited leadership, proclaimed empire, elevated sage Fan Changsheng, and safeguarded Sichuan in peace and low taxation for thirty years amidst civil war.",
    "archetype": "civil",
    "fiveElements": {
      "dominant": "土",
      "secondary": "火"
    },
    "tenGodsAffinity": [
      "食神",
      "正财",
      "正印"
    ],
    "patternType": "正官格",
    "strengthAdviceZh": "善用减法治理与休养生息策略，给团队与基层最大的空间，休兵养民厚积薄发。",
    "strengthAdviceEn": "Adopt reductive governance and restorative patience; empower grassroots ecosystems with room to breathe and generate organic wealth.",
    "weaknessAdviceZh": "立嗣问题上未能铁腕决断，舍亲子而立侄儿李班，最终埋下骨肉相残王朝早夭祸根。",
    "weaknessAdviceEn": "Ambiguous succession planning and failure to secure institutional continuity can sow fratricidal civil war post-mortem.",
    "historicalQuoteZh": "《晋书》评：雄宽厚容纳，虚己爱人，三十年间民安物阜，成汉基业，系于斯人。",
    "historicalQuoteEn": "Book of Jin: Li Xiong governed with immense benevolence, nurturing commoners so that peace and plenty reigned in Sichuan for thirty years.",
    "auxiliaryStrengthsZh": [
      "善用减法治理与休养生息策略",
      "给团队与基层最大的空间，休兵养民厚积薄发"
    ],
    "auxiliaryStrengthsEn": [
      "Adopt reductive governance and restorative patience",
      "empower grassroots ecosystems with room to breathe and generate organic wealth"
    ],
    "auxiliaryWeaknessesZh": [
      "立嗣问题上未能铁腕决断",
      "舍亲子而立侄儿李班，最终埋下骨肉相残王朝早夭祸根"
    ],
    "auxiliaryWeaknessesEn": [
      "Ambiguous succession planning and failure to secure institutional continuity can sow fratricidal civil war post-mortem.",
      "Erects rigid ethical and behavioral safeguards against blindspots."
    ]
  },
  {
    "id": "fu_sheng",
    "nameZh": "苻生",
    "nameEn": "Fu Sheng (King of Former Qin)",
    "dynastyZh": "十六国 · 前秦",
    "dynastyEn": "Sixteen Kingdoms · Former Qin",
    "eraTag": "sixteen_kingdoms",
    "eraNameZh": "五胡十六国",
    "eraNameEn": "Sixteen Kingdoms Era",
    "positionZh": "前秦第三任皇帝 · 越厉王 · 独眼霸王",
    "positionEn": "Third Emperor of Former Qin · King Li of Yue · Cyclops Warrior Sovereign",
    "personalityZh": "残暴嗜杀、骁勇无双、猜忌乖张、悍勇绝伦",
    "personalityEn": "Bloodthirsty, uninhibitedly ferocious in duel, intensely paranoid and erratic",
    "deedsZh": "天生独眼却力能格兽、走及奔马，多次在沙场单骑冲阵斩将夺旗；登基后暴虐滥杀宗戚大臣，终被堂弟苻坚政变诛杀。",
    "deedsEn": "A monstrous one-eyed warrior who could wrestle beasts and outrun horses; assassinated his ministers in paranoid fury until toppled by Fu Jian.",
    "archetype": "military",
    "fiveElements": {
      "dominant": "金",
      "secondary": "火"
    },
    "tenGodsAffinity": [
      "七杀",
      "劫财",
      "伤官"
    ],
    "patternType": "七杀格",
    "strengthAdviceZh": "单兵突破力必须服务于长远组织目标，不可任由野蛮兽性与无序破坏欲主导行为。",
    "strengthAdviceEn": "Individual combat dominance must serve constructive long-term missions rather than reckless bloodlust.",
    "weaknessAdviceZh": "以残暴与恐怖统治维系威权，必将迅速逼反身边最亲近的心腹与战略伙伴。",
    "weaknessAdviceEn": "Relying on fear and terror to command teams will inevitably provoke fatal rebellion from inner circles.",
    "historicalQuoteZh": "《晋书》评：生多力善射，走及奔马，然猜虐无道，祸稔衅盈，自毙于凶德。",
    "historicalQuoteEn": "Book of Jin: Fu Sheng possessed beast-wrestling power, yet unchecked tyranny authored his inevitable doom.",
    "auxiliaryStrengthsZh": [
      "单兵突破力必须服务于长远组织目标",
      "不可任由野蛮兽性与无序破坏欲主导行为"
    ],
    "auxiliaryStrengthsEn": [
      "Individual combat dominance must serve constructive long-term missions rather than reckless bloodlust.",
      "Leverages core natural talents to pierce strategic bottlenecks."
    ],
    "auxiliaryWeaknessesZh": [
      "以残暴与恐怖统治维系威权",
      "必将迅速逼反身边最亲近的心腹与战略伙伴"
    ],
    "auxiliaryWeaknessesEn": [
      "Relying on fear and terror to command teams will inevitably provoke fatal rebellion from inner circles.",
      "Erects rigid ethical and behavioral safeguards against blindspots."
    ]
  },
  {
    "id": "yao_xiang",
    "nameZh": "姚襄",
    "nameEn": "Yao Xiang",
    "dynastyZh": "十六国 · 羌族政权",
    "dynastyEn": "Sixteen Kingdoms · Qiang Warlord",
    "eraTag": "sixteen_kingdoms",
    "eraNameZh": "五胡十六国",
    "eraNameEn": "Sixteen Kingdoms Era",
    "positionZh": "后秦武昭帝姚苌之兄 · 羌族万人敌英雄统领",
    "positionEn": "Elder Brother of Emperor Yao Chang · Heroic Supreme General of Qiang Clan",
    "personalityZh": "雄迈英姿、兼资文武、深受爱戴、悲壮勇决",
    "personalityEn": "Heroically charismatic, gifted in both martial and civil arts, beloved by all followers",
    "deedsZh": "姚弋仲第五子，容貌魁伟善抚士卒，胡汉百姓皆归心慕义；在乱世中转战中原，击败殷浩，最后与前秦苻黄眉大战于三原力战殉国。",
    "deedsEn": "Fifth son of Yao Yizhong, renowned for martial brilliance and empathy; conquered vast territories across the Central Plains before heroic death at Sanyuan.",
    "archetype": "military",
    "fiveElements": {
      "dominant": "金",
      "secondary": "水"
    },
    "tenGodsAffinity": [
      "七杀",
      "比肩",
      "正印"
    ],
    "patternType": "偏官格",
    "strengthAdviceZh": "以至诚胸怀与卓越亲和力凝聚跨圈层人才，展现令人心折的人格魅力与号召力。",
    "strengthAdviceEn": "Unite diverse factions across cultural divides through authentic charisma and frontline valor.",
    "weaknessAdviceZh": "战略纵深未稳时急于攻坚坚城名邑，树敌过多容易导致四面楚歌与过早透支。",
    "weaknessAdviceEn": "Attacking impregnable strongholds before establishing strategic depth creates dangerous multi-front attrition.",
    "historicalQuoteZh": "《晋书》评：姚襄雄武冠世，收合流离，甚得胡汉之心，关陇豪侠皆以死相托。",
    "historicalQuoteEn": "Book of Jin: Yao Xiang's martial charisma captivated both barbarian and Han hearts, with warriors pledging their lives to him.",
    "auxiliaryStrengthsZh": [
      "以至诚胸怀与卓越亲和力凝聚跨圈层人才",
      "展现令人心折的人格魅力与号召力"
    ],
    "auxiliaryStrengthsEn": [
      "Unite diverse factions across cultural divides through authentic charisma and frontline valor.",
      "Leverages core natural talents to pierce strategic bottlenecks."
    ],
    "auxiliaryWeaknessesZh": [
      "战略纵深未稳时急于攻坚坚城名邑",
      "树敌过多容易导致四面楚歌与过早透支"
    ],
    "auxiliaryWeaknessesEn": [
      "Attacking impregnable strongholds before establishing strategic depth creates dangerous multi-front attrition.",
      "Erects rigid ethical and behavioral safeguards against blindspots."
    ]
  },
  {
    "id": "peng_chao",
    "nameZh": "彭超",
    "nameEn": "Peng Chao (General of Former Qin)",
    "dynastyZh": "十六国 · 前秦",
    "dynastyEn": "Sixteen Kingdoms · Former Qin",
    "eraTag": "sixteen_kingdoms",
    "eraNameZh": "五胡十六国",
    "eraNameEn": "Sixteen Kingdoms Era",
    "positionZh": "前秦镇东将军 · 兖州刺史 · 攻襄阳破彭城名将",
    "positionEn": "General Pacifying the East · Governor of Yanzhou · Conqueror of Xiangyang and Pengcheng",
    "personalityZh": "用兵凌厉、攻坚勇悍、骄兵轻敌、失察于退路",
    "personalityEn": "Aggressive offensive campaigner, ferocious siege specialist, susceptible to overconfidence",
    "deedsZh": "率前秦大军南侵连拔襄阳、彭城等战略重镇，威逼三阿；后因轻敌被东阳谢玄与刘牢之夜袭辎重粮道，导致淝水前夕的君川大溃败。",
    "deedsEn": "Captured vital fortresses at Xiangyang and Pengcheng; overreached at Junquan where Xie Xuan destroyed his supply lines, triggering retreat.",
    "archetype": "military",
    "fiveElements": {
      "dominant": "土",
      "secondary": "金"
    },
    "tenGodsAffinity": [
      "七杀",
      "偏印",
      "偏财"
    ],
    "patternType": "七杀格",
    "strengthAdviceZh": "在进攻势头最顺畅时，必须派遣精锐斥候严密封锁后勤生命线与粮草补给站。",
    "strengthAdviceEn": "In aggressive expansions, allocate elite defensive resources to secure vulnerable supply lines and lifelines.",
    "weaknessAdviceZh": "战术骄纵与轻视对手新锐将领，往往在看似全盘必胜之际遭遇致命背刺。",
    "weaknessAdviceEn": "Contempt for nimble adversaries invites sudden ambush at your most vulnerable supply nodes.",
    "historicalQuoteZh": "《资治通鉴》载：超长驱深入，连下数城，然失备于辎重，谢玄夜袭君川，超遂大溃。",
    "historicalQuoteEn": "Zizhi Tongjian: Peng Chao drove deep into southern lines taking multiple citadels, yet neglected logistics until Xie Xuan's night raid broke his army.",
    "auxiliaryStrengthsZh": [
      "在进攻势头最顺畅时",
      "必须派遣精锐斥候严密封锁后勤生命线与粮草补给站"
    ],
    "auxiliaryStrengthsEn": [
      "In aggressive expansions",
      "allocate elite defensive resources to secure vulnerable supply lines and lifelines"
    ],
    "auxiliaryWeaknessesZh": [
      "战术骄纵与轻视对手新锐将领",
      "往往在看似全盘必胜之际遭遇致命背刺"
    ],
    "auxiliaryWeaknessesEn": [
      "Contempt for nimble adversaries invites sudden ambush at your most vulnerable supply nodes.",
      "Erects rigid ethical and behavioral safeguards against blindspots."
    ]
  },
  {
    "id": "juqu_mengxun",
    "nameZh": "沮渠蒙逊",
    "nameEn": "Juqu Mengxun (King of Northern Liang)",
    "dynastyZh": "十六国 · 北凉",
    "dynastyEn": "Sixteen Kingdoms · Northern Liang",
    "eraTag": "sixteen_kingdoms",
    "eraNameZh": "五胡十六国",
    "eraNameEn": "Sixteen Kingdoms Era",
    "positionZh": "北凉武宣王 · 卢水胡雄主 · 统御河西之枭雄",
    "positionEn": "King Wuxuan of Northern Liang · Lushui Hu Sovereign · Master of Hexi Oasis",
    "personalityZh": "博涉书记、机变灵活、鸷悍果决、亦雄亦诈",
    "personalityEn": "Learned in scriptures, master of adaptive diplomacy, ferocious yet strategically cunning",
    "deedsZh": "起兵反段业自立称凉王，攻克酒泉灭西凉李氏，统一河西走廊，开凿天梯山石窟，弘扬佛教译经，成为西北最强霸主。",
    "deedsEn": "Rose from Lushui Hu tribes, overthrew Duan Ye, conquered Western Liang, unified the Hexi corridor, and pioneered Buddhist grotto construction at Tiantishan.",
    "archetype": "executive",
    "fiveElements": {
      "dominant": "木",
      "secondary": "水"
    },
    "tenGodsAffinity": [
      "七杀",
      "偏财",
      "偏印"
    ],
    "patternType": "偏官格",
    "strengthAdviceZh": "在四战之地善于灵活腾挪外交杠杆，以文化崇尚（译经开窟）与铁血军事双轮驱动维系霸业。",
    "strengthAdviceEn": "Employ dynamic multidirectional diplomacy in precarious geopolitical environments; blend cultural patronage with tactical deterrence.",
    "weaknessAdviceZh": "过于权诈多变与弑杀前主之名，容易导致周边势力常怀戒心难结深厚互信同盟。",
    "weaknessAdviceEn": "Excessive reliance on ruthless subterfuge breeds permanent suspicion among potential long-term strategic partners.",
    "historicalQuoteZh": "《晋书》评：蒙逊雄杰沉鸷，善于权变，控御遐荒，开化佛门，终成河西霸王。",
    "historicalQuoteEn": "Book of Jin: Mengxun was deeply cunning and ambitious; he held dominion over the western frontiers while patronizing early Buddhist civilization.",
    "auxiliaryStrengthsZh": [
      "在四战之地善于灵活腾挪外交杠杆",
      "以文化崇尚（译经开窟）与铁血军事双轮驱动维系霸业"
    ],
    "auxiliaryStrengthsEn": [
      "Employ dynamic multidirectional diplomacy in precarious geopolitical environments",
      "blend cultural patronage with tactical deterrence"
    ],
    "auxiliaryWeaknessesZh": [
      "过于权诈多变与弑杀前主之名",
      "容易导致周边势力常怀戒心难结深厚互信同盟"
    ],
    "auxiliaryWeaknessesEn": [
      "Excessive reliance on ruthless subterfuge breeds permanent suspicion among potential long-term strategic partners.",
      "Erects rigid ethical and behavioral safeguards against blindspots."
    ]
  },
  {
    "id": "bian_kun",
    "nameZh": "卞壸",
    "nameEn": "Bian Kun (Loyal Chancellor of Jin)",
    "dynastyZh": "东晋",
    "dynastyEn": "Eastern Jin",
    "eraTag": "eastern_jin",
    "eraNameZh": "东晋门阀",
    "eraNameEn": "Eastern Jin Dynastic Era",
    "positionZh": "尚书令 · 领军将军 · 忠贞殉国三父子烈臣",
    "positionEn": "Director of Imperial Secretariat · General of Central Army · Heroic Martyr Statesman",
    "personalityZh": "刚毅正直、恪尽职守、视死如归、严明纪律",
    "personalityEn": "Unyielding, deeply ethical, disciplined, fearlessly devoted to state survival until the last breath",
    "deedsZh": "居官清正无私，敢于抗衡权臣王敦；苏峻之乱爆发，亲督禁卫军死战拒敌，身受重伤仍冲阵赴难，二子随后冲锋殉节，满门忠烈垂范千古。",
    "deedsEn": "Fierce anti-corruption statesman; when Su Jun rebelled, he charged headlong into battle with his two sons, all three perishing heroically defending the capital.",
    "archetype": "civil",
    "fiveElements": {
      "dominant": "金",
      "secondary": "土"
    },
    "tenGodsAffinity": [
      "正官",
      "七杀",
      "正印"
    ],
    "patternType": "正官格",
    "strengthAdviceZh": "在原则与底线问题上坚如磐石，以身体力行的铁血担当为组织树立不可磨灭的道德标杆。",
    "strengthAdviceEn": "Stand rock-solid on foundational ethical principles; lead from the absolute frontline when moral survival is on the line.",
    "weaknessAdviceZh": "文官统兵时若缺乏临阵战术机变，仅凭血气之勇正面死磕易遭敌军精骑合围包抄。",
    "weaknessAdviceEn": "Moral courage without dynamic battlefield tactical flexibility can lead to tragic tactical encirclement.",
    "historicalQuoteZh": "《晋书》评：卞壸守节纯诚，忠孝兼至，父子鼎立赴死，江左忠义第一人也。",
    "historicalQuoteEn": "Book of Jin: Bian Kun maintained purest fidelity; father and sons charged to their deaths, celebrated as Eastern Jin's premier martyrs.",
    "auxiliaryStrengthsZh": [
      "在原则与底线问题上坚如磐石",
      "以身体力行的铁血担当为组织树立不可磨灭的道德标杆"
    ],
    "auxiliaryStrengthsEn": [
      "Stand rock-solid on foundational ethical principles",
      "lead from the absolute frontline when moral survival is on the line"
    ],
    "auxiliaryWeaknessesZh": [
      "文官统兵时若缺乏临阵战术机变",
      "仅凭血气之勇正面死磕易遭敌军精骑合围包抄"
    ],
    "auxiliaryWeaknessesEn": [
      "Moral courage without dynamic battlefield tactical flexibility can lead to tragic tactical encirclement.",
      "Erects rigid ethical and behavioral safeguards against blindspots."
    ]
  },
  {
    "id": "mao_bao",
    "nameZh": "毛宝",
    "nameEn": "Mao Bao (Heroic River Admiral of Jin)",
    "dynastyZh": "东晋",
    "dynastyEn": "Eastern Jin",
    "eraTag": "eastern_jin",
    "eraNameZh": "东晋门阀",
    "eraNameEn": "Eastern Jin Dynastic Era",
    "positionZh": "监江州诸军事 · 豫州刺史 · 义释白龟名扬千古名将",
    "positionEn": "Commander of Jiangzhou Military · Governor of Yuzhou · White Turtle Savior Admiral",
    "personalityZh": "仁善存心、果毅善战、恪尽国事、视死如归",
    "personalityEn": "Benevolent soul, combat-tested naval tactician, dedicated unto death in frontier defense",
    "deedsZh": "平定苏峻之乱中焚毁贼军姑孰粮仓立大功；镇守邾城抗击后赵石虎大军，城陷突围投江；昔年曾买白龟放生，相传其将士得白龟相救渡江传为千古佳话。",
    "deedsEn": "Burned rebel depots to crush Su Jun's rebellion; defended Zhucheng courageously against Later Zhao; legendary liberator of the mystical white turtle.",
    "archetype": "military",
    "fiveElements": {
      "dominant": "水",
      "secondary": "木"
    },
    "tenGodsAffinity": [
      "食神",
      "正印",
      "偏官"
    ],
    "patternType": "正官格",
    "strengthAdviceZh": "在严酷的竞争杀伐中始终葆有一份护佑微弱生命的纯善仁心，善念往往成为绝境中的福报源泉。",
    "strengthAdviceEn": "Maintain genuine compassion for vulnerable beings even in ruthless struggles; kindness seeds unexpected resilience in dire straits.",
    "weaknessAdviceZh": "明知前线粮尽孤立无援时应提前谋划水陆机动，避免被绝对优势敌军合围死守死地。",
    "weaknessAdviceEn": "When cut off without reinforcements, devise dynamic fluid retreat rather than static entrapment.",
    "historicalQuoteZh": "《晋书》载：宝勇锐善战，焚姑孰积聚以困峻；及邾城陷，宝赴江死之，仁义名流百代。",
    "historicalQuoteEn": "Book of Jin: Mao Bao was brave and skilled, burning enemy depots to strangle rebels; when Zhucheng fell, he met death heroically in the Yangtze.",
    "auxiliaryStrengthsZh": [
      "在严酷的竞争杀伐中始终葆有一份护佑微弱生命的纯善仁心",
      "善念往往成为绝境中的福报源泉"
    ],
    "auxiliaryStrengthsEn": [
      "Maintain genuine compassion for vulnerable beings even in ruthless struggles",
      "kindness seeds unexpected resilience in dire straits"
    ],
    "auxiliaryWeaknessesZh": [
      "明知前线粮尽孤立无援时应提前谋划水陆机动",
      "避免被绝对优势敌军合围死守死地"
    ],
    "auxiliaryWeaknessesEn": [
      "When cut off without reinforcements",
      "devise dynamic fluid retreat rather than static entrapment"
    ]
  },
  {
    "id": "sima_shao",
    "nameZh": "司马绍",
    "nameEn": "Sima Shao (Emperor Ming of Jin)",
    "dynastyZh": "东晋",
    "dynastyEn": "Eastern Jin",
    "eraTag": "eastern_jin",
    "eraNameZh": "东晋门阀",
    "eraNameEn": "Eastern Jin Dynastic Era",
    "positionZh": "东晋第二位皇帝 · 晋明帝 · 平定王敦之乱神武雄主",
    "positionEn": "Second Emperor of Eastern Jin · Emperor Ming · Conqueror of Wang Dun's Rebellion",
    "personalityZh": "勇略过人、微服私访、果毅决断、制衡门阀",
    "personalityEn": "Undaunted tactical courage, insightful investigator, iron-willed sovereign who tamed aristocratic overlords",
    "deedsZh": "鲜卑母所生，黄须美丰仪；王敦谋反，明帝单骑微服侦察贼营，从容脱身；随后指挥禁军奋力平定王敦叛乱，力挽狂澜稳住东晋江山，惜在位三载英年早逝。",
    "deedsEn": "Known as the 'Yellow-Bearded Sovereign'; personally reconnoitered rebel leader Wang Dun's lines undercover before rallying loyal armies to annihilate the uprising.",
    "archetype": "executive",
    "fiveElements": {
      "dominant": "火",
      "secondary": "木"
    },
    "tenGodsAffinity": [
      "七杀",
      "比肩",
      "正印"
    ],
    "patternType": "偏官格",
    "strengthAdviceZh": "最高决策者敢于深入一线摸清真实敌情与数据，在危机关头展现身先士卒的铁血威慑力。",
    "strengthAdviceEn": "Inspect frontline reality in disguise before executing fateful strategic counters; lead boldly from the front in existential moments.",
    "weaknessAdviceZh": "长期过度透支精力和高压搏杀易损耗寿算，需在重大平乱后建立科学修养机制。",
    "weaknessAdviceEn": "Relentless adrenaline burnout depletes vital life essence; institutionalize restorative pacing after high-stress crises.",
    "historicalQuoteZh": "《晋书》评：明帝聪明有机断，摧折强臣，光绍中绪，虽汉之光武无以加焉。",
    "historicalQuoteEn": "Book of Jin: Emperor Ming was brilliantly perceptive and decisive, crushing insolent magnates to consolidate the Southern throne.",
    "auxiliaryStrengthsZh": [
      "最高决策者敢于深入一线摸清真实敌情与数据",
      "在危机关头展现身先士卒的铁血威慑力"
    ],
    "auxiliaryStrengthsEn": [
      "Inspect frontline reality in disguise before executing fateful strategic counters",
      "lead boldly from the front in existential moments"
    ],
    "auxiliaryWeaknessesZh": [
      "长期过度透支精力和高压搏杀易损耗寿算",
      "需在重大平乱后建立科学修养机制"
    ],
    "auxiliaryWeaknessesEn": [
      "Relentless adrenaline burnout depletes vital life essence",
      "institutionalize restorative pacing after high-stress crises"
    ]
  },
  {
    "id": "xi_jian",
    "nameZh": "郗鉴",
    "nameEn": "Xi Jian (Duke of Nanchang)",
    "dynastyZh": "东晋",
    "dynastyEn": "Eastern Jin",
    "eraTag": "eastern_jin",
    "eraNameZh": "东晋门阀",
    "eraNameEn": "Eastern Jin Dynastic Era",
    "positionZh": "太尉 · 中书令 · 京口北府军前身奠基人 · 东晋第一平衡大师",
    "positionEn": "Grand Commandant · President of Secretariat · Founder of Jingkou Garrison · Supreme Master of Political Balance",
    "personalityZh": "清修老练、深谋远虑、老成持重、顾全大局",
    "personalityEn": "Incorruptible veteran, consummate balance arbiter, master of long-term strategic patience",
    "deedsZh": "镇守京口构筑军事基地，开创北府军先声；在王导执政、庾亮外镇、苏峻作乱的复杂乱局中，始终以太尉重臣调和朝野，成为皇室与士族共同的定海神针。",
    "deedsEn": "Fortified Jingkou, laying the military cradle for the famed Beifu Army; expertly balanced power struggles between Wang Dao and Yu Liang, serving as undisputed stabilizer.",
    "archetype": "civil",
    "fiveElements": {
      "dominant": "土",
      "secondary": "水"
    },
    "tenGodsAffinity": [
      "正官",
      "正印",
      "正财"
    ],
    "patternType": "正官格",
    "strengthAdviceZh": "在各方势力尖锐对立时，深耕独立军事与民意基本盘（如京口），以客观平衡者姿态掌控大局航向。",
    "strengthAdviceEn": "Build an independent sovereign base of strength; navigate conflicting factions from a position of calm, indispensable systemic balance.",
    "weaknessAdviceZh": "过度充当调停人和稀泥有时会延缓结构性矛盾的彻底解决，关键时刻需施展更果决的制度外科手术。",
    "weaknessAdviceEn": "Perpetual mediation risks prolonging latent structural fractures; be prepared to deliver definitive institutional reforms.",
    "historicalQuoteZh": "《晋书》评：郗公宏谋远略，镇抚淮扬，使三朝获宁，门阀有所依怙。",
    "historicalQuoteEn": "Book of Jin: Master Xi guarded the riverfront with profound foresight, bringing tranquility across three dynastic reigns.",
    "auxiliaryStrengthsZh": [
      "在各方势力尖锐对立时",
      "深耕独立军事与民意基本盘（如京口），以客观平衡者姿态掌控大局航向"
    ],
    "auxiliaryStrengthsEn": [
      "Build an independent sovereign base of strength",
      "navigate conflicting factions from a position of calm, indispensable systemic balance"
    ],
    "auxiliaryWeaknessesZh": [
      "过度充当调停人和稀泥有时会延缓结构性矛盾的彻底解决",
      "关键时刻需施展更果决的制度外科手术"
    ],
    "auxiliaryWeaknessesEn": [
      "Perpetual mediation risks prolonging latent structural fractures",
      "be prepared to deliver definitive institutional reforms"
    ]
  },
  {
    "id": "fan_zhen",
    "nameZh": "范缜",
    "nameEn": "Fan Zhen",
    "dynastyZh": "南朝 · 齐梁",
    "dynastyEn": "Southern Dynasties · Qi and Liang",
    "eraTag": "southern_dynasties",
    "eraNameZh": "南朝更迭",
    "eraNameEn": "Southern Dynasties Era",
    "positionZh": "尚书左丞 · 唯物主义思想巨擘 · 《神灭论》作者",
    "positionEn": "Vice Director of Imperial Secretariat · Great Materialist Philosopher · Author of Treatise on Extinction of the Soul",
    "personalityZh": "坚贞不屈、格物穷理、傲骨凛然、不阿权贵",
    "personalityEn": "Unshakeably intellectually rigorous, fearless truth-seeker, incorruptible under imperial pressure",
    "deedsZh": "在梁武帝举国崇佛、满朝卿贵倡导因果轮回的大势下，孤身撰写《神灭论》，以‘刃之于利，形之于神’击破神不灭论，一人舌战全朝六十余名高僧权臣，分毫不让。",
    "deedsEn": "Penned the epochal Treatise on Extinction of the Soul, courageously debating sixty royal courtiers and monks under Emperor Wu of Liang to defend rational materialism.",
    "archetype": "specialist",
    "fiveElements": {
      "dominant": "金",
      "secondary": "水"
    },
    "tenGodsAffinity": [
      "伤官",
      "偏印",
      "食神"
    ],
    "patternType": "伤官配印格",
    "strengthAdviceZh": "敢于在全社会盲从狂热的逆风中坚守理性逻辑与真理，以无懈可击的论辩体系傲立思想巅峰。",
    "strengthAdviceEn": "Dare to champion empirical reason and logical integrity against widespread mass frenzy; build ironclad philosophical clarity.",
    "weaknessAdviceZh": "过于锋芒毕露直击君王核心信仰，需在世俗官场中学会自我保护防范政治冷藏。",
    "weaknessAdviceEn": "Blunt direct challenge to an autocrat's theological obsessions risks political exile; blend ideological courage with tactful diplomacy.",
    "historicalQuoteZh": "《梁书》记：缜著《神灭论》，其辞峭厉，武帝乃使中书舍人讽之，缜曰：‘范缜落落如矸石，不可得转也！’",
    "historicalQuoteEn": "Book of Liang: Fan Zhen wrote the Treatise on Extinction of the Soul; pressured by royal courtiers, he replied: 'Fan Zhen is as unyielding as solid rock!'",
    "auxiliaryStrengthsZh": [
      "敢于在全社会盲从狂热的逆风中坚守理性逻辑与真理",
      "以无懈可击的论辩体系傲立思想巅峰"
    ],
    "auxiliaryStrengthsEn": [
      "Dare to champion empirical reason and logical integrity against widespread mass frenzy",
      "build ironclad philosophical clarity"
    ],
    "auxiliaryWeaknessesZh": [
      "过于锋芒毕露直击君王核心信仰",
      "需在世俗官场中学会自我保护防范政治冷藏"
    ],
    "auxiliaryWeaknessesEn": [
      "Blunt direct challenge to an autocrat's theological obsessions risks political exile",
      "blend ideological courage with tactful diplomacy"
    ]
  },
  {
    "id": "wang_sengbian",
    "nameZh": "王僧辩",
    "nameEn": "Wang Sengbian",
    "dynastyZh": "南朝 · 梁",
    "dynastyEn": "Southern Dynasties · Liang",
    "eraTag": "southern_dynasties",
    "eraNameZh": "南朝更迭",
    "eraNameEn": "Southern Dynasties Era",
    "positionZh": "太尉 · 车骑大将军 · 平定侯景之乱主帅",
    "positionEn": "Grand Commander · General of Chariots and Cavalry · Supreme Conqueror of Hou Jing",
    "personalityZh": "谋深虑远、善抚军心、外交迟疑、政治戒心不足",
    "personalityEn": "Methodical strategist, respected commander, yet politically naive and over-reliant on diplomacy",
    "deedsZh": "与陈霸先结盟共举义旗，水陆并进收复建康彻底平灭侯景叛乱，再造梁室；后因畏惧北齐兵势，妥协迎立萧渊明，未备陈霸先奇袭兵败被缢杀。",
    "deedsEn": "Allied with Chen Baxian to liberate Jiankang and crush Hou Jing's horrific rebellion; later misjudged Northern Qi threat, yielding to surprise attack by Chen.",
    "archetype": "military",
    "fiveElements": {
      "dominant": "土",
      "secondary": "火"
    },
    "tenGodsAffinity": [
      "正官",
      "正印",
      "正财"
    ],
    "patternType": "正官格",
    "strengthAdviceZh": "在平定危局的大决战中善于协同友军步步为营，以深厚军事威望聚拢四方义军。",
    "strengthAdviceEn": "Coordinate coalition partners methodically in high-stakes turnaround campaigns, building unshakeable field authority.",
    "weaknessAdviceZh": "在核心权力分享与君王废立大事上轻信政治盟友，内部防务空虚给果决对手留下闪电斩首窗口。",
    "weaknessAdviceEn": "Lax domestic vigilance and naive trust in ambitious junior partners creates a fatal window for lightning decapitation strikes.",
    "historicalQuoteZh": "《陈书》载：僧辩荡平巨寇，勋侔伊周，而晚节惑于和议，未防暴卒，悲夫！",
    "historicalQuoteEn": "Book of Chen: Wang Sengbian queller of monsters achieved heroic stature, yet misjudged dynastic security, perishing in tragic surprise.",
    "auxiliaryStrengthsZh": [
      "在平定危局的大决战中善于协同友军步步为营",
      "以深厚军事威望聚拢四方义军"
    ],
    "auxiliaryStrengthsEn": [
      "Coordinate coalition partners methodically in high-stakes turnaround campaigns",
      "building unshakeable field authority"
    ],
    "auxiliaryWeaknessesZh": [
      "在核心权力分享与君王废立大事上轻信政治盟友",
      "内部防务空虚给果决对手留下闪电斩首窗口"
    ],
    "auxiliaryWeaknessesEn": [
      "Lax domestic vigilance and naive trust in ambitious junior partners creates a fatal window for lightning decapitation strikes.",
      "Erects rigid ethical and behavioral safeguards against blindspots."
    ]
  },
  {
    "id": "xie_lingyun",
    "nameZh": "谢灵运",
    "nameEn": "Xie Lingyun (Duke of Kangle)",
    "dynastyZh": "南朝 · 宋",
    "dynastyEn": "Southern Dynasties · Song",
    "eraTag": "southern_dynasties",
    "eraNameZh": "南朝更迭",
    "eraNameEn": "Southern Dynasties Era",
    "positionZh": "康乐侯 · 秘书监 · 中国山水诗派鼻祖 · ‘天下才有一石，曹子建独占八斗，我得一斗’",
    "positionEn": "Duke of Kangle · Director of Imperial Library · Founding Patriarch of Chinese Landscape Poetry",
    "personalityZh": "狂傲不羁、才华盖世、寄情山水、蔑视世俗规训",
    "personalityEn": "Supremely arrogant, peerlessly poetic genius, intoxicated by sublime nature, defiant of political authority",
    "deedsZh": "出身陈郡谢氏顶级门阀，诗文超迈，开创中国文学史上影响深远的山水诗派；发明登山特制‘谢公屐’；性情孤傲难以见容于刘宋皇权，终因谋叛嫌疑被赐死广州。",
    "deedsEn": "Pioneered landscape poetry in Chinese literature; invented the spiked mountain-climbing 'Xie Clogs'; proud aristocratic spirit clashed with imperial power, leading to execution.",
    "archetype": "specialist",
    "fiveElements": {
      "dominant": "木",
      "secondary": "火"
    },
    "tenGodsAffinity": [
      "伤官",
      "食神",
      "偏财"
    ],
    "patternType": "食神吐秀格",
    "strengthAdviceZh": "将磅礴艺术感知力与大自然神韵深度链接，以开山立派的原创新作在文明史册中定格永恒印记。",
    "strengthAdviceEn": "Harness transcendent creative inspiration to pioneer an entirely new genre, stamping an everlasting seal on cultural history.",
    "weaknessAdviceZh": "目空一切、出言无忌以及对政治体制的公然蔑视，极易招致国家机器的无情扑杀。",
    "weaknessAdviceEn": "Unbounded arrogance and overt disdain for ruling political authority inevitably invites lethal suppression.",
    "historicalQuoteZh": "《宋书》评：灵运兴会标举，诗冠江南，自谓才气超世，然肆意傲物，卒不免其祸。",
    "historicalQuoteEn": "Book of Song: Xie Lingyun's poetic vision eclipsed Jiangnan; yet boundless pride and contempt for state authority authored his execution.",
    "auxiliaryStrengthsZh": [
      "将磅礴艺术感知力与大自然神韵深度链接",
      "以开山立派的原创新作在文明史册中定格永恒印记"
    ],
    "auxiliaryStrengthsEn": [
      "Harness transcendent creative inspiration to pioneer an entirely new genre",
      "stamping an everlasting seal on cultural history"
    ],
    "auxiliaryWeaknessesZh": [
      "目空一切、出言无忌以及对政治体制的公然蔑视",
      "极易招致国家机器的无情扑杀"
    ],
    "auxiliaryWeaknessesEn": [
      "Unbounded arrogance and overt disdain for ruling political authority inevitably invites lethal suppression.",
      "Erects rigid ethical and behavioral safeguards against blindspots."
    ]
  },
  {
    "id": "zu_chongzhi",
    "nameZh": "祖冲之",
    "nameEn": "Zu Chongzhi",
    "dynastyZh": "南朝 · 宋齐",
    "dynastyEn": "Southern Dynasties · Song and Qi",
    "eraTag": "southern_dynasties",
    "eraNameZh": "南朝更迭",
    "eraNameEn": "Southern Dynasties Era",
    "positionZh": "公府参军 · 长水校尉 · 世界杰出数学家 · 天文学家 · 机械工程宗师",
    "positionEn": "Adjutant of Ducal Office · Colonel of Changshui · World-Historic Mathematician & Astronomer",
    "personalityZh": "求真务实、精益求精、极具理性严谨思维与工程钻研精神",
    "personalityEn": "Empirical, relentlessly meticulous, possessing supreme mathematical rigor and engineering brilliance",
    "deedsZh": "将圆周率精确推算至小数点后第七位（3.1415926至3.1415927之间），领先世界近千年；编撰无比精密的《大明历》，发明水碓磨、千里船、指南车。",
    "deedsEn": "Calculated Pi to 7 decimal places (leading global mathematics by a millennium); compiled the accurate Daming Calendar; engineered water mills and south-pointing chariots.",
    "archetype": "specialist",
    "fiveElements": {
      "dominant": "水",
      "secondary": "金"
    },
    "tenGodsAffinity": [
      "偏印",
      "食神",
      "正官"
    ],
    "patternType": "正印格",
    "strengthAdviceZh": "以绝对求真与数理精密的工匠精神深潜核心底层算法，用超越时代的硬核科技构筑世界级壁垒。",
    "strengthAdviceEn": "Dive into fundamental algorithmic truth and extreme mathematical precision, engineering generational competitive moats.",
    "weaknessAdviceZh": "先进历法与科技成果常遭受守旧官僚戴法兴等人的无端打压，需善于运用详实数据与天象实测公开辩驳捍卫真理。",
    "weaknessAdviceEn": "Pioneering technological breakthroughs face reactionary bureaucratic resistance; defend truth with irrefutable empirical data.",
    "historicalQuoteZh": "《南齐书》载：冲之算数精奇，神解天测，造《大明历》，算圆周毫厘不爽，千载宗仰。",
    "historicalQuoteEn": "Book of Southern Qi: Zu Chongzhi's mathematical computations were miraculous, piercing astronomical heavens and calculating Pi to perfection.",
    "auxiliaryStrengthsZh": [
      "以绝对求真与数理精密的工匠精神深潜核心底层算法",
      "用超越时代的硬核科技构筑世界级壁垒"
    ],
    "auxiliaryStrengthsEn": [
      "Dive into fundamental algorithmic truth and extreme mathematical precision",
      "engineering generational competitive moats"
    ],
    "auxiliaryWeaknessesZh": [
      "先进历法与科技成果常遭受守旧官僚戴法兴等人的无端打压",
      "需善于运用详实数据与天象实测公开辩驳捍卫真理"
    ],
    "auxiliaryWeaknessesEn": [
      "Pioneering technological breakthroughs face reactionary bureaucratic resistance",
      "defend truth with irrefutable empirical data"
    ]
  },
  {
    "id": "erzhu_zhao",
    "nameZh": "尔朱兆",
    "nameEn": "Erzhu Zhao",
    "dynastyZh": "北魏",
    "dynastyEn": "Northern Wei",
    "eraTag": "northern_wei",
    "eraNameZh": "北魏胡汉",
    "eraNameEn": "Northern Wei Dynastic Era",
    "positionZh": "大将军 · 颍川王 · 尔朱家族铁骑统领",
    "positionEn": "General-in-Chief · Prince of Yingchuan · Supreme Iron Cavalry Leader of Erzhu Clan",
    "personalityZh": "勇冠三军、悍厉粗豪、刚愎少谋、驭众寡恩",
    "personalityEn": "Peerlessly ferocious cavalry champion, brash, tactically unrefined, lacking political vision",
    "deedsZh": "尔朱荣侄，在河阴之变后掌握兵权；尔朱荣被诛后率铁骑冒雪涉渡黄河奇袭洛阳俘杀元子攸；后在韩陵之战被高欢击溃，自缢于赤谼岭。",
    "deedsEn": "Erzhu Rong's fierce nephew who stormed across frozen Yellow River to sack Luoyang; later outwitted and crushed by Gao Huan at Hanling.",
    "archetype": "military",
    "fiveElements": {
      "dominant": "金",
      "secondary": "火"
    },
    "tenGodsAffinity": [
      "七杀",
      "劫财",
      "偏官"
    ],
    "patternType": "七杀格",
    "strengthAdviceZh": "敢于在最恶劣天候与意想不到的地点实施闪电长途奔袭，打出令敌胆寒的绝对破局速度。",
    "strengthAdviceEn": "Execute lightning raids across harsh weather and unexpected terrain to break stalemates through raw speed.",
    "weaknessAdviceZh": "仅凭个人蛮勇与部众凶悍，缺乏政治宽容与战略同盟建设，终在多方博弈中被高维智力对手分化瓦解。",
    "weaknessAdviceEn": "Relying purely on violent ferocity without diplomatic diplomacy or institutional alliance leaves one vulnerable to strategic outmaneuvering.",
    "historicalQuoteZh": "《魏书》评：兆手格猛兽，骁勇过人，跨冰涉河破洛，然凶狡无虑，覆败宜矣。",
    "historicalQuoteEn": "Book of Wei: Erzhu Zhao could wrestle wild beasts with bare hands and charged across frozen rivers, yet brutal rashness invited swift destruction.",
    "auxiliaryStrengthsZh": [
      "敢于在最恶劣天候与意想不到的地点实施闪电长途奔袭",
      "打出令敌胆寒的绝对破局速度"
    ],
    "auxiliaryStrengthsEn": [
      "Execute lightning raids across harsh weather and unexpected terrain to break stalemates through raw speed.",
      "Leverages core natural talents to pierce strategic bottlenecks."
    ],
    "auxiliaryWeaknessesZh": [
      "仅凭个人蛮勇与部众凶悍",
      "缺乏政治宽容与战略同盟建设，终在多方博弈中被高维智力对手分化瓦解"
    ],
    "auxiliaryWeaknessesEn": [
      "Relying purely on violent ferocity without diplomatic diplomacy or institutional alliance leaves one vulnerable to strategic outmaneuvering.",
      "Erects rigid ethical and behavioral safeguards against blindspots."
    ]
  },
  {
    "id": "yang_su",
    "nameZh": "杨素",
    "nameEn": "Yang Su (Duke of Chu)",
    "dynastyZh": "隋朝",
    "dynastyEn": "Sui Dynasty",
    "eraTag": "sui",
    "eraNameZh": "大隋一统",
    "eraNameEn": "Sui Dynasty Era",
    "positionZh": "司徒 · 尚书令 · 楚国公 · 灭陈统帅 · 隋室第一战神宰相",
    "positionEn": "Grand Minister over the Masses · Director of Imperial Secretariat · Duke of Chu · Supreme Conqueror of Chen",
    "personalityZh": "文武双全、雄沉阴鸷、治军严苛、算无遗策",
    "personalityEn": "Equally consummate in sword and brush, cold-blooded tactical genius, iron disciplinarian, peerless strategist",
    "deedsZh": "督造五牙大舰顺三峡破陈军水栅，攻灭南陈立首功；北击突厥以骑对骑大破达头可汗；辅佐杨广夺嫡平叛，战必胜攻必取，名震海内。",
    "deedsEn": "Built colossal 'Five-Tooth' flagships to crush Chen dynasty naval defenses; shattered the Western Turkic Khaganate using cavalry shock tactics; undefeated general of Sui.",
    "archetype": "executive",
    "fiveElements": {
      "dominant": "水",
      "secondary": "金"
    },
    "tenGodsAffinity": [
      "七杀",
      "偏印",
      "伤官"
    ],
    "patternType": "七杀格",
    "strengthAdviceZh": "把重装工程技术创新（如五牙大舰）与严明无情的团队执行力融为一体，打造坚不可摧的降维打击杀手锏。",
    "strengthAdviceEn": "Combine cutting-edge engineering innovation with ruthless execution discipline to create unassailable asymmetric market dominance.",
    "weaknessAdviceZh": "深涉皇位废立夺嫡旋涡，功高震主引发君王极度猜忌，晚年自知难免而忧惧抱病。",
    "weaknessAdviceEn": "Deep entanglement in royal succession struggles and supreme overshadowing prestige will ignite fatal sovereign paranoia.",
    "historicalQuoteZh": "《隋书》评：素兼资文武，志度英拔，督师所向，无不如志，造五牙顺江，江南底定，实当代第一雄才。",
    "historicalQuoteEn": "Book of Sui: Yang Su was supremely gifted in sword and brush; his Five-Tooth flagships settled the Yangtze, crowned as the premier titan of his age.",
    "auxiliaryStrengthsZh": [
      "把重装工程技术创新（如五牙大舰）与严明无情的团队执行力融为一体",
      "打造坚不可摧的降维打击杀手锏"
    ],
    "auxiliaryStrengthsEn": [
      "Combine cutting-edge engineering innovation with ruthless execution discipline to create unassailable asymmetric market dominance.",
      "Leverages core natural talents to pierce strategic bottlenecks."
    ],
    "auxiliaryWeaknessesZh": [
      "深涉皇位废立夺嫡旋涡",
      "功高震主引发君王极度猜忌，晚年自知难免而忧惧抱病"
    ],
    "auxiliaryWeaknessesEn": [
      "Deep entanglement in royal succession struggles and supreme overshadowing prestige will ignite fatal sovereign paranoia.",
      "Erects rigid ethical and behavioral safeguards against blindspots."
    ]
  }
];

// CommonJS export for Node / tests
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { HISTORICAL_FIGURES };
}

// Browser global
if (typeof window !== 'undefined') {
  window.HISTORICAL_FIGURES = HISTORICAL_FIGURES;
}
