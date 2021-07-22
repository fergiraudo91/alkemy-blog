import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { postReducer } from "./postsReducer";


export const rootReducer = combineReducers({
    auth: authReducer,
    posts: postReducer
})