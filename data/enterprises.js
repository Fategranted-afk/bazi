/**
 * 世界五百强名企与岗位全相数据库 (Fortune Global 500 & Top Tier Industry Leaders)
 * 涵盖英国、美国、中国、加拿大跨国领军巨头，包含所在城市、核心赛道、五百强梯队、
 * 企业十神心智文化 (Corporate Culture Archetype)、五行场能与五大核心典型岗位 (Typical Roles).
 * 100% Offline-First, deterministic, and fully bilingual (zh/en).
 */

const ENTERPRISES_DB = {
  "UK": [
    {
      "id": "hsbc",
      "nameZh": "汇丰控股 (HSBC)",
      "nameEn": "HSBC Holdings",
      "country": "UK",
      "primaryCities": [
        "London",
        "Birmingham"
      ],
      "industry": "finance_quant",
      "fortune500Rank": "世界500强前100 · 欧洲最大商业银行",
      "fortune500RankEn": "Fortune Global 500 Top 100 · Europe's Largest Bank",
      "corporateCultureZh": "严谨制度合规、层级有序、崇尚英美普通法程序正义，正官正印正气稳固，注重合规防风控。",
      "corporateCultureEn": "Rigorous compliance, institutional hierarchy, adherence to common law procedure, Direct Officer & Direct Resource governance.",
      "elementalField": {
        "primary": "Metal",
        "secondary": "Water"
      },
      "typicalRoles": [
        {
          "titleZh": "全球外汇与利率交易员",
          "titleEn": "Global FX & Rates Trader",
          "roleKey": "specialist"
        },
        {
          "titleZh": "投行跨境并购合规风控官",
          "titleEn": "Cross-Border M&A Compliance Officer",
          "roleKey": "civil"
        },
        {
          "titleZh": "量化金融风险建模专家",
          "titleEn": "Quantitative Risk Modeler",
          "roleKey": "specialist"
        },
        {
          "titleZh": "财富管理与私人银行总监",
          "titleEn": "Private Wealth Management Director",
          "roleKey": "executive"
        },
        {
          "titleZh": "商业银行信贷一线拓展总监",
          "titleEn": "Commercial Banking Origination Director",
          "roleKey": "martial"
        }
      ]
    },
    {
      "id": "deepmind",
      "nameZh": "谷歌 DeepMind (UK)",
      "nameEn": "Google DeepMind",
      "country": "UK",
      "primaryCities": [
        "London"
      ],
      "industry": "tech_ai",
      "fortune500Rank": "全球AI前沿研发圣殿 (Alphabet旗下)",
      "fortune500RankEn": "Global AI Frontier Nexus (Alphabet Subsidiary)",
      "corporateCultureZh": "纯粹学术深度与极客工程并重，重奖基础突破，食伤吐秀与七杀硬核攻坚，崇尚从零到一的通用智能探究。",
      "corporateCultureEn": "Academic purity blended with elite software engineering; rewards fundamental AI breakthroughs; Output & Seven Killings innovation.",
      "elementalField": {
        "primary": "Fire",
        "secondary": "Wood"
      },
      "typicalRoles": [
        {
          "titleZh": "强化学习与基础大模型研究科学家",
          "titleEn": "Research Scientist (RL & Foundation Models)",
          "roleKey": "specialist"
        },
        {
          "titleZh": "大模型分布式并行训练系统工程师",
          "titleEn": "Distributed Training Systems Engineer",
          "roleKey": "specialist"
        },
        {
          "titleZh": "AI生物科学计算研发专家 (AlphaFold)",
          "titleEn": "AI Bioscience Researcher (AlphaFold)",
          "roleKey": "specialist"
        },
        {
          "titleZh": "人工智能伦理与主权合规政策总监",
          "titleEn": "AI Ethics & Global Governance Lead",
          "roleKey": "civil"
        },
        {
          "titleZh": "前沿项目技术工程统帅",
          "titleEn": "Frontier Project Engineering Lead",
          "roleKey": "executive"
        }
      ]
    },
    {
      "id": "astrazeneca",
      "nameZh": "阿斯利康 (AstraZeneca)",
      "nameEn": "AstraZeneca",
      "country": "UK",
      "primaryCities": [
        "Cambridge",
        "London"
      ],
      "industry": "manufacturing",
      "fortune500Rank": "世界500强 · 全球生物制药巨头",
      "fortune500RankEn": "Fortune Global 500 · Global BioPharma Titan",
      "corporateCultureZh": "以科学证据为锚，强调新药分子长线研发管线与全球临床合规，正印庇护与木水相生。",
      "corporateCultureEn": "Evidence-driven long-horizon molecular pipelines, global clinical compliance, Direct Resource & Wood-Water vitality.",
      "elementalField": {
        "primary": "Wood",
        "secondary": "Water"
      },
      "typicalRoles": [
        {
          "titleZh": "肿瘤免疫新药研发首席科学家",
          "titleEn": "Principal Scientist, Immuno-Oncology",
          "roleKey": "specialist"
        },
        {
          "titleZh": "全球临床试验与药监申报总监",
          "titleEn": "Global Clinical Operations & Regulatory Lead",
          "roleKey": "civil"
        },
        {
          "titleZh": "AI辅助分子设计算法专家",
          "titleEn": "Computational Biology & AI Drug Designer",
          "roleKey": "specialist"
        },
        {
          "titleZh": "全球医药商业战略与市场总监",
          "titleEn": "Global Commercial Brand Director",
          "roleKey": "executive"
        },
        {
          "titleZh": "区域医药准入与大客户攻坚代表",
          "titleEn": "Market Access & Key Account Manager",
          "roleKey": "martial"
        }
      ]
    },
    {
      "id": "arm",
      "nameZh": "安谋科技 (ARM)",
      "nameEn": "ARM Holdings",
      "country": "UK",
      "primaryCities": [
        "Cambridge"
      ],
      "industry": "tech_ai",
      "fortune500Rank": "全球移动端芯片架构垄断霸主 (99%智能手机基石)",
      "fortune500RankEn": "Global Chip Architecture Monopoly (Powers 99% of Smartphones)",
      "corporateCultureZh": "底层指令集深水静流，知识产权授权壁垒坚不可摧，工程师文化浓郁，金火淬炼极致微架构。",
      "corporateCultureEn": "Instruction-set architecture mastery, robust IP licensing moats, pure engineering culture, Metal-Fire precision craft.",
      "elementalField": {
        "primary": "Metal",
        "secondary": "Fire"
      },
      "typicalRoles": [
        {
          "titleZh": "CPU内核微架构资深设计师",
          "titleEn": "Principal CPU Microarchitect",
          "roleKey": "specialist"
        },
        {
          "titleZh": "半导体知识产权生态拓展总监",
          "titleEn": "Semiconductor IP Ecosystem Director",
          "roleKey": "executive"
        },
        {
          "titleZh": "芯片编译器与底层固件优化专家",
          "titleEn": "LLVM Compiler & Low-Level Systems Engineer",
          "roleKey": "specialist"
        },
        {
          "titleZh": "全球专利诉讼与技术许可合规官",
          "titleEn": "Patent Litigation & Licensing Counsel",
          "roleKey": "civil"
        },
        {
          "titleZh": "算力芯片大客户技术售前攻坚统帅",
          "titleEn": "High-Performance Computing Field Solutions Lead",
          "roleKey": "martial"
        }
      ]
    },
    {
      "id": "shell",
      "nameZh": "壳牌集团 (Shell)",
      "nameEn": "Shell plc",
      "country": "UK",
      "primaryCities": [
        "London"
      ],
      "industry": "manufacturing",
      "fortune500Rank": "世界500强前50 · 全球综合能源领袖",
      "fortune500RankEn": "Fortune Global 500 Top 50 · Global Energy Supermajor",
      "corporateCultureZh": "百年大宗能源巨头，地缘大局观、供应链韧性与能源转型兼顾，土金生水厚重底盘。",
      "corporateCultureEn": "Century-old commodities titan; deep geopolitical acumen, supply chain resilience, Earth-Metal-Water foundation.",
      "elementalField": {
        "primary": "Earth",
        "secondary": "Water"
      },
      "typicalRoles": [
        {
          "titleZh": "大宗原油与LNG量化贸易员",
          "titleEn": "Crude Oil & LNG Quantitative Trader",
          "roleKey": "specialist"
        },
        {
          "titleZh": "海上风电与绿氢工程项目总指挥",
          "titleEn": "Offshore Wind & Green Hydrogen Project Director",
          "roleKey": "executive"
        },
        {
          "titleZh": "地缘政治风险评估与主权合规顾问",
          "titleEn": "Geopolitical Risk & Government Affairs Advisor",
          "roleKey": "civil"
        },
        {
          "titleZh": "深海油气勘探智能算法工程师",
          "titleEn": "Subsurface Data & AI Geoscientist",
          "roleKey": "specialist"
        },
        {
          "titleZh": "全球关键大宗供应链采购总监",
          "titleEn": "Global Strategic Commodities Procurement Lead",
          "roleKey": "martial"
        }
      ]
    },
    {
      "id": "barclays",
      "nameZh": "巴克莱银行 (Barclays)",
      "nameEn": "Barclays",
      "country": "UK",
      "primaryCities": [
        "London"
      ],
      "industry": "finance_quant",
      "fortune500Rank": "世界500强 · 英国投行核心航母",
      "fortune500RankEn": "Fortune Global 500 · UK Premier Investment Bank",
      "corporateCultureZh": "伦敦老牌贵族银行演进为跨国投行航母，固定收益与投行并举，正官统御与偏财进取兼具。",
      "corporateCultureEn": "Historic City of London prestige meets global investment banking; FICC powerhouse; Officer and Indirect Wealth dynamics.",
      "elementalField": {
        "primary": "Metal",
        "secondary": "Water"
      },
      "typicalRoles": [
        {
          "titleZh": "固定收益与衍生品量化做市商",
          "titleEn": "Fixed Income & Derivatives Quantitative Market Maker",
          "roleKey": "specialist"
        },
        {
          "titleZh": "股权资本市场 (ECM) 执行董事",
          "titleEn": "Equity Capital Markets (ECM) Managing Director",
          "roleKey": "executive"
        },
        {
          "titleZh": "杠杆收购与结构化融资专家",
          "titleEn": "Leveraged Finance Structurer",
          "roleKey": "specialist"
        },
        {
          "titleZh": "金融监管合规与压力测试总监",
          "titleEn": "Prudential Regulation & Stress Testing Lead",
          "roleKey": "civil"
        },
        {
          "titleZh": "大客户对冲基金机构销售代表",
          "titleEn": "Prime Brokerage Hedge Fund Sales Lead",
          "roleKey": "martial"
        }
      ]
    },
    {
      "id": "unilever",
      "nameZh": "联合利华 (Unilever)",
      "nameEn": "Unilever",
      "country": "UK",
      "primaryCities": [
        "London"
      ],
      "industry": "creative_media",
      "fortune500Rank": "世界500强 · 全球快消消费品巨头",
      "fortune500RankEn": "Fortune Global 500 · Global FMCG & Consumer Titan",
      "corporateCultureZh": "全球四十亿消费者触达网络，品牌营销与精益供应链生命线，木火通明主导创意与渠道分发。",
      "corporateCultureEn": "Touches 4 billion consumers daily; elite consumer branding and agile supply chain; Wood-Fire commercial mastery.",
      "elementalField": {
        "primary": "Wood",
        "secondary": "Fire"
      },
      "typicalRoles": [
        {
          "titleZh": "全球超级品牌矩阵营销总监",
          "titleEn": "Global Brand & Product Portfolio Director",
          "roleKey": "executive"
        },
        {
          "titleZh": "全渠道消费者数字洞察数据科学家",
          "titleEn": "Omnichannel Consumer Data Scientist",
          "roleKey": "specialist"
        },
        {
          "titleZh": "可持续环保配方研发专家",
          "titleEn": "Sustainable Formulation R&D Specialist",
          "roleKey": "specialist"
        },
        {
          "titleZh": "跨国ESG与全球供应链合规主管",
          "titleEn": "Global ESG & Sustainable Sourcing Manager",
          "roleKey": "civil"
        },
        {
          "titleZh": "新零售渠道攻坚与战略合作总监",
          "titleEn": "New Retail Key Account General Manager",
          "roleKey": "martial"
        }
      ]
    },
    {
      "id": "lseg",
      "nameZh": "伦敦证券交易所集团 (LSEG)",
      "nameEn": "London Stock Exchange Group (LSEG)",
      "country": "UK",
      "primaryCities": [
        "London"
      ],
      "industry": "finance_quant",
      "fortune500Rank": "世界金融中枢基础设施 · 整合路孚特金融数据",
      "fortune500RankEn": "Global Financial Market Infrastructure · Refinitiv Data Leader",
      "corporateCultureZh": "世界资本市场心脏底座，掌握全球指数与金融数据命脉，体制法度正官正印无懈可击。",
      "corporateCultureEn": "Core market plumbing of global capital; custodian of benchmark indices and terminal feeds; Direct Officer regulatory excellence.",
      "elementalField": {
        "primary": "Metal",
        "secondary": "Water"
      },
      "typicalRoles": [
        {
          "titleZh": "全球指数编制与量化数据科学家",
          "titleEn": "Index Methodology Quantitative Researcher",
          "roleKey": "specialist"
        },
        {
          "titleZh": "超低延迟交易所交易引擎开发架构师",
          "titleEn": "Ultra-Low Latency Exchange Engine Architect",
          "roleKey": "specialist"
        },
        {
          "titleZh": "金融市场基础设施清算与监管总监",
          "titleEn": "Central Counterparty Clearing & Regulatory Lead",
          "roleKey": "civil"
        },
        {
          "titleZh": "金融数据终端商业产品副总裁",
          "titleEn": "VP of Financial Data & Analytics Products",
          "roleKey": "executive"
        },
        {
          "titleZh": "全球投行与对冲基金企业战略BD",
          "titleEn": "Strategic Institutional Accounts Director",
          "roleKey": "martial"
        }
      ]
    }
  ],
  "USA": [
    {
      "id": "nvidia",
      "nameZh": "英伟达 (NVIDIA)",
      "nameEn": "NVIDIA",
      "country": "USA",
      "primaryCities": [
        "San Francisco",
        "Austin"
      ],
      "industry": "tech_ai",
      "fortune500Rank": "世界500强前50 · 全球AI算力霸权之冠",
      "fortune500RankEn": "Fortune Global 500 Top 50 · Global AI Hardware Monopoly",
      "corporateCultureZh": "黄仁勋扁平扁担管理、敏捷战术、零官僚主义、极速迭代，七杀攻坚与火金交炼极致算力。",
      "corporateCultureEn": "Extreme agility, zero bureaucracy, horizontal management, relentless Seven Killings execution, Fire-Metal compute supremacy.",
      "elementalField": {
        "primary": "Fire",
        "secondary": "Metal"
      },
      "typicalRoles": [
        {
          "titleZh": "CUDA架构与底层GPU算子优化科学家",
          "titleEn": "Principal CUDA & GPU Kernel Performance Scientist",
          "roleKey": "specialist"
        },
        {
          "titleZh": "万卡大模型集群分布式网络架构师",
          "titleEn": "Megawatt AI Supercluster Network Architect",
          "roleKey": "specialist"
        },
        {
          "titleZh": "具身智能与自动驾驶感知算法总监",
          "titleEn": "Autonomous Driving & Embodied AI Director",
          "roleKey": "executive"
        },
        {
          "titleZh": "芯片供应链合规与出口管制法律顾问",
          "titleEn": "Semiconductor Supply Chain & Export Counsel",
          "roleKey": "civil"
        },
        {
          "titleZh": "全球超算中心与云厂商战略业务总监",
          "titleEn": "Hyperscale Strategic Alliances General Manager",
          "roleKey": "martial"
        }
      ]
    },
    {
      "id": "goldman_sachs",
      "nameZh": "高盛集团 (Goldman Sachs)",
      "nameEn": "Goldman Sachs",
      "country": "USA",
      "primaryCities": [
        "New York",
        "London"
      ],
      "industry": "finance_quant",
      "fortune500Rank": "世界500强 · 华尔街顶级投资银行之王",
      "fortune500RankEn": "Fortune Global 500 · King of Wall Street Investment Banking",
      "corporateCultureZh": "华尔街白靴精英文化，极致绩效导向、长工时狼性赛马，七杀偏财并立，人脉与交易促成力巅峰。",
      "corporateCultureEn": "Elite Wall Street standard; high-stakes performance accountability; Seven Killings & Indirect Wealth execution power.",
      "elementalField": {
        "primary": "Metal",
        "secondary": "Water"
      },
      "typicalRoles": [
        {
          "titleZh": "量化投资策略核心研究员 (QIS)",
          "titleEn": "Quantitative Investment Strategies (QIS) Researcher",
          "roleKey": "specialist"
        },
        {
          "titleZh": "全球并购重组 (M&A) 投行董事总经理",
          "titleEn": "Global M&A Investment Banking Managing Director",
          "roleKey": "executive"
        },
        {
          "titleZh": "衍生品结构化设计与交易专家",
          "titleEn": "Equity Derivatives Structurer & Trader",
          "roleKey": "specialist"
        },
        {
          "titleZh": "全球宏观经济预测与行业首席分析师",
          "titleEn": "Chief Global Macro & Equity Strategist",
          "roleKey": "civil"
        },
        {
          "titleZh": "机构大客户对冲基金主经纪业务总监",
          "titleEn": "Prime Brokerage Global Accounts Director",
          "roleKey": "martial"
        }
      ]
    },
    {
      "id": "citadel",
      "nameZh": "城堡投资 (Citadel / Citadel Securities)",
      "nameEn": "Citadel & Citadel Securities",
      "country": "USA",
      "primaryCities": [
        "Miami",
        "New York",
        "Chicago"
      ],
      "industry": "finance_quant",
      "fortune500Rank": "全球最大做市商与历史净利润最强对冲基金",
      "fortune500RankEn": "World's Premier Market Maker & Top Grossing Hedge Fund in History",
      "corporateCultureZh": "肯·格里芬铁血军团，纯粹数学与超低延迟科技驱动，零容忍低容错，七杀与比劫争锋最高压熔炉。",
      "corporateCultureEn": "Iron-willed performance culture; mathematics & nanosecond latency; zero room for mediocrity; intense Seven Killings crucible.",
      "elementalField": {
        "primary": "Metal",
        "secondary": "Water"
      },
      "typicalRoles": [
        {
          "titleZh": "高频量化阿尔法策略研究员",
          "titleEn": "High-Frequency Statistical Arbitrage Researcher",
          "roleKey": "specialist"
        },
        {
          "titleZh": "超低延迟 C++ FPGA 交易核心系统架构师",
          "titleEn": "Ultra-Low Latency C++/FPGA Systems Architect",
          "roleKey": "specialist"
        },
        {
          "titleZh": "全球宏观与大宗商品投资组合经理 (PM)",
          "titleEn": "Portfolio Manager (Global Macro & Commodities)",
          "roleKey": "executive"
        },
        {
          "titleZh": "实时交易风控与持仓合规总监",
          "titleEn": "Real-Time Risk & Regulatory Capital Director",
          "roleKey": "civil"
        },
        {
          "titleZh": "量化交易柜台一线执行攻坚员",
          "titleEn": "Execution & Flow Trading Specialist",
          "roleKey": "martial"
        }
      ]
    },
    {
      "id": "apple",
      "nameZh": "苹果公司 (Apple)",
      "nameEn": "Apple Inc.",
      "country": "USA",
      "primaryCities": [
        "San Francisco",
        "Austin"
      ],
      "industry": "tech_ai",
      "fortune500Rank": "世界500强前10 · 全球市值与消费电子霸主",
      "fortune500RankEn": "Fortune Global 500 Top 10 · Global Market Cap & Design Titan",
      "corporateCultureZh": "极致产品美学、保密文化、自研硅芯片(Apple Silicon)垂直整合，金生水润泽极致用户体验。",
      "corporateCultureEn": "Extreme product aesthetics, secrecy, vertical integration (Apple Silicon), Metal-Water consumer perfectionism.",
      "elementalField": {
        "primary": "Metal",
        "secondary": "Water"
      },
      "typicalRoles": [
        {
          "titleZh": "Apple Silicon 芯片设计与验证科学家",
          "titleEn": "Principal SoC Chip Architecture Engineer",
          "roleKey": "specialist"
        },
        {
          "titleZh": "工业设计与人机交互资深总监",
          "titleEn": "Industrial Design & Interaction Director",
          "roleKey": "executive"
        },
        {
          "titleZh": "端侧轻量化神经引擎算法专家",
          "titleEn": "On-Device Neural Engine & CoreML Specialist",
          "roleKey": "specialist"
        },
        {
          "titleZh": "全球供应链道德合规与环保审查主管",
          "titleEn": "Global Supply Chain & Environmental Auditor",
          "roleKey": "civil"
        },
        {
          "titleZh": "大中华区硬件新品首发拓展总监",
          "titleEn": "Regional Product Launch & Retail Operations Lead",
          "roleKey": "martial"
        }
      ]
    },
    {
      "id": "microsoft",
      "nameZh": "微软 (Microsoft)",
      "nameEn": "Microsoft",
      "country": "USA",
      "primaryCities": [
        "Seattle",
        "San Francisco"
      ],
      "industry": "tech_ai",
      "fortune500Rank": "世界500强前20 · 全球企业软件与云/AI双霸主",
      "fortune500RankEn": "Fortune Global 500 Top 20 · Cloud, Enterprise & AI Titan",
      "corporateCultureZh": "萨提亚·纳德拉成长型心智，拥抱OpenAI生态，企业级商业变现功力无敌，正印厚德承载万物。",
      "corporateCultureEn": "Growth mindset under Satya Nadella; OpenAI strategic synthesis; enterprise B2B dominance; Direct Resource wisdom.",
      "elementalField": {
        "primary": "Water",
        "secondary": "Earth"
      },
      "typicalRoles": [
        {
          "titleZh": "Azure云原生与企业级生成式AI首席架构师",
          "titleEn": "Chief Architect, Azure Enterprise AI",
          "roleKey": "executive"
        },
        {
          "titleZh": "大语言模型对齐与评测科研专家",
          "titleEn": "LLM Alignment & Safety Research Scientist",
          "roleKey": "specialist"
        },
        {
          "titleZh": "操作系统内核与虚拟化核心研发工程师",
          "titleEn": "Windows & Hyper-V Kernel Systems Engineer",
          "roleKey": "specialist"
        },
        {
          "titleZh": "全球数据主权与合规政策法务总监",
          "titleEn": "Global Data Sovereignty & AI Compliance Counsel",
          "roleKey": "civil"
        },
        {
          "titleZh": "跨国五百强企业云解决方案战略销售副总裁",
          "titleEn": "VP of Enterprise Cloud Solution Sales",
          "roleKey": "martial"
        }
      ]
    },
    {
      "id": "google",
      "nameZh": "谷歌 / Alphabet (Google)",
      "nameEn": "Google / Alphabet",
      "country": "USA",
      "primaryCities": [
        "San Francisco",
        "New York"
      ],
      "industry": "tech_ai",
      "fortune500Rank": "世界500强前20 · 全球互联网信息与AI引擎",
      "fortune500RankEn": "Fortune Global 500 Top 20 · Global Search, Cloud & AI Titan",
      "corporateCultureZh": "工程师天堂，崇尚技术解决规模化问题，食伤大智若水，自由探索与世界级基础设施并立。",
      "corporateCultureEn": "Engineer's paradise; solves planet-scale problems; Output God intellectual depth; open inquiry & peerless infrastructure.",
      "elementalField": {
        "primary": "Water",
        "secondary": "Fire"
      },
      "typicalRoles": [
        {
          "titleZh": "Gemini通用多模态大模型研究科学家",
          "titleEn": "Multimodal Foundation Model Research Scientist",
          "roleKey": "specialist"
        },
        {
          "titleZh": "全球搜索算法与知识图谱首席架构师",
          "titleEn": "Search Ranking & Knowledge Graph Architect",
          "roleKey": "specialist"
        },
        {
          "titleZh": "Google Cloud 全球产品管理副总裁",
          "titleEn": "VP of Product Management, Google Cloud",
          "roleKey": "executive"
        },
        {
          "titleZh": "全球反垄断诉讼与竞争政策首席法务官",
          "titleEn": "Antitrust & Competition Regulatory Director",
          "roleKey": "civil"
        },
        {
          "titleZh": "全球数字广告生态战略大客户总监",
          "titleEn": "Strategic Media & AdTech Client Partner",
          "roleKey": "martial"
        }
      ]
    },
    {
      "id": "blackrock",
      "nameZh": "贝莱德 (BlackRock)",
      "nameEn": "BlackRock",
      "country": "USA",
      "primaryCities": [
        "New York"
      ],
      "industry": "finance_quant",
      "fortune500Rank": "世界500强 · 全球最大资产管理公司 (管理规模超10万亿美元)",
      "fortune500RankEn": "Fortune Global 500 · World's #1 Asset Manager ($10T+ AUM)",
      "corporateCultureZh": "阿拉丁系统(Aladdin)掌控全球风险命脉，规制至上、长期主义、信托责任，正官正印泰山压顶之稳。",
      "corporateCultureEn": "Aladdin risk platform anchors global finance; long-term fiduciary rigor; Direct Officer & Direct Resource immense stability.",
      "elementalField": {
        "primary": "Earth",
        "secondary": "Metal"
      },
      "typicalRoles": [
        {
          "titleZh": "Aladdin金融风险企业级系统架构师",
          "titleEn": "Aladdin Risk Analytics Systems Architect",
          "roleKey": "specialist"
        },
        {
          "titleZh": "全球被动指数投资与ETF业务总监",
          "titleEn": "Global iShares & ETF Portfolio Director",
          "roleKey": "executive"
        },
        {
          "titleZh": "多资产主动量化配置基金经理",
          "titleEn": "Multi-Asset Quantitative Allocation PM",
          "roleKey": "specialist"
        },
        {
          "titleZh": "主权财富基金与全球养老金信托顾问",
          "titleEn": "Sovereign Wealth & Pension Advisory Lead",
          "roleKey": "civil"
        },
        {
          "titleZh": "全球另类资产私募直投战役统帅",
          "titleEn": "Private Credit & Infrastructure Direct Dealmaker",
          "roleKey": "martial"
        }
      ]
    },
    {
      "id": "mckinsey",
      "nameZh": "麦肯锡咨询 (McKinsey & Company)",
      "nameEn": "McKinsey & Company",
      "country": "USA",
      "primaryCities": [
        "New York",
        "Chicago",
        "London"
      ],
      "industry": "civil_admin",
      "fortune500Rank": "全球顶级战略管理咨询皇冠",
      "fortune500RankEn": "The Gold Standard in Global Strategic Management Consulting",
      "corporateCultureZh": "自上而下结构化思维金字塔原理，高管幕僚策士角色，Up or Out严酷晋升，食伤智慧化为正官权谋。",
      "corporateCultureEn": "Pyramid principle of top-down structured problem solving; CEO whisperers; Up-or-Out meritocracy; Output & Officer acumen.",
      "elementalField": {
        "primary": "Wood",
        "secondary": "Fire"
      },
      "typicalRoles": [
        {
          "titleZh": "企业战略转型与AI重构全球合伙人",
          "titleEn": "Senior Partner, Digital & AI Transformation",
          "roleKey": "executive"
        },
        {
          "titleZh": "量化商业分析与行业运筹建模师 (QuantumBlack)",
          "titleEn": "Engagement Manager, QuantumBlack AI",
          "roleKey": "specialist"
        },
        {
          "titleZh": "全球宏观经济与产业白皮书高级研究员",
          "titleEn": "Senior Fellow, McKinsey Global Institute",
          "roleKey": "civil"
        },
        {
          "titleZh": "重组并购与尽职调查项目总监",
          "titleEn": "M&A Due Diligence Engagement Leader",
          "roleKey": "specialist"
        },
        {
          "titleZh": "战略落地与供应链降本一线执行教练",
          "titleEn": "Operations Implementation Coach",
          "roleKey": "martial"
        }
      ]
    }
  ],
  "China": [
    {
      "id": "tencent",
      "nameZh": "腾讯控股 (Tencent)",
      "nameEn": "Tencent",
      "country": "China",
      "primaryCities": [
        "Shenzhen",
        "Beijing"
      ],
      "industry": "tech_ai",
      "fortune500Rank": "世界500强前150 · 亚洲科技与社交互娱巨头",
      "fortune500RankEn": "Fortune Global 500 Top 150 · Asian Social & Gaming Colossus",
      "corporateCultureZh": "深圳南山特区创新土壤，赛马机制、产品极简主义、连接一切与科技向善，水木相生润物无声。",
      "corporateCultureEn": "Shenzhen Nanshan dynamism; internal horse race innovation; product minimalism; Water-Wood harmonious ecosystem.",
      "elementalField": {
        "primary": "Water",
        "secondary": "Wood"
      },
      "typicalRoles": [
        {
          "titleZh": "微信生态与产业互联网首席产品架构师",
          "titleEn": "Chief Product Architect, Weixin Ecosystem",
          "roleKey": "executive"
        },
        {
          "titleZh": "大模型预训练与混元算法科学家",
          "titleEn": "Lead Algorithm Scientist, Hunyuan Foundation Models",
          "roleKey": "specialist"
        },
        {
          "titleZh": "分布式海量并发云底层架构师",
          "titleEn": "Massive Concurrency Infrastructure Architect",
          "roleKey": "specialist"
        },
        {
          "titleZh": "数字内容版权与跨国合规法务总监",
          "titleEn": "Global IP & Content Regulatory Counsel",
          "roleKey": "civil"
        },
        {
          "titleZh": "海外游戏发行与跨国商业变现总监",
          "titleEn": "Global Interactive Entertainment Publishing Lead",
          "roleKey": "martial"
        }
      ]
    },
    {
      "id": "huawei",
      "nameZh": "华为技术 (Huawei)",
      "nameEn": "Huawei Technologies",
      "country": "China",
      "primaryCities": [
        "Shenzhen",
        "Shanghai"
      ],
      "industry": "tech_ai",
      "fortune500Rank": "世界500强前100 · 全球通信设备与硬核芯片破局者",
      "fortune500RankEn": "Fortune Global 500 Top 100 · Telecom & Semiconductor Titan",
      "corporateCultureZh": "狼性文化、床垫精神、压强原则攻打城墙口，军团化作战，绝对刚猛七杀与金火交炼逆境崛起。",
      "corporateCultureEn": "Wolf culture; intense pressure-point engineering; militaristic execution; Seven Killings resilience and Metal-Fire grit.",
      "elementalField": {
        "primary": "Metal",
        "secondary": "Fire"
      },
      "typicalRoles": [
        {
          "titleZh": "昇腾AI芯片算子与异构计算首席架构师",
          "titleEn": "Ascend AI Chip Kernel & Compute Architect",
          "roleKey": "specialist"
        },
        {
          "titleZh": "鸿蒙微内核与分布式操作系统科学家",
          "titleEn": "HarmonyOS Microkernel Research Fellow",
          "roleKey": "specialist"
        },
        {
          "titleZh": "5G/6G无线通信国家级军团统帅",
          "titleEn": "5G/6G Global Telecom Solution Legion Leader",
          "roleKey": "executive"
        },
        {
          "titleZh": "跨国知识产权交叉许可谈判合规法务官",
          "titleEn": "Global IP Cross-Licensing Legal Director",
          "roleKey": "civil"
        },
        {
          "titleZh": "海外一带一路能源与政企大客户攻坚总监",
          "titleEn": "Global Enterprise Business Key Account Director",
          "roleKey": "martial"
        }
      ]
    },
    {
      "id": "byd",
      "nameZh": "比亚迪 (BYD)",
      "nameEn": "BYD Company",
      "country": "China",
      "primaryCities": [
        "Shenzhen",
        "Changsha"
      ],
      "industry": "manufacturing",
      "fortune500Rank": "世界500强前150 · 全球新能源汽车与动力电池霸主",
      "fortune500RankEn": "Fortune Global 500 Top 150 · Global EV & Battery Pioneer",
      "corporateCultureZh": "工程师立身、技术鱼池战略、超长全产业链垂直整合，土金生水厚重无比，实干攻坚典范。",
      "corporateCultureEn": "Engineer-led ethos; technology 'fishpond' R&D strategy; complete vertical integration; Earth-Metal-Water power.",
      "elementalField": {
        "primary": "Earth",
        "secondary": "Metal"
      },
      "typicalRoles": [
        {
          "titleZh": "刀片电池与固态电解质核心材料专家",
          "titleEn": "Blade Battery & Solid-State Materials Scientist",
          "roleKey": "specialist"
        },
        {
          "titleZh": "整车智能电控与三电系统集成架构师",
          "titleEn": "EV Powertrain & Electronic Systems Architect",
          "roleKey": "specialist"
        },
        {
          "titleZh": "欧洲/美洲海外整车制造基地建设总指挥",
          "titleEn": "Global Manufacturing Megaplant Managing Director",
          "roleKey": "executive"
        },
        {
          "titleZh": "跨国汽车合规与欧盟碳足迹标准认证总监",
          "titleEn": "Automotive Homologation & Carbon ESG Lead",
          "roleKey": "civil"
        },
        {
          "titleZh": "全球汽车经销商网络拓展战役将领",
          "titleEn": "Global Dealership Network Expansion Director",
          "roleKey": "martial"
        }
      ]
    },
    {
      "id": "alibaba",
      "nameZh": "阿里巴巴 (Alibaba)",
      "nameEn": "Alibaba Group",
      "country": "China",
      "primaryCities": [
        "Hangzhou",
        "Beijing"
      ],
      "industry": "tech_ai",
      "fortune500Rank": "世界500强前100 · 商业基础设施与云计算巨头",
      "fortune500RankEn": "Fortune Global 500 Top 100 · Global E-Commerce & Cloud Infrastructure",
      "corporateCultureZh": "让天下没有难做的生意，组织大开大合，阿里六脉神剑，偏财商业变现与通达四海之水木格局。",
      "corporateCultureEn": "Make it easy to do business anywhere; customer first; agility; Indirect Wealth commercial dynamism and Water-Wood flow.",
      "elementalField": {
        "primary": "Wood",
        "secondary": "Water"
      },
      "typicalRoles": [
        {
          "titleZh": "阿里云弹性计算与飞天操作系统架构师",
          "titleEn": "Apsara Cloud Infrastructure Chief Architect",
          "roleKey": "specialist"
        },
        {
          "titleZh": "电商多模态推荐算法与智能搜索专家",
          "titleEn": "Principal E-Commerce Recommender Algorithm Scientist",
          "roleKey": "specialist"
        },
        {
          "titleZh": "全球跨境速卖通与Lazada事业群总裁",
          "titleEn": "President of Cross-Border E-Commerce Business Group",
          "roleKey": "executive"
        },
        {
          "titleZh": "平台反垄断数据合规与金融法务总监",
          "titleEn": "Digital Platform Regulatory & Financial Counsel",
          "roleKey": "civil"
        },
        {
          "titleZh": "产业带源头工厂直通车一线BD铁军统领",
          "titleEn": "Manufacturing Industry Belt BD Army Commander",
          "roleKey": "martial"
        }
      ]
    },
    {
      "id": "pingan",
      "nameZh": "中国平安 (Ping An)",
      "nameEn": "Ping An Insurance Group",
      "country": "China",
      "primaryCities": [
        "Shenzhen",
        "Shanghai"
      ],
      "industry": "finance_quant",
      "fortune500Rank": "世界500强前50 · 综合金融与医疗科技航母",
      "fortune500RankEn": "Fortune Global 500 Top 50 · Integrated Financial Services & HealthTech",
      "corporateCultureZh": "深圳特区金融改革试验田，危机意识极深、狼性销售与金融科技双轮驱动，正官正财体系庞大。",
      "corporateCultureEn": "Shenzhen financial reforms pioneer; perpetual crisis awareness; aggressive sales + fintech; Direct Officer/Wealth colossus.",
      "elementalField": {
        "primary": "Metal",
        "secondary": "Earth"
      },
      "typicalRoles": [
        {
          "titleZh": "万亿级险资资产负债匹配与量化投资经理",
          "titleEn": "Insurance Asset-Liability & Quantitative PM",
          "roleKey": "specialist"
        },
        {
          "titleZh": "智慧医疗大模型与精算定价科学家",
          "titleEn": "HealthTech Large Model Actuarial Data Scientist",
          "roleKey": "specialist"
        },
        {
          "titleZh": "综合金融分公司总经理",
          "titleEn": "General Manager, Comprehensive Financial Branch",
          "roleKey": "executive"
        },
        {
          "titleZh": "国家金融监管总局对接合规与反洗钱总监",
          "titleEn": "Regulatory Compliance & AML Chief Officer",
          "roleKey": "civil"
        },
        {
          "titleZh": "超大额高净值家族信托业务开拓统帅",
          "titleEn": "High-Net-Worth Family Trust Origination Director",
          "roleKey": "martial"
        }
      ]
    },
    {
      "id": "bytedance",
      "nameZh": "字节跳动 (ByteDance)",
      "nameEn": "ByteDance",
      "country": "China",
      "primaryCities": [
        "Beijing",
        "Shanghai",
        "Singapore"
      ],
      "industry": "creative_media",
      "fortune500Rank": "全球最大独角兽 · 推荐算法与数字内容霸主",
      "fortune500RankEn": "World's #1 Tech Unicorn · Algorithm & Global Content Titan",
      "corporateCultureZh": "Context, not Control，务实的浪漫，数据驱动、A/B测试万物，食伤吐秀与七杀极速演化破局。",
      "corporateCultureEn": "Context not control; pragmatic romanticism; hyper data-driven A/B testing; Output God speed and global market conquest.",
      "elementalField": {
        "primary": "Wood",
        "secondary": "Fire"
      },
      "typicalRoles": [
        {
          "titleZh": "全球超大规模实时推荐算法科学家",
          "titleEn": "Principal Global Recommendation Algorithm Scientist",
          "roleKey": "specialist"
        },
        {
          "titleZh": "短视频与生成式视频模型研发专家",
          "titleEn": "Generative Video Foundation Model Specialist",
          "roleKey": "specialist"
        },
        {
          "titleZh": "TikTok全球商业化变现与电商总监",
          "titleEn": "Global Monetization & E-Commerce Director, TikTok",
          "roleKey": "executive"
        },
        {
          "titleZh": "跨国数据主权合规与海外听证会法务官",
          "titleEn": "Global Data Privacy & Geopolitical Hearings Counsel",
          "roleKey": "civil"
        },
        {
          "titleZh": "海外新兴市场本土化运营攻坚战队长",
          "titleEn": "Emerging Markets Hyper-Growth Operations Lead",
          "roleKey": "martial"
        }
      ]
    },
    {
      "id": "icbc",
      "nameZh": "中国工商银行 (ICBC)",
      "nameEn": "Industrial and Commercial Bank of China",
      "country": "China",
      "primaryCities": [
        "Beijing",
        "Shanghai"
      ],
      "industry": "finance_quant",
      "fortune500Rank": "世界500强前30 · “宇宙第一大行”",
      "fortune500RankEn": "Fortune Global 500 Top 30 · World's Largest Commercial Bank",
      "corporateCultureZh": "国家金融压舱石，体制最高正统，崇尚绝对安全、严苛授信、稳健合规，正官正印正气至高无上。",
      "corporateCultureEn": "The anchor of state financial stability; apex institutional legitimacy; absolute risk control; supreme Direct Officer.",
      "elementalField": {
        "primary": "Metal",
        "secondary": "Earth"
      },
      "typicalRoles": [
        {
          "titleZh": "总行金融市场部债券量化做市投资经理",
          "titleEn": "Financial Markets Bond Quantitative Trader",
          "roleKey": "specialist"
        },
        {
          "titleZh": "国家超级工程银团贷款风险评估官",
          "titleEn": "Mega-Infrastructure Syndicated Loan Risk Officer",
          "roleKey": "civil"
        },
        {
          "titleZh": "金融科技研究院核心区块链与反欺诈架构师",
          "titleEn": "FinTech Institute Lead Blockchain Architect",
          "roleKey": "specialist"
        },
        {
          "titleZh": "省级分行行长 / 党委委员",
          "titleEn": "Provincial Branch General Manager",
          "roleKey": "executive"
        },
        {
          "titleZh": "重大战略央企大客户综合授信主办经理",
          "titleEn": "Central State-Owned Enterprises Lead Relationship Manager",
          "roleKey": "martial"
        }
      ]
    },
    {
      "id": "catl",
      "nameZh": "宁德时代 (CATL)",
      "nameEn": "Contemporary Amperex Technology (CATL)",
      "country": "China",
      "primaryCities": [
        "Ningde",
        "Shanghai"
      ],
      "industry": "manufacturing",
      "fortune500Rank": "世界500强 · 全球动力电池市占率连续八年第一",
      "fortune500RankEn": "Fortune Global 500 · #1 Global EV Battery Share for 8 Years",
      "corporateCultureZh": "曾毓群“赌性更坚强”转化为严谨工程极致，极限制造六西格玛，军令如山，七杀攻坚与土金炼宝。",
      "corporateCultureEn": "Calculated audacity transmuted into extreme 6-sigma manufacturing; strict operational discipline; Seven Killings resilience.",
      "elementalField": {
        "primary": "Metal",
        "secondary": "Earth"
      },
      "typicalRoles": [
        {
          "titleZh": "新一代全固态电池化学体系领军科学家",
          "titleEn": "Chief Scientist, Next-Gen Solid-State Chemistry",
          "roleKey": "specialist"
        },
        {
          "titleZh": "灯塔工厂百GWh级极限制造数字化总工程师",
          "titleEn": "Lighthouse Megafactory Smart Manufacturing Lead",
          "roleKey": "specialist"
        },
        {
          "titleZh": "全球跨国车企联合合资业务战略总经理",
          "titleEn": "Global OEM Strategic Joint Venture Managing Director",
          "roleKey": "executive"
        },
        {
          "titleZh": "全球矿产资源地缘合规与碳排放法务总监",
          "titleEn": "Global Mineral Sourcing & Carbon Compliance Counsel",
          "roleKey": "civil"
        },
        {
          "titleZh": "全球超大规模储能电站交钥匙工程攻坚统领",
          "titleEn": "Global Megawatt Energy Storage Project Commander",
          "roleKey": "martial"
        }
      ]
    }
  ],
  "Canada": [
    {
      "id": "rbc",
      "nameZh": "加拿大皇家银行 (RBC)",
      "nameEn": "Royal Bank of Canada (RBC)",
      "country": "Canada",
      "primaryCities": [
        "Toronto",
        "Montreal"
      ],
      "industry": "finance_quant",
      "fortune500Rank": "世界500强 · 加拿大第一大银行与金融巨舰",
      "fortune500RankEn": "Fortune Global 500 · Canada's Largest Bank & Financial Colossus",
      "corporateCultureZh": "稳健保守、审慎合规、北美顶级私人财富管理，多伦多金融街核心基石，正官正印正统庄严。",
      "corporateCultureEn": "Rock-solid conservatism, prudential risk control, Bay Street anchor; supreme Direct Officer and Resource institutional dignity.",
      "elementalField": {
        "primary": "Metal",
        "secondary": "Water"
      },
      "typicalRoles": [
        {
          "titleZh": "全球投行部 (RBC Capital Markets) 矿业并购总监",
          "titleEn": "Managing Director, Global Mining M&A (RBC CM)",
          "roleKey": "executive"
        },
        {
          "titleZh": "量化固定收益与宏观利率对冲模型专家",
          "titleEn": "Quantitative Fixed Income & Rates Modeling Lead",
          "roleKey": "specialist"
        },
        {
          "titleZh": "北美超高净值家族办公室高级顾问",
          "titleEn": "Senior Family Office & Wealth Strategist",
          "roleKey": "civil"
        },
        {
          "titleZh": "系统性重要金融机构 (D-SIBs) 监管合规官",
          "titleEn": "Systemic Risk & Basel III Regulatory Director",
          "roleKey": "civil"
        },
        {
          "titleZh": "商业地产大宗银团贷款一线拓展总监",
          "titleEn": "Commercial Real Estate Syndication Lead",
          "roleKey": "martial"
        }
      ]
    },
    {
      "id": "td_bank",
      "nameZh": "道明银行 (TD Bank Group)",
      "nameEn": "TD Bank Group",
      "country": "Canada",
      "primaryCities": [
        "Toronto"
      ],
      "industry": "finance_quant",
      "fortune500Rank": "世界500强 · 北美第六大银行",
      "fortune500RankEn": "Fortune Global 500 · Top 6 Bank in North America",
      "corporateCultureZh": "客户体验至上、零售银行服务标杆，深耕美加走廊，温和正印护持与稳健正财现金流。",
      "corporateCultureEn": "Customer convenience champion, US-Canada retail banking giant; Direct Resource nurturing + stable Direct Wealth cash flow.",
      "elementalField": {
        "primary": "Earth",
        "secondary": "Metal"
      },
      "typicalRoles": [
        {
          "titleZh": "零售银行全渠道数字化转型副总裁",
          "titleEn": "VP of Omnichannel Retail Banking Transformation",
          "roleKey": "executive"
        },
        {
          "titleZh": "TD证券衍生品交易策略量化研究员",
          "titleEn": "Derivatives Strategies Quantitative Researcher",
          "roleKey": "specialist"
        },
        {
          "titleZh": "美加跨境税法与反洗钱资深合规官",
          "titleEn": "Cross-Border AML & Sanctions Compliance Counsel",
          "roleKey": "civil"
        },
        {
          "titleZh": "金融科技AI风控与反欺诈算法科学家",
          "titleEn": "FinTech AI Fraud Detection Scientist",
          "roleKey": "specialist"
        },
        {
          "titleZh": "商业银行中小企业信贷业务攻坚主管",
          "titleEn": "Commercial SME Lending Branch Director",
          "roleKey": "martial"
        }
      ]
    },
    {
      "id": "shopify",
      "nameZh": "Shopify",
      "nameEn": "Shopify",
      "country": "Canada",
      "primaryCities": [
        "Ottawa",
        "Toronto",
        "Vancouver"
      ],
      "industry": "tech_ai",
      "fortune500Rank": "全球最大独立电商基础设施 · 加拿大科技皇冠",
      "fortune500RankEn": "World's #1 Independent E-Commerce Platform · Canadian Tech Crown",
      "corporateCultureZh": "反亚马逊的独立品牌护航者，全远程高效协作，黑客技术文化，食伤吐秀，敏捷自由与开发者生态至上。",
      "corporateCultureEn": "The anti-Amazon merchant champion; remote-first high-trust ethos; hacker engineering culture; pure Output God innovation.",
      "elementalField": {
        "primary": "Wood",
        "secondary": "Fire"
      },
      "typicalRoles": [
        {
          "titleZh": "全球超大规模电商交易分布式内核架构师",
          "titleEn": "Principal Core Distributed Systems Architect",
          "roleKey": "specialist"
        },
        {
          "titleZh": "生成式AI商户赋能工具产品副总裁",
          "titleEn": "VP of Merchant Product & Generative AI",
          "roleKey": "executive"
        },
        {
          "titleZh": "金融支付与Shopify Payments风险算法专家",
          "titleEn": "Payments & Merchant Financial Risk Modeler",
          "roleKey": "specialist"
        },
        {
          "titleZh": "全球开发者生态与API战略合作总监",
          "titleEn": "Global Developer Platform Ecosystem Director",
          "roleKey": "civil"
        },
        {
          "titleZh": "全球跨国品牌企业级解决方案销售总监",
          "titleEn": "Enterprise Brand Strategic Solutions Director",
          "roleKey": "martial"
        }
      ]
    },
    {
      "id": "brookfield",
      "nameZh": "博枫资产管理 (Brookfield)",
      "nameEn": "Brookfield Asset Management",
      "country": "Canada",
      "primaryCities": [
        "Toronto",
        "New York"
      ],
      "industry": "finance_quant",
      "fortune500Rank": "世界500强 · 全球最大另类资产管理巨头之一 (近万亿美元)",
      "fortune500RankEn": "Fortune Global 500 · Global Alternative Asset Titan ($900B+ AUM)",
      "corporateCultureZh": "基础设施、可再生能源、商业地产逆周期猎手，善于在危机中以重金买断垄断资产，偏财魄力与七杀统帅结合。",
      "corporateCultureEn": "Counter-cyclical infrastructure & real estate titan; buys generational assets during distress; Indirect Wealth & Seven Killings.",
      "elementalField": {
        "primary": "Earth",
        "secondary": "Metal"
      },
      "typicalRoles": [
        {
          "titleZh": "全球清洁能源与电网基础设施直投总监",
          "titleEn": "Managing Director, Global Clean Energy Direct Deals",
          "roleKey": "executive"
        },
        {
          "titleZh": "不良资产重组与结构化困境股权专家",
          "titleEn": "Distressed Real Estate & Special Situations Structurer",
          "roleKey": "specialist"
        },
        {
          "titleZh": "全球机构LP募资与主权资金关系顾问",
          "titleEn": "Global Institutional Capital Raising & LP Relations Lead",
          "roleKey": "civil"
        },
        {
          "titleZh": "重大基建项目现金流精算建模师",
          "titleEn": "Infrastructure Financial Modeling & Underwriting Lead",
          "roleKey": "specialist"
        },
        {
          "titleZh": "海外大型港口与物流园区一线资产运营长",
          "titleEn": "Global Logistics & Ports Chief Asset Operator",
          "roleKey": "martial"
        }
      ]
    },
    {
      "id": "enbridge",
      "nameZh": "安桥公司 (Enbridge)",
      "nameEn": "Enbridge",
      "country": "Canada",
      "primaryCities": [
        "Calgary",
        "Edmonton"
      ],
      "industry": "manufacturing",
      "fortune500Rank": "世界500强 · 北美最大能源管网输送巨头",
      "fortune500RankEn": "Fortune Global 500 · North America's Largest Energy Pipeline Network",
      "corporateCultureZh": "北美原油天然气大动脉管理者，沉稳土金格局，规避风险、稳收管输费，百年正印现金流奶牛。",
      "corporateCultureEn": "The bloodline of North American energy transport; defensive tollbooth business model; Earth-Metal deep stability.",
      "elementalField": {
        "primary": "Earth",
        "secondary": "Water"
      },
      "typicalRoles": [
        {
          "titleZh": "跨大陆能源管网自动化中控系统总工程师",
          "titleEn": "Trans-Continental Pipeline SCADA Chief Engineer",
          "roleKey": "specialist"
        },
        {
          "titleZh": "跨国油气商品管输收费结构化定价专家",
          "titleEn": "Toll Rate Structuring & Tariff Strategy Manager",
          "roleKey": "specialist"
        },
        {
          "titleZh": "原住民土地权益协议与环境评测总监",
          "titleEn": "Indigenous Relations & Environmental Permitting Director",
          "roleKey": "civil"
        },
        {
          "titleZh": "大型输油气干线资本项目工程总指挥",
          "titleEn": "Major Pipeline Capital Projects Executive Director",
          "roleKey": "executive"
        },
        {
          "titleZh": "管网巡检应急抢险与安全防线战将",
          "titleEn": "Pipeline Integrity & Emergency Response Commander",
          "roleKey": "martial"
        }
      ]
    },
    {
      "id": "magna",
      "nameZh": "麦格纳国际 (Magna International)",
      "nameEn": "Magna International",
      "country": "Canada",
      "primaryCities": [
        "Toronto"
      ],
      "industry": "manufacturing",
      "fortune500Rank": "世界500强 · 全球排名前三级汽车一级零部件与整车代工巨头",
      "fortune500RankEn": "Fortune Global 500 · World Top 3 Tier-1 Automotive & Contract Assembler",
      "corporateCultureZh": "汽车工业的“代工之王”，从奔驰G级代工到智能底盘开发，德奥严谨工匠精神，金金交加极致精密工程。",
      "corporateCultureEn": "The king of automotive contract manufacturing; Austro-Canadian precision engineering; relentless Metal-Metal craft perfection.",
      "elementalField": {
        "primary": "Metal",
        "secondary": "Earth"
      },
      "typicalRoles": [
        {
          "titleZh": "新能源汽车智能电动四驱底盘系统总师",
          "titleEn": "Chief Engineer, EV All-Wheel Drive & Chassis Systems",
          "roleKey": "specialist"
        },
        {
          "titleZh": "整车工程代工全球项目总经理",
          "titleEn": "Complete Vehicle Contract Manufacturing Program Director",
          "roleKey": "executive"
        },
        {
          "titleZh": "全自动冲压与机器人焊接产线工艺专家",
          "titleEn": "Robotic Welding & Stamping Tooling Specialist",
          "roleKey": "specialist"
        },
        {
          "titleZh": "全球Tier-1主机厂质量体系与合规主管",
          "titleEn": "Global OEM Quality Assurance & IATF Compliance Lead",
          "roleKey": "civil"
        },
        {
          "titleZh": "北美车企客户战略竞标与大单攻坚总监",
          "titleEn": "Automotive OEM Strategic Bidding & Key Account Lead",
          "roleKey": "martial"
        }
      ]
    }
  ]
};

if (typeof window !== 'undefined') {
  window.ENTERPRISES_DB = ENTERPRISES_DB;
}
if (typeof globalThis !== 'undefined') {
  globalThis.ENTERPRISES_DB = ENTERPRISES_DB;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ENTERPRISES_DB;
}
