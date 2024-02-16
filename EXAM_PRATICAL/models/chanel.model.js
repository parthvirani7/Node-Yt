const mongoose = require("mongoose");

const chanelSchema = new mongoose.Schema({
  chanelName: {
    type: String,
  },
  ownerName: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userSchema",
  },
  chanelType: {
    type: String,
  },
  description: {
    type: String,
  },
  subscribers: {
    type: String,
  },
});
const chanel = mongoose.model("chanelSchema", chanelSchema);

module.exports = chanel;
