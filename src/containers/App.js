import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'

import { 
	loginRequest, 
	loginButtonMounted,
} from '../actions/LoginActions'
import { communitiesGetRequest, wallGetRequest } from '../actions/communitiesActions'
import LoginButton from '../components/LoginButton'
import ProfileCard from '../components/ProfileCard'
import Communities from '../components/Communities'
import Wall from '../components/Wall'

//localStorage.setItem('isLoggedIn', false)

class App extends React.Component {
	componentDidMount() {
		const { communitiesGetRequest, state } = this.props
	
		if (localStorage.isLoggedIn === 'true' && !state.communities.length) {
			communitiesGetRequest()
		}
	}
	

	render() {
		const { 
			state, 
			onLogin, 
			setLoginButtonMounted,
			wallGetRequest,
		} = this.props

		return (
			<div className='app-grid'>
				<div className='logged-user'>
					{localStorage.isLoggedIn === 'true' &&
						<ProfileCard 
							state={localStorage} 
						/>
					}
					<LoginButton 
						state={state} 
						onLogin={onLogin}
						setLoginButtonMounted={setLoginButtonMounted}
					/>
				</div>
				<div className='groups-grid'>
					{localStorage.isLoggedIn === 'true' &&
						<Route exact path='/' render={
							() => <Communities
								state={state}
								wallGetRequest={wallGetRequest}
							/>}
						/>
					}
				</div>
					<Route path='/wall' render={
						() => <Wall 
							state={state}
							wallGetRequest={wallGetRequest}
						/>
					} />
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

	wallGetRequest: (name) => dispatch(wallGetRequest(name)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)