import {GET_GAMECATEGORIES, SET_LOADING} from "../types";

const handlers = {
    [GET_GAMECATEGORIES]: (state, {payload}) => ({...state, categories: payload, loading: false}),
    [SET_LOADING]: state => ({...state, loading: true}),
    DEFAULT: state => state
}

export const GameCategoriesReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}