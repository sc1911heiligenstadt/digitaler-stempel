# 🔴 Digitaler Stempel

Den Vereinsstempel auf ein Dokument setzen, ohne es auszudrucken. PDF oder Word
(.docx) hochladen, Stempel per Maus an die richtige Stelle ziehen, fertiges
Dokument herunterladen — jede Stempelung landet dabei im Vereins-Archiv.

**➡️ [Digitalen Stempel öffnen](https://sc1911heiligenstadt.github.io/digitaler-stempel/)**

## Was drin ist

| Reiter | Wofür |
|---|---|
| **Stempeln** | Dokument wählen (PDF oder Word), Stempel-Bild auswählen, platzieren, erzeugen |
| **Archiv** | Jede Stempelung als Nachweis: was wurde wann von wem gestempelt — und wer hat es später heruntergeladen |
| **Info** | Kurzbeschreibung, Änderungsliste und Datenschutzhinweis |

Der Stempel lässt sich **mit der Maus verschieben**, am Anfasser unten rechts in
der **Größe** ziehen, und über zwei Regler in **Drehung** und **Deckkraft**
anpassen. Beim PDF ist wählbar, ob er auf **alle Seiten**, **nur die aktuelle**
oder auf eine **eigene Auswahl** kommt — Seitenzahlen und Bereiche wie `1,3-5`.
Bei Word sitzt er in der Kopfzeile, dort gibt es nur *alle Seiten* oder *nur die
erste*; das Ergebnis bleibt eine bearbeitbare `.docx` mit eingebettetem Bild.

## Stempelbilder

Die Stempelbilder liegen in einer gemeinsamen Sammlung und werden einmalig mit
Namen hinterlegt — danach genügt beim Stempeln ein Klick auf den Namen.
Empfohlen ist ein **PNG mit durchsichtigem Hintergrund**, JPG geht auch; je
Datei sind bis zu **10 MB** möglich.

## Warum das Archiv

Ein Stempel ist eine Erklärung des Vereins. Deshalb wird jede Stempelung
festgehalten — nicht um jemanden zu kontrollieren, sondern damit später
nachvollziehbar bleibt, dass ein Dokument tatsächlich vom Verein kommt. Zu jedem
Dokument steht, wie oft es heruntergeladen wurde; aufgeklappt zeigt die Zeile
jeden Abruf mit Name und Zeitpunkt.

## Was der Stempel nicht ist

Der Stempel wird in das Dokument **gezeichnet**. Er ist eine Kennzeichnung und
keine kryptografische Signatur — er beweist nichts über Echtheit oder
Unverändertheit des Dokuments. Wer eine an eine Person gebundene Unterschrift
braucht, nutzt *Unterschriften anfordern* in der Kopfzeile der Tools-Übersicht.

## Zugang

Die Anmeldung läuft über die [Tools-Übersicht](https://sc1911heiligenstadt.github.io/ToolsUebersicht/) — dort einmal anmelden, danach ist dieses Werkzeug offen.

Der Stempel ist **nur für berechtigte Nutzer** freigeschaltet — wer stempeln
darf, legt die Tools-Übersicht fest. Die Rechte gelten in drei Stufen: **Sehen**
(nur der Reiter *Info*), **Bearbeiten** (Reiter *Stempeln* samt Stempelbildern)
und **Administrieren** (zusätzlich der Reiter *Archiv* mit allen Dokumenten des
Vereins, dem Download-Verlauf und dem Löschen daraus). Der Reiter *Info* ist für
alle sichtbar.

## Lokal starten

Über den Eintrag `digitaler-stempel` in `E:\.claude\launch.json` — der Server läuft dann auf `http://localhost:8794/`.

## Technik

Vanilla JavaScript ohne Build-Schritt — die Dateien werden so ausgeliefert, wie sie im Repo liegen; ausgeliefert wird die einzelne Seite `index.html`. Veröffentlicht über GitHub Pages. Die Daten liegen in der Vereins-Nextcloud; der Zugriff läuft ausschließlich über den Login-Worker der Tools-Übersicht, nie mit Zugangsdaten im Browser. Die gestempelten Dokumente und die Stempelbilder liegen als einzelne Dateien, in der Datenliste stehen nur die Angaben dazu.

Das Stempeln selbst läuft **lokal im Browser** — das Dokument wird nicht zu
einem fremden Dienst hochgeladen, um bestempelt zu werden. Die vier dafür nötigen
Hilfsbibliotheken (PDF-Anzeige, PDF-Bearbeitung, ZIP und Word-Vorschau) werden
erst bei Bedarf aus dem Netz nachgeladen; ganz ohne Internetverbindung
funktioniert das Werkzeug deshalb nicht.

---

Ein Werkzeug des 1. SC 1911 Heiligenstadt. Alle Werkzeuge auf einen Blick: [Tools-Übersicht](https://sc1911heiligenstadt.github.io/ToolsUebersicht/) · Erklärungen im [Toolbox Wiki](https://sc1911heiligenstadt.github.io/Vereinswiki/).
