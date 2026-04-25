---
name: bewo-imflow-design
description: Use this skill to generate well-branded interfaces and assets for BeWo imflow — Ambulant Betreutes Wohnen in Köln. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping (Website, Stationery, Slides) as well as production-ready CSS tokens.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out of `assets/` and create static HTML files for the user to view. Always import `colors_and_type.css` and use the existing CSS tokens (`--bw-paper`, `--bw-strom-800`, etc.) instead of inventing new colors.

If working on production code, copy the assets and use the rules in `README.md` to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design (Website-Sektion? Briefkopf? Visitenkarte? Folien für LVR-Termin? Stellenausschreibung?), ask focused questions about audience and tone, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Hard rules
- Markenname **immer** „BeWo imflow“ (B + W groß, „imflow“ klein, ein Leerzeichen).
- Sprache **ausschließlich Deutsch**. Klient:innen werden gesiezt.
- Gendern mit Doppelpunkt: Klient:innen, Mitarbeiter:innen.
- **Keine** Fachbegriffe (FLS, BEI, PerSEH, GBM) auf öffentlichen Materialien.
- **Keine** Emoji, keine Stockfotos mit lachenden Senior:innen, keine pathetischen Floskeln.
- WCAG AA für alle Text-/Hintergrund-Kombinationen.

## Quick reference
- Hauptfarben: Paper `#F6F2EC`, Brand `#1E3F3D` (Petrol), Akzent `#82935F` (Salbei)
- Schriften: Inter (UI/Body), Source Serif 4 (`.h-serif` für editorial Headlines)
- Radien: 2/4/8/12 px, niemals weicher
- Animation: ruhig, 120–240 ms, kein Bouncing
- Icons: Lucide (CDN), 20 px Standard, Stroke 1.5
