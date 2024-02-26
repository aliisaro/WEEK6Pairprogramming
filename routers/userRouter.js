const express = require("express");
const userControllers = require("../controllers/userController");

const router = express.Router();
router.post("/register", userControllers.addUser);
router.post("/login", userControllers.loginUser);

module.exports = router;


