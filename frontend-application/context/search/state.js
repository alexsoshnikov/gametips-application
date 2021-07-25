import React, {useReducer} from "react";
import {SearchContext} from "./context";
import {SearchReducer} from "./reducer";
import {ACTIVE_SEARCHING} from "../types";

export const SearchState = ({children}) => {
    const initialState = {
        search: [],
        loading: false
    }
    const [state, dispatch] = useReducer(SearchReducer, null)

    const hide = () => dispatch({type: ACTIVE_SEARCHING})

    const active = () => {
        dispatch({type: ACTIVE_SEARCHING})
    }

    const search = async value => {
        setLoading()

        dispatch({
            type: SEARCH_USERS,
            payload: response.data
        })
    }

    const getUser = async name => {
        setLoading()

        dispatch({
            type: GET_USER,
            payload: response.data
        })
    }

    const setLoading = () => dispatch({type: SET_LOADING})

    return (
        <SearchContext.Provider value={{hide, active, alert: state}}>
            {children}
        </SearchContext.Provider>
    )
}