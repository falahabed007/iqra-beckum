/**
 * ===========================================================================
 * Iqraa-Schule Beckum — Empfaenger fuer das Anmeldeformular
 * ===========================================================================
 *
 * Was dieses Skript tut, sobald jemand auf der Webseite "Anmeldung absenden"
 * drueckt:
 *
 *   1. es prueft die Angaben noch einmal (auch der Browser prueft schon,
 *      aber darauf allein darf man sich nie verlassen)
 *   2. es haengt die Anmeldung als neue Zeile an das Tabellenblatt
 *      "Anmeldungen" an  ->  daraus wird spaeter die Excel-Datei
 *   3. es schickt eine E-Mail an den Verein
 *   4. es schickt, falls die Eltern eine E-Mail-Adresse angegeben haben,
 *      eine kurze Bestaetigung in DEREN Sprache
 *
 * EINRICHTEN: siehe SETUP.md im Projektordner, Schritt 2.
 * Kurzfassung: Google-Tabelle anlegen -> Erweiterungen -> Apps Script ->
 * diesen Code einfuegen -> Bereitstellen als Web-App
 * ("Ausfuehren als: ich", "Zugriff: Jeder") -> die /exec-URL kopieren und
 * in assets/config.js bei anmeldungEndpoint eintragen.
 * ===========================================================================
 */


/* --------------------------------------------------------------------------
   Einstellungen
   -------------------------------------------------------------------------- */

/** An diese Adresse geht die Benachrichtigung ueber neue Anmeldungen. */
var EMPFAENGER = 'iqraaschulebeckum@gmail.com';

/** Name des Tabellenblatts. Wird angelegt, falls es noch nicht existiert. */
var BLATT_NAME = 'Anmeldungen';

/**
 * Nur noetig, wenn das Skript NICHT direkt in der Tabelle liegt
 * (also nicht ueber "Erweiterungen -> Apps Script" angelegt wurde).
 * Dann hier die ID aus der Tabellen-URL eintragen, sonst leer lassen.
 */
var TABELLEN_ID = '';

/** So heisst die Schule in der Betreffzeile. */
var ABSENDER_NAME = 'Iqraa-Schule Beckum';

/** Mindestzeit in Sekunden zwischen Oeffnen und Absenden des Formulars. */
var MINDESTDAUER = 3;

/** Hoechstlaenge der Muensterlandkarten-Nummer. Muss zum Feld
 *  maxlength="12" in index.html passen. */
var MAX_KARTENNUMMER = 12;

/** Die Gruppen der Iqraa-Schule, fuer Tabelle und E-Mail ausgeschrieben. */
var GRUPPEN = {
  '1': 'Gruppe 1 — Frau Janan',
  '2': 'Gruppe 2 — Frau Dua',
  '3': 'Gruppe 3 — Herr Yaser',
  '4': 'Gruppe 4 — Dr. Feras Hasan'
};

/**
 * Nur lateinische Schrift. Erlaubt sind die lateinischen Unicode-Bloecke -
 * also auch Umlaute und Akzente -, dazu Ziffern, Satz- und Leerzeichen.
 * Muss zur gleichnamigen Pruefung in assets/site.js passen; auf die
 * Pruefung im Browser allein darf man sich nie verlassen.
 */
var NICHT_LATEIN = /[^\s\u0020-\u024F\u1E00-\u1EFF\u2010-\u2027]/;

/** Die Felder, die von Hand getippt werden und deshalb geprueft werden. */
var LATEIN_FELDER = ['kindVorname', 'kindNachname', 'elternVorname',
                     'elternNachname', 'allergien', 'kartennummer'];

var SPALTEN = [
  'Eingegangen am',
  'Kind Vorname',
  'Kind Nachname',
  'Geburtsdatum',
  'Schon dagewesen',
  'Gruppe',
  'Elternteil Vorname',
  'Elternteil Nachname',
  'Telefon',
  'WhatsApp',
  'E-Mail',
  'Zahlungsweise',
  'Kartennummer',
  'Allergien',
  'Fotos erlaubt',
  'Sprache'
];


/* --------------------------------------------------------------------------
   Einstiegspunkte
   -------------------------------------------------------------------------- */

/**
 * Zum Testen: die /exec-URL einfach im Browser aufrufen.
 * Kommt {"ok":true,...} zurueck, ist die Veroeffentlichung korrekt.
 */
function doGet() {
  return antwort({
    ok: true,
    dienst: 'Anmeldung Iqraa-Schule',
    hinweis: 'Das Skript laeuft. Anmeldungen werden per POST entgegengenommen.'
  });
}


/**
 * Nimmt die Anmeldung von der Webseite entgegen.
 *
 * Die Webseite schickt bewusst Content-Type "text/plain". Damit gilt die
 * Anfrage im Browser als einfache Anfrage, es gibt keinen Preflight, und
 * die Antwort kommt ohne CORS-Fehler zurueck. Der Inhalt ist trotzdem JSON
 * und wird hier von Hand geparst.
 */
function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return antwort({ ok: false, fehler: 'Keine Daten empfangen.' });
    }

    var d = JSON.parse(e.postData.contents);

    // --- Spamschutz ---------------------------------------------------
    // Das Feld "hp" ist auf der Webseite unsichtbar. Fuellt es jemand aus,
    // war es kein Mensch. Wir antworten trotzdem freundlich, damit ein
    // Bot nicht merkt, dass er erkannt wurde - speichern aber nichts.
    if (d.hp) return antwort({ ok: true });
    if (typeof d.dauer === 'number' && d.dauer < MINDESTDAUER) {
      return antwort({ ok: true });
    }

    // --- Pflichtangaben ----------------------------------------------
    var pflicht = ['kindVorname', 'kindNachname', 'kindGeburtsdatum',
                   'elternVorname', 'elternNachname', 'telefon', 'whatsapp',
                   'ehemalig', 'zahlung', 'hatAllergien', 'fotos'];
    for (var i = 0; i < pflicht.length; i++) {
      if (!String(d[pflicht[i]] || '').trim()) {
        return antwort({ ok: false, fehler: 'Feld fehlt: ' + pflicht[i] });
      }
    }

    // Schrift: was von Hand getippt wurde, muss lateinisch sein.
    for (var k = 0; k < LATEIN_FELDER.length; k++) {
      var inhalt = String(d[LATEIN_FELDER[k]] || '');
      if (inhalt && NICHT_LATEIN.test(inhalt)) {
        return antwort({ ok: false, fehler: 'Nicht lateinisch: ' + LATEIN_FELDER[k] });
      }
    }

    // Wer ueber die Muensterlandkarte zahlt, muss die Kartennummer angeben -
    // ohne sie laesst sich die Teilnahme spaeter nicht abrechnen.
    if (d.zahlung === 'muensterlandkarte') {
      if (!kartennummer(d)) {
        return antwort({ ok: false, fehler: 'Feld fehlt: kartennummer' });
      }
      if (String(d.kartennummer).trim().length > MAX_KARTENNUMMER) {
        return antwort({ ok: false, fehler: 'Kartennummer ist zu lang.' });
      }
    }

    // Ehemalige Schueler gehoeren einer der bekannten Gruppen an.
    if (d.ehemalig === 'ja' && !gruppenText(d)) {
      return antwort({ ok: false, fehler: 'Feld fehlt: gruppe' });
    }

    // Bei "ja" wollen wir auch wissen, wogegen.
    if (d.hatAllergien === 'ja' && !allergietext(d)) {
      return antwort({ ok: false, fehler: 'Feld fehlt: allergien' });
    }

    var sprache = ['de', 'en', 'ar'].indexOf(d.sprache) > -1 ? d.sprache : 'de';

    // --- In die Tabelle schreiben -------------------------------------
    // Die Sperre verhindert, dass zwei gleichzeitige Anmeldungen in
    // dieselbe Zeile schreiben.
    var sperre = LockService.getScriptLock();
    sperre.waitLock(20000);
    try {
      inTabelleSchreiben(d, sprache);
    } finally {
      sperre.releaseLock();
    }

    // --- Benachrichtigungen -------------------------------------------
    // Falls der Mailversand scheitert (z.B. Tageskontingent erschoepft),
    // ist die Anmeldung trotzdem schon in der Tabelle. Deshalb faengt
    // jeder Versand seinen Fehler einzeln ab.
    versucheStill(function () { mailAnVerein(d, sprache); });
    if (String(d.email || '').trim()) {
      versucheStill(function () { mailAnEltern(d, sprache); });
    }

    return antwort({ ok: true });

  } catch (fehler) {
    return antwort({ ok: false, fehler: String(fehler) });
  }
}


/* --------------------------------------------------------------------------
   Tabelle
   -------------------------------------------------------------------------- */

function tabelle() {
  return TABELLEN_ID ? SpreadsheetApp.openById(TABELLEN_ID)
                     : SpreadsheetApp.getActiveSpreadsheet();
}

function blatt() {
  var datei = tabelle();
  var b = datei.getSheetByName(BLATT_NAME);

  if (!b) {
    b = datei.insertSheet(BLATT_NAME);
  }
  if (b.getLastRow() === 0) {
    b.appendRow(SPALTEN);
    kopfzeileFormatieren(b);
    b.setFrozenRows(1);
    b.setColumnWidth(1, 140);   // Eingegangen am
    b.setColumnWidth(6, 190);   // Gruppe
    b.setColumnWidth(14, 260);  // Allergien
  } else {
    spaltenAngleichen(b);
  }
  return b;
}


function kopfzeileFormatieren(b) {
  var kopf = b.getRange(1, 1, 1, SPALTEN.length);
  kopf.setFontWeight('bold');
  kopf.setBackground('#1B6B4F');
  kopf.setFontColor('#FFFFFF');
}


/**
 * Bringt eine Tabelle, die nach einem aelteren Aufbau angelegt wurde, auf den
 * heutigen Stand. Neue Spalten werden an der richtigen Stelle EINGEFUEGT statt
 * hinten angehaengt - sonst wuerden die schon vorhandenen Zeilen gegenueber der
 * Kopfzeile verrutschen und die alten Anmeldungen waeren unlesbar.
 */
function spaltenAngleichen(b) {
  var vorhanden = b.getRange(1, 1, 1, b.getLastColumn()).getValues()[0]
                   .map(function (w) { return String(w).trim(); });

  // Ein voellig fremder Aufbau wird nicht angefasst.
  if (vorhanden.indexOf(SPALTEN[0]) < 0) return;

  var geaendert = false;

  for (var i = 0; i < SPALTEN.length; i++) {
    if (vorhanden.indexOf(SPALTEN[i]) > -1) continue;

    // Hinter welche bereits vorhandene Spalte gehoert die neue?
    var davor = -1;
    for (var j = i - 1; j >= 0; j--) {
      davor = vorhanden.indexOf(SPALTEN[j]);
      if (davor > -1) break;
    }

    if (davor < 0) {
      b.insertColumnBefore(1);
      b.getRange(1, 1).setValue(SPALTEN[i]);
      vorhanden.splice(0, 0, SPALTEN[i]);
    } else {
      b.insertColumnAfter(davor + 1);
      b.getRange(1, davor + 2).setValue(SPALTEN[i]);
      vorhanden.splice(davor + 1, 0, SPALTEN[i]);
    }
    geaendert = true;
  }

  if (geaendert) kopfzeileFormatieren(b);
}


function inTabelleSchreiben(d, sprache) {
  var b = blatt();

  b.appendRow([
    new Date(),
    d.kindVorname,
    d.kindNachname,
    alsDatum(d.kindGeburtsdatum),
    d.ehemalig === 'ja' ? 'ja' : 'nein',
    gruppenText(d),
    d.elternVorname,
    d.elternNachname,
    "'" + String(d.telefon).trim(),   // Hochkomma: Sheets soll die
    "'" + String(d.whatsapp).trim(),  // fuehrende Null nicht wegwerfen
    d.email || '',
    zahlungText(d.zahlung, 'de'),
    // Hochkomma: eine Kartennummer mit fuehrender Null bleibt so erhalten
    kartennummer(d) ? "'" + kartennummer(d) : '',
    allergietext(d),
    d.fotos === 'ja' ? 'ja' : 'nein',
    sprache
  ]);

  var zeile = b.getLastRow();
  b.getRange(zeile, 1).setNumberFormat('dd.mm.yyyy hh:mm');
  b.getRange(zeile, 4).setNumberFormat('dd.mm.yyyy');
}


/** "2018-03-12" aus dem Datumsfeld des Browsers wird ein echtes Datum. */
function alsDatum(wert) {
  var teile = String(wert).match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!teile) return wert;
  return new Date(Number(teile[1]), Number(teile[2]) - 1, Number(teile[3]));
}


/* --------------------------------------------------------------------------
   E-Mails
   -------------------------------------------------------------------------- */

function mailAnVerein(d, sprache) {
  var name = d.kindVorname + ' ' + d.kindNachname;

  var zeilen = [
    ['Kind', name],
    ['Geburtsdatum', datumLesbar(d.kindGeburtsdatum)],
    ['Schon dagewesen', d.ehemalig === 'ja' ? 'ja' : 'nein']
  ];

  if (gruppenText(d)) zeilen.push(['Bisherige Gruppe', gruppenText(d)]);

  zeilen = zeilen.concat([
    ['Elternteil', d.elternVorname + ' ' + d.elternNachname],
    ['Telefon', d.telefon],
    ['WhatsApp', d.whatsapp],
    ['E-Mail', d.email || '—'],
    ['Zahlung', zahlungText(d.zahlung, 'de')]
  ]);

  // Eine Nummer gibt es nur bei Zahlung ueber die Muensterlandkarte.
  if (kartennummer(d)) zeilen.push(['Kartennummer', kartennummer(d)]);

  zeilen.push(['Allergien', allergietext(d) || 'keine']);

  zeilen.push(
    ['Fotos erlaubt', d.fotos === 'ja' ? 'ja' : 'NEIN'],
    ['Sprache des Formulars', { de: 'Deutsch', en: 'Englisch', ar: 'Arabisch' }[sprache]]
  );

  var text = 'Neue Anmeldung für die Iqraa-Schule\n\n';
  var html = '<div style="font-family:Arial,sans-serif;font-size:15px;color:#1A1614">'
           + '<h2 style="color:#1B6B4F;margin:0 0 4px">Neue Anmeldung</h2>'
           + '<p style="margin:0 0 16px;color:#6B6259">Iqraa-Schule für Arabischunterricht</p>'
           + '<table cellpadding="6" cellspacing="0" border="0" style="border-collapse:collapse">';

  zeilen.forEach(function (z) {
    text += z[0] + ': ' + z[1] + '\n';
    html += '<tr>'
          + '<td style="border-bottom:1px solid #E4DACA;color:#6B6259;white-space:nowrap">' + z[0] + '</td>'
          + '<td style="border-bottom:1px solid #E4DACA;font-weight:bold">' + escapeHtml(String(z[1])) + '</td>'
          + '</tr>';
  });

  html += '</table>'
        + '<p style="margin-top:18px"><a href="' + tabelle().getUrl() + '" '
        + 'style="color:#1B6B4F">Alle Anmeldungen in der Tabelle öffnen</a></p>'
        + '</div>';

  text += '\nAlle Anmeldungen: ' + tabelle().getUrl();

  var optionen = {
    to: EMPFAENGER,
    subject: 'Neue Anmeldung: ' + name,
    body: text,
    htmlBody: html,
    name: ABSENDER_NAME
  };
  // Antworten gehen direkt an die Eltern, falls sie eine Adresse angaben.
  if (String(d.email || '').trim()) optionen.replyTo = String(d.email).trim();

  MailApp.sendEmail(optionen);
}


function mailAnEltern(d, sprache) {
  var name = d.kindVorname + ' ' + d.kindNachname;

  var texte = {
    de: {
      betreff: 'Ihre Anmeldung bei der Iqraa-Schule',
      gruss: 'Guten Tag ' + d.elternVorname + ' ' + d.elternNachname + ',',
      dank: 'vielen Dank für die Anmeldung von ' + name + '.',
      info: 'Wir haben die Anmeldung erhalten und melden uns über WhatsApp bei Ihnen.',
      eckdaten: 'Unterricht: sonntags von 12:00 bis 14:30 Uhr. Beitrag: 100 € für das erste Halbjahr.',
      gruss2: 'Herzliche Grüße',
      absender: 'Iqraa-Schule für Arabischunterricht\nArabisch-Deutscher IQRA e.V. Beckum'
    },
    en: {
      betreff: 'Your registration at the Iqraa School',
      gruss: 'Hello ' + d.elternVorname + ' ' + d.elternNachname + ',',
      dank: 'thank you for registering ' + name + '.',
      info: 'We have received the registration and will contact you on WhatsApp.',
      eckdaten: 'Lessons: Sundays from 12:00 to 14:30. Fee: €100 for the first half-year.',
      gruss2: 'Kind regards',
      absender: 'Iqraa School for Arabic Lessons\nArabisch-Deutscher IQRA e.V. Beckum'
    },
    ar: {
      betreff: 'تسجيلكم في مدرسة إقرأ',
      gruss: 'السلام عليكم ' + d.elternVorname + ' ' + d.elternNachname + '،',
      dank: 'شكراً لكم على تسجيل ' + name + '.',
      info: 'لقد وصلنا طلب التسجيل، وسنتواصل معكم عبر الواتس اب.',
      eckdaten: 'الدروس: كل يوم أحد من الساعة 12:00 إلى الساعة 14:30. الرسوم: 100 يورو لنصف السنة الأولى.',
      gruss2: 'مع أطيب التحيات',
      absender: 'مدرسة إقرأ لتعليم اللغة العربية\nالجمعية العربية الألمانية في بيكوم'
    }
  };

  var t = texte[sprache] || texte.de;
  var rtl = sprache === 'ar';

  var text = [t.gruss, '', t.dank, t.info, '', t.eckdaten, '', t.gruss2, t.absender].join('\n');

  var html = '<div dir="' + (rtl ? 'rtl' : 'ltr') + '" style="font-family:Arial,sans-serif;'
           + 'font-size:15px;line-height:1.7;color:#1A1614;text-align:' + (rtl ? 'right' : 'left') + '">'
           + '<p>' + escapeHtml(t.gruss) + '</p>'
           + '<p>' + escapeHtml(t.dank) + '<br>' + escapeHtml(t.info) + '</p>'
           + '<p style="background:#EDF4F0;border-' + (rtl ? 'right' : 'left') + ':4px solid #1B6B4F;'
           + 'padding:10px 14px">' + escapeHtml(t.eckdaten) + '</p>'
           + '<p style="color:#6B6259">' + escapeHtml(t.gruss2) + '<br>'
           + escapeHtml(t.absender).replace(/\n/g, '<br>') + '</p>'
           + '</div>';

  MailApp.sendEmail({
    to: String(d.email).trim(),
    subject: t.betreff,
    body: text,
    htmlBody: html,
    name: ABSENDER_NAME,
    replyTo: EMPFAENGER
  });
}


/* --------------------------------------------------------------------------
   Kleinkram
   -------------------------------------------------------------------------- */

function zahlungText(wert, sprache) {
  if (sprache === 'de') {
    return wert === 'bar' ? 'bar (100 €)' : 'Münsterlandkarte';
  }
  return wert;
}

/**
 * Die Kartennummer, sauber gekuerzt. Nur bei Zahlung ueber die
 * Muensterlandkarte gefuellt - bei Barzahlung liefert das leeren Text,
 * selbst wenn im Browser vorher etwas eingetippt wurde.
 */
function kartennummer(d) {
  if (d.zahlung !== 'muensterlandkarte') return '';
  return String(d.kartennummer || '').trim().slice(0, MAX_KARTENNUMMER);
}

/** Die Gruppe ausgeschrieben - nur bei ehemaligen Schuelern. */
function gruppenText(d) {
  if (d.ehemalig !== 'ja') return '';
  return GRUPPEN[String(d.gruppe || '').trim()] || '';
}

/** Der Allergietext - nur, wenn die Frage mit ja beantwortet wurde. */
function allergietext(d) {
  if (d.hatAllergien !== 'ja') return '';
  return String(d.allergien || '').trim();
}

function datumLesbar(iso) {
  var teile = String(iso).match(/^(\d{4})-(\d{2})-(\d{2})$/);
  return teile ? teile[3] + '.' + teile[2] + '.' + teile[1] : iso;
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function antwort(objekt) {
  return ContentService
    .createTextOutput(JSON.stringify(objekt))
    .setMimeType(ContentService.MimeType.JSON);
}

/** Fuehrt etwas aus und schluckt einen moeglichen Fehler, damit eine
 *  fehlgeschlagene E-Mail die schon gespeicherte Anmeldung nicht kippt. */
function versucheStill(fn) {
  try { fn(); } catch (e) { console.error(e); }
}


/* --------------------------------------------------------------------------
   Testlauf — im Apps-Script-Editor oben auswaehlen und auf "Ausfuehren"
   klicken. Legt eine Testanmeldung an und verschickt die Vereins-E-Mail.
   Die Testzeile danach einfach in der Tabelle loeschen.
   -------------------------------------------------------------------------- */
function testAnmeldung() {
  var ergebnis = doPost({
    postData: {
      contents: JSON.stringify({
        kindVorname: 'Test', kindNachname: 'Kind', kindGeburtsdatum: '2018-03-12',
        elternVorname: 'Test', elternNachname: 'Elternteil',
        telefon: '0177 5883033', whatsapp: '0177 5883033', email: '',
        ehemalig: 'ja', gruppe: '3',
        zahlung: 'muensterlandkarte', kartennummer: 'ML0012345678',
        hatAllergien: 'ja', allergien: 'Nuesse', fotos: 'ja',
        sprache: 'de', dauer: 30, hp: ''
      })
    }
  });
  console.log(ergebnis.getContent());
}
