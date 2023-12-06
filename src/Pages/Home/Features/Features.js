import React, { useEffect, useState } from 'react';
import Feature from './Feature';

const Features = () => {
    const [features, setFeatures] = useState([]);
    useEffect(() => {
        fetch('features.json')
            .then(res => res.json())
            .then(data => setFeatures(data));
    }, [])

    return (
        <div className='text-center'>
            <div className='text-center'>
                <p className='text-orange text-xl font-bold mb-5'>Core Features</p>
                <h1 className="text-dark1 text-5xl font-bold mb-5">
                    Why Choose Us
                </h1>
                <p className="capitalize mb-12">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='flex justify-between mb-12'>
                {
                    features.map(feature => <Feature
                        key={feature._id}
                        feature={feature}
                    ></Feature>)
                }
            </div>
        </div>
    );
};

export default Features;