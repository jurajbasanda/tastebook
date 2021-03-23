import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getUserDetails, updateUserProfile } from '../actions/userAction'
import { getRecipeUser } from '../actions/recipeActions'
//Style
import '../style/MyAcountScreen.scss'
//Components
import Loader from '../components/Loader'
import ErrorMessage from '../components/ErrorMessage'

const MyAccountScreen = () => {
	//Router Hooks
	const { push } = useHistory()
	//State
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [userId, setUserId] = useState('')
	const [message, setMessage] = useState(null)
	//*Redux State
	const dispatch = useDispatch()
	const userDetails = useSelector((state) => state.userDetails)
	const { loading, error, user } = userDetails
	const userLogin = useSelector((state) => state.userDetails)
	const { userInfo } = userLogin
	const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
	const { success } = userUpdateProfile
	const recipeUser = useSelector((state) => state.recipeUser)
	const { allUserRecipes } = recipeUser

	// Date format
	const dateFormat = (recipeDate) => {
		const dateObj = new Date(recipeDate)
		const month = dateObj.getMonth() + 1
		const day = dateObj.getDate()
		const year = dateObj.getFullYear()

		return `${day}/${month}/${year}`
	}

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

	useEffect(() => {
		dispatch(getRecipeUser(user?._id))
	}, [user])

	const submitHandler = (e) => {
		e.preventDefault()
		if (password !== confirmPassword) {
			setMessage('Passwords do not match')
		} else {
			dispatch(
				updateUserProfile({
					id: user._id,
					firstName,
					lastName,
					email,
					password,
				})
			)
		}
	}
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
					<table className='profile-table'>
						<tbody>
							<tr>
								<td>User ID: </td>
								<td>{user._id}</td>
							</tr>
							<tr>
								<td>First name: </td>
								<td>{user.firstName}</td>
							</tr>
							<tr>
								<td>Last name: </td>
								<td>{user.lastName}</td>
							</tr>
							<tr>
								<td>E-mail adress: </td>
								<td>{user.email}</td>
							</tr>
						</tbody>
					</table>
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
					<table className='profile-table'>
						<thead>
							<tr>
								<th>Date</th>
								<th>Title</th>
								<th>Keywords</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{allUserRecipes?.map((recipe) => (
								<tr key={recipe._id}>
									<td>{dateFormat(recipe.date)} </td>
									<td>{recipe.title}</td>
									<td>{recipe.keywords}</td>
									<td>{recipe.userId}</td>
									<td>
										<button className='red-btn'>Edit / Delete</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				) : (
					<h1>No Recipe find</h1>
				)}
			</div>
		</section>
	)
}

export default MyAccountScreen
