/**
 * PoliticalGameMatrix (多方博弈组织政治矩阵引擎)
 * 
 * 将双轨决策升级为 3~5 人非零和博弈网络，把十神转化为带有权重的有向图边。
 * 节点: 我、直属领导、同侪竞争对手、关键技术骨干等
 * 有向边:
 * - 官杀: 权力规制、问责、压制 (高摩擦边)
 * - 印星: 背书、赋能、资源输送 (协同边)
 * - 伤官: 挑战、解构、不服管教 (冲突边)
 * - 比劫: 同侪竞争、利益切分
 * - 财星: 业绩管控、指标榨取
 * - 食神: 和顺融通、赋能转化
 */
class PoliticalGameMatrix {
  static STEMS = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];

  static TEN_GODS_MAP_ZH = {
    '甲': { '甲': '比肩', '乙': '劫财', '丙': '食神', '丁': '伤官', '戊': '偏财', '己': '正财', '庚': '七杀', '辛': '正官', '壬': '偏印', '癸': '正印' },
    '乙': { '甲': '劫财', '乙': '比肩', '丙': '伤官', '丁': '食神', '戊': '正财', '己': '偏财', '庚': '正官', '辛': '七杀', '壬': '正印', '癸': '偏印' },
    '丙': { '甲': '偏印', '乙': '正印', '丙': '比肩', '丁': '劫财', '戊': '食神', '己': '伤官', '庚': '偏财', '辛': '正财', '壬': '七杀', '癸': '正官' },
    '丁': { '甲': '正印', '乙': '偏印', '丙': '劫财', '丁': '比肩', '戊': '伤官', '己': '食神', '庚': '正财', '辛': '偏财', '壬': '正官', '癸': '七杀' },
    '戊': { '甲': '七杀', '乙': '正官', '丙': '偏印', '丁': '正印', '戊': '比肩', '己': '劫财', '庚': '食神', '辛': '伤官', '壬': '偏财', '癸': '正财' },
    '己': { '甲': '正官', '乙': '七杀', '丙': '正印', '丁': '偏印', '戊': '劫财', '己': '比肩', '庚': '伤官', '辛': '食神', '壬': '正财', '癸': '偏财' },
    '庚': { '甲': '偏财', '乙': '正财', '丙': '七杀', '丁': '正官', '戊': '偏印', '己': '正印', '庚': '比肩', '辛': '劫财', '壬': '食神', '癸': '伤官' },
    '辛': { '甲': '正财', '乙': '偏财', '丙': '正官', '丁': '七杀', '戊': '正印', '己': '偏印', '庚': '劫财', '辛': '比肩', '壬': '伤官', '癸': '食神' },
    '壬': { '甲': '食神', '乙': '伤官', '丙': '偏财', '丁': '正财', '戊': '七杀', '己': '正官', '庚': '偏印', '辛': '正印', '壬': '比肩', '癸': '劫财' },
    '癸': { '甲': '伤官', '乙': '食神', '丙': '正财', '丁': '偏财', '戊': '正官', '己': '七杀', '庚': '正印', '辛': '偏印', '壬': '劫财', '癸': '比肩' }
  };

  static TEN_GODS_MAP_EN = {
    '甲': { '甲': 'Friend', '乙': 'Rob Wealth', '丙': 'Eating God', '丁': 'Hurting Officer', '戊': 'Indirect Wealth', '己': 'Direct Wealth', '庚': 'Seven Killings', '辛': 'Direct Officer', '壬': 'Indirect Resource', '癸': 'Direct Resource' },
    '乙': { '甲': 'Rob Wealth', '乙': 'Friend', '丙': 'Hurting Officer', '丁': 'Eating God', '戊': 'Direct Wealth', '己': 'Indirect Wealth', '庚': 'Direct Officer', '辛': 'Seven Killings', '壬': 'Direct Resource', '癸': 'Indirect Resource' },
    '丙': { '甲': 'Indirect Resource', '乙': 'Direct Resource', '丙': 'Friend', '丁': 'Rob Wealth', '戊': 'Eating God', '己': 'Hurting Officer', '庚': 'Indirect Wealth', '辛': 'Direct Wealth', '壬': 'Seven Killings', '癸': 'Direct Officer' },
    '丁': { '甲': 'Direct Resource', '乙': 'Indirect Resource', '丙': 'Rob Wealth', '丁': 'Friend', '戊': 'Hurting Officer', '己': 'Eating God', '庚': 'Direct Wealth', '辛': 'Indirect Wealth', '壬': 'Direct Officer', '癸': 'Seven Killings' },
    '戊': { '甲': 'Seven Killings', '乙': 'Direct Officer', '丙': 'Indirect Resource', '丁': 'Direct Resource', '戊': 'Friend', '己': 'Rob Wealth', '庚': 'Eating God', '辛': 'Hurting Officer', '壬': 'Indirect Wealth', '癸': 'Direct Wealth' },
    '己': { '甲': 'Direct Officer', '乙': 'Seven Killings', '丙': 'Direct Resource', '丁': 'Indirect Resource', '戊': 'Rob Wealth', '己': 'Friend', '庚': 'Hurting Officer', '辛': 'Eating God', '壬': 'Direct Wealth', '癸': 'Indirect Wealth' },
    '庚': { '甲': 'Indirect Wealth', '乙': 'Direct Wealth', '丙': 'Seven Killings', '丁': 'Direct Officer', '戊': 'Indirect Resource', '己': 'Direct Resource', '庚': 'Friend', '辛': 'Rob Wealth', '壬': 'Eating God', '癸': 'Hurting Officer' },
    '辛': { '甲': 'Direct Wealth', '乙': 'Indirect Wealth', '丙': 'Direct Officer', '丁': 'Seven Killings', '戊': 'Direct Resource', '己': 'Indirect Resource', '庚': 'Rob Wealth', '辛': 'Friend', '壬': 'Hurting Officer', '癸': 'Eating God' },
    '壬': { '甲': 'Eating God', '乙': 'Hurting Officer', '丙': 'Indirect Wealth', '丁': 'Direct Wealth', '戊': 'Seven Killings', '己': 'Direct Officer', '庚': 'Indirect Resource', '辛': 'Direct Resource', '壬': 'Friend', '癸': 'Rob Wealth' },
    '癸': { '甲': 'Hurting Officer', '乙': 'Eating God', '丙': 'Direct Wealth', '丁': 'Indirect Wealth', '戊': 'Direct Officer', '己': 'Seven Killings', '庚': 'Direct Resource', '辛': 'Indirect Resource', '壬': 'Rob Wealth', '癸': 'Friend' }
  };

  static STEM_EN_MAP = {
    '甲': 'Jia', '乙': 'Yi', '丙': 'Bing', '丁': 'Ding', '戊': 'Wu',
    '己': 'Ji', '庚': 'Geng', '辛': 'Xin', '壬': 'Ren', '癸': 'Gui'
  };

  constructor(players = []) {
    // players: [{ id: 'me', nameZh: '我', nameEn: 'Self', dm: '甲', role: 'core' }, ...]
    this.players = players.length > 0 ? players : this.getDefaultPlayers();
  }

  getDefaultPlayers() {
    return [
      { id: 'me', nameZh: '我 (命主)', nameEn: 'Self (Day Master)', dm: '甲', role: 'self' },
      { id: 'boss', nameZh: '直属主管 (决策者)', nameEn: 'Direct Supervisor', dm: '庚', role: 'leader' },
      { id: 'rival', nameZh: '业务竞争者 (同侪)', nameEn: 'Key Competitor (Peer)', dm: '辛', role: 'rival' },
      { id: 'ally', nameZh: '核心技术骨干 (潜在同盟)', nameEn: 'Core Technical Ally', dm: '壬', role: 'ally' }
    ];
  }

  /**
   * 计算角色 A 面对角色 B 的十神权力相克关系
   */
  computeRelation(dmA, dmB, lang = 'zh') {
    const isEn = (lang === 'en');
    const godZh = PoliticalGameMatrix.TEN_GODS_MAP_ZH[dmA]?.[dmB] || '比肩';
    const godEn = PoliticalGameMatrix.TEN_GODS_MAP_EN[dmA]?.[dmB] || 'Friend';

    let edgeType = 'neutral';
    let weight = 0.0;
    let descZh = '';
    let descEn = '';

    switch (godZh) {
      case '七杀':
      case '正官':
        edgeType = 'friction';
        weight = -0.85;
        descZh = '权力规制与高压问责，存在严苛考核阻抗';
        descEn = 'Regulatory authority and high-pressure oversight; severe accountability friction';
        break;
      case '正印':
      case '偏印':
        edgeType = 'support';
        weight = 0.85;
        descZh = '资源赋能与信任庇护，提供关键背书与托底';
        descEn = 'Resource enablement and protective endorsement; vital sponsorship shelter';
        break;
      case '伤官':
        edgeType = 'conflict';
        weight = -0.65;
        descZh = '解构权威、不服管教，产生直接锋芒对冲';
        descEn = 'Deconstructs authority; insubordination and ideological friction';
        break;
      case '食神':
        edgeType = 'harmony';
        weight = 0.60;
        descZh = '温和沟通、创意赋能，化解矛盾创造增量';
        descEn = 'Constructive communication and creative output; dissolves latent tension';
        break;
      case '比肩':
      case '劫财':
        edgeType = 'peer';
        weight = -0.40;
        descZh = '资源分摊与暗中夺食竞争';
        descEn = 'Resource encroachment and latent rivalry';
        break;
      case '正财':
      case '偏财':
        edgeType = 'resource';
        weight = 0.40;
        descZh = '利益管控、指标支配与产出榨取';
        descEn = 'Resource leverage, KPI governance, and performance exploitation';
        break;
      default:
        edgeType = 'neutral';
        weight = 0.0;
        descZh = '常态业务往来，能量均衡中立';
        descEn = 'Standard operational engagement; neutral energy balance';
        break;
    }

    const res = {
      name: isEn ? godEn : godZh,
      tenGod: isEn ? godEn : godZh,
      edgeType,
      weight,
      desc: isEn ? descEn : descZh
    };

    if (isEn) {
      res.tenGodEn = godEn;
      res.descEn = descEn;
    } else {
      res.tenGodZh = godZh;
      res.descZh = descZh;
    }

    return res;
  }

  /**
   * 生成所有参与者的 N x N 交叉关系矩阵
   */
  computeMatrix(lang = 'zh') {
    const isEn = (lang === 'en');
    const matrix = [];

    for (let i = 0; i < this.players.length; i++) {
      const p = this.players[i];
      const playerObj = {
        id: p.id,
        name: isEn ? p.nameEn : p.nameZh,
        dm: isEn ? (PoliticalGameMatrix.STEM_EN_MAP[p.dm] || p.dm) : p.dm,
        role: p.role
      };
      if (isEn) {
        playerObj.nameEn = p.nameEn;
        playerObj.dmEn = PoliticalGameMatrix.STEM_EN_MAP[p.dm] || p.dm;
      } else {
        playerObj.nameZh = p.nameZh;
        playerObj.dmZh = p.dm;
      }

      const row = [];
      for (let j = 0; j < this.players.length; j++) {
        if (i === j) {
          row.push({
            from: this.players[i].id,
            to: this.players[j].id,
            relation: isEn ? 'Self' : '自身',
            edgeType: 'self',
            weight: 0.0
          });
        } else {
          const rel = this.computeRelation(this.players[i].dm, this.players[j].dm, lang);
          row.push({
            from: this.players[i].id,
            to: this.players[j].id,
            ...rel
          });
        }
      }
      matrix.push({
        player: playerObj,
        relations: row
      });
    }

    return matrix;
  }

  buildMatrix(lang = 'zh') {
    return this.computeMatrix(lang);
  }

  /**
   * 结合流年干支评估当前的同盟与破局战术 (融合《荣枯鉴》)
   */
  analyzeYearTransit(currentTransitYearGan = '丙', lang = 'zh') {
    const isEn = (lang === 'en');
    const transitStemName = isEn ? (PoliticalGameMatrix.STEM_EN_MAP[currentTransitYearGan] || currentTransitYearGan) : currentTransitYearGan;
    const reports = [];
    const myRole = this.players.find(p => p.id === 'me') || this.players[0];
    const boss = this.players.find(p => p.role === 'leader') || this.players[1];
    const rival = this.players.find(p => p.role === 'rival') || this.players[2];
    const ally = this.players.find(p => p.role === 'ally') || this.players[3];

    // 1. 评估直属领导在当前流年的承压状态
    if (boss) {
      const yearToBoss = this.computeRelation(currentTransitYearGan, boss.dm, lang);

      const isBossPressure = isEn ? (yearToBoss.tenGodEn === 'Seven Killings' || yearToBoss.tenGodEn === 'Direct Officer')
                                  : (yearToBoss.tenGodZh === '七杀' || yearToBoss.tenGodZh === '正官');
      const isBossOutput = isEn ? (yearToBoss.tenGodEn === 'Eating God' || yearToBoss.tenGodEn === 'Hurting Officer')
                                : (yearToBoss.tenGodZh === '食神' || yearToBoss.tenGodZh === '伤官');

      if (isBossPressure) {
        reports.push({
          strategic_posture: isEn ? 'Leverage Hegemony & Consolidate Alignment' : '借势合围 · 稳固同盟',
          tactical_action: isEn
            ? `Transit stem [${transitStemName}] exerts ${yearToBoss.tenGodEn} pressure on supervisor [${boss.nameEn}]. Leadership carries acute stress, revealing internal structural cracks.`
            : `当前流年【${currentTransitYearGan}】为领导的【${yearToBoss.tenGodZh}】，领导承压严重，内部控制力出现缝隙。`,
          canon_reference: isEn
            ? 'Codex Rong Ku Jian (Action Volume): "When fortune wanes, retreat; when authority crests, align. When subtle shifts stir, seize the decisive pivot."'
            : '《荣枯鉴·应机卷》：“势衰则退，势强则附；机动于微，不可失也。”',
          action_item: isEn
            ? 'Refrain from active confrontation. Proactively assume administrative burdens (acting as Resource cushion), win over technical neutral parties, and secure executive sponsorship.'
            : '切忌主动出头挑衅，应主动承担繁复背书工作（印星化解），拉拢中立派技术骨干完成同盟闭环。'
        });
      } else if (isBossOutput) {
        reports.push({
          strategic_posture: isEn ? 'Innovation Alignment & Strategic Output' : '顺水推舟 · 秀气生财',
          tactical_action: isEn
            ? `Supervisor [${boss.nameEn}] is in Output phase [${yearToBoss.tenGodEn}], highly motivated to launch new ventures and hungry for breakthrough results.`
            : `领导处于【${yearToBoss.tenGodZh}】吐秀求变期，迫切需要新业务亮点与标杆成果。`,
          canon_reference: isEn
            ? 'Codex Rong Ku Jian (Virtue Volume): "He who solves the superior dilemma receives unshakeable trust without verbal solicitation."'
            : '《荣枯鉴·圆通卷》：“解人难者得其心，成事之名归于上，利自随之。”',
          action_item: isEn
            ? 'Proactively draft strategic proposals. Feed innovative frameworks to the supervisor while ensuring credit flows upward to solidify political alliance.'
            : '主动递交业务创新方案，把破局功劳归于上级，换取未来半年的核心项目主导权。'
        });
      }
    }

    // 2. 评估同侪竞争对手
    if (rival) {
      const yearToRival = this.computeRelation(currentTransitYearGan, rival.dm, lang);
      const isRivalClash = isEn ? (yearToRival.tenGodEn === 'Rob Wealth' || yearToRival.tenGodEn === 'Seven Killings')
                                : (yearToRival.tenGodZh === '劫财' || yearToRival.tenGodZh === '七杀');

      if (isRivalClash) {
        reports.push({
          strategic_posture: isEn ? 'Stand Guard While Rival Exhausts Energy' : '静观其变 · 借力化煞',
          tactical_action: isEn
            ? `Transit stem triggers ${yearToRival.tenGodEn} against competitor [${rival.nameEn}], generating external attrition and internal peer disputes.`
            : `流年引动竞争对手【${rival.nameZh}】的【${yearToRival.tenGodZh}】，对方容易急躁冒进、出现重大资源内耗。`,
          canon_reference: isEn
            ? 'Codex Rong Ku Jian (Relief Volume): "To avoid accusation, avoid blame; to avoid blame, avoid suspicion. When slander approaches, defense worsens friction; humility closes gaps."'
            : '《荣枯鉴·解厄卷》：“避谤不若避罪，避罪不若避嫌。退而守拙，隙自弥合。”',
          action_item: isEn
            ? 'Maintain strict protocol firewall. Do not gloat or attack; let their impetuous missteps unfold naturally while you guard core deliverables.'
            : '严守职责边界与项目防火墙，不主动落井下石，静待其战略失误自现。'
        });
      }
    }

    // 3. 评估与核心技术骨干/同盟协同
    if (ally) {
      const myToAlly = this.computeRelation(myRole.dm, ally.dm, lang);
      reports.push({
        strategic_posture: isEn ? 'Technical Synergy & Dual Moats' : '技术合璧 · 构筑护城河',
        tactical_action: isEn
          ? `Your relationship with technical pillar [${ally.nameEn}] manifests as [${myToAlly.tenGodEn}]. Combined capabilities create indispensable leverage.`
          : `您与技术骨干【${ally.nameZh}】形成【${myToAlly.tenGodZh}】交互，构成不可替代的技术业务双轮驱动。`,
        canon_reference: isEn
          ? 'Codex Rong Ku Jian (Alliance Volume): "Isolated virtue falls into ambush; united intelligence creates unassailable foundations."'
          : '《荣枯鉴·交结卷》：“孤木难成大厦之材，合契乃建不拔之基。”',
        action_item: isEn
          ? 'Deepen collaborative deliverables with technical allies. Share credit generously to solidify long-term defense against organizational volatility.'
          : '在核心交付件中绑定骨干署名，以扎实的专业壁垒建立组织不可替代性。'
      });
    }

    return reports;
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PoliticalGameMatrix };
}
if (typeof window !== 'undefined') {
  window.PoliticalGameMatrix = PoliticalGameMatrix;
}
