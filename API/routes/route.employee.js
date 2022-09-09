const {
  getAllUser,
  createEmployee,
  getEmployeeByID,
  updateEmployee,
  deleteEmployee,
} = require("../controllers/employee.controller");

const router = require("express").Router();
// get all employees
router.get("/", getAllUser);
// get employee by id
router.get("/:id", getEmployeeByID);
// create users
router.post("/", createEmployee);
// update employee
router.put("/:id", updateEmployee);
// delete employee
router.delete("/:id", deleteEmployee);

module.exports = router;
