const express = require("express");
const { videoController } = require("../controllers");
const validate = require("../middlewares/validate");
const { videoValidation } = require("../validations");
const {authanticate ,restrict} = require("../middlewares/auth")
const { upload } = require("../middlewares/multer");
const route = express.Router();

// route.post("/add",upload.single("profilePic"),videoController.addvideo);

route.post(
  "/add",
  upload.single("videoFile"),
  authanticate,
  validate(videoValidation.addVideo),
  videoController.addVideo
);

route.get("/get", videoController.getVideo);

route.delete("/delete",videoController.deleteVideo)

module.exports = route;
