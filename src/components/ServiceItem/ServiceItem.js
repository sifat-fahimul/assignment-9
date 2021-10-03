import React from 'react';

const ServiceItem = (props) => {
    const { name, description, students, fee, img } = props.item;
    return (
        <div className='col-6 p-3'>
            <div className="course-card">
                <img className='w-75' src={img} alt="" />
                <h1>{name}</h1>
                <p>{description}</p>
                <h3>Students : {students}</h3>
                <p>Fee : {fee}</p>
            </div>

        </div>
    );
};

export default ServiceItem;