const checkAuth = require('../back-end-1/Middleware/checkAuth.middleware');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());


app.post('/multiple', checkAuth, (req, res) => {
    const payload = req.body;

    if (!payload.a) return res.status(422).send("Unsupported data format");
    if (!payload.b) return res.status(422).send("Unsupported data format");
  
    const result = {
      sum: payload.a * payload.b,
    };
  
    res.status(200).json(result);
  });

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});