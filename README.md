# Trainings-App

Mini-App zum Tracken von Gym-Fortschritt und Körpergewicht. Läuft im Browser, lässt sich wie eine App auf den Home-Bildschirm legen und speichert **alles nur lokal auf dem Handy** (kein Server, kein Konto).

## Funktionen

- **+** auf der Startseite → neue Übung/Maschine (oder einen Körperwert wie „Körpergewicht“) anlegen. Sie bleibt dauerhaft in der Liste.
- **Bild pro Übung (optional):** beim Anlegen aus 24 Piktogrammen (Beinpresse, Latzug, Bankdrücken, …) wählen oder ein eigenes Foto der Maschine machen. Beim Tippen des Namens wird ein passendes Bild vorgeschlagen. Später änderbar über ⋯ → „Bild ändern“.
- **Suche** auf der Startseite: filtert die Liste nach Namen (Groß-/Kleinschreibung und Umlaute egal). Kein Treffer → direkt neu anlegen.
- Übung antippen → **+ Satz**: Kilo per Slider oder ±-Buttons wählen, Wiederholungen, optional Notiz. Datum und Uhrzeit werden automatisch gespeichert.
- „Eintragen & nächster Satz“ hält das Fenster offen, damit man mehrere Sätze hintereinander loggen kann.
- Einträge erscheinen untereinander, nach Tagen gruppiert (neuester Tag oben), mit Verlaufskurve, letztem Wert und Bestwert.
- Eintrag antippen → bearbeiten oder löschen. ⋯ oben rechts → Übung umbenennen/löschen bzw. Backup exportieren/importieren.
- Funktioniert offline (Service Worker), Dark Mode automatisch.
- **Für Claude/KI-Assistenten:** ⋯ → „Letzte 30 Tage für Claude (.csv)“ teilt eine CSV-Datei (z. B. direkt in die Claude-App), „Letzte 30 Tage als Text kopieren“ kopiert die Daten samt kurzer Frage zum Einfügen in den Chat.

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

## Android-App (APK)

Statt der Web-App kann man auch eine echte APK installieren. Die Daten liegen dann im Speicher der App und hängen nicht mehr an Chrome („Browserdaten löschen“ betrifft sie nicht). Beim Deinstallieren sind sie aber weg – Backup also trotzdem ab und zu exportieren.

- **Download:** https://github.com/Koebims/trainingstracker/releases/latest/download/trainingstracker.apk (auch klein unten in der Web-App verlinkt)
- Beim ersten Installieren fragt Android, ob Chrome „unbekannte Apps installieren“ darf → erlauben.
- Die APK wird bei jeder Änderung auf `main` automatisch per GitHub Actions gebaut (`.github/workflows/apk.yml`) und unter Releases → „apk“ ersetzt.

**Updates:** Jede APK wird mit einem neuen Debug-Schlüssel signiert. Eine neue Version lässt sich deshalb nicht direkt über die alte installieren. Ablauf: ⋯ → Backup exportieren → alte App deinstallieren → neue APK installieren → ⋯ → Backup importieren.

### Lokal bauen

```bash
npm install
npm run android:sync      # Web-Dateien nach android/ kopieren
cd android && ./gradlew assembleRelease
```
