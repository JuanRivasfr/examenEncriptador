const {validationResult} = require("express-validator");
const encriptarDto = require("../dto/encriptarDto.cjs")


const encriptarMensaje = async(req, res) => {
    const EncriptarDto = new encriptarDto()
    const errors = validationResult(req);
    if(!errors.isEmpty()) return res.status(400).json({errors: errors.array()});
    const texto = req.body.mensajeParaEncriptar.toLowerCase()
    const mapaEncriptacion = { 'e': 'enter', 'i': 'imes', 'a': 'ai', 'o': 'ober', 'u': 'ufat' };
    const textoEncriptado = texto.replace(/[eioua]/g, letra => mapaEncriptacion[letra]);
    data = EncriptarDto.templatesMostrarMensaje(textoEncriptado)
    res.status(data.status).json(data)

}

const desencriptarMensaje = async(req, res) => {
    const EncriptarDto = new encriptarDto()
    const errors = validationResult(req);
    if(!errors.isEmpty()) return res.status(400).json({errors: errors.array()});
    const texto = req.body.mensajeEncriptado.toLowerCase()
    const mapaDesencriptacion = { 'enter': 'e', 'imes': 'i', 'ai': 'a', 'ober': 'o', 'ufat': 'u' };
    const textoDesencriptado = texto.replace(/enter|imes|ai|ober|ufat/g, cadena => mapaDesencriptacion[cadena]);
    data = EncriptarDto.templatesMostrarMensaje(textoDesencriptado)
    res.status(data.status).json(data)

}

module.exports = {
    encriptarMensaje,
    desencriptarMensaje
}