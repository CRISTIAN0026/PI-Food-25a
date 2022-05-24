const { Router } = require('express');
const dietRoutes = require('./dietRoutes')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();



// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/diets',dietRoutes)

module.exports = router;
