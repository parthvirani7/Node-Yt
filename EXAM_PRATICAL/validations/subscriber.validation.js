const Joi = require("joi");

const addSubscriber = {
  body: Joi.object().keys({
    userName: Joi.string().required(),
    emailId: Joi.string().required().trim(),
    chanel: Joi.string().required(),
  }),
};
module.exports = {
  addSubscriber,
};
