import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-secondary p-4'>
            <Link className=' text-white text-decoration-none fs-4 border-end p-2 ' to='/home'>Home</Link>
            <Link className=' text-white text-decoration-none fs-4 border-end p-2 ' to='/service'>Service</Link>
            <Link className=' text-white text-decoration-none fs-4 border-end p-2 ' to='/about'>About</Link>
            <Link className=' text-white text-decoration-none fs-4 border-end p-2 ' to='/contact'>Contact</Link>

        </div>
    );
};

export default Header;