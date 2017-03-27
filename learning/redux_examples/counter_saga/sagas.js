import { delay } from 'redux-saga';
import { fork, put, call, cancel, take, select, takeEvery } from 'redux-saga/effects';
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

export function rands(t){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve(Math.random());
        }, t);
    });
}

var r = -1;

export function* auth(){
    let z = yield call(rands, 5000);
    z = yield call(parseInt, (z * 1000));
    z = yield call(Math.pow, z, 2);
    r = yield call(Math.round, z);
    yield console.log('inc: '+r);
}

export function* watchLoginFlow(){
    while(true){
        yield take('INCERMENT');
        const task = yield fork(auth);
        const action = yield take('DECREMENT');

        if (action.type === 'DECREMENT') {
            yield cancel(task);
        }

        r = yield (r*2);
        yield console.log('dec: '+r);
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