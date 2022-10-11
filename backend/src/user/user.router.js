const express = require("express");
const User = require("./user.model");

const app = express();

app.get("/", async (req, res) => {
  try {
    let users = await User.find({}, { password: 0 });
    res.send(users);
  } catch (e) {
    res.send(e.message);
  }
});

app.post("/create", async (req, res) => {
  let data = req.body;

  try {
    let newUser = new User({ ...data });
    await newUser.save();

    res.send(newUser);
  } catch (e) {
    res.send(e.message);
  }
});

module.exports = app;
