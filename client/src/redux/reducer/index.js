import { 
GET_RECIPES,
ADD_RECIPE,
ALPHABETICALLY_SORT,
DIET_TYPE_FILTER,
GET_DIET_TYPES,
GET_RECIPE_DETAILS,
HEALTH_SCORE,
SEARCH_RECIPE } from '../actions'


const initialState = {
    recipes: [],
    allRecipes: [],
    diets: [],
    recipeDetails: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_RECIPES:
            return{
                ...state,
                recipes: action.payload,
                allRecipes: action.payload
            }
        case SEARCH_RECIPE:
            return{
                ...state,
                recipes: action.payload
            }
        case GET_DIET_TYPES:
            return{
                ...state,
                dietsTypes: action.payload
            }
        case ADD_RECIPE:
            return{
                ...state,
            }
        case GET_RECIPE_DETAILS:
            return {
                ...state,
                recipesDetails: action.payload
            }
        case DIET_TYPE_FILTER:
            const allRecipes = state.allRecipes;        
            const filteredByDietType = allRecipes.filter(r => r.diets?.some(d => d.toLowerCase() === action.payload.toLowerCase()))           
            return {
            ...state,
            recipes: filteredByDietType
            };
        case ALPHABETICALLY_SORT: 
            return{

            }
        case HEALTH_SCORE:
            return{

            }
        default:
            return state
    }
};

export default rootReducer;