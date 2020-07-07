import {ADD_QUESTION_USER, RECEIVE_USERS} from "../constants/User";

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
        case ADD_QUESTION_USER:
            const {user, questionId} = action
            return {
                ...state,
                [user] : {
                    ...state[user],
                    questions: state[user].questions.concat(questionId)
                }
            }
        default:
            return state
    }
}