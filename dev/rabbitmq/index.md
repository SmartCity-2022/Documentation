# Rabbit MQ Testumgebung
Schritt 1:
---
 - Installiert euch [Docker](https://docs.docker.com/get-docker/)
 - Führt in der Konsole diesen befehl uas `docker pull rabbitmq:3.9-management`
 - Nun könnt ihr mit `docker run -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3.9-management` den rabbitmq Server starten

Schritt 2:
 ---
 Für die bereitgestellten Python programme wird das Packet **pika** gebraucht.

 `pip install pika`

 Nun könnt ihr reciever.py starten. Dieses Programm hört auf alle eingehenden Events und gibt sie in der Konsole aus.

 Schritt 3:
 ---
 Zum manuellen senden eines Events, könnt ihr sender.py nutzen.
 Ein Event steht auf zwei Teilen

 - Routing Key
 - Message

 Routing Keys könnten wie folgt aussehen:
   - bank
   - bank.ueberweisung
   - bank.ueberweisung.erfolgreich
   - bank.ueberweisung.*
   - bank.#.erfolgreich
   - fahrzeugvermietung.vertrag.bestätigt
   - a.b.c.d.e.f.g.h.i.j.k.l.m.n.o.p.q.r.s.t.u.v.w.x.y.z

Ein Empfänger kann sich dann aussuchen auf welche Routing Keys er zuhören möchte und bekommt daraufhin nur die Events die an diesen Key geschickt werden. Ich empfehle sich [dieses Tutorial dazu anzuschauen](https://www.rabbitmq.com/tutorials/tutorial-five-python.html)

Die Message sind einfach die Daten die bei dem Event übertragen werden.
Es kann ein ganz normaler String oder auch ein json String sein.
 
 `python sender.py [Put Routing Key here] [Your Message here]`

 Extras
 ---
 Falls es euch interessiert oder hilft, könnt ihr unter http://localhost:15672 (solange der rabbitmq Server läuft) auf des Managemente Interface zugreifen.

Username: guest
<details> 
  <summary>Passwort: </summary>
   guest
</details>