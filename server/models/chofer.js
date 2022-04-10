const {Schema, model} = require("mongoose");

//Se define el esquema de chofer
const ChoferSchema = new Schema(
    {
       cedula:{
           type: Number,
           unique: true,
           required: true
       },
       tipoLicencia: String,
       fechaNacimiento: String,
       fechaVencimientoLicencia: String,
       choferActual: String,
       estado: //Referencia con estado
      {
        type: Schema.Types.ObjectId,
        ref: "Estados",
        required: true
      },
    },
        {timestamps: true}// Fecha de creacion y modificacion
);
//Creacion del modelo que van a estar relacionado a la coleccion de Facturas
const ChoferModel = model("Choferes", ChoferSchema);

//Hacemos visible el modelo con el module exports
module.exports = ChoferModel;


//


//

//


//

//