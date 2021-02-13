import React, { Fragment, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { recipeDetail } from '../actions/recipeActions'
//Componets
import Loader from '../components/Loader'
import ErrorMessage from '../components/ErrorMessage'
import Popular from '../components/Popular'
//Style
import '../style/RecipeScreen.scss'

const RecipeScreen = () => {
	//Router hooks
	const { push } = useHistory()
	const { id } = useParams()
	//Use redux
	const dispatch = useDispatch()
	const recipeDetails = useSelector((state) => state.recipeDetails)
	const { loading, error, recipe } = recipeDetails

	useEffect(() => {
		dispatch(recipeDetail(id))
	}, [id, dispatch])

	return (
		<Fragment>
			{loading ? (
				<Loader />
			) : error ? (
				<ErrorMessage message={error} />
			) : (
				<Fragment>
					<section className='recipepage'>
						<div>
							<h1>{recipe.title}</h1>
						</div>
						<div className='dsc-list'>
							<ol>
								{recipe.description.map((step, i) => (
									<li key={i}>{step}</li>
								))}
							</ol>
						</div>
						<div className='imgs-group'>
							{recipe?.img?.map((item, i) => (
								<img key={i} src={item} alt={recipe.title} />
							))}
						</div>
					</section>
				</Fragment>
			)}
		</Fragment>
	)
}

export default RecipeScreen
