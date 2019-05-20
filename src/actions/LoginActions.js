export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'
export const APP_MOUNTED = 'APP_MOUNTED'

export const USER_GET_REQUEST = 'USER_GET_REQUEST'
export const USER_GET_SUCCESS = 'USER_GET_SUCCESS'
export const USER_GET_FAIL = 'USER_GET_FAIL'


export const appMounted = {
    type: APP_MOUNTED,
}

export const loginRequest = {
    type: LOGIN_REQUEST,
}

export const loginSuccess = (user_id, access_token) => ({
    type: LOGIN_SUCCESS,
    access_token,
    user_id,
})

export const loginFail = {
    type: LOGIN_FAIL,
}


export const userGetRequest = {
    type: USER_GET_REQUEST,
}

export const userGetSuccess = (first_name, last_name, photo_400 = '') => ({
    type: USER_GET_SUCCESS,
    first_name,
    last_name,
    photo_400,
})

export const userGetFail = (error) => ({
    type: USER_GET_FAIL,
    error,
})
