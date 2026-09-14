---
description: Enforce proactive completion reporting, progress visibility, and transparent background worker tracking.
alwaysApply: true
---

# Proactive Completion Notification & Worker Transparency Guardrails

## 1. Proactive Completion Reporting
- **Immediate Push on Completion**: As soon as code changes are executed and verification tests have passed, immediately formulate and present a clear, comprehensive completion report to the user.
- **Do Not Wait in Silence**: Never leave the conversation turn idle without a user-facing update. The user should never have to ask "progress", "progress bar", or "is it done?".
- **Structured Delivery Format**: Every completion notice must clearly summarize:
  1. Exact deliverables completed (with clickable links to modified files and symbols).
  2. Key problems resolved (including before-and-after comparison).
  3. Verification results (test commands run, passing counts, runtime environments).
  4. Next actionable options for the user.

## 2. Background Worker & Subagent Transparency
- **Explicit Role & Task Disclosure**: When subagents or background tasks are running, always provide transparent visibility into:
  - **Who**: Worker type and role.
  - **What**: The specific sub-task or stress-testing phase being handled.
  - **Current State**: Whether the worker is generating code, running test suites, analyzing regressions, or idle.
- **No Mystery Lingering**: If a worker has concluded its assignment or is idle, explicitly state its completed contribution and dismiss/reap it rather than letting it linger unexplained.
