/* ==========================================================================
   Die Rechtstexte der Webseite - Impressum, Datenschutzerklaerung und AGB,
   jeweils auf Deutsch, Englisch und Arabisch.

   Warum eine eigene Datei: die drei Rechtstexte sind zusammen um ein
   Vielfaches laenger als alle uebrigen Texte der Seite. Stuenden sie in
   assets/i18n.js, waere dort nichts mehr wiederzufinden. Diese Datei haengt
   sich am Ende selbst in window.I18N ein, die Schluessel verhalten sich also
   genau wie alle anderen.

   GELADEN WIRD SIE NUR VON DEN DREI RECHTSSEITEN - agb.html,
   datenschutz.html und impressum.html - und dort mit "defer" NACH
   assets/i18n.js und VOR assets/site.js. Die Startseite braucht sie nicht.

   AUFBAU: jeder Abschnitt hat zwei Schluessel.
     x.n.title   die Ueberschrift, reiner Text  -> data-i18n
     x.n.body    der Abschnitt selbst, mit <p> und <ul>  -> data-i18n-html
   Der Text im HTML der Rechtsseiten ist nur die Rueckfallebene fuer den
   Fall, dass JavaScript nicht laeuft. Massgeblich ist diese Datei hier.

   RECHTLICHER STAND: August 2026. Wird ein Text geaendert, gehoert das neue
   Datum nach assets/config.js (standAgb, standDatenschutz, standImpressum).
   ========================================================================== */

(function () {
  "use strict";

  var TEXTE = {

/* ==========================================================================
   DEUTSCH
   ========================================================================== */
de: {

  /* ---------------------------------------------------------------- Impressum */
  "doc.impressum.desc": "Impressum der Iqraa-Schule für Arabischunterricht, Arabisch-Deutscher-Verein e.V. Beckum.",

  "imp.title": "Impressum",
  "imp.intro": "Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG).",
  "imp.anbieter": "Anbieter",
  "imp.verein": "Verein",
  "imp.anschrift": "Anschrift",
  "imp.land": "Deutschland",
  "imp.vertreten": "Vertretungsberechtigter Vorstand",
  "imp.register": "Vereinsregister",
  "imp.ustid": "Umsatzsteuer-Identifikationsnummer",
  "imp.ustidHinweis": "gemäß § 27a Umsatzsteuergesetz",
  "imp.telefon": "Telefon",
  "imp.email": "E-Mail",
  "imp.verantwortlich": "Verantwortlich für redaktionelle Inhalte",

  "imp.haftung.title": "Haftung für eigene Inhalte",
  "imp.haftung.body":
    "<p>Die Inhalte unserer Website wurden nach bestem Wissen und mit größtmöglicher Sorgfalt erstellt.</p>" +
    "<p>Als Diensteanbieter sind wir nach den allgemeinen gesetzlichen Vorschriften für eigene Inhalte auf dieser Website verantwortlich.</p>" +
    "<p>Wir sind jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder ohne konkreten Anlass nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>" +
    "<p>Gesetzliche Verpflichtungen zur Entfernung oder Sperrung rechtswidriger Inhalte bleiben unberührt.</p>" +
    "<p>Sollten uns konkrete Rechtsverletzungen bekannt werden, prüfen wir die betreffenden Inhalte und entfernen oder sperren sie, soweit dies gesetzlich erforderlich ist.</p>",

  "imp.links.title": "Haftung für externe Links",
  "imp.links.body":
    "<p>Unsere Website kann Links zu externen Internetseiten Dritter enthalten.</p>" +
    "<p>Auf die Inhalte dieser externen Seiten haben wir keinen Einfluss. Für die Inhalte der verlinkten Seiten ist grundsätzlich der jeweilige Betreiber verantwortlich.</p>" +
    "<p>Zum Zeitpunkt der Verlinkung waren für uns keine Rechtsverstöße erkennbar.</p>" +
    "<p>Eine dauerhafte inhaltliche Kontrolle externer Seiten ist ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Sollten uns konkrete Rechtsverletzungen bekannt werden, werden wir die betreffenden Links prüfen und gegebenenfalls entfernen.</p>",

  "imp.urheber.title": "Urheberrecht",
  "imp.urheber.body":
    "<p>Die auf dieser Website veröffentlichten Inhalte, Texte, Grafiken, Bilder und sonstigen Werke unterliegen dem deutschen Urheberrecht, soweit sie nicht ausdrücklich unter einer anderen Lizenz stehen.</p>" +
    "<p>Das Logo des Arabisch-Deutschen-Vereins e.V. Beckum ist Eigentum des Vereins.</p>" +
    "<p>Eine Vervielfältigung, Bearbeitung, Verbreitung oder sonstige Verwertung urheberrechtlich geschützter Inhalte außerhalb der gesetzlichen Grenzen bedarf der vorherigen Zustimmung des jeweiligen Rechteinhabers.</p>" +
    "<p>Die auf der Website verwendeten Schriftarten werden unter den jeweils geltenden Lizenzbedingungen verwendet. Die Schriften Bitter, Karla, Cairo und Noto Naskh Arabic stehen unter der SIL Open Font License 1.1.</p>",

  "imp.streit.title": "Streitbeilegung",
  "imp.streit.body":
    "<p>Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen, soweit keine gesetzliche Verpflichtung hierzu besteht.</p>",

  "imp.datenschutz.title": "Datenschutz",
  "imp.datenschutz.body":
    "<p>Informationen über die Verarbeitung personenbezogener Daten finden Sie in unserer gesonderten <a href=\"datenschutz.html\" data-keep-lang=\"datenschutz.html\">Datenschutzerklärung</a>.</p>",

  "imp.traeger.title": "Verantwortlichkeit des Vereins",
  "imp.traeger.body":
    "<p>Soweit auf dieser Website Informationen über die Iqraa-Schule, den Arabisch-Deutschen-Verein e.V. Beckum, Unterrichtsangebote oder Veranstaltungen bereitgestellt werden, erfolgt dies im Verantwortungsbereich des oben genannten Vereins.</p>",

  "imp.stand": "Stand:",

  /* ---------------------------------------------------- Datenschutzerklaerung */
  "doc.datenschutz.desc": "Datenschutzerklärung der Iqraa-Schule für Arabischunterricht in Beckum.",

  "ds.title": "Datenschutzerklärung",
  "ds.stand": "Stand:",

  "ds.1.title": "1. Verantwortlicher",
  "ds.1.body":
    "<p>Verantwortlicher für die Verarbeitung personenbezogener Daten im Zusammenhang mit der Website, der Anmeldung und der Durchführung der Iqraa-Schule ist:</p>",

  "ds.2.title": "2. Allgemeine Grundsätze",
  "ds.2.body":
    "<p>Wir nehmen den Schutz personenbezogener Daten ernst.</p>" +
    "<p>Wir verarbeiten personenbezogene Daten nur, soweit dies nach den geltenden datenschutzrechtlichen Vorschriften zulässig ist.</p>" +
    "<p>Dabei beachten wir insbesondere die Grundsätze der Rechtmäßigkeit, Transparenz, Zweckbindung, Datenminimierung, Richtigkeit, Speicherbegrenzung sowie Integrität und Vertraulichkeit.</p>" +
    "<p>Wir verarbeiten grundsätzlich nur solche personenbezogenen Daten, die für die jeweiligen Zwecke erforderlich sind.</p>",

  "ds.3.title": "3. Besuch der Website",
  "ds.3.body":
    "<p>Unsere Website wird über GitHub Pages bereitgestellt.</p>" +
    "<p>Beim Aufruf der Website können technisch erforderliche Daten verarbeitet werden. Hierzu können insbesondere gehören:</p>" +
    "<ul><li>IP-Adresse,</li><li>Datum und Uhrzeit des Zugriffs,</li><li>angeforderte Internetadresse,</li>" +
    "<li>Browsertyp und Browserversion,</li><li>Betriebssystem,</li><li>technische Informationen über das verwendete Endgerät.</li></ul>" +
    "<p>Diese Daten können zur Gewährleistung der Sicherheit, Stabilität und technischen Bereitstellung der Website verarbeitet werden.</p>" +
    "<p>Die Rechtsgrundlage ist, soweit die gesetzlichen Voraussetzungen vorliegen, Art. 6 Abs. 1 lit. f DSGVO.</p>" +
    "<p>GitHub ist ein Dienst der GitHub, Inc. und gehört zur Microsoft-Unternehmensgruppe.</p>",

  "ds.4.title": "4. Hosting und externe technische Dienste",
  "ds.4.body":
    "<p>Für die Bereitstellung einzelner Funktionen unserer Website können externe technische Dienste eingesetzt werden.</p>" +
    "<p>Soweit externe Anbieter personenbezogene Daten in unserem Auftrag verarbeiten, erfolgt dies auf Grundlage der jeweils erforderlichen datenschutzrechtlichen Vereinbarungen.</p>" +
    "<p>Bei technischen Dienstleistern kann eine Verarbeitung personenbezogener Daten außerhalb der Europäischen Union bzw. des Europäischen Wirtschaftsraums nicht vollständig ausgeschlossen werden.</p>" +
    "<p>In solchen Fällen werden die gesetzlichen Anforderungen der Art. 44 ff. DSGVO berücksichtigt.</p>",

  "ds.5.title": "5. Anmeldeformular",
  "ds.5.body":
    "<p>Wenn Sie Ihr Kind über das Online-Formular der Iqraa-Schule anmelden, verarbeiten wir die von Ihnen eingegebenen personenbezogenen Daten.</p>" +
    "<p>Hierzu können insbesondere gehören:</p>" +
    "<h3>Daten des Kindes</h3>" +
    "<ul><li>Vorname,</li><li>Nachname,</li><li>Geburtsdatum.</li></ul>" +
    "<h3>Daten des Erziehungsberechtigten</h3>" +
    "<ul><li>Vorname,</li><li>Nachname,</li><li>Telefonnummer,</li><li>WhatsApp-Nummer,</li><li>E-Mail-Adresse, sofern angegeben.</li></ul>" +
    "<h3>Daten zur Organisation und Abrechnung</h3>" +
    "<ul><li>gewünschte Zahlungsart,</li><li>erforderliche Angaben zur Münsterlandkarte,</li>" +
    "<li>erforderliche Angaben im Zusammenhang mit Bildungs- und Teilhabeleistungen,</li>" +
    "<li>Angaben zur Kurs- und Gruppenzuordnung,</li><li>organisatorische Informationen zur Teilnahme.</li></ul>" +
    "<h3>Gesundheitsbezogene Angaben</h3>" +
    "<p>Soweit Sie Angaben zu Allergien oder anderen gesundheitlichen Besonderheiten Ihres Kindes machen, handelt es sich um Gesundheitsdaten und damit um eine besondere Kategorie personenbezogener Daten.</p>" +
    "<p>Gesundheitsdaten unterliegen einem erhöhten gesetzlichen Schutz nach Art. 9 DSGVO.</p>" +
    "<p>Wir verarbeiten solche Angaben nur, soweit eine hierfür geeignete gesetzliche Grundlage oder eine wirksame ausdrückliche Einwilligung besteht.</p>",

  "ds.6.title": "6. Zweck der Verarbeitung",
  "ds.6.body":
    "<p>Die Daten werden insbesondere zu folgenden Zwecken verarbeitet:</p>" +
    "<ul><li>Bearbeitung der Anmeldung,</li><li>Prüfung und Bestätigung des Kursplatzes,</li>" +
    "<li>Einteilung des Kindes in eine geeignete Gruppe,</li><li>Organisation und Durchführung des Unterrichts,</li>" +
    "<li>Kommunikation mit den Erziehungsberechtigten,</li><li>Verwaltung von Anwesenheiten und Fehlzeiten,</li>" +
    "<li>pädagogische Organisation,</li><li>Durchführung von Veranstaltungen,</li>" +
    "<li>Verwaltung und Abrechnung der Kursgebühren,</li>" +
    "<li>Bearbeitung von Münsterlandkarte und Bildungs- und Teilhabeleistungen,</li>" +
    "<li>Erfüllung gesetzlicher Pflichten,</li><li>Nachweis- und Aufbewahrungspflichten,</li>" +
    "<li>Schutz des ordnungsgemäßen Schulbetriebs.</li></ul>" +
    "<p>Eine Verwendung der Anmeldedaten zum Verkauf personenbezogener Daten oder zu fremden Werbezwecken erfolgt nicht.</p>",

  "ds.7.title": "7. Rechtsgrundlagen",
  "ds.7.body":
    "<p>Soweit die Verarbeitung für die Anbahnung, Durchführung oder Verwaltung des Teilnahmeverhältnisses erforderlich ist, erfolgt sie grundsätzlich auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO.</p>" +
    "<p>Soweit wir gesetzlich zur Verarbeitung verpflichtet sind, erfolgt die Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO.</p>" +
    "<p>Soweit die Verarbeitung zur Wahrung berechtigter Interessen des Vereins erforderlich ist und keine überwiegenden Interessen der betroffenen Personen entgegenstehen, kann Art. 6 Abs. 1 lit. f DSGVO Anwendung finden.</p>" +
    "<p>Verarbeitungen auf Grundlage einer Einwilligung erfolgen nach Art. 6 Abs. 1 lit. a DSGVO.</p>" +
    "<p>Für Gesundheitsdaten gelten zusätzlich die besonderen Voraussetzungen des Art. 9 DSGVO.</p>",

  "ds.8.title": "8. Verarbeitung über das Google-Konto der Iqraa-Schule",
  "ds.8.body":
    "<p>Für die organisatorische Verwaltung der Iqraa-Schule verwenden wir das Google-Konto der Schule.</p>" +
    "<p>Über dieses Konto können insbesondere folgende Google-Dienste genutzt werden:</p>" +
    "<ul><li>Gmail,</li><li>Google Drive,</li><li>Google Apps Script,</li>" +
    "<li>gegebenenfalls weitere für den Betrieb der Anmeldung erforderliche Google-Dienste.</li></ul>" +
    "<p>Über Gmail können Anmeldungen und organisatorische Nachrichten empfangen und bearbeitet werden.</p>" +
    "<p>Über Google Drive können interne Verwaltungsdateien gespeichert und verwaltet werden.</p>" +
    "<p>Google weist darauf hin, dass Daten bei seinen Diensten weltweit verarbeitet werden können. Für bestimmte Google-Dienste bestehen besondere Datenschutzbedingungen und Datenverarbeitungsvereinbarungen.</p>",

  "ds.9.title": "9. Speicherung der Teilnehmerdaten in Excel auf Google Drive",
  "ds.9.body":
    "<p>Die für die Organisation der Iqraa-Schule erforderlichen Teilnehmerdaten können in einer elektronischen Teilnehmerverwaltung gespeichert werden.</p>" +
    "<p>Hierfür verwenden wir unter anderem Microsoft-Excel-Dateien, die auf Google Drive des für die Iqraa-Schule verwendeten Google-Kontos gespeichert werden.</p>" +
    "<p>Dabei kann insbesondere eine Excel-Datei bzw. eine Excel-kompatible Datei folgende Informationen enthalten:</p>" +
    "<ul><li>Name des Kindes,</li><li>Geburtsdatum,</li><li>Name der Erziehungsberechtigten,</li>" +
    "<li>Telefonnummer,</li><li>WhatsApp-Nummer,</li><li>E-Mail-Adresse,</li><li>Gruppenzuordnung,</li>" +
    "<li>Anwesenheitsinformationen,</li><li>Zahlungsinformationen,</li><li>organisatorische Angaben zur Teilnahme.</li></ul>" +
    "<p>Gesundheitsdaten werden nur aufgenommen, soweit ihre Verarbeitung für einen konkreten Zweck erforderlich und rechtlich zulässig ist.</p>",

  "ds.10.title": "10. Zugriff auf die Excel-Dateien",
  "ds.10.body":
    "<p>Die Teilnehmerverwaltung wird ausschließlich für die interne Organisation der Iqraa-Schule verwendet.</p>" +
    "<p>Der Zugriff auf die Dateien ist auf Personen zu beschränken, die diese Daten aufgrund ihrer konkreten Aufgabe für die Organisation oder Durchführung des Unterrichts benötigen.</p>" +
    "<p>Die Dateien dürfen insbesondere:</p>" +
    "<ul><li>nicht öffentlich zugänglich gemacht werden,</li><li>nicht über öffentliche Freigabelinks bereitgestellt werden,</li>" +
    "<li>nicht an andere Eltern oder Schüler weitergegeben werden,</li>" +
    "<li>nicht ohne dienstliche bzw. organisatorische Notwendigkeit kopiert werden.</li></ul>" +
    "<p>Zugriffsberechtigungen sollen regelmäßig überprüft und bei Beendigung der Tätigkeit einer zugriffsberechtigten Person unverzüglich angepasst oder entzogen werden.</p>" +
    "<p>Der Verein setzt angemessene technische und organisatorische Maßnahmen zum Schutz der gespeicherten Daten ein.</p>",

  "ds.11.title": "11. Sicherheit des Google-Kontos",
  "ds.11.body":
    "<p>Das für die Schule verwendete Google-Konto ist durch geeignete Zugangssicherheitsmaßnahmen zu schützen.</p>" +
    "<p>Soweit technisch verfügbar und organisatorisch eingerichtet, soll insbesondere eine Zwei-Faktor-Authentifizierung verwendet werden.</p>" +
    "<p>Passwörter und Zugangsdaten dürfen nicht an unbefugte Personen weitergegeben werden.</p>" +
    "<p>Personen, die Zugriff auf das Konto oder die Teilnehmerverwaltung haben, dürfen die Daten nur für die vorgesehenen schulischen und organisatorischen Zwecke verwenden.</p>",

  "ds.12.title": "12. Verarbeitung über Gmail und Google Apps Script",
  "ds.12.body":
    "<p>Die über das Online-Anmeldeformular eingegebenen Daten können technisch über Google Apps Script verarbeitet und an das für die Schule verwendete Gmail-Postfach übermittelt werden.</p>" +
    "<p>Nach Eingang der Anmeldung können die erforderlichen Daten zur weiteren Bearbeitung in die interne Teilnehmerverwaltung übernommen werden.</p>" +
    "<p>Soweit hierfür Google-Dienste eingesetzt werden, kann Google personenbezogene Daten im Rahmen der jeweiligen Dienste verarbeiten.</p>" +
    "<p>Die konkrete Verarbeitung richtet sich nach den von uns eingesetzten Google-Diensten und deren jeweils geltenden Bedingungen.</p>",

  "ds.13.title": "13. Google Drive und mögliche Drittlandverarbeitung",
  "ds.13.body":
    "<p>Google betreibt Dienste und technische Infrastruktur weltweit. Eine Verarbeitung personenbezogener Daten außerhalb des Europäischen Wirtschaftsraums kann daher nicht vollständig ausgeschlossen werden.</p>" +
    "<p>Für internationale Datenübermittlungen gelten die gesetzlichen Anforderungen der Art. 44 ff. DSGVO.</p>" +
    "<p>Google stellt für bestimmte Cloud-Dienste Datenschutzvereinbarungen und Regelungen für internationale Datenübermittlungen bereit.</p>",

  "ds.14.title": "14. Kommunikation über WhatsApp",
  "ds.14.body":
    "<p>Die Schule kann die von den Erziehungsberechtigten angegebenen Telefonnummern bzw. WhatsApp-Nummern zur organisatorischen Kommunikation verwenden.</p>" +
    "<p>WhatsApp kann insbesondere für folgende Zwecke eingesetzt werden:</p>" +
    "<ul><li>Mitteilung von Unterrichtsterminen,</li><li>Informationen zu Unterrichtsausfällen,</li>" +
    "<li>organisatorische Rückfragen,</li><li>Informationen zu Veranstaltungen,</li>" +
    "<li>Kommunikation über Hausaufgaben,</li><li>sonstige Informationen zum Schulbetrieb.</li></ul>" +
    "<p>Soweit eine Kommunikation über WhatsApp nicht zwingend erforderlich ist, kann alternativ insbesondere per E-Mail kommuniziert werden.</p>",

  "ds.15.title": "15. WhatsApp-Gruppen",
  "ds.15.body":
    "<p>Für einzelne Klassen oder Lerngruppen können WhatsApp-Gruppen eingerichtet werden.</p>" +
    "<p>Bei einer Teilnahme an einer solchen Gruppe kann insbesondere die Telefonnummer eines Teilnehmers für andere Mitglieder der Gruppe sichtbar werden.</p>" +
    "<p>Die Teilnahme an einer solchen Gruppe erfolgt deshalb grundsätzlich freiwillig, soweit sie nicht zwingend für die Durchführung des Vertrags erforderlich ist.</p>" +
    "<p>Für wesentliche Informationen soll eine alternative Kommunikationsmöglichkeit zur Verfügung stehen.</p>" +
    "<p>In WhatsApp-Gruppen sollen insbesondere keine Informationen über Allergien, Krankheiten oder sonstige besonders geschützte persönliche Umstände einzelner Kinder veröffentlicht werden.</p>",

  "ds.16.title": "16. Gesundheitsdaten und Allergien",
  "ds.16.body":
    "<p>Angaben zu Allergien und sonstigen gesundheitlichen Besonderheiten werden nur verarbeitet, wenn sie für die sichere Teilnahme des Kindes am Unterricht oder an einer Veranstaltung erforderlich sind oder eine andere rechtliche Grundlage für die Verarbeitung besteht.</p>" +
    "<p>Gesundheitsdaten werden besonders geschützt.</p>" +
    "<p>Der Zugriff soll auf diejenigen Personen beschränkt werden, die diese Informationen tatsächlich benötigen, um die Sicherheit und Betreuung des Kindes zu gewährleisten.</p>" +
    "<p>Soweit die Verarbeitung auf einer ausdrücklichen Einwilligung beruht, kann diese jederzeit mit Wirkung für die Zukunft widerrufen werden.</p>" +
    "<p>Die Rechtmäßigkeit der Verarbeitung bis zum Zeitpunkt des Widerrufs bleibt unberührt.</p>",

  "ds.17.title": "17. Münsterlandkarte und Bildungs- und Teilhabeleistungen",
  "ds.17.body":
    "<p>Soweit die Münsterlandkarte oder Leistungen des Bildungs- und Teilhabepakets genutzt werden, verarbeiten wir nur die hierfür erforderlichen Angaben und Nachweise.</p>" +
    "<p>Soweit Daten zur Prüfung oder Abrechnung an zuständige Stellen übermittelt werden müssen, erfolgt dies nur im erforderlichen Umfang und auf Grundlage der jeweils einschlägigen gesetzlichen Vorschriften.</p>" +
    "<p>Eine vollständige Kopie eines Ausweisdokuments oder einer Karte wird nur gespeichert, wenn dies für den jeweiligen Zweck tatsächlich erforderlich und rechtlich zulässig ist.</p>",

  "ds.18.title": "18. Fotos und Bildaufnahmen",
  "ds.18.body":
    "<p>Während des Unterrichts und bei schulischen Aktivitäten können Fotos aufgenommen werden.</p>" +
    "<p>Eine Veröffentlichung identifizierbarer Fotos eines Kindes erfolgt grundsätzlich nur auf Grundlage einer entsprechenden Einwilligung, soweit eine solche erforderlich ist.</p>" +
    "<p>Mögliche Veröffentlichungsorte können insbesondere sein:</p>" +
    "<ul><li>Website des Vereins,</li><li>Social-Media-Auftritte des Vereins,</li><li>Vereins- oder Schulmaterialien.</li></ul>" +
    "<p>Die Fotoeinwilligung ist freiwillig.</p>" +
    "<p>Die Teilnahme am regulären Unterricht wird nicht davon abhängig gemacht, dass die Einwilligung erteilt wird.</p>" +
    "<p>Eine erteilte Einwilligung kann jederzeit mit Wirkung für die Zukunft widerrufen werden.</p>",

  "ds.19.title": "19. Empfänger personenbezogener Daten",
  "ds.19.body":
    "<p>Innerhalb des Vereins erhalten personenbezogene Daten nur diejenigen Personen, die diese Daten für ihre jeweilige Aufgabe benötigen.</p>" +
    "<p>Je nach konkreter Verarbeitung können personenbezogene Daten insbesondere verarbeitet werden durch:</p>" +
    "<ul><li>technische Hostinganbieter,</li><li>Google-Dienste,</li><li>Anbieter des Anmeldeverfahrens,</li>" +
    "<li>E-Mail-Dienste,</li><li>Cloud-Speicherdienste,</li><li>Kommunikationsdienste,</li>" +
    "<li>zuständige Stellen im Zusammenhang mit Bildungs- und Teilhabeleistungen.</li></ul>" +
    "<p>Eine Weitergabe an sonstige Dritte erfolgt nur, wenn hierfür eine gesetzliche Grundlage besteht, die Weitergabe zur Durchführung des Teilnahmeverhältnisses erforderlich ist oder eine wirksame Einwilligung vorliegt.</p>",

  "ds.20.title": "20. Speicherdauer",
  "ds.20.body":
    "<p>Wir speichern personenbezogene Daten nur so lange, wie dies für den jeweiligen Zweck erforderlich ist.</p>" +
    "<p>Anmeldedaten werden grundsätzlich während der Teilnahme des Kindes an der Iqraa-Schule verarbeitet.</p>" +
    "<p>Nach Beendigung der Teilnahme werden die Daten gelöscht, sobald sie für die Organisation und Durchführung des Unterrichts nicht mehr benötigt werden und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.</p>" +
    "<p>Soweit gesetzliche Aufbewahrungspflichten bestehen, werden die betreffenden Daten für die gesetzlich vorgeschriebene Dauer aufbewahrt.</p>" +
    "<p>Gesundheitsdaten werden gelöscht, sobald der Zweck ihrer Verarbeitung entfällt, soweit keine andere gesetzliche Grundlage eine weitere Speicherung erlaubt oder erfordert.</p>",

  "ds.21.title": "21. Technische und organisatorische Maßnahmen",
  "ds.21.body":
    "<p>Wir treffen angemessene technische und organisatorische Maßnahmen zum Schutz personenbezogener Daten.</p>" +
    "<p>Hierzu gehören insbesondere:</p>" +
    "<ul><li>Beschränkung der Zugriffsrechte,</li><li>Passwortschutz,</li><li>Sicherung des Google-Kontos,</li>" +
    "<li>möglichst Verwendung einer Zwei-Faktor-Authentifizierung,</li><li>vertraulicher Umgang mit Zugangsdaten,</li>" +
    "<li>Schutz elektronischer Teilnehmerlisten,</li><li>Vermeidung unnötiger Datenkopien,</li>" +
    "<li>regelmäßige Überprüfung der Zugriffsberechtigungen,</li><li>Löschung nicht mehr benötigter Daten.</li></ul>",

  "ds.22.title": "22. Ihre Rechte",
  "ds.22.body":
    "<p>Betroffene Personen haben nach Maßgabe der gesetzlichen Vorschriften insbesondere folgende Rechte:</p>" +
    "<h3>Recht auf Auskunft</h3>" +
    "<p>Sie können Auskunft darüber verlangen, ob und welche personenbezogenen Daten über Sie verarbeitet werden.</p>" +
    "<h3>Recht auf Berichtigung</h3>" +
    "<p>Sie können die Berichtigung unrichtiger oder die Vervollständigung unvollständiger personenbezogener Daten verlangen.</p>" +
    "<h3>Recht auf Löschung</h3>" +
    "<p>Sie können unter den gesetzlichen Voraussetzungen die Löschung personenbezogener Daten verlangen.</p>" +
    "<h3>Recht auf Einschränkung</h3>" +
    "<p>Sie können unter den gesetzlichen Voraussetzungen die Einschränkung der Verarbeitung verlangen.</p>" +
    "<h3>Recht auf Datenübertragbarkeit</h3>" +
    "<p>Sie haben unter den gesetzlichen Voraussetzungen das Recht, personenbezogene Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten.</p>" +
    "<h3>Recht auf Widerspruch</h3>" +
    "<p>Sie können unter den gesetzlichen Voraussetzungen gegen bestimmte Verarbeitungen Widerspruch einlegen.</p>" +
    "<h3>Widerruf von Einwilligungen</h3>" +
    "<p>Soweit eine Verarbeitung auf Ihrer Einwilligung beruht, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen.</p>" +
    "<p>Die Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung bleibt unberührt.</p>",
  "ds.22.kontakt": "Zur Ausübung Ihrer Rechte genügt eine Mitteilung an:",

  "ds.23.title": "23. Beschwerderecht bei einer Aufsichtsbehörde",
  "ds.23.body":
    "<p>Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten zu beschweren.</p>" +
    "<p>Zuständige Aufsichtsbehörde für Nordrhein-Westfalen ist insbesondere:</p>" +
    "<p><strong>Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen (LDI NRW)</strong><br>Kavalleriestraße 2–4<br>40213 Düsseldorf</p>",

  "ds.24.title": "24. Keine automatisierte Entscheidungsfindung",
  "ds.24.body":
    "<p>Eine automatisierte Entscheidungsfindung einschließlich Profiling im Sinne von Art. 22 DSGVO findet im Rahmen der Anmeldung und Organisation der Iqraa-Schule nicht statt.</p>",

  "ds.25.title": "25. Aktualisierung dieser Datenschutzerklärung",
  "ds.25.body":
    "<p>Wir können diese Datenschutzerklärung anpassen, wenn sich unsere technischen Verfahren, eingesetzten Dienstleister, organisatorischen Abläufe oder gesetzlichen Anforderungen ändern.</p>" +
    "<p>Es gilt jeweils die auf unserer Website veröffentlichte aktuelle Fassung.</p>",

  "ds.26.title": "26. Schriftarten",
  "ds.26.body":
    "<p>Die auf dieser Seite verwendeten Schriften werden von unserem eigenen Server geladen. Es wird keine Verbindung zu Google Fonts aufgebaut, und es werden dabei keine Daten an Dritte übertragen.</p>",

  "ds.27.title": "27. Cookies und Reichweitenmessung",
  "ds.27.body":
    "<p>Diese Seite setzt keine Cookies und verwendet keine Analyse- oder Trackingdienste. Ihre Sprachauswahl wird ausschließlich lokal in Ihrem Browser gespeichert (localStorage) und nicht an uns übertragen.</p>",

  /* -------------------------------------------------------------------- AGB */
  /* ------------------------------------------------------- Kündigungsseite
     Aufbau und Beschriftung folgen § 312k BGB: Art der Kündigung, Grund bei
     der außerordentlichen, Bezeichnung des Vertrags, eindeutige Zuordnung
     der Person, Zeitpunkt der Beendigung, Kontaktdaten für die Bestätigung. */
  "doc.kuendigung.title": "Teilnahme kündigen — Iqraa-Schule Beckum",
  "doc.kuendigung.desc": "Kündigung der Teilnahme an den Arabischkursen der Iqraa-Schule Beckum.",

  "kd.title": "Teilnahme kündigen",
  "kd.intro": "Mit diesem Formular können Sie die Teilnahme Ihres Kindes an den Arabischkursen der Iqraa-Schule kündigen. Sie brauchen dafür keine Anmeldung und kein Passwort.",
  "kd.fristen": "Zu den Laufzeiten und Fristen siehe § 3 der Teilnahmebedingungen: Die Teilnahme läuft zunächst für ein Schulhalbjahr. Wird sie nicht spätestens vier Wochen vor dessen Ablauf gekündigt, verlängert sie sich auf unbestimmte Zeit und kann danach jederzeit mit einer Frist von einem Monat gekündigt werden.",

  "kd.art.legend": "Art der Kündigung",
  "kd.art.frage": "Wie möchten Sie kündigen?",
  "kd.art.ordentlich": "Ordentliche Kündigung",
  "kd.art.ordentlichSub": "zum nächstmöglichen Zeitpunkt nach den Fristen in § 3",
  "kd.art.ausser": "Außerordentliche Kündigung aus wichtigem Grund",
  "kd.art.ausserSub": "ohne Einhaltung einer Frist, mit Angabe des Grundes",
  "kd.grund": "Grund der außerordentlichen Kündigung",
  "kd.grundHint": "Nur bei einer außerordentlichen Kündigung nötig.",

  "kd.vertrag.legend": "Um welche Teilnahme geht es?",
  "kd.person.legend": "Wer kündigt?",
  "kd.kontakt.legend": "Wohin sollen wir die Bestätigung schicken?",
  "kd.kontaktHint": "Wir bestätigen Ihnen den Eingang der Kündigung unverzüglich in Textform — mit Datum, Uhrzeit und dem Zeitpunkt, zu dem die Teilnahme endet.",

  "kd.zeitpunkt.frage": "Zu welchem Zeitpunkt soll die Teilnahme enden?",
  "kd.zeitpunkt.naechst": "Zum nächstmöglichen Zeitpunkt",
  "kd.zeitpunkt.datum": "Zu einem bestimmten Datum",
  "kd.zeitpunkt.datumLabel": "Gewünschtes Datum",

  "kd.submit": "Jetzt kündigen",
  "kd.speichern": "Bitte drucken Sie diese Seite aus oder speichern Sie sie, bevor Sie absenden — so haben Sie Ihre Erklärung mit Datum und Uhrzeit als Nachweis.",
  "kd.erfolg.title": "Ihre Kündigung ist bei uns eingegangen",
  "kd.erfolg.text": "Vielen Dank. Wir haben Ihre Kündigung aufgenommen und schicken Ihnen die Bestätigung an die angegebene E-Mail-Adresse.",
  "kd.fehler.title": "Das Absenden hat nicht geklappt",
  "kd.fehler.text": "Ihre Eingaben stehen noch im Formular. Sie können es gleich noch einmal versuchen. Eine Kündigung ist auch formlos per E-Mail oder über WhatsApp wirksam:",
  "kd.fehler.mail": "Kündigung per E-Mail senden",

  "doc.agb.desc": "Allgemeine Geschäftsbedingungen und Teilnahmebedingungen der Iqraa-Schule, Arabisch-Deutscher-Verein e.V. Beckum.",

  "agb.title": "Allgemeine Geschäftsbedingungen und Teilnahmebedingungen",
  "agb.untertitel": "Iqraa-Schule des Arabisch-Deutschen-Vereins e.V. Beckum",
  "agb.stand": "Stand:",

  "agb.1.title": "1. Geltungsbereich",
  "agb.1.body":
    "<p>Diese Allgemeinen Geschäftsbedingungen und Teilnahmebedingungen gelten für die Teilnahme an den von der Iqraa-Schule des Arabisch-Deutschen-Vereins e.V. Beckum angebotenen Arabischkursen sowie für damit verbundene schulische, pädagogische und organisatorische Aktivitäten.</p>" +
    "<p>Sie gelten gegenüber dem jeweiligen gesetzlichen Vertreter des minderjährigen Schülers, der die Anmeldung vornimmt.</p>" +
    "<p>Mit der Anmeldung erklärt der gesetzliche Vertreter, diese Teilnahmebedingungen gelesen und zur Kenntnis genommen zu haben.</p>" +
    "<p>Zwingende gesetzliche Rechte des Schülers oder seiner gesetzlichen Vertreter bleiben unberührt.</p>",

  "agb.2.title": "2. Anmeldung und Aufnahme",
  "agb.2.body":
    "<p>Die Anmeldung erfolgt grundsätzlich über das auf der Website der Iqraa-Schule bereitgestellte Anmeldeformular.</p>" +
    "<p>Die bei der Anmeldung gemachten Angaben müssen vollständig, richtig und aktuell sein. Insbesondere sind Vor- und Nachname des Kindes entsprechend den Angaben in einem amtlichen Dokument einzutragen.</p>" +
    "<p>Das Absenden des Anmeldeformulars stellt zunächst eine Anfrage bzw. einen Antrag auf Aufnahme in die betreffende Unterrichtsgruppe dar. Durch das bloße Absenden des Formulars besteht noch kein Anspruch auf einen bestimmten Kursplatz.</p>" +
    "<p>Nach Eingang der Anmeldung prüft die Schule die Angaben, die verfügbaren Plätze und die organisatorischen Voraussetzungen.</p>" +
    "<p>Die Teilnahme gilt erst dann als bestätigt, wenn die Schule die Aufnahme gegenüber dem gesetzlichen Vertreter bestätigt oder dem Schüler einen konkreten Kursplatz zuweist.</p>" +
    "<p>Die Bestätigung kann insbesondere über WhatsApp oder E-Mail erfolgen.</p>",

  "agb.3.title": "3. Laufzeit, Verlängerung und Kündigung",
  "agb.3.body":
    "<p>Die Teilnahme wird zunächst für ein Schulhalbjahr vereinbart. Die Schulhalbjahre richten sich nach den für Nordrhein-Westfalen geltenden Terminen.</p>" +
    "<p>Wird die Teilnahme nicht spätestens vier Wochen vor Ablauf des Halbjahres gekündigt, verlängert sie sich auf unbestimmte Zeit.</p>" +
    "<p>Die auf unbestimmte Zeit verlängerte Teilnahme kann von beiden Seiten jederzeit mit einer Frist von einem Monat gekündigt werden. Eine erneute Anmeldung ist für die Fortsetzung nicht erforderlich.</p>" +
    "<p>Die Kündigung bedarf der Textform. Sie kann insbesondere per E-Mail, über WhatsApp oder über die <a href=\"kuendigung.html\" data-keep-lang=\"kuendigung.html\">Kündigungsseite dieser Website</a> erklärt werden.</p>" +
    "<p>Der Zugang einer Kündigung wird unverzüglich in Textform bestätigt. Die Bestätigung nennt den Inhalt der Kündigung, das Datum und die Uhrzeit des Zugangs sowie den Zeitpunkt, zu dem die Teilnahme endet.</p>" +
    "<p>Das Recht beider Seiten zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt; hierzu gilt § 25 dieser Teilnahmebedingungen.</p>",

  "agb.4.title": "4. Widerrufsrecht für Verbraucher",
  "agb.4.body":
    "<p>Erziehungsberechtigte, die den Vertrag zu einem Zweck schließen, der weder ihrer gewerblichen noch ihrer selbständigen beruflichen Tätigkeit zugerechnet werden kann, sind Verbraucher. Für sie gilt das folgende Widerrufsrecht.</p>" +
    "<h3>Widerrufsbelehrung</h3>" +
    "<p><strong>Widerrufsrecht</strong></p>" +
    "<p>Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen.</p>" +
    "<p>Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsschlusses.</p>" +
    "<p>Um Ihr Widerrufsrecht auszuüben, müssen Sie uns</p>" +
    "<p><span data-cfg=\"impressum.verein\">Arabisch-Deutscher-Verein e.V. Beckum</span><br>" +
    "<span data-cfg=\"impressum.anschrift\">Nordwall 14, 59269 Beckum</span><br>" +
    "Telefon: <span class=\"ltr\" data-cfg=\"telefon\">0177 5883033</span><br>" +
    "E-Mail: <span class=\"ltr\" data-cfg=\"email\">iqraaschulebeckum@gmail.com</span></p>" +
    "<p>mittels einer eindeutigen Erklärung (z. B. ein mit der Post versandter Brief oder eine E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren. Sie können dafür das in § 5 abgedruckte Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist.</p>" +
    "<p>Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.</p>" +
    "<p><strong>Folgen des Widerrufs</strong></p>" +
    "<p>Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns eingegangen ist. Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde ausdrücklich etwas anderes vereinbart; in keinem Fall werden Ihnen wegen dieser Rückzahlung Entgelte berechnet.</p>" +
    "<p>Haben Sie verlangt, dass die Dienstleistungen während der Widerrufsfrist beginnen sollen, so haben Sie uns einen angemessenen Betrag zu zahlen, der dem Anteil der bis zu dem Zeitpunkt, zu dem Sie uns von der Ausübung des Widerrufsrechts hinsichtlich dieses Vertrags unterrichten, bereits erbrachten Dienstleistungen im Vergleich zum Gesamtumfang der im Vertrag vorgesehenen Dienstleistungen entspricht.</p>" +
    "<p><strong>Erlöschen des Widerrufsrechts</strong></p>" +
    "<p>Ihr Widerrufsrecht erlischt bei einem Vertrag über die Erbringung von Dienstleistungen, wenn wir die Dienstleistung vollständig erbracht haben und mit der Ausführung der Dienstleistung erst begonnen haben, nachdem Sie dazu Ihre ausdrückliche Zustimmung gegeben und gleichzeitig Ihre Kenntnis davon bestätigt haben, dass Sie Ihr Widerrufsrecht bei vollständiger Vertragserfüllung durch uns verlieren.</p>" +
    "<h3>Beginn des Unterrichts während der Widerrufsfrist</h3>" +
    "<p>Bei der Anmeldung können Sie ausdrücklich verlangen, dass der Unterricht bereits vor Ablauf der Widerrufsfrist beginnt. Diese Erklärung ist freiwillig.</p>" +
    "<p>Machen Sie davon keinen Gebrauch, kann Ihr Kind erst nach Ablauf der Widerrufsfrist am Unterricht teilnehmen. Ein Nachteil entsteht Ihnen dadurch nicht; die Kursgebühr wird in diesem Fall entsprechend angepasst.</p>",

  "agb.5.title": "5. Muster-Widerrufsformular",
  "agb.5.body":
    "<p>Wenn Sie den Vertrag widerrufen wollen, können Sie dieses Formular ausfüllen und an uns zurücksenden. Vorgeschrieben ist das nicht — eine formlose eindeutige Erklärung genügt.</p>" +
    "<blockquote>" +
    "<p>An <span data-cfg=\"impressum.verein\">Arabisch-Deutscher-Verein e.V. Beckum</span>, " +
    "<span data-cfg=\"impressum.anschrift\">Nordwall 14, 59269 Beckum</span>, " +
    "E-Mail: <span class=\"ltr\" data-cfg=\"email\">iqraaschulebeckum@gmail.com</span></p>" +
    "<p>Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über die Erbringung der folgenden Dienstleistung: Teilnahme an den Arabischkursen der Iqraa-Schule.</p>" +
    "<p>Name des Kindes: _______________________<br>" +
    "Bestellt am (*) / erhalten am (*): _______________________<br>" +
    "Name des/der Verbraucher(s): _______________________<br>" +
    "Anschrift des/der Verbraucher(s): _______________________<br>" +
    "Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier): _______________________<br>" +
    "Datum: _______________________</p>" +
    "<p>(*) Unzutreffendes streichen.</p>" +
    "</blockquote>",

  "agb.6.title": "6. Alter, Lernstand und Gruppeneinteilung",
  "agb.6.body":
    "<p>Die Iqraa-Schule nimmt Schüler verschiedener Altersgruppen und unterschiedlicher Lernstände auf, soweit entsprechende Gruppen angeboten werden.</p>" +
    "<p>Die Einteilung erfolgt insbesondere unter Berücksichtigung:</p>" +
    "<ul><li>des Alters,</li><li>der vorhandenen Arabischkenntnisse,</li><li>des Lernstands,</li>" +
    "<li>der pädagogischen Bedürfnisse,</li><li>der Gruppengröße,</li><li>der vorhandenen Kursplätze.</li></ul>" +
    "<p>Ein Anspruch auf eine bestimmte Gruppe oder einen bestimmten Unterrichtstag besteht nur, wenn dies ausdrücklich bestätigt wurde.</p>" +
    "<p>Die Schule ist berechtigt, einen Schüler nach pädagogischer Einschätzung einer anderen Gruppe zuzuweisen, wenn sein Lernstand oder seine pädagogischen Bedürfnisse eine andere Gruppenzuordnung sinnvoll erscheinen lassen.</p>" +
    "<p>Die Erziehungsberechtigten werden über eine wesentliche Änderung der Gruppenzuordnung informiert.</p>",

  "agb.7.title": "7. Unterrichtszeiten und Pünktlichkeit",
  "agb.7.body":
    "<p>Die jeweils mitgeteilten Unterrichtszeiten sind einzuhalten.</p>" +
    "<p>Die Schüler sollen rechtzeitig vor Beginn des Unterrichts erscheinen.</p>" +
    "<p>Wiederholtes Zuspätkommen kann den Lernerfolg des betroffenen Schülers und den Unterricht der gesamten Gruppe beeinträchtigen.</p>" +
    "<p>Bei wiederholtem Zuspätkommen kann die Schule den gesetzlichen Vertreter kontaktieren und auf eine Verbesserung hinwirken.</p>",

  "agb.8.title": "8. Anwesenheit und Fehlzeiten",
  "agb.8.body":
    "<p>Die regelmäßige Teilnahme am Unterricht ist Voraussetzung für einen sinnvollen Lernfortschritt.</p>" +
    "<p>Kann ein Schüler nicht am Unterricht teilnehmen, soll der gesetzliche Vertreter die Schule möglichst frühzeitig informieren.</p>" +
    "<p>Eine Mitteilung über eine geplante Abwesenheit soll grundsätzlich spätestens zwei Stunden vor Unterrichtsbeginn erfolgen, soweit dies möglich und zumutbar ist.</p>" +
    "<p>Bei Krankheit oder einem unvorhersehbaren Ereignis ist die Schule unverzüglich nach Kenntnis der Verhinderung zu informieren.</p>" +
    "<p>Eine Mitteilung über eine Abwesenheit begründet grundsätzlich keinen Anspruch auf Nachholung der versäumten Unterrichtsstunde oder auf eine anteilige Rückerstattung der Kursgebühr.</p>" +
    "<p>Bei wiederholtem unentschuldigtem Fehlen kann die Schule zunächst Kontakt mit den Erziehungsberechtigten aufnehmen und auf die regelmäßige Teilnahme hinweisen.</p>" +
    "<p>Bei drei wiederholten unentschuldigten Fehlzeiten kann die Schule nach vorheriger Kontaktaufnahme mit dem gesetzlichen Vertreter die Teilnahme des Schülers beenden, wenn die Fehlzeiten den Unterrichtsablauf oder die Organisation der Gruppe erheblich beeinträchtigen.</p>" +
    "<p>Bereits entstandene gesetzliche Zahlungsansprüche bleiben hiervon unberührt.</p>",

  "agb.9.title": "9. Kursgebühren und Zahlungsarten",
  "agb.9.body":
    "<p>Die Höhe der Kursgebühren ergibt sich aus den zum Zeitpunkt der Anmeldung bzw. Aufnahme mitgeteilten Preisen.</p>" +
    "<p>Je nach Kurs und organisatorischer Möglichkeit können insbesondere folgende Zahlungsarten angeboten werden:</p>" +
    "<ul><li>Barzahlung,</li><li>Münsterlandkarte,</li><li>Bildungs- und Teilhabeleistungen (BuT).</li></ul>" +
    "<p>Die jeweils verfügbaren Zahlungsarten werden bei der Anmeldung bzw. nach Prüfung der Anmeldung mitgeteilt.</p>",

  "agb.10.title": "10. Barzahlung",
  "agb.10.body":
    "<p>Bei vereinbarter Barzahlung ist die Kursgebühr zu dem von der Schule mitgeteilten Termin zu entrichten.</p>" +
    "<p>Nach erfolgter Zahlung kann eine Quittung bzw. Zahlungsbestätigung ausgestellt werden.</p>",

  "agb.11.title": "11. Münsterlandkarte und Bildungs- und Teilhabeleistungen",
  "agb.11.body":
    "<p>Bei einer Finanzierung über die Münsterlandkarte oder das Bildungs- und Teilhabepaket sind die für die Abrechnung erforderlichen Nachweise und Angaben rechtzeitig bereitzustellen.</p>" +
    "<p>Die Schule ist berechtigt, die für die Abrechnung erforderlichen Daten zu prüfen und an die hierfür zuständigen Stellen zu übermitteln, soweit dies rechtlich zulässig und erforderlich ist.</p>" +
    "<p>Die Schule soll dabei grundsätzlich nur diejenigen Informationen erheben und speichern, die für die jeweilige Prüfung und Abrechnung erforderlich sind.</p>" +
    "<p>Die Aufnahme bzw. endgültige Bestätigung des Kursplatzes kann davon abhängig sein, dass die Finanzierung bzw. Kostenübernahme tatsächlich gewährleistet ist.</p>",

  "agb.12.title": "12. Bücher und Unterrichtsmaterialien",
  "agb.12.body":
    "<p>Die für den regulären Unterricht vorgesehenen Grundmaterialien bzw. Bücher sind in der Kursgebühr enthalten, soweit dies bei der Anmeldung oder Kursbeschreibung angegeben wurde.</p>" +
    "<p>Für zusätzliche Materialien, Arbeitshefte, besondere Projekte oder sonstige nicht enthaltene Leistungen können zusätzliche Kosten entstehen.</p>" +
    "<p>Über zusätzliche Kosten werden die Erziehungsberechtigten grundsätzlich vorher informiert.</p>",

  "agb.13.title": "13. Aktivitäten und Veranstaltungen",
  "agb.13.body":
    "<p>Die Iqraa-Schule kann neben dem regulären Unterricht pädagogische, kulturelle oder gemeinschaftliche Aktivitäten und Veranstaltungen anbieten.</p>" +
    "<p>Einzelne Aktivitäten können kostenlos angeboten werden.</p>" +
    "<p>Für bestimmte Aktivitäten können zusätzliche Kosten oder ein Kostenbeitrag entstehen.</p>" +
    "<p>Die Erziehungsberechtigten werden vor einer kostenpflichtigen Aktivität über die hierfür entstehenden Kosten informiert.</p>",

  "agb.14.title": "14. Verhalten und gegenseitiger Respekt",
  "agb.14.body":
    "<p>Alle Schüler sind verpflichtet, sich gegenüber Lehrkräften, Mitschülern und sonstigen an der Durchführung des Unterrichts beteiligten Personen respektvoll zu verhalten.</p>" +
    "<p>Insbesondere nicht gestattet sind:</p>" +
    "<ul><li>körperliche Gewalt,</li><li>Bedrohungen,</li><li>Beleidigungen,</li><li>Mobbing,</li>" +
    "<li>wiederholte erhebliche Störungen des Unterrichts,</li><li>mutwillige Beschädigung von Eigentum,</li>" +
    "<li>erheblich respektloses oder diskriminierendes Verhalten.</li></ul>" +
    "<p>Bei Verstößen wird grundsätzlich zunächst pädagogisch angemessen reagiert.</p>" +
    "<p>Je nach Art und Schwere des Verstoßes kann die Schule den Schüler verwarnen und die Erziehungsberechtigten informieren.</p>" +
    "<p>Bei wiederholten oder schwerwiegenden Verstößen kann die Schule weitere angemessene Maßnahmen ergreifen.</p>" +
    "<p>Hierzu kann nach angemessener Prüfung und – soweit zumutbar – vorheriger Abmahnung auch die Beendigung der Teilnahme gehören.</p>" +
    "<p>Bei besonders schwerwiegendem Fehlverhalten kann eine sofortige Beendigung aus wichtigem Grund in Betracht kommen.</p>",

  "agb.15.title": "15. Zusammenarbeit zwischen Eltern und Schule",
  "agb.15.body":
    "<p>Die Erziehungsberechtigten werden gebeten, den Lernprozess ihres Kindes angemessen zu begleiten.</p>" +
    "<p>Dazu gehört insbesondere:</p>" +
    "<ul><li>die regelmäßige Teilnahme zu fördern,</li><li>auf die Erledigung von Hausaufgaben hinzuwirken,</li>" +
    "<li>Mitteilungen der Lehrkräfte zu beachten,</li><li>wichtige Informationen über das Kind mitzuteilen,</li>" +
    "<li>bei schulischen Schwierigkeiten mit der Schule zusammenzuarbeiten.</li></ul>" +
    "<p>Bei erheblich mangelnder Zusammenarbeit wird die Schule zunächst das Gespräch mit den Erziehungsberechtigten suchen.</p>" +
    "<p>Nach zwei angemessenen Hinweisen kann die Schule weitere Maßnahmen ergreifen, wenn die fehlende Zusammenarbeit den Lernerfolg des Kindes oder den Unterricht der Gruppe erheblich beeinträchtigt.</p>" +
    "<p>In einem solchen Fall kann nach vorheriger angemessener Abmahnung auch die Beendigung der Teilnahme erfolgen.</p>",

  "agb.16.title": "16. Änderung der Gruppe oder des Leistungsniveaus",
  "agb.16.body":
    "<p>Die Schule kann einen Schüler nach pädagogischer Einschätzung in eine andere Gruppe oder ein anderes Leistungsniveau einordnen.</p>" +
    "<p>Dies kann insbesondere erfolgen, wenn sich herausstellt, dass:</p>" +
    "<ul><li>der Schüler unter- oder überfordert ist,</li><li>sein Lernstand besser zu einer anderen Gruppe passt,</li>" +
    "<li>die Gruppenzusammensetzung eine Änderung erfordert,</li><li>pädagogische Gründe eine andere Einteilung sinnvoll machen.</li></ul>" +
    "<p>Ziel ist es, dem Schüler eine möglichst geeignete Lernumgebung zu ermöglichen.</p>",

  "agb.17.title": "17. Änderungen von Unterrichtszeiten, Gruppen oder Lehrkräften",
  "agb.17.body":
    "<p>Aus organisatorischen, pädagogischen oder personellen Gründen kann es erforderlich sein, Unterrichtszeiten, Gruppen oder Lehrkräfte zu ändern.</p>" +
    "<p>Die Schule informiert die Erziehungsberechtigten über wesentliche Änderungen möglichst frühzeitig.</p>" +
    "<p>Ein Anspruch auf eine bestimmte Lehrkraft, einen bestimmten Raum oder eine bestimmte Gruppenzusammensetzung besteht grundsätzlich nicht, sofern dies nicht ausdrücklich zugesagt wurde.</p>",

  "agb.18.title": "18. Ausfall von Unterricht",
  "agb.18.body":
    "<p>Kann eine Unterrichtsstunde aufgrund von Umständen, die die Schule nicht oder nicht rechtzeitig beeinflussen kann, nicht stattfinden, werden die Erziehungsberechtigten möglichst frühzeitig informiert.</p>" +
    "<p>Hierzu können insbesondere gehören:</p>" +
    "<ul><li>Erkrankung einer Lehrkraft,</li><li>behördliche Maßnahmen,</li><li>Unbenutzbarkeit der Unterrichtsräume,</li>" +
    "<li>technische oder organisatorische Störungen,</li><li>außergewöhnliche Ereignisse,</li><li>sonstige Fälle höherer Gewalt.</li></ul>" +
    "<p>Die Schule bemüht sich, abhängig von den Umständen einen Ersatztermin oder eine andere angemessene Lösung anzubieten.</p>" +
    "<p>Gesetzliche Ansprüche bleiben unberührt.</p>",

  "agb.19.title": "19. Verantwortung für persönliche Gegenstände",
  "agb.19.body":
    "<p>Für persönliche Gegenstände, die Schüler zum Unterricht mitbringen, sind grundsätzlich die Schüler bzw. deren gesetzliche Vertreter verantwortlich.</p>" +
    "<p>Wertvolle oder für den Unterricht nicht erforderliche Gegenstände sollten nicht mitgebracht werden.</p>" +
    "<p>Eine Haftung der Schule richtet sich ausschließlich nach den gesetzlichen Vorschriften.</p>",

  "agb.20.title": "20. Angaben über das Kind",
  "agb.20.body":
    "<p>Die Erziehungsberechtigten sind dafür verantwortlich, dass die bei der Anmeldung gemachten Angaben richtig und aktuell sind.</p>" +
    "<p>Änderungen der Kontaktdaten, insbesondere Telefonnummer, WhatsApp-Nummer oder E-Mail-Adresse, sind der Schule möglichst zeitnah mitzuteilen.</p>" +
    "<p>Die Erziehungsberechtigten sollen die Schule außerdem über solche Umstände informieren, die für die sichere Teilnahme des Kindes am Unterricht oder an Veranstaltungen von Bedeutung sind.</p>" +
    "<p>Gesundheitsbezogene Informationen werden ausschließlich nach Maßgabe der Datenschutzerklärung und der geltenden Datenschutzvorschriften verarbeitet.</p>",

  "agb.21.title": "21. Kommunikation mit den Erziehungsberechtigten",
  "agb.21.body":
    "<p>Die Schule kann zur organisatorischen Kommunikation insbesondere WhatsApp und E-Mail verwenden.</p>" +
    "<p>Über diese Kommunikationswege können insbesondere folgende Informationen übermittelt werden:</p>" +
    "<ul><li>Unterrichtstermine,</li><li>Unterrichtsausfälle,</li><li>Hausaufgaben,</li><li>organisatorische Hinweise,</li>" +
    "<li>Informationen zu Veranstaltungen,</li><li>Änderungen von Unterrichtszeiten,</li><li>sonstige Informationen zum Schulbetrieb.</li></ul>" +
    "<p>Die Erziehungsberechtigten sind dafür verantwortlich, die von ihnen angegebenen Kommunikationswege regelmäßig zu überprüfen.</p>",

  "agb.22.title": "22. WhatsApp und WhatsApp-Gruppen",
  "agb.22.body":
    "<p>Die Schule kann WhatsApp zur Kommunikation mit Erziehungsberechtigten verwenden.</p>" +
    "<p>Eine Kommunikation per WhatsApp kann insbesondere zur individuellen Information über den Unterricht oder organisatorische Angelegenheiten erfolgen.</p>" +
    "<p>Für einzelne Klassen oder Lerngruppen können WhatsApp-Gruppen eingerichtet werden.</p>" +
    "<p>Bei einer Teilnahme an einer gemeinsamen WhatsApp-Gruppe kann die Telefonnummer des jeweiligen Teilnehmers für andere Gruppenmitglieder sichtbar sein.</p>" +
    "<p>Aus diesem Grund soll die Teilnahme an einer solchen Gruppe grundsätzlich freiwillig erfolgen, soweit sie für die Teilnahme am Unterricht nicht zwingend erforderlich ist.</p>" +
    "<p>Die Schule soll für wesentliche Informationen eine alternative Kommunikationsmöglichkeit anbieten, insbesondere per E-Mail.</p>" +
    "<p>In WhatsApp-Gruppen sollen keine Gesundheitsdaten oder sonstigen besonders schutzbedürftigen Informationen einzelner Kinder veröffentlicht werden.</p>",

  "agb.23.title": "23. Fotos und Bildaufnahmen",
  "agb.23.body":
    "<p>Während des Unterrichts, bei Veranstaltungen oder sonstigen Aktivitäten der Iqraa-Schule können Fotos aufgenommen werden.</p>" +
    "<p>Die Veröffentlichung identifizierbarer Fotos eines Kindes erfolgt nur, wenn hierfür eine entsprechende Rechtsgrundlage besteht und – soweit erforderlich – eine Einwilligung des gesetzlichen Vertreters vorliegt.</p>" +
    "<p>Die Einwilligung zur Veröffentlichung von Fotos ist freiwillig.</p>" +
    "<p>Die Teilnahme am regulären Unterricht wird nicht davon abhängig gemacht, dass einer Veröffentlichung von Fotos zugestimmt wird.</p>" +
    "<p>Einzelheiten ergeben sich aus der <a href=\"datenschutz.html\" data-keep-lang=\"datenschutz.html\">Datenschutzerklärung</a> und der jeweiligen Einwilligungserklärung.</p>",

  "agb.24.title": "24. Hausaufgaben und Lernfortschritt",
  "agb.24.body":
    "<p>Die Lehrkräfte können Hausaufgaben oder zusätzliche Übungen aufgeben.</p>" +
    "<p>Die Erziehungsberechtigten werden gebeten, ihre Kinder bei der regelmäßigen Bearbeitung der Aufgaben angemessen zu unterstützen.</p>" +
    "<p>Die Schule bemüht sich, die Erziehungsberechtigten über wesentliche Entwicklungen des Lernstands oder auffällige Schwierigkeiten zu informieren.</p>",

  "agb.25.title": "25. Außerordentliche Beendigung aus wichtigem Grund",
  "agb.25.body":
    "<p>Das Recht beider Seiten, die Teilnahme aus wichtigem Grund ohne Einhaltung einer Frist zu beenden, bleibt unberührt.</p>" +
    "<p>Ein wichtiger Grund kann insbesondere bei schwerwiegenden oder wiederholten Verstößen gegen diese Teilnahmebedingungen vorliegen.</p>" +
    "<p>Vor einer Beendigung wegen wiederholter Pflichtverletzungen wird grundsätzlich eine angemessene Möglichkeit zur Verbesserung eingeräumt, soweit dies nach Art und Schwere des Verstoßes zumutbar ist.</p>" +
    "<p>Für die ordentliche Kündigung gelten die Laufzeiten und Fristen in § 3 dieser Teilnahmebedingungen.</p>" +
    "<p>Zwingende gesetzliche Rechte bleiben unberührt.</p>",

  "agb.26.title": "26. Bereits gezahlte Kursgebühren",
  "agb.26.body":
    "<p>Eine Erstattung bereits gezahlter Kursgebühren erfolgt nur, soweit dies vertraglich vereinbart ist oder sich ein Erstattungsanspruch aus gesetzlichen Vorschriften ergibt.</p>" +
    "<p>Insbesondere begründet eine einzelne entschuldigte oder unentschuldigte Fehlstunde grundsätzlich keinen Anspruch auf anteilige Erstattung.</p>" +
    "<p>Endet die Teilnahme vor Ablauf des Zeitraums, für den die Kursgebühr bereits gezahlt wurde, wird der auf die Zeit nach Beendigung entfallende Anteil der Kursgebühr erstattet.</p>" +
    "<p>Bei einem Widerruf nach § 4 gelten die dort beschriebenen Folgen des Widerrufs.</p>",

  "agb.27.title": "27. Datenschutz",
  "agb.27.body":
    "<p>Die Verarbeitung personenbezogener Daten erfolgt nach Maßgabe der gesonderten <a href=\"datenschutz.html\" data-keep-lang=\"datenschutz.html\">Datenschutzerklärung</a> der Iqraa-Schule.</p>" +
    "<p>Die Datenschutzerklärung regelt insbesondere die Verarbeitung von:</p>" +
    "<ul><li>Daten der Schüler,</li><li>Daten der Erziehungsberechtigten,</li><li>Kontaktdaten,</li>" +
    "<li>Daten in der elektronischen Teilnehmerverwaltung,</li><li>Gesundheitsdaten,</li><li>WhatsApp-Daten,</li>" +
    "<li>Fotoaufnahmen,</li><li>Zahlungs- und Abrechnungsdaten.</li></ul>",

  "agb.28.title": "28. Gesetzliche Rechte",
  "agb.28.body":
    "<p>Diese Teilnahmebedingungen schränken zwingende gesetzliche Rechte der Schüler oder ihrer gesetzlichen Vertreter nicht ein.</p>" +
    "<p>Insbesondere bleiben gesetzliche Widerrufs-, Kündigungs-, Rücktritts- und sonstige Rechte unberührt, soweit sie im konkreten Vertragsverhältnis Anwendung finden.</p>",

  "agb.29.title": "29. Änderungen dieser Teilnahmebedingungen",
  "agb.29.body":
    "<p>Die Schule kann diese Teilnahmebedingungen ändern, wenn hierfür ein sachlicher Grund besteht und die Änderung unter Berücksichtigung der Interessen der Teilnehmer zumutbar ist.</p>" +
    "<p>Wesentliche Änderungen werden den Erziehungsberechtigten in geeigneter Weise mitgeteilt.</p>",

  "agb.30.title": "30. Salvatorische Klausel",
  "agb.30.body":
    "<p>Sollte eine Bestimmung dieser Teilnahmebedingungen ganz oder teilweise unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.</p>" +
    "<p>Anstelle der unwirksamen Bestimmung gelten die gesetzlichen Vorschriften.</p>",

  "agb.31.title": "31. Anbieter"
},

/* ==========================================================================
   ENGLISCH
   ========================================================================== */
en: {

  /* ------------------------------------------------------------ Legal notice */
  "doc.impressum.desc": "Legal notice of the Iqraa School for Arabic lessons, Arabisch-Deutscher-Verein e.V. Beckum.",

  "imp.title": "Legal notice",
  "imp.intro": "Information pursuant to section 5 of the German Digital Services Act (DDG).",
  "imp.anbieter": "Provider",
  "imp.verein": "Association",
  "imp.anschrift": "Address",
  "imp.land": "Germany",
  "imp.vertreten": "Board authorised to represent the association",
  "imp.register": "Register of associations",
  "imp.ustid": "VAT identification number",
  "imp.ustidHinweis": "pursuant to section 27a of the German VAT Act",
  "imp.telefon": "Phone",
  "imp.email": "Email",
  "imp.verantwortlich": "Responsible for editorial content",

  "imp.haftung.title": "Liability for our own content",
  "imp.haftung.body":
    "<p>The content of our website has been created to the best of our knowledge and with the greatest possible care.</p>" +
    "<p>As a service provider, we are responsible for our own content on this website under the general statutory provisions.</p>" +
    "<p>However, we are not obliged to monitor third-party information that is transmitted or stored, nor to investigate circumstances that indicate unlawful activity where there is no specific reason to do so.</p>" +
    "<p>Statutory obligations to remove or block unlawful content remain unaffected.</p>" +
    "<p>Should we become aware of a specific infringement, we will review the content concerned and remove or block it as far as the law requires.</p>",

  "imp.links.title": "Liability for external links",
  "imp.links.body":
    "<p>Our website may contain links to external websites operated by third parties.</p>" +
    "<p>We have no influence on the content of these external pages. Responsibility for the content of linked pages lies in principle with the respective operator.</p>" +
    "<p>At the time the links were set, no legal infringements were apparent to us.</p>" +
    "<p>Permanent monitoring of the content of external pages is not reasonable without specific evidence of an infringement. Should we become aware of a specific infringement, we will review the links concerned and remove them where appropriate.</p>",

  "imp.urheber.title": "Copyright",
  "imp.urheber.body":
    "<p>The content, texts, graphics, images and other works published on this website are subject to German copyright law, unless they are expressly placed under a different licence.</p>" +
    "<p>The logo of Arabisch-Deutscher-Verein e.V. Beckum is the property of the association.</p>" +
    "<p>Reproduction, editing, distribution or any other use of copyright-protected content beyond the statutory limits requires the prior consent of the respective rights holder.</p>" +
    "<p>The fonts used on this website are used under their respective licence terms. The fonts Bitter, Karla, Cairo and Noto Naskh Arabic are licensed under the SIL Open Font License 1.1.</p>",

  "imp.streit.title": "Dispute resolution",
  "imp.streit.body":
    "<p>We are neither willing nor obliged to take part in dispute resolution proceedings before a consumer arbitration board, unless there is a statutory obligation to do so.</p>",

  "imp.datenschutz.title": "Data protection",
  "imp.datenschutz.body":
    "<p>Information on the processing of personal data can be found in our separate <a href=\"datenschutz.html\" data-keep-lang=\"datenschutz.html\">privacy policy</a>.</p>",

  "imp.traeger.title": "Responsibility of the association",
  "imp.traeger.body":
    "<p>Where this website provides information about the Iqraa School, Arabisch-Deutscher-Verein e.V. Beckum, lessons offered or events, this is done within the area of responsibility of the association named above.</p>",

  "imp.stand": "Last updated:",

  /* ---------------------------------------------------------- Privacy policy */
  "doc.datenschutz.desc": "Privacy policy of the Iqraa School for Arabic lessons in Beckum.",

  "ds.title": "Privacy policy",
  "ds.stand": "Last updated:",

  "ds.1.title": "1. Controller",
  "ds.1.body":
    "<p>The controller for the processing of personal data in connection with the website, the registration and the running of the Iqraa School is:</p>",

  "ds.2.title": "2. General principles",
  "ds.2.body":
    "<p>We take the protection of personal data seriously.</p>" +
    "<p>We process personal data only to the extent permitted by the applicable data protection rules.</p>" +
    "<p>In doing so we observe in particular the principles of lawfulness, transparency, purpose limitation, data minimisation, accuracy, storage limitation as well as integrity and confidentiality.</p>" +
    "<p>As a rule we only process personal data that is necessary for the respective purposes.</p>",

  "ds.3.title": "3. Visiting the website",
  "ds.3.body":
    "<p>Our website is provided via GitHub Pages.</p>" +
    "<p>When the website is accessed, technically necessary data may be processed. This may include in particular:</p>" +
    "<ul><li>IP address,</li><li>date and time of access,</li><li>the internet address requested,</li>" +
    "<li>browser type and browser version,</li><li>operating system,</li><li>technical information about the device used.</li></ul>" +
    "<p>This data may be processed to ensure the security, stability and technical provision of the website.</p>" +
    "<p>Where the statutory conditions are met, the legal basis is Art. 6(1)(f) GDPR.</p>" +
    "<p>GitHub is a service of GitHub, Inc. and belongs to the Microsoft group of companies.</p>",

  "ds.4.title": "4. Hosting and external technical services",
  "ds.4.body":
    "<p>External technical services may be used to provide individual functions of our website.</p>" +
    "<p>Where external providers process personal data on our behalf, this is done on the basis of the data protection agreements required in each case.</p>" +
    "<p>In the case of technical service providers, processing of personal data outside the European Union or the European Economic Area cannot be entirely ruled out.</p>" +
    "<p>In such cases the statutory requirements of Art. 44 et seq. GDPR are taken into account.</p>",

  "ds.5.title": "5. Registration form",
  "ds.5.body":
    "<p>When you register your child using the online form of the Iqraa School, we process the personal data you enter.</p>" +
    "<p>This may include in particular:</p>" +
    "<h3>Data about the child</h3>" +
    "<ul><li>first name,</li><li>surname,</li><li>date of birth.</li></ul>" +
    "<h3>Data about the parent or guardian</h3>" +
    "<ul><li>first name,</li><li>surname,</li><li>phone number,</li><li>WhatsApp number,</li><li>email address, if provided.</li></ul>" +
    "<h3>Data for organisation and billing</h3>" +
    "<ul><li>preferred method of payment,</li><li>the details required for the Münsterlandkarte,</li>" +
    "<li>the details required in connection with education and participation benefits,</li>" +
    "<li>details of course and group allocation,</li><li>organisational information about participation.</li></ul>" +
    "<h3>Health-related information</h3>" +
    "<p>Where you provide information about allergies or other health-related particularities of your child, this constitutes health data and therefore a special category of personal data.</p>" +
    "<p>Health data is subject to increased legal protection under Art. 9 GDPR.</p>" +
    "<p>We process such information only where there is a suitable legal basis or valid explicit consent for doing so.</p>",

  "ds.6.title": "6. Purpose of processing",
  "ds.6.body":
    "<p>The data is processed in particular for the following purposes:</p>" +
    "<ul><li>handling the registration,</li><li>reviewing and confirming the course place,</li>" +
    "<li>assigning the child to a suitable group,</li><li>organising and running the lessons,</li>" +
    "<li>communicating with the parents or guardians,</li><li>keeping records of attendance and absence,</li>" +
    "<li>educational organisation,</li><li>running events,</li>" +
    "<li>administering and billing the course fees,</li>" +
    "<li>processing the Münsterlandkarte and education and participation benefits,</li>" +
    "<li>fulfilling legal obligations,</li><li>obligations to provide evidence and to retain records,</li>" +
    "<li>protecting the proper running of the school.</li></ul>" +
    "<p>The registration data is not used to sell personal data or for third-party advertising purposes.</p>",

  "ds.7.title": "7. Legal bases",
  "ds.7.body":
    "<p>Where processing is necessary to initiate, carry out or administer the participation relationship, it is generally based on Art. 6(1)(b) GDPR.</p>" +
    "<p>Where we are legally obliged to process data, processing is based on Art. 6(1)(c) GDPR.</p>" +
    "<p>Where processing is necessary to safeguard the legitimate interests of the association and no overriding interests of the data subjects conflict with it, Art. 6(1)(f) GDPR may apply.</p>" +
    "<p>Processing based on consent takes place in accordance with Art. 6(1)(a) GDPR.</p>" +
    "<p>For health data, the additional requirements of Art. 9 GDPR apply.</p>",

  "ds.8.title": "8. Processing via the Iqraa School Google account",
  "ds.8.body":
    "<p>We use the school's Google account for the organisational administration of the Iqraa School.</p>" +
    "<p>The following Google services in particular may be used through this account:</p>" +
    "<ul><li>Gmail,</li><li>Google Drive,</li><li>Google Apps Script,</li>" +
    "<li>where applicable, further Google services required to operate the registration.</li></ul>" +
    "<p>Registrations and organisational messages can be received and processed via Gmail.</p>" +
    "<p>Internal administrative files can be stored and managed via Google Drive.</p>" +
    "<p>Google points out that data may be processed worldwide in its services. Specific data protection terms and data processing agreements exist for certain Google services.</p>",

  "ds.9.title": "9. Storage of participant data in Excel on Google Drive",
  "ds.9.body":
    "<p>The participant data required to organise the Iqraa School may be stored in an electronic participant record.</p>" +
    "<p>For this purpose we use, among other things, Microsoft Excel files stored on the Google Drive of the Google account used for the Iqraa School.</p>" +
    "<p>An Excel file or an Excel-compatible file may in particular contain the following information:</p>" +
    "<ul><li>name of the child,</li><li>date of birth,</li><li>name of the parents or guardians,</li>" +
    "<li>phone number,</li><li>WhatsApp number,</li><li>email address,</li><li>group allocation,</li>" +
    "<li>attendance information,</li><li>payment information,</li><li>organisational details about participation.</li></ul>" +
    "<p>Health data is only included where its processing is necessary for a specific purpose and legally permissible.</p>",

  "ds.10.title": "10. Access to the Excel files",
  "ds.10.body":
    "<p>The participant record is used exclusively for the internal organisation of the Iqraa School.</p>" +
    "<p>Access to the files is to be limited to persons who need this data for their specific task in organising or running the lessons.</p>" +
    "<p>In particular, the files may not:</p>" +
    "<ul><li>be made publicly accessible,</li><li>be made available through public sharing links,</li>" +
    "<li>be passed on to other parents or pupils,</li>" +
    "<li>be copied without an operational or organisational necessity.</li></ul>" +
    "<p>Access rights are to be reviewed regularly and adjusted or withdrawn without delay when an authorised person ends their activity.</p>" +
    "<p>The association applies appropriate technical and organisational measures to protect the stored data.</p>",

  "ds.11.title": "11. Security of the Google account",
  "ds.11.body":
    "<p>The Google account used for the school is to be protected by suitable access security measures.</p>" +
    "<p>Where technically available and organisationally set up, two-factor authentication in particular is to be used.</p>" +
    "<p>Passwords and access credentials may not be passed on to unauthorised persons.</p>" +
    "<p>Persons with access to the account or to the participant record may use the data only for the intended school and organisational purposes.</p>",

  "ds.12.title": "12. Processing via Gmail and Google Apps Script",
  "ds.12.body":
    "<p>The data entered in the online registration form may technically be processed via Google Apps Script and transmitted to the Gmail mailbox used for the school.</p>" +
    "<p>Once a registration has been received, the necessary data may be transferred to the internal participant record for further processing.</p>" +
    "<p>Where Google services are used for this purpose, Google may process personal data within the scope of the respective services.</p>" +
    "<p>The specific processing depends on the Google services we use and their applicable terms.</p>",

  "ds.13.title": "13. Google Drive and possible processing in third countries",
  "ds.13.body":
    "<p>Google operates services and technical infrastructure worldwide. Processing of personal data outside the European Economic Area can therefore not be entirely ruled out.</p>" +
    "<p>The statutory requirements of Art. 44 et seq. GDPR apply to international data transfers.</p>" +
    "<p>Google provides data protection agreements and rules for international data transfers for certain cloud services.</p>",

  "ds.14.title": "14. Communication via WhatsApp",
  "ds.14.body":
    "<p>The school may use the phone numbers or WhatsApp numbers provided by parents and guardians for organisational communication.</p>" +
    "<p>WhatsApp may be used in particular for the following purposes:</p>" +
    "<ul><li>notification of lesson dates,</li><li>information about cancelled lessons,</li>" +
    "<li>organisational queries,</li><li>information about events,</li>" +
    "<li>communication about homework,</li><li>other information about school operations.</li></ul>" +
    "<p>Where communication via WhatsApp is not strictly necessary, communication by email in particular is available as an alternative.</p>",

  "ds.15.title": "15. WhatsApp groups",
  "ds.15.body":
    "<p>WhatsApp groups may be set up for individual classes or learning groups.</p>" +
    "<p>If you take part in such a group, your phone number in particular may become visible to other members of the group.</p>" +
    "<p>Participation in such a group is therefore voluntary in principle, unless it is strictly necessary for the performance of the contract.</p>" +
    "<p>An alternative means of communication is to be available for essential information.</p>" +
    "<p>In particular, no information about allergies, illnesses or other specially protected personal circumstances of individual children should be published in WhatsApp groups.</p>",

  "ds.16.title": "16. Health data and allergies",
  "ds.16.body":
    "<p>Information about allergies and other health-related particularities is only processed where it is necessary for the child to take part safely in lessons or an event, or where another legal basis for the processing exists.</p>" +
    "<p>Health data is given special protection.</p>" +
    "<p>Access is to be limited to those persons who actually need this information in order to ensure the safety and care of the child.</p>" +
    "<p>Where processing is based on explicit consent, that consent may be withdrawn at any time with effect for the future.</p>" +
    "<p>The lawfulness of processing up to the point of withdrawal remains unaffected.</p>",

  "ds.17.title": "17. Münsterlandkarte and education and participation benefits",
  "ds.17.body":
    "<p>Where the Münsterlandkarte or benefits from the education and participation package are used, we only process the details and evidence required for this.</p>" +
    "<p>Where data has to be transmitted to the competent authorities for verification or billing, this is done only to the extent necessary and on the basis of the applicable statutory provisions.</p>" +
    "<p>A complete copy of an identity document or of a card is only stored where this is actually necessary for the respective purpose and legally permissible.</p>",

  "ds.18.title": "18. Photos and images",
  "ds.18.body":
    "<p>Photos may be taken during lessons and at school activities.</p>" +
    "<p>Identifiable photos of a child are published in principle only on the basis of corresponding consent, where such consent is required.</p>" +
    "<p>Possible places of publication may in particular be:</p>" +
    "<ul><li>the website of the association,</li><li>the social media channels of the association,</li><li>association or school materials.</li></ul>" +
    "<p>Consent to photos is voluntary.</p>" +
    "<p>Participation in regular lessons is not made dependent on such consent being given.</p>" +
    "<p>Consent that has been given may be withdrawn at any time with effect for the future.</p>",

  "ds.19.title": "19. Recipients of personal data",
  "ds.19.body":
    "<p>Within the association, personal data is received only by those persons who need this data for their respective task.</p>" +
    "<p>Depending on the specific processing, personal data may in particular be processed by:</p>" +
    "<ul><li>technical hosting providers,</li><li>Google services,</li><li>the provider of the registration process,</li>" +
    "<li>email services,</li><li>cloud storage services,</li><li>communication services,</li>" +
    "<li>the competent authorities in connection with education and participation benefits.</li></ul>" +
    "<p>Data is passed on to other third parties only where there is a legal basis for doing so, where it is necessary in order to carry out the participation relationship, or where valid consent has been given.</p>",

  "ds.20.title": "20. Retention period",
  "ds.20.body":
    "<p>We store personal data only for as long as this is necessary for the respective purpose.</p>" +
    "<p>Registration data is generally processed while the child takes part in the Iqraa School.</p>" +
    "<p>After participation ends, the data is deleted as soon as it is no longer needed to organise and run the lessons and no statutory retention obligations stand in the way.</p>" +
    "<p>Where statutory retention obligations exist, the data concerned is retained for the legally prescribed period.</p>" +
    "<p>Health data is deleted as soon as the purpose of its processing ceases to apply, unless another legal basis permits or requires further storage.</p>",

  "ds.21.title": "21. Technical and organisational measures",
  "ds.21.body":
    "<p>We take appropriate technical and organisational measures to protect personal data.</p>" +
    "<p>These include in particular:</p>" +
    "<ul><li>restriction of access rights,</li><li>password protection,</li><li>securing the Google account,</li>" +
    "<li>use of two-factor authentication wherever possible,</li><li>confidential handling of access credentials,</li>" +
    "<li>protection of electronic participant lists,</li><li>avoidance of unnecessary copies of data,</li>" +
    "<li>regular review of access rights,</li><li>deletion of data that is no longer needed.</li></ul>",

  "ds.22.title": "22. Your rights",
  "ds.22.body":
    "<p>Data subjects have in particular the following rights, subject to the statutory provisions:</p>" +
    "<h3>Right of access</h3>" +
    "<p>You may request information as to whether and which personal data concerning you is processed.</p>" +
    "<h3>Right to rectification</h3>" +
    "<p>You may request the correction of inaccurate personal data or the completion of incomplete personal data.</p>" +
    "<h3>Right to erasure</h3>" +
    "<p>Subject to the statutory conditions, you may request the erasure of personal data.</p>" +
    "<h3>Right to restriction</h3>" +
    "<p>Subject to the statutory conditions, you may request the restriction of processing.</p>" +
    "<h3>Right to data portability</h3>" +
    "<p>Subject to the statutory conditions, you have the right to receive personal data in a structured, commonly used and machine-readable format.</p>" +
    "<h3>Right to object</h3>" +
    "<p>Subject to the statutory conditions, you may object to certain processing operations.</p>" +
    "<h3>Withdrawal of consent</h3>" +
    "<p>Where processing is based on your consent, you may withdraw it at any time with effect for the future.</p>" +
    "<p>The lawfulness of processing carried out on the basis of the consent up to its withdrawal remains unaffected.</p>",
  "ds.22.kontakt": "To exercise your rights, a message to the following address is sufficient:",

  "ds.23.title": "23. Right to lodge a complaint with a supervisory authority",
  "ds.23.body":
    "<p>You have the right to lodge a complaint with a data protection supervisory authority about the processing of your personal data.</p>" +
    "<p>The competent supervisory authority for North Rhine-Westphalia is in particular:</p>" +
    "<p><strong>Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen (LDI NRW)</strong><br>Kavalleriestraße 2–4<br>40213 Düsseldorf</p>",

  "ds.24.title": "24. No automated decision-making",
  "ds.24.body":
    "<p>Automated decision-making, including profiling within the meaning of Art. 22 GDPR, does not take place in connection with the registration and organisation of the Iqraa School.</p>",

  "ds.25.title": "25. Updates to this privacy policy",
  "ds.25.body":
    "<p>We may adapt this privacy policy if our technical procedures, the service providers we use, our organisational processes or the legal requirements change.</p>" +
    "<p>The current version published on our website applies in each case.</p>",

  "ds.26.title": "26. Fonts",
  "ds.26.body":
    "<p>The fonts used on this page are loaded from our own server. No connection to Google Fonts is established and no data is transferred to third parties in this context.</p>",

  "ds.27.title": "27. Cookies and analytics",
  "ds.27.body":
    "<p>This site sets no cookies and uses no analytics or tracking services. Your language choice is stored locally in your browser only (localStorage) and is not transmitted to us.</p>",

  /* ------------------------------------------------------ Terms & conditions */
  /* ------------------------------------------------------- Termination page */
  "doc.kuendigung.title": "Terminate participation — Iqraa School Beckum",
  "doc.kuendigung.desc": "Terminate participation in the Arabic courses of the Iqraa School Beckum.",

  "kd.title": "Terminate participation",
  "kd.intro": "You can use this form to terminate your child's participation in the Arabic courses of the Iqraa School. No account and no password are needed.",
  "kd.fristen": "For terms and notice periods see section 3 of the terms of participation: participation initially runs for one school half-year. If it is not terminated no later than four weeks before the end of that half-year, it is extended for an indefinite period and can then be terminated at any time with one month's notice.",

  "kd.art.legend": "Type of termination",
  "kd.art.frage": "How would you like to terminate?",
  "kd.art.ordentlich": "Ordinary termination",
  "kd.art.ordentlichSub": "at the earliest possible date under the notice periods in section 3",
  "kd.art.ausser": "Termination for good cause",
  "kd.art.ausserSub": "without observing a notice period, stating the reason",
  "kd.grund": "Reason for termination for good cause",
  "kd.grundHint": "Only needed for a termination for good cause.",

  "kd.vertrag.legend": "Which participation does this concern?",
  "kd.person.legend": "Who is giving notice?",
  "kd.kontakt.legend": "Where should we send the confirmation?",
  "kd.kontaktHint": "We confirm receipt of your termination without delay in text form — including date, time and the date on which participation ends.",

  "kd.zeitpunkt.frage": "When should participation end?",
  "kd.zeitpunkt.naechst": "At the earliest possible date",
  "kd.zeitpunkt.datum": "On a specific date",
  "kd.zeitpunkt.datumLabel": "Preferred date",

  "kd.submit": "Terminate now",
  "kd.speichern": "Please print or save this page before submitting — that way you keep your declaration with date and time as evidence.",
  "kd.erfolg.title": "We have received your termination",
  "kd.erfolg.text": "Thank you. We have recorded your termination and will send the confirmation to the email address you provided.",
  "kd.fehler.title": "Sending did not work",
  "kd.fehler.text": "Your entries are still in the form. You can try again in a moment. A termination is also effective informally by email or via WhatsApp:",
  "kd.fehler.mail": "Send termination by email",

  "doc.agb.desc": "General terms and conditions of participation of the Iqraa School, Arabisch-Deutscher-Verein e.V. Beckum.",

  "agb.title": "General terms and conditions of participation",
  "agb.untertitel": "Iqraa School of Arabisch-Deutscher-Verein e.V. Beckum",
  "agb.stand": "Last updated:",

  "agb.1.title": "1. Scope",
  "agb.1.body":
    "<p>These general terms and conditions of participation apply to participation in the Arabic courses offered by the Iqraa School of Arabisch-Deutscher-Verein e.V. Beckum, as well as to the related school, educational and organisational activities.</p>" +
    "<p>They apply towards the legal guardian of the minor pupil who carries out the registration.</p>" +
    "<p>By registering, the legal guardian declares that they have read and taken note of these terms of participation.</p>" +
    "<p>Mandatory statutory rights of the pupil or their legal guardians remain unaffected.</p>",

  "agb.2.title": "2. Registration and admission",
  "agb.2.body":
    "<p>Registration is generally carried out using the registration form provided on the website of the Iqraa School.</p>" +
    "<p>The details given at registration must be complete, accurate and up to date. In particular, the first name and surname of the child must be entered as they appear in an official document.</p>" +
    "<p>Submitting the registration form initially constitutes an enquiry or an application for admission to the relevant teaching group. Merely submitting the form does not yet give rise to any claim to a particular course place.</p>" +
    "<p>Once the registration has been received, the school reviews the details, the available places and the organisational requirements.</p>" +
    "<p>Participation is only deemed confirmed once the school confirms admission to the legal guardian or assigns the pupil a specific course place.</p>" +
    "<p>Confirmation may be given in particular via WhatsApp or email.</p>",

  "agb.3.title": "3. Term, renewal and termination",
  "agb.3.body":
    "<p>Participation is initially agreed for one school half-year. The school half-years follow the dates applicable in North Rhine-Westphalia.</p>" +
    "<p>If participation is not terminated no later than four weeks before the end of the half-year, it is extended for an indefinite period.</p>" +
    "<p>Once extended for an indefinite period, participation may be terminated by either side at any time with one month's notice. No new registration is required in order to continue.</p>" +
    "<p>Notice of termination must be given in text form. It may be given in particular by email, via WhatsApp or through the <a href=\"kuendigung.html\" data-keep-lang=\"kuendigung.html\">termination page of this website</a>.</p>" +
    "<p>Receipt of a termination is confirmed in text form without delay. The confirmation states the content of the termination, the date and time of receipt and the date on which participation ends.</p>" +
    "<p>The right of either side to terminate for good cause remains unaffected; section 25 of these terms applies in that respect.</p>",

  "agb.4.title": "4. Right of withdrawal for consumers",
  "agb.4.body":
    "<p>Parents and guardians who conclude the contract for a purpose that can be attributed neither to their commercial nor to their self-employed professional activity are consumers. The following right of withdrawal applies to them.</p>" +
    "<h3>Withdrawal instructions</h3>" +
    "<p><strong>Right of withdrawal</strong></p>" +
    "<p>You have the right to withdraw from this contract within fourteen days without giving any reason.</p>" +
    "<p>The withdrawal period is fourteen days from the day the contract was concluded.</p>" +
    "<p>To exercise your right of withdrawal, you must inform us</p>" +
    "<p><span data-cfg=\"impressum.verein\">Arabisch-Deutscher-Verein e.V. Beckum</span><br>" +
    "<span data-cfg=\"impressum.anschrift\">Nordwall 14, 59269 Beckum</span><br>" +
    "Phone: <span class=\"ltr\" data-cfg=\"telefon\">0177 5883033</span><br>" +
    "Email: <span class=\"ltr\" data-cfg=\"email\">iqraaschulebeckum@gmail.com</span></p>" +
    "<p>of your decision to withdraw from this contract by means of a clear statement (for example a letter sent by post or an email). You may use the model withdrawal form printed in section 5 for this purpose, but you are not obliged to do so.</p>" +
    "<p>To meet the withdrawal deadline, it is sufficient for you to send your communication concerning your exercise of the right of withdrawal before the withdrawal period has expired.</p>" +
    "<p><strong>Effects of withdrawal</strong></p>" +
    "<p>If you withdraw from this contract, we shall reimburse to you all payments received from you without undue delay and in any event not later than fourteen days from the day on which we are informed about your decision to withdraw from this contract. We will carry out such reimbursement using the same means of payment as you used for the initial transaction, unless you have expressly agreed otherwise; in any event, you will not incur any fees as a result of such reimbursement.</p>" +
    "<p>If you requested that the services begin during the withdrawal period, you shall pay us an amount which is in proportion to what has been provided until you have communicated to us your withdrawal from this contract, in comparison with the full coverage of the contract.</p>" +
    "<p><strong>Expiry of the right of withdrawal</strong></p>" +
    "<p>In the case of a contract for the provision of services, your right of withdrawal expires once we have fully performed the service and only began performing it after you gave your express consent and at the same time acknowledged that you would lose your right of withdrawal upon our full performance of the contract.</p>" +
    "<h3>Lessons starting during the withdrawal period</h3>" +
    "<p>When registering, you may expressly request that lessons begin before the withdrawal period has expired. This declaration is voluntary.</p>" +
    "<p>If you do not make use of it, your child can only take part in lessons once the withdrawal period has expired. You are not disadvantaged by this; the course fee is adjusted accordingly in that case.</p>",

  "agb.5.title": "5. Model withdrawal form",
  "agb.5.body":
    "<p>If you wish to withdraw from the contract, you may complete this form and return it to us. You are not obliged to do so &mdash; an informal, clear statement is sufficient.</p>" +
    "<blockquote>" +
    "<p>To <span data-cfg=\"impressum.verein\">Arabisch-Deutscher-Verein e.V. Beckum</span>, " +
    "<span data-cfg=\"impressum.anschrift\">Nordwall 14, 59269 Beckum</span>, " +
    "email: <span class=\"ltr\" data-cfg=\"email\">iqraaschulebeckum@gmail.com</span></p>" +
    "<p>I/We (*) hereby give notice that I/We (*) withdraw from my/our (*) contract for the provision of the following service: participation in the Arabic courses of the Iqraa School.</p>" +
    "<p>Name of the child: _______________________<br>" +
    "Ordered on (*) / received on (*): _______________________<br>" +
    "Name of consumer(s): _______________________<br>" +
    "Address of consumer(s): _______________________<br>" +
    "Signature of consumer(s) (only if this form is notified on paper): _______________________<br>" +
    "Date: _______________________</p>" +
    "<p>(*) Delete as appropriate.</p>" +
    "</blockquote>",

  "agb.6.title": "6. Age, level and group allocation",
  "agb.6.body":
    "<p>The Iqraa School admits pupils of different age groups and different levels, insofar as corresponding groups are offered.</p>" +
    "<p>Allocation takes into account in particular:</p>" +
    "<ul><li>age,</li><li>existing knowledge of Arabic,</li><li>level of learning,</li>" +
    "<li>educational needs,</li><li>group size,</li><li>available course places.</li></ul>" +
    "<p>A claim to a particular group or a particular day of lessons exists only where this has been expressly confirmed.</p>" +
    "<p>The school is entitled, on the basis of an educational assessment, to assign a pupil to a different group where their level or educational needs make a different group allocation appropriate.</p>" +
    "<p>Parents and guardians are informed of any material change to the group allocation.</p>",

  "agb.7.title": "7. Lesson times and punctuality",
  "agb.7.body":
    "<p>The lesson times communicated in each case must be observed.</p>" +
    "<p>Pupils should arrive in good time before lessons begin.</p>" +
    "<p>Repeated lateness can impair the learning progress of the pupil concerned and the lessons of the entire group.</p>" +
    "<p>In the event of repeated lateness, the school may contact the legal guardian and work towards an improvement.</p>",

  "agb.8.title": "8. Attendance and absence",
  "agb.8.body":
    "<p>Regular attendance is a prerequisite for meaningful learning progress.</p>" +
    "<p>If a pupil is unable to attend, the legal guardian should inform the school as early as possible.</p>" +
    "<p>Notice of a planned absence should generally be given no later than two hours before lessons begin, insofar as this is possible and reasonable.</p>" +
    "<p>In the event of illness or an unforeseeable event, the school must be informed without delay once the impediment becomes known.</p>" +
    "<p>Notice of an absence does not generally give rise to any claim to make up the missed lesson or to a proportionate refund of the course fee.</p>" +
    "<p>In the event of repeated unexcused absence, the school may first contact the parents or guardians and point out the need for regular attendance.</p>" +
    "<p>After three repeated unexcused absences, the school may, having first contacted the legal guardian, end the pupil's participation where the absences significantly impair the course of lessons or the organisation of the group.</p>" +
    "<p>Payment claims that have already arisen by law remain unaffected by this.</p>",

  "agb.9.title": "9. Course fees and payment methods",
  "agb.9.body":
    "<p>The amount of the course fees follows from the prices communicated at the time of registration or admission.</p>" +
    "<p>Depending on the course and what is organisationally possible, the following payment methods in particular may be offered:</p>" +
    "<ul><li>cash payment,</li><li>Münsterlandkarte,</li><li>education and participation benefits (BuT).</li></ul>" +
    "<p>The payment methods available in each case are communicated at registration or after the registration has been reviewed.</p>",

  "agb.10.title": "10. Cash payment",
  "agb.10.body":
    "<p>Where cash payment has been agreed, the course fee is to be paid on the date communicated by the school.</p>" +
    "<p>A receipt or confirmation of payment may be issued once payment has been made.</p>",

  "agb.11.title": "11. Münsterlandkarte and education and participation benefits",
  "agb.11.body":
    "<p>Where funding is provided through the Münsterlandkarte or the education and participation package, the evidence and details required for billing must be provided in good time.</p>" +
    "<p>The school is entitled to review the data required for billing and to transmit it to the competent authorities, insofar as this is legally permissible and necessary.</p>" +
    "<p>In doing so, the school should as a rule only collect and store the information required for the respective review and billing.</p>" +
    "<p>Admission or final confirmation of the course place may depend on the funding or assumption of costs actually being secured.</p>",

  "agb.12.title": "12. Books and teaching materials",
  "agb.12.body":
    "<p>The basic materials or books intended for regular lessons are included in the course fee, insofar as this was stated at registration or in the course description.</p>" +
    "<p>Additional costs may arise for additional materials, workbooks, special projects or other services not included.</p>" +
    "<p>Parents and guardians are generally informed of additional costs in advance.</p>",

  "agb.13.title": "13. Activities and events",
  "agb.13.body":
    "<p>In addition to regular lessons, the Iqraa School may offer educational, cultural or community activities and events.</p>" +
    "<p>Individual activities may be offered free of charge.</p>" +
    "<p>Additional costs or a contribution towards costs may arise for certain activities.</p>" +
    "<p>Parents and guardians are informed of the costs arising before any activity that is subject to a charge.</p>",

  "agb.14.title": "14. Conduct and mutual respect",
  "agb.14.body":
    "<p>All pupils are required to behave respectfully towards teachers, fellow pupils and other persons involved in running the lessons.</p>" +
    "<p>The following in particular are not permitted:</p>" +
    "<ul><li>physical violence,</li><li>threats,</li><li>insults,</li><li>bullying,</li>" +
    "<li>repeated significant disruption of lessons,</li><li>wilful damage to property,</li>" +
    "<li>significantly disrespectful or discriminatory behaviour.</li></ul>" +
    "<p>Breaches are generally first addressed in an educationally appropriate manner.</p>" +
    "<p>Depending on the nature and severity of the breach, the school may issue a warning to the pupil and inform the parents or guardians.</p>" +
    "<p>In the event of repeated or serious breaches, the school may take further appropriate measures.</p>" +
    "<p>Following an appropriate review and — where reasonable — a prior formal warning, these may also include ending participation.</p>" +
    "<p>In the event of particularly serious misconduct, immediate termination for good cause may be considered.</p>",

  "agb.15.title": "15. Cooperation between parents and school",
  "agb.15.body":
    "<p>Parents and guardians are asked to support their child's learning process appropriately.</p>" +
    "<p>This includes in particular:</p>" +
    "<ul><li>encouraging regular attendance,</li><li>ensuring homework is done,</li>" +
    "<li>taking note of messages from the teachers,</li><li>sharing important information about the child,</li>" +
    "<li>cooperating with the school in the event of difficulties at school.</li></ul>" +
    "<p>Where cooperation is significantly lacking, the school will first seek a conversation with the parents or guardians.</p>" +
    "<p>After two appropriate reminders, the school may take further measures where the lack of cooperation significantly impairs the child's learning progress or the lessons of the group.</p>" +
    "<p>In such a case, participation may also be ended following an appropriate prior formal warning.</p>",

  "agb.16.title": "16. Change of group or level",
  "agb.16.body":
    "<p>The school may place a pupil in a different group or at a different level on the basis of an educational assessment.</p>" +
    "<p>This may happen in particular where it turns out that:</p>" +
    "<ul><li>the pupil is under-challenged or over-challenged,</li><li>their level fits a different group better,</li>" +
    "<li>the composition of the group requires a change,</li><li>educational reasons make a different allocation appropriate.</li></ul>" +
    "<p>The aim is to provide the pupil with the most suitable learning environment possible.</p>",

  "agb.17.title": "17. Changes to lesson times, groups or teachers",
  "agb.17.body":
    "<p>For organisational, educational or staffing reasons it may be necessary to change lesson times, groups or teachers.</p>" +
    "<p>The school informs parents and guardians of material changes as early as possible.</p>" +
    "<p>There is generally no claim to a particular teacher, a particular room or a particular group composition unless this has been expressly promised.</p>",

  "agb.18.title": "18. Cancellation of lessons",
  "agb.18.body":
    "<p>If a lesson cannot take place due to circumstances that the school cannot influence, or cannot influence in time, parents and guardians are informed as early as possible.</p>" +
    "<p>These may include in particular:</p>" +
    "<ul><li>illness of a teacher,</li><li>official measures,</li><li>the teaching rooms being unusable,</li>" +
    "<li>technical or organisational disruptions,</li><li>extraordinary events,</li><li>other cases of force majeure.</li></ul>" +
    "<p>Depending on the circumstances, the school endeavours to offer a replacement date or another appropriate solution.</p>" +
    "<p>Statutory claims remain unaffected.</p>",

  "agb.19.title": "19. Responsibility for personal belongings",
  "agb.19.body":
    "<p>Pupils, or their legal guardians, are generally responsible for personal belongings that pupils bring to lessons.</p>" +
    "<p>Valuable items or items not needed for lessons should not be brought along.</p>" +
    "<p>Any liability of the school is governed exclusively by the statutory provisions.</p>",

  "agb.20.title": "20. Information about the child",
  "agb.20.body":
    "<p>Parents and guardians are responsible for ensuring that the details given at registration are accurate and up to date.</p>" +
    "<p>Changes to contact details, in particular the phone number, WhatsApp number or email address, must be communicated to the school as promptly as possible.</p>" +
    "<p>Parents and guardians should also inform the school of any circumstances that are relevant to the child's safe participation in lessons or events.</p>" +
    "<p>Health-related information is processed exclusively in accordance with the privacy policy and the applicable data protection rules.</p>",

  "agb.21.title": "21. Communication with parents and guardians",
  "agb.21.body":
    "<p>The school may use WhatsApp and email in particular for organisational communication.</p>" +
    "<p>The following information in particular may be sent through these channels:</p>" +
    "<ul><li>lesson dates,</li><li>cancelled lessons,</li><li>homework,</li><li>organisational notes,</li>" +
    "<li>information about events,</li><li>changes to lesson times,</li><li>other information about school operations.</li></ul>" +
    "<p>Parents and guardians are responsible for checking the communication channels they have provided on a regular basis.</p>",

  "agb.22.title": "22. WhatsApp and WhatsApp groups",
  "agb.22.body":
    "<p>The school may use WhatsApp to communicate with parents and guardians.</p>" +
    "<p>Communication via WhatsApp may in particular serve to provide individual information about lessons or organisational matters.</p>" +
    "<p>WhatsApp groups may be set up for individual classes or learning groups.</p>" +
    "<p>If you take part in a shared WhatsApp group, your phone number may be visible to other members of the group.</p>" +
    "<p>For this reason, participation in such a group should generally be voluntary, unless it is strictly necessary for participation in lessons.</p>" +
    "<p>The school should offer an alternative means of communication for essential information, in particular by email.</p>" +
    "<p>No health data or other particularly sensitive information about individual children should be published in WhatsApp groups.</p>",

  "agb.23.title": "23. Photos and images",
  "agb.23.body":
    "<p>Photos may be taken during lessons, at events or during other activities of the Iqraa School.</p>" +
    "<p>Identifiable photos of a child are published only where there is a corresponding legal basis and — where required — the consent of the legal guardian.</p>" +
    "<p>Consent to the publication of photos is voluntary.</p>" +
    "<p>Participation in regular lessons is not made dependent on agreeing to the publication of photos.</p>" +
    "<p>Details follow from the <a href=\"datenschutz.html\" data-keep-lang=\"datenschutz.html\">privacy policy</a> and the respective declaration of consent.</p>",

  "agb.24.title": "24. Homework and learning progress",
  "agb.24.body":
    "<p>Teachers may set homework or additional exercises.</p>" +
    "<p>Parents and guardians are asked to support their children appropriately in working through the tasks regularly.</p>" +
    "<p>The school endeavours to inform parents and guardians about material developments in the level of learning or noticeable difficulties.</p>",

  "agb.25.title": "25. Termination for good cause",
  "agb.25.body":
    "<p>The right of either side to end participation for good cause without observing a notice period remains unaffected.</p>" +
    "<p>Good cause may exist in particular in the event of serious or repeated breaches of these terms of participation.</p>" +
    "<p>Before participation is ended because of repeated breaches of duty, an appropriate opportunity to improve is generally granted, insofar as this is reasonable given the nature and severity of the breach.</p>" +
    "<p>The terms and notice periods set out in section 3 of these terms of participation apply to ordinary termination.</p>" +
    "<p>Mandatory statutory rights remain unaffected.</p>",

  "agb.26.title": "26. Course fees already paid",
  "agb.26.body":
    "<p>Course fees already paid are refunded only where this has been contractually agreed or where a claim to a refund arises from statutory provisions.</p>" +
    "<p>In particular, a single excused or unexcused missed lesson does not generally give rise to a claim to a proportionate refund.</p>" +
    "<p>If participation ends before the end of the period for which the course fee has already been paid, the share of the course fee attributable to the time after termination is refunded.</p>" +
    "<p>In the event of a withdrawal under section 4, the effects of withdrawal described there apply.</p>",

  "agb.27.title": "27. Data protection",
  "agb.27.body":
    "<p>Personal data is processed in accordance with the separate <a href=\"datenschutz.html\" data-keep-lang=\"datenschutz.html\">privacy policy</a> of the Iqraa School.</p>" +
    "<p>The privacy policy governs in particular the processing of:</p>" +
    "<ul><li>pupil data,</li><li>data of parents and guardians,</li><li>contact details,</li>" +
    "<li>data in the electronic participant record,</li><li>health data,</li><li>WhatsApp data,</li>" +
    "<li>photographs,</li><li>payment and billing data.</li></ul>",

  "agb.28.title": "28. Statutory rights",
  "agb.28.body":
    "<p>These terms of participation do not restrict any mandatory statutory rights of the pupils or their legal guardians.</p>" +
    "<p>In particular, statutory rights of withdrawal, termination, rescission and other rights remain unaffected, insofar as they apply to the specific contractual relationship.</p>",

  "agb.29.title": "29. Changes to these terms of participation",
  "agb.29.body":
    "<p>The school may amend these terms of participation where there is an objective reason for doing so and the change is reasonable taking the interests of participants into account.</p>" +
    "<p>Material changes are communicated to parents and guardians in an appropriate manner.</p>",

  "agb.30.title": "30. Severability clause",
  "agb.30.body":
    "<p>Should any provision of these terms of participation be or become wholly or partly invalid, the validity of the remaining provisions remains unaffected.</p>" +
    "<p>The statutory provisions apply in place of the invalid provision.</p>",

  "agb.31.title": "31. Provider"
},

/* ==========================================================================
   ARABISCH
   Impressum und Datenschutz sind uebersetzt. Die AGB folgen weiter unten
   Punkt fuer Punkt dem arabischen Original der Schule; nur die Abschnitte,
   die es dort nicht gibt, sind uebersetzt.
   ========================================================================== */
ar: {

  /* ------------------------------------------------------- بيانات الناشر */
  "doc.impressum.desc": "بيانات الناشر لمدرسة إقرأ لتعليم اللغة العربية، الجمعية العربية الألمانية في بيكوم.",

  "imp.title": "بيانات الناشر",
  "imp.intro": "بيانات وفقاً للمادة 5 من قانون الخدمات الرقمية الألماني (DDG).",
  "imp.anbieter": "الجهة المقدِّمة",
  "imp.verein": "الجمعية",
  "imp.anschrift": "العنوان",
  "imp.land": "ألمانيا",
  "imp.vertreten": "مجلس الإدارة المخوّل بالتمثيل",
  "imp.register": "سجل الجمعيات",
  "imp.ustid": "رقم التعريف الضريبي لضريبة القيمة المضافة",
  "imp.ustidHinweis": "وفقاً للمادة 27أ من قانون ضريبة القيمة المضافة",
  "imp.telefon": "الهاتف",
  "imp.email": "البريد الإلكتروني",
  "imp.verantwortlich": "المسؤول عن المحتوى التحريري",

  "imp.haftung.title": "المسؤولية عن المحتوى الخاص بنا",
  "imp.haftung.body":
    "<p>أُعدّت محتويات موقعنا وفق أفضل ما لدينا من معرفة وبأقصى قدر ممكن من العناية.</p>" +
    "<p>بصفتنا مقدّم خدمة، نتحمل المسؤولية عن المحتوى الخاص بنا على هذا الموقع وفقاً للأحكام القانونية العامة.</p>" +
    "<p>غير أننا لسنا ملزمين بمراقبة المعلومات العائدة لأطراف أخرى والتي تُنقل أو تُخزَّن، ولا بالبحث دون سبب محدد عن ظروف تشير إلى نشاط غير قانوني.</p>" +
    "<p>وتبقى الالتزامات القانونية بإزالة المحتوى غير القانوني أو حجبه غير متأثرة بذلك.</p>" +
    "<p>وإذا علمنا بمخالفة قانونية محددة، فإننا نراجع المحتوى المعني ونزيله أو نحجبه بالقدر الذي يفرضه القانون.</p>",

  "imp.links.title": "المسؤولية عن الروابط الخارجية",
  "imp.links.body":
    "<p>قد يحتوي موقعنا على روابط لمواقع إنترنت خارجية تعود لأطراف أخرى.</p>" +
    "<p>ولا نملك أي تأثير على محتوى هذه الصفحات الخارجية. والمسؤولية عن محتوى الصفحات المرتبطة تقع مبدئياً على مشغّلها.</p>" +
    "<p>ولم تكن أي مخالفات قانونية ظاهرة لنا وقت وضع الروابط.</p>" +
    "<p>ولا يمكن مطالبتنا بمراقبة دائمة لمحتوى الصفحات الخارجية دون وجود دلائل ملموسة على مخالفة قانونية. وإذا علمنا بمخالفة قانونية محددة، فسنراجع الروابط المعنية ونزيلها عند الاقتضاء.</p>",

  "imp.urheber.title": "حقوق النشر",
  "imp.urheber.body":
    "<p>تخضع المحتويات والنصوص والرسومات والصور وسائر الأعمال المنشورة على هذا الموقع لقانون حقوق النشر الألماني، ما لم تكن موضوعة صراحةً تحت رخصة أخرى.</p>" +
    "<p>شعار الجمعية العربية الألمانية في بيكوم ملك للجمعية.</p>" +
    "<p>ويتطلب نسخ المحتويات المحمية بحقوق النشر أو تعديلها أو توزيعها أو استغلالها بأي شكل آخر خارج الحدود القانونية موافقة مسبقة من صاحب الحق المعني.</p>" +
    "<p>وتُستخدم الخطوط المستعملة على الموقع وفقاً لشروط الترخيص السارية على كل منها. والخطوط Bitter وKarla وCairo وNoto Naskh Arabic مرخّصة بموجب رخصة SIL Open Font License 1.1.</p>",

  "imp.streit.title": "تسوية النزاعات",
  "imp.streit.body":
    "<p>لسنا مستعدين ولسنا ملزمين بالمشاركة في إجراءات تسوية النزاعات أمام هيئة تحكيم للمستهلكين، ما لم يوجد التزام قانوني بذلك.</p>",

  "imp.datenschutz.title": "حماية البيانات",
  "imp.datenschutz.body":
    "<p>تجدون المعلومات المتعلقة بمعالجة البيانات الشخصية في <a href=\"datenschutz.html\" data-keep-lang=\"datenschutz.html\">سياسة الخصوصية</a> المنفصلة الخاصة بنا.</p>",

  "imp.traeger.title": "مسؤولية الجمعية",
  "imp.traeger.body":
    "<p>عندما تُقدَّم على هذا الموقع معلومات عن مدرسة إقرأ أو عن الجمعية العربية الألمانية في بيكوم أو عن الدروس المقدَّمة أو الفعاليات، فإن ذلك يتم ضمن نطاق مسؤولية الجمعية المذكورة أعلاه.</p>",

  "imp.stand": "تاريخ الإصدار:",

  /* --------------------------------------------------------- سياسة الخصوصية */
  "doc.datenschutz.desc": "سياسة الخصوصية لمدرسة إقرأ لتعليم اللغة العربية في بيكوم.",

  "ds.title": "سياسة الخصوصية",
  "ds.stand": "تاريخ الإصدار:",

  "ds.1.title": "1. الجهة المسؤولة",
  "ds.1.body":
    "<p>الجهة المسؤولة عن معالجة البيانات الشخصية في ما يتعلق بالموقع والتسجيل وتنظيم مدرسة إقرأ هي:</p>",

  "ds.2.title": "2. المبادئ العامة",
  "ds.2.body":
    "<p>نأخذ حماية البيانات الشخصية على محمل الجد.</p>" +
    "<p>لا نعالج البيانات الشخصية إلا بالقدر الذي تسمح به أحكام حماية البيانات السارية.</p>" +
    "<p>ونراعي في ذلك بوجه خاص مبادئ المشروعية والشفافية وتحديد الغرض وتقليل البيانات والدقة وتحديد مدة الحفظ وكذلك السلامة والسرية.</p>" +
    "<p>ولا نعالج مبدئياً سوى البيانات الشخصية اللازمة للأغراض المعنية.</p>",

  "ds.3.title": "3. زيارة الموقع",
  "ds.3.body":
    "<p>يُقدَّم موقعنا عبر خدمة GitHub Pages.</p>" +
    "<p>عند فتح الموقع قد تتم معالجة بيانات ضرورية تقنياً. ويمكن أن يشمل ذلك بوجه خاص:</p>" +
    "<ul><li>عنوان IP،</li><li>تاريخ ووقت الدخول،</li><li>عنوان الإنترنت المطلوب،</li>" +
    "<li>نوع المتصفح وإصداره،</li><li>نظام التشغيل،</li><li>معلومات تقنية عن الجهاز المستخدم.</li></ul>" +
    "<p>ويمكن معالجة هذه البيانات لضمان أمن الموقع واستقراره وتوفيره تقنياً.</p>" +
    "<p>والأساس القانوني، عند توافر الشروط القانونية، هو المادة 6 فقرة 1 حرف و من اللائحة العامة لحماية البيانات.</p>" +
    "<p>وGitHub خدمة تابعة لشركة GitHub, Inc. وتنتمي إلى مجموعة شركات Microsoft.</p>",

  "ds.4.title": "4. الاستضافة والخدمات التقنية الخارجية",
  "ds.4.body":
    "<p>قد تُستخدم خدمات تقنية خارجية لتوفير بعض وظائف موقعنا.</p>" +
    "<p>وعندما يعالج مقدّمو خدمات خارجيون بيانات شخصية بالنيابة عنا، يتم ذلك على أساس اتفاقيات حماية البيانات اللازمة في كل حالة.</p>" +
    "<p>وفي حالة مقدّمي الخدمات التقنية، لا يمكن استبعاد معالجة البيانات الشخصية خارج الاتحاد الأوروبي أو المنطقة الاقتصادية الأوروبية استبعاداً تاماً.</p>" +
    "<p>وفي هذه الحالات تُراعى المتطلبات القانونية للمواد 44 وما يليها من اللائحة.</p>",

  "ds.5.title": "5. استمارة التسجيل",
  "ds.5.body":
    "<p>عند تسجيل طفلكم عبر الاستمارة الإلكترونية لمدرسة إقرأ، نعالج البيانات الشخصية التي تدخلونها.</p>" +
    "<p>ويمكن أن يشمل ذلك بوجه خاص:</p>" +
    "<h3>بيانات الطفل</h3>" +
    "<ul><li>الاسم،</li><li>اسم العائلة،</li><li>تاريخ الميلاد.</li></ul>" +
    "<h3>بيانات ولي الأمر</h3>" +
    "<ul><li>الاسم،</li><li>اسم العائلة،</li><li>رقم الهاتف،</li><li>رقم واتساب،</li><li>البريد الإلكتروني، إن ذُكر.</li></ul>" +
    "<h3>بيانات التنظيم والمحاسبة</h3>" +
    "<ul><li>طريقة الدفع المطلوبة،</li><li>البيانات اللازمة المتعلقة ببطاقة Münsterlandkarte،</li>" +
    "<li>البيانات اللازمة المتعلقة بخدمات التعليم والمشاركة،</li>" +
    "<li>بيانات توزيع الدورة والمجموعة،</li><li>معلومات تنظيمية عن المشاركة.</li></ul>" +
    "<h3>البيانات المتعلقة بالصحة</h3>" +
    "<p>عندما تقدّمون معلومات عن الحساسية أو عن خصوصيات صحية أخرى لدى طفلكم، فإن ذلك يُعدّ بيانات صحية وبالتالي فئة خاصة من البيانات الشخصية.</p>" +
    "<p>وتخضع البيانات الصحية لحماية قانونية مشددة وفقاً للمادة 9 من اللائحة.</p>" +
    "<p>ولا نعالج هذه المعلومات إلا عند وجود أساس قانوني مناسب أو موافقة صريحة نافذة.</p>",

  "ds.6.title": "6. غرض المعالجة",
  "ds.6.body":
    "<p>تُعالَج البيانات بوجه خاص للأغراض التالية:</p>" +
    "<ul><li>معالجة طلب التسجيل،</li><li>مراجعة مقعد الدورة وتأكيده،</li>" +
    "<li>توزيع الطفل على مجموعة مناسبة،</li><li>تنظيم الدروس وتنفيذها،</li>" +
    "<li>التواصل مع أولياء الأمور،</li><li>إدارة الحضور والغياب،</li>" +
    "<li>التنظيم التربوي،</li><li>تنفيذ الفعاليات،</li>" +
    "<li>إدارة رسوم الدورات ومحاسبتها،</li>" +
    "<li>معالجة بطاقة Münsterlandkarte وخدمات التعليم والمشاركة،</li>" +
    "<li>الوفاء بالالتزامات القانونية،</li><li>واجبات الإثبات والحفظ،</li>" +
    "<li>حماية سير العمل المدرسي بشكل سليم.</li></ul>" +
    "<p>ولا تُستخدم بيانات التسجيل لبيع بيانات شخصية أو لأغراض دعائية لأطراف أخرى.</p>",

  "ds.7.title": "7. الأسس القانونية",
  "ds.7.body":
    "<p>عندما تكون المعالجة لازمة للتمهيد لعلاقة المشاركة أو لتنفيذها أو لإدارتها، فإنها تتم مبدئياً على أساس المادة 6 فقرة 1 حرف ب من اللائحة.</p>" +
    "<p>وعندما نكون ملزمين قانوناً بالمعالجة، تتم المعالجة على أساس المادة 6 فقرة 1 حرف ج من اللائحة.</p>" +
    "<p>وعندما تكون المعالجة لازمة لحماية مصالح مشروعة للجمعية ولا تتعارض معها مصالح راجحة للأشخاص المعنيين، فقد تنطبق المادة 6 فقرة 1 حرف و من اللائحة.</p>" +
    "<p>وتتم المعالجات القائمة على موافقة وفقاً للمادة 6 فقرة 1 حرف أ من اللائحة.</p>" +
    "<p>وتنطبق على البيانات الصحية إضافةً إلى ذلك الشروط الخاصة الواردة في المادة 9 من اللائحة.</p>",

  "ds.8.title": "8. المعالجة عبر حساب Google الخاص بمدرسة إقرأ",
  "ds.8.body":
    "<p>نستخدم حساب Google الخاص بالمدرسة للإدارة التنظيمية لمدرسة إقرأ.</p>" +
    "<p>ويمكن عبر هذا الحساب استخدام خدمات Google التالية بوجه خاص:</p>" +
    "<ul><li>Gmail،</li><li>Google Drive،</li><li>Google Apps Script،</li>" +
    "<li>وعند الاقتضاء خدمات Google أخرى لازمة لتشغيل التسجيل.</li></ul>" +
    "<p>ويمكن عبر Gmail استقبال طلبات التسجيل والرسائل التنظيمية ومعالجتها.</p>" +
    "<p>ويمكن عبر Google Drive حفظ ملفات الإدارة الداخلية وإدارتها.</p>" +
    "<p>وتشير Google إلى أن البيانات قد تُعالَج عالمياً في خدماتها. وتوجد لبعض خدمات Google شروط خاصة لحماية البيانات واتفاقيات لمعالجة البيانات.</p>",

  "ds.9.title": "9. حفظ بيانات المشاركين في ملفات Excel على Google Drive",
  "ds.9.body":
    "<p>يمكن حفظ بيانات المشاركين اللازمة لتنظيم مدرسة إقرأ في سجل إلكتروني للمشاركين.</p>" +
    "<p>ونستخدم لهذا الغرض من بين أمور أخرى ملفات Microsoft Excel تُحفظ على Google Drive الخاص بحساب Google المستخدم لمدرسة إقرأ.</p>" +
    "<p>ويمكن أن يحتوي ملف Excel أو ملف متوافق معه بوجه خاص على المعلومات التالية:</p>" +
    "<ul><li>اسم الطفل،</li><li>تاريخ الميلاد،</li><li>اسم أولياء الأمور،</li>" +
    "<li>رقم الهاتف،</li><li>رقم واتساب،</li><li>البريد الإلكتروني،</li><li>توزيع المجموعة،</li>" +
    "<li>معلومات الحضور،</li><li>معلومات الدفع،</li><li>بيانات تنظيمية عن المشاركة.</li></ul>" +
    "<p>ولا تُدرَج البيانات الصحية إلا بالقدر الذي تكون فيه معالجتها لازمة لغرض محدد وجائزة قانوناً.</p>",

  "ds.10.title": "10. الوصول إلى ملفات Excel",
  "ds.10.body":
    "<p>يُستخدم سجل المشاركين حصراً للتنظيم الداخلي لمدرسة إقرأ.</p>" +
    "<p>ويجب حصر الوصول إلى الملفات بالأشخاص الذين يحتاجون هذه البيانات بحكم مهمتهم المحددة في تنظيم الدروس أو تنفيذها.</p>" +
    "<p>ولا يجوز بوجه خاص أن تكون الملفات:</p>" +
    "<ul><li>متاحة للعموم،</li><li>متاحة عبر روابط مشاركة عامة،</li>" +
    "<li>مُسلَّمة إلى أولياء أمور أو طلاب آخرين،</li>" +
    "<li>منسوخة دون ضرورة وظيفية أو تنظيمية.</li></ul>" +
    "<p>وينبغي مراجعة صلاحيات الوصول بانتظام وتعديلها أو سحبها فوراً عند انتهاء عمل الشخص المخوّل بالوصول.</p>" +
    "<p>وتتخذ الجمعية تدابير تقنية وتنظيمية مناسبة لحماية البيانات المحفوظة.</p>",

  "ds.11.title": "11. أمن حساب Google",
  "ds.11.body":
    "<p>يجب حماية حساب Google المستخدم للمدرسة بتدابير أمان مناسبة للدخول.</p>" +
    "<p>وينبغي بوجه خاص استخدام المصادقة الثنائية، متى كانت متاحة تقنياً ومهيأة تنظيمياً.</p>" +
    "<p>ولا يجوز تسليم كلمات المرور وبيانات الدخول إلى أشخاص غير مخوّلين.</p>" +
    "<p>ولا يجوز للأشخاص الذين لديهم وصول إلى الحساب أو إلى سجل المشاركين استخدام البيانات إلا للأغراض المدرسية والتنظيمية المقررة.</p>",

  "ds.12.title": "12. المعالجة عبر Gmail وGoogle Apps Script",
  "ds.12.body":
    "<p>يمكن تقنياً معالجة البيانات المُدخلة في استمارة التسجيل الإلكترونية عبر Google Apps Script وإرسالها إلى بريد Gmail المستخدم للمدرسة.</p>" +
    "<p>وبعد وصول طلب التسجيل يمكن نقل البيانات اللازمة إلى سجل المشاركين الداخلي لمتابعة المعالجة.</p>" +
    "<p>وعندما تُستخدم خدمات Google لهذا الغرض، فقد تعالج Google بيانات شخصية في إطار الخدمات المعنية.</p>" +
    "<p>وتتحدد المعالجة الفعلية بحسب خدمات Google التي نستخدمها والشروط السارية عليها.</p>",

  "ds.13.title": "13. Google Drive واحتمال المعالجة خارج الاتحاد الأوروبي",
  "ds.13.body":
    "<p>تشغّل Google خدمات وبنية تقنية على مستوى العالم. ولذلك لا يمكن استبعاد معالجة البيانات الشخصية خارج المنطقة الاقتصادية الأوروبية استبعاداً تاماً.</p>" +
    "<p>وتنطبق على عمليات نقل البيانات الدولية المتطلبات القانونية للمواد 44 وما يليها من اللائحة.</p>" +
    "<p>وتوفّر Google لبعض الخدمات السحابية اتفاقيات لحماية البيانات وقواعد لنقل البيانات دولياً.</p>",

  "ds.14.title": "14. التواصل عبر واتساب",
  "ds.14.body":
    "<p>يمكن للمدرسة استخدام أرقام الهاتف أو أرقام واتساب التي يذكرها أولياء الأمور للتواصل التنظيمي.</p>" +
    "<p>ويمكن استخدام واتساب بوجه خاص للأغراض التالية:</p>" +
    "<ul><li>الإبلاغ عن مواعيد الدروس،</li><li>معلومات عن إلغاء الدروس،</li>" +
    "<li>الاستفسارات التنظيمية،</li><li>معلومات عن الفعاليات،</li>" +
    "<li>التواصل بشأن الواجبات المنزلية،</li><li>معلومات أخرى عن سير العمل المدرسي.</li></ul>" +
    "<p>وعندما لا يكون التواصل عبر واتساب ضرورياً بشكل قاطع، يمكن التواصل بدلاً من ذلك عبر البريد الإلكتروني بوجه خاص.</p>",

  "ds.15.title": "15. مجموعات واتساب",
  "ds.15.body":
    "<p>يمكن إنشاء مجموعات واتساب لصفوف أو مجموعات تعليمية بعينها.</p>" +
    "<p>وعند المشاركة في مجموعة كهذه قد يصبح رقم هاتف المشارك بوجه خاص مرئياً لبقية أعضاء المجموعة.</p>" +
    "<p>ولذلك تكون المشاركة في مجموعة كهذه طوعية مبدئياً، ما لم تكن ضرورية بشكل قاطع لتنفيذ العقد.</p>" +
    "<p>وينبغي أن تتوفر وسيلة تواصل بديلة للمعلومات الجوهرية.</p>" +
    "<p>ولا ينبغي بوجه خاص نشر معلومات عن الحساسية أو الأمراض أو غيرها من الظروف الشخصية المحمية بشكل خاص لأطفال بعينهم في مجموعات واتساب.</p>",

  "ds.16.title": "16. البيانات الصحية والحساسية",
  "ds.16.body":
    "<p>لا تُعالَج المعلومات المتعلقة بالحساسية وغيرها من الخصوصيات الصحية إلا إذا كانت لازمة لمشاركة الطفل بأمان في الدروس أو في فعالية، أو إذا وُجد أساس قانوني آخر للمعالجة.</p>" +
    "<p>وتُمنح البيانات الصحية حماية خاصة.</p>" +
    "<p>وينبغي حصر الوصول بالأشخاص الذين يحتاجون هذه المعلومات فعلاً لضمان سلامة الطفل ورعايته.</p>" +
    "<p>وعندما تستند المعالجة إلى موافقة صريحة، يمكن سحب هذه الموافقة في أي وقت بأثر مستقبلي.</p>" +
    "<p>وتبقى مشروعية المعالجة حتى لحظة السحب غير متأثرة بذلك.</p>",

  "ds.17.title": "17. بطاقة Münsterlandkarte وخدمات التعليم والمشاركة",
  "ds.17.body":
    "<p>عند استخدام بطاقة Münsterlandkarte أو خدمات حزمة التعليم والمشاركة، لا نعالج سوى البيانات والإثباتات اللازمة لذلك.</p>" +
    "<p>وعندما يتعين إرسال بيانات إلى الجهات المختصة للتحقق أو للمحاسبة، يتم ذلك بالقدر اللازم فقط وعلى أساس الأحكام القانونية المعنية.</p>" +
    "<p>ولا تُحفظ نسخة كاملة عن وثيقة هوية أو عن بطاقة إلا إذا كان ذلك لازماً فعلاً للغرض المعني وجائزاً قانوناً.</p>",

  "ds.18.title": "18. الصور والتصوير",
  "ds.18.body":
    "<p>قد تُلتقط صور أثناء الدروس وفي الأنشطة المدرسية.</p>" +
    "<p>ولا تُنشر صور يمكن التعرف فيها على الطفل إلا مبدئياً على أساس موافقة مقابلة، متى كانت هذه الموافقة لازمة.</p>" +
    "<p>ويمكن أن تكون أماكن النشر المحتملة بوجه خاص:</p>" +
    "<ul><li>موقع الجمعية،</li><li>حسابات الجمعية على وسائل التواصل الاجتماعي،</li><li>مواد الجمعية أو المدرسة.</li></ul>" +
    "<p>والموافقة على التصوير طوعية.</p>" +
    "<p>ولا تُعلَّق المشاركة في الدروس الاعتيادية على منح هذه الموافقة.</p>" +
    "<p>ويمكن سحب الموافقة الممنوحة في أي وقت بأثر مستقبلي.</p>",

  "ds.19.title": "19. الجهات التي تتلقى البيانات الشخصية",
  "ds.19.body":
    "<p>داخل الجمعية لا يتلقى البيانات الشخصية سوى الأشخاص الذين يحتاجونها لأداء مهمتهم.</p>" +
    "<p>وبحسب المعالجة المعنية، يمكن أن تُعالَج البيانات الشخصية بوجه خاص من قبل:</p>" +
    "<ul><li>مقدّمي خدمات الاستضافة التقنية،</li><li>خدمات Google،</li><li>مقدّم خدمة إجراء التسجيل،</li>" +
    "<li>خدمات البريد الإلكتروني،</li><li>خدمات التخزين السحابي،</li><li>خدمات التواصل،</li>" +
    "<li>الجهات المختصة في ما يتعلق بخدمات التعليم والمشاركة.</li></ul>" +
    "<p>ولا تُنقل البيانات إلى أطراف أخرى إلا إذا وُجد أساس قانوني لذلك، أو كان النقل لازماً لتنفيذ علاقة المشاركة، أو وُجدت موافقة نافذة.</p>",

  "ds.20.title": "20. مدة الحفظ",
  "ds.20.body":
    "<p>نحفظ البيانات الشخصية فقط للمدة اللازمة للغرض المعني.</p>" +
    "<p>وتُعالَج بيانات التسجيل مبدئياً طوال مشاركة الطفل في مدرسة إقرأ.</p>" +
    "<p>وبعد انتهاء المشاركة تُحذف البيانات حالما لم تعد لازمة لتنظيم الدروس وتنفيذها ولم تكن هناك واجبات حفظ قانونية تحول دون ذلك.</p>" +
    "<p>وعند وجود واجبات حفظ قانونية، تُحفظ البيانات المعنية للمدة المقررة قانوناً.</p>" +
    "<p>وتُحذف البيانات الصحية حالما ينتفي غرض معالجتها، ما لم يسمح أساس قانوني آخر بحفظها أو يوجبه.</p>",

  "ds.21.title": "21. التدابير التقنية والتنظيمية",
  "ds.21.body":
    "<p>نتخذ تدابير تقنية وتنظيمية مناسبة لحماية البيانات الشخصية.</p>" +
    "<p>ويشمل ذلك بوجه خاص:</p>" +
    "<ul><li>تقييد صلاحيات الوصول،</li><li>الحماية بكلمة مرور،</li><li>تأمين حساب Google،</li>" +
    "<li>استخدام المصادقة الثنائية قدر الإمكان،</li><li>التعامل السري مع بيانات الدخول،</li>" +
    "<li>حماية قوائم المشاركين الإلكترونية،</li><li>تجنّب النسخ غير الضرورية للبيانات،</li>" +
    "<li>المراجعة المنتظمة لصلاحيات الوصول،</li><li>حذف البيانات التي لم تعد لازمة.</li></ul>",

  "ds.22.title": "22. حقوقكم",
  "ds.22.body":
    "<p>للأشخاص المعنيين، وفقاً للأحكام القانونية، الحقوق التالية بوجه خاص:</p>" +
    "<h3>الحق في الاطلاع</h3>" +
    "<p>يمكنكم طلب معلومات عمّا إذا كانت تُعالَج بيانات شخصية تخصكم وعن ماهيتها.</p>" +
    "<h3>الحق في التصحيح</h3>" +
    "<p>يمكنكم طلب تصحيح البيانات الشخصية غير الصحيحة أو استكمال البيانات الناقصة.</p>" +
    "<h3>الحق في الحذف</h3>" +
    "<p>يمكنكم، ضمن الشروط القانونية، طلب حذف البيانات الشخصية.</p>" +
    "<h3>الحق في التقييد</h3>" +
    "<p>يمكنكم، ضمن الشروط القانونية، طلب تقييد المعالجة.</p>" +
    "<h3>الحق في نقل البيانات</h3>" +
    "<p>لكم، ضمن الشروط القانونية، الحق في الحصول على البيانات الشخصية بصيغة منظَّمة وشائعة وقابلة للقراءة آلياً.</p>" +
    "<h3>الحق في الاعتراض</h3>" +
    "<p>يمكنكم، ضمن الشروط القانونية، الاعتراض على عمليات معالجة معينة.</p>" +
    "<h3>سحب الموافقات</h3>" +
    "<p>عندما تستند المعالجة إلى موافقتكم، يمكنكم سحبها في أي وقت بأثر مستقبلي.</p>" +
    "<p>وتبقى مشروعية المعالجة التي تمت على أساس الموافقة حتى لحظة السحب غير متأثرة بذلك.</p>",
  "ds.22.kontakt": "لممارسة حقوقكم تكفي رسالة إلى العنوان التالي:",

  "ds.23.title": "23. حق تقديم شكوى إلى هيئة رقابية",
  "ds.23.body":
    "<p>لكم الحق في تقديم شكوى إلى هيئة رقابية لحماية البيانات بشأن معالجة بياناتكم الشخصية.</p>" +
    "<p>والهيئة الرقابية المختصة في ولاية شمال الراين-وستفاليا هي بوجه خاص:</p>" +
    "<p><strong>Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen (LDI NRW)</strong><br>Kavalleriestraße 2–4<br>40213 Düsseldorf</p>",

  "ds.24.title": "24. عدم وجود اتخاذ قرارات آلي",
  "ds.24.body":
    "<p>لا يجري في إطار التسجيل في مدرسة إقرأ وتنظيمها أي اتخاذ قرارات آلي، بما في ذلك التنميط بمفهوم المادة 22 من اللائحة.</p>",

  "ds.25.title": "25. تحديث سياسة الخصوصية هذه",
  "ds.25.body":
    "<p>يمكننا تعديل سياسة الخصوصية هذه إذا تغيّرت إجراءاتنا التقنية أو مقدّمو الخدمات الذين نستعين بهم أو أساليب العمل التنظيمية أو المتطلبات القانونية.</p>" +
    "<p>وتسري في كل حالة النسخة الحالية المنشورة على موقعنا.</p>",

  "ds.26.title": "26. الخطوط",
  "ds.26.body":
    "<p>تُحمَّل الخطوط المستخدمة في هذه الصفحة من خادمنا الخاص. ولا يتم إنشاء أي اتصال بخدمة Google Fonts، ولا تُنقل أي بيانات إلى أطراف أخرى في هذا السياق.</p>",

  "ds.27.title": "27. ملفات تعريف الارتباط وقياس الزيارات",
  "ds.27.body":
    "<p>لا يستخدم هذا الموقع ملفات تعريف ارتباط، ولا أي خدمات تحليل أو تتبّع. أما اختياركم للغة فيُحفظ محلياً في متصفحكم فقط (localStorage) ولا يُنقل إلينا.</p>",

  /* -------------------------------------------------- شروط وأحكام المشاركة */
  /* ------------------------------------------------- صفحة إنهاء المشاركة */
  "doc.kuendigung.title": "إنهاء المشاركة — مدرسة إقرأ في بيكوم",
  "doc.kuendigung.desc": "إنهاء المشاركة في دروس اللغة العربية في مدرسة إقرأ في بيكوم.",

  "kd.title": "إنهاء المشاركة",
  "kd.intro": "يمكنكم عبر هذا النموذج إنهاء مشاركة طفلكم في دروس اللغة العربية في مدرسة إقرأ. ولا تحتاجون إلى حساب أو كلمة مرور.",
  "kd.fristen": "بشأن المدد والمهل يرجى مراجعة البند 3 من شروط المشاركة: تسري المشاركة في البداية لمدة نصف سنة دراسية. وإذا لم يتم إنهاؤها قبل انتهاء نصف السنة بأربعة أسابيع على الأقل، فإنها تُمدَّد لمدة غير محددة ويمكن بعد ذلك إنهاؤها في أي وقت بمهلة شهر واحد.",

  "kd.art.legend": "نوع الإنهاء",
  "kd.art.frage": "كيف ترغبون في الإنهاء؟",
  "kd.art.ordentlich": "إنهاء اعتيادي",
  "kd.art.ordentlichSub": "في أقرب موعد ممكن وفقاً للمهل المذكورة في البند 3",
  "kd.art.ausser": "إنهاء استثنائي لسبب مهم",
  "kd.art.ausserSub": "دون التقيد بمهلة، مع ذكر السبب",
  "kd.grund": "سبب الإنهاء الاستثنائي",
  "kd.grundHint": "مطلوب فقط في حالة الإنهاء الاستثنائي.",

  "kd.vertrag.legend": "أي مشاركة يتعلق بها الأمر؟",
  "kd.person.legend": "من يقدّم الإنهاء؟",
  "kd.kontakt.legend": "إلى أين نرسل التأكيد؟",
  "kd.kontaktHint": "نؤكد لكم وصول الإنهاء دون تأخير بشكل نصي — مع التاريخ والوقت والموعد الذي تنتهي فيه المشاركة.",

  "kd.zeitpunkt.frage": "في أي موعد ينبغي أن تنتهي المشاركة؟",
  "kd.zeitpunkt.naechst": "في أقرب موعد ممكن",
  "kd.zeitpunkt.datum": "في تاريخ محدد",
  "kd.zeitpunkt.datumLabel": "التاريخ المطلوب",

  "kd.submit": "إنهاء المشاركة الآن",
  "kd.speichern": "يرجى طباعة هذه الصفحة أو حفظها قبل الإرسال — بذلك يبقى لديكم إقراركم مع التاريخ والوقت كإثبات.",
  "kd.erfolg.title": "وصلنا طلب إنهاء المشاركة",
  "kd.erfolg.text": "شكراً لكم. سجّلنا طلب الإنهاء وسنرسل التأكيد إلى البريد الإلكتروني الذي ذكرتموه.",
  "kd.fehler.title": "تعذّر الإرسال",
  "kd.fehler.text": "بياناتكم ما زالت موجودة في النموذج. يمكنكم المحاولة مرة أخرى بعد قليل. ويكون الإنهاء نافذاً أيضاً بأي صيغة عبر البريد الإلكتروني أو واتساب:",
  "kd.fehler.mail": "إرسال الإنهاء عبر البريد الإلكتروني",

  "doc.agb.desc": "شروط وأحكام المشاركة في مدرسة إقرأ، الجمعية العربية الألمانية في بيكوم.",

  "agb.title": "شروط وأحكام مدرسة إقرأ",
  "agb.untertitel": "مدرسة إقرأ التابعة للجمعية العربية الألمانية في بيكوم",
  "agb.stand": "تاريخ الإصدار:",

  "agb.1.title": "1. نطاق التطبيق",
  "agb.1.body":
    "<p>يرجى قراءة الشروط والأحكام التالية بعناية قبل تسجيل الطفل. يهدف هذا التنظيم إلى ضمان سير الدروس بشكل جيد، وتوفير بيئة تعليمية مناسبة لجميع الطلاب.</p>" +
    "<p>تسري هذه الشروط والأحكام على المشاركة في دروس اللغة العربية التي تقدّمها مدرسة إقرأ التابعة للجمعية العربية الألمانية في بيكوم، وكذلك على ما يرتبط بها من أنشطة مدرسية وتربوية وتنظيمية.</p>" +
    "<p>وتسري تجاه ولي الأمر أو الممثل القانوني للطالب القاصر الذي يقوم بالتسجيل.</p>" +
    "<p>ويُعد تسجيل الطفل في مدرسة إقرأ إقراراً من ولي الأمر بأنه قرأ هذه الشروط والأحكام واطّلع عليها.</p>" +
    "<p>وتبقى الحقوق القانونية الملزمة للطالب أو لممثليه القانونيين غير متأثرة بذلك.</p>",

  "agb.2.title": "2. التسجيل والقبول",
  "agb.2.body":
    "<p>يتم تسجيل الطالب من خلال نموذج التسجيل الموجود على الموقع. بعد إرسال طلب التسجيل، تتواصل المدرسة مع ولي الأمر عبر واتساب أو البريد الإلكتروني لتأكيد التسجيل وتزويده بالمعلومات اللازمة.</p>" +
    "<p>يجب تقديم البيانات المطلوبة في نموذج التسجيل بشكل صحيح وكامل، ويجب كتابة الاسم واسم العائلة كما هو مذكور في بطاقة الهوية أو الوثيقة الرسمية.</p>" +
    "<p>لا يُعتبر إرسال نموذج التسجيل وحده تأكيداً نهائياً للتسجيل، ولا ينشأ بمجرد إرساله أي حق في مقعد محدد في الدورة.</p>" +
    "<p>وبعد وصول الطلب تراجع المدرسة البيانات والمقاعد المتاحة والمتطلبات التنظيمية.</p>" +
    "<p>ويصبح التسجيل مؤكداً بعد مراجعة الطلب والتواصل مع ولي الأمر من قبل المدرسة أو بتخصيص مقعد محدد للطالب.</p>",

  "agb.3.title": "3. مدة المشاركة وتمديدها وإنهاؤها",
  "agb.3.body":
    "<p>يتم الاتفاق على المشاركة في البداية لمدة نصف سنة دراسية. وتتبع أنصاف السنة الدراسية المواعيد المعتمدة في ولاية شمال الراين-وستفاليا.</p>" +
    "<p>وإذا لم يتم إنهاء المشاركة قبل انتهاء نصف السنة بأربعة أسابيع على الأقل، فإنها تُمدَّد لمدة غير محددة.</p>" +
    "<p>ويمكن لكلا الطرفين إنهاء المشاركة الممددة لمدة غير محددة في أي وقت بمهلة شهر واحد. ولا يلزم تسجيل جديد للاستمرار.</p>" +
    "<p>ويجب أن يكون الإنهاء بشكل نصي. ويمكن تقديمه بوجه خاص عبر البريد الإلكتروني أو عبر واتساب أو عبر <a href=\"kuendigung.html\" data-keep-lang=\"kuendigung.html\">صفحة إنهاء المشاركة على هذا الموقع</a>.</p>" +
    "<p>ويتم تأكيد وصول الإنهاء دون تأخير بشكل نصي. ويذكر التأكيد مضمون الإنهاء وتاريخ ووقت وصوله والموعد الذي تنتهي فيه المشاركة.</p>" +
    "<p>ويبقى حق كلا الطرفين في الإنهاء الاستثنائي لسبب مهم غير متأثر بذلك؛ ويسري في هذا الشأن البند 25 من هذه الشروط.</p>",

  "agb.4.title": "4. حق العدول للمستهلكين",
  "agb.4.body":
    "<p>يُعد أولياء الأمور الذين يبرمون العقد لغرض لا يمكن نسبته إلى نشاطهم التجاري أو المهني المستقل مستهلكين. ويسري عليهم حق العدول التالي.</p>" +
    "<h3>إرشادات العدول</h3>" +
    "<p><strong>حق العدول</strong></p>" +
    "<p>يحق لكم العدول عن هذا العقد خلال أربعة عشر يوماً دون ذكر الأسباب.</p>" +
    "<p>ومدة العدول أربعة عشر يوماً اعتباراً من يوم إبرام العقد.</p>" +
    "<p>ولممارسة حق العدول، عليكم إبلاغنا</p>" +
    "<p><span data-cfg=\"impressum.verein\">Arabisch-Deutscher-Verein e.V. Beckum</span><br>" +
    "<span data-cfg=\"impressum.anschrift\">Nordwall 14, 59269 Beckum</span><br>" +
    "الهاتف: <span class=\"ltr\" data-cfg=\"telefon\">0177 5883033</span><br>" +
    "البريد الإلكتروني: <span class=\"ltr\" data-cfg=\"email\">iqraaschulebeckum@gmail.com</span></p>" +
    "<p>بقراركم العدول عن هذا العقد، وذلك بإعلان واضح (مثل رسالة بالبريد أو رسالة إلكترونية). ويمكنكم لهذا الغرض استخدام نموذج العدول المدرج في البند 5، وهو غير إلزامي.</p>" +
    "<p>ويكفي لحفظ مدة العدول أن ترسلوا الإشعار بممارسة حق العدول قبل انتهاء هذه المدة.</p>" +
    "<p><strong>آثار العدول</strong></p>" +
    "<p>إذا عدلتم عن هذا العقد، فإن علينا أن نردّ إليكم جميع المبالغ التي تلقيناها منكم، دون تأخير وخلال أربعة عشر يوماً على أبعد تقدير من اليوم الذي وصلنا فيه إشعاركم بالعدول عن هذا العقد. ونستخدم لهذا الردّ وسيلة الدفع نفسها التي استخدمتموها في المعاملة الأصلية، ما لم يُتفق معكم صراحةً على خلاف ذلك؛ ولن تُفرض عليكم في أي حال رسوم بسبب هذا الردّ.</p>" +
    "<p>وإذا كنتم قد طلبتم أن تبدأ الخدمات خلال مدة العدول، فعليكم أن تدفعوا لنا مبلغاً مناسباً يعادل نسبة الخدمات التي قُدّمت بالفعل حتى اللحظة التي أبلغتمونا فيها بممارسة حق العدول، قياساً إلى مجمل الخدمات المنصوص عليها في العقد.</p>" +
    "<p><strong>سقوط حق العدول</strong></p>" +
    "<p>يسقط حق العدول في العقود المتعلقة بتقديم الخدمات إذا كنا قد قدّمنا الخدمة كاملةً ولم نبدأ بتنفيذها إلا بعد أن منحتم موافقتكم الصريحة على ذلك وأكّدتم في الوقت نفسه علمكم بأنكم تفقدون حق العدول عند تنفيذنا العقد بالكامل.</p>" +
    "<h3>بدء الدروس خلال مدة العدول</h3>" +
    "<p>يمكنكم عند التسجيل أن تطلبوا صراحةً أن تبدأ الدروس قبل انتهاء مدة العدول. وهذا الإقرار طوعي.</p>" +
    "<p>وإذا لم تستفيدوا منه، فلا يمكن لطفلكم المشاركة في الدروس إلا بعد انتهاء مدة العدول. ولا يترتب على ذلك أي ضرر لكم؛ إذ تُعدَّل الرسوم الدراسية في هذه الحالة بما يتناسب مع ذلك.</p>",

  "agb.5.title": "5. نموذج العدول",
  "agb.5.body":
    "<p>إذا رغبتم في العدول عن العقد، يمكنكم تعبئة هذا النموذج وإعادته إلينا. وهذا غير إلزامي — إذ يكفي إعلان واضح بأي صيغة.</p>" +
    "<blockquote>" +
    "<p>إلى <span data-cfg=\"impressum.verein\">Arabisch-Deutscher-Verein e.V. Beckum</span>، " +
    "<span data-cfg=\"impressum.anschrift\">Nordwall 14, 59269 Beckum</span>، " +
    "البريد الإلكتروني: <span class=\"ltr\" data-cfg=\"email\">iqraaschulebeckum@gmail.com</span></p>" +
    "<p>أعلن/نعلن بموجب هذا العدول عن العقد الذي أبرمته/أبرمناه (*) بشأن تقديم الخدمة التالية: المشاركة في دروس اللغة العربية في مدرسة إقرأ.</p>" +
    "<p>اسم الطفل: _______________________<br>" +
    "تاريخ الطلب (*) / تاريخ الاستلام (*): _______________________<br>" +
    "اسم المستهلك/المستهلكين: _______________________<br>" +
    "عنوان المستهلك/المستهلكين: _______________________<br>" +
    "توقيع المستهلك/المستهلكين (فقط عند الإبلاغ ورقياً): _______________________<br>" +
    "التاريخ: _______________________</p>" +
    "<p>(*) يُشطب ما لا ينطبق.</p>" +
    "</blockquote>",

  "agb.6.title": "6. الفئة العمرية والمستوى الدراسي وتوزيع المجموعات",
  "agb.6.body":
    "<p>تستقبل المدرسة الطلاب من مختلف الأعمار والمستويات، وفقاً للمجموعات المتوفرة.</p>" +
    "<p>ويتم توزيع الطلاب على المجموعات مع مراعاة ما يلي بوجه خاص:</p>" +
    "<ul><li>العمر،</li><li>معرفة اللغة العربية المتوفرة،</li><li>المستوى الدراسي،</li>" +
    "<li>الاحتياجات التربوية،</li><li>حجم المجموعة،</li><li>المقاعد المتاحة في الدورة.</li></ul>" +
    "<p>ولا ينشأ حق في مجموعة بعينها أو في يوم دراسي بعينه إلا إذا جرى تأكيد ذلك صراحةً.</p>" +
    "<p>ويحق للمدرسة، بناءً على تقييم المعلمين، نقل الطالب إلى مجموعة أخرى إذا تبين أن مستواه أو احتياجاته التعليمية تتناسب بشكل أفضل مع مجموعة مختلفة.</p>" +
    "<p>ويُبلَّغ أولياء الأمور بأي تغيير جوهري في توزيع المجموعة.</p>",

  "agb.7.title": "7. مواعيد الدروس والالتزام بالمواعيد",
  "agb.7.body":
    "<p>يلتزم الطلاب بالحضور في الوقت المحدد للدرس وبمواعيد الدروس المُبلَّغ عنها.</p>" +
    "<p>وينبغي أن يحضر الطلاب قبل بدء الدرس بوقت كافٍ.</p>" +
    "<p>يرجى تجنب التأخر المتكرر، لما قد يسببه من تأثير على الطالب وعلى سير الدرس وبقية الطلاب.</p>" +
    "<p>وفي حال تكرار التأخر، يمكن للمدرسة التواصل مع ولي الأمر والعمل على تحسين الوضع.</p>",

  "agb.8.title": "8. الحضور والغياب",
  "agb.8.body":
    "<p>يلتزم الطالب بالحضور المنتظم إلى الدروس، فالمواظبة شرط لتحقيق تقدم دراسي حقيقي.</p>" +
    "<p>في حال عدم تمكن الطفل من حضور الدرس، يجب على ولي الأمر إبلاغ المدرسة قبل موعد الحصة بساعتين على الأقل، متى كان ذلك ممكناً ومعقولاً.</p>" +
    "<p>وفي حال المرض أو أي ظرف طارئ غير متوقع، يجب إبلاغ المدرسة فور العلم بالمانع.</p>" +
    "<p>ولا ينشأ عن الإبلاغ عن الغياب مبدئياً أي حق في تعويض الحصة الفائتة أو في استرداد جزء من الرسوم.</p>" +
    "<p>وفي حال تكرار الغياب غير المبرر، يمكن للمدرسة أولاً التواصل مع أولياء الأمور والتنبيه إلى ضرورة المواظبة.</p>" +
    "<p>وفي حال تكرار الغياب غير المبرر ثلاث مرات، يحق للمدرسة، بعد التواصل المسبق مع ولي الأمر، إنهاء مشاركة الطالب إذا كان الغياب يؤثر بشكل كبير على سير الدروس أو على تنظيم المجموعة.</p>" +
    "<p>وتبقى المطالبات المالية القانونية التي نشأت بالفعل غير متأثرة بذلك.</p>",

  "agb.9.title": "9. الرسوم وطرق الدفع",
  "agb.9.body":
    "<p>تُحدد الرسوم الدراسية وفقاً للفترة الدراسية والمعلومات الموضحة في نموذج التسجيل والمُبلَّغ عنها عند التسجيل أو القبول.</p>" +
    "<p>وبحسب الدورة والإمكانات التنظيمية، يمكن أن تُتاح طرق الدفع التالية بوجه خاص:</p>" +
    "<ul><li>الدفع نقداً،</li><li>بطاقة Münsterlandkarte،</li><li>خدمات التعليم والمشاركة (BuT).</li></ul>" +
    "<p>ويتم إبلاغكم بطرق الدفع المتاحة عند التسجيل أو بعد مراجعة الطلب.</p>",

  "agb.10.title": "10. الدفع نقداً",
  "agb.10.body":
    "<p>يتم دفع الرسوم في الموعد الذي تحدده المدرسة بعد التسجيل. وسيتم إبلاغ ولي الأمر بالموعد مسبقاً.</p>" +
    "<p>ويُسلَّم إيصال أو تأكيد بالدفع بعد إتمام الدفع.</p>",

  "agb.11.title": "11. بطاقة Münsterlandkarte وخدمات التعليم والمشاركة",
  "agb.11.body":
    "<p>عند اختيار الدفع باستخدام بطاقة Münsterlandkarte، يجب إدخال البيانات المطلوبة في نموذج التسجيل وإحضار البطاقة في أول درس، وتقديم الإثباتات والبيانات اللازمة للمحاسبة في الوقت المناسب.</p>" +
    "<p>تتحقق المدرسة من بيانات البطاقة ومن توفر رصيد كافٍ لتغطية كامل الرسوم.</p>" +
    "<p>ويحق للمدرسة مراجعة البيانات اللازمة للمحاسبة وإرسالها إلى الجهات المختصة، بالقدر الجائز قانوناً واللازم لذلك.</p>" +
    "<p>وينبغي أن تجمع المدرسة وتحفظ مبدئياً المعلومات اللازمة للمراجعة والمحاسبة فقط.</p>" +
    "<p>ويُعتبر القبول أو التأكيد النهائي للمقعد مرتبطاً بتوفر التمويل أو تغطية التكاليف فعلياً، أي عند توفر الرصيد الكافي لتغطية الرسوم المطلوبة.</p>",

  "agb.12.title": "12. الكتب والمواد التعليمية",
  "agb.12.body":
    "<p>تشمل الرسوم الدراسية الكتب والمواد الأساسية المطلوبة للدروس، متى ذُكر ذلك عند التسجيل أو في وصف الدورة.</p>" +
    "<p>وقد تترتب تكاليف إضافية في حال الحاجة إلى مواد أو دفاتر عمل أو مشاريع خاصة أو خدمات أخرى غير مشمولة ضمن الرسوم.</p>" +
    "<p>ويتم إبلاغ أولياء الأمور بالتكاليف الإضافية مسبقاً كقاعدة عامة.</p>",

  "agb.13.title": "13. الأنشطة والفعاليات",
  "agb.13.body":
    "<p>قد تنظم المدرسة أنشطة وفعاليات تعليمية وثقافية وترفيهية للطلاب إلى جانب الدروس.</p>" +
    "<p>تكون بعض الأنشطة مجانية.</p>" +
    "<p>بينما قد تتطلب بعض الأنشطة الأخرى رسوماً أو مساهمة إضافية، وذلك بحسب طبيعة النشاط وتكاليفه.</p>" +
    "<p>وسيتم إبلاغ أولياء الأمور بالتكاليف المترتبة قبل أي نشاط مدفوع.</p>",

  "agb.14.title": "14. السلوك والاحترام المتبادل",
  "agb.14.body":
    "<p>يلتزم جميع الطلاب باحترام المعلمين والطلاب والعاملين في المدرسة وسائر المشاركين في تنفيذ الدروس، والالتزام بقواعد السلوك داخل الصف.</p>" +
    "<p>ولا يُسمح بوجه خاص بما يلي:</p>" +
    "<ul><li>العنف الجسدي،</li><li>التهديد،</li><li>الإهانة،</li><li>التنمّر،</li>" +
    "<li>التشويش المتكرر والجسيم على سير الدرس،</li><li>الإتلاف المتعمّد للممتلكات،</li>" +
    "<li>السلوك غير المحترم أو التمييزي بشكل جسيم.</li></ul>" +
    "<p>ويكون التعامل مع المخالفات مبدئياً بأسلوب تربوي مناسب.</p>" +
    "<p>وبحسب نوع المخالفة وشدتها، يمكن للمدرسة تنبيه الطالب وإبلاغ ولي أمره.</p>" +
    "<p>وفي حال تكرار المخالفات أو جسامتها، يحق للمدرسة اتخاذ الإجراءات المناسبة الأخرى.</p>" +
    "<p>وقد يشمل ذلك، بعد مراجعة مناسبة وبعد إنذار مسبق متى كان ذلك معقولاً، إنهاء مشاركة الطالب.</p>" +
    "<p>وفي حالات سوء السلوك الجسيم بشكل خاص، قد يُنظر في الإنهاء الفوري لسبب مهم.</p>",

  "agb.15.title": "15. التعاون بين الأهل والمدرسة",
  "agb.15.body":
    "<p>يلتزم أولياء الأمور بمتابعة أبنائهم بشكل فعال ومستمر، والاهتمام بالدروس والواجبات المنزلية، وتشجيع الطالب على المواظبة والاستفادة من الدروس.</p>" +
    "<p>ويشمل ذلك بوجه خاص:</p>" +
    "<ul><li>تشجيع الحضور المنتظم،</li><li>الحرص على إنجاز الواجبات المنزلية،</li>" +
    "<li>الاهتمام بملاحظات المعلمين وتوجيهاتهم وأخذها بعين الاعتبار،</li>" +
    "<li>إبلاغ المدرسة بالمعلومات المهمة المتعلقة بالطفل،</li>" +
    "<li>التعاون مع المدرسة عند وجود صعوبات دراسية.</li></ul>" +
    "<p>إن نجاح الطالب يعتمد على التعاون المستمر بين الطالب والأسرة والمدرسة، ولذلك نولي أهمية كبيرة لدور أولياء الأمور في متابعة العملية التعليمية.</p>" +
    "<p>وفي حال ملاحظة عدم وجود اهتمام أو تعاون كافٍ من جانب ولي الأمر بما يؤثر سلباً على تعلم الطالب أو سير العملية التعليمية، ستقوم المدرسة أولاً بالتواصل مع ولي الأمر وتنبيهه إلى ضرورة التعاون والمتابعة.</p>" +
    "<p>وفي حال استمرار عدم الاهتمام أو التعاون بعد توجيه تنبيهين، يحق للمدرسة اتخاذ الإجراء المناسب، بما في ذلك إنهاء مشاركة الطالب بعد إنذار مسبق مناسب، إذا رأت أن استمرار الوضع يؤثر سلباً على الطالب أو على سير الدروس والمجموعة.</p>",

  "agb.16.title": "16. تغيير المجموعة أو المستوى",
  "agb.16.body":
    "<p>يتم توزيع الطلاب على المجموعات وفقاً لأعمارهم ومستواهم في اللغة العربية، ويحق للمدرسة، بناءً على تقييم المعلمين، نقل الطالب إلى مجموعة أخرى أو مستوى آخر.</p>" +
    "<p>ويمكن أن يحدث ذلك بوجه خاص إذا تبين أن:</p>" +
    "<ul><li>الطالب أقل أو أعلى من مستوى المجموعة،</li><li>مستواه يتناسب بشكل أفضل مع مجموعة أخرى،</li>" +
    "<li>تركيبة المجموعة تستدعي التغيير،</li><li>هناك أسباب تربوية تجعل توزيعاً آخر أنسب.</li></ul>" +
    "<p>ويهدف ذلك إلى توفير البيئة التعليمية الأنسب للطالب ومساعدته على التقدم والاستفادة من الدروس.</p>",

  "agb.17.title": "17. تغيير مواعيد الدروس أو المجموعات أو المعلمين",
  "agb.17.body":
    "<p>قد تضطر المدرسة، عند الحاجة، إلى إجراء تغييرات على مواعيد الدروس أو المجموعات أو المعلمين لأسباب تنظيمية أو تعليمية أو متعلقة بالكادر.</p>" +
    "<p>وفي هذه الحالات، سيتم إبلاغ أولياء الأمور بالتغييرات الجوهرية في أقرب وقت ممكن.</p>" +
    "<p>ولا ينشأ مبدئياً حق في معلم بعينه أو قاعة بعينها أو تركيبة مجموعة بعينها، ما لم يُوعَد بذلك صراحةً.</p>",

  "agb.18.title": "18. إلغاء الدروس من جانب المدرسة",
  "agb.18.body":
    "<p>في حال تعذر إقامة أحد الدروس بسبب ظروف خارجة عن إرادة المدرسة أو لا يمكنها التحكم بها في الوقت المناسب، سيتم إبلاغ أولياء الأمور في أقرب وقت ممكن.</p>" +
    "<p>ويمكن أن يشمل ذلك بوجه خاص:</p>" +
    "<ul><li>مرض أحد المعلمين،</li><li>إجراءات رسمية،</li><li>تعذّر استخدام قاعات الدروس،</li>" +
    "<li>أعطال تقنية أو تنظيمية،</li><li>أحداث استثنائية،</li><li>حالات القوة القاهرة الأخرى.</li></ul>" +
    "<p>وتسعى المدرسة، بحسب الحالة، إلى تحديد موعد بديل أو أي ترتيبات تعويضية مناسبة.</p>" +
    "<p>وتبقى المطالبات القانونية غير متأثرة بذلك.</p>",

  "agb.19.title": "19. الأغراض الشخصية",
  "agb.19.body":
    "<p>يتحمل الطالب وولي أمره مسؤولية الأغراض الشخصية التي يحضرها الطالب إلى المدرسة.</p>" +
    "<p>ولا ينبغي إحضار الأغراض الثمينة أو غير اللازمة للدرس.</p>" +
    "<p>وتخضع مسؤولية المدرسة حصراً للأحكام القانونية.</p>",

  "agb.20.title": "20. البيانات المتعلقة بالطفل",
  "agb.20.body":
    "<p>يتحمل ولي الأمر مسؤولية صحة البيانات المقدمة عند التسجيل وتحديثها.</p>" +
    "<p>ويجب إبلاغ المدرسة في أقرب وقت ممكن بأي تغيير في بيانات التواصل، وخاصة رقم الهاتف أو رقم واتساب أو البريد الإلكتروني.</p>" +
    "<p>كما يتحمل ولي الأمر مسؤولية إبلاغ المدرسة بأي معلومات مهمة تتعلق بالطفل ويمكن أن تؤثر على مشاركته الآمنة في الدروس أو الأنشطة.</p>" +
    "<p>وتُعالَج المعلومات المتعلقة بالصحة حصراً وفقاً لسياسة الخصوصية وأحكام حماية البيانات السارية.</p>",

  "agb.21.title": "21. التواصل مع أولياء الأمور",
  "agb.21.body":
    "<p>تستخدم المدرسة واتساب والبريد الإلكتروني للتواصل التنظيمي مع أولياء الأمور.</p>" +
    "<p>ويمكن عبر هذه الوسائل إرسال المعلومات التالية بوجه خاص:</p>" +
    "<ul><li>مواعيد الدروس،</li><li>إلغاء الدروس،</li><li>الواجبات المنزلية،</li><li>الإرشادات التنظيمية،</li>" +
    "<li>معلومات عن الفعاليات،</li><li>تغييرات مواعيد الدروس،</li><li>معلومات أخرى عن سير العمل المدرسي.</li></ul>" +
    "<p>ويلتزم ولي الأمر بمتابعة الرسائل والمعلومات التي ترسلها المدرسة والاطلاع عليها بشكل منتظم.</p>",

  "agb.22.title": "22. واتساب ومجموعات واتساب",
  "agb.22.body":
    "<p>يمكن للمدرسة استخدام واتساب للتواصل مع أولياء الأمور.</p>" +
    "<p>ويمكن استخدام رقم واتساب الذي يقدمه ولي الأمر عند التسجيل للتواصل معه بشأن الدروس أو الأمور التنظيمية.</p>" +
    "<p>ويمكن إنشاء مجموعات واتساب لصفوف أو مجموعات تعليمية بعينها، وتُستخدم المجموعة لمشاركة الواجبات والمعلومات المتعلقة بالدروس والأنشطة والمتابعة التعليمية.</p>" +
    "<p>وعند المشاركة في مجموعة واتساب مشتركة قد يكون رقم هاتف المشارك مرئياً لبقية أعضاء المجموعة.</p>" +
    "<p>ولهذا السبب ينبغي أن تكون المشاركة في مجموعة كهذه طوعية مبدئياً، ما لم تكن ضرورية بشكل قاطع للمشاركة في الدروس.</p>" +
    "<p>وينبغي أن توفر المدرسة وسيلة تواصل بديلة للمعلومات الجوهرية، وخاصة عبر البريد الإلكتروني.</p>" +
    "<p>ولا ينبغي نشر بيانات صحية أو غيرها من المعلومات الحساسة الخاصة بأطفال بعينهم في مجموعات واتساب.</p>",

  "agb.23.title": "23. الصور والتصوير",
  "agb.23.body":
    "<p>قد يتم التقاط صور للأطفال أثناء الدروس والفعاليات والأنشطة المدرسية.</p>" +
    "<p>ولا يتم استخدام أو نشر صور يمكن التعرف فيها على الطفل إلا عند وجود أساس قانوني مقابل، وبناءً على موافقة ولي الأمر وفقاً للخيار المحدد أثناء التسجيل، متى كانت هذه الموافقة لازمة.</p>" +
    "<p>والموافقة على نشر الصور طوعية.</p>" +
    "<p>ولا تُعلَّق المشاركة في الدروس الاعتيادية على الموافقة على نشر الصور.</p>" +
    "<p>وتخضع معالجة الصور ونشرها للأحكام الموضحة في <a href=\"datenschutz.html\" data-keep-lang=\"datenschutz.html\">سياسة الخصوصية</a> الخاصة بالمدرسة وفي إقرار الموافقة المعني.</p>",

  "agb.24.title": "24. الواجبات المنزلية والتقدم الدراسي",
  "agb.24.body":
    "<p>يمكن للمعلمين تكليف الطلاب بواجبات منزلية أو تمارين إضافية.</p>" +
    "<p>ويُرجى من أولياء الأمور دعم أبنائهم بشكل مناسب في إنجاز هذه المهام بانتظام.</p>" +
    "<p>وتسعى المدرسة إلى إبلاغ أولياء الأمور بالتطورات الجوهرية في مستوى الطالب أو بأي صعوبات ملحوظة. ويُرجى من أولياء الأمور الاستماع إلى ملاحظات المعلمين وتوجيهاتهم المتعلقة بمستوى الطالب وحضوره وسلوكه وتقدمه الدراسي وأخذها بعين الاعتبار.</p>",

  "agb.25.title": "25. الإنهاء الاستثنائي لسبب مهم",
  "agb.25.body":
    "<p>يبقى حق كلا الطرفين في إنهاء المشاركة لسبب مهم دون التقيد بمهلة غير متأثر بذلك.</p>" +
    "<p>وقد يوجد سبب مهم بوجه خاص عند وقوع مخالفات جسيمة أو متكررة لهذه الشروط والأحكام.</p>" +
    "<p>وقبل الإنهاء بسبب مخالفات متكررة، تُمنح مبدئياً فرصة مناسبة للتصحيح، متى كان ذلك معقولاً بحسب نوع المخالفة وشدتها.</p>" +
    "<p>وتسري على الإنهاء الاعتيادي المدد والمهل المنصوص عليها في البند 3 من هذه الشروط.</p>" +
    "<p>وتبقى الحقوق القانونية الملزمة غير متأثرة بذلك.</p>",

  "agb.26.title": "26. الرسوم الدراسية المدفوعة",
  "agb.26.body":
    "<p>لا تُسترد الرسوم الدراسية المدفوعة إلا بالقدر المتفق عليه تعاقدياً أو الناشئ عن الأحكام القانونية.</p>" +
    "<p>وبوجه خاص، لا ينشأ عن حصة فائتة واحدة، سواء كانت مبررة أو غير مبررة، أي حق في استرداد جزئي.</p>" +
    "<p>وإذا انتهت المشاركة قبل انقضاء المدة التي دُفعت عنها الرسوم الدراسية، يُردّ الجزء من الرسوم العائد للفترة اللاحقة للإنهاء.</p>" +
    "<p>وفي حال العدول وفقاً للبند 4، تسري آثار العدول الموضحة هناك.</p>",

  "agb.27.title": "27. حماية البيانات",
  "agb.27.body":
    "<p>تتم معالجة البيانات الشخصية وفقاً <a href=\"datenschutz.html\" data-keep-lang=\"datenschutz.html\">لسياسة الخصوصية</a> المنفصلة الخاصة بمدرسة إقرأ.</p>" +
    "<p>وتنظّم سياسة الخصوصية بوجه خاص معالجة:</p>" +
    "<ul><li>بيانات الطلاب،</li><li>بيانات أولياء الأمور،</li><li>بيانات التواصل،</li>" +
    "<li>البيانات في سجل المشاركين الإلكتروني،</li><li>البيانات الصحية،</li><li>بيانات واتساب،</li>" +
    "<li>الصور،</li><li>بيانات الدفع والمحاسبة.</li></ul>",

  "agb.28.title": "28. الحقوق القانونية",
  "agb.28.body":
    "<p>لا تحدّ هذه الشروط والأحكام من الحقوق القانونية الملزمة للطلاب أو لممثليهم القانونيين.</p>" +
    "<p>وتبقى بوجه خاص حقوق العدول والإنهاء والفسخ وغيرها من الحقوق القانونية غير متأثرة، بالقدر الذي تنطبق فيه على العلاقة التعاقدية المعنية.</p>",

  "agb.29.title": "29. تعديل هذه الشروط والأحكام",
  "agb.29.body":
    "<p>يمكن للمدرسة تعديل هذه الشروط والأحكام عند وجود سبب موضوعي لذلك، وإذا كان التعديل معقولاً مع مراعاة مصالح المشاركين.</p>" +
    "<p>ويتم إبلاغ أولياء الأمور بالتعديلات الجوهرية بطريقة مناسبة.</p>",

  "agb.30.title": "30. بند الحفاظ على صحة العقد",
  "agb.30.body":
    "<p>إذا كان أحد بنود هذه الشروط والأحكام باطلاً أو أصبح باطلاً كلياً أو جزئياً، تبقى بقية البنود سارية.</p>" +
    "<p>وتحل الأحكام القانونية محل البند الباطل.</p>",

  "agb.31.title": "31. الجهة المقدِّمة"
}

  };

  /* ------------------------------------------------------------------ *
   * Einhaengen. Laeuft, bevor site.js startet - der Sprachwechsel
   * findet die Rechtstexte also genauso vor wie alle uebrigen Texte.
   * ------------------------------------------------------------------ */
  var Z = window.I18N || (window.I18N = {});
  ["de", "en", "ar"].forEach(function (sprache) {
    Z[sprache] = Z[sprache] || {};
    Object.keys(TEXTE[sprache]).forEach(function (schluessel) {
      Z[sprache][schluessel] = TEXTE[sprache][schluessel];
    });
  });
})();
