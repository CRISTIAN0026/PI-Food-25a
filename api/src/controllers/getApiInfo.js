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
            dietTypes: e.diets,
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
        let getInfo = await Recipes.findAll({
            include: {
                model: Diets,
                attributes: ['name'],
                through: {
                    attributes: [],
                }
            }
        });
        return getInfo
    } catch (error) {
        return error
    }
   
}

const getApiById = async (id) => {
    try {
        let getById = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?${process.env.YOUR_API_KEY}`)
        return getById
    } catch (error) {
        
    }
}

const getDbById = async (id) => {
    try {
        let getId = await Recipes.findByPk(id, {
            include: {
                model: Diets,
                attributes: ['name'],
                through: {
                    attributes: [],
                }
            }
        });
        return getId
    } catch (error) {
        return error
    }
    
}

module.exports={
    getApiInfo,
    getDbInfo,
    getApiById 
}
