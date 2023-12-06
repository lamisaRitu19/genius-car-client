import React from 'react';
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="hero my-32">
            <div className="hero-content flex-col lg:flex-row">
                <div className='relative w-1/2'>
                    <img src={person} alt='' className="w-4/5 h-full rounded-lg shadow-2xl" />
                    <img src={parts} alt='' className="absolute right-5 top-1/2 w-3/5 rounded-lg border-8 border-white shadow-2xl" />
                </div>
                <div className='w-1/2'>
                    <p className='text-orange text-xl font-bold mb-5'>About Us</p>
                    <h1 className="text-dark1 text-5xl font-bold mb-7">
                        We are qualified <br />
                        & of experience <br />
                        in this field
                    </h1>
                    <p className="capitalize mb-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className='capitalize mb-8'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button type='button' className="bg-orange text-white text-lg font-semibold px-7 py-4 mr-5 rounded-md hover:bg-orange hover:text-white">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;