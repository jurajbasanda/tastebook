import {
	RECIPE_LIST_FAIL,
	RECIPE_LIST_REQUEST,
	RECIPE_LIST_SUCCESS,
	RECIPE_DETAILS_REQUEST,
	RECIPE_DETAILS_SUCCESS,
	RECIPE_DETAILS_FAIL,
} from '../constants/recipeConstants'

function recipeListReducer(state = { recipes: [] }, action) {
	switch (action.type) {
		case RECIPE_LIST_REQUEST:
			return { loading: true, recipes: [], random: {} }
		case RECIPE_LIST_SUCCESS:
			const foods = action.payload
			const ran = foods[Math.floor(Math.random() * foods.length)]
			return {
				loading: false,
				recipes: foods,
				random: { title: ran?.title, img: ran?.img[0],_id:ran?._id,prepTime:ran?.prepTime },
			}
		case RECIPE_LIST_FAIL:
			return { loading: false, error: action.payload }
		default:
			return state
	}
}
function recipeDetailsReducer(state = { recipe: {} }, action) {
	switch (action.type) {
		case RECIPE_DETAILS_REQUEST:
			return { loading: true, recipe: [] }
		case RECIPE_DETAILS_SUCCESS:
			return {
				loading: false,
				recipe: action.payload,
			}
		case RECIPE_DETAILS_FAIL:
			return { loading: false, error: action.payload }
		default:
			return state
	}
}

export { recipeListReducer, recipeDetailsReducer }
