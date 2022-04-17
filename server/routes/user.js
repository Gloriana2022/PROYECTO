const express = require("express");
const router = express.Router();
const UserModel = require("../models/user");
const userController = require("../controller/userController");

router.post("/signup", userController.signup);

router.post("/signin", userController.signin);


module.exports = router;