import React from 'react';
import './Post.css'
import { Link } from 'react-router-dom';

const Post = ({post}) => {
    const {id, body, title} = post
    return (
        <div className='post'>
            <h3>Id: {id}</h3>
            <h2>{title}</h2>
            <Link to={`/post/${id}`}>Show post details</Link>
        </div>
    );
};

export default Post;