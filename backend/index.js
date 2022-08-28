const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const app = express();

app.use(cors());

app.get('/', function (req, res) {
  res.send('Hello World')
});

const port = process.env.PORT || 8000;

app.listen(port, ()=>{
    console.log(`Running on port ${port}`);
});