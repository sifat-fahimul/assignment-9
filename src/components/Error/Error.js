import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='m-5 p-5'>
            <h1>404</h1>
            <h3 className='mb-5'>page not found</h3>
            <Link to='/home'><button className='btn btn-outline-secondary mt-5'>Go to Home</button></Link>
        </div>
    );
};

export default Error;