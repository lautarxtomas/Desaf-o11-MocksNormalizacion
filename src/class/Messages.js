const mongoose = require('mongoose');
const config = require('../config/config');
const { MensajesModel } = require('../model/msgModel');

const normalizeMsgs = require('../utils/normalizr');

mongoose.connect(config.host, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (err) console.log(err);
});

class ContenedorMensajes {

    async save(msj) {
        try {
            const newMsg = new MensajesModel(msj);
            await newMsg.save();

            return { message: "Se guardó correctamente el mensaje" };
        } catch (err) {
            console.log(err)
        }
    }

    async getAll() {
        try {
            const mensajes = await MensajesModel.find();
            
            return normalizeMsgs(mensajes);
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = ContenedorMensajes;