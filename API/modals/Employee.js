const mongoose = require("mongoose");
const { Schema } = mongoose;

const employeeSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  age: {
    type: Number,
    require: true,
  },
  photo: {
    type: String,
  },
});

module.exports = mongoose.model("Employee", employeeSchema);
