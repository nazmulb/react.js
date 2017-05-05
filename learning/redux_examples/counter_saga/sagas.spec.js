import test from 'tape';

import { put, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { incAsync } from './sagas';
import { increment } from './actions';

test('incAsync saga test', (assert) => {
    const gen = incAsync();

    assert.deepEqual(
        gen.next().value,
        call(delay, 1000),
        'incAsync Saga must call delay(1000)'
    );

    assert.deepEqual(
        gen.next().value,
        put(increment()),
        'incAsync Saga must dispatch an INCREMENT action'
    );

    assert.deepEqual(
        gen.next(),
        { done: true, value: undefined },
        'incAsync Saga must be done'
    );

    assert.end();
});