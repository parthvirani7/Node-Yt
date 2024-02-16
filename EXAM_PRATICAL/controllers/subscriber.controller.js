const { subscriberService } = require("../services");

const addSubscriber = async (req, res) => {
  try {
    const body = req.body;
    console.log(body);
    const subscriber = await subscriberService.addSubscriber(body);
    if (subscriber) {
      res.status(201).json({
        message: "subscriber Created success",
        data: subscriber,
      });
    }
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// get subscriber
const getSubscriber = async (req, res) => {
  const body = req.body;

  console.log(req.body);

  const subscriber = await subscriberService.addSubscriber(body);
  res.status(200).json({
    message: "subscriber get success",
    data: subscriber,
  });
};

// delete subscriber
const deleteSubscriber = async (req, res) => {
  const body = req.body;
  const id = req.params.id;

  const subscriber = await subscriberService.deleteSubscriber(id);

  res.status(200).json({
    message: "message deleted success",
    subscriber,
  });
};

module.exports = { addSubscriber, getSubscriber, deleteSubscriber };
