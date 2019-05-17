import { put, takeEvery, all, call } from 'redux-saga/effects'
import { loginRequest, loginSuccess, loginFail } from '../actions/LoginActions'

function* handleLogin1() {
	// eslint-disable-next-line no-undef
	//yield VK.Auth.login();
	// eslint-disable-next-line no-undef
	const response = yield VK.Auth.getLoginStatus(r => console.log(r.session))
	yield console.log(response)
}

function dispatchSuccess() {
	console.log('dispatch')
}

function* handleLogin() {
	// eslint-disable-next-line no-undef
	//yield VK.Auth.login();
	// eslint-disable-next-line no-undef
	yield VK.Auth.login(r => {
		if (r.session) {
			console.log('r.success')
			onLogin.logSucc()
		} else {
			put(loginFail)
		}
	})
}
export function* onLogin() {
	yield call(handleLogin)
	this.logSucc =  put(loginSuccess)
}

export function* watchOnLogin() {
	yield takeEvery(loginRequest.type, onLogin)
}

export default function* rootSaga() {
	yield watchOnLogin()
}