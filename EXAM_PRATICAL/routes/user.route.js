const express = require("express");
const validate = require("../middlewares/validate");
const route = express.Router();
const { userValidation } = require("../validations");
const { userController } = require("../controllers");

route.get("/get", userController.getUser);
route.post(
  "/register",
  validate(userValidation.addUser),
  userController.addUser
);
route.post("/login", userController.loginUser);

module.exports = route;
