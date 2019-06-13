import React from 'react'

// export default class LoginButton extends React.Component {

// 	render() {
// 		const { onLogin } = this.props

// 		return (
// 			<button onClick={onLogin}>Login</button>
// 		)
// 	}
// }

const LoginButton = ({ onLogin }) => (
	<button onClick={onLogin} className='login-button'>{localStorage.isLoggedIn === "true" ? 'Log out' : 'Log in'}</button>
	
)

export default LoginButton