const mongoose = require("mongoose");

const subscriberSchema = new mongoose.Schema({
  userName: {
    type: String,
  },
  emailId: {
    type: String,
  },
  chanel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "chanelSchema",
  },
});

const subscriber = mongoose.model("subscriberSchema", subscriberSchema);
module.exports = subscriber;
