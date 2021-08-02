import {AuthActionTypes} from "../actions-types/AuthActionTypes";

interface AUTH_SUCCESS_ACTION {
    type: AuthActionTypes.AUTH_SUCCESS,
    payload: any
}

interface AUTH_ERROR_ACTION {
    type: AuthActionTypes.AUTH_ERROR,
    payload: any
}

interface AUTH_LOADING_ACTION {
    type: AuthActionTypes.SET_LOADING
}

export type AuthAction = AUTH_LOADING_ACTION | AUTH_SUCCESS_ACTION | AUTH_ERROR_ACTION