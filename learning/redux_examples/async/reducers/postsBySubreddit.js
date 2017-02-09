import { INVALIDATE_SUBREDDIT, REQUEST_POSTS, RECEIVE_POSTS } from '../actions';

let initialPostState = {
    isFetching: false,
    didInvalidate: false,
    items: []
};


let posts = (state=initialPostState, action) => {

    switch(action.type){
        case INVALIDATE_SUBREDDIT:
            return Object.assign({}, state, {
                didInvalidate: true
            });

        case REQUEST_POSTS:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            });

        case RECEIVE_POSTS:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                items: action.posts,
                lastUpdated: action.receivedAt
            });

        default:
            return state;
    }
};


let postsBySubreddit = (state={}, action) => {
    switch(action.type){
        case INVALIDATE_SUBREDDIT:
        case REQUEST_POSTS:
        case RECEIVE_POSTS:
            return Object.assign({}, state, {
                [action.subreddit]: posts(state[action.subreddit], action)
            });

        default:
            return state;
    }
};

export default postsBySubreddit;