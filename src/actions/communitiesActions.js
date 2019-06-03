export const COMMUNITIES_GET_REQUEST = 'COMMUNITIES_GET_REQUEST'
export const COMMUNITIES_GET_SUCCESS = 'COMMUNITIES_GET_SUCCESS'
export const COMMUNITIES_GET_FAIL = 'COMMUNITIES_GET_FAIL'

export const DISABLE_COMMUNITIE_REQUEST = 'DISABLE_COMMUNITIE_REQUEST'
export const DISABLE_COMMUNITIE_SUCCESS = 'DISABLE_COMMUNITIE_SUCCESS'
export const DISABLE_COMMUNITIE_FAIL = 'DISABLE_COMMUNITIE_FAIL'

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


export const disableCommunitieRequest = (id) => ({
    type: DISABLE_COMMUNITIE_REQUEST,
    id,
})

export const disableCommunitieSuccess = (r) => ({
    type: DISABLE_COMMUNITIE_SUCCESS,
    response: r,
})

export const disableCommunitieFail = (errors) => ({
    type: DISABLE_COMMUNITIE_FAIL,
    errors,
})