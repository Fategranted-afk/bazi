/**
 * 《滴天髓》 (Di Tian Sui) Database
 * Includes complete treatises for Heavenly Stems (天干论), Earthly Branches (地支论),
 * General Metaphysics (通微论、形象论) with modern vernacular translations and advice.
 */

const DI_TIAN_SUI_DATA = {
  stems: {
    '甲': {
      name: '甲木',
      nature: '阳木 (参天大木、栋梁之才)',
      poem: '甲木参天，脱胎要火。春不容金，秋不容土。火炽乘龙，水宕骑虎。地润天和，植立千古。',
      vernacular: '甲木是参天大树，生机勃勃。幼苗长成栋梁需要丙火阳光的照耀（脱胎要火）。春天木旺，不喜庚金斧斤克伐（春不容金）；秋天金旺木凋，土重则木折根浮（秋不容土）。如果八字中火太旺，需要坐辰土（龙）蓄水培木；如果水太盛木漂，需坐寅木（虎）通根止水。只要地气温润、天气调和，甲木自能千秋挺拔。',
      favorable: ['丙火 (阳光照暖)', '癸水 (雨露滋养)', '庚金 (成器雕琢)', '戊土 (深厚培根)'],
      favorableEn: ['Bing Fire (Solar warmth)', 'Gui Water (Rain nourishing)', 'Geng Metal (Sculpting tool)', 'Wu Earth (Deep rooting)'],
      taboos: ['过燥无水则自焚', '水泛木浮无根', '春金克伐伤苗'],
      taboosEn: ['Excessive drought burning wood', 'Flooding water drifting rootless', 'Spring Metal shearing young shoots'],
      classic_commentary: '任铁樵曰：甲为纯阳之木，体本坚固，参天之势，又极雄壮。生于初春，木嫩气寒，得火而发荣；生于仲春，旺极宜泄，见火为吉；生于秋冬，不可无火以温之。',
      modern_manifestation: '参天大树、栋梁木材。在现代社会对应：大型组织创始人/一把手、国家骨干基础设施、大型实业领头羊、现代教育出版集团、林业与建筑工程、长期价值投资。',
      beneficial_lifestyle: '【喜丙火生活模式】：多做晨间户外有氧运动，接受阳光沐浴；积极输出思想，走向台前做公开表达与品牌宣讲；办公环境采光通透；【喜癸水/庚金生活模式】：亲近自然山水，定期阅读经典；接受严格的专业体系培训与戒律打磨（庚金修剪成材）。',
      avoidance_taboos: '切忌急功近利、盲目频繁换赛道；忌闭门造车缺乏阳光沟通（不见火）；忌在虚浮泡沫中过度借贷（水泛木浮无根）；忌盲目硬刚消耗幼苗期本钱（春金克伐）。'
    },
    '乙': {
      name: '乙木',
      nature: '阴木 (花草藤萝、柔韧之质)',
      poem: '乙木虽柔，刲羊解牛。怀丁抱丙，跨凤乘猴。虚湿之地，骑马亦忧。藤萝系甲，可春可秋。',
      vernacular: '乙木柔和细腻，如同兰蕙藤萝。它能扎根于未土（羊）和丑土（牛）之中。只要八字中有丙火、丁火透干，即使遇到酉金（凤）、申金（猴）的克制也能自我化解。但如果水多土冻处于虚湿之地，即便坐在午火（马）上也难免湿寒之患。只要依附于甲木（藤萝系甲），无论春秋皆能安泰繁荣。',
      favorable: ['丙火 (暄照)', '癸水 (润泽)', '甲木 (藤萝系甲，借力登高)'],
      favorableEn: ['Bing Fire (Sunlight radiance)', 'Gui Water (Nourishing moisture)', 'Jia Wood (Climbing vine on tall pine)'],
      taboos: ['辛金贴身残害', '湿泥寒水无火', '过烈燥火干焦'],
      taboosEn: ['Close Xin Metal shears', 'Frozen damp soil lacking Fire', 'Scorching drought'],
      classic_commentary: '任铁樵曰：乙木者，甲之质也。春如桃李，夏如禾稼，秋如桐桂，冬如奇葩。最喜甲木同透，如藤萝依附松柏，四季不衰。',
      modern_manifestation: '花草藤萝、灵动绿植。在现代社会对应：创意设计、公关自媒体、柔性供应链、文化艺术、时尚买手、跨境电商、敏捷咨询与社交社群运营。',
      beneficial_lifestyle: '【藤萝系甲生活模式】：主动与行业头部领军平台或大人物合作（借船出海）；善用人脉杠杆与生态协同；生活起居注重美学与绿植陪伴；常去温室花房或阳光茶室，穿着优雅舒适棉麻。',
      avoidance_taboos: '切忌单打独斗硬碰重资产实体；忌陷入阴湿内耗的负能量圈子（湿泥无火）；忌与强势暴躁之人过度正面冲撞；防委曲求全失去底线。'
    },
    '丙': {
      name: '丙火',
      nature: '阳火 (太阳之火、至阳至烈)',
      poem: '丙火猛烈，欺霜傲雪。能炼庚金，逢辛反怯。土众成慈，水猖显节。虎马犬乡，甲来成灭。',
      vernacular: '丙火是太阳普照之火，性质至阳刚烈，不畏霜雪严寒。它能熔炼刚硬的庚金，但遇到温柔的辛金阴阳化合反而变得慈和。遇到厚重的土能泄其猛烈之气显出慈悲（食伤生财）；遇到凶猛的壬水江河反而相映成辉（水火既济）。如果在寅（虎）、午（马）、戌（犬）三合火局中，再遇到甲木生助，火势失控反而自身招灾焚灭。',
      favorable: ['壬水 (日照江河、水火既济)', '辛金 (丙辛合化)', '己土 (晦火润燥)'],
      favorableEn: ['Ren Water (Sunlight over ocean, Water-Fire balance)', 'Xin Metal (Bing-Xin harmonious union)', 'Ji Earth (Tempering harsh blaze)'],
      taboos: ['火多木焚', '浓云蔽日 (癸水过多)', '死绝无根'],
      taboosEn: ['Excessive fire burning wood', 'Dense clouds eclipsing sun (Excess Gui)', 'Rootless void'],
      classic_commentary: '任铁樵曰：丙火乃纯阳之火，万物莫不借其温暖而发育。最喜壬水映照，光辉百倍；若无水而木火过燥，则性暴易折。',
      modern_manifestation: '太阳普照、天地光明。在现代社会对应：生成式AI大模型与超级算力、影视传媒、新能源光伏、数字大屏、公共品牌公关、聚光灯舞台、大型发布会与阳光文旅。',
      beneficial_lifestyle: '【日照江海生活模式】：保持作息规律，晨起沐浴阳光；大胆走向公共视野打造个人IP；为人坦荡阳光、乐善好施；工作注重视觉呈现与感染力传播；适合高能度有氧运动（马拉松、动感单车）。',
      avoidance_taboos: '切忌性格暴躁狂傲、目中无人；忌长期待在阴暗潮湿无采光的地下室；忌参与遮遮掩掩的灰色地下链条；防精力过度发散自焚透支。'
    },
    '丁': {
      name: '丁火',
      nature: '阴火 (烛火、灯火、人间烟火)',
      poem: '丁火柔中，内性昭融。抱乙而孝，合壬而忠。旺而不烈，衰而不穷。如有嫡母，可秋可冬。',
      vernacular: '丁火柔和居中，内在光明温和。丁火生于乙木，对母尽孝；与壬水化合，尽忠守义。旺盛时不像太阳那样灼烈暴躁，衰弱时如烛火幽微却不至于轻易熄灭。只要有甲木（嫡母正印）作为干柴持续生扶，即便生在秋冬严寒之季也能长久不衰。',
      favorable: ['甲木 (正印劈木引火)', '庚金 (劈甲引丁)', '壬水 (丁壬化木)'],
      favorableEn: ['Jia Wood (Direct Resource fueling flame)', 'Geng Metal (Splitting wood to feed fire)', 'Ren Water (Harmonic combination)'],
      taboos: ['乙木湿柴塞火', '癸水暴雨浇灭', '狂风吹熄'],
      taboosEn: ['Damp Yi Wood choking flame', 'Torrential Gui Water rain', 'Violent storm extinguishing flame'],
      classic_commentary: '任铁樵曰：丁火为万家之灯火，夜生、秋冬生最为显达。喜甲木引生，庚金劈木，则火源无穷。',
      modern_manifestation: '万家灯火、文明薪火。在现代社会对应：精密电子芯片、激光光学、深度思考者、夜间创意写作、灯光舞台设计、心理咨询沙龙、精密手工匠人与香道茶道。',
      beneficial_lifestyle: '【薪火相传生活模式】：深度学习硬核专业（庚劈甲引丁）；夜晚留出沉浸式独处研读时光；工作环境点香薰或暖光台灯；保持温文尔雅、礼敬师长的品行；多与有智慧的长辈交往。',
      avoidance_taboos: '切忌在狂风暴雨的浮躁喧嚣中随波逐流；忌与湿气怨气深重的人长期搭伙（湿木塞火）；防熬夜过度油尽灯枯。'
    },
    '戊': {
      name: '戊土',
      nature: '阳土 (高山城墙、厚重坚固)',
      poem: '戊土固重，既中且正。静翕动辟，万物司命。水润庆福，火燥叠殃。若在艮坤，怕冲宜静。',
      vernacular: '戊土厚重坚定，端庄居中。万物生发衰亡都依附于它。得到雨露水源的滋润就能生养万物孕育生机；如果火太旺、土燥热则焦枯成灾。如果地支坐于寅（艮方）或申（坤方），喜欢安静稳健，害怕刑冲破坏根基。',
      favorable: ['甲木 (疏土透气)', '丙火 (生温土气)', '癸水 (润泽生万物)'],
      favorableEn: ['Jia Wood (Ventilating soil)', 'Bing Fire (Warming earth)', 'Gui Water (Nourishing vitality)'],
      taboos: ['土重金埋', '过燥干涸', '水泛土崩'],
      taboosEn: ['Heavy earth burying metal', 'Arid drought', 'Torrential flood collapsing earth'],
      classic_commentary: '任铁樵曰：戊为高亢之土，比之城墙堤岸。非甲木疏通不能发灵秀，非癸水滋润不能生万物。',
      modern_manifestation: '高山峻岭、长城堤坝。在现代社会对应：大型水利工程、国家重器基建、大型不动产仓储、金融风控防火墙、法务合规体系、银行保库、实体安全防线与平台底座。',
      beneficial_lifestyle: '【厚重深固生活模式】：建立铁打的作息规律与边界感；严守契约与财务风险底线；重度资产配置在低波动稳定资产；日常重视核心力量与负重深蹲训练；居住环境选择高地厚土之所。',
      avoidance_taboos: '切忌参与高风险杠杆投机；忌生活作息杂乱无章；忌盲目轻信口头承诺而无抵押担保；忌固步自封拒绝变通（土重金埋）。'
    },
    '己': {
      name: '己土',
      nature: '阴土 (田园湿土、博爱包容)',
      poem: '己土卑湿，中正蓄藏。不愁木盛，不畏水狂。火少火晦，金多金光。若要物旺，宜助宜帮。',
      vernacular: '己土温软湿润，具有博大蓄藏的包容力。它不害怕旺盛的树木扎根（木克土反而疏土），也不畏惧狂风暴雨（水来能够涵养）。火少遇到己土会减弱火光（晦火生金），金多遇到己土则金气明润。如果想让田中庄稼旺盛，必须有阳光（丙火）普照和地气相帮。',
      favorable: ['丙火 (暖土生机)', '甲木 (甲己合贵)', '癸水 (滋润灌溉)'],
      favorableEn: ['Bing Fire (Warming vitality)', 'Jia Wood (Jia-Ji noble union)', 'Gui Water (Nourishing irrigation)'],
      taboos: ['阴寒湿气过甚', '金多泄尽元气'],
      taboosEn: ['Excessive cold dampness', 'Excess Metal draining vitality'],
      classic_commentary: '任铁樵曰：己土卑湿，乃田园稼穑之土。最喜丙火温煦，透甲木相合，秀气外露。',
      modern_manifestation: '田园沃土、博爱蓄藏。在现代社会对应：现代有机农业、大健康医养、幼儿与基础教育、文秘档案管理、社区管家、社保公积金福利体系、后勤保障与温情服务业。',
      beneficial_lifestyle: '【稼穑滋生生活模式】：多晒太阳补充火气（丙火温土）；多亲近土壤花草做园艺种植；饮食注重温补脾胃热汤；待人包容温厚，将才干转化为落地成果；保持稳健复利心态。',
      avoidance_taboos: '切忌优柔寡断沉溺内耗；忌生活在潮湿阴冷无阳光的环境；忌长期讨好型人格无底线包容损友；防金多过度耗尽元气。'
    },
    '庚': {
      name: '庚金',
      nature: '阳金 (刀剑兵刃、顽金矿石)',
      poem: '庚金带杀，刚健为最。得水而清，得火而锐。土润则生，土干则脆。能赢甲兄，输于乙妹。',
      vernacular: '庚金带有一股肃杀之气，刚健威武。遇到壬水滔滔便能洗涤金质显现清纯（金白水清）；遇到丁火炉火锻造便能成器锋锐。遇到湿润的土（丑辰）能够生金，遇到干燥焦灼的土（戌未）反而使金脆断。能用利斧劈伐参天大木甲木，却会在温柔柔韧的乙木面前情投意合甘愿相合（乙庚合）。',
      favorable: ['丁火 (炉火炼金)', '甲木 (丁火之源)', '壬水 (淘洗发光)', '湿土 (生金培基)'],
      favorableEn: ['Ding Fire (Smelting metal into tool)', 'Jia Wood (Fuel for Ding fire)', 'Ren Water (Washing and polishing)', 'Moist Earth (Nourishing metal root)'],
      taboos: ['燥土脆金', '无火不成大器', '金水过寒凝结'],
      taboosEn: ['Dry arid earth making metal brittle', 'Lack of Fire preventing tool creation', 'Extreme freezing metal and water'],
      classic_commentary: '任铁樵曰：庚金乃秋天肃杀之气，刚健至极。若得丁火熔炼，则成钟鼎之重器；若见水淘洗，则显绝代之清华。',
      modern_manifestation: '金铁兵刃、重工机械。在现代社会对应：国防军工、高端装备制造、航天工业、重型数控机床、司法刑侦机关、钢铁冶炼、硬核底层操作系统开发与尖端外科手术器械。',
      beneficial_lifestyle: '【千锤百炼生活模式】：主动接受高强度业务攻坚与考核打磨（丁火炼金）；练习武术、击剑、器械抗阻举重；行事雷厉风行、令行禁止；穿着干练硬挺；定期进行深度复盘切除业务腐肉。',
      avoidance_taboos: '切忌做事蛮干刚愎自用；忌流于无规矩的街头斗殴争执；忌长期处于无规则放任状态（不雕不成器）；防金寒水冷毫无温情。'
    },
    '辛': {
      name: '辛金',
      nature: '阴金 (珠宝首饰、温润玉石)',
      poem: '辛金软弱，温润而清。畏土之叠，乐水之盈。能扶社稷，能救生灵。热则喜母，寒则喜丁。',
      vernacular: '辛金温润清莹，如同珠玉首饰。最害怕厚重的土层将其深埋掩盖（土多金埋），最喜欢清澈澄碧的壬水将其淘洗焕发光彩。在国家危难时能担当重任，在生灵涂炭时能施展仁慈。天气炎热酷暑时喜欢湿土（己土湿泥）滋养，天气寒冬冰封时喜欢丁火温室守护。',
      favorable: ['壬水 (淘洗珠玉、熠熠生辉)', '己土 (生身护体)', '丙火 (丙辛合水)'],
      favorableEn: ['Ren Water (Washing gems to sparkle)', 'Ji Earth (Nourishing and shielding)', 'Bing Fire (Sunlight radiance)'],
      taboos: ['戊土厚重埋金', '炉火烈焰销铄 (丁火太旺)', '燥土焦干'],
      taboosEn: ['Thick Wu Earth burying gold', 'Excessive furnace flame melting gems', 'Arid scorching soil'],
      classic_commentary: '任铁樵曰：辛金清润，如金玉珍珠。乐水之盈者，壬水也，淘洗珠玉，秀气毕呈。切忌厚土重叠，埋没清辉。',
      modern_manifestation: '珠玉翡翠、黄金珠宝。在现代社会对应：高精度半导体晶圆光刻、精密仪器制造、瑞士名表钟表、高端珠宝时尚奢侈品、高级精算审计、法医鉴定、精细化工与高级美学设计。',
      beneficial_lifestyle: '【淘洗发光生活模式】：善用壬水智慧淘洗（多写作、多发布精品作品）；衣着精致整洁；注重皮肤与呼吸道保养；多饮纯净矿泉水；远离乌烟瘴气之场所；保持高标准审美品味。',
      avoidance_taboos: '切忌与市井粗俗之流泥潭纠缠（土多金埋）；忌盲目加重资产实体（受厚土埋压）；忌长期在高温高噪音恶劣环境工作（炉火销铄）。'
    },
    '壬': {
      name: '壬水',
      nature: '阳水 (大江大河、汪洋大海)',
      poem: '壬水通河，能泄天机。刚中之德，周流不滞。通根透癸，冲天奔地。化则有情，从则相济。',
      vernacular: '壬水如同百川汇海，周流奔涌不滞。它具有刚健包容的品德。如果地支申子辰合水局且天干透出癸水，其势浩荡犹如山洪奔流冲天覆地，必须用厚重的戊土筑堤防范。如果化合有情，或者顺从水势（润下格），则能造福苍生万物相济。',
      favorable: ['戊土 (堤坝防洪、砥柱中流)', '丙火 (水火既济、日照江海)', '庚金 (水源不绝)'],
      favorableEn: ['Wu Earth (Levee dam and flood barrier)', 'Bing Fire (Sunlight over ocean, Water-Fire equilibrium)', 'Geng Metal (Unceasing spring source)'],
      taboos: ['己土混浊成泥', '泛滥无堤成水灾', '木多水缩'],
      taboosEn: ['Ji Earth muddying clear water', 'Unbounded flooding without dams', 'Excessive Wood draining water'],
      classic_commentary: '任铁樵曰：壬水乃大海汪洋之水，势不可挡。最喜戊土作堤，丙火辉映，方显汪洋气度。',
      modern_manifestation: '汪洋大海、大江大河。在现代社会对应：跨国远洋航运与全球物流大动脉、国际金融资本流动网络、互联网超级骨干网络通信、大数据洪流、大型水利枢纽、液态能源（石油/天然气）、进出口跨国商贸。',
      beneficial_lifestyle: '【戊土作堤生活模式】：必须用严格的时间管理与法律合同筑起护城河（戊土堤坝），将汹涌的大水转化为高峡出平湖的蓄水发电站；配置防御型硬资产；【丙火辉映生活模式】：拥抱阳光与公众舞台，用温暖光明化解水的阴寒，形成“日照江海”的恢宏格局；多做有氧运动排汗。',
      avoidance_taboos: '切忌己土混水（切忌参与模糊不清的灰色利益与下三滥勾当）；切忌水盛无堤（切忌无节制多线开工、盲目挥霍高杠杆放任自流）；切忌木多水缩（切忌长期过度脑力消耗而无实质交付）。'
    },
    '癸': {
      name: '癸水',
      nature: '阴水 (雨露甘霖、春霖泉水)',
      poem: '癸水至弱，达于津涯。得龙而运，功化斯神。不愁火土，不论庚辛。合戊见火，化象斯真。',
      vernacular: '癸水至柔至弱，如同清晨雨露、细水长流，却能滋润大地每一个角落。遇到辰土（水库龙位）则气通大海，神化无穷。只要有源泉，不愁火热土厚（甘露能润燥），也不拘泥于庚辛金生扶（水自天生）。与戊土相合化为火，只要原局火旺，就能化为真实的火象富贵无双。',
      favorable: ['辛金 (发源发脉)', '丙火 (解寒显象)', '卯木/乙木 (雨露生花)'],
      favorableEn: ['Xin Metal (Headspring source)', 'Bing Fire (Dispelling cold frost)', 'Mao/Yi Wood (Rain blooming flowers)'],
      taboos: ['燥土塞滞', '狂水浊泥', '无源枯竭'],
      taboosEn: ['Arid earth blocking flow', 'Turbid mud contamination', 'Rootless exhaustion'],
      classic_commentary: '任铁樵曰：癸水乃纯阴之水，发源虽微，其用至溥。最喜有木化秀，有金发源，天润地和，自然神采发越。',
      modern_manifestation: '雨露甘霖、深山灵泉。在现代社会对应：生物制药与疫苗研发、高端饮用水、心理咨询催眠、深度冥想禅修、隐秘信息流、微积分精算、水墨书法创作与高端SPA康养。',
      beneficial_lifestyle: '【细水长流生活模式】：注重身心排毒与深睡眠；每日饮用温热好水；保持与水源地（湖泊温泉）的亲近；多用辛金印星生发源泉（持续保持专业钻研）；行事低调内敛，以柔克刚。',
      avoidance_taboos: '切忌与顽固愚钝之人硬碰硬（遭燥土阻塞）；忌生活作息焦躁上火；忌陷入浑浊不洁的生活习惯；防无源枯竭过度奉献。'
    }
  },

  branches: {
    '子': { element: '水', nature: '阳水阴用，帝旺之所', poem: '子水纯纯最至灵，喜逢申辰合成形。冬逢丙火方为暖，夏见庚辛水力轻。' },
    '丑': { element: '土', nature: '湿土金库，季冬之月', poem: '丑石金藏蓄水泉，阴凝湿冷气相联。见火温熏方发秀，木疏土润是良田。' },
    '寅': { element: '木', nature: '阳木火生，孟春建寅', poem: '寅木参天万木宗，丙戊相生势正雄。喜见午戌成火局，莫逢申巳乱相冲。' },
    '卯': { element: '木', nature: '阴木花草，仲春建卯', poem: '卯木纯青气自华，春风和畅绽繁华。水滋火煦根基固，最畏秋霜带铁叉。' },
    '辰': { element: '土', nature: '湿土水库，季春建辰', poem: '辰为水库亦为龙，蓄水生金气象浓。若得戊阳来筑岸，栽培草木建奇功。' },
    '巳': { element: '火', nature: '阳火金生，孟夏建巳', poem: '巳火纯阳变幻奇，暗藏金气戊相随。喜见酉丑合金局，遇亥相冲力亦微。' },
    '午': { element: '火', nature: '阴火阳用，仲夏建午', poem: '午火炎炎帝旺乡，燥金烁水势难挡。最喜辰丑调燥湿，方成既济寿延长。' },
    '未': { element: '土', nature: '燥土木库，季夏建未', poem: '未土藏金蓄火光，木归墓库气温凉。水润湿泥生草木，无水焦干命有伤。' },
    '申': { element: '金', nature: '阳金水生，孟秋建申', poem: '申金刚健水源头，生水成川百谷流。火炼功深成栋器，逢寅冲动惹灾愁。' },
    '酉': { element: '金', nature: '纯阴之金，仲秋建酉', poem: '酉金清莹宝玉名，无尘无垢鉴分明。水淘火焙形神显，最怕重山厚土倾。' },
    '戌': { element: '土', nature: '燥土火库，季秋建戌', poem: '戌为火库号魁罡，气燥金藏势莫当。喜水润泽调冷热，忌辰冲动起风浪。' },
    '亥': { element: '水', nature: '阳水阴用，孟冬建亥', poem: '亥水滔滔北海深，木藏水下暗抽心。见寅合木成春意，见巳相冲击暮砧。' }
  },

  general_chapters: [
    {
      title: '通微论 · 天道',
      content: '欲识三元万法宗，先观帝载与神功。',
      commentary: '天地阴阳，造化流行，神妙不可测。八字之理，本于天地四时五行生克制化。'
    },
    {
      title: '通微论 · 地道',
      content: '坤元合德机缄通，五气偏全定吉凶。',
      commentary: '地承天施，厚德载物。支藏干伏，五行之气或纯或杂，偏枯则贫残，中和则荣显。'
    },
    {
      title: '形象论 · 源流',
      content: '何处起根源？流到何方住？机括此中求，知来亦知去。',
      commentary: '论命中五行相生流转，如水源之发，必须流通不断。生生不息者吉，枯竭中阻者凶。'
    },
    {
      title: '形象论 · 通关',
      content: '两气相嫌势不平，中闲借此调停情。',
      commentary: '如金木交战，得水调停则金生水、水生木，转战为和；水火相激，得木通关则水生木、木生火，化戾为祥。'
    },
    {
      title: '配合论 · 寒暖燥湿',
      content: '天道有寒暖，发育万物，人道行之，不可过也。地道有燥湿，生成品汇，人道得之，不可偏也。',
      commentary: '调候为八字第一要务。过于寒者喜火以温，过于热者喜水以降；过于燥者喜湿土润水，过于湿者喜燥土温阳。'
    }
  ]
};

// Database Accessor
class DiTianSuiDB {
  static getForDayMaster(dayMaster) {
    return DI_TIAN_SUI_DATA.stems[dayMaster] || null;
  }

  static getBranch(branch) {
    return DI_TIAN_SUI_DATA.branches[branch] || null;
  }

  static getAllChapters() {
    return DI_TIAN_SUI_DATA.general_chapters;
  }

  static search(keyword) {
    if (!keyword) return [];
    keyword = keyword.trim().toLowerCase();
    const results = [];

    // Search Stems
    for (const [stem, item] of Object.entries(DI_TIAN_SUI_DATA.stems)) {
      if (stem.includes(keyword) || item.poem.includes(keyword) || item.vernacular.includes(keyword)) {
        results.push({
          source: '《滴天髓》· 天干论',
          title: item.name + ' (' + item.nature + ')',
          content: item.poem,
          detail: item.vernacular
        });
      }
    }

    // Search Branches
    for (const [branch, item] of Object.entries(DI_TIAN_SUI_DATA.branches)) {
      if (branch.includes(keyword) || item.poem.includes(keyword) || item.nature.includes(keyword)) {
        results.push({
          source: '《滴天髓》· 地支论',
          title: branch + ' (' + item.nature + ')',
          content: item.poem,
          detail: item.nature
        });
      }
    }

    // Search Chapters
    for (const chap of DI_TIAN_SUI_DATA.general_chapters) {
      if (chap.title.includes(keyword) || chap.content.includes(keyword) || chap.commentary.includes(keyword)) {
        results.push({
          source: '《滴天髓》· 篇章',
          title: chap.title,
          content: chap.content,
          detail: chap.commentary
        });
      }
    }

    return results;
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { DiTianSuiDB, DI_TIAN_SUI_DATA };
}
if (typeof window !== 'undefined') {
  window.DiTianSuiDB = DiTianSuiDB;
  window.DI_TIAN_SUI_DATA = DI_TIAN_SUI_DATA;
}
