import axios from 'axios';


export const GET_RECIPES = 'GET_RECIPES';
export const ADD_RECIPE = "ADD_RECIPE";
export const DIET_TYPE_FILTER = "DIET_TYPE_FILTER";
export const GET_RECIPE_DETAILS = "GET_RECIPE_DETAILS";
export const ALPHABETICALLY_SORT = "ALPHABETICALLY_SORT";
export const HEALTH_SCORE = "HEALTH_SCORE";
export const SEARCH_RECIPE = "SEARCH_RECIPE";
export const GET_DIET_TYPES = "GET_DIET_TYPES";




export const getRecipes = () => {
    return async (dispatch) => {
        try {
            var json = await axios("http://localhost:3001/recipes");
            return dispatch({
                type: GET_RECIPES,
                payload: json.data
            });
        } catch (error) {
            return error
        }
    }
};

export const getRecipesByName = (payload) => {
    return async (dispatch) => {
        try {
            var response = await axios(`http://localhost:3001/recipes?name=${payload}`);
            return dispatch({
                type: SEARCH_RECIPE, 
                payload: response.data
            });
        } catch {
            return alert ('Recipe Not Found')
        }
    }
}

export const getDietTypes = () => {
    return async (dispatch) => {
        try{
            var response = await axios('http://localhost:3001/types');
            return dispatch({type: GET_DIET_TYPES, payload: response.data.map(d => d.name)});
        } catch (error) {
            return error
        }
    }
}

export const addRecipe = (payload) => {
    return async () => {
        try {
            var response = await axios.post('http://localhost:3001/recipe', payload);
            return response;
        } catch (error) {
            return error
        }
    }
}
export const getRecipeDetails = (payload) =>{
    return async (dispatch) => {
        try {
            var response = await axios(`http://localhost:3001/recipes/${payload}`);
            return dispatch({type: GET_RECIPE_DETAILS, payload: response.data})
        } catch (error) {
            return error
        }
    }
};

export const dietTypeFilter = (payload) => {
    return {
        type: DIET_TYPE_FILTER,
        payload
    }
};

export const orderAlphabetically = (payload) => {
    return {
        type: ALPHABETICALLY_SORT,
        payload
    }
};

export const sortByHealthy = (payload) => {
    return {
        type: HEALTH_SCORE,
        payload
    }
}