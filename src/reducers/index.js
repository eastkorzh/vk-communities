import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL } from "../actions/LoginActions";

export default function rootReducer(state = {
    isFetching: false,
    isLoggedIn: false,
}, action) {
    switch (action.type) {
        case 'GET_USER':
            return console.log('j')
        case LOGIN_REQUEST:
            return {
                ...state,
                isFetching: true,
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isFetching: false,
                isLoggedIn: true,
            }
        case LOGIN_FAIL:
            return {
                ...state,
                isFetching: false,
                isLoggedIn: false,
            }
        default:
            return state
    }
}
