const { Router } = require('express');
const {  getAllRecipes } = require('../controllers/getRecipes')


const router = Router();


router.get('/', async (req, res, next) => {
        const { name } = req.query;
        let allRecipes = await getAllRecipes() 
        try {
            if (name) {
                let recipeByName = await allRecipes.filter(e => e.name.toLowerCase()
                .includes(name.toLowerCase()));
                recipeByName.length?
                res.status(200).send(recipeByName):
                res.status(404).send("recipe no found")
                }else {
                    res.status(200).send(allRecipes); 
                }
        }catch(error) {
            next(error)
        }
});


router.get('/:id', async (req, res, next) => {    
    const { id } = req.params  
    const recipesAll = await getAllRecipes()
try {
    if(id){
        let recipeId = await recipesAll.filter(e => e.id == id)
        recipeId.length ?
        res.status(200).send(recipeId):
        res.status(404).send("Recipe no found")
    }
} catch (error) {
next(error)
}

});

module.exports = router;