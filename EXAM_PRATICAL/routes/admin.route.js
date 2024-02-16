const express = require("express");
const validate = require("../middlewares/validate");
const route = express.Router();
const { adminValidation } = require("../validations");
const { adminController } = require("../controllers");

route.get("/get", adminController.getAdmin);
route.post(
  "/register",
  validate(adminValidation.addAdmin),
  adminController.addAdmin
);
route.post("/login", adminController.loginAdmin);

module.exports = route;
