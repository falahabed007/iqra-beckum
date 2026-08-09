/* ==========================================================================
   Verhalten der Webseite:
     1. Sprachumschaltung (Deutsch / Englisch / Arabisch, inkl. Leserichtung)
     2. Stammdaten aus config.js in die Seite schreiben
     3. Menue auf schmalen Bildschirmen
     4. Anmeldeformular: Pruefung, Versand, Ausweichweg ueber WhatsApp

   Kein Framework, keine externen Abhaengigkeiten.
   ========================================================================== */
(function () {
  "use strict";

  var SPRACHEN = ["de", "en", "ar"];
  var SPEICHER = "iqra.sprache";
  var I18N = window.I18N || {};
  var CFG = window.CONFIG || {};
  var aktuell = "de";


  /* ------------------------------------------------------------------ *
   * Hilfsmittel
   * ------------------------------------------------------------------ */
  function alle(sel, wurzel) { return Array.prototype.slice.call((wurzel || document).querySelectorAll(sel)); }
  function eins(sel, wurzel) { return (wurzel || document).querySelector(sel); }

  function t(schluessel, sprache) {
    var tabelle = I18N[sprache || aktuell] || I18N.de || {};
    if (Object.prototype.hasOwnProperty.call(tabelle, schluessel)) return tabelle[schluessel];
    // Fehlt eine Uebersetzung, wird still auf Deutsch zurueckgefallen -
    // besser eine deutsche Zeile als eine leere Seite.
    var d = I18N.de || {};
    return Object.prototype.hasOwnProperty.call(d, schluessel) ? d[schluessel] : "";
  }


  /* ------------------------------------------------------------------ *
   * 1. Sprache
   * ------------------------------------------------------------------ */
  function spracheAusUmgebung() {
    var ausUrl = new URLSearchParams(window.location.search).get("lang");
    if (ausUrl && SPRACHEN.indexOf(ausUrl) > -1) return ausUrl;

    try {
      var gemerkt = window.localStorage.getItem(SPEICHER);
      if (gemerkt && SPRACHEN.indexOf(gemerkt) > -1) return gemerkt;
    } catch (e) { /* localStorage gesperrt - dann eben nicht */ }

    var browser = (navigator.language || "de").slice(0, 2).toLowerCase();
    if (SPRACHEN.indexOf(browser) > -1) return browser;
    return "de";
  }

  function setzeSprache(sprache, merken) {
    if (SPRACHEN.indexOf(sprache) === -1) sprache = "de";
    aktuell = sprache;

    var rtl = sprache === "ar";
    document.documentElement.lang = sprache;
    document.documentElement.dir = rtl ? "rtl" : "ltr";
    document.body.classList.toggle("lang-ar", rtl);

    // Texte
    alle("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    // Texte mit Auszeichnung (nur eigene Inhalte aus i18n.js, keine Nutzereingaben)
    alle("[data-i18n-html]").forEach(function (el) {
      el.innerHTML = t(el.getAttribute("data-i18n-html"));
    });
    // Attribute
    [["data-i18n-placeholder", "placeholder"],
     ["data-i18n-aria", "aria-label"],
     ["data-i18n-alt", "alt"],
     ["data-i18n-title", "title"]].forEach(function (paar) {
      alle("[" + paar[0] + "]").forEach(function (el) {
        el.setAttribute(paar[1], t(el.getAttribute(paar[0])));
      });
    });

    // Seitentitel und Beschreibung
    var seite = document.body.getAttribute("data-page") || "index";
    var titel = t("doc." + seite + ".title");
    if (titel) document.title = titel;
    var beschreibung = eins('meta[name="description"]');
    if (beschreibung && t("doc." + seite + ".desc")) {
      beschreibung.setAttribute("content", t("doc." + seite + ".desc"));
    }

    // Zustand der Knoepfe
    alle(".lang-switch button").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-lang") === sprache));
    });

    // Sprachwahl an die Rechtsseiten weiterreichen, damit sie auch dann
    // stimmt, wenn localStorage im Browser gesperrt ist.
    alle("a[data-keep-lang]").forEach(function (a) {
      var ziel = a.getAttribute("data-keep-lang");
      a.setAttribute("href", sprache === "de" ? ziel : ziel + "?lang=" + sprache);
    });

    if (merken) {
      try { window.localStorage.setItem(SPEICHER, sprache); } catch (e) { /* egal */ }
    }
  }


  /* ------------------------------------------------------------------ *
   * 2. Stammdaten aus config.js einsetzen
   * ------------------------------------------------------------------ */
  function platzhalter() {
    var s = document.createElement("span");
    s.className = "platzhalter";
    s.textContent = "BITTE ERGÄNZEN";
    return s;
  }

  function wertAusPfad(pfad) {
    return pfad.split(".").reduce(function (o, k) {
      return (o && typeof o === "object") ? o[k] : undefined;
    }, CFG);
  }

  function ortText() {
    var teile = [CFG.strasse, CFG.plzOrt].filter(Boolean);
    return teile.join(", ");
  }

  function stammdatenEinsetzen() {
    // Textstellen
    alle("[data-cfg]").forEach(function (el) {
      var wert = wertAusPfad(el.getAttribute("data-cfg"));
      if (wert) {
        el.textContent = wert;
      } else {
        el.textContent = "";
        el.appendChild(platzhalter());
      }
    });

    // Verknuepfungen
    alle("[data-cfg-href]").forEach(function (el) {
      var art = el.getAttribute("data-cfg-href");
      if (art === "tel" && CFG.telefonLink) el.href = "tel:" + CFG.telefonLink;
      if (art === "wa" && CFG.whatsapp) el.href = "https://wa.me/" + CFG.whatsapp;
      if (art === "mail" && CFG.email) el.href = "mailto:" + CFG.email;
      if (art === "maps") {
        var ort = ortText();
        if (ort) {
          el.href = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(ort);
        } else {
          el.removeAttribute("href");
        }
      }
    });

    // Unterrichtsort
    alle("[data-cfg-ort]").forEach(function (el) {
      var ort = ortText();
      if (ort) { el.textContent = ort; }
      else { el.textContent = ""; el.appendChild(platzhalter()); }
    });

    // Jahreszahl im Fussbereich
    alle("[data-jahr]").forEach(function (el) {
      el.textContent = String(new Date().getFullYear());
    });
  }


  /* ------------------------------------------------------------------ *
   * 3. Menue auf schmalen Bildschirmen
   * ------------------------------------------------------------------ */
  function menueVorbereiten() {
    var knopf = eins(".nav-toggle");
    var nav = eins(".site-nav");
    if (!knopf || !nav) return;

    knopf.addEventListener("click", function () {
      var offen = nav.classList.toggle("is-open");
      knopf.setAttribute("aria-expanded", String(offen));
    });

    // Nach dem Antippen eines Menuepunkts wieder schliessen
    alle("a", nav).forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("is-open");
        knopf.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) {
        nav.classList.remove("is-open");
        knopf.setAttribute("aria-expanded", "false");
        knopf.focus();
      }
    });
  }


  /* ------------------------------------------------------------------ *
   * 4. Anmeldeformular
   * ------------------------------------------------------------------ */
  function formularVorbereiten() {
    var form = eins("#anmeldung-form");
    if (!form) return;

    var geoeffnetUm = Date.now();

    // Ein Geburtsdatum in der Zukunft ergibt keinen Sinn.
    var geburtstag = eins("#kind-geburtsdatum");
    if (geburtstag) geburtstag.max = new Date().toISOString().slice(0, 10);

    var statusZeile = eins("#form-status");
    var erfolgKasten = eins("#form-erfolg");
    var fehlerKasten = eins("#form-fehler");
    var fehlerWaLink = eins("#form-fehler-wa");
    var absendeKnopf = eins("#form-submit");

    /* --- WhatsApp-Nummer spiegeln --- */
    var telFeld = eins("#eltern-telefon");
    var waFeld = eins("#eltern-whatsapp");
    var waGleich = eins("#whatsapp-gleich");

    function waSpiegeln() {
      if (!waGleich || !waFeld || !telFeld) return;
      if (waGleich.checked) {
        waFeld.value = telFeld.value;
        waFeld.readOnly = true;
        waFeld.setAttribute("aria-readonly", "true");
      } else {
        waFeld.readOnly = false;
        waFeld.removeAttribute("aria-readonly");
      }
    }
    if (waGleich) waGleich.addEventListener("change", waSpiegeln);
    if (telFeld) telFeld.addEventListener("input", waSpiegeln);

    /* --- Hinweis und Kartennummer ein- und ausblenden --- */
    var karteHinweis = eins("#zahlung-hinweis");
    var kartenFeld = eins("#kartennummer-feld");
    var kartenNummer = eins("#kartennummer");

    function karteGewaehlt() {
      var r = eins('input[name="zahlung"]:checked', form);
      return !!r && r.value === "muensterlandkarte";
    }

    function karteSpiegeln() {
      var an = karteGewaehlt();
      if (karteHinweis) karteHinweis.classList.toggle("is-visible", an);
      if (kartenFeld) kartenFeld.classList.toggle("is-visible", an);
      // Bar bezahlt: eine vorher eingetippte Nummer darf nicht mitgeschickt werden.
      if (!an && kartenNummer) {
        kartenNummer.value = "";
        fehlerLoeschen(kartenNummer);
      }
    }

    alle('input[name="zahlung"]', form).forEach(function (r) {
      r.addEventListener("change", karteSpiegeln);
    });
    // Nach dem Zurueckblaettern stellt der Browser die Auswahl wieder her,
    // ohne "change" auszuloesen - deshalb einmal von Hand angleichen.
    karteSpiegeln();

    /* --- Pruefung --- */
    function fehlerZeigen(feld, meldung) {
      var huelle = feld.closest(".field");
      if (!huelle) return;
      huelle.classList.add("has-error");
      var ausgabe = eins(".field-error", huelle);
      if (ausgabe) ausgabe.textContent = meldung;
      if (feld.type !== "radio" && feld.type !== "checkbox") feld.setAttribute("aria-invalid", "true");
    }

    function fehlerLoeschen(feld) {
      var huelle = feld.closest(".field");
      if (!huelle) return;
      huelle.classList.remove("has-error");
      feld.removeAttribute("aria-invalid");
    }

    alle("input, textarea", form).forEach(function (feld) {
      feld.addEventListener("input", function () { fehlerLoeschen(feld); });
      feld.addEventListener("change", function () { fehlerLoeschen(feld); });
    });

    function pruefen() {
      var ersterFehler = null;

      // Pflichtfelder mit Texteingabe
      alle("input[required], textarea[required]", form).forEach(function (feld) {
        if (feld.type === "radio" || feld.type === "checkbox") return;
        if (!feld.value.trim()) {
          fehlerZeigen(feld, t("form.fehlt"));
          if (!ersterFehler) ersterFehler = feld;
        } else {
          fehlerLoeschen(feld);
        }
      });

      // E-Mail nur pruefen, wenn etwas drinsteht (sie ist freiwillig)
      var mail = eins("#eltern-email");
      if (mail && mail.value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(mail.value.trim())) {
        fehlerZeigen(mail, t("form.emailUngueltig"));
        if (!ersterFehler) ersterFehler = mail;
      }

      // Auswahlgruppen
      ["zahlung", "fotos"].forEach(function (name) {
        var gruppe = alle('input[name="' + name + '"]', form);
        if (!gruppe.length) return;
        var gewaehlt = gruppe.some(function (r) { return r.checked; });
        if (!gewaehlt) {
          fehlerZeigen(gruppe[0], t("form.fehltAuswahl"));
          if (!ersterFehler) ersterFehler = gruppe[0];
        } else if (name === "zahlung" && karteGewaehlt() && kartenNummer && !kartenNummer.value.trim()) {
          // Die Kartennummer wird nur verlangt, wenn ueber die Karte gezahlt wird.
          fehlerZeigen(kartenNummer, t("form.fehlt"));
          if (!ersterFehler) ersterFehler = kartenNummer;
          fehlerLoeschen(gruppe[0]);
        } else {
          fehlerLoeschen(gruppe[0]);
        }
      });

      // Datenschutz-Haken
      var haken = eins("#datenschutz-ok");
      if (haken && !haken.checked) {
        fehlerZeigen(haken, t("form.fehltHaken"));
        if (!ersterFehler) ersterFehler = haken;
      } else if (haken) {
        fehlerLoeschen(haken);
      }

      return ersterFehler;
    }

    /* --- Daten einsammeln --- */
    function daten() {
      var gewaehlt = function (name) {
        var r = eins('input[name="' + name + '"]:checked', form);
        return r ? r.value : "";
      };
      return {
        kindVorname:      eins("#kind-vorname").value.trim(),
        kindNachname:     eins("#kind-nachname").value.trim(),
        kindGeburtsdatum: eins("#kind-geburtsdatum").value.trim(),
        elternVorname:    eins("#eltern-vorname").value.trim(),
        elternNachname:   eins("#eltern-nachname").value.trim(),
        telefon:          telFeld ? telFeld.value.trim() : "",
        whatsapp:         waFeld ? waFeld.value.trim() : "",
        email:            eins("#eltern-email").value.trim(),
        zahlung:          gewaehlt("zahlung"),
        kartennummer:     karteGewaehlt() && kartenNummer ? kartenNummer.value.trim() : "",
        allergien:        eins("#allergien").value.trim(),
        fotos:            gewaehlt("fotos"),
        sprache:          aktuell,
        seite:            window.location.href,
        // Spamschutz
        hp:               eins("#hp-feld") ? eins("#hp-feld").value : "",
        dauer:            Math.round((Date.now() - geoeffnetUm) / 1000)
      };
    }

    /* --- Nachricht fuer den WhatsApp-Ausweichweg --- */
    function whatsappText(d) {
      var zahlung = d.zahlung === "bar" ? t("form.zahlung.bar") : t("form.zahlung.karte");
      var fotos = d.fotos === "ja" ? t("form.foto.ja") : t("form.foto.nein");
      var zeilen = [
        t("anmeldung.title") + " — " + t("hero.title"),
        "",
        t("form.kind.legend"),
        t("form.kind.vorname") + ": " + d.kindVorname,
        t("form.kind.nachname") + ": " + d.kindNachname,
        t("form.kind.geburtsdatum") + ": " + d.kindGeburtsdatum,
        "",
        t("form.eltern.legend"),
        t("form.eltern.vorname") + ": " + d.elternVorname,
        t("form.eltern.nachname") + ": " + d.elternNachname,
        t("form.eltern.telefon") + ": " + d.telefon,
        t("form.eltern.whatsapp") + ": " + d.whatsapp
      ];
      if (d.email) zeilen.push(t("form.eltern.email") + ": " + d.email);
      zeilen.push("", t("form.zahlung.legend") + ": " + zahlung);
      if (d.kartennummer) zeilen.push(t("form.zahlung.nummer") + ": " + d.kartennummer);
      if (d.allergien) zeilen.push(t("form.allergien") + ": " + d.allergien);
      zeilen.push("", fotos);
      return "https://wa.me/" + (CFG.whatsapp || "") + "?text=" + encodeURIComponent(zeilen.join("\n"));
    }

    /* --- Absenden --- */
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var ersterFehler = pruefen();
      if (ersterFehler) {
        statusZeile.textContent = t("form.pruefen");
        statusZeile.setAttribute("data-state", "error");
        ersterFehler.focus();
        return;
      }

      var d = daten();

      // Ohne eingerichteten Endpoint laeuft die Anmeldung ueber WhatsApp.
      if (!CFG.anmeldungEndpoint) {
        window.open(whatsappText(d), "_blank", "noopener");
        zeigeErfolg();
        return;
      }

      absendeKnopf.disabled = true;
      statusZeile.setAttribute("data-state", "sending");
      statusZeile.textContent = t("form.sending");
      if (fehlerKasten) fehlerKasten.classList.remove("is-visible");

      // Wichtig: Content-Type text/plain. Damit gilt die Anfrage als
      // "simple request", der Browser schickt keinen Preflight, und
      // Google Apps Script antwortet ohne CORS-Fehler.
      fetch(CFG.anmeldungEndpoint, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(d)
      })
        .then(function (r) { return r.json().catch(function () { return { ok: r.ok }; }); })
        .then(function (antwort) {
          if (antwort && antwort.ok) { zeigeErfolg(); }
          else { zeigeFehler(d); }
        })
        .catch(function () { zeigeFehler(d); })
        .then(function () {
          absendeKnopf.disabled = false;
          statusZeile.textContent = "";
          statusZeile.removeAttribute("data-state");
        });
    });

    function zeigeErfolg() {
      form.hidden = true;
      if (fehlerKasten) fehlerKasten.classList.remove("is-visible");
      if (erfolgKasten) {
        erfolgKasten.classList.add("is-visible");
        erfolgKasten.setAttribute("tabindex", "-1");
        erfolgKasten.focus();
        erfolgKasten.scrollIntoView({ block: "center" });
      }
    }

    function zeigeFehler(d) {
      if (fehlerWaLink) fehlerWaLink.href = whatsappText(d);
      if (fehlerKasten) {
        fehlerKasten.classList.add("is-visible");
        fehlerKasten.setAttribute("tabindex", "-1");
        fehlerKasten.focus();
      }
    }

    // "Weiteres Kind anmelden"
    var nochmal = eins("#form-nochmal");
    if (nochmal) {
      nochmal.addEventListener("click", function () {
        form.reset();
        waSpiegeln();
        karteSpiegeln();
        alle(".field.has-error", form).forEach(function (f) { f.classList.remove("has-error"); });
        geoeffnetUm = Date.now();
        form.hidden = false;
        if (erfolgKasten) erfolgKasten.classList.remove("is-visible");
        eins("#kind-vorname").focus();
      });
    }

    waSpiegeln();
  }


  /* ------------------------------------------------------------------ *
   * Start
   * ------------------------------------------------------------------ */
  function start() {
    stammdatenEinsetzen();
    menueVorbereiten();
    formularVorbereiten();

    alle(".lang-switch button").forEach(function (b) {
      b.addEventListener("click", function () {
        setzeSprache(b.getAttribute("data-lang"), true);
      });
    });

    setzeSprache(spracheAusUmgebung(), false);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
