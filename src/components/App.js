import React from 'react'

import { loginRequest, appMounted } from '../actions/LoginActions'
import { connect } from 'react-redux';

// const App = ({ getUser }) => (
//     <button onClick={getUser}>Get user</button>
// )

// const App = ({ onLogin }) => (
// 	<button onClick={onLogin}>Login</button>
// )

class App extends React.Component {
	componentDidMount() {
		const { setAppMounted } = this.props
		setAppMounted()
	}

	render() {
		const { onLogin } = this.props

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
		// login is here because there is no way to run it in saga 
		// and it haven't any sense to use thunk with saga along for only one task
		// VK.Auth is VK Open Api's object
		// eslint-disable-next-line no-undef
		// VK.Auth.login(function(response) {
		//     if (response.session) {
		//       dispatch(loginSuccess(response.session))
		//     } else {
		//       dispatch(loginFail)
		//     }
		//   });
	},

	setAppMounted: () => {
		dispatch(appMounted)
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(App)