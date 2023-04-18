const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Ubicacion = require('Ubicacion');
const Automovil = require('Automovil');
const Documento = require('Documento');
const Imagen = require('Imagen');



const usuarioCompradorSchema = new Schema({
    id: { type: Number, required: true },
    nombre: { type: String, required: true },
    apellidos: {type: String, required: true},
    correo: { type: String, required: true},
    contrasena: {type: String, required: true}, // encriptar
    fecha_nacimiento: {type: Date, required: true},
    genero: {type: String, required: true},
    fecha_registro: {type: Date, required: true},
    foto: {Imagen},
    ubicacion: {Ubicacion},
    documentos: [Documento],
    autos_vistos: [Automovil.id],
    autos_favoritos: [Automovil.id],
    autos_recomendados: [Automovil.id],
    estatus_cuenta: {type: Boolean, required: true}

});

const UsuarioComprador = mongoose.model('UsuarioComprador', usuarioCompradorSchema);
module.exports = UsuarioComprador;
