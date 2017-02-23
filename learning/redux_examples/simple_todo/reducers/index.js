import { combineReducers } from 'redux';
import { ADD_TODO, SET_VISIBILITY_FILTER, visibilityFilters } from '../actions';

const { SHOW_ALL } = visibilityFilters;

const todos = (state = [], action) => {
    switch(action.type){
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text
                }
            ];

        default:
            return state;
    }
};

const visibilityFilter = (state = SHOW_ALL, action) => {
    switch(action.type){
        case SET_VISIBILITY_FILTER:
            return action.filter;

        default:
            return state;
    }
};

const todoApp = combineReducers({
    visibilityFilter,
    todos
});

export default todoApp;

/*
 {
     visibilityFilter: 'SHOW_ALL'
     todos: []
 }

 {
     visibilityFilter: 'SHOW_ALL'
     todos: [
         {
            text: 'Nedd to send email'
         }
     ]
 }
 */