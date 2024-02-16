const { adminSchema } = require("../models");

const addAdmin = (body) => {
  return adminSchema.create(body);
};
const getAdminByEmail = (email) => {
  return adminSchema.findOne(email);
};
const deleteAdmin = (id, body) => {
  return adminSchema.findOne(id, body);
};

module.exports = { addAdmin, getAdminByEmail, deleteAdmin };
