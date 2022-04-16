# Gesundheitsportal

### **Autor:** Leon-Maurice Leenders

<br>


# Überblick

- Textuelle Beschreibung der Anwendungsdomäne
- Konzeptionelles Analyseklassendiagramm (logische Darstellung der Konzepte der Anwendungsdomäne)

<br>


# Funktionale Anforderungen

## Definition der Akteure

| **Akteur** | **Definition** | 
| :--------- | :------------- | 
| Benutzer | Angemeldeter Nutzer mit Berechtigungen für alle grundlegenden Funktionnen |
| Praxisingaber | Erweitert die Benutzerrolle mit Privilegien zur Verwaltung der jeweiligen Praxis  |
| Apothek | Erweitert die Benutzerrolle mit Privilegien zur Verwaltung der jeweiligen Apotheke |

<br>

## Use-Case Diagramme

### Benutzer:
![](media/benutzer.png)

### Praxis:
![](media/praxis.png)

### Apotheke:
![](media/apotheke.png)

<br>

<!--
## Anforderungen im Detail

- User Stories mit Akzeptanzkritierien 
- Optional: Name (oder ID) und Priorität ("Must", "Should", "Could", "Won't")
- Strukturierung der User Stories in funktionale Gruppen
- Sicherheit: Misuse-Stories formulieren
-->


# User-Stories

| **Name** | **In meiner Rolle als**... | ...**möchte ich**... | ..., **so dass**... | **Erfüllt, wenn**... | **Priorität** |
|:-----|:----------:|:-------------------|:-------------|:---------|:----------------|
| Apotheke registrieren | Benutzer | Eine Apotheke in meinem Namen registrieren | Die Apotheke ist für jeden Nutzer erreichbar | Datensatz wurde erfolgreich in die Datenbank eingefügt | Kann |
| Praxis registrieren | Benutzer | Eine Praxis in meinem Namen registrieren | Die Praxis ist für jeden Nutzer erreichbar | Datensatz wurde erfolgreich in die Datenbank eingefügt | Kann |
| Suche | Benutzer | Nach Krankenhäuser, Praxen, Apotheken und Medikamenten suchen können | Suchergebnis der Suchpräferenz entspricht | Alle Datensätze der Suchpräferenz ausgegeben werden | Muss |
| Krankenhaus einsehen | Benutzer | Eine Praxis in meinem Namen registrieren   | ich lernen kann | Lösung wird angezeigt | Muss |
| Praxis einsehen | Benutzer | Eine Praxis in meinem Namen registrieren   | ich lernen kann | Lösung wird angezeigt | Muss |
| Apotheke einsehen | Benutzer | Eine Praxis in meinem Namen registrieren   | ich lernen kann | Lösung wird angezeigt | Muss |
| Medikament einsehen | Benutzer | Eine Praxis in meinem Namen registrieren   | ich lernen kann | Lösung wird angezeigt | Muss |

<br>


# Graphische Benutzerschnittstelle

- GUI-Mockups passend zu User Stories
- Screens mit Überschrift kennzeichnen, die im Inhaltsverzeichnis zu sehen ist
- Unter den Screens darstellen (bzw. verlinken), welche User Stories mit dem Screen abgehandelt werden
- Modellierung der Navigation zwischen den Screens der GUI-Mockups als Zustandsdiagramm
- Mockups für unterschiedliche Akteure


# Datenmodell 

- Begriffe im Glossar darstellen
- Modellierung des physikalischen Datenmodells 
  - RDBMS: ER-Diagramm bzw. Dokumentenorientiert: JSON-Schema


# Abläufe

- Aktivitätsdiagramm für den Ablauf sämtlicher Use Cases
- Aktivitätsdiagramme für relevante Use Cases
- Aktivitätsdiagramm mit Swimlanes sind in der Regel hilfreich 
  für die Darstellung der Interaktion von Akteuren der Use Cases / User Stories
- Abläufe der Kommunikation von Rechnerknoten (z.B. Client/Server)
  in einem Sequenz- oder Aktivitätsdiagramm darstellen
- Modellieren Sie des weiteren die Diagramme, die für das (eigene) Verständnis des
  Softwaresystems hilfreich sind. 


# Schnittstellen

- Schnittstellenbeschreibung (API), z.B. mit OpenAPI 
- Auflistung der nach außen sichtbaren Schnittstelle des Microservices. Über welche Schnittstelle kann z.B. der Client den Server erreichen?
- In Event-gesteuerten Systemen ebenfalls die Definition der Ereignisse und deren Attribute
- Aufteilen in Commands, Events, Queries
* Abhängigkeiten: Liste mit Kommunikationsabhängigkeiten zu anderen Microservices


## URL

http://smart.city/microservices/customer

## Commands

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

## Events

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

## Queries

| **Name** | **Parameter** | **Resultat** |
| :------ | :----- | :------ |
| getContracts() | - | Contract [] list |
| getContract() | int id | Contract c |

## Dependencies

### RPC

| **Service** | **Funktion** |
| :------ | :----- | 
| Authorization Service | authenticateUser() |
| Hospital Service | blockDate() |

#### Event-Subscriptions

| **Service** | **Funktion** |
| :------ | :----- | 
| Cinema channel | CancelFilmCreatedEvent |
| Customer reply channel | CreateCustomerEvent |


# Technische Umsetzung

## Softwarearchitektur

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

## Entwurf

- Detaillierte UML-Diagramme für relevante Softwarebausteine

## Fehlerbehandlung 

* Mögliche Fehler / Exceptions auflisten
* Fehlercodes / IDs sind hilfreich
* Nicht nur Fehler technischer Art ("Datenbankserver nicht erreichbar") definieren, sondern auch fachliche Fehler wie "Kunde nicht gefunden", "Nachricht wurde bereits gelöscht" o.ä. sind relevant. 

## Validierung

* Relevante (Integrations)-Testfälle, die aus den Use Cases abgeleitet werden können
* Testfälle für 
  - Datenmodell
  - API
  - User Interface
* Fokussieren Sie mehr auf Integrationstestfälle als auf Unittests
* Es bietet sich an, die IDs der Use Cases / User Stories mit den Testfällen zu verbinden,
  so dass erkennbar ist, ob Sie alle Use Cases getestet haben.

## Verwendete Technologien
- Verwendete Technologien (Programmiersprachen, Frameworks, etc.)

* Frontend
* Backend
* Datenbank
