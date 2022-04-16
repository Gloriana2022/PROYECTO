//Se agrega el express y las rutas
const express = require("express")
const router = express.Router();

//Autenticación para el uso del API
//const auth = require("../middleware/auth");
//const {permit}  = require("../middleware/authorization");

//Se incluye todos lo definido en el controller 
const choferController = require("../controller/chofercontroller");
//Definicion de las rutas de chofer
//ruta para obtener todas las chofers de la base de datos 
router.get("/", /*auth,permit("user"),*/ choferController.get);
router.get("/:id",/*auth,*/ choferController.getById);
router.post("/", /*auth,*/ choferController.create);
router.delete("/:id",/*auth,*/ choferController.delete);
router.put("/:id", /*auth,*/ choferController.update);
//
//
module.exports = router;
//