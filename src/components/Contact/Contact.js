import { faCommentsDollar, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Contact.css'

const Contact = () => {
    const callIcon = <FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon>
    const textIcon = <FontAwesomeIcon icon={faCommentsDollar}></FontAwesomeIcon>
    return (
        <div>
            <div className='contact-bg'>
                <div className="container mt-5 text-white pt-5">
                    <div className="mt-5 pt-5">
                        <h1>Get in Touch</h1>
                        <p>Want to get in touch? We'd love to have from you. Here's haw you can reach us.</p>
                    </div>


                </div>

            </div>
            <div className="container ">
                <div className=" row  m-2">
                    <div className="col-6 custom-container">
                        <div className="custom-cart">
                            <span className='fs-2'>{callIcon}</span>
                            <h3>Talk to Us</h3>
                            <p>Talk To Us is our annual awareness-raising campaign. Every July, our branches hold events in their communities to talk about their services.</p>
                            <p className='mt-4 text-success f'>+00 1865 15454</p>

                        </div>
                    </div>
                    <div className="col-6 custom-container">
                        <div className="custom-cart">
                            <span className='fs-2'>{textIcon}</span>
                            <h3>Contact Student Query</h3>
                            <p>The Student Enquiries Centre are piloting a live chat service from Tuesday 17th August to support students who have a question about their enrolment or pre-enrolment and need a quick answer. </p>
                            <button className='btn btn-outline-danger mt-2'>Contact support</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact; <h1>this is contact</h1>