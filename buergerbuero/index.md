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


## Graphische Benutzerschnittstelle

![](media/mockup1.png)

![](media/mockup2.png)

![](media/mockup3.png)

![](media/mockup4.png)

## Datenmodell 

- Begriffe im Glossar darstellen
- Modellierung des physikalischen Datenmodells 
  - RDBMS: ER-Diagramm bzw. Dokumentenorientiert: JSON-Schema


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


| **Name** | **Payload** | 
| :------ | :----- | 


### Queries

| **Name** | **Parameter** | **Resultat** |
| :------ | :----- | :------ |


### Dependencies

- Authentifizierung

#### RPC

| **Service** | **Funktion** |
| :------ | :----- | 
| Authorization Service | authenticateUser() |


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
