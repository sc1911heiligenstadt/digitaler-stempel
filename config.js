const APP_VERSION = "1.0";

// Größenlimit pro hochgeladener Datei — muss zum Worker-Cap (admin-worker.js) passen.
const MAX_FILE_BYTES = 10 * 1024 * 1024; // 10 MB

const APP_CHANGELOG = [
  {
    version: "1.0",
    groups: [
      {
        title: "Stempeln",
        items: [
          "PDF hochladen und das Stempelbild frei setzen: Position, Größe, Drehung und Deckkraft sind einstellbar.",
          "Beim PDF lässt sich wählen, ob der Stempel auf alle Seiten, nur auf die aktuelle oder auf eine selbst zusammengestellte Auswahl kommt.",
          "Auch Word-Dateien lassen sich stempeln. Das Ergebnis bleibt eine bearbeitbare Word-Datei mit eingebettetem Stempelbild — kein Bild-Export.",
          "Bei Word gibt es nur „Alle Seiten“ oder „Nur erste Seite“: der Stempel sitzt dort in der Kopfzeile und wiederholt sich dadurch von selbst. Eine Word-Datei hat keine festen Seiten, die sich einzeln ansprechen ließen."
        ]
      },
      {
        title: "Stempelbilder",
        items: [
          "Die Stempelbilder liegen in einer gemeinsamen Sammlung und werden einmalig mit Namen hinterlegt — danach genügt beim Stempeln ein Klick auf den Namen.",
          "Empfohlen ist ein PNG mit durchsichtigem Hintergrund; JPG geht auch.",
          "Ein Bild hinzufügen darf jeder mit Zugriff auf das Werkzeug, löschen nur Bearbeiter."
        ]
      },
      {
        title: "Archiv",
        items: [
          "Jedes gestempelte Dokument wird im Vereins-Archiv abgelegt: wer es gestempelt hat und wann, dazu wer es wann heruntergeladen hat.",
          "Bearbeiter sehen das komplette Archiv aller Nutzer und können einzelne Dokumente löschen.",
          "Alle anderen sehen dort ausschließlich ihre eigenen Dokumente."
        ]
      },
      {
        title: "Wer darf was",
        items: [
          "Das Werkzeug ist nur für die freigegebene Gruppe sichtbar.",
          "Sehen: das eigene Archiv. Der Reiter „Stempeln“ erscheint gar nicht erst, der Einstieg führt direkt ins Archiv.",
          "Bearbeiten: stempeln, Stempelbilder löschen, das gesamte Archiv einsehen und daraus löschen.",
          "Der Reiter „Info“ ist für alle sichtbar."
        ]
      },
      {
        title: "Was der Stempel nicht ist",
        items: [
          "Der Stempel wird in das Dokument gezeichnet. Er ist eine Kennzeichnung und keine kryptografische Signatur — er beweist nichts über Echtheit oder Unverändertheit des Dokuments.",
          "Wer eine an eine Person gebundene Unterschrift braucht, nutzt „Unterschriften anfordern“ in der Kopfzeile der Tools-Übersicht."
        ]
      },
      {
        title: "Bedienung am Handy",
        items: [
          "Die Reiterleiste bricht am Handy um, statt seitlich aus dem Bild zu laufen — auch die hinteren Reiter sind auf schmalen Bildschirmen erreichbar.",
          "Eingabefelder sind mindestens 16 Pixel groß, damit der iPhone-Browser beim Antippen nicht ungefragt in die Seite hineinzoomt und verschoben stehen bleibt.",
          "Das Positionieren des Stempels läuft über Ziehen und Anfasser und ist mit dem Finger unhandlich — dafür ist ein Rechner die bessere Wahl."
        ]
      },
      {
        title: "Daten & Speicherung",
        items: [
          "Gespeichert wird in der Vereins-Nextcloud über die zentrale Anmeldung der Tools-Übersicht — ein eigenes Passwort braucht es nicht.",
          "Die Dokumente selbst liegen als einzelne Dateien, nicht in der Datenliste; darin stehen nur die Angaben dazu.",
          "Das Werkzeug lädt vier Hilfsbibliotheken aus dem Netz nach und funktioniert deshalb nicht ohne Internetverbindung."
        ]
      }
    ]
  }
];
