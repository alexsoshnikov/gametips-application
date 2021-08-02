import {AuthAction} from "../actions/AuthAction";
import {AuthActionTypes} from "../actions-types/AuthActionTypes";

const initialState = {
    response: {},
    error: {},
    isAuth: false,
    isLoading: false
}

export const AuthReducer = (state = initialState, action: AuthAction) => {
    switch (action.type) {
        case AuthActionTypes.SET_LOADING:
            return {...state, isLoading: true}

        case AuthActionTypes.AUTH_SUCCESS:
            return {response: action.payload, isLoading: false, isAuth: true, error: {}}

        case AuthActionTypes.AUTH_ERROR:
            return {...state, isLoading: false, isAuth: false, error: action.payload}

        default:
            return state
    }
}