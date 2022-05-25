const { Router } = require('express');
const dietRoutes = require('./dietRoutes')
const recipesRoutes = require('./recipesRoutes')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();



// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/diets',dietRoutes)
router.use('/recipes', recipesRoutes)

module.exports = router;
