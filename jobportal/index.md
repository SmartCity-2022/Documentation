# Jobportal

**Autor:** Clemens Vogtländer

## Überblick

Der Microservice Jobportal befasst sich mit der Ausschreibung und Suche von Praktikumsplätzen, Ausbildungsplätzen, Minijobs sowie Teilzeit und Vollzeitstellen, welche im Nachfolgenden als Arbeitsstellen oder Stellen bezeichnet werden.

Sobald ein Bürger von der Hauptseite aus auf den Microservice zugreift, kann er entweder nach Stellen suchen, oder eine Firma registrieren um Stellen auszuschreiben.

Falls der Bürger nach einer Ausbildungsstelle suchen möchte, kann er nach Berufsbezeichnungen sowie Firmennamen suchen. Außerdem kann er die Suche nach gewünschter Stelle sowie nach gewünschtem Berufsfeld, wie z.B. Informatik, Physik, Maschinenbau Filtern.

Falls eine Stelle gefunden wurde, kann sich ein Bürger für diese Stelle registrieren, um so Kontakt zum Unternehmen aufzubauen.
Sobald ein Bürger sich für die Stelle registriert hat, wird sie nichtmehr auf der Hauptseite gelistet.

Falls ein Benutzer bereits eine Firma besitzt und Stellen ausschreiben möchte, kann er eine Firma auf seinen Namen registrieren und Stellen ausschreiben.

## Funktionale Anforderungen

### Akteure im Microservice

Folgende Akteure interagieren mit dem Microservice:

* **Benutzer** der Standard Benutzer der den Microservice benutzt, um nach Stellen zu suchen.
* **Unternehmer** ein Bürger der gleichzeitig ein Unternehmen im Microservice repräsentiert und Stellen ausschreiben kann.

### Use Case Diagramme

#### Benutzer

![](media/usecase/use-case-benutzer.svg)

#### Unternehmer

![](media/usecase/use-case-unternehmer.svg)

## Anforderungen im Detail

### User Stories

| **ID** | **Priorität** | **Als** | **möchte ich** | **so dass ich** | **Akzeptanz** |
| :----- | :------------ | :------ | :------------- | :---------- | :------------ |
| Stellenanzeige | muss | Bürger | stellen anzeigen lassen | nach passenden Stellen schauen kann | Stellenanzeige funktioniert |
| Stellensuche | muss | Bürger | nach Stellen suchen können | bessere Ergebnisse erhalte | Suche funktioniert |
Stelleneinschreibung | muss | Bürger | mich für eine Stelle einschreiben können | die Stelle bekomme | Stelleneinschreibung funktioniert |
Firma registrieren | soll | Bürger | eine Firma auf meinen Namen registrieren | Stellen ausschreiben kann | Firmenregistrierung funktioniert |
Stellenausschreibung | soll | Unternehmer | eine Stellenausschreibung für meine Firma vornehmen | neue Bewerber finde | Stellenausschreibung funktioniert |
Bewerber ansehen | soll | Unternehmer | Bewerber für meine Stellenausschreibungen ansehen | Bewerber filtern kann | Bewerberansicht funktioniert |
| Stellenranking | kann | Bürger | die beliebtesten Stellen sehen können | die besten Stellen zu sehen | Stellenranking funktioniert |
| Stellen filtern | kann | Bürger | meine Suche und das Ranking filtern können | genauere Angebote sehe | Filtern nach Stellen funktioniert |
Stellenrückmeldung | kann | Bürger | den Status meiner Bewerbungen einsehen | weiß ob ich genommen werde | Stellenrückmeldung funktioniert |
Chat-Funktion | kann | Bürger | Bei Rückfragen mit dem Ansprechpartner der Firma schreiben | mögliche Probleme zu beseitigen | Chat-Funktion zwischen Benutzer und Firma funktioniert

## Grafische Benutzerschnittstelle

### Stellenanzeige

![](media/mockups/mockup-stellenanzeige.svg)

### Stellensuche

![](media/mockups/mockup-stellensuche.svg)

### Stelleneinschreibung

![](media/mockups/mockup-bewerbung.svg)

## Datenmodell

![](media/datamodel/datamodel.svg)


### URL

http://smart.city/microservices/jobportal

### Events

#### Event Subscriptions

  * Schule abgeschlossen -> Erinnerung auf Jobportal für Ausbildungssuche

#### Events

  * Lohnauszahlung
  * neuer Job registriert
  * Job angenommen



## Technische Umsetzung


### Softwarearchitektur

- Darstellung von Softwarebausteinen (Module, Schichten, Komponenten)

Hier stellen Sie die Verteilung der Softwarebausteine auf die Rechnerknoten dar. Das ist die Softwarearchitektur. Zum Beispiel Javascript-Software auf dem Client und Java-Software auf dem Server. In der Regel wird die Software dabei sowohl auf dem Client als auch auf dem Server in Schichten dargestellt.

* Server
  * Web-Schicht
    * HTTP
    * Express.js
  * Logik-Schicht
    * Node.js
    * React.js Routes
  * Persistenz-Schicht

* Client
  * View-Schicht
  * Logik-Schicht
  * Kommunikation-Schicht

#### Deployment: Backend

![](media/deployment/deployment_backend.svg)


### Verwendete Technologien

- Verwendete Technologien (Programmiersprachen, Frameworks, etc.)

* Frontend
  * HTML
  * CSS
  * Javascript
      * React.js
* Backend
  * Javascript
      * Express.js
* Datenbank
  * MySQL
