import React from 'react'
import { connect } from 'react-redux'

import { loginRequest, loginButtonMounted } from '../actions/LoginActions'
import LoginButton from '../components/LoginButton'
import ProfileCard from '../components/ProfileCard'

//localStorage.setItem('isLoggedIn', false)

class App extends React.Component {
	componentDidUpdate() {
		
		console.log(localStorage.isLoggedIn)
	}

	render() {
		const { state, onLogin, setLoginButtonMounted } = this.props

		return (
			<div>
				{localStorage.isLoggedIn === 'false' &&
					<LoginButton 
						state={state} 
						onLogin={onLogin}
						setLoginButtonMounted={setLoginButtonMounted}
					/>
				}
				{localStorage.isLoggedIn === 'true' &&
					<ProfileCard 
						state={state} 
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