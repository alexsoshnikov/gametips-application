import React, {useReducer} from "react";
import {GameCategoriesContext} from "./context";
import {GameCategoriesReducer} from "./reducer";
import {GET_GAMECATEGORIES, SET_LOADING} from "../types";
import axios from "axios";

export const GameCategoriesState = ({children}) => {
    const initialState = {
        categories: [],
        loading: false
    }
    const [state, dispatch] = useReducer(GameCategoriesReducer, initialState)

    const getCategories = async () => {
        setLoading()

        const response = await  axios.get('')

        dispatch({
            type: GET_GAMECATEGORIES,
            payload: response.data
        })
    }

    const setLoading = () => dispatch({type: SET_LOADING})

    const {categories, loading} = state
    return (
        <GameCategoriesContext.Provider value={{setLoading, getCategories, categories, loading}}>
            {children}
        </GameCategoriesContext.Provider>
    )
}