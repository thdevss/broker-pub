const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;
const broker = require('./broker')
app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
    const jsonData = req.body;
    if (req.query.ref === 'crypto') {
        broker.publish('crypto', JSON.stringify(jsonData));
    } else {
        broker.publish('pair', JSON.stringify(jsonData));
    }
    res.json({ 
        message: 'published',
        data: jsonData
    });
});
  
app.listen(port, () => {
    console.log(`Start ::${port}`);
});