import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'

import { 
	loginRequest, 
} from '../actions/LoginActions'
import { communitiesGetRequest, wallGetRequest, getCommentsRequest } from '../actions/communitiesActions'
import LoginButton from '../components/LoginButton'
import ProfileCard from '../components/ProfileCard'
import Communities from '../components/Communities'
import Wall from '../components/Wall'
import Back from '../components/Back'
import Comments from '../components/Comments'


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
			...rest
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
						onLogin={rest.onLogin}
					/>
				</div>
				<Route exact path='/' render={
					() => <h1 className='groups-h1'>Группы</h1>
				} />
				<div className='groups-grid'>
					{localStorage.isLoggedIn === 'true' &&
						<Route exact path='/' render={
							() => <Communities
								state={state}
								wallGetRequest={rest.wallGetRequest}
							/>}
						/>
					}
				</div>
				<Route path='/wall' render={
					() => <Back 
						state={state}
					/>
				} />
				<Route exact path='/wall' render={
					() => <Wall 
						state={state}
						wallGetRequest={rest.wallGetRequest}
						getCommentsRequest={rest.getCommentsRequest}
					/>
				} />
				<Route path='/wall/comments' render={
					() => <Comments 
						state={state}
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

	communitiesGetRequest: () => dispatch(communitiesGetRequest),

	wallGetRequest: (name) => dispatch(wallGetRequest(name)),

	getCommentsRequest: (owner_id, post_id) => dispatch(getCommentsRequest(owner_id, post_id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)