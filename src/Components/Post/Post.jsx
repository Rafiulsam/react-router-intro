import React from 'react';
import './Post.css'
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const {id, title} = post
     const navigate = useNavigate()
    const handleNavigation = ()=>{
            navigate(`/post/${id}`)
    }
    return (
        <div className='post'>
            <h3>ID: {id}</h3>
            <h3>{title}</h3>
            <Link to={`/post/${id}`}>Show post details</Link>
            <button onClick={handleNavigation}>Show details btn</button>
        </div>
    );
};

export default Post;