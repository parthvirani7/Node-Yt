const Joi = require("joi");

const addVideo = {
  body: Joi.object().keys({
    videoTitle: Joi.string().required().trim(),
    videoFile: Joi.string,
    description: Joi.string().required().trim(),
  }),
};
module.exports = {
  addVideo,
};
