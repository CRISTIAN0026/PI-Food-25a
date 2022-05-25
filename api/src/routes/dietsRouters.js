const { Router } = require('express');
const { dietTypesDb } = require('../controllers/getDiets')
const { Diets } = require('../db');

const router = Router();

router.get('/', async (req, res, next) => {
    
    try {
        dietTypesDb.forEach(e => {
            Diets.findOrCreate({
                where: { name: e}
            })
        });
        const dietTypes = await Diets.findAll();
        res.send(dietTypes)
    } catch (error) {
        next(error)
    }
})

module.exports = router;