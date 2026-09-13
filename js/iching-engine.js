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
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { IChingEngine };
}
if (typeof window !== 'undefined') {
  window.IChingEngine = IChingEngine;
}
