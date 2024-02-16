const jwt = require("jsonwebtoken");
const user = require("../models/user.model");
const secret = "thiskeyissecret";

const createToken = (data) => {
  const token = jwt.sign({ data }, secret);
  return token;
};

const verifyToken = (token) => {
  return jwt.verify(token, secret);
};


const authanticate = (req, res, next) => {
  const token = req.cookie.token;
  console.log(token);
  if (!token) {
    res.status(400).json({
      message: "not login",
    });
  }
  
  req.user = user;
  next();
};

// const restrict = ([...role]) => {
//   return (req, res, next) => {
//     const user = req.user;
//     console.log(user, "res");
//     if (role.includes(user.data.role)) {
//       next();
//     } else {
//       res.status(400).json({ message: "you are unauthorised" });
//     }
//   };
// };

module.exports = { createToken, verifyToken ,authanticate };
