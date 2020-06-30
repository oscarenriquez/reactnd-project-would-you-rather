import {applyMiddleware, compose, createStore} from "redux";
import createSagaMiddleware from "redux-saga"
import createReducer from "../reducers";
import logger from "../utils/logger";
import rootSaga from "../sagas";

/**
 * Configure Redux Store
 * @returns {Store<unknown, Action>}
 */
export default function configureStore() {
    const sagaMiddleware = createSagaMiddleware()
    const store = createStore(
        createReducer(),
        compose(
            applyMiddleware(logger, sagaMiddleware)
        )
    );
    sagaMiddleware.run(rootSaga)
    return store;
}