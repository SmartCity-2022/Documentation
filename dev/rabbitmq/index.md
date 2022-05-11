# Rabbit MQ Testumgebung

## Docker Container starten
---
1. Installiert euch [Docker](https://docs.docker.com/get-docker/)

2. Führt in der Konsole diesen befehl aus:

```termnial
docker pull rabbitmq:3.9-management
```

3. Mit folgendem Befehl wird ein Container erstellt und gestartet:

```termnial
docker run -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3.9-management
```

## JavaScript

Verwendung von RabbitMQ mit JavaScript

### Dependencies

Um RabbitMQ in JavaScript zu verwenden verwenden wir das `amqplib`-Modul

```terminal
npm install amqplib
```

### Verbindung zu RabbitMQ herstellen

```javascript
let amqp = require('amqplib');

amqp.connect('amqp://<RabbitMQ-Host>:5672', function(error0, connection) {
    if(error0) throw error0;

    // Die Verbindung wurde erfolgreich hergestellt

});
```
Wenn ein Fehler auftritt, enthält `error0` den Fehler, welcher direkt mit `throw` geworfen werden kann.
In `connection` befindet sich bei erfolgreicher Verbindung die Verbindungs-Instanz.

### Erstellen eines Channels
In einer Verbindungs-Instanz erzeugen wir meherer Channel.
Channel sind die einzelnen Kanäle, in denen Nachrichten gesendet und empfangen werden können.

Es sollte bei Multithreading ein Channel pro Thread erzeugt werden.

```javascript
connection.createChannel(function(error1, channel) {
    if(error1) throw error1;

    // Der Channel wurde erfolgreich erstellt

});
```

### Erstellen einer Queue

Um von einem Exchange Nachrichten zu empfangen, müssen wir eine Queue erstellen.

```javascript
channel.assertQueue('', {durable: true, exclusive: true}, function(error2, queueInstance) {
    if(error2) throw error2;

    // Die Queue wurde erfolgreich erstellt

});
```
- `''`: Leerer Queue-Name um einen Namen zufällig generieren zu lassen. 
- `durable`: Legt fesst, dass die Queue einen neustart des Servers überlebt.
- `exclusive`: Die Queue ist exclusiv zu dieser Verbindung. Wird die Verbindung geschlossen, wird die Queue gelöscht.

### Binden einer Queue an einen Exchange

Bevor wir Nachrichten empfangen können, müssen wir unsere Queue mit einem Exchange verbinden.

```javascript
queue.bindQueue(queueInstance.queue, "<exchange Name>", "<Topic>");
```

- `queueInstance.queue`: Der Name der Queue
- `"<exchange Name>"`: Der Name des Exchange, **wird voraussichtlich Festgelegt.**
- `"<Topic>"`: Der Topic, welcher die Queue mit dem Exchange verbindet.
    - Ein Bespiel: `"service.bankportal.kontostand"`
    - Mit `"service.bankportal.*"` wird auf alle Nachrichten des Bankportals gehört.
    - Mit Wildcard-Platzhaltern kann man auf mehrere Topics hören.
        - `*` (Stern) kann durch *EIN* Wort ersetzt werden
        - `#` (Raute) kann durch null oder mehrere Worte ersetzt werden.

### Empfangen einer Nachricht

```javascript
queue.consume(queueInstance.queue, function(message) {
    console.log(`Nachricht erhalten: ${message.content.toString()}`);
}, { noAck: true });
```
- `queueInstance.queue`: Der Name der Queue
- `function(message)`: Die Funktion, welche aufgerufen wird, wenn eine Nachricht empfangen wird.
- `{ noAck: true }`: Die Nachricht müssen nicht bestätigt werden = AutoAcknowledgement.

### Senden von Nachrichten

Jetzt wissen wir wie wir Nachrichten empfangen können. Allerdings haben wir noch keine Nachrichten die empfangen werden können.

Nachrichten werden immer *direkt* an einen Exchange gesendet:

```javascript
channel.publish("<exchange Name>", "<Topic>", Buffer.from("<Nachricht>"));
```
### Implementation

- Producer: [producer.js](https://github.com/SmartCity-2022/Documentation/blob/master/dev/rabbitmq/javascript/producer.js)
- Consumer: [consumer.js](https://github.com/SmartCity-2022/Documentation/blob/master/dev/rabbitmq/javascript/consumer.js)

## Python

Verwendung von RabbitMQ mit Python

### Schritt 1.

Für die bereitgestellten Python programme wird das Packet **pika** gebraucht.

```termnial
pip install pika
```

Nun könnt ihr [receiver.py](https://github.com/SmartCity-2022/Documentation/blob/master/dev/rabbitmq/python/receiver.py) reciever.py starten. Dieses Programm hört auf alle eingehenden Events und gibt sie in der Konsole aus.

### Schritt 2.

 Zum manuellen senden eines Events, könnt ihr [sender.py](https://github.com/SmartCity-2022/Documentation/blob/master/dev/rabbitmq/python/sender.py) nutzen.
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

```termnial
python sender.py <RoutingKey> <Message>
```

### Extras

Falls es euch interessiert oder hilft, könnt ihr unter http://localhost:15672 (solange der rabbitmq Server läuft) auf des Managemente Interface zugreifen.

