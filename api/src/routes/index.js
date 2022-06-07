const { Router } = require('express');
const recipeRouters = require('./recipeRouters')
const recipesRouters = require('./recipesRouters')
const dietsRouter = require('./dietsRouters')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();



// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/recipes', recipesRouters);
router.use('/types', dietsRouter);
router.use('/recipes', recipeRouters);


module.exports = router;
