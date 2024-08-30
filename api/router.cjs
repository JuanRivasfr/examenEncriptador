const router = require("express").Router();
const {encriptarMensaje, desencriptarMensaje} = require("./controller/encriptarMensajeController.cjs")
const {validacionMensajeInicial, validacionMensajeFinal} = require("./validator/validatorEncript.cjs")


router.post("/encriptacion/mensajeinicial", validacionMensajeInicial(), encriptarMensaje);
router.post("/encriptacion/mensajefinal", validacionMensajeFinal(), desencriptarMensaje);

module.exports = router