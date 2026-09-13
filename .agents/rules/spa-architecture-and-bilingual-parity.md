---
description: Enforce state hoisting, two-stage UI view state machine, and bilingual parity invariants for single-page applications.
globs: ["js/**/*.js", "index.html", "test_*.py"]
---

# SPA Architecture, State Hoisting, and Bilingual Parity Guardrails

## 1. State Hoisting Invariant (No TDZ)
- In client-side SPA architectures, declare all global application state variables (`activeView`, `cachedData`, `activeFilters`, `i18nState`) at the very top of `DOMContentLoaded` or root module scope.
- Never call initialization functions (e.g., `setLanguage()`, `initEventHandlers()`) before all shared state variables have been declared.

## 2. Two-Stage UX Flow & Seamless Transition
- Separate the user flow into two clear stages:
  1. **Stage 1 (Landing Portal)**: High-aesthetic input altar, archetype presets, and live micro-preview cards.
  2. **Stage 2 (Dashboard / Workspace)**: Full multi-view analysis, charts, and deep reports.
- Always provide bi-directional navigation: a persistent header ribbon and return button (`btnReturnToPortal`) so users can modify inputs without losing state.
- Support keyboard shortcuts (e.g., Enter key submission on input fields).

## 3. Strict Bilingual Parity & Automated Verification
- Every user-visible text node in HTML must have a `data-i18n` or `data-i18n-placeholder` attribute.
- Every dynamic DOM insertion must branch conditionally on `currentLang === 'en'`.
- Maintain automated dictionary completeness tests asserting `0` missing keys in both Chinese and English dictionaries.
- Utilize headless DOM simulation (e.g. via `jsc` or Node.js) to assert zero unhandled runtime exceptions across all view switches and input transitions.
