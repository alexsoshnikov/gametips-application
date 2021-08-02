import {Dispatch} from "redux"
import {AuthActionTypes} from "../actions-types/AuthActionTypes";
import {AuthAction} from "../actions/AuthAction";
import $api from "../../http/axios";
import {IAuthResponse} from "../../models/IAuthResponse";
import {AxiosResponse} from "axios";
import {IError} from "../../models/IError";

export const login = (email: string, password: string) => {
    return async (dispatch: Dispatch<AuthAction>) => {
        dispatch({
            type: AuthActionTypes.SET_LOADING
        })

        try {
            const response = await $api.post<IAuthResponse>('/auth/login', {email, password})
            localStorage.setItem('token', response.data.accessToken);
            dispatch(authSuccess(response))
        } catch (error) {
            dispatch(authError({
                message: error.response?.data?.message,
                status: error.response?.status
            }))
        }
    }
}

export const authSuccess = (payload: AxiosResponse<IAuthResponse>) => {
    return {
        type: AuthActionTypes.AUTH_SUCCESS,
        payload: payload.data
    }
}
export const authError = (payload: IError) => {
    return {
        type: AuthActionTypes.AUTH_ERROR,
        payload
    }
}
