# Hub

**Autor:** Justin Kühnel, Patrick Mayer, Finn Amini Kaveh


## Überblick

- Das Hub zielt darauf ab, als zentrale Schnittstelle für den Benutzer zu dienen, über welche dieser alle vorhandenen Microservices erreichen und mit diesen interagieren kann. 
- Konzeptionelles Analyseklassendiagramm (logische Darstellung der Konzepte der Anwendungsdomäne)


## Funktionale Anforderungen
**Akteure**
| **Akteur** | **Definition** |
| :--------- | :----- |
| Benutzer | Angemeldeter Benutzer mit grundlegenden Berechtigungen |
| Gast | Nicht angemeldeter Besucher mit eingeschränkten Berechtigungen |

* Use-Case Diagramme
* Strukturierung der Diagramme in funktionale Gruppen

## Anforderungen im Detail

### User Stories

| **Name**| **In meiner Rolle als**...|   ...**möchte ich**...   | ..., **so dass**... | **Erfüllt, wenn**... | **Priorität**   |
|:-----|:----------:|:-------------------|:-------------|:---------|:----------------|
| Registrieren |Gast| mich registrieren können|ich Zugriff auf weitere Funktionen erhalte und meine Daten gespeichert werden können| ein Gast sich registrieren kann | Must |
| Login |Benutzer| mich einloggen können|Zugriff auf meine Daten erhalte und weitere Funktionalitäten nutzen kann| ein Benutzer sich einloggen kann | Must |
| Logout |Benutzer| mich ausloggen können|es nicht länger möglich ist über das aktuelle Gerät Daten auszulesen oder zu ändern | ein Benutzer sich ausloggen kann | Must |
| Benutzerprofil |Benutzer| mir meine Daten angucken können | ich weiß, was für Daten hinterlegt sind | Must |
| Zugriff Microservices |Benutzer, Gast| auf die verschiedenen Microservices zugreifen können|ich mit dem jeweiligen Microservice interagieren kann| der Zugriff auf die Microservices möglich ist | Must |
| Impressum |Benutzer, Gast| rechtliche- und Kontaktinformationen einsehen können|ich diesbezüglich bescheid weiß| wenn eine Art Impressum bereit gestellt wird | Must |

### Misuse Stories

| **Name**| **In meiner Rolle als**...|   ...**möchte ich**...   | ..., **so dass**... | **Erfüllt, wenn**... | **Priorität**   |
|:-----|:----------:|:-------------------|:-------------|:---------|:----------------|
| Doppelte E-mail Adresse |Gast| eine E-Mail Adresse bei der Registrierung mehrfach verwenden können|ich mir leichter merken kann, was ich für eine E-Mail Adresse verwendet habe| Bei erneuter Verwendung einer E-Mail Adresse wird eine Fehlermeldung angezeigt | Must |
| Zu einfaches Passwort |Gast| bei der Registrierung sehr einfache und kurze Passwörter verwenden können|ich mir diese besser merken kann| es eine mindestanforderung an das Passwort gibt | Must |
| Account Diebstahl |Gast, Benutzer| mich problemlos mit fremden Accounts anmelden können|ich Aktionen in deren Namen durchführen und ihre Daten auslesen kann| dies durch ein Passwort oder sonstige Sicherheitsmaßnahmen verhindert wird | Must |

## Graphische Benutzerschnittstelle

- GUI-Mockups passend zu User Stories
- Screens mit Überschrift kennzeichnen, die im Inhaltsverzeichnis zu sehen ist
- Unter den Screens darstellen (bzw. verlinken), welche User Stories mit dem Screen abgehandelt werden
- Modellierung der Navigation zwischen den Screens der GUI-Mockups als Zustandsdiagramm
- Mockups für unterschiedliche Akteure


## Datenmodell 

- Begriffe im Glossar darstellen
- Modellierung des physikalischen Datenmodells 
  - RDBMS: ER-Diagramm bzw. Dokumentenorientiert: JSON-Schema

## Abläufe

- Aktivitätsdiagramm für den Ablauf sämtlicher Use Cases
- Aktivitätsdiagramme für relevante Use Cases
- Aktivitätsdiagramm mit Swimlanes sind in der Regel hilfreich 
  für die Darstellung der Interaktion von Akteuren der Use Cases / User Stories
- Abläufe der Kommunikation von Rechnerknoten (z.B. Client/Server)
  in einem Sequenz- oder Aktivitätsdiagramm darstellen
- Modellieren Sie des weiteren die Diagramme, die für das (eigene) Verständnis des
  Softwaresystems hilfreich sind. 


## Schnittstellen

- Schnittstellenbeschreibung (API), z.B. mit OpenAPI 
- Auflistung der nach außen sichtbaren Schnittstelle des Microservices. Über welche Schnittstelle kann z.B. der Client den Server erreichen?
- In Event-gesteuerten Systemen ebenfalls die Definition der Ereignisse und deren Attribute
- Aufteilen in Commands, Events, Queries
* Abhängigkeiten: Liste mit Kommunikationsabhängigkeiten zu anderen Microservices

**Beispiel:**

### URL

http://smart.city/microservices/customer

### Commands

**Synchronous**

| **Name** | **Parameter** | **Resultat** |
| :------ | :----- | :------ |
| createCustomer() | int id | int id |
| deleteOrder() | int id | int id |

**Asynchronous**

| **Name** | **Parameter** | **Resultat** |
| :------ | :----- | :------ |
| createContract() | int id | int id |
| changeContract() | int id | - |

### Events

**Customer event channel**

| **Name** | **Payload** | 
| :------ | :----- | 
| Customer Authorized | int id |
| Customer Deleted | int id |

**Contract event channel**

| **Name** | **Payload** | 
| :------ | :----- | 
| Contract Received | int id |
| Contract Deleted | int id |

### Queries

| **Name** | **Parameter** | **Resultat** |
| :------ | :----- | :------ |
| getContracts() | - | Contract [] list |
| getContract() | int id | Contract c |

### Dependencies

#### RPC

| **Service** | **Funktion** |
| :------ | :----- | 
| Authorization Service | authenticateUser() |
| Hospital Service | blockDate() |

#### Event-Subscriptions

| **Service** | **Funktion** |
| :------ | :----- | 
| Cinema channel | CancelFilmCreatedEvent |
| Customer reply channel | CreateCustomerEvent |


## Technische Umsetzung


### Softwarearchitektur

- Darstellung von Softwarebausteinen (Module, Schichten, Komponenten)

Hier stellen Sie die Verteilung der Softwarebausteine auf die Rechnerknoten dar. Das ist die Softwarearchitektur. Zum Beispiel Javascript-Software auf dem Client und Java-Software auf dem Server. In der Regel wird die Software dabei sowohl auf dem Client als auch auf dem Server in Schichten dargestellt.

* Server
  * Web-Schicht
  * Logik-Schicht
  * Persistenz-Schicht

* Client
  * View-Schicht
  * Logik-Schicht
  * Kommunikation-Schicht

Die Abhängigkeit ist bei diesen Schichten immer unidirektional von "oben" nach "unten". Die Softwarearchitektur aus Kapitel "Softwarearchitektur" ist demnach detaillierter als die Systemübersicht aus dem Kapitel "Systemübersicht". Die Schichten können entweder als Ganzes als ein Softwarebaustein angesehen werden. In der Regel werden die Schichten aber noch weiter detailliert und in Softwarebausteine aufgeteilt. 



### Entwurf

- Detaillierte UML-Diagramme für relevante Softwarebausteine

### Fehlerbehandlung 

* Mögliche Fehler / Exceptions auflisten
* Fehlercodes / IDs sind hilfreich
* Nicht nur Fehler technischer Art ("Datenbankserver nicht erreichbar") definieren, sondern auch fachliche Fehler wie "Kunde nicht gefunden", "Nachricht wurde bereits gelöscht" o.ä. sind relevant. 

### Validierung

* Relevante (Integrations)-Testfälle, die aus den Use Cases abgeleitet werden können
* Testfälle für 
  - Datenmodell
  - API
  - User Interface
* Fokussieren Sie mehr auf Integrationstestfälle als auf Unittests
* Es bietet sich an, die IDs der Use Cases / User Stories mit den Testfällen zu verbinden,
  so dass erkennbar ist, ob Sie alle Use Cases getestet haben.

### Verwendete Technologien

* Frontend
  - HTML5, CSS3, Javascript - React.js
* Backend
  - Node.js
* Datenbank
  - MySQL
