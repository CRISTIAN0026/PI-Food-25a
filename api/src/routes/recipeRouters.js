const { Router } = require('express');
const { Recipes, Diets } = require('../db')

const router = Router();

router.post('/', async (req, res, next) => {
    try {
        const { name, summary, healthScore, steps, dietTypes } = req.body
        if(name && summary && healthScore){
            const newRecipe = await Recipes.create({
                name,
                summary,
                healthScore,
                steps,
            })
            let dietDb = await Diets.findAll({
                where: {name: dietTypes}
            })
            newRecipe.addDiets(dietDb)
            res.status(200).send(newRecipe) 
        }
        return res.status(404).send('Incomplete data')
    } catch (error) {
        next(error)
    };
});

module.exports = router;