import { createStore } from 'redux';
import { addTodo, setVisibilityFilter, visibilityFilters } from './actions';
import todoApp from './reducers';

const store = createStore(todoApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

console.log(store.getState());

let unsubscribe = store.subscribe(()=>{
    console.log(store.getState());
});

store.dispatch(addTodo('Need to send an email'));

store.dispatch(addTodo('Need to pray'));

store.dispatch(setVisibilityFilter(visibilityFilters.SHOW_ACTIVE));

unsubscribe();