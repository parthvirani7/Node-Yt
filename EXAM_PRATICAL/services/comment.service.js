const { commentSchema } = require("../models");

const addcomment = (body) => {
  return commentSchema.create(body);
};

const getcomment = () => {
  return commentSchema
    .find()
    .populate("subscriberSchema", { userName: 1 })
    .populate("videoSchema", { videoTitle: 1 });
};

const deletecomment = (id) => {
  return commentSchema.findByIdAndDelete(id);
};
const updatecomment = (id) => {
  return commentSchema.findByIdAndDelete(id);
};
module.exports = {
  addcomment,
  getcomment,
  deletecomment,
  updatecomment,
};
