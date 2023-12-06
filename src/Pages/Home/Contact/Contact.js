import React from 'react';
import { HiCalendarDays, HiPhone, HiMapPin } from "react-icons/hi2";

const Contact = () => {
    return (
        <div className='bg-dark1 text-white flex justify-around rounded-xl py-24 mb-36'>
            <div className='flex items-center'>
                <HiCalendarDays className='text-orange text-4xl mr-5'></HiCalendarDays>
                <div>
                    <p className='font-medium'>We are open Monday-Friday</p>
                    <h4 className='text-2xl font-bold'>7:00 am - 9:00 pm</h4>
                </div>
            </div>
            <div className='flex items-center'>
                <HiPhone className='text-orange text-4xl mr-5'></HiPhone>
                <div>
                    <p className='font-medium'>Have a question?</p>
                    <h4 className='text-2xl font-bold'>+2546 251 2658</h4>
                </div>
            </div>
            <div className='flex items-center'>
                <HiMapPin className='text-orange text-4xl mr-5'></HiMapPin>
                <div>
                    <p className='font-medium'>Need a repair? our address</p>
                    <h4 className='text-2xl font-bold'>Liza Street, New York</h4>
                </div>
            </div>
        </div>
    );
};

export default Contact;