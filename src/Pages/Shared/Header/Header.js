import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logoutUser } = useContext(AuthContext);

    const handleLogout = () => {
        logoutUser()
            .then()
            .catch()
    }

    const menuItems = <>
        <li className='text-lg font-semibold'><Link to='/'>Home</Link></li>
        <li className='text-lg font-semibold'><Link to='/'>About</Link></li>
        <li className='text-lg font-semibold'><Link to='/'>Services</Link></li>
        <li className='text-lg font-semibold'><Link to='/'>Contact</Link></li>
        {
            user?.email ?
                <>
                    <li className='text-lg font-semibold'><Link to='/orders'>Orders</Link></li>
                    <li className='text-lg font-semibold'><button onClick={handleLogout} className='btn-ghost'>Sign Out</button></li>
                </>
                :
                <li className='text-lg font-semibold'><Link to='/login'>Login</Link></li>
        }
    </>

    return (
        <div className="navbar h-40 px-40 bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case h-20">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-dark2">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <button type='button' className="border border-orange text-orange text-lg font-semibold px-7 py-4 rounded-md hover:bg-orange hover:text-white">Appointment</button>
            </div>
        </div>
    );
};

export default Header;