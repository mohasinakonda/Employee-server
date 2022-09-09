const express = require("express");
const { default: mongoose } = require("mongoose");
const cors = require("cors");
const userRoute = require("./API/routes/route.employee");
const errorHandler = require("./API/utils/errorHandle");

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
app.use(express.json());
app.use(cors());
app.get("/", (_req, res) => {
  res.json({ massage: "success" });
});
app.use("/api/users", userRoute);

app.use((error, _req, res, next) => {
  const errorStatus = error.status || 500;
  const errorMessage = error.message || "something went wrong";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
  });
});
app.listen(port, () => {
  connect();
  console.log("server is running on port", port);
});
