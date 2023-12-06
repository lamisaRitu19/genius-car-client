import React from 'react';
import { HiArrowRight } from "react-icons/hi2";
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, img, price, name } = service;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-6 pt-6">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body p-5">
                <h2 className="card-title text-dark2 text-2xl font-bold">{name}</h2>
                <div className='flex items-center'>
                    <p className='text-orange text-xl text-left font-semibold inline'>Price: ${price}</p>
                    <Link to={`/checkout/${_id}`}>
                        <button className="btn bg-white text-orange text-lg font-semibold border-0 py-0 hover:bg-orange hover:text-white">
                            <HiArrowRight></HiArrowRight>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;