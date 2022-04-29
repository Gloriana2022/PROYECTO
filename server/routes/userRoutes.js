const express = require("express");
const router = express.Router();
const UserModel = require("../models/user");
const userController = require("../controller/userController");

//Autenticación para el uso del API
const auth = require("../middleware/auth");
const {permit}  = require("../middleware/authorization");


//ruta para obtener todos las usuarios de la base de datos 
router.get("/", auth, permit("admin","user"), userController.get);
router.get("/:id", auth,permit("admin","user"),userController.getById);
router.post("/", auth,permit("admin","user"), userController.create);
router.delete("/:id",permit("admin","user"), auth,userController.delete);
router.put("/:id",auth,permit("admin","user"), userController.update);

//
//
router.post("/signup", userController.signup);
router.post("/signin", userController.signin);

module.exports = router;