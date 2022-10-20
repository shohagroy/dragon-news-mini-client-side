import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className="p-4 bg-white text-gray-900 sticky top-0">
            <div className="container flex justify-between h-16 mx-auto px-20">
                <div>
                    <div className='flex justify-center items-center'>
                    <Link to='/'><h1 className='text-red-600 text-3xl font-bold font-serif'>Dragon News</h1></Link>
                   
                    </div>
                </div>

                <div className='flex justify-center items-center'>
                <NavLink className="bg-blue-600 py-3 px-10 mx-1 text-white rounded-lg">News</NavLink>
                    <NavLink className="bg-red-600 py-3 px-10 mx-1 text-white rounded-lg"> <span><i className="fa-solid fa-plus"></i></span> Advertise</NavLink>
                    <div>
                        <img className='bg-red-400 w-[70px] h-[70px] rounded-full' src="" alt="" />
                    </div>
                </div>
                    
                
                <button className="p-4 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-gray-900">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Header;