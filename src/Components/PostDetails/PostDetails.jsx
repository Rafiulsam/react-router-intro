import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData()
    console.log(post);
    return (
        <div>
            <h3>Details of a post</h3>
            <p>{post.body}</p>
        </div>
    );
};

export default PostDetails;