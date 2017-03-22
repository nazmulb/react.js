import { delay } from 'redux-saga';
import { put, call, takeEvery } from 'redux-saga/effects';
import { increment, INCREMENT_ASYNC } from './actions'

export function* helloSaga() {
    console.log('Hello Sagas!')
}

// Our worker Saga: will perform the async increment task
export function* incAsync() {
    yield call(delay, 1000);
    yield put(increment());
}

// Our watcher Saga: spawn a new incAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
    yield takeEvery(INCREMENT_ASYNC, incAsync);
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
    yield [
        helloSaga(),
        watchIncrementAsync()
    ]
}