import React from 'react';
import'./friend.css'
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    // console.log(friend);
    const {email, name, id, phone} = friend
    return (
        <div className='friend'>
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p><Link to={`/friend/${id}`}>Details</Link></p>
        </div>
    );
};

export default Friend;