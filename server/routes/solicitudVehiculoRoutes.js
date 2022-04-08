//Se agrega el express y las rutas
const express = require("express")
const router = express.Router();

//Se incluye todos lo definido en el controller 
const solicitudVehiculoController = require("../controller/solicitudVehiculo");
//Definicion de las rutas de solicitudVehiculo
//ruta para obtener todas las solicitudVehiculos de la base de datos 
router.get("/", solicitudVehiculoController.get);
router.get("/:id", solicitudVehiculoController.getById);
router.post("/", solicitudVehiculoController.create);
router.delete("/:id", solicitudVehiculoController.delete);
router.put("/:id", solicitudVehiculoController.update);
//
//
module.exports = router;
//