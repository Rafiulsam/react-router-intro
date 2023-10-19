import React from 'react';

const Post = ({post}) => {
    const {id, body, title} = post
    return (
        <div>
            <h4>Here is a post</h4>
            <h3>Id: {id}</h3>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    );
};

export default Post;