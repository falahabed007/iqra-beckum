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

/** Zweites Blatt fuer Kuendigungen ueber die Kuendigungsseite. */
var BLATT_KUENDIGUNGEN = 'Kündigungen';

/**
 * Nur noetig, wenn das Skript NICHT direkt in der Tabelle liegt
 * (also nicht ueber "Erweiterungen -> Apps Script" angelegt wurde).
 * Dann hier die ID aus der Tabellen-URL eintragen, sonst leer lassen.
 */
var TABELLEN_ID = '';

/** So heisst die Schule in der Betreffzeile. */
var ABSENDER_NAME = 'Iqraa-Schule Beckum';

/** Fuer Datum und Uhrzeit in der Kuendigungsbestaetigung. */
var ZEITZONE = 'Europe/Berlin';

/** Mindestzeit in Sekunden zwischen Oeffnen und Absenden des Formulars. */
var MINDESTDAUER = 3;

/** Die Nummer der Muensterlandkarte hat immer genau so viele Zeichen.
 *  Muss zu minlength/maxlength="12" in index.html und zur Pruefung in
 *  assets/site.js passen. */
var LAENGE_KARTENNUMMER = 12;

/** Die Schule nimmt Kinder erst ab diesem Alter auf. Muss zu MINDESTALTER
 *  in assets/site.js passen. */
var MINDESTALTER = 6;

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

var SPALTEN_KUENDIGUNG = [
  'Eingegangen am',
  'Art der Kündigung',
  'Grund',
  'Kind Vorname',
  'Kind Nachname',
  'Elternteil Vorname',
  'Elternteil Nachname',
  'Telefon',
  'E-Mail',
  'Beendigung zum',
  'Sprache'
];

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
  'Sprache',
  'AGB bestätigt',
  'Datenschutz bestätigt',
  'Vorzeitiger Unterrichtsbeginn'
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

    // Die Kuendigungsseite schickt an denselben Endpunkt, meldet sich aber
    // mit art:"kuendigung". Alles Weitere laeuft dann getrennt.
    if (d.art === 'kuendigung') return kuendigungVerarbeiten(d);

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

    // Alter: die Schule nimmt Kinder erst ab MINDESTALTER Jahren auf.
    // Der Kalender im Browser laesst nichts anderes zu, das Feld liesse sich
    // aber von Hand befuellen - deshalb hier noch einmal.
    if (!altGenug(d.kindGeburtsdatum)) {
      return antwort({
        ok: false,
        fehler: 'Kind ist jünger als ' + MINDESTALTER + ' Jahre.'
      });
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
      // Leerzeichen zaehlen nicht mit - genau wie im Browser.
      if (String(d.kartennummer).replace(/\s/g, '').length !== LAENGE_KARTENNUMMER) {
        return antwort({
          ok: false,
          fehler: 'Kartennummer muss genau ' + LAENGE_KARTENNUMMER + ' Zeichen haben.'
        });
      }
    }

    // Beide Haken sind Pflicht. Ohne sie duerfte die Anmeldung gar nicht
    // abgeschickt worden sein; kaeme sie hier trotzdem an, koennten wir die
    // Einwilligung spaeter nicht nachweisen.
    if (d.agb !== 'ja') {
      return antwort({ ok: false, fehler: 'Teilnahmebedingungen nicht bestaetigt.' });
    }
    if (d.datenschutz !== 'ja') {
      return antwort({ ok: false, fehler: 'Datenschutzerklaerung nicht bestaetigt.' });
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
    sprache,
    d.agb === 'ja' ? 'ja' : 'nein',
    d.datenschutz === 'ja' ? 'ja' : 'nein',
    d.widerruf === 'ja' ? 'ja verlangt' : 'nein'
  ]);

  var zeile = b.getLastRow();
  b.getRange(zeile, 1).setNumberFormat('dd.mm.yyyy hh:mm');
  b.getRange(zeile, 4).setNumberFormat('dd.mm.yyyy');
}


/**
 * Ist das Kind heute alt genug? Erwartet "JJJJ-MM-TT" aus dem Datumsfeld
 * des Browsers; ein unlesbares Datum faellt durch. Ein Datum in der Zukunft
 * scheitert damit ebenfalls.
 */
function altGenug(iso) {
  var teile = String(iso).match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!teile) return false;
  var grenze = new Date();
  grenze.setFullYear(grenze.getFullYear() - MINDESTALTER);
  var geburt = new Date(Number(teile[1]), Number(teile[2]) - 1, Number(teile[3]));
  return geburt <= grenze;
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
    ['Sprache des Formulars', { de: 'Deutsch', en: 'Englisch', ar: 'Arabisch' }[sprache]],
    ['Teilnahmebedingungen', d.agb === 'ja' ? 'bestätigt' : 'NICHT bestätigt'],
    ['Datenschutzerklärung', d.datenschutz === 'ja' ? 'bestätigt' : 'NICHT bestätigt'],
    ['Unterrichtsbeginn vor Ablauf der Widerrufsfrist',
     d.widerruf === 'ja' ? 'ausdrücklich verlangt'
                         : 'NICHT verlangt — Beginn erst nach 14 Tagen']
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
      widerrufTitel: 'Ihr Widerrufsrecht',
      widerruf: 'Sie haben das Recht, binnen vierzehn Tagen ab Vertragsschluss ohne Angabe von '
              + 'Gründen zu widerrufen. Dafür genügt eine eindeutige Erklärung an '
              + EMPFAENGER + '. Die vollständige Widerrufsbelehrung und das '
              + 'Muster-Widerrufsformular finden Sie in § 4 und § 5 der Teilnahmebedingungen.',
      widerrufBeginn: 'Sie haben ausdrücklich verlangt, dass der Unterricht schon vor Ablauf der '
              + 'Widerrufsfrist beginnt. Bei einem Widerruf danach schulden Sie anteiligen Wertersatz.',
      widerrufOhne: 'Sie haben den vorzeitigen Unterrichtsbeginn nicht verlangt. Ihr Kind kann '
              + 'deshalb nach Ablauf der vierzehntägigen Widerrufsfrist am Unterricht teilnehmen.',
      gruss2: 'Herzliche Grüße',
      absender: 'Iqraa-Schule für Arabischunterricht\nArabisch-Deutscher IQRA e.V. Beckum'
    },
    en: {
      betreff: 'Your registration at the Iqraa School',
      gruss: 'Hello ' + d.elternVorname + ' ' + d.elternNachname + ',',
      dank: 'thank you for registering ' + name + '.',
      info: 'We have received the registration and will contact you on WhatsApp.',
      eckdaten: 'Lessons: Sundays from 12:00 to 14:30. Fee: €100 for the first half-year.',
      widerrufTitel: 'Your right of withdrawal',
      widerruf: 'You have the right to withdraw within fourteen days of concluding the contract '
              + 'without giving any reason. A clear statement to ' + EMPFAENGER + ' is sufficient. '
              + 'The full withdrawal instructions and the model withdrawal form are set out in '
              + 'sections 4 and 5 of the terms of participation.',
      widerrufBeginn: 'You expressly requested that lessons begin before the withdrawal period has '
              + 'expired. If you withdraw after that, you owe proportionate compensation.',
      widerrufOhne: 'You did not request an early start. Your child can therefore take part in '
              + 'lessons once the fourteen-day withdrawal period has expired.',
      gruss2: 'Kind regards',
      absender: 'Iqraa School for Arabic Lessons\nArabisch-Deutscher IQRA e.V. Beckum'
    },
    ar: {
      betreff: 'تسجيلكم في مدرسة إقرأ',
      gruss: 'السلام عليكم ' + d.elternVorname + ' ' + d.elternNachname + '،',
      dank: 'شكراً لكم على تسجيل ' + name + '.',
      info: 'لقد وصلنا طلب التسجيل، وسنتواصل معكم عبر الواتس اب.',
      eckdaten: 'الدروس: كل يوم أحد من الساعة 12:00 إلى الساعة 14:30. الرسوم: 100 يورو لنصف السنة الأولى.',
      widerrufTitel: 'حق العدول',
      widerruf: 'يحق لكم العدول خلال أربعة عشر يوماً من إبرام العقد دون ذكر الأسباب. ويكفي لذلك '
              + 'إعلان واضح إلى ' + EMPFAENGER + '. وتجدون إرشادات العدول الكاملة ونموذج العدول '
              + 'في البندين 4 و5 من شروط المشاركة.',
      widerrufBeginn: 'لقد طلبتم صراحةً أن تبدأ الدروس قبل انتهاء مدة العدول. وفي حال العدول بعد ذلك '
              + 'تدينون بتعويض متناسب.',
      widerrufOhne: 'لم تطلبوا البدء المبكر. ولذلك يمكن لطفلكم المشاركة في الدروس بعد انتهاء مدة '
              + 'العدول البالغة أربعة عشر يوماً.',
      gruss2: 'مع أطيب التحيات',
      absender: 'مدرسة إقرأ لتعليم اللغة العربية\nالجمعية العربية الألمانية في بيكوم'
    }
  };

  var t = texte[sprache] || texte.de;
  var rtl = sprache === 'ar';

  // Die Widerrufsbelehrung muss dem Verbraucher in Textform zugehen -
  // diese E-Mail ist der Ort dafuer.
  var widerrufLage = d.widerruf === 'ja' ? t.widerrufBeginn : t.widerrufOhne;

  var text = [t.gruss, '', t.dank, t.info, '', t.eckdaten, '',
              t.widerrufTitel, t.widerruf, widerrufLage, '',
              t.gruss2, t.absender].join('\n');

  var html = '<div dir="' + (rtl ? 'rtl' : 'ltr') + '" style="font-family:Arial,sans-serif;'
           + 'font-size:15px;line-height:1.7;color:#1A1614;text-align:' + (rtl ? 'right' : 'left') + '">'
           + '<p>' + escapeHtml(t.gruss) + '</p>'
           + '<p>' + escapeHtml(t.dank) + '<br>' + escapeHtml(t.info) + '</p>'
           + '<p style="background:#EDF4F0;border-' + (rtl ? 'right' : 'left') + ':4px solid #1B6B4F;'
           + 'padding:10px 14px">' + escapeHtml(t.eckdaten) + '</p>'
           + '<h3 style="font-size:15px;margin:22px 0 4px">' + escapeHtml(t.widerrufTitel) + '</h3>'
           + '<p style="font-size:13px;color:#6B6259">' + escapeHtml(t.widerruf) + '<br>'
           + escapeHtml(widerrufLage) + '</p>'
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
   Kuendigungen
   -------------------------------------------------------------------------- */

/**
 * Nimmt eine Kuendigung von der Kuendigungsseite entgegen.
 *
 * § 312k BGB verlangt zweierlei: der Verbraucher muss die Kuendigung ueber
 * die Website erklaeren koennen, und der Zugang muss ihm unverzueglich in
 * Textform bestaetigt werden - mit Inhalt, Datum und Uhrzeit der Abgabe
 * sowie dem Zeitpunkt, zu dem das Vertragsverhaeltnis enden soll.
 */
function kuendigungVerarbeiten(d) {
  if (d.hp) return antwort({ ok: true });
  if (typeof d.dauer === 'number' && d.dauer < MINDESTDAUER) {
    return antwort({ ok: true });
  }

  var pflicht = ['kuendigungsart', 'kindVorname', 'kindNachname',
                 'elternVorname', 'elternNachname', 'telefon', 'email',
                 'zeitpunktArt'];
  for (var i = 0; i < pflicht.length; i++) {
    if (!String(d[pflicht[i]] || '').trim()) {
      return antwort({ ok: false, fehler: 'Feld fehlt: ' + pflicht[i] });
    }
  }

  // Ohne Grund laesst sich eine ausserordentliche Kuendigung nicht pruefen.
  if (d.kuendigungsart === 'ausserordentlich' && !String(d.grund || '').trim()) {
    return antwort({ ok: false, fehler: 'Feld fehlt: grund' });
  }
  if (d.zeitpunktArt === 'datum' && !String(d.zeitpunkt || '').trim()) {
    return antwort({ ok: false, fehler: 'Feld fehlt: zeitpunkt' });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(d.email).trim())) {
    return antwort({ ok: false, fehler: 'E-Mail-Adresse ist ungültig.' });
  }

  var sprache = ['de', 'en', 'ar'].indexOf(d.sprache) > -1 ? d.sprache : 'de';
  var eingang = new Date();

  var sperre = LockService.getScriptLock();
  sperre.waitLock(20000);
  try {
    kuendigungInTabelle(d, sprache, eingang);
  } finally {
    sperre.releaseLock();
  }

  versucheStill(function () { kuendigungAnVerein(d, sprache, eingang); });
  // Die Bestaetigung ist Pflicht, nicht Hoeflichkeit - deshalb wird ein
  // Fehlschlag hier zurueckgemeldet, damit die Seite den Ausweichweg zeigt.
  kuendigungAnEltern(d, sprache, eingang);

  return antwort({ ok: true });
}


function kuendigungsBlatt() {
  var datei = tabelle();
  var b = datei.getSheetByName(BLATT_KUENDIGUNGEN);
  if (!b) {
    b = datei.insertSheet(BLATT_KUENDIGUNGEN);
  }
  if (b.getLastRow() === 0) {
    b.appendRow(SPALTEN_KUENDIGUNG);
    var kopf = b.getRange(1, 1, 1, SPALTEN_KUENDIGUNG.length);
    kopf.setFontWeight('bold');
    kopf.setBackground('#8A3324');
    kopf.setFontColor('#FFFFFF');
    b.setFrozenRows(1);
    b.setColumnWidth(1, 140);
    b.setColumnWidth(3, 260);
  }
  return b;
}


function kuendigungInTabelle(d, sprache, eingang) {
  var b = kuendigungsBlatt();
  b.appendRow([
    eingang,
    d.kuendigungsart === 'ausserordentlich' ? 'außerordentlich' : 'ordentlich',
    String(d.grund || ''),
    d.kindVorname,
    d.kindNachname,
    d.elternVorname,
    d.elternNachname,
    "'" + String(d.telefon).trim(),
    String(d.email).trim(),
    beendigungText(d, 'de'),
    sprache
  ]);
  b.getRange(b.getLastRow(), 1).setNumberFormat('dd.mm.yyyy hh:mm:ss');
}


/** Der Zeitpunkt, zu dem die Teilnahme enden soll - so, wie ihn der
 *  Verbraucher angegeben hat. */
function beendigungText(d, sprache) {
  if (d.zeitpunktArt === 'datum' && d.zeitpunkt) return datumLesbar(d.zeitpunkt);
  return { de: 'zum nächstmöglichen Zeitpunkt',
           en: 'at the earliest possible date',
           ar: 'في أقرب موعد ممكن' }[sprache] || 'zum nächstmöglichen Zeitpunkt';
}


function kuendigungAnVerein(d, sprache, eingang) {
  var name = d.kindVorname + ' ' + d.kindNachname;
  var zeilen = [
    ['Eingegangen am', zeitLesbar(eingang)],
    ['Art der Kündigung', d.kuendigungsart === 'ausserordentlich' ? 'außerordentlich' : 'ordentlich'],
    ['Kind', name],
    ['Elternteil', d.elternVorname + ' ' + d.elternNachname],
    ['Telefon', d.telefon],
    ['E-Mail', d.email],
    ['Beendigung zum', beendigungText(d, 'de')]
  ];
  if (String(d.grund || '').trim()) zeilen.push(['Grund', d.grund]);

  var text = 'Kündigung über die Website\n\n';
  var html = '<div style="font-family:Arial,sans-serif;font-size:15px;color:#1A1614">'
           + '<h2 style="color:#8A3324;margin:0 0 4px">Kündigung eingegangen</h2>'
           + '<p style="margin:0 0 16px;color:#6B6259">Iqraa-Schule für Arabischunterricht</p>'
           + '<table cellpadding="6" cellspacing="0" border="0" style="border-collapse:collapse">';
  zeilen.forEach(function (z) {
    text += z[0] + ': ' + z[1] + '\n';
    html += '<tr><td style="border-bottom:1px solid #E4DACA;color:#6B6259;white-space:nowrap">'
          + z[0] + '</td><td style="border-bottom:1px solid #E4DACA;font-weight:bold">'
          + escapeHtml(String(z[1])) + '</td></tr>';
  });
  html += '</table></div>';

  MailApp.sendEmail({
    to: EMPFAENGER,
    subject: 'Kündigung: ' + name,
    body: text,
    htmlBody: html,
    name: ABSENDER_NAME,
    replyTo: String(d.email).trim()
  });
}


/**
 * Die Bestaetigung an den Verbraucher. Inhalt, Datum und Uhrzeit der Abgabe
 * sowie der Zeitpunkt der Beendigung muessen darin stehen - so schreibt es
 * § 312k Abs. 4 BGB vor.
 */
function kuendigungAnEltern(d, sprache, eingang) {
  var name = d.kindVorname + ' ' + d.kindNachname;
  var ausser = d.kuendigungsart === 'ausserordentlich';

  var texte = {
    de: {
      betreff: 'Bestätigung Ihrer Kündigung — Iqraa-Schule',
      gruss: 'Guten Tag ' + d.elternVorname + ' ' + d.elternNachname + ',',
      dank: 'wir bestätigen Ihnen den Eingang Ihrer Kündigung.',
      felder: [['Kündigung eingegangen am', zeitLesbar(eingang)],
               ['Art der Kündigung', ausser ? 'außerordentlich aus wichtigem Grund' : 'ordentlich'],
               ['Teilnahme von', name],
               ['Beendigung zum', beendigungText(d, 'de')]],
      grundLabel: 'Angegebener Grund',
      schluss: 'Sollte der genannte Zeitpunkt nach den Fristen in § 3 der Teilnahmebedingungen nicht möglich sein, melden wir uns bei Ihnen und nennen Ihnen den nächstmöglichen Termin.',
      gruss2: 'Herzliche Grüße',
      absender: 'Iqraa-Schule für Arabischunterricht\nArabisch-Deutscher-Verein e.V. Beckum'
    },
    en: {
      betreff: 'Confirmation of your termination — Iqraa School',
      gruss: 'Hello ' + d.elternVorname + ' ' + d.elternNachname + ',',
      dank: 'we confirm that we have received your termination.',
      felder: [['Termination received on', zeitLesbar(eingang)],
               ['Type of termination', ausser ? 'for good cause' : 'ordinary'],
               ['Participation of', name],
               ['Ending on', beendigungText(d, 'en')]],
      grundLabel: 'Reason given',
      schluss: 'If the date stated is not possible under the notice periods in section 3 of the terms of participation, we will contact you and let you know the earliest possible date.',
      gruss2: 'Kind regards',
      absender: 'Iqraa School for Arabic Lessons\nArabisch-Deutscher-Verein e.V. Beckum'
    },
    ar: {
      betreff: 'تأكيد إنهاء المشاركة — مدرسة إقرأ',
      gruss: 'السلام عليكم ' + d.elternVorname + ' ' + d.elternNachname + '،',
      dank: 'نؤكد لكم وصول طلب إنهاء المشاركة.',
      felder: [['وصل الإنهاء بتاريخ', zeitLesbar(eingang)],
               ['نوع الإنهاء', ausser ? 'استثنائي لسبب مهم' : 'اعتيادي'],
               ['مشاركة', name],
               ['تنتهي في', beendigungText(d, 'ar')]],
      grundLabel: 'السبب المذكور',
      schluss: 'وإذا تعذّر الموعد المذكور وفقاً للمهل الواردة في البند 3 من شروط المشاركة، فسنتواصل معكم ونذكر لكم أقرب موعد ممكن.',
      gruss2: 'مع أطيب التحيات',
      absender: 'مدرسة إقرأ لتعليم اللغة العربية\nالجمعية العربية الألمانية في بيكوم'
    }
  };

  var t = texte[sprache] || texte.de;
  var rtl = sprache === 'ar';
  var felder = t.felder.slice();
  if (String(d.grund || '').trim()) felder.push([t.grundLabel, String(d.grund).trim()]);

  var text = [t.gruss, '', t.dank, ''].join('\n');
  felder.forEach(function (f) { text += f[0] + ': ' + f[1] + '\n'; });
  text += '\n' + t.schluss + '\n\n' + t.gruss2 + '\n' + t.absender;

  var html = '<div dir="' + (rtl ? 'rtl' : 'ltr') + '" style="font-family:Arial,sans-serif;'
           + 'font-size:15px;line-height:1.7;color:#1A1614;text-align:' + (rtl ? 'right' : 'left') + '">'
           + '<p>' + escapeHtml(t.gruss) + '</p><p>' + escapeHtml(t.dank) + '</p>'
           + '<table cellpadding="6" cellspacing="0" border="0" style="border-collapse:collapse">';
  felder.forEach(function (f) {
    html += '<tr><td style="border-bottom:1px solid #E4DACA;color:#6B6259;white-space:nowrap">'
          + escapeHtml(f[0]) + '</td><td style="border-bottom:1px solid #E4DACA;font-weight:bold">'
          + escapeHtml(String(f[1])) + '</td></tr>';
  });
  html += '</table><p style="color:#6B6259">' + escapeHtml(t.schluss) + '</p>'
        + '<p style="color:#6B6259">' + escapeHtml(t.gruss2) + '<br>'
        + escapeHtml(t.absender).replace(/\n/g, '<br>') + '</p></div>';

  MailApp.sendEmail({
    to: String(d.email).trim(),
    subject: t.betreff,
    body: text,
    htmlBody: html,
    name: ABSENDER_NAME,
    replyTo: EMPFAENGER
  });
}


/** "23.08.2026 um 14:07 Uhr" - fuer die Bestaetigung nach § 312k BGB. */
function zeitLesbar(datum) {
  return Utilities.formatDate(datum, ZEITZONE, 'dd.MM.yyyy') + ' um '
       + Utilities.formatDate(datum, ZEITZONE, 'HH:mm') + ' Uhr';
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
  return String(d.kartennummer || '').trim().slice(0, LAENGE_KARTENNUMMER);
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
        agb: 'ja', datenschutz: 'ja', widerruf: 'ja',
        sprache: 'de', dauer: 30, hp: ''
      })
    }
  });
  console.log(ergebnis.getContent());
}


/** Dasselbe fuer die Kuendigungsseite. Legt eine Zeile im Blatt
 *  "Kündigungen" an und verschickt beide E-Mails. */
function testKuendigung() {
  var ergebnis = doPost({
    postData: {
      contents: JSON.stringify({
        art: 'kuendigung', kuendigungsart: 'ordentlich', grund: '',
        kindVorname: 'Test', kindNachname: 'Kind',
        elternVorname: 'Test', elternNachname: 'Elternteil',
        telefon: '0177 5883033', email: EMPFAENGER,
        zeitpunktArt: 'naechst', zeitpunkt: '',
        sprache: 'de', dauer: 30, hp: ''
      })
    }
  });
  console.log(ergebnis.getContent());
}
