"use strict";


const express = require('express'); 
const bodyParser = require("body-parser");
const app = express();              
const port = 3000;    
             

const router = require("./src/routes/home")


app.set("views", "./src/views");
app.set("view engine", "ejs");


app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use("/", router); 


module.exports = app;