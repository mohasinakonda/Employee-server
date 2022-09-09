const Employee = require("../modals/Employee");
// get users
const getAllUser = async (_req, res, next) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (err) {
    next(err);
  }
};
const getEmployeeByID = async (req, res, next) => {
  const id = req.params.id;
  try {
    const employee = await Employee.findById(id);
    res.status(200).json(employee);
  } catch (err) {
    next(err);
  }
};
// create users

const createEmployee = async (req, res, next) => {
  const data = req.body;
  const newEmployee = new Employee(data);
  try {
    const saveEmployee = await newEmployee.save();
    res.status(200).json(saveEmployee);
  } catch (err) {
    next(err);
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
    next(err);
  }
};
// delete employee
const deleteEmployee = async (req, res, next) => {
  const id = req.params.id;
  try {
    await Employee.findByIdAndDelete(id);
    res.status(200).json("Employee deleted!");
  } catch (err) {
    next(err);
  }
};
module.exports = {
  getAllUser,
  createEmployee,
  getEmployeeByID,
  updateEmployee,
  deleteEmployee,
};
