import React, { useEffect, useState } from 'react';
import ServiceItem from '../ServiceItem/ServiceItem';

const Service = () => {
    const [serviceItems, setServiceItems] = useState([]);
    useEffect(() => {
        fetch('fackdb.JSON')
            .then(res => res.json())
            .then(data => setServiceItems(data))
    }, [])

    return (
        <div>
            <h1>Service And Courses</h1>
            <div className="container">
                <div className="row">
                    {
                        serviceItems.map(serviceItem => <ServiceItem
                            item={serviceItem}
                            key={serviceItem.id}
                        ></ServiceItem>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Service;