import React, { useContext } from 'react';
import login from '../../assets/images/login/login.svg';
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import { setAuthToken } from '../../api/auth';

const Login = () => {
    const { loginUser, googleSignin } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
            .then(result => {
                const user = result.user;
                setAuthToken(user);
            })
            .catch(err => {
                console.error(err);
                toast.error('Error in account login');
            })
    }

    const handleGoogle = () => {
        googleSignin()
            .then(result => {
                const user = result.user;
                console.log(user);
                setAuthToken(user);
                toast.success('The user logged in successfully!');
                navigate(from, { replace: true });
            })
            .catch(err => {
                console.error(err);
                toast.error('Error in account login');
            })
    }

    return (
        <div className="hero w-full mb-36">
            <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={login} alt='' className="w-4/5" />
                </div>
                <div className="card w-full text-dark2 text-center border border-1 border-dark5 px-8 py-12">
                    <h1 className="text-4xl font-semibold">Login</h1>
                    <form onSubmit={handleLogin} className="card-body pb-0">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="Your email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Your password" className="input input-bordered" required />
                            <label className="label">
                                <Link to="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control my-7">
                            <input type="submit" value='Login' className="btn bg-orange hover:bg-dark2 hover:text-orange border-0 text-xl font-semibold" />
                        </div>
                    </form>
                    <p>Or Sign In with</p>
                    <div className='mt-2 mb-5'>
                        <button className="btn rounded-full bg-dark7 border-0 me-2 hover:bg-orange">
                            <FaFacebookF className='text-lg text-dark2'></FaFacebookF>
                        </button>
                        <button className="btn rounded-full bg-dark7 border-0 me-2 hover:bg-orange">
                            <FaLinkedinIn className='text-lg text-dark2'></FaLinkedinIn>
                        </button>
                        <button onClick={handleGoogle} className="btn rounded-full bg-dark7 border-0 hover:bg-orange">
                            <FcGoogle className='text-lg'></FcGoogle>
                        </button>
                    </div>
                    <p className='text-lg'>Do not have an account? <Link to="/signup" className='text-orange font-semibold'>Sign Up</Link></p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Login;