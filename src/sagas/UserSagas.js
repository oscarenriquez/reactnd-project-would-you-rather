import {FETCH_USERS} from "../constants/User";
import {put, takeEvery, fork, call} from "redux-saga/effects";
import * as Api from "../api/_DATA"
import {receiveUsers} from "../actions/userActions";

/**
 * Saga to fetch the list of users
 * @returns {Generator<<"CALL", CallEffectDescriptor>|<"PUT", PutEffectDescriptor<{payload: *, type: string}>>, void, *>}
 */
function* fetchUsersSaga() {
    try {
        const users = yield call(Api._getUsers);
        yield put(receiveUsers(users));
    } catch (e) {
        console.warn("[fetchUsersSaga] error fetching users")
        alert("Error fetching users, please try again later!")
    }
}

function* watchFetchUsers() {
    yield takeEvery(FETCH_USERS, fetchUsersSaga)
}

export default function* userSagas() {
    yield fork(watchFetchUsers)
}