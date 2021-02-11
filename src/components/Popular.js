import React from 'react'
import { Link } from 'react-router-dom'

const Popular = ({ food }) => {
	return (
		<section className='recipe'>
			<h2>Popular</h2>
			<div className='recipe-group'>
				{food.map((item) => (
					<Link to='/' key={item._id}>
						<div  className='item'>
							<img src={item.img} alt={item.title} srcSet='' />
							<h3>{item.title}</h3>
						</div>
					</Link>
				))}
			</div>
				
			{food.length < 16 ? <button>Show more</button> : null}
		</section>
	)
}

export default Popular
