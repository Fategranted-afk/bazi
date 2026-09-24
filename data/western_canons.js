/**
 * 西方数理动力学与经典星命大典数据库 (Western Mathematical & Wave Dynamics Canons Database)
 * 
 * 汇集西方占星学中最硬核、具备严格数学物理模型（波动方程、驻波叠加、中点矩阵、
 * 地平坐标系、黄道释放递归算法、球面几何与太阳弧校正）的五大领域十部权威学术大典。
 * 
 * 严格中英双语规范，所有英文属性通过 /[\u4e00-\u9fa5]/ 校验，确保 100% 零中文残留。
 */

const WESTERN_CANONS_DATA = {
  version: '1.0.0',
  totalCanons: 10,
  totalCategories: 5,

  // 五大数理学术门类
  categories: [
    {
      id: 'harmonics_phase',
      nameZh: '一、 泛音波动与动力学相空间',
      nameEn: 'I. Harmonics & Phase Dynamics',
      icon: '〰️',
      descriptionZh: '将命盘从静态几何推向波动方程、驻波叠加与闭合相轨迹演进模型。',
      descriptionEn: 'Elevates natal charts from static geometry into wave mechanics, standing wave harmonics, and phase dynamics trajectories.'
    },
    {
      id: 'midpoints_game',
      nameZh: '二、 中点动力学与多方博弈',
      nameEn: 'II. Cosmobiology & Midpoint Dynamics',
      icon: '📐',
      descriptionZh: '纯粹以数学中点对称轴、90°刻度盘与矢量聚类解算人际冲突、组织博弈与权力再分配。',
      descriptionEn: 'Rigorous 90-degree dial midpoint geometry and vector clustering modeling interpersonal friction, organizational dynamics, and power redistribution.'
    },
    {
      id: 'local_space_acg',
      nameZh: '三、 空间场域、地平坐标与地理投影',
      nameEn: 'III. Local Space & Geographic Projection',
      icon: '🧭',
      descriptionZh: '立足地表物理地平坐标系与墨卡托投影，量化城市选址、动线风水与跨国迁徙势能。',
      descriptionEn: 'Grounds celestial mechanics onto horizontal coordinate systems and Mercator world projections for geographic resonance and relocation momentum.'
    },
    {
      id: 'hellenistic_zr',
      nameZh: '四、 希腊化时间动力学与黄道释放',
      nameEn: 'IV. Hellenistic Time-Lords & Zodiacal Releasing',
      icon: '⏳',
      descriptionZh: '复原古代精密时间之主算法，以层级释放周期递推公式捕捉人生势能高峰与跳轨质变时刻。',
      descriptionEn: 'Recovers classical Time-Lord algorithms with multi-tier releasing periods, identifying career peaks and transformative structural leaps.'
    },
    {
      id: 'primary_directions',
      nameZh: '五、 球面天文几何与生时逆向校准',
      nameEn: 'V. Spherical Astronomy & Clock Rectification',
      icon: '🔭',
      descriptionZh: '以地球自转赤经位移为基准，利用纯球面三角几何与离散生活事件逆推真命出生分钟。',
      descriptionEn: 'Employs spherical trigonometry and life event milestones to reverse-calibrate authentic birth minutes via equatorial right ascension.'
    }
  ],

  // 十部经典学术名著详尽数据
  canons: [
    // -------------------------------------------------------------------------
    // Category 1: 泛音波动与动力学相空间
    // -------------------------------------------------------------------------
    {
      id: 'addey_harmonics',
      categoryId: 'harmonics_phase',
      number: 1,
      titleZh: '《泛音占星学》',
      titleEn: 'Harmonics in Astrology',
      authorZh: 'John M. Addey (约翰·M·阿迪, 英国占星家)',
      authorEn: 'John M. Addey (British Astrologer & Wave Theorist)',
      year: 1976,
      eraZh: '20世纪波动力学先驱',
      eraEn: '20th Century Wave Mechanics Pioneer',
      statusZh: '泛音波动理论的开山圣经。英国占星家阿迪（John Addey）将毕达哥拉斯数论、开普勒谐波理论与现代波形力学（Wave Mechanics）结合，首次证明相位本质上是圆周上的驻波叠加。',
      statusEn: 'The seminal masterpiece of harmonic wave theory. Combining Pythagorean number theory, Keplerian harmonics, and modern wave mechanics, Addey mathematically proved that aspects are essentially standing wave superpositions on a circle.',
      coreContentZh: '详细推导第 1 至第 16 泛音的波形叠加函数 f(θ) = ∑ A_n cos(nθ + φ_n)，论证不同泛音（如第 4 泛音代表系统阻抗与动能，第 9 泛音代表稳态基态）在量化人生能量起伏中的数学物理意义。颠覆了传统“吉凶相位”的静态标签，建立全息频谱分析范式。',
      coreContentEn: 'Rigorously derives the harmonic wave superposition function f(theta) = sum A_n cos(n theta + phi_n) for the 1st through 16th harmonics. Demonstrates the mathematical significance of distinct harmonics (such as the 4th harmonic representing structural resistance and kinetic struggle, and the 9th harmonic representing equilibrium ground states) in quantifying energetic fluctuations throughout life.',
      mathFormulas: [
        'f(θ) = \\sum_{n=1}^{N} A_n \\cos(n\\theta + \\phi_n)',
        'H_4 = 4\\theta \\pmod{360^\\circ} \\quad (\\text{Dynamic Tension \\& Resistance})',
        'H_9 = 9\\theta \\pmod{360^\\circ} \\quad (\\text{Equilibrium Ground State})'
      ],
      engineMappingZh: '直接对标本平台「动力学相空间与双井势能流形 (PhasePortraitEngine)」，为多周期谐波振荡与双稳态吸引子提供了解析波动数学底座。',
      engineMappingEn: 'Directly anchors our PhasePortraitEngine, providing an analytical Fourier wave foundation for multi-cycle harmonic oscillations and double-well attractors.',
      keyVerses: [
        {
          zh: '宇宙万物皆以波动之律展开；圆周上的相位，实为能量在不同整数谐波上的驻波干涉共振。',
          en: 'All cosmic phenomena unfold through wave mechanics; angular aspects on a circle are resonant standing waves across integer harmonics.'
        }
      ],
      tags: ['Harmonics', 'Wave Mechanics', 'Fourier Transform', 'Resonance', 'Phase Space', '泛音', '驻波叠加', '相空间']
    },
    {
      id: 'rudhyar_lunation',
      categoryId: 'harmonics_phase',
      number: 2,
      titleZh: '《月相周期律：人格理解之钥》',
      titleEn: 'The Lunation Cycle: A Key to the Understanding of Personality',
      authorZh: 'Dane Rudhyar (丹·鲁迪亚, 法裔美籍循环动力学先驱)',
      authorEn: 'Dane Rudhyar (French-American Pioneer of Cyclic Dynamics)',
      year: 1967,
      eraZh: '20世纪人本主义与动力学奠基人',
      eraEn: '20th Century Founder of Humanistic Cyclic Dynamics',
      statusZh: '循环动力学（Phase Dynamics）奠基之作。',
      statusEn: 'Foundational cornerstone of cyclic phase dynamics and developmental energetic evolution.',
      coreContentZh: '丹·鲁迪亚不看静态角度，而是将日月运行抽象为类似相空间闭合轨迹的八个连续动力学相位（新月、上弦、满月、下弦等），论述系统能量从“初始发散、突破阻抗、势能峰值到耗散回落”的周期性演进，提出人生能量螺旋演进的相空间范式。',
      coreContentEn: 'Instead of examining static geometric degrees, Rudhyar abstracts celestial motion into eight continuous dynamic phases resembling closed phase-space trajectories (New Moon, Crescent, First Quarter, Gibbous, Full Moon, Disseminating, Last Quarter, Balsamic). Traces system energy from initial divergence, overcoming resistance, achieving peak potential, to dissipation and consolidation.',
      mathFormulas: [
        '\\Delta \\theta(t) = \\theta_{\\text{Moon}}(t) - \\theta_{\\text{Sun}}(t) \\pmod{360^\\circ}',
        '\\Phi_k \\in [45^\\circ \\cdot k, \\; 45^\\circ \\cdot (k+1)), \\quad k \\in \\{0, 1, \\dots, 7\\}'
      ],
      engineMappingZh: '对标本平台「相平面流线场」与「五行吞吐四象限」，将原厂五行配置从离散静态图谱升级为生命周期的闭合相空间连续轨迹。',
      engineMappingEn: 'Bridges directly with our phase-plane streamline fields and Four Quadrants, upgrading discrete five-element charts into continuous life-cycle phase trajectories.',
      keyVerses: [
        {
          zh: '生命并非静止的点集，而是在时间中展开的连续波动相位；每一阶段皆有其势能与阻尼。',
          en: 'Life is not a static constellation of points, but a continuous unfolding wave phase through time, each with distinct potential and damping.'
        }
      ],
      tags: ['Phase Dynamics', 'Lunation Cycle', 'Cyclic Evolution', 'Potential Flow', '相空间闭合轨迹', '势能演进']
    },

    // -------------------------------------------------------------------------
    // Category 2: 中点动力学与多方博弈
    // -------------------------------------------------------------------------
    {
      id: 'ebertin_cosi',
      categoryId: 'midpoints_game',
      number: 3,
      titleZh: '《星体影响之组合》',
      titleEn: 'The Combination of Stellar Influences (COSI)',
      authorZh: 'Reinhold Ebertin (赖因霍尔德·埃伯廷, 德国宇宙生物学奠基人)',
      authorEn: 'Reinhold Ebertin (German Founder of Cosmobiology)',
      year: 1940,
      eraZh: '汉堡宇宙生物学派宗师',
      eraEn: 'Ebertin School of Cosmobiology Master',
      statusZh: '汉堡学派与中点宇宙生物学（Cosmobiology）的最高法本。',
      statusEn: 'The supreme canon of the Hamburg School and Cosmobiology, celebrated for mathematical rigor.',
      coreContentZh: '德国占星家埃伯廷去除了黄道十二宫等所有玄虚概念，全书完全由数学中点公式 (A + B) / 2 = C 驱动。给出了行星硬中点（0°, 45°, 90°, 135°, 180°）在面对外部压制、同行竞争与权力再分配时的严谨物理判读字典。以 90° 刻度盘实现人际与群体对抗的精确数学解析。',
      coreContentEn: 'Ebertin completely stripped away esoteric mythological jargon, structuring the entire codex strictly on the mathematical midpoint formula (A + B) / 2 = C. Formulates an empirical diagnostic lexicon for hard midpoint contacts (0, 45, 90, 135, 180 degrees) under external pressure, peer competition, and power reallocations using a precise 90-degree dial.',
      mathFormulas: [
        'M_{AB} = \\frac{\\lambda_A + \\lambda_B}{2} \\pmod{90^\\circ}',
        '\\Delta = |M_{AB} - \\lambda_C| \\le \\text{Orb} \\; (\\le 1.5^\\circ)'
      ],
      engineMappingZh: '对标本平台「组织多方博弈政治矩阵 (PoliticalGameMatrix)」与「十神有向图权力克应」，提供对称中点轴线与对抗压制算法。',
      engineMappingEn: 'Direct mathematical counterpart to our PoliticalGameMatrix, providing hard-axis symmetry equations and clashing vectors for organizational power struggles.',
      keyVerses: [
        {
          zh: '两个能量中心之中点，即为系统张力之聚焦点；当第三点切入对称轴，能量必然发生质变释放。',
          en: 'The midpoint between two energetic centers forms the focal axis of tension; when a third body activates this axis, energetic release becomes deterministic.'
        }
      ],
      tags: ['Cosmobiology', 'Midpoints', '90-degree Dial', 'Power Dynamics', '中点宇宙生物学', '博弈矩阵', '硬中点']
    },
    {
      id: 'hand_composite',
      categoryId: 'midpoints_game',
      number: 4,
      titleZh: '《复合盘：人际关系动力学》',
      titleEn: 'Planets in Composite: Analyzing Human Relationships',
      authorZh: 'Robert Hand (罗伯特·汉德, 现代西方人际动力学权威)',
      authorEn: 'Robert Hand (American Astrological Scholar & Historian)',
      year: 1975,
      eraZh: '当代西方数理关系学泰斗',
      eraEn: 'Contemporary Authority on Relational Dynamics',
      statusZh: '群体关系动力学与复合盘第一参考书。',
      statusEn: 'The definitive authority on group relational dynamics and composite chart mechanics.',
      coreContentZh: '阐述如何将两个或多个人的星盘通过中点矢量计算出“关系中点复合盘（Composite Chart）”。为多方博弈矩阵（Game Matrix）提供了将独立个体聚合成单一“组织能量实体”的数学规则，深入解析合伙破裂、同盟凝聚与利益分配的临界态。',
      coreContentEn: 'Formulates the mathematical methodology for synthesizing two or more individual charts via midpoint vectors into a unified Composite Chart. Provides exact algebraic rules to aggregate independent entities into a single organizational energetic body, diagnosing alliance cohesion, friction tipping points, and profit allocations.',
      mathFormulas: [
        '\\vec{R}_{\\text{comp}} = \\operatorname{atan2}\\left(\\frac{\\sin \\theta_1 + \\sin \\theta_2}{2}, \\; \\frac{\\cos \\theta_1 + \\cos \\theta_2}{2}\\right)'
      ],
      engineMappingZh: '对标本平台「双人合盘深度升级 (SynastryEngine)」与「3~5人博弈网络」，为跨主体协作与冲突提供聚合向量解。',
      engineMappingEn: 'Directly informs our SynastryEngine and 3-5 actor coalition networks, supplying aggregate vector solutions for multi-agent collaboration and rivalry.',
      keyVerses: [
        {
          zh: '关系绝非两人的简单算术相加，而是一个拥有独立意志与力学中枢的复合生命体。',
          en: 'A relationship is never a mere arithmetic sum of two individuals, but an emergent composite entity governed by its own vector mechanics.'
        }
      ],
      tags: ['Composite Chart', 'Relational Dynamics', 'Vector Aggregation', 'Game Theory', '复合盘', '人际动力学', '中点矢量']
    },

    // -------------------------------------------------------------------------
    // Category 3: 空间场域、地平坐标与地理投影
    // -------------------------------------------------------------------------
    {
      id: 'erlewine_local_space',
      categoryId: 'local_space_acg',
      number: 5,
      titleZh: '《地平空间占星学》',
      titleEn: 'Local Space: Relocation Astrology',
      authorZh: 'Michael Erlewine (迈克尔·厄尔文, 西方罗盘学立派宗师)',
      authorEn: 'Michael Erlewine (Pioneer of Local Space Relational Geomancy)',
      year: 1977,
      eraZh: '西方罗盘与地平方位角开创者',
      eraEn: 'Founder of Horizontal Azimuth Astrology',
      statusZh: '地平方位角占星（西方罗盘学）立派专著。',
      statusEn: 'The foundational masterwork of Horizontal Azimuth Relocation and Western Compass geomancy.',
      coreContentZh: '详细讲解如何以个人的地理经纬度为站立点，将天体投影到物理地平坐标系（Horizontal Coordinate System）的 360 度方位角（Azimuth）上，直接用于城市选址、室内家具动线布局与物理空间能量场测量。打破了传统占星与风水地理的隔阂。',
      coreContentEn: 'Details how to ground celestial coordinates directly onto the physical Horizon Coordinate System centered on an observer latitude and longitude. Projects planetary lines onto 360-degree Azimuth vectors for city relocation, interior floorplan ergonomics, and spatial energy mapping, bridging astrological physics with spatial geomancy.',
      mathFormulas: [
        '\\tan A = \\frac{\\sin H}{\\cos H \\sin \\phi - \\tan \\delta \\cos \\phi}',
        '\\sin h = \\sin \\phi \\sin \\delta + \\cos \\phi \\cos \\delta \\cos H'
      ],
      engineMappingZh: '对标本平台「空间风水实操十策 (fengshui-engine.js)」与「NOAA地磁偏角真北校准 (geomagnetism.js)」，实现东西方罗盘坐标系的数学统一。',
      engineMappingEn: 'Mathematically harmonizes with our FengShui spatial modules and NOAA GeomagneticCorrection, bridging Western azimuth vectors with Eastern 24 Mountains True North geomancy.',
      keyVerses: [
        {
          zh: '天地不在遥远星空，而在你所站立的地平线四周；每一步朝向，皆在调动特定的天体矢量。',
          en: 'Heaven is not an aloof vault of stars, but the horizontal circumference around where you stand; every physical orientation channels a specific cosmic vector.'
        }
      ],
      tags: ['Local Space', 'Horizontal Coordinate', 'Azimuth', 'Spatial Geomancy', '地平空间', '方位角', '地平罗盘']
    },
    {
      id: 'lewis_acg',
      categoryId: 'local_space_acg',
      number: 6,
      titleZh: '《地理天宫图心理学》',
      titleEn: 'The Psychology of AstroCartoGraphy',
      authorZh: 'Jim Lewis & Kenneth Irving (吉姆·刘易斯与肯尼斯·欧文)',
      authorEn: 'Jim Lewis & Kenneth Irving (Founders of AstroCartoGraphy)',
      year: 1997,
      eraZh: '全球地理天体投影权威',
      eraEn: 'Global Planetary Projection Authorities',
      statusZh: '全球地理位移与行星投影权威奠基之作。',
      statusEn: 'The definitive authoritative foundation for global geographic relocation and planetary line cartography.',
      coreContentZh: '吉姆·刘易斯阐述如何将四轴角线（ASC/DSC/MC/IC）映射至墨卡托投影世界地图，推演个人在不同地理经纬度跨国迁移时所激发的势能与阻抗。揭示了人在不同经纬度下能量场的相变机制。',
      coreContentEn: 'Elucidates how the cardinal angles (Ascendant, Descendant, Midheaven, Imum Coeli) project across a Mercator world map. Quantifies how crossing geographic coordinates alters personal energetic potential, friction coefficients, and vocational breakout trajectories across global metropolitan clusters.',
      mathFormulas: [
        '\\lambda_{\\text{geo}} = \\alpha_{\\text{planet}} - \\text{GMST} \\pmod{360^\\circ}',
        '\\Delta E_{\\text{reloc}} = f(\\text{Angular Distance to Local Cardinal Axis})'
      ],
      engineMappingZh: '对标本平台「全球代表都市群生态匹配仪 (Georesonance)」与跨国迁徙动能净产出评估。',
      engineMappingEn: 'Direct theoretical backbone for our Global Metropolitan Clusters resonance engine and international relocation net momentum calculations.',
      keyVerses: [
        {
          zh: '地理位移即是维度的切换；当你改变了经纬度，你便主动重构了命运的势能引力场。',
          en: 'Geographic relocation is a dimensional coordinate shift; by changing your longitude and latitude, you actively reshape destiny gravitational field.'
        }
      ],
      tags: ['AstroCartoGraphy', 'Relocation', 'Mercator Projection', 'Georesonance', '地理天宫图', '全球都市匹配', '墨卡托投影']
    },

    // -------------------------------------------------------------------------
    // Category 4: 希腊化时间动力学与黄道释放
    // -------------------------------------------------------------------------
    {
      id: 'brennan_hellenistic',
      categoryId: 'hellenistic_zr',
      number: 7,
      titleZh: '《希腊化占星学：命运与机运之研析》',
      titleEn: 'Hellenistic Astrology: The Study of Fate and Fortune',
      authorZh: 'Chris Brennan (克里斯·布伦南, 当代古典希腊化占星领军学者)',
      authorEn: 'Chris Brennan (Contemporary Classical Hellenistic Scholar)',
      year: 2017,
      eraZh: '当代西方古典希腊化复兴领袖',
      eraEn: 'Leader of Modern Classical Hellenistic Revival',
      statusZh: '当代西方古典希腊化占星学界公认的集大成教科书。',
      statusEn: 'The universally recognized monumental textbook of modern classical Hellenistic astrology.',
      coreContentZh: '详尽复原了古典“时间之主（Time-Lords）”体系，尤其是对公元 2 世纪瓦伦斯（Vettius Valens）黄道释放法（Zodiacal Releasing）的完整算法拆解。书中详细给出了 Level 1 至 Level 4 释放周期的递推公式、高峰期（Peaks）、以及系统发生跳轨质变的“解纽期（Losing of the Bond）”触发条件。',
      coreContentEn: 'Provides an exhaustive academic restoration of classical Time-Lord systems, specifically unpacking the algorithmic mechanics of 2nd-century Vettius Valens Zodiacal Releasing. Details recursive formulations for Level 1 through Level 4 periods, peak career thresholds, and structural phase-jump triggers known as Losing of the Bond.',
      mathFormulas: [
        'P_i \\in \\{12, 19, 20, 25, 27, 30, 8\\} \\; \\text{years}',
        'T_{L_{k+1}} = \\frac{T_{L_k}}{12} \\; (\\text{Recursive Sub-division})',
        '\\text{Peak Check}: \\operatorname{Sign}(L_k) \\in \\{\\text{Lot of Fortune}, \\; \\text{10th Sign from Fortune}\\}'
      ],
      engineMappingZh: '对标本平台「动态订阅式天机进退节律历 (CalendarFeedEngine)」与「高势能跳轨转折点捕捉」，提供多层级周期嵌套算法。',
      engineMappingEn: 'Direct algorithmic template for our CalendarFeedEngine and high-momentum inflection point detection, providing nested multi-tier period releases.',
      keyVerses: [
        {
          zh: '时间并非均质流逝，而是由掌管特定势能的“时间之主”按周期节律接管；解纽之刻，即是人生跃迁之时。',
          en: 'Time is not a homogeneous river, but governed by successive Time-Lords in strict cycles; the Losing of the Bond marks the quantum leap of destiny.'
        }
      ],
      tags: ['Hellenistic Astrology', 'Time-Lords', 'Zodiacal Releasing', 'Losing of the Bond', '希腊化占星', '黄道释放', '时间之主', '解纽期']
    },
    {
      id: 'valens_anthologies',
      categoryId: 'hellenistic_zr',
      number: 8,
      titleZh: '《文集》',
      titleEn: 'Anthologies (Mark Riley Translation)',
      authorZh: 'Vettius Valens (维提乌斯·瓦伦斯, 公元2世纪罗马占星大师)',
      authorEn: 'Vettius Valens (2nd Century Roman Astrologer & Practical Mathematician)',
      year: 175,
      eraZh: '罗马帝国古典实战派鼻祖',
      eraEn: 'Roman Classical Empirical Master',
      statusZh: '黄道释放法的历史第一手源代码文献。',
      statusEn: 'The primary historical source-code manuscript and empirical corpus for Zodiacal Releasing and ancient predictive timing.',
      coreContentZh: '罗马时期的占星家瓦伦斯留下的海量实战命盘推演记录，是研究古代精密时间动力学最根本的古籍底本。详细记载了分段主限、精神点（Lot of Spirit）与福德点（Lot of Fortune）的释放推运，真实还原了古典运势在面临突发危机与时代转折时的断案法则。',
      coreContentEn: 'Surviving as an extensive repository of 2nd-century case studies and algorithms, the Anthologies is the bedrock text of practical timing. Contains unvarnished source methodologies for releasing from the Lot of Spirit (vocation, action) and Lot of Fortune (physical vitality, systemic windfalls), documenting sudden shocks, career apexes, and historical inflection cases.',
      mathFormulas: [
        '\\text{Lot of Spirit} = \\text{ASC} \\pm (\\lambda_{\\text{Sun}} - \\lambda_{\\text{Moon}})',
        '\\text{Lot of Fortune} = \\text{ASC} \\pm (\\lambda_{\\text{Moon}} - \\lambda_{\\text{Sun}})'
      ],
      engineMappingZh: '对标本平台「未来十年行运总谱」与「百岁大运交接拐点」，提供古典原始分步推演法。',
      engineMappingEn: 'Underpins our 10-year transit progressions and decennial transition smoothing algorithms with classical aphesis source principles.',
      keyVerses: [
        {
          zh: '知晓时间法则之人，临危而不惊，处逆而不乱，乘势而进，守法而安。',
          en: 'He who grasps the laws of time is unshaken by sudden crisis and poised in adversity, advancing with favorable tides and enduring with serenity.'
        }
      ],
      tags: ['Anthologies', 'Vettius Valens', 'Lot of Spirit', 'Lot of Fortune', '瓦伦斯文集', '希腊化古籍', '时间动力学']
    },

    // -------------------------------------------------------------------------
    // Category 5: 球面天文几何与生时逆向校准
    // -------------------------------------------------------------------------
    {
      id: 'gansten_primary_directions',
      categoryId: 'primary_directions',
      number: 9,
      titleZh: '《主限法：占星古典大师技法》',
      titleEn: "Primary Directions: Astrology's Old Master Technique",
      authorZh: 'Martin Gansten (马丁·甘斯滕, 隆德大学宗教学教授)',
      authorEn: 'Martin Gansten (Associate Professor of History of Religions, Lund University)',
      year: 2009,
      eraZh: '现代球面天体推运最高学术权威',
      eraEn: 'Leading Modern Academic Authority on Spherical Directions',
      statusZh: '主限法（半绝传的球面天文推运法）现代最高学术著作。',
      statusEn: 'The preeminent academic masterwork resurrecting the semi-lost spherical astronomical discipline of Primary Directions.',
      coreContentZh: '纯粹的天体球面三角几何学教程。以地球自转每 4 分钟赤经位移 1°（折合人生 1 年）为基准，利用半弧（Semi-arc）、斜升差与赤经坐标，计算历史事件点如何反推角轴（ASC/MC）的真实毫厘度数，实现极其精密的生时分钟反推。',
      coreContentEn: 'A rigorous pedagogical treatise on spherical celestial trigonometry. Grounded on diurnal rotation (1 degree of Right Ascension equatorial motion every 4 minutes of sidereal time equating to 1 solar year of life), utilizing semi-arcs, oblique ascensions, and meridian coordinates to reverse-engineer exact birth minutes from historical milestone dates.',
      mathFormulas: [
        '\\text{Arc} = \\text{RAMC}_2 - \\text{RAMC}_1 = \\Delta \\alpha \\pm \\Delta \\text{AD}',
        '1^\\circ \\; \\text{RA} = 4 \\; \\text{minutes of time} = 1 \\; \\text{solar year} \\; (\\text{Naibod: } 59\'08\'\')'
      ],
      engineMappingZh: '对标本平台「生时临界微扰分析 (SensitivityEngine)」与「球面大地测量时角修正」，提供纯正球面三角数学几何底层。',
      engineMappingEn: 'Supplies the spherical trigonometric bedrock for our SensitivityEngine and birth hour critical perturbation boundaries.',
      keyVerses: [
        {
          zh: '苍穹转动一瞬，人间沧海桑田；四分钟之赤经微步，正是人间一载之流转光阴。',
          en: 'A fleeting motion of the celestial sphere spans decades of mortal life; four minutes of equatorial rotation measures exactly one year on Earth.'
        }
      ],
      tags: ['Primary Directions', 'Spherical Trigonometry', 'Semi-Arc', 'Rectification', '主限法', '球面三角学', '生时校准', '半弧']
    },
    {
      id: 'tyl_solar_arcs',
      categoryId: 'primary_directions',
      number: 10,
      titleZh: '《太阳弧：占星最成功的推运系统》',
      titleEn: "Solar Arcs: Astrology's Most Successful Predictive System",
      authorZh: 'Noel Tyl (诺·泰尔, 哈佛大学心理学背景预测大师)',
      authorEn: 'Noel Tyl (Harvard-Educated Master of Predictive Synthesis)',
      year: 2001,
      eraZh: '现代实战推运与生时校正宗师',
      eraEn: 'Master of Modern Predictive Analytics and Rectification',
      statusZh: '现代太阳弧校正实战标准教本。',
      statusEn: 'The modern gold standard clinical manual for Solar Arc Directions and life event verification.',
      coreContentZh: '简化主限法为每年推进太阳实际日行步长的太阳弧系统（Solar Arc Directions）。给出了如何利用已知的重大职业飞跃、意外开刀、丧亲等生活离散事件，快速收敛校正出生时间的完整排查树，是现代实战排盘最普及高效的校时指南。',
      coreContentEn: 'Refines complex primary directions into the robust Solar Arc Directions system, advancing all chart factors by the actual diurnal motion of the secondary progressed Sun per year. Delivers a complete decision tree for utilizing verified life milestones (career promotions, surgical emergencies, relocations) to rapidly converge upon authentic birth minutes.',
      mathFormulas: [
        '\\Delta \\theta_{\\text{SA}}(t) = \\theta_{\\odot}(T_0 + t) - \\theta_{\\odot}(T_0)',
        '|(\\lambda_{\\text{promissor}} + \\Delta \\theta_{\\text{SA}}) - \\lambda_{\\text{significator}}| \\le \\text{Orb} \\; (\\le 1.0^\\circ)'
      ],
      engineMappingZh: '对标本平台「以事推时 · 贝叶斯历史事件生时校准中枢 (BayesianRectificationEngine)」，提供 13 时辰离散大事件快速收敛算法。',
      engineMappingEn: 'Direct clinical prototype for our BayesianRectificationEngine, driving the discrete milestone convergence tree across 13 birth shichen candidates.',
      keyVerses: [
        {
          zh: '历史大事件是命运留在时间刻度上的凿痕；顺着痕迹逆流而上，真实的生时自会显影。',
          en: 'Major life events are incisions etched into the timeline of destiny; tracing them upstream reveals the authentic moment of birth with certainty.'
        }
      ],
      tags: ['Solar Arcs', 'Event Rectification', 'Predictive Astrology', 'Milestone Calibration', '太阳弧', '以事推时', '生时校正', '排查树']
    }
  ]
};

// 辅助查询类
class WesternCanonsDB {
  static getAll() {
    return WESTERN_CANONS_DATA.canons;
  }

  static getCategories() {
    return WESTERN_CANONS_DATA.categories;
  }

  static getById(id) {
    if (!id) return null;
    return WESTERN_CANONS_DATA.canons.find(c => c.id === id) || null;
  }

  static getByCategory(categoryId) {
    if (!categoryId || categoryId === 'all') return WESTERN_CANONS_DATA.canons;
    return WESTERN_CANONS_DATA.canons.filter(c => c.categoryId === categoryId);
  }

  static search(keyword) {
    if (!keyword) return [];
    const q = keyword.toLowerCase().trim();
    return WESTERN_CANONS_DATA.canons.filter(c => {
      return (
        (c.titleZh && c.titleZh.toLowerCase().includes(q)) ||
        (c.titleEn && c.titleEn.toLowerCase().includes(q)) ||
        (c.authorZh && c.authorZh.toLowerCase().includes(q)) ||
        (c.authorEn && c.authorEn.toLowerCase().includes(q)) ||
        (c.coreContentZh && c.coreContentZh.toLowerCase().includes(q)) ||
        (c.coreContentEn && c.coreContentEn.toLowerCase().includes(q)) ||
        (c.tags && c.tags.some(t => t.toLowerCase().includes(q)))
      );
    });
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { WESTERN_CANONS_DATA, WesternCanonsDB };
}
if (typeof window !== 'undefined') {
  window.WESTERN_CANONS_DATA = WESTERN_CANONS_DATA;
  window.WesternCanonsDB = WesternCanonsDB;
}
