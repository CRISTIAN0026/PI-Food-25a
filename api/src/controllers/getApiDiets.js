const axios = require('axios')
const { Diets } = require('../db')

const getApiDiets = async (req, res) =>{
    try {
        let diets = (await axios(`https://api.spoonacular.com/recipes/complexSearch?apiKey=948fa672861d49a1ab0c60d6a6f7a032`))
        .data.results.map(e => ({name: e.title}))
        await Diets.bulkCreate(diets)
        res.send("Dietas cargadas correctamente en la db")
    } catch (error) {
        res.send("Naaqa")
    }
    
}


module.exports={
    getApiDiets
}
