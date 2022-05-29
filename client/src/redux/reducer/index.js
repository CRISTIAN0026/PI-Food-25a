import { 
GET_RECIPES,
ADD_RECIPE,
ALPHABETICAL_SORT,
DIET_TYPE_FILTER,
GET_DIET_TYPES,
GET_RECIPE_DETAILS,
HEALTH_SCORE,
SEARCH_RECIPE } from '../actions'


const initialState = {
    recipes: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_RECIPES:
            return{
                ...state,
                recipes: action.payload
            }
    
        default:
            return state
    }
};

export default rootReducer;