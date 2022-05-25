const { Router } = require('express');
const { getApiRecipes } = require('../controllers/getApiRecipes')


const router = Router();
router.use('/', getApiRecipes)


module.exports = router;