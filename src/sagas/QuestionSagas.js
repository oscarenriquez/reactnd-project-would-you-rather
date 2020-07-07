import {ADD_QUESTION, FETCH_QUESTIONS, SAVE_ANSWER} from "../constants/Question";
import {put, takeEvery, fork, call} from "redux-saga/effects";
import * as Api from "../api/_DATA"
import {fetchQuestions, receiveQuestions, saveQuestion} from "../actions/questionActions";
import {addQuestionToUser} from "../actions/userActions";

/**
 * Saga to fetch questions from the API
 * @returns generator
 */
function* fetchQuestionsSaga() {
    try {
        const questions = yield call(Api._getQuestions);
        yield put(receiveQuestions(questions));
    } catch (e) {
        console.warn("[fetchQuestionsSaga] error fetching questions", e)
        alert("Error fetching questions, please try again later!")
    }
}

/**
 * Saga to save question answer and fetch the complete list of questions
 * @param action
 * @returns generator
 */
function* saveAnswerSaga(action) {
    try {
        yield call(Api._saveQuestionAnswer, action.payload);
        yield put(fetchQuestions)
    } catch (e) {
        console.warn("[saveQuestionSaga] error ", e)
        alert("Error saving the answer, please try again later!")
    }
}

/**
 * Saga to Add and Save a new question
 * @param action
 * @returns generator
 */
function* addQuestionSaga({payload}) {
    try {
        const question = yield call(Api._saveQuestion, payload);
        yield put(saveQuestion(question));
        yield put(addQuestionToUser(payload.author, question.id))
    } catch (e) {
        console.warn("[fetchQuestionsSaga] error ", e)
        alert("Error adding new question, please try again later!")
    }
}

function* watchFetchQuestions() {
    yield takeEvery(FETCH_QUESTIONS, fetchQuestionsSaga)
}

function* watchAnswerQuestion() {
    yield takeEvery(SAVE_ANSWER, saveAnswerSaga)
}

function* watchAddQuestion() {
    yield takeEvery(ADD_QUESTION, addQuestionSaga)
}

export default function* questionSagas() {
    yield fork(watchFetchQuestions)
    yield fork(watchAnswerQuestion)
    yield fork(watchAddQuestion)
}