"use strict";

const { connect, connection } = require("mongoose");
require('dotenv').config();
const url =`mongodb+srv://${process.env.mongo_pass}:${process.env.mongo_pass}@cluster0.9bxysok.mongodb.net/?retryWrites=true&w=majority`
connect(url, (error) => {
  if (error) {
    console.log(error);
    return;
  }
  connection.useDb('sneh');
  console.log("Connected to MongoDB");
});
