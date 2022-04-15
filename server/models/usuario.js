const {Schema, model} = require("mongoose");

//Se define el esquema de usuario
const UsuarioSchema = new Schema(
    {
       numUsuario:{
           type: Number,
           unique: true,
           required: true
       },
       nomUsuario: String,
       apellidos: String,
       correo: {
        type: String,
        unique: true,
        required: true,
      },
       fechaNacimiento: String,
       direccion: String,
       telefono: Number,
       tipoUsuario: String,
       ubicacion: String,
       rol: {
        type: String,
        default: "user",
        enum: ["user", "admin", "driver"]
      },
       contrasenna: {
        type: String,
        required: true,
      },
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
const UsuarioModel = model("Usuarios", UsuarioSchema);

//Hacemos visible el modelo con el module exports
module.exports = UsuarioModel;


//


//

//


//

//