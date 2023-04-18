const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ubicacionSchema = new Schema({
    id: {type: Number, required: true},
    calle: {type: String, required: true},
    colonia: {type: String, required: true},
    estado: {type: String, required: true},
    codigo_postal: {type: Number, required: true} 
});

const Ubicacion = mongoose.model('Ubicacion', ubicacionSchema);
module.exports = Ubicacion;
