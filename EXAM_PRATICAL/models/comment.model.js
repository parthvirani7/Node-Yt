const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  subscriber: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"subscriberSchema"
  },
  video: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"videoSchema"
  },
  comment: {
    type: String,
  },
});

const comment = mongoose.model("commentSchema", commentSchema);
module.exports = comment;
