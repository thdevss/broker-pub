const mqtt = require('mqtt')
require('dotenv').config();

const broker = mqtt.connect({
    host: process.env.MQTT_SERVER,
    port: process.env.MQTT_PORT,
    username: process.env.MQTT_USER,
    password: process.env.MQTT_PASSWORD
});

broker.on('connect', function () {
    console.log("MQTT Connect");
});

module.exports = broker