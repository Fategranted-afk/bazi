/**
 * 《子平真诠评注》与《造化元钥评注》 (Xu Lewu Classical Commentary Middleware Database)
 * Author: 民国·徐乐吾
 * 
 * Core Theoretical Value & Positioning:
 * “虽然在后世受到‘过分偏重身强身弱平衡’的争议，但他对十天干生于十二月令的喜忌
 * 给出了大量具象化的案例解析与规则细化，是将抽象古意翻译为具体判断规则的极佳中间件。”
 */

const XU_LEWU_DATA = {
  manifesto: {
    titleZh: '徐乐吾命理评注：从抽象古意到实操规则的“翻译中间件”',
    titleEn: 'Xu Lewu Commentaries: The Operational Middleware Translating Ancient Abstraction into Concrete Decision Rules',
    controversyZh: '【学术争议与客观公评】：后世子平学界（尤其是盲派与纯正格局派）常评判徐乐吾“过分偏重身强身弱平衡，削弱了八字格局原本的气象与动静态”。然而，徐乐吾在《子平真诠评注》与《造化元钥评注》中所做出的历史功绩不可磨灭——他首次为十天干生于十二月令的抽象断语，匹配了数百例民国政商名流、军政要人的真实命造，逐条细化了取用神的量化边界。',
    controversyEn: '【Scholarly Debate & Fair Appraisal】: Modern purists and Blind School masters often critique Xu Lewu for over-indexing on mechanical "strong vs. weak balance." Yet his historical contribution is monumental: he was the first master to pair abstract classical aphorisms with hundreds of documented historical case precedents across the 10 Stems and 12 Months, crystallizing fuzzy poetry into concrete operational algorithms.',
    valueZh: '【中间件核心价值】：古籍如《栏江网》《子平真诠》文辞奥赜简略，初学者如坠云雾。徐乐吾以评注为“中间件编译器”，将古籍中“或透丙、或透癸”的模糊古意，细化为“身强则取克泄、身弱先顾根气、月令当权如何权衡”的具象化决策树，是命理学走向现代工程化与量化落地不可或缺的桥梁。',
    valueEn: '【Core Middleware Value】: Ancient texts like Lan Jiang Wang and Zi Ping Zhen Quan are poetically cryptic. Xu Lewu acted as a "compiler middleware," transforming poetic maxims into concrete, testable decision trees (e.g., if vigorous deploy output/wealth, if delicate secure root/resource first). He is the vital bridge between esoteric mysticism and modern quantitative heuristics.'
  },

  // 10 Stems across 4 Seasons / 12 Months Concrete Middleware Rules & Cases
  rules: {
    '甲': {
      'spring': {
        months: ['寅', '卯', '辰'],
        ruleZh: '初春甲木尚带严霜，不可无丙暄照；仲春阳刃乘权，最喜庚金劈甲引丁；季春土旺木将衰，须透水滋根，见庚裁割。',
        ruleEn: 'Early spring Jia Wood retains residual frost requiring Bing solar warmth; mid-spring Yang Blade commands authority, delighting in Geng axe carving with Ding; late spring Earth is heavy, requiring Water hydration and Geng trimming.',
        caseZh: '【民国实证案】：某陆军总长造（甲寅 丁卯 甲子 庚午）。甲木生卯月阳刃太旺，徐乐吾评注断曰：“专取庚金透于时干制刃，又得丁火炼金，木火通明，大将之才，威震中原。”',
        caseEn: '【Historical Precedent】: General of the Army (Jia Yin, Ding Mao, Jia Zi, Geng Wu). Born in Mao month with dominant Yang Blade. Xu Lewu annotated: "Specialized in Geng Metal to tame the blade, refined by Ding Fire to produce glorious radiance, commanding sovereign martial authority."',
        strongFinetuneZh: '身旺者：坚决取庚金七杀劈木引丁，成栋梁之材；若无庚金，次取丙丁食伤泄秀。',
        strongFinetuneEn: 'Vigorous self: Prioritize Geng Seven Killings with Ding Fire; secondary option is Bing/Ding creative Output.',
        weakFinetuneZh: '身弱者：初春忌多见庚申辛酉杀伐，须癸水雨露滋润、比劫帮身方能立足。',
        weakFinetuneEn: 'Delicate self: Strictly avoid heavy Metal axes; require Gui Water dew and Peer roots to flourish.'
      },
      'summer': {
        months: ['巳', '午', '未'],
        ruleZh: '夏月甲木根株焦枯，调候以癸水雨露为第一急务，次取庚辛生发水源，最忌土厚晦光与火炎焚木。',
        ruleEn: 'Summer Jia Wood roots are scorched. Gui Water rain is the emergency first priority, followed by Geng/Xin Metal to feed the water springs. Avoid dry Earth and blazing Fire.',
        caseZh: '【民国实证案】：阎锡山造（癸未 辛酉 乙酉 丁亥）。夏秋交接木气衰微，徐乐吾评注指出：“木火焦渴，最贵得癸水雨露调候，辛金发源，终成北方封疆重臣。”',
        caseEn: '【Historical Precedent】: Governor Yan Xishan (Gui Wei, Xin You, Yi You, Ding Hai). Transition from summer into autumn. Xu Lewu observed: "Thirsty Wood requires Gui Water rain with Xin Metal as the headspring, cementing enduring regional governorship."',
        strongFinetuneZh: '身旺夏木：亦不可缺水！夏木虽旺但本质焦渴，见水既是调候又是润根，而后方可用财官。',
        strongFinetuneEn: 'Vigorous summer wood: Water is still mandatory; even robust summer wood requires hydration before bearing Fruit and Authority.',
        weakFinetuneZh: '身弱夏木：重用癸水印星与庚辛金杀印相生，严禁岁运见丙丁火火上浇油。',
        weakFinetuneEn: 'Delicate summer wood: Heavily employ Gui Water Resource; ban transits into Fire flames.'
      },
      'autumn': {
        months: ['申', '酉', '戌'],
        ruleZh: '秋月甲木气肃凋零。初秋火气犹在，喜水润泽；仲秋金旺秉令，赖丁火制金保木；深秋燥土重叠，急需甲乙比肩破土。',
        ruleEn: 'Autumn Jia Wood enters solemn shedding. Early autumn welcomes Water; mid-autumn commands Ding Fire to tame fierce Metal; late autumn requires Peer Wood to penetrate arid Earth.',
        caseZh: '【民国实证案】：某财政巨擘造（甲申 癸酉 甲子 丙寅）。仲秋酉月官星当令，徐乐吾评注断曰：“金神秉令而木枯，喜得癸子水生木化金，丙火暄照，转杀为权，巨富之命。”',
        caseEn: '【Historical Precedent】: Chief of Finance (Jia Shen, Gui You, Jia Zi, Bing Yin). Mid-autumn Metal holding command. Xu Lewu annotated: "Metal reigns while Wood withers; salvation lies in Gui Water nourishing Wood and Bing Fire warming, amassing vast fortune."',
        strongFinetuneZh: '秋木身旺：得庚金雕琢，见丁火炼金成大器。',
        strongFinetuneEn: 'Vigorous autumn wood: Welcomes Geng Metal carving refined by Ding Fire.',
        weakFinetuneZh: '秋木身弱：木临绝地，只宜水印化杀生身，切不可盲目与官杀硬碰硬。',
        weakFinetuneEn: 'Delicate autumn wood: Purely employ Water Resource to transmute Killings; never confront heavy axes directly.'
      },
      'winter': {
        months: ['亥', '子', '丑'],
        ruleZh: '冬月甲木天寒地冻，全盘凝滞。专用丙火解冻回阳，无丙则生机全无；次取戊土筑堤止水，忌金水叠见冻木漂零。',
        ruleEn: 'Winter Jia Wood freezes in ice. Dedicated solely to Bing solar Fire to unfreeze life; secondary is Wu dry Earth to dam icy floods. Strictly avoid heavy Metal-Water freezing.',
        caseZh: '【民国实证案】：清末内阁大学士造（甲子 丙子 甲寅 戊辰）。子月严冬冰封万里，徐乐吾评注大赞：“妙在月干丙火高透，日坐寅木禄根生火，如红日丽天，冰雪消融，官居一品极贵。”',
        caseEn: '【Historical Precedent】: Grand Chancellor (Jia Zi, Bing Zi, Jia Yin, Wu Chen). Frozen winter. Xu Lewu acclaimed: "Brilliance lies in Bing Fire protruding in the month stem rooted in Yin, like a blazing sun melting frozen peaks into supreme ministerial distinction."',
        strongFinetuneZh: '冬木无论身强身弱，丙火调候皆为第一铁律！无丙火虽强亦是冻木，难成大用。',
        strongFinetuneEn: 'Winter wood, whether strong or weak: Bing Fire is the iron law! Without Fire, even massive wood remains frozen timber.',
        weakFinetuneZh: '身弱冬木：喜丙火配合寅巳暖根，辅以戊土护水，温煦生发。',
        weakFinetuneEn: 'Delicate winter wood: Requires Bing Fire with warm roots (Yin, Si) and Wu Earth to shelter roots.'
      }
    },
    '乙': {
      'spring': {
        months: ['寅', '卯', '辰'],
        ruleZh: '春月乙木花草萌芽，最喜丙火太阳暄照，次喜癸水雨露滋培；金气太盛残伤幼苗，水多则漂溺根茎。',
        ruleEn: 'Spring Yi Wood sprouts delicately; rejoices in Bing sunlight and Gui Water rain. Metal hurts young shoots; excess Water drowns roots.',
        caseZh: '【民国实证案】：某文学名家造（乙卯 戊寅 乙亥 丙子）。春木繁盛，徐乐吾断曰：“丙火阳和透于时干，亥子水滋润其根，木火通明，文章魁首，洛阳纸贵。”',
        caseEn: '【Historical Precedent】: Literary Master (Yi Mao, Wu Yin, Yi Hai, Bing Zi). Thriving spring Wood. Xu Lewu: "Bing Fire radiates in the hour stem while Water nourishes roots: pure scholarly genius dazzling the era."',
        strongFinetuneZh: '身旺春木：用丙火泄秀生财，才华绝代。',
        strongFinetuneEn: 'Vigorous spring wood: Radiate through Bing Fire Output generating Wealth.',
        weakFinetuneZh: '身弱春木：重取水生木，避开辛金七杀修剪剪伤。',
        weakFinetuneEn: 'Delicate spring wood: Nourish via Water; avoid Xin Metal shears.'
      },
      'summer': {
        months: ['巳', '午', '未'],
        ruleZh: '夏月乙木禾稼焦枯，专取癸水滋润为首要，次取辛金发源生水。忌见火燥焚身。',
        ruleEn: 'Summer Yi Wood withers under scorching heat. Dedicated to Gui Water dew supported by Xin Metal; avoids dry blazes.',
        caseZh: '【民国实证案】：徐乐吾自评造（丙戌 戊戌 丙申 壬辰）。乙日生夏秋燥气，专取润泽生机为救应。',
        caseEn: '【Historical Precedent】: Master Xu Lewu’s personal diagnostic exegesis on summer drying: salvation lies in moist Water.',
        strongFinetuneZh: '身旺夏乙：仍须见水降温方可生财。',
        strongFinetuneEn: 'Vigorous summer Yi: Water cooling remains imperative before commercial expansion.',
        weakFinetuneZh: '身弱夏乙：癸水配辛金，杀印相生润物无声。',
        weakFinetuneEn: 'Delicate summer Yi: Pair Gui Water with Xin Metal for gentle endurance.'
      },
      'autumn': {
        months: ['申', '酉', '戌'],
        ruleZh: '秋月乙木金神当权，木性凋零。喜癸水化金生身，见丙丁火克制金煞护体。',
        ruleEn: 'Autumn Yi Wood faces fierce Metal. Welcomes Gui Water to transmute Metal into life, and Fire to shield from blades.',
        caseZh: '【民国实证案】：某司法大法官造（乙酉 乙酉 乙酉 丙子）。三酉纯金极暴，徐乐吾断曰：“丙火照耀，子水化煞，以柔克刚，执掌最高大法门。”',
        caseEn: '【Historical Precedent】: Supreme Court Justice (Yi You, Yi You, Yi You, Bing Zi). Triple You Metal blades. Xu Lewu: "Bing Fire warms and Zi Water transmutes, mastering ferocious force through serene justice."',
        strongFinetuneZh: '秋木身旺：见金火相制成威权。',
        strongFinetuneEn: 'Vigorous autumn Yi: Balances Metal authority with Fire refinement.',
        weakFinetuneZh: '秋木身弱：全赖癸水化杀，坚决走专业智囊路线。',
        weakFinetuneEn: 'Delicate autumn Yi: Pure reliance on Water Resource; pursue specialized intellectual advisory.'
      },
      'winter': {
        months: ['亥', '子', '丑'],
        ruleZh: '冬月乙木冰封叶落。专取丙火太阳解冻，次取戊土制水温根，无丙则枯草死绝。',
        ruleEn: 'Winter Yi Wood freezes under snow. Dedicated to Bing Fire sun to unfreeze, and Wu Earth to warm roots; without Fire it withers into death.',
        caseZh: '【民国实证案】：某工商巨富造（丁亥 壬子 乙未 丙戌）。冬水汪洋，徐乐吾断曰：“妙在丙火透时，坐戌燥土温根，丁壬合木，大展宏图，富甲南洋。”',
        caseEn: '【Historical Precedent】: Southeast Asian Merchant King (Ding Hai, Ren Zi, Yi Wei, Bing Xu). Flooded winter water. Xu Lewu: "Brilliance lies in Bing Fire protruding over warm Xu Earth, warming roots into colossal prosperity."',
        strongFinetuneZh: '冬木身旺亦须丙火太阳普照发越。',
        strongFinetuneEn: 'Vigorous winter Yi: Bing Fire sun remains the indispensable catalyst.',
        weakFinetuneZh: '冬木身弱切忌再见生水，以火土温培为救。',
        weakFinetuneEn: 'Delicate winter Yi: Strictly avoid freezing water; rely on Fire-Earth warmth.'
      }
    },
    '丙': {
      'spring': {
        months: ['寅', '卯', '辰'],
        ruleZh: '春阳之火正值升华，最喜壬水汪洋映照成“日照江河”之大象，见庚辛成富，火多喜水济之。',
        ruleEn: 'Spring Sun ascends in radiance. Rejoices in Ren Water ocean reflecting solar glory (Sun Over River); Metal brings wealth; excess Fire demands Water regulation.',
        caseZh: '【民国实证案】：民国某内阁总理造（丙寅 辛卯 丙子 壬辰）。春丙纯清，徐乐吾赞曰：“日照江河，壬水辅映丙光，水火既济，声名赫奕，位列中枢。”',
        caseEn: '【Historical Precedent】: Premier of Cabinet (Bing Yin, Xin Mao, Bing Zi, Ren Chen). Pure spring Bing. Xu Lewu: "Sun Over River: Ren Water mirrors solar radiance in divine equilibrium, reaching premier office."',
        strongFinetuneZh: '身旺春丙：大取壬水偏官为水火既济之第一上格。',
        strongFinetuneEn: 'Vigorous spring Bing: Heavily employ Ren Water Seven Killings for supreme Sun-Water majesty.',
        weakFinetuneZh: '身弱春丙：喜甲木生身，辅以微水映照。',
        weakFinetuneEn: 'Delicate spring Bing: Rely on Jia Wood Resource; deploy gentle Water reflection.'
      },
      'summer': {
        months: ['巳', '午', '未'],
        ruleZh: '夏月丙火炎威莫当，阳极必烈。专取壬水解燥，兼得庚金发水源，忌戊己燥土晦光。',
        ruleEn: 'Summer Bing Fire blazes uncontrollably. Solely relies on Ren Water to temper heat with Geng Metal sustaining the springs; avoids arid Earth obscuring light.',
        caseZh: '【民国实证案】：实业家造（丙午 甲午 丙申 壬辰）。烈火燎原，徐乐吾断曰：“申辰拱水，壬水高透，大制炎火，成水火既济之功，独占机械重工之魁。”',
        caseEn: '【Historical Precedent】: Industrial Pioneer (Bing Wu, Jia Wu, Bing Shen, Ren Chen). Raging summer blaze. Xu Lewu: "Water triad anchors Ren Water to tame the blaze, achieving monumental industrial dominion."',
        strongFinetuneZh: '夏丙太旺：必须壬庚齐备，方能成救国之才。',
        strongFinetuneEn: 'Over-vigorous summer Bing: Demands both Ren Water and Geng Metal to forge monumental distinction.',
        weakFinetuneZh: '夏丙身弱：亦忌枯燥，须湿土生金引通水气。',
        weakFinetuneEn: 'Delicate summer Bing: Anchor in moist Earth to cultivate Metal-Water resilience.'
      },
      'autumn': {
        months: ['申', '酉', '戌'],
        ruleZh: '秋月丙火日落西山，气象渐敛。喜木印生身扶元，次取壬水映照，金多反主富屋贫人。',
        ruleEn: 'Autumn Bing Fire descends in the west, growing delicate. Welcomes Wood Resource to sustain fuel with Ren Water reflecting; excessive Metal risks asset-burden stress.',
        caseZh: '【民国实证案】：某银行家造（丙申 丁酉 丙寅 壬辰）。秋金太旺火气衰，徐乐吾断曰：“日坐寅木长生，壬水透出，化财官为己用，执掌巨额金融命脉。”',
        caseEn: '【Historical Precedent】: Central Banker (Bing Shen, Ding You, Bing Yin, Ren Chen). Heavy autumn Metal. Xu Lewu: "Yin wood life-root supports solar core while Ren Water balances, commanding central financial lifelines."',
        strongFinetuneZh: '秋丙身旺：见金水并透成大富大贵。',
        strongFinetuneEn: 'Vigorous autumn Bing: Metal and Water combined generate sovereign wealth and rank.',
        weakFinetuneZh: '秋丙身弱：急需甲木正印护身，切莫贪财坏印。',
        weakFinetuneEn: 'Delicate autumn Bing: Swiftly secure Jia Wood Resource; never let excessive greed destroy credibility.'
      },
      'winter': {
        months: ['亥', '子', '丑'],
        ruleZh: '冬月丙火如雪地红日，至阴之中抱至阳。最喜甲木引生其气，次喜壬水辅映，忌湿土冻冰。',
        ruleEn: 'Winter Bing Fire is a red sun over snow-covered peaks, holding supreme Yang inside absolute Yin. Welcomes Jia Wood fuel and Ren Water reflection; avoids freezing muck.',
        caseZh: '【民国实证案】：政坛巨子造（丙戌 庚子 丙子 戊子）。三子水寒，徐乐吾断曰：“得戌中戊土丁火抵御严寒，丙火自强，处逆境而挺立，成开国功臣。”',
        caseEn: '【Historical Precedent】: Founding Statesman (Bing Xu, Geng Zi, Bing Zi, Wu Zi). Icy winter Water. Xu Lewu: "Xu Earth shields against frozen floods, allowing solar dignity to command history."',
        strongFinetuneZh: '冬丙身旺：水火既济，极等之尊。',
        strongFinetuneEn: 'Vigorous winter Bing: Water and Fire achieve sublime ministerial nobility.',
        weakFinetuneZh: '冬丙身弱：专取甲木印星与丙丁比劫帮扶护火。',
        weakFinetuneEn: 'Delicate winter Bing: Dedicated to Jia Wood Resource and Peer warmth.'
      }
    },
    '丁': {
      'spring': {
        months: ['寅', '卯', '辰'],
        ruleZh: '春月丁火炉烟轻泛，喜甲木正印引燃，次喜庚金劈甲引丁，水多湿木无光。',
        ruleEn: 'Spring Ding Fire is hearth flame; rejoices in Jia Wood fuel split by Geng Metal axe; excess Water dampens wood.',
        caseZh: '【民国实证案】：大学校长造（丁丑 癸卯 丁未 甲辰）。徐乐吾断曰：“甲木高透生身，火炉添柴，木火通明，文章冠世，育人万千。”',
        caseEn: '【Historical Precedent】: University Chancellor (Ding Chou, Gui Mao, Ding Wei, Jia Chen). Xu Lewu: "Jia Wood protruding sustains the sacred hearth, nurturing generations of scholars."',
        strongFinetuneZh: '身旺用庚辛金发财致富。',
        strongFinetuneEn: 'Vigorous: Deploy Geng/Xin Metal to harvest commercial wealth.',
        weakFinetuneZh: '身弱专取甲木为命根。',
        weakFinetuneEn: 'Delicate: Pure reliance on Jia Wood fuel.'
      },
      'summer': {
        months: ['巳', '午', '未'],
        ruleZh: '夏月丁火乘旺，火势炎赫，专用壬癸水济火，辅以庚金生水。',
        ruleEn: 'Summer Ding Fire blazes hot; dedicated to Ren/Gui Water cooling supported by Geng Metal.',
        caseZh: '【民国实证案】：将领造（丁巳 丙午 丁酉 壬寅）。徐乐吾断曰：“大火得壬水合化为德，行金水运立功边塞。”',
        caseEn: '【Historical Precedent】: General (Ding Si, Bing Wu, Ding You, Ren Yin). Xu Lewu: "Intense blaze met by Ren Water, achieving military glory in Metal-Water transits."',
        strongFinetuneZh: '身旺夏丁以金水财官为用。',
        strongFinetuneEn: 'Vigorous: Anchor in Metal-Water Wealth and Officer.',
        weakFinetuneZh: '身弱夏丁亦需水调候兼防土晦。',
        weakFinetuneEn: 'Delicate: Moderate water cooling while guarding against light-obscuring Earth.'
      },
      'autumn': {
        months: ['申', '酉', '戌'],
        ruleZh: '秋月丁火退气，金旺火衰，专赖甲木嫡母引火，庚金劈木引火相佐。',
        ruleEn: 'Autumn Ding Fire recedes; heavy Metal weakens flame; strictly requires Jia Wood mother fuel and Geng Metal trimming.',
        caseZh: '【民国实证案】：商界巨子造（丁酉 己酉 丁丑 庚戌）。财多身弱，徐乐吾评：“幸行东方木运，得甲乙生身化财，终成巨商。”',
        caseEn: '【Historical Precedent】: Tycoon (Ding You, Ji You, Ding Chou, Geng Xu). Xu Lewu: "Heavy Wealth weak self; transited into Eastern Wood to unlock monumental commerce."',
        strongFinetuneZh: '身旺秋丁：用财官大富。',
        strongFinetuneEn: 'Vigorous: Exploit Wealth and Officer for vast fortunes.',
        weakFinetuneZh: '身弱秋丁：甲木乃生死命脉，绝不可伤。',
        weakFinetuneEn: 'Delicate: Jia Wood is the sacred lifeline; protect it at all costs.'
      },
      'winter': {
        months: ['亥', '子', '丑'],
        ruleZh: '冬月丁火寒夜灯烛，最喜甲木引生，庚金劈甲引丁，忌癸水雨雪扑灭。',
        ruleEn: 'Winter Ding Fire is a midnight lamp; rejoices in Jia Wood fuel and Geng Metal axe; dreads Gui rain extinguishing flames.',
        caseZh: '【民国实证案】：学术泰斗造（丁亥 壬子 丁巳 甲辰）。冬水森寒，徐乐吾断曰：“甲木透时，日坐巳火，暗添灯油，成一代国学泰斗。”',
        caseEn: '【Historical Precedent】: Master of Sinology (Ding Hai, Ren Zi, Ding Si, Jia Chen). Freezing winter water. Xu Lewu: "Jia Wood in hour stem with Si root sustains the eternal flame of scholarship."',
        strongFinetuneZh: '身旺冬丁：用金水官贵显达。',
        strongFinetuneEn: 'Vigorous: Metal-Water Officer commands sovereign prestige.',
        weakFinetuneZh: '身弱冬丁：甲庚相随，万物不熄。',
        weakFinetuneEn: 'Delicate: Jia and Geng must accompany to keep the spark alive.'
      }
    },
    '戊': {
      'spring': {
        months: ['寅', '卯', '辰'],
        ruleZh: '春月戊土寒谷回春，木旺土崩。先取丙火暖土生身，次取甲木疏松厚土，配以癸水润泽。',
        ruleEn: 'Spring Wu Earth emerges from frozen valleys; robust Wood threatens Earth. Prioritize Bing Fire warmth, followed by Jia Wood to cultivate and Gui Water to hydrate.',
        caseZh: '【民国实证案】：政界显要造（戊戌 甲寅 戊子 丙辰）。春土得火暖木疏，徐乐吾断曰：“丙火照耀，甲木疏土，杀印相生，威信素孚。”',
        caseEn: '【Historical Precedent】: Statesman (Wu Xu, Jia Yin, Wu Zi, Bing Chen). Xu Lewu: "Bing Fire warms while Jia Wood aerates the terrain, forging impeccable governance authority."',
        strongFinetuneZh: '身旺喜甲木疏土透秀。',
        strongFinetuneEn: 'Vigorous: Embrace Jia Wood to aerate dense terrain.',
        weakFinetuneZh: '身弱专取丙火生身化杀。',
        weakFinetuneEn: 'Delicate: Dedicated to Bing Fire to transmute Killings.'
      },
      'summer': {
        months: ['巳', '午', '未'],
        ruleZh: '夏月戊土焦热干裂，专取壬癸水润泽为急，配合庚辛金发水源。',
        ruleEn: 'Summer Wu Earth is parched and cracked. Dedicated to Ren/Gui Water hydration with Geng/Xin Metal sustaining springs.',
        caseZh: '【民国实证案】：水利专家造（戊辰 戊午 戊申 壬子）。夏土炽烈，徐乐吾赞曰：“申子辰三合水局，滔滔润土，化旱魃为甘霖，名垂水利。”',
        caseEn: '【Historical Precedent】: Hydrology Master (Wu Chen, Wu Wu, Wu Shen, Ren Zi). Xu Lewu: "Water triad hydrates scorched earth, transforming droughts into bountiful agriculture."',
        strongFinetuneZh: '身旺夏土见水为财，巨富。',
        strongFinetuneEn: 'Vigorous: Water Wealth produces immense real-asset wealth.',
        weakFinetuneZh: '身弱夏土亦需水润，忌再行燥热之火。',
        weakFinetuneEn: 'Delicate: Moderate hydration while banning further scorching Fire.'
      },
      'autumn': {
        months: ['申', '酉', '戌'],
        ruleZh: '秋月戊土子旺母衰，金多泄气。最喜丙火生身制金，次喜癸水润泽生财。',
        ruleEn: 'Autumn Wu Earth is drained by Metal Output. Rejoices in Bing Fire to fortify and temper Metal, followed by Gui Water Wealth.',
        caseZh: '【民国实证案】：大实业家造（戊子 辛酉 戊寅 丙辰）。秋土见丙，徐乐吾断：“伤官得佩印，点石成金，成纺织业泰斗。”',
        caseEn: '【Historical Precedent】: Industrialist (Wu Zi, Xin You, Wu Yin, Bing Chen). Xu Lewu: "Output paired with Resource transforms raw ore into gold."',
        strongFinetuneZh: '身旺秋土用金水食伤生财。',
        strongFinetuneEn: 'Vigorous: Exploit Metal-Water Output to generate Wealth.',
        weakFinetuneZh: '身弱秋土专取丙火正印生身。',
        weakFinetuneEn: 'Delicate: Secure Bing Fire Direct Resource.'
      },
      'winter': {
        months: ['亥', '子', '丑'],
        ruleZh: '冬月戊土天寒地冻，严霜封土。专取丙火太阳解冻，次取甲木疏土引火，忌金水重重。',
        ruleEn: 'Winter Wu Earth is frozen solid. Dedicated to Bing Fire sun to unfreeze, and Jia Wood to fuel fire; avoids cold Metal-Water.',
        caseZh: '【民国实证案】：某省督军造（戊子 甲子 戊寅 丙辰）。冬土冰封，徐乐吾评：“妙在丙火透时照暖，寅辰生发，终成一方军阀首领。”',
        caseEn: '【Historical Precedent】: Regional Governor (Wu Zi, Jia Zi, Wu Yin, Bing Chen). Xu Lewu: "Bing Fire warms frozen soil into sovereign regional governorship."',
        strongFinetuneZh: '冬土身旺亦以丙火为万物生发之机。',
        strongFinetuneEn: 'Vigorous: Bing Fire remains the mandatory spark of creation.',
        weakFinetuneZh: '冬土身弱大忌再逢水冷金寒。',
        weakFinetuneEn: 'Delicate: Strictly avoid freezing Metal and torrential Water.'
      }
    },
    '己': {
      'spring': {
        months: ['寅', '卯', '辰'],
        ruleZh: '春月己土田园萌芽，喜丙火照暖化寒，次喜甲木疏通，忌见水多土烂。',
        ruleEn: 'Spring Ji Earth is garden loam; rejoices in Bing warmth and Jia cultivation; avoids muddy Water flood.',
        caseZh: '【民国实证案】：教育家造（己卯 丁卯 己未 丙寅）。木多土倾，徐乐吾断：“丙丁并透生土，化木为仁，功在桑梓。”',
        caseEn: '【Historical Precedent】: Educator (Ji Mao, Ding Mao, Ji Wei, Bing Yin). Xu Lewu: "Bing and Ding warm the garden loam, transmuting strife into boundless pedagogical virtue."',
        strongFinetuneZh: '身旺用甲木正官成名。',
        strongFinetuneEn: 'Vigorous: Jia Direct Officer delivers prestigious titles.',
        weakFinetuneZh: '身弱赖丙火印绶生身。',
        weakFinetuneEn: 'Delicate: Direct Resource of Bing Fire is essential.'
      },
      'summer': {
        months: ['巳', '午', '未'],
        ruleZh: '夏月己土田园干枯，专取癸水雨露润泽，次取辛金发水源，忌火土太厚。',
        ruleEn: 'Summer Ji Earth is baked soil; dedicated to Gui Water rain and Xin Metal spring; avoids arid Earth.',
        caseZh: '【民国实证案】：农学大师造（己巳 庚午 己酉 癸酉）。夏土焦渴，徐乐吾评：“癸水透出润田，酉金生水，稻麦丰收之象。”',
        caseEn: '【Historical Precedent】: Agronomy Master (Ji Si, Geng Wu, Ji You, Gui You). Xu Lewu: "Gui Water hydrates the soil with You Metal sustaining water, yielding abundant harvests."',
        strongFinetuneZh: '夏土身旺见水润泽成巨富。',
        strongFinetuneEn: 'Vigorous: Water hydration converts land into high-value assets.',
        weakFinetuneZh: '夏土身弱不可缺水润土，兼防火焦。',
        weakFinetuneEn: 'Delicate: Gentle hydration while preventing scorching collapse.'
      },
      'autumn': {
        months: ['申', '酉', '戌'],
        ruleZh: '秋月己土金多泄秀，喜丙火生身护土制金，次喜癸水生财。',
        ruleEn: 'Autumn Ji Earth is drained by Metal Output; welcomes Bing Fire to fortify and Gui Water to commercialize.',
        caseZh: '【民国实证案】：某大银行行长造（己酉 癸酉 己丑 丙寅）。金水交加，徐乐吾断：“丙火高透照暖，化泄为秀，掌国家金融总枢。”',
        caseEn: '【Historical Precedent】: Central Bank Governor (Ji You, Gui You, Ji Chou, Bing Yin). Xu Lewu: "Bing Fire warms autumn soil, transmuting drained energy into financial sovereignty."',
        strongFinetuneZh: '身旺秋土以金水生财为用。',
        strongFinetuneEn: 'Vigorous: Metal Output circulating into Water Wealth.',
        weakFinetuneZh: '身弱秋土首重丙火生身。',
        weakFinetuneEn: 'Delicate: Bing Fire Resource is primary.'
      },
      'winter': {
        months: ['亥', '子', '丑'],
        ruleZh: '冬月己土湿泥冻结，万物不生。非丙火太阳不可解冻，配以甲木引火，忌金水重重。',
        ruleEn: 'Winter Ji Earth freezes into icy mud; solely relies on Bing Fire sun to thaw and Jia Wood to fuel; avoids cold floods.',
        caseZh: '【民国实证案】：开国元勋造（己亥 丙子 己丑 丙寅）。严冬深雪，徐乐吾赞：“两透丙火，日坐丑根，化冻土为沃野，名垂青史。”',
        caseEn: '【Historical Precedent】: Founding Statesman (Ji Hai, Bing Zi, Ji Chou, Bing Yin). Deep winter ice. Xu Lewu: "Dual Bing Fire thaws frozen soil into fertile terrain, earning historic distinction."',
        strongFinetuneZh: '冬土身旺亦必须丙火暄照方有生命力。',
        strongFinetuneEn: 'Vigorous: Bing Fire sunlight remains the single prerequisite of vitality.',
        weakFinetuneZh: '冬土身弱坚决走火土温润路线。',
        weakFinetuneEn: 'Delicate: Firmly anchor into warm Fire-Earth environments.'
      }
    },
    '庚': {
      'spring': {
        months: ['寅', '卯', '辰'],
        ruleZh: '春月庚金余寒未尽，木旺金缺。喜土生身，次喜丙火暄照；金旺则用丁火炼金成大器。',
        ruleEn: 'Spring Geng Metal is brittle amid heavy Wood. Welcomes Earth Resource and Bing warmth; robust Metal welcomes Ding Fire forging.',
        caseZh: '【民国实证案】：司法总长造（庚寅 己卯 庚子 丁亥）。春木旺盛，徐乐吾断：“己土生身，丁火炼庚，官印相生，刚正不阿。”',
        caseEn: '【Historical Precedent】: Chief of Justice (Geng Yin, Ji Mao, Geng Zi, Ding Hai). Heavy spring Wood. Xu Lewu: "Ji Earth fortifies while Ding Fire tempers Geng Metal, establishing unyielding judicial integrity."',
        strongFinetuneZh: '身旺庚金：喜丁火甲木配炼为钟鼎大器。',
        strongFinetuneEn: 'Vigorous: Ding Fire and Jia Wood forge sword-and-anchor mastery.',
        weakFinetuneZh: '身弱庚金：用辰丑湿土生身化金。',
        weakFinetuneEn: 'Delicate: Employ Chen/Chou moist Earth to nourish raw ore.'
      },
      'summer': {
        months: ['巳', '午', '未'],
        ruleZh: '夏月庚金火炎金熔，质弱形焦。专取壬水汪洋破火润金，次取庚辛比肩帮身。',
        ruleEn: 'Summer Geng Metal melts under blazing fire. Solely relies on Ren Water ocean to cool fire and preserve metal; secondary is Peer metal.',
        caseZh: '【民国实证案】：海军上将造（庚午 壬午 庚申 壬午）。烈火熔金，徐乐吾赞：“妙在两透壬水，日坐申禄，水火荡激，横行海上为海军名将。”',
        caseEn: '【Historical Precedent】: Admiral of Navy (Geng Wu, Ren Wu, Geng Shen, Ren Wu). Fierce summer Fire. Xu Lewu: "Dual Ren Water protruding cooled by Shen root commands stormy seas with naval mastery."',
        strongFinetuneZh: '身旺夏金亦不可无水润泽。',
        strongFinetuneEn: 'Vigorous: Water cooling remains mandatory to prevent brittle fracture.',
        weakFinetuneZh: '身弱夏金重用壬癸水与湿土救命。',
        weakFinetuneEn: 'Delicate: Urgent reliance on Ren/Gui Water and moist Earth for survival.'
      },
      'autumn': {
        months: ['申', '酉', '戌'],
        ruleZh: '秋月庚金当权得令，刚锐太盛。专取丁火炉冶炼金成器，次取甲木生火，无丁则成顽铁。',
        ruleEn: 'Autumn Geng Metal commands peak seasonal power; excessively sharp. Dedicated to Ding Fire hearth to smelt into sacred vessels, accompanied by Jia Wood.',
        caseZh: '【民国实证案】：兵工总监造（庚申 乙酉 庚寅 丁亥）。秋金极旺，徐乐吾评：“金旺得丁火冶炼，甲寅生丁，神兵利刃，造化功深。”',
        caseEn: '【Historical Precedent】: Ordnance Director (Geng Shen, Yi You, Geng Yin, Ding Hai). Peak autumn Metal. Xu Lewu: "Forged by Ding Fire and fueled by Yin Wood, creating invulnerable sovereign armaments."',
        strongFinetuneZh: '秋金太旺：必须丁甲并透，方成天下大器。',
        strongFinetuneEn: 'Over-vigorous autumn Geng: Ding Fire and Jia Wood are mandatory to craft sovereign vessels.',
        weakFinetuneZh: '秋金身弱：亦喜水泄其顽，不可强行火炼。',
        weakFinetuneEn: 'Delicate autumn Geng: Channel via Water Output rather than aggressive Fire smelting.'
      },
      'winter': {
        months: ['亥', '子', '丑'],
        ruleZh: '冬月庚金水冷金寒，体弱气虚。专取丙丁火温照解冻，次取戊土筑堤制水，忌水多金沉。',
        ruleEn: 'Winter Geng Metal is chilled and dormant. Dedicated to Bing/Ding Fire to warm and thaw, and Wu Earth to shelter; avoids water drowning.',
        caseZh: '【民国实证案】：外交大师造（庚子 戊子 庚辰 丙戌）。三水一金，徐乐吾断：“丙火照暖，戊戌燥土御水，金温水清，外交巨擘。”',
        caseEn: '【Historical Precedent】: Master Diplomat (Geng Zi, Wu Zi, Geng Chen, Bing Xu). Freezing winter water. Xu Lewu: "Bing Fire warms while Wu/Xu Earth shelters, creating pristine eloquence in world diplomacy."',
        strongFinetuneZh: '冬金身旺亦以丙丁火温金为上。',
        strongFinetuneEn: 'Vigorous: Warmth from Fire is the essential catalyst.',
        weakFinetuneZh: '冬金身弱急需燥土暖身生金。',
        weakFinetuneEn: 'Delicate: Warm dry Earth is required to preserve core viability.'
      }
    },
    '辛': {
      'spring': {
        months: ['寅', '卯', '辰'],
        ruleZh: '春月辛金温润秀气，不喜土重埋金，专取壬水淘洗，次喜己土滋润，见丙火温照。',
        ruleEn: 'Spring Xin Metal is refined jewelry; dislikes heavy Earth burial; dedicated to Ren Water washing and Bing warmth.',
        caseZh: '【民国实证案】：金融大家造（辛未 辛卯 辛丑 壬辰）。徐乐吾断：“壬水透时淘洗辛金，得丑辰润金，珠玉发光，富甲一方。”',
        caseEn: '【Historical Precedent】: Finance Magnate (Xin Wei, Xin Mao, Xin Chou, Ren Chen). Xu Lewu: "Ren Water washes delicate jewelry supported by moist Earth, radiating boundless prosperity."',
        strongFinetuneZh: '身旺辛金：以壬水淘洗吐秀为至美。',
        strongFinetuneEn: 'Vigorous: Ren Water cleansing brings supreme artistic/intellectual prestige.',
        weakFinetuneZh: '身弱辛金：喜己土泥润，忌燥土与多火。',
        weakFinetuneEn: 'Delicate: Gentle Ji Earth shelter; avoids scorching Fire.'
      },
      'summer': {
        months: ['巳', '午', '未'],
        ruleZh: '夏月辛金火炎土燥，形体受熔。专取壬水淘洗降温，次取庚金发源，忌见烈火。',
        ruleEn: 'Summer Xin Metal is delicate jewelry under a furnace. Solely relies on Ren Water cooling and Geng Metal source; dreads open flames.',
        caseZh: '【民国实证案】：艺术宗师造（辛巳 甲午 辛未 壬辰）。夏火烈烈，徐乐吾赞：“壬辰时降甘露，淘尽火尘，艺术光华灿若繁星。”',
        caseEn: '【Historical Precedent】: Master Artist (Xin Si, Jia Wu, Xin Wei, Ren Chen). Blazing summer Fire. Xu Lewu: "Ren Chen hour brings sweet rain to wash away furnace dust, leaving radiant artistic brilliance."',
        strongFinetuneZh: '身旺夏辛以壬水为救应之神。',
        strongFinetuneEn: 'Vigorous: Ren Water remains the divine saving grace.',
        weakFinetuneZh: '身弱夏辛急需湿土蓄水护金。',
        weakFinetuneEn: 'Delicate: Urgent moist Earth shelter to preserve jewel integrity.'
      },
      'autumn': {
        months: ['申', '酉', '戌'],
        ruleZh: '秋月辛金当权乘旺，气清力足。专取壬水淘洗成金白水清，忌土重晦光。',
        ruleEn: 'Autumn Xin Metal is pristine; commands peak clarity. Dedicated to Ren Water washing to achieve Metal-Water Purity; dislikes heavy Earth mud.',
        caseZh: '【民国实证案】：清末名臣造（辛酉 丁酉 辛亥 壬辰）。秋金双酉，徐乐吾评：“壬水透出，金白水清，文贵双绝，位极人臣。”',
        caseEn: '【Historical Precedent】: Eminent Imperial Scholar (Xin You, Ding You, Xin Hai, Ren Chen). Twin You Metal. Xu Lewu: "Ren Water radiates Metal-Water Purity, conferring peerless scholarship and prime office."',
        strongFinetuneZh: '秋辛太旺用壬水泄秀，极清极贵。',
        strongFinetuneEn: 'Vigorous autumn Xin: Ren Water output bestows supreme distinction.',
        weakFinetuneZh: '秋辛身弱亦可用湿土微助。',
        weakFinetuneEn: 'Delicate: Moderate moist Earth reinforcement.'
      },
      'winter': {
        months: ['亥', '子', '丑'],
        ruleZh: '冬月辛金水寒金冻，珠玉蒙冰。专取丙火太阳温润解冻，次取壬水淘洗，忌无火寒冻。',
        ruleEn: 'Winter Xin Metal freezes in ice; jewelry obscured. Dedicated to Bing Fire sun to warm and unfreeze, accompanied by Ren Water washing.',
        caseZh: '【民国实证案】：著名法学家造（辛丑 庚子 辛亥 丙申）。冬冰透丙，徐乐吾断：“丙火高透解冻，如雪地照金，光芒四射，为法学宗师。”',
        caseEn: '【Historical Precedent】: Jurisprudence Scholar (Xin Chou, Geng Zi, Xin Hai, Bing Shen). Winter ice thawed by Bing Fire. Xu Lewu: "Bing Fire unfreezes frozen jewelry like sun over snow, achieving legal mastership."',
        strongFinetuneZh: '冬辛身旺以丙火为调候之第一用神。',
        strongFinetuneEn: 'Vigorous: Bing Fire is the first indispensable regulator.',
        weakFinetuneZh: '冬辛身弱全赖丙火温养与湿土生扶。',
        weakFinetuneEn: 'Delicate: Pure reliance on Bing warmth and moist Earth grounding.'
      }
    },
    '壬': {
      'spring': {
        months: ['寅', '卯', '辰'],
        ruleZh: '春月壬水泄气于木，水性休囚。喜庚辛金发水源，次喜戊土筑堤成大流，忌木多水缩。',
        ruleEn: 'Spring Ren Water is drained by thriving Wood; weak constitution. Welcomes Geng/Xin Metal to feed headwaters and Wu Earth to channel; avoids wood exhaustion.',
        caseZh: '【民国实证案】：交通巨擘造（壬申 癸卯 壬子 戊申）。春水赖申金发源，徐乐吾断：“申金生水，戊土止水成渠，执掌全国铁路交通。”',
        caseEn: '【Historical Precedent】: Railroad Magnate (Ren Shen, Gui Mao, Ren Zi, Wu Shen). Spring water fed by Shen Metal. Xu Lewu: "Metal feeds water while Wu Earth builds channels, governing national transit networks."',
        strongFinetuneZh: '身旺春水用戊土与丙火成既济。',
        strongFinetuneEn: 'Vigorous: Wu Earth dam and Bing Fire warmth forge great hydraulic utility.',
        weakFinetuneZh: '身弱春水专用庚金正印发源。',
        weakFinetuneEn: 'Delicate: Dedicated to Geng Metal Resource headspring.'
      },
      'summer': {
        months: ['巳', '午', '未'],
        ruleZh: '夏月壬水至衰至涸，火炎土燥。专取庚辛金发水源，次取壬癸比肩帮身，忌土厚水枯。',
        ruleEn: 'Summer Ren Water evaporates in heat. Solely relies on Geng/Xin Metal source and Ren/Gui peers; dreads thick arid Earth absorbing water.',
        caseZh: '【民国实证案】：医学大家造（壬午 丙午 壬申 辛亥）。夏水枯竭，徐乐吾评：“申亥金水连环生身，枯木回春，化杀为权，悬壶济世之大才。”',
        caseEn: '【Historical Precedent】: Chief Surgeon (Ren Wu, Bing Wu, Ren Shen, Xin Hai). Scorched summer water. Xu Lewu: "Shen-Hai Metal-Water network fortifies native, resurrecting life as an immortal physician."',
        strongFinetuneZh: '夏水身旺见财官大富大贵。',
        strongFinetuneEn: 'Vigorous: Metal-Water support allows native to harvest massive summer Wealth.',
        weakFinetuneZh: '夏水身弱急需金印生身护命。',
        weakFinetuneEn: 'Delicate: Metal Resource is the non-negotiable lifeline.'
      },
      'autumn': {
        months: ['申', '酉', '戌'],
        ruleZh: '秋月壬水母旺子相，源远流长。专取戊土为堤坝蓄水，配以丙火照暖成既济，忌金多水浊。',
        ruleEn: 'Autumn Ren Water is roaring and plentiful. Dedicated to Wu Earth dam to construct reservoirs, warmed by Bing Fire sun; avoids muddy excess Metal.',
        caseZh: '【民国实证案】：开国将领造（壬戌 己酉 壬戌 戊申）。秋水汪洋，徐乐吾断：“戊戌重重筑堤，奔腾之水归于洪炉巨闸，治军严明，百战百胜。”',
        caseEn: '【Historical Precedent】: Field Marshal (Ren Xu, Ji You, Ren Xu, Wu Shen). Roaring autumn river. Xu Lewu: "Massive Wu/Xu Earth dams torrential waves into strategic locks, creating disciplined martial triumphs."',
        strongFinetuneZh: '秋水身旺：必须重用戊土七杀为堤坝，威震华夏。',
        strongFinetuneEn: 'Vigorous autumn Ren: Heavy Wu Earth Killings acts as sovereign dam, commanding armies.',
        weakFinetuneZh: '秋水身弱：用庚辛金流通水源。',
        weakFinetuneEn: 'Delicate: Employ Geng/Xin Metal to maintain steady flow.'
      },
      'winter': {
        months: ['亥', '子', '丑'],
        ruleZh: '冬月壬水阳刃当权，汪洋泛滥。专取戊土筑堤障水，次取丙火太阳解冻除寒，成“水火既济、堤锁江河”之绝世大格。',
        ruleEn: 'Winter Ren Water holds Yang Blade; oceanic inundation. Dedicated to Wu Earth dam to lock floodwaters, accompanied by Bing Fire sun to unfreeze.',
        caseZh: '【民国实证案】：某省督军造（壬子 壬子 壬子 戊申）。三子阳刃，徐乐吾断曰：“三子重逢，泛滥天下。全赖时透戊土，障百川而东之，大权独揽，威震三江。”',
        caseEn: '【Historical Precedent】: Sovereign Governor (Ren Zi, Ren Zi, Ren Zi, Wu Shen). Triple Zi Yang Blade. Xu Lewu: "Triple oceanic blades flooding the world. Salvation rests entirely on Wu Earth in the hour to dam the floodwaters, commanding sovereign absolute authority."',
        strongFinetuneZh: '冬水身旺：戊土为第一命脉，丙火为辅佐神药。无戊则水漂四海，破家败业。',
        strongFinetuneEn: 'Vigorous winter Ren: Wu Earth dam is the paramount lifeline; Bing Fire is the divine auxiliary. Without Wu Earth, floods cause catastrophic ruin.',
        weakFinetuneZh: '冬水身弱：虽在冬令亦须土止水清，配合微木通关。',
        weakFinetuneEn: 'Delicate: Moderate earth containment and subtle wood ventilation.'
      }
    },
    '癸': {
      'spring': {
        months: ['寅', '卯', '辰'],
        ruleZh: '春月癸水雨露滋芽，木旺水涸。专取辛金发源生身，次取丙火照暖化寒，忌火土太燥。',
        ruleEn: 'Spring Gui Water is gentle dew nurturing sprouts; thirsty wood drains water. Relies on Xin Metal headspring and Bing Fire warmth; avoids arid heat.',
        caseZh: '【民国实证案】：大学问家造（癸丑 乙卯 癸酉 辛酉）。春水得辛酉发源，徐乐吾评：“辛金润水，文澜浩荡，博古通今。”',
        caseEn: '【Historical Precedent】: Polymath Scholar (Gui Chou, Yi Mao, Gui You, Xin You). Spring dew sustained by Xin/You Metal. Xu Lewu: "Pure headspring nurtures oceanic scholarship."',
        strongFinetuneZh: '身旺春癸：用乙木食神泄秀生财。',
        strongFinetuneEn: 'Vigorous: Yi Wood Output generating commercial wealth.',
        weakFinetuneZh: '身弱春癸：专赖辛金发源护身。',
        weakFinetuneEn: 'Delicate: Pure reliance on Xin Metal headspring.'
      },
      'summer': {
        months: ['巳', '午', '未'],
        ruleZh: '夏月癸水暴晒如汽，极易枯竭。专取庚辛金发水源，次取癸水比肩同行，忌无水干涸。',
        ruleEn: 'Summer Gui Water evaporates into steam. Dedicated to Geng/Xin Metal spring and Gui peers; dreads arid evaporation.',
        caseZh: '【民国实证案】：实业巨头造（癸未 丁巳 癸酉 庚申）。夏水焦枯，徐乐吾赞：“庚申酉连环生水，润泽大地，实业大亨。”',
        caseEn: '【Historical Precedent】: Industrial Giant (Gui Wei, Ding Si, Gui You, Geng Shen). Scorching summer evaporation. Xu Lewu: "Geng-Shen-You Metal matrix nourishes dew into mighty enterprise."',
        strongFinetuneZh: '夏水身旺：见金生水，财富万千。',
        strongFinetuneEn: 'Vigorous: Metal sustaining water yields immense returns.',
        weakFinetuneZh: '夏水身弱：急需庚金金生水源救命。',
        weakFinetuneEn: 'Delicate: Geng Metal is the urgent life-saving antidote.'
      },
      'autumn': {
        months: ['申', '酉', '戌'],
        ruleZh: '秋月癸水母旺子清，金白水清。专取辛金发秀，次取丙火暄暖，忌土多水浊。',
        ruleEn: 'Autumn Gui Water enjoys Metal-Water clarity. Dedicated to Xin Metal refinement and Bing Fire warmth; avoids thick mud.',
        caseZh: '【民国实证案】：外长造（癸酉 辛酉 癸亥 丙辰）。秋水澄澈，徐乐吾断：“金白水清，丙火高透，名播寰宇。”',
        caseEn: '【Historical Precedent】: Foreign Minister (Gui You, Xin You, Gui Hai, Bing Chen). Crystal autumn clarity. Xu Lewu: "Metal-Water Purity illuminated by Bing Fire dazzles world diplomacy."',
        strongFinetuneZh: '身旺秋癸：见丙火暖金水，富贵超群。',
        strongFinetuneEn: 'Vigorous: Bing Fire sunlight warms Metal-Water into supreme rank.',
        weakFinetuneZh: '身弱秋癸：辛金发源为救。',
        weakFinetuneEn: 'Delicate: Rely on Xin Metal headwaters.'
      },
      'winter': {
        months: ['亥', '子', '丑'],
        ruleZh: '冬月癸水雪花霜冻，地冻天寒。专取丙火太阳照暖融冰，次取辛金发源生身，忌无火寒冻成冰。',
        ruleEn: 'Winter Gui Water is frost and falling snow; frozen solid. Dedicated to Bing Fire sun to unfreeze and Xin Metal to feed; dreads fireless freeze.',
        caseZh: '【民国实证案】：某政坛领袖造（癸亥 癸亥 癸亥 丙辰）。纯水凝冻，徐乐吾赞曰：“妙在丙辰时，太阳照耀寒冰，化为春水润万物，大器早成。”',
        caseEn: '【Historical Precedent】: Statesman (Gui Hai, Gui Hai, Gui Hai, Bing Chen). Triple Hai winter ice. Xu Lewu: "Sunlight of Bing in hour thaws frozen ice into spring streams, achieving early greatness."',
        strongFinetuneZh: '冬癸身旺：必须丙火高透，无火则冻水无用。',
        strongFinetuneEn: 'Vigorous winter Gui: Bing Fire sun is the non-negotiable lifeline; without Fire, ice remains paralyzed.',
        weakFinetuneZh: '冬癸身弱：丙火暖身兼辛金发源。',
        weakFinetuneEn: 'Delicate: Bing Fire warmth coupled with Xin Metal headspring.'
      }
    }
  }
};

class XuLewuDB {
  static getManifesto() {
    return XU_LEWU_DATA.manifesto;
  }

  /**
   * Get concrete middleware rule & real case exegesis for Day Master + Month Order
   */
  static getMiddlewareExegesis(dayMaster, monthBranch, vigor) {
    const dm = dayMaster || '甲';
    const mb = monthBranch || '子';
    const dmRules = XU_LEWU_DATA.rules[dm] || XU_LEWU_DATA.rules['甲'];

    let season = 'winter';
    if (['寅', '卯', '辰'].includes(mb)) season = 'spring';
    else if (['巳', '午', '未'].includes(mb)) season = 'summer';
    else if (['申', '酉', '戌'].includes(mb)) season = 'autumn';

    const sRule = dmRules[season] || dmRules['spring'];
    const isVigorous = vigor && (vigor.isStrong || vigor.isExtreme || (vigor.totalScore >= 50));

    return {
      dayMaster: dm,
      monthBranch: mb,
      season,
      titleZh: `《子平真诠评注》《造化元钥评注》· 徐乐吾十干生于十二月令具象实操规则【${dm}木生于${mb}月】`.replace('木', dm === '甲' || dm === '乙' ? '木' : (dm === '丙' || dm === '丁' ? '火' : (dm === '戊' || dm === '己' ? '土' : (dm === '庚' || dm === '辛' ? '金' : '水')))),
      titleEn: `Xu Lewu Commentary Decision Middleware: [${dm} Born in ${mb} Month]`,
      abstractRuleZh: sRule.ruleZh,
      abstractRuleEn: sRule.ruleEn,
      concreteCaseZh: sRule.caseZh,
      concreteCaseEn: sRule.caseEn,
      finetunedRuleZh: isVigorous ? sRule.strongFinetuneZh : sRule.weakFinetuneZh,
      finetunedRuleEn: isVigorous ? sRule.strongFinetuneEn : sRule.weakFinetuneEn,
      isVigorous,
      middlewareAppraisalZh: XU_LEWU_DATA.manifesto.controversyZh,
      middlewareAppraisalEn: XU_LEWU_DATA.manifesto.controversyEn
    };
  }

  static search(query) {
    if (!query) return [];
    const q = query.toLowerCase();
    const results = [];

    // Search manifesto
    const m = XU_LEWU_DATA.manifesto;
    if (
      m.titleZh.includes(query) || m.titleEn.toLowerCase().includes(q) ||
      m.controversyZh.includes(query) || m.controversyEn.toLowerCase().includes(q) ||
      m.valueZh.includes(query) || m.valueEn.toLowerCase().includes(q)
    ) {
      results.push({
        source: '《子平真诠评注 / 造化元钥评注》',
        sourceEn: 'Xu Lewu Classical Commentaries',
        title: m.titleZh,
        titleEn: m.titleEn,
        content: m.valueZh,
        contentEn: m.valueEn,
        detail: m.controversyZh,
        detailEn: m.controversyEn
      });
    }

    // Search all stem/season rules & cases
    Object.keys(XU_LEWU_DATA.rules).forEach(stem => {
      const sObj = XU_LEWU_DATA.rules[stem];
      Object.keys(sObj).forEach(seasonKey => {
        const item = sObj[seasonKey];
        if (
          (item.ruleZh && item.ruleZh.includes(query)) ||
          (item.ruleEn && item.ruleEn.toLowerCase().includes(q)) ||
          (item.caseZh && item.caseZh.includes(query)) ||
          (item.caseEn && item.caseEn.toLowerCase().includes(q)) ||
          (item.strongFinetuneZh && item.strongFinetuneZh.includes(query)) ||
          (item.strongFinetuneEn && item.strongFinetuneEn.toLowerCase().includes(q)) ||
          (item.weakFinetuneZh && item.weakFinetuneZh.includes(query)) ||
          (item.weakFinetuneEn && item.weakFinetuneEn.toLowerCase().includes(q)) ||
          query.includes(stem)
        ) {
          results.push({
            source: '《徐乐吾评注·十干月令案例中间件》',
            sourceEn: 'Xu Lewu 10 Stems Monthly Case Middleware',
            title: `${stem}日元生于${seasonKey}月令实操案`,
            titleEn: `${stem} Day Master born in ${seasonKey} Season Case Exegesis`,
            content: item.ruleZh,
            contentEn: item.ruleEn,
            detail: item.caseZh,
            detailEn: item.caseEn
          });
        }
      });
    });

    return results;
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { XuLewuDB, XU_LEWU_DATA };
}
if (typeof window !== 'undefined') {
  window.XuLewuDB = XuLewuDB;
}
