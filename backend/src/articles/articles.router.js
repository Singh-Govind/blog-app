const express = require("express");
const Article = require("./articles.model");

const app = express();

app.get("/", async (req, res) => {
  try {
    let posts = await Article.find({});
    res.send(posts);
  } catch (e) {
    res.send(e.message);
  }
});

app.post("/create", async (req, res) => {
  let data = req.body;

  try {
    let newPost = new Article({ ...data });
    await newPost.save();
    res.send(newPost);
  } catch (e) {
    res.send(e.message);
  }
});

module.exports = app;
