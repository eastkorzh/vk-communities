import { put, takeLatest, all } from 'redux-saga/effects'

import { 
	communitiesGetRequest, 
	communitiesGetSuccess, 
	communitiesGetFail, 
	wallGetRequest, 
	wallGetSuccess, 
    wallGetFail,
    getCommentsRequest,
    getCommentsSuccess,
    getCommentsFail,
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
            params: {domain: action.pickedGroup.screen_name, count: 20, extended: 1} 
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

function* onGetCommentsRequest(action) {
    try {
        const r = yield apiCall({
            method: 'wall.getComments',
            params: {owner_id: action.owner_id, post_id: action.post_id, need_likes: 1, count: 999, extended: 1}
        })

        if (!r.error) {
            yield put(getCommentsSuccess(r.response))
        } else {
            throw new Error(r.error.error_msg)
        }
    } catch (error) {
        yield put(getCommentsFail(error))
    }
}  

function* watchOnGetCommentsRequest() {
    yield takeLatest(getCommentsRequest().type, onGetCommentsRequest)
}

export default function* communitiesSaga() {
    yield all([
        watchRenderCommunities(), 
        watchOnWallGetRequest(),
        watchOnGetCommentsRequest()
    ])
}