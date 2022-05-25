const { Router } = require('express');
const { getApiById, getAllRecipes, getDbById } = require('../controllers/getRecipes')


const router = Router();


router.get('/', async (req, res) => {
    try {
        const { name } = req.query;
        let allRecipes = await getAllRecipes()    
        
        if (name) {
            let recipeByName = await allRecipes.filter(e => e.name.toLowerCase().includes(name.toString().toLowerCase()));
           
            if (recipeByName.length) {
                let recipes = recipeByName.map(e => {
                    return {
                        image: e.image,
                        name: e.name,
                        dietTypes: e.dietTypes ? e.dietTypes : e.diets.map(e => e.name),
                        healthScore: e.healthScore,
                        id: e.id
                    }
                })
                return res.status(200).send(recipes); 
            }  
            return res.status(404).send('Recipe not found')
        } else {
            let recipes = allRecipes.map(e => {
                return {
                    image: e.image,
                    name: e.name,
                    dietTypes: e.dietTypes ? e.dietTypes : e.diets.map(e => e.name),
                    score: e.healthScore,
                    id: e.id
                }
            })
            return res.status(200).send(recipes);
        }
    } catch {
       return res.status(400).send('invalid input');
    }
});


router.get('/:id', async (req, res, next) => {    
    const { id } = req.params  
    try {
       apiRBI = await getApiById(id)
            if (apiRBI.data.id) {
                let recipeDetails =  {                    
                    image: apiRBI.data.image,
                    name: apiRBI.data.title,
                    dietTypes: apiRBI.data.diets,
                    summary: apiRBI.data.summary,
                    healthScore: apiRBI.data.healthScore,
                    steps: apiRBI.data.analyzedInstructions[0]?.steps.map(e => {
                        return {
                            number: e.number,
                            step: e.step
                        }
                    })
                }
            return res.status(200).send(recipeDetails);
            }
    } catch {
       next('Recipe not found')
    }
});

module.exports = router;