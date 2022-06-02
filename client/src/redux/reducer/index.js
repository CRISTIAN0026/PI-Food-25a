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
                diets: action.payload
            }
        case ADD_RECIPE:
            return{
                ...state,

            }
        case GET_RECIPE_DETAILS:
            return {
                ...state,
                recipeDetails: action.payload
            }
        case DIET_TYPE_FILTER:
            const allRecipes = state.allRecipes;        
            const filteredByDietType = allRecipes.filter(r => r.diets?.some(d => d.toLowerCase() === action.payload.toLowerCase()))
            let typeDi = allRecipes.filter(r => r.Diets?.some(d => d.name.toLowerCase() === action.payload.toLowerCase()))
            let jefe = filteredByDietType.concat(typeDi)    
            return {
                    ...state,
                    recipes: jefe
            };
        case ALPHABETICALLY_SORT: 
        let sortedRecipes = [...state.recipes]       
        sortedRecipes = action.payload === 'az' ?
        state.recipes.sort(function(a, b) {
            if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
            if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
            return 0;
        }) :
        state.recipes.sort(function(a, b) {
            if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
            if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
            return 0;
        });          
        return {
            ...state,
            recipes: sortedRecipes
        };
        case HEALTH_SCORE:
        let sortedRecipesByHealthScore = [...state.recipes] 
            sortedRecipesByHealthScore = action.payload === 'asc' ?
            state.recipes.sort(function(a, b) {
            if (a.healthScore > b.healthScore) return 1;
            if (a.healthScore < b.healthScore) return -1;
            return 0;
        }) :
        state.recipes.sort(function(a, b) {
            if (a.healthScore < b.healthScore) return 1;
            if (a.healthScore > b.healthScore) return -1;
            return 0;
        });
        return {
            ...state,
            recipes: sortedRecipesByHealthScore
        };
        default:
            return state
    }
};

export default rootReducer;