import React, { useState, useEffect, Fragment } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getUserDetails, updateUserProfile } from '../actions/userAction'
import { getRecipeUser } from '../actions/recipeActions'
//Style
import '../style/MyAcountScreen.scss'
//Components
import Loader from '../components/Loader'
import ErrorMessage from '../components/ErrorMessage'
import NewRecipe from '../components/NewRecipe'
import ProfileInfo from '../components/ProfileInfo'
import UserRecipeList from '../components/UserRecipeList'

const MyAccountScreen = () => {
	//*Router Hooks
	const { push } = useHistory()
	//*State
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [userId, setUserId] = useState('')
	const [message, setMessage] = useState(null)
	//State New Recipe
	const [newRecipeForm, setNewRecipeFrom] = useState('')
	const [titleNewRecipe, setTitleNewRecipe] = useState('')
	const [keywordsNewRecipe, setKeywordsNewRecipe] = useState('')
	const [numberOfServings, setNumberOfServing] = useState('')
	const [ingredients, setIngredients] = useState('')
	const [directions, setDirections] = useState('')
	const [photo, setPhoto] = useState('')
	//

	//*Redux State
	const dispatch = useDispatch()
	//User info
	const userDetails = useSelector((state) => state.userDetails)
	const { loading, error, user } = userDetails
	const userLogin = useSelector((state) => state.userDetails)
	const { userInfo } = userLogin
	//User update
	const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
	const { success } = userUpdateProfile
	//Recipes from the user
	const recipeUser = useSelector((state) => state.recipeUser)
	const { allUserRecipes } = recipeUser
	//

	//Open and close New Recipe Form
	const openNewRecipeForm = () => {
		newRecipeForm === ''
			? setNewRecipeFrom('open-component')
			: setNewRecipeFrom('')
	}
	//Get user details OR redirect to "/login"
	useEffect(() => {
		if (userDetails?.error) {
			push('/login')
		} else {
			if (!user || !user.name) {
				dispatch(getUserDetails('profile'))
			} else {
				setFirstName(user?.firstName)
				setLastName(user?.lastName)
				setEmail(user?.email)
			}
		}
	}, [dispatch])
	//Get users all recipes
	useEffect(() => {
		dispatch(getRecipeUser(user?._id))
	}, [user])

	return (
		<section className='myaccount-page'>
			<div className='profile-group'>
				{' '}
				<h1>Profile information</h1>
				{userDetails?.loading ? (
					<Loader />
				) : userDetails?.error ? (
					<ErrorMessage messageErr={userDetails.error} />
				) : user ? (
					<ProfileInfo user={user} />
				) : null}
				<div className='edit-btn-group'>
					<button className='red-btn'>Edit or change password</button>
				</div>
			</div>
			<div className='your-recipes-group'>
				<h1>Your recipes</h1>
				{recipeUser?.loading ? (
					<Loader />
				) : recipeUser?.error ? (
					<p>{recipeUser.error}</p>
				) : allUserRecipes ? (
					<Fragment>
						<UserRecipeList allUserRecipes={allUserRecipes}/>
						<div>
							<button className='red-btn' onClick={openNewRecipeForm}>
								Add New Recipe
							</button>
						</div>
						<NewRecipe
							openComponent={newRecipeForm}
							setTitle={setTitleNewRecipe}
							setKeywords={setKeywordsNewRecipe}
							setIngredients={setIngredients}
							setDirections={setDirections}
							setServings={setNumberOfServing}
							setPhoto={setPhoto}
						/>
					</Fragment>
				) : (
					<h1>No Recipe find</h1>
				)}
			</div>
		</section>
	)
}

export default MyAccountScreen
