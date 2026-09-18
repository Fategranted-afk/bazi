/**
 * 四国八十强名校全相数据库 (Top 20 Universities across UK, USA, Canada, China)
 * 包含官方中英文校名、城市、最新 QS 排名、THE 排名、前五强王牌学科 (Top 5 Standout Disciplines)、
 * 学科五行侧重 (Elemental Focus) 与学术战略定位 (Academic Advantage).
 * 100% Offline-First, deterministic, and fully bilingual (zh/en).
 */

const INSTITUTIONS_DB = {
  "UK": [
    {
      "id": "oxford",
      "nameZh": "牛津大学",
      "nameEn": "University of Oxford",
      "country": "UK",
      "city": "Oxford",
      "qsRank": 3,
      "theRank": 1,
      "top5SubjectsZh": [
        "人文学科与古典哲学",
        "医学与临床健康",
        "法学与法律实务",
        "地理与区域科学",
        "解剖与生理学"
      ],
      "top5SubjectsEn": [
        "Arts & Humanities / Philosophy",
        "Medicine & Clinical Health",
        "Law & Legal Studies",
        "Geography & Area Studies",
        "Anatomy & Physiology"
      ],
      "elementalFocus": {
        "primary": "Wood",
        "secondary": "Earth"
      },
      "tierBadge": "英国G5 · 超级精英大学 · 罗素集团",
      "tierBadgeEn": "UK G5 Super Elite · Russell Group",
      "academicAdvantageZh": "英语世界最古老学术殿堂，人文、医学、法学与数理底蕴无出其右，印星声望与学者威权极强。",
      "academicAdvantageEn": "The oldest university in the English-speaking world; unparalleled global prestige in humanities, medicine, law, and fundamental sciences."
    },
    {
      "id": "cambridge",
      "nameZh": "剑桥大学",
      "nameEn": "University of Cambridge",
      "country": "UK",
      "city": "Cambridge",
      "qsRank": 5,
      "theRank": 5,
      "top5SubjectsZh": [
        "数学与理论物理",
        "计算机科学与工程",
        "自然科学与化学",
        "现代语言与文学",
        "机械与航空工程"
      ],
      "top5SubjectsEn": [
        "Mathematics & Theoretical Physics",
        "Computer Science & Engineering",
        "Natural Sciences & Chemistry",
        "Modern Languages & Literature",
        "Mechanical Engineering"
      ],
      "elementalFocus": {
        "primary": "Water",
        "secondary": "Wood"
      },
      "tierBadge": "英国G5 · 超级精英大学 · 罗素集团",
      "tierBadgeEn": "UK G5 Super Elite · Russell Group",
      "academicAdvantageZh": "诞生120余位诺奖得主，数理逻辑、计算机理论与自然科学巅峰圣地，食伤秀气与智力心流极深。",
      "academicAdvantageEn": "Cradle of over 120 Nobel laureates; global epicenter for pure mathematics, theoretical physics, computing, and deep intellectual mastery."
    },
    {
      "id": "imperial",
      "nameZh": "帝国理工学院",
      "nameEn": "Imperial College London",
      "country": "UK",
      "city": "London",
      "qsRank": 2,
      "theRank": 9,
      "top5SubjectsZh": [
        "工程与计算机技术",
        "人工智能与数据科学",
        "材料工程与先进制造",
        "医学与生物工程",
        "应用数学与量化金融"
      ],
      "top5SubjectsEn": [
        "Engineering & Computing",
        "AI & Data Science",
        "Materials & Advanced Manufacturing",
        "Medicine & Bioengineering",
        "Applied Math & Quant Finance"
      ],
      "elementalFocus": {
        "primary": "Metal",
        "secondary": "Fire"
      },
      "tierBadge": "英国G5 · 专精理工硬核巅峰 · 罗素集团",
      "tierBadgeEn": "UK G5 Super Elite · STEM Powerhouse",
      "academicAdvantageZh": "欧洲硬核工科与AI科研首府，与伦敦资本与产业界零距离，七杀攻坚与技术变现爆发力首屈一指。",
      "academicAdvantageEn": "Europe's premier hard-tech and STEM research nexus; zero distance to London capital and frontier industrial innovation."
    },
    {
      "id": "ucl",
      "nameZh": "伦敦大学学院 (UCL)",
      "nameEn": "University College London (UCL)",
      "country": "UK",
      "city": "London",
      "qsRank": 9,
      "theRank": 22,
      "top5SubjectsZh": [
        "教育学与发展研究",
        "建筑学与城市规划",
        "心理学与脑科学",
        "医学与药学",
        "计算机科学与数字人文"
      ],
      "top5SubjectsEn": [
        "Education & Development Studies",
        "Architecture & Urban Planning",
        "Psychology & Neuroscience",
        "Medicine & Pharmacology",
        "Computer Science & Digital Humanities"
      ],
      "elementalFocus": {
        "primary": "Wood",
        "secondary": "Water"
      },
      "tierBadge": "英国G5 · 综合研究型先驱 · 罗素集团",
      "tierBadgeEn": "UK G5 Super Elite · Comprehensive Research",
      "academicAdvantageZh": "伦敦市中心综合旗舰，巴特莱特建筑、脑科学与教育学全球第一梯队，跨学科整合与包容度极高。",
      "academicAdvantageEn": "London's flagship polymath university; world #1 in Architecture (Bartlett) and Education (IOE), with extraordinary interdisciplinary breadth."
    },
    {
      "id": "edinburgh",
      "nameZh": "爱丁堡大学",
      "nameEn": "University of Edinburgh",
      "country": "UK",
      "city": "Edinburgh",
      "qsRank": 27,
      "theRank": 30,
      "top5SubjectsZh": [
        "语言学与文学",
        "计算机科学与人工智能",
        "兽医学与生命科学",
        "艺术与人文学科",
        "地球科学与环境学"
      ],
      "top5SubjectsEn": [
        "Linguistics & Literature",
        "Computer Science & AI",
        "Veterinary Medicine",
        "Arts & Humanities",
        "Geosciences & Environment"
      ],
      "elementalFocus": {
        "primary": "Water",
        "secondary": "Metal"
      },
      "tierBadge": "苏格兰最高学府 · 罗素集团",
      "tierBadgeEn": "Scotland Supreme Elite · Russell Group",
      "academicAdvantageZh": "欧洲启蒙运动策源地，英国AI与自然语言处理老牌先驱，北方水局滋养学者深邃思辨。",
      "academicAdvantageEn": "Cradle of the Scottish Enlightenment; historical pioneer in European AI, NLP, and philosophical deep inquiry."
    },
    {
      "id": "manchester",
      "nameZh": "曼彻斯特大学",
      "nameEn": "University of Manchester",
      "country": "UK",
      "city": "Manchester",
      "qsRank": 34,
      "theRank": 51,
      "top5SubjectsZh": [
        "材料科学与石墨烯",
        "发展研究学",
        "机械与化学工程",
        "物理与天文学",
        "药学与药理学"
      ],
      "top5SubjectsEn": [
        "Materials Science & Graphene",
        "Development Studies",
        "Mechanical & Chemical Engineering",
        "Physics & Astronomy",
        "Pharmacy & Pharmacology"
      ],
      "elementalFocus": {
        "primary": "Water",
        "secondary": "Metal"
      },
      "tierBadge": "红砖大学旗舰 · 罗素集团",
      "tierBadgeEn": "Red Brick Flagship · Russell Group",
      "academicAdvantageZh": "工业革命发祥地巨擘，石墨烯诞生之地，材料工程、硬科技与北方经济引擎深度绑定。",
      "academicAdvantageEn": "Colossus of the industrial revolution; birthplace of graphene and atomic splitting, deeply intertwined with northern tech commerce."
    },
    {
      "id": "kcl",
      "nameZh": "伦敦国王学院 (KCL)",
      "nameEn": "King's College London",
      "country": "UK",
      "city": "London",
      "qsRank": 40,
      "theRank": 38,
      "top5SubjectsZh": [
        "护理学与口腔医学",
        "心理学与精神病学",
        "法学与国际关系",
        "药剂与药理学",
        "战争研究与政治安全"
      ],
      "top5SubjectsEn": [
        "Nursing & Dentistry",
        "Psychology & Psychiatry",
        "Law & International Relations",
        "Pharmacy & Pharmacology",
        "War Studies & Geopolitics"
      ],
      "elementalFocus": {
        "primary": "Fire",
        "secondary": "Wood"
      },
      "tierBadge": "伦敦大学金三角 · 罗素集团",
      "tierBadgeEn": "Golden Triangle Elite · Russell Group",
      "academicAdvantageZh": "英国皇家宪章公认顶尖学府，医学、法学与国际地缘安全政策智库首屈一指，正官正印正气雄厚。",
      "academicAdvantageEn": "Royal Charter prestige; world benchmark in clinical health, nursing, international law, and global geopolitical war studies."
    },
    {
      "id": "lse",
      "nameZh": "伦敦政治经济学院 (LSE)",
      "nameEn": "London School of Economics and Political Science",
      "country": "UK",
      "city": "London",
      "qsRank": 50,
      "theRank": 46,
      "top5SubjectsZh": [
        "社会学与社会政策",
        "经济学与计量经济学",
        "政治学与国际关系",
        "会计与金融学",
        "法学与商业合规"
      ],
      "top5SubjectsEn": [
        "Sociology & Social Policy",
        "Economics & Econometrics",
        "Politics & International Relations",
        "Accounting & Finance",
        "Law & Commercial Regulation"
      ],
      "elementalFocus": {
        "primary": "Metal",
        "secondary": "Water"
      },
      "tierBadge": "英国G5 · 社会科学巅峰 · 罗素集团",
      "tierBadgeEn": "UK G5 Super Elite · Social Science Benchmark",
      "academicAdvantageZh": "全球政商领袖摇篮，经济金融与公共政策世界第一梯队，偏财智识、量化交易与华尔街/伦敦城直通车。",
      "academicAdvantageEn": "The global hub for political and economic thinkers; unmatched pipeline into City of London finance, multilateral policy, and quant economics."
    },
    {
      "id": "bristol",
      "nameZh": "布里斯托大学",
      "nameEn": "University of Bristol",
      "country": "UK",
      "city": "Bristol",
      "qsRank": 54,
      "theRank": 81,
      "top5SubjectsZh": [
        "航空航天与机械工程",
        "兽医学与地球科学",
        "社会政策与行政",
        "计算机科学与半导体",
        "教育与心理学"
      ],
      "top5SubjectsEn": [
        "Aerospace & Mechanical Engineering",
        "Veterinary & Earth Sciences",
        "Social Policy",
        "Computer Science & Chips",
        "Education & Psychology"
      ],
      "elementalFocus": {
        "primary": "Metal",
        "secondary": "Fire"
      },
      "tierBadge": "红砖名校 · 英国工程硅谷核心 · 罗素集团",
      "tierBadgeEn": "Red Brick Pioneer · UK Silicon Gorge · Russell Group",
      "academicAdvantageZh": "英国西南部工程硅谷核心，空客/劳斯莱斯研发重镇，航空与智能硬件产学研高地。",
      "academicAdvantageEn": "Hub of the UK's 'Silicon Gorge'; engineering powerhouse with direct aerospace and high-tech corporate partnerships."
    },
    {
      "id": "warwick",
      "nameZh": "华威大学",
      "nameEn": "University of Warwick",
      "country": "UK",
      "city": "Coventry",
      "qsRank": 69,
      "theRank": 106,
      "top5SubjectsZh": [
        "统计学与运筹学",
        "商业与管理 (WBS)",
        "数学与理论经济",
        "英语文学与戏剧",
        "制造工程 (WMG)"
      ],
      "top5SubjectsEn": [
        "Statistics & Operational Research",
        "Business & Management (WBS)",
        "Mathematics & Economics",
        "English & Theater",
        "Manufacturing Engineering (WMG)"
      ],
      "elementalFocus": {
        "primary": "Earth",
        "secondary": "Metal"
      },
      "tierBadge": "现代名校领军 · 罗素集团",
      "tierBadgeEn": "Modern Research Leader · Russell Group",
      "academicAdvantageZh": "华威商学院(WBS)与数学系名震全球，投行量化基金Target School，中央戊己土聚合产业资本。",
      "academicAdvantageEn": "Warwick Business School (WBS) and Mathematics tier-1 globally; prestigious primary target school for global investment banks and quant funds."
    },
    {
      "id": "glasgow",
      "nameZh": "格拉斯哥大学",
      "nameEn": "University of Glasgow",
      "country": "UK",
      "city": "Glasgow",
      "qsRank": 78,
      "theRank": 87,
      "top5SubjectsZh": [
        "解剖与生理学",
        "兽医学与生命科学",
        "英语语言与文学",
        "地理与城市研究",
        "法律学与法理学"
      ],
      "top5SubjectsEn": [
        "Anatomy & Physiology",
        "Veterinary Medicine",
        "English Language & Literature",
        "Geography & Urban Studies",
        "Law & Jurisprudence"
      ],
      "elementalFocus": {
        "primary": "Water",
        "secondary": "Wood"
      },
      "tierBadge": "苏格兰古典四校 · 罗素集团",
      "tierBadgeEn": "Ancient Scottish University · Russell Group",
      "academicAdvantageZh": "亚当·斯密母校，经济学发端之地，医学、工程与法理学历史渊博，北方壬癸水深厚沉淀。",
      "academicAdvantageEn": "Alma mater of Adam Smith and Lord Kelvin; rich legacy in medicine, political economy, and jurisprudence."
    },
    {
      "id": "birmingham",
      "nameZh": "伯明翰大学",
      "nameEn": "University of Birmingham",
      "country": "UK",
      "city": "Birmingham",
      "qsRank": 80,
      "theRank": 101,
      "top5SubjectsZh": [
        "材料科学与先进冶金",
        "体育与康复科学",
        "物理学与高能天体",
        "化学工程与能源",
        "牙科学与临床医学"
      ],
      "top5SubjectsEn": [
        "Materials Science & Metallurgy",
        "Sports & Rehabilitation",
        "Physics & High Energy Astronomy",
        "Chemical Engineering & Energy",
        "Dentistry & Clinical Medicine"
      ],
      "elementalFocus": {
        "primary": "Earth",
        "secondary": "Metal"
      },
      "tierBadge": "第一所红砖大学 · 罗素集团",
      "tierBadgeEn": "Original Red Brick · Russell Group",
      "academicAdvantageZh": "中央戊己土枢纽，雷达微波技术与引力波探测重镇，材料与能源研发极其扎实，沉淀型技术骨干首选。",
      "academicAdvantageEn": "Central England hub; world leader in advanced materials, quantum sensors, particle physics, and sustainable energy."
    },
    {
      "id": "southampton",
      "nameZh": "南安普顿大学",
      "nameEn": "University of Southampton",
      "country": "UK",
      "city": "Southampton",
      "qsRank": 80,
      "theRank": 97,
      "top5SubjectsZh": [
        "光电与光纤通信 (ORC)",
        "电子电气与微电子",
        "海洋学与海洋科学",
        "声学与振动学 (ISVR)",
        "计算机科学与网络"
      ],
      "top5SubjectsEn": [
        "Optoelectronics & Photonics (ORC)",
        "Electrical & Microelectronics",
        "Oceanography & Marine Sciences",
        "Acoustics & Vibration (ISVR)",
        "Computer Science & Web Science"
      ],
      "elementalFocus": {
        "primary": "Water",
        "secondary": "Fire"
      },
      "tierBadge": "英国顶尖理工航母 · 罗素集团",
      "tierBadgeEn": "Premier Science & Engineering · Russell Group",
      "academicAdvantageZh": "全球光纤通信与光电产业策源地，英国国家海洋中心所在地，芯片与硬件技术壁垒深厚。",
      "academicAdvantageEn": "Global cradle of modern optical fiber communications (ORC); world leader in marine sciences, microelectronics, and acoustics."
    },
    {
      "id": "leeds",
      "nameZh": "利兹大学",
      "nameEn": "University of Leeds",
      "country": "UK",
      "city": "Leeds",
      "qsRank": 82,
      "theRank": 129,
      "top5SubjectsZh": [
        "地球与海洋科学",
        "环境科学与生态学",
        "交通运输工程与规划",
        "传媒与传播学",
        "地理与城市经济"
      ],
      "top5SubjectsEn": [
        "Earth & Marine Sciences",
        "Environmental Studies",
        "Transportation Engineering",
        "Communication & Media Studies",
        "Geography & Urban Economics"
      ],
      "elementalFocus": {
        "primary": "Water",
        "secondary": "Earth"
      },
      "tierBadge": "红砖名校 · 罗素集团",
      "tierBadgeEn": "Red Brick University · Russell Group",
      "academicAdvantageZh": "英国北方金融与法律重镇大学，交通规划与环境科学享誉全球，商学院与传媒学业界知名度高。",
      "academicAdvantageEn": "Anchor of the North's financial and legal corridor; global excellence in transport studies, environmental science, and media."
    },
    {
      "id": "durham",
      "nameZh": "杜伦大学",
      "nameEn": "Durham University",
      "country": "UK",
      "city": "Durham",
      "qsRank": 89,
      "theRank": 174,
      "top5SubjectsZh": [
        "考古学与古生物",
        "神学与宗教研究",
        "古典文学与古代史",
        "地理与空间科学",
        "天体物理与宇宙学"
      ],
      "top5SubjectsEn": [
        "Archaeology",
        "Theology & Religion",
        "Classics & Ancient History",
        "Geography & Spatial Sciences",
        "Astrophysics & Cosmology"
      ],
      "elementalFocus": {
        "primary": "Earth",
        "secondary": "Wood"
      },
      "tierBadge": "传统学院制三杰 (Doxbridge) · 罗素集团",
      "tierBadgeEn": "Doxbridge Collegiate Tradition · Russell Group",
      "academicAdvantageZh": "牛剑之外最纯正的古老学院制贵族名校，文史哲神学与天体物理极富盛名，印星贵气与学术圈人脉深厚。",
      "academicAdvantageEn": "One of England's ancient collegiate triumvirates alongside Oxford and Cambridge; unmatched prestige in classics, theology, and astronomy."
    },
    {
      "id": "standrews",
      "nameZh": "圣安德鲁斯大学",
      "nameEn": "University of St Andrews",
      "country": "UK",
      "city": "St Andrews",
      "qsRank": 104,
      "theRank": 193,
      "top5SubjectsZh": [
        "哲学与伦理学",
        "国际关系与政治",
        "经典历史与艺术史",
        "物理与天文学",
        "心理学与神经生物"
      ],
      "top5SubjectsEn": [
        "Philosophy & Ethics",
        "International Relations",
        "Classics & Art History",
        "Physics & Astronomy",
        "Psychology"
      ],
      "elementalFocus": {
        "primary": "Water",
        "secondary": "Wood"
      },
      "tierBadge": "苏格兰最古老大学 · 皇家贵族摇篮",
      "tierBadgeEn": "Scotland's Oldest University · Royal Alma Mater",
      "academicAdvantageZh": "苏格兰古老学府，威廉王子母校，师生比与教学满意度常年位居英国榜首，小而精的贵族学术氛围。",
      "academicAdvantageEn": "Scotland's oldest university; prince's alma mater; #1 student satisfaction in the UK with elite small-seminar scholarship."
    },
    {
      "id": "sheffield",
      "nameZh": "谢菲尔德大学",
      "nameEn": "University of Sheffield",
      "country": "UK",
      "city": "Sheffield",
      "qsRank": 105,
      "theRank": 105,
      "top5SubjectsZh": [
        "机械与航空工程",
        "材料与冶金工程",
        "建筑学与景观设计",
        "信息与图书管理",
        "土木与结构工程"
      ],
      "top5SubjectsEn": [
        "Mechanical & Aerospace Engineering",
        "Materials & Metallurgy",
        "Architecture & Landscape",
        "Information Management",
        "Civil & Structural Engineering"
      ],
      "elementalFocus": {
        "primary": "Metal",
        "secondary": "Earth"
      },
      "tierBadge": "先进制造研发中心 (AMRC) · 罗素集团",
      "tierBadgeEn": "Red Brick Pioneer · AMRC Leader · Russell Group",
      "academicAdvantageZh": "世界钢铁与先进制造之都重镇，AMRC波音工业园联合研发体，工程硬实力与工科Tenure机制扎实。",
      "academicAdvantageEn": "Global hub for advanced manufacturing (AMRC in partnership with Boeing); benchmark in structural engineering and metallurgical craft."
    },
    {
      "id": "nottingham",
      "nameZh": "诺丁汉大学",
      "nameEn": "University of Nottingham",
      "country": "UK",
      "city": "Nottingham",
      "qsRank": 108,
      "theRank": 130,
      "top5SubjectsZh": [
        "药剂学与药理学",
        "农业与林业科学",
        "化学与分子工程",
        "兽医学与动物学",
        "法学与国际法"
      ],
      "top5SubjectsEn": [
        "Pharmacy & Pharmacology",
        "Agriculture & Forestry",
        "Chemistry & Molecular Engineering",
        "Veterinary Medicine",
        "Law & International Law"
      ],
      "elementalFocus": {
        "primary": "Wood",
        "secondary": "Water"
      },
      "tierBadge": "国际化红砖大学 · 罗素集团",
      "tierBadgeEn": "Global Red Brick University · Russell Group",
      "academicAdvantageZh": "核磁共振(MRI)发明地，药学与生命科学常居全球前十，国际化校区布局广泛，学术成果商业转化力高。",
      "academicAdvantageEn": "Birthplace of MRI scanning; world top-10 in pharmacy and pharmacology; powerhouse in agricultural and pharmaceutical synthesis."
    },
    {
      "id": "qmul",
      "nameZh": "伦敦玛丽女王大学 (QMUL)",
      "nameEn": "Queen Mary University of London",
      "country": "UK",
      "city": "London",
      "qsRank": 120,
      "theRank": 135,
      "top5SubjectsZh": [
        "牙科学与口腔医学",
        "法学与商业仲裁 (CCLS)",
        "英语语言文学",
        "戏剧与表演艺术",
        "材料与生物工程"
      ],
      "top5SubjectsEn": [
        "Dentistry",
        "Law & Commercial Arbitration (CCLS)",
        "English Language & Literature",
        "Drama & Performing Arts",
        "Materials & Bioengineering"
      ],
      "elementalFocus": {
        "primary": "Fire",
        "secondary": "Metal"
      },
      "tierBadge": "伦敦大学校区独立旗舰 · 罗素集团",
      "tierBadgeEn": "London University Central · Russell Group",
      "academicAdvantageZh": "伦敦唯一拥有一体化校园的罗素大学，知识产权法与国际仲裁全球顶尖，医学院历史极为悠久。",
      "academicAdvantageEn": "Only campus-based Russell Group university in central London; world benchmark in intellectual property law (CCLS) and dentistry."
    },
    {
      "id": "bath",
      "nameZh": "巴斯大学",
      "nameEn": "University of Bath",
      "country": "UK",
      "city": "Bath",
      "qsRank": 150,
      "theRank": 250,
      "top5SubjectsZh": [
        "商业与管理学",
        "建筑学与建造工程",
        "体育科学与运动医学",
        "机械工程与汽车制造",
        "发展研究与翻译"
      ],
      "top5SubjectsEn": [
        "Business & Management",
        "Architecture & Building",
        "Sports Science & Medicine",
        "Mechanical & Automotive Engineering",
        "Development & Translation"
      ],
      "elementalFocus": {
        "primary": "Earth",
        "secondary": "Metal"
      },
      "tierBadge": "英国顶尖平板玻璃大学 · 商科与实习之王",
      "tierBadgeEn": "Plate Glass Leader · #1 for Industry Placement",
      "academicAdvantageZh": "英国就业率与产学研实习(Placement)常年第一，巴斯管理学院声誉卓著，高管与实用技术实战派。",
      "academicAdvantageEn": "UK champion for graduate employability and paid industry placements; prestigious Bath School of Management and elite engineering training."
    }
  ],
  "USA": [
    {
      "id": "mit",
      "nameZh": "麻省理工学院 (MIT)",
      "nameEn": "Massachusetts Institute of Technology (MIT)",
      "country": "USA",
      "city": "Boston",
      "qsRank": 1,
      "theRank": 2,
      "top5SubjectsZh": [
        "计算机科学与人工智能",
        "电子电气工程",
        "机械工程与机器人",
        "物理学与数理科学",
        "经济学与运筹金融"
      ],
      "top5SubjectsEn": [
        "Computer Science & AI",
        "Electrical Engineering",
        "Mechanical Engineering & Robotics",
        "Physics & Mathematical Sciences",
        "Economics & Operations Research"
      ],
      "elementalFocus": {
        "primary": "Fire",
        "secondary": "Metal"
      },
      "tierBadge": "世界理工第一殿堂 · 顶级研究型大学",
      "tierBadgeEn": "World #1 Engineering Institution · Top Tier Research",
      "academicAdvantageZh": "全球科技极值圣殿，AI、量子计算与硬科技发祥地，七杀攻坚与食伤创新之巅，技术创业与顶尖科研统治力无可匹敌。",
      "academicAdvantageEn": "World #1 benchmark for technology and applied science; birthplace of modern computing, AI, and industrial innovation."
    },
    {
      "id": "harvard",
      "nameZh": "哈佛大学",
      "nameEn": "Harvard University",
      "country": "USA",
      "city": "Boston",
      "qsRank": 4,
      "theRank": 4,
      "top5SubjectsZh": [
        "商学与商业管理 (HBS)",
        "法学与法理政治 (HLS)",
        "医学与生命科学",
        "经济学与计量金融",
        "社会科学与人文历史"
      ],
      "top5SubjectsEn": [
        "Business & Management (HBS)",
        "Law & Jurisprudence (HLS)",
        "Medicine & Life Sciences",
        "Economics & Quantitative Finance",
        "Social Sciences & History"
      ],
      "elementalFocus": {
        "primary": "Wood",
        "secondary": "Earth"
      },
      "tierBadge": "常春藤盟校首席 · 全球声望巅峰",
      "tierBadgeEn": "Ivy League Flagship · Global Ultimate Prestige",
      "academicAdvantageZh": "全球权力与财富网络核心枢纽，政商法医最高殿堂，正官正印贵气无双，终身校友人脉与制度掌控力极强。",
      "academicAdvantageEn": "The pinnacle of global institutional power; unrivaled alumni network across politics, corporate governance, law, and medicine."
    },
    {
      "id": "stanford",
      "nameZh": "斯坦福大学",
      "nameEn": "Stanford University",
      "country": "USA",
      "city": "San Francisco",
      "qsRank": 6,
      "theRank": 3,
      "top5SubjectsZh": [
        "计算机科学与深度学习",
        "高新技术创业与管理",
        "电子电气与半导体",
        "生物医学与生物工程",
        "法学与知识产权"
      ],
      "top5SubjectsEn": [
        "Computer Science & Deep Learning",
        "High-Tech Entrepreneurship",
        "Electrical Engineering & Semiconductors",
        "Biomedicine & Bioengineering",
        "Law & Intellectual Property"
      ],
      "elementalFocus": {
        "primary": "Fire",
        "secondary": "Wood"
      },
      "tierBadge": "硅谷创新发动机 · 顶级私立学府",
      "tierBadgeEn": "Silicon Valley Engine · Elite Research Titan",
      "academicAdvantageZh": "硅谷的心脏与造血中枢，孵化谷歌、英伟达等科技巨头，食伤吐秀与偏财变现爆发力极致充沛。",
      "academicAdvantageEn": "The beating heart of Silicon Valley; unparalleled venture-backed ecosystem and commercialization of radical tech innovations."
    },
    {
      "id": "caltech",
      "nameZh": "加州理工学院 (Caltech)",
      "nameEn": "California Institute of Technology (Caltech)",
      "country": "USA",
      "city": "Los Angeles",
      "qsRank": 10,
      "theRank": 7,
      "top5SubjectsZh": [
        "地球与行星科学 (JPL)",
        "物理学与粒子物理",
        "航空航天工程",
        "化学与分子生物",
        "计算机科学与应用数学"
      ],
      "top5SubjectsEn": [
        "Earth & Planetary Sciences (JPL)",
        "Physics & Particle Physics",
        "Aerospace Engineering",
        "Chemistry & Molecular Biology",
        "Computer Science & Applied Math"
      ],
      "elementalFocus": {
        "primary": "Metal",
        "secondary": "Fire"
      },
      "tierBadge": "NASA喷气推进实验室管理机构 · 小而精科学泰斗",
      "tierBadgeEn": "NASA JPL Administrator · Elite Scientific Purity",
      "academicAdvantageZh": "掌管NASA喷气推进实验室(JPL)，师生诺奖密度世界第一，单一技术专家极致纯粹心流圣殿。",
      "academicAdvantageEn": "Manager of NASA's Jet Propulsion Laboratory; unmatched Nobel laureate density per capita; supreme focus on pure scientific frontiers."
    },
    {
      "id": "upenn",
      "nameZh": "宾夕法尼亚大学 (UPenn / 沃顿)",
      "nameEn": "University of Pennsylvania",
      "country": "USA",
      "city": "Philadelphia",
      "qsRank": 11,
      "theRank": 16,
      "top5SubjectsZh": [
        "金融学与商业分析 (Wharton)",
        "护理学与临床医学",
        "经济学与管理学",
        "法学与商业仲裁",
        "计算机与跨学科工程"
      ],
      "top5SubjectsEn": [
        "Finance & Business Analytics (Wharton)",
        "Nursing & Clinical Medicine",
        "Economics & Management",
        "Law & Corporate Practice",
        "Computer Science & Interdisciplinary Tech"
      ],
      "elementalFocus": {
        "primary": "Metal",
        "secondary": "Water"
      },
      "tierBadge": "常春藤盟校 · 沃顿商学院圣殿",
      "tierBadgeEn": "Ivy League · Wharton School of Business",
      "academicAdvantageZh": "沃顿商学院名列全球金融圣经，华尔街投行与对冲基金最高统治力，正偏财双美与操盘统帅首选。",
      "academicAdvantageEn": "Home to the legendary Wharton School; unparalleled dominance on Wall Street, institutional asset management, and private equity."
    },
    {
      "id": "berkeley",
      "nameZh": "加州大学伯克利分校 (UC Berkeley)",
      "nameEn": "University of California, Berkeley",
      "country": "USA",
      "city": "San Francisco",
      "qsRank": 12,
      "theRank": 9,
      "top5SubjectsZh": [
        "计算机系统与开源软件",
        "化学与分子科学",
        "环境工程与生态学",
        "物理学与理论天体",
        "经济学与公共政策"
      ],
      "top5SubjectsEn": [
        "Computer Systems & Open Source",
        "Chemistry & Molecular Sciences",
        "Environmental Engineering",
        "Physics & Astrophysics",
        "Economics & Public Policy"
      ],
      "elementalFocus": {
        "primary": "Wood",
        "secondary": "Fire"
      },
      "tierBadge": "全球公立大学之首 · 科技先驱",
      "tierBadgeEn": "World #1 Public University · Research Colossus",
      "academicAdvantageZh": "公立大学巅峰，BSD/RISC-V/Spark开源软件策源地，学术自由与硬核技术批判反思精神极为强盛。",
      "academicAdvantageEn": "The world's preeminent public research university; pioneer of modern open-source computing (BSD, RISC-V), Berkeley Lab science, and free speech."
    },
    {
      "id": "cornell",
      "nameZh": "康奈尔大学",
      "nameEn": "Cornell University",
      "country": "USA",
      "city": "New York",
      "qsRank": 16,
      "theRank": 20,
      "top5SubjectsZh": [
        "农业与生命科学",
        "计算机科学与工程",
        "酒店与服务管理",
        "兽医学与生态学",
        "建筑学与城市设计"
      ],
      "top5SubjectsEn": [
        "Agriculture & Life Sciences",
        "Computer Science & Engineering",
        "Hospitality Management",
        "Veterinary Medicine",
        "Architecture & Urban Design"
      ],
      "elementalFocus": {
        "primary": "Earth",
        "secondary": "Wood"
      },
      "tierBadge": "常春藤盟校 · 最包容精英研究大学",
      "tierBadgeEn": "Ivy League · Most Comprehensive Vision",
      "academicAdvantageZh": "纽约科技与农业并立常春藤，纽约曼哈顿Cornell Tech直通华尔街与科技大厂，务实工科底盘扎实。",
      "academicAdvantageEn": "Ivy League institution bridging deep upstate natural sciences with cutting-edge Manhattan tech innovation (Cornell Tech)."
    },
    {
      "id": "chicago",
      "nameZh": "芝加哥大学",
      "nameEn": "University of Chicago",
      "country": "USA",
      "city": "Chicago",
      "qsRank": 21,
      "theRank": 13,
      "top5SubjectsZh": [
        "经济学与芝加哥学派",
        "社会学与法理学",
        "物理学与费米核物理",
        "商学与量化金融 (Booth)",
        "数学与数理统计"
      ],
      "top5SubjectsEn": [
        "Economics & Chicago School",
        "Sociology & Jurisprudence",
        "Physics & Nuclear Science",
        "Business & Quant Finance (Booth)",
        "Mathematics & Statistics"
      ],
      "elementalFocus": {
        "primary": "Water",
        "secondary": "Metal"
      },
      "tierBadge": "芝加哥经济学派策源地 · 诺奖摇篮",
      "tierBadgeEn": "Birthplace of Chicago Economics · Elite Intellect",
      "academicAdvantageZh": "中央戊己土上的严谨逻辑圣殿，芝加哥经济学派独步天下，量化金融、经济模型与社科考据深度极高。",
      "academicAdvantageEn": "Unmatched intellectual rigor; birthplace of modern quantitative economics, modern finance theory, and rigorous legal sociology."
    },
    {
      "id": "princeton",
      "nameZh": "普林斯顿大学",
      "nameEn": "Princeton University",
      "country": "USA",
      "city": "New York",
      "qsRank": 22,
      "theRank": 6,
      "top5SubjectsZh": [
        "数学与纯数理论",
        "理论物理与爱因斯坦高研院",
        "经济学与宏观政策",
        "公共与国际事务 (SPIA)",
        "计算机理论科学"
      ],
      "top5SubjectsEn": [
        "Pure Mathematics",
        "Theoretical Physics & IAS",
        "Economics & Macro Policy",
        "Public & International Affairs",
        "Theoretical Computer Science"
      ],
      "elementalFocus": {
        "primary": "Water",
        "secondary": "Wood"
      },
      "tierBadge": "常春藤盟校 · 纯粹基础学术圣杯",
      "tierBadgeEn": "Ivy League · Pure Academic Holy Grail",
      "academicAdvantageZh": "近乎不食人间烟火的理论纯粹学术圣地，爱因斯坦曾执教高研院，无商学院医学院法学院，全神贯注基础科学。",
      "academicAdvantageEn": "The pure academic holy grail of the Ivy League; deeply dedicated to undergraduate mastery and unmatched theoretical breakthrough."
    },
    {
      "id": "yale",
      "nameZh": "耶鲁大学",
      "nameEn": "Yale University",
      "country": "USA",
      "city": "New York",
      "qsRank": 23,
      "theRank": 10,
      "top5SubjectsZh": [
        "法学与宪法司法 (YLS)",
        "历史学与人文学科",
        "政治学与国际治理",
        "戏剧与表演艺术",
        "生物医学与精神卫生"
      ],
      "top5SubjectsEn": [
        "Law & Constitutional Jurisprudence (YLS)",
        "History & Humanities",
        "Political Science & Governance",
        "Drama & Performing Arts",
        "Biomedicine & Psychiatry"
      ],
      "elementalFocus": {
        "primary": "Wood",
        "secondary": "Earth"
      },
      "tierBadge": "常春藤盟校 · 顶级法官与总统摇篮",
      "tierBadgeEn": "Ivy League · Presidential & Judicial Cradle",
      "academicAdvantageZh": "耶鲁法学院(YLS)连续数十年全美第一，美国总统与最高法大法官孵化地，深沉文人骨气与公权力掌控力顶峰。",
      "academicAdvantageEn": "Unrivaled #1 law school in the United States; historic crucible for Supreme Court justices, heads of state, and literary titan scholars."
    },
    {
      "id": "jhu",
      "nameZh": "约翰霍普金斯大学 (JHU)",
      "nameEn": "Johns Hopkins University",
      "country": "USA",
      "city": "Washington",
      "qsRank": 32,
      "theRank": 15,
      "top5SubjectsZh": [
        "公共卫生与流行病学 (Bloomberg)",
        "临床医学与神经科学",
        "生物医学工程 (BME)",
        "国际关系与战略 (SAIS)",
        "应用物理实验室 (APL)"
      ],
      "top5SubjectsEn": [
        "Public Health & Epidemiology",
        "Clinical Medicine & Neuroscience",
        "Biomedical Engineering (BME)",
        "International Relations (SAIS)",
        "Applied Physics (APL)"
      ],
      "elementalFocus": {
        "primary": "Water",
        "secondary": "Wood"
      },
      "tierBadge": "全美第一所研究型大学 · 全球医学之冠",
      "tierBadgeEn": "America's First Research University · Medical Crown",
      "academicAdvantageZh": "全球公共卫生与医学无可争议的统治者，疫情数据全球标准制定者，华盛顿近邻SAIS国际战略智库。",
      "academicAdvantageEn": "Global standard-bearer in medicine, public health (Bloomberg School), and international diplomacy (SAIS)."
    },
    {
      "id": "columbia",
      "nameZh": "哥伦比亚大学",
      "nameEn": "Columbia University",
      "country": "USA",
      "city": "New York",
      "qsRank": 34,
      "theRank": 17,
      "top5SubjectsZh": [
        "新闻传播与普利策奖",
        "法学与国际法 (CLS)",
        "商学与金融投资 (CBS)",
        "地球环境与拉蒙特地质",
        "英语文学与哲学"
      ],
      "top5SubjectsEn": [
        "Journalism & Media (Pulitzer)",
        "Law & Corporate Practice",
        "Business & Finance (CBS)",
        "Earth & Climate Science",
        "English & Comparative Literature"
      ],
      "elementalFocus": {
        "primary": "Fire",
        "secondary": "Metal"
      },
      "tierBadge": "常春藤盟校 · 曼哈顿世界十字路口",
      "tierBadgeEn": "Ivy League · Heart of Manhattan",
      "academicAdvantageZh": "坐落曼哈顿晨边高地，普利策奖摇篮，与华尔街、联合国与跨国媒体巨头无缝共生，商业实战与传媒话语权极高。",
      "academicAdvantageEn": "Situated in the capital of global finance and media; custodian of the Pulitzer Prizes; direct bridge to Wall Street and multilateral leadership."
    },
    {
      "id": "ucla",
      "nameZh": "加州大学洛杉矶分校 (UCLA)",
      "nameEn": "University of California, Los Angeles",
      "country": "USA",
      "city": "Los Angeles",
      "qsRank": 42,
      "theRank": 18,
      "top5SubjectsZh": [
        "影视戏剧与数字艺术 (TFT)",
        "临床医学与健康科学",
        "心理学与应用认知",
        "生物与生物化学",
        "电气与计算机工程"
      ],
      "top5SubjectsEn": [
        "Film, Television & Digital Media",
        "Clinical Medicine",
        "Psychology & Cognitive Science",
        "Biological Sciences",
        "Electrical & Computer Engineering"
      ],
      "elementalFocus": {
        "primary": "Fire",
        "secondary": "Wood"
      },
      "tierBadge": "全美公立旗舰 · 好莱坞与西海岸科技枢纽",
      "tierBadgeEn": "Top US Public Flagship · Entertainment & Tech",
      "academicAdvantageZh": "洛杉矶阳光与好莱坞娱乐工业引擎，影视、临床医学与计算机跨界强盛，申请人数全美第一，开放活跃。",
      "academicAdvantageEn": "Hollywood's intellectual partner; world powerhouse in digital media, cinema, sports science, and clinical immunology."
    },
    {
      "id": "nyu",
      "nameZh": "纽约大学 (NYU)",
      "nameEn": "New York University",
      "country": "USA",
      "city": "New York",
      "qsRank": 43,
      "theRank": 33,
      "top5SubjectsZh": [
        "金融与商业 (Stern商学院)",
        "应用数学与流体力学 (Courant)",
        "法学与国际税法",
        "哲学与认知科学",
        "电影与表演艺术 (Tisch)"
      ],
      "top5SubjectsEn": [
        "Finance & Business (Stern)",
        "Applied Mathematics (Courant)",
        "Law & International Tax",
        "Philosophy & Mind",
        "Film & Performing Arts (Tisch)"
      ],
      "elementalFocus": {
        "primary": "Fire",
        "secondary": "Metal"
      },
      "tierBadge": "曼哈顿无边界大学 · 柯朗研究所与斯特恩商院",
      "tierBadgeEn": "Manhattan Urban Colossus · Stern & Courant",
      "academicAdvantageZh": "华盛顿广场为校园，柯朗数学研究所应用数学全美第一，斯特恩商学院投行输送能力极其彪悍，都市偏财极旺。",
      "academicAdvantageEn": "Campus woven into the fabric of Manhattan; home to Courant (world #1 applied math) and Stern (top-tier Wall Street feeder)."
    },
    {
      "id": "umich",
      "nameZh": "密歇根大学安娜堡分校 (UMich)",
      "nameEn": "University of Michigan-Ann Arbor",
      "country": "USA",
      "city": "Detroit",
      "qsRank": 44,
      "theRank": 23,
      "top5SubjectsZh": [
        "机械与汽车智能工程",
        "信息与数据科学 (UMSI)",
        "商学与管理 (Ross)",
        "公共政策与社会调查",
        "医学与牙科学"
      ],
      "top5SubjectsEn": [
        "Mechanical & Automotive Engineering",
        "Information & Data (UMSI)",
        "Business & Management (Ross)",
        "Public Policy & Survey Research",
        "Medicine & Dentistry"
      ],
      "elementalFocus": {
        "primary": "Water",
        "secondary": "Earth"
      },
      "tierBadge": "公立常春藤旗舰 · 全美科研经费之王",
      "tierBadgeEn": "Public Ivy Colossus · Top R&D Expenditure",
      "academicAdvantageZh": "全美公立大学科研经费长期第一，工程学院与罗斯商学院硬核强韧，五大湖工业自动化与芯片汽车中枢。",
      "academicAdvantageEn": "Annual research budget exceeding $1.8 billion; unmatched scale in engineering, automotive intelligence, and survey methodology."
    },
    {
      "id": "northwestern",
      "nameZh": "西北大学",
      "nameEn": "Northwestern University",
      "country": "USA",
      "city": "Chicago",
      "qsRank": 50,
      "theRank": 28,
      "top5SubjectsZh": [
        "整合营销与新闻学 (Medill)",
        "商业与管理 (Kellogg商学院)",
        "材料科学与纳米工程",
        "化学与能源催化",
        "戏剧与传播学"
      ],
      "top5SubjectsEn": [
        "Journalism & Integrated Marketing (Medill)",
        "Business Management (Kellogg)",
        "Materials Science & Nanotech",
        "Chemistry & Catalysis",
        "Theater & Communication"
      ],
      "elementalFocus": {
        "primary": "Earth",
        "secondary": "Fire"
      },
      "tierBadge": "十大联盟学术霸主 · 凯洛格与麦迪尔圣殿",
      "tierBadgeEn": "Big Ten Academic Titan · Kellogg & Medill",
      "academicAdvantageZh": "麦迪尔新闻营销全球公认第一，凯洛格商学院市场营销霸主，密歇根湖畔私立贵族，商业洞察极度敏锐。",
      "academicAdvantageEn": "Medill School created modern IMC; Kellogg School transformed strategic marketing; nanotechnology pioneer."
    },
    {
      "id": "cmu",
      "nameZh": "卡耐基梅隆大学 (CMU)",
      "nameEn": "Carnegie Mellon University",
      "country": "USA",
      "city": "Pittsburgh",
      "qsRank": 58,
      "theRank": 28,
      "top5SubjectsZh": [
        "计算机科学与软件工程",
        "机器人与自动驾驶 (Robotics)",
        "人工智能与自然语言",
        "人机交互与界面设计 (HCI)",
        "戏剧与舞台艺术"
      ],
      "top5SubjectsEn": [
        "Computer Science & Software",
        "Robotics & Autonomous Systems",
        "AI & Natural Language Processing",
        "Human-Computer Interaction (HCI)",
        "Drama & Stage Arts"
      ],
      "elementalFocus": {
        "primary": "Metal",
        "secondary": "Fire"
      },
      "tierBadge": "全球计算机与AI代码圣殿",
      "tierBadgeEn": "Global Cathedral of Computer Science & AI",
      "academicAdvantageZh": "全球程序员与AI科学家的麦加，计算机学院(SCS)与机器人研究所世界第一，技术极客与算法架构杀伤力最顶峰。",
      "academicAdvantageEn": "The Mecca of software engineering and robotics; home to the legendary School of Computer Science (SCS); unparalleled coding depth."
    },
    {
      "id": "duke",
      "nameZh": "杜克大学",
      "nameEn": "Duke University",
      "country": "USA",
      "city": "Durham",
      "qsRank": 61,
      "theRank": 26,
      "top5SubjectsZh": [
        "临床医学与护理学",
        "生物医学工程",
        "商业与医疗管理 (Fuqua)",
        "法学与环境政策 (Nicholas)",
        "统计学与公共政策"
      ],
      "top5SubjectsEn": [
        "Clinical Medicine & Nursing",
        "Biomedical Engineering",
        "Business & Healthcare (Fuqua)",
        "Law & Environmental Policy",
        "Statistics & Public Policy"
      ],
      "elementalFocus": {
        "primary": "Wood",
        "secondary": "Fire"
      },
      "tierBadge": "南方哈佛 · 北卡研究三角洲核心",
      "tierBadgeEn": "Southern Harvard · Research Triangle Anchor",
      "academicAdvantageZh": "北卡研究三角洲核心，医疗健康、生物制药与高科技投资黄金走廊，富卡商学院全球网络深广。",
      "academicAdvantageEn": "Anchor of the Research Triangle Park; world leader in cancer biology, environmental science, and healthcare management."
    },
    {
      "id": "ucsd",
      "nameZh": "加州大学圣迭戈分校 (UCSD)",
      "nameEn": "University of California, San Diego",
      "country": "USA",
      "city": "San Diego",
      "qsRank": 72,
      "theRank": 34,
      "top5SubjectsZh": [
        "海洋学与地球物理 (Scripps)",
        "生物科学与分子生物",
        "计算机科学与生物信息",
        "认知科学与脑机接口",
        "药学与生物医药工程"
      ],
      "top5SubjectsEn": [
        "Oceanography (Scripps)",
        "Biological Sciences",
        "Computer Science & Bioinformatics",
        "Cognitive Science & BCI",
        "Pharmacology & Bioengineering"
      ],
      "elementalFocus": {
        "primary": "Water",
        "secondary": "Metal"
      },
      "tierBadge": "全球生物医药重镇 · 斯克里普斯海洋所",
      "tierBadgeEn": "Biotech Capital Anchor · Scripps Institution",
      "academicAdvantageZh": "全美生物制药第三大中心圣迭戈核心，斯克里普斯海洋研究所名满天下，计算生物与硬件前沿高地。",
      "academicAdvantageEn": "The scientific engine behind San Diego's $30B biotech ecosystem; home to the historic Scripps Institution of Oceanography."
    },
    {
      "id": "washington",
      "nameZh": "华盛顿大学 (UW-Seattle)",
      "nameEn": "University of Washington",
      "country": "USA",
      "city": "Seattle",
      "qsRank": 76,
      "theRank": 25,
      "top5SubjectsZh": [
        "医学与健康指标科学 (IHME)",
        "计算机科学与工程 (Paul G. Allen)",
        "生命科学与基因工程",
        "地球物理与大气科学",
        "统计与信息科学"
      ],
      "top5SubjectsEn": [
        "Health Metrics Sciences (IHME)",
        "Computer Science (Paul G. Allen)",
        "Genomic Sciences",
        "Atmospheric & Earth Sciences",
        "Information & Statistics"
      ],
      "elementalFocus": {
        "primary": "Water",
        "secondary": "Wood"
      },
      "tierBadge": "微软与亚马逊后花园 · 全球健康研究第一",
      "tierBadgeEn": "Pacific Northwest Flagship · Global Health Champion",
      "academicAdvantageZh": "西雅图科技走廊命脉，保罗·艾伦计算机学院与盖茨基金会深层绑定，全球健康与云原生计算先锋。",
      "academicAdvantageEn": "Nexus of the Pacific Northwest tech corridor; powerhouse in cloud computing, genomics, and global health metrics (IHME)."
    }
  ],
  "Canada": [
    {
      "id": "utoronto",
      "nameZh": "多伦多大学",
      "nameEn": "University of Toronto",
      "country": "Canada",
      "city": "Toronto",
      "qsRank": 25,
      "theRank": 21,
      "top5SubjectsZh": [
        "人工智能与深度学习 (Vector)",
        "临床医学与肿瘤学",
        "计算机科学与数据科学",
        "商学与金融 (Rotman)",
        "地理与城市规划"
      ],
      "top5SubjectsEn": [
        "AI & Deep Learning (Vector)",
        "Clinical Medicine & Oncology",
        "Computer Science",
        "Finance & Management (Rotman)",
        "Geography & Urban Studies"
      ],
      "elementalFocus": {
        "primary": "Fire",
        "secondary": "Water"
      },
      "tierBadge": "加拿大第一学府 · U15联盟盟主",
      "tierBadgeEn": "Canada #1 University · U15 Alliance Flagship",
      "academicAdvantageZh": "现代深度学习发祥地（辛顿教授），加拿大国宝级学术航空母舰，多伦多金融与科技生态最高主宰。",
      "academicAdvantageEn": "Cradle of modern deep learning (Geoffrey Hinton); Canada's undisputed #1 research powerhouse; immense global academic network."
    },
    {
      "id": "mcgill",
      "nameZh": "麦吉尔大学",
      "nameEn": "McGill University",
      "country": "Canada",
      "city": "Montreal",
      "qsRank": 29,
      "theRank": 49,
      "top5SubjectsZh": [
        "神经科学与临床医学",
        "解剖与生理学",
        "矿业与采矿工程",
        "法学与双法系实务",
        "音乐与声学工程"
      ],
      "top5SubjectsEn": [
        "Neuroscience & Clinical Medicine",
        "Anatomy & Physiology",
        "Mining Engineering",
        "Bilingual Law (Civil & Common)",
        "Music & Sound Recording"
      ],
      "elementalFocus": {
        "primary": "Wood",
        "secondary": "Water"
      },
      "tierBadge": "加拿大哈佛 · 罗德学者全加第一",
      "tierBadgeEn": "Canada's Harvard · Top Rhodes Scholar Feeder",
      "academicAdvantageZh": "全加罗德学者最多的古典名校，英法双语蒙特利尔心脏，医学院与双法系法学院崇高贵气。",
      "academicAdvantageEn": "Canada's most internationally renowned university; elite in medical breakthroughs, neuroscience (MNI), and bilingual jurisprudence."
    },
    {
      "id": "ubc",
      "nameZh": "英属哥伦比亚大学 (UBC)",
      "nameEn": "University of British Columbia",
      "country": "Canada",
      "city": "Vancouver",
      "qsRank": 38,
      "theRank": 41,
      "top5SubjectsZh": [
        "林业与可持续生态",
        "地理与海洋科学",
        "矿业工程与地球物理",
        "计算机科学与数据分析",
        "商学与国际贸易 (Sauder)"
      ],
      "top5SubjectsEn": [
        "Forestry & Sustainable Ecology",
        "Geography & Ocean Sciences",
        "Mining Engineering & Geophysics",
        "Computer Science",
        "Business & Commerce (Sauder)"
      ],
      "elementalFocus": {
        "primary": "Wood",
        "secondary": "Water"
      },
      "tierBadge": "环太平洋顶尖学术明珠 · 加拿大三强",
      "tierBadgeEn": "Pacific Rim Academic Jewel · Canada Top 3",
      "academicAdvantageZh": "亚太出海第一前沿，温哥华海岸得天独厚的自然与工程资源，尚德商学院亚太商贸连接器。",
      "academicAdvantageEn": "Pacific gateway to North American academia; world leader in forestry, environmental preservation, and Asia-Pacific trade."
    },
    {
      "id": "ualberta",
      "nameZh": "阿尔伯塔大学",
      "nameEn": "University of Alberta",
      "country": "Canada",
      "city": "Edmonton",
      "qsRank": 96,
      "theRank": 109,
      "top5SubjectsZh": [
        "强化学习与计算机AI (Amii)",
        "石油与能源化工",
        "采矿与矿业工程",
        "护理学与临床健康",
        "农业与食品科学"
      ],
      "top5SubjectsEn": [
        "Reinforcement Learning & AI (Amii)",
        "Petroleum & Chemical Engineering",
        "Mining Engineering",
        "Nursing & Clinical Health",
        "Agriculture & Food Science"
      ],
      "elementalFocus": {
        "primary": "Water",
        "secondary": "Earth"
      },
      "tierBadge": "加拿大三大AI国家中心之一 · 能源科技航母",
      "tierBadgeEn": "National AI Hub (Amii) · Energy Engineering Titan",
      "academicAdvantageZh": "世界强化学习(RL)技术圣地（Sutton教授），加拿大三大AI国家中心之一，北方冰雪水局潜藏深邃算力。",
      "academicAdvantageEn": "The world's premier birthplace of reinforcement learning (Amii); colossal energy and petrochemical engineering titan."
    },
    {
      "id": "waterloo",
      "nameZh": "滑铁卢大学",
      "nameEn": "University of Waterloo",
      "country": "Canada",
      "city": "Waterloo",
      "qsRank": 113,
      "theRank": 158,
      "top5SubjectsZh": [
        "计算机科学与软件工程",
        "数学与精算科学",
        "量子计算与微纳米 (IQC)",
        "机械与机电工程",
        "带薪实习生态 (Co-op)"
      ],
      "top5SubjectsEn": [
        "Computer Science & Software",
        "Mathematics & Actuarial Science",
        "Quantum Computing (IQC)",
        "Mechanical & Mechatronics",
        "Co-op Industrial Integration"
      ],
      "elementalFocus": {
        "primary": "Metal",
        "secondary": "Fire"
      },
      "tierBadge": "全球最大Co-op实习基地 · 硅谷代码Target No.1",
      "tierBadgeEn": "World #1 Co-op Ecosystem · Top Silicon Valley Feeder",
      "academicAdvantageZh": "硅谷和华尔街最狂热招聘的程序员母校，全球规模最大Co-op带薪实习体系，技术变现杀伤力全加最强。",
      "academicAdvantageEn": "The Silicon Valley recruiting phenomenon; world's largest paid Co-op system; quantum computing hub (IQC) and mathematical mastery."
    },
    {
      "id": "western",
      "nameZh": "西安大略大学 (Western / Ivey)",
      "nameEn": "Western University",
      "country": "Canada",
      "city": "London",
      "qsRank": 142,
      "theRank": 201,
      "top5SubjectsZh": [
        "商业管理与案例教学 (Ivey)",
        "运动机能学与运动医学",
        "地理与城市发展",
        "哲学与法理伦理",
        "心理学与脑认知"
      ],
      "top5SubjectsEn": [
        "Business Management (Ivey Case Method)",
        "Kinesiology & Sports Medicine",
        "Geography & Urban Studies",
        "Philosophy & Bioethics",
        "Psychology & Brain Mind"
      ],
      "elementalFocus": {
        "primary": "Earth",
        "secondary": "Fire"
      },
      "tierBadge": "加拿大投行与政商摇篮 · 毅伟商学院",
      "tierBadgeEn": "Canadian Corporate Leadership Cradle · Ivey School",
      "academicAdvantageZh": "毅伟商学院(Ivey)与哈佛齐名并列全球案例教学两强，加拿大各大银行投行与PE合伙人第一黄埔军校。",
      "academicAdvantageEn": "Home to the world-renowned Ivey Business School; supreme alumni network in Canadian private equity, M&A, and corporate leadership."
    },
    {
      "id": "umontreal",
      "nameZh": "蒙特利尔大学",
      "nameEn": "University of Montreal",
      "country": "Canada",
      "city": "Montreal",
      "qsRank": 162,
      "theRank": 111,
      "top5SubjectsZh": [
        "深度学习与人工智能 (Mila)",
        "医学与药剂学",
        "统计学与运筹学",
        "公共卫生与流行病",
        "商学 (HEC Montreal)"
      ],
      "top5SubjectsEn": [
        "Deep Learning & AI (Mila)",
        "Medicine & Pharmacy",
        "Statistics & Operations Research",
        "Public Health",
        "Business Management (HEC)"
      ],
      "elementalFocus": {
        "primary": "Fire",
        "secondary": "Water"
      },
      "tierBadge": "法语世界顶尖学府 · Mila人工智能中心核心",
      "tierBadgeEn": "Premier Francophone Titan · Mila AI Nexus",
      "academicAdvantageZh": "图灵奖得主Bengio领导之Mila人工智能研究所核心所在地，深度学习与医学前沿交叉极强。",
      "academicAdvantageEn": "Heart of Mila (Yoshua Bengio's Quebec AI Institute); the powerhouse of Francophone research in medicine and AI."
    },
    {
      "id": "mcmaster",
      "nameZh": "麦克马斯特大学",
      "nameEn": "McMaster University",
      "country": "Canada",
      "city": "Hamilton",
      "qsRank": 174,
      "theRank": 103,
      "top5SubjectsZh": [
        "循证医学与临床流行病学",
        "护理学与康复医学",
        "材料工程与核工程",
        "土木与结构工程",
        "人体机能学与健康科学"
      ],
      "top5SubjectsEn": [
        "Evidence-Based Medicine & Epidemiology",
        "Nursing & Rehabilitation",
        "Materials & Nuclear Engineering",
        "Civil & Structural Engineering",
        "Kinesiology & Health Sciences"
      ],
      "elementalFocus": {
        "primary": "Water",
        "secondary": "Metal"
      },
      "tierBadge": "加拿大临床医学先驱 · 循证医学发源地",
      "tierBadgeEn": "Cradle of Evidence-Based Medicine · Research Titan",
      "academicAdvantageZh": "全球“循证医学”诞生地，拥有全加唯一大学核反应堆，医学、先进材料与工科壁垒坚如磐石。",
      "academicAdvantageEn": "Birthplace of Evidence-Based Medicine (EBM); unique operator of an on-campus nuclear reactor for materials and medical isotopes."
    },
    {
      "id": "uottawa",
      "nameZh": "渥太华大学",
      "nameEn": "University of Ottawa",
      "country": "Canada",
      "city": "Ottawa",
      "qsRank": 228,
      "theRank": 177,
      "top5SubjectsZh": [
        "公共政策与联邦治理",
        "双语法学与民法制度",
        "生物医学与分子细胞",
        "光学与光子技术",
        "国际事务与安全"
      ],
      "top5SubjectsEn": [
        "Public Policy & Federal Governance",
        "Bilingual Law & Civil Code",
        "Biomedicine & Cellular Health",
        "Optics & Photonics",
        "International Affairs & Security"
      ],
      "elementalFocus": {
        "primary": "Earth",
        "secondary": "Fire"
      },
      "tierBadge": "全球最大英法双语大学 · 加拿大首都特权",
      "tierBadgeEn": "World's Largest Bilingual University · Capital Anchor",
      "academicAdvantageZh": "加拿大联邦政府与最高法院后花园，双语法学与国家公务员第一梯队，正官正印体制合规气场浓厚。",
      "academicAdvantageEn": "Zero distance to Canada's Parliament and Supreme Court; unrivaled capital access for public policy, law, and diplomacy."
    },
    {
      "id": "queens",
      "nameZh": "女王大学 (Queen's University)",
      "nameEn": "Queen's University",
      "country": "Canada",
      "city": "Kingston",
      "qsRank": 179,
      "theRank": 251,
      "top5SubjectsZh": [
        "矿业与矿产工程",
        "商业与金融 (Smith商学院)",
        "工程物理与微电子",
        "解剖与临床护理",
        "法学与商业合同"
      ],
      "top5SubjectsEn": [
        "Mining & Minerals Engineering",
        "Business & Commerce (Smith)",
        "Engineering Physics",
        "Anatomy & Nursing",
        "Law & Commercial Contracts"
      ],
      "elementalFocus": {
        "primary": "Metal",
        "secondary": "Earth"
      },
      "tierBadge": "加拿大传统贵族名校 · 史密斯商学院",
      "tierBadgeEn": "Old-World Aristocratic Tradition · Smith School",
      "academicAdvantageZh": "安大略省安大略湖畔历史名校，校友忠诚度全加第一，矿业工程与史密斯商学院政商人脉极具排他性。",
      "academicAdvantageEn": "Known for intense alumni loyalty and old-money networks; elite in mining engineering, physics (Nobel winner McDonald), and commerce."
    },
    {
      "id": "ucalgary",
      "nameZh": "卡尔加里大学",
      "nameEn": "University of Calgary",
      "country": "Canada",
      "city": "Calgary",
      "qsRank": 211,
      "theRank": 201,
      "top5SubjectsZh": [
        "能源地质与石油工程",
        "兽医学与野生动物健康",
        "运动医学与人类机能",
        "化学与碳捕集技术",
        "计算机科学与地理信息"
      ],
      "top5SubjectsEn": [
        "Energy Geosciences & Petroleum",
        "Veterinary Medicine",
        "Sports Medicine & Human Performance",
        "Chemistry & Carbon Capture",
        "Computer Science & GIS"
      ],
      "elementalFocus": {
        "primary": "Earth",
        "secondary": "Metal"
      },
      "tierBadge": "加拿大能源与高新技术重镇",
      "tierBadgeEn": "Energy Capital Hub · Entrepreneurial Driver",
      "academicAdvantageZh": "卡尔加里作为加拿大企业总部第二密集城市，大学与石油、清洁能源及量化科技投资联动紧密。",
      "academicAdvantageEn": "Engine of Canada's energy capital; top-tier in geoscience, carbon management, and high-performance biomechanics."
    },
    {
      "id": "sfu",
      "nameZh": "西蒙菲莎大学 (SFU)",
      "nameEn": "Simon Fraser University",
      "country": "Canada",
      "city": "Vancouver",
      "qsRank": 319,
      "theRank": 251,
      "top5SubjectsZh": [
        "计算机科学与视觉计算",
        "考古学与人类学",
        "传媒与数字技术",
        "犯罪学与社会司法",
        "互动艺术与科技 (SIAT)"
      ],
      "top5SubjectsEn": [
        "Computer Science & Vision",
        "Archaeology & Anthropology",
        "Communication & Media",
        "Criminology & Social Justice",
        "Interactive Arts & Tech (SIAT)"
      ],
      "elementalFocus": {
        "primary": "Wood",
        "secondary": "Fire"
      },
      "tierBadge": "加拿大顶尖综合类第一名 · 视觉计算先驱",
      "tierBadgeEn": "#1 Comprehensive University · Vision AI Pioneer",
      "academicAdvantageZh": "大温哥华山顶先锋大学，计算机图形学与视觉AI实力雄厚，创业与Co-op灵活度极高。",
      "academicAdvantageEn": "Consistently ranked Canada's #1 comprehensive university; renowned for graphics, computer vision, and interactive media."
    },
    {
      "id": "dalhousie",
      "nameZh": "戴尔豪斯大学",
      "nameEn": "Dalhousie University",
      "country": "Canada",
      "city": "Halifax",
      "qsRank": 275,
      "theRank": 301,
      "top5SubjectsZh": [
        "海洋学与海洋生物",
        "锂电池与储能技术 (Jeff Dahn)",
        "临床医学与药学",
        "法学与海事法",
        "农业与食品科技"
      ],
      "top5SubjectsEn": [
        "Oceanography & Marine Biology",
        "Lithium Battery Tech (Jeff Dahn)",
        "Clinical Medicine",
        "Law & Maritime Regulation",
        "Agriculture & Aquaculture"
      ],
      "elementalFocus": {
        "primary": "Water",
        "secondary": "Wood"
      },
      "tierBadge": "加拿大海洋科研旗舰 · 特斯拉电池研发基地",
      "tierBadgeEn": "Atlantic Canada Flagship · Tesla Battery Lab",
      "academicAdvantageZh": "特斯拉全球电池先锋Jeff Dahn实验室所在地，大西洋海洋科技与储能前沿，沉稳扎实。",
      "academicAdvantageEn": "Flagship of Atlantic Canada; exclusive research partnership with Tesla in battery technology; world benchmark in ocean science."
    },
    {
      "id": "uvic",
      "nameZh": "维多利亚大学",
      "nameEn": "University of Victoria",
      "country": "Canada",
      "city": "Victoria",
      "qsRank": 301,
      "theRank": 351,
      "top5SubjectsZh": [
        "地球与海洋科学 (NEPTUNE)",
        "法学与原住民正义",
        "计算机科学与系统工程",
        "心理学与神经认知",
        "英语文学与创意写作"
      ],
      "top5SubjectsEn": [
        "Earth & Ocean Sciences (NEPTUNE)",
        "Law & Indigenous Justice",
        "Computer Science & Systems",
        "Psychology & Neuroscience",
        "English & Creative Writing"
      ],
      "elementalFocus": {
        "primary": "Water",
        "secondary": "Wood"
      },
      "tierBadge": "海洋海底观测网领军 · 花园省府名校",
      "tierBadgeEn": "Ocean Networks Canada Leader · Island Elite",
      "academicAdvantageZh": "温哥华岛首府宁静书卷气，加拿大海底观测网络管理机构，适合专注心智抗压与深水长考。",
      "academicAdvantageEn": "Host of Ocean Networks Canada; renowned for environmental law, marine monitoring, and balanced quality of life."
    },
    {
      "id": "york",
      "nameZh": "约克大学 (York / Schulich)",
      "nameEn": "York University",
      "country": "Canada",
      "city": "Toronto",
      "qsRank": 362,
      "theRank": 351,
      "top5SubjectsZh": [
        "工商管理 (Schulich商学院)",
        "法学与刑法民法 (Osgoode)",
        "表演艺术与电影传媒",
        "心理学与认知发展",
        "国际研究与翻译"
      ],
      "top5SubjectsEn": [
        "Business Management (Schulich)",
        "Law & Jurisprudence (Osgoode)",
        "Performing Arts & Cinema",
        "Psychology",
        "International Studies"
      ],
      "elementalFocus": {
        "primary": "Earth",
        "secondary": "Metal"
      },
      "tierBadge": "舒立克商学院与奥斯古德法学院两极并耀",
      "tierBadgeEn": "Home of Schulich & Osgoode Hall Law",
      "academicAdvantageZh": "奥斯古德法学院全加泰斗，舒立克商学院在金融与可持续商业声名斐然，多伦多第二大生源港。",
      "academicAdvantageEn": "Home to Osgoode Hall (Canada's premier law school) and Schulich (world-ranked business pioneer)."
    },
    {
      "id": "concordia",
      "nameZh": "康考迪亚大学",
      "nameEn": "Concordia University",
      "country": "Canada",
      "city": "Montreal",
      "qsRank": 415,
      "theRank": 501,
      "top5SubjectsZh": [
        "艺术设计与数字媒体 (FFAB)",
        "软件工程与网络安全",
        "商业管理 (John Molson)",
        "土木与建筑环境",
        "新闻学与大众传媒"
      ],
      "top5SubjectsEn": [
        "Art, Design & Digital Media",
        "Software Engineering & Cyber",
        "Business (John Molson)",
        "Civil & Building Environment",
        "Journalism & Media"
      ],
      "elementalFocus": {
        "primary": "Fire",
        "secondary": "Metal"
      },
      "tierBadge": "北美设计与创新先锋 · 蒙特利尔年轻活力",
      "tierBadgeEn": "Creative Innovation Hub · Dynamic Montreal",
      "academicAdvantageZh": "蒙特利尔英语现代名校，游戏开发、数字艺术与软件工程紧密贴合当地育碧等跨国大厂。",
      "academicAdvantageEn": "Dynamic downtown Montreal research hub; powerhouse in game development, digital arts, and aerospace integration."
    },
    {
      "id": "laval",
      "nameZh": "拉瓦尔大学",
      "nameEn": "Laval University",
      "country": "Canada",
      "city": "Quebec",
      "qsRank": 423,
      "theRank": 251,
      "top5SubjectsZh": [
        "林业工程与木材科学",
        "光学光子学与激光 (COPL)",
        "农业与食品安全",
        "医学与公共卫生",
        "法学与魁北克民法"
      ],
      "top5SubjectsEn": [
        "Forestry & Wood Engineering",
        "Optics, Photonics & Lasers (COPL)",
        "Agriculture & Food Security",
        "Medicine & Public Health",
        "Quebec Civil Law"
      ],
      "elementalFocus": {
        "primary": "Wood",
        "secondary": "Water"
      },
      "tierBadge": "加拿大第一所大学 · 法语学术源头",
      "tierBadgeEn": "Canada's First University (1663) · Francophone Root",
      "academicAdvantageZh": "建校于1663年，加拿大最古老高等学府，激光光学与林业农业科技底蕴厚重。",
      "academicAdvantageEn": "Founded in 1663; Canada's oldest higher education institution; pioneer in laser optics and northern ecosystems."
    },
    {
      "id": "guelph",
      "nameZh": "圭尔夫大学",
      "nameEn": "University of Guelph",
      "country": "Canada",
      "city": "Guelph",
      "qsRank": 456,
      "theRank": 401,
      "top5SubjectsZh": [
        "农业科学与智慧农场",
        "兽医学与动物医学 (OVC)",
        "食品安全与营养科学",
        "环境科学与生态保护",
        "生物信息与植物分子"
      ],
      "top5SubjectsEn": [
        "Agricultural Sciences",
        "Veterinary Medicine (OVC)",
        "Food Science & Nutrition",
        "Environmental Conservation",
        "Bioinformatics & Plant Genomics"
      ],
      "elementalFocus": {
        "primary": "Wood",
        "secondary": "Earth"
      },
      "tierBadge": "加拿大食品与农业第一名校 · 兽医全球前五",
      "tierBadgeEn": "Canada's Food University · World Top-5 Vet Med",
      "academicAdvantageZh": "“加拿大的食品大学”，兽医学院(OVC)全球前五，农业生物与生命科学保障国家压舱石。",
      "academicAdvantageEn": "Canada's Food University; home to Ontario Veterinary College (top-5 worldwide) and ag-tech genomics."
    },
    {
      "id": "usask",
      "nameZh": "萨斯喀彻温大学",
      "nameEn": "University of Saskatchewan",
      "country": "Canada",
      "city": "Saskatoon",
      "qsRank": 470,
      "theRank": 351,
      "top5SubjectsZh": [
        "水源安全与水文科学",
        "农业与作物育种",
        "同步辐射光源技术 (CLS)",
        "兽医学与疫苗研发 (VIDO)",
        "地质与矿物勘探"
      ],
      "top5SubjectsEn": [
        "Water Security & Hydrology",
        "Agriculture & Crop Breeding",
        "Synchrotron Light Source (CLS)",
        "Vaccine & Infectious Disease (VIDO)",
        "Geology & Mineral Resources"
      ],
      "elementalFocus": {
        "primary": "Earth",
        "secondary": "Water"
      },
      "tierBadge": "加拿大唯一国家同步辐射光源所在地",
      "tierBadgeEn": "Home of Canada's National Synchrotron Light Source",
      "academicAdvantageZh": "拥有加拿大国家同步辐射光源中心(CLS)与VIDO国家疫苗实验室，科研大国重器，草原深耕硬科技。",
      "academicAdvantageEn": "Hosts the Canadian Light Source (CLS) synchrotron and VIDO vaccine lab; global leader in global water security."
    },
    {
      "id": "umanitoba",
      "nameZh": "曼尼托巴大学",
      "nameEn": "University of Manitoba",
      "country": "Canada",
      "city": "Winnipeg",
      "qsRank": 661,
      "theRank": 351,
      "top5SubjectsZh": [
        "传染病学与病毒学 (NML合作)",
        "农业与谷物工程",
        "建筑学与室内设计",
        "机械与航天复合材料",
        "北极海冰与极地科学"
      ],
      "top5SubjectsEn": [
        "Infectious Diseases & Virology",
        "Agricultural & Grain Engineering",
        "Architecture & Interior",
        "Aerospace Composites",
        "Arctic Sea Ice & Climate"
      ],
      "elementalFocus": {
        "primary": "Water",
        "secondary": "Earth"
      },
      "tierBadge": "加拿大西部最古老大学 · 国家微生物实验室策应",
      "tierBadgeEn": "Western Canada's Oldest University · P4 Lab Partner",
      "academicAdvantageZh": "与加拿大国家四级病毒实验室(NML)深度协同，埃博拉疫苗研发基地，极地与谷物工程重镇。",
      "academicAdvantageEn": "Partnered with Canada's National Microbiology Lab; instrumental in the Ebola vaccine development and Arctic climate tracking."
    }
  ],
  "China": [
    {
      "id": "tsinghua",
      "nameZh": "清华大学",
      "nameEn": "Tsinghua University",
      "country": "China",
      "city": "Beijing",
      "qsRank": 20,
      "theRank": 12,
      "top5SubjectsZh": [
        "计算机科学与人工智能",
        "电子工程与微电子半导体",
        "材料科学与先进工程",
        "机械与智能制造",
        "建筑与土木工程"
      ],
      "top5SubjectsEn": [
        "Computer Science & AI",
        "Electronic Engineering & Chips",
        "Materials Science",
        "Mechanical & Smart Manufacturing",
        "Architecture & Civil Engineering"
      ],
      "elementalFocus": {
        "primary": "Water",
        "secondary": "Metal"
      },
      "tierBadge": "中国最高工科殿堂 · C9联盟 · 顶尖智造",
      "tierBadgeEn": "China Premier Engineering · C9 League",
      "academicAdvantageZh": "中国工科与国家战略科技泰斗，姚班与智班领军全球AI算力，七杀硬核攻坚与产业领导力无可撼动。",
      "academicAdvantageEn": "China's premier STEM titan; crucible of top engineers and state strategists; world #1 in key engineering and computing citations."
    },
    {
      "id": "pku",
      "nameZh": "北京大学",
      "nameEn": "Peking University",
      "country": "China",
      "city": "Beijing",
      "qsRank": 14,
      "theRank": 14,
      "top5SubjectsZh": [
        "基础数学与理论物理",
        "化学与分子材料",
        "经济学与国家治理 (CCER)",
        "哲学与汉语言文学",
        "生命科学与基础医学"
      ],
      "top5SubjectsEn": [
        "Pure Mathematics & Theoretical Physics",
        "Chemistry & Molecular Materials",
        "Economics & Governance (CCER)",
        "Philosophy & Literature",
        "Life Sciences & Medicine"
      ],
      "elementalFocus": {
        "primary": "Water",
        "secondary": "Wood"
      },
      "tierBadge": "中国文理第一学府 · C9联盟 · 思想发源地",
      "tierBadgeEn": "China Premier Arts & Sciences · C9 League",
      "academicAdvantageZh": "新文化运动中心，基础理科与人文社会科学之巅，正官正印正气磅礴，思想策源与顶层宏观设计最顶峰。",
      "academicAdvantageEn": "The spiritual and intellectual cradle of modern China; absolute benchmark in pure mathematics, physics, humanities, and governance."
    },
    {
      "id": "fudan",
      "nameZh": "复旦大学",
      "nameEn": "Fudan University",
      "country": "China",
      "city": "Shanghai",
      "qsRank": 39,
      "theRank": 44,
      "top5SubjectsZh": [
        "哲学与人文社科",
        "临床医学与脑科学",
        "微电子与集成电路",
        "应用经济与金融投资",
        "国际政治与国家安全"
      ],
      "top5SubjectsEn": [
        "Philosophy & Social Sciences",
        "Clinical Medicine & Brain Science",
        "Microelectronics & Integrated Circuits",
        "Applied Economics & Finance",
        "International Politics"
      ],
      "elementalFocus": {
        "primary": "Wood",
        "secondary": "Water"
      },
      "tierBadge": "江南第一学府 · C9联盟 · 经世济民",
      "tierBadgeEn": "Jiangnan Flagship · C9 League · Global Vision",
      "academicAdvantageZh": "东方甲乙木润泽之地，博雅人文与现代芯片/脑科学并耀，与上海国际金融/贸易中心零距离融通。",
      "academicAdvantageEn": "Shanghai's intellectual beacon; world-class liberal arts paired with state-of-the-art microelectronics and medical centers."
    },
    {
      "id": "sjtu",
      "nameZh": "上海交通大学",
      "nameEn": "Shanghai Jiao Tong University",
      "country": "China",
      "city": "Shanghai",
      "qsRank": 45,
      "theRank": 43,
      "top5SubjectsZh": [
        "船舶海洋与航天工程",
        "机械工程与智能制造",
        "临床医学 (交大医学院)",
        "计算机软件与ACM体系",
        "管理科学与安泰经管"
      ],
      "top5SubjectsEn": [
        "Naval Architecture & Ocean Engineering",
        "Mechanical & Smart Manufacturing",
        "Clinical Medicine",
        "Computer Science & ACM Hub",
        "Management Science (Antai)"
      ],
      "elementalFocus": {
        "primary": "Wood",
        "secondary": "Metal"
      },
      "tierBadge": "大国重器工程航母 · C9联盟 · 顶尖医学",
      "tierBadgeEn": "Heavy Industry Engineering Titan · C9 League",
      "academicAdvantageZh": "钱学森母校，大国重器与航天船舶首屈一指，交大医学院与ACM计算机班战功显赫，七杀统帅之威。",
      "academicAdvantageEn": "Alma mater of Qian Xuesen; naval colossus, aerospace pioneer, and elite clinical medicine powerhouse."
    },
    {
      "id": "zju",
      "nameZh": "浙江大学",
      "nameEn": "Zhejiang University",
      "country": "China",
      "city": "Hangzhou",
      "qsRank": 47,
      "theRank": 55,
      "top5SubjectsZh": [
        "控制科学与工程 (自动化)",
        "计算机科学与软件",
        "光学工程与光电子",
        "农业工程与植物保护",
        "临床医学与药理学"
      ],
      "top5SubjectsEn": [
        "Control Science & Automation",
        "Computer Science & Software",
        "Optical Engineering",
        "Agricultural Engineering",
        "Clinical Medicine & Pharmacology"
      ],
      "elementalFocus": {
        "primary": "Wood",
        "secondary": "Fire"
      },
      "tierBadge": "东方剑桥 · C9联盟 · 创新创业之都",
      "tierBadgeEn": "Eastern Cambridge · C9 League · Tech Entrepreneurship",
      "academicAdvantageZh": "坐拥杭州数字经济与阿里系创新走廊，控制工程与工业自动化全天候赋能，偏财创业与产学研变现极强。",
      "academicAdvantageEn": "Directly fuels Hangzhou's digital technology empire; world leader in control science, robotics, and agricultural computing."
    },
    {
      "id": "ustc",
      "nameZh": "中国科学技术大学 (中科大)",
      "nameEn": "University of Science and Technology of China (USTC)",
      "country": "China",
      "city": "Hefei",
      "qsRank": 133,
      "theRank": 57,
      "top5SubjectsZh": [
        "量子信息与量子通信",
        "物理学与凝聚态物理",
        "化学与纳米催化",
        "核科学与核聚变 (EAST)",
        "计算机科学与大数据"
      ],
      "top5SubjectsEn": [
        "Quantum Information & Computing",
        "Physics & Condensed Matter",
        "Chemistry & Nanocatalysis",
        "Nuclear Fusion Science (EAST)",
        "Computer Science & Big Data"
      ],
      "elementalFocus": {
        "primary": "Metal",
        "secondary": "Water"
      },
      "tierBadge": "中科院嫡系科研圣殿 · C9联盟 · 量子高地",
      "tierBadgeEn": "CAS Direct Lineage · C9 League · Quantum Capital",
      "academicAdvantageZh": "中国量子科技第一高地（墨子号），数理化基础科学密度全国第一，单一任务科学极客心流最高典范。",
      "academicAdvantageEn": "The ground zero of global quantum communication and supercomputing; legendary density in pure physical sciences."
    },
    {
      "id": "nju",
      "nameZh": "南京大学",
      "nameEn": "Nanjing University",
      "country": "China",
      "city": "Nanjing",
      "qsRank": 90,
      "theRank": 73,
      "top5SubjectsZh": [
        "物理学与超导材料",
        "化学与绿色催化",
        "天文学与深空探测",
        "地质学与地球系统科学",
        "中国语言文学与哲学"
      ],
      "top5SubjectsEn": [
        "Physics & Superconducting Materials",
        "Chemistry & Catalysis",
        "Astronomy & Deep Space",
        "Geology & Earth Sciences",
        "Chinese Literature & Philosophy"
      ],
      "elementalFocus": {
        "primary": "Wood",
        "secondary": "Earth"
      },
      "tierBadge": "诚朴雄伟百年名校 · C9联盟 · 自然科学巨擎",
      "tierBadgeEn": "Centennial Academic Pillar · C9 League · Nature Index #1",
      "academicAdvantageZh": "自然指数(Nature Index)全球高校前列，天文地质物理无敌底蕴，金陵沉稳学术印星护体，治学极其纯正。",
      "academicAdvantageEn": "Global top performer in Nature Index scientific output; historic benchmark in astronomy, geosciences, and pure physics."
    },
    {
      "id": "tongji",
      "nameZh": "同济大学",
      "nameEn": "Tongji University",
      "country": "China",
      "city": "Shanghai",
      "qsRank": 146,
      "theRank": 185,
      "top5SubjectsZh": [
        "土木与结构工程",
        "建筑学与城乡规划",
        "设计创意学 (D&I)",
        "交通运输工程",
        "环境科学与水资源"
      ],
      "top5SubjectsEn": [
        "Civil & Structural Engineering",
        "Architecture & Urban Planning",
        "Design & Innovation (D&I)",
        "Transportation Engineering",
        "Environmental & Water Science"
      ],
      "elementalFocus": {
        "primary": "Wood",
        "secondary": "Earth"
      },
      "tierBadge": "中国土木与规划设计世界第一名牌 · 德式严谨",
      "tierBadgeEn": "Global #1 in Civil Engineering & Urban Planning",
      "academicAdvantageZh": "中国基建奇迹总设计所，土木工程与建筑设计全球第一梯队，德式严谨工艺与城市微观治理专家。",
      "academicAdvantageEn": "World #1 in civil engineering; architectural master of modern urban mega-projects; German-heritage precision engineering."
    },
    {
      "id": "whu",
      "nameZh": "武汉大学",
      "nameEn": "Wuhan University",
      "country": "China",
      "city": "Wuhan",
      "qsRank": 165,
      "theRank": 150,
      "top5SubjectsZh": [
        "测绘遥感与地理信息",
        "法学与国际公法",
        "图书情报与档案管理",
        "水利水电工程",
        "哲学与思想史"
      ],
      "top5SubjectsEn": [
        "Remote Sensing & Geomatics",
        "Law & International Public Law",
        "Information & Library Management",
        "Water Resources & Hydro Engineering",
        "Philosophy & History"
      ],
      "elementalFocus": {
        "primary": "Earth",
        "secondary": "Water"
      },
      "tierBadge": "九省通衢楚汉名校 · 测绘遥感全球第一",
      "tierBadgeEn": "World #1 in Remote Sensing · Historic Giant",
      "academicAdvantageZh": "遥感与测绘科学全球霸主（李德仁院士），珞珈山底蕴深厚，法学与经管辐射长江经济带全域。",
      "academicAdvantageEn": "World #1 remote sensing institute; legal and philosophical hub anchoring Central China's economic corridor."
    },
    {
      "id": "hit",
      "nameZh": "哈尔滨工业大学",
      "nameEn": "Harbin Institute of Technology",
      "country": "China",
      "city": "Harbin",
      "qsRank": 190,
      "theRank": 168,
      "top5SubjectsZh": [
        "航天宇航与深空探测",
        "机械与机器人技术",
        "控制科学与自动化",
        "仪器科学与光电探测",
        "焊接与先进材料加工"
      ],
      "top5SubjectsEn": [
        "Aerospace & Deep Space",
        "Mechanical & Robotics",
        "Control Science & Automation",
        "Instrument Science & Precision",
        "Welding & Advanced Materials"
      ],
      "elementalFocus": {
        "primary": "Water",
        "secondary": "Metal"
      },
      "tierBadge": "中国航天第一校 · C9联盟 · 国防七子领航",
      "tierBadgeEn": "China Aerospace #1 · C9 League · Defense Seven",
      "academicAdvantageZh": "中国航天事业中流砥柱，神舟天宫火星探测主力研发机构，北方水金格局刚猛无双，武职科研之王。",
      "academicAdvantageEn": "The backbone of China's manned spaceflight, lunar exploration, and defense robotics; unmatched heavy engineering stamina."
    },
    {
      "id": "tju",
      "nameZh": "天津大学",
      "nameEn": "Tianjin University",
      "country": "China",
      "city": "Tianjin",
      "qsRank": 269,
      "theRank": 251,
      "top5SubjectsZh": [
        "化学工程与工业催化",
        "精密仪器与光电测量",
        "建筑学与结构抗震",
        "水利工程与海岸海洋",
        "机械工程与内燃动力"
      ],
      "top5SubjectsEn": [
        "Chemical Engineering & Catalysis",
        "Precision Instruments & Optics",
        "Architecture & Seismic Design",
        "Hydraulic & Ocean Engineering",
        "Mechanical & Power Systems"
      ],
      "elementalFocus": {
        "primary": "Water",
        "secondary": "Fire"
      },
      "tierBadge": "中国近代第一所现代大学 · 工科实力雄浑",
      "tierBadgeEn": "China's First Modern University (1895) · Chemical Pillar",
      "academicAdvantageZh": "中国第一所现代大学（北洋大学），化学工程常年全国内地第一，仪器仪表与工业实干家摇篮。",
      "academicAdvantageEn": "Founded in 1895 as Peiyang University; national champion in chemical engineering and industrial metrology."
    },
    {
      "id": "bnu",
      "nameZh": "北京师范大学",
      "nameEn": "Beijing Normal University",
      "country": "China",
      "city": "Beijing",
      "qsRank": 271,
      "theRank": 201,
      "top5SubjectsZh": [
        "教育学与教学法",
        "心理学与脑认知科学",
        "中国语言文学与传统文化",
        "地理科学与减灾防灾",
        "环境科学与生态工程"
      ],
      "top5SubjectsEn": [
        "Education & Pedagogical Theory",
        "Psychology & Cognitive Neuroscience",
        "Chinese Language & Classical Culture",
        "Geography & Disaster Mitigation",
        "Environmental Science & Ecology"
      ],
      "elementalFocus": {
        "primary": "Water",
        "secondary": "Wood"
      },
      "tierBadge": "中国师范教育最高殿堂 · 文理精粹",
      "tierBadgeEn": "Premier Educational & Psychological Institution",
      "academicAdvantageZh": "国家教育政策核心智囊，心理学与脑认知科学全国第一，滋润日主之顶级正印学术福地。",
      "academicAdvantageEn": "China's premier authority on pedagogical science, psychological testing, and brain health."
    },
    {
      "id": "sustech",
      "nameZh": "南方科技大学",
      "nameEn": "Southern University of Science and Technology",
      "country": "China",
      "city": "Shenzhen",
      "qsRank": 284,
      "theRank": 201,
      "top5SubjectsZh": [
        "材料科学与微纳器件",
        "力学与航空航天",
        "物理与前沿量子",
        "计算机与生物信息",
        "生物医药与健康工程"
      ],
      "top5SubjectsEn": [
        "Materials & Micro-Nano Devices",
        "Mechanics & Aerospace",
        "Physics & Quantum Frontiers",
        "Computer & Bioinformatics",
        "Biomedicine & Health Engineering"
      ],
      "elementalFocus": {
        "primary": "Fire",
        "secondary": "Metal"
      },
      "tierBadge": "深圳高水平理工新星 · 高端科研改革试验田",
      "tierBadgeEn": "Shenzhen High-Tech Rising Titan · Global Faculty",
      "academicAdvantageZh": "深圳特区倾力打造的新型高水平研究型大学，高引学者密度全国最高，直通深圳硬科技大厂与VC投资圈。",
      "academicAdvantageEn": "Shenzhen's frontier research vanguard; global faculty recruitment, high-citation researchers, and direct synergy with Shenzhen hardware."
    },
    {
      "id": "xjtu",
      "nameZh": "西安交通大学",
      "nameEn": "Xi'an Jiaotong University",
      "country": "China",
      "city": "Xi'an",
      "qsRank": 295,
      "theRank": 251,
      "top5SubjectsZh": [
        "电气工程与高电压技术",
        "动力工程及工程热物理",
        "机械工程与先进成形",
        "核工程与核安全",
        "管理科学与系统工程"
      ],
      "top5SubjectsEn": [
        "Electrical Engineering & High Voltage",
        "Power Engineering & Thermal Physics",
        "Mechanical Engineering",
        "Nuclear Science & Safety",
        "Management Science & Systems"
      ],
      "elementalFocus": {
        "primary": "Metal",
        "secondary": "Fire"
      },
      "tierBadge": "西部科技创新港核心 · C9联盟 · 电气之王",
      "tierBadgeEn": "Western Innovation Harbor · C9 League · Electrical #1",
      "academicAdvantageZh": "西迁精神典范，电气工程与动力工程全国第一，西部科技创新港统领一带一路高精尖工业制造。",
      "academicAdvantageEn": "China's undisputed #1 electrical grid engineering authority; powerhouse in power thermodynamics and nuclear reactor design."
    },
    {
      "id": "hust",
      "nameZh": "华中科技大学",
      "nameEn": "Huazhong University of Science and Technology",
      "country": "China",
      "city": "Wuhan",
      "qsRank": 300,
      "theRank": 158,
      "top5SubjectsZh": [
        "机械工程与数控系统",
        "光学工程与武汉光谷",
        "公共卫生与同济医学院",
        "计算机系统结构与存储",
        "电气与脉冲强磁场 (SHMFF)"
      ],
      "top5SubjectsEn": [
        "Mechanical & CNC Numerical Control",
        "Optical Engineering (Optics Valley)",
        "Public Health (Tongji Medical)",
        "Computer Architecture & Storage",
        "Electrical & Pulsed Magnetic Fields"
      ],
      "elementalFocus": {
        "primary": "Earth",
        "secondary": "Metal"
      },
      "tierBadge": "南方小清华 · 武汉光谷产业引擎 · 同济医学院",
      "tierBadgeEn": "Central China Tech Colossus · Wuhan Optics Valley Engine",
      "academicAdvantageZh": "武汉中国光谷策源地，同济医学院享誉海内外，数控机床与国家脉冲强磁场大科学装置所在地，实干担当。",
      "academicAdvantageEn": "The industrial engine of Wuhan's Optics Valley; renowned for CNC numerical systems, pulsed magnetic fields, and Tongji Medical School."
    },
    {
      "id": "sysu",
      "nameZh": "中山大学",
      "nameEn": "Sun Yat-sen University",
      "country": "China",
      "city": "Guangzhou",
      "qsRank": 331,
      "theRank": 251,
      "top5SubjectsZh": [
        "临床医学与肿瘤防治",
        "生态学与海洋科学",
        "工商管理 (岭南/管院)",
        "药学与生物医药",
        "法学与粤港澳大湾区法"
      ],
      "top5SubjectsEn": [
        "Clinical Medicine & Oncology",
        "Ecology & Marine Sciences",
        "Business & Economics (Lingnan)",
        "Pharmacy & Drug Discovery",
        "Law & Greater Bay Area Jurisprudence"
      ],
      "elementalFocus": {
        "primary": "Fire",
        "secondary": "Wood"
      },
      "tierBadge": "粤港澳大湾区学术中枢 · 附属医院航母",
      "tierBadgeEn": "Greater Bay Area Academic Nexus · Medical Giant",
      "academicAdvantageZh": "广州/深圳/珠海三地五校区，大湾区医疗科研巨擘（10家顶级三甲附属医院），岭南商学政商人脉根深蒂固。",
      "academicAdvantageEn": "Anchoring Guangzhou, Shenzhen, and Zhuhai; medical colossus with 10 premier teaching hospitals; business elite of Southern China."
    },
    {
      "id": "sdu",
      "nameZh": "山东大学",
      "nameEn": "Shandong University",
      "country": "China",
      "city": "Jinan",
      "qsRank": 339,
      "theRank": 301,
      "top5SubjectsZh": [
        "密码学与网络空间安全",
        "材料与晶体材料 (SKLCM)",
        "中国古典文献与儒学",
        "临床医学 (齐鲁医学)",
        "化学与胶体界面"
      ],
      "top5SubjectsEn": [
        "Cryptography & Cybersecurity",
        "Crystal Materials (SKLCM)",
        "Confucian Studies & Classics",
        "Clinical Medicine (Cheeloo)",
        "Chemistry & Colloid Science"
      ],
      "elementalFocus": {
        "primary": "Wood",
        "secondary": "Earth"
      },
      "tierBadge": "文史哲见长 · 齐鲁医学百年底蕴 · 国家密码学高地",
      "tierBadgeEn": "Confucian Studies Heartland · National Cryptography Hub",
      "academicAdvantageZh": "王小云院士国家密码算法破译与设计核心基地，晶体材料国家重点实验室，齐鲁医学历史深沉厚重。",
      "academicAdvantageEn": "Global pioneer in cryptography (breaking MD5/SHA-1 and designing national standards); home of historic Cheeloo Medicine."
    },
    {
      "id": "scu",
      "nameZh": "四川大学",
      "nameEn": "Sichuan University",
      "country": "China",
      "city": "Chengdu",
      "qsRank": 336,
      "theRank": 301,
      "top5SubjectsZh": [
        "口腔医学 (华西口腔世界顶尖)",
        "高分子材料工程",
        "临床医学 (华西医学中心)",
        "水利水电与深地科学",
        "中国语言文学与宗教学"
      ],
      "top5SubjectsEn": [
        "Stomatology (West China Dental #1)",
        "Polymer Science & Engineering",
        "Clinical Medicine (West China)",
        "Hydraulic & Deep Underground Science",
        "Chinese Literature & Religion"
      ],
      "elementalFocus": {
        "primary": "Metal",
        "secondary": "Water"
      },
      "tierBadge": "中国口腔第一名牌 · 华西医学圣殿 · 西南第一名校",
      "tierBadgeEn": "West China Stomatology (World Tier 1) · Southwest Flagship",
      "academicAdvantageZh": "华西口腔医院亚洲乃至全球巅峰，高分子材料独步西南，天府之国水土润泽，综合实力深不可测。",
      "academicAdvantageEn": "Home of West China Stomatology (Asia's premier dental school); unmatched polymer chemistry and Western China healthcare hub."
    },
    {
      "id": "ruc",
      "nameZh": "中国人民大学",
      "nameEn": "Renmin University of China",
      "country": "China",
      "city": "Beijing",
      "qsRank": 566,
      "theRank": 251,
      "top5SubjectsZh": [
        "理论经济学与应用经济学",
        "法学与民商事法典",
        "社会学与统计调查",
        "公共管理与行政治理",
        "马克思主义理论与党史"
      ],
      "top5SubjectsEn": [
        "Theoretical & Applied Economics",
        "Law & Civil Code Practice",
        "Sociology & Statistical Survey",
        "Public Administration & Governance",
        "Political Theory"
      ],
      "elementalFocus": {
        "primary": "Water",
        "secondary": "Earth"
      },
      "tierBadge": "中国人文社会科学最高重镇 · 治国理政智库",
      "tierBadgeEn": "China's Premier Social Sciences & Legal Think Tank",
      "academicAdvantageZh": "中国人文社科与经济法政的“工作母机”，国家民法典编纂主力，高层智囊政策建言与体制合规话语权极致纯粹。",
      "academicAdvantageEn": "The ideological and legislative engine of Chinese civil law, economics, and administrative governance."
    },
    {
      "id": "nankai",
      "nameZh": "南开大学",
      "nameEn": "Nankai University",
      "country": "China",
      "city": "Tianjin",
      "qsRank": 377,
      "theRank": 251,
      "top5SubjectsZh": [
        "化学与农药分子",
        "应用数学与陈省身数学所",
        "世界历史与区域国别",
        "应用经济与金融精算",
        "光学工程与有机光电"
      ],
      "top5SubjectsEn": [
        "Chemistry & Pesticide Science",
        "Applied Mathematics (Chern Institute)",
        "World History & Regional Studies",
        "Applied Economics & Actuarial",
        "Optoelectronics"
      ],
      "elementalFocus": {
        "primary": "Water",
        "secondary": "Wood"
      },
      "tierBadge": "周总理母校 · 陈省身数学所 · 允公允能",
      "tierBadgeEn": "Chern Institute of Mathematics · Centennial University",
      "academicAdvantageZh": "周恩来总理母校，陈省身数学研究所国际闻名，化学与精算学底蕴极佳，文理兼修的学者风范。",
      "academicAdvantageEn": "Alma mater of Premier Zhou Enlai; home of the Chern Institute of Mathematics; pioneer in actuarial science and chemistry."
    }
  ]
};

if (typeof window !== 'undefined') {
  window.INSTITUTIONS_DB = INSTITUTIONS_DB;
}
if (typeof globalThis !== 'undefined') {
  globalThis.INSTITUTIONS_DB = INSTITUTIONS_DB;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = INSTITUTIONS_DB;
}
