import React from 'react'
//Style
import '../style/HomeScreen.scss'
//Images
import picture1 from '../images/pizza.png'
const HomeScreen = () => {
	return (
		<>
			<section className='homepage'>
				<div>
					<h1>Chips & Steak</h1>
				</div>
				<div className='first-bg'></div>
			</section>
            <section className='recipe'>
            <h2>Trending Recipe</h2>
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
				</div>
			</section>
		</>
	)
}

export default HomeScreen
