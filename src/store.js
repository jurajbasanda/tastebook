import {createStore,combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {recipeListReducer,recipeDetailsReducer} from './reducers/recipeReducer'



const initialState = {};
const reducer = combineReducers({
recipeList: recipeListReducer,
recipeDetails: recipeDetailsReducer,
})

const composeEnhancer =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,initialState,composeEnhancer(applyMiddleware(thunk)))

export default store;