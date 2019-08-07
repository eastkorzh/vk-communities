import { all } from 'redux-saga/effects'

import loginSaga from './saga/loginSaga'
import communitiesSaga from './saga/communitiesSaga'

export default function* rootSaga() {
	yield all([
		loginSaga(),
		communitiesSaga(),
	])
}
