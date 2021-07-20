import { types } from "../types/types";

const initialState = {
    
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.authLogin:
            return {
                ...state,
                ...action.payload
            };
    
        default:
            return state;
    }
}