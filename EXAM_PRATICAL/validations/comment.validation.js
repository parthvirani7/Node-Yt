const Joi = require("joi");

const addComment = {
  body: Joi.object().keys({
    subscriber: Joi.string().required(),
    video: Joi.string,
    comment: Joi.string().required().trim(),
  }),
};
module.exports = {
  addComment,
};
