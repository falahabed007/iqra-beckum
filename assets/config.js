/* ==========================================================================
   STAMMDATEN — der einzige Ort, an dem Kontakt- und Vereinsdaten stehen.
   Alle drei Seiten (Start, Impressum, Datenschutz) lesen aus dieser Datei.

   Felder, die leer sind, erscheinen auf der Seite als gelb markierter
   Platzhalter "BITTE ERGAENZEN". Vor dem Livegang muss also nur noch
   diese eine Datei vollstaendig ausgefuellt werden.
   ========================================================================== */

window.CONFIG = {

  /* ---------- Kontakt (steht so auf dem Flyer) ---------- */
  telefon:     "0177 5883033",        // Anzeige
  telefonLink: "+491775883033",       // fuer tel: — ohne Leerzeichen
  whatsapp:    "491775883033",        // fuer wa.me — ohne + und ohne Leerzeichen
  email:       "iqraaschulebeckum@gmail.com",

  /* ---------- Unterrichtsort ----------
     BITTE ERGAENZEN: Strasse und PLZ/Ort, an dem der Unterricht stattfindet.
     Solange beides leer ist, zeigt die Seite an dieser Stelle einen
     Platzhalter und blendet den Link zur Karte aus.                        */
  strasse: "Nordwall 14",
  plzOrt:  "59269 Beckum",

  /* ---------- Anmeldeformular ----------
     Die Web-App-URL des Google Apps Script (siehe SETUP.md, Schritt 2).
     Sie sieht so aus:  https://script.google.com/macros/s/AKfycb.../exec

     SOLANGE DIESES FELD LEER IST, funktioniert das Formular trotzdem:
     Der Absenden-Knopf oeffnet dann WhatsApp mit allen eingegebenen Daten
     als fertige Nachricht. Es geht also nichts verloren.                   */
  anmeldungEndpoint: "https://script.google.com/macros/s/AKfycbz19WboWO8U-IU5gza-vy58hEOeU1bPc6HdqqfepgHcS34UbbVooytKAF9-Rl8TvFKe/exec",

  /* ---------- Impressum — PFLICHT vor dem Livegang ---------- */
  impressum: {
    verein:         "Arabisch-Deutscher-Verein e.V. Beckum",
    anschrift:      "Nordwall 14, 59269 Beckum",
    vertreten:      "Ahmed Ammura (1. Vorsitzender) und Khaled Sharafi (2. Vorsitzender)",
    register:       "Amtsgericht Münster, VR 5079",
    verantwortlich: "Ahmed Ammura, Nordwall 14, 59269 Beckum"
  },

  /* ---------- Sonstiges ---------- */
  domain: "adv-beckum.de",
  standDatenschutz: "August 2026"
};
