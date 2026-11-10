import mqtt from 'mqtt';

const client = mqtt.connect(
  process.env.NEXT_PUBLIC_MQTT_WS_URL || 'ws://localhost:9001'
);

client.on('connect', () => {
  console.log('MQTT connected (frontend)');
});

client.on('error', (err) => {
  console.error('MQTT error', err);
});

export default client;
