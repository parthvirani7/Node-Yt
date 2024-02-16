const { chanelService } = require("../services");

const addchanel = async (req, res) => {
  try {
    const body = req.body;
    console.log(body);

    const chanel = await chanelService.addChanel(body);
    if (chanel) {
      res.status(201).json({
        message: "chanel Created success",
        data: chanel,
      });
    }
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// get chanel
const getchanel = async (req, res) => {
  const body = req.body;

  console.log(req.body);

  const chanel = await chanelService.addchanel(body);
  res.status(200).json({
    message: "chanel get success",
    data: chanel,
  });
};

// delete chanel
const deletechanel = async (req, res) => {
  const body = req.body;
  const id = req.params.id;

  const chanel = await chanelService.deletechanel(id);

  res.status(200).json({
    message: "message deleted success",
    chanel,
  });
};

module.exports = { addchanel, getchanel, deletechanel };
