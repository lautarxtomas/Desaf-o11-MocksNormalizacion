const mongoose = require('mongoose');

const Schema = new mongoose.Schema({

    author: {
        id: { type: String, required: true },
        nombre: { type: String, required: true },
        apellido: { type: String, required: true },
        edad: { type: Number, required: true },
        alias: { type: String, required: true },
        avatar: { type: String, required: true }
    },
    text: { type: String, required: true }
});

const MensajesModel = mongoose.model("mensajes", Schema); // EN LA BASE DE DATOS DE MONGO, SE VA A CREAR UNA COLECCION "MENSAJES" Y SE VAN A GUARDAR AHÍ.

module.exports = { MensajesModel };