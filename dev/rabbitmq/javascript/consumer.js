let amqp = require("amqplib/callback_api");

let connection;

amqp.connect("amqp://127.0.0.1:5672", function(error0, connection) {

    if(error0) throw error0;

    //Erzeugen eines neuen Channels innerhalb der RabbitMQ-Verbindung
    //Channel werden verwendet um nicht immer neue TCP/IP Verbindune aufbauen zu müssen.
    connection.createChannel(function(error1, channel) { 
        
        //Wenn ein Fehler auftritt, wird dieser ausgegeben
        if(error1) throw error1;

        //Erzeugen einer exklusiven Queue. Sie erhält einen zufälligen Namen, da leerer String als name angegeben.
        //Eine eklusive Queue wird nach dem Beenden des Programms automatisch gelöscht.
        channel.assertQueue("", { exclusive: true }, (error2, queueInstance) => {

            if(error2) throw error2;

            console.log("Created temporary/exclusive queue: " + queueInstance.queue);

            //Binden der Queue an den Exchange
            //Der Exchange wird mit dem RoutingKey "info" verbunden.
            channel.bindQueue(queueInstance.queue, "logs", "log.info");
            channel.bindQueue(queueInstance.queue, "logs", "log.warning");
            channel.bindQueue(queueInstance.queue, "logs", "log.error");

            channel.consume(queueInstance.queue, function(msg) {
                console.log(`Received: [${msg.fields.routingKey}] ${msg.content.toString()}`);
            }, { noAck: true });
        });
    });
});

process.on("SIGINT", () => {
    if(connection) connection.close();
    process.exit(0);
});