let amqp = require("amqplib/callback_api");

let conn;

amqp.connect("amqp://user:pass@127.0.0.1:5672", function(error0, connection) {

    if(error0) throw error0;

    conn = connection;

    connection.createChannel({}, function(error1, channel) { //Erzeugen eines neuen Channels innerhalb der RabbitMQ-Verbindung
        
        //Wenn ein Fehler auftritt, wird dieser ausgegeben
        if(error1) throw error1;

        //Channel wurde erfolgreich erstellt:

        //Erzeugen eines Exchanges/Verteiler
        //Type = topic: Nachrichten werden an eine Queue weitergeleitet, die zu diesem RoutingKey passen.
        channel.assertExchange("logs", "topic", {durable: false}); 

        let interval = setInterval(() => {
            let rnd =  Math.floor(Math.random() * 3);

            let routingKey = "";

            if(rnd == 0) routingKey = "log.info";
            if(rnd == 1) routingKey = "log.warning";
            if(rnd == 2) routingKey = "log.error";

            let msg = "Cooler Log: " + rnd;

            //Senden einer Nachricht mit bestimmten RoutingKey an den Exchange
            channel.publish("logs", routingKey, Buffer.from(msg)); 

            console.log("Sent: " + msg);
        }, 500);

    });
});

process.on("SIGINT", () => {
    if(connection) connection.close();
    process.exit(0);
});