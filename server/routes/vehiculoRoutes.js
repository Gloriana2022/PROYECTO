//Se agrega el express y las rutas
const express = require("express")
const router = express.Router();

const auth = require("../middleware/auth");
const {permit}  = require("../middleware/authorization");

//Se incluye todos lo definido en el controller 
const vehiculoController = require("../controller/vehiculocontroller");
//Definicion de las rutas de vehiculo
//ruta para obtener todas las vehiculos de la base de datos 
router.get("/",/*auth,permit("driver", "admin"),*/ vehiculoController.get);
router.get("/:id",/*auth,*/ vehiculoController.getById);
router.post("/",/*auth,*/ vehiculoController.create);
router.delete("/:id",/*auth,*/ vehiculoController.delete);
router.put("/:id",/*auth,*/ vehiculoController.update);
//
//
module.exports = router;
//