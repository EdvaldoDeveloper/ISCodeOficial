const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/dbConnection');

//Database

connection
    .authenticate()
    .then(() => {
        console.log('Conexão feita com banco de dados!');
    })
    .catch((msgErro) => {
        console.log(msgErro);
    })

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('./app/public'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

module.exports = app;