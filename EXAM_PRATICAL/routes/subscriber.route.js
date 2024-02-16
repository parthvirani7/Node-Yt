const express = require("express");
const validate = require("../middlewares/validate");
const route = express.Router();
const { subscriberValidation } = require("../validations");
const { subscriberController } = require("../controllers");

route.get(
  "/get",
  authanticate,
  restrict(["user"]),
  subscriberController.getSubscriber
);
route.post(
  "/create",
  validate(subscriberValidation.addSubscriber),
  subscriberController.addSubscriber
);
route.delete("/remove/:id", subscriberController.deleteSubscriber);

module.exports = route;
