const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const moment = require("moment");
const path = require("path");

const app = express();

//     Loaded: loaded (/lib/systemd/system/mongod.service; enabled; vendor preset: enabled)
// connect to mongoose
mongoose.connect("mongodb://localhost/bookstore");
var db = mongoose.connection;

//body parser
//app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//static folder
app.use(express.static(path.join(__dirname, "public")));

//api
app.use("/api", require("./api/bookstore"));

//listen to port
const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) => {
  if (err) {
    throw err;
  } else {
    console.log("server started");
  }
});
