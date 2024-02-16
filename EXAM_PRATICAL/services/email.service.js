const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "viraniparth6@gmail.com",
    pass: "zbwadukgatpmnvnl",
  },
});

// sendmail
const send_Mail = async (to, data, subject) => {
  let maildata = `welcome to yt`

  let mySub = `greeting`;
  try {
    return transporter.sendMail({
      from: "<viraniparth6@gmail. com>",
      to,
      subject: mySub,
      text: maildata,
    });
  } catch (error) {
    return false;
  }
};

module.exports = {
  send_Mail,
};

// divyesh gmail id
// divkakadiyarnw@gmail.com
