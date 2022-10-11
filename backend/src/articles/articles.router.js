const express = require("express");
const Article = require("./articles.model");

const app = express();

app.get("/", (req, res) => {
  res.send("Here are some posts");
});

module.exports = app;
