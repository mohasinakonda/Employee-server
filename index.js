const express = require("express");
const { default: mongoose } = require("mongoose");
const userRoute = require("./API/routes/route.employee");
require("dotenv").config();
const app = express();

const port = process.env.PORT || 8080;
const connect = async () => {
  try {
    await mongoose.connect(process.env.connect_url);
  } catch (err) {
    throw err;
  }
};

app.use("/api/users", userRoute);
app.listen(port, () => {
  connect();
  console.log("server is running on port", port);
});
