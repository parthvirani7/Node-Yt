const { subscriberSchema } = require("../models");

const addsubscriber = (body) => {
  return subscriberSchema.create(body);
};

const getsubscriber = () => {
  return subscriberSchema.find()
  .populate("chanelSchema", { chanelName: 1});
  
};

const deletesubscriber = (id) => {
  return subscriberSchema.findByIdAndDelete(id);
};
const updatesubscriber = (id) => {
  return subscriberSchema.findByIdAndDelete(id);
};
module.exports = {
  addsubscriber,
  getsubscriber,
  deletesubscriber,
  updatesubscriber,
};
