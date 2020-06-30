import {LOGIN} from "../constants/Login";

/**
 * Login Reducer
 * @param state
 * @param action
 * @returns {string|*}
 */
export default function loginReducer (state='', action) {
    switch (action.type) {
        case LOGIN:
            return action.user
        default:
            return state
    }
}