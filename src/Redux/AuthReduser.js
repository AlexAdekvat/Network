import { AuthAPI, securityAPI } from "../API/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = 'network/auth/SET_USER_DATA';
const CAPTCHA_URL_SUCCESS = 'network/auth/CAPTCHA_URL_SUCCESS'



let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl:null //if null then captcha isn't required
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            case CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload,

            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA, payload:
        { userId, email, login, isAuth }
});

export const getCaptchaUrlSuccess = (captchaUrl) => ({type: CAPTCHA_URL_SUCCESS, payload:{captchaUrl}});

export const getAuthUserData = () => async (dispatch) => {
    let response = await AuthAPI.me();
    if (response.data.resultCode === 0) {
        let { id, login, email } = response.data.data;
        dispatch(setAuthUserData(id, email, login, true))
    }
}
export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    let response = await AuthAPI.login(email, password, rememberMe, captcha);
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else  {
        if(response.data.resultCode === 10){
        dispatch(getCaptchaUrl());
        }
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some Error"
        dispatch(stopSubmit("login", { _error: message }));
    }
}
export const getCaptchaUrl = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url
        dispatch(getCaptchaUrlSuccess(captchaUrl));
    }

export const logout = () => async (dispatch) => {
    let response = await AuthAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}



export default authReducer;