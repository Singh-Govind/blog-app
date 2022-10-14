const express = require("express");
const User = require("./user.model");
const jwt = require("jsonwebtoken");

const app = express();

app.get("/", async (req, res) => {
  try {
    let users = await User.find({}, { password: 0 });
    res.send(users);
  } catch (e) {
    res.send(e.message);
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email, password });
    if (user) {
      let token = jwt.sign(
        { id: user._id, email: user.email, expiresIn: "1 hour" },
        "SECRET200"
      );
      let refreshToken = jwt.sign(
        { email: user.email, expiresIn: "7 days" },
        "REFRESHSECRET200"
      );
      return res.send({ token: token, refreshToken: refreshToken });
    }
  } catch (e) {
    res.status(401).send("Invalid Creds");
  }
  res.status(401).send("Invalid Creds");
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
