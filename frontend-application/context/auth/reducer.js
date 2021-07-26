import {
    AUTH_LOGOUT,
    SET_LOADING,
    REGISTER_ERROR,
    AUTH_SUCCESS,
    LOGIN_ERROR
} from "../types";

const handlers = {
    [AUTH_SUCCESS]: (state, {payload}) => ({...state, user: payload, isAuth: true, loading: false}),
    [REGISTER_ERROR]: state => ({...state, isRegisterError: true, loading: false}),
    [LOGIN_ERROR]: state => ({...state, isLoginError: true, loading: false}),
    [AUTH_LOGOUT]: state => ({...state, user: {}, isAuth: false, loading: false}),
    [SET_LOADING]: state => ({...state, loading: true}),
    DEFAULT: state => state
}

export const AuthReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}