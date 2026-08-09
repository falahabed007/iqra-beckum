# Iqraa-Schule Beckum — Webseite

Webseite der *Iqraa-Schule für Arabischunterricht* (Arabisch-Deutscher IQRA e.V. Beckum).
Eine Seite, drei Sprachen, Online-Anmeldung.

**Einrichtung Schritt für Schritt: → [SETUP.md](SETUP.md)**

---

## Was drin ist

* **Deutsch, Englisch, Arabisch** über drei Knöpfe im Kopfbereich.
  Arabisch schaltet die ganze Seite auf Rechts-nach-links um.
* **Online-Anmeldung** mit allen Feldern des bisherigen Papierformulars.
  Sie geht per E-Mail an den Verein und landet zugleich in einer Google-Tabelle,
  die sich als Excel-Datei herunterladen lässt.
* **Impressum und Datenschutzerklärung**, ebenfalls dreisprachig.
* Keine Cookies, keine Analysedienste, keine externen Schriften.

## Dateien

```
index.html            Startseite (alles auf einer Seite)
impressum.html        Pflichtangaben
datenschutz.html      Datenschutzerklärung

assets/
  config.js           ► Stammdaten — die einzige Datei zum Ausfüllen
  i18n.js             ► alle Texte in DE / EN / AR
  site.css            Gestaltung
  site.js             Sprachumschaltung, Menü, Formular
  fonts.css           Schriften (lokal, kein Google-Aufruf)
  fonts/              18 Schriftdateien
  logo.png            ► Platzhalter, muss ersetzt werden
  favicon.svg
  anmeldeformular.pdf das bisherige Papierformular zum Ausdrucken

apps-script/Code.gs   Empfänger der Anmeldungen (in Google einfügen)
CNAME                 adv-beckum.de
```

Die drei mit ► markierten Dateien sind die, die man tatsächlich anfasst.

## Lokal ansehen

```powershell
cd C:\dev\iqra-beckum
npx serve .
```

Dann `http://localhost:3000` öffnen.

Die Seite **nicht** per Doppelklick über `file://` öffnen — der Browser
blockiert dann die Anfrage an Google Apps Script, weil sie von keiner
richtigen Adresse kommt. Zum reinen Ansehen des Aussehens reicht es, zum
Testen des Formulars nicht.

## Etwas ändern

| Was | Wo |
|---|---|
| Telefonnummer, Adresse, Impressum | `assets/config.js` |
| Ein Text auf der Seite | `assets/i18n.js` — in allen drei Sprachblöcken |
| Farbe, Abstand, Schriftgröße | `assets/site.css`, ganz oben unter `:root` |
| Ein neuer Abschnitt | `index.html` + neue Schlüssel in `i18n.js` |

Beim Ändern eines Textes in `i18n.js` daran denken, denselben Schlüssel auch
in `en` und `ar` anzupassen. Fehlt eine Übersetzung, zeigt die Seite
stillschweigend die deutsche Fassung an, statt eine Lücke zu lassen.

Der deutsche Text steht zusätzlich direkt im HTML. Das ist nur die
Rückfallebene für den Fall, dass JavaScript nicht läuft — sobald es läuft,
kommen alle Texte aus `i18n.js`. Wer einen deutschen Text ändert, zieht ihn
im HTML am besten mit nach, damit beides zusammenpasst.

## Veröffentlichen

Jeder `git push` auf `main` veröffentlicht die Seite automatisch
(`.github/workflows/deploy.yml`).

```powershell
git add .
git commit -m "Was geändert wurde"
git push
```
