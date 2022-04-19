# Bildungsportal

**Autor:** Patrick Hüntelmann


## Überblick

Dieser Microservice soll einem Benutzer die Möglichkeit bieten auf das Bildungsangebot sämtlicher Bildungseinrichtungen der Stadt zuzugreifen. Dabei kann der Benutzer die aktuellen Bildungsangebote und die anbietende Einrichtung einsehen und sich zu diesem Anmelden. Des weiteren kann ein Benutzer seine bisherigen Leistungen (Klausuren, Abschlüsse) einsehen.

## Funktionale Anforderungen

### Akteure

| **Akteur**  | **Definition**                                                                                                     |
|:------------|:-------------------------------------------------------------------------------------------------------------------|
| Benutzer    | Angemeldeter Benutzer mit grundlegenden Berechtigungen                                                             |
| Institution | Sachbearbeiter einer Institution mit zusätzlichen Berechtigungen für die Bearbeitung des eigenen Bildungsangebotes |

### Anwendungsfalldiagramm

![](media/use_case.svg)

## Anforderungen im Details

### User Stories

| **Als**     | **möchte ich**                           | **so dass**                                    | **Akzeptanz**                            | **Priorität** |
|:------------|:-----------------------------------------|:-----------------------------------------------|:-----------------------------------------|:--------------|
| Benutzer    | nach Bildungsangeboten suchen            | ich Angebote finde, welche mir gefallen        | Suche und Filterung der Bildungsangebote | Must          |
| Benutzer    | mich beim Bildungsangebot anmelden       | ich an dem Angebot teilnehmen kann             | Anmeldung an einem Bildungsangebot       | Must          |
| Benutzer    | Details eines Bildungsangebotes einsehen | ich mich über das Angebot informieren kann     | Detailanzeige eines Bildungsangebotes    | Should        |
| Benutzer    | Details einer Institution einsehen       | ich mich über die Institution informieren kann | Detailanzeige einer Institution          | Should        |
| Benutzer    | meine Benotung einsehen                  |                                                | Noteneinsicht                            | Should        |
| Benutzer    | meine Zeugnisse einsehen                 |                                                | Zeugniseinsicht                          | Should        |
| Institution | Bildungsangebote erstellen               | sich Benutzer bei dem Angebot anmelden können  | Erstellung eines Bildungsangebots        | Must          |
| Institution | Anmeldungen freigeben                    |                                                | Freigabe von Anmeldungen                 | Must          |
| Institution | Benotungen eintragen                     | ich die Benutzer benoten kann                  | Eintragung von Benotungen                | Should        |
| Institution | Zeugnis eintragen                        |                                                | Eintragung von Zeugnissen                | Should        |

## Graphische Benutzerschnittstelle

![](media/mockups.svg)

## Datenmodell

![](media/erm.svg)

## Schnittstellen

Die Kommunikation ziwschen der Client- und Server-Komponente soll über OpenAPI REST-Schnittstelle stattfinden. Die Kommunikation zwischen dem Server und der Datenbank soll über eine bereits existierende Komponente umgesetzt werden und wird daher nicht näher beschrieben.


# Technische Umsetzung

## Softwarearchitektur

 * Client
   * Darstellungs-Schicht (Views)
   * Logik-Schicht (Services)
   * Kommunikations-Schicht (Models, REST)
 * Server
   * Zugriffs-Schicht (Controller, REST)
   * Logik-Schicht (Services)
   * Persistenz-Schicht (Models, Datenbank)
  
## Verwendete Technologien
 * Frontend
   * Typescript
   * React.js
 * Backend
   * Kotlin
   * Spring Boot
   * JPA
 * Datenbank
   * MySQL
