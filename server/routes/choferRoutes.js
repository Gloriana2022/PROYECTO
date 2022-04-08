//Se agrega el express y las rutas
const express = require("express")
const router = express.Router();

//Se incluye todos lo definido en el controller 
const choferController = require("../controller/chofercontroller");
//Definicion de las rutas de chofer
//ruta para obtener todas las chofers de la base de datos 
router.get("/", choferController.get);
router.get("/:id", choferController.getById);
router.post("/", choferController.create);
router.delete("/:id", choferController.delete);
router.put("/:id", choferController.update);
//
//
module.exports = router;
//