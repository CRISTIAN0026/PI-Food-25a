import axios from 'axios';


export const GET_RECIPES = 'GET_RECIPES';

export const getRecipes = () => {
    return async (dispatch) => {
        let json = await axios("http://localhost:3001/recipes");
        return dispatch({
            type: GET_RECIPES,
            payload: json.data
        });
    }
};