import {ADD_QUESTION, FETCH_QUESTIONS, SAVE_ANSWER} from "../constants/Question";
import {put, takeEvery, fork, call} from "redux-saga/effects";
import * as Api from "../api/_DATA"
import {fetchQuestions, receiveQuestions, saveQuestion} from "../actions/questionActions";

/**
 * Saga to fetch questions from the API
 * @returns {Generator<<"CALL", CallEffectDescriptor>|<"PUT", PutEffectDescriptor<{payload: *, type: string}>>, void, *>}
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
 * @returns {Generator<<"CALL", CallEffectDescriptor>|<"PUT", PutEffectDescriptor<{type: string}>>, void, *>}
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
 * @returns {Generator<<"CALL", CallEffectDescriptor>|<"PUT", PutEffectDescriptor<{payload: *, type: string}>>, void, *>}
 */
function* addQuestionSaga(action) {
    try {
        const question = yield call(Api._saveQuestion, action.payload);
        yield put(saveQuestion(question));
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