import {RECEIVE_USERS} from "../constants/User";

/**
 * Users Reducer
 * @param state
 * @param action
 * @returns {{}}
 */
export default function users(state={}, action){
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}