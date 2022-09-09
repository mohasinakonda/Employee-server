const express = require("express");
const { default: mongoose } = require("mongoose");
require("dotenv").config();
const app = express();

const port = process.env.PORT || 8080;
const connect = async () => {
  try {
    await mongoose.connect(process.env.connect_url);
    console.log("db connected");
  } catch (err) {
    console.log(err);
  }
};

app.listen(port, () => {
  connect();
  console.log("server is running on port", port);
});
