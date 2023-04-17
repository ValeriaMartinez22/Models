const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const documentoSchema = new Schema({
    id: Number,
    nombre: String,
    fecha_de_subida: Date,
    link: String
  });

const Documento = mongoose.model('Documento', documentoSchema);

module.exports = Documento;