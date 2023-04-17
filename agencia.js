import Documento from './documento';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ubicacionSchema = new Schema({
    id: Number,
    calle: String,
    colonia: String,
    estado: String,
    codigo_postal: Number
  });

const agenciaSchema = new Schema({
    id: { type: Number, required: true },
    admon_gpo_automotriz_id: { type: Number, required: true },
    gerente_id: { type: Number, required: true },
    ubicacion: [ubicacionSchema],
    nombre_sucursal: { type: String, required: true },
    autos: { type: Array, required: true },
    documentos: [Documento],
    id_cuenta_bancaria: {type: Number, required: true},
    autos_vendidos: {type: Array, required: true},
    autos_recomendados: {type: Array, required: true},
    seguros_disponibles: {type: Array, required: true},
    planes_financiamiento: {type: Array, required: true}
  });

const Agencia = mongoose.model('Agencia', agenciaSchema);

module.exports = Agencia;