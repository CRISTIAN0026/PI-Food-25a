const axios = require('axios')
const { Diets } = require('../db')

const getApiDiets = async (req, res) =>{
    try {
        let diets = (await axios(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.YOUR_API_KEY}`))
        .data.results.map(e => ({name: e.title}))
        await Diets.bulkCreate(diets)
        res.send("Dietas cargadas correctamente en la db")
    } catch (error) {
        res.send(error)
    }
    
}


module.exports={
    getApiDiets
}
