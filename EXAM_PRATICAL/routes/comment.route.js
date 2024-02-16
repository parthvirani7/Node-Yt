const express = require("express");
const validate = require("../middlewares/validate");
const route = express.Router();
const { commentValidation } = require("../validations");
const { commentController } = require("../controllers");

route.get(
  "/get",
  authanticate,
  restrict(["user"]),
  commentController.getComment
);
route.post(
  "/create",
  validate(commentValidation.addComment),
  commentController.addComment
);
route.delete("/remove/:id", commentController.deleteComment);

module.exports = route;
