const {Schema, model} = require("mongoose");

//Se define el esquema de vehiculo
const VehiculoSchema = new Schema(
    {
       identificador:{
           type: Number,
           unique: true,
           required: true
       },
       anno: Number,
       Modelo: String,
       placa: String, 
       color: String, 
       puntuacion: String,
       ubicacionActual: String,
       estado:String,
       chofer: //Referencia con estado
       {
         type: Schema.Types.ObjectId,
         ref: "Choferes",
         required: true
       },
    },
        {timestamps: true}// Fecha de creacion y modificacion
);
//Creacion del modelo que van a estar relacionado a la coleccion de Vehiculos
const VehiculoModel = model("Vehiculos", VehiculoSchema);

//Hacemos visible el modelo con el module exports
module.exports = VehiculoModel;


//


//

//


//

//