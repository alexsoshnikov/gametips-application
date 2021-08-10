import {AuthActionTypes} from "../actions-types/AuthActionTypes";
import axios from "axios";
import $api from "../../http/axios";

export const login = (email, password) => {
    return async dispatch => {
        setLoading()
        try {
            const response = await $api.post('/auth/login', {email, password})
            localStorage.setItem('token', response.data.accessToken);
            dispatch(authSuccess(response))
        } catch (error) {
            dispatch(authError(error))
        }
    }
}

export const registration = (email, password, username) => {
    return async dispatch => {
        setLoading()
        try {
            const response = await $api.post('/auth/registration', {email, password})
            localStorage.setItem('token', response.data.accessToken);
            dispatch(authSuccess(response))
        } catch (error) {
            dispatch(authError(error))
        }
    }
}

export const checkAuth = () => {
    return async dispatch => {
        setLoading()
        try {
            const response = await axios.get(`${process.env.REACT_APP_SERVER_URI}/auth/refresh`, {withCredentials: true})
            localStorage.setItem('token', response.data.accessToken);
            dispatch(authSuccess(response))
        } catch (error) {
            dispatch(authError(error))
        }
    }
}

export const logout = () => {
    return async dispatch=> {
        setLoading()
        try {
            await $api.post('/auth/logout')
            localStorage.removeItem('token');
            dispatch({type: AuthActionTypes.LOGOUT_SUCCESS})
        } catch (error) {
            dispatch(authError(error))
        }
    }
}

export const authSuccess = payload => {
    return {
        type: AuthActionTypes.AUTH_SUCCESS,
        payload: payload.data
    }
}

export const authError = error => {
    return {
        type: AuthActionTypes.AUTH_ERROR,
        payload: {
            message: error.response?.data?.message || "Unknown error",
            status: error.response?.status || "Unknown status"
        }
    }
}

export const setLoading = () => {
    return {type: AuthActionTypes.SET_LOADING}
}