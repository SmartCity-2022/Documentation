# Projektorganisation

**Autor:** Scrum Master

## Richtlinien

### Organisation

- Verwendetes Vorgehensmodell.
  - Scrum mit Sprints (Dauer 2 Wochen)
- Welche Arten von Meetings finden wöchentlich statt?
  - Wöchentlich vor Ort in Raum D317 um 14-17 Uhr 
- Geplanter Ablauf der Meetings. 
  - Jeder zeigt seinen aktuellen Stand
  - Zusammenarbeit an dem Projekten
  - Probleme ansprechen
- Werkzeuge für Projektorganisation? Kanban-Board?
  - Github Projects (Kanban-Board)
  - Github Issues
  - Discord
  - Milestones
- Wie läuft ein typischer Sprint ab?
  - Dauer: 14 Tage
  - Ziele setzen
- Wie sieht hier ein Codereview aus?
  - Passiert bei Pull Requests
  - Kommentare dirket in den Pull Requests
- Wie und womit wird die Teamkommunikation durchgeführt?
  - Discord Kanal
  - Kommentare in Pull Request
  - Github Issues
- Dokumentation:
  - Entwicklerdokumentation
    - Englisch
    - Kommentare & Variablen
  - Meeting-Protokoll-Dokumentation
    - Deutsch
    - Zusammenfassung des Meetings
- Was ist der Produktlieferzeitplan? (x-Mal-wöchentliche Auslieferungen / Continuous I/D/D)
  - Alle 14 Tage vor Ort
- Wie wird der Projektfortschritt gemessen und was passiert, wenn zeitlich verschoben werden muss?
  - Jeweils abhänig vom Meilenstein(Feature)
- Wer setzt Erwartungen und Ziele fest und wie werden diese dokumentiert?
  - Gemeinsam
  - Dokumentation wird am Anfang erstellt
  - Dokumentation wird dauerhaft erweitert
  - Dokumentation ist aufgeteilt
    - Services von Entwicklern
- Was passiert, wenn jemand Verbesserungsmöglichkeiten identifiziert?
  - In Meeting oder Scrum Master ansprechen
- Einschränkungen, Betriebsbedingungen, Faktoren und Risiken, die die Entwicklung beeinflussen können.
  - Krankheit
    - Notfalls online
  - Zeit

### Team

- Werte und menschliche Umgangsformen
  - Respektvoll
  - Offenheit
- Wie werden Meinungsverschiedenheiten gelöst?
  - Scrum Master / Software Architekt löst den Streit
- Wer legt Prioritäten und Zeitpläne fest?
  - Features Prioritäten werden festgelegt vom Product Owner
  - Gemeinsam als Gruppe in Meetings
- Was passiert, wenn ein Teammitglied ein Ziel nicht einhält bzw. die Erwartungen nicht erfüllt?
  - Person ansprechen (Ursache suchen)
  - Dozent Bescheid sagen

### Technik

- Interne Anforderungen an Softwarequalitätsmerkmale 
  - Erweiterbarkeit
  - Dokumentation
  - automatische und manuelle Tests
  - Statische Codeanalyse
  - ...
- Aufteilung in Repositories gemäß Systemarchitektur?
  - Pro Service ein Repository
- Versionskontrolle? Git-Workflow?
  - Github-Workflow (master & dev branch)
- Wie werden Änderungen intgriert und ausgeliefert? CI/CD? 
  - Github Actions
    - Tests
    - Build
- Wie wird die Infrastruktur spezifiziert? Containerisierung?
  - Docker
    - Dockerfile Template
- Implementierung
  - Entwicklungsumgebung.
  - Betriebssysteme.
  - Programmiersprachen.
  - Frameworks.
  - Logging.
- Technologieauswahl: Messaging zum Beispiel mit [RabbitMQ](https://www.rabbitmq.com/) und [AsyncAPI](https://www.asyncapi.com/)

## Rollen und Verantwortlichkeiten

| Person | Rolle | Verantwortlichkeit |
|----------|-----------|-----------|
| Finn Amini Kaveh / Patrick Mayer | Scrum Master | Leitung, Kanban-Board, Protokollierung, Prozessqualität |
| Justin Kühnel | Product Owner | Produktvision, Integrations-Microservice, Softwareproduktqualität |
| Niklas Schumann | DevOps Engineer | Github-Repos, Docker, CI/CD, Dokumentation, Support, Infrastrukturqualität | 
| Finn Watermann | Software Architekt | Technische Leitung/Vision, Code Reviews, Mentoring, Technikevaluation, Softwarequalität |
| Dennis Edler | Software Engineer | Microservice [Parkplatz](parkplatz/index) |
| Ben-Lukas Horn | Software Engineer | Microservice [Krankenhaus](krankenhaus/index) |
| Nico Hübner | Software Engineer | Microservice [Krankenhaus](krankenhaus/index) |
| Fabian Pechta | Software Engineer | Microservice [Krankenhaus](krankenhaus/index) |
| Patrick Hüntelmann | Software Engineer | Microservice [Krankenhaus](krankenhaus/index) |
| Finn Bechinka | Software Engineer | Microservice [Krankenhaus](krankenhaus/index) |
| Clemens Vogtländer | Software Engineer | Microservice [Krankenhaus](krankenhaus/index) |
| Dennis Gorpinic | Software Engineer | Microservice [Krankenhaus](krankenhaus/index) |
| Maurice Leenders | Software Engineer | Microservice [Krankenhaus](krankenhaus/index) |
| Marc Leenders | Software Engineer | Microservice [Krankenhaus](krankenhaus/index) |
| Kevin Fischer | Software Engineer | Microservice [Krankenhaus](krankenhaus/index) |

Hinweis: Ein Microservice für die Authentifizierung/Autorisierung könnte sinnvoll sein.

## Grober Meilensteinplan

Zuästzlich zum Kanban-Board hier Meilensteine beschreiben.

**Feststehende Termine:**

* **Abgabe Spezifikation:** KW 16 (18.4.-20.4.)
* **Erster Prototyp (MVP):** KW 20 (16.5.-18.5.) / KW 21 (23.5.-25.5.)
* **Softwareprojektabgabe:** Ende Juni 2022 / Anfang Juli 2022
