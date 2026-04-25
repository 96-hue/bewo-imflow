# UI Kit — Stationery (Drucksachen + Mail)

Geschäftsausstattung für BeWo imflow.

## Inhalte
- `Letterhead.jsx` — Briefkopf DIN A4 mit Anschriftenfeld (Adressfenster), Datum, Betreff, Body, Signatur, vollständigem Fußzeilen‑Block (4 Spalten: Adresse / Kontakt / GF / Bank)
- `BusinessCard.jsx` — Visitenkarte 85×55 mm, Vorder- + Rückseite. Vorlagen für Joris Wolf und Simon Zachowski.
- `EmailSignature.jsx` — table‑basierte HTML‑Signatur (mailclient‑sicher: Outlook / Apple Mail / Gmail).

## Druck‑Hinweise
- A4‑Bogen ist exakt auf 794×1123 px (96 dpi) angelegt. Für reale Druckdatei → CMYK‑Export, Beschnitt 3 mm zugeben.
- Visitenkarten: 85×55 mm = 321×208 px. Beschnitt 3 mm zugeben → tatsächliches Druckmaß 91×61 mm.
- Markenfarben sind RGB‑definiert. Empfohlene CMYK‑Werte (Annäherung, vor Druck mit Druckerei kalibrieren):
  - Strom 800 `#1E3F3D` (Petrol/Schiefer) ≈ C84 M55 Y62 K56
  - Paper `#F6F2EC` (Sandstein) ≈ C4 M5 Y10 K0
  - Ufer 600 `#82935F` (Salbei) ≈ C49 M30 Y72 K10
  - Ziegel 600 `#A45A44` (Terracotta) ≈ C24 M68 Y72 K15

## E-Mail-Signatur
- Bewusst schlicht und table‑basiert
- Logomark als kleines Bild (48×48 px) — bei Bedarf als Anhang/CID einbetten oder über Hosting bereitstellen
- Funktioniert auch ohne Bilder (Wortmarke + Trennlinie tragen alleine)
