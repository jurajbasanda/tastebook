import React from 'react'
//Style
import '../style/HomeScreen.scss'
//Images
import vegetarian from '../images/Vegetarian.png'
import hot from '../images/hot.png'
import glutenFree from '../images/gluten-free.png'
import time from '../images/time.png'
import picture1 from '../images/pizza.png'

const HomeScreen = () => {
	const food = [
		{ name: 'Pizza', cal: 1490, prepTime: 45, img: picture1 },
		{ name: 'Pasta', cal: 1387, prepTime: 20, img: picture1 },
	]
	return (
		<>
			<section className='homepage'>
				<div className='info-group'>
					<ul className='time'>
						<li>
							<img src={time} alt='Time' /> 30 minutes
						</li>
					</ul>
					<h1>
						<strong>Chips & Steak</strong>
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
				<div className='first-bg'></div>
			</section>
			<section className='recipe'>
				<h2>Popular</h2>
				<div className='recipe-group'>
					{food.map((item) => (
						<div key={item.name} className='item'>
							<img src={item.img} alt='recipe' srcSet='' />
							<h3>{item.name}</h3>
						</div>
					))}
				</div>
			</section>
		</>
	)
}

export default HomeScreen
