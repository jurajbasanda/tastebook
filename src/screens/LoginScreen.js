import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../actions/userAction'
//componets
import Loader from '../components//Loader'
//Style
import '../style/LoginScreen.scss'

const LoginScreen = () => {
	//State
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const dispatch = useDispatch()

	const userLogin = useSelector((state) => state.userLogin)
	const { loading, error, userInfo } = userLogin

	const submitHandler = (e) => {
		e.preventDefault()
		dispatch(login(email, password))
	}
	return (
		<section className='loginpage'>
			{loading ? <Loader /> : null}
			{error ? <h1>{error}</h1> : null}
			<h1>Log In</h1>
			<form onSubmit={submitHandler}>
				<label>Email</label>
				<input
					type='email'
					name='email'
					id='email'
					onChange={(e) => setEmail(e.target.value)}
				/>
				<label>Password</label>
				<input
					type='password'
					name='password'
					id='password'
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button>Submit</button>
			</form>
		</section>
	)
}

export default LoginScreen
