const { model, Schema } = require("mongoose");

const userSchema = new Schema({
  name: { type: String, default: "Anonymus" },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: ["admin", "user"],
});

const User = model("user", userSchema);

module.exports = User;
