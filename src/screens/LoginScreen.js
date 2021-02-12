import React from 'react'
//Style
import '../style/LoginScreen.scss'

const LoginScreen = () => {
  return (
    <section className='loginpage'>
      <h1>Log In</h1>
      <form action="">
      <label>Username</label>
      <input type="username" name="userame" id="username"/>
      <label>Password</label>
      <input type="password" name='password' id='password'/>
      <button>Submit</button>
      </form>
    </section>
  )
}

export default LoginScreen
