import {combineReducers} from "redux";
import {usersReducer} from "./users.reducer";
import {postsReducer} from "./posts.reducer";
import {userReducer} from "./user.reducer";

export const reducers = combineReducers({users: usersReducer, posts: postsReducer, user: userReducer});