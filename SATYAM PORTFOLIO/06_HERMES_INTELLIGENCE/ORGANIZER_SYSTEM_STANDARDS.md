# FOLDER ORGANIZER & WORKSPACE SYSTEM STANDARDS

> **Workspace Architectural Pattern:** Satyam Singh Rajput OS  
> **Source Disciplines:** `academic-coursework-organizer`, `CLAUDE.md`, `C3ALABS-ENGINE`, Apple Design Guidelines  

---

## 1. DIRECTORY NAMING & HIERARCHY RULES

1. **Numbered Uppercase Top-Level Directories:**
   - Enforce finder sort order and eliminate mental scanning friction:
     - `00_WEBSITE/` (or `00 CURRICULUM & TIMETABLE/`)
     - `01_RESUME/` (or `01 SOFTWARE PROJECT MANAGEMENT/`)
     - `02_MARKSHEETS_EDUCATION/`
     - `03_PROJECTS/`
     - `04_RESEARCH/`
     - `05_INTERNAL_OS/`
     - `06_HERMES_INTELLIGENCE/`
     - `07_ACADEMICS_SEM_VII/`
     - `90_ARCHIVE/`
2. **Subfolder Naming:**
   - Standardized uppercase for internal subfolders: `NOTES & DECKS/`, `LAB WORK/`, `EXAM PAPERS/`, `SYLLABUS/`, `PUBLIC/`, `WORKING FILES/`.
3. **No Root Clutter:**
   - Scratch files, intermediary script dumps, and slide renders belong in `WORKING FILES/` or `00 DUMP HERE/`. Never leave loose scripts or temp files in root directories.
4. **Drop Zone Pattern (`00 DUMP HERE`):**
   - Provides a frictionless intake inbox for raw scans, photos, WhatsApp notes, and PDFs.
   - Scripts index, OCR, classify, and file items automatically into their respective permanent homes.

---

## 2. DELIVERABLE OUTPUT LOCATION

- **Universal Central Rule:** All final deliverables across all workflows (PDF reports, academic guides, company dossiers, export bundles) MUST be written to:
  ```text
  /Users/satyyy/Desktop/PORTFOLIO/OUTPUT/
  ```
- This ensures a single verified pickup point for downloads, telegram delivery, or client transmittal.

---

## 3. PEDAGOGICAL & STUDY GUIDE STANDARDS

### The 4-Step Explanation Framework
Whenever explaining technical concepts or breaking down architectural layers:
1. **WHY THIS EXISTS:** The exact friction, failure mode, or cost that necessitated this tool or concept.
2. **WHERE IT GETS USED:** Concrete enterprise, mission-critical, or high-stakes systems (e.g. satellite telemetry, hospital ICU databases, Pixar rendering pipelines, luxury automotive CAN bus). *Strict prohibition on generic placeholders like Netflix or Amazon.*
3. **HOW IT GETS USED:** Sequential, practical breakdown in plain English (11-year-old comprehension level).
4. **REAL-LIFE ANALOGY / STORY:** Intuitive mental model (e.g. toll booths, safe deposit boxes, assembly lines).

### Apple Swiss Document & PDF Design System
- **Palette:**
  - Dark Headers: Space Black `#1D1D1F`
  - Accent Color: Apple System Blue `#0071E3`
  - Alternating Table Rows: Light Surface `#F5F5F7`
  - Hairline Separators: Platinum `#E5E5EA`
  - Typography: SF Pro Text / Display, Helvetica Neue, Arial
- **Structural Integrity:**
  - Explicit P1 (Must Master) / P2 (Core Concepts) / P3 (Quick Review) prioritization.
  - Weight-mapped answers: 2-mark (definition + bullet), 5-mark (steps + table), 10-mark (in-depth system breakdown + SVG diagram).
  - Standalone SVG diagrams rendered to high-resolution PNG before embedding.
