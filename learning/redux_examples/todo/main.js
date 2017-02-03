import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers';
import App from './components/App';

let store = createStore(todoApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);

/*

//import { addTodo, toggleTodo, setVisibilityFilter } from './actions';

// Log the initial state
console.log(store.getState());

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
);

// Dispatch some actions
store.dispatch(addTodo('Need to sleep'));
store.dispatch(addTodo('Need to finish breakfast'));
store.dispatch(toggleTodo(1));
store.dispatch(setVisibilityFilter('SHOW_COMPLETED'));

// Stop listening to state updates
unsubscribe();
*/