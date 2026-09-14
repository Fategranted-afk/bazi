/**
 * BaZi Metaphysics Internationalization & Localization Engine (I18N)
 * Dual-language support: Chinese (zh) & English (en)
 */

const I18N = (function() {
  const dict = {
    zh: {
      // Header & Navigation
      app_title: "八字排盘与典籍研索系统",
      app_subtitle: "精确天文节气 · 内置《滴天髓》《三命通会》《穷通宝鉴》《子平真诠》《渊海子平》五大经典原著库",
      seal_canons: "双典集成",
      btn_now: "⏱ 此时此刻",
      btn_theme_dark: "🌙 暗夜",
      btn_theme_light: "☀️ 晨曦",

      // Primary View Navigation
      nav_view_home: "🏛️ 核心主盘与全相基底",
      nav_view_strategy: "👑 战略大局与六亲全息",
      nav_view_friction: "🧘 精神内耗与禅道心智",
      nav_view_luck: "⏳ 岁运推演 (大运 / 流年 / 流月 / 流日)",
      nav_view_canons: "📜 八典全库与经文细注",
      nav_view_iching: "☯️ 周易六十四卦 · 蓍草/金钱起卦研解",
      nav_view_synastry: "💞 双人合盘 · 婚恋与合伙博弈",
      seal_view_home: "主干命基",
      seal_view_strategy: "大局破局",
      seal_view_friction: "禅道心智",
      seal_view_luck: "动态时空",
      seal_view_canons: "八经汇通",
      seal_view_iching: "易道神机",
      seal_view_synastry: "双人博弈",
      btn_export_dossier: "👑 皇家线装战报 (A4 PDF)",
      btn_install_pwa: "📲 安装离线应用",
      pwa_offline_ready: "⚡ 离线就绪",
      alchemy_toggle_label: "✨ 东方气机流光",

      // Chrono-Navigator
      chrono_title: "百岁运势时空罗盘 (Lifelong Chrono-Navigator)",
      chrono_subtitle: "1~100岁连续平滑推演 · 能量活力、财富走势与岁运刑冲全局图谱",
      chrono_age_label: "岁运推移:",
      chrono_year_label: "公元历法:",
      chrono_energy_label: "能量活力:",
      chrono_wealth_label: "财富潮汐:",
      chrono_play: "▶️ 连续推演",
      chrono_pause: "⏸ 暂停推演",
      chrono_btn_current: "当前年龄",
      chrono_btn_golden: "巅峰高光",
      chrono_btn_transit: "大运交接",
      chrono_age_min: "1 岁 (初生)",
      chrono_age_max: "100 岁 (百岁)",
      chrono_panorama_badge: "1~100 岁全景",
      chrono_slider_hint: "滑动上方滑块或点击趋势图自由探索任意年份",
      chrono_directive_title: "流年战略锦囊与行持准则",

      // Synastry
      synastry_title: "双人合盘 · 婚恋合婚与商业合伙博弈战报",
      synastry_subtitle: "五行能量互补 · 灵魂共鸣 · 潜在刑冲雷区 · 财富合力与化解之道",
      synastry_mode_romantic: "💍 婚恋合婚 (夫妻/情侣)",
      synastry_mode_business: "🤝 商业合伙 (创始人/战略合伙)",
      synastry_person_a: "甲造命主 (主盘对象)",
      synastry_person_b: "乙造命主 (对比对象)",
      synastry_label_tag: "标识 / 姓名 (可选)",
      synastry_person_b_tag: "配偶 / 联席合伙人",
      synastry_label_ph: "姓名或角色",
      synastry_load_current: "📥 载入当前主盘",
      synastry_calc_btn: "🚀 生成双人合盘全息战报",
      synastry_score_label: "双人综合契合度",

      // Imperial Dossier
      dossier_modal_title: "皇家线装排盘战报 · 绝美珍藏册 (A4 级导出)",
      dossier_download_btn: "📥 直接下载 PDF 文件",
      dossier_print_btn: "🖨️ 系统打印 / 另存为 PDF",
      dossier_close_btn: "关闭预览",
      dossier_generating: "⏳ 正在编译 4 页皇家线装 A4 珍藏册 PDF，请稍候...",
      dossier_download_success: "✅ 皇家线装战报 PDF 已成功生成并开始下载！",
      dossier_download_fallback: "ℹ️ 已为您启动 A4 级高保真打印视图，请在弹出窗口中选择「另存为 PDF」即可保存文件。",
      dossier_watermark_text: "钦天监御制命盘密卷",
      dossier_imperial_title: "钦天监 御制天机全相精装战报",
      dossier_subtitle: "滴天髓 · 三命通会 · 穷通宝鉴 · 子平真诠 · 渊海子平 八典集成典藏",
      dossier_vol1: "卷一 · 战略大局与破局胜负手",
      dossier_vol2: "卷二 · 六亲全息深度侧写",
      dossier_vol3: "卷三 · 禅道心智与传世解脱方策",

      sec_strategy_title: "全新独立大相与破局战役 · 帕累托 20% 统帅全息图谱",
      sec_strategy_subtitle: "深度融汇生杀破局战略胜负手、六亲深度侧写（父母/配偶/子女四维全息）、宏观时空场能共振与终身不败立身三则",
      sec_friction_view_title: "原厂心理使用说明书 · 精神内耗深度解构与禅道至高心法",
      sec_friction_view_subtitle: "八大典籍正统经文细注 · 极端压力触发开关 · 出厂自救降维心法 · 五行微习惯",
      seal_view_friction: "原厂说明",
      nav_btn_friction: "原厂说明",
      lbl_back_home: "返回核心主盘",
      portal_strategy_title: "战略大局与六亲全息图谱",
      portal_strategy_desc: "帕累托 20% 关键枢纽 · 生杀破局 · 六亲深度侧写 · 终身不败三则",
      portal_friction_title: "原厂心理使用说明书",
      portal_friction_desc: "八大典籍出厂心法 · 极端压力触发开关 · 出厂自救降维心法 · 五行微习惯",

      // 14-Character Dynamic Energy Synthesis
      fc_title: "十四字时空全息能量统揽",
      fc_subtitle: "原局8字 + 大运2字 + 流年2字 + 流月2字 · 五行气机重置 · 日元强弱动态位移 · 现实破局战术全息",
      fc_badge: "14字能量场",

      // Operational Playbook
      playbook_title: "当季与本年现实破局罗盘",
      playbook_subtitle: "年度核心主线攻坚 · 四季节律能量潮汐 · 即时决策防火墙与雷区熔断",
      playbook_badge: "现实破局",
      playbook_tab_mainline: "年度主线战略",
      playbook_tab_seasons: "四季节律能量表",
      playbook_tab_safeguards: "即时决策防火墙",
      playbook_strategic_tone_lbl: "年度战略定调",
      playbook_mission_lbl: "核心主线使命",
      playbook_priorities_lbl: "三大核心必胜战役",
      playbook_deprioritize_lbl: "坚决断舍离之雷区",
      playbook_tide_action_do: "宜：最佳进取",
      playbook_tide_action_avoid: "忌：绝对避让",

      // Ecological Resonance
      eco_resonance_title: "地理方位与组织生态匹配仪",
      eco_resonance_subtitle: "五行城市方位能量场共振 · 体制/初创/合伙/独立组织生态位诊断与反内耗归因",
      eco_resonance_badge: "生态定位",
      eco_tab_geographic: "城市与方位能量场",
      eco_tab_workplace: "组织生态位与反内耗归因",
      eco_geo_best_lbl: "最优主场方位",
      eco_geo_cities_lbl: "代表都市群",
      eco_geo_resonance_lbl: "气场共振机制",
      eco_geo_synergy_lbl: "发展协同指引",
      eco_org_resonance_lbl: "生态契合机理",
      eco_org_friction_lbl: "反内耗卡点归因",
      eco_org_survival_lbl: "破局自处指南",

      // Time Dynamics & Macro-Energy 5-Tier Report
      td_title: "时间动力学与宏观能量 · 五阶递进深度战报",
      td_subtitle: "认知原型与心理赦免 · 格局生态与反弹上限 · 十年大运势能 · 流年攻守定调 · 12月阻抗热力图与高风险敏感日",
      td_badge: "全相白皮书",
      td_pardon_badge: "心智防御与心理赦免",
      td_ch1_title: "第壹章 · 底层常数与心理认知原型",
      td_ch1_desc: "心智模型（博弈/平台/技术）· 偏枯五行情绪盲区与应激防御机制",
      td_ch2_title: "第贰章 · 格局生态与人生上限",
      td_ch2_desc: "天赋生态位（先锋/军师/守护者）· 逆境反弹弹性（病药说）· 四大价值变现路径",
      td_ch3_title: "第叁章 · 十年大运全景周期走势",
      td_ch3_desc: "宏观势能折线走势 · 顺风扩张 vs 蓄力筑底 · 关键交脱运防震节点",
      td_ch4_title: "第肆章 · 当下流年转折与动静决策",
      td_ch4_desc: "攻守姿态三阶定调（全面进攻/轻试水/极度防守）· 合同/职场/现金流三大风控防火墙",
      td_ch5_title: "第伍章 · 周期风险雷达与敏感窗口",
      td_ch5_desc: "12节令月度阻抗热力图（Heatmap）+ 全年 20~30 个高风险敏感日精准避险指南",
      td_heatmap_header: "12 节令月度阻抗热力矩阵 (0.1 ~ 1.0 能量阻抗系数)",
      td_sensitive_header: "全年高风险敏感日精准预警清单 (天克地冲 / 提纲破动 / 三刑避险)",
      td_sensitive_hint: "精准标记与本命日柱、月令提纲、太岁岁君产生剧烈刑冲之日期，避开重大签约与正面冲突",
      td_monetization_title: "四大价值变现路径权重排序",
      td_resilience_label: "系统逆境反弹弹性指数",
      td_transition_warning: "交脱大运防震法则",

      // Spatial Feng Shui & Ziping 100 Score & Tian Ji Hexagrams
      nav_view_fengshui: "🏡 空间风水指南 (实操十策)",
      seal_view_fengshui: "空间开运",
      portal_card8_title: "空间风水指南",
      portal_card8_desc: "延年聚财貔貅鼎 · 龙龟双铃化煞 · 贪合忘冲六合生肖 · 缺角泰山石 · 洛书吉数",
      portal_fengshui_title: "空间风水指南实操十策",
      portal_fengshui_desc: "延年聚财鼎 · 龙龟双铃化煞 · 贪合忘冲六合生肖 · 缺角泰山石 · 洛书吉数",
      nav_fengshui: "空间风水",
      fengshui_title: "八字开运与空间风水指南",
      fengshui_subtitle: "基于原局五行用神与生克刑冲，量身定制十大实操空间调候与风水器物布局",
      card_fengshui_title: "空间风水改运专属建议",
      card_fengshui_desc: "依本命喜用神精确定位财位、文昌位、天乙贵人位与化煞法门",
      ziping_title: "子平百分制生克量化评分",
      ziping_subtitle: "天干各10分（40分），月支35分，日支15分，年时支各5分；辰戌丑未杂气折算；判定命格强弱与清浊高低",
      four_pillars_hex_title: "子平四柱命卦印证",
      four_pillars_hex_subtitle: "天地数起先天卦与后天卦 · 倪海厦《天纪》64卦秘传全解与岁运飞爻",
      four_pillars_hex_age_label: "当前推演岁数",
      fengshui_banner_title: "八字开运与空间风水指南 · 实操调理十策",
      fengshui_banner_desc: "依本命八字喜用五行、三元九运个人命卦与原局刑冲格局，定制十项实操改运器物与空间气场调理锦囊：从延年聚财大阵、龙龟双铃化煞、贪合忘冲生肖佩戴，到泰山石补缺、洛书吉数与积德行善实修。",
      seal_ziping_score: "子平量化",
      sec_ziping_score_title: "子平 100 分制生克量化评分与格局高低",
      ziping_score_desc: "天干40分（日干+10永恒固本）· 月令35分 · 日支15分 · 年时支各5分 · 辰戌丑未杂气精准折算 · 判定四大命格与五大专旺",
      ziping_total_score: "子平总得分",
      ziping_stems_score: "天干得分 (满分40)",
      ziping_branches_score: "地支得分 (满分60)",
      ziping_pattern_category: "命格大类",
      ziping_pattern_tier: "命格层次",
      ziping_favorable_gods: "喜用神",
      ziping_unfavorable_gods: "忌仇神",
      ziping_proximity_title: "用神近距离护卫检验 (日支15 > 月干10 > 时干10)",
      ziping_month_support: "月令提纲生扶力",
      seal_four_pillars_hex: "天纪易数",
      sec_four_pillars_hex_title: "四柱命卦推演 · 倪海厦《天纪》六十四卦全相秘解",
      four_pillars_hex_desc: "天数地数合化先天卦（前半生）与后天卦（后半生）· 阳爻管9年/阴爻管6年岁运流转 · 值年流年卦与玉上有光天机解密",
      label_current_age: "推演虚岁:",
      xian_tian_title: "先天命卦 (前半生基业)",
      hou_tian_title: "后天命卦 (后半生跃升)",
      zhi_nian_title: "值年流年卦 (当年运势)",
      riddle_title: "玉上有光 · 字谜与天机解密",
      fengshui_item1_title: "延年位四方聚财大阵 (4貔貅 + 1鼎)",
      fengshui_item2_title: "对门大龙龟化煞与随身用神小龙龟护体",
      fengshui_item3_title: "贪合忘冲秘法：六合生肖佩戴与枕下安镇",
      fengshui_item4_title: "座驾专属化煞：汽车后视镜纯铜双铃铛法门",
      fengshui_item5_title: "房屋太极补缺：泰山石敢当填补八卦缺角",
      fengshui_item6_title: "三合局天心十道生肖大阵 (生旺库引气大阵)",
      fengshui_item7_title: "催旺三宝：催贵人、催文昌与催真桃花辨识",
      fengshui_item8_title: "河图洛书吉数、选楼层、车牌号与商业拓客大吉全览",
      fengshui_item9_title: "无上形而上改运之基：积德行善三大实修法门",
      fengshui_item10_title: "户型气场综合调理评级与风水总诀",

      // Factory Mind Manual
      manual_nav_btn: "原厂说明",
      manual_seal: "原厂说明",
      manual_tab_specs: "出厂核心参数",
      manual_tab_canons: "八大经典经文细注",
      manual_tab_triggers: "极端压力触发开关",
      manual_tab_protocols: "出厂自救降维心法",
      manual_tab_habits: "五行能量微习惯",
      manual_tab_zendao: "禅道至高解脱专栏",
      manual_specs_heading: "出厂核心心智规格说明 (Factory Mindset Specifications)",
      manual_canons_heading: "八大典籍正统心智出厂细注 (Eight Classical Canons Scripture Manual)",
      manual_triggers_heading: "极端压力触发开关与认知红线 (Stress Trigger Signatures & Red Lines)",
      manual_protocols_heading: "出厂自救三阶降维心法 (Three-Level Factory Emergency De-escalation Protocols)",
      manual_habits_heading: "每日五行能量微习惯 (Daily Five-Element Energy Micro-Habits)",

      // Dynamic Calculation Progress Bar
      calc_progress_title: "乾坤气象 · 全相智能排盘推演中",
      calc_progress_subtitle: "正在调用东方全息大模型并通判八大典籍古籍库",
      calc_stage_1: "四柱八字乾坤排盘 · 纳音神煞五行量化",
      calc_stage_2: "八大经典通判互参 · 帕累托2:8核心枢纽剖析",
      calc_stage_3: "时空大运罗盘推演 · 当季本年现实破局定位",
      calc_stage_4: "原厂心理说明书构筑 · 出厂参数与自救心法",
      calc_stage_5: "乾坤既定 · 呈现全相看板",
      calc_step_1: "① 四柱",
      calc_step_2: "② 八典",
      calc_step_3: "③ 罗盘",
      calc_step_4: "④ 心法",
      calc_step_5: "⑤ 乾坤",
      calc_synastry_title: "乾坤互参 · 双人合盘深度推演中",
      calc_synastry_subtitle: "通判八大经典合盘法则 · 婚恋合伙博弈与禅道智慧调和",
      calc_chrono_title: "时空罗盘 · 百岁运势与现实破局深度推演中",
      calc_chrono_subtitle: "推演百岁精微双曲线 · 当季现实破局攻坚与地理生态位共振",

      portal_talisman_qiankun: "乾坤",
      portal_seal_astronomy: "钦天玄览",
      portal_badge_version: "v3.0 宏道全典",
      portal_seal_canons: "八典汇通",
      portal_hero_title: "八字命盘与古典玄览系统",
      portal_hero_subtitle: "探微天地三才，观照阴阳大化 · 汇通《滴天髓》《三命通会》《穷通宝鉴》《子平真诠》《渊海子平》八大经典原著库与周易六十四卦",
      portal_presets_title: "🌟 命盘速选典范 (Archetype Presets)",
      portal_presets_sub: "点击一键载入经典格局命盘，即时动态演算并预览",
      preset_leader: "盛世统帅 · 阳刃七杀",
      preset_leader_badge: "乾造 · 阳木",
      preset_leader_desc: "1990-06-20 · 乾造 · 阳木生于午月，身旺抗杀，权威赫奕",
      preset_business: "商业奇才 · 食神生财",
      preset_business_badge: "坤造 · 阳土",
      preset_business_desc: "1988-11-18 · 坤造 · 戊土生于亥月，食伤生财，商略纵横",
      preset_artist: "绝世文华 · 金水伤官",
      preset_artist_badge: "乾造 · 阴金",
      preset_artist_desc: "1995-10-24 · 乾造 · 辛金生于戌月，金清水白，文采斐然",
      preset_strategist: "稳若磐石 · 杀印相生",
      preset_strategist_badge: "坤造 · 杀印",
      preset_strategist_desc: "1984-03-15 · 坤造 · 甲木得令逢印，沉稳谋局，基业常青",
      preset_now: "此时此刻 · 当下气运",
      preset_now_badge: "当下 · 此时",
      preset_now_desc: "动态截取当下天文时空与节气，测算即刻行运",
      portal_form_card_title: "📜 八字命造输入 (Natal Configuration)",
      portal_preview_title: "⚡ 命盘即时微预览 (Live Natal Preview)",
      portal_preview_hint: "修改参数或选择典范，命盘干支与元神即刻动态演化",
      portal_calc_btn: "起盘排盘 · 洞悉命元天机 ➔",
      portal_adv_toggle_show: "⚙️ 展开天文经度与真太阳时高级校正",
      portal_adv_toggle_hide: "⚙️ 收起天文经度与真太阳时高级校正",
      portal_showcase_title: "🏛️ 乾坤大观 · 七大核心研索维度",
      portal_showcase_subtitle: "起盘后即刻开启全景推演看板",
      portal_card1_title: "核心四柱与五行雷达",
      portal_card1_desc: "精确干支神煞、纳音五行、日主旺衰量化与动态形变雷达图。",
      portal_card2_title: "战略大局与帕累托20%",
      portal_card2_desc: "锁定决定80%运势走向的20%主导枢纽，解构破局战役与六亲全息侧写。",
      portal_card3_title: "原厂心理使用说明书",
      portal_card3_desc: "八大典籍出厂心法 · 极端压力触发开关 · 出厂自救降维心法 · 五行微习惯",
      portal_card4_title: "百岁运势时空罗盘",
      portal_card4_desc: "1~100岁连续平滑推演，精力潮汐、财富高光与天克地冲提前防御。",
      portal_card5_title: "八典全库经文细注",
      portal_card5_desc: "滴天髓、三命通会、穷通宝鉴、子平真诠等传世古籍联机研索。",
      portal_card6_title: "周易六十四卦筮法",
      portal_card6_desc: "大衍筮法、三铜钱六掷与梅花易数，朱熹正统断卦七法通幽洞微。",
      portal_card7_title: "双人合盘契合度博弈",
      portal_card7_desc: "婚恋合婚与商业合伙，五行互补、刑冲雷区与契约防火墙全维评估。",
      portal_zen_quote: "“欲识三元万法宗，先观帝载与神功。坤元合德机缄通，五气顺行天地同。” —— 《滴天髓》",
      portal_preview_year: "年柱",
      portal_preview_month: "月柱",
      portal_preview_day: "日柱 (元神)",
      portal_preview_hour: "时柱",
      portal_preview_ready: "干支演算就绪 · 点击下方按钮开启分析全盘",
      portal_preview_solar_offset: "太阳时偏差: ",
      dashboard_active_chart_title: "当前受测命盘",
      dashboard_summary_dm: "元神日主：",
      dashboard_summary_pattern: "主导格局：",
      dashboard_summary_solar: "真太阳时：",
      btn_edit_natal: "✏️ 重新排盘 / 修改八字",
      btn_portal_nav: "⛩️ 命理门庭",
      seal_climate: "穷通宝鉴 / 滴天髓",
      badge_five_pillar_synergy: "五柱同参",
      iching_csprng_badge: "☯️ 大衍筮法 · CSPRNG",
      iching_select_placeholder: "📖 六十四卦速查全览...",
      coin_throw_initial: "掷出第 1 爻 (初爻)",
      pareto_eight_canons_tag: "《滴天髓》·《穷通》·《真诠》·《三命》·《渊海》·《神峰》·《玉照》·《李虚中》",

      // Form Inputs
      lbl_birth_date: "公历出生日期 (阳历)",
      lbl_birth_time: "出生时间 (当地钟表时)",
      lbl_gender: "造化属性 (性别)",
      opt_qian: "乾造 (男命)",
      opt_kun: "坤造 (女命)",
      lbl_city: "全球出生地区/城市",
      btn_calc: "起盘排盘",

      // Advanced Settings
      chk_true_solar: "开启真太阳时校正 (天文均时差 + 经度偏差)",
      lbl_timezone: "标准时区:",
      lbl_longitude: "经度 (°E / 西经为负):",
      chk_late_rat: "夜子时直接换次日柱 (23点后算次日)",
      solar_ready: "真太阳时与经度校正已就绪",
      calc_perf: "⚡ 毫秒级极速排盘",
      solar_term_pending: "节气与节令星排盘中",

      // Four Pillars
      sec_four_pillars: "四柱命盘 (Four Pillars)",
      sub_four_pillars: "以立春与12节气严格交节为准",
      hidden_stems_title: "地支藏干",
      hidden_stems_god: "十神分气",
      nayin_prefix: "纳音：",

      // Day Master & Five Elements
      sec_dm_core: "本命元神 / 日主",
      dm_seal: "四柱核心",
      dm_spirit_desc: "日干代表命主自身的精神内核与本源禀赋",
      dm_essence_label: "五行主气：",
      dm_essence_val: "木主仁，火主体，土主信，金主义，水主智",
      dm_core_principle: "论命纲领：“先观提纲月令，次看日元衰旺，分清用神格局，方决一世吉凶。”",
      sec_elements_dist: "五行能量分布 (Five Elements Distribution)",
      elements_weighted_note: "天干透干与地支藏干综合加权",

      // Grand Portrait Header
      seal_five_canons: "五经总决",
      sec_portrait_title: "五经融贯 · 命理人物全息画像与格局总决",
      portrait_desc: "融汇《滴天髓》《三命通会》《穷通宝鉴》《子平真诠》《渊海子平》五经精髓 · 智能断格、定旺衰、判调候与全息人生画像",

      // Vigor & Climate Dashboard
      vigor_score_title: "⚖️ 日元生旺衰三维量化",
      vigor_ready_badge: "量化就绪",
      climate_regulator_title: "❄️ 气候提纲与调候用神",
      climate_primary_label: "首要调候用神",
      climate_secondary_label: "次要调候用神",
      climate_desc_label: "【气候提纲】",
      climate_fav_label: "相助喜神：",
      climate_taboo_label: "忌见偏枯：",

      // Patterns & Weights
      sec_patterns_title: "🏷️ 命盘确立格局 · 四维实战精解与能量占比透视",
      patterns_weight_note: "(含各格能量占比权重，所列格局总占比 > 85%)",
      patterns_bar_title: "📊 命盘格局能量权重透视分布",
      patterns_core_line: "已超85%核心主导线",
      patterns_subnote: "涵盖本命主要人格、才华天赋与事业气象，余量为潜隐微气象",
      latent_energy_label: "潜隐杂气余量: ",
      pat_verse_head: "【古赋断诀】",
      pat_meaning_head: "💡 1. 格局含义 (是什么意思)",
      pat_source_head: "📖 2. 典籍出处 (出自书里哪里)",
      pat_formation_head: "⚖️ 3. 成格条件与本命验证 (怎样成的格局)",
      pat_usage_head: "🎯 4. 实战用法与喜忌 (怎样使用)",
      pat_weight_head: "📊 5. 本命能量占比与影响力评估",
      pat_basis_head: "成格赋能依据：",

      // Persona
      sec_persona_title: "👤 五经全息“命理人物画像”",
      persona_subnote: "基于本命格局与气象的现代人生与发展蓝图",
      persona_psy_title: "🧠 性格特质与心性模型 (Psychological Blueprint)",
      persona_career_title: "💼 才华天赋与事业方向 (Career & Talent Blueprint)",
      persona_wealth_title: "💰 财富格局与进财动力 (Wealth Dynamics)",
      persona_advice_title: "🧘 人生修身与行运锦囊 (Strategic Life Coaching)",

      // Pareto 80/20 Core Synthesis
      sec_pareto_title: "👑 八经全盘核心画像 · 帕累托 20% 关键枢纽全相分析",
      seal_pareto: "80/20八经全相",
      pareto_subnote: "八典全息汇通，过滤80%平庸细枝末节噪声，锁定决定命主80%运势走向的20%核心枢纽，赋能夫妻、子女、父母六亲全息与宏观时代场能交互",

      // Zhou Yi (I Ching) 64 Hexagrams
      iching_banner_title: "周易文王六十四卦 · 蓍草金钱起卦研解",
      iching_banner_desc: "融汇大衍筮法（老阴/少阳/少阴/老阳正统概率）、三铜钱六掷法、梅花易数时空起卦与六十四卦全典。本卦变卦动爻齐参，解构大义、事业、财智、姻缘与趋避锦囊。",
      iching_query_placeholder: "心念所感，所测何事？（如：近期创业合伙前景、重大职业转型决策、家庭情感走势...）",
      iching_btn_instant: "一键神机起卦 (大衍筮法)",
      iching_btn_coin: "三铜钱摇卦 (六掷成卦)",
      iching_btn_time: "梅花易数时间卦 (当下气运)",
      coin_arena_title: "🪙 乾隆通宝 · 三铜钱六掷摇卦实录",
      btn_reset_coin: "重新开始",
      iching_init_title: "易者，变也。穷则变，变则通，通则久。",
      iching_init_desc: "请诚心默想心中所求，点击上方【一键神机起卦】、【三铜钱摇卦】或【梅花易数时间卦】，感通天地阴阳造化。",
      iching_canonical_sec_title: "📜 文王卦辞与先秦经文全典 (Canonical Scriptures)",
      iching_modern_sec_title: "💡 周易现代实战全相研解 (Modern Multi-Dimensional Analysis)",
      seal_modern_iching: "极深研几",

      // Defects
      sec_defects_title: "⚠️ 命主缺陷、心性盲区与败局暗礁深度透视",
      defects_subnote: "(直面性格死穴、职场雷区、商业败局与五行偏枯，附破局绝密解药)",

      // Mental Friction
      sec_friction_title: "精神内耗专项检测与实战彻底改善方案",
      friction_index_label: "内耗指数：",
      friction_root_head: "【本命核心内耗根源剖析】",
      friction_trigger_head: "八字触发特征：",

      // Remedy Guide
      sec_remedy_title: "🌿 命理调补与改运总决 · 身弱培补与身强疏导实战指南",
      remedy_subnote: "(涵盖五行理气、心智模型、起居习惯、职场商业全维改善攻略)",
      tab_tailored: "🎯 本命定向调补方案",
      tab_comparison: "⚖️ 身弱 vs 身强 完整对照总决",


      // Luck & Fortune Cycles (大运/流年/流月/流日)
      sec_luck_title: "岁运流转 · 大运流年流月流日全阶推演系统",
      sec_luck_subtitle: "五柱同参 · 洞察十年大运、当前太岁流年、十二节气流月与流日交感吉凶",
      lbl_luck_direction: "大运流转方向:",
      lbl_luck_start_age: "交运起始时刻:",
      tab_decade_title: "1. 十年大运排盘 (10-Year Major Decades)",
      tab_annual_title: "2. 流年十载透视 (Annual Transit Years)",
      tab_monthly_title: "3. 十二节令流月 (12 Solar Months)",
      tab_daily_title: "4. 流日测算与五柱同参 (Daily Alignment & 5-Pillar Synergy)",
      tab_decade_hint: "(点击任意大运卡片，下联动展现该步大运10年流年)",
      tab_annual_hint: "(点击流年卡片，联动查看该年12节令流月)",
      tab_monthly_hint: "(点击流月卡片，与流日联动)",
      lbl_select_date: "选择测算流日:",
      btn_today: "⏱ 此时今日",
      btn_current_year: "🎯 当前太岁",
      pillar_decade: "大运柱",
      pillar_annual: "流年柱",
      pillar_monthly: "流月柱",
      pillar_daily: "流日柱",
      th_dimension: "维度 / 柱别",
      th_natal_year: "本命年柱",
      th_natal_month: "本命月柱",
      th_natal_day: "本命日柱 (元神)",
      th_natal_hour: "本命时柱",
      interactions_title: "🌌 岁运同参 · 刑冲合害交感综评与行运指南",
      five_pillar_matrix_title: "五柱同参全息干支盘 (原局四柱 + 大运 + 流年 + 流月 + 流日)",
      lbl_fortune_evaluation: "岁运吉凶深层解构与趋避指南",
      lbl_fortune_detail_hint: "（点击任意大运、流年、流月卡片，即可深度查看气象本义、吉中防患与避坑戒律）",
      fortune_tab_decade: "十年大运吉凶",
      fortune_tab_annual: "流年太岁吉凶",
      fortune_tab_monthly: "节令流月吉凶",
      fortune_tab_daily: "流日精微吉凶",
      lbl_transit_meaning: "气象本义与深层课题",
      lbl_good_pitfalls: "吉中防患 · 居安思危",
      lbl_bad_taboos: "避坑戒律 · 切勿作为",
      lbl_action_guidance: "实操攻略与行运法门",
      age_col: "年龄",
      year_col: "年份",
      god_col: "十神",
      nayin_col: "纳音",
      // Canons Tabs
      tab_sanming: "📜 《三命通会》",
      tab_sanming_badge: "日时四维精断",
      tab_qiongtong: "❄️ 《穷通宝鉴》",
      tab_qiongtong_badge: "月令调候用神",
      tab_ziping: "⚖️ 《子平真诠》",
      tab_ziping_badge: "格局成败救应",
      tab_ditiansui: "🌌 《滴天髓》",
      tab_ditiansui_badge: "天干地支理气",
      tab_yuanhai: "🏛️ 《渊海子平》",
      tab_yuanhai_badge: "继善喜忌赋文",
      tab_shenfeng: "🏔️ 《神峰通考》",
      tab_shenfeng_badge: "病药雕枯绝学",
      tab_yuzhao: "🪞 《玉照定真经》",
      tab_yuzhao_badge: "宫位六亲直断",
      tab_lixuzhong: "🎵 《李虚中命书》",
      tab_lixuzhong_badge: "三元纳音音律",
      tab_search: "🔍 八典全库搜索",

      // Canons Contents
      canon_sanming_auto: "当前命盘直配断语 (日柱与时柱组合 · 包含含义、出处、成格、用法四维详解)：",
      canon_sanming_exp_title: "📖 查阅《三命通会》六十甲子日时全断 (720种组合)",
      canon_sanming_exp_desc: "选择任意日柱与时辰，即刻调阅万民英在卷八、卷九中的原著断法与四维详解。",
      btn_query_canon: "调阅经典",
      canon_sm_patterns: "《三命通会》经典格局定要",

      canon_qiongtong_auto: "当前命盘月令调候直配 (日元生于月令之气候平衡法门)：",
      canon_qiongtong_exp_title: "❄️ 《穷通宝鉴 / 栏江网》十二月令调候用神全库检索",
      canon_qiongtong_exp_desc: "自由选择任意天干日元与月令地支，查看大自然气候寒暖燥湿对人生命运的调候秘诀：",
      btn_query_qt: "调阅调候",

      canon_ziping_auto: "当前格局定性与沈孝瞻成败救应分析：",
      canon_ziping_exp_title: "⚖️ 《子平真诠》八大正格成格、破格与救应法则",
      canon_ziping_exp_desc: "清·沈孝瞻所著，详析何谓“成中有败”、何谓“败中有救”的命理法则：",

      canon_dts_auto: "当前命盘日主真诠 (《滴天髓》天干论)：",
      canon_dts_stems_title: "🌿 十天干专论快速研习",
      canon_dts_stems_desc: "点击任意天干，查阅京图原诗、刘伯温注解与任铁樵实践心得：",
      canon_dts_chapters_title: "《滴天髓》通微与形象精要篇章",

      canon_yuanhai_title: "🏛️ 宋·徐大升《渊海子平》祖传开山赋文",
      canon_yuanhai_desc: "《渊海子平》为子平命理祖宗经典，囊括《继善篇》、《喜忌篇》等千古真言：",
      canon_yuanhai_gods_title: "十神原始性情与玄机",

      canon_shenfeng_auto: "当前命盘病药绝学匹配 (明·张神峰《神峰通考》)：",
      canon_shenfeng_treatises_title: "🏔️ 《神峰通考》核心绝学专论 (病药说 · 雕枯旺弱论 · 动静说)",
      canon_shenfeng_treatises_desc: "明·张神峰著，以“有病方为贵，无伤不是奇”打破俗见，阐发命理至高突破法门：",

      canon_yuzhao_auto: "当前四柱宫位六亲直断 (晋·郭璞著 / 宋·徐子平注)：",
      canon_yuzhao_aphorisms_title: "🪞 《玉照定真经》宫位六亲休咎与伤灾形貌经文",
      canon_yuzhao_aphorisms_desc: "中国现存最早四柱宫位直断法经典，详论夫妻相合、子嗣贤愚与祖荫福泽：",

      canon_lixuzhong_auto: "当前命盘三元禄命身与环境场能共振 (唐·李虚中著)：",
      canon_lixuzhong_chapters_title: "🎵 《李虚中命书》三元禄命与纳音音律气象",
      canon_lixuzhong_chapters_desc: "唐代命学开山宗师李虚中著，详析天元禄、地元命、人元身与现代地理时空交互：",

      search_title: "八大典籍万象全库联合检索系统",
      search_desc: "一键通搜《三命通会》《滴天髓》《穷通宝鉴》《子平真诠》《渊海子平》《神峰通考》《玉照定真经》《李虚中命书》八大名著，输入术语、格局或断语即刻全文检索。",
      search_placeholder: "输入搜索词，如：病药说、玉照、三元禄、伤官吐秀、丙火、调候、救应...",
      btn_search: "联合检索",
      search_init_prompt: "请输入关键词进行联合检索。",

      // Gender Dynamics
      gender_dynamics_title: "男女命差异 · 乾坤造化辨析",
      gender_dynamics_male: "乾造 (男命)",
      gender_dynamics_female: "坤造 (女命)",

      // Footer
      footer_title: "八字排盘与典籍研索系统 · 命理八大经典名著集成",
      footer_citations: "引用文献：《三命通会》·《滴天髓》·《穷通宝鉴》·《子平真诠》·《渊海子平》·《神峰通考》·《玉照定真经》·《李虚中命书》"
    },

    en: {
      // Header & Navigation
      app_title: "BaZi Charting & Classical Canons System",
      app_subtitle: "Precise Astronomical Solar Terms · Built-in Di Tian Sui, San Ming Tong Hui, Qiong Tong, Zi Ping & Yuan Hai",
      seal_canons: "5 Classics",
      btn_now: "⏱ Current Time",
      btn_theme_dark: "🌙 Dark",
      btn_theme_light: "☀️ Light",

      // Primary View Navigation
      nav_view_home: "🏛️ Natal Chart & Core Blueprint",
      nav_view_strategy: "👑 Grand Strategy & Kinship Hologram",
      nav_view_friction: "🧘 Mental Friction & Zen-Dao Mastery",
      nav_view_luck: "⏳ Transit Cycles (Decade / Year / Month / Day)",
      nav_view_canons: "📜 Eight Classical Canons & Commentaries",
      nav_view_iching: "☯️ I Ching 64 Hexagrams Divination",
      nav_view_synastry: "💞 Synastry & Partner Compatibility",
      seal_view_home: "Core Base",
      seal_view_strategy: "Strategy",
      seal_view_friction: "Zen-Dao",
      seal_view_luck: "Transits",
      seal_view_canons: "8 Canons",
      seal_view_iching: "I Ching Oracle",
      seal_view_synastry: "Synastry",
      btn_export_dossier: "👑 Imperial Dossier (A4 PDF)",
      btn_install_pwa: "📲 Install PWA",
      pwa_offline_ready: "⚡ Offline Ready",
      alchemy_toggle_label: "✨ Ambient Qi Flux",

      // Chrono-Navigator
      chrono_title: "Lifelong Chrono-Navigator (Age 1-100 Interactive Fortune Compass)",
      chrono_subtitle: "Continuous year-by-year fortune trajectory · Vitality tides, wealth cycles & transit clash alerts",
      chrono_age_label: "Age Focus:",
      chrono_year_label: "Calendar Year:",
      chrono_energy_label: "Vitality Index:",
      chrono_wealth_label: "Wealth Tide:",
      chrono_play: "▶️ Auto Play",
      chrono_pause: "⏸ Pause",
      chrono_btn_current: "Current Age",
      chrono_btn_golden: "Peak Season",
      chrono_btn_transit: "Decade Shift",
      chrono_age_min: "Age 1 (Infancy)",
      chrono_age_max: "Age 100 (Centenarian)",
      chrono_panorama_badge: "Age 1-100 Panorama",
      chrono_slider_hint: "Drag the slider above or click the trendline to explore any year",
      chrono_directive_title: "Actionable Yearly Directive & Strategic Guidance",

      // Synastry
      synastry_title: "Synastry & Partner Compatibility Dossier",
      synastry_subtitle: "Elemental symbiosis, soul resonance, clash vectors, financial trust & mutual remedies",
      synastry_mode_romantic: "💍 Romantic & Marriage Match",
      synastry_mode_business: "🤝 Business Co-Founders & Strategic Partnership",
      synastry_person_a: "Subject A (Primary Chart)",
      synastry_person_b: "Subject B (Counterpart)",
      synastry_label_tag: "Label / Name (Optional)",
      synastry_person_b_tag: "Spouse / Co-founder",
      synastry_label_ph: "Name or role",
      synastry_load_current: "📥 Load From Primary Chart",
      synastry_calc_btn: "🚀 Generate Synastry Compatibility Dossier",
      synastry_score_label: "Overall Compatibility Synergy",

      // Imperial Dossier
      dossier_modal_title: "Imperial Thread-Bound Collector's Dossier (A4 Export)",
      dossier_download_btn: "📥 Direct Download PDF",
      dossier_print_btn: "🖨️ Print / Save as PDF",
      dossier_close_btn: "Close Preview",
      dossier_generating: "⏳ Compiling 4-Page Imperial A4 PDF Dossier...",
      dossier_download_success: "✅ Imperial PDF Dossier generated and download started!",
      dossier_download_fallback: "ℹ️ High-fidelity A4 print view ready. Select 'Save as PDF' in the print dialog.",
      dossier_watermark_text: "IMPERIAL CELESTIAL ARCHIVE",
      dossier_imperial_title: "Imperial Astronomical Bureau Master Metaphysics Dossier",
      dossier_subtitle: "Synthesized from Di Tian Sui, San Ming, Qiong Tong, Zi Ping & Yuan Hai Canons",
      dossier_vol1: "Volume I: Grand Strategy & Decisive Campaigns",
      dossier_vol2: "Volume II: 4D Kinship Holographic Profiles",
      dossier_vol3: "Volume III: Zen-Dao Mastery & Ultimate Liberation",

      sec_strategy_title: "Grand Strategy & Breakthrough Campaign · Pareto 20% Sovereign Hologram",
      sec_strategy_subtitle: "Synthesizing decisive breakthrough campaigns, 4D kinship holographic depth profiles (Parents/Spouse/Children), era resonance & lifetime golden rules",
      sec_friction_view_title: "Original Factory-Default Mind Manual · Rumination Deconstruction & Zen-Dao Transcendence",
      sec_friction_view_subtitle: "Grounded in Eight Classical Canons & Zen Wisdom · Stress Triggers · Factory Emergency Reset · 5-Element Micro-Habits",
      seal_view_friction: "MIND MANUAL",
      nav_btn_friction: "Mind Manual",
      lbl_back_home: "Back to Natal Chart",
      portal_strategy_title: "Grand Strategy & Kinship Hologram",
      portal_strategy_desc: "Pareto 20% Sovereign Fulcrum · Breakthrough Campaign · 4D Kinship · 3 Golden Rules",
      portal_friction_title: "Original Factory-Default Mind Manual",
      portal_friction_desc: "Eight Classical Canons · Stress Triggers · 3-Level Emergency Reset · 5-Element Micro-Habits",

      // 14-Character Dynamic Energy Synthesis
      fc_title: "14-Character Dynamic Energy Synthesis",
      fc_subtitle: "Natal 8 + Decade 2 + Annual 2 + Month 2 · 5-Element Shift · Day Master Rebalance · Tactical Directives",
      fc_badge: "14-Char Energy Field",

      // Operational Playbook
      playbook_title: "Current Year & Season Operational Playbook",
      playbook_subtitle: "Annual Strategic Mainline · 4-Season Energy Tides · Real-Time Decision Safeguards",
      playbook_badge: "Operational Flow",
      playbook_tab_mainline: "Annual Mainline",
      playbook_tab_seasons: "Seasonal Energy Tides",
      playbook_tab_safeguards: "Decision Safeguards",
      playbook_strategic_tone_lbl: "Strategic Stance",
      playbook_mission_lbl: "Mainline Strategic Mission",
      playbook_priorities_lbl: "Top 3 Pivotal Campaigns",
      playbook_deprioritize_lbl: "Strict Non-Priorities to Discard",
      playbook_tide_action_do: "Optimal Action",
      playbook_tide_action_avoid: "Strict Avoidance",

      // Ecological Resonance
      eco_resonance_title: "Geographic & Ecological Resonance Meter",
      eco_resonance_subtitle: "Five-Element City Energy Resonance · Workplace Ecosystem Diagnostic & Anti-Friction Strategy",
      eco_resonance_badge: "Ecosystem Fit",
      eco_tab_geographic: "City & Cardinal Field",
      eco_tab_workplace: "Workplace Ecosystem Diagnostic",
      eco_geo_best_lbl: "Top Resonant Geolocation",
      eco_geo_cities_lbl: "Key Metropolitan Clusters",
      eco_geo_resonance_lbl: "Field Resonance Assessment",
      eco_geo_synergy_lbl: "Strategic Geolocation Advice",
      eco_org_resonance_lbl: "Ecosystem Resonance Mechanics",
      eco_org_friction_lbl: "Internal Friction Root Cause",
      eco_org_survival_lbl: "Operational Survival Playbook",

      // Time Dynamics & Macro-Energy 5-Tier Report
      td_title: "Time Dynamics & Macro-Energy Master Report",
      td_subtitle: "Cognitive Archetypes & Psychological Pardon · Ecological Ceiling · 10-Year Decades · Annual Posture · 12-Month Heatmap & Sensitive Days",
      td_badge: "Master Whitepaper",
      td_pardon_badge: "Psychological Defense & Pardon",
      td_ch1_title: "Chapter 1 · Base Constants & Psychological Archetypes",
      td_ch1_desc: "Mental Models (Vanguard / Platform / Craftsman) · Skewed Five-Element Traps & Defense Mechanisms",
      td_ch2_title: "Chapter 2 · Pattern Ecology & Ultimate Capacity Ceiling",
      td_ch2_desc: "Talent Ecological Niche · Adversity Bounce Resilience (Bing-Yao Theory) · 4 Monetization Channels",
      td_ch3_title: "Chapter 3 · 10-Year Decades Macro Trendline & Energy Panorama",
      td_ch3_desc: "Energy Momentum Curve · Tailwind Expansion vs Fortress Defense · Decade Transition Shock-Absorption",
      td_ch4_title: "Chapter 4 · Annual Strategic Posture & Decoupled Action",
      td_ch4_desc: "3-Tier Posture (Full Attack / Cautious Probing / Fortress Defense) · 3 Core Risk Firewalls",
      td_ch5_title: "Chapter 5 · Cyclic Risk Radar & Sensitive Impedance Windows",
      td_ch5_desc: "12 Solar Months Impedance Heatmap + Top 20-30 High-Risk Sensitive Days Shelter Directive",
      td_heatmap_header: "12 Solar Months Impedance Heatmap (0.1 - 1.0 Impedance Coefficient)",
      td_sensitive_header: "Annual High-Risk Sensitive Days Warning Roster (Clashes & Penalties)",
      td_sensitive_hint: "Accurately scans severe clashes with Day Pillar, Month Command, and Annual Tai Sui for contract postponement",
      td_monetization_title: "4 Value Monetization Channels Ranked",
      td_resilience_label: "Systemic Adversity Bounce Resilience Index",
      td_transition_warning: "Decade Transition Shock-Absorption Rule",

      // Spatial Feng Shui & Ziping 100 Score & Tian Ji Hexagrams
      nav_view_fengshui: "🏡 Spatial Feng Shui & Remediation",
      seal_view_fengshui: "Spatial Remediation",
      portal_card8_title: "Spatial Feng Shui & Remediation",
      portal_card8_desc: "Yan Nian Wealth Array · Dragon Turtle & Bells · 6-Harmony Zodiac · Mount Tai Stone · Hetu Numbers",
      portal_fengshui_title: "Spatial Feng Shui 10 Practical Remedies",
      portal_fengshui_desc: "Yan Nian Wealth Pixiu · Dragon Turtle & Bells · Harmony Over Clash Talisman · Mt. Tai Stone · Luoshu Numbers",
      nav_fengshui: "Spatial Feng Shui",
      fengshui_title: "Spatial Feng Shui & Metaphysical Remediation Guide",
      fengshui_subtitle: "Tailored 10 Practical Spatial Remedies & Classical Artifact Formations Based on Useful Gods & Elemental Dynamics",
      card_fengshui_title: "Bespoke Spatial Feng Shui & Remediation Advice",
      card_fengshui_desc: "Precise calibration of Wealth, Academic, Nobleman, and Clashing positions based on natal Useful Gods",
      ziping_title: "Ziping 100-Point Quantitative Balance Score",
      ziping_subtitle: "Stems 10 pts each (40 pts), Month Branch 35, Day Branch 15, Year/Hour 5 each; Za Qi exact conversion; determines pattern strength and purity",
      four_pillars_hex_title: "Four Pillars Hexagram Divination",
      four_pillars_hex_subtitle: "Heaven-Earth Numbers derive Early & Later Heaven Hexagrams · Master Ni Haisha's 《Tian Ji》 64 Hexagrams & Annual Active Lines",
      four_pillars_hex_age_label: "Current Projected Age",
      fengshui_banner_title: "Spatial Feng Shui & Metaphysical Remediation Guide · Ten Practical Cures",
      fengshui_banner_desc: "Customized 10 spatial and talismanic remedies based on natal favorable elements, personal Eight Mansions Kua, and natal clashes: from the Yan Nian Wealth Array to the Mount Tai Stone and ethical merit cultivation.",
      seal_ziping_score: "Ziping Score",
      sec_ziping_score_title: "Ziping 100-Point Quantitative Scoring & Pattern Tier",
      ziping_score_desc: "Heavenly Stems 40 pts (Day Master +10) · Month Branch 35 pts · Day Branch 15 pts · Year/Hour Branches 5 pts each · Za Qi exact conversion · 4 Patterns & 5 Dominant Formations",
      ziping_total_score: "Total Ziping Score",
      ziping_stems_score: "Stems Score (Max 40)",
      ziping_branches_score: "Branches Score (Max 60)",
      ziping_pattern_category: "Pattern Category",
      ziping_pattern_tier: "Pattern Tier",
      ziping_favorable_gods: "Favorable Gods (Yong Shen)",
      ziping_unfavorable_gods: "Unfavorable Gods (Ji Shen)",
      ziping_proximity_title: "Favorable God Proximity Shield (Day Branch 15 > Month Stem 10 > Hour Stem 10)",
      ziping_month_support: "Monthly Command Backing",
      seal_four_pillars_hex: "Tian Ji Divination",
      sec_four_pillars_hex_title: "Four Pillars Natal Hexagrams & Master Ni Haisha Tian Ji Exegesis",
      four_pillars_hex_desc: "Tian Shu and Di Shu synthesis of Early Heaven (1st half of life) & Later Heaven (2nd half) · Yang 9y / Yin 6y line progression · Annual Hexagram & Jade Glyph Riddle",
      label_current_age: "Nominal Age:",
      xian_tian_title: "Early Heaven Natal Hexagram (First Half of Life)",
      hou_tian_title: "Later Heaven Hexagram (Second Half of Life)",
      zhi_nian_title: "Annual Governance Hexagram (Current Year)",
      riddle_title: "Luminous Jade Glyph & Celestial Secret",
      fengshui_item1_title: "Yan Nian Celestial Wealth Array (4 Pixiu + 1 Tripod)",
      fengshui_item2_title: "Doorway Dragon Turtle Barrier & Personal Pocket Companion",
      fengshui_item3_title: "Harmonizing Tension via Six-Harmony Zodiac Talisman",
      fengshui_item4_title: "Automotive Travel Shield: Dual Pure Brass Bells",
      fengshui_item5_title: "Architectural Taiji Restoration: Mount Tai Stone Barrier",
      fengshui_item6_title: "Three Harmonies Ten-Direction Cosmic Bureau Array",
      fengshui_item7_title: "Trio Enhancements: Noble Mentors, Wisdom & True Charisma",
      fengshui_item8_title: "Hetu Luoshu Auspicious Numbers, Real Estate & Strategic Expansions",
      fengshui_item9_title: "Supreme Karmic Metaphysical Foundations: The Three Pillars of Merit",
      fengshui_item10_title: "Spatial Atmosphere Holistic Rating & Master Aphorism",

      // Factory Mind Manual
      manual_nav_btn: "Mind Manual",
      manual_seal: "MIND MANUAL",
      manual_tab_specs: "Factory Specs",
      manual_tab_canons: "Eight Canons Exegesis",
      manual_tab_triggers: "Stress Triggers",
      manual_tab_protocols: "Factory Emergency Reset",
      manual_tab_habits: "5-Element Micro-Habits",
      manual_tab_zendao: "Zen-Dao Transcendence",
      manual_specs_heading: "Original Factory Mindset Specifications",
      manual_canons_heading: "Eight Classical Canons Scripture Manual",
      manual_triggers_heading: "Stress Trigger Signatures & Red Lines",
      manual_protocols_heading: "Three-Level Factory Emergency De-escalation Protocols",
      manual_habits_heading: "Daily Five-Element Energy Micro-Habits",

      // Dynamic Calculation Progress Bar
      calc_progress_title: "Synthesizing Cosmic Pillars & Natal Blueprint...",
      calc_progress_subtitle: "Synthesizing Natal Geometry with Eight Classical Canons & Luck Cycles",
      calc_stage_1: "Computing Four Pillars, NaYin & Elemental Balance",
      calc_stage_2: "Cross-Referencing Eight Classical Canons & Pareto Fulcrum",
      calc_stage_3: "Synthesizing Luck Cycles & Operational Chrono-Navigator",
      calc_stage_4: "Assembling Factory Mind Manual & De-escalation Protocols",
      calc_stage_5: "Destiny Canvas Complete · Launching Dashboard",
      calc_step_1: "① Pillars",
      calc_step_2: "② Canons",
      calc_step_3: "③ Chrono",
      calc_step_4: "④ Mind",
      calc_step_5: "⑤ Destiny",
      calc_synastry_title: "Cross-Referencing Natal Geometries · Synastry Matrix",
      calc_synastry_subtitle: "Evaluating Dual Natal Charts, Elemental Clashes & Zen Trinity Synergy",
      calc_chrono_title: "Calibrating Chrono-Navigator & Operational Playbook",
      calc_chrono_subtitle: "Computing Lifelong Trajectory, Seasonal Tides & Ecological Resonance",

      portal_talisman_qiankun: "Qian-Kun",
      portal_seal_astronomy: "Celestial Ephemeris",
      portal_badge_version: "v3.0 Grand Canons",
      portal_seal_canons: "8 Canons Integrated",
      portal_hero_title: "BaZi Charting & Classical Destiny System",
      portal_hero_subtitle: "Exploring Heaven, Earth & Humanity · Synthesizing Di Tian Sui, San Ming, Qiong Tong, Zi Ping & Yuan Hai with I Ching 64 Hexagrams",
      portal_presets_title: "🌟 Classic Archetype Presets",
      portal_presets_sub: "Click to load archetypal destiny blueprints with instant live preview",
      preset_leader: "Commanding Leader (Yang Blade & Killings)",
      preset_leader_badge: "Qian · Yang Wood",
      preset_leader_desc: "1990-06-20 · Qian / Male · Yang Wood in Wu Month, robust energy governing decisive authority",
      preset_business: "Business Mogul (Output Generating Wealth)",
      preset_business_badge: "Kun · Yang Earth",
      preset_business_desc: "1988-11-18 · Kun / Female · Yang Earth in Hai Month, wealth generation and strategic commercial acumen",
      preset_artist: "Artist & Scholar (Refined Metal-Water Talent)",
      preset_artist_badge: "Qian · Yin Metal",
      preset_artist_desc: "1995-10-24 · Qian / Male · Yin Metal in Xu Month, exquisite eloquence and luminous creative artistry",
      preset_strategist: "Executive Strategist (Killings Transmuted by Seal)",
      preset_strategist_badge: "Kun · Seal-Killings",
      preset_strategist_desc: "1984-03-15 · Kun / Female · Yang Wood nourished by Resource, anchored resilience and lasting enterprise",
      preset_now: "Present Moment (Right Now)",
      preset_now_badge: "Present · Moment",
      preset_now_desc: "Real-time celestial ephemeris and solar meridian calculation for the current instant",
      portal_form_card_title: "📜 Natal Configuration & Birth Inputs",
      portal_preview_title: "⚡ Live Natal Chart Preview",
      portal_preview_hint: "Modify inputs or select archetypes to dynamically watch the natal chart evolve",
      portal_calc_btn: "Calculate Chart · Enter Analysis Dashboard ➔",
      portal_adv_toggle_show: "⚙️ Show Astronomical Longitude & Solar Time Settings",
      portal_adv_toggle_hide: "⚙️ Hide Astronomical Longitude & Solar Time Settings",
      portal_showcase_title: "🏛️ Cosmic Panorama · Seven Core Astrological Modules",
      portal_showcase_subtitle: "Unlocked instantly upon natal chart calculation",
      portal_card1_title: "Natal Chart & Element Radar",
      portal_card1_desc: "Accurate pillars, Na Yin melodies, Day Master vigor and morphing elemental radar.",
      portal_card2_title: "Pareto 80/20 & Grand Strategy",
      portal_card2_desc: "Identify the 20% fulcrum governing 80% destiny, decisive campaigns and kinship depth.",
      portal_card3_title: "Original Factory Mind Manual",
      portal_card3_desc: "Eight Classical Canons · Stress Triggers · 3-Level Emergency Reset · 5-Element Micro-Habits",
      portal_card4_title: "Lifelong Chrono-Navigator",
      portal_card4_desc: "Continuous age 1-100 trajectory, vitality tides, wealth peaks & transit alerts.",
      portal_card5_title: "Eight Classical Canons",
      portal_card5_desc: "Di Tian Sui, San Ming, Qiong Tong, Zi Ping Zhen Quan original scripture search.",
      portal_card6_title: "I Ching 64 Hexagrams Oracle",
      portal_card6_desc: "Da Yan oracle, 3-coin toss, Plum Blossom divination with Zhu Xi 7 exegesis rules.",
      portal_card7_title: "Synastry & Partner Compatibility",
      portal_card7_desc: "Romantic & business partnerships, elemental gifts, clash minefields & covenants.",
      portal_zen_quote: "'To comprehend the cosmos of primal origin, first observe celestial majesty and heavenly governance.' —— Di Tian Sui",
      portal_preview_year: "Year",
      portal_preview_month: "Month",
      portal_preview_day: "Day (Self)",
      portal_preview_hour: "Hour",
      portal_preview_ready: "Pillars calculated · Click button below to launch dashboard",
      portal_preview_solar_offset: "Solar Offset: ",
      dashboard_active_chart_title: "Active Chart",
      dashboard_summary_dm: "Day Master: ",
      dashboard_summary_pattern: "Primary Pattern: ",
      dashboard_summary_solar: "True Solar Time: ",
      btn_edit_natal: "✏️ Modify Input / Return to Portal",
      btn_portal_nav: "⛩️ Natal Portal",
      seal_climate: "Qiong Tong / Di Tian Sui",
      badge_five_pillar_synergy: "5-Pillar Synergy",
      iching_csprng_badge: "☯️ Yarrow Oracle · CSPRNG",
      iching_select_placeholder: "📖 64 Hexagrams Quick Directory...",
      coin_throw_initial: "Toss Line 1 (Initial)",
      pareto_eight_canons_tag: "Di Tian Sui · Qiong Tong · Zhen Quan · San Ming · Yuan Hai · Shen Feng · Yu Zhao · Li Xu Zhong",

      // Form Inputs
      lbl_birth_date: "Solar Birth Date (Gregorian)",
      lbl_birth_time: "Birth Time (Local Standard)",
      lbl_gender: "Destiny / Gender",
      opt_qian: "Qian / Male (乾造)",
      opt_kun: "Kun / Female (坤造)",
      lbl_city: "Global Birth City / Region",
      btn_calc: "Calculate Chart",

      // Advanced Settings
      chk_true_solar: "Enable True Solar Time Correction (EoT + Longitude)",
      lbl_timezone: "Standard Timezone:",
      lbl_longitude: "Longitude (°E / - for West):",
      chk_late_rat: "Late Zi counts as Next Day (after 23:00)",
      solar_ready: "True Solar Time & Longitude Ready",
      calc_perf: "⚡ Millisecond Calculation",
      solar_term_pending: "Calculating Solar Terms & Meridian...",

      // Four Pillars
      sec_four_pillars: "Four Pillars Destiny Chart (BaZi)",
      sub_four_pillars: "Strictly aligned with Lichun & 12 Solar Meridian Terms",
      hidden_stems_title: "Hidden Stems",
      hidden_stems_god: "Ten Gods Qi",
      nayin_prefix: "Melodic (Na Yin): ",

      // Day Master & Five Elements
      sec_dm_core: "Day Master (Self Spirit)",
      dm_seal: "Chart Core",
      dm_spirit_desc: "The Day Stem represents the native's core spirit and intrinsic essence",
      dm_essence_label: "Five Elements Essence: ",
      dm_essence_val: "Wood rules Benevolence, Fire Propriety, Earth Trust, Metal Integrity, Water Wisdom",
      dm_core_principle: "Core Principle: 'First observe the monthly season, next examine day master vigor, identify useful god and pattern, thus destiny is determined.'",
      sec_elements_dist: "Five Elements Distribution",
      elements_weighted_note: "Comprehensive weighted calculation of stems and hidden branches",

      // Grand Portrait Header
      seal_five_canons: "Five Canons",
      sec_portrait_title: "Five Canons Holistic Persona Portrait & Pattern Blueprint",
      portrait_desc: "Synthesizing Di Tian Sui, San Ming Tong Hui, Qiong Tong Bao Jian, Zi Ping Zhen Quan & Yuan Hai Zi Ping · Intelligent pattern diagnostics, vigor scoring, seasonal regulation & holistic life blueprint",

      // Vigor & Climate Dashboard
      vigor_score_title: "⚖️ Day Master Vigor 3D Scoring",
      vigor_ready_badge: "Scoring Ready",
      climate_regulator_title: "❄️ Seasonal Climate & Regulating Useful God",
      climate_primary_label: "Primary Seasonal Regulator",
      climate_secondary_label: "Secondary Seasonal Regulator",
      climate_desc_label: "[Climate Essence]",
      climate_fav_label: "Favorable Gods: ",
      climate_taboo_label: "Taboo / Adverse: ",

      // Patterns & Weights
      sec_patterns_title: "🏷️ Established Patterns · 4D Practical Analysis & Energy Share",
      patterns_weight_note: "(Includes energy weights; listed patterns exceed > 85% total share)",
      patterns_bar_title: "📊 Pattern Energy Weight Distribution",
      patterns_core_line: "Exceeds 85% Core Dominance Line",
      patterns_subnote: "Encompasses core personality, talents, and career dynamics; residue represents subtle latent energies",
      latent_energy_label: "Latent Energy Residue: ",
      pat_verse_head: "【Canonical Classical Verse】",
      pat_meaning_head: "💡 1. Pattern Meaning (Essence & Archetype)",
      pat_source_head: "📖 2. Canonical Source (Classical Literature)",
      pat_formation_head: "⚖️ 3. Formation Rules & Natal Verification",
      pat_usage_head: "🎯 4. Practical Application, Taboos & Mastery",
      pat_weight_head: "📊 5. Natal Energy Share & Impact Assessment",
      pat_basis_head: "Empowerment Rationale: ",

      // Persona
      sec_persona_title: "👤 Holistic Persona Portrait (Five Canons)",
      persona_subnote: "Modern life & career blueprint based on natal pattern and climate",
      persona_psy_title: "🧠 Psychological Blueprint & Mindset Archetype",
      persona_career_title: "💼 Career & Talent Blueprint",
      persona_wealth_title: "💰 Wealth Dynamics & Financial Drivers",
      persona_advice_title: "🧘 Strategic Life Coaching & Self-Cultivation",

      // Pareto 80/20 Core Synthesis
      sec_pareto_title: "👑 Eight Canons Holographic Portrait · Pareto 80/20 Vital Fulcrum Core Synthesis",
      seal_pareto: "80/20 Eight Canons",
      pareto_subnote: "Synthesizing all 8 classical treatises to isolate the vital 20% fulcrum that drives 80% of destiny, linking marital, offspring, and ancestral roots with macro-era acoustic resonance.",

      // Zhou Yi (I Ching) 64 Hexagrams
      iching_banner_title: "Zhou Yi King Wen 64 Hexagrams Divination System",
      iching_banner_desc: "Authentic Yarrow Stalk probability (Old Yin/Young Yang/Young Yin/Old Yang), 3-Coin simulation, Plum Blossom time numerology, and 64 Hexagrams canon. Original and Resulting hexagrams synthesize Philosophy, Career, Wealth, Love, and Action Guidance.",
      iching_query_placeholder: "What inquiry or matter is on your mind? (e.g. venture partnership, career transition, relationship dynamics...)",
      iching_btn_instant: "Instant Sacred Yarrow Divination",
      iching_btn_coin: "3-Coin Toss Simulation (6 Tosses)",
      iching_btn_time: "Plum Blossom Time Divination",
      coin_arena_title: "🪙 Qianlong Tongbao · 3-Coin Interactive Divination Arena",
      btn_reset_coin: "Reset",
      iching_init_title: "Changes are the law of the cosmos: adapting unlocks infinite paths.",
      iching_init_desc: "Contemplate your core inquiry, then choose Instant Yarrow, 3-Coin Toss, or Time Divination to attune with cosmic rhythms.",
      iching_canonical_sec_title: "📜 King Wen Judgments & Ancient Canonical Scriptures",
      iching_modern_sec_title: "💡 Zhou Yi Modern Strategic Multi-Dimensional Interpretations",
      seal_modern_iching: "Deep Insight",

      // Defects
      sec_defects_title: "⚠️ Day Master Defects, Blindspots & Crisis Reefs",
      defects_subnote: "(Candid analysis of psychological traps, career pitfalls, business crises & elemental imbalance with antidotes)",

      // Mental Friction
      sec_friction_title: "Mental Rumination Diagnostic & Battle-Tested Practical Antidotes",
      friction_index_label: "Rumination Index: ",
      friction_root_head: "【Core Mental Friction Root Cause】",
      friction_trigger_head: "Natal BaZi Triggers: ",

      // Remedy Guide
      sec_remedy_title: "🌿 Destiny Balancing Guide · Nourishing Weak vs Channeling Strong",
      remedy_subnote: "(Comprehensive guide covering elements, mindset, habits, career & business)",
      tab_tailored: "🎯 Tailored Natal Balancing Plan",
      tab_comparison: "⚖️ Weak vs Strong Complete Parallel Guide",



      // Luck & Fortune Cycles (大运/流年/流月/流日)
      sec_luck_title: "Fortune & Luck Cycles · Major Decades, Annual, Monthly & Daily Alignments",
      sec_luck_subtitle: "5-Pillar Synergy · Revealing 10-year major luck decades, annual transits, 12 solar months, and daily energetic alignments",
      lbl_luck_direction: "Progression Direction:",
      lbl_luck_start_age: "Start Age & Calendar Year:",
      tab_decade_title: "1. 10-Year Major Luck Decades (大运)",
      tab_annual_title: "2. Annual Transit Years (流年)",
      tab_monthly_title: "3. 12 Solar Months (流月)",
      tab_daily_title: "4. Daily Alignment & 5-Pillar Synergy (流日)",
      tab_decade_hint: "(Click any decade card to reveal its 10 annual transit years)",
      tab_annual_hint: "(Click any transit year to reveal its 12 solar months)",
      tab_monthly_hint: "(Click any solar month to inspect daily alignment)",
      lbl_select_date: "Select Transit Date:",
      btn_today: "⏱ Today",
      btn_current_year: "🎯 Current Year",
      pillar_decade: "Decade Pillar",
      pillar_annual: "Annual Pillar",
      pillar_monthly: "Monthly Pillar",
      pillar_daily: "Daily Pillar",
      th_dimension: "Dimension / Pillar",
      th_natal_year: "Natal Year",
      th_natal_month: "Natal Month",
      th_natal_day: "Natal Day (Master)",
      th_natal_hour: "Natal Hour",
      interactions_title: "🌌 5-Pillar Synergy · Clashes, Combos & Tactical Guidance",
      five_pillar_matrix_title: "5-Pillar Holistic Matrix (Natal 4 Pillars + Decade + Annual + Monthly + Daily)",
      lbl_fortune_evaluation: "Transit Fortune In-Depth Evaluation & Tactical Strategy",
      lbl_fortune_detail_hint: "(Click any Decade, Annual, or Monthly card to inspect deep meaning, pitfalls, and taboos)",
      fortune_tab_decade: "Decade Fortune",
      fortune_tab_annual: "Annual Fortune",
      fortune_tab_monthly: "Monthly Fortune",
      fortune_tab_daily: "Daily Fortune",
      lbl_transit_meaning: "Essence Meaning & Core Lessons",
      lbl_good_pitfalls: "Aspects That Could Go Wrong (Pitfalls in Good Fortune)",
      lbl_bad_taboos: "Strict Taboos (What NOT to Do in Challenging Transits)",
      lbl_action_guidance: "Action Strategy & Practical Alignment",
      age_col: "Age",
      year_col: "Year",
      god_col: "Ten God",
      nayin_col: "Na Yin",
      // Canons Tabs
      tab_sanming: "📜 San Ming Tong Hui",
      tab_sanming_badge: "Day-Hour 4D",
      tab_qiongtong: "❄️ Qiong Tong Bao Jian",
      tab_qiongtong_badge: "Seasonal Regulators",
      tab_ziping: "⚖️ Zi Ping Zhen Quan",
      tab_ziping_badge: "Pattern & Rescue",
      tab_ditiansui: "🌌 Di Tian Sui",
      tab_ditiansui_badge: "Essence & Qi",
      tab_yuanhai: "🏛️ Yuan Hai Zi Ping",
      tab_yuanhai_badge: "Foundational Verses",
      tab_shenfeng: "🏔️ Shen Feng Tong Kao",
      tab_shenfeng_badge: "Disease & Medicine",
      tab_yuzhao: "🪞 Yu Zhao Ding Zhen Jing",
      tab_yuzhao_badge: "Palace Astrology",
      tab_lixuzhong: "🎵 Li Xu Zhong Ming Shu",
      tab_lixuzhong_badge: "Three Primes & NaYin",
      tab_search: "🔍 Universal Search",

      // Canons Contents
      canon_sanming_auto: "Natal Day-Hour Combination Reading (4D Analysis: Meaning, Source, Formation, Usage):",
      canon_sanming_exp_title: "📖 Explore 60 JiaZi Day-Hour Combinations (720 Pairs)",
      canon_sanming_exp_desc: "Select any Day and Hour pillar to view Wan Minying's classic treatise and 4D practical analysis.",
      btn_query_canon: "Query Canon",
      canon_sm_patterns: "San Ming Tong Hui Classic Patterns",

      canon_qiongtong_auto: "Natal Month Seasonal Regulator (Climatic Balance):",
      canon_qiongtong_exp_title: "❄️ Qiong Tong Bao Jian 12 Months Seasonal Regulator Search",
      canon_qiongtong_exp_desc: "Select any Day Stem and Month Branch to consult the seasonal thermal and moisture balance treatise:",
      btn_query_qt: "Query Regulator",

      canon_ziping_auto: "Natal Pattern Diagnosis & Shen Xiaozhan's Success/Rescue Analysis:",
      canon_ziping_exp_title: "⚖️ Eight Regular Patterns: Formation, Breach & Rescue Rules",
      canon_ziping_exp_desc: "By Qing Dynasty master Shen Xiaozhan, explaining when patterns fail and how they are rescued:",

      canon_dts_auto: "Day Master Essence Treatise (Di Tian Sui 10 Heavenly Stems):",
      canon_dts_stems_title: "🌿 Quick Study: Ten Heavenly Stems",
      canon_dts_stems_desc: "Click any Heavenly Stem to explore Jing Tu's original poem, Liu Bowen's notes & Ren Tieqiao's insights:",
      canon_dts_chapters_title: "Di Tian Sui Core Philosophical Treatises",

      canon_yuanhai_title: "🏛️ Song Dynasty Xu Dasheng: Yuan Hai Zi Ping Foundational Verses",
      canon_yuanhai_desc: "Yuan Hai Zi Ping is the ancestral classic of Zi Ping astrology, featuring Ji Shan Pian, Xi Ji Pian, and timeless truths:",
      canon_yuanhai_gods_title: "Original Nature & Mysteries of the Ten Gods",

      canon_shenfeng_auto: "Current Chart Disease & Medicine Synthesis (Shen Feng Tong Kao):",
      canon_shenfeng_treatises_title: "🏔️ Core Treatises of Shen Feng Tong Kao (Disease & Medicine · Sculpting · Movement & Stillness)",
      canon_shenfeng_treatises_desc: "Authored by Ming Dynasty master Zhang Shenfeng: 'Without vulnerability, destiny lacks distinction; when cured, supreme wealth and honor follow.'",

      canon_yuzhao_auto: "Current Four Pillars Palace & Relational Dynamics (Yu Zhao Ding Zhen Jing):",
      canon_yuzhao_aphorisms_title: "🪞 Canonical Palace & Relational Aphorisms of Yu Zhao Ding Zhen Jing",
      canon_yuzhao_aphorisms_desc: "The earliest surviving classic of four-pillar palace astrology, detailing marital harmony, progeny gifts, and ancestral roots:",

      canon_lixuzhong_auto: "Current Three Primes & Spatial Acoustic Resonance (Li Xu Zhong Ming Shu):",
      canon_lixuzhong_chapters_title: "🎵 Three Primes & NaYin Acoustic Field Chapters of Li Xu Zhong Ming Shu",
      canon_lixuzhong_chapters_desc: "Authored by Tang Dynasty founder Li Xuzhong, detailing Heavenly Rank, Earthly Destiny, Human Body, and macro environmental adaptation:",

      search_title: "Eight Classical Canons Universal Search Engine",
      search_desc: "Unified search across San Ming Tong Hui, Di Tian Sui, Qiong Tong Bao Jian, Zi Ping Zhen Quan, Yuan Hai Zi Ping, Shen Feng Tong Kao, Yu Zhao Ding Zhen Jing, and Li Xu Zhong Ming Shu. Enter terms, patterns, or quotes for instant full-text search.",
      search_placeholder: "Enter keywords, e.g., Disease & Medicine, Yu Zhao, Three Primes, Hurting Officer, Ding Fire...",
      btn_search: "Search Canons",
      search_init_prompt: "Please enter keywords to search across all eight canons.",

      // Gender Dynamics
      gender_dynamics_title: "Gender Dynamics: Male vs. Female",
      gender_dynamics_male: "Male Native (Qian Zao)",
      gender_dynamics_female: "Female Native (Kun Zao)",

      // Footer
      footer_title: "BaZi Charting & Classical Canons System · Integrated Eight Classics of Chinese Metaphysics",
      footer_citations: "Citations: San Ming Tong Hui · Di Tian Sui · Qiong Tong Bao Jian · Zi Ping Zhen Quan · Yuan Hai Zi Ping · Shen Feng Tong Kao · Yu Zhao Ding Zhen Jing · Li Xu Zhong Ming Shu"
    }
  };

  // Metaphysical Terminology Mappings
  const STEMS = {
    '甲': { en: 'Jia (Yang Wood)', pinyin: 'Jia', el: 'Wood', pol: 'Yang' },
    '乙': { en: 'Yi (Yin Wood)', pinyin: 'Yi', el: 'Wood', pol: 'Yin' },
    '丙': { en: 'Bing (Yang Fire)', pinyin: 'Bing', el: 'Fire', pol: 'Yang' },
    '丁': { en: 'Ding (Yin Fire)', pinyin: 'Ding', el: 'Fire', pol: 'Yin' },
    '戊': { en: 'Wu (Yang Earth)', pinyin: 'Wu', el: 'Earth', pol: 'Yang' },
    '己': { en: 'Ji (Yin Earth)', pinyin: 'Ji', el: 'Earth', pol: 'Yin' },
    '庚': { en: 'Geng (Yang Metal)', pinyin: 'Geng', el: 'Metal', pol: 'Yang' },
    '辛': { en: 'Xin (Yin Metal)', pinyin: 'Xin', el: 'Metal', pol: 'Yin' },
    '壬': { en: 'Ren (Yang Water)', pinyin: 'Ren', el: 'Water', pol: 'Yang' },
    '癸': { en: 'Gui (Yin Water)', pinyin: 'Gui', el: 'Water', pol: 'Yin' }
  };

  const BRANCHES = {
    '子': { en: 'Zi (Rat)', animal: 'Rat', el: 'Water' },
    '丑': { en: 'Chou (Ox)', animal: 'Ox', el: 'Earth' },
    '寅': { en: 'Yin (Tiger)', animal: 'Tiger', el: 'Wood' },
    '卯': { en: 'Mao (Rabbit)', animal: 'Rabbit', el: 'Wood' },
    '辰': { en: 'Chen (Dragon)', animal: 'Dragon', el: 'Earth' },
    '巳': { en: 'Si (Snake)', animal: 'Snake', el: 'Fire' },
    '午': { en: 'Wu (Horse)', animal: 'Horse', el: 'Fire' },
    '未': { en: 'Wei (Goat)', animal: 'Goat', el: 'Earth' },
    '申': { en: 'Shen (Monkey)', animal: 'Monkey', el: 'Metal' },
    '酉': { en: 'You (Rooster)', animal: 'Rooster', el: 'Metal' },
    '戌': { en: 'Xu (Dog)', animal: 'Dog', el: 'Earth' },
    '亥': { en: 'Hai (Pig)', animal: 'Pig', el: 'Water' }
  };

  const TEN_GODS = {
    '比肩': 'Friend (Bi Jian)',
    '劫财': 'Rob Wealth (Jie Cai)',
    '食神': 'Eating God (Shi Shen)',
    '伤官': 'Hurting Officer (Shang Guan)',
    '偏财': 'Indirect Wealth (Pian Cai)',
    '正财': 'Direct Wealth (Zheng Cai)',
    '七杀': 'Seven Killings (Qi Sha)',
    '正官': 'Direct Officer (Zheng Guan)',
    '偏印': 'Indirect Resource (Pian Yin)',
    '正印': 'Direct Resource (Zheng Yin)',
    '日主': 'Day Master (Self)',
    '比劫': 'Companion / Peer (Bi Jie)',
    '印绶': 'Resource / Seal (Yin Shou)',
    '官杀': 'Power / Officer (Guan Sha)',
    '财星': 'Wealth Star (Cai Xing)',
    '食伤': 'Output / Talent (Shi Shang)'
  };

  const FIVE_ELEMENTS = {
    '木': 'Wood',
    '火': 'Fire',
    '土': 'Earth',
    '金': 'Metal',
    '水': 'Water'
  };

  const NAYIN_TABLE = {
    '海中金': 'Sea Metal', '炉中火': 'Furnace Fire', '大林木': 'Great Forest Wood', '路旁土': 'Roadside Earth',
    '剑锋金': 'Sword Edge Metal', '山头火': 'Mountaintop Fire', '涧下水': 'Stream Water', '城头土': 'City Wall Earth',
    '白蜡金': 'White Wax Metal', '杨柳木': 'Willow Wood', '泉中水': 'Spring Water', '屋上土': 'Rooftop Earth',
    '霹雳火': 'Thunderbolt Fire', '松柏木': 'Pine & Cypress Wood', '长流水': 'Everflowing Water', '沙中金': 'Sand Metal',
    '山下火': 'Foothill Fire', '平地木': 'Plains Wood', '壁上土': 'Wall Earth', '金箔金': 'Gold Foil Metal',
    '覆灯火': 'Lamp Flame Fire', '天河水': 'Celestial River Water', '大驿土': 'Post Station Earth', '钗钏金': 'Hairpin Metal',
    '桑柘木': 'Mulberry Wood', '大溪水': 'Great Stream Water', '沙中土': 'Sand Earth', '天上火': 'Heavenly Fire',
    '石榴木': 'Pomegranate Wood', '大海水': 'Ocean Water'
  };

  const PILLAR_TITLES = {
    zh: ['年柱 (根基/祖业)', '月柱 (提纲/事业)', '日柱 (日元/自身)', '时柱 (归宿/子女)'],
    en: ['Year Pillar (Roots/Ancestry)', 'Month Pillar (Season/Career)', 'Day Pillar (Day Master/Self)', 'Hour Pillar (Fruition/Future)']
  };

  const PATTERN_NAMES = {
    '正官格': 'Direct Officer Pattern',
    '七杀格': 'Seven Killings Pattern',
    '正印格': 'Direct Resource Pattern',
    '偏印格': 'Indirect Resource Pattern',
    '食神格': 'Eating God Pattern',
    '伤官格': 'Hurting Officer Pattern',
    '正财格': 'Direct Wealth Pattern',
    '偏财格': 'Indirect Wealth Pattern',
    '建禄格': 'Established Prosperity (Lu) Pattern',
    '羊刃格': 'Yang Blade Pattern',
    '阳刃格': 'Yang Blade Pattern',
    '阳刃格 (月刃格 / 威权大将)': 'Yang Blade Pattern (Sovereign General)',
    '月刃格': 'Yang Blade Pattern',
    '伤官生财格': 'Hurting Officer Producing Wealth Pattern',
    '伤官配印格': 'Hurting Officer with Resource (Seal) Pattern',
    '杀印相生格': 'Seven Killings Generating Resource Pattern',
    '财旺生官格': 'Prosperous Wealth Producing Officer Pattern',
    '食神制杀格': 'Eating God Controlling Seven Killings Pattern',
    '官印双全格': 'Officer & Resource Dual Integrity Pattern',
    '食神生财格': 'Eating God Producing Wealth Pattern',
    '伤官见官格': 'Hurting Officer Clashing Officer Pattern',
    '杀刃带伤格 (七杀+羊刃+伤官复合)': 'Seven Killings + Blade + Hurting Officer Multi-Star Synergy',
    '伤官生财带杀格 (商战谋略复合)': 'Hurting Officer Producing Wealth with Killings Synergy',
    '伤官配印掌威格 (文武兼备复合)': 'Hurting Officer with Seal Authority Synergy',
    '杀印相生兼食神格 (军政儒将复合)': 'Killings-Seal with Eating God Strategic Synergy',
    '财资七杀制刃格 (资本操盘复合)': 'Wealth Supporting Killings Controlling Blade Synergy',
    '伤官吐秀 / 桃花流水': 'Hurting Officer Exuding Elegance / Peach Blossom Flowing Stream',
    '金白水清': 'Pristine Metal & Clear Water',
    '木火通明': 'Wood & Fire Radiant Brilliance',
    '水火既济': 'Water & Fire Perfect Equilibrium',
    '火土相生': 'Fire & Earth Mutual Generation',
    '从财格': 'Follow Wealth Pattern',
    '从杀格': 'Follow Seven Killings Pattern',
    '从儿格': 'Follow Child (Output) Pattern',
    '专旺格': 'Special Dominant Monopolistic Pattern'
  };

  const TIERS = {
    '第一核心主导格': 'Primary Dominant Pattern',
    '强力驱动进阶格': 'High Synergy Pattern',
    '辅佐发越机运格': 'Auxiliary Reinforcing Pattern',
    '潜能催化兼人格': 'Latent Background Pattern',
    '主导核心格': 'Dominant Core Pattern',
    '高阶协同格': 'High Synergy Pattern',
    '副辅增益格': 'Auxiliary Reinforcing Pattern',
    '潜在暗藏格': 'Latent Background Pattern'
  };

  const VIGOR_STATUSES = {
    '身极旺 (强健专旺)': 'Extremely Strong (Dominant Peak)',
    '身旺 (精干有力)': 'Strong / Robust',
    '中和偏旺 (气象平衡)': 'Balanced (Slightly Robust)',
    '中和偏弱 (清秀待辅)': 'Balanced (Slightly Delicate)',
    '身弱 (宜生宜扶)': 'Weak / Nourishing Needed',
    '极弱 (从弱或虚浮)': 'Extremely Weak / Delicate',
    '中和': 'Balanced / Neutral Equilibrium',
    '极旺 (极为强旺)': 'Extremely Strong (Excessive Vigor)',
    '偏旺 (强旺)': 'Strong / Robust',
    '中和 (平衡中正)': 'Balanced / Neutral Equilibrium',
    '偏弱 (身弱受耗)': 'Weak / Deliberate Cultivation Needed',
    '极弱 (极度衰微)': 'Extremely Weak / Frail (Requires Urgent Support)'
  };

  // Helper Translation Functions
  function t(key, lang = 'zh') {
    const l = (lang === 'en') ? 'en' : 'zh';
    return (dict[l] && dict[l][key]) ? dict[l][key] : key;
  }

  function getStem(stem, lang = 'zh') {
    if (lang === 'en' && STEMS[stem]) {
      return STEMS[stem].en;
    }
    return stem;
  }

  function getBranch(branch, lang = 'zh') {
    if (lang === 'en' && BRANCHES[branch]) {
      return BRANCHES[branch].en;
    }
    return branch;
  }

  function getGod(god, lang = 'zh') {
    if (lang === 'en') {
      if (TEN_GODS[god]) return TEN_GODS[god];
      for (const [k, v] of Object.entries(TEN_GODS)) {
        if (god && god.includes(k)) return v;
      }
    }
    return god;
  }

  function getElement(el, lang = 'zh') {
    if (lang === 'en' && FIVE_ELEMENTS[el]) {
      return FIVE_ELEMENTS[el];
    }
    return el;
  }

  function getNaYin(nayin, lang = 'zh') {
    if (lang === 'en' && NAYIN_TABLE[nayin]) {
      return NAYIN_TABLE[nayin];
    }
    return nayin;
  }

  const ZODIAC_TABLE = {
    '子': { zh: '鼠', en: 'Rat', pinyin: 'Zi' },
    '丑': { zh: '牛', en: 'Ox', pinyin: 'Chou' },
    '寅': { zh: '虎', en: 'Tiger', pinyin: 'Yin' },
    '卯': { zh: '兔', en: 'Rabbit', pinyin: 'Mao' },
    '辰': { zh: '龙', en: 'Dragon', pinyin: 'Chen' },
    '巳': { zh: '蛇', en: 'Snake', pinyin: 'Si' },
    '午': { zh: '马', en: 'Horse', pinyin: 'Wu' },
    '未': { zh: '羊', en: 'Goat', pinyin: 'Wei' },
    '申': { zh: '猴', en: 'Monkey', pinyin: 'Shen' },
    '酉': { zh: '鸡', en: 'Rooster', pinyin: 'You' },
    '戌': { zh: '狗', en: 'Dog', pinyin: 'Xu' },
    '亥': { zh: '猪', en: 'Pig', pinyin: 'Hai' }
  };

  function getZodiac(branch, lang = 'zh') {
    const item = ZODIAC_TABLE[branch];
    if (!item) return branch;
    return (lang === 'en') ? item.en : item.zh;
  }

  function getZodiacWithBranch(branch, lang = 'zh') {
    const item = ZODIAC_TABLE[branch];
    if (!item) return branch;
    return (lang === 'en') ? `${item.en} (${item.pinyin})` : `属${item.zh} (${branch})`;
  }

  function getPillarTitle(idx, lang = 'zh') {
    const l = (lang === 'en') ? 'en' : 'zh';
    return PILLAR_TITLES[l][idx] || PILLAR_TITLES.zh[idx];
  }

  const SANMING_DAY_HOUR_PHRASES = {
    // Part 1 / Standalone
    '七杀坐库': 'Seven Killings in Tomb Vault',
    '七杀当权': 'Seven Killings in Commanding Power',
    '伤官偏官': 'Hurting Officer & Indirect Officer',
    '伤官吐秀': 'Hurting Officer Unleashing Elegance',
    '伤官坐库': 'Hurting Officer in Tomb Vault',
    '伤官生财': 'Hurting Officer Producing Wealth',
    '伤官生财格': 'Hurting Officer Producing Wealth Pattern',
    '伤官长生': 'Hurting Officer in Growth Stage',
    '伤官食禄': 'Hurting Officer Eating Lu Prosperity',
    '偏印专位': 'Indirect Resource Cardinal Station',
    '偏印逢枭': 'Indirect Resource Meeting Owl Star',
    '偏印逢生': 'Indirect Resource Nourished in Growth',
    '偏官七杀': 'Indirect Officer & Seven Killings',
    '偏官专位': 'Indirect Officer Cardinal Station',
    '偏官长生': 'Indirect Officer in Growth Stage',
    '偏财专位': 'Indirect Wealth Cardinal Station',
    '偏财坐库': 'Indirect Wealth in Tomb Vault',
    '偏财天乙': 'Indirect Wealth with Heavenly Nobleman',
    '偏财得禄': 'Indirect Wealth Anchored in Lu',
    '冠带偏官': 'Indirect Officer in Crowning Station',
    '劫财分禄': 'Rob Wealth Dividing Lu Prosperity',
    '印绶逢生': 'Resource Seal Nourished in Growth',
    '天乙贵人': 'Heavenly Nobleman Station',
    '子遥巳格': 'Zi Remotely Attracting Si Pattern',
    '官印双全': 'Dual Officer & Resource Complete',
    '官星坐贵': 'Officer Star Meeting Nobleman',
    '帝旺逢生': 'Peak Vigor Meeting Nourishment',
    '帝旺逢羊刃': 'Peak Vigor Meeting Yang Blade',
    '日坐正财': 'Day Sits on Direct Wealth',
    '日照江河': 'Sun Illuminating Rivers',
    '日照长生': 'Sun Illuminating Growth Stage',
    '日禄归时': 'Prosperity Lu Returning to Hour',
    '日禄归时格': 'Prosperity Lu Returning to Hour Pattern',
    '时上一位贵': 'Single Nobleman Prominent in Hour',
    '时带偏官': 'Hour Pillar Carrying Indirect Officer',
    '时带木库': 'Hour Pillar Carrying Wood Vault',
    '时带贵人': 'Hour Pillar Carrying Nobleman',
    '时带阳刃格': 'Hour Pillar Carrying Yang Blade Pattern',
    '木火伤官': 'Wood & Fire Hurting Officer',
    '杂气偏财': 'Mixed Qi Indirect Wealth',
    '正印天乙': 'Direct Resource with Heavenly Nobleman',
    '正印逢生': 'Direct Resource Nourished in Growth',
    '正印长生': 'Direct Resource in Growth Stage',
    '正官入库': 'Direct Officer Entering Vault',
    '正官坐库': 'Direct Officer in Tomb Vault',
    '正官坐贵': 'Direct Officer Meeting Nobleman',
    '正官长生': 'Direct Officer in Growth Stage',
    '正财坐禄': 'Direct Wealth Anchored in Lu',
    '正财天乙': 'Direct Wealth with Heavenly Nobleman',
    '正财得位': 'Direct Wealth in Proper Station',
    '正财长生': 'Direct Wealth in Growth Stage',
    '死处逢生': 'Rebirth from Extinction Stage',
    '水库归宗': 'Water Reservoir Returning to Ancestry',
    '水库滋润': 'Water Reservoir Nourishing Growth',
    '湿土生金': 'Moist Earth Producing Metal',
    '火土通明': 'Fire & Earth Radiant Splendor',
    '火库余光': 'Fire Vault Residual Radiance',
    '火库余气': 'Fire Vault Residual Qi',
    '火库余温': 'Fire Vault Residual Warmth',
    '火库归宿': 'Fire Vault Ultimate Destination',
    '煞财入库': 'Killings & Wealth Entering Vault',
    '燥土生金': 'Dry Earth Forging Metal',
    '田园禾稼': 'Field Crops & Harvest',
    '绝处逢生': 'Rebirth from Desolation Stage',
    '藤萝系甲': 'Wisteria Clinging to Pine',
    '财库相生': 'Wealth Vault Mutually Generating',
    '财库通明': 'Wealth Vault Radiant & Clear',
    '财库通根': 'Wealth Vault Deeply Rooted',
    '金水伤官': 'Metal & Water Hurting Officer',
    '长生偏官': 'Growth Stage Indirect Officer',
    '长生学堂': 'Growth Stage Scholarly Academy',
    '长生逢食': 'Growth Stage Meeting Eating God',
    '长生食神': 'Growth Stage Eating God',
    '阳刃帝旺': 'Yang Blade at Peak Vigor',
    '食神吐秀': 'Eating God Unleashing Elegance',
    '食神得禄': 'Eating God Anchored in Lu',
    '食神生财': 'Eating God Producing Wealth',
    '食神长生': 'Eating God in Growth Stage',
    '魁罡得位': 'Kui Gang in Proper Station',

    // Part 2
    '专旺长青': 'Evergreen Dominant Monopoly',
    '专旺高冈': 'Towering Mountain Peak Monopoly',
    '专禄专秀': 'Pure Lu Elegance',
    '专禄专美': 'Pure Lu Splendor',
    '专禄坚刚': 'Pure Lu Resilient Steel',
    '专禄浩荡': 'Pure Lu Vast Momentum',
    '专禄清润': 'Pure Lu Pure Moisture',
    '专禄荣昌': 'Pure Lu Prosperous Flourishing',
    '丙辛化水': 'Bing-Xin Transforming into Water',
    '乙庚化金': 'Yi-Geng Transforming into Metal',
    '乙庚暗合': 'Yi-Geng Secret Union',
    '伤官得所': 'Hurting Officer Well-Stationed',
    '伤官暗藏': 'Hurting Officer Concealed',
    '偏印暗藏': 'Indirect Resource Concealed',
    '偏官克制': 'Indirect Officer Restrained',
    '偏财得位': 'Indirect Wealth Stationed',
    '偏财得禄': 'Indirect Wealth Anchored in Lu',
    '剑锋发芒': 'Sword Blade Gleaming Sharp',
    '印绶生身': 'Resource Seal Nourishing Self',
    '印绶相涵': 'Resource Seal Imbued with Vitality',
    '坐印透财': 'Rooted in Resource Revealing Wealth',
    '培植秀木': 'Cultivating Flourishing Wood',
    '培植秀草': 'Nurturing Flourishing Flora',
    '天乙相照': 'Illuminated by Nobleman',
    '威权独掌': 'Monopolizing Supreme Authority',
    '威权震动': 'Resounding Command Authority',
    '学堂逢生': 'Scholarly Academy Reborn',
    '官印并旺': 'Dual Flourishing Officer-Seal',
    '官印得所': 'Officer & Seal Well-Stationed',
    '官印相生': 'Officer & Seal Mutually Generating',
    '官星得润': 'Officer Star Moistened',
    '官星得禄': 'Officer Star Anchored in Lu',
    '官星暗伏': 'Officer Star Concealed Below',
    '官星独透': 'Solo Prominent Officer Star',
    '宝玉生辉': 'Precious Jade Luminescence',
    '寒水凝冰': 'Frigid Water Solidifying to Ice',
    '帝旺之乡': 'Domain of Zenith Vitality',
    '幽光外发': 'Subtle Radiance Emanating',
    '截足悬崖': 'Perilous Precipice Warning',
    '木气余清': 'Residual Wood Clarity',
    '木火通明': 'Wood & Fire Radiant Brilliance',
    '杀印相生': 'Killings Generating Resource',
    '桃花流水': 'Peach Blossom Spring Flow',
    '水土包容': 'Water & Earth Harmonious Embrace',
    '水库润泽': 'Water Reservoir Blessing',
    '水火既济': 'Water & Fire Perfect Equilibrium',
    '汪洋甘露': 'Vast Ocean of Sweet Dew',
    '泄秀生财': 'Channeling Elegance to Produce Wealth',
    '润下纯清': 'Pure Pristine Downward Flow',
    '润土生金': 'Moist Earth Producing Gold',
    '润土解燥': 'Moist Earth Quenching Aridity',
    '源远流长': 'Deep Source Long Flow',
    '激火自明': 'Stirring Flame Self-Illuminating',
    '火候温融': 'Warm Fire Tempering',
    '火土烘炉': 'Fire-Earth Smelting Hearth',
    '火土烘照': 'Fire-Earth Radiant Illumination',
    '火归本根': 'Fire Returning to True Root',
    '火炼真金': 'Fire Refining Pure Gold',
    '炎上生财': 'Blazing Fire Generating Wealth',
    '烘炉炼金': 'Smelting Gold in Furnace',
    '燥土余温': 'Dry Earth Residual Warmth',
    '燥土生香': 'Fragrant Warm Earth',
    '玉露生辉': 'Jade Dew Radiance',
    '珠玉暗蓄': 'Concealed Pearls & Gems',
    '珠玉江河': 'Pearls Washed in River',
    '珠玉淘水': 'Pearls Washed in Stream',
    '珠落火炉': 'Pearls in Smelting Hearth',
    '珠落草丛': 'Pearls in Meadow',
    '秀发文华': 'Radiant Literary Elegance',
    '纯净清泉': 'Pure Crystal Spring',
    '聪明绝顶': 'Supreme Transcendental Intellect',
    '蓄水成池': 'Accumulating Water into Basin',
    '藏金纳宝': 'Storing Gold & Precious Treasures',
    '财官双美': 'Dual Prosperity in Wealth & Honor',
    '财官双集': 'Wealth & Authority Gathering',
    '财官生旺': 'Flourishing Wealth & Authority',
    '财帛入库': 'Treasury Entering Vault',
    '财帛逢春': 'Treasury Welcoming Spring',
    '财库暗藏': 'Concealed Wealth Vault',
    '财杀暗藏': 'Concealed Wealth & Killings',
    '辛金暗藏': 'Xin Metal Concealed Below',
    '金库含珍': 'Metal Vault Containing Rarities',
    '金水汪洋': 'Vast Metal & Water Expanse',
    '金清水秀': 'Pristine Metal & Clear Water',
    '金玉满堂': 'Halls Filled with Gold & Jade',
    '金白土润': 'Pristine Metal & Moist Earth',
    '金白水清': 'Pure Metal & Clear Water',
    '长生吐秀': 'Growth Stage Elegance',
    '阳回大地': 'Yang Warmth Returning to Earth',
    '雨露生花': 'Dew Nourishing Blossoms',
    '露珠沾草': 'Dew Moisture on Grass',
    '飞天禄马': 'Flying Heavenly Lu-Horse',
    '食神得地': 'Eating God Grounded Firmly',
    '魁罡同位': 'Kui Gang Unified Station',
    '魁罡得令': 'Kui Gang in Season',
    '魁罡得地': 'Kui Gang Grounded Firmly',
    '龙潜深渊': 'Dragon Submerged in Deep Waters'
  };

  function getPatternName(name, lang = 'zh') {
    if (lang === 'en') {
      if (PATTERN_NAMES[name]) return PATTERN_NAMES[name];
      if (SANMING_DAY_HOUR_PHRASES[name]) return SANMING_DAY_HOUR_PHRASES[name];
      if (name && name.includes(' / ')) {
        const parts = name.split(' / ').map(p => SANMING_DAY_HOUR_PHRASES[p] || PATTERN_NAMES[p] || p);
        const translated = parts.join(' / ');
        if (!/[\u4e00-\u9fa5]/.test(translated)) return translated;
      }
      for (const [k, v] of Object.entries(PATTERN_NAMES)) {
        if (name && name.includes(k.split(' ')[0])) return v;
      }
      if (name && (name.includes('阳刃') || name.includes('羊刃') || name.includes('月刃'))) {
        return 'Yang Blade Pattern (Sovereign General)';
      }
      if (name && /[\u4e00-\u9fa5]/.test(name)) {
        let res = name;
        for (const [k, v] of Object.entries(SANMING_DAY_HOUR_PHRASES)) {
          if (res.includes(k)) res = res.split(k).join(v);
        }
        if (!/[\u4e00-\u9fa5]/.test(res)) return res;
        return 'Special Day-Hour Destination Pattern';
      }
    }
    return name;
  }

  function getTierName(tier, lang = 'zh') {
    if (lang === 'en' && TIERS[tier]) return TIERS[tier];
    return tier;
  }

  function getVigorStatus(status, lang = 'zh') {
    if (lang === 'en') {
      if (VIGOR_STATUSES[status]) return VIGOR_STATUSES[status];
      for (const [k, v] of Object.entries(VIGOR_STATUSES)) {
        if (status && (status.includes(k) || k.includes(status))) return v;
      }
      if (status && status.includes('身旺')) return 'Strong / Robust';
      if (status && status.includes('身弱')) return 'Weak / Nourishing Needed';
      if (status && status.includes('极旺')) return 'Extremely Strong';
      if (status && status.includes('极弱')) return 'Extremely Weak';
    }
    return status;
  }

  /**
   * Deep translation of PortraitEngine analysis output to English
   */
  function translatePortrait(pData, lang = 'zh') {
    if (lang !== 'en') return pData;

    // Deep clone to avoid mutating original
    const p = JSON.parse(JSON.stringify(pData));

    // Day Master Desc
    const dmInfo = STEMS[p.dayMaster] || { en: p.dayMaster, el: 'Wood', pol: 'Yang' };
    p.dayMasterDesc = dmInfo.en;

    // Vigor
    if (p.vigor) {
      p.vigor.status = getVigorStatus(p.vigor.status, 'en');
      if (p.vigor.summary) {
        p.vigor.summary = p.vigor.summary
          .replace(/日主元神得分/g, 'Day Master vigor score: ')
          .replace(/定性为：/g, 'Evaluated as: ')
          .replace(/月令/g, 'Seasonal Mandate ')
          .replace(/地支/g, 'Terrestrial Rooting ')
          .replace(/通根/g, 'rooted ')
          .replace(/天干/g, 'Heavenly Stems ')
          .replace(/得令/g, 'in-season mandate')
          .replace(/失时/g, 'out-of-season')
          .replace(/得地/g, 'earthly support')
          .replace(/得势/g, 'stem assistance')
          .replace(/身旺/g, 'Strong Day Master')
          .replace(/身弱/g, 'Weak Day Master');
      }
      if (p.vigor.metrics) {
        if (p.vigor.metrics.ling) {
          p.vigor.metrics.ling.name = '① Seasonal Mandate (Month)';
          p.vigor.metrics.ling.status = p.vigor.metrics.ling.status
            .replace(/当令秉权/g, 'Commanding Seasonal Power')
            .replace(/得生逢令/g, 'Nourished by Season')
            .replace(/受令盗泄/g, 'Drained by Season')
            .replace(/受令克耗/g, 'Restrained by Season')
            .replace(/不得令/g, 'Out of Season');
        }
        if (p.vigor.metrics.di) {
          p.vigor.metrics.di.name = '② Terrestrial Rooting (Branches)';
          p.vigor.metrics.di.roots = p.vigor.metrics.di.roots.map(r => 
            r.replace(/通根于/g, 'Rooted in ')
             .replace(/为阳刃极旺之根/g, ' (Yang Blade solid root)')
             .replace(/为禄位专气强根/g, ' (Lu prosperity pure root)')
             .replace(/为长生中气生扶根/g, ' (Growth qi nourishing root)')
             .replace(/为余气微根/g, ' (Residual subtle root)')
          );
        }
        if (p.vigor.metrics.shi) {
          p.vigor.metrics.shi.name = '③ Alignment Momentum (Stems)';
          p.vigor.metrics.shi.assists = p.vigor.metrics.shi.assists.map(a => 
            a.replace(/年干透/g, 'Year Stem ')
             .replace(/月干透/g, 'Month Stem ')
             .replace(/时干透/g, 'Hour Stem ')
             .replace(/帮身/g, ' assists self')
             .replace(/生身/g, ' generates self')
          );
        }
      }
    }

    // Climate
    if (p.climate) {
      p.climate.primary = getGod(p.climate.primary, 'en');
      p.climate.secondary = getGod(p.climate.secondary, 'en');
      p.climate.climate = p.climate.climate
        .replace(/日主生于/g, 'Day Master born in ')
        .replace(/月，/g, ' Month: ')
        .replace(/调候/g, 'seasonal balance ')
        .replace(/寒暖/g, 'cold and warm ')
        .replace(/燥湿/g, 'dry and humid ');
      p.climate.favorable = p.climate.favorable.map(f => getGod(f, 'en'));
      p.climate.taboos = p.climate.taboos.map(t => getGod(t, 'en'));
    }

    // Patterns
    if (p.patterns && Array.isArray(p.patterns)) {
      const dm = p.dayMaster;
      const dmInfo = STEMS[dm] || { en: dm };
      const dmEn = dmInfo.en;

      p.patterns.forEach(pat => {
        const origName = pat.name;
        pat.name = getPatternName(pat.name, 'en');
        pat.tierName = getTierName(pat.tierName, 'en');

        // Translate Tag
        const tagMap = {
          '月令本命正格 / 终身大纲': 'Monthly Dominant Pattern / Foundational Life Blueprint',
          '🔥 顶级威权破局三元贵格': '🔥 Supreme Authority & Breakthrough Commander Pattern',
          '⚔️ 铁血开拓威权格': '⚔️ Iron-Willed Pioneering Authority Pattern',
          '💡 智谋破局大贵格': '💡 Strategic Ingenuity Breakthrough Noble Pattern',
          '📜 名扬天下文贵格': '📜 Renowned Scholarship & High Intellect Pattern',
          '🏛️ 威信声望名流格': '🏛️ High Prestige & Institutional Authority Pattern',
          '🌟 英雄压众大将格': '🌟 Formidable Leadership & Master Strategist Pattern',
          '💰 财源滚滚商贾格': '💰 Abundant Wealth & Commercial Innovation Pattern',
          '⚡ 掌权司衡威猛奇格': '⚡ Commanding Sovereign & Executive Power Pattern',
          '日时特用格 / 宿命气象': 'Day-Hour Special Configuration / Destination Archetype'
        };
        if (pat.tag && tagMap[pat.tag]) {
          pat.tag = tagMap[pat.tag];
        }

        // Translate Tier Description
        const tierDescMap = {
          '主导命主55%以上的人生大纲、性格底色与核心天赋跑道': 'Dominates over 55% of the native\'s life blueprint, foundational mindset, and primary talent lane.',
          '主导命主的重大决断力、危机攻坚战与核心专业技能': 'Drives major decision-making capabilities, crisis breakthrough power, and core professional expertise.',
          '主导命主的社交风采、人际吸引力与后半生晚景归宿': 'Empowers social charisma, interpersonal magnetism, and late-life fulfillment and legacy.',
          '主导流年岁运中的特定机缘爆发与跨界兼通才干': 'Triggers specific milestone breakthroughs and multidisciplinary mastery during annual luck cycles.'
        };
        if (pat.tierDesc && tierDescMap[pat.tierDesc]) {
          pat.tierDesc = tierDescMap[pat.tierDesc];
        }

        // Translate Weight Rationale
        if (pat.weightReason) {
          pat.weightReason = pat.weightReason
            .replace(/月令提纲秉令司权基础分48%/g, 'Month seasonal mandate baseline score 48%')
            .replace(/月干透出令星主神\(\+8%\)/g, 'Month stem reveals commanding god (+8%)')
            .replace(/三元煞刃伤跨柱汇聚\(\+36%\)/g, 'Cross-pillar confluence of Killings, Blade & Hurting Officer (+36%)')
            .replace(/杀刃\/伤杀双煞交辉\(\+30%\)/g, 'Convergence of Killings-Blade / Hurting-Killings double power (+30%)')
            .replace(/官杀食伤与印星生化\(\+28%\)/g, 'Transformation of Power/Output with Resource stars (+28%)')
            .replace(/天干地支相生互化\(\+25%\)/g, 'Heavenly Stems & Earthly Branches mutual generation (+25%)')
            .replace(/日主自坐与时支宿命发越\(\+20%\)/g, 'Day Master root & Hour Branch destination empowerment (+20%)')
            .replace(/时干秀气引通\(\+4%\)/g, 'Hour stem output channeling (+4%)')
            .replace(/柱中五行气象助化\(\+20%\)/g, 'Elemental circulation empowerment in chart (+20%)')
            .replace(/，/g, ', ');
        }

        // Deep Translation for 4-Part Structure (Meaning, Source, Formation, Usage)
        if (origName.includes('杀刃带伤')) {
          pat.name = 'Killings & Blade with Hurting Officer (Commanding Commander Pattern)';
          pat.meaning = 'The natal chart unites the formidable courage of Seven Killings, the iron will of the Yang Blade, and the strategic agility of the Hurting Officer. Seven Killings drives pioneering authority and decisive resolve; Yang Blade endows fearlessness and steel discipline; Hurting Officer unleashes brilliant strategy and disruptive innovation. Together, they form one of Chinese metaphysics\' most powerful commander archetypes, capable of turning catastrophic crises into monumental triumphs.';
          pat.source = 'Yuan Hai Zi Ping Vol. 3: \'Treatise on Yang Blade\'; Zi Ping Zhen Quan Ch. 10: \'Treatise on Hurting Officer\'; San Ming Tong Hui Vol. 5: \'Ming Tong Verse\': "Killings without Blade lack prominence; Blade without Killings lacks authority. When met with Hurting Officer unleashing elegance, Killings and Blade transform into supreme sovereign power."';
          pat.formation = '【Natal Formation Verification】① Yang Blade anchored in terrestrial branch, giving the Day Master an unyielding constitutional frame capable of wielding fierce power; ② Seven Killings revealed on stems, generating sharp authority; ③ Hurting Officer channeling radiant intellect. The three violent stars check and balance each other, transforming raw ferocity into supreme executive competence.';
          pat.usage = '🎯【Practical Application & Modern Execution】\n' +
            '💼【Suitable Modern Careers】: Crisis turnaround CEO, top criminal defense attorney, military/counter-terrorism high commander, leading neurosurgeon/trauma surgeon, deep-tech founder, cross-border M&A strategist.\n' +
            '👥【Interpersonal Dynamics】: Emanates commanding authority and decisive drive. Highly protective of loyal teammates and commands deep respect; disdains flattery and passive excuses. In intimate relationships, highly protective but can be fiercely demanding; benefits from deliberate gentleness and active listening.\n' +
            '🌟【Archetype Persona】: The battle-tested commander who takes charge amidst chaotic firestorms, carving an unyielding path to victory where ordinary leaders surrender.';
        } else if (origName.includes('羊刃驾杀')) {
          pat.name = 'Yang Blade Controlling Seven Killings Pattern (Dual Power of Blade & Spear)';
          pat.meaning = 'Seven Killings represents fierce external pressure and conquering power, while Yang Blade provides the sharpest physical and psychological armor. When both converge in balance, martial courage subdues fierce adversity while structured discipline restrains reckless impulse, creating an authoritative, pioneering leader.';
          pat.source = 'Yuan Hai Zi Ping: "When Yang Blade is met without Killings, injury follows; when Killings and Blade are both complete, authority governs frontiers." Zi Ping Zhen Quan: \'Treatise on Indirect Officer\'.';
          pat.formation = '【Natal Formation Verification】Day Master commands Yang Blade support in branches, paired with Seven Killings revealed in the pillars. Energy between the blade and the general is harmoniously matched.';
          pat.usage = '🎯【Practical Application & Modern Execution】\n' +
            '💼【Suitable Modern Careers】: Judicial inspection, defense technology, mega-infrastructure director, high-stakes proprietary trading, emergency incident command.\n' +
            '👥【Interpersonal Dynamics】: A person of unwavering integrity whose word is steel. Commands natural respect from subordinates; must guard against blunt speech and cultivate warmth in personal life.\n' +
            '🌟【Archetype Persona】: The disciplined, iron-willed project director who fearlessly undertakes the most perilous missions and delivers unwavering results.';
        } else if (origName.includes('伤官合杀')) {
          pat.name = 'Hurting Officer Combining with Seven Killings (Strategic Noble Pattern)';
          pat.meaning = 'Hurting Officer embodies supreme intellect and tactical ingenuity, while Seven Killings represents raw authority. Combining the two channels intellectual brilliance into disarming existential threats, achieving bloodless victories through strategic mastery.';
          pat.source = 'Zi Ping Zhen Quan Ch. 10: "When Hurting Officer unites with Killings, civil and martial honors are both achieved." San Ming Tong Hui: \'Ming Tong Verse\'.';
          pat.formation = '【Natal Formation Verification】Natal chart features both Hurting Officer and Seven Killings, with tactical agility successfully transforming external pressure into strategic power.';
          pat.usage = '🎯【Practical Application & Modern Execution】\n' +
            '💼【Suitable Modern Careers】: Senior think tank advisor, chief negotiation officer, principal technical architect, complex litigation lawyer, chief brand strategist.\n' +
            '👥【Interpersonal Dynamics】: Possesses piercing psychological discernment; views relationships through strategic collaboration and mutual value creation. Yearns for intellectual parity in love.\n' +
            '🌟【Archetype Persona】: The elite strategist who navigates intricate labyrinthine stakeholder battles, converting chaos into triumphant consensus.';
        } else if (origName.includes('伤官配印')) {
          pat.name = 'Hurting Officer Supported by Resource Seal (Scholarly Noble Pattern)';
          pat.meaning = 'Hurting Officer represents radiant creativity and intellectual audacity, which unchecked can trigger conflict; the Resource Seal embodies wisdom, ethics, and grounded restraint. Together, the seal tempers impulsive pride while Hurting Officer brings dynamic vitality to deep academic scholarship, creating transformative, timeless masterworks.';
          pat.source = 'Zi Ping Zhen Quan Ch. 10: "When Hurting Officer is paired with the Resource Seal, honor and nobility are boundless." Yuan Hai Zi Ping: \'Xi Ji Pian\'.';
          pat.formation = '【Natal Formation Verification】Hurting Officer is prominently revealed to showcase talent, while supported and buffered by Direct or Indirect Resource stars, creating perfect harmony between brilliance and virtue.';
          pat.usage = '🎯【Practical Application & Modern Execution】\n' +
            '💼【Suitable Modern Careers】: University professor, distinguished think-tank fellow, acclaimed author/screenwriter, patent scientist, chief enterprise architect, senior justice.\n' +
            '👥【Interpersonal Dynamics】: Cultured, elegant, and intellectually engaging. Highly respected by mentors and peers. Harmonious and dependable in domestic life.\n' +
            '🌟【Archetype Persona】: The esteemed scholar-polymath who can produce seminal theoretical treatises while captivating vast audiences from the podium.';
        } else if (origName.includes('杀印相生') || origName.includes('官印相生')) {
          pat.name = 'Official & Resource Mutually Generating Pattern (Institutional Authority)';
          pat.meaning = 'Official/Killings represents authority and rigorous challenges, while the Resource Seal embodies institutional credibility, scholarship, and moral character. Power generates resource, and resource nourishes the self, flawlessly converting external pressure into enduring public prestige.';
          pat.source = 'Yuan Hai Zi Ping: "When Killings and Resource generate each other, military and administrative emblems are wielded; when Resource meets Officer, scholarship reaches the summit."';
          pat.formation = '【Natal Formation Verification】Both Officer/Killings and Resource Seal are present and unmarred; authority does not injure the Day Master but rather distills into pure institutional credibility.';
          pat.usage = '🎯【Practical Application & Modern Execution】\n' +
            '💼【Suitable Modern Careers】: Senior public sector administration, state enterprise director, president of authoritative trade associations, university president, medical institution dean.\n' +
            '👥【Interpersonal Dynamics】: Dignified, highly ethical, and deeply trusted by leadership and subordinates alike. Acts as an unshakable anchor in any organization.\n' +
            '🌟【Archetype Persona】: The revered statesman-executive who governs with equal parts decisive authority and benevolent wisdom.';
        } else if (origName.includes('食神制杀')) {
          pat.name = 'Eating God Restraining Seven Killings Pattern (Strategic General Pattern)';
          pat.meaning = 'Seven Killings is intense and conquering, while Eating God is magnanimous and profoundly wise. Eating God uses graceful composure and superior strategy to neutralize aggression, creating the archetype of "gentle on the surface, master of the battlefield within."';
          pat.source = 'Yuan Hai Zi Ping: "When Eating God restrains Seven Killings, a solitary hero overawes tens of thousands." Zi Ping Zhen Quan: \'Treatise on Eating God\'.';
          pat.formation = '【Natal Formation Verification】Eating God and Seven Killings are cleanly assembled without Indirect Resource (Owl) clashing or disrupting the flow.';
          pat.usage = '🎯【Practical Application & Modern Execution】\n' +
            '💼【Suitable Modern Careers】: Senior medical specialist, engineering fellow, chief engineer, high-tech division president, composite strategic leader.\n' +
            '👥【Interpersonal Dynamics】: Gentle exterior with an unyielding interior core. Highly empathetic, expertly diffusing major conflicts through subtle, quiet diplomacy.\n' +
            '🌟【Archetype Persona】: The chief cardiovascular surgeon who faces life-and-death crises with calm precision and restorative mastery.';
        } else if (origName.includes('食伤生财')) {
          pat.name = 'Output Generating Wealth Pattern (Prodigious Commercial Fortune)';
          pat.meaning = 'Eating God and Hurting Officer represent creative intelligence and visionary talent, while Wealth stars represent material realization and commercial execution. Intellectual creativity continually converts into capital flow, endowing the native with natural business monetization prowess.';
          pat.source = 'Yuan Hai Zi Ping: "When Output generates Wealth, it surpasses ordinary official rank." San Ming Tong Hui: \'Treatise on Wealth Stars\'.';
          pat.formation = '【Natal Formation Verification】Vigorous Output stars seamlessly feed into Direct or Indirect Wealth stars, creating an inexhaustible fountain of commercial value.';
          pat.usage = '🎯【Practical Application & Modern Execution】\n' +
            '💼【Suitable Modern Careers】: Venture capitalist, tech startup founder, premier media IP monetization, cross-border commerce pioneer, creative commercial director.\n' +
            '👥【Interpersonal Dynamics】: High emotional intelligence, compelling communicator, and expansive networker. Masters the art of "enlarging the pie" and sharing spoils with allies.\n' +
            '🌟【Archetype Persona】: The visionary serial entrepreneur who builds breakthrough consumer products, scaling them rapidly into generational wealth.';
        } else if (origName.includes('魁罡')) {
          pat.name = 'Kui Gang Sovereign Pattern (Unyielding Executive Authority)';
          pat.meaning = 'Kui Gang occupies the cardinal positions of celestial power. It endows the native with unflinching courage, brilliant intellect, fearlessness under acute danger, and extraordinary command authority.';
          pat.source = 'Yuan Hai Zi Ping: "When Kui Gang sits in its true cardinal position, it wields sovereign justice and balance." San Ming Tong Hui: \'Treatise on Kui Gang\'.';
          pat.formation = '【Natal Formation Verification】Day Pillar occupies a true Kui Gang position, drawing upon primordial celestial authority.';
          pat.usage = '🎯【Practical Application & Modern Execution】\n' +
            '💼【Suitable Modern Careers】: High judicial inspector, military general, iron-fisted corporate restructuring CEO, head of critical crisis investigations.\n' +
            '👥【Interpersonal Dynamics】: Imposing and intolerant of deceit. Standalone problem solver; advised to leave boardroom authority outside the front door of home.\n' +
            '🌟【Archetype Persona】: The fearless reformer who dismantles systemic corruption and commands organizational turnaround against all odds.';
        } else if (pat.isMain) {
          if (origName.includes('伤官')) {
            pat.name = 'Hurting Officer Pattern (Radiant Brilliance & Innovation)';
            pat.meaning = 'The monthly mandate reveals the Hurting Officer star, symbolizing unbounded creative genius, rebellious originality, and relentless drive to challenge stale conventions. The native thrives when expressing unique viewpoints and producing breakthrough intellectual work.';
            pat.source = 'Zi Ping Zhen Quan Ch. 10: \'Treatise on Hurting Officer\'; San Ming Tong Hui Vol. 5; Yuan Hai Zi Ping: \'Xi Ji Pian\'.';
            pat.formation = '【Natal Formation Verification】Month branch contains the Hurting Officer star, with the Day Master commanding sufficient vitality to withstand the rapid drainage of creative fire.';
            pat.usage = '🎯【Practical Application & Modern Execution】\n' +
              '💼【Suitable Modern Careers】: Creative director, media visionary, disruptive technology architect, investigative analyst, intellectual property founder.\n' +
              '👥【Interpersonal Dynamics】: Highly charismatic, witty, and magnetic, yet prone to sharp honesty. Cultivating patience and humility deepens enduring alliances.';
          } else if (origName.includes('七杀') || origName.includes('偏官')) {
            pat.name = 'Seven Killings Pattern (Pioneering Combat & Sovereign Will)';
            pat.meaning = 'The monthly mandate commands Seven Killings, representing crisis resilience, executive boldness, and the appetite to conquer formidable frontiers. The native excels in high-pressure environments that overwhelm lesser spirits.';
            pat.source = 'Zi Ping Zhen Quan Ch. 11: \'Treatise on Indirect Officer\'; Yuan Hai Zi Ping: \'Ji Shan Pian\'.';
            pat.formation = '【Natal Formation Verification】Seven Killings rules the seasonal mandate, tempered by proper Output restraint or converted by Resource support.';
            pat.usage = '🎯【Practical Application & Modern Execution】\n' +
              '💼【Suitable Modern Careers】: Crisis management, strategic defense, corporate turnaround, high-risk capital markets, emergency operations command.\n' +
              '👥【Interpersonal Dynamics】: Direct, protective, and commanding. Prefers deeds over pleasantries; thrives with teams that honor mutual commitments.';
          } else if (origName.includes('正官')) {
            pat.name = 'Direct Officer Pattern (Upright Governance & Noble Prestige)';
            pat.meaning = 'The monthly mandate commands the Direct Officer star, representing integrity, institutional stewardship, orderly systems, and esteemed social standing. The native is naturally suited to hold high office and govern complex organizations with fairness.';
            pat.source = 'Zi Ping Zhen Quan Ch. 9: \'Treatise on Direct Officer\'; Yuan Hai Zi Ping: \'Ji Shan Pian\'.';
            pat.formation = '【Natal Formation Verification】Direct Officer star is pure and unblemished by Hurting Officer clashes or chaotic punishment in the pillars.';
            pat.usage = '🎯【Practical Application & Modern Execution】\n' +
              '💼【Suitable Modern Careers】: Corporate executive leadership, judiciary, state administration, compliance supervision, institutional governance.\n' +
              '👥【Interpersonal Dynamics】: Principled, courteous, and trustworthy. A pillar of reliability in both career networks and family life.';
          } else if (origName.includes('财')) {
            pat.name = 'Direct & Indirect Wealth Pattern (Pragmatic Enterprise & Abundance)';
            pat.meaning = 'The monthly mandate commands Wealth stars, embodying acute commercial instinct, resource mobilization skills, and pragmatic execution. The native possesses an organic ability to recognize market inefficiencies and structure profitable enterprises.';
            pat.source = 'Zi Ping Zhen Quan Ch. 12: \'Treatise on Wealth\'; San Ming Tong Hui: \'Treatise on Direct & Indirect Wealth\'.';
            pat.formation = '【Natal Formation Verification】Wealth stars thrive in the seasonal mandate, supported by an energetic frame capable of bearing substantial commercial assets.';
            pat.usage = '🎯【Practical Application & Modern Execution】\n' +
              '💼【Suitable Modern Careers】: Financial asset management, commercial trade, corporate development, investment banking, entrepreneurial ventures.\n' +
              '👥【Interpersonal Dynamics】: Pragmatic, socially adept, and generous. Highly skilled at creating win-win commercial frameworks.';
          } else if (origName.includes('印')) {
            pat.name = 'Resource & Seal Pattern (Scholarly Depth & Generous Wisdom)';
            pat.meaning = 'The monthly mandate commands the Resource Seal, representing academic wisdom, benevolence, spiritual grounding, and institutional heritage. The native thrives in advisory, teaching, and cultural stewardship roles.';
            pat.source = 'Zi Ping Zhen Quan Ch. 13: \'Treatise on Resource Seal\'; Yuan Hai Zi Ping: \'Ji Shan Pian\'.';
            pat.formation = '【Natal Formation Verification】Resource star is pure and unobstructed by excessive Wealth stars, preserving clear academic and spiritual clarity.';
            pat.usage = '🎯【Practical Application & Modern Execution】\n' +
              '💼【Suitable Modern Careers】: Academic research, publishing, healthcare, educational leadership, policy think tanks, cultural preservation.\n' +
              '👥【Interpersonal Dynamics】: Gentle, nurturing, and compassionate. Cherished by mentors and younger generations as a steady guiding light.';
          } else if (origName.includes('食神')) {
            pat.name = 'Eating God Pattern (Elegance, Longevity & Natural Abundance)';
            pat.meaning = 'The monthly mandate commands the Eating God star, the prime star of tranquility, artistic refinement, generous hospitality, and graceful prosperity. The native possesses natural creative taste and lives with poised composure.';
            pat.source = 'Zi Ping Zhen Quan Ch. 10: \'Treatise on Eating God\'; Yuan Hai Zi Ping: \'Cun Jin Fu\'.';
            pat.formation = '【Natal Formation Verification】Eating God is revealed cleanly without Indirect Resource (Owl) disruption, producing a continuous stream of creative output.';
            pat.usage = '🎯【Practical Application & Modern Execution】\n' +
              '💼【Suitable Modern Careers】: Culinary entrepreneurship, fine arts, wellness, boutique architecture, luxury brand consulting, creative lifestyle writing.\n' +
              '👥【Interpersonal Dynamics】: Warm, peaceable, and deeply loved by friends. Disdains trivial conflict and brings harmony to all social circles.';
          } else if (origName.includes('建禄') || origName.includes('月劫')) {
            pat.name = 'Established Lu / Pure Companion Pattern (Self-Reliant Enterprise)';
            pat.meaning = 'The monthly mandate houses the Day Master\'s pure prospering branch (Lu). Endows the native with robust vitality, independent spirit, resilience under severe hardship, and the capacity to build an empire from scratch.';
            pat.source = 'Zi Ping Zhen Quan Ch. 14: \'Treatise on Established Lu\'; San Ming Tong Hui Vol. 7; Yuan Hai Zi Ping.';
            pat.formation = '【Natal Formation Verification】Month branch corresponds to the Day Master\'s pure Lu essence, establishing an unshakable constitutional foundation.';
            pat.usage = '🎯【Practical Application & Modern Execution】\n' +
              '💼【Suitable Modern Careers】: Independent venture founding, pioneering new operational territories, major engineering management, strategic execution.\n' +
              '👥【Interpersonal Dynamics】: Proud, self-sufficient, and loyal. Benefits from learning to share profits generously and avoid lone-wolf isolation.';
          } else if (origName.includes('阳刃') || origName.includes('羊刃')) {
            pat.name = 'Yang Blade Pattern (Iron-Willed Commander & Supreme Valour)';
            pat.meaning = 'The monthly mandate commands the Yang Blade, the zenith of Yang vitality, representing extreme resilience, razor-sharp decisiveness, fearlessness in adversity, and commanding executive authority. Thrives when balanced by Seven Killings.';
            pat.source = 'Zi Ping Zhen Quan Ch. 4: \'Treatise on Yang Blade\'; Yuan Hai Zi Ping Vol. 3; San Ming Tong Hui Vol. 5.';
            pat.formation = '【Natal Formation Verification】The native was born in the Yang Blade month with commanding prime vigor, demonstrating monumental perseverance and breakthrough power under stress.';
            pat.usage = '🎯【Practical Application & Modern Execution】\n' +
              '💼【Suitable Modern Careers】: Crisis turnaround CEO, top criminal defense litigation, emergency special operations, advanced surgical medicine, high-stakes combat sports.\n' +
              '👥【Interpersonal Dynamics】: Fiercely loyal, protective of allies, and intolerant of weakness or duplicity. Benefits from emotional self-regulation and gentle communication with loved ones.';
          }
        } else if (pat.isSpecial) {
          // Special Day-Hour Pattern (San Ming Tong Hui)
          pat.name = getPatternName(origName, 'en');
          if (/[\u4e00-\u9fa5]/.test(pat.name)) {
            pat.name = 'Special Day-Hour Destination Pattern';
          }
          pat.meaning = `Day Master [${dmEn}] meets the Hour Branch, establishing the destination archetype '${pat.name}'. This pattern reveals the elemental interaction between the core self and the late-life hour pillar, reflecting late-career fulfillment, creative expression, and enduring prosperity.`;
          pat.source = `San Ming Tong Hui Vol. 8/9: '60 JiaZi Day-Hour Treatises'; cross-referenced with Zi Ping Zhen Quan ('Success & Failure of Useful Gods') and Yuan Hai Zi Ping ('Ten Gods Methodology').`;
          pat.formation = `【Natal Formation Verification】① Day Master ${dmEn} requires seasonal mandate or root support in branches to flourish; ② Hour Branch must remain free from severe clashing, punishment, or harm from the day branch or transits; ③ Useful gods must be potent and revealed on stems, while adverse stars are restrained or transformed.`;
          pat.usage = `① Element Strategy: Balance Resource/Companions vs Wealth/Officer/Output according to Day Master vigor (strong Day Master favors output and wealth drainage; weak Day Master favors resource nourishment). ② Career Blueprint: Aligned with the '${pat.name}' archetype, scholarly paths favor education, cultural media, and advisory roles; executive paths favor administration, law, engineering, and corporate management; dual wealth-officer favors entrepreneurship. ③ Luck Cycle Guidance: Prosperous upon encountering harmonious auspicious cycles; maintain prudent and grounded cultivation when encountering challenging clashing stars.`;
        }

        // Ensure zero residual Chinese on pat.verse and any pattern field in EN mode
        if (pat.verse && /[\u4e00-\u9fa5]/.test(pat.verse)) {
          pat.verse = '';
        }
        if (pat.name && /[\u4e00-\u9fa5]/.test(pat.name)) {
          pat.name = getPatternName(pat.name, 'en');
          if (/[\u4e00-\u9fa5]/.test(pat.name)) {
            pat.name = 'Special Auspicious Pattern';
          }
        }

        // Translate Pattern Grade & Purity Evaluation (Qing-Zhuo Doctrine)
        if (pat.gradeEvaluation) {
          const ge = pat.gradeEvaluation;
          ge.tier = ge.tierEn || ge.tier;
          ge.strengthsAndFlaws = ge.strengthsAndFlawsEn || ge.strengthsAndFlaws;
          ge.whyThisGrade = ge.whyThisGradeEn || ge.whyThisGrade;
          ge.bottleneck = ge.bottleneckEn || ge.bottleneck;
          ge.floorBaseline = ge.floorBaselineEn || ge.floorBaseline;
          ge.elevationPath = ge.elevationPathEn || ge.elevationPath;
        }
      });
    }

    // Broken Patterns Translation
    if (p.brokenPatterns && Array.isArray(p.brokenPatterns)) {
      p.brokenPatterns.forEach(bp => {
        bp.name = getPatternName(bp.name, 'en');
        bp.brokenType = 'Broken & Excised (Overriding Stars Clash)';
        bp.brokenReason = 'Canonical Rule from 《Zi Ping Zhen Quan》 and 《Yuan Hai Zi Ping》: Direct Officer demands pristine purity and cannot tolerate clashing or corruption from Yang Blade, Seven Killings, or Hurting Officer. Because the natal chart contains potent Yang Blade and Seven Killings (or Hurting Officer), the pristine noble authority of Direct Officer has been shattered and rendered null. According to orthodox Ziping de-confliction doctrine, this corrupted pattern is decisively excised! The life trajectory is fully commanded by the genuine authoritative (Killings-Blade) and expressive configurations.';
      });
    }

    // Defects
    if (p.defects && p.defects.cards) {
      const defectTitles = {
        'psychological': { title: '🧠 Fatal Psychological Blindspots & Ego Traps', sub: 'Ego Vulnerabilities' },
        'workplace': { title: '💼 Career Reefs & Workplace Minefields', sub: 'Career Hazards' },
        'wealth': { title: '💰 Wealth Leaks & Business Traps', sub: 'Financial Vulnerabilities' },
        'health': { title: '🩺 Elemental Imbalance & Physical Vulnerabilities', sub: 'Health Blindspots' },
        'remedies': { title: '🛡️ Strategic Antidotes & Fortress Building', sub: 'Practical Countermeasures' }
      };

      p.defects.cards.forEach(card => {
        if (defectTitles[card.id]) {
          card.title = defectTitles[card.id].title;
          card.subtitle = defectTitles[card.id].sub;
        }
        if (card.points && Array.isArray(card.points)) {
          card.points.forEach(pt => {
            pt.label = pt.label
              .replace(/死穴/g, 'Fatal Trap: ')
              .replace(/盲区/g, 'Blind Spot: ')
              .replace(/暗礁/g, 'Hidden Reef: ')
              .replace(/雷区/g, 'Minefield: ')
              .replace(/漏斗/g, 'Financial Leak: ')
              .replace(/偏枯/g, 'Organ Weakness: ')
              .replace(/解药/g, 'Antidote: ')
              .replace(/防线/g, 'Defense Line: ');
          });
        }
      });
    }

    // Mental Friction & Factory Mind Manual
    if (p.mentalFriction) {
      const mf = p.mentalFriction;
      if (mf.score >= 82) {
        mf.level = 'Severe Rumination (Overthinking Loop)';
      } else if (mf.score >= 68) {
        mf.level = 'Moderate Friction (Hypervigilant Fatigue)';
      } else {
        mf.level = 'Mild Introspection (Reflective Mode)';
      }

      if (mf.primaryRootEn) {
        mf.primaryRoot = mf.primaryRootEn;
      } else {
        mf.primaryRoot = mf.primaryRoot
          .replace(/伤官/g, 'Hurting Officer (Shang Guan) ')
          .replace(/七杀/g, 'Seven Killings (Qi Sha) ')
          .replace(/羊刃/g, 'Yang Blade ')
          .replace(/偏印/g, 'Indirect Resource (Pian Yin) ')
          .replace(/身弱/g, 'Weak Day Master ')
          .replace(/完美主义/g, 'perfectionism ')
          .replace(/内耗/g, 'mental rumination ');
      }
      if (mf.triggersEn && Array.isArray(mf.triggersEn) && mf.triggersEn.length > 0) {
        mf.triggers = mf.triggersEn;
      }
      
      const solEnTitles = [
        { 
          name: '⚡ 1. 3-Minute Somatic Interrupt', 
          theme: 'Physical Nervous Reset (Body Resets Mind)',
          steps: [
            '【Instant Water Shock】Splash ice-cold water onto your face and wrists for 15 seconds to stimulate the diving reflex and break amygdala hyperactivity.',
            '【Tactical 4-7-8 Breathing】Inhale through nose for 4s, hold breath for 7s, exhale slowly through mouth for 8s; repeat 3 times to switch autonomic nerve to parasympathetic calm.',
            '【Environment Disconnect】Immediately stand up, leave your current chair/desk, walk briskly for 2 minutes to physically disrupt the mental looping state.'
          ]
        },
        { 
          name: '🧠 2. Circle of Influence & Boundaries', 
          theme: 'Psychological Boundary & Delayed Response',
          steps: [
            '【Circle of Control Audit】Draw two columns: "Can I influence this in the next 24 hours?" vs "Is this entirely external?" Completely discard external noise.',
            '【24-Hour Delayed Agreement】Never say yes immediately when asked. Standard reply: "Let me check my schedule and get back to you by tomorrow noon."',
            "【Separation of Tasks】Realize other people's emotions and expectations are their tasks, not your responsibility to appease."
          ]
        },
        { 
          name: '🚀 3. Done > Perfect Action Protocol', 
          theme: 'Anti-Procrastination & Downscaling',
          steps: [
            '【Downscale to Minimum Atomic Step】Break the intimidating project down to an absurdly trivial 2-minute starter action (e.g. open a blank document, write one sentence).',
            '【Embrace the "Garbage First Draft"】Give yourself permission to produce imperfect initial work: "Any finished draft beats an immaculate hallucination in your head."',
            '【Strict 25-Minute Sprint】Set a 25-minute Pomodoro timer with all notifications silenced. Focus solely on producing volume, completely pausing quality judgment.'
          ]
        },
        { 
          name: '🌌 4. Metaphysical Channeling', 
          theme: 'Converting Vulnerability into High Productivity',
          steps: [
            '【Channel Hurting Officer & Seven Killings】Redirect hyper-critical perfectionism outward into specialized code architecture, product design, or investigative auditing.',
            '【Channel Indirect Resource (Pian Yin)】Channel over-deep thinking into deep-dive research, systematic synthesis, and creating strategic IP rather than aimless worrying.',
            '【Weak Day Master Defense】Embrace deliberate low-profile positioning: avoid direct conflicts, leverage team alliances, and preserve core vital energy.'
          ]
        }
      ];

      if (mf.solutions && Array.isArray(mf.solutions)) {
        mf.solutions.forEach((sol, idx) => {
          if (solEnTitles[idx]) {
            sol.name = solEnTitles[idx].name;
            sol.theme = solEnTitles[idx].theme;
            sol.steps = solEnTitles[idx].steps;
          }
        });
      }

      // Zen & Dao Trinity Wisdom Translation
      if (mf.zenDaoWisdom) {
        const zd = mf.zenDaoWisdom;
        zd.title = zd.titleEn || zd.title;
        zd.titleZh = zd.titleEn || zd.titleZh;
        zd.subtitle = zd.subtitleEn || zd.subtitle;
        zd.subtitleZh = zd.subtitleEn || zd.subtitleZh;
        ['diamond', 'platform', 'zhuangzi'].forEach(k => {
          if (zd[k]) {
            zd[k].title = zd[k].titleEn || zd[k].title;
            zd[k].titleZh = zd[k].titleEn || zd[k].titleZh;
            zd[k].mantra = zd[k].mantraEn || zd[k].mantra;
            zd[k].mantraZh = zd[k].mantraEn || zd[k].mantraZh;
            zd[k].insight = zd[k].insightEn || zd[k].insight;
            zd[k].insightZh = zd[k].insightEn || zd[k].insightZh;
            zd[k].practical = zd[k].practicalEn || zd[k].practical;
            zd[k].practicalZh = zd[k].practicalEn || zd[k].practicalZh;
            zd[k].canonVerse = zd[k].canonVerseEn || zd[k].canonVerse;
            zd[k].canonVerseZh = zd[k].canonVerseEn || zd[k].canonVerseZh;
            zd[k].mindsetAnalysis = zd[k].mindsetAnalysisEn || zd[k].mindsetAnalysis;
            zd[k].mindsetAnalysisZh = zd[k].mindsetAnalysisEn || zd[k].mindsetAnalysisZh;
            zd[k].practicalPractice = zd[k].practicalPracticeEn || zd[k].practicalPractice;
            zd[k].practicalPracticeZh = zd[k].practicalPracticeEn || zd[k].practicalPracticeZh;
            zd[k].badge = zd[k].badgeEn || zd[k].badge;
            zd[k].badgeZh = zd[k].badgeEn || zd[k].badgeZh;
            if (zd[k].quotes && Array.isArray(zd[k].quotes)) {
              zd[k].quotes.forEach(q => {
                q.verse = q.verseEn || q.verse;
                q.verseZh = q.verseEn || q.verseZh;
                q.source = q.sourceEn || q.source;
                q.sourceZh = q.sourceEn || q.sourceZh;
                q.insight = q.insightEn || q.insight;
                q.insightZh = q.insightEn || q.insightZh;
                q.practical = q.practicalEn || q.practical;
                q.practicalZh = q.practicalEn || q.practicalZh;
              });
            }
          }
        });
      }

      // Factory Specs Translation
      if (mf.factorySpecs) {
        const fs = mf.factorySpecs;
        fs.dayMasterZh = fs.dayMasterEn || fs.dayMasterZh;
        fs.processorTypeZh = fs.processorTypeEn || fs.processorTypeZh;
        fs.osVersionZh = fs.osVersionEn || fs.osVersionZh;
        fs.coreEngineZh = fs.coreEngineEn || fs.coreEngineZh;
        fs.ruminationBandwidthZh = fs.ruminationBandwidthEn || fs.ruminationBandwidthZh;
        fs.efficiencyRatioZh = fs.efficiencyRatioEn || fs.efficiencyRatioZh;
      }

      // Classical Canons Manual Translation
      if (mf.classicalCanonsManual && Array.isArray(mf.classicalCanonsManual)) {
        mf.classicalCanonsManual.forEach(c => {
          c.canonNameZh = c.canonNameEn || c.canonNameZh;
          c.dynastyZh = c.dynastyEn || c.dynastyZh;
          c.themeZh = c.themeEn || c.themeZh;
          c.quoteZh = c.quoteEn || c.quoteZh;
          c.vernacularZh = c.vernacularEn || c.vernacularZh;
          c.remedyZh = c.remedyEn || c.remedyZh;
        });
      }

      // Stress Triggers Translation
      if (mf.stressTriggers && Array.isArray(mf.stressTriggers)) {
        mf.stressTriggers.forEach(st => {
          st.nameZh = st.nameEn || st.nameZh;
          st.classicalSignZh = st.classicalSignEn || st.classicalSignZh;
          st.mechanismZh = st.mechanismEn || st.mechanismZh;
          st.redLineZh = st.redLineEn || st.redLineZh;
        });
      }

      // De-escalation Protocols Translation
      if (mf.deEscalationProtocols && Array.isArray(mf.deEscalationProtocols)) {
        mf.deEscalationProtocols.forEach(dp => {
          dp.levelZh = dp.levelEn || dp.levelZh;
          dp.principleZh = dp.principleEn || dp.principleZh;
          dp.stepsZh = dp.stepsEn || dp.stepsZh;
        });
      }

      // Five Element Micro Habits Translation
      if (mf.fiveElementMicroHabits && Array.isArray(mf.fiveElementMicroHabits)) {
        mf.fiveElementMicroHabits.forEach(mh => {
          mh.element = mh.elementEn || mh.element;
          mh.durationZh = mh.durationEn || mh.durationZh;
          mh.habitNameZh = mh.habitNameEn || mh.habitNameZh;
          mh.ritualZh = mh.ritualEn || mh.ritualZh;
          mh.potencyZh = mh.potencyEn || mh.potencyZh;
        });
      }
    }

    // Remedy Guide
    if (p.remedyGuide) {
      if (p.remedyGuide.tailored) {
        const t = p.remedyGuide.tailored;
        const isWeak = (t.type === 'weak');
        t.title = isWeak
          ? '🎯 Tailored Natal Balancing: Nourish Weak Day Master (培补扶元)'
          : '🎯 Tailored Natal Balancing: Channel & Restrain Strong Day Master (制化疏秀)';
        t.subtitle = isWeak
          ? 'Six Core Principles for Weak Day Master: Energy Conservation, Alliance Building & Deep Compounding'
          : 'Six Core Principles for Strong Day Master: Output Monetization, Humility, Rule Adherence & Surplus Drainage';
        t.badge = isWeak ? 'Nourish & Consolidate' : 'Channel & Restrain';
        t.philosophy = isWeak
          ? '"When vital energy is delicate, avoid direct friction and exhaustion; rely on the mother seal for replenishment, overcoming hardness with gentle persistence."'
          : '"When energy is at its zenith, it must be channeled; a bow pulled to full tension must not be strung tighter. Share profits, express talent, and respect rules for enduring peace."';

        if (isWeak) {
          t.elementRemedy = {
            mainAction: 'Nourish Day Master via Resource (Seal) and Companion (Peer) elements. Strengthen vital essence and avoid excessive output or wealth depletion.',
            details: [
              { name: 'Element Generation & Color Resonance', content: 'Surround yourself with favorable element colors and environments that generate your Day Master.' },
              { name: 'Direction & Geolocation Strategy', content: 'Pursue career opportunities and living spaces aligned with your supportive cardinal directions.' }
            ]
          };
          t.mentalRemedy = [
            { tag: 'Cognitive Moat', text: 'Practice energetic frugality: treat your mental bandwidth like precious gold, refusing meaningless social consumption.' },
            { tag: 'Embrace Softness Over Force', text: 'Realize that deliberate flexibility and endurance outlast aggressive rigidity in long-term compounding.' }
          ];
          t.habitRemedy = [
            { tag: 'Restorative Sleep', text: 'Sleep before 23:00 to nourish liver and kidney yin. Never engage in late-night revenge exhaustion.' },
            { tag: 'Low-Intensity Movement', text: 'Choose steady aerobic activities like walking, tai chi, swimming or yoga rather than violent high-intensity depletion.' }
          ];
          t.careerRemedy = [
            { tag: 'Platform Leverage', text: 'Thrive within stable systems, established platforms, or strong partnerships rather than lonely solopreneur crusades.' },
            { tag: 'Specialized Depth', text: 'Cultivate rare technical, analytical, or artistic expertise that allows high leverage with contained physical exertion.' }
          ];
          t.energyRecharge = {
            mental: {
              title: 'Brain & Spirit Energy Restoration (Mental Recharge)',
              causes: 'Caused by over-empathy, relentless mental simulation, perfectionist rumination, and boundary collapse.',
              steps: [
                { name: 'Complete Sensory Fasting', detail: 'Disconnect from all screens and notifications for 60 minutes. Allow the default mode network to recalibrate.' },
                { name: 'Nature Earthing Walk', detail: 'Take a 30-minute walk in a park or forest, focusing only on sensory sounds and breathing.' },
                { name: 'Radical Decluttering', detail: 'Clear your physical desktop and digital browser tabs to alleviate cognitive overload.' }
              ]
            },
            physical: {
              title: 'Physical Vital Qi Replenishment (Somatic Recovery)',
              causes: 'Caused by overwork, skipping meals, erratic circadian rhythm, and running on adrenaline.',
              steps: [
                { name: 'Warm Nourishing Broth', detail: 'Consume warm, easily digestible soups and herbal teas to protect spleen and stomach digestive fire.' },
                { name: 'Foot Soaking Before Bed', detail: 'Soak feet in warm water for 15-20 minutes before sleep to guide upper qi downward for deep restorative rest.' },
                { name: 'Enforced Midday Power Nap', detail: 'Take a 15-20 minute power nap between 11:00 and 13:00 (Wu Hour) to recharge heart qi.' }
              ]
            }
          };
        } else {
          t.elementRemedy = {
            mainAction: 'Channel excessive vigor through Output (Eating God / Hurting Officer) and regulate via Officer (Guan Sha) and Wealth stars.',
            details: [
              { name: 'Dissipation & Flow', content: 'Express surplus energy into creative building, intellectual publication, or vigorous commercial endeavors.' },
              { name: 'Restraint & Balance', content: 'Respect legal boundaries, industry standards, and partner interests to avoid monopolistic backlash.' }
            ]
          };
          t.mentalRemedy = [
            { tag: 'Practice Humility', text: 'Beware of arrogance and impulsive dominance. Remind yourself that fortune comes from timing, not just brute force.' },
            { tag: 'Share the Spoils', text: 'Always leave 30% margin on the table for partners and subordinates to build unbreakable alliances.' }
          ];
          t.habitRemedy = [
            { tag: 'High-Energy Exercise', text: 'Engage in rigorous workouts, strength training, or martial arts to discharge surplus physiological fire.' },
            { tag: 'Meditation & Solitude', text: 'Practice daily 15-minute mindfulness to cool hot-headed impulses before making pivotal financial or career moves.' }
          ];
          t.careerRemedy = [
            { tag: 'Entrepreneurial Frontier', text: 'Lead innovative projects, take calculated market risks, and build new business verticals.' },
            { tag: 'System Governance', text: 'Implement rigorous checks and balances to prevent personal blind spots from creating executive catastrophe.' }
          ];
          t.energyRecharge = {
            mental: {
              title: 'Executive Mind Clarity Reset (Mental Reset)',
              causes: 'Caused by tunnel-vision impatience, micromanagement tension, and chronic competitive adrenaline.',
              steps: [
                { name: 'Perspective Decoupling', detail: 'Step back and view the problem from a 5-year perspective to defuse acute urgency panic.' },
                { name: 'Active Delegation', detail: 'Hand off at least two operational tasks entirely to trusted team members without interfering.' },
                { name: 'Breathwork Centering', detail: 'Perform 10 minutes of deep belly breathing to calm overexcited autonomic sympathetic drive.' }
              ]
            },
            physical: {
              title: 'Musculoskeletal & Tension Release (Physical Decompression)',
              causes: 'Caused by physical clenching, high cortisol tension, and prolonged intensive pacing.',
              steps: [
                { name: 'Deep Tissue Release', detail: 'Undergo sports massage, foam rolling, or stretching to release chronic shoulder and neck tension.' },
                { name: 'Hydration & Electrolytes', detail: 'Replenish clean water and electrolytes to flush metabolic stress byproducts.' },
                { name: 'Digital Curfew', detail: 'Turn off all work communications by 21:30 to avoid evening adrenal surges.' }
              ]
            }
          };
        }
      }
      if (p.remedyGuide.comparisonGuide) {
        const c = p.remedyGuide.comparisonGuide;
        const enWeakRules = [
          { num: 1, name: 'Seek Seal as Mother: Nourish & Consolidate Roots', theme: 'Cultivate Resources & Intellectual Backing', detail: 'When Day Master is weak, prioritize learning, mentorship, and building solid foundations before aggressive expansion.' },
          { num: 2, name: 'Leverage Peers: Form Alliances & Share Burdens', theme: 'Collective Synergy & Teamwork', detail: 'Do not fight alone. Partner with reliable peers and co-founders who complement your operational vulnerabilities.' },
          { num: 3, name: 'Evade Direct Killings: Softness Overcomes Rigidity', theme: 'Avoid Frontal Battles', detail: 'When confronted by domineering pressure or fierce rivals, use tactful flexibility and patience rather than head-on clashes.' },
          { num: 4, name: 'Restrain Greed: Guard Against Excessive Wealth Drain', theme: 'Capital Preservation & Risk Control', detail: 'A weak frame cannot carry heavy treasure. Say no to leveraged speculation and high-debt business ventures.' },
          { num: 5, name: 'Moderate Output: Precision Talent Over Diffusion', theme: 'Focused Creative Energy', detail: 'Do not overextend your output across too many projects. Concentrate your sharpest insights on one signature masterpiece.' },
          { num: 6, name: 'Endurance & Consistency: Steady Longevity Strategy', theme: 'Long-term Compounding', detail: 'Treat life as an ultra-marathon. Steady pacing and energetic conservation ultimately outperform burst sprinters.' }
        ];

        const enStrongRules = [
          { num: 1, name: 'Channel Output: Monetize Talent & Knowledge', theme: 'Creative Flow & Commercial Value', detail: 'Abundant vitality demands productive outlets. Transform surplus vigor into products, writing, code, and tangible assets.' },
          { num: 2, name: 'Respect Authority: Embrace Rules & Self-Discipline', theme: 'Institutional Alignment', detail: 'Strong Day Masters easily defy rules. Embracing compliance, contracts, and self-restraint protects you from ruinous downfall.' },
          { num: 3, name: 'Wealth Application: Share Profits & Cooperate', theme: 'Generosity & Profit Sharing', detail: 'Greed in strong individuals triggers peer hostility. Voluntarily sharing gains cements unbreakable coalitions.' },
          { num: 4, name: 'Renounce Clashes: Avoid Speculation & Gambling', theme: 'Discipline over Impulse', detail: 'Steer clear of impulsive bets and winner-takes-all brawls. Channel competitiveness into constructive market innovation.' },
          { num: 5, name: 'Tame Arrogance: Guard Against Autocracy', theme: 'Democratic Listening', detail: 'Avoid believing your own infallibility. Establish advisory boards and listen to contrary evidence before executive decisions.' },
          { num: 6, name: 'Practice Humility: Unstring the Bow Periodically', theme: 'Strategic Relaxation', detail: 'Even the strongest bow will snap if perpetually strung. Integrate structured rest, sabbatical, and quiet contemplation.' }
        ];

        c.weakRules = enWeakRules;
        c.strongRules = enStrongRules;
      }
    }

    // Persona Blueprint Deep Translation
    if (p.portrait) {
      const dmInfo = STEMS[p.dayMaster] || { en: p.dayMaster };
      const dmEn = dmInfo.en;
      const isStrong = (p.vigor && p.vigor.totalScore >= 50);
      const dayPillar = pData.dayPillar || '';
      const pProfile = (typeof YU_ZHAO_DATA !== 'undefined' && YU_ZHAO_DATA.dayPillarProfiles) ? YU_ZHAO_DATA.dayPillarProfiles[dayPillar] : null;
      const inter = pData.interactions || null;
      const mainPat = (p.patterns && p.patterns[0]) ? p.patterns[0].name : 'Dominant Pattern';

      // 1. Personality
      let engPsy = `[Day Master Essence & 60 JiaZi Archetype]: The native is born on 【${dayPillar || dmEn}】 Day, spiritual essence anchored by 【${dmEn}】. `;
      if (pProfile) {
        engPsy += `Day Pillar archetype represents "${pProfile.archetypeEn}": ${pProfile.traitsEn} `;
      } else {
        engPsy += `Governed by the primordial virtue of ${p.dayMasterElement === '木' ? 'Benevolence (Wood)' : p.dayMasterElement === '火' ? 'Courtesy & Passion (Fire)' : p.dayMasterElement === '土' ? 'Trust & Solidity (Earth)' : p.dayMasterElement === '金' ? 'Righteousness & Precision (Metal)' : 'Wisdom & Flexibility (Water)'}. `;
      }
      engPsy += isStrong
        ? `With robust vitality (${p.vigor ? p.vigor.status : 'Strong'}), the native exhibits unyielding self-confidence, decisive initiative, and remarkable stamina to carry heavy executive burdens through adversity. `
        : `With a refined and delicate constitution (${p.vigor ? p.vigor.status : 'Delicate'}), the native possesses subtle emotional intelligence, high empathy, and acute intuitive discernment. `;
      if (inter) {
        if (inter.stemCombos && inter.stemCombos.length > 0) {
          engPsy += `Heavenly Stems manifest combinations (${inter.stemCombos.map(c => c.nameEn).join('; ')}), ${inter.isJealousCombo ? 'exhibiting romantic sensitivity while navigating competing priorities; ' : 'fostering diplomatic tact and magnetic grace; '}`;
        }
        if (inter.stemClashes && inter.stemClashes.length > 0) {
          engPsy += `Stems encounter clashes (${inter.stemClashes.map(c => c.nameEn).join('; ')}), driving swift decisiveness, transparent candor, and intolerance for ambiguity. `;
        }
        if (inter.branchClashes && inter.branchClashes.length > 0) {
          engPsy += `Branches reveal underlying turbulence (${inter.branchClashes.map(c => c.nameEn).join('; ')}), fueling relentless inner urgency to break through plateaus. `;
        }
        if (inter.branchHarms && inter.branchHarms.length > 0) {
          engPsy += `Subtle piercing harms (${inter.branchHarms.map(h => h.nameEn).join('; ')}) prompt cautious vigilance in delicate social boundaries. `;
        }
      }
      engPsy += `Tempered by 【${mainPat}】, the native upholds high personal dignity and strategic foresight.`;
      p.portrait.personality = engPsy;

      // 2. Career
      let engCar = `The professional trajectory is anchored by 【${mainPat}】, colored by the behavioral archetype of ${dayPillar} (${pProfile ? pProfile.archetypeEn : dmEn}), and energized by the seasonal regulator ${p.climate ? p.climate.primary : 'elemental balance'}. `;
      if (mainPat.includes('Hurting') || mainPat.includes('Eating') || mainPat.includes('伤官') || mainPat.includes('食神')) {
        engCar += `Talent flourishes in breakthrough innovation, creative expression, and high-impact advisory. Ideally suited for frontier tech architecture, cultural media, elite consulting, and intellectual property creation. `;
      } else if (mainPat.includes('Officer') || mainPat.includes('Killing') || mainPat.includes('官') || mainPat.includes('杀')) {
        engCar += `Endowed with natural institutional authority and crisis management grit. Excels in public governance, corporate leadership, strategic restructuring, and high-stakes operations. `;
      } else if (mainPat.includes('Wealth') || mainPat.includes('财')) {
        engCar += `Instinctively perceptive toward commercial arbitrage, capital velocity, and resource distribution. Thrives in venture scaling, asset allocation, and market expansion. `;
      } else {
        engCar += `Talent centers on scholarly depth, knowledge preservation, and institutional mentorship. Highly suited for research think tanks, cultural institutions, and educational stewardship. `;
      }
      if (inter && inter.branchClashes && inter.branchClashes.some(c => c.nameZh.includes('寅申') || c.nameZh.includes('巳亥'))) {
        engCar += `Natal Traveling Horse clashes favor cross-regional expansion, multinational ventures, and dynamic mobile leadership.`;
      }
      p.portrait.career = engCar;

      // 3. Wealth
      let engWea = `In classical five-canons metaphysics, wealth demands that the Day Master have the somatic capacity to hold capital. Born on ${dayPillar}, evaluated as ${p.vigor ? p.vigor.status : 'Balanced'}. `;
      if (isStrong) {
        engWea += `Possessing robust constitutional stamina, the native can comfortably wield substantial capital scale. Wealth expands in exponential compound steps, particularly when riding the seasonal momentum of ${p.climate ? p.climate.primary : 'the prime regulator'}. `;
      } else {
        engWea += `With a delicate frame, the wealth path lies in intellectual leverage and strategic institutional alliances. Transforming specialized knowledge into steady, compound prosperity ensures serene late-life affluence. `;
      }
      if (inter && inter.branchHarms && inter.branchHarms.length > 0) {
        engWea += `[Compliance Note]: Terrestrial harms caution strict contractual clarity; never compromise fiduciary boundaries for casual personal relations.`;
      }
      p.portrait.wealth = engWea;

      // 4. Advice
      let engAdv = `In accordance with Di Tian Sui and Zi Ping Zhen Quan principles:\n`;
      if (pProfile && pProfile.adviceEn) {
        engAdv += `① [Day Pillar Cultivation]: ${pProfile.adviceEn}\n`;
      }
      engAdv += `② [Seasonal Optimization]: Align living and working environments with the supportive spatial orientation and elemental frequencies of ${p.climate ? p.climate.primary : 'the primary regulator'};\n`;
      if (inter && (inter.branchClashes.length > 0 || inter.branchHarms.length > 0)) {
        engAdv += `③ [Harmonizing Transits]: Practice inner stillness during clashing transits, relying on legal precision and clear boundaries during piercing cycles;\n`;
      }
      engAdv += `④ [Mastery Maxim]: Where radiant output shines, practice humble restraint; where fierce authority commands, practice magnanimous compassion. Walking this path unlocks lifelong resilience and harmony.`;
      p.portrait.advice = engAdv;
    }

    // 👑 Pareto 80/20 Core Synthesis Deep Translation
    if (p.paretoCore) {
      const pc = p.paretoCore;
      pc.title = pc.titleEn;
      pc.description = pc.descriptionEn;

      if (pc.primaryPatternNameZh) {
        const transPatName = getPatternName(pc.primaryPatternNameZh, 'en') || pc.primaryPatternNameEn;
        pc.primaryPatternName = transPatName;
        pc.primaryPatternDesc = (pc.primaryPatternDescEn || pc.primaryPatternDescZh || '')
          .replace(new RegExp(pc.primaryPatternNameZh, 'g'), transPatName)
          .replace(/【.+?】/g, `[${transPatName}]`);
      }

      if (pc.grandPicture) {
        const gp = pc.grandPicture;
        gp.title = gp.titleEn;
        gp.subtitle = gp.subtitleEn;
        gp.thesis = gp.thesisEn;
        gp.campaign = gp.campaignEn;
        gp.kinship = gp.kinshipEn;
        gp.era = gp.eraEn;
        gp.highlights = gp.highlightsEn;
        gp.rules = gp.rulesEn;
      }

      if (pc.canons) {
        Object.values(pc.canons).forEach(c => {
          if (c) {
            c.title = c.titleEn;
            c.subtitle = c.subtitleEn;
            c.pivotName = c.pivotNameEn;
            c.summary = c.summaryEn;
            c.favorable = c.favorableEn;
            c.taboos = c.taboosEn;
            c.modernStrategy = c.modernStrategyEn;
            c.genderDiff = c.genderDiffEn;
            c.formation = c.formationEn;
            c.rescue = c.rescueEn;
            c.verse = c.verseEn;
            c.verseQuote = c.verseQuoteEn;
            c.diseaseName = c.diseaseNameEn;
            c.symptom = c.symptomEn;
            c.medicine = c.medicineEn;
            c.rationale = c.rationaleEn;
            c.sculptingType = c.sculptingTypeEn;
            c.sculptingAdvice = c.sculptingAdviceEn;
            c.spouseSummary = c.spouseSummaryEn;
            c.childrenSummary = c.childrenSummaryEn;
            c.parentsSummary = c.parentsSummaryEn;
            c.threePrimes = c.threePrimesEn;
            c.idealGeography = c.idealGeographyEn;
            c.targetCities = c.targetCitiesEn;
            c.workspaceEnergy = c.workspaceEnergyEn;
            c.eraMacroTrend = c.eraMacroTrendEn;
            if (c.personaDepictionEn) c.personaDepiction = c.personaDepictionEn;
            if (c.destinyTrajectoryEn) c.destinyTrajectory = c.destinyTrajectoryEn;
            if (c.actionableManeuverEn) c.actionableManeuver = c.actionableManeuverEn;
          }
        });
      }

      if (pc.fulcrum) {
        const fc = pc.fulcrum;
        fc.title = fc.titleEn;
        fc.subtitle = fc.subtitleEn;
        fc.diseaseName = fc.diseaseNameEn;
        fc.symptom = fc.symptomEn;
        fc.medicine = fc.medicineEn;
        fc.rationale = fc.rationaleEn;
        fc.modernStrategy = fc.modernStrategyEn;
        fc.sculptingType = fc.sculptingTypeEn;
        fc.sculptingAdvice = fc.sculptingAdviceEn;
        fc.genderDiff = fc.genderDiffEn;
      }

      if (pc.spouse) {
        const sp = pc.spouse;
        sp.title = sp.titleEn;
        sp.subtitle = sp.subtitleEn;
        sp.spouseStar = sp.spouseStarEn;
        sp.archetype = sp.archetypeEn;
        sp.traits = sp.traitsEn;
        sp.clashRisk = sp.clashRiskEn;
        sp.advice = sp.adviceEn;
        sp.genderDiff = sp.genderDiffEn;
        if (sp.energyEn) sp.energy = sp.energyEn;
        if (sp.personalityEn) sp.personality = sp.personalityEn;
        if (sp.demeanourEn) sp.demeanour = sp.demeanourEn;
        if (sp.relationshipEn) sp.relationship = sp.relationshipEn;
      }

      if (pc.children) {
        const ch = pc.children;
        ch.title = ch.titleEn;
        ch.subtitle = ch.subtitleEn;
        ch.archetype = ch.archetypeEn;
        ch.talent = ch.talentEn;
        ch.guide = ch.guideEn;
        ch.genderDiff = ch.genderDiffEn;
        if (ch.energyEn) ch.energy = ch.energyEn;
        if (ch.personalityEn) ch.personality = ch.personalityEn;
        if (ch.demeanourEn) ch.demeanour = ch.demeanourEn;
        if (ch.relationshipEn) ch.relationship = ch.relationshipEn;
      }

      if (pc.parents) {
        const pa = pc.parents;
        pa.title = pa.titleEn;
        pa.subtitle = pa.subtitleEn;
        pa.type = pa.typeEn;
        pa.heritage = pa.heritageEn;
        pa.debtOrBlessing = pa.debtOrBlessingEn;
        pa.filialAdvice = pa.filialAdviceEn;
        pa.genderDiff = pa.genderDiffEn;
        if (pa.energyEn) pa.energy = pa.energyEn;
        if (pa.personalityEn) pa.personality = pa.personalityEn;
        if (pa.demeanourEn) pa.demeanour = pa.demeanourEn;
        if (pa.relationshipEn) pa.relationship = pa.relationshipEn;
      }

      if (pc.environment) {
        const env = pc.environment;
        env.title = env.titleEn;
        env.subtitle = env.subtitleEn;
        env.threePrimes = env.threePrimesEn;
        env.idealGeography = env.idealGeographyEn;
        env.targetCities = env.targetCitiesEn;
        env.workspaceEnergy = env.workspaceEnergyEn;
        env.eraMacroTrend = env.eraMacroTrendEn;
        env.genderDiff = env.genderDiffEn;
      }
    }

    return p;
  }

  return {
    currentLang: 'zh',
    dict,
    STEMS,
    BRANCHES,
    TEN_GODS,
    FIVE_ELEMENTS,
    NAYIN_TABLE,
    PATTERN_NAMES,
    TIERS,
    VIGOR_STATUSES,
    t,
    getStem,
    getBranch,
    getGod,
    getElement,
    getNaYin,
    getPillarTitle,
    getPatternName,
    getTierName,
    getVigorStatus,
    translatePortrait,
    ZODIAC_TABLE,
    getZodiac,
    getZodiacWithBranch
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = I18N;
}
