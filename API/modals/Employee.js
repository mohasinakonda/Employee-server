const mongoose = require("mongoose");
const { Schema } = mongoose;

const employeeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  joiningDate: {
    type: String,
    require: true,
  },
  photo: {
    type: String,
  },
});

module.exports = mongoose.model("Employee", employeeSchema);
