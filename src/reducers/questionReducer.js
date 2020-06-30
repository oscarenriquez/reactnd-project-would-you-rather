import {RECEIVE_QUESTIONS, SAVE_QUESTION} from "../constants/Question";

/**
 * Questions Reducer
 * @param state
 * @param action
 * @returns {{}}
 */
export default function questions(state={}, action) {
    switch (action.type) {
        case SAVE_QUESTION:
            return {
                ...state,
                [action.payload.id]: {
                    ...action.payload
                }
            }
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}