export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'
export const APP_MOUNTED = 'APP_MOUNTED'

export const appMounted = {
    type: APP_MOUNTED,
}

export const loginRequest = {
    type: LOGIN_REQUEST,
}

export const loginSuccess = (token) => ({
    type: LOGIN_SUCCESS,
    access_token: token,
})

export const loginFail = {
    type: LOGIN_FAIL,
}

