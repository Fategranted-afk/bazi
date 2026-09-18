/**
 * 人生整体推演 · 四维全息时空大观合成引擎 (Comprehensive Lifelong Trajectory Synthesis Engine)
 * 深度融通四大核心维度：
 * 1. 百岁运势时空罗盘 (Lifelong Chrono-Navigator): 1~100岁连续能量曲线、财富潮汐均值、黄金壮年巅峰期(28~55岁)、大运换甲拐点
 * 2. User 自己 (Natal Self & Architecture): 日主五行阴阳、子平量化强弱(身旺/身弱/专旺)、原局三大主导格局、调候喜用
 * 3. 百岁岁运六十四卦易数气机波动轨迹 (100-Year Hexagram Trajectory): 先天立命卦、后天跃升卦、值年流年卦爻、八卦气机交感
 * 4. 星的含义 (Astrological Stars & Ten Gods Dynamics): 十神场能转换、核心吉神凶煞(天乙/文昌/红鸾天喜/驿马/将星/羊刃/华盖/空亡)
 *
 * 100% Offline-First, deterministic, and fully bilingual (zh/en) with 0 CJK leaks in English mode.
 */

class LifelongSynthesisEngine {
  static get STEM_PINYIN() {
    return {
      '甲': 'Jia', '乙': 'Yi', '丙': 'Bing', '丁': 'Ding', '戊': 'Wu',
      '己': 'Ji', '庚': 'Geng', '辛': 'Xin', '壬': 'Ren', '癸': 'Gui'
    };
  }

  static get BRANCH_PINYIN() {
    return {
      '子': 'Zi', '丑': 'Chou', '寅': 'Yin', '卯': 'Mao', '辰': 'Chen', '巳': 'Si',
      '午': 'Wu', '未': 'Wei', '申': 'Shen', '酉': 'You', '戌': 'Xu', '亥': 'Hai'
    };
  }

  /**
   * Helper: Map stem to polarity & element
   */
  static getStemProfile(stem, isEn = false) {
    const s = stem || '甲';
    const isYang = ['甲', '丙', '戊', '庚', '壬'].includes(s);
    const elemMapZh = {
      '甲': '木', '乙': '木', '丙': '火', '丁': '火', '戊': '土',
      '己': '土', '庚': '金', '辛': '金', '壬': '水', '癸': '水'
    };
    const elemMapEn = {
      '甲': 'Wood', '乙': 'Wood', '丙': 'Fire', '丁': 'Fire', '戊': 'Earth',
      '己': 'Earth', '庚': 'Metal', '辛': 'Metal', '壬': 'Water', '癸': 'Water'
    };

    const elZh = elemMapZh[s] || '木';
    const elEn = elemMapEn[s] || 'Wood';
    const polZh = isYang ? '阳' : '阴';
    const polEn = isYang ? 'Yang' : 'Yin';
    const py = this.STEM_PINYIN[s] || 'Jia';

    return {
      stem: s,
      stemEn: py,
      isYang,
      elementZh: elZh,
      elementEn: elEn,
      polarityZh: polZh,
      polarityEn: polEn,
      nameZh: `${polZh}${elZh} (${s})`,
      nameEn: `${polEn} ${elEn} (${py})`
    };
  }

  /**
   * Helper: Ten Gods relationship calculator
   */
  static getTenGod(dmStem, transitStem, isEn = false) {
    if (!dmStem || !transitStem) return isEn ? 'Self Alignment' : '比肩元神';
    const STEM_ELEMENTS = {
      '甲': '木', '乙': '木', '丙': '火', '丁': '火', '戊': '土',
      '己': '土', '庚': '金', '辛': '金', '壬': '水', '癸': '水'
    };
    const STEM_YANG = {
      '甲': true, '乙': false, '丙': true, '丁': false, '戊': true,
      '己': false, '庚': true, '辛': false, '壬': true, '癸': false
    };

    const dmEl = STEM_ELEMENTS[dmStem] || '木';
    const trEl = STEM_ELEMENTS[transitStem] || '木';
    const samePolarity = (STEM_YANG[dmStem] === STEM_YANG[transitStem]);

    const RELATION_MAP = {
      '木': { '木': 'same', '火': 'generate', '土': 'overcome', '金': 'overcome_by', '水': 'generate_by' },
      '火': { '火': 'same', '土': 'generate', '金': 'overcome', '水': 'overcome_by', '木': 'generate_by' },
      '土': { '土': 'same', '金': 'generate', '水': 'overcome', '木': 'overcome_by', '火': 'generate_by' },
      '金': { '金': 'same', '水': 'generate', '木': 'overcome', '火': 'overcome_by', '土': 'generate_by' },
      '水': { '水': 'same', '木': 'generate', '火': 'overcome', '土': 'overcome_by', '金': 'generate_by' }
    };

    const rel = RELATION_MAP[dmEl] ? RELATION_MAP[dmEl][trEl] : 'same';

    if (rel === 'same') {
      return samePolarity ? (isEn ? 'Friend (Bi Jian)' : '比肩') : (isEn ? 'Rob Wealth (Jie Cai)' : '劫财');
    } else if (rel === 'generate') {
      return samePolarity ? (isEn ? 'Eating God (Shi Shen)' : '食神') : (isEn ? 'Hurting Officer (Shang Guan)' : '伤官');
    } else if (rel === 'overcome') {
      return samePolarity ? (isEn ? 'Indirect Wealth (Pian Cai)' : '偏财') : (isEn ? 'Direct Wealth (Zheng Cai)' : '正财');
    } else if (rel === 'overcome_by') {
      return samePolarity ? (isEn ? 'Seven Killings (Qi Sha)' : '七杀') : (isEn ? 'Direct Officer (Zheng Guan)' : '正官');
    } else if (rel === 'generate_by') {
      return samePolarity ? (isEn ? 'Indirect Resource (Pian Yin)' : '偏印') : (isEn ? 'Direct Resource (Zheng Yin)' : '正印');
    }
    return isEn ? 'Peer Energy' : '同行气机';
  }

  /**
   * Helper: Ten God dynamic field energy transformation explanation
   */
  static getTenGodTransformation(godName, isEn = false) {
    const gn = (godName || '').trim();
    if (gn.includes('七杀') || gn.includes('Seven Killings')) {
      return isEn
        ? 'Seven Killings ignites vanguard conquest, executive courage, and rapid crisis management under pressure.'
        : '偏官七杀兵戈攻伐，激发逆境突围、杀伐决断与掌印威权，化压迫为破局利刃。';
    }
    if (gn.includes('正官') || gn.includes('Direct Officer')) {
      return isEn
        ? 'Direct Officer brings institutional governance, administrative elevation, and reputable organizational influence.'
        : '正官星曜端肃清明，确立体制合规、组织领导力与声名公信力，利官阶晋升。';
    }
    if (gn.includes('偏财') || gn.includes('Indirect Wealth')) {
      return isEn
        ? 'Indirect Wealth unlocks opportunistic liquidity, agile dealmaking, and cross-border commercial expansion.'
        : '偏财引动跨界资本与敏捷商业嗅觉，宜借势腾挪、商业运作与抓取非线性财富机遇。';
    }
    if (gn.includes('正财') || gn.includes('Direct Wealth')) {
      return isEn
        ? 'Direct Wealth fosters structured asset accumulation, commercial operations, and prudent wealth consolidation.'
        : '正财厚植稳健资产，讲求精细化运营、按部就班与确定性商业价值沉淀。';
    }
    if (gn.includes('食神') || gn.includes('Eating God')) {
      return isEn
        ? 'Eating God nurtures creative craftsmanship, deep intellectual research, elegant output, and organic wealth creation.'
        : '食神秀气吐露，主潜心独创、专注打磨核心技艺、从容享受并自然生发财富。';
    }
    if (gn.includes('伤官') || gn.includes('Hurting Officer')) {
      return isEn
        ? 'Hurting Officer fuels disruptive innovation, artistic expression, and uninhibited paradigm breakthroughs.'
        : '伤官破旧立新，才华锋芒毕露，宜打破陈规枷锁、颠覆式创新与高维才华变现。';
    }
    if (gn.includes('正印') || gn.includes('Direct Resource')) {
      return isEn
        ? 'Direct Resource confers scholarly prestige, institutional patronage, intellectual nourishment, and calm stability.'
        : '正印滋养元神与学问名望，得长辈贵人托底护持，宜学术研精、申博考学与守成积淀。';
    }
    if (gn.includes('偏印') || gn.includes('Indirect Resource')) {
      return isEn
        ? 'Indirect Resource unlocks sharp strategic insight, esoteric wisdom, and non-conventional problem solving.'
        : '偏印（枭神）独具特异洞察力，宜深耕偏门技术、前瞻策略研判与高深心智修养。';
    }
    if (gn.includes('比肩') || gn.includes('Friend')) {
      return isEn
        ? 'Friend energy reinforces independent stamina, peer collaboration, and strong sovereign self-confidence.'
        : '比肩同气连枝，增强独立意志与同侪信任协同，宜携手盟友并肩作战开辟新局。';
    }
    return isEn
      ? 'Rob Wealth unleashes decisive competitive ambition, resource contention, and pioneering boldness.'
      : '劫财果敢豪爽，敢于冒险竞合与攻坚夺隘，宜抱团打硬仗并审慎防范盲动消耗。';
  }

  /**
   * Helper: 8 Trigrams Qi Nature & Philosophy
   */
  static getTrigramQi(name, isEn = false) {
    const n = (name || '').trim();
    if (n.includes('乾') || n.includes('天') || n.includes('Qian') || n.includes('Heaven')) {
      return isEn
        ? { quality: 'Qian Strength (Creative Sovereign Drive)', meaning: 'Perpetual vitality, unyielding drive, initiative to lead and build order.' }
        : { quality: '乾健 · 自强不息', meaning: '刚健开创，统率大局，如龙腾天际般生生不息之元初动能。' };
    }
    if (n.includes('坤') || n.includes('地') || n.includes('Kun') || n.includes('Earth')) {
      return isEn
        ? { quality: 'Kun Receptivity (Yielding Grounding)', meaning: 'Deep accommodation, patient endurance, sustaining all endeavors with grounded stillness.' }
        : { quality: '坤顺 · 厚德载物', meaning: '温和包容，承载万物，以柔克刚沉潜蓄势之厚德底座。' };
    }
    if (n.includes('震') || n.includes('雷') || n.includes('Zhen') || n.includes('Thunder')) {
      return isEn
        ? { quality: 'Zhen Movement (Dynamic Breakthrough)', meaning: 'Thunderous momentum, lightning execution, breaking deadlocks with courage.' }
        : { quality: '震动 · 奋发开拓', meaning: '惊雷破晓，雷厉风行，以不可阻挡之锐气斩断犹豫破局而出。' };
    }
    if (n.includes('巽') || n.includes('风') || n.includes('Xun') || n.includes('Wind')) {
      return isEn
        ? { quality: 'Xun Penetration (Gentle Adaptation)', meaning: 'Seamless penetration, strategic patience, pervasive influence through steady persistence.' }
        : { quality: '巽入 · 随风化度', meaning: '无孔不入，顺应时势，润物细无声般渗透影响并化解阻力。' };
    }
    if (n.includes('坎') || n.includes('水') || n.includes('Kan') || n.includes('Water')) {
      return isEn
        ? { quality: 'Kan Abyss (Resilient Navigation)', meaning: 'Deep intuition, inner grit, navigating trials and perilous currents with quiet fortitude.' }
        : { quality: '坎险 · 水流深渊', meaning: '内蕴灵泉，直面危局，处险不惊、百折不回之极深韧性。' };
    }
    if (n.includes('离') || n.includes('火') || n.includes('Li') || n.includes('Fire')) {
      return isEn
        ? { quality: 'Li Illumination (Cognitive Radiance)', meaning: 'Clarity of vision, intellectual brilliance, illuminating paths and inspiring cultural reverence.' }
        : { quality: '离明 · 洞察烛照', meaning: '明理达观，才情灿然，以清澈心智洞悉真相与价值归宿。' };
    }
    if (n.includes('艮') || n.includes('山') || n.includes('Gen') || n.includes('Mountain')) {
      return isEn
        ? { quality: 'Gen Stillness (Fortress Boundary)', meaning: 'Steadfast boundary, stopping at the right threshold, guarding principles with quiet dignity.' }
        : { quality: '艮止 · 安如磐石', meaning: '知止笃定，壁立千仞，守住原则护城河与心神定力。' };
    }
    return isEn
      ? { quality: 'Dui Joy (Eloquent Harmony)', meaning: 'Sincere communication, persuasive grace, magnetic affinity that unites people with joy.' }
      : { quality: '兑悦 · 和悦通达', meaning: '以诚相待，言辞共鸣，令人如沐春风、凝聚人心之欢悦气场。' };
  }

  /**
   * Helper: Calculate Xun Kong (Void Branches / 空亡)
   */
  static calculateKongWang(stem, branch) {
    const STEMS = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
    const BRANCHES = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
    const sIdx = STEMS.indexOf(stem);
    const bIdx = BRANCHES.indexOf(branch);
    if (sIdx === -1 || bIdx === -1) return ['戌', '亥'];
    const xunStart = (bIdx - sIdx + 12) % 12;
    const v1 = (xunStart - 2 + 12) % 12;
    const v2 = (xunStart - 1 + 12) % 12;
    return [BRANCHES[v1], BRANCHES[v2]];
  }

  /**
   * Helper: Evaluate Auspicious Deities & Stars for a specific earthly branch
   */
  static getAuspiciousStarsForBranch(bazi, targetBranch, isEn = false) {
    if (!bazi || !bazi.pillars) return [];
    const dayStem = bazi.dayMaster || (bazi.pillars.day && bazi.pillars.day.stem) || '甲';
    const dayBranch = (bazi.pillars.day && bazi.pillars.day.branch) || '子';
    const yearStem = (bazi.pillars.year && bazi.pillars.year.stem) || '甲';
    const yearBranch = (bazi.pillars.year && bazi.pillars.year.branch) || '子';

    const stars = [];

    // 1. Tian Yi Nobleman (天乙贵人)
    const tianYiMap = {
      '甲': ['丑', '未'], '戊': ['丑', '未'], '庚': ['丑', '未'],
      '乙': ['子', '申'], '己': ['子', '申'],
      '丙': ['亥', '酉'], '丁': ['亥', '酉'],
      '壬': ['卯', '巳'], '癸': ['卯', '巳'],
      '辛': ['午', '寅']
    };
    const allTianYi = Array.from(new Set([...(tianYiMap[dayStem] || []), ...(tianYiMap[yearStem] || [])]));
    if (allTianYi.includes(targetBranch)) {
      stars.push({
        id: 'tianyi',
        nameZh: '天乙贵人',
        nameEn: 'Tian Yi Nobleman',
        icon: '✨',
        type: 'auspicious',
        descZh: '至尊吉神护体，危难中逢凶化吉，必有尊长导师破格提携。',
        descEn: 'Supreme Noble Deity: shields from existential perils and attracts influential mentor sponsorship.'
      });
    }

    // 2. Wen Chang (文昌星)
    const wenChangMap = {
      '甲': '巳', '乙': '午', '丙': '申', '丁': '酉', '戊': '申',
      '己': '酉', '庚': '亥', '辛': '子', '壬': '寅', '癸': '卯'
    };
    if (wenChangMap[dayStem] === targetBranch || wenChangMap[yearStem] === targetBranch) {
      stars.push({
        id: 'wenchang',
        nameZh: '文昌贵人',
        nameEn: 'Wen Chang Wisdom Star',
        icon: '📖',
        type: 'auspicious',
        descZh: '科甲文星照临，文思敏捷，极利申博考学、学术著述与专业技艺突破。',
        descEn: 'Scholastic & Wisdom Star: fuels rapid cognitive synthesis, academic publications, and certifications.'
      });
    }

    // 3. Hong Luan & Tian Xi (红鸾天喜)
    const BRANCHES_ORDER = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
    const yIdx = BRANCHES_ORDER.indexOf(yearBranch);
    const hongLuanBranch = yIdx !== -1 ? BRANCHES_ORDER[(3 - yIdx + 12) % 12] : '卯';
    const tianXiBranch = yIdx !== -1 ? BRANCHES_ORDER[((3 - yIdx + 12) % 12 + 6) % 12] : '酉';
    if (targetBranch === hongLuanBranch) {
      stars.push({
        id: 'hongluan',
        nameZh: '红鸾正缘',
        nameEn: 'Hong Luan True Romance',
        icon: '🌸',
        type: 'auspicious',
        descZh: '婚恋正缘第一吉神，主异性缘佳、正缘相契、喜结良缘与名分确立。',
        descEn: 'Destined Romance Star: sparks deep soulmate synergy, relationship commitments, and wedding fortune.'
      });
    }
    if (targetBranch === tianXiBranch) {
      stars.push({
        id: 'tianxi',
        nameZh: '天喜吉曜',
        nameEn: 'Tian Xi Joyful Star',
        icon: '🎉',
        type: 'auspicious',
        descZh: '和睦喜庆吉星，拱照红鸾，主家宅喜庆、化解纷争与添喜祥和。',
        descEn: 'Joyful Blessing Star: softens tensions, fosters household harmony, and multiplies celebrations.'
      });
    }

    // 4. Yi Ma Post Horse (驿马星动)
    const yimaMap = {
      '申': '寅', '子': '寅', '辰': '寅',
      '寅': '申', '午': '申', '戌': '申',
      '巳': '亥', '酉': '亥', '丑': '亥',
      '亥': '巳', '卯': '巳', '未': '巳'
    };
    const allYiMa = Array.from(new Set([yimaMap[yearBranch], yimaMap[dayBranch]].filter(Boolean)));
    if (allYiMa.includes(targetBranch)) {
      stars.push({
        id: 'yima',
        nameZh: '驿马星动',
        nameEn: 'Yi Ma Post Horse',
        icon: '🐎',
        type: 'dynamic',
        descZh: '时空跃迁动能爆发，主动能强盛、异地开拓、出洋跨界与职级迁升。',
        descEn: 'Spatial Mobility Vector: triggers geographic relocation, international travel, and cross-domain leaps.'
      });
    }

    // 5. Jiang Xing (将星)
    const jiangXingMap = {
      '申': '子', '子': '子', '辰': '子',
      '寅': '午', '午': '午', '戌': '午',
      '巳': '酉', '酉': '酉', '丑': '酉',
      '亥': '卯', '卯': '卯', '未': '卯'
    };
    if (jiangXingMap[yearBranch] === targetBranch || jiangXingMap[dayBranch] === targetBranch) {
      stars.push({
        id: 'jiangxing',
        nameZh: '将星掌权',
        nameEn: 'Jiang Xing Commander',
        icon: '⭐',
        type: 'authority',
        descZh: '统帅威权之星，主大局掌控、领导威望、决断果敢与管理实权。',
        descEn: 'Executive Authority Star: confers organizational stewardship, strategic dominance, and command power.'
      });
    }

    // 6. Yang Ren (羊刃)
    const yangRenMap = {
      '甲': '卯', '乙': '寅', '丙': '午', '丁': '巳', '戊': '午',
      '己': '巳', '庚': '酉', '辛': '申', '壬': '子', '癸': '亥'
    };
    if (yangRenMap[dayStem] === targetBranch) {
      stars.push({
        id: 'yangren',
        nameZh: '阳刃出鞘',
        nameEn: 'Yang Ren Steel Blade',
        icon: '🗡️',
        type: 'courage',
        descZh: '刚烈果敢兵刃之星，意志如铁，攻坚拔寨极勇，须驭煞自律防刚愎自用。',
        descEn: 'Steel Blade Star: brings unyielding resolve and fierce breakthrough stamina; requires principled mastery.'
      });
    }

    // 7. Hua Gai (华盖)
    const huaGaiMap = {
      '申': '辰', '子': '辰', '辰': '辰',
      '寅': '戌', '午': '戌', '戌': '戌',
      '巳': '丑', '酉': '丑', '丑': '丑',
      '亥': '未', '卯': '未', '未': '未'
    };
    if (huaGaiMap[yearBranch] === targetBranch || huaGaiMap[dayBranch] === targetBranch) {
      stars.push({
        id: 'huagai',
        nameZh: '华盖灵性',
        nameEn: 'Hua Gai Spiritual Canopy',
        icon: '📜',
        type: 'insight',
        descZh: '艺术哲学与特立独行之星，灵性超凡，宜深度钻研、形而上沉思与艺术创作。',
        descEn: 'Spiritual Canopy Star: inspires exceptional philosophical introspection, esoteric insight, and creative depth.'
      });
    }

    // 8. Xun Kong / Kong Wang (空亡)
    const voidBranches = this.calculateKongWang(dayStem, dayBranch);
    if (voidBranches.includes(targetBranch)) {
      stars.push({
        id: 'kongwang',
        nameZh: '旬空潜沉',
        nameEn: 'Kong Wang Void Cycle',
        icon: '🌀',
        type: 'caution',
        descZh: '岁运逢旬空，浮华退去，宜潜心务虚修心、沉稳积蓄，不宜急于求全。',
        descEn: 'Void Branch Cycle: recommends low-profile contemplation, strategic patience, and inner growth over frantic pursuit.'
      });
    }

    return stars;
  }

  /**
   * Dimension 2: Extract Natal Self & Architecture
   */
  static extractNatalSelf(bazi, isEn = false) {
    const dm = bazi.dayMaster || (bazi.pillars && bazi.pillars.day && bazi.pillars.day.stem) || '甲';
    const profile = this.getStemProfile(dm, isEn);

    // Vigor status & score
    let vigorStatusZh = '身旺';
    let vigorStatusEn = 'Vigorous';
    let vigorScore = 62;

    if (bazi.vigor) {
      vigorStatusZh = bazi.vigor.status || '身旺';
      vigorStatusEn = bazi.vigor.statusEn || (bazi.vigor.status === '身旺' ? 'Vigorous' : 'Delicate');
      vigorScore = bazi.vigor.score || bazi.vigorScore || 62;
    } else if (typeof bazi.isStrong === 'boolean') {
      vigorStatusZh = bazi.isStrong ? '身旺' : '身弱';
      vigorStatusEn = bazi.isStrong ? 'Vigorous' : 'Delicate';
      vigorScore = bazi.isStrong ? 68 : 42;
    }

    // Top 3 Dominant Patterns
    let top3 = [];
    if (typeof ScenarioSimulatorEngine !== 'undefined' && typeof ScenarioSimulatorEngine.getTop3Patterns === 'function') {
      top3 = ScenarioSimulatorEngine.getTop3Patterns(bazi, isEn);
    } else if (Array.isArray(bazi.top3Patterns) && bazi.top3Patterns.length >= 3) {
      top3 = bazi.top3Patterns;
    } else {
      top3 = [
        { rank: 1, nameZh: '七杀格 (偏官统帅 · 战将突围)', nameEn: 'Seven Killings Pattern (Vanguard Commander)', weightPct: 38 },
        { rank: 2, nameZh: '食神格 (技艺深研 · 秀气吐秀)', nameEn: 'Eating God Pattern (Deep Craft & Creative Output)', weightPct: 28 },
        { rank: 3, nameZh: '偏财格 (商业变现 · 跨界操盘)', nameEn: 'Indirect Wealth Pattern (Commercial Dealmaker)', weightPct: 18 }
      ];
    }

    // Clean any CJK in nameEn if in English mode
    top3 = top3.map(p => {
      let enName = p.nameEn || 'Dominant Pattern';
      if (/[\u4e00-\u9fa5]/.test(enName)) {
        enName = enName.replace(/[\u4e00-\u9fa5（）·]/g, '').trim() || 'Dominant Pattern';
      }
      return {
        rank: p.rank,
        nameZh: p.nameZh || '主导格局',
        nameEn: enName,
        weightPct: p.weightPct || 30
      };
    });

    // Climate & Favorable Xi-Yong elements
    let xiYongZh = '木、火';
    let xiYongEn = 'Wood, Fire';
    if (bazi.favorable && Array.isArray(bazi.favorable) && bazi.favorable.length > 0) {
      xiYongZh = bazi.favorable.join('、');
      xiYongEn = bazi.favorable.map(el => {
        const m = { '木': 'Wood', '火': 'Fire', '土': 'Earth', '金': 'Metal', '水': 'Water' };
        return m[el] || el;
      }).join(', ');
    } else if (bazi.climate && bazi.climate.favorable) {
      xiYongZh = Array.isArray(bazi.climate.favorable) ? bazi.climate.favorable.join('、') : String(bazi.climate.favorable);
      xiYongEn = xiYongZh.replace(/木/g, 'Wood').replace(/火/g, 'Fire').replace(/土/g, 'Earth').replace(/金/g, 'Metal').replace(/水/g, 'Water').replace(/、/g, ', ');
    }

    return {
      dayMaster: dm,
      stemProfile: profile,
      vigorStatusZh,
      vigorStatusEn,
      vigorScore,
      top3Patterns: top3,
      xiYongZh,
      xiYongEn,
      summaryZh: `日元【${profile.nameZh}】，子平量化评定为【${vigorStatusZh}】（量化活力指数 ${vigorScore} 分）。命局核心依托三大主导格局（${top3.map(p => p.nameZh).join(' · ')}）为立身攻坚护城河，调候喜用首重【${xiYongZh}】。`,
      summaryEn: `Day Master [${profile.nameEn}], ZiPing vigor classified as [${vigorStatusEn}] (${vigorScore}/100 vigor rating). The natal architecture is anchored by Top 3 Dominant Patterns (${top3.map(p => p.nameEn).join(' · ')}) with favorable elements centered on [${xiYongEn}].`
    };
  }

  /**
   * Main Synthesizer: Computes 4-Dimensional Lifelong Panorama (Age 1~100)
   */
  static synthesizeLifelong(bazi, luck, isEn = false) {
    if (!bazi) return null;

    const timeline = (luck && luck.timeline) ? luck.timeline : [];
    const hexTrajectory = (luck && luck.hexTrajectory) ? luck.hexTrajectory : (
      (typeof IChingEngine !== 'undefined' && typeof IChingEngine.calculateLifelongCycle === 'function')
        ? IChingEngine.calculateLifelongCycle(bazi)
        : []
    );

    const natalSelf = this.extractNatalSelf(bazi, isEn);

    // 1. Chrono metrics & golden prime window
    let totalEnergy = 0;
    let totalWealth = 0;
    let gpEnergy = 0;
    let gpWealth = 0;
    let gpCount = 0;
    let peakScore = -1;
    let peakAge = 35;
    let troughScore = 999;
    let troughAge = 18;
    const transitNodes = [];

    timeline.forEach(item => {
      const a = item.age;
      const e = item.energyScore || 60;
      const w = item.wealthScore || 60;
      totalEnergy += e;
      totalWealth += w;

      if (a >= 28 && a <= 55) {
        gpEnergy += e;
        gpWealth += w;
        gpCount++;
      }

      const comp = e * 0.5 + w * 0.5;
      if (comp > peakScore) {
        peakScore = comp;
        peakAge = a;
      }
      if (comp < troughScore) {
        troughScore = comp;
        troughAge = a;
      }

      // Decade start or extreme alerts
      if (item.decadeSpanZh && item.decadeSpanZh.includes(`${a}岁`) || (item.alerts && item.alerts.some(al => al.includes('岁运并临') || al.includes('天克地冲') || al.includes('换运')))) {
        transitNodes.push(a);
      }
    });

    const count = timeline.length || 1;
    const chronoMetrics = {
      avgEnergy: Math.round(totalEnergy / count),
      avgWealth: Math.round(totalWealth / count),
      goldenPrimeAvgEnergy: gpCount > 0 ? Math.round(gpEnergy / gpCount) : 75,
      goldenPrimeAvgWealth: gpCount > 0 ? Math.round(gpWealth / gpCount) : 78,
      peakAge,
      troughAge,
      transitNodes: Array.from(new Set(transitNodes)).sort((a, b) => a - b)
    };

    // 2. Hexagram trajectory root metrics
    const xianTianHex = (hexTrajectory[0] && hexTrajectory[0].governingHex) ? hexTrajectory[0].governingHex : null;
    const houTianItem = hexTrajectory.find(p => !p.isXianTian) || hexTrajectory[hexTrajectory.length - 1];
    const houTianHex = (houTianItem && houTianItem.governingHex) ? houTianItem.governingHex : null;
    const xianTianYears = hexTrajectory.filter(p => p.isXianTian).length || 30;

    const hexMetrics = {
      xianTianHex,
      houTianHex,
      xianTianYears,
      transitionAge: xianTianYears + 1
    };

    // 3. Five Grand Macro Phases (1~100)
    const fivePhases = this.generateFivePhases(bazi, timeline, hexTrajectory, natalSelf, isEn);

    // 4. Current spotlight (active year evaluation)
    const currentYear = new Date().getFullYear();
    const birthYear = (bazi.input && bazi.input.year) || bazi.birthYear || bazi.year || 1990;
    const defaultActiveAge = Math.max(1, Math.min(100, currentYear - birthYear + 1));
    const currentSpotlight = this.evaluateYearSpotlight(defaultActiveAge, bazi, luck, isEn);

    return {
      bazi,
      natalSelf,
      chronoMetrics,
      hexMetrics,
      fivePhases,
      currentSpotlight
    };
  }

  /**
   * Generate Five Grand Life Phases (1~100岁)
   */
  static generateFivePhases(bazi, timeline, hexTrajectory, natalSelf, isEn = false) {
    const birthYear = (bazi.input && bazi.input.year) || bazi.birthYear || bazi.year || 1990;

    const phaseConfigs = [
      {
        id: 'phase_1',
        ageStart: 1,
        ageEnd: 18,
        nameZh: '少年启蒙立基期',
        nameEn: 'Youth Foundation & Inception',
        archetypeBadgeZh: '潜龙勿用 · 积蓄学养',
        archetypeBadgeEn: 'Hidden Dragon · Foundational Learning',
        icon: '🌱',
        focusZh: '学识启蒙 · 品德奠基 · 印星滋养',
        focusEn: 'Scholastic Inception · Character Building · Resource Nourishment',
        mandateZh: '深扎根骨，博观约取。此阶段受原局年柱父母祖业庇护，切忌急于显山露水，专注吸收古典学问、培养抗挫心智，立下终身立身之志。',
        mandateEn: 'Nurture foundational intellect and moral character. Sheltered by early lineage roots, focus on rigorous study, academic excellence, and cognitive resilience rather than premature public ambition.'
      },
      {
        id: 'phase_2',
        ageStart: 19,
        ageEnd: 35,
        nameZh: '青年展翼破局期',
        nameEn: 'Emergence & Boundary Breakthrough',
        archetypeBadgeZh: '见龙在田 · 披荆破局',
        archetypeBadgeEn: 'Emergent Dragon · Boundary Breakthrough',
        icon: '⚔️',
        focusZh: '学业求真 · 事业首秀 · 婚恋正缘',
        focusEn: 'Professional Edge · Career Debut · Destined Matrimony',
        mandateZh: '以专业绝技为利刃，勇于试错突围。此阶段大运换甲入官杀食伤开拓之乡，红鸾正缘契合，当建立不可替代的一技之长，打破阶层与内卷屏障。',
        mandateEn: 'Sharpen a decisive professional craft and boldly confront marketplace challenges. As transit cycles activate career officers and romantic affinity, establish indispensable competence.'
      },
      {
        id: 'phase_3',
        ageStart: 36,
        ageEnd: 55,
        nameZh: '壮年建功鼎盛期',
        nameEn: 'Golden Prime Apex & Epoch Legacy',
        archetypeBadgeZh: '飞龙在天 · 统摄大局',
        archetypeBadgeEn: 'Soaring Dragon · Sovereign Mastery',
        icon: '🏆',
        focusZh: '黄金巅峰 · 操盘统领 · 财富巨浪',
        focusEn: 'Golden Prime Apex · Executive Authority · Wealth Surge',
        mandateZh: '三大主导格局彻底兑现，聚合高维战略资源。此阶段处百岁运势时空罗盘最高光区间，宜整合人脉、执掌要职、打造护城河与传世基业。',
        mandateEn: 'Realize the maximum potential of your natal pattern triad. Anchoring the highest vitality and wealth tide of the century, mobilize institutional resources to forge an enduring legacy.'
      },
      {
        id: 'phase_4',
        ageStart: 56,
        ageEnd: 70,
        nameZh: '知命守成弘道期',
        nameEn: 'Wise Stewardship & Consolidation',
        archetypeBadgeZh: '亢龙有悔 · 守成弘道',
        archetypeBadgeEn: 'Mindful Dragon · Wise Stewardship',
        icon: '🏛️',
        focusZh: '守成固本 · 提携后进 · 智识传承',
        focusEn: 'Asset Protection · Mentoring Successors · Wisdom Legacy',
        mandateZh: '由攻转守，明哲保身。此阶段功成名遂，重在守护核心资产与身心健康，化一生实操阅历为宗师智慧，成为后辈之指路明灯。',
        mandateEn: 'Transition from aggressive conquest to unassailable stewardship. Consolidate wealth, nurture physical vitality, and translate decades of strategic triumphs into wisdom for the next generation.'
      },
      {
        id: 'phase_5',
        ageStart: 71,
        ageEnd: 100,
        nameZh: '归真颐养安泰期',
        nameEn: 'Serene Harmony & Culmination',
        archetypeBadgeZh: '群龙无首 · 返璞归真',
        archetypeBadgeEn: 'Transcendent Dragon · Serene Harmony',
        icon: '🕊️',
        focusZh: '道法自然 · 身心怡然 · 福寿安泰',
        focusEn: 'Spiritual Serenity · Natural Rhythm · Centennial Peace',
        mandateZh: '乾坤合德，神游物外。此时百岁易数六十四卦圆融无碍，宜颐养天年、含饴弄孙、寄情山水哲学，享大圆满之天命福报。',
        mandateEn: 'Rest in pure equilibrium with the cosmos. Free from worldly friction, embrace serene harmony with nature, philosophical contemplation, and the sublime fulfillment of a life fully realized.'
      }
    ];

    return phaseConfigs.map(cfg => {
      const yearStart = birthYear + cfg.ageStart - 1;
      const yearEnd = birthYear + cfg.ageEnd - 1;

      // Slice timeline
      const tSlice = timeline.filter(item => item.age >= cfg.ageStart && item.age <= cfg.ageEnd);
      const hSlice = hexTrajectory.filter(item => item.age >= cfg.ageStart && item.age <= cfg.ageEnd);

      let sumE = 0, sumW = 0, bestAgeInPhase = cfg.ageStart, maxComp = -1;
      tSlice.forEach(it => {
        const e = it.energyScore || 60;
        const w = it.wealthScore || 60;
        sumE += e;
        sumW += w;
        if (e + w > maxComp) {
          maxComp = e + w;
          bestAgeInPhase = it.age;
        }
      });

      const avgEnergy = tSlice.length ? Math.round(sumE / tSlice.length) : 65;
      const avgWealth = tSlice.length ? Math.round(sumW / tSlice.length) : 65;

      // Dominant hexagram in this phase
      const sampleHexItem = hSlice[Math.floor(hSlice.length / 2)] || hSlice[0];
      const domHex = sampleHexItem ? sampleHexItem.annualHex : null;
      const domHexNameZh = domHex ? domHex.name : '周易大象';
      let domHexNameEn = domHex ? (domHex.nameEn || domHex.pinyin || 'I Ching Hexagram') : 'Cosmic Hexagram';
      if (/[\u4e00-\u9fa5]/.test(domHexNameEn)) {
        domHexNameEn = domHexNameEn.replace(/[\u4e00-\u9fa5（）·]/g, '').trim() || 'Cosmic Hexagram';
      }

      // Dominant Star & Ten God in this phase
      const sampleTimeline = tSlice[Math.floor(tSlice.length / 2)] || tSlice[0] || {};
      const godZh = sampleTimeline.tenGod || '十神正星';
      const godEn = sampleTimeline.tenGodEn || 'Ruling Ten God';

      return {
        id: cfg.id,
        nameZh: cfg.nameZh,
        nameEn: cfg.nameEn,
        ageStart: cfg.ageStart,
        ageEnd: cfg.ageEnd,
        yearStart,
        yearEnd,
        yearsSpanZh: `${cfg.ageStart}~${cfg.ageEnd}岁 (${yearStart}~${yearEnd}年)`,
        yearsSpanEn: `Age ${cfg.ageStart}-${cfg.ageEnd} (${yearStart}-${yearEnd})`,
        archetypeBadgeZh: cfg.archetypeBadgeZh,
        archetypeBadgeEn: cfg.archetypeBadgeEn,
        icon: cfg.icon,
        focusZh: cfg.focusZh,
        focusEn: cfg.focusEn,
        avgEnergy,
        avgWealth,
        bestAge: bestAgeInPhase,
        bestYear: birthYear + bestAgeInPhase - 1,
        dim1_chronoZh: `【时空能量】：此阶段平均生命能量 ${avgEnergy} 分，财富潮汐均值 ${avgWealth} 分。阶段巅峰高光年份在 ${birthYear + bestAgeInPhase - 1} 年 (${bestAgeInPhase} 岁)。`,
        dim1_chronoEn: `[Chrono Vector]: Average vitality index ${avgEnergy}/100, wealth tide ${avgWealth}/100. Key prime apex occurs at Age ${bestAgeInPhase} (${birthYear + bestAgeInPhase - 1}).`,
        dim2_natalZh: `【格局承载】：本命日元【${natalSelf.stemProfile.nameZh}】在此阶段与主导格局【${natalSelf.top3Patterns[0]?.nameZh}】深度共振，逐步从潜伏积蓄转向实战显化。`,
        dim2_natalEn: `[Natal Resonance]: Day Master [${natalSelf.stemProfile.nameEn}] harmonizes with the primary dominant pattern [${natalSelf.top3Patterns[0]?.nameEn}], transitioning from latent incubation to real-world impact.`,
        dim3_hexZh: `【易数气机】：主导卦气受【${domHexNameZh}】统摄，六爻次第升阶，阴阳消长符合易理时序律。`,
        dim3_hexEn: `[Hexagram Dynamic]: Governed by the cosmic resonance of [${domHexNameEn}], advancing through lines with deterministic harmonic alignment.`,
        dim4_starsZh: `【星曜十神】：以【${godZh}】为场能中枢，兼见核心贵人神煞环伺护持，主导社会资源与人际机遇。`,
        dim4_starsEn: `[Stars & Ten Gods]: Centered on [${godEn}] dynamic field transformations alongside auspicious astral protectors.`,
        strategicMandateZh: cfg.mandateZh,
        strategicMandateEn: cfg.mandateEn
      };
    });
  }

  /**
   * 4-Dimensional Instant Focus Lens (当值年份四维即时透镜)
   * Dynamically synced with Chrono Slider and Quick Year Jump buttons.
   */
  static evaluateYearSpotlight(age, bazi, luck, isEn = false) {
    const targetAge = Math.max(1, Math.min(100, parseInt(age, 10) || 1));
    const birthYear = (bazi.input && bazi.input.year) || bazi.birthYear || bazi.year || 1990;
    const year = birthYear + targetAge - 1;

    const timeline = (luck && luck.timeline) ? luck.timeline : [];
    const hexTrajectory = (luck && luck.hexTrajectory) ? luck.hexTrajectory : [];

    const timeItem = timeline.find(item => item.age === targetAge) || timeline[targetAge - 1] || {};
    const hexItem = hexTrajectory.find(item => item.age === targetAge) || hexTrajectory[targetAge - 1] || {};

    const natal = this.extractNatalSelf(bazi, isEn);

    // 1. Dimension 1: Chrono Compass
    const energyScore = timeItem.energyScore || 60;
    const wealthScore = timeItem.wealthScore || 60;
    const isGoldenPrime = (targetAge >= 28 && targetAge <= 55);
    const decadeTextZh = timeItem.decade ? `${timeItem.decade}大运 (${timeItem.decadeSpanZh || ''})` : '大运统摄';
    const decadeTextEn = timeItem.decadeSpanEn || (timeItem.decade ? `${timeItem.decade} Decade` : 'Major Decade');
    const naYinZh = timeItem.naYin || '海中金';
    const naYinEn = timeItem.naYinEn || 'Sound Element';

    // 2. Dimension 2: Natal Self Resonance
    const dmProfile = natal.stemProfile;
    const pat1 = natal.top3Patterns[0] || { nameZh: '主导格局', nameEn: 'Dominant Pattern' };

    // 3. Dimension 3: Hexagram Dynamic & Lines
    const annualHex = hexItem.annualHex || (hexItem.governingHex || { name: '乾为天', nameEn: 'The Creative', number: 1 });
    const hexNum = annualHex.number || 1;
    const hexNameZh = annualHex.name || '乾为天';
    let hexNameEn = annualHex.nameEn || annualHex.pinyin || 'Qian (The Creative)';
    if (/[\u4e00-\u9fa5]/.test(hexNameEn)) {
      hexNameEn = hexNameEn.replace(/[\u4e00-\u9fa5（）·]/g, '').trim() || 'Cosmic Hexagram';
    }
    const hexSymbol = annualHex.symbol || '☰☰';
    const activeLinePos = hexItem.activeLinePos || 1;
    const lineStmtZh = (annualHex.lines && annualHex.lines[activeLinePos - 1]) ? annualHex.lines[activeLinePos - 1].statementZh : '君子终日乾乾，夕惕若厉，无咎。';
    let lineStmtEn = (annualHex.lines && annualHex.lines[activeLinePos - 1]) ? annualHex.lines[activeLinePos - 1].statementEn : '';
    if (!lineStmtEn || /[\u4e00-\u9fa5\u3000-\u303f\uff01-\uff5e]/.test(lineStmtEn)) {
      lineStmtEn = (lineStmtEn || '').replace(/[\u4e00-\u9fa5\u3000-\u303f\uff01-\uff5e]/g, '').trim() || 'The superior person is active and vigilant throughout the cycle, meeting with no error.';
    }

    const upTrigram = annualHex.upperTrigram || '乾';
    const loTrigram = annualHex.lowerTrigram || '乾';
    const upQi = this.getTrigramQi(upTrigram, isEn);
    const loQi = this.getTrigramQi(loTrigram, isEn);

    // 4. Dimension 4: Stars & Ten Gods
    const annualStem = hexItem.annualStem || timeItem.annualStem || '丙';
    const annualBranch = hexItem.annualBranch || timeItem.annualBranch || '午';
    const stemEn = this.STEM_PINYIN[annualStem] || 'Jia';
    const branchEn = this.BRANCH_PINYIN[annualBranch] || 'Zi';

    const tenGodZh = this.getTenGod(natal.dayMaster, annualStem, false);
    const tenGodEn = this.getTenGod(natal.dayMaster, annualStem, true);
    const tenGodTransformZh = this.getTenGodTransformation(tenGodZh, false);
    const tenGodTransformEn = this.getTenGodTransformation(tenGodEn, true);

    const activeStars = this.getAuspiciousStarsForBranch(bazi, annualBranch, isEn);

    // Composite 4D verdict score & directive
    let compScore = Math.round(energyScore * 0.35 + wealthScore * 0.35 + (hexItem.score || 65) * 0.30);
    if (activeStars.some(s => s.id === 'tianyi' || s.id === 'wenchang')) compScore += 4;
    if (isGoldenPrime) compScore += 3;
    compScore = Math.max(25, Math.min(99, compScore));

    let tagZh = '宏图大展 · 顺水行舟';
    let tagEn = 'Epoch Surge · Auspicious Vector';
    let directiveZh = '岁运吉神高照，四维气机顺畅。坚定以第一主导格局为矛，借助贵人东风，大力推进核心事业与重大商业抉择。';
    let directiveEn = 'Astral deities converge with favorable energy. Deploy your primary pattern to seize decisive career and capital milestones.';

    if (compScore >= 85) {
      tagZh = '天赐良机 · 鼎盛腾挪';
      tagEn = 'Paramount Triumph · Prime Window';
      directiveZh = '百年罕见之高维合力之年。自身格局完全受生得令，六爻当位，贵人神煞照临，当乘势而上，建立不可动摇的功业里程碑。';
      directiveEn = 'Rare peak year of harmonic convergence. Natal pattern fully empowered; act with sovereign conviction to lock in generational achievements.';
    } else if (compScore < 60) {
      tagZh = '静守蓄德 · 韬光养晦';
      tagEn = 'Strategic Restraint · Inner Foundation';
      directiveZh = '时空能量进入修整期，岁运多磨砺。宜以艮止定力守好基本盘，避免盲目跨界加杠杆，深研内功静待春雷。';
      directiveEn = 'Chrono energy enters a consolidation cycle. Exercise disciplined boundary restraint, avoid speculative overexpansion, and refine your core craft.';
    }

    return {
      age: targetAge,
      nominalAge: (timeItem.nominalAge || targetAge),
      year,
      ganZhiZh: `${annualStem}${annualBranch}`,
      ganZhiEn: `${stemEn}-${branchEn}`,
      dim1_chrono: {
        energyScore,
        wealthScore,
        isGoldenPrime,
        decadeZh: decadeTextZh,
        decadeEn: decadeTextEn,
        naYinZh,
        naYinEn,
        summaryZh: `生命能量指数 ${energyScore}/100 · 财富潮汐 ${wealthScore}/100 · ${isGoldenPrime ? '【处于黄金壮年巅峰期 28~55岁】' : '【平稳运势周期】'}。`,
        summaryEn: `Vitality rating ${energyScore}/100 · Wealth tide ${wealthScore}/100 · ${isGoldenPrime ? '[Inside Golden Prime Window Age 28-55]' : '[Steady Lifecycle Transition]'}.`
      },
      dim2_natal: {
        dmNameZh: dmProfile.nameZh,
        dmNameEn: dmProfile.nameEn,
        vigorZh: natal.vigorStatusZh,
        vigorEn: natal.vigorStatusEn,
        vigorScore: natal.vigorScore,
        topPatternZh: pat1.nameZh,
        topPatternEn: pat1.nameEn,
        summaryZh: `日主【${dmProfile.nameZh}】得【${annualStem}】透干感应，第一主格【${pat1.nameZh}】受生发力，喜用调候顺畅度极佳。`,
        summaryEn: `Day Master [${dmProfile.nameEn}] resonates with transit stem [${stemEn}]; primary pattern [${pat1.nameEn}] actively engages favorable elemental tides.`
      },
      dim3_hexagram: {
        number: hexNum,
        nameZh: hexNameZh,
        nameEn: hexNameEn,
        symbol: hexSymbol,
        activeLinePos,
        lineStatementZh: lineStmtZh,
        lineStatementEn: lineStmtEn,
        upperTrigramZh: upTrigram,
        upperTrigramEn: upQi.quality,
        lowerTrigramZh: loTrigram,
        lowerTrigramEn: loQi.quality,
        qiSummaryZh: `上卦【${upQi.quality}】与下卦【${loQi.quality}】交互生化，值第【${activeLinePos}】爻。爻辞曰：“${lineStmtZh}”。`,
        qiSummaryEn: `Upper [${upQi.quality}] and Lower [${loQi.quality}] interact harmoniously at Line [${activeLinePos}]. Scripture: "${lineStmtEn}".`
      },
      dim4_stars: {
        annualStem,
        annualBranch,
        tenGodZh,
        tenGodEn,
        tenGodTransformZh,
        tenGodTransformEn,
        activeStars,
        summaryZh: `岁君【${tenGodZh}】司权：${tenGodTransformZh}${activeStars.length > 0 ? ' 当年吉神临照：' + activeStars.map(s => `${s.icon} ${s.nameZh}`).join('、') + '。' : ' 当年干支气机平和无凶煞克破。'}`,
        summaryEn: `Transit Ruler [${tenGodEn}]: ${tenGodTransformEn}${activeStars.length > 0 ? ' Active Deities: ' + activeStars.map(s => `${s.icon} ${s.nameEn}`).join(', ') + '.' : ' Calm astral balance with no severe afflictions.'}`
      },
      verdict: {
        score: compScore,
        tagZh,
        tagEn,
        directiveZh,
        directiveEn
      }
    };
  }

  /**
   * DOM Renderer: Renders both Spotlight Card and Five Phases Panorama
   */
  static renderLifelongSynthesis(bazi, luck, isEn = false) {
    const container = document.getElementById('lifelongSynthesisSection');
    if (!container) return;

    const synth = this.synthesizeLifelong(bazi, luck, isEn);
    if (!synth) return;

    // Update active age badge
    const badge = document.getElementById('lifelongActiveAgeBadge');
    if (badge) {
      const activeAge = (typeof activeChronoAge !== 'undefined') ? activeChronoAge : synth.currentSpotlight.age;
      badge.textContent = isEn ? `Age ${activeAge}` : `${activeAge} 岁`;
    }

    // 1. Render Spotlight Card
    this.updateSpotlight(synth.currentSpotlight.age, bazi, isEn);

    // 2. Render Five Phases Panorama
    const phasesEl = document.getElementById('lifelongPhasesContainer');
    if (phasesEl) {
      phasesEl.innerHTML = synth.fivePhases.map((phase) => {
        const isCurrentPhase = (synth.currentSpotlight.age >= phase.ageStart && synth.currentSpotlight.age <= phase.ageEnd);
        const borderCls = isCurrentPhase
          ? 'border-2 border-amber-400/80 bg-amber-950/20 ring-2 ring-amber-400/30'
          : 'border border-gray-800/80 bg-black/30 hover:border-gray-700';

        const name = isEn ? phase.nameEn : phase.nameZh;
        const bText = isEn ? phase.archetypeBadgeEn : phase.archetypeBadgeZh;
        const span = isEn ? phase.yearsSpanEn : phase.yearsSpanZh;
        const d1 = isEn ? phase.dim1_chronoEn : phase.dim1_chronoZh;
        const d2 = isEn ? phase.dim2_natalEn : phase.dim2_natalZh;
        const d3 = isEn ? phase.dim3_hexEn : phase.dim3_hexZh;
        const d4 = isEn ? phase.dim4_starsEn : phase.dim4_starsZh;
        const mandate = isEn ? phase.strategicMandateEn : phase.strategicMandateZh;

        return `
          <div class="lifelong-phase-card p-4 rounded-xl ${borderCls} flex flex-col justify-between space-y-3 cursor-pointer transition transform hover:-translate-y-0.5" data-phase-age="${phase.bestAge}">
            <div class="space-y-2">
              <div class="flex items-center justify-between border-b border-gray-800 pb-2">
                <span class="text-xs font-bold text-amber-300 font-serif-sc flex items-center gap-1">
                  <span>${phase.icon}</span>
                  <span>${name}</span>
                </span>
                <span class="text-[10px] px-1.5 py-0.2 rounded font-mono ${isCurrentPhase ? 'bg-amber-500 text-black font-bold' : 'bg-gray-800 text-gray-300'}">
                  ${span}
                </span>
              </div>

              <div class="text-[11px] font-bold text-amber-200/90 font-serif-sc">
                ${bText}
              </div>

              <div class="space-y-1.5 text-[11px] text-gray-400 leading-snug">
                <p class="text-gray-300">${d1}</p>
                <p>${d2}</p>
                <p>${d3}</p>
                <p>${d4}</p>
              </div>
            </div>

            <div class="pt-2 border-t border-gray-800/60 space-y-1.5">
              <div class="text-[10px] text-amber-400 font-bold font-serif-sc flex items-center gap-1">
                <span>🎯</span>
                <span>${isEn ? 'Strategic Mandate:' : '阶段天规锦囊：'}</span>
              </div>
              <p class="text-[10px] text-gray-300 font-serif-sc leading-relaxed bg-black/40 p-2 rounded border border-gray-800/50">
                ${mandate}
              </p>
              <button type="button" class="w-full py-1 rounded bg-amber-600/20 hover:bg-amber-600/40 text-amber-300 text-[10px] font-bold border border-amber-500/30 transition text-center cursor-pointer" data-phase-jump="${phase.bestAge}">
                ${isEn ? `Jump to Peak Age ${phase.bestAge} (${phase.bestYear})` : `跳转至该阶段高光 ${phase.bestAge} 岁 (${phase.bestYear}年)`}
              </button>
            </div>
          </div>
        `;
      }).join('');

      // Add click jump listener to phase cards & buttons
      phasesEl.querySelectorAll('[data-phase-jump], [data-phase-age]').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const target = btn.getAttribute('data-phase-jump') || btn.getAttribute('data-phase-age');
          const a = parseInt(target, 10);
          if (a && typeof jumpToAge === 'function') {
            jumpToAge(a);
          }
        });
      });
    }
  }

  /**
   * Update Spotlight Card for active age
   */
  static updateSpotlight(age, bazi, isEn = false) {
    const cardEl = document.getElementById('lifelongSpotlightCard');
    if (!cardEl || !bazi) return;

    const luck = (typeof currentLuckResult !== 'undefined') ? currentLuckResult : (bazi.luck || {});
    const spot = this.evaluateYearSpotlight(age, bazi, luck, isEn);
    if (!spot) return;

    const ageTag = document.getElementById('lifelongSpotlightAgeTag');
    if (ageTag) {
      ageTag.textContent = isEn
        ? `Age ${spot.age} (${spot.year} ${spot.ganZhiEn})`
        : `${spot.age} 岁 (${spot.year} ${spot.ganZhiZh}年)`;
    }

    const badge = document.getElementById('lifelongActiveAgeBadge');
    if (badge) {
      badge.textContent = isEn ? `Age ${spot.age}` : `${spot.age} 岁`;
    }

    const d1 = spot.dim1_chrono;
    const d2 = spot.dim2_natal;
    const d3 = spot.dim3_hexagram;
    const d4 = spot.dim4_stars;
    const v = spot.verdict;

    const starsBadges = d4.activeStars.map(s => {
      return `<span class="px-2 py-0.5 rounded text-[10px] bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold">${s.icon} ${isEn ? s.nameEn : s.nameZh}</span>`;
    }).join(' ');

    cardEl.innerHTML = `
      <div class="space-y-4">
        <!-- 4-Column Grid for the 4 Dimensions -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs">
          <!-- Col 1: Chrono Vector -->
          <div class="p-3 rounded-xl bg-gradient-to-b from-[#1c1f2e] to-[#12141e] border border-amber-500/30 space-y-2">
            <div class="flex items-center justify-between border-b border-gray-700/60 pb-1.5">
              <span class="font-bold text-amber-300 font-serif-sc flex items-center gap-1.5">
                <span>⏳</span>
                <span>${isEn ? '1. Chrono Compass' : '1. 时空罗盘'}</span>
              </span>
              <span class="font-mono text-[10px] text-amber-200/80">${isEn ? d1.decadeEn : d1.decadeZh}</span>
            </div>
            <div class="space-y-1 text-gray-300 leading-snug">
              <div class="flex justify-between items-center text-[11px]">
                <span class="text-gray-400">${isEn ? 'Vitality Index:' : '活力指数:'}</span>
                <span class="font-bold text-amber-300 font-mono">${d1.energyScore}/100</span>
              </div>
              <div class="flex justify-between items-center text-[11px]">
                <span class="text-gray-400">${isEn ? 'Wealth Tide:' : '财富潮汐:'}</span>
                <span class="font-bold text-emerald-300 font-mono">${d1.wealthScore}/100</span>
              </div>
              <p class="text-[10px] text-gray-400 pt-1 border-t border-gray-800">
                ${isEn ? d1.summaryEn : d1.summaryZh}
              </p>
            </div>
          </div>

          <!-- Col 2: Natal Self Resonance -->
          <div class="p-3 rounded-xl bg-gradient-to-b from-[#182033] to-[#101420] border border-blue-500/30 space-y-2">
            <div class="flex items-center justify-between border-b border-gray-700/60 pb-1.5">
              <span class="font-bold text-blue-300 font-serif-sc flex items-center gap-1.5">
                <span>👤</span>
                <span>${isEn ? '2. Natal Architecture' : '2. 自身格局元神'}</span>
              </span>
              <span class="font-mono text-[10px] text-blue-200/80">${isEn ? d2.vigorEn : d2.vigorZh} (${d2.vigorScore})</span>
            </div>
            <div class="space-y-1 text-gray-300 leading-snug">
              <div class="text-[11px] text-gray-400">
                ${isEn ? 'Day Master:' : '日元元神:'} <span class="text-blue-200 font-bold">${isEn ? d2.dmNameEn : d2.dmNameZh}</span>
              </div>
              <div class="text-[11px] text-gray-400">
                ${isEn ? 'Primary Pattern:' : '首座真格:'} <span class="text-amber-300 font-bold">${isEn ? d2.topPatternEn : d2.topPatternZh}</span>
              </div>
              <p class="text-[10px] text-gray-400 pt-1 border-t border-gray-800">
                ${isEn ? d2.summaryEn : d2.summaryZh}
              </p>
            </div>
          </div>

          <!-- Col 3: Hexagram Dynamic & Lines -->
          <div class="p-3 rounded-xl bg-gradient-to-b from-[#142823] to-[#0d1714] border border-emerald-500/30 space-y-2">
            <div class="flex items-center justify-between border-b border-gray-700/60 pb-1.5">
              <span class="font-bold text-emerald-300 font-serif-sc flex items-center gap-1.5">
                <span>☯️</span>
                <span>${isEn ? '3. 64 Hexagram Dynamic' : '3. 周易六十四卦'}</span>
              </span>
              <span class="font-mono text-[11px] text-emerald-200 font-bold">${d3.symbol} #${d3.number}</span>
            </div>
            <div class="space-y-1 text-gray-300 leading-snug">
              <div class="text-[11px] text-emerald-200 font-bold font-serif-sc">
                ${isEn ? d3.nameEn : d3.nameZh} · ${isEn ? `Line ${d3.activeLinePos}` : `值第${d3.activeLinePos}爻`}
              </div>
              <p class="text-[10px] italic text-gray-300 line-clamp-2">
                “${isEn ? d3.lineStatementEn : d3.lineStatementZh}”
              </p>
              <p class="text-[10px] text-gray-400 pt-1 border-t border-gray-800">
                ${isEn ? d3.qiSummaryEn : d3.qiSummaryZh}
              </p>
            </div>
          </div>

          <!-- Col 4: Stars & Ten Gods Dynamics -->
          <div class="p-3 rounded-xl bg-gradient-to-b from-[#241a33] to-[#140e1f] border border-purple-500/30 space-y-2">
            <div class="flex items-center justify-between border-b border-gray-700/60 pb-1.5">
              <span class="font-bold text-purple-300 font-serif-sc flex items-center gap-1.5">
                <span>⭐</span>
                <span>${isEn ? '4. Stars & Ten Gods' : '4. 星曜十神神煞'}</span>
              </span>
              <span class="font-mono text-[10px] text-purple-200/80">${isEn ? d4.tenGodEn : d4.tenGodZh}</span>
            </div>
            <div class="space-y-1 text-gray-300 leading-snug">
              <div class="flex flex-wrap gap-1">
                ${starsBadges || `<span class="text-[10px] text-gray-400 font-mono">${isEn ? 'Calm Astral Flux' : '气机平和安泰'}</span>`}
              </div>
              <p class="text-[10px] text-gray-300 pt-1 border-t border-gray-800">
                ${isEn ? d4.summaryEn : d4.summaryZh}
              </p>
            </div>
          </div>
        </div>

        <!-- 4D Grand Holistic Verdict Banner -->
        <div class="p-3.5 rounded-xl bg-gradient-to-r from-amber-950/40 via-black/50 to-amber-950/40 border border-amber-500/50 flex flex-wrap md:flex-nowrap items-center justify-between gap-3 shadow-lg">
          <div class="space-y-1">
            <div class="flex items-center gap-2">
              <span class="text-sm font-bold text-amber-300 font-serif-sc flex items-center gap-1.5">
                <span>⚡</span>
                <span>${isEn ? 'Grand 4D Holistic Verdict:' : '四维融通宏观断辞：'}</span>
              </span>
              <span class="px-2 py-0.5 rounded text-[10px] bg-amber-500 text-black font-bold font-mono">
                ${isEn ? v.tagEn : v.tagZh}
              </span>
              <span class="text-xs text-amber-400 font-mono font-bold">
                (${v.score}/100)
              </span>
            </div>
            <p class="text-xs text-gray-200 font-serif-sc leading-relaxed">
              ${isEn ? v.directiveEn : v.directiveZh}
            </p>
          </div>
        </div>
      </div>
    `;
  }
}

// Global & Module Export
if (typeof window !== 'undefined') {
  window.LifelongSynthesisEngine = LifelongSynthesisEngine;
}
if (typeof globalThis !== 'undefined') {
  globalThis.LifelongSynthesisEngine = LifelongSynthesisEngine;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = LifelongSynthesisEngine;
}
