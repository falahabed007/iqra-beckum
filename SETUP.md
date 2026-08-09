# Einrichtung

Vier Schritte bis zur fertigen Seite. Schritt 1 dauert eine Minute,
Schritt 2 etwa fünf, Schritt 3 und 4 zusammen eine halbe Stunde plus Wartezeit.

---

## Schritt 1 — Logo und Stammdaten

### 1.1 Logo austauschen

In `assets/logo.png` liegt zurzeit ein grauer Platzhalter mit der Aufschrift
„LOGO — bitte ersetzen". Speichere das echte Vereinslogo (die quadratische
Fassung mit dem Schriftzug „ARABISCH-DEUTSCHER … e.V. BECKUM") unter genau
diesem Namen darüber:

```
C:\dev\iqra-beckum\assets\logo.png
```

Am besten quadratisch und mindestens 512 × 512 Pixel. Sonst ändert sich nichts —
Kopfbereich, Fußbereich und die Vorschau beim Teilen in WhatsApp greifen alle
auf diese eine Datei zu.

### 1.2 Stammdaten eintragen

Alle Vereins- und Kontaktdaten stehen an genau einer Stelle:
**`assets/config.js`**. Diese Datei einmal öffnen und ausfüllen:

| Feld | Was da hinein muss |
|---|---|
| `strasse`, `plzOrt` | Adresse, an der der Unterricht stattfindet |
| `impressum.anschrift` | Anschrift des Vereins |
| `impressum.vertreten` | Vorstand nach § 26 BGB, Vor- und Nachname |
| `impressum.register` | z. B. „Amtsgericht Beckum, VR 1234" |
| `impressum.verantwortlich` | Name und Anschrift der inhaltlich verantwortlichen Person |
| `standDatenschutz` | z. B. „August 2026" |

Alles, was leer bleibt, erscheint auf der Seite als gelb markierter Kasten
**BITTE ERGÄNZEN**. Solange irgendwo noch so ein Kasten steht, darf die Seite
nicht öffentlich erreichbar sein — ein unvollständiges Impressum ist
abmahnfähig.

---

## Schritt 2 — Anmeldungen empfangen (Google-Tabelle + E-Mail)

Am Ende dieses Schritts landet jede Anmeldung automatisch in einer Tabelle,
die sich als Excel-Datei herunterladen lässt, und der Verein bekommt sofort
eine E-Mail.

**Wichtig:** Melde dich vorher bei Google mit dem Konto an, das die Tabelle
besitzen soll — sinnvollerweise `iqraaschulebeckum@gmail.com`, dann liegt
alles beim Verein und nicht bei einer Privatperson.

### 2.1 Tabelle anlegen

1. [sheets.new](https://sheets.new) aufrufen — es entsteht eine leere Tabelle.
2. Oben links einen Namen vergeben, z. B. **Anmeldungen Iqraa-Schule**.

### 2.2 Skript einfügen

3. In der Tabelle: **Erweiterungen → Apps Script**.
4. Den gesamten Inhalt des Editors löschen.
5. Die Datei `apps-script/Code.gs` aus diesem Projekt öffnen, alles
   kopieren und im Editor einfügen.
6. Oben auf das Disketten-Symbol (Speichern) klicken.

### 2.3 Einmal testen

7. Im Editor oben in der Auswahlliste die Funktion **`testAnmeldung`** wählen
   und auf **Ausführen** klicken.
8. Google fragt jetzt nach Berechtigungen: **Zugriff überprüfen** →
   Konto wählen → **Erweitert** → **Zu … (unsicher)** → **Zulassen**.
   Diese Warnung ist normal; das Skript ist nur nicht bei Google registriert.
9. Danach sollte in der Tabelle ein neues Blatt **Anmeldungen** mit einer
   Kopfzeile und einer Testzeile stehen, und im Postfach eine E-Mail
   „Neue Anmeldung: Test Kind" liegen. Die Testzeile anschließend löschen.

### 2.4 Als Web-App veröffentlichen

10. Oben rechts **Bereitstellen → Neue Bereitstellung**.
11. Beim Zahnrad neben „Typ auswählen" **Web-App** wählen.
12. Einstellen:
    - **Ausführen als:** *Ich* (deine Adresse)
    - **Zugriff:** **Jeder** — nicht „Jeder mit Google-Konto", sonst können
      Eltern das Formular nicht absenden
13. **Bereitstellen** klicken und die angezeigte **Web-App-URL** kopieren.
    Sie endet auf `/exec`.

### 2.5 URL eintragen

14. In `assets/config.js` die Zeile

    ```js
    anmeldungEndpoint: "",
    ```

    ersetzen durch die kopierte URL:

    ```js
    anmeldungEndpoint: "https://script.google.com/macros/s/AKfycb.../exec",
    ```

Fertig. Zum Prüfen: die URL im Browser aufrufen — es muss
`{"ok":true,...}` erscheinen.

> **Solange dieses Feld leer ist, funktioniert das Formular trotzdem:**
> Der Absenden-Knopf öffnet dann WhatsApp mit allen eingegebenen Daten als
> fertige Nachricht. Es geht also nie eine Anmeldung verloren, auch wenn
> Schritt 2 noch nicht erledigt ist.

### 2.6 Die Excel-Datei

In der Google-Tabelle: **Datei → Herunterladen → Microsoft Excel (.xlsx)**.
Die Datei enthält alle Anmeldungen mit Zeitstempel und ist immer aktuell —
es ist kein zusätzlicher Export nötig.

### Wenn du das Skript später änderst

Änderungen wirken **nicht** sofort. Nach jeder Änderung:
**Bereitstellen → Bereitstellungen verwalten → Stift-Symbol →
Version: „Neue Version" → Bereitstellen**. Die URL bleibt dabei gleich.

---

## Schritt 3 — Auf GitHub Pages veröffentlichen

```powershell
cd C:\dev\iqra-beckum
git init
git add .
git commit -m "Webseite Iqraa-Schule Beckum"
git branch -M main
```

Dann auf [github.com/new](https://github.com/new) ein Repository namens
`iqra-beckum` anlegen (öffentlich) und verbinden:

```powershell
git remote add origin https://github.com/falahabed007/iqra-beckum.git
git push -u origin main
```

Danach im Repository: **Settings → Pages → Build and deployment →
Source: GitHub Actions**. Der Arbeitsablauf `.github/workflows/deploy.yml`
veröffentlicht ab jetzt bei jedem `git push` auf `main` automatisch.

---

## Schritt 4 — Domain adv-beckum.de verbinden

Die Datei `CNAME` im Projekt enthält bereits `adv-beckum.de`.
Beim Anbieter der Domain müssen noch diese Einträge gesetzt werden:

| Typ | Name | Wert |
|---|---|---|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `falahabed007.github.io` |

Anschließend im Repository unter **Settings → Pages** bei „Custom domain"
`adv-beckum.de` eintragen. Sobald das Zertifikat ausgestellt ist (kann bis
zu einer Stunde dauern), zusätzlich **Enforce HTTPS** ankreuzen.

Stand heute zeigt die Domain noch nirgendwohin — die DNS-Einträge müssen also
in jedem Fall neu angelegt werden.

---

## Vor dem Livegang prüfen

- [ ] Echtes Logo liegt in `assets/logo.png`
- [ ] Kein gelber **BITTE ERGÄNZEN**-Kasten mehr auf der Seite
- [ ] Impressum vollständig (Anschrift, Vorstand, Registereintrag)
- [ ] Eine echte Testanmeldung abgeschickt: E-Mail kam an, Zeile steht in der Tabelle
- [ ] Alle drei Sprachen einmal durchgeklickt
- [ ] Auf dem Handy angesehen
