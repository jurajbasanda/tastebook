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
					<div className='item'>
						<img src={picture1} alt='recipe' srcSet='' />
						<h3>Pizza</h3>
					</div>
					<div className='item'>
						<img src={picture1} alt='recipe' srcSet='' />
						<h3>Pizza</h3>
					</div>
					<div className='item'>
						<img src={picture1} alt='recipe' srcSet='' />
						<h3>Pizza</h3>
					</div>
					<div className='item'>
						<img src={picture1} alt='recipe' srcSet='' />
						<h3>Pizza</h3>
					</div>
					<div className='item'>
						<img src={picture1} alt='recipe' srcSet='' />
						<h3>Pizza</h3>
					</div>
					<div className='item'>
						<img src={picture1} alt='recipe' srcSet='' />
						<h3>Pizza</h3>
					</div>
					<div className='item'>
						<img src={picture1} alt='recipe' srcSet='' />
						<h3>Pizza</h3>
					</div>
					<div className='item'>
						<img src={picture1} alt='recipe' srcSet='' />
						<h3>Pizza</h3>
					</div>
				</div>
			</section>
		</>
	)
}

export default HomeScreen
