import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { listRecipe } from '../actions/recipeActions'
//Style
import '../style/HomeScreen.scss'
//Components
import ErrorMessage from '../components/ErrorMessage'
import Popular from '../components/Popular'
import Loader from '../components/Loader'
//Images
//Images
import vegetarian from '../images/Vegetarian.png'
import hot from '../images/hot-food.png'
import glutenFree from '../images/gluten-free.png'
import time from '../images/time.png'

const HomeScreen = () => {
	const dispatch = useDispatch()
	const recipeList = useSelector((state) => state.recipeList)
	const { loading, error, recipes, random } = recipeList
	useEffect(() => {
		dispatch(listRecipe())
	}, [dispatch])

	return (
		<Fragment>
			{loading ? (
				<Loader />
			) : error ? (
				<ErrorMessage message={error} />
			) : (
				<Fragment>
					<section className='homepage'>
						{random ? (
							<Fragment>
								<Link to={`/recipe/${random._id}`} className='order2'>
									<div className='info-group'>
										<ul className='time'>
											{random.hot ? (
												<li>
													<img src={hot} alt='Hot food' />
												</li>
											) : null}
											{random.vegeterian ? (
												<li>
													<img src={vegetarian} alt='Vegeterian food' />
												</li>
											) : null}
											{random.glutenFree ? (
												<li>
													<img src={glutenFree} alt='Gluten free food' />
												</li>
											) : null}
										</ul>
										<h1>
											<strong>{random.title}</strong>
										</h1>
										{
											// <ul className='info'>
											// 	<li>
											// 		<img src={vegetarian} alt='Vegetarian' />
											// 	</li>
											// 	<li>
											// 		<img src={glutenFree} alt='Gluten Free' />
											// 	</li>
											// 	<li>
											// 		<img src={hot} alt='Spicy' />
											// 	</li>
											// </ul>
										}
									</div>
								</Link>
								<div
									className='first-bg'
									style={{ backgroundImage: `url(${random.img})` }}
								></div>
							</Fragment>
						) : null}
					</section>
					<Popular food={recipes} />
					{recipes?.length > 8 ? (
						<div className='show-more-group'>
							<button className='show-more-btn'>Show more</button>
						</div>
					) : null}
				</Fragment>
			)}
		</Fragment>
	)
}

export default HomeScreen
