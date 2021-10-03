import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import './Home.css'

const Home = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./customDB.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>
            <div className='bg-img'>
                <div className=" container">
                    <div className="col-md-6 ms-5 ps-5 text-start ">
                        <p className='text-warning pt-5'>Learn and Achieve</p>
                        <h1 className='text-white'>Find the best teaching and Educate your children.The terminology has proved difficult, and there was no universal definition before ISCED divided the period primary.</h1>
                        <br />
                        <button className='btn btn-outline-success text-white'> Learn More</button>
                    </div>
                    <div className="col-md-6"></div>
                </div>
            </div>
            <h1 className='p-5 text-white bg-image '>Services</h1>
            <div className="container">
                <div className="row">
                    {
                        courses.map(course => <Course
                            key={course.id}
                            course={course}
                        ></Course>)
                    }
                </div>

            </div>
        </div>

    );
};

export default Home;