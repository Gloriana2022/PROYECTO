const express = require("express");
const router = express.Router();
const UserModel = require("../models/user");
const userController = require("../controller/userController");

//ruta para obtener todos las usuarios de la base de datos 
router.get("/", userController.get);
router.get("/:id", userController.getById);
router.post("/", userController.create);
router.delete("/:id", userController.delete);
router.put("/:id", userController.update);

//
//
router.post("/signup", userController.signup);
router.post("/signin", userController.signin);

module.exports = router;