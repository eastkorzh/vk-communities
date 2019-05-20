import { 
	LOGIN_REQUEST, 
	LOGIN_SUCCESS, 
	LOGIN_FAIL, 
	USER_GET_REQUEST, 
	USER_GET_SUCCESS, 
	USER_GET_FAIL,
	
 } from "../actions/LoginActions";

export default function rootReducer(state = {
	isFetching: false,
	isLoggedIn: false,
	user_id: '',
	access_token: '',
	first_name: '',
	last_name: '',
	photo_400: '',
	errors: [],
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
				user_id: action.user_id,
				access_token: action.access_token,
			}
		case LOGIN_FAIL:
			return {
				...state,
				isFetching: false,
				isLoggedIn: false,
			}
		case USER_GET_REQUEST:
			return {
				...state,
				isFetching: true,
			}
		case USER_GET_SUCCESS:
			return {
				...state,
				isFetching: false,
				first_name: action.first_name,
				last_name: action.last_name,
				photo_400: action.photo_400,
			}
		case USER_GET_FAIL:
			return {
				...state,
				isFetching: false,
				errors: state.errors.push(action.error)
			}
		default:
			return state
	}
}
