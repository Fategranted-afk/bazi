# 🏛️ BaZi Metaphysics & Zhou Yi Platform (八字命理与周易天纪决策平台)

An enterprise-grade, comprehensive metaphysical decision and life-strategy analytics platform. Combining classical Four Pillars of Destiny (*BaZi* / 四柱八字), authentic *Zhou Yi* 64 Hexagrams (*Ni Haisha Tian Ji* / 倪海厦天纪), classical statecraft canons, modern game theory, and psychological phase-space dynamics.

[![Test Suite](https://img.shields.io/badge/Verification%20Tests-141%20Passed-brightgreen)](test_bazi.py)
[![Historical Figures](https://img.shields.io/badge/Historical%20Figures-549%20Profiles-blue)](data/historical_figures.js)
[![Canons Integrated](https://img.shields.io/badge/Classical%20Canons-13%20Texts-gold)](data/)
[![Bilingual](https://img.shields.io/badge/i18n-English%20%7C%20%E4%B8%AD%E6%96%87-purple)](js/i18n.js)

---

## 📖 Table of Contents
- [Core Features](#-core-features)
- [Mathematical & Simulation Engines](#-mathematical--simulation-engines)
- [Historical Personalities Database (549 Figures)](#-historical-personalities-database-549-figures)
- [Imperial Dossier & Export Systems](#-imperial-dossier--export-systems)
- [Quick Start](#-quick-start)
- [Testing & Quality Assurance](#-testing--quality-assurance)
- [Changelog & Development History](#-changelog--development-history)

---

## ⚡ Core Features

1. **High-Precision BaZi Engine**:
   - Computes Four Pillars (Year, Month, Day, Hour) calibrated with local True Solar Time (真太阳时).
   - Evaluates Day Master vitality (身强身弱), Ten Gods (十神) balance, dynamic structural patterns, and favorable/unfavorable elements (喜用神/忌神).
   - Incorporates the **80/20 Pareto Decision Matrix** to pinpoint high-leverage actions and life taboos.

2. **Lifelong Chrono-Navigator & 100-Year Hexagram Trajectory**:
   - Interactive decennial luck pillars (大运) and annual transits (流年) scaled to birth year.
   - 64 Hexagrams cycle derived from authentic Ni Haisha *Tian Ji* teachings with yearly action directives.
   - Comprehensive mapping of the **Four Great Auspicious Deities** (*Tian Yi*, *Tian De*, *Yue De*, *Wen Chang*) and Malefic Stars (*Sui Po*, *Bai Hu*, *Qi Sha*, etc.).

3. **Master Profile Dashboard (主画像看板)**:
   - Unified executive control center integrating primary dominant patterns, five-pillar transits, and strategic navigation anchors.

4. **Deep Dual Synastry (双人合盘)**:
   - Compares structural archetypes between two natal charts.
   - Decennial trajectory overlap correlation, 5D core value spectrum comparison, and independent exportable 2-page PDF report.

5. **Conversational Military Advisor (随身军师)**:
   - Interactive, context-aware consulting agent providing direct vernacular verdicts across career, wealth, emotional friction, and timing.

---

## 🔬 Mathematical & Simulation Engines

* **Dynamic Phase Portrait Engine (`js/phase_portrait.js`)**: Models psychological friction versus vigor in a non-linear double-well potential manifold $(x, v)$.
* **Political Game Matrix (`js/game_matrix.js`)**: Simulates 3- to 5-party organizational power dynamics blending Ten Gods directed graphs with *Rong Ku Jian* (荣枯鉴) statecraft.
* **NOAA Geomagnetic Correction Engine (`js/geomagnetism.js`)**: World Magnetic Model (WMM) bilinear spatial interpolation for True North alignment and 24 Mountains spatial Feng Shui.
* **Dynamic Calendar Feed (`js/feed_engine.js`)**: Exports yearly key inflection dates into RFC 5545 compliant `.ics` / webcal calendar feeds.
* **Sensitivity & Bayesian Rectification (`js/sensitivity-engine.js`, `js/rectification-engine.js`)**: 31-point discrete boundary analysis and 13-shichen MAP estimation for birth time rectification.

---

## 📜 Historical Personalities Database (549 Figures)

A meticulously curated database of **549 historical personalities**:
* **449 Classical Eastern Figures**: Spanning Eastern Han, Three Kingdoms, Western/Eastern Jin, Sixteen Kingdoms, Northern & Southern Dynasties, Western/Northern Zhou, Sui Dynasty, and early Tang Dynasty.
* **100 Modern Western Pioneers (1800–1945)**: Spanning Science, Philosophy, Literature, Statecraft, Military Strategy, and Industry (e.g., Napoleon, Lincoln, Darwin, Curie, Einstein, Churchill, Roosevelt, Tesla, Lovelace, Oppenheimer).
* **Soul Mirror Resonance**: Weighted BaZi similarity algorithm calculating the user's top #1 soul mirror along with comparative virtues, blind spots, and risk-avoidance directives for #2 and #3 matches.

---

## 📜 Imperial Dossier & Export Systems

* **9-Page Imperial Dossier (钦天监皇家九卷御览)**: Line-bound royal court aesthetics, antique paper texture, dedicated Table of Contents, vector trajectories, and official "钦天御批" red seal.
* **Social Identity Card (名士御容名片)**: Five-element face morphology portraits (五形相法工笔肖像) and personalized strategic badges.
* **Quick Single-Page Dossier**: Fast, isolated PDF summary of core chart diagnostics.

---

## 🚀 Quick Start

### Running Locally
The platform is built with pure, high-performance vanilla JavaScript, CSS, and HTML with no heavy build tools required.

```bash
# Clone the repository
git clone https://github.com/Fategranted-afk/bazi.git
cd bazi

# Start a local web server (Python 3)
python3 -m http.server 8000
```
Open your browser and navigate to `http://localhost:8000`.

---

## 🧪 Testing & Quality Assurance

All features, data schemas, bilingual translations, and visual rendering integrity are verified through a comprehensive test suite:

```bash
python3 test_bazi.py
```
* **Current status**: 141 / 141 tests passing with 100% zero Chinese residue in English mode.

---

## 📋 Changelog & Development History

For a complete record of architectural phases, feature rollouts, and historical milestones, see [CHANGELOG.md](CHANGELOG.md).
