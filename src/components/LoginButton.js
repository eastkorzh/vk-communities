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
	<button onClick={onLogin}>{localStorage.isLoggedIn === "false" ? 'Login' : 'Logout'}</button>
)

export default LoginButton