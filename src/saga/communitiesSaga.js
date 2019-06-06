import { put, takeLatest, all, call } from 'redux-saga/effects'

import { 
	communitiesGetRequest, 
	communitiesGetSuccess, 
	communitiesGetFail, 
	wallGetRequest, 
	wallGetSuccess, 
    wallGetFail 
} from '../actions/communitiesActions'
import { apiCall } from '../api'

function* renderCommunities() {
    try {
        const r = yield apiCall({ 
            method: 'groups.get', 
            params: {extended: 1, count: 999, fields: 'activity,members_count'} 
        })
        
        if (!r.error) {
            yield put(communitiesGetSuccess(r.response))
        } else {
            throw new Error(r.error.error_msg)
        }
    } catch (error) {
        yield put(communitiesGetFail(error))
        yield localStorage.isLoggedIn = 'false'
    }
}

function* watchRenderCommunities() {
	yield takeLatest(communitiesGetRequest.type, renderCommunities)
}

function* onWallGetRequest(action) {
    try {
        const r = yield apiCall({ 
            method: 'wall.get', 
            params: {domain: action.name, count: 10, extended: 1} 
        })
        
        if (!r.error) {
            yield put(wallGetSuccess(r.response))
        } else {
            throw new Error(r.error.error_msg)
        }
    } catch (error) {
        yield put(wallGetFail(error))
    }
}

function* watchOnWallGetRequest() {
    yield takeLatest(wallGetRequest().type, onWallGetRequest)
}

export default function* communitiesSaga() {
    yield all([
        watchRenderCommunities(), 
        watchOnWallGetRequest()
    ])
}