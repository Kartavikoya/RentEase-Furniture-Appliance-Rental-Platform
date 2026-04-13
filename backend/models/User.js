const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  token: String
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);