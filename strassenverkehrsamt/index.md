# Straßenverkehrsamt

**Autor:** Kevin Fischer

![](media/thumbnail.png)


## Überblick

Der Microservice "Straßenverkehrsamt" aus dem Projekt "Smart-City 2022", soll einem im [HUB](https://smartcity-2022.github.io/Documentation/#/hub/index) registrierten Bürger die Möglichkeit geben, Angelegenheiten bzgl. Führerschein(-anträge), Fahrzeug Zulassungen und Ab- und Ummeldungen, Steuerangelegenheiten, Technische Überwachung, Punktesystem und sonstige Strafverfahren bzgl. des Straßenverkehrs zu erledigen.


## Funktionale Anforderungen


**Definition der Akteure**

| **Name** | **Beschreibung** |
| :------- | :------------ |
| Bürger | Ein im HUB registrierter Benutzer, der über normale Berechtigungen verfügt, um die o.g. Funktionen auszuführen |
| Sachbearbeiter | Ein Bearbeiter, der die Anträge eines Bürgers einsehen und administrieren kann |

**Use-Case Diagramme**

Zulassungsstelle

![](media/Use-Case.png)

Führerscheinstelle

![](media/Fuehrerschein.png)

Technische Überwachung

![](media/tuev.png)

Steuerstelle, Strafverfahren, Punktesystem

![](media/rest.png)


## Anforderungen im Detail

**User Stories**

| **Name**| **In meiner Rolle als**...|   ...**möchte ich**...   | ..., **so dass**... | **Erfüllt, wenn**... | **Priorität**   |
|:-----|:----------:|:-------------------|:-------------|:---------|:----------------|
| Authentifizierung  |Benutzer| meine Identität bestätigt bekommen|ich Handlungen unter meinen Namen tätigen kann| meine Daten angezeigt werden | Muss |
| Übersicht | Benutzer | eine Übersicht über alle Funktionen bekommen | ich schnell zu jeder Funktion gelangen kann | ich die Home-Page erreiche | Muss |
| Auto anmelden | Benutzer  | neue Autos anmelden können  | diese offiziell zugelassen sind | ein Antrag auf Zulassung gestellt wurde | Muss  |
| Auto abmelden | Benutzer  | bereits registriertes Auto abmelden | dieses nicht mehr in meinen Daten erscheint | Auto aus Datenbank gelöscht | Muss  |
| Auto ummelden | Benutzer  | bereits registriertes Kennzeichen auf anderes Auto umschreiben  | das gleiche Kennzeichen auf anderes Auto gemeldet ist | Anfrage auf Ummeldung erstellt wurde  | Muss  |
| Autos anzeigen  | Benutzer  | Autos die auf meinen Namen registriert sind anzeigen  | ich dieses mit ihren Details sehen kann | Autos in meinen Daten dargestellt werden | Muss |
| Führerschein Antrag | Benutzer | einen Führerschein Antrag stellen können | dieser ausgewertet werden kann | Eine Antwort bezüglich der Auswertung erhalten wird | Muss |
| Führerschein Infos | Benutzer | Informationen über bestandene Führerscheine erhalten | ich diese einsehen kann | meine Führerscheine mir angezeigt werden | Muss |
| TüV Status | Benutzer | Benachrichtigt werden, wenn ein TüV ansteht | ich rechtzeitig darauf reagieren kann | Nachricht angezeigt wird / gesendet wird | Muss |
| TüV Erneuern | Benutzer | TüV Zertifikate hochladen | der TüV "Timer" erneuert wird | das Ablaufdatum nach Verifizierung verändert wird | Muss |
| Steuer | Benutzer | Benachrichtigt werden, wenn eine Rechnung ansteht | ich rechtzeitig darauf reagieren kann | Nachricht angezeigt wird / gesendet wird | Muss |
| Punktesystem | Benutzer | meine gesammelten Punkte in Flensburg einsehen können | ich mein Fahrverhalten ggf. anpassen kann | Die Punkte angezeigt werden | Muss |
| Strafverfahren | Benutzer | getätigte Strafverfahren im Straßenverkehr abrufen können | ich diese mit dessen Details einsehen kann | diese Vergehen angezeigt werden | Muss |
| Anfragen bearbeiten | Sachbearbeiter  | Anfragen auf An- und Ummeldungen bearbeiten können  | diese genehmigt oder abgelehnt werden können  | Einträge in DB gelöscht / geändert / hinzugefügt werden | Optional  |


**Misuse Stories**

- Der Service ist NICHT dazu gedacht, sich allgemeine Informationen über Fahrzeuge zu beschaffen
- Der Service wird die Anträge (voraussichtlich) NICHT vollautomatisch bearbeiten, ein Sachbearbeiter ist immernoch von Nöten
- Der Service bietet keine direkte Konservation zwischen Bürger und Bearbeiter


## Graphische Benutzerschnittstelle

### Übersicht
![](media/Home.png)
### Auto anmelden
![](media/Anmelden.png)
### Auto abmelden
![](media/Abmelden.png)
### Auto ummelden
![](media/Ummelden.png)
### Autos anzeigen
![](media/Fahrzeuge.png)
## Datenmodell 

**Entity Relationship Model**

![](media/ERD.png)

## Abläufe

![](media/ablauf.png)


## Schnittstellen

### Vehicle Routes
| **route** |  **Type** | **Consumes** | **Params** | **Produces** |
| :------ | :----- | :----- | :----- | :----- |
|/vehicle/create|POST|brand, model, firstregistration, displacement, emissions, hudeadline, licenseplate| None | new vehicle |
|/vehicle/user/|GET|None|None|User vehicle list|
|/vehicle/delete/:id|DELTE|NONE|id: int| remove specific vehicle|

### Register-Request Routes
| **route** |  **Type** | **Consumes** | **Params** | **Produces** |
| :------ | :----- | :----- | :----- | :----- |
|/registerrequest/create|POST|vehicle, status, owner| None | new register request |
|/registerrequest/user/|GET|None|None|User register request list|
|/registerrequest/delete/:id|DELTE|NONE|id: int| remove specific register request|

### License Routes
| **route** |  **Type** | **Consumes** | **Params** | **Produces** |
| :------ | :----- | :----- | :----- | :----- |
|/license/create|POST|owner, type, received| None | new vehicle |
|/license/user/|GET|None|None|User license list|

### License-Request Routes
| **route** |  **Type** | **Consumes** | **Params** | **Produces** |
| :------ | :----- | :----- | :----- | :----- |
|/licenserequest/create|POST|citizen, issued, status, licenseclass| None | new license request |
|/licenserequest/user/|GET|None|None|User license request list|
|/licenserequest/delete/:id|DELTE|NONE|id: int| remove specific license request|

### Penalty Rotues
| **route** |  **Type** | **Consumes** | **Params** | **Produces** |
| :------ | :----- | :----- | :----- | :----- |
|/penalty/user/|GET|None|None|User penalty list|

### Bill Routes
| **route** |  **Type** | **Consumes** | **Params** | **Produces** |
| :------ | :----- | :----- | :----- | :----- |
|/bill/create|POST|value, description, issued, payed, receiver, deadline| None | new bill |
|/bill/user/|GET|None|None|User bill list|

**Beispiel:**

### URL

[http://smart.city/microservices/strassenverkehrsamt](https://smartcity.w-mi.de/Strassenverkehrsamt)

### Events

#### Event-Subscriptions

| **Service** | **Funktion** |
| :------ | :----- | 
| service.WORLD | Update Secret Key |


## Technische Umsetzung


### Softwarearchitektur

![](media/Verteilung.png)

* Server
  * Web-Schicht: Python / Django
  * Logik-Schicht: Python
  * Persistenz-Schicht: MySQL Database

* Client
  * View-Schicht: HTML5, CSS3
  * Logik-Schicht: Javascript
  * Kommunikation-Schicht: Javascript, JSON

### Fehlerbehandlung 

| **Fehler** | **Code** | **Beschreibung** |
| :------- | :------- | :------------ |
| Benutzertoken konnte nicht aufgelöst werden | 401 | Token konnte nicht zu einem Benutzer aufgelöst werden |
| Fehler beim auflösen des Tokens | 500 | Auflösen des Tokens wirft eine Exception |
| Token nicht vorhanden | 404 | Ressource nicht mit gesendet worden |
| Falscher Dateiformat für Fileuploads | 400 | Hochgeladene Datei für z.B. HU in einem ungültigen Format |
| Ungültiges Datum | 400 | Datum für Erstzulassung liegt z.B. in der Zukunft |
| Falsche Datentypen | 400 | Datentypen von Anfragen nicht dem Schema entsprechend |

### Validierung
  
  | **Name** | **Bereich** | **Beschreibung** |
  | :----- | :----- | :----- |
  | Anfragen erstellen | API | Jede Art von Anfrage kann überprüft werden, indem jeweils eine erstellt wird und getestet wird, ob diese auch anschließend existiert |
  | Datentypen | Datenmodell | Es sollte getestet werden, ob die angegebenen Datentypen auch wirklich funktionieren, indem man Datensätze hinzufügt, die die Attribute bis aufs Maximum füllen |

### Verwendete Technologien

- Frontend
  - HTML5, CSS3, Javascript / ReactJS
- Backend
  - Python / Django
- Datenbank
  - MySQL
