import {AuthActionTypes} from "../actions-types/AuthActionTypes";

const initialState = {
    response: null,
    error: null,
    isAuth: false,
    isLoading: false
}

export const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case AuthActionTypes.SET_LOADING:
            return {...state, isLoading: true}

        case AuthActionTypes.AUTH_SUCCESS:
            return { response: action.payload, isLoading: false, isAuth: true, error: null}

        case AuthActionTypes.AUTH_ERROR:
            return {...state, isLoading: false, isAuth: false, error: action.payload}

        case AuthActionTypes.LOGOUT_SUCCESS:
            return {isLoading: false, isAuth: false, error: null, response: null}

        default:
            return state
    }
}