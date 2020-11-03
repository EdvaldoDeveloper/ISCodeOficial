const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/dbConnection');
const session = require('express-session');
const flash = require('express-flash');
const cookieParser = require('cookie-parser');

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
app.use(cookieParser("fhuerhif"))
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))

app.use(flash());

module.exports = app;