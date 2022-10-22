import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthProvaider } from '../AuthContext/AuthContext';




const Header = () => {

const [profile, setProfile] = useState(false)

    const {user, userSignOut} = useContext(AuthProvaider);

    const { photoURL } = user;


    const signOuthandelar = ()=>{
        userSignOut()
        setProfile(false)
        console.log('user sign out');
    }


    return (
        <header className="p-4 bg-gray-200 text-gray-900 sticky top-0">
            <div className="container flex justify-between items-center h-16 mx-auto px-20">
                <div>
                    <div className='flex justify-center items-center'>
                    <Link to='/'><h1 className='text-red-600 text-3xl font-bold font-serif'>Dragon News</h1></Link>
                   
                    </div>
                </div>

                <div className={`${user ? 'hidden' : 'block'}`}>
                    <Link to='/login'><button className='bg-blue-600 text-white px-8 py-2 text-xl rounded-md'>Login</button></Link>
                </div>

                <div className={`${user ? 'flex' : 'hidden'} justify-center items-center`}>
                    <NavLink className="bg-red-600 py-2 px-5 mr-3 text-white rounded-lg"> <span><i className="fa-solid fa-plus"></i></span> Advertise</NavLink>
                    <div className='flex justify-center items-center relative'>
                        
                    
                        <div onClick={()=>setProfile(!profile)} className=' flex justify-center items-center border-2 border-black w-[40px] cursor-pointer h-[40px] rounded-full'>

                            <span className={`${user.photoURL ? 'hidden' : 'relative'}`}>
                                <i className="fa-regular fa-user text-2xl"></i>
                            </span>
                        
                            <img className={`${user.photoURL ? 'relative' : 'hidden'} rounded-full`}  src={user.photoURL} alt="" />

                        </div>
                        
                        
                        <div className={` ${profile ? 'absolute' : 'hidden' } rounded-lg border border-black top-[40px] w-[150px] bg-white p-2 left-[-20px]`}>
                            <Link to='update-profile'><button className=' font-bold text-blue-600'>Update profile</button></Link>
                            <button onClick={signOuthandelar} to='update-profile' className=' font-bold text-red-400 hover:text-red-600 '>Log Out</button>
                        </div>
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