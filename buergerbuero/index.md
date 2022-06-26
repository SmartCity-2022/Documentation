# Bürgerbüro

**Autor:** Finn Bechinka

## Überblick

Der Bürgerbüro Microservice soll Informationen und städtische Dienstleistungen zur Verfügung stellen.

## Funktionale Anforderungen

__Geplant:__
- Informationen bereitstellen
  - Abfallkalender
- Meldebescheinigung
- Bearbeitungs Statusabfrage
- Briefwahlunterlagen Beantragen
- Wohnungsgeberbestätigung

__Implementiert:__
- Termine Vereinbaren
  - An- und Ummelden
  - Beantragung Ausweisdokumente
  - Belaubiegungen
  - Fischereischein
  - Ausländer-Angelegenheiten
  - Führerscheinangelegenheiten
- Speermüll Anmelden
- Umzug Melden
- Fundsachen einsehen

* __Akteure__:
  * Bürger
  * Stadt
  * Ämter

![usecase](media/use_case.png)

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

![mockup](media/mockup5.png)

![mockup](media/mockup6.png)

![mockup](media/mockup7.png)

## Datenmodell 

![uml](media/uml.png)

## Schnittstellen

### REST API

| **route** |  **Type** | **Consumes (optional)** | **Consumes (required)** | **Params (optional)** | **Params (required)** | **Produces** |
| :------ | :----- | :----- | :----- | :----- | :----- | :----- |
| /citizen | GET | {first_name, last_name} | nothing | id or email | none | citizen list
| /citizen | POST | {address, email, phone} | {first_name, last_name} | none | none | citizen data
| /citizen | DELETE | nothing | nothing | none | none | true / false
| /citizen/move | PATCH | nothing | {email, street, building_number, type} | none | none | nothing
| /citizen/verify | POST | nothing | {email} | none | id | nothing
| /misc | GET | nothing | nothing | none | none | authenticated email
| /misc/bulk_waste | POST | nothing | {street, building_number, type, date} | none | none | nothing
| /appointment | GET | nothing | nothing | none | id or cid or email or start_date and end_date or nothing | list of appointments
| /appointment/mine | GET | nothing | nothing | none | none | list of the authenticated users appointments
| /appointment | POST | nothing | {date, time, issue} | none | none | the created appointment
| /appointment | DELETE | nothing | nothing | none | id | nothing

### Events

| **Name** | **Payload** | 
| :------ | :----- | 
| buergerbuero.citizen_created | email |
| buergerbuero.citizen_moved_away | email |
| buergerbuero.citizen_moved_within | email |
| buergerbuero.bulk_waste | street, building number, type, date |
#### TODO
| **Name** | **Payload** |
| :------ | :----- |
| buergerbuero.citizen_removed | email |

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
  * MUI
* Backend
  * Node.js
  * Express
  * Sequelize
* Datenbank
  * MySQL
