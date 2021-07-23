import { types } from "../types/types";

const initialState = {
    posts: [],
    loading: true,
    currentPage: 1
};

export const postReducer = (state = initialState, action) => {
    const { payload } = action;
    switch (action.type) {
        case types.postGetAll:
            return {
                ...state,
                ...payload
            }

        case types.postDelete:
            return {
                ...state,
                posts: state.posts.filter(el => el.id !== action.payload)
            }

        case types.postAddNew:
            return{
                ...state,
                posts: [
                    ...state.posts,
                    action.payload
                ]
            }
            
        case types.postSetCurrentPage:
            return {
                ...state,
                currentPage: action.payload
            }
        case types.postUpdate:

        console.log(action.payload.id);
            return{
                ...state,
                posts: [
                    ...state.posts.map(el => el.id === action.payload.id ? action.payload : el)
                ],
                
            }
        case types.postClearAll:
            return initialState
        default:
            return state;
    }
}