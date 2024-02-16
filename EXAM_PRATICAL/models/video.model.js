const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  videoTitle: {
    type: String,
  },
  videoFile: {
    type: String,
  },
  description: {
    type: String,
  },
  chanel: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"chanelSchema"
  },
});

const video = mongoose.model("videoSchema", videoSchema);
module.exports = video;
