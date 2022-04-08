//Se agrega el express y las rutas
const express = require("express")
const router = express.Router();

//Se incluye todos lo definido en el controller 
const vehiculoController = require("../controller/vehiculocontroller");
//Definicion de las rutas de vehiculo
//ruta para obtener todas las vehiculos de la base de datos 
router.get("/", vehiculoController.get);
router.get("/:id", vehiculoController.getById);
router.post("/", vehiculoController.create);
router.delete("/:id", vehiculoController.delete);
router.put("/:id", vehiculoController.update);
//
//
module.exports = router;
//