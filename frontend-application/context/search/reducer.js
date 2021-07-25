import {ACTIVE_SEARCHING, HIDE_SEARCHING} from "../types";

const handlers = {
    [ACTIVE_SEARCHING]: (state, action) => action.payload,

    DEFAULT: state => state
}

export const SearchReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}