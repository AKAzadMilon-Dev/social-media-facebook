const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
const user = require('./routes/user.js')

dotenv.config();

app.use(cors());

app.use('/', user);

const port = process.env.PORT || 8000;

app.listen(port, ()=>{
    console.log(`Running on port ${port}`);
});