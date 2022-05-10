"use strict";

const express = require("express");
const fs = require("fs");
const cors = require("cors");
const path = require("path");
const router = express.Router();
const ctrl = require("./home.ctrl");
const { append } = require("express/lib/response");

const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.json())
app.use(cors())


router.get("/", ctrl.output.todolist); 
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);

router.post("/login", ctrl.process.login);
router.post("/register", ctrl.process.register);


module.exports = router;

app.use('/api/todolist',require('./routes/todolistRouter'));