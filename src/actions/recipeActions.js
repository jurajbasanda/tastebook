import {
	RECIPE_LIST_FAIL,
	RECIPE_LIST_REQUEST,
	RECIPE_LIST_SUCCESS,
	RECIPE_DETAILS_REQUEST,
	RECIPE_DETAILS_SUCCESS,
	RECIPE_DETAILS_FAIL,
} from '../constants/recipeConstants'
import axios from 'axios'

const listRecipe = () => async (dispatch) => {
	try {
		dispatch({ type: RECIPE_LIST_REQUEST })
		const { data } = await axios.get('/recipes')
		dispatch({ type: RECIPE_LIST_SUCCESS, payload: data })
	} catch (error) {
		dispatch({ type: RECIPE_LIST_FAIL, payload: error.message })
	}
}
const recipeDetail = (recipeId) => async (dispatch) => {
	try {
		dispatch({ type: RECIPE_DETAILS_REQUEST, payload: recipeId })
		const { data } = await axios.get(`/recipes/${recipeId}`)
		dispatch({ type: RECIPE_DETAILS_SUCCESS, payload: data })
	} catch (error) {
		dispatch({ type: RECIPE_DETAILS_FAIL, payload: error.message })
	}
}

export { listRecipe, recipeDetail }
