const { videoSchema } = require("../models");

const addvideo = (body) => {
  return videoSchema.create(body);
};

const getvideo = () => {
  return videoSchema.find();
};
const deleteVideo = (id, body) => {
  return videoSchema.findByIdAndDelete(id, body);
};

module.exports = {
  addvideo,
  getvideo,
  deleteVideo,
};
