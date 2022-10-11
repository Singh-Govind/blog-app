const express = require("express");
const User = require("./user.model");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome User");
});

module.exports = app;
