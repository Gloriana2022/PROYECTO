const {Schema, model} = require("mongoose");

//Se define el esquema de solicitud
const SolicitudSchema = new Schema(
    {
       identificador:{
           type: Number,
           unique: true,
           required: true
       },
       tiempoLlegada: Number,
       tiempoDuracion: Number,
       costoServicio: Number,
       pagoLinea:String,
       puntoSalida: String,
       puntoLlegada:String,
       comentario: String,
       usuario: //Referencia con estado
      {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
      },
      vehiculo: //Referencia con estado
      {
        type: Schema.Types.ObjectId,
        ref: "Vehiculos",
        required: true
      },
      chofer: //Referencia con estado
      {
        type: Schema.Types.ObjectId,
        ref: "Choferes",
        required: true
      },
    },
        {timestamps: true}// Fecha de creacion y modificacion
);
//Creacion del modelo que van a estar relacionado a la coleccion de Solicitudes
const SolicitudModel = model("Solicitudes", SolicitudSchema);

//Hacemos visible el modelo con el module exports
module.exports = SolicitudModel;


