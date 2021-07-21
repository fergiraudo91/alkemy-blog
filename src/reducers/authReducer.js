import { types } from "../types/types";

const initialState = {
    logged: false
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.authLogin:
            return {
                ...state,
                ...action.payload
            };

        case types.authLogout:
            return {
                ...initialState
            }
    
        default:
            return state;
    }
}