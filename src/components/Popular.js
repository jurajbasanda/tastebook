import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Popular = ({ food }) => {
	return (
		<section className='recipe'>
			<h2>Popular</h2>
			<div className='recipe-group'>
				{food.map((item) => (
					<Link to={`/recipe/${item._id}`} key={item._id}>
						<div  className='item'>
							<div className='image'><img src={item.img} alt={item.title} srcSet='' /></div>
							<h3>{item.title}</h3>
						</div>
					</Link>
				))}
			</div>
				
		</section>
	)
}
Popular.propTypes ={
	food:PropTypes.array
}
export default Popular
