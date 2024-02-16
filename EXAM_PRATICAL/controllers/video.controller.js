const { videoServices, videoService } = require("../services");

const addVideo = async (req, res) => {
  console.log(req.file);
  console.log(req.body);
  const body = {
    videoTitle: req.body.videoTitle,
    videoFile: req.file.originalname,
    description: req.body.description,
  };
  console.log(body);
  const video = await videoService.addvideo(body);

  res.status(200).json({
    message: "User create success",
    data: video,
  });
};
const getVideo = async (req, res) => {
  const video = await videoService.getvideo();
  res.status(200).json({
    message: "User get success",
    data: video,
  });
};
const deleteVideo = async (req, res) => {
  const video = await videoService.deleteVideo();

  res.status(200).json({
    message: "video deleted success",
  });
};

module.exports = { addVideo, getVideo, deleteVideo };
