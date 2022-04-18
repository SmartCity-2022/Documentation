# Projektübersicht *Smart City*

**Autor:** Product Owner

## Beschreibung

SmartCity ist ein Projekt, das darauf abziehlt, eine Stadt weitestgehend zu digitalisieren. Dies bedeutet auch, dass eine SmartCity in gewisser Hinsicht
autonom handeln kann und Entscheidungen interkativ getroffen werden. Durch einen zentralen Aufbau ist die Stadt damit übersichtlich und komfortabel
bei der Bedienung.

## Github Repository

* Link zum Github Repository mit Source Code, Dokumentation, Kanban-Board

## Ziele

- Anwendungsbereiche, Motivation, Umfang, Alleinstellungsmerkmale, Marktanforderungen
- Informationen zu Zielbenutzergruppen und deren Merkmale (Bildung, Erfahrung, Sachkenntnis)
- Abgrenzung (Was ist das Softwaresystem _nicht_)

Ziel des SmartCity Projekts ist es, eine Stadt modern und digital zu gestalten. Dazu gehört eine zentrale Informationsverwaltung, in einem sogenannten 
"Hub", sowie eine transparente Einsicht in die Przosesse und Verwaltung einer SmartCity für ihre Bürger. Die Motivation dahinter ist es, das Leben in 
solch einer Stadt durch digitalisierung zu erleichtern und Prozesse zu automatisieren. Ebenso soll durch die digitalisierung bürokratischer Prozesse den
Beruf des Beamten automatisiert werden. Auch kann durch den übersichtlichen Ablauf der SmartCity die Stadt weiter demokratisiert werden, bzw. ihre Einwohner
dazu anregen, mehr am demokratischen Prozess teilzunehmen. Dieses Projekt umfasst hauptsächlich alle Prozesse, die regional in einer Stadt ablaufen. Dies
beinhaltet bestimmte Ämter wie das Straßenverkerhsamt, Bauamt und Gesundheitsamt sowie essentielle Portale einer Stadt, Kulturportal, Bildungsportal,
Bankenportal und weiteres. Eine SmartCity grenzt sich damit stark zu einer herkömmlichen Stadt ab, da sich nicht, wie es gängig wäre, vor Ort und 
dezentralisiert verwaltet wird, sondern digital und automatisiert.
Die Zielgruppe beschränkt sich in einer SmarCity auf die Einwohner ihrer Stadt sowie all ihrer Gäste. Dabei spielt es keine Rolle welcher Klasse,
Bildungsgrad oder politischen Hintergrund ihre Einwohner entspringen. Alle Einwohner werden gleichermaßen gehandhabt.
Die SmartCity grenzt sicht damit durch gängige Städte ab durch eine höhere digitalisierungsrate sowie einen größen Bezug zur Informationsfreiheit, die mehr
Transparenz in die Abläufe einer Stadt erlauben.

## Risiken

* SWOT-Analyse
* Verfügen wir über die notwendigen Kompetenzen? (Umsetzbarkeit)
* Welche Risiken und negativen Nebeneffekte sind zu erwarten?

|  | Harmful | Harmful |
|---|---|---|
| internal origin| Digitalisierung | Datenschutz |

## Stakeholder

| Funktion / Relevanz | Name | Kontakt / Verfügbarkeit | Wissen  | Interessen / Ziele  | 
|---|---|---|---|---|
| Leiter der Bibliothek, Fachlicher Entscheider  |  Herr Bauer | Tel. 409000, Von 9-19 Uhr telefonisch erreichbar, Mitarbeit zu 30% möglich, Nürnberg  | Kennt das Altsystem aus der Anwendersicht, soll mit dem System arbeiten  | Vereinfachung der Ausleihprozesse  |  
| Administrator, Informationslieferant bzgl. Wartungsanforderungen  | Herr Heiner  | Heiner@gmx.net, Per E-Mail, immer erreichbar, Verfügbarkeit 50%, Nürnberg  | Vertraut mit vergleichbarer Verwaltungssoftware   |  Stabiles System, geringer Wartungsaufwand | 
| Product-Owner, Entscheider - als Koordinator der Stakeholderanforderungen   | Paul Ottmer  |  po@ottmer.de, Per E-Mail und tel. tagsüber, Verfügbarkeit 100%, Nürnberg  | Koordinator für die Inputs der Stakeholder  | ROI des Systems sicherstellen  | 

## Systemübersicht

Dieser Abschnitt zeigt die technische Beschreibung des Softwaresystems
in Form eines Systemarchitekturdiagramms.
Das Diagramm ist statisch und nicht dynamisch und stellt daher keine Abläufe dar. Abläufe werden im Kapitel "Abläufe" dargestellt. Im Kapitel "Systemübersicht" soll genau ein Diagramm dargstellt werden. Das "Box-and-Arrow"-Diagramm soll als Systemarchitekturdiagramm eine abstrakte Übersicht über das Softwaresystem geben. Dazu stellt es die Rechnerknoten und deren Kommunikationsbeziehungen (Protokoll (z.B. HTTP), Datenformat (z.B. JSON)) dar. Also Rechtecke und gerichtete Pfeile. Ähnlich einem UML-Deployment-Diagramm, aber noch abstrakter, denn es zeigt nicht die Verteilung der Softwarebausteine auf die Rechnerknoten. So erlangt der Leser einen schnellen und guten Überblick über das Softwaresystem. 

## Kommunikationsprotokolle und Datenformate

## Funktionale Anforderungen 

- "Globale" Funktionalitäten, die alle Microservices überspannen

## Abläufe

- Abläufe der Kommunikation von Microservices
  in Sequenz- oder Aktivitätsdiagramm darstellen

## Nicht-funktionale Anforderungen 

### Rahmenbedingungen

- Normen, Standards, Protokolle, Hardware, externe Vorgaben

### Betriebsbedingungen

- Vorgaben des Kunden (z.B. Web Browser / Betriebssystem Versionen, Programmiersprache)

### Qualitätsmerkmale

- Externe Qualitätsanforderungen (z.B. Performance, Sicherheit, Zuverlässigkeit, Benutzerfreundlichkeit)

Qualitätsmerkmal | sehr gut | gut | normal | nicht relevant
---|---|---|---|---
**Zuverlässigkeit** | | | | |
Fehlertoleranz |X|-|-|-|
Wiederherstellbarkeit |-|X|-|-|
Ordnungsmäßigkeit |X|-|-|-|
Richtigkeit |X|-|-|-|
Konformität |-|X|-|-|
**Benutzerfreundlichkeit** | | | | |
Installierbarkeit |-|X|-|-|
Verständlichkeit |X|-|-|-|
Erlernbarkeit |X|-|-|-|
Bedienbarkeit |X|-|-|-|
**Performance** | | | | |
Zeitverhalten |-|-|X|-|
Effizienz|-|-|X|-|
**Sicherheit** | | | | |
Analysierbarkeit |X|-|-|-|
Modifizierbarkeit |-|X|-|-|
Stabilität |X|-|-|-|
Prüfbarkeit |-|X|-|-|


## Glossar 

- Definitionen, Abkürzungen, Begriffe

## Referenzen

* Handbücher, Gesetze
* z.B. Datenschutzgrundverordnung




