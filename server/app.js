const dotEnv = require("dotenv");
const express = require("express");
const cors = require("cors");
const logger = require("morgan");
//const chalk = require("chalk");
const mongoose = require("mongoose");
const passport = require("passport");

const app = express();

//inclusion de las Rutas creadas en el backend
const choferRoutes = require("./routes/choferRoutes");
const solicitudVehiculoRoutes = require("./routes/solicitudVehiculoRoutes");
const usuarioRoutes = require("./routes/usuarioRoutes");
const vehiculoRoutes = require("./routes/vehiculoRoutes");
const estadoRoutes = require("./routes/estadoRoute");
//Variable de entorno
dotEnv.config();

//Configuracion de la conexion con mongo 
const mongoDB = process.env.MONGO_DATABASE;

//Nos conectamos a la base de datos
mongoose.connect(mongoDB);
const db = mongoose.connection;

//Se muestra en consola algun error en la base de datos al momento
db.on("error", console.error.bind(console,"MongoDB error de conexion"));

//Se hace la conexion
db.once("open",() => console.log("Conexion exitosa a la DB" + mongoDB));

//Variable para almacenar el puerto a utilizar en express
const port  = process.env.PORT || 4000;

//Aplicacion cors
app.use(cors());
app.use(logger("dev"));

//Se define como se van a hacer los req y los res json
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true
    })
);

//Se define la ruta facura
app.use("/chofer/", choferRoutes);
app.use("/solicitudVehiculo/", solicitudVehiculoRoutes);
app.use("/usuario/", usuarioRoutes);
app.use("/vehiculo/", vehiculoRoutes);
app.use("/estado/", estadoRoutes);

//Se inicia el servicio express para publicar los servicios rest
app.listen(port,()=>{
    console.log("La aplicacion esta corriendo en http://localhost:"+port);
    console.log("Para terminar la ejecion es Ctrl+C");
}) 