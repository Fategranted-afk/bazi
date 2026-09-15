---
description: Enforce sub-pixel safety margins, CSS export isolation, and jsPDF post-generation pruning hooks to prevent spurious blank pages during client-side PDF export.
globs: ["js/**/*.js", "css/**/*.css", "index.html", "*.html", "test_*.py"]
---

# Client-Side PDF Export & Blank-Page Boundary Defense Guardrails

## 1. The Three-Tier Defense Invariant for PDF Generation
Whenever generating single-page or multi-page A4 PDFs via client-side libraries (`html2pdf.js`, `jsPDF`, `html2canvas`):

### Tier 1: Strict CSS Isolation & Sub-Pixel Clamping
- Never export an element with interactive screen styles active (`box-shadow`, `margin-bottom`, or `overflow: visible`).
- For **Single-Page A4 Exports**:
  - Apply an explicit exporting class (e.g., `.exporting-pdf-single`).
  - Clamp dimensions strictly below 297mm: `height: 295.5mm !important; max-height: 296mm !important; min-height: 295.5mm !important;`.
  - Force `overflow: hidden !important;`, `margin: 0 auto !important;`, and `box-shadow: none !important;`.
  - Set `page-break-after: avoid !important; break-after: avoid !important;`.
  - Hide sibling pages in DOM containers via `#container.exporting-pdf-single .page:not(:first-child) { display: none !important; }`.

### Tier 2: Library Option Sanitization
- For single-page generation, explicitly pass `pagebreak: { mode: [] }` to prevent automated spacer injections.
- Maintain `margin: 0` in jsPDF configuration when elements already include internal millimeter padding.

### Tier 3: Mandatory Post-Processing jsPDF Pruning Hook
- Never rely solely on CSS dimension calculations. Always intercept the compiled `jsPDF` instance before saving:
  ```javascript
  html2pdf().set(opt).from(pageEl).toPdf().get('pdf').then((pdf) => {
    if (pdf) {
      const total = (pdf.internal && typeof pdf.internal.getNumberOfPages === 'function')
        ? pdf.internal.getNumberOfPages()
        : (typeof pdf.getNumberOfPages === 'function' ? pdf.getNumberOfPages() : 1);
      // For single-page exports: physically purge any page beyond page 1
      if (total > 1 && typeof pdf.deletePage === 'function') {
        for (let p = total; p > 1; p--) {
          pdf.deletePage(p);
        }
      }
    }
  }).save();
  ```
- In zero-dependency binary compiler fallbacks, strictly slice the input image array: `compileA4PdfFromJpegs([jpegList[0]])`.

## 2. Automated Regression Verification
- All automated test suites (`test_*.py` / headless JS runtimes) must assert:
  1. The presence of `.exporting-pdf-single` with sub-297mm height clamps (`295.5mm`).
  2. The presence of `pdf.deletePage` pruning hook in single-page export logic.
  3. A mock test simulating 2-page generation to verify that the pruning hook intercepts and deletes the second page.
