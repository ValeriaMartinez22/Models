const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const informacionExtraSchema = new Schema({
  nombre: String,
  valor: String
});

const automovilSchema = new Schema({
  id: { type: Number, required: true },
  id_agencia: { type: Number, required: true },
  marca: { type: String, required: true },
  modelo: { type: String, required: true },
  submarca: { type: String, required: true },
  año: { type: Number, required: true },
  color: { type: String, required: true },
  motor: { type: String, required: true },
  caballos_de_fuerza: { type: String, required: true },
  consumo_de_combustible_L_100_km: { type: String, required: true },
  transmision: { type: String },
  ciudad: { type: String, required: true },
  costo: { type: Number, required: true },
  tags: [String],
  opciones_extra: [String],
  informacion_extra: [informacionExtraSchema],
  imagenes: { type: String, 
    // required: true           Por ahora no
},
  traccion: { type: String },
  rines: { type: String },
  estatus: { type: Boolean, required: true },
  fecha_subido: { type: Date, required: true },
  promociones: [String]
});

const Automovil = mongoose.model('Automovil', automovilSchema);

module.exports = Automovil;
