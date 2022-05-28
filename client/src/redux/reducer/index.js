import { GET_RECIPES } from '../actions'


const initialeState = {
    recipes: []
}

const rootReducer = (state = initialeState, action) => {
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