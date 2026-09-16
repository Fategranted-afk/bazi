/**
 * 《荣枯鉴》 (Rong Ku Jian - The Classic of Glory and Wither) Database
 * Authored by Five Dynasties Prime Minister Feng Dao (五代·冯道, 882–954).
 * Comprehensive 8 Scrolls (全八卷) with ancient canonical verses,
 * modern vernacular workplace exegeses, survival protocols, and historical case studies.
 * Strictly bilingual with 100% zero residual Chinese in English mode.
 */

const RONG_KU_JIAN_DATA = {
  titleZh: '五代·冯道《荣枯鉴》全相职场生存与破局宝典',
  titleEn: 'The Rong Ku Jian Workplace Strategy & Survival Codex (Feng Dao)',
  authorZh: '五代 · 冯道 (历仕五朝十一帝，拜相二十余载，全躯保民，被尊为“长乐老”)',
  authorEn: 'Five Dynasties Prime Minister Feng Dao (Served 5 Dynasties & 11 Emperors)',
  overviewZh: '《荣枯鉴》（又称《小人经》）乃五代权相冯道洞悉千年人性本质、官场博弈、权力生态与吉凶祸福之不传秘典。全书分为八卷：圆通、闻达、解厄、节义、明鉴、示伪、降心、揣知。它摒弃虚伪空洞的道德说教，直击“穿上铠甲拿着刀做好人”、“直为骨媚为仪”、“外小人内君子”、“察人察势查己”的现实硬核生存智慧，堪称古今打工人与操盘统帅最锋利的职场实战防身手册。',
  overviewEn: 'The Rong Ku Jian is an ancient geopolitical and interpersonal survival codex authored by Prime Minister Feng Dao. Spanning 8 scrolls—Tact, Advancement, Crisis Management, Integrity & Armor, Astute Discernment, Camouflage, Subduing Minds, and Deep Observation—it strips away hypocritical moralism to provide pragmatic operational protocols: wielding moral character as an inner core while wearing armor and holding a sword, mastering upward loyalty, and establishing impenetrable workplace firewalls.',
  scrolls: [
    {
      id: 'yuantong',
      num: 1,
      nameZh: '圆通卷 · 顺天应人与名实之辩',
      nameEn: 'Scroll I: Universal Adaptability (Reality vs Illusory Renown)',
      sealZh: '圆通之道',
      sealEn: 'Universal Tact',
      coreQuoteZh: '“善恶有名，智者不拘也。天理有常，明者不弃也。道之靡通，易者无虞也。惜名者伤其名，惜身者全其身。”',
      coreQuoteEn: '"Good and evil are worldly labels; the wise are not bound by them. Heavenly principles are constant; the enlightened never abandon them. Those who treasure reputation wound their reputation; those who cherish life preserve their true existence."',
      originalVerses: [
        { zh: '善恶有名，智者不拘也。天理有常，明者不弃也。', en: 'Good and evil bear mortal names; the wise transcend them. Nature conforms to enduring laws; the lucid heed them.' },
        { zh: '道之靡通，易者无虞也。惜名者伤其名，惜身者全其身。', en: 'When paths are obstructed, the adaptable navigate without harm. Clinging to prestige ruins prestige; safeguarding life preserves sovereignty.' },
        { zh: '君子非贵，小人非贱，贵贱莫以名世。君子无得，小人无失，得失无由心也。', en: 'Nobility is not tied to moral virtue, nor is lowliness to petty minds. True gain and loss are judged by pragmatic survival, not internal sentiment.' },
        { zh: '名利无咎，逐之非罪，过乃人也。名者皆虚，利者惑人，人难独载。', en: 'Prestige and profit are neutral; pursuing them is no crime. Glory is ethereal, and wealth intoxicates; none can carry them alone.' },
        { zh: '名可易事难易也，心可易命难易也。荣或为君子，枯必为小人。', en: 'Names may be reshaped but competence requires labor. Minds can pivot while destiny must be ridden. Prosperity fosters nobility; deprivation breeds villainy.' }
      ],
      vernacularZh: '善恶本质是世俗权力与上层建筑定义的标签，成王败寇。智慧者看透善恶标签，不被世俗评价绑架，坚定执行自己的战略目标。天理有常，尊重客观规律；大道受阻时，懂得换一种方式走路。过度惜名是本末倒置，名是毛，实是皮，皮之不存毛将焉附。穷生奸计，富长良心；荣更容易激发善行，想办法让自己荣、让团队身边人荣，小人自然消弭。',
      vernacularEn: 'Conventional labels of virtue and vice are often defined by prevailing power structures. The wise look past moral posturing to focus on empirical execution and cosmic rhythms. Clinging anxiously to reputation creates rigid vulnerabilities: reputation is merely the hair, while competence and positive cash flow are the skin. Prosperity breeds generosity, whereas scarcity forces desperation; ensuring collective prosperity disarms malice naturally.',
      workplaceRulesZh: [
        '【名随实走，做实事抓实权】：不为虚幻的头衔或短期人设买单。把全部精力放在核心专业产出与资源控制上，底蕴雄厚了名声自然外溢。',
        '【不与基数对抗，顺应人性】：普通人皆有利己与安全感诉求。做项目必须让绝大多数合作者有利可图，方能获得持续助力。',
        '【尽人事听天命】：在时代与大势的框架下务实深耕，不妄求逆风翻盘，不沉溺于无谓懊悔，随时保持从容弹性。'
      ],
      workplaceRulesEn: [
        '[Substance Precedes Fame]: Never sacrifice substantive resources for hollow prestige. Consolidate genuine technical mastery and cash flow; acclaim naturally follows.',
        '[Align with Human Nature]: Recognize self-interest as an immutable law. In any team initiative, ensure majority participants gain tangible profit to secure allies.',
        '[Radical Acceptance of Timing]: Execute rigorously within historical and market parameters; never force counter-trend gambles or waste energy on regret.'
      ],
      historicalCasesZh: '冯道历仕五朝十一帝，面对契丹入汴屠城危机，坦然入朝受封，保全中原百万百姓与汉家文脉；世人或讥其不忠，后世史家始悟其“惜身以全生民”之大圆通。明末秦淮顾横波嫁降臣龚鼎孳受封一品诰命，亦是以实破名之例。',
      historicalCasesEn: 'Feng Dao served 11 emperors across 5 volatile dynasties. When the Khitan cavalry swept through the capital, he negotiated directly with the conquerors, terminating widespread massacres and saving millions of civilians alongside institutional culture. Though pedantic dogmatists mocked him, history honors his pragmatic mastery of preserving the living root.'
    },
    {
      id: 'wenda',
      num: 2,
      nameZh: '闻达卷 · 向上博弈与直媚之度',
      nameEn: 'Scroll II: Advancement & Upward Protocol (Balancing Frankness and Deference)',
      sealZh: '闻达之要',
      sealEn: 'Upward Mastery',
      coreQuoteZh: '“仕不计善恶，迁无论奸小。下以直为美，上以媚为忠。直而无媚，上疑也；媚而无直，下弃也。直为骨，媚为仪；骨不可丢，仪不可无；对上立恭，对下立骨。”',
      coreQuoteEn: '"In bureaucratic advancement, moral posturing fades. Subordinates admire frankness; superiors prize devotion. Honesty without deference invites suspicion; deference without honesty invites contempt. Integrity is your bone, manners are your garment: lose neither."',
      originalVerses: [
        { zh: '下以直为美，上以媚为忠。君子悦下，上不惑名。小人悦上，下不惩恶。', en: 'Subordinates revere blunt honesty; superiors regard respectful deference as loyalty.' },
        { zh: '悦上者荣，悦下者蹇。上疑祸本，下弃毁誉。', en: 'Pleasing leadership accelerates rise; fixating purely on lower consensus invites roadblocks. Superiors doubt breeds ruin; subordinates disdain destroys reputation.' },
        { zh: '直而无媚，上疑也；媚而无直，下弃也。', en: 'Frankness devoid of humble respect challenges authority; servility devoid of core boundary turns you into a disposable pawn.' },
        { zh: '富贵有常，其道乃实；福祸非命，其道乃察。', en: 'Wealth follows constant laws grounded in substance; fortune and ruin stem from active vigilance.' },
        { zh: '君子言心，小人攻心。莫道不同，其效自异。', en: 'The gentleman speaks from personal conviction; the pragmatic operator deciphers the unspoken motives of others.' }
      ],
      vernacularZh: '权力自上而下授权，官员与员工必须向上负责。领导眼中最看重的是下属的忠诚与掌控感。“直为骨，媚为仪”：骨气不可丢，但恭敬顺服的仪态绝不可缺。人前坚决维护领导权威与面子，人后私下委婉协商方案；若领导执意推行，先坚决执行、动作放缓、拿调研事实与前期数据再去汇报。被领导掌控并不丢人，无媚的直是直接挑战其权威，是职场第一取祸之道。',
      vernacularEn: 'Institutional authority flows downward. Superiors prioritize predictability, loyalty, and psychological control. "Integrity as bone, deference as etiquette": never sacrifice ethical bottom-lines, but always present respectful demeanor. Uphold managerial authority in public; deliver critical insights only in private 1-on-1 settings. Honesty stripped of etiquette is perceived as an insubordinate challenge.',
      workplaceRulesZh: [
        '【直为骨媚为仪，对上立恭对下立骨】：对上级保持谦逊顺承之礼仪身段，维护其掌控感；对下级坚守契约原则与业务风骨，不做无底线脏手套。',
        '【人多时接令，人少时进言】：若领导决策存在明显漏洞，大会上默默记录维护其威严，私下以“为大局补漏、做AB测试”为由委婉递交备选方案。',
        '【三察之道（察人、察势、查己）】：察人看清领导与同僚利益诉求；察势顺应行业与周期风口（上升期大胆冲，收缩期沉潜守稳）；查己定期复盘防贪功冒进。'
      ],
      workplaceRulesEn: [
        '[Deference as Etiquette, Backbone as Core]: Treat leadership with professional respect to reinforce their certainty; treat peers with firm contractual boundaries.',
        '[Accept Publicly, Pivot Privately]: When leadership directives harbor oversights, acknowledge receipt smoothly in public forums, proposing refined A/B options behind closed doors.',
        '[The Three Audits]: Audit people to map their financial and status incentives; audit macroeconomic cycles; audit yourself to purge hubris.'
      ],
      historicalCasesZh: '三国诸葛亮深明此道，刘备宠信法正，法正睚眦必报引起非议，诸葛亮深知法正辅佐刘备劳苦功高，绝不当众非议拆台，既给足刘备面子，又保全前线军心；战国王翦领兵伐楚，频频向秦王求田问舍以“自污”消除疑心，皆是“直媚相济”之大谋。',
      historicalCasesEn: 'During the Shu Han dynasty, Zhuge Liang refused to publicly reprimand Fa Zheng despite complaints, recognizing Fa Zheng\'s tactical brilliance and Liu Bei\'s strategic dependence on him. Similarly, General Wang Jian repeatedly requested farmland gifts from the King of Qin to signal zero political ambition, keeping his army trusted.'
    },
    {
      id: 'jiee',
      num: 3,
      nameZh: '解厄卷 · 危机防化与保全安命',
      nameEn: 'Scroll III: Crisis Prevention & Damage Control (Preserving Safety & Agency)',
      sealZh: '解厄之方',
      sealEn: 'Crisis Shield',
      coreQuoteZh: '“无忧则患烈也。忧国者失身，优己者安命。祸于上，无辩自罪者全；祸于下，争而罪人者免。富不露相，贵不独行。藏富如同藏刃，敛华似敛锋。”',
      coreQuoteEn: '"Absence of vigilance magnifies peril. Those who fret over global burdens lose themselves; those who cultivate personal margins preserve their destiny. When trouble originates from above, silence and bearing responsibility safeguards survival; when trouble arises from below, clarifying boundaries averts disaster."',
      originalVerses: [
        { zh: '无忧则患烈也。忧国者失身，优己者安命。', en: 'Heedlessness invites cataclysm. Those bearing impossible collective burdens perish; those who cultivate personal reserves sustain life.' },
        { zh: '祸之人拒，然亦人纳。祸之人怒，然亦人遇。', en: 'Men instinctively recoil from disaster, yet invite it through careless arrogance.' },
        { zh: '上不离心，非小人难为。下不结怨，非君子勿论。', en: 'Maintain unshakable alignment with leadership; avoid generating unnecessary grievances among the rank and file.' },
        { zh: '祸于上，无辩自罪者全。祸于下，争而罪人者免。', en: 'When superior mishaps threaten blowback, shielding the boss preserves you; when subordinates commit blunders, isolating accountability prevents entrapment.' },
        { zh: '君子不党，其祸无援也。小人利交，其利人助也。', en: 'The aloof purist lacks rescue allies in crisis; pragmatic networks mobilized by shared benefits bring timely intervention.' }
      ],
      vernacularZh: '厄为灾祸困苦，无忧是短视天真。万事皆有周期，顺境中必藏危机，成熟度的金指标是“资源冗余度”与杠杆控制。做分内之事，莫超纲插手不属于自己的核心权力。存人失地人地皆存，存地失人人地皆失。藏富如藏刃，敛华似敛锋；权力与体量越大，灾难越容易被放大。祸端牵扯上级时，闭紧嘴巴替老大当防火墙，老大不倒自己才有未来；祸端从下属冒出时，严格依规界定责任。',
      vernacularEn: 'Catastrophe punishes complacency. Mature executives measure readiness through operational redundancy and cash buffers. Never exceed your jurisdictional mandate. "Preserving people while yielding ground preserves both; clinging to ground while losing people forfeits both." Conceal wealth like sheathing a blade; high altitude exposes one to violent gales. Shield your superior in systemic crises, and establish clear operational boundaries below.',
      workplaceRulesZh: [
        '【丰年屯粮，旱时造船】：在收入与事业高光期建立充足的备用金与人脉冗余，切忌盲目加杠杆与高消费，筑牢抗周期救生艇。',
        '【为上司做防火墙，换取核心信任】：当部门遭遇外界审计或高层质疑时，主动承担执行层瑕疵、闭嘴不甩锅给上级，成为上司绝不敢抛弃的嫡系。',
        '【低调藏锋，消灭个人弱点】：不主动炫耀收入、豪车或家庭背景，避免激发平庸同事的嫉妒与暗算；越是春风得意越要主动分润功劳。'
      ],
      workplaceRulesEn: [
        '[Stockpile in Feast for the Drought]: Build deep cash reserves and auxiliary networks during peak earnings; never over-leverage or mistake a bull cycle for permanent genius.',
        '[Act as an Institutional Firewall]: In executive inquiries, absorb tactical operational friction without deflecting blame upward, cementing indispensable trust.',
        '[Stealth Wealth & Humility]: Never flaunt bonuses, lavish purchases, or personal connections. Envy is a silent toxin; distribute accolades generously.'
      ],
      historicalCasesZh: '明代戚继光与张居正紧密绑定，张居正病逝后戚继光遭弹劾夺职，但其早年“丰年造船”、练兵实录名震天下，终得以寿终正寝；反观方孝孺在朱棣靖难入京后意气用事，硬刚诛十族，不仅自身罹难，更连累八百余无辜亲友，此即“义不抵命、优己方能安命”之明证。',
      historicalCasesEn: 'General Qi Jiguang weathered the fall of Grand Secretary Zhang Juzheng because he built legendary military documentation and maintained personal survival buffers. In contrast, scholars who provoked ruthless dynastic conquerors with blunt ideological defiance caused the slaughter of entire extended clans, illustrating the disaster of uncalibrated heroics.'
    },
    {
      id: 'jieyi',
      num: 4,
      nameZh: '节义卷 · 铠甲佩刀与真伪君子',
      nameEn: 'Scroll IV: Integrity & Survival Armor (Wielding the Blade Behind the Smile)',
      sealZh: '节义之度',
      sealEn: 'Integrity Armor',
      coreQuoteZh: '“外君子而内小人者，真小人也；外小人而内君子者，真君子也。做好人跟穿上铠甲拿着刀做好人不冲突，甚至是有刀有铠甲才是做好人的前提。德与刀，是我们做一个好人的成本。有刀而不砍出去，才叫真正的善良。”',
      coreQuoteEn: '"Those who appear noble on the outside while scheming within are true villains; those who negotiate candid self-interest upfront while honoring commitments are true sages. Wearing armor and carrying a weapon while remaining righteous is the prerequisite for doing good. Possessing the capacity to strike without striking is genuine benevolence."',
      originalVerses: [
        { zh: '外君子而内小人者，真小人也；外小人而内君子者，真君子也。', en: 'Outwardly saintly but inwardly predatory defines the hypocrite; candidly calculating on terms while honoring contracts defines true nobility.' },
        { zh: '人慕君子，行则小人，君子难为也。人怨小人，实则忘义，小人无羁也。', en: 'The masses verbally praise selflessness yet act on self-interest; the dogmatic moralist suffers while the unfettered operator thrives.' },
        { zh: '难为获寡，无羁利丰，人皆趋小人也。', en: 'When virtue yields meager returns and lack of restraint reaps bounty, practical humans gravitate toward expediency.' },
        { zh: '节不抵金，人困难为君子；义不抵命，势危难拒小人。', en: 'Ethics cannot replace currency in poverty; righteousness cannot replace life in extreme danger.' },
        { zh: '德高者不矜，义重者轻害。乃节义之道，非生之道焉。', en: 'Unconditional martyrdom belongs to moral lore, not the empirical art of sustainable survival.' }
      ],
      vernacularZh: '上来满口大义仁德的人往往最易背叛；真正靠谱的合作伙伴，是上来先把丑话说在前面、利益边界与违约责任谈得极其细致的“外小人内君子”。做好人与穿铠甲拿武器毫不冲突，有刀而不砍出去才是真正的善。不要将希望寄托在别人的道德自觉上，必须用制度堵塞漏洞，把人性之恶计算进日常运营成本。仓廪实知礼节，困苦险境中气节是奢侈品，兼顾生存方能行远。',
      vernacularEn: 'Those presenting effortless affability are often the most dangerous; true partners negotiate ugly terms, liability, and clawbacks upfront, executing flawlessly afterwards. Benevolence without enforcement is mere naivete. Armor and weapons are the essential insurance for being a good person. Institutional constraints must price in human greed rather than relying on wishful altruism.',
      workplaceRulesZh: [
        '【先小人后君子，丑话说在前头】：涉及薪酬分成、合作权责、加班补偿，务必白纸黑字写进协议，谈透最坏情况，不留糊涂账。',
        '【穿铠甲拿刀，让别人伤害你的成本极高】：保留好业务往来的邮件抄送、关键沟通录音与交付日志，形成防御威慑，让任何想甩锅背刺你的人掂量代价。',
        '【严防道德绑架，把恶计算进成本】：当别人对你喊“顾全大局、奉献精神”时，立刻警惕其背后的白嫖动机，坚守底线权益。'
      ],
      workplaceRulesEn: [
        '[Ugly Truths First, Contractual Clarity]: When negotiating compensation, equity, or deliverables, document boundaries in ink. Address worst-case contingencies before launch.',
        '[Raise the Cost of Betrayal]: Maintain meticulous paper trails, email archives, and signed milestones. Make sabotaging your work unacceptably expensive.',
        '[Armor Against Moral Extortion]: When managers preach uncompensated self-sacrifice in the name of loyalty, recognize it as cost-cutting rhetoric and safeguard your baseline.'
      ],
      historicalCasesZh: '楚汉争霸时期，项羽自诩仁义却吝于封赏有功将士，最终众叛亲离；刘邦虽看似市井无赖，但与诸侯攻城略地“分财利多自与”、封赏韩信彭越王爵，信守分封誓约，最终克定天下，此乃“外小人而内信义”之典型。',
      historicalCasesEn: 'Xiang Yu preached aristocratic honor yet withheld titles and coin from victorious commanders. Liu Bang, though vulgar in speech, distributed territorial spoils generously and honored his agreements with military allies, ultimately unifying China through practical reciprocity.'
    },
    {
      id: 'mingjian',
      num: 5,
      nameZh: '明鉴卷 · 识破捧杀与顺风防坑',
      nameEn: 'Scroll V: Discerning Schemes & Traps (Seeing Beyond Traps in Prosperity)',
      sealZh: '明鉴之察',
      sealEn: 'Insightful Audit',
      coreQuoteZh: '“福不察非福，祸不预必祸。施小信而大诈逞，窥小处而大谋定。事不可绝，言不能尽，至亲亦戒也。权予忠者其业不毁，权予能者其身不倦，权予善者其名不损。”',
      coreQuoteEn: '"Prosperity unexamined is an ambush; peril unbudgeted is fatal certainty. Conceding minor honesty prepares grand deception; observing micro-habits reveals macro-destiny. Retain reserves in every deal; leave an honorable exit even for adversaries."',
      originalVerses: [
        { zh: '福不察非福，祸不预必祸。施小信而大诈逞，窥小处而大谋定。', en: 'Apparent fortune without provenance is poison; unforeseen hazard guarantees catastrophe. Baiting with small concessions enables massive deception.' },
        { zh: '事不可绝，言不能尽，至亲亦戒也。佯惧实忍，外恭内忌，奸人亦惑也。', en: 'Never push matters to the brink; never utter all thoughts. Feigned meekness shields inner resolve, confusing aggressive competitors.' },
        { zh: '知戒近福，惑人远祸，俟变亦存也。天恩难测，惟财可恃。', en: 'Vigilant restraint courts blessing; deliberate opacity fends off attack. Executive favors fluctuate; hard liquid reserves endure.' },
        { zh: '私人惟用，其利致远。以奸治奸，奸灭自安。伏恶勿善，其患不生。', en: 'Entrust core posts to proven loyalists. Counter bad-faith actors with sharp legal precision; eliminate systemic sabotage thoroughly.' },
        { zh: '计非全者莫施，人非智者弗谋，愚者应当戒哉。', en: 'Never launch half-baked strategies; never conspire with the obtuse. The uninitiated must maintain strict prudence.' }
      ],
      vernacularZh: '顺境与天降横财往往是最致命的捧杀大坑。管仲买鹿灭楚、高价收绨灭鲁梁，皆是“用暴利诱使对手弃本逐末”。遇到一上来百依百顺、客气过分、许诺奇高的人，必须逆向溯源其背后的杀机。事不可做绝，说话留余地；打败对手后，甚至要替对手撰写体面的宣传稿，让其体面认输而不至于鱼死网破。用人优先级：忠诚第一、能力第二、良善第三。',
      vernacularEn: 'Sudden windfall is frequently a calculated ambush. Guan Zhong famously conquered the state of Chu by artificially bidding up deer prices, enticing Chu farmers to abandon crops before abruptly blockading grain. Whenever clients or partners present hyper-generous terms with zero friction, investigate the hidden motive. Never humiliate defeated rivals; draft their exit PR so they do not resort to scorched-earth retaliation.',
      workplaceRulesZh: [
        '【反思顺境暴利，警惕产业捧杀】：面对高出市场价数倍的薪酬跳槽邀请或离奇大单，必须审查其现金流合规性与背锅风险，防范“买鹿灭楚”陷阱。',
        '【赢了之后，帮对手也写好宣传稿】：职场竞聘或部门争夺资源获胜后，主动在公开场合肯定对手的贡献与亮点，给足其团队台阶，化解死仇。',
        '【关键底牌，唯己自知】：真正的业务核心人脉、发家第一桶金、私人底牌资产，除了自己谁也不透露，言不可尽。'
      ],
      workplaceRulesEn: [
        '[Scrutinize Windfalls & Flattery]: Evaluate outsized salary offers or effortless sales leads through risk-inversion: are you being positioned as a regulatory scapegoat?',
        '[Draft the Rival\'s Victory Narrative]: When winning executive turf wars, praise your rival\'s contributions publicly, offering them a face-saving exit to prevent vendettas.',
        '[Guard Core Leverage Inviolably]: Keep confidential connections, personal balance sheets, and proprietary models strictly to yourself.'
      ],
      historicalCasesZh: '管仲治齐，高价收购衡山国兵器诱其废耕，继而断粮，衡山国不战自降；苹果公司1997年乔布斯重返时，主动向劲敌微软示弱并达成IE合作换取1.5亿美元投资解围，随后暗度陈仓开辟iPod与移动闭环，终成全球霸主，正是“事不可绝、俟变亦存”之范例。',
      historicalCasesEn: 'Guan Zhong subdued the state of Hengshan by buying their weapons at inflated prices until food supplies withered, conquering them without drawing a sword. In 1997, Steve Jobs accepted a $150M lifeline from Microsoft and integrated IE into Mac, biding time until iPod and iPhone rewritten tech history.'
    },
    {
      id: 'shiwei',
      num: 6,
      nameZh: '示伪卷 · 迂回求索与曲意成全',
      nameEn: 'Scroll VI: Tactical Camouflage (Curved Negotiation & Long-Term Loyalty)',
      sealZh: '示伪之术',
      sealEn: 'Strategic Mask',
      coreQuoteZh: '“顺其上者，伪非过焉；逆其上者，真是罪焉。求忌直也，曲之乃得；拒忌明也，婉之无失。曲则有情，为吉；直则无情，为煞。明争为下，暗争为上；进求为下，退求为上。”',
      coreQuoteEn: '"Aligning with superiors renders superficial camouflage harmless; defying leadership makes blunt truth a crime. Asking directly provokes resistance; curved diplomacy secures results. Rebuffing openly makes mortal enemies; graceful evasion preserves alliances. Curved movement brings harmony; blunt collision breeds calamity."',
      originalVerses: [
        { zh: '顺其上者，伪非过焉。逆其上者，真是罪焉。', en: 'Conforming to executive directives shields you; unvarnished insubordination turns righteousness into guilt.' },
        { zh: '伪不足自祸，真无忌人恶。求忌直也，曲之乃得；拒忌明也，婉之无失。', en: 'Tactical compliance causes no harm; reckless candor invites destruction. Requesting benefits requires nuance; declining requests requires gentle grace.' },
        { zh: '忠主仁也，君子仁不弃旧。仁主行也，小人行弗怀恩。', en: 'True loyalty is demonstrated through unwavering fidelity across cycles. Genuine leadership shares real profits rather than empty slogans.' },
        { zh: '俗礼不拘者非伪，事恶守诺者非信，物异而情易改矣。', en: 'Discarding empty pleasantries is not deceit; blind loyalty to harmful pledges is not integrity. Circumstances evolve, and human allegiances pivot.' }
      ],
      vernacularZh: '顺应上级部署即便带有策略性伪装也绝非过错，直接当面违背领导命令即使理由再正确也会被定为死罪。求取资源最忌直白生硬，迂回铺垫才能得偿所愿；拒绝别人最忌生硬打脸，委婉道出难处才能不树死敌。“曲则有情为吉，直则无情为煞”。最高级的忠诚是跨越周期的君子之仁，认准的大佬哪怕失势也绝不当墙头草。环境在变，人情态度也会变，高点不狂低点不颓。',
      vernacularEn: 'Strategic deference preserves survival. Demanding resources bluntly forces counterparties into defensiveness; curved diplomacy allows them to grant concessions gracefully. Outright refusal burns bridges permanently; explaining structural constraints provides dignified cover. True fidelity shines across market winters—never morph into an opportunist flip-flopper. Remain balanced at summits and patient in troughs.',
      workplaceRulesZh: [
        '【求忌直曲之乃得，满足对方掌控感】：争取加薪或资源时，不提“我付出了多少”，而是把方案包装成“此举能帮上级解决什么痛点、带来多大业绩亮点”。',
        '【拒忌明婉之无失，留足人情人际后路】：面对不合理需求，不当面生硬说“不”，而是用“这事我非常想支持，但目前系统/预算卡在X环节，我们一起看看怎么推进”化解矛盾。',
        '【君子不弃旧，绝不做墙头草】：选定信任的长线导师与领导，在其遭遇波折时坚定守在身边，熬过寒冬者必将成为未来新权力的核心柱石。'
      ],
      workplaceRulesEn: [
        '[Curved Advocacy]: When requesting headcount or budget, frame it not as personal need, but as an indispensable asset to fulfill your superior\'s annual KPI.',
        '[Gentle Rebuff Without Rupture]: Never say flat "No." Say: "I am eager to champion this; however, corporate policy currently constrains budget X. Let us examine viable paths together."',
        '[Long-Term Alliance Across Winters]: Stand by proven mentors during temporary downturns. Those who weather ice storms together become the inner cabinet of the next empire.'
      ],
      historicalCasesZh: '关羽身陷曹营，受尽曹操厚赐，但始终明牌宣称“吾受刘将军厚恩，誓以共死，立功报曹乃去”，曹操不仅不怒反生崇敬；战国触龙说赵太后，不谈国事而先拉家常、为子孙谋长远，终使赵太后心悦诚服送长安君入齐为质，皆是“曲之乃得”之千古神作。',
      historicalCasesEn: 'Guan Yu was lavished with honors by Cao Cao, yet openly stated his unshakeable allegiance to Liu Bei. Cao Cao admired his transparent integrity rather than executing him. Similarly, Chu Long persuaded the Queen Dowager of Zhao to send her beloved prince as a hostage by speaking gently of parental love and generational estate planning.'
    },
    {
      id: 'jiangxin',
      num: 7,
      nameZh: '降心卷 · 驭人慑心与恩威相济',
      nameEn: 'Scroll VII: Subduing Minds & Power Dynamics (Awe, Grace, and Boundless Control)',
      sealZh: '降心之驭',
      sealEn: 'Subduing Will',
      coreQuoteZh: '“以智治人，智穷人背也。伏人慑心，其志无改也。上宠者弗明责，受怨者休暗结。术不显则功成，谋暗用则致胜。君子制于亲，小人畏于烈。谏非善辩，理不直言，无嫌乃及焉。恩莫弃贤者，威亦施奸恶，恩威戒偏也。”',
      coreQuoteEn: '"Ruling people purely by cleverness invites rebellion once schemes are decoded; subduing minds through respect and decisive authority commands enduring allegiance. Never censure the chief\'s favorites in public; never fraternize secretly with those in disfavor. Temper grace with formidable deterrence."',
      originalVerses: [
        { zh: '以智治人，智穷人背也。伏人慑心，其志无改也。', en: 'Manipulating peers with petty tricks invites mutiny; anchoring loyalty through undeniable professional awe secures devotion.' },
        { zh: '上宠者弗明责，受怨者休暗结。', en: 'Never attack executive favorites directly; never form clandestine pacts with outcasts.' },
        { zh: '术不显则功成，谋暗用则致胜。', en: 'Concealed methods yield triumphs; invisible leverage catches rivals unawares.' },
        { zh: '君子制于亲，亲为质自从也。小人畏于烈，奸恒施自败也。', en: 'Noble minds are moved by kinship and loyalty; rogue minds bow only to severe, swift penalties.' },
        { zh: '谏非善辩，理不直言，无嫌乃及焉。恩威戒偏也。', en: 'Remonstrance is not an argumentative debate; eliminate perceived hostility before presenting counsel.' }
      ],
      vernacularZh: '单靠玩弄心眼权术驾驭人，一旦被摸清套路必然众叛亲离；真正降服人心，靠的是专业实力的敬佩、断绝后路的绑定与利益的真实兑现。大领导身边的红人宠臣千万不要当面指责得罪，会被领导理解为对其派系的公开挑衅；被高层怨恨排挤的人切莫私下暗通款曲，会引火烧身。君子软肋在亲情道义，小人软肋在人身财产安全；恩德要给足，威慑要立牢。',
      vernacularEn: 'Superficial manipulation breeds resentment once deciphered. True loyalty is cemented through professional reverence, mutual skin in the game, and immediate reward delivery. Never denounce the CEO\'s handpicked favorites—it is interpreted as war against the executive. Never conspire with disgraced exiles. Noble colleagues care about family and legacy; mercenary operators bow only to severe economic and legal deterrence.',
      workplaceRulesZh: [
        '【不惹上宠，不结受怨】：领导信任的红人即使业务平庸也绝不在公开场合挑刺；被领导边缘化排挤的旧人，保持礼貌距离，等定论彻底平息后再做私交。',
        '【恩威并施，立功即赏不画饼】：带领团队时，赏罚标准必须透明清晰；兄弟们拿下战功后立刻分发奖金待遇，同时严明纪律底线，绝不姑息原则性害群之马。',
        '【沟通先灭嫌隙，理不直言】：向上汇报或跨部门协调，第一步永远是让对方感受到被尊重与安全感，先情绪同频，再抛出解决方案。'
      ],
      workplaceRulesEn: [
        '[Steer Clear of Favorites and Pariahs]: Treat managerial darlings with courteous deference. Maintain formal distance from those undergoing disciplinary purge until the storm clears.',
        '[Immediate Rewards, Firm Redlines]: Distribute bonuses promptly upon milestone completion—banish empty rhetoric. Enforce operational discipline decisively.',
        '[De-Escalate Threat Before Persuasion]: In interdepartmental negotiation, dismantle perceived hostility first; logical arguments land only when emotional security is secured.'
      ],
      historicalCasesZh: '李世民收服尉迟恭堪称千古典范：尉迟恭被怀疑叛乱下狱，李世民亲入囚牢解缚，赐以巨金，温言“若欲去以此为资，我终不以谗言害良将”，并安排其贴身宿卫，随后尉迟恭单骑救主立下殊勋；此乃“敬重打底、恩威相济、慑服人心”之极意。',
      historicalCasesEn: 'When General Yuchi Jingde was imprisoned on false suspicion of rebellion, Emperor Taizong personally released him, gave him gold, and made him his personal bodyguard, saying his honor was beyond doubt. Yuchi Jingde responded by saving the Emperor\'s life in battle, illustrating supreme psychological mastery.'
    },
    {
      id: 'chuaizhi',
      num: 8,
      nameZh: '揣知卷 · 洞察人心与断敌动机',
      nameEn: 'Scroll VIII: Deep Discernment & Strategic Secrecy (Disarming Hostility at the Root)',
      sealZh: '揣知之神',
      sealEn: 'Deep Discernment',
      coreQuoteZh: '“善察者知人，善思者知心。知人者不惧，知心者堪御。知不示人，示人祸患矣。密而测之，人忌处解矣。附贵而缘，殃祸可避。结左右以知情，无不知也。置险难以绝念，无不破哉。见三岁儿童抱金砖于闹市世人皆魔鬼，笑脸弥勒旁立法韦驮群魔皆圣贤。”',
      coreQuoteEn: '"Masterful observers decode character; profound thinkers decode hearts. Knowing people extinguishes fear; knowing hearts enables governance. Conceal insights from public display; revealing secrets invites doom. Plant deterrence to sever hostile intent: when a toddler carries gold through a crowded market, men become predators; when armed guardians stand beside the laughing Buddha, predators become saints."',
      originalVerses: [
        { zh: '善察者知人，善思者知心。知人者不惧，知心者堪御。', en: 'Astute observation reveals competence; deep reflection reveals inner desire. Knowing men dispels dread; knowing intent enables guidance.' },
        { zh: '知不示人，示人祸患矣。密而测之，人忌处解矣。', en: 'Never flaunt insights; displaying omniscience invites fatal retaliation. Test hypotheses in secret to navigate sensitive taboos.' },
        { zh: '君子惑于微，不惑于大。小人虑于近，不虑于远。', en: 'The noble person may stumble over minor protocol but stands firm on macro-principle; the short-sighted opportunist obsesses over instant gain, blind to catastrophic horizons.' },
        { zh: '附贵而缘，殃祸可避。结左右以知情，无不知也。', en: 'Link tactfully with strategic patrons; weave intelligence networks among key staff to remain informed.' },
        { zh: '置险难以绝念，无不破哉。', en: 'Confront adversaries with ruinous counter-threats to terminate their predatory appetite at the root.' }
      ],
      vernacularZh: '一切恐惧全来自于未知，掌握对手与环境的全部信息，自能从容破局。看破切不可说破，炫耀自己的深邃洞察会招来忌惮暗算（如杨修因道破曹操鸡肋之心引杀身之祸）。打造属于自己的情报网，搞好领导身边助理秘书的关系，提前感知风吹草动。最彻底的自保不是乞求对手善良，而是展示压倒性的反击能力与同归于尽的威慑，彻底掐灭对方动你的念头。“见三岁儿童抱金砖于闹市世人皆魔鬼，笑脸弥勒旁立法韦驮群魔皆圣贤”。',
      vernacularEn: 'Fear is born of blind spots; total situational awareness breeds unshakeable calm. Never flaunt your insight into a superior\'s unspoken secrets—Yang Xiu was executed by Cao Cao precisely for demonstrating excessive cleverness. Cultivate cordial ties with executive assistants and operational staff to detect political shifts early. True peace comes not from appealing to rivals\' pity, but from displaying catastrophic retaliatory deterrence.',
      workplaceRulesZh: [
        '【看破绝不说破，戒智力炫耀】：一眼看穿同事的把戏或上级的难堪时，必须装聋作哑守口如瓶，绝不当众戳破；管得住嘴才能消灾远祸。',
        '【结左右以知情，礼敬基层关键枢纽】：对行政、前台、高管助理、IT网管等关键枢纽人员始终保持尊重与节庆关怀，建立灵敏的职场风向雷达。',
        '【立威断敌害你动机，不可做抱金砖的幼童】：在职场中展现出深厚的业务护城河、严密的数据备份与法务意识，让任何企图打压你的人意识到其反噬代价远超收益。'
      ],
      workplaceRulesEn: [
        '[Observe All, Utter Nothing]: When spotting colleagues\' ploys or managerial embarrassments, maintain benign silence. Concealing knowledge is the premier art of self-preservation.',
        '[Cultivate Peripheral Radar]: Treat executive assistants, office managers, and key infrastructure engineers with genuine respect; they provide early warnings.',
        '[Deploy Deterrence, Never Wander Defenseless]: Maintain proprietary system knowledge, client relationships, and documented evidence. Ensure any aggressor faces unacceptable ruin.'
      ],
      historicalCasesZh: '袁世凯在朝鲜任职期间，深知清廷大局系于北洋幕府李鸿章一人，每年自掏巨额俸银贴补万金，常年节庆厚馈天津幕府、总署文案与李鸿章身边亲信，使得朝廷重大对朝决策与中堂旨意袁世凯皆能提前十日知晓、预为布置，深得李鸿章器重庇佑，正是“结左右以知情、先知者必取于人”之实战典范。',
      historicalCasesEn: 'While stationed in Korea, Yuan Shikai spent thousands of taels of silver annually to reward Li Hongzhang\'s secretaries, confidants, and staff. As a result, Yuan learned of imperial diplomatic shifts ten days ahead of anyone else, enabling flawless preparations that won Li Hongzhang\'s absolute patronage.'
    }
  ]
};

class RongKuJianDB {
  static getAllScrolls() {
    return RONG_KU_JIAN_DATA.scrolls;
  }

  static getScroll(id) {
    if (!id) return RONG_KU_JIAN_DATA.scrolls[0];
    return RONG_KU_JIAN_DATA.scrolls.find(s => s.id === id || s.id === id.replace('-', '')) || RONG_KU_JIAN_DATA.scrolls[0];
  }

  static getScrollById(id) {
    return this.getScroll(id);
  }

  /**
   * Evaluates native's Day Master, Vigor, Pattern & Ten Gods to assign tailored scrolls
   */
  static evaluateNativeScrolls(dm, isStrong, godCounts = {}, primaryPattern = '') {
    const scrolls = RONG_KU_JIAN_DATA.scrolls;
    const pat = primaryPattern || '';
    const hasHurting = (godCounts.hurtingOfficer || 0) > 0;
    const hasKillings = (godCounts.killings || 0) > 0;
    const hasOfficer = (godCounts.officer || 0) > 0;
    const hasFriendRob = ((godCounts.friend || 0) + (godCounts.robWealth || 0)) >= 2;
    const hasWealth = ((godCounts.directWealth || 0) + (godCounts.indirectWealth || 0)) >= 2;

    let primaryScrollId = 'wenda';
    let blindspotScrollId = 'chuaizhi';
    let diagnosisZh = '';
    let diagnosisEn = '';

    if (pat.includes('伤官') || hasHurting) {
      primaryScrollId = 'wenda';
      blindspotScrollId = 'shiwei';
      diagnosisZh = '命带伤官秀气敏锐，智力超群但生性孤傲反叛，最易在向上管理中当面顶撞领导、显露智商优越感。必读【闻达卷】与【示伪卷】，深参“直为骨媚为仪”与“求忌直曲之乃得”，收敛锋芒，方得大成。';
      diagnosisEn = 'Endowed with Hurting Officer intellectual acuity, your brilliance risks friction through blunt contradictions and visible intellectual pride. Prioritize Scroll II (Advancement) and Scroll VI (Camouflage) to master curved diplomacy.';
    } else if (pat.includes('七杀') || hasKillings) {
      primaryScrollId = 'jiangxin';
      blindspotScrollId = 'jiee';
      diagnosisZh = '命带七杀杀伐决断，魄力非凡但性急刚烈，极易在逆境中硬碰硬、激化派系冲突。必读【降心卷】与【解厄卷】，参透“以智治人智穷人背、伏人慑心其志无改”与李世民恩威驭尉迟恭之大将心法，学会引而不发。';
      diagnosisEn = 'Seven Killings confers heroic drive but risks aggressive collisions. Study Scroll VII (Subduing Minds) and Scroll III (Crisis Shield) to master calm deterrence and emotional gravity over brute-force resistance.';
    } else if (isStrong && hasFriendRob) {
      primaryScrollId = 'jieyi';
      blindspotScrollId = 'chuaizhi';
      diagnosisZh = '日主身强且比劫环伺，天性重义爽朗，却最易遭遇同僚同侪抢功甩锅或背刺分财。必读【节义卷】与【揣知卷】，领悟“做好人跟穿上铠甲拿着刀做好人不冲突”与“置险难以绝念”，筑牢人际防御工事。';
      diagnosisEn = 'Vigorous constitution with strong Friend/Rob-Wealth traits risks peer exploitation and betrayal. Immerse in Scroll IV (Integrity Armor) and Scroll VIII (Deep Discernment) to wield armor alongside benevolence.';
    } else if (hasWealth) {
      primaryScrollId = 'mingjian';
      blindspotScrollId = 'yuantong';
      diagnosisZh = '命带财星敏锐善谋，商机嗅觉极灵，但最易在顺境高光时因贪功冒进或被商业伙伴“捧杀”跌入大坑。必读【明鉴卷】与【圆通卷】，参透管仲绝粮之计，守死正现金流，留足冗余退路。';
      diagnosisEn = 'Endowed with sharp commercial instincts, you are most vulnerable to flattery traps and over-leveraging during boom cycles. Study Scroll V (Discerning Traps) and Scroll I (Universal Tact) to secure cash cushions.';
    } else if (pat.includes('正官') || hasOfficer) {
      primaryScrollId = 'wenda';
      blindspotScrollId = 'jieyi';
      diagnosisZh = '正官当权守序持重，善于在体制规矩内推进，但有时过于君子风范、缺乏防范小人阴招之獠牙。必读【闻达卷】与【节义卷】，领会“外小人而内君子”之真谛，为道德风骨插上锋利双翼。';
      diagnosisEn = 'Direct Officer bestows order and structural respect, but risks vulnerability to opportunistic sabotage. Study Scroll II (Advancement) and Scroll IV (Armor) to augment institutional integrity with tactical defenses.';
    } else {
      primaryScrollId = 'yuantong';
      blindspotScrollId = 'jiee';
      diagnosisZh = '格局纯和稳健，行持重在顺应大势与避凶趋吉。必读【圆通卷】与【解厄卷】，通晓“天理有常、富不露相、藏富如藏刃”，在世态变迁中稳操胜券。';
      diagnosisEn = 'A balanced and steady constitution requires cyclical alignment and risk containment. Prioritize Scroll I (Tact) and Scroll III (Crisis Shield) to sustain continuous flourishing without overexposure.';
    }

    const primaryScroll = this.getScroll(primaryScrollId);
    const blindspotScroll = this.getScroll(blindspotScrollId);

    return {
      primaryScroll,
      blindspotScroll,
      diagnosisZh,
      diagnosisEn,
      allScrolls: scrolls
    };
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { RONG_KU_JIAN_DATA, RongKuJianDB };
}
