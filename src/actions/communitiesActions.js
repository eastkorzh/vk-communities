export const COMMUNITIES_GET_REQUEST = 'COMMUNITIES_GET_REQUEST'
export const COMMUNITIES_GET_SUCCESS = 'COMMUNITIES_GET_SUCCESS'
export const COMMUNITIES_GET_FAIL = 'COMMUNITIES_GET_FAIL'

export const WALL_GET_REQUEST = 'WALL_GET_REQUEST'
export const WALL_GET_SUCCESS = 'WALL_GET_SUCCESS'
export const WALL_GET_FAIL = 'WALL_GET_FAIL'


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


export const wallGetRequest = (name) => ({
    type: WALL_GET_REQUEST,
    name,
})

export const wallGetSuccess = (r) => ({
    type: WALL_GET_SUCCESS,
    response: r,
})

export const wallGetFail = (errors) => ({
    type: WALL_GET_FAIL,
    errors,
})