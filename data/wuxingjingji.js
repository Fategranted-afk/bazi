/**
 * 《五行精纪》 (Wu Xing Jing Ji) Canonical Database
 * Song Dynasty Supreme Encyclopedia of Ancient Lu-Ming Metaphysics
 * Author: 宋·廖中撰 (南宋岳珂刊印)
 * 
 * Core Metaphysical Tenets:
 * 1. 年本为主论 (Year Pillar Supreme Root): 年为根基岁命之主，月为气门，日为身元，时为引从归宿。
 * 2. 纳音生旺墓绝 (NaYin Twelve Vitality Phases): 纳音五行与正五行交参，辨识长生、帝旺、墓库、死绝之深层气数。
 * 3. 禄马贵人乘旺 (Noble Stars Riding Vitality): 禄马贵人得长生帝旺之气，方能展经天纬地之功。
 * 4. 音律干支同和 (Acoustic and Stem-Branch Harmonic Resonance).
 */

const WU_XING_JING_JI_DATA = {
  chapters: [
    {
      id: 'nianben',
      titleZh: '年本为主总论',
      titleEn: 'Treatise on Year Pillar as Sovereign Root (Nian Ben)',
      quoteZh: '以年为本，以日为主，以月为门户，以时为引从。年本尊荣，如君临万国，树立千丈；根基深厚，方受风雨而不倾。',
      quoteEn: 'Take the Year as the sovereign Root, the Day as the self, the Month as the portal of qi, and the Hour as the guiding destiny. When the Year Root is noble and profound, life withstands hurricanes without tipping.',
      vernacularZh: '廖中在宋代命学大成《五行精纪》中力倡：后世子平法偏重日干，常遗忘年柱乃一人一生之太极根本。年柱干支与纳音是前世业力、家族祖德、时代国运与不可剥夺的原生基因。年根得力，终身有大护持；年根受戕，凡事多费周折。',
      vernacularEn: 'Liao Zhong asserts that while later Ziping focuses on the Day Master, the Year Pillar remains the ultimate cosmic Root. It embodies generational inheritance, national era resonance, and innate resilience.',
      modernInterpretationZh: '【现代心智与社会画像】：一个人的抗风险底盘、家族精神文化资本与底层心理安全感。年根深厚者，即使青年经历挫折，亦能凭借家族风骨与底层韧性重新崛起。',
      modernInterpretationEn: '【Modern Strategic Archetype】: Foundational anti-fragility, cultural inheritance, and psychological baseline resilience, allowing the native to rebound from adversity.'
    },
    {
      id: 'nayin_shengwang',
      titleZh: '纳音生旺墓绝辨析',
      titleEn: 'NaYin Twelve Vitality Phases (Na Yin Sheng Wang)',
      quoteZh: '纳音五行，各主其气。长生受生，帝旺乘权，死绝沉潜，墓库归藏。逢旺不嫌多，逢绝忌冲破；借气生神，变化万端。',
      quoteEn: 'NaYin elements govern dynamic vitality. Flourishing phases command authority; dormant phases cultivate subterranean strength; tomb phases harvest stored energy. Borrowing qi sparks infinite transformation.',
      vernacularZh: '五行精纪详析纳音十二生旺：正五行虽弱，若纳音坐长生帝旺，则暗藏勃勃生机；正五行虽旺，若纳音入死绝空亡，易华而不实。必须体用兼察，方知命格深浅。',
      vernacularEn: 'Subterranean NaYin vitality often contradicts surface elements: a delicate stem backed by an emperor NaYin holds hidden resilience, while a dominant stem on a hollow NaYin risks superficiality.',
      modernInterpretationZh: '【现代心智与社会画像】：显性资源与隐性势能的区别。外在职位或名头（干支）或许尚未显贵，但底层核心专业能力与潜伏势能（纳音生旺）早已蓄势待发。',
      modernInterpretationEn: '【Modern Strategic Archetype】: Latent capital versus surface optics. The native’s quiet technical competence and deep structural assets outshine fleeting titles.'
    },
    {
      id: 'luma_chengwang',
      titleZh: '禄马贵人乘旺论',
      titleEn: 'Noble Stars Riding Vitality Treatise (Lu Ma Cheng Wang)',
      quoteZh: '禄马贵人，皆要乘旺借气。空亡带贵，徒具虚名；贵人临生旺之地，威福齐备，遇险呈祥。',
      quoteEn: 'Lu, Post Horse, and Tianyi Nobles must ride flourishing vitality. Nobles trapped in Void remain hollow prestige; Nobles residing on vital grounds bestow authority and turn perils into triumphs.',
      vernacularZh: '吉神贵人并非越多越好，关键在“乘旺”。如果天乙贵人、驿马、禄神坐于自身五行长生帝旺之支，其提携助力如虎添翼；若坐于死绝沐浴或空亡之地，则多是口头应承难有实质托举。',
      vernacularEn: 'Auspicious stars require authentic fuel: Nobles riding peak vitality deliver game-changing institutional sponsorships, whereas Nobles in Void provide only empty verbal praise.',
      modernInterpretationZh: '【现代心智与社会画像】：辨识“真贵人”与“有效社交”。不沉迷无效饭局与虚浮赞誉，专注于能够提供真实生产力资源赋能与关键信任背书的顶级导师。',
      modernInterpretationEn: '【Modern Strategic Archetype】: Discriminating high-signal sponsorship from superficial networking. Focuses exclusively on institutional mentors capable of direct leverage.'
    },
    {
      id: 'ganzhi_tonghe',
      titleZh: '干支音律同和互参论',
      titleEn: 'Treatise on Harmonic Resonance of Stems and Branches (Gan Zhi Tong He)',
      quoteZh: '律吕相宣，同声相应。干支纳音同和者，志气高远，百神潜伏；五音相克者，内外激荡，奔波劳碌。',
      quoteEn: 'Harmonics and acoustic pitches echo in unison. When stems, branches, and NaYin resonate in acoustic harmony, aspirations manifest smoothly and tranquil peace abounds.',
      vernacularZh: '宋代古法尤其重视四柱之间音律声调的和谐。四柱干支纳音若五行连续顺生（如水生木、木生火），其人一生行事顺遂，人际摩擦极少；若相互驳杂克战，则一生充满戏剧性反转与剧烈博弈。',
      vernacularEn: 'Continuous harmonic generation across the four pillars generates frictionless compounding; discordant acoustic collisions demand relentless negotiation and resilience.',
      modernInterpretationZh: '【现代心智与社会画像】：组织生态的内部协同力与对外敏捷度。音律和谐者善于团队协作与润物细无声；音律相战者更适合做孤狼式战略破局者。',
      modernInterpretationEn: '【Modern Strategic Archetype】: Organizational cohesion versus disruptive innovation. Harmonious profiles excel in consensus building; discordant profiles shine as lone-wolf disrupters.'
    }
  ]
};

class WuXingJingJiDB {
  static getAllChapters() {
    return WU_XING_JING_JI_DATA.chapters;
  }

  /**
   * Year root analysis according to Song Dynasty Wu Xing Jing Ji
   */
  static getYearRootAnalysis(bazi) {
    if (!bazi || !bazi.pillars) {
      return {
        titleZh: '年本为主 · 根基底盘全息判词',
        titleEn: 'Year Root Master Foundation Analysis',
        rootQualityZh: '年柱根基稳固，受祖德庇佑。',
        rootQualityEn: 'Year Root foundation is stable and blessed with generational heritage.',
        naYinResonanceZh: '纳音气象纯正，与月日时呼应。',
        naYinResonanceEn: 'NaYin energetic atmosphere resonates with Month, Day, and Hour.',
        lumaAdviceZh: '乘旺借气，善用体制与长者资源。',
        lumaAdviceEn: 'Ride flourishing vitality and leverage institutional mentorship.'
      };
    }

    const stemMapEn = {
      '甲': 'Jia', '乙': 'Yi', '丙': 'Bing', '丁': 'Ding', '戊': 'Wu',
      '己': 'Ji', '庚': 'Geng', '辛': 'Xin', '壬': 'Ren', '癸': 'Gui'
    };
    const branchMapEn = {
      '子': 'Zi', '丑': 'Chou', '寅': 'Yin', '卯': 'Mao', '辰': 'Chen', '巳': 'Si',
      '午': 'Wu', '未': 'Wei', '申': 'Shen', '酉': 'You', '戌': 'Xu', '亥': 'Hai'
    };
    const naYinMapEn = {
      '海中金': 'Sea Metal', '炉中火': 'Furnace Fire', '大林木': 'Great Forest Wood', '路旁土': 'Roadside Earth',
      '剑锋金': 'Sword Edge Metal', '山头火': 'Mountaintop Fire', '涧下水': 'Valley Stream Water', '城头土': 'City Rampart Earth',
      '白蜡金': 'White Wax Metal', '杨柳木': 'Willow Wood', '泉中水': 'Spring Water', '屋上土': 'Rooftop Earth',
      '霹雳火': 'Thunderbolt Fire', '松柏木': 'Pine and Cypress Wood', '长流水': 'Everflowing River Water', '沙中金': 'Sand Metal',
      '山下火': 'Foot of Mountain Fire', '平地木': 'Flatland Wood', '壁上土': 'Wall Earth', '金箔金': 'Gold Foil Metal',
      '佛灯火': 'Lamp Fire', '天河水': 'Celestial River Water', '大驿土': 'Post Station Earth', '钗钏金': 'Hairpin Metal',
      '桑柘木': 'Mulberry Wood', '大溪水': 'Great Torrent Water', '沙中土': 'Sand Earth', '天上火': 'Heavenly Fire',
      '石榴木': 'Pomegranate Wood', '大海水': 'Great Ocean Water'
    };

    const y = bazi.pillars.year;
    const m = bazi.pillars.month;
    const d = bazi.pillars.day;
    const h = bazi.pillars.hour;

    const yStem = y ? y.stem : '甲';
    const yBranch = y ? y.branch : '子';
    const yNaYin = y ? y.naYin : '海中金';

    const yStemEn = stemMapEn[yStem] || yStem;
    const yBranchEn = branchMapEn[yBranch] || yBranch;
    const yNaYinEn = naYinMapEn[yNaYin] || 'Acoustic NaYin';

    const dNaYin = d ? d.naYin : '纳音';
    const dNaYinEn = naYinMapEn[dNaYin] || 'Harmonic Tone';

    let qualityZh = `年柱【${yStem}${yBranch}】(${yNaYin})为命局之万年根基。`;
    let qualityEn = `Year Pillar [${yStemEn}-${yBranchEn}] (${yNaYinEn}) serves as the enduring foundation. `;

    if (['子', '午', '卯', '酉'].includes(yBranch)) {
      qualityZh += '年坐四正帝旺桃花之气，原生家庭门风卓异，具有鲜明风采与深厚名望底蕴。';
      qualityEn += 'Year rests on peak Cardinal ground, endowing native with strong ancestral prestige and natural charisma.';
    } else if (['寅', '申', '巳', '亥'].includes(yBranch)) {
      qualityZh += '年坐四生驿马开创之位，祖辈多有敢为人先、白手起家闯荡四海之志，赋予命主极强探索基因。';
      qualityEn += 'Year rests on Corner vitality ground, imparting pioneering spirit and migratory ambition.';
    } else {
      qualityZh += '年坐四库深藏厚重之土，祖业厚重承载力强，为命主提供稳固的心理安全感与不动产根基。';
      qualityEn += 'Year rests on Grave-Storage Earth ground, providing profound psychological anchoring and physical asset resilience.';
    }

    const naYinResonanceZh = `年柱纳音【${yNaYin}】与日主【${dNaYin}】交参互照，形成古法禄命“人元借年本之气”的深层互动。`;
    const naYinResonanceEn = `Year NaYin [${yNaYinEn}] harmonizes with Day NaYin [${dNaYinEn}], establishing deep ancestral-personal acoustic resonance.`;

    const lumaAdviceZh = '【五行精纪破局策】：欲成大器，首在依托时代趋势与宏观组织平台（借年根之风），不打无准备之仗。';
    const lumaAdviceEn = '【Wu Xing Jing Ji Strategic Rule】: Anchor into macro generational waves and institutional platforms before executing aggressive personal campaigns.';

    return {
      titleZh: '《五行精纪》年本为主 · 根基底盘全息判词',
      titleEn: 'Wu Xing Jing Ji: Year Root Foundation Hologram',
      rootQualityZh: qualityZh,
      rootQualityEn: qualityEn,
      naYinResonanceZh,
      naYinResonanceEn,
      lumaAdviceZh,
      lumaAdviceEn
    };
  }

  static search(query) {
    if (!query) return [];
    const q = query.toLowerCase();
    const results = [];
    WU_XING_JING_JI_DATA.chapters.forEach(c => {
      if (
        (c.titleZh && c.titleZh.includes(query)) ||
        (c.titleEn && c.titleEn.toLowerCase().includes(q)) ||
        (c.quoteZh && c.quoteZh.includes(query)) ||
        (c.quoteEn && c.quoteEn.toLowerCase().includes(q)) ||
        (c.vernacularZh && c.vernacularZh.includes(query)) ||
        (c.vernacularEn && c.vernacularEn.toLowerCase().includes(q)) ||
        (c.modernInterpretationZh && c.modernInterpretationZh.includes(query)) ||
        (c.modernInterpretationEn && c.modernInterpretationEn.toLowerCase().includes(q))
      ) {
        results.push({
          source: '《五行精纪》',
          sourceEn: 'Wu Xing Jing Ji',
          title: c.titleZh,
          titleEn: c.titleEn,
          content: c.quoteZh,
          contentEn: c.quoteEn,
          detail: c.vernacularZh,
          detailEn: c.vernacularEn
        });
      }
    });
    return results;
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { WuXingJingJiDB, WU_XING_JING_JI_DATA };
}
if (typeof window !== 'undefined') {
  window.WuXingJingJiDB = WuXingJingJiDB;
}
