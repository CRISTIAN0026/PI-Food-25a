const { Router } = require('express');
const { Recipes, Diets } = require('../db')

const router = Router();

router.post('/', async (req, res, next) => {
    try {
        const { name, summary, healthScore, steps, diets } = req.body
        if(name && summary && healthScore){
            const newRecipe = await Recipes.create({
                name,
                summary,
                healthScore,
                steps,
            })
            let dietDb = await Diets.findAll({
                where: {name: diets}
            })
            newRecipe.addDiets(dietDb)
            res.status(200).send(newRecipe) 
        }
    } catch (error) {
        next(error)
    };
});

module.exports = router;