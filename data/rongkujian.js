/**
 * 《荣枯鉴》 (Rong Ku Jian - The Classic of Glory and Wither) Database
 * Authored by Five Dynasties Prime Minister Feng Dao (五代·冯道, 882–954).
 * Comprehensive 10 Scrolls (全十卷) with ancient canonical verses,
 * modern vernacular workplace exegeses, survival protocols, and historical case studies.
 * Strictly bilingual with 100% zero residual Chinese in English mode.
 */

const RONG_KU_JIAN_DATA = {
  titleZh: '五代·冯道《荣枯鉴》全相职场生存与破局宝典',
  titleEn: 'The Rong Ku Jian Workplace Strategy & Survival Codex (Feng Dao)',
  authorZh: '五代 · 冯道 (历仕五朝十一帝，拜相二十余载，全躯保民，被尊为“长乐老”)',
  authorEn: 'Five Dynasties Prime Minister Feng Dao (Served 5 Dynasties & 11 Emperors)',
  overviewZh: '《荣枯鉴》（又称《小人经》）乃五代权相冯道洞悉千年人性本质、官场博弈、权力生态与吉凶祸福之不传秘典。全书分为十卷：圆通、闻达、解厄、交结、节义、明鉴、谤言、示伪、降心、揣知。它摒弃虚伪空洞的道德说教，直击“穿上铠甲拿着刀做好人”、“直为骨媚为仪”、“善恶咸用”、“谤而不辩”、“察人察势查己”的现实硬核生存智慧，堪称古今打工人与操盘统帅最锋利的职场实战防身手册。',
  overviewEn: 'The Rong Ku Jian is an ancient geopolitical and interpersonal survival codex authored by Prime Minister Feng Dao. Spanning 10 scrolls—Tact, Advancement, Crisis Management, Strategic Alliances, Integrity & Armor, Astute Discernment, Slander Defense, Camouflage, Subduing Minds, and Deep Observation—it strips away hypocritical moralism to provide pragmatic operational protocols: wielding moral character as an inner core while wearing armor and holding a sword, mastering upward loyalty, building cross-camp alliances, defusing workplace smears with poise, and establishing impenetrable workplace firewalls.',
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
      id: 'jiaojie',
      num: 4,
      nameZh: '交结卷 · 结盟立党与善恶咸用',
      nameEn: 'Scroll IV: Strategic Alliances & Power Alignments (Pragmatic Coalitions)',
      sealZh: '交结之道',
      sealEn: 'Strategic Alliance',
      coreQuoteZh: '“智不拒贤，明不远恶，善恶咸用也。顺则为友，逆则为敌，敌友常易也。人冀人愚而自明，示人以愚，其谋乃大。人忌人明而自愚，智无潜藏，其害无止。”',
      coreQuoteEn: '"The wise do not reject the worthy, nor do the lucid shun the cunning: both the virtuous and the shrewd have their utility. Alignment creates friends while divergence creates foes, and friends and foes constantly trade places. Men wish others to appear foolish while displaying their own wisdom; display foolishness to others, and your grand strategy unfolds unhindered. Men resent brilliance in others; if wisdom is not concealed, calamity never ceases."',
      originalVerses: [
        { zh: '智不拒贤，明不远恶，善恶咸用也。顺则为友，逆则为敌，敌友常易也。', en: 'The wise reject not virtue nor shun malice; all temperaments serve strategic utility. Alignment creates allies while opposition breeds rivals; allies and rivals trade roles as incentives shift.' },
        { zh: '贵以识人者贵，贱以养奸者贱。贵不自贵，贱不自贱，贵贱易焉。', en: 'Nobility stems from perceptive talent reading; degradation comes from nurturing betrayal. The noble who eschew vanity remain exalted; the humble who abandon self-pity ascend.' },
        { zh: '人冀人愚而自明，示人以愚，其谋乃大。人忌人明而自愚，智无潜藏，其害无止。', en: 'Others covet being thought brilliant; project mild foolishness to mask grand designs. Men resent conspicuous acumen; wisdom left unshielded invites unending sabotages.' },
        { zh: '明不接愚，愚者勿长其明。智不结怨，仇者无惧其智。', en: 'Do not debate with obstinate dullards; do not bestow strategic sight upon the treacherous. The truly wise avoid gratuitous feuds; a cornered foe fears not your intellect.' },
        { zh: '君子仁交，惟忧仁不尽善。小人阴结，惟患阴不制的。君子弗胜小人，殆于此也。', en: 'The idealist frets over imperfect virtue; the schemer obsesses solely over tactical leverage. Gentlemen falter before petty rivals primarily due to this asymmetric focus.' }
      ],
      vernacularZh: '在成年人的利益网络中，人际关系没有永恒的道德好坏，只有永恒的利益咬合与周期契合。真正的战略操盘手“善恶咸用”：既能与道德高尚的君子同甘共苦，也能与精明利己的小人甚至灰色角色分润合作。他人总希望自己比你聪明，你若处处显摆智商优越感，必成众矢之的；适度在琐事上“示人以愚”、装糊涂、不争口舌之快，对方对你放下戒备，你的核心战略才能从容落地。君子之所以屡遭小人暗算，就是因为君子纠结于道德完美，而小人只专注于现实靶心与利益杠杆。',
      vernacularEn: 'In adult professional ecosystems, alliances are defined by incentive alignment and structural utility rather than moral absolutes. The master strategist employs both high-minded idealists and sharp-elbowed pragmatists. Human nature desires cognitive superiority; flaunting intellect invites immediate sabotage. Displaying benign simplicity disarms suspicion, allowing grand moves to mature. Idealists falter because they obsess over moral optics, while pragmatists focus ruthlessly on leverage.',
      workplaceRulesZh: [
        '【善恶咸用，建立跨阵营协作网络】：在职场与商业博弈中，不要有道德洁癖。只要对方在特定环节具备不可替代的专业技能或资源通路，即可依规签订契约、合理分润。',
        '【示人以愚，把聪明留在最关键处】：平时开会沟通多点头、少抢风头，在非原则性小事上甘拜下风；让同事和上司觉得你“踏实无害”，核心关键时刻一剑封喉。',
        '【动态敌友观，绝不结死仇】：利益顺应时是盟友，利益冲突时是对手；凡事留三分余地，不把竞争对手逼入死角，为未来的重新结盟留足旋转门。'
      ],
      workplaceRulesEn: [
        '[Utilize All Archetypes Without Moral Snobbery]: Partner pragmatically with diverse personalities. As long as a collaborator controls critical technical nodes or resources, align interests through transparent contracts.',
        '[Project Benign Simplicity, Reserve Acumen for Decisive Strikes]: Yield minor conversational victories and avoid unnecessary brilliance in daily meetings. When others perceive you as unthreatening, your key strategic maneuvers face zero friction.',
        '[Fluid Coalitions Without Irreversible Feuds]: Allies and adversaries rotate with incentive tides. Never corner an opponent into total humiliation; preserve revolving doors for future alignment.'
      ],
      historicalCasesZh: '战国张仪与苏秦合纵连横，虽政见截然相反、各为其主，却私下互通信使、互通有无，善用彼此声势在六国与秦廷之间纵横捭阖；曾国藩剿捻期间，既重用刚正不阿之彭玉麟，又倚重手段狠辣精明之李鸿章、鲍超，善恶咸用各尽其才，终成同治中兴第一重臣。',
      historicalCasesEn: 'During the Warring States period, rival strategists Zhang Yi and Su Qin represented opposing courts yet maintained confidential correspondence, using each other\'s maneuvers to secure sovereign leverage. Similarly, Qing statesman Zeng Guofan mobilized both moral purists and ruthless pragmatists to suppress rebellions, achieving dynastic preservation.'
    },
    {
      id: 'jieyi',
      num: 5,
      nameZh: '节义卷 · 铠甲佩刀与真伪君子',
      nameEn: 'Scroll V: Integrity & Survival Armor (Wielding the Blade Behind the Smile)',
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
      num: 6,
      nameZh: '明鉴卷 · 利益洞察与破局防捧',
      nameEn: 'Scroll VI: Astute Discernment (Dissecting Flattery & Preserving Advantage)',
      sealZh: '明鉴之法',
      sealEn: 'Clear Vision',
      coreQuoteZh: '“福不可受尽，利不可占全。占全则怨聚，受尽则祸临。人皆喜谀而恶讦，誉之者未必真善，毁之者未必至恶。察言以观其行，核实以断其诈。捧杀之害，甚于白刃；顺从之毒，烈于鸩羽。”',
      coreQuoteEn: '"Never exhaust good fortune to the dregs; never monopolize profits to the brim. Monopolizing invites collective rancor; exhausting fortune summons catastrophe. Men crave flattery and despise critique. Praisers are seldom benign, and accusers are rarely wholly malicious. The trap of over-flattery is sharper than naked steel."',
      originalVerses: [
        { zh: '福不可受尽，利不可占全。占全则怨聚，受尽则祸临。', en: 'Do not drain fortune dry nor claim every coin on the table. Complete monopoly gathers hatred; boundless enjoyment invites collapse.' },
        { zh: '无妄之福必有隐祸，非常之利必伏巨险。', en: 'Unearned windfalls conceal covert ruin; extraordinary windfalls harbor lethal cliffs.' },
        { zh: '誉之者未必真善，毁之者未必至恶。', en: 'Loud praisers rarely harbor pure virtue; fierce critics rarely embody pure evil.' },
        { zh: '察言以观其行，核实以断其诈。', en: 'Examine speech to scrutinize daily behavior; audit documentation to expose concealed falsehoods.' },
        { zh: '顺从之毒，烈于鸩羽；捧杀之害，甚于白刃。', en: 'Unconditional servility poisons like hemlock; fatal over-flattery destroys faster than steel.' }
      ],
      vernacularZh: '好事不要占尽，利益一定要分润。一个人若把好处全捞光，身边所有人都会变成他的敌人。世界上最阴险的陷阱是“捧杀”：当所有人都在热烈夸赞你、哄抬你时，往往正是要把你架在火上烤的危险时刻。无缘无故从天而降的超额利润，背后必有不可承受的隐性代价。听话听音，看人看行，不要看对方说了什么漂亮话，只看其真金白银的交付与实际利益的流向。',
      vernacularEn: 'Never monopolize bounty; unshared success transforms every onlooker into a covert predator. Flattery is the most lethal organizational venom: being placed on an artificial pedestal often precedes being sacrificed. Unearned windfalls always conceal catastrophic hidden clauses. Ignore eloquent promises and audit where actual cash and resource streams flow.',
      workplaceRulesZh: [
        '【主动分润功劳，消除同僚怨气】：项目大获成功、得到高额奖金时，主动给团队与周边协作部门分发福利、在报告中突出协作者的贡献，把潜在敌人转化为利益共同体。',
        '【警惕异常捧杀，越是受夸越要夹紧尾巴】：当领导或同僚突然在公开场合把你捧得极高时，保持极度清醒，迅速核查是否有甩锅风险或重大坑位在等着你。',
        '【以现金流与实际控制权为唯一锚点】：不为“期权画饼”、“行业名气”打白工，严密核算投入产出比与现金流安全冗余。'
      ],
      workplaceRulesEn: [
        '[Disperse Accolades & Profits Generously]: When securing lucrative triumphs, credit cross-functional allies openly. Transform potential rivals into beneficiaries.',
        '[Armor Against Flattery Traps]: When peers or superiors suddenly shower uncharacteristic adulation, heighten vigilance against impending scapegoating.',
        '[Anchor Reality in Cash Flow & Control]: Never sacrifice liquidity for empty corporate equity promises or vanity titles; evaluate initiatives by verifiable cash flow buffers.'
      ],
      historicalCasesZh: '春秋管仲辅佐齐桓公，深谙“利益驱动”之法，以“买鹿制楚”、“买绢制鲁”的商战策略不战而屈人之兵；同时管仲富拟于公侯，修建三归台，主动自污以绝齐桓公猜忌，功盖天下而得以善终。',
      historicalCasesEn: 'Guan Zhong engineered economic warfare to subdue rival states for Qi without bloody siegecraft. Despite monumental state influence, he indulged in personal mansions, deliberately signaling zero political ambition to disarm Duke Huan\'s suspicions and preserve his life.'
    },
    {
      id: 'bangyan',
      num: 7,
      nameZh: '谤言卷 · 谣言化解与去浊澄清',
      nameEn: 'Scroll VII: Slander Neutralization & Narrative Defense (Dissolving Malice)',
      sealZh: '除谤之道',
      sealEn: 'Slander Shield',
      coreQuoteZh: '“人微不诤，才庸不荐。攻其人忌，人难容也。陷其窘地人自污，谤之易也；善其仇者人莫识，谤之奇也；究其末事人未察，谤之实也；设其恶言人弗辩，谤之成也。谤而不辩，其事自明，人恶稍减也；谤而强辩，其事反浊，人怨益增也。失于上者，下必毁之；失于下者，上必疑之。假天责人掩私，假民言事见信，人者尽惑焉。”',
      coreQuoteEn: '"When slandered, withholding anxious defense allows truth to surface naturally, steadily eroding malice; defending frantically muddies the waters, multiplying resentments. Losing favor with superiors triggers contempt from subordinates; alienating subordinates breeds suspicion from above. Pettiness cloaks private malice in higher moral slogans, leaving the unobservant utterly deceived."',
      originalVerses: [
        { zh: '人微不诤，才庸不荐。攻其人忌，人难容也。', en: 'Do not bicker with the insignificant; do not sponsor the incompetent. Striking at an opponent\'s most taboo vulnerability renders them intolerable to the collective.' },
        { zh: '陷其窘地人自污，谤之易也；善其仇者人莫识，谤之奇也；究其末事人未察，谤之实也；设其恶言人弗辩，谤之成也。', en: 'Forcing a rival into dilemmas where self-compromise occurs is facile slander; recruiting their covert adversaries is exquisite slander; exaggerating trivial flaws creates credible slander; crafting unprovable slurs seals the smear.' },
        { zh: '谤而不辩，其事自明，人恶稍减也；谤而强辩，其事反浊，人怨益增也。', en: 'Remaining poised under gossip lets facts speak, progressively deflating spite; heated refutation merely spreads the rumor and multiplies suspicion.' },
        { zh: '失于上者，下必毁之；失于下者，上必疑之。', en: 'A subordinate abandoned by upper leadership is instantly torn down by peers; one alienated from the rank and file invites managerial distrust.' },
        { zh: '假天责人掩私，假民言事见信，人者尽惑焉。', en: 'Weaponizing sacred values masks selfish ambition; invoking collective outrage manufactures consensus: all mortals are easily led astray.' }
      ],
      vernacularZh: '在职场中，流言蜚语和背后捅刀是竞争的必然副产品。面对恶意诽谤与流言，最愚蠢的做法是情绪失控、到处找人辩解对质——“越描越黑，反引更多围观”。高段位的化解之道是“谤而不辩”，冷处理、不动声色，用不可撼动的业务成果与客观交付让谣言不攻自破。看清小人毁谤的套路：小人最擅长打着“为了公司大局”、“代表民意”的高大上道德旗号掩盖私心，搜集你的微小工作瑕疵无限放大。只要你牢牢维系与直接决策者的信任同盟，下属与同僚的闲言碎语便如秋风过耳，根本动摇不了你的根基。',
      vernacularEn: 'Workplace rumors and whispers are systemic byproducts of organizational friction. Anxious, emotional refutations are fatal blunders: they amplify the controversy and signal guilt. The premier survival protocol is poised restraint: "withholding frantic debate lets the waters clarify." Disarm smears through immutable metric deliveries and direct executive trust. Petty operators disguise selfish attacks behind lofty buzzwords; as long as your direct supervisor retains unshakeable faith in your performance, horizontal gossip evaporates into dust.',
      workplaceRulesZh: [
        '【冷面降维，绝不在烂事中自证清白】：遭遇闲言碎语或职场背刺时，严禁情绪化在群里公开撕逼或挨个解释；不进入对方预设的自证陷阱，用无可辩驳的数据与交付打脸。',
        '【筑牢向上信用壁垒，流言自然熄灭】：职场中“失于上者下必毁之”。只要你与直接上级、核心业务链保持高频透明的定期同步与深厚互信，外界的小道消息便毫无杀伤力。',
        '【看破假借大局之名的小人伎俩】：当有人打着“合规”、“公允”、“为大家好”的旗号刁难挑刺时，一眼识破其争夺资源的核心动机，按章办事、留存书面证据，绝不妥协。'
      ],
      workplaceRulesEn: [
        '[Emotional Detachment & Refusal to Self-Justify]: Never engage in frantic public arguments or defensive explanations. Falling into defensive traps gives life to rumors; crush malice with undeniable quantitative output.',
        '[Fortify Upward Trust Capital]: A professional abandoned by executive leadership is instantly devoured. Maintain transparent cadence and mutual trust with your primary decision-maker; peer rumors cannot pierce an executive shield.',
        '[Decipher Moral Pretexts in Bad-Faith Attacks]: When rivals weaponize corporate values or compliance pretexts to sabotage initiatives, recognize their resource-hoarding agenda. Counter strictly through documented audit trails.'
      ],
      historicalCasesZh: '北宋寇准拜相受王钦若诽谤中伤，寇准深谙“谤而不辩”之理，从不对质争辩，而是专注整军安邦、澶渊之盟定大局，宋真宗终悟其忠纯；明代名相徐阶在严嵩父子权倾朝野、谗言四起之时，隐忍不发、恭谨自守十余载，避其锋芒，最终一举扫除奸佞。',
      historicalCasesEn: 'During the Northern Song dynasty, Chancellor Kou Zhun faced relentless smear campaigns orchestrated by Wang Qinruo. Refusing public spats, Kou Zhun delivered geopolitical victory at Chanyuan, allowing accomplishments to dissolve slander. Similarly, Ming Chancellor Xu Jie endured ten years of gossip during Yan Song\'s reign, maintaining calm professionalism until the moment for total reform arrived.'
    },
    {
      id: 'shiwei',
      num: 8,
      nameZh: '示伪卷 · 战略伪装与曲中取胜',
      nameEn: 'Scroll VIII: Strategic Camouflage (The Art of Curved Diplomacy)',
      sealZh: '示伪之术',
      sealEn: 'Strategic Mask',
      coreQuoteZh: '“无伪则无真，大伪则至真。求忌直，曲之乃得；言忌露，晦之方达。势弱者示以恭，势强者示以诚。顺其上者伪非过，全其身者诡非恶。大人者，不失赤子之心；达人者，不滞迹相之表。”',
      coreQuoteEn: '"Truth emerges through strategic masking; consummate adaptation mirrors ultimate reality. Never pursue direct collisions when curved detours yield victory; never expose sensitive intentions when subtlety arrives unhindered. The vulnerable display humble deference; the mighty project transparent candor."',
      originalVerses: [
        { zh: '无伪则无真，大伪则至真。', en: 'Without diplomatic camouflage, raw truth invites immediate execution; consummate discretion preserves noble purpose.' },
        { zh: '求忌直，曲之乃得；言忌露，晦之方达。', en: 'Straightforward demands provoke stubborn defense; curved maneuvers secure surrender. Blunt proclamations invite vetoes; coded nuance reaches the goal.' },
        { zh: '势弱者示以恭，势强者示以诚。', en: 'When power is deficient, demonstrate impeccable deference; when power is supreme, govern with transparent reliability.' },
        { zh: '顺其上者伪非过，全其身者诡非恶。', en: 'Tactfully yielding to managerial ego is pragmatic prudence; strategizing for personal survival carries zero moral guilt.' },
        { zh: '大人者，不失赤子之心；达人者，不滞迹相之表。', en: 'The enlightened safeguard core principles inwardly while flexibly adopting external diplomacy.' }
      ],
      vernacularZh: '职场与政治从不是非黑即白的温室，过度直来直去是心智未成熟的表现。很多事情正面硬推推不动，绕个弯子、以退为进、换个名义往往一推即就。“求忌直，曲之乃得”：想争取资源或职位，切忌赤裸裸开口索要，而是先帮领导解决心头大患，让领导主动为你争取。弱小时学会伏低做小，收起你的锋芒；强大时以诚待人，建立公信力。外圆内方，不执着于虚名形式。',
      vernacularEn: 'Mature operators abandon childish black-and-white dogmas. Straight lines provoke insurmountable friction; curvilinear diplomacy maneuvers around obstacles effortlessly. If you desire promotions or headcount, never beg directly: eliminate a critical headache for your superior, allowing them to champion your ascension. Adopt humble compliance when under-resourced; adopt transparent integrity when commanding dominant market share.',
      workplaceRulesZh: [
        '【以退为进，以迂为直】：遭遇阻力时，不要硬顶。先赞同对方的初衷，顺势提出小规模试点或分步执行方案，用事实说话逐步拿到主控权。',
        '【弱小时示弱藏拙，绝不逞英雄】：资历浅或资源少时，多向资深同事请教，展示求知与谦卑姿态，降低外界防御门槛。',
        '【外圆内方，守住心中真我】：形式上可以妥协让步，但战略内核与核心资产控制权绝不拱手相让，表面云淡风轻，内心坚如磐石。'
      ],
      workplaceRulesEn: [
        '[Retreat to Advance, Curves Over Lines]: When hitting bureaucratic walls, validate the counterparty\'s anxieties first, proposing an innocuous pilot project to seize control organically.',
        '[Strategic Vulnerability in Formative Years]: When outmatched, display humble curiosity to lower organizational antibodies and buy runway.',
        '[External Softness, Internal Steel]: Concede on diplomatic optics while retaining non-negotiable control over intellectual property, critical client pipelines, and source code.'
      ],
      historicalCasesZh: '汉高祖刘邦在鸿门宴上面对项羽雷霆之怒，伏地叩首自称“不知何意能先入关破秦”，把项羽捧为上将军，极尽示弱恭顺之能事，终得脱身；越王勾践卧薪尝胆、为夫差尝粪问疾，示伪麻痹吴王十余载，终实现“三千越甲可吞吴”。',
      historicalCasesEn: 'At the Feast at Hong Gate, Liu Bang bowed low before Xiang Yu, crediting the hegemon for his victories and adopting absolute deference to secure survival. King Goujian of Yue performed menial subservience for King Fuchai of Wu for decades, completely numbing his rival until the moment for total overthrow arrived.'
    },
    {
      id: 'jiangxin',
      num: 9,
      nameZh: '降心卷 · 驭人慑心与恩威相济',
      nameEn: 'Scroll IX: Subduing Minds & Power Dynamics (Awe, Grace, and Boundless Control)',
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
      num: 10,
      nameZh: '揣知卷 · 洞察人心与断敌动机',
      nameEn: 'Scroll X: Deep Discernment & Strategic Secrecy (Disarming Hostility at the Root)',
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
    const cleanId = String(id).toLowerCase().replace(/[^a-z]/g, '');
    return RONG_KU_JIAN_DATA.scrolls.find(s => {
      const sClean = s.id.toLowerCase().replace(/[^a-z]/g, '');
      return s.id === id || sClean === cleanId;
    }) || RONG_KU_JIAN_DATA.scrolls[0];
  }

  static getScrollById(id) {
    return this.getScroll(id);
  }

  /**
   * Evaluates native's Day Master, Vigor, Pattern & Ten Gods to assign tailored scrolls across all 10 scrolls
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
    let blindspotScrollId = 'bangyan';
    let diagnosisZh = '';
    let diagnosisEn = '';

    if (pat.includes('伤官') || hasHurting) {
      primaryScrollId = 'wenda';
      blindspotScrollId = 'bangyan';
      diagnosisZh = '命带伤官秀气敏锐，智力超群但生性孤傲反叛，最易在向上管理中当面顶撞领导、显露智商优越感，进而招致同僚嫉恨毁谤。必读【闻达卷】与【谤言卷】，深参“直为骨媚为仪”与“谤而不辩去浊澄清”，收敛锋芒、不陷自证陷阱，方得大成。';
      diagnosisEn = 'Endowed with Hurting Officer intellectual acuity, your brilliance risks friction through blunt contradictions and vulnerability to peer slander. Prioritize Scroll II (Advancement) and Scroll VII (Slander Defense) to master curved diplomacy and refuse the trap of frantic self-justification.';
    } else if (pat.includes('七杀') || hasKillings) {
      primaryScrollId = 'jiangxin';
      blindspotScrollId = 'jiee';
      diagnosisZh = '命带七杀杀伐决断，魄力非凡但性急刚烈，极易在逆境中硬碰硬、激化派系冲突。必读【降心卷】与【解厄卷】，参透“以智治人智穷人背、伏人慑心其志无改”与李世民恩威驭尉迟恭之大将心法，学会引而不发、丰年屯粮。';
      diagnosisEn = 'Seven Killings confers heroic drive but risks aggressive collisions. Study Scroll IX (Subduing Minds) and Scroll III (Crisis Shield) to master calm deterrence and emotional gravity over brute-force resistance.';
    } else if (isStrong && hasFriendRob) {
      primaryScrollId = 'jieyi';
      blindspotScrollId = 'jiaojie';
      diagnosisZh = '日主身强且比劫环伺，天性重义爽朗，却最易遭遇同僚同侪抢功甩锅或盲目交友被背刺分财。必读【节义卷】与【交结卷】，领悟“做好人跟穿上铠甲拿着刀做好人不冲突”与“善恶咸用、示人以愚”，筑牢人际防御工事。';
      diagnosisEn = 'Vigorous constitution with strong Friend/Rob-Wealth traits risks peer exploitation and betrayal. Immerse in Scroll V (Integrity Armor) and Scroll IV (Strategic Alliances) to wield armor alongside benevolence, practicing benign simplicity.';
    } else if (hasWealth) {
      primaryScrollId = 'mingjian';
      blindspotScrollId = 'yuantong';
      diagnosisZh = '命带财星敏锐善谋，商机嗅觉极灵，但最易在顺境高光时因贪功冒进或被商业伙伴“捧杀”跌入大坑。必读【明鉴卷】与【圆通卷】，参透管仲绝粮之计，主动分润功劳，守死正现金流，留足冗余退路。';
      diagnosisEn = 'Endowed with sharp commercial instincts, you are most vulnerable to flattery traps and over-leveraging during boom cycles. Study Scroll VI (Discerning Traps) and Scroll I (Universal Tact) to secure cash cushions and share gains generously.';
    } else if (pat.includes('正官') || hasOfficer) {
      primaryScrollId = 'wenda';
      blindspotScrollId = 'shiwei';
      diagnosisZh = '正官当权守序持重，善于在体制规矩内推进，但有时过于方正坦直、缺乏防范小人阴招之掩护。必读【闻达卷】与【示伪卷】，领会“外小人而内君子”、“求忌直曲之乃得”之真谛，为道德风骨插上锋利双翼。';
      diagnosisEn = 'Direct Officer bestows order and structural respect, but risks vulnerability to rigid directness. Study Scroll II (Advancement) and Scroll VIII (Camouflage) to augment institutional integrity with curved diplomacy.';
    } else {
      primaryScrollId = 'yuantong';
      blindspotScrollId = 'chuaizhi';
      diagnosisZh = '格局纯和稳健，行持重在顺应大势与情报感知。必读【圆通卷】与【揣知卷】，通晓“天理有常、富不露相、知不示人密而测”，广结善缘、筑牢护城河，在世态变迁中稳操胜券。';
      diagnosisEn = 'A balanced and steady constitution requires cyclical alignment and acute intelligence radar. Prioritize Scroll I (Tact) and Scroll X (Deep Discernment) to sustain continuous flourishing through quiet observation.';
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
