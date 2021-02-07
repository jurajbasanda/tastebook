import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
//Components
import Popular from '../components/Popular'
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
	const food = [
		{ name: 'Pizza', cal: 1490, prepTime: 45, img: picture1 },
		{ name: 'Egg fried rice', cal: 1387, prepTime: 36, img: picture2 },
		{ name: 'Steak & fries', cal: 1744, prepTime: 60, img: picture3 },
		{ name: 'Avocado on toast', cal: 1044, prepTime: 20, img: picture4 },
		{ name: 'Chilli con carne', cal: 1744, prepTime: 60, img: picture5 },
		{ name: 'Chicken curry', cal: 1490, prepTime: 45, img: picture6 },
		{ name: "Shepherd's pie", cal: 1387, prepTime: 36, img: picture7 },
		{ name: 'Spagetti bolognese', cal: 1387, prepTime: 36, img: picture8 },
	]
	const random = food[Math.floor(Math.random() * food.length)]
	return (
		<Fragment>
			{random ? (
				<section className='homepage'>
					<Link to='/' className='order2'>
						<div className='info-group'>
							<ul className='time'>
								<li>
									<img src={time} alt='Time' /> {random.prepTime} minutes
								</li>
							</ul>
							<h1>
								<strong>{random.name}</strong>
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
					<div
						className='first-bg'
						style={{ backgroundImage: `url(${random.img})` }}
					></div>
				</section>
			) : null}

			<Popular food={food} />
		</Fragment>
	)
}

export default HomeScreen
