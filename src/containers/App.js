import React from 'react'
import { connect } from 'react-redux'

import { 
	loginRequest, 
	loginButtonMounted,
	 } from '../actions/LoginActions'
import { communitiesGetRequest, disableCommunitieRequest } from '../actions/communitiesActions'
import LoginButton from '../components/LoginButton'
import ProfileCard from '../components/ProfileCard'
import Communities from '../components/Communities'

//localStorage.setItem('isLoggedIn', false)

class App extends React.Component {
	componentDidMount() {
		const { communitiesGetRequest, state } = this.props
	
		if (localStorage.isLoggedIn === 'true' && !state.communities.length) {
			communitiesGetRequest()
		}
	}
	
	componentDidUpdate() {
	}

	render() {
		const { 
			state, 
			onLogin, 
			setLoginButtonMounted,
			disableCommunitieRequest } = this.props

		return (
			<div>
				{(localStorage.isLoggedIn === 'false' || !localStorage.isLoggedIn) &&
					<LoginButton 
						state={state} 
						onLogin={onLogin}
						setLoginButtonMounted={setLoginButtonMounted}
					/>
				}
				{localStorage.isLoggedIn === 'true' &&
					<ProfileCard 
						state={localStorage} 
					/>
				}
				{localStorage.isLoggedIn === 'true' &&
					<Communities
						state={state}
						disableCommunitieRequest={disableCommunitieRequest} 
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
	onLogin: () => dispatch(loginRequest),

	setLoginButtonMounted: () => dispatch(loginButtonMounted),

	communitiesGetRequest: () => dispatch(communitiesGetRequest),

	disableCommunitieRequest: (id) => dispatch(disableCommunitieRequest(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)