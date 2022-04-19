# Bankenportal

**Autor:** Dennis Gorpinic


## Überblick

Ein Banken Microservice für Nutzer der SmartCity-Webseite.
Dieser Mircoservice bietet die Dienstleistung einer Bank wie die Eröffnung und Verwaltung von Konten, die möglichkeit Geld an andere Konten zu senden und Geld zu empfangen, ein Karte zu beantragen um bargeldlos zu zahlen. Desweiteren soll eine Suche angeboten werden um Filialen und Geldautomaten in der Nähe zu finden.


## Funktionale Anforderungen

### Akteure
* Benutzer
* (Berater)



## Anforderungen im Detail

| **Name** | **Priorität** | **Als** | **möchte ich** | **so dass** | **Akzeptanz** |
| :------ | :------| :------ | :----- | :------ | :-------- |
| Konto eröffnen | Muss| Benutzer| ein Konto eröffnen können| ich ein Konto habe| Konto für den Benutzer freigeschaltet |
| Konto löschen | Muss| Benutzer| ein Konto löschen können| überflüssige Konten aussortieren kann| Konto nicht mehr existiert |
| Konto einsehen | Muss| Benutzer| Details des Kontos sehen | ich ein wichtige Infos über das Konto einsehen kann z.B. Guthaben| Kontodetailansicht|
| Kontenübersicht| Muss| Benutzer| alle meine Konten sehen in einer Übersicht | ich einen Überblick habe über meine Konten| Kontenübersicht|
| Kontosperrung| Muss| Benutzer| ein Konto sperren können ohne das es gelöscht wird | ich im Notfall keine Transaktionen auf meinem Konto ausgeführt werden können| Sperren-Button|
| Transaktionen| Muss| Benutzer| Transaktionen an/von andere(n) Konten senden/empfangen | ich z.B. Geld an/von andere(n) Konten überweisen/erhalten kann| Transaktionsfenster|
| Karten beantragen| Sollte| Benutzer| eine Karte beantragen | ich überall Zahlen kann ohne Bargeld mitzuführen| Karten beantragen Button|
| Filialen/Geldautomaten finden| Sollte| Benutzer| ein Überblick mit Filialen/Geldautomaten | eine Filiale/Geldautomaten in meiner Nähe finden| Liste mit Filialen/Geldautomaten|
| Dokumente hochladen| Kann| Benutzer| Dokumente hochladen | ich benötigte Dokumente Digital zur Verfügung stellen kann| Hochlade-Funktion|
| Dokumentenübersicht| Kann| Benutzer| alle meine Dokumente einsehen | ich einen Überblick über meine Dokumenten habe | Dokumentenübersicht|
| Dokumente löschen| Kann| Benutzer| unnötige Dokumente löschen| nicht relevante oder veraltete Dokumente löschen kann | Lösch-Button Dokumente|
| Berater kontaktieren| Kann| Benutzer| meinen Berater über einen Chat kontaktieren| ich persönliche Hilfe bekommen kann bei Problemen oder Fragen | Berater Chat|

## Graphische Benutzerschnittstelle

![](media/Kontoübersicht.svg)
![](media/NeuesKonto.svg)
![](media/Kontodetailansicht.svg)
![](media/Filialensuche.svg)
![](media/Transaktion.svg)
![](media/BeraterChat.svg)

## Datenmodell 

![](media/Datenmodell.svg)


## Schnittstellen

- Schnittstellenbeschreibung (API), z.B. mit OpenAPI 
- Auflistung der nach außen sichtbaren Schnittstelle des Microservices. Über welche Schnittstelle kann z.B. der Client den Server erreichen?
- In Event-gesteuerten Systemen ebenfalls die Definition der Ereignisse und deren Attribute
- Aufteilen in Commands, Events, Queries
* Abhängigkeiten: Liste mit Kommunikationsabhängigkeiten zu anderen Microservices

### URL

http://smart.city/microservices/bankportal


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


### Verwendete Technologien

- Verwendete Technologien (Programmiersprachen, Frameworks, etc.)

* Frontend
    * Javascript 
     * React.js
* Backend
    * Javascript
     * Express.js 
* Datenbank
  * MySQL
