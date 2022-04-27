//Express para agregar las rutas
const express = require("express");
const router = express.Router();



//Autenticación para el uso del API
const auth = require("../middleware/auth");
const {permit}  = require("../middleware/authorization");

//Factura controller para los métodos definidos
const estadoController = require("../controller/estadoController");

//Definición de rutas para cada uno de los verbos para las facturas


router.get("/", auth, permit("admin"),estadoController.get);

router.get("/:id", auth,permit("admin"), estadoController.getById);

router.post("/", auth,permit("admin"), estadoController.create);

router.delete("/:id", auth,permit("admin"), estadoController.delete);

router.put("/:id", auth,permit("admin"), estadoController.update);

module.exports = router;