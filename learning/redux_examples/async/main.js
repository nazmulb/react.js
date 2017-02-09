import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import redditHeadlinesApp from './reducers';
import { selectSubreddit, fetchPostsIfNeeded } from './actions';

let middleware = [thunkMiddleware];

if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger())
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers (
    applyMiddleware(...middleware)
);

const store = createStore(redditHeadlinesApp, enhancer);

console.log(store.getState());

store.dispatch(selectSubreddit('news'));
store.dispatch(fetchPostsIfNeeded('news')).then(() => {
    store.dispatch(selectSubreddit('reactjs'));
    store.dispatch(fetchPostsIfNeeded('reactjs')).then(() =>
            console.log(store.getState())
    )
});

/*
let subreddit = 'news';

fetch(`https://www.reddit.com/r/${subreddit}.json`)
    .then(response => {
        if(response.ok) {
            return response.json();
        }

        throw new Error('Network response was not ok.');
    })
    .then(json => json.data.children.map(child => child.data))
    .then(posts => {
        posts.forEach((post) => {
            console.log(post.title);
        });
    })
    .catch(e => { console.log(e.message) });
*/