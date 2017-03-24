import { delay } from 'redux-saga';
import { put, call, take, select, takeEvery } from 'redux-saga/effects';
import { increment, INCREMENT_ASYNC } from './actions'

export function* helloSaga() {
    console.log('Hello Sagas!');
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

export function* watchAndLog(){
    while(true){
        const action = yield take('*');
        const state = yield select();

        console.log('action', action);
        console.log('state after', state);
    }
}


export function* auth(){
    let z = yield call(Math.random);
    z = yield call(parseInt, (z * 1000));
    const y = yield call(Math.pow, z, 2);
    return y;
}

export function* watchLoginFlow(){
    while(true){
        yield take('INCERMENT');
        let r = yield call(auth);

        if(r){
            r = yield call(Math.round, r);
            yield take('DECREMENT');
            r = yield call(Math.max, 100, r);
        }

        console.log(r);
    }
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
    yield [
        helloSaga(),
        watchIncrementAsync(),
        watchAndLog(),
        watchLoginFlow()
    ]
}