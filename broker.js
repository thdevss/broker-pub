const mqtt = require('mqtt')
require('dotenv').config();

const clientId = `mqtt_${Math.random().toString(16).slice(3)}`

const connectUrl = `mqtt://${process.env.MQTT_SERVER}:${process.env.MQTT_PORT}`

const broker = mqtt.connect(connectUrl, {
    clientId,
    clean: true,
    connectTimeout: 4000,
    username: process.env.MQTT_USER,
    password: process.env.MQTT_PASSWORD,
    reconnectPeriod: 1000,
})
broker.on('connect', () => {
    console.log(new Date(), 'Connected')
})


module.exports = broker