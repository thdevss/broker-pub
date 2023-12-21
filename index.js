const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;
const broker = require('./broker')
app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
    const jsonData = req.body;
    let topic = 'pair'
    if (req.query.ref === 'crypto') {
        topic = 'crypto'
    }
    broker.publish(topic, JSON.stringify(jsonData));
    // TODO:: save to db
    res.json({ 
        message: 'published',
        data: jsonData
    });
});
  
app.listen(port, () => {
    console.log(`Start ::${port}`);
});