const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("./user.model");
const OtpModel = require("./otp.model");

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

app.post("/reset-password/getotp", async (req, res) => {
  const { email } = req.body;
  let otp = otpGenerator.generate(6, {
    upperCaseAlphabets: false,
    specialChars: false,
  });

  transporter
    .sendMail({
      to: email,
      from: "b@b.com",
      subject: "reset-password OTP",
      text: `Your password reset request is successfull, OTP: ${otp}`,
    })
    .then(() => console.log("Email sent"));

  const otpDb = await OtpModel.create({ otp: otp, email: email });

  res.send(otp);
});

app.get("/github/callback", (req, res) => {
  // console.log(req.query.code)
  res.send("signin with github success");
});

app.post("/reset-password/reset", async (req, res) => {
  const { email, newPassword, otp } = req.body;
  const testOtp = await OtpModel.findOne({ email, otp });
  if (testOtp) {
    const updatePass = await User.findOneAndUpdate(
      { email },
      { password: newPassword }
    );
    return res.send("Password updated");
  } else {
    return res.status(401).send("INVALID OTP");
  }
});

module.exports = app;
