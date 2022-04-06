# Projektorganisation

**Autor:** Scrum Master

## Richtlinien

### Organisation

- Verwendetes Vorgehensmodell.
- Welche Arten von Meetings finden wöchentlich statt?
- Geplanter Ablauf der Meetings.  
- Werkzeuge für Projektorganisation? Kanban-Board?
- Wie läuft ein typischer Sprint ab?
- Wie sieht hier ein Codereview aus?
- Wie und womit wird die Teamkommunikation durchgeführt?
- Dokumentation:
  - Entwicklerdokumentation?
  - Kundendokumentation?
  - Meeting-Protokoll-Dokumentation?
- Was ist der Produktlieferzeitplan? (x-Mal-wöchentliche Auslieferungen / Continuous I/D/D)
- Wie wird der Projektfortschritt gemessen und was passiert, wenn zeitlich verschoben werden muss?
- Wer setzt Erwartungen und Ziele fest und wie werden diese dokumentiert?
- Was passiert, wenn jemand Verbesserungsmöglichkeiten identifiziert?
- Einschränkungen, Betriebsbedingungen, Faktoren und Risiken, die die Entwicklung beeinflussen können.

### Team

- Werte und menschliche Umgangsformen
- Wie werden Meinungsverschiedenheiten gelöst?
- Wer legt Prioritäten und Zeitpläne fest?
- Was passiert, wenn ein Teammitglied ein Ziel nicht einhält bzw. die Erwartungen nicht erfüllt?

### Technik

- Interne Anforderungen an Softwarequalitätsmerkmale 
  - Erweiterbarkeit
  - Dokumentation
  - automatische und manuelle Tests
  - Statische Codeanalyse
  - ...
- Aufteilung in Repositories gemäß Systemarchitektur? Monorepo?
- Versionskontrolle? Git-Workflow?
- Wie werden Änderungen intgriert und ausgeliefert? CI/CD? 
- Wie wird die Infrastruktur spezifiziert? Containerisierung?
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
