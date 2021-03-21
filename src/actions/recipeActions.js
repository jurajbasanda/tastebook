import {
	RECIPE_LIST_FAIL,
	RECIPE_LIST_REQUEST,
	RECIPE_LIST_SUCCESS,
	RECIPE_DETAILS_REQUEST,
	RECIPE_DETAILS_SUCCESS,
	RECIPE_DETAILS_FAIL,
	RECIPE_USER_SUCCESS,
	RECIPE_USER_REQUEST,
	RECIPE_USER_FAIL,
} from '../constants/recipeConstants'
import axios from 'axios'

const listRecipe = (keyword = '') => async (dispatch) => {
	try {
		dispatch({ type: RECIPE_LIST_REQUEST })
		const { data } = await axios.get(`/api/recipes?keyword=${keyword}`)
		dispatch({ type: RECIPE_LIST_SUCCESS, payload: data })
	} catch (error) {
		dispatch({ type: RECIPE_LIST_FAIL, payload: error.message })
	}
}
const recipeDetail = (recipeId) => async (dispatch) => {
	try {
		dispatch({ type: RECIPE_DETAILS_REQUEST, payload: recipeId })
		const { data } = await axios.get(`/api/recipes/${recipeId}`)
		dispatch({ type: RECIPE_DETAILS_SUCCESS, payload: data })
	} catch (error) {
		dispatch({ type: RECIPE_DETAILS_FAIL, payload: error.message })
	}
}
const getRecipeUser = (userId) => async (dispatch) => {
	try {
		const config = {
			headers: {
				'Content-Type': 'application/json',
				userId: `${userId}`,			},
		}
		dispatch({ type: RECIPE_USER_REQUEST, payload: userId })
		const { data } = await axios.get(`/api/recipes/user/all`, config)
		dispatch({ type: RECIPE_USER_SUCCESS, payload: data })
	} catch (error) {
		dispatch({ type: RECIPE_USER_FAIL, payload: error.message })
	}
}

export { listRecipe, recipeDetail, getRecipeUser }
