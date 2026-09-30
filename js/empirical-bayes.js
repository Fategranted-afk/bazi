/**
 * 钦天监 · 分层经验贝叶斯收缩引擎 (Phase 7.2: Hierarchical Empirical Bayes Shrinkage Engine)
 *
 * Core Principles:
 * 1. Bounded, Reversible Personalization: Balances user empirical feedback with global canonical baseline.
 * 2. Mathematical Shrinkage: theta_hat = (1 - B) * y_user + B * mu_global
 *    where B = sigma_user^2 / (sigma_user^2 + tau_prior^2).
 * 3. Cold Start Anchor: When N < 20, shrinkage B >= 0.90 to strictly prevent overfitting on small samples.
 * 4. Transparent Audit Trail: Every parameter calibration records timestamp, sample count, and rationale.
 * 5. Instant Reversibility (Factory Reset): Single-click purge restoring 100% classical baseline with zero latency.
 * 6. Metaphysical Isolation: NEVER mutates natal chart pillars, Day Master vigor, or True Solar Time MAP.
 *
 * 100% Offline-First, deterministic, bilingual (zh/en), zero CJK leakage in English mode.
 */

(function (global) {
  'use strict';

  class EmpiricalBayesEngine {
    static STORAGE_KEY = 'agy_empirical_bayes_state_v1';
    static PRIOR_VARIANCE_TAU2 = 0.25; // Population prior variance tau^2
    static SAMPLE_MIN_THRESHOLD = 20;   // Threshold before relaxing shrinkage
    static MATURE_SAMPLE_COUNT = 100;   // Sample size considered mature

    // Classical baseline weights (mu_global) for strategic orientation
    static GLOBAL_PRIORS = {
      offensive: 0.25,  // 七杀/偏财 攻伐开拓
      defensive: 0.25,  // 正印/比肩 守正蓄力
      wisdom: 0.25,     // 食伤/偏印 智谋破局
      pragmatic: 0.25   // 正官/正财 规范守约
    };

    static isStorageAvailable() {
      try {
        if (typeof window !== 'undefined' && window.localStorage) {
          const testKey = '__eb_storage_test__';
          window.localStorage.setItem(testKey, testKey);
          window.localStorage.removeItem(testKey);
          return true;
        }
      } catch (e) {}
      return false;
    }

    static getState() {
      if (this.isStorageAvailable()) {
        try {
          const raw = window.localStorage.getItem(this.STORAGE_KEY);
          if (raw) {
            const parsed = JSON.parse(raw);
            if (parsed && typeof parsed === 'object') return parsed;
          }
        } catch (e) {}
      }
      if (!this._memoryState) {
        this._memoryState = this.getDefaultState();
      }
      return this._memoryState;
    }

    static getDefaultState() {
      return {
        sampleCount: 0,
        empiricalSums: { offensive: 0, defensive: 0, wisdom: 0, pragmatic: 0 },
        empiricalSquares: { offensive: 0, defensive: 0, wisdom: 0, pragmatic: 0 },
        currentWeights: { ...this.GLOBAL_PRIORS },
        auditLog: [],
        lastResetAt: null
      };
    }

    static saveState(state) {
      this._memoryState = state;
      if (this.isStorageAvailable()) {
        try {
          window.localStorage.setItem(this.STORAGE_KEY, JSON.stringify(state));
        } catch (e) {}
      }
      return state;
    }

    /**
     * Compute Shrinkage Factor B_i for a given category.
     * B = sigma^2 / (sigma^2 + tau^2)
     */
    static computeShrinkageFactor(n, sampleVar) {
      if (n <= 0) return 1.0;
      // Sampling variance of the mean: sigma_n^2 = s^2 / n
      const effectiveSampleVar = Math.max(sampleVar, 0.05);
      const sigmaN2 = effectiveSampleVar / n;
      const B = sigmaN2 / (sigmaN2 + this.PRIOR_VARIANCE_TAU2);

      // Cold start protection: if n < 20, enforce at least 0.90 shrinkage to baseline
      if (n < this.SAMPLE_MIN_THRESHOLD) {
        return Math.max(B, 0.90);
      }
      // Absolute floor: never overfit below 0.20 even at huge N
      return Math.max(Math.min(B, 0.95), 0.20);
    }

    /**
     * Convenient wrapper for feedback recording
     */
    static recordFeedback(params = {}) {
      const act = String(params.action || params.category || 'offensive').toLowerCase();
      const mapped = this.GLOBAL_PRIORS[act] ? act : 'offensive';
      const val = params.outcome === 'positive' ? 1.0 : (params.outcome === 'negative' ? 0.0 : (Number(params.value) || 0.8));
      return this.recordObservation(mapped, val, params.notes || '');
    }

    /**
     * Ingest a user feedback observation for a strategic category.
     * feedbackValue: positive outcome score between 0.0 and 1.0
     */
    static recordObservation(category, feedbackValue, contextNotes = '') {
      if (!this.GLOBAL_PRIORS[category]) return null;
      const state = this.getState();
      const val = Math.max(0.0, Math.min(1.0, Number(feedbackValue) || 0.5));

      state.sampleCount += 1;
      state.empiricalSums[category] = (state.empiricalSums[category] || 0) + val;
      state.empiricalSquares[category] = (state.empiricalSquares[category] || 0) + (val * val);

      // Re-estimate parameters across all categories
      const newWeights = {};
      const shrinkageReport = {};

      const categories = Object.keys(this.GLOBAL_PRIORS);
      let rawSum = 0;

      categories.forEach(cat => {
        const muGlobal = this.GLOBAL_PRIORS[cat];
        const nCat = Math.max(1, Math.round(state.sampleCount / categories.length));
        const sumVal = state.empiricalSums[cat] || (muGlobal * nCat);
        const yMean = sumVal / nCat;

        // Sample variance estimate
        const sumSq = state.empiricalSquares[cat] || (muGlobal * muGlobal * nCat);
        const sampleVar = Math.max(0.01, (sumSq / nCat) - (yMean * yMean));

        const B = this.computeShrinkageFactor(state.sampleCount, sampleVar);
        const thetaHat = (1.0 - B) * yMean + B * muGlobal;

        newWeights[cat] = Math.max(0.05, thetaHat);
        rawSum += newWeights[cat];
        shrinkageReport[cat] = {
          sampleMean: Number(yMean.toFixed(3)),
          shrinkageFactorB: Number(B.toFixed(3)),
          posteriorWeight: Number(thetaHat.toFixed(3))
        };
      });

      // Normalize weights so sum equals 1.0
      if (rawSum > 0) {
        categories.forEach(cat => {
          newWeights[cat] = Number((newWeights[cat] / rawSum).toFixed(4));
        });
      }

      state.currentWeights = newWeights;

      // Append audit entry
      state.auditLog.unshift({
        timestamp: new Date().toISOString(),
        observationCategory: category,
        feedbackValue: val,
        totalSamples: state.sampleCount,
        contextNotes,
        updatedWeights: { ...newWeights }
      });

      if (state.auditLog.length > 50) state.auditLog.length = 50;

      this.saveState(state);
      return {
        sampleCount: state.sampleCount,
        currentWeights: newWeights,
        shrinkageReport
      };
    }

    /**
     * Single-click factory reset: purges all empirical adjustments back to 100% canonical baseline.
     */
    static factoryReset() {
      const def = this.getDefaultState();
      def.lastResetAt = new Date().toISOString();
      this.saveState(def);
      return def;
    }

    /**
     * Returns human-readable summary of current shrinkage status and distance from baseline.
     */
    static getPersonalizationProfile(isEn = false) {
      const state = this.getState();
      const n = state.sampleCount;
      const weights = state.currentWeights;

      const deviations = {};
      let maxDev = 0;
      Object.keys(this.GLOBAL_PRIORS).forEach(cat => {
        const diff = weights[cat] - this.GLOBAL_PRIORS[cat];
        deviations[cat] = Number(diff.toFixed(3));
        if (Math.abs(diff) > maxDev) maxDev = Math.abs(diff);
      });

      const isColdStart = (n < this.SAMPLE_MIN_THRESHOLD);
      const stageLabel = isColdStart
        ? (isEn ? 'Anchored Baseline (Cold Start, N < 20)' : '稳健基线依附期 (样本 N < 20, 强收缩保护)')
        : (n < this.MATURE_SAMPLE_COUNT
          ? (isEn ? 'Intermediate Empirical Tuning' : '平滑收缩个性化期 (稳健自适应中)')
          : (isEn ? 'Mature Personalized Equilibrium' : '高置信成熟期 (深度个性化均衡)'));

      return {
        sampleCount: n,
        isColdStart,
        stageLabel,
        currentWeights: weights,
        baselineWeights: { ...this.GLOBAL_PRIORS },
        deviations,
        maxDeviation: Number(maxDev.toFixed(3)),
        lastResetAt: state.lastResetAt,
        auditLogRecent: state.auditLog.slice(0, 5)
      };
    }

    static resetToFactoryBaseline() {
      return this.factoryReset();
    }

    static getAuditSnapshot(lang = 'zh') {
      const isEn = (lang === 'en');
      const profile = this.getPersonalizationProfile(isEn);
      return {
        totalObservations: profile.sampleCount,
        shrinkageFactor: profile.sampleCount === 0 ? 1.0 : (profile.isColdStart ? 0.95 : Math.max(0.2, 1.0 - profile.sampleCount * 0.015)),
        coldStartActive: profile.isColdStart,
        stageLabel: profile.stageLabel,
        currentWeights: profile.currentWeights,
        baselineWeights: profile.baselineWeights
      };
    }
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = EmpiricalBayesEngine;
  }
  if (typeof window !== 'undefined') {
    window.EmpiricalBayesEngine = EmpiricalBayesEngine;
  }
  if (typeof global !== 'undefined') {
    global.EmpiricalBayesEngine = EmpiricalBayesEngine;
  }
  if (typeof globalThis !== 'undefined') {
    globalThis.EmpiricalBayesEngine = EmpiricalBayesEngine;
  }
})(typeof globalThis !== 'undefined' ? globalThis : this);
