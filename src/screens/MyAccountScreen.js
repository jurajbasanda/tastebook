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
		if (!user) {
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
			<h1>Profile information</h1>
			<table className='profile-table'>
				<tbody>
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
					<tr>
						<td> </td>
						<td> </td>
					</tr>
					<tr>
						<td> </td>
						<td> </td>
					</tr>
				</tbody>
			</table>
		</section>
	)
}

export default MyAccountScreen
