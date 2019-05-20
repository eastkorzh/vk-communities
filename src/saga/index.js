import { put, takeLatest, all, call, select } from 'redux-saga/effects'
import { 
	loginRequest,
	loginSuccess, 
	loginFail, 
	loginButtonMounted,
	userGetRequest,
	userGetSuccess,
	userGetFail,
} from '../actions/LoginActions'

import { get } from '../api'

const url = 'https://oauth.vk.com/authorize?client_id=6983001&display=page&redirect_uri=http://localhost:3000//callback&scope=friends&response_type=token&v=5.95&state=123456'
//const homeUrl = 'http://localhost:3000/'
const error500 = '500 Shit happens'


export function requestLink(
	methodName = 'users.get', 
	params = 'user_ids=210700286&fields=photo_400',  
	token = '',
	v = '5.95')  {

    return `https://api.vk.com/method/${methodName}?${params}&access_token=${token}&v=${v}`
}

export function* onLoginAppMounted() {
	const state = yield select((state) => state)
	console.log(state)
	
	if (!state.isLoggedIn) { 
		let access_token = ''
		let user_id = ''

		yield call((href) => {
			const url = new URL(href)
			const tokenStart = url.hash.indexOf('=') + 1
			const tokenEnd = url.hash.indexOf('&')
			const idStart = url.hash.indexOf('_id=') + 4
			const idEnd = url.hash.indexOf('&state')

			access_token = url.hash.slice(tokenStart, tokenEnd)
			user_id = url.hash.slice(idStart, idEnd)
			
			}, window.location.href)

			if (access_token.length > 50) {
				yield put(loginSuccess(user_id, access_token))
			} else if (access_token.length !== 0) {
				yield put(loginFail)
			}
	}
}

export function* watchOnLoginButtonMounted() {
	yield takeLatest(loginButtonMounted.type, onLoginAppMounted)
}

export function* onLogin() {
	yield call((url) => {
		window.location.replace(url)
	}, url)
}

export function* watchOnLogin() {
	yield takeLatest(loginRequest.type, onLogin)
}

export function* usersGet() {
	const state = yield select((state) => state)
	const rl = requestLink('users.get', `user_ids=${state.user_id}&fields=photo_400`, state.access_token )
	
	yield put(userGetRequest)	
	
	try {
		const r = yield get({url: rl}).then((r) => r.response[0])
		const { id } = r

		if (id) {
			yield put(userGetSuccess(r.first_name, r.last_name, r.photo_400))
			//window.location.replace(homeUrl)
		} else {
			throw new Error(error500)
		}
	} catch (error) {
		yield put(userGetFail(error))
	}
}

export function* watchUsersGet() {
	yield takeLatest(loginSuccess().type, usersGet)
}

export default function* rootSaga() {
	yield all([
		watchOnLogin(),
		watchOnLoginButtonMounted(),
		watchUsersGet(),
	])
}