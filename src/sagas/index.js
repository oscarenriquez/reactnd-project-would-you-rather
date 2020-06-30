import {all,fork} from "redux-saga/effects"
import questionSagas from "./QuestionSagas"
import userSagas from "./UserSagas";

/**
 * Root Saga
 * @returns {Generator<<"ALL", <"FORK", ForkEffectDescriptor>>, void, *>}
 */
export default function* rootSaga() {
    yield all([
        fork(questionSagas),
        fork(userSagas)
    ])
}