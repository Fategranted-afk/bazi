/**
 * 十神全典与职场心智定义库 (Ten Gods Canonical Glossary & Workplace Mindset)
 * Sources: 《三命通会》, 《子平真诠》, 《渊海子平》, 《神峰通考》
 * Strictly bilingual with 100% zero residual Chinese in English mode.
 */

const TEN_GODS_GLOSSARY = {
  'zheng_guan': {
    key: 'zheng_guan',
    nameZh: '正官',
    nameEn: 'Direct Officer (Zheng Guan)',
    shortEn: 'Direct Officer',
    elementRelationZh: '克我（异性克日元，阴阳相济）',
    elementRelationEn: 'Controls Day Master (Opposite Polarity - Harmonious Control)',
    chineseSealZh: '官贵守正',
    chineseSealEn: 'Order & Mandate',
    ancientCanonZh: '《渊海子平·论正官》：“官者，管也。如人臣之奉君上，受其管辖制勒。正官乃天地纯粹之气，为五行纯良之德。身旺能任，有印生身、有财生官，不见伤官破损，则居显贵之位。”\n《三命通会》：“正官者，阴阳配合，和顺成章，有情于我，尊荣之象。”',
    ancientCanonEn: 'Yuan Hai Zi Ping: "Officer denotes governance. As ministers serve the sovereign under rightful authority, Direct Officer embodies the pure energy of Heaven and Earth. When the Day Master is vigorous with Resource protecting and Wealth nurturing, untarnished by Hurting Officer, supreme institutional distinction follows."\nSan Ming Tong Hui: "Direct Officer is the harmonious balance of Yin and Yang, governing dignity and rightful protocol."',
    plainTextZh: '正官是八字中最具正统公信力的“秩序与契约守护之星”。代表体制法度、规则纪律、高阶信用、责任担当与社会声望。为人行事光明磊落，敬畏规则，顾全大局，善于在既定制度框架内步步为营达成目标。',
    plainTextEn: 'Direct Officer is the ultimate emblem of institutional legitimacy, contractual fidelity, and self-governance. It represents regulatory structures, public credibility, moral integrity, and administrative discipline. Natives operate with honor, respect protocol, and advance steadily within established hierarchies.',
    workplaceArchetypeZh: '制度秩序守门人 · 首席合规与治理官',
    workplaceArchetypeEn: 'Institutional Architect · Chief Governance & Compliance Officer',
    strengthsZh: '组织原则性极强，公信力卓越；为人重诺守信，极受领导层与合规体系信任；抗风险纪律严密，从不轻浮行事。',
    strengthsEn: 'Impeccable structural discipline and organizational credibility; deeply trusted by executive leadership; supreme risk mitigation and institutional integrity.',
    trapsZh: '容易循规蹈矩、保守刻板，应变弹性不足；最怕“伤官见官”公然挑战体制红线，或“官杀混杂”导致立场摇摆与内耗。',
    trapsEn: 'Prone to bureaucratic rigidity and risk aversion; vulnerable to "Hurting Officer Clashing with Officer" (open insubordination) or mixed allegiances causing administrative paralysis.',
    actionRulesZh: '① 凡事讲求程序留痕，重要指令必有邮件审批对齐；② 向上沟通以制度兜底与确定性为先，杜绝情绪化直怼；③ 在规则框架内进行微创新，借体制平台放大个人专业影响力。',
    actionRulesEn: '1. Maintain rigorous written audit trails and email sign-offs for critical mandates; 2. Frame upward proposals around certainty and institutional compliance rather than disruptive rebellion; 3. Innovate incrementally within governance guardrails to compound organizational trust.'
  },
  'qi_sha': {
    key: 'qi_sha',
    nameZh: '七杀',
    nameEn: 'Seven Killings (Qi Sha / Indirect Officer)',
    shortEn: 'Seven Killings',
    elementRelationZh: '克我（同性克日元，刚猛无情）',
    elementRelationEn: 'Controls Day Master (Same Polarity - Aggressive Breakthrough)',
    chineseSealZh: '铁血破局',
    chineseSealEn: 'Breakthrough Edge',
    ancientCanonZh: '《渊海子平·论偏官》：“七杀者，偏官也。乃暴烈之客，克我至暴无情之星。身旺逢食神制伏、或印绶化生，则变暴为仁，威镇边陲，出将入相。”\n《子平真诠》：“七杀者，克身之大恶物也。非制不能用。制伏得宜，极贵之格。”',
    ancientCanonEn: 'Yuan Hai Zi Ping: "Seven Killings is the ferocious conqueror that strikes without mercy. Yet if the Day Master is strong and Killings is tamed by Eating God or transmuted by Resource, ferocity converts into supreme benevolence and martial sovereignty."\nZi Ping Zhen Quan: "Seven Killings is a ferocious force; untamed it destroys, properly disciplined it creates peerless authority."',
    plainTextZh: '七杀是八字中能量最为刚猛凌厉的“危局拆弹与开拓先锋之星”。代表危机掌控、铁腕决断、逆境反扑、雷厉风行与敢冒奇险的英雄气概。遇强则强，具有非同寻常的斗志与逆商。',
    plainTextEn: 'Seven Killings is the sharpest razor of strategic breakthrough and crisis mastery. It governs decisive iron-fisted resolution, aggressive initiative, and resilience under catastrophic pressure. Channelled properly, it converts friction into supreme command.',
    workplaceArchetypeZh: '危局破冰司令 · 战略攻坚操盘手',
    workplaceArchetypeEn: 'Crisis Turnaround Commander · Strategic Breakthrough Leader',
    strengthsZh: '无与伦比的抗压魄力与执行攻坚力，越是艰难险阻越能爆发出惊人战斗力；决策快准狠，敢于担责翻盘。',
    strengthsEn: 'Peerless composure under high-stakes friction; supreme turnaround drive; fearless ownership of mission-critical outcomes.',
    trapsZh: '脾气刚烈急躁，容易四面树敌或给团队带来窒息压迫感；身弱杀重时易受小人倾轧排挤、诱发慢性过劳与严重内耗。',
    trapsEn: 'Prone to ruthless impatience and needless political friction; ungrounded Killings risks chronic burnout, hostile betrayal, and aggressive overreach.',
    actionRulesZh: '① 驾驭杀气：以食神（硬核专业能力）降伏七杀，以印星（制度与长辈背书）化杀生身；② 向上沟通：直接呈报确定性解决方案与战果，不讲借口；③ 克制暴躁，关键时刻收敛锋芒。',
    actionRulesEn: '1. Harness the edge through specialized expertise (Eating God) or institutional backing (Resource); 2. Deliver binary certainty and definitive outcomes to superiors; 3. Temper aggressive instincts to avoid generating toxic workplace resistance.'
  },
  'zheng_cai': {
    key: 'zheng_cai',
    nameZh: '正财',
    nameEn: 'Direct Wealth (Zheng Cai)',
    shortEn: 'Direct Wealth',
    elementRelationZh: '我克（异性被克，阴阳相吸有情）',
    elementRelationEn: 'Controlled by Day Master (Opposite Polarity - Meticulous Acquisition)',
    chineseSealZh: '务实厚积',
    chineseSealEn: 'Pragmatic Base',
    ancientCanonZh: '《渊海子平·论正财》：“财为养命之源。正财者，乃我克之阴阳相得者也。勤俭持家，积少成多，为人端厚笃实。”\n《子平真诠》：“财喜身旺，能任方能享；身弱遇财，如负重登高。”',
    ancientCanonEn: 'Yuan Hai Zi Ping: "Wealth is the very nourishment of life. Direct Wealth is acquired through diligence, patience, and contractual honesty; it compounds steadily into enduring patrimony."\nZi Ping Zhen Quan: "Wealth demands a vigorous Day Master to carry; without strength, immense wealth becomes an crushing burden."',
    plainTextZh: '正财是八字中的“实业底盘与资产管家之星”。代表一砖一瓦积累的稳定薪酬、实业资产、精密的ROI投入产出核算与严格的预算合规。讲求确定性、落地变现与契约信守。',
    plainTextEn: 'Direct Wealth governs tangible earned income, rigorous budgetary stewardship, commercial reliability, and compound fiscal discipline. It prioritizes concrete return on investment, operational realism, and sustainable solvency.',
    workplaceArchetypeZh: 'CFO财务中枢 · 务实精算与降本增效操盘官',
    workplaceArchetypeEn: 'Chief Financial Officer · Pragmatic Operations & Fiscal Controller',
    strengthsZh: '金钱与数据敏感度极高，严控成本与风险边界，善于把宏大叙事转化为颗粒度极细的可执行财务模型。',
    strengthsEn: 'Exceptional fiscal scrutiny, meticulous risk mitigation, and the rare ability to translate grand visions into viable unit economics.',
    trapsZh: '视野容易局限于眼前细微账目，缺乏大开大合的冒险气魄；最忌“比劫争财”，防同僚抢占核心绩效成果。',
    trapsEn: 'Can succumb to penny-wise conservatism; highly vulnerable to Peer Wealth Robbery (colleagues siphoning credits and bonus allocations).',
    actionRulesZh: '① 绩效成果与数据指标严格系统化留痕，防止劳动成果被同僚轻易掠夺；② 商务谈判讲求利益对等平衡；③ 坚守基本盘，杜绝盲目加杠杆投机。',
    actionRulesEn: '1. Rigorously document all quantifiable contributions and KPIs to prevent peer usurpation; 2. Insist on balanced reciprocity in commercial negotiations; 3. Avoid speculative overleverage.'
  },
  'pian_cai': {
    key: 'pian_cai',
    nameZh: '偏财',
    nameEn: 'Indirect Wealth (Pian Cai)',
    shortEn: 'Indirect Wealth',
    elementRelationZh: '我克（同性被克，大开大合流转）',
    elementRelationEn: 'Controlled by Day Master (Same Polarity - Expansive Circulation)',
    chineseSealZh: '通达博弈',
    chineseSealEn: 'Venture Scale',
    ancientCanonZh: '《渊海子平·论偏财》：“偏财者，乃天地之公共之财也。神气英迈，俊爽不羁，慷慨轻财，善于经商斡旋，聚散如风。”\n《三命通会》：“偏财为人好说大话，喜交游，好投机，善借东风。”',
    ancientCanonEn: 'Yuan Hai Zi Ping: "Indirect Wealth belongs to the public domain of the world. Spirited, generous, and magnanimous, it thrives through fluid commerce, strategic venture, and broad networks."\nSan Ming Tong Hui: "Indirect Wealth masters networking, visionary enterprise, and riding external macro tailwinds."',
    plainTextZh: '偏财是八字中的“风投操盘与商业借力之星”。代表流通之财、商业运作、灵活谈判、副业投资、股权分红与跨界资源整合。天生具备商业嗅觉与广阔人脉。',
    plainTextEn: 'Indirect Wealth embodies entrepreneurial venture, market arbitrage, equity windfalls, and fluid networking. Endowed with sharp commercial instinct, it excels at mobilizing capital, identifying market asymmetries, and synthesizing disparate assets.',
    workplaceArchetypeZh: '商业拓展领军人 · 风险投资与生态连横操盘手',
    workplaceArchetypeEn: 'Head of Business Development · Venture Capitalist & Alliance Architect',
    strengthsZh: '卓越的商业嗅觉与社交魅力，极善于“借力打力、利益均沾”；不拘小节，能在复杂商战中整合各方力量。',
    strengthsEn: 'Incomparable dealmaking acumen, charismatic diplomacy, and the instinctive knack for constructing win-win commercial alliances.',
    trapsZh: '花销大手大脚，容易盲目投机；身弱遇到大财运时谨防贪大求全导致现金流断裂与债务深渊。',
    trapsEn: 'Susceptible to frivolous expenditure and reckless speculation; without a grounded base, overleverage triggers liquidity catastrophes.',
    actionRulesZh: '① 善用信息差与合作联盟拓展第二曲线；② 严格设置止损熔断线，绝不拿主业基本盘做孤注一掷；③ 亲兄弟明算账，协议先行。',
    actionRulesEn: '1. Exploit information asymmetry and strategic syndicates to build secondary income streams; 2. Enforce strict stop-loss limits on speculative bets; 3. Keep business partnerships formalized in clear contracts.'
  },
  'zheng_yin': {
    key: 'zheng_yin',
    nameZh: '正印',
    nameEn: 'Direct Resource (Zheng Yin)',
    shortEn: 'Direct Resource',
    elementRelationZh: '生日元（异性相生，慈母抚育）',
    elementRelationEn: 'Nurtures Day Master (Opposite Polarity - Maternal Sanctuary)',
    chineseSealZh: '慈幼庇荫',
    chineseSealEn: 'Scholarly Shield',
    ancientCanonZh: '《渊海子平·论印绶》：“印绶者，乃我气之源，如母生子。印生身旺，主文章振发，声誉昭昭，享天伦之庇护。”\n《子平真诠》：“印者，庇我之神，如母爱子。印绶清纯，必主厚德载物，功名显达。”',
    ancientCanonEn: 'Yuan Hai Zi Ping: "Resource is the primordial fountainhead of life, like a mother nurturing her offspring. It governs scholarly distinction, impeccable reputation, and benevolent sanctuary."\nZi Ping Zhen Quan: "Resource shields the self with maternal grace, endowing the native with moral stature and enduring honor."',
    plainTextZh: '正印是八字中的“学者智库与精神灯塔之星”。代表仁慈善良、渊博学识、专业资质、组织背书、名誉体面与长辈贵人庇佑。重视职业尊严与长期声誉。',
    plainTextEn: 'Direct Resource functions as the supreme academic sanctuary, ethical beacon, and organizational aegis. It governs credentials, institutional backing, intellectual depth, benevolent mentorship, and untouchable professional reputation.',
    workplaceArchetypeZh: '首席智库顾问 · 专业资质与学术研究中枢',
    workplaceArchetypeEn: 'Chief Knowledge Officer · Academic Fellow & Institutional Mentor',
    strengthsZh: '学术理论功底深厚，极受贵人领导青睐；大局观与包容力极强，能以专业资质筑造坚固护城河。',
    strengthsEn: 'Commanding intellectual authority, serene interpersonal grace, and natural resonance with institutional mentors and senior patrons.',
    trapsZh: '容易过于佛系安逸、脱离一线业务变现；最忌“贪财坏印”，绝不可为眼前利益丧失职业操守与合规底线。',
    trapsEn: 'Risks ivory-tower complacency and delayed execution; catastrophic danger from "Greed for Wealth Destroying Resource" (compromising ethics for short-term profit).',
    actionRulesZh: '① 持续考取顶级行业资质与职称认证，夯实不可替代的背书壁垒；② 向上汇报引经据典强化专业可信度；③ 主动将学术沉淀结合业务变现。',
    actionRulesEn: '1. Systematically secure industry-accredited credentials to build institutional moats; 2. Back managerial reports with rigorous methodology and empirical data; 3. Anchor theoretical insights directly to business ROI.'
  },
  'pian_yin': {
    key: 'pian_yin',
    nameZh: '偏印 (枭神)',
    nameEn: 'Indirect Resource (Pian Yin / Owl)',
    shortEn: 'Indirect Resource',
    elementRelationZh: '生日元（同性相生，冷峻偏门）',
    elementRelationEn: 'Nurtures Day Master (Same Polarity - Esoteric Penetration)',
    chineseSealZh: '玄通极客',
    chineseSealEn: 'Esoteric Intellect',
    ancientCanonZh: '《渊海子平·论偏印》：“偏印者，又名枭神。领悟超群，才艺绝伦，独步千古。若见食神则名夺食，无食神则成妙用。”\n《神峰通考》：“偏印好学偏门，机智灵变，擅破玄微。”',
    ancientCanonEn: 'Yuan Hai Zi Ping: "Indirect Resource, also named the Owl God, possesses peerless intuition and transcendent intellect. When free from clash with Eating God, it solves the most profound paradoxes."\nShen Feng Tong Kao: "Indirect Resource seeks esoteric depths, nimble and penetrative."',
    plainTextZh: '偏印是八字中的“硬核极客与冷门洞察之星”。代表直觉灵性、底层逻辑洞察、对非对称信息的高阶解码能力与特立独行的独立思维。善破未知难题。',
    plainTextEn: 'Indirect Resource is the archetype of the sovereign hacker, esoteric researcher, and asymmetric strategist. It governs acute intuitive penetration, deep structural decoding, and non-conformist intellectual architecture that deciphers hidden systemic flaws.',
    workplaceArchetypeZh: '深核架构师 · 特种安全渗透与前沿算法科学家',
    workplaceArchetypeEn: 'Deep-Tech Architect · Cybersecurity & Frontier Algorithm Scientist',
    strengthsZh: '对复杂底层技术与冷门逻辑具有降维打击般的领悟力；专注度极高，善于在无人区攻克极端难题。',
    strengthsEn: 'Incomparable cognitive depth and diagnostic brilliance; thrives in autonomous solitude cracking problems conventional thinkers cannot comprehend.',
    trapsZh: '孤芳自赏、过度防备猜疑，容易陷入内耗与拖延；最怕“枭神夺食”，防备因性格孤僻丢掉生计现金流。',
    trapsEn: 'Chronic aloofness, paranoid defensiveness, and perfectionist procrastination; beware of "Owl Stealing Food" (sudden operational cashflow disruption).',
    actionRulesZh: '① 在高门槛细分赛道建立技术垄断壁垒；② 建立极简标准化交付物，防止陷入无休止的自我否定；③ 找寻懂商业的合伙人代为对接世俗商务。',
    actionRulesEn: '1. Establish technical dominance in hyper-specialized, high-barrier niches; 2. Enforce minimal viable deliverables to break perfectionist loops; 3. Partner with commercially savvy operators to handle client interfaces.'
  },
  'shi_shen': {
    key: 'shi_shen',
    nameZh: '食神',
    nameEn: 'Eating God (Shi Shen)',
    shortEn: 'Eating God',
    elementRelationZh: '日元所生（同性泄秀，温和吐秀）',
    elementRelationEn: 'Generated by Day Master (Same Polarity - Serene Expression)',
    chineseSealZh: '从容寿禄',
    chineseSealEn: 'Serene Abundance',
    ancientCanonZh: '《渊海子平·论食神》：“食神者，我生之阴阳相和者也。财之源泉，寿之征兆。为人雍容博爱，才华内敛，食禄优游。”\n《子平真诠》：“食神者，财之母也，生我之所生，福寿长青之星。”',
    ancientCanonEn: 'Yuan Hai Zi Ping: "Eating God is the harmonious outpouring of vital essence—the pristine wellspring of Wealth and the longevity anchor. It bestows serene benevolence and enduring abundance."\nZi Ping Zhen Quan: "Eating God is the mother of Wealth, blessing the native with perennial fortune."',
    plainTextZh: '食神是八字中的“长线复利与生活美学之星”。代表从容优雅的才情、温和儒雅的情商、打磨极致产品的匠心与源源不断的自然财源。以和为贵，细水长流。',
    plainTextEn: 'Eating God represents graceful creativity, benevolent emotional intelligence, sensory refinement, and organic wealth compounding. It crafts timeless products and builds compounding brand equity without aggressive friction.',
    workplaceArchetypeZh: '金牌产品体验师 · 美学内容与长线复利缔造官',
    workplaceArchetypeEn: 'Chief Product Officer · Aesthetic Experience & Brand Equity Alchemist',
    strengthsZh: '超群的同理心与人缘福气，擅长把复杂功能打磨为温润优雅的用户体验；产品与内容复利效应显著。',
    strengthsEn: 'Boundless empathy, supreme user intuition, and the patience to compound craftsmanship into beloved long-term assets.',
    trapsZh: '缺乏狼性竞争紧迫感，逆境中容易随遇而安陷入拖延；遇枭神运势防突发断粮破财。',
    trapsEn: 'Aversion to high-conflict competition and tendency toward passive procrastination; requires vigilance against Indirect Resource cycles (sudden revenue evaporation).',
    actionRulesZh: '① 坚守长期主义，专注于打磨长生命周期的拳头产品与内容IP；② 团队中充当黏合剂；③ 设定刚性Deadline倒逼执行。',
    actionRulesEn: '1. Anchor to compounding long-lifecycle flagship products and intellectual property; 2. Act as the cultural harmonizer across teams; 3. Impose rigid external deadlines to eliminate creative drift.'
  },
  'shang_guan': {
    key: 'shang_guan',
    nameZh: '伤官',
    nameEn: 'Hurting Officer (Shang Guan)',
    shortEn: 'Hurting Officer',
    elementRelationZh: '日元所生（异性泄秀，锋芒毕露）',
    elementRelationEn: 'Generated by Day Master (Opposite Polarity - Radical Brilliance)',
    chineseSealZh: '傲骨英华',
    chineseSealEn: 'Radical Genius',
    ancientCanonZh: '《渊海子平·论伤官》：“伤官者，其神傲岸，其才纵横。虽非吉神，实为大秀。身强伤官生财或配印，文名盖世，变革乾坤。”\n《子平真诠》：“伤官虽非吉神，实为秀气。日主身强，伤官发秀，一清到底，文贵超群。”',
    ancientCanonEn: 'Yuan Hai Zi Ping: "Hurting Officer is proud in spirit and boundless in brilliance. When the Day Master is vigorous, generating Wealth or disciplined by Resource, it commands epochal fame and shatters obsolete structures."\nZi Ping Zhen Quan: "Though deemed volatile, it is pure radiating genius when harnessed properly."',
    plainTextZh: '伤官是八字中的“颠覆性创新与极致才华之星”。代表打破陈规的敏锐嗅觉、雄辩口才、高维审美与直言不讳的革新魄力。思维跳跃，天生具有打破僵局的创造力。',
    plainTextEn: 'Hurting Officer is the spark of radical innovation, provocative thought leadership, and uncompromising artistic brilliance. Unafraid to challenge stale dogmas, it possesses magnetic eloquence, sharp wit, and revolutionary vision.',
    workplaceArchetypeZh: '颠覆式创新先锋 · 超级演说家与顶流操盘官',
    workplaceArchetypeEn: 'Disruptive Innovation Pioneer · Viral Evangelist & Creative Director',
    strengthsZh: '超前的洞察力与爆款创造力，极强的语言感染力与公众号召力；敢想敢干，能从0到1破局突围。',
    strengthsEn: 'Visionary creative genius, sensational rhetoric, and the audacity to execute transformative zero-to-one breakthroughs.',
    trapsZh: '恃才傲物、口直心快，最易犯“伤官见官”与领导层公开撕破脸，招致体制封杀、法律纠纷与公关灾难。',
    trapsEn: 'Dangerous intellectual arrogance and sharp tongue; catastrophic risk of "Hurting Officer Clashing with Officer" (public insubordination leading to career banishment and lawsuits).',
    actionRulesZh: '① 绝不在公开场合驳斥上司颜面，意见私下提，让功于团队；② 必以印制（用数据流程兜底）或以财化（用商业变现说话）；③ 说话前停顿3秒，严控口舌祸根。',
    actionRulesEn: '1. Never contradict executive superiors in public forums—critique in private, praise in public, and credit leadership for visionary alignment; 2. Bind brilliance to cold empirical data (Resource) or commercial returns (Wealth); 3. Master a three-second pause before speaking to eliminate needless verbal landmines.'
  },
  'bi_jian': {
    key: 'bi_jian',
    nameZh: '比肩',
    nameEn: 'Friend (Bi Jian / Companion)',
    shortEn: 'Friend',
    elementRelationZh: '与我同类（同性比和，并肩携手）',
    elementRelationEn: 'Identical to Day Master (Same Polarity - Equal Solid Anchor)',
    chineseSealZh: '刚毅自立',
    chineseSealEn: 'Steadfast Grit',
    ancientCanonZh: '《渊海子平·论比肩》：“比肩者，兄弟同气之神。坚韧不屈，帮身抗煞，白手自立，不借他人之庇荫。”\n《三命通会》：“比肩独立自持，为人重信守诺，刚直不阿，自食其力。”',
    ancientCanonEn: 'Yuan Hai Zi Ping: "Friend embodies the shared breath of comrades. Unyielding and solid, it aids the self against hostile forces, standing self-made without reliance on ancestral favors."\nSan Ming Tong Hui: "Friend governs self-reliance, upright honor, and unvarnished integrity."',
    plainTextZh: '比肩是八字中的“硬核基石与自力更生之星”。代表坚毅不拔的抗击打韧性、自尊自重、踏实本分、平等互助、靠双手开天辟地的实干精神。为人坦荡，不屑逢迎。',
    plainTextEn: 'Friend represents bedrock fortitude, authentic peer parity, unshakeable stamina, and self-made pride. Rejecting sycophancy and deceit, it accomplishes enduring outcomes through sheer disciplined toil and reliable camaraderie.',
    workplaceArchetypeZh: '中流砥柱工程先锋 · 独立自强实干家',
    workplaceArchetypeEn: 'Bedrock Operations Lead · Self-Made Engineering Master',
    strengthsZh: '极高的抗挫抗打毅力，团队中最可靠的技术或业务承重骨干；对战友诚恳守诺，坚守底线。',
    strengthsEn: 'Incredible perseverance under gruelling conditions; the ultimate dependable backbone of team execution; fiercely loyal to trustworthy peers.',
    trapsZh: '性格固执执拗、不喜妥协，缺乏向上管理的柔韧性；合伙时容易因过度重感情而吃利益分配暗亏。',
    trapsEn: 'Can be uncompromisingly stubborn, lacking diplomatic finesse in managing upward; risks financial disadvantages by allowing emotional loyalty to compromise contracts.',
    actionRulesZh: '① 杜绝只埋头拉车不抬头看路，主动向领导汇报阶段里程碑；② 职场协作先立契约后谈交情；③ 破除凡事单打独斗的思维，学会在组织内借势借力。',
    actionRulesEn: '1. Proactively communicate incremental milestones to superiors rather than toiling in silent obscurity; 2. Enforce formal contractual terms before emotional goodwill; 3. Overcome lone-wolf tendencies by leveraging institutional resources.'
  },
  'jie_cai': {
    key: 'jie_cai',
    nameZh: '劫财',
    nameEn: 'Rob Wealth (Jie Cai)',
    shortEn: 'Rob Wealth',
    elementRelationZh: '与我同类（异性比和，狼性争夺）',
    elementRelationEn: 'Identical to Day Master (Opposite Polarity - Fierce Competition)',
    chineseSealZh: '勇悍竞逐',
    chineseSealEn: 'Competitive Vigor',
    ancientCanonZh: '《渊海子平·论劫财》：“劫财者，争竞之神。勇悍果决，招聚同袍，敢打硬仗。若身旺无制，则分夺财禄，破耗百端。”\n《子平真诠》：“月劫当令，最喜官杀雕琢成器，或食伤吐秀生财。”',
    ancientCanonEn: 'Yuan Hai Zi Ping: "Rob Wealth is the fierce spirit of rivalry. Bold and decisive, it mobilizes legions into frontline combat. Yet untamed in vigor, it plunders treasures and dissipates resources."\nZi Ping Zhen Quan: "Rob Wealth flourishes when sculpted by Officer or channelled into commercial innovation via Output."',
    plainTextZh: '劫财是八字中的“狼性先锋与战团号召之星”。代表极强的危机意识、同理感染力、敢打硬仗的竞争本能与调动团队开疆拓土的号召力。热情豪爽，敢抢敢拼。',
    plainTextEn: 'Rob Wealth embodies the raw hunger of market conquerors, fierce competitive tenacity, and electrifying charismatic mobilization. Born to contest crowded arenas, it rallies frontline legions to seize market share against formidable rivals.',
    workplaceArchetypeZh: '地推狼军统帅 · 大客户攻坚与渠道拓展战神',
    workplaceArchetypeEn: 'Frontline Legion Commander · High-Velocity Enterprise Sales Titan',
    strengthsZh: '超凡的号召力与感染力，极具狼性争抢意识；在存量残局与恶性竞争中能顶着炮火撕开突破口。',
    strengthsEn: 'Electrifying team leadership, indomitable competitive hunger, and the ruthless tenacity to capture market share under intense fire.',
    trapsZh: '“比劫争财”风险极高，容易因盲目讲义气遭同僚背刺抢功；容易冲动决策导致资源耗尽破产。',
    trapsEn: 'Extreme susceptibility to Peer Wealth Robbery—getting blindsided or having hard-won credits stolen by treacherous peers; reckless over-allocation of resources.',
    actionRulesZh: '① 成果防截胡：所有核心客户、关键方案和业务进度必须在公司公共系统内确权留痕；② 以利益规则代替哥们义气；③ 必须用严密规章（官杀）约束团队欲望。',
    actionRulesEn: '1. Defend against credit-poaching: rigorously lock in client ownership, deal data, and deliverable timestamps within shared institutional software; 2. Anchor relationships to binding ROI frameworks instead of sentimental loyalty; 3. Impose strict governance to prevent internal fratricidal friction.'
  }
};

class TenGodsDB {
  static get(key) {
    if (!key) return null;
    if (TEN_GODS_GLOSSARY[key]) return TEN_GODS_GLOSSARY[key];
    const low = key.toLowerCase();
    return Object.values(TEN_GODS_GLOSSARY).find(g =>
      g.nameZh.includes(key) ||
      key.includes(g.nameZh) ||
      g.nameEn.toLowerCase().includes(low) ||
      g.shortEn.toLowerCase().includes(low)
    ) || null;
  }

  static getAll() {
    return Object.values(TEN_GODS_GLOSSARY);
  }

  static search(keyword) {
    if (!keyword) return [];
    keyword = keyword.trim().toLowerCase();
    const results = [];
    for (const g of Object.values(TEN_GODS_GLOSSARY)) {
      if (
        g.nameZh.toLowerCase().includes(keyword) ||
        g.nameEn.toLowerCase().includes(keyword) ||
        g.workplaceArchetypeZh.toLowerCase().includes(keyword) ||
        g.workplaceArchetypeEn.toLowerCase().includes(keyword) ||
        g.plainTextZh.toLowerCase().includes(keyword) ||
        g.plainTextEn.toLowerCase().includes(keyword) ||
        g.ancientCanonZh.toLowerCase().includes(keyword) ||
        g.strengthsZh.toLowerCase().includes(keyword) ||
        g.trapsZh.toLowerCase().includes(keyword)
      ) {
        results.push({
          source: '《八经十神真诠》· 常见定义',
          title: `${g.nameZh}（${g.workplaceArchetypeZh}）`,
          content: g.ancientCanonZh.split('\n')[0],
          detail: `【通俗要义】${g.plainTextZh} 【职场实操】${g.actionRulesZh}`
        });
      }
    }
    return results;
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { TenGodsDB, TEN_GODS_GLOSSARY };
}
if (typeof window !== 'undefined') {
  window.TenGodsDB = TenGodsDB;
  window.TEN_GODS_GLOSSARY = TEN_GODS_GLOSSARY;
}
