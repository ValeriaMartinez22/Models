import Documento from './documento';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const planFinanciamientoSchema = new Schema({
    id: { type: Number, required: true },
    automovil_id: { type: Number, required: true },
    enganche: { type: Number, required: true },
    interes_anual: { type: Number, required: true },
    comision_por_apertura: { type: Number, required: true },
    descripcion: { type: String, required: true },
    documento: [Documento]
  });

const PlanFinanciamiento = mongoose.model('PlanFinanciamiento', planFinanciamientoSchema);

module.exports = PlanFinanciamiento;