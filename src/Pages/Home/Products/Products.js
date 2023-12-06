import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return (
        <div className='text-center'>
            <div className='text-center'>
                <p className='text-orange text-xl font-bold mb-5'>Popular Products</p>
                <h1 className="text-dark1 text-5xl font-bold mb-5">
                    Browse Our Products
                </h1>
                <p className="capitalize mb-12">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-12'>
                {
                    products.map(product => <ProductCard
                        key={product._id}
                        product={product}
                    ></ProductCard>)
                }
            </div>
            <button type='button' className="border border-orange text-orange text-lg font-semibold px-7 py-4 mb-32 rounded-md hover:bg-orange hover:text-white">More Products</button>
        </div>
    );
};

export default Products;