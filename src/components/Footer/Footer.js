import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    const icon = <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
    return (
        <div className='footer text-secondary p-5'>
            <div className=" row">
                <div className="col-md-5">
                    <h2>PrimaryEdu</h2>
                    <p>Great lesson ideas and lesson plans for ESL teachers! Educators can customize lesson plans to best.</p>
                </div>
                <div className="col-md-2">
                    <h3>Navigation</h3>
                    <Link className=' text-white text-decoration-none p-2 ' to='/home'>Home</Link>
                    <br />
                    <Link className=' text-white text-decoration-none p-2 ' to='/service'>Service</Link>
                    <br />
                    <Link className=' text-white text-decoration-none p-2 ' to='/about'>About</Link>
                    <br />
                    <Link className=' text-white text-decoration-none  p-2 ' to='/contact'>Contact</Link>
                </div>
                <div className="col-md-5 mb-5">
                    <h2>Subscribe</h2>
                    <div>
                        <input type="text" placeholder='type your email' className='p-1 mb-3' />
                        <span className="text-success ms-3 fs-5">{icon}</span>
                    </div>
                    <p>Get the latest news and updates right at your inbox.</p>
                </div>
                <hr />
                <p>all right reserved by | <span className='text-success'>Sifat Fahimul</span> | © 2021</p>
            </div>
        </div>
    );
};

export default Footer;