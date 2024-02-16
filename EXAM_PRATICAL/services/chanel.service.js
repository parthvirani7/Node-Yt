const { chanelSchema } = require("../models");

const addchanel = (body) => {
  return chanelSchema.create(body);
};

const getchanel = () => {
  return chanelSchema.find()
  .populate("userSchema", { userName: 1, email: 1 });
};

const deletechanel = (id) => {
  return chanelSchema.findByIdAndDelete(id);
};
const updatechanel = (id,body) => {
  return chanelSchema.findByIdAndDelete(id,body);
};
module.exports = {
  addchanel,
  getchanel,
  deletechanel,
  updatechanel,
};
