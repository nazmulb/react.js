import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import counter from './reducers';
import App from './components/App.jsx';
import { helloSaga } from './sagas';

const initialState = 20;
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers (
    applyMiddleware(...middleware)
);

const store = createStore(counter, initialState, enhancer);

sagaMiddleware.run(helloSaga);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);