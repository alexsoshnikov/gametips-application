export interface IAuthState {
    response: any,
    error: any,
    isAuth: boolean,
    isLoading: boolean
}

export enum AuthActionTypes {
    SET_LOADING = "SET_LOADING",
    AUTH_SUCCESS = "AUTH_SUCCESS",
    AUTH_ERROR = "AUTH_ERROR",
    LOGOUT_SUCCESS = "LOGOUT_SUCCESS"
}

interface AUTH_SUCCESS_ACTION {
    type: AuthActionTypes.AUTH_SUCCESS,
    payload: object
}

interface AUTH_ERROR_ACTION {
    type: AuthActionTypes.AUTH_ERROR,
    payload: object
}

interface SET_LOADING_ACTION {
    type: AuthActionTypes.SET_LOADING
}

interface SET_LOGOUT_ACTION {
    type: AuthActionTypes.LOGOUT_SUCCESS
}

export type AuthAction = AUTH_SUCCESS_ACTION | AUTH_ERROR_ACTION | SET_LOADING_ACTION | SET_LOGOUT_ACTION