const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
};
//pass options to cors directly
app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Result from form
app.post("/register", cors(), (req, res) =>{
    console.log(req.body);
    res.end();
});

app.listen(4000);
