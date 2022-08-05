const mongoose = require("mongoose");
const usuarioSchema = mongoose.Schema({
  username:String,
  password:String,
  email:String,
  victorias: {
    type:Number,
    default:0
  },
  derrotas: {
    type:Number,
    default:0
  },
  nivel: {
    type: Number,
    default:1
  },
  experiencia: {
    type:Number,
    default:0
  }
});
const Usuario = mongoose.model("Usuario", usuarioSchema);
module.exports = Usuario;