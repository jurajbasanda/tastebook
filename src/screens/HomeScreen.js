import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
//Components
import Popular from '../components/Popular'
import Loader from '../components/Loader'
//Style
import '../style/HomeScreen.scss'
//Images
import vegetarian from '../images/Vegetarian.png'
import hot from '../images/hot.png'
import glutenFree from '../images/gluten-free.png'
import time from '../images/time.png'
import picture1 from '../images/pizza.png'
import picture2 from '../images/Egg-Fried-Rice.png'
import picture3 from '../images/steak&chips.png'
import picture4 from '../images/avocadoOnToast&Egg.png'
import picture5 from '../images/chilli-con-carne.png'
import picture6 from '../images/chicken-cury.jpg'
import picture7 from '../images/shepherds-pie.jpg'
import picture8 from '../images/spaghetti-bolognese.jpg'

const HomeScreen = () => {
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(false)
	const [food, setFood] = useState([])
	const [random, setRandom] = useState({})
	const getData = async () => {
		try {
			const { data } = await axios.get('/recipes')
			const res = data
			const ran = res[Math.floor(Math.random() * res.length)]

			setFood(res)
			setRandom(ran)
			setLoading(false)
		} catch (err) {
			setLoading(false)
			setError(err)
		}
	}
	useEffect(() => {
		getData()
	}, [])
	console.log(random)
	return (
		<Fragment>
			{!loading ? (
				<Fragment>
					<section className='homepage'>
						{random ? (
							<Link to='/' className='order2'>
								<div className='info-group'>
									<ul className='time'>
										<li>
											<img src={time} alt='Time' /> {random.prepTime} minutes
										</li>
									</ul>
									<h1>
										<strong>{random.title}</strong>
									</h1>
									<ul className='info'>
										<li>
											<img src={vegetarian} alt='Vegetarian' />
										</li>
										<li>
											<img src={glutenFree} alt='Gluten Free' />
										</li>
										<li>
											<img src={hot} alt='Spicy' />
										</li>
									</ul>
								</div>
							</Link>
						) : null}
						<div
							className='first-bg'
							style={{ backgroundImage: `url(${random.img})` }}
						></div>
					</section>
					<Popular food={food} />
					{food.length < 8 ? (
						<div className='show-more-group'>
							<button className='show-more-btn'>Show more</button>
						</div>
					) : null}
				</Fragment>
			) : (
				<Loader />
			)}
		</Fragment>
	)
}

export default HomeScreen
