import React from 'react'
import { useParams } from 'react-router-dom'
const RecipeScreen = () => {
	const { id } = useParams()

	return <section className='recipepage'></section>
}

export default RecipeScreen
