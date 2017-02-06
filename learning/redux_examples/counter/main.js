import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import counter from './reducers';
import App from './components/App.jsx';

let initialState = 20;
let store = createStore(counter, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);

/*
console.log(store.getState());

let unsubscribe = store.subscribe(()=>{
    console.log(store.getState());
});

store.dispatch({type:'INCREMENT'});
store.dispatch({type:'INCREMENT'});
store.dispatch({type:'DECREMENT'});
store.dispatch({type:'INCREMENT'});

unsubscribe();
*/