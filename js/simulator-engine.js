/**
 * 现实决策 · 双轨对抗推演沙盘引擎 (Dual-Track 'What-If' Decision Simulator Engine)
 * Compares two realistic career, location, and strategic options against natal vigor,
 * geographic five elements, Ten Gods organizational dynamics, and 14-character temporal resonance.
 * 100% Offline-First, deterministic, and fully bilingual (zh/en).
 */

class ScenarioSimulatorEngine {
  /**
   * Helper: Lookup Institution in database
   */
  static findInstitution(key) {
    if (!key) return null;
    const db = (typeof INSTITUTIONS_DB !== 'undefined') ? INSTITUTIONS_DB : (typeof window !== 'undefined' ? window.INSTITUTIONS_DB : null);
    if (!db) return null;
    const lowerKey = key.toLowerCase().trim();
    for (const c in db) {
      const list = db[c];
      for (const inst of list) {
        if (inst.id.toLowerCase() === lowerKey ||
            inst.nameZh.toLowerCase() === lowerKey ||
            inst.nameEn.toLowerCase() === lowerKey ||
            lowerKey.includes(inst.id.toLowerCase()) ||
            lowerKey.includes(inst.nameZh.toLowerCase()) ||
            inst.nameZh.includes(key) ||
            inst.nameEn.toLowerCase().includes(lowerKey)) {
          return inst;
        }
      }
    }
    return null;
  }

  /**
   * Helper: Lookup Enterprise in database
   */
  static findEnterprise(key) {
    if (!key) return null;
    const db = (typeof ENTERPRISES_DB !== 'undefined') ? ENTERPRISES_DB : (typeof window !== 'undefined' ? window.ENTERPRISES_DB : null);
    if (!db) return null;
    const lowerKey = key.toLowerCase().trim();
    for (const c in db) {
      const list = db[c];
      for (const ent of list) {
        if (ent.id.toLowerCase() === lowerKey ||
            ent.nameZh.toLowerCase() === lowerKey ||
            ent.nameEn.toLowerCase() === lowerKey ||
            lowerKey.includes(ent.id.toLowerCase()) ||
            lowerKey.includes(ent.nameZh.toLowerCase()) ||
            ent.nameZh.includes(key) ||
            ent.nameEn.toLowerCase().includes(lowerKey)) {
          return ent;
        }
      }
    }
    return null;
  }

  /**
   * Helper: Evaluate City-Industry Micro-Ecosystem
   */
  static getMicroEcosystemAnalysis(country, city, industry, isEn) {
    const c = (country || '').toUpperCase();
    const ct = (city || '').toLowerCase();
    const ind = industry || '';

    // Finance
    if (ind === 'finance_quant') {
      if (ct.includes('shenzhen') || ct.includes('深圳')) {
        return isEn
          ? {
              tag: 'Shenzhen Quantitative Micro-Ecosystem: High-Frequency Alpha & Horse-Racing Dynamics',
              desc: 'Shenzhen finance is propelled by Southern Fire and dynamic capital velocity. The environment emphasizes high-frequency quantitative execution, rapid model iteration, and meritocratic horse-racing culture (Seven Killings & Indirect Wealth driven). Suited for vigorous minds who thrive in aggressive performance-driven environments.'
            }
          : {
              tag: '深圳金融微生态：高频量化与赛马制穿透',
              desc: '深圳金融坐落于南方丙丁火地，充盈着敏捷高效与高流动性。生态极度推崇高频量化模型、敏捷迭代与高强度的业绩赛马机制（七杀偏财场能极盛）。适合精力充沛、能在结果导向高压下迅速变现之人。'
            };
      }
      if (ct.includes('london') || ct.includes('伦敦')) {
        return isEn
          ? {
              tag: 'London Financial Hub: Global Macro Strategy & Common Law Governance',
              desc: 'The City of London and Mayfair represent centuries of financial stewardship governed by English Common Law. The ecosystem prioritizes global macro allocation, strict institutional risk management, cross-border multi-currency hedging, and fiduciary compliance (Direct Officer & Direct Resource driven).'
            }
          : {
              tag: '伦敦金融微生态：全球宏观对冲与普通法制度合规',
              desc: '伦敦金融城与梅费尔依托数百年金融底蕴与英美普通法程序正义，生态重在“全球宏观大类资产配置、严格风险限额与长线信义合规”（正官正印场能深厚）。适合注重合规护城河与稳健深耕者。'
            };
      }
      if (ct.includes('new york') || ct.includes('纽约') || ct.includes('wall street')) {
        return isEn
          ? {
              tag: 'New York Wall Street: Elite Investment Banking & High-Stakes Capital',
              desc: 'Wall Street embodies high-stakes financial warfare, intensive dealmaking, and fierce meritocracy driven by Direct Wealth and Seven Killings.'
            }
          : {
              tag: '纽约华尔街微生态：投行并购与精英资本交锋',
              desc: '华尔街集聚全球最高密度投行与私募巨头，兼具偏财之锐气与七杀之威权，强调高强度高回报的精英博弈与全天候商业变现。'
            };
      }
      if (ct.includes('toronto') || ct.includes('多伦多') || ct.includes('bay street')) {
        return isEn
          ? {
              tag: 'Toronto Bay Street: Institutional Pension Management & Tier-1 Stability',
              desc: 'Bay Street is anchored by Canada\'s Big Five banks and world-class public pension funds (CPPIB, OTPP), embodying Direct Resource and Direct Officer institutional prudence.'
            }
          : {
              tag: '多伦多湾街微生态：大型养老金管治与一级银行稳健盘',
              desc: '多伦多湾街由加拿大五大行与全球顶级养老金（CPPIB/OTPP）为主导，秉持正印正官稳健之风，注重资产安全性与长线年化稳健收益。'
            };
      }
      if (ct.includes('shanghai') || ct.includes('上海') || ct.includes('lujiazui')) {
        return isEn
          ? {
              tag: 'Shanghai Financial Hub: Institutional Asset Management & Systematic Quant',
              desc: 'Lujiazui commands the highest density of mutual funds, institutional brokerages, and algorithmic quant managers, blending Eastern Wood vitality with deep regulatory infrastructure.'
            }
          : {
              tag: '上海金融微生态：陆家嘴全牌照资产管理与机构量化',
              desc: '陆家嘴汇聚全国最高密度外资公募、券商总部与顶尖量化私募，兼具东方甲木生发与金融厚重印星场能，注重系统化投研框架与长线资管。'
            };
      }
      if (ct.includes('singapore') || ct.includes('新加坡')) {
        return isEn
          ? {
              tag: 'Singapore Wealth Management: Offshore Family Offices & Global Capital Nexus',
              desc: 'Singapore finance is propelled by vibrant Equatorial Fire, commanding global family offices, hedge funds, and multi-currency trusts with premier fiduciary governance.'
            }
          : {
              tag: '新加坡金融微生态：全球离岸信托与合规免税护城河',
              desc: '新加坡金融坐落于纯阳离火之位，汇聚全球离岸私人银行、家族办公室与对冲基金，重在长线财富保全、全球配置与普通法程序合规。'
            };
      }
    }

    // Tech / AI
    if (ind === 'tech_ai') {
      if (ct.includes('london') || ct.includes('伦敦')) {
        return isEn
          ? {
              tag: 'London AI Hub: Foundational Mathematical Rigor & Academic Synergy',
              desc: 'London is the global nexus for fundamental AI research (epitomized by DeepMind). The micro-ecosystem blends world-class collegiate mathematics with patient foundational discovery (Water and Wood synergy).'
            }
          : {
              tag: '伦敦AI微生态：底层数学底蕴与产学研厚度',
              desc: '伦敦以 Google DeepMind 等世界顶级实验室为核心，依托剑桥牛津帝国理工数理底蕴，极重底层算法创新与基础理论突破，兼具水木生发之气。'
            };
      }
      if (ct.includes('shenzhen') || ct.includes('深圳')) {
        return isEn
          ? {
              tag: 'Shenzhen AI Hub: Massive Commercialization & Rapid Scale',
              desc: 'Shenzhen AI thrives on immediate commercial integration, hardware-software synergy, and massive user scale driven by Southern Fire dynamism.'
            }
          : {
              tag: '深圳AI微生态：软硬一体落地与极速商业化闭环',
              desc: '深圳AI生态依托珠三角智能硬件供应链与腾讯/华为等科技巨擘，强调AI算法在产业、消费端与智能制造中的极速商业落地。'
            };
      }
      if (ct.includes('san francisco') || ct.includes('silicon valley') || ct.includes('旧金山') || ct.includes('硅谷')) {
        return isEn
          ? {
              tag: 'Silicon Valley: Frontier Generative AI & Disruptive Venture Capital',
              desc: 'The Bay Area is the world engine of disruptive AI innovation, frontier models, and abundant venture capital funding.'
            }
          : {
              tag: '硅谷/旧金山微生态：前沿生成式AI与颠覆性风险投资',
              desc: '以OpenAI、Anthropic等先锋为代表，聚集全球最密集的风险资本与前沿大模型算力，崇尚颠覆式创新。'
            };
      }
      if (ct.includes('hangzhou') || ct.includes('杭州')) {
        return isEn
          ? {
              tag: 'Hangzhou AI Hub: Cloud-Native Infrastructure & Platform Algorithms',
              desc: 'Anchored by Alibaba and leading cloud platforms, the ecosystem excels in recommendation algorithms, enterprise cloud infrastructure, and rapid monetization.'
            }
          : {
              tag: '杭州数字AI微生态：平台算法中台与云原生极速迭代',
              desc: '依托阿里巴巴未来科技城与云计算基础设施，算法极度聚焦电商推荐、企业服务与生成式内容变现，商业转化效率极高。'
            };
      }
      if (ct.includes('shanghai') || ct.includes('上海')) {
        return isEn
          ? {
              tag: 'Shanghai Zhangjiang AI Hub: Semiconductor Integration & Hardcore AI for Science',
              desc: 'Anchored by Zhangjiang High-Tech Park, algorithmic innovation deeply integrates with semiconductor fabrication, computational biology, and industrial AI.'
            }
          : {
              tag: '上海张江AI微生态：集成电路微电子与硬核科学智能',
              desc: '依托张江高科技园区，算法深度渗透高端晶圆半导体、生物医药计算与工业大模型，强调产学研一体化硬核工程壁垒。'
            };
      }
      if (ct.includes('singapore') || ct.includes('新加坡')) {
        return isEn
          ? {
              tag: 'Singapore AI Hub: Regional Tech Headquarters & ASEAN Gateway',
              desc: 'Driven by the National AI Strategy 2.0, Singapore leverages low jurisdictional risk and premier bilingual commercial infrastructure as the launchpad for enterprise AI across Southeast Asia.'
            }
          : {
              tag: '新加坡AI微生态：跨国科技区域总部与东盟出海跳板',
              desc: '以国家AI战略2.0为引领，依托极低地缘风险与顶尖英文商业环境，成为前沿AI模型与企业级软件在东南亚商业落地的中枢。'
            };
      }
    }

    // Creative Media & Digital Content
    if (ind === 'creative_media') {
      if (ct.includes('hangzhou') || ct.includes('杭州')) {
        return isEn
          ? {
              tag: 'Hangzhou Digital Media Hub: Livestreaming E-Commerce & Creator Networks',
              desc: 'The global epicenter of livestreaming commerce and creator monetization, translating digital traffic into compounding commercial cashflow.'
            }
          : {
              tag: '杭州文创电商微生态：全域内容直播与超级MCN矩阵',
              desc: '全球第一电商直播策源地，文创内容、短视频算法与供应链高度闭环，崇尚偏财变现与敏捷流量捕获。'
            };
      }
      if (ct.includes('guangzhou') || ct.includes('广州')) {
        return isEn
          ? {
              tag: 'Guangzhou Gaming & Media: Vanguard Gaming & Global Publishing',
              desc: 'Anchored by NetEase Games and Southern Media Group, the ecosystem leads in video game engineering, overseas publishing, and profitable cultural IP monetization.'
            }
          : {
              tag: '广州传媒游戏微生态：老牌泛娱乐旗舰与海外游戏发行',
              desc: '以网易互娱、南方报业为基座，在网络游戏研发、全球泛娱乐发行与动漫IP变现上具备极深积累，务实低调且现金流充沛。'
            };
      }
      if (ct.includes('vancouver') || ct.includes('温哥华')) {
        return isEn
          ? {
              tag: 'Vancouver VFX Hub: Hollywood North Digital Arts & Balanced Living',
              desc: 'World-class cluster for cinematic visual effects and game development (Sony Imageworks, EA), offering supreme work-life balance and creative autonomy.'
            }
          : {
              tag: '温哥华数码特效微生态：好莱坞北方视觉工业与宽和生活底色',
              desc: '全球最密集影视特效与AAA游戏工作室聚集地（索尼图形图像/EA），兼具北美最高WLB（工作生活平衡）与太平洋西岸包容氛围。'
            };
      }
    }

    // Academia
    if (ind === 'academia_research') {
      if (ct.includes('birmingham') || ct.includes('伯明翰')) {
        return isEn
          ? {
              tag: 'Birmingham Academic Micro-Ecosystem: Central Earth Stability & Materials Science',
              desc: 'Birmingham embodies Central Earth grounded stability, excelling in clinical medicine, advanced metallurgy, and steady faculty governance.'
            }
          : {
              tag: '伯明翰学术微生态：中央戊己土稳健治学与应用转化',
              desc: '伯明翰坐落于英国地理中枢中央戊己土位，在先进材料、医疗健康与重工业技术研发上底蕴深厚，教职晋升体制稳固。'
            };
      }
      if (ct.includes('oxford') || ct.includes('cambridge') || ct.includes('牛津') || ct.includes('剑桥')) {
        return isEn
          ? {
              tag: 'Oxbridge Academic Micro-Ecosystem: Collegiate Independence & Supreme Heritage',
              desc: 'Collegiate autonomy, global academic primacy, and centuries of scholarly sovereignty provide unmatched prestige and intellectual freedom.'
            }
          : {
              tag: '牛剑学术微生态：学院制古老学统与学者最高殿堂',
              desc: '牛津剑桥八百年学统与学院制独立自治，赋予学者至高无上的印星声望与独立学术治学空间。'
            };
      }
      if (ct.includes('beijing') || ct.includes('北京')) {
        return isEn
          ? {
              tag: 'Beijing Academic Micro-Ecosystem: National Laboratories & Strategic Prestige',
              desc: 'Tsinghua and Peking University represent the pinnacle of national research initiatives, policy advisory power, and top-tier scientific funding.'
            }
          : {
              tag: '北京高校学术微生态：国家战略级实验室与顶层智库威权',
              desc: '清北领衔的高校集群承载国家核心攻关战略，聚集全国最充沛的科研基金与学者威权，正官正印声望极大。'
            };
      }
      if (ct.includes('singapore') || ct.includes('新加坡')) {
        return isEn
          ? {
              tag: 'Singapore Academic Hub: NUS-NTU Frontier Scholarly Primary',
              desc: 'NUS and NTU represent global top-15 collegiate excellence with massive endowment capital, world-leading citations, and state-of-the-art laboratory infrastructure.'
            }
          : {
              tag: '新加坡高校科研微生态：新国立南洋理工世界级学统',
              desc: '新加坡国立大学与南洋理工大学高居全球前15强，科研经费极其充沛，高被引学者云集，具备极高国际学术声望。'
            };
      }
    }

    return null;
  }

  /**
   * Country five-element attribute lookup helper
   */
  static getCountryElement(countryKey) {
    const c = (countryKey || 'UK').toUpperCase().trim();
    if (c === 'CHINA' || c === '中国') {
      return {
        country: 'China',
        primary: 'Wood',
        secondary: 'Earth',
        elem: 'Wood',
        nameZh: '中国 · 东方青龙甲乙木与中央坤土',
        nameEn: 'China · Eastern Wood & Central Earth',
        descZh: '东方生发震木之气，兼具神州中央厚德坤土，长线厚积薄发，基建与实体生生不息。',
        descEn: 'Vibrant Eastern Wood vitality anchored by resilient Central Earth stability, fostering expansive scale.'
      };
    }
    if (c === 'UK' || c === 'UNITED KINGDOM' || c === '英国') {
      return {
        country: 'UK',
        primary: 'Metal',
        secondary: 'Water',
        elem: 'Metal',
        nameZh: '英国 · 西方庚辛金与大西洋坎水',
        nameEn: 'UK · Western Metal & Atlantic Water',
        descZh: '西方庚辛白金律法正义，融通大西洋坎水信义金融，制度沉淀极深，兼具智谋涵养。',
        descEn: 'Western Metal institutional rule of law coupled with deep Atlantic Water financial stewardship.'
      };
    }
    if (c === 'USA' || c === 'US' || c === '美国') {
      return {
        country: 'USA',
        primary: 'Metal',
        secondary: 'Fire',
        elem: 'Metal',
        nameZh: '美国 · 西方庚辛金与丙丁离火',
        nameEn: 'USA · Western Metal & Southern Fire',
        descZh: '西方金锐之气与现代商业开拓离火激荡，崇尚资本博弈与颠覆式技术突破。',
        descEn: 'Western Metal sharpness coupled with dynamic commercial Fire, driving aggressive frontier breakthroughs.'
      };
    }
    if (c === 'CANADA' || c === '加拿大') {
      return {
        country: 'Canada',
        primary: 'Water',
        secondary: 'Metal',
        elem: 'Water',
        nameZh: '加拿大 · 北方壬癸水与西风白金',
        nameEn: 'Canada · Northern Water & Western Metal',
        descZh: '北方浩瀚坎水之气，涵养自然资源与稳健养老金融，社会安全网宽厚，利于静心蓄力。',
        descEn: 'Expansive Northern Water energy nurturing steady natural wealth, institutional pensions, and peaceful living.'
      };
    }
    if (c === 'SINGAPORE' || c === '新加坡') {
      return {
        country: 'Singapore',
        primary: 'Fire',
        secondary: 'Wood',
        elem: 'Fire',
        nameZh: '新加坡 · 赤道纯阳离火与生发甲木',
        nameEn: 'Singapore · Equatorial Fire & Vibrant Wood',
        descZh: '赤道极盛离火之明，汇通东南亚雨林甲木生发之机，资本流转神速，规制井然。',
        descEn: 'Equatorial radiant Fire coupled with Southeast Asian Wood growth, command high-velocity capital governance.'
      };
    }

    return {
      country: countryKey || 'Global',
      primary: 'Earth',
      secondary: 'Metal',
      elem: 'Earth',
      nameZh: '全球枢纽 · 中和戊己土',
      nameEn: 'Global Nexus · Balanced Earth',
      descZh: '中央中和戊己土之场能，稳健承载各方气机流转。',
      descEn: 'Balanced Central Earth energy providing a grounded matrix for multi-regional mobility.'
    };
  }

  /**
   * Geographic five-element lookup helper (City)
   */
  static getCityElement(country, cityKey) {
    const c = (country || 'UK').toUpperCase();
    const city = (cityKey || '').toLowerCase();

    // UK
    if (c === 'UK' || c === 'UNITED KINGDOM' || c === '英国') {
      if (city.includes('birmingham') || city.includes('coventry') || city.includes('伯明翰')) return { elem: 'Earth', nameZh: '中央戊己土', nameEn: 'Central Earth' };
      if (city.includes('london') || city.includes('bristol') || city.includes('southampton') || city.includes('伦敦')) return { elem: 'Fire', nameZh: '南方丙丁火', nameEn: 'Southern Fire' };
      if (city.includes('manchester') || city.includes('edinburgh') || city.includes('glasgow') || city.includes('leeds') || city.includes('曼彻斯特')) return { elem: 'Water', nameZh: '北方壬癸水', nameEn: 'Northern Water' };
      if (city.includes('cambridge') || city.includes('norwich') || city.includes('剑桥')) return { elem: 'Wood', nameZh: '东方甲乙木', nameEn: 'Eastern Wood' };
      if (city.includes('liverpool') || city.includes('cardiff') || city.includes('belfast') || city.includes('利物浦')) return { elem: 'Metal', nameZh: '西方庚辛金', nameEn: 'Western Metal' };
      return { elem: 'Earth', nameZh: '中央戊己土', nameEn: 'Central Earth' };
    }

    // CHINA
    if (c === 'CHINA' || c === '中国') {
      if (city.includes('beijing') || city.includes('tianjin') || city.includes('shenyang') || city.includes('harbin') || city.includes('北京')) return { elem: 'Water', nameZh: '北方壬癸水', nameEn: 'Northern Water' };
      if (city.includes('guangzhou') || city.includes('shenzhen') || city.includes('hongkong') || city.includes('haikou') || city.includes('广州') || city.includes('深圳')) return { elem: 'Fire', nameZh: '南方丙丁火', nameEn: 'Southern Fire' };
      if (city.includes('shanghai') || city.includes('hangzhou') || city.includes('nanjing') || city.includes('suzhou') || city.includes('上海') || city.includes('杭州')) return { elem: 'Wood', nameZh: '东方甲乙木', nameEn: 'Eastern Wood' };
      if (city.includes('chengdu') || city.includes('chongqing') || city.includes('xian') || city.includes('成都') || city.includes('重庆') || city.includes('西安')) return { elem: 'Metal', nameZh: '西方庚辛金', nameEn: 'Western Metal' };
      return { elem: 'Earth', nameZh: '中央戊己土', nameEn: 'Central Earth' };
    }

    // USA
    if (c === 'USA' || c === 'US' || c === '美国') {
      if (city.includes('new york') || city.includes('boston') || city.includes('washington') || city.includes('philadelphia') || city.includes('纽约') || city.includes('波士顿')) return { elem: 'Wood', nameZh: '东方甲乙木', nameEn: 'Eastern Wood' };
      if (city.includes('miami') || city.includes('houston') || city.includes('atlanta') || city.includes('austin') || city.includes('迈阿密') || city.includes('休斯顿') || city.includes('奥斯汀')) return { elem: 'Fire', nameZh: '南方丙丁火', nameEn: 'Southern Fire' };
      if (city.includes('los angeles') || city.includes('san francisco') || city.includes('seattle') || city.includes('旧金山') || city.includes('洛杉矶')) return { elem: 'Metal', nameZh: '西方庚辛金', nameEn: 'Western Metal' };
      if (city.includes('minneapolis') || city.includes('detroit') || city.includes('chicago north') || city.includes('芝加哥')) return { elem: 'Water', nameZh: '北方壬癸水', nameEn: 'Northern Water' };
      return { elem: 'Earth', nameZh: '中央戊己土', nameEn: 'Central Earth' };
    }

    // CANADA
    if (c === 'CANADA' || c === '加拿大') {
      if (city.includes('toronto') || city.includes('ottawa') || city.includes('montreal') || city.includes('多伦多') || city.includes('渥太华')) return { elem: 'Fire', nameZh: '南方丙丁火', nameEn: 'Southern Fire' };
      if (city.includes('vancouver') || city.includes('calgary') || city.includes('victoria') || city.includes('温哥华') || city.includes('卡尔加里')) return { elem: 'Metal', nameZh: '西方庚辛金', nameEn: 'Western Metal' };
      if (city.includes('winnipeg') || city.includes('regina') || city.includes('温尼伯')) return { elem: 'Earth', nameZh: '中央戊己土', nameEn: 'Central Earth' };
      if (city.includes('edmonton') || city.includes('yellowknife') || city.includes('埃德蒙顿')) return { elem: 'Water', nameZh: '北方壬癸水', nameEn: 'Northern Water' };
      return { elem: 'Wood', nameZh: '东方甲乙木', nameEn: 'Eastern Wood' };
    }

    // SINGAPORE
    if (c === 'SINGAPORE' || c === '新加坡') {
      return { elem: 'Fire', nameZh: '南方丙丁火', nameEn: 'Southern Fire' };
    }

    return { elem: 'Earth', nameZh: '中和戊己土', nameEn: 'Balanced Earth' };
  }

  static formatCityName(city, isEn = false) {
    if (!city) return isEn ? 'Target City' : '目标城市';
    const cLow = city.toLowerCase();
    const map = {
      birmingham: { zh: '伯明翰', en: 'Birmingham' },
      london: { zh: '伦敦', en: 'London' },
      shenzhen: { zh: '深圳', en: 'Shenzhen' },
      beijing: { zh: '北京', en: 'Beijing' },
      shanghai: { zh: '上海', en: 'Shanghai' },
      hangzhou: { zh: '杭州', en: 'Hangzhou' },
      guangzhou: { zh: '广州', en: 'Guangzhou' },
      san_francisco: { zh: '旧金山', en: 'San Francisco' },
      sf: { zh: '旧金山', en: 'San Francisco' },
      silicon: { zh: '硅谷', en: 'Silicon Valley' },
      new_york: { zh: '纽约', en: 'New York' },
      ny: { zh: '纽约', en: 'New York' },
      toronto: { zh: '多伦多', en: 'Toronto' },
      vancouver: { zh: '温哥华', en: 'Vancouver' },
      singapore: { zh: '新加坡', en: 'Singapore' }
    };
    for (const k in map) {
      if (cLow.includes(k) || (k === 'san_francisco' && (cLow.includes('旧金山') || cLow.includes('sf'))) ||
          (k === 'shenzhen' && cLow.includes('深圳')) ||
          (k === 'beijing' && cLow.includes('北京')) ||
          (k === 'shanghai' && cLow.includes('上海')) ||
          (k === 'hangzhou' && cLow.includes('杭州')) ||
          (k === 'guangzhou' && cLow.includes('广州')) ||
          (k === 'london' && cLow.includes('伦敦')) ||
          (k === 'birmingham' && cLow.includes('伯明翰')) ||
          (k === 'new_york' && cLow.includes('纽约')) ||
          (k === 'toronto' && cLow.includes('多伦多')) ||
          (k === 'vancouver' && cLow.includes('温哥华')) ||
          (k === 'singapore' && cLow.includes('新加坡')) ||
          (k === 'silicon' && cLow.includes('硅谷'))) {
        return isEn ? map[k].en : map[k].zh;
      }
    }
    if (isEn && /[\u4e00-\u9fa5]/.test(city)) {
      return 'Target City';
    }
    return city;
  }

  static formatCountryName(country, isEn = false) {
    if (!country) return isEn ? 'Target Country' : '目标国度';
    const cLow = country.toLowerCase();
    if (cLow.includes('uk') || cLow.includes('britain') || cLow.includes('英国')) return isEn ? 'United Kingdom' : '英国';
    if (cLow.includes('china') || cLow.includes('中国')) return isEn ? 'China' : '中国';
    if (cLow.includes('usa') || cLow.includes('america') || cLow.includes('美国')) return isEn ? 'United States' : '美国';
    if (cLow.includes('canada') || cLow.includes('加拿大')) return isEn ? 'Canada' : '加拿大';
    if (cLow.includes('singapore') || cLow.includes('新加坡')) return isEn ? 'Singapore' : '新加坡';
    if (isEn && /[\u4e00-\u9fa5]/.test(country)) return 'Target Country';
    return country;
  }

  /**
   * Evaluates Combined Country + City Energy Synthesis against Day Master & Favorable/Unfavorable Elements
   */
  static evaluateCombinedGeoEnergy(countryKey, cityKey, dm, dmElem, favorableElems, unfavorableElems, isEn = false) {
    const countryMeta = this.getCountryElement(countryKey);
    const cityMeta = this.getCityElement(countryKey, cityKey);

    let score = 60;
    if (favorableElems.includes(cityMeta.elem)) score += 18;
    else if (unfavorableElems.includes(cityMeta.elem)) score -= 12;

    if (favorableElems.includes(countryMeta.primary)) score += 14;
    else if (unfavorableElems.includes(countryMeta.primary)) score -= 8;

    if (favorableElems.includes(countryMeta.secondary)) score += 8;

    score = Math.max(30, Math.min(98, score));

    const badgeZh = score >= 85 ? '极高共振 · 天乙贵地' : score >= 70 ? '良性生旺 · 磁场护持' : '耗损克抑 · 需设屏障';
    const badgeEn = score >= 85 ? 'Prime Resonance · Vital Field' : score >= 70 ? 'Harmonious Growth · Supportive' : 'Frictional Strain · Protective Buffer Needed';

    const descZh = `国度场能属【${countryMeta.nameZh}】，城市坐落于【${cityMeta.nameZh}】。此双重视角五行交感${score >= 75 ? '深度契合本命喜用神，磁场自带赋能催化效应。' : '对日主形成克泄之势，需结合环境布局补益平衡。'}`;
    const descEn = `National field is [${countryMeta.nameEn}], urban sector aligns with [${cityMeta.nameEn}]. This dual-tier matrix ${score >= 75 ? 'resonates strongly with your favorable elements, acting as an energetic catalyst.' : 'induces friction on your Day Master, calling for deliberate boundary management.'}`;

    return {
      score,
      badgeZh,
      badgeEn,
      descZh,
      descEn,
      countryMeta,
      cityMeta
    };
  }

  /**
   * Industry five-element mapping
   */
  static getIndustryElements(indKey) {
    const map = {
      'tech_ai': { primary: 'Fire', secondary: 'Wood', nameZh: 'AI人工智能与前沿科技 (火/木)', nameEn: 'AI & Frontier Technology (Fire/Wood)' },
      'finance_quant': { primary: 'Metal', secondary: 'Water', nameZh: '金融量化与对冲投资 (金/水)', nameEn: 'Quant Finance & Investments (Metal/Water)' },
      'academia_research': { primary: 'Water', secondary: 'Wood', nameZh: '高校学术与科研治学 (水/木)', nameEn: 'Academia & Pure Scientific Research (Water/Wood)' },
      'civil_admin': { primary: 'Earth', secondary: 'Fire', nameZh: '体制机关与合规行政 (土/火)', nameEn: 'Public Institutions & Compliance Administration (Earth/Fire)' },
      'manufacturing': { primary: 'Earth', secondary: 'Metal', nameZh: '实体智能制造与工程硬件 (土/金)', nameEn: 'Smart Manufacturing & Hardware Engineering (Earth/Metal)' },
      'creative_media': { primary: 'Wood', secondary: 'Fire', nameZh: '文化出海与数字内容创意 (木/火)', nameEn: 'Cultural Content & Creative Media (Wood/Fire)' }
    };
    return map[indKey] || map['tech_ai'];
  }

  /**
   * Manager leadership dynamic mapping
   */
  static getManagerDynamic(mgrKey) {
    const map = {
      'killings': { god: 'SevenKillings', nameZh: '严苛结果导向 · 七杀统帅型', nameEn: 'Strict Results-Driven (Seven Killings)', pressure: 30, breakthrough: 25 },
      'resource': { god: 'DirectResource', nameZh: '温和放权护持 · 正印庇佑型', nameEn: 'Nurturing & Empowering (Direct Resource)', pressure: -15, breakthrough: 10 },
      'rob_wealth': { god: 'RobWealth', nameZh: '同侪高压赛马 · 比劫竞逐型', nameEn: 'High-Stakes Peer Rivalry (Rob Wealth)', pressure: 35, breakthrough: 15 },
      'wealth': { god: 'DirectWealth', nameZh: '唯商业效益考量 · 财星驱动型', nameEn: 'Commercial & Incentive Driven (Wealth)', pressure: 20, breakthrough: 20 },
      'officer': { god: 'DirectOfficer', nameZh: '严明体制合规 · 正官秩序型', nameEn: 'Structured & Compliance-Bound (Officer)', pressure: 15, breakthrough: 12 }
    };
    return map[mgrKey] || map['resource'];
  }

  /**
   * 考察 行业适配度跟城市产业规划的重叠度 (Industry Fit & City Planning Overlap, the higher the overlap, the higher the score!)
   */
  static evaluateCityStrategicPlanning(countryKey, cityKey, industryKey, opt, isEn = false) {
    const ct = (cityKey || '').toLowerCase();
    const ind = industryKey || 'tech_ai';

    // Official City Strategic Planning Clusters Database
    const cityDatabase = {
      shenzhen: {
        clustersZh: '人工智能与具身智能、高频量化与科技金融、高端智能制造与微电子、数字创意出海',
        clustersEn: 'Embodied AI, Quantitative Fintech, Advanced Microelectronics & Digital Creative',
        pillars: {
          'tech_ai': { overlap: 97, tierZh: '战略第一核心支柱 (97% 重合)', tierEn: 'Primary Strategic Pillar (97% Overlap)', reasonZh: '国家新一代人工智能创新发展试验区，珠三角全链条智能硬件与软硬件闭环首选地。', reasonEn: 'National AI testbed with comprehensive supply chain synergy and rapid commercial velocity.' },
          'finance_quant': { overlap: 94, tierZh: '战略支柱金融核心 (94% 重合)', tierEn: 'Key Financial Pillar (94% Overlap)', reasonZh: '深交所金融科技创新高地与高频量化私募聚集区，资本周转速度极高。', reasonEn: 'Vibrant financial technology hub with intense capital velocity and algorithmic alpha.' },
          'manufacturing': { overlap: 95, tierZh: '千亿级硬核基石 (95% 重合)', tierEn: 'Cornerstone Manufacturing Cluster (95% Overlap)', reasonZh: '全球最密集精密的智能硬件与先进制造产业链。', reasonEn: 'World-leading precision electronics and smart hardware supply cluster.' },
          'creative_media': { overlap: 88, tierZh: '重点出海赛道 (88% 重合)', tierEn: 'High-Growth Global Media (88% Overlap)', reasonZh: '跨境数字文化与游戏出海战略集聚区。', reasonEn: 'Global digital entertainment and gaming export ecosystem.' },
          'academia_research': { overlap: 68, tierZh: '加速追赶中 (68% 重合)', tierEn: 'Developing Research Sector (68% Overlap)', reasonZh: '新型研究型高校加速落地，但基础学术纯理论积淀较京沪仍处于成长期。', reasonEn: 'Emerging collegiate infrastructure, with heavier tilt toward immediate industry application.' },
          'civil_admin': { overlap: 60, tierZh: '常规行政职能 (60% 重合)', tierEn: 'Standard Administrative Function (60% Overlap)', reasonZh: '民营经济与市场化主导，纯体制内行政资源密度非首位。', reasonEn: 'Market-dominated economy where civil bureaucracy holds lower relative leverage.' }
        }
      },
      beijing: {
        clustersZh: '国家级战略科技实验室、纯理论学术智库、新一代通用人工智能、大飞机与航天制造、体制机关管治',
        clustersEn: 'National Laboratories, Theoretical Thinktanks, Sovereign AI, Aerospace & State Governance',
        pillars: {
          'academia_research': { overlap: 98, tierZh: '国家最高学统殿堂 (98% 重合)', tierEn: 'Supreme National Academic Apex (98% Overlap)', reasonZh: '清北中科院领衔，全国最密集战略级实验室与国家重点科研专项基金。', reasonEn: 'Top-tier university nexus commanding peak state funding and international prestige.' },
          'tech_ai': { overlap: 96, tierZh: '国家大模型战略重镇 (96% 重合)', tierEn: 'National Sovereign AI Nexus (96% Overlap)', reasonZh: '智源研究院与海淀高校算法走廊，大模型基础理论创新全国首屈一指。', reasonEn: 'Unrivaled concentration of foundational AI researchers and theoretical algorithm talent.' },
          'civil_admin': { overlap: 98, tierZh: '全国治理威权中枢 (98% 重合)', tierEn: 'National Governance Core (98% Overlap)', reasonZh: '中央国家机关部委、最高监管机构与央企总部聚集，正官正印权能极重。', reasonEn: 'Supreme governance capital commanding policy regulation and state enterprise direction.' },
          'finance_quant': { overlap: 80, tierZh: '金融监管与主权投资 (80% 重合)', tierEn: 'Sovereign Regulatory Finance (80% Overlap)', reasonZh: '金融街以监管和主权基金为主，高频量化交易自由度受合规约束较高。', reasonEn: 'Focuses on state policy banking and regulatory compliance rather than speculative alpha.' },
          'manufacturing': { overlap: 85, tierZh: '高端航天军工制造 (85% 重合)', tierEn: 'Strategic Aerospace & Defense (85% Overlap)', reasonZh: '航天军工与战略高端重型装备集聚。', reasonEn: 'Specializes in high-security aerospace and strategic defense hardware.' },
          'creative_media': { overlap: 82, tierZh: '主流影视文化中心 (82% 重合)', tierEn: 'National Cultural Capital (82% Overlap)', reasonZh: '国家广播影视机构与主流舆论传媒源头。', reasonEn: 'National broadcasting and state-level cultural institution headquarters.' }
        }
      },
      london: {
        clustersZh: '全球宏观对冲基金、底层数理基础AI研发、英美普通法合规、国际艺术与创意出版',
        clustersEn: 'Global Macro Hedge Funds, Foundational Mathematics/AI, Common Law Compliance & Media',
        pillars: {
          'finance_quant': { overlap: 98, tierZh: '全球宏观资本中枢 (98% 重合)', tierEn: 'Global Macro Capital Nexus (98% Overlap)', reasonZh: '全球第一大外汇交易中心与对冲基金之都，跨时区与普通法资产信托体系完备。', reasonEn: 'World-leading FX and macro hedge fund capital governed by English Common Law.' },
          'tech_ai': { overlap: 96, tierZh: '底层前沿AI算法高地 (96% 重合)', tierEn: 'Foundational AI Theory Hub (96% Overlap)', reasonZh: '以 Google DeepMind、牛剑数理为依托，基础算法研究与科学智能居世界首位。', reasonEn: 'Global epicenter for fundamental algorithm research, anchored by DeepMind and top mathematics.' },
          'academia_research': { overlap: 95, tierZh: '全球顶级学府集群 (95% 重合)', tierEn: 'Elite Academic Constellation (95% Overlap)', reasonZh: '帝国理工、UCL、LSE与伦敦大学联盟，高被引学者与跨国学术研究网络极密。', reasonEn: 'Dense network of world-class universities and multinational scholarly initiatives.' },
          'creative_media': { overlap: 92, tierZh: '国际文化与媒介策源地 (92% 重合)', tierEn: 'Global Media & Cultural Source (92% Overlap)', reasonZh: 'BBC、全球顶尖出版集团与现代艺术策展核心。', reasonEn: 'Global media broadcasting, publishing, and vanguard contemporary cultural arts.' },
          'civil_admin': { overlap: 88, tierZh: '国际仲裁与普通法合规 (88% 重合)', tierEn: 'International Arbitration & Legal (88% Overlap)', reasonZh: '全球商事仲裁第一胜地与严格合规机构。', reasonEn: 'Supreme global dispute arbitration and financial regulatory compliance center.' },
          'manufacturing': { overlap: 58, tierZh: '轻工业与高端设计 (58% 重合)', tierEn: 'Niche Engineering & Design (58% Overlap)', reasonZh: '重度制造业已外移，侧重概念设计与定制工程。', reasonEn: 'Physical manufacturing largely deindustrialized; focuses on niche engineering.' }
        }
      },
      birmingham: {
        clustersZh: '先进精密工程制造、临床医学与生命健康、中央行政物流中枢、材料科学应用研发',
        clustersEn: 'Advanced Precision Engineering, Clinical Medicine, Central Logistics & Applied Materials',
        pillars: {
          'manufacturing': { overlap: 96, tierZh: '英国工业与工程制造心脏 (96% 重合)', tierEn: 'UK Industrial & Engineering Heart (96% Overlap)', reasonZh: '英国工业革命发源地，捷豹路虎与先进材料制造的核心大本营。', reasonEn: 'Historic core of British manufacturing, advanced metallurgy, and automotive engineering.' },
          'academia_research': { overlap: 92, tierZh: '罗素名校与临床治学高地 (92% 重合)', tierEn: 'Russell Group Research Citadel (92% Overlap)', reasonZh: '伯明翰大学医学与先进材料研发底蕴深厚，教职体制极其稳健扎实。', reasonEn: 'Distinguished university anchored by medical breakthroughs and material sciences.' },
          'civil_admin': { overlap: 86, tierZh: '英格兰地理中枢行政 (86% 重合)', tierEn: 'Central Regional Administration (86% Overlap)', reasonZh: '众多国家机构第二总部迁入地，公职体系稳定，生活能耗比极佳。', reasonEn: 'Key secondary hub for government institutions offering high stability and low friction.' },
          'tech_ai': { overlap: 74, tierZh: '工业AI与智能物流 (74% 重合)', tierEn: 'Industrial AI & Smart Supply (74% Overlap)', reasonZh: '偏重工业自动化、数字孪生与物流调度算法。', reasonEn: 'Focused on industrial automation, digital twins, and applied supply-chain tech.' },
          'finance_quant': { overlap: 70, tierZh: '商业银行后台与合规 (70% 重合)', tierEn: 'Commercial Banking Operations (70% Overlap)', reasonZh: '汇丰英国总部所在地，侧重零售金融与中后台业务而非高频投机。', reasonEn: 'UK retail banking operational hub (HSBC UK), focusing on stability over speculation.' },
          'creative_media': { overlap: 72, tierZh: '区域文化与数字艺术 (72% 重合)', tierEn: 'Regional Creative Arts (72% Overlap)', reasonZh: '中英格兰文化创意孵化基地。', reasonEn: 'Growing regional media ecosystem with active university incubators.' }
        }
      },
      san_francisco: {
        clustersZh: '生成式大模型前沿研发、全球颠覆性风险投资、脑机接口与前沿芯片设计',
        clustersEn: 'Generative AI Frontiers, Global Disruptive VC, Neurotech & Semiconductor Design',
        pillars: {
          'tech_ai': { overlap: 99, tierZh: '全球AI第一主战场 (99% 重合)', tierEn: 'World Generative AI Epicenter (99% Overlap)', reasonZh: 'OpenAI、Anthropic、谷歌等全球最顶尖大模型算力与先锋工程师圣地。', reasonEn: 'Unrivaled global concentration of frontier AI models, GPUs, and venture capital.' },
          'finance_quant': { overlap: 93, tierZh: '顶级风投与科技金融 (93% 重合)', tierEn: 'Venture Capital & Tech Banking (93% Overlap)', reasonZh: '沙丘路全球第一风险投资资本与科技并购交易场。', reasonEn: 'Sand Hill Road venture capital powerhouse powering tech equity windfalls.' },
          'creative_media': { overlap: 90, tierZh: '数字创意与AI生成内容 (90% 重合)', tierEn: 'AI-Generated Content & Digital Media (90% Overlap)', reasonZh: 'AI驱动的生成式媒体、3D虚拟化与硅谷创意先锋。', reasonEn: 'Vanguard of AI-assisted media, digital entertainment, and creative tools.' },
          'manufacturing': { overlap: 78, tierZh: '芯片架构设计与机器人原型 (78% 重合)', tierEn: 'Silicon Architecture & Robotics (78% Overlap)', reasonZh: '注重芯片架构研发与机器人软件闭环，实体生产多外包。', reasonEn: 'Focuses on fabless semiconductor design and robotics prototyping.' },
          'academia_research': { overlap: 94, tierZh: '斯坦福伯克利学术双子星 (94% 重合)', tierEn: 'Stanford-Berkeley Academic Apex (94% Overlap)', reasonZh: '世界最高转化率的产学研学术走廊。', reasonEn: 'Unmatched technology transfer rate bridging elite labs to industry dominance.' },
          'civil_admin': { overlap: 50, tierZh: '弱体制自由市场 (50% 重合)', tierEn: 'Market-Dominated / Low Bureaucracy (50% Overlap)', reasonZh: '高度自由竞争，体制内合规机会相对有限。', reasonEn: 'Hyper-competitive market culture where public administration offers limited leverage.' }
        }
      },
      new_york: {
        clustersZh: '全球顶级投资银行与二级交易、跨国商业传媒帝国、商业律所巨擘、金融科技量化',
        clustersEn: 'Investment Banking, Global Media Conglomerates, White-Shoe Law & Quant Tech',
        pillars: {
          'finance_quant': { overlap: 99, tierZh: '全球资本第一交锋场 (99% 重合)', tierEn: 'Global Financial Apex (99% Overlap)', reasonZh: '华尔街集聚高盛、摩根大通、黑石与千亿级对冲基金，资本回报天花板极高。', reasonEn: 'Wall Street epicenter of global investment banking, private equity, and hedge funds.' },
          'creative_media': { overlap: 95, tierZh: '世界传媒与广告出版总署 (95% 重合)', tierEn: 'Global Media & Advertising Empire (95% Overlap)', reasonZh: '麦迪逊大道广告业、时代华纳与顶级报业集团之核心。', reasonEn: 'World capital of advertising, global publishing houses, and television broadcast media.' },
          'civil_admin': { overlap: 90, tierZh: '联合国与跨国法律规范 (90% 重合)', tierEn: 'UN & Global Legal Corporate Hub (90% Overlap)', reasonZh: '联合国总部、顶级白鞋律所与国际商业合规权威。', reasonEn: 'United Nations headquarters and prestigious international corporate law firms.' },
          'tech_ai': { overlap: 92, tierZh: '金融科技与硅巷AI应用 (92% 重合)', tierEn: 'Fintech & Silicon Alley AI (92% Overlap)', reasonZh: '硅巷聚焦企业级AI、金融分析模型与高价值B端软件。', reasonEn: 'Silicon Alley focused on enterprise AI solutions and high-margin financial tech.' },
          'academia_research': { overlap: 90, tierZh: '哥大纽大世界级学统 (90% 重合)', tierEn: 'Columbia & NYU Elite Scholarly Hub (90% Overlap)', reasonZh: '常春藤名校与顶尖医学法学教研网络。', reasonEn: 'Ivy League scholarly heritage commanding supreme professional school recognition.' },
          'manufacturing': { overlap: 45, tierZh: '非实体生产型城市 (45% 重合)', tierEn: 'Deindustrialized Metropolis (45% Overlap)', reasonZh: '高度服务型与金融型经济，重度制造业基本缺席。', reasonEn: 'Post-industrial service-driven economy with negligible heavy hardware manufacturing.' }
        }
      },
      toronto: {
        clustersZh: '加拿大五大商业银行、北美AI先锋深度学习高地、全球顶级公共养老金管理',
        clustersEn: 'Big Five Canadian Banks, North American AI Frontier & Sovereign Pension Portfolios',
        pillars: {
          'finance_quant': { overlap: 96, tierZh: '加拿大第一金融湾街 (96% 重合)', tierEn: 'Bay Street Financial Fortress (96% Overlap)', reasonZh: '加拿大五大行与全球最大的公共养老金管理集群，稳健与抗风险能力极强。', reasonEn: 'Anchored by the Big Five banks and massive institutional pensions (CPPIB, OTPP).' },
          'tech_ai': { overlap: 94, tierZh: '图灵奖深度学习发源地 (94% 重合)', tierEn: 'Deep Learning Pioneer Nexus (94% Overlap)', reasonZh: 'Hinton教授与Vector Institute所在地，学术研究与技术落地高度融通。', reasonEn: 'Cradle of deep learning (Geoffrey Hinton, Vector Institute) with top research talent.' },
          'academia_research': { overlap: 93, tierZh: '多伦多大学世界顶级科研 (93% 重合)', tierEn: 'University of Toronto Global Hub (93% Overlap)', reasonZh: '加拿大首屈一指研究型大学，生命医学与计算机学科享誉全球。', reasonEn: 'Canada\'s flagship research university excelling in biomedical sciences and computing.' },
          'civil_admin': { overlap: 88, tierZh: '联邦与安省经济中枢 (88% 重合)', tierEn: 'Provincial & Federal Economic Hub (88% Overlap)', reasonZh: '合规治理稳健，公共机构运作高效。', reasonEn: 'Stable public sector employment backed by robust social safety nets.' },
          'manufacturing': { overlap: 80, tierZh: '智能汽车与精密工程 (80% 重合)', tierEn: 'Advanced Automotive Engineering (80% Overlap)', reasonZh: '安大略省汽车制造走廊之核心支撑。', reasonEn: 'Key node in the Ontario-Michigan automotive and advanced parts supply corridor.' },
          'creative_media': { overlap: 85, tierZh: '北美重要影视多媒体中心 (85% 重合)', tierEn: 'TIFF & Major Film Production Hub (85% Overlap)', reasonZh: '多伦多国际电影节与北美第三大影视制作基地。', reasonEn: 'Third largest screen-based production industry in North America.' }
        }
      },
      singapore: {
        clustersZh: '全球离岸财富管理、金融科技对冲、新一代AI亚太总部、普通法仲裁合规、先进半导体封装',
        clustersEn: 'Offshore Wealth Management, Quant Fintech, Enterprise AI & APAC Headquarters, Fiduciary Legal, Advanced Semiconductors',
        pillars: {
          'finance_quant': { overlap: 98, tierZh: '全球顶尖离岸资本与对冲中枢 (98% 重合)', tierEn: 'Global Offshore Capital & Wealth Hub (98% Overlap)', reasonZh: '全球第三大金融中心与亚洲对冲基金之都，跨国资产信托与合规免税架构完备。', reasonEn: 'Premier global wealth management and hedge fund nexus commanding APAC cross-border capital.' },
          'tech_ai': { overlap: 95, tierZh: '亚太科技战略出海总部 (95% 重合)', tierEn: 'APAC Tech & AI Headquarters (95% Overlap)', reasonZh: '国家AI战略2.0推进地，跨国科技巨头亚太总部首选，算法商业变现效率极高。', reasonEn: 'National AI Strategy 2.0 powerhouse and preferred APAC headquarters for frontier tech leaders.' },
          'civil_admin': { overlap: 94, tierZh: '全球廉洁治理与仲裁标杆 (94% 重合)', tierEn: 'Global Clean Governance & Legal Citadel (94% Overlap)', reasonZh: '英美普通法程序正义、严密法治与世界一流高效公职治理。', reasonEn: 'Common Law fiduciary integrity and top-ranked public administration efficiency.' },
          'academia_research': { overlap: 93, tierZh: '新国立南洋世界顶尖学统 (93% 重合)', tierEn: 'NUS-NTU Global Academic Pinnacle (93% Overlap)', reasonZh: 'NUS/NTU全球前十五强顶尖学府，战略科研基金极度丰沛。', reasonEn: 'World top-15 university cluster commanding massive research endowments.' },
          'manufacturing': { overlap: 88, tierZh: '先进晶圆封装与精密半导体 (88% 重合)', tierEn: 'Advanced Packaging & Semiconductor Fab (88% Overlap)', reasonZh: '全球半导体晶圆制造与高端生物医药研发重镇。', reasonEn: 'Vital node in global semiconductor fabrication and high-value biomedical manufacturing.' },
          'creative_media': { overlap: 86, tierZh: '东南亚泛娱乐与数字内容中枢 (86% 重合)', tierEn: 'Southeast Asian Digital Media Hub (86% Overlap)', reasonZh: '泛亚太内容创作者与数字多媒体版权流转枢纽。', reasonEn: 'Central hub for pan-Asian creative publishing and digital media IP distribution.' }
        }
      },
      shanghai: {
        clustersZh: '国际金融中心与多层次资本市场、集成电路微电子、人工智能高地、跨国企业总部与高端生物医药',
        clustersEn: 'International Financial Center, Integrated Circuits, Artificial Intelligence & Biopharma',
        pillars: {
          'finance_quant': { overlap: 98, tierZh: '国家第一综合金融中心 (98% 重合)', tierEn: 'Premier National Financial Center (98% Overlap)', reasonZh: '陆家嘴集聚外资公募、券商总部与顶尖量化私募，金融基础设施完备。', reasonEn: 'Epicenter of banking, foreign capital, and quantitative investment funds.' },
          'tech_ai': { overlap: 95, tierZh: '张江国家级AI与微电子高地 (95% 重合)', tierEn: 'Zhangjiang AI & Semiconductor Apex (95% Overlap)', reasonZh: '世界人工智能大会常驻地，算力网络与大模型工业应用深度融合。', reasonEn: 'National leading cluster for semiconductor architecture and enterprise AI integration.' },
          'manufacturing': { overlap: 94, tierZh: '高端微电子装备与智能制造 (94% 重合)', tierEn: 'Semiconductor Fabrication & EV (94% Overlap)', reasonZh: '集成电路制造、特斯拉超级工厂与大飞机总装基地。', reasonEn: 'World-class semiconductor manufacturing and advanced automotive supply chains.' },
          'academia_research': { overlap: 94, tierZh: '复旦交大顶尖教研网络 (94% 重合)', tierEn: 'Fudan-SJTU Elite Research Nexus (94% Overlap)', reasonZh: '全国最密集C9高校之一，基础医学与高能物理研究底蕴深厚。', reasonEn: 'Top-tier collegiate research corridor excelling in physics, medicine, and applied engineering.' },
          'civil_admin': { overlap: 92, tierZh: '超大城市现代化治理与合规 (92% 重合)', tierEn: 'Modern Megacity Governance (92% Overlap)', reasonZh: '跨国公司地区总部法务与高水准涉外商事规制。', reasonEn: 'High-standard multinational corporate legal affairs and international commercial compliance.' },
          'creative_media': { overlap: 90, tierZh: '国际文化大都市与广告传媒 (90% 重合)', tierEn: 'International Media & Cultural Metropolis (90% Overlap)', reasonZh: '跨国4A广告、时尚媒体与国际艺术策展中心。', reasonEn: 'National vanguard of commercial advertising, fashion media, and cultural arts.' }
        }
      },
      hangzhou: {
        clustersZh: '平台经济与电子商务出海、云计算与大数据算力、文创数字艺术、智能物联网',
        clustersEn: 'Platform E-Commerce, Cloud Computing, Digital Creative Arts & Smart IoT',
        pillars: {
          'creative_media': { overlap: 97, tierZh: '全球电商直播与数字创意策源地 (97% 重合)', tierEn: 'Global E-Commerce & Media Epicenter (97% Overlap)', reasonZh: '中国第一直播电商之都，MCN与跨平台数字内容变现生态极密。', reasonEn: 'Undisputed capital of livestreaming e-commerce, digital video creators, and cultural IP monetization.' },
          'tech_ai': { overlap: 96, tierZh: '全国数字经济与算力第一城 (96% 重合)', tierEn: 'National Digital Economy Leader (96% Overlap)', reasonZh: '阿里巴巴与海康大华所在地，云计算、算法中台与AI产业闭环极强。', reasonEn: 'Alibaba cloud headquarters, providing top infrastructure for platform algorithms and AI services.' },
          'academia_research': { overlap: 92, tierZh: '浙江大学与西湖大学先锋 (92% 重合)', tierEn: 'ZJU & Westlake Pioneer Research (92% Overlap)', reasonZh: '浙大与西湖大学，基础生命科学与前沿物理交叉优势极大。', reasonEn: 'Zhejiang University and Westlake University driving cutting-edge biological and physical sciences.' },
          'finance_quant': { overlap: 88, tierZh: '科技金融与新锐量化聚集区 (88% 重合)', tierEn: 'Fintech & Algorithmic Trading (88% Overlap)', reasonZh: '蚂蚁集团所在地，侧重支付金融、数字资产流转与量化技术。', reasonEn: 'Anchored by Ant Group, excelling in digital payments and algorithmic fintech.' },
          'manufacturing': { overlap: 84, tierZh: '高端智能装备与安防硬件 (84% 重合)', tierEn: 'Smart Electronics & Vision Hardware (84% Overlap)', reasonZh: '机器视觉、安防硬件与精密传感器集聚。', reasonEn: 'Specializes in computer vision hardware and automated industrial electronics.' },
          'civil_admin': { overlap: 82, tierZh: '数字政府与现代化公共管理 (82% 重合)', tierEn: 'Digital Governance & Public Sector (82% Overlap)', reasonZh: '数字政务与公权运行规范透明，办事效率极高。', reasonEn: 'National benchmark for paperless digital government and responsive civic governance.' }
        }
      },
      guangzhou: {
        clustersZh: '跨境贸易与供应链商贸、广交会全球出海展会、智能新能源汽车、新型显示与文创传媒',
        clustersEn: 'Cross-Border Supply Chain, Canton Fair Global Trade, Automotive & Digital Media',
        pillars: {
          'creative_media': { overlap: 94, tierZh: '华南传媒旗舰与泛娱乐出海 (94% 重合)', tierEn: 'South China Media Flagship (94% Overlap)', reasonZh: '网易互娱与南方报业基石，网络游戏研发与全球泛娱乐发行极强。', reasonEn: 'Headquarters of NetEase Games and Southern Media Group, leading in gaming and publishing.' },
          'manufacturing': { overlap: 92, tierZh: '千亿级汽车与高端装备制造 (92% 重合)', tierEn: 'Automotive & Heavy Equipment (92% Overlap)', reasonZh: '全国汽车制造产量第一，智能新能源产业链极盛。', reasonEn: 'Leading automotive manufacturing base producing electric and autonomous vehicle systems.' },
          'academia_research': { overlap: 91, tierZh: '中山大学华南学术中心 (91% 重合)', tierEn: 'Sun Yat-sen University Scholarly Core (91% Overlap)', reasonZh: '中山大学与华南理工领衔，临床医学与工科研发名列前茅。', reasonEn: 'Sun Yat-sen University excellence in clinical medicine and engineering sciences.' },
          'tech_ai': { overlap: 88, tierZh: '产业互联网与工业智能 (88% 重合)', tierEn: 'Industrial Internet & Enterprise Tech (88% Overlap)', reasonZh: '侧重传统制造业数智化转型与智慧城市应用。', reasonEn: 'Focuses on enterprise cloud migration and smart manufacturing automation.' },
          'civil_admin': { overlap: 86, tierZh: '华南大区综合行政与枢纽保障 (86% 重合)', tierEn: 'South China Regional Administration (86% Overlap)', reasonZh: '广东省级机关与大湾区协调枢纽，综合保障健全。', reasonEn: 'Regional government powerhouse managing Guangdong-Hong Kong-Macao coordination.' },
          'finance_quant': { overlap: 85, tierZh: '商贸金融与绿色资产交易 (85% 重合)', tierEn: 'Commercial & Trade Finance (85% Overlap)', reasonZh: '广期所特色期货与大宗商品贸易金融，服务实体供应链。', reasonEn: 'Anchored by Guangzhou Futures Exchange and physical supply chain financial liquidity.' }
        }
      },
      vancouver: {
        clustersZh: '数字视觉特效与游戏产业、清洁技术能源、跨国亚太贸易枢纽、UBC生命科学与计算机',
        clustersEn: 'VFX & Gaming, Clean Tech Energy, Trans-Pacific Trade, UBC Life Sciences & AI',
        pillars: {
          'creative_media': { overlap: 96, tierZh: '好莱坞北方数码特效之都 (96% 重合)', tierEn: 'Hollywood North VFX & Gaming Capital (96% Overlap)', reasonZh: '全球顶尖影视特效公司与EA游戏研发大本营，产业集聚度极高。', reasonEn: 'World-leading cluster for cinematic visual effects (Sony Imageworks, ILM) and gaming.' },
          'academia_research': { overlap: 92, tierZh: 'UBC世界顶尖研究型学府 (92% 重合)', tierEn: 'UBC Global Research Institution (92% Overlap)', reasonZh: 'UBC在生命医学、林业环境与量子计算享誉全球，治学氛围宽和。', reasonEn: 'University of British Columbia leadership in environmental sciences, medicine, and computing.' },
          'tech_ai': { overlap: 90, tierZh: '加拿大西海岸高科技走廊 (90% 重合)', tierEn: 'Cascadia Innovation Tech Corridor (90% Overlap)', reasonZh: '亚马逊、微软等西雅图科技巨头研发分中心，移民包容度高。', reasonEn: 'Direct pipeline to Seattle tech ecosystem with massive corporate development hubs.' },
          'civil_admin': { overlap: 88, tierZh: '高福利低压力公共管理体系 (88% 重合)', tierEn: 'High-Welfare Progressive Governance (88% Overlap)', reasonZh: '省市政府福利与法治环境优厚，工作生活平衡度极佳。', reasonEn: 'Top global work-life balance backed by stable progressive public sector governance.' },
          'finance_quant': { overlap: 82, tierZh: '亚太财富管理与创业板资本 (82% 重合)', tierEn: 'Pacific Rim Wealth & Mining Finance (82% Overlap)', reasonZh: '多交所创业板矿业资本与亚太高净值家族信托。', reasonEn: 'Natural resource venture capital (TSX Venture) and Asian family office management.' },
          'manufacturing': { overlap: 72, tierZh: '绿色清洁能源与海洋工程 (72% 重合)', tierEn: 'Clean Energy & Marine Tech (72% Overlap)', reasonZh: '氢能燃料电池与清洁造船海事技术研发。', reasonEn: 'Focuses on hydrogen fuel cells and clean maritime technology development.' }
        }
      }
    };

    // Find matched city configuration or fall back gracefully
    let matchedCityKey = null;
    for (const k in cityDatabase) {
      if (ct.includes(k) || (k === 'san_francisco' && (ct.includes('sf') || ct.includes('silicon') || ct.includes('旧金山') || ct.includes('硅谷'))) ||
          (k === 'beijing' && ct.includes('北京')) ||
          (k === 'shenzhen' && ct.includes('深圳')) ||
          (k === 'london' && ct.includes('伦敦')) ||
          (k === 'birmingham' && ct.includes('伯明翰')) ||
          (k === 'new_york' && (ct.includes('ny') || ct.includes('纽约'))) ||
          (k === 'toronto' && ct.includes('多伦多')) ||
          (k === 'singapore' && (ct.includes('singapore') || ct.includes('新加坡'))) ||
          (k === 'shanghai' && (ct.includes('shanghai') || ct.includes('上海'))) ||
          (k === 'hangzhou' && (ct.includes('hangzhou') || ct.includes('杭州'))) ||
          (k === 'guangzhou' && (ct.includes('guangzhou') || ct.includes('广州'))) ||
          (k === 'vancouver' && (ct.includes('vancouver') || ct.includes('温哥华')))) {
        matchedCityKey = k;
        break;
      }
    }

    const cityEntry = matchedCityKey ? cityDatabase[matchedCityKey] : null;
    const defaultClustersZh = '现代综合服务业、科技创新孵化、商业流通与城市保障';
    const defaultClustersEn = 'Modern Integrated Services, Technology Incubators & Urban Commerce';

    if (cityEntry && cityEntry.pillars[ind]) {
      const p = cityEntry.pillars[ind];
      return {
        overlapScore: p.overlap,
        levelZh: p.tierZh,
        levelEn: p.tierEn,
        reasonZh: p.reasonZh,
        reasonEn: p.reasonEn,
        clustersZh: cityEntry.clustersZh,
        clustersEn: cityEntry.clustersEn
      };
    }

    // Default heuristic for generalized cities
    const genericOverlap = 72;
    return {
      overlapScore: genericOverlap,
      levelZh: '常规支柱产业布局 (72% 战略重合)',
      levelEn: 'Standard Strategic Industrial Alignment (72% Overlap)',
      reasonZh: '行业符合该城市常规经济发展脉络，具备标准商业协同与人才供给支撑。',
      reasonEn: 'Sector aligns with standard municipal economic growth and typical talent pool support.',
      clustersZh: defaultClustersZh,
      clustersEn: defaultClustersEn
    };
  }

  /**
   * Extract or Calculate User's Top 3 Dominant Patterns (三大主导格局)
   */
  static getTop3Patterns(bazi, isEn = false) {
    if (bazi && Array.isArray(bazi.top3Patterns) && bazi.top3Patterns.length >= 3) {
      return bazi.top3Patterns;
    }

    const translatePatternEn = (zhName) => {
      if (!zhName) return 'Dominant Pattern';
      let en = null;
      if (typeof PortraitEngine !== 'undefined' && typeof PortraitEngine.getPatternEn === 'function') {
        en = PortraitEngine.getPatternEn(zhName);
      }
      if (!en || en === 'Primary Dominant Pattern' || /[\u4e00-\u9fa5]/.test(en)) {
        if (typeof I18N !== 'undefined' && typeof I18N.getPatternName === 'function') {
          en = I18N.getPatternName(zhName, 'en');
        }
      }
      if (!en || /[\u4e00-\u9fa5]/.test(en)) {
        if (/七杀|偏官/.test(zhName)) en = 'Seven Killings Pattern (Vanguard Commander)';
        else if (/食神/.test(zhName)) en = 'Eating God Pattern (Deep Craft & Creative Output)';
        else if (/伤官/.test(zhName)) en = 'Hurting Officer Pattern (Dynamic Innovation)';
        else if (/偏财/.test(zhName)) en = 'Indirect Wealth Pattern (Commercial Dealmaker)';
        else if (/正财/.test(zhName)) en = 'Direct Wealth Pattern (Steady Asset Accumulation)';
        else if (/正印|印绶/.test(zhName)) en = 'Direct Resource Pattern (Scholarly Prestige)';
        else if (/偏印|枭/.test(zhName)) en = 'Indirect Resource Pattern (Insight & Strategy)';
        else if (/羊刃|阳刃/.test(zhName)) en = 'Yang Blade Pattern (Sovereign General)';
        else if (/比肩|建禄/.test(zhName)) en = 'Established Prosperity Pattern (Peer Mastery)';
        else en = 'Direct Officer Pattern (Institutional Governance)';
      }
      return en;
    };

    if (bazi && Array.isArray(bazi.patterns) && bazi.patterns.length > 0) {
      const sorted = [...bazi.patterns].sort((a, b) => (b.weightPct || 0) - (a.weightPct || 0));
      return sorted.slice(0, 3).map((p, idx) => {
        const zh = p.name || p.nameZh || '正官格';
        return {
          rank: idx + 1,
          nameZh: zh,
          nameEn: p.nameEn || translatePatternEn(zh),
          weightPct: p.weightPct || (idx === 0 ? 38 : (idx === 1 ? 28 : 18))
        };
      });
    }

    if (typeof PortraitEngine !== 'undefined' && typeof PortraitEngine.diagnosePatterns === 'function' && bazi) {
      try {
        const vigor = bazi.vigor || (typeof PortraitEngine.evaluateVigor === 'function' ? PortraitEngine.evaluateVigor(bazi) : { status: bazi.isStrong ? '身旺' : '身弱', score: bazi.vigorScore || 50 });
        const pats = PortraitEngine.diagnosePatterns(bazi, vigor);
        if (Array.isArray(pats) && pats.length > 0) {
          const sorted = [...pats].sort((a, b) => (b.weightPct || 0) - (a.weightPct || 0));
          return sorted.slice(0, 3).map((p, idx) => {
            const zh = p.name || p.nameZh || '正官格';
            let en = p.nameEn;
            if (!en || /[\u4e00-\u9fa5]/.test(en)) {
              en = translatePatternEn(zh);
            }
            if (/[\u4e00-\u9fa5]/.test(en)) {
              en = en.replace(/[\u4e00-\u9fa5（）·]/g, '').trim() || 'Dominant Pattern';
            }
            return {
              rank: idx + 1,
              nameZh: zh,
              nameEn: en,
              weightPct: p.weightPct || (idx === 0 ? 38 : (idx === 1 ? 28 : 18))
            };
          });
        }
      } catch (e) {}
    }

    // Default canonical pattern triad
    return [
      { rank: 1, nameZh: '七杀格 (偏官统帅 · 战将突围)', nameEn: 'Seven Killings Pattern (Vanguard Commander)', weightPct: 38 },
      { rank: 2, nameZh: '食神格 (技艺深研 · 秀气吐秀)', nameEn: 'Eating God Pattern (Deep Craft & Creative Output)', weightPct: 28 },
      { rank: 3, nameZh: '偏财格 (商业变现 · 跨界操盘)', nameEn: 'Indirect Wealth Pattern (Commercial Dealmaker)', weightPct: 18 }
    ];
  }

  /**
   * 与用户自身命局三大主导格局深度联动评量 (Calculate alignment scores against User's Top 3 Patterns)
   */
  static evaluateTop3PatternsAlignment(top3Patterns, opt, geoEnergy, planningOverlap, isEn = false) {
    const role = opt.role || 'specialist';
    const mgr = opt.manager || 'resource';
    const ind = opt.industry || 'tech_ai';

    const patternsDetail = top3Patterns.map((pat, idx) => {
      const pName = pat.nameZh || pat.name || '';
      let score = 65;
      let noteZh = '';
      let noteEn = '';

      if (/七杀|偏官|羊刃|阳刃|武职/.test(pName)) {
        if (role === 'martial' || role === 'executive') score += 18;
        if (mgr === 'killings' || mgr === 'wealth') score += 14;
        if (ind === 'finance_quant' || ind === 'tech_ai') score += 10;
        if (mgr === 'resource') score -= 8;
        if (role === 'civil') score -= 12;

        noteZh = score >= 80 ? '杀伐果断，高压对抗场能深度契合，极利建功立业。' : '七杀锐气受平淡行政与过度温和环境压制，难以施展攻坚潜质。';
        noteEn = score >= 80 ? 'Sharp assertiveness thrives under intense accountability, translating friction into leverage.' : 'Aggressive momentum diluted by passive routine, constraining breakthrough potential.';
      } else if (/食神|伤官|秀气|吐秀/.test(pName)) {
        if (role === 'specialist' || role === 'creative') score += 20;
        if (mgr === 'resource' || mgr === 'officer') score += 10;
        if (ind === 'academia_research' || ind === 'tech_ai' || ind === 'creative_media') score += 12;
        if (mgr === 'killings') score -= 14;

        noteZh = score >= 80 ? '独门技艺与心流深度沉浸，专业护城河不断筑牢。' : '微观细节被上级过度严苛问责打断，灵感易遭损耗。';
        noteEn = score >= 80 ? 'Deep craft immersion and intellectual autonomy compound into an unassailable technical moat.' : 'Creative focus fragmented by authoritarian micromanagement, draining mental stamina.';
      } else if (/偏财|正财|财格/.test(pName)) {
        if (role === 'executive' || role === 'martial') score += 16;
        if (mgr === 'wealth' || mgr === 'rob_wealth') score += 14;
        if (ind === 'finance_quant' || ind === 'creative_media') score += 14;
        if (role === 'civil' && ind === 'civil_admin') score -= 10;

        noteZh = score >= 80 ? '商业变现敏锐度极高，资金与业绩杠杆催化财气丰盈。' : '商业变现通道狭窄，难以发挥资源调度与财富杠杆天赋。';
        noteEn = score >= 80 ? 'Acute commercial instinct synergizes with deal velocity, maximizing capital compounding.' : 'Constrained commercial scope dampens resource leverage and financial upside.';
      } else if (/正官|官印|合规|顺德/.test(pName)) {
        if (role === 'civil' || role === 'executive') score += 18;
        if (mgr === 'officer' || mgr === 'resource') score += 16;
        if (ind === 'civil_admin' || ind === 'finance_quant') score += 12;
        if (mgr === 'rob_wealth') score -= 12;

        noteZh = score >= 80 ? '规制严明、名正言顺，阶梯式稳步晋升通道畅通。' : '缺乏严整阶梯与体制程序保障，同侪乱象易动摇秩序感。';
        noteEn = score >= 80 ? 'Structured institutional clarity and fiduciary order provide frictionless ladder mobility.' : 'Disorderly competition erodes organizational stability, dampening steady compounding.';
      } else if (/印绶|正印|偏印/.test(pName)) {
        if (role === 'specialist' || role === 'civil') score += 18;
        if (mgr === 'resource' || mgr === 'officer') score += 18;
        if (ind === 'academia_research' || ind === 'civil_admin') score += 15;
        if (mgr === 'killings' || mgr === 'rob_wealth') score -= 16;

        noteZh = score >= 80 ? '温和护持、学术威权与治学安全感充裕，名望日隆。' : '狼性淘汰与高频问责重击心智，破坏学术与深耕专注度。';
        noteEn = score >= 80 ? 'Nurturing safety and academic prestige safeguard deep contemplation, elevating scholarly standing.' : 'Cutthroat peer rivalry destabilizes inner peace, hindering scholarly depth.';
      } else {
        // Generic pattern
        if (role === 'specialist') score += 10;
        if (mgr === 'resource') score += 8;
        noteZh = '气数平稳协同，依循既定轨道厚积薄发。';
        noteEn = 'Evenly aligned trajectory compounding steadily along established lines.';
      }

      score = Math.max(30, Math.min(98, score));

      const statusZh = score >= 85 ? '极高激活 · 顺风破局' : score >= 70 ? '稳健承载 · 平稳运转' : '受制约束 · 潜能压制';
      const statusEn = score >= 85 ? 'Highly Activated · Momentum Surge' : score >= 70 ? 'Stable Support · Steady Execution' : 'Constrained · Latent Potential Suppressed';

      let enName = pat.nameEn || translatePatternEn(pName);
      if (/[\u4e00-\u9fa5]/.test(enName)) {
        enName = enName.replace(/[\u4e00-\u9fa5（）·]/g, '').trim() || 'Dominant Pattern';
      }

      const detailItem = {
        rank: pat.rank || (idx + 1),
        name: isEn ? enName : (pat.nameZh || pat.name),
        nameEn: enName,
        weightPct: pat.weightPct,
        score,
        status: isEn ? statusEn : statusZh,
        statusEn,
        comment: isEn ? noteEn : noteZh,
        commentEn: noteEn
      };
      if (!isEn) {
        detailItem.nameZh = pat.nameZh;
        detailItem.statusZh = statusZh;
        detailItem.commentZh = noteZh;
      }
      return detailItem;
    });

    // Weighted average: Pattern 1 (50%), Pattern 2 (30%), Pattern 3 (20%)
    const p1 = patternsDetail[0] ? patternsDetail[0].score : 70;
    const p2 = patternsDetail[1] ? patternsDetail[1].score : 70;
    const p3 = patternsDetail[2] ? patternsDetail[2].score : 70;
    const compositePatternScore = Math.round(p1 * 0.50 + p2 * 0.30 + p3 * 0.20);

    const badgeZh = compositePatternScore >= 85 ? '三大格局全面共鸣' : compositePatternScore >= 72 ? '格局主辅基本承载' : '主导格局明显受阻';
    const badgeEn = compositePatternScore >= 85 ? 'Triad Patterns Fully Activated' : compositePatternScore >= 72 ? 'Patterns Adequately Supported' : 'Governing Pattern Constrained';

    return {
      score: compositePatternScore,
      badgeZh,
      badgeEn,
      patternsDetail
    };
  }

  /**
   * Simulate a single option against native chart
   */
  static evaluateSingleOption(opt, bazi, isEn = false, top3Patterns = null) {
    const dm = bazi.dayMaster || '甲';
    const dmElem = bazi.pillars?.day?.stemElement || 'Wood';
    const vigorScore = bazi.vigorScore || 50;
    const isWeak = (vigorScore < 50);

    // 1. Five elements cycles
    const elemCycle = {
      'Wood': { generates: 'Fire', generatedBy: 'Water', controls: 'Earth', controlledBy: 'Metal' },
      'Fire': { generates: 'Earth', generatedBy: 'Wood', controls: 'Metal', controlledBy: 'Water' },
      'Earth': { generates: 'Metal', generatedBy: 'Fire', controls: 'Water', controlledBy: 'Wood' },
      'Metal': { generates: 'Water', generatedBy: 'Earth', controls: 'Wood', controlledBy: 'Fire' },
      'Water': { generates: 'Wood', generatedBy: 'Metal', controls: 'Fire', controlledBy: 'Earth' }
    };
    const cycle = elemCycle[dmElem] || elemCycle['Wood'];

    let favorableElems = [];
    let unfavorableElems = [];
    if (isWeak) {
      favorableElems = [cycle.generatedBy, dmElem]; // Resource + Companion
      unfavorableElems = [cycle.controlledBy, cycle.controls, cycle.generates]; // Officer, Wealth, Output
    } else {
      favorableElems = [cycle.generates, cycle.controls, cycle.controlledBy]; // Output, Wealth, Officer
      unfavorableElems = [cycle.generatedBy, dmElem]; // Resource + Companion
    }

    // 2. Country + City Five-Element Energy
    const geoEnergy = this.evaluateCombinedGeoEnergy(opt.country, opt.city, dm, dmElem, favorableElems, unfavorableElems, isEn);
    const cityMeta = geoEnergy.cityMeta;
    const countryMeta = geoEnergy.countryMeta;

    // 3. Industry & Strategic Planning Overlap (the higher the overlap, the higher the score!)
    const indMeta = this.getIndustryElements(opt.industry);
    const planningOverlap = this.evaluateCityStrategicPlanning(opt.country, opt.city, opt.industry, opt, isEn);

    // 4. Job Role & Manager Leadership Dynamic
    const mgrMeta = this.getManagerDynamic(opt.manager);
    let roleSupervisorSynergy = 65;
    if (opt.role === 'specialist' && opt.manager === 'resource') roleSupervisorSynergy = 94;
    else if (opt.role === 'martial' && (opt.manager === 'killings' || opt.manager === 'wealth')) roleSupervisorSynergy = 92;
    else if (opt.role === 'executive' && (opt.manager === 'officer' || opt.manager === 'wealth')) roleSupervisorSynergy = 88;
    else if (opt.role === 'civil' && (opt.manager === 'officer' || opt.manager === 'resource')) roleSupervisorSynergy = 90;
    else if (opt.role === 'specialist' && opt.manager === 'killings') roleSupervisorSynergy = 58;

    // 5. Look up Institution and Enterprise
    const matchedInst = this.findInstitution(opt.institution || opt.institutionId || opt.title);
    const matchedEnt = this.findEnterprise(opt.enterprise || opt.enterpriseId || opt.title);
    const microEcosystem = this.getMicroEcosystemAnalysis(opt.country, opt.city, opt.industry, isEn);

    // 6. User's Top 3 Dominant Patterns Alignment
    const patternsTriad = top3Patterns || this.getTop3Patterns(bazi, isEn);
    const patternAlignment = this.evaluateTop3PatternsAlignment(patternsTriad, opt, geoEnergy, planningOverlap, isEn);

    // 7. Calculate Mental Friction Rate (心智能耗与内耗率)
    let frictionBase = 40 + mgrMeta.pressure;
    if (isWeak && (opt.manager === 'killings' || opt.manager === 'rob_wealth')) frictionBase += 20;
    if (isWeak && unfavorableElems.includes(cityMeta.elem)) frictionBase += 10;
    if (!isWeak && opt.manager === 'resource') frictionBase += 8;
    if (opt.role === 'martial' && isWeak) frictionBase += 15;
    if (opt.role === 'specialist' && isWeak) frictionBase -= 10;

    if (matchedEnt) {
      if (isWeak && (matchedEnt.corporateCultureZh.includes('七杀') || matchedEnt.corporateCultureZh.includes('赛马') || matchedEnt.corporateCultureZh.includes('高压'))) {
        frictionBase += 10;
      } else if (isWeak && (matchedEnt.corporateCultureZh.includes('正印') || matchedEnt.corporateCultureZh.includes('放权') || matchedEnt.corporateCultureZh.includes('护持'))) {
        frictionBase -= 8;
      }
    }
    const frictionRate = Math.min(95, Math.max(15, frictionBase));

    // 8. Backward-compatible Affinity and Potential
    let affinityBase = geoEnergy.score;
    if (favorableElems.includes(indMeta.primary)) affinityBase += 10;
    const affinityRate = Math.min(96, Math.max(25, affinityBase));

    let potentialBase = 50 + mgrMeta.breakthrough + (planningOverlap.overlapScore * 0.35);
    if (frictionRate > 75) potentialBase -= 12;
    if (matchedInst) potentialBase += 8;
    if (matchedEnt) potentialBase += 8;
    const potentialRate = Math.min(95, Math.max(25, Math.round(potentialBase)));

    // 9. Comprehensive Composite Score
    // Weight breakdown:
    // - 20% Country + City Five-Element Energy (geoEnergy.score)
    // - 25% Industry Fit & City Strategic Planning Overlap (planningOverlap.overlapScore)
    // - 30% User's Top 3 Dominant Patterns Alignment (patternAlignment.score)
    // - 15% Job Role & Supervisor Synergy (roleSupervisorSynergy)
    // - 10% Low Cognitive Friction (100 - frictionRate)
    const compositeScore = Math.round(
      (geoEnergy.score * 0.20) +
      (planningOverlap.overlapScore * 0.25) +
      (patternAlignment.score * 0.30) +
      (roleSupervisorSynergy * 0.15) +
      ((100 - frictionRate) * 0.10)
    );
    const finalScore = Math.min(98, Math.max(30, compositeScore));

    // Verdict Tag
    let verdictTagZh = '';
    let verdictTagEn = '';
    if (finalScore >= 86) {
      verdictTagZh = '🏆 强烈推荐 · 天命与规划双重共振';
      verdictTagEn = '🏆 Highly Recommended · Twin Resonance';
    } else if (finalScore >= 74) {
      verdictTagZh = '⚖️ 稳健备选 · 需护持核心边界';
      verdictTagEn = '⚖️ Viable Choice · Protect Core Boundaries';
    } else {
      verdictTagZh = '⚠️ 慎选路径 · 产业规划与命格错位';
      verdictTagEn = '⚠️ Caution · Planning & Natal Mismatch';
    }

    // Comprehensive Notes Breakdown
    const notesZh = [
      `【国度与城市五行场能】：${geoEnergy.descZh}`,
      `【城市规划与产业重叠度】：目标赛道重叠度达 ${planningOverlap.overlapScore}%（${planningOverlap.levelZh}）。${planningOverlap.reasonZh}`,
      `【三大主导格局联动评量】：${patternAlignment.badgeZh}（综合契合度 ${patternAlignment.score}分）。第一主格局【${patternsTriad[0]?.nameZh}】在当前路径下【${patternAlignment.patternsDetail[0]?.statusZh}】。`,
      `【目标岗位与直属上司生态】：岗位定位于【${opt.roleTitle || (opt.role === 'specialist' ? '单一任务技术专家' : opt.role === 'executive' ? '全局操盘统帅' : opt.role === 'martial' ? '一线业务武职开拓' : '文职行政综合事务')}】，直属上司呈现【${mgrMeta.nameZh}】。${isWeak ? '身弱之造需依《荣枯鉴》建立“公事公办、延时拒绝”的心理防火墙。' : '身旺之造正可借严苛标准打磨心性，奠定不可替代之威权。'}`
    ];

    const notesEn = [
      `[Country & City Energy Field]: ${geoEnergy.descEn}`,
      `[City Planning & Industry Overlap]: Strategic overlap stands at ${planningOverlap.overlapScore}% (${planningOverlap.levelEn}). ${planningOverlap.reasonEn}`,
      `[Top 3 Dominant Patterns Fit]: ${patternAlignment.badgeEn} (Alignment Score: ${patternAlignment.score}/100). Primary Pattern [${patternsTriad[0]?.nameEn}] is evaluated as [${patternAlignment.patternsDetail[0]?.statusEn}].`,
      `[Job Role & Supervisor Synergy]: Positioned as [${opt.roleTitleEn || (opt.role === 'specialist' ? 'Specialist / Deep Craft' : opt.role === 'executive' ? 'Executive Leadership' : opt.role === 'martial' ? 'Frontline Operations' : 'Civil / Operations')}], with supervisor style [${mgrMeta.nameEn}]. ${isWeak ? 'Sensitive Day Master must apply delayed-response protocols to guard mental energy.' : 'Vigorous Day Master can leverage high performance standards into institutional authority.'}`
    ];

    // Micro-ecosystem note injection
    if (microEcosystem) {
      if (isEn) {
        notesEn.push(`[${microEcosystem.tag}]: ${microEcosystem.desc}`);
      } else {
        notesZh.push(`【${microEcosystem.tag}】：${microEcosystem.desc}`);
      }
    }

    // Institution details injection
    if (matchedInst) {
      const top5Zh = matchedInst.top5SubjectsZh.join('、');
      const top5En = matchedInst.top5SubjectsEn.join(', ');
      notesZh.push(`【学术名校光环与前五强王牌学科】：${matchedInst.nameZh}（QS全球第${matchedInst.qsRank} / THE第${matchedInst.theRank} · ${matchedInst.tierBadge}）。前五强王牌学科：${top5Zh}。${matchedInst.academicAdvantageZh}`);
      notesEn.push(`[Academic Prestige & Top 5 Standout Disciplines]: ${matchedInst.nameEn} (QS Rank #${matchedInst.qsRank} / THE #${matchedInst.theRank} · ${matchedInst.tierBadgeEn}). Standout Disciplines: ${top5En}. ${matchedInst.academicAdvantageEn}`);
    }

    // Enterprise details injection
    if (matchedEnt) {
      const rolesZh = matchedEnt.typicalRoles.map(r => r.titleZh).slice(0, 3).join('、');
      const rolesEn = matchedEnt.typicalRoles.map(r => r.titleEn).slice(0, 3).join(', ');
      notesZh.push(`【世界五百强名企文化与生态位】：${matchedEnt.nameZh}（${matchedEnt.fortune500Rank}）。企业十神文化：${matchedEnt.corporateCultureZh}。代表岗位梯队：${rolesZh}等。`);
      notesEn.push(`[Fortune Global 500 Culture & Positions]: ${matchedEnt.nameEn} (${matchedEnt.fortune500RankEn}). Corporate Ten Gods Culture: ${matchedEnt.corporateCultureEn}. Representative Positions: ${rolesEn}.`);
    }

    const displayCityName = this.formatCityName(opt.city, isEn);
    const displayCountryName = this.formatCountryName(opt.country, isEn);

    let optionTitle = opt.title;
    if (!optionTitle || (isEn && /[\u4e00-\u9fa5]/.test(optionTitle))) {
      optionTitle = isEn ? `${displayCityName} · ${indMeta.nameEn}` : `${displayCityName} · ${indMeta.nameZh}`;
    }

    const resOption = {
      title: optionTitle,
      country: opt.country,
      countryName: displayCountryName,
      countryElement: isEn ? countryMeta.nameEn : countryMeta.nameZh,
      city: opt.city,
      cityName: displayCityName,
      cityElement: isEn ? cityMeta.nameEn : cityMeta.nameZh,
      industry: opt.industry,
      industryName: isEn ? indMeta.nameEn : indMeta.nameZh,
      role: opt.role,
      roleTitle: isEn ? (opt.roleTitleEn || opt.role) : (opt.roleTitle || opt.role),
      manager: opt.manager,
      managerName: isEn ? mgrMeta.nameEn : mgrMeta.nameZh,
      institution: matchedInst ? (isEn ? matchedInst.nameEn : matchedInst.nameZh) : null,
      enterprise: matchedEnt ? (isEn ? matchedEnt.nameEn : matchedEnt.nameZh) : null,
      // Core Evaluated Dimensions
      geoEnergyScore: geoEnergy.score,
      geoEnergyBadge: isEn ? geoEnergy.badgeEn : geoEnergy.badgeZh,
      geoEnergyDesc: isEn ? geoEnergy.descEn : geoEnergy.descZh,
      industryCityOverlapScore: planningOverlap.overlapScore,
      overlapLevel: isEn ? planningOverlap.levelEn : planningOverlap.levelZh,
      overlapReason: isEn ? planningOverlap.reasonEn : planningOverlap.reasonZh,
      cityStrategicClusters: isEn ? planningOverlap.clustersEn : planningOverlap.clustersZh,
      patternAlignmentScore: patternAlignment.score,
      patternAlignmentBadge: isEn ? patternAlignment.badgeEn : patternAlignment.badgeZh,
      top3PatternsAlignment: patternAlignment.patternsDetail,
      // Counterfactual Dynamics & Burnout Index (Y_net = X_t ⊗ F_ext - Friction)
      netKineticYield: Math.max(10, Math.min(98, Math.round(finalScore * 0.65 + (100 - frictionRate) * 0.35))),
      burnoutIndex: Math.max(5, Math.min(95, Math.round(frictionRate * 0.8 + (100 - roleSupervisorSynergy) * 0.2))),
      trajectoryDiagnosis: (Math.round(frictionRate * 0.8 + (100 - roleSupervisorSynergy) * 0.2) >= 65)
        ? (isEn ? 'High Friction Dampening Trajectory: Significant environmental stress and energy dissipation' : '高内耗阻尼轨道：环境博弈与官杀克制偏强，心理损耗显著')
        : ((Math.round(finalScore * 0.65 + (100 - frictionRate) * 0.35) >= 75)
            ? (isEn ? 'Resonant High-Yield Trajectory: Smooth circulation, high conversion, and multiplied momentum' : '借势爆发闭环轨道：生化流通，天时地利契合，转化率极高')
            : (isEn ? 'Steady Equilibrium Trajectory: Controlled friction, suited for incremental growth' : '稳健防守中和轨道：阻力可控，循序渐进，利于厚积薄发')),
      trajectoryDiagnosisEn: (Math.round(frictionRate * 0.8 + (100 - roleSupervisorSynergy) * 0.2) >= 65)
        ? 'High Friction Dampening Trajectory: Significant environmental stress and energy dissipation'
        : ((Math.round(finalScore * 0.65 + (100 - frictionRate) * 0.35) >= 75)
            ? 'Resonant High-Yield Trajectory: Smooth circulation, high conversion, and multiplied momentum'
            : 'Steady Equilibrium Trajectory: Controlled friction, suited for incremental growth'),
      // Backward-compatible rates & composite score
      score: finalScore,
      affinityRate: Math.round(affinityRate),
      frictionRate: Math.round(frictionRate),
      potentialRate: Math.round(potentialRate),
      verdictTag: isEn ? verdictTagEn : verdictTagZh,
      notes: isEn ? notesEn : notesZh
    };

    if (!isEn) {
      resOption.countryElementZh = countryMeta.nameZh;
      resOption.countryElementEn = countryMeta.nameEn;
      resOption.cityElementZh = cityMeta.nameZh;
      resOption.cityElementEn = cityMeta.nameEn;
      resOption.trajectoryDiagnosisZh = resOption.trajectoryDiagnosis;
    } else {
      resOption.countryElementEn = countryMeta.nameEn;
      resOption.cityElementEn = cityMeta.nameEn;
    }

    return resOption;
  }

  /**
   * Dual-Track Simulation Main Runner
   */
  static simulateOptions(optionA, optionB, bazi, luck = null, lang = 'zh') {
    const isEn = (lang === 'en');
    const safeBazi = bazi || { dayMaster: '甲', pillars: { day: { stemElement: 'Wood' } }, vigorScore: 50 };

    // Extract user's Top 3 Dominant Patterns
    const top3Patterns = this.getTop3Patterns(safeBazi, isEn);

    const resA = this.evaluateSingleOption(optionA, safeBazi, isEn, top3Patterns);
    const resB = this.evaluateSingleOption(optionB, safeBazi, isEn, top3Patterns);

    let winner = 'tie';
    let delta = Math.abs(resA.score - resB.score);
    if (resA.score > resB.score) winner = 'A';
    else if (resB.score > resA.score) winner = 'B';

    // Formulate decisive comparative verdict
    let verdictTitleZh = '';
    let verdictTitleEn = '';
    let summaryZh = '';
    let summaryEn = '';

    const p1NameZh = top3Patterns[0]?.nameZh || '主导命格';
    const p1NameEn = top3Patterns[0]?.nameEn || 'Dominant Pattern';

    const isSameCity = (resA.cityName === resB.cityName);

    if (winner === 'A') {
      verdictTitleZh = isSameCity
        ? `综合研判：在【${resA.cityName}】选择【${resA.title}】显著优于【${resB.title}】（胜出 ${delta} 分）`
        : `综合研判：前往【${resA.cityName}】显著优于【${resB.cityName}】（胜出 ${delta} 分）`;
      verdictTitleEn = isSameCity
        ? `Strategic Verdict: In [${resA.cityName}], [${resA.title}] Decisively Outperforms [${resB.title}] (+${delta} pts)`
        : `Strategic Verdict: Relocating to [${resA.cityName}] Decisively Outperforms [${resB.cityName}] (+${delta} pts)`;

      summaryZh = `【双城终局裁决】：综合考察“国家+城市五行能量、行业与城市产业规划重叠度、目标岗位与直属上司生态、以及本命三大格局（${p1NameZh}）深度承载”，方案 A【${resA.title}】（综合得分：${resA.score} 分）明显优于方案 B【${resB.title}】（${resB.score} 分）。${resA.cityName}在产业战略规划重叠度（${resA.industryCityOverlapScore}% vs ${resB.industryCityOverlapScore}%）与三大主导格局契合度（${resA.patternAlignmentScore}分 vs ${resB.patternAlignmentScore}分）上具备压倒性优势，地缘五行更能形成正向生扶，建议坚定以此城为主阵地。`;

      summaryEn = `[Dual-City Comparative Verdict]: Auditing across Country + City Five-Element Energy, Strategic Industry Cluster Overlap, Job Role & Supervisor Synergy, and Natal Top 3 Dominant Patterns (${p1NameEn}), Option A [${resA.title}] (Score: ${resA.score}) clearly triumphs over Option B [${resB.title}] (Score: ${resB.score}) by +${delta} points. ${resA.cityName} delivers superior industrial planning alignment (${resA.industryCityOverlapScore}% vs ${resB.industryCityOverlapScore}%) and pattern resonance (${resA.patternAlignmentScore} vs ${resB.patternAlignmentScore}), providing the most auspicious growth momentum.`;
    } else if (winner === 'B') {
      verdictTitleZh = isSameCity
        ? `综合研判：在【${resB.cityName}】选择【${resB.title}】显著优于【${resA.title}】（胜出 ${delta} 分）`
        : `综合研判：前往【${resB.cityName}】显著优于【${resA.cityName}】（胜出 ${delta} 分）`;
      verdictTitleEn = isSameCity
        ? `Strategic Verdict: In [${resB.cityName}], [${resB.title}] Decisively Outperforms [${resA.title}] (+${delta} pts)`
        : `Strategic Verdict: Relocating to [${resB.cityName}] Decisively Outperforms [${resA.cityName}] (+${delta} pts)`;

      summaryZh = `【双城终局裁决】：综合考察“国家+城市五行能量、行业与城市产业规划重叠度、目标岗位与直属上司生态、以及本命三大格局（${p1NameZh}）深度承载”，方案 B【${resB.title}】（综合得分：${resB.score} 分）明显优于方案 A【${resA.title}】（${resA.score} 分）。${resB.cityName}在产业战略规划重叠度（${resB.industryCityOverlapScore}% vs ${resA.industryCityOverlapScore}%）与三大主导格局契合度（${resB.patternAlignmentScore}分 vs ${resB.patternAlignmentScore}分）上展现出更强乘数效应，能够以更小内耗兑现最大长远胜率。`;

      summaryEn = `[Dual-City Comparative Verdict]: Auditing across Country + City Five-Element Energy, Strategic Industry Cluster Overlap, Job Role & Supervisor Synergy, and Natal Top 3 Dominant Patterns (${p1NameEn}), Option B [${resB.title}] (Score: ${resB.score}) decisively surpasses Option A [${resA.title}] (Score: ${resA.score}) by +${delta} points. ${resB.cityName} offers superior strategic industry planning overlap (${resB.industryCityOverlapScore}% vs ${resA.industryCityOverlapScore}%) and pattern empowerment (${resB.patternAlignmentScore} vs ${resA.patternAlignmentScore}), minimizing cognitive friction while maximizing career upside.`;
    } else {
      verdictTitleZh = isSameCity
        ? `综合研判：在【${resA.cityName}】两项方案势均力敌（均为 ${resA.score} 分）`
        : `综合研判：【${resA.cityName}】与【${resB.cityName}】势均力敌（均为 ${resA.score} 分）`;
      verdictTitleEn = isSameCity
        ? `Strategic Verdict: Balanced Parity in [${resA.cityName}] (Both ${resA.score} pts)`
        : `Strategic Verdict: Balanced Parity Between [${resA.cityName}] and [${resB.cityName}] (Both ${resA.score} pts)`;

      summaryZh = `【双城终局裁决】：两座城市在五行地缘共振与主导格局（${p1NameZh}）承载上旗鼓相当（均为 ${resA.score} 分）。若当前更注重产业规划红利与高爆发潜力，建议优先选择【${resA.industryCityOverlapScore >= resB.industryCityOverlapScore ? resA.cityName : resB.cityName}】；若当前重在防内耗与学术稳健深耕，建议选择另一方作为对冲底盘。`;

      summaryEn = `[Dual-City Comparative Verdict]: Both pathways stand in balanced equilibrium (both scoring ${resA.score} pts). Choose [${resA.industryCityOverlapScore >= resB.industryCityOverlapScore ? resA.cityName : resB.cityName}] if prioritizing strategic industry overlap and momentum, or the alternative if seeking foundational stability and reduced cognitive friction.`;
    }

    // Side-by-side comparative leaderboard matrix (5 dimensions)
    const rawLeaderboard = [
      {
        dimensionZh: '国家+城市五行能量场',
        dimensionEn: 'Country + City Five-Element Energy',
        scoreA: resA.geoEnergyScore,
        scoreB: resB.geoEnergyScore,
        winner: resA.geoEnergyScore > resB.geoEnergyScore ? 'A' : (resB.geoEnergyScore > resA.geoEnergyScore ? 'B' : 'tie'),
        delta: Math.abs(resA.geoEnergyScore - resB.geoEnergyScore),
        verdictZh: resA.geoEnergyScore > resB.geoEnergyScore ? `${resA.cityName} 胜出 (+${resA.geoEnergyScore - resB.geoEnergyScore}分)` : (resB.geoEnergyScore > resA.geoEnergyScore ? `${resB.cityName} 胜出 (+${resB.geoEnergyScore - resA.geoEnergyScore}分)` : '能量均衡'),
        verdictEn: resA.geoEnergyScore > resB.geoEnergyScore ? `${resA.cityName} Advantage (+${resA.geoEnergyScore - resB.geoEnergyScore} pts)` : (resB.geoEnergyScore > resA.geoEnergyScore ? `${resB.cityName} Advantage (+${resB.geoEnergyScore - resA.geoEnergyScore} pts)` : 'Balanced Energy')
      },
      {
        dimensionZh: '行业适配与规划重叠度',
        dimensionEn: 'Industry Fit & City Planning Overlap',
        scoreA: resA.industryCityOverlapScore,
        scoreB: resB.industryCityOverlapScore,
        winner: resA.industryCityOverlapScore > resB.industryCityOverlapScore ? 'A' : (resB.industryCityOverlapScore > resA.industryCityOverlapScore ? 'B' : 'tie'),
        delta: Math.abs(resA.industryCityOverlapScore - resB.industryCityOverlapScore),
        verdictZh: resA.industryCityOverlapScore > resB.industryCityOverlapScore ? `${resA.cityName} 规划重叠更高 (+${resA.industryCityOverlapScore - resB.industryCityOverlapScore}%)` : (resB.industryCityOverlapScore > resA.industryCityOverlapScore ? `${resB.cityName} 规划重叠更高 (+${resB.industryCityOverlapScore - resA.industryCityOverlapScore}%)` : '重叠一致'),
        verdictEn: resA.industryCityOverlapScore > resB.industryCityOverlapScore ? `${resA.cityName} Higher Overlap (+${resA.industryCityOverlapScore - resB.industryCityOverlapScore}%)` : (resB.industryCityOverlapScore > resA.industryCityOverlapScore ? `${resB.cityName} Higher Overlap (+${resB.industryCityOverlapScore - resA.industryCityOverlapScore}%)` : 'Equal Overlap')
      },
      {
        dimensionZh: '三大主导格局契合度',
        dimensionEn: 'Top 3 Dominant Patterns Fit',
        scoreA: resA.patternAlignmentScore,
        scoreB: resB.patternAlignmentScore,
        winner: resA.patternAlignmentScore > resB.patternAlignmentScore ? 'A' : (resB.patternAlignmentScore > resA.patternAlignmentScore ? 'B' : 'tie'),
        delta: Math.abs(resA.patternAlignmentScore - resB.patternAlignmentScore),
        verdictZh: resA.patternAlignmentScore > resB.patternAlignmentScore ? `方案A 更契合格局 (+${resA.patternAlignmentScore - resB.patternAlignmentScore}分)` : (resB.patternAlignmentScore > resA.patternAlignmentScore ? `方案B 更契合格局 (+${resB.patternAlignmentScore - resA.patternAlignmentScore}分)` : '格局同频'),
        verdictEn: resA.patternAlignmentScore > resB.patternAlignmentScore ? `Option A Better Aligned (+${resA.patternAlignmentScore - resB.patternAlignmentScore} pts)` : (resB.patternAlignmentScore > resA.patternAlignmentScore ? `Option B Better Aligned (+${resB.patternAlignmentScore - resA.patternAlignmentScore} pts)` : 'Equal Alignment')
      },
      {
        dimensionZh: '目标岗位与上司十神协同',
        dimensionEn: 'Job Role & Supervisor Synergy',
        scoreA: resA.roleSupervisorSynergyScore,
        scoreB: resB.roleSupervisorSynergyScore,
        winner: resA.roleSupervisorSynergyScore > resB.roleSupervisorSynergyScore ? 'A' : (resB.roleSupervisorSynergyScore > resA.roleSupervisorSynergyScore ? 'B' : 'tie'),
        delta: Math.abs(resA.roleSupervisorSynergyScore - resB.roleSupervisorSynergyScore),
        verdictZh: resA.roleSupervisorSynergyScore > resB.roleSupervisorSynergyScore ? `方案A 权能协同更顺 (+${resA.roleSupervisorSynergyScore - resB.roleSupervisorSynergyScore}分)` : (resB.roleSupervisorSynergyScore > resA.roleSupervisorSynergyScore ? `方案B 权能协同更顺 (+${resB.roleSupervisorSynergyScore - resA.roleSupervisorSynergyScore}分)` : '协同均衡'),
        verdictEn: resA.roleSupervisorSynergyScore > resB.roleSupervisorSynergyScore ? `Option A Superior Synergy (+${resA.roleSupervisorSynergyScore - resB.roleSupervisorSynergyScore} pts)` : (resB.roleSupervisorSynergyScore > resA.roleSupervisorSynergyScore ? `Option B Superior Synergy (+${resB.roleSupervisorSynergyScore - resA.roleSupervisorSynergyScore} pts)` : 'Equal Synergy')
      },
      {
        dimensionZh: '心智能耗与抗内耗比',
        dimensionEn: 'Cognitive Energy Retention / Low Friction',
        scoreA: 100 - resA.frictionRate,
        scoreB: 100 - resB.frictionRate,
        winner: resA.frictionRate < resB.frictionRate ? 'A' : (resB.frictionRate < resA.frictionRate ? 'B' : 'tie'),
        delta: Math.abs(resA.frictionRate - resB.frictionRate),
        verdictZh: resA.frictionRate < resB.frictionRate ? `方案A 消耗更低 (-${resB.frictionRate - resA.frictionRate}%)` : (resB.frictionRate < resA.frictionRate ? `方案B 消耗更低 (-${resA.frictionRate - resB.frictionRate}%)` : '内耗相同'),
        verdictEn: resA.frictionRate < resB.frictionRate ? `Option A Lower Friction (-${resB.frictionRate - resA.frictionRate}%)` : (resB.frictionRate < resA.frictionRate ? `Option B Lower Friction (-${resA.frictionRate - resB.frictionRate}%)` : 'Equal Friction')
      }
    ];

    const cleanLeaderboard = rawLeaderboard.map(row => {
      const isPercent = row.dimensionZh.includes('重叠') || row.dimensionEn.includes('Overlap') || row.dimensionZh.includes('耗') || row.dimensionEn.includes('Friction');
      const unit = isPercent ? '%' : (isEn ? ' pts' : '分');
      const item = {
        dimension: isEn ? row.dimensionEn : row.dimensionZh,
        dimensionEn: row.dimensionEn,
        scoreA: row.scoreA,
        scoreB: row.scoreB,
        winner: row.winner,
        delta: row.delta,
        unit: unit,
        verdict: isEn ? row.verdictEn : row.verdictZh,
        verdictEn: row.verdictEn
      };
      if (!isEn) {
        item.dimensionZh = row.dimensionZh;
        item.verdictZh = row.verdictZh;
      }
      return item;
    });

    const cleanTop3 = top3Patterns.map(p => {
      let nEn = p.nameEn || 'Dominant Pattern';
      if (/[\u4e00-\u9fa5]/.test(nEn)) {
        nEn = nEn.replace(/[\u4e00-\u9fa5（）·]/g, '').trim() || 'Dominant Pattern';
      }
      const item = {
        rank: p.rank,
        name: isEn ? nEn : (p.nameZh || p.name),
        nameEn: nEn,
        weight: p.weightPct || p.weight || 30
      };
      if (!isEn) {
        item.nameZh = p.nameZh || p.name;
      }
      return item;
    });

    const counterfactualDynamics = {
      optionA: {
        title: resA.title,
        netKineticYield: resA.netKineticYield,
        burnoutIndex: resA.burnoutIndex,
        trajectory: isEn ? resA.trajectoryDiagnosisEn : (resA.trajectoryDiagnosisZh || resA.trajectoryDiagnosis),
        trajectoryEn: resA.trajectoryDiagnosisEn
      },
      optionB: {
        title: resB.title,
        netKineticYield: resB.netKineticYield,
        burnoutIndex: resB.burnoutIndex,
        trajectory: isEn ? resB.trajectoryDiagnosisEn : (resB.trajectoryDiagnosisZh || resB.trajectoryDiagnosis),
        trajectoryEn: resB.trajectoryDiagnosisEn
      },
      comparativeAdvice: isEn
        ? (resA.burnoutIndex < resB.burnoutIndex
            ? `[Counterfactual Insight]: While Option B [${resB.title}] carries superficial appeal, it operates in a high-burnout band (${resB.burnoutIndex}%). Option A [${resA.title}] achieves superior net kinetic yield (${resA.netKineticYield} pts) with significantly lower psychological exhaustion (${resA.burnoutIndex}%).`
            : `[Counterfactual Insight]: Option B [${resB.title}] unlocks an auspicious closed loop with lower friction (${resB.burnoutIndex}% vs ${resA.burnoutIndex}%), converting day-to-day efforts into compounding career capital.`)
        : (resA.burnoutIndex < resB.burnoutIndex
            ? `【反事实动力学洞察】：方案B【${resB.title}】虽具表面诱惑，但落入高内耗阻尼带（能耗比 ${resB.burnoutIndex}%）；方案A【${resA.title}】以更低心智损耗（${resA.burnoutIndex}%）兑现了更高净动能（${resA.netKineticYield}分），属于可持续上升轨道。`
            : `【反事实动力学洞察】：方案B【${resB.title}】与流年形成“借势闭环”，心理能耗显著更低（${resB.burnoutIndex}% vs ${resA.burnoutIndex}%），能够以更小内耗沉淀长期核心势能。`)
    };

    // Directional Resonance Analysis between Option A and Option B
    const cityMetaA = resA.geoEnergy?.cityMeta || {};
    const cityMetaB = resB.geoEnergy?.cityMeta || {};

    const directionalResonance = {
      optionA: {
        city: resA.cityName,
        direction: isEn ? (cityMetaA.dirEn || 'South') : (cityMetaA.dirZh || '南方'),
        directionEn: cityMetaA.dirEn || 'South',
        element: isEn ? (cityMetaA.elem || 'Fire') : (cityMetaA.elem === 'Fire' ? '火' : cityMetaA.elem === 'Water' ? '水' : cityMetaA.elem === 'Wood' ? '木' : cityMetaA.elem === 'Metal' ? '金' : '土'),
        elementEn: cityMetaA.elem || 'Fire',
        elementHeavenly: isEn ? (cityMetaA.nameEn || 'Southern Fire') : (cityMetaA.nameZh || '南方丙丁火'),
        score: resA.geoEnergyScore,
        resonanceGrade: isEn ? (cityMetaA.gradeEn || 'Auspicious') : (cityMetaA.gradeZh || '吉 / 大利'),
        clusterSynergy: isEn ? (cityMetaA.clusterSynergyEn || 'Metropolitan Growth Vector') : (cityMetaA.clusterSynergyZh || '都市群发展中枢'),
        analysis: isEn ? (resA.geoEnergy?.descEn || 'Favorable directional alignment') : (resA.geoEnergy?.descZh || '地缘生旺'),
        analysisEn: resA.geoEnergy?.descEn || 'Favorable directional alignment'
      },
      optionB: {
        city: resB.cityName,
        direction: isEn ? (cityMetaB.dirEn || 'North') : (cityMetaB.dirZh || '北方'),
        directionEn: cityMetaB.dirEn || 'North',
        element: isEn ? (cityMetaB.elem || 'Water') : (cityMetaB.elem === 'Fire' ? '火' : cityMetaB.elem === 'Water' ? '水' : cityMetaB.elem === 'Wood' ? '木' : cityMetaB.elem === 'Metal' ? '金' : '土'),
        elementEn: cityMetaB.elem || 'Water',
        elementHeavenly: isEn ? (cityMetaB.nameEn || 'Northern Water') : (cityMetaB.nameZh || '北方壬癸水'),
        score: resB.geoEnergyScore,
        resonanceGrade: isEn ? (cityMetaB.gradeEn || 'Auspicious') : (cityMetaB.gradeZh || '吉 / 大利'),
        clusterSynergy: isEn ? (cityMetaB.clusterSynergyEn || 'Metropolitan Growth Vector') : (cityMetaB.clusterSynergyZh || '都市群发展中枢'),
        analysis: isEn ? (resB.geoEnergy?.descEn || 'Favorable directional alignment') : (resB.geoEnergy?.descZh || '地缘生旺'),
        analysisEn: resB.geoEnergy?.descEn || 'Favorable directional alignment'
      },
      comparativeVerdict: isEn
        ? (resA.geoEnergyScore >= resB.geoEnergyScore
            ? `[Directional Qi Resonance]: ${resA.cityName} channels ${cityMetaA.nameEn || 'Southern Fire'} (+${resA.geoEnergyScore} pts), creating superior elemental harmony with your natal Day Master compared to ${resB.cityName} (+${resB.geoEnergyScore} pts).`
            : `[Directional Qi Resonance]: ${resB.cityName} channels ${cityMetaB.nameEn || 'Northern Water'} (+${resB.geoEnergyScore} pts), offering greater nourishing synergy than ${resA.cityName} (+${resA.geoEnergyScore} pts).`)
        : (resA.geoEnergyScore >= resB.geoEnergyScore
            ? `【地缘方位气数共振】：${resA.cityName}纳${cityMetaA.nameZh || '南方丙丁火'}气数（+${resA.geoEnergyScore}分），较${resB.cityName}（+${resB.geoEnergyScore}分）对命局更有生扶之效。`
            : `【地缘方位气数共振】：${resB.cityName}纳${cityMetaB.nameZh || '北方壬癸水'}气数（+${resB.geoEnergyScore}分），较${resA.cityName}（+${resA.geoEnergyScore}分）对命主更有生扶之功。`),
      comparativeVerdictEn: (resA.geoEnergyScore >= resB.geoEnergyScore
        ? `[Directional Qi Resonance]: ${resA.cityName} channels ${cityMetaA.nameEn || 'Southern Fire'} (+${resA.geoEnergyScore} pts), creating superior elemental harmony with your natal Day Master compared to ${resB.cityName} (+${resB.geoEnergyScore} pts).`
        : `[Directional Qi Resonance]: ${resB.cityName} channels ${cityMetaB.nameEn || 'Northern Water'} (+${resB.geoEnergyScore} pts), offering greater nourishing synergy than ${resA.cityName} (+${resA.geoEnergyScore} pts).`)
    };

    // Merged Spatial Feng Shui 10 Practical Remedies
    const winOpt = (winner === 'B') ? optionB : optionA;
    const winCity = (winner === 'B') ? resB.cityName : resA.cityName;
    const winCountry = (winner === 'B') ? (optionB.country || 'China') : (optionA.country || 'UK');

    const defaultRemedies = [
      { icon: '💰', titleZh: '一、延年吉位聚财大阵', titleEn: '1. Yan Nian Wealth Qi Array', badgeZh: '聚财护库', badgeEn: 'Wealth Accumulation', descZh: '根据命卦锁定第一延年吉位，布设紫水晶洞与聚宝盆，固守现金流防波堤。', descEn: 'Anchor the prime Yan Nian sector with amethyst geodes and wealth basins to secure cash flow reserves.' },
      { icon: '🐢', titleZh: '二、龙龟双铃化煞安神', titleEn: '2. Dragon Turtle & Bells Protection', badgeZh: '化煞解厄', badgeEn: 'Dispel Sha Qi', descZh: '化解办公桌冲门或尖角对冲，安放开光纯铜龙龟，佩以八卦双铃，抵御小人暗箭。', descEn: 'Neutralize desk door clash or sharp poison arrows with brass dragon turtles and Bagua bells.' },
      { icon: '📿', titleZh: '三、贪合忘冲生肖佩戴', titleEn: '3. Tan He Wang Chong Zodiac Charm', badgeZh: '化冲为合', badgeEn: 'Convert Clash to Harmony', descZh: '依本命与流年地支对冲，佩戴六合生肖玉佩（贪合忘冲），将对抗性摩擦转化为合作贵人。', descEn: 'Wear Liu-He zodiac charms to entice dynamic combinations and neutralize branch clashes into supportive mentors.' },
      { icon: '🚗', titleZh: '四、车内行车出入平安护持', titleEn: '4. Car & Transit Talismanic Safeguard', badgeZh: '出行辟险', badgeEn: 'Transit Safeguard', descZh: '在爱车后视镜悬挂朱砂平安符与沉香木挂件，净化旅途流动气场，防范驿马冲煞。', descEn: 'Hang cinnabar talismans and agarwood beads from rearview mirrors to cleanse moving Qi.' },
      { icon: '🏔️', titleZh: '五、户型太极缺角泰山石补齐', titleEn: '5. Taiji Missing Sector Stone Remedy', badgeZh: '定鼎乾坤', badgeEn: 'Anchor Missing Sector', descZh: '住宅若西北或东北有缺角，在缺角方位安置朱砂刻字泰山石敢当，填补太极真气。', descEn: 'Place cinnabar-inscribed Mount Tai stones at missing northwest or northeast corners to restore Taiji equilibrium.' },
      { icon: '👥', titleZh: '六、三合贵人局生旺催化', titleEn: '6. San He Noble Triad Array', badgeZh: '招引贵人', badgeEn: 'Mentor Magnet', descZh: '以原局三合局之贵人方位摆设琉璃生肖阵列，催化职场提携与重大商业引荐。', descEn: 'Arrange elemental triad glass figurines in designated directions to magnetize senior patrons.' },
      { icon: '✨', titleZh: '七、岁运三元九运吉气生旺', titleEn: '7. Period 9 Star & Trio Boost', badgeZh: '九运亨通', badgeEn: 'Period 9 Prosperity', descZh: '顺应离火九运大势，在正南方与正北方置办光能水景，引动生生不息之天机财脉。', descEn: 'Harness Period 9 Fire by placing solar illuminated water features in south and north sectors.' },
      { icon: '🔢', titleZh: '八、河图洛书吉数与选楼选号', titleEn: '8. Hetu Luoshu Favorable Numbers & Colors', badgeZh: '数字物性', badgeEn: 'Resonant Numbers', descZh: '选用与用神同频之河图数（如水一六、火二七、木三八）作为手机尾数、车牌与楼层。', descEn: 'Adopt Hetu-Luoshu numerical resonances as mobile digits, floor levels, and vehicle plates.' },
      { icon: '🕊️', titleZh: '九、积德行善与心性实修', titleEn: '9. Ethical Merit & Mindful Rectification', badgeZh: '阴骘固本', badgeEn: 'Karmic Rectification', descZh: '风水之极在心性。日行一善，宽以待人，定期布施回馈社会，乃破尽天下凶煞之至高护法。', descEn: 'The supreme summit of Feng Shui is inner virtue; daily acts of altruism dissolve all adverse Sha Qi.' },
      { icon: '🏛️', titleZh: '十、户型气场综合调理评级与总诀', titleEn: '10. Holistic Spatial Qi Rating & Grand Directives', badgeZh: '天人合一', badgeEn: 'Holistic Harmony', descZh: '坐向坚实、藏风聚气、动静分明。顺承天地之气运，心境自然澄明，无往不利。', descEn: 'Solid backrest, Qi accumulation, balanced Yin and Yang: align with spatial harmony to ensure lasting fortune.' }
    ];

    const remediesList = defaultRemedies.map((item, idx) => ({
      order: idx + 1,
      icon: item.icon,
      title: isEn ? item.titleEn : item.titleZh,
      badge: isEn ? item.badgeEn : item.badgeZh,
      desc: isEn ? item.descEn : item.descZh
    }));

    const spatialFengShuiRemedies = {
      targetCity: winCity,
      targetCountry: isEn ? (winCountry === 'China' ? 'China' : (winCountry === 'UK' ? 'UK' : (winCountry === 'USA' ? 'USA' : (winCountry === 'Canada' ? 'Canada' : 'Global')))) : winCountry,
      kuaName: isEn ? 'Kan Water Kua (1)' : '坎水命',
      yanNianSector: isEn ? 'South (Li)' : '正南方 (离宫)',
      primaryFavorableElement: isEn ? 'Wood' : '木',
      holisticRatingBadge: isEn ? 'Tier-1 Favorable Sanctuary' : '上上大吉 · 乾坤生旺',
      remedies: remediesList
    };

    return {
      optionA: resA,
      optionB: resB,
      winner,
      delta,
      verdictTitle: isEn ? verdictTitleEn : verdictTitleZh,
      summary: isEn ? summaryEn : summaryZh,
      leaderboard: cleanLeaderboard,
      top3Patterns: cleanTop3,
      counterfactualDynamics,
      directionalResonance,
      spatialFengShuiRemedies
    };
  }
}

if (typeof window !== 'undefined') {
  window.ScenarioSimulatorEngine = ScenarioSimulatorEngine;
}
if (typeof globalThis !== 'undefined') {
  globalThis.ScenarioSimulatorEngine = ScenarioSimulatorEngine;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ScenarioSimulatorEngine;
}
