const { userSchema } = require("../models");

const addUser = (body) => {
  return userSchema.create(body);
};

const getUser = () => {
  return userSchema.find();
};

const getUserByEmail = (email) => {
  return userSchema.findOne(email);
};
const deleteUser = (id) => {
  return userSchema.findByIdAndDelete(id);
};

const updateUser = (id, body) => {
  return userSchema.findByIdAndUpdate(id, body);
};
const findUser = (email) => {
  return userSchema.findOne({ email: email });
};

module.exports = {
  addUser,
  getUser,
  deleteUser,
  updateUser,
  getUserByEmail,
  findUser,
};
