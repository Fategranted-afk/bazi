/**
 * 钦天监随身军师 · 交互式智能决策参谋引擎 (Interactive Advisor Agent Engine)
 * Synthesizes Day Master strength, 100-point vigor, 14-character temporal field,
 * Master Ni's Yin-Yang hexagram dynamics, and Feng Dao's Rong Ku Jian codex into real-time tactical guidance.
 * 100% Offline-First, deterministic, and fully bilingual (zh/en).
 */

class AdvisorEngine {
  /**
   * Build complete metaphysical context object for the active native
   */
  static buildContext(bazi, luck, currentYear = 2026, currentMonth = null, lang = 'zh') {
    if (!bazi || !bazi.pillars) return null;

    const dm = bazi.dayMaster || '甲';
    const dmElem = bazi.pillars.day?.stemElement || 'Wood';
    const vigorScore = bazi.vigorScore || 50;
    const vigorTier = bazi.vigorTier || '较旺格';
    const gender = bazi.gender || '乾造';
    const dayBranch = bazi.pillars.day?.branch || '寅';
    const yearBranch = bazi.pillars.year?.branch || '午';
    const monthBranch = bazi.pillars.month?.branch || '午';
    const hourBranch = bazi.pillars.hour?.branch || '巳';

    // Retrieve active transit details
    let activeDecade = null;
    let activeAnnual = null;
    let activeHex = null;
    let firstScroll = null;
    let primaryArchetype = lang === 'en' ? 'Specialist & Engineering' : '技术人员';

    if (luck) {
      activeDecade = luck.currentDecade || (luck.decades && luck.decades[0]) || null;
      activeAnnual = luck.currentAnnual || null;
    }

    if (typeof IChingEngine !== 'undefined' && typeof IChingEngine.calculateFourPillarsHexagrams === 'function') {
      try {
        const hexRes = IChingEngine.calculateFourPillarsHexagrams(bazi, currentYear, lang);
        if (hexRes) {
          activeHex = hexRes.liuNianHexagram || hexRes.xianTianHexagram || null;
        }
      } catch (e) {
        // Fallback gracefully
      }
    }

    if (typeof RongKuJianDB !== 'undefined') {
      try {
        const rkEval = RongKuJianDB.evaluateNativeScrolls(bazi, lang);
        if (rkEval && rkEval.primaryScroll) {
          firstScroll = lang === 'en' ? rkEval.primaryScroll.nameEn : rkEval.primaryScroll.nameZh;
        }
      } catch (e) {}
    }

    if (typeof CareerEngine !== 'undefined' && typeof CareerEngine.computeWorkplaceArchetypes === 'function') {
      try {
        const archs = CareerEngine.computeWorkplaceArchetypes(bazi, lang);
        if (archs && archs.length > 0) {
          primaryArchetype = lang === 'en' ? archs[0].nameEn : archs[0].nameZh;
        }
      } catch (e) {}
    }

    const defaultFirstScroll = lang === 'en' ? 'Scroll I: Adaptability' : '圆通卷';
    const defaultArchetype = lang === 'en' ? 'Specialist & Engineering' : '技术人员';

    let hexName = lang === 'en' ? 'The Creative (Heaven)' : '乾为天';
    if (activeHex) {
      hexName = lang === 'en' ? (activeHex.nameEn || activeHex.trans || activeHex.name) : (activeHex.nameZh || activeHex.name);
    }

    let decadeStr = lang === 'en' ? 'Current Decade' : '当前大运';
    if (activeDecade) {
      decadeStr = `${activeDecade.stem}${activeDecade.branch}`;
    }

    let annualStr = '丙午';
    if (activeAnnual) {
      annualStr = `${activeAnnual.stem}${activeAnnual.branch}`;
    }

    let tierStr = vigorTier;
    if (lang === 'en') {
      if (vigorTier.includes('较旺')) tierStr = 'Moderately Strong';
      else if (vigorTier.includes('极旺')) tierStr = 'Extremely Strong';
      else if (vigorTier.includes('较弱')) tierStr = 'Moderately Weak';
      else if (vigorTier.includes('极弱')) tierStr = 'Extremely Weak';
      else tierStr = 'Balanced';
    }

    return {
      dayMaster: dm,
      element: dmElem,
      gender: gender,
      dayBranch: dayBranch,
      yearBranch: yearBranch,
      monthBranch: monthBranch,
      hourBranch: hourBranch,
      vigorScore: vigorScore,
      vigorTier: tierStr,
      activeDecade: decadeStr,
      activeAnnualYear: currentYear,
      activeAnnualGanzhi: annualStr,
      activeHexagram: hexName,
      firstScroll: firstScroll || defaultFirstScroll,
      primaryArchetype: primaryArchetype || defaultArchetype
    };
  }

  /**
   * Return curated tactical prompt presets for 1-click consultation
   */
  static getCuratedPrompts(lang = 'zh') {
    if (lang === 'en') {
      return [
        {
          id: 'romance_timing',
          icon: '💍',
          title: 'Romance Timing & Destiny Spouse',
          query: 'When will my destiny partner arrive? What are their personality archetype, spatial peach blossom activation, and key relationship red lines?'
        },
        {
          id: 'academic_exam',
          icon: '🎓',
          title: 'Academic & Exam Advancement',
          query: 'Evaluating my Resource and Output stars with Wen Chang nobility, should I pursue graduate research, overseas study, or industry? What is my exam timing window?'
        },
        {
          id: 'manage_up',
          icon: '💼',
          title: 'Managing Up & Superiors',
          query: 'How should I communicate and report to my manager/supervisor without triggering friction, based on my chart archetype?'
        },
        {
          id: 'career_pivot',
          icon: '⚔️',
          title: 'Stay vs. Pivot Crossroads',
          query: 'Facing a career crossroads: stay in my current track or pivot to an ambitious new opportunity? How does my vigor favor this?'
        },
        {
          id: 'overthinking',
          icon: '🧘',
          title: 'Defeating Mental Friction',
          query: 'Dealing with excessive overthinking and self-doubt lately. What is my optimal cognitive reframing anchor and physical reset?'
        },
        {
          id: 'wealth_window',
          icon: '💰',
          title: 'Wealth & Initiative Timing',
          query: 'Is the current temporal transit favorable for aggressive wealth expansion (side-projects/investments) or consolidation?'
        }
      ];
    }

    return [
      {
        id: 'romance_timing',
        icon: '💍',
        title: '世俗婚恋与正缘应期',
        query: '结合我的日支配偶宫、桃花星与当下岁运，我命定正缘何时出现？对方相貌心性与相处避坑红线是什么？'
      },
      {
        id: 'academic_exam',
        icon: '🎓',
        title: '学业考学与文昌深造',
        query: '结合本命印星、食伤秀气与文昌贵人，我适合考研升学、出国留学还是博士深造？考运应期如何？'
      },
      {
        id: 'manage_up',
        icon: '💼',
        title: '向上管理与汇报策略',
        query: '结合我命盘的格局与性格，向严苛或强势上级汇报工作/争取资源时，如何精准切中要害且绝不踩雷？'
      },
      {
        id: 'career_pivot',
        icon: '⚔️',
        title: '跳槽转轨 vs 留任守成',
        query: '目前面临职业转轨与留任十字路口：依我本命身旺衰与当前岁运，是宜主动进击还是深筑护城河？'
      },
      {
        id: 'overthinking',
        icon: '🧘',
        title: '斩断反刍与内耗重置',
        query: '近期精神内耗反刍严重、怀疑自我算力，如何用我命造最适宜的禅道心法与躯体动作实现硬重启？'
      },
      {
        id: 'wealth_window',
        icon: '💰',
        title: '财运时机与投资攻守',
        query: '当下岁运流月逢何神司权？我适宜开拓副业与商业变现，还是当收拢现金流、以沉淀绝技为先？'
      }
    ];
  }

  /**
   * Classify user query intent robustly
   */
  static detectIntent(userQuery) {
    const q = (userQuery || '').toLowerCase();

    // 1. Romance / Marriage / Dating / Partner
    if (/对象|婚恋|结婚|恋爱|脱单|另一半|正缘|伴侣|男朋友|女朋友|老公|老婆|姻缘|桃花|夫妻|配偶|红鸾|天喜|相亲|嫁|娶|romance|partner|marriage|dating|love|spouse|boyfriend|girlfriend|wife|husband|relationship|peach blossom/i.test(q)) {
      return 'romance_timing';
    }

    // 2. Academic / Graduate / Exam / Study / PhD
    if (/考研|考学|升学|考公|考试|留学|博士|硕博|论文|学术|大学|高校|学校|文昌|深造|读书|申博|读博|exam|study|academic|university|school|phd|master|degree|research|admission/i.test(q)) {
      return 'academic_exam';
    }

    // 3. Partnership / Co-founder / Cooperation
    if (/合伙|合作|搭档|股东|合资|合伙人|合股|合伙做|partner(?!.*(?:romance|love|dating|spouse|wife|husband))|cooperat|co-founder|shareholder|alliance/i.test(q)) {
      return 'partnership';
    }

    // 4. Upward Management / Boss / Superiors
    if (/向上|汇报|领导|上级|老板|主管|上司|manage|boss|supervisor|manager/i.test(q)) {
      return 'manage_up';
    }

    // 5. Career Pivot / Stay vs Move
    if (/跳槽|转轨|留任|抉择|工作|找工作|转行|换工作|离职|pivot|career|switch|job|resignation/i.test(q)) {
      return 'career_pivot';
    }

    // 6. Overthinking / Anxiety / Mental Friction
    if (/内耗|反刍|焦虑|怀疑|失眠|心累|烦躁|抑郁|自耗|friction|doubt|anxiety|stress|overthinking|ruminat/i.test(q)) {
      return 'overthinking';
    }

    // 7. Wealth / Investment / Side-business
    if (/财|钱|投资|副业|理财|基金|炒股|发财|暴富|变现|商业|商业化|wealth|money|invest|cash/i.test(q)) {
      return 'wealth_window';
    }

    return 'general';
  }

  /**
   * Generate bespoke tactical decision advice
   */
  static generateAdvice(userQuery, bazi, luck, currentYear = 2026, lang = 'zh') {
    const isEn = (lang === 'en');
    const ctx = this.buildContext(bazi, luck, currentYear, null, lang) || {
      dayMaster: '甲',
      element: 'Wood',
      gender: '乾造',
      dayBranch: '寅',
      yearBranch: '午',
      monthBranch: '午',
      hourBranch: '巳',
      vigorScore: 50,
      vigorTier: '较旺格',
      activeDecade: '庚子',
      activeAnnualYear: 2026,
      activeAnnualGanzhi: '丙午',
      activeHexagram: '乾为天',
      firstScroll: '圆通卷',
      primaryArchetype: '技术人员'
    };

    const isWeak = (ctx.vigorScore < 50);
    const category = this.detectIntent(userQuery);

    if (isEn) {
      return this._generateAdviceEn(category, ctx, isWeak, userQuery, bazi, luck);
    }
    return this._generateAdviceZh(category, ctx, isWeak, userQuery, bazi, luck);
  }

  static _generateAdviceZh(category, ctx, isWeak, query, bazi, luck) {
    let diagnosis = '';
    let tactics = [];
    let redLines = [];
    let mentalAnchor = '';
    let title = '';

    const dm = ctx.dayMaster;
    const db = ctx.dayBranch;
    const yb = ctx.yearBranch;
    const isMale = (!ctx.gender || ctx.gender.includes('乾') || ctx.gender.includes('男'));

    // Romance Specific Variables
    let spouseStarZh = isMale ? '正财/偏财' : '正官/七杀';
    let spouseArchetype = '独立自强、开创干练之良伴';
    if (['子', '午', '卯', '酉'].includes(db)) {
      spouseArchetype = '相貌清雅秀丽、极具艺术情调、重视精神深度交流与仪式感之伴侣';
    } else if (['辰', '戌', '丑', '未'].includes(db)) {
      spouseArchetype = '忠厚稳健、朴实持家、能做家庭财富防波堤之靠谱伴侣';
    }

    let annualPalaceDynamic = '';
    if (db === '寅' || db === '戌') {
      annualPalaceDynamic = `2026 丙午岁君与日支配偶宫【${db}】形成【寅午戌三合火局】，合动配偶宫！这是命理正缘感召引动之第一等吉象，预示今年正缘磁场全面共振，极易在专业交流或共同追求中邂逅宿命感契合者！`;
    } else if (db === '未') {
      annualPalaceDynamic = `2026 丙午岁君与配偶宫【未】构成【午未六合】！岁君六合入夫妻宫，逢合主定，预示感情有尘埃落定、谈及婚嫁盟约之重大契机！`;
    } else if (db === '子') {
      annualPalaceDynamic = `2026 丙午岁君与配偶宫【子】呈现【子午相冲】！岁君冲动夫妻宫，逢冲打破单身惯性，极易出现异地邂逅、差旅结缘或打破长久单身僵局之闪电缘分；已有伴侣者需注重包容克制口角。`;
    } else if (db === '巳' || db === '午') {
      annualPalaceDynamic = `2026 丙午南方旺火与配偶宫比和，社交同行或好友同侪网络活跃，极易通过熟人聚会、校友或行业圈层引荐结识心仪对象。`;
    } else {
      annualPalaceDynamic = `2026 丙午岁运坐【${ctx.activeHexagram}】，火土相生之年。当前时空宜以内外兼修为基，夏秋火土丰饶之际（农历四月至七月）乃正缘引动之黄金窗口。`;
    }

    const hasPeachBlossom = ['巳', '酉', '丑'].includes(yb) || ['巳', '酉', '丑'].includes(db);
    const peachBlossomNote = hasPeachBlossom ? '【咸池真桃花司权】：命逢巳/酉/丑，2026 丙午流年正值咸池桃花主事，本年度社交异性吸引力与情感感知力处于周期峰值！' : '';

    if (category === 'romance_timing') {
      title = '世俗婚恋与正缘应期神策';
      diagnosis = `命主日元坐【${dm}】，配偶宫定位于日支【${db}】，子平活力量化评分为 ${ctx.vigorScore} 分（${ctx.vigorTier}）。在世俗婚恋中，${isMale ? `男命以财星（${spouseStarZh}）为妻星，日支配偶宫【${db}】反映配偶底层心性模型。` : `女命以官杀（${spouseStarZh}）为夫星，日支配偶宫【${db}】反映配偶底层心性模型。`}

` +
        `【配偶特质画像】：配偶宫坐【${db}】，呈现【${spouseArchetype}】气象。
` +
        `【岁运交感应期】：${annualPalaceDynamic}
` +
        (peachBlossomNote ? `${peachBlossomNote}
` : '') +
        `综合岁运研判，2026 丙午至 2027 丁未年，正是命主打破情感闭环、正缘显化的核心跃迁窗口。`;

      tactics = [
        `【相遇场域与正缘雷达】：对方气质偏向【${spouseArchetype.slice(0, 12)}】，极易在专业交流研讨会、行业峰会、图书艺术空间、差旅途中或高能量朋友私密聚会中相遇。主动走出舒适区参与高质量场景，即可触动引力场。`,
        `【空间风水桃花气场激活】：依据日支配偶宫方位，在卧室生旺桃花方（如正东卯位或正南午位）摆放水养鲜花（单数枝为佳，如百合/玫瑰）或粉水晶原石；严禁放置塑料假花或枯萎干花，以防假桃花虚耗心神。`,
        `【《周易·咸卦》虚受之道】：放下“既要百分百情绪价值、又要世俗完美无瑕”的内耗执念。婚姻本质是并肩抗击风浪的人生合伙同盟，以真诚虚己的心胸接纳彼此瑕疵，方能水到渠成。`
      ];

      redLines = [
        `严禁在流月地支相冲相刑之时（如农历五月午月、农历十一月子月）因一时情绪敏感而做出断崖式决绝判断；`,
        `严禁陷入对过往情感的反复精神反刍，正缘之门唯有在清空旧执念后方能真正洞开。`
      ];

      mentalAnchor = `《周易·咸卦》云：“山上有泽，咸；君子以虚受人。天地感而万物化生，圣人感人心而天下和平。观其所感，而天地万物之情可见矣。”`;
    } else if (category === 'academic_exam') {
      title = '学业考学与文昌深造锦囊';
      diagnosis = `命主日元【${dm}】，子平评分 ${ctx.vigorScore} 分（${ctx.vigorTier}）。学业功名首重“印星护持、食伤吐秀与文昌贵人”。${isWeak ? '身弱逢印星，最宜在制度化高校与导师庇佑下潜心钻研，学术文凭是安身立命的最佳护城河。' : '身旺食伤有力，灵感澎湃，善于产出原创理论与跨学科研究，深造利于拔高认知维度。'}`;

      tactics = [
        `【文昌空间风水布局】：在书桌左前方安放九层紫砂/白玉文昌塔，或配四支水养富贵竹，借木火通明之气提振深度专注力与记忆提取效率。`,
        `【单一任务深度工作法】：考学冲刺切忌多线程空转。每天固定锁定 3 个连续 90 分钟不被打扰的硬核学习模块，以物理笔尖推演代替颅内空想。`,
        `【借力权威与导师同频】：依冯道《荣枯鉴》处世法，与导师学者交流保持“严谨求教、定期闭环汇报”，争取核心课题参与权。`
      ];

      redLines = [
        `严禁考前高频更换复习参考书目或被社群焦虑言论打乱学习心流；`,
        `严禁在深夜子时强行熬夜刷题，损伤心肾阳气反而导致考场大脑死机。`
      ];

      mentalAnchor = `《六祖坛经》云：“何期自性，本自具足；何期自性，能生万法。心平何劳持戒，行直何用修禅。”`;
    } else if (category === 'partnership') {
      title = '合伙盟约与同侪借力法门';
      diagnosis = `命主日元【${dm}】，子平活力为 ${ctx.vigorScore} 分（${ctx.vigorTier}）。合伙之本在“比劫分忧还是比劫争财”。${isWeak ? '身弱之造喜比肩劫财帮身抗煞，适宜寻找心性互补、实力强大的合伙人借力破局。' : '身旺之造自带统帅气魄，需防比劫争夺核心利润与决策话语权，凡合伙必当制度先行。'}`;

      tactics = [
        `【丑话说前与股权契约】：凡涉及商业合伙，严禁以江湖义气替代法律协议。务必白纸黑字锁定投票权、退出机制与动态分红条款。`,
        `【能力互补与边界隔离】：一人主内抓技术交付与产品底盘，一人主外跑市场融资，互不干涉专业领域决策权。`,
        `【识人心性察其幽微】：优先选择五行补益自身喜用神、行事重诺守信之人，避开行险侥幸之徒。`
      ];

      redLines = [
        `严禁在未约定核心退出机制时共同签署无限连带担保责任；`,
        `严禁合伙账目模糊或将私人开支与公账混同。`
      ];

      mentalAnchor = `五代·冯道《荣枯鉴》云：“利天下者，天下启之；疑同行者，同道绝之。明分笃契，乃免争端。”`;
    } else if (category === 'manage_up') {
      title = '向上管理与职场破局锦囊';
      diagnosis = `命主日元坐【${dm}】，子平量化活力评分为 ${ctx.vigorScore} 分（${ctx.vigorTier}），天命主场定位于【${ctx.primaryArchetype}】。在向上管理中，${isWeak ? '身弱之人天生敏锐多思，容易在威权面前产生过度预警或防御性抵抗；但你的核心护城河是“专业深度与交付确定性”。' : '身旺之人自带魄力与开创锐气，但容易在汇报时略去细节过程、显得过于强势甚至暗含抗拒管束之意。'}`;
      tactics = [
        `【结论先行与数据筑基】：上级关注确定性而非情绪。汇报第一句话直奔三项核心指标（交付成果、进度百分比、阻碍卡点），以理智数字稀释感性博弈。`,
        `【化反驳为选择题】：依五代冯道《荣枯鉴·${ctx.firstScroll}》之法，凡面对不同意见，绝不当面抵触。使用“领导，按您的战略方向，我们有两个落地路径（A方案与B方案），各自资源消耗如下，请您定夺”的话术，将矛盾转化为协作推演。`,
        `【向上索取资源定式】：身处【${ctx.primaryArchetype}】生态位，主动索取“明确的交付边界与计算资源”，明确约定交付时限，以契约换取心智自由空间。`
      ];
      redLines = [
        `严禁在没有备选方案时直接指出上级规划的漏洞或逻辑缺陷；`,
        `严禁在情绪波动或疲惫期回复微信/邮件工作指令，牢记“24小时冷敷隔离法则”。`
      ];
      mentalAnchor = `五代·冯道《荣枯鉴》云：“智者不立危墙，善战者无赫赫之功。顺天应势，借权成事，此之谓大通。”`;
    } else if (category === 'career_pivot') {
      title = '战略转轨与去留决断神机';
      diagnosis = `命主逢 ${ctx.activeAnnualYear} ${ctx.activeAnnualGanzhi}年，值年卦坐【${ctx.activeHexagram}】。子平评分 ${ctx.vigorScore} 分展现出${isWeak ? '“守拙蓄势、深钻单一绝技更易爆发”的内敛聚能场' : '“大开大合、宜在多维竞争中开疆拓土”的锋芒动能场'}。当下岁运交汇，战略重心在于“辨明究竟是能量升级还是内耗逃避”。`;
      tactics = [
        `【生态位锚定原则】：若新机会高度契合你的首席生态位【${ctx.primaryArchetype}】，且允许你发挥沉潜深研的长处，方可作为有效跃升选项；反之若需大量低效世俗应酬，坚决避让。`,
        `【地缘与五行场能协同】：考察目标城市与赛道是否补益你的喜用神。向用神方位（如科研属水木、技术属火木）迁移往往事半功倍；向冲克忌神方位迁移则易陷入水土不服。`,
        `【骑马找马的行动闭环】：${isWeak ? '身弱之造忌仓促裸辞断粮。务必先在当前工位交付出一个经得起考验的硬核作品或代表作，以作品作为敲门砖，方能立于不败之地。' : '身旺之造可在做好风险兜底预案后果断出击，主动争取更高维度的项目操盘权。'}`
      ];
      redLines = [
        `切忌因人际一时受挫而冲动跳槽，换个环境若未修得处世铠甲，同样的博弈依然会重复上演；`,
        `切忌在未看清目标组织真实现金流与直属领导心性前轻率承诺签署排他条款。`
      ];
      mentalAnchor = `《庄子·养生主》云：“依乎天理，批大郤，导大窾，因其固然。以无厚入有间，恢恢乎其于游刃必有余地矣。”`;
    } else if (category === 'overthinking') {
      title = '斩断内耗与心智重置秘要';
      diagnosis = `命主日元【${dm}】，敏锐感知力与推演力远超常人。平庸愚钝之人绝无内耗之苦，你能内耗，说明心智算力处于空转状态。当这股庞大的精神能量没有被物理世界的具体任务吸收时，它便会掉转枪口向内自残。`;
      tactics = [
        `【3分钟躯体硬重启】：绝不在脑子里解决脑子里的问题！立刻用冰凉冷水猛洗双脸冲洗手腕15秒，刺激哺乳动物潜水反射强行降低心率；紧接着完成3组 4-7-8 战术呼吸。`,
        `【笔尖降维外部化】：拿出一张白纸，将脑海中纠结的所有烂账毫无逻辑地全部写在纸上。写出那一刻，大脑瞬间由“受害者”升维为“审视者”。`,
        `【以粗糙交付打破完美魔咒】（Done is better than perfect）：允许自己先写一个烂透了的第一版代码或方案。只要飞轮物理转动，内耗反刍立时烟消云散！`
      ];
      redLines = [
        `严禁在深夜 23:00（子时）之后推演任何人生重大命题或揣摩他人脸色；`,
        `严禁将“别人对你的评价”纳为自己的课题，他人脸色是他自己的业力。`
      ];
      mentalAnchor = `《金刚经》云：“凡所有相，皆是虚妄。若见诸相非相，即见如来。应无所住，而生其心。”`;
    } else if (category === 'wealth_window') {
      title = '财富机缘与攻守平衡智策';
      diagnosis = `命主年岁逢 ${ctx.activeAnnualYear} ${ctx.activeAnnualGanzhi}，岁君当道，六十四卦运势落于【${ctx.activeHexagram}】。当前子平量化活力 ${ctx.vigorScore} 分，处于【${ctx.vigorTier}】。在财富与事业推进中，首重“正财为基，偏财为机，稳中求进”。`;
      tactics = [
        `【深耕主业正财底盘】：确保本职基本盘稳如磐石，将 80% 的时间算力投入到核心本领的不可替代性打磨上。`,
        `【轻量化验证第二曲线】：欲求偏财破局，以极小资金成本测试副业或自媒体工具产品，跑通 0 到 1 最小闭环后再考虑追加资源。`,
        `【秉持《荣枯鉴》保全之道】：${ctx.firstScroll ? `谨记《${ctx.firstScroll}》所诫，低调求财，不显山不露水，蓄深水以行大舟。` : '戒骄戒躁，以广结善缘与利他之心凝聚财运。'}`
      ];
      redLines = [
        `严禁参与高杠杆、不透明或赌徒性质的高风险投机；`,
        `严禁与命带严重刑冲克破、信誉有亏之人合伙谋事。`
      ];
      mentalAnchor = `《滴天髓》云：“何知其人富？财气通门户。何知其人贵？官星有理会。财官相生，自致千钟。”`;
    } else {
      // General Fallback (Macro Alignment)
      title = '元神气机与宏观定调神策';
      diagnosis = `命主日元坐【${dm}】，子平量化活力评分为 ${ctx.vigorScore} 分（【${ctx.vigorTier}】），岁运流年行至 ${ctx.activeAnnualYear} ${ctx.activeAnnualGanzhi}，当值六十四卦气运坐【${ctx.activeHexagram}】。全盘气机处于${isWeak ? '“积蓄潜能、内修定力、以拙胜巧”' : '“顺势而发、拓宽格局、以稳行远”'}的时空坐标系。`;
      tactics = [
        `【顺应节律与元神调和】：不逆大势，不过早亮出全部底牌。以日常稳定的睡眠和锻炼固本培元。`,
        `【专注高价值交付】：将注意力从散乱琐事中抽离，聚焦于最具长线复利的一到两件核心要务。`,
        `【修习《${ctx.firstScroll}》保全法则】：处世不亢不卑，因势利导，善借外力化解阻力。`
      ];
      redLines = [
        `严禁在身体元气不足或精力透支时做出重大人生决策；`,
        `严禁将心智算力消耗于无意义的言语争辩或虚妄社交中。`
      ];
      mentalAnchor = `《庄子·逍遥游》云：“适莽苍者，三餐而反，腹犹果然；适百里者，宿舂粮；适千里者，三月聚粮。若夫乘天地之正，而御六气之辩，以游无穷者，彼且恶乎待哉！”`;
    }

    return {
      category: category,
      title: title,
      contextMeta: {
        dm: ctx.dayMaster,
        score: ctx.vigorScore,
        tier: ctx.vigorTier,
        year: ctx.activeAnnualYear,
        ganzhi: ctx.activeAnnualGanzhi,
        hex: ctx.activeHexagram,
        scroll: ctx.firstScroll,
        archetype: ctx.primaryArchetype
      },
      diagnosis: diagnosis,
      tactics: tactics,
      redLines: redLines,
      mentalAnchor: mentalAnchor
    };
  }

  static _stemToEn(dm) {
    const map = {
      '甲': 'Yang Wood (Jia)', '乙': 'Yin Wood (Yi)',
      '丙': 'Yang Fire (Bing)', '丁': 'Yin Fire (Ding)',
      '戊': 'Yang Earth (Wu)', '己': 'Yin Earth (Ji)',
      '庚': 'Yang Metal (Geng)', '辛': 'Yin Metal (Xin)',
      '壬': 'Yang Water (Ren)', '癸': 'Yin Water (Gui)'
    };
    return map[dm] || 'Day Master';
  }

  static _branchToEn(b) {
    const map = {
      '子': 'Zi (Water/Rat)', '丑': 'Chou (Earth/Ox)', '寅': 'Yin (Wood/Tiger)', '卯': 'Mao (Wood/Rabbit)',
      '辰': 'Chen (Earth/Dragon)', '巳': 'Si (Fire/Snake)', '午': 'Wu (Fire/Horse)', '未': 'Wei (Earth/Goat)',
      '申': 'Shen (Metal/Monkey)', '酉': 'You (Metal/Rooster)', '戌': 'Xu (Earth/Dog)', '亥': 'Hai (Water/Pig)'
    };
    return map[b] || 'Branch';
  }

  static _ganzhiToEn(gz) {
    if (!gz || typeof gz !== 'string') return 'Bing-Wu';
    const stems = { '甲': 'Jia', '乙': 'Yi', '丙': 'Bing', '丁': 'Ding', '戊': 'Wu', '己': 'Ji', '庚': 'Geng', '辛': 'Xin', '壬': 'Ren', '癸': 'Gui' };
    const branches = { '子': 'Zi', '丑': 'Chou', '寅': 'Yin', '卯': 'Mao', '辰': 'Chen', '巳': 'Si', '午': 'Wu', '未': 'Wei', '申': 'Shen', '酉': 'You', '戌': 'Xu', '亥': 'Hai' };
    const s = gz[0], b = gz[1];
    if (stems[s] && branches[b]) return `${stems[s]}-${branches[b]}`;
    return 'Current Year';
  }

  static _generateAdviceEn(category, ctx, isWeak, query, bazi, luck) {
    const enDm = this._stemToEn(ctx.dayMaster);
    const enDb = this._branchToEn(ctx.dayBranch);
    const enGz = this._ganzhiToEn(ctx.activeAnnualGanzhi);

    const isMale = (!ctx.gender || ctx.gender.includes('乾') || ctx.gender.includes('男'));
    const spouseStarEn = isMale ? 'Direct Wealth / Indirect Wealth' : 'Direct Officer / Seven Killings';

    let diagnosis = '';
    let tactics = [];
    let redLines = [];
    let mentalAnchor = '';
    let title = '';

    if (category === 'romance_timing') {
      title = 'Romance Timing & Destiny Spouse Oracle';
      let spouseArchetypeEn = 'independent, enterprising, proactive, and resilient';
      if (['子', '午', '卯', '酉'].includes(ctx.dayBranch)) {
        spouseArchetypeEn = 'charismatic, aesthetically refined, values deep emotional and intellectual intimacy';
      } else if (['辰', '戌', '丑', '未'].includes(ctx.dayBranch)) {
        spouseArchetypeEn = 'dependable, grounded, prudent with assets, and deeply loyal to family stability';
      }

      let palaceTransitEn = '';
      if (ctx.dayBranch === '寅' || ctx.dayBranch === '戌') {
        palaceTransitEn = `The 2026 Bing-Wu transit combines with your Spouse Palace [${enDb}] in a Tri-Union harmony. In BaZi, this is the premier herald of matrimonial synchronicity, activating magnetic affinity for a deeply resonant soulmate!`;
      } else if (ctx.dayBranch === '未') {
        palaceTransitEn = `The 2026 Bing-Wu transit forms a Six-Harmony union with your Spouse Palace [${enDb}]. Harmony anchors commitment, opening a prime window for formal relationship milestones and marital decisions!`;
      } else if (ctx.dayBranch === '子') {
        palaceTransitEn = `The 2026 Bing-Wu transit clashes with your Spouse Palace [${enDb}]. Clashes break single inertia, triggering sudden cross-city encounters or romantic acceleration; established couples should practice attentive patience.`;
      } else {
        palaceTransitEn = `Governed by Hexagram [${ctx.activeHexagram}], the 2026 Bing-Wu cycle compounds subtle charisma. Optimal relational windows flourish dynamically through late summer into autumn.`;
      }

      diagnosis = `Day Master resides on [${enDm}], with the Spouse Palace rooted in [${enDb}], and a ZiPing vigor score of ${ctx.vigorScore}/100 (${ctx.vigorTier}). In classical synastry, ${isMale ? `males take Wealth stars (${spouseStarEn}) as spouse indicators.` : `females take Officer/Killing stars (${spouseStarEn}) as spouse indicators.`}

` +
        `[Spouse Archetype]: Seated on [${enDb}], your partner embodies a persona that is [${spouseArchetypeEn}].
` +
        `[Transit Timing Resonance]: ${palaceTransitEn}`;

      tactics = [
        `[Optimal Encounter Field]: Your destiny partner resonates within intellectual conferences, professional symposiums, artistic venues, travel journeys, or curated introductions by high-caliber confidants.`,
        `[Spatial Peach Blossom Harmonization]: According to your Day Branch quadrant, place fresh water flowers (odd numbers like lilies or roses) or raw rose quartz crystal in your bedroom's vitality sector. Avoid artificial dried flowers.`,
        `[The Way of Hexagram Xian (Mutual Influence)]: Relinquish perfectionism demanding both absolute emotional catering and worldly faultlessness. True lifelong alliance rests upon mutual sheltering against worldly storms.`
      ];

      redLines = [
        `Strictly avoid impulsive emotional breakups or hurried commitments during astrologically turbulent transit months;`,
        `Never dwell on past romantic rumination—the gate of destiny opens only when historical attachments are cleared.`
      ];

      mentalAnchor = `I Ching (Hexagram 31 Xian / Mutual Influence): "A lake on the mountain: the image of Influence. Thus the superior man encourages people to approach him by his readiness to receive them with humility."`;
    } else if (category === 'academic_exam') {
      title = 'Academic Advancement & Examination Strategy';
      diagnosis = `Day Master [${enDm}] holds a vigor score of ${ctx.vigorScore}/100 (${ctx.vigorTier}). Scholarly advancement is governed by Resource (Institutional Prestige) and Output (Original Intellect). ${isWeak ? 'A sensitive Day Master thrives in structured academia under supportive mentorship, where credentials construct an unassailable moat.' : 'A vigorous Day Master commands abundant Output energy, ideal for interdisciplinary breakthroughs and trailblazing thesis work.'}`;

      tactics = [
        `[Wen Chang Spatial Alignment]: Place a 9-tier Pagoda or 4 stalks of lucky bamboo on the left corner of your study desk to harmonize Wood-Fire cognition and deep memory retention.`,
        `[Single-Task Deep Work Modules]: Replace fragmented study with three unbroken 90-minute deep immersion blocks per day. Physical handwriting anchors neural mastery.`,
        `[Institutional Alignment]: Emulate Feng Dao's Rong Ku Jian codex by providing concise, consistent milestone updates to academic advisors, securing vital research resources.`
      ];

      redLines = [
        `Never switch foundational reference textbooks hastily during pre-exam crunch weeks;`,
        `Strictly avoid pulling all-nighters before major exams, which depletes cognitive vitality.`
      ];

      mentalAnchor = `Platform Sutra: "Who would have thought that self-nature is inherently self-sufficient; who would have thought that self-nature can manifest all things."`;
    } else if (category === 'partnership') {
      title = 'Partnership Synergy & Strategic Alliance Protocol';
      diagnosis = `Day Master [${enDm}] commands vigor of ${ctx.vigorScore}/100 (${ctx.vigorTier}). Alliance success hinges on whether Companion elements share burdens or compete for spoils. ${isWeak ? 'A sensitive Day Master benefits greatly from robust co-founders to absorb market shocks and provide frontline momentum.' : 'A vigorous Day Master radiates strong leadership; ensure strict contractual governance to prevent equity disputes.'}`;

      tactics = [
        `[Contracts Before Camaraderie]: Never substitute friendship for corporate bylaws. Explicitly codify voting rights, vesting cliffs, and exit buyout mechanisms in writing.`,
        `[Domain Separation Moats]: Delineate clear domains—one handles technical product execution, while the other leads commercial fundraising, respecting autonomous authority.`,
        `[Vetting Core Character]: Prioritize partners whose elemental chart complements your favorable elements and who demonstrate unwavering integrity under stress.`
      ];

      redLines = [
        `Never co-sign unlimited personal liability guarantees without definitive exit provisions;`,
        `Never permit ambiguous accounting or mixing personal expenses with corporate capital.`
      ];

      mentalAnchor = `Rong Ku Jian: "Those who benefit all under heaven find all gates open; those who sow distrust among peers sever their own path. Clear boundaries and firm covenants avert strife."`;
    } else if (category === 'manage_up') {
      title = 'Upward Management & Workplace Directive';
      diagnosis = `Day Master is seated on [${enDm}], with a ZiPing vigor score of ${ctx.vigorScore}/100 (${ctx.vigorTier}), rooted in the [${ctx.primaryArchetype}] workplace niche. In upward management, ${isWeak ? 'a sensitive Day Master tends to experience heightened defensive friction around authority; yet your prime moat is deep precision and deliverable dependability.' : 'a vigorous Day Master radiates pioneering authority, yet may inadvertently bypass granular updates and appear resistant to managerial oversight.'}`;
      tactics = [
        `[Conclusion-First with Metric Anchors]: Superiors value certainty over emotions. Lead with three objective milestones (tangible deliverable, % completed, bottleneck blockers) to dissipate emotional friction.`,
        `[Transform Objections into Scenarios]: Applying Feng Dao's Rong Ku Jian (${ctx.firstScroll}), never confront directly. Frame counter-proposals as: "Boss, aligned with your strategic intent, we have two execution paths (Option A vs B) with the following tradeoffs—which do you prefer to greenlight?"`,
        `[Clear Boundaries for Resources]: Operating within the [${ctx.primaryArchetype}] archetype, explicitly request clear deliverables and quiet focus blocks to preserve mental bandwidth.`
      ];
      redLines = [
        `Never point out flaws in leadership's strategy without presenting two viable solutions;`,
        `Never reply to critical workplace communications during emotional fatigue—adhere strictly to the 24-hour delayed response protocol.`
      ];
      mentalAnchor = `Rong Ku Jian: "The truly wise never stand beneath collapsing walls. By harmonizing with momentum, one leverages external authority to manifest greatness."`;
    } else if (category === 'career_pivot') {
      title = 'Strategic Crossroads & Pivot Oracle';
      diagnosis = `Navigating transit year ${ctx.activeAnnualYear} (${enGz}) governed by Hexagram [${ctx.activeHexagram}]. With a vigor score of ${ctx.vigorScore}/100, your field favors ${isWeak ? 'deep craftsmanship, specialized focus, and conservative consolidation' : 'bold multi-dimensional expansion and strategic frontline pioneering'}. The central directive is discerning true elevation from reactive escapism.`;
      tactics = [
        `[Archetype Alignment Filter]: Only pursue opportunities that directly reinforce your primary niche [${ctx.primaryArchetype}] and honor your need for depth; decline tracks that demand frivolous social pandering.`,
        `[Geographic Five-Element Synergy]: Verify that the prospective location and industry resonate with your favorable elements (e.g. academia in Water/Wood, technology in Fire/Wood). Moving toward favorable elemental vectors yields compound acceleration.`,
        `[Done is Better Than Speculation]: ${isWeak ? 'Avoid impulsive resignations without proof. Ship a bulletproof piece of work in your current post to serve as your undeniable leverage.' : 'Establish downside protection, then execute decisively to seize broader strategic autonomy.'}`
      ];
      redLines = [
        `Never pivot purely as an emotional escape from temporary interpersonal friction—without inner boundaries, similar dynamics will repeat;`,
        `Never sign restrictive covenants before vetting the organizational cash flow and managerial temperament.`
      ];
      mentalAnchor = `Zhuangzi (The Secret of Caring for Life): "Follow the natural grain of reality, strike through the great hollows, guide through the wide openings. With that which has no thickness entering into space, how vast is the room for the blade to wander freely!"`;
    } else if (category === 'overthinking') {
      title = 'Cognitive Reset & Somatic Protocol';
      diagnosis = `Day Master [${enDm}] endows you with perceptive intellect far beyond the average mind. Truly dull individuals never suffer from mental friction. You overthink solely because excess cognitive bandwidth is spinning in vacuum without grounding in physical reality.`;
      tactics = [
        `[3-Minute Somatic Hard Reboot]: Never resolve mental loops inside the mind. Splash ice-cold water onto your face and inner wrists for 15 seconds to trigger the mammalian dive reflex; follow with 3 rounds of 4-7-8 tactical breathing.`,
        `[Pen-and-Paper Externalization]: Write down every swirling anxiety uncensored on paper. The instant it hits the page, your brain shifts from emotional hostage to detached analytical observer.`,
        `[Ship an Imperfect Draft First]: Done is far superior to perfect. Permit yourself to produce an imperfect first draft of code or writing. Physical momentum instantly dissolves ruminative loops.`
      ];
      redLines = [
        `Strictly forbid contemplating life-defining decisions or analyzing others' micro-expressions after 23:00 (Zi hour);`,
        `Recognize others' opinions as their own karma, never your internal responsibility.`
      ];
      mentalAnchor = `Diamond Sutra: "All conditioned phenomena are like a dream, an illusion, a bubble, a shadow. When one perceives all appearances as non-appearances, one beholds reality. Let the mind abide nowhere, and so give rise to true awakening."`;
    } else if (category === 'wealth_window') {
      title = 'Wealth Horizon & Tactical Balance';
      diagnosis = `Transiting year ${ctx.activeAnnualYear} (${enGz}) governed by Hexagram [${ctx.activeHexagram}]. Vigor sits at ${ctx.vigorScore}/100 (${ctx.vigorTier}). For wealth and career cultivation, the core protocol is "Direct Wealth as anchor, Indirect Wealth as opportune upside, compounding steadily."`;
      tactics = [
        `[Consolidate the Core Base]: Keep your primary vocation completely unshakeable, allocating 80% of mental bandwidth to deepening irreplaceable technical depth.`,
        `[Lightweight 0-to-1 Second Curves]: For auxiliary ventures, validate prototypes with minimal capital burn before deploying further resources.`,
        `[Prudent Discretion]: Heed the counsel of ${ctx.firstScroll}—accumulate wealth with disciplined subtlety; deep waters carry mighty vessels with silence.`
      ];
      redLines = [
        `Never enter high-leverage speculative ventures with opaque terms;`,
        `Never partner with individuals exhibiting broken integrity or turbulent astrological clash.`
      ];
      mentalAnchor = `Di Tian Sui: "How is great wealth discerned? When the qi of wealth opens the gates. Direct and Indirect Wealth mutually generative establish enduring fortune."`;
    } else {
      title = 'Macro Elemental Alignment & Strategic Overview';
      diagnosis = `Day Master [${enDm}] carries a vigor score of ${ctx.vigorScore}/100 (${ctx.vigorTier}) under the ${ctx.activeAnnualYear} (${enGz}) transit governed by Hexagram [${ctx.activeHexagram}]. Your field is currently positioned in a phase of ${isWeak ? 'internal consolidation, stealth mastery, and energy conservation' : 'steady strategic expansion, grounded authority, and broad momentum'}.`;
      tactics = [
        `[Harmonize with Natural Cycles]: Align personal rhythms with seasonal transitions. Prioritize restorative sleep and physical grounding to nurture your core root.`,
        `[Focus on Compounding Anchors]: Discard superficial noise and channel mental bandwidth into one or two high-leverage initiatives.`,
        `[Pragmatic Adaptability]: Embody the wisdom of ${ctx.firstScroll}—remain flexible, calm, and let patience resolve outer obstacles.`
      ];
      redLines = [
        `Never execute major life-altering decisions when fatigued or running low on physical vitality;`,
        `Never waste cognitive compute on trivial social debates or ungrounded speculation.`
      ];
      mentalAnchor = `Zhuangzi (Free and Easy Wandering): "He who travels to the green woods takes three meals and returns with his belly still full; he who travels a hundred leagues pounds grain by night; he who travels a thousand leagues gathers provisions for three months. Mount the true order of heaven and earth, and ride upon the changes of the six energies!"`;
    }

    return {
      category: category,
      title: title,
      contextMeta: {
        dm: enDm,
        score: ctx.vigorScore,
        tier: ctx.vigorTier,
        year: ctx.activeAnnualYear,
        ganzhi: enGz,
        hex: (ctx.activeHexagram || 'The Creative').replace(/[一-龥]/g, '').trim() || 'The Creative',
        scroll: (ctx.firstScroll || 'Scroll I: Adaptability').replace(/[一-龥]/g, '').trim() || 'Scroll I: Adaptability',
        archetype: (ctx.primaryArchetype || 'Specialist & Engineering').replace(/[一-龥]/g, '').trim() || 'Specialist & Engineering'
      },
      diagnosis: diagnosis,
      tactics: tactics,
      redLines: redLines,
      mentalAnchor: mentalAnchor
    };
  }
}

if (typeof window !== 'undefined') {
  window.AdvisorEngine = AdvisorEngine;
}
if (typeof globalThis !== 'undefined') {
  globalThis.AdvisorEngine = AdvisorEngine;
}
