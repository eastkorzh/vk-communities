import { put, takeLatest, all } from 'redux-saga/effects'
import { 
	loginRequest,
	loginSuccess, 
	loginFail, 
	userGetRequest,
	userGetSuccess,
	userGetFail,
} from '../actions/LoginActions'

import { communitiesGetRequest } from '../actions/communitiesActions'

import { apiCall } from '../api'

export function* onLogin() {
	const login = () => {
		const loginRequest = () => (
			new Promise((resolve, reject) => {
				// eslint-disable-next-line no-undef
				VK.Auth.login((response) => {
					if (response.session) {
						resolve(response)
					} else {
						reject(response)
					}
				}, 270336)
			})
		)

		return loginRequest().then(
			response => response
		)
	}

	try {
		let r = ''
		if (localStorage.isLoggedIn === 'false' || !localStorage.isLoggedIn) {
			r = yield login()
		} else {
			localStorage.isLoggedIn = 'false'
		}

		if (r.session) {
			localStorage.isLoggedIn = 'true'
			localStorage.id = r.session.user.id
			
			yield put(loginSuccess)
		} else {
			throw new Error(r.error)
		}
	} catch (error) {
		yield put(loginFail)
	}
}

export function* watchOnLogin() {
	yield takeLatest(loginRequest.type, onLogin)
}


export function* usersGet() {
	try {
		yield put(userGetRequest)

		const r = yield apiCall({ 
			method: 'users.get', 
			params: {
				user_ids: localStorage.id, 
				fields: 'photo_200', 
				v:"5.95"}
			})
		
		if (r.response) {
			localStorage.photo = r.response[0].photo_200
			localStorage.first_name = r.response[0].first_name
			localStorage.last_name = r.response[0].last_name
			yield put(userGetSuccess)
			yield put(communitiesGetRequest)
		} else {
			throw new Error(r.error)
		}
	} catch (error) {
		yield put(userGetFail(error))
	}
}

export function* watchUsersGet() {
	yield takeLatest(loginSuccess.type, usersGet)
}


export default function* loginSaga() {
	yield all([
		watchOnLogin(),
		watchUsersGet(),
	])
}