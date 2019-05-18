import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, APP_MOUNTED } from "../actions/LoginActions";

export default function rootReducer(state = {
    isFetching: false,
    isLoggedIn: false,
    access_token: '',
    firstName: '',
    lastName: '',
    avatar: '',
}, action) {
    switch (action.type) {
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
                access_token: action.access_token,
                // firstName: action.firstName,
                // lastName: action.lastName,
                // avatar: action.avatar,
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
