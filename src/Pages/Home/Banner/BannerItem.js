import React from 'react';
import './BannerItem.css';

const BannerItem = ({ slide }) => {
    const { image, id, prev, next } = slide;
    console.log(id, prev, next);
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carousel-image'>
                <img src={image} alt='' className="w-full rounded-xl" />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
                <h1 className='text-6xl font-bold text-white'>
                    Affordable <br />
                    Price for car <br />
                    Servicing
                </h1>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24 w-2/5 top-1/2">
                <p className='text-xl text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 left-24 w-2/5 top-3/4">
                <button type='button' className="bg-orange text-white text-lg font-semibold px-7 py-4 mr-5 rounded-md hover:bg-orange hover:text-white">Discover More</button>
                <button type='button' className="border border-white text-white text-lg font-semibold px-7 py-4 rounded-md hover:bg-white hover:text-orange">Latest Project</button>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 right-12 bottom-3">
                <a href={`#slide${prev}`} className="btn btn-circle bg-dark2 mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle border-0 bg-orange text-white hover:bg-white hover:text-orange">❯</a>
            </div>
        </div>
    );
};

export default BannerItem;