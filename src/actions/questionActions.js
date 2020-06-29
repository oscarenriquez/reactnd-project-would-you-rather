import {ADD_QUESTION, FETCH_QUESTIONS, RECEIVE_QUESTIONS, SAVE_QUESTION} from "../constants/Question";

export const addQuestion = (payload) => ({
    type: ADD_QUESTION,
    payload
})

export const saveQuestion = (payload) => ({
    type: SAVE_QUESTION,
    payload
})

export const receiveQuestions = (payload) => ({
    type: RECEIVE_QUESTIONS,
    payload
})

export const fetchQuestions = {
    type: FETCH_QUESTIONS
}