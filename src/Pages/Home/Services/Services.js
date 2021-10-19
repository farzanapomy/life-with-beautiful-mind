import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div id='services' className='container'>
            <h1 className='my-5'>Our Services</h1>
            <h5 className='mb-5'>Mental Health & Wellness
                Resources The following links are to other websites that may be of interest. However, once you have used these links to leave our site, you should note that UR Medicine and our Department of Psychiatry</h5>

            {
                services.map(service => <Service
                    key={service.id}
                    service={service}

                ></Service>
                )
            }
        </div>
    );
};

export default Services;