/**
 * Erzeugt aus Code.gs eine Fassung, die nur aus ASCII-Zeichen besteht.
 *
 * WOZU: Beim Kopieren in den Apps-Script-Editor kann die Zeichenkodierung
 * kaputtgehen - liest ein Programm unterwegs die UTF-8-Bytes als MacRoman,
 * wird aus "ü" ein "√º" und aus arabischem Text unlesbarer Salat. Das ist
 * uns genau so passiert.
 *
 * Eine Datei ohne Sonderzeichen kann das nicht mehr passieren. Umlaute und
 * arabische Zeichen stehen darin als \uXXXX; JavaScript setzt sie beim
 * Ausfuehren wieder zusammen, die E-Mails kommen also unveraendert heraus.
 *
 * Code.gs bleibt die lesbare Quelle und wird bearbeitet. Diese Fassung ist
 * nur zum Einfuegen da und wird bei Bedarf neu erzeugt:
 *
 *   node apps-script/ascii-fassung.js
 */
const fs = require("fs");
const pfad = __dirname + "/Code.gs";
const ziel = __dirname + "/Code.ascii.gs";

const quelle = fs.readFileSync(pfad, "utf8");

// Jedes Zeichen jenseits von ASCII wird zur \uXXXX-Schreibweise. Das gilt
// auch fuer Kommentare - dort steht danach zwar die Escape-Folge im Klartext,
// das stoert aber nichts.
const ascii = quelle.replace(/[^\x00-\x7F]/g, function (z) {
  return "\\u" + z.charCodeAt(0).toString(16).padStart(4, "0");
});

fs.writeFileSync(ziel, ascii, "utf8");

const rest = ascii.match(/[^\x00-\x7F]/g);
console.log("Geschrieben: apps-script/Code.ascii.gs");
console.log("  Zeilen:            " + ascii.split("\n").length);
console.log("  Sonderzeichen:     " + (rest ? rest.length + " UEBRIG!" : "keine"));
console.log("  Ersetzt:           " + (quelle.match(/[^\x00-\x7F]/g) || []).length + " Zeichen");
