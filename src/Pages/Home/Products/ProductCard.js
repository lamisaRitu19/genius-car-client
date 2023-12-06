import React from 'react';
import { HiStar } from "react-icons/hi2";

const ProductCard = ({ product }) => {
    const { img, price, name } = product;
    return (
        <div className="card w-96 border border-1 border-dark5 p-6">
            <figure>
                <img src={img} alt="Shoes" className="bg-dark7 rounded-xl p-8" />
            </figure>
            <div className="card-body text-center p-5">
                <div className='flex justify-center mb-3'>
                    <HiStar className='text-amber text-lg'></HiStar>
                    <HiStar className='text-amber text-lg'></HiStar>
                    <HiStar className='text-amber text-lg'></HiStar>
                    <HiStar className='text-amber text-lg'></HiStar>
                    <HiStar className='text-amber text-lg'></HiStar>
                </div>
                <h2 className="text-dark2 text-2xl font-bold">{name}</h2>
                <p className='text-orange text-xl font-semibold inline'>${price}.00</p>
            </div>
        </div>
    );
};

export default ProductCard;