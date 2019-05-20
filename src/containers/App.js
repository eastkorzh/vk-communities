import React from 'react'
import { connect } from 'react-redux'

import { loginRequest, loginButtonMounted } from '../actions/LoginActions'
import LoginButton from '../components/LoginButton'

class App extends React.Component {
	componentDidUpdate() {
		//const { state } = this.props
		//console.log(state)
	}

	render() {
		const { state, onLogin, setLoginButtonMounted } = this.props

		return (
			<div>
				{!state.isLoggedIn &&
					<LoginButton 
						state={state} 
						onLogin={onLogin}
						setLoginButtonMounted={setLoginButtonMounted}
					/>
				}
			</div>
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

	setLoginButtonMounted: () => {
		dispatch(loginButtonMounted)
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(App)