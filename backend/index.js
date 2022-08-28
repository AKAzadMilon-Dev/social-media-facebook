const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
const {readdirSync} = require('fs');

dotenv.config();

app.use(cors());

readdirSync('./routes').map((fileName) => app.use('/', require('./routes/'+fileName)))

const port = process.env.PORT || 8000;

app.listen(port, ()=>{
    console.log(`Running on port ${port}`);
});