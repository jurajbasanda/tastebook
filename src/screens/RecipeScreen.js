import React, { Fragment, useEffect } from 'react'
import { useParams, useHistory, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { recipeDetail } from '../actions/recipeActions'
//Componets
import Loader from '../components/Loader'
import ErrorMessage from '../components/ErrorMessage'
import Popular from '../components/Popular'
//Style
import '../style/RecipeScreen.scss'
//Images
import vegetarian from '../images/Vegetarian.png'
import hot from '../images/hot-food.png'
import glutenFree from '../images/gluten-free.png'
import time from '../images/time.png'

const RecipeScreen = () => {
	//Router hooks
	const { push, pathname, history } = useHistory()
	const { id } = useParams()
	//Use redux
	const dispatch = useDispatch()
	const recipeDetails = useSelector((state) => state.recipeDetails)
	const { loading, error, recipe } = recipeDetails

	useEffect(() => {
		dispatch(recipeDetail(id))
		console.log('aaaaa', history)
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
						<div className='get-back'>
							<Link to={`/`}>Go back</Link>
						</div>
						<div className='recipepage-title'>
							<h1>{recipe.title}</h1>
							<ul>
								<li>
									<img src={time} alt='' />
									<span>{recipe.prepTime} min</span>
								</li>
								{recipe.hot ? (
									<li>
										<img src={hot} alt='Hot food' />
									</li>
								) : null}
								{recipe.vegeterian ? (
									<li>
										<img src={vegetarian} alt='Vegeterian food' />
									</li>
								) : null}
								{recipe.glutenFree ? (
									<li>
										<img src={glutenFree} alt='Gluten free food' />
									</li>
								) : null}
							</ul>
						</div>
						<div className='dsc-group'>
							<div className='dsc-lists'>
								<div className='dsc-ingredients-group'>
									<h2>Ingredients</h2>
									{recipe.serving ? (
										<h3>
											For {recipe.serving}{' '}
											{recipe.servings > 1 ? (
												<span>servings</span>
											) : (
												<span>serving</span>
											)}
										</h3>
									) : null}
									<ul>
										{recipe?.description?.map((step, i) => (
											<li key={i}>{step}</li>
										))}
									</ul>
								</div>
								<div className='dsc-method-group'>
									<h2>Method</h2>
									<ol className='dsc-ol'>
										{recipe?.description?.map((step, i) => (
											<li key={i}>{step}</li>
										))}
									</ol>
								</div>
							</div>
							<div className='dsc-imgs-group'>
								{recipe?.img?.map((item, i) => (
									<img key={i} src={item} alt={recipe.title} />
								))}
							</div>
						</div>
					</section>
				</Fragment>
			)}
		</Fragment>
	)
}

export default RecipeScreen
