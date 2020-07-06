/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import questionReducer from "./questionReducer";
import userReducer from "./userReducer";
import loginReducer from "./loginReducer";

/**
 * Root Reducer
 */
export default function createReducer() {
    const rootReducer = combineReducers({
        questions: questionReducer,
        users: userReducer,
        authedUser: loginReducer
    });

    return rootReducer;
}