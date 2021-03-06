//Se agrega el express y las rutas
const express = require("express")
const router = express.Router();

const auth = require("../middleware/auth");
const {permit}  = require("../middleware/authorization");

//Se incluye todos lo definido en el controller 
const solicitudVehiculoController = require("../controller/solicitudVehiculo");
//Definicion de las rutas de solicitudVehiculo
//ruta para obtener todas las solicitudVehiculos de la base de datos 
router.get("/",auth,permit("admin"), solicitudVehiculoController.get);
router.get("/:id",auth, permit("admin"),  solicitudVehiculoController.getById);
router.post("/",auth, permit("admin"),  solicitudVehiculoController.create);
router.delete("/:id",auth, permit("admin"),  solicitudVehiculoController.delete);
router.put("/:id",auth, permit("admin"),  solicitudVehiculoController.update);
//
//
module.exports = router;
//