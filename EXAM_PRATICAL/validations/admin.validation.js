const Joi = require("joi");

const addAdmin = {
  body: Joi.object().keys({
    adminName: Joi.string().required().trim(),
    userName: Joi.string().required(),
    pssword: Joi.string().required(),
  }),
};
module.exports = {
  addAdmin,
};
