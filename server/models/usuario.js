/*
const {Schema, model} = require("mongoose");
const bcrypt = require('bcrypt-nodejs');

//Se define el esquema de usuario
const UsuarioSchema = new Schema({
    numUsuario:{
        type: Number,
        unique: true,
        required: true
    },
    nomUsuario: String,
    apellidos: String,
    username: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: "user",
        enum: ["user", "admin", "driver"]
    },
    fechaNacimiento: String,
    direccion: String,
    telefono: Number,
    tipoUsuario: String,
    ubicacion: String,
    estado: //Referencia con estado
    {
    type: Schema.Types.ObjectId,
    ref: "Estados",
    required: true
    },
    },
    {timestamps: true}// Fecha de creacion y modificacion
);

UsuarioSchema.pre('save', function (next) {
  var user = this;
  if (this.isModified('password') || this.isNew) {
      bcrypt.genSalt(10, function (err, salt) {
          if (err) {
              return next(err);
          }
          bcrypt.hash(user.password, salt, null, function (err, hash) {
              if (err) {
                  return next(err);
              }
              user.password = hash;
              next();
          });
      });
  } else {
      return next();
  }
});

UsuarioSchema.methods.comparePassword = async (passw, userPassw, cb) => {
  bcrypt.compare(passw, userPassw, function (err, isMatch) {
      if (err) {
          return cb(err);
      }
      cb(null, isMatch);
  });
};

//Creacion del modelo que van a estar relacionado a la coleccion de Facturas
const UsuarioModel = model("Usuarios", UsuarioSchema);

//Hacemos visible el modelo con el module exports
module.exports = UsuarioModel;

*/