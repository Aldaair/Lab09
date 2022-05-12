//Módulos
var express = require("express");
var app = express();
var bodyparser = require("body-parser");
var mongoose = require("mongoose");
var rutas = require("./backend/rutas");

//Config

mongoose.connect('mongodb://localhost/lab092');
app.use(express.static(__dirname+'/angular'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

//Carga

rutas.iniciar(__dirname);
rutas.principal(app);

//Inicia el servidor
app.listen(3000);
console.log("Listen on port 3000");