import {ADD_QUESTION, FETCH_QUESTIONS, RECEIVE_QUESTIONS, SAVE_ANSWER, SAVE_QUESTION} from "../constants/Question";

/**
 * Action Creator addQuestion
 * @param payload
 * @returns {{payload: *, type: string}}
 */
export const addQuestion = (payload) => ({
    type: ADD_QUESTION,
    payload
})

/**
 * Action Creator saveQuestion
 * @param payload
 * @returns {{payload: *, type: string}}
 */
export const saveQuestion = (payload) => ({
    type: SAVE_QUESTION,
    payload
})

/**
 * Action Creator saveAnswer
 * @param payload
 * @returns {{payload: *, type: string}}
 */
export const saveAnswer = (payload) => ({
    type: SAVE_ANSWER,
    payload
})

/**
 * Action Creator receiveQuestions
 * @param payload
 * @returns {{payload: *, type: string}}
 */
export const receiveQuestions = (payload) => ({
    type: RECEIVE_QUESTIONS,
    payload
})

/**
 * Action FETCH_QUESTIONS
 * @type {{type: string}}
 */
export const fetchQuestions = {
    type: FETCH_QUESTIONS
}