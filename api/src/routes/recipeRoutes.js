const { Router } = require('express');
const { getApiInfo } = require('../controllers/getApiInfo');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.use('/', getApiInfo)

module.exports = router;