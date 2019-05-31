export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'
export const LOGIN_BUTTON_MOUNTED = 'LOGIN_BUTTON_MOUNTED'

export const USER_GET_REQUEST = 'USER_GET_REQUEST'
export const USER_GET_SUCCESS = 'USER_GET_SUCCESS'
export const USER_GET_FAIL = 'USER_GET_FAIL'


export const loginButtonMounted = {
    type: LOGIN_BUTTON_MOUNTED,
}

export const loginRequest = {
    type: LOGIN_REQUEST,
}

export const loginSuccess = {
    type: LOGIN_SUCCESS,
}

export const loginFail = {
    type: LOGIN_FAIL,
}


export const userGetRequest = {
    type: USER_GET_REQUEST,
}

export const userGetSuccess = {
    type: USER_GET_SUCCESS,
}

export const userGetFail = (error) => ({
    type: USER_GET_FAIL,
    error,
})
