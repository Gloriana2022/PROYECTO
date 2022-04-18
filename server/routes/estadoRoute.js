//Express para agregar las rutas
const express = require("express");
const router = express.Router();
//const auth = require("../middleware/auth");
//const {permit}  = require("../middleware/authorization");

//Factura controller para los métodos definidos
const estadoController = require("../controller/estadoController");

//Definición de rutas para cada uno de los verbos para las facturas


router.get("/",/*auth, permit("admin","driver"),*/ estadoController.get);

router.get("/:id",/*auth,*/ estadoController.getById);

router.post("/",/*auth,*/ estadoController.create);

router.delete("/:id",/*auth,*/ estadoController.delete);

router.put("/:id",/*auth,*/ estadoController.update);

module.exports = router;