import React, { useState, useEffect, Fragment } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../actions/userAction'
//componets
import Loader from '../components/Loader'
//Style
import '../style/LoginScreen.scss'

const SignUpScreen = () => {
	//Router Hooks
	const { search } = useLocation()
	const { push } = useHistory()
	//State
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [message, setMessage] = useState(null)

	const dispatch = useDispatch()

	const userRegister = useSelector((state) => state.userRegister)
	const { loading, error, userInfo } = userRegister

	const redirect = search ? search.split('=')[1] : '/'

	useEffect(() => {
		if (userInfo) {
			push(redirect)
		}
	}, [push, userInfo, redirect])

	const submitHandler = (e) => {
		e.preventDefault()
		if (password === confirmPassword) {
			dispatch(register(firstName, lastName, email, password))
		} else {
			setMessage('Password do not match')
		}
	}
	return (
		<section className='loginpage'>
			{loading ? (
				<Loader />
			) : error ? (
				<h1>{error}</h1>
			) : message ? (
				<h1>{message}</h1>
			) : (
				<Fragment>
					<div className='login-bg'></div>
					<h1>Sign Up</h1>
					<form onSubmit={submitHandler}>
						<label htmlFor='firts-name'>First Name</label>
						<input
							type='first-name'
							name='first-name'
							id='first-name'
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
							required
						/>
						<label htmlFor='last-name'>Last Name</label>
						<input
							type='last-name'
							name='last-name'
							id='last-name'
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
							required
						/>
						<label htmlFor='email'>Email</label>
						<input
							type='email'
							name='email'
							id='email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
						<label htmlFor='password'>Password</label>
						<input
							type='password'
							name='password'
							id='password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
						<label htmlFor='confirm-passowrd'>Confirm Password</label>
						<input
							type='password'
							name='password'
							id='confirm-password'
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
							required
						/>
						<button>Submit</button>
					</form>
				</Fragment>
			)}
		</section>
	)
}

export default SignUpScreen