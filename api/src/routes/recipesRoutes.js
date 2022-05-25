const { Router } = require('express');
const { getApiInfo } = require('../controllers/getRecipes')


const router = Router();
router.use('/', getApiInfo)


module.exports = router;