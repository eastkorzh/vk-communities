import React from 'react'

export default class LoginButton extends React.Component {
	componentDidMount() {
		const { setLoginButtonMounted } = this.props
		setLoginButtonMounted()
	}

	render() {
		const { onLogin} = this.props

		return (
			<button onClick={onLogin}>Login</button>
		)
	}
}