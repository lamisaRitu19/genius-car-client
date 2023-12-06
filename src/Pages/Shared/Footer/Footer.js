import React from 'react';
import logo from '../../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { AiOutlineGoogle, AiFillTwitterCircle, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
    return (
        <footer className="footer px-36 py-32 bg-dark1 text-white">
            <div>
                <img src={logo} alt="" className='mb-5' />
                <p>Edwin Diaz is a software and web<br /> technologies engineer, a life coach<br /> trainer who is also a serial .</p>
                <div className='mt-5'>
                    <Link to='/' role="button" className="btn rounded-full bg-dark12 border-0 me-2 hover:bg-orange">
                        <AiOutlineGoogle className='text-lg'></AiOutlineGoogle>
                    </Link>
                    <Link to='/' role="button" className="btn rounded-full bg-dark12 border-0 me-2 hover:bg-orange">
                        <AiFillTwitterCircle className='text-lg'></AiFillTwitterCircle>
                    </Link>
                    <Link to='/' role="button" className="btn rounded-full bg-dark12 border-0 me-2 hover:bg-orange">
                        <AiFillInstagram className='text-lg'></AiFillInstagram>
                    </Link>
                    <Link to='/' role="button" className="btn rounded-full bg-dark12 border-0 hover:bg-orange">
                        <AiFillLinkedin className='text-lg'></AiFillLinkedin>
                    </Link>
                </div>
            </div>
            <div>
                <span className="text-white text-xl font-semibold mb-10">About</span>
                <a href="/" className="link link-hover">Home</a>
                <a href="/" className="link link-hover">Services</a>
                <a href="/" className="link link-hover">Contact</a>
            </div>
            <div>
                <span className="text-white text-xl font-semibold mb-10">Company</span>
                <a href="/" className="link link-hover">Why Car Doctor</a>
                <a href="/" className="link link-hover">About</a>
            </div>
            <div>
                <span className="text-white text-xl font-semibold mb-10">Support</span>
                <a href="/" className="link link-hover">Support Center</a>
                <a href="/" className="link link-hover">Feedback</a>
                <a href="/" className="link link-hover">Accessibility</a>
            </div>
        </footer>
    );
};

export default Footer;