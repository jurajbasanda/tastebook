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
	RECIPE_CREATE_REQUEST,
	RECIPE_CREATE_SUCCESS,
	RECIPE_CREATE_FAIL,
	RECIPE_UPDATE_REQUEST,
	RECIPE_UPDATE_SUCCESS,
	RECIPE_UPDATE_FAIL,
} from '../constants/recipeConstants'
import { logout } from './userAction'
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
				userId: `${userId}`,
			},
		}
		dispatch({ type: RECIPE_USER_REQUEST, payload: userId })
		const { data } = await axios.get(`/api/recipes/user/all`, config)
		dispatch({ type: RECIPE_USER_SUCCESS, payload: data })
	} catch (error) {
		dispatch({ type: RECIPE_USER_FAIL, payload: error.message })
	}
}

const createRecipe = (userId) => async (dispatch, getState) => {
	try {
		dispatch({
			type: RECIPE_CREATE_REQUEST,
		})

		const {
			userLogin: { userInfo },
		} = getState()

		const config = {
			headers: {
				'auth-token': `${userId}`,
			},
		}

		const { data } = await axios.post(`/api/recipes`, {}, config)

		dispatch({
			type: RECIPE_CREATE_SUCCESS,
			payload: data,
		})
	} catch (error) {
		const message =
			error.response && error.response.data.message
				? error.response.data.message
				: error.message
		if (message === 'Not authorized, token failed') {
			dispatch(logout())
		}
		dispatch({
			type: RECIPE_CREATE_FAIL,
			payload: message,
		})
	}
}


export { listRecipe, recipeDetail, getRecipeUser, createRecipe, }
