const { adminService } = require("../services");
const getAdmin = async (req, res) => {
  const body = req.body;

  console.log(req.body);

  const admin = await adminService.addAdmin(body);
  res.status(200).json({
    message: "user get success",
    data: admin,
  });
};
const addAdmin = (req, res) => {
  try {
    const body = req.body;

    const Admin = adminService.addAdmin(body);

    res.status(201).json({
      message: "Admin Created Success",
      Admin,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "somethig went wrong",
    });
  }
};

const deleteAdmin = async (req, res) => {
  try {
    console.log(req.params);
    const id = req.params.id;

    const admin = await adminService.deleteAdmin(id);
    if (!admin) {
      throw new Error("something went wrong");
    }

    res.status(200).json({
      message: "admin delete success",
      data: admin,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

const loginAdmin = async (req, res) => {
  const body = req.body;
  const email = req.body.email;
  const password = req.body.password;

  const findAdmin = await adminService.findAdmin(email);

  console.log(findAdmin);

  if (!findAdmin) {
    res.status(500).json({
      message: "Admin not found",
    });
  } else {
    if (password === findAdmin.password) {
      let newData = {
        _id: findAdmin._id,
        email: findAdmin.email,
        role: findAdmin.role,
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

module.exports = { addAdmin, deleteAdmin, loginAdmin, getAdmin };
