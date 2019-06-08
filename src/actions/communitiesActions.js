export const COMMUNITIES_GET_REQUEST = 'COMMUNITIES_GET_REQUEST'
export const COMMUNITIES_GET_SUCCESS = 'COMMUNITIES_GET_SUCCESS'
export const COMMUNITIES_GET_FAIL = 'COMMUNITIES_GET_FAIL'

export const WALL_GET_REQUEST = 'WALL_GET_REQUEST'
export const WALL_GET_SUCCESS = 'WALL_GET_SUCCESS'
export const WALL_GET_FAIL = 'WALL_GET_FAIL'

export const GET_COMMENTS_REQUEST = 'GET_COMMENTS_REQUEST'
export const GET_COMMENTS_SUCCESS = 'GET_COMMENTS_SUCCESS'
export const GET_COMMENTS_FAIL = 'GET_COMMENTS_FAIL'


export const communitiesGetRequest = {
    type: COMMUNITIES_GET_REQUEST,
}

export const communitiesGetSuccess = (r) => ({
    type: COMMUNITIES_GET_SUCCESS,
    response: r,
})

export const communitiesGetFail = (errors) => ({
    type: COMMUNITIES_GET_FAIL,
    errors,
})


export const wallGetRequest = (pickedGroup) => ({
    type: WALL_GET_REQUEST,
    pickedGroup: {...pickedGroup},
})

export const wallGetSuccess = (r) => ({
    type: WALL_GET_SUCCESS,
    response: r,
})

export const wallGetFail = (errors) => ({
    type: WALL_GET_FAIL,
    errors,
})

export const getCommentsRequest = (owner_id, post_id) => ({
    type: GET_COMMENTS_REQUEST,
    owner_id,
    post_id,
})

export const getCommentsSuccess = (r) => ({
    type: GET_COMMENTS_SUCCESS,
    response: r,
})

export const getCommentsFail = (errors) => ({
    type: GET_COMMENTS_FAIL,
    errors,
})