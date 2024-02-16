const { verifyToken, createToken } = require("../middlewares/auth");
const { userService } = require("../services");

const addUser = async (req, res) => {
  try {
    const body = req.body;
    console.log(body);

    const userExist = await userService.getUserByEmail(body.email);

    if (userExist) {
      throw new Error("user already exist");
    }
    
    const user = await userService.addUser(body);
    if (user) {
      const email = await emailService(user.email);
      console.log("mail forwered ", email.envelope);
      
      res.status(201).json({
        message: "user Created success",
        data: user,
      });
    }
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// login
const loginUser = async (req, res) => {
  const body = req.body;
  const email = req.body.email;
  const password = req.body.password;

  const findUser = await userService.findUser(email);

  console.log(findUser);

  if (!findUser) {
    res.status(500).json({
      message: "user not found",
    });
  } else {
    if (password === findUser.password) {
      let newData = {
        _id: findUser._id,
        email: findUser.email,
        role: findUser.role,
      };

      const token = createToken(newData);
      res.cookie("token", token);
      res.status(200).json({
        message: "login success",
      });
    } else {
      res.status(500).json({
        message: "invalid password",
      });
    }
  }
};

// get user
const getUser = async (req, res) => {
  const body = req.body;

  console.log(req.body);

  const user = await userService.addUser(body);
  res.status(200).json({
    message: "user get success",
    data: user,
  });
};

module.exports = { addUser, loginUser, getUser };
