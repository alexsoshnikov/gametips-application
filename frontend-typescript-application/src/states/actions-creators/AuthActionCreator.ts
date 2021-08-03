import {Dispatch} from "redux"
import {AuthActionTypes, AuthAction} from "../actions-types/AuthActionTypes";
import $api from "../../http/axios";
import {IAuthResponse} from "../../models/states/IAuthResponse";
import axios, {AxiosResponse} from "axios";

export const login = (email: string, password: string) => {
    return async (dispatch: Dispatch<AuthAction>) => {
        dispatch({type: AuthActionTypes.SET_LOADING})
        try {
            const response = await $api.post<IAuthResponse>('/auth/login', {email, password})
            localStorage.setItem('token', response.data.accessToken);
            dispatch(authSuccess(response))
        } catch (error) {
            dispatch(authError(error))
        }
    }
}

export const registration = (email: string, password: string, username: string) => {
    return async (dispatch: Dispatch<AuthAction>) => {
        dispatch({type: AuthActionTypes.SET_LOADING})
        try {
            const response = await $api.post<IAuthResponse>('/auth/registration', {email, password})
            localStorage.setItem('token', response.data.accessToken);
            dispatch(authSuccess(response))
        } catch (error) {
            dispatch(authError(error))
        }
    }
}

export const checkAuth = () => {
    return async (dispatch: Dispatch<AuthAction>) => {
        dispatch({type: AuthActionTypes.SET_LOADING})
        try {
            const response = await axios.get<IAuthResponse>(`${process.env.REACT_APP_SERVER_URI}/auth/refresh`, {withCredentials: true})
            localStorage.setItem('token', response.data.accessToken);
            dispatch(authSuccess(response))
        } catch (error) {
            dispatch(authError(error))
        }
    }
}

export const logout = () => {
    return async (dispatch: Dispatch<AuthAction>) => {
        dispatch({type: AuthActionTypes.SET_LOADING})
        try {
            await $api.post('/auth/logout')
            localStorage.removeItem('token');
            dispatch({type: AuthActionTypes.LOGOUT_SUCCESS})
        } catch (error) {
            dispatch(authError(error))
        }
    }
}

export const authSuccess = (payload: AxiosResponse<IAuthResponse>) => {
    return {
        type: AuthActionTypes.AUTH_SUCCESS,
        payload: payload.data
    }
}
export const authError = (error: any) => {
    return {
        type: AuthActionTypes.AUTH_ERROR,
        payload: {
            message: error.response?.data?.message || "Unknown error",
            status: error.response?.status || "Unknown status"
        }
    }
}