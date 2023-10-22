import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData()
    const navigate = useNavigate()

    const handleGoBack = ()=>{
            navigate(-1)
    }
    return (
        <div>
            <h3>Details about this person</h3>
            <h4>Name: {friend.name}</h4>
            <p>Phone: {friend.phone}</p>
            <button onClick={handleGoBack}>Go Back</button>

        </div>
    );
};

export default FriendDetails;