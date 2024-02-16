require("dotenv").config();
const http = require("http");
const route = require("./routes");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const connectDB = require("./db/dbConnect");
const app = express();

// cookie
app.use(cookieParser());

// body parser

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//routes
app.use("/v1", route);

//database connection
connectDB();

// ejs
app.set("view engine", "ejs");

app.set("/userlogin", (req, res) => {
  res.render("./login.ejs");
});

// serser
http.createServer(app).listen(process.env.PORT, () => {
  console.log("server started successs on port 2024");
});
