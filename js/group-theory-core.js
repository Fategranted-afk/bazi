/**
 * 钦天监 · 象数群论代数系统 (Phase 7.3: Axiomatic Group-Theoretic Metaphysics Core)
 *
 * Mathematical Axiomatization:
 * 1. Heavenly Stems form cyclic group Z10 = {0..9}.
 * 2. Earthly Branches form cyclic group Z12 = {0..11}.
 * 3. 60-Jiazi is strictly the subgroup G60 = <(1,1)> <= Z10 x Z12, with |G60| = lcm(10, 12) = 60.
 * 4. Parity Conservation Law: For all (s, b) in G60, s = b (mod 2).
 * 5. Stem Five-Harmony Involution: sigma_stem(s) = (s + 5) mod 10, satisfying sigma^2 = id.
 * 6. Branch Six-Harmony Involutive Map: tau_branch(b) = (1 - b + 12) mod 12, satisfying tau^2 = id.
 * 7. 64 Hexagrams 6D Hypercube Q6: Vertices in F2^6, Hamming distance d_H(u, v), geodesic evolution.
 *
 * 100% Offline-First, pure mathematical invariants, zero side effects on existing engines.
 */

(function (global) {
  'use strict';

  const STEMS = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
  const BRANCHES = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];

  const STEM_ELEMENTS = ['木', '木', '火', '火', '土', '土', '金', '金', '水', '水'];
  const BRANCH_ELEMENTS = ['水', '土', '木', '木', '土', '火', '火', '土', '金', '金', '土', '水'];

  class GroupTheoryCore {
    /**
     * Checks if a given Stem index and Branch index form a valid 60-Jiazi element.
     * Axiom: s = b (mod 2)
     */
    static isValidJiazi(sIdx, bIdx) {
      if (typeof sIdx !== 'number' || typeof bIdx !== 'number') return false;
      const s = ((sIdx % 10) + 10) % 10;
      const b = ((bIdx % 12) + 12) % 12;
      return (s % 2) === (b % 2);
    }

    /**
     * Computes the 60-Jiazi cycle index for (s, b).
     * Solves Chinese Remainder Theorem / Subgroup generator index in <(1,1)>.
     * Returns integer 0..59, or -1 if invalid parity.
     */
    static getJiaziIndex(sIdx, bIdx) {
      if (!this.isValidJiazi(sIdx, bIdx)) return -1;
      const s = ((sIdx % 10) + 10) % 10;
      const b = ((bIdx % 12) + 12) % 12;
      for (let i = 0; i < 60; i++) {
        if (i % 10 === s && i % 12 === b) return i;
      }
      return -1;
    }

    /**
     * Returns the pair (stemIndex, branchIndex) for the k-th Jiazi element (k in 0..59).
     */
    static getJiaziFromIndex(k) {
      const idx = ((k % 60) + 60) % 60;
      const sIdx = idx % 10;
      const bIdx = idx % 12;
      return {
        index: idx,
        stemIndex: sIdx,
        branchIndex: bIdx,
        stem: STEMS[sIdx],
        branch: BRANCHES[bIdx],
        stemElement: STEM_ELEMENTS[sIdx],
        branchElement: BRANCH_ELEMENTS[bIdx],
        name: STEMS[sIdx] + BRANCHES[bIdx],
        text: STEMS[sIdx] + BRANCHES[bIdx]
      };
    }

    /**
     * Stem Five-Harmony Involution Permutation: sigma(s) = (s + 5) mod 10
     * Note: This is an involutive pairing permutation in S_10 (sigma^2 = id),
     * NOT a group automorphism of (Z10, +) as it does not preserve addition.
     */
    static stemFiveHarmony(sIdx) {
      const s = ((sIdx % 10) + 10) % 10;
      const partner = (s + 5) % 10;
      return {
        originalIndex: s,
        partnerIndex: partner,
        originalStem: STEMS[s],
        partnerStem: STEMS[partner],
        isInvolution: true
      };
    }

    /**
     * Earthly Branch Six-Harmony Involutive Permutation (Affine Reflection in S_12):
     * tau(b) = (1 - b + 12) mod 12
     * Zi(0) <-> Chou(1), Yin(2) <-> Hai(11), Mao(3) <-> Xu(10),
     * Chen(4) <-> You(9), Si(5) <-> Shen(8), Wu(6) <-> Wei(7).
     * Involution property: tau(tau(b)) == b (tau^2 = id)
     */
    static branchSixHarmony(bIdx) {
      const b = ((bIdx % 12) + 12) % 12;
      const partner = ((1 - b + 12) % 12);
      return {
        originalIndex: b,
        partnerIndex: partner,
        originalBranch: BRANCHES[b],
        partnerBranch: BRANCHES[partner],
        isInvolution: true
      };
    }

    /**
     * Generates all 60 Jiazi elements as an audited algebraic group representation.
     */
    static generateGroup60() {
      const elements = [];
      for (let i = 0; i < 60; i++) {
        const item = this.getJiaziFromIndex(i);
        const sHarmony = this.stemFiveHarmony(item.stemIndex);
        const bHarmony = this.branchSixHarmony(item.branchIndex);
        elements.push({
          index: i,
          stem: item.stem,
          branch: item.branch,
          text: item.text,
          parity: item.stemIndex % 2 === 0 ? 'yang' : 'yin',
          stemElement: STEM_ELEMENTS[item.stemIndex],
          branchElement: BRANCH_ELEMENTS[item.branchIndex],
          stemHarmonyPartner: sHarmony.partnerStem,
          branchHarmonyPartner: bHarmony.partnerBranch
        });
      }
      return elements;
    }

    /**
     * 64 Hexagrams 6-Dimensional Hypercube (Q6) Representation.
     * Each hexagram is encoded as a 6-bit binary integer [0..63].
     */
    static hexagramHammingDistance(u, v) {
      let xor = (u ^ v) & 63;
      let count = 0;
      while (xor > 0) {
        count += (xor & 1);
        xor >>= 1;
      }
      return count;
    }

    /**
     * Finds the shortest geodesic evolution path between two hexagrams on Q6.
     * Returns an array of intermediate states flipping one bit at a time.
     */
    static hexagramGeodesic(u, v) {
      const start = u & 63;
      const end = v & 63;
      const path = [start];
      let curr = start;
      for (let bit = 0; bit < 6; bit++) {
        const mask = 1 << bit;
        if ((curr & mask) !== (end & mask)) {
          curr ^= mask;
          path.push(curr);
        }
      }
      return {
        startHex: start,
        endHex: end,
        hammingDistance: this.hexagramHammingDistance(start, end),
        geodesicPath: path
      };
    }

    static hexagramGeodesicPath(u, v) {
      return this.hexagramGeodesic(u, v).geodesicPath;
    }

    /**
     * Projects the 6-Dimensional Boolean Hypercube Q6 onto a 2D plane
     * using perturbed Coxeter projection angles so that all 64 vertices are distinct.
     */
    static getHypercubeProjection(width = 480, height = 360, radius = 135) {
      const centerX = width / 2;
      const centerY = height / 2;
      // Perturbed Coxeter angles: ensures all 64 vertices have distinct 2D coordinates
      const angles = [0, 1, 2, 3, 4, 5].map(k => k * Math.PI / 3 + 0.12 * (k - 2.5));
      const scale = radius / 3.0;

      const nodes = [];
      for (let i = 0; i < 64; i++) {
        const bits = [(i >> 0) & 1, (i >> 1) & 1, (i >> 2) & 1, (i >> 3) & 1, (i >> 4) & 1, (i >> 5) & 1];
        let x = 0;
        let y = 0;
        let hw = 0;
        for (let k = 0; k < 6; k++) {
          const val = 2 * bits[k] - 1; // centered {-1, +1}
          x += val * Math.cos(angles[k]);
          y += val * Math.sin(angles[k]);
          if (bits[k] === 1) hw++;
        }
        nodes.push({
          index: i,
          bits: bits,
          binaryStr: bits.slice().reverse().join(''),
          hammingWeight: hw,
          x: Math.round((centerX + x * scale) * 10) / 10,
          y: Math.round((centerY + y * scale) * 10) / 10
        });
      }

      const edges = [];
      for (let u = 0; u < 64; u++) {
        for (let bit = 0; bit < 6; bit++) {
          const v = u ^ (1 << bit);
          if (u < v) {
            edges.push({ source: u, target: v, bitFlipped: bit });
          }
        }
      }

      return { nodes, edges, width, height, centerX, centerY };
    }

    /**
     * Generates responsive SVG markup representing the 6D Hypercube Q6 with highlighted geodesic path.
     */
    static generateHypercubeSvgMarkup(options = {}) {
      const width = options.width || 480;
      const height = options.height || 360;
      const radius = options.radius || 135;
      const highlightNodes = options.highlightNodes || [];
      const highlightPath = options.highlightPath || [];
      const activeHexIdx = options.activeHexIdx !== undefined ? options.activeHexIdx : -1;
      const activeHexName = options.activeHexName || (options.isEn ? 'Hexagram #56 Lv' : '2026值年·火山旅');
      const natalHexName = options.natalHexName || (options.isEn ? 'Natal Hexagram' : '命基·先天卦');

      const proj = this.getHypercubeProjection(width, height, radius);
      const nodeMap = {};
      proj.nodes.forEach(n => { nodeMap[n.index] = n; });

      const pathEdgeSet = new Set();
      if (highlightPath.length > 1) {
        for (let i = 0; i < highlightPath.length - 1; i++) {
          const u = Math.min(highlightPath[i], highlightPath[i + 1]);
          const v = Math.max(highlightPath[i], highlightPath[i + 1]);
          pathEdgeSet.add(`${u}-${v}`);
        }
      }

      // 6 Incident Decision Branches radiating from activeHexIdx (Degree-6 Neighbors)
      const decisionBranchSet = new Set();
      if (activeHexIdx >= 0 && activeHexIdx < 64) {
        for (let bit = 0; bit < 6; bit++) {
          const neighbor = activeHexIdx ^ (1 << bit);
          const u = Math.min(activeHexIdx, neighbor);
          const v = Math.max(activeHexIdx, neighbor);
          decisionBranchSet.add(`${u}-${v}`);
        }
      }

      const layerColors = ['#6366f1', '#3b82f6', '#06b6d4', '#10b981', '#f59e0b', '#f97316', '#ef4444'];

      let svg = `<svg viewBox="0 0 ${width} ${height}" class="w-full h-auto select-none" xmlns="http://www.w3.org/2000/svg">`;
      svg += `<defs>
        <filter id="glow-q6" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <linearGradient id="lattice-path-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#38bdf8" />
          <stop offset="50%" stop-color="#818cf8" />
          <stop offset="100%" stop-color="#f43f5e" />
        </linearGradient>
      </defs>`;

      // 1. Regular hypercube edges
      proj.edges.forEach(e => {
        const key = `${e.source}-${e.target}`;
        if (!pathEdgeSet.has(key) && !decisionBranchSet.has(key)) {
          const n1 = nodeMap[e.source];
          const n2 = nodeMap[e.target];
          svg += `<line x1="${n1.x}" y1="${n1.y}" x2="${n2.x}" y2="${n2.y}" stroke="#312e81" stroke-opacity="0.22" stroke-width="0.8" />`;
        }
      });

      // 2. 6 Decision branch corridors from active node (Degree-6 mutation neighbors)
      if (decisionBranchSet.size > 0) {
        decisionBranchSet.forEach(key => {
          if (!pathEdgeSet.has(key)) {
            const parts = key.split('-').map(Number);
            const n1 = nodeMap[parts[0]];
            const n2 = nodeMap[parts[1]];
            if (n1 && n2) {
              svg += `<line x1="${n1.x}" y1="${n1.y}" x2="${n2.x}" y2="${n2.y}" stroke="#c084fc" stroke-dasharray="3,3" stroke-width="1.6" stroke-opacity="0.65" />`;
            }
          }
        });
      }

      // 3. Highlighted continuous Lattice Path (格路线条)
      if (highlightPath.length > 1) {
        for (let i = 0; i < highlightPath.length - 1; i++) {
          const n1 = nodeMap[highlightPath[i]];
          const n2 = nodeMap[highlightPath[i + 1]];
          if (n1 && n2) {
            svg += `<line x1="${n1.x}" y1="${n1.y}" x2="${n2.x}" y2="${n2.y}" stroke="#38bdf8" stroke-width="2.8" stroke-linecap="round" filter="url(#glow-q6)" />`;
            const midX = (n1.x + n2.x) / 2;
            const midY = (n1.y + n2.y) / 2;
            svg += `<circle cx="${midX}" cy="${midY}" r="1.8" fill="#e0f2fe" opacity="0.9" />`;
          }
        }
      }

      // 4. Hypercube Nodes
      proj.nodes.forEach(n => {
        const isNatal = highlightNodes[0] === n.index;
        const isAnnual = (activeHexIdx === n.index) || (highlightNodes[1] === n.index);
        const isBoth = isNatal && isAnnual;
        const isPathNode = highlightPath.includes(n.index);
        const pathStepLabel = (options.pathLabels && options.pathLabels[n.index]) || null;
        const col = layerColors[n.hammingWeight] || '#94a3b8';

        if (isBoth) {
          // When natal base and annual hexagram coincide at same vertex
          svg += `<circle cx="${n.x}" cy="${n.y}" r="11" fill="none" stroke="#10b981" stroke-width="2" stroke-dasharray="3,2" opacity="0.9" />`;
          svg += `<circle cx="${n.x}" cy="${n.y}" r="8" fill="none" stroke="#f43f5e" stroke-width="2" opacity="0.85" />`;
          svg += `<circle cx="${n.x}" cy="${n.y}" r="6.5" fill="#f43f5e" stroke="#ffffff" stroke-width="1.8" filter="url(#glow-q6)" />`;
          svg += `<text x="${n.x}" y="${n.y - 13}" fill="#fda4af" font-size="9" font-family="sans-serif" font-weight="bold" text-anchor="middle">${activeHexName}</text>`;
          svg += `<text x="${n.x}" y="${n.y + 20}" fill="#6ee7b7" font-size="8" font-family="sans-serif" font-weight="bold" text-anchor="middle">${natalHexName}（同位起步）</text>`;
        } else if (isAnnual) {
          svg += `<circle cx="${n.x}" cy="${n.y}" r="8" fill="none" stroke="#f43f5e" stroke-width="2" opacity="0.8" />`;
          svg += `<circle cx="${n.x}" cy="${n.y}" r="6.5" fill="#f43f5e" stroke="#ffffff" stroke-width="1.8" filter="url(#glow-q6)" />`;
          svg += `<text x="${n.x}" y="${n.y - 10}" fill="#fda4af" font-size="9" font-family="sans-serif" font-weight="bold" text-anchor="middle">${activeHexName}</text>`;
        } else if (isNatal) {
          svg += `<circle cx="${n.x}" cy="${n.y}" r="6.5" fill="#10b981" stroke="#ffffff" stroke-width="1.5" filter="url(#glow-q6)" />`;
          svg += `<text x="${n.x}" y="${n.y - 9}" fill="#6ee7b7" font-size="8.5" font-family="sans-serif" font-weight="bold" text-anchor="middle">${natalHexName}</text>`;
        } else if (isPathNode) {
          svg += `<circle cx="${n.x}" cy="${n.y}" r="4.8" fill="#38bdf8" stroke="#ffffff" stroke-width="1.2" filter="url(#glow-q6)" />`;
          if (pathStepLabel) {
            svg += `<text x="${n.x}" y="${n.y - 8}" fill="#bae6fd" font-size="7.5" font-family="sans-serif" font-weight="bold" text-anchor="middle">${pathStepLabel}</text>`;
          }
        } else {
          svg += `<circle cx="${n.x}" cy="${n.y}" r="2.8" fill="${col}" opacity="0.75" />`;
        }
      });

      svg += `</svg>`;
      return svg;
    }
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = GroupTheoryCore;
  }
  if (typeof window !== 'undefined') {
    window.GroupTheoryCore = GroupTheoryCore;
  }
  if (typeof global !== 'undefined') {
    global.GroupTheoryCore = GroupTheoryCore;
  }
  if (typeof globalThis !== 'undefined') {
    globalThis.GroupTheoryCore = GroupTheoryCore;
  }
})(typeof globalThis !== 'undefined' ? globalThis : this);
