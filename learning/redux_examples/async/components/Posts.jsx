import React from 'react';

const Posts = ({posts}) => (
    <ui>
        {posts.map((post, i)=>
            <li key={i}>{post.title}</li>
        )}
    </ui>
);


Posts.propTypes = {
    posts: React.PropTypes.array.isRequired
};

export default Posts;