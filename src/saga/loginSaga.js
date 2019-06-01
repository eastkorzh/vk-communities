import { put, takeLatest, all, call } from 'redux-saga/effects'
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

const homeUrl = 'http://localhost:3000/'
const url = `https://oauth.vk.com/authorize?client_id=6983001&display=page&redirect_uri=${homeUrl}//callback&scope=friends,stories,groups,wall&response_type=token&v=5.95&state=123456`
const error500 = '500 Shit happens'

//localStorage.setItem('isLoggedIn', false)

export function requestLink(
	methodName = 'users.get', 
	params = 'user_ids=210700286&fields=photo_400',  
	token = '',
	v = '5.95')  {

    return `https://api.vk.com/method/${methodName}?${params}&access_token=${token}&v=${v}`
}

export function* onLoginButtonMounted() {
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
			yield call(() => {
				localStorage.setItem('user_id', user_id)
				localStorage.setItem('access_token', access_token)
				localStorage.setItem('isLoggedIn', true)
			})
			yield put(loginSuccess)
		} else if (access_token.length !== 0) {
			yield localStorage.setItem('isLoggedIn', false)
			yield put(loginFail)
		}
}

export function* watchOnLoginButtonMounted() {
	yield takeLatest(loginButtonMounted.type, onLoginButtonMounted)
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
	const rl = requestLink('users.get', `user_ids=${localStorage.user_id}&fields=photo_400`, localStorage.access_token )
	
	yield put(userGetRequest)	
	
	try {
		const r = yield get({url: rl}).then((r) => r.response[0])
		const { id } = r

		if (id) {
			yield call(() => {
				localStorage.setItem('first_name', r.first_name)
				localStorage.setItem('last_name', r.last_name)
				localStorage.setItem('photo_400', r.photo_400)
			})
			window.location.replace(homeUrl)
			yield put(userGetSuccess)
		} else {
			yield localStorage.setItem('isLoggedIn', false)
			throw new Error(error500)
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
		watchOnLoginButtonMounted(),
		watchUsersGet(),
	])
}