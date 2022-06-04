const axios = require('axios')
const { Recipes, Diets} = require('../db')

const getApiInfo = async () =>{
    try {
        let recipes = (await axios(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.YOUR_API_KEY}&addRecipeInformation=true&number=100`)).data.results
        
    const apiInfo = await recipes.map(e => {
        return {
            id: e.id,
            image: e.image,
            name: e.title,
            diets: e.diets,
            summary: e.summary,
            healthScore: e.healthScore,
            steps: e.analyzedInstructions[0]?.steps.map(e => {
                return {number: e.number,
                        step: e.step } 
                
            })
        }
    })
    return apiInfo 
    } catch (error) {
    return error
    }

}

const getDbInfo = async () => {
    try {
        return await Recipes.findAll({
            include: {
                model: Diets,
                attributes: ['name'],
                through: {
                    attributes: [],
                }
            }
        });
    } catch (error) {
        return error
    }
   
}



const getAllRecipes = async () => {
    try {
        const apiInfo = await getApiInfo();
        const dbInfo = await getDbInfo();
        const totalInfo = apiInfo.concat(dbInfo);
        
        return totalInfo;
    } catch (error) {
        return error
    }
  
}
module.exports={
    getApiInfo,
    getDbInfo,
    getAllRecipes 
}
