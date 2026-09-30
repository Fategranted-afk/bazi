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
