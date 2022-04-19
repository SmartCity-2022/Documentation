# Bildungsportal

**Autor:** Patrick Hüntelmann


## Überblick

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
| Institution | Bildungsangebote erstellen               | sich Benutzer bei dem Angebot anmelden können  | Erstellung eines Bildungsangebots        | Must          |
| Institution | Anmeldungen freigeben                    |                                                | Freigabe von Anmeldungen                 | Must          |
