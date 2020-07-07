import {ADD_QUESTION_USER, FETCH_USERS, RECEIVE_USERS} from "../constants/User";

/**
 * Action Creator receiveUsers
 * @param payload
 * @returns {{payload: *, type: string}}
 */
export const receiveUsers = (payload) => ({
    type: RECEIVE_USERS,
    payload
})

/**
 * Action
 * @type {{type: string}}
 */
export const fetchUsers = {
    type: FETCH_USERS
}

/**
 * Action creator to create the relationship between the question and user
 * @param user
 * @param questionId
 * @returns {{questionId: *, type: string, user: *}}
 */
export const addQuestionToUser = (user, questionId) => ({
    type: ADD_QUESTION_USER,
    user,
    questionId
})