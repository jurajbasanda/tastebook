import React,{useEffect} from 'react'
import { useParams,useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { recipeDetail } from '../actions/recipeActions'
//Style
import '../style/RecipeScreen.scss'

const RecipeScreen = () => {
	//Router hooks
	const { push } = useHistory()
	const { id } = useParams()
	//Use redux
	const dispatch = useDispatch()
	const recipeDetails = useSelector(state => state.recipetDetails)
	const { loading, error, recipe } = recipeDetail
  
	useEffect(() => {
	  dispatch(recipeDetail(id))
	}, [id, dispatch]);
	

	return <section className='recipepage'>
	<div className="img-group"><img src="" alt=""/></div></section>
}

export default RecipeScreen
