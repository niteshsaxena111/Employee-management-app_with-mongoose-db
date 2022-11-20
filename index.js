require('./models/db');

const express = require('express');
const path = require('path');
const employeeController = require('./contorllers/employeeController');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');

var app = express();

app.use(bodyparser.urlencoded({extended:true}));
app.set('views',path.join(__dirname,'/views/'));
app.engine('hbs',exphbs({extname:'hbs',defaultLayout:'mainLayout',layoutsDir:__dirname+'/views/layouts/'}));
app.set('view engine','hbs');

app.listen(3000,()=>{console.log("Server Started at 3000");});

app.use('/employee',employeeController);