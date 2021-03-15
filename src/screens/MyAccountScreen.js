import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getUserDetails, updateUserProfile } from '../actions/userAction'
//Style
import '../style/MyAcountScreen.scss'

const MyAccountScreen = () => {
	//Router Hooks
	const { push } = useHistory()
	//State
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [message, setMessage] = useState(null)

	const dispatch = useDispatch()
	const userDetails = useSelector((state) => state.userDetails)
	const { loading, error, user } = userDetails
	const userLogin = useSelector((state) => state.userDetails)
	const { userInfo } = userLogin
	const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
	const { success } = userUpdateProfile
	useEffect(() => {
		if (userInfo === null) {
			push('/login')
		} else {
			if (!user || !user.firstName) {
				dispatch(getUserDetails('profile'))
			} else {
				setFirstName(user.firstName)
				setLastName(user.lastName)
				setEmail(user.email)
			}
		}
	}, [])

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
				<div className='edit-btn-group'>
					<button className='edit-btn'>Edit or change password</button>
				</div>
			</div>
			<div className='your-recipes-group'>
				<h1>Your recipes</h1>
				<table className='profile-table'>
					<thead>
						<tr>
							<td>Date</td>
							<td>Title</td>
							<td>Keywords</td>
							<td></td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>First name: </td>
							<td>{user.firstName}</td>
							<td>Keywords</td>
							<td>
								<button className='edit-btn'>Edit / Delete</button>
							</td>
						</tr>
						<tr>
							<td>Last name: </td>
							<td>{user.lastName}</td>
							<td>Keywords</td>
							<td>
								<button className='edit-btn'>Edit / Delete</button>
							</td>
						</tr>
						<tr>
							<td>E-mail adress: </td>
							<td>{user.email}</td>
							<td>Keywords</td>
							<td>
								<button className='edit-btn'>Edit / Delete</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>
	)
}

export default MyAccountScreen
