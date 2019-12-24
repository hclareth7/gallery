const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv/config');

const app = express();


//ROUTES
app.use(cors());
app.use(bodyParser.json());
const photoRoute = require('./routes/photos')
app.use('/photos', photoRoute);

// DATABASE CONNECTION
mongoose.connect(
    process.env.DB_CONNECTION,{ useNewUrlParser: true , useUnifiedTopology: true},()=> 
    console.log('DB gallery connected!!') 
);

app.listen(3000)