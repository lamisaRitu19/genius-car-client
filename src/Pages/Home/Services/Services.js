import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div className='text-center'>
            <div className='text-center'>
                <p className='text-orange text-xl font-bold mb-5'>Services</p>
                <h1 className="text-dark1 text-5xl font-bold mb-5">
                    Our Service Area
                </h1>
                <p className="capitalize mb-12">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-12'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <button type='button' className="border border-orange text-orange text-lg font-semibold px-7 py-4 mb-32 rounded-md hover:bg-orange hover:text-white">More Services</button>
        </div>
    );
};

export default Services;