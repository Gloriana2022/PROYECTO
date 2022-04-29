//Se agrega el express y las rutas
const express = require("express")
const router = express.Router();

//Autenticación para el uso del API
const auth = require("../middleware/auth");
const {permit}  = require("../middleware/authorization");

//Se incluye todos lo definido en el controller 
const choferController = require("../controller/chofercontroller");
//Definicion de las rutas de chofer
//ruta para obtener todas las chofers de la base de datos 
router.get("/", auth,permit("admin","driver"), choferController.get);
router.get("/:id",auth,permit("admin","driver"),choferController.getById);
router.post("/", auth, permit("admin","driver"), choferController.create);
router.delete("/:id", permit("admin","driver"),choferController.delete);
router.put("/:id", auth,permit("admin","driver"), choferController.update);
//
//
module.exports = router;
//