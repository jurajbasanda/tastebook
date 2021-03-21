import {
	RECIPE_LIST_FAIL,
	RECIPE_LIST_REQUEST,
	RECIPE_LIST_SUCCESS,
	RECIPE_DETAILS_REQUEST,
	RECIPE_DETAILS_SUCCESS,
	RECIPE_DETAILS_FAIL,
	RECIPE_USER_REQUEST,
	RECIPE_USER_SUCCESS,
	RECIPE_USER_FAIL,
} from '../constants/recipeConstants'

function recipeListReducer(state = { recipes: [] }, action) {
	switch (action.type) {
		case RECIPE_LIST_REQUEST:
			return { loading: true, recipes: [], random: {} }
		case RECIPE_LIST_SUCCESS:
			const allRecipes = action.payload
			const randomRecipe =
				allRecipes[Math.floor(Math.random() * allRecipes.length)]
			return {
				loading: false,
				recipes: allRecipes,
				random: {
					title: randomRecipe?.title,
					img: randomRecipe?.img[0],
					_id: randomRecipe?._id,
					hot: randomRecipe?.hot,
					glutenFree: randomRecipe?.glutenFree,
					vegeterian: randomRecipe?.vegeterian,
				},
			}
		case RECIPE_LIST_FAIL:
			return { loading: false, error: action.payload }
		default:
			return state
	}
}
function recipeDetailsReducer(state = { oneRecipe: {} }, action) {
	switch (action.type) {
		case RECIPE_DETAILS_REQUEST:
			return { loading: true, oneRecipe: {} }
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

function recipeUserReducer(state = { allUserRecipes:[]}, action) {
	switch (action.type) {
		case RECIPE_USER_REQUEST:
			return { loading: true, allUserRecipes: [] }
		case RECIPE_USER_SUCCESS:
			return { loading: false, allUserRecipes: action.payload }
		case RECIPE_USER_FAIL:
			return { loading: false, error: action.payload }
		default:
			return state
	}
}

export { recipeListReducer, recipeDetailsReducer, recipeUserReducer }
