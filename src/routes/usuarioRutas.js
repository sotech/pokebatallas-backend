const router = require("express").Router();
const controlador = require('../controllers/usuariosControlador');

router.post("/registrar", controlador.registrarUsuario);
router.post("/logear", controlador.logearUsuario);

module.exports = router;