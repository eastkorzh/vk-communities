import { put, takeLatest, all, call } from 'redux-saga/effects'

import { 
	communitiesGetRequest, 
	communitiesGetSuccess, 
	communitiesGetFail, 
	disableCommunitieRequest, 
	disableCommunitieSuccess, 
	disableCommunitieFail } from '../actions/communitiesActions'
import { get } from '../api'
import requestUrl from '../api/urls'

function* renderCommunities() {
	try {
		const url = requestUrl({ methodName: 'groups.get', params: 'extended=1&count=999&fields=is_hidden_from_feed'})
		const r = yield get({ url: url}).then(r => r.response)

		if (r) {
			yield put(communitiesGetSuccess(r))
		} else {
			throw new Error('Groups get error')
		}
	} catch (error) {
		yield put(communitiesGetFail(error))
		yield localStorage.isLoggedIn = 'false'
	}
}

function* watchRenderCommunities() {
	yield takeLatest(communitiesGetRequest.type, renderCommunities)
}


function* onDisableCommunitieRequest(action) {
	try {
		console.log(action.id)
		const id = action.id
		const url = requestUrl({ methodName: 'newsfeed.addBan', params: `${id}`})
		const r = yield get({ url: url})

		if (!r.error) {
			yield put(disableCommunitieSuccess(r))
			console.log(r)
		} else {
			throw new Error('Disable communitie error')
		}
	} catch (error) {
		yield put(disableCommunitieFail(error))
	}
}

function* watchOnDisableCommunitieRequest() {
	yield takeLatest(disableCommunitieRequest().type, onDisableCommunitieRequest)
}

export default function* communitiesSaga() {
	yield all([watchRenderCommunities(), watchOnDisableCommunitieRequest()])
}