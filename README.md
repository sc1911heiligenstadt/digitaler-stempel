# 🔴 Digitaler Stempel

Den Vereinsstempel auf ein Dokument setzen, ohne es auszudrucken. PDF oder Word
(.docx) hochladen, Stempel per Maus an die richtige Stelle ziehen, fertiges
Dokument herunterladen — jede Stempelung landet dabei im Vereins-Archiv.

**➡️ [Digitalen Stempel öffnen](https://sc1911heiligenstadt.github.io/digitaler-stempel/)**

## Was drin ist

| Reiter | Wofür |
|---|---|
| **Stempeln** | Dokument wählen (PDF oder Word), Stempel-Bild auswählen, mit der Maus platzieren, erzeugen |
| **Archiv** | Jede Stempelung als Nachweis: was wurde wann von wem gestempelt |

## Warum das Archiv

Ein Stempel ist eine Erklärung des Vereins. Deshalb wird jede Stempelung
festgehalten — nicht um jemanden zu kontrollieren, sondern damit später
nachvollziehbar bleibt, dass ein Dokument tatsächlich vom Verein kommt.

## Zugang

Die Anmeldung läuft über die [Tools-Übersicht](https://sc1911heiligenstadt.github.io/ToolsUebersicht/) — dort einmal anmelden, danach ist dieses Werkzeug offen.

Der Stempel ist **nur für berechtigte Nutzer** freigeschaltet — wer stempeln
darf, legt die Tools-Übersicht fest. Die Rechte gelten in drei Stufen: **Sehen**
(Archiv einsehen), **Bearbeiten** (stempeln) und **Administrieren**
(Stempel-Bilder pflegen).

## Lokal starten

Über den Eintrag `digitaler-stempel` in `E:\.claude\launch.json` — der Server läuft dann auf `http://localhost:8794/`.

## Technik

Vanilla JavaScript ohne Build-Schritt — die Dateien werden so ausgeliefert, wie sie im Repo liegen. Veröffentlicht über GitHub Pages. Die Daten liegen in der Vereins-Nextcloud; der Zugriff läuft ausschließlich über den Login-Worker der Tools-Übersicht, nie mit Zugangsdaten im Browser.

Das Stempeln selbst läuft **lokal im Browser** — das Dokument wird nicht zu
einem fremden Dienst hochgeladen, um bestempelt zu werden.

---

Ein Werkzeug des 1. SC 1911 Heiligenstadt. Alle Werkzeuge auf einen Blick: [Tools-Übersicht](https://sc1911heiligenstadt.github.io/ToolsUebersicht/) · Erklärungen im [Toolbox Wiki](https://sc1911heiligenstadt.github.io/Vereinswiki/).
