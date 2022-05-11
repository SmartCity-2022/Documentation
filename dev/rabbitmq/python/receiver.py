import pika
import sys

connection = pika.BlockingConnection(
    pika.ConnectionParameters(host='localhost'))
channel = connection.channel()

channel.exchange_declare(exchange='microservice.eventbus', exchange_type='topic')

result = channel.queue_declare('', exclusive=True)
queue_name = result.method.queue

""" 
Der routing_key ist quasi der Kanal auf die der Empfänger hört.
in diesem Fall hört der Empfänger auf *.#
* ist ein Platzhalter, das bedeutet, dass der Empfänger auf alle Kanäle hört.
# bedeutet, dass es keine oder mehrere untergruppen gibt.
routing keys könnten wie folgt aussehen:
    bank
    bank.ueberweisung
    bank.ueberweisung.erfolgreich
    bank.ueberweisung.*
    bank.#.erfolgreich
    fahrzeugvermietung.vertrag.bestätigt
    a.b.c.d.e.f.g.h.i.j.k.l.m.n.o.p.q.r.s.t.u.v.w.x.y.z
"""
channel.queue_bind(
        exchange='microservice.eventbus', queue=queue_name, routing_key="*.#")

print(' [*] Waiting for Events. To exit press CTRL+C')


def callback(ch, method, properties, body):
    print(" ---Event received--- \n")
    print(f" [x] Routing Key: {method.routing_key}")
    print(f" [x] Message: {body}", "\n\n\n")


channel.basic_consume(
    queue=queue_name, on_message_callback=callback, auto_ack=True)

channel.start_consuming()