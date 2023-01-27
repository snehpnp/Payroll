"use strict";
require('./app/utils/mongooseConnecter.util')
const express = require("express");
const app = express();
const cors = require('cors');
app.use(cors())
require('dotenv').config();

app.get("/", (req, res) => res.send("Welcome every one...."));

const bodyparser = require('body-parser');
app.use(bodyparser.json());
// Routes Or API's

app.use("/emp", require("./app/routes/Employ/Employ.route"));

const port = process.env.PORT;

// Server start
app.listen(port, () =>
  console.log(`Server is running on http://0.0.0.0:${port}`)
);
