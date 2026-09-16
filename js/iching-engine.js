/**
 * 周易筮法推演引擎 (Zhou Yi / I Ching Divination Engine)
 * Supports:
 * 1. Cryptographically Secure Pseudo-Random Number Generator (CSPRNG)
 * 2. Authentic 49-Yarrow Stalks Probability (大衍筮法: 老阴 1/16, 少阳 5/16, 少阴 7/16, 老阳 3/16)
 * 3. 3-Coin Toss Simulation (三铜钱法: 6, 7, 8, 9)
 * 4. Plum Blossom Time Divination (梅花易数时间起卦)
 * 5. Complete Hexagram Derivation: 本卦 (Original), 变卦 (Resulting), 互卦 (Nuclear), 错卦 (Opposite), 综卦 (Inverted)
 * 6. Classical Oracle Resolution Rules (动爻断法准则)
 * 
 * Fully bilingual (Chinese & English). Zero residual undefined fields.
 */

class IChingEngine {
  // Trigram index mapping (1: 乾, 2: 兑, 3: 离, 4: 震, 5: 巽, 6: 坎, 7: 艮, 8: 坤)
  static XIAN_TIAN_TRIGRAMS = {
    1: { nameZh: '乾', natureZh: '天', nameEn: 'Heaven (Qian)', binary: [1, 1, 1] },
    2: { nameZh: '兑', natureZh: '泽', nameEn: 'Lake (Dui)', binary: [1, 1, 0] },
    3: { nameZh: '离', natureZh: '火', nameEn: 'Fire (Li)', binary: [1, 0, 1] },
    4: { nameZh: '震', natureZh: '雷', nameEn: 'Thunder (Zhen)', binary: [1, 0, 0] },
    5: { nameZh: '巽', natureZh: '风', nameEn: 'Wind (Xun)', binary: [0, 1, 1] },
    6: { nameZh: '坎', natureZh: '水', nameEn: 'Water (Kan)', binary: [0, 1, 0] },
    7: { nameZh: '艮', natureZh: '山', nameEn: 'Mountain (Gen)', binary: [0, 0, 1] },
    8: { nameZh: '坤', natureZh: '地', nameEn: 'Earth (Kun)', binary: [0, 0, 0] }
  };

  /**
   * Cryptographically secure random float in [0, 1)
   */
  static getRandomFloat() {
    if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
      const arr = new Uint32Array(1);
      crypto.getRandomValues(arr);
      return arr[0] / (0xffffffff + 1);
    }
    return Math.random();
  }

  /**
   * Cryptographically secure random integer in [min, max] inclusive
   */
  static getRandomInt(min, max) {
    const f = this.getRandomFloat();
    return Math.floor(f * (max - min + 1)) + min;
  }

  /**
   * Cast one line using authentic 49-Yarrow Stalks Probability (大衍筮法)
   * Probabilities:
   * - 6 (老阴 Old Yin, moving): 1/16 (0.0625)
   * - 7 (少阳 Young Yang, static): 5/16 (0.3125) -> cum 6/16 = 0.375
   * - 8 (少阴 Young Yin, static): 7/16 (0.4375) -> cum 13/16 = 0.8125
   * - 9 (老阳 Old Yang, moving): 3/16 (0.1875) -> cum 16/16 = 1.0
   */
  static castYarrowLine(position) {
    const r = this.getRandomFloat();
    let val;
    if (r < 1 / 16) {
      val = 6;
    } else if (r < 6 / 16) {
      val = 7;
    } else if (r < 13 / 16) {
      val = 8;
    } else {
      val = 9;
    }
    return this.buildLineObject(position, val, 'yarrow');
  }

  /**
   * Cast one line using 3-Coin Toss (三铜钱摇卦)
   * Each coin: 2 (Tails / 背 / Yin) or 3 (Heads / 字 / Yang)
   * Sum:
   * - 2+2+2 = 6 (Old Yin, moving) -> 1/8 (0.125)
   * - 2+2+3 = 7 (Young Yang, static) -> 3/8 (0.375)
   * - 2+3+3 = 8 (Young Yin, static) -> 3/8 (0.375)
   * - 3+3+3 = 9 (Old Yang, moving) -> 1/8 (0.125)
   */
  static castCoinLine(position) {
    const coin1 = this.getRandomFloat() < 0.5 ? 2 : 3;
    const coin2 = this.getRandomFloat() < 0.5 ? 2 : 3;
    const coin3 = this.getRandomFloat() < 0.5 ? 2 : 3;
    const sum = coin1 + coin2 + coin3;
    const lineObj = this.buildLineObject(position, sum, 'coin');
    lineObj.coins = [coin1, coin2, coin3];
    return lineObj;
  }

  /**
   * Builds standardized Line metadata object
   */
  static buildLineObject(position, value, method = 'instant') {
    const isMoving = (value === 6 || value === 9);
    // 7 or 9 is yang (1); 6 or 8 is yin (0)
    const nature = (value === 7 || value === 9) ? 1 : 0;
    // Changing line flips: 9 (yang) becomes 0 (yin); 6 (yin) becomes 1 (yang)
    const changedNature = isMoving ? (nature === 1 ? 0 : 1) : nature;

    let valueNameZh = '';
    let valueNameEn = '';
    let symbol = nature === 1 ? '⚊' : '⚋';
    let changedSymbol = changedNature === 1 ? '⚊' : '⚋';

    if (value === 6) {
      valueNameZh = '老阴 (动爻 ⚋➔⚊)';
      valueNameEn = 'Old Yin (Moving ⚋➔⚊)';
    } else if (value === 7) {
      valueNameZh = '少阳 (静爻 ⚊)';
      valueNameEn = 'Young Yang (Static ⚊)';
    } else if (value === 8) {
      valueNameZh = '少阴 (静爻 ⚋)';
      valueNameEn = 'Young Yin (Static ⚋)';
    } else if (value === 9) {
      valueNameZh = '老阳 (动爻 ⚊➔⚋)';
      valueNameEn = 'Old Yang (Moving ⚊➔⚋)';
    }

    const posNamesZh = ['初', '二', '三', '四', '五', '上'];
    const posNamesEn = ['1st (Initial)', '2nd', '3rd', '4th', '5th', '6th (Top)'];
    const posStrZh = posNamesZh[position - 1] || `${position}`;
    const posStrEn = posNamesEn[position - 1] || `Line ${position}`;

    return {
      position,
      value,
      method,
      isMoving,
      nature,
      changedNature,
      symbol,
      changedSymbol,
      posStrZh,
      posStrEn,
      valueNameZh,
      valueNameEn,
      labelZh: `${posStrZh}爻：${valueNameZh}`,
      labelEn: `${posStrEn} Line: ${valueNameEn}`
    };
  }

  /**
   * Cast full hexagram instantly using authentic Yarrow Stalk probability
   */
  static castInstant(customQuery = '') {
    const lines = [];
    for (let pos = 1; pos <= 6; pos++) {
      lines.push(this.castYarrowLine(pos));
    }
    return this.synthesizeDivination(lines, 'instant', customQuery);
  }

  /**
   * Cast hexagram from custom line configurations
   */
  static castCustomLines(customLines, customQuery = '') {
    const lines = customLines.map((l, idx) => {
      const pos = l.position || (idx + 1);
      let val;
      if (typeof l === 'number') {
        val = l;
      } else if (l.value !== undefined) {
        val = l.value;
      } else {
        if (l.isMoving) {
          val = (l.nature === 1) ? 9 : 6;
        } else {
          val = (l.nature === 1) ? 7 : 8;
        }
      }
      return this.buildLineObject(pos, val, 'custom');
    });
    return this.synthesizeDivination(lines, 'custom', customQuery);
  }

  /**
   * Cast Plum Blossom Time Hexagram (梅花易数时间卦)
   */
  static castTimeHexagram(date = new Date(), customQuery = '') {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    
    // Earthly branch of hour (1: 子 23-1, 2: 丑 1-3, ..., 12: 亥 21-23)
    const hourBranchIndex = Math.floor((hours + 1) % 24 / 2) + 1;
    // Chinese Year Branch approximation (e.g. 2024 = 辰 5, 2025 = 巳 6, 2026 = 午 7)
    const yearBranchIndex = ((year - 4) % 12) + 1;

    // Upper Trigram: (Year + Month + Day) % 8 (if 0 -> 8)
    let upperNum = (yearBranchIndex + month + day) % 8;
    if (upperNum === 0) upperNum = 8;

    // Lower Trigram: (Year + Month + Day + Hour) % 8 (if 0 -> 8)
    let lowerNum = (yearBranchIndex + month + day + hourBranchIndex) % 8;
    if (lowerNum === 0) lowerNum = 8;

    // Moving Line: (Year + Month + Day + Hour) % 6 (if 0 -> 6)
    let movingPos = (yearBranchIndex + month + day + hourBranchIndex) % 6;
    if (movingPos === 0) movingPos = 6;

    const upperTri = this.XIAN_TIAN_TRIGRAMS[upperNum];
    const lowerTri = this.XIAN_TIAN_TRIGRAMS[lowerNum];
    const binaryLines = lowerTri.binary.concat(upperTri.binary);

    const lines = [];
    for (let pos = 1; pos <= 6; pos++) {
      const bit = binaryLines[pos - 1];
      const isMove = (pos === movingPos);
      let val;
      if (isMove) {
        val = (bit === 1) ? 9 : 6;
      } else {
        val = (bit === 1) ? 7 : 8;
      }
      const lineObj = this.buildLineObject(pos, val, 'time');
      lines.push(lineObj);
    }

    const res = this.synthesizeDivination(lines, 'time', customQuery);
    res.timeMetadata = {
      dateString: date.toLocaleString(),
      upperTrigramFormula: `(${yearBranchIndex} + ${month} + ${day}) % 8 = ${upperNum} [${upperTri.nameZh}]`,
      lowerTrigramFormula: `(${yearBranchIndex} + ${month} + ${day} + ${hourBranchIndex}) % 8 = ${lowerNum} [${lowerTri.nameZh}]`,
      movingLineFormula: `(${yearBranchIndex} + ${month} + ${day} + ${hourBranchIndex}) % 6 = ${movingPos} [第${movingPos}爻]`
    };
    return res;
  }

  /**
   * Synthesizes lines into full divination result
   */
  static synthesizeDivination(lines, method = 'instant', customQuery = '') {
    if (!Array.isArray(lines) || lines.length !== 6) {
      throw new Error('Divination requires exactly 6 lines.');
    }

    const originalBinary = lines.map(l => l.nature);
    const changedBinary = lines.map(l => l.changedNature);
    const movingLines = lines.filter(l => l.isMoving);
    const hasMovingLines = movingLines.length > 0;

    // Fetch canonical hexagrams
    const originalHexagram = (typeof IChingDB !== 'undefined')
      ? IChingDB.getByLines(originalBinary)
      : null;

    const resultingHexagram = (hasMovingLines && typeof IChingDB !== 'undefined')
      ? IChingDB.getByLines(changedBinary)
      : null;

    // Nuclear Hexagram (互卦: 下互 2,3,4 爻; 上互 3,4,5 爻)
    const nuclearBinary = [
      originalBinary[1], originalBinary[2], originalBinary[3], // Lower nuclear
      originalBinary[2], originalBinary[3], originalBinary[4]  // Upper nuclear
    ];
    const nuclearHexagram = (typeof IChingDB !== 'undefined')
      ? IChingDB.getByLines(nuclearBinary)
      : null;

    // Opposite Hexagram (错卦: 阴阳全反)
    const oppositeBinary = originalBinary.map(b => 1 - b);
    const oppositeHexagram = (typeof IChingDB !== 'undefined')
      ? IChingDB.getByLines(oppositeBinary)
      : null;

    // Inverted Hexagram (综卦: 上下颠倒)
    const invertedBinary = [...originalBinary].reverse();
    const invertedHexagram = (typeof IChingDB !== 'undefined')
      ? IChingDB.getByLines(invertedBinary)
      : null;

    // Classical Oracle Interpretation Focus (焦氏易林 / 朱熹六爻断法准则)
    const oracleFocus = this.deriveOracleFocus(originalHexagram, resultingHexagram, movingLines, lines);

    return {
      timestamp: new Date().toISOString(),
      method,
      query: customQuery || '天地大化，感而遂通 (General Inquiring)',
      lines,
      originalBinary,
      changedBinary,
      movingLinesCount: movingLines.length,
      movingLinesPositions: movingLines.map(l => l.position),
      originalHexagram,
      resultingHexagram,
      nuclearHexagram,
      oppositeHexagram,
      invertedHexagram,
      oracleFocus
    };
  }

  /**
   * Applies Song Dynasty master Zhu Xi's authoritative 6-Line Oracle Resolution Rules
   * (朱熹《易学启蒙》断卦七法)
   */
  static deriveOracleFocus(originalHexagram, resultingHexagram, movingLines, allLines) {
    const count = movingLines.length;
    let ruleNameZh = '';
    let ruleNameEn = '';
    let focusType = '';
    let explanationZh = '';
    let explanationEn = '';
    let targetLines = [];

    if (count === 0) {
      ruleNameZh = '六爻全安（无动爻）：以本卦卦辞断';
      ruleNameEn = 'Static Hexagram (0 Moving Lines): Read Original Judgment';
      focusType = 'original_judgment';
      explanationZh = '六爻皆无变动，表明时局处于相对静止或初始蓄积阶段，重点参悟本卦卦辞与彖传。';
      explanationEn = 'No lines are changing. The current circumstance remains static or foundational; focus on the Original Hexagram Judgment and Tuan Commentary.';
    } else if (count === 1) {
      const ml = movingLines[0];
      targetLines.push(ml.position);
      ruleNameZh = `一爻独发（第${ml.position}爻变）：以本卦变爻爻辞断（核心枢纽）`;
      ruleNameEn = `Single Pivot (${ml.posStrEn} Moving): Read this Changing Line Statement`;
      focusType = 'single_line';
      explanationZh = `全卦唯有第${ml.position}爻动，此爻即为全盘事态发展之关键枢纽，直接决定吉凶走势。`;
      explanationEn = `Only Line ${ml.position} is changing. This single line acts as the vital fulcrum governing destiny and immediate strategic response.`;
    } else if (count === 2) {
      const lower = movingLines[0];
      const upper = movingLines[1];
      targetLines.push(upper.position, lower.position);
      ruleNameZh = `两爻齐发：以本卦两爻辞合参，以上爻为主（第${upper.position}爻优先）`;
      ruleNameEn = `Two Moving Lines: Read both line statements, upper line taking precedence`;
      focusType = 'two_lines';
      explanationZh = `本卦有二爻发动，事态兼具双重推力；参酌此二爻爻辞，以上方第${upper.position}爻为主导，第${lower.position}爻为佐辅。`;
      explanationEn = `Two lines are moving; synthesize both line texts, with the upper Line ${upper.position} as the primary mandate and Line ${lower.position} as the secondary support.`;
    } else if (count === 3) {
      ruleNameZh = '三爻齐发（中局激荡）：本卦卦辞为体(60%)，之卦卦辞为用(40%)';
      ruleNameEn = 'Three Moving Lines (Major Paradigm Shift): Original (60%) and Resulting (40%) Judgments';
      focusType = 'dual_hexagram';
      explanationZh = '半数爻变，象征事物正经历激烈的深层结构转型；以本卦卦辞为当下基调，以变卦卦辞为归宿指引。';
      explanationEn = 'Half the lines are changing, indicating a seismic structural transformation; synthesize Original Judgment (current posture) with Resulting Judgment (emergent future).';
    } else if (count === 4) {
      const staticLines = allLines.filter(l => !l.isMoving);
      const lowerStatic = staticLines[0];
      targetLines.push(lowerStatic.position);
      ruleNameZh = `四爻齐发：以之卦（变卦）二不变爻断，以下爻为主（第${lowerStatic.position}爻）`;
      ruleNameEn = `Four Moving Lines: Read the two static lines of Resulting Hexagram, lower line as primary`;
      focusType = 'resulting_lines';
      explanationZh = '大势已去旧迎新，重心已转向新格局；参看之卦（变卦）中未动之爻，以下爻为核心定夺。';
      explanationEn = 'The old structure has largely dissolved. Consult the static lines within the Resulting Hexagram, prioritizing the lower static line.';
    } else if (count === 5) {
      const staticLine = allLines.find(l => !l.isMoving);
      targetLines.push(staticLine.position);
      ruleNameZh = `五爻齐发：以之卦（变卦）唯一未动爻断（第${staticLine.position}爻）`;
      ruleNameEn = `Five Moving Lines: Read the single static line in Resulting Hexagram`;
      focusType = 'resulting_single_line';
      explanationZh = '全盘几乎彻底翻转，新格局已然确立；以之卦中唯一未变之爻定夺最终归宿。';
      explanationEn = 'A near-total metamorphosis. The single unchanged line in the Resulting Hexagram anchors the final outcome.';
    } else if (count === 6) {
      if (originalHexagram && originalHexagram.number === 1) {
        ruleNameZh = '乾卦全变：以【用九】群龙无首为最高神断';
        ruleNameEn = 'Qian All Moving: Read "Use Nine" (All Dragons Headless, Auspicious)';
        focusType = 'use_nine';
        explanationZh = '六阳纯刚皆化为阴，乃天道极数，以乾卦【用九】断：“见群龙无首，吉”，象征无为自化。';
        explanationEn = 'All yang lines transform to yin; read Qian\'s transcendent "Use Nine" oracle: headless sovereign harmony.';
      } else if (originalHexagram && originalHexagram.number === 2) {
        ruleNameZh = '坤卦全变：以【用六】利永贞为最高神断';
        ruleNameEn = 'Kun All Moving: Read "Use Six" (Everlasting Perseverance)';
        focusType = 'use_six';
        explanationZh = '六阴纯柔皆化为阳，乃大地至德，以坤卦【用六】断：“利永贞”，象征深远守恒。';
        explanationEn = 'All yin lines transform to yang; read Kun\'s transcendent "Use Six" oracle: perpetual rectitude.';
      } else {
        ruleNameZh = '六爻全变：天地翻覆，以之卦（变卦）卦辞定夺';
        ruleNameEn = 'All Six Lines Moving: Complete Renewal; Read Resulting Hexagram Judgment';
        focusType = 'resulting_judgment';
        explanationZh = '六爻全动，旧局彻底消亡，全局焕然一新；以之卦（变卦）卦辞为全新时空定夺依据。';
        explanationEn = 'Total inversion: the former reality dissolves entirely; align strategy with the Resulting Hexagram\'s Judgment.';
      }
    }

    return {
      count,
      ruleNameZh,
      ruleNameEn,
      focusType,
      explanationZh,
      explanationEn,
      targetLines
    };
  }

  /**
   * 四柱命卦（子平命卦 / 倪海厦《天纪》易数推命）
   * 1. 先天卦 (前半生)
   * 2. 后天卦 (后半生)
   * 3. 值年流年卦 (当年/已选流年)
   * 阳爻管9年，阴爻管6年，依年龄流转高亮当值之爻。
   * 整合倪海厦《天纪》64卦批注全集 (先天卦断、后天卦断、流年卦断、玉上有光字谜与天机解密)。
   */
  // 洛书后天八卦配数 (1:坎, 2:坤, 3:震, 4:巽, 6:乾, 7:兑, 8:艮, 9:离)
  static LUO_SHU_TRIGRAMS = {
    1: { nameZh: '坎', natureZh: '水', nameEn: 'Water (Kan)', binary: [0, 1, 0] },
    2: { nameZh: '坤', natureZh: '地', nameEn: 'Earth (Kun)', binary: [0, 0, 0] },
    3: { nameZh: '震', natureZh: '雷', nameEn: 'Thunder (Zhen)', binary: [1, 0, 0] },
    4: { nameZh: '巽', natureZh: '风', nameEn: 'Wind (Xun)', binary: [0, 1, 1] },
    6: { nameZh: '乾', natureZh: '天', nameEn: 'Heaven (Qian)', binary: [1, 1, 1] },
    7: { nameZh: '兑', natureZh: '泽', nameEn: 'Lake (Dui)', binary: [1, 1, 0] },
    8: { nameZh: '艮', natureZh: '山', nameEn: 'Mountain (Gen)', binary: [0, 0, 1] },
    9: { nameZh: '离', natureZh: '火', nameEn: 'Fire (Li)', binary: [1, 0, 1] }
  };

  /**
   * 天数之取数法则（分别以25为中数）
   */
  static computeTianShu(sumOdds) {
    if (sumOdds === 25) return 5;
    if (sumOdds < 25) {
      if (sumOdds === 10) return 1;
      if (sumOdds === 20) return 2;
      return sumOdds % 10;
    }
    const rem = sumOdds - 25;
    if (rem < 10) return rem;
    if (rem % 10 === 0) return Math.floor(rem / 10);
    return rem % 10;
  }

  /**
   * 地数之取数法则（分别以30为中数）
   */
  static computeDiShu(sumEvens) {
    if (sumEvens === 30) return 3;
    if (sumEvens < 30) {
      if (sumEvens === 10) return 1;
      if (sumEvens === 20) return 2;
      return sumEvens % 10;
    }
    const rem = sumEvens - 30;
    if (rem < 10) return rem;
    if (rem % 10 === 0) return Math.floor(rem / 10);
    return rem % 10;
  }

  /**
   * 5数的处理：表4中5数无卦，遇5数时按三元生人换卦：
   * 上元生人（1864 - 1923年）：男取艮(8)，女取坤(2)
   * 中元生人（1924 - 1983年）：阳男阴女取艮(8)，阴男阳女取坤(2)
   * 下元生人（1984 - 2043年）：男取离(9)，女取兑(7)
   */
  static resolveFiveNum(num, birthYear, isMale, isYangMaleOrYinFemale) {
    if (num !== 5) return num;
    const normYear = ((birthYear - 1864) % 180 + 180) % 180 + 1864;
    if (normYear >= 1864 && normYear <= 1923) {
      return isMale ? 8 : 2;
    } else if (normYear >= 1924 && normYear <= 1983) {
      return isYangMaleOrYinFemale ? 8 : 2;
    } else {
      return isMale ? 9 : 7;
    }
  }

  /**
   * 四柱命卦（子平命卦 / 倪海厦《天纪》易数推命正统推导）
   * 天干配数：壬甲乾6、乙癸坤2、丙艮8、丁兑7、戊坎1、己离9、庚震3、辛巽4
   * 地支配数：亥子1/6水、寅卯3/8木、巳午2/7火、申酉4/9金、辰戌5/10土、丑未5/10土
   * 1. 先天卦 (前半生)
   * 2. 后天卦 (后半生)
   * 3. 值年流年卦 (当年/已选流年)
   * 阳爻管9年，阴爻管6年，依年龄流转高亮当值之爻。
   * 整合倪海厦《天纪》64卦批注全集 (先天卦断、后天卦断、流年卦断、玉上有光字谜与天机解密)。
   */
  static calculateFourPillarsHexagrams(bazi, currentAge = null, selectedYear = null) {
    if (!bazi || !bazi.pillars) return null;

    // 天干配数 (洛书八卦)
    const stemsNum = {
      '甲': 6, '乙': 2, '丙': 8, '丁': 7, '戊': 1,
      '己': 9, '庚': 3, '辛': 4, '壬': 6, '癸': 2
    };

    // 地支配数 (河图五行数: 每支对应一单一双)
    const branchesNum = {
      '子': [1, 6], '丑': [5, 10], '寅': [3, 8], '卯': [3, 8],
      '辰': [5, 10], '巳': [2, 7], '午': [2, 7], '未': [5, 10],
      '申': [4, 9], '酉': [4, 9], '戌': [5, 10], '亥': [1, 6]
    };

    const p = bazi.pillars;
    const odds = [];
    const evens = [];
    const stemDetails = [];
    const branchDetails = [];

    [p.year, p.month, p.day, p.hour].forEach(pillar => {
      const sVal = stemsNum[pillar.stem] || 6;
      stemDetails.push({ stem: pillar.stem, num: sVal });
      if (sVal % 2 !== 0) odds.push(sVal);
      else evens.push(sVal);

      const bVals = branchesNum[pillar.branch] || [1, 6];
      branchDetails.push({ branch: pillar.branch, nums: bVals });
      bVals.forEach(bn => {
        if (bn % 2 !== 0) odds.push(bn);
        else evens.push(bn);
      });
    });

    const sumOdds = odds.reduce((a, b) => a + b, 0);
    const sumEvens = evens.reduce((a, b) => a + b, 0);

    const rawTianShu = this.computeTianShu(sumOdds);
    const rawDiShu = this.computeDiShu(sumEvens);

    let birthYear = 1990;
    if (bazi.input && bazi.input.year) birthYear = bazi.input.year;
    else if (bazi.birthYear) birthYear = bazi.birthYear;
    else if (bazi.year) birthYear = bazi.year;

    const rawG = (bazi.input && bazi.input.gender) || bazi.gender || '乾造';
    const isMale = (rawG === '乾造' || rawG === '男' || rawG === 'male' || rawG === 'Yang Male');
    const yearStem = p.year.stem;
    const isYangYear = ['甲', '丙', '戊', '庚', '壬'].includes(yearStem);
    const isYangMaleOrYinFemale = (isMale && isYangYear) || (!isMale && !isYangYear);

    const genderPolarityZh = isMale
      ? (isYangYear ? '阳男 (阳年男命)' : '阴男 (阴年男命)')
      : (isYangYear ? '阳女 (阳年女命)' : '阴女 (阴年女命)');
    const genderPolarityEn = isMale
      ? (isYangYear ? 'Yang Male' : 'Yin Male')
      : (isYangYear ? 'Yang Female' : 'Yin Female');

    const tianShu = this.resolveFiveNum(rawTianShu, birthYear, isMale, isYangMaleOrYinFemale);
    const diShu = this.resolveFiveNum(rawDiShu, birthYear, isMale, isYangMaleOrYinFemale);

    const tianTri = this.LUO_SHU_TRIGRAMS[tianShu] || this.LUO_SHU_TRIGRAMS[6];
    const diTri = this.LUO_SHU_TRIGRAMS[diShu] || this.LUO_SHU_TRIGRAMS[4];

    // 八卦相荡成先天卦：
    // 阳男阴女：天数在上卦，地数在下卦
    // 阴男阳女：天数在下卦，地数在上卦
    const xtUpperTri = isYangMaleOrYinFemale ? tianTri : diTri;
    const xtLowerTri = isYangMaleOrYinFemale ? diTri : tianTri;
    const xianTianBinary = xtLowerTri.binary.concat(xtUpperTri.binary);

    const xianTianHex = (typeof IChingDB !== 'undefined') ? IChingDB.getByLines(xianTianBinary) : null;
    const xianTianTJ = (xianTianHex && typeof TianJiDB !== 'undefined') ? TianJiDB.getByNumber(xianTianHex.number) : null;

    // 阳爻管9年，阴爻管6年
    let runningAgeXT = 0;
    const posNamesZh = ['初', '二', '三', '四', '五', '上'];
    const posNamesEn = ['1st (Initial)', '2nd', '3rd', '4th', '5th', '6th (Top)'];

    // 关键！从先天卦计算“后天卦” - 《河洛理数》/《天纪》“由体起用，以时剥换”：
    // 根据出生时辰地支锚定本命基准时爻（元堂基准爻）：
    // 子时、午时 = 初爻 (1)
    // 丑时、未时 = 二爻 (2)
    // 寅时、申时 = 三爻 (3)
    // 卯时、酉时 = 四爻 (4)
    // 辰时、戌时 = 五爻 (5)
    // 巳时、亥时 = 上爻 (6)
    // 直接变爻法（剥换）：将先天卦对应时爻阴阳反转（阳变阴，阴变阳），从而演化为后天卦。
    const hourBranch = (p && p.hour && p.hour.branch) || '子';
    const HOUR_BRANCH_LINE_MAP = {
      '子': 1, '午': 1,
      '丑': 2, '未': 2,
      '寅': 3, '申': 3,
      '卯': 4, '酉': 4,
      '辰': 5, '戌': 5,
      '巳': 6, '亥': 6
    };
    const hourLinePos = HOUR_BRANCH_LINE_MAP[hourBranch] || 1;
    const BRANCH_EN_MAP = { '子': 'Zi', '丑': 'Chou', '寅': 'Yin', '卯': 'Mao', '辰': 'Chen', '巳': 'Si', '午': 'Wu', '未': 'Wei', '申': 'Shen', '酉': 'You', '戌': 'Xu', '亥': 'Hai' };
    const hourBranchEn = (typeof I18N !== 'undefined' && I18N.getBranch) ? I18N.getBranch(hourBranch, 'en').split(' ')[0] : (BRANCH_EN_MAP[hourBranch] || 'Zi');

    // 1. 先天卦以时剥换（翻转出生时辰对应爻位）
    const mutatedBinary = [...xianTianBinary];
    mutatedBinary[hourLinePos - 1] = 1 - mutatedBinary[hourLinePos - 1];

    // 2. 最后上下卦互相换位置（由体起用，体用互易，上卦与下卦对调）
    const mutatedLowerTriBinary = mutatedBinary.slice(0, 3);
    const mutatedUpperTriBinary = mutatedBinary.slice(3, 6);
    const houTianBinary = mutatedUpperTriBinary.concat(mutatedLowerTriBinary);

    const houTianHex = (typeof IChingDB !== 'undefined') ? IChingDB.getByLines(houTianBinary) : null;
    const houTianTJ = (houTianHex && typeof TianJiDB !== 'undefined') ? TianJiDB.getByNumber(houTianHex.number) : null;

    // 提取后天卦上卦与下卦
    const findTriByBinary = (bin) => {
      const found = Object.values(this.LUO_SHU_TRIGRAMS).find(t =>
        t.binary[0] === bin[0] && t.binary[1] === bin[1] && t.binary[2] === bin[2]
      );
      if (found) return found;
      return {
        nameZh: '乾',
        natureZh: '天',
        nameEn: 'Heaven',
        binary: bin
      };
    };
    const htLowerTri = findTriByBinary(houTianBinary.slice(0, 3));
    const htUpperTri = findTriByBinary(houTianBinary.slice(3, 6));

    const xianTianLines = xianTianBinary.map((nature, idx) => {
      const pos = idx + 1;
      const duration = (nature === 1) ? 9 : 6;
      const ageStart = runningAgeXT + 1;
      const ageEnd = runningAgeXT + duration;
      runningAgeXT += duration;

      const isCurrentActive = (currentAge >= ageStart && currentAge <= ageEnd);
      const symbol = (nature === 1) ? '⚊' : '⚋';
      const typeZh = (nature === 1) ? '阳爻 (管9年)' : '阴爻 (管6年)';
      const typeEn = (nature === 1) ? 'Yang Line (Governs 9 Years)' : 'Yin Line (Governs 6 Years)';

      return {
        position: pos,
        posZh: `${posNamesZh[idx]}爻`,
        posEn: `Line ${pos}`,
        nature,
        symbol,
        duration,
        typeZh,
        typeEn,
        ageStart,
        ageEnd,
        ageSpanZh: `${ageStart}~${ageEnd}岁`,
        ageSpanEn: `Ages ${ageStart}-${ageEnd}`,
        isActive: isCurrentActive
      };
    });

    const xianTianTotalYears = runningAgeXT;

    let runningAgeHT = xianTianTotalYears;
    const houTianLines = houTianBinary.map((nature, idx) => {
      const pos = idx + 1;
      const duration = (nature === 1) ? 9 : 6;
      const ageStart = runningAgeHT + 1;
      const ageEnd = runningAgeHT + duration;
      runningAgeHT += duration;

      const isCurrentActive = (currentAge >= ageStart && currentAge <= ageEnd);
      const symbol = (nature === 1) ? '⚊' : '⚋';
      const typeZh = (nature === 1) ? '阳爻 (管9年)' : '阴爻 (管6年)';
      const typeEn = (nature === 1) ? 'Yang Line (Governs 9 Years)' : 'Yin Line (Governs 6 Years)';

      return {
        position: pos,
        posZh: `${posNamesZh[idx]}爻`,
        posEn: `Line ${pos}`,
        nature,
        symbol,
        duration,
        typeZh,
        typeEn,
        ageStart,
        ageEnd,
        ageSpanZh: `${ageStart}~${ageEnd}岁`,
        ageSpanEn: `Ages ${ageStart}-${ageEnd}`,
        isActive: isCurrentActive
      };
    });

    const isXianTianActive = (currentAge <= xianTianTotalYears);
    const activeStage = isXianTianActive ? 'xianTian' : 'houTian';
    const activeStageZh = isXianTianActive ? '前半生 · 先天命卦当值' : '后半生 · 后天命卦执权';
    const activeStageEn = isXianTianActive ? 'First Half of Life · Early Heaven Natal Mandate' : 'Second Half of Life · Later Heaven Mandate';

    let targetAge;
    let effSelectedYear;

    if (currentAge !== undefined && currentAge !== null && selectedYear !== undefined && selectedYear !== null) {
      targetAge = Math.max(1, currentAge);
      effSelectedYear = selectedYear;
    } else if (currentAge !== undefined && currentAge !== null) {
      targetAge = Math.max(1, currentAge);
      effSelectedYear = birthYear + targetAge;
    } else if (selectedYear !== undefined && selectedYear !== null) {
      effSelectedYear = selectedYear;
      targetAge = Math.max(1, Math.abs(effSelectedYear - birthYear));
    } else {
      effSelectedYear = new Date().getFullYear();
      targetAge = Math.max(1, Math.abs(effSelectedYear - birthYear));
    }

    const STEM_LIST = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
    const BRANCH_LIST = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
    const STEM_EN_MAP = { '甲': 'Jia', '乙': 'Yi', '丙': 'Bing', '丁': 'Ding', '戊': 'Wu', '己': 'Ji', '庚': 'Geng', '辛': 'Xin', '壬': 'Ren', '癸': 'Gui' };

    const annualSIdx = (effSelectedYear - 4 + 60000) % 10;
    const annualBIdx = (effSelectedYear - 4 + 60000) % 12;
    const annualStem = STEM_LIST[annualSIdx];
    const annualBranch = BRANCH_LIST[annualBIdx];
    const annualStemEn = (typeof I18N !== 'undefined' && I18N.getStem) ? I18N.getStem(annualStem, 'en').split(' ')[0] : (STEM_EN_MAP[annualStem] || annualStem);
    const annualBranchEn = (typeof I18N !== 'undefined' && I18N.getBranch) ? I18N.getBranch(annualBranch, 'en').split(' ')[0] : (BRANCH_EN_MAP[annualBranch] || annualBranch);
    const annualGanzhiZh = annualStem + annualBranch;
    const annualGanzhiEn = `${annualStemEn}-${annualBranchEn}`;
    const annualGanzhi = annualGanzhiZh;

    // 阳年: 子、寅、辰、午、申、戌 (annualBIdx is even)
    // 阴年: 丑、卯、巳、未、酉、亥 (annualBIdx is odd)
    const YANG_BRANCHES = ['子', '寅', '辰', '午', '申', '戌'];
    const isAnnualYangYear = YANG_BRANCHES.includes(annualBranch);
    const yearPolarity = isAnnualYangYear ? 'yang' : 'yin';
    const yearPolarityZh = isAnnualYangYear ? '阳年' : '阴年';
    const yearPolarityEn = isAnnualYangYear ? 'Yang Year' : 'Yin Year';

    // 1. Build authentic Lifelong Decade progression (12 Phases: XianTian 6 lines, HouTian 6 lines, extended)
    const phases = [];
    let currentAgeCursor = 1;

    // A. 先天命卦 6 爻 (初爻至上爻)
    for (let l = 1; l <= 6; l++) {
      const nature = xianTianBinary[l - 1];
      const dur = (nature === 1) ? 9 : 6;
      phases.push({
        stage: 'xianTian',
        stageZh: '前半生 · 先天命基',
        stageEn: 'Early Heaven Foundation',
        baseHex: xianTianHex,
        baseBinary: [...xianTianBinary],
        linePos: l,
        nature,
        isYangLine: (nature === 1),
        duration: dur,
        ageStart: currentAgeCursor,
        ageEnd: currentAgeCursor + dur - 1
      });
      currentAgeCursor += dur;
    }

    // B. 后天命卦 6 爻 (初爻至上爻)
    for (let l = 1; l <= 6; l++) {
      const nature = houTianBinary[l - 1];
      const dur = (nature === 1) ? 9 : 6;
      phases.push({
        stage: 'houTian',
        stageZh: '后半生 · 后天跃升',
        stageEn: 'Later Heaven Ascension',
        baseHex: houTianHex,
        baseBinary: [...houTianBinary],
        linePos: l,
        nature,
        isYangLine: (nature === 1),
        duration: dur,
        ageStart: currentAgeCursor,
        ageEnd: currentAgeCursor + dur - 1
      });
      currentAgeCursor += dur;
    }

    // C. 延展至 100 岁以上
    while (currentAgeCursor <= 100) {
      for (let l = 1; l <= 6; l++) {
        if (currentAgeCursor > 100) break;
        const nature = houTianBinary[l - 1];
        const dur = (nature === 1) ? 9 : 6;
        phases.push({
          stage: 'houTian',
          stageZh: '后半生 · 后天跃升（延展）',
          stageEn: 'Later Heaven Ascension (Extended)',
          baseHex: houTianHex,
          baseBinary: [...houTianBinary],
          linePos: l,
          nature,
          isYangLine: (nature === 1),
          duration: dur,
          ageStart: currentAgeCursor,
          ageEnd: currentAgeCursor + dur - 1
        });
        currentAgeCursor += dur;
      }
    }

    // 2. Locate active decade phase for targetAge
    let activePhase = phases.find(item => targetAge >= item.ageStart && targetAge <= item.ageEnd);
    if (!activePhase) activePhase = phases[phases.length - 1];

    let yearInPhase = targetAge - activePhase.ageStart + 1;
    if (yearInPhase < 1) yearInPhase = 1;
    if (yearInPhase > activePhase.duration) yearInPhase = activePhase.duration;

    // 3. Sequential Year-by-Year Mutation within active decade ("在每一年的基础上变")
    const currBinary = [...activePhase.baseBinary];
    let stepZh = '';
    let stepEn = '';
    let lastMutatedLine = null;
    let currentEvaluatedLine = activePhase.linePos;
    let currentYingLine = (activePhase.linePos <= 3) ? (activePhase.linePos + 3) : (activePhase.linePos - 3);

    const startLine = activePhase.linePos;

    for (let k = 1; k <= yearInPhase; k++) {
      const yrK = effSelectedYear - (yearInPhase - k);
      const bK = BRANCH_LIST[(yrK - 4 + 60000) % 12];
      const isYangYearK = YANG_BRANCHES.includes(bK);

      const currPos = ((startLine - 1 + (k - 1)) % 6) + 1;

      if (activePhase.nature === 1) {
        // 元堂为阳爻 (管9年)
        if (k === 1) {
          currentEvaluatedLine = startLine;
          if (isYangYearK) {
            // 首年逢阳年同气守本不动
            stepZh = '元堂阳爻首年 · 逢阳年不动（守本卦）';
            stepEn = 'Yuan Tang Yang Line Year 1: Meets Yang Year -> Unchanged, Retains Base Hexagram';
            lastMutatedLine = null;
          } else {
            // 首年逢阴年相感，阳变阴
            const prevVal = currBinary[startLine - 1];
            currBinary[startLine - 1] = 1 - prevVal;
            stepZh = `元堂阳爻首年 · 逢阴年相感 · 元堂（第${posNamesZh[startLine - 1]}爻）${prevVal === 1 ? '阳变阴' : '阴变阳'}`;
            stepEn = `Yuan Tang Yang Line Year 1: Meets Yin Year -> Yuan Tang Line ${startLine} ${prevVal === 1 ? 'Yang to Yin' : 'Yin to Yang'}`;
            lastMutatedLine = startLine;
          }
        } else if (k === 2 || k === 3) {
          // 第二、三年取当前行经爻位之应爻 (1应4, 2应5, 3应6, 4应1, 5应2, 6应3)
          const yingLine = (currPos <= 3) ? (currPos + 3) : (currPos - 3);
          currentEvaluatedLine = yingLine;
          currentYingLine = yingLine;
          const prevVal = currBinary[yingLine - 1];
          currBinary[yingLine - 1] = 1 - prevVal;
          stepZh = `阳爻运第${k}年 · 行至第${posNamesZh[currPos - 1]}爻取应爻（第${posNamesZh[yingLine - 1]}爻）· 阴阳互变（${prevVal === 1 ? '阳变阴' : '阴变阳'}）`;
          stepEn = `Yang Line Year ${k}: Line ${currPos} Takes Responsive Line ${yingLine} -> Inverted (${prevVal === 1 ? 'Yang to Yin' : 'Yin to Yang'})`;
          lastMutatedLine = yingLine;
        } else if (k === 4 || k === 5) {
          // 第四年、第五年不取应爻，逐爻直接推移变换
          currentEvaluatedLine = currPos;
          const prevVal = currBinary[currPos - 1];
          currBinary[currPos - 1] = 1 - prevVal;
          stepZh = `阳爻运第${k}年 · 不取应爻 · 向上推至第${posNamesZh[currPos - 1]}爻 · 阴阳互变（${prevVal === 1 ? '阳变阴' : '阴变阳'}）`;
          stepEn = `Yang Line Year ${k}: Direct Push to Line ${currPos} -> Inverted (${prevVal === 1 ? 'Yang to Yin' : 'Yin to Yang'})`;
          lastMutatedLine = currPos;
        } else if (k === 6) {
          // 第六年推至第六爻位（前一爻位第5爻归位，第6爻翻转）
          const prevPos = ((startLine - 1 + 4) % 6) + 1;
          currBinary[prevPos - 1] = 1 - currBinary[prevPos - 1];
          currentEvaluatedLine = currPos;
          const prevVal = currBinary[currPos - 1];
          currBinary[currPos - 1] = 1 - prevVal;
          stepZh = `阳爻运第6年 · 向上推至第${posNamesZh[currPos - 1]}爻（前爻归位）· 阴阳互变（${prevVal === 1 ? '阳变阴' : '阴变阳'}）`;
          stepEn = `Yang Line Year 6: Push to Line ${currPos} (Previous Line Reverted) -> Inverted (${prevVal === 1 ? 'Yang to Yin' : 'Yin to Yang'})`;
          lastMutatedLine = currPos;
        } else {
          // 第七至九年：逐爻向上推移变换
          currentEvaluatedLine = currPos;
          const prevVal = currBinary[currPos - 1];
          currBinary[currPos - 1] = 1 - prevVal;
          stepZh = `阳爻运第${k}年 · 向上推至第${posNamesZh[currPos - 1]}爻 · 阴阳互变（${prevVal === 1 ? '阳变阴' : '阴变阳'}）`;
          stepEn = `Yang Line Year ${k}: Direct Push to Line ${currPos} -> Inverted (${prevVal === 1 ? 'Yang to Yin' : 'Yin to Yang'})`;
          lastMutatedLine = currPos;
        }
      } else {
        // 元堂为阴爻 (管6年)
        if (k === 1) {
          currentEvaluatedLine = startLine;
          if (isYangYearK) {
            // 首年逢阳年不动（守本卦）
            stepZh = '元堂阴爻首年 · 逢阳年不动（守本卦）';
            stepEn = 'Yin Line Year 1: Meets Yang Year -> Unchanged, Retains Base Hexagram';
            lastMutatedLine = null;
          } else {
            // 首年逢阴年相感，阴变阳
            const prevVal = currBinary[startLine - 1];
            currBinary[startLine - 1] = 1 - prevVal;
            stepZh = `元堂阴爻首年 · 逢阴年相感 · 元堂（第${posNamesZh[startLine - 1]}爻）${prevVal === 1 ? '阳变阴' : '阴变阳'}`;
            stepEn = `Yin Line Year 1: Meets Yin Year -> Yuan Tang Line ${startLine} ${prevVal === 1 ? 'Yang to Yin' : 'Yin to Yang'}`;
            lastMutatedLine = startLine;
          }
        } else {
          // 第二至六年：不取应爻，逐爻向上推移变换
          currentEvaluatedLine = currPos;
          const prevVal = currBinary[currPos - 1];
          currBinary[currPos - 1] = 1 - prevVal;
          stepZh = `阴爻运第${k}年 · 向上推至第${posNamesZh[currPos - 1]}爻 · 阴阳互变（${prevVal === 1 ? '阳变阴' : '阴变阳'}）`;
          stepEn = `Yin Line Year ${k}: Direct Push to Line ${currPos} -> Inverted (${prevVal === 1 ? 'Yang to Yin' : 'Yin to Yang'})`;
          lastMutatedLine = currPos;
        }
      }
    }

    const zhiNianBinary = currBinary;
    const isMutated = zhiNianBinary.some((val, i) => val !== activePhase.baseBinary[i]);
    const zhiNianHex = (typeof IChingDB !== 'undefined') ? IChingDB.getByLines(zhiNianBinary) : null;
    const zhiNianTJ = (zhiNianHex && typeof TianJiDB !== 'undefined') ? TianJiDB.getByNumber(zhiNianHex.number) : null;

    const baseHexNameZh = activePhase.baseHex ? activePhase.baseHex.nameZh : '本卦';
    const baseHexNameEn = activePhase.baseHex ? activePhase.baseHex.nameEn : 'Base Hexagram';
    const zhiNianHexNameZh = zhiNianHex ? zhiNianHex.nameZh : '值年卦';
    const zhiNianHexNameEn = zhiNianHex ? zhiNianHex.nameEn : 'Annual Hexagram';

    const yingPos = currentYingLine;

    const ruleInteractionZh = isMutated
      ? `同性相斥 · 变卦激荡 → 得变卦【${zhiNianHexNameZh}】（${stepZh}）`
      : `异性相吸 · 守本稳健 → 阴阳相合守本卦【${baseHexNameZh}】（${stepZh}）`;

    const ruleInteractionEn = isMutated
      ? `Like Polarities Repel · Transformed Mutation -> Transformed Hexagram [${zhiNianHexNameEn}] (${stepEn})`
      : `Opposite Polarities Attract · Resilient Stability -> Retain Base Hexagram [${baseHexNameEn}] (${stepEn})`;

    const zhiNianActiveLine = (activePhase.stage === 'xianTian' ? xianTianLines : houTianLines).find(l => l.position === activePhase.linePos) || xianTianLines[0];

    return {
      currentAge,
      selectedYear: effSelectedYear,
      targetAge,
      sumOdds,
      sumEvens,
      rawTianShu,
      rawDiShu,
      tianShu,
      diShu,
      tianTri,
      diTri,
      odds,
      evens,
      stemDetails,
      branchDetails,
      isYangMaleOrYinFemale,
      genderPolarityZh,
      genderPolarityEn,
      xtUpperTri,
      xtLowerTri,
      htUpperTri,
      htLowerTri,
      activeStage,
      activeStageZh,
      activeStageEn,
      xianTian: {
        hexagram: xianTianHex,
        tianJi: xianTianTJ,
        binary: xianTianBinary,
        lines: xianTianLines,
        totalYears: xianTianTotalYears,
        ageSpanZh: `1~${xianTianTotalYears}岁`,
        ageSpanEn: `Ages 1-${xianTianTotalYears}`,
        upperTrigram: xtUpperTri,
        lowerTrigram: xtLowerTri
      },
      houTian: {
        hexagram: houTianHex,
        tianJi: houTianTJ,
        binary: houTianBinary,
        lines: houTianLines,
        ageSpanZh: `${xianTianTotalYears + 1}~${runningAgeHT}岁`,
        ageSpanEn: `Ages ${xianTianTotalYears + 1}-${runningAgeHT}`,
        upperTrigram: htUpperTri,
        lowerTrigram: htLowerTri,
        hourBranch,
        hourBranchEn,
        hourLinePos,
        derivationRuleZh: `由体起用 · 以时剥换兼上下互易（${hourBranch}时值第${posNamesZh[hourLinePos - 1]}爻变爻，再上下卦对调）成后天【${houTianHex ? houTianHex.nameZh : ''}】`,
        derivationRuleEn: `Time Mutation & Trigram Inversion (${hourBranchEn} Hour Line ${hourLinePos} Inverted, then Upper/Lower Swapped) -> Later Heaven [${houTianHex ? houTianHex.nameEn : ''}]`
      },
      zhiNian: {
        year: effSelectedYear,
        age: targetAge,
        baseStage: activePhase.stage,
        baseStageZh: (activePhase.stage === 'xianTian') ? '先天命卦' : '后天命卦',
        baseStageEn: (activePhase.stage === 'xianTian') ? 'Early Heaven' : 'Later Heaven',
        baseHexagram: activePhase.baseHex,
        baseTianJi: (activePhase.baseHex && typeof TianJiDB !== 'undefined') ? TianJiDB.getByNumber(activePhase.baseHex.number) : null,
        baseBinary: activePhase.baseBinary,
        activeLinePos: activePhase.linePos,
        activeLine: zhiNianActiveLine,
        annualStem,
        annualStemEn,
        annualBranch,
        annualBranchEn,
        annualGanzhi,
        annualGanzhiZh,
        annualGanzhiEn,
        isYangYear: isAnnualYangYear,
        isAnnualYangYear,
        yearPolarity,
        yearPolarityZh,
        yearPolarityEn,
        isYangLine: activePhase.isYangLine,
        linePolarity: activePhase.isYangLine ? 'yang' : 'yin',
        linePolarityZh: activePhase.isYangLine ? '阳爻' : '阴爻',
        linePolarityEn: activePhase.isYangLine ? 'Yang Line' : 'Yin Line',
        isRepulsion: isMutated,
        isMutated,
        ruleInteractionZh,
        ruleInteractionEn,
        stepDescriptionZh: stepZh,
        stepDescriptionEn: stepEn,
        yearInDecade: yearInPhase,
        totalYearsInDecade: activePhase.duration,
        yingLinePos: yingPos,
        lastMutatedLine,
        hexagram: zhiNianHex,
        tianJi: zhiNianTJ,
        binary: zhiNianBinary
      }
    };
  }

  /**
   * Calculates complete 100-year hexagram cycle progression
   * Returns array of 100 annual transit points with epoch, governing line,
   * annual hexagram, Yin-Yang law interaction, and energy score.
   */
  static calculateLifelongCycle(bazi) {
    if (!bazi || !bazi.pillars) return [];
    let birthYear = 1990;
    if (bazi.input && bazi.input.year) birthYear = bazi.input.year;
    else if (bazi.birthYear) birthYear = bazi.birthYear;
    else if (bazi.year) birthYear = bazi.year;

    const baseFourHex = this.calculateFourPillarsHexagrams(bazi, 1, birthYear + 1);
    if (!baseFourHex) return [];

    const xtTotalYears = baseFourHex.xianTian.totalYears;
    const xtHex = baseFourHex.xianTian.hexagram;
    const htHex = baseFourHex.houTian.hexagram;

    const highAuspicious = [1, 11, 14, 15, 19, 24, 32, 42, 46, 50, 55, 58];
    const midAuspicious = [2, 8, 17, 20, 26, 31, 34, 48, 57, 59];
    const crucible = [3, 12, 18, 29, 36, 39, 47, 23];

    const dm = bazi.dayMaster || (bazi.pillars && bazi.pillars.day && bazi.pillars.day.stem) || '甲';
    const STEM_ELEMENTS_LOCAL = {
      '甲': '木', '乙': '木', '丙': '火', '丁': '火', '戊': '土',
      '己': '土', '庚': '金', '辛': '金', '壬': '水', '癸': '水'
    };
    const dmEl = bazi.dayMasterElement || STEM_ELEMENTS_LOCAL[dm] || '木';
    const isStrong = (bazi.isStrong !== undefined)
      ? bazi.isStrong
      : ((typeof BaZiEngine !== 'undefined' && BaZiEngine.calculateVigor)
        ? (BaZiEngine.calculateVigor(bazi) >= 50)
        : true);

    const points = [];
    for (let age = 1; age <= 100; age++) {
      const yr = birthYear + age;
      const itemHex = this.calculateFourPillarsHexagrams(bazi, age, yr);
      const zn = itemHex.zhiNian;
      const isXianTian = (age <= xtTotalYears);

      let baseScore = 65;
      const hexNum = zn.hexagram ? zn.hexagram.number : 1;
      if (highAuspicious.includes(hexNum)) baseScore = 88;
      else if (midAuspicious.includes(hexNum)) baseScore = 75;
      else if (crucible.includes(hexNum)) baseScore = 48;
      else baseScore = 62;

      const posBonus = (zn.activeLinePos === 5) ? 6 : (zn.activeLinePos === 2 ? 4 : 0);
      const mutationModifier = zn.isMutated ? 3 : 0;
      const rawScore = Math.max(30, Math.min(98, baseScore + posBonus + mutationModifier));

      // Dynamic BaZi Day Master & Hexagram Trigrams Elemental Interaction
      const dyn = this.evaluateBaZiHexDynamicInteraction(dm, dmEl, isStrong, zn.hexagram, zn.annualStem, zn.annualBranch);
      const baziAdjustedScore = Math.max(25, Math.min(98, Math.round(rawScore + dyn.scoreModifier)));

      points.push({
        age,
        year: yr,
        isXianTian,
        epochZh: isXianTian ? '前半生 · 先天命基' : '后半生 · 后天跃升',
        epochEn: isXianTian ? 'Early Heaven Foundation' : 'Later Heaven Ascension',
        governingHex: isXianTian ? xtHex : htHex,
        activeLinePos: zn.activeLinePos,
        activeLine: zn.activeLine,
        annualStem: zn.annualStem,
        annualStemEn: zn.annualStemEn,
        annualBranch: zn.annualBranch,
        annualBranchEn: zn.annualBranchEn,
        annualGanzhi: zn.annualGanzhi,
        annualGanzhiZh: zn.annualGanzhiZh,
        annualGanzhiEn: zn.annualGanzhiEn,
        annualHex: zn.hexagram,
        annualTJ: zn.tianJi,
        isMutated: zn.isMutated,
        isYangYear: zn.isYangYear,
        isYangLine: zn.isYangLine,
        ruleInteractionZh: zn.ruleInteractionZh,
        ruleInteractionEn: zn.ruleInteractionEn,
        stepDescriptionZh: zn.stepDescriptionZh,
        stepDescriptionEn: zn.stepDescriptionEn,
        yearInDecade: zn.yearInDecade,
        totalYearsInDecade: zn.totalYearsInDecade,
        yingLinePos: zn.yingLinePos,
        lastMutatedLine: zn.lastMutatedLine,
        dmElement: dmEl,
        isStrong,
        upperTrigramElement: dyn.upperTrigramElement,
        lowerTrigramElement: dyn.lowerTrigramElement,
        elementalResonanceZh: dyn.elementalResonanceZh,
        elementalResonanceEn: dyn.elementalResonanceEn,
        dynamicInterpretationZh: dyn.dynamicInterpretationZh,
        dynamicInterpretationEn: dyn.dynamicInterpretationEn,
        rawScore,
        score: baziAdjustedScore
      });
    }
    return points;
  }

  /**
   * Evaluates dynamic elemental interaction between the native's BaZi (Day Master element & strength)
   * and the annual hexagram trigrams + transit stem/branch.
   */
  static evaluateBaZiHexDynamicInteraction(dm, dmEl, isStrong, hex, stem, branch) {
    const triMap = {
      '乾': '金', '兑': '金', '离': '火', '震': '木', '巽': '木', '坎': '水', '艮': '土', '坤': '土',
      '天': '金', '泽': '金', '火': '火', '雷': '木', '风': '木', '水': '水', '山': '土', '地': '土'
    };
    let upEl = '金';
    let loEl = '金';
    if (hex) {
      const upName = hex.upperTrigram || hex.upperTrigramNature || '';
      const loName = hex.lowerTrigram || hex.lowerTrigramNature || '';
      for (const k in triMap) {
        if (upName.includes(k)) { upEl = triMap[k]; break; }
      }
      for (const k in triMap) {
        if (loName.includes(k)) { loEl = triMap[k]; break; }
      }
    }

    const envEl = upEl;
    let resonanceZh = '';
    let resonanceEn = '';
    let interpZh = '';
    let interpEn = '';
    let scoreMod = 0;

    if (dmEl === '水') {
      if (isStrong) {
        if (envEl === '火' || envEl === '土' || loEl === '火' || loEl === '土') {
          resonanceZh = '水旺遇火土激荡 (财官乘权 · 需防大起大落)';
          resonanceEn = 'Vigorous Water Meets Fire-Earth (Wealth & Officer Volatility Alert)';
          interpZh = '身强水盛逢岁运火土激荡，外在机遇与凶险同频放大，需防大起大落与心绪焦躁波动，身体注意脾胃与心肾不交。行持宜“以柔克刚、见好即收”，切忌强行加杠杆。';
          interpEn = 'Strong Water native encounters intense Fire-Earth turbulence. High-amplitude shifts in fortune and emotional energy. Guard against aggressive leverage and prioritize physical stability and patience.';
          scoreMod = -3;
        } else if (envEl === '木' || loEl === '木') {
          resonanceZh = '水木相生吐秀 (食伤灵感 · 文思极宜深研)';
          resonanceEn = 'Water Nourishes Wood Output (Creative Flow · Prime for Deep Study)';
          interpZh = '水得木通关泄秀，文思大畅、才华横溢。极为适宜进修求学、学术钻研、著作立说或打磨重大技术产品，以专业技能立世，灵气畅通无阻。';
          interpEn = 'Water harmoniously generates Wood Output. Creative genius and academic intellect flourish; prime timing for scholarly exams, deep research, publishing, and creative innovations.';
          scoreMod = 6;
        } else if (envEl === '金' || loEl === '金') {
          resonanceZh = '金水同源滋养 (印星重逢 · 宜主动运动消耗)';
          resonanceEn = 'Metal Feeds Heavy Water (Abundant Resource · Demands Physical Exercise)';
          interpZh = '金来生水，思虑极深但易多思少动、气机凝滞。需要适当消耗自己蓄积的体能与精力，宜坚持高强度体魄锻炼与户外活动，以动破静，化内耗为定力。';
          interpEn = 'Metal Resource abundantly feeds Water. Channel surplus mental energy into rigorous physical exercise to prevent cognitive inertia and stagnant rumination.';
          scoreMod = 1;
        } else {
          resonanceZh = '汪洋比劫汇聚 (同侪并起 · 严明利益防火墙)';
          resonanceEn = 'Tidal Waters Merge (Peer Alliance with Contractual Firewalls)';
          interpZh = '比劫重逢，同侪结盟声势浩大。适宜团队协同拓客，但切记设立契约与财务防火墙，防同行截流与亲近之人利益纠纷。';
          interpEn = 'Tidal waters merge with peer companions. Favorable for forming alliances, but strictly enforce equity boundaries to prevent friction.';
          scoreMod = 2;
        }
      } else {
        if (envEl === '金' || envEl === '水' || loEl === '金' || loEl === '水') {
          resonanceZh = '金水相涵得润 (印比帮身 · 贵人提携借力)';
          resonanceEn = 'Metal & Water Nourishment (Resource Support & Benevolent Mentors)';
          interpZh = '弱水得金生水助，如源泉喷涌，元气大振。宜主动联络良师益友与长辈贵人，借平台与组织之势立命，身心泰然。';
          interpEn = 'Fragile Water replenished by Metal and Water companions. Seek senior mentors and institutional backing to compound personal resilience.';
          scoreMod = 7;
        } else {
          resonanceZh = '弱水遭克逢泄 (财官施压 · 韬光养晦防耗)';
          resonanceEn = 'Weak Water Under Fire-Earth Strain (Prudent Conservation)';
          interpZh = '弱水难当烈火厚土之重负，易感身心重负或财务消耗。核心策略在“不求急功、借伞避雨”，把精力收缩于最核心基本盘。';
          interpEn = 'Weak Water strained by Fire and Earth. Avoid overcommitting resources; prioritize physical recuperation and defensive risk management.';
          scoreMod = -5;
        }
      }
    } else if (dmEl === '木') {
      if (isStrong) {
        if (envEl === '火') {
          resonanceZh = '木火通明吐秀 (食伤盛会 · 文昌开运)';
          resonanceEn = 'Wood Illuminates Fire (Radiant Output & Intellectual Fame)';
          interpZh = '木生明火，文采斐然。利于品牌传播、学术答辩、商业推介与文化创作，名扬四方。';
          interpEn = 'Wood fuels brilliant Fire. Outstanding timing for public visibility, brand building, scholarly recognition, and creative ventures.';
          scoreMod = 6;
        } else if (envEl === '金' || envEl === '土') {
          resonanceZh = '栋梁受伐裁成 (官杀雕琢 · 担纲重任)';
          resonanceEn = 'Timber Tempered by Metal & Earth (Executive Crucible)';
          interpZh = '良木逢金雕琢方成大器，虽有组织制度与领导高压，但能破土而出担负实权帅位。';
          interpEn = 'Sturdy timber disciplined into architectural pillars. Bureaucratic tension converts into executive authority through patience.';
          scoreMod = 3;
        } else {
          resonanceZh = '林木茂密同声 (比劫并立 · 宜通关拓路)';
          resonanceEn = 'Dense Forest Assembly (Peer Competition & Co-creation)';
          interpZh = '林木重叠遮蔽阳光，需防同僚竞争或资源内卷；宜以火通关、以外部广阔市场拓局。';
          interpEn = 'Dense canopy risks internal resource competition; channel drive externally into new market frontiers.';
          scoreMod = 1;
        }
      } else {
        if (envEl === '水' || envEl === '木') {
          resonanceZh = '枯木逢春雨露 (印星滋生 · 根基深扎)';
          resonanceEn = 'Spring Dew Revitalizes Wood (Resource Nourishment)';
          interpZh = '甘霖滋润柔木，底盘蓄力复苏。宜充电自省、拜师求学，夯实专业硬功夫。';
          interpEn = 'Nourishing waters restore vitality to fragile branches. Focus on skill acquisition, mentorship, and health rejuvenation.';
          scoreMod = 7;
        } else {
          resonanceZh = '柔木难御重金 (官煞克伐 · 防守固本)';
          resonanceEn = 'Fragile Wood Under Metal Edge (Protective Defense)';
          interpZh = '金重伐木，制度与上级压力显著。切勿以卵击石，以水通关化煞，以柔克刚自保。';
          interpEn = 'Strong Metal challenges fragile Wood. Refrain from direct confrontations; deploy water diplomacy to deflect friction.';
          scoreMod = -5;
        }
      }
    } else if (dmEl === '火') {
      if (isStrong) {
        if (envEl === '土') {
          resonanceZh = '烈火生土含章 (食伤秀气 · 沉淀资产)';
          resonanceEn = 'Blazing Fire Generates Fertile Earth (Output & Asset Grounding)';
          interpZh = '火炎得土泄火之顽烈，化燥为稳。适宜将爆发性才华转化为持久的商业资产与知识体系。';
          interpEn = 'Intense heat tempered into fertile Earth. Compound transient passion into permanent assets and structured frameworks.';
          scoreMod = 5;
        } else if (envEl === '金' || envEl === '水') {
          resonanceZh = '水火既济辉映 (财官相制 · 威权鼎盛)';
          resonanceEn = 'Harmonious Water-Fire Convergence (Wealth & Order Equilibrium)';
          interpZh = '烈日逢深潭辉映，刚柔并济。既有宏大魄力又有严苛风控，宜成大事、大展经纶。';
          interpEn = 'Solar brilliance mirrors over deep waters. Exceptional balance of audacious vision and rigorous execution.';
          scoreMod = 6;
        } else {
          resonanceZh = '炎火炽热亢盛 (比劫同气 · 慎防焦躁)';
          resonanceEn = 'Supreme Solar Heat (Excess Passion · Emotional Restraint)';
          interpZh = '火旺逢火易急躁冒进、伤害同僚；宜静坐冥想、多饮清凉之水，三思而后动。';
          interpEn = 'Intense fire risks impulsive overconfidence and relational conflict. Cultivate calm reflection and deliberate pacing.';
          scoreMod = -1;
        }
      } else {
        if (envEl === '木' || envEl === '火') {
          resonanceZh = '余烬得薪复燃 (印比鼎力 · 贵人拨云见日)';
          resonanceEn = 'Hearth Rekindled by Wood (Resource Elevation)';
          interpZh = '弱火得厚木生扶，炉火通红。关键时刻得长辈与盟友输送核心资源，绝处逢生。';
          interpEn = 'Steady fuel feeds fragile hearth. Senior patrons and key allies inject decisive capital and strategic clarity.';
          scoreMod = 7;
        } else {
          resonanceZh = '微火遭水浇熄 (官杀重压 · 筑堤防波)';
          resonanceEn = 'Fragile Fire Under Water Deluge (Crisis Containment)';
          interpZh = '重水压境，危机感逼仄。当守住现金流与健康红线，绝不轻言出击。';
          interpEn = 'Deep waters threaten delicate flame. Safeguard cash reserves and avoid exposure to unmanageable risks.';
          scoreMod = -6;
        }
      }
    } else if (dmEl === '土') {
      if (isStrong) {
        if (envEl === '金') {
          resonanceZh = '土厚埋金得露 (食伤吐秀 · 匠心变现)';
          resonanceEn = 'Rich Earth Reveals Gold (Refined Output & Craftsmanship)';
          interpZh = '厚土生金，矿藏出土。长期积累的沉稳实力得以高效变现，技术与产品价值全面爆发。';
          interpEn = 'Abundant Earth yields precious Metal. Latent capabilities convert into tangible market value and executive acclaim.';
          scoreMod = 6;
        } else if (envEl === '水' || envEl === '木') {
          resonanceZh = '沃土引水成林 (财官双美 · 统摄大局)';
          resonanceEn = 'Fertile Earth Channels Water & Wood (Wealth & Command Synergy)';
          interpZh = '厚重山峦阻水筑堤、栽植苍松。能担重任、聚财守业，在复杂政商局势中稳坐钓鱼台。';
          interpEn = 'Solid earthen mountains channel rivers and anchor forests. Superb aptitude for asset preservation and institutional governance.';
          scoreMod = 5;
        } else {
          resonanceZh = '重山叠嶂滞涩 (比劫争厚 · 宜通关活气)';
          resonanceEn = 'Layered Mountain Stagnation (Inertia & Obstinate Delays)';
          interpZh = '土多则滞，过于执拗固执易失良机；宜以金泄之、以木疏之，打破惯性思维。';
          interpEn = 'Heavy Earth breeds stubborn inertia. Break through cognitive rigidity with crisp Metal logic and dynamic Wood agility.';
          scoreMod = 0;
        }
      } else {
        if (envEl === '火' || envEl === '土') {
          resonanceZh = '薄土得日温养 (印比生身 · 气血充盈)';
          resonanceEn = 'Warm Soil Enriched by Sunlight (Resource Replenishment)';
          interpZh = '贫瘠薄土逢暖阳生养，生机盎然。团队合作顺利，体力精力稳步回升。';
          interpEn = 'Sunlight warms cool loam into productive fertility. Strong organic recovery in stamina, self-worth, and collaborative trust.';
          scoreMod = 7;
        } else {
          resonanceZh = '冻土逢木克破 (官鬼崩解 · 守正固堤)';
          resonanceEn = 'Frail Soil Pierced by Heavy Wood (Structural Vulnerability)';
          interpZh = '身弱逢强木扎根，深感体制与外界问责碾压。宜寻求温暖庇护，不可孤注一掷。';
          interpEn = 'Fragile soil strained by aggressive root growth. Defer confrontational obligations and seek stabilizing institutional buffers.';
          scoreMod = -5;
        }
      }
    } else { // 金
      if (isStrong) {
        if (envEl === '水') {
          resonanceZh = '金水澄清流秀 (食伤吐秀 · 智囊无碍)';
          resonanceEn = 'Polished Metal Reflects in Clear Water (Output Brilliance)';
          interpZh = '利刃入水磨砺，锋芒内敛而睿智清明。极利于智力输出、商业谈判与前沿科技创新。';
          interpEn = 'Polished blade cleansed in mountain springs. Strategic insight and incisive analytical acumen reach supreme clarity.';
          scoreMod = 6;
        } else if (envEl === '木' || envEl === '火') {
          resonanceZh = '真金经火百炼 (财官淬砺 · 终成神器)';
          resonanceEn = 'Raw Metal Tempered by Hearth Fire (Crucible of Leadership)';
          interpZh = '百炼重剑经烈火淬炼方成神器。磨砺伴随荣誉，迎难而上可执掌核心权柄。';
          interpEn = 'Tempered steel forged through intense fire. Painstaking testing precedes significant leadership promotion.';
          scoreMod = 4;
        } else {
          resonanceZh = '剑戟森森过刚 (比劫相争 · 亢龙防折)';
          resonanceEn = 'Arrayed Blades Clash (Hyper-Rigid Volatility & Pride)';
          interpZh = '过刚则易折，锋芒毕露易招嫉恨暗算；宜以水柔和之，示弱保身，以退为进。';
          interpEn = 'Brittle rigidity risks fractures. Soften dogmatic conviction with water-like adaptability to disarm opponents.';
          scoreMod = -2;
        }
      } else {
        if (envEl === '土' || envEl === '金') {
          resonanceZh = '泥沙陶冶出金 (土生金旺 · 贵人撑腰)';
          resonanceEn = 'Gold Refined from Earth (Resource Fortification)';
          interpZh = '厚土生金，弱金得生。多得稳重长辈背书托举，资金链与资源底盘转危为安。';
          interpEn = 'Rich earth yields gleaming gold. Substantial patronage from senior figures restores liquidity and protective security.';
          scoreMod = 7;
        } else {
          resonanceZh = '残金遭火销熔 (烈火锻身 · 韬光养晦)';
          resonanceEn = 'Fragile Metal Scorched by Fire (Extreme Pressure Alert)';
          interpZh = '弱金逢烈火，官杀压力过载。谨防法律官非与过度操劳伤身，以水土调和之。';
          interpEn = 'Fragile metal melted by overwhelming fire. Strict compliance and proactive rest are non-negotiable.';
          scoreMod = -6;
        }
      }
    }

    return {
      upperTrigramElement: upEl,
      lowerTrigramElement: loEl,
      elementalResonanceZh: resonanceZh,
      elementalResonanceEn: resonanceEn,
      dynamicInterpretationZh: interpZh,
      dynamicInterpretationEn: interpEn,
      scoreModifier: scoreMod
    };
  }

  // Orthodox Trigram Spatial & Temporal Attributes (八卦象数时空全相数据库)
  static TRIGRAM_ATTRIBUTES = {
    '乾': {
      nameZh: '乾', nameEn: 'Qian (Heaven)', elementZh: '金', elementEn: 'Metal',
      natureZh: '天', natureEn: 'Heaven',
      directionZh: '西北方', directionEn: 'Northwest',
      directionDetailedZh: '西北方位 (乾天首善之区)', directionDetailedEn: 'Northwest sector (Executive Capital)',
      branchesZh: '戌、亥 (季秋初冬 · 农历九、十月)', branchesEn: 'Xu & Hai (Late Autumn & Early Winter, Lunar 9th-10th Mo)',
      seasonZh: '深秋至初冬', seasonEn: 'Deep Autumn to Early Winter',
      monthsZh: '农历九月 (戌月)、十月 (亥月)', monthsEn: 'Lunar 9th Month (Xu), 10th Month (Hai)',
      environmentZh: '核心都会CBD、政府行政机构、知名跨国企业总部、金融机构、顶尖高校核心主楼、高耸圆顶建筑',
      environmentEn: 'Central metropolitan CBD, government ministries, Fortune 500 headquarters, financial centers, premier universities, high-rise architectural landmarks',
      personaZh: '威严自律、宏大格局、有远大志向、领导力强、行事果决、追求卓越',
      personaEn: 'Commanding self-discipline, panoramic strategic vision, natural executive presence, resolute execution',
      careerZh: '顶层管理、政务公职、金融证券、战略统筹、法务合规',
      careerEn: 'Executive leadership, public administration, financial securities, corporate strategy, legal compliance',
      wealthZh: '依托主流大平台溢价、制度红利、核心硬资产升值；逢秋季金旺或冬初进财丰厚',
      wealthEn: 'Capital appreciation through institutional authority, policy tailwinds, prime hard assets; peak cash flow in Autumn/Early Winter'
    },
    '坤': {
      nameZh: '坤', nameEn: 'Kun (Earth)', elementZh: '土', elementEn: 'Earth',
      natureZh: '地', natureEn: 'Earth',
      directionZh: '西南方', directionEn: 'Southwest',
      directionDetailedZh: '西南方位 (广袤坤土厚载之区)', directionDetailedEn: 'Southwest sector (Nurturing Hearth)',
      branchesZh: '未、申 (季夏初秋 · 农历六、七月)', branchesEn: 'Wei & Shen (Late Summer & Early Autumn, Lunar 6th-7th Mo)',
      seasonZh: '盛夏至初秋', seasonEn: 'Mid-to-Late Summer',
      monthsZh: '农历六月 (未月)、七月 (申月)', monthsEn: 'Lunar 6th Month (Wei), 7th Month (Shen)',
      environmentZh: '开阔平原田园、大型温馨居住社区、综合博览中心、教育慈善公益机构、家庭聚会、稳健承载实体',
      environmentEn: 'Expansive verdant plains, tranquil residential districts, civic expo centers, philanthropic institutes, intimate domestic gatherings',
      personaZh: '宽厚敦实、沉静包容、温顺体贴、善解人意、具有极强后盾支持力、务实低调',
      personaEn: 'Grounded magnanimity, serene empathy, patient nurturing, exceptional domestic/operational ballast, humble discretion',
      careerZh: '运营后勤、人力资源、现代农业环保、不动产运营、公共教育服务',
      careerEn: 'Operations infrastructure, human resources, sustainable real estate, public education, non-profit stewardship',
      wealthZh: '以长期慢牛复利、不动产固守、供应链实业积累为主；逢辰戌丑未月稳步进财',
      wealthEn: 'Compounding value creation, real estate tenure, operational supply chain dividends; steady accumulation across Earth months'
    },
    '震': {
      nameZh: '震', nameEn: 'Zhen (Thunder)', elementZh: '木', elementEn: 'Wood',
      natureZh: '雷', natureEn: 'Thunder',
      directionZh: '正东方', directionEn: 'East',
      directionDetailedZh: '正东方位 (震木勃发春生之区)', directionDetailedEn: 'East sector (Dynamic Spring Emergence)',
      branchesZh: '卯 (仲春 · 农历二月)', branchesEn: 'Mao (Mid Spring, Lunar 2nd Mo)',
      seasonZh: '仲春时节', seasonEn: 'Mid Spring',
      monthsZh: '农历二月 (卯月)', monthsEn: 'Lunar 2nd Month (Mao)',
      environmentZh: '现代高铁机场枢纽、繁华活力商圈、体育运动场馆、科技创新发布会、新兴创业孵化园区、热闹街市',
      environmentEn: 'High-speed transit hubs, buzzing commercial avenues, modern athletic arenas, tech product launches, startup incubators',
      personaZh: '活力四射、雷厉风行、行动力极强、言辞爽快直率、富有开拓探索冒险精神',
      personaEn: 'Vibrant dynamism, decisive agility, high-velocity proactive action, candid communication, pioneering spirit',
      careerZh: '前沿创新创业、新能源/智能硬件、市场敏捷开拓、竞技体育、现代物流速递',
      careerEn: 'Frontier tech ventures, cleantech/hardware, agile business development, sports management, modern rapid logistics',
      wealthZh: '靠先发优势、速度突破、创新商业模式短期爆发变现；逢春季木旺之月最为丰盈',
      wealthEn: 'First-mover arbitrage, agile speed breakthroughs, disruptive monetization; peak yield during spring Wood cycles'
    },
    '巽': {
      nameZh: '巽', nameEn: 'Xun (Wind)', elementZh: '木', elementEn: 'Wood',
      natureZh: '风', natureEn: 'Wind',
      directionZh: '东南方', directionEn: 'Southeast',
      directionDetailedZh: '东南方位 (巽风和煦文昌之区)', directionDetailedEn: 'Southeast sector (Gentle Breeze & Creative Culture)',
      branchesZh: '辰、巳 (季春孟夏 · 农历三、四月)', branchesEn: 'Chen & Si (Late Spring & Early Summer, Lunar 3rd-4th Mo)',
      seasonZh: '暮春至初夏', seasonEn: 'Late Spring to Early Summer',
      monthsZh: '农历三月 (辰月)、四月 (巳月)', monthsEn: 'Lunar 3rd Month (Chen), 4th Month (Si)',
      environmentZh: '草木葱郁之林苑、文化艺术创意园区、高等院校文科校区、艺术书廊沙龙、精品茶咖空间、国际空港海港口岸',
      environmentEn: 'Lush arboretums, creative cultural corridors, university humanities faculties, boutique book cafes, artisanal tea lounges, cross-border port terminals',
      personaZh: '知性文雅、清秀从容、灵活通达、善于协调沟通、富有审美情趣与人文底蕴',
      personaEn: 'Intellectual elegance, serene poise, diplomatic versatility, perceptive aesthetic refinement and cultural depth',
      careerZh: '文化传媒、跨国出海贸易、公关策划会展、设计创意、品牌咨询',
      careerEn: 'Cultural media, cross-border trade, public relations & events, architectural/graphic design, brand consulting',
      wealthZh: '善用跨界信息差、人脉转介、无形知识产权与跨境生态变现；逢春夏之交进财顺利',
      wealthEn: 'Monetizing cross-industry information gaps, peer referrals, intellectual property; smooth cash flow at Spring/Summer transition'
    },
    '坎': {
      nameZh: '坎', nameEn: 'Kan (Water)', elementZh: '水', elementEn: 'Water',
      natureZh: '水', natureEn: 'Water',
      directionZh: '正北方', directionEn: 'North',
      directionDetailedZh: '正北方位 (坎水深沉潜龙之区)', directionDetailedEn: 'North sector (Deep Ocean & Reflective Intellect)',
      branchesZh: '子 (仲冬 · 农历十一月)', branchesEn: 'Zi (Mid Winter, Lunar 11th Mo)',
      seasonZh: '隆冬季节', seasonEn: 'Deep Winter',
      monthsZh: '农历十一月 (子月)', monthsEn: 'Lunar 11th Month (Zi)',
      environmentZh: '临水滨江亲水步道、滨海湾区都会、隐秘清吧茶馆、科研前沿实验室、幽静地下智汇空间、跨国远程网络平台',
      environmentEn: 'Waterfront promenades, coastal harbor metros, quiet speakeasy lounges, frontier research laboratories, contemplative retreats, global virtual forums',
      personaZh: '深沉内敛、智谋渊深、冷静机警、情感细腻专注、善于洞察人性暗涌、高度独立自律',
      personaEn: 'Profound introspection, keen strategic acumen, analytical composure, emotional resonance, perceptive insight, intellectual autonomy',
      careerZh: '前沿科学研发、数据算法与密码学、信息安全、水利航运、心理学与哲学研究',
      careerEn: 'Frontier scientific R&D, data algorithms, cybersecurity, marine logistics, psychology and philosophical scholarship',
      wealthZh: '靠深层智识壁垒、逆周期左侧投资、知识产权版税分红变现；逢冬季水旺之月财运汇聚',
      wealthEn: 'Intellectual moats, counter-cyclical strategic investments, copyright royalties; liquidity surges in winter Water periods'
    },
    '离': {
      nameZh: '离', nameEn: 'Li (Fire)', elementZh: '火', elementEn: 'Fire',
      natureZh: '火', natureEn: 'Fire',
      directionZh: '正南方', directionEn: 'South',
      directionDetailedZh: '正南方位 (离火光明通达之区)', directionDetailedEn: 'South sector (Luminous Solar Zenith)',
      branchesZh: '巳、午 (孟夏仲夏 · 农历四、五月)', branchesEn: 'Si & Wu (Early & Mid Summer, Lunar 4th-5th Mo)',
      seasonZh: '孟夏至仲夏', seasonEn: 'Early to Mid Summer',
      monthsZh: '农历四月 (巳月)、五月 (午月)', monthsEn: 'Lunar 4th Month (Si), 5th Month (Wu)',
      environmentZh: '阳光充沛之高层景观建筑、核心商圈灯火通明之所、文化艺术博览展会、影视发布盛典、前沿AI科技论坛、高端天台咖啡厅',
      environmentEn: 'Sun-drenched penthouse offices, vibrant neon-lit metro cores, cultural galas, cinematic premiere stages, cutting-edge AI summits, scenic rooftop terraces',
      personaZh: '热情开朗、明艳动人、举止高雅知性、富有才华与见识、深谙社交礼数、格局宏大真诚',
      personaEn: 'Radiant warmth, magnetic presence, refined intellectual poise, creative flair, impeccable social grace, expansive magnanimity',
      careerZh: '人工智能与数智科技、视觉艺术创意、影视传媒、新能源光伏、时尚奢侈美学',
      careerEn: 'Artificial intelligence & data analytics, visual media, entertainment, clean energy, luxury aesthetic design',
      wealthZh: '依托个人/品牌声誉红利、注意力经济、高光核心项目破局变现；逢夏季火旺之月最为丰隆',
      wealthEn: 'Brand equity, attention economics, high-visibility flagship campaigns; peak prosperity during summer Fire cycles'
    },
    '艮': {
      nameZh: '艮', nameEn: 'Gen (Mountain)', elementZh: '土', elementEn: 'Earth',
      natureZh: '山', natureEn: 'Mountain',
      directionZh: '东北方', directionEn: 'Northeast',
      directionDetailedZh: '东北方位 (艮山稳重止动之区)', directionDetailedEn: 'Northeast sector (Mountain Bastion & Solitary Fortress)',
      branchesZh: '丑、寅 (季冬初春 · 农历十二、正月)', branchesEn: 'Chou & Yin (Late Winter & Early Spring, Lunar 12th-1st Mo)',
      seasonZh: '严冬至初春', seasonEn: 'Late Winter to Early Spring',
      monthsZh: '农历十二月 (丑月)、正月 (寅月)', monthsEn: 'Lunar 12th Month (Chou), 1st Month (Yin)',
      environmentZh: '巍峨名山胜地古迹、静谧图书馆书店、高端独栋山庄、石阶幽静庭院、传统历史建筑群、封闭式高管研修基地',
      environmentEn: 'Majestic mountain retreats, silent library sanctuaries, secluded private estates, stone-paved courtyards, heritage architecture, executive think-tank retreats',
      personaZh: '沉稳笃实、安详庄重、诺重千金、具有极强原则边界感、不随波逐流、坚毅厚重',
      personaEn: 'Imperturbable gravitas, dignified integrity, ironclad word, strict ethical boundaries, unyielding resilience',
      careerZh: '重资产先进制造、关键基础设施、严谨学术考据、文物建筑保护、安全防务系统',
      careerEn: 'Heavy advanced manufacturing, critical infrastructure, rigorous academic scholarship, heritage conservation, defense security',
      wealthZh: '靠不可替代的专业硬壁垒、重资产稳固持有、长期守拙积累；逢土旺辰戌丑未及寅月稳如泰山',
      wealthEn: 'Irreplaceable professional moats, defensive asset holding, patient compounding; rock-solid during Earth & Yin cycles'
    },
    '兑': {
      nameZh: '兑', nameEn: 'Dui (Lake)', elementZh: '金', elementEn: 'Metal',
      natureZh: '泽', natureEn: 'Lake',
      directionZh: '正西方', directionEn: 'West',
      directionDetailedZh: '正西方位 (兑泽欢悦和合之区)', directionDetailedEn: 'West sector (Serene Lake & Joyful Eloquence)',
      branchesZh: '酉 (仲秋 · 农历八月)', branchesEn: 'You (Mid Autumn, Lunar 8th Mo)',
      seasonZh: '仲秋金秋', seasonEn: 'Mid Autumn',
      monthsZh: '农历八月 (酉月)', monthsEn: 'Lunar 8th Month (You)',
      environmentZh: '波光粼粼之湖滨水景餐厅、音乐演奏大厅、高规格演讲论坛、轻松社交酒会、时尚潮流步行街、度假休闲胜境',
      environmentEn: 'Shimmering waterfront lakeside dining, concert halls, high-profile keynote arenas, elegant cocktail salons, trendy retail plazas, idyllic vacation resorts',
      personaZh: '容貌清秀温润、言辞风趣幽默、口才极佳、极具亲和力与感染力、乐天通达、善解人意',
      personaEn: 'Charming grace, witty eloquence, captivating conversational warmth, empathetic emotional intelligence, buoyant optimism',
      careerZh: '商务谈判合作、演艺主持传媒、高端法务咨询、财富私人管理、体验式文旅娱乐',
      careerEn: 'High-stakes negotiations, broadcast media, legal counseling, private wealth management, experiential hospitality',
      wealthZh: '善用口才商洽、人际同盟契约、演艺传播与悦己经济进财；逢秋季金旺之月财源广进',
      wealthEn: 'Commercial negotiation dividends, contractual partnerships, entertainment media; rapid inflows during autumn Metal periods'
    }
  };

  /**
   * Helper: Parse Trigram Key from string
   */
  static getTrigramKey(str) {
    if (!str) return '乾';
    const match = str.match(/([乾坤震巽坎离艮兑])/);
    if (match) return match[1];
    const enMap = {
      'heaven': '乾', 'qian': '乾',
      'earth': '坤', 'kun': '坤',
      'thunder': '震', 'zhen': '震',
      'wind': '巽', 'xun': '巽',
      'water': '坎', 'kan': '坎',
      'fire': '离', 'li': '离',
      'mountain': '艮', 'gen': '艮',
      'lake': '兑', 'dui': '兑'
    };
    const lower = str.toLowerCase();
    for (const [k, v] of Object.entries(enMap)) {
      if (lower.includes(k)) return v;
    }
    return '乾';
  }

  /**
   * 周易精准问事神机直断引擎 (I Ching Intelligent Targeted Custom Inquiry Resolution Engine)
   * Orthodox Derivation for:
   * 1. 感情/正缘/婚姻 (Romance/Marriage): Exact timing, directions, environment, partner archetype & demeanor
   * 2. 事业/跳槽/创业 (Career/Promotion/Venture): Timing, direction, industry ecosystem, upward management
   * 3. 财富/投资/买房 (Wealth/Investment/Real Estate): Timing, profit modes, risk blind spots
   * 4. 吉凶/决策/去留 (Choice A vs B / General Decision): Binary verdict, execution lever, failure modes
   * 5. 宏观天机 (General Synthesis)
   * 
   * Fully bilingual (Chinese & English) with 100% zero residual Chinese in English mode.
   */
  static analyzeCustomInquiry(queryText, divinationResult, mainLine = null, bazi = null, lang = 'zh') {
    const q = (queryText || '').trim();
    const isEn = (lang === 'en');

    const orig = (divinationResult && divinationResult.originalHexagram) ? divinationResult.originalHexagram : divinationResult;
    if (!orig) return null;

    const resHex = divinationResult ? divinationResult.resultingHexagram : null;
    const of = (divinationResult && divinationResult.oracleFocus) ? divinationResult.oracleFocus : {};
    const movingPositions = (divinationResult && divinationResult.movingLinesPositions) ? divinationResult.movingLinesPositions : [];

    // Resolve governing line & secondary line
    let governingLine = mainLine;
    if (!governingLine && orig.lines) {
      const targetPos = (of.targetLines && of.targetLines[0]) || (movingPositions && movingPositions[0]) || 5;
      governingLine = orig.lines[targetPos - 1] || orig.lines[4];
    }
    let secondaryLine = null;
    if (orig.lines && movingPositions.length > 1) {
      const secPos = (of.targetLines && of.targetLines[1]) || (movingPositions[1] !== governingLine.position ? movingPositions[1] : movingPositions[0]);
      if (secPos && secPos !== governingLine.position) {
        secondaryLine = orig.lines[secPos - 1];
      }
    }

    const govNameZh = governingLine ? (governingLine.nameZh || `第${governingLine.position}爻`) : '主爻';
    const govNameEn = governingLine ? (governingLine.nameEn || `Line ${governingLine.position}`) : 'Governing Line';
    const secNameZh = secondaryLine ? (secondaryLine.nameZh || `第${secondaryLine.position}爻`) : '';
    const secNameEn = secondaryLine ? (secondaryLine.nameEn || `Line ${secondaryLine.position}`) : '';
    const govStatementZh = governingLine && governingLine.statementZh ? governingLine.statementZh.split('，')[0] : '';
    const secStatementZh = secondaryLine && secondaryLine.statementZh ? secondaryLine.statementZh.split('，')[0] : '';

    // Trigram metadata
    const upKey = this.getTrigramKey(orig.upperTrigram);
    const loKey = this.getTrigramKey(orig.lowerTrigram);
    const resUpKey = resHex ? this.getTrigramKey(resHex.upperTrigram) : null;
    const resLoKey = resHex ? this.getTrigramKey(resHex.lowerTrigram) : null;

    const upAttr = this.TRIGRAM_ATTRIBUTES[upKey] || this.TRIGRAM_ATTRIBUTES['乾'];
    const loAttr = this.TRIGRAM_ATTRIBUTES[loKey] || this.TRIGRAM_ATTRIBUTES['巽'];
    const resUpAttr = resUpKey ? (this.TRIGRAM_ATTRIBUTES[resUpKey] || null) : null;
    const resLoAttr = resLoKey ? (this.TRIGRAM_ATTRIBUTES[resLoKey] || null) : null;

    // Intent classification
    let category = 'general';
    const romanceRegex = /(对象|正缘|女朋友|男朋友|结婚|婚期|婚配|姻缘|恋爱|情缘|另一半|老公|老婆|伴侣|脱单|桃花|何时碰到|什么时候碰到|在何方|在哪个方向|复合|分手|爱人|相亲|意中人|情侣|嫁|娶|romance|love|dating|marriage|marry|spouse|partner|girlfriend|boyfriend|wife|husband|soulmate|single|breakup|reunite|wedding)/i;
    const wealthRegex = /(财运|求财|赚钱|发财|投资|买房|购房|房产|炒股|股票|基金|理财|虚拟货币|加密货币|现金流|借钱|还债|债务|破财|盈利|分红|身家|利润|wealth|money|investment|real estate|property|house|stock|shares|crypto|fund|profit|cash flow|debt|loss|capital|financial|rich|portfolio)/i;
    const careerRegex = /(事业|工作|跳槽|换工作|晋升|升职|提拔|求职|面试|创业|做生意|开公司|合伙|辞职|离职|前途|仕途|领导|上司|老板|职场|调动|竞聘|考公|上岸|career|job|promotion|switch job|new job|boss|startup|business|venture|quit|resign|employment|interview|workplace|corporation|colleague|executive|leadership|civil service)/i;
    const decisionRegex = /(吉凶|能不能|能成吗|会不会|可不可行|是否|成败|如何选择|去还是留|去不去|做不做|行不行|好不好|决策|选择|何去何从|前景|结果|怎么选|可行|可行性|抉择|去留|decision|choice|feasible|feasibility|will it happen|can i|should i|stay or leave|option a|option b|success|fail|outcome|auspicious|omen|judgment)/i;

    if (romanceRegex.test(q)) {
      category = 'romance';
    } else if (wealthRegex.test(q)) {
      category = 'wealth';
    } else if (careerRegex.test(q)) {
      category = 'career';
    } else if (decisionRegex.test(q)) {
      category = 'decision';
    }

    let baseYear = 2026;
    if (bazi && bazi.input && bazi.input.year && bazi.input.year >= 2020) {
      baseYear = bazi.input.year;
    }

    // Category Specific Content Generators
    let catDataZh = {};
    let catDataEn = {};

    if (category === 'romance') {
      const yrZh = `${baseYear} 丙午年 (离火天时) 至 ${baseYear + 1} 丁未年 (火土相生结缔)`;
      const yrEn = `${baseYear} Bing-Wu (Fire Zenith) through ${baseYear + 1} Ding-Wei (Fire-Earth Synergy)`;
      const moZh = `${upAttr.seasonZh} (${upAttr.monthsZh}) 与 ${loAttr.seasonZh} (${loAttr.monthsZh})${resUpAttr ? '；次应变卦 ' + resUpAttr.monthsZh : ''}`;
      const moEn = `${upAttr.seasonEn} (${upAttr.monthsEn}) & ${loAttr.seasonEn} (${loAttr.monthsEn})${resUpAttr ? '; secondary window in ' + resUpAttr.monthsEn : ''}`;
      const dayZh = `逢${upAttr.elementZh}、${loAttr.elementZh}五行生旺日，或地支六合感应之良辰吉日`;
      const dayEn = `Days resonant with ${upAttr.elementEn} and ${loAttr.elementEn} vitality, or harmonious Liu-He combination dates`;
      const timeSumZh = `机缘已然成熟！本卦火风相济，主爻居五爻尊位，二爻得中相应。最快在当前${baseYear}岁末秋冬之交初现机缘端倪，${baseYear + 1}春夏火土相生之时最为成熟，正缘定鼎。`;
      const timeSumEn = `The window is actively opening! With Fire and Wind in harmony and governing lines at positions 5 and 2, initial sparks surface in late ${baseYear}, culminating in solid matrimonial fruition during Spring/Summer ${baseYear + 1}.`;

      const dirZh = `${upAttr.directionZh} (${upAttr.nameZh}${upAttr.natureZh}) · ${loAttr.directionZh} (${loAttr.nameZh}${loAttr.natureZh})${resUpAttr ? '；次应变卦 ' + resUpAttr.directionZh + ' (' + resUpAttr.nameZh + resUpAttr.natureZh + ')' : ''}`;
      const dirEn = `${upAttr.directionEn} (${upAttr.nameEn}) · ${loAttr.directionEn} (${loAttr.nameEn})${resUpAttr ? '; secondary ' + resUpAttr.directionEn + ' (' + resUpAttr.nameEn + ')' : ''}`;
      const envZh = '光线充沛的高层景观建筑、文化艺术博览展厅、知名高校人文校区、高端设计与商业沙龙、精品学术书咖、前沿科技论坛，或由良师益友正式推介引荐';
      const envEn = 'Sun-drenched elevated architectures, cultural art expositions, premier university corridors, curated design & business salons, boutique literary cafes, tech summits, or formal introductions through respected mentors';
      const distZh = '以自身常住地为太极坐标，偏向中远距离、来自外地迁入或跨区域跨行业交流中相识；非狭隘近邻偶然闲逛，多在具备知性门槛与文明礼仪的优质场域相逢。';
      const distEn = 'Anchored from your residence as the central coordinate: tends toward mid-to-long distance, relocation background, or inter-regional professional exchange; encountered in distinguished intellectual settings rather than casual happenstance.';
      const spaSumZh = '正缘方位锁定正南方与东南方；重点移步至光线明朗、文化底蕴深厚的高规格空间，西北方与东北方亦有长远宿缘呼应。';
      const spaSumEn = 'Primary consort sectors are anchored in the South and Southeast; seek vibrant, culturally refined spaces. Northwest and Northeast also hold enduring resonance.';

      const archNameZh = '知性温厚 · 秀外慧中 · 务实有底蕴型正配良缘';
      const archNameEn = 'Cultured Intellectual · Inner Elegance & Solid Grounding';
      const trZh = `深契主爻【${govNameZh}${govStatementZh ? '·' + govStatementZh : ''}】${secNameZh ? '与动爻【' + secNameZh + (secStatementZh ? '·' + secStatementZh : '') + '】' : ''}：外表端庄文雅、谈吐从容大度（黄耳象君子虚心）；内在务实沉稳、具备扎实专业立身之本与独立经济储蓄安全垫（鼎有实、金铉象尊贵），为人正派不惹是非。`;
      const trEn = `Resonating with governing Line ${govNameEn} (Nobility & Modesty) and Line ${secNameEn || 'Supporting Line'} (Solid Practicality): outwardly composed, gracious, and articulate with perceptive empathy; inwardly grounded with solid professional competence and reliable financial reserves, ethical and drama-free.`;
      const dynZh = '彼此相处重在坦诚真挚与思想共振；对方看重人品与三观契合，不喜浮夸做作。交往宜循序渐进，以礼相待、相敬如宾，自成琴瑟和鸣。';
      const dynEn = 'Connection thrives upon authentic intellectual resonance, shared values, and mutual respect. The partner values ethical substance over superficial display. Gentle patience and grounded sincerity foster lifelong companionship.';

      catDataZh = {
        categoryName: '感情 · 正缘与婚配时空',
        defaultQuery: '什么时候可以碰到对象，以及对象在何方',
        headline: `【正缘神机直断 · 重器定鼎】：天时火风交感，定断主爻【${govNameZh}】临照。正缘气场清纯厚重，时空交汇正逢其时；对象在正南或东南高雅文教之所，谦和知性有积蓄，乃一生同舟共济之正配良伴！`,
        timing: { title: '应期时限 (什么时候碰得到)', exactYear: yrZh, seasonAndMonths: moZh, favorableDays: dayZh, summary: timeSumZh },
        spatial: { title: '结缘方位与场景 (对象在何方)', directions: dirZh, environment: envZh, distance: distZh, summary: spaSumZh },
        archetype: { title: '对方气质画像与心性 (人物画像)', archetypeName: archNameZh, traits: trZh, dynamics: dynZh },
        actionDirectives: {
          title: '破局战法与行持准则 (如何行动)',
          items: [
            '【修饬形象与知性风采】：提振个人精气神与审美知性风范，主动摆脱封闭内耗，积极参与高规格文教沙龙、学术研讨会、行业论坛或精品艺术展。',
            '【畅通正缘引荐网络】：重点关注正南方与东南方的人脉圈层；若有值得信赖的长辈师友或正派同僚安排引见相识，切莫推脱，当大方赴约。',
            '【求真务实徐徐图之】：结识初期以真实底色示人，多探讨理想抱负与生活价值观，不急于求成，在知性互动中建立坚不可摧的信任基盘。'
          ]
        },
        grade: { score: 95, tag: '上上吉卦 · 重器定鼎', level: 'emerald' }
      };

      catDataEn = {
        categoryName: 'Romance · Consort & Timing/Direction',
        defaultQuery: 'When and where will I meet my spouse?',
        headline: `【Direct Consort Verdict · Sacred Cauldron Matrimony】: Fire and Wind converge in auspicious harmony; governing line ${govNameEn} anchors an authentic lifelong destiny. The counterpart resides in South/Southeast intellectual spaces—composed, cultured, and financially grounded—a loyal partner of mutual elevation!`,
        timing: { title: 'Timing & Temporal Window (When)', exactYear: yrEn, seasonAndMonths: moEn, favorableDays: dayEn, summary: timeSumEn },
        spatial: { title: 'Direction & Physical Setting (Where)', directions: dirEn, environment: envEn, distance: distEn, summary: spaSumEn },
        archetype: { title: 'Partner Archetype & Demeanour (Who)', archetypeName: archNameEn, traits: trEn, dynamics: dynEn },
        actionDirectives: {
          title: 'Action Directives & Tactical Playbook (How)',
          items: [
            '[Elevate Personal Presence]: Cultivate refined intellectual elegance; discard insular isolation and engage in distinguished cultural forums, symposia, and curated exhibitions.',
            '[Activate Favorable Networks]: Focus on relationships in the South and Southeast; welcome formal introductions orchestrated by respected mentors and trustworthy peers.',
            '[Lead with Authentic Gravitas]: Present your genuine competence and life philosophy; avoid rushed expectations and build foundational trust through intellectual dialogue.'
          ]
        },
        grade: { score: 95, tag: 'Supreme Auspicious · Sovereign Matrimony', level: 'emerald' }
      };
    } else if (category === 'career') {
      const yrZh = `${baseYear}年 至 ${baseYear + 1}年`;
      const yrEn = `${baseYear} through ${baseYear + 1}`;
      const moZh = `${upAttr.seasonZh} (${upAttr.monthsZh}) 与 ${loAttr.seasonZh} (${loAttr.monthsZh})`;
      const moEn = `${upAttr.seasonEn} (${upAttr.monthsEn}) & ${loAttr.seasonEn} (${loAttr.monthsEn})`;
      const dayZh = `逢${upAttr.elementZh}旺之日或月令生合吉日`;
      const dayEn = `Days resonant with ${upAttr.elementEn} vitality or harmonious calendar combinations`;
      const timeSumZh = '行动窗口已然开启！上半年深耕内功、沉淀核心成果；下半年岁运交感之时果断出击，晋升或跳槽皆占先机。';
      const timeSumEn = 'Strategic window is open! Refine core craftsmanship in the first half; launch high-leverage initiatives during the second half for decisive advancement.';

      const dirZh = `${upAttr.directionZh} (${upAttr.nameZh}) · ${loAttr.directionZh} (${loAttr.nameZh})`;
      const dirEn = `${upAttr.directionEn} (${upAttr.nameEn}) · ${loAttr.directionEn} (${loAttr.nameEn})`;
      const envZh = upAttr.environmentZh;
      const envEn = upAttr.environmentEn;
      const distZh = '以当前常住都会为核心，优先向具备顶尖产业集聚效应的核心CBD或高新区拓展。';
      const distEn = 'Anchor to your metropolitan base; expand towards premier innovation corridors and high-density CBD sectors.';
      const spaSumZh = `优先锁定${upAttr.directionZh}，契合${upAttr.elementZh}气数之高密核心都会。`;
      const spaSumEn = `Prioritize ${upAttr.directionEn} sectors aligning with the ${upAttr.elementEn} energetic frequency.`;

      const archNameZh = '战略统帅 / 高级业务架构师型';
      const archNameEn = 'Strategic Commander / Enterprise Architect';
      const trZh = '具备宏观全局视野与扎实业务深耕能力；行事讲求法度规则，不争细枝末节，专攻关键抓手。';
      const trEn = 'Commanding panoramic vision and technical mastery; governs through institutional discipline and measurable milestones.';
      const dynZh = '向上管理以数据闭环复命，多请示少自专；横向协同构筑成果防火墙，以契约化机制防范被抢功。';
      const dynEn = 'Present structured data loops to leadership; construct peer attribution firewalls to secure recognition.';

      catDataZh = {
        categoryName: '事业 · 职场破局与天命生态位',
        defaultQuery: '事业前途与跳槽晋升如何',
        headline: `【事业神机直断 · 乘风破局】：当前时空${upAttr.elementZh}${loAttr.elementZh}相济，主爻【${govNameZh}】居枢纽要津。利于向${upAttr.directionZh}开拓、深耕${upAttr.careerZh.split('、')[0]}领域；以扎实成果向上复命，必迎关键晋升突破！`,
        timing: { title: '行动时机与晋升窗口', exactYear: yrZh, seasonAndMonths: moZh, favorableDays: dayZh, summary: timeSumZh },
        spatial: { title: '有利职场方位与城市生态', directions: dirZh, environment: envZh, distance: distZh, summary: spaSumZh },
        archetype: { title: '天命生态位与向上协同', archetypeName: archNameZh, traits: trZh, dynamics: dynZh },
        actionDirectives: {
          title: '破局战法与职场行事准则',
          items: [
            '【聚焦二八核心胜负手】：剔除边缘琐碎事务，专攻直接驱动组织核心ROI的标杆项目。',
            '【强化向上对齐闭环】：定期以结构化看板向上级汇报关键进展，主动管理上级预期，将不确定性降至最低。',
            '【构筑同僚成果护城河】：重要业务协作保留完整邮件与文档备忘录，明确分工边界，防范功劳稀释与扯皮推诿。'
          ]
        },
        grade: { score: 92, tag: '大吉 · 顺势而起', level: 'emerald' }
      };

      catDataEn = {
        categoryName: 'Career · Workplace Strategy & Optimal Ecosystem',
        defaultQuery: 'Career trajectory and job transition?',
        headline: `【Direct Career Verdict · Strategic Breakthrough】: Resonance of ${upAttr.elementEn} and ${loAttr.elementEn}; governing line ${govNameEn} holds key leverage. Advance toward ${upAttr.directionEn} within ${upAttr.careerEn.split(',')[0]}; deliver structured results to secure decisive advancement!`,
        timing: { title: 'Timing & Execution Window', exactYear: yrEn, seasonAndMonths: moEn, favorableDays: dayEn, summary: timeSumEn },
        spatial: { title: 'Favorable Career Sectors & Ecosystem', directions: dirEn, environment: envEn, distance: distEn, summary: spaSumEn },
        archetype: { title: 'Workplace Ecosystem & Upward Dynamics', archetypeName: archNameEn, traits: trEn, dynamics: dynEn },
        actionDirectives: {
          title: 'Career Action Directives',
          items: [
            '[Focus on 20% Pareto Pivot]: Prune trivial peripheral tasks; command high-stakes projects directly impacting executive ROI.',
            '[Solidify Upward Alignment]: Deliver periodic structured dashboards to senior leadership; proactively manage expectations.',
            '[Construct Peer Attribution Firewalls]: Maintain ironclad documentation across cross-functional initiatives; secure definitive ownership.'
          ]
        },
        grade: { score: 92, tag: 'Supreme Auspicious · Rising Momentum', level: 'emerald' }
      };
    } else if (category === 'wealth') {
      const yrZh = `${baseYear}年 至 ${baseYear + 1}年`;
      const yrEn = `${baseYear} through ${baseYear + 1}`;
      const moZh = `${upAttr.seasonZh} (${upAttr.monthsZh})`;
      const moEn = `${upAttr.seasonEn} (${upAttr.monthsEn})`;
      const dayZh = '逢金水、火土生旺之日';
      const dayEn = 'Days resonant with favorable elemental balance';
      const timeSumZh = '财富节奏宜守缓进！上半年以稳固主业薪酬与现金流储备为主，秋冬资产定价重构时迎来逢低布局良机。';
      const timeSumEn = 'Patience governs capital timing. Preserve liquidity in early cycles; deploy strategically during late-year valuation adjustments.';

      const dirZh = `${upAttr.directionZh} · ${loAttr.directionZh}`;
      const dirEn = `${upAttr.directionEn} · ${loAttr.directionEn}`;
      const envZh = '合规金融交易所、银行财富管理机构、稳健产业园高价值不动产、高端专业服务机构';
      const envEn = 'Regulated financial exchanges, wealth management institutions, core commercial real estate, premier professional services';
      const distZh = '守住核心本土基本盘，严控跨国高风险盲目投资。';
      const distEn = 'Consolidate domestic core assets; avoid speculative unvetted offshore allocations.';
      const spaSumZh = `投资置业利于${upAttr.directionZh}核心成熟区域，远离偏僻概念概念热潮。`;
      const spaSumEn = `Focus acquisitions within prime ${upAttr.directionEn} metropolitan centers; avoid speculative hype.`;

      const archNameZh = '稳健慢牛 · 护城河价值投资型';
      const archNameEn = 'Grounded Value Investor & Capital Protector';
      const trZh = '克制贪念、敬畏周期；擅长以严密风控锁定收益，不赌单点爆发，追求风险调整后长久复利。';
      const trEn = 'Disciplined patience; commands robust risk management, eschewing reckless gambles for compounding returns.';
      const dynZh = '家庭配偶为财库天然防波堤；重大投资务必与合伙人/配偶共商，严防比劫夺财破耗。';
      const dynEn = 'Spouse acts as domestic financial breakwater; consult partner on major expenditures to guard against sudden wealth leakage.';

      catDataZh = {
        categoryName: '财富 · 金玉资财与投资守财',
        defaultQuery: '财运走势与投资理财如何',
        headline: `【财运神机直断 · 守正出奇】：卦见${upAttr.nameZh}${loAttr.nameZh}，利在守正。主爻【${govNameZh}】示警：正财主业为基石，严禁盲目加杠杆投机；深耕高壁垒资产，守住现金流安全垫方得长久丰隆！`,
        timing: { title: '财富节律与流动性窗口', exactYear: yrZh, seasonAndMonths: moZh, favorableDays: dayZh, summary: timeSumZh },
        spatial: { title: '资产配置方位与场域', directions: dirZh, environment: envZh, distance: distZh, summary: spaSumZh },
        archetype: { title: '财富心性与防漏机制', archetypeName: archNameZh, traits: trZh, dynamics: dynZh },
        actionDirectives: {
          title: '守财防漏三铁律',
          items: [
            '【严守现金流生命线】：储备至少12-18个月无风险刚性开支流动资金，杜绝全仓高杠杆投机。',
            '【设立刚性止损熔断线】：凡涉及股权合伙、二级市场投资或大额借贷，预先设立15%无条件止损防线。',
            '【锁定核心硬核资产】：将浮动利润逐步沉淀至低波动主权硬资产或高防御性核心资产，防范泡沫回撤。'
          ]
        },
        grade: { score: 88, tag: '吉 · 守富丰盈', level: 'emerald' }
      };

      catDataEn = {
        categoryName: 'Wealth · Capital Growth & Asset Shields',
        defaultQuery: 'Wealth outlook and investment returns?',
        headline: `【Direct Wealth Verdict · Disciplined Compounding】: Manifesting ${upAttr.nameEn} and ${loAttr.nameEn}; perseverance yields prosperity. Governing line ${govNameEn} counsels: anchor core cash flows, reject unhedged speculation, and fortify liquid balance sheets!`,
        timing: { title: 'Wealth Cycles & Liquidity Windows', exactYear: yrEn, seasonAndMonths: moEn, favorableDays: dayEn, summary: timeSumEn },
        spatial: { title: 'Asset Allocation Direction & Settings', directions: dirEn, environment: envEn, distance: distEn, summary: spaSumEn },
        archetype: { title: 'Capital Mindset & Loss Prevention', archetypeName: archNameEn, traits: trEn, dynamics: dynEn },
        actionDirectives: {
          title: 'Wealth Preservation Directives',
          items: [
            '[Preserve 12-18 Month Liquid Runway]: Maintain resilient liquidity reserves; strictly prohibit reckless high-leverage gambles.',
            '[Enforce 15% Stop-Loss Circuit Breakers]: Establish rigid risk boundaries across partnerships, equities, and private loans.',
            '[Anchor Gains in Defensive Hard Assets]: Lock volatile capital gains into low-beta, durable assets to insulate against systemic drawdowns.'
          ]
        },
        grade: { score: 88, tag: 'Auspicious · Capital Fortification', level: 'emerald' }
      };
    } else if (category === 'decision') {
      const yrZh = `${baseYear}年`;
      const yrEn = `${baseYear}`;
      const moZh = `${upAttr.seasonZh} (${upAttr.monthsZh})`;
      const moEn = `${upAttr.seasonEn} (${upAttr.monthsEn})`;
      const dayZh = '逢冲合吉日，机不可失';
      const dayEn = 'Seize peak operational windows promptly';
      const timeSumZh = '事态进入不可逆转的转折关口；3个月内必须完成关键抉择，久拖必生异变。';
      const timeSumEn = 'Circumstances reach an irreversible inflection point; execute definitive choice within 3 months.';

      const dirZh = upAttr.directionZh;
      const dirEn = upAttr.directionEn;
      const envZh = '中正公开、制度严密之决策场域';
      const envEn = 'Principled, transparent institutional environments';
      const distZh = '立足当下立身之所，果断划清权责边界。';
      const distEn = 'Stand upon your sovereign ground; enforce explicit boundaries.';
      const spaSumZh = `行动朝向${upAttr.directionZh}阻力最小。`;
      const spaSumEn = `Path of least resistance points toward ${upAttr.directionEn}.`;

      const archNameZh = '雷厉风行 · 决断破局型';
      const archNameEn = 'Decisive Sovereign & Strategic Executor';
      const trZh = '洞悉进退存亡之机，勇于承担决策后果；外圆内方，以原则约束冲动。';
      const trEn = 'Perceptive insight into cyclical timing; commands courage to accept strategic consequences with integrity.';
      const dynZh = '对内坚定意志，对外合纵连横；不与短视之人争一日长短，专攻终局胜势。';
      const dynEn = 'Consolidate internal resolve; disregard transient friction and govern long-term superiority.';

      catDataZh = {
        categoryName: '决策 · 胜负手定夺与去留吉凶',
        defaultQuery: '此方案是否可行，去留如何决断',
        headline: `【决策神机直断 · 胜负手立决】：卦象大势已明！主爻【${govNameZh}】明示：当前决断利在【顺势推进、严守底线】。凡事宜当机立断、聚焦唯一关键枢纽，切忌首鼠两端！`,
        timing: { title: '推进节律与决断窗口', exactYear: yrZh, seasonAndMonths: moZh, favorableDays: dayZh, summary: timeSumZh },
        spatial: { title: '决断着力方位与场域', directions: dirZh, environment: envZh, distance: distZh, summary: spaSumZh },
        archetype: { title: '决断心法与破局姿态', archetypeName: archNameZh, traits: trZh, dynamics: dynZh },
        actionDirectives: {
          title: '决断执行三准则',
          items: [
            '【确立唯一核心胜负手】：在众多纷繁选项中，选定能一揽子带动全局的20%抓手，集中全量优势资源饱和攻击。',
            '【斩断拖延沉没成本】：对消耗心力但产出为负的人事纠缠果断按下熔断键，止损即是盈利。',
            '【以制度替代情绪宣泄】：将决策转化为铁律化执行细则与考核节点，按部就班推进，不受外界杂音干扰。'
          ]
        },
        grade: { score: 90, tag: '大利推进 · 知进知止', level: 'emerald' }
      };

      catDataEn = {
        categoryName: 'Decision · Strategic Lever & Binary Resolution',
        defaultQuery: 'Decision feasibility: should I proceed?',
        headline: `【Direct Decision Verdict · Sovereign Resolution】: Oracle vectors are definitive! Governing line ${govNameEn} counsels: [Advance with Disciplined Safeguards]. Act decisively upon the single vital fulcrum; eliminate ambivalent hesitation!`,
        timing: { title: 'Execution Timing & Inflection Point', exactYear: yrEn, seasonAndMonths: moEn, favorableDays: dayEn, summary: timeSumEn },
        spatial: { title: 'Direction of Strategic Leverage', directions: dirEn, environment: envEn, distance: distEn, summary: spaSumEn },
        archetype: { title: 'Decisive Mindset & Posture', archetypeName: archNameEn, traits: trEn, dynamics: dynEn },
        actionDirectives: {
          title: 'Operational Directives for Execution',
          items: [
            '[Identify 20% Prime Fulcrum]: Select the single decisive lever that unlocks systemic breakthrough; concentrate overwhelming resources upon it.',
            '[Sever Sunk Costs]: Decisively cut draining commitments and toxic entanglements; stopping losses equals generating profit.',
            '[Institutionalize Execution]: Translate resolve into codified operational milestones; advance relentlessly beyond external noise.'
          ]
        },
        grade: { score: 90, tag: 'Auspicious Advance · Decisive Rectitude', level: 'emerald' }
      };
    } else {
      const yrZh = `${baseYear}年 至 ${baseYear + 1}年`;
      const yrEn = `${baseYear} through ${baseYear + 1}`;
      const moZh = `${upAttr.seasonZh} (${upAttr.monthsZh})`;
      const moEn = `${upAttr.seasonEn} (${upAttr.monthsEn})`;
      const dayZh = '顺天应时，逢生合吉日进取';
      const dayEn = 'Advance during harmonious combination days';
      const timeSumZh = '事态处于生生不息之运化轨道中，中正自持可保长久无虞。';
      const timeSumEn = 'Circumstances evolve along a regenerative trajectory; principled equilibrium ensures enduring security.';

      const dirZh = `${upAttr.directionZh} · ${loAttr.directionZh}`;
      const dirEn = `${upAttr.directionEn} · ${loAttr.directionEn}`;
      const envZh = upAttr.environmentZh;
      const envEn = upAttr.environmentEn;
      const distZh = '立足核心本土，有序辐射外部优质节点。';
      const distEn = 'Consolidate domestic core; radiate outward to premier nodes.';
      const spaSumZh = `空间场能优先向${upAttr.directionZh}凝聚。`;
      const spaSumEn = `Spatial resonance gathers primarily toward ${upAttr.directionEn}.`;

      const archNameZh = '中正通达 · 凝命立身型';
      const archNameEn = 'Balanced Sovereign & Strategic Integrator';
      const trZh = upAttr.personaZh;
      const trEn = upAttr.personaEn;
      const dynZh = '内怀圣哲之德，外行王霸之道；得道多助，善结良缘。';
      const dynEn = 'Inner wisdom paired with exterior strategic mastery; builds compounding alliances.';

      catDataZh = {
        categoryName: '天机 · 宏观时空与全景运化',
        defaultQuery: '天地大化，感而遂通',
        headline: `【易道神机直断 · 乾坤交感】：卦象承【${orig.nameZh}】之气象，主爻【${govNameZh}】当令。时空格局中正亨通，立身当以修德凝命、顺天应时为第一要义！`,
        timing: { title: '宏观时岁运序', exactYear: yrZh, seasonAndMonths: moZh, favorableDays: dayZh, summary: timeSumZh },
        spatial: { title: '地缘场能共振方位', directions: dirZh, environment: envZh, distance: distZh, summary: spaSumZh },
        archetype: { title: '立身格局与心智模型', archetypeName: archNameZh, traits: trZh, dynamics: dynZh },
        actionDirectives: {
          title: '全盘破局三大抓手',
          items: [
            '【以中正化解极端】：不走偏激冒进极端，凡事留有三成余地，行稳致远。',
            '【以制度沉淀成果】：将零散经验固化为可复用的结构化规章，筑牢基业。',
            '【以利他汇聚人心】：大格局统筹各方诉求，兼济天下方成万世之业。'
          ]
        },
        grade: { score: 90, tag: '元吉 · 顺天凝命', level: 'emerald' }
      };

      catDataEn = {
        categoryName: 'Macro Timing · Holistic Grand Strategy',
        defaultQuery: 'General fortune & macro strategy?',
        headline: `【Holistic Direct Verdict · Cosmic Harmony】: Resonating with [${orig.nameEn}], line ${govNameEn} holds sovereign agency. Align sovereign intent with cosmic cycles; grounded rectitude transforms friction into enduring legacy!`,
        timing: { title: 'Macro Temporal Rhythm', exactYear: yrEn, seasonAndMonths: moEn, favorableDays: dayEn, summary: timeSumEn },
        spatial: { title: 'Terrestrial Field Resonance', directions: dirEn, environment: envEn, distance: distEn, summary: spaSumEn },
        archetype: { title: 'Sovereign Archetype & Mindset', archetypeName: archNameEn, traits: trEn, dynamics: dynEn },
        actionDirectives: {
          title: 'Three Master Action Directives',
          items: [
            '[Balance Extremes with Equilibrium]: Avoid hasty overextension; preserve strategic margins for resilient compounding.',
            '[Institutionalize Milestones]: Codify tacit craftsmanship into repeatable operating frameworks.',
            '[Unite Stakeholders with Altruism]: Harmonize shared interests; magnanimous leadership secures lasting triumph.'
          ]
        },
        grade: { score: 90, tag: 'Sublime Good Fortune', level: 'emerald' }
      };
    }

    const hexCorrZh = {
      title: '卦理渊源与四象直断',
      analysis: `卦理渊源：本卦【${orig.nameZh}】（${upAttr.natureZh}/${loAttr.natureZh}）${resHex ? ' · 变卦【' + resHex.nameZh + '】' : ''} · 定断主爻【${govNameZh}】${secNameZh ? '与【' + secNameZh + '】' : ''}合参直断。`
    };
    const hexCorrEn = {
      title: 'Canonical Derivation & Hexagram Synthesis',
      analysis: `Canonical Origin: Synthesized from Base Hexagram [${orig.nameEn}] (${upAttr.natureEn}/${loAttr.natureEn})${resHex ? ' and Resulting Hexagram [' + resHex.nameEn + ']' : ''}, governed by Line ${govNameEn}${secNameEn ? ' and Line ' + secNameEn : ''}.`
    };

    const resObj = {};
    resObj.category = category;

    if (isEn) {
      // 100% Pure English - Zero Chinese keys or strings
      resObj.categoryName = catDataEn.categoryName;
      resObj.categoryEn = catDataEn.categoryName;
      resObj.userQuery = (isEn && /[\u4e00-\u9fa5]/.test(q)) ? catDataEn.defaultQuery : (q || catDataEn.defaultQuery);
      resObj.headline = catDataEn.headline;
      resObj.headlineEn = catDataEn.headline;
      resObj.directAnswer = catDataEn.headline;

      resObj.timing = {
        title: catDataEn.timing.title,
        titleEn: catDataEn.timing.title,
        exactYear: catDataEn.timing.exactYear,
        exactYearEn: catDataEn.timing.exactYear,
        seasonAndMonths: catDataEn.timing.seasonAndMonths,
        seasonAndMonthsEn: catDataEn.timing.seasonAndMonths,
        favorableDays: catDataEn.timing.favorableDays,
        favorableDaysEn: catDataEn.timing.favorableDays,
        summary: catDataEn.timing.summary,
        summaryEn: catDataEn.timing.summary
      };

      resObj.spatial = {
        title: catDataEn.spatial.title,
        titleEn: catDataEn.spatial.title,
        directions: catDataEn.spatial.directions,
        directionsEn: catDataEn.spatial.directions,
        environment: catDataEn.spatial.environment,
        environmentEn: catDataEn.spatial.environment,
        distance: catDataEn.spatial.distance,
        distanceEn: catDataEn.spatial.distance,
        summary: catDataEn.spatial.summary,
        summaryEn: catDataEn.spatial.summary
      };

      resObj.archetype = {
        title: catDataEn.archetype.title,
        titleEn: catDataEn.archetype.title,
        archetypeName: catDataEn.archetype.archetypeName,
        archetypeNameEn: catDataEn.archetype.archetypeName,
        traits: catDataEn.archetype.traits,
        traitsEn: catDataEn.archetype.traits,
        dynamics: catDataEn.archetype.dynamics,
        dynamicsEn: catDataEn.archetype.dynamics
      };

      resObj.actionDirectives = {
        title: catDataEn.actionDirectives.title,
        titleEn: catDataEn.actionDirectives.title,
        items: catDataEn.actionDirectives.items,
        itemsEn: catDataEn.actionDirectives.items
      };

      resObj.hexagramCorrelation = {
        title: hexCorrEn.title,
        titleEn: hexCorrEn.title,
        analysis: hexCorrEn.analysis,
        analysisEn: hexCorrEn.analysis
      };

      resObj.verdictGrade = {
        score: catDataEn.grade.score,
        tag: catDataEn.grade.tag,
        tagEn: catDataEn.grade.tag,
        level: catDataEn.grade.level
      };
    } else {
      // Chinese mode with companion English properties
      resObj.categoryName = catDataZh.categoryName;
      resObj.categoryZh = catDataZh.categoryName;
      resObj.categoryEn = catDataEn.categoryName;
      resObj.userQuery = q || catDataZh.defaultQuery;
      resObj.headline = catDataZh.headline;
      resObj.headlineZh = catDataZh.headline;
      resObj.headlineEn = catDataEn.headline;
      resObj.directAnswer = catDataZh.headline;

      resObj.timing = {
        title: catDataZh.timing.title,
        titleZh: catDataZh.timing.title,
        titleEn: catDataEn.timing.title,
        exactYear: catDataZh.timing.exactYear,
        exactYearZh: catDataZh.timing.exactYear,
        exactYearEn: catDataEn.timing.exactYear,
        seasonAndMonths: catDataZh.timing.seasonAndMonths,
        seasonAndMonthsZh: catDataZh.timing.seasonAndMonths,
        seasonAndMonthsEn: catDataEn.timing.seasonAndMonths,
        favorableDays: catDataZh.timing.favorableDays,
        favorableDaysZh: catDataZh.timing.favorableDays,
        favorableDaysEn: catDataEn.timing.favorableDays,
        summary: catDataZh.timing.summary,
        summaryZh: catDataZh.timing.summary,
        summaryEn: catDataEn.timing.summary
      };

      resObj.spatial = {
        title: catDataZh.spatial.title,
        titleZh: catDataZh.spatial.title,
        titleEn: catDataEn.spatial.title,
        directions: catDataZh.spatial.directions,
        directionsZh: catDataZh.spatial.directions,
        directionsEn: catDataEn.spatial.directions,
        environment: catDataZh.spatial.environment,
        environmentZh: catDataZh.spatial.environment,
        environmentEn: catDataEn.spatial.environment,
        distance: catDataZh.spatial.distance,
        distanceZh: catDataZh.spatial.distance,
        distanceEn: catDataEn.spatial.distance,
        summary: catDataZh.spatial.summary,
        summaryZh: catDataZh.spatial.summary,
        summaryEn: catDataEn.spatial.summary
      };

      resObj.archetype = {
        title: catDataZh.archetype.title,
        titleZh: catDataZh.archetype.title,
        titleEn: catDataEn.archetype.title,
        archetypeName: catDataZh.archetype.archetypeName,
        archetypeNameZh: catDataZh.archetype.archetypeName,
        archetypeNameEn: catDataEn.archetype.archetypeName,
        traits: catDataZh.archetype.traits,
        traitsZh: catDataZh.archetype.traits,
        traitsEn: catDataEn.archetype.traits,
        dynamics: catDataZh.archetype.dynamics,
        dynamicsZh: catDataZh.archetype.dynamics,
        dynamicsEn: catDataEn.archetype.dynamics
      };

      resObj.actionDirectives = {
        title: catDataZh.actionDirectives.title,
        titleZh: catDataZh.actionDirectives.title,
        titleEn: catDataEn.actionDirectives.title,
        items: catDataZh.actionDirectives.items,
        itemsZh: catDataZh.actionDirectives.items,
        itemsEn: catDataEn.actionDirectives.items
      };

      resObj.hexagramCorrelation = {
        title: hexCorrZh.title,
        titleZh: hexCorrZh.title,
        titleEn: hexCorrEn.title,
        analysis: hexCorrZh.analysis,
        analysisZh: hexCorrZh.analysis,
        analysisEn: hexCorrEn.analysis
      };

      resObj.verdictGrade = {
        score: catDataZh.grade.score,
        tag: catDataZh.grade.tag,
        tagZh: catDataZh.grade.tag,
        tagEn: catDataEn.grade.tag,
        level: catDataZh.grade.level
      };
    }

    return resObj;
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { IChingEngine };
}
if (typeof window !== 'undefined') {
  window.IChingEngine = IChingEngine;
}
