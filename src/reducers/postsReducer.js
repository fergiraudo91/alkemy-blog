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
            console.log(action.payload);
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
        case types.postClearAll:
            return initialState
        default:
            return state;
    }
}