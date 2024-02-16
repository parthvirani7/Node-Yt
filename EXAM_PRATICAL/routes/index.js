const express = require("express");
const route = express.Router();
const userRoutes = require("./user.route");
const videoRoutes = require("./video.route");

route.use("/user", userRoutes);
route.use("/video", videoRoutes);

module.exports = route;
