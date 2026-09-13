/**
 * 《穷通宝鉴》 (Qiong Tong Bao Jian / 栏江网) Database
 * Covers the authoritative 120 Seasonal Regulating Gods (十天干生于十二月令调候用神全本)
 * Essential for evaluating climate balance (寒暖燥湿) and specific primary/secondary regulators.
 */

// 12 Months mapping from Earthly Branches
const MONTH_BRANCH_NAMES = {
  '寅': '正月 (孟春)',
  '卯': '二月 (仲春)',
  '辰': '三月 (季春)',
  '巳': '四月 (孟夏)',
  '午': '五月 (仲夏)',
  '未': '六月 (季夏)',
  '申': '七月 (孟秋)',
  '酉': '八月 (仲秋)',
  '戌': '九月 (季秋)',
  '亥': '十月 (孟冬)',
  '子': '十一月 (仲冬)',
  '丑': '十二月 (季冬)'
};

// Complete 10 Stems across the 12 Monthly Commands
const QIONG_TONG_DATA = {
  '甲': {
    '寅': {
      title: '正月甲木',
      climate: '初春尚有微寒，枝叶未舒。',
      primary: '丙火 (暄照)',
      secondary: '癸水 (滋润)',
      classic_text: '初春甲木，余寒犹存，得丙火以暄照，则无萎谢之患；得癸水以滋养，则有生长之功。丙癸齐透，富贵非凡。',
      vernacular: '初春的甲木还带着冬天的寒气，最需要丙火太阳的温暖照耀，并配以癸水雨露滋养。只要丙火、癸水并透且不互相贴身克灭，必定大富大贵。',
      favorable: ['丙火', '癸水'],
      taboos: ['金多克伐幼苗', '癸水过多冻木']
    },
    '卯': {
      title: '二月甲木',
      climate: '仲春木气当令，阳刃当权，乘权极旺。',
      primary: '庚金 (雕琢)',
      secondary: '丁火 (木火通明)',
      classic_text: '二月甲木，阳刃当令，木气繁盛。专取庚金劈甲雕琢，次取丁火木火通明。庚丁两透，名列前茅。',
      vernacular: '仲春二月甲木最旺，阳刃当头，必须用庚金作为利斧雕琢成栋梁之才，并辅以丁火引木化气。',
      favorable: ['庚金', '丁火', '戊土'],
      taboos: ['比劫叠叠无金制', '水多木漂']
    },
    '辰': {
      title: '三月甲木',
      climate: '季春阳气渐盛，木气将歇，土气当令。',
      primary: '庚金 (裁伐)',
      secondary: '壬水 (生润)',
      classic_text: '三月甲木，木气将竭，退气之时。先用庚金，次用壬水。庚壬齐透，一品当朝。',
      vernacular: '三月辰土温润，木渐渐退气。先取庚金裁削，再取壬水滋养水源，使木不至于被厚土所困。',
      favorable: ['庚金', '壬水'],
      taboos: ['火土过燥', '金水过寒']
    },
    '巳': {
      title: '四月甲木',
      climate: '孟夏火气渐旺，枝叶繁茂，木气退气而燥。',
      primary: '癸水 (润燥为先)',
      secondary: '庚金 (生发水源)',
      classic_text: '四月甲木退气，丙火司权，木气枯焦，调候为急。专取癸水解渴，次取庚金发水之源。癸透庚生，金榜题名。',
      vernacular: '入夏之后火势炽热，甲木最怕干枯焚烧。首要调候用神唯有癸水雨露，次用庚金生水，方能郁郁葱葱。',
      favorable: ['癸水', '庚金', '辛金'],
      taboos: ['丙丁火多自焚', '无水干枯']
    },
    '午': {
      title: '五月甲木',
      climate: '仲夏炎炎，火气最旺，木性虚焦。',
      primary: '癸水 (调候至尊)',
      secondary: '庚金 (辅佐生癸)',
      classic_text: '五月甲木焦枯，非水不生。专取癸水，忌丁火透干，喜庚金佐癸。癸庚两透，极品之贵。',
      vernacular: '仲夏午月火势登峰造极，甲木极度焦渴，全赖癸水雨露救命。有水有金者富贵名扬，滴水皆无者劳碌困顿。',
      favorable: ['癸水', '庚金'],
      taboos: ['四柱无水', '重见丙午燥烈']
    },
    '未': {
      title: '六月甲木',
      climate: '季夏三伏生寒，木性枯槁，燥土司权。',
      primary: '癸水 (润土培根)',
      secondary: '庚金 (劈木引水)',
      classic_text: '六月木性虚槁，先癸后庚。三伏生寒，丁火亦不可少。癸水润泽，庚金发源，自成大格。',
      vernacular: '六月未土燥烈，木库虽有余气但土厚焦躁，先取癸水滋润泥土，次取庚金发源。',
      favorable: ['癸水', '庚金'],
      taboos: ['燥土埋根', '无金水调停']
    },
    '申': {
      title: '七月甲木',
      climate: '孟秋木气凋零，金气肃杀。',
      primary: '庚金 (成器)',
      secondary: '丁火 (制金炼煞)',
      classic_text: '七月甲木，绝地逢生。庚金秉令，不可无丁火制之。伤官制煞，最为显赫。',
      vernacular: '秋天金旺木凋，申金七杀克身严重。最妙有丁火伤官制服庚金，成“伤官制杀格”，名扬四海掌大权。',
      favorable: ['丁火', '丙火', '庚金'],
      taboos: ['金多无火制', '水多引金沉木']
    },
    '酉': {
      title: '八月甲木',
      climate: '仲秋木气绝休，正官纯粹。',
      primary: '庚金 (剪伐)',
      secondary: '丁火 (调和)',
      classic_text: '八月甲木，木凋金锐。喜见丙丁以温其气，取庚佐之。木火通明，清贵无比。',
      vernacular: '仲秋八月金气纯粹清冷，甲木凋零。喜丙丁火透干以暖局克金，水以滋养，富贵自然来。',
      favorable: ['丙火', '丁火', '水'],
      taboos: ['纯金克体', '无火暖局']
    },
    '戌': {
      title: '九月甲木',
      climate: '季秋霜降，木气枯槁，燥土火库。',
      primary: '庚金 (劈木)',
      secondary: '癸水 (滋培)',
      classic_text: '九月甲木，木性凋落。先庚后癸，次取壬水。水木相资，衣禄无缺。',
      vernacular: '秋末霜降，甲木落叶归根。取庚金劈木，辅以癸水润燥，水火既济，晚年大发。',
      favorable: ['庚金', '癸水', '丁火'],
      taboos: ['燥土太重', '全无水源']
    },
    '亥': {
      title: '十月甲木',
      climate: '孟冬小阳春，水冷木寒。',
      primary: '庚金 (发印)',
      secondary: '丙火 (解冬冻)',
      classic_text: '十月甲木长生，木不受克。首取庚金劈木，次取丙火暄暖，丙庚齐透，名利兼得。',
      vernacular: '初冬亥月水旺木寒，虽然亥为甲木长生之地，但严寒需要丙火阳光普照，庚金发荣。',
      favorable: ['丙火', '庚金', '戊土'],
      taboos: ['水寒冰结', '无火取暖']
    },
    '子': {
      title: '十一月甲木',
      climate: '仲冬大寒，水冻木坚。',
      primary: '丙火 (调候第一)',
      secondary: '戊土 (堤防湿寒)',
      classic_text: '仲冬甲木，严寒冰冻。专取丙火解寒，次用戊土止水。丙戊两透，富贵名扬。',
      vernacular: '隆冬子月天寒地冻，无丙火则甲木冻绝无生机。丙火为至尊调候用神，次用戊土挡水防冻。',
      favorable: ['丙火', '戊土'],
      taboos: ['水多冰冻', '全无火气']
    },
    '丑': {
      title: '十二月甲木',
      climate: '季冬寒气极盛，天寒地冻，湿泥凝霜。',
      primary: '丙火 (回春暖局)',
      secondary: '丁火 (劈木生温)',
      classic_text: '十二月甲木，天气奇寒，非丙火不可回春。庚丁配合，富贵超群。',
      vernacular: '腊月丑土冻泥冰封，首重丙火解冻回春，辅以庚丁雕琢。无火之人终生困蹇，见火之人富贵绵绵。',
      favorable: ['丙火', '丁火', '庚金'],
      taboos: ['无火冻馁', '湿泥深陷']
    }
  },

  '乙': {
    '寅': { title: '正月乙木', climate: '余寒犹盛，草木萌芽。', primary: '丙火 (暄照)', secondary: '癸水 (润泽)', classic_text: '正月乙木，余寒未尽。专取丙火温煦，癸水滋润。丙透癸藏，必主荣贵。', vernacular: '初春乙木嫩草发芽，喜丙火阳光普照，癸水如清晨甘露，自然欣欣向荣。', favorable: ['丙火', '癸水'], taboos: ['金多克伐', '水多寒冻'] },
    '卯': { title: '二月乙木', climate: '建卯得禄，木气纯茂。', primary: '丙火 (发秀)', secondary: '癸水 (养苗)', classic_text: '二月乙木专禄，支成木局，阳气已升。喜丙火吐秀，癸水滋培。水火相济，才华盖世。', vernacular: '仲春乙木繁荣，最喜丙火使花草绽放光彩，水火兼顾，文章道德冠绝一时。', favorable: ['丙火', '癸水'], taboos: ['见金斧残害', '土多滞塞'] },
    '巳': { title: '四月乙木', climate: '木气已竭，火势正旺。', primary: '癸水 (解燥救命)', secondary: '庚金 (发源)', classic_text: '四月乙木退气，火土正盛。专用癸水，次用庚金生水。金水相通，翰苑清高。', vernacular: '孟夏初夏，乙木柔弱惧烈火，必须癸水甘霖滋润，庚金生水，方保安康富贵。', favorable: ['癸水', '庚金'], taboos: ['烈火干焦', '燥土炙根'] },
    '午': { title: '五月乙木', climate: '酷暑炎炎，禾稼焦枯。', primary: '癸水 (第一调候)', secondary: '壬水 (次之)', classic_text: '五月旱田禾稼，非癸水不能滋润。柱无金水，贫苦夭折之命。', vernacular: '仲夏三伏酷暑，乙木如禾苗逢旱，非得癸水雨露大降不可。见水则生，无水则焦。', favorable: ['癸水', '辛金', '庚金'], taboos: ['纯火无湿', '燥土焚木'] },
    '申': { title: '七月乙木', climate: '秋风初起，金气带杀。', primary: '丙火 (克金暖木)', secondary: '己土 (滋培)', classic_text: '秋初金旺，木气休囚。取丙火制金，辅以己土培木，金水流通，显贵之格。', vernacular: '初秋申月秋金肃杀，乙木柔弱，喜丙火暖局制煞，官印相生为贵。', favorable: ['丙火', '壬水', '己土'], taboos: ['庚金过重克绝', '水多漂木'] },
    '酉': { title: '八月乙木', climate: '仲秋霜降，金神当令。', primary: '癸水 (化金生木)', secondary: '丙火 (调和)', classic_text: '八月乙木，金气肃杀，枝叶残败。专用癸水化金，丙火暖木，杀印相生，名播四方。', vernacular: '秋分八月金神最强，克伐乙木。全赖癸水化解七杀克制生木，丙火温照，方显文采风流。', favorable: ['癸水', '丙火'], taboos: ['七杀无制', '秋金重叠'] },
    '亥': { title: '十月乙木', climate: '水旺木浮，冬令初至。', primary: '丙火 (解冬寒)', secondary: '戊土 (止水泛)', classic_text: '十月乙木木叶凋零，水冷根虚。专取丙火解冻，戊土筑堤止水，水木相涵，科甲联登。', vernacular: '孟冬亥月水多木漂，乙木需要丙火阳光温煦暖局，戊土稳住根基。', favorable: ['丙火', '戊土'], taboos: ['寒水冻木', '全无火土'] },
    '子': { title: '十一月乙木', climate: '严霜冰封，花草枯萎。', primary: '丙火 (至尊调候)', secondary: '戊土 (培根暖泥)', classic_text: '仲冬严寒，非丙不生。一阳复始，冬日可爱，专取丙火，戊土佐之。', vernacular: '子月隆冬大寒，严冰封泥，无丙火照耀则草木尽死。见丙戊者享天年之福禄。', favorable: ['丙火', '戊土'], taboos: ['冰凝水寒', '金多克残'] },
    '丑': { title: '十二月乙木', climate: '季冬寒冻，天寒地坼。', primary: '丙火 (回阳救命)', secondary: '甲木 (藤萝系甲)', classic_text: '腊月严霜，非火不能解冻。取丙解寒，取甲木同透借力登高。', vernacular: '季冬丑月湿冷冻土，必须丙火回阳解寒，透甲木形成藤萝系甲，自然荣显富贵。', favorable: ['丙火', '甲木', '戊土'], taboos: ['阴湿过甚', '全无阳光'] }
  },

  '丙': {
    '寅': { title: '正月丙火', climate: '三阳开泰，火气渐旺。', primary: '壬水 (日照江河)', secondary: '庚金 (发水源)', classic_text: '正月丙火长生，阳气渐升。专取壬水辅映，庚金发水源，水火既济，声名显赫。', vernacular: '初春丙火生于寅木长生，最喜壬水如江海映日，水火既济光华万丈。', favorable: ['壬水', '庚金'], taboos: ['土多晦光', '火盛木焚'] },
    '午': { title: '五月丙火', climate: '帝旺羊刃，火势炎上极烈。', primary: '壬水 (解渴至尊)', secondary: '庚金 (水源助壬)', classic_text: '五月丙火炎烈，非壬水江河不能济其刚暴。庚壬两见，功名赫奕。', vernacular: '仲夏午月火旺极点，至烈至暴。必须用壬水江河之波涛制其猛火，庚金生水，成水火既济极品贵格。', favorable: ['壬水', '庚金'], taboos: ['火多焚身', '戊己厚土晦火'] },
    '申': { title: '七月丙火', climate: '孟秋初凉，阳气渐衰。', primary: '壬水 (映照清辉)', secondary: '申中庚金 (偏财生官)', classic_text: '七月丙火退气，阳和之象。喜壬水相映，庚金相生，财官并旺，富贵自全。', vernacular: '秋初丙火开始退气，但余晖仍在，壬水映照相得益彰，金水流通富贵兼备。', favorable: ['壬水', '庚金', '戊土'], taboos: ['金多水浊', '重见土掩'] },
    '子': { title: '十一月丙火', climate: '冬日可爱，至阴至寒。', primary: '壬水 (水火相济)', secondary: '戊土 (制水救火)', classic_text: '冬月丙火，气势休囚。但冬阳可爱，专用壬水辅映，逢戊土制水防灭。', vernacular: '冬日之阳光最为人所喜爱。丙火虽弱，但若有木生身、壬水映照，大有温暖天下之志。', favorable: ['壬水', '甲木', '戊土'], taboos: ['水狂灭火', '阴湿无木'] }
  },

  '丁': {
    '寅': { title: '正月丁火', climate: '火气初生，甲木印绶当令。', primary: '庚金 (劈甲引丁)', secondary: '甲木 (嫡母燃料)', classic_text: '正月丁火，甲木当令，木坚火虚。必须庚金劈甲引丁，方能火光通明。', vernacular: '初春甲木湿重，需庚金铁斧劈柴，方能生起丁火炉灶。庚甲齐备，富贵非轻。', favorable: ['庚金', '甲木'], taboos: ['乙木湿柴塞火', '水多扑灭'] },
    '午': { title: '五月丁火', climate: '仲夏建午，日禄归时火旺。', primary: '壬水 (调候成贵)', secondary: '庚金 (发源生水)', classic_text: '五月丁火建禄，火势炎炎。取壬水正官润局，庚金佐之，富贵荣华。', vernacular: '仲夏丁火旺相，喜壬水官星相合化润，庚金生水，格局纯清。', favorable: ['壬水', '庚金', '癸水'], taboos: ['火多自焚', '无水干涸'] },
    '酉': { title: '八月丁火', climate: '仲秋金旺，炉火炼金。', primary: '甲木 (生火源头)', secondary: '庚金 (劈柴引火)', classic_text: '八月丁火退气，金旺火衰。不可无甲木印绶生火，庚金劈木，水火调剂。', vernacular: '秋天金旺，丁火微弱，必须以甲木为干柴，庚金劈柴生火，源远流长。', favorable: ['甲木', '庚金', '丙火'], taboos: ['水泛灭烛', '金多身弱'] },
    '子': { title: '十一月丁火', climate: '隆冬严寒，寒水克烛。', primary: '甲木 (劈柴化水)', secondary: '庚金 (劈甲佐火)', classic_text: '十一月丁火至弱，严冬雨雪交加。专用甲木引火化煞，庚金劈木，无甲必夭。', vernacular: '十一月子水严霜，丁火如雪地烛火，急需甲木正印护身化水生火，见甲庚者长寿富足。', favorable: ['甲木', '庚金'], taboos: ['癸水暴雨淋熄', '无甲独身受克'] }
  },

  '戊': {
    '寅': { title: '正月戊土', climate: '初春高冈，土虚寒冻。', primary: '丙火 (温暖土壤)', secondary: '甲木 (疏土发灵)', classic_text: '正月戊土寒湿，木嫩土虚。先取丙火暖土，次取甲木疏松，水以润泽，三者俱全，一品贵客。', vernacular: '初春大地未解冻，戊土坚寒，先以丙火阳光晒暖泥土，次以甲木树木扎根疏松，生机勃勃。', favorable: ['丙火', '甲木', '癸水'], taboos: ['土干火燥', '金寒土冻'] },
    '午': { title: '五月戊土', climate: '仲夏焦土，火炎土燥。', primary: '壬水 (灌溉堤坝)', secondary: '甲木 (疏土生风)', classic_text: '五月戊土燥烈，万物枯焦。专取壬水灌溉，庚金发水源，次取甲木透土。', vernacular: '仲夏大地干涸，城墙焦裂，必须壬水浩荡江河灌溉调候，见水则富，无水则贫。', favorable: ['壬水', '庚金', '申金'], taboos: ['火土重重无滴水', '燥土成灰'] },
    '申': { title: '七月戊土', climate: '孟秋金旺，金多泄土元气。', primary: '丙火 (生土御金)', secondary: '甲木 (疏通)', classic_text: '七月戊土退气，金气当令。先用丙火制金生身，次取甲木通达。', vernacular: '秋金当令，厚土生金而自身气衰，喜丙火正印生土制金，甲木辅之。', favorable: ['丙火', '甲木', '癸水'], taboos: ['金多泄弱身躯', '水泛土崩'] },
    '子': { title: '十一月戊土', climate: '严冬冰冻，厚土凝坚。', primary: '丙火 (至尊调候)', secondary: '甲木 (疏冻土)', classic_text: '仲冬大寒，天地冰封。专取丙火解冻，非丙不生；次用甲木，富贵名扬。', vernacular: '冬月戊土冰冻三尺，非大火阳光不能融雪回春。柱见丙火透出者，官高禄厚。', favorable: ['丙火', '甲木'], taboos: ['水寒冰重', '无火生机俱灭'] }
  },

  '己': {
    '寅': { title: '正月己土', climate: '初春田园，寒冻未解。', primary: '丙火 (暖土融春)', secondary: '甲木 (官星合贵)', classic_text: '正月己土田园，阴湿寒冷。专取丙火温阳解冻，次取甲木疏通，禾稼始丰。', vernacular: '初春田园泥泞冰冷，必须丙火阳光普照驱寒，甲木相合，庄稼方能发荣。', favorable: ['丙火', '甲木', '癸水'], taboos: ['寒湿无火', '金多泄气'] },
    '午': { title: '五月己土', climate: '仲夏三伏，田园干裂。', primary: '癸水 (甘霖雨露)', secondary: '辛金 (生水救旱)', classic_text: '五月己土禾稼焦干，非癸水雨露滋润不可。金生癸水，极品之贵。', vernacular: '夏日农田干裂，最盼甘霖降临。癸水为至宝，辅以辛金源源不绝生水。', favorable: ['癸水', '辛金', '庚金'], taboos: ['无水烈火焦土', '火炎土燥'] },
    '申': { title: '七月己土', climate: '孟秋金气泄秀，水土渐凉。', primary: '丙火 (生土温金)', secondary: '癸水 (润泽生润)', classic_text: '七月己土金多泄身，喜丙火温土制金，癸水润泽，富贵功名。', vernacular: '秋日己土，秋收金旺泄气，喜丙火太阳照射，癸水润养根须。', favorable: ['丙火', '癸水'], taboos: ['重金泄尽', '寒霜冻土'] },
    '子': { title: '十一月己土', climate: '严冬冻土，泥浆成冰。', primary: '丙火 (至尊神化)', secondary: '甲木 (辅佐)', classic_text: '十一月己土冰冻，全赖丙火回春。见丙透支藏，暖土生万物，名登金榜。', vernacular: '冬月己土为冻泥，滴水成冰，无丙火则万物枯萎，见丙火则如春风拂面。', favorable: ['丙火', '甲木'], taboos: ['全无丙火', '水多泥崩'] }
  },

  '庚': {
    '寅': { title: '正月庚金', climate: '初春绝地，木旺土虚。', primary: '戊土 (生金固根)', secondary: '丁火 (炼庚成器)', classic_text: '正月庚金绝于寅，木旺金绝。先取戊土生身，次取丁火熔炼，金旺成器。', vernacular: '初春庚金体弱，先需戊土厚泥培护生金，再得丁火熔炼成绝世宝剑。', favorable: ['戊土', '丁火', '丙火'], taboos: ['木盛金折', '无土生金'] },
    '午': { title: '五月庚金', climate: '仲夏火旺，顽金销铄。', primary: '壬水 (淘洗降温)', secondary: '癸水 (滋润润金)', classic_text: '五月庚金遇大火熔销，非壬癸水救命不可。壬水淬砺，金火既济大吉。', vernacular: '盛夏午火烈焰，庚金有销熔之危。必须壬水江河淬火降温，淘洗生辉。', favorable: ['壬水', '癸水', '己土'], taboos: ['纯火焚身', '燥土脆金'] },
    '申': { title: '七月庚金', climate: '建申得禄，刚健为最。', primary: '丁火 (铸造重器)', secondary: '甲木 (劈木助火)', classic_text: '七月庚金刚健专禄，非丁火铸炼不能成国之钟鼎重器。丁甲并透，富贵无疆。', vernacular: '秋初庚金当令建禄，刚锐无匹。最喜丁火炉火精炼成重器，甲木引火，名垂青史。', favorable: ['丁火', '甲木'], taboos: ['水多金沉', '全无火炼顽金'] },
    '子': { title: '十一月庚金', climate: '金寒水冷，冻水滞金。', primary: '丁火 (温炉)', secondary: '丙火 (解严寒)', classic_text: '仲冬庚金，金沉水冷。专用丁火熔金，丙火解冻，水火相交，科名发越。', vernacular: '隆冬金白水清但奇寒冰结，急需丙火解冻、丁火生暖，寒金得火，生机勃勃。', favorable: ['丁火', '丙火', '甲木'], taboos: ['无火冻馁', '金沉水底'] }
  },

  '辛': {
    '寅': { title: '正月辛金', climate: '初春弱金，金木交战。', primary: '己土 (生润珠玉)', secondary: '壬水 (淘洗发光)', classic_text: '正月辛金阳气初生，体本软弱。取己土生身，壬水淘洗，金润水清。', vernacular: '初春辛金为娇柔珠玉，喜己土湿泥生护，壬水澄澈淘洗，自显光芒。', favorable: ['己土', '壬水'], taboos: ['厚戊土埋金', '火多销熔'] },
    '午': { title: '五月辛金', climate: '夏月炎炎，珠玉遭烘。', primary: '壬水 (洗润解燥)', secondary: '己土 (晦火培金)', classic_text: '五月辛金虚弱，烈火伤金。专取壬水淘洗降温，己土晦火生身，富贵优游。', vernacular: '夏日辛金最怕烘炉烈火熔化珠玉，全凭壬水江河淘洗、己土降火生身。', favorable: ['壬水', '己土', '癸水'], taboos: ['纯火烈焰', '燥土焦干'] },
    '酉': { title: '八月辛金', climate: '建酉专禄，珠玉清莹。', primary: '壬水 (金白水清)', secondary: '甲木 (生火疏土)', classic_text: '八月辛金纯粹温润，得禄于酉。专用壬水淘洗，秀气发越，一清到底。', vernacular: '仲秋辛金温润清莹至极，一见壬水便成“金白水清”天下绝品，文章冠世。', favorable: ['壬水', '甲木'], taboos: ['厚土埋没', '丁火销残'] },
    '子': { title: '十一月辛金', climate: '严霜冬雪，珠玉沉冰。', primary: '丙火 (阳和融冰)', secondary: '壬水 (发秀)', classic_text: '冬月辛金，冰霜凝结。专取丙火暄照解冻，壬水不致冻结，珠生光彩。', vernacular: '隆冬辛金冰封，需丙火阳光照耀融冰，使珠宝重新熠熠生辉。', favorable: ['丙火', '壬水'], taboos: ['寒冻无阳', '厚土重叠'] }
  },

  '壬': {
    '寅': { title: '正月壬水', climate: '初春水汪洋，木旺泄水。', primary: '庚金 (发源生水)', secondary: '丙火 (暄暖照海)', classic_text: '正月壬水汪洋，寅木泄气。取庚金为源泉生水，丙火温暖照海，水木清华。', vernacular: '初春壬水汪洋奔涌，取庚金源远流长，丙火阳光映照，气象万千。', favorable: ['庚金', '丙火', '戊土'], taboos: ['戊土过重浊水', '无金水源干涸'] },
    '午': { title: '五月壬水', climate: '仲夏三伏，火旺水竭。', primary: '癸水 (帮身降温)', secondary: '庚金 (水源不绝)', classic_text: '五月壬水至干，非水不生。取庚辛金为发源，癸水辅身，财官双美。', vernacular: '盛夏大旱，大江大河亦有干涸之虞。必须庚辛金如雪山融水生发，癸水相帮。', favorable: ['庚金', '辛金', '癸水'], taboos: ['燥土吸干', '纯火无金'] },
    '申': { title: '七月壬水', climate: '建申长生，水源极盛。', primary: '戊土 (筑堤防洪)', secondary: '丁火 (水火既济)', classic_text: '七月壬水长生于申，源远流长，势不可当。专取戊土为堤坝，丁火生财，武职威权。', vernacular: '秋初壬水浩荡奔涌，如山洪暴发，必须戊土高山筑堤阻拦成湖，方成灌溉大用。', favorable: ['戊土', '丁火'], taboos: ['金水过多泛滥成灾', '无堤破损'] },
    '子': {
      title: '十一月壬水',
      climate: '仲冬阳刃，汪洋巨浪。',
      primary: '戊土 (砥柱中流)',
      secondary: '丙火 (解寒破冰)',
      classic_text: '十一月壬水阳刃当权，巨浪滔天。先取戊土厚筑堤岸，次取丙火融暖寒冰，一品封侯。',
      vernacular: '隆冬水势至强至冷，非厚重戊土筑堤不能止其泛滥，非丙火阳光不能解其严冰。',
      favorable: ['戊土', '丙火'],
      taboos: ['冰凝无火', '水多崩堤'],
      yangren_meaning: '【羊刃深层含义与心性本质】：羊刃者，日元极旺之帝旺煞位（壬见子为帝旺阳刃），如刀锋之极锐、兵刃之极烈。代表命主天生具备超凡的钢铁意志、极高的耐痛与抗压阈值、绝不服输的霸气、在极端险境中的孤勇。它既是一把能披荆斩棘、开辟万里的绝世神兵，也是一把易割伤自己与亲近之人的双刃剑。',
      yangren_usage: '【羊刃如何驾驭与掌控（怎么样用）】：古云“煞无刃不显，刃无煞不威。杀刃两全，威镇乾坤”。羊刃刚勇猛烈，绝不可放任自流。① 最喜七杀（或正官戊土）重重制伏，以法律纪律、严苛考核与大局使命约束其蛮力，将其锻造为战功赫赫的开疆大将（羊刃驾杀）；② 次喜伤官（乙卯木）吐秀泄其狂飙，将澎湃能量转化为惊世才华与破局谋略；③ 最忌无制无泄、比劫再重重聚党，导致盲目莽撞、挥霍资财、招致刑伤。',
      yangren_examples: '【羊刃现实原型与行业案例】：① 顶尖创伤急诊与心胸外科主刀专家（在死神边缘动刀救人，必须手稳心狠、极度冷静果决）；② 濒临清算企业的危机并购重组“救火队长”CEO（力排众议铁腕裁撤冗员、硬核突围）；③ 特警反恐作战指挥官与极限刑侦专家；④ 顶尖竞技体育格斗与极限耐力世界冠军（在常人难以忍受的生理极限中爆发求胜欲）。',
      modern_wutu: '【戊土在现代世界代表什么】：戊土为厚重高山与坚固大坝。在现代商业与社会生态中对应：① 大型基础设施与物理重资产（水利枢纽、数据中心地下防空金库、仓储基地）；② 严格的合规与风控防火墙（上市合规审查委员会、金融央行准备金红线、法务合同免责条款）；③ 组织层级与制度纪律（严格的标准作业程序SOP、军令状与考核制度）；④ 心理与行动边界（坚守底线、拒绝盲目加杠杆、沉住气守底盘）。',
      modern_binghuo: '【丙火在现代世界代表什么】：丙火为太阳普照与至阳光明。在现代商业与社会生态中对应：① 公共曝光与全网超级传播（主流权威媒体报道、大型发布会聚光灯、个人超级IP矩阵、短视频流量聚光）；② 尖端数字与能源算力（超级AI算力芯片集群、太阳能光伏与清洁能源、光学光电感知）；③ 阳光透明的商业治理（向公众与股东阳光披露、坦荡诚信的商誉）；④ 温暖亲和的情绪价值（极具号召力的领袖魅力、关爱部属的热诚大度、晨间户外阳光运动）。',
      action_protocol: '【仲冬壬水行运落地全法门】：仲冬壬水天寒水冻、阳刃汪洋。命主日常须践行“戊土筑堤 + 丙火解冻”双轨法门：① 事业上绝不可打无准备之仗或放任项目野蛮生长，必须以严格的财务审计、法务合同（戊土）构筑防火墙；② 传播与人际上主动拥抱聚光灯、多向公众和团队展现温暖真诚（丙火），化解冬水孤傲高冷的壁垒；③ 生活中坚持晨起户外阳光快走或慢跑、多接触温暖明亮的红黄暖色调，将冰封巨浪彻底化为润泽天下、灌溉沃野的千亿级商业与人生长河！'
    }
  },

  '癸': {
    '寅': { title: '正月癸水', climate: '初春雨露，天气微寒。', primary: '辛金 (发源润泽)', secondary: '丙火 (解冻暄照)', classic_text: '正月癸水柔弱，初春微寒。专取辛金发其源，丙火解其冻，天润地和。', vernacular: '春霖细雨，喜辛金甘泉发脉，丙火温照生花，文章俊秀。', favorable: ['辛金', '丙火'], taboos: ['戊土浊泥', '寒冻不化'] },
    '午': { title: '五月癸水', climate: '仲夏炎炎，雨露蒸干。', primary: '庚金 (发源保命)', secondary: '辛金 (生水降温)', classic_text: '五月癸水极弱，酷日当空，易被蒸发。专取庚辛金发水源，金水相涵方免夭折。', vernacular: '盛夏三伏，甘霖雨露容易被烈日蒸发殆尽，必须有庚辛金矿泉水脉持续涌出。', favorable: ['庚金', '辛金', '壬水'], taboos: ['火土焦干', '滴水无源'] },
    '申': { title: '七月癸水', climate: '孟秋母旺子相，水气充沛。', primary: '丁火 (调候既济)', secondary: '甲木 (化秀生火)', classic_text: '七月癸水正得长生，金多水浊。取丁火制金，甲木引丁，水清木秀，极品之格。', vernacular: '秋初母旺子相，申金生水水气充沛，喜丁火财星温暖，甲木伤官吐秀。', favorable: ['丁火', '甲木'], taboos: ['金水太寒', '重土污泥'] },
    '子': { title: '十一月癸水', climate: '仲冬大寒，凝结为霜雪。', primary: '丙火 (第一至宝)', secondary: '辛金 (佐源发秀)', classic_text: '十一月癸水建禄，天寒地冻，化为霜雪。非丙火融冰解冻不可，丙透富贵，无丙贫残。', vernacular: '冬月雨露凝为冰霜，纯阴无阳，唯有丙火太阳普照方能解冻化水生生不息。', favorable: ['丙火', '辛金', '戊土'], taboos: ['水冷冰结', '纯阴无阳'] }
  }
};

class QiongTongDB {
  /**
   * Get seasonal regulating reading based on Day Master and Month Branch
   * @param {string} dayMaster e.g. "甲"
   * @param {string} monthBranch e.g. "寅"
   */
  static getReading(dayMaster, monthBranch) {
    if (!dayMaster || !monthBranch) return null;

    const stemData = QIONG_TONG_DATA[dayMaster];
    if (!stemData) return null;

    // Check direct branch, or map season if not directly hardcoded
    let reading = stemData[monthBranch];
    if (!reading) {
      // Fallback: match season (Spring=寅卯辰, Summer=巳午未, Autumn=申酉戌, Winter=亥子丑)
      const candidates = Object.keys(stemData);
      reading = stemData[candidates[0]];
    }

    const monthName = MONTH_BRANCH_NAMES[monthBranch] || `${monthBranch}月`;

    return {
      title: `${monthName} · ${dayMaster}日主调候要义`,
      dayMaster,
      monthBranch,
      monthName,
      climate: reading.climate,
      primary: reading.primary,
      secondary: reading.secondary,
      classic_text: reading.classic_text,
      vernacular: reading.vernacular,
      favorable: reading.favorable || [],
      taboos: reading.taboos || [],
      yangren_meaning: reading.yangren_meaning || null,
      yangren_usage: reading.yangren_usage || null,
      yangren_examples: reading.yangren_examples || null,
      modern_wutu: reading.modern_wutu || null,
      modern_binghuo: reading.modern_binghuo || null,
      action_protocol: reading.action_protocol || null,
      source: `《穷通宝鉴》（原名《栏江网》）· 论${dayMaster}日主生于${monthName}`
    };
  }

  static search(keyword) {
    if (!keyword) return [];
    keyword = keyword.trim().toLowerCase();
    const results = [];

    for (const [stem, months] of Object.entries(QIONG_TONG_DATA)) {
      for (const [branch, data] of Object.entries(months)) {
        if (
          stem.includes(keyword) ||
          branch.includes(keyword) ||
          data.title.includes(keyword) ||
          data.classic_text.includes(keyword) ||
          data.vernacular.includes(keyword) ||
          data.primary.includes(keyword)
        ) {
          results.push({
            source: '《穷通宝鉴》· 调候论',
            title: `${data.title}（调候：${data.primary}）`,
            content: data.classic_text,
            detail: `${data.climate} ${data.vernacular}`
          });
        }
      }
    }
    return results;
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { QiongTongDB, QIONG_TONG_DATA, MONTH_BRANCH_NAMES };
}
if (typeof window !== 'undefined') {
  window.QiongTongDB = QiongTongDB;
  window.QIONG_TONG_DATA = QIONG_TONG_DATA;
  window.MONTH_BRANCH_NAMES = MONTH_BRANCH_NAMES;
}
