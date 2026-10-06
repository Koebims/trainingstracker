# Trainings-App

Mini-App zum Tracken von Gym-Fortschritt und Körpergewicht. Läuft im Browser, lässt sich wie eine App auf den Home-Bildschirm legen und speichert **alles nur lokal auf dem Handy** (kein Server, kein Konto).

## Funktionen

- **+** auf der Startseite → neue Übung/Maschine (oder einen Körperwert wie „Körpergewicht“) anlegen. Sie bleibt dauerhaft in der Liste.
- Übung antippen → **+ Satz**: Kilo per Slider oder ±-Buttons wählen, Wiederholungen, optional Notiz. Datum und Uhrzeit werden automatisch gespeichert.
- „Eintragen & nächster Satz“ hält das Fenster offen, damit man mehrere Sätze hintereinander loggen kann.
- Einträge erscheinen untereinander, nach Tagen gruppiert (neuester Tag oben), mit Verlaufskurve, letztem Wert und Bestwert.
- Eintrag antippen → bearbeiten oder löschen. ⋯ oben rechts → Übung umbenennen/löschen bzw. Backup exportieren/importieren.
- Funktioniert offline (Service Worker), Dark Mode automatisch.

## Aufs Handy bringen

1. Im Repo unter **Settings → Pages** bei „Branch“ `main` und `/ (root)` wählen und speichern.
2. Nach ca. 1 Minute ist die App unter `https://koebims.github.io/trainingstracker/` erreichbar.
3. Auf dem Handy öffnen und zum Home-Bildschirm hinzufügen:
   - **iPhone (Safari):** Teilen → „Zum Home-Bildschirm“
   - **Android (Chrome):** ⋮ → „App installieren“ / „Zum Startbildschirm hinzufügen“

## Wichtig zu den Daten

Die Daten liegen im Speicher des Browsers auf dem Gerät. Sie gehen verloren, wenn man die Website-Daten löscht oder das Handy wechselt. Deshalb ab und zu über ⋯ → **Backup exportieren** eine `.json`-Datei sichern (z. B. in iCloud/Google Drive). Auf dem iPhone die App unbedingt über den Home-Bildschirm nutzen – dort werden die Daten nicht automatisch aufgeräumt.

## Technik

Eine einzige `index.html` (HTML/CSS/JS ohne Abhängigkeiten), `manifest.webmanifest`, `sw.js` und Icons. Kein Build-Schritt. Bei Änderungen in `sw.js` die Cache-Version (`training-v1`) hochzählen, damit das Handy die neue Version lädt.
