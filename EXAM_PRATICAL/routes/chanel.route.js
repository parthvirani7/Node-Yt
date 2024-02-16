const express = require("express");
const validate = require("../middlewares/validate");
const { authanticate, restrict } = require("../middlewares/auth");

const route = express.Router();
const { chanelValidation } = require("../validations");
const { chanelController } = require("../controllers");

route.get(
  "/get",
  authanticate,
  restrict(["admin"]),
  chanelController.getchanel
);
route.post(
  "/create",
  validate(chanelValidation.addchanel),
  chanelController.addchanel
);
route.delete("/remove/:id", chanelController.deletechanel);

module.exports = route;
