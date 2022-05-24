const { Router } = require('express');
const { getApiDiets } = require('../controllers/getApiDiets')


const router = Router();
router.use('/', getApiDiets)


module.exports = router;