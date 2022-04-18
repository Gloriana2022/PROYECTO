const express = require("express");
const router = express.Router();
const UserModel = require("../models/user");
const userController = require("../controller/userController");

//Autenticación para el uso del API
const auth = require("../middleware/auth");
const {permit}  = require("../middleware/authorization");


//ruta para obtener todos las usuarios de la base de datos 
router.get("/", auth, permit("admin"), userController.get);
router.get("/:id", auth,userController.getById);
router.post("/", auth,userController.create);
router.delete("/:id", auth,userController.delete);
router.put("/:id",auth, userController.update);

//
//
router.post("/signup", userController.signup);
router.post("/signin", userController.signin);

module.exports = router;