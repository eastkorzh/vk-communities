import { put, takeEvery, all, call, select } from 'redux-saga/effects'
import { loginRequest, loginSuccess, loginFail, appMounted } from '../actions/LoginActions'

const url = 'https://oauth.vk.com/authorize?client_id=6983001&display=page&redirect_uri=http://localhost:3000//callback&scope=friends&response_type=token&v=5.95&state=123456'

export function* onAppMounted() {
	let access_token = ''

	yield call((href) => {
		const url = new URL(href)
		const start = url.hash.indexOf('=') + 1
		const end = url.hash.indexOf('&')

		access_token = url.hash.slice(start, end)
		
		if (access_token.length > 50) {
			put(loginSuccess)
		}
	}, window.location.href)

	if (access_token.length > 50) {
		yield put(loginSuccess(access_token))
	} else if (access_token.length !== 0) {
		yield put(loginFail)
	}

	const token = yield select((state) => state.access_token)

	yield console.log(token)
}

export function* watchOnAppMounted() {
	yield takeEvery(appMounted.type, onAppMounted)
}

export function* onLogin() {
	yield call((url) => {
		window.location.replace(url)
	}, url)
}

export function* watchOnLogin() {
	yield takeEvery(loginRequest.type, onLogin)
}

export default function* rootSaga() {
	yield all([
		watchOnLogin(),
		watchOnAppMounted(),
	])
}