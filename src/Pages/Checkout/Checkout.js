import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import checkoutImg from '../../assets/images/checkout/checkout.png';
import './Checkout.css';
import { toast } from 'react-hot-toast';

const Checkout = () => {
    const { _id, name, price } = useLoaderData();
    const { user } = useContext(AuthContext);

    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;
        const customerName = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;
        const message = form.message.value;

        const order = {
            service: _id,
            serviceName: name,
            price,
            customer: customerName,
            email,
            phone,
            message,
            status: 'Pending'
        }

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Your order placed successfully!');
                    form.reset();
                }
            })
            .catch(err => console.error(err))
    }

    return (
        <div className='text-center'>
            <div className='relative'>
                <div className="hero h-72 checkout-image rounded-lg" style={{ backgroundImage: `url(${checkoutImg})` }}>
                    {/* <div className=""></div> */}
                </div>
                <div className="hero-content text-left absolute top-1/3 left-28 opacity-100">
                    <h1 className="text-white text-5xl font-bold">Check Out</h1>
                </div>
            </div>

            <h1 className="text-dark1 text-4xl font-bold mt-10 mb-4">{name}</h1>
            <h4 className='text-2xl mb-10'>Price: ${price}</h4>
            <form onSubmit={handlePlaceOrder} className='bg-dark7 p-24 rounded-lg mb-32'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6'>
                    <input name="firstName" type="text" placeholder="First Name" className="input w-full" />
                    <input name="lastName" type="text" placeholder="Last Name" className="input w-full" />
                    <input name="phone" type="text" placeholder="Your Phone" className="input w-full" />
                    <input name="email" type="text" placeholder="Your Email" defaultValue={user?.email} className="input w-full" readOnly />
                </div>
                <textarea name="message" className="textarea h-24 w-full mb-6" placeholder="Your Message"></textarea>
                <input type="submit" className='btn bg-orange text-white text-xl font-semibold border-0 w-full hover:bg-orange' value="Order Confirm" id="" />
            </form>
        </div>
    );
};

export default Checkout;