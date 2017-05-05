import { combineReducers } from 'redux';
import postsBySubreddit from './postsBySubreddit';
import selectedSubreddit from './selectedSubreddit';

const redditHeadlinesApp = combineReducers({
    postsBySubreddit,
    selectedSubreddit
});

export default redditHeadlinesApp;