import React from 'react'

import { loginRequest, LOGIN_REQUEST } from '../actions/LoginActions'
import { connect } from 'react-redux';

// const App = ({ getUser }) => (
//     <button onClick={getUser}>Get user</button>
// )

class App extends React.Component {
    // onLogin = (e) => {
    //     e.preventDefault();
    //     const { dispatch } = this.props

    //     dispatch(LOGIN_REQUEST)
    // }

    render() {
        const { onLogin } = this.props
        return (
            <button onClick={onLogin}>Login</button>
        )
    }
}

const mapStateToProps = state => ({
    
})

const mapDispatchToProps = (dispatch) => ({
    onLogin: () => dispatch(loginRequest)
})

export default connect(mapStateToProps, mapDispatchToProps)(App)