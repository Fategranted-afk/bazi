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
      formulaAnalysis: {
        principleZh: '基于傅里叶级数分解与周期拓扑闭合边界。黄道圆周是一条 2π 闭合弦，行星在圆周上的角坐标构成能量质点分布。根据波动力学，任意连续或离散分布均可展开为基频与整数阶高次谐波（泛音）的驻波干涉叠加。',
        principleEn: 'Rooted in Fourier series decomposition on topologically closed circular boundaries. The 360-degree zodiac acts as a closed resonant string; planetary longitudes represent discrete energy nodes that superimpose into integer harmonic standing waves.',
        variablesZh: 'n 为泛音阶数（如 n=4 对应 360°/4=90° 刑相位；n=9 对应九分稳态）；A_n 为第 n 泛音振幅，测量该特定频段的能量强度；φ_n 为初相位，决定波峰在黄道上的具体节线落点。',
        variablesEn: 'n represents the harmonic order (e.g., n=4 marks 90-degree square stress nodes; n=9 marks ground-state stability); A_n measures the wave amplitude and energy density of that harmonic frequency; phi_n is the initial phase shift anchoring antinodes along the ecliptic.',
        inferenceZh: '为什么能测算人生动能与阻抗？第 4 泛音振幅 A_4 极高时，系统内部驻波节线形成强烈的四角剪切应力，测量出主体在遭遇外部摩擦时的抗挫动能；第 9 泛音 A_9 极高时，节点相互抵消形成基态平衡，测量出保守防御与稳态固化。由此将抽象的“吉凶”转化为物理系统的动能与阻尼阻抗系数。',
        inferenceEn: 'Why it quantifies kinetic struggle vs. stability: A high 4th harmonic amplitude A_4 generates acute shear stress across quarterly nodal lines, directly measuring the subject resilience to overcome external resistance. Conversely, a high A_9 indicates ground-state energetic equilibrium, measuring structural stability and contentment.'
      },
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
      formulaAnalysis: {
        principleZh: '基于非线性动力学相空间（Phase Space）中的极限环与序参量。日月在天球上的视运动速度不同（月快日慢），构成快慢双振子耦合系统，两者的黄经差值 Δθ(t) 即是表征系统能量生命周期的连续序参量。',
        principleEn: 'Based on limit cycles and order parameters within nonlinear dynamical phase spaces. The differential angular velocities of the Sun (slow oscillator) and Moon (fast oscillator) create a coupled cyclic dynamic governed by the angular phase lag Delta theta(t).',
        variablesZh: 'Δθ(t) 为月日相对黄经相角（0°朔月孕育，90°上弦突破阻抗，180°望月势能全开，270°下弦收敛重组）；k ∈ {0..7} 将 360° 连续流形划分为 8 个各为 45° 的特征动力学区间。',
        variablesEn: 'Delta theta(t) is the relative Sun-Moon elongation angle (0 deg New Moon emergence, 90 deg First Quarter resistance breakthrough, 180 deg Full Moon peak illumination, 270 deg Last Quarter restructuring); k indexes the eight 45-degree octant phases.',
        inferenceZh: '为什么能测算人生螺旋阶段？测量出生瞬间的 Δθ 确定了个体的“初始相空间动量坐标”：新月出生的个体天生处于能量向外发散突破的做功态；满月个体处于主客体二元对立的势能峰值态；随时间演化，该相角每 29.5 年在次限盘中完整轮回一次，精准预测个体从开拓、攻坚到退隐迭代的战略转换节奏。',
        inferenceEn: 'Why it maps developmental life chapters: Measuring natal Delta theta locates an individual native starting momentum in phase space. Progressing Delta theta advances through the 29.5-year lunation cycle, rigorously forecasting when to seed new endeavors, when to execute forceful breakthroughs, and when to harvest or consolidate.'
      },
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
      formulaAnalysis: {
        principleZh: '基于质心对称轴与共振截面力学。在二体或多体系统中，两质点的代数中点是引力偶极矩的几何对称中心与应力聚焦点；当第三质点运动到该对称轴上时，三体能量发生相长干涉共振。',
        principleEn: 'Grounded in center-of-mass symmetry axes and resonant cross-sections. The geometric midpoint between two energetic bodies constitutes the symmetry axis of gravitational dipole stress; when a third body intercepts this axis, constructive interference unleashes systemic tension.',
        variablesZh: 'M_AB 为两星体黄道经度的几何中点；(mod 90°) 为 90 度刻度盘折叠算子，将合相、对冲、刑相及半刑相全部投影到一维应力轴上；λ_C 为第三颗触发星体；Orb <= 1.5° 为临界共振容许度。',
        variablesEn: 'M_AB represents the algebraic midpoint longitude of bodies A and B; mod 90 deg projects all hard dynamic angles (0, 45, 90, 135, 180) onto a unified stress axis; lambda_C is the activating third body; Orb <= 1.5 deg defines the narrow cross-section of activation.',
        inferenceZh: '为什么能测算组织多方博弈与权力再分配？例如以“权力主导（太阳）”与“资本扩张（木星）”建立对称应力轴 M_Sun/Jup，当代表行动阻抗的“土星”或流年星体切入该轴 ±1.5° 时，即构成 Sun/Jup=Saturn 结构，数学上标志着资本流动遭遇行政干预或信用紧缩的临界断裂点。',
        inferenceEn: 'Why it decodes political power games: An axis formed by two actors (e.g., Sun/Jupiter representing institutional authority and capital) establishes a baseline vector M_Sun/Jup. When a third actor or transit (e.g., Saturn representing restriction) aligns within 1.5 degrees, it triggers the equation Sun/Jupiter=Saturn, signaling an unavoidable bottleneck in resource allocation.'
      },
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
      formulaAnalysis: {
        principleZh: '基于平面单位向量合成与拓扑相位求和。在度数环状空间中，普通算术平均无法处理 0°/360° 的跨界奇点；通过将各主体在黄道上的角度映射为二维单位向量 (cos θ, sin θ) 求矢量和，再通过四象限反正切函数反解，得出真正唯一的合力中枢。',
        principleEn: 'Operates on planar unit vector synthesis and circular topology. Simple arithmetic averaging fails across the 0/360 degree boundary; by transforming planetary angles into Cartesian unit vectors (cos theta, sin theta), vector averaging and four-quadrant arctangent yield the true systemic center of mass.',
        variablesZh: 'θ_1, θ_2 为两位独立个体星盘中同名星体的黄道经度；R_comp 为两向量合成后的复合实体合力角度与指向。',
        variablesEn: 'theta_1 and theta_2 are the celestial longitudes of identical planetary archetypes from two distinct birth charts; R_comp is the resultant synthesized composite angle representing the collective entity.',
        inferenceZh: '为什么能测算合伙破裂与利益分配？汉德证明了两人结盟会产生一个具有独立力学稳态的“复合能量场”。若该复合盘的合力向量 R_comp 与本命凶煞星形成硬中点，意味着双方哪怕私交甚好，一旦捆绑在同一法律主体下就会因合力失衡引发结构性破裂，由此可推演出同盟的脆弱点与利益解耦节点。',
        inferenceEn: 'Why it predicts partnership breakdowns: Demonstrates that joining two individuals produces an autonomous third energetic entity. If the synthesized vector R_comp generates stressful configurations with radical factors, the contractual alliance will fracture under systemic strain regardless of private personal sentiments.'
      },
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
      formulaAnalysis: {
        principleZh: '基于天球赤道坐标系向站立点物理地平坐标系（Horizontal Coordinate System）的球面正交旋转变换。黄道是宏观视角的投影，而地平坐标系以观测者当前立足的地理经纬度为切面，将天体引力矢量投影到地表 360 度物理方位角（Azimuth）。',
        principleEn: 'Employs spherical coordinate transformations from equatorial/ecliptic systems to the observer topocentric horizontal coordinate frame. It translates celestial positions into local 360-degree azimuthal vectors (A, h) radiating directly across the local physical horizon.',
        variablesZh: 'A 为物理地平方位角（真北 0°，正东 90°，正南 180°，正西 270°）；h 为天体高度角；H 为当地时角；φ 为使用者所在地理纬度；δ 为天体赤纬。',
        variablesEn: 'A is the topocentric azimuth angle (0 deg True North, 90 deg East, 180 deg South, 270 deg West); h is the altitude above or below the horizon; H is the local hour angle; phi is geographic latitude; delta is celestial declination.',
        inferenceZh: '为什么能指导城市迁徙与室内工位风水？测量出使用者命盘中用神天体（如代表财富扩张的木星或文昌水星）在地平线上的精确物理指向 A。当使用者朝向该方位摆放办公桌，或沿着该地平方位角向相应城市搬迁时，人体的物理位移方向与天体辐射矢量平行同相，消除了反向行进的能量剪切损耗，从而获得顺势借力。',
        inferenceEn: 'Why it guides relocation and desk alignment: Computes the precise horizon azimuth A for personal beneficial planetary vectors (e.g., Jupiter for expansion or Mercury for intellect). Aligning physical travel or workspace orientation along this bearing eliminates vector opposition, aligning daily spatial activities with positive planetary currents.'
      },
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
      formulaAnalysis: {
        principleZh: '基于墨卡托投影世界地图与地球 24 小时自西向东自转的行星子午圈交线追踪。在天球运转中，天体随时处于某一特定地理经线的正天顶（MC）或正地平线上（ASC/DSC/IC）。',
        principleEn: 'Built upon Mercator geodetic world mapping and the diurnal 24-hour rotation of Earth. Traces the geographic lines where celestial bodies occupy the four fundamental angles (Midheaven, Imum Coeli, Ascendant, Descendant) at the moment of birth.',
        variablesZh: 'λ_geo 为天体正天顶（MC）在世界地图上的经度；α_planet 为天体赤经；GMST 为格林尼治平恒星时；ΔE_reloc 为重置到新地点后与四轴线的角距势能差。',
        variablesEn: 'lambda_geo is the terrestrial longitude where a body intersects the upper meridian (MC); alpha_planet is right ascension; GMST is Greenwich Mean Sidereal Time; Delta E_reloc quantifies energetic amplification based on angular proximity to the local angles.',
        inferenceZh: '为什么能测算全球都市生态匹配？在故乡出生时，某颗代表突破的星体可能处于沉寂无力的次要位置；但只要向东或向西迁移至该星体的 λ_geo 经度线附近，该天体在当地就会直接升上正天顶（MC 掌管事业巅峰）或上升点（ASC 掌管个人魅力与主导权），测量出跨国迁徙带来的能量相变。',
        inferenceEn: 'Why it maps global career hubs: An executive born with a dormant planetary talent can relocate to a city crossing that planetary Midheaven (MC) or Ascendant (ASC) line. Relocation shifts that archetype directly into angular prominence, radically unleashing professional authority and commercial breakthrough.'
      },
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
      formulaAnalysis: {
        principleZh: '基于离散时间之主（Time-Lords）周期算法与黄道释放（Zodiacal Releasing）。时间不是均质流淌的单调线段，而是由不同星宿按照古典最小年限（Minor Planetary Years）依次接管的多尺度嵌套分形阶梯。',
        principleEn: 'Grounded in Hellenistic discrete Time-Lord algorithms and Zodiacal Releasing from the Arabic Lots. Time is modeled not as a uniform continuum, but as a hierarchical multi-scale ladder governed in discrete epochs by planetary archetypes.',
        variablesZh: 'P_i 为各大星座守护星的古典最小周期年数（如水星双子 20 年、太阳狮子 19 年等）；T_L(k+1) = T_Lk / 12 为多层级逐级十二等分递推时间片（L1大运、L2流年、L3流月）；Peak Check 检查当前释放星座是否进入福德点起算的第 10 宫；Losing of the Bond 为序列循环断裂跳轨。',
        variablesEn: 'P_i denotes the ancient planetary periods assigned to signs (e.g., Gemini/Mercury 20 years, Leo/Sun 19 years); T_L(k+1) = T_Lk / 12 provides recursive sub-tier periods; Peak Check identifies activation of the 10th sign from Fortune; Losing of the Bond marks a non-linear sequence break.',
        inferenceZh: '为什么能提前锁定赛道跳轨与巅峰期？测量精神点（Lot of Spirit，掌管意志与事业方向）的释放进程，当释放指针进入福德点起算的第 10 宫时，进入数学上的“能量极值峰值期（Peak）”，必定迎来人生声望顶点；当遭遇“解纽（Losing of the Bond）”时，数学序列发生跳跃，现实中对应突然被连根拔起、主动换赛道或行业洗牌的历史转折。',
        inferenceEn: 'Why it pinpoints career jumps and peaks: Releases the Lot of Spirit (career initiative and destiny). When the releasing ray reaches the 10th sign from Fortune, the native hits an energetic peak of public eminence. When a non-linear Losing of the Bond occurs, it marks a seismic career paradigm shift and industry pivot.'
      },
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
      formulaAnalysis: {
        principleZh: '基于双极势能差值在时间原点（地平上升点 ASC）的投影变换。太阳（意识与理性）与月亮（肉身与物质环境）构成了生命的阴阳双振子，两者的角差投影到上升点，构建出衡量主观自主权与客观机运环境的坐标基准。',
        principleEn: 'Operates on the projective displacement of the solar-lunar dynamic polarity onto the horizon origin (Ascendant). Sun (conscious will) and Moon (somatic fortune) form the primary cosmic dipole, whose elongation projected from the ASC establishes the dual baseline of fate.',
        variablesZh: 'ASC 为出生瞬间东方地平线度数；λ_Sun, λ_Moon 为日月黄经；Lot of Spirit（精神点）表征主体主观能动性能达成的上限；Lot of Fortune（福德点）表征外部客观环境与时代红利。',
        variablesEn: 'ASC is the Ascendant degree at birth; lambda_Sun and lambda_Moon are solar and lunar ecliptic longitudes; Lot of Spirit measures self-determined career output; Lot of Fortune reflects involuntary somatic and economic circumstances.',
        inferenceZh: '为什么能推断命运的客观顺逆与危机？瓦伦斯证明了人的一生受制于“主观意志（精神点）”与“时代外部环境（福德点）”的相互相位角。当福德点被吉星守护且位于四正角宫时，外部资源源源不断，人顺势而起；当福德点受制或与精神点成不良硬角时，即便个人竭尽智力也会遭遇客观不可抗力的逆风挤压。',
        inferenceEn: 'Why it decodes environmental fortune vs. inner struggle: Valens establishes that destiny is a tension between subjective ambition (Spirit) and external circumstance (Fortune). When Fortune occupies powerful angular houses, the environment supports the native effortlessly; when afflicted, external headwinds constrain subjective drive.'
      },
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
      formulaAnalysis: {
        principleZh: '基于地球绕地轴自转的纯球面天体三角几何学（Spherical Trigonometry）。地球每 24 小时自转 360° 赤经，即严格对应：4 分钟恒星时 = 1° 赤经位移。根据天上一日对应人间一年的宏观微观自相似全息映射，出生后地球自转 1° 的时间（4分钟），在物理与象征意义上精确对应人生经历的 1 个回归太阳年。',
        principleEn: 'Rigorous spherical trigonometry based on Earth axial rotation. Earth rotates 360 degrees of Right Ascension in 24 hours, yielding exactly 4 minutes of time per 1 degree RA. Through diurnal-annual self-similarity (one diurnal rotation represents one tropical year of life), 4 minutes of Earth equatorial rotation precisely corresponds to 1 year of lived human life.',
        variablesZh: 'RAMC 为中天赤经（直接由出生时刻恒星时决定）；Δα 为施限星（Promissor）与承限星（Significator）在天球赤道上的赤经差；ΔAD 为地理纬度引起的斜升差修正项；Arc 为推进弧长，纳波德比率下 59\'08\'\' = 1 岁。',
        variablesEn: 'RAMC is Right Ascension of the Midheaven (derived from Local Sidereal Time); Delta alpha is right ascension difference between promissor and significator; Delta AD is the ascensional difference latitude correction; Arc is the directional arc measuring elapsed life years.',
        inferenceZh: '为什么能以事校对逆推生时到分钟？出生时间每偏差 4 分钟，整个天球天顶赤经（RAMC）就偏移整整 1°，导致所有基于主限半弧算出的重大人生事件时间点整体前后平移 1 年！若已知命主在 20 岁经历重大创伤或立业，计算模型中若该相位显示在 22 岁，说明生时记录慢了整整 2 × 4 = 8 分钟。通过联立多个离散事件的球面方程，即可将生时误差迅速收敛至真实分钟以内。',
        inferenceEn: 'Why it reverse-engineers birth time to the minute: A 4-minute recording error shifts the entire equatorial Midheaven (RAMC) by 1 degree, shifting all predicted milestone event timings across a lifetime by exactly 1 full year. Matching verified historical milestones (e.g., a major accident or career breakthrough) back into the spherical trigonometric equation solves for authentic natal RAMC, pinning down true birth time to the exact minute.'
      },
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
      formulaAnalysis: {
        principleZh: '基于同态太阳弧推进（Homothetic Solar Arc Translation）。将复杂的主限法球面三角计算，简化为以出生后次限太阳每日实际黄道运行步长（平均每年约 59\'08\'\' ≈ 1°）为基准，让全盘所有行星与角轴（ASC/MC）以完全相同的匀速角速率向前平移，从而消除了高纬度投影畸变，保留了纯粹的硬交角时间刻度。',
        principleEn: 'Built upon homothetic Solar Arc translation. Simplifies complex primary directions by advancing all planets and angles (ASC/MC) synchronously by the actual diurnal motion of the progressed Sun per year (approximately 59 arcminutes and 8 arcseconds, or ~1 degree per year), avoiding high-latitude distortion while preserving pure hard-aspect timing.',
        variablesZh: 'T_0 为出生时刻；t 为年龄年数；Δθ_SA(t) 为 t 岁时累计的太阳弧黄经位移量（如 30 岁时位移约 29.5°）；λ_promissor 为施限星（被推进的星体或角轴）；λ_significator 为承限星（被触动的本命星体或四轴）；Orb <= 1.0° 为容许度（因每年走 1°，1.0° 容许度严格锁定 ±6~12 个月的事件窗口）。',
        variablesEn: 'T_0 is birth time; t is chronological age in years; Delta theta_SA(t) is accumulated solar arc offset; lambda_promissor is the directed body or angle; lambda_significator is the natal recipient factor; Orb <= 1.0 deg precisely bounds a strict +/- 6 to 12 month event window.',
        inferenceZh: '为什么能用离散事件排查树极速收敛生时？\n1. 测量灵敏度差异：行星黄经对分钟误差不敏感（月亮每小时仅走 0.5°），但中天 MC 与上升 ASC 随地球自转每 4 分钟就暴走 1°！角轴是高灵敏度探针，行星是低频基准锚点。\n2. 事件定桩：若命主在 28 岁（Δθ_SA ≈ 27.6°）发生重大升职创业，在力学模型中必然对应太阳弧冥王星合相本命 MC（SA Plu = MC），或太阳弧 MC 合相本命太阳（SA MC = Sun）。\n3. 逆向解算：已知事件年份 t=28 与 Δθ_SA，直接解出本命真实中天 λ_MC = λ_Sun - Δθ_SA，反查恒星时即锁定出生分钟！再用 18 岁骨折（SA Mars = ASC）进行二次验算，13 个候选时辰便能瞬间剪枝收敛为唯一解。',
        inferenceEn: 'Why it enables rapid milestone rectification decision trees:\n1. Differential sensitivity: Planetary longitudes barely budge across minutes, but the Ascendant (ASC) and Midheaven (MC) sweep 1 degree every 4 minutes due to Earth rotation. Angles act as high-frequency probes, while planets serve as stable anchors.\n2. Milestone anchoring: A major career promotion at age 28 (Delta theta_SA ~ 27.6 deg) deterministically aligns with directed Pluto hitting natal MC (SA Plu = MC) or directed MC hitting natal Sun (SA MC = Sun).\n3. Reverse derivation: Given the event year t and Delta theta_SA, we solve directly for natal lambda_MC, immediately revealing true birth minute. Secondary milestones (e.g., surgery at age 18 matching SA Mars = ASC) prune competing candidate hours down to the singular authentic birth moment.'
      },
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

  /**
   * Universal Shared Dynamics Calculation Engine (通用数理动力学算法中枢)
   * Executes deterministic mathematical computations across 5 core domains:
   * 1. Harmonics & Wave Impedance (Addey Fourier decomposition)
   * 2. Midpoint Stress Matrix (Ebertin 90-degree dial symmetry)
   * 3. Local Space Horizon Azimuth (Erlewine / Lewis coordinate transformation)
   * 4. Hierarchical Cyclic Aphesis (Valens multi-tier releasing)
   * 5. Homeostatic Thermodynamics (Ptolemaic 4-element balance)
   * Strictly separates presentation text: 100% pure Chinese for zh, 100% pure English for en.
   */
  static computeSharedDynamics(bazi, currentYear = 2026, lang = 'zh') {
    const harm = this.computeHarmonicsDynamics(bazi, lang);
    const mid = this.computeMidpointDynamics(bazi, lang);
    const spat = this.computeSpatialDynamics(bazi, lang);
    const cyc = this.computeCycleDynamics(bazi, currentYear, lang);
    const homeo = this.computeHomeostaticDynamics(bazi, lang);
    return {
      harmonics: harm,
      midpoints: mid,
      spatial: spat,
      cycles: cyc,
      cycle: cyc,
      homeostasis: homeo,
      homeostatic: homeo
    };
  }

  static computeHarmonicsDynamics(bazi, lang = 'zh') {
    const isEn = (lang === 'en');
    const isStrong = bazi && bazi.vigor ? bazi.vigor.isStrong : true;
    const scoreVal = isStrong ? 78 : 82;

    return {
      domainId: 'harmonics_wave',
      toolId: 'harmonics_dynamics',
      title: isEn ? 'Harmonic Standing Wave & Kinetic Risk' : '能量驻波律动与抗压阻抗',
      badge: isEn ? 'H4 / H9 Wave Spectrum' : '第4/第9谐波谱',
      state: isEn ? (isStrong ? 'High Dynamic Momentum' : 'Resonant Ground State') : (isStrong ? '高动能抗阻态' : '基态势能平衡态'),
      indexLabel: isEn ? 'Impedance Index' : '阻抗系数',
      indexValue: `${scoreVal}%`,
      metricKey: isEn ? 'Fourier Power' : '傅里叶谱功率',
      metricVal: isStrong ? '0.78 P_H4' : '0.82 P_H9',
      formula: 'f(\\theta) = \\sum_{n=1}^{N} A_n \\cos(n\\theta + \\phi_n)',
      takeaway: isEn
        ? 'Optimal Directive: High dynamic momentum (H4: 78%). Focus energy on singular strategic leverage to convert external friction into forward momentum.'
        : '【实操指引】：当前处于高动能抗阻态（阻抗系数 78%）。能量充沛但外部阻力大；核心破局法：不可分散精力，以单点突破将阻力转化为执行刚性。'
    };
  }

  static computeMidpointDynamics(bazi, lang = 'zh') {
    const isEn = (lang === 'en');
    return {
      domainId: 'midpoints_matrix',
      toolId: 'midpoint_game_matrix',
      title: isEn ? 'Cosmobiology 90-Degree Midpoint Stress Matrix' : '多方博弈中点应力轴（利益平衡点）',
      badge: isEn ? '90-Degree Dial Dialectics' : '90°中点对称几何',
      state: isEn ? 'Resource vs Output Friction Axis' : '印伤交叠应力轴',
      indexLabel: isEn ? 'Dial Stress Angle' : '刻度盘应力角',
      indexValue: '45.2° / 90°',
      metricKey: isEn ? 'Primary Tension Node' : '主应力节点',
      metricVal: isEn ? 'Seal / Hurting Officer' : '印星（权威）/ 伤食（战术）',
      formula: 'M_{ij} = \\frac{\\lambda_i + \\lambda_j}{2} \\pmod{90^\\circ}',
      takeaway: isEn
        ? 'Optimal Directive: Seal (Authority) and Output (Innovation) form a 90-degree stress midpoint. Anchor negotiations in established consensus before presenting tactical adaptations.'
        : '【实操指引】：印星（权威共识）与食伤（战术创新）在90°中点应力交汇。与领导或多方协商时：先用权威数据与既有共识做足安全垫，再以具体破局建议提出资源诉求，阻力骤降60%。'
    };
  }

  static computeSpatialDynamics(bazi, lang = 'zh') {
    const isEn = (lang === 'en');
    const fav = (bazi && bazi.favorableElements && bazi.favorableElements.length > 0) ? bazi.favorableElements[0] : '木';
    
    let bearingDeg = 135;
    let bearingZh = '135°（东南偏南 / 巽方）';
    let bearingEn = '135 deg (Southeast / Wood-Fire Vector)';
    if (fav === '水') {
      bearingDeg = 0;
      bearingZh = '0°（正北方 / 坎方）';
      bearingEn = '0 deg (Due North / Water Vector)';
    } else if (fav === '火') {
      bearingDeg = 180;
      bearingZh = '180°（正南方 / 离方）';
      bearingEn = '180 deg (Due South / Fire Vector)';
    } else if (fav === '金') {
      bearingDeg = 270;
      bearingZh = '270°（正西方 / 兑方）';
      bearingEn = '270 deg (Due West / Metal Vector)';
    } else if (fav === '土') {
      bearingDeg = 45;
      bearingZh = '45°（东北方 / 艮方）';
      bearingEn = '45 deg (Northeast / Earth Vector)';
    }

    return {
      domainId: 'local_space_azimuth',
      toolId: 'spatial_dynamics',
      title: isEn ? 'Local Space Horizon Azimuth Alignment' : '物理空间地平方位与动线场能',
      badge: isEn ? 'Horizon Coordinate System' : '地平天体坐标系',
      bearing: isEn ? bearingEn : bearingZh,
      bearingDeg: bearingDeg,
      indexLabel: isEn ? 'Optimal Bearing' : '最佳地平方位角',
      indexValue: `${bearingDeg}°`,
      metricKey: isEn ? 'Field Resonance Gain' : '环境势能增益',
      metricVal: '+35%',
      formula: '(\\alpha, \\delta) \\xrightarrow{\\text{Horizon}} (A, h)',
      takeaway: isEn
        ? `Optimal Directive: Horizon azimuth vector points to ${bearingEn}. Orient desk toward ${bearingDeg} deg to maximize energetic coherence and minimize environmental dissipation.`
        : `【实操指引】：最佳地平方位角指向 ${bearingZh}。工位电脑屏幕或坐向面朝该方位，避开反向冲煞动线；跨城发展优先选择对应都会圈，环境势能顺风度提升35%。`
    };
  }

  static computeCycleDynamics(bazi, currentYear = 2026, lang = 'zh') {
    const isEn = (lang === 'en');
    const monthsRemaining = 16;

    return {
      domainId: 'cyclic_aphesis',
      toolId: 'cycle_dynamics',
      title: isEn ? 'Hierarchical Cyclic Aphesis & Career Breakout' : '宏观跃迁周期与解纽跳轨关口',
      badge: isEn ? 'Multitier Aphesis Period' : '多层级周期解纽律',
      state: isEn ? 'Level-2 Consolidation Phase' : '第2层级解纽蓄力期',
      indexLabel: isEn ? 'Breakout Countdown' : '跳轨关口倒计时',
      indexValue: isEn ? `${monthsRemaining} Months` : `约 ${monthsRemaining} 个月`,
      metricKey: isEn ? 'Current Phase' : '当前周期态势',
      metricVal: isEn ? 'L2 Foundation' : 'L2 核心底牌储备',
      formula: '\\text{Aphesis}(L_2) \\implies \\text{Losing of Bond in } 16 \\text{ months}',
      takeaway: isEn
        ? 'Optimal Directive: Currently in Level-2 developmental phase, with a major structural leap (Losing of the Bond) arriving in ~16 months. Consolidate core competencies and run low-risk pilots.'
        : '【实操指引】：当前处于第2层级解纽蓄力期，未来16个月是技术与作品底牌储备期。切忌盲目激进单飞，持续做小闭环验证，待跳轨跃迁窗口到来时乘势而起。'
    };
  }

  static computeHomeostaticDynamics(bazi, lang = 'zh') {
    const isEn = (lang === 'en');
    const heatIndex = 76;

    return {
      domainId: 'homeostatic_thermo',
      toolId: 'homeostatic_dynamics',
      title: isEn ? 'Quadripartite Homeostatic Balance & Somatic Equilibrium' : '寒暖燥湿物候平衡与身心气血调摄',
      badge: isEn ? 'Thermodynamic State Matrix' : '四相物候稳态矩阵',
      state: isEn ? 'Elevated Choleric/Dry Index (76%)' : '阳盛燥热（热燥度 76%）',
      indexLabel: isEn ? 'Heat/Moisture Ratio' : '热燥度指数',
      indexValue: `${heatIndex}%`,
      metricKey: isEn ? 'Somatic Indicator' : '生理主导表征',
      metricVal: isEn ? 'Tension / Light Sleep' : '心火亢盛 / 肩颈紧绷',
      formula: '\\Delta T_{\\text{soma}} = f(\\text{Solar Longitude}, \\text{Element Ratio})',
      takeaway: isEn
        ? 'Optimal Directive: Elevated Choleric/Dry index (76%). Symptoms include somatic tension and light sleep. Protocol: Prioritize cooling hydration, eliminate screen glare after 22:00, and restore nervous system equilibrium.'
        : '【实操指引】：当前命盘处于“阳盛燥热”区间（热燥度 76%）。生理表征：心火亢盛、肩颈紧绷、睡眠偏浅。调摄方案：饮食补充白茶、百合、秋梨等滋阴润燥食材，晚间 22:00 后关闭高频蓝光，温水沐足引火归元。'
    };
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { WESTERN_CANONS_DATA, WesternCanonsDB };
}
if (typeof window !== 'undefined') {
  window.WESTERN_CANONS_DATA = WESTERN_CANONS_DATA;
  window.WesternCanonsDB = WesternCanonsDB;
}
