# Bürgerbüro

**Autor:** Finn Bechinka

## Überblick

Der Bürgerbüro Microservice soll Informationen und städtische Dienstleistungen zur Verfügung stellen.

## Funktionale Anforderungen

- Informationen bereitstellen
  - Abfallkalender
- Termine Vereinbaren
  - An- und Ummelden
  - Beantragung Ausweisdokumente
  - Belaubiegungen
  - Fischereischein
  - Ausländer-Angelegenheiten
  - Führerscheinangelegenheiten
- Speermüll Anmelden
- Meldebescheinigung
- Bearbeitungs Statusabfrage
- Briefwahlunterlagen Beantragen
- Wohnungsgeberbestätigung
- Umzug Melden
- Fundsachen einsehen

* __Akteure__:
  * Bürger
  * Stadt
  * Ämter

[USE CASE DIAGRAMM]

## Anforderungen im Detail

### User Stories

| **Als** | **möchte ich** | **so dass** | **Akzeptanz** |
| :------ | :----- | :------ | :-------- |
| Bürger | einen Termin vereinbaren | ich mein Anliegen besprechen kann | Termin wird gebucht |
| Bürger | meinen Umzug melden | ich keine Probleme bekomme | Umzug meldung möglich |
| Bürger | mich Informieren | ich informiert bin | Infoseiten existieren |
| Bürger | Fundsachen einsehen | ich gucken kann ob etwas was ich verlohren habe dabei ist | liste von Fundsachen einsehbar |
| Bürger | Briefwahl beantragen | über Briefwahl wählen kann | Briefwahl beantragbar |
| Bürger | eine Meldebescheinigung | um einen Nachweis meines Wohnsitzes zu haven | Meldebescheinigung kann beantragt werden |
| Bürger | wissen ob mein Antrag bearbeitet wurde | ich bescheid weiß/einen neuen Termin vereinbaren kann | Antragsstatus kann abgefragt werden |
| Stadt | dass die Müllabfuhr reibungslos funktioniert | keine Probleme mit der Müllabfuhr aufkommen | aktueller Abfallkalender wird bereitgestellt und Speermüll kann angemeldet werden|


## Graphische Benutzerschnittstelle

![mockup](media/mockup1.png)

![mockup](media/mockup2.png)

![mockup](media/mockup3.png)

![mockup](media/mockup4.png)

## Datenmodell 

![uml](media/uml.png)

## Schnittstellen

### Commands

**Synchronous**

| **Name** | **Parameter** | **Resultat** |
| :------ | :----- | :------ |

**Asynchronous**

| **Name** | **Parameter** | **Resultat** |
| :------ | :----- | :------ |

### Events

- Umzug gemeldet
- Speermüll gemeldet
- Briefwahl beantragt

| **Name** | **Payload** | 
| :------ | :----- | 

### Queries

| **Name** | **Parameter** | **Resultat** |
| :------ | :----- | :------ |

### Dependencies

#### Event-Subscriptions

| **Service** | **Funktion** |
| :------ | :----- | 

## Technische Umsetzung

### Softwarearchitektur

* Server
  * Web-Schicht
    * HTTP
    * Express Routing
  * Logik-Schicht
    * Node.js
    * Sequelize
  * Persistenz-Schicht
    * MySQL Datenbank

* Client
  * View-Schicht
    * HTML
    * CSS
  * Logik-Schicht
    * React.js
  * Kommunikation-Schicht
    * HTTP

### Verwendete Technologien
* Frontend
  * React.js
* Backend
  * Node.js
* Datenbank
  * MySQL
