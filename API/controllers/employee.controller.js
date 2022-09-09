const Employee = require("../modals/Employee");
// get users
const getAllUser = async (req, res, next) => {
  const employees = await Employee.find();
  res.status(200).json(employees);
};
const getEmployeeByID = async (req, res, next) => {
  const id = req.params.id;
  const employee = await Employee.findById(id);
  res.status(200).json(employee);
};
// create users

const createEmployee = async (req, res, next) => {
  const data = req.body;
  const newEmployee = new Employee(data);
  try {
    const saveEmployee = await newEmployee.save();
    res.status(200).json(saveEmployee);
  } catch (err) {
    console.log(err);
  }
};

//update employee
const updateEmployee = async (req, res, next) => {
  const id = req.params.id;
  try {
    const update = await Employee.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(update);
  } catch (err) {
    console.log(err);
  }
};
module.exports = {
  getAllUser,
  createEmployee,
  getEmployeeByID,
  updateEmployee,
};
