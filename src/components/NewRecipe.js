import React from 'react'
import PropTypes from 'prop-types'
//Styles
import '../style/NewRecipe.scss'

const NewRecipe = ({
	openComponent,
	setTitle,
	setServings,
	setKeywords,
	setIngredients,
	setDirections,
	setPhoto,
}) => {
	return (
		<div className={`new-recipe ${openComponent}`}>
			<form>
				<h2>New Recipe</h2>
				<div>
					<label htmlFor='title'>Recipe title*</label>
					<input
						type='text'
						name='title'
						id='title'
						onChange={(e) => setTitle(e.target.value)}
						required
					/>
				</div>
				<div>
					<label htmlFor='number-of-servings'>Number of serving*</label>
					<input
						type='number'
						name='number-of-servings'
						id='number-of-servings'
						onChange={(e) => setServings(e.target.value)}
						required
					/>
				</div>
				<div>
					<label htmlFor='keywords'>Keywords*</label>
					<input
						type='text'
						name='keywords'
						id='keywords'
						onChange={(e) => setKeywords(e.target.value)}
						required
					/>
				</div>
				<div>
					<label htmlFor='ingredients'>Ingredients*</label>
					<textarea
						type='text'
						name='ingredients'
						id='ingredients'
						rows='4'
						onChange={(e) => setIngredients(e.target.value)}
						required
					></textarea>
				</div>
				<div>
					<label htmlFor='directions'>Directions*</label>
					<textarea
						type='text'
						name='directions'
						id='directions'
						rows='7'
						placeholder='Choped onion. &#10;
             Smash garlick.'
						onChange={(e) => setDirections(e.target.value)}
						required
					/>
				</div>
				<div className='uploadPhoto-group'>
					<label
						htmlFor='uploadPhoto'
						role='button'
						aria-hidden='true'
						title='Upload the photo of your dish'
					>
						Upload the photo of your dish*
					</label>
					<input
						type='file'
						aria-label='Recipe image uploader'
						accept='.jpeg, .png, .jpg'
						id='uploadPhoto'
						onChange={(e) => setPhoto(e.target.value)}
						required
					/>
					<small>JPEG/PNG/JPG, max 10MB</small>
				</div>
				<button className='red-btn'>Submit</button>
			</form>
		</div>
	)
}
NewRecipe.propTypes = {
	openComponent: PropTypes.string,
}

export default NewRecipe
