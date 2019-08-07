import React from 'react'

const LoginButton = ({ onLogin }) => (
	<button onClick={onLogin} className='login-button'>{localStorage.isLoggedIn === "true" ? 'Log out' : 'Log in'}</button>
	
)

export default LoginButton
