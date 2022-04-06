# Softwareprojekt 2022

## Smart City

Sie sollen ein Softwareprodukt "Smart City" virtuell im Team planen, entwerfen und implementieren,
das die digitalen Transformation von Kommunen unterstützt und Behördengänge über das Internet ermöglicht.
Jeder Studierende implementiert einen Microservice mit Frontend, Backend und Datenbank.

Ein Microservice für eine Kommune kann z.B. sein: Bürgeramt, PKW-Zulassungsstelle, etc. Des Weiteren ist die Smart City über einen Integrations-Microservice ("Portal") zugänglich, der die Dienste zusammenfasst. Einzelne Microservices können (nicht-private) Daten publizieren, die von anderen Microservices genutzt und z.B. visualisiert werden können. Interkommunale Zusammenarbeit ist denkbar. Microservices mit künstlicher Intelligenz und Microservices für Authentifizierung und E-Mail können sinnvoll sein.

Dieses Repository soll sämtliche relevante Dokumente für
das Softwareprojekt im Sommersemester 2022 enthalten.
Die Dokumente werden über [docsify](https://docsify.js.org/#/)
auf [github pages](https://docs.github.com/en/pages/quickstart) publiziert
und mit [markdown](https://www.markdownguide.org/basic-syntax/) geschrieben.

--

## Services

- Mobiltäts Hub (Bus, Zug, Taxi...)
    - Termine
    - Zeiten
    - Tickets
    - Parkplatzsuche
    - (KI für Suche und Vorschläge)
- Straßenverkehrsamt
    - Steuern
    - An-/Abmeldung
    - Ummeldung
- Bauamt
    - Anträge
    - Abmessung
    - Begutachtung
- Finanzamt
- Zollamt
- Arbeitsamt
    - Anträge
- Bildungsportal
    - Übersicht (Kitas, Schule...)
    - An-/Abmeldung
    - Informationen
- Kulturportal
    - Übersicht (Veranstaltungen...)
        - Termine
        - Ort
        - Geschäfte
        - Reservierung (Tische,...)
- Jobportal
    - Suche (Job, Ausbildung,...)
- Bankenportal
    - Übersicht
        - Geldautomaten
        - Banken
    - Verweise auf die Bankenseiten
- Gesundheitsportal
    - Arztsuche
    - Termine
    - Medikamente kaufen
    - Onlinecall mit Ärzte
- Bürgerbüro
    - Anträge
    - Termine
    - Neu und ältere Bürger
- Zentrales Hub
    - Login
    - Register
    - Gastlogin
- Polizei
    - Anzeigen aufgeben
    - Gesuchte Leute anzeigen
    - Neuigkeiten über Unfälle
    - Einbruchsradar
- Nachrichten/Soziale Medien Portal
    - Benachrichtungen für Bürger
        - Warnungen
        - Inforamation (Newsletter)
    - Mitbürger einladen
    - Bewertungen abgeben
- Immobilienportal
    - Wohungssuche
    - Preisalarm