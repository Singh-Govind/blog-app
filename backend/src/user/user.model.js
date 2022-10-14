const { model, Schema } = require("mongoose");

const userSchema = new Schema({
  name: { type: String },
  email: { type: String, required: true },
  password: { type: String, required: true },
  gender: { type: String, enum: ["Male", "Female"] },
  role: { type: String, enum: ["admin", "user"], default: "user" },
});

const User = model("user", userSchema);

module.exports = User;
