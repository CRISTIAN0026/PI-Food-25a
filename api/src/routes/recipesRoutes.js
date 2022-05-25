const { Router } = require('express');
const { getApiInfo } = require('../controllers/getApiInfo')


const router = Router();
router.use('/', getApiInfo)


module.exports = router;