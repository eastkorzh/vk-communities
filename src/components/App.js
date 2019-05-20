import React from 'react'

import { loginRequest, appMounted } from '../actions/LoginActions'
import { connect } from 'react-redux';

class App extends React.Component {
	componentDidUpdate() {
		const { state } = this.props
		console.log(state)
	}

	render() {
		const { state, onLogin, setAppMounted } = this.props

		return (
			<div>
				{!state.isLoggedIn &&
					<LoginButton 
						state={state} 
						onLogin={onLogin}
						setAppMounted={setAppMounted}
					/>
				}
			</div>
		)
	}
}

class LoginButton extends React.Component {
	componentDidMount() {
		const { setAppMounted } = this.props
		setAppMounted()
	}

	render() {
		const { onLogin} = this.props

		return (
			<button onClick={onLogin}>Login</button>
		)
	}
}

const mapStateToProps = (state) => ({
	state,
})

const mapDispatchToProps = (dispatch) => ({
	onLogin: () => {
		dispatch(loginRequest)
	},

	setAppMounted: () => {
		dispatch(appMounted)
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(App)