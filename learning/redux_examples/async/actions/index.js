export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT';
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT';
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

export const selectSubreddit = subreddit => ({
    type: SELECT_SUBREDDIT,
    subreddit
});

export const invalidateSubreddit = subreddit => ({
    type: INVALIDATE_SUBREDDIT,
    subreddit
});

export const requestPosts = subreddit => ({
    type: REQUEST_POSTS,
    subreddit
});

export const receivePosts = (subreddit, json) => ({
    type: RECEIVE_POSTS,
    subreddit,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
});


const fetchPosts = subreddit => dispatch => {
    dispatch(requestPosts(subreddit));

    return fetch(`https://www.reddit.com/r/${subreddit}.json`)
        .then(response => {
            if(response.ok) {
                return response.json();
            }

            throw new Error('Network response was not ok.');
        })
        .then(json => dispatch(receivePosts(subreddit, json)))
        .catch(e => { console.log(e.message) });
};


const shouldFetchPosts = (state, subreddit) => {
    const posts = state.postsBySubreddit[subreddit];

    if(!posts)
        return true;
    else if(posts.isFetching)
        return false;


    return posts.didInvalidate;
};

export const fetchPostsIfNeeded = subreddit => (dispatch, getState) => {
    if(shouldFetchPosts(getState(), subreddit))
        return dispatch(fetchPosts(subreddit));


    return Promise.resolve();
};