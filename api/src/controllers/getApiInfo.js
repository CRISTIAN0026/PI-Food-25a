const axios = require('axios')

const getApiInfo = async () =>{
    try {
        const apiUrl = await axios.get('https://api.spoonacular.com/recipes/complexSearch?apiKey=948fa672861d49a1ab0c60d6a6f7a032')
    } catch (error) {
        
    }
    
}

module.exports={
    getApiInfo
}
