---
name: historical-mirror-archetypes
description: >-
  Specifications for the 208 historical figures database (Western Jin to Sui Dynasty),
  four-dimensional similarity algorithm, dual strategic columns with auxiliary tactical
  anchors, and card-draw UI modal interactions.
---

# Historical Figures Reference & Soul Mirror System Guide

## 1. 208-Figure Database Distribution (乱世三百年全息画卷)
- **Western Jin (西晋风云 · 32 figures)**: Sima Yan, Sima Zhao, Yang Hu, Lu Kang, Du Yu, Ji Kang...
- **Sixteen Kingdoms (十六国争霸 · 50 figures)**: Liu Yuan, Shi Le, Ran Min, Fu Jian, Wang Meng, Murong Ke...
- **Eastern Jin (东晋衣冠 · 34 figures)**: Sima Rui, Wang Dao, Xie An, Xie Xuan, Xie Daoyun, Tao Yuanming, Wang Xizhi...
- **Southern Dynasties (南朝更迭 · 32 figures)**: Liu Yu, Liu Yilong, Tan Daoji, Xiao Yan, Chen Baxian, Zu Chongzhi...
- **Northern Wei (北魏中兴 · 30 figures)**: Tuoba Gui, Tuoba Tao, Xiaowen Di, Empress Dowager Feng, Cui Hao, Li Chong...
- **Western/Eastern Wei & Zhou-Qi (东西魏与周齐对峙 · 20 figures)**:
  - Western Wei Eight Pillar Generals (西魏八柱国全员): Yuwen Tai, Yuan Xin, Li Hu, Li Bi, Zhao Gui, Yu Jin, Dugu Xin, Houmochen Chong.
  - Northern Qi / Northern Zhou commanders: Gao Huan, Su Chuo, Wei Xiaokuan, Lanling Wang, Hulü Guang.
- **Sui Reunification (隋朝统合 · 10 figures)**: Yang Jian, Dugu Jialuo, Gao Jiong, Yang Su, Han Qinhu, Shi Wansui...

## 2. Four-Dimensional Similarity Resonance Formula
$$\\text{Similarity} = \\text{ElemAffinity}(25\\%) + \\text{PatternTenGods}(35\\%) + \\text{WorkplaceArchetype}(20\\%) + \\text{EnergyTemperament}(20\\%) + \\text{DeterministicHashBias}$$
- Ensures rigorous dynamic matching without hardcoded results or duplicate ties.

## 3. Strategic Dual Columns & Auxiliary Tactical Guidance
Each figure card must present:
1. **Main Strategic Evaluation**:
   - `strengthAdviceZh/En`: Core strategic breakthrough wisdom.
   - `weaknessAdviceZh/En`: Root fatal blindspot and circuit-breaker.
2. **Auxiliary Tactical Guidance (辅助实操要点)**:
   - `auxiliaryStrengthsZh/En`: Array of 2 actionable pillar moves (① ..., ② ...).
   - `auxiliaryWeaknessesZh/En`: Array of 2 rigid redlines (① ..., ② ...).

## 4. Card-Draw UI Modal Interaction Architecture
- **Backdrop**: `position: fixed !important; inset: 0; z-index: 100050; backdrop-filter: blur(10px);`.
- **Card Container**: Centered, `@keyframes historyCardDraw` entry animation, max height `90vh`.
- **Card Body**: `overflow-y: auto;` independent scrollbar.
- **Scroll Lock Invariant**: `document.body.style.overflow = 'hidden'` on open; restored on close, backdrop click, or Escape key.
