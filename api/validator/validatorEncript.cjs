const { body, query, param } = require("express-validator")

exports.validacionMensajeInicial = () => {
    return [
        body('mensajeParaEncriptar').notEmpty().withMessage('El mensaje de encriptacion en obligatorio')
    ]
}

exports.validacionMensajeFinal = () => {
    return [
        body('mensajeEncriptado').notEmpty().withMessage('El mensaje encriptado es obligatorio')
    ]
}