const { Router } = require('express');
const { Recipes, Diets } = require('../db')

const router = Router();

router.post('/', async (req, res, next) => {
    try {
        let { name, summary, healthScore, steps, diets, createInDb } = req.body
        if(name && summary && healthScore){
            let newRecipe = await Recipes.create({
                name,
                summary,
                healthScore,
                steps,
                createInDb
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