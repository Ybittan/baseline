const Kafka = require('node-rdkafka');

class KafkaConfig {
  producer() {
    return Kafka.Producer.createWriteStream({
      'metadata.broker.list' : 'kafka:9092'
      }, 
      {}, {
          topic : 'battleship'
      });
  }

  consumer() {
    console.log('group ', process.env.KAFKA_GROUP)
    return new Kafka.KafkaConsumer({
        'group.id': process.env.KAFKA_GROUP,
        'metadata.broker.list': `kafka:9092`,
      }, {});
  }
}

module.exports = KafkaConfig;