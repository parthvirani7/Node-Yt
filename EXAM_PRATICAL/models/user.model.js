const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  pofession: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role:{
    type:String,
    enums: ["user", "admin"],
    default: "user",
  }
});

const user = mongoose.model("userSchema", userSchema);
module.exports = user;
