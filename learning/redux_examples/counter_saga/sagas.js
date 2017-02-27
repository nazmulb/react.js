import { delay } from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';
import { increment, INCREMENT_ASYNC } from './actions'

export function* helloSaga() {
    console.log('Hello Sagas!')
}

// Our worker Saga: will perform the async increment task
export function* incrementAsync() {
    yield delay(1000);
    yield put(increment());
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
    yield takeEvery(INCREMENT_ASYNC, incrementAsync);
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
    yield [
        helloSaga(),
        watchIncrementAsync()
    ]
}