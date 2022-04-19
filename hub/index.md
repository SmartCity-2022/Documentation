# Krankenhaus

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
* Akteure sowie andere Begriffe der implementierten Fachdomäne definieren 
* Begriffe konsistent in der Spezifikation verwenden  
* Begriffe im Glossar darstellen

## Anforderungen im Detail
- Strukturierung der User Stories in funktionale Gruppen
- Sicherheit: Misuse-Stories formulieren

| **Name**| **In meiner Rolle als**...|   ...**möchte ich**...   | ..., **so dass**... | **Erfüllt, wenn**... | **Priorität**   |
|:-----|:----------:|:-------------------|:-------------|:---------|:----------------|
| Registrieren |Gast| mich registrieren können|ich Zugriff auf weitere Funktionen erhalte und meine Daten gespeichert werden können| ein Gast sich registrieren kann | Must |
| Login |Benutzer| mich einloggen können|Zugriff auf meine Daten erhalte und weitere Funktionalitäten nutzen kann| ein Benutzer sich einloggen kann | Must |
| Zugriff Microservices |Benutzer, Gast| auf die verschiedenen Microservices zugreifen können|ich mit dem jeweiligen Microservice interagieren kann| der Zugriff auf die Microservices möglich ist | Must |
| Impressum |Benutzer, Gast| rechtliche- und Kontaktinformationen einsehen können|ich diesbezüglich bescheid weiß| wenn eine Art Impressum bereit gestellt wird | Must |

## Graphische Benutzerschnittstelle

- GUI-Mockups 
  - Als Gast
    
    - Startseite

    ![](images/hub.jpg)
    - User Storie: Zugriff Microservices
    
    - Impressum 

    ![](images/hub_impressum.jpg)
    - User Storie: Impressum
    - Loginseite 

    ![](images/hub_login.jpg)
    - User Storie: Login
    - Registierungsseite

    ![](images/hub_register.jpg)
    - User Storie: Registrieren
    - Startseite mit Eingeklappter Navbar

    ![](images/hub_eingeklappt.jpg)
    - User Storie: Zugriff Microservices
  - Als angemeldeter Benutzer
    - Startseite 

    ![](images/hubreg.jpg)
    - Impressum

    ![](images/hub_impressum_reg.jpg)

- Modellierung der Navigation zwischen den Screens der GUI-Mockups als Zustandsdiagramm


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
