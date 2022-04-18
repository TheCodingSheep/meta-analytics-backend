const mongoose = require("mongoose");

const signupSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    requried: true,
  },



});


module.exports = mongoose.model("User", signupSchema);
