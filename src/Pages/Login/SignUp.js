import React from 'react';
import login from '../../assets/images/login/login.svg';
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';
import { setAuthToken } from '../../api/auth';

const SignUp = () => {
    const { createUser, updateUser, googleSignin } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        if (password !== confirmPassword) {
            console.error('Passwords do not match');
            return;
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                handleUserProfile(name);
                console.log(user);
                setAuthToken(user);
                toast.success('The user is successfully created!');
                form.reset();
                navigate('/');
            })
            .catch(err => {
                console.error(err);
                toast.error('Error in account creation');
            })
    }

    const handleUserProfile = name => {
        const profile = {
            displayName: name
        }

        updateUser(profile)
            .then(() => { })
            .catch(err => console.error(err))
    }

    const handleGoogle = () => {
        googleSignin()
            .then(result => {
                const user = result.user;
                console.log(user);
                setAuthToken(user);
                toast.success('The user is successfully created!');
                navigate('/');
            })
            .catch(err => {
                console.error(err);
                toast.error('Error in account creation');
            })
    }

    return (
        <div className="hero w-full mb-36">
            <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={login} alt='' className="w-4/5" />
                </div>
                <div className="card w-full text-dark2 text-center border border-1 border-dark5 px-8 py-12">
                    <h1 className="text-4xl font-semibold">Sign Up</h1>
                    <form onSubmit={handleSignUp} className="card-body pb-0">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your name" className="input input-bordered" required />
                        </div>
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
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Confirm Password</span>
                            </label>
                            <input type="password" name='confirmPassword' placeholder="Confirm password" className="input input-bordered" required />
                        </div>
                        <div className="form-control my-7">
                            <input type="submit" value='Sign Up' className="btn bg-orange hover:bg-dark2 hover:text-orange border-0 text-xl font-semibold" />
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
                    <p className='text-lg'>Already have an account? <Link to="/login" className='text-orange font-semibold'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;