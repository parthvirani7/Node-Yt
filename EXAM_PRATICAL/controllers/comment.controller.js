const { commentService } = require("../services");

const addComment = async (req, res) => {
  try {
    const body = req.body;
    console.log(body);

    const comment = await commentService.addComment(body);
    if (comment) {
      res.status(201).json({
        message: "comment Created success",
        data: comment,
      });
    }
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// get comment
const getComment = async (req, res) => {
  const body = req.body;

  console.log(req.body);

  const comment = await commentService.addComment(body);
  res.status(200).json({
    message: "comment get success",
    data: comment,
  });
};

// delete comment
const deleteComment = async (req, res) => {
  const body = req.body;
  const id = req.params.id;

  const comment = await commentService.deleteComment(id);

  res.status(200).json({
    message: "message deleted success",
    comment,
  });
};

module.exports = { addComment, getComment, deleteComment };
