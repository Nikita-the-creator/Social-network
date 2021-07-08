import { authAPI, usersApi } from "../api";
import defaultAvatar from '../../assets/images/defaultAvatar.png'

const SET_USER_DATA = 'SET_USER_DATA'
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    defaultAvatar: { defaultAvatar },
    captcha: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data
            }
        }
        case GET_CAPTCHA_URL_SUCCESS:{
            return {
                ...state,
                ...action.payload
            }
        }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    data: { userId, email, login, isAuth }
})
export const getCaptchaSuccess = (captcha) => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    payload: {captcha}
})

export const authMeThunkCreator = () => async (dispatch) => {
    const response = await usersApi.authMe()
    if (response.data.resultCode === 0) {
        const { id, email, login, captcha } = response.data.data;
        dispatch(setAuthUserData(id, email, login, true,captcha))
    }
}

export const getCaptchaUrl = () => async (dispatch) => {
    const response = await authAPI.captchaUrl()
    const captchaUrl = response.data.url
    dispatch(getCaptchaSuccess(captchaUrl))
}

export const logout = () => async (dispatch) => {
    const response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export default authReducer;