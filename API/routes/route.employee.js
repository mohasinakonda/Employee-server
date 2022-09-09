const { getAllUser } = require("../controllers/employee.controller");

const router = require("express").Router();
router.get("/", getAllUser);
module.exports = router;
