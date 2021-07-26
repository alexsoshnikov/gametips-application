import React, {useReducer} from "react";
import {AuthContext} from "./context";
import {AuthReducer} from "./reducer";
import {
    SET_LOADING,
    LOGIN_ERROR,
    AUTH_SUCCESS,
    REGISTER_ERROR,
    AUTH_LOGOUT
} from "../types";
import $api from "../../http/axios";

export const AuthState = ({children}) => {
    const initialState = {
        user: {},
        isLoginError: false,
        isRegisterError: false,
        loading: false
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState)

    const login = async (email, password) => {
        setLoading()
        try {
            const response = await $api.post('/auth/login', {email, password})
            localStorage.setItem('token', response.data.accessToken)
            dispatch({
                type: AUTH_SUCCESS,
                payload: response.data.user
            })
        } catch (error) {
            dispatch({type: LOGIN_ERROR})
            console.error("Login auth error: ", error.response?.data?.message)
        }
    }

    const register = async (email, password) => {
        setLoading()
        try {
            const response = await $api.post('/auth/registration', {email, password})
            localStorage.setItem('token', response.data.accessToken)
            dispatch({
                type: AUTH_SUCCESS,
                payload: response.data.user
            })
        } catch (error) {
            dispatch({type: REGISTER_ERROR})
            console.error("Registration error: ", error.response?.data?.message)
        }
    }

    const logout = async () => {
        setLoading()
        try {
            const response = await $api.post('/auth/logout')
            localStorage.removeItem('token')
            dispatch({type: AUTH_LOGOUT})
        } catch (error) {
            console.error("Registration error: ", error.response?.data?.message)
        }
    }

    const checkAuth = async () => {
        //....
    }

    const setLoading = () => dispatch({type: SET_LOADING})

    return (
        <AuthContext.Provider value={{
           ...state, login, register, logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}