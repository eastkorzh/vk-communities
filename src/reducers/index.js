import { 
	LOGIN_REQUEST, 
	LOGIN_SUCCESS, 
	LOGIN_FAIL, 
	USER_GET_REQUEST, 
	USER_GET_SUCCESS, 
	USER_GET_FAIL,
	
 } from "../actions/LoginActions";

import {
	COMMUNITIES_GET_REQUEST,
	COMMUNITIES_GET_SUCCESS,
	COMMUNITIES_GET_FAIL,
} from '../actions/communitiesActions'

export default function rootReducer(state = {
	isFetching: false,
	errors: [],
	communities: [],
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
			}
		case LOGIN_FAIL:
			return {
				...state,
				isFetching: false,
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
			}
		case USER_GET_FAIL:
			return {
				...state,
				isFetching: false,
				//errors: state.errors.concat(action.error)
			}
		case COMMUNITIES_GET_REQUEST:
			return {
				...state,
				isFetching: true,
			}
		case COMMUNITIES_GET_SUCCESS:
			return {
				...state,
				isFetching: false,
				communities: action.response.items
			}
		case COMMUNITIES_GET_FAIL:
			return {
				...state,
				isFetching: false,
				//errors: state.errors.concat(action.error)
			}
		default:
			return state
	}
}
